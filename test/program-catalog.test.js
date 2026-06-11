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

test("only grade 6 summer is live; everything else is in development", () => {
  const live = listAllPrograms().filter((p) => p.status === "live");
  assert.equal(live.length, 1);
  assert.equal(live[0].grade, 6);
  assert.equal(live[0].season, SEASONS.SUMMER);
});

test("grade status table includes 4, 5, 6, 7 and only 6 is live", () => {
  assert.deepEqual([...GRADES].sort(), [4, 5, 6, 7]);
  assert.equal(GRADE_STATUS[6], "live");
  for (const g of [4, 5, 7]) assert.equal(GRADE_STATUS[g], "in_development");
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

  // Fall grade 6 → in development, fall themes.
  const fall = buildProgram({ gradeLevel: 6, season: SEASONS.FALL, selectedEnrichmentTracks: [] });
  assert.equal(fall.season, SEASONS.FALL);
  assert.equal(fall.programStatus, "in_development");
  assert.equal(fall.weeks[1].theme, "Ecosystems & Food Webs");

  // Unknown grade falls back gracefully to a valid structure.
  const g4 = buildProgram({ gradeLevel: 4, season: SEASONS.WINTER, selectedEnrichmentTracks: [] });
  assert.equal(g4.weeks.length, 8);
});

test("getProgram returns null for invalid grade or season", () => {
  assert.equal(getProgram(99, SEASONS.SUMMER), null);
  assert.equal(getProgram(6, "autumn"), null);
});

test("season themes expose the four seasons in SEASON_THEMES", () => {
  for (const season of Object.values(SEASONS)) {
    assert.ok(SEASON_THEMES[season], `SEASON_THEMES missing ${season}`);
  }
});
