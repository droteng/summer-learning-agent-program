// Grade 7 Math — Spring Expedition, Week 3 (Life Cycles), Day 3.
// Topic: comparing life-cycle data with proportional reasoning, unit rates,
// percentages, and statistics (mean, range) — Grade 7 depth.

export const springG7MathW3D3 = {
  id: "g7.spring.math.w3.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 3,
  subject: "Math",
  topic: "Comparing life-cycle data with ratios, rates, and stats",
  topicTag: "life-cycle-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.3", "CCSS.7.SP.B.4"],
  hook: "Life-cycle durations aren't just numbers to order — they're data you can reason about proportionally. What FRACTION of a life is spent as a juvenile? What PERCENT longer is one stage than another? Today you push past simple ratios into unit rates, percents, and comparisons that let you argue about which life cycle is 'front-loaded' toward its young stages.",
  miniLesson: [
    "A RATIO compares two quantities; a UNIT RATE rewrites it 'per 1' by dividing. If a caterpillar stage is 18 days and the pupa is 6 days, the ratio 18:6 has unit rate 3, so the caterpillar stage is 3 times as long per 1 day of pupa.",
    "PERCENT comparisons use the base as the whole. 'What percent of the life cycle is the larva stage?' = (larva days ÷ total days) × 100. 'What percent LONGER is A than B?' = ((A − B) ÷ B) × 100.",
    "The MEAN (average) = sum of values ÷ number of values. The RANGE = largest − smallest. Together they summarize a data set's center and spread — useful when comparing whole life cycles, not just two stages."
  ],
  workedExample: {
    prompt: "A butterfly's stages last: egg 4 days, caterpillar 20 days, chrysalis 16 days. Find (a) the mean stage length, (b) the ratio of caterpillar to chrysalis as a unit rate, and (c) what percent of the total the caterpillar stage is.",
    steps: [
      "Total = 4 + 20 + 16 = 40 days. Mean = 40 ÷ 3 ≈ 13.3 days.",
      "Caterpillar : chrysalis = 20 : 16. Divide both by 16 (or 20 ÷ 16) to get the unit rate 1.25 — the caterpillar stage is 1.25 times the chrysalis.",
      "Caterpillar as a percent of total = 20 ÷ 40 = 0.5 = 50%.",
      "So the mean stage is about 13.3 days, the caterpillar is 1.25× the chrysalis, and it makes up 50% of the whole cycle."
    ],
    answer: "(a) Mean ≈ 13.3 days; (b) unit rate 1.25 (caterpillar is 1.25× the chrysalis); (c) 50% of the total."
  },
  items: [
    {
      id: "g7.spring.math.w3.d3.q1",
      type: "numeric",
      stem: "A frog spends 24 days as an egg-to-tadpole and 84 days as a tadpole growing legs. How many times as long is the leg-growing stage as the egg-to-tadpole stage? (Give the answer as a decimal.)",
      answer: 3.5,
      tolerance: 0.01,
      unit: "times",
      hintLadder: [
        "This is a unit rate: divide the longer stage by the shorter.",
        "84 ÷ 24 = ?",
        "84 ÷ 24 = 3.5, so it's 3.5 times as long."
      ],
      explanation: "84 ÷ 24 = 3.5, so the leg-growing stage is 3.5 times as long as the egg-to-tadpole stage."
    },
    {
      id: "g7.spring.math.w3.d3.q2",
      type: "numeric",
      stem: "A ladybug's stages last: egg 5 days, larva 21 days, pupa 8 days, adult (before laying eggs) 14 days. What is the MEAN (average) length of these four stages? (Give the answer as a decimal.)",
      answer: 12,
      tolerance: 0.01,
      unit: "days",
      hintLadder: [
        "Add all four durations first.",
        "5 + 21 + 8 + 14 = 48.",
        "Divide the total by 4: 48 ÷ 4 = 12 days."
      ],
      explanation: "Sum = 5 + 21 + 8 + 14 = 48; mean = 48 ÷ 4 = 12 days."
    },
    {
      id: "g7.spring.math.w3.d3.q3",
      type: "numeric",
      stem: "A cicada spends about 204 months underground as a nymph and about 1 month above ground as an adult. What PERCENT of its whole life (use 205 months as the total) is spent as a nymph? Round to the nearest whole percent.",
      answer: 100,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent = (part ÷ whole) × 100.",
        "Part = 204 months underground; whole = 205 months.",
        "204 ÷ 205 = 0.9951... × 100 ≈ 99.5%, which rounds to 100%."
      ],
      explanation: "204 ÷ 205 = 0.9951, ×100 ≈ 99.5%, which rounds to 100% — almost the entire life is spent underground.",
      misconceptionsTargeted: ["percent-wrong-base"]
    },
    {
      id: "g7.spring.math.w3.d3.q4",
      type: "multiple_choice",
      stem: "A moth's caterpillar stage is 20 days and its pupa stage is 8 days. What PERCENT LONGER is the caterpillar stage than the pupa stage?",
      choices: ["40%", "250%", "60%", "150%"],
      answerIndex: 3,
      explanation: "Percent longer = ((20 − 8) ÷ 8) × 100 = (12 ÷ 8) × 100 = 1.5 × 100 = 150%. The base is the pupa (8), not the total.",
      hintLadder: [
        "Percent longer uses the SMALLER stage as the base.",
        "Compute the difference first: 20 − 8 = 12.",
        "12 ÷ 8 = 1.5, then × 100 = 150%."
      ]
    },
    {
      id: "g7.spring.math.w3.d3.q5",
      type: "short_answer",
      stem: "Two butterflies are compared. Butterfly A's chrysalis stage is 12 days; Butterfly B's is 18 days. Explain and give (a) the difference in days, (b) the ratio A:B in simplest form, and (c) what PERCENT longer B's chrysalis is than A's.",
      rubric: {
        level3: "Correctly gives difference (18 − 12 = 6 days), ratio in simplest form (12:18 = 2:3), AND percent longer ((18 − 12) ÷ 12 × 100 = 50%), with a clear explanation of what each comparison means.",
        level2: "Gets two of the three correct, or all three with weak explanation.",
        level1: "More than one wrong or no reasoning."
      },
      exemplar: "(a) The difference is 18 − 12 = 6 days, so B's chrysalis lasts 6 days longer. (b) The ratio A:B is 12:18, which simplifies to 2:3 by dividing both by 6 — for every 2 days A spends, B spends 3. (c) Percent longer uses A as the base: (18 − 12) ÷ 12 = 6 ÷ 12 = 0.5 = 50%, so B's chrysalis is 50% longer than A's.",
      hintLadder: [
        "Difference means subtract: 18 − 12.",
        "Simplify 12:18 by dividing both by 6.",
        "Percent longer = (difference ÷ the smaller value) × 100."
      ]
    }
  ],
  reflectionPrompt: "When comparing two life stages, when is a PERCENT (like '50% longer') more informative than a raw DIFFERENCE (like '6 days longer')? Give an example where each choice would matter.",
  misconceptionBank: [
    {
      id: "percent-wrong-base",
      label: "Uses the wrong base for a percent comparison",
      description: "Divides by the total or by the larger value when computing 'percent of' or 'percent longer,' instead of the correct base.",
      coachMove: "Ask 'percent of WHAT?' out loud. For 'percent of the life cycle,' the base is the total; for 'percent longer than B,' the base is B. Circle the base before dividing."
    },
    {
      id: "range-is-largest-value",
      label: "Confuses range with the largest value",
      description: "Reports the biggest number as the range instead of subtracting the smallest from the largest.",
      coachMove: "Remind them range measures SPREAD: always largest − smallest, so a single big value alone can't be the range."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "A mayfly lives about 1 day as an adult after roughly 2 years (730 days) as a nymph. A butterfly lives about 14 days as an adult after about 30 days before that. Compute the PERCENT of each life spent as an adult, then decide: would you rather have a life that's almost entirely 'juvenile' or one that's more balanced?",
      answer:
        "Mayfly: 1 ÷ 731 × 100 ≈ 0.14% of life as an adult. Butterfly: 14 ÷ 44 × 100 ≈ 31.8% as an adult. The mayfly spends essentially all of its life as a nymph, while the butterfly's life is far more balanced between juvenile and adult stages.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Life-Cycle Data Dashboard",
      challenge:
        "Pick an animal or plant, find (or estimate) how long each life-cycle stage lasts, and build a small 'data dashboard': a bar graph of the durations PLUS three computed statistics — the mean stage length, one stage as a PERCENT of the total, and one 'percent longer' comparison between two stages.",
      materials: ["Grid/graph paper & ruler", "OR a spreadsheet or drawing app"],
      steps: [
        "Choose an organism and list each stage with its duration in days.",
        "Draw a bar for each stage, scaled to its length.",
        "Calculate the MEAN stage length (sum ÷ number of stages).",
        "Compute one stage as a PERCENT of the total, and one 'percent longer' comparison between two stages."
      ],
      deliverable: "A labeled bar graph plus a written mean, one percent-of-total, and one percent-longer comparison.",
      choiceBoard: [
        "Draw a neat bar graph and annotate the three statistics.",
        "Build the dashboard in a spreadsheet and let it compute the mean and percents.",
        "Make a 'data card' comparing two organisms' life cycles with a percent-based headline (e.g., 'Species X is juvenile 3× longer')."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Cruncher Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w3.d3.arena1",
          type: "numeric",
          stem: "A beetle's four stages last 7, 15, 10, and 12 days. What is the MEAN length of a stage? (Give the answer as a decimal.)",
          answer: 11,
          tolerance: 0.01,
          unit: "days",
          hintLadder: [
            "Add all four durations.",
            "7 + 15 + 10 + 12 = 44.",
            "Divide by 4: 44 ÷ 4 = 11 days."
          ],
          explanation: "Sum = 7 + 15 + 10 + 12 = 44; mean = 44 ÷ 4 = 11 days."
        },
        {
          id: "g7.spring.math.w3.d3.arena2",
          type: "numeric",
          stem: "A dragonfly spends 22 months as a nymph and 2 months as an adult. What PERCENT of its total life (24 months) is spent as an adult? Round to the nearest whole percent.",
          answer: 8,
          tolerance: 0,
          unit: "%",
          hintLadder: [
            "Percent = (part ÷ whole) × 100.",
            "Part = 2 months adult; whole = 24 months.",
            "2 ÷ 24 = 0.0833... × 100 ≈ 8.3%, which rounds to 8%."
          ],
          explanation: "2 ÷ 24 = 0.0833, × 100 ≈ 8.3%, which rounds to 8% of its life spent as an adult."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Percent-of-the-Cycle Stretch",
      prompt:
        "Imagine your workout is a 'life cycle' with 4 stages. Do a stretch for each and say what percent of the whole it is: 4 reaches up (egg), 4 marches (larva), 4 twists (pupa), 4 arm circles (adult) — each is 25% of your 16-move cycle. Say '25%' after each set.",
      scienceTieIn: "Naming each set as a percent of the whole keeps your brain doing part-to-whole reasoning while you move — the same proportional thinking you just used on life-cycle data.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which statistic told you the most about a life cycle today — the mean, the range, a ratio, or a percent? Why did that one feel most powerful for making a comparison?",
      badge: { id: "g7-spring-proportional-data-analyst", name: "Proportional Data Analyst", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
