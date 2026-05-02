import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";

test("creates a Grade 6 program with core subjects and two enrichment tracks", () => {
  const plan = createProgramPlan(
    {
      id: "student-test",
      firstName: "Avery",
      gradeLevel: 6,
      interests: ["science"],
      selectedEnrichmentTracks: ["healthWellness", "mediaLiteracy"],
      activityPreferences: {
        outdoorAllowed: true
      }
    },
    {
      allowedRewards: ["device", "park"],
      friendInvitesEnabled: true,
      teacherSharingEnabled: true
    }
  );

  assert.equal(plan.curriculum.gradeLevel, 6);
  assert.equal(plan.curriculum.weeks.length, 8);
  assert.equal(plan.weeklyMissionPlans.length, 8);
  assert.equal(plan.weeklyMissionPlans[0].missions.length, 5);
  assert.equal(plan.curriculum.coreSubjects.length, 6);
  assert.deepEqual(
    plan.curriculum.selectedEnrichmentTracks.map((track) => track.label),
    ["Health & Wellness", "Media Literacy"]
  );
  assert.ok(plan.dailyMissionPreview.bodyCheck.some((prompt) => prompt.includes("outdoor")));
  assert.ok(plan.dailyMissionPreview.lessons[0].masteryCheck);
  assert.ok(plan.parentSummary.parentApprovalsNeeded.includes("Friend invitations"));
  assert.equal(plan.parentSummary.totalPlannedMissions, 40);
});
