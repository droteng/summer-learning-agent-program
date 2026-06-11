// The program catalog: the matrix of every learning program we offer or
// plan to offer, indexed by (grade × season). This is the single source of
// truth for:
//   - what a yearly subscriber gets across the year (all four seasons)
//   - what a season-pass buyer gets (one season)
//   - the public /programs roadmap page (live vs in-development)
//   - which grade/season a child's profile resolves to a curriculum for
//
// Status values:
//   "live"            — fully authored, sellable, child can start today
//   "in_development"  — structure + themes defined, missions being authored;
//                       visible on the roadmap, included in yearly, but the
//                       child sees an "opening soon" state instead of stubs
//   "planned"         — on the roadmap, not yet structured
//
// Honesty rule: never mark a program "live" until its missions are authored.
// Selling stubs as live would betray buyers; the in_development state is what
// makes the *yearly* subscription honest — you buy the year as it rolls out.

import { SEASONS } from "./seasonTheme.js";

export const GRADES = Object.freeze([4, 5, 6, 7]);

// Per-grade rollout status. Grade 6 is the launched flagship; others are
// previews that inherit grade 6 structure with grade-tuned difficulty until
// their own content is authored.
export const GRADE_STATUS = Object.freeze({
  4: "in_development",
  5: "in_development",
  6: "live",
  7: "in_development"
});

// Shared 8-week structures per season. Grades reuse the season structure;
// difficulty is tuned per grade by gradeTuning.js. When a grade gets its own
// hand-authored arc, override here under programOverrides.
export const SEASON_STRUCTURES = Object.freeze({
  [SEASONS.SUMMER]: {
    season: SEASONS.SUMMER,
    title: "Summer Voyage",
    bigIdea: "Explore the science of a healthy body and an active summer.",
    weeks: [
      { weekNumber: 1, theme: "Explorer Mode", project: "Create a personal learning map." },
      { weekNumber: 2, theme: "Numbers in the Real World", project: "Build a mini data dashboard about a favorite activity." },
      { weekNumber: 3, theme: "Story Builders", project: "Write and polish a short adventure story." },
      { weekNumber: 4, theme: "Code Your First Tool", project: "Create a simple quiz, calculator, or game logic plan." },
      { weekNumber: 5, theme: "Earth and Inventions", project: "Pitch an invention that solves a real problem." },
      { weekNumber: 6, theme: "World Affairs for Kids", project: "Create a kid-friendly explainer about a world issue." },
      { weekNumber: 7, theme: "History Missions", project: "Create a history mission board." },
      { weekNumber: 8, theme: "Capstone Week", project: "Complete a showcase project." }
    ]
  },
  [SEASONS.FALL]: {
    season: SEASONS.FALL,
    title: "Fall Expedition",
    bigIdea: "Trace ecosystems, harvests, and the civilizations that shaped us.",
    weeks: [
      { weekNumber: 1, theme: "Back to Basics", project: "Set fall goals and map your strengths." },
      { weekNumber: 2, theme: "Ecosystems & Food Webs", project: "Diagram a local ecosystem and its energy flow." },
      { weekNumber: 3, theme: "The Harvest of Numbers", project: "Model a harvest budget with ratios and data." },
      { weekNumber: 4, theme: "Ancient Civilizations", project: "Build a civilization fact-file with primary sources." },
      { weekNumber: 5, theme: "Persuasive Voices", project: "Write and revise a persuasive letter that matters to you." },
      { weekNumber: 6, theme: "Patterns in Nature", project: "Code a pattern generator inspired by leaves and seeds." },
      { weekNumber: 7, theme: "Cause & Effect in History", project: "Map a chain of historical cause and effect." },
      { weekNumber: 8, theme: "Harvest Showcase", project: "Present a cross-subject fall capstone." }
    ]
  },
  [SEASONS.WINTER]: {
    season: SEASONS.WINTER,
    title: "Winter Expedition",
    bigIdea: "Investigate energy, space, and the physics of a frozen world.",
    weeks: [
      { weekNumber: 1, theme: "Winter Warm-Up", project: "Set winter goals and review fall growth." },
      { weekNumber: 2, theme: "Energy & Matter", project: "Run a heat-and-cold investigation and log results." },
      { weekNumber: 3, theme: "Forces & Motion", project: "Design and test a simple machine." },
      { weekNumber: 4, theme: "Space & the Solar System", project: "Build a scale model of planets or moon phases." },
      { weekNumber: 5, theme: "Data in the Cold", project: "Analyze a winter weather dataset." },
      { weekNumber: 6, theme: "Inventors & Engineers", project: "Pitch an invention that solves a winter problem." },
      { weekNumber: 7, theme: "Winter Tales", project: "Write a story set in a frozen world." },
      { weekNumber: 8, theme: "Winter Showcase", project: "Present a STEM winter capstone." }
    ]
  },
  [SEASONS.SPRING]: {
    season: SEASONS.SPRING,
    title: "Spring Expedition",
    bigIdea: "Discover biology, growth, and the renewal of living things.",
    weeks: [
      { weekNumber: 1, theme: "Spring Awakening", project: "Set spring goals and plan a growth experiment." },
      { weekNumber: 2, theme: "Plants & Growth", project: "Run and document a seed-growth experiment." },
      { weekNumber: 3, theme: "Life Cycles", project: "Diagram and explain a life cycle." },
      { weekNumber: 4, theme: "Genetics for Kids", project: "Model simple inherited traits." },
      { weekNumber: 5, theme: "Measuring Change", project: "Chart change over time with graphs." },
      { weekNumber: 6, theme: "Code That Grows", project: "Code a simulation of growth or spread." },
      { weekNumber: 7, theme: "Voices for the Earth", project: "Write a persuasive piece about the environment." },
      { weekNumber: 8, theme: "Spring Showcase", project: "Present a renewal-themed capstone." }
    ]
  }
});

// Which weeks of each program have authored, playable mission content.
// A program is "live" only when all 8 weeks are authored; otherwise it's
// in development and we honestly report N/8 weeks ready. Keep this in lockstep
// with the actual mission files registered in src/content/index.js.
const AUTHORED_WEEKS = {
  "6:summer": [1, 2, 3, 4, 5, 6, 7, 8],
  "6:fall": [1, 2] // Weeks 1–2 authored; weeks 3–8 in progress.
};

const TOTAL_WEEKS = 8;

function authoredWeeksFor(grade, season) {
  return AUTHORED_WEEKS[`${grade}:${season}`] ?? [];
}

function programStatus(grade, season) {
  const authored = authoredWeeksFor(grade, season);
  return authored.length >= TOTAL_WEEKS ? "live" : "in_development";
}

export function programId(grade, season) {
  return `g${grade}.${season}`;
}

export function getProgram(grade, season) {
  const structure = SEASON_STRUCTURES[season];
  if (!structure || !GRADES.includes(Number(grade))) return null;
  const authoredWeeks = authoredWeeksFor(Number(grade), season);
  return Object.freeze({
    id: programId(grade, season),
    grade: Number(grade),
    season,
    title: structure.title,
    bigIdea: structure.bigIdea,
    weeks: structure.weeks,
    status: programStatus(Number(grade), season),
    gradeStatus: GRADE_STATUS[grade] ?? "in_development",
    authoredWeeks,
    authoredWeekCount: authoredWeeks.length,
    totalWeeks: TOTAL_WEEKS
  });
}

// The whole matrix, grades × seasons, for the roadmap page.
export function listAllPrograms() {
  const seasons = Object.values(SEASONS);
  const out = [];
  for (const grade of GRADES) {
    for (const season of seasons) {
      out.push(getProgram(grade, season));
    }
  }
  return out;
}

// Which programs a given entitlement can access right now.
//   - yearRoundAccess (yearly / Family Plus year-round) → every season for
//     the child's grade
//   - otherwise → only the season pass's current season
export function accessibleSeasons({ yearRoundAccess, currentSeason }) {
  if (yearRoundAccess) return Object.values(SEASONS);
  return [currentSeason];
}
