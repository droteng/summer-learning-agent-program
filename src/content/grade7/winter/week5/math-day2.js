// Grade 7 Math — Winter Expedition, Week 5 (Data in the Cold), Day 2.
// Topic: measures of center and spread of a temperature dataset — mean,
// median, mode, range PLUS comparing distributions and reasoning about
// variability/outliers. Grade-7 counterpart of the Grade 6 mean/median/mode/
// range mission, pitched up to comparing two datasets and inferring from spread.

export const winterG7MathW5D2 = {
  id: "g7.winter.math.w5.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Math",
  topic: "Comparing winter temperature datasets — center, spread, and variability",
  topicTag: "measures-center-spread",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.B.3", "CCSS.7.SP.B.4"],
  hook: "Two weather stations both report an average low of -3°C. Sounds identical — but one had calm, steady nights and the other swung wildly between -18°C and +10°C. Center alone hides that story. This year you don't just compute the summary numbers; you use them to COMPARE two cold datasets and infer which one was steadier, which had an outlier, and what the spread really tells you.",
  miniLesson: [
    "CENTER (mean and median) tells you the 'typical' value, but SPREAD (range and mean absolute deviation) tells you how much the values scatter around it. Two datasets can share a center yet differ hugely in spread.",
    "The MEAN is pulled by outliers because it uses every value; the MEDIAN resists them because it only depends on position. When mean and median differ a lot, suspect an outlier or a skewed dataset — and often the median is the more honest 'typical' value.",
    "To COMPARE two datasets, look at BOTH a measure of center and a measure of spread. A smaller range (or smaller mean absolute deviation) means the data is more consistent; a larger one means more variability. With below-zero values, subtracting a negative widens the range: 8 − (−12) = 20."
  ],
  workedExample: {
    prompt: "Station A daily lows (°C): -2, -1, 0, 0, 3. Station B daily lows (°C): -14, -1, 0, 1, 14. Both have the same mean. Show the means are equal, then say which station was more VARIABLE and why.",
    steps: [
      "Station A mean: (−2 − 1 + 0 + 0 + 3) ÷ 5 = 0 ÷ 5 = 0°C.",
      "Station B mean: (−14 − 1 + 0 + 1 + 14) ÷ 5 = 0 ÷ 5 = 0°C. Same center.",
      "Station A range: 3 − (−2) = 5°C. Station B range: 14 − (−14) = 28°C.",
      "Station B's range (28) is far larger than A's (5), so Station B was much more variable even though both averaged 0°C."
    ],
    answer: "Both means are 0°C, but Station B is far more variable — its range is 28°C versus Station A's 5°C."
  },
  items: [
    {
      id: "g7.winter.math.w5.d2.q1",
      type: "numeric",
      stem: "Six daily lows (°C): -8, -3, -3, 0, 4, 4. What is the MEAN? (Round to one decimal place if needed.)",
      answer: -1,
      tolerance: 0.05,
      unit: "°C",
      hintLadder: [
        "Add all six values, tracking the negatives carefully.",
        "−8 − 3 − 3 + 0 + 4 + 4 = −6.",
        "Divide by 6: −6 ÷ 6 = −1."
      ],
      explanation: "Sum = −8 − 3 − 3 + 0 + 4 + 4 = −6, and −6 ÷ 6 = −1°C.",
      misconceptionsTargeted: ["range-drops-negative-sign"]
    },
    {
      id: "g7.winter.math.w5.d2.q2",
      type: "numeric",
      stem: "Eight daily highs sorted (°C): -6, -4, -1, 0, 2, 5, 5, 11. What is the MEDIAN? (Even count — average the two middle values.)",
      answer: 1,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "With 8 values, the median is the average of the 4th and 5th values.",
        "The 4th value is 0 and the 5th value is 2.",
        "Median = (0 + 2) ÷ 2 = 1."
      ],
      explanation: "For 8 sorted values the median averages the 4th (0) and 5th (2): (0 + 2) ÷ 2 = 1°C.",
      misconceptionsTargeted: ["median-without-sorting"]
    },
    {
      id: "g7.winter.math.w5.d2.q3",
      type: "numeric",
      stem: "Station A lows range from -5°C to 6°C. Station B lows range from -20°C to 9°C. How many degrees WIDER is Station B's range than Station A's?",
      answer: 18,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Find each range with high − low, watching the negatives.",
        "A: 6 − (−5) = 11°C. B: 9 − (−20) = 29°C.",
        "Difference in ranges: 29 − 11 = 18°C."
      ],
      explanation: "Range A = 6 − (−5) = 11°C; range B = 9 − (−20) = 29°C; B is 29 − 11 = 18°C wider.",
      misconceptionsTargeted: ["range-drops-negative-sign"]
    },
    {
      id: "g7.winter.math.w5.d2.q4",
      type: "multiple_choice",
      stem: "A dataset of winter lows has mean -2°C and median -6°C, with one unusually warm day of +15°C. Why is the mean so much higher than the median here?",
      choices: [
        "The median was calculated wrong",
        "Mean and median are always different",
        "The single warm +15°C day is an outlier that pulls the MEAN up, while the median resists it",
        "The dataset has no mode, so the mean is unreliable"
      ],
      answerIndex: 2,
      explanation: "The +15°C outlier is added into the total, dragging the mean upward. The median only depends on the middle position, so the outlier barely moves it — leaving mean well above median.",
      hintLadder: [
        "Which measure uses the actual SIZE of every value?",
        "An unusually warm day adds a big number to the total.",
        "The mean gets pulled by the outlier; the median resists it."
      ],
      misconceptionsTargeted: ["outlier-moves-median"]
    },
    {
      id: "g7.winter.math.w5.d2.q5",
      type: "short_answer",
      stem: "Two towns each report an average (mean) winter low of -4°C. Town A's temperatures ranged only from -7°C to -1°C; Town B's ranged from -25°C to +17°C. A friend says 'same average, so the winters were basically the same.' Explain why that's wrong, and which measure reveals the real difference.",
      rubric: {
        level3: "Explains that equal MEANS (center) can hide very different SPREADS, states Town B was far more variable/extreme (much larger range), AND identifies range/spread (not center) as the measure that reveals the difference — with correct reasoning.",
        level2: "Recognizes the winters differ in spread but is vague about which measure shows it, or omits the center-vs-spread contrast.",
        level1: "Accepts that the winters were the same or shows no understanding of spread."
      },
      exemplar: "The average only describes the center, not how spread out the days were. Town A stayed in a narrow band from −7°C to −1°C (range 6°C), so it was steady and consistently chilly. Town B swung from −25°C all the way to +17°C (range 42°C), so it had brutal cold snaps AND mild days. Same mean, totally different winters — and it's the RANGE (a measure of spread), not the mean, that reveals the difference.",
      hintLadder: [
        "Does the mean tell you how spread out the values are?",
        "Compare the two ranges — which town swings more?",
        "Name the measure (center vs. spread) that exposes the real gap."
      ]
    }
  ],
  reflectionPrompt: "If you had to pick ONE number to describe a wildly up-and-down winter week honestly, would you report the mean, the median, or the range — and would just one number ever be enough?",
  misconceptionBank: [
    {
      id: "median-without-sorting",
      label: "Takes the 'middle of the list' without sorting first",
      description: "Reads the median from the middle position of the ORIGINAL, unsorted list instead of sorting first.",
      coachMove: "Always sort lowest-to-highest FIRST, then find the middle (averaging the two middle values for an even count)."
    },
    {
      id: "outlier-moves-median",
      label: "Thinks an outlier shifts the median as much as the mean",
      description: "Believes one extreme value drags the median as strongly as it drags the mean.",
      coachMove: "Remind that the median depends on POSITION, not value size — an outlier only nudges the middle position slightly, while the mean absorbs the outlier's full size."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Same Center, Different Story",
      prompt:
        "Two winter nights datasets both have a mean of 0°C. Set A is {−1, 0, 1}. Set B is {−20, 0, 20}. Which set had the calmer, steadier weather — and what single number proves it, since the means are identical?",
      answer:
        "Set A was far calmer. The means both equal 0°C, so center can't tell them apart — but the RANGE does: Set A's range is 1 − (−1) = 2°C while Set B's is 20 − (−20) = 40°C. Spread, not center, tells the real story.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Compare Two Winter Weeks",
      challenge:
        "Invent (or collect) TWO 7-day sets of daily low temperatures for two different places, each including at least one below-zero value. Compute the mean, median, and range for BOTH, then write a short 'weather comparison report' saying which place was colder on average and which was more variable — using your numbers as evidence.",
      steps: [
        "Write two rows of 7 daily lows, one row per place (include negatives).",
        "Sort each row, then compute mean, median, and range for both.",
        "Compare centers (which place was colder typically?) and spreads (which was more variable?).",
        "Write 2–3 sentences that use the actual numbers to back up each claim."
      ],
      deliverable: "A comparison report: two 7-value datasets with mean/median/range for each, plus a written conclusion citing center AND spread as evidence.",
      choiceBoard: [
        "Make a hand-worked comparison card showing every calculation for both places.",
        "Use a spreadsheet with AVERAGE, MEDIAN, MAX and MIN for each place, then write the conclusion.",
        "Design a side-by-side infographic where each place gets a column of summary numbers and a one-line verdict."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Comparison Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w5.d2.arena1",
          type: "numeric",
          stem: "Seven daily lows (°C): -6, -6, -2, 0, 1, 5, 15. The +15°C day is an outlier. What is the MEDIAN of this dataset?",
          answer: 0,
          tolerance: 0,
          unit: "°C",
          hintLadder: [
            "The list is already sorted; with 7 values the median is the 4th value.",
            "Count in: −6, −6, −2, then 0 is the 4th.",
            "The median is 0°C — the outlier barely affects it."
          ],
          explanation: "With 7 sorted values the median is the 4th: 0°C. The +15 outlier doesn't move the median."
        },
        {
          id: "g7.winter.math.w5.d2.arena2",
          type: "numeric",
          stem: "For the same set -6, -6, -2, 0, 1, 5, 15, compute the MEAN, then subtract the MEDIAN (0) from it. How far above the median is the mean? (Round to one decimal.)",
          answer: 1,
          tolerance: 0.05,
          unit: "°C",
          hintLadder: [
            "Sum the seven values: −6 − 6 − 2 + 0 + 1 + 5 + 15 = 7.",
            "Mean = 7 ÷ 7 = 1°C.",
            "Mean − median = 1 − 0 = 1°C."
          ],
          explanation: "Sum = 7, mean = 7 ÷ 7 = 1°C; median = 0, so the mean sits 1°C above the median (pulled up by the +15 outlier)."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Steady the Spread",
      prompt:
        "Stand tall and take 5 slow, EVEN breaths — same length in, same length out — to keep your 'spread' small and steady. Then take 3 wild uneven breaths and notice how jumpy that feels. Return to even breathing: low spread feels calm.",
      scienceTieIn:
        "Even, low-variability breathing calms your nervous system — mirroring today's idea that a small spread (low variability) means steadier, more predictable data than a wide, jumpy one.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You learned that two winters can share an average yet feel completely different. Where else in life might an 'average' hide an important story that only the spread reveals?",
      badge: { id: "g7-winter-spread-detective", name: "Winter Spread Detective", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
