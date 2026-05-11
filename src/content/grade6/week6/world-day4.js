// Grade 6 World — Week 6, Day 4.
// Topic: perspectives and bias.

export const grade6WorldWeek6Day4 = {
  id: "g6.world.w6.d4",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Perspectives and bias",
  topicTag: "perspectives",
  estimatedMinutes: 18,
  standardsRefs: ["C3.D2.Civ.10.6-8", "C3.D2.His.6.6-8"],
  hook: "Two people can watch the same event and tell different stories. Today you spot perspective and bias — without picking sides.",
  miniLesson: [
    "Perspective: where someone is standing — what they care about, who they speak for. Everyone has one.",
    "Bias: a leaning that shapes which facts get told, in which order, and which get left out.",
    "Reading multiple perspectives doesn't mean 'both sides are equal' — it means you see the picture more fully."
  ],
  workedExample: {
    prompt:
      "A new road is being built. The construction company says 'jobs!' Local families say 'noise!' Are these views opposites or partial?",
    steps: [
      "Each view names a real concern.",
      "Jobs and noise both happen — neither view is fake.",
      "Each is partial: jobs ignores noise; noise ignores jobs.",
      "A full picture combines both, and adds new questions (e.g., will the jobs go to local families?)."
    ],
    answer: "Both perspectives are real and partial. Combining them gives a fuller picture."
  },
  items: [
    {
      id: "g6.world.w6.d4.q1",
      type: "multiple_choice",
      stem: "What does 'perspective' mean in a news context?",
      choices: [
        "An opinion is always wrong.",
        "The viewpoint someone speaks from — what they see and care about.",
        "A type of camera lens.",
        "A fake story."
      ],
      answerIndex: 1,
      explanation: "Perspective is the viewpoint someone speaks from. It's not the same as 'wrong'; it's just partial.",
      hintLadder: [
        "Think 'where someone's standing.'",
        "It shapes what they notice.",
        "Perspective = viewpoint."
      ]
    },
    {
      id: "g6.world.w6.d4.q2",
      type: "multiple_choice",
      stem:
        "A news article quotes only a company spokesperson about a factory's effects on the river. What's missing?",
      choices: [
        "Nothing — one source is enough.",
        "The perspective of people who live near or use the river.",
        "The factory's logo.",
        "Bigger fonts."
      ],
      answerIndex: 1,
      explanation: "One perspective is partial. People affected by the river should be heard too.",
      hintLadder: [
        "Who else is affected?",
        "Whose voice is not in the article?",
        "Neighbors / river users."
      ],
      misconceptionsTargeted: ["one-voice-is-full-story"]
    },
    {
      id: "g6.world.w6.d4.q3",
      type: "multiple_choice",
      stem: "Bias is BEST described as:",
      choices: [
        "A neutral fact.",
        "A leaning that shapes what's reported and what's left out.",
        "A type of error message.",
        "Always intentional lying."
      ],
      answerIndex: 1,
      explanation: "Bias is a leaning, conscious or not. It shapes selection (what gets in), order, and framing.",
      hintLadder: [
        "Bias affects which facts make it in.",
        "Not always intentional.",
        "A leaning."
      ]
    },
    {
      id: "g6.world.w6.d4.q4",
      type: "multiple_choice",
      stem:
        "Two students disagree about whether a school rule is fair. What's a respectful way to keep the conversation going?",
      choices: [
        "Yell over each other.",
        "Each names what they see and what they value, then ask one specific question of the other.",
        "Stop talking to each other.",
        "Vote and end it."
      ],
      answerIndex: 1,
      explanation: "Naming values and asking specific questions turns disagreement into shared problem-solving.",
      hintLadder: [
        "How do you keep listening when you disagree?",
        "Name your view, then ask theirs.",
        "Specific questions."
      ]
    },
    {
      id: "g6.world.w6.d4.q5",
      type: "short_answer",
      stem:
        "Pick a topic where you've heard two views (homework, screen time, school lunches). Write each view in one sentence, without judging either.",
      rubric: {
        level3: "Two sentences, each fairly representing a real perspective without dismissive language. No 'they say' / 'we say' framing.",
        level2: "Two sentences but one is judged or dismissed.",
        level1: "One view only or both judged."
      },
      exemplar:
        "View 1: Kids learn discipline and skills from homework practice. View 2: Long homework cuts into family time and sleep, which also matter for learning.",
      hintLadder: [
        "Pick a topic with real disagreement.",
        "Write each side's strongest case.",
        "Skip dismissive words."
      ]
    }
  ],
  reflectionPrompt: "Today you held two perspectives at once. Where in your life could you practice this more?",
  misconceptionBank: [
    {
      id: "one-voice-is-full-story",
      label: "Treats a single source's perspective as the full story",
      description: "Reads one company's statement or one resident's view as the complete picture.",
      coachMove: "Ask: whose voice am I not hearing? Add a second perspective before deciding."
    }
  ]
};
