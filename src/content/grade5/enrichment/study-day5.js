// Grade 5 Study Skills — Enrichment Day 5.
// Topic: setting a small goal you can finish.

export const grade5StudyDay5 = {
  id: "g5.study.e.d5",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Setting a small goal you can finish",
  topicTag: "small-goals",
  estimatedMinutes: 15,
  standardsRefs: ["CASEL.SelfManagement"],
  hook: "Saying 'I'll get better at reading' is like pointing at the top of a mountain. A small goal is the first step you can actually take today — and steps are how you climb.",
  miniLesson: [
    "Make it small. A goal like 'read for 15 minutes today' is something you can really finish, unlike a giant goal that feels impossible to even start.",
    "Make it clear. A good goal tells you what, how much, and when. 'Practice 5 math problems after dinner' checks all three boxes.",
    "Finishing small goals builds confidence. Each little win tells your brain, 'I can do this,' which makes the next goal easier to start."
  ],
  workedExample: {
    prompt:
      "Maya says, 'I want to be great at multiplication.' How can she turn that big wish into a small goal she can finish today?",
    steps: [
      "Notice 'be great at multiplication' is too big to finish in one day.",
      "Shrink it: pick just the 6-times table to practice.",
      "Add how much and when: 'practice the 6s ten times right after snack.'",
      "Now it's small, clear, and finishable — she'll know when it's done."
    ],
    answer: "Turn the big wish into 'practice the 6-times table 10 times after snack.'"
  },
  items: [
    {
      id: "g5.study.e.d5.q1",
      type: "multiple_choice",
      stem: "Which of these is a SMALL goal you could actually finish today?",
      choices: [
        "Get amazing at spelling.",
        "Be the smartest in class.",
        "Never make mistakes again.",
        "Practice 8 spelling words twice before dinner."
      ],
      answerIndex: 3,
      explanation: "It says what, how much, and when — so you can finish it and know you did.",
      hintLadder: [
        "Which one has a clear finish line?",
        "The big wishes can't be finished in one day.",
        "The one with a number and a time is finishable."
      ]
    },
    {
      id: "g5.study.e.d5.q2",
      type: "multiple_choice",
      stem: "A clear goal usually tells you three things. Which three?",
      choices: [
        "Who, where, and why.",
        "Your name, the date, and the weather.",
        "What, how much, and when.",
        "The hardest, the longest, and the newest."
      ],
      answerIndex: 2,
      explanation: "A clear goal names WHAT you'll do, HOW MUCH, and WHEN — like 'read 10 pages after school.'",
      hintLadder: [
        "Think about what makes a goal easy to check.",
        "One of them is a number (how much).",
        "What, how much, and when."
      ],
      misconceptionsTargeted: ["goal-too-vague"]
    },
    {
      id: "g5.study.e.d5.q3",
      type: "multiple_choice",
      stem: "Why is finishing small goals good for you?",
      choices: [
        "It uses up the whole day.",
        "Each little win builds confidence for the next goal.",
        "It means you never have to try hard.",
        "Small goals don't really count."
      ],
      answerIndex: 1,
      explanation: "Every small goal you finish tells your brain 'I can do this,' making the next one easier to start.",
      hintLadder: [
        "Think about how it feels to finish something.",
        "Little wins add up to something.",
        "They build confidence for what's next."
      ]
    },
    {
      id: "g5.study.e.d5.q4",
      type: "numeric",
      stem: "Your small goal is to read 5 pages a day. If you keep that goal for 4 days, how many pages will you have read in all?",
      answer: 20,
      tolerance: 0,
      unit: "pages",
      explanation: "5 pages a day for 4 days is 5 × 4 = 20 pages.",
      hintLadder: [
        "You're adding 5 pages four times.",
        "5 + 5 + 5 + 5, or 5 × 4.",
        "Four fives make 20."
      ]
    },
    {
      id: "g5.study.e.d5.q5",
      type: "short_answer",
      stem: "Write ONE small goal for tomorrow. Make it clear by including what you'll do, how much, and when.",
      rubric: {
        level3: "Goal is small and includes all three: what, how much, and when.",
        level2: "Goal is small but missing one part (like the 'when').",
        level1: "Goal is a big wish with no amount or time, like 'get better at math.'"
      },
      exemplar:
        "Tomorrow I'll practice 6 piano notes for 10 minutes right after breakfast.",
      hintLadder: [
        "Pick something small you can finish in one day.",
        "Add a number for how much.",
        "Say exactly when you'll do it."
      ]
    }
  ],
  reflectionPrompt: "Today you set a small goal. How does finishing a small goal make you feel about trying a slightly bigger one next?",
  misconceptionBank: [
    {
      id: "goal-too-vague",
      label: "Sets a goal that's too vague to finish",
      description: "Writes a big wish like 'get better at reading' with no amount or time, so there's no way to know when it's done.",
      coachMove: "Ask: what exactly, how much, and when? Add those three and the goal becomes something you can actually finish."
    }
  ]
};
