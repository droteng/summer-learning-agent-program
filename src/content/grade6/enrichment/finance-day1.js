// Grade 6 Financial Literacy — Enrichment Day 1.
// Topic: needs vs wants.
//
// Enrichment missions live alongside the 8-week core curriculum and only
// activate when a parent opts in. They reuse the same schema (rubrics, hint
// ladders, misconceptions) so the runner, grader, and mastery model all
// work without modification.

export const grade6FinanceDay1 = {
  id: "g6.fin.e.d1",
  gradeLevel: 6,
  weekNumber: 9, // enrichment block — outside the core 8-week plan
  dayNumber: 1,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Needs vs wants",
  topicTag: "needs-wants",
  estimatedMinutes: 16,
  standardsRefs: ["JumpStart.Financial.Spending"],
  hook: "Money is finite. The first skill is telling what you NEED from what you WANT — both matter, but they aren't the same.",
  miniLesson: [
    "A NEED is something you'd struggle without — food, shelter, basic clothes, school supplies.",
    "A WANT is something you'd like to have but could survive without — a new game, fancier shoes, extra snacks.",
    "Both are normal. The skill is naming which is which so you spend on purpose."
  ],
  workedExample: {
    prompt:
      "Maya has $20. She's looking at: a school notebook ($4), a new phone case ($12), and lunch tomorrow ($6). What's a need, what's a want, what should she buy first?",
    steps: [
      "Notebook for school: need.",
      "Lunch: need.",
      "Phone case: want (her current case still works).",
      "Buy needs first ($4 + $6 = $10). $10 left — she can choose: save it, buy the phone case, or split."
    ],
    answer: "Needs first ($10). $10 remaining is a choice."
  },
  items: [
    {
      id: "g6.fin.e.d1.q1",
      type: "multiple_choice",
      stem: "Which is most clearly a NEED?",
      choices: [
        "A new game console.",
        "Drinking water at home.",
        "A brand-name backpack.",
        "Movie tickets."
      ],
      answerIndex: 1,
      explanation: "Water is essential for survival; the others are wants.",
      hintLadder: [
        "Could you survive without each option for a week?",
        "Which one would you struggle without?",
        "Drinking water."
      ]
    },
    {
      id: "g6.fin.e.d1.q2",
      type: "multiple_choice",
      stem: "True or false: a want is bad, only needs are okay to buy.",
      choices: ["False", "True"],
      answerIndex: 0,
      explanation: "Wants aren't bad. The skill is choosing them on purpose — after needs are covered.",
      hintLadder: [
        "Are there parts of life that are okay to enjoy?",
        "Sure — fun is normal.",
        "Wants aren't bad."
      ],
      misconceptionsTargeted: ["wants-are-bad"]
    },
    {
      id: "g6.fin.e.d1.q3",
      type: "multiple_choice",
      stem:
        "Liam has $15. Lunch tomorrow is $5 and he wants $10 for a movie. He spent $12 on the movie. What happened?",
      choices: [
        "He covered a want before a need, so he's short for lunch.",
        "Good plan — fun first.",
        "Nothing — both are wants.",
        "He needs more allowance."
      ],
      answerIndex: 0,
      explanation: "Spending want-first leaves the need unfunded. Need-first protects essentials.",
      hintLadder: [
        "Was lunch a need or want?",
        "Movie a need or want?",
        "Need came after the want — that's the issue."
      ]
    },
    {
      id: "g6.fin.e.d1.q4",
      type: "numeric",
      stem:
        "You have $25. Needs total $14 (lunch + bus). Wants total $30. How much could you spend on wants without going short?",
      answer: 11,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Subtract needs from your money.",
        "25 - 14 = ?",
        "$11 is left for wants."
      ],
      explanation: "$25 - $14 = $11 available for wants. The $30 want list won't fit; pick favorites."
    },
    {
      id: "g6.fin.e.d1.q5",
      type: "short_answer",
      stem:
        "Pick three things you spent or wanted money on this week. Label each NEED or WANT, and explain one tough call.",
      rubric: {
        level3: "Three specific items, correctly labeled, with a real explanation of where the line was hard.",
        level2: "Three items labeled but the tough call is vague.",
        level1: "Items listed without labels or reasoning."
      },
      exemplar:
        "1) School notebook — need. 2) Bus fare — need. 3) Vending machine snack — want (I'd already had lunch). Tough call: a friend offered to share their snack for $1, which felt social — but it was still a want.",
      hintLadder: [
        "List three real things from this week.",
        "Label each one.",
        "Find the one that wasn't obvious and explain."
      ]
    }
  ],
  reflectionPrompt: "Today you separated needs from wants. What's a recent want you'd happily skip if you knew the money went toward something better?",
  misconceptionBank: [
    {
      id: "wants-are-bad",
      label: "Treats all wants as bad",
      description: "Believes only needs are okay to spend on, leading to guilt and bad budgeting.",
      coachMove: "Wants are normal. The skill is intentional choice, not avoidance."
    }
  ]
};
