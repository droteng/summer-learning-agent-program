import { coreSubjects, enrichmentTracks, grade6Weeks } from "../data/grade6Curriculum.js";

export function buildGrade6Program(studentProfile) {
  const selectedTracks = studentProfile.selectedEnrichmentTracks
    .map((trackKey) => enrichmentTracks[trackKey])
    .filter(Boolean);

  return {
    gradeLevel: 6,
    coreSubjects,
    selectedEnrichmentTracks: selectedTracks,
    weeks: grade6Weeks.map((week) => ({
      ...week,
      subjects: coreSubjects,
      enrichmentConnections: selectedTracks.map((track) => track.label)
    }))
  };
}

