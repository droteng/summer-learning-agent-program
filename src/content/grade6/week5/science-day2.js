// Grade 6 Science — Week 5, Day 2.
// Topic: engineering design process.

export const grade6ScienceWeek5Day2 = {
  id: "g6.sci.w5.d2",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Science",
  topic: "Engineering design process",
  topicTag: "engineering-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ETS1-1", "NGSS.MS-ETS1-2"],
  hook: "Real engineers don't get it right the first time. They follow a loop. Today you walk a tiny invention through that loop.",
  miniLesson: [
    "Define the problem. State who has the problem, what hurts, and what counts as a fix. Specific beats vague.",
    "Brainstorm + prototype. Many cheap, ugly ideas first. Pick one. Build the smallest version that proves it.",
    "Test, learn, iterate. Try the prototype on a real user. Note what failed. Change one thing. Try again."
  ],
  workedExample: {
    prompt:
      "Problem: my backpack pockets are too shallow and my pens fall out. Walk this through the design loop.",
    steps: [
      "Define: criteria — pens stay in even when backpack tips over.",
      "Brainstorm: longer flap, elastic loop, magnetic clip, zipper.",
      "Prototype: cheapest first — a piece of elastic sewn across the pocket.",
      "Test: pens stay in. Iteration: elastic too tight? loosen it. Too loose? tighten."
    ],
    answer: "Define → prototype → test → iterate."
  },
  items: [
    {
      id: "g6.sci.w5.d2.q1",
      type: "multiple_choice",
      stem: "What's the FIRST step in the engineering design process?",
      choices: [
        "Define the problem.",
        "Buy materials.",
        "Build something.",
        "Test."
      ],
      answerIndex: 0,
      explanation: "Without a clear problem definition, building is guessing. Define first.",
      hintLadder: [
        "Before building, you need to know what for.",
        "Define the problem.",
        "Definition first."
      ]
    },
    {
      id: "g6.sci.w5.d2.q2",
      type: "multiple_choice",
      stem: "Why prototype before final build?",
      choices: [
        "To make it look fancy.",
        "To slow the project down.",
        "Because the rules say so.",
        "To test ideas cheaply before committing to expensive materials."
      ],
      answerIndex: 3,
      explanation: "Prototypes are deliberately cheap and ugly so failure is cheap too. Real builds come after you know what works.",
      hintLadder: [
        "Why test in cheap form first?",
        "Failure should be cheap.",
        "Test before commit."
      ]
    },
    {
      id: "g6.sci.w5.d2.q3",
      type: "multiple_choice",
      stem: "Your prototype catapult only launches 1 meter. The goal is 5 meters. Best NEXT step:",
      choices: [
        "Give up.",
        "Change one variable (e.g., stiffer rubber band) and retest.",
        "Change every variable at once.",
        "Buy a real catapult."
      ],
      answerIndex: 1,
      explanation: "One-variable-at-a-time is the fair-test rule from Week 1 science applied to engineering. Otherwise you can't tell what helped.",
      hintLadder: [
        "Fair-test rule from earlier weeks.",
        "Change one thing.",
        "Iterate."
      ],
      misconceptionsTargeted: ["change-everything-at-once"]
    },
    {
      id: "g6.sci.w5.d2.q4",
      type: "multiple_choice",
      stem: "What are 'criteria' in engineering design?",
      choices: [
        "Random opinions.",
        "Bad weather.",
        "Conditions the finished design must meet.",
        "Names of the engineers."
      ],
      answerIndex: 2,
      explanation: "Criteria are the must-pass conditions: cost ≤ $5, weight ≤ 100g, launches 5m, etc. They make 'done' concrete.",
      hintLadder: [
        "How do you know when you're done?",
        "What does the design have to meet?",
        "Conditions = criteria."
      ]
    },
    {
      id: "g6.sci.w5.d2.q5",
      type: "short_answer",
      stem:
        "Pick a problem in your home (lost keys, tangled cables, messy backpack). Write three criteria your solution must meet.",
      rubric: {
        level3: "Three specific, testable criteria (e.g., cost under $5, takes under 30 seconds to use, doesn't require electricity). Each is measurable.",
        level2: "Three criteria but at least one is vague.",
        level1: "One or two vague criteria."
      },
      exemplar:
        "Problem: tangled chargers. Criteria: 1) Untangling a cable takes under 10 seconds. 2) Total solution costs under $5. 3) Works without electricity.",
      hintLadder: [
        "Each criterion should be measurable.",
        "Add a number — cost, time, weight.",
        "Three of them."
      ]
    }
  ],
  reflectionPrompt: "Today you practiced the engineering loop. What's a tiny problem at home you'd want to solve this summer?",
  misconceptionBank: [
    {
      id: "change-everything-at-once",
      label: "Changes everything between iterations",
      description: "Adjusts five variables between tests, so it's impossible to tell which change helped.",
      coachMove: "Apply the fair-test rule. One change per iteration. Document each change."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather spend a week building one expensive 'perfect' prototype, or build five cheap rough ones in a day? Think like an engineer — which gets you to a working design faster?",
      answer:
        "Five cheap prototypes wins. Cheap, fast builds let you fail early, learn from each, and improve — so you find what works before spending big. That's the whole point of prototyping.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Run the Design Loop",
      challenge:
        "Pick a tiny problem (pens fall out of your bag, your earbuds tangle, your door slams). Walk it through the full engineering loop: define the problem with criteria, sketch two ideas, choose one, and describe the cheapest prototype you'd build first.",
      steps: [
        "Define the problem and write two measurable criteria for a good fix.",
        "Brainstorm and sketch at least two different ideas.",
        "Pick one idea and explain why.",
        "Describe the cheapest, smallest prototype you could build to test it."
      ],
      deliverable: "A design-loop plan: problem + criteria, two sketched ideas, your chosen idea, and a cheap prototype description.",
      choiceBoard: [
        "Sketch the ideas and write the plan.",
        "Build a real cardboard/tape prototype and describe how you'd test it.",
        "Make a 4-panel comic showing define → prototype → test → iterate."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Design Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.sci.w5.d2.arena1",
          type: "multiple_choice",
          stem: "Your prototype paper bridge holds 5 coins but the goal is 20. You add thicker paper, fold the deck, AND add supports all at once — then it holds 20. What's the PROBLEM with how you tested?",
          choices: [
            "Nothing — it worked, so it's fine.",
            "Paper bridges can't be tested.",
            "You should have given up after 5 coins.",
            "You changed several things at once, so you can't tell which change actually helped."
          ],
          answerIndex: 3,
          explanation: "Changing several variables at once breaks the fair-test rule — you can't tell which change made the difference, so you can't reliably improve next time.",
          hintLadder: [
            "Remember the fair-test rule from earlier weeks.",
            "How many things did you change between tests?",
            "Change only one thing at a time so you know what helped."
          ]
        },
        {
          id: "g6.sci.w5.d2.arena2",
          type: "short_answer",
          stem: "An engineer is designing a reusable water bottle. Write TWO specific, testable criteria the finished bottle must meet.",
          rubric: {
            level3: "Two specific, measurable criteria (e.g., holds at least 500 mL, doesn't leak when shaken for 10 seconds, costs under $8).",
            level2: "Two criteria but at least one is vague (e.g., 'works well', 'looks nice').",
            level1: "One criterion, or vague/non-testable statements."
          },
          exemplar: "1) Holds at least 750 mL of water. 2) Does not leak a single drop when held upside down and shaken for 10 seconds.",
          hintLadder: [
            "A criterion is a must-pass condition you can measure.",
            "Add a number — a volume, a time, a cost.",
            "Write two of them."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Prototype Pose",
      prompt:
        "Stand up and 'build' an invention with your body in 4 quick poses: define (think pose), sketch (draw in the air), build (hammer it), test (launch it!). Hold each pose for 5 seconds.",
      scienceTieIn: "Short bursts of movement increase blood flow and oxygen to your brain, refreshing the focus engineers need for careful iteration.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time you got something right only after a few tries. What did each failed attempt teach you for the next one?",
      badge: { id: "design-loop-engineer", name: "Design Loop Engineer", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
