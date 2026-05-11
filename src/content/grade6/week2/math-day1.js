// Grade 6 Math — Week 2 (Numbers in the Real World), Day 1.
// Topic: reading charts and tables.

export const grade6MathWeek2Day1 = {
  id: "g6.math.w2.d1",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Math",
  topic: "Reading bar and line charts",
  topicTag: "data-charts",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.6.SP.A.2", "CCSS.6.SP.B.5"],
  hook: "Charts pack a lot of information into a small picture. Today you read them carefully — without guessing.",
  miniLesson: [
    "A bar chart compares amounts using bar height. The taller the bar, the larger the value.",
    "A line chart shows how something changes over time. The steeper the line, the bigger the change.",
    "Always read the axis labels first. The same picture can mean very different things depending on the units."
  ],
  workedExample: {
    prompt:
      "A bar chart shows ice cream sales by flavor: Vanilla 30, Chocolate 50, Strawberry 20, Mint 25. What is the total, and which flavor sold the most?",
    steps: [
      "Read each bar value: V=30, C=50, S=20, M=25.",
      "Add them: 30 + 50 + 20 + 25 = 125.",
      "Find the largest: Chocolate at 50.",
      "Total sales = 125 scoops; Chocolate sold the most."
    ],
    answer: "125 total; Chocolate is the top seller."
  },
  items: [
    {
      id: "g6.math.w2.d1.q1",
      type: "multiple_choice",
      stem:
        "A bar chart shows weekly steps: Mon 5,000 Tue 8,000 Wed 6,000 Thu 9,000 Fri 7,000. Which day had the most steps?",
      choices: ["Monday", "Wednesday", "Thursday", "Friday"],
      answerIndex: 2,
      explanation: "Thursday's bar at 9,000 is the tallest.",
      hintLadder: [
        "Compare the values directly.",
        "Find the largest number in the list.",
        "9,000 is the largest, on Thursday."
      ],
      misconceptionsTargeted: ["picks-by-position"]
    },
    {
      id: "g6.math.w2.d1.q2",
      type: "numeric",
      stem: "Using the same step data (5000, 8000, 6000, 9000, 7000), what's the total?",
      answer: 35000,
      tolerance: 0,
      hintLadder: [
        "Add the daily values one by one.",
        "5000 + 8000 = 13,000. Add 6,000.",
        "13,000 + 6,000 + 9,000 + 7,000 = 35,000."
      ],
      explanation: "Adding all five days: 5000 + 8000 + 6000 + 9000 + 7000 = 35,000."
    },
    {
      id: "g6.math.w2.d1.q3",
      type: "multiple_choice",
      stem:
        "A line chart shows a runner's finish time across 4 races: 25 min, 23 min, 22 min, 20 min. What does the line tell you?",
      choices: [
        "The runner is getting slower.",
        "The runner stayed the same.",
        "The runner is getting faster.",
        "There isn't enough data."
      ],
      answerIndex: 2,
      explanation: "Each finish time is shorter — that means faster.",
      hintLadder: [
        "Are the numbers going up or down?",
        "Smaller time = less time to finish.",
        "Less time = faster."
      ],
      misconceptionsTargeted: ["confuses-up-with-better"]
    },
    {
      id: "g6.math.w2.d1.q4",
      type: "numeric",
      stem:
        "A pet store sold 12 fish, 8 turtles, and 5 lizards. How many more fish than lizards were sold?",
      answer: 7,
      tolerance: 0,
      hintLadder: [
        "Subtract the smaller from the larger.",
        "12 - 5 = ?",
        "12 - 5 = 7 more fish."
      ],
      explanation: "12 fish minus 5 lizards = 7 more fish."
    },
    {
      id: "g6.math.w2.d1.q5",
      type: "short_answer",
      stem:
        "A chart shows screen time per day: Mon 1h, Tue 2h, Wed 1h, Thu 3h, Fri 2h. In one or two sentences, describe what the chart shows.",
      rubric: {
        level3: "Names a specific pattern (e.g., spikes Thursday, low Mon/Wed) and a total or comparison.",
        level2: "States that screen time varied but doesn't pick out a specific day or comparison.",
        level1: "Restates the data without describing a pattern."
      },
      exemplar:
        "Screen time was lowest on Monday and Wednesday at 1 hour each, peaked at 3 hours on Thursday, and totaled 9 hours for the week.",
      hintLadder: [
        "Find the lowest and highest values.",
        "Add up the total too.",
        "Combine those into one sentence."
      ]
    }
  ],
  reflectionPrompt: "Today you read charts carefully. Where in your week could a chart help you spot a pattern?",
  misconceptionBank: [
    {
      id: "picks-by-position",
      label: "Picks by bar position, not height",
      description: "Selects the rightmost or leftmost bar without comparing heights.",
      coachMove: "Ask: which bar has the largest number? Position doesn't matter — height does."
    },
    {
      id: "confuses-up-with-better",
      label: "Confuses 'up' with 'better'",
      description: "Treats a rising line as positive even when the metric is time (where lower is better).",
      coachMove: "Ask: what does this measure? If it's time, less is faster, so a downward line is improvement."
    }
  ]
};
