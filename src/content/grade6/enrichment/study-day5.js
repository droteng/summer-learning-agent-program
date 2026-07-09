// Grade 6 Study Skills — Enrichment Day 5.
// Topic: goal setting + reflection.

export const grade6StudyDay5 = {
  id: "g6.study.e.d5",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Goals that finish",
  topicTag: "goal-setting",
  estimatedMinutes: 18,
  standardsRefs: ["CASEL.2", "CASEL.5"],
  hook: "Most goals fail because they're too vague or too big. Today you write one that's small enough to start and clear enough to finish.",
  miniLesson: [
    "Specific: 'get better at math' isn't a goal. 'Score 90% on next Friday's quiz' is.",
    "Measurable: how will you know? A number, a date, or a deliverable.",
    "Time-bound + reviewable: every Sunday for 2 minutes, look at the goal. Are you on track? If not, why? Goals without reviews drift."
  ],
  workedExample: {
    prompt:
      "Maya wants to 'be better at reading.' Turn that into a real goal.",
    steps: [
      "Specific: read 6 chapter books over the summer.",
      "Measurable: book count, plus a 1-paragraph summary for each.",
      "Time-bound: 8-week summer, so 1 book about every 9 days.",
      "Reviewable: Sunday night, check 'did I finish this week's chapters?' Adjust if behind."
    ],
    answer: "Specific + measurable + time-bound + reviewable."
  },
  items: [
    {
      id: "g6.study.e.d5.q1",
      type: "multiple_choice",
      stem: "Which is the BEST goal?",
      choices: [
        "Practice piano for 20 minutes 5 days a week and learn 'Für Elise' in 4 weeks.",
        "Be good at piano.",
        "Try harder.",
        "Get better."
      ],
      answerIndex: 0,
      explanation: "Specific (Für Elise), measurable (20 min × 5 days), time-bound (4 weeks). The others can't be checked.",
      hintLadder: [
        "Skip vague options.",
        "Look for time + measure + specific content.",
        "20 min × 5 days × 4 weeks + named piece."
      ]
    },
    {
      id: "g6.study.e.d5.q2",
      type: "multiple_choice",
      stem: "Why is the WEEKLY REVIEW step often skipped?",
      choices: [
        "It's secretly illegal.",
        "It can show you're behind, which feels bad.",
        "It takes too long.",
        "Computers do it automatically."
      ],
      answerIndex: 1,
      explanation: "Reviews surface bad news. Skipping them feels safer in the moment but lets goals quietly die.",
      hintLadder: [
        "What does a review reveal?",
        "Sometimes you're behind.",
        "Avoiding it = avoiding bad news."
      ]
    },
    {
      id: "g6.study.e.d5.q3",
      type: "multiple_choice",
      stem:
        "Your goal was 6 books in 8 weeks. After 4 weeks, you've finished 2. Best move:",
      choices: [
        "Give up.",
        "Restart from scratch.",
        "Pretend you're on track.",
        "Adjust: pick 4 total books and finish strong, OR add 30 min/day to catch up — but decide on purpose."
      ],
      answerIndex: 3,
      explanation: "Mid-flight adjustment beats quitting OR pretending. Decide whether to shrink the goal or add time.",
      hintLadder: [
        "Don't quit and don't lie.",
        "What are the two real options?",
        "Shrink the goal or add time."
      ],
      misconceptionsTargeted: ["all-or-nothing"]
    },
    {
      id: "g6.study.e.d5.q4",
      type: "multiple_choice",
      stem: "When a goal is HIT, what's the right next step?",
      choices: [
        "Set a much bigger goal immediately.",
        "Coast for a month.",
        "Celebrate briefly, write what worked, then pick the next goal one step bigger.",
        "Tell everyone you've peaked."
      ],
      answerIndex: 2,
      explanation: "Pause to learn, then build on it. Skipping the learning step wastes the goal.",
      hintLadder: [
        "What's the cheap-but-skipped step?",
        "Writing what worked.",
        "Celebrate + record + next goal."
      ]
    },
    {
      id: "g6.study.e.d5.q5",
      type: "short_answer",
      stem:
        "Write one personal goal you'd commit to for the next 4 weeks. Make it specific, measurable, time-bound, AND describe how you'll review it weekly.",
      rubric: {
        level3: "Specific content, measurable target, 4-week timeline, and a concrete weekly review trigger (day + time + format).",
        level2: "Three of four elements present.",
        level1: "Vague."
      },
      exemplar:
        "Goal: write 4 short stories (~500 words each) in 4 weeks. Review: every Sunday at 7 PM, check if this week's story is done; if not, decide whether to catch up Mon-Tue or shrink the next week's plan.",
      hintLadder: [
        "Pick one specific thing.",
        "Add a number and a deadline.",
        "Add a weekly review time."
      ]
    }
  ],
  reflectionPrompt:
    "This week you built planning, focus, notes, memory, and goals. Which technique are you actually going to use first?",
  misconceptionBank: [
    {
      id: "all-or-nothing",
      label: "Treats a missed goal as total failure",
      description: "When behind, gives up entirely instead of adjusting the goal or the pace.",
      coachMove: "Falling behind is information, not a verdict. Two real moves: shrink the goal or add time. Pick one on purpose."
    }
  ]
};
