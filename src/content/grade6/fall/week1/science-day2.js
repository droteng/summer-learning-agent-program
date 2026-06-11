// Grade 6 Science — Fall Expedition, Week 1 (Back to Basics), Day 2.
// Topic: observing seasonal change — sets up the Week 2 ecosystems work by
// training careful observation and the idea of evidence.

export const fallG6ScienceW1D2 = {
  id: "g6.fall.sci.w1.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Reading the season — observation and evidence",
  topicTag: "observation",
  estimatedMinutes: 16,
  standardsRefs: ["NGSS.SEP.3", "NGSS.MS-LS1-4"],
  hook: "Leaves turn, days shorten, animals get busy. Today you practice the scientist's first skill: observing carefully and separating what you see from what you guess.",
  miniLesson: [
    "An observation is something you can sense directly: 'the leaves are red.' An inference is a guess that explains it: 'the tree is getting ready for winter.'",
    "Good science separates the two, then looks for evidence to support the inference.",
    "Fall changes are triggered mostly by shorter daylight, not temperature alone — plants sense the longer nights."
  ],
  workedExample: {
    prompt: "You see squirrels burying acorns in October. Write one observation and one inference.",
    steps: [
      "Observation (what you directly see): squirrels are burying acorns.",
      "Inference (your explanation): they are storing food for winter when food is scarce.",
      "Evidence that supports it: squirrels dig the acorns back up in winter and early spring.",
      "Keep the two separate so you can test the inference."
    ],
    answer: "Observation: squirrels bury acorns. Inference: they're storing winter food."
  },
  items: [
    {
      id: "g6.fall.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Which of these is an OBSERVATION, not an inference?",
      choices: [
        "The tree is sad that summer ended.",
        "The maple leaves have turned orange.",
        "The cold made the leaves change.",
        "Winter will be harsh this year."
      ],
      answerIndex: 1,
      explanation: "'Leaves have turned orange' is something you can directly see. The others are guesses or predictions.",
      hintLadder: [
        "An observation is what your senses detect directly.",
        "Which option could you confirm just by looking?",
        "Color you can see; feelings and causes you must infer."
      ]
    },
    {
      id: "g6.fall.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "What mainly triggers leaves to change color in fall?",
      choices: [
        "Shorter daylight (longer nights)",
        "The first snowfall",
        "Animals eating the leaves",
        "Rain washing out the green"
      ],
      answerIndex: 0,
      explanation: "Shorter days signal the tree to stop making chlorophyll, revealing other colors. Temperature affects the shade but daylight is the main trigger.",
      hintLadder: [
        "It's a signal the plant senses before it gets cold.",
        "Think about what changes steadily from summer to fall every year.",
        "Day length shortens predictably — that's the cue."
      ],
      misconceptionsTargeted: ["cold-causes-leaf-color"]
    },
    {
      id: "g6.fall.sci.w1.d2.q3",
      type: "multiple_choice",
      stem: "A classmate says 'The geese are flying south because they hate the cold.' What kind of statement is the 'because' part?",
      choices: ["An observation", "An inference", "A measurement", "A unit"],
      answerIndex: 1,
      explanation: "Seeing geese fly south is the observation; 'because they hate the cold' is an inference — an explanation that should be tested.",
      hintLadder: [
        "What part can you see directly vs. what part is a guess?",
        "The reason WHY is the explaining part.",
        "Explanations you haven't tested yet are inferences."
      ]
    },
    {
      id: "g6.fall.sci.w1.d2.q4",
      type: "numeric",
      stem: "In summer there were about 15 hours of daylight; in late fall about 9. How many fewer hours of daylight is that?",
      answer: 6,
      tolerance: 0,
      unit: "hours",
      hintLadder: [
        "Subtract the fall hours from the summer hours.",
        "15 − 9.",
        "15 − 9 = 6 fewer hours."
      ],
      explanation: "15 − 9 = 6 fewer hours of daylight."
    },
    {
      id: "g6.fall.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Go to a window or step outside. Write ONE observation about fall where you are, and ONE inference you could test about it.",
      rubric: {
        level3: "Gives a clear sense-based observation AND a separate, testable inference that explains it.",
        level2: "Gives an observation and an explanation but blurs the two, or the inference isn't really testable.",
        level1: "Gives only one, or states a feeling/opinion instead of an observation."
      },
      exemplar: "Observation: the oak by my street has dropped about half its leaves. Inference: it drops leaves to save water in the colder months — I could test it by comparing it to a watered tree indoors.",
      hintLadder: [
        "Start with something you can see, hear, or feel right now.",
        "Then add a 'maybe it's because...' explanation.",
        "Could you check your explanation somehow?"
      ]
    }
  ],
  reflectionPrompt: "What's one fall change you notice every year but never stopped to explain? Write the question you'd investigate.",
  misconceptionBank: [
    {
      id: "cold-causes-leaf-color",
      label: "Thinks cold alone causes leaves to change",
      description: "Believes temperature is the only trigger for fall color.",
      coachMove: "Point out leaves start changing before the first frost — daylight length is the steady annual cue the plant senses."
    }
  ]
};
