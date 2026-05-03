import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";

test("upgrades Week 1 missions with launch-week guidance", () => {
  const plan = createProgramPlan(
    {
      id: "week-one-student",
      firstName: "Avery",
      gradeLevel: 6,
      interests: ["projects"],
      selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
      activityPreferences: {
        outdoorAllowed: true
      }
    },
    {
      allowedRewards: ["movie"],
      friendInvitesEnabled: true,
      teacherSharingEnabled: true
    }
  );
  const mission = plan.weeklyMissionPlans[0].missions[0];

  assert.ok(mission.launchBrief.includes("baseline"));
  assert.ok(mission.parentReview.includes("effort"));
  assert.ok(mission.projectMilestone.includes("learning map"));
  assert.ok(mission.creativeChallenge.includes("learning map"));
});
