// Grade 7 Study Skills — Enrichment Day 1.
// Topic: deep work + time-blocking.

export const grade7StudyDay1 = {
  id: "g7.study.e.d1",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Deep work and time-blocking",
  topicTag: "deep-work",
  estimatedMinutes: 20,
  standardsRefs: ["CASEL.SelfManagement"],
  hook: "Your best thinking happens in long, unbroken stretches — but those stretches don't just appear. You have to defend them on purpose. Today you learn to time-block for deep work.",
  miniLesson: [
    "Deep work is focused, single-task effort on something cognitively demanding — writing, problem-solving, understanding a hard idea. It's the opposite of 'shallow' busywork like sorting notifications.",
    "Time-blocking means giving every task a slot on a schedule BEFORE the day starts, instead of reacting all day. A protected block is a promise you make to your future self.",
    "Multitasking is a myth for hard work. Each time you switch tasks, your brain pays a 'switch cost' — it takes several minutes to re-load the problem. Single-tasking inside a protected block avoids that tax."
  ],
  workedExample: {
    prompt:
      "Jordan has a science project draft due in two days and 90 free minutes this afternoon. He also keeps getting group-chat pings. How does he time-block for deep work?",
    steps: [
      "Name ONE deep task for the block: 'draft the Methods section of the project.'",
      "Block it: 3:00–3:50 PM is the deep-work block, written on his schedule, phone in another room.",
      "Batch the shallow stuff: he replies to the group chat during a single 3:50–4:00 window, not scattered across the block.",
      "Protect it: a note on the door says 'deep work til 3:50' so nobody interrupts."
    ],
    answer: "One named deep task, a defended 50-minute block, and notifications batched to the end."
  },
  items: [
    {
      id: "g7.study.e.d1.q1",
      type: "multiple_choice",
      stem: "Which activity is DEEP work rather than shallow work?",
      choices: [
        "Reorganizing the folders on your desktop.",
        "Skimming notifications during class.",
        "Working through a hard proof and writing your reasoning step by step.",
        "Copying a definition word-for-word off a slide."
      ],
      answerIndex: 2,
      explanation: "Deep work is cognitively demanding and single-tasked. Working a hard proof and explaining your reasoning stretches your thinking; the others are low-effort busywork.",
      hintLadder: [
        "Which one is mentally HARD, not just busy?",
        "Copying and skimming don't stretch your thinking.",
        "Working the hard proof."
      ],
      misconceptionsTargeted: ["busy-equals-productive"]
    },
    {
      id: "g7.study.e.d1.q2",
      type: "multiple_choice",
      stem: "What is the main point of TIME-BLOCKING?",
      choices: [
        "You decide in advance what each slot of time is for, instead of reacting all day.",
        "You work as many total hours as possible.",
        "You never take any breaks.",
        "You do a little bit of everything at once."
      ],
      answerIndex: 0,
      explanation: "Time-blocking assigns each task a slot before the day starts, so you follow a plan instead of reacting to whatever interrupts you.",
      hintLadder: [
        "It's about deciding WHEN, ahead of time.",
        "The enemy is reacting all day.",
        "Plan each slot in advance."
      ]
    },
    {
      id: "g7.study.e.d1.q3",
      type: "multiple_choice",
      stem: "Why does switching between homework and your phone every few minutes hurt your work?",
      choices: [
        "Phones physically damage your eyes over minutes.",
        "It's against most school rules.",
        "It makes homework take fewer minutes.",
        "Each switch has a 'switch cost' — your brain needs several minutes to re-load the task, so you never get deep."
      ],
      answerIndex: 3,
      explanation: "Task-switching carries a switch cost: attention residue from the last task lingers and you lose minutes re-loading the problem each time.",
      hintLadder: [
        "Think about what your brain has to do each time you come back.",
        "It has to re-load the problem.",
        "That re-loading time is the 'switch cost.'"
      ],
      misconceptionsTargeted: ["multitasking-works"]
    },
    {
      id: "g7.study.e.d1.q4",
      type: "numeric",
      stem: "You block 4:00–4:45 PM for deep work. You single-task the whole time. If task-switching would have cost you 4 minutes of re-loading per interruption and you avoided 5 interruptions, how many minutes of focused time did you protect?",
      answer: 20,
      tolerance: 0,
      unit: "minutes",
      explanation: "5 interruptions × 4 minutes of re-loading each = 20 minutes saved by not switching.",
      hintLadder: [
        "Each avoided interruption saves the same amount.",
        "Multiply the cost per interruption by the number avoided.",
        "5 × 4 = 20."
      ]
    },
    {
      id: "g7.study.e.d1.q5",
      type: "short_answer",
      stem:
        "Design ONE deep-work block for something real you need to do this week. Name the single task, the exact start–end time, and one thing you'll do to defend the block from interruptions.",
      rubric: {
        level3: "One specific single task (not a vague goal), an exact start–end time, and a concrete defense against interruption (e.g., phone in another room, sign on door).",
        level2: "Has a task and a time, but the defense is missing or vague.",
        level1: "Generic 'I'll study' plan with no single task or defense."
      },
      exemplar:
        "Task: write the intro paragraph of my book report. Block: 5:00–5:40 PM. Defense: phone charging in the kitchen, and I tell my brother I'm unavailable until 5:40.",
      hintLadder: [
        "Pick ONE specific task, not 'study.'",
        "Give it an exact start and end time.",
        "Add one way you'll block interruptions."
      ]
    }
  ],
  reflectionPrompt: "You just defended a block of deep work. What is the single biggest interruption you'll have to design around — and how will you handle it next time?",
  misconceptionBank: [
    {
      id: "multitasking-works",
      label: "Believes multitasking saves time",
      description: "Thinks doing homework while replying to messages is efficient, when each switch actually costs minutes of re-loading.",
      coachMove: "Ask: how long does it take you to remember exactly where you were after a text? That gap, times every interruption, is what single-tasking gives back."
    },
    {
      id: "busy-equals-productive",
      label: "Confuses being busy with doing deep work",
      description: "Fills time with easy, shallow tasks (sorting, copying, skimming) and feels productive without doing the hard thinking that matters.",
      coachMove: "Ask which task on the list actually required hard thinking. Protect a block for that one first."
    }
  ]
};
