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
  estimatedMinutes: 16,
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
      choices: ["true", "false", "either", "error"],
      answerIndex: 1,
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
      choices: ["true", "false", "either", "error"],
      answerIndex: 0,
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
      choices: ["Allowed", "Not allowed", "Need more info", "Only if it's also a dog"],
      answerIndex: 0,
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
  ]
};
