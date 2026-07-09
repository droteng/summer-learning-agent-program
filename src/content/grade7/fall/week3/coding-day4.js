// Grade 7 Coding/CS/AI — Fall Expedition, Week 3 (The Harvest of Numbers),
// Day 4. Topic: build a harvest budget calculator.
// Grade-7 lift: functions with parameters, conditional logic (if/else),
// and a data structure (list of costs) instead of loose variables.

export const fallG7CodingW3D4 = {
  id: "g7.fall.code.w3.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a harvest budget calculator",
  topicTag: "variables-formulas",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-14"],
  hook: "Real apps don't just store single numbers — they package logic into functions, make decisions with conditionals, and organize many values in lists. Today you level up the harvest budget into a real calculator with a profit() function and a costs list.",
  miniLesson: [
    "A function is reusable logic with parameters (inputs) that returns a value: profit(income, costs) returns income − costs.",
    "A list (array) holds many values in order — costs = [120, 80, 22] — and you can sum a list to get one total.",
    "A conditional runs different code depending on a test: IF profit >= 0 return 'Profit' ELSE return 'Loss'."
  ],
  workedExample: {
    prompt: "income = 500 and costs = [120, 80, 40]. Write profit = income − sum(costs) and compute it, then say what the label 'Profit' or 'Loss' would be.",
    steps: [
      "Sum the costs list: 120 + 80 + 40 = 240.",
      "profit = income − sum(costs) = 500 − 240.",
      "profit = 260.",
      "Since 260 >= 0, the conditional returns the label 'Profit'."
    ],
    answer: "profit = 500 − 240 = 260; label = 'Profit'."
  },
  items: [
    {
      id: "g7.fall.code.w3.d4.q1",
      type: "numeric",
      stem: "costs = [90, 45, 25]. What does sum(costs) return?",
      answer: 160,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Summing a list adds every element together.",
        "90 + 45 + 25.",
        "= 160."
      ],
      explanation: "sum([90, 45, 25]) = 90 + 45 + 25 = 160."
    },
    {
      id: "g7.fall.code.w3.d4.q2",
      type: "numeric",
      stem: "Given profit(income, costs) returns income − sum(costs). What does profit(500, [120, 80, 40]) return?",
      answer: 260,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "First evaluate sum(costs) = 120 + 80 + 40.",
        "sum(costs) = 240; then income − 240.",
        "500 − 240 = 260."
      ],
      explanation: "sum([120,80,40]) = 240; profit = 500 − 240 = 260."
    },
    {
      id: "g7.fall.code.w3.d4.q3",
      type: "numeric",
      stem: "income comes from a function: income(cratesSold, price) returns cratesSold × price. What does income(24, 12.5) return?",
      answer: 300,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "The function multiplies its two parameters.",
        "24 × 12.5.",
        "= 300."
      ],
      explanation: "income(24, 12.5) = 24 × 12.5 = 300."
    },
    {
      id: "g7.fall.code.w3.d4.q4",
      type: "multiple_choice",
      stem: "A function status(profit) runs: IF profit >= 0 return 'Profit' ELSE return 'Loss'. What does status(-25) return?",
      choices: [
        "'Profit' — because -25 is a number",
        "'Profit' — because the ELSE never runs",
        "'Loss' — because -25 is less than 0",
        "It returns nothing"
      ],
      answerIndex: 2,
      explanation: "The test profit >= 0 is false for -25, so the ELSE branch runs and returns 'Loss'.",
      hintLadder: [
        "Check the condition: is -25 >= 0?",
        "-25 is less than 0, so the IF is false.",
        "When the IF is false, the ELSE branch runs → 'Loss'."
      ],
      misconceptionsTargeted: ["condition-always-true"]
    },
    {
      id: "g7.fall.code.w3.d4.q5",
      type: "short_answer",
      stem: "Plan a budget calculator using a FUNCTION and a LIST. Describe the profit function's parameters, how it uses a costs list, and the conditional that labels the result.",
      rubric: {
        level3: "Defines a profit function with sensible parameters (e.g., income and a costs list), uses sum(costs) inside it, AND includes a correct conditional (IF profit >= 0 → 'Profit' ELSE 'Loss').",
        level2: "Includes a function and a list OR a conditional, but the plan is incomplete or slightly off.",
        level1: "Uses only loose variables with no function, list, or conditional."
      },
      exemplar: "Define profit(income, costs) that returns income − sum(costs), where costs is a list like [seedCost, toolCost, laborCost]. Then a status function: IF profit >= 0 return 'Profit' ELSE return 'Loss'. Call profit(cratesSold × price, costsList) and pass the result into status().",
      hintLadder: [
        "What inputs (parameters) does the profit function need?",
        "How does a list let you hold several costs and sum them?",
        "Write the conditional: IF profit >= 0 → 'Profit' ELSE 'Loss'."
      ]
    }
  ],
  reflectionPrompt: "Functions and conditionals let one program handle many situations. What real decision (a discount, a warning, a game rule) could you model with an IF/ELSE?",
  misconceptionBank: [
    {
      id: "condition-always-true",
      label: "Thinks the IF branch always runs",
      description: "Believes the code after IF runs no matter what, ignoring whether the test is true or false.",
      coachMove: "Trace the condition with the actual value first; only if the test is TRUE does the IF run — otherwise the ELSE does."
    },
    {
      id: "variable-is-fixed",
      label: "Thinks a variable or parameter can't change",
      description: "Believes once income = 500 it's permanent and a function can't be called again with new inputs.",
      coachMove: "Show that a function can be called many times with different arguments; each call recomputes the return value."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "profit(income, costs) returns income − sum(costs). First call profit(400, [150, 50]). Then call it again as profit(600, [150, 50]). Trace both by hand before you peek — what are the two results?",
      answer:
        "sum([150,50]) = 200 both times. First call: 400 − 200 = 200. Second call: 600 − 200 = 400. Same function, new inputs → new result each time.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Own Budget Calculator",
      challenge:
        "Design a budget calculator for a fall project — a pumpkin stand, a bake sale, a leaf-raking business — using a profit FUNCTION, a costs LIST, and a conditional that labels 'Profit' or 'Loss'.",
      steps: [
        "Name your project and list the costs as a list, e.g., costs = [seed, tools, labor].",
        "Write the income function (usually cratesSold × price) and the profit function (income − sum(costs)).",
        "Add a conditional: IF profit >= 0 return 'Profit' ELSE return 'Loss'.",
        "Plug in sample numbers, call your functions, and trace the output by hand."
      ],
      deliverable: "A one-page calculator plan: a costs list, an income and a profit function, a conditional, and a worked example.",
      choiceBoard: [
        "Write the functions, list, and conditional as pseudocode.",
        "Draw it as a flowchart: inputs → functions → conditional → 'Profit'/'Loss'.",
        "Build it for real in a spreadsheet or code editor and screenshot the result for two different inputs."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Calculator Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.code.w3.d4.arena1",
          type: "numeric",
          stem: "income(cratesSold, price) returns cratesSold × price, and profit(income, costs) returns income − sum(costs). What does profit(income(18, 9.5), [50, 22, 18]) return?",
          answer: 81,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Evaluate the inner call first: income(18, 9.5) = 18 × 9.5 = 171.",
            "Sum the costs list: 50 + 22 + 18 = 90.",
            "profit = 171 − 90 = 81."
          ],
          explanation: "income = 18 × 9.5 = 171; sum(costs) = 90; profit = 171 − 90 = 81."
        },
        {
          id: "g7.fall.code.w3.d4.arena2",
          type: "multiple_choice",
          stem: "status(profit) runs: IF profit >= 0 return 'Profit' ELSE return 'Loss'. With income = 120 and costs = [70, 75], what does status(profit) return?",
          choices: [
            "'Profit' — profit is positive",
            "'Loss' — profit is -25, which is below 0",
            "'Profit' — because income is 120",
            "The function errors"
          ],
          answerIndex: 1,
          explanation: "sum(costs) = 145; profit = 120 − 145 = -25; since -25 >= 0 is false, the ELSE runs → 'Loss'.",
          hintLadder: [
            "Sum the costs: 70 + 75 = 145.",
            "profit = 120 − 145 = -25.",
            "Is -25 >= 0? No, so status returns 'Loss'."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Reset & Recompute",
      prompt:
        "Stand, roll your shoulders back 5 times, shake out your hands like you're clearing a screen, then take 3 slow breaths and grab some water. You're 'recomputing' a fresh, focused you!",
      scienceTieIn:
        "Staying hydrated and moving helps your blood carry oxygen to your brain, so it can process new information more clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions run the same logic on any inputs, and conditionals make decisions. What in your life (an allowance rule, a game score, a discount) could you model with a function plus an IF/ELSE?",
      badge: { id: "g7-fall-harvest-function-forger", name: "Harvest Function Forger", emoji: "🧺" },
      estimatedMinutes: 7
    }
  }
};
