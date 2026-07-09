// Grade 7 Financial Literacy — Enrichment Day 5.
// Topic: entrepreneurship — cost, revenue, profit margin, and pricing.

export const grade7FinanceDay5 = {
  id: "g7.fin.e.d5",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Entrepreneurship: cost, revenue, profit, and pricing",
  topicTag: "profit-margin-pricing",
  estimatedMinutes: 22,
  standardsRefs: ["JumpStart.Financial.Earning", "JumpStart.Financial.Spending"],
  hook: "Selling out doesn't mean you made money. Today you separate what came IN (revenue) from what went OUT (cost) to find the number that actually matters: profit — and the margin that tells you how healthy it is.",
  miniLesson: [
    "Revenue = money coming in from sales (price × quantity sold). Cost = money going out to make and sell the product.",
    "Profit = revenue − cost. If cost is higher than revenue, profit is negative — you lost money even if you sold everything.",
    "Profit margin = profit ÷ revenue, written as a percent. It tells you how much of each sales dollar you actually keep. Pricing too low can leave your margin razor-thin."
  ],
  workedExample: {
    prompt:
      "Zoe sells bracelets. She spends $50 on supplies and sells all of them for $80 total. Find her profit and her profit margin.",
    steps: [
      "Revenue = $80 (money in). Cost = $50 (money out).",
      "Profit = revenue − cost = 80 − 50 = $30.",
      "Profit margin = profit ÷ revenue = 30 ÷ 80 = 0.375.",
      "As a percent: 0.375 × 100 = 37.5%."
    ],
    answer: "Profit = $30; profit margin = 37.5% (she keeps about 37.5 cents of every sales dollar)."
  },
  items: [
    {
      id: "g7.fin.e.d5.q1",
      type: "multiple_choice",
      stem:
        "A lemonade stand takes in $60 in sales and spent $22 on cups, lemons, and sugar. What is the profit?",
      choices: [
        "$38 — revenue minus cost.",
        "$82 — revenue plus cost.",
        "$60 — the money that came in.",
        "$22 — the money spent."
      ],
      answerIndex: 0,
      explanation: "Profit = revenue − cost = 60 − 22 = $38. Revenue alone isn't profit.",
      hintLadder: [
        "Profit is what's left after costs.",
        "60 − 22 = ?",
        "$38 profit."
      ],
      misconceptionsTargeted: ["revenue-is-profit"]
    },
    {
      id: "g7.fin.e.d5.q2",
      type: "multiple_choice",
      stem:
        "A stand sells everything and brings in $45, but the supplies cost $52. What happened?",
      choices: [
        "It made a $7 profit because it sold out.",
        "It lost $7 — cost was higher than revenue, so profit is negative.",
        "It broke even at $0.",
        "Selling out guarantees a profit."
      ],
      answerIndex: 1,
      explanation: "Profit = 45 − 52 = −$7. Selling out doesn't help if each sale doesn't cover its costs.",
      hintLadder: [
        "Compare money in to money out.",
        "45 − 52 = ?",
        "It's negative — a $7 loss."
      ],
      misconceptionsTargeted: ["selling-out-means-profit"]
    },
    {
      id: "g7.fin.e.d5.q3",
      type: "numeric",
      stem:
        "A small shop has revenue of $120 and costs of $90. What is the profit MARGIN, as a percent?",
      answer: 25,
      tolerance: 0.1,
      unit: "percent",
      hintLadder: [
        "First find profit: revenue − cost.",
        "Profit = 120 − 90 = $30. Then margin = profit ÷ revenue.",
        "30 ÷ 120 = 0.25 = 25%."
      ],
      explanation: "Profit = 120 − 90 = $30. Margin = 30 ÷ 120 = 0.25 = 25%."
    },
    {
      id: "g7.fin.e.d5.q4",
      type: "multiple_choice",
      stem:
        "Your cost to make one candle is $4. You're deciding on a price. Which pricing choice makes the SMARTEST business sense?",
      choices: [
        "Sell at $4 so it's cheap and fair.",
        "Sell at $3 to beat everyone on price.",
        "Sell at $2 because more people will buy.",
        "Sell at $7, leaving a $3 profit per candle (about a 43% margin) while staying reasonable."
      ],
      answerIndex: 3,
      explanation: "Price must be ABOVE cost to profit. At $7 you make $3 per candle (3 ÷ 7 ≈ 43% margin); pricing at or below $4 means zero or negative profit.",
      hintLadder: [
        "Which prices are at or below the $4 cost?",
        "Any price ≤ cost earns no profit.",
        "Only $7 clears the cost and leaves a real margin."
      ],
      misconceptionsTargeted: ["price-below-cost"]
    },
    {
      id: "g7.fin.e.d5.q5",
      type: "short_answer",
      stem:
        "Invent a small business you could run. List one cost and a selling price, then compute your profit and profit margin for one sale. Say whether the margin looks healthy to you.",
      rubric: {
        level3: "A specific business, a cost and price above it, correct profit (price − cost) and margin (profit ÷ price as a percent), and a reasoned take on the margin.",
        level2: "Has the pieces but one calculation is off or the margin judgment is missing.",
        level1: "No workable numbers or profit not computed."
      },
      exemplar:
        "Dog-washing: shampoo and towels cost me $2 per dog, and I charge $10. Profit = 10 − 2 = $8. Margin = 8 ÷ 10 = 0.80 = 80%. That's a healthy margin because most of what I charge is profit — my costs are low.",
      hintLadder: [
        "Pick a business with one clear cost.",
        "Profit = price − cost.",
        "Margin = profit ÷ price, as a percent."
      ]
    }
  ],
  reflectionPrompt: "Today you found profit and margin, not just sales. If your first price left a thin margin, would you raise the price or cut costs — and why?",
  misconceptionBank: [
    {
      id: "revenue-is-profit",
      label: "Confuses revenue with profit",
      description: "Treats total sales as earnings, ignoring the costs that must be subtracted to find real profit.",
      coachMove: "Always subtract costs from revenue first — the money in the till isn't yet money earned."
    },
    {
      id: "selling-out-means-profit",
      label: "Thinks selling out means making money",
      description: "Assumes a sold-out product is profitable, even when each sale didn't cover its cost.",
      coachMove: "Check that price beats per-item cost — selling more at a loss just loses more."
    },
    {
      id: "price-below-cost",
      label: "Prices at or below cost to attract buyers",
      description: "Sets a low price to win customers without checking that it clears the cost, leaving no profit or a loss.",
      coachMove: "Start from cost: the price must sit above it, and the gap is your profit per item."
    }
  ]
};
