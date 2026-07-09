// Grade 6 Science — Spring Expedition, Week 5 (Measuring Change), Day 3.
// Topic: measurement and data collection — making careful, repeatable
// measurements over time.

export const springG6ScienceW5D3 = {
  id: "g6.spring.sci.w5.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Science",
  topic: "Measurement and data collection over time",
  topicTag: "measurement-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ETS1-3", "NGSS.MS-LS1-5"],
  hook: "A growth graph is only as trustworthy as the measurements behind it. To watch a spring seedling change over weeks, you have to measure it the SAME careful way every single time. Today you learn how scientists collect clean, repeatable data.",
  miniLesson: [
    "Measure the same way every time. To track a plant's height, always measure from the SAME spot (soil to tip), with the same tool, held the same way — so the only thing changing is the plant.",
    "Use the right precision and units. Record with a consistent unit (like centimeters) and read the smallest marking on your ruler — measuring to the nearest millimeter is more precise than the nearest centimeter.",
    "Repeat and average to reduce error. Any single measurement can be slightly off. Taking several readings and finding the average gives a value you can trust more. Always write down the date so your data becomes a record of change over time."
  ],
  workedExample: {
    prompt: "A student measures the same leaf three times and gets 12.4 cm, 12.6 cm, and 12.5 cm. What single value best represents the leaf's length, and why measure three times?",
    steps: [
      "Add the three readings: 12.4 + 12.6 + 12.5 = 37.5 cm.",
      "Divide by the number of readings: 37.5 ÷ 3 = 12.5 cm.",
      "The average, 12.5 cm, is the best single value.",
      "Measuring three times and averaging smooths out small errors, so one shaky reading doesn't throw off the data."
    ],
    answer: "12.5 cm — the average of the three readings, which reduces measurement error."
  },
  items: [
    {
      id: "g6.spring.sci.w5.d3.q1",
      type: "multiple_choice",
      stem: "You're tracking a seedling's height every day for two weeks. Why should you measure from the SAME point (soil to tip) each time?",
      choices: [
        "So the only thing changing in your data is the plant's actual growth, not how you measured",
        "So the plant grows faster",
        "Because rulers only work from the soil",
        "So the measurement is always a whole number"
      ],
      answerIndex: 0,
      explanation: "Keeping the method identical means any change in your numbers reflects real growth, not differences in how you measured — that makes the data repeatable and trustworthy.",
      hintLadder: [
        "Think about what you want your numbers to show.",
        "If you measure differently each day, what could make the numbers change besides growth?",
        "Same method → the only change is real plant growth."
      ]
    },
    {
      id: "g6.spring.sci.w5.d3.q2",
      type: "numeric",
      stem: "A student measures the same stem three times and records 8.1 cm, 8.4 cm, and 8.4 cm. What is the average length, in centimeters?",
      answer: 8.3,
      tolerance: 0.02,
      unit: "cm",
      hintLadder: [
        "Add all three readings together.",
        "8.1 + 8.4 + 8.4 = 24.9 cm.",
        "Divide the total by 3: 24.9 ÷ 3 = 8.3 cm."
      ],
      explanation: "Sum = 8.1 + 8.4 + 8.4 = 24.9 cm; average = 24.9 ÷ 3 = 8.3 cm exactly."
    },
    {
      id: "g6.spring.sci.w5.d3.q3",
      type: "multiple_choice",
      stem: "Which measurement is recorded with the MOST useful precision for tracking small daily plant growth?",
      choices: [
        "About 5 cm",
        "4.7 cm (measured to the nearest millimeter)",
        "Around 4 to 5 cm",
        "Pretty tall"
      ],
      answerIndex: 1,
      explanation: "4.7 cm reads the smallest ruler markings (millimeters), so it can capture small day-to-day changes that a rough 'about 5 cm' would miss.",
      hintLadder: [
        "Small daily growth needs a measurement that can detect small changes.",
        "Which choice uses the smallest, most exact markings?",
        "Measuring to the nearest millimeter (4.7 cm) is the most precise."
      ],
      misconceptionsTargeted: ["more-digits-always-better"]
    },
    {
      id: "g6.spring.sci.w5.d3.q4",
      type: "numeric",
      stem: "On Day 1 a bean plant is 6.5 cm tall. On Day 8 it is 15.5 cm tall. Using your recorded data, how much did it grow over those 7 days, in centimeters?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Growth = later height − earlier height.",
        "15.5 − 6.5.",
        "15.5 − 6.5 = 9 cm."
      ],
      explanation: "Change in height = 15.5 − 6.5 = 9 cm over the 7 days."
    },
    {
      id: "g6.spring.sci.w5.d3.q5",
      type: "short_answer",
      stem: "Your friend measured a plant once on Monday and once on Friday but used a different ruler each time and forgot to write down the dates. Give TWO problems this creates and how to fix them.",
      rubric: {
        level3: "Names two real problems (e.g., different tools may not agree / no way to know when each reading was taken) AND gives a fix for each (use the same tool every time; always record the date).",
        level2: "Identifies one solid problem-and-fix pair, or two problems but a weak fix.",
        level1: "Vague, or lists problems without any fix."
      },
      exemplar: "Problem 1: Two different rulers might read slightly differently, so the change might not be real growth — fix it by using the exact same ruler every time. Problem 2: With no dates, you can't tell how many days the growth took or line it up on a graph — fix it by always writing the date next to each measurement.",
      hintLadder: [
        "Think about what could go wrong with switching tools.",
        "Think about what missing dates does to a record of change over time.",
        "For each problem, state a clear fix."
      ]
    }
  ],
  reflectionPrompt: "If you started a two-week measurement log of a plant tomorrow, what THREE things would you keep exactly the same each day to make your data trustworthy?",
  misconceptionBank: [
    {
      id: "more-digits-always-better",
      label: "Thinks more decimal places always means a better measurement",
      description: "Believes writing '4.732891 cm' is more scientific, even when the tool can only read to the nearest millimeter.",
      coachMove: "Match the digits to the tool: a ruler marked in millimeters can honestly report tenths of a centimeter (like 4.7 cm), but extra invented digits aren't real precision."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Plant, Different Numbers",
      prompt:
        "Two students measure the exact same seedling at the exact same moment. One writes 9 cm and the other writes 11 cm. Nothing is wrong with the plant. What could they have done differently that made their numbers disagree?",
      answer:
        "They probably measured differently — one may have started at the soil and the other at the bottom of the pot, or they held the ruler at different angles, or read it loosely. Same plant, different METHODS, so different numbers. That's why scientists agree on one careful method.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Measurement Protocol",
      challenge:
        "Write a clear, step-by-step 'measurement protocol' — a set of rules — so that anyone could measure a plant the exact same way you do and get matching data over two weeks.",
      materials: ["Paper or a device", "A ruler and (optional) a real plant to test on"],
      steps: [
        "Decide exactly WHERE you measure from and to (for example, soil surface to the highest leaf tip).",
        "Choose your tool, your unit, and your precision (like: metric ruler, centimeters, to the nearest millimeter).",
        "Write 4–6 numbered steps another person could follow without asking you anything.",
        "Add a data table with columns for Date, Reading 1, Reading 2, Reading 3, and Average."
      ],
      deliverable: "A numbered measurement protocol plus a blank data table ready to record two weeks of growth.",
      choiceBoard: [
        "Write the protocol as a numbered instruction card.",
        "Draw a labeled diagram showing exactly where to measure.",
        "Record a 30-second 'how to measure this plant' explainer script."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Careful Measurement Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w5.d3.arena1",
          type: "numeric",
          stem: "A student records four readings of the same sprout: 10.2 cm, 10.0 cm, 10.4 cm, and 10.2 cm. What is the average, in centimeters?",
          answer: 10.2,
          tolerance: 0.05,
          unit: "cm",
          hintLadder: [
            "Add all four readings.",
            "10.2 + 10.0 + 10.4 + 10.2 = 40.8 cm.",
            "Divide by 4: 40.8 ÷ 4 = 10.2 cm."
          ],
          explanation: "Sum = 40.8 cm; average = 40.8 ÷ 4 = 10.2 cm."
        },
        {
          id: "g6.spring.sci.w5.d3.arena2",
          type: "short_answer",
          stem: "A student takes just ONE quick measurement each day and one reading looks way off from the days around it. Explain why taking several readings and averaging would have helped.",
          rubric: {
            level3: "Explains that a single reading can contain a random error, and that taking several readings and averaging smooths out that error so one bad reading doesn't distort the data.",
            level2: "Says averaging helps but the reasoning about reducing error is thin.",
            level1: "No clear explanation of why repeating/averaging helps."
          },
          exemplar: "Any single measurement can be a little off if the ruler slips or you misread it. If you take three readings and average them, one shaky reading gets balanced out by the others, so your recorded value is closer to the plant's true height and won't create a fake spike on the graph.",
          hintLadder: [
            "Can one quick reading ever be wrong by accident?",
            "What does averaging several readings do to that one-off error?",
            "Connect it to keeping the growth graph accurate."
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
        "Slow breathing calms your nervous system and reduces small tremors — the same steadiness that helps you line up a ruler and read a measurement accurately.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Careful data collection is a superpower. Where else in life would measuring the same careful way every time help you — tracking practice minutes, steps, or savings? Describe one.",
      badge: { id: "spring-careful-measurer", name: "Careful Measurer", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
