import { moderateChildMessage, moderateChildMessageWithLlm } from "./safetyModeratorAgent.js";

export function createInvitationRequest({ child, friendName, parentPolicy }) {
  if (!parentPolicy.friendInvitesEnabled) {
    return {
      status: "blocked",
      reason: "Friend invitations are disabled by the parent."
    };
  }

  return {
    status: "needs_parent_approval",
    requestedBy: child.firstName,
    friendName,
    nextStep: "Parent reviews the request and sends the invite link to the friend's parent.",
    safetyRules: [
      "No child can directly enroll another child.",
      "The friend's parent must approve participation.",
      "Progress visibility starts limited by default.",
      "Private child-to-child direct messages are disabled in the MVP."
    ]
  };
}

export function approveInvitationRequest({ invitationRequest, approvedBy = "parent", baseUrl = "https://drsparkacademy.com" }) {
  const token = createInviteToken(invitationRequest.requestedBy, invitationRequest.friendName);

  return {
    ...invitationRequest,
    status: "approved",
    approvedBy,
    inviteLink: `${baseUrl}/join/${token}`,
    parentMessage: `A parent-approved learning squad invitation is ready for ${invitationRequest.friendName}'s parent.`,
    sharingDefaults: {
      showBadges: true,
      showCompletedMissions: true,
      showExactScores: false,
      showPrivateReflections: false,
      showHealthAnswers: false,
      showFaithReflections: false
    }
  };
}

export function createLearningSquad({ name, students }) {
  return {
    name,
    size: students.length,
    students: students.map((student) => ({
      firstName: student.firstName,
      gradeLevel: student.gradeLevel
    })),
    visibility: {
      showCompletedMissions: true,
      showBadges: true,
      showExactScores: false,
      showHealthAnswers: false,
      showFaithReflections: false
    },
    collaborationRoles: ["Researcher", "Writer", "Designer", "Presenter", "Fact-checker", "Team Captain"],
    groupChallenge: "Complete a shared project and present it during a parent-approved showcase."
  };
}

function createInviteToken(requestedBy = "student", friendName = "friend") {
  return `${requestedBy}-${friendName}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export function createLearningSquadRoom({ student, programPlan, progress, weekNumber = 1, parentPolicy }) {
  if (!parentPolicy.friendInvitesEnabled) {
    return {
      status: "blocked",
      reason: "Learning Squads are disabled by the parent."
    };
  }

  const approvedInvites = (progress?.friendInvites ?? []).filter((invite) => invite.status === "approved");
  const selectedWeekNumber = Number(weekNumber ?? 1);
  const weeklyPlan = programPlan.weeklyMissionPlans.find((plan) => plan.week.weekNumber === selectedWeekNumber) ??
    programPlan.weeklyMissionPlans[0];
  const completedMissionCount = (progress?.completedMissionIds ?? []).length;
  const projectUpdates = (progress?.squadProjectUpdates ?? []).filter((update) => update.status === "allowed");

  return {
    status: "ready",
    name: approvedInvites.length > 0 ? student.firstName + "'s Learning Squad" : "Learning Squad preview",
    approvedFriendCount: approvedInvites.length,
    nextStep: approvedInvites.length > 0
      ? "Use the shared project room for parent-visible project updates."
      : "Approve at least one friend invite to turn this preview into a shared room.",
    sharedProject: {
      weekNumber: weeklyPlan.week.weekNumber,
      theme: weeklyPlan.week.theme,
      project: weeklyPlan.week.project,
      prompt: "Work on the same weekly project, then share one parent-visible update about what each person contributed.",
      roles: createProjectRoles(approvedInvites.length + 1),
      milestones: [
        "Choose one project question together.",
        "Each student contributes one artifact, example, or explanation.",
        "Post a parent-visible update without private contact details.",
        "Ask a parent to approve any showcase, screen share, or outside app session."
      ]
    },
    members: [
      {
        firstName: student.firstName,
        role: "student",
        gradeLevel: student.gradeLevel,
        completedMissionCount,
        badgeCount: estimateBadgeCount(progress),
        visibilityNote: "Shows completed missions and badges only."
      },
      ...approvedInvites.map((invite) => ({
        firstName: invite.friendName,
        role: "friend",
        visibilityNote: "Friend progress appears only after that parent approves sharing."
      }))
    ],
    projectUpdates,
    sharedRewardIdeas: [
      "Parent-approved project showcase call",
      "Shared park or sports activity with parents supervising",
      "Family movie or game night after both students finish the weekly project",
      "Healthy snack challenge that each family can approve separately"
    ],
    visibility: {
      showCompletedMissions: true,
      showBadges: true,
      showProjectUpdates: true,
      showExactScores: false,
      showPrivateReflections: false,
      showHealthAnswers: false,
      showFaithReflections: false,
      allowPrivateChildMessages: false
    },
    parentControls: [
      "Parents approve every friend invite before a child joins the squad.",
      "Project updates are visible to parents and moderated for personal information.",
      "External apps, live sessions, screen share, Discord, Teams, and Zoom stay locked until parents approve them.",
      "Exact scores, health answers, faith reflections, and private writing stay hidden by default."
    ],
    externalIntegrations: {
      discord: "planned_parent_approved",
      microsoftTeams: "planned_parent_approved",
      zoom: "planned_parent_approved",
      screenShare: "planned_parent_approved"
    }
  };
}

export function createSquadProjectUpdate({ student, message }) {
  const cleanedMessage = (message ?? "").trim();

  if (!cleanedMessage) {
    return {
      status: "blocked",
      reason: "Write a short project update before posting.",
      parentVisible: true
    };
  }

  const moderation = moderateChildMessage(cleanedMessage);

  if (moderation.status === "blocked") {
    return {
      status: "blocked",
      reason: moderation.reason,
      severity: moderation.severity,
      categories: moderation.categories,
      parentVisible: true,
      parentAlertRequired: moderation.parentAlertRequired,
      crisisResources: moderation.crisisResources ?? null
    };
  }

  return {
    id: "squad-update-" + Date.now(),
    status: "allowed",
    author: student.firstName,
    message: cleanedMessage,
    createdAt: new Date().toISOString(),
    parentVisible: true,
    safetyLabel: "Parent-visible project update"
  };
}

// Async variant that adds nuanced moderation via the LLM safety tier.
// Falls back to the deterministic decision when no LLM is available.
export async function createSquadProjectUpdateWithLlm({ student, message, llm = null }) {
  const cleanedMessage = (message ?? "").trim();
  if (!cleanedMessage) {
    return {
      status: "blocked",
      reason: "Write a short project update before posting.",
      parentVisible: true
    };
  }

  const moderation = await moderateChildMessageWithLlm({
    message: cleanedMessage,
    llm,
    context: "squad_project_update"
  });

  if (moderation.status === "blocked") {
    return {
      status: "blocked",
      reason: moderation.reason,
      severity: moderation.severity,
      categories: moderation.categories,
      parentVisible: true,
      parentAlertRequired: moderation.parentAlertRequired,
      crisisResources: moderation.crisisResources ?? null,
      suggestedRewrite: moderation.suggestedRewrite ?? null,
      classifier: moderation.classifier ?? null
    };
  }

  return {
    id: "squad-update-" + Date.now(),
    status: "allowed",
    author: student.firstName,
    message: cleanedMessage,
    createdAt: new Date().toISOString(),
    parentVisible: true,
    safetyLabel: moderation.severity === "warn" ? "Parent-visible · flagged for review" : "Parent-visible project update",
    severity: moderation.severity,
    classifier: moderation.classifier ?? null
  };
}

function createProjectRoles(memberCount) {
  const roles = ["Researcher", "Writer", "Designer", "Presenter", "Fact-checker", "Team Captain"];

  return roles.slice(0, Math.max(2, Math.min(memberCount + 1, roles.length)));
}

function estimateBadgeCount(progress) {
  const completedCount = (progress?.completedMissionIds ?? []).length;
  let badgeCount = completedCount > 0 ? 1 : 0;

  if (completedCount >= 5) {
    badgeCount += 1;
  }

  if ((progress?.masteryStars ?? 0) >= 5) {
    badgeCount += 1;
  }

  if ((progress?.friendInvites ?? []).some((invite) => invite.status === "approved")) {
    badgeCount += 1;
  }

  return badgeCount;
}
