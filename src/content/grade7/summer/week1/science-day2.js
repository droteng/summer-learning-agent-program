// Grade 7 Science — Summer Voyage, Week 1 (Explorer Mode), Day 2.
// Topic: designing a controlled experiment — independent, dependent, and
// controlled variables, and drawing inferences from results.

export const summerG7ScienceW1D2 = {
  id: "g7.summer.sci.w1.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Designing a controlled experiment (variables & inferences)",
  topicTag: "controlled-experiment",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ETS1-3", "NGSS.MS-LS1-5"],
  hook: "Real explorers don't just guess — they test. Today you learn the secret of a fair test: change ONE thing, measure ONE thing, and keep everything else the same. That's how you know what your results actually mean.",
  miniLesson: [
    "The independent variable is the ONE thing you deliberately change (e.g., amount of sunlight a plant gets).",
    "The dependent variable is what you measure to see the effect (e.g., how tall the plant grows). It 'depends' on the independent variable.",
    "Controlled variables (constants) are everything you keep the SAME — water, soil, pot size — so you can be sure the independent variable caused the change. Then you draw an inference: a conclusion supported by the data, not just a guess."
  ],
  workedExample: {
    prompt: "An explorer wants to test whether warmer water makes sugar dissolve faster. Identify the independent, dependent, and one controlled variable.",
    steps: [
      "What is deliberately changed? The water temperature — that's the independent variable.",
      "What is measured to see the effect? The time it takes sugar to dissolve — that's the dependent variable.",
      "What must stay the same for a fair test? The amount of sugar and amount of water — controlled variables.",
      "If warm water dissolves sugar faster AND everything else was equal, you can infer temperature caused the difference."
    ],
    answer: "Independent = water temperature; Dependent = dissolving time; Controlled = amount of sugar and water (kept equal)."
  },
  items: [
    {
      id: "g7.summer.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "In an experiment testing whether more fertilizer grows taller tomato plants, what is the INDEPENDENT variable?",
      choices: [
        "The amount of fertilizer given",
        "The height of the plants",
        "The type of soil (kept the same)",
        "The number of leaves"
      ],
      answerIndex: 0,
      explanation: "The independent variable is the one thing deliberately changed — here, the amount of fertilizer.",
      hintLadder: [
        "Which variable does the scientist deliberately CHANGE?",
        "It is not what you measure and not what stays the same.",
        "The scientist chooses how much fertilizer to give."
      ]
    },
    {
      id: "g7.summer.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "Why must an experiment keep controlled variables the SAME across every trial?",
      choices: [
        "To make the experiment take longer",
        "To use up fewer materials",
        "Because scientists must always use the same equipment",
        "So you can be sure the independent variable caused the change, not something else"
      ],
      answerIndex: 3,
      explanation: "If other factors changed too, you couldn't tell which one caused the result. Holding them constant isolates the independent variable's effect.",
      hintLadder: [
        "What goes wrong if two things change at once?",
        "You could not tell WHICH change caused the result.",
        "Controlling other factors isolates the one you're testing."
      ],
      misconceptionsTargeted: ["change-many-at-once"]
    },
    {
      id: "g7.summer.sci.w1.d2.q3",
      type: "numeric",
      stem: "In a fair test, cups of water were left in the sun and measured every trial. Their final temperatures were 30°C, 34°C, and 32°C. What is the AVERAGE (mean) final temperature the explorer should report, in °C?",
      answer: 32,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "To find the mean, add all the trial values, then divide by how many trials there were.",
        "Add: 30 + 34 + 32 = 96.",
        "Divide by 3 trials: 96 ÷ 3 = 32."
      ],
      explanation: "Mean = (30 + 34 + 32) ÷ 3 = 96 ÷ 3 = 32°C. Averaging repeated trials makes an inference more reliable."
    },
    {
      id: "g7.summer.sci.w1.d2.q4",
      type: "short_answer",
      stem: "Design a fair test for the question: 'Does the color of a container affect how fast water inside it warms in the sun?' Name the independent variable, the dependent variable, and TWO things you would keep the same.",
      rubric: {
        level3: "Independent = container color; Dependent = water temperature (or time to reach a temperature); AND names two valid controlled variables (e.g., amount of water, sun exposure/time, container size).",
        level2: "Gets independent and dependent correct but names only one valid controlled variable, or lists variables with a minor mix-up.",
        level1: "Confuses the variable roles or gives no controlled variables."
      },
      exemplar: "Independent variable: the color of the container. Dependent variable: the water temperature after 30 minutes. Kept the same: the amount of water, the size/shape of the container, and the spot in the sun.",
      hintLadder: [
        "What is being deliberately changed? That's the independent variable.",
        "What do you measure to see the effect? That's the dependent variable.",
        "Name two things that must stay equal so only color differs."
      ]
    },
    {
      id: "g7.summer.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Results: Cups in bright sun warmed to 32°C; identical cups in shade warmed to 24°C, everything else kept equal. Write an inference you can support from this data, and explain why it's an inference and not just a guess.",
      rubric: {
        level3: "States that sunlight increased water temperature (supported inference) AND explains it's justified because the data shows a difference while other variables were controlled.",
        level2: "States a reasonable inference but the explanation of WHY it's data-supported is weak.",
        level1: "Makes an unsupported claim or restates the data without an inference."
      },
      exemplar: "Inference: sunlight makes water warm up more. This is an inference, not a guess, because the sun cups reached 32°C and the shade cups only 24°C while everything else was kept the same — so the data supports that sunlight caused the higher temperature.",
      hintLadder: [
        "What pattern do the numbers show?",
        "An inference is a conclusion the DATA supports.",
        "Tie your conclusion to the temperature difference and the controlled setup."
      ]
    }
  ],
  reflectionPrompt: "Think of a question you're curious about this summer. What ONE thing would you change to test it, and what would you measure?",
  misconceptionBank: [
    {
      id: "change-many-at-once",
      label: "Changes more than one variable in a single test",
      description: "Alters two or more factors at the same time, making it impossible to tell which one caused the result.",
      coachMove: "Ask: 'How many things are different between your two trials?' If it's more than one, help them redesign so only the independent variable changes."
    },
    {
      id: "guess-vs-inference",
      label: "Confuses a guess with a data-supported inference",
      description: "States a conclusion that isn't actually backed by the measured results.",
      coachMove: "Ask 'Which number in your data supports that?' If they can't point to one, it's a guess — send them back to the evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Two-Change Trap",
      prompt:
        "An explorer plants two seeds. Seed A gets more water AND a bigger pot. Seed A grows taller. They shout 'More water grows taller plants!' What's the flaw in their reasoning — and how would you fix the test?",
      answer:
        "Two things changed (water AND pot size), so you can't tell which one caused the taller plant. Fix it: give both seeds the same pot and only change the water. Change ONE thing at a time.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Blueprint a Fair Test",
      challenge:
        "Pick a summer question you could actually test (Does salt make ice melt faster? Do darker rocks heat up more in the sun?). Draw a full experiment blueprint labeling the independent, dependent, and controlled variables — plus what data you'd record.",
      steps: [
        "Write your testable question at the top of the page.",
        "Label the ONE independent variable you'll change.",
        "Label the dependent variable you'll measure and how (units, timing).",
        "List at least three controlled variables you'll keep the same, then sketch a data table."
      ],
      deliverable: "A labeled experiment blueprint with all three variable types and a blank data table ready to fill in.",
      choiceBoard: [
        "Draw the experiment blueprint with labeled variables.",
        "Build a 'fair test checklist' card another explorer could use on any experiment.",
        "Write a short procedure (numbered steps) a friend could follow to run your test."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Variables Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "A scientist tests whether louder music affects how fast people finish a puzzle. What is the DEPENDENT variable?",
          choices: [
            "The volume of the music",
            "The time it takes to finish the puzzle",
            "The type of puzzle (kept the same)",
            "The room temperature (kept the same)"
          ],
          answerIndex: 1,
          explanation: "The dependent variable is what you measure to see the effect — here, the time to finish the puzzle. The volume is the independent variable.",
          hintLadder: [
            "What is being MEASURED to detect an effect?",
            "The volume is what's changed; the constants are kept the same.",
            "Finishing time is what depends on the music."
          ]
        },
        {
          id: "g7.summer.sci.w1.d2.arena2",
          type: "short_answer",
          stem: "Two identical bean plants get the same water, soil, and pot. One sits by a sunny window, the other in a dark closet. After a week, the window plant is green and tall; the closet plant is pale and short. What can you infer, and why is the test fair?",
          rubric: {
            level3: "Infers that sunlight is needed for healthy growth AND explains the test is fair because only light differed while all other variables were controlled.",
            level2: "Gives a reasonable inference but doesn't fully connect it to the controlled setup.",
            level1: "No valid inference or ignores that other variables were held constant."
          },
          exemplar: "I can infer that plants need sunlight to grow healthy and tall. The test is fair because both plants got the same water, soil, and pot — only the light was different — so the light must be what caused the difference.",
          hintLadder: [
            "What single variable was different between the two plants?",
            "Everything else was kept the same — what does that let you conclude?",
            "Link the healthy plant to the one thing that changed: light."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Observe & Breathe",
      prompt:
        "Sit still like a scientist observing the field. Take 4 slow breaths, and on each one notice ONE thing you can see, hear, feel, or smell around you. Naming one observation at a time is exactly how careful scientists collect data.",
      scienceTieIn:
        "Slow, focused breathing calms your nervous system and improves attention — the same careful focus good observation requires.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's a question about the world you'd love to test this summer? Write it as an experiment: the ONE thing you'd change, and the ONE thing you'd measure.",
      badge: { id: "g7-fair-test-scout", name: "Fair Test Scout", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
