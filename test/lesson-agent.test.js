import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { createTeacherLessonGuide } from "../src/agents/lessonAgent.js";

test("creates teacher guidance for a selected mission", () => {
  const studentProfile = {
    id: "lesson-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const plan = createProgramPlan(studentProfile, {
    allowedRewards: ["device"],
    friendInvitesEnabled: false,
    teacherSharingEnabled: true
  });
  const guide = createTeacherLessonGuide({
    mission: plan.dailyMissionPreview,
    studentProfile
  });

  assert.ok(guide.title.includes("Teacher Guide"));
  assert.equal(guide.miniLessons.length, plan.dailyMissionPreview.lessons.length);
  assert.ok(guide.openingMove.includes("Avery"));
  assert.ok(guide.parentTip.includes("Praise"));
});
