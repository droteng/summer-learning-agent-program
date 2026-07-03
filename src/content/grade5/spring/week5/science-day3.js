// Grade 5 Science — Spring Expedition, Week 5 (Measuring Change), Day 3.
// Grade 5 counterpart of g6.spring.sci.w5.d3. Same topic (measurement and
// data collection over time) pitched down to Grade 5: shorter passages, vocab
// support, and simple whole-number growth and averages.

export const springG5ScienceW5D3 = {
  id: "g5.spring.sci.w5.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Science",
  topic: "Measurement and data collection over time",
  topicTag: "measurement-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-3", "NGSS.5-LS1-1"],
  hook: "A growth chart is only as good as the measurements behind it. To watch a spring seedling change over weeks, you have to measure it the SAME careful way every time. Today you learn how scientists collect clean, trustworthy data.",
  miniLesson: [
    "Measure the same way every time. To track a plant's height, always measure from the SAME spot (soil to tip), with the same ruler, held the same way. Then the only thing changing in your numbers is the plant itself.",
    "Use the same unit every time. Pick one unit — like centimeters — and use it for every reading. Reading the small marks on your ruler carefully lets you catch small changes.",
    "Repeat and average. (To AVERAGE means to add your readings and divide by how many there are.) Any one reading can be a little off, so taking a few readings and averaging gives a number you can trust more. Always write down the DATE so your data becomes a record of change over time."
  ],
  workedExample: {
    prompt: "A student measures the same leaf three times and gets 12 cm, 14 cm, and 13 cm. What single value best represents the leaf's length, and why measure three times?",
    steps: [
      "Add the three readings: 12 + 14 + 13 = 39 cm.",
      "Divide by how many readings there are: 39 ÷ 3 = 13 cm.",
      "The average, 13 cm, is the best single value.",
      "Measuring three times and averaging smooths out small mistakes, so one shaky reading doesn't throw off the data."
    ],
    answer: "13 cm — the average of the three readings, which reduces measurement mistakes."
  },
  items: [
    {
      id: "g5.spring.sci.w5.d3.q1",
      type: "multiple_choice",
      stem: "You are tracking a seedling's height every day for two weeks. Why should you measure from the SAME point (soil to tip) each time?",
      choices: [
        "So the plant grows faster",
        "So the only thing changing in your numbers is the plant's real growth, not how you measured",
        "Because rulers only work from the soil",
        "So the measurement is always a whole number"
      ],
      answerIndex: 1,
      explanation: "Keeping the method the same means any change in your numbers comes from real growth, not from measuring differently — that makes the data trustworthy.",
      hintLadder: [
        "Think about what you want your numbers to show.",
        "If you measure differently each day, what could change your numbers besides growth?",
        "Same method means the only change is real plant growth."
      ]
    },
    {
      id: "g5.spring.sci.w5.d3.q2",
      type: "numeric",
      stem: "A student measures the same stem three times and records 8 cm, 9 cm, and 10 cm. What is the average length, in centimeters?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all three readings together.",
        "8 + 9 + 10 = 27 cm.",
        "Divide the total by 3: 27 ÷ 3 = 9 cm."
      ],
      explanation: "Sum = 8 + 9 + 10 = 27 cm; average = 27 ÷ 3 = 9 cm."
    },
    {
      id: "g5.spring.sci.w5.d3.q3",
      type: "multiple_choice",
      stem: "Which of these is the BEST way to record a plant's height so you can track small daily growth?",
      choices: [
        "Write 'pretty tall' each day",
        "Guess a rough number like 'about 5 cm'",
        "Read the ruler carefully and write the exact number, like 5 cm, using the same unit every time",
        "Use a different unit each day"
      ],
      answerIndex: 2,
      explanation: "Reading the ruler carefully and using the same unit every time lets you catch small day-to-day changes that a rough guess would miss.",
      hintLadder: [
        "Small daily growth needs a careful, exact reading.",
        "Which choice uses a real number and the same unit each time?",
        "Read the ruler carefully and keep the unit the same."
      ],
      misconceptionsTargeted: ["guessing-is-measuring"]
    },
    {
      id: "g5.spring.sci.w5.d3.q4",
      type: "numeric",
      stem: "On Day 1 a bean plant is 6 cm tall. On Day 8 it is 15 cm tall. Using your recorded data, how much did it grow over those days, in centimeters?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Growth = later height − earlier height.",
        "15 − 6.",
        "15 − 6 = 9 cm."
      ],
      explanation: "Change in height = 15 − 6 = 9 cm."
    },
    {
      id: "g5.spring.sci.w5.d3.q5",
      type: "short_answer",
      stem: "Your friend measured a plant once on Monday and once on Friday, but used a different ruler each time and forgot to write down the dates. Give TWO problems this creates and how to fix each one.",
      rubric: {
        level3: "Names two real problems (e.g., two different rulers may not match / no way to know when each reading was taken) AND gives a fix for each (use the same ruler every time; always write down the date).",
        level2: "Gives one solid problem-and-fix pair, or two problems but a weak fix.",
        level1: "Vague, or lists problems without any fix."
      },
      exemplar: "Problem 1: Two different rulers might read a little differently, so the change might not be real growth — fix it by using the exact same ruler every time. Problem 2: With no dates, you can't tell how many days the growth took — fix it by writing the date next to each measurement.",
      hintLadder: [
        "Think about what could go wrong with switching rulers.",
        "Think about what missing dates does to a record of change over time.",
        "For each problem, give a clear fix."
      ]
    }
  ],
  reflectionPrompt: "If you started a two-week measurement log of a plant tomorrow, what THREE things would you keep exactly the same each day to make your data trustworthy?",
  misconceptionBank: [
    {
      id: "guessing-is-measuring",
      label: "Thinks a rough guess is the same as a careful measurement",
      description: "Writes vague amounts like 'about 5 cm' or 'pretty tall' instead of reading the ruler carefully with the same unit each time.",
      coachMove: "A guess can't catch small daily growth. Read the ruler carefully, use the same unit every time, and write the real number so tiny changes still show up."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Plant, Different Numbers",
      prompt:
        "Two students measure the exact same seedling at the exact same moment. One writes 9 cm and the other writes 11 cm. Nothing is wrong with the plant. What could they have done differently that made their numbers disagree?",
      answer:
        "They probably measured differently — one may have started at the soil and the other at the bottom of the pot, or held the ruler crooked, or read it loosely. Same plant, different METHODS, so different numbers. That's why scientists agree on one careful way to measure.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Measurement Protocol",
      challenge:
        "Write a clear, step-by-step 'measurement protocol' — a set of rules — so anyone could measure a plant the exact same way you do and get matching data over two weeks.",
      materials: ["Paper or a device", "A ruler and (optional) a real plant to test on"],
      steps: [
        "Decide exactly WHERE you measure from and to (for example, the soil to the highest leaf tip).",
        "Choose your ruler and your unit (like: metric ruler, centimeters).",
        "Write 4 to 6 numbered steps another person could follow without asking you anything.",
        "Add a data table with columns for Date, Reading 1, Reading 2, Reading 3, and Average."
      ],
      deliverable: "A numbered measurement protocol plus a blank data table ready to record two weeks of growth.",
      choiceBoard: [
        "Write the protocol as a numbered instruction card.",
        "Draw a labeled picture showing exactly where to measure.",
        "Record a 30-second 'how to measure this plant' explainer."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Careful Measurement Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w5.d3.arena1",
          type: "numeric",
          stem: "A student records four readings of the same sprout: 10 cm, 12 cm, 11 cm, and 11 cm. What is the average, in centimeters?",
          answer: 11,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Add all four readings.",
            "10 + 12 + 11 + 11 = 44 cm.",
            "Divide by 4: 44 ÷ 4 = 11 cm."
          ],
          explanation: "Sum = 44 cm; average = 44 ÷ 4 = 11 cm."
        },
        {
          id: "g5.spring.sci.w5.d3.arena2",
          type: "short_answer",
          stem: "A student takes just ONE quick measurement each day, and one reading looks way off from the days around it. Explain why taking a few readings and averaging would have helped.",
          rubric: {
            level3: "Explains that a single reading can be off by accident, and that taking a few readings and averaging balances out that mistake so one bad reading doesn't ruin the data.",
            level2: "Says averaging helps but the reasoning about reducing mistakes is thin.",
            level1: "No clear explanation of why repeating or averaging helps."
          },
          exemplar: "Any single reading can be a little off if the ruler slips or you misread it. If you take three readings and average them, one shaky reading gets balanced out by the others, so your recorded number is closer to the plant's real height and won't make a fake spike on the chart.",
          hintLadder: [
            "Can one quick reading ever be wrong by accident?",
            "What does averaging a few readings do to that one-off mistake?",
            "Connect it to keeping the growth chart accurate."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Steady-Hand Breathing",
      prompt:
        "Scientists need steady hands for careful measurements. Hold your arm straight out and try to keep it perfectly still. Breathe in slowly for 4 counts, out for 4 counts, and notice your hand growing steadier with each calm breath. Repeat 4 times.",
      scienceTieIn:
        "Slow breathing calms your body and steadies small shakes — the same steadiness that helps you line up a ruler and read a measurement carefully.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Careful data collection is a superpower. Where else in life would measuring the same careful way every time help you — tracking practice minutes, steps, or savings? Describe one.",
      badge: { id: "g5-spring-steady-measurer", name: "Steady Measurer", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
