export function createDiagnosticQuest(studentProfile) {
  const firstName = studentProfile.firstName || "Student";
  const gradeLevel = studentProfile.gradeLevel ?? 6;

  return {
    title: "Explorer Check-In",
    gradeLevel,
    studentName: firstName,
    purpose: `A low-pressure Grade ${gradeLevel} readiness check that helps the Principal Agent tune mission difficulty and parent support.`,
    parentNote:
      "Review effort, confidence, and explanation quality. This is not a school grade and should stay encouraging.",
    questions: [
      {
        id: "math-ratio",
        subject: "Math",
        prompt:
          "A smoothie recipe uses 2 cups of fruit for every 3 cups of yogurt. If you use 6 cups of yogurt, how many cups of fruit do you need?",
        lookFor: "Uses ratio reasoning and explains the multiplier."
      },
      {
        id: "ela-evidence",
        subject: "ELA/Writing",
        prompt:
          "Write 3-4 sentences about a book, show, game, or article you know. Include one claim and one detail that supports it.",
        lookFor: "States a clear claim and supports it with relevant evidence."
      },
      {
        id: "coding-steps",
        subject: "Coding/AI",
        prompt:
          "Describe step-by-step instructions for a robot to make a peanut butter sandwich or another simple snack.",
        lookFor: "Breaks a task into ordered, precise steps."
      },
      {
        id: "science-fair-test",
        subject: "Science",
        prompt:
          "If you wanted to test whether more sunlight helps a plant grow taller, what would you change and what would you measure?",
        lookFor: "Identifies one variable to change and one result to measure."
      },
      {
        id: "history-cause-effect",
        subject: "History/Civics",
        prompt:
          "Choose a historical event you know. What happened, and what was one cause or one effect of it?",
        lookFor: "Connects an event to cause, effect, or civic impact."
      },
      {
        id: "media-fact-opinion",
        subject: "Media Literacy",
        prompt:
          "Write one fact and one opinion someone might say about a current event, sports story, or school issue.",
        lookFor: "Separates verifiable information from personal judgment."
      },
      {
        id: "wellness-check",
        subject: "Health & Wellness",
        prompt:
          "Name one food, drink, sleep habit, or movement habit that helps you feel focused. Why do you think it helps?",
        lookFor: "Connects daily habits to energy, focus, or long-term health."
      }
    ],
    completionRule: "Answer at least 5 prompts, then the parent can review the pattern of strengths and supports."
  };
}

export function summarizeDiagnosticResults({ quest, answers = {} }) {
  const questionSummaries = quest.questions.map((question) => {
    const answer = (answers[question.id] ?? "").trim();
    const wordCount = answer ? answer.split(/\s+/).length : 0;
    const readiness = getReadinessLevel({ answer, wordCount });

    return {
      id: question.id,
      subject: question.subject,
      readiness,
      wordCount,
      strength: createStrengthNote({ subject: question.subject, readiness }),
      supportNeed: createSupportNeed({ subject: question.subject, readiness }),
      lookFor: question.lookFor
    };
  });
  const answeredCount = questionSummaries.filter((item) => item.wordCount > 0).length;
  const strengthSubjects = questionSummaries
    .filter((item) => item.readiness === "stretch")
    .map((item) => item.subject);
  const supportSubjects = questionSummaries
    .filter((item) => item.readiness === "support")
    .map((item) => item.subject);

  return {
    status: answeredCount >= 5 ? "ready_for_parent_review" : "needs_more_answers",
    answeredCount,
    totalQuestions: quest.questions.length,
    headline:
      answeredCount >= 5
        ? "Diagnostic summary is ready for parent review."
        : "Answer at least 5 prompts to unlock a fuller readiness summary.",
    subjectSummaries: questionSummaries,
    strengths: strengthSubjects.length > 0 ? strengthSubjects : ["Effort and willingness to begin"],
    supportPriorities: supportSubjects.length > 0 ? supportSubjects : ["Keep building consistency across subjects"],
    parentNextSteps: [
      "Praise effort before correcting answers.",
      "Choose one support subject for short daily practice.",
      "Use stretch prompts only when the child can explain their thinking calmly.",
      "Revisit the diagnostic after Week 1 to compare growth."
    ]
  };
}

function getReadinessLevel({ answer, wordCount }) {
  if (!answer) {
    return "support";
  }

  const lower = answer.toLowerCase();
  const evidenceWords = ["because", "therefore", "for example", "measure", "change", "first", "then", "fact"];

  if (wordCount >= 22 && evidenceWords.some((word) => lower.includes(word))) {
    return "stretch";
  }

  if (wordCount >= 8) {
    return "standard";
  }

  return "support";
}

function createStrengthNote({ subject, readiness }) {
  if (readiness === "stretch") {
    return `${subject}: strong explanation and enough detail for stretch work.`;
  }

  if (readiness === "standard") {
    return `${subject}: ready for on-grade practice with light coaching.`;
  }

  return `${subject}: ready to start with guided examples and confidence-building prompts.`;
}

function createSupportNeed({ subject, readiness }) {
  if (readiness === "stretch") {
    return "Offer extension questions and ask the child to teach the idea back.";
  }

  if (readiness === "standard") {
    return "Ask for one more detail, example, or explanation step.";
  }

  return `Use shorter ${subject} tasks, sentence starters, and parent encouragement.`;
}
