import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { completeMission, createEmptyProgress, summarizeProgress } from "../src/agents/progressAgent.js";
import { createRewardApprovalRequest } from "../src/agents/rewardsAgent.js";

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

test("creates parent approval request for a mission reward", () => {
  const student = {
    id: "reward-test",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "mediaLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const plan = createProgramPlan(student, {
    allowedRewards: ["device", "park"],
    friendInvitesEnabled: true,
    teacherSharingEnabled: true
  });
  const request = createRewardApprovalRequest({
    student,
    mission: plan.dailyMissionPreview,
    requestedReward: "30 minutes of extra parent-approved device time"
  });

  assert.equal(request.status, "needs_parent_approval");
  assert.equal(request.earnedBy.xp, 20);
  assert.ok(request.parentPrompt.includes("Avery"));
});

test("tracks completed mission progress without double counting", () => {
  const student = {
    id: "progress-test",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "mediaLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const plan = createProgramPlan(student, {
    allowedRewards: ["device", "park"],
    friendInvitesEnabled: true,
    teacherSharingEnabled: true
  });
  const mission = plan.weeklyMissionPlans[0].missions[1];
  const empty = createEmptyProgress();
  const once = completeMission({
    progress: empty,
    weekNumber: 1,
    mission
  });
  const twice = completeMission({
    progress: once,
    weekNumber: 1,
    mission
  });
  const summary = summarizeProgress({
    progress: twice,
    totalMissions: 40
  });

  assert.equal(twice.completedMissionIds.length, 1);
  assert.equal(twice.xp, 20);
  assert.equal(twice.masteryStars, 1);
  assert.equal(summary.completionPercent, 3);
});
