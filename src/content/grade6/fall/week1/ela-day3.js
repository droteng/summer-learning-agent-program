// Grade 6 ELA/Writing — Fall Expedition, Week 1 (Back to Basics), Day 3.
// Topic: goal-setting writing. Re-anchors paragraph structure (claim +
// reasons) while the child sets concrete fall learning goals.

export const fallG6ElaW1D3 = {
  id: "g6.fall.ela.w1.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Set your fall goals — claims and reasons",
  topicTag: "goal-setting-writing",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.W.6.1", "CCSS.W.6.4"],
  hook: "A goal is just a claim about your future self. Today you write fall goals the way a strong writer makes any claim: clear, specific, and backed by reasons.",
  miniLesson: [
    "A strong goal is specific and measurable: 'read 4 chapter books by November' beats 'read more.'",
    "Back each goal with a reason — the 'because' that makes it matter to you.",
    "A clear claim sentence states WHAT you'll do; the reason states WHY. Together they're a mini-paragraph."
  ],
  workedExample: {
    prompt: "Turn the weak goal 'do better in math' into a strong goal with a reason.",
    steps: [
      "Make it specific: what exactly, and how will you measure it?",
      "Add a number or deadline: 'finish all 8 fall math missions by the end of October.'",
      "Add a reason: 'because I want ratios to feel easy before the data project.'",
      "Combine: claim + because = a complete goal."
    ],
    answer: "I'll finish all 8 fall math missions by the end of October, because I want ratios to feel easy before the data project."
  },
  items: [
    {
      id: "g6.fall.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which is the STRONGEST goal?",
      choices: [
        "Be better at writing.",
        "Write more this fall.",
        "Write one short story and revise it twice by the end of the season.",
        "Try to write sometimes."
      ],
      answerIndex: 2,
      explanation: "It names exactly what (one story, revised twice) and a deadline (end of the season) — specific and measurable.",
      hintLadder: [
        "Which one could you clearly check off as done or not done?",
        "Look for a number and a deadline.",
        "Specific + measurable wins."
      ]
    },
    {
      id: "g6.fall.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In the goal 'I'll read 4 books by November BECAUSE I want a bigger vocabulary,' which part is the reason?",
      choices: [
        "I'll read 4 books",
        "by November",
        "because I want a bigger vocabulary",
        "4 books"
      ],
      answerIndex: 2,
      explanation: "The reason is the 'because' clause — it explains why the goal matters.",
      hintLadder: [
        "The reason answers WHY, not what or when.",
        "Find the word 'because.'",
        "Everything after 'because' is the reason."
      ]
    },
    {
      id: "g6.fall.ela.w1.d3.q3",
      type: "short_answer",
      stem: "Rewrite this weak goal as a strong one with a deadline and a reason: 'Get better at reading.'",
      rubric: {
        level3: "Specific + measurable + a deadline AND a genuine 'because' reason.",
        level2: "Adds either a measure/deadline OR a reason, but not both.",
        level1: "Still vague ('read more') with no measure or reason."
      },
      exemplar: "I'll read for 20 minutes every weekday through October, because I want to finish the Founder's Book and keep up my reading pace.",
      hintLadder: [
        "What exactly will you read, and how much?",
        "By when?",
        "Add a 'because' that's true for you."
      ]
    },
    {
      id: "g6.fall.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write ONE fall goal for a subject you find hard. Include what you'll do, by when, and why.",
      rubric: {
        level3: "Clear action + deadline + personal reason, all three present and specific.",
        level2: "Two of the three present, or somewhat vague.",
        level1: "Vague goal with no measure, deadline, or reason."
      },
      exemplar: "I'll complete two coding missions a week through October, because loops still confuse me and I want them to click before the pattern project.",
      hintLadder: [
        "Pick the subject honestly — the hard one.",
        "Name a doable weekly action.",
        "Add the deadline and your reason."
      ]
    },
    {
      id: "g6.fall.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Why does adding a REASON ('because...') make a goal more likely to stick? Answer in 1–2 sentences.",
      rubric: {
        level3: "Explains that a personal reason creates motivation/ownership, making you more likely to follow through.",
        level2: "Gives a partial idea (e.g., 'it helps') without explaining the motivation link.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "A reason connects the goal to something you actually care about, so when it gets hard you remember why it's worth doing.",
      hintLadder: [
        "Think about what happens when a goal gets boring or hard.",
        "What keeps you going?",
        "Connect 'reason' to 'motivation.'"
      ]
    }
  ],
  reflectionPrompt: "Save your strongest fall goal somewhere you'll see it. What's the very first small step you'll take this week?",
  misconceptionBank: [
    {
      id: "vague-goal-no-measure",
      label: "Sets goals with no way to measure them",
      description: "Writes 'do better' or 'try harder' with nothing to check against.",
      coachMove: "Ask: 'How will you KNOW you did it?' If there's no number or deadline, the goal isn't finished yet."
    }
  ]
};
