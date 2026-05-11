// Grade 6 Financial Literacy — Enrichment Day 5.
// Topic: kid entrepreneurship (a simple business plan).

export const grade6FinanceDay5 = {
  id: "g6.fin.e.d5",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Kid entrepreneurship",
  topicTag: "entrepreneurship",
  estimatedMinutes: 20,
  standardsRefs: ["JumpStart.Financial.Earning"],
  hook: "A small business has the same shape as a big one. Today you sketch a one-page plan with real numbers.",
  miniLesson: [
    "Every plan needs: a problem you solve, a customer, a price, costs, and profit. Profit = price - cost per unit.",
    "Test the price. If customers say 'too expensive', either lower the price OR add value. If they say 'really cheap', you can probably raise it.",
    "Start small. Prove one customer pays once before scaling — Day 4 of the engineering loop (prototype + iterate) applies to business too."
  ],
  workedExample: {
    prompt:
      "Maya wants a dog-walking business. Sketch a plan.",
    steps: [
      "Problem: neighbors with full work-days need dogs walked.",
      "Customer: 3 neighbors with dogs (parent-approved).",
      "Price: $5 per 20-minute walk.",
      "Costs: ~$0 per walk (her own feet, parent-approved leash). Profit ≈ $5/walk.",
      "Test week: try 1 customer at $5 for 3 walks → see if they re-book."
    ],
    answer: "5-line plan + 1-customer test."
  },
  items: [
    {
      id: "g6.fin.e.d5.q1",
      type: "multiple_choice",
      stem: "What's PROFIT in a simple business?",
      choices: [
        "Total money the customer pays.",
        "Money left after subtracting costs from revenue.",
        "The cost of materials.",
        "Whatever's in the cash box at the end of the day."
      ],
      answerIndex: 1,
      explanation: "Profit = revenue minus costs. Cash on hand isn't the same as profit (you might have unpaid bills).",
      hintLadder: [
        "What goes in vs what goes out?",
        "Income minus costs.",
        "Profit = revenue - costs."
      ]
    },
    {
      id: "g6.fin.e.d5.q2",
      type: "numeric",
      stem:
        "You sell handmade bookmarks for $3 each. Materials cost $1 per bookmark. Profit per bookmark?",
      answer: 2,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Profit per unit = price - cost per unit.",
        "$3 - $1.",
        "$2 profit per bookmark."
      ],
      explanation: "$3 - $1 = $2 profit per bookmark."
    },
    {
      id: "g6.fin.e.d5.q3",
      type: "numeric",
      stem:
        "Same bookmarks ($3 each, $1 cost). You sell 25. Total profit?",
      answer: 50,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Profit per unit × units sold.",
        "$2 × 25.",
        "$50."
      ],
      explanation: "$2 × 25 = $50 total profit."
    },
    {
      id: "g6.fin.e.d5.q4",
      type: "multiple_choice",
      stem:
        "A few customers said your $3 bookmark is 'kind of high.' Best next move?",
      choices: [
        "Get angry.",
        "Test a $2 price OR add a feature (custom name, ribbon) at the same price.",
        "Quit.",
        "Yell at them."
      ],
      answerIndex: 1,
      explanation: "Two real options: lower price or add value. Pick one, test, then decide.",
      hintLadder: [
        "Price feedback is data, not insult.",
        "Two responses: change price or change value.",
        "Test one."
      ],
      misconceptionsTargeted: ["takes-feedback-personally"]
    },
    {
      id: "g6.fin.e.d5.q5",
      type: "short_answer",
      stem:
        "Sketch a tiny business plan for something you could do this summer (with parent approval). Include: problem, customer, price, cost per unit, one-week test.",
      rubric: {
        level3: "All five elements specific and realistic for a Grade 6 student. The test is concrete (named customer, time window).",
        level2: "Has all five but one is vague.",
        level1: "Just an idea without the structure."
      },
      exemplar:
        "Problem: my street has lots of cars but no one washes them. Customer: my next-door neighbor. Price: $8 per wash. Cost per unit: $1 (soap + bucket I already own). Test: ask my neighbor next Saturday if I can wash their car twice in a week.",
      hintLadder: [
        "What problem could you solve nearby?",
        "Who's the actual customer?",
        "Set a price + cost + a one-week test."
      ]
    }
  ],
  reflectionPrompt: "This enrichment week you learned to think like a planner. What's one money decision you'll make differently next month?",
  misconceptionBank: [
    {
      id: "takes-feedback-personally",
      label: "Treats price feedback as personal criticism",
      description: "Hears 'kind of expensive' as 'you're bad' and quits instead of testing changes.",
      coachMove: "Customer feedback is data. Two responses are reasonable — lower price or add value. Both keep the business going."
    }
  ]
};
