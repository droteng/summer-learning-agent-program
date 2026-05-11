// Deterministic provider used in tests, offline mode, when no API key is set,
// and when a child has exhausted their monthly token budget. Output is shaped
// like a teacher mini-lesson so calling agents do not need to branch on it.

export function createMockProvider({ now = () => Date.now() } = {}) {
  return {
    name: "mock",
    async complete(req, hint = {}) {
      const t0 = now();
      const subject = extractSubject(req);
      const task = extractTask(req);
      const studentName = req.studentName ?? "your student";

      const text = renderMockLesson({ subject, task, studentName, hint });

      return {
        text,
        usage: { inputTokens: 0, outputTokens: 0, cachedInputTokens: 0 },
        model: hint.model ? `mock:${hint.model}` : "mock:template",
        provider: "mock",
        latencyMs: Math.max(0, now() - t0),
        estimatedCostCents: 0,
        fallback: true
      };
    }
  };
}

function extractSubject(req) {
  return req.subject ?? req.metadata?.subject ?? "";
}

function extractTask(req) {
  if (req.task) return req.task;
  const lastUser = [...(req.messages ?? [])].reverse().find((m) => m.role === "user");
  if (!lastUser) return "today's mission";
  return String(lastUser.content).slice(0, 240);
}

function renderMockLesson({ subject, task, studentName, hint }) {
  const subjectMove = SUBJECT_MOVES[subject] ?? "Break the task into one example, one guided try, and one independent try.";
  const stretch = SUBJECT_STRETCH[subject] ?? "Ask the student to teach the idea back in their own words.";
  const support = SUBJECT_SUPPORT[subject] ?? "Shrink the problem so the student gets one clear win.";
  const tier = hint.tier ? ` [${hint.tier}]` : "";
  return [
    `Mini-lesson${tier}: ${subjectMove}`,
    `Task: ${task}`,
    `Coach prompt for ${studentName}: explain your first step out loud before solving.`,
    `If stuck: ${support}`,
    `Stretch: ${stretch}`
  ].join("\n");
}

const SUBJECT_MOVES = {
  Math: "Show the problem with numbers, words, and a quick sketch before solving.",
  "ELA/Writing": "Say the main idea out loud, then improve one sentence with stronger evidence.",
  "Coding/Computer Science/AI": "Turn the task into input, action, decision, output, and a quick debug check.",
  Science: "Name the question, the evidence needed, and one fair-test rule before answering.",
  "History/Civics": "Place the idea on a timeline and ask who was affected, what changed, and why it matters.",
  "World/Current Affairs": "Separate fact, opinion, and unknown details before forming a kid-friendly explanation."
};

const SUBJECT_SUPPORT = {
  Math: "Use easier numbers first, then return to the mission numbers.",
  "ELA/Writing": "Offer a sentence starter and ask for one strong supporting detail.",
  "Coding/Computer Science/AI": "Let the child act out the algorithm before writing it.",
  Science: "Compare two examples and ask what changed between them.",
  "History/Civics": "Use a three-box organizer: before, event, after.",
  "World/Current Affairs": "Ask what can be checked and what needs another source."
};

const SUBJECT_STRETCH = {
  Math: "Ask for a second strategy or a real-life example with the same math.",
  "ELA/Writing": "Ask the child to revise for audience, voice, or stronger evidence.",
  "Coding/Computer Science/AI": "Add one condition, loop, or edge case to the algorithm.",
  Science: "Ask what data table, chart, or measurement would make the answer stronger.",
  "History/Civics": "Connect the event to leadership, citizenship, or a modern comparison.",
  "World/Current Affairs": "Ask for a 60-second balanced explainer with one fact and one question."
};
