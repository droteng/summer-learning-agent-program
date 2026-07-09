import assert from "node:assert/strict";
import test from "node:test";
import { signupParent, SUPPORTED_GRADES } from "../src/agents/authAgent.js";
import { loadFamilyAccount } from "../src/data/db.js";

function uniqueEmail(tag) {
  return `grade-test-${tag}-${process.hrtime.bigint()}@example.com`;
}

test("signup stores the selected grade for the child", async () => {
  for (const grade of SUPPORTED_GRADES) {
    const result = await signupParent({
      email: uniqueEmail(grade),
      password: "test-password-123",
      parentName: "Grade Tester",
      childName: "Kid",
      childPin: "4321",
      gradeLevel: grade
    });
    assert.equal(result.status, "ok", `grade ${grade} signup should succeed`);
    const account = await loadFamilyAccount(result.account.id);
    assert.equal(account.children[0].gradeLevel, grade);
  }
});

test("signup clamps an out-of-range or missing grade to the Grade 6 default", async () => {
  for (const bad of [undefined, null, 0, 4, 8, 99, "banana"]) {
    const result = await signupParent({
      email: uniqueEmail(`bad-${String(bad)}`),
      password: "test-password-123",
      parentName: "Grade Tester",
      childName: "Kid",
      childPin: "4321",
      gradeLevel: bad
    });
    assert.equal(result.status, "ok");
    const account = await loadFamilyAccount(result.account.id);
    assert.equal(account.children[0].gradeLevel, 6, `grade ${String(bad)} should fall back to 6`);
  }
});
