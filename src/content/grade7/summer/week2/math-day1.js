// Grade 7 Math — Summer Program, Week 2 (Numbers in the Real World), Day 1.
// Topic: proportional relationships & unit rates — constant of proportionality,
// reading it from tables and graphs. Project: build a mini data dashboard.

export const summerG7MathW2D1 = {
  id: "g7.summer.math.w2.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Math",
  topic: "Proportional relationships & unit rates",
  topicTag: "proportional-relationships",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.2", "CCSS.7.RP.A.2.B"],
  hook: "A dashboard turns raw numbers into a story: miles per hour, cost per pound, downloads per day. Every one of those is a unit rate — the constant that ties two quantities together. Today you find that constant and use it to predict.",
  miniLesson: [
    "Two quantities are proportional if their ratio is always the same. That constant ratio is the constant of proportionality, written k, where y = k·x.",
    "A unit rate is k written as 'per one': if 3 lbs cost $6, then k = 6 ÷ 3 = $2 per pound. In a table, k = y ÷ x for every row.",
    "On a graph, a proportional relationship is a straight line through the origin (0, 0); k is how steep it climbs — the y-value when x = 1."
  ],
  workedExample: {
    prompt: "A data plan shows: 2 GB for $6, 5 GB for $15, 8 GB for $24. Find the constant of proportionality and the cost of 12 GB.",
    steps: [
      "Check each row's ratio y ÷ x: 6 ÷ 2 = 3, 15 ÷ 5 = 3, 24 ÷ 8 = 3.",
      "All rows give 3, so the relationship is proportional with k = 3 ($3 per GB).",
      "The equation is cost = 3 · GB.",
      "For 12 GB: 3 × 12 = $36."
    ],
    answer: "k = $3 per GB, so 12 GB costs $36."
  },
  items: [
    {
      id: "g7.summer.math.w2.d1.q1",
      type: "numeric",
      stem: "A bike travels 45 miles in 3 hours at a steady speed. What is the unit rate in miles per hour?",
      answer: 15,
      tolerance: 0,
      unit: "mph",
      hintLadder: [
        "Unit rate means 'per one hour' — divide miles by hours.",
        "45 ÷ 3.",
        "45 ÷ 3 = 15 miles per hour."
      ],
      explanation: "Unit rate = 45 ÷ 3 = 15 miles per hour."
    },
    {
      id: "g7.summer.math.w2.d1.q2",
      type: "numeric",
      stem: "A table shows 4 downloads use 20 MB, 7 downloads use 35 MB, 10 downloads use 50 MB. What is the constant of proportionality k (MB per download)?",
      answer: 5,
      tolerance: 0,
      unit: "MB per download",
      hintLadder: [
        "k is the same y ÷ x for every row.",
        "Try 20 ÷ 4, then check 35 ÷ 7.",
        "20 ÷ 4 = 5, 35 ÷ 7 = 5, 50 ÷ 10 = 5, so k = 5."
      ],
      explanation: "Every row gives y ÷ x = 5, so k = 5 MB per download."
    },
    {
      id: "g7.summer.math.w2.d1.q3",
      type: "numeric",
      stem: "A proportional relationship has the equation y = 6x. What is y when x = 9?",
      answer: 54,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Substitute x = 9 into y = 6x.",
        "Multiply 6 by 9.",
        "6 × 9 = 54."
      ],
      explanation: "y = 6 · 9 = 54."
    },
    {
      id: "g7.summer.math.w2.d1.q4",
      type: "multiple_choice",
      stem: "Which table shows a proportional relationship (constant y ÷ x)?",
      choices: [
        "x: 1, 2, 3 → y: 4, 9, 12",
        "x: 1, 2, 3 → y: 3, 5, 7",
        "x: 2, 4, 6 → y: 5, 10, 15",
        "x: 2, 3, 5 → y: 6, 8, 11"
      ],
      answerIndex: 2,
      explanation: "For x: 2,4,6 → y: 5,10,15, each ratio y ÷ x = 2.5, so it is proportional. The others have ratios that change from row to row.",
      hintLadder: [
        "Proportional means y ÷ x is the SAME in every row.",
        "Test each option: divide each y by its x.",
        "Only 5÷2, 10÷4, 15÷6 all equal 2.5."
      ],
      misconceptionsTargeted: ["constant-difference-not-ratio"]
    },
    {
      id: "g7.summer.math.w2.d1.q5",
      type: "short_answer",
      stem: "A dashboard graph of 'songs streamed vs. data used' is a straight line passing through the origin, and the point (1, 4) is on it. Explain what the constant of proportionality is, what it means, and how you'd find the data used for 15 songs.",
      rubric: {
        level3: "States k = 4 (MB per song) read from the point (1, 4), explains it means 4 MB per song because the line goes through the origin, and computes 4 × 15 = 60 MB.",
        level2: "Identifies k = 4 and multiplies for 15 songs but the meaning/through-origin reasoning is unclear.",
        level1: "Wrong k, no computation, or no reasoning."
      },
      exemplar: "Because the line passes through the origin, the relationship is proportional, and the point (1, 4) gives the constant of proportionality k = 4 MB per song. To find the data for 15 songs I multiply: 4 × 15 = 60 MB.",
      hintLadder: [
        "The point where x = 1 hands you k directly.",
        "What is the y-value when x = 1?",
        "Then multiply that k by 15 songs."
      ]
    }
  ],
  reflectionPrompt: "Name one 'per' rate you used or saw today (price per item, speed, texts per hour). What were the two quantities, and what was the rate?",
  misconceptionBank: [
    {
      id: "constant-difference-not-ratio",
      label: "Confuses constant difference with constant ratio",
      description: "Thinks a table is proportional because y goes up by the same AMOUNT each step, rather than checking that y ÷ x is constant.",
      coachMove: "Have the student compute y ÷ x for every row and compare — proportional needs the same RATIO, not the same jump. A line that adds a fixed amount but doesn't pass through the origin is not proportional."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather earn from Job A that pays $24 for 3 hours, or Job B that pays $35 for 5 hours? Work out each unit rate (dollars per hour) before you choose!",
      answer:
        "Job A: 24 ÷ 3 = $8 per hour. Job B: 35 ÷ 5 = $7 per hour. Job A pays the better unit rate, so per hour worked, A wins.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Unit-Rate Dashboard Card",
      challenge:
        "Design one 'dashboard card' for a made-up app that tracks a proportional quantity (e.g., 'MB per song', 'steps per minute', 'points per level'). Collect or invent 4 data pairs, prove they're proportional, and show the constant of proportionality front and center.",
      steps: [
        "Pick two quantities that scale together and invent 4 (x, y) pairs.",
        "Make a small table and compute y ÷ x for each row to prove k is constant.",
        "Write the equation y = k·x and sketch the straight line through the origin.",
        "Design the card so a viewer instantly sees the unit rate (the 'per one' number)."
      ],
      deliverable: "A dashboard card showing a data table, the constant of proportionality k, and the equation y = k·x.",
      choiceBoard: [
        "Draw or design the card digitally with the table and k highlighted.",
        "Make a labeled graph poster showing the line through the origin and marking k at x = 1.",
        "Record a 30-second 'data reporter' clip explaining what your unit rate means."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Unit-Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w2.d1.arena1",
          type: "numeric",
          stem: "A printer prints 3 pages in 12 seconds at a steady rate. At the same rate, how many SECONDS does it take to print 20 pages?",
          answer: 80,
          tolerance: 0,
          unit: "seconds",
          hintLadder: [
            "First find the unit rate: seconds per page = 12 ÷ 3.",
            "12 ÷ 3 = 4 seconds per page.",
            "20 pages × 4 seconds = 80 seconds."
          ],
          explanation: "Unit rate = 12 ÷ 3 = 4 seconds per page, so 20 × 4 = 80 seconds."
        },
        {
          id: "g7.summer.math.w2.d1.arena2",
          type: "multiple_choice",
          stem: "A proportional relationship has k = 2.5. Which equation and value pair is correct?",
          choices: [
            "y = 2.5 + x, and when x = 8, y = 10.5",
            "y = 2.5x, and when x = 8, y = 10.5",
            "y = x + 2.5, and when x = 8, y = 20",
            "y = 2.5x, and when x = 8, y = 20"
          ],
          answerIndex: 3,
          explanation: "A proportional relationship is y = k·x, so y = 2.5x. When x = 8: 2.5 × 8 = 20.",
          hintLadder: [
            "Proportional means MULTIPLY by k, not add k.",
            "Write y = 2.5 · x, then substitute x = 8.",
            "2.5 × 8 = 20."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Rate Rhythm",
      prompt:
        "Set a steady 'unit rate' with your body: do 2 jumping jacks every 5 seconds for 30 seconds, keeping the SAME pace the whole time. Then shake out and take a slow breath.",
      scienceTieIn:
        "Keeping a steady pace is your body running a constant rate — and the movement pumps oxygen-rich blood to your brain, sharpening focus for the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Dashboards turn rates into quick decisions. What's one 'per' rate you'd put on your OWN life dashboard, and why would it be useful to watch?",
      badge: { id: "g7-unit-rate-navigator", name: "Unit Rate Navigator", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
