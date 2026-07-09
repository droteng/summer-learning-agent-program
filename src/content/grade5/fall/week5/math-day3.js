// Grade 5 Math — Fall Expedition, Week 5 (Persuasive Voices), Day 3.
// Grade 5 counterpart of g6.fall.math.w5.d3. Same topic (persuading with data
// honestly and spotting misleading graphs) pitched down to Grade 5: whole
// numbers, friendly percents (halves, quarters, tenths), step-by-step support.

export const fallG5MathW5D3 = {
  id: "g5.fall.math.w5.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Math",
  topic: "Persuading with data — and spotting tricks",
  topicTag: "data-statistics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.B.2", "CCSS.5.NBT.B.6"],
  hook: "Numbers can make an argument strong — or sneaky. Today you use data to persuade honestly, and learn to catch graphs that trick your eyes.",
  miniLesson: [
    "Data makes an argument stronger when it is correct, fits the point, and is clearly labeled.",
    "A tricky graph fools the eye: if the bottom of the graph does not start at zero, a tiny difference can look huge.",
    "An honest persuader shows the whole picture; a sneaky one hides the scale or only shows the numbers that help them."
  ],
  workedExample: {
    prompt: "A graph makes it look like Team A scored TWICE as much as Team B, but A scored 52 and B scored 50. What is the trick?",
    steps: [
      "Read the real numbers: 52 and 50 — almost the same.",
      "Look at the bottom of the graph: it probably starts at 49, not 0.",
      "Starting high makes the tiny 2-point gap look giant.",
      "The fix: start the graph at 0 to show the true, small difference."
    ],
    answer: "The bottom of the graph does not start at zero, so a 2-point difference looks huge."
  },
  items: [
    {
      id: "g5.fall.math.w5.d3.q1",
      type: "multiple_choice",
      stem: "A bar graph makes a small difference look gigantic. What is the most common trick?",
      choices: [
        "Using bright colors",
        "Too many labels",
        "The bottom of the graph does not start at zero",
        "Bars that are too thin"
      ],
      answerIndex: 2,
      explanation: "Starting the bottom above zero stretches small differences so they look dramatic.",
      hintLadder: [
        "It is about the scale, not the colors.",
        "Where does the bottom of the graph begin?",
        "Not starting at zero is the classic trick."
      ]
    },
    {
      id: "g5.fall.math.w5.d3.q2",
      type: "numeric",
      stem: "A club brags that its members doubled! It started with 8 members. How many does it have now if it doubled?",
      answer: 16,
      tolerance: 0,
      unit: "members",
      hintLadder: [
        "Doubling means twice as many.",
        "Double 8.",
        "8 × 2 = 16."
      ],
      explanation: "Doubling means twice as many: 8 × 2 = 16."
    },
    {
      id: "g5.fall.math.w5.d3.q3",
      type: "multiple_choice",
      stem: "'9 out of 10 kids like our snack!' — but they only asked 10 kids total. Why might this be misleading?",
      choices: [
        "Asking only 10 kids is too few to speak for all kids",
        "10 is plenty of people",
        "The snack is healthy",
        "Percents are always wrong"
      ],
      answerIndex: 0,
      explanation: "A tiny group cannot fairly stand in for everyone — the result might not be true for a bigger group.",
      hintLadder: [
        "How many kids did they actually ask?",
        "Is 10 enough to speak for thousands?",
        "Asking too few people can mislead."
      ],
      misconceptionsTargeted: ["small-sample-trust"]
    },
    {
      id: "g5.fall.math.w5.d3.q4",
      type: "numeric",
      stem: "Honest data: a survey of 100 students found 75 want a longer lunch. What PERCENT is that?",
      answer: 75,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Out of 100, the number itself is the percent.",
        "75 out of 100 means 75 per hundred.",
        "So it is 75%."
      ],
      explanation: "75 out of 100 = 75%."
    },
    {
      id: "g5.fall.math.w5.d3.q5",
      type: "short_answer",
      stem: "You want to use data to argue for more library hours. Describe ONE honest way to show your numbers and ONE trick you would avoid.",
      rubric: {
        level3: "Names an honest habit (start at zero, ask enough people, clear labels) AND a trick to avoid (bottom not at zero, tiny group, only showing helpful numbers).",
        level2: "Names one of the two clearly.",
        level1: "Vague or does not talk about honest vs. sneaky."
      },
      exemplar: "Honest: show a bar graph that starts at zero and label how many students I asked. Avoid: cutting the bottom off the graph to make the need look bigger than it is.",
      hintLadder: [
        "What makes a graph honest? (start at zero, labels, enough people)",
        "What trick makes it look bigger? (bottom not at zero, tiny group)",
        "Give one of each."
      ]
    }
  ],
  reflectionPrompt: "Next time you see a flashy number in an ad, what is the first question you will ask about it?",
  misconceptionBank: [
    {
      id: "small-sample-trust",
      label: "Trusts results from a tiny group",
      description: "Believes '9 out of 10' is convincing even when only 10 people were asked.",
      coachMove: "Ask 'out of how many, and who?' A bigger, fairer group makes a percent easier to trust."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Sneaky Pumpkin Graph",
      prompt:
        "A poster brags 'PUMPKIN SALES EXPLODED!' The bars make this year TOWER over last year. But last year sold 480 pumpkins and this year sold 500. What trick is the poster probably using to make 20 extra pumpkins look like a mountain?",
      answer: "The bottom of the graph probably does not start at zero — it likely starts near 470, so a tiny 20-pumpkin gap looks enormous. Start at 0 and the bars look almost the same.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest vs. Sneaky Harvest Graph",
      challenge:
        "Use this real data: a fall food drive collected 60 cans in Week 1 and 75 cans in Week 2. Draw the SAME data twice — once honestly (bottom starts at 0) and once sneakily (bottom starts at 55) — then explain which one a fair persuader should use.",
      steps: [
        "Plot both weeks (60 and 75) on a graph whose bottom starts at 0 — the honest version.",
        "Plot the same two numbers on a graph whose bottom starts at 55 — the sneaky version.",
        "Write one sentence about how different the two graphs feel.",
        "Decide which version is fair to show, and say why."
      ],
      deliverable: "Two graphs of the same can-drive data (honest and sneaky) plus a sentence choosing the fair one.",
      choiceBoard: [
        "Hand-draw both graphs on grid paper.",
        "Make a 'spot the trick' poster circling the sneaky bottom.",
        "Write a short honest caption a newspaper could print under the real graph."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w5.d3.arena1",
          type: "numeric",
          stem: "At a fall harvest stand, 200 pumpkins were sold and 50 of them were small pumpkins. What PERCENT of the pumpkins sold were small?",
          answer: 25,
          tolerance: 0,
          unit: "%",
          hintLadder: [
            "Percent means 'out of 100.' First find what part of 200 the small ones are.",
            "50 out of 200 is the same as 1 out of 4.",
            "1 out of 4 is 25%."
          ],
          explanation: "50 out of 200 is one quarter, which is 25%."
        },
        {
          id: "g5.fall.math.w5.d3.arena2",
          type: "short_answer",
          stem: "An ad says: 'Our cider is the favorite — 8 out of 8 people we asked loved it!' Explain TWO reasons this number is misleading.",
          rubric: {
            level3: "Names the tiny group (only 8 people) AND a second problem (e.g., 8 out of 8 might be only friends / not a fair mix / cannot speak for everyone), each explained.",
            level2: "Names one clear problem with good reasoning.",
            level1: "Vague, or does not explain why it misleads."
          },
          exemplar: "First, only 8 people were asked — way too few to speak for everyone. Second, all 8 saying yes makes me think they only asked friends, so the group was not fair.",
          hintLadder: [
            "How many people were actually asked?",
            "Is 8 enough to speak for all cider drinkers?",
            "Why might 8 out of 8 mean they only asked friends?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Bar-Graph Body",
      prompt:
        "Make your body into bar graphs: crouch low for a 'small bar,' stretch up tall for a 'big bar.' Call out 'honest!' for a slow steady rise and 'sneaky!' for a giant jump. Do 6 bars, taking turns.",
      scienceTieIn: "Switching between crouching and stretching gets your blood moving and resets your focus, just like standing up to stretch during a long graphing task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Next time you see a flashy number in a fall ad or on a poster, what is the first question you will ask to check if it is honest?",
      badge: { id: "g5-fall-data-detective", name: "Data Detective", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
