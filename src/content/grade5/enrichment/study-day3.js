// Grade 5 Study Skills — Enrichment Day 3.
// Topic: simple ways to remember.

export const grade5StudyDay3 = {
  id: "g5.study.e.d3",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Simple tricks to remember things",
  topicTag: "remembering",
  estimatedMinutes: 16,
  standardsRefs: ["CASEL.SelfManagement"],
  hook: "Reading something over and over feels like studying, but it's a bit like watching someone else ride a bike. To really learn, you have to hop on and try it yourself.",
  miniLesson: [
    "Say it out loud. When you explain an idea to the air, your ears and mouth join in, and that makes the memory stronger than just reading silently.",
    "Quiz yourself. Cover the answer and try to remember it before you peek. Even when you get it wrong, that tricky effort helps it stick better next time.",
    "Teach someone. Explain it to a parent, a friend, or even a stuffed animal. If you can teach it, you truly know it — and you'll spot the parts you're still fuzzy on."
  ],
  workedExample: {
    prompt:
      "Priya has 6 science words to learn for Friday. Instead of just re-reading the list, what should she do?",
    steps: [
      "Read each word and its meaning out loud once.",
      "Cover the meanings and quiz herself — say each meaning from memory.",
      "Check which ones she missed and try just those again.",
      "Teach the whole list to her dad, explaining each word in her own way."
    ],
    answer: "Say them out loud, quiz herself, then teach them to someone."
  },
  items: [
    {
      id: "g5.study.e.d3.q1",
      type: "multiple_choice",
      stem: "Which of these is 'quizzing yourself' the right way?",
      choices: [
        "Reading the answers over and over.",
        "Copying the notes neatly.",
        "Covering the answer and trying to remember it before you peek.",
        "Highlighting everything in yellow."
      ],
      answerIndex: 2,
      explanation: "Quizzing yourself means trying to pull the answer from memory FIRST, then checking.",
      hintLadder: [
        "Quizzing means testing your memory, not just looking.",
        "The answer should be covered at first.",
        "Try to remember before you peek."
      ]
    },
    {
      id: "g5.study.e.d3.q2",
      type: "multiple_choice",
      stem: "You're teaching a science idea to your little sister and you get stuck explaining one part. What does that tell you?",
      choices: [
        "You should stop studying.",
        "Teaching doesn't work.",
        "Your sister isn't listening.",
        "That's the part you need to study a little more."
      ],
      answerIndex: 3,
      explanation: "Getting stuck while teaching shows you exactly which part isn't clear yet — that's helpful, not bad.",
      hintLadder: [
        "Getting stuck is actually useful information.",
        "It points at something.",
        "It shows the part you don't fully know yet."
      ],
      misconceptionsTargeted: ["stuck-means-failing"]
    },
    {
      id: "g5.study.e.d3.q3",
      type: "multiple_choice",
      stem: "Why does saying an answer OUT LOUD help you remember better than reading it silently?",
      choices: [
        "More of you joins in — your voice and ears — so the memory gets stronger.",
        "It's always faster than reading.",
        "It makes the words shorter.",
        "Reading silently never works at all."
      ],
      answerIndex: 0,
      explanation: "Speaking adds your voice and hearing to the job, giving your brain more ways to hold the idea.",
      hintLadder: [
        "Think about what extra senses join in when you talk.",
        "Reading silently only uses your eyes.",
        "Your voice and ears help lock it in."
      ]
    },
    {
      id: "g5.study.e.d3.q4",
      type: "numeric",
      stem: "You quiz yourself on 10 spelling words and get 7 correct. How many words do you still need to practice?",
      answer: 3,
      tolerance: 0,
      unit: "words",
      explanation: "You knew 7 out of 10, so 10 − 7 = 3 words still need practice.",
      hintLadder: [
        "Start with all 10 words.",
        "Take away the 7 you got right.",
        "10 − 7 = 3."
      ]
    },
    {
      id: "g5.study.e.d3.q5",
      type: "short_answer",
      stem: "Pick something you're learning this week. Describe how you would use ONE of today's tricks — say it out loud, quiz yourself, or teach someone — to remember it.",
      rubric: {
        level3: "Names specific content AND clearly describes one of the three tricks in action.",
        level2: "Names a trick but stays vague about what they'd actually do.",
        level1: "Just says 'study more' with no real trick."
      },
      exemplar:
        "I'm learning the 8 planets in order. I'll teach them to my mom, pointing to each planet and explaining it, so I can hear which ones I mix up.",
      hintLadder: [
        "Pick one real thing you need to remember.",
        "Choose one trick: out loud, self-quiz, or teach.",
        "Describe exactly what you'd do with that trick."
      ]
    }
  ],
  reflectionPrompt: "Today you tried three ways to remember. Which one felt most fun, and which one felt hardest?",
  misconceptionBank: [
    {
      id: "stuck-means-failing",
      label: "Thinks getting stuck means failing",
      description: "Believes that struggling to explain or missing a self-quiz means they're bad at studying, instead of seeing it as a useful signal.",
      coachMove: "Reframe: getting stuck is your brain pointing a spotlight at what to practice next. That's a win, not a fail."
    }
  ]
};
