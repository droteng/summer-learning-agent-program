// Grade 6 Math — Winter Expedition, Week 5 (Data in the Cold), Day 2.
// Topic: mean, median, mode, and range of a temperature dataset.

export const winterG6MathW5D2 = {
  id: "g6.winter.math.w5.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Math",
  topic: "Mean, median, mode, and range of a temperature dataset",
  topicTag: "measures-center-spread",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.SP.B.5", "CCSS.6.SP.A.3"],
  hook: "A weather station logs a temperature every day all winter. To describe a whole month with a single honest number, you summarize it: the average day, the middle day, the most common reading, and the spread from coldest to warmest. Today you turn a cold dataset into four powerful summary numbers.",
  miniLesson: [
    "MEAN (average): add all the values, then divide by how many there are. It's the 'balance point' of the data.",
    "MEDIAN: sort the values and take the middle one. With an even count, average the two middle values. MODE: the value that appears MOST often.",
    "RANGE: the spread — the largest value minus the smallest. With below-zero temperatures, subtracting a negative makes the range bigger: 5 − (−6) = 11."
  ],
  workedExample: {
    prompt: "A week of daily lows (°C): -6, -2, -2, 0, 3, 5, 5, 5, 10. Find the mean, median, mode, and range.",
    steps: [
      "MEAN: add them: −6 − 2 − 2 + 0 + 3 + 5 + 5 + 5 + 10 = 18. There are 9 values, so 18 ÷ 9 = 2.",
      "MEDIAN: the list is already sorted; with 9 values the middle is the 5th value = 3.",
      "MODE: 5 appears three times, more than any other value, so the mode is 5.",
      "RANGE: largest − smallest = 10 − (−6) = 10 + 6 = 16."
    ],
    answer: "Mean = 2°C, Median = 3°C, Mode = 5°C, Range = 16°C."
  },
  items: [
    {
      id: "g6.winter.math.w5.d2.q1",
      type: "numeric",
      stem: "Five days of snowfall (cm): 10, 14, 12, 8, 6. What is the MEAN (average) snowfall?",
      answer: 10,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all five amounts first.",
        "10 + 14 + 12 + 8 + 6 = 50.",
        "Divide by how many values there are: 50 ÷ 5 = 10."
      ],
      explanation: "Sum = 50, and 50 ÷ 5 = 10 cm mean."
    },
    {
      id: "g6.winter.math.w5.d2.q2",
      type: "numeric",
      stem: "Five daily high temperatures (°C): -4, -1, 0, 3, 8. What is the MEDIAN?",
      answer: 0,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "The list is already sorted from lowest to highest.",
        "With 5 values, the median is the middle (3rd) one.",
        "The 3rd value is 0."
      ],
      explanation: "Already sorted, the middle of 5 values is the 3rd: 0°C.",
      misconceptionsTargeted: ["median-without-sorting"]
    },
    {
      id: "g6.winter.math.w5.d2.q3",
      type: "numeric",
      stem: "Daily lows (°C): -9, -3, 0, 5, 7. What is the RANGE of this dataset?",
      answer: 16,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Range = largest value − smallest value.",
        "Largest = 7, smallest = −9.",
        "7 − (−9) = 7 + 9 = 16."
      ],
      explanation: "Range = 7 − (−9) = 16°C."
    },
    {
      id: "g6.winter.math.w5.d2.q4",
      type: "multiple_choice",
      stem: "A week of low temperatures reads: -2, -2, 3, 5, -2, 4, 1 (°C). What is the MODE?",
      choices: ["-2°C", "3°C", "5°C", "1°C"],
      answerIndex: 0,
      explanation: "−2°C appears three times, more than any other value, so it is the mode.",
      hintLadder: [
        "The mode is the value that shows up most often.",
        "Count how many times each temperature appears.",
        "−2 appears three times — more than any other."
      ]
    },
    {
      id: "g6.winter.math.w5.d2.q5",
      type: "short_answer",
      stem: "One very cold day of -20°C is added to a small set of winter temperatures. Explain what happens to the MEAN, and why the MEDIAN might barely change at all.",
      rubric: {
        level3: "Explains the mean is pulled DOWN because it uses every value (so an extreme value shifts it), AND explains the median barely moves because it depends on POSITION (the middle), not the size of an outlier.",
        level2: "Correctly describes the effect on one of the two measures but not both.",
        level1: "Incorrect or gives no reasoning about why they differ."
      },
      exemplar: "The mean drops because you add −20 into the total and then divide, so one very cold value pulls the average down. The median barely changes because it's just the middle value in the sorted list — adding one extreme number only shifts the middle position a little, not by 20 degrees.",
      hintLadder: [
        "The mean uses the actual size of every number; the median only cares about position.",
        "Which measure gets 'pulled' by one extreme value?",
        "Explain why the middle value hardly moves even when the average drops."
      ]
    }
  ],
  reflectionPrompt: "If a friend asked 'what was the weather like this week?' would you answer with the mean, the median, the mode, or the range — and why does that number describe it best?",
  misconceptionBank: [
    {
      id: "median-without-sorting",
      label: "Takes the 'middle of the list' without sorting first",
      description: "Reads the median as whatever value sits in the middle position of the ORIGINAL, unsorted list.",
      coachMove: "Always sort from lowest to highest FIRST, then find the middle. Have the student rewrite the list in order before pointing to the center."
    },
    {
      id: "range-drops-negative-sign",
      label: "Ignores the negative sign when finding range",
      description: "Computes range as largest − smallest but treats a negative low as positive, getting too small a spread.",
      coachMove: "Rewrite the subtraction carefully: subtracting a negative is adding, so 7 − (−9) = 7 + 9 = 16."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Balance Point",
      prompt:
        "Three days had lows of −5°C, 0°C, and 5°C. Without heavy math, guess the MEAN — then check by adding them and dividing by 3. Why does the answer feel 'balanced' around the middle value?",
      answer:
        "Mean = (−5 + 0 + 5) ÷ 3 = 0 ÷ 3 = 0°C. It balances because the −5 below zero and the +5 above zero cancel out, leaving the middle value, 0, as the balance point.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Summarize a Winter Week",
      challenge:
        "Collect or invent 7 days of daily low temperatures (include at least one below-zero value). Compute all four summary numbers — mean, median, mode, and range — and write one plain-English sentence describing the week using them.",
      steps: [
        "Write your 7 daily low temperatures in a row.",
        "Sort them from lowest to highest — this makes median and range easy.",
        "Compute the mean (add ÷ 7), median (middle), mode (most common), and range (high − low).",
        "Write one sentence like 'This week averaged ___°C, with lows ranging over ___ degrees.'"
      ],
      deliverable: "A worked summary card showing the 7 values, all four measures, and a one-sentence description of the week.",
      choiceBoard: [
        "Make a hand-worked summary card showing every calculation.",
        "Enter the data in a spreadsheet and use AVERAGE, MEDIAN, MODE, MAX and MIN.",
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
          id: "g6.winter.math.w5.d2.arena1",
          type: "numeric",
          stem: "Five daily lows (°C): -3, -3, 0, 4, 7. What is the MEAN?",
          answer: 1,
          tolerance: 0,
          unit: "°C",
          hintLadder: [
            "Add all five values, watching the negatives.",
            "−3 − 3 + 0 + 4 + 7 = 5.",
            "Divide by 5: 5 ÷ 5 = 1."
          ],
          explanation: "Sum = −3 − 3 + 0 + 4 + 7 = 5, and 5 ÷ 5 = 1°C."
        },
        {
          id: "g6.winter.math.w5.d2.arena2",
          type: "numeric",
          stem: "Six snowfall readings (cm): 2, 5, 5, 5, 8, 2. Subtract the RANGE from the MODE. What number do you get?",
          answer: -1,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find the mode (most common value) and the range (high − low) separately.",
            "Mode = 5 (appears three times); range = 8 − 2 = 6.",
            "Mode − range = 5 − 6 = −1."
          ],
          explanation: "Mode = 5, range = 8 − 2 = 6, so 5 − 6 = −1."
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
        "Which summary number — mean, median, mode, or range — do you think is the most 'honest' way to describe a wildly up-and-down winter week, and why?",
      badge: { id: "winter-data-summarizer", name: "Winter Data Summarizer", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
