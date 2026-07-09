// Grade 7 Science — Fall Expedition, Week 3 (The Harvest of Numbers), Day 3.
// Topic: measurement, rates, and unit conversion applied to crop growth.
// Grade-7 lift: complex unit rates (with fractions/decimals), multi-step
// conversions, and comparing proportional growth rates.

export const fallG7ScienceW3D3 = {
  id: "g7.fall.sci.w3.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Science",
  topic: "Measuring growth — rates and units",
  topicTag: "rates-measurement",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.1", "NGSS.MS-LS1-5"],
  hook: "A plant that grows 2 cm a week and one that grows 2 cm a month tell very different stories — the rate is the story. Today you compute complex unit rates, convert across units, and prove which crop truly grows fastest.",
  miniLesson: [
    "A rate compares two quantities with different units; a unit rate gives the amount per ONE, like cm per 1 day. The word 'per' signals a rate.",
    "Complex unit rates can involve fractions or decimals: growing 3/4 cm in 1/2 day is a rate of (3/4) ÷ (1/2) = 1.5 cm per day.",
    "To compare growth fairly, convert everything to the same units first — then the bigger unit rate really is faster."
  ],
  workedExample: {
    prompt: "A bean plant grew 3/4 cm in 1/2 day. What is its growth rate in cm per day?",
    steps: [
      "Rate = growth ÷ time.",
      "(3/4 cm) ÷ (1/2 day) = 3/4 × 2/1.",
      "= 6/4 = 1.5 cm per day.",
      "The unit rate is 1.5 cm/day."
    ],
    answer: "1.5 cm per day"
  },
  items: [
    {
      id: "g7.fall.sci.w3.d3.q1",
      type: "numeric",
      stem: "A sunflower grew 4.5 cm in 3/4 of a week. What is its growth rate in cm per week?",
      answer: 6,
      tolerance: 0,
      unit: "cm/week",
      hintLadder: [
        "Rate = growth ÷ time.",
        "4.5 ÷ (3/4) is the same as 4.5 × 4/3.",
        "4.5 × 4/3 = 18/3 = 6 cm per week."
      ],
      explanation: "4.5 ÷ (3/4) = 4.5 × 4/3 = 6 cm/week."
    },
    {
      id: "g7.fall.sci.w3.d3.q2",
      type: "multiple_choice",
      stem: "Plant A grows 3.5 cm/week. Plant B grows 13 cm/month. Which grows FASTER? (Use 4 weeks = 1 month.)",
      choices: ["Plant B", "Plant A", "They grow the same", "You can't compare them"],
      answerIndex: 1,
      explanation: "Plant A: 3.5 cm/week × 4 = 14 cm/month, which beats Plant B's 13 cm/month.",
      hintLadder: [
        "Convert both to the same time unit (per month).",
        "Plant A: 3.5 × 4 weeks = ? cm/month.",
        "14 cm/month vs 13 cm/month — A is faster."
      ],
      misconceptionsTargeted: ["compares-rates-without-matching-units"]
    },
    {
      id: "g7.fall.sci.w3.d3.q3",
      type: "numeric",
      stem: "A cornstalk is 1.85 meters tall. Convert its height to centimeters. (1 m = 100 cm.)",
      answer: 185,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "1 m = 100 cm.",
        "Multiply meters by 100.",
        "1.85 × 100 = 185 cm."
      ],
      explanation: "1.85 × 100 = 185 cm."
    },
    {
      id: "g7.fall.sci.w3.d3.q4",
      type: "numeric",
      stem: "A pumpkin gained 2.1 kilograms in 6 weeks. What is its growth rate in GRAMS per week? (1 kg = 1000 g.)",
      answer: 350,
      tolerance: 0,
      unit: "g/week",
      hintLadder: [
        "First convert 2.1 kg to grams: × 1000.",
        "2.1 × 1000 = 2100 g total.",
        "Rate = 2100 g ÷ 6 weeks = 350 g/week."
      ],
      explanation: "2.1 kg = 2100 g; 2100 ÷ 6 = 350 g/week."
    },
    {
      id: "g7.fall.sci.w3.d3.q5",
      type: "short_answer",
      stem: "Two tomato plants: one grew 21 cm in 3.5 weeks, the other 27 cm in 4.5 weeks. Use unit rates to say which grew faster, and show your work.",
      rubric: {
        level3: "Computes both unit rates (21 ÷ 3.5 = 6 cm/week and 27 ÷ 4.5 = 6 cm/week), concludes they grew at the SAME rate, and shows the work.",
        level2: "Computes one rate correctly or reaches the right conclusion with weak justification.",
        level1: "Compares totals without unit rates, or a wrong conclusion."
      },
      exemplar: "First: 21 ÷ 3.5 = 6 cm/week. Second: 27 ÷ 4.5 = 6 cm/week. Both unit rates equal 6 cm/week, so the two plants actually grew at the same rate even though their totals and times differed.",
      hintLadder: [
        "Find each plant's cm-per-ONE-week.",
        "Divide growth by weeks for each (watch the decimals).",
        "Compare the two unit rates — they might tie."
      ]
    }
  ],
  reflectionPrompt: "Rates are everywhere — speed, prices, growth. What's a rate you noticed today, what were its two units, and what was the amount per one?",
  misconceptionBank: [
    {
      id: "compares-rates-without-matching-units",
      label: "Compares rates with different time units",
      description: "Says 13/month beats 3.5/week because 13 > 3.5, without matching units.",
      coachMove: "Always convert to the SAME time unit before comparing — then the bigger number really is faster."
    },
    {
      id: "forgets-multistep-conversion",
      label: "Stops after one conversion step",
      description: "Converts units OR divides for the rate, but not both in a multi-step problem.",
      coachMove: "Plan the steps first: convert units, THEN divide by time (or vice-versa) — a multi-step rate needs every step."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather have a plant that grows 4.5 cm every week or one that grows 17 cm every month? Convert both to the same time unit before you decide which actually grows faster. (Use 4 weeks = 1 month.)",
      answer:
        "4.5 cm/week × 4 = 18 cm/month, which beats 17 cm/month. So the 'per week' plant grows faster — matching units reveals the real winner.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Growth Tracker",
      challenge:
        "Design a tracker to measure how fast something grows or changes — a houseplant, your hair, a pile of fallen leaves. Plan how you'd record measurements and compute a unit rate, including at least one unit conversion.",
      steps: [
        "Pick something measurable and choose your unit (cm, grams, leaves).",
        "Design a tracker table with columns for time and amount.",
        "Fill in 3 example measurements (real or imagined), using decimals or fractions.",
        "Compute the unit rate (total change ÷ total time) and convert it to a second unit (e.g., cm/week → mm/day)."
      ],
      deliverable: "A growth-tracker table with 3+ measurements, a computed unit rate, and one unit conversion.",
      choiceBoard: [
        "Make a measurement table with a unit-rate calculation and one conversion.",
        "Draw a labeled diagram showing a plant's growth over 3 time steps with the rate labeled.",
        "Make a mini 'lab report' poster: what you measured, the rate, the converted rate, and what it means."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.sci.w3.d3.arena1",
          type: "numeric",
          stem: "A cornstalk grew 2.7 meters over 9 weeks. What is its growth rate in centimeters per week? (1 m = 100 cm.)",
          answer: 30,
          tolerance: 0,
          unit: "cm/week",
          hintLadder: [
            "First convert 2.7 m to centimeters: × 100.",
            "2.7 × 100 = 270 cm total.",
            "Rate = 270 cm ÷ 9 weeks = 30 cm/week."
          ],
          explanation: "2.7 m = 270 cm; 270 ÷ 9 = 30 cm/week."
        },
        {
          id: "g7.fall.sci.w3.d3.arena2",
          type: "short_answer",
          stem: "Pumpkin A gained 2.4 kg in 6 weeks. Pumpkin B gained 1.75 kg in 5 weeks. Use unit rates in grams per week to say which grew faster, and show your work. (1 kg = 1000 g.)",
          rubric: {
            level3: "Converts to grams and computes both unit rates (A = 2400 ÷ 6 = 400 g/week, B = 1750 ÷ 5 = 350 g/week) and concludes Pumpkin A grew faster, with work shown.",
            level2: "Finds one unit rate or reaches the right answer with weak work.",
            level1: "Compares totals without unit rates, forgets the conversion, or wrong conclusion."
          },
          exemplar: "Pumpkin A: 2.4 kg = 2400 g; 2400 ÷ 6 = 400 g/week. Pumpkin B: 1.75 kg = 1750 g; 1750 ÷ 5 = 350 g/week. 400 > 350, so Pumpkin A grew faster.",
          hintLadder: [
            "Convert both kilograms to grams first (× 1000).",
            "Divide each plant's grams by its weeks.",
            "Compare the two unit rates: 400 vs 350 g/week."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow Like a Plant",
      prompt:
        "Crouch down small like a seed, then slowly 'grow' to full stretch over 6 slow counts, reaching toward the sun. Repeat 4 times, getting a little taller each round.",
      scienceTieIn:
        "Stretching upward lengthens your spine and gets oxygen flowing — your body needs energy and resources to grow, just like the plants you measured.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Rates are everywhere — speed, prices, growth. What's a rate you noticed today, what were its two units, and what did one unit equal?",
      badge: { id: "g7-fall-harvest-rate-scientist", name: "Harvest Rate Scientist", emoji: "🌽" },
      estimatedMinutes: 7
    }
  }
};
