// Grade 6 Math — Fall Expedition, Week 4 (Ancient Civilizations), Day 3.
// Topic: number systems — place value, base-10 vs. other bases, and how
// ancient counting worked.

export const fallG6MathW4D3 = {
  id: "g6.fall.math.w4.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Math",
  topic: "Ancient number systems and place value",
  topicTag: "number-systems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.NS.B.3", "CCSS.6.NS.C.6"],
  hook: "The ancient Babylonians counted in 60s — which is why we still have 60 minutes in an hour. Today you compare number systems and see why place value is such a powerful invention.",
  miniLesson: [
    "Our system is base-10: each place is worth 10 times the one to its right (ones, tens, hundreds).",
    "Place value lets us write any number with just 10 digits — a huge leap over tally marks.",
    "Some ancient systems used other bases: the Babylonians used base-60, which still shapes our clocks (60 seconds, 60 minutes) and circles (360°)."
  ],
  workedExample: {
    prompt: "In base-10, what is the value of each digit in 482?",
    steps: [
      "The 2 is in the ones place: 2 × 1 = 2.",
      "The 8 is in the tens place: 8 × 10 = 80.",
      "The 4 is in the hundreds place: 4 × 100 = 400.",
      "Add them: 400 + 80 + 2 = 482."
    ],
    answer: "400 + 80 + 2 = 482"
  },
  items: [
    {
      id: "g6.fall.math.w4.d3.q1",
      type: "multiple_choice",
      stem: "In our base-10 system, each place is worth how many times the place to its right?",
      choices: ["2", "10", "5", "60"],
      answerIndex: 1,
      explanation: "Base-10 means each place is 10 times the one to its right.",
      hintLadder: [
        "'Base-10' is a strong hint.",
        "Ones, then tens, then hundreds — what's the jump each time?",
        "×10 each place."
      ]
    },
    {
      id: "g6.fall.math.w4.d3.q2",
      type: "numeric",
      stem: "In the number 3,705, what is the VALUE (not just the digit) of the 7?",
      answer: 700,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Find the 7's place.",
        "It's in the hundreds place.",
        "7 × 100 = 700."
      ],
      explanation: "The 7 is in the hundreds place: 7 × 100 = 700."
    },
    {
      id: "g6.fall.math.w4.d3.q3",
      type: "numeric",
      stem: "The Babylonians used base-60. How many minutes are in one hour — a leftover of their system?",
      answer: 60,
      tolerance: 0,
      unit: "minutes",
      hintLadder: [
        "Base-60 shaped our timekeeping.",
        "Think about a clock.",
        "60 minutes in an hour."
      ]
    },
    {
      id: "g6.fall.math.w4.d3.q4",
      type: "multiple_choice",
      stem: "Why is place value a more powerful way to write numbers than tally marks?",
      choices: [
        "Tally marks are illegal",
        "Place value only works for small numbers",
        "Tally marks use more colors",
        "Place value can write huge numbers compactly with just a few digits"
      ],
      answerIndex: 3,
      explanation: "Place value writes 1,000,000 in 7 digits; tallies would need a million marks.",
      hintLadder: [
        "Imagine tallying one million.",
        "How many marks would that take?",
        "Place value is far more compact."
      ],
      misconceptionsTargeted: ["digit-equals-value"]
    },
    {
      id: "g6.fall.math.w4.d3.q5",
      type: "short_answer",
      stem: "Explain why the digit 5 means different amounts in the numbers 50 and 500. Use the words 'place value.'",
      rubric: {
        level3: "Explains that the SAME digit's value depends on its place: 5 in the tens place = 50, in the hundreds place = 500.",
        level2: "Notes they're different but doesn't tie it clearly to place value.",
        level1: "Says they're the same or gives no place-value reasoning."
      },
      exemplar: "Because of place value, the 5 in 50 sits in the tens place (5 × 10 = 50), but the 5 in 500 sits in the hundreds place (5 × 100 = 500), so the same digit is worth ten times more.",
      hintLadder: [
        "Which place is the 5 in for each number?",
        "Tens vs. hundreds.",
        "Multiply the digit by its place value."
      ]
    }
  ],
  reflectionPrompt: "We still count time in 60s thanks to the Babylonians. Where else might an ancient counting habit be hiding in your day?",
  misconceptionBank: [
    {
      id: "digit-equals-value",
      label: "Thinks a digit's value is just the digit",
      description: "Reads the 5 in 500 as worth 5 rather than 500.",
      coachMove: "Point to the place: value = digit × place value. The 5 in 500 is 5 × 100."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why 60 Minutes?",
      prompt:
        "A clock has 60 minutes in an hour and a circle has 360 degrees — both come from an ancient people who counted in 60s instead of 10s. Who were they, and can you think of why 60 might be a handy number to count by?",
      answer:
        "The Babylonians counted in base-60. 60 is handy because it divides evenly by 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 — so you can split it lots of ways without fractions.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent Your Own Number System",
      challenge:
        "Like the Babylonians (base-60) or us (base-10), invent your own number system with its own base and symbols. Then show how you'd write a number in it.",
      steps: [
        "Pick a base (how many symbols before you start a new 'place') — try 5, 8, or 12.",
        "Design a unique symbol for each digit in your base.",
        "Write out how the place values grow (ones, then your-base, then base × base).",
        "Show a number from your day (like your age or house number) written in your system."
      ],
      deliverable: "A mini chart of your symbols plus one real number written in your invented system.",
      choiceBoard: [
        "Draw a symbol chart and write your age in your system.",
        "Make a 'decoder card' so a friend can translate base-10 into your base.",
        "Write a short legend explaining why an ancient people might have chosen your base."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Place Value Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w4.d3.arena1",
          type: "numeric",
          stem: "In the number 6,240, what is the VALUE (not just the digit) of the 6?",
          answer: 6000,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Which place is the 6 sitting in?",
            "It's the thousands place.",
            "6 × 1000 = 6000."
          ],
          explanation: "The 6 is in the thousands place: 6 × 1000 = 6000."
        },
        {
          id: "g6.fall.math.w4.d3.arena2",
          type: "multiple_choice",
          stem: "The Babylonians used base-60. In a base-60 system, how many times bigger is the second place than the first (ones) place?",
          choices: ["10 times", "100 times", "60 times", "6 times"],
          answerIndex: 2,
          explanation: "In base-60, each place is worth 60 times the place to its right — just like base-10 places are worth 10 times more.",
          hintLadder: [
            "In base-10, each place is ×10. What's the pattern?",
            "The base IS the jump between places.",
            "Base-60 means ×60 each place."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Count by Tens",
      prompt:
        "Stand up and do one arm-raise for each count as you count by 10s up to 100 (10, 20, 30...). Then sit and whisper-count back down by 10s. Feel how fast place value lets you reach 100!",
      scienceTieIn: "Rhythmic movement paired with counting helps your brain lock in number patterns by linking motion to memory.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Place value lets us write huge numbers with just 10 digits. What's the biggest number you used or saw today, and how many digits did it take?",
      badge: { id: "fall-place-value-pioneer", name: "Place Value Pioneer", emoji: "🔢" },
      estimatedMinutes: 7
    }
  }
};
