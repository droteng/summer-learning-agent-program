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
  estimatedMinutes: 60, // full Daily Hour
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
        "income recalculates to 375",
        "Nothing changes",
        "cratesSold becomes 15",
        "the formula breaks"
      ],
      answerIndex: 0,
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Budget",
      prompt:
        "Start with income = 400. Then: costs = 150. Then: profit = income − costs. Then income changes to 500 and the formula re-runs. What is profit now? Trace it step by step before you peek!",
      answer:
        "First run: 400 − 150 = 250. After income becomes 500, the formula recomputes: 500 − 150 = 350. So profit = 350. (Change an input and the formula updates!)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Own Budget Calculator",
      challenge:
        "Design a budget calculator for a fall project — a pumpkin stand, a bake sale, a leaf-raking business. List your input variables and write the formulas that turn them into income and profit.",
      steps: [
        "Name your project and list the input variables (units sold, price, costs).",
        "Write the income formula (usually units × price).",
        "Write the profit formula (income − total costs).",
        "Plug in sample numbers and compute the profit by hand."
      ],
      deliverable: "A one-page calculator plan: input variables, income formula, profit formula, and a worked example.",
      choiceBoard: [
        "Write the variables and formulas as a numbered plan.",
        "Draw it as a flowchart: inputs → formulas → profit.",
        "Build it for real in a spreadsheet and screenshot the result."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Calculator Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.code.w3.d4.arena1",
          type: "numeric",
          stem: "cratesSold = 18, pricePerCrate = 9, seedCost = 50, toolCost = 22. Using profit = (cratesSold × pricePerCrate) − (seedCost + toolCost), what is profit?",
          answer: 90,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "First find income: 18 × 9.",
            "income = 162. Then total costs = 50 + 22 = 72.",
            "profit = 162 − 72 = 90."
          ],
          explanation: "income = 18 × 9 = 162; costs = 50 + 22 = 72; profit = 162 − 72 = 90."
        },
        {
          id: "g6.fall.code.w3.d4.arena2",
          type: "multiple_choice",
          stem: "A budget app runs: IF profit < 0 THEN show 'Loss!'. With income = 120 and costs = 145, what does the app show?",
          choices: [
            "Nothing — profit is positive",
            "The app crashes",
            "'Loss!' — but only because income is low",
            "'Loss!' — profit is −25, which is below 0"
          ],
          answerIndex: 3,
          explanation: "profit = 120 − 145 = −25, which is less than 0, so the condition is true and 'Loss!' shows.",
          hintLadder: [
            "Compute profit = income − costs.",
            "120 − 145 = −25.",
            "Is −25 < 0? Yes, so 'Loss!' shows."
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
        "Calculators update instantly when inputs change. What's something in your life (allowance, a fundraiser, game points) you could model with a variable and a formula?",
      badge: { id: "harvest-budget-builder", name: "Harvest Budget Builder", emoji: "🧺" },
      estimatedMinutes: 7
    }
  }
};
