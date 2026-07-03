// Grade 7 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 1.
// Topic: proportional relationships in recipes and harvest sharing.
// Grade-7 lift: unit rates with fractions, constant of proportionality,
// percent-based sharing, and multi-step proportion reasoning.

export const fallG7MathW3D1 = {
  id: "g7.fall.math.w3.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Math",
  topic: "Proportional relationships in recipes and harvest sharing",
  topicTag: "ratios",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.2", "CCSS.7.RP.A.3"],
  hook: "A harvest has to be shared, scaled, and turned into recipes. Underneath it all is one idea: a constant of proportionality. Today you scale a pumpkin-bread recipe, split a crop by percent, and prove two amounts are truly proportional.",
  miniLesson: [
    "Two quantities are proportional when their ratio is constant. That constant, y ÷ x, is the constant of proportionality k, so y = kx.",
    "A unit rate can involve fractions: (1/2 cup pumpkin) per (3/4 cup flour) is a rate of (1/2) ÷ (3/4) = 2/3 cup pumpkin per cup flour.",
    "Sharing 'in the ratio a:b' means a+b equal parts; a percent share (like 35%) is just that part written out of 100."
  ],
  workedExample: {
    prompt: "A bread recipe uses 3/4 cup pumpkin for every 3 cups flour. What is the constant of proportionality (cups pumpkin per cup flour), and how much pumpkin is needed for 8 cups of flour?",
    steps: [
      "Constant k = pumpkin ÷ flour = (3/4) ÷ 3 = 3/4 × 1/3 = 1/4 cup pumpkin per cup flour.",
      "The relationship is pumpkin = (1/4) × flour.",
      "For 8 cups flour: pumpkin = (1/4) × 8 = 2 cups.",
      "Check: ratio 2:8 reduces to 1/4 — the constant held."
    ],
    answer: "k = 1/4 cup pumpkin per cup flour; 2 cups pumpkin for 8 cups flour."
  },
  items: [
    {
      id: "g7.fall.math.w3.d1.q1",
      type: "multiple_choice",
      stem: "A recipe keeps 2 cups oats for every 5 cups flour. What is the constant of proportionality k = oats ÷ flour?",
      choices: ["5/2", "2/5", "2", "10"],
      answerIndex: 1,
      explanation: "k = oats ÷ flour = 2 ÷ 5 = 2/5 cup oats per cup flour.",
      hintLadder: [
        "The constant of proportionality is y ÷ x for the pair you're relating.",
        "Here y = oats = 2 and x = flour = 5.",
        "2 ÷ 5 = 2/5."
      ]
    },
    {
      id: "g7.fall.math.w3.d1.q2",
      type: "numeric",
      stem: "Using that same relationship (2 cups oats for every 5 cups flour), how many cups of oats are needed for 17.5 cups of flour?",
      answer: 7,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "oats = k × flour, with k = 2/5.",
        "Multiply 17.5 by 2/5 (which is the same as 17.5 × 0.4).",
        "17.5 × 2/5 = 35/5 = 7 cups oats."
      ],
      explanation: "oats = (2/5) × 17.5 = 7 cups."
    },
    {
      id: "g7.fall.math.w3.d1.q3",
      type: "numeric",
      stem: "A harvest of 24 apples is shared among three friends in the ratio 3:2:1. How many apples does the person with the LARGEST share get?",
      answer: 12,
      tolerance: 0,
      unit: "apples",
      hintLadder: [
        "Add the ratio parts to find how many equal shares: 3 + 2 + 1.",
        "There are 6 shares, so each share = 24 ÷ 6 = 4 apples.",
        "The 3-part share gets 3 × 4 = 12 apples."
      ],
      explanation: "6 shares of 4 apples each; the 3-part share is 3 × 4 = 12.",
      misconceptionsTargeted: ["ratio-total-confusion"]
    },
    {
      id: "g7.fall.math.w3.d1.q4",
      type: "numeric",
      stem: "A co-op sells its crop and gives 35% of a 240-crate harvest to the food bank. How many crates does the food bank receive?",
      answer: 84,
      tolerance: 0,
      unit: "crates",
      hintLadder: [
        "35% means 35 out of every 100, or 0.35 as a decimal.",
        "Multiply the total by 0.35.",
        "0.35 × 240 = 84 crates."
      ],
      explanation: "0.35 × 240 = 84 crates to the food bank.",
      misconceptionsTargeted: ["percent-of-whole-confusion"]
    },
    {
      id: "g7.fall.math.w3.d1.q5",
      type: "short_answer",
      stem: "A recipe ratio is 3/4 cup water to 2 cups grain. Explain how to find the constant of proportionality (water per cup of grain), and use it to find the water needed for 9 cups of grain.",
      rubric: {
        level3: "Finds k = (3/4) ÷ 2 = 3/8 cup water per cup grain, applies water = (3/8) × 9 = 27/8 = 3.375 cups, and explains the ratio stays constant.",
        level2: "Sets up the constant or the scaling but the fraction arithmetic is slightly off, or the explanation is unclear.",
        level1: "No constant of proportionality, wrong setup, or no reasoning."
      },
      exemplar: "The constant is k = water ÷ grain = (3/4) ÷ 2 = 3/8 cup water per cup of grain. Since water = k × grain, for 9 cups of grain I use (3/8) × 9 = 27/8 = 3.375 cups of water. The ratio 3/4 : 2 stays constant no matter how much I scale.",
      hintLadder: [
        "The constant of proportionality is water ÷ grain.",
        "Divide 3/4 by 2 to get k, then multiply by 9.",
        "(3/4) ÷ 2 = 3/8; (3/8) × 9 = 27/8 = 3.375 cups."
      ]
    }
  ],
  reflectionPrompt: "Where have you seen a proportional relationship today — a recipe, a price per item, a fair split? What was its constant of proportionality (the amount per one)?",
  misconceptionBank: [
    {
      id: "ratio-total-confusion",
      label: "Treats one ratio part as the whole total",
      description: "Divides the total by a single part instead of by the SUM of the parts.",
      coachMove: "Add the ratio numbers first to find how many equal shares there are, then divide the total by that sum before scaling any single part."
    },
    {
      id: "percent-of-whole-confusion",
      label: "Confuses the percent with the amount",
      description: "Reports the percent (e.g., 35) as the answer instead of finding 35% OF the total.",
      coachMove: "Turn the percent into a decimal (35% → 0.35) and multiply it by the whole to get the actual amount."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "A basket of 30 apples can be split three ways in the ratio 1:1:1, or in the ratio 3:2:1 where you're the '3'. Work out how many apples you'd get each way before you choose!",
      answer:
        "1:1:1 → 30 ÷ 3 = 10 apples each. 3:2:1 → 6 shares of 5, and you get 3 shares = 15 apples. The 3:2:1 deal gives YOU more (15 > 10).",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Scale a Harvest Recipe",
      challenge:
        "Invent a fall recipe (pumpkin bread, apple cider, trail mix) built on a fractional ratio like 3/4 cup pumpkin : 3 cups flour. Find its constant of proportionality, then scale it to feed a harvest crew of 10 — keeping the constant exactly the same.",
      steps: [
        "Pick two ingredients and choose a ratio that includes at least one fraction.",
        "Compute the constant of proportionality k (amount of one ingredient per unit of the other).",
        "Write a recipe card showing the original ratio and k.",
        "Scale every ingredient by the same factor to feed 10, and verify k is unchanged."
      ],
      deliverable: "A recipe card showing the original ratio, its constant of proportionality, and the scaled version for 10 people.",
      choiceBoard: [
        "Draw or type a recipe card with both versions and the constant k labeled.",
        "Make a 'harvest proportion poster' showing 3 real proportional relationships from your kitchen and each one's k.",
        "Make a 4-panel comic where a cook scales a recipe for a big autumn feast, narrating the constant of proportionality."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ratio Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w3.d1.arena1",
          type: "numeric",
          stem: "A cider mix uses 1/2 cup cinnamon syrup for every 4 cups apple juice. Keeping the same constant, how many cups of syrup are needed for 30 cups of apple juice?",
          answer: 3.75,
          tolerance: 0.01,
          unit: "cups",
          hintLadder: [
            "Find k = syrup ÷ juice = (1/2) ÷ 4 = 1/8 cup syrup per cup juice.",
            "syrup = k × juice = (1/8) × 30.",
            "(1/8) × 30 = 30/8 = 3.75 cups."
          ],
          explanation: "k = (1/2) ÷ 4 = 1/8; syrup = (1/8) × 30 = 3.75 cups."
        },
        {
          id: "g7.fall.math.w3.d1.arena2",
          type: "numeric",
          stem: "A 350-crate harvest is split between two barns in the ratio 4:3, and then the larger barn donates 25% of ITS share. How many crates does the larger barn keep?",
          answer: 150,
          tolerance: 0,
          unit: "crates",
          hintLadder: [
            "Add the parts: 4 + 3 = 7 shares, so each share = 350 ÷ 7 = 50 crates.",
            "The 4-part barn starts with 4 × 50 = 200 crates.",
            "It donates 25%: keeps 75% of 200 = 0.75 × 200 = 150 crates."
          ],
          explanation: "7 shares of 50; larger barn = 200; keeps 75% → 0.75 × 200 = 150 crates."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Proportion Reach",
      prompt:
        "Stretch in a 3:2 ratio — reach high for the 'top of the apple tree' 3 times, then twist side to side toward the 'pumpkin patch' twice. Repeat the pattern 4 times, keeping the rhythm steady.",
      scienceTieIn:
        "Rhythmic stretching pumps more oxygen-rich blood to your muscles and brain, which sharpens focus for the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot a proportional relationship today — a price per item, a recipe, a fair split? Write the constant of proportionality (the amount per one) you noticed.",
      badge: { id: "g7-fall-harvest-proportion-pro", name: "Harvest Proportion Pro", emoji: "🍎" },
      estimatedMinutes: 7
    }
  }
};
