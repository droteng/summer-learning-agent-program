// Grade 6 Coding/CS/AI — Spring Expedition, Week 6 (Code That Grows), Day 2.
// Topic: conditionals for spread/branching — IF a plant has enough water THEN it grows.

export const springG6CodingW6D2 = {
  id: "g6.spring.code.w6.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Conditionals for spread and branching",
  topicTag: "growth-conditionals",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-11"],
  hook: "In real life, a plant grows only IF it has enough water. Simulations capture that with a conditional — an IF/THEN rule that lets growth happen (or spread) only when a condition is true. Today you trace which plants grow and which don't.",
  miniLesson: [
    "A conditional is an IF/THEN rule: IF a condition is true, THEN an action runs; otherwise it is skipped.",
    "In a growth simulation, conditions decide branching: IF water >= 3, THEN the plant grows; ELSE it stays the same.",
    "Spread works the same way: IF a square has an infected neighbor, THEN it becomes infected next step — the condition controls how the pattern spreads."
  ],
  workedExample: {
    prompt: "Rule: IF water >= 3, THEN height = height + 2. A plant has height 8 and water = 2. What is its height after the rule runs?",
    steps: [
      "Check the condition: is water >= 3? Water is 2.",
      "2 >= 3 is FALSE.",
      "Because the condition is false, the THEN action is skipped.",
      "The height does not change — it stays 8."
    ],
    answer: "8"
  },
  items: [
    {
      id: "g6.spring.code.w6.d2.q1",
      type: "numeric",
      stem: "Rule: IF water >= 3, THEN height = height + 4. A plant has height 10 and water = 5. What is its height after the rule runs once?",
      answer: 14,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "First check: is 5 >= 3?",
        "The condition is true, so run the THEN action.",
        "10 + 4 = 14."
      ],
      explanation: "5 >= 3 is true, so the plant grows: 10 + 4 = 14 cm."
    },
    {
      id: "g6.spring.code.w6.d2.q2",
      type: "multiple_choice",
      stem: "Rule: IF water >= 3, THEN the plant grows; ELSE it stays the same. A plant has water = 1. What happens?",
      choices: [
        "It grows, because every plant grows",
        "It stays the same, because 1 >= 3 is false so the ELSE runs",
        "It grows twice",
        "The simulation stops"
      ],
      answerIndex: 1,
      explanation: "1 >= 3 is false, so the IF is skipped and the ELSE branch (stay the same) runs.",
      hintLadder: [
        "Check the condition: is 1 >= 3?",
        "If the IF is false, which branch runs?",
        "The ELSE branch keeps it the same."
      ],
      misconceptionsTargeted: ["else-never-runs"]
    },
    {
      id: "g6.spring.code.w6.d2.q3",
      type: "numeric",
      stem: "Rule each step: IF water >= 2, THEN height = height + 3. A plant starts at height 6. Day 1 water = 4, Day 2 water = 1. What is the height after BOTH days?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Day 1: is 4 >= 2? Yes — grow by 3.",
        "Day 1 ends at 6 + 3 = 9.",
        "Day 2: is 1 >= 2? No — skip growth, stays 9."
      ],
      explanation: "Day 1 grows (4>=2): 6 → 9. Day 2 is skipped (1<2): stays 9 cm."
    },
    {
      id: "g6.spring.code.w6.d2.q4",
      type: "multiple_choice",
      stem: "In a SPREAD simulation, the rule is 'IF a square has an infected neighbor, THEN it becomes infected next step.' A healthy square has zero infected neighbors. What happens to it?",
      choices: [
        "It becomes infected anyway",
        "It stays healthy, because the condition is false",
        "It disappears",
        "All squares become infected at once"
      ],
      answerIndex: 1,
      explanation: "With no infected neighbor the condition is false, so the THEN action doesn't run and the square stays healthy.",
      hintLadder: [
        "Check the condition: does it have an infected neighbor?",
        "Zero infected neighbors makes the condition false.",
        "A false condition means the square stays healthy."
      ]
    },
    {
      id: "g6.spring.code.w6.d2.q5",
      type: "short_answer",
      stem: "Write an IF/THEN/ELSE rule (in words) for whether a seed sprouts, using a condition about temperature. Say what happens when the condition is TRUE and when it is FALSE.",
      rubric: {
        level3: "States a clear condition about temperature AND a THEN action (sprouts) AND an ELSE outcome (stays dormant), correctly matched to true/false.",
        level2: "Gives a condition and one branch, but the other branch or the true/false match is unclear.",
        level1: "No clear condition or no branching outcome."
      },
      exemplar: "IF temperature >= 15 degrees, THEN the seed sprouts; ELSE it stays dormant. When the condition is true (warm enough) it sprouts; when false (too cold) it waits.",
      hintLadder: [
        "Pick a temperature condition, like 'temperature >= 15'.",
        "Say what happens when it is true (THEN).",
        "Say what happens when it is false (ELSE)."
      ]
    }
  ],
  reflectionPrompt: "Conditions decide when growth or spread happens. What is one real-world condition (besides water) that could control whether a living thing grows?",
  misconceptionBank: [
    {
      id: "else-never-runs",
      label: "Thinks the ELSE branch never runs",
      description: "Assumes the THEN action always happens and forgets the ELSE handles the false case.",
      coachMove: "Read the rule as a fork in the road: 'true goes THIS way (THEN), false goes THAT way (ELSE).'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Plant Grows?",
      prompt:
        "Rule: IF water >= 3, THEN grow by 5; ELSE stay the same. Plant A has water = 3, Plant B has water = 2. Both start at height 10. Work out both heights after the rule — which plant ends up taller?",
      answer:
        "Plant A: 3 >= 3 is true, so 10 + 5 = 15. Plant B: 2 >= 3 is false, so it stays 10. Plant A is taller. Note '>=' includes exactly 3!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Spread Grid",
      challenge:
        "On a small grid (like 4×4), simulate spread using a conditional. Mark one starting 'active' square (a sprouting plant, or a spreading pollen). Each step, apply the rule 'IF a square touches an active square, THEN it becomes active,' and color in the new squares.",
      materials: ["Grid paper or a hand-drawn grid, plus a pencil or markers"],
      steps: [
        "Draw a 4×4 grid and color ONE starting active square.",
        "Write your spread condition (e.g. 'IF touching an active square').",
        "Step 1: color every square whose condition is true.",
        "Repeat for 2–3 steps and watch the spread pattern grow."
      ],
      deliverable: "A grid showing the spread pattern after 2–3 steps, with the condition written beside it.",
      choiceBoard: [
        "Color the grid step-by-step to show the spread.",
        "Write the IF/THEN rule as pseudocode and label each spread step.",
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
          id: "g6.spring.code.w6.d2.arena1",
          type: "numeric",
          stem: "Rule each day: IF water >= 2, THEN height = height + 5; ELSE height stays. A plant starts at 4. Water is: Day 1 = 3, Day 2 = 1, Day 3 = 2. What is the height after all 3 days? Trace each day.",
          answer: 14,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Day 1: 3 >= 2 true, grow +5: 4 → 9.",
            "Day 2: 1 >= 2 false, skip: stays 9.",
            "Day 3: 2 >= 2 true, grow +5: 9 → 14."
          ],
          explanation: "Day 1 grows (4→9), Day 2 skipped (9), Day 3 grows (9→14). Final height 14 cm."
        },
        {
          id: "g6.spring.code.w6.d2.arena2",
          type: "multiple_choice",
          stem: "Rule: 'IF water >= 5, THEN grow.' A plant has water exactly = 5. What happens?",
          choices: [
            "It does NOT grow — 5 is not enough",
            "It grows — '>=' means 'greater than or equal to', so exactly 5 makes the condition true",
            "It grows twice as much",
            "The rule is invalid"
          ],
          answerIndex: 1,
          explanation: "'>=' means greater than OR equal to, so water = 5 satisfies 'water >= 5' and the plant grows.",
          hintLadder: [
            "What does the '=' in '>=' mean?",
            "Does exactly 5 count as 'at least 5'?",
            "5 >= 5 is true, so it grows."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: If-Then Freeze",
      prompt:
        "Play a body conditional: IF the caller says 'sun,' THEN stretch tall and grow; IF the caller says 'drought,' THEN freeze small. Have someone call 5 rounds — your body runs the IF/THEN each time.",
      scienceTieIn: "Reacting quickly to a condition wakes up your brain's decision-making, and the movement pumps oxygen to help you focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You used IF/THEN rules to decide when things grow or spread. Describe one decision you made today that worked like an IF/THEN rule.",
      badge: { id: "spring-condition-coder", name: "Condition Coder", emoji: "💧" },
      estimatedMinutes: 7
    }
  }
};
