// Grade 6 Science — Week 1 (Explorer Mode), Day 2.
// Topic: testable questions and fair tests.

export const grade6ScienceWeek1Day2 = {
  id: "g6.sci.w1.d2",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Testable questions and fair tests",
  topicTag: "experimental-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-1", "NGSS.SEP.3"],
  hook: "Scientists ask questions they can actually test. Today you turn a curious thought into a fair experiment.",
  keyTerms: [
    { term: "Variable", definition: "Something in an experiment that can change or be measured." },
    { term: "Fair test", definition: "An experiment where only one variable changes and everything else stays the same." },
    { term: "Result", definition: "The measurable outcome you observe and compare across trials." }
  ],
  miniLesson: [
    "A testable question can be answered by an experiment or observation, not by an opinion.",
    "A fair test changes only one thing at a time — that one thing is called the variable.",
    "You measure a result. The result has to be something you can count, time, weigh, or rank."
  ],
  workedExample: {
    prompt:
      "Question: \"Does sunlight help plants grow taller?\" Design a fair test in three sentences.",
    steps: [
      "Variable to change: how much sunlight each plant gets (full sun vs. shade).",
      "Things to keep the same: same plant species, same soil, same water amount, same pot size.",
      "Result to measure: height of each plant in centimeters after 2 weeks.",
      "After 2 weeks, compare the heights. The plant with more sunlight should be taller if the question's idea is right."
    ],
    answer: "Change one thing (sunlight), keep everything else the same, measure height after 2 weeks."
  },
  items: [
    {
      id: "g6.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Which question is testable?",
      choices: [
        "Are dogs better than cats?",
        "Do plants grow taller with more water?",
        "Is summer the best season?",
        "Why is the sky pretty?"
      ],
      answerIndex: 1,
      explanation: "\"Do plants grow taller with more water?\" can be answered with an experiment. The others are opinions.",
      hintLadder: [
        "Which question could you answer with measurements?",
        "Skip the ones that ask about \"better\" or \"best\" — those are opinions.",
        "It's the option about plants and water."
      ],
      misconceptionsTargeted: ["opinion-as-question"]
    },
    {
      id: "g6.sci.w1.d2.q2",
      type: "multiple_choice",
      stem:
        "You want to test whether ice melts faster on metal or wood. Which item would break the fair test?",
      choices: [
        "Use ice cubes the same size.",
        "Put one cube on metal and one on wood.",
        "Make sure the room is the same temperature for both cubes.",
        "Use a big cube on metal and a tiny cube on wood."
      ],
      answerIndex: 3,
      explanation:
        "If the cubes are different sizes, the size — not the surface — could be why one melts faster. A fair test changes only one thing at a time.",
      hintLadder: [
        "What makes a test fair?",
        "Look for the option that changes more than one thing.",
        "Different cube sizes would make the test unfair."
      ],
      misconceptionsTargeted: ["changes-multiple-variables"]
    },
    {
      id: "g6.sci.w1.d2.q3",
      type: "numeric",
      stem:
        "A plant grows 2 cm per week. Starting at 4 cm, how tall will it be after 6 weeks?",
      answer: 16,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "How many cm does it grow each week?",
        "Multiply the weekly growth by 6, then add the starting height.",
        "2 × 6 = 12, plus 4 starting cm = 16 cm."
      ],
      explanation: "Growth: 2 × 6 = 12 cm. Starting height: 4 cm. Total: 16 cm."
    },
    {
      id: "g6.sci.w1.d2.q4",
      type: "multiple_choice",
      stem:
        "Three trials of a paper airplane flight measured 4.5 m, 5.0 m, and 5.5 m. What's the average distance?",
      choices: ["4.5 m", "5.0 m", "5.5 m", "15.0 m"],
      answerIndex: 1,
      explanation: "Add the distances and divide by the number of trials: (4.5 + 5.0 + 5.5) ÷ 3 = 15 ÷ 3 = 5.0 m.",
      hintLadder: [
        "Add up the three distances first.",
        "Now divide by how many trials there were.",
        "15 ÷ 3 = 5.0 m."
      ]
    },
    {
      id: "g6.sci.w1.d2.q5",
      type: "short_answer",
      stem:
        "Write a fair test for: \"Does music help students focus on math?\" Name one variable to change and one result to measure.",
      rubric: {
        level3:
          "Names music vs no music as the variable, names a measurable result (problems solved, score, time), and at least one thing to keep the same.",
        level2: "Names a variable and a measurable result but is missing the controls.",
        level1: "Vague answer or restates the question without designing a test."
      },
      exemplar:
        "Variable: music vs no music. Keep the same: same student, same problems, same room. Measure: how many problems are solved correctly in 5 minutes.",
      hintLadder: [
        "What one thing will you change between the two groups?",
        "What measurable result will tell you whether music helped?",
        "Don't forget to list at least one thing you keep the same."
      ]
    }
  ],
  stretch: {
    stem:
      "Plants in your garden are turning yellow. Design a fair test to find out whether the cause is too much water or too little sunlight.",
    answer: "Set up four pots: full water + full sun, full water + shade, low water + full sun, low water + shade. Keep all other variables the same. The pot that yellows tells you the cause.",
    explanation:
      "When you have two possible variables, change them in pairs (a 2-by-2 setup) so you can isolate which one matters."
  },
  reflectionPrompt: "Today you designed a fair test. What's a question about the world you'd actually want to test this summer?",
  misconceptionBank: [
    {
      id: "opinion-as-question",
      label: "Treats opinions as testable",
      description: "Picks questions like \"is summer the best season\" as testable when they really depend on personal preference.",
      coachMove: "Ask: could two people honestly answer this differently and both be right? If yes, it's an opinion."
    },
    {
      id: "changes-multiple-variables",
      label: "Changes more than one variable",
      description: "Lets multiple things differ between groups, so it's impossible to tell which caused the result.",
      coachMove: "Ask: if the result is different, which exact thing caused it? If you can't say, the test wasn't fair."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Question Can You Test?",
      prompt:
        "Which question could you actually TEST with an experiment? (A) 'Is summer the best season?' or (B) 'Do plants grow taller in sunlight or shade?' Pick one and say why.",
      answer: "(B) is testable — you can set up plants in sun vs. shade and measure. (A) is an opinion, so there's no fair way to test it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Fair Test",
      challenge:
        "Pick a question you're curious about (Does music help you focus? Does cold water freeze faster than hot?). Design a fair test: name the ONE thing you change, what you keep the same, and what you measure.",
      steps: [
        "Write your testable question.",
        "Name the one variable you'll change.",
        "List 2–3 things you'll keep the same.",
        "Say exactly what you'll measure and how."
      ],
      deliverable: "A fair-test plan: question, variable changed, things kept the same, and what you measure.",
      choiceBoard: [
        "Write an experiment plan.",
        "Draw a labeled before/after diagram of your test.",
        "Make a comic of a scientist running your fair test."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Fair-Test Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "To test if a fertilizer helps tomatoes grow, which makes the test FAIR?",
          choices: [
            "Give one plant more water AND fertilizer",
            "Keep everything the same except the fertilizer",
            "Use two different plant types",
            "Put one plant in sun and one in shade"
          ],
          answerIndex: 1,
          explanation: "Only the fertilizer should differ, so any change is caused by the fertilizer alone.",
          hintLadder: [
            "A fair test changes only ONE thing.",
            "Everything else must match.",
            "Change only the fertilizer."
          ]
        },
        {
          id: "g6.sci.w1.d2.arena2",
          type: "short_answer",
          stem: "A student tests 'Does a paper airplane fly farther with bigger wings?' Name ONE thing they must keep the same for it to be fair.",
          rubric: {
            level3: "Names a relevant controlled variable (same paper, same throw force, same height/angle, same room).",
            level2: "Names something to keep the same but it's vague.",
            level1: "Names the variable being changed, or nothing relevant."
          },
          exemplar: "They must throw each plane with the same force from the same height — otherwise the throw, not the wings, could cause the difference.",
          hintLadder: [
            "What besides wing size could change how far it flies?",
            "Think throw force, height, paper, room.",
            "Pick one to hold constant."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Stretch & Sip",
      prompt:
        "Stand up, reach for the sky for 10 seconds, touch your toes for 10, then drink some water. Your brain works better hydrated and oxygenated!",
      scienceTieIn: "Water helps your blood carry oxygen and nutrients to your brain — you'll explore how your body's systems team up later in the program.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's a question about the world you'd love to test? Write it, and one way you could measure the answer.",
      badge: { id: "fair-test-scientist", name: "Fair-Test Scientist", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
