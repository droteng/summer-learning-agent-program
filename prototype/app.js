const trackKeys = {
  "Health & Wellness": "healthWellness",
  "Christian Leadership": "christianLeadership",
  "Financial Literacy": "financialLiteracy",
  "Media Literacy": "mediaLiteracy"
};

const form = document.querySelector("#setupForm");
const childNameInput = document.querySelector("#childName");
const missionTitle = document.querySelector("#missionTitle");
const missionPill = document.querySelector("#missionPill");
const missionList = document.querySelector("#missionList");
const missionModeTitle = document.querySelector("#missionModeTitle");
const missionModeMeta = document.querySelector("#missionModeMeta");
const missionModeList = document.querySelector("#missionModeList");
const missionModeCompleteButton = document.querySelector("#missionModeCompleteButton");
const missionModeStatus = document.querySelector("#missionModeStatus");
const reflectionInput = document.querySelector("#reflectionInput");
const completeMissionButton = document.querySelector("#completeMissionButton");
const missionCompletionStatus = document.querySelector("#missionCompletionStatus");
const bodyCheckList = document.querySelector("#bodyCheckList");
const rewardList = document.querySelector("#rewardList");
const rewardSelect = document.querySelector("#rewardSelect");
const rewardButton = document.querySelector("#rewardButton");
const rewardStatus = document.querySelector("#rewardStatus");
const inviteButton = document.querySelector("#inviteButton");
const inviteStatus = document.querySelector("#inviteStatus");
const shareButton = document.querySelector("#shareButton");
const sharePackage = document.querySelector("#sharePackage");
const shareExport = document.querySelector("#shareExport");
const downloadReportButton = document.querySelector("#downloadReportButton");
const xpValue = document.querySelector("#xpValue");
const coinValue = document.querySelector("#coinValue");
const completedValue = document.querySelector("#completedValue");
const totalXpValue = document.querySelector("#totalXpValue");
const totalCoinsValue = document.querySelector("#totalCoinsValue");
const totalStarsValue = document.querySelector("#totalStarsValue");
const progressBarFill = document.querySelector("#progressBarFill");
const parentNextSteps = document.querySelector("#parentNextSteps");
const resetProgressButton = document.querySelector("#resetProgressButton");
const weekSelect = document.querySelector("#weekSelect");
const daySelect = document.querySelector("#daySelect");

const progressStorageKey = "summer-learning-progress-v1";
const settingsStorageKey = "summer-learning-settings-v1";

let currentPayload = buildPayload();
let currentPlan = null;
let currentWeekNumber = 1;
let currentDayNumber = 1;
let progress = loadProgress();

function selectedTrackKeys() {
  return [...document.querySelectorAll("input[name='track']:checked")]
    .map((item) => trackKeys[item.value])
    .filter(Boolean)
    .slice(0, 2);
}

function buildPayload() {
  const childName = childNameInput.value.trim() || "Student";

  return {
    studentProfile: {
      id: "local-preview-student",
      firstName: childName,
      gradeLevel: Number(document.querySelector("#gradeLevel").value),
      interests: ["games", "sports", "projects"],
      selectedEnrichmentTracks: selectedTrackKeys(),
      faithSetting: "parent-controlled",
      activityPreferences: {
        outdoorAllowed: document.querySelector("#outdoorAllowed").checked
      }
    },
    parentPolicy: {
      allowedRewards: ["device", "park", "movie", "friend"],
      friendInvitesEnabled: document.querySelector("#friendInvites").checked,
      progressSharingEnabled: true,
      externalMessagingEnabled: false,
      liveSessionsEnabled: false,
      teacherSharingEnabled: document.querySelector("#teacherSharing").checked,
      faithContentLevel: selectedTrackKeys().includes("christianLeadership") ? "christian-character" : "none",
      physicalActivityRestrictions: []
    }
  };
}

async function generatePlan() {
  currentPayload = buildPayload();
  saveSettings();
  const response = await fetch("/api/program-plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(currentPayload)
  });

  if (!response.ok) {
    throw new Error("Could not generate program plan.");
  }

  currentPlan = await response.json();
  renderPlan(currentPlan);
}

function renderPlan(plan) {
  currentWeekNumber = 1;
  currentDayNumber = 1;
  renderMissionSelectors(plan);
  renderSelectedMission();
  renderRewards(plan.rewardPlan.weeklyRewardMenu);
  renderSharePackage({
    status: "preview",
    includedSections: [
      "Core subject participation",
      "Weekly theme completion",
      "Selected project samples",
      "Certificates and badges"
    ],
    excludedByDefault: [
      "Private health check answers",
      "Faith reflections",
      "Exact scores unless parent opts in",
      "Friend messages"
    ]
  });

  rewardStatus.textContent = "Complete a mission to request a parent-approved reward.";
  renderProgressSummary();
}

function renderMissionSelectors(plan) {
  weekSelect.innerHTML = "";
  plan.weeklyMissionPlans.forEach((weeklyPlan) => {
    const option = document.createElement("option");
    option.value = weeklyPlan.weekNumber;
    option.textContent = `Week ${weeklyPlan.weekNumber}: ${weeklyPlan.theme}`;
    weekSelect.append(option);
  });

  weekSelect.value = String(currentWeekNumber);
  renderDayOptions();
}

function renderDayOptions() {
  const weeklyPlan = getSelectedWeeklyPlan();
  daySelect.innerHTML = "";

  weeklyPlan.missions.forEach((mission) => {
    const option = document.createElement("option");
    option.value = mission.dayNumber;
    option.textContent = `${mission.dayLabel} / Day ${mission.dayNumber}`;
    daySelect.append(option);
  });

  daySelect.value = String(currentDayNumber);
}

function renderSelectedMission() {
  const mission = getSelectedMission();
  renderMission(mission);
  renderMissionMode(mission);
  renderBodyCheck(mission.bodyCheck);
  xpValue.textContent = mission.rewardOpportunity.xp;
  coinValue.textContent = mission.rewardOpportunity.campCoins;
  missionPill.textContent = `Week ${currentWeekNumber} / Day ${currentDayNumber}`;
  renderMissionCompletionState();
}

function renderMission(mission) {
  missionTitle.textContent = `${mission.theme} for ${currentPayload.studentProfile.firstName}`;
  missionList.innerHTML = "";

  const items = [
    ["Warm-up", mission.warmup],
    ...mission.lessons.map((lesson) => [
      lesson.subject,
      `${lesson.task} ${lesson.masteryCheck.prompt}`
    ]),
    ...mission.enrichmentConnections.map((connection) => [connection.track, connection.task]),
    ["Creative challenge", mission.creativeChallenge],
    ["Reflection", mission.reflectionPrompt]
  ];

  items.forEach(([label, text]) => {
    const item = document.createElement("div");
    item.className = "mission-item";
    item.innerHTML = `<strong>${escapeHtml(label)}</strong><br><span>${escapeHtml(text)}</span>`;
    missionList.append(item);
  });
}

function renderMissionMode(mission) {
  missionModeTitle.textContent = mission.theme;
  missionModeMeta.textContent = `Week ${currentWeekNumber} / ${mission.dayLabel}`;
  missionModeList.innerHTML = "";

  [
    ["Warm-up", mission.warmup],
    ...mission.lessons.map((lesson) => [lesson.subject, lesson.task]),
    ["Create", mission.creativeChallenge],
    ["Reflect", mission.reflectionPrompt]
  ].forEach(([label, text]) => {
    const item = document.createElement("div");
    item.className = "mission-mode-item";
    item.innerHTML = `<strong>${escapeHtml(label)}</strong><span>${escapeHtml(text)}</span>`;
    missionModeList.append(item);
  });
}

function renderBodyCheck(prompts) {
  bodyCheckList.innerHTML = "";
  prompts.forEach((prompt) => {
    const item = document.createElement("label");
    item.className = "check-item";
    item.innerHTML = `<input type="checkbox"> ${escapeHtml(prompt)}`;
    bodyCheckList.append(item);
  });
}

function renderRewards(rewards) {
  rewardList.innerHTML = "";
  rewardSelect.innerHTML = "";
  rewards.forEach((reward) => {
    const option = document.createElement("option");
    option.value = reward;
    option.textContent = reward;
    rewardSelect.append(option);

    const item = document.createElement("div");
    item.className = "reward-item";
    item.textContent = reward;
    rewardList.append(item);
  });
}

function renderSharePackage(packageData) {
  sharePackage.innerHTML = "";

  const items =
    packageData.status === "blocked"
      ? [packageData.reason]
      : [
          ...(packageData.includedSections ?? []),
          ...((packageData.excludedByDefault ?? []).map((item) => `Hidden by default: ${item}`))
        ];

  items.forEach((text) => {
    const item = document.createElement("div");
    item.className = "share-item";
    item.textContent = text;
    sharePackage.append(item);
  });

  shareExport.value = packageData.status === "ready_to_share" ? formatTeacherShareExport(packageData) : "";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await generatePlan();
});

weekSelect.addEventListener("change", () => {
  currentWeekNumber = Number(weekSelect.value);
  currentDayNumber = 1;
  renderDayOptions();
  renderSelectedMission();
});

daySelect.addEventListener("change", () => {
  currentDayNumber = Number(daySelect.value);
  renderSelectedMission();
});

completeMissionButton.addEventListener("click", completeSelectedMission);
missionModeCompleteButton.addEventListener("click", completeSelectedMission);

function completeSelectedMission() {
  const mission = getSelectedMission();
  const missionId = getSelectedMissionId();
  const reflection = reflectionInput.value.trim();

  if (!progress.completedMissionIds.includes(missionId)) {
    progress = {
      completedMissionIds: [...progress.completedMissionIds, missionId],
      xp: progress.xp + mission.rewardOpportunity.xp,
      masteryStars: progress.masteryStars + mission.rewardOpportunity.masteryStars,
      campCoins: progress.campCoins + mission.rewardOpportunity.campCoins,
      reflections: {
        ...(progress.reflections ?? {}),
        [missionId]: reflection
      }
    };
  } else {
    progress = {
      ...progress,
      reflections: {
        ...(progress.reflections ?? {}),
        [missionId]: reflection
      }
    };
  }

  saveProgress();

  renderMissionCompletionState();
  renderProgressSummary();
}

resetProgressButton.addEventListener("click", () => {
  progress = createEmptyProgress();
  saveProgress();
  renderMissionCompletionState();
  renderProgressSummary();
});

reflectionInput.addEventListener("change", () => {
  const missionId = getSelectedMissionId();

  if (!progress.completedMissionIds.includes(missionId)) {
    return;
  }

  progress = {
    ...progress,
    reflections: {
      ...(progress.reflections ?? {}),
      [missionId]: reflectionInput.value.trim()
    }
  };
  saveProgress();
});

rewardButton.addEventListener("click", async () => {
  if (!currentPlan) {
    return;
  }

  const selectedReward = rewardSelect.value || currentPlan.rewardPlan.weeklyRewardMenu[0] || "Parent-approved reward";
  currentPayload = buildPayload();
  const response = await fetch("/api/reward-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...currentPayload,
      weekNumber: currentWeekNumber,
      dayNumber: currentDayNumber,
      requestedReward: selectedReward
    })
  });
  const result = await response.json();

  rewardStatus.textContent =
    result.status === "needs_parent_approval" ? result.parentPrompt : "Reward request could not be created.";
});

inviteButton.addEventListener("click", async () => {
  currentPayload = buildPayload();
  const response = await fetch("/api/invite-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      child: currentPayload.studentProfile,
      friendName: "Friend",
      parentPolicy: currentPayload.parentPolicy
    })
  });
  const result = await response.json();

  inviteStatus.textContent =
    result.status === "needs_parent_approval" ? result.nextStep : result.reason;
});

shareButton.addEventListener("click", prepareSharePackage);

async function prepareSharePackage() {
  currentPayload = buildPayload();
  const response = await fetch("/api/teacher-share", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...currentPayload,
      parentApproved: currentPayload.parentPolicy.teacherSharingEnabled,
      progress
    })
  });
  const result = await response.json();
  renderSharePackage(result);
  return result;
}

downloadReportButton.addEventListener("click", async () => {
  await prepareSharePackage();
  const blob = new Blob([shareExport.value], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "summer-learning-report.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSelectedWeeklyPlan() {
  return currentPlan.weeklyMissionPlans.find((weeklyPlan) => weeklyPlan.weekNumber === currentWeekNumber);
}

function getSelectedMission() {
  const weeklyPlan = getSelectedWeeklyPlan();
  return weeklyPlan.missions.find((mission) => mission.dayNumber === currentDayNumber);
}

function getSelectedMissionId() {
  return `week-${currentWeekNumber}-day-${currentDayNumber}`;
}

function renderMissionCompletionState() {
  const isComplete = progress.completedMissionIds.includes(getSelectedMissionId());
  reflectionInput.value = progress.reflections?.[getSelectedMissionId()] ?? "";
  completeMissionButton.disabled = isComplete;
  completeMissionButton.textContent = isComplete ? "Mission complete" : "Complete mission";
  missionModeCompleteButton.disabled = isComplete;
  missionModeCompleteButton.textContent = isComplete ? "Mission complete" : "Complete mission";
  missionCompletionStatus.textContent = isComplete
    ? "Completed. Progress has been added to the parent dashboard."
    : "Not completed yet.";
  missionModeStatus.textContent = isComplete
    ? "Done. Nice work. Your parent dashboard has been updated."
    : "Focus on the cards above, then complete the mission.";
}

function renderProgressSummary() {
  if (!currentPlan) {
    return;
  }

  const totalMissions = currentPlan.parentSummary.totalPlannedMissions;
  const completedCount = progress.completedMissionIds.length;
  const completionPercent = totalMissions === 0 ? 0 : Math.round((completedCount / totalMissions) * 100);

  completedValue.textContent = `${completedCount}/${totalMissions}`;
  totalXpValue.textContent = progress.xp;
  totalCoinsValue.textContent = progress.campCoins;
  totalStarsValue.textContent = progress.masteryStars;
  progressBarFill.style.width = `${completionPercent}%`;

  parentNextSteps.innerHTML = "";
  createParentNextSteps({ completedCount, totalMissions }).forEach((text) => {
    const item = document.createElement("div");
    item.className = "share-item";
    item.textContent = text;
    parentNextSteps.append(item);
  });
}

function createParentNextSteps({ completedCount, totalMissions }) {
  if (completedCount === 0) {
    return ["Help the child complete the first mission and body check."];
  }

  if (completedCount >= totalMissions) {
    return ["Prepare the final showcase and export a teacher share package."];
  }

  const nextSteps = ["Review today's reflection and approve a fitting reward if earned."];

  if (progress.campCoins >= 25) {
    nextSteps.push("Consider letting the child spend camp coins on a parent-approved reward.");
  }

  if (completedCount % 5 === 0) {
    nextSteps.push("Review the weekly summary and decide whether any subject needs reteaching.");
  }

  return nextSteps;
}

function createEmptyProgress() {
  return {
    completedMissionIds: [],
    xp: 0,
    masteryStars: 0,
    campCoins: 0,
    reflections: {}
  };
}

function loadProgress() {
  try {
    return {
      ...createEmptyProgress(),
      ...JSON.parse(localStorage.getItem(progressStorageKey))
    };
  } catch {
    return createEmptyProgress();
  }
}

function saveProgress() {
  localStorage.setItem(progressStorageKey, JSON.stringify(progress));
}

function saveSettings() {
  localStorage.setItem(settingsStorageKey, JSON.stringify(currentPayload));
}

function formatTeacherShareExport(packageData) {
  const progressSummary = packageData.progressSummary;
  const lines = [
    `${packageData.student.firstName} - Grade ${packageData.student.gradeLevel} Summer Learning Report`,
    "",
    packageData.summary,
    "",
    "Included sections:",
    ...packageData.includedSections.map((section) => `- ${section}`),
    "",
    "Hidden by default:",
    ...packageData.excludedByDefault.map((section) => `- ${section}`)
  ];

  if (progressSummary) {
    lines.push(
      "",
      "Progress evidence:",
      `- Completed missions: ${progressSummary.completedMissionCount}/${progressSummary.totalMissionCount}`,
      `- XP: ${progressSummary.xp}`,
      `- Mastery stars: ${progressSummary.masteryStars}`,
      `- Camp coins: ${progressSummary.campCoins}`,
      "",
      "Completed mission samples:"
    );

    progressSummary.completedMissions.slice(0, 6).forEach((mission) => {
      lines.push(
        `- Week ${mission.weekNumber}, ${mission.dayLabel}: ${mission.theme}`,
        `  Subjects: ${mission.subjects.join(", ")}`
      );

      if (mission.reflection) {
        lines.push(`  Student reflection: ${mission.reflection}`);
      }
    });
  }

  return lines.join("\n");
}

generatePlan().catch((error) => {
  missionTitle.textContent = "Could not load plan";
  inviteStatus.textContent = error.message;
});
