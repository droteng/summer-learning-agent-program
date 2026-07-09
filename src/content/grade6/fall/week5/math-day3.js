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
  estimatedMinutes: 60, // full Daily Hour
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
        "Too many labels",
        "A y-axis that doesn't start at zero",
        "Bars that are too thin"
      ],
      answerIndex: 2,
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
        "A sample of only 10 is too small to represent all kids",
        "10 is plenty of people",
        "The snack is healthy",
        "Percentages are always wrong"
      ],
      answerIndex: 0,
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
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Sneaky Pumpkin Graph",
      prompt:
        "A poster brags 'PUMPKIN SALES EXPLODED!' The bars look like this year's sales TOWER over last year's. But last year sold 480 pumpkins and this year sold 500. What trick is the poster probably using to make 20 extra pumpkins look like a mountain?",
      answer: "The y-axis almost certainly doesn't start at zero — it probably starts near 470, so a tiny 20-pumpkin gap looks enormous. Start the axis at 0 and the bars look nearly the same.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest vs. Sneaky Harvest Graph",
      challenge:
        "Use this real data: a fall food drive collected 60 cans in Week 1 and 75 cans in Week 2. Draw the SAME data twice — once honestly (y-axis starting at 0) and once 'sneakily' (y-axis starting at 55) — then explain which one a fair persuader should use.",
      steps: [
        "Plot both weeks (60 and 75) on a graph whose y-axis starts at 0 — the honest version.",
        "Plot the same two numbers on a graph whose y-axis starts at 55 — the exaggerated version.",
        "Write one sentence on how different the two graphs feel.",
        "Decide which version is fair to show, and say why."
      ],
      deliverable: "Two graphs of the same can-drive data (honest and exaggerated) plus a sentence choosing the fair one.",
      choiceBoard: [
        "Hand-draw both graphs on grid paper.",
        "Make a 'spot the trick' poster circling the truncated axis.",
        "Write a short caption a newspaper could print honestly under the real graph."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w5.d3.arena1",
          type: "numeric",
          stem: "At a fall harvest stand, 240 pumpkins were sold and 60 of them were small pumpkins. What PERCENT of the pumpkins sold were small?",
          answer: 25,
          tolerance: 0,
          unit: "%",
          hintLadder: [
            "Percent = part ÷ whole × 100.",
            "60 ÷ 240 = 0.25.",
            "0.25 × 100 = 25%."
          ],
          explanation: "60 ÷ 240 = 0.25 = 25%."
        },
        {
          id: "g6.fall.math.w5.d3.arena2",
          type: "short_answer",
          stem: "An ad says: 'Our cider is the favorite — 8 out of 8 people we asked loved it!' Explain TWO reasons this statistic is misleading.",
          rubric: {
            level3: "Identifies the tiny sample size (only 8 people) AND a second flaw (e.g., 8/8 likely cherry-picked / not random / can't represent everyone), clearly explained.",
            level2: "Identifies one clear flaw with sound reasoning.",
            level1: "Vague, or doesn't explain why it misleads."
          },
          exemplar: "First, only 8 people were asked — far too few to speak for everyone. Second, a perfect 8 out of 8 suggests they may have only asked friends or people who already like cider, so the sample isn't fair or random.",
          hintLadder: [
            "How many people were actually asked?",
            "Is 8 enough to represent all cider drinkers?",
            "Why might 8 out of 8 be cherry-picked rather than random?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Bar-Graph Body",
      prompt:
        "Make your body into bar graphs: crouch low for a 'small bar,' stretch up tall for a 'big bar.' Call out 'honest!' for a slow controlled rise and 'sneaky!' for an exaggerated jump. Do 6 bars, alternating.",
      scienceTieIn: "Switching between crouching and stretching gets your blood flowing and resets your focus, just like standing up to stretch during a long graphing task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Next time you see a flashy statistic in a fall ad or a poster, what's the first question you'll ask to check if it's honest?",
      badge: { id: "fall-data-detective", name: "Data Detective", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
