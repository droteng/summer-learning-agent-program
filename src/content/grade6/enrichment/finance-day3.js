// Grade 6 Financial Literacy — Enrichment Day 3.
// Topic: unit cost and comparing prices.

export const grade6FinanceDay3 = {
  id: "g6.fin.e.d3",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Unit cost and smart shopping",
  topicTag: "unit-cost",
  estimatedMinutes: 16,
  standardsRefs: ["JumpStart.Financial.Spending", "CCSS.6.RP.A.3.B"],
  hook: "Bigger isn't always cheaper. Today you compute unit cost — the real price tag stores don't always make obvious.",
  miniLesson: [
    "Unit cost = total price ÷ quantity. Always lower per-unit is cheaper per use.",
    "Compare different package sizes: a 6-pack vs a 12-pack — divide both prices by the count.",
    "Watch for tricks: 'family size' isn't always cheaper per unit; the small one sometimes wins."
  ],
  workedExample: {
    prompt:
      "Granola bars: 6-pack at $4.20 vs 12-pack at $9.60. Which is cheaper PER BAR?",
    steps: [
      "6-pack unit cost: 4.20 ÷ 6 = $0.70 per bar.",
      "12-pack unit cost: 9.60 ÷ 12 = $0.80 per bar.",
      "6-pack is cheaper per bar (by 10¢).",
      "Bigger isn't always cheaper — check unit cost every time."
    ],
    answer: "6-pack at $0.70 per bar wins."
  },
  items: [
    {
      id: "g6.fin.e.d3.q1",
      type: "numeric",
      stem: "A 4-pack of juice boxes is $3.20. Unit cost per box?",
      answer: 0.8,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "Total ÷ count.",
        "3.20 ÷ 4.",
        "$0.80."
      ],
      explanation: "3.20 ÷ 4 = $0.80 per box."
    },
    {
      id: "g6.fin.e.d3.q2",
      type: "multiple_choice",
      stem:
        "Pencils: 5-pack $2.50 vs 10-pack $5.50. Which is cheaper per pencil?",
      choices: ["5-pack", "10-pack", "Same", "Cannot tell"],
      answerIndex: 0,
      explanation: "5-pack: $0.50/pencil. 10-pack: $0.55/pencil. The 5-pack wins.",
      hintLadder: [
        "Divide each price by count.",
        "0.50 vs 0.55.",
        "5-pack is cheaper per pencil."
      ],
      misconceptionsTargeted: ["assumes-bigger-cheaper"]
    },
    {
      id: "g6.fin.e.d3.q3",
      type: "numeric",
      stem: "A 1.5-liter bottle of water is $3. Cost per liter?",
      answer: 2,
      tolerance: 0.01,
      unit: "dollars/liter",
      hintLadder: [
        "Price ÷ liters.",
        "3 ÷ 1.5.",
        "$2 per liter."
      ],
      explanation: "3 ÷ 1.5 = $2 per liter."
    },
    {
      id: "g6.fin.e.d3.q4",
      type: "multiple_choice",
      stem:
        "When does a SMALLER package ACTUALLY beat the big one on unit cost?",
      choices: [
        "Never.",
        "Always.",
        "Sometimes — when the small one is on sale or when the big one has a markup.",
        "Only at certain stores."
      ],
      answerIndex: 2,
      explanation: "Sales and markups can flip the math. Always compute, don't assume.",
      hintLadder: [
        "What changes pricing?",
        "Sales, markups, promotions.",
        "Sometimes smaller wins."
      ]
    },
    {
      id: "g6.fin.e.d3.q5",
      type: "short_answer",
      stem:
        "Pick something you or your family buys regularly. List two package sizes you've seen, compute the unit cost of each, and say which is cheaper per unit.",
      rubric: {
        level3: "Specific product, two sizes with prices, correct unit-cost math for each, clear winner.",
        level2: "Has sizes + prices but one calculation is wrong or missing.",
        level1: "Just a product without math."
      },
      exemplar:
        "Cereal: family-size 24 oz at $5.40 → $0.225/oz. Regular 12 oz at $2.40 → $0.20/oz. The regular size is cheaper per ounce even though the box is smaller.",
      hintLadder: [
        "Pick a product you've seen in two sizes.",
        "Divide each price by quantity.",
        "Compare and pick a winner."
      ]
    }
  ],
  reflectionPrompt: "Today you computed unit cost. What's a household purchase you'd want to recompute this week?",
  misconceptionBank: [
    {
      id: "assumes-bigger-cheaper",
      label: "Assumes bigger packages are always cheaper per unit",
      description: "Skips the math because 'bulk = cheaper' feels right.",
      coachMove: "Always do the divide. Sometimes it's true, sometimes it's not. The math is the proof."
    }
  ]
};
