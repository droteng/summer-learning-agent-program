// Grade 5 Study Skills — Enrichment Day 4.
// Topic: planning your day.

export const grade5StudyDay4 = {
  id: "g5.study.e.d4",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Planning your day with a to-do list",
  topicTag: "planning-your-day",
  estimatedMinutes: 15,
  standardsRefs: ["CASEL.SelfManagement"],
  hook: "A busy day without a plan is like a backpack with everything loose inside — you can never find the thing you need. A simple list is like having pockets.",
  miniLesson: [
    "Write it down. When your tasks are on paper, your brain doesn't have to keep juggling them, so you feel calmer and forget less.",
    "Do first things first. Look at your list and ask, 'Which one really needs to happen today?' Put that one at the top and start there.",
    "Cross things off. Each time you finish something, cross it out. Seeing the line through a task feels great and keeps you going."
  ],
  workedExample: {
    prompt:
      "After school Leo has: math homework due tomorrow, feed the dog, practice piano, and a book report due next week. How does he plan?",
    steps: [
      "Write all four tasks on a list so nothing gets forgotten.",
      "Feed the dog first — the dog is hungry now, so it can't wait.",
      "Then do the math homework, because it's due tomorrow.",
      "Practice piano next; save a little of the book report for later since it's not due for a week."
    ],
    answer: "List everything, then do the most time-sensitive things first."
  },
  items: [
    {
      id: "g5.study.e.d4.q1",
      type: "multiple_choice",
      stem: "Why does writing your tasks on a to-do list help you?",
      choices: [
        "It makes the tasks disappear.",
        "Your brain can relax instead of juggling everything.",
        "Lists are the only way to do homework.",
        "It makes each task take longer."
      ],
      answerIndex: 1,
      explanation: "Once tasks are written down, your brain doesn't have to keep holding them, so you feel calmer and forget less.",
      hintLadder: [
        "Think about what your brain does when nothing is written down.",
        "Writing takes the load off your memory.",
        "Your brain can relax when the list remembers for you."
      ]
    },
    {
      id: "g5.study.e.d4.q2",
      type: "multiple_choice",
      stem: "You have four things to do. Which one should go FIRST on your list?",
      choices: [
        "The one that really needs to happen today.",
        "The one that's the most fun.",
        "The one that takes the longest.",
        "The one you thought of last."
      ],
      answerIndex: 0,
      explanation: "'First things first' means starting with what's most important or most time-sensitive.",
      hintLadder: [
        "'First things first' is about importance, not fun.",
        "Which task can't wait?",
        "Start with what really needs to happen today."
      ],
      misconceptionsTargeted: ["easy-first-always"]
    },
    {
      id: "g5.study.e.d4.q3",
      type: "multiple_choice",
      stem: "What's a good reason to cross a task off once you finish it?",
      choices: [
        "So you can lose the list.",
        "Crossing off wastes time.",
        "You should never cross things off.",
        "It feels good and helps you keep going."
      ],
      answerIndex: 3,
      explanation: "Seeing a line through a finished task gives you a little boost and shows your progress.",
      hintLadder: [
        "Think about how it feels to finish something.",
        "Crossing off shows what you've already done.",
        "It gives you a good feeling that keeps you going."
      ]
    },
    {
      id: "g5.study.e.d4.q4",
      type: "numeric",
      stem: "Your after-school list has 5 tasks. You've finished and crossed off 2 of them. How many tasks are still left to do?",
      answer: 3,
      tolerance: 0,
      unit: "tasks",
      explanation: "You started with 5 and finished 2, so 5 − 2 = 3 tasks are left.",
      hintLadder: [
        "Begin with all 5 tasks.",
        "Take away the 2 you crossed off.",
        "5 − 2 = 3."
      ]
    },
    {
      id: "g5.study.e.d4.q5",
      type: "short_answer",
      stem: "Make a short to-do list for your afternoon today. Write 3 tasks, and put a star next to the one you'll do FIRST. Explain why that one goes first.",
      rubric: {
        level3: "Lists 3 real tasks, stars one, AND gives a sensible reason it comes first (due soon, can't wait, most important).",
        level2: "Lists tasks and stars one but the reason is weak or missing.",
        level1: "Fewer than 3 tasks or no clear first choice."
      },
      exemplar:
        "1. ★ Math homework (due tomorrow) 2. Water the plants 3. Read for 20 minutes. Math goes first because it's due tomorrow and can't wait.",
      hintLadder: [
        "Think of 3 things you actually need to do today.",
        "Decide which one really can't wait and star it.",
        "Write one sentence on why that one comes first."
      ]
    }
  ],
  reflectionPrompt: "Today you made a plan for your day. Does having a written list make you feel more calm or more stressed — and why?",
  misconceptionBank: [
    {
      id: "easy-first-always",
      label: "Always does the easiest or most fun task first",
      description: "Starts with whatever is fun or quick, so the important, time-sensitive task gets pushed to the end or forgotten.",
      coachMove: "Ask: which task will cause a problem if it doesn't get done today? Do that one first, then enjoy the easy ones."
    }
  ]
};
