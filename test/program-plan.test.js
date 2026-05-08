import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { createWeeklyParentReport } from "../src/agents/parentLiaisonAgent.js";
import { completeMission, createEmptyProgress, saveReflection, summarizeProgress } from "../src/agents/progressAgent.js";
import {
  approveRewardRequest,
  createPendingRewardRequest,
  createRewardApprovalRequest,
  summarizeRewardCenter
} from "../src/agents/rewardsAgent.js";

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

test("tracks reward requests through parent approval", () => {
  const approvalRequest = {
    requestedReward: "Movie night",
    earnedBy: {
      theme: "Explorer Mode",
      dayLabel: "Monday",
      xp: 20,
      masteryStars: 0,
      campCoins: 5
    },
    parentPrompt: "Approve Movie night?"
  };
  const pending = createPendingRewardRequest({
    id: "reward-test",
    approvalRequest,
    requestedBy: "child"
  });
  const approved = approveRewardRequest({ rewardRequest: pending });
  const summary = summarizeRewardCenter([pending, approved]);

  assert.equal(pending.status, "pending_parent");
  assert.equal(approved.status, "approved");
  assert.equal(summary.pendingCount, 1);
  assert.equal(summary.approvedCount, 1);
  assert.ok(summary.suggestedNonScreenRewards.some((reward) => reward.includes("Family")));
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
  const withReflection = saveReflection({
    progress: twice,
    weekNumber: 1,
    dayNumber: 2,
    reflection: " I learned how to explain my answer. "
  });

  assert.equal(twice.completedMissionIds.length, 1);
  assert.equal(twice.xp, 20);
  assert.equal(twice.masteryStars, 1);
  assert.equal(summary.completionPercent, 3);
  assert.equal(withReflection.reflections["week-1-day-2"], "I learned how to explain my answer.");
});

test("creates a weekly parent report from completed missions", () => {
  const student = {
    id: "weekly-report-test",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const plan = createProgramPlan(student, {
    allowedRewards: ["device", "park"],
    friendInvitesEnabled: true,
    teacherSharingEnabled: true
  });
  const report = createWeeklyParentReport({
    student,
    programPlan: plan,
    weekNumber: 1,
    progress: {
      completedMissionIds: ["week-1-day-1", "week-1-day-2"],
      xp: 40,
      masteryStars: 1,
      campCoins: 10,
      reflections: {
        "week-1-day-1": "I made a learning map and explained one algorithm."
      },
      rewardRequests: [
        {
          id: "reward-1",
          status: "pending_parent",
          requestedReward: "Park outing",
          earnedBy: {
            theme: "Explorer Mode",
            dayLabel: "Monday"
          }
        }
      ],
      friendInvites: [
        {
          id: "invite-1",
          status: "approved",
          friendName: "Jordan"
        }
      ]
    }
  });

  assert.equal(report.status, "ready");
  assert.equal(report.completion.completedCount, 2);
  assert.equal(report.completion.totalMissions, 5);
  assert.equal(report.completion.completionPercent, 40);
  assert.equal(report.weeklyEarnings.xp, 40);
  assert.equal(report.weeklyEarnings.masteryStars, 1);
  assert.equal(report.rewards.pendingCount, 1);
  assert.equal(report.invitations.approvedCount, 1);
  assert.ok(report.subjectCoverage.some((item) => item.subject === "ELA/Writing"));
  assert.equal(report.completedMissions[0].reflection, "I made a learning map and explained one algorithm.");
  assert.ok(report.parentNextSteps.some((step) => step.includes("physical activity")));
  assert.ok(report.teacherSummary.includes("Avery completed 2/5 Week 1 missions"));
  assert.ok(report.excludedPrivateData.includes("Private health check answers"));
});
