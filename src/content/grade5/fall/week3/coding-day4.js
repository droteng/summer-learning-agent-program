// Grade 5 Coding/CS/AI — Fall Expedition, Week 3 (The Harvest of Numbers),
// Day 4. Topic: build a harvest budget calculator — variables and formulas
// (Grade 5 depth — everyday "labeled boxes," simpler numbers, block-style
// pseudocode).

export const fallG5CodingW3D4 = {
  id: "g5.fall.code.w3.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Build a harvest budget calculator",
  topicTag: "variables-formulas",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-09", "CSTA.1B-AP-10"],
  hook: "Apps and spreadsheets run on variables and formulas. Today you build the logic of a harvest budget: money coming in, money going out, and what's left over.",
  miniLesson: [
    "A variable is a labeled box that holds a value, like a box labeled 'income' with 50 inside.",
    "A formula makes a new value from the boxes: leftover = income − costs.",
    "If you change what's in a box, the formula gives a new answer — that's what makes a calculator handy."
  ],
  workedExample: {
    prompt: "income = 50, seedCost = 20, toolCost = 10. Write the leftover formula and compute it.",
    steps: [
      "Total costs = seedCost + toolCost = 20 + 10 = 30.",
      "Leftover = income − total costs.",
      "Leftover = 50 − 30.",
      "Leftover = 20."
    ],
    answer: "leftover = income − (seedCost + toolCost) = 20"
  },
  items: [
    {
      id: "g5.fall.code.w3.d4.q1",
      type: "numeric",
      stem: "income = 40, costs = 15. Using leftover = income − costs, what is leftover?",
      answer: 25,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Put the values into the formula.",
        "40 − 15.",
        "= 25."
      ],
      explanation: "leftover = 40 − 15 = 25."
    },
    {
      id: "g5.fall.code.w3.d4.q2",
      type: "numeric",
      stem: "cratesSold = 6, pricePerCrate = 5. Using income = cratesSold × pricePerCrate, what is income?",
      answer: 30,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "This formula multiplies.",
        "6 × 5.",
        "= 30."
      ],
      explanation: "income = 6 × 5 = 30."
    },
    {
      id: "g5.fall.code.w3.d4.q3",
      type: "multiple_choice",
      stem: "You change pricePerCrate from 5 to 8 in income = cratesSold × pricePerCrate (cratesSold = 6). What happens?",
      choices: [
        "Nothing changes",
        "income recalculates to 48",
        "cratesSold becomes 8",
        "the formula breaks"
      ],
      answerIndex: 1,
      explanation: "Changing a box makes the formula run again: 6 × 8 = 48.",
      hintLadder: [
        "The formula runs again with the new number in the box.",
        "6 × 8.",
        "income becomes 48."
      ],
      misconceptionsTargeted: ["variable-is-fixed"]
    },
    {
      id: "g5.fall.code.w3.d4.q4",
      type: "multiple_choice",
      stem: "A budget app shows a warning IF leftover is less than 0. What does that warning mean?",
      choices: [
        "The harvest was huge",
        "Costs were bigger than income — you spent too much",
        "The app is broken",
        "Leftover equals income"
      ],
      answerIndex: 1,
      explanation: "Leftover below zero means you spent more than you earned.",
      hintLadder: [
        "Leftover = income − costs.",
        "When would that answer be below zero?",
        "When the costs are bigger than the income."
      ]
    },
    {
      id: "g5.fall.code.w3.d4.q5",
      type: "short_answer",
      stem: "Plan a simple budget calculator: list the input boxes (variables) you'd need and write the formula for leftover.",
      rubric: {
        level3: "Lists sensible input boxes (e.g., income or crates × price, plus one or more costs) AND gives a correct leftover formula.",
        level2: "Lists some boxes and a formula, but it's incomplete or slightly off.",
        level1: "Missing boxes or an incorrect formula."
      },
      exemplar: "Boxes: cratesSold, pricePerCrate, seedCost, toolCost. income = cratesSold × pricePerCrate. leftover = income − (seedCost + toolCost).",
      hintLadder: [
        "What do you need to know to find income?",
        "What costs take away from your leftover?",
        "Write leftover = income − costs."
      ]
    }
  ],
  reflectionPrompt: "Calculators update the second you change a number. How could a budget calculator help your family or a school fundraiser?",
  misconceptionBank: [
    {
      id: "variable-is-fixed",
      label: "Thinks a variable's value can never change",
      description: "Believes once income = 50 it's stuck there and the formula won't update.",
      coachMove: "Show that a variable is a box you can empty and refill; the formula runs again every time the box changes."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Budget",
      prompt:
        "Start with income = 40. Then: costs = 15. Then: leftover = income − costs. Then income changes to 50 and the formula runs again. What is leftover now? Trace it step by step before you peek!",
      answer:
        "First run: 40 − 15 = 25. After income becomes 50, the formula runs again: 50 − 15 = 35. So leftover = 35. (Change a box and the formula updates!)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Own Budget Calculator",
      challenge:
        "Design a budget calculator for a fall project — a pumpkin stand, a bake sale, a leaf-raking business. List your input boxes and write the formulas that turn them into income and leftover.",
      steps: [
        "Name your project and list the input boxes (crates sold, price, costs).",
        "Write the income formula (usually crates × price).",
        "Write the leftover formula (income − total costs).",
        "Put in sample numbers and work out the leftover by hand."
      ],
      deliverable: "A one-page calculator plan: input boxes, income formula, leftover formula, and a worked example.",
      choiceBoard: [
        "Write the boxes and formulas as a numbered plan.",
        "Draw it as a flowchart: inputs → formulas → leftover.",
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
          id: "g5.fall.code.w3.d4.arena1",
          type: "numeric",
          stem: "cratesSold = 8, pricePerCrate = 5, seedCost = 15, toolCost = 5. Using leftover = (cratesSold × pricePerCrate) − (seedCost + toolCost), what is leftover?",
          answer: 20,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "First find income: 8 × 5.",
            "income = 40. Then total costs = 15 + 5 = 20.",
            "leftover = 40 − 20 = 20."
          ],
          explanation: "income = 8 × 5 = 40; costs = 15 + 5 = 20; leftover = 40 − 20 = 20."
        },
        {
          id: "g5.fall.code.w3.d4.arena2",
          type: "multiple_choice",
          stem: "A budget app runs: IF leftover is less than 0 THEN show 'Loss!'. With income = 12 and costs = 20, what does the app show?",
          choices: [
            "Nothing — leftover is positive",
            "'Loss!' — leftover is −8, which is below 0",
            "'Loss!' — but only because income is low",
            "The app crashes"
          ],
          answerIndex: 1,
          explanation: "leftover = 12 − 20 = −8, which is less than 0, so the warning shows 'Loss!'.",
          hintLadder: [
            "Compute leftover = income − costs.",
            "12 − 20 = −8.",
            "Is −8 below 0? Yes, so 'Loss!' shows."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Reset & Recompute",
      prompt:
        "Stand up, roll your shoulders back 5 times, shake out your hands like you're clearing a screen, then take 3 slow breaths and grab some water. You're 'recomputing' a fresh, focused you!",
      scienceTieIn:
        "Staying hydrated and moving helps your blood carry oxygen to your brain, so it can process new information more clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Calculators update the second you change a number. What's something in your life (allowance, a fundraiser, game points) you could model with a box and a formula?",
      badge: { id: "g5-fall-harvest-budget-builder", name: "Harvest Budget Builder", emoji: "🧺" },
      estimatedMinutes: 7
    }
  }
};
