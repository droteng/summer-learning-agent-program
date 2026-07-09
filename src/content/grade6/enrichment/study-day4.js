// Grade 6 Study Skills — Enrichment Day 4.
// Topic: weekly planning.

export const grade6StudyDay4 = {
  id: "g6.study.e.d4",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Planning a week",
  topicTag: "planning",
  estimatedMinutes: 16,
  standardsRefs: ["CASEL.2"],
  hook: "A planned week is a calm week. Today you learn a 10-minute Sunday ritual that beats winging it.",
  miniLesson: [
    "List the week's three biggest things — the ones that would feel bad if Friday came and they hadn't happened.",
    "Schedule each one onto a specific day and time. 'Sometime this week' rarely happens; 'Tuesday at 6 pm' usually does.",
    "Leave buffer. Don't fill every minute. Surprises happen. A half-empty calendar usually beats a full one."
  ],
  workedExample: {
    prompt:
      "It's Sunday night. You have a math quiz Friday, a soccer game Saturday, a friend's birthday party Wednesday, and a book to finish for class by Thursday. How do you plan?",
    steps: [
      "Three biggest: math quiz prep, book read, party gift (party itself is fixed).",
      "Schedule each: book = 30 min Mon + 30 min Tue + 30 min Wed before party. Math quiz prep = Wed + Thu evening. Gift = Mon after school.",
      "Buffer: leave Thursday after dinner open in case math review needs more time.",
      "Sketch the week on paper. Cross items off as they're done."
    ],
    answer: "Pick 3, schedule each to a day/time, leave buffer."
  },
  items: [
    {
      id: "g6.study.e.d4.q1",
      type: "multiple_choice",
      stem: "How long does a basic weekly plan usually take?",
      choices: ["Hours", "Multiple days", "10–15 minutes", "Never works"],
      answerIndex: 2,
      explanation: "A real planning session is short. Long planning often means avoiding the actual work.",
      hintLadder: [
        "How much planning is too much?",
        "Most of the value comes in the first 15 minutes.",
        "10-15 minutes."
      ]
    },
    {
      id: "g6.study.e.d4.q2",
      type: "multiple_choice",
      stem:
        "Which is the BEST 'task' to schedule?",
      choices: [
        "Sometime this week, study math.",
        "Whenever I feel like it: math.",
        "Soon: math.",
        "Tuesday after dinner: 30 minutes of math practice problems."
      ],
      answerIndex: 3,
      explanation: "Specific day + time + duration + content. Each detail makes it more likely to happen.",
      hintLadder: [
        "Which option has a day, time, and duration?",
        "Specific beats vague.",
        "Tuesday after dinner: 30 minutes of practice."
      ],
      misconceptionsTargeted: ["someday-isnt-a-day"]
    },
    {
      id: "g6.study.e.d4.q3",
      type: "multiple_choice",
      stem: "Why leave BUFFER (unscheduled time) in your week?",
      choices: [
        "Surprises happen — a sick day, an extra-long homework, a friend who needs help. Buffer absorbs them.",
        "Laziness.",
        "Teachers prefer it.",
        "To look productive."
      ],
      answerIndex: 0,
      explanation: "Real life has surprises. A week with no buffer falls apart at the first one.",
      hintLadder: [
        "Will the week go exactly as planned?",
        "No.",
        "Buffer absorbs surprises."
      ]
    },
    {
      id: "g6.study.e.d4.q4",
      type: "multiple_choice",
      stem: "If you don't finish everything on Sunday's plan, what's the right response Monday?",
      choices: [
        "Give up and skip planning.",
        "Re-plan briefly Monday morning — move the unfinished item, drop something less important if needed.",
        "Pretend it didn't happen.",
        "Cram everything into one day."
      ],
      answerIndex: 1,
      explanation: "Plans are guides, not contracts. Adjust without quitting.",
      hintLadder: [
        "Is the plan a contract?",
        "No — a guide.",
        "Adjust and move on."
      ]
    },
    {
      id: "g6.study.e.d4.q5",
      type: "short_answer",
      stem:
        "Plan next week using the three-things method. Name your three biggest items and assign each to a specific day + time.",
      rubric: {
        level3: "Three specific items, each assigned to a specific day + time + duration. At least one unscheduled buffer block.",
        level2: "Three items but scheduling is vague.",
        level1: "Generic list."
      },
      exemplar:
        "Three: (1) finish history reading, (2) practice 20 piano scales daily, (3) prepare birthday gift for friend. Schedule: history reading Mon 7-7:45 PM; piano daily 6:30-6:50 PM; gift shopping Sat 11 AM. Buffer: Thursday evening open.",
      hintLadder: [
        "List the three biggest items.",
        "Assign each a day, time, and duration.",
        "Leave one block open as buffer."
      ]
    }
  ],
  reflectionPrompt: "Today you planned a week. What's one repeating thing that keeps slipping that the plan should protect?",
  misconceptionBank: [
    {
      id: "someday-isnt-a-day",
      label: "Schedules tasks to 'someday' or 'soon'",
      description: "Lists tasks without specific times, then nothing happens.",
      coachMove: "If it's not on a specific day at a specific time, it's not a task. It's a wish."
    }
  ]
};
