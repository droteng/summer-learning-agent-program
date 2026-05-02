const weeks = [
  "Explorer Mode",
  "Numbers in the Real World",
  "Story Builders",
  "Code Your First Tool",
  "Earth and Inventions",
  "World Affairs for Kids",
  "History Missions",
  "Capstone Week"
];

const rewards = [
  "30 minutes of extra parent-approved device time",
  "Park, sports, bike, or swimming outing",
  "Movie night",
  "Invite a friend for a parent-approved activity"
];

const missionTemplates = [
  ["Math", "Review one skill through a real-world example."],
  ["ELA/Writing", "Read a short passage and write a clear response."],
  ["Coding/AI", "Complete a tiny logic or debugging challenge."],
  ["World/History", "Connect today's theme to a place, event, or leader."]
];

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

function selectedTracks() {
  return [...document.querySelectorAll("input[name='track']:checked")].map((item) => item.value);
}

function renderMission() {
  const name = childNameInput.value.trim() || "Student";
  const tracks = selectedTracks();

  missionTitle.textContent = `${weeks[0]} for ${name}`;
  missionList.innerHTML = "";

  const items = [
    ["Warm-up", "Solve a 5-minute puzzle connected to today's mission."],
    ...missionTemplates,
    ["Creative challenge", "Create a personal learning map."],
    ["Optional tracks", tracks.length ? tracks.join(" and ") : "Parent can add two enrichment tracks."]
  ];

  items.forEach(([label, text]) => {
    const item = document.createElement("div");
    item.className = "mission-item";
    item.innerHTML = `<strong>${label}</strong><br><span>${text}</span>`;
    missionList.append(item);
  });
}

function renderBodyCheck() {
  const outdoorAllowed = document.querySelector("#outdoorAllowed").checked;
  const prompts = [
    "Did you move your body today?",
    outdoorAllowed
      ? "Did you get safe outdoor time with parent permission or supervision?"
      : "Did you do a safe indoor movement break today?",
    "Did you drink water today?",
    "Name one healthy food you ate today.",
    "What time are you aiming to sleep tonight?"
  ];

  bodyCheckList.innerHTML = "";
  prompts.forEach((prompt) => {
    const item = document.createElement("label");
    item.className = "check-item";
    item.innerHTML = `<input type="checkbox"> ${prompt}`;
    bodyCheckList.append(item);
  });
}

function renderRewards() {
  rewardList.innerHTML = "";
  rewards.forEach((reward) => {
    const item = document.createElement("div");
    item.className = "reward-item";
    item.textContent = reward;
    rewardList.append(item);
  });
}

function renderSharePackage() {
  const name = childNameInput.value.trim() || "Student";
  const enabled = document.querySelector("#teacherSharing").checked;

  sharePackage.innerHTML = "";

  const items = enabled
    ? [
        `${name}'s Grade 6 weekly progress summary`,
        "Core subject participation",
        "Selected project samples",
        "Certificates and badges",
        "Hidden by default: health answers, faith reflections, exact scores, friend messages"
      ]
    : ["Teacher sharing is disabled until the parent turns it on."];

  items.forEach((text) => {
    const item = document.createElement("div");
    item.className = "share-item";
    item.textContent = text;
    sharePackage.append(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderMission();
  renderBodyCheck();
  renderRewards();
  renderSharePackage();
});

inviteButton.addEventListener("click", () => {
  const enabled = document.querySelector("#friendInvites").checked;
  inviteStatus.textContent = enabled
    ? "Invite request created. Parent must approve and send the link to the friend's parent."
    : "Friend invitations are disabled by the parent.";
});

shareButton.addEventListener("click", renderSharePackage);

renderMission();
renderBodyCheck();
renderRewards();
renderSharePackage();

