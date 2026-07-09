// Grade 5 Summer — Week 4, Day 2.
// Topic: logic and deduction (grade-5 depth: everyday AND/OR/NOT rules and
// simple process-of-elimination puzzles).

export const summerG5MathW4D2 = {
  id: "g5.summer.math.w4.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Math",
  topic: "Logic and deduction",
  topicTag: "logic",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.OA.B.3", "CCSS.5.OA.A.1"],
  hook: "Code follows logic. Today you solve puzzles the way a computer does — one clear rule at a time.",
  miniLesson: [
    "AND means BOTH parts must be true. If even one part is false, the whole AND rule is false.",
    "OR means AT LEAST ONE part is true. NOT flips it: NOT true is false, and NOT false is true.",
    "Process of elimination: cross out what can't be true first, then see what's left."
  ],
  workedExample: {
    prompt:
      "A robot enters the room only if the door is open AND the lights are on. The door is open. The lights are OFF. Does the robot enter?",
    steps: [
      "Rule: enter = (door open) AND (lights on).",
      "Door open? Yes — true.",
      "Lights on? No — false.",
      "true AND false = false, because AND needs BOTH to be true. The robot does not enter."
    ],
    answer: "No — AND needs both true, and the lights are off."
  },
  items: [
    {
      id: "g5.summer.math.w4.d2.q1",
      type: "multiple_choice",
      stem: "true AND false is:",
      choices: ["true", "either one", "false", "an error"],
      answerIndex: 2,
      explanation: "AND needs BOTH parts true. One false part makes the whole thing false.",
      hintLadder: [
        "What does AND need from BOTH parts?",
        "If one part is false, the whole AND is...",
        "false."
      ]
    },
    {
      id: "g5.summer.math.w4.d2.q2",
      type: "multiple_choice",
      stem: "true OR false is:",
      choices: ["false", "true", "either one", "an error"],
      answerIndex: 1,
      explanation: "OR is true when AT LEAST ONE part is true. One true part is enough.",
      hintLadder: [
        "OR is true if at least one part is true.",
        "Is at least one part true here?",
        "Yes — so true OR false is true."
      ]
    },
    {
      id: "g5.summer.math.w4.d2.q3",
      type: "multiple_choice",
      stem:
        "Pool rule: you may swim if (you are with an adult) OR (you passed the swim test). Sam did NOT bring an adult, but Sam passed the swim test. May Sam swim?",
      choices: ["Only if also with an adult", "No, may not swim", "Need more info", "Yes, may swim"],
      answerIndex: 3,
      explanation: "OR only needs one part true. Sam passed the swim test, so the rule allows it.",
      hintLadder: [
        "Does OR need BOTH parts, or just one?",
        "Which part is true for Sam?",
        "'Passed the swim test' is true, so Sam may swim."
      ],
      misconceptionsTargeted: ["thinks-or-means-both"]
    },
    {
      id: "g5.summer.math.w4.d2.q4",
      type: "multiple_choice",
      stem:
        "Three friends each brought one different summer treat: popsicle, watermelon, or lemonade. Mia brought watermelon. Leo did NOT bring a popsicle. Who brought the popsicle?",
      choices: ["Zoe", "Leo", "Mia", "Nobody"],
      answerIndex: 0,
      explanation:
        "Mia has watermelon, so cross her off. Leo did NOT bring a popsicle, so cross Leo off too. Only Zoe is left for the popsicle.",
      hintLadder: [
        "Mia brought watermelon — cross her off for popsicle.",
        "Leo did NOT bring a popsicle — cross Leo off too.",
        "Only Zoe is left, so Zoe brought the popsicle."
      ]
    },
    {
      id: "g5.summer.math.w4.d2.q5",
      type: "short_answer",
      stem:
        "Write a rule for who can join the summer camp field trip. Use AND, OR, or NOT to combine at least two conditions.",
      rubric: {
        level3: "Uses AND, OR, or NOT clearly and combines at least two specific conditions (for example: signed permission slip AND wearing sneakers).",
        level2: "Combines two conditions in plain words but doesn't clearly name AND/OR/NOT.",
        level1: "Only one condition, or just restates the prompt."
      },
      exemplar:
        "A camper can go on the trip if (they have a signed permission slip) AND (they brought a water bottle) AND NOT (they are feeling sick).",
      hintLadder: [
        "Pick two things a real camp would check before a trip.",
        "Join them with AND.",
        "Add a NOT for something that would stop a camper from going."
      ]
    }
  ],
  reflectionPrompt: "Today you used AND, OR, and NOT. Where in your day did you meet a real 'you can do this if...' rule?",
  misconceptionBank: [
    {
      id: "thinks-or-means-both",
      label: "Thinks OR needs both parts",
      description: "Reads 'popsicle OR lemonade' as needing both — treats OR like AND.",
      coachMove: "Use an everyday OR: 'you can have pizza OR pasta' means at least one is fine, not both."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Logic Lock",
      prompt:
        "A treasure box opens only if: (the key is gold) AND (NOT raining). The key IS gold. It IS raining. Does the box open? Why?",
      answer:
        "No. The rule needs BOTH parts true. 'NOT raining' is false because it IS raining, so true AND false = false — the box stays locked.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Logic-Rule Gadget",
      challenge:
        "Design a make-believe smart gadget (a treehouse door, a snack robot, a sprinkler that turns on) that only acts when a logic rule is true. Write the rule using AND, OR, and NOT, then test it on 3 situations.",
      steps: [
        "Name your gadget and say what it does when its rule is true.",
        "Write the rule, joining at least two conditions with AND, OR, or NOT.",
        "Make a tiny table: 3 situations, and whether the gadget acts (true) or not (false).",
        "Check each row by working out the AND/OR/NOT one step at a time."
      ],
      deliverable: "A gadget card: its rule using AND/OR/NOT, plus a 3-row table you checked.",
      choiceBoard: [
        "Write the rule and the 3-row true/false table.",
        "Draw the gadget with a 'logic panel' showing the conditions glowing green or red.",
        "Make a comic where someone tries 3 times and only the matching rule makes the gadget work."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Logic Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.math.w4.d2.arena1",
          type: "multiple_choice",
          stem:
            "A gate opens if: (you scanned your badge) AND (NOT after 8pm). You scanned your badge. It is 9pm. Does the gate open?",
          choices: [
            "Yes — the badge was scanned",
            "No — it is after 8pm, so 'NOT after 8pm' is false",
            "Yes — OR makes it true",
            "Need more info"
          ],
          answerIndex: 1,
          explanation:
            "The rule uses AND, so BOTH parts must be true. 'NOT after 8pm' is false at 9pm, so true AND false = false. The gate stays shut.",
          hintLadder: [
            "AND needs BOTH parts true.",
            "Is 'NOT after 8pm' true or false at 9pm?",
            "It's false, so true AND false = false — the gate stays closed."
          ]
        },
        {
          id: "g5.summer.math.w4.d2.arena2",
          type: "multiple_choice",
          stem:
            "Three friends each play one different game: tag, cards, or checkers. Ann does NOT play tag. Ben plays checkers. Who plays tag?",
          choices: ["Ann", "Ben", "Nobody", "Cara"],
          answerIndex: 3,
          explanation:
            "Ben plays checkers, so cross him off. Ann does NOT play tag, so cross her off. Only Cara is left, so Cara plays tag. (Ann then plays cards.)",
          hintLadder: [
            "Ben plays checkers — cross him off for tag.",
            "Ann does NOT play tag — cross her off too.",
            "Only Cara is left, so Cara plays tag."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: AND/OR Freeze Game",
      prompt:
        "Keep dancing while the rule is true! Rule: dance if (music is playing) AND (NOT touching the floor with your hands). When the rule turns false, FREEZE. Play 3 rounds with a friend changing the situation.",
      scienceTieIn: "Fast start-and-stop movement trains your brain and muscles to react together, which sharpens your coordination.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you meet a real AND, OR, or NOT rule today (a game, a door code, a 'you can go if...')? Write the rule using one of those words.",
      badge: { id: "g5-summer-logic-detective", name: "Logic Detective", emoji: "🕵️" },
      estimatedMinutes: 7
    }
  }
};
