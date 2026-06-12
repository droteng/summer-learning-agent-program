// Grade 6 Coding/CS/AI — Fall Expedition, Week 6 (Patterns in Nature), Day 3.
// Topic: loops and repetition — how a few lines make endless patterns.

export const fallG6CodingW6D3 = {
  id: "g6.fall.code.w6.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Loops make patterns",
  topicTag: "loops-repetition",
  estimatedMinutes: 18,
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-11"],
  hook: "Nature repeats with rules — and so does code. A loop lets you draw 100 leaves with the same few lines. Today you trace loops that build patterns.",
  miniLesson: [
    "A loop repeats a block of steps a set number of times: 'repeat 5 times: draw a petal, turn 72°.'",
    "Loops save you from writing the same instruction over and over — change the count, change the pattern.",
    "Combine a loop with a small change each time (like turning) and you get a flower, a spiral, or a fractal."
  ],
  workedExample: {
    prompt: "A loop runs 'repeat 4 times: draw a side, turn 90°.' What shape does it draw?",
    steps: [
      "4 sides, each followed by a 90° turn.",
      "Four equal sides and four right-angle turns.",
      "That closes back to the start.",
      "It draws a square."
    ],
    answer: "A square (4 sides, 4 right-angle turns)."
  },
  items: [
    {
      id: "g6.fall.code.w6.d3.q1",
      type: "numeric",
      stem: "A loop says 'repeat 6 times: stamp a leaf.' How many leaves are stamped?",
      answer: 6,
      tolerance: 0,
      unit: "leaves",
      hintLadder: [
        "The number after 'repeat' is the count.",
        "It repeats 6 times.",
        "6 leaves."
      ],
      explanation: "The loop runs 6 times, stamping 6 leaves."
    },
    {
      id: "g6.fall.code.w6.d3.q2",
      type: "multiple_choice",
      stem: "Why use a loop instead of writing 'stamp a leaf' 50 times?",
      choices: [
        "Loops are slower",
        "A loop is shorter, easier to change, and less error-prone",
        "Loops only work for 2 steps",
        "There's no difference"
      ],
      answerIndex: 1,
      explanation: "Loops avoid repetition: fewer lines, easy to adjust, fewer mistakes.",
      hintLadder: [
        "Imagine changing 50 to 100 by hand.",
        "What's easier to edit?",
        "A loop — change one number."
      ]
    },
    {
      id: "g6.fall.code.w6.d3.q3",
      type: "numeric",
      stem: "A loop runs 'repeat N times: turn 60°.' To make a full 360° turn, what should N be?",
      answer: 6,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "How many 60° turns make 360°?",
        "360 ÷ 60.",
        "= 6."
      ],
      explanation: "360 ÷ 60 = 6 turns.",
      misconceptionsTargeted: ["loop-count-guess"]
    },
    {
      id: "g6.fall.code.w6.d3.q4",
      type: "multiple_choice",
      stem: "A flower pattern repeats 'draw petal, turn 72°.' How many petals before it returns to start? (360 ÷ 72)",
      choices: ["3", "4", "5", "6"],
      answerIndex: 2,
      explanation: "360 ÷ 72 = 5 petals to complete the circle.",
      hintLadder: [
        "Full circle is 360°.",
        "Divide 360 by 72.",
        "= 5 petals."
      ]
    },
    {
      id: "g6.fall.code.w6.d3.q5",
      type: "short_answer",
      stem: "Write a loop (in words) that would draw a triangle. Include the repeat count and the turn angle.",
      rubric: {
        level3: "Correct loop: repeat 3 times, draw a side, turn 120° (360÷3), with the count and angle right.",
        level2: "Repeat 3 with a side but wrong/missing turn angle.",
        level1: "Wrong count or no loop structure."
      },
      exemplar: "Repeat 3 times: draw a side, turn 120°. (A triangle has 3 sides, and 360 ÷ 3 = 120° per turn.)",
      hintLadder: [
        "How many sides does a triangle have?",
        "Full turn 360 ÷ 3 = ?",
        "Repeat 3 times: side, turn 120°."
      ]
    }
  ],
  reflectionPrompt: "Loops turn a tiny rule into a big pattern — just like nature. What real-world pattern could you recreate with a loop?",
  misconceptionBank: [
    {
      id: "loop-count-guess",
      label: "Guesses the loop count instead of computing it",
      description: "Picks a repeat number without using 360 ÷ angle to find how many turns close the shape.",
      coachMove: "Anchor the rule: number of turns = 360 ÷ turn angle. Compute, don't guess."
    }
  ]
};
