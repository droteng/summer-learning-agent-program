// Grade 6 Coding/CS/AI — Fall Expedition, Week 6 (Patterns in Nature), Day 4.
// Topic: build a pattern generator — loops + variables + a changing value.
// Week capstone toward the leaf/seed pattern-generator project.

export const fallG6CodingW6D4 = {
  id: "g6.fall.code.w6.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a pattern generator",
  topicTag: "loops-variables",
  estimatedMinutes: 18,
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-11"],
  hook: "Today you design the brain of a pattern generator: a loop that changes a little each time, so simple rules bloom into a leaf, a spiral, or a starburst.",
  miniLesson: [
    "A variable inside a loop can change every repeat: 'size = size + 2' makes each shape a bit bigger.",
    "Loop + changing variable = growth patterns, like a spiral that widens or petals that lengthen.",
    "Plan a generator by deciding: what repeats, how many times, and what changes each time."
  ],
  workedExample: {
    prompt: "Loop: start size = 5; repeat 3 times: draw a circle of 'size', then size = size + 5. What sizes are drawn?",
    steps: [
      "First repeat: draw size 5, then size becomes 10.",
      "Second repeat: draw size 10, then size becomes 15.",
      "Third repeat: draw size 15, then size becomes 20.",
      "Drawn circles: 5, 10, 15."
    ],
    answer: "Circles of size 5, 10, and 15."
  },
  items: [
    {
      id: "g6.fall.code.w6.d4.q1",
      type: "numeric",
      stem: "start count = 0; repeat 4 times: count = count + 3. What is count at the end?",
      answer: 12,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add 3 four times.",
        "3, 6, 9, 12.",
        "= 12."
      ],
      explanation: "0 + 3 four times = 12."
    },
    {
      id: "g6.fall.code.w6.d4.q2",
      type: "numeric",
      stem: "start size = 2; repeat 3 times: draw size, then size = size × 2. What is the LAST size DRAWN?",
      answer: 8,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Draw size first, then double.",
        "Draw 2 → size 4; draw 4 → size 8; draw 8 → size 16.",
        "The last drawn is 8."
      ],
      explanation: "Drawn: 2, 4, 8 (size doubles after each draw). Last drawn = 8.",
      misconceptionsTargeted: ["update-before-draw"]
    },
    {
      id: "g6.fall.code.w6.d4.q3",
      type: "multiple_choice",
      stem: "To make a spiral that grows, what should change each time through the loop?",
      choices: [
        "Nothing",
        "A size or distance variable should increase each repeat",
        "The loop should stop after one step",
        "The colors only"
      ],
      answerIndex: 1,
      explanation: "Increasing a size/distance variable each loop makes the pattern grow outward.",
      hintLadder: [
        "A spiral gets bigger as it goes.",
        "What value needs to grow?",
        "Increase size/distance each repeat."
      ]
    },
    {
      id: "g6.fall.code.w6.d4.q4",
      type: "multiple_choice",
      stem: "Planning a generator, which THREE questions matter most?",
      choices: [
        "What color, what font, what music",
        "What repeats, how many times, what changes each time",
        "Who made it, when, and why",
        "How fast, how loud, how bright"
      ],
      answerIndex: 1,
      explanation: "A generator is defined by the repeated action, the count, and the per-loop change.",
      hintLadder: [
        "Think about the loop's structure.",
        "Action + count + change.",
        "What repeats, how many, what changes."
      ]
    },
    {
      id: "g6.fall.code.w6.d4.q5",
      type: "short_answer",
      stem: "Design a simple pattern generator in words: state what repeats, the repeat count, and what changes each loop.",
      rubric: {
        level3: "Clearly states a repeated action, a count, AND a per-loop change that would create a pattern.",
        level2: "Has two of the three clearly.",
        level1: "Missing the loop structure or the changing element."
      },
      exemplar: "Repeat 8 times: draw a leaf, turn 45°, and make the next leaf 2 units longer. The leaf repeats, 8 times around, growing each loop into a spiral fan.",
      hintLadder: [
        "What shape will you repeat?",
        "How many times (and any turn)?",
        "What grows or changes each loop?"
      ]
    }
  ],
  reflectionPrompt: "Your generator turns a short rule into a rich pattern — just like a seed. What pattern would you most want to generate, and why?",
  misconceptionBank: [
    {
      id: "update-before-draw",
      label: "Updates the variable before drawing",
      description: "Changes size/count before the draw step, shifting every value by one.",
      coachMove: "Trace the loop line by line in order: draw uses the CURRENT value, then the update changes it for next time."
    }
  ]
};
