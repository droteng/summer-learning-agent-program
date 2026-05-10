// Central registry of authored Grade 6 missions. Import from here, never
// from individual mission files, so adding new content is a one-line change.

import { grade6MathWeek1Day1 } from "./grade6/week1/math-day1.js";
import { grade6ElaWeek1Day1 } from "./grade6/week1/ela-day1.js";
import { grade6ScienceWeek1Day2 } from "./grade6/week1/science-day2.js";
import { grade6CodingWeek1Day3 } from "./grade6/week1/coding-day3.js";
import { grade6WorldWeek1Day4 } from "./grade6/week1/world-day4.js";
import { grade6HistoryWeek1Day5 } from "./grade6/week1/history-day5.js";

const ALL_MISSIONS = [
  grade6MathWeek1Day1,
  grade6ElaWeek1Day1,
  grade6ScienceWeek1Day2,
  grade6CodingWeek1Day3,
  grade6WorldWeek1Day4,
  grade6HistoryWeek1Day5
];

export const authoredMissions = Object.freeze(
  Object.fromEntries(ALL_MISSIONS.map((m) => [m.id, m]))
);

export function findAuthoredMission({ gradeLevel, weekNumber, dayNumber, subject } = {}) {
  return ALL_MISSIONS.find(
    (mission) =>
      mission.gradeLevel === gradeLevel &&
      mission.weekNumber === weekNumber &&
      mission.dayNumber === dayNumber &&
      mission.subject === subject
  );
}

export function findAuthoredMissionsForDay({ gradeLevel, weekNumber, dayNumber } = {}) {
  return ALL_MISSIONS.filter(
    (mission) =>
      mission.gradeLevel === gradeLevel &&
      mission.weekNumber === weekNumber &&
      mission.dayNumber === dayNumber
  );
}

export function getAuthoredMissionById(id) {
  return authoredMissions[id] ?? null;
}
