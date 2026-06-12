// Grade 6 Math — Fall Expedition, Week 5 (Persuasive Voices), Day 3.
// Topic: persuading with data honestly — and spotting misleading graphs.

export const fallG6MathW5D3 = {
  id: "g6.fall.math.w5.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Math",
  topic: "Persuading with data — and spotting tricks",
  topicTag: "data-statistics",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.6.SP.B.5", "CCSS.6.SP.A.3"],
  hook: "Numbers can make an argument powerful — or sneaky. Today you use data to persuade honestly, and learn to catch graphs that lie.",
  miniLesson: [
    "Data strengthens an argument when it's accurate, relevant, and clearly labeled.",
    "Misleading graphs trick the eye: a y-axis that doesn't start at zero can make tiny differences look huge.",
    "An honest persuader shows the full picture; a dishonest one hides the scale or cherry-picks numbers."
  ],
  workedExample: {
    prompt: "A graph's bars look like Team A scored TWICE Team B, but A scored 52 and B scored 50. What's the trick?",
    steps: [
      "Read the actual numbers: 52 vs 50 — almost equal.",
      "Look at the y-axis: it probably starts at 49, not 0.",
      "Starting high exaggerates the tiny 2-point gap.",
      "The fix: start the axis at 0 to show the true, small difference."
    ],
    answer: "The y-axis doesn't start at zero, exaggerating a 2-point difference."
  },
  items: [
    {
      id: "g6.fall.math.w5.d3.q1",
      type: "multiple_choice",
      stem: "A bar graph makes a small difference look gigantic. What's the most common trick?",
      choices: [
        "Using colors",
        "A y-axis that doesn't start at zero",
        "Too many labels",
        "Bars that are too thin"
      ],
      answerIndex: 1,
      explanation: "Starting the axis above zero stretches small differences to look dramatic.",
      hintLadder: [
        "It's about the scale, not the colors.",
        "Where does the vertical axis begin?",
        "Not starting at zero is the classic trick."
      ]
    },
    {
      id: "g6.fall.math.w5.d3.q2",
      type: "numeric",
      stem: "A club says '100% increase in members!' They went from 8 members to how many, if it doubled?",
      answer: 16,
      tolerance: 0,
      unit: "members",
      hintLadder: [
        "A 100% increase means it doubled.",
        "Double 8.",
        "8 × 2 = 16."
      ],
      explanation: "A 100% increase doubles the value: 8 → 16."
    },
    {
      id: "g6.fall.math.w5.d3.q3",
      type: "multiple_choice",
      stem: "'9 out of 10 kids prefer our snack!' — but they only asked 10 kids total. Why might this be misleading?",
      choices: [
        "10 is plenty of people",
        "A sample of only 10 is too small to represent all kids",
        "The snack is healthy",
        "Percentages are always wrong"
      ],
      answerIndex: 1,
      explanation: "A tiny sample can't fairly stand in for everyone — the result might not hold for a bigger group.",
      hintLadder: [
        "How many kids did they actually ask?",
        "Is 10 enough to speak for thousands?",
        "Small samples mislead."
      ],
      misconceptionsTargeted: ["small-sample-trust"]
    },
    {
      id: "g6.fall.math.w5.d3.q4",
      type: "numeric",
      stem: "Honest data: a survey of 200 students found 150 want a longer lunch. What PERCENT is that?",
      answer: 75,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent = part ÷ whole × 100.",
        "150 ÷ 200 = 0.75.",
        "0.75 × 100 = 75%."
      ],
      explanation: "150 ÷ 200 = 0.75 = 75%."
    },
    {
      id: "g6.fall.math.w5.d3.q5",
      type: "short_answer",
      stem: "You want to use data to argue for more library hours. Describe ONE honest way to present your numbers and ONE trick you'd avoid.",
      rubric: {
        level3: "Names an honest practice (full scale, real sample, clear labels) AND a specific trick to avoid (truncated axis, tiny sample, cherry-picking).",
        level2: "Names one of the two clearly.",
        level1: "Vague or doesn't address honest vs. misleading."
      },
      exemplar: "Honest: show a bar graph with the y-axis starting at zero and label how many students I surveyed. Avoid: cutting the axis to make the 'need' look bigger than it is.",
      hintLadder: [
        "What makes a graph honest? (zero axis, labels, real sample)",
        "What trick exaggerates? (truncated axis, tiny sample)",
        "Give one of each."
      ]
    }
  ],
  reflectionPrompt: "Next time you see a flashy statistic in an ad, what's the first question you'll ask about it?",
  misconceptionBank: [
    {
      id: "small-sample-trust",
      label: "Trusts results from a tiny sample",
      description: "Believes '9 out of 10' is convincing even when only 10 people were asked.",
      coachMove: "Ask 'out of how many, and who?' A bigger, fairer sample makes a percentage trustworthy."
    }
  ]
};
