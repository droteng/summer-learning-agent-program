// Grade 6 Math — Spring Expedition, Week 5 (Measuring Change), Day 2.
// Topic: rate of change — how fast something grows (change ÷ time),
// comparing steep vs. gentle growth.

export const springG6MathW5D2 = {
  id: "g6.spring.math.w5.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Math",
  topic: "Rate of change — how fast something grows",
  topicTag: "rate-of-change",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.2", "CCSS.6.RP.A.3.B"],
  hook: "Yesterday you saw that a steep line means fast growth. Today you put a NUMBER on that speed. Rate of change — how much something grows in each unit of time — turns a growth curve into 'centimeters per day.'",
  miniLesson: [
    "Rate of change tells you how fast something grows: rate = change in amount ÷ change in time. A plant that grows 12 cm in 4 days has a rate of 12 ÷ 4 = 3 cm per day.",
    "The rate is a 'per' number: 3 cm PER day, 2 kg PER week. It's the same amount of growth for each equal step of time.",
    "On a graph, a bigger rate makes a STEEPER line and a smaller rate makes a GENTLER (flatter) line. Comparing two rates tells you which is growing faster."
  ],
  workedExample: {
    prompt: "A sunflower grows from 10 cm to 34 cm over 8 days. What is its rate of change in cm per day?",
    steps: [
      "Find the change in amount: 34 − 10 = 24 cm of growth.",
      "Find the change in time: 8 days.",
      "Rate = change ÷ time = 24 ÷ 8.",
      "24 ÷ 8 = 3, so the sunflower grew at 3 cm per day."
    ],
    answer: "3 cm per day."
  },
  items: [
    {
      id: "g6.spring.math.w5.d2.q1",
      type: "numeric",
      stem: "A bean plant grows 12 cm in 4 days. What is its rate of change in centimeters per day?",
      answer: 3,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Rate = change in amount ÷ change in time.",
        "The change is 12 cm over 4 days.",
        "12 ÷ 4 = 3 cm per day."
      ],
      explanation: "Rate = 12 cm ÷ 4 days = 3 cm per day."
    },
    {
      id: "g6.spring.math.w5.d2.q2",
      type: "numeric",
      stem: "A seedling was 5 cm tall and grew to 20 cm over 5 days. What is its growth rate in cm per day?",
      answer: 3,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "First find the change: final height minus starting height.",
        "20 − 5 = 15 cm of growth over 5 days.",
        "15 ÷ 5 = 3 cm per day."
      ],
      explanation: "Change = 20 − 5 = 15 cm; rate = 15 ÷ 5 = 3 cm per day."
    },
    {
      id: "g6.spring.math.w5.d2.q3",
      type: "multiple_choice",
      stem: "Plant A grows 20 cm in 5 days. Plant B grows 18 cm in 6 days. Which plant is growing FASTER, and how do you know?",
      choices: [
        "Plant B, because 18 is a larger total than 5",
        "Plant B, because it grew for more days",
        "They grow at the same rate",
        "Plant A, because its rate is 4 cm/day while Plant B's is 3 cm/day"
      ],
      answerIndex: 3,
      explanation: "Plant A: 20 ÷ 5 = 4 cm/day. Plant B: 18 ÷ 6 = 3 cm/day. Comparing rates, 4 > 3, so Plant A grows faster.",
      hintLadder: [
        "Don't compare the totals — compare the rates (per day).",
        "Plant A: 20 ÷ 5. Plant B: 18 ÷ 6.",
        "4 cm/day vs. 3 cm/day — which is bigger?"
      ],
      misconceptionsTargeted: ["bigger-total-means-faster"]
    },
    {
      id: "g6.spring.math.w5.d2.q4",
      type: "numeric",
      stem: "A vine grows at a steady rate of 3 cm per day. How many centimeters will it grow in 7 days?",
      answer: 21,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "A steady rate means the same growth each day.",
        "Multiply the rate by the number of days.",
        "3 cm/day × 7 days = 21 cm."
      ],
      explanation: "Total growth = rate × time = 3 × 7 = 21 cm."
    },
    {
      id: "g6.spring.math.w5.d2.q5",
      type: "short_answer",
      stem: "One plant's growth graph is a steep line and another's is a gentle, nearly flat line. Explain how the STEEPNESS of each line is connected to its rate of change.",
      rubric: {
        level3: "States that a steeper line means a larger rate of change (more growth per unit time) and a gentler line means a smaller rate, clearly linking steepness to the 'per day' rate.",
        level2: "Connects steepness to faster growth but doesn't clearly tie it to the rate/'per time' idea, or only describes one line.",
        level1: "No clear link between steepness and rate of change."
      },
      exemplar: "The steep line has a big rate of change — it gains a lot of centimeters each day, so it shoots up quickly. The gentle, flat line has a small rate of change — only a little growth per day — so it barely climbs. Steeper line = bigger rate.",
      hintLadder: [
        "Rate of change is growth per unit of time.",
        "A steep line rises a lot over each step of time.",
        "Connect 'steep' to 'big rate' and 'flat' to 'small rate.'"
      ]
    }
  ],
  reflectionPrompt: "If you tracked how many pages you read per day this week, what would your 'pages per day' rate be? Would your reading line be steep or gentle?",
  misconceptionBank: [
    {
      id: "bigger-total-means-faster",
      label: "Thinks the bigger total means faster growth",
      description: "Compares total growth amounts instead of rates, so a plant that grew more overall (but over more time) is wrongly called faster.",
      coachMove: "Always divide by the time first to get the 'per day' rate, THEN compare. More total over more days can still be a slower rate."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Plant Wins the Race?",
      prompt:
        "Would you rather own Plant A, which grew 20 cm in 5 days, or Plant B, which grew 18 cm in 6 days — if you want the FASTEST grower? Work out each plant's cm-per-day rate before you choose!",
      answer:
        "Plant A: 20 ÷ 5 = 4 cm per day. Plant B: 18 ÷ 6 = 3 cm per day. Plant A wins the speed race at 4 cm/day, even though the totals looked close. Always compare rates, not totals!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Two-Plant Growth Race",
      challenge:
        "Invent a growth race between two plants (or two anythings that grow). Give each a clear rate of change, then show a table and a quick sketch of both lines so anyone can see which grows faster.",
      steps: [
        "Pick two growers and give each a steady rate (like 4 cm/day and 2 cm/day).",
        "Make a table showing each one's height on Day 0, 2, 4, 6, and 8.",
        "Sketch both lines on the same axes — the faster rate should look steeper.",
        "Write one sentence stating each rate and which grower wins, with the math to prove it."
      ],
      deliverable: "A table and sketch of two growth lines, each labeled with its cm-per-day rate and a winner.",
      choiceBoard: [
        "Draw the two lines on graph paper with rates labeled.",
        "Make a spreadsheet with both height columns and a chart.",
        "Write a play-by-play 'growth race commentary' calling out each plant's rate."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rate of Change Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.math.w5.d2.arena1",
          type: "numeric",
          stem: "A pea shoot grew from 4 cm to 28 cm over 6 days. What was its rate of change in cm per day?",
          answer: 4,
          tolerance: 0,
          unit: "cm per day",
          hintLadder: [
            "Find the change: 28 − 4.",
            "That is 24 cm of growth over 6 days.",
            "24 ÷ 6 = 4 cm per day."
          ],
          explanation: "Change = 28 − 4 = 24 cm; rate = 24 ÷ 6 = 4 cm per day."
        },
        {
          id: "g6.spring.math.w5.d2.arena2",
          type: "multiple_choice",
          stem: "Vine X grows 30 cm in 10 days. Vine Y grows 30 cm in 6 days. Both grew the SAME total. Which has the greater rate of change?",
          choices: [
            "Vine X, because 10 days is longer",
            "They have the same rate because the totals match",
            "Vine Y, because it reached 30 cm in fewer days (5 cm/day vs. 3 cm/day)",
            "Neither — you can't compare them"
          ],
          answerIndex: 2,
          explanation: "Vine X: 30 ÷ 10 = 3 cm/day. Vine Y: 30 ÷ 6 = 5 cm/day. Same total, but Vine Y did it faster, so it has the greater rate.",
          hintLadder: [
            "Same total doesn't mean same rate — divide by the days.",
            "Vine X: 30 ÷ 10. Vine Y: 30 ÷ 6.",
            "3 cm/day vs. 5 cm/day — the bigger rate wins."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Fast Rate, Slow Rate",
      prompt:
        "Grow like a fast plant: rise from the floor to full stretch in just 3 quick counts. Now grow like a slow plant: rise the same distance but stretch it over 8 slow counts. Feel the difference in 'rate.' Repeat each twice.",
      scienceTieIn:
        "Changing your movement speed makes your heart adjust its own rate — your body is measuring change over time, just like the graphs you're reading.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick something you're getting better at — a sport, an instrument, a subject. If you tracked your progress, would your 'rate of improvement' be fast right now or slow? Why?",
      badge: { id: "spring-rate-racer", name: "Rate Racer", emoji: "🚀" },
      estimatedMinutes: 7
    }
  }
};
