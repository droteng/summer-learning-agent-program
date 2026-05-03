import assert from "node:assert/strict";
import test from "node:test";
import { tuneProgramPlan } from "../src/agents/adaptiveTuningAgent.js";
import { createProgramPlan } from "../src/agents/principalAgent.js";

test("tunes lesson tasks from diagnostic readiness", () => {
  const studentProfile = {
    id: "adaptive-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const programPlan = createProgramPlan(studentProfile, {
    allowedRewards: ["device"],
    friendInvitesEnabled: true,
    teacherSharingEnabled: true
  });
  const tuned = tuneProgramPlan({
    programPlan,
    diagnosticSummary: {
      subjectSummaries: [
        { subject: "Math", readiness: "support" },
        { subject: "ELA/Writing", readiness: "standard" },
        { subject: "Coding/Computer Science/AI", readiness: "stretch" }
      ]
    }
  });
  const mathLesson = tuned.dailyMissionPreview.lessons.find((lesson) => lesson.subject === "Math");

  assert.equal(tuned.adaptiveTuning.difficultyOverride, "auto");
  assert.equal(mathLesson.adaptive.mode, "support");
  assert.ok(mathLesson.adaptive.adjustedTask.includes("worked example"));
});

test("parent difficulty override can stretch every tuned subject", () => {
  const studentProfile = {
    id: "override-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const programPlan = createProgramPlan(studentProfile, {
    allowedRewards: ["device"],
    friendInvitesEnabled: true,
    teacherSharingEnabled: true
  });
  const tuned = tuneProgramPlan({
    programPlan,
    difficultyOverride: "stretch",
    diagnosticSummary: {
      subjectSummaries: [
        { subject: "Math", readiness: "support" },
        { subject: "ELA/Writing", readiness: "support" },
        { subject: "Coding/Computer Science/AI", readiness: "support" }
      ]
    }
  });

  assert.equal(tuned.dailyMissionPreview.lessons[0].adaptive.mode, "stretch");
});
