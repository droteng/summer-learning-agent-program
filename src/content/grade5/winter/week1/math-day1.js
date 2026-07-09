// Grade 5 Math — Winter Expedition, Week 1 (Winter Warm-Up), Day 1.
// Grade 5 counterpart of g6.winter.math.w1.d1. Same topic (place value &
// rounding with winter snowfall data) pitched down to Grade 5: smaller
// 3-digit numbers, more visual/step-by-step scaffolding. Wintry STEM tone.

export const winterG5MathW1D1 = {
  id: "g5.winter.math.w1.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Place value and rounding with winter snowfall data",
  topicTag: "place-value-rounding",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.MATH.CONTENT.5.NBT.A.1", "CCSS.MATH.CONTENT.5.NBT.A.4"],
  hook: "Snowy towns pile up hundreds of centimeters of snow each winter. To compare towns and report 'about how much' fell, you use place value and rounding. Today you warm up your number sense on real winter snowfall.",
  miniLesson: [
    "Every digit has a place. In the number 482, reading right to left, the 2 is ONES, the 8 is TENS, and the 4 is HUNDREDS. So the 4 means 4 hundreds, which is 400.",
    "To round, look at ONE digit — the digit just to the RIGHT of the place you are rounding to. If it is 5 or more, round UP. If it is 4 or less, round DOWN.",
    "Rounding gives a quick, tidy estimate. It is perfect for saying 'about 300 cm of snow' instead of listing every centimeter."
  ],
  workedExample: {
    prompt: "A ski hill recorded 284 cm of snow this winter. Round it to the nearest hundred.",
    steps: [
      "Find the hundreds place: the 2 in 284 is the hundreds digit.",
      "Look at the digit just to its right (the tens digit): that is 8.",
      "8 is 5 or more, so round UP — the hundreds digit goes from 2 to 3.",
      "Everything after becomes zero: 300 cm."
    ],
    answer: "300 cm"
  },
  items: [
    {
      id: "g5.winter.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "In the snowfall total 652 cm, what is the value of the digit 5?",
      choices: ["5 tens", "5 hundreds", "5 ones", "5 thousands"],
      answerIndex: 0,
      explanation: "In 652 the 5 sits in the tens place, so its value is 5 tens, which is 50.",
      hintLadder: [
        "Name each place from the right: ones, tens, hundreds.",
        "The 5 is the middle digit (second from the right).",
        "The second place from the right is tens."
      ]
    },
    {
      id: "g5.winter.math.w1.d1.q2",
      type: "numeric",
      stem: "A snowy town got 146 cm of snow this winter. Round it to the nearest ten.",
      answer: 150,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find the tens digit: the 4 in 146.",
        "Look at the digit just to its right (the ones): that is 6.",
        "6 is 5 or more, so round the tens UP: 4 becomes 5 → 150."
      ],
      explanation: "The ones digit is 6 (5 or more), so the tens round up from 4 to 5: 150 cm."
    },
    {
      id: "g5.winter.math.w1.d1.q3",
      type: "numeric",
      stem: "Round the seasonal snowfall total 382 cm to the nearest hundred.",
      answer: 400,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find the hundreds digit: the 3 in 382.",
        "Look at the digit just to its right (the tens): that is 8.",
        "8 is 5 or more, so round up: 3 becomes 4 → 400."
      ],
      explanation: "The tens digit is 8 (5 or more), so the hundreds round up from 3 to 4: 400 cm."
    },
    {
      id: "g5.winter.math.w1.d1.q4",
      type: "multiple_choice",
      stem: "Four towns reported snowfall: Frostville 291 cm, Icehaven 219 cm, Snowridge 290 cm, Glacier Bay 209 cm. Which town had the MOST snow?",
      choices: ["Icehaven", "Frostville", "Snowridge", "Glacier Bay"],
      answerIndex: 1,
      explanation: "Compare place by place. All start with 2 hundreds. In the tens place Frostville and Snowridge have 9; then in the ones Frostville has 1 and Snowridge has 0, so Frostville (291) is greatest.",
      hintLadder: [
        "Compare the hundreds digit first — they are all 2.",
        "Move to the tens place next.",
        "Frostville and Snowridge both have 9 tens; compare their ones digits."
      ],
      misconceptionsTargeted: ["longer-looks-bigger"]
    },
    {
      id: "g5.winter.math.w1.d1.q5",
      type: "short_answer",
      stem: "A weather station reported 565 cm of snow. Explain why rounding it to the nearest ten gives 570 and not 560.",
      rubric: {
        level3: "Identifies the ones digit (5) as the deciding digit, states that 5 or more rounds UP, and concludes the tens go from 6 to 7 → 570.",
        level2: "Gets 570 but the explanation of the deciding digit or the round-up rule is unclear.",
        level1: "Wrong answer or no reasoning about the deciding digit."
      },
      exemplar: "To round 565 to the nearest ten, I look at the ones digit, which is 5. Since 5 or more rounds up, the tens digit goes from 6 to 7, giving 570.",
      hintLadder: [
        "Which digit do you check when rounding to the nearest ten?",
        "The ones digit is 5 — what does 5 tell you to do?",
        "5 or more rounds the tens place UP."
      ]
    }
  ],
  reflectionPrompt: "Where might a town round a big winter number instead of reporting it exactly — snowfall, temperature, or bags of road salt? Why is 'about' good enough there?",
  misconceptionBank: [
    {
      id: "longer-looks-bigger",
      label: "Thinks the number that 'looks' bigger by its first digits is largest without full comparison",
      description: "Compares only the first digit or the overall look instead of comparing place by place all the way down.",
      coachMove: "Line the numbers up by place value and compare one column at a time, left to right, until the digits differ."
    },
    {
      id: "round-wrong-digit",
      label: "Looks at the wrong digit when rounding",
      description: "Rounds based on the digit in the target place instead of the digit to its right.",
      coachMove: "Underline the place you are rounding to, then point to the ONE digit just to its right — that digit decides up or down."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Snowflake Number Riddle",
      prompt:
        "I am a three-digit snowfall total. My hundreds digit is 3, my tens digit is double my hundreds digit, and my ones digit is 5. What number am I — and rounded to the nearest hundred, what do I become?",
      answer:
        "I am 365. The tens digit is double 3 = 6. Rounded to the nearest hundred, the tens digit is 6 (5 or more), so I round UP to 400.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Snowfall Report Card",
      challenge:
        "Invent four made-up winter towns and give each a three-digit snowfall total in centimeters. Build a 'Snowfall Report Card' that lists each town, ranks them from most to least snow, and rounds every total to the nearest hundred.",
      steps: [
        "Name four towns and give each a three-digit snowfall total.",
        "Put the towns in order from MOST to LEAST snow by comparing place by place.",
        "Round each total to the nearest hundred and add it in a second column.",
        "Circle the snowiest town and write one sentence saying how you knew it won."
      ],
      deliverable: "A ranked snowfall report card showing exact totals and rounded-to-the-hundred totals for four towns.",
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
          id: "g5.winter.math.w1.d1.arena1",
          type: "numeric",
          stem: "The season's grand snowfall total across a valley was 738 cm. Round it to the nearest hundred.",
          answer: 700,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find the hundreds digit: the 7 in 738.",
            "Look at the digit just to its right (the tens): that is 3.",
            "3 is less than 5, so round DOWN — the hundreds stay 7 → 700."
          ],
          explanation: "The tens digit is 3 (less than 5), so we round down and the hundreds place stays: 700 cm."
        },
        {
          id: "g5.winter.math.w1.d1.arena2",
          type: "multiple_choice",
          stem: "Which pair of snowfall totals BOTH round to the same value, 300 cm, when rounded to the nearest hundred?",
          choices: [
            "350 cm and 299 cm",
            "240 cm and 360 cm",
            "149 cm and 451 cm",
            "251 cm and 349 cm"
          ],
          answerIndex: 3,
          explanation: "251 rounds up to 300 (tens digit 5) and 349 rounds down to 300 (tens digit 4). Both land on 300. In the other pairs at least one value rounds to a different hundred.",
          hintLadder: [
            "Round each number in a pair to the nearest hundred separately.",
            "Watch the tens digit — 5 or more rounds up, 4 or less rounds down.",
            "Look for the pair where BOTH land on 300."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Round Up, Round Down",
      prompt:
        "Stand up. When a coach or family member calls a number that 'rounds up,' jump and reach HIGH like piling snow up; when it 'rounds down,' crouch LOW. Do 6 rounds, calling your own snowfall numbers if you are solo.",
      scienceTieIn: "Quick bursts of movement raise your heart rate and send more oxygen to your brain, sharpening the focus you need for careful number work.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Winter is full of big numbers — snowfall, cold records, hours of dark. Write down one winter number you would round instead of stating exactly, and explain why an estimate is good enough.",
      badge: { id: "g5-winter-snowfall-place-value-pro", name: "Snowfall Place-Value Pro", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
