// Grade 5 Summer Science — Week 1 (Explorer Mode), Day 2.
// Grade-5 counterpart of g6.sci.w1.d2 (testable questions and fair tests),
// pitched down: shorter passages, concrete examples, simpler numbers.

export const summerG5ScienceW1D2 = {
  id: "g5.summer.sci.w1.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Testable questions and fair tests",
  topicTag: "experimental-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-4", "NGSS.5-ETS1-3"],
  hook: "Scientists ask questions they can actually test. Today you turn a curious idea into a fair experiment.",
  keyTerms: [
    { term: "Variable", definition: "The one thing you change in an experiment." },
    { term: "Fair test", definition: "A test where you change only one thing and keep everything else the same." },
    { term: "Result", definition: "What you measure or count to see what happened." }
  ],
  miniLesson: [
    "A testable question is one you can answer by trying it out, not just by giving an opinion.",
    "A fair test changes only ONE thing at a time. That one thing is called the variable.",
    "You measure a result. A good result is something you can count, time, or measure with a ruler."
  ],
  workedExample: {
    prompt: "Question: Does more sunlight help a plant grow taller? Make a fair test in a few sentences.",
    steps: [
      "Change one thing: how much sunlight each plant gets (sunny window vs. dark closet).",
      "Keep the same: same kind of plant, same soil, same amount of water, same pot.",
      "Measure the result: how tall each plant is in centimeters after 2 weeks.",
      "After 2 weeks, compare the heights. If the sunny plant is taller, sunlight helped."
    ],
    answer: "Change one thing (sunlight), keep the rest the same, measure height after 2 weeks."
  },
  items: [
    {
      id: "g5.summer.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Which question can you test with an experiment?",
      choices: [
        "Are dogs better than cats?",
        "Do plants grow taller with more water?",
        "Is summer the best season?",
        "Why is the sky pretty?"
      ],
      answerIndex: 1,
      explanation: "Do plants grow taller with more water? can be answered by trying it and measuring. The others are opinions.",
      hintLadder: [
        "Which question could you answer by measuring something?",
        "Skip the ones with better or best -- those are opinions.",
        "It is the one about plants and water."
      ],
      misconceptionsTargeted: ["opinion-as-question"]
    },
    {
      id: "g5.summer.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "You want to test whether ice melts faster on metal or on wood. Which choice would make the test UNfair?",
      choices: [
        "Use ice cubes that are the same size.",
        "Put one cube on metal and one on wood.",
        "Keep the room the same temperature for both cubes.",
        "Use a big cube on metal and a tiny cube on wood."
      ],
      answerIndex: 3,
      explanation: "If the cubes are different sizes, the size -- not the surface -- could be why one melts faster. A fair test changes only one thing.",
      hintLadder: [
        "What makes a test fair?",
        "Find the choice that changes more than one thing.",
        "Different cube sizes would make the test unfair."
      ],
      misconceptionsTargeted: ["changes-multiple-variables"]
    },
    {
      id: "g5.summer.sci.w1.d2.q3",
      type: "numeric",
      stem: "A plant grows 2 cm each week. It starts at 3 cm tall. How tall is it after 4 weeks?",
      answer: 11,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "How many cm does it grow each week?",
        "Multiply the weekly growth by 4, then add the starting height.",
        "2 x 4 = 8, plus 3 starting cm = 11 cm."
      ],
      explanation: "Growth: 2 x 4 = 8 cm. Starting height: 3 cm. Total: 11 cm."
    },
    {
      id: "g5.summer.sci.w1.d2.q4",
      type: "multiple_choice",
      stem: "Three tries of a paper airplane went 4 m, 5 m, and 6 m. What is the average distance?",
      choices: ["5 m", "4 m", "6 m", "15 m"],
      answerIndex: 0,
      explanation: "Add the distances and divide by how many tries: (4 + 5 + 6) divided by 3 = 15 divided by 3 = 5 m.",
      hintLadder: [
        "Add up the three distances first.",
        "Now divide by how many tries there were.",
        "15 divided by 3 = 5 m."
      ]
    },
    {
      id: "g5.summer.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Make a fair test for: Does quiet music help you focus on math? Name the one thing you change and one result you measure.",
      rubric: {
        level3: "Names music vs. no music as the one change, names a result you can measure (problems solved, time), and names one thing to keep the same.",
        level2: "Names the change and a result but forgets what to keep the same.",
        level1: "Vague answer or just repeats the question."
      },
      exemplar: "Change: music vs. no music. Keep the same: same person, same math problems, same room. Measure: how many problems I get right in 5 minutes.",
      hintLadder: [
        "What one thing will you change?",
        "What result will show if music helped?",
        "Name one thing you keep the same."
      ]
    }
  ],
  stretch: {
    stem: "Your plant leaves are turning yellow. Make a fair test to find out if the cause is too much water or too little sunlight.",
    answer: "Try one plant with lots of sun and normal water, and one plant in the shade with normal water. Keep everything else the same. Whichever change makes the leaves yellow tells you the cause.",
    explanation: "Change only one thing at a time so you can tell which thing matters."
  },
  reflectionPrompt: "Today you made a fair test. What is a question about the world you would want to test this summer?",
  misconceptionBank: [
    {
      id: "opinion-as-question",
      label: "Treats opinions as testable",
      description: "Picks questions like is summer the best season as testable, when they really depend on what a person likes.",
      coachMove: "Ask: could two people both be right with different answers? If yes, it is an opinion."
    },
    {
      id: "changes-multiple-variables",
      label: "Changes more than one thing",
      description: "Lets two or more things be different, so you cannot tell which one caused the result.",
      coachMove: "Ask: if the result changes, which exact thing caused it? If you cannot say, the test was not fair."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Question Can You Test?",
      prompt:
        "Which question could you actually TEST? (A) Is summer the best season? or (B) Do plants grow taller in sun or shade? Pick one and say why.",
      answer: "(B) is testable -- you can put plants in sun and shade and measure them. (A) is an opinion, so there is no fair way to test it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Fair Test",
      challenge:
        "Pick a question you are curious about (Does quiet music help you focus? Does a cold room make ice last longer?). Design a fair test: name the ONE thing you change, what you keep the same, and what you measure.",
      steps: [
        "Write your testable question.",
        "Name the one thing you will change.",
        "List 2 things you will keep the same.",
        "Say exactly what you will measure."
      ],
      deliverable: "A fair-test plan: question, the one change, things you keep the same, and what you measure.",
      choiceBoard: [
        "Write your experiment plan.",
        "Draw a labeled before-and-after picture of your test.",
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
          id: "g5.summer.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "To test if a plant food helps tomatoes grow, which choice makes the test FAIR?",
          choices: [
            "Give one plant more water AND plant food.",
            "Use two different kinds of plants.",
            "Keep everything the same except the plant food.",
            "Put one plant in sun and one in shade."
          ],
          answerIndex: 2,
          explanation: "Only the plant food should be different, so any change is because of the plant food.",
          hintLadder: [
            "A fair test changes only ONE thing.",
            "Everything else must match.",
            "Change only the plant food."
          ]
        },
        {
          id: "g5.summer.sci.w1.d2.arena2",
          type: "short_answer",
          stem: "A student tests: Does a paper airplane fly farther with bigger wings? Name ONE thing they must keep the same for it to be fair.",
          rubric: {
            level3: "Names a real thing to keep the same (same paper, same throw, same height, same room).",
            level2: "Names something to keep the same but it is vague.",
            level1: "Names the thing being changed, or nothing that fits."
          },
          exemplar: "They must throw each plane the same way from the same height, or the throw -- not the wings -- could cause the difference.",
          hintLadder: [
            "Besides wing size, what else could change how far it flies?",
            "Think about the throw, the height, and the paper.",
            "Pick one to keep the same."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Stretch & Sip",
      prompt:
        "Stand up, reach for the sky for 10 seconds, touch your toes for 10 seconds, then drink some water. Your brain works better when you move and drink water!",
      scienceTieIn: "Water helps your blood carry oxygen to your brain -- you will explore how your body systems team up later in the program.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is a question about the world you would love to test? Write it, and one way you could measure the answer.",
      badge: { id: "g5-summer-fair-test-scientist", name: "Fair-Test Scientist", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
