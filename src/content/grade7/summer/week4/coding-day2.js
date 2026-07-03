// Grade 7 Coding/CS/AI — Summer Voyage, Week 4 ("Code Your First Tool"),
// Day 2. Topic: conditionals & boolean logic (AND/OR/NOT, nested if/else).

export const summerG7CodingW4D2 = {
  id: "g7.summer.code.w4.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Conditionals & boolean logic (AND/OR/NOT, nested if/else)",
  topicTag: "conditionals-boolean-logic",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-13"],
  hook: "Your tool has to make decisions: Is the answer correct? Did the player win? Boolean logic is how code decides — every condition is either TRUE or FALSE, and AND, OR, and NOT let you combine them into smart rules.",
  miniLesson: [
    "A boolean is a value that is either true or false. A condition like score >= 60 evaluates to one of those two.",
    "Combine conditions with logic: AND is true only when BOTH sides are true; OR is true when AT LEAST ONE side is true; NOT flips true to false and false to true.",
    "Nested if/else lets you check a second condition only after the first passes: IF logged in, THEN (IF admin, show panel, ELSE show menu)."
  ],
  workedExample: {
    prompt: "A player passes a level if score >= 50 AND lives > 0. A player has score = 70 and lives = 0. Do they pass?",
    steps: [
      "Evaluate the left side: score >= 50 → 70 >= 50 → true.",
      "Evaluate the right side: lives > 0 → 0 > 0 → false.",
      "AND is true only when BOTH sides are true.",
      "true AND false → false. The player does NOT pass."
    ],
    answer: "No — they do not pass (true AND false is false)."
  },
  items: [
    {
      id: "g7.summer.code.w4.d2.q1",
      type: "multiple_choice",
      stem: "A door unlocks if hasKey == true AND level >= 3. A player has hasKey = true and level = 2. Does the door unlock?",
      choices: [
        "Yes — hasKey is true, so that's enough",
        "No — level >= 3 is false (2 is not ≥ 3), and AND needs BOTH sides true",
        "Yes — AND only needs one side true",
        "It errors because level is too low"
      ],
      answerIndex: 1,
      explanation: "level >= 3 is 2 >= 3, which is false. AND requires both sides true, so true AND false is false — the door stays locked.",
      hintLadder: [
        "Evaluate each side separately first.",
        "Is 2 >= 3 true or false?",
        "AND needs BOTH true; one false side makes the whole thing false."
      ],
      misconceptionsTargeted: ["and-or-mixup"]
    },
    {
      id: "g7.summer.code.w4.d2.q2",
      type: "multiple_choice",
      stem: "A hint appears if the player is stuck OR has clicked 'help'. A player is NOT stuck but clicked 'help'. Does the hint appear?",
      choices: [
        "No — the player must be stuck",
        "Yes — OR is true when AT LEAST ONE side is true, and 'clicked help' is true",
        "No — OR needs both sides true",
        "Only if they are also stuck"
      ],
      answerIndex: 1,
      explanation: "OR is true when at least one condition is true. 'Clicked help' is true, so false OR true is true — the hint appears.",
      hintLadder: [
        "OR needs only one side to be true.",
        "One side (stuck) is false; the other (clicked help) is true.",
        "false OR true → true."
      ]
    },
    {
      id: "g7.summer.code.w4.d2.q3",
      type: "multiple_choice",
      stem: "A quiz marks an answer wrong if NOT (answer == correctAnswer). The player's answer equals the correct answer. Is it marked wrong?",
      choices: [
        "Yes — NOT always marks it wrong",
        "No — (answer == correctAnswer) is true, and NOT true is false, so it is NOT marked wrong",
        "Yes — because NOT flips it to true",
        "It depends on the score"
      ],
      answerIndex: 1,
      explanation: "The inner condition is true (answers match). NOT flips true to false, so the 'mark wrong' condition is false — the answer is counted correct.",
      hintLadder: [
        "Evaluate the inside first: answer == correctAnswer.",
        "They match, so the inside is true.",
        "NOT true is false, so it is not marked wrong."
      ],
      misconceptionsTargeted: ["not-always-true"]
    },
    {
      id: "g7.summer.code.w4.d2.q4",
      type: "numeric",
      stem: "Grading logic: IF score >= 90 return 4; ELSE IF score >= 80 return 3; ELSE IF score >= 70 return 2; ELSE return 1. A student has score = 85. What number is returned? (Enter the grade tier number.)",
      answer: 3,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Check the branches top to bottom and stop at the first true one.",
        "Is 85 >= 90? No. Is 85 >= 80? Yes.",
        "The first true branch (>= 80) returns 3, and the rest are skipped."
      ],
      explanation: "85 >= 90 is false, but 85 >= 80 is true, so it returns 3 and stops — later branches never run.",
      misconceptionsTargeted: ["ignores-elseif-order"]
    },
    {
      id: "g7.summer.code.w4.d2.q5",
      type: "short_answer",
      stem: "Write a rule (in words or pseudocode) for a game that awards a BONUS only when a player has BOTH a full health bar AND at least 3 coins, but NOT if they are in 'practice mode'. Use AND and NOT correctly.",
      rubric: {
        level3: "Correctly requires health full AND coins >= 3 joined by AND, and excludes practice mode using NOT (or 'and not'), with clear true/false logic.",
        level2: "Uses AND or NOT but one is misplaced or the practice-mode exclusion is unclear.",
        level1: "Missing AND, missing NOT, or logic that doesn't match the requirement."
      },
      exemplar: "IF (health == full) AND (coins >= 3) AND NOT (practiceMode) THEN award bonus. All three parts must be true for the bonus, and NOT practiceMode blocks it during practice.",
      hintLadder: [
        "You need two things to BOTH be true — which operator joins them?",
        "You need to BLOCK one case — which operator flips a condition?",
        "Combine: full AND coins >= 3 AND NOT practiceMode."
      ]
    }
  ],
  reflectionPrompt: "What is one decision your tool must make (correct/incorrect, win/lose, allowed/blocked)? Write the condition it would check.",
  misconceptionBank: [
    {
      id: "and-or-mixup",
      label: "Confuses AND with OR",
      description: "Treats AND as if only one side needs to be true, or treats OR as if both sides are required.",
      coachMove: "Say it aloud: AND = 'both must be true'; OR = 'at least one is enough'. Test each side separately first."
    },
    {
      id: "ignores-elseif-order",
      label: "Ignores that else-if stops at the first true branch",
      description: "Assumes every matching branch runs, instead of stopping at the first true condition.",
      coachMove: "Read top to bottom and circle the FIRST true condition — everything below it is skipped."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "True or False Face-Off",
      prompt:
        "A treasure chest opens if (gold >= 10) OR (hasMagicKey). You have gold = 4 and hasMagicKey = true. Does it open? And would you rather rely on the gold rule or the key rule? Work out the logic first!",
      answer:
        "gold >= 10 is 4 >= 10 → false. hasMagicKey → true. OR needs only one true side: false OR true → true. The chest OPENS thanks to the key.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Decision Flowchart",
      challenge:
        "Design the decision logic for your tool as a flowchart. Pick one thing it must decide, then draw the diamond-shaped decision boxes with true/false arrows out of each, including at least one AND, OR, or NOT.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Pick one decision your tool makes (pass/fail, win/lose, unlock/lock).",
        "Draw a decision diamond with the condition inside it.",
        "Add TRUE and FALSE arrows leading to what happens next.",
        "Add a second nested decision or a combined AND/OR/NOT condition."
      ],
      deliverable: "A decision flowchart with at least one nested if/else or a combined AND/OR/NOT condition.",
      choiceBoard: [
        "Draw the flowchart with labeled true/false arrows.",
        "Write the logic as if/else-if pseudocode with a NOT or AND in it.",
        "Make a truth table showing the outcome for every true/false combination of two conditions."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Logic Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.code.w4.d2.arena1",
          type: "multiple_choice",
          stem: "Evaluate: (5 > 2) AND NOT (3 == 3). Is the whole expression true or false?",
          choices: [
            "True — because 5 > 2 is true",
            "False — 3 == 3 is true, NOT makes it false, and true AND false is false",
            "True — NOT makes everything true",
            "It can't be evaluated"
          ],
          answerIndex: 1,
          explanation: "5 > 2 is true. 3 == 3 is true, and NOT true is false. So the expression is true AND false, which is false.",
          hintLadder: [
            "Evaluate each piece: 5 > 2 and 3 == 3.",
            "Apply NOT to the second: NOT (3 == 3) = NOT true = false.",
            "true AND false → false."
          ]
        },
        {
          id: "g7.summer.code.w4.d2.arena2",
          type: "numeric",
          stem: "Nested logic: IF temp >= 100 return 3; ELSE IF (temp >= 40 AND temp < 100) return 2; ELSE return 1. A reading is temp = 40. What number is returned?",
          answer: 2,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Check the first branch: is 40 >= 100? No.",
            "Check the second: is 40 >= 40 AND 40 < 100?",
            "40 >= 40 is true and 40 < 100 is true, so true AND true → return 2."
          ],
          explanation: "40 >= 100 is false. In the else-if, 40 >= 40 is true AND 40 < 100 is true, so it returns 2."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: True/False Freeze",
      prompt:
        "Someone (or you) calls out a condition like '5 is greater than 2!' If it's TRUE, jump and reach up tall; if it's FALSE, crouch and freeze. Do 6 rounds, mixing in some AND/OR statements to trip yourself up.",
      scienceTieIn: "Quick decide-then-move bursts fire up both your brain's decision centers and your muscles at once, boosting alertness through better blood flow.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Boolean logic runs on just true and false. Where in your everyday life do you make an 'AND' decision (both things must be true) versus an 'OR' decision (either one is enough)?",
      badge: { id: "g7-logic-navigator", name: "Logic Navigator", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
