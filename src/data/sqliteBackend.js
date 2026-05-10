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
    _getRawDb: getDb
  };
}
