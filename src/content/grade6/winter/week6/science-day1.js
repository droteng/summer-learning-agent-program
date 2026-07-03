// Grade 6 Science — Winter Expedition, Week 6 (Inventors & Engineers), Day 1.
// Topic: the engineering design process (define → brainstorm → build → test → improve).

export const winterG6ScienceW6D1 = {
  id: "g6.winter.sci.w6.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Science",
  topic: "The engineering design process",
  topicTag: "engineering-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ETS1-1", "NGSS.MS-ETS1-4"],
  hook: "A snowstorm knocks out the heat. An engineer doesn't just wish for warmth — they follow a process: define the problem, brainstorm ideas, build a prototype, test it, and improve. This week you'll invent something to solve a winter problem, and today you learn the loop that gets you there.",
  miniLesson: [
    "The engineering design process is a repeating loop: DEFINE the problem and its constraints, BRAINSTORM many possible solutions, BUILD a prototype, TEST it against the goal, then IMPROVE based on what you learned.",
    "Constraints are limits you must work within — time, cost, materials, size. Criteria are the goals a good solution must meet, like 'keeps a cup of water above 0°C for 10 minutes.'",
    "Testing rarely works the first time, and that's expected. Each failed test is data that tells you exactly what to improve — engineers iterate the loop many times."
  ],
  workedExample: {
    prompt: "A team wants to design a boot that keeps feet warm in snow. Put these actions in engineering-design order: build a boot prototype, list what a warm boot must do, test it outside, sketch several boot ideas, add more insulation after testing.",
    steps: [
      "First DEFINE: list what a warm boot must do (the criteria and constraints).",
      "Then BRAINSTORM: sketch several boot ideas.",
      "Then BUILD: make a boot prototype.",
      "Then TEST: try it outside. Finally IMPROVE: add more insulation after testing.",
      "Order: define → brainstorm → build → test → improve."
    ],
    answer: "List what a boot must do → sketch several ideas → build a prototype → test it outside → add more insulation."
  },
  items: [
    {
      id: "g6.winter.sci.w6.d1.q1",
      type: "multiple_choice",
      stem: "What is the FIRST step of the engineering design process?",
      choices: [
        "Build the final product",
        "Define the problem and its constraints",
        "Sell the invention",
        "Throw away failed tests"
      ],
      answerIndex: 1,
      explanation: "Before building anything, engineers define exactly what problem they are solving and the limits they must work within.",
      hintLadder: [
        "You can't solve a problem you haven't described yet.",
        "Which step names the problem and its limits?",
        "The first step is to DEFINE the problem."
      ]
    },
    {
      id: "g6.winter.sci.w6.d1.q2",
      type: "multiple_choice",
      stem: "During BRAINSTORMING, what should an engineer do?",
      choices: [
        "Pick the very first idea and stop",
        "Come up with many different possible solutions",
        "Skip straight to testing",
        "Only copy someone else's finished design"
      ],
      answerIndex: 1,
      explanation: "Brainstorming is about generating lots of ideas so you have real choices before committing to a build.",
      hintLadder: [
        "Brainstorming is about quantity of ideas, not judging them yet.",
        "More ideas mean more options to choose from.",
        "Generate many possible solutions."
      ],
      misconceptionsTargeted: ["first-idea-is-best"]
    },
    {
      id: "g6.winter.sci.w6.d1.q3",
      type: "multiple_choice",
      stem: "A team's prototype snow shovel bends on the first push. In the design process, this failed test is BEST described as...",
      choices: [
        "A reason to give up",
        "Useful data that tells them what to improve",
        "Proof the shovel can never work",
        "Something to hide from the team"
      ],
      answerIndex: 1,
      explanation: "In engineering, a failed test is information — it shows exactly which part to strengthen in the next version.",
      hintLadder: [
        "What does a failed test teach you?",
        "Engineers expect to improve after testing.",
        "The failure is data pointing to the fix."
      ]
    },
    {
      id: "g6.winter.sci.w6.d1.q4",
      type: "short_answer",
      stem: "A criterion is a goal a solution must meet; a constraint is a limit you must work within. Write ONE criterion and ONE constraint for a device that keeps hot cocoa warm on a cold walk to school.",
      rubric: {
        level3: "States a clear, measurable criterion (a goal the device must meet) AND a real constraint (a limit like cost, size, weight, or materials).",
        level2: "Gives one solid criterion and one constraint but one is vague, OR gives two of the same kind.",
        level1: "Confuses the two, or gives neither clearly."
      },
      exemplar: "Criterion: it must keep the cocoa above 50°C for 15 minutes. Constraint: it must fit inside my backpack and cost under $10 to build.",
      hintLadder: [
        "Criterion = what a GOOD device must do (a measurable goal).",
        "Constraint = a LIMIT you have to respect (cost, size, weight, time).",
        "Write one of each in a sentence."
      ]
    },
    {
      id: "g6.winter.sci.w6.d1.q5",
      type: "short_answer",
      stem: "Explain why engineers repeat the design loop instead of stopping after building one prototype. Use the word 'test' or 'improve.'",
      rubric: {
        level3: "Explains that the first prototype rarely meets all criteria, and that testing reveals problems so the design can be improved through repeated loops.",
        level2: "Mentions testing or improving but the reasoning for repeating is thin.",
        level1: "No clear reason for iterating, or says the first build is always final."
      },
      exemplar: "The first prototype almost never works perfectly. When engineers test it, they find weak spots, so they improve the design and test again. Repeating the loop makes each version better.",
      hintLadder: [
        "Does a first try usually meet every goal?",
        "What does testing reveal that you then fix?",
        "Link testing to improving, and explain why you repeat."
      ]
    }
  ],
  reflectionPrompt: "Think of something you use in winter that could work better — a glove, a sled, a scraper. What is the FIRST problem you'd define if you set out to redesign it?",
  misconceptionBank: [
    {
      id: "first-idea-is-best",
      label: "Thinks the first idea is always the best idea",
      description: "Skips real brainstorming and testing, assuming the first design will work.",
      coachMove: "Ask for three DIFFERENT ideas before choosing one, and remind them that testing usually finds a better version."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Frozen Doorknob",
      prompt:
        "Every winter morning, the metal doorknob to the shed is too cold and slippery to grip with mittens. Before you build anything, what QUESTIONS would a good engineer ask to define this problem? Name at least two.",
      answer:
        "Great engineers ask questions like: How cold does it get? Who uses the door, and are they wearing gloves? How much can I spend? What can attach to a knob without breaking it? Defining the problem well — the constraints and goals — comes BEFORE any building.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design-Loop Storyboard",
      challenge:
        "Pick a winter annoyance (icy steps, cold hands, a frosted window) and storyboard the full engineering design loop for solving it: define → brainstorm → build → test → improve. Show what happens at EACH stage.",
      materials: ["Paper & markers, OR a slides/drawing app"],
      steps: [
        "Choose one winter problem and write a one-sentence DEFINE box with a goal and a limit.",
        "In the BRAINSTORM box, sketch or list at least three different ideas.",
        "In the BUILD and TEST boxes, describe the prototype you'd make and how you'd test it.",
        "In the IMPROVE box, name one change you'd expect to make after testing."
      ],
      deliverable: "A five-panel storyboard showing your winter problem move through all five design-loop stages.",
      choiceBoard: [
        "Draw the five-panel storyboard with a picture in each box.",
        "Write a five-paragraph 'inventor's log,' one paragraph per stage.",
        "Make a comic strip where an inventor loops back to IMPROVE after a funny failed test."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Design Process Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w6.d1.arena1",
          type: "multiple_choice",
          stem: "An inventor tests an ice-scraper prototype, learns the blade is too dull, changes the blade, and tests AGAIN. Which two design-process steps is she repeating?",
          choices: [
            "Define and brainstorm",
            "Test and improve",
            "Sell and ship",
            "Brainstorm and build only"
          ],
          answerIndex: 1,
          explanation: "Learning from a test and then changing the design is the TEST → IMPROVE part of the loop, repeated.",
          hintLadder: [
            "She tried it out, then made it better.",
            "Which two words match 'tried it' and 'made it better'?",
            "Test and improve."
          ]
        },
        {
          id: "g6.winter.sci.w6.d1.arena2",
          type: "short_answer",
          stem: "Your team must design a winter shelter for a school garden, but you only have 30 minutes, a stack of cardboard, and tape. Name ONE constraint and ONE criterion, then explain how the constraint shapes your brainstorm.",
          rubric: {
            level3: "Names a real constraint (30 min, cardboard-only, tape) AND a criterion (e.g., blocks wind/keeps plants above freezing) AND explains how the limit narrows which ideas are worth brainstorming.",
            level2: "Names a constraint and a criterion but the explanation of how it shapes brainstorming is weak.",
            level1: "Confuses constraint and criterion, or gives no explanation."
          },
          exemplar: "Constraint: I only have cardboard and tape. Criterion: it must block wind and keep the plants above freezing. Because I can't use heaters or glass, I brainstorm folding, layering, and angling cardboard to trap air and block wind instead of ideas that need power.",
          hintLadder: [
            "Constraint = a limit (time, materials); criterion = a goal.",
            "Which brainstorm ideas does 'cardboard and tape only' rule OUT?",
            "Explain how the limit steers your ideas."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Build–Test–Improve Shake",
      prompt:
        "Act out the loop: 'BUILD' by stacking imaginary blocks up high, 'TEST' by pushing on your tower, 'IMPROVE' by shaking out your arms and rebuilding stronger. Repeat the three-move cycle 4 times, a little bigger each round.",
      scienceTieIn: "Moving between focused effort and a reset mirrors how engineers cycle between building and rethinking — short movement breaks actually help your brain recharge for the next round of problem-solving.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time something you made didn't work on the first try. Which design-process step — define, brainstorm, build, test, or improve — would have helped you most, and why?",
      badge: { id: "design-loop-launcher", name: "Design Loop Launcher", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
