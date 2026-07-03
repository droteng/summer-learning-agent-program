// Grade 5 Science — Fall Expedition, Week 1 (Back to Basics), Day 2.
// Grade 5 counterpart of g6.fall.sci.w1.d2. Same topic (observing seasonal
// change — observation vs. inference and evidence) pitched down to Grade 5:
// shorter passages, more vocabulary support, smaller numbers.

export const fallG5ScienceW1D2 = {
  id: "g5.fall.sci.w1.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Reading the season — observation and evidence",
  topicTag: "observation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-ESS2-1"],
  hook: "Leaves turn colors, days get shorter, and animals get busy. Today you practice a scientist's first skill: observing carefully and telling what you SEE apart from what you GUESS.",
  miniLesson: [
    "An observation is something you notice with your senses, like 'the leaves are red.' You can see it, hear it, feel it, or smell it.",
    "An inference is a guess that explains what you observed, like 'the tree is getting ready for winter.' Good scientists keep these two separate.",
    "Fall changes happen mostly because the days get shorter, not just because it gets cold. Plants sense the longer nights and start to change."
  ],
  workedExample: {
    prompt: "You see squirrels burying acorns in October. Write one observation and one inference.",
    steps: [
      "Observation (what you directly see): squirrels are burying acorns.",
      "Inference (your explanation): they are storing food for winter when food is harder to find.",
      "Evidence that supports it: squirrels dig the acorns back up later in winter.",
      "Keep the two separate so you can test the inference."
    ],
    answer: "Observation: squirrels bury acorns. Inference: they are storing winter food."
  },
  items: [
    {
      id: "g5.fall.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Which of these is an OBSERVATION, not a guess?",
      choices: [
        "The tree is sad that summer ended.",
        "The maple leaves have turned orange.",
        "The cold made the leaves change.",
        "Winter will be cold this year."
      ],
      answerIndex: 1,
      explanation: "'The leaves have turned orange' is something you can see with your eyes. The others are guesses about feelings, causes, or the future.",
      hintLadder: [
        "An observation is what your senses notice directly.",
        "Which option could you check just by looking?",
        "Color you can see; feelings and causes you have to guess."
      ]
    },
    {
      id: "g5.fall.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "What mainly makes leaves change color in the fall?",
      choices: [
        "Shorter days (longer nights)",
        "The first snowfall",
        "Animals eating the leaves",
        "Rain washing out the green"
      ],
      answerIndex: 0,
      explanation: "Shorter days tell the tree to stop making the green color (chlorophyll), so other colors show. Cold changes the shade, but shorter days are the main signal.",
      hintLadder: [
        "It is a signal the plant senses before it even gets cold.",
        "What changes a little more each day from summer into fall?",
        "The days get shorter — that is the cue the plant notices."
      ],
      misconceptionsTargeted: ["cold-causes-leaf-color"]
    },
    {
      id: "g5.fall.sci.w1.d2.q3",
      type: "multiple_choice",
      stem: "A friend says, 'The geese are flying south because they hate the cold.' What kind of statement is the 'because' part?",
      choices: ["An observation", "An inference (a guess)", "A measurement", "A unit"],
      answerIndex: 1,
      explanation: "Seeing geese fly south is the observation; 'because they hate the cold' is an inference — a guess that explains why.",
      hintLadder: [
        "Which part can you see, and which part is a guess about why?",
        "The reason WHY is the guessing part.",
        "A 'why' you have not tested yet is an inference."
      ]
    },
    {
      id: "g5.fall.sci.w1.d2.q4",
      type: "numeric",
      stem: "In summer there were about 14 hours of daylight; in late fall about 10. How many fewer hours of daylight is that?",
      answer: 4,
      tolerance: 0,
      unit: "hours",
      hintLadder: [
        "Subtract the fall hours from the summer hours.",
        "14 − 10.",
        "14 − 10 = 4 fewer hours."
      ],
      explanation: "14 − 10 = 4 fewer hours of daylight."
    },
    {
      id: "g5.fall.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Look out a window or step outside. Write ONE observation about fall where you are, and ONE inference (a guess you could test) about it.",
      rubric: {
        level3: "Gives a clear sense-based observation AND a separate inference (guess) that explains it.",
        level2: "Gives an observation and a guess but mixes the two together, or the guess is hard to test.",
        level1: "Gives only one, or states a feeling/opinion instead of an observation."
      },
      exemplar: "Observation: the oak tree on my street has dropped about half its leaves. Inference: maybe it drops leaves to save water in the colder months.",
      hintLadder: [
        "Start with something you can see, hear, or feel right now.",
        "Then add a 'maybe it is because...' guess.",
        "Could you check your guess somehow?"
      ]
    }
  ],
  reflectionPrompt: "What is one fall change you notice every year but never stopped to explain? Write the question you would want to investigate.",
  misconceptionBank: [
    {
      id: "cold-causes-leaf-color",
      label: "Thinks cold alone makes leaves change",
      description: "Believes temperature is the only thing that makes fall colors appear.",
      coachMove: "Point out that leaves start changing before the first frost — shorter days are the steady yearly cue the plant senses."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spot the Observation",
      prompt:
        "Two fall statements: (A) 'There are six acorns under the oak tree.' (B) 'The squirrels must love this tree.' Which one is an OBSERVATION you could check just by looking, and which is a guess?",
      answer: "(A) is an observation — you can count the acorns. (B) is an inference (a guess) about why, which you would have to test.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Field Journal",
      challenge:
        "Be a field scientist for 15 minutes. Look out a window or step outside and record what fall really looks like where you are, keeping observations and guesses in separate columns.",
      steps: [
        "Draw two columns: 'I observe' and 'I infer (my guess).'",
        "Write at least three real observations you notice right now.",
        "For two of them, add a guess that explains it.",
        "Star the one guess you would most want to test, and note how you could."
      ],
      deliverable: "A two-column field journal page with 3+ observations and 2 guesses you could test.",
      choiceBoard: [
        "Sketch a labeled drawing of a fall scene with observation notes.",
        "Write the journal as a short nature-detective story.",
        "Make a 3-item observation checklist you could reuse each week."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Observer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "Which statement is an INFERENCE (a guess) rather than an observation?",
          choices: [
            "The pond has a thin layer of ice this morning.",
            "I counted eleven geese flying south.",
            "The birds are leaving because they know a storm is coming.",
            "Three maple leaves fell while I watched."
          ],
          answerIndex: 2,
          explanation: "Saying the birds 'know a storm is coming' explains WHY — that is a guess you have not tested. The others are things you directly notice.",
          hintLadder: [
            "An observation is something your senses notice directly.",
            "Which option explains a cause or reason?",
            "The 'because they know...' statement is the guess."
          ]
        },
        {
          id: "g5.fall.sci.w1.d2.arena2",
          type: "numeric",
          stem: "Daylight gets shorter by about 2 minutes each day in fall. About how many fewer minutes of daylight are there after 1 week (7 days)?",
          answer: 14,
          tolerance: 0,
          unit: "minutes",
          hintLadder: [
            "How many days are in 1 week?",
            "Multiply 2 minutes by the number of days.",
            "2 × 7 = 14 minutes."
          ],
          explanation: "2 minutes/day × 7 days = 14 fewer minutes of daylight."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Fall Scan",
      prompt:
        "Sit still and slowly name one thing you can see, one you can hear, one you can feel, one you can smell, and take one calm breath — like a scientist observing the season around you.",
      scienceTieIn: "Slowing down to notice each sense calms your body and sharpens your attention — the same careful observing that good science depends on.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one fall observation from today and one guess you could test about it. Keep them in separate sentences.",
      badge: { id: "g5-fall-keen-observer", name: "Keen Observer", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
