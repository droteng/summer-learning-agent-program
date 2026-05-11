// Grade 6 Coding — Week 4 (Code Your First Tool), Day 1.
// Topic: functions and parameters.

export const grade6CodingWeek4Day1 = {
  id: "g6.code.w4.d1",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Coding/Computer Science/AI",
  topic: "Functions and parameters",
  topicTag: "functions",
  estimatedMinutes: 18,
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-17"],
  hook: "A function is a small machine. Today you build one that takes inputs, does a job, and returns an answer.",
  miniLesson: [
    "A function packages reusable steps. You give it a name and it can be called many times.",
    "Parameters are inputs the function expects. Arguments are the actual values you pass in when calling.",
    "A function returns a value back to whoever called it. Without `return`, it gives nothing useful."
  ],
  workedExample: {
    prompt:
      "Trace this function:\n  def double(x):\n    return x * 2\n\n  result = double(7)\nWhat is `result`?",
    steps: [
      "Define the function: `double` takes parameter x and returns x*2.",
      "Call `double(7)`. The argument 7 binds to parameter x.",
      "Inside, return x * 2 → 14.",
      "`result` receives 14 from the function."
    ],
    answer: "result = 14"
  },
  items: [
    {
      id: "g6.code.w4.d1.q1",
      type: "numeric",
      stem:
        "def add(a, b):\n  return a + b\n\nresult = add(3, 9)\nWhat is result?",
      answer: 12,
      tolerance: 0,
      hintLadder: [
        "Match the arguments to the parameters: a=3, b=9.",
        "Compute the return expression.",
        "3 + 9 = 12."
      ],
      explanation: "add(3, 9) returns 3 + 9 = 12."
    },
    {
      id: "g6.code.w4.d1.q2",
      type: "multiple_choice",
      stem: "Which line correctly calls this function with a name and age?\n\n  def greet(name, age):\n    return name + ', age ' + str(age)",
      choices: [
        "greet 'Maya' 11",
        "greet('Maya', 11)",
        "greet[Maya, 11]",
        "greet: Maya, 11"
      ],
      answerIndex: 1,
      explanation: "Functions are called with parentheses, with arguments separated by commas.",
      hintLadder: [
        "Skip the options without parentheses.",
        "Arguments go inside the parentheses, separated by commas.",
        "greet('Maya', 11) matches the function signature."
      ],
      misconceptionsTargeted: ["wrong-call-syntax"]
    },
    {
      id: "g6.code.w4.d1.q3",
      type: "multiple_choice",
      stem: "What happens if a function has no `return` statement?",
      choices: [
        "It returns the last value computed.",
        "It returns None (no useful value).",
        "It throws an error.",
        "It returns the first argument."
      ],
      answerIndex: 1,
      explanation: "Without an explicit `return`, the function ends and gives back None — useful for side-effect functions (printing, saving) but not for math.",
      hintLadder: [
        "Think about what `return` does.",
        "If you don't say what to give back, what comes back?",
        "Nothing useful — None."
      ]
    },
    {
      id: "g6.code.w4.d1.q4",
      type: "numeric",
      stem:
        "def area(width, height):\n  return width * height\n\nresult = area(5, 8)\nWhat is result?",
      answer: 40,
      tolerance: 0,
      hintLadder: [
        "width=5, height=8.",
        "return width * height.",
        "5 × 8 = 40."
      ],
      explanation: "area(5, 8) returns 5 * 8 = 40."
    },
    {
      id: "g6.code.w4.d1.q5",
      type: "short_answer",
      stem:
        "Write pseudo-code for a function called `bigger` that takes two numbers and returns whichever is larger. Use plain English steps or code, just be specific.",
      rubric: {
        level3:
          "Function signature with two parameters, uses a conditional to compare, returns the larger value. Both branches handled.",
        level2: "Names the comparison but misses one branch or returns wrong type.",
        level1: "Vague answer or restates the prompt."
      },
      exemplar:
        "def bigger(a, b):\n  if a > b:\n    return a\n  else:\n    return b",
      hintLadder: [
        "Function takes two inputs — call them a and b.",
        "Compare them with > or <.",
        "Return whichever wins; don't forget the other branch."
      ]
    }
  ],
  reflectionPrompt: "Today you built reusable functions. What's a chore in your house that could be wrapped up as a function?",
  misconceptionBank: [
    {
      id: "wrong-call-syntax",
      label: "Calls function without parentheses",
      description: "Treats function calls like commands (greet Maya 11) instead of expressions (greet('Maya', 11)).",
      coachMove: "Functions are always called with parentheses, even when they take zero arguments: f()."
    }
  ]
};
