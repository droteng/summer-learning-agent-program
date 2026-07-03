// Grade 6 Math — Spring Expedition, Week 2 (Plants & Growth), Day 3.
// Topic: measuring growth over time — rates, line plots, growth per day/week.

export const springG6MathW2D3 = {
  id: "g6.spring.math.w2.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Math",
  topic: "Measuring growth over time — rates and line plots",
  topicTag: "growth-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.2", "CCSS.6.RP.A.3.B"],
  hook: "Your seed is sprouting — but how FAST? Today you turn a row of daily heights into a growth rate, plot it, and predict how tall your plant will be next week.",
  miniLesson: [
    "A rate compares two different quantities. Growth rate = change in height ÷ change in time, like centimeters per day.",
    "To find growth per day: subtract the starting height from the ending height, then divide by the number of days.",
    "A line plot (or line graph) shows height on the up axis and time along the bottom. A steeper line means faster growth."
  ],
  workedExample: {
    prompt: "A seedling was 4 cm tall on Day 1 and 16 cm tall on Day 4. What was its growth rate in cm per day?",
    steps: [
      "Find the change in height: 16 − 4 = 12 cm.",
      "Find the change in time: Day 4 − Day 1 = 3 days.",
      "Divide: growth rate = 12 cm ÷ 3 days = 4 cm per day.",
      "So the plant grew about 4 cm each day."
    ],
    answer: "4 cm per day."
  },
  items: [
    {
      id: "g6.spring.math.w2.d3.q1",
      type: "numeric",
      stem: "A bean plant was 5 cm on Monday and 20 cm on Friday (4 days later). What was its growth rate in cm per day?",
      answer: 3.75,
      tolerance: 0,
      unit: "cm per day",
      hintLadder: [
        "Change in height: 20 − 5.",
        "That growth happened over 4 days.",
        "15 ÷ 4 = 3.75 cm per day."
      ],
      explanation: "Height grew 20 − 5 = 15 cm over 4 days, so 15 ÷ 4 = 3.75 cm per day."
    },
    {
      id: "g6.spring.math.w2.d3.q2",
      type: "numeric",
      stem: "A sprout grows a steady 2 cm every day. If it starts at 3 cm, how tall will it be after 7 days?",
      answer: 17,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Total growth = rate × days = 2 × 7.",
        "That growth is 14 cm, added to the start.",
        "3 + 14 = 17 cm."
      ],
      explanation: "Growth = 2 cm/day × 7 days = 14 cm; plus the 3 cm start = 17 cm."
    },
    {
      id: "g6.spring.math.w2.d3.q3",
      type: "multiple_choice",
      stem: "On a line graph of plant height over time, what does a STEEPER line mean?",
      choices: [
        "The plant is growing more slowly",
        "The plant is growing faster",
        "The plant stopped growing",
        "The plant is getting shorter"
      ],
      answerIndex: 1,
      explanation: "A steeper line means height is increasing more per day — that's faster growth.",
      hintLadder: [
        "Steeper means a bigger climb in the same time.",
        "More height gained per day means what?",
        "Steeper = faster growth."
      ],
      misconceptionsTargeted: ["steeper-means-taller"]
    },
    {
      id: "g6.spring.math.w2.d3.q4",
      type: "numeric",
      stem: "Two plants grow at steady rates. Plant A grows 6 cm per week. How many cm does Plant A grow PER DAY? (Use 7 days in a week; round to the nearest tenth.)",
      answer: 0.9,
      tolerance: 0.05,
      unit: "cm per day",
      hintLadder: [
        "Per day means divide the weekly growth by 7.",
        "6 ÷ 7 is a little under 1.",
        "6 ÷ 7 ≈ 0.857, which rounds to 0.9 cm per day."
      ],
      explanation: "6 cm per week ÷ 7 days = 0.857..., which rounds to 0.9 cm per day."
    },
    {
      id: "g6.spring.math.w2.d3.q5",
      type: "short_answer",
      stem: "Your seedling measured 2 cm, 5 cm, 8 cm, and 11 cm on Days 1, 2, 3, and 4. Describe the growth pattern and predict its height on Day 5. Explain your reasoning.",
      rubric: {
        level3: "Identifies the steady +3 cm/day pattern AND predicts 14 cm on Day 5 with reasoning.",
        level2: "Notices growth but the rate or the Day 5 prediction is slightly off.",
        level1: "No clear pattern or an unsupported prediction."
      },
      exemplar: "The plant grows a steady 3 cm each day (2→5→8→11). Continuing the pattern, Day 5 would be 11 + 3 = 14 cm.",
      hintLadder: [
        "How much does the height change from one day to the next?",
        "The jump is the same each time — what is it?",
        "Add that steady amount to Day 4's height."
      ]
    }
  ],
  reflectionPrompt: "Besides plants, what else in your life changes at a steady rate you could measure — like screen time, savings, or steps per day?",
  misconceptionBank: [
    {
      id: "steeper-means-taller",
      label: "Confuses a steep line with a tall plant",
      description: "Reads steepness as the plant's height instead of its speed of growth.",
      coachMove: "Point out that steepness shows how FAST height changes; the actual height is how HIGH the line sits on the graph."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather grow a plant that gains 2 cm every day for a week, or one that gains 15 cm all at once on the last day? Which is taller after 7 days? Work it out before you choose!",
      answer:
        "The steady one: 2 cm/day × 7 days = 14 cm. The other gains only 15 cm total on day 7 — barely more (15 vs 14 cm). But the steady plant grew visibly every single day, which is easier to graph and track.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Graph Your Seed's Growth",
      challenge:
        "Make a line graph for a growing plant. Put days along the bottom and height up the side. Plot at least 4 points, connect them, and use the graph to predict the next day's height.",
      materials: ["Graph paper or paper & ruler, OR a spreadsheet/drawing app"],
      steps: [
        "Draw two axes: time (days) along the bottom, height (cm) up the side.",
        "Plot at least 4 height points for Days 1 through 4 (make up realistic numbers or use real ones).",
        "Connect the points with a line and note how steep it is.",
        "Extend the pattern to predict the height on the next day."
      ],
      deliverable: "A labeled line graph of height over time with a prediction for the next day.",
      choiceBoard: [
        "Draw the line graph by hand on graph paper.",
        "Build the graph in a spreadsheet and let it draw the line.",
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
          id: "g6.spring.math.w2.d3.arena1",
          type: "numeric",
          stem: "A sunflower was 10 cm tall on Day 2 and 46 cm tall on Day 8. What was its growth rate in cm per day?",
          answer: 6,
          tolerance: 0,
          unit: "cm per day",
          hintLadder: [
            "Change in height: 46 − 10 = 36 cm.",
            "Change in time: Day 8 − Day 2 = 6 days.",
            "36 ÷ 6 = 6 cm per day."
          ],
          explanation: "Height grew 36 cm over 6 days: 36 ÷ 6 = 6 cm per day."
        },
        {
          id: "g6.spring.math.w2.d3.arena2",
          type: "numeric",
          stem: "A vine grows a steady 4 cm per day. It is 12 cm tall now. How tall will it be after 2 more WEEKS?",
          answer: 68,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find the days: 2 weeks = 14 days.",
            "Growth = 4 cm/day × 14 days = 56 cm.",
            "Add the current height: 12 + 56 = 68 cm."
          ],
          explanation: "2 weeks = 14 days; growth = 4 × 14 = 56 cm; plus the 12 cm start = 68 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Steady-Rate Stretch",
      prompt:
        "Grow at a steady rate: start crouched, then rise one 'level' taller every time you count a day — Day 1, Day 2, Day 3, Day 4 — until you're stretched all the way up on tiptoes. Then shrink back down day by day. Repeat twice.",
      scienceTieIn: "Steady, rhythmic movement gets oxygen to your muscles at a constant rate — just like a plant adding the same height each day.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Growth rates let you predict the future from the past. What's one thing you'd like to track over the next week to see how fast it changes?",
      badge: { id: "spring-growth-grapher", name: "Growth Grapher", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
