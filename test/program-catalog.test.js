import assert from "node:assert/strict";
import test from "node:test";
import {
  GRADES,
  GRADE_STATUS,
  SEASON_STRUCTURES,
  getProgram,
  listAllPrograms,
  accessibleSeasons,
  programId
} from "../src/data/programCatalog.js";
import {
  SEASONS,
  SEASON_THEMES,
  themeForSeason,
  currentSeasonForDate
} from "../src/data/seasonTheme.js";
import { buildProgram } from "../src/agents/curriculumArchitectAgent.js";

test("every season has a complete 8-week structure", () => {
  for (const season of Object.values(SEASONS)) {
    const s = SEASON_STRUCTURES[season];
    assert.ok(s, `missing structure for ${season}`);
    assert.equal(s.weeks.length, 8, `${season} should have 8 weeks`);
    for (let i = 0; i < 8; i++) {
      assert.equal(s.weeks[i].weekNumber, i + 1);
      assert.ok(s.weeks[i].theme.length > 0);
      assert.ok(s.weeks[i].project.length > 0);
    }
  }
});

test("every season has a palette with all required tokens", () => {
  for (const season of Object.values(SEASONS)) {
    const t = themeForSeason(season);
    assert.equal(t.season, season);
    for (const key of ["--ls-bg", "--ls-accent", "--ls-accent-deep", "--ls-teal", "--ls-rose"]) {
      assert.ok(t.cssVars[key], `${season} missing ${key}`);
    }
  }
});

test("the catalog covers all grades x seasons", () => {
  const all = listAllPrograms();
  assert.equal(all.length, GRADES.length * Object.values(SEASONS).length);
  for (const p of all) {
    assert.ok(p.id);
    assert.equal(p.id, programId(p.grade, p.season));
    assert.equal(p.weeks.length, 8);
  }
});

test("live programs = all four Grade 6 seasons + Grade 7 Summer", () => {
  const live = listAllPrograms().filter((p) => p.status === "live");
  const liveKeys = live.map((p) => `${p.grade}:${p.season}`).sort();
  assert.deepEqual(liveKeys, ["6:fall", "6:spring", "6:summer", "6:winter", "7:summer"]);
});

test("grade status table includes 4, 5, 6, 7 and only 6 is a fully-live grade", () => {
  assert.deepEqual([...GRADES].sort(), [4, 5, 6, 7]);
  assert.equal(GRADE_STATUS[6], "live");
  // Grade 7 is rolling out season-by-season: its Summer PROGRAM is live, but
  // the GRADE as a whole stays in_development until all its seasons ship.
  for (const g of [4, 5, 7]) assert.equal(GRADE_STATUS[g], "in_development");
});

test("Grade 7 Summer is live even though Grade 7 overall is in development", () => {
  const g7summer = getProgram(7, SEASONS.SUMMER);
  assert.equal(g7summer.status, "live", "7:summer program is fully authored (8/8)");
  assert.equal(g7summer.authoredWeekCount, 8);
  assert.equal(g7summer.gradeStatus, "in_development", "Grade 7 grade-level rollout is ongoing");
  // Grade 7's other seasons are not authored yet → still in development.
  assert.equal(getProgram(7, SEASONS.FALL).status, "in_development");
});

test("yearly access unlocks all seasons; season pass unlocks only current", () => {
  const all = accessibleSeasons({ yearRoundAccess: true, currentSeason: SEASONS.FALL });
  assert.deepEqual([...all].sort(), [...Object.values(SEASONS)].sort());

  const one = accessibleSeasons({ yearRoundAccess: false, currentSeason: SEASONS.FALL });
  assert.deepEqual(one, [SEASONS.FALL]);
});

test("currentSeasonForDate maps months to northern-hemisphere seasons", () => {
  assert.equal(currentSeasonForDate(new Date("2026-07-15")), SEASONS.SUMMER);
  assert.equal(currentSeasonForDate(new Date("2026-10-15")), SEASONS.FALL);
  assert.equal(currentSeasonForDate(new Date("2026-01-15")), SEASONS.WINTER);
  assert.equal(currentSeasonForDate(new Date("2026-04-15")), SEASONS.SPRING);
});

test("buildProgram resolves season + grade and stays back-compatible", () => {
  // Default (no season) → summer grade 6, the live program.
  const def = buildProgram({ gradeLevel: 6, selectedEnrichmentTracks: [] });
  assert.equal(def.season, SEASONS.SUMMER);
  assert.equal(def.programStatus, "live");
  assert.equal(def.weeks.length, 8);
  assert.equal(def.weeks[0].theme, "Explorer Mode");

  // Fall grade 6 → now fully authored (live), fall themes.
  const fall = buildProgram({ gradeLevel: 6, season: SEASONS.FALL, selectedEnrichmentTracks: [] });
  assert.equal(fall.season, SEASONS.FALL);
  assert.equal(fall.programStatus, "live");
  assert.equal(fall.weeks[1].theme, "Ecosystems & Food Webs");

  // Unknown grade falls back gracefully to a valid structure.
  const g4 = buildProgram({ gradeLevel: 4, season: SEASONS.WINTER, selectedEnrichmentTracks: [] });
  assert.equal(g4.weeks.length, 8);
});

test("authored-week tracking reports honest progress per program", () => {
  const summer = getProgram(6, SEASONS.SUMMER);
  assert.equal(summer.status, "live");
  assert.equal(summer.authoredWeekCount, 8);

  const fall = getProgram(6, SEASONS.FALL);
  assert.equal(fall.status, "live", "Fall is fully authored (8/8)");
  assert.equal(fall.authoredWeekCount, 8, "All Fall weeks authored");
  assert.deepEqual(fall.authoredWeeks, [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.equal(fall.totalWeeks, 8);

  const winter = getProgram(6, SEASONS.WINTER);
  assert.equal(winter.status, "live", "Winter is fully authored (8/8)");
  assert.equal(winter.authoredWeekCount, 8, "All Winter weeks authored");
  assert.deepEqual(winter.authoredWeeks, [1, 2, 3, 4, 5, 6, 7, 8]);

  const spring = getProgram(6, SEASONS.SPRING);
  assert.equal(spring.status, "live", "Spring is fully authored (8/8)");
  assert.equal(spring.authoredWeekCount, 8, "All Spring weeks authored");
  assert.deepEqual(spring.authoredWeeks, [1, 2, 3, 4, 5, 6, 7, 8]);
});

test("getProgram returns null for invalid grade or season", () => {
  assert.equal(getProgram(99, SEASONS.SUMMER), null);
  assert.equal(getProgram(6, "autumn"), null);
});

test("Fall Week 1 missions are authored and season-isolated from Summer", async () => {
  const { findAuthoredMissionsForDay } = await import("../src/content/index.js");
  // Summer (default) Day 1 must NOT include any fall mission.
  const summerDay1 = findAuthoredMissionsForDay({ gradeLevel: 6, weekNumber: 1, dayNumber: 1 });
  assert.ok(summerDay1.every((m) => (m.season ?? "summer") === "summer"));
  // Fall Day 1 returns the authored fall math mission.
  const fallDay1 = findAuthoredMissionsForDay({ gradeLevel: 6, weekNumber: 1, dayNumber: 1, season: "fall" });
  assert.equal(fallDay1.length, 1);
  assert.equal(fallDay1[0].id, "g6.fall.math.w1.d1");
  assert.equal(fallDay1[0].subject, "Math");
  // Fall Weeks 1–8 each have all five weekday missions authored.
  for (const week of [1, 2, 3, 4, 5, 6, 7, 8]) {
    const days = [1, 2, 3, 4, 5].map(
      (d) => findAuthoredMissionsForDay({ gradeLevel: 6, weekNumber: week, dayNumber: d, season: "fall" }).length
    );
    assert.deepEqual(days, [1, 1, 1, 1, 1], `Fall week ${week} should have a mission each day`);
  }
});

test("season themes expose the four seasons in SEASON_THEMES", () => {
  for (const season of Object.values(SEASONS)) {
    assert.ok(SEASON_THEMES[season], `SEASON_THEMES missing ${season}`);
  }
});
