// Grade 7 Coding/CS/AI — Fall Expedition, Week 6 (Patterns in Nature), Day 3.
// Topic: loops make patterns — pitched up to nested loops and counting total
// iterations (rows × columns) that generate 2-D patterns.

export const fallG7CodingW6D3 = {
  id: "g7.fall.code.w6.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Loops make patterns",
  topicTag: "loops-repetition",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-13"],
  hook: "Nature repeats with rules — and so does code. A single loop draws a ring of petals; a loop INSIDE a loop tiles a whole meadow. Today you trace nested loops and count exactly how many times the inside runs.",
  miniLesson: [
    "A nested loop is a loop inside another loop. The inner loop finishes ALL its repeats for each single pass of the outer loop.",
    "Total inner runs = (outer count) × (inner count). 'For each of 3 rows, stamp 4 leaves' = 3 × 4 = 12 stamps.",
    "Combine nesting with a turn or a changing variable and you get grids, spirals, and tiled fractals from just a few lines."
  ],
  workedExample: {
    prompt: "Trace: repeat 3 times (OUTER): repeat 4 times (INNER): stamp a leaf. How many leaves are stamped in total?",
    steps: [
      "The inner loop stamps 4 leaves each time it runs.",
      "The outer loop runs the inner loop 3 separate times.",
      "Total = outer × inner = 3 × 4.",
      "= 12 leaves."
    ],
    answer: "12 leaves (3 outer passes × 4 inner stamps)."
  },
  items: [
    {
      id: "g7.fall.code.w6.d3.q1",
      type: "numeric",
      stem: "repeat 5 times (OUTER): repeat 3 times (INNER): stamp an acorn. How many acorns are stamped in total?",
      answer: 15,
      tolerance: 0,
      unit: "acorns",
      hintLadder: [
        "Multiply the outer count by the inner count.",
        "5 × 3.",
        "= 15."
      ],
      explanation: "Nested loop total = outer × inner = 5 × 3 = 15 acorns."
    },
    {
      id: "g7.fall.code.w6.d3.q2",
      type: "numeric",
      stem: "A grid pattern runs: repeat 4 times (OUTER row): repeat 6 times (INNER column): draw a dot. How many dots are in the finished grid?",
      answer: 24,
      tolerance: 0,
      unit: "dots",
      hintLadder: [
        "Each row has 6 dots; there are 4 rows.",
        "4 × 6.",
        "= 24."
      ],
      explanation: "4 rows × 6 columns = 24 dots.",
      misconceptionsTargeted: ["nested-loops-add"]
    },
    {
      id: "g7.fall.code.w6.d3.q3",
      type: "multiple_choice",
      stem: "In a nested loop, how many times does the INNER loop's body run in total?",
      choices: [
        "Outer count + inner count",
        "Just the inner count (the outer doesn't matter)",
        "Outer count × inner count",
        "Only once, no matter the counts"
      ],
      answerIndex: 2,
      explanation: "The inner loop completes fully for every outer pass, so the body runs outer × inner times.",
      hintLadder: [
        "The inner loop restarts on every outer pass.",
        "3 outer passes each running 4 inner steps — add or multiply?",
        "Multiply: outer × inner."
      ],
      misconceptionsTargeted: ["nested-loops-add"]
    },
    {
      id: "g7.fall.code.w6.d3.q4",
      type: "numeric",
      stem: "A petal ring repeats 'draw petal, turn 40°' until it returns to the start (360°). It draws that ring on 3 separate flowers. How many petals are drawn in all? (First find petals per ring with 360 ÷ 40.)",
      answer: 27,
      tolerance: 0,
      unit: "petals",
      hintLadder: [
        "Petals per ring = 360 ÷ 40 = 9.",
        "Then 3 rings, each with 9 petals.",
        "9 × 3 = 27."
      ],
      explanation: "360 ÷ 40 = 9 petals per ring; 3 rings × 9 = 27 petals total."
    },
    {
      id: "g7.fall.code.w6.d3.q5",
      type: "short_answer",
      stem: "Write a nested loop in words that draws a 5-row-by-8-column grid of leaves. State the outer count, the inner count, and the total number of leaves.",
      rubric: {
        level3: "Correct nested structure: OUTER repeats 5 (rows), INNER repeats 8 (columns) stamping a leaf, AND states the total 5 × 8 = 40 leaves.",
        level2: "Nested structure present with counts 5 and 8, but the total is missing or wrong.",
        level1: "No nesting, or counts/total incorrect."
      },
      exemplar: "Repeat 5 times (outer, one per row): repeat 8 times (inner, one per column): stamp a leaf, then move right. After each row, move down and back to the left edge. Total leaves = 5 × 8 = 40.",
      hintLadder: [
        "The outer loop handles rows; the inner loop handles columns.",
        "Outer count 5, inner count 8.",
        "Total = 5 × 8 = 40 leaves."
      ]
    }
  ],
  reflectionPrompt: "Nested loops turn a tiny rule into a whole 2-D pattern — like the grid of cells in a honeycomb or seeds in a pod. What real grid or tiled pattern could you generate with a loop inside a loop?",
  misconceptionBank: [
    {
      id: "nested-loops-add",
      label: "Adds nested loop counts instead of multiplying",
      description: "Computes outer + inner (e.g., 3 + 4 = 7) rather than outer × inner for total inner runs.",
      coachMove: "Trace one outer pass: the inner loop runs fully EACH time the outer repeats, so multiply — 3 outer passes × 4 inner each = 12."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Loop Inside a Loop",
      prompt:
        "repeat 2 times (OUTER): repeat 5 times (INNER): stamp a leaf. Before you peek — how many leaves land on the page in total?",
      answer: "The inner loop stamps 5 leaves, and the outer loop runs it twice: 2 × 5 = 10 leaves. Nested loops MULTIPLY.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Tile an Autumn Meadow",
      challenge:
        "Be the computer! Write a NESTED loop in plain words that tiles an autumn grid (rows of leaves, acorns, or stars), then hand-trace it by filling in the grid on paper to prove your row × column total is right.",
      materials: ["Grid/graph paper & markers"],
      steps: [
        "Choose your grid size: how many rows (outer) and how many per row (inner)?",
        "Write the nested loop: 'repeat R times (outer): repeat C times (inner): stamp ___.'",
        "Predict the total with R × C before drawing.",
        "Fill in the grid by hand and count to confirm your total matches."
      ],
      deliverable: "A written nested loop (outer and inner counts) plus the hand-drawn grid it produces, with the total R × C confirmed.",
      choiceBoard: [
        "Write the nested loop and hand-fill the grid.",
        "Draw a flowchart with the inner 'repeat' arrow inside the outer one.",
        "Make a mini table showing rows, columns, and the running total after each row."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Nested Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.code.w6.d3.arena1",
          type: "numeric",
          stem: "repeat 4 times (OUTER): { stamp a pumpkin, then repeat 3 times (INNER): stamp a leaf }. How many stamps happen in TOTAL (pumpkins + leaves)?",
          answer: 16,
          tolerance: 0,
          unit: "stamps",
          hintLadder: [
            "Each outer pass: 1 pumpkin + 3 leaves = 4 stamps.",
            "4 stamps per pass, and 4 outer passes.",
            "4 × 4 = 16 stamps."
          ],
          explanation: "Each outer pass does 1 pumpkin + (3 inner leaves) = 4 stamps. 4 outer passes × 4 = 16 total stamps."
        },
        {
          id: "g7.fall.code.w6.d3.arena2",
          type: "short_answer",
          stem: "Explain why 'repeat 3 (outer): repeat 4 (inner): stamp' produces 12 stamps, not 7. Use the words 'outer', 'inner', and 'each' in your explanation.",
          rubric: {
            level3: "Explains that the INNER loop runs fully (4 stamps) for EACH of the 3 OUTER passes, so the total is 3 × 4 = 12, and notes that 7 would come from wrongly ADDING the counts.",
            level2: "Gets that it's multiplication (3 × 4 = 12) but the outer/inner 'each' reasoning is unclear.",
            level1: "No clear reason or repeats the adding mistake."
          },
          exemplar: "The inner loop stamps 4 times, and it restarts for EACH of the 3 outer passes, so the stamps are 4 + 4 + 4 = 3 × 4 = 12. You only get 7 if you wrongly ADD the outer and inner counts (3 + 4) instead of multiplying.",
          hintLadder: [
            "How many inner stamps happen in ONE outer pass?",
            "How many outer passes are there, and does the inner loop restart each time?",
            "Multiply outer × inner: 3 × 4 = 12."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Run the Nested Loop",
      prompt:
        "Be a nested loop with your body: OUTER repeat 3 times, and INSIDE each, repeat 2 times (stomp, clap). Count out loud — you should reach 3 × 2 = 6 stomp-clap combos in all.",
      scienceTieIn:
        "Repeating rhythmic movement pumps more oxygen-rich blood to your brain, sharpening the focus you need to trace the next loop.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Nested loops build whole grids from a tiny rule — like a honeycomb or a checkerboard. Write about one real grid or tiled pattern you could generate with a loop inside a loop, naming what the outer and inner loops would each control.",
      badge: { id: "g7-fall-nested-loop-weaver", name: "Nested Loop Weaver", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
