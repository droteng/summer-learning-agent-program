// Grade 5 Summer — Week 2, Day 3.
// Topic: variables and arithmetic (grade-5 depth: whole numbers, simple traces).
// Grade-5 counterpart of grade6/week2/coding-day3.js, pitched down.

export const summerG5CodingW2D3 = {
  id: "g5.summer.code.w2.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Variables and arithmetic",
  topicTag: "variables-arithmetic",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-09", "CSTA.1B-AP-11"],
  hook: "Code can do math on real numbers super fast. Today you store numbers in variables and add them up!",
  miniLesson: [
    "A variable is a name that holds a value, like a labeled box. You can change what is inside the box, and the label stays the same.",
    "Math symbols in code: + adds, - subtracts, * multiplies, / divides.",
    "To find an average, add the numbers, then divide by how many there are. Use parentheses ( ) to do the adding FIRST."
  ],
  workedExample: {
    prompt:
      "Read this code line by line:\n  monday = 4\n  tuesday = 6\n  total = monday + tuesday\nWhat is `total`?",
    steps: [
      "monday is 4, tuesday is 6.",
      "total = monday + tuesday.",
      "That means total = 4 + 6.",
      "Result: total = 10."
    ],
    answer: "total = 10"
  },
  items: [
    {
      id: "g5.summer.code.w2.d3.q1",
      type: "numeric",
      stem: "Read this code:\n  a = 5\n  b = 3\n  c = a * b\nWhat is c?",
      answer: 15,
      tolerance: 0,
      hintLadder: [
        "What does * mean in code?",
        "Multiply a by b.",
        "5 × 3 = 15."
      ],
      explanation: "c = a * b = 5 * 3 = 15."
    },
    {
      id: "g5.summer.code.w2.d3.q2",
      type: "numeric",
      stem: "Read this code:\n  x = 10\n  x = x + 4\n  x = x - 2\nWhat is x at the end?",
      answer: 12,
      tolerance: 0,
      hintLadder: [
        "Update x one line at a time.",
        "After x = x + 4, x is 14.",
        "Then x = x - 2 makes x = 12."
      ],
      explanation: "x starts at 10 → 14 → 12."
    },
    {
      id: "g5.summer.code.w2.d3.q3",
      type: "multiple_choice",
      stem: "Which line correctly finds the average of three numbers a, b, and c?",
      choices: ["a + b + c / 3", "a / 3 + b + c", "(a + b + c) / 3", "3 / (a + b + c)"],
      answerIndex: 2,
      explanation: "Without parentheses, only c gets divided by 3. Parentheses make the whole sum divide by 3.",
      hintLadder: [
        "To find an average, you add first, THEN divide.",
        "Parentheses ( ) tell the code to do the adding first.",
        "(a + b + c) / 3 adds everything, then divides."
      ],
      misconceptionsTargeted: ["forgets-parentheses"]
    },
    {
      id: "g5.summer.code.w2.d3.q4",
      type: "numeric",
      stem: "Read this code:\n  total = 6 + 9 + 6\n  count = 3\n  average = total / count\nWhat is average?",
      answer: 7,
      tolerance: 0,
      hintLadder: [
        "Find the total first.",
        "6 + 9 + 6 = 21.",
        "21 / 3 = 7."
      ],
      explanation: "total = 6 + 9 + 6 = 21, and 21 / 3 = 7."
    },
    {
      id: "g5.summer.code.w2.d3.q5",
      type: "short_answer",
      stem: "In one sentence, explain what a variable is and why it is useful.",
      rubric: {
        level3: "Says a variable is a named value that can change, and explains why the name makes code easier to read or reuse.",
        level2: "Says a variable holds a value but does not explain why the name matters.",
        level1: "Vague or off-topic."
      },
      exemplar:
        "A variable is a named box that holds a value, and it is useful because you can change the value in one place and the rest of the code uses the new number.",
      hintLadder: [
        "What does a variable hold?",
        "Why is it helpful to give it a name?",
        "Put both ideas into one sentence."
      ]
    }
  ],
  reflectionPrompt: "Today you did math with code. What is a real number from your week you would put into a variable?",
  misconceptionBank: [
    {
      id: "forgets-parentheses",
      label: "Forgets parentheses for averages",
      description: "Writes a + b + c / 3 hoping for an average, but only c gets divided.",
      coachMove: "Trace it by hand: division happens first. Use parentheses so the adding finishes first."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Swap Riddle",
      prompt:
        "You have a cup of lemonade and a cup of water. How can you swap them so the lemonade ends up in the water's cup and the water ends up in the lemonade's cup? (Coders solve this exact puzzle with variables!)",
      answer:
        "You need a third, empty cup as a helper! Pour lemonade into the empty cup, water into the lemonade cup, then the lemonade from the helper cup into the water cup. In code, that helper cup is called a temp (temporary) variable.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pseudocode Calculator",
      challenge:
        "Invent a tiny 'program' (written as steps on paper or in any app) that takes some real numbers from your life and computes something useful with variables — like an allowance saver, a screen-time adder, or a game-score totaler.",
      steps: [
        "Decide what your program figures out and what numbers (variables) it needs.",
        "Write each variable with a starting value, like allowance = 5.",
        "Write the math steps using +, -, *, / and parentheses where needed.",
        "Trace your program by hand with real numbers and write the final answer."
      ],
      deliverable: "A written 'program' (pseudocode) with named variables and a traced answer using real numbers.",
      choiceBoard: [
        "Write pseudocode on paper and trace it line by line.",
        "Build it for real in a kid coding tool like Scratch or a spreadsheet.",
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
          id: "g5.summer.code.w2.d3.arena1",
          type: "numeric",
          stem:
            "Read this code carefully, line by line:\n  a = 2\n  b = a + 3\n  a = a * 4\n  result = a + b\nWhat is result?",
          answer: 13,
          tolerance: 0,
          hintLadder: [
            "Go line by line and write down each variable's value as you reach it.",
            "When b is set, a is still 2, so b = 2 + 3 = 5. Then a becomes 2 * 4 = 8.",
            "result = a + b = 8 + 5 = 13."
          ],
          explanation:
            "b is set BEFORE a changes: b = 2 + 3 = 5. Then a = 2 * 4 = 8. So result = 8 + 5 = 13. The order of the lines matters!"
        },
        {
          id: "g5.summer.code.w2.d3.arena2",
          type: "multiple_choice",
          stem:
            "You want to swap two variables so x ends up with y's value and y ends up with x's value. Starting from x = 1, y = 2, which set of steps works?",
          choices: [
            "temp = x\nx = y\ny = temp",
            "x = y\ny = x",
            "x = y\ny = temp",
            "x = x + y\ny = x + y"
          ],
          answerIndex: 0,
          explanation:
            "The first option fails: after x = y, x is 2 and the old 1 is gone, so y = x just makes y equal 2 again. You need a temp variable to remember the old value: temp = x, x = y, y = temp.",
          hintLadder: [
            "If you change x first, where did its old value go?",
            "You need a place to remember the original value before changing it.",
            "A temp variable holds the old x so you can give it to y afterward."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Variable Freeze Dance",
      prompt:
        "Make your body a variable! Start at value 'low' (crouch), then 'change' yourself to 'medium' (stand) and 'high' (arms up), calling out each value as you go. Shuffle through the values for one minute, freezing on each.",
      scienceTieIn:
        "Big whole-body movements pump oxygen-rich blood to your brain, which sharpens the focus you need for careful step-by-step tracing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you saw that the ORDER of code lines changes the answer. When in real life does doing steps in the wrong order give you a totally different result?",
      badge: { id: "g5-summer-variable-virtuoso", name: "Variable Virtuoso", emoji: "💾" },
      estimatedMinutes: 7
    }
  }
};
