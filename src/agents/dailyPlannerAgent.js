import { createBodyCheck } from "./activityCoachAgent.js";
import { createMasteryCheck, summarizeWeeklyProgress } from "./assessmentAgent.js";
import { suggestDailyRewardOpportunity } from "./rewardsAgent.js";
import { enrichWeekOneMission } from "./weekOneLaunchAgent.js";
import { enrichmentMissionTemplates, subjectMissions } from "../data/subjectMissions.js";

const weekdayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function createWeeklyMissionPlan({ week, studentProfile }) {
  const missions = weekdayLabels.map((dayLabel, index) => {
    const dayNumber = index + 1;
    const focusSubjects = chooseFocusSubjects({ weekNumber: week.weekNumber, dayNumber });

    return createDailyMission({
      week,
      studentProfile,
      dayLabel,
      dayNumber,
      focusSubjects
    });
  });

  return {
    week,
    missions,
    weeklyProgressSummary: summarizeWeeklyProgress({ week, missions })
  };
}

export function createDailyMission({ week, studentProfile, dayLabel, dayNumber, focusSubjects }) {
  const lessons = focusSubjects.map((subject) => ({
    subject,
    task: subjectMissions[subject][(week.weekNumber + dayNumber - 2) % subjectMissions[subject].length],
    masteryCheck: createMasteryCheck({ subject, dayNumber })
  }));

  const enrichmentConnections = week.enrichmentConnections.map((trackLabel) => ({
    track: trackLabel,
    task: chooseEnrichmentTask(trackLabel, dayNumber)
  }));

  const mission = {
    dayLabel,
    dayNumber,
    theme: week.theme,
    warmup: createWarmup({ week, dayNumber }),
    lessons,
    enrichmentConnections,
    creativeChallenge: week.project,
    reflectionPrompt: createReflectionPrompt(dayNumber),
    bodyCheck: createBodyCheck(studentProfile.activityPreferences),
    rewardOpportunity: suggestDailyRewardOpportunity(dayNumber)
  };

  return week.weekNumber === 1 ? enrichWeekOneMission({ mission, dayNumber }) : mission;
}

function chooseFocusSubjects({ weekNumber, dayNumber }) {
  const subjectCycles = [
    ["Math", "ELA/Writing", "Coding/Computer Science/AI"],
    ["Science", "ELA/Writing", "World/Current Affairs"],
    ["Math", "History/Civics", "Coding/Computer Science/AI"],
    ["Science", "World/Current Affairs", "ELA/Writing"],
    ["Math", "History/Civics", "Science"]
  ];

  return subjectCycles[(weekNumber + dayNumber - 2) % subjectCycles.length];
}

function chooseEnrichmentTask(trackLabel, dayNumber) {
  const options = enrichmentMissionTemplates[trackLabel] ?? ["Connect today's work to your selected enrichment track."];
  return options[(dayNumber - 1) % options.length];
}

function createWarmup({ week, dayNumber }) {
  const warmups = [
    `Name one thing you already know about ${week.theme}.`,
    "Solve a 5-minute puzzle before the lesson starts.",
    "Write one question you want answered today.",
    "Explain yesterday's idea to an imaginary younger student.",
    "Pick one goal for today's focus."
  ];

  return warmups[(dayNumber - 1) % warmups.length];
}

function createReflectionPrompt(dayNumber) {
  const prompts = [
    "What felt easier today than it did before?",
    "Where did you slow down and think carefully?",
    "What mistake helped you learn?",
    "What would you teach a friend from today's mission?",
    "What are you proud of from this week?"
  ];

  return prompts[(dayNumber - 1) % prompts.length];
}
