// Grade 7 Math — Spring Expedition, Week 5 (Measuring Change), Day 2.
// Grade-7 counterpart of springG6MathW5D2 (rate of change), pitched one level
// up: from a single rate to the AVERAGE rate of change over an interval, using
// it to make predictions and to reason about non-constant (changing) rates.

export const springG7MathW5D2 = {
  id: "g7.spring.math.w5.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Math",
  topic: "Average rate of change and prediction",
  topicTag: "rate-of-change",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.2.C", "CCSS.7.RP.A.3"],
  hook: "A real plant doesn't grow the same amount every day — some days it shoots up, some days it barely moves. So how do you put ONE number on its growth? You find the AVERAGE rate of change over an interval: total change divided by total time. Then you can use that rate to predict where the plant will be next week.",
  miniLesson: [
    "Average rate of change = (change in amount) ÷ (change in time) over an interval. Even when the day-to-day growth varies, this gives a single 'per day' rate that summarizes the whole stretch: for example, growing from 8 cm to 26 cm over 6 days averages (26 − 8) ÷ 6 = 3 cm per day.",
    "The rate between two points can differ from the rate between two OTHER points on the same plant. A plant might average 2 cm/day early and 5 cm/day later — comparing interval rates shows when growth sped up or slowed down.",
    "Once you have an average rate, you can PREDICT: predicted amount = starting amount + rate × time. Predictions assume the rate stays the same, so they're estimates — real growth may curve away from a straight-line prediction."
  ],
  workedExample: {
    prompt: "A sunflower grows from 12 cm to 42 cm over 10 days. Find the average rate of change, then predict its height on Day 15 if that rate continues.",
    steps: [
      "Change in height = 42 − 12 = 30 cm; change in time = 10 days.",
      "Average rate = 30 ÷ 10 = 3 cm per day.",
      "From Day 10 to Day 15 is 5 more days: extra growth = 3 × 5 = 15 cm.",
      "Predicted Day 15 height = 42 + 15 = 57 cm (assuming the rate holds)."
    ],
    answer: "Average rate = 3 cm/day; predicted Day 15 height ≈ 57 cm."
  },
  items: [
    {
      id: "g7.spring.math.w5.d2.q1",
      type: "numeric",
      stem: "A bean plant grows from 7 cm to 31 cm over 8 days. What is its average rate of change, in cm per day?",
      answer: 3,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Average rate = (change in height) ÷ (change in time).",
        "Change = 31 − 7 = 24 cm over 8 days.",
        "24 ÷ 8 = 3 cm per day."
      ],
      explanation: "Average rate = (31 − 7) ÷ 8 = 24 ÷ 8 = 3 cm per day."
    },
    {
      id: "g7.spring.math.w5.d2.q2",
      type: "numeric",
      stem: "A vine averages 4 cm of growth per day and is 20 cm tall today. Using this rate, predict its height in 6 days, in cm.",
      answer: 44,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Predicted height = starting height + rate × time.",
        "Extra growth = 4 × 6 = 24 cm.",
        "20 + 24 = 44 cm."
      ],
      explanation: "Predicted height = 20 + (4 × 6) = 20 + 24 = 44 cm, assuming the 4 cm/day rate continues."
    },
    {
      id: "g7.spring.math.w5.d2.q3",
      type: "numeric",
      stem: "A seedling grew from 5 cm to 11 cm during Days 0–3, then from 11 cm to 29 cm during Days 3–6. What is the average rate of change in cm per day for the SECOND interval (Days 3–6)?",
      answer: 6,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Use only the second interval: from 11 cm to 29 cm over 3 days.",
        "Change = 29 − 11 = 18 cm over 3 days.",
        "18 ÷ 3 = 6 cm per day."
      ],
      explanation: "Second interval: (29 − 11) ÷ (6 − 3) = 18 ÷ 3 = 6 cm per day (faster than the first interval's 2 cm/day).",
      misconceptionsTargeted: ["assumes-rate-is-constant"]
    },
    {
      id: "g7.spring.math.w5.d2.q4",
      type: "multiple_choice",
      stem: "Plant A grew 45 cm in 9 days. Plant B grew 32 cm in 8 days. Which plant had the greater AVERAGE rate of change, and by how much?",
      choices: [
        "Plant B, because 8 days is a longer, steadier stretch",
        "Plant A, whose average is 5 cm/day versus Plant B's 4 cm/day — 1 cm/day greater",
        "They tie, because both grew a lot",
        "Plant A, because 45 cm is a bigger total"
      ],
      answerIndex: 1,
      explanation: "Plant A: 45 ÷ 9 = 5 cm/day. Plant B: 32 ÷ 8 = 4 cm/day. Plant A's average rate is greater by 5 − 4 = 1 cm/day. Compare rates, not totals.",
      hintLadder: [
        "Compute each plant's average rate: total ÷ days.",
        "Plant A: 45 ÷ 9. Plant B: 32 ÷ 8.",
        "5 cm/day vs. 4 cm/day — the difference is 1 cm/day."
      ],
      misconceptionsTargeted: ["bigger-total-means-faster"]
    },
    {
      id: "g7.spring.math.w5.d2.q5",
      type: "short_answer",
      stem: "A gardener uses a plant's average rate of change over its first 10 days to predict its height on Day 30. Explain why this prediction might be OFF, using the idea that the rate of change may not stay constant.",
      rubric: {
        level3: "Explains that a prediction assumes the average rate continues, but real growth rates change (plants often grow fast then slow/level off), so extending an early average far into the future can over- or under-estimate the true height.",
        level2: "Says the prediction could be wrong but the reasoning about the rate changing over time is thin or generic.",
        level1: "No clear connection to the rate of change not staying constant."
      },
      exemplar: "The prediction treats the first 10 days' average rate as if it never changes, but plants usually don't grow at a steady rate forever — they often speed up, then slow down and level off as they mature. So using an early fast rate to predict Day 30 could overestimate the height, because the real rate of change probably drops later. A straight-line prediction is only a rough estimate.",
      hintLadder: [
        "What does the prediction assume about the growth rate over time?",
        "Do real plants keep growing at the exact same rate forever?",
        "Connect a changing rate to why the far-future estimate could be off."
      ]
    }
  ],
  reflectionPrompt: "Think of a skill you've been improving. Was your 'average rate of improvement' faster at the very start or later on? If you predicted next month's progress from your first week, would you over- or under-guess?",
  misconceptionBank: [
    {
      id: "bigger-total-means-faster",
      label: "Compares totals instead of average rates",
      description: "Calls the plant with the larger total growth 'faster' even when it grew over more days and has a smaller per-day rate.",
      coachMove: "Divide each total by its time to get the average rate FIRST, then compare. A bigger total over more days can still be a slower rate."
    },
    {
      id: "assumes-rate-is-constant",
      label: "Assumes the growth rate is the same over every interval",
      description: "Uses one interval's rate as if it applies to all intervals, missing that a plant can grow slowly early and quickly later (or vice versa).",
      coachMove: "Compute the rate for each interval separately — Days 0–3 and Days 3–6 can have very different average rates on the same plant."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Bet on the Grower",
      prompt:
        "Would you rather bet on Plant A, which grew 45 cm in 9 days, or Plant B, which grew 32 cm in 8 days, to be the fastest average grower? Work out each one's cm-per-day average before you place your bet!",
      answer:
        "Plant A: 45 ÷ 9 = 5 cm per day. Plant B: 32 ÷ 8 = 4 cm per day. Plant A wins the average-rate race at 5 cm/day. The totals looked close, but dividing by the days reveals the real speed.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The Prediction Challenge",
      challenge:
        "Invent a plant whose growth rate CHANGES across intervals, compute the average rate for each interval, then use one interval's rate to make a prediction — and note whether it would over- or under-shoot.",
      steps: [
        "Make a table of heights for Days 0, 3, 6, and 9 where the growth is not the same each interval.",
        "Compute the average rate of change for each 3-day interval (change ÷ 3).",
        "Pick one interval's rate and predict the Day 12 height with 'starting + rate × time.'",
        "Write one sentence saying whether your prediction likely over- or under-estimates, and why."
      ],
      deliverable: "A height table with each interval's average rate labeled and one prediction with a note on its accuracy.",
      choiceBoard: [
        "Draw the curve and mark each interval's average rate.",
        "Build a spreadsheet that computes each interval rate and the prediction.",
        "Write a 'growth forecast' like a weather report, calling each interval's rate and the Day 12 prediction."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Prediction Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w5.d2.arena1",
          type: "numeric",
          stem: "A pea shoot grew from 6 cm to 30 cm over 8 days. Using that average rate, predict its height on Day 12 (4 days later), in cm.",
          answer: 42,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Average rate = (30 − 6) ÷ 8 = 24 ÷ 8 = 3 cm/day.",
            "Extra growth in 4 more days = 3 × 4 = 12 cm.",
            "30 + 12 = 42 cm."
          ],
          explanation: "Average rate = 24 ÷ 8 = 3 cm/day; predicted Day 12 = 30 + 3 × 4 = 42 cm."
        },
        {
          id: "g7.spring.math.w5.d2.arena2",
          type: "numeric",
          stem: "A plant grew from 4 cm to 10 cm during Days 0–2, then 10 cm to 34 cm during Days 2–6. How much GREATER is the average rate of the second interval than the first, in cm per day?",
          answer: 3,
          tolerance: 0,
          unit: "cm per day",
          hintLadder: [
            "First interval: (10 − 4) ÷ 2 = 3 cm/day.",
            "Second interval: (34 − 10) ÷ 4 = 6 cm/day.",
            "6 − 3 = 3 cm/day greater."
          ],
          explanation: "First rate = 6 ÷ 2 = 3 cm/day; second rate = 24 ÷ 4 = 6 cm/day; difference = 6 − 3 = 3 cm/day."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Speed Up, Slow Down",
      prompt:
        "Grow like a changing-rate plant. Rise from the floor slowly for the first 4 counts (small rate), then shoot up fast for the next 2 counts (big rate). Freeze at the top and picture the two different slopes. Reverse it on the way down. Repeat twice.",
      scienceTieIn:
        "Varying your movement speed makes your heart change its own rate to match — your body is literally averaging a changing rate of effort, just like the growth intervals you compared.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Predictions from an average rate are only as good as the assumption that the rate holds. When has something in your life NOT continued at its early pace — for better or worse? What changed the rate?",
      badge: { id: "g7-spring-rate-forecaster", name: "Rate Forecaster", emoji: "🔮" },
      estimatedMinutes: 7
    }
  }
};
