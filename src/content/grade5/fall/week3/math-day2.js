// Grade 5 Math — Fall Expedition, Week 3 (The Harvest of Numbers), Day 2.
// Topic: reading and making bar & line graphs of harvest yields (Grade 5
// depth — friendly scales, whole-number reads, simple differences).

export const fallG5MathW3D2 = {
  id: "g5.fall.math.w3.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Math",
  topic: "Reading data — bar and line graphs",
  topicTag: "data-graphs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.B.2", "CCSS.5.G.A.2"],
  hook: "A farmer's notebook is full of numbers. Turn them into a graph and the story pops out: which crop is going up, which is going down. Today you read the data.",
  miniLesson: [
    "A bar graph compares amounts across groups (apples vs. corn vs. squash) — taller bar means more.",
    "A line graph shows change over time (yield each month) — the line going up means rising, down means falling.",
    "Always read the labels and the scale first: check how much each gridline is worth, or you'll misread every value."
  ],
  workedExample: {
    prompt: "A line graph shows apple yield: Sep 10, Oct 14, Nov 12. Describe the trend.",
    steps: [
      "Read the values in time order: 10, then 14, then 12.",
      "Sep→Oct goes up (10 to 14).",
      "Oct→Nov goes down (14 to 12).",
      "Trend: yield rose to a peak in October, then dropped a little in November."
    ],
    answer: "Rose to a peak in October, then fell a bit in November."
  },
  items: [
    {
      id: "g5.fall.math.w3.d2.q1",
      type: "multiple_choice",
      stem: "Which graph is BEST for showing how corn yield changed each month over a season?",
      choices: ["Line graph", "Bar graph", "Pie chart", "Tally chart"],
      answerIndex: 0,
      explanation: "Line graphs are made to show change over time.",
      hintLadder: [
        "The key words are 'changed each month' — that means over time.",
        "Which graph connects points across time?",
        "A line graph shows trends over time."
      ]
    },
    {
      id: "g5.fall.math.w3.d2.q2",
      type: "numeric",
      stem: "A bar graph shows: apples 6, corn 9, squash 4. How many MORE corn than squash?",
      answer: 5,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Find the corn bar and the squash bar.",
        "Subtract: corn − squash.",
        "9 − 4 = 5."
      ],
      explanation: "9 − 4 = 5 more corn than squash."
    },
    {
      id: "g5.fall.math.w3.d2.q3",
      type: "numeric",
      stem: "A line graph's y-axis counts by 10s. A point sits exactly halfway between the 40 and 50 gridlines. What value is it?",
      answer: 45,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "You need the number halfway between 40 and 50.",
        "Add the two numbers, then split in half.",
        "(40 + 50) ÷ 2 = 45."
      ],
      explanation: "Halfway between 40 and 50 is 45.",
      misconceptionsTargeted: ["ignores-axis-scale"]
    },
    {
      id: "g5.fall.math.w3.d2.q4",
      type: "multiple_choice",
      stem: "Before you read any value off a graph, what should you check FIRST?",
      choices: [
        "The color of the bars",
        "The title font",
        "Who made the graph",
        "The labels and the scale"
      ],
      answerIndex: 3,
      explanation: "Labels tell you what's being measured; the scale tells you how much each gridline is worth.",
      hintLadder: [
        "What helps you know what the numbers mean?",
        "Think about the words and numbers along the bottom and the side.",
        "Labels and scale come first."
      ]
    },
    {
      id: "g5.fall.math.w3.d2.q5",
      type: "short_answer",
      stem: "Squash yields were: Week 1 = 5, Week 2 = 8, Week 3 = 6, Week 4 = 10. Describe the trend and name the best and worst weeks.",
      rubric: {
        level3: "Describes the overall upward-but-bumpy trend AND correctly names Week 4 as best (10) and Week 1 as worst (5).",
        level2: "Identifies best/worst OR the trend, but not both clearly.",
        level1: "Misreads the data or gives no trend."
      },
      exemplar: "Overall the yield went up from 5 to 10, but it dipped in Week 3. The best week was Week 4 (10) and the worst was Week 1 (5).",
      hintLadder: [
        "Put the four numbers in week order.",
        "Where does it go up, and where does it dip?",
        "Pick the highest and lowest values."
      ]
    }
  ],
  reflectionPrompt: "Think of something in your life you could count for 4 weeks. Would a bar or a line graph tell its story better?",
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
        "A line graph — it connects the months in order so you can see the climb to October and the drop in November at a glance. Bar graphs are better for comparing separate groups.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Graph Your Own Harvest",
      challenge:
        "Collect (or invent) 4 data points about a fall thing you can count — leaves raked each day, pumpkins at 4 stands, temperature over 4 days. Then turn it into a labeled graph and write one sentence about the trend.",
      steps: [
        "Choose your data and write down 4 values with labels.",
        "Decide: bar graph (groups) or line graph (over time)?",
        "Draw the graph with labeled axes and a clear scale.",
        "Write one sentence describing the trend or the biggest difference."
      ],
      deliverable: "A labeled graph (bar or line) with axis labels, a scale, and a one-sentence trend statement.",
      choiceBoard: [
        "Draw a bar graph comparing groups you counted.",
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
          id: "g5.fall.math.w3.d2.arena1",
          type: "numeric",
          stem: "A bar graph shows weekly pumpkin sales: Week 1 = 3, Week 2 = 5, Week 3 = 8. How many MORE pumpkins were sold in Week 3 than Week 1?",
          answer: 5,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Find the Week 3 and Week 1 bars.",
            "Subtract Week 1 from Week 3.",
            "8 − 3 = 5."
          ],
          explanation: "8 − 3 = 5 more pumpkins in Week 3 than Week 1."
        },
        {
          id: "g5.fall.math.w3.d2.arena2",
          type: "multiple_choice",
          stem: "A line graph's y-axis counts by 20s. A point sits exactly halfway between the 20 and 40 gridlines. What value is it?",
          choices: ["25", "35", "30", "50"],
          answerIndex: 2,
          explanation: "Halfway between 20 and 40 is (20 + 40) ÷ 2 = 30.",
          hintLadder: [
            "You need the midpoint of 20 and 40.",
            "Add the two values, then split in half.",
            "(20 + 40) ÷ 2 = 30."
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
        "What's something in your own life you could count for a week and graph? Would a bar or a line graph tell its story better, and why?",
      badge: { id: "g5-fall-harvest-data-detective", name: "Harvest Data Detective", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
