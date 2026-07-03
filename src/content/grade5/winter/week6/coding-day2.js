// Grade 5 Coding/CS/AI — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 2. Grade 5 counterpart of g6.winter.code.w6.d2. Same topic (design a
// winter helper with conditionals — a "Should I wear a coat?" decision maker)
// pitched down to Grade 5: block-style / everyday IF/THEN rules, simpler
// numbers, and one two-way branch at a time instead of long ELSE-IF chains.

export const winterG5CodingW6D2 = {
  id: "g5.winter.code.w6.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Design a winter helper with conditionals",
  topicTag: "conditionals-logic",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "Yesterday you learned the engineering design loop. Today you invent a tool made of RULES: a 'Should I wear a coat?' helper. Before any app can decide, YOU have to plan the rules — the IF/THEN steps that turn a temperature into good advice.",
  miniLesson: [
    "A conditional is an IF/THEN rule: IF something is true, THEN do an action. Example: IF the temperature is below 5°C, THEN say 'wear a coat.'",
    "You can add an ELSE for the other case: IF it is cold, THEN 'coat,' ELSE 'no coat.' The computer checks the IF first. If it is true it does the THEN part; if it is false it does the ELSE part.",
    "Comparison words drive the decision: 'less than' (<), 'greater than' (>), 'at least' (>=), 'at most' (<=). Picking the right word and the right cut-off number is the real design work."
  ],
  workedExample: {
    prompt: "Plan the rule: IF the temperature is below 0°C, say 'Heavy coat.' Otherwise say 'Light jacket.' It is 3°C. What does the helper say, and why?",
    steps: [
      "Check the IF: is 3 below 0? No — 3 is NOT below 0, so the IF is false.",
      "Because the IF is false, run the ELSE part instead.",
      "The ELSE part says 'Light jacket.'",
      "So the helper says 'Light jacket.'"
    ],
    answer: "'Light jacket.' — because 3 is not below 0, the IF is false, so the ELSE part runs."
  },
  items: [
    {
      id: "g5.winter.code.w6.d2.q1",
      type: "multiple_choice",
      stem: "Rule: IF the temperature is at most 0°C (0 or colder), say 'Freezing — wear a coat.' The temperature is exactly 0°C. What does it say?",
      choices: [
        "Nothing — the rule only works below 0",
        "'Freezing — wear a coat.' because 0 counts as 'at most 0'",
        "An error message",
        "'It's warm.'"
      ],
      answerIndex: 1,
      explanation: "'At most 0' means 0 or colder, so exactly 0 makes the rule true and the message shows.",
      hintLadder: [
        "Does 'at most 0' include the number 0 itself?",
        "Zero is 'at most zero.'",
        "0 counts, so the message shows."
      ],
      misconceptionsTargeted: ["boundary-off-by-one"]
    },
    {
      id: "g5.winter.code.w6.d2.q2",
      type: "multiple_choice",
      stem: "You want a helper that says 'Coat' when it is cold and 'No coat' when it is not. Which structure fits BEST?",
      choices: [
        "A single IF with no ELSE",
        "An IF/ELSE with two possible answers",
        "A rule with no condition at all",
        "Two separate programs"
      ],
      answerIndex: 1,
      explanation: "Two answers (coat or no coat) fit an IF/ELSE: the IF handles cold, the ELSE handles not cold.",
      hintLadder: [
        "You have TWO possible answers, coat or no coat.",
        "How do you handle the 'other case'?",
        "IF ... ELSE gives you both answers."
      ]
    },
    {
      id: "g5.winter.code.w6.d2.q3",
      type: "multiple_choice",
      stem: "Rule: IF the temperature is less than 5°C, say 'Coat,' ELSE say 'No coat.' What does it say for 8°C?",
      choices: [
        "'Coat'",
        "'No coat'",
        "Both 'Coat' and 'No coat'",
        "Nothing"
      ],
      answerIndex: 1,
      explanation: "Is 8 less than 5? No. So the IF is false and the ELSE runs, giving 'No coat.'",
      hintLadder: [
        "Check the IF: is 8 less than 5?",
        "That is false, so which part runs?",
        "The ELSE runs, so the answer is 'No coat.'"
      ]
    },
    {
      id: "g5.winter.code.w6.d2.q4",
      type: "numeric",
      stem: "A snow-day helper uses: IF the total snowfall is at least 20 cm, say 'snow day.' Overnight it snows 12 cm, then 6 more cm. Enter the TOTAL snowfall in cm.",
      answer: 18,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add the two snowfalls to get the total.",
        "12 + 6 = ?",
        "The total is 18 cm (which is less than 20, so it would NOT be a snow day)."
      ],
      explanation: "12 + 6 = 18 cm total. Since 18 is less than 20, the helper would NOT declare a snow day.",
      misconceptionsTargeted: ["boundary-off-by-one"]
    },
    {
      id: "g5.winter.code.w6.d2.q5",
      type: "short_answer",
      stem: "Design the rule (in words) for a 'Should I wear a coat?' helper. Use at least ONE comparison word (like 'less than' or 'at most') and say what it outputs when the IF is TRUE and when it is FALSE.",
      rubric: {
        level3: "Gives a clear IF/ELSE rule with a comparison word and a sensible cut-off (like IF temperature is less than 10, say 'coat,' else say 'no coat'), AND states both the true and false outputs.",
        level2: "Has a rule, but the comparison word, cut-off, or one of the outputs is unclear.",
        level1: "No real rule, or logic that does not actually decide anything."
      },
      exemplar: "IF the temperature is less than 10°C, say 'Wear a coat.' ELSE say 'No coat needed.' When it is 3°C the IF is true so it says wear a coat; when it is 15°C the IF is false so it says no coat needed.",
      hintLadder: [
        "Pick a temperature cut-off for 'cold enough for a coat.'",
        "Write it as IF the temperature is less than (your number), say ..., ELSE say ...",
        "State what it says in BOTH cases."
      ]
    }
  ],
  reflectionPrompt: "Real weather apps use more than just temperature — wind, rain, snow. What is ONE extra rule you would add to make your coat helper smarter?",
  misconceptionBank: [
    {
      id: "boundary-off-by-one",
      label: "Confuses whether the cut-off number itself counts",
      description: "Mixes up whether the exact cut-off value is included, like treating 'at most 0' as if 0 does not count.",
      coachMove: "Read the rule aloud: 'at most 0' means '0 or less,' so the cut-off number itself counts. Test the exact edge number every time."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Rule",
      prompt:
        "A helper's rule is: IF the temperature is below 0, say 'Heavy coat,' ELSE say 'No coat.' It is exactly 0°C outside. Trace it — which message shows? Do not peek!",
      answer:
        "Is 0 BELOW 0? No — 0 is not below 0 (they are equal). So the IF is false, and the ELSE runs: it says 'No coat.' The tricky part is that 'below 0' does NOT include 0 itself.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Blueprint a Winter Helper Bot",
      challenge:
        "Design the decision rule for a winter helper of your choice (coat advisor, snow-day caller, ice-warning alarm). Write its IF/ELSE rule on paper, then test it with at least three different inputs to prove it works.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "Choose your helper and the input it reads (temperature, snowfall, wind...).",
        "Write your IF/ELSE rule with a comparison word and clear outputs.",
        "Pick three test inputs — including one right AT the cut-off number.",
        "Trace each input through your rule and write the output it gives."
      ],
      deliverable: "A rule sheet for your helper plus a 3-row trace table (input → output) that proves the rule works, including a test at the cut-off number.",
      choiceBoard: [
        "Write the rule in words and fill in the trace table.",
        "Draw a flowchart with a diamond decision box for your condition.",
        "Write a short 'user manual' explaining what your helper decides and when."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Conditionals Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.code.w6.d2.arena1",
          type: "multiple_choice",
          stem: "Rule: IF the temperature is less than 5°C, say 'Warm coat,' ELSE say 'Light jacket.' The temperature is 2°C. What does the helper say?",
          choices: [
            "'Warm coat'",
            "'Light jacket'",
            "Both messages",
            "Nothing shows"
          ],
          answerIndex: 0,
          explanation: "Is 2 less than 5? Yes. So the IF is true and it says 'Warm coat.'",
          hintLadder: [
            "Check the IF: is 2 less than 5?",
            "That is true, so which part runs — the THEN or the ELSE?",
            "The THEN runs, so the answer is 'Warm coat.'"
          ]
        },
        {
          id: "g5.winter.code.w6.d2.arena2",
          type: "short_answer",
          stem: "A student writes: IF the temperature is below 0, say 'Coat.' They notice it NEVER says coat at exactly 0°C on freezing mornings. Explain the bug and rewrite the rule to fix it.",
          rubric: {
            level3: "Explains that 'below 0' does not include 0, so 0°C is missed, AND fixes it by changing to 'at most 0' (0 or colder) — or by raising the cut-off.",
            level2: "Spots the cut-off problem but the fix is unclear or wrong.",
            level1: "Does not identify the cut-off issue."
          },
          exemplar: "The bug is that 'below 0' does not include 0 itself, so at exactly 0°C the IF is false and no coat message shows. Fix it by writing 'IF the temperature is at most 0 (0 or colder), say Coat,' so the freezing point 0 counts.",
          hintLadder: [
            "Does 'below 0' include the number 0?",
            "At exactly 0, is the rule true or false?",
            "Change the words so 0 is included ('at most 0')."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: IF/ELSE Freeze",
      prompt:
        "Play a body-conditional: a helper calls out 'below zero!' (you hug yourself and shiver — coat on) or 'nice and mild!' (you stretch tall and relax — coat off). Have someone call random weather for 6 rounds, and match your move to the rule.",
      scienceTieIn: "Your brain runs its own conditionals — 'IF cold, THEN shiver' is a real reflex that makes heat. Switching between the two moves wakes up your body just like a program choosing between two answers.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Conditionals let a tool make decisions on its own. What is one decision you make every winter morning that you could write as an IF/THEN rule?",
      badge: { id: "g5-winter-conditional-coder", name: "Conditional Coder", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
