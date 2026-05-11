// Central registry of authored Grade 6 missions. Import from here, never
// from individual mission files, so adding new content is a one-line change.

import { grade6MathWeek1Day1 } from "./grade6/week1/math-day1.js";
import { grade6ElaWeek1Day1 } from "./grade6/week1/ela-day1.js";
import { grade6ScienceWeek1Day2 } from "./grade6/week1/science-day2.js";
import { grade6CodingWeek1Day3 } from "./grade6/week1/coding-day3.js";
import { grade6WorldWeek1Day4 } from "./grade6/week1/world-day4.js";
import { grade6HistoryWeek1Day5 } from "./grade6/week1/history-day5.js";
import { grade6MathWeek2Day1 } from "./grade6/week2/math-day1.js";
import { grade6ScienceWeek2Day2 } from "./grade6/week2/science-day2.js";
import { grade6CodingWeek2Day3 } from "./grade6/week2/coding-day3.js";
import { grade6WorldWeek2Day4 } from "./grade6/week2/world-day4.js";
import { grade6MathWeek2Day5 } from "./grade6/week2/math-day5.js";
import { grade6ElaWeek3Day1 } from "./grade6/week3/ela-day1.js";
import { grade6ElaWeek3Day2 } from "./grade6/week3/ela-day2.js";
import { grade6ElaWeek3Day3 } from "./grade6/week3/ela-day3.js";
import { grade6HistoryWeek3Day4 } from "./grade6/week3/history-day4.js";
import { grade6ElaWeek3Day5 } from "./grade6/week3/ela-day5.js";
import { grade6CodingWeek4Day1 } from "./grade6/week4/coding-day1.js";
import { grade6MathWeek4Day2 } from "./grade6/week4/math-day2.js";
import { grade6CodingWeek4Day3 } from "./grade6/week4/coding-day3.js";
import { grade6ScienceWeek4Day4 } from "./grade6/week4/science-day4.js";
import { grade6CodingWeek4Day5 } from "./grade6/week4/coding-day5.js";
import { grade6ScienceWeek5Day1 } from "./grade6/week5/science-day1.js";
import { grade6ScienceWeek5Day2 } from "./grade6/week5/science-day2.js";
import { grade6MathWeek5Day3 } from "./grade6/week5/math-day3.js";
import { grade6ElaWeek5Day4 } from "./grade6/week5/ela-day4.js";
import { grade6HistoryWeek5Day5 } from "./grade6/week5/history-day5.js";
import { grade6WorldWeek6Day1 } from "./grade6/week6/world-day1.js";
import { grade6WorldWeek6Day2 } from "./grade6/week6/world-day2.js";
import { grade6ElaWeek6Day3 } from "./grade6/week6/ela-day3.js";
import { grade6WorldWeek6Day4 } from "./grade6/week6/world-day4.js";
import { grade6HistoryWeek6Day5 } from "./grade6/week6/history-day5.js";
import { grade6HistoryWeek7Day1 } from "./grade6/week7/history-day1.js";
import { grade6HistoryWeek7Day2 } from "./grade6/week7/history-day2.js";
import { grade6HistoryWeek7Day3 } from "./grade6/week7/history-day3.js";
import { grade6HistoryWeek7Day4 } from "./grade6/week7/history-day4.js";
import { grade6ElaWeek7Day5 } from "./grade6/week7/ela-day5.js";

const ALL_MISSIONS = [
  grade6MathWeek1Day1,
  grade6ElaWeek1Day1,
  grade6ScienceWeek1Day2,
  grade6CodingWeek1Day3,
  grade6WorldWeek1Day4,
  grade6HistoryWeek1Day5,
  grade6MathWeek2Day1,
  grade6ScienceWeek2Day2,
  grade6CodingWeek2Day3,
  grade6WorldWeek2Day4,
  grade6MathWeek2Day5,
  grade6ElaWeek3Day1,
  grade6ElaWeek3Day2,
  grade6ElaWeek3Day3,
  grade6HistoryWeek3Day4,
  grade6ElaWeek3Day5,
  grade6CodingWeek4Day1,
  grade6MathWeek4Day2,
  grade6CodingWeek4Day3,
  grade6ScienceWeek4Day4,
  grade6CodingWeek4Day5,
  grade6ScienceWeek5Day1,
  grade6ScienceWeek5Day2,
  grade6MathWeek5Day3,
  grade6ElaWeek5Day4,
  grade6HistoryWeek5Day5,
  grade6WorldWeek6Day1,
  grade6WorldWeek6Day2,
  grade6ElaWeek6Day3,
  grade6WorldWeek6Day4,
  grade6HistoryWeek6Day5,
  grade6HistoryWeek7Day1,
  grade6HistoryWeek7Day2,
  grade6HistoryWeek7Day3,
  grade6HistoryWeek7Day4,
  grade6ElaWeek7Day5
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

export function findAuthoredMissionsForWeek({ gradeLevel, weekNumber } = {}) {
  return ALL_MISSIONS.filter(
    (mission) => mission.gradeLevel === gradeLevel && mission.weekNumber === weekNumber
  );
}

export function getAuthoredMissionById(id) {
  return authoredMissions[id] ?? null;
}
