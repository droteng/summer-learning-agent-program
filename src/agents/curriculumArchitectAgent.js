import { coreSubjects, enrichmentTracks } from "../data/grade6Curriculum.js";
import { getGradeTuning, tuneCoreSubjectsForGrade } from "../data/gradeTuning.js";
import { getProgram } from "../data/programCatalog.js";
import { SEASONS } from "../data/seasonTheme.js";

// Build a program for any (grade × season). Week themes + capstones come from
// the program catalog; difficulty comes from gradeTuning. Replaces the old
// single-season, grade-6-only builder — kept as a thin alias below so every
// existing caller keeps working unchanged.
export function buildProgram(studentProfile = {}) {
  const gradeLevel = studentProfile.gradeLevel ?? 6;
  const season = studentProfile.season ?? SEASONS.SUMMER;

  const selectedTracks = (studentProfile.selectedEnrichmentTracks ?? [])
    .map((trackKey) => enrichmentTracks[trackKey])
    .filter(Boolean);

  // Resolve the season+grade program; fall back to grade-6 summer structure.
  const program = getProgram(gradeLevel, season) ?? getProgram(6, SEASONS.SUMMER);

  return {
    gradeLevel,
    season,
    programId: program.id,
    programTitle: program.title,
    programStatus: program.status,
    bigIdea: program.bigIdea,
    gradeTuning: getGradeTuning(gradeLevel),
    coreSubjects,
    tunedCoreSubjects: tuneCoreSubjectsForGrade(coreSubjects, gradeLevel),
    selectedEnrichmentTracks: selectedTracks,
    weeks: program.weeks.map((week) => ({
      ...week,
      subjects: coreSubjects,
      enrichmentConnections: selectedTracks.map((track) => track.label)
    }))
  };
}

// Back-compat alias. Existing code imports buildGrade6Program; keep it pointing
// at the generalized builder so nothing breaks while callers migrate.
export function buildGrade6Program(studentProfile) {
  return buildProgram(studentProfile);
}
