// Grade 7 Math — Fall Expedition, Week 1 (Back to Basics), Day 1.
// Grade 7 counterpart of g6.fall.math.w1.d1. Same day slot and "operations
// warm-up" topic, raised to Grade 7: integers/rationals and the order of
// operations to re-anchor after the summer before the Fall data work begins.

export const fallG7MathW1D1 = {
  id: "g7.fall.math.w1.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Integer and rational-number operations warm-up",
  topicTag: "place-value",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.NS.A.1", "CCSS.7.NS.A.2"],
  hook: "Fall is here. Before we budget a harvest and read data, let's re-sharpen the basics — but at grade-7 level: signed numbers, rationals, and the order of operations all working together.",
  miniLesson: [
    "A negative number moves the opposite direction on the number line. Adding a negative is the same as subtracting, and subtracting a negative is the same as adding: 5 − (−3) = 5 + 3 = 8.",
    "Signs follow rules under multiplication and division: same signs give a positive, different signs give a negative. So (−6)(−4) = 24 but (−6)(4) = −24.",
    "When an expression mixes operations, follow the order of operations (parentheses, exponents, ×/÷ left to right, then +/− left to right). Estimate first to catch a wrong sign or a slipped step."
  ],
  workedExample: {
    prompt: "A cold front dropped the temperature by 12°F in the morning, then it rose 5°F in the afternoon, starting from 3°F at dawn. Evaluate 3 + (−12) + 5, then find the total change from dawn.",
    steps: [
      "Work left to right: 3 + (−12) = −9.",
      "Then −9 + 5 = −4, so the ending temperature is −4°F.",
      "Total change from dawn = ending − start = −4 − 3 = −7.",
      "The day ended at −4°F, a net change of −7°F (7 degrees colder)."
    ],
    answer: "Ends at −4°F; net change of −7°F from dawn."
  },
  items: [
    {
      id: "g7.fall.math.w1.d1.q1",
      type: "numeric",
      stem: "Evaluate: −18 + 7 × (−3).",
      answer: -39,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Order of operations: do the multiplication before the addition.",
        "7 × (−3) = −21, so the expression is −18 + (−21).",
        "−18 + (−21) = −39."
      ],
      explanation: "Multiply first: 7 × (−3) = −21. Then −18 + (−21) = −39."
    },
    {
      id: "g7.fall.math.w1.d1.q2",
      type: "numeric",
      stem: "Evaluate: (−48) ÷ (−6) + 3.",
      answer: 11,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Divide before you add.",
        "Two negatives divided give a positive: (−48) ÷ (−6) = 8.",
        "8 + 3 = 11."
      ],
      explanation: "(−48) ÷ (−6) = 8 (same signs → positive), then 8 + 3 = 11."
    },
    {
      id: "g7.fall.math.w1.d1.q3",
      type: "multiple_choice",
      stem: "At a fall orchard, the morning temperature was −7°C and by noon it was 6°C. How much did the temperature RISE?",
      choices: ["1°C", "6°C", "13°C", "−13°C"],
      answerIndex: 2,
      explanation: "The rise is the difference: 6 − (−7) = 6 + 7 = 13°C.",
      hintLadder: [
        "The rise is the ending value minus the starting value.",
        "6 − (−7): subtracting a negative is the same as adding.",
        "6 + 7 = 13°C."
      ],
      misconceptionsTargeted: ["subtract-negative-as-negative"]
    },
    {
      id: "g7.fall.math.w1.d1.q4",
      type: "multiple_choice",
      stem: "Which expression correctly evaluates 20 − 4 × (−2) + 6 ÷ (−3)?",
      choices: [
        "20 − 4 × (−8) = 52",
        "20 − 8 + 6 = 18",
        "16 × (−2) + 6 ÷ (−3) = −34",
        "20 − (−8) + (−2) = 26"
      ],
      answerIndex: 3,
      explanation: "Do ×/÷ first: 4 × (−2) = −8 and 6 ÷ (−3) = −2. Then 20 − (−8) + (−2) = 20 + 8 − 2 = 26.",
      hintLadder: [
        "Handle both the multiplication and the division before any subtraction or addition.",
        "4 × (−2) = −8 and 6 ÷ (−3) = −2.",
        "20 − (−8) + (−2) = 20 + 8 − 2 = 26."
      ]
    },
    {
      id: "g7.fall.math.w1.d1.q5",
      type: "short_answer",
      stem: "Estimate the value of (−612) ÷ 29 by rounding to friendly numbers, then explain why an estimate with the correct SIGN is worth the few seconds before computing exactly.",
      rubric: {
        level3: "Rounds to about (−600) ÷ 30 = −20 (a negative near −20) AND explains that a quick estimate catches sign errors or big slips before the exact answer is trusted.",
        level2: "Gives a reasonable estimate (right size or right sign) OR explains the value of estimating, but not both.",
        level1: "Computes without estimating, gets the sign wrong, or gives no reasoning."
      },
      exemplar: "Round to (−600) ÷ 30 = −20. Because different signs make the answer negative, I already know a positive exact answer would be wrong — the estimate guards the sign and the size.",
      hintLadder: [
        "Round −612 to −600 and 29 to 30.",
        "Different signs mean the quotient is negative — about −20.",
        "How does knowing the sign ahead of time protect you from a careless mistake?"
      ]
    }
  ],
  reflectionPrompt: "Which integer rule felt rustiest after the summer — subtracting a negative, or tracking signs through multiplication and division? Name one you want more practice with this fall.",
  misconceptionBank: [
    {
      id: "subtract-negative-as-negative",
      label: "Treats subtracting a negative as staying negative",
      description: "Computes 6 − (−7) as −1 or −13 instead of adding, because two minus signs look confusing.",
      coachMove: "Anchor it on the number line: subtracting a negative moves RIGHT, so 6 − (−7) = 6 + 7 = 13. Two negatives in a row cancel to a plus."
    },
    {
      id: "ignores-order-of-operations",
      label: "Works strictly left to right, ignoring ×/÷ priority",
      description: "Evaluates −18 + 7 × (−3) as (−18 + 7) × (−3) instead of doing the multiplication first.",
      coachMove: "Have them underline every × and ÷ first and complete those before touching + or −."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Signed-Number Riddle",
      prompt:
        "I am an integer. When you add 9 to me you get −4. When you multiply me by −2 you get a positive number bigger than 20. What number am I?",
      answer: "−13 — because −13 + 9 = −4, and −13 × (−2) = 26, which is positive and bigger than 20.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frost Log Ledger",
      challenge:
        "Imagine you keep a fall weather ledger for a farm stand. Invent a week of temperature changes using positive AND negative numbers, then use all four operations on signed numbers to summarize the week.",
      steps: [
        "List a starting temperature and five daily changes, mixing rises (+) and drops (−).",
        "ADD the signed changes in order to find each day's temperature.",
        "MULTIPLY one drop by a number of days to model a repeated cold snap, and DIVIDE a total change by the number of days to get an average change.",
        "SUBTRACT the lowest day from the highest day to report the week's temperature range."
      ],
      deliverable: "A signed-number weather ledger showing one worked example of each of the four operations, with correct signs.",
      choiceBoard: [
        "Draw a number-line thermometer marking each day's temperature.",
        "Write the week as a signed-number story problem for a friend to solve.",
        "Build a table: day, change (with sign), running temperature."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Integer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w1.d1.arena1",
          type: "numeric",
          stem: "Evaluate: −7 − (−15) + (−4) × 2.",
          answer: 0,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Do the multiplication first: (−4) × 2.",
            "(−4) × 2 = −8, so the expression is −7 − (−15) + (−8).",
            "−7 + 15 − 8 = 0."
          ],
          explanation: "(−4) × 2 = −8. Then −7 − (−15) + (−8) = −7 + 15 − 8 = 0."
        },
        {
          id: "g7.fall.math.w1.d1.arena2",
          type: "short_answer",
          stem: "Estimate (−2,889) ÷ 31 by rounding, then explain how your estimate tells you an exact answer of −93 must be wrong.",
          rubric: {
            level3: "Rounds to about (−3,000) ÷ 30 = −100 AND explains that a real answer should be near −100, so −93 is close and −932 or a positive answer would be wrong — reasoning about size AND sign.",
            level2: "Gives a reasonable estimate OR reasons about reasonableness, but not both.",
            level1: "No usable estimate, wrong sign, or no reasoning."
          },
          exemplar: "Round to (−3,000) ÷ 30 = −100. A real answer should sit near −100, so −93 is reasonable; a positive answer or something like −932 would be off, since the estimate fixes both the sign and the size.",
          hintLadder: [
            "Round −2,889 to −3,000 and 31 to 30.",
            "Different signs make the quotient negative — about −100.",
            "Compare −93 to −100: is it close in size and the same sign?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Number-Line Leaf Rake",
      prompt:
        "Stand and treat the floor as a number line. Step RIGHT for each positive change and LEFT for each negative one: +3, −5, −2, +6, then freeze and read where you landed (+2). Repeat the count twice and feel your legs wake up.",
      scienceTieIn:
        "Bigger, directional movements pump more oxygen-rich blood to your brain and link the abstract number line to your body — a body-brain connection you'll meet again in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you see a negative number today — a temperature, a score change, an elevation? Write one and show one operation you could do with it.",
      badge: { id: "g7-fall-integer-ace", name: "Integer Ace", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
