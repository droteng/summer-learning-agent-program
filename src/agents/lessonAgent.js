import { TIERS } from "./llm/index.js";
import { isHardSubject } from "./llm/router.js";
import { findAuthoredMission } from "../content/grade6/week1/math-day1.js";

export function createTeacherLessonGuide({ mission, studentProfile }) {
  const studentName = studentProfile.firstName || "Student";

  return {
    title: `${mission.theme} Teacher Guide`,
    studentName,
    openingMove: `Invite ${studentName} to explain what they already know, then choose one lesson card to tackle first.`,
    miniLessons: mission.lessons.map((lesson) => ({
      subject: lesson.subject,
      teach: createTeachingMove(lesson.subject, lesson.task),
      coachQuestion: lesson.masteryCheck.prompt,
      support: createSupportMove(lesson.subject),
      stretch: createStretchMove(lesson.subject)
    })),
    activityBridge: mission.bodyCheck[0],
    closingReflection: mission.reflectionPrompt,
    parentTip:
      "Praise explanation, effort, and revision. If the child gets stuck, reduce the task size before giving the answer."
  };
}

// Async variant that augments the deterministic guide with an LLM-generated
// kid-friendly explanation per mini-lesson, plus any authored content that
// matches the mission. When no LLM is configured the mock provider produces
// the same shape, so callers always get the richer payload.
export async function createTeacherLessonGuideWithLlm({ mission, studentProfile, llm, weekNumber }) {
  const guide = createTeacherLessonGuide({ mission, studentProfile });

  if (!llm) {
    return guide;
  }

  const enriched = await Promise.all(
    guide.miniLessons.map(async (lesson, index) => {
      const sourceLesson = mission.lessons[index];
      const authored = findAuthoredMission({
        gradeLevel: studentProfile.gradeLevel,
        weekNumber,
        dayNumber: mission.dayNumber,
        subject: sourceLesson.subject
      });

      const response = await llm.complete({
        tier: TIERS.TUTOR,
        hardSubject: isHardSubject(sourceLesson.subject, authored?.topicTag),
        studentId: studentProfile.id,
        studentName: studentProfile.firstName,
        subject: sourceLesson.subject,
        task: sourceLesson.task,
        system: buildTutorSystemPrompt(),
        messages: [
          {
            role: "user",
            content: buildTutorUserPrompt({
              studentProfile,
              subject: sourceLesson.subject,
              task: sourceLesson.task,
              missionTheme: mission.theme,
              authored
            })
          }
        ]
      });

      return {
        ...lesson,
        kidExplanation: response.text,
        modelMeta: {
          provider: response.provider,
          model: response.model,
          fallback: response.fallback
        },
        authoredContent: authored
          ? {
              id: authored.id,
              topic: authored.topic,
              hook: authored.hook,
              miniLesson: authored.miniLesson,
              workedExample: authored.workedExample,
              itemCount: authored.items.length,
              estimatedMinutes: authored.estimatedMinutes
            }
          : null
      };
    })
  );

  return { ...guide, miniLessons: enriched };
}

function buildTutorSystemPrompt() {
  return [
    "You are a warm, encouraging Grade 6 teacher agent for a parent-supervised summer learning program.",
    "Your audience is a child aged 11–12. Use clear, friendly language. Avoid sarcasm. Never ask for personal information.",
    "Never diagnose, shame, or give medical advice. Encourage effort and revision over speed.",
    "Keep responses short: a 2–3 sentence kid-friendly explanation, then one guiding question, then one if-stuck hint.",
    "Stay on the assigned subject and task."
  ].join(" ");
}

function buildTutorUserPrompt({ studentProfile, subject, task, missionTheme, authored }) {
  const studentName = studentProfile.firstName || "the student";
  const interests = (studentProfile.interests ?? []).slice(0, 3).join(", ");
  const authoredContext = authored
    ? `\nAuthored mini-lesson context (use it, don't restate it):\n- Topic: ${authored.topic}\n- Hook: ${authored.hook}\n- Key ideas: ${authored.miniLesson.join(" ")}\n- Worked example answer: ${authored.workedExample.answer}`
    : "";

  return [
    `Student: ${studentName}, Grade ${studentProfile.gradeLevel ?? 6}.`,
    interests ? `Interests: ${interests}.` : "",
    `Mission theme: ${missionTheme}. Subject: ${subject}. Task: ${task}.${authoredContext}`,
    `Write a 2–3 sentence kid-friendly explanation, then one guiding question, then one if-stuck hint. No more than 90 words total.`
  ]
    .filter(Boolean)
    .join("\n");
}

function createTeachingMove(subject, task) {
  const subjectMoves = {
    Math: "Ask the child to show the problem with numbers, words, and a quick sketch before solving.",
    "ELA/Writing": "Have the child say the main idea out loud, then improve one sentence for clarity or evidence.",
    "Coding/Computer Science/AI": "Turn the task into steps: input, action, decision, output, and a quick debug check.",
    Science: "Name the question, the evidence needed, and one fair-test rule before answering.",
    "History/Civics": "Place the idea on a timeline and ask who was affected, what changed, and why it matters.",
    "World/Current Affairs": "Separate fact, opinion, and unknown details before forming a kid-friendly explanation."
  };

  return `${subjectMoves[subject] ?? "Break the task into a small example, a guided attempt, and an independent try"} Task: ${task}`;
}

function createSupportMove(subject) {
  const supportMoves = {
    Math: "Use easier numbers first, then return to the mission numbers.",
    "ELA/Writing": "Offer a sentence starter and ask for one strong supporting detail.",
    "Coding/Computer Science/AI": "Let the child act out the algorithm before writing it.",
    Science: "Compare two examples and ask what changed between them.",
    "History/Civics": "Use a three-box organizer: before, event, after.",
    "World/Current Affairs": "Ask what can be checked and what needs another source."
  };

  return supportMoves[subject] ?? "Shrink the task and rebuild confidence with one clear win.";
}

function createStretchMove(subject) {
  const stretchMoves = {
    Math: "Ask for a second strategy or a real-life example with the same math.",
    "ELA/Writing": "Ask the child to revise for audience, voice, or stronger evidence.",
    "Coding/Computer Science/AI": "Add one condition, loop, or edge case to the algorithm.",
    Science: "Ask what data table, chart, or measurement would make the answer stronger.",
    "History/Civics": "Connect the event to leadership, citizenship, or a modern comparison.",
    "World/Current Affairs": "Ask for a 60-second balanced explainer with one fact and one question."
  };

  return stretchMoves[subject] ?? "Invite the child to teach the idea back in their own words.";
}
