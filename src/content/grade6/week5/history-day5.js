// Grade 6 History — Week 5, Day 5.
// Topic: history of inventions — how breakthroughs happen.

export const grade6HistoryWeek5Day5 = {
  id: "g6.hist.w5.d5",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "How inventions happen",
  topicTag: "history-of-invention",
  estimatedMinutes: 18,
  standardsRefs: ["C3.D2.His.14.6-8", "C3.D2.His.16.6-8"],
  hook: "Most famous inventions weren't lone genius moments. Today you trace one through its real history — borrowed parts, failed first tries, and the conditions that made it possible.",
  miniLesson: [
    "Inventions build on prior inventions. The printing press borrowed from wine presses; the telephone borrowed from the telegraph.",
    "Conditions matter as much as inventors. Materials, demand, and existing knowledge have to line up.",
    "Many inventions had a 'race' — multiple people getting close at the same time, because the conditions enabled them."
  ],
  workedExample: {
    prompt:
      "Why was Gutenberg's printing press possible in 1450s Europe but not 100 years earlier?",
    steps: [
      "Movable type already existed in Asia; Gutenberg adapted it for the alphabet.",
      "Cheap paper had recently arrived from Asia via trade routes.",
      "Wine-press technology gave him the mechanical squeeze.",
      "Demand for books was rising as universities and merchants grew literate."
    ],
    answer: "All four conditions — borrowed tech, materials, mechanism, demand — lined up in the 1450s."
  },
  items: [
    {
      id: "g6.hist.w5.d5.q1",
      type: "multiple_choice",
      stem: "Which is closest to TRUE about most famous inventions?",
      choices: [
        "One genius working alone made each one.",
        "Each one builds on earlier inventions and ideas.",
        "Each one was invented in secret with no help.",
        "Each one came out perfect on the first try."
      ],
      answerIndex: 1,
      explanation: "Inventions almost always borrow parts and ideas from earlier work. The 'lone genius' story is mostly a myth.",
      hintLadder: [
        "Where do new ideas usually come from?",
        "Earlier ideas + new combinations.",
        "Building on prior work."
      ],
      misconceptionsTargeted: ["lone-genius-myth"]
    },
    {
      id: "g6.hist.w5.d5.q2",
      type: "multiple_choice",
      stem:
        "The telephone (1876) borrowed most directly from which earlier invention?",
      choices: ["The wheel.", "The telegraph.", "The printing press.", "The compass."],
      answerIndex: 1,
      explanation: "The telegraph already moved signals over wires. The telephone added a way to encode voice into those signals.",
      hintLadder: [
        "What earlier technology already moved signals over wires?",
        "Started with dots and dashes.",
        "The telegraph."
      ]
    },
    {
      id: "g6.hist.w5.d5.q3",
      type: "multiple_choice",
      stem:
        "Why did the telephone, lightbulb, and steam engine all see 'races' with multiple inventors filing patents around the same time?",
      choices: [
        "Coincidence.",
        "The conditions — materials, demand, prior tech — were ripe, so several people got close at once.",
        "They all knew each other.",
        "It was easier to copy than to invent."
      ],
      answerIndex: 1,
      explanation: "When conditions are ripe, multiple thinkers in different places converge on similar ideas. The race isn't just about who got there first; it's about why the time was right.",
      hintLadder: [
        "Why do similar inventions appear at the same time?",
        "What conditions had to be in place?",
        "Ripe conditions → races."
      ]
    },
    {
      id: "g6.hist.w5.d5.q4",
      type: "multiple_choice",
      stem:
        "Which is the BEST evidence that an invention 'changed the world'?",
      choices: [
        "It was famous.",
        "It shifted how everyday people lived, worked, or communicated.",
        "It cost a lot.",
        "It looked impressive."
      ],
      answerIndex: 1,
      explanation: "World-changing inventions reshape daily life at scale. Fame and cost don't decide impact.",
      hintLadder: [
        "What does 'changed the world' mean for ordinary people?",
        "Daily life is the test.",
        "Shifted how people live."
      ]
    },
    {
      id: "g6.hist.w5.d5.q5",
      type: "short_answer",
      stem:
        "Pick an invention from the last 30 years (smartphone, GPS, electric car, etc.). Name one earlier thing it built on and one condition that made it possible.",
      rubric: {
        level3: "Names a specific recent invention, a specific earlier predecessor, and a specific enabling condition (cheap microchips, GPS satellites, ubiquitous wifi, etc.).",
        level2: "Has an invention + predecessor but the condition is vague.",
        level1: "Vague or only one element."
      },
      exemplar:
        "The smartphone built on the cell phone and the personal computer. A key condition was the falling cost of small, low-power microchips, which made it possible to fit a computer in a pocket.",
      hintLadder: [
        "Pick a modern invention.",
        "What was around before it?",
        "Add the condition that made the new thing possible."
      ]
    }
  ],
  reflectionPrompt: "This week you saw earth, engineering, and invention. What's a small thing in your home that started as someone's invention?",
  misconceptionBank: [
    {
      id: "lone-genius-myth",
      label: "Believes inventions came from lone geniuses",
      description: "Treats Edison, Tesla, Bell etc. as solo inventors instead of contributors building on prior work and teams.",
      coachMove: "Look at the patent records and predecessor inventions. Almost every famous invention has a longer family tree than the legend."
    }
  ]
};
