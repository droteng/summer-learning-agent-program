// Grade 7 Financial Literacy — Enrichment Day 3.
// Topic: comparison shopping and unit rates.

export const grade7FinanceDay3 = {
  id: "g7.fin.e.d3",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Comparison shopping and unit rates",
  topicTag: "unit-rates-comparison",
  estimatedMinutes: 20,
  standardsRefs: ["JumpStart.Financial.Spending"],
  hook: "The bigger box isn't always the better deal. The trick pros use is the UNIT RATE — price per ounce, per item, per gram — so you compare apples to apples, not box to box.",
  miniLesson: [
    "A unit rate is price divided by amount: dollars ÷ ounces gives dollars per ounce. Lower price per unit usually means the better value.",
    "To compare, put both options in the SAME unit. $6.30 for 15 oz is 6.30 ÷ 15 = $0.42 per ounce; compare that against the other option's price per ounce.",
    "Value isn't only price. A cheaper unit rate on food you'll never finish isn't a deal — factor in how much you'll actually use."
  ],
  workedExample: {
    prompt:
      "Trail mix comes two ways: a 15 oz bag for $6.30, or a 12 oz bag for $4.80. Which is the better value per ounce, and by how much?",
    steps: [
      "Big bag: 6.30 ÷ 15 = $0.42 per ounce.",
      "Small bag: 4.80 ÷ 12 = $0.40 per ounce.",
      "Compare: $0.40 < $0.42, so the 12 oz bag is cheaper per ounce.",
      "Difference: 0.42 − 0.40 = $0.02 per ounce in favor of the smaller bag."
    ],
    answer: "The 12 oz bag wins at $0.40/oz — 2 cents per ounce cheaper than the 'bigger' bag."
  },
  items: [
    {
      id: "g7.fin.e.d3.q1",
      type: "multiple_choice",
      stem:
        "A 20 oz bottle of juice costs $3.00. What is the unit price per ounce?",
      choices: [
        "$0.20 per ounce.",
        "$0.60 per ounce.",
        "$0.15 per ounce.",
        "$1.50 per ounce."
      ],
      answerIndex: 2,
      explanation: "Unit price = 3.00 ÷ 20 = $0.15 per ounce.",
      hintLadder: [
        "Unit price is total price divided by the amount.",
        "3.00 ÷ 20 = ?",
        "$0.15 per ounce."
      ]
    },
    {
      id: "g7.fin.e.d3.q2",
      type: "numeric",
      stem:
        "A pack of 9 granola bars costs $5.40. What is the price per bar, in dollars?",
      answer: 0.6,
      tolerance: 0.01,
      unit: "dollars per bar",
      hintLadder: [
        "Divide the total price by the number of bars.",
        "5.40 ÷ 9 = ?",
        "$0.60 per bar."
      ],
      explanation: "5.40 ÷ 9 = $0.60 per bar."
    },
    {
      id: "g7.fin.e.d3.q3",
      type: "multiple_choice",
      stem:
        "Brand A: 16 oz shampoo for $4.00. Brand B: 10 oz shampoo for $2.75. Which is the better value per ounce?",
      choices: [
        "Brand A at $0.25/oz beats Brand B at $0.275/oz.",
        "Brand B, because the bottle is smaller and easier to use.",
        "They cost exactly the same per ounce.",
        "Brand A, because a bigger bottle is always cheaper."
      ],
      answerIndex: 0,
      explanation: "Brand A: 4.00 ÷ 16 = $0.25/oz. Brand B: 2.75 ÷ 10 = $0.275/oz. $0.25 < $0.275, so Brand A is the better value.",
      hintLadder: [
        "Find each price per ounce.",
        "A: 4.00 ÷ 16 = $0.25. B: 2.75 ÷ 10 = $0.275.",
        "Lower per-ounce price wins — Brand A."
      ],
      misconceptionsTargeted: ["bigger-is-cheaper"]
    },
    {
      id: "g7.fin.e.d3.q4",
      type: "multiple_choice",
      stem:
        "A 24 oz value tub of yogurt has the lowest price per ounce, but you know you'll only eat about 10 oz before it spoils. What's the smartest read?",
      choices: [
        "Always buy the lowest unit price no matter what.",
        "The tub may cost more per ounce you actually USE, since some will be wasted — a smaller size could be the real deal.",
        "Unit rate never matters for food.",
        "Buy two tubs to save even more per ounce."
      ],
      answerIndex: 1,
      explanation: "Waste changes the math. If you throw out 14 oz, your real cost is spread over only the 10 oz you eat — so the low sticker unit price can be misleading.",
      hintLadder: [
        "What happens to the ounces you don't eat?",
        "Wasted food still costs money.",
        "The real cost is per ounce you actually use."
      ],
      misconceptionsTargeted: ["ignore-waste"]
    },
    {
      id: "g7.fin.e.d3.q5",
      type: "short_answer",
      stem:
        "Find two real sizes of the same product (from a store, ad, or your kitchen). Compute each price per unit, say which is the better value, and note one reason you might STILL pick the other one.",
      rubric: {
        level3: "Two real options, correct per-unit prices, a clear winner, and a sensible reason the other could still make sense (waste, storage, budget today).",
        level2: "Two options with mostly correct math but weak or missing reasoning about the exception.",
        level1: "Only one option, or unit prices not computed."
      },
      exemplar:
        "Cereal: 18 oz for $4.50 is $0.25/oz; 12 oz for $3.60 is $0.30/oz. The 18 oz box is the better value. But if money is tight this week, the $3.60 box is easier to afford right now even though it costs more per ounce.",
      hintLadder: [
        "Pick one product in two sizes.",
        "Divide each price by its amount.",
        "Say which wins, then a reason the other could still fit."
      ]
    }
  ],
  reflectionPrompt: "Today you compared by unit rate instead of sticker price. Where have you seen a 'bigger = better deal' assumption that might not hold up?",
  misconceptionBank: [
    {
      id: "bigger-is-cheaper",
      label: "Assumes the bigger size is always cheaper",
      description: "Picks the largest package without checking price per unit, so overpays when the big size has a higher unit rate.",
      coachMove: "Always divide price by amount for BOTH sizes before deciding — the winner isn't always the big box."
    },
    {
      id: "ignore-waste",
      label: "Ignores waste when comparing value",
      description: "Chooses the lowest sticker unit price even when much of the product will be thrown away, raising the real per-used cost.",
      coachMove: "Ask how much you'll actually use, then compare cost per unit USED, not per unit bought."
    }
  ]
};
