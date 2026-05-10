// Backward-compatible re-export. New code should import from `./db.js` for
// clarity. This shim is kept so existing imports continue to resolve while
// the codebase migrates.

export {
  loadProgressSnapshot,
  saveProgressSnapshot,
  loadProfileSnapshot,
  saveProfileSnapshot,
  loadFamilyAccount,
  saveFamilyAccount,
  loadAuthSession,
  saveAuthSession,
  deleteAuthSession,
  pingDb,
  getDb,
  setBackendFactory,
  resetDb
} from "./db.js";

// Legacy helper used only by the old health-route impl. Remove once
// no callers reference it.
export async function getLocalDb() {
  const { getDb } = await import("./db.js");
  const backend = await getDb();
  return backend._getRawDb ? backend._getRawDb() : backend;
}
