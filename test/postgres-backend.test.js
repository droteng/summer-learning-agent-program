import assert from "node:assert/strict";
import test from "node:test";
import { createPostgresBackend } from "../src/data/postgresBackend.js";
import { getDb, resetDb, setBackendFactory } from "../src/data/db.js";

function createMockPool() {
  const calls = [];
  const rowsByQuery = new Map();
  return {
    setNextRows(matcher, rows) {
      rowsByQuery.set(matcher, rows);
    },
    calls,
    async query(text, params = []) {
      calls.push({ text, params });
      for (const [matcher, rows] of rowsByQuery.entries()) {
        if (typeof matcher === "string" ? text.includes(matcher) : matcher.test(text)) {
          return { rows };
        }
      }
      return { rows: [] };
    },
    async end() {}
  };
}

test("creates schema once and pings successfully", async () => {
  const pool = createMockPool();
  pool.setNextRows("SELECT 1 AS ok", [{ ok: 1 }]);
  const backend = createPostgresBackend({ pool });

  const ok1 = await backend.ping();
  const ok2 = await backend.ping();
  assert.equal(ok1, true);
  assert.equal(ok2, true);

  const createTableCalls = pool.calls.filter((c) => c.text.includes("CREATE TABLE"));
  assert.equal(createTableCalls.length, 1, "schema should be created exactly once");
});

test("ping returns false when pool throws", async () => {
  const failingPool = {
    async query() {
      throw new Error("ECONNREFUSED");
    },
    async end() {}
  };
  const backend = createPostgresBackend({ pool: failingPool });
  assert.equal(await backend.ping(), false);
});

test("loads progress snapshot from JSONB column", async () => {
  const pool = createMockPool();
  pool.setNextRows("FROM progress_snapshots", [
    { progress_json: { completedMissionIds: ["w1d1"], xp: 20 } }
  ]);
  const backend = createPostgresBackend({ pool });
  const result = await backend.loadProgressSnapshot("child-1");
  assert.deepEqual(result, { completedMissionIds: ["w1d1"], xp: 20 });
});

test("returns null when no progress row exists", async () => {
  const pool = createMockPool();
  const backend = createPostgresBackend({ pool });
  const result = await backend.loadProgressSnapshot("missing-child");
  assert.equal(result, null);
});

test("saveProgressSnapshot upserts via ON CONFLICT", async () => {
  const pool = createMockPool();
  const backend = createPostgresBackend({ pool });
  await backend.saveProgressSnapshot({ studentId: "child-1", progress: { xp: 10 } });

  const insertCall = pool.calls.find((c) => c.text.includes("INSERT INTO progress_snapshots"));
  assert.ok(insertCall);
  assert.match(insertCall.text, /ON CONFLICT \(student_id\)/);
  assert.equal(insertCall.params[0], "child-1");
  assert.equal(insertCall.params[1], JSON.stringify({ xp: 10 }));
});

test("auth session expiry is enforced before returning the row", async () => {
  const pool = createMockPool();
  const expired = new Date(Date.now() - 60_000).toISOString();
  pool.setNextRows("FROM auth_sessions", [{ session_json: { id: "s" }, expires_at: expired }]);
  const backend = createPostgresBackend({ pool });
  const result = await backend.loadAuthSession("s");
  assert.equal(result, null);
  const deleteCall = pool.calls.find((c) => c.text.includes("DELETE FROM auth_sessions"));
  assert.ok(deleteCall, "expired session should be deleted automatically");
});

test("backend factory override returns the injected backend", async () => {
  let pinged = false;
  const fake = {
    name: "fake",
    async ping() {
      pinged = true;
      return true;
    }
  };
  setBackendFactory(() => fake);
  try {
    const backend = await getDb();
    assert.equal(backend.name, "fake");
    await backend.ping();
    assert.equal(pinged, true);
  } finally {
    setBackendFactory(null);
    resetDb();
  }
});

test("createPostgresBackend rejects when no pool and no connection string", () => {
  assert.throws(() => createPostgresBackend({}), /requires_connection_string_or_pool/);
});
