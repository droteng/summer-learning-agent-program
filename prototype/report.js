const progressStorageKey = "summer-learning-progress-v1";
const settingsStorageKey = "summer-learning-settings-v1";

const reportContent = document.querySelector("#reportContent");
const printReportButton = document.querySelector("#printReportButton");
const downloadReportButton = document.querySelector("#downloadReportButton");

let reportText = "";

async function loadReport() {
  const savedSettings = loadJson(settingsStorageKey);
  const progress = loadJson(progressStorageKey) ?? createEmptyProgress();

  if (!savedSettings) {
    reportContent.innerHTML = `
      <p class="eyebrow">Teacher Share Report</p>
      <h1>No report data yet</h1>
      <p>Generate a plan on the dashboard first, then return to this report.</p>
    `;
    return;
  }

  const response = await fetch("/api/teacher-share", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...savedSettings,
      parentApproved: savedSettings.parentPolicy.teacherSharingEnabled,
      progress
    })
  });
  const packageData = await response.json();

  reportText = formatTeacherShareExport(packageData);
  renderReport(packageData);
}

function renderReport(packageData) {
  if (packageData.status === "blocked") {
    reportContent.innerHTML = `
      <p class="eyebrow">Teacher Share Report</p>
      <h1>Teacher sharing is off</h1>
      <p>${escapeHtml(packageData.reason)}</p>
    `;
    return;
  }

  const progressSummary = packageData.progressSummary;
  const missionRows = progressSummary.completedMissions
    .map(
      (mission) => `
        <tr>
          <td>Week ${mission.weekNumber}</td>
          <td>${escapeHtml(mission.dayLabel)}</td>
          <td>${escapeHtml(mission.theme)}</td>
          <td>${escapeHtml(mission.subjects.join(", "))}</td>
          <td>${escapeHtml(mission.reflection || "")}</td>
        </tr>
      `
    )
    .join("");

  reportContent.innerHTML = `
    <p class="eyebrow">Teacher Share Report</p>
    <h1>${escapeHtml(packageData.student.firstName)} - Grade ${packageData.student.gradeLevel}</h1>
    <p>${escapeHtml(packageData.summary)}</p>

    <div class="report-stats">
      <div><strong>${progressSummary.completedMissionCount}/${progressSummary.totalMissionCount}</strong><span>Missions</span></div>
      <div><strong>${progressSummary.xp}</strong><span>XP</span></div>
      <div><strong>${progressSummary.masteryStars}</strong><span>Stars</span></div>
      <div><strong>${progressSummary.campCoins}</strong><span>Coins</span></div>
    </div>

    <h2>Included</h2>
    <ul>${packageData.includedSections.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>

    <h2>Hidden By Default</h2>
    <ul>${packageData.excludedByDefault.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>

    <h2>Completed Mission Evidence</h2>
    <table>
      <thead>
        <tr>
          <th>Week</th>
          <th>Day</th>
          <th>Theme</th>
          <th>Subjects</th>
          <th>Reflection</th>
        </tr>
      </thead>
      <tbody>${missionRows || `<tr><td colspan="5">No completed missions yet.</td></tr>`}</tbody>
    </table>
  `;
}

function formatTeacherShareExport(packageData) {
  if (packageData.status === "blocked") {
    return packageData.reason;
  }

  const progressSummary = packageData.progressSummary;
  const lines = [
    `${packageData.student.firstName} - Grade ${packageData.student.gradeLevel} Summer Learning Report`,
    "",
    packageData.summary,
    "",
    "Progress evidence:",
    `- Completed missions: ${progressSummary.completedMissionCount}/${progressSummary.totalMissionCount}`,
    `- XP: ${progressSummary.xp}`,
    `- Mastery stars: ${progressSummary.masteryStars}`,
    `- Camp coins: ${progressSummary.campCoins}`,
    "",
    "Completed mission samples:"
  ];

  progressSummary.completedMissions.forEach((mission) => {
    lines.push(
      `- Week ${mission.weekNumber}, ${mission.dayLabel}: ${mission.theme}`,
      `  Subjects: ${mission.subjects.join(", ")}`
    );

    if (mission.reflection) {
      lines.push(`  Student reflection: ${mission.reflection}`);
    }
  });

  return lines.join("\n");
}

function loadJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

printReportButton.addEventListener("click", () => {
  window.print();
});

downloadReportButton.addEventListener("click", () => {
  const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "summer-learning-report.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});

loadReport().catch((error) => {
  reportContent.innerHTML = `
    <p class="eyebrow">Teacher Share Report</p>
    <h1>Could not load report</h1>
    <p>${escapeHtml(error.message)}</p>
  `;
});

