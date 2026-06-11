// Grade 6 Math — Fall Expedition, Week 1 (Back to Basics), Day 1.
// Topic: place value + whole-number operations warm-up to re-anchor after
// the summer break before the Fall data + harvest-budget work begins.

export const fallG6MathW1D1 = {
  id: "g6.fall.math.w1.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Place value and operations warm-up",
  topicTag: "place-value",
  estimatedMinutes: 16,
  standardsRefs: ["CCSS.6.NS.B.2", "CCSS.6.NS.B.3"],
  hook: "Fall is here. Before we budget a harvest and read data, let's re-sharpen the basics: place value and the four operations.",
  miniLesson: [
    "Each digit's value depends on its place: in 4,062 the 4 means 4,000 and the 6 means 60.",
    "Line up place values when you add or subtract. Keep ones under ones, tens under tens.",
    "Multiplication is repeated addition; division splits a total into equal groups. Estimate first to catch big mistakes."
  ],
  workedExample: {
    prompt: "A farm stand sold 1,248 apples in September and 976 in October. How many in total, and how many more in September?",
    steps: [
      "Add for the total: 1,248 + 976. Line up place values.",
      "1,248 + 976 = 2,224 apples total.",
      "Subtract for the difference: 1,248 − 976 = 272.",
      "September sold 272 more apples than October."
    ],
    answer: "2,224 total; 272 more in September."
  },
  items: [
    {
      id: "g6.fall.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "In the number 7,304, what is the value of the digit 3?",
      choices: ["3", "30", "300", "3,000"],
      answerIndex: 2,
      explanation: "The 3 is in the hundreds place, so its value is 300.",
      hintLadder: [
        "Name the place each digit sits in.",
        "The 3 is third from the right.",
        "Third place from the right is hundreds."
      ]
    },
    {
      id: "g6.fall.math.w1.d1.q2",
      type: "numeric",
      stem: "Add: 2,506 + 1,847.",
      answer: 4353,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Line up the place values.",
        "Add ones, then tens, then hundreds, carrying when needed.",
        "2,506 + 1,847 = 4,353."
      ],
      explanation: "2,506 + 1,847 = 4,353."
    },
    {
      id: "g6.fall.math.w1.d1.q3",
      type: "numeric",
      stem: "A crate holds 24 pumpkins. How many pumpkins are in 16 crates?",
      answer: 384,
      tolerance: 0,
      unit: "pumpkins",
      hintLadder: [
        "This is multiplication: 24 × 16.",
        "Break it up: 24 × 10 = 240 and 24 × 6 = 144.",
        "240 + 144 = 384."
      ],
      explanation: "24 × 16 = 384 pumpkins."
    },
    {
      id: "g6.fall.math.w1.d1.q4",
      type: "numeric",
      stem: "180 ears of corn are shared equally into 12 baskets. How many in each basket?",
      answer: 15,
      tolerance: 0,
      unit: "ears",
      hintLadder: [
        "This is division: 180 ÷ 12.",
        "Think: 12 × what gets close to 180?",
        "12 × 15 = 180, so each basket holds 15."
      ],
      explanation: "180 ÷ 12 = 15 ears per basket."
    },
    {
      id: "g6.fall.math.w1.d1.q5",
      type: "short_answer",
      stem: "Estimate 612 × 49 to the nearest thousand, then explain why estimating first is useful.",
      rubric: {
        level3: "Rounds to about 600 × 50 = 30,000 AND explains estimation catches large errors / checks reasonableness.",
        level2: "Gives a reasonable estimate OR explains the value of estimating, but not both.",
        level1: "Computes exactly without estimating, or gives no reasoning."
      },
      exemplar: "Round to 600 × 50 = 30,000. Estimating first means if my exact answer is wildly different, I know I made a mistake.",
      hintLadder: [
        "Round each number to a friendly value.",
        "600 × 50 is easy to multiply.",
        "Why might a quick estimate be worth the few seconds?"
      ]
    }
  ],
  reflectionPrompt: "Which operation felt rustiest after the summer — add, subtract, multiply, or divide? Name one you want more practice with this fall.",
  misconceptionBank: [
    {
      id: "place-value-misalignment",
      label: "Misaligns place values when adding",
      description: "Stacks numbers by their left edge instead of by place value.",
      coachMove: "Use grid paper or draw columns labeled ones/tens/hundreds so each digit lands in the right column."
    }
  ]
};
