// Grade 5 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 1.
// Topic: ratios and equal sharing in recipes and harvest sharing (Grade 5
// depth — whole numbers, simple scaling, visual "equal shares").

export const fallG5MathW3D1 = {
  id: "g5.fall.math.w3.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Math",
  topic: "Ratios in recipes and harvest sharing",
  topicTag: "ratios",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NF.B.5", "CCSS.5.OA.A.2"],
  hook: "A harvest gets shared, scaled, and turned into recipes. Today you double a pumpkin-bread recipe and split a basket of apples fairly with friends.",
  miniLesson: [
    "A ratio compares two amounts: 2 cups flour to 1 cup sugar is 'two to one.' We can also read it as 'for every 1 cup sugar, use 2 cups flour.'",
    "Equal groups help: if you draw 2 cups flour next to 1 cup sugar, then draw it AGAIN, you have 4 cups flour to 2 cups sugar — the same recipe, just doubled.",
    "To make a bigger batch, multiply EVERY ingredient by the same number so the recipe still tastes the same."
  ],
  workedExample: {
    prompt: "A bread recipe uses 3 cups flour to 1 cup pumpkin. You want to DOUBLE it. How much of each?",
    steps: [
      "Doubling means multiply every amount by 2.",
      "Flour: 3 × 2 = 6 cups.",
      "Pumpkin: 1 × 2 = 2 cups.",
      "Now it's 6 cups flour to 2 cups pumpkin — a bigger batch of the same bread."
    ],
    answer: "6 cups flour, 2 cups pumpkin."
  },
  items: [
    {
      id: "g5.fall.math.w3.d1.q1",
      type: "multiple_choice",
      stem: "A recipe uses 2 cups flour to 1 cup sugar. If you double the recipe, how much flour and sugar do you use?",
      choices: ["4 cups flour, 2 cups sugar", "3 cups flour, 2 cups sugar", "2 cups flour, 2 cups sugar", "4 cups flour, 1 cup sugar"],
      answerIndex: 0,
      explanation: "Double means × 2 for each: flour 2 × 2 = 4, sugar 1 × 2 = 2.",
      hintLadder: [
        "Doubling means multiply BOTH amounts by 2.",
        "Flour: 2 × 2. Sugar: 1 × 2.",
        "4 cups flour and 2 cups sugar."
      ]
    },
    {
      id: "g5.fall.math.w3.d1.q2",
      type: "numeric",
      stem: "A trail mix uses 2 cups oats for every 3 cups nuts. If you use 4 cups oats (double), how many cups of nuts do you need?",
      answer: 6,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Oats went from 2 cups to 4 cups — that is doubled.",
        "Double the nuts too: 3 × 2.",
        "3 × 2 = 6 cups of nuts."
      ],
      explanation: "Oats doubled (2→4), so nuts double too: 3 × 2 = 6 cups."
    },
    {
      id: "g5.fall.math.w3.d1.q3",
      type: "numeric",
      stem: "Three friends share a basket of apples equally (a 1:1:1 share). If there are 18 apples, how many does each friend get?",
      answer: 6,
      tolerance: 0,
      unit: "apples",
      hintLadder: [
        "Equal shares means everyone gets the same amount.",
        "Divide the total by the number of friends.",
        "18 ÷ 3 = 6 apples each."
      ],
      explanation: "Equal shares: 18 ÷ 3 = 6 apples each."
    },
    {
      id: "g5.fall.math.w3.d1.q4",
      type: "numeric",
      stem: "A harvest of 20 crates is split between two barns in the ratio 3:1. How many crates does the FIRST barn (the 3-part barn) get?",
      answer: 15,
      tolerance: 0,
      unit: "crates",
      hintLadder: [
        "Add the ratio parts to find the number of equal shares: 3 + 1 = 4.",
        "Each share = 20 ÷ 4 = 5 crates.",
        "The first barn has 3 shares: 3 × 5 = 15 crates."
      ],
      explanation: "4 shares of 5 crates; the 3-part barn gets 3 × 5 = 15 crates.",
      misconceptionsTargeted: ["ratio-total-confusion"]
    },
    {
      id: "g5.fall.math.w3.d1.q5",
      type: "short_answer",
      stem: "A recipe uses 2 cups water to 3 cups grain. You want to triple it. Explain how much water and grain you'd use and why the recipe still tastes the same.",
      rubric: {
        level3: "Multiplies BOTH by 3 (water 2 × 3 = 6 cups, grain 3 × 3 = 9 cups) and explains that multiplying everything by the same number keeps the recipe the same.",
        level2: "Gets one amount right but the explanation of why it stays the same is unclear.",
        level1: "Wrong scaling or no reasoning."
      },
      exemplar: "Tripling means × 3 for everything. Water: 2 × 3 = 6 cups. Grain: 3 × 3 = 9 cups. Because I multiplied BOTH by the same number, the recipe still has the same balance and tastes the same.",
      hintLadder: [
        "Tripling means multiply by 3.",
        "Do 2 × 3 for water and 3 × 3 for grain.",
        "Explain that using the same multiplier for both keeps it balanced."
      ]
    }
  ],
  reflectionPrompt: "Where have you seen something that had to be shared equally or a recipe that got doubled? What were the amounts?",
  misconceptionBank: [
    {
      id: "ratio-total-confusion",
      label: "Treats one ratio part as the whole total",
      description: "Divides the total by just one part instead of by the SUM of the parts.",
      coachMove: "Add the ratio numbers first to find how many equal shares there are, then divide the total by that sum."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather share 12 apples equally (1:1:1) with two friends, or share them 2:1:1 where YOU are the '2'? Work out how many apples you'd get each way before you choose!",
      answer:
        "1:1:1 → 12 ÷ 3 = 4 apples each. 2:1:1 → 4 shares of 3, and you get 2 shares = 6 apples. So the 2:1:1 deal gives YOU more.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Double a Harvest Recipe",
      challenge:
        "Invent a simple fall recipe (pumpkin bread, apple cider, trail mix) built on an easy ratio like 3 cups flour to 1 cup pumpkin. Then DOUBLE it to feed more people — keep the recipe balanced!",
      steps: [
        "Pick two ingredients and choose an easy whole-number ratio.",
        "Write a recipe card showing your original amounts.",
        "Multiply every ingredient by 2 to double the batch.",
        "Check: did you multiply BOTH ingredients by the same number?"
      ],
      deliverable: "A recipe card showing the original recipe and the doubled version.",
      choiceBoard: [
        "Draw or type a recipe card with both versions.",
        "Make a 'harvest ratio poster' showing 3 real ratios you find in your kitchen.",
        "Make a 4-panel comic where a cook doubles a recipe for a big autumn feast."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ratio Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w3.d1.arena1",
          type: "numeric",
          stem: "A cider mix uses 4 cups apple to 1 cup cinnamon syrup. If you double it to 8 cups apple, how many cups of cinnamon syrup do you need?",
          answer: 2,
          tolerance: 0,
          unit: "cups",
          hintLadder: [
            "Apple went from 4 cups to 8 cups — that is doubled.",
            "Double the syrup too: 1 × 2.",
            "1 × 2 = 2 cups of cinnamon syrup."
          ],
          explanation: "Apple doubled (4→8), so syrup doubles: 1 × 2 = 2 cups."
        },
        {
          id: "g5.fall.math.w3.d1.arena2",
          type: "numeric",
          stem: "A harvest of 20 crates is split between two barns in the ratio 3:2. How many crates does the LARGER share (the 3-part barn) get?",
          answer: 12,
          tolerance: 0,
          unit: "crates",
          hintLadder: [
            "Add the ratio parts: 3 + 2 = 5 equal shares.",
            "Each share = 20 ÷ 5 = 4 crates.",
            "The 3-part barn gets 3 × 4 = 12 crates."
          ],
          explanation: "5 shares of 4 crates; the 3-part barn gets 3 × 4 = 12 crates."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Ratio Reach",
      prompt:
        "Do a stretch in a 3:1 pattern — reach high for the 'top of the apple tree' 3 times, then crouch low to the 'pumpkin patch' once. Repeat the pattern 4 times.",
      scienceTieIn:
        "Stretching and moving sends more oxygen-rich blood to your muscles and brain, which helps you focus on the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot a fair split or a doubled recipe today — a snack shared with friends, or a game score? Write one you noticed.",
      badge: { id: "g5-fall-harvest-ratio-ranger", name: "Harvest Ratio Ranger", emoji: "🍎" },
      estimatedMinutes: 7
    }
  }
};
