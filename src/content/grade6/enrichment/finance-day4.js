// Grade 6 Financial Literacy — Enrichment Day 4.
// Topic: banks, interest, and risk (kid-appropriate).

export const grade6FinanceDay4 = {
  id: "g6.fin.e.d4",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Banks, interest, and risk",
  topicTag: "interest-risk",
  estimatedMinutes: 18,
  standardsRefs: ["JumpStart.Financial.Saving"],
  hook: "A bank pays you small amounts to keep your money there. Today you do the interest math — and learn why a higher return usually means more risk.",
  miniLesson: [
    "Interest = money the bank pays you for keeping savings there, expressed as a yearly rate. 3% means $3 paid per year on every $100.",
    "Simple interest: principal × rate × time. So $100 × 0.03 × 2 years = $6.",
    "Risk tradeoff: bigger returns usually come with bigger risk. A 'guaranteed 20% return!' is almost always a red flag."
  ],
  workedExample: {
    prompt:
      "You put $200 in a savings account paying 4% simple interest per year. How much interest after 3 years?",
    steps: [
      "Principal = $200, rate = 0.04, time = 3 years.",
      "Interest = 200 × 0.04 × 3.",
      "= $24 over 3 years (about $8/year).",
      "Total balance after 3 years = $200 + $24 = $224."
    ],
    answer: "$24 in interest; $224 total."
  },
  items: [
    {
      id: "g6.fin.e.d4.q1",
      type: "numeric",
      stem:
        "Compute simple interest: principal $100, rate 5%, time 2 years. Interest only.",
      answer: 10,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "Use P × R × T.",
        "100 × 0.05 × 2.",
        "= $10."
      ],
      explanation: "100 × 0.05 × 2 = $10."
    },
    {
      id: "g6.fin.e.d4.q2",
      type: "numeric",
      stem:
        "Principal $500 at 3% per year, 4 years. What's the TOTAL balance (principal + interest)?",
      answer: 560,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "Interest = 500 × 0.03 × 4 = $60.",
        "Total = principal + interest.",
        "500 + 60 = $560."
      ],
      explanation: "Interest = $60. Total = $500 + $60 = $560."
    },
    {
      id: "g6.fin.e.d4.q3",
      type: "multiple_choice",
      stem:
        "An ad promises '20% guaranteed return per year, no risk!' What's the BEST reaction?",
      choices: [
        "Invest everything immediately.",
        "Skeptical — higher returns almost always come with higher risk, and 'guaranteed' is suspicious.",
        "Trust the ad — they wouldn't lie.",
        "Forward it to friends."
      ],
      answerIndex: 1,
      explanation: "Guaranteed huge returns are almost always a scam. Real returns scale with real risk.",
      hintLadder: [
        "Real bank rates are small.",
        "What's suspicious about 'guaranteed' + huge return?",
        "Be skeptical."
      ],
      misconceptionsTargeted: ["high-return-no-risk"]
    },
    {
      id: "g6.fin.e.d4.q4",
      type: "multiple_choice",
      stem: "Why do banks pay interest at all?",
      choices: [
        "They feel sorry for savers.",
        "To use your money for loans they make to others; they share some of the profit with you.",
        "It's a legal requirement.",
        "They lose money on every account."
      ],
      answerIndex: 1,
      explanation: "Your deposit funds loans the bank makes. They charge borrowers more than they pay you — that's their profit margin.",
      hintLadder: [
        "What does the bank do with your money?",
        "Lend it.",
        "They charge borrowers more than they pay you."
      ]
    },
    {
      id: "g6.fin.e.d4.q5",
      type: "short_answer",
      stem:
        "Imagine your $50 saved at 4% interest per year for 5 years. Compute the interest. Then explain in one sentence whether 4% feels 'a lot' to you and why.",
      rubric: {
        level3: "Correct interest math ($10), and a thoughtful one-line view on whether 4% feels significant (e.g., $10 over 5 years feels small but it's money for doing nothing).",
        level2: "Right math but vague reflection.",
        level1: "Math wrong or missing reflection."
      },
      exemplar:
        "Interest: 50 × 0.04 × 5 = $10. Honestly $10 over 5 years feels small, but it's $10 I earned by not spending — and the longer my money stays, the more interest piles up.",
      hintLadder: [
        "Use P × R × T.",
        "$10 over 5 years.",
        "Reflect honestly — small or significant?"
      ]
    }
  ],
  reflectionPrompt: "Today you saw how interest works. Where in your life have you seen 'guaranteed huge return' ads — and what was wrong with them?",
  misconceptionBank: [
    {
      id: "high-return-no-risk",
      label: "Believes 'no-risk huge return' offers",
      description: "Doesn't connect returns to risk and falls for scammy investment pitches.",
      coachMove: "If someone promises a return much higher than bank savings rates with 'no risk', it's almost always a scam."
    }
  ]
};
