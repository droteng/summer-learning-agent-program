import assert from "node:assert/strict";
import test from "node:test";
import { createDiagnosticQuest, summarizeDiagnosticResults } from "../src/agents/diagnosticAgent.js";

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

test("summarizes diagnostic answers into parent review priorities", () => {
  const quest = createDiagnosticQuest({
    firstName: "Avery",
    gradeLevel: 6
  });
  const summary = summarizeDiagnosticResults({
    quest,
    answers: {
      "math-ratio": "Because 6 is twice 3, I need twice 2 cups of fruit, so 4 cups.",
      "ela-evidence": "The game is exciting because each level adds a new challenge and makes me think.",
      "coding-steps": "First get bread. Then spread peanut butter. Then put the slices together.",
      "science-fair-test": "I would change sunlight and measure plant height.",
      "history-cause-effect": "The event changed rules because people wanted better choices."
    }
  });

  assert.equal(summary.status, "ready_for_parent_review");
  assert.equal(summary.answeredCount, 5);
  assert.ok(summary.strengths.length > 0);
  assert.ok(summary.parentNextSteps.some((step) => step.includes("Praise")));
});
