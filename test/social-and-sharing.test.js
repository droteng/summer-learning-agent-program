import assert from "node:assert/strict";
import test from "node:test";
import { createAchievementExport } from "../src/agents/achievementAgent.js";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { createPrintableReportPackage } from "../src/agents/printableReportAgent.js";
import { moderateChildMessage } from "../src/agents/safetyModeratorAgent.js";
import {
  approveInvitationRequest,
  createInvitationRequest,
  createLearningSquad,
  createLearningSquadRoom,
  createSquadProjectUpdate
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

test("achievement exports require parent approval", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const blocked = createAchievementExport({
    student,
    programPlan,
    parentApproved: false,
    progress: {
      completedMissionIds: ["week-1-day-1"]
    }
  });

  assert.equal(blocked.status, "blocked");
  assert.ok(blocked.reason.includes("parent approval"));
});

test("achievement exports create transcripts, certificates, badges, and privacy defaults", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const report = createAchievementExport({
    student,
    programPlan,
    parentApproved: true,
    progress: {
      completedMissionIds: ["week-1-day-1", "week-1-day-2", "week-1-day-3", "week-1-day-4", "week-1-day-5"],
      xp: 100,
      masteryStars: 6,
      campCoins: 25,
      reflections: {
        "week-1-day-1": "I explained a learning map.",
        "week-1-day-2": "I compared strategies.",
        "week-1-day-3": "I revised my project."
      },
      friendInvites: [
        {
          id: "invite-1",
          status: "approved",
          friendName: "Jordan"
        }
      ]
    }
  });

  assert.equal(report.status, "ready_to_share");
  assert.equal(report.transcript.completedMissionCount, 5);
  assert.equal(report.transcript.completionPercent, 13);
  assert.equal(report.transcript.weeklyTranscript[0].completionPercent, 100);
  assert.ok(report.certificate.subtitle.includes("Avery"));
  assert.ok(report.badges.some((badge) => badge.name === "Week Finisher"));
  assert.ok(report.badges.some((badge) => badge.name === "Squad Starter"));
  assert.ok(report.portfolioHighlights[0].reflection.includes("learning map"));
  assert.ok(report.schoolShareSummary.includes("Subjects represented"));
  assert.ok(report.excludedByDefault.includes("Private health check answers"));
});

test("learning squad rooms expose shared projects with safe visibility", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const room = createLearningSquadRoom({
    student,
    programPlan,
    weekNumber: 1,
    parentPolicy,
    progress: {
      completedMissionIds: ["week-1-day-1", "week-1-day-2"],
      masteryStars: 5,
      friendInvites: [
        {
          id: "invite-1",
          status: "approved",
          friendName: "Jordan"
        }
      ],
      squadProjectUpdates: [
        {
          id: "update-1",
          status: "allowed",
          author: "Avery",
          message: "I drafted the first project question.",
          parentVisible: true
        }
      ]
    }
  });

  assert.equal(room.status, "ready");
  assert.equal(room.approvedFriendCount, 1);
  assert.equal(room.members.length, 2);
  assert.equal(room.members[1].visibilityNote.includes("parent approves"), true);
  assert.equal(room.visibility.showExactScores, false);
  assert.equal(room.visibility.allowPrivateChildMessages, false);
  assert.equal(room.sharedProject.weekNumber, 1);
  assert.equal(room.projectUpdates.length, 1);
  assert.ok(room.parentControls.some((control) => control.includes("Discord")));
});

test("learning squad rooms respect parent invite settings", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const blocked = createLearningSquadRoom({
    student,
    programPlan,
    parentPolicy: {
      ...parentPolicy,
      friendInvitesEnabled: false
    },
    progress: {}
  });

  assert.equal(blocked.status, "blocked");
});

test("squad project updates are parent-visible and moderated", () => {
  const allowed = createSquadProjectUpdate({
    student,
    message: "I finished the project outline and added one source."
  });
  const blocked = createSquadProjectUpdate({
    student,
    message: "My email is child@example.com"
  });

  assert.equal(allowed.status, "allowed");
  assert.equal(allowed.parentVisible, true);
  assert.equal(allowed.safetyLabel, "Parent-visible project update");
  assert.equal(blocked.status, "blocked");
  assert.equal(blocked.parentVisible, true);
});


test("printable report packages combine reports, transcripts, and squad evidence", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const reportPackage = createPrintableReportPackage({
    student,
    programPlan,
    weekNumber: 1,
    parentPolicy,
    parentApproved: true,
    progress: {
      completedMissionIds: ["week-1-day-1", "week-1-day-2", "week-1-day-3", "week-1-day-4", "week-1-day-5"],
      xp: 100,
      masteryStars: 6,
      campCoins: 25,
      reflections: {
        "week-1-day-1": "I explained a learning map."
      },
      friendInvites: [
        {
          id: "invite-1",
          status: "approved",
          friendName: "Jordan"
        }
      ],
      squadProjectUpdates: [
        {
          id: "update-1",
          status: "allowed",
          author: "Avery",
          message: "I drafted the project question.",
          parentVisible: true
        }
      ]
    }
  });

  assert.equal(reportPackage.status, "ready_to_print");
  assert.ok(reportPackage.sections.includes("Weekly parent report"));
  assert.equal(reportPackage.weeklyReport.completion.completedCount, 5);
  assert.equal(reportPackage.achievementExport.transcript.completedMissionCount, 5);
  assert.equal(reportPackage.squadRoom.projectUpdates.length, 1);
  assert.ok(reportPackage.privacyNotice.some((item) => item.includes("health")));
});

test("printable report packages require parent approval", () => {
  const programPlan = createProgramPlan(student, parentPolicy);
  const blocked = createPrintableReportPackage({
    student,
    programPlan,
    parentPolicy,
    parentApproved: false,
    progress: {}
  });

  assert.equal(blocked.status, "blocked");
});
