// Grade 5 Math — Fall Expedition, Week 4 (Ancient Civilizations), Day 3.
// Topic: number systems — place value and how ancient counting worked.
// Grade-5 counterpart of g6.fall.math.w4.d3, using whole-number place value.

export const fallG5MathW4D3 = {
  id: "g5.fall.math.w4.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Math",
  topic: "Ancient number systems and place value",
  topicTag: "number-systems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.A.1", "CCSS.5.NBT.A.2"],
  hook: "The ancient Babylonians counted in 60s — that is why we still have 60 minutes in an hour! Today you explore place value and see why it is such a powerful invention.",
  miniLesson: [
    "Our system is base-10: each place is worth 10 times the place to its right (ones, tens, hundreds, thousands).",
    "Place value lets us write ANY number using just 10 digits (0-9). That is a huge upgrade from tally marks.",
    "The Babylonians counted by 60s instead of 10s. That habit is still with us: 60 seconds in a minute and 60 minutes in an hour."
  ],
  workedExample: {
    prompt: "In the number 482, what is each digit worth?",
    steps: [
      "The 2 is in the ones place: 2 × 1 = 2.",
      "The 8 is in the tens place: 8 × 10 = 80.",
      "The 4 is in the hundreds place: 4 × 100 = 400.",
      "Add them up: 400 + 80 + 2 = 482."
    ],
    answer: "400 + 80 + 2 = 482"
  },
  items: [
    {
      id: "g5.fall.math.w4.d3.q1",
      type: "multiple_choice",
      stem: "In our base-10 system, each place is worth how many times the place to its right?",
      choices: ["2", "5", "10", "60"],
      answerIndex: 2,
      explanation: "Base-10 means each place is 10 times the one to its right.",
      hintLadder: [
        "'Base-10' is a big hint.",
        "Ones, then tens, then hundreds — what is the jump each time?",
        "Times 10 each place."
      ]
    },
    {
      id: "g5.fall.math.w4.d3.q2",
      type: "numeric",
      stem: "In the number 3,705, what is the VALUE (not just the digit) of the 7?",
      answer: 700,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Find the 7's place.",
        "It is in the hundreds place.",
        "7 × 100 = 700."
      ],
      explanation: "The 7 is in the hundreds place: 7 × 100 = 700."
    },
    {
      id: "g5.fall.math.w4.d3.q3",
      type: "numeric",
      stem: "The Babylonians counted in 60s. How many minutes are in one hour — a leftover of their system?",
      answer: 60,
      tolerance: 0,
      unit: "minutes",
      hintLadder: [
        "Their counting shaped how we tell time.",
        "Think about a clock.",
        "60 minutes in an hour."
      ],
      explanation: "One hour has 60 minutes, a leftover of the Babylonian base-60 counting."
    },
    {
      id: "g5.fall.math.w4.d3.q4",
      type: "multiple_choice",
      stem: "Why is place value a better way to write numbers than tally marks?",
      choices: [
        "Place value can write very big numbers with just a few digits",
        "Tally marks are not allowed",
        "Tally marks use more colors",
        "Place value only works for small numbers"
      ],
      answerIndex: 0,
      explanation: "Place value writes 1,000 with just 4 digits; tally marks would need 1,000 marks.",
      hintLadder: [
        "Imagine tallying one thousand.",
        "How many marks would that take?",
        "Place value is much shorter."
      ],
      misconceptionsTargeted: ["digit-equals-value"]
    },
    {
      id: "g5.fall.math.w4.d3.q5",
      type: "short_answer",
      stem: "Explain why the digit 5 stands for a different amount in the numbers 50 and 500. Use the words 'place value.'",
      rubric: {
        level3: "Explains that the same digit's value depends on its place: the 5 in 50 is in the tens place (50), and the 5 in 500 is in the hundreds place (500).",
        level2: "Notes they are different but does not clearly tie it to place value.",
        level1: "Says they are the same or gives no place-value reasoning."
      },
      exemplar: "Because of place value, the 5 in 50 is in the tens place (5 × 10 = 50), but the 5 in 500 is in the hundreds place (5 × 100 = 500), so the same digit is worth ten times more.",
      hintLadder: [
        "Which place is the 5 in for each number?",
        "Tens versus hundreds.",
        "Multiply the digit by its place value."
      ]
    }
  ],
  reflectionPrompt: "We still count time in 60s because of the Babylonians. Where else might an old counting habit be hiding in your day?",
  misconceptionBank: [
    {
      id: "digit-equals-value",
      label: "Thinks a digit's value is just the digit",
      description: "Reads the 5 in 500 as worth 5 instead of 500.",
      coachMove: "Point to the place: value = digit × place value. The 5 in 500 is 5 × 100 = 500."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why 60 Minutes?",
      prompt:
        "A clock has 60 minutes in an hour, and it comes from an ancient people who counted in 60s instead of 10s. Who were they, and why might 60 be a handy number to count by?",
      answer:
        "The Babylonians counted in 60s. 60 is handy because it splits evenly into halves, thirds, quarters, fifths, and sixths — so you can share it lots of ways without leftovers.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent Your Own Number Symbols",
      challenge:
        "Design your own set of number symbols for the digits 0 through 9, then use them to write real numbers from your day.",
      steps: [
        "Draw a brand-new symbol for each digit from 0 to 9.",
        "Make a key that matches each symbol to its number.",
        "Write your age using your symbols.",
        "Write your house number or a phone number using your symbols too."
      ],
      deliverable: "A key of 10 invented digit symbols plus 2 real numbers written in your system.",
      choiceBoard: [
        "Draw the symbol key and write your age in it.",
        "Make a 'decoder card' so a friend can turn normal numbers into your symbols.",
        "Write a short number riddle for a friend using only your symbols."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Place Value Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w4.d3.arena1",
          type: "numeric",
          stem: "In the number 6,240, what is the VALUE (not just the digit) of the 6?",
          answer: 6000,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Which place is the 6 sitting in?",
            "It is the thousands place.",
            "6 × 1000 = 6000."
          ],
          explanation: "The 6 is in the thousands place: 6 × 1000 = 6000."
        },
        {
          id: "g5.fall.math.w4.d3.arena2",
          type: "numeric",
          stem: "Write the number that has 4 hundreds, 0 tens, and 9 ones.",
          answer: 409,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Start with the hundreds: 4 in the hundreds place.",
            "0 tens means a 0 in the tens place.",
            "4 hundreds, 0 tens, 9 ones = 409."
          ],
          explanation: "4 hundreds (400) + 0 tens (0) + 9 ones (9) = 409."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Count by Tens",
      prompt:
        "Stand up and do one arm-raise for each count as you count by 10s up to 100 (10, 20, 30...). Then sit and whisper-count back down by 10s. Feel how fast place value gets you to 100!",
      scienceTieIn: "Moving in rhythm while you count helps your brain lock in number patterns by linking motion to memory.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Place value lets us write huge numbers with just 10 digits. What is the biggest number you saw or used today, and how many digits did it have?",
      badge: { id: "g5-fall-place-value-explorer", name: "Place Value Explorer", emoji: "🔢" },
      estimatedMinutes: 7
    }
  }
};
