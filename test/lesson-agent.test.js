import assert from "node:assert/strict";
import test from "node:test";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import {
  createTeacherLessonGuide,
  createTeacherLessonGuideWithLlm
} from "../src/agents/lessonAgent.js";
import { createLlm } from "../src/agents/llm/index.js";
import { createTelemetry } from "../src/agents/llm/telemetry.js";

test("creates teacher guidance for a selected mission", () => {
  const studentProfile = {
    id: "lesson-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
    activityPreferences: {
      outdoorAllowed: true
    }
  };
  const plan = createProgramPlan(studentProfile, {
    allowedRewards: ["device"],
    friendInvitesEnabled: false,
    teacherSharingEnabled: true
  });
  const guide = createTeacherLessonGuide({
    mission: plan.dailyMissionPreview,
    studentProfile
  });

  assert.ok(guide.title.includes("Teacher Guide"));
  assert.equal(guide.miniLessons.length, plan.dailyMissionPreview.lessons.length);
  assert.ok(guide.openingMove.includes("Avery"));
  assert.ok(guide.parentTip.includes("Praise"));
});

test("LLM-augmented guide adds kid explanations from the mock provider", async () => {
  const studentProfile = {
    id: "lesson-llm-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding", "soccer"],
    selectedEnrichmentTracks: ["healthWellness"],
    activityPreferences: { outdoorAllowed: true }
  };
  const plan = createProgramPlan(studentProfile, {
    allowedRewards: ["device"],
    friendInvitesEnabled: false,
    teacherSharingEnabled: true
  });

  const events = [];
  const llm = createLlm({
    env: {},
    telemetry: createTelemetry({ sink: (event) => events.push(event) })
  });

  const guide = await createTeacherLessonGuideWithLlm({
    mission: plan.dailyMissionPreview,
    studentProfile,
    weekNumber: 1,
    llm
  });

  assert.equal(guide.miniLessons.length, plan.dailyMissionPreview.lessons.length);
  for (const lesson of guide.miniLessons) {
    assert.ok(lesson.kidExplanation.length > 0);
    assert.equal(lesson.modelMeta.provider, "mock");
    assert.equal(lesson.modelMeta.fallback, true);
  }
  assert.ok(events.length >= guide.miniLessons.length);
  assert.equal(events[0].type, "llm_call");
  assert.equal(events[0].fallback, true);

  const mathLesson = guide.miniLessons.find((lesson) => lesson.subject === "Math");
  if (mathLesson) {
    if (plan.dailyMissionPreview.dayNumber === 1) {
      assert.ok(mathLesson.authoredContent, "expected authored Grade 6 Math Day 1 content to attach");
      assert.equal(mathLesson.authoredContent.id, "g6.math.w1.d1");
    }
  }
});
