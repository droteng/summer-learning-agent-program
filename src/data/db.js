// Public data-access entry point. Picks SQLite or Postgres based on
// DATABASE_URL. Re-exports the same async functions the route handlers
// already use so swapping the backend is a config change, not a code
// change.

import { createSqliteBackend } from "./sqliteBackend.js";

let cached = null;
let factoryOverride = null;

// Lets the test suite (and ad-hoc scripts) inject a fake backend without
// touching env vars. Call resetDb() afterwards to clear the cache.
export function setBackendFactory(factory) {
  factoryOverride = factory;
  cached = null;
}

export function resetDb() {
  cached = null;
}

export async function getDb() {
  if (cached) return cached;

  if (factoryOverride) {
    cached = await factoryOverride();
    return cached;
  }

  const url = process.env.DATABASE_URL?.trim();
  if (url && /^postgres(ql)?:\/\//i.test(url)) {
    const { createPostgresBackend } = await import("./postgresBackend.js");
    cached = createPostgresBackend({ connectionString: url });
    return cached;
  }

  cached = createSqliteBackend();
  return cached;
}

// === Re-exports that match the legacy localDb.js signatures ===
//
// Kept async so the Postgres backend can flow through unchanged. SQLite is
// synchronous under the hood but the backend wraps the calls in a Promise
// shape via async functions, so callers are uniform.

export async function loadProgressSnapshot(studentId) {
  return (await getDb()).loadProgressSnapshot(studentId);
}

export async function saveProgressSnapshot(args) {
  return (await getDb()).saveProgressSnapshot(args);
}

export async function loadProfileSnapshot(profileId) {
  return (await getDb()).loadProfileSnapshot(profileId);
}

export async function saveProfileSnapshot(args) {
  return (await getDb()).saveProfileSnapshot(args);
}

export async function loadFamilyAccount(accountId) {
  return (await getDb()).loadFamilyAccount(accountId);
}

export async function saveFamilyAccount(args) {
  return (await getDb()).saveFamilyAccount(args);
}

export async function loadAuthSession(sessionId) {
  return (await getDb()).loadAuthSession(sessionId);
}

export async function saveAuthSession(session) {
  return (await getDb()).saveAuthSession(session);
}

export async function deleteAuthSession(sessionId) {
  return (await getDb()).deleteAuthSession(sessionId);
}

export async function pingDb() {
  return (await getDb()).ping();
}
