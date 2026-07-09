// Grade 5 Financial Literacy — Enrichment Day 4.
// Topic: what a bank does (keeps money safe; save and take out).

export const grade5FinanceDay4 = {
  id: "g5.fin.e.d4",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "What a bank does",
  topicTag: "what-a-bank-does",
  estimatedMinutes: 15,
  standardsRefs: ["JumpStart.Financial.Saving"],
  hook: "A bank is like a super-safe piggy bank that lives outside your house. Let's find out what it really does.",
  miniLesson: [
    "A bank keeps your money safe so it won't get lost or taken.",
    "Putting money IN is called a deposit. Taking money OUT is called a withdrawal.",
    "Your money stays yours — you can take it out when you need it. The bank just holds it for you."
  ],
  workedExample: {
    prompt:
      "Grandma gives Kai $30 as a gift. He puts $20 in the bank and keeps $10 in his pocket. Later he takes $5 out of the bank for a book. How much is in the bank now?",
    steps: [
      "Kai deposits $20 into the bank.",
      "He keeps $10 in his pocket (that's not in the bank).",
      "He withdraws $5 from the bank: $20 - $5 = $15.",
      "So the bank now holds $15 for him."
    ],
    answer: "$15 in the bank."
  },
  items: [
    {
      id: "g5.fin.e.d4.q1",
      type: "multiple_choice",
      stem: "What is the main job of a bank?",
      choices: [
        "To keep your money safe and let you take it out when you need it.",
        "To spend your money for you.",
        "To keep your money forever so you can never use it.",
        "To give free toys to kids."
      ],
      answerIndex: 0,
      explanation: "A bank keeps your money safe and lets you take it back out whenever you need it.",
      hintLadder: [
        "Think about safety and being able to get your money back.",
        "A bank holds your money but you can still use it.",
        "It keeps your money safe and lets you take it out when you need it."
      ],
      misconceptionsTargeted: ["bank-keeps-your-money"]
    },
    {
      id: "g5.fin.e.d4.q2",
      type: "multiple_choice",
      stem: "Putting money INTO the bank is called a...",
      choices: [
        "withdrawal.",
        "loan.",
        "deposit.",
        "gift."
      ],
      answerIndex: 2,
      explanation: "Putting money in is a deposit. Taking money out is a withdrawal.",
      hintLadder: [
        "One word means 'money in', the other means 'money out'.",
        "The 'money in' word starts with the letter D.",
        "It's called a deposit."
      ]
    },
    {
      id: "g5.fin.e.d4.q3",
      type: "multiple_choice",
      stem:
        "Rosa has $18 in the bank. She takes out $6 to buy a gift. How much is left in the bank?",
      choices: [
        "$24",
        "$12",
        "$6",
        "$18"
      ],
      answerIndex: 1,
      explanation: "Taking out $6 is a withdrawal: $18 - $6 = $12 left in the bank.",
      hintLadder: [
        "Taking money out means subtracting.",
        "$18 - $6 = ?",
        "$12 is left in the bank."
      ]
    },
    {
      id: "g5.fin.e.d4.q4",
      type: "numeric",
      stem:
        "Theo puts $10 in the bank on Monday and $5 more on Friday. How much has he deposited in all?",
      answer: 15,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Add both deposits together.",
        "$10 + $5 = ?",
        "$15 deposited in all."
      ],
      explanation: "$10 + $5 = $15 deposited into the bank."
    },
    {
      id: "g5.fin.e.d4.q5",
      type: "short_answer",
      stem:
        "In your own words, explain the difference between a deposit and a withdrawal. Give one example of each.",
      rubric: {
        level3: "Clearly explains deposit as money in and withdrawal as money out, with a correct example of each.",
        level2: "Gets the two ideas mostly right but one example is missing or unclear.",
        level1: "Mixes up the two words or gives no examples."
      },
      exemplar:
        "A deposit is putting money into the bank — like when I put my $10 birthday money in. A withdrawal is taking money out — like when I take out $3 to buy a snack.",
      hintLadder: [
        "One word is for money going in, one is for money coming out.",
        "Deposit = in, withdrawal = out.",
        "Explain each and give a quick real example of putting money in and taking it out."
      ]
    }
  ],
  reflectionPrompt: "If you had money to keep safe, what would you like about using a bank instead of your pocket?",
  misconceptionBank: [
    {
      id: "bank-keeps-your-money",
      label: "Thinks the bank takes or keeps your money for good",
      description: "Worries that once money goes in the bank, it's gone or belongs to the bank.",
      coachMove: "Your money stays yours. The bank just holds it safely, and you can withdraw it whenever you need it."
    }
  ]
};
