// Grade 6 Math — Week 2, Day 5.
// Topic: mean, median, range.

export const grade6MathWeek2Day5 = {
  id: "g6.math.w2.d5",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 5,
  subject: "Math",
  topic: "Mean, median, and range",
  topicTag: "summary-statistics",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.6.SP.A.3", "CCSS.6.SP.B.5"],
  hook: "Three quick numbers can describe a whole week of data: mean, median, and range. Today you compute all three.",
  miniLesson: [
    "Mean (average) = sum of values divided by how many there are.",
    "Median = middle value when the list is sorted (or the average of the two middle values when the list is even).",
    "Range = largest minus smallest. It tells you how spread out the data is."
  ],
  workedExample: {
    prompt: "Test scores: 70, 80, 90, 80, 85. Compute mean, median, and range.",
    steps: [
      "Sum: 70 + 80 + 90 + 80 + 85 = 405.",
      "Mean: 405 / 5 = 81.",
      "Sort: 70, 80, 80, 85, 90. Median is the middle value: 80.",
      "Range: 90 - 70 = 20.",
      "Mean=81, Median=80, Range=20."
    ],
    answer: "Mean 81, Median 80, Range 20."
  },
  items: [
    {
      id: "g6.math.w2.d5.q1",
      type: "numeric",
      stem: "Find the mean: 4, 6, 8, 10, 12.",
      answer: 8,
      tolerance: 0,
      hintLadder: [
        "Sum the values.",
        "Divide by the count (5).",
        "(4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8."
      ],
      explanation: "(4 + 6 + 8 + 10 + 12) / 5 = 40 / 5 = 8."
    },
    {
      id: "g6.math.w2.d5.q2",
      type: "numeric",
      stem: "Find the median: 3, 7, 5, 9, 1.",
      answer: 5,
      tolerance: 0,
      hintLadder: [
        "Sort the list first.",
        "Sorted: 1, 3, 5, 7, 9.",
        "The middle value is 5."
      ],
      explanation: "Sorted: 1, 3, 5, 7, 9. The middle (3rd) value is 5."
    },
    {
      id: "g6.math.w2.d5.q3",
      type: "numeric",
      stem: "Find the range: 12, 5, 18, 7, 11.",
      answer: 13,
      tolerance: 0,
      hintLadder: [
        "Find the largest value.",
        "Find the smallest.",
        "Subtract: 18 - 5 = 13."
      ],
      explanation: "Largest 18, smallest 5. Range = 18 - 5 = 13."
    },
    {
      id: "g6.math.w2.d5.q4",
      type: "multiple_choice",
      stem: "When does mean equal median?",
      choices: [
        "Always",
        "Never",
        "When the data is symmetric",
        "Only when all values are zero"
      ],
      answerIndex: 2,
      explanation: "If the data is symmetric (like 4, 6, 8, 10, 12) the mean and median match. Skewed data shifts the mean away from the median.",
      hintLadder: [
        "Try a balanced dataset like 1, 2, 3, 4, 5.",
        "Mean and median are both 3.",
        "Now try 1, 2, 3, 4, 100 — mean shifts up, median stays at 3. Symmetric data is when they match."
      ],
      misconceptionsTargeted: ["assumes-mean-equals-median"]
    },
    {
      id: "g6.math.w2.d5.q5",
      type: "short_answer",
      stem:
        "Two students each averaged 80 on five tests. Why might their tests still look very different?",
      rubric: {
        level3: "Names range or spread (one had consistent scores, one had highs and lows that averaged out).",
        level2: "Mentions that scores can differ but doesn't name range or spread specifically.",
        level1: "Confused or off-topic."
      },
      exemplar:
        "Their means are equal, but the range could differ — one student scored 78–82 every time, while the other scored 60–100. Same mean, very different consistency.",
      hintLadder: [
        "Mean is just one summary number.",
        "What measure shows how spread out the data is?",
        "Range tells the rest of the story."
      ]
    }
  ],
  reflectionPrompt: "Today you used three summary stats. Which would you trust most for describing a friend's typical reading time?",
  misconceptionBank: [
    {
      id: "assumes-mean-equals-median",
      label: "Assumes mean and median are always equal",
      description: "Treats mean and median as interchangeable.",
      coachMove: "Add one large outlier to a dataset and recompute — the mean shifts, the median doesn't."
    }
  ]
};
