// Grade 6 Study Skills — Enrichment Day 1.
// Topic: focus sessions.

export const grade6StudyDay1 = {
  id: "g6.study.e.d1",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Focus sessions that actually work",
  topicTag: "focus",
  estimatedMinutes: 16,
  standardsRefs: ["CASEL.2"],
  hook: "Long study sessions feel productive but often aren't. Today you learn a rhythm that beats marathon study almost every time.",
  miniLesson: [
    "A focus session is a short block (20–30 minutes) of one thing, with no phone, no tabs, no music with lyrics. Then a real 5-minute break.",
    "One thing means one. 'Read chapter 4' is one thing. 'Study for the test' is not — it's a goal, not a task.",
    "Three focus sessions back-to-back beat one 90-minute session almost every time. Your brain needs the breaks to consolidate."
  ],
  workedExample: {
    prompt:
      "Maya has a math test in 3 days. She has 45 minutes today. How does she use the focus rhythm?",
    steps: [
      "Pick the ONE thing for this study: 'practice the 5 hardest problem types from chapter 4.'",
      "Block 1 (20 min): work problems 1-6 with phone in another room.",
      "Break (5 min): walk, water, no screen.",
      "Block 2 (20 min): check answers and redo any wrong ones."
    ],
    answer: "Two 20-minute focused blocks + one real break in the middle."
  },
  items: [
    {
      id: "g6.study.e.d1.q1",
      type: "multiple_choice",
      stem: "What's the IDEAL length of one focus block?",
      choices: ["5 minutes", "20–30 minutes", "2 hours", "All evening"],
      answerIndex: 1,
      explanation: "20–30 minutes is long enough to make progress, short enough to maintain attention.",
      hintLadder: [
        "Long blocks lose focus.",
        "Short blocks don't go anywhere.",
        "20–30 minutes."
      ]
    },
    {
      id: "g6.study.e.d1.q2",
      type: "multiple_choice",
      stem: "Which is a real 'one thing' for a focus block?",
      choices: [
        "Study for the test.",
        "Be good at math.",
        "Just feel ready.",
        "Solve practice problems 1–10 in chapter 4."
      ],
      answerIndex: 3,
      explanation: "A real one-thing is testable — you know when it's done. Goals aren't tasks.",
      hintLadder: [
        "Which option has a clear finish line?",
        "Skip the goals.",
        "Problems 1-10 is finishable."
      ],
      misconceptionsTargeted: ["task-vs-goal-confusion"]
    },
    {
      id: "g6.study.e.d1.q3",
      type: "multiple_choice",
      stem:
        "Where should your phone be during a focus block?",
      choices: [
        "Next to you, face-up.",
        "In your hand on silent.",
        "In another room or in a drawer.",
        "Open to a homework app."
      ],
      answerIndex: 2,
      explanation: "Just having your phone visible reduces focus, even when it's not buzzing. Distance matters.",
      hintLadder: [
        "Even a silent phone is a distraction trigger.",
        "Where does it need to be?",
        "Out of sight."
      ]
    },
    {
      id: "g6.study.e.d1.q4",
      type: "multiple_choice",
      stem: "What counts as a real 5-minute break BETWEEN focus blocks?",
      choices: [
        "Walking, stretching, drinking water — no screens.",
        "Checking social media.",
        "Watching one quick video.",
        "Texting a friend."
      ],
      answerIndex: 0,
      explanation: "Real breaks rest your eyes and brain. Screens during breaks feel like rest but aren't.",
      hintLadder: [
        "What does a brain break need?",
        "Not screens.",
        "Movement + water."
      ]
    },
    {
      id: "g6.study.e.d1.q5",
      type: "short_answer",
      stem:
        "Plan a 50-minute focus session for something you actually want to learn or practice this week. Include the one-thing, two blocks, and a break.",
      rubric: {
        level3: "Specific one-thing (testable), two specific 20-minute blocks with concrete tasks, one real break activity.",
        level2: "Has the structure but the one-thing is vague.",
        level1: "Generic 'study' plan."
      },
      exemplar:
        "One-thing: write the rough draft of my history essay outline. Block 1 (20 min): list 5 main points. Break (10 min): walk outside, no phone. Block 2 (20 min): write 1-sentence preview for each point.",
      hintLadder: [
        "Pick a specific thing.",
        "Break it into two block-sized tasks.",
        "Add the break activity."
      ]
    }
  ],
  reflectionPrompt: "Today you built a focus rhythm. What's the hardest part of getting your phone out of the room?",
  misconceptionBank: [
    {
      id: "task-vs-goal-confusion",
      label: "Confuses a goal with a task",
      description: "Says 'I'll study for the test' as if that were a task. Goals describe outcomes; tasks describe actions you finish.",
      coachMove: "Ask: what specifically are you doing in the next 20 minutes? If you can't say, you haven't picked a task yet."
    }
  ]
};
