import assert from "node:assert/strict";
import test from "node:test";
import { observability } from "../lib/observability.js";
import { resetConfigCache } from "../lib/config.js";

const originalStdoutWrite = process.stdout.write.bind(process.stdout);
const originalStderrWrite = process.stderr.write.bind(process.stderr);

function captureWrites(fn) {
  const stdout = [];
  const stderr = [];
  process.stdout.write = (chunk) => {
    stdout.push(typeof chunk === "string" ? chunk : chunk.toString());
    return true;
  };
  process.stderr.write = (chunk) => {
    stderr.push(typeof chunk === "string" ? chunk : chunk.toString());
    return true;
  };
  try {
    fn();
  } finally {
    process.stdout.write = originalStdoutWrite;
    process.stderr.write = originalStderrWrite;
  }
  return { stdout, stderr };
}

test("observability is silent in test environment", () => {
  resetConfigCache();
  const { stdout, stderr } = captureWrites(() => {
    observability.capture("user_signed_up", { plan: "family" });
    observability.captureError(new Error("boom"));
    observability.identify("child-1", { gradeLevel: 6 });
  });
  assert.equal(stdout.join(""), "");
  assert.equal(stderr.join(""), "");
});

test("observability emits structured stdout when not silent", async () => {
  resetConfigCache();
  const previous = {
    NODE_ENV: process.env.NODE_ENV,
    OBSERVABILITY_SILENT: process.env.OBSERVABILITY_SILENT
  };
  process.env.NODE_ENV = "development";
  delete process.env.OBSERVABILITY_SILENT;
  try {
    const { stdout } = captureWrites(() => {
      observability.capture("test_event", { count: 3 });
    });
    const line = stdout.join("").trim();
    assert.ok(line.length > 0, "expected an event line on stdout");
    const parsed = JSON.parse(line);
    assert.equal(parsed.type, "event");
    assert.equal(parsed.event, "test_event");
    assert.deepEqual(parsed.props, { count: 3 });
    assert.ok(parsed.ts);
  } finally {
    process.env.NODE_ENV = previous.NODE_ENV ?? "test";
    if (previous.OBSERVABILITY_SILENT !== undefined) {
      process.env.OBSERVABILITY_SILENT = previous.OBSERVABILITY_SILENT;
    }
    resetConfigCache();
  }
});
