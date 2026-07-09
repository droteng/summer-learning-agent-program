// Fully authored Grade 6 Math mission — Week 1 (Explorer Mode), Day 1.
//
// Authoring notes:
//   - Reading level targets Grade 5–6 so the math is the challenge, not the text.
//   - Items mix multiple-choice, numeric, and short-answer so the assessment
//     agent can grade most of them without an LLM call.
//   - Each item has a hint ladder and an exemplar so the deterministic mock
//     provider can give useful feedback when no API key is present.
//   - misconceptions[] is what tutoring agents target when a child is stuck.

export const grade6MathWeek1Day1 = {
  id: "g6.math.w1.d1",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Ratio reasoning warm-up",
  topicTag: "ratios",
  estimatedMinutes: 60, // full Daily Hour (core ~18 + warm-up/lab/arena/move/reflect)
  standardsRefs: ["CCSS.6.RP.A.1", "CCSS.6.RP.A.2"],
  hook: "Your summer is full of numbers. How many bike rides equal one movie night? Today you compare amounts using ratios.",
  keyTerms: [
    { term: "Ratio", definition: "A way to compare two amounts, like 3:2 or 3 to 2." },
    { term: "Unit rate", definition: "How much of one amount you get per one of another (miles per hour)." },
    { term: "Equivalent ratios", definition: "Ratios that stay equal when both numbers scale by the same factor." }
  ],
  miniLesson: [
    "A ratio compares two amounts. We can write it as 3:2, as 3 to 2, or as the fraction 3/2.",
    "Ratios stay equal when you multiply or divide both numbers by the same value, just like equivalent fractions.",
    "A unit rate tells you how much of one amount you get for one of the other. Miles per hour and pages per minute are unit rates."
  ],
  workedExample: {
    prompt: "A trail mix recipe uses 2 cups of oats for every 3 cups of fruit. How many cups of oats are needed for 12 cups of fruit?",
    steps: [
      "Write the ratio of oats to fruit as 2:3.",
      "Find the multiplier that turns 3 into 12 — that is 4.",
      "Multiply the oats side by the same multiplier: 2 × 4 = 8.",
      "Check by writing the new ratio 8:12 and dividing both sides by 4 — you should get back to 2:3."
    ],
    answer: "8 cups of oats."
  },
  items: [
    {
      id: "g6.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "Which ratio is equivalent to 4:6?",
      choices: ["1:2", "6:8", "3:4", "2:3"],
      answerIndex: 3,
      explanation: "Divide both 4 and 6 by their common factor 2 to get 2:3.",
      hintLadder: [
        "What number divides both 4 and 6 evenly?",
        "Try dividing each side by 2.",
        "4 ÷ 2 = 2 and 6 ÷ 2 = 3, so the simplified ratio is 2:3."
      ],
      misconceptionsTargeted: ["adds-the-same-number", "simplifies-only-one-side"]
    },
    {
      id: "g6.math.w1.d1.q2",
      type: "numeric",
      stem: "A bike trip uses 5 miles of trail for every 2 water-bottle stops. At that pace, how many miles correspond to 8 water-bottle stops?",
      answer: 20,
      tolerance: 0,
      unit: "miles",
      hintLadder: [
        "What is the ratio of miles to stops?",
        "How do you turn 2 stops into 8 stops?",
        "Multiply the miles side by the same factor."
      ],
      explanation: "5 miles : 2 stops scales by 4 → 20 miles : 8 stops."
    },
    {
      id: "g6.math.w1.d1.q3",
      type: "multiple_choice",
      stem: "A reader finishes 30 pages in 10 minutes. Which is the unit rate?",
      choices: [
        "3 pages per minute",
        "30 pages per minute",
        "10 pages per minute",
        "300 pages per minute"
      ],
      answerIndex: 0,
      explanation: "Divide pages by minutes: 30 ÷ 10 = 3 pages per minute.",
      hintLadder: [
        "A unit rate is how much you get for one of the other amount.",
        "Divide pages by minutes.",
        "30 ÷ 10 = 3 pages per minute."
      ],
      misconceptionsTargeted: ["divides-wrong-direction"]
    },
    {
      id: "g6.math.w1.d1.q4",
      type: "numeric",
      stem: "A camp pays out 7 camp coins for every 5 missions completed. How many camp coins for 20 missions?",
      answer: 28,
      tolerance: 0,
      unit: "camp coins",
      hintLadder: [
        "What is the multiplier from 5 to 20?",
        "Apply the same multiplier to 7.",
        "7 × 4 = 28 camp coins."
      ],
      explanation: "20 ÷ 5 = 4. Multiply 7 by 4 to get 28."
    },
    {
      id: "g6.math.w1.d1.q5",
      type: "short_answer",
      stem: "Explain in one or two sentences how you know that 6:9 and 2:3 are equivalent ratios.",
      rubric: {
        level3: "Mentions that both numbers can be divided by 3 and shows the simplified pair 2:3.",
        level2: "Says they are equivalent without naming the common factor.",
        level1: "Restates the ratios without explaining."
      },
      exemplar: "Both 6 and 9 are divisible by 3. Dividing each gives 2 and 3, so 6:9 simplifies to 2:3.",
      hintLadder: [
        "What number divides both 6 and 9?",
        "Show what 6 ÷ 3 and 9 ÷ 3 are.",
        "State that the simplified ratio is 2:3."
      ]
    }
  ],
  stretch: {
    stem: "Camp Coins reward 7 coins for every 5 missions. A child wants to earn at least 50 coins. What is the smallest number of missions they must complete? Show your reasoning.",
    answer: 36,
    explanation: "Each mission earns 7/5 = 1.4 coins. To pass 50 coins: 50 ÷ 1.4 ≈ 35.71. Round up to 36."
  },
  reflectionPrompt: "Today you compared amounts using ratios. Where else in your day do you see ratios you could write down?",
  misconceptionBank: [
    {
      id: "adds-the-same-number",
      label: "Adds instead of multiplies",
      description: "Adds the same number to both sides of a ratio (4:6 → 5:7) instead of multiplying.",
      coachMove: "Show that adding 1 to both sides changes the ratio. Multiplying does not."
    },
    {
      id: "simplifies-only-one-side",
      label: "Simplifies only one side",
      description: "Divides one number of the ratio but not the other.",
      coachMove: "Stress that ratios are like fractions — both top and bottom must change together."
    },
    {
      id: "divides-wrong-direction",
      label: "Divides the wrong way for unit rate",
      description: "Computes minutes per page instead of pages per minute.",
      coachMove: "Ask: which amount do you want as one? That goes on the bottom."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather get 3 cookies every day, or 10 cookies every 3 days? Think about the ratio of cookies to days before you answer — then explain which is actually more per day!",
      answer:
        "3 cookies/day = 3 per day. 10 cookies per 3 days ≈ 3.33 per day, so the 10-per-3-days deal is slightly more. Either way, you just compared two ratios!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Squad Snack",
      challenge:
        "Invent your own trail-mix or smoothie recipe using a ratio (like 2 scoops oats : 3 scoops fruit). Then scale it up to feed your whole squad of 4 — keep the ratio the same!",
      materials: ["Paper & markers, OR a device to type/draw on"],
      steps: [
        "Pick two ingredients and choose a ratio between them.",
        "Draw or write your recipe card with the ratio shown.",
        "Scale every ingredient by the same number to feed 4 people.",
        "Double-check: does your scaled-up recipe reduce back to your original ratio?"
      ],
      deliverable: "A recipe card showing your original ratio and the scaled-up version.",
      choiceBoard: [
        "Make a recipe card (draw it or type it).",
        "Make a 'ratio poster' showing 3 real ratios you find at home.",
        "Make a 4-panel comic where a character scales a recipe up for a party."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ratio Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.math.w1.d1.arena1",
          type: "numeric",
          stem: "A paint mix is 5 parts blue to 2 parts white. To make 35 parts of blue, how many parts of white do you need?",
          answer: 14,
          tolerance: 0,
          unit: "parts",
          hintLadder: [
            "Blue went from 5 to 35 — times what?",
            "35 ÷ 5 = 7, so scale white by 7.",
            "2 × 7 = 14 parts white."
          ],
          explanation: "Scale by 7: 2 × 7 = 14 parts white."
        },
        {
          id: "g6.math.w1.d1.arena2",
          type: "short_answer",
          stem: "A cheetah runs 30 meters in 2 seconds. A horse runs 60 meters in 5 seconds. Use unit rates to say which is faster, and show your work.",
          rubric: {
            level3: "Computes both unit rates (cheetah 15 m/s, horse 12 m/s) and concludes the cheetah is faster, with work shown.",
            level2: "Finds one unit rate or reaches the right answer with weak work.",
            level1: "Compares totals without unit rates or wrong conclusion."
          },
          exemplar: "Cheetah: 30 ÷ 2 = 15 m/s. Horse: 60 ÷ 5 = 12 m/s. 15 > 12, so the cheetah is faster.",
          hintLadder: [
            "Find each animal's meters per ONE second.",
            "Divide distance by time for each.",
            "Compare the two unit rates."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Ratio Jumping Jacks",
      prompt:
        "Do jumping jacks in a 2:1 ratio — 2 fast jacks, then 1 slow jack, and repeat that pattern 5 times. Notice how your heart speeds up!",
      scienceTieIn:
        "Your heart is pumping faster to deliver more oxygen to your muscles — you'll explore exactly how in this week's science quest.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot a ratio in real life today — in a recipe, a game, a price, or a score? Write one you noticed.",
      badge: { id: "ratio-ranger", name: "Ratio Ranger", emoji: "🧮" },
      estimatedMinutes: 7
    }
  }
};

// Registry helpers moved to ../../index.js so adding a new mission is a
// single import line. Mission data stays here for readability.
