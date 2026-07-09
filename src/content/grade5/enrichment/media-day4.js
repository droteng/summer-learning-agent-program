// Grade 5 Media Literacy — Enrichment Day 4.
// Topic: rumor vs. fact — check before you share.

export const grade5MediaDay4 = {
  id: "g5.media.e.d4",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Rumor vs. fact",
  topicTag: "rumor-vs-fact",
  estimatedMinutes: 16,
  standardsRefs: ["ISTE.3a", "AASL.I.C"],
  hook: "A rumor can travel around a whole school before anyone checks if it's true. Today you learn how to stop, check, and only share what's really a fact.",
  miniLesson: [
    "A fact is something you can check and show is true. A rumor is something people pass along without knowing if it's true.",
    "Before you share, pause and ask: 'How do I KNOW this is true?' If your only answer is 'someone told me,' that's not enough yet.",
    "To check, look for a trusted place that says the same thing, or ask a trusted adult. If you can't check it, it's safer not to spread it."
  ],
  workedExample: {
    prompt:
      "A message says, 'School is closed tomorrow — pass it on!' You got it from a friend who got it from another friend. Should you share it?",
    steps: [
      "Ask: how do I know it's true? Only that a friend said so, who heard it from someone else.",
      "That's a rumor, not a checked fact yet.",
      "Check it: look at the school's real website or have a parent check the school's message. Nothing there says it's closed.",
      "So: don't spread it. Wait until a trusted source, like the school itself, says it's true."
    ],
    answer: "Don't share yet — it's a rumor until the school itself confirms it."
  },
  items: [
    {
      id: "g5.media.e.d4.q1",
      type: "multiple_choice",
      stem: "What is the difference between a FACT and a RUMOR?",
      choices: [
        "A fact is boring and a rumor is fun.",
        "A fact is short and a rumor is long.",
        "There is no difference.",
        "A fact can be checked and shown true; a rumor is passed on without knowing if it's true."
      ],
      answerIndex: 3,
      explanation: "A fact is something you can check and prove. A rumor is just passed along, and no one has checked it yet.",
      hintLadder: [
        "Which one can you actually check and prove?",
        "A fact can be shown to be true.",
        "The last choice explains it."
      ]
    },
    {
      id: "g5.media.e.d4.q2",
      type: "multiple_choice",
      stem: "You see exciting news you want to share. What should you do FIRST?",
      choices: [
        "Share it fast so you're first.",
        "Pause and ask how you know it's true.",
        "Add scary emojis to it.",
        "Send it to everyone you know."
      ],
      answerIndex: 1,
      explanation: "Pausing to ask 'how do I know this is true?' stops rumors from spreading. Sharing fast can spread something false.",
      hintLadder: [
        "What stops a rumor from spreading?",
        "Slow down before you share.",
        "Pause and ask if it's true."
      ]
    },
    {
      id: "g5.media.e.d4.q3",
      type: "multiple_choice",
      stem: "Which of these is the BEST way to check if a surprising story is a real fact?",
      choices: [
        "Count how many friends already shared it.",
        "See if it has a lot of angry comments.",
        "Look for a trusted source that says the same thing, or ask a trusted adult.",
        "Believe it if it has a photo."
      ],
      answerIndex: 2,
      explanation: "A trusted source or a trusted adult can help you check if it's real. Lots of shares, angry comments, or a photo don't make something true.",
      hintLadder: [
        "How do you find out if something is really true?",
        "You need a trusted place or person.",
        "Check a trusted source or ask a trusted adult."
      ],
      misconceptionsTargeted: ["popular-equals-true"]
    },
    {
      id: "g5.media.e.d4.q4",
      type: "numeric",
      stem: "A post was shared by 8 people before anyone stopped to check if it was true. How many people spread it WITHOUT checking?",
      answer: 8,
      tolerance: 0,
      unit: "people",
      explanation: "All 8 people shared it before anyone checked, so all 8 spread it without checking.",
      hintLadder: [
        "How many shared it before anyone checked?",
        "The post says 8 people shared it first.",
        "That's 8 people."
      ]
    },
    {
      id: "g5.media.e.d4.q5",
      type: "short_answer",
      stem: "Imagine a friend sends you a surprising message and says 'Share this with everyone!' Write two things you would do before deciding to share it.",
      rubric: {
        level3: "Two clear, correct steps (like pausing to ask if it's true, checking a trusted source, or asking a trusted adult).",
        level2: "One correct step, or two steps that are vague.",
        level1: "Says they'd just share it, or gives no real step."
      },
      exemplar:
        "First I would stop and ask myself how I know it's really true. Then I would check a trusted website or ask a parent before I share it with anyone.",
      hintLadder: [
        "Remember to pause first.",
        "Think of how you would check it.",
        "Write both steps as full sentences."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to check before you share. When was a time you almost passed on something you weren't sure was true?",
  misconceptionBank: [
    {
      id: "popular-equals-true",
      label: "Thinks lots of shares makes something true",
      description: "Believes that if many people share or like a story, it must be a fact.",
      coachMove: "Explain that a rumor can get shared thousands of times and still be false. Popularity is not proof — checking a trusted source is."
    }
  ]
};
