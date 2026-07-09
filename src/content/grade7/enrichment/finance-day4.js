// Grade 7 Financial Literacy — Enrichment Day 4.
// Topic: banking — credit vs. debit, interest, and risk.

export const grade7FinanceDay4 = {
  id: "g7.fin.e.d4",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Banking: credit vs. debit, interest, and risk",
  topicTag: "credit-debit-risk",
  estimatedMinutes: 21,
  standardsRefs: ["JumpStart.Financial.CreditDebt", "JumpStart.Financial.Saving"],
  hook: "A debit card spends money you already have. A credit card spends the bank's money — that you promise to pay back. Miss the deadline and the bank charges interest that grows what you owe. Today you'll tell them apart and do the cost math.",
  miniLesson: [
    "DEBIT pulls from your own bank balance — you can't spend more than you have. CREDIT is a short-term loan from the bank you must repay.",
    "If you don't pay a credit balance in full, the bank charges interest on what's left. On debt, interest works AGAINST you: it grows the amount you owe.",
    "Risk of credit: it's easy to buy things you can't actually afford, then owe more each month as interest piles on. Paid off in full and on time, credit is a tool; carried as debt, it's a trap."
  ],
  workedExample: {
    prompt:
      "Alex buys a $200 phone on a credit card at 18% yearly interest and doesn't pay it off. Using simple interest, how much interest is owed after 1 year, and what's the total owed?",
    steps: [
      "Principal (borrowed) = $200, rate = 0.18, time = 1 year.",
      "Interest = 200 × 0.18 × 1 = $36.",
      "Total owed = 200 + 36 = $236.",
      "So the $200 phone actually costs $236 if the balance sits unpaid for a year."
    ],
    answer: "$36 in interest; $236 total owed — the phone effectively costs $36 more."
  },
  items: [
    {
      id: "g7.fin.e.d4.q1",
      type: "multiple_choice",
      stem:
        "What is the key difference between a debit card and a credit card?",
      choices: [
        "Debit cards are only for adults; credit cards are for kids.",
        "Debit spends money you already have; credit borrows money you must pay back.",
        "There is no real difference between them.",
        "Credit cards never charge any fees or interest."
      ],
      answerIndex: 1,
      explanation: "Debit draws from your own balance; credit is a loan from the bank that you repay — with interest if you don't pay in full.",
      hintLadder: [
        "One uses your own money, the other borrows.",
        "Which card is a loan you repay?",
        "Debit = your money; credit = borrowed."
      ],
      misconceptionsTargeted: ["credit-is-free-money"]
    },
    {
      id: "g7.fin.e.d4.q2",
      type: "numeric",
      stem:
        "A $300 credit balance is left unpaid at 15% yearly interest. Using simple interest, how many dollars of interest are owed after 1 year?",
      answer: 45,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "Use principal × rate × time.",
        "300 × 0.15 × 1 = ?",
        "= $45."
      ],
      explanation: "300 × 0.15 × 1 = $45 in interest owed."
    },
    {
      id: "g7.fin.e.d4.q3",
      type: "multiple_choice",
      stem:
        "On SAVINGS the bank pays YOU interest; on a CREDIT balance the bank charges you interest. What does this difference mean for your money?",
      choices: [
        "Both grow your money the same way.",
        "Interest is always good for you.",
        "Neither one changes how much you have.",
        "Savings interest grows your money; credit interest grows what you OWE."
      ],
      answerIndex: 3,
      explanation: "Interest can work for you or against you. On savings it adds to your balance; on unpaid credit it adds to your debt.",
      hintLadder: [
        "One kind of interest helps you, one hurts.",
        "Which side of the loan are you on each time?",
        "Savings grows money; credit grows debt."
      ],
      misconceptionsTargeted: ["interest-always-good"]
    },
    {
      id: "g7.fin.e.d4.q4",
      type: "multiple_choice",
      stem:
        "Which habit keeps a credit card working FOR you instead of against you?",
      choices: [
        "Buy as much as the limit allows, since it's available.",
        "Only make the smallest payment the bank asks for.",
        "Pay the full balance on time every month so no interest is charged.",
        "Ignore the statement and pay whenever you remember."
      ],
      answerIndex: 2,
      explanation: "Paying the full balance by the due date means the bank charges no interest — you get the convenience without the debt.",
      hintLadder: [
        "Interest is only charged on balances you DON'T pay off.",
        "So how much should you pay, and when?",
        "Pay it in full, on time, every month."
      ]
    },
    {
      id: "g7.fin.e.d4.q5",
      type: "short_answer",
      stem:
        "Suppose you owe $150 on a credit card at 20% yearly interest and don't pay it off for a year. Compute the interest with simple interest, then explain in one sentence why 'minimum payments only' can be risky.",
      rubric: {
        level3: "Correct interest ($30) and a clear reason minimums are risky (the balance and interest keep growing, so debt lingers and costs more over time).",
        level2: "Right math but a vague or shallow explanation of the risk.",
        level1: "Math wrong or the risk not explained."
      },
      exemplar:
        "Interest: 150 × 0.20 × 1 = $30. Paying only the minimum is risky because most of the balance stays, so interest keeps piling on and a small purchase can end up costing far more than its price.",
      hintLadder: [
        "Use principal × rate × time for the interest.",
        "150 × 0.20 × 1 = $30.",
        "Then explain what happens if the balance lingers."
      ]
    }
  ],
  reflectionPrompt: "Today you saw interest work both ways. Would you rather be the one EARNING interest or PAYING it — and what habit keeps you on the earning side?",
  misconceptionBank: [
    {
      id: "credit-is-free-money",
      label: "Treats credit as free money",
      description: "Thinks a credit card adds spendable money rather than being a loan that must be repaid, often with interest.",
      coachMove: "Reframe credit as borrowing: every swipe is money you owe back, and unpaid balances cost extra."
    },
    {
      id: "interest-always-good",
      label: "Thinks all interest helps you",
      description: "Doesn't distinguish interest earned on savings from interest charged on debt, so underestimates the cost of carrying a balance.",
      coachMove: "Ask who is paying whom: on savings the bank pays you; on credit you pay the bank."
    }
  ]
};
