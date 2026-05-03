import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { DatabaseSync } from "node:sqlite";

const dbPath = join(process.cwd(), "data", "local.sqlite");

let db;

export function getLocalDb() {
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
    `);
  }

  return db;
}

export function loadProgressSnapshot(studentId) {
  const row = getLocalDb()
    .prepare("SELECT progress_json FROM progress_snapshots WHERE student_id = ?")
    .get(studentId);

  if (!row) {
    return null;
  }

  return JSON.parse(row.progress_json);
}

export function saveProgressSnapshot({ studentId, progress }) {
  const updatedAt = new Date().toISOString();

  getLocalDb()
    .prepare(
      `INSERT INTO progress_snapshots (student_id, progress_json, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(student_id)
       DO UPDATE SET progress_json = excluded.progress_json, updated_at = excluded.updated_at`
    )
    .run(studentId, JSON.stringify(progress), updatedAt);

  return {
    progress,
    updatedAt
  };
}

export function loadProfileSnapshot(profileId) {
  const row = getLocalDb()
    .prepare("SELECT profile_json FROM profile_snapshots WHERE profile_id = ?")
    .get(profileId);

  if (!row) {
    return null;
  }

  return JSON.parse(row.profile_json);
}

export function saveProfileSnapshot({ profileId, profile }) {
  const updatedAt = new Date().toISOString();

  getLocalDb()
    .prepare(
      `INSERT INTO profile_snapshots (profile_id, profile_json, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(profile_id)
       DO UPDATE SET profile_json = excluded.profile_json, updated_at = excluded.updated_at`
    )
    .run(profileId, JSON.stringify(profile), updatedAt);

  return {
    profile,
    updatedAt
  };
}

export function loadFamilyAccount(accountId = "local-family") {
  const row = getLocalDb()
    .prepare("SELECT account_json FROM family_accounts WHERE account_id = ?")
    .get(accountId);

  if (!row) {
    return null;
  }

  return JSON.parse(row.account_json);
}

export function saveFamilyAccount({ accountId = "local-family", account }) {
  const updatedAt = new Date().toISOString();
  const nextAccount = {
    ...account,
    id: accountId,
    updatedAt
  };

  getLocalDb()
    .prepare(
      `INSERT INTO family_accounts (account_id, account_json, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(account_id)
       DO UPDATE SET account_json = excluded.account_json, updated_at = excluded.updated_at`
    )
    .run(accountId, JSON.stringify(nextAccount), updatedAt);

  return {
    account: nextAccount,
    updatedAt
  };
}
