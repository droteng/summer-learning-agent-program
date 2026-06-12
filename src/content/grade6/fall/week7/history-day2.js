// Grade 6 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 2. Topic: turning points — when one event changes everything.

export const fallG6HistoryW7D2 = {
  id: "g6.fall.hist.w7.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Turning points in history",
  topicTag: "turning-points",
  estimatedMinutes: 17,
  standardsRefs: ["C3.D2.His.1", "C3.D2.His.14"],
  hook: "Some moments split history into 'before' and 'after.' The printing press, a major invention, a key decision. Today you learn to spot a turning point.",
  miniLesson: [
    "A turning point is an event after which things were never the same — it changes the direction of the chain.",
    "Example: the printing press let books be made fast and cheap, so ideas spread to far more people — a turning point for education.",
    "To judge a turning point, ask: what was different AFTER it that wasn't possible before?"
  ],
  workedExample: {
    prompt: "Explain why the printing press was a turning point.",
    steps: [
      "Before: books were copied slowly by hand, so few people had them.",
      "The press printed many copies quickly and cheaply.",
      "After: ideas, news, and learning reached far more people.",
      "Things were never the same — that's a turning point."
    ],
    answer: "It made books cheap and fast, so ideas spread widely — a clear before/after change."
  },
  items: [
    {
      id: "g6.fall.hist.w7.d2.q1",
      type: "multiple_choice",
      stem: "A 'turning point' in history is an event that...",
      choices: [
        "no one remembers",
        "changes the direction of things so the future is different",
        "happens every year",
        "has no effects"
      ],
      answerIndex: 1,
      explanation: "Turning points redirect history — there's a clear 'before' and 'after.'",
      hintLadder: [
        "Think 'before and after.'",
        "What makes a moment a turning point?",
        "It changes the direction of events."
      ]
    },
    {
      id: "g6.fall.hist.w7.d2.q2",
      type: "multiple_choice",
      stem: "Best question to test whether something was a turning point:",
      choices: [
        "Was it popular?",
        "What became possible AFTER it that wasn't before?",
        "Did it happen long ago?",
        "Was it written down?"
      ],
      answerIndex: 1,
      explanation: "A real turning point opens up new possibilities — compare before vs. after.",
      hintLadder: [
        "Turning points change what's possible.",
        "Compare the world before and after.",
        "Ask what became newly possible."
      ]
    },
    {
      id: "g6.fall.hist.w7.d2.q3",
      type: "multiple_choice",
      stem: "Which is most clearly a turning point in everyday technology?",
      choices: [
        "A store changed its hours",
        "The invention of the smartphone, which changed how billions communicate",
        "Someone bought a new pen",
        "A TV show ended"
      ],
      answerIndex: 1,
      explanation: "Smartphones transformed communication worldwide — a major before/after shift.",
      hintLadder: [
        "Which one changed life for huge numbers of people?",
        "Think wide, lasting change.",
        "The smartphone."
      ],
      misconceptionsTargeted: ["every-event-is-turning-point"]
    },
    {
      id: "g6.fall.hist.w7.d2.q4",
      type: "short_answer",
      stem: "Pick an invention or event you think was a turning point. Describe the 'before' and the 'after.'",
      rubric: {
        level3: "Names a real turning point AND clearly contrasts how things were before vs. after.",
        level2: "Names one but the before/after contrast is thin.",
        level1: "No clear turning point or contrast."
      },
      exemplar: "Before vaccines for diseases like polio, outbreaks paralyzed thousands of children every year. After, those diseases became rare — a turning point for public health.",
      hintLadder: [
        "Choose an invention/event that changed a lot.",
        "How were things BEFORE it?",
        "How were they AFTER?"
      ]
    },
    {
      id: "g6.fall.hist.w7.d2.q5",
      type: "short_answer",
      stem: "Not every change is a turning point. Explain the difference between a small change and a true turning point, with an example of each.",
      rubric: {
        level3: "Clearly distinguishes scale/lasting impact AND gives a small-change example plus a turning-point example.",
        level2: "Distinguishes them but one example is weak.",
        level1: "Confuses the two or no examples."
      },
      exemplar: "A small change fades fast, like a fad toy everyone forgets. A turning point lasts and reshapes life, like electricity reaching homes, which changed work, light, and daily routines forever.",
      hintLadder: [
        "How big and lasting is the impact?",
        "Give a small, forgettable change.",
        "Then a lasting, world-changing one."
      ]
    }
  ],
  reflectionPrompt: "Has there been a 'turning point' in your own life — a moment after which things were different? What changed?",
  misconceptionBank: [
    {
      id: "every-event-is-turning-point",
      label: "Calls every event a turning point",
      description: "Labels minor changes as turning points without testing lasting impact.",
      coachMove: "Apply the test: did it create a lasting 'before and after'? If not, it's just a change."
    }
  ]
};
