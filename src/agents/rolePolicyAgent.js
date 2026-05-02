export function getRolePermissions(role = "child") {
  const isParent = role === "parent";

  return {
    role,
    canChangeSetup: isParent,
    canApproveRewards: isParent,
    canPrepareTeacherShare: isParent,
    canCompleteMissions: true,
    canWriteReflections: true,
    childSafeSummary: isParent
      ? "Parent can manage setup, approvals, reports, and child progress."
      : "Child can complete missions and write reflections; approvals stay with the parent."
  };
}

