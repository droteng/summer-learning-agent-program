// Grade 7 Financial Literacy — Enrichment Day 2.
// Topic: saving goals and simple interest.

export const grade7FinanceDay2 = {
  id: "g7.fin.e.d2",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Saving goals and simple interest",
  topicTag: "saving-simple-interest",
  estimatedMinutes: 21,
  standardsRefs: ["JumpStart.Financial.Saving"],
  hook: "A goal without a number is just a wish. Today you turn a savings goal into a plan — and see how simple interest quietly adds money on top of what you put in.",
  miniLesson: [
    "A SMART savings goal has a dollar amount and a deadline: 'save $180 for a bike in 6 months' means $30 a month, not 'save someday'.",
    "Simple interest = principal × rate × time. A 4% rate means the bank pays $4 per year on every $100 you keep there.",
    "Interest is money you earn for waiting. The bigger the principal and the longer the time, the more it adds up — even at a small rate."
  ],
  workedExample: {
    prompt:
      "Maya wants $240 for a keyboard in 8 months and already has $80. She also keeps a separate $150 in savings at 4% simple interest. (a) How much must she add per month? (b) How much interest does the $150 earn in 2 years?",
    steps: [
      "Goal gap: 240 − 80 = $160 still needed.",
      "Per month: 160 ÷ 8 = $20 per month.",
      "Interest on savings: 150 × 0.04 × 2 = $12.",
      "So $20/month reaches the keyboard goal, and the $150 grows by $12 over 2 years."
    ],
    answer: "$20 per month for the keyboard; the $150 earns $12 interest in 2 years."
  },
  items: [
    {
      id: "g7.fin.e.d2.q1",
      type: "multiple_choice",
      stem:
        "Which of these is the strongest (most SMART) savings goal?",
      choices: [
        "Save some money for a phone eventually.",
        "Save a lot this summer.",
        "Try to spend less each week.",
        "Save $120 for a phone case and case-fund by December, about $20 a month."
      ],
      answerIndex: 3,
      explanation: "A strong goal names a dollar amount and a deadline so you can check progress. Only the last option does both.",
      hintLadder: [
        "A good goal has a number AND a date.",
        "Which option gives you both?",
        "The $120-by-December one."
      ],
      misconceptionsTargeted: ["vague-goal"]
    },
    {
      id: "g7.fin.e.d2.q2",
      type: "numeric",
      stem:
        "Compute simple interest: principal $250, rate 4% per year, time 3 years. Interest only.",
      answer: 30,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "Use principal × rate × time.",
        "250 × 0.04 = $10 per year.",
        "$10 × 3 years = $30."
      ],
      explanation: "250 × 0.04 × 3 = $30 in interest."
    },
    {
      id: "g7.fin.e.d2.q3",
      type: "multiple_choice",
      stem:
        "You save $400 at 5% simple interest per year. What is the TOTAL balance after 2 years?",
      choices: [
        "$420 — you added one year of interest.",
        "$440 — principal plus $40 interest.",
        "$500 — the rate doubles the money.",
        "$408 — interest is only on the extra."
      ],
      answerIndex: 1,
      explanation: "Interest = 400 × 0.05 × 2 = $40. Total = 400 + 40 = $440.",
      hintLadder: [
        "First find the interest: 400 × 0.05 × 2.",
        "That interest is $40.",
        "Total = 400 + 40 = $440."
      ]
    },
    {
      id: "g7.fin.e.d2.q4",
      type: "multiple_choice",
      stem:
        "You want $270 in 9 months and already have $90. Which monthly plan reaches the goal?",
      choices: [
        "$20 a month — the $180 gap split over 9 months.",
        "$30 a month — the full $270 split over 9 months.",
        "$9 a month — one dollar per month.",
        "$45 a month — the gap split over 4 months."
      ],
      answerIndex: 0,
      explanation: "You already have $90, so the gap is 270 − 90 = $180. Over 9 months that's 180 ÷ 9 = $20 a month.",
      hintLadder: [
        "Subtract what you already have first.",
        "270 − 90 = $180 still needed.",
        "$180 ÷ 9 = $20 a month."
      ],
      misconceptionsTargeted: ["ignore-starting-amount"]
    },
    {
      id: "g7.fin.e.d2.q5",
      type: "short_answer",
      stem:
        "Pick something you'd genuinely like to save for. Give its price, your deadline, and the monthly amount you'd need. Then say one thing you'd cut to free up that money.",
      rubric: {
        level3: "A specific goal with price, deadline, a correct monthly amount (price ÷ months, or gap ÷ months), and a realistic thing to cut.",
        level2: "Has a goal and monthly amount but the math is off or the cut is vague.",
        level1: "Names a goal without a workable monthly plan."
      },
      exemplar:
        "I want $150 wireless earbuds in 5 months. That's 150 ÷ 5 = $30 a month. I'd cut my two $8 snack trips a week down to one, which frees up about $32 a month — enough to hit the goal.",
      hintLadder: [
        "Name the price and the deadline in months.",
        "Divide the amount needed by the months.",
        "Name one real spend you could trim."
      ]
    }
  ],
  reflectionPrompt: "Today you turned a goal into a monthly number. Which feels easier for you — setting the number, or actually setting aside the money each time? Why?",
  misconceptionBank: [
    {
      id: "vague-goal",
      label: "Sets goals without a number or deadline",
      description: "Says 'save more' without a dollar target or date, so progress can't be measured and the goal drifts.",
      coachMove: "Push for two numbers every time: how much, and by when. Then the monthly amount falls right out."
    },
    {
      id: "ignore-starting-amount",
      label: "Ignores money already saved",
      description: "Divides the full goal by the months instead of subtracting what's already saved, overstating the monthly amount.",
      coachMove: "Always find the GAP first (goal minus current savings), then divide by the months left."
    }
  ]
};
