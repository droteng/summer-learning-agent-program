// Grade 7 Math — Fall Expedition, Week 6 (Patterns in Nature), Day 1.
// Topic: Fibonacci and growth patterns in nature — pitched up to the recursive
// rule F(n)=F(n-1)+F(n-2), consecutive ratios, and the golden ratio.

export const fallG7MathW6D1 = {
  id: "g7.fall.math.w6.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Math",
  topic: "Fibonacci and patterns in nature",
  topicTag: "sequences-fibonacci",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.EE.B.4", "CCSS.7.RP.A.2"],
  hook: "Count the spirals on a pinecone and you meet 1, 1, 2, 3, 5, 8... But push further: divide each Fibonacci number by the one before it and the ratios close in on a single number near 1.618 — the golden ratio nature keeps reaching for.",
  miniLesson: [
    "Fibonacci is a RECURSIVE rule: F(n) = F(n-1) + F(n-2), starting F(1)=1 and F(2)=1. Each term is defined using the two terms before it.",
    "Divide consecutive terms — 5/3 ≈ 1.667, 8/5 = 1.6, 13/8 = 1.625, 21/13 ≈ 1.615 — and the ratio converges toward the golden ratio φ ≈ 1.618.",
    "Nature reuses this ratio because packing seeds or leaves at the golden angle (≈137.5°) fills space with the fewest gaps and the least overlap."
  ],
  workedExample: {
    prompt: "Use F(n) = F(n-1) + F(n-2) to find F(10), given 1, 1, 2, 3, 5, 8, 13, 21, and then estimate F(9)/F(8).",
    steps: [
      "F(9) = F(8) + F(7) = 21 + 13 = 34.",
      "F(10) = F(9) + F(8) = 34 + 21 = 55.",
      "The ratio F(9)/F(8) = 34/21 ≈ 1.619.",
      "That is very close to the golden ratio φ ≈ 1.618."
    ],
    answer: "F(10) = 55, and F(9)/F(8) = 34/21 ≈ 1.619 ≈ φ."
  },
  items: [
    {
      id: "g7.fall.math.w6.d1.q1",
      type: "numeric",
      stem: "Using F(n) = F(n-1) + F(n-2) with the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, ___, what is F(11)?",
      answer: 55,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the two most recent terms.",
        "21 + 34.",
        "= 55."
      ],
      explanation: "F(11) = F(10) + F(9) = 34 + 21 = 55."
    },
    {
      id: "g7.fall.math.w6.d1.q2",
      type: "numeric",
      stem: "Compute the ratio 55/34 as a decimal, rounded to 3 decimal places. (This ratio approaches the golden ratio.)",
      answer: 1.618,
      tolerance: 0.001,
      unit: "",
      hintLadder: [
        "Divide 55 by 34.",
        "55 ÷ 34 = 1.6176...",
        "Rounded to 3 places: 1.618."
      ],
      explanation: "55 ÷ 34 = 1.61764..., which rounds to 1.618 — essentially the golden ratio φ."
    },
    {
      id: "g7.fall.math.w6.d1.q3",
      type: "multiple_choice",
      stem: "Which statement BEST describes the recursive rule of the Fibonacci sequence?",
      choices: [
        "Multiply the previous term by the golden ratio",
        "F(n) = F(n-1) + F(n-2): each term is the sum of the two before it",
        "F(n) = 2 × F(n-1): each term doubles",
        "Add the term's position number each time"
      ],
      answerIndex: 1,
      explanation: "Fibonacci is defined recursively as F(n) = F(n-1) + F(n-2); the golden ratio only emerges from the ratios of terms.",
      hintLadder: [
        "Recursive means each term is built from earlier terms.",
        "Check 8, 13, 21 — how do you get 21?",
        "8 + 13 = 21, so it's the sum of the two before."
      ],
      misconceptionsTargeted: ["fibonacci-is-multiplying-phi"]
    },
    {
      id: "g7.fall.math.w6.d1.q4",
      type: "numeric",
      stem: "A leaf-count sequence follows 4, 7, 11, 18, 29, ___ (same 'add the two before' rule as Fibonacci but different start). What is the next term?",
      answer: 47,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the last two terms shown.",
        "18 + 29.",
        "= 47."
      ],
      explanation: "This is a Fibonacci-like (Lucas-style) sequence: 18 + 29 = 47."
    },
    {
      id: "g7.fall.math.w6.d1.q5",
      type: "short_answer",
      stem: "A pattern goes 3, 6, 12, 24, 48. Describe its rule algebraically, give the next term, and explain why the ratio of consecutive terms does NOT approach the golden ratio like Fibonacci's does.",
      rubric: {
        level3: "States the rule as geometric (multiply by 2, e.g., a(n) = 2·a(n-1)), gives 96, AND explains that its consecutive ratio is a CONSTANT 2 — unlike Fibonacci, whose ratios converge toward φ ≈ 1.618 because it adds the two prior terms.",
        level2: "Gets 96 and the doubling rule but the golden-ratio contrast is vague or incomplete.",
        level1: "Wrong next term or wrong rule."
      },
      exemplar: "The rule is geometric: a(n) = 2·a(n-1), so each term doubles and the next is 48 × 2 = 96. Its consecutive ratio is always exactly 2. Fibonacci instead ADDS the two prior terms, so its ratios (5/3, 8/5, 13/8...) drift toward φ ≈ 1.618 rather than staying fixed.",
      hintLadder: [
        "How do you get from 24 to 48?",
        "Every ratio here is the same constant — what is it?",
        "Fibonacci's ratios change and settle near 1.618; this one stays 2."
      ]
    }
  ],
  reflectionPrompt: "Go find a sunflower, pinecone, or pineapple. Count its two sets of spirals — are they neighboring Fibonacci numbers? Divide the larger count by the smaller: how close to 1.618 did you get?",
  misconceptionBank: [
    {
      id: "fibonacci-is-multiplying-phi",
      label: "Thinks Fibonacci is defined by multiplying by φ",
      description: "Believes each Fibonacci term is the previous term times the golden ratio, confusing the emergent ratio with the defining rule.",
      coachMove: "Separate cause and effect: the DEFINITION is F(n)=F(n-1)+F(n-2) (whole-number addition); the golden ratio only APPEARS when you divide consecutive terms."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Ratio Nature Chases",
      prompt:
        "Pick up a pinecone or sunflower this fall and count the spiral rows one way, then the other — say 21 and 34. Now divide: 34 ÷ 21 ≈ 1.619. Why do so many plants land on ratios this close to 1.618?",
      answer:
        "Neighboring spiral counts are consecutive Fibonacci numbers, and their ratio hugs the golden ratio φ ≈ 1.618. Growing new seeds at the matching 'golden angle' (~137.5°) packs the most seeds with the fewest gaps — so it's efficient geometry, not coincidence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Golden-Ratio Spiral Map",
      challenge:
        "Build an autumn Fibonacci spiral and PROVE the golden ratio hides inside it. Draw squares with side lengths 1, 1, 2, 3, 5, 8, 13, connect their corners into a spiral, then measure and compute the ratio between the two largest squares.",
      materials: ["Grid/graph paper & ruler OR a device to draw on"],
      steps: [
        "On grid paper, draw squares of side 1, 1, 2, 3, 5, 8, 13, each sharing an edge with the last.",
        "Arc a quarter-circle across each square to trace the spiral.",
        "Pick two neighboring squares (say 8 and 13) and divide the larger side by the smaller.",
        "Write the ratio and note how close it lands to 1.618."
      ],
      deliverable: "A labeled Fibonacci spiral built from squares, with at least one consecutive ratio computed and compared to φ ≈ 1.618.",
      choiceBoard: [
        "Draw the square-based spiral and compute a ratio.",
        "Make a ratio table for F(n)/F(n-1) from n=2 to n=10 and mark where it settles.",
        "Write a Fibonacci poem where each line has 1, 1, 2, 3, 5, 8 words."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Golden Ratio Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w6.d1.arena1",
          type: "numeric",
          stem: "Fibonacci: ..., 34, 55, 89, ___. Using F(n) = F(n-1) + F(n-2), what is the next term after 89?",
          answer: 144,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Add the last two terms shown.",
            "55 + 89.",
            "= 144."
          ],
          explanation: "F(n) = F(n-1) + F(n-2): 55 + 89 = 144."
        },
        {
          id: "g7.fall.math.w6.d1.arena2",
          type: "short_answer",
          stem: "The ratios 8/5 = 1.6, 13/8 = 1.625, 21/13 ≈ 1.615, 34/21 ≈ 1.619 seem to bounce around. Explain what number they are converging toward and WHY dividing consecutive Fibonacci terms produces it.",
          rubric: {
            level3: "Identifies the golden ratio φ ≈ 1.618 as the limit AND explains that because each term is the sum of the two prior, the ratio F(n)/F(n-1) stabilizes toward the value φ that satisfies φ = 1 + 1/φ.",
            level2: "Names 1.618 / the golden ratio but the reasoning about convergence is vague.",
            level1: "Wrong target value or no explanation."
          },
          exemplar: "The ratios converge on the golden ratio φ ≈ 1.618. Because every term is the sum of the two before it, the ratio of consecutive terms keeps settling toward the special value φ, which satisfies φ = 1 + 1/φ; the small back-and-forth shrinks as the numbers grow.",
          hintLadder: [
            "List the ratios in order — are they narrowing toward one value?",
            "That value is famous and about 1.618.",
            "It's the golden ratio, the fixed point the add-the-two-before rule drives toward."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Fibonacci Rep Ladder",
      prompt:
        "Climb a Fibonacci rep ladder: 1 arm circle, 1 toe touch, 2 jumping jacks, 3 shoulder rolls, 5 squats, 8 marches. Then reverse back down. Notice how fast the reps grow once you pass 5.",
      scienceTieIn:
        "Ramping the reps up gradually raises your heart rate step by step, so your blood delivers more oxygen to your muscles and brain before the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot Fibonacci numbers or a near-1.618 ratio in nature this fall? Write the two counts you found, the ratio you calculated, and how close it came to the golden ratio.",
      badge: { id: "g7-fall-golden-ratio-hunter", name: "Golden Ratio Hunter", emoji: "🌻" },
      estimatedMinutes: 7
    }
  }
};
