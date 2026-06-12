// Grade 6 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 1.
// Topic: ratios and proportions in recipes and harvest sharing.

export const fallG6MathW3D1 = {
  id: "g6.fall.math.w3.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Math",
  topic: "Ratios in recipes and harvest sharing",
  topicTag: "ratios",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.6.RP.A.1", "CCSS.6.RP.A.3"],
  hook: "A harvest has to be shared, scaled, and turned into recipes. All of that is ratios. Today you scale a pumpkin-bread recipe and split a crop fairly.",
  miniLesson: [
    "A ratio compares two amounts: 2 cups flour to 1 cup sugar is the ratio 2:1.",
    "Equivalent ratios keep the same relationship: 2:1 is the same as 4:2 and 6:3.",
    "To scale a recipe, multiply every ingredient by the same number so the ratio stays the same."
  ],
  workedExample: {
    prompt: "A bread recipe uses 3 cups flour to 1 cup pumpkin. You want to triple it. How much of each?",
    steps: [
      "Tripling means multiply every amount by 3.",
      "Flour: 3 × 3 = 9 cups.",
      "Pumpkin: 1 × 3 = 3 cups.",
      "The ratio 9:3 reduces back to 3:1 — same recipe, bigger batch."
    ],
    answer: "9 cups flour, 3 cups pumpkin."
  },
  items: [
    {
      id: "g6.fall.math.w3.d1.q1",
      type: "multiple_choice",
      stem: "Which ratio is equivalent to 4:2?",
      choices: ["1:2", "2:1", "4:4", "3:2"],
      answerIndex: 1,
      explanation: "4:2 divides by 2 to give 2:1 — the same relationship.",
      hintLadder: [
        "Simplify 4:2 by dividing both numbers by the same value.",
        "Divide both by 2.",
        "4÷2 : 2÷2 = 2:1."
      ]
    },
    {
      id: "g6.fall.math.w3.d1.q2",
      type: "numeric",
      stem: "A recipe uses 2 cups oats for every 5 cups flour. To use 15 cups flour, how many cups of oats?",
      answer: 6,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Find the multiplier: 5 cups flour became 15 cups — times what?",
        "15 ÷ 5 = 3, so multiply oats by 3.",
        "2 × 3 = 6 cups oats."
      ],
      explanation: "Flour tripled (5→15), so oats triple too: 2 × 3 = 6."
    },
    {
      id: "g6.fall.math.w3.d1.q3",
      type: "numeric",
      stem: "Three friends share a harvest in the ratio 1:1:1. If there are 24 apples, how many does each get?",
      answer: 8,
      tolerance: 0,
      unit: "apples",
      hintLadder: [
        "1:1:1 means equal shares.",
        "Divide the total by the number of shares.",
        "24 ÷ 3 = 8 each."
      ],
      explanation: "Equal shares: 24 ÷ 3 = 8 apples each."
    },
    {
      id: "g6.fall.math.w3.d1.q4",
      type: "numeric",
      stem: "A crop is split between two farms in the ratio 3:1. There are 40 crates total. How many crates does the FIRST farm get?",
      answer: 30,
      tolerance: 0,
      unit: "crates",
      hintLadder: [
        "Add the ratio parts: 3 + 1 = 4 equal shares.",
        "Each share = 40 ÷ 4 = 10 crates.",
        "First farm has 3 shares: 3 × 10 = 30."
      ],
      explanation: "4 shares of 10; the 3-part farm gets 30 crates.",
      misconceptionsTargeted: ["ratio-total-confusion"]
    },
    {
      id: "g6.fall.math.w3.d1.q5",
      type: "short_answer",
      stem: "You have a recipe ratio of 2 cups water to 3 cups grain. Explain how you'd scale it to feed a group needing 12 cups of grain, and how much water you'd use.",
      rubric: {
        level3: "Finds the multiplier (12 ÷ 3 = 4), applies it to water (2 × 4 = 8), and explains the ratio stays the same.",
        level2: "Gets the water amount but explanation of the multiplier is unclear.",
        level1: "Wrong scaling or no reasoning."
      },
      exemplar: "Grain went from 3 to 12, which is ×4. To keep the ratio, multiply water by 4 too: 2 × 4 = 8 cups water.",
      hintLadder: [
        "How many times bigger is 12 than 3?",
        "Apply that same multiplier to the water.",
        "Keep the ratio 2:3 by scaling both."
      ]
    }
  ],
  reflectionPrompt: "Where have you seen a recipe or split that had to stay 'in proportion'? What was the ratio?",
  misconceptionBank: [
    {
      id: "ratio-total-confusion",
      label: "Treats one ratio part as the whole total",
      description: "Divides the total by a single part instead of by the SUM of the parts.",
      coachMove: "Add the ratio numbers first to find how many equal shares there are, then divide the total by that sum."
    }
  ]
};
