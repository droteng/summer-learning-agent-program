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
  estimatedMinutes: 60, // full Daily Hour
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
        "because I want a bigger vocabulary",
        "by November",
        "I'll read 4 books",
        "4 books"
      ],
      answerIndex: 0,
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Goal?",
      prompt:
        "Would you rather set the goal 'get better at reading' or 'read 3 books before the leaves are gone'? Pick one and explain which goal you could actually check off as done.",
      answer: "'Read 3 books before the leaves are gone' is the stronger goal — it's specific (3 books) and has a deadline, so you can clearly tell if you did it. 'Get better' has no way to measure it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Goal Banner",
      challenge:
        "Design a back-to-school goal banner. Write three fall goals, each as a claim + a 'because' reason, then make them look like something you'd actually post above your desk.",
      steps: [
        "Write three goals, each specific and measurable (number or deadline).",
        "Add a true 'because' reason to each one.",
        "Pick your strongest goal and make it the biggest on the banner.",
        "Add a small fall doodle or symbol next to each goal."
      ],
      deliverable: "A goal banner with three specific goals, each backed by a 'because' reason.",
      choiceBoard: [
        "Make a drawn or typed banner with three goals.",
        "Record a 30-second pep talk reading your goals aloud.",
        "Write a short letter to your November self about these goals."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Goal-Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which goal is BOTH measurable AND backed by a reason?",
          choices: [
            "I want to do better in science.",
            "I'll read for 15 minutes every school night through October because I want chapter books to feel easy.",
            "I'll practice multiplication facts so I'm faster.",
            "I'll try harder this fall because school matters."
          ],
          answerIndex: 1,
          explanation: "It has a measurable action (15 minutes every school night through October) AND a genuine 'because' reason. The others miss the measure, the deadline, or both.",
          hintLadder: [
            "Look for a number or deadline you could check.",
            "Then check that it also has a real 'because' reason.",
            "Only one option has both a measure AND a reason."
          ]
        },
        {
          id: "g6.fall.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Rewrite this weak goal into a strong one: 'Be better at coding.' Include exactly what you'll do, a deadline, and a 'because' reason.",
          rubric: {
            level3: "Specific measurable action + a deadline + a genuine 'because' reason, all three clearly present.",
            level2: "Has two of the three (e.g., action and deadline but no reason).",
            level1: "Still vague, or missing two of the three parts."
          },
          exemplar: "I'll finish one coding mission every weekend through October, because loops still trip me up and I want them to feel easy before the pattern project.",
          hintLadder: [
            "Name the exact action and how much.",
            "Add a deadline — by when?",
            "Finish with a true 'because' reason."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Stand Tall, Goal Set",
      prompt:
        "Stand up, roll your shoulders back, and say your top fall goal out loud while standing tall for 20 seconds. Notice how a confident posture changes how the goal feels.",
      scienceTieIn: "Standing tall and saying a goal aloud can boost confidence and reduce stress hormones, helping your brain commit to the plan.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your single strongest fall goal again, then add the very first small step you'll take this week to start it.",
      badge: { id: "fall-goal-setter", name: "Goal Setter", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
