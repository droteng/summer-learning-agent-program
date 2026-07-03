// Grade 5 Math — Fall Expedition, Week 1 (Back to Basics), Day 1.
// Grade 5 counterpart of g6.fall.math.w1.d1. Same topic (place value +
// whole-number operations warm-up) pitched down to Grade 5: smaller,
// friendlier numbers, visual/step-by-step scaffolding.

export const fallG5MathW1D1 = {
  id: "g5.fall.math.w1.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Place value and operations warm-up",
  topicTag: "place-value",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.A.1", "CCSS.5.NBT.B.5"],
  hook: "Fall is here! Before we count the harvest, let's warm up the basics: place value and the four operations — add, subtract, multiply, divide.",
  miniLesson: [
    "Each digit's value depends on its place. In 462 the 4 means 400, the 6 means 60, and the 2 means 2. Picture the digits sitting in labeled columns: hundreds, tens, ones.",
    "When you add or subtract, line up the columns so ones sit under ones and tens under tens. A place-value chart keeps everything neat.",
    "Multiplication is fast repeated adding, and division splits a total into equal groups. Estimate first (round to friendly numbers) so a wrong answer is easy to spot."
  ],
  workedExample: {
    prompt: "A farm stand sold 124 apples in September and 78 in October. How many apples in total, and how many more in September?",
    steps: [
      "Add for the total: line up 124 and 78 by place value.",
      "124 + 78 = 202 apples in total.",
      "Subtract for the difference: 124 − 78 = 46.",
      "September sold 46 more apples than October."
    ],
    answer: "202 apples total; 46 more in September."
  },
  items: [
    {
      id: "g5.fall.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "In the number 734, what is the value of the digit 3?",
      choices: ["3", "30", "300", "3,000"],
      answerIndex: 1,
      explanation: "The 3 is in the tens place, so its value is 30.",
      hintLadder: [
        "Name the place each digit sits in: ones, tens, hundreds.",
        "The 3 is the middle digit — second from the right.",
        "Second place from the right is the tens place, so 3 means 30."
      ]
    },
    {
      id: "g5.fall.math.w1.d1.q2",
      type: "numeric",
      stem: "Add: 256 + 187.",
      answer: 443,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Line up the ones, tens, and hundreds columns.",
        "Add ones first (6 + 7 = 13, carry the 1), then tens, then hundreds.",
        "256 + 187 = 443."
      ],
      explanation: "256 + 187 = 443."
    },
    {
      id: "g5.fall.math.w1.d1.q3",
      type: "numeric",
      stem: "A crate holds 12 pumpkins. How many pumpkins are in 8 crates?",
      answer: 96,
      tolerance: 0,
      unit: "pumpkins",
      hintLadder: [
        "This is multiplication: 12 × 8.",
        "Break it up: 10 × 8 = 80 and 2 × 8 = 16.",
        "80 + 16 = 96."
      ],
      explanation: "12 × 8 = 96 pumpkins."
    },
    {
      id: "g5.fall.math.w1.d1.q4",
      type: "numeric",
      stem: "72 ears of corn are shared equally into 6 baskets. How many ears in each basket?",
      answer: 12,
      tolerance: 0,
      unit: "ears",
      hintLadder: [
        "This is division: 72 ÷ 6.",
        "Think: 6 times what number gets close to 72?",
        "6 × 12 = 72, so each basket holds 12."
      ],
      explanation: "72 ÷ 6 = 12 ears per basket."
    },
    {
      id: "g5.fall.math.w1.d1.q5",
      type: "short_answer",
      stem: "Estimate 39 × 21 by rounding to the nearest ten, then explain why estimating first is useful.",
      rubric: {
        level3: "Rounds to about 40 × 20 = 800 AND explains that estimating first helps catch big mistakes / check if the exact answer is reasonable.",
        level2: "Gives a reasonable estimate OR explains the value of estimating, but not both.",
        level1: "Computes exactly without estimating, or gives no reasoning."
      },
      exemplar: "Round to 40 × 20 = 800. If my exact answer comes out far from 800, I know I made a mistake somewhere.",
      hintLadder: [
        "Round each number to the nearest ten to make friendly numbers.",
        "40 × 20 is easy to multiply.",
        "Why is a quick estimate worth a few seconds before you compute?"
      ]
    }
  ],
  reflectionPrompt: "Which operation felt rustiest after the summer — add, subtract, multiply, or divide? Name one you want more practice with this fall.",
  misconceptionBank: [
    {
      id: "place-value-misalignment",
      label: "Misaligns place values when adding",
      description: "Stacks numbers by their left edge instead of lining up ones, tens, and hundreds.",
      coachMove: "Use grid paper or draw columns labeled ones/tens/hundreds so each digit lands in the correct column."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Harvest Riddle",
      prompt:
        "I am a three-digit number. My hundreds digit is 4, my tens digit is one less than my hundreds digit, and my ones digit is 0. What number am I?",
      answer: "430 — hundreds 4, tens 3 (one less than 4), ones 0.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Stock the Harvest Stand",
      challenge:
        "Imagine you run a fall farm stand. Invent three products with small whole-number prices, then use all four operations (add, subtract, multiply, divide) to plan one busy autumn day.",
      steps: [
        "List three products and a whole-number price for each (keep prices under $10).",
        "Pick how many of each you sold today and MULTIPLY price by quantity.",
        "ADD your products' totals for the day, then SUBTRACT a small supplies cost you choose.",
        "DIVIDE your final money equally among 2 helpers and show each share."
      ],
      deliverable: "A farm-stand sales sheet showing one example of each of the four operations with correct answers.",
      choiceBoard: [
        "Make a colorful price-list poster for your stand.",
        "Write the day as a story problem for a friend to solve.",
        "Build a simple table: product, price, quantity, total."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Place-Value Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w1.d1.arena1",
          type: "numeric",
          stem: "A barn stored 500 bushels of grain. After selling 180 bushels, then receiving 60 more, how many bushels are in the barn?",
          answer: 380,
          tolerance: 0,
          unit: "bushels",
          hintLadder: [
            "Do it in two steps: first subtract what was sold.",
            "500 − 180 = 320.",
            "Then add 60: 320 + 60 = 380."
          ],
          explanation: "500 − 180 = 320; 320 + 60 = 380 bushels."
        },
        {
          id: "g5.fall.math.w1.d1.arena2",
          type: "short_answer",
          stem: "Estimate 82 ÷ 4 by rounding to friendly numbers, then explain how your estimate tells you whether an exact answer of 90 would be reasonable.",
          rubric: {
            level3: "Rounds to about 80 ÷ 4 = 20 AND explains that 90 is far too big, so it must be wrong.",
            level2: "Gives a reasonable estimate OR reasons about the check, but not both.",
            level1: "No usable estimate or no reasoning about reasonableness."
          },
          exemplar: "Round to 80 ÷ 4 = 20. A real answer should be near 20, so 90 is way too big — it can't be right.",
          hintLadder: [
            "Round 82 to a friendly number that divides easily by 4.",
            "80 ÷ 4 is simple to compute.",
            "Compare your estimate to 90 — is it close?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Place-Value Leaf Rake",
      prompt:
        "Pretend to rake leaves: 3 big sweeps for hundreds, 2 for tens, 1 for ones, then shake it out. Repeat the count-down twice and feel your arms wake up.",
      scienceTieIn:
        "Bigger muscle movements pump more oxygen-rich blood to your brain, which helps you focus on the next task — a body-brain link you'll meet again in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you see a big number today — a price, a distance, a score? Write one and name the value of its largest digit.",
      badge: { id: "g5-fall-place-value-pro", name: "Place-Value Pro", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
