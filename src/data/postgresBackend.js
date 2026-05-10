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
    async close() {
      await pool.end();
    }
  };
}

function inferSsl(connectionString) {
  if (typeof connectionString !== "string") return undefined;
  if (connectionString.includes("sslmode=disable")) return false;
  if (connectionString.includes("sslmode=require") || connectionString.includes("supabase") || connectionString.includes("neon")) {
    return { rejectUnauthorized: false };
  }
  return undefined;
}
