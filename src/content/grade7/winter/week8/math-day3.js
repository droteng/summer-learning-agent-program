// Grade 7 Math — Winter Showcase, Week 8, Day 3.
// Topic: data synthesis and inference — turn winter results into graphs and
// honest summary statistics, then make a defensible inference. Pitched up:
// mean absolute deviation (MAD), comparing distributions, and inference.

export const winterG7MathW8D3 = {
  id: "g7.winter.math.w8.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis and inference — summary statistics, spread (MAD), and honest comparison",
  topicTag: "data-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.B.4", "CCSS.7.SP.B.3"],
  hook: "Your winter investigation gave you numbers — snow depths, temperatures, timings. A capstone mathematician doesn't just report an average; they measure the SPREAD, compare two data sets fairly, and make a defensible INFERENCE. Today you turn raw data into an honest, evidence-backed claim for your showcase.",
  miniLesson: [
    "The MEAN and MEDIAN describe the CENTER, but the spread matters just as much. The RANGE (max − min) is quick but easily distorted by one outlier.",
    "The MEAN ABSOLUTE DEVIATION (MAD) measures typical spread: find the mean, take each value's DISTANCE from that mean (always positive), then average those distances. A larger MAD means the data is more spread out.",
    "To compare two data sets HONESTLY, compare BOTH center and spread — and only make an inference the data actually supports. Two cities can share a mean snowfall yet differ wildly in how reliable that average is (their MAD)."
  ],
  workedExample: {
    prompt: "Snow depths over 5 days (cm): 4, 8, 6, 10, 12. Find the mean and the mean absolute deviation (MAD).",
    steps: [
      "MEAN: 4 + 8 + 6 + 10 + 12 = 40; 40 ÷ 5 = 8 cm.",
      "DISTANCES from the mean of 8: |4−8|=4, |8−8|=0, |6−8|=2, |10−8|=2, |12−8|=4.",
      "Sum of distances: 4 + 0 + 2 + 2 + 4 = 12.",
      "MAD = average distance = 12 ÷ 5 = 2.4 cm. Report both: mean 8 cm, MAD 2.4 cm."
    ],
    answer: "Mean = 8 cm; MAD = 2.4 cm (values sit, on average, 2.4 cm from the mean)."
  },
  items: [
    {
      id: "g7.winter.math.w8.d3.q1",
      type: "numeric",
      stem: "Icicle lengths (cm): 5, 7, 9, 3, 6. What is the MEAN absolute deviation (MAD)? (First find the mean, then average the distances from it.)",
      answer: 1.6,
      tolerance: 0.01,
      unit: "cm",
      hintLadder: [
        "Mean first: (5 + 7 + 9 + 3 + 6) ÷ 5 = 30 ÷ 5 = 6.",
        "Distances from 6: |5−6|=1, |7−6|=1, |9−6|=3, |3−6|=3, |6−6|=0.",
        "Average the distances: (1 + 1 + 3 + 3 + 0) ÷ 5 = 8 ÷ 5 = 1.6."
      ],
      explanation: "Mean = 30 ÷ 5 = 6. Distances: 1, 1, 3, 3, 0, summing to 8. MAD = 8 ÷ 5 = 1.6 cm."
    },
    {
      id: "g7.winter.math.w8.d3.q2",
      type: "numeric",
      stem: "Morning temperatures (°C) for a week: -2, 0, -4, 2, -1. What is the MEAN temperature?",
      answer: -1,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Add carefully with negatives: (-2) + 0 + (-4) + 2 + (-1).",
        "The sum is -5.",
        "Divide by 5: -5 ÷ 5 = -1."
      ],
      explanation: "Sum = (-2) + 0 + (-4) + 2 + (-1) = -5; mean = -5 ÷ 5 = -1 °C."
    },
    {
      id: "g7.winter.math.w8.d3.q3",
      type: "numeric",
      stem: "Daily snowfall (cm) over 8 days: 3, 9, 5, 12, 8, 6, 15, 2. What is the MEDIAN snowfall? (Sort first; with 8 values, average the two middle ones.)",
      answer: 7,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Sort: 2, 3, 5, 6, 8, 9, 12, 15.",
        "With 8 values, the two middle are the 4th and 5th: 6 and 8.",
        "Median = (6 + 8) ÷ 2 = 7."
      ],
      explanation: "Sorted: 2, 3, 5, 6, 8, 9, 12, 15. Middle two (4th & 5th) are 6 and 8; median = (6 + 8) ÷ 2 = 7 cm."
    },
    {
      id: "g7.winter.math.w8.d3.q4",
      type: "multiple_choice",
      stem: "City A and City B both average 20 cm of snow per storm. City A's MAD is 2 cm; City B's MAD is 11 cm. What honest INFERENCE does the data support?",
      choices: [
        "City A gets more total snow than City B.",
        "The two cities are identical because their means match.",
        "City A's snowfall is far more consistent (small spread), while City B's varies wildly from storm to storm.",
        "City B never gets 20 cm of snow."
      ],
      answerIndex: 2,
      explanation: "Equal means don't mean equal data. The much larger MAD for City B says its storms vary far more from the average, while City A's small MAD means its storms cluster near 20 cm — a difference in spread, not center.",
      hintLadder: [
        "The means are equal, so what's actually different?",
        "MAD measures spread — whose storms vary more from the average?",
        "Bigger MAD (City B) = more variation; smaller MAD (City A) = more consistent."
      ],
      misconceptionsTargeted: ["center-ignores-spread"]
    },
    {
      id: "g7.winter.math.w8.d3.q5",
      type: "short_answer",
      stem: "Your snow-depth data is 6, 7, 6, 8, and one storm day of 40. Explain how this outlier affects the MEAN versus the MEDIAN (compute both), and defend which measure you'd report at your showcase — and why the SPREAD matters too.",
      rubric: {
        level3: "Computes mean = 13.4 and median = 7, explains the outlier drags the mean far above a typical day while the median stays representative, defends reporting the median (or both + noting the outlier), AND notes the large spread/outlier is itself worth reporting honestly.",
        level2: "Correctly compares mean vs. median and picks the median, but doesn't address spread/honesty.",
        level1: "Doesn't correctly connect the outlier to mean vs. median."
      },
      exemplar: "Sorted: 6, 6, 7, 8, 40. Mean = 67 ÷ 5 = 13.4, but no ordinary day is near 13.4 — the 40 outlier drags it up. Median = 7, which matches a typical day. I'd report the median as the 'typical' value AND mention the 40 cm storm and the wide spread, because hiding the outlier or the spread would misrepresent my data.",
      hintLadder: [
        "Compute the mean including 40, then find the median of the sorted set.",
        "Which measure gets dragged up by the single huge value?",
        "Defend the median for 'typical,' but say why you'd still disclose the outlier and spread."
      ]
    }
  ],
  reflectionPrompt: "Statistics can reveal the truth or bury it. For your capstone, which single statistic — center or spread — best tells the real story of what you found this winter, and what inference does it honestly support?",
  misconceptionBank: [
    {
      id: "center-ignores-spread",
      label: "Judges data sets by center alone",
      description: "Assumes two data sets with the same mean or median are equivalent, ignoring how differently they spread.",
      coachMove: "Show two sets with equal means but very different MADs: 'Same average, but which is reliable? Spread tells you.'"
    },
    {
      id: "mean-median-same",
      label: "Assumes mean and median are always equal",
      description: "Thinks the average and the middle value are interchangeable, even when an outlier pulls them apart.",
      coachMove: "Add one huge value and compute both — watch the mean jump while the median barely moves."
    }
  ],
  stretch: {
    prompt: "For the set 6, 6, 7, 8, 40, compute the MAD and explain why it is so large.",
    answer: "Mean = 13.4. Distances: |6−13.4|=7.4, |6−13.4|=7.4, |7−13.4|=6.4, |8−13.4|=5.4, |40−13.4|=26.6; sum = 53.2; MAD = 53.2 ÷ 5 = 10.64 cm. It's huge because the 40 outlier sits far from the mean and inflates every distance."
  },
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Same Center, Different Story",
      prompt:
        "Two snow-fort crews each average 15 cm of wall height. Crew A's walls are 14, 15, 16 cm; Crew B's are 5, 15, 25 cm. Same mean — but which crew is more CONSISTENT, and what one word describes what's different?",
      answer:
        "Crew A is far more consistent. Both average 15, but Crew B is much more SPREAD OUT (its MAD is larger). The word is SPREAD (or variability) — the mean alone hides it!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest Inference Poster",
      challenge:
        "Turn your winter numbers into an HONEST inference poster. Make a clear graph, report center AND spread (mean, median, range, and MAD), then write ONE inference your data truly supports — plus an honesty note on any outlier or limitation.",
      steps: [
        "Choose the right graph (bar for categories, line for change over time) with labeled axes and a title.",
        "Compute and display the mean, median, range, and MAD side by side.",
        "Write ONE inference the data supports — and check it isn't claiming more than the numbers show.",
        "Add an honesty note flagging any outlier, small sample size, or spread that limits your claim."
      ],
      deliverable: "An inference poster: a labeled graph, center + spread statistics, one defensible inference, and an honesty note.",
      choiceBoard: [
        "Draw or build a graph poster with the full statistics and inference.",
        "Make a data table plus a written 'what we can and can't conclude' paragraph.",
        "Record a 60-second 'data report' presenting your inference and its limits honestly."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w8.d3.arena1",
          type: "numeric",
          stem: "Snowball throw distances (m): 6, 9, 12, 3, 10. What is the MEAN absolute deviation (MAD)?",
          answer: 2.8,
          tolerance: 0.01,
          unit: "m",
          hintLadder: [
            "Mean first: (6 + 9 + 12 + 3 + 10) ÷ 5 = 40 ÷ 5 = 8.",
            "Distances from 8: |6−8|=2, |9−8|=1, |12−8|=4, |3−8|=5, |10−8|=2.",
            "Average them: (2 + 1 + 4 + 5 + 2) ÷ 5 = 14 ÷ 5 = 2.8."
          ],
          explanation: "Mean = 40 ÷ 5 = 8. Distances 2, 1, 4, 5, 2 sum to 14; MAD = 14 ÷ 5 = 2.8 m."
        },
        {
          id: "g7.winter.math.w8.d3.arena2",
          type: "numeric",
          stem: "Six days of ice thickness (cm): 4, 6, 6, 8, 10, 14. What is the MEDIAN thickness?",
          answer: 7,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "The data is already sorted; there are 6 values (even count).",
            "The two middle values are the 3rd and 4th: 6 and 8.",
            "Median = (6 + 8) ÷ 2 = 7."
          ],
          explanation: "With 6 sorted values, the median is the mean of the 3rd and 4th: (6 + 8) ÷ 2 = 7 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Spread It Out",
      prompt:
        "Show spread with your body! For a CONSISTENT data set, sway gently in a tight, small motion. For a SPREAD-OUT data set, make big, varied movements — reach wide, then low, then high, unpredictably. Alternate 'tight' and 'wide' 4 times, calling out small MAD / big MAD.",
      scienceTieIn: "Feeling the difference between tight and wide motion builds an intuition for variability — the same intuition that makes MAD and spread easy to read on a graph.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your winter data is now a graph, a set of honest statistics, and a defensible inference. What is the ONE claim your data truly supports — and what did you have to be careful NOT to claim?",
      badge: { id: "g7-winter-data-synthesist", name: "Data Synthesist", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
