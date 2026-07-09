// Grade 7 Math — Summer Voyage, Week 4 ("Code Your First Tool"), Day 4.
// Topic: algebraic expressions & variables (write/evaluate; substitute values).

export const summerG7MathW4D4 = {
  id: "g7.summer.math.w4.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 4,
  subject: "Math",
  topic: "Algebraic expressions & variables (write, evaluate, substitute)",
  topicTag: "algebraic-expressions",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.EE.A.2", "CCSS.7.EE.B.4"],
  hook: "The rule inside your tool — score times 10, price plus a fee — is really an algebraic expression. A variable is a letter that stands in for any number, and substituting a value is exactly what a computer does when it runs your code. Today you write and evaluate expressions like a programmer.",
  miniLesson: [
    "A variable is a letter that represents a number that can change, like x or n. An expression combines variables and numbers with operations, like 3x + 2.",
    "3x means 3 times x. To EVALUATE an expression, substitute a value for the variable and follow the order of operations (multiply/divide before add/subtract).",
    "You can WRITE an expression from words: 'five more than twice a number n' becomes 2n + 5."
  ],
  workedExample: {
    prompt: "Evaluate the expression 3x + 2 when x = 4.",
    steps: [
      "Substitute the value for the variable: 3(4) + 2.",
      "Multiply first (order of operations): 3 × 4 = 12.",
      "Then add: 12 + 2 = 14.",
      "So 3x + 2 equals 14 when x = 4."
    ],
    answer: "14"
  },
  items: [
    {
      id: "g7.summer.math.w4.d4.q1",
      type: "numeric",
      stem: "Evaluate 5x - 3 when x = 6.",
      answer: 27,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Substitute: 5(6) - 3.",
        "Multiply first: 5 × 6 = 30.",
        "Then subtract: 30 - 3 = 27."
      ],
      explanation: "5(6) - 3 = 30 - 3 = 27."
    },
    {
      id: "g7.summer.math.w4.d4.q2",
      type: "numeric",
      stem: "A quiz-scoring rule is the expression 10q + 5, where q is the number of correct answers. Evaluate it for q = 8.",
      answer: 85,
      tolerance: 0,
      unit: "points",
      hintLadder: [
        "Substitute q = 8: 10(8) + 5.",
        "Multiply first: 10 × 8 = 80.",
        "Then add: 80 + 5 = 85."
      ],
      explanation: "10(8) + 5 = 80 + 5 = 85 points.",
      misconceptionsTargeted: ["adds-before-multiplying"]
    },
    {
      id: "g7.summer.math.w4.d4.q3",
      type: "numeric",
      stem: "Evaluate the expression 2a + 3b when a = 5 and b = 4.",
      answer: 22,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Substitute both: 2(5) + 3(4).",
        "Multiply each term: 2 × 5 = 10 and 3 × 4 = 12.",
        "Add the results: 10 + 12 = 22."
      ],
      explanation: "2(5) + 3(4) = 10 + 12 = 22."
    },
    {
      id: "g7.summer.math.w4.d4.q4",
      type: "multiple_choice",
      stem: "Which expression means 'four less than twice a number n'?",
      choices: [
        "2n - 4",
        "4 - 2n",
        "2(n - 4)",
        "4n - 2"
      ],
      answerIndex: 0,
      explanation: "'Twice a number' is 2n, and 'four less than' that means subtract 4 from it: 2n - 4. Order matters — 4 - 2n would be 'four minus twice the number.'",
      hintLadder: [
        "'Twice a number n' translates to 2n.",
        "'Four less than' something means you subtract 4 FROM it.",
        "So it's 2n - 4, not 4 - 2n."
      ],
      misconceptionsTargeted: ["less-than-order-flip"]
    },
    {
      id: "g7.summer.math.w4.d4.q5",
      type: "short_answer",
      stem: "Your calculator tool charges a $3 flat fee plus $2 for each item. Write an algebraic expression for the total cost using a variable for the number of items, then evaluate it for 5 items.",
      rubric: {
        level3: "Writes a correct expression such as 2n + 3 (defining n as the number of items) AND evaluates it correctly for n = 5 to get 13.",
        level2: "Writes a correct expression but evaluates it incorrectly, or evaluates correctly but the expression is slightly off.",
        level1: "Expression does not match the situation and/or evaluation is wrong."
      },
      exemplar: "Let n = number of items. Total cost = 2n + 3. For 5 items: 2(5) + 3 = 10 + 3 = 13 dollars.",
      hintLadder: [
        "Which quantity changes? Use a variable for it.",
        "The per-item cost multiplies the variable; the flat fee is added on.",
        "Write 2n + 3, then substitute n = 5."
      ]
    }
  ],
  reflectionPrompt: "The rule inside a tool is an expression with a variable. What expression describes a rule in your own tool, and what does its variable stand for?",
  misconceptionBank: [
    {
      id: "adds-before-multiplying",
      label: "Ignores order of operations",
      description: "Adds before multiplying, e.g., treating 10q + 5 at q = 8 as (10 + 5) × 8 or 10 × (8 + 5).",
      coachMove: "Circle the multiplication first: in 10q + 5, the 10q is one term. Multiply, THEN add."
    },
    {
      id: "less-than-order-flip",
      label: "Flips the order on 'less than'",
      description: "Writes 'four less than 2n' as 4 - 2n instead of 2n - 4.",
      coachMove: "'Less than' reverses the spoken order: 'four less than X' means X - 4."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Expression Pays More?",
      prompt:
        "Two summer job offers: Job A pays the expression 8h + 10 and Job B pays 12h, where h is hours worked. For a 3-hour shift, evaluate BOTH and decide which you'd rather take.",
      answer:
        "Job A: 8(3) + 10 = 24 + 10 = 34. Job B: 12(3) = 36. For a 3-hour shift, Job B pays more ($36 vs $34).",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Cost Formula",
      challenge:
        "Invent a summer service (dog walking, lemonade stand, car wash) and write an algebraic expression for what it charges — a flat part plus a per-unit part with a variable. Then make a small table evaluating it for three different values.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Choose a service and decide the flat fee and the per-unit price.",
        "Define your variable (e.g., n = number of dogs) and write the expression.",
        "Make a table with three values of the variable.",
        "Evaluate the expression for each value and record the totals."
      ],
      deliverable: "A pricing expression with a defined variable plus a table evaluated for three values.",
      choiceBoard: [
        "Write the expression and a three-row evaluation table.",
        "Design a price-list poster that shows the formula and three example totals.",
        "Write a word problem for a friend and provide the expression and answer key."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Expression Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w4.d4.arena1",
          type: "numeric",
          stem: "Evaluate the expression 4(x + 2) - 5 when x = 3.",
          answer: 15,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Do the parentheses first: x + 2 = 3 + 2 = 5.",
            "Multiply: 4 × 5 = 20.",
            "Then subtract: 20 - 5 = 15."
          ],
          explanation: "4(3 + 2) - 5 = 4(5) - 5 = 20 - 5 = 15. Parentheses first, then multiply, then subtract."
        },
        {
          id: "g7.summer.math.w4.d4.arena2",
          type: "numeric",
          stem: "A game's damage expression is 3d + 2e, where d = 4 and e = 6. Evaluate it.",
          answer: 24,
          tolerance: 0,
          unit: "damage",
          hintLadder: [
            "Substitute both: 3(4) + 2(6).",
            "Multiply each term: 3 × 4 = 12 and 2 × 6 = 12.",
            "Add: 12 + 12 = 24."
          ],
          explanation: "3(4) + 2(6) = 12 + 12 = 24 damage."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Substitute & Stretch",
      prompt:
        "Assign x = the number of times you stretch up tall. Pick a value for x (say 4), then physically do the expression 2x: reach up 2 times for every count of x. Do two rounds with different x values.",
      scienceTieIn: "Turning an abstract variable into real repetitions engages both your body and your number sense, and the movement break resets your attention for the next task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A single expression like 2n + 3 can describe a rule that works for any number. What's one real-life rule you could capture in an expression with a variable?",
      badge: { id: "g7-expression-engineer", name: "Expression Engineer", emoji: "🧮" },
      estimatedMinutes: 7
    }
  }
};
