// Grade 7 Coding/CS/AI — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 2. Topic: design a winter helper with code, pitched up to Grade 7 —
// FUNCTIONS that take inputs and return advice, COMPOUND conditionals with
// AND/OR, and a data structure (a list of readings) the helper loops over.

export const winterG7CodingW6D2 = {
  id: "g7.winter.code.w6.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Coding/Computer Science/AI",
  topic: "Design a winter helper with functions, compound conditionals, and lists",
  topicTag: "functions-conditionals-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-14"],
  hook: "Yesterday you weighed designs; today you BUILD the brain of a winter helper in code. Grade-7 logic is smarter: you wrap the rules in a FUNCTION that takes inputs and RETURNS advice, combine conditions with AND/OR, and store a whole day of readings in a LIST your helper loops through. Design the logic well and one function can advise all day.",
  miniLesson: [
    "A FUNCTION packages logic with named inputs (parameters) and hands back a result with RETURN. Example: coatAdvice(temp) returns 'Coat' or 'No coat.' Calling coatAdvice(-3) runs the rules once and gives back one answer you can reuse.",
    "COMPOUND conditionals combine tests. AND is true only when BOTH parts are true (temp < 0 AND wind > 20 → 'wind-chill warning'); OR is true when EITHER part is true (snow OR ice → 'slippery'). Choosing AND vs OR changes exactly when the branch fires.",
    "A LIST (array) is an ordered data structure holding many values, like hourly temperatures [-2, -5, 0, 3]. A LOOP walks through the list one item at a time, so your function can process a whole day of readings instead of a single number."
  ],
  workedExample: {
    prompt: "A function returns a warning: RETURN 'Wind-chill alert' IF temp < 0 AND wind > 20, ELSE RETURN 'OK'. It is called with temp = -4 and wind = 25. What does it return, and why?",
    steps: [
      "Evaluate the AND: check temp < 0 → -4 < 0 is TRUE.",
      "Check the second part: wind > 20 → 25 > 20 is TRUE.",
      "AND is true only when BOTH parts are true — both are true here, so the whole condition is TRUE.",
      "The IF is true, so the function RETURNS 'Wind-chill alert' and the ELSE is skipped."
    ],
    answer: "'Wind-chill alert' — because temp < 0 (TRUE) AND wind > 20 (TRUE) are both true, so the AND is true and that branch returns."
  },
  items: [
    {
      id: "g7.winter.code.w6.d2.q1",
      type: "multiple_choice",
      stem: "A function: coatAdvice(temp) RETURNS 'Coat' IF temp <= 0, ELSE RETURNS 'No coat'. You call coatAdvice(0). What value comes back?",
      choices: [
        "'Coat', because 0 <= 0 is true so the IF branch returns",
        "Nothing — functions can't return at exactly 0",
        "'No coat', because 0 is not cold",
        "An error, because 0 is a boundary"
      ],
      answerIndex: 0,
      explanation: "'<=' includes the boundary, so 0 <= 0 is true; the IF branch runs and the function returns 'Coat.'",
      hintLadder: [
        "What does the '=' in '<=' allow at the boundary?",
        "Is 0 'at most 0'?",
        "0 <= 0 is true, so the function returns 'Coat.'"
      ],
      misconceptionsTargeted: ["boundary-off-by-one"]
    },
    {
      id: "g7.winter.code.w6.d2.q2",
      type: "multiple_choice",
      stem: "You want a 'slippery' warning that fires when there is snow OR ice (either one is enough). Which condition is correct?",
      choices: [
        "IF snow AND ice THEN 'slippery'",
        "IF NOT snow THEN 'slippery'",
        "IF snow OR ice THEN 'slippery'",
        "IF snow THEN 'slippery' (ignore ice entirely)"
      ],
      answerIndex: 2,
      explanation: "OR is true when EITHER condition is true, so 'snow OR ice' fires the warning if there is snow, ice, or both — matching 'either one is enough.'",
      hintLadder: [
        "You want the warning if just ONE of the two is present.",
        "AND needs both; OR needs only one. Which fits 'either'?",
        "Use OR: snow OR ice."
      ],
      misconceptionsTargeted: ["and-or-confusion"]
    },
    {
      id: "g7.winter.code.w6.d2.q3",
      type: "multiple_choice",
      stem: "Logic inside a function: IF temp < 0 AND wind > 15 RETURN 'Severe'; ELSE IF temp < 5 RETURN 'Cold'; ELSE RETURN 'Mild'. It is called with temp = -2 and wind = 10. What is returned?",
      choices: [
        "'Severe'",
        "'Cold'",
        "'Mild'",
        "Both 'Severe' and 'Cold'"
      ],
      answerIndex: 1,
      explanation: "First test: -2 < 0 is true but 10 > 15 is false, so the AND is false. Next: -2 < 5 is true, so it returns 'Cold' and stops.",
      hintLadder: [
        "Check the AND first: is 10 > 15?",
        "That part is false, so the whole AND is false — move on.",
        "Then -2 < 5 is true, so it returns 'Cold.'"
      ]
    },
    {
      id: "g7.winter.code.w6.d2.q4",
      type: "numeric",
      stem: "A helper loops through a list of hourly temperatures [-3, -1, 2, -4, 0] and COUNTS how many readings satisfy temp <= 0 (freezing-or-below). How many readings does it count?",
      answer: 4,
      tolerance: 0,
      unit: "readings",
      hintLadder: [
        "Go through the list and mark each value that is <= 0.",
        "-3 yes, -1 yes, 2 no, -4 yes, 0 yes (0 <= 0 counts).",
        "That is 4 readings at or below freezing."
      ],
      explanation: "Checking each item against temp <= 0: -3 ✓, -1 ✓, 2 ✗, -4 ✓, 0 ✓ (0 <= 0 is true). Count = 4.",
      misconceptionsTargeted: ["boundary-off-by-one"]
    },
    {
      id: "g7.winter.code.w6.d2.q5",
      type: "short_answer",
      stem: "Design the logic (words or pseudocode) for a FUNCTION winterAdvice(temp, wind) that RETURNS advice. It must use at least one COMPOUND condition (AND or OR) and return a different value in at least two cases. State clearly what it returns for one sample input.",
      rubric: {
        level3: "Defines a function with two parameters, uses a correct compound condition (AND or OR) with sensible cut-offs, returns at least two distinct values, AND traces one sample input to its returned value correctly.",
        level2: "Has a function and a compound condition but one output, cut-off, or the sample trace is unclear or slightly off.",
        level1: "No real function, no compound condition, or the logic doesn't return anything decisive."
      },
      exemplar: "FUNCTION winterAdvice(temp, wind): IF temp < 0 AND wind > 20 RETURN 'Severe — bundle up.' ELSE IF temp < 8 RETURN 'Wear a coat.' ELSE RETURN 'Light jacket.' For temp = -5, wind = 25: -5 < 0 AND 25 > 20 are both true, so it returns 'Severe — bundle up.'",
      hintLadder: [
        "Name your function and its two inputs (temp, wind).",
        "Write one branch using AND or OR, then other branches with RETURN values.",
        "Pick a sample input and trace which value it returns."
      ]
    }
  ],
  reflectionPrompt: "A function lets you reuse one set of rules on many inputs. What's one winter decision you'd rather compute for a whole LIST of readings (a week of forecasts) than one value at a time?",
  misconceptionBank: [
    {
      id: "boundary-off-by-one",
      label: "Confuses the boundary in comparison operators",
      description: "Mixes up whether the exact cut-off value counts, e.g., treating '<= 0' as if 0 is excluded, or missing the boundary item when counting a list.",
      coachMove: "Read the operator aloud: '<=' is 'less than OR EQUAL to,' so the boundary counts. Always test the exact edge value, including inside loops."
    },
    {
      id: "and-or-confusion",
      label: "Swaps AND and OR in compound conditions",
      description: "Uses AND (needs both) when only one condition should be required, or OR when both are truly needed.",
      coachMove: "Say it in English: 'either one' means OR; 'both at once' means AND. Test a case where only one part is true and check the branch fires as intended."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Compound Condition",
      prompt:
        "A function returns 'Alert' IF temp < 0 OR wind > 30, ELSE 'Fine.' It's called with temp = 4 and wind = 35. Trace it — what comes back, and why is OR the reason? Don't peek!",
      answer:
        "temp < 0 is 4 < 0 → FALSE. But wind > 30 is 35 > 30 → TRUE. With OR, only ONE part needs to be true, so the whole condition is TRUE and the function returns 'Alert.' If it had been AND, the false part would have made it 'Fine.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Code a Winter Helper Function",
      challenge:
        "Design a winter helper as a FUNCTION with parameters that returns advice, using at least one compound (AND/OR) condition. Then run it over a LIST of at least four readings and record what it returns for each, proving the logic with a boundary test.",
      materials: ["Paper & pencil, OR a device / block-coding or Python editor"],
      steps: [
        "Define your function's name and inputs (e.g., helper(temp, wind)).",
        "Write the rules in order, including one compound condition and clear RETURN values.",
        "Make a LIST of at least four test inputs, including one AT a boundary value.",
        "Trace each input through the function and record the returned advice in a table."
      ],
      deliverable: "A function definition plus a 4-row trace table (input list → returned advice) that includes a boundary test and at least one compound condition.",
      choiceBoard: [
        "Write the pseudocode function and the trace table.",
        "Draw a flowchart with decision diamonds for each condition, including the AND/OR branch.",
        "Type it as real code (blocks or Python) and paste the output for each list item."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Functions & Logic Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.code.w6.d2.arena1",
          type: "numeric",
          stem: "A function counts 'danger hours' from a list of readings. An hour is a danger hour when temp < 0 AND wind > 20. Given pairs (temp, wind): (-2, 25), (-1, 10), (1, 30), (-5, 22), (-3, 18), how many danger hours does it count?",
          answer: 2,
          tolerance: 0,
          unit: "hours",
          hintLadder: [
            "For each pair, BOTH temp < 0 AND wind > 20 must be true.",
            "(-2,25): both true ✓. (-1,10): wind fails ✗. (1,30): temp fails ✗. (-5,22): both true ✓. (-3,18): wind fails ✗.",
            "Only two pairs satisfy both conditions."
          ],
          explanation: "AND needs both true. (-2,25) ✓, (-1,10) ✗ (wind 10 not > 20), (1,30) ✗ (temp 1 not < 0), (-5,22) ✓, (-3,18) ✗ (wind 18 not > 20). Count = 2.",
          misconceptionsTargeted: ["and-or-confusion"]
        },
        {
          id: "g7.winter.code.w6.d2.arena2",
          type: "short_answer",
          stem: "A student wrote: RETURN 'Bundle up' IF temp < 0 AND wind > 20. They complain it stays silent on a still, bitterly cold -15°C morning with no wind. Explain the bug and rewrite the condition so extreme cold alone (regardless of wind) also triggers the warning.",
          rubric: {
            level3: "Identifies that AND requires BOTH parts, so calm extreme cold (wind not > 20) fails the wind test, AND fixes it by adding an OR for extreme cold, e.g., IF (temp < 0 AND wind > 20) OR temp < -10.",
            level2: "Spots that AND is too strict but the rewritten condition is unclear or only partly correct.",
            level1: "Does not identify the AND problem or provides no working fix."
          },
          exemplar: "The bug is that AND needs BOTH conditions true. On a calm -15°C morning, temp < 0 is true but wind > 20 is false, so the AND is false and nothing prints. Fix it with an OR that catches extreme cold on its own: RETURN 'Bundle up' IF (temp < 0 AND wind > 20) OR temp < -10. Now -15°C triggers the warning even with no wind.",
          hintLadder: [
            "With AND, what happens when one part (wind) is false?",
            "You need extreme cold to fire the warning by itself.",
            "Add an OR branch like OR temp < -10 to the condition."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: AND / OR Freeze",
      prompt:
        "Play a body-logic game. A caller shouts two conditions like 'cold AND windy' (do BOTH moves — shiver and sway) or 'snowy OR icy' (do EITHER move — one is enough). For AND you must show both; for OR just one. Play 6 fast rounds and catch yourself if you mix them up.",
      scienceTieIn: "Your brain constantly runs compound conditions — 'IF tired AND cold, THEN seek shelter.' Practicing AND vs OR with your body makes the logic distinction stick, and the movement resets your focus between rounds.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You built logic that reads inputs and returns advice. If you could wrap ONE repeated decision from your own winter mornings into a function, what would its inputs be and what would it return?",
      badge: { id: "g7-winter-function-forge", name: "Function Forge Engineer", emoji: "🧩" },
      estimatedMinutes: 7
    }
  }
};
