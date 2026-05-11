// Grade 6 Coding — Week 2, Day 3.
// Topic: variables and arithmetic with real data.

export const grade6CodingWeek2Day3 = {
  id: "g6.code.w2.d3",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Variables and arithmetic",
  topicTag: "variables-arithmetic",
  estimatedMinutes: 16,
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-13"],
  hook: "Code lets you do real math on real data — fast. Today you store values in variables and compute summaries.",
  miniLesson: [
    "A variable is a name that holds a value. You can change the value and the name still points to it.",
    "Arithmetic operators: + add, - subtract, * multiply, / divide.",
    "An expression like (a + b) / 2 computes an average. Use parentheses to control the order."
  ],
  workedExample: {
    prompt:
      "Trace this code:\n  monday = 5\n  tuesday = 8\n  wednesday = 6\n  total = monday + tuesday + wednesday\n  average = total / 3\nWhat is `average`?",
    steps: [
      "monday=5, tuesday=8, wednesday=6.",
      "total = 5 + 8 + 6 = 19.",
      "average = 19 / 3 ≈ 6.333.",
      "Result: average is about 6.33."
    ],
    answer: "average ≈ 6.33"
  },
  items: [
    {
      id: "g6.code.w2.d3.q1",
      type: "numeric",
      stem: "Trace:\n  a = 4\n  b = 7\n  c = a * b\nWhat is c?",
      answer: 28,
      tolerance: 0,
      hintLadder: [
        "What does * mean?",
        "Multiply a by b.",
        "4 × 7 = 28."
      ],
      explanation: "c = a * b = 4 * 7 = 28."
    },
    {
      id: "g6.code.w2.d3.q2",
      type: "numeric",
      stem: "Trace:\n  x = 10\n  x = x + 5\n  x = x * 2\nWhat is x?",
      answer: 30,
      tolerance: 0,
      hintLadder: [
        "Update x step by step.",
        "After x = x + 5, what's x?",
        "Then multiply by 2."
      ],
      explanation: "x starts 10 → 15 → 30."
    },
    {
      id: "g6.code.w2.d3.q3",
      type: "multiple_choice",
      stem: "Which expression computes the average of three values a, b, c correctly?",
      choices: ["a + b + c / 3", "(a + b + c) / 3", "a / 3 + b + c", "3 / (a + b + c)"],
      answerIndex: 1,
      explanation: "Without parentheses, only c is divided by 3. Parentheses make the whole sum divide.",
      hintLadder: [
        "Order of operations: division happens before addition unless parentheses change it.",
        "You want to add first, then divide.",
        "(a + b + c) / 3 forces addition before division."
      ],
      misconceptionsTargeted: ["forgets-parentheses"]
    },
    {
      id: "g6.code.w2.d3.q4",
      type: "numeric",
      stem: "Compute:\n  scores = [80, 90, 70]\n  total = 80 + 90 + 70\n  count = 3\n  average = total / count\nWhat is average?",
      answer: 80,
      tolerance: 0,
      hintLadder: [
        "Total first.",
        "Divide by count.",
        "240 / 3 = 80."
      ],
      explanation: "(80 + 90 + 70) / 3 = 240 / 3 = 80."
    },
    {
      id: "g6.code.w2.d3.q5",
      type: "short_answer",
      stem: "In one sentence, explain what a variable is and why it's useful.",
      rubric: {
        level3: "Says a variable is a named value that can change, and explains why naming makes code readable or reusable.",
        level2: "Says a variable holds a value but doesn't explain why naming matters.",
        level1: "Vague or off-topic."
      },
      exemplar:
        "A variable is a named container for a value, useful because you can update it once and the rest of the code uses the new value automatically.",
      hintLadder: [
        "What does a variable hold?",
        "What's useful about giving it a name?",
        "Combine those into one sentence."
      ]
    }
  ],
  reflectionPrompt: "Today you computed with code. What's a real number from your week you'd put into a variable?",
  misconceptionBank: [
    {
      id: "forgets-parentheses",
      label: "Forgets parentheses for averages",
      description: "Writes a + b + c / 3 expecting it to compute an average, but only c gets divided.",
      coachMove: "Trace by hand: division happens first. Use parentheses when the sum must finish first."
    }
  ]
};
