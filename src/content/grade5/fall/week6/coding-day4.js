// Grade 5 Coding/CS/AI — Fall Expedition, Week 6 (Patterns in Nature), Day 4.
// Grade 5 counterpart of g6.fall.code.w6.d4. Same topic (build a pattern
// generator — loop + a changing value) pitched down to Grade 5: smaller
// numbers, addition-based changes (not multiplication), all traces verified.

export const fallG5CodingW6D4 = {
  id: "g5.fall.code.w6.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a pattern generator",
  topicTag: "loops-variables",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "Today you design the brain of a pattern generator: a loop that changes a little each time, so a simple rule blooms into a leaf, a spiral, or a starburst.",
  miniLesson: [
    "A variable is a value with a name, like 'size'. A loop can change it each time, such as 'size = size + 2' to make each shape a bit bigger.",
    "A loop plus a growing variable makes growth patterns, like a spiral that widens or petals that get longer.",
    "To plan a generator, decide three things: what repeats, how many times, and what changes each time."
  ],
  workedExample: {
    prompt: "Loop: start size = 2; repeat 3 times: draw a circle of 'size', then size = size + 2. What sizes are drawn?",
    steps: [
      "First repeat: draw size 2, then size becomes 4.",
      "Second repeat: draw size 4, then size becomes 6.",
      "Third repeat: draw size 6, then size becomes 8.",
      "The circles drawn are 2, 4, and 6."
    ],
    answer: "Circles of size 2, 4, and 6."
  },
  items: [
    {
      id: "g5.fall.code.w6.d4.q1",
      type: "numeric",
      stem: "start count = 0; repeat 4 times: count = count + 2. What is count at the end?",
      answer: 8,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add 2 four times.",
        "2, 4, 6, 8.",
        "= 8."
      ],
      explanation: "Starting at 0 and adding 2 four times: 2, 4, 6, 8."
    },
    {
      id: "g5.fall.code.w6.d4.q2",
      type: "numeric",
      stem: "start size = 2; repeat 3 times: draw size, then size = size + 2. What is the LAST size DRAWN?",
      answer: 6,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Draw the size first, then add 2.",
        "Draw 2 → size 4; draw 4 → size 6; draw 6 → size 8.",
        "The last size drawn is 6."
      ],
      explanation: "Drawn sizes are 2, 4, 6 (you draw first, then add 2). The last drawn is 6.",
      misconceptionsTargeted: ["update-before-draw"]
    },
    {
      id: "g5.fall.code.w6.d4.q3",
      type: "multiple_choice",
      stem: "To make a spiral that grows bigger, what should change each time through the loop?",
      choices: [
        "A size or distance variable should get bigger each repeat",
        "Nothing",
        "The loop should stop after one step",
        "Only the color"
      ],
      answerIndex: 0,
      explanation: "Making a size or distance value bigger each loop is what makes the pattern grow outward into a spiral.",
      hintLadder: [
        "A spiral gets bigger as it goes.",
        "What value needs to grow?",
        "Make the size or distance bigger each repeat."
      ]
    },
    {
      id: "g5.fall.code.w6.d4.q4",
      type: "multiple_choice",
      stem: "When planning a pattern generator, which THREE questions matter most?",
      choices: [
        "What color, what font, what music",
        "What repeats, how many times, what changes each time",
        "Who made it, when, and why",
        "How fast, how loud, how bright"
      ],
      answerIndex: 1,
      explanation: "A generator is built from a repeated action, a count of how many times, and what changes each loop.",
      hintLadder: [
        "Think about the parts of a loop.",
        "Action + count + change.",
        "What repeats, how many times, what changes."
      ]
    },
    {
      id: "g5.fall.code.w6.d4.q5",
      type: "short_answer",
      stem: "Design a simple pattern generator in words: say what repeats, the repeat count, and what changes each loop.",
      rubric: {
        level3: "Clearly states a repeated action, a repeat count, AND a change each loop that would make a pattern.",
        level2: "Has two of the three parts clearly.",
        level1: "Missing the loop structure or the changing part."
      },
      exemplar: "Repeat 6 times: draw a leaf, then make the next leaf 2 units longer. The leaf repeats 6 times and grows a little each loop, making a fan of leaves.",
      hintLadder: [
        "What shape will you repeat?",
        "How many times will it repeat?",
        "What grows or changes each loop?"
      ]
    }
  ],
  reflectionPrompt: "Your generator turns a short rule into a rich pattern — just like a seed. What pattern would you most want to generate, and why?",
  misconceptionBank: [
    {
      id: "update-before-draw",
      label: "Changes the variable before drawing",
      description: "Adds to size or count before the draw step, so every drawn value is off by one.",
      coachMove: "Trace the loop line by line in order: draw uses the CURRENT value, THEN the change updates it for next time."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Growing Leaf",
      prompt:
        "start size = 3; repeat 3 times: draw a leaf of 'size', then size = size + 2. What are the three sizes actually DRAWN? Trace it carefully — the draw happens BEFORE the change!",
      answer: "Drawn 3 (then size → 5), drawn 5 (then size → 7), drawn 7 (then size → 9). The three drawn sizes are 3, 5, and 7.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plan Your Pattern Generator",
      challenge:
        "Design the brain of a pattern generator for an autumn shape (a spiral of leaves, a growing pinecone, a starburst). Spell out the three parts — what repeats, how many times, and what changes each loop — then trace the first 3 repeats by hand.",
      materials: ["Paper & markers OR a device to type/draw on"],
      steps: [
        "Name the action that repeats (draw a leaf, draw a circle).",
        "Pick the repeat count.",
        "Choose what changes each loop (size + 2, or move a little farther).",
        "Hand-trace the first 3 repeats, writing the value drawn each time."
      ],
      deliverable: "A generator plan listing the repeated action, the count, and the per-loop change, plus a 3-row trace table.",
      choiceBoard: [
        "Write the plan and the trace table.",
        "Draw the first few shapes your generator would make.",
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
          id: "g5.fall.code.w6.d4.arena1",
          type: "numeric",
          stem: "start size = 1; repeat 4 times: draw size, then size = size + 3. What is the LAST size DRAWN?",
          answer: 10,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Draw first, then add 3 — list the drawn values.",
            "Drawn: 1, 4, 7, 10 (then size becomes 13).",
            "The last value DRAWN is 10."
          ],
          explanation: "Each repeat draws the current size, then adds 3. Drawn values: 1, 4, 7, 10. The last drawn is 10 (size becomes 13 only after, and is never drawn)."
        },
        {
          id: "g5.fall.code.w6.d4.arena2",
          type: "short_answer",
          stem: "A generator should draw petals that get longer each loop AND spread out around a circle. Describe what repeats, the count, and the TWO things that change each loop.",
          rubric: {
            level3: "States the repeated action (draw a petal), a repeat count, AND two changes each loop — the petal gets longer and the turn spreads the petals around the circle.",
            level2: "Has the action and count but names only one changing value, or is vague about the turning.",
            level1: "Missing the loop structure, or names no changing values."
          },
          exemplar: "Repeat 6 times: draw a petal, make the next petal 2 units longer, and turn a little before the next one. The length grows each loop while the turn spreads the petals around the circle.",
          hintLadder: [
            "What action repeats, and how many times?",
            "One change makes the petals longer — what is it?",
            "The second change is the turn that spreads them around the circle."
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
        "Slowly adding more reps warms up your muscles and sends more oxygen-rich blood to your brain for sharper focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your generator turns a short rule into a rich pattern — just like a seed. Write about the pattern you would most want to generate and what would change each loop.",
      badge: { id: "g5-fall-generator-architect", name: "Generator Architect", emoji: "🌀" },
      estimatedMinutes: 7
    }
  }
};
