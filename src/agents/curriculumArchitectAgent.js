import { coreSubjects, enrichmentTracks, grade6Weeks } from "../data/grade6Curriculum.js";
import { getGradeTuning, tuneCoreSubjectsForGrade } from "../data/gradeTuning.js";

export function buildGrade6Program(studentProfile) {
  const gradeLevel = studentProfile.gradeLevel ?? 6;
  const selectedTracks = studentProfile.selectedEnrichmentTracks
    .map((trackKey) => enrichmentTracks[trackKey])
    .filter(Boolean);

  return {
    gradeLevel,
    gradeTuning: getGradeTuning(gradeLevel),
    coreSubjects,
    tunedCoreSubjects: tuneCoreSubjectsForGrade(coreSubjects, gradeLevel),
    selectedEnrichmentTracks: selectedTracks,
    weeks: grade6Weeks.map((week) => ({
      ...week,
      subjects: coreSubjects,
      enrichmentConnections: selectedTracks.map((track) => track.label)
    }))
  };
}
