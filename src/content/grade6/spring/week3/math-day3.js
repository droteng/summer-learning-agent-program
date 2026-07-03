// Grade 6 Math — Spring Expedition, Week 3 (Life Cycles), Day 3.
// Topic: comparing life-cycle data — durations of stages using ratios,
// differences, and simple statistics (mean, range).

export const springG6MathW3D3 = {
  id: "g6.spring.math.w3.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Math",
  topic: "Comparing life-cycle data with ratios and stats",
  topicTag: "life-cycle-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.3", "CCSS.6.SP.B.5"],
  hook: "A butterfly spends different amounts of time in each life stage — days as an egg, weeks as a caterpillar, more as a chrysalis. When you put those durations into numbers, you can compare them with ratios, differences, and averages. Today you crunch real life-cycle data.",
  miniLesson: [
    "A DIFFERENCE tells you how much longer one stage lasts than another: subtract the smaller from the larger.",
    "A RATIO compares two durations by division: if the caterpillar stage is 14 days and the egg stage is 7 days, the ratio is 14:7, which simplifies to 2:1 — twice as long.",
    "The MEAN (average) of several durations = add them all, then divide by how many there are. The RANGE = the longest minus the shortest."
  ],
  workedExample: {
    prompt: "A butterfly's stages last: egg 5 days, caterpillar 15 days, chrysalis 10 days. Find the mean stage length and the ratio of caterpillar to egg.",
    steps: [
      "Add the durations: 5 + 15 + 10 = 30 days.",
      "Divide by the number of stages: 30 ÷ 3 = 10 days mean.",
      "Ratio of caterpillar to egg: 15:5.",
      "Simplify by dividing both by 5: 15÷5 : 5÷5 = 3:1. The caterpillar stage is 3 times as long as the egg stage."
    ],
    answer: "Mean = 10 days; caterpillar-to-egg ratio = 3:1."
  },
  items: [
    {
      id: "g6.spring.math.w3.d3.q1",
      type: "numeric",
      stem: "A frog spends 21 days as an egg-to-tadpole and 63 days as a tadpole growing legs. How many times longer is the leg-growing stage than the egg-to-tadpole stage? (Give the whole number.)",
      answer: 3,
      tolerance: 0,
      unit: "times",
      hintLadder: [
        "This is a ratio: divide the longer stage by the shorter.",
        "63 ÷ 21 = ?",
        "63 ÷ 21 = 3, so it's 3 times as long."
      ],
      explanation: "63 ÷ 21 = 3, so the leg-growing stage is 3 times as long."
    },
    {
      id: "g6.spring.math.w3.d3.q2",
      type: "numeric",
      stem: "A ladybug's stages last: egg 4 days, larva 14 days, pupa 7 days, adult (before laying eggs) 15 days. What is the MEAN (average) length of these four stages?",
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
      id: "g6.spring.math.w3.d3.q3",
      type: "numeric",
      stem: "Using that same ladybug data (4, 14, 7, and 15 days), what is the RANGE of the stage lengths?",
      answer: 11,
      tolerance: 0,
      unit: "days",
      hintLadder: [
        "Range = longest value minus shortest value.",
        "The longest is 15 and the shortest is 4.",
        "15 − 4 = 11 days."
      ],
      explanation: "Range = 15 − 4 = 11 days.",
      misconceptionsTargeted: ["range-is-largest-value"]
    },
    {
      id: "g6.spring.math.w3.d3.q4",
      type: "multiple_choice",
      stem: "A moth's caterpillar stage is 20 days and its pupa stage is 5 days. What is the ratio of caterpillar time to pupa time, in simplest form?",
      choices: ["5:20", "4:1", "1:4", "20:5"],
      answerIndex: 1,
      explanation: "20:5 divides by 5 to give 4:1 — the caterpillar stage is 4 times as long as the pupa stage.",
      hintLadder: [
        "Write it as caterpillar:pupa = 20:5.",
        "Divide BOTH numbers by the same value (try 5).",
        "20÷5 : 5÷5 = 4:1."
      ]
    },
    {
      id: "g6.spring.math.w3.d3.q5",
      type: "short_answer",
      stem: "Two butterflies are compared. Butterfly A's chrysalis stage is 12 days; Butterfly B's is 18 days. Explain how you'd describe the DIFFERENCE and the RATIO between them, and give both.",
      rubric: {
        level3: "Correctly gives the difference (18 − 12 = 6 days) AND the ratio in simplest form (12:18 = 2:3), and explains what each comparison means.",
        level2: "Gets one of the two comparisons right, or both with an unclear explanation.",
        level1: "Both comparisons wrong or no reasoning."
      },
      exemplar: "The difference is 18 − 12 = 6 days, meaning B's chrysalis lasts 6 days longer. The ratio A:B is 12:18, which simplifies to 2:3 (divide both by 6) — so for every 2 days A spends, B spends 3.",
      hintLadder: [
        "Difference means subtract: 18 − 12.",
        "Ratio means compare by division: 12:18.",
        "Simplify 12:18 by dividing both by 6."
      ]
    }
  ],
  reflectionPrompt: "When is it more useful to compare two life stages with a DIFFERENCE (how many more days) versus a RATIO (how many times as long)? Give an example of each.",
  misconceptionBank: [
    {
      id: "range-is-largest-value",
      label: "Confuses range with the largest value",
      description: "Reports the biggest number as the range instead of subtracting the smallest from the largest.",
      coachMove: "Remind them: range measures SPREAD. Always do largest − smallest, so a single big value alone can't be the range."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "A mayfly lives about 1 day as an adult but 2 years as a nymph. A butterfly lives about 14 days as an adult and 30 days total before that. Would you rather have a life cycle that's mostly 'young stage' (mayfly) or more balanced (butterfly)? Work out roughly what fraction of each life is spent as an adult before you choose!",
      answer:
        "Mayfly: about 1 day adult out of ~730 days total — under 0.2% as an adult! Butterfly: about 14 days adult out of ~44 days total — around a third of its life. The mayfly spends almost its whole life as a nymph; the butterfly's life is far more balanced.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Life-Cycle Data Bars",
      challenge:
        "Pick an animal or plant and find (or estimate) how long each life-cycle stage lasts. Turn the durations into a bar graph, then calculate the mean stage length and one ratio between two stages.",
      materials: ["Grid/graph paper & ruler", "OR a spreadsheet or drawing app"],
      steps: [
        "Choose an organism and list each stage with its duration in days.",
        "Draw a bar for each stage, scaled to its length.",
        "Calculate the MEAN stage length (sum ÷ number of stages).",
        "Pick two stages and write their ratio in simplest form."
      ],
      deliverable: "A labeled bar graph of stage durations plus a written mean and one simplified ratio.",
      choiceBoard: [
        "Draw a neat bar graph and label the mean and a ratio.",
        "Build the graph in a spreadsheet and let it compute the mean.",
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
          id: "g6.spring.math.w3.d3.arena1",
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
          id: "g6.spring.math.w3.d3.arena2",
          type: "numeric",
          stem: "A cicada spends 17 years underground as a nymph and only about 1 month above ground as an adult. Rounded to the nearest whole number, about how many YEARS does the underground stage last for every 1 year of the rest? (Treat the adult month as much less than a year, so just compare 17 years to 1 year.)",
          answer: 17,
          tolerance: 0,
          unit: "times",
          hintLadder: [
            "Compare 17 years underground to about 1 year for the rest.",
            "That's a ratio of 17 to 1.",
            "17 ÷ 1 = 17, so about 17 times as long."
          ],
          explanation: "17 years compared to about 1 year is a 17:1 ratio, so roughly 17 times as long underground."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Count-the-Stages Stretch",
      prompt:
        "Do a stretch for each stage of a 4-stage life cycle: 4 reaches up (egg), 12 marching steps (larva) — no, just do 4 of each to keep it quick — then 4 twists (pupa) and 4 arm circles (adult). Say each stage name as you go.",
      scienceTieIn: "Counting reps while you move keeps your working memory active — the same brain system you use to add up and average data.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which stat told you the most about a life cycle today — the mean, the range, or a ratio? Why did that one feel most useful?",
      badge: { id: "life-cycle-data-detective", name: "Life-Cycle Data Detective", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
