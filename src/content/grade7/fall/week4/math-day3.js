// Grade 7 Math — Fall Expedition, Week 4 (Ancient Civilizations), Day 3.
// Topic: ancient number systems and place value, raised to base-60 proportional
// reasoning — converting between bases and using ratios/unit rates in time.

export const fallG7MathW4D3 = {
  id: "g7.fall.math.w4.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Math",
  topic: "Ancient number systems and place value",
  topicTag: "number-systems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.1", "CCSS.7.RP.A.3"],
  hook: "The Babylonians counted in 60s — which is why an hour has 60 minutes and a circle has 360°. Today you use PROPORTIONAL REASONING to convert between their base-60 world and our base-10 one.",
  miniLesson: [
    "In any base, each place is worth the base times the place to its right: base-10 places are ×10, base-60 places are ×60.",
    "To read a base-60 numeral, multiply each digit by its place value and add: a two-place base-60 number is (first digit × 60) + (second digit × 1).",
    "Because 60 and 360 come from base-60, we can use ratios and unit rates — like 60 minutes per hour, or 1° per (1/60) of a degree — to convert amounts proportionally."
  ],
  workedExample: {
    prompt: "The Babylonian numeral written as digits (2)(30) in base-60 means 2 sixties and 30 ones. What is it in base-10?",
    steps: [
      "First place is the sixties place: 2 × 60 = 120.",
      "Second place is the ones place: 30 × 1 = 30.",
      "Add the place values: 120 + 30 = 150.",
      "So base-60 (2)(30) equals 150 in base-10."
    ],
    answer: "2 × 60 + 30 = 150"
  },
  items: [
    {
      id: "g7.fall.math.w4.d3.q1",
      type: "multiple_choice",
      stem: "In a base-60 system, how many times bigger is the second place than the ones place?",
      choices: ["10 times", "60 times", "6 times", "100 times"],
      answerIndex: 1,
      explanation: "In base-b, each place is b times the one to its right, so base-60 places grow by ×60.",
      hintLadder: [
        "The base IS the jump between places.",
        "Base-10 jumps by 10 each place; base-60 by...?",
        "×60 each place."
      ]
    },
    {
      id: "g7.fall.math.w4.d3.q2",
      type: "numeric",
      stem: "A Babylonian base-60 numeral has digits (1)(15): one sixty and fifteen ones. What is its value in base-10?",
      answer: 75,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "First digit is in the sixties place, second in the ones place.",
        "Compute 1 × 60 and 15 × 1.",
        "60 + 15 = 75."
      ],
      explanation: "1 × 60 + 15 × 1 = 60 + 15 = 75."
    },
    {
      id: "g7.fall.math.w4.d3.q3",
      type: "numeric",
      stem: "Using the rate 60 minutes per hour, how many minutes are in 3.5 hours? (proportional reasoning)",
      answer: 210,
      tolerance: 0,
      unit: "minutes",
      hintLadder: [
        "The unit rate is 60 minutes for every 1 hour.",
        "Multiply the rate by the number of hours.",
        "60 × 3.5 = 210 minutes."
      ],
      explanation: "60 minutes/hour × 3.5 hours = 210 minutes."
    },
    {
      id: "g7.fall.math.w4.d3.q4",
      type: "multiple_choice",
      stem: "A full circle is 360°, a leftover of base-60. If a slice is 1/6 of the circle, how many degrees is it — and what proportion did you use?",
      choices: [
        "36°, using 360 ÷ 10",
        "6°, using 360 ÷ 60",
        "72°, using 360 ÷ 5",
        "60°, using 360 × (1/6)"
      ],
      answerIndex: 3,
      explanation: "One-sixth of 360° is 360 × 1/6 = 60°. The proportion is (part/whole) = (degrees/360).",
      hintLadder: [
        "A whole circle is 360°.",
        "Take one-sixth of 360.",
        "360 × 1/6 = 60°."
      ],
      misconceptionsTargeted: ["base-place-confusion"]
    },
    {
      id: "g7.fall.math.w4.d3.q5",
      type: "short_answer",
      stem: "Explain how to convert the base-60 numeral (2)(10) into base-10, then explain why base-60 uses the SAME place-value idea as our base-10 system. Use the phrase 'place value.'",
      rubric: {
        level3: "Correctly converts (2)(10) → 2 × 60 + 10 = 130 AND explains that both systems use place value, where each place is the base times the one to its right (×60 vs ×10).",
        level2: "Converts correctly OR explains the shared place-value idea, but not both clearly.",
        level1: "Incorrect conversion and no clear place-value reasoning."
      },
      exemplar: "The 2 is in the sixties place (2 × 60 = 120) and the 10 is in the ones place (10 × 1 = 10), so 120 + 10 = 130. Both systems use place value: each place equals the base times the place to its right — ×60 in base-60, ×10 in base-10 — so the same idea powers both.",
      hintLadder: [
        "Multiply each digit by its place value and add.",
        "2 × 60 + 10 × 1 = 130.",
        "Then say why base-60 and base-10 share the place-value rule (each place = base × next-right place)."
      ]
    }
  ],
  reflectionPrompt: "We still slice hours and circles by 60s thanks to the Babylonians. Where else did you use a rate or proportion today without noticing — speed, price, or time?",
  misconceptionBank: [
    {
      id: "base-place-confusion",
      label: "Confuses the base with the place value's growth",
      description: "Thinks a base-60 second place is 6× or 10× bigger, not 60×, or forgets each place multiplies by the base.",
      coachMove: "Anchor the rule: in base-b, place value = digit × b^(position). Have them rebuild the sixties place as 60¹ = 60."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why 60 Divides So Nicely",
      prompt:
        "The Babylonians counted in 60s — and 60 is special because it divides evenly by so many numbers. List all the whole numbers from 1 to 12 that divide 60 with no remainder. How many did you find, and why would that make 60 handy for splitting things fairly?",
      answer:
        "From 1–12, these divide 60 evenly: 1, 2, 3, 4, 5, 6, 10, 12 — that's 8 of them (only 7, 8, 9, 11 don't). So many divisors mean you can split 60 into halves, thirds, quarters, fifths, sixths, and more without fractions — great for trade, time, and angles.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Base-60 Converter Card",
      challenge:
        "Build a two-way converter that turns small base-60 numerals into base-10 and back, then test it on a real number from your day.",
      steps: [
        "Draw two 'places': a sixties place and a ones place.",
        "Write the rule: value = (first digit × 60) + (second digit × 1).",
        "Convert your age or house number FROM base-10 INTO base-60 digits.",
        "Convert one base-60 numeral back to base-10 to check your card works."
      ],
      deliverable: "A base-60 ↔ base-10 converter card showing one real number worked both directions.",
      choiceBoard: [
        "Make a paper converter card with the place-value rule.",
        "Design a 'clock puzzle' where minutes are written as base-60 numerals.",
        "Write a short legend on why base-60's many divisors helped ancient trade."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Place Value Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w4.d3.arena1",
          type: "numeric",
          stem: "Convert the base-60 numeral (3)(20) — three sixties and twenty ones — into base-10.",
          answer: 200,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Sixties place: 3 × 60. Ones place: 20 × 1.",
            "3 × 60 = 180, and 20 × 1 = 20.",
            "180 + 20 = 200."
          ],
          explanation: "3 × 60 + 20 × 1 = 180 + 20 = 200."
        },
        {
          id: "g7.fall.math.w4.d3.arena2",
          type: "numeric",
          stem: "A Babylonian water clock drips at a steady 45 drops per minute. Using proportional reasoning, how many drops fall in a quarter of an hour (15 minutes)?",
          answer: 675,
          tolerance: 0,
          unit: "drops",
          hintLadder: [
            "The unit rate is 45 drops for every 1 minute.",
            "A quarter hour is 15 minutes.",
            "45 × 15 = 675 drops."
          ],
          explanation: "45 drops/minute × 15 minutes = 675 drops."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Count by Sixties",
      prompt:
        "Stand and do one arm-raise for each count as you count by 12s to 60 (12, 24, 36, 48, 60) — five raises to reach a full 'Babylonian sixty.' Then sit and whisper-count back down. Feel how the divisors of 60 let you climb it different ways!",
      scienceTieIn: "Pairing rhythmic movement with counting links motion to memory, helping your brain lock in number patterns and multiples.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Base-60 still slices our hours and circles. What's one rate or proportion you used today (speed, price per item, minutes per task), and how did it help you?",
      badge: { id: "g7-fall-base-sixty-scholar", name: "Base-Sixty Scholar", emoji: "🕰️" },
      estimatedMinutes: 7
    }
  }
};
