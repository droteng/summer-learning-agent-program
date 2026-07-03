// Grade 7 Math — Spring Expedition, Week 2 (Plants & Growth), Day 3.
// Topic: growth as a proportional relationship — unit rates, constant of
// proportionality, and linear growth expressions (Grade 7 depth).

export const springG7MathW2D3 = {
  id: "g7.spring.math.w2.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Math",
  topic: "Growth as a proportional relationship — rates and expressions",
  topicTag: "growth-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.2", "CCSS.7.RP.A.2.C"],
  hook: "Your seedling is climbing — but is it growing at a CONSTANT rate? Today you find the unit rate, name the constant of proportionality, write a growth expression, and use it to predict any day's height.",
  miniLesson: [
    "A proportional relationship has a constant unit rate. Growth rate (cm per day) = change in height ÷ change in time. That unit rate is called the constant of proportionality, often written as k.",
    "If growth is proportional with no head start, height = k × days. If the plant already had a starting height, you add it: height = start + (k × days).",
    "On a graph, the constant of proportionality is the steepness (slope): a bigger k means a steeper line and faster growth. Writing the rule as an expression lets you predict ANY day without plotting every point."
  ],
  workedExample: {
    prompt: "A seedling starts at 3 cm and grows a steady 2.5 cm per day. Write an expression for its height after d days, then find its height on Day 8.",
    steps: [
      "The constant of proportionality (growth rate) is k = 2.5 cm per day.",
      "There is a 3 cm head start, so height = 3 + 2.5 × d.",
      "Substitute d = 8: height = 3 + 2.5 × 8.",
      "2.5 × 8 = 20, and 3 + 20 = 23 cm."
    ],
    answer: "height = 3 + 2.5d; on Day 8 the plant is 23 cm tall."
  },
  items: [
    {
      id: "g7.spring.math.w2.d3.q1",
      type: "numeric",
      stem: "A bean plant grew from 4 cm to 25 cm over 6 days at a steady rate. What is its growth rate (the constant of proportionality) in cm per day?",
      answer: 3.5,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Change in height: 25 − 4.",
        "That growth happened over 6 days.",
        "21 ÷ 6 = 3.5 cm per day."
      ],
      explanation: "Height grew 25 − 4 = 21 cm over 6 days, so the constant rate is 21 ÷ 6 = 3.5 cm per day."
    },
    {
      id: "g7.spring.math.w2.d3.q2",
      type: "numeric",
      stem: "A sprout's height is directly proportional to time: it is 15 cm tall after 6 days (and 0 cm at day 0). Using the SAME proportional rate, how tall will it be after 10 days?",
      answer: 25,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "First find the unit rate: 15 ÷ 6 cm per day.",
        "The rate is 2.5 cm per day.",
        "2.5 × 10 = 25 cm."
      ],
      explanation: "Unit rate = 15 ÷ 6 = 2.5 cm per day. Since height = 2.5 × days, after 10 days it is 2.5 × 10 = 25 cm."
    },
    {
      id: "g7.spring.math.w2.d3.q3",
      type: "multiple_choice",
      stem: "Two plants grow proportionally from day 0. On a height-vs-time graph, Plant X's line is steeper than Plant Y's. What does that tell you about their constants of proportionality (k)?",
      choices: [
        "Plant X has a smaller k and grows slower",
        "Plant X has a larger k and grows faster",
        "They must have the same k",
        "Steepness has nothing to do with k"
      ],
      answerIndex: 1,
      explanation: "The steepness of a proportional graph IS the constant of proportionality; a steeper line means a larger k and faster growth.",
      hintLadder: [
        "The slope of a proportional line equals its constant of proportionality.",
        "Steeper line = bigger slope = bigger k.",
        "Bigger k means faster growth."
      ],
      misconceptionsTargeted: ["steeper-means-taller"]
    },
    {
      id: "g7.spring.math.w2.d3.q4",
      type: "numeric",
      stem: "A plant's height follows the expression h = 5 + 3d, where d is the number of days. What is the plant's height when d = 9?",
      answer: 32,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Substitute d = 9 into 5 + 3d.",
        "3 × 9 = 27.",
        "5 + 27 = 32 cm."
      ],
      explanation: "Substitute d = 9: h = 5 + 3 × 9 = 5 + 27 = 32 cm."
    },
    {
      id: "g7.spring.math.w2.d3.q5",
      type: "short_answer",
      stem: "Your seedling measured 2 cm, 5.5 cm, 9 cm, and 12.5 cm on Days 1, 2, 3, and 4. Show the growth is at a constant rate, write an expression for the height on day d, and predict Day 6. Explain your reasoning.",
      rubric: {
        level3: "Shows the constant +3.5 cm/day change, writes a correct expression (e.g., h = 2 + 3.5(d − 1) or an equivalent rule), AND predicts 19.5 cm on Day 6 with reasoning.",
        level2: "Identifies the steady 3.5 rate but the expression or the Day 6 prediction is slightly off.",
        level1: "No clear constant rate or an unsupported prediction."
      },
      exemplar: "Each day the height rises by 3.5 cm (2 → 5.5 → 9 → 12.5), so the rate is constant. Starting from Day 1's 2 cm, the rule is h = 2 + 3.5(d − 1). For Day 6: h = 2 + 3.5 × 5 = 2 + 17.5 = 19.5 cm.",
      hintLadder: [
        "Find the change between each pair of days — is it the same?",
        "The steady change is your rate; build a rule from Day 1's height.",
        "Apply the rule at d = 6 to predict the height."
      ]
    }
  ],
  reflectionPrompt: "A proportional relationship lets one number (k) predict everything. What's something in your life — an allowance, steps per day, pages read — where a steady rate would let you predict the future?",
  misconceptionBank: [
    {
      id: "steeper-means-taller",
      label: "Confuses steepness (rate) with height",
      description: "Reads a steeper line as a taller plant instead of a faster growth rate / bigger constant of proportionality.",
      coachMove: "Separate the two: steepness (slope, k) is how FAST height changes per day; the actual height is how HIGH a point sits. A slow plant can still be taller at a given moment if it started higher."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather have Plant A (proportional: 18 cm after 6 days) or Plant B (proportional: 30 cm after 12 days)? Which one has the FASTER growth rate? Find each unit rate before you choose!",
      answer:
        "Plant A grows faster: 18 ÷ 6 = 3 cm/day, while Plant B grows 30 ÷ 12 = 2.5 cm/day. Even though Plant B ends up taller in the example, Plant A has the bigger constant of proportionality — it gains more height every single day.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: From Data to a Growth Rule",
      challenge:
        "Take a set of daily plant heights (real or invented), prove the growth is roughly proportional by finding a constant rate, then write a growth expression and use it to predict a future day. Show your unit-rate work.",
      materials: ["Graph paper or paper & ruler, OR a spreadsheet/drawing app"],
      steps: [
        "Record at least 4 daily heights in a table (Day, Height).",
        "Find the change per day and check it is roughly constant — that's your rate k.",
        "Write an expression: height = start + k × days (or height = k × days if it begins at 0).",
        "Use your expression to predict a day you didn't measure, and mark that predicted point on a graph."
      ],
      deliverable: "A data table, a written growth expression, and a predicted future height using the expression.",
      choiceBoard: [
        "Make the table and growth expression by hand on graph paper.",
        "Build it in a spreadsheet and let a formula compute the predictions.",
        "Create a 'growth rule card' that states k, the expression, and a sample prediction."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w2.d3.arena1",
          type: "numeric",
          stem: "A sunflower grows proportionally, reaching 40 cm after 16 days (0 cm at day 0). Using the same rate, how tall will it be on Day 30?",
          answer: 75,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find the unit rate: 40 ÷ 16 cm per day.",
            "The rate is 2.5 cm per day.",
            "2.5 × 30 = 75 cm."
          ],
          explanation: "Unit rate = 40 ÷ 16 = 2.5 cm per day. Height = 2.5 × days, so on Day 30 it is 2.5 × 30 = 75 cm."
        },
        {
          id: "g7.spring.math.w2.d3.arena2",
          type: "numeric",
          stem: "Plant A follows h = 4d and Plant B follows h = 1 + 2.5d, where d is days. On Day 6, how many cm TALLER is Plant A than Plant B?",
          answer: 8,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find Plant A on Day 6: 4 × 6.",
            "Find Plant B on Day 6: 1 + 2.5 × 6.",
            "Plant A = 24, Plant B = 16, so 24 − 16 = 8 cm."
          ],
          explanation: "Plant A: 4 × 6 = 24 cm. Plant B: 1 + 2.5 × 6 = 1 + 15 = 16 cm. Difference = 24 − 16 = 8 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Constant-Rate Climb",
      prompt:
        "Pick a steady 'rate' — say, rise one level every 2 counts. Start crouched and climb at exactly that rate: count '1, 2 — rise, 3, 4 — rise,' until you're stretched tall. Then descend at the SAME steady rate. Feel how a constant rate looks smooth and predictable. Repeat twice.",
      scienceTieIn: "A constant rate feels smooth and even — your heartbeat during steady movement holds a near-constant rate, just like a proportional plant adds the same height each day.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Writing a rule as an expression turns a pile of data into a prediction machine. What's one thing you'd like to write a 'growth rule' for, and what would its k (rate) be?",
      badge: { id: "g7-spring-rate-strategist", name: "Rate Strategist", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
