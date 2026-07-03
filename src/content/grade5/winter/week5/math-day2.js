// Grade 5 Math — Winter Expedition, Week 5 (Data in the Cold), Day 2.
// Topic: mean, mode, and range of a temperature dataset. Pitched DOWN from
// Grade 6: positive whole-number temperatures only, whole-number means, no
// below-zero subtraction. (Median introduced lightly; core work is mean/mode/range.)

export const winterG5MathW5D2 = {
  id: "g5.winter.math.w5.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Math",
  topic: "Mean, mode, and range of a temperature dataset",
  topicTag: "measures-center-spread",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.6", "CCSS.5.OA.A.2"],
  hook: "A weather station logs a temperature every day all winter. To describe a whole week with a few honest numbers, you summarize it: the average day, the most common reading, and the spread from coldest to warmest. Today you turn a cold dataset into three powerful summary numbers.",
  miniLesson: [
    "MEAN (average): add all the values, then divide by how many there are. It is the 'balance point' of the data. Example: 4, 6, 8 → 4 + 6 + 8 = 18, and 18 ÷ 3 = 6.",
    "MODE: the value that appears MOST often. If the list is 5, 5, 8, 3, the mode is 5.",
    "RANGE: the spread — the largest value minus the smallest. If the highest is 12 and the lowest is 4, the range is 12 − 4 = 8."
  ],
  workedExample: {
    prompt: "A week of daily high temperatures (°C): 3, 5, 5, 6, 8, 5, 10. Find the mean, mode, and range.",
    steps: [
      "MEAN: add them: 3 + 5 + 5 + 6 + 8 + 5 + 10 = 42. There are 7 values, so 42 ÷ 7 = 6.",
      "MODE: 5 appears three times, more than any other value, so the mode is 5.",
      "RANGE: largest − smallest = 10 − 3 = 7.",
      "So the week's mean is 6°C, mode is 5°C, and range is 7°C."
    ],
    answer: "Mean = 6°C, Mode = 5°C, Range = 7°C."
  },
  items: [
    {
      id: "g5.winter.math.w5.d2.q1",
      type: "numeric",
      stem: "Five days of snowfall (cm): 3, 7, 5, 9, 6. What is the MEAN (average) snowfall?",
      answer: 6,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all five amounts first.",
        "3 + 7 + 5 + 9 + 6 = 30.",
        "Divide by how many values there are: 30 ÷ 5 = 6."
      ],
      explanation: "Sum = 30, and 30 ÷ 5 = 6 cm mean."
    },
    {
      id: "g5.winter.math.w5.d2.q2",
      type: "numeric",
      stem: "Daily high temperatures (°C): 4, 7, 9, 12, 15. What is the RANGE of this dataset?",
      answer: 11,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Range = largest value − smallest value.",
        "Largest = 15, smallest = 4.",
        "15 − 4 = 11."
      ],
      explanation: "Range = 15 − 4 = 11°C.",
      misconceptionsTargeted: ["range-adds-instead-of-subtracts"]
    },
    {
      id: "g5.winter.math.w5.d2.q3",
      type: "numeric",
      stem: "A loop of ice-thickness readings (cm): 6, 6, 6, 3, 9. What is the MEAN?",
      answer: 6,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all five values together first.",
        "6 + 6 + 6 + 3 + 9 = 30.",
        "Divide by 5: 30 ÷ 5 = 6."
      ],
      explanation: "Sum = 30, count = 5, so mean = 30 ÷ 5 = 6 cm."
    },
    {
      id: "g5.winter.math.w5.d2.q4",
      type: "multiple_choice",
      stem: "A week of high temperatures reads: 5, 5, 8, 3, 5, 7, 2 (°C). What is the MODE?",
      choices: ["5°C", "8°C", "3°C", "2°C"],
      answerIndex: 0,
      explanation: "5°C appears three times, more than any other value, so it is the mode.",
      hintLadder: [
        "The mode is the value that shows up most often.",
        "Count how many times each temperature appears.",
        "5 appears three times — more than any other."
      ]
    },
    {
      id: "g5.winter.math.w5.d2.q5",
      type: "short_answer",
      stem: "One very warm day of 20°C is added to a small set of cold winter temperatures. Explain what happens to the MEAN, and why the MODE might not change at all.",
      rubric: {
        level3: "Explains the mean is pulled UP because it uses every value (so a much larger value raises the average), AND explains the mode may not change because it depends on which value appears MOST often, not on one new number.",
        level2: "Correctly describes the effect on one of the two measures but not both.",
        level1: "Incorrect or gives no reasoning about why they differ."
      },
      exemplar: "The mean goes up because you add 20 into the total and then divide, so one warm day pulls the average higher. The mode might stay the same because the mode is just the temperature that shows up most often — adding one new value of 20 does not change which number appears most.",
      hintLadder: [
        "The mean uses the size of every number; the mode only cares about which value repeats most.",
        "Which measure gets 'pulled' when you add a big value?",
        "Explain why the most common value can stay the same even when the average moves."
      ]
    }
  ],
  reflectionPrompt: "If a friend asked 'what was the weather like this week?' would you answer with the mean, the mode, or the range — and why does that number describe it best?",
  misconceptionBank: [
    {
      id: "range-adds-instead-of-subtracts",
      label: "Adds the largest and smallest instead of subtracting",
      description: "Finds the range by adding the high and low values together instead of finding the gap between them.",
      coachMove: "Remind the student that range is the SPREAD — the distance from lowest to highest — so you subtract: largest − smallest."
    },
    {
      id: "mean-forgets-to-divide",
      label: "Reports the total as the mean",
      description: "Adds all the values but forgets the second step — dividing by how many values there are.",
      coachMove: "Say it as two jobs: 'First ADD them all up, THEN divide by how many there are.' The mean is always the total shared out evenly."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Balance Point",
      prompt:
        "Three days had highs of 2°C, 6°C, and 10°C. Without heavy math, guess the MEAN — then check by adding them and dividing by 3. Why does the answer land right on the middle value?",
      answer:
        "Mean = (2 + 6 + 10) ÷ 3 = 18 ÷ 3 = 6°C. It balances because 2 is 4 below 6 and 10 is 4 above 6 — they even out, leaving the middle value, 6, as the balance point.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Summarize a Winter Week",
      challenge:
        "Collect or invent 5 days of daily high temperatures (positive whole numbers). Compute all three summary numbers — mean, mode, and range — and write one plain-English sentence describing the week using them.",
      steps: [
        "Write your 5 daily high temperatures in a row.",
        "Sort them from lowest to highest — this makes the range easy to spot.",
        "Compute the mean (add, then divide by 5), the mode (most common), and the range (high − low).",
        "Write one sentence like 'This week averaged ___°C, with highs spread over ___ degrees.'"
      ],
      deliverable: "A worked summary card showing the 5 values, all three measures, and a one-sentence description of the week.",
      choiceBoard: [
        "Make a hand-worked summary card showing every calculation.",
        "Enter the data in a spreadsheet and use AVERAGE, MODE, MAX and MIN.",
        "Design a 'weather week' infographic where each summary number gets its own icon."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Summary Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.math.w5.d2.arena1",
          type: "numeric",
          stem: "Five daily highs (°C): 2, 4, 4, 6, 9. What is the MEAN?",
          answer: 5,
          tolerance: 0,
          unit: "°C",
          hintLadder: [
            "Add all five values first.",
            "2 + 4 + 4 + 6 + 9 = 25.",
            "Divide by 5: 25 ÷ 5 = 5."
          ],
          explanation: "Sum = 2 + 4 + 4 + 6 + 9 = 25, and 25 ÷ 5 = 5°C."
        },
        {
          id: "g5.winter.math.w5.d2.arena2",
          type: "numeric",
          stem: "Six snowfall readings (cm): 2, 5, 5, 5, 8, 5. Add the MODE and the RANGE together. What number do you get?",
          answer: 11,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find the mode (most common value) and the range (high − low) separately.",
            "Mode = 5 (appears four times); range = 8 − 2 = 6.",
            "Mode + range = 5 + 6 = 11."
          ],
          explanation: "Mode = 5, range = 8 − 2 = 6, so 5 + 6 = 11."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Find Your Balance Point",
      prompt:
        "Stand on one foot like a snowy crane and find your 'balance point,' just like the mean balances a dataset. Hold for 10 slow breaths, switch feet, and notice how small adjustments keep you centered.",
      scienceTieIn:
        "Balancing forces your brain and inner ear to constantly make tiny corrections — the same idea as the mean, which sits at the balance point where all the values even out.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which summary number — mean, mode, or range — do you think is the most helpful way to describe a wildly up-and-down winter week, and why?",
      badge: { id: "g5-winter-data-summarizer", name: "Winter Data Summarizer", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
