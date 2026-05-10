import assert from "node:assert/strict";
import test from "node:test";
import {
  applyGradeResultToMastery,
  applyGradeToMastery,
  createEmptySkillMastery,
  isSkillMastered,
  masteryToDiagnosticSummary,
  summarizeMasteryBySubject,
  MASTERY_THRESHOLDS
} from "../src/agents/masteryAgent.js";
import { tuneProgramPlan } from "../src/agents/adaptiveTuningAgent.js";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { recordGradedItem, createEmptyProgress } from "../src/agents/progressAgent.js";

test("EWMA updates skill level toward latest score", () => {
  let mastery = createEmptySkillMastery();
  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 1 });
  assert.equal(mastery["Math:ratios"].level, 1);

  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 0 });
  // 1 * 0.7 + 0 * 0.3 = 0.7
  assert.ok(Math.abs(mastery["Math:ratios"].level - 0.7) < 1e-9);
  assert.equal(mastery["Math:ratios"].attempts, 2);
  assert.equal(mastery["Math:ratios"].correct, 1);
});

test("subject summary aggregates across skills and assigns readiness", () => {
  let mastery = createEmptySkillMastery();
  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 1 });
  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 1 });
  mastery = applyGradeToMastery({ mastery, skillId: "Math:fractions", score: 0.6 });
  mastery = applyGradeToMastery({ mastery, skillId: "ELA/Writing:claim-evidence", score: 0.2 });

  const subjects = summarizeMasteryBySubject(mastery);
  const math = subjects.find((s) => s.subject === "Math");
  const ela = subjects.find((s) => s.subject === "ELA/Writing");

  assert.equal(math.skillCount, 2);
  assert.ok(math.meanLevel > MASTERY_THRESHOLDS.SUPPORT);
  assert.ok(["standard", "stretch"].includes(math.readiness));
  assert.equal(ela.readiness, "support");
});

test("masteryToDiagnosticSummary feeds the existing adaptive tuner", () => {
  let mastery = createEmptySkillMastery();
  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 0 });
  mastery = applyGradeToMastery({ mastery, skillId: "Math:fractions", score: 0.2 });
  mastery = applyGradeToMastery({ mastery, skillId: "Coding/Computer Science/AI:debugging", score: 1 });

  const studentProfile = {
    id: "mastery-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness"],
    activityPreferences: { outdoorAllowed: true }
  };
  const programPlan = createProgramPlan(studentProfile, {
    allowedRewards: ["device"],
    friendInvitesEnabled: false,
    teacherSharingEnabled: true
  });
  const tuned = tuneProgramPlan({
    programPlan,
    diagnosticSummary: masteryToDiagnosticSummary(mastery)
  });
  const mathLesson = tuned.dailyMissionPreview.lessons.find((l) => l.subject === "Math");
  assert.equal(mathLesson.adaptive.mode, "support");
});

test("isSkillMastered requires at least 2 attempts and high level", () => {
  let mastery = createEmptySkillMastery();
  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 1 });
  assert.equal(isSkillMastered(mastery, "Math:ratios"), false, "single attempt is not enough");

  mastery = applyGradeToMastery({ mastery, skillId: "Math:ratios", score: 1 });
  assert.equal(isSkillMastered(mastery, "Math:ratios"), true);
});

test("recordGradedItem updates skill mastery and item grade history", () => {
  const item = { id: "x.q1", subject: "Math", topicTag: "ratios", type: "multiple_choice" };
  const grade = { score: 1, correct: true, attempts: 1, rubricLevel: null, feedback: "Correct!", itemId: "x.q1", type: "multiple_choice" };
  const next = recordGradedItem({ progress: createEmptyProgress(), item, gradeResult: grade });
  assert.equal(next.skillMastery["Math:ratios"].level, 1);
  assert.equal(next.itemGrades["x.q1"].score, 1);
  assert.equal(next.itemGrades["x.q1"].correct, true);
});

test("applyGradeResultToMastery composes with gradeItem output", () => {
  const item = { id: "x.q2", subject: "Science", topicTag: "ecosystems" };
  const gradeResult = { score: 0.6 };
  const mastery = applyGradeResultToMastery({ mastery: {}, item, gradeResult });
  assert.equal(mastery["Science:ecosystems"].level, 0.6);
});
