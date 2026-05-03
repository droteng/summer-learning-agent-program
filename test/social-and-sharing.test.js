import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { moderateChildMessage } from "../src/agents/safetyModeratorAgent.js";
import {
  approveInvitationRequest,
  createInvitationRequest,
  createLearningSquad
} from "../src/agents/socialCoordinatorAgent.js";
import { createTeacherSharePackage } from "../src/agents/teacherLiaisonAgent.js";

const student = {
  id: "student-test",
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["history"],
  selectedEnrichmentTracks: ["financialLiteracy", "mediaLiteracy"],
  activityPreferences: {
    outdoorAllowed: true
  }
};

const parentPolicy = {
  allowedRewards: ["device", "movie"],
  friendInvitesEnabled: true,
  teacherSharingEnabled: true
};

test("friend invitations require parent approval", () => {
  const request = createInvitationRequest({
    child: student,
    friendName: "Jordan",
    parentPolicy
  });

  assert.equal(request.status, "needs_parent_approval");
  assert.ok(request.safetyRules.some((rule) => rule.includes("parent")));
});

test("parent approval creates a safe friend invite link", () => {
  const request = createInvitationRequest({
    child: student,
    friendName: "Jordan",
    parentPolicy
  });
  const approved = approveInvitationRequest({
    invitationRequest: request,
    baseUrl: "https://learning-squad.ai"
  });

  assert.equal(approved.status, "approved");
  assert.ok(approved.inviteLink.includes("/join/"));
  assert.equal(approved.sharingDefaults.showExactScores, false);
  assert.equal(approved.sharingDefaults.showHealthAnswers, false);
});

test("learning squads hide sensitive details by default", () => {
  const squad = createLearningSquad({
    name: "Summer Builders",
    students: [student, { firstName: "Jordan", gradeLevel: 6 }]
  });

  assert.equal(squad.size, 2);
  assert.equal(squad.visibility.showBadges, true);
  assert.equal(squad.visibility.showExactScores, false);
  assert.equal(squad.visibility.showHealthAnswers, false);
});

test("moderator blocks personal information", () => {
  const result = moderateChildMessage("My phone number is 555-123-4567");

  assert.equal(result.status, "blocked");
  assert.equal(result.parentVisible, true);
});

test("teacher share packages require parent approval", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const blocked = createTeacherSharePackage({
    student,
    programPlan,
    parentApproved: false
  });
  const approved = createTeacherSharePackage({
    student,
    programPlan,
    parentApproved: true
  });

  assert.equal(blocked.status, "blocked");
  assert.equal(approved.status, "ready_to_share");
  assert.ok(approved.excludedByDefault.includes("Private health check answers"));
});

test("teacher share packages can include parent-approved progress evidence", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const approved = createTeacherSharePackage({
    student,
    programPlan,
    parentApproved: true,
    progress: {
      completedMissionIds: ["week-1-day-1"],
      xp: 20,
      masteryStars: 0,
      campCoins: 5,
      reflections: {
        "week-1-day-1": "I learned how to explain an algorithm."
      }
    }
  });

  assert.equal(approved.progressSummary.completedMissionCount, 1);
  assert.equal(approved.progressSummary.completedMissions[0].theme, "Explorer Mode");
  assert.equal(
    approved.progressSummary.completedMissions[0].reflection,
    "I learned how to explain an algorithm."
  );
});
