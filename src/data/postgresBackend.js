// Postgres backend. Same interface as sqliteBackend so call sites are
// agnostic to which one is active. Uses the standard `pg` driver because
// it works on Vercel, Render, Fly, and self-hosted Node alike.
//
// Schema is created idempotently on first connection so deploys can boot
// against a fresh database without a separate migration step. For larger
// schema changes, switch to a real migration runner (Drizzle, Prisma, or
// raw .sql files via `psql -f`).
//
// JSONB is preferred over TEXT for the json columns so Postgres can index
// and query into them later. Behavior matches the SQLite backend's stored
// shape (parsed JSON returned to callers).

import pg from "pg";

const SCHEMA_SQL = `
  CREATE TABLE IF NOT EXISTS progress_snapshots (
    student_id TEXT PRIMARY KEY,
    progress_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS profile_snapshots (
    profile_id TEXT PRIMARY KEY,
    profile_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS family_accounts (
    account_id TEXT PRIMARY KEY,
    account_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS auth_sessions (
    session_id TEXT PRIMARY KEY,
    session_json JSONB NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS consent_records (
    student_id TEXT PRIMARY KEY,
    records_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS erasure_audit (
    audit_id TEXT PRIMARY KEY,
    student_id TEXT NOT NULL,
    audit_json JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL
  );

  CREATE INDEX IF NOT EXISTS erasure_audit_student_idx
    ON erasure_audit(student_id);

  CREATE TABLE IF NOT EXISTS subscriptions (
    parent_email TEXT PRIMARY KEY,
    subscription_json JSONB NOT NULL,
    stripe_customer_id TEXT,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE INDEX IF NOT EXISTS subscriptions_customer_idx
    ON subscriptions(stripe_customer_id);

  CREATE TABLE IF NOT EXISTS weekly_report_narratives (
    parent_email TEXT NOT NULL,
    week_number INTEGER NOT NULL,
    narrative_json JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL,
    PRIMARY KEY (parent_email, week_number)
  );

  CREATE TABLE IF NOT EXISTS report_batches (
    batch_id TEXT PRIMARY KEY,
    status TEXT NOT NULL,
    submission_json JSONB NOT NULL,
    last_result_json JSONB,
    submitted_at TIMESTAMPTZ NOT NULL,
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL
  );

  CREATE TABLE IF NOT EXISTS generated_images (
    cache_key TEXT PRIMARY KEY,
    intent TEXT NOT NULL,
    subject TEXT,
    prompt TEXT NOT NULL,
    aspect_ratio TEXT NOT NULL,
    url TEXT NOT NULL,
    provider TEXT NOT NULL,
    model TEXT,
    width_px INTEGER,
    height_px INTEGER,
    estimated_cost_cents NUMERIC,
    fallback BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL
  );

  CREATE INDEX IF NOT EXISTS generated_images_intent_idx
    ON generated_images(intent);

  CREATE TABLE IF NOT EXISTS image_budget_usage (
    month_key TEXT PRIMARY KEY,
    spent_cents NUMERIC NOT NULL,
    call_count INTEGER NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL
  );
`;

export function createPostgresBackend({
  connectionString,
  pool: providedPool,
  ssl
} = {}) {
  if (!providedPool && !connectionString) {
    throw new Error("postgres_backend_requires_connection_string_or_pool");
  }

  const pool =
    providedPool ??
    new pg.Pool({
      connectionString,
      ssl: ssl ?? inferSsl(connectionString),
      max: 5
    });

  let schemaReady = false;
  async function ensureSchema() {
    if (schemaReady) return;
    await pool.query(SCHEMA_SQL);
    schemaReady = true;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  return {
    name: "postgres",
    async ping() {
      try {
        await ensureSchema();
        const result = await pool.query("SELECT 1 AS ok");
        return result.rows[0]?.ok === 1;
      } catch {
        return false;
      }
    },
    async loadProgressSnapshot(studentId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT progress_json FROM progress_snapshots WHERE student_id = $1",
        [studentId]
      );
      return result.rows[0] ? result.rows[0].progress_json : null;
    },
    async saveProgressSnapshot({ studentId, progress }) {
      await ensureSchema();
      const updatedAt = nowIso();
      await pool.query(
        `INSERT INTO progress_snapshots (student_id, progress_json, updated_at)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (student_id)
         DO UPDATE SET progress_json = EXCLUDED.progress_json, updated_at = EXCLUDED.updated_at`,
        [studentId, JSON.stringify(progress), updatedAt]
      );
      return { progress, updatedAt };
    },
    async loadProfileSnapshot(profileId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT profile_json FROM profile_snapshots WHERE profile_id = $1",
        [profileId]
      );
      return result.rows[0] ? result.rows[0].profile_json : null;
    },
    async saveProfileSnapshot({ profileId, profile }) {
      await ensureSchema();
      const updatedAt = nowIso();
      await pool.query(
        `INSERT INTO profile_snapshots (profile_id, profile_json, updated_at)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (profile_id)
         DO UPDATE SET profile_json = EXCLUDED.profile_json, updated_at = EXCLUDED.updated_at`,
        [profileId, JSON.stringify(profile), updatedAt]
      );
      return { profile, updatedAt };
    },
    async loadFamilyAccount(accountId = "local-family") {
      await ensureSchema();
      const result = await pool.query(
        "SELECT account_json FROM family_accounts WHERE account_id = $1",
        [accountId]
      );
      return result.rows[0] ? result.rows[0].account_json : null;
    },
    async saveFamilyAccount({ accountId = "local-family", account }) {
      await ensureSchema();
      const updatedAt = nowIso();
      const nextAccount = { ...account, id: accountId, updatedAt };
      await pool.query(
        `INSERT INTO family_accounts (account_id, account_json, updated_at)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (account_id)
         DO UPDATE SET account_json = EXCLUDED.account_json, updated_at = EXCLUDED.updated_at`,
        [accountId, JSON.stringify(nextAccount), updatedAt]
      );
      return { account: nextAccount, updatedAt };
    },
    async loadAuthSession(sessionId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT session_json, expires_at FROM auth_sessions WHERE session_id = $1",
        [sessionId]
      );
      const row = result.rows[0];
      if (!row) return null;
      const expiresAt = row.expires_at instanceof Date ? row.expires_at : new Date(row.expires_at);
      if (expiresAt.getTime() <= Date.now()) {
        await this.deleteAuthSession(sessionId);
        return null;
      }
      return row.session_json;
    },
    async saveAuthSession(session) {
      await ensureSchema();
      const updatedAt = nowIso();
      await pool.query(
        `INSERT INTO auth_sessions (session_id, session_json, expires_at, updated_at)
         VALUES ($1, $2::jsonb, $3, $4)
         ON CONFLICT (session_id)
         DO UPDATE SET session_json = EXCLUDED.session_json, expires_at = EXCLUDED.expires_at, updated_at = EXCLUDED.updated_at`,
        [session.id, JSON.stringify(session), session.expiresAt, updatedAt]
      );
      return { session, updatedAt };
    },
    async deleteAuthSession(sessionId) {
      await ensureSchema();
      await pool.query("DELETE FROM auth_sessions WHERE session_id = $1", [sessionId]);
      return { deleted: true, sessionId };
    },
    async loadConsentRecords(studentId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT records_json FROM consent_records WHERE student_id = $1",
        [studentId]
      );
      return result.rows[0] ? result.rows[0].records_json : [];
    },
    async appendConsentRecord({ studentId, record }) {
      await ensureSchema();
      const existing = await this.loadConsentRecords(studentId);
      const next = [...existing, record];
      const updatedAt = new Date().toISOString();
      await pool.query(
        `INSERT INTO consent_records (student_id, records_json, updated_at)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (student_id)
         DO UPDATE SET records_json = EXCLUDED.records_json, updated_at = EXCLUDED.updated_at`,
        [studentId, JSON.stringify(next), updatedAt]
      );
      return { records: next, updatedAt };
    },
    async replaceConsentRecords({ studentId, records }) {
      await ensureSchema();
      const updatedAt = new Date().toISOString();
      await pool.query(
        `INSERT INTO consent_records (student_id, records_json, updated_at)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (student_id)
         DO UPDATE SET records_json = EXCLUDED.records_json, updated_at = EXCLUDED.updated_at`,
        [studentId, JSON.stringify(records), updatedAt]
      );
      return { records, updatedAt };
    },
    async purgeStudentData(studentId) {
      await ensureSchema();
      const counts = { progress: 0, profile: 0, consent_records: 0, item_grades: 0 };

      const progressRows = await pool.query(
        "SELECT progress_json FROM progress_snapshots WHERE student_id = $1",
        [studentId]
      );
      if (progressRows.rows[0]) {
        counts.item_grades = Object.keys(progressRows.rows[0].progress_json?.itemGrades ?? {}).length;
        const r = await pool.query(
          "DELETE FROM progress_snapshots WHERE student_id = $1",
          [studentId]
        );
        counts.progress = r.rowCount ?? 0;
      }

      const profileResult = await pool.query(
        "DELETE FROM profile_snapshots WHERE profile_id = $1",
        [studentId]
      );
      counts.profile = profileResult.rowCount ?? 0;

      const consentRows = await pool.query(
        "SELECT records_json FROM consent_records WHERE student_id = $1",
        [studentId]
      );
      if (consentRows.rows[0]) {
        const records = consentRows.rows[0].records_json;
        counts.consent_records = Array.isArray(records) ? records.length : 0;
        await pool.query("DELETE FROM consent_records WHERE student_id = $1", [studentId]);
      }

      return counts;
    },
    async saveErasureAudit(record) {
      await ensureSchema();
      const createdAt = new Date().toISOString();
      await pool.query(
        `INSERT INTO erasure_audit (audit_id, student_id, audit_json, created_at)
         VALUES ($1, $2, $3::jsonb, $4)`,
        [record.auditId, record.studentId, JSON.stringify(record), createdAt]
      );
      return { record, createdAt };
    },
    async loadErasureAudits(studentId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT audit_json FROM erasure_audit WHERE student_id = $1 ORDER BY created_at DESC",
        [studentId]
      );
      return result.rows.map((r) => r.audit_json);
    },
    async loadSubscription(parentEmail) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT subscription_json FROM subscriptions WHERE parent_email = $1",
        [parentEmail.toLowerCase()]
      );
      return result.rows[0] ? result.rows[0].subscription_json : null;
    },
    async loadWeeklyReportNarrative({ parentEmail, weekNumber }) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT narrative_json, updated_at FROM weekly_report_narratives WHERE parent_email = $1 AND week_number = $2",
        [parentEmail.toLowerCase(), Number(weekNumber)]
      );
      if (!result.rows[0]) return null;
      const updated = result.rows[0].updated_at;
      return {
        ...result.rows[0].narrative_json,
        updatedAt: updated instanceof Date ? updated.toISOString() : updated
      };
    },
    async saveWeeklyReportNarrative({ parentEmail, weekNumber, narrative }) {
      await ensureSchema();
      const updatedAt = new Date().toISOString();
      await pool.query(
        `INSERT INTO weekly_report_narratives (parent_email, week_number, narrative_json, updated_at)
         VALUES ($1, $2, $3::jsonb, $4)
         ON CONFLICT (parent_email, week_number)
         DO UPDATE SET narrative_json = EXCLUDED.narrative_json, updated_at = EXCLUDED.updated_at`,
        [parentEmail.toLowerCase(), Number(weekNumber), JSON.stringify(narrative), updatedAt]
      );
      return { narrative, updatedAt };
    },
    async loadReportBatch(batchId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT batch_id, status, submission_json, last_result_json, submitted_at, completed_at FROM report_batches WHERE batch_id = $1",
        [batchId]
      );
      const row = result.rows[0];
      if (!row) return null;
      return {
        batchId: row.batch_id,
        status: row.status,
        submission: row.submission_json,
        lastResult: row.last_result_json,
        submittedAt: row.submitted_at instanceof Date ? row.submitted_at.toISOString() : row.submitted_at,
        completedAt: row.completed_at instanceof Date ? row.completed_at.toISOString() : row.completed_at
      };
    },
    async saveReportBatch({ batchId, status, submission, lastResult = null, submittedAt = null, completedAt = null }) {
      await ensureSchema();
      const updatedAt = new Date().toISOString();
      const existing = await this.loadReportBatch(batchId);
      const finalSubmittedAt = submittedAt ?? existing?.submittedAt ?? updatedAt;
      await pool.query(
        `INSERT INTO report_batches (batch_id, status, submission_json, last_result_json, submitted_at, completed_at, updated_at)
         VALUES ($1, $2, $3::jsonb, $4::jsonb, $5, $6, $7)
         ON CONFLICT (batch_id)
         DO UPDATE SET status = EXCLUDED.status,
                       last_result_json = EXCLUDED.last_result_json,
                       completed_at = EXCLUDED.completed_at,
                       updated_at = EXCLUDED.updated_at`,
        [
          batchId,
          status,
          JSON.stringify(submission ?? existing?.submission ?? {}),
          lastResult ? JSON.stringify(lastResult) : null,
          finalSubmittedAt,
          completedAt,
          updatedAt
        ]
      );
      return { batchId, status, updatedAt };
    },
    async loadSubscriptionByCustomerId(stripeCustomerId) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT subscription_json FROM subscriptions WHERE stripe_customer_id = $1",
        [stripeCustomerId]
      );
      return result.rows[0] ? result.rows[0].subscription_json : null;
    },
    async saveSubscription({ parentEmail, subscription }) {
      await ensureSchema();
      const updatedAt = new Date().toISOString();
      const lowerEmail = parentEmail.toLowerCase();
      const merged = { ...subscription, parentEmail: lowerEmail, updatedAt };
      await pool.query(
        `INSERT INTO subscriptions (parent_email, subscription_json, stripe_customer_id, updated_at)
         VALUES ($1, $2::jsonb, $3, $4)
         ON CONFLICT (parent_email)
         DO UPDATE SET subscription_json = EXCLUDED.subscription_json,
                       stripe_customer_id = EXCLUDED.stripe_customer_id,
                       updated_at = EXCLUDED.updated_at`,
        [lowerEmail, JSON.stringify(merged), merged.stripeCustomerId ?? null, updatedAt]
      );
      return { subscription: merged, updatedAt };
    },
    async loadGeneratedImage(cacheKey) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT cache_key, intent, subject, prompt, aspect_ratio, url, provider, model, width_px, height_px, estimated_cost_cents, fallback, created_at FROM generated_images WHERE cache_key = $1",
        [cacheKey]
      );
      const row = result.rows[0];
      if (!row) return null;
      return {
        cacheKey: row.cache_key,
        intent: row.intent,
        subject: row.subject,
        prompt: row.prompt,
        aspectRatio: row.aspect_ratio,
        url: row.url,
        provider: row.provider,
        model: row.model,
        widthPx: row.width_px,
        heightPx: row.height_px,
        estimatedCostCents: Number(row.estimated_cost_cents ?? 0),
        fallback: !!row.fallback,
        createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at
      };
    },
    async saveGeneratedImage(record) {
      await ensureSchema();
      await pool.query(
        `INSERT INTO generated_images (cache_key, intent, subject, prompt, aspect_ratio, url, provider, model, width_px, height_px, estimated_cost_cents, fallback, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         ON CONFLICT (cache_key)
         DO UPDATE SET url = EXCLUDED.url,
                       provider = EXCLUDED.provider,
                       model = EXCLUDED.model,
                       width_px = EXCLUDED.width_px,
                       height_px = EXCLUDED.height_px,
                       estimated_cost_cents = EXCLUDED.estimated_cost_cents,
                       fallback = EXCLUDED.fallback,
                       created_at = EXCLUDED.created_at`,
        [
          record.cacheKey,
          record.intent,
          record.subject ?? null,
          record.prompt,
          record.aspectRatio,
          record.url,
          record.provider,
          record.model ?? null,
          record.widthPx ?? null,
          record.heightPx ?? null,
          record.estimatedCostCents ?? 0,
          record.fallback === true,
          record.createdAt
        ]
      );
      return record;
    },
    async loadImageBudgetUsage(monthKey = currentMonthKey()) {
      await ensureSchema();
      const result = await pool.query(
        "SELECT spent_cents FROM image_budget_usage WHERE month_key = $1",
        [monthKey]
      );
      return result.rows[0] ? Number(result.rows[0].spent_cents) : 0;
    },
    async recordImageBudgetSpend(cents, monthKey = currentMonthKey()) {
      await ensureSchema();
      const updatedAt = new Date().toISOString();
      await pool.query(
        `INSERT INTO image_budget_usage (month_key, spent_cents, call_count, updated_at)
         VALUES ($1, $2, 1, $3)
         ON CONFLICT (month_key)
         DO UPDATE SET spent_cents = image_budget_usage.spent_cents + EXCLUDED.spent_cents,
                       call_count = image_budget_usage.call_count + 1,
                       updated_at = EXCLUDED.updated_at`,
        [monthKey, Number(cents) || 0, updatedAt]
      );
      return { monthKey };
    },
    async close() {
      await pool.end();
    }
  };
}

function currentMonthKey(date = new Date()) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

function inferSsl(connectionString) {
  if (typeof connectionString !== "string") return undefined;
  if (connectionString.includes("sslmode=disable")) return false;
  if (connectionString.includes("sslmode=require") || connectionString.includes("supabase") || connectionString.includes("neon")) {
    return { rejectUnauthorized: false };
  }
  return undefined;
}
