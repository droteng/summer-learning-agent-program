// Grade 6 Math — Week 4, Day 2.
// Topic: logic puzzles (truth tables, simple deduction).

export const grade6MathWeek4Day2 = {
  id: "g6.math.w4.d2",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Math",
  topic: "Logic and deduction",
  topicTag: "logic",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.EE.B.5"],
  hook: "Code follows logic. Today you solve puzzles the way a computer does — one rule at a time.",
  miniLesson: [
    "AND means both sides are true. OR means at least one side is true. NOT flips true to false.",
    "If statements only run when their condition is true. Combine AND/OR/NOT to make precise rules.",
    "Process of elimination: rule out impossible cases first, then see what's left."
  ],
  workedExample: {
    prompt:
      "A robot only enters a room if the door is open AND the lights are on. The door is open. The lights are off. Does the robot enter?",
    steps: [
      "Rule: enter ⇔ (door open) AND (lights on).",
      "Door open: true.",
      "Lights on: false.",
      "true AND false = false. Robot does not enter."
    ],
    answer: "No — the AND fails because one side is false."
  },
  items: [
    {
      id: "g6.math.w4.d2.q1",
      type: "multiple_choice",
      stem: "true AND false evaluates to:",
      choices: ["false", "true", "either", "error"],
      answerIndex: 0,
      explanation: "AND requires both sides true. Any false on either side makes the whole expression false.",
      hintLadder: [
        "What does AND require?",
        "If either side is false, the result is...",
        "false."
      ]
    },
    {
      id: "g6.math.w4.d2.q2",
      type: "multiple_choice",
      stem: "true OR false evaluates to:",
      choices: ["either", "false", "true", "error"],
      answerIndex: 2,
      explanation: "OR is true when at least one side is true. true here is enough.",
      hintLadder: [
        "OR is true when at least one side is true.",
        "Is at least one side true here?",
        "Yes — true OR false is true."
      ]
    },
    {
      id: "g6.math.w4.d2.q3",
      type: "multiple_choice",
      stem:
        "A rule says: a pet is allowed in the park if (it is a dog) OR (it is on a leash). My cat is on a leash. Allowed?",
      choices: ["Not allowed", "Allowed", "Need more info", "Only if it's also a dog"],
      answerIndex: 1,
      explanation: "OR is satisfied if either side is true. The cat is on a leash, so the rule allows it.",
      hintLadder: [
        "Is OR satisfied if just one side is true?",
        "Which side is true here?",
        "On-a-leash is true, so allowed."
      ],
      misconceptionsTargeted: ["thinks-or-means-both"]
    },
    {
      id: "g6.math.w4.d2.q4",
      type: "multiple_choice",
      stem:
        "Three friends have one pet each. Maya owns a fish. Leo doesn't own a dog. Sam owns a cat. Who owns the dog?",
      choices: ["Maya", "Leo", "Sam", "Nobody"],
      answerIndex: 3,
      explanation:
        "Maya owns a fish. Sam owns a cat. Leo doesn't own a dog. Each owns exactly one pet, so nobody owns the dog.",
      hintLadder: [
        "Cross out the pets each person already owns.",
        "Leo doesn't own a dog — what's left?",
        "Each owns one. No dog is left to own."
      ]
    },
    {
      id: "g6.math.w4.d2.q5",
      type: "short_answer",
      stem:
        "Write a rule for a school bus: who can ride? Use AND, OR, or NOT to combine at least two conditions.",
      rubric: {
        level3: "Uses AND/OR/NOT explicitly and combines at least two specific conditions (e.g., grade level + permission slip).",
        level2: "Combines conditions in plain language without naming AND/OR/NOT.",
        level1: "Single condition or restates the prompt."
      },
      exemplar:
        "A student can ride if (they are in grades K-8) AND (they have a signed permission slip) AND NOT (they have been suspended this week).",
      hintLadder: [
        "Pick two conditions a real school would check.",
        "Join them with AND.",
        "Add a NOT if there's a disqualifier."
      ]
    }
  ],
  reflectionPrompt: "Today you used logic operators. Where in your day do you see real AND, OR, or NOT rules?",
  misconceptionBank: [
    {
      id: "thinks-or-means-both",
      label: "Thinks OR requires both sides",
      description: "Reads 'cat OR dog' as 'cat and dog' — assumes OR is restrictive.",
      coachMove: "Use everyday OR: 'pizza or pasta' means at least one is fine."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Logic Lock",
      prompt:
        "A treasure box opens only if: (the key is gold) AND (NOT raining). The key is gold. It is raining. Does the box open? Why?",
      answer:
        "No. The rule needs BOTH sides true. 'NOT raining' is false because it IS raining, so true AND false = false — the box stays locked.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Logic-Gate Gadget",
      challenge:
        "Design an imaginary smart gadget (a treehouse door, a snack vending bot, a homework alarm) that opens or acts only when a logic rule is satisfied. Write the rule using AND, OR, and NOT, then test it on 3 situations.",
      steps: [
        "Name your gadget and what it does when its rule is true.",
        "Write the rule combining at least two conditions with AND, OR, or NOT.",
        "Make a tiny table: 3 situations and whether the gadget acts (true) or not (false).",
        "Double-check each row by evaluating the AND/OR/NOT step by step."
      ],
      deliverable: "A gadget card: its rule in AND/OR/NOT, plus a 3-row truth table you checked.",
      choiceBoard: [
        "Write the rule and the 3-row truth table.",
        "Draw the gadget with a 'logic panel' showing the conditions lighting up green/red.",
        "Make a comic where someone tries 3 times to trigger the gadget and only the matching rule works."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Logic Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.math.w4.d2.arena1",
          type: "multiple_choice",
          stem:
            "A gate opens if: (badge scanned) AND (NOT after 9pm). The badge is scanned. The time is 10pm. Does the gate open?",
          choices: [
            "Yes — the badge was scanned",
            "No — it is after 9pm, so NOT after 9pm is false",
            "Yes — OR makes it true",
            "Need more information"
          ],
          answerIndex: 1,
          explanation:
            "The rule uses AND, so both sides must be true. 'NOT after 9pm' is false at 10pm, so true AND false = false. The gate stays shut.",
          hintLadder: [
            "AND needs BOTH sides true.",
            "Is 'NOT after 9pm' true or false at 10pm?",
            "It's false, so true AND false = false — gate stays closed."
          ]
        },
        {
          id: "g6.math.w4.d2.arena2",
          type: "multiple_choice",
          stem:
            "Three friends each play one different sport: soccer, tennis, or chess. Ann does NOT play soccer. Ben plays chess. Who plays soccer?",
          choices: ["Ann", "Ben", "Cara", "Nobody"],
          answerIndex: 2,
          explanation:
            "Ben plays chess, so the third friend Cara is left. Ann doesn't play soccer, so Cara must. (Ann then plays tennis.)",
          hintLadder: [
            "Ben is taken by chess — cross him off for soccer.",
            "Ann does NOT play soccer — cross her off too.",
            "Only Cara is left for soccer."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: AND/OR Freeze Game",
      prompt:
        "Move while a rule is true! Rule: keep dancing if (music is playing) AND (NOT touching the floor with your hands). When the rule turns false, FREEZE. Play 3 rounds with a friend calling out changes.",
      scienceTieIn: "Fast start-and-stop movement trains your brain and muscles to react quickly together, sharpening coordination.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you meet a real AND, OR, or NOT rule today (a game, a door code, a 'you can go if...')? Write the rule using one of those words.",
      badge: { id: "logic-detective", name: "Logic Detective", emoji: "🕵️" },
      estimatedMinutes: 7
    }
  }
};
