// SQLite backend. Identical behavior to the original localDb.js — this file
// just exposes the existing logic behind the `db` interface so it can be
// swapped for Postgres in production without touching any call sites.

import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { DatabaseSync } from "node:sqlite";

const DEFAULT_DB_PATH = join(process.cwd(), "data", "local.sqlite");

export function createSqliteBackend({ dbPath = DEFAULT_DB_PATH } = {}) {
  let db = null;

  function getDb() {
    if (!db) {
      mkdirSync(dirname(dbPath), { recursive: true });
      db = new DatabaseSync(dbPath);
      db.exec(`
        CREATE TABLE IF NOT EXISTS progress_snapshots (
          student_id TEXT PRIMARY KEY,
          progress_json TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS profile_snapshots (
          profile_id TEXT PRIMARY KEY,
          profile_json TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS family_accounts (
          account_id TEXT PRIMARY KEY,
          account_json TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS auth_sessions (
          session_id TEXT PRIMARY KEY,
          session_json TEXT NOT NULL,
          expires_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS consent_records (
          student_id TEXT PRIMARY KEY,
          records_json TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS erasure_audit (
          audit_id TEXT PRIMARY KEY,
          student_id TEXT NOT NULL,
          audit_json TEXT NOT NULL,
          created_at TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS erasure_audit_student_idx
          ON erasure_audit(student_id);

        CREATE TABLE IF NOT EXISTS subscriptions (
          parent_email TEXT PRIMARY KEY,
          subscription_json TEXT NOT NULL,
          stripe_customer_id TEXT,
          updated_at TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS subscriptions_customer_idx
          ON subscriptions(stripe_customer_id);

        CREATE TABLE IF NOT EXISTS weekly_report_narratives (
          parent_email TEXT NOT NULL,
          week_number INTEGER NOT NULL,
          narrative_json TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          PRIMARY KEY (parent_email, week_number)
        );

        CREATE TABLE IF NOT EXISTS report_batches (
          batch_id TEXT PRIMARY KEY,
          status TEXT NOT NULL,
          submission_json TEXT NOT NULL,
          last_result_json TEXT,
          submitted_at TEXT NOT NULL,
          completed_at TEXT,
          updated_at TEXT NOT NULL
        );
      `);
    }
    return db;
  }

  return {
    name: "sqlite",
    async ping() {
      try {
        const row = getDb().prepare("SELECT 1 AS ok").get();
        return row?.ok === 1;
      } catch {
        return false;
      }
    },
    loadProgressSnapshot(studentId) {
      const row = getDb().prepare("SELECT progress_json FROM progress_snapshots WHERE student_id = ?").get(studentId);
      return row ? JSON.parse(row.progress_json) : null;
    },
    saveProgressSnapshot({ studentId, progress }) {
      const updatedAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO progress_snapshots (student_id, progress_json, updated_at)
           VALUES (?, ?, ?)
           ON CONFLICT(student_id)
           DO UPDATE SET progress_json = excluded.progress_json, updated_at = excluded.updated_at`
        )
        .run(studentId, JSON.stringify(progress), updatedAt);
      return { progress, updatedAt };
    },
    loadProfileSnapshot(profileId) {
      const row = getDb().prepare("SELECT profile_json FROM profile_snapshots WHERE profile_id = ?").get(profileId);
      return row ? JSON.parse(row.profile_json) : null;
    },
    saveProfileSnapshot({ profileId, profile }) {
      const updatedAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO profile_snapshots (profile_id, profile_json, updated_at)
           VALUES (?, ?, ?)
           ON CONFLICT(profile_id)
           DO UPDATE SET profile_json = excluded.profile_json, updated_at = excluded.updated_at`
        )
        .run(profileId, JSON.stringify(profile), updatedAt);
      return { profile, updatedAt };
    },
    loadFamilyAccount(accountId = "local-family") {
      const row = getDb().prepare("SELECT account_json FROM family_accounts WHERE account_id = ?").get(accountId);
      return row ? JSON.parse(row.account_json) : null;
    },
    saveFamilyAccount({ accountId = "local-family", account }) {
      const updatedAt = new Date().toISOString();
      const nextAccount = { ...account, id: accountId, updatedAt };
      getDb()
        .prepare(
          `INSERT INTO family_accounts (account_id, account_json, updated_at)
           VALUES (?, ?, ?)
           ON CONFLICT(account_id)
           DO UPDATE SET account_json = excluded.account_json, updated_at = excluded.updated_at`
        )
        .run(accountId, JSON.stringify(nextAccount), updatedAt);
      return { account: nextAccount, updatedAt };
    },
    loadAuthSession(sessionId) {
      const row = getDb()
        .prepare("SELECT session_json, expires_at FROM auth_sessions WHERE session_id = ?")
        .get(sessionId);
      if (!row || new Date(row.expires_at).getTime() <= Date.now()) {
        if (row) this.deleteAuthSession(sessionId);
        return null;
      }
      return JSON.parse(row.session_json);
    },
    saveAuthSession(session) {
      const updatedAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO auth_sessions (session_id, session_json, expires_at, updated_at)
           VALUES (?, ?, ?, ?)
           ON CONFLICT(session_id)
           DO UPDATE SET session_json = excluded.session_json, expires_at = excluded.expires_at, updated_at = excluded.updated_at`
        )
        .run(session.id, JSON.stringify(session), session.expiresAt, updatedAt);
      return { session, updatedAt };
    },
    deleteAuthSession(sessionId) {
      getDb().prepare("DELETE FROM auth_sessions WHERE session_id = ?").run(sessionId);
      return { deleted: true, sessionId };
    },
    loadWeeklyReportNarrative({ parentEmail, weekNumber }) {
      const row = getDb()
        .prepare(
          "SELECT narrative_json, updated_at FROM weekly_report_narratives WHERE parent_email = ? AND week_number = ?"
        )
        .get(parentEmail.toLowerCase(), Number(weekNumber));
      if (!row) return null;
      return { ...JSON.parse(row.narrative_json), updatedAt: row.updated_at };
    },
    saveWeeklyReportNarrative({ parentEmail, weekNumber, narrative }) {
      const updatedAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO weekly_report_narratives (parent_email, week_number, narrative_json, updated_at)
           VALUES (?, ?, ?, ?)
           ON CONFLICT(parent_email, week_number)
           DO UPDATE SET narrative_json = excluded.narrative_json, updated_at = excluded.updated_at`
        )
        .run(parentEmail.toLowerCase(), Number(weekNumber), JSON.stringify(narrative), updatedAt);
      return { narrative, updatedAt };
    },
    loadReportBatch(batchId) {
      const row = getDb()
        .prepare(
          "SELECT batch_id, status, submission_json, last_result_json, submitted_at, completed_at FROM report_batches WHERE batch_id = ?"
        )
        .get(batchId);
      if (!row) return null;
      return {
        batchId: row.batch_id,
        status: row.status,
        submission: JSON.parse(row.submission_json),
        lastResult: row.last_result_json ? JSON.parse(row.last_result_json) : null,
        submittedAt: row.submitted_at,
        completedAt: row.completed_at
      };
    },
    saveReportBatch({ batchId, status, submission, lastResult = null, submittedAt = null, completedAt = null }) {
      const updatedAt = new Date().toISOString();
      const existing = this.loadReportBatch(batchId);
      const finalSubmittedAt = submittedAt ?? existing?.submittedAt ?? updatedAt;
      getDb()
        .prepare(
          `INSERT INTO report_batches (batch_id, status, submission_json, last_result_json, submitted_at, completed_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, ?)
           ON CONFLICT(batch_id)
           DO UPDATE SET status = excluded.status,
                         last_result_json = excluded.last_result_json,
                         completed_at = excluded.completed_at,
                         updated_at = excluded.updated_at`
        )
        .run(
          batchId,
          status,
          JSON.stringify(submission ?? existing?.submission ?? {}),
          lastResult ? JSON.stringify(lastResult) : null,
          finalSubmittedAt,
          completedAt,
          updatedAt
        );
      return { batchId, status, updatedAt };
    },
    loadConsentRecords(studentId) {
      const row = getDb().prepare("SELECT records_json FROM consent_records WHERE student_id = ?").get(studentId);
      return row ? JSON.parse(row.records_json) : [];
    },
    appendConsentRecord({ studentId, record }) {
      const existing = this.loadConsentRecords(studentId);
      const next = [...existing, record];
      const updatedAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO consent_records (student_id, records_json, updated_at)
           VALUES (?, ?, ?)
           ON CONFLICT(student_id)
           DO UPDATE SET records_json = excluded.records_json, updated_at = excluded.updated_at`
        )
        .run(studentId, JSON.stringify(next), updatedAt);
      return { records: next, updatedAt };
    },
    replaceConsentRecords({ studentId, records }) {
      const updatedAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO consent_records (student_id, records_json, updated_at)
           VALUES (?, ?, ?)
           ON CONFLICT(student_id)
           DO UPDATE SET records_json = excluded.records_json, updated_at = excluded.updated_at`
        )
        .run(studentId, JSON.stringify(records), updatedAt);
      return { records, updatedAt };
    },
    purgeStudentData(studentId) {
      const db = getDb();
      const counts = { progress: 0, profile: 0, consent_records: 0, item_grades: 0 };

      const progressRow = db
        .prepare("SELECT progress_json FROM progress_snapshots WHERE student_id = ?")
        .get(studentId);
      if (progressRow) {
        try {
          const parsed = JSON.parse(progressRow.progress_json);
          counts.item_grades = Object.keys(parsed.itemGrades ?? {}).length;
        } catch {
          // ignore
        }
        const progressDel = db
          .prepare("DELETE FROM progress_snapshots WHERE student_id = ?")
          .run(studentId);
        counts.progress = progressDel.changes ?? 0;
      }

      const profileDel = db
        .prepare("DELETE FROM profile_snapshots WHERE profile_id = ?")
        .run(studentId);
      counts.profile = profileDel.changes ?? 0;

      const consentRow = db
        .prepare("SELECT records_json FROM consent_records WHERE student_id = ?")
        .get(studentId);
      if (consentRow) {
        try {
          const parsed = JSON.parse(consentRow.records_json);
          counts.consent_records = Array.isArray(parsed) ? parsed.length : 0;
        } catch {
          // ignore
        }
        db.prepare("DELETE FROM consent_records WHERE student_id = ?").run(studentId);
      }

      return counts;
    },
    saveErasureAudit(record) {
      const createdAt = new Date().toISOString();
      getDb()
        .prepare(
          `INSERT INTO erasure_audit (audit_id, student_id, audit_json, created_at)
           VALUES (?, ?, ?, ?)`
        )
        .run(record.auditId, record.studentId, JSON.stringify(record), createdAt);
      return { record, createdAt };
    },
    loadErasureAudits(studentId) {
      const rows = getDb()
        .prepare("SELECT audit_json FROM erasure_audit WHERE student_id = ? ORDER BY created_at DESC")
        .all(studentId);
      return rows.map((r) => JSON.parse(r.audit_json));
    },
    loadSubscription(parentEmail) {
      const row = getDb()
        .prepare("SELECT subscription_json FROM subscriptions WHERE parent_email = ?")
        .get(parentEmail.toLowerCase());
      return row ? JSON.parse(row.subscription_json) : null;
    },
    loadSubscriptionByCustomerId(stripeCustomerId) {
      const row = getDb()
        .prepare("SELECT subscription_json FROM subscriptions WHERE stripe_customer_id = ?")
        .get(stripeCustomerId);
      return row ? JSON.parse(row.subscription_json) : null;
    },
    saveSubscription({ parentEmail, subscription }) {
      const updatedAt = new Date().toISOString();
      const lowerEmail = parentEmail.toLowerCase();
      const merged = { ...subscription, parentEmail: lowerEmail, updatedAt };
      getDb()
        .prepare(
          `INSERT INTO subscriptions (parent_email, subscription_json, stripe_customer_id, updated_at)
           VALUES (?, ?, ?, ?)
           ON CONFLICT(parent_email)
           DO UPDATE SET subscription_json = excluded.subscription_json,
                         stripe_customer_id = excluded.stripe_customer_id,
                         updated_at = excluded.updated_at`
        )
        .run(lowerEmail, JSON.stringify(merged), merged.stripeCustomerId ?? null, updatedAt);
      return { subscription: merged, updatedAt };
    },
    _getRawDb: getDb
  };
}
