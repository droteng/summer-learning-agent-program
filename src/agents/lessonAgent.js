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
