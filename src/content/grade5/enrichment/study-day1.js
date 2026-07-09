// Grade 5 Study Skills — Enrichment Day 1.
// Topic: focusing for a short time.

export const grade5StudyDay1 = {
  id: "g5.study.e.d1",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Focusing on one thing at a time",
  topicTag: "focusing",
  estimatedMinutes: 15,
  standardsRefs: ["CASEL.SelfManagement"],
  hook: "Your brain is like a flashlight. When you point it at one thing, that thing gets bright. When you wave it all over the room, everything stays a little fuzzy.",
  miniLesson: [
    "First, clear the space. Put your phone in another room and close everything you don't need. Even a quiet phone sitting nearby keeps pulling a corner of your attention.",
    "Next, pick ONE thing. Not 'do homework' — that's too big. Something like 'read pages 10 to 14' has a clear finish line, so you know when you're done.",
    "Then work in a short burst. About 15 minutes of one thing, then a real stretch-and-water break. Short bursts beat trying to power through for an hour."
  ],
  workedExample: {
    prompt:
      "Sam sits down to study spelling but the TV is on, his tablet is buzzing, and he keeps thinking about soccer. How does he set up to focus?",
    steps: [
      "Turn off the TV and put the tablet in another room.",
      "Pick one thing: 'practice the 10 spelling words twice.'",
      "Set a timer for 15 minutes and do just that one thing.",
      "When the timer rings, stand up, stretch, and get some water."
    ],
    answer: "Clear the distractions, pick one clear task, and work for one short 15-minute burst."
  },
  items: [
    {
      id: "g5.study.e.d1.q1",
      type: "multiple_choice",
      stem: "You're about to focus. What's the BEST place for your phone or tablet?",
      choices: [
        "On the desk, face up.",
        "In your lap on silent.",
        "Right next to your notebook.",
        "In another room."
      ],
      answerIndex: 3,
      explanation: "Even a silent phone nearby keeps tugging at your attention. Putting it in another room removes the pull.",
      hintLadder: [
        "A quiet phone can still distract you.",
        "The safest spot is far away.",
        "Somewhere you can't see or reach it."
      ]
    },
    {
      id: "g5.study.e.d1.q2",
      type: "multiple_choice",
      stem: "Which is a good 'one thing' to focus on for a short burst?",
      choices: [
        "Get smart at reading.",
        "Read pages 10 to 14.",
        "Do all my homework.",
        "Feel ready for school."
      ],
      answerIndex: 1,
      explanation: "'Read pages 10 to 14' has a clear finish line, so you know exactly when you're done.",
      hintLadder: [
        "Which one has a clear stopping point?",
        "Big goals aren't single tasks.",
        "You can tell when 'pages 10 to 14' is finished."
      ],
      misconceptionsTargeted: ["task-too-big"]
    },
    {
      id: "g5.study.e.d1.q3",
      type: "multiple_choice",
      stem: "What makes a good break BETWEEN two short focus bursts?",
      choices: [
        "Watching a video.",
        "Playing a phone game.",
        "Standing up, stretching, and drinking water.",
        "Starting a whole new show."
      ],
      answerIndex: 2,
      explanation: "A real break rests your eyes and body. Screens feel like rest but keep your brain busy.",
      hintLadder: [
        "A break should rest your eyes and brain.",
        "Screens don't really rest you.",
        "Move your body and drink some water."
      ]
    },
    {
      id: "g5.study.e.d1.q4",
      type: "numeric",
      stem: "You do 3 focus bursts, and each one is 15 minutes long. How many minutes of focused work is that in total?",
      answer: 45,
      tolerance: 0,
      unit: "minutes",
      explanation: "3 bursts times 15 minutes each is 3 × 15 = 45 minutes.",
      hintLadder: [
        "You're adding 15 three times.",
        "15 + 15 + 15, or 3 × 15.",
        "Three fifteens make 45."
      ]
    },
    {
      id: "g5.study.e.d1.q5",
      type: "short_answer",
      stem: "Name one thing that distracts you when you study, and write one small step you can take to clear it away before your next focus burst.",
      rubric: {
        level3: "Names a real, specific distraction AND a clear, doable step to remove it.",
        level2: "Names a distraction but the fix is vague, like 'try harder'.",
        level1: "Very general, like 'get distracted a lot' with no step."
      },
      exemplar:
        "My little brother's cartoons distract me. Before I start, I'll close my bedroom door and study there for 15 minutes.",
      hintLadder: [
        "What pulls your attention away most often?",
        "Now think of one small action to move it out of the way.",
        "Write the distraction, then the step, in two short sentences."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to point your 'flashlight' at one thing. Which distraction is hardest for you to clear away, and why?",
  misconceptionBank: [
    {
      id: "task-too-big",
      label: "Picks a task that's too big to finish",
      description: "Chooses something like 'do all my homework' instead of one small task with a clear finish line.",
      coachMove: "Ask: how will you know the very second you're done? If you can't say, shrink it to one clear piece."
    }
  ]
};
