// Grade 5 Financial Literacy — Enrichment Day 2.
// Topic: saving a little each week (piggy-bank goals).

export const grade5FinanceDay2 = {
  id: "g5.fin.e.d2",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Saving a little each week",
  topicTag: "saving-each-week",
  estimatedMinutes: 15,
  standardsRefs: ["JumpStart.Financial.Saving", "JumpStart.Financial.Spending"],
  hook: "You don't need a lot of money to save. A little bit each week adds up faster than you'd think!",
  miniLesson: [
    "A savings goal is something you're saving up to buy, like a $12 kite.",
    "If you save the same amount each week, you can count how many weeks it takes to reach your goal.",
    "Putting money in a piggy bank (or jar) keeps it in one place so you don't spend it by accident."
  ],
  workedExample: {
    prompt:
      "Ava wants a $15 art set. She saves $3 every week. How many weeks until she can buy it?",
    steps: [
      "Week 1: $3. Week 2: $6. Week 3: $9.",
      "Week 4: $12. Week 5: $15.",
      "Or just divide: $15 ÷ $3 = 5 weeks."
    ],
    answer: "5 weeks."
  },
  items: [
    {
      id: "g5.fin.e.d2.q1",
      type: "multiple_choice",
      stem: "What is a savings goal?",
      choices: [
        "A rule that says you can never spend money.",
        "A prize the bank gives you.",
        "Something you're saving up to buy, a little at a time.",
        "Money you owe to a friend."
      ],
      answerIndex: 2,
      explanation: "A savings goal is a thing you want, that you save toward bit by bit until you have enough.",
      hintLadder: [
        "It has to do with saving up for something you want.",
        "It's the thing you're saving money for.",
        "Something you're saving up to buy, a little at a time."
      ]
    },
    {
      id: "g5.fin.e.d2.q2",
      type: "multiple_choice",
      stem:
        "Leo saves $2 each week. He already has $4 saved. How much will he have after 2 more weeks?",
      choices: [
        "$8",
        "$6",
        "$10",
        "$4"
      ],
      answerIndex: 0,
      explanation: "$2 for 2 weeks is $4 more. $4 (already saved) + $4 = $8.",
      hintLadder: [
        "First find how much 2 weeks of saving adds: $2 + $2.",
        "That's $4 more. Now add the $4 he already had.",
        "$4 + $4 = $8."
      ]
    },
    {
      id: "g5.fin.e.d2.q3",
      type: "numeric",
      stem:
        "Nia wants a $20 backpack. She saves $4 every week. How many weeks will it take to reach $20?",
      answer: 5,
      tolerance: 0,
      unit: "weeks",
      hintLadder: [
        "Divide the goal by how much she saves each week.",
        "$20 ÷ $4 = ?",
        "It takes 5 weeks."
      ],
      explanation: "$20 ÷ $4 = 5 weeks of saving $4 each week."
    },
    {
      id: "g5.fin.e.d2.q4",
      type: "multiple_choice",
      stem: "Why does keeping your savings in a piggy bank or jar help?",
      choices: [
        "It makes the money grow into more money by magic.",
        "It's the only place money is allowed.",
        "The bank pays you to use a jar.",
        "It keeps the money in one spot so you don't spend it by accident."
      ],
      answerIndex: 3,
      explanation: "A piggy bank keeps your savings together and out of the way, so it's easier not to spend it.",
      hintLadder: [
        "Does a jar make more money appear? No.",
        "Think about why keeping money together is helpful.",
        "It keeps the money in one spot so you don't spend it by accident."
      ],
      misconceptionsTargeted: ["piggy-bank-grows-money"]
    },
    {
      id: "g5.fin.e.d2.q5",
      type: "short_answer",
      stem:
        "Pick something you'd like to save up for. Guess its price, and pick how much you could save each week. About how many weeks would it take?",
      rubric: {
        level3: "Names a real goal with a price, a weekly amount, and a correct (or close) number of weeks.",
        level2: "Has a goal and a weekly amount but the number of weeks is missing or wrong.",
        level1: "Just names a goal with no numbers."
      },
      exemplar:
        "I want a $10 board game. If I save $2 each week, it takes about 5 weeks because $10 ÷ $2 = 5.",
      hintLadder: [
        "Think of something you want and guess its price.",
        "Decide how much you could save each week.",
        "Divide the price by the weekly amount to get the weeks."
      ]
    }
  ],
  reflectionPrompt: "How did it feel to see that small weekly savings add up to a real goal?",
  misconceptionBank: [
    {
      id: "piggy-bank-grows-money",
      label: "Thinks a piggy bank makes money grow",
      description: "Believes putting money in a jar or piggy bank multiplies it on its own.",
      coachMove: "A piggy bank just holds money safely — it doesn't add any. The growing comes from you adding a little each week."
    }
  ]
};
