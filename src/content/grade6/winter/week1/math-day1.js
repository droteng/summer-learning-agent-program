// Grade 6 Math — Winter Expedition, Week 1 (Winter Warm-Up), Day 1.
// Topic: reviewing place value & rounding using winter snowfall data.

export const winterG6MathW1D1 = {
  id: "g6.winter.math.w1.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Place value and rounding with winter snowfall data",
  topicTag: "place-value-rounding",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.NS.B.3", "CCSS.5.NBT.A.4"],
  hook: "A snowy season buries towns under thousands of centimeters of snowfall. To compare, report, and estimate those totals, you need place value and rounding. Today you warm up your number sense on real winter data.",
  miniLesson: [
    "Every digit's value depends on its place: in 3,482 cm the 4 means 4 hundreds, but in 4,832 the 4 means 4 thousands.",
    "To round, look at the digit just to the RIGHT of the place you're rounding to: 5 or more rounds up, 4 or less rounds down.",
    "Rounding gives a quick, tidy estimate — perfect for reporting 'about how much' snow fell without listing every centimeter."
  ],
  workedExample: {
    prompt: "A mountain station recorded 2,847 cm of snowfall this winter. Round it to the nearest hundred.",
    steps: [
      "Find the hundreds place: the 8 in 2,847 is the hundreds digit.",
      "Look at the digit to its right (the tens digit): that's 4.",
      "4 is less than 5, so round DOWN — the hundreds digit stays 8.",
      "Everything after becomes zero: 2,800 cm."
    ],
    answer: "2,800 cm"
  },
  items: [
    {
      id: "g6.winter.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "In the snowfall total 6,529 cm, what is the value of the digit 5?",
      choices: ["5 tens", "5 hundreds", "5 thousands", "5 ones"],
      answerIndex: 1,
      explanation: "In 6,529 the 5 sits in the hundreds place, so its value is 5 hundreds (500).",
      hintLadder: [
        "Name each place from the right: ones, tens, hundreds, thousands.",
        "The 5 is the third digit from the right.",
        "The third place from the right is hundreds."
      ]
    },
    {
      id: "g6.winter.math.w1.d1.q2",
      type: "numeric",
      stem: "A ski town got 1,468 cm of snow this winter. Round it to the nearest ten.",
      answer: 1470,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find the tens digit: the 6 in 1,468.",
        "Look at the digit to its right (the ones): that's 8.",
        "8 is 5 or more, so round the tens up: 6 becomes 7 → 1,470."
      ],
      explanation: "The ones digit is 8 (≥ 5), so the tens round up from 6 to 7: 1,470 cm."
    },
    {
      id: "g6.winter.math.w1.d1.q3",
      type: "numeric",
      stem: "Round the seasonal snowfall total 3,842 cm to the nearest thousand.",
      answer: 4000,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find the thousands digit: the 3 in 3,842.",
        "Look at the digit to its right (the hundreds): that's 8.",
        "8 is 5 or more, so round up: 3 becomes 4 → 4,000."
      ],
      explanation: "The hundreds digit is 8 (≥ 5), so the thousands round up from 3 to 4: 4,000 cm."
    },
    {
      id: "g6.winter.math.w1.d1.q4",
      type: "multiple_choice",
      stem: "Four towns reported snowfall: Frostville 2,910 cm, Icehaven 2,901 cm, Snowridge 2,199 cm, Glacier Bay 2,091 cm. Which town had the MOST snow?",
      choices: ["Frostville", "Icehaven", "Snowridge", "Glacier Bay"],
      answerIndex: 0,
      explanation: "Compare place by place. All start with 2 thousands. In the hundreds place Frostville and Icehaven have 9; then in the tens Frostville has 1 and Icehaven has 0, so Frostville (2,910) is greatest.",
      hintLadder: [
        "Compare the thousands digit first — they're all 2.",
        "Move to the hundreds place next.",
        "Frostville and Icehaven both have 9 hundreds; compare their tens digits."
      ],
      misconceptionsTargeted: ["longer-looks-bigger"]
    },
    {
      id: "g6.winter.math.w1.d1.q5",
      type: "short_answer",
      stem: "A weather station reported 5,650 cm of snow. Explain why rounding it to the nearest hundred gives 5,700 and not 5,600.",
      rubric: {
        level3: "Identifies the tens digit (5) as the deciding digit, states that 5 or more rounds UP, and concludes the hundreds go from 6 to 7 → 5,700.",
        level2: "Gets 5,700 but the explanation of the deciding digit or the round-up rule is unclear.",
        level1: "Wrong answer or no reasoning about the deciding digit."
      },
      exemplar: "To round 5,650 to the nearest hundred, I look at the tens digit, which is 5. Since 5 or more rounds up, the hundreds digit goes from 6 to 7, giving 5,700.",
      hintLadder: [
        "Which digit do you check when rounding to the nearest hundred?",
        "The tens digit is 5 — what does 5 tell you to do?",
        "5 or more rounds the hundreds place UP."
      ]
    }
  ],
  reflectionPrompt: "Where might a town round a big winter number instead of reporting it exactly — snowfall, temperature records, road-salt tonnage? Why is 'about' good enough there?",
  misconceptionBank: [
    {
      id: "longer-looks-bigger",
      label: "Thinks the number that 'looks' bigger by leading digits is largest without full comparison",
      description: "Compares only the first digit or the overall look instead of comparing place by place all the way down.",
      coachMove: "Line the numbers up by place value and compare one column at a time, left to right, until the digits differ."
    },
    {
      id: "round-wrong-digit",
      label: "Looks at the wrong digit when rounding",
      description: "Rounds based on the digit in the target place instead of the digit to its right.",
      coachMove: "Underline the place you're rounding to, then point to the ONE digit just to its right — that digit decides up or down."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Snowflake Number Riddle",
      prompt:
        "I am a four-digit snowfall total. My thousands digit is 3, my hundreds digit is twice my thousands digit, my tens digit is 0, and my ones digit is 5. What number am I — and rounded to the nearest hundred, what do I become?",
      answer:
        "I am 3,605. The hundreds digit is twice 3 = 6. Rounded to the nearest hundred, the tens digit is 0 (less than 5), so I round DOWN to 3,600.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Snowfall Report Card",
      challenge:
        "Invent five made-up winter towns and give each a four-digit snowfall total in centimeters. Build a 'Snowfall Report Card' that lists each town, ranks them from most to least snow, and rounds every total to the nearest hundred.",
      steps: [
        "Name five towns and give each a four-digit snowfall total.",
        "Put the towns in order from MOST to LEAST snow by comparing place by place.",
        "Round each total to the nearest hundred and add it in a second column.",
        "Circle the snowiest town and write one sentence saying how you knew it won."
      ],
      deliverable: "A ranked snowfall report card showing exact totals and rounded-to-the-hundred totals for five towns.",
      choiceBoard: [
        "Draw or type a table-style report card with both columns.",
        "Make a bar-chart poster where each frosty bar is a town's snowfall.",
        "Write a mock TV weather segment announcing the snowiest town and the rounded totals."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Place Value Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w1.d1.arena1",
          type: "numeric",
          stem: "The season's grand snowfall total across a valley was 47,382 cm. Round it to the nearest thousand.",
          answer: 47000,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find the thousands digit: the 7 in 47,382.",
            "Look at the digit to its right (the hundreds): that's 3.",
            "3 is less than 5, so round DOWN — the thousands stay 47 → 47,000."
          ],
          explanation: "The hundreds digit is 3 (< 5), so we round down and the thousands place stays: 47,000 cm."
        },
        {
          id: "g6.winter.math.w1.d1.arena2",
          type: "multiple_choice",
          stem: "Which pair of snowfall totals BOTH round to the same value, 5,300 cm, when rounded to the nearest hundred?",
          choices: [
            "5,251 cm and 5,349 cm",
            "5,240 cm and 5,360 cm",
            "5,149 cm and 5,451 cm",
            "5,350 cm and 5,299 cm"
          ],
          answerIndex: 0,
          explanation: "5,251 rounds up to 5,300 (tens digit 5) and 5,349 rounds down to 5,300 (tens digit 4). Both land on 5,300. In the other pairs at least one value rounds to a different hundred.",
          hintLadder: [
            "Round each number in a pair to the nearest hundred separately.",
            "Watch the tens digit — 5 or more rounds up, 4 or less rounds down.",
            "Look for the pair where BOTH land on 5,300."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Round Up, Round Down",
      prompt:
        "Stand up. When a coach or family member calls a number that 'rounds up,' jump and reach HIGH like piling snow up; when it 'rounds down,' crouch LOW. Do 6 rounds, calling your own snowfall numbers if you're solo.",
      scienceTieIn: "Quick bursts of movement raise your heart rate and send more oxygen to your brain, sharpening the focus you need for careful number work.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Winter is full of big numbers — snowfall, cold records, hours of darkness. Write down one winter number you'd round instead of stating exactly, and explain why an estimate is good enough.",
      badge: { id: "snowfall-place-value-pro", name: "Snowfall Place-Value Pro", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
