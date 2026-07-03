// Grade 6 Coding/CS/AI — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 2. Topic: design a tool with code — plan the logic of a simple winter
// helper using conditionals (a "should I wear a coat?" decision maker).

export const winterG6CodingW6D2 = {
  id: "g6.winter.code.w6.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Design a winter helper with conditionals",
  topicTag: "conditionals-logic",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-13"],
  hook: "Yesterday you learned the engineering design loop. Today you invent a tool made of LOGIC: a 'Should I wear a coat?' helper. Before any app can decide, YOU have to plan the rules — the IF/THEN conditions that turn a temperature into good advice.",
  miniLesson: [
    "A conditional is an IF/THEN rule: IF a condition is true, THEN do an action. Example: IF temperature < 5°C, THEN say 'wear a coat.'",
    "You can add an ELSE for the other case (IF cold THEN coat, ELSE no coat) and chain ELSE IF to handle several ranges, like coat vs. jacket vs. t-shirt.",
    "Comparison operators drive the decision: < (less than), > (greater than), <= (at most), >= (at least). Choosing the right one — and the right cut-off number — is the real design work."
  ],
  workedExample: {
    prompt: "Plan the logic: IF temperature is below 0°C, output 'Heavy coat.' Otherwise, output 'Light jacket.' It is −3°C. What does the helper output, and why?",
    steps: [
      "Check the condition: is −3 below 0? −3 < 0 is TRUE.",
      "Because the IF is true, run the THEN branch.",
      "The THEN branch outputs 'Heavy coat.'",
      "The ELSE ('Light jacket') is skipped because the IF was already true."
    ],
    answer: "'Heavy coat.' — because −3 < 0 is true, so the THEN branch runs and the ELSE is skipped."
  },
  items: [
    {
      id: "g6.winter.code.w6.d2.q1",
      type: "multiple_choice",
      stem: "Rule: IF temperature <= 0, THEN output 'Freezing — wear a coat.' The temperature is exactly 0°C. What is the output?",
      choices: [
        "Nothing — the rule only fires below 0",
        "'Freezing — wear a coat.' because 0 <= 0 is true",
        "An error",
        "'It's warm.'"
      ],
      answerIndex: 1,
      explanation: "'<=' means less than OR equal to, so exactly 0 makes the condition true and the THEN branch runs.",
      hintLadder: [
        "What does the '=' in '<=' allow?",
        "Is 0 'at most 0'?",
        "0 <= 0 is true, so the message prints."
      ],
      misconceptionsTargeted: ["boundary-off-by-one"]
    },
    {
      id: "g6.winter.code.w6.d2.q2",
      type: "multiple_choice",
      stem: "You want a helper that says 'Coat' for very cold, 'Jacket' for chilly, and 'No coat' for mild. Which code structure fits BEST?",
      choices: [
        "A single IF with no ELSE",
        "IF / ELSE IF / ELSE to cover three ranges",
        "A rule with no conditions at all",
        "Three separate programs"
      ],
      answerIndex: 1,
      explanation: "Three outcomes based on ranges are handled cleanly by IF / ELSE IF / ELSE, which checks conditions in order.",
      hintLadder: [
        "You have THREE possible answers, not two.",
        "How do you chain more than one condition?",
        "IF ... ELSE IF ... ELSE handles multiple ranges."
      ]
    },
    {
      id: "g6.winter.code.w6.d2.q3",
      type: "multiple_choice",
      stem: "In this logic — IF temp < 0 THEN 'Coat' ELSE IF temp < 10 THEN 'Jacket' ELSE 'No coat' — what does it output for 4°C?",
      choices: [
        "'Coat'",
        "'Jacket'",
        "'No coat'",
        "Both 'Jacket' and 'No coat'"
      ],
      answerIndex: 1,
      explanation: "4 < 0 is false, so it checks the next: 4 < 10 is true, so it outputs 'Jacket' and stops.",
      hintLadder: [
        "Check the first condition: is 4 < 0?",
        "That's false, so move to the ELSE IF: is 4 < 10?",
        "4 < 10 is true, so the answer is 'Jacket' and the chain stops."
      ]
    },
    {
      id: "g6.winter.code.w6.d2.q4",
      type: "numeric",
      stem: "A snow-day helper uses: IF snowfall >= 20 cm, THEN 'snow day.' Overnight it snows 12 cm, then 11 more cm. Using the total snowfall, does the condition's number get MET or exceeded — enter the total snowfall in cm.",
      answer: 23,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add the two snowfalls to get the total.",
        "12 + 11 = ?",
        "The total is 23 cm, which is >= 20, so the condition is met."
      ],
      explanation: "12 + 11 = 23 cm total. Since 23 >= 20 is true, the helper would declare a snow day.",
      misconceptionsTargeted: ["boundary-off-by-one"]
    },
    {
      id: "g6.winter.code.w6.d2.q5",
      type: "short_answer",
      stem: "Design the logic (in words or pseudocode) for a 'Should I wear a coat?' helper. Include at least ONE condition with a comparison operator and say what it outputs when true and when false.",
      rubric: {
        level3: "Gives a clear conditional with a comparison operator and a sensible cut-off (e.g., IF temp < 10 THEN 'coat' ELSE 'no coat'), AND states both the true and false outputs.",
        level2: "Has a condition but the operator, cut-off, or one of the outputs is unclear.",
        level1: "No real condition, or logic that doesn't decide anything."
      },
      exemplar: "IF temperature < 10°C THEN output 'Wear a coat.' ELSE output 'No coat needed.' When it's 3°C the condition is true so it says wear a coat; when it's 15°C the condition is false so it says no coat needed.",
      hintLadder: [
        "Pick a temperature cut-off for 'cold enough for a coat.'",
        "Write it as IF temperature < (your number) THEN ... ELSE ...",
        "State what it outputs in both cases."
      ]
    }
  ],
  reflectionPrompt: "Real weather apps use way more than temperature — wind, rain, humidity. What's ONE extra condition you'd add to make your coat helper smarter?",
  misconceptionBank: [
    {
      id: "boundary-off-by-one",
      label: "Confuses the boundary in comparison operators",
      description: "Mixes up whether the exact cut-off value counts, e.g., treating '<= 0' as if 0 is excluded.",
      coachMove: "Read the operator aloud: '<=' is 'less than OR EQUAL to,' so the boundary number itself counts. Test the exact edge value every time."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Condition",
      prompt:
        "A helper's logic is: IF temp < 0 THEN 'Heavy coat' ELSE IF temp < 8 THEN 'Light coat' ELSE 'No coat.' It's exactly 8°C outside. Trace it — which message prints? Don't peek!",
      answer:
        "8 < 0 is false. Then 8 < 8 is ALSO false (8 is not less than 8). So both conditions fail and it prints 'No coat.' The tricky part is that the boundary value 8 does NOT satisfy '< 8.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Blueprint a Winter Helper Bot",
      challenge:
        "Design the decision logic for a winter helper of your choice (coat advisor, snow-day caller, ice-warning alarm). Write its IF/ELSE IF/ELSE rules on paper, then trace them for at least three different inputs to prove they work.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "Choose your helper and the input it reads (temperature, snowfall, wind...).",
        "Write your conditions in order using comparison operators and clear outputs.",
        "Pick three test inputs — including one right AT a boundary value.",
        "Trace each input through your rules and write the output it produces."
      ],
      deliverable: "A rules sheet for your helper plus a 3-row trace table (input → output) that proves the logic works, including a boundary test.",
      choiceBoard: [
        "Write the pseudocode rules and the trace table.",
        "Draw a flowchart with diamond decision boxes for each condition.",
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
          id: "g6.winter.code.w6.d2.arena1",
          type: "multiple_choice",
          stem: "Logic: IF wind > 30 THEN 'Windproof coat' ELSE IF temp < 5 THEN 'Warm coat' ELSE 'Light jacket.' The wind is 20 km/h and the temp is 2°C. What is the output?",
          choices: [
            "'Windproof coat'",
            "'Warm coat'",
            "'Light jacket'",
            "Nothing prints"
          ],
          answerIndex: 1,
          explanation: "20 > 30 is false, so it checks the next condition: 2 < 5 is true, so it outputs 'Warm coat' and stops.",
          hintLadder: [
            "First test: is 20 > 30?",
            "That's false — move to the ELSE IF: is 2 < 5?",
            "2 < 5 is true, so the answer is 'Warm coat.'"
          ]
        },
        {
          id: "g6.winter.code.w6.d2.arena2",
          type: "short_answer",
          stem: "A student writes: IF temp < 0 THEN 'Coat.' They notice it NEVER says coat at exactly 0°C on freezing mornings. Explain the bug and rewrite the condition to fix it.",
          rubric: {
            level3: "Identifies that '< 0' excludes exactly 0, so 0°C is missed, AND fixes it by changing the operator to '<= 0' (or raising the cut-off).",
            level2: "Spots the boundary problem but the fix is unclear or incorrect.",
            level1: "Doesn't identify the boundary issue."
          },
          exemplar: "The bug is that '< 0' does not include 0 itself, so at exactly 0°C the condition is false and no coat message prints. Fix it by using 'IF temp <= 0 THEN Coat' so the freezing point 0 counts.",
          hintLadder: [
            "Does '< 0' include the number 0?",
            "At exactly 0, is the condition true or false?",
            "Change the operator so 0 is included."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: IF/ELSE Freeze",
      prompt:
        "Play a body-conditional: a helper calls out 'below zero!' (you hug yourself and shiver — coat on) or 'nice and mild!' (you stretch tall and relax — coat off). Have someone call random weather for 6 rounds, and match your move to the condition.",
      scienceTieIn: "Your brain runs its own conditionals — 'IF cold, THEN shiver' is a real reflex that generates heat. Moving between the two states wakes up your body just like a program branching between choices.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Conditionals let a tool make decisions on its own. What's one decision you make every winter morning that you could write as an IF/THEN rule?",
      badge: { id: "conditional-coder", name: "Conditional Coder", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
