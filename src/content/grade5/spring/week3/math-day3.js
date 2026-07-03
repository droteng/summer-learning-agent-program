// Grade 5 Math — Spring Expedition, Week 3 (Life Cycles), Day 3.
// Topic: comparing life-cycle data with whole numbers and visual models —
// how much longer (difference), how many times as long, and the mean as a
// "fair share." Grade 5 counterpart of springG6MathW3D3: same topic, pitched
// down to whole numbers and bar/line-plot models with more scaffolding.

export const springG5MathW3D3 = {
  id: "g5.spring.math.w3.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Math",
  topic: "Comparing life-cycle data with whole numbers and visual models",
  topicTag: "life-cycle-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.6", "CCSS.5.MD.B.2"],
  hook: "A butterfly spends a different number of days in each life stage — days as an egg, more as a caterpillar, more as a chrysalis. When you turn those days into numbers and bars, you can compare them: how much longer, how many times as long, and the fair-share average. Today you crunch real life-cycle data.",
  miniLesson: [
    "A DIFFERENCE tells you how many MORE days one stage lasts than another. To find it, subtract the smaller number from the larger one. (Draw two bars and the difference is how much longer one bar is.)",
    "'HOW MANY TIMES as long' compares two durations by division. If the caterpillar stage is 14 days and the egg stage is 7 days, then 14 ÷ 7 = 2, so the caterpillar stage is 2 times as long. (Vocab: 'times as long' = how many of the short bar fit inside the long bar.)",
    "The MEAN (average) is the 'fair share' if you spread the days out evenly. To find it: add all the durations, then divide by how many stages there are. The RANGE = the longest minus the shortest."
  ],
  workedExample: {
    prompt: "A butterfly's stages last: egg 5 days, caterpillar 15 days, chrysalis 10 days. Find the mean (average) stage length, and find how many times as long the caterpillar stage is compared to the egg stage.",
    steps: [
      "Add the durations: 5 + 15 + 10 = 30 days.",
      "Divide by the number of stages: 30 ÷ 3 = 10 days. That is the mean.",
      "To compare caterpillar to egg, divide: 15 ÷ 5 = 3.",
      "So the caterpillar stage is 3 times as long as the egg stage."
    ],
    answer: "Mean = 10 days; the caterpillar stage is 3 times as long as the egg stage."
  },
  items: [
    {
      id: "g5.spring.math.w3.d3.q1",
      type: "numeric",
      stem: "A frog spends 21 days as an egg-to-tadpole and 63 days as a tadpole growing legs. How many TIMES as long is the leg-growing stage compared to the egg-to-tadpole stage? (Give the whole number.)",
      answer: 3,
      tolerance: 0,
      unit: "times",
      hintLadder: [
        "'How many times as long' means divide the longer by the shorter.",
        "63 ÷ 21 = ?",
        "63 ÷ 21 = 3, so it is 3 times as long."
      ],
      explanation: "63 ÷ 21 = 3, so the leg-growing stage is 3 times as long."
    },
    {
      id: "g5.spring.math.w3.d3.q2",
      type: "numeric",
      stem: "A ladybug's stages last: egg 4 days, larva 14 days, pupa 7 days, and adult (before laying eggs) 15 days. What is the MEAN (average) length of these four stages?",
      answer: 10,
      tolerance: 0,
      unit: "days",
      hintLadder: [
        "Add all four durations first.",
        "4 + 14 + 7 + 15 = 40.",
        "Divide the total by 4: 40 ÷ 4 = 10 days."
      ],
      explanation: "Sum = 4 + 14 + 7 + 15 = 40; mean = 40 ÷ 4 = 10 days."
    },
    {
      id: "g5.spring.math.w3.d3.q3",
      type: "numeric",
      stem: "Using that same ladybug data (4, 14, 7, and 15 days), what is the RANGE of the stage lengths?",
      answer: 11,
      tolerance: 0,
      unit: "days",
      hintLadder: [
        "Range = the longest value minus the shortest value.",
        "The longest is 15 and the shortest is 4.",
        "15 − 4 = 11 days."
      ],
      explanation: "Range = 15 − 4 = 11 days.",
      misconceptionsTargeted: ["range-is-largest-value"]
    },
    {
      id: "g5.spring.math.w3.d3.q4",
      type: "multiple_choice",
      stem: "A moth's caterpillar stage is 20 days and its pupa stage is 5 days. How many TIMES as long is the caterpillar stage compared to the pupa stage?",
      choices: ["2 times", "4 times", "15 times", "25 times"],
      answerIndex: 1,
      explanation: "Divide the longer by the shorter: 20 ÷ 5 = 4, so the caterpillar stage is 4 times as long as the pupa stage. (25 is what you get if you add instead of divide.)",
      hintLadder: [
        "'How many times as long' means divide, not add.",
        "20 ÷ 5 = ?",
        "20 ÷ 5 = 4, so it is 4 times as long."
      ]
    },
    {
      id: "g5.spring.math.w3.d3.q5",
      type: "short_answer",
      stem: "Two butterflies are compared. Butterfly A's chrysalis stage is 12 days; Butterfly B's is 18 days. Explain how to find the DIFFERENCE (how many more days) and give it. Then explain which butterfly's stage is longer.",
      rubric: {
        level3: "Correctly finds the difference (18 − 12 = 6 days) by subtracting the smaller from the larger AND says B's chrysalis lasts 6 days longer than A's, with clear reasoning.",
        level2: "Gets the difference right OR the 'which is longer' part right, but the explanation is unclear or one part is missing.",
        level1: "Wrong difference or no reasoning."
      },
      exemplar: "To find the difference I subtract the smaller from the larger: 18 − 12 = 6 days. So Butterfly B's chrysalis stage is longer — it lasts 6 more days than Butterfly A's.",
      hintLadder: [
        "Difference means subtract: put the bigger number first.",
        "18 − 12 = ?",
        "The bigger number belongs to the longer stage."
      ]
    }
  ],
  reflectionPrompt: "When is it more useful to compare two life stages by the DIFFERENCE (how many more days) versus by HOW MANY TIMES as long? Give an example of when each one helps.",
  misconceptionBank: [
    {
      id: "range-is-largest-value",
      label: "Confuses range with the largest value",
      description: "Reports the biggest number as the range instead of subtracting the smallest from the largest.",
      coachMove: "Remind them that range measures the SPREAD from smallest to largest. Always do largest − smallest, so one big number alone cannot be the range."
    },
    {
      id: "times-as-long-means-add",
      label: "Adds instead of dividing for 'how many times as long'",
      description: "Thinks 'how many times as long' means to combine the two numbers, so they add or write the total.",
      coachMove: "Draw the short bar and see how many copies of it fit inside the long bar. Counting the copies IS dividing — 20 ÷ 5 fits 4 short bars, so 4 times as long."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "A mayfly lives about 1 day as an adult but about 2 years before that as a young nymph. A butterfly lives about 14 days as an adult and about 30 days as a young stage before that. Would you rather have a life that is mostly 'young stage' (mayfly) or more even (butterfly)? Which one spends almost its whole life NOT grown up?",
      answer:
        "The mayfly spends almost its entire life as a nymph — around 2 years young versus just 1 day as an adult. The butterfly is far more even: about 30 days young and 14 days adult. If you want more time as a grown-up, pick the butterfly's life cycle.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Life-Cycle Data Bars",
      challenge:
        "Pick an animal or plant and find (or estimate) how many days each life-cycle stage lasts. Turn the durations into a bar graph, then calculate the mean stage length and find how many times as long one stage is compared to another.",
      materials: ["Grid/graph paper & ruler", "OR a spreadsheet or drawing app"],
      steps: [
        "Choose a living thing and list each stage with its length in days.",
        "Draw a bar for each stage, scaled to its number of days.",
        "Calculate the MEAN stage length (add them all, then divide by the number of stages).",
        "Pick two stages and write how many times as long the longer one is."
      ],
      deliverable: "A labeled bar graph of stage durations plus a written mean and one 'times as long' comparison.",
      choiceBoard: [
        "Draw a neat bar graph and label the mean and one comparison.",
        "Build the graph in a spreadsheet and let it add up the mean.",
        "Make a 'data card' comparing two organisms' stage lengths side by side."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Cruncher Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w3.d3.arena1",
          type: "numeric",
          stem: "A beetle's four stages last 6, 12, 9, and 13 days. What is the MEAN length of a stage?",
          answer: 10,
          tolerance: 0,
          unit: "days",
          hintLadder: [
            "Add all four durations.",
            "6 + 12 + 9 + 13 = 40.",
            "Divide by 4: 40 ÷ 4 = 10 days."
          ],
          explanation: "Sum = 6 + 12 + 9 + 13 = 40; mean = 40 ÷ 4 = 10 days."
        },
        {
          id: "g5.spring.math.w3.d3.arena2",
          type: "numeric",
          stem: "A moth spends 24 days as a caterpillar and 8 days as a pupa. How many TIMES as long is the caterpillar stage compared to the pupa stage?",
          answer: 3,
          tolerance: 0,
          unit: "times",
          hintLadder: [
            "'How many times as long' means divide the longer by the shorter.",
            "24 ÷ 8 = ?",
            "24 ÷ 8 = 3, so it is 3 times as long."
          ],
          explanation: "24 ÷ 8 = 3, so the caterpillar stage is 3 times as long as the pupa stage."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Count-the-Stages Stretch",
      prompt:
        "Do a stretch for each stage of a 4-stage life cycle: 4 reaches up (egg), 4 low wiggles (larva), 4 slow twists (pupa), and 4 arm circles (adult). Say each stage name out loud as you go.",
      scienceTieIn: "Counting your reps while you move keeps your working memory active — the same part of your brain you use to add up and average numbers.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which number told you the most about a life cycle today — the mean, the range, or a 'times as long' comparison? Why did that one feel most useful?",
      badge: { id: "g5-spring-data-bar-builder", name: "Data Bar Builder", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
