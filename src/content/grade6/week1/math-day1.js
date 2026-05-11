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
  estimatedMinutes: 18,
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
      choices: ["1:2", "2:3", "3:4", "6:8"],
      answerIndex: 1,
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
        "10 pages per minute",
        "30 pages per minute",
        "3 pages per minute",
        "300 pages per minute"
      ],
      answerIndex: 2,
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
  ]
};

// Registry helpers moved to ../../index.js so adding a new mission is a
// single import line. Mission data stays here for readability.
