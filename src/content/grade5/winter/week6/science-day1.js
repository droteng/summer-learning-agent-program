// Grade 5 Science — Winter Expedition, Week 6 (Inventors & Engineers), Day 1.
// Grade 5 counterpart of g6.winter.sci.w6.d1. Same topic (the engineering
// design process: define → brainstorm → build → test → improve) pitched down
// to Grade 5: shorter passages, everyday examples, and vocab support for
// "criterion" and "constraint." Wintry, frozen-world STEM tone.

export const winterG5ScienceW6D1 = {
  id: "g5.winter.sci.w6.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Science",
  topic: "The engineering design process",
  topicTag: "engineering-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-5-ETS1-1", "NGSS.3-5-ETS1-3"],
  hook: "A snowstorm knocks out the heat. A good inventor does not just wish for warmth — they follow a plan: DEFINE the problem, BRAINSTORM ideas, BUILD a model, TEST it, and IMPROVE it. This week you will invent something to solve a winter problem. Today you learn the five-step loop that gets you there.",
  miniLesson: [
    "The engineering design process is a loop with five steps: DEFINE the problem, BRAINSTORM lots of ideas, BUILD a model, TEST it, then IMPROVE it. When you finish, you can go around the loop again to make it even better.",
    "Two helpful words: a GOAL is what a good solution must do — like 'keep water from freezing for 10 minutes.' A LIMIT is a rule you must follow — like how much time, money, or material you have. (Scientists call a goal a 'criterion' and a limit a 'constraint.')",
    "Your first try almost never works perfectly, and that is okay. When a test does not go well, it is not a failure — it is a clue. It shows you exactly what to fix next time."
  ],
  workedExample: {
    prompt: "A team wants to design a boot that keeps feet warm in snow. Put these actions in the right design order: build a boot model, list what a warm boot must do, test it outside, sketch a few boot ideas, add more padding after testing.",
    steps: [
      "First DEFINE: list what a warm boot must do (its goals and limits).",
      "Then BRAINSTORM: sketch a few boot ideas.",
      "Then BUILD: make a boot model.",
      "Then TEST: try it outside. Then IMPROVE: add more padding after testing.",
      "Order: define → brainstorm → build → test → improve."
    ],
    answer: "List what a boot must do → sketch a few ideas → build a model → test it outside → add more padding."
  },
  items: [
    {
      id: "g5.winter.sci.w6.d1.q1",
      type: "multiple_choice",
      stem: "What is the FIRST step of the engineering design process?",
      choices: [
        "Build the final product",
        "Define the problem you are trying to solve",
        "Sell the invention",
        "Throw away a test that did not work"
      ],
      answerIndex: 1,
      explanation: "Before building anything, inventors define exactly what problem they are solving and what rules they must follow.",
      hintLadder: [
        "You cannot solve a problem you have not described yet.",
        "Which step names the problem first?",
        "The first step is to DEFINE the problem."
      ]
    },
    {
      id: "g5.winter.sci.w6.d1.q2",
      type: "multiple_choice",
      stem: "When you BRAINSTORM, what should you do?",
      choices: [
        "Pick the very first idea and stop",
        "Come up with lots of different ideas",
        "Skip straight to testing",
        "Copy someone else's finished design exactly"
      ],
      answerIndex: 1,
      explanation: "Brainstorming means making lots of ideas so you have real choices before you build.",
      hintLadder: [
        "Brainstorming is about getting MANY ideas, not judging them yet.",
        "More ideas means more choices.",
        "Come up with lots of different ideas."
      ],
      misconceptionsTargeted: ["first-idea-is-best"]
    },
    {
      id: "g5.winter.sci.w6.d1.q3",
      type: "multiple_choice",
      stem: "A team's model snow shovel bends on the first push. In the design process, this test that did not work is BEST described as...",
      choices: [
        "A reason to give up",
        "A helpful clue that shows what to fix",
        "Proof the shovel can never work",
        "Something to hide from the team"
      ],
      answerIndex: 1,
      explanation: "A test that does not go well is a clue — it shows exactly which part to make stronger in the next version.",
      hintLadder: [
        "What does a test that did not work teach you?",
        "Inventors expect to improve after testing.",
        "The problem is a clue that points to the fix."
      ]
    },
    {
      id: "g5.winter.sci.w6.d1.q4",
      type: "short_answer",
      stem: "A GOAL is what a good device must do. A LIMIT is a rule you must follow. Write ONE goal and ONE limit for a device that keeps hot cocoa warm on a cold walk to school.",
      rubric: {
        level3: "States a clear goal (something the device must do, like keeping cocoa warm for a set time) AND a real limit (like cost, size, or weight).",
        level2: "Gives one solid goal and one limit, but one is vague OR both are the same kind.",
        level1: "Mixes up goal and limit, or gives neither clearly."
      },
      exemplar: "Goal: it must keep the cocoa warm for the whole 15-minute walk. Limit: it has to fit inside my backpack and cost less than $10.",
      hintLadder: [
        "Goal = what a GOOD device must do.",
        "Limit = a rule you must follow (cost, size, weight, time).",
        "Write one of each in a sentence."
      ]
    },
    {
      id: "g5.winter.sci.w6.d1.q5",
      type: "short_answer",
      stem: "Explain why inventors go around the design loop again instead of stopping after building just one model. Use the word 'test' or 'improve.'",
      rubric: {
        level3: "Explains that the first model rarely meets every goal, and that testing shows the problems so the design can be improved by going around the loop again.",
        level2: "Mentions testing or improving, but the reason for repeating is thin.",
        level1: "No clear reason for repeating, or says the first build is always final."
      },
      exemplar: "The first model almost never works perfectly. When inventors test it, they find weak spots, so they improve the design and test it again. Going around the loop again makes each version better.",
      hintLadder: [
        "Does a first try usually meet every goal?",
        "What does testing show you that you then fix?",
        "Connect testing to improving, and say why you repeat."
      ]
    }
  ],
  reflectionPrompt: "Think of something you use in winter that could work better — a glove, a sled, an ice scraper. What is the FIRST problem you would define if you set out to redesign it?",
  misconceptionBank: [
    {
      id: "first-idea-is-best",
      label: "Thinks the first idea is always the best idea",
      description: "Skips real brainstorming and testing, assuming the first design will just work.",
      coachMove: "Ask for three DIFFERENT ideas before choosing one, and remind them that testing usually finds an even better version."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Frozen Doorknob",
      prompt:
        "Every winter morning, the metal doorknob to the shed is too cold and slippery to grip with mittens. Before you build anything, what QUESTIONS would a good inventor ask to define this problem? Name at least two.",
      answer:
        "Good inventors ask questions like: How cold does it get? Who uses the door, and are they wearing gloves? How much can I spend? What could go on a knob without breaking it? Defining the problem — the goals and limits — comes BEFORE any building.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design-Loop Storyboard",
      challenge:
        "Pick a winter annoyance (icy steps, cold hands, a frosted window) and storyboard the whole five-step design loop for solving it: define → brainstorm → build → test → improve. Show what happens at EACH step.",
      materials: ["Paper & markers, OR a slides/drawing app"],
      steps: [
        "Choose one winter problem and write a one-sentence DEFINE box with a goal and a limit.",
        "In the BRAINSTORM box, sketch or list at least three different ideas.",
        "In the BUILD and TEST boxes, describe the model you would make and how you would test it.",
        "In the IMPROVE box, name one change you would make after testing."
      ],
      deliverable: "A five-box storyboard showing your winter problem move through all five design-loop steps.",
      choiceBoard: [
        "Draw the five-box storyboard with a picture in each box.",
        "Write a five-part 'inventor's log,' one part per step.",
        "Make a comic strip where an inventor loops back to IMPROVE after a funny test that did not work."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Design Process Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w6.d1.arena1",
          type: "multiple_choice",
          stem: "An inventor tests an ice-scraper model, sees the blade is too dull, puts on a sharper blade, and tests it AGAIN. Which two design steps is she repeating?",
          choices: [
            "Define and brainstorm",
            "Test and improve",
            "Sell and ship",
            "Brainstorm and build only"
          ],
          answerIndex: 1,
          explanation: "Trying it out and then making it better is the TEST → IMPROVE part of the loop, done again.",
          hintLadder: [
            "She tried it out, then made it better.",
            "Which two words match 'tried it' and 'made it better'?",
            "Test and improve."
          ]
        },
        {
          id: "g5.winter.sci.w6.d1.arena2",
          type: "short_answer",
          stem: "Your team must design a little winter cover for a school garden, but you only have 30 minutes, some cardboard, and tape. Name ONE limit and ONE goal, then explain how the limit changes which ideas you brainstorm.",
          rubric: {
            level3: "Names a real limit (30 minutes, cardboard only, tape) AND a goal (like blocking wind or keeping plants from freezing) AND explains how the limit narrows which ideas are worth brainstorming.",
            level2: "Names a limit and a goal, but the explanation of how it changes brainstorming is weak.",
            level1: "Mixes up limit and goal, or gives no explanation."
          },
          exemplar: "Limit: I only have cardboard and tape. Goal: it must block wind and keep the plants from freezing. Because I cannot use heaters or glass, I brainstorm folding and layering cardboard to trap air and block wind, instead of ideas that need power.",
          hintLadder: [
            "Limit = a rule (time, materials); goal = what it must do.",
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
        "Act out the loop: 'BUILD' by stacking imaginary blocks up high, 'TEST' by pushing on your tower, 'IMPROVE' by shaking out your arms and rebuilding it stronger. Repeat the three-move cycle 4 times, a little bigger each round.",
      scienceTieIn: "Moving between focused effort and a reset is like how inventors switch between building and rethinking — short movement breaks actually help your brain recharge for the next round of problem-solving.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time something you made did not work on the first try. Which design step — define, brainstorm, build, test, or improve — would have helped you most, and why?",
      badge: { id: "g5-winter-design-loop-launcher", name: "Design Loop Launcher", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
