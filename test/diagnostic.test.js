import assert from "node:assert/strict";
import test from "node:test";
import { createDiagnosticQuest } from "../src/agents/diagnosticAgent.js";

test("creates a low-pressure Grade 6 diagnostic quest", () => {
  const quest = createDiagnosticQuest({
    firstName: "Avery",
    gradeLevel: 6
  });

  assert.equal(quest.gradeLevel, 6);
  assert.equal(quest.studentName, "Avery");
  assert.ok(quest.parentNote.includes("not a school grade"));
  assert.ok(quest.questions.length >= 6);
  assert.ok(quest.questions.some((question) => question.subject === "Math"));
  assert.ok(quest.questions.some((question) => question.subject === "Health & Wellness"));
});
