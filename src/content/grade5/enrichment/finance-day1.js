// Grade 5 Financial Literacy — Enrichment Day 1.
// Topic: needs vs wants.
//
// Enrichment missions live alongside the core curriculum and only activate
// when a parent opts in. They reuse the same schema (rubrics, hint ladders,
// misconceptions) so the runner, grader, and mastery model all work as-is.

export const grade5FinanceDay1 = {
  id: "g5.fin.e.d1",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Needs vs wants",
  topicTag: "needs-wants",
  estimatedMinutes: 15,
  standardsRefs: ["JumpStart.Financial.Spending"],
  hook: "Money runs out, so we can't buy everything. The first money skill is telling a NEED from a WANT.",
  miniLesson: [
    "A NEED is something you really have to have, like food, water, or a coat when it's cold.",
    "A WANT is something that would be fun to have but you'd be okay without, like candy or a new toy.",
    "Wants are not bad at all! We just take care of needs first, then choose wants on purpose."
  ],
  workedExample: {
    prompt:
      "Sam has $10. He sees: an apple for lunch ($2), a comic book ($5), and a warm hat for the cold morning ($3). What is a need, what is a want, and what should he buy first?",
    steps: [
      "The apple for lunch is a NEED (he has to eat).",
      "The warm hat is a NEED (it's cold outside).",
      "The comic book is a WANT (fun, but he'd be okay without it).",
      "Buy needs first: $2 + $3 = $5. That leaves $5 — he can save it or buy the comic."
    ],
    answer: "Needs first ($5 spent). The last $5 is Sam's choice."
  },
  items: [
    {
      id: "g5.fin.e.d1.q1",
      type: "multiple_choice",
      stem: "Which of these is a WANT?",
      choices: [
        "A drink of water when you're thirsty.",
        "A shiny new video game.",
        "A coat on a freezing day.",
        "Dinner tonight."
      ],
      answerIndex: 1,
      explanation: "The video game is fun but you'd be okay without it, so it's a want. The others are needs.",
      hintLadder: [
        "Which one could you skip and still be totally fine?",
        "Which one is just for fun, not for staying safe or healthy?",
        "The shiny new video game is the want."
      ]
    },
    {
      id: "g5.fin.e.d1.q2",
      type: "multiple_choice",
      stem: "Your friend says, \"Wanting fun things means you're bad with money.\" Is that right?",
      choices: [
        "Yes — you should only ever buy needs.",
        "Yes — wanting things is always a mistake.",
        "It depends on how much the item costs.",
        "No — wanting fun things is normal; just cover needs first."
      ],
      answerIndex: 3,
      explanation: "Wanting fun things is normal! Being good with money means taking care of needs first, then choosing wants on purpose.",
      hintLadder: [
        "Is it okay to enjoy fun things sometimes?",
        "Yes — everyone has wants, and that's totally fine.",
        "The right answer is: wanting fun things is normal; just cover needs first."
      ],
      misconceptionsTargeted: ["wants-are-bad"]
    },
    {
      id: "g5.fin.e.d1.q3",
      type: "multiple_choice",
      stem:
        "Mia has $8. Her school lunch tomorrow costs $4, and she really wants a $6 sticker pack. She buys the stickers first. What happens?",
      choices: [
        "She won't have enough left for lunch.",
        "Nothing — both cost the same.",
        "She saved money.",
        "She gets her lunch for free."
      ],
      answerIndex: 0,
      explanation: "Buying the want ($6) first leaves only $2, which isn't enough for the $4 lunch. Needs come first.",
      hintLadder: [
        "How much money is left after $8 - $6?",
        "Is $2 enough for a $4 lunch?",
        "No — she won't have enough for lunch."
      ]
    },
    {
      id: "g5.fin.e.d1.q4",
      type: "numeric",
      stem:
        "You have $12. Your needs (lunch + bus) cost $7 in all. How much money is left for wants?",
      answer: 5,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Take the needs away from your money.",
        "$12 - $7 = ?",
        "$5 is left for wants."
      ],
      explanation: "$12 - $7 = $5. That $5 is what's left over for wants after needs are covered."
    },
    {
      id: "g5.fin.e.d1.q5",
      type: "short_answer",
      stem:
        "Name two things you spent or wanted money on lately. Label each one NEED or WANT, and tell why.",
      rubric: {
        level3: "Two real items, each correctly labeled need or want, with a clear reason for each.",
        level2: "Two items labeled, but at least one reason is missing or unclear.",
        level1: "Items listed with no labels or no reasons."
      },
      exemplar:
        "1) My lunch — NEED, because I have to eat during the day. 2) A pack of trading cards — WANT, because they're fun but I'd be fine without them.",
      hintLadder: [
        "Think of two real things from this week.",
        "Ask for each: could I be okay without it?",
        "Label each need or want and give a quick reason."
      ]
    }
  ],
  reflectionPrompt: "Today you told needs apart from wants. What is one want you'd happily skip to save the money for something bigger?",
  misconceptionBank: [
    {
      id: "wants-are-bad",
      label: "Thinks all wants are bad",
      description: "Believes only needs are okay to spend on, which can lead to guilt about normal fun spending.",
      coachMove: "Wants are normal and okay. The skill is choosing them on purpose after needs are covered."
    }
  ]
};
