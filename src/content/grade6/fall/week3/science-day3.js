// Grade 6 Science — Fall Expedition, Week 3 (The Harvest of Numbers), Day 3.
// Topic: measurement, rates, and unit conversion applied to crop growth.

export const fallG6ScienceW3D3 = {
  id: "g6.fall.sci.w3.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Science",
  topic: "Measuring growth — rates and units",
  topicTag: "rates-measurement",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.6.RP.A.3.B", "NGSS.SEP.5"],
  hook: "A plant that grows 2 cm a week and one that grows 2 cm a month are very different — the rate is the story. Today you measure growth and compare rates.",
  miniLesson: [
    "A rate compares two different units, like centimeters PER week. The word 'per' signals a rate.",
    "A unit rate tells you the amount for exactly one of something: cm per 1 week.",
    "To compare growth fairly, put both on the same time unit, then compare the unit rates."
  ],
  workedExample: {
    prompt: "A bean plant grew 14 cm in 7 days. What is its growth rate per day?",
    steps: [
      "Rate = total growth ÷ total time.",
      "14 cm ÷ 7 days.",
      "= 2 cm per day.",
      "The unit rate is 2 cm/day."
    ],
    answer: "2 cm per day"
  },
  items: [
    {
      id: "g6.fall.sci.w3.d3.q1",
      type: "numeric",
      stem: "A sunflower grew 30 cm in 5 weeks. What is its growth rate in cm per week?",
      answer: 6,
      tolerance: 0,
      unit: "cm/week",
      hintLadder: [
        "Rate = growth ÷ time.",
        "30 ÷ 5.",
        "= 6 cm per week."
      ],
      explanation: "30 cm ÷ 5 weeks = 6 cm/week."
    },
    {
      id: "g6.fall.sci.w3.d3.q2",
      type: "multiple_choice",
      stem: "Plant A grows 3 cm/week. Plant B grows 10 cm/month. Which grows FASTER? (Use 4 weeks = 1 month.)",
      choices: [
        "Plant A",
        "Plant B",
        "They grow the same",
        "You can't compare them"
      ],
      answerIndex: 0,
      explanation: "Plant A: 3 cm/week × 4 = 12 cm/month, which beats Plant B's 10 cm/month.",
      hintLadder: [
        "Put both on the same time unit (per month).",
        "Plant A: 3 × 4 weeks = ? cm/month.",
        "12 cm/month vs 10 cm/month — A is faster."
      ],
      misconceptionsTargeted: ["compares-rates-without-matching-units"]
    },
    {
      id: "g6.fall.sci.w3.d3.q3",
      type: "numeric",
      stem: "Convert a growth of 1.5 meters into centimeters. (1 m = 100 cm.)",
      answer: 150,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "1 m = 100 cm.",
        "Multiply meters by 100.",
        "1.5 × 100 = 150 cm."
      ],
      explanation: "1.5 × 100 = 150 cm."
    },
    {
      id: "g6.fall.sci.w3.d3.q4",
      type: "numeric",
      stem: "A pumpkin gained 1,200 grams in 4 weeks. What is its growth rate in grams per week?",
      answer: 300,
      tolerance: 0,
      unit: "g/week",
      hintLadder: [
        "Rate = grams ÷ weeks.",
        "1,200 ÷ 4.",
        "= 300 g per week."
      ],
      explanation: "1,200 g ÷ 4 weeks = 300 g/week."
    },
    {
      id: "g6.fall.sci.w3.d3.q5",
      type: "short_answer",
      stem: "Two tomato plants: one grew 24 cm in 6 weeks, the other 15 cm in 3 weeks. Which grew faster, and how do you know?",
      rubric: {
        level3: "Computes both unit rates (4 cm/week and 5 cm/week) and correctly says the second is faster, with the comparison shown.",
        level2: "Gets one rate or the right answer with weak justification.",
        level1: "Compares totals without using rates, or wrong conclusion."
      },
      exemplar: "First: 24 ÷ 6 = 4 cm/week. Second: 15 ÷ 3 = 5 cm/week. The second plant grew faster because 5 cm/week beats 4 cm/week.",
      hintLadder: [
        "Find each plant's cm-per-week.",
        "Divide growth by weeks for each.",
        "Compare the two unit rates."
      ]
    }
  ],
  reflectionPrompt: "Rates are everywhere — speed, prices, growth. What's a rate you noticed today, and what were its two units?",
  misconceptionBank: [
    {
      id: "compares-rates-without-matching-units",
      label: "Compares rates with different time units",
      description: "Says 10/month beats 3/week because 10 > 3, without matching units.",
      coachMove: "Always convert to the SAME time unit before comparing — then the bigger number really is faster."
    }
  ]
};
