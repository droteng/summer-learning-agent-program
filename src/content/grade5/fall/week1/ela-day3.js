// Grade 5 ELA/Writing — Fall Expedition, Week 1 (Back to Basics), Day 3.
// Grade 5 counterpart of g6.fall.ela.w1.d3. Same topic (goal-setting writing:
// claims and reasons) pitched down to Grade 5: paragraph frames, simpler
// vocabulary, shorter passages.

export const fallG5ElaW1D3 = {
  id: "g5.fall.ela.w1.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Set your fall goals — claims and reasons",
  topicTag: "goal-setting-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1", "CCSS.ELA-LITERACY.W.5.4"],
  hook: "A goal is a promise you make about your future self. Today you write fall goals the way a strong writer makes a point: clear, specific, and backed by a reason.",
  miniLesson: [
    "A strong goal is specific and easy to check: 'read 3 chapter books by November' is better than 'read more.'",
    "Back each goal with a reason — the 'because' that tells why it matters to you.",
    "Try this frame: 'I will ___ by ___, because ___.' The first blank is WHAT, the second is WHEN, and the 'because' is WHY."
  ],
  workedExample: {
    prompt: "Turn the weak goal 'do better in math' into a strong goal with a reason.",
    steps: [
      "Make it specific: what exactly, and how will you know you did it?",
      "Add a number or a deadline: 'finish all my fall math missions by the end of October.'",
      "Add a reason: 'because I want multiplying to feel easy.'",
      "Put it together using the frame: I will ___ by ___, because ___."
    ],
    answer: "I will finish all my fall math missions by the end of October, because I want multiplying to feel easy."
  },
  items: [
    {
      id: "g5.fall.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which is the STRONGEST goal?",
      choices: [
        "Be better at writing.",
        "Write one short story and check it over twice by the end of the season.",
        "Write more this fall.",
        "Try to write sometimes."
      ],
      answerIndex: 1,
      explanation: "It says exactly what (one story, checked twice) and when (by the end of the season), so you can tell if you did it.",
      hintLadder: [
        "Which one could you clearly mark as done or not done?",
        "Look for a number and a deadline.",
        "Specific plus a deadline wins."
      ]
    },
    {
      id: "g5.fall.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In the goal 'I will read 3 books by November BECAUSE I want a bigger vocabulary,' which part is the reason?",
      choices: [
        "because I want a bigger vocabulary",
        "by November",
        "I will read 3 books",
        "3 books"
      ],
      answerIndex: 0,
      explanation: "The reason is the 'because' part — it tells why the goal matters.",
      hintLadder: [
        "The reason answers WHY, not what or when.",
        "Find the word 'because.'",
        "Everything after 'because' is the reason."
      ]
    },
    {
      id: "g5.fall.ela.w1.d3.q3",
      type: "short_answer",
      stem: "Rewrite this weak goal as a strong one with a deadline and a reason: 'Get better at reading.'",
      rubric: {
        level3: "Specific action + a deadline AND a real 'because' reason, all present.",
        level2: "Adds either a measure/deadline OR a reason, but not both.",
        level1: "Still vague ('read more') with no measure or reason."
      },
      exemplar: "I will read for 15 minutes every school night through October, because I want to finish my chapter book and read faster.",
      hintLadder: [
        "What exactly will you read, and how much?",
        "By when?",
        "Add a 'because' that is true for you."
      ]
    },
    {
      id: "g5.fall.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write ONE fall goal for a subject you find hard. Include what you will do, by when, and why. Use the frame: I will ___ by ___, because ___.",
      rubric: {
        level3: "Clear action + deadline + personal reason, all three present and specific.",
        level2: "Two of the three present, or somewhat vague.",
        level1: "Vague goal with no measure, deadline, or reason."
      },
      exemplar: "I will finish one coding mission each week through October, because loops still confuse me and I want them to feel easy.",
      hintLadder: [
        "Pick the subject honestly — the hard one.",
        "Name a doable weekly action.",
        "Add the deadline and your reason with 'because.'"
      ]
    },
    {
      id: "g5.fall.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Why does adding a REASON ('because...') make a goal easier to stick with? Answer in 1–2 sentences.",
      rubric: {
        level3: "Explains that a personal reason gives you motivation, so you are more likely to keep going.",
        level2: "Gives a partial idea (e.g., 'it helps') without explaining the motivation.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "A reason connects the goal to something I really care about, so when it gets hard I remember why it is worth doing.",
      hintLadder: [
        "Think about what happens when a goal gets boring or hard.",
        "What keeps you going?",
        "Connect the word 'reason' to the word 'motivation.'"
      ]
    }
  ],
  reflectionPrompt: "Put your strongest fall goal somewhere you will see it. What is the very first small step you will take this week?",
  misconceptionBank: [
    {
      id: "vague-goal-no-measure",
      label: "Sets goals with no way to check them",
      description: "Writes 'do better' or 'try harder' with nothing to check against.",
      coachMove: "Ask: 'How will you KNOW you did it?' If there is no number or deadline, the goal is not finished yet."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Goal?",
      prompt:
        "Would you rather set the goal 'get better at reading' or 'read 3 books before the leaves are gone'? Pick one and explain which goal you could actually mark as done.",
      answer: "'Read 3 books before the leaves are gone' is stronger — it is specific (3 books) and has a deadline, so you can tell if you did it. 'Get better' has no way to check.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Goal Banner",
      challenge:
        "Design a back-to-school goal banner. Write three fall goals, each as a claim plus a 'because' reason, then make it look like something you would post above your desk.",
      steps: [
        "Write three goals, each specific (with a number or a deadline).",
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
          id: "g5.fall.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which goal is BOTH easy to check AND backed by a reason?",
          choices: [
            "I want to do better in science.",
            "I will practice multiplication facts so I am faster.",
            "I will read for 10 minutes every school night through October because I want chapter books to feel easy.",
            "I will try harder this fall because school matters."
          ],
          answerIndex: 2,
          explanation: "It has a checkable action (10 minutes every school night through October) AND a real 'because' reason. The others miss the measure, the deadline, or both.",
          hintLadder: [
            "Look for a number or deadline you could check.",
            "Then check that it also has a real 'because' reason.",
            "Only one option has both a measure AND a reason."
          ]
        },
        {
          id: "g5.fall.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Rewrite this weak goal into a strong one: 'Be better at coding.' Include exactly what you will do, a deadline, and a 'because' reason.",
          rubric: {
            level3: "Specific action + a deadline + a real 'because' reason, all three clearly present.",
            level2: "Has two of the three (e.g., action and deadline but no reason).",
            level1: "Still vague, or missing two of the three parts."
          },
          exemplar: "I will finish one coding mission every weekend through October, because loops still trip me up and I want them to feel easy.",
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
        "Stand up, roll your shoulders back, and say your top fall goal out loud while standing tall for 20 seconds. Notice how standing tall changes how the goal feels.",
      scienceTieIn: "Standing tall and saying a goal aloud can boost your confidence and lower stress, helping your brain commit to the plan.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your single strongest fall goal again, then add the very first small step you will take this week to start it.",
      badge: { id: "g5-fall-goal-setter", name: "Goal Setter", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
