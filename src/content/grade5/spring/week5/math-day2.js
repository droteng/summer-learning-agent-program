// Grade 5 Math — Spring Expedition, Week 5 (Measuring Change), Day 2.
// Grade 5 counterpart of g6.spring.math.w5.d2. Same topic (how fast something
// grows / comparing change over time) pitched down to Grade 5: NO rate-of-
// change formula (change ÷ time). Instead, students compare simple whole-
// number growth, find the change each day only when it divides evenly, and
// compare which plant grew MORE over the SAME number of days.

export const springG5MathW5D2 = {
  id: "g5.spring.math.w5.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Math",
  topic: "How fast something grows — comparing change over time",
  topicTag: "comparing-change",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.6", "CCSS.5.OA.A.2"],
  hook: "Yesterday you saw that a line that climbs a lot means a plant grew a lot. Today you compare growers. Which plant grew MORE? And when a plant grows the same amount each day, how much is that each day? You will measure change over time with simple whole numbers.",
  miniLesson: [
    "To find how much a plant grew, subtract: change = final height − starting height. A plant that goes from 4 cm to 16 cm grew 16 − 4 = 12 cm.",
    "To compare two growers fairly, look at how much each grew over the SAME number of days. The one with the bigger change grew more.",
    "If a plant grows the SAME amount each day, you can share the total growth equally across the days. A plant that grew 12 cm over 4 days grew 12 ÷ 4 = 3 cm each day."
  ],
  workedExample: {
    prompt: "A sunflower grew from 10 cm to 34 cm over 8 days, growing the same amount each day. How much did it grow in all, and how much each day?",
    steps: [
      "Find the total change: 34 − 10 = 24 cm of growth.",
      "It grew the same amount each of the 8 days, so share the 24 cm equally: 24 ÷ 8.",
      "24 ÷ 8 = 3, so it grew 3 cm each day.",
      "So the sunflower grew 24 cm in all, which is 3 cm each day."
    ],
    answer: "It grew 24 cm in all, which is 3 cm each day."
  },
  items: [
    {
      id: "g5.spring.math.w5.d2.q1",
      type: "numeric",
      stem: "A bean plant grew from 3 cm to 15 cm over some days. How much did it grow in all, in centimeters?",
      answer: 12,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Change = final height − starting height.",
        "The plant went from 3 cm to 15 cm.",
        "15 − 3 = 12 cm."
      ],
      explanation: "Total change = 15 − 3 = 12 cm."
    },
    {
      id: "g5.spring.math.w5.d2.q2",
      type: "numeric",
      stem: "A seedling grew 12 cm over 4 days, growing the same amount each day. How much did it grow each day, in centimeters?",
      answer: 3,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Share the total growth equally across the days.",
        "The total is 12 cm and there are 4 days.",
        "12 ÷ 4 = 3 cm each day."
      ],
      explanation: "Growth each day = 12 ÷ 4 = 3 cm."
    },
    {
      id: "g5.spring.math.w5.d2.q3",
      type: "multiple_choice",
      stem: "Over the SAME 5 days, Plant A grew 20 cm and Plant B grew 15 cm. Which plant grew MORE, and how do you know?",
      choices: [
        "Plant B, because 15 is a rounder number",
        "Plant A, because 20 cm is more growth than 15 cm over the same 5 days",
        "They grew the same amount",
        "Plant B, because it started shorter"
      ],
      answerIndex: 1,
      explanation: "Both grew for the same 5 days, so you can compare their totals directly. Plant A grew 20 cm and Plant B grew 15 cm, so Plant A grew more.",
      hintLadder: [
        "Both plants grew for the same number of days.",
        "So just compare how much each one grew.",
        "20 cm is more than 15 cm."
      ],
      misconceptionsTargeted: ["ignore-same-days"]
    },
    {
      id: "g5.spring.math.w5.d2.q4",
      type: "numeric",
      stem: "A vine grows 3 cm every day. How many centimeters will it grow in 7 days?",
      answer: 21,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "It grows the same 3 cm each day.",
        "Multiply the daily growth by the number of days.",
        "3 × 7 = 21 cm."
      ],
      explanation: "Total growth = 3 cm each day × 7 days = 21 cm."
    },
    {
      id: "g5.spring.math.w5.d2.q5",
      type: "short_answer",
      stem: "One plant's graph line climbs a lot and another's is almost flat. Explain how the shape of each line is connected to how much the plant is growing.",
      rubric: {
        level3: "States that a line that climbs a lot means the plant grew a lot (more height gained) and a flat line means it grew only a little, clearly linking the climb of the line to the amount of growth.",
        level2: "Connects a climbing line to more growth but does not clearly tie it to the amount of change, or only describes one line.",
        level1: "No clear link between the line's shape and how much the plant grew."
      },
      exemplar: "The line that climbs a lot means that plant gained a lot of height, so it grew a lot. The almost-flat line means the plant gained only a little height, so it barely grew. The more the line climbs, the more the plant grew.",
      hintLadder: [
        "How much a plant grows shows up as how much the line climbs.",
        "A line that climbs a lot gained lots of height.",
        "Connect 'climbs a lot' to 'grew a lot' and 'flat' to 'grew a little.'"
      ]
    }
  ],
  reflectionPrompt: "If you tracked how many pages you read each day this week, on which day did you read the MOST? Would that be the day your line climbed the highest?",
  misconceptionBank: [
    {
      id: "ignore-same-days",
      label: "Compares totals without checking the days match",
      description: "Says one plant grew more just from the totals, without noticing whether both grew for the same number of days.",
      coachMove: "First check that both plants grew for the SAME number of days. Only then can you compare the totals directly to see which grew more."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Plant Grew More?",
      prompt:
        "Over the same 5 days, Plant A grew 20 cm and Plant B grew 15 cm. Would you rather own the plant that grew MORE? Which one is it, and how can you tell so quickly?",
      answer:
        "Plant A grew more! Both grew for the same 5 days, so you can just compare the totals: 20 cm is more than 15 cm. When the days match, the bigger total wins.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Two-Plant Growth Race",
      challenge:
        "Invent a growth race between two plants (or two anything that grow). Give each one an amount it grows each day, then show a table and a quick sketch of both lines so anyone can see which grows more.",
      materials: ["Graph paper or a device", "A ruler for straight lines"],
      steps: [
        "Pick two growers and decide how much each grows every day (like 4 cm a day and 2 cm a day).",
        "Make a table showing each one's height on Day 0, 2, 4, 6, and 8.",
        "Sketch both lines on the same axes — the faster grower's line should climb more.",
        "Write one sentence saying how much each grows each day and which one wins, with the math to prove it."
      ],
      deliverable: "A table and sketch of two growth lines, each labeled with how much it grows each day and a winner.",
      choiceBoard: [
        "Draw the two lines on graph paper with the daily growth labeled.",
        "Make a spreadsheet with both height columns and a chart.",
        "Write a play-by-play 'growth race' story calling out each plant's daily growth."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Compare the Change Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w5.d2.arena1",
          type: "numeric",
          stem: "A pea shoot grew from 4 cm to 28 cm over 6 days, growing the same amount each day. How much did it grow each day, in centimeters?",
          answer: 4,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find the total change: 28 − 4.",
            "That is 24 cm of growth over 6 days.",
            "Share it equally: 24 ÷ 6 = 4 cm each day."
          ],
          explanation: "Total change = 28 − 4 = 24 cm; 24 ÷ 6 = 4 cm each day."
        },
        {
          id: "g5.spring.math.w5.d2.arena2",
          type: "multiple_choice",
          stem: "Over the same 10 days, Vine X grew 30 cm and Vine Y grew 20 cm. Which vine grew MORE?",
          choices: [
            "Vine Y, because 20 is easier to divide",
            "Vine X, because 30 cm is more growth than 20 cm over the same 10 days",
            "They grew the same because both took 10 days",
            "You cannot compare them"
          ],
          answerIndex: 1,
          explanation: "Both grew for the same 10 days, so compare the totals. Vine X grew 30 cm and Vine Y grew 20 cm, so Vine X grew more.",
          hintLadder: [
            "Both vines grew for the same number of days.",
            "So compare how much each one grew in all.",
            "30 cm is more than 20 cm."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow a Little, Grow a Lot",
      prompt:
        "Grow like a big grower: rise from the floor all the way up to a full stretch. Now grow like a small grower: rise up only halfway. Feel the difference between 'grew a lot' and 'grew a little.' Repeat each twice.",
      scienceTieIn:
        "Changing how far you stretch makes your muscles work different amounts — your body is measuring change, just like the growth graphs you are reading.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick something you are getting better at — a sport, an instrument, a subject. Are you growing a lot at it right now, or just a little? How can you tell?",
      badge: { id: "g5-spring-change-champion", name: "Change Champion", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
