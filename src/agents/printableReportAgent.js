import { createAchievementExport } from "./achievementAgent.js";
import { createWeeklyParentReport } from "./parentLiaisonAgent.js";
import { createLearningSquadRoom } from "./socialCoordinatorAgent.js";

export function createPrintableReportPackage({ student, programPlan, progress, parentPolicy, weekNumber = 1, parentApproved }) {
  if (!parentApproved) {
    return {
      status: "blocked",
      reason: "Printable report packages require parent approval."
    };
  }

  const weeklyReport = createWeeklyParentReport({
    student,
    programPlan,
    progress,
    weekNumber
  });
  const achievementExport = createAchievementExport({
    student,
    programPlan,
    progress,
    parentApproved: true
  });
  const squadRoom = createLearningSquadRoom({
    student,
    programPlan,
    progress,
    weekNumber,
    parentPolicy
  });

  return {
    status: "ready_to_print",
    generatedAt: new Date().toISOString(),
    title: student.firstName + "'s Parent + School Report Package",
    student: {
      firstName: student.firstName,
      gradeLevel: student.gradeLevel
    },
    sections: [
      "Weekly parent report",
      "Achievement transcript",
      "Certificate preview",
      "Shareable badges",
      "Portfolio highlights",
      "Learning Squad project updates",
      "Privacy exclusions",
      "Parent sharing checklist"
    ],
    weeklyReport,
    achievementExport,
    squadRoom,
    printInstructions: [
      "Review the whole package before printing or saving as PDF.",
      "Use the browser Print command and choose Save as PDF when a file is needed.",
      "Remove or redact any reflection that feels private before sharing outside the family.",
      "Share only through a parent-controlled channel."
    ],
    privacyNotice: [
      "Private health check answers are excluded by default.",
      "Faith reflections are excluded unless a parent intentionally shares them.",
      "Friend messages, invite links, passcodes, reward settings, and exact diagnostic answers are excluded.",
      "Learning Squad updates are parent-visible and moderated for personal information."
    ]
  };
}

export function createReportDownload({ reportPackage, format = "markdown" }) {
  if (!reportPackage || reportPackage.status !== "ready_to_print") {
    return {
      status: "blocked",
      reason: "A ready printable report package is required before download."
    };
  }

  const normalizedFormat = format === "json" ? "json" : "markdown";
  const extension = normalizedFormat === "json" ? "json" : "md";
  const content =
    normalizedFormat === "json"
      ? JSON.stringify(reportPackage, null, 2)
      : formatReportPackageMarkdown(reportPackage);

  return {
    status: "ready_to_download",
    format: normalizedFormat,
    filename: createDownloadFilename({ reportPackage, extension }),
    mimeType: normalizedFormat === "json" ? "application/json" : "text/markdown",
    content
  };
}

export function formatReportPackageMarkdown(reportPackage) {
  const achievement = reportPackage.achievementExport ?? {};
  const transcript = achievement.transcript ?? {};
  const weeklyReport = reportPackage.weeklyReport ?? {};
  const squadRoom = reportPackage.squadRoom ?? {};
  const lines = [
    `# ${reportPackage.title}`,
    "",
    `Generated: ${reportPackage.generatedAt}`,
    "",
    "## Certificate",
    achievement.certificate?.title ?? "Certificate of Summer Learning Progress",
    "",
    achievement.certificate?.subtitle ?? "",
    "",
    "## Progress Summary",
    `Missions: ${transcript.completedMissionCount ?? 0}/${transcript.totalMissionCount ?? 0}`,
    `Completion: ${transcript.completionPercent ?? 0}%`,
    `XP: ${transcript.xp ?? 0}`,
    `Mastery Stars: ${transcript.masteryStars ?? 0}`,
    `Camp Coins: ${transcript.campCoins ?? 0}`,
    "",
    "## Weekly Parent Report",
    weeklyReport.teacherSummary ?? "",
    "",
    "### Parent Next Steps",
    ...asBullets(weeklyReport.parentNextSteps),
    "",
    "## School-Share Summary",
    achievement.schoolShareSummary ?? "",
    "",
    "## Attendance Transcript",
    ...formatWeeklyTranscript(transcript.weeklyTranscript ?? []),
    "",
    "## Shareable Badges",
    ...asBullets((achievement.badges ?? []).map((badge) => `${badge.name}: ${badge.description}`)),
    "",
    "## Portfolio Highlights",
    ...asBullets((achievement.portfolioHighlights ?? []).map((highlight) => `${highlight.title}: ${highlight.project}`)),
    "",
    "## Learning Squad Project Updates",
    squadRoom.sharedProject?.project ?? "No shared project room opened yet.",
    "",
    ...asBullets((squadRoom.projectUpdates ?? []).map((update) => `${update.author}: ${update.message}`)),
    "",
    "## Parent Checklist",
    ...asBullets(reportPackage.printInstructions),
    "",
    "## Kept Private By Default",
    ...asBullets(reportPackage.privacyNotice)
  ];

  return lines.filter((line) => line !== undefined).join("\n");
}

function createDownloadFilename({ reportPackage, extension }) {
  const studentName = reportPackage.student?.firstName ?? "student";
  const safeName = studentName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const date = new Date(reportPackage.generatedAt ?? Date.now()).toISOString().slice(0, 10);

  return `${safeName || "student"}-dr-spark-report-${date}.${extension}`;
}

function formatWeeklyTranscript(weeks) {
  if (weeks.length === 0) {
    return ["- No weekly transcript entries yet."];
  }

  return weeks.map((week) => {
    const subjects = week.subjects?.length ? ` Subjects: ${week.subjects.join(", ")}.` : "";

    return `- Week ${week.weekNumber}: ${week.theme} - ${week.completedMissionCount}/${week.totalMissionCount} missions (${week.completionPercent}%).${subjects}`;
  });
}

function asBullets(items = []) {
  return items.length > 0 ? items.map((item) => `- ${item}`) : ["- None yet."];
}
