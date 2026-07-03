// Grade 7 Math — Spring Expedition, Week 5 (Measuring Change), Day 1.
// Grade-7 counterpart of springG6MathW5D1 (line graphs of change over time),
// pitched one level up: from reading points to computing the SLOPE (unit rate)
// of a growth curve and comparing rates across intervals.

export const springG7MathW5D1 = {
  id: "g7.spring.math.w5.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Math",
  topic: "Line graphs and slope as a unit rate of change",
  topicTag: "line-graphs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.2.B", "CCSS.7.RP.A.2.D"],
  hook: "Last year you read heights off a growth curve. This year you measure the curve's STEEPNESS as an actual number. The slope between two points — the change in height divided by the change in time — is the plant's growth rate in cm per day. When a line is straight, that slope is the constant of proportionality, and you can read it straight off the graph.",
  miniLesson: [
    "A line graph plots (time, height) points. The SLOPE between any two points is the vertical change (rise, Δheight) divided by the horizontal change (run, Δtime): slope = Δy ÷ Δx. Its units are height per time — cm per day.",
    "If the graph is a straight line through the points, the growth is proportional and the slope is constant: it is the unit rate, the height gained in ONE day. On a proportional graph that passes through (0, 0), the slope also equals height ÷ day for any point on the line.",
    "A steeper segment has a larger slope (faster growth); a flatter segment has a smaller slope. Comparing the slope of two intervals tells you when — or which plant — grew fastest, even if you never see the raw table."
  ],
  workedExample: {
    prompt: "A bean plant is at (2, 6) on Day 2 and (6, 18) on Day 6, and the points lie on a straight line. What is the slope, and what does it mean?",
    steps: [
      "Rise = change in height = 18 − 6 = 12 cm.",
      "Run = change in time = 6 − 2 = 4 days.",
      "Slope = rise ÷ run = 12 ÷ 4 = 3.",
      "The slope is 3 cm per day — the plant gains 3 cm of height every day, its constant growth rate."
    ],
    answer: "Slope = 12 ÷ 4 = 3 cm per day (the constant growth rate)."
  },
  items: [
    {
      id: "g7.spring.math.w5.d1.q1",
      type: "numeric",
      stem: "A growth line passes through (1, 4) and (5, 20). What is the slope of the line, in cm per day?",
      answer: 4,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Slope = (change in height) ÷ (change in time).",
        "Rise = 20 − 4 = 16; run = 5 − 1 = 4.",
        "16 ÷ 4 = 4 cm per day."
      ],
      explanation: "Slope = (20 − 4) ÷ (5 − 1) = 16 ÷ 4 = 4 cm per day."
    },
    {
      id: "g7.spring.math.w5.d1.q2",
      type: "numeric",
      stem: "A seedling's straight growth line passes through the origin (0, 0) and (4, 10). Using the slope, what height does the line predict on Day 6, in cm?",
      answer: 15,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "First find the slope (unit rate): 10 ÷ 4.",
        "The slope is 2.5 cm per day.",
        "Height on Day 6 = 2.5 × 6 = 15 cm."
      ],
      explanation: "Slope = 10 ÷ 4 = 2.5 cm/day. Since the line passes through (0,0), height = 2.5 × 6 = 15 cm on Day 6."
    },
    {
      id: "g7.spring.math.w5.d1.q3",
      type: "multiple_choice",
      stem: "On one growth graph, segment A runs from (0, 2) to (3, 8) and segment B runs from (3, 8) to (7, 12). Which segment shows FASTER growth, and why?",
      choices: [
        "Segment B, because it covers more days",
        "Segment A, because its slope is 2 cm/day while segment B's is 1 cm/day",
        "They grow at the same rate because both lines go up",
        "Segment B, because it ends at a taller height"
      ],
      answerIndex: 1,
      explanation: "Segment A slope = (8 − 2) ÷ (3 − 0) = 6 ÷ 3 = 2 cm/day. Segment B slope = (12 − 8) ÷ (7 − 3) = 4 ÷ 4 = 1 cm/day. A steeper slope (2 > 1) means faster growth.",
      hintLadder: [
        "Compute each segment's slope: rise ÷ run.",
        "Segment A: 6 ÷ 3. Segment B: 4 ÷ 4.",
        "2 cm/day vs. 1 cm/day — the bigger slope is faster."
      ],
      misconceptionsTargeted: ["confuses-height-with-slope"]
    },
    {
      id: "g7.spring.math.w5.d1.q4",
      type: "numeric",
      stem: "A straight growth line has a slope of 2.5 cm per day and passes through (2, 9). What height, in cm, does the line predict on Day 8?",
      answer: 24,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "From Day 2 to Day 8 is 6 days.",
        "Extra growth = slope × days = 2.5 × 6 = 15 cm.",
        "Height = starting 9 cm + 15 cm = 24 cm."
      ],
      explanation: "Days elapsed = 8 − 2 = 6. Growth = 2.5 × 6 = 15 cm. Height = 9 + 15 = 24 cm.",
      misconceptionsTargeted: ["confuses-height-with-slope"]
    },
    {
      id: "g7.spring.math.w5.d1.q5",
      type: "short_answer",
      stem: "Two plants are graphed on the same axes as straight lines. Plant A has a slope of 4 cm/day and Plant B has a slope of 2 cm/day, but Plant B's line starts higher on the y-axis. Explain what the slope tells you versus what the starting height tells you, and which plant is GROWING faster.",
      rubric: {
        level3: "Distinguishes slope (rate of growth per day) from the y-intercept/starting height (how tall it began), states Plant A grows faster because its slope 4 > 2, and notes starting taller does not mean growing faster.",
        level2: "Says Plant A grows faster from the slope, but blurs the difference between starting height and rate.",
        level1: "No clear separation of slope from starting height, or picks the wrong plant."
      },
      exemplar: "Slope is the growth RATE — Plant A gains 4 cm every day and Plant B gains only 2 cm a day, so Plant A is growing faster. Plant B's line starting higher just means it began taller; the starting height doesn't change how fast it grows. Since 4 cm/day is a steeper slope than 2 cm/day, Plant A's line will eventually climb past Plant B's.",
      hintLadder: [
        "What does the slope measure — starting size or speed of change?",
        "What does where the line starts on the y-axis tell you instead?",
        "Compare the two slopes to decide who grows faster."
      ]
    }
  ],
  reflectionPrompt: "If you graphed your savings each week as a straight line, the slope would be your 'dollars per week.' Would putting more in the jar change the slope, the starting height, or both? Explain.",
  misconceptionBank: [
    {
      id: "confuses-height-with-slope",
      label: "Confuses how TALL a plant is with how FAST it grows",
      description: "Assumes the plant that is currently taller (higher on the graph) must have the greater growth rate, ignoring that slope, not height, measures speed.",
      coachMove: "Point to two points and compute rise ÷ run for the rate. A plant can be tall but flat (small slope) or short but climbing steeply (big slope) — height and slope are different questions."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Height, Different Slope",
      prompt:
        "Two growth lines both pass through the point (5, 15) — both plants are 15 cm tall on Day 5. But one line is steep and one is gentle. Without any more numbers, what can you say about how these two plants have been growing, even though they're the exact same height right now?",
      answer:
        "The steep line has a bigger slope, so that plant has been gaining more centimeters per day — it grew quickly to reach 15 cm. The gentle line has a smaller slope, so it grew slowly and took its time to reach the same height. Same height today, different rates of change.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Slope Detective",
      challenge:
        "Create a straight-line growth graph and label its slope as a unit rate, then challenge a partner to read the growth rate straight off your line without seeing your table.",
      materials: ["Graph paper or a drawing app", "A ruler for a straight line"],
      steps: [
        "Pick a constant growth rate (like 3 cm/day) and a starting height, then plot at least 4 points that lie on one straight line.",
        "Draw the line and mark two clear points on it with their coordinates.",
        "Next to the line, show the rise ÷ run triangle you'd use to find the slope.",
        "Write the slope as a unit rate in 'cm per day' and one sentence on what it means for the plant."
      ],
      deliverable: "A labeled straight-line growth graph with a rise/run slope triangle and the growth rate written as a unit rate.",
      choiceBoard: [
        "Draw the line and slope triangle by hand on graph paper.",
        "Build it in a spreadsheet, add a trendline, and label its slope.",
        "Make a 'guess my slope' card: show the line, hide the numbers, and have a friend compute the rate."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Slope Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w5.d1.arena1",
          type: "numeric",
          stem: "A straight growth line passes through (2, 7) and (8, 25). What is its slope, in cm per day?",
          answer: 3,
          tolerance: 0,
          unit: "cm per day",
          hintLadder: [
            "Rise = 25 − 7; run = 8 − 2.",
            "Rise = 18, run = 6.",
            "18 ÷ 6 = 3 cm per day."
          ],
          explanation: "Slope = (25 − 7) ÷ (8 − 2) = 18 ÷ 6 = 3 cm per day."
        },
        {
          id: "g7.spring.math.w5.d1.arena2",
          type: "multiple_choice",
          stem: "A proportional growth line passes through the origin and has a slope of 2.5 cm/day. Which point must ALSO lie on this line?",
          choices: [
            "(4, 8)",
            "(4, 10)",
            "(10, 4)",
            "(2, 2.5)"
          ],
          answerIndex: 1,
          explanation: "On a proportional line through (0,0), height = slope × day. For day 4: 2.5 × 4 = 10, so (4, 10) is on the line.",
          hintLadder: [
            "On a line through the origin, height = slope × day.",
            "Multiply the slope 2.5 by each choice's day value.",
            "2.5 × 4 = 10, so (4, 10) fits."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Steep and Gentle",
      prompt:
        "Make your arm a slope line. Hold it out at a gentle angle (small slope) and slowly raise it to steep (big slope), saying 'small rate... big rate' as it climbs. Do a steep-slope jump (rise fast) and a gentle-slope stretch (rise slow). Repeat the pair 3 times.",
      scienceTieIn:
        "Changing the angle and speed of a movement makes your brain track rate of change with your whole body — the same rise-over-run idea you just computed on the graph.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Slope turns a shape into a number. Think of something in your life that changes at a steady rate — allowance saved, pages read, minutes practiced. What would its slope be, and what units would it have?",
      badge: { id: "g7-spring-slope-scout", name: "Slope Scout", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
