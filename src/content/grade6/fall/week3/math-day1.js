// Grade 6 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 1.
// Topic: ratios and proportions in recipes and harvest sharing.

export const fallG6MathW3D1 = {
  id: "g6.fall.math.w3.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Math",
  topic: "Ratios in recipes and harvest sharing",
  topicTag: "ratios",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.1", "CCSS.6.RP.A.3"],
  hook: "A harvest has to be shared, scaled, and turned into recipes. All of that is ratios. Today you scale a pumpkin-bread recipe and split a crop fairly.",
  miniLesson: [
    "A ratio compares two amounts: 2 cups flour to 1 cup sugar is the ratio 2:1.",
    "Equivalent ratios keep the same relationship: 2:1 is the same as 4:2 and 6:3.",
    "To scale a recipe, multiply every ingredient by the same number so the ratio stays the same."
  ],
  workedExample: {
    prompt: "A bread recipe uses 3 cups flour to 1 cup pumpkin. You want to triple it. How much of each?",
    steps: [
      "Tripling means multiply every amount by 3.",
      "Flour: 3 × 3 = 9 cups.",
      "Pumpkin: 1 × 3 = 3 cups.",
      "The ratio 9:3 reduces back to 3:1 — same recipe, bigger batch."
    ],
    answer: "9 cups flour, 3 cups pumpkin."
  },
  items: [
    {
      id: "g6.fall.math.w3.d1.q1",
      type: "multiple_choice",
      stem: "Which ratio is equivalent to 4:2?",
      choices: ["1:2", "2:1", "4:4", "3:2"],
      answerIndex: 1,
      explanation: "4:2 divides by 2 to give 2:1 — the same relationship.",
      hintLadder: [
        "Simplify 4:2 by dividing both numbers by the same value.",
        "Divide both by 2.",
        "4÷2 : 2÷2 = 2:1."
      ]
    },
    {
      id: "g6.fall.math.w3.d1.q2",
      type: "numeric",
      stem: "A recipe uses 2 cups oats for every 5 cups flour. To use 15 cups flour, how many cups of oats?",
      answer: 6,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Find the multiplier: 5 cups flour became 15 cups — times what?",
        "15 ÷ 5 = 3, so multiply oats by 3.",
        "2 × 3 = 6 cups oats."
      ],
      explanation: "Flour tripled (5→15), so oats triple too: 2 × 3 = 6."
    },
    {
      id: "g6.fall.math.w3.d1.q3",
      type: "numeric",
      stem: "Three friends share a harvest in the ratio 1:1:1. If there are 24 apples, how many does each get?",
      answer: 8,
      tolerance: 0,
      unit: "apples",
      hintLadder: [
        "1:1:1 means equal shares.",
        "Divide the total by the number of shares.",
        "24 ÷ 3 = 8 each."
      ],
      explanation: "Equal shares: 24 ÷ 3 = 8 apples each."
    },
    {
      id: "g6.fall.math.w3.d1.q4",
      type: "numeric",
      stem: "A crop is split between two farms in the ratio 3:1. There are 40 crates total. How many crates does the FIRST farm get?",
      answer: 30,
      tolerance: 0,
      unit: "crates",
      hintLadder: [
        "Add the ratio parts: 3 + 1 = 4 equal shares.",
        "Each share = 40 ÷ 4 = 10 crates.",
        "First farm has 3 shares: 3 × 10 = 30."
      ],
      explanation: "4 shares of 10; the 3-part farm gets 30 crates.",
      misconceptionsTargeted: ["ratio-total-confusion"]
    },
    {
      id: "g6.fall.math.w3.d1.q5",
      type: "short_answer",
      stem: "You have a recipe ratio of 2 cups water to 3 cups grain. Explain how you'd scale it to feed a group needing 12 cups of grain, and how much water you'd use.",
      rubric: {
        level3: "Finds the multiplier (12 ÷ 3 = 4), applies it to water (2 × 4 = 8), and explains the ratio stays the same.",
        level2: "Gets the water amount but explanation of the multiplier is unclear.",
        level1: "Wrong scaling or no reasoning."
      },
      exemplar: "Grain went from 3 to 12, which is ×4. To keep the ratio, multiply water by 4 too: 2 × 4 = 8 cups water.",
      hintLadder: [
        "How many times bigger is 12 than 3?",
        "Apply that same multiplier to the water.",
        "Keep the ratio 2:3 by scaling both."
      ]
    }
  ],
  reflectionPrompt: "Where have you seen a recipe or split that had to stay 'in proportion'? What was the ratio?",
  misconceptionBank: [
    {
      id: "ratio-total-confusion",
      label: "Treats one ratio part as the whole total",
      description: "Divides the total by a single part instead of by the SUM of the parts.",
      coachMove: "Add the ratio numbers first to find how many equal shares there are, then divide the total by that sum."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather share a basket of 12 apples in the ratio 1:1:1 with two friends, or in the ratio 2:1:1 where you're the '2'? Work out how many apples you'd get each way before you choose!",
      answer:
        "1:1:1 → 12 ÷ 3 = 4 apples each. 2:1:1 → 4 shares of 3, and you get 2 shares = 6 apples. So the 2:1:1 deal gives YOU more.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Scale a Harvest Recipe",
      challenge:
        "Invent a fall recipe (pumpkin bread, apple cider, trail mix) built on a ratio like 3 cups flour : 1 cup pumpkin. Then scale it to feed a harvest crew of 6 — keep the ratio exactly the same!",
      steps: [
        "Pick two ingredients and choose a whole-number ratio between them.",
        "Write a recipe card showing your original ratio.",
        "Multiply every ingredient by the same number to feed 6 people.",
        "Check: does your scaled recipe reduce back to the original ratio?"
      ],
      deliverable: "A recipe card showing the original ratio and the scaled-up version for 6.",
      choiceBoard: [
        "Draw or type a recipe card with both versions.",
        "Make a 'harvest ratio poster' showing 3 real ratios you find in your kitchen.",
        "Make a 4-panel comic where a cook scales a recipe up for a big autumn feast."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ratio Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w3.d1.arena1",
          type: "numeric",
          stem: "A cider mix is 4 parts apple to 1 part cinnamon syrup. To use 28 parts of apple, how many parts of cinnamon syrup do you need?",
          answer: 7,
          tolerance: 0,
          unit: "parts",
          hintLadder: [
            "Apple went from 4 to 28 — times what?",
            "28 ÷ 4 = 7, so scale the syrup by 7.",
            "1 × 7 = 7 parts cinnamon syrup."
          ],
          explanation: "Scale by 7: 1 × 7 = 7 parts cinnamon syrup."
        },
        {
          id: "g6.fall.math.w3.d1.arena2",
          type: "numeric",
          stem: "A harvest of 50 crates is split between two barns in the ratio 3:2. How many crates does the LARGER share (the 3-part barn) get?",
          answer: 30,
          tolerance: 0,
          unit: "crates",
          hintLadder: [
            "Add the ratio parts: 3 + 2 = 5 equal shares.",
            "Each share = 50 ÷ 5 = 10 crates.",
            "The 3-part barn gets 3 × 10 = 30 crates."
          ],
          explanation: "5 shares of 10; the 3-part barn gets 3 × 10 = 30 crates."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Ratio Reach",
      prompt:
        "Do a stretch in a 3:1 ratio — reach high for the 'top of the apple tree' 3 times, then crouch low to the 'pumpkin patch' once. Repeat the pattern 4 times.",
      scienceTieIn:
        "Stretching and moving sends more oxygen-rich blood to your muscles and brain, which helps you focus on the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot a ratio or a fair split today — in a recipe, a snack shared with friends, or a game score? Write one you noticed.",
      badge: { id: "harvest-ratio-ranger", name: "Harvest Ratio Ranger", emoji: "🍎" },
      estimatedMinutes: 7
    }
  }
};
