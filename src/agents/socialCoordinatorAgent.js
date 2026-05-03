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

export function approveInvitationRequest({ invitationRequest, approvedBy = "parent", baseUrl = "https://learning-squad.ai" }) {
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
