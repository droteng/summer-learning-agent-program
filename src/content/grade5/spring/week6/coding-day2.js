// Grade 5 Coding/CS/AI — Spring Expedition, Week 6 (Code That Grows), Day 2.
// Topic: conditionals for spread/branching — IF a plant has enough water THEN it grows.
// Grade 5 depth: plain IF/THEN/ELSE in words, small numbers, one or two steps.

export const springG5CodingW6D2 = {
  id: "g5.spring.code.w6.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Conditionals for spread and branching",
  topicTag: "growth-conditionals",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "In real life, a plant grows only IF it has enough water. Code copies that with an IF/THEN rule — an action that happens ONLY when a condition is true. Today you trace which plants grow and which do not.",
  miniLesson: [
    "A conditional is an IF/THEN rule: IF something is true, THEN an action happens; if not, it is skipped.",
    "In a growth simulation, the condition decides what happens: IF water is at least 3, THEN the plant grows; if not, it stays the same.",
    "Spread works the same way: IF a square touches a 'growing' square, THEN it starts growing next step. The condition controls how the pattern spreads."
  ],
  workedExample: {
    prompt: "Rule: IF water is at least 3, THEN add 2 to the height. A plant is 8 tall with water = 2. What is its height after the rule runs?",
    steps: [
      "Check the condition: is water at least 3? Water is 2.",
      "2 is NOT at least 3, so the condition is false.",
      "Because it is false, the THEN action is skipped.",
      "The height does not change — it stays 8."
    ],
    answer: "8"
  },
  items: [
    {
      id: "g5.spring.code.w6.d2.q1",
      type: "numeric",
      stem: "Rule: IF water is at least 3, THEN add 4 to the height. A plant is 10 tall with water = 5. What is its height after the rule runs once?",
      answer: 14,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "First check: is 5 at least 3?",
        "The condition is true, so run the THEN action.",
        "10 + 4 = 14."
      ],
      explanation: "5 is at least 3, so the condition is true and the plant grows: 10 + 4 = 14 cm."
    },
    {
      id: "g5.spring.code.w6.d2.q2",
      type: "multiple_choice",
      stem: "Rule: IF water is at least 3, THEN the plant grows; ELSE it stays the same. A plant has water = 1. What happens?",
      choices: [
        "It grows, because every plant grows",
        "The program stops",
        "It grows twice",
        "It stays the same, because 1 is not at least 3, so the ELSE part runs"
      ],
      answerIndex: 3,
      explanation: "1 is not at least 3, so the IF is skipped and the ELSE part (stay the same) runs.",
      hintLadder: [
        "Check the condition: is 1 at least 3?",
        "If the IF is false, which part runs?",
        "The ELSE part keeps it the same."
      ],
      misconceptionsTargeted: ["else-never-runs"]
    },
    {
      id: "g5.spring.code.w6.d2.q3",
      type: "numeric",
      stem: "Rule each day: IF water is at least 2, THEN add 3 to the height. A plant starts at 6. Day 1 water = 4, Day 2 water = 1. What is the height after BOTH days?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Day 1: is 4 at least 2? Yes — grow by 3.",
        "Day 1 ends at 6 + 3 = 9.",
        "Day 2: is 1 at least 2? No — skip growth, stays 9."
      ],
      explanation: "Day 1 grows (4 is at least 2): 6 → 9. Day 2 is skipped (1 is not at least 2): stays 9 cm."
    },
    {
      id: "g5.spring.code.w6.d2.q4",
      type: "multiple_choice",
      stem: "In a SPREAD simulation, the rule is 'IF a square touches a growing square, THEN it starts growing next step.' A square touches NO growing squares. What happens to it?",
      choices: [
        "It starts growing anyway",
        "It disappears",
        "It stays the same, because the condition is false",
        "Every square starts growing at once"
      ],
      answerIndex: 2,
      explanation: "With no growing square next to it, the condition is false, so the THEN action does not run and the square stays the same.",
      hintLadder: [
        "Check the condition: does it touch a growing square?",
        "Touching zero growing squares makes the condition false.",
        "A false condition means the square stays the same."
      ]
    },
    {
      id: "g5.spring.code.w6.d2.q5",
      type: "short_answer",
      stem: "Write an IF/THEN/ELSE rule (in words) for whether a seed sprouts, using a condition about temperature. Say what happens when it is TRUE and when it is FALSE.",
      rubric: {
        level3: "States a clear temperature condition AND a THEN action (sprouts) AND an ELSE outcome (stays a seed), matched correctly to true/false.",
        level2: "Gives a condition and one part, but the other part or the true/false match is unclear.",
        level1: "No clear condition or no branching outcome."
      },
      exemplar: "IF the temperature is at least 15 degrees, THEN the seed sprouts; ELSE it stays a seed. When it is true (warm enough) it sprouts; when it is false (too cold) it waits.",
      hintLadder: [
        "Pick a temperature condition, like 'at least 15 degrees'.",
        "Say what happens when it is true (THEN).",
        "Say what happens when it is false (ELSE)."
      ]
    }
  ],
  reflectionPrompt: "Conditions decide WHEN growth or spread happens. What is one real-world condition (besides water) that could control whether a living thing grows?",
  misconceptionBank: [
    {
      id: "else-never-runs",
      label: "Thinks the ELSE part never runs",
      description: "Assumes the THEN action always happens and forgets the ELSE handles the false case.",
      coachMove: "Read the rule like a fork in the road: 'true goes THIS way (THEN), false goes THAT way (ELSE).'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Plant Grows?",
      prompt:
        "Rule: IF water is at least 3, THEN grow by 5; ELSE stay the same. Plant A has water = 3, Plant B has water = 2. Both start at 10 tall. Work out both heights — which plant ends up taller?",
      answer:
        "Plant A: 3 is at least 3, so it is true: 10 + 5 = 15. Plant B: 2 is not at least 3, so it stays 10. Plant A is taller. Note that 'at least 3' includes exactly 3!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Spread Grid",
      challenge:
        "On a small grid (like 4×4), show spread using a condition. Color ONE starting 'growing' square (a sprouting plant, or spreading pollen). Each step, use the rule 'IF a square touches a growing square, THEN it starts growing,' and color the new squares.",
      materials: ["Grid paper or a hand-drawn grid, plus a pencil or markers"],
      steps: [
        "Draw a 4×4 grid and color ONE starting growing square.",
        "Write your spread condition (like 'IF touching a growing square').",
        "Step 1: color every square where the condition is true.",
        "Repeat for 2–3 steps and watch the pattern spread."
      ],
      deliverable: "A grid showing the spread pattern after 2–3 steps, with the condition written beside it.",
      choiceBoard: [
        "Color the grid step-by-step to show the spread.",
        "Write the IF/THEN rule in words and label each spread step.",
        "Make a 3-frame flipbook showing the pattern spreading each step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Conditional Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.code.w6.d2.arena1",
          type: "numeric",
          stem: "Rule each day: IF water is at least 2, THEN add 5 to the height; ELSE it stays. A plant starts at 4. Water is: Day 1 = 3, Day 2 = 1, Day 3 = 2. What is the height after all 3 days? Trace each day.",
          answer: 14,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Day 1: 3 is at least 2, true, grow +5: 4 → 9.",
            "Day 2: 1 is not at least 2, false, skip: stays 9.",
            "Day 3: 2 is at least 2, true, grow +5: 9 → 14."
          ],
          explanation: "Day 1 grows (4→9), Day 2 skipped (9), Day 3 grows (9→14). Final height 14 cm."
        },
        {
          id: "g5.spring.code.w6.d2.arena2",
          type: "multiple_choice",
          stem: "Rule: 'IF water is at least 5, THEN grow.' A plant has water = exactly 5. What happens?",
          choices: [
            "It grows — 'at least 5' means 5 or more, so exactly 5 makes it true",
            "It does NOT grow — 5 is not enough",
            "It grows twice as much",
            "The rule is broken"
          ],
          answerIndex: 0,
          explanation: "'At least 5' means 5 or more, so water = 5 makes the condition true and the plant grows.",
          hintLadder: [
            "What does 'at least 5' mean?",
            "Does exactly 5 count as 'at least 5'?",
            "5 is at least 5, so it is true and it grows."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: If-Then Freeze",
      prompt:
        "Play a body conditional: IF the caller says 'sun', THEN stretch tall and grow; IF the caller says 'drought', THEN freeze small. Have someone call 5 rounds — your body runs the IF/THEN each time.",
      scienceTieIn: "Reacting fast to a condition wakes up your brain's decision-making, and the movement pumps oxygen to help you focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You used IF/THEN rules to decide when things grow or spread. Describe one choice you made today that worked like an IF/THEN rule.",
      badge: { id: "g5-spring-condition-coder", name: "Condition Coder", emoji: "💧" },
      estimatedMinutes: 7
    }
  }
};
