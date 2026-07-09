// Grade 5 Financial Literacy — Enrichment Day 5.
// Topic: a tiny business (bake sale / lemonade stand: cost, price, profit).

export const grade5FinanceDay5 = {
  id: "g5.fin.e.d5",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "A tiny business",
  topicTag: "tiny-business",
  estimatedMinutes: 17,
  standardsRefs: ["JumpStart.Financial.Earning"],
  hook: "A lemonade stand is a real business! Today you'll figure out cost, price, and the best part — profit.",
  miniLesson: [
    "COST is what YOU pay to make something. PRICE is what the CUSTOMER pays you for it.",
    "PROFIT is the money you keep: profit = price - cost.",
    "To make a profit, your price has to be higher than your cost."
  ],
  workedExample: {
    prompt:
      "Zoe makes lemonade. Each cup costs her $1 in lemons and sugar. She sells each cup for $3. What is her profit on one cup?",
    steps: [
      "Cost per cup: $1.",
      "Price per cup: $3.",
      "Profit = price - cost = $3 - $1.",
      "Profit = $2 per cup."
    ],
    answer: "$2 profit per cup."
  },
  items: [
    {
      id: "g5.fin.e.d5.q1",
      type: "multiple_choice",
      stem: "What is PROFIT?",
      choices: [
        "The money it costs you to make something.",
        "The total money customers hand you.",
        "The money you keep after paying your costs.",
        "The number of things you sell."
      ],
      answerIndex: 2,
      explanation: "Profit is what's left after you subtract your costs from the money you took in: profit = price - cost.",
      hintLadder: [
        "It's the money you get to KEEP.",
        "You keep it after paying what it cost you to make the item.",
        "Profit = the money you keep after paying your costs."
      ]
    },
    {
      id: "g5.fin.e.d5.q2",
      type: "multiple_choice",
      stem:
        "A cookie costs you $1 to make. You want to make a profit. Which selling price works?",
      choices: [
        "Sell it for $1.",
        "Sell it for $0 (give it away).",
        "It doesn't matter what you charge.",
        "Sell it for $2."
      ],
      answerIndex: 3,
      explanation: "To make a profit, the price must be more than the $1 cost. $2 - $1 = $1 profit.",
      hintLadder: [
        "Profit happens when the price is HIGHER than the cost.",
        "The cost is $1, so the price must be more than $1.",
        "Sell it for $2 to make a profit."
      ],
      misconceptionsTargeted: ["price-equals-profit"]
    },
    {
      id: "g5.fin.e.d5.q3",
      type: "numeric",
      stem:
        "You sell muffins for $4 each. Each muffin costs you $1 to make. What is your profit on ONE muffin?",
      answer: 3,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Profit = price - cost.",
        "$4 - $1 = ?",
        "$3 profit per muffin."
      ],
      explanation: "$4 - $1 = $3 profit on each muffin."
    },
    {
      id: "g5.fin.e.d5.q4",
      type: "multiple_choice",
      stem:
        "You make $2 profit on each bracelet and you sell 5 bracelets. What is your total profit?",
      choices: [
        "$10",
        "$5",
        "$7",
        "$2"
      ],
      answerIndex: 0,
      explanation: "$2 profit on each of 5 bracelets: $2 × 5 = $10 total profit.",
      hintLadder: [
        "Multiply the profit on one by how many you sold.",
        "$2 × 5 = ?",
        "$10 total profit."
      ]
    },
    {
      id: "g5.fin.e.d5.q5",
      type: "short_answer",
      stem:
        "Plan a tiny bake sale item (with a grown-up's help). Tell your cost to make one, the price you'd charge, and your profit on one.",
      rubric: {
        level3: "Names an item with a cost, a higher price, and a correct profit (price - cost).",
        level2: "Has a cost and price but the profit is missing or wrong.",
        level1: "Just names an item with no numbers."
      },
      exemplar:
        "I'd sell brownies. Each one costs me $1 to make. I'd charge $3. My profit is $3 - $1 = $2 per brownie.",
      hintLadder: [
        "Pick an item and guess what one costs you to make.",
        "Choose a price that's higher than your cost.",
        "Subtract cost from price to find your profit."
      ]
    }
  ],
  reflectionPrompt: "This week you learned to think like a planner. What is one money choice you'll make differently next month?",
  misconceptionBank: [
    {
      id: "price-equals-profit",
      label: "Thinks the whole price is profit",
      description: "Believes all the money a customer pays is profit, forgetting to subtract what it cost to make the item.",
      coachMove: "The price isn't all profit. First subtract your cost — what's left over is the profit you keep."
    }
  ]
};
