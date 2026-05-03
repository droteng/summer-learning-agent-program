import assert from "node:assert/strict";
import test from "node:test";
import { buildGrade6Program } from "../src/agents/curriculumArchitectAgent.js";
import { getGradeTuning, tuneCoreSubjectsForGrade } from "../src/data/gradeTuning.js";

test("returns launch tuning for Grade 6", () => {
  const tuning = getGradeTuning(6);

  assert.equal(tuning.status, "launch");
  assert.ok(tuning.tuning.math.includes("ratios"));
});

test("can generate preview tuning for adjacent grades", () => {
  const subjects = tuneCoreSubjectsForGrade(["Math", "ELA/Writing", "Coding/Computer Science/AI"], 7);

  assert.equal(subjects[0].gradeLevel, 7);
  assert.ok(subjects[0].guidance.includes("proportional"));
  assert.ok(subjects[2].guidance.includes("functions"));
});

test("curriculum includes grade tuning metadata", () => {
  const program = buildGrade6Program({
    gradeLevel: 8,
    selectedEnrichmentTracks: ["mediaLiteracy"]
  });

  assert.equal(program.gradeLevel, 8);
  assert.equal(program.gradeTuning.status, "preview");
  assert.equal(program.tunedCoreSubjects.length, program.coreSubjects.length);
});
