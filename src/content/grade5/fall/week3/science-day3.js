// Grade 5 Science — Fall Expedition, Week 3 (The Harvest of Numbers), Day 3.
// Topic: measuring growth — rates and units applied to crop growth (Grade 5
// depth — whole-number division, simple unit conversion, "per" as a rate).

export const fallG5ScienceW3D3 = {
  id: "g5.fall.sci.w3.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Science",
  topic: "Measuring growth — rates and units",
  topicTag: "rates-measurement",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.A.1", "NGSS.SEP.5"],
  hook: "A plant that grows 2 cm a week and one that grows 2 cm a month are very different — the RATE is the story. Today you measure growth and compare rates.",
  miniLesson: [
    "A rate tells you how much happens in a set amount of time, like centimeters PER week. The word 'per' means 'for each.'",
    "To find a rate, divide the total growth by the total time: total ÷ time.",
    "To compare two plants fairly, put both on the same time unit (like per week), then the bigger number really is faster."
  ],
  workedExample: {
    prompt: "A bean plant grew 12 cm in 6 days. What is its growth rate per day?",
    steps: [
      "Rate = total growth ÷ total time.",
      "12 cm ÷ 6 days.",
      "= 2 cm per day.",
      "So it grows about 2 cm each day."
    ],
    answer: "2 cm per day"
  },
  items: [
    {
      id: "g5.fall.sci.w3.d3.q1",
      type: "numeric",
      stem: "A sunflower grew 20 cm in 5 weeks. What is its growth rate in cm per week?",
      answer: 4,
      tolerance: 0,
      unit: "cm/week",
      hintLadder: [
        "Rate = total growth ÷ time.",
        "20 ÷ 5.",
        "= 4 cm per week."
      ],
      explanation: "20 cm ÷ 5 weeks = 4 cm/week."
    },
    {
      id: "g5.fall.sci.w3.d3.q2",
      type: "multiple_choice",
      stem: "Plant A grows 3 cm each week. Plant B grows 8 cm each month. Which grows FASTER? (Use 4 weeks = 1 month.)",
      choices: [
        "Plant A",
        "Plant B",
        "They grow the same",
        "You can't compare them"
      ],
      answerIndex: 0,
      explanation: "Plant A: 3 cm/week × 4 = 12 cm/month, which beats Plant B's 8 cm/month.",
      hintLadder: [
        "Put both on the same time unit (per month).",
        "Plant A: 3 × 4 weeks = ? cm in a month.",
        "12 cm/month beats 8 cm/month, so A is faster."
      ],
      misconceptionsTargeted: ["compares-rates-without-matching-units"]
    },
    {
      id: "g5.fall.sci.w3.d3.q3",
      type: "numeric",
      stem: "Convert a growth of 2 meters into centimeters. (1 m = 100 cm.)",
      answer: 200,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "1 m = 100 cm.",
        "Multiply the meters by 100.",
        "2 × 100 = 200 cm."
      ],
      explanation: "2 × 100 = 200 cm."
    },
    {
      id: "g5.fall.sci.w3.d3.q4",
      type: "numeric",
      stem: "A pumpkin gained 800 grams in 4 weeks. What is its growth rate in grams per week?",
      answer: 200,
      tolerance: 0,
      unit: "g/week",
      hintLadder: [
        "Rate = grams ÷ weeks.",
        "800 ÷ 4.",
        "= 200 g per week."
      ],
      explanation: "800 g ÷ 4 weeks = 200 g/week."
    },
    {
      id: "g5.fall.sci.w3.d3.q5",
      type: "short_answer",
      stem: "Two tomato plants: one grew 12 cm in 4 weeks, the other grew 15 cm in 3 weeks. Which grew faster, and how do you know?",
      rubric: {
        level3: "Finds both rates (3 cm/week and 5 cm/week) and correctly says the second grew faster, showing the division.",
        level2: "Gets one rate or the right answer with weak explanation.",
        level1: "Compares totals without using rates, or wrong conclusion."
      },
      exemplar: "First: 12 ÷ 4 = 3 cm/week. Second: 15 ÷ 3 = 5 cm/week. The second plant grew faster because 5 cm/week beats 3 cm/week.",
      hintLadder: [
        "Find each plant's cm-per-week.",
        "Divide growth by weeks for each plant.",
        "Compare the two per-week numbers."
      ]
    }
  ],
  reflectionPrompt: "Rates are everywhere — speed, prices, growth. What's a rate you noticed today, and what two things did it compare?",
  misconceptionBank: [
    {
      id: "compares-rates-without-matching-units",
      label: "Compares rates with different time units",
      description: "Says 8/month beats 3/week because 8 > 3, without matching the time units.",
      coachMove: "Always change both to the SAME time unit before comparing — then the bigger number really is faster."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather have a plant that grows 5 cm every week, or one that grows 16 cm every month? Change both to the same time unit before you decide which grows faster! (Use 4 weeks = 1 month.)",
      answer:
        "5 cm/week × 4 = 20 cm/month, which beats 16 cm/month. So the 'per week' plant grows faster — matching units reveals the real winner.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Growth Tracker",
      challenge:
        "Design a simple chart to measure how fast something grows or changes — a houseplant, your hair, a pile of fallen leaves, or a sunflower from a story. Plan how you'd record measurements and find a per-week rate.",
      steps: [
        "Pick something you can measure and choose your unit (cm, grams, leaves).",
        "Design a tracker table with columns for time and amount.",
        "Fill in 3 example measurements (real or imagined).",
        "Find the rate: total change ÷ total time."
      ],
      deliverable: "A growth-tracker table with at least 3 measurements and a computed per-week (or per-day) rate.",
      choiceBoard: [
        "Make a measurement table with a rate calculation.",
        "Draw a labeled diagram showing a plant's growth over 3 time steps.",
        "Make a mini 'lab report' poster: what you measured, the rate, and what it means."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.sci.w3.d3.arena1",
          type: "numeric",
          stem: "A cornstalk grew 2 meters over 5 weeks. What is its growth rate in centimeters per week? (1 m = 100 cm.)",
          answer: 40,
          tolerance: 0,
          unit: "cm/week",
          hintLadder: [
            "First change 2 m to centimeters: × 100.",
            "2 × 100 = 200 cm total.",
            "Rate = 200 cm ÷ 5 weeks = 40 cm/week."
          ],
          explanation: "2 m = 200 cm. 200 ÷ 5 = 40 cm/week."
        },
        {
          id: "g5.fall.sci.w3.d3.arena2",
          type: "short_answer",
          stem: "Pumpkin A gained 900 g in 3 weeks. Pumpkin B gained 800 g in 4 weeks. Use per-week rates to say which grew faster, and show your work.",
          rubric: {
            level3: "Finds both rates (A = 300 g/week, B = 200 g/week) and concludes Pumpkin A grew faster, with work shown.",
            level2: "Finds one rate or reaches the right answer with weak work.",
            level1: "Compares totals without rates, or wrong conclusion."
          },
          exemplar: "Pumpkin A: 900 ÷ 3 = 300 g/week. Pumpkin B: 800 ÷ 4 = 200 g/week. 300 > 200, so Pumpkin A grew faster.",
          hintLadder: [
            "Find each pumpkin's grams per ONE week.",
            "Divide grams by weeks for each.",
            "Compare the two per-week numbers."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow Like a Plant",
      prompt:
        "Crouch down small like a seed, then slowly 'grow' up to a full stretch over 5 slow counts, reaching toward the sun. Repeat 4 times, getting a little taller each round.",
      scienceTieIn:
        "Stretching upward lengthens your spine and gets oxygen flowing — your own body needs energy and resources to grow, just like the plants you measured.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Rates are everywhere — speed, prices, growth. What's a rate you noticed today, and what two things did it compare?",
      badge: { id: "g5-fall-harvest-rate-measurer", name: "Harvest Rate Measurer", emoji: "🌽" },
      estimatedMinutes: 7
    }
  }
};
