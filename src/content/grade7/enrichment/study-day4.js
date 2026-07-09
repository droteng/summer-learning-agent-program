// Grade 7 Study Skills — Enrichment Day 4.
// Topic: weekly planning + prioritization.

export const grade7StudyDay4 = {
  id: "g7.study.e.d4",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Weekly planning and prioritization",
  topicTag: "weekly-planning",
  estimatedMinutes: 21,
  standardsRefs: ["CASEL.SelfManagement", "CASEL.ResponsibleDecisionMaking"],
  hook: "A week feels endless on Monday and impossible on Thursday. The difference is usually a plan. Today you learn to map a week and tell URGENT apart from IMPORTANT.",
  miniLesson: [
    "A weekly plan is a 10-minute Sunday habit: list everything due this week, estimate how long each piece takes, then place them into days. Seeing the whole week stops Thursday-night surprises.",
    "Urgent means due soon and loud. Important means it matters to your goals, even if the deadline is far away. The trap is spending all week on urgent-but-unimportant things while important work quietly slips.",
    "A priority tool: sort tasks into four boxes — (1) urgent AND important, do first; (2) important but not urgent, schedule it; (3) urgent but not important, do it fast or ask for help; (4) neither, drop it."
  ],
  workedExample: {
    prompt:
      "It's Sunday. Maya has: a book report due Friday (big), math homework due Monday (small), a science quiz to study for on Thursday, and a group chat 'reply everyone' request due 'now.' How does she plan the week?",
    steps: [
      "List + estimate: report 3 hrs, math 30 min, quiz study 1 hr, group-chat reply 5 min.",
      "Sort by urgent vs. important: math is urgent+important (do tonight); report is important-not-urgent (schedule across the week); quiz study is important-not-urgent (block Wed); the chat reply is urgent-not-important (handle in 5 min, don't let it eat the evening).",
      "Place into days: Mon math done; Tue + Wed 45 min each on the report; Wed also 1 hr quiz study; Thu light review; Fri report submitted.",
      "Protect the important work by scheduling it BEFORE the week fills up with small urgent things."
    ],
    answer: "Estimate every task, sort urgent vs. important, and schedule the important-but-not-urgent work into specific days before urgent noise crowds it out."
  },
  items: [
    {
      id: "g7.study.e.d4.q1",
      type: "multiple_choice",
      stem: "What's the difference between an URGENT task and an IMPORTANT task?",
      choices: [
        "Urgent tasks are always harder than important ones.",
        "Important tasks always have the closest deadline.",
        "They're the same thing.",
        "Urgent means the deadline is soon; important means it matters to your goals — a task can be one, both, or neither."
      ],
      answerIndex: 3,
      explanation: "Urgent is about the deadline being near; important is about how much it matters. A loud, soon-due task isn't automatically important, and a task that matters a lot may not be due yet.",
      hintLadder: [
        "One word is about TIME; the other is about VALUE.",
        "Urgent = due soon. Important = matters to your goals.",
        "They're different axes — a task can be one, both, or neither."
      ],
      misconceptionsTargeted: ["urgent-equals-important"]
    },
    {
      id: "g7.study.e.d4.q2",
      type: "multiple_choice",
      stem: "A big project is due in 10 days (important, not yet urgent). What's the smartest move on your weekly plan?",
      choices: [
        "Ignore it until the day before — it's not urgent yet.",
        "Schedule small chunks of it into several days this week, before urgent things crowd it out.",
        "Do the entire thing in one marathon session tonight.",
        "Wait for it to become urgent so you'll feel motivated."
      ],
      answerIndex: 1,
      explanation: "Important-but-not-urgent work is exactly what should be SCHEDULED early. Breaking it into chunks across days protects it from being crushed when small urgent tasks pile up.",
      hintLadder: [
        "Important-not-urgent work gets 'scheduled,' not ignored.",
        "If you wait, urgent tasks will fill the week first.",
        "Break it into chunks placed across several days."
      ]
    },
    {
      id: "g7.study.e.d4.q3",
      type: "multiple_choice",
      stem: "Which of these is an URGENT-but-NOT-important task best handled fast (or delegated)?",
      choices: [
        "A 'reply to everyone in the group chat right now' ping that doesn't affect your grade.",
        "Studying for Thursday's big test.",
        "Starting the essay that's due next week.",
        "Sleeping enough before the quiz."
      ],
      answerIndex: 0,
      explanation: "The group-chat ping feels urgent (loud, 'now') but doesn't matter to your goals — handle it quickly and move on. The others are genuinely important.",
      hintLadder: [
        "Which one is LOUD and soon, but doesn't affect your goals?",
        "The others all matter to your grades or health.",
        "The 'reply now' chat ping."
      ]
    },
    {
      id: "g7.study.e.d4.q4",
      type: "numeric",
      stem: "On Sunday you list this week's tasks and estimate: book report 180 min, math 30 min, quiz study 60 min, chores 30 min. How many total minutes of work does your week hold?",
      answer: 300,
      tolerance: 0,
      unit: "minutes",
      explanation: "180 + 30 + 60 + 30 = 300 minutes total — that's the number you spread across the week's days.",
      hintLadder: [
        "Add every estimate together.",
        "180 + 30 + 60 + 30.",
        "The sum is 300."
      ]
    },
    {
      id: "g7.study.e.d4.q5",
      type: "short_answer",
      stem:
        "Plan your real upcoming week. List at least three tasks with time estimates, label each as urgent, important, both, or neither, and say which day you'll do each.",
      rubric: {
        level3: "Three or more real tasks, each with a time estimate, an urgent/important label, and a specific day assigned.",
        level2: "Has the tasks and days but skips estimates or the urgent/important labels.",
        level1: "A vague to-do list with no estimates, labels, or days."
      },
      exemplar:
        "1) Science project — 120 min, important not urgent — split across Tue/Thu. 2) Math homework — 30 min, urgent + important — Monday. 3) Clean room — 20 min, neither — Saturday. I'll do the project early so it doesn't collide with the math deadline.",
      hintLadder: [
        "List three real tasks and estimate each one's time.",
        "Label each urgent, important, both, or neither.",
        "Assign each task to a specific day."
      ]
    }
  ],
  reflectionPrompt: "Sorting urgent from important is a lifelong skill. What's one 'urgent' thing that usually eats your week without actually mattering — and how will you shrink it?",
  misconceptionBank: [
    {
      id: "urgent-equals-important",
      label: "Treats every urgent thing as important",
      description: "Reacts to whatever is loudest and soonest, spending the week on urgent-but-unimportant tasks while important work slips.",
      coachMove: "Ask: if you finished only ONE thing this week, would this be it? Loud and soon isn't the same as mattering — schedule the important work first."
    }
  ]
};
