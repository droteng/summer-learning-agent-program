// Grade 6 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 2.
// Topic: reading and making bar & line graphs of harvest yields.

export const fallG6MathW3D2 = {
  id: "g6.fall.math.w3.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Math",
  topic: "Reading data — bar and line graphs",
  topicTag: "data-graphs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.SP.B.4", "CCSS.6.SP.B.5"],
  hook: "A farmer's notebook is full of numbers. Turn them into a graph and the story jumps out: which crop is rising, which is falling. Today you read the data.",
  miniLesson: [
    "A bar graph compares amounts across categories (apples vs. corn vs. squash).",
    "A line graph shows change over time (yield each month) — the slope shows rising or falling.",
    "Always read the axis labels and the scale first, or you'll misread every value."
  ],
  workedExample: {
    prompt: "A line graph shows apple yield: Sep 100, Oct 140, Nov 120. Describe the trend.",
    steps: [
      "Read the values in time order: 100, then 140, then 120.",
      "Sep→Oct goes up (100 to 140).",
      "Oct→Nov goes down (140 to 120).",
      "Trend: yield rose to a peak in October, then fell."
    ],
    answer: "Rose from Sep to a peak in Oct, then fell in Nov."
  },
  items: [
    {
      id: "g6.fall.math.w3.d2.q1",
      type: "multiple_choice",
      stem: "Which graph type is BEST for showing how corn yield changed each month over a season?",
      choices: ["Pie chart", "Bar graph", "Line graph", "Tally chart"],
      answerIndex: 2,
      explanation: "Line graphs are designed to show change over time.",
      hintLadder: [
        "The key phrase is 'changed each month' — over time.",
        "Which graph connects points across time?",
        "Line graph shows trends over time."
      ]
    },
    {
      id: "g6.fall.math.w3.d2.q2",
      type: "numeric",
      stem: "A bar graph shows: apples 60, corn 90, squash 45. How many MORE corn than squash?",
      answer: 45,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Find the two bars: corn and squash.",
        "Subtract: corn − squash.",
        "90 − 45 = 45."
      ],
      explanation: "90 − 45 = 45 more corn than squash."
    },
    {
      id: "g6.fall.math.w3.d2.q3",
      type: "numeric",
      stem: "A line graph's y-axis counts by 20s. A point sits halfway between the 40 and 60 gridlines. What value is it?",
      answer: 50,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Halfway between 40 and 60.",
        "The midpoint of 40 and 60.",
        "(40 + 60) ÷ 2 = 50."
      ],
      explanation: "Halfway between 40 and 60 is 50.",
      misconceptionsTargeted: ["ignores-axis-scale"]
    },
    {
      id: "g6.fall.math.w3.d2.q4",
      type: "multiple_choice",
      stem: "Before reading any value off a graph, what should you check FIRST?",
      choices: [
        "The color of the bars",
        "The axis labels and scale",
        "Who made the graph",
        "The title font"
      ],
      answerIndex: 1,
      explanation: "Axis labels tell you what's measured; the scale tells you how much each gridline is worth.",
      hintLadder: [
        "What lets you know what the numbers mean?",
        "Think about the lines along the bottom and side.",
        "Labels + scale come first."
      ]
    },
    {
      id: "g6.fall.math.w3.d2.q5",
      type: "short_answer",
      stem: "Squash yields were: Week 1 = 20, Week 2 = 35, Week 3 = 30, Week 4 = 45. Describe the trend and name the best and worst weeks.",
      rubric: {
        level3: "Describes the overall upward-but-bumpy trend AND correctly names Week 4 best (45) and Week 1 worst (20).",
        level2: "Identifies best/worst OR the trend, but not both clearly.",
        level1: "Misreads the data or gives no trend."
      },
      exemplar: "Overall the yield rose from 20 to 45, but it dipped in Week 3. The best week was Week 4 (45) and the worst was Week 1 (20).",
      hintLadder: [
        "Put the four numbers in order of week.",
        "Where does it go up, where does it dip?",
        "Pick the highest and lowest values."
      ]
    }
  ],
  reflectionPrompt: "Think of something in your life you could track for 4 weeks. Would a bar or a line graph tell its story better?",
  misconceptionBank: [
    {
      id: "ignores-axis-scale",
      label: "Reads gridlines as counting by 1",
      description: "Assumes each gridline is one unit instead of checking the scale.",
      coachMove: "Always read two labeled gridlines and find the gap between them before reading any point."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Which Graph Tells the Story?",
      prompt:
        "A farmer wants to show how apple yield changed across Sep, Oct, and Nov. Would a bar graph or a line graph make the rising-then-falling story easiest to see? Pick one and say why.",
      answer:
        "A line graph — it connects the months in order so you can see the climb to October and the drop in November at a glance. Bar graphs are better for comparing separate categories.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Graph Your Own Harvest",
      challenge:
        "Collect (or invent) 4 data points about a fall thing you can count — leaves raked each day, pumpkins at 4 stands, temperature over 4 days. Then turn it into a labeled graph and write one sentence about the trend.",
      steps: [
        "Choose your data and write down 4 values with labels.",
        "Decide: bar graph (categories) or line graph (over time)?",
        "Draw the graph with labeled axes and a clear scale.",
        "Write one sentence describing the trend or the biggest difference."
      ],
      deliverable: "A labeled graph (bar or line) with axis labels, a scale, and a one-sentence trend statement.",
      choiceBoard: [
        "Draw a bar graph comparing categories you counted.",
        "Draw a line graph of something changing over 4 days.",
        "Make a 'data detective' poster with your graph plus 2 things it reveals."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w3.d2.arena1",
          type: "numeric",
          stem: "A bar graph shows weekly pumpkin sales: Week 1 = 35, Week 2 = 50, Week 3 = 80. How many MORE pumpkins were sold in Week 3 than Week 1?",
          answer: 45,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Find the Week 3 and Week 1 bars.",
            "Subtract Week 1 from Week 3.",
            "80 − 35 = 45."
          ],
          explanation: "80 − 35 = 45 more pumpkins in Week 3 than Week 1."
        },
        {
          id: "g6.fall.math.w3.d2.arena2",
          type: "multiple_choice",
          stem: "A line graph's y-axis counts by 25s. A point sits exactly halfway between the 50 and 75 gridlines. What value is it?",
          choices: ["60", "62.5", "65", "100"],
          answerIndex: 1,
          explanation: "Halfway between 50 and 75 is (50 + 75) ÷ 2 = 62.5.",
          hintLadder: [
            "You need the midpoint of 50 and 75.",
            "Add the two values, then divide by 2.",
            "(50 + 75) ÷ 2 = 62.5."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Be the Line Graph",
      prompt:
        "Stand up and 'draw' a line graph with your arm: low for a small harvest, sweep high for a big one, dip back down for a slow week. Trace 3 made-up months, breathing steadily as you go.",
      scienceTieIn:
        "Moving your body and breathing deeply boosts blood flow to your brain, helping you reset before the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's something in your own life you could track for a week and graph? Would a bar or a line graph tell its story better, and why?",
      badge: { id: "harvest-data-detective", name: "Harvest Data Detective", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
