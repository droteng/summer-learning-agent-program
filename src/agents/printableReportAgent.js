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
