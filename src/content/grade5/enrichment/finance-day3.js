// Grade 5 Financial Literacy — Enrichment Day 3.
// Topic: comparing prices — which is the better deal (unit cost).

export const grade5FinanceDay3 = {
  id: "g5.fin.e.d3",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Comparing prices — the better deal",
  topicTag: "better-deal",
  estimatedMinutes: 16,
  standardsRefs: ["JumpStart.Financial.Spending"],
  hook: "Two packs of the same thing can cost different amounts. A smart shopper checks which one gives more for your money.",
  miniLesson: [
    "The BETTER DEAL is the one that costs less for each item you get.",
    "To compare, find the price for ONE item: divide the total price by how many are in the pack.",
    "Cheaper per item usually wins — but only if you actually need that many."
  ],
  workedExample: {
    prompt:
      "Pack A: 4 pencils for $8. Pack B: 5 pencils for $5. Which is the better deal?",
    steps: [
      "Pack A: $8 ÷ 4 pencils = $2 per pencil.",
      "Pack B: $5 ÷ 5 pencils = $1 per pencil.",
      "Compare: $1 per pencil is cheaper than $2 per pencil.",
      "Pack B is the better deal."
    ],
    answer: "Pack B ($1 per pencil)."
  },
  items: [
    {
      id: "g5.fin.e.d3.q1",
      type: "multiple_choice",
      stem: "What does 'price per item' mean?",
      choices: [
        "The total cost of the whole pack.",
        "How many items are in the pack.",
        "The most expensive item in the store.",
        "How much just ONE item costs."
      ],
      answerIndex: 3,
      explanation: "Price per item is the cost of a single item. You find it by dividing the pack price by the number of items.",
      hintLadder: [
        "The word 'per' means 'for each one'.",
        "So it's the cost for each single item.",
        "It means how much just ONE item costs."
      ]
    },
    {
      id: "g5.fin.e.d3.q2",
      type: "multiple_choice",
      stem:
        "A pack of 6 juice boxes costs $6. What is the price per juice box?",
      choices: [
        "$6",
        "$1",
        "$3",
        "$2"
      ],
      answerIndex: 1,
      explanation: "$6 ÷ 6 juice boxes = $1 per juice box.",
      hintLadder: [
        "Divide the total price by how many boxes.",
        "$6 ÷ 6 = ?",
        "$1 per juice box."
      ]
    },
    {
      id: "g5.fin.e.d3.q3",
      type: "multiple_choice",
      stem:
        "Store 1: 2 apples for $4. Store 2: 3 apples for $3. Which store has the better deal per apple?",
      choices: [
        "They're exactly the same.",
        "You can't tell.",
        "Store 2 ($1 per apple).",
        "Store 1 ($2 per apple)."
      ],
      answerIndex: 2,
      explanation: "Store 1: $4 ÷ 2 = $2 each. Store 2: $3 ÷ 3 = $1 each. $1 is cheaper, so Store 2 wins.",
      hintLadder: [
        "Find the price for one apple at each store.",
        "Store 1: $4 ÷ 2 = $2. Store 2: $3 ÷ 3 = $1.",
        "Store 2 is cheaper at $1 per apple."
      ],
      misconceptionsTargeted: ["bigger-pack-always-better"]
    },
    {
      id: "g5.fin.e.d3.q4",
      type: "numeric",
      stem:
        "A pack of 4 granola bars costs $8. What is the price for ONE granola bar?",
      answer: 2,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Divide the pack price by the number of bars.",
        "$8 ÷ 4 = ?",
        "$2 per granola bar."
      ],
      explanation: "$8 ÷ 4 = $2 per granola bar."
    },
    {
      id: "g5.fin.e.d3.q5",
      type: "short_answer",
      stem:
        "Two packs of stickers: Pack A is 5 stickers for $10, Pack B is 4 stickers for $4. Which is the better deal? Show how you know.",
      rubric: {
        level3: "Finds price per sticker for both ($2 vs $1), compares them, and correctly picks Pack B.",
        level2: "Finds one price per sticker or picks the right pack but doesn't fully show the comparison.",
        level1: "Guesses a pack with no math or reasoning."
      },
      exemplar:
        "Pack A is $10 ÷ 5 = $2 per sticker. Pack B is $4 ÷ 4 = $1 per sticker. $1 is cheaper than $2, so Pack B is the better deal.",
      hintLadder: [
        "Find the price for one sticker in each pack.",
        "Pack A: $10 ÷ 5. Pack B: $4 ÷ 4.",
        "Compare $2 and $1 — the smaller one is the better deal."
      ]
    }
  ],
  reflectionPrompt: "Next time you shop, how could finding the price per item help you spend smarter?",
  misconceptionBank: [
    {
      id: "bigger-pack-always-better",
      label: "Thinks the bigger pack is always the better deal",
      description: "Assumes more items automatically means a better deal, without checking the price per item.",
      coachMove: "A bigger pack isn't always cheaper per item. Always divide to find the price for one, then compare."
    }
  ]
};
