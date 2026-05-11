// Grade 6 Study Skills — Enrichment Day 3.
// Topic: memory techniques.

export const grade6StudyDay3 = {
  id: "g6.study.e.d3",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "How to actually remember",
  topicTag: "memory",
  estimatedMinutes: 18,
  standardsRefs: ["CASEL.2"],
  hook: "Most students study by re-reading. Most students forget by Friday. Today you learn three techniques real cognitive science backs.",
  miniLesson: [
    "Active recall: close the book and try to retrieve the information. Failed attempts strengthen memory more than re-reading.",
    "Spaced practice: re-test yourself the next day, then 3 days later, then a week later. Spacing beats cramming.",
    "Chunking: 14 random digits is impossible to remember. The same digits as a phone number (3-3-4 chunks) becomes easy."
  ],
  workedExample: {
    prompt:
      "You have 8 vocabulary words to learn for Friday. It's Monday. What's the smartest schedule?",
    steps: [
      "Mon: learn all 8 with active recall — close the book and try to write each definition.",
      "Tue: quick re-quiz on the ones you missed yesterday.",
      "Wed: quiz on all 8 — yesterday's misses get priority.",
      "Thu: one short final quiz.",
      "Total time: probably 15 min/day. Much better than 60 min on Thursday night."
    ],
    answer: "Spread small quizzes across the week with active recall."
  },
  items: [
    {
      id: "g6.study.e.d3.q1",
      type: "multiple_choice",
      stem: "Which is ACTIVE RECALL?",
      choices: [
        "Re-reading the textbook out loud.",
        "Closing the book and trying to write what you remember.",
        "Highlighting the important parts.",
        "Watching a video of someone explaining."
      ],
      answerIndex: 1,
      explanation: "Active recall = retrieve from memory. The book stays closed.",
      hintLadder: [
        "Active means you do the work.",
        "What's the test?",
        "Close the book and write it."
      ]
    },
    {
      id: "g6.study.e.d3.q2",
      type: "multiple_choice",
      stem: "Why is SPACED practice better than CRAMMING?",
      choices: [
        "It's faster.",
        "Spacing forces you to retrieve memories that have started to fade, which strengthens them.",
        "Teachers tell you to.",
        "It uses less paper."
      ],
      answerIndex: 1,
      explanation: "Each space tests slightly-faded memory, which makes the recall trace stronger.",
      hintLadder: [
        "What does spacing make harder in a useful way?",
        "Retrieval gets harder.",
        "Harder retrieval = stronger memory."
      ],
      misconceptionsTargeted: ["cramming-feels-like-learning"]
    },
    {
      id: "g6.study.e.d3.q3",
      type: "multiple_choice",
      stem:
        "Phone number 555-867-5309 is easier to remember than 5558675309. Why?",
      choices: [
        "Hyphens look nicer.",
        "Chunking groups digits into 3-3-4, which fits how short-term memory works.",
        "Phone numbers are magic.",
        "Bigger numbers are scary."
      ],
      answerIndex: 1,
      explanation: "Short-term memory holds about 7 items. Chunking shrinks the items down — 3 groups instead of 10 digits.",
      hintLadder: [
        "What does the spacing do?",
        "Groups digits together.",
        "Smaller number of chunks."
      ]
    },
    {
      id: "g6.study.e.d3.q4",
      type: "multiple_choice",
      stem: "A 'failed' active-recall attempt is:",
      choices: [
        "Wasted time.",
        "A signal of what to study next + actually helps long-term memory.",
        "Embarrassing.",
        "A reason to give up."
      ],
      answerIndex: 1,
      explanation: "Trying and failing is informative AND strengthens the eventual correct answer when you check.",
      hintLadder: [
        "Is failure here useful?",
        "Yes.",
        "Signal + memory boost."
      ]
    },
    {
      id: "g6.study.e.d3.q5",
      type: "short_answer",
      stem:
        "Pick something you need to memorize this week. Write a 4-day spaced practice schedule using active recall.",
      rubric: {
        level3: "Specific content, 4 specific days with what's done each day, uses active recall at each step.",
        level2: "Schedule present but vague on what's done.",
        level1: "Single cram session."
      },
      exemplar:
        "Content: 10 Spanish vocabulary words. Mon: write each English word, try to recall the Spanish; check. Tue: quick re-test on the 6 I missed yesterday. Wed: full 10-word self-quiz. Thu: 1-minute final check.",
      hintLadder: [
        "Pick a specific thing to memorize.",
        "Plan 4 days, decreasing time each day.",
        "Use active recall every day."
      ]
    }
  ],
  reflectionPrompt: "Today you learned why cramming feels productive but doesn't work. What's something you crammed once that you wish you'd spaced?",
  misconceptionBank: [
    {
      id: "cramming-feels-like-learning",
      label: "Confuses cramming familiarity with learning",
      description: "Cramming makes content feel familiar in the moment, then most of it fades within days.",
      coachMove: "Familiarity ≠ memory. Spaced active recall is the test of whether you actually learned it."
    }
  ]
};
