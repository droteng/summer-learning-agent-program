// Grade 7 Financial Literacy — Enrichment Day 1.
// Topic: budgeting and opportunity cost.
//
// Enrichment missions live alongside the 8-week core curriculum and only
// activate when a parent opts in. They reuse the same schema (rubrics, hint
// ladders, misconceptions) so the runner, grader, and mastery model all
// work without modification.

export const grade7FinanceDay1 = {
  id: "g7.fin.e.d1",
  gradeLevel: 7,
  weekNumber: 9, // enrichment block — outside the core 8-week plan
  dayNumber: 1,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Budgeting and opportunity cost",
  topicTag: "budget-opportunity-cost",
  estimatedMinutes: 20,
  standardsRefs: ["JumpStart.Financial.Spending", "JumpStart.Financial.Saving"],
  hook: "A budget isn't a cage — it's a plan. And every dollar you plan to spend is a dollar you can't spend somewhere else. That 'somewhere else' is the opportunity cost of your choice.",
  miniLesson: [
    "A budget splits your income across categories — spending, saving, giving — before the money is gone. Planning first beats reacting later.",
    "Opportunity cost = the value of the BEST thing you gave up to get what you chose. Every choice has one, even choosing to save.",
    "Opportunity cost isn't only money. Spending three hours mowing a lawn for $30 also costs you three hours you could have spent another way."
  ],
  workedExample: {
    prompt:
      "Jordan earns $60 mowing lawns this week. He plans to save 25% and spend the rest. He's torn between concert tickets ($45) and a new skateboard deck ($40). What does his budget allow, and what's the opportunity cost of the concert?",
    steps: [
      "Save 25%: 60 × 0.25 = $15 saved.",
      "Left to spend: 60 − 15 = $45.",
      "He can afford the $45 concert OR the $40 deck, but not both.",
      "If he picks the concert, the opportunity cost is the skateboard deck he gave up (plus the $5 he could have kept)."
    ],
    answer: "Saves $15, has $45 to spend. Choosing the concert costs him the skateboard deck he passed up."
  },
  items: [
    {
      id: "g7.fin.e.d1.q1",
      type: "multiple_choice",
      stem: "Which statement best describes opportunity cost?",
      choices: [
        "The value of the best alternative you gave up when you made a choice.",
        "The total amount of money in your budget.",
        "A fee the bank charges when you overspend.",
        "The cheapest option on any list."
      ],
      answerIndex: 0,
      explanation: "Opportunity cost is what you sacrifice — the best option you didn't pick — not a fee or a total.",
      hintLadder: [
        "Think about what you lose, not what you keep.",
        "It's about the alternative you passed up.",
        "The best thing you gave up."
      ]
    },
    {
      id: "g7.fin.e.d1.q2",
      type: "numeric",
      stem:
        "Priya budgets her $80 babysitting income as 30% saving and the rest spending. How many dollars does she budget for spending?",
      answer: 56,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "First find 30% for saving.",
        "80 × 0.30 = $24 saved.",
        "Spending = 80 − 24 = $56."
      ],
      explanation: "Saving = 80 × 0.30 = $24. Spending = 80 − 24 = $56."
    },
    {
      id: "g7.fin.e.d1.q3",
      type: "multiple_choice",
      stem:
        "Sam has enough money and time for exactly ONE Saturday activity: a $25 movie outing or a free 4-hour shift that pays $48. He picks the movie. What's the opportunity cost?",
      choices: [
        "$25 — the price of the movie ticket.",
        "Nothing — the movie was fun.",
        "The $48 he could have earned working instead.",
        "$73 — the movie plus the shift."
      ],
      answerIndex: 2,
      explanation: "By choosing the movie, Sam gave up the $48 shift. That forgone $48 is the opportunity cost — not the ticket price he actually paid.",
      hintLadder: [
        "Opportunity cost is what you gave up, not what you spent.",
        "What was the other option worth?",
        "He gave up a $48 shift."
      ],
      misconceptionsTargeted: ["cost-equals-price"]
    },
    {
      id: "g7.fin.e.d1.q4",
      type: "multiple_choice",
      stem:
        "Choosing to SAVE $30 instead of spending it — what is the opportunity cost of saving?",
      choices: [
        "There is no opportunity cost; you still have the money.",
        "$30 in bank fees you'll owe later.",
        "Only the interest you might earn.",
        "Whatever you would have bought or done with that $30 right now."
      ],
      answerIndex: 3,
      explanation: "Even saving gives something up — the thing you'd have bought or done today with that money. That forgone use is the opportunity cost.",
      hintLadder: [
        "Every choice — even saving — gives something up.",
        "What could that $30 have done for you today?",
        "It's whatever you'd have bought or done with the $30."
      ],
      misconceptionsTargeted: ["saving-is-free"]
    },
    {
      id: "g7.fin.e.d1.q5",
      type: "short_answer",
      stem:
        "Describe a real choice you made recently where you gave something up. Name what you chose, what you gave up (the opportunity cost), and whether you'd choose the same again.",
      rubric: {
        level3: "A specific real choice, a clearly named opportunity cost (the best alternative given up), and a reasoned second look at the decision.",
        level2: "Names a choice and a trade-off but the opportunity cost or the reflection is vague.",
        level1: "Describes a choice without identifying what was given up."
      },
      exemplar:
        "I spent my $20 on a video game instead of saving toward new headphones. The opportunity cost was getting closer to the headphones I actually want more. I'd probably wait next time — the game was fun for a weekend, but the headphones would last.",
      hintLadder: [
        "Pick one real decision with a clear trade-off.",
        "Name the single best thing you gave up.",
        "Say whether it was worth it looking back."
      ]
    }
  ],
  reflectionPrompt: "Today you saw that every choice gives something up. What's a purchase you're considering — and what would its opportunity cost be?",
  misconceptionBank: [
    {
      id: "cost-equals-price",
      label: "Thinks cost equals the price paid",
      description: "Believes the cost of a choice is only the money spent, ignoring the value of the alternative given up.",
      coachMove: "Ask: what was the BEST other thing you could have done with that money or time? That's the real cost."
    },
    {
      id: "saving-is-free",
      label: "Thinks saving has no trade-off",
      description: "Assumes that because the money isn't spent, saving carries no opportunity cost.",
      coachMove: "Point out that saved money still can't be used for the fun or useful thing it might have bought today."
    }
  ]
};
