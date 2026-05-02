const trackKeys = {
  "Health & Wellness": "healthWellness",
  "Christian Leadership": "christianLeadership",
  "Financial Literacy": "financialLiteracy",
  "Media Literacy": "mediaLiteracy"
};

const form = document.querySelector("#setupForm");
const childNameInput = document.querySelector("#childName");
const missionTitle = document.querySelector("#missionTitle");
const missionList = document.querySelector("#missionList");
const bodyCheckList = document.querySelector("#bodyCheckList");
const rewardList = document.querySelector("#rewardList");
const inviteButton = document.querySelector("#inviteButton");
const inviteStatus = document.querySelector("#inviteStatus");
const shareButton = document.querySelector("#shareButton");
const sharePackage = document.querySelector("#sharePackage");
const xpValue = document.querySelector("#xpValue");
const coinValue = document.querySelector("#coinValue");

let currentPayload = buildPayload();
let currentPlan = null;

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
  renderMission(plan.firstDailyMission);
  renderBodyCheck(plan.firstDailyMission.bodyCheck);
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

  xpValue.textContent = plan.firstDailyMission.rewardOpportunity.xp;
  coinValue.textContent = plan.firstDailyMission.rewardOpportunity.campCoins;
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
  rewards.forEach((reward) => {
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
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await generatePlan();
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

shareButton.addEventListener("click", async () => {
  currentPayload = buildPayload();
  const response = await fetch("/api/teacher-share", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...currentPayload,
      parentApproved: currentPayload.parentPolicy.teacherSharingEnabled
    })
  });
  const result = await response.json();
  renderSharePackage(result);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

generatePlan().catch((error) => {
  missionTitle.textContent = "Could not load plan";
  inviteStatus.textContent = error.message;
});

