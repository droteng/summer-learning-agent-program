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

