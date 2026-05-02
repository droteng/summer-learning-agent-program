export function createDiagnosticQuest(studentProfile) {
  const firstName = studentProfile.firstName || "Student";

  return {
    title: "Explorer Check-In",
    gradeLevel: studentProfile.gradeLevel,
    studentName: firstName,
    purpose:
      "A low-pressure Grade 6 readiness check that helps the Principal Agent tune mission difficulty and parent support.",
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
