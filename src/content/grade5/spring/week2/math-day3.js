// Grade 5 Math — Spring Expedition, Week 2 (Plants & Growth), Day 3.
// Topic: measuring growth over time — growth per day/week and line plots.
// Grade 5 counterpart of g6.spring.math.w2.d3: same topic, but whole-number
// growth rates and simpler numbers for ages 10–11.

export const springG5MathW2D3 = {
  id: "g5.spring.math.w2.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Math",
  topic: "Measuring growth over time — rates and line plots",
  topicTag: "growth-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.OA.B.3", "CCSS.5.MD.B.2"],
  hook: "Your seed is sprouting — but how FAST? Today you turn a row of daily heights into a growth rate, plot it on a graph, and guess how tall your plant will be next.",
  miniLesson: [
    "A growth rate tells how much taller a plant gets in a set time, like centimeters per day.",
    "To find growth per day: take the ENDING height minus the STARTING height, then divide by the number of days.",
    "A line graph shows height going UP the side and time along the BOTTOM. A steeper line means the plant grew faster."
  ],
  workedExample: {
    prompt: "A seedling was 4 cm tall on Day 1 and 16 cm tall on Day 5. What was its growth rate in cm per day?",
    steps: [
      "Change in height: 16 − 4 = 12 cm.",
      "Change in days: Day 5 − Day 1 = 4 days.",
      "Divide: 12 cm ÷ 4 days = 3 cm per day.",
      "So the plant grew about 3 cm each day."
    ],
    answer: "3 cm per day."
  },
  items: [
    {
      id: "g5.spring.math.w2.d3.q1",
      type: "numeric",
      stem: "A bean plant was 4 cm tall on Monday and 16 cm tall on Friday (4 days later). What was its growth rate in cm per day?",
      answer: 3,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Change in height: 16 − 4.",
        "That growth happened over 4 days.",
        "12 ÷ 4 = 3 cm per day."
      ],
      explanation: "Height grew 16 − 4 = 12 cm over 4 days, so 12 ÷ 4 = 3 cm per day."
    },
    {
      id: "g5.spring.math.w2.d3.q2",
      type: "numeric",
      stem: "A sprout grows a steady 3 cm every day. If it starts at 2 cm, how tall will it be after 6 days?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Total growth = rate × days = 3 × 6.",
        "That growth is 18 cm, added to the start.",
        "2 + 18 = 20 cm."
      ],
      explanation: "Growth = 3 cm/day × 6 days = 18 cm; plus the 2 cm start = 20 cm."
    },
    {
      id: "g5.spring.math.w2.d3.q3",
      type: "multiple_choice",
      stem: "On a line graph of plant height over time, what does a STEEPER line mean?",
      choices: [
        "The plant is growing more slowly",
        "The plant is growing faster",
        "The plant stopped growing",
        "The plant is getting shorter"
      ],
      answerIndex: 1,
      explanation: "A steeper line means the plant gains more height each day — that's faster growth.",
      hintLadder: [
        "Steeper means a bigger climb in the same time.",
        "More height gained per day means what?",
        "Steeper = faster growth."
      ],
      misconceptionsTargeted: ["steeper-means-taller"]
    },
    {
      id: "g5.spring.math.w2.d3.q4",
      type: "numeric",
      stem: "A plant grows a steady 10 cm each week. If a school week is 5 days, how many cm does it grow PER DAY?",
      answer: 2,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Per day means divide the weekly growth by the number of days.",
        "10 cm shared over 5 days.",
        "10 ÷ 5 = 2 cm per day."
      ],
      explanation: "10 cm per week ÷ 5 days = 2 cm per day."
    },
    {
      id: "g5.spring.math.w2.d3.q5",
      type: "short_answer",
      stem: "Your seedling measured 2 cm, 5 cm, 8 cm, and 11 cm on Days 1, 2, 3, and 4. Describe the growth pattern and predict its height on Day 5. Explain how you know.",
      rubric: {
        level3: "Identifies the steady +3 cm/day pattern AND predicts 14 cm on Day 5 with reasoning.",
        level2: "Notices the growth but the rate or the Day 5 prediction is a little off.",
        level1: "No clear pattern or a guess with no reasoning."
      },
      exemplar: "The plant grows a steady 3 cm each day (2→5→8→11). If it keeps going, Day 5 would be 11 + 3 = 14 cm.",
      hintLadder: [
        "How much does the height change from one day to the next?",
        "The jump is the same every time — what is it?",
        "Add that steady amount to Day 4's height."
      ]
    }
  ],
  reflectionPrompt: "Besides plants, what else in your life changes at a steady rate you could measure — like allowance saved, pages read, or steps per day?",
  misconceptionBank: [
    {
      id: "steeper-means-taller",
      label: "Confuses a steep line with a tall plant",
      description: "Reads steepness as the plant's height instead of its speed of growth.",
      coachMove: "Point out that steepness shows how FAST the height changes; the actual height is how HIGH the line sits on the graph."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather grow a plant that gains 3 cm every day for 5 days, or one that gains 12 cm all at once on the last day? Which is taller after 5 days? Work it out before you choose!",
      answer:
        "The steady one: 3 cm/day × 5 days = 15 cm. The other gains only 12 cm total — shorter. Plus the steady plant grows a little every day, which is easier to graph and track.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Graph Your Seed's Growth",
      challenge:
        "Make a line graph for a growing plant. Put the days along the bottom and the height up the side. Plot at least 4 points, connect them, and use your graph to guess the next day's height.",
      materials: ["Graph paper or paper & ruler, OR a spreadsheet/drawing app"],
      steps: [
        "Draw two lines: time (days) along the bottom, height (cm) up the side.",
        "Plot at least 4 height points for Days 1 through 4 (make up realistic numbers or use real ones).",
        "Connect the points with a line and notice how steep it is.",
        "Keep the pattern going to guess the height on the next day."
      ],
      deliverable: "A labeled line graph of height over time with a guess for the next day.",
      choiceBoard: [
        "Draw the line graph by hand on graph paper.",
        "Make the graph in a spreadsheet and let it draw the line.",
        "Make a 'growth diary' with a small bar for each day's height."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w2.d3.arena1",
          type: "numeric",
          stem: "A sunflower was 3 cm tall on Day 2 and 21 cm tall on Day 8. What was its growth rate in cm per day?",
          answer: 3,
          tolerance: 0,
          unit: "cm per day",
          hintLadder: [
            "Change in height: 21 − 3 = 18 cm.",
            "Change in days: Day 8 − Day 2 = 6 days.",
            "18 ÷ 6 = 3 cm per day."
          ],
          explanation: "Height grew 18 cm over 6 days: 18 ÷ 6 = 3 cm per day."
        },
        {
          id: "g5.spring.math.w2.d3.arena2",
          type: "numeric",
          stem: "A vine grows a steady 5 cm per day. It is 4 cm tall now. How tall will it be after 1 more WEEK? (Use 7 days in a week.)",
          answer: 39,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find the days: 1 week = 7 days.",
            "Growth = 5 cm/day × 7 days = 35 cm.",
            "Add the height now: 4 + 35 = 39 cm."
          ],
          explanation: "1 week = 7 days; growth = 5 × 7 = 35 cm; plus the 4 cm start = 39 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Steady-Rate Stretch",
      prompt:
        "Grow at a steady rate: start crouched, then rise one 'level' taller each time you count a day — Day 1, Day 2, Day 3, Day 4 — until you're stretched all the way up on your toes. Then shrink back down day by day. Do it twice.",
      scienceTieIn: "Steady, even movement gets oxygen to your muscles at a constant rate — just like a plant adding the same height each day.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Growth rates let you guess the future from the past. What's one thing you'd like to track over the next week to see how fast it changes?",
      badge: { id: "g5-spring-growth-grapher", name: "Growth Grapher", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
