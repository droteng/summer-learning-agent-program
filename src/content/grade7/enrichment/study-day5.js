// Grade 7 Study Skills — Enrichment Day 5.
// Topic: SMART goals + habit systems.

export const grade7StudyDay5 = {
  id: "g7.study.e.d5",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "SMART goals and habit systems",
  topicTag: "smart-goals",
  estimatedMinutes: 20,
  standardsRefs: ["CASEL.SelfManagement", "CASEL.SelfAwareness"],
  hook: "Willpower runs out by Wednesday. Systems don't. Today you learn to write a SMART goal and — more importantly — build the habit system that actually reaches it.",
  miniLesson: [
    "SMART turns a wish into a goal: Specific (what exactly?), Measurable (what number tells you it's done?), Achievable (is it realistic?), Relevant (does it matter to you?), Time-bound (by when?).",
    "A goal is the destination; a system is the set of small daily actions that get you there. 'Read 6 books this summer' is a goal — 'read 20 minutes after dinner every night' is the system.",
    "Systems beat willpower because they don't depend on how motivated you feel. The trick is habit-stacking: attach a new habit to something you already do, like 'right after I brush my teeth, I review 5 flashcards.'"
  ],
  workedExample: {
    prompt:
      "Leo says, 'I want to get better at writing this summer.' Turn that wish into a SMART goal AND a habit system.",
    steps: [
      "Specific + Measurable: 'write 8 short stories, about 400 words each.'",
      "Achievable + Relevant: 8 over the summer is realistic, and Leo wants to join the school lit magazine — so it matters.",
      "Time-bound: 8 weeks of summer, so about 1 story per week.",
      "Build the system: 'every day right after lunch (habit-stack), I write for 20 minutes.' Daily 20-minute sessions add up to a story a week without relying on motivation."
    ],
    answer: "SMART goal: 8 short stories (~400 words) in 8 weeks. System: a habit-stacked 20-minute daily writing session after lunch."
  },
  items: [
    {
      id: "g7.study.e.d5.q1",
      type: "multiple_choice",
      stem: "Which of these is a SMART goal?",
      choices: [
        "Get way better at basketball.",
        "Practice more this summer.",
        "Make 40 free throws in a row by August 15, practicing 15 minutes a day.",
        "Be the best player on the team someday."
      ],
      answerIndex: 2,
      explanation: "It's Specific (free throws), Measurable (40 in a row), Time-bound (by Aug 15), and has a concrete plan. The others are vague wishes with no number or deadline.",
      hintLadder: [
        "Look for a number AND a deadline.",
        "Skip the vague 'better / more / best someday' options.",
        "40 free throws by August 15 is the SMART one."
      ]
    },
    {
      id: "g7.study.e.d5.q2",
      type: "multiple_choice",
      stem: "What's the difference between a GOAL and a SYSTEM?",
      choices: [
        "A goal is the result you want; a system is the set of small daily actions that get you there.",
        "A goal is small and a system is big.",
        "They're two words for the same thing.",
        "A system is only for adults; goals are for students."
      ],
      answerIndex: 0,
      explanation: "The goal is the destination (read 6 books); the system is the repeatable daily action that reaches it (read 20 minutes each night). You reach goals by running good systems.",
      hintLadder: [
        "One is the destination; the other is how you travel.",
        "The goal is the result; the system is the daily action.",
        "'Read 6 books' vs. 'read 20 min a night.'"
      ]
    },
    {
      id: "g7.study.e.d5.q3",
      type: "multiple_choice",
      stem: "Why do SYSTEMS beat WILLPOWER for reaching goals?",
      choices: [
        "Willpower is only for weekends.",
        "Systems don't depend on how motivated you feel that day, so they keep working even when willpower runs low.",
        "Systems require zero effort ever.",
        "Willpower is against school rules."
      ],
      answerIndex: 1,
      explanation: "Motivation goes up and down; a system is a set routine that runs regardless of mood. Habit-stacking a small action onto an existing one makes it nearly automatic.",
      hintLadder: [
        "Think about what happens on a day you don't FEEL motivated.",
        "A system keeps running even then; willpower doesn't.",
        "Systems don't depend on your mood."
      ],
      misconceptionsTargeted: ["willpower-is-enough"]
    },
    {
      id: "g7.study.e.d5.q4",
      type: "numeric",
      stem: "Your system is 'read 20 minutes every night.' Over 8 weeks (7 nights each), how many total minutes will you have read?",
      answer: 1120,
      tolerance: 0,
      unit: "minutes",
      explanation: "8 weeks × 7 nights = 56 nights. 56 × 20 minutes = 1,120 minutes — that's how small daily actions compound.",
      hintLadder: [
        "First find the total number of nights: 8 weeks × 7.",
        "That's 56 nights; multiply by 20 minutes each.",
        "56 × 20 = 1,120."
      ]
    },
    {
      id: "g7.study.e.d5.q5",
      type: "short_answer",
      stem:
        "Write one SMART goal for the next 4 weeks, then design the habit system that will reach it. Include a habit-stack (attach the new habit to something you already do daily).",
      rubric: {
        level3: "A goal that is specific, measurable, and time-bound, PLUS a daily/repeatable system that includes a clear habit-stack ('after I ___, I will ___').",
        level2: "Has a SMART-ish goal OR a system, but the two aren't connected or the habit-stack is missing.",
        level1: "A vague wish with no measurable target and no system."
      },
      exemplar:
        "Goal: learn 60 new Spanish words in 4 weeks (measurable, time-bound). System: right after I finish breakfast (habit-stack), I study 5 flashcards, 15 words a week. Weekly Sunday check to see if I'm on pace.",
      hintLadder: [
        "Write a goal with a number and a 4-week deadline.",
        "Design a small daily action that reaches it.",
        "Attach that action to an existing habit: 'after I ___, I will ___.'"
      ]
    }
  ],
  reflectionPrompt:
    "This week you built deep work, active notes, spaced retrieval, weekly planning, and now goal systems. Which ONE habit will you stack onto something you already do — starting tomorrow?",
  misconceptionBank: [
    {
      id: "willpower-is-enough",
      label: "Relies on motivation instead of a system",
      description: "Believes wanting the goal badly enough is what makes it happen, so no routine is set up — and progress stalls when motivation dips.",
      coachMove: "Ask what happens on a day they don't feel like it. Then help them design one tiny habit-stacked action that runs regardless of mood."
    }
  ]
};
