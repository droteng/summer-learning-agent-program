// Grade 6 Coding — Week 4, Day 3.
// Topic: debugging (deeper than Week 1).

export const grade6CodingWeek4Day3 = {
  id: "g6.code.w4.d3",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Debugging strategies",
  topicTag: "debugging",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-17", "CSTA.2-AP-19"],
  hook: "Every coder writes bugs. The skill is finding them fast. Today you practice three real debugging moves.",
  miniLesson: [
    "Read the error message first. The line number and word are usually exactly where the problem is.",
    "Print the variable. If the code does something unexpected, print what each variable holds at each step.",
    "Make the problem smaller. If a 50-line program is broken, comment out half. Find the broken half. Repeat."
  ],
  workedExample: {
    prompt:
      "This code is supposed to print 1 to 5 but prints nothing. What's wrong?\n\n  for i in range(5, 0):\n    print(i)",
    steps: [
      "Read the loop. range(5, 0) means 'start at 5, go up to 0' — which never happens.",
      "Print the range to confirm: list(range(5, 0)) is [].",
      "Fix it by swapping the bounds: range(1, 6) gives 1, 2, 3, 4, 5.",
      "Bug: argument order. Fix: range(1, 6)."
    ],
    answer: "range(5, 0) is empty; use range(1, 6) instead."
  },
  items: [
    {
      id: "g6.code.w4.d3.q1",
      type: "multiple_choice",
      stem: "What's the first thing to do when you see an error message?",
      choices: [
        "Delete the file and start over.",
        "Ask someone else immediately.",
        "Restart the computer.",
        "Read the error message and the line number."
      ],
      answerIndex: 3,
      explanation: "Error messages name the exact line and usually the exact problem. Reading them first saves time.",
      hintLadder: [
        "The computer is telling you where the bug is.",
        "Where does it say to look?",
        "Read the line number and message."
      ]
    },
    {
      id: "g6.code.w4.d3.q2",
      type: "multiple_choice",
      stem:
        "This code is supposed to compute average but always gives 0:\n\n  total = 0\n  count = 0\n  average = total / 1\n\nWhat's the bug?",
      choices: [
        "Missing parentheses",
        "average should be total / count, not total / 1",
        "Variables should be capitalized",
        "There is no bug"
      ],
      answerIndex: 1,
      explanation: "The code divides by 1, not by count. With total=0 and count=0, this would also need a divide-by-zero guard, but the bigger issue is the constant 1.",
      hintLadder: [
        "Read each line. What does the third line actually compute?",
        "total / 1 just gives total.",
        "Should divide by count, not 1."
      ]
    },
    {
      id: "g6.code.w4.d3.q3",
      type: "multiple_choice",
      stem: "Your 80-line program crashes somewhere in the middle. Best next step?",
      choices: [
        "Print everything from line 1.",
        "Rewrite the entire program.",
        "Comment out half the code, run it, see if it still crashes.",
        "Just try random fixes."
      ],
      answerIndex: 2,
      explanation: "Bisection: cut the suspected region in half each time. Two or three passes narrow the bug down fast.",
      hintLadder: [
        "Think binary search.",
        "Comment out half.",
        "If it still crashes, the bug's in the remaining half."
      ],
      misconceptionsTargeted: ["random-fix"]
    },
    {
      id: "g6.code.w4.d3.q4",
      type: "numeric",
      stem: "Trace this:\n\n  total = 0\n  for i in [1, 2, 3]:\n    total = total + i\n  print(total)\n\nWhat prints?",
      answer: 6,
      tolerance: 0,
      hintLadder: [
        "Total starts at 0.",
        "Add 1, then 2, then 3.",
        "0 + 1 + 2 + 3 = 6."
      ],
      explanation: "The loop sums 1 + 2 + 3 = 6."
    },
    {
      id: "g6.code.w4.d3.q5",
      type: "short_answer",
      stem:
        "Your friend's code is supposed to count even numbers but always returns 0. Describe two things you would check first.",
      rubric: {
        level3: "Names two specific checks (e.g., 'print the loop counter', 'check the % 2 condition is == 0 not = 0'). Both are debugging moves, not guesses.",
        level2: "Names one specific check + one vague suggestion.",
        level1: "Generic 'rewrite it' or 'ask someone'."
      },
      exemplar:
        "First I'd print the loop variable to confirm the loop is running. Then I'd check the condition — `n % 2 == 0` not `n % 2 = 0`.",
      hintLadder: [
        "What can you print to see what's happening?",
        "Look at the condition — = vs == is a common bug.",
        "Combine: print + condition check."
      ]
    }
  ],
  reflectionPrompt: "Today you debugged on purpose. What's a bug you found in your own logic — not code — this week?",
  misconceptionBank: [
    {
      id: "random-fix",
      label: "Tries random fixes instead of isolating",
      description: "Changes things hoping the bug disappears without first locating where it lives.",
      coachMove: "Slow down. Make the smallest change that proves where the bug isn't, then repeat until only the bug is left."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spot the Bug",
      prompt:
        "This code should print the numbers 1, 2, 3 but prints nothing:\n\n  for i in range(3, 0):\n    print(i)\n\nWhat is wrong, and how would you fix it?",
      answer:
        "range(3, 0) starts at 3 and counts UP toward 0, so it's empty and never loops. Fix the bounds: range(1, 4) gives 1, 2, 3.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Bug Hunter's Field Guide",
      challenge:
        "Make a 'Bug Field Guide' card for one type of bug you've met (typo, wrong order, = vs ==, off-by-one, divide-by-zero). Give it a name, a warning sign that reveals it, and the debugging move that catches it.",
      steps: [
        "Pick one bug and give it a catchy creature name (like 'The Sneaky Equals').",
        "Describe the warning sign — what goes wrong when this bug is loose.",
        "Write the debugging move that traps it (print a variable? read the error? bisect?).",
        "Add a tiny code example showing the bug and its fix."
      ],
      deliverable: "A field-guide card: bug name, warning sign, the trap, and a before/after code snippet.",
      choiceBoard: [
        "Write the field-guide card as text with the code example.",
        "Draw the bug as a monster with a 'weakness' label showing how to defeat it.",
        "Make a 3-panel comic: the bug strikes, the coder investigates, the fix wins."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.code.w4.d3.arena1",
          type: "multiple_choice",
          stem:
            "This should count to 3 but loops forever:\n\n  i = 0\n  while i < 3:\n    print(i)\n\nWhat is the bug?",
          choices: [
            "i is never increased, so i < 3 stays true forever",
            "range should be used instead of while",
            "print can't go inside a while loop",
            "There is no bug"
          ],
          answerIndex: 0,
          explanation:
            "The loop never changes i, so the condition i < 3 is always true. Adding i = i + 1 inside the loop fixes it.",
          hintLadder: [
            "What has to change for the condition to eventually become false?",
            "Look for where i gets updated — does it?",
            "i never increases, so i < 3 is forever true."
          ]
        },
        {
          id: "g6.code.w4.d3.arena2",
          type: "numeric",
          stem:
            "After fixing a bug, you trace the corrected code:\n\n  total = 0\n  for i in [2, 4, 6]:\n    total = total + i\n  print(total)\n\nWhat prints?",
          answer: 12,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Total starts at 0.",
            "Add each list value in turn: 2, then 4, then 6.",
            "0 + 2 + 4 + 6 = 12."
          ],
          explanation: "The loop sums 2 + 4 + 6 = 12."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Reset & Breathe",
      prompt:
        "Stuck-on-a-bug feeling? Stand up, take 4 slow breaths (in for 4 counts, out for 4), roll your shoulders, and shake out your hands. Then look at the problem with fresh eyes.",
      scienceTieIn: "Slow breathing tells your nervous system to calm down, lowering stress hormones so your thinking brain can work clearly again.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time you were stuck — on code or anything else. What 'debugging move' (slow down, break it smaller, ask what changed) helped you find the problem?",
      badge: { id: "bug-buster", name: "Bug Buster", emoji: "🐛" },
      estimatedMinutes: 7
    }
  }
};
