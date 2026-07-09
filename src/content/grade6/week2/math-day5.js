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
  estimatedMinutes: 60, // full Daily Hour
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
        "Only when all values are zero",
        "When the data is symmetric"
      ],
      answerIndex: 3,
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather have a video game high-score list where your MEAN score is high, or where your MEDIAN score is high? Think about what one lucky monster-jackpot game does to each number before you answer!",
      answer:
        "One huge lucky game pulls the mean way up but barely moves the median. If you want a number that shows your TYPICAL skill, median is harder to fake — the mean can be inflated by a single lucky run.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Stat the Squad",
      challenge:
        "Collect a small real dataset from people or things around you — 5 to 7 values like family members' heights, ages, shoe sizes, or how many books each person read — then compute the mean, median, and range and present it.",
      steps: [
        "Choose what to measure and gather 5-7 real values.",
        "Sort the values and find the median (middle one).",
        "Add them up and divide by the count to get the mean.",
        "Subtract smallest from largest for the range, then write all three on a mini 'stat card.'"
      ],
      deliverable: "A 'stat card' listing your dataset and its mean, median, and range, with a sentence on what surprised you.",
      choiceBoard: [
        "Make a paper stat card with a tiny dot plot of the values.",
        "Build it in a spreadsheet and let it compute the totals.",
        "Record a 30-second 'sports commentator' video announcing your squad's stats."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Stats Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.math.w2.d5.arena1",
          type: "numeric",
          stem:
            "A gamer's scores are 12, 15, 9, 20, and one mystery score. The MEAN of all five scores is 16. What is the mystery score?",
          answer: 24,
          tolerance: 0,
          hintLadder: [
            "If the mean of 5 numbers is 16, what must all five add up to?",
            "Total must be 16 × 5 = 80.",
            "Add the four known scores (12+15+9+20 = 56) and subtract from 80: 80 - 56 = 24."
          ],
          explanation: "Mean 16 over 5 values means the sum is 80. The four known scores total 56, so the missing score is 80 - 56 = 24."
        },
        {
          id: "g6.math.w2.d5.arena2",
          type: "short_answer",
          stem:
            "A swim team's lap times are 30, 31, 30, 32, and 87 seconds. Should the coach describe the team's 'typical' time using the mean or the median? Explain using the numbers.",
          rubric: {
            level3: "Identifies 87 as an outlier, computes/estimates that the mean (42) is dragged up by it while the median (31) reflects most swimmers, and chooses median with reasoning.",
            level2: "Picks median and mentions the outlier OR the right numbers, but reasoning is incomplete.",
            level1: "Picks an option without referencing the outlier or the numbers."
          },
          exemplar:
            "The 87 is an outlier. The mean is (30+31+30+32+87)/5 = 42 seconds, which no swimmer is close to. The median is 31, which matches almost everyone, so the coach should use the median.",
          hintLadder: [
            "One value is very different from the rest — which one?",
            "Compute the mean and the median and compare them to the actual times.",
            "Which number better represents what MOST swimmers did?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Find Your Median Breath",
      prompt:
        "Take five slow breaths. Make the first short, the next two medium, and the last two long — then notice your 'median breath,' the middle one. Let your breathing settle into that comfortable middle pace for 30 seconds.",
      scienceTieIn:
        "Slow, even breathing activates the calming part of your nervous system, lowering your heart rate so your brain can think clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Mean, median, and range each tell a different story about the same data. Which one feels most like 'the real you' when describing your typical day, and why?",
      badge: { id: "stat-sleuth", name: "Stat Sleuth", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
