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
  estimatedMinutes: 18,
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
        "Build something.",
        "Buy materials.",
        "Define the problem.",
        "Test."
      ],
      answerIndex: 2,
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
        "To test ideas cheaply before committing to expensive materials.",
        "Because the rules say so.",
        "To slow the project down."
      ],
      answerIndex: 1,
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
        "Conditions the finished design must meet.",
        "Bad weather.",
        "Names of the engineers."
      ],
      answerIndex: 1,
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
  ]
};
