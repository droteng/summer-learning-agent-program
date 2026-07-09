// Grade 5 Summer — Week 4, Day 3.
// Topic: debugging strategies (grade-5 depth: read the message, check your
// steps, and make the problem smaller — with block-style pseudocode).

export const summerG5CodingW4D3 = {
  id: "g5.summer.code.w4.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Debugging strategies",
  topicTag: "debugging",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-15", "CSTA.1B-AP-11"],
  hook: "Every coder makes mistakes — they're called bugs. The real skill is finding them fast. Today you practice three debugging moves like a detective.",
  miniLesson: [
    "Read the clue first. When the computer shows a message, it usually tells you the exact line where the bug lives.",
    "Check your steps one at a time. Slow down and ask: what does each line actually do? Say the value out loud.",
    "Make the problem smaller. If a long list of steps is broken, test just the first half. Find the broken half, then look closer there."
  ],
  workedExample: {
    prompt:
      "This should count 1, 2, 3 but counts NOTHING:\n  REPEAT for each number from 3 down to 1... wait, the rule says 'from 3 UP to 1'\n  So the loop starts at 3 and goes UP to 1. What's wrong?",
    steps: [
      "Read the loop: it starts at 3 and tries to go UP to 1.",
      "But 3 is already bigger than 1, so it never runs — that's the bug.",
      "Fix it: start at 1 and go UP to 3.",
      "Now it counts 1, 2, 3."
    ],
    answer: "The start and end are backwards; go from 1 up to 3 instead."
  },
  items: [
    {
      id: "g5.summer.code.w4.d3.q1",
      type: "multiple_choice",
      stem: "What is the FIRST thing to do when the computer shows you an error message?",
      choices: [
        "Read the message and the line it points to.",
        "Delete everything and start over.",
        "Turn the computer off and on.",
        "Give up right away."
      ],
      answerIndex: 0,
      explanation: "The message usually names the exact line and the problem. Reading it first saves you time.",
      hintLadder: [
        "The computer is trying to help you find the bug.",
        "Where does it tell you to look?",
        "Read the message and the line number it points to."
      ]
    },
    {
      id: "g5.summer.code.w4.d3.q2",
      type: "multiple_choice",
      stem:
        "This should give the average of two scores but always gives the first one:\n\n  total = score1 + score2\n  average = total\n\nWhat's the bug?",
      choices: [
        "The scores are spelled wrong.",
        "You can't add two scores.",
        "It forgot to DIVIDE the total by 2.",
        "There is no bug."
      ],
      answerIndex: 2,
      explanation: "To average two numbers you add them, THEN divide by 2. The code adds but never divides.",
      hintLadder: [
        "How do you find the average of TWO numbers?",
        "Add them, then... what?",
        "Divide the total by 2 — that step is missing."
      ]
    },
    {
      id: "g5.summer.code.w4.d3.q3",
      type: "multiple_choice",
      stem: "Your long list of steps is broken somewhere in the middle. What is the smartest next move?",
      choices: [
        "Rewrite the whole thing from scratch.",
        "Test just the first half to see if the bug is in there.",
        "Change random lines and hope it works.",
        "Add more steps to the end."
      ],
      answerIndex: 1,
      explanation: "Split the problem in half. Testing half tells you which half hides the bug, so you search less.",
      hintLadder: [
        "You don't have to check every line one by one.",
        "Cut the problem in half.",
        "Test the first half — if it's fine, the bug is in the second half."
      ],
      misconceptionsTargeted: ["random-fix"]
    },
    {
      id: "g5.summer.code.w4.d3.q4",
      type: "numeric",
      stem: "Trace this:\n\n  total = 0\n  REPEAT for each n in [2, 3, 5]:\n    total = total + n\n  SHOW total\n\nWhat does it show?",
      answer: 10,
      tolerance: 0,
      hintLadder: [
        "total starts at 0.",
        "Add 2, then 3, then 5, one at a time.",
        "0 + 2 + 3 + 5 = 10."
      ],
      explanation: "The loop adds 2 + 3 + 5 = 10."
    },
    {
      id: "g5.summer.code.w4.d3.q5",
      type: "short_answer",
      stem:
        "Your friend's program is supposed to count how many apples are red, but it always says 0. Describe two things you would CHECK first.",
      rubric: {
        level3: "Names two specific debugging checks (for example: 'show the counter to see if the loop runs' and 'check the rule that decides if an apple is red'). Both are real debugging moves, not guesses.",
        level2: "Names one specific check plus one vague idea.",
        level1: "Generic 'rewrite it' or 'ask someone' with no real check."
      },
      exemplar:
        "First I'd have it SHOW the count each time through the loop to see if the loop even runs. Then I'd check the rule that decides if an apple is 'red' — maybe it's checking the wrong color.",
      hintLadder: [
        "What could you SHOW on the screen to see what's happening?",
        "Look closely at the rule that decides 'is this apple red?'",
        "Put the two together: check the loop runs, then check the color rule."
      ]
    }
  ],
  reflectionPrompt: "Today you hunted bugs on purpose. What is a mistake in a plan (not code) that you caught and fixed this week?",
  misconceptionBank: [
    {
      id: "random-fix",
      label: "Tries random fixes instead of finding the bug",
      description: "Changes things hoping the bug disappears, without first figuring out WHERE the bug is.",
      coachMove: "Slow down. Make one small change that shows where the bug is NOT, then keep narrowing until only the bug is left."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spot the Bug",
      prompt:
        "This should show the numbers 1, 2, 3 but shows nothing:\n\n  REPEAT for each number from 3 UP to 1:\n    SHOW number\n\nWhat is wrong, and how would you fix it?",
      answer:
        "It starts at 3 and tries to count UP to 1, but 3 is already past 1, so the loop never runs. Fix it: count from 1 UP to 3 to get 1, 2, 3.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Bug Hunter's Field Guide",
      challenge:
        "Make a 'Bug Field Guide' card for one kind of bug you've met (a typo, steps in the wrong order, a missing step, or a backwards loop). Give it a name, a warning sign, and the debugging move that catches it.",
      steps: [
        "Pick one bug and give it a fun creature name (like 'The Backwards Loop').",
        "Describe the warning sign — what goes wrong when this bug is loose.",
        "Write the debugging move that traps it (show a value? read the message? test half?).",
        "Add a tiny before/after example showing the bug and its fix."
      ],
      deliverable: "A field-guide card: bug name, warning sign, the trap, and a before/after example.",
      choiceBoard: [
        "Write the field-guide card as text with the example.",
        "Draw the bug as a monster with a 'weakness' label showing how to beat it.",
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
          id: "g5.summer.code.w4.d3.arena1",
          type: "multiple_choice",
          stem:
            "This should stop at 3 but never stops:\n\n  count = 0\n  REPEAT while count < 3:\n    SHOW count\n\nWhat is the bug?",
          choices: [
            "SHOW cannot go inside a loop",
            "There is no bug",
            "The loop needs a name",
            "count never gets bigger, so 'count < 3' is always true"
          ],
          answerIndex: 3,
          explanation:
            "The loop never changes count, so 'count < 3' stays true forever. Adding 'count = count + 1' inside the loop fixes it.",
          hintLadder: [
            "What has to change so the loop can finally stop?",
            "Look for a line that makes count bigger — is there one?",
            "count never grows, so count < 3 is true forever."
          ]
        },
        {
          id: "g5.summer.code.w4.d3.arena2",
          type: "numeric",
          stem:
            "You fixed a bug, then trace the corrected steps:\n\n  total = 0\n  REPEAT for each n in [4, 5, 6]:\n    total = total + n\n  SHOW total\n\nWhat does it show?",
          answer: 15,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "total starts at 0.",
            "Add each list value in order: 4, then 5, then 6.",
            "0 + 4 + 5 + 6 = 15."
          ],
          explanation: "The loop adds 4 + 5 + 6 = 15."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Reset & Breathe",
      prompt:
        "Feeling stuck on a bug? Stand up, take 4 slow breaths (in for 4 counts, out for 4), roll your shoulders, and shake out your hands. Then look at the problem again with fresh eyes.",
      scienceTieIn: "Slow breathing tells your body to calm down, so your thinking brain can work clearly again.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time you were stuck — on code or anything else. What 'debugging move' (slow down, break it smaller, ask what changed) helped you find the problem?",
      badge: { id: "g5-summer-bug-buster", name: "Bug Buster", emoji: "🐛" },
      estimatedMinutes: 7
    }
  }
};
