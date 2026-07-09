// Grade 5 Summer — Week 2 (Numbers in the Real World), Day 1.
// Topic: reading bar and line charts (grade-5 depth: whole numbers, small values).
// Grade-5 counterpart of grade6/week2/math-day1.js, pitched down.

export const summerG5MathW2D1 = {
  id: "g5.summer.math.w2.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Math",
  topic: "Reading bar and line charts",
  topicTag: "data-charts",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.B.2", "CCSS.5.NBT.B.5"],
  hook: "A chart is a picture made of numbers. Today you read charts step by step — looking, not guessing!",
  miniLesson: [
    "A bar chart compares amounts using bar height. Taller bar = bigger number. Line up the top of each bar with the number on the side.",
    "A line chart shows how something changes over time. When the line goes UP the number is growing; when it goes DOWN the number is shrinking.",
    "Read the labels FIRST. The words on the bottom and side tell you what the chart is about and what the numbers mean."
  ],
  workedExample: {
    prompt:
      "A bar chart shows fruit picked: Apples 6, Pears 9, Plums 4, Figs 5. What is the total, and which fruit had the most?",
    steps: [
      "Read each bar: Apples = 6, Pears = 9, Plums = 4, Figs = 5.",
      "Add them one at a time: 6 + 9 = 15, then 15 + 4 = 19, then 19 + 5 = 24.",
      "Find the tallest bar: Pears at 9.",
      "Total picked = 24 pieces of fruit; Pears had the most."
    ],
    answer: "24 total; Pears had the most."
  },
  items: [
    {
      id: "g5.summer.math.w2.d1.q1",
      type: "multiple_choice",
      stem:
        "A bar chart shows books read each day: Mon 3, Tue 5, Wed 2, Thu 6, Fri 4. Which day had the most books read?",
      choices: ["Monday", "Thursday", "Tuesday", "Friday"],
      answerIndex: 1,
      explanation: "Thursday's bar at 6 is the tallest, so Thursday had the most books.",
      hintLadder: [
        "Compare the numbers: which is biggest?",
        "The biggest number matches the tallest bar.",
        "6 is the largest, and that is Thursday."
      ],
      misconceptionsTargeted: ["picks-by-position"]
    },
    {
      id: "g5.summer.math.w2.d1.q2",
      type: "numeric",
      stem: "Using the same book data (3, 5, 2, 6, 4), what is the total number of books read for the week?",
      answer: 20,
      tolerance: 0,
      unit: "books",
      hintLadder: [
        "Add the daily values one at a time.",
        "3 + 5 = 8, then add 2 to get 10.",
        "10 + 6 + 4 = 20."
      ],
      explanation: "Adding all five days: 3 + 5 + 2 + 6 + 4 = 20 books."
    },
    {
      id: "g5.summer.math.w2.d1.q3",
      type: "multiple_choice",
      stem:
        "A line chart shows a plant's height over 4 weeks: 2 cm, 4 cm, 7 cm, 10 cm. What does the line tell you?",
      choices: [
        "The plant is growing taller.",
        "The plant stayed the same.",
        "The plant is shrinking.",
        "There isn't enough data."
      ],
      answerIndex: 0,
      explanation: "Each week the height is bigger, so the line goes up — the plant is growing taller.",
      hintLadder: [
        "Are the numbers going up or down?",
        "2, then 4, then 7, then 10 — these get bigger.",
        "Bigger numbers = the plant is growing."
      ],
      misconceptionsTargeted: ["confuses-up-with-better"]
    },
    {
      id: "g5.summer.math.w2.d1.q4",
      type: "numeric",
      stem:
        "A snack chart shows: 8 apples, 5 bananas, 3 oranges sold. How many MORE apples than oranges were sold?",
      answer: 5,
      tolerance: 0,
      unit: "apples",
      hintLadder: [
        "'How many more' means subtract the smaller from the larger.",
        "8 apples take away 3 oranges.",
        "8 - 3 = 5 more apples."
      ],
      explanation: "8 apples minus 3 oranges = 5 more apples."
    },
    {
      id: "g5.summer.math.w2.d1.q5",
      type: "short_answer",
      stem:
        "A chart shows minutes spent reading each day: Mon 10, Tue 20, Wed 10, Thu 30, Fri 20. In one or two sentences, describe what the chart shows.",
      rubric: {
        level3: "Names a specific pattern (e.g., highest on Thursday, lowest Mon/Wed) AND gives a total or comparison.",
        level2: "Says the minutes changed but does not point out a specific day or comparison.",
        level1: "Just repeats the numbers without describing a pattern."
      },
      exemplar:
        "Reading time was lowest on Monday and Wednesday at 10 minutes each, highest at 30 minutes on Thursday, and added up to 90 minutes for the week.",
      hintLadder: [
        "Find the lowest and the highest values first.",
        "You can also add them up for a total.",
        "Put those facts together into one sentence."
      ]
    }
  ],
  reflectionPrompt: "Today you read charts carefully. Where in your week could a chart help you spot a pattern?",
  misconceptionBank: [
    {
      id: "picks-by-position",
      label: "Picks by bar position, not height",
      description: "Chooses the first or last bar without comparing how tall the bars are.",
      coachMove: "Ask: which bar has the biggest number? Where a bar sits doesn't matter — only how tall it is."
    },
    {
      id: "confuses-up-with-better",
      label: "Confuses 'up' with 'good'",
      description: "Thinks a rising line is always good, even when a lower number would be better.",
      coachMove: "Ask: what is being measured? Sometimes smaller is better (like finish time), so a line going down is an improvement."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spot the Trick",
      prompt:
        "Imagine a bar chart where one bar looks WAY taller than another — but the numbers on the side start at 8 instead of 0! Why might starting the side numbers high make a small difference look huge?",
      answer:
        "When a chart doesn't start at 0, tiny differences get stretched to look enormous. Always read the numbers on the side before you trust how 'big' a bar looks — your eyes can be fooled!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Your Week in Bars",
      challenge:
        "Pick one thing you can count for 5 days (glasses of water, minutes outside, books read, songs played) and turn it into your own bar or line chart with clearly labeled sides.",
      steps: [
        "Choose something you can count across 5 days or activities.",
        "Draw the bottom line and the side line, and LABEL them — what does each number mean?",
        "Draw a bar or dot for each value, matching its height to the number.",
        "Write one sentence describing the pattern your chart shows."
      ],
      deliverable: "A labeled bar or line chart of your own data with a one-sentence pattern description.",
      choiceBoard: [
        "Draw it by hand on paper with colored bars.",
        "Build it in a drawing app or spreadsheet on a device.",
        "Make a 'living chart' out of stacked LEGO bricks or coins, then snap a photo."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Chart Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.math.w2.d1.arena1",
          type: "numeric",
          stem:
            "A bar chart shows cookies baked each day: Mon 4, Tue 7, Wed 5, Thu 9, Fri 3. How many MORE cookies were baked on the busiest day than the slowest day?",
          answer: 6,
          tolerance: 0,
          unit: "cookies",
          hintLadder: [
            "Find the tallest bar and the shortest bar.",
            "Busiest is Thursday (9), slowest is Friday (3).",
            "9 - 3 = 6 cookies."
          ],
          explanation: "Busiest Thursday = 9, slowest Friday = 3. 9 - 3 = 6 more cookies."
        },
        {
          id: "g5.summer.math.w2.d1.arena2",
          type: "multiple_choice",
          stem:
            "A line chart shows a puppy's weight over 4 weeks: 2 kg, 3 kg, 6 kg, 7 kg. Between which two weeks did the puppy gain the MOST weight?",
          choices: [
            "Week 1 to Week 2",
            "Week 3 to Week 4",
            "Week 2 to Week 3",
            "It gained the same each week"
          ],
          answerIndex: 2,
          explanation:
            "Gain each week: 2→3 is +1, 3→6 is +3, 6→7 is +1. The biggest jump (+3) is from Week 2 to Week 3, the steepest part of the line.",
          hintLadder: [
            "Most weight gained = the steepest part of the line.",
            "Find the difference between each pair of weeks.",
            "+1, then +3, then +1 — the +3 jump is the biggest."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Become the Bar Chart",
      prompt:
        "Stand up and 'become' a bar chart! Crouch low to the floor for a value of 2, reach half-way up for 5, and stretch tall on your tiptoes for 10. Call out a number 1-10 to yourself and freeze at that height — do five rounds.",
      scienceTieIn:
        "Stretching tall and crouching low gets your blood flowing and resets your focus, so the next part lands on a fresh brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Charts can tell the truth or trick you depending on how they are drawn. Where today did you see a number or picture that someone might have made look bigger or smaller than it really is?",
      badge: { id: "g5-summer-chart-detective", name: "Chart Detective", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
