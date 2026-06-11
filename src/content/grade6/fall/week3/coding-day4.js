// Grade 6 Coding/CS/AI — Fall Expedition, Week 3 (The Harvest of Numbers),
// Day 4. Topic: build a harvest budget calculator — variables and formulas.

export const fallG6CodingW3D4 = {
  id: "g6.fall.code.w3.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a harvest budget calculator",
  topicTag: "variables-formulas",
  estimatedMinutes: 18,
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-16"],
  hook: "Spreadsheets and apps run on variables and formulas. Today you build the logic of a harvest budget: track money in, money out, and profit.",
  miniLesson: [
    "A variable is a named box that stores a value, like income = 500.",
    "A formula computes a new value from variables: profit = income − costs.",
    "Change one input and the formula updates the result automatically — that's the power of a calculator."
  ],
  workedExample: {
    prompt: "income = 500, seedCost = 120, toolCost = 80. Write the profit formula and compute it.",
    steps: [
      "Total costs = seedCost + toolCost = 120 + 80 = 200.",
      "Profit = income − total costs.",
      "Profit = 500 − 200.",
      "Profit = 300."
    ],
    answer: "profit = income − (seedCost + toolCost) = 300"
  },
  items: [
    {
      id: "g6.fall.code.w3.d4.q1",
      type: "numeric",
      stem: "income = 350, costs = 140. Using profit = income − costs, what is profit?",
      answer: 210,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Plug the values into the formula.",
        "350 − 140.",
        "= 210."
      ],
      explanation: "profit = 350 − 140 = 210."
    },
    {
      id: "g6.fall.code.w3.d4.q2",
      type: "numeric",
      stem: "cratesSold = 25, pricePerCrate = 12. Using income = cratesSold × pricePerCrate, what is income?",
      answer: 300,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "This formula multiplies.",
        "25 × 12.",
        "= 300."
      ],
      explanation: "income = 25 × 12 = 300."
    },
    {
      id: "g6.fall.code.w3.d4.q3",
      type: "multiple_choice",
      stem: "If you change pricePerCrate from 12 to 15 in the formula income = cratesSold × pricePerCrate (cratesSold = 25), what happens?",
      choices: [
        "Nothing changes",
        "income recalculates to 375",
        "cratesSold becomes 15",
        "the formula breaks"
      ],
      answerIndex: 1,
      explanation: "Changing an input variable makes the formula recompute: 25 × 15 = 375.",
      hintLadder: [
        "The formula re-runs with the new value.",
        "25 × 15.",
        "income becomes 375."
      ],
      misconceptionsTargeted: ["variable-is-fixed"]
    },
    {
      id: "g6.fall.code.w3.d4.q4",
      type: "multiple_choice",
      stem: "A budget app shows a warning IF profit < 0. What does that warning mean?",
      choices: [
        "The harvest was huge",
        "Costs were greater than income — a loss",
        "The app is broken",
        "Profit equals income"
      ],
      answerIndex: 1,
      explanation: "Profit below zero means you spent more than you earned — a loss.",
      hintLadder: [
        "Profit = income − costs.",
        "When is that result negative?",
        "When costs are bigger than income."
      ]
    },
    {
      id: "g6.fall.code.w3.d4.q5",
      type: "short_answer",
      stem: "Plan a simple budget calculator: list the input variables you'd need and the formula for profit.",
      rubric: {
        level3: "Lists sensible inputs (e.g., income or units×price, plus one or more costs) AND gives a correct profit formula.",
        level2: "Lists some inputs and a formula, but it's incomplete or slightly off.",
        level1: "Missing inputs or an incorrect formula."
      },
      exemplar: "Inputs: cratesSold, pricePerCrate, seedCost, toolCost. income = cratesSold × pricePerCrate. profit = income − (seedCost + toolCost).",
      hintLadder: [
        "What do you need to know to find income?",
        "What costs reduce profit?",
        "Write profit = income − costs."
      ]
    }
  ],
  reflectionPrompt: "Calculators update instantly when inputs change. How could a budget calculator help your family or a school fundraiser?",
  misconceptionBank: [
    {
      id: "variable-is-fixed",
      label: "Thinks a variable's value can never change",
      description: "Believes once income = 500 it's permanent and formulas won't update.",
      coachMove: "Show that a variable is a box you can refill; the formula recomputes every time the box changes."
    }
  ]
};
