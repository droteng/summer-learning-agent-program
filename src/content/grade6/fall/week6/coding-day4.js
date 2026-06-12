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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Growing Leaf",
      prompt:
        "start size = 3; repeat 3 times: draw a leaf of 'size', then size = size + 4. What are the three sizes actually DRAWN? Trace it carefully — the draw happens BEFORE the update!",
      answer: "Drawn 3 (then size→7), drawn 7 (then size→11), drawn 11 (then size→15). The three drawn sizes are 3, 7, and 11.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plan Your Pattern Generator",
      challenge:
        "Design the brain of a pattern generator for an autumn shape (a spiral of leaves, a growing pinecone, a starburst). Spell out the three parts — what repeats, how many times, and what changes each loop — then trace the first 3 repeats by hand.",
      materials: ["Paper & markers OR a device to type/draw on"],
      steps: [
        "Name the action that repeats (draw a leaf, draw a circle).",
        "Pick the repeat count and any turn angle.",
        "Choose what changes each loop (size + 2, turn + 5°).",
        "Hand-trace the first 3 repeats, writing the value drawn each time."
      ],
      deliverable: "A generator plan listing the repeated action, count, and per-loop change, plus a 3-row trace table.",
      choiceBoard: [
        "Write the plan and trace table.",
        "Draw the first few shapes your generator would produce.",
        "Make a comic where a robot runs your generator and the pattern blooms."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Generator Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.code.w6.d4.arena1",
          type: "numeric",
          stem: "start size = 1; repeat 5 times: draw size, then size = size × 2. What is the LAST size DRAWN?",
          answer: 16,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Draw first, then double — list the drawn values.",
            "Drawn: 1, 2, 4, 8, 16 (then size becomes 32).",
            "The last value DRAWN is 16."
          ],
          explanation: "Each repeat draws the current size, then doubles it. Drawn values: 1, 2, 4, 8, 16. The last drawn is 16 (size becomes 32 only after, and is never drawn)."
        },
        {
          id: "g6.fall.code.w6.d4.arena2",
          type: "short_answer",
          stem: "A generator should draw petals that get longer each loop AND turn so they fan out in a circle. Describe what repeats, the count, and the TWO things that change each loop.",
          rubric: {
            level3: "States the repeated action (draw a petal), a repeat count, AND two per-loop changes — the petal length increases and the turn advances around the circle.",
            level2: "Has the action and count but names only one changing value, or is vague about the turning.",
            level1: "Missing the loop structure or no changing values."
          },
          exemplar: "Repeat 12 times: draw a petal, make the next petal 3 units longer, and turn 30° (360 ÷ 12) before the next one. The length grows each loop while the turn spreads the petals evenly into a full circle.",
          hintLadder: [
            "What action repeats, and how many times?",
            "One change makes petals longer — what is it?",
            "The second change is the turn that fans them around the circle."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow-the-Reps Loop",
      prompt:
        "Run a loop with your body: repeat 4 times, and each loop add one more arm circle (1, then 2, then 3, then 4). Feel the count 'variable' grow each time, just like in your generator!",
      scienceTieIn:
        "Slowly increasing the reps warms up your muscles and sends more oxygen-rich blood to your brain for sharper focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your generator turns a short rule into a rich pattern — just like a seed. Write about the pattern you'd most want to generate and what would change each loop.",
      badge: { id: "generator-architect", name: "Generator Architect", emoji: "🌀" },
      estimatedMinutes: 7
    }
  }
};
