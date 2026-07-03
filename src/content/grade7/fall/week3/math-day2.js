// Grade 7 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 2.
// Topic: reading data and drawing inferences from bar & line graphs.
// Grade-7 lift: mean/range, comparing two data sets, percent change,
// and drawing inferences (not just reading values).

export const fallG7MathW3D2 = {
  id: "g7.fall.math.w3.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Math",
  topic: "Reading data — bar and line graphs, with inference",
  topicTag: "data-graphs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.B.3", "CCSS.7.SP.B.4"],
  hook: "A farmer's notebook is full of numbers. Turn them into a graph and the story jumps out — but a Grade 7 data detective goes further: computing the mean, the range, and the percent change, then drawing a fair inference.",
  miniLesson: [
    "A bar graph compares categories; a line graph shows change over time. Read axis labels and scale FIRST, or every value is wrong.",
    "The mean (average) = sum of values ÷ number of values; the range = highest − lowest. Together they summarize a data set.",
    "Percent change = (new − old) ÷ old × 100. A fair inference stays within what the data supports — no wild leaps."
  ],
  workedExample: {
    prompt: "Apple yield by month: Sep 100, Oct 140, Nov 120. Find the mean, the range, and the percent change from Sep to Oct.",
    steps: [
      "Mean = (100 + 140 + 120) ÷ 3 = 360 ÷ 3 = 120.",
      "Range = highest − lowest = 140 − 100 = 40.",
      "Percent change Sep→Oct = (140 − 100) ÷ 100 × 100 = 40%.",
      "Inference: yield peaked in October, up 40% from September, then eased back."
    ],
    answer: "Mean 120, range 40, and a 40% increase from Sep to Oct."
  },
  items: [
    {
      id: "g7.fall.math.w3.d2.q1",
      type: "multiple_choice",
      stem: "Corn yield was tracked each month for a whole season. Which display BEST reveals the month-to-month trend so you can infer when growth sped up?",
      choices: ["Pie chart", "Bar graph of two categories", "Line graph over time", "Single tally mark"],
      answerIndex: 2,
      explanation: "A line graph connects points in time order, making rises, dips, and turning points easy to infer.",
      hintLadder: [
        "The key idea is 'month-to-month trend' — change over time.",
        "Which display connects data points across time?",
        "A line graph shows trends over time."
      ]
    },
    {
      id: "g7.fall.math.w3.d2.q2",
      type: "numeric",
      stem: "A bar graph shows harvest weights (kg): apples 60, corn 90, squash 45, beans 65. What is the MEAN weight across the four crops?",
      answer: 65,
      tolerance: 0,
      unit: "kg",
      hintLadder: [
        "Mean = sum of all values ÷ how many values.",
        "Add: 60 + 90 + 45 + 65 = 260.",
        "260 ÷ 4 = 65 kg."
      ],
      explanation: "(60 + 90 + 45 + 65) ÷ 4 = 260 ÷ 4 = 65 kg."
    },
    {
      id: "g7.fall.math.w3.d2.q3",
      type: "numeric",
      stem: "Pumpkin sales rose from 80 in Week 1 to 100 in Week 2. What is the percent increase from Week 1 to Week 2?",
      answer: 25,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent change = (new − old) ÷ old × 100.",
        "Change = 100 − 80 = 20; divide by the OLD value, 80.",
        "20 ÷ 80 = 0.25 = 25%."
      ],
      explanation: "(100 − 80) ÷ 80 × 100 = 20 ÷ 80 × 100 = 25%.",
      misconceptionsTargeted: ["percent-change-wrong-base"]
    },
    {
      id: "g7.fall.math.w3.d2.q4",
      type: "multiple_choice",
      stem: "A line graph's y-axis counts by 20s. A plotted point sits exactly halfway between the 60 and 80 gridlines. What value is it?",
      choices: ["65", "68", "70", "75"],
      answerIndex: 2,
      explanation: "Halfway between 60 and 80 is (60 + 80) ÷ 2 = 70 — you must read the scale, not assume gridlines count by 1.",
      hintLadder: [
        "Check the scale: gridlines are 20 apart.",
        "Find the midpoint of 60 and 80.",
        "(60 + 80) ÷ 2 = 70."
      ],
      misconceptionsTargeted: ["ignores-axis-scale"]
    },
    {
      id: "g7.fall.math.w3.d2.q5",
      type: "short_answer",
      stem: "Squash yields were: Week 1 = 20, Week 2 = 35, Week 3 = 30, Week 4 = 45. Compute the mean and the range, describe the trend, and give ONE fair inference the data supports.",
      rubric: {
        level3: "Correctly computes mean = 32.5 and range = 25, describes the overall upward-but-bumpy trend (dip in Week 3), AND states a fair inference (e.g., yields are generally climbing) without overclaiming.",
        level2: "Gets the mean or range and the trend, but not all three, or makes a mild overclaim.",
        level1: "Misreads the data, wrong mean/range, or an unsupported inference."
      },
      exemplar: "Mean = (20 + 35 + 30 + 45) ÷ 4 = 130 ÷ 4 = 32.5. Range = 45 − 20 = 25. The trend rose overall but dipped in Week 3. A fair inference: squash production is generally increasing, though it isn't steady week to week — I can't yet claim it will keep rising.",
      hintLadder: [
        "Mean = sum ÷ 4; range = highest − lowest.",
        "Order the weeks and note where it rises and dips.",
        "Make an inference the four points actually support — avoid predicting far beyond the data."
      ]
    }
  ],
  reflectionPrompt: "Think of something you could track for 4 weeks. Would a bar or a line graph tell its story better, and what mean or range would you report?",
  misconceptionBank: [
    {
      id: "ignores-axis-scale",
      label: "Reads gridlines as counting by 1",
      description: "Assumes each gridline is one unit instead of checking the scale.",
      coachMove: "Always read two labeled gridlines and find the gap between them before reading any point."
    },
    {
      id: "percent-change-wrong-base",
      label: "Divides by the new value instead of the old",
      description: "Computes percent change against the new amount rather than the original (base) amount.",
      coachMove: "Percent change always divides the difference by the ORIGINAL value — the 'from' number, not the 'to' number."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Which Graph, Which Number?",
      prompt:
        "A farmer wants to show apple yield across Sep, Oct, and Nov AND report a single number that summarizes the season. Which graph shows the rising-then-falling story best, and would you report the mean or the range as your one summary number? Say why.",
      answer:
        "A line graph shows the climb-then-drop at a glance. For a single summary number the mean (average yield) captures the typical month, while the range shows how much it swung — pick the mean if you want the 'typical' month, the range if you want the spread.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Graph Your Own Harvest",
      challenge:
        "Collect (or invent) 4 data points about a fall thing you can count — leaves raked each day, pumpkins at 4 stands, temperature over 4 days. Turn it into a labeled graph, then compute the mean and range and write one honest inference.",
      steps: [
        "Choose your data and write down 4 labeled values.",
        "Decide: bar graph (categories) or line graph (over time)?",
        "Draw the graph with labeled axes and a clear scale.",
        "Compute the mean and range, then write one inference the data actually supports."
      ],
      deliverable: "A labeled graph plus its mean, its range, and a one-sentence fair inference.",
      choiceBoard: [
        "Draw a bar graph comparing categories, with the mean marked as a line.",
        "Draw a line graph over 4 days and label the percent change between two points.",
        "Make a 'data detective' poster with your graph, its mean and range, and 2 inferences it supports."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w3.d2.arena1",
          type: "numeric",
          stem: "Weekly pumpkin sales were 40, 55, 60, and 85. What is the percent increase from Week 1 (40) to Week 4 (85)?",
          answer: 112.5,
          tolerance: 0.1,
          unit: "%",
          hintLadder: [
            "Percent change = (new − old) ÷ old × 100.",
            "Change = 85 − 40 = 45; divide by the old value 40.",
            "45 ÷ 40 = 1.125 = 112.5%."
          ],
          explanation: "(85 − 40) ÷ 40 × 100 = 45 ÷ 40 × 100 = 112.5%."
        },
        {
          id: "g7.fall.math.w3.d2.arena2",
          type: "multiple_choice",
          stem: "A line graph's y-axis counts by 25s. A point sits exactly one-quarter of the way UP from the 50 gridline toward the 75 gridline. What value is it?",
          choices: ["56.25", "62.5", "68.75", "58"],
          answerIndex: 0,
          explanation: "The gap from 50 to 75 is 25. One-quarter of 25 is 6.25, so the value is 50 + 6.25 = 56.25.",
          hintLadder: [
            "The gap between 50 and 75 is 25 units.",
            "One-quarter of that gap is 25 ÷ 4 = 6.25.",
            "Add it to 50: 50 + 6.25 = 56.25."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Be the Line Graph",
      prompt:
        "Stand and 'draw' a line graph with your arm: low for a small harvest, sweep high for a peak, dip back for a slow week. Trace 4 made-up weeks, then hold your arm at the 'mean' height and breathe for 3 counts.",
      scienceTieIn:
        "Combining movement with steady breathing boosts blood flow to your brain, helping you reset before the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's something in your own life you could track for a week and graph? Would you summarize it with the mean or the range, and why that one?",
      badge: { id: "g7-fall-harvest-data-analyst", name: "Harvest Data Analyst", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
