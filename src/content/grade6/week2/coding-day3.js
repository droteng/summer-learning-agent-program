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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Swap Riddle",
      prompt:
        "You have a glass of juice and a glass of milk. How can you swap them so the juice is in the milk's glass and the milk is in the juice's glass? (Coders solve this exact problem with variables every day!)",
      answer:
        "You need a third, empty glass as a temporary holder! Pour juice into the spare, milk into the juice glass, then the spare juice into the milk glass. In code, that spare glass is a temp variable.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pseudocode Calculator",
      challenge:
        "Invent a tiny 'program' (written as steps on paper or in any app) that takes some numbers from your real life and computes a useful result using variables — like a weekly allowance saver, a screen-time averager, or a game-score totaler.",
      steps: [
        "Decide what your program computes and what inputs (variables) it needs.",
        "Write each variable with a starting value, like allowance = 8.",
        "Write the arithmetic steps using +, -, *, / and parentheses where needed.",
        "Trace your program by hand with real numbers and write the final result."
      ],
      deliverable: "A written 'program' (pseudocode) with named variables and a traced result using real numbers.",
      choiceBoard: [
        "Write pseudocode on paper and trace it line by line.",
        "Build it for real in a kid coding tool (Scratch, Python, or a spreadsheet).",
        "Draw it as a flowchart showing each variable changing value."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Variable Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.code.w2.d3.arena1",
          type: "numeric",
          stem:
            "Trace this code carefully:\n  a = 3\n  b = a + 4\n  a = a * 2\n  result = a + b\nWhat is result?",
          answer: 13,
          tolerance: 0,
          hintLadder: [
            "Go line by line and write down each variable's value as you reach it.",
            "When b is set, a is still 3, so b = 3 + 4 = 7. Then a becomes 3 * 2 = 6.",
            "result = a + b = 6 + 7 = 13."
          ],
          explanation:
            "b is computed BEFORE a changes: b = 3 + 4 = 7. Then a = 3 * 2 = 6. So result = 6 + 7 = 13. The order of lines matters!"
        },
        {
          id: "g6.code.w2.d3.arena2",
          type: "multiple_choice",
          stem:
            "You want to swap two variables so x ends up with y's value and y ends up with x's value. Starting from x = 1, y = 2, which sequence works?",
          choices: [
            "x = y\ny = x",
            "temp = x\nx = y\ny = temp",
            "x = y\ny = temp",
            "x = x + y\ny = x + y"
          ],
          answerIndex: 1,
          explanation:
            "Option A fails: after x = y, x is 2 and the original 1 is lost, so y = x just sets y back to 2. You need a temp variable to remember the old value: temp = x, x = y, y = temp.",
          hintLadder: [
            "If you overwrite x first, where did its old value go?",
            "You need somewhere to remember the original value before overwriting.",
            "A temp variable holds the old x so you can give it to y afterward."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Variable Freeze Dance",
      prompt:
        "Make your body a variable! Start at value 'low' (crouch), then 'reassign' yourself to 'medium' (stand) and 'high' (arms up) as you call each value out loud. Shuffle through the values for one minute, freezing on each.",
      scienceTieIn:
        "Big whole-body movements pump oxygen-rich blood to your brain, which sharpens the focus you need for careful step-by-step tracing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you saw that the ORDER of code lines changes the answer. When in real life does doing steps in the wrong order give you a totally different result?",
      badge: { id: "variable-virtuoso", name: "Variable Virtuoso", emoji: "💾" },
      estimatedMinutes: 7
    }
  }
};
