// Grade 7 Coding/CS/AI — Winter Expedition, Week 2 (Energy & Matter), Day 4.
// Topic: model a cooling process with a loop — grade-7 depth with a function that
// takes parameters and returns a value, plus a list (array) storing each step's
// reading (data structure). Verify every trace.

export const winterG7CodingW2D4 = {
  id: "g7.winter.code.w2.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Model a cooling process with a loop and a function",
  topicTag: "cooling-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-13"],
  hook: "Leave cocoa on a frozen windowsill and it drops a few degrees each minute. A computer predicts exactly how cold it gets by running one rule in a loop — and if you wrap that loop in a FUNCTION, you can reuse it for any drink and store every reading in a list. Today you trace and design that machine.",
  miniLesson: [
    "A function is a reusable block that takes inputs (parameters) and hands back a result with 'return.' A cooling function might take startTemp, degreesPerMin, and minutes, run a loop inside, and RETURN the final temperature — so you can call it many times with different inputs.",
    "Inside the function a loop repeats the rule 'temp = temp − degreesPerMin' once per minute, and a variable 'temp' updates every pass. The loop needs a STOPPING condition (a set number of minutes, or 'until temp reaches a target') or it would run forever.",
    "A list (array) is a data structure that stores a sequence of values. Instead of only the final temperature, you can APPEND each minute's reading to a list — readings = [90, 86, 82, 78] — so you keep the whole cooling history to graph or search later."
  ],
  workedExample: {
    prompt: "A function coolDown(start, lossPerMin, minutes) runs a loop that subtracts lossPerMin each minute and appends each new reading to a list. Called as coolDown(90, 4, 3), what does the list of readings AFTER each minute contain, and what value is returned?",
    steps: [
      "Start: temp = 90 (not appended; it is the starting value before any minute runs).",
      "Minute 1: 90 − 4 = 86, append 86.",
      "Minute 2: 86 − 4 = 82, append 82.",
      "Minute 3: 82 − 4 = 78, append 78.",
      "List after each minute = [86, 82, 78]; the function returns the last value, 78."
    ],
    answer: "readings = [86, 82, 78]; returns 78 degrees C"
  },
  items: [
    {
      id: "g7.winter.code.w2.d4.q1",
      type: "numeric",
      stem: "A function coolDown(start, lossPerMin, minutes) subtracts lossPerMin each minute and returns the final temperature. What does coolDown(85, 6, 4) return, in degrees C?",
      answer: 61,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "The loop runs 4 times, each removing 6 degrees.",
        "4 × 6 = 24 degrees lost.",
        "85 − 24 = 61 degrees C."
      ],
      explanation: "coolDown loses 6 degrees for 4 minutes: 85 − (4 × 6) = 85 − 24 = 61 degrees C."
    },
    {
      id: "g7.winter.code.w2.d4.q2",
      type: "multiple_choice",
      stem: "In a function, what does the keyword 'return' do?",
      choices: [
        "It prints text to the screen and keeps the loop running",
        "It sends a value back out of the function so the caller can use it, and ends the function",
        "It resets every variable to zero",
        "It repeats the function from the top"
      ],
      answerIndex: 1,
      explanation: "'return' hands a result back to whatever called the function and stops the function there. That is how coolDown(...) gives you a temperature you can store or reuse.",
      hintLadder: [
        "Think about how you get a value OUT of a function.",
        "Does 'return' send something back to the caller?",
        "It returns a value and ends the function."
      ],
      misconceptionsTargeted: ["return-vs-print"]
    },
    {
      id: "g7.winter.code.w2.d4.q3",
      type: "multiple_choice",
      stem: "A loop appends each minute's temperature to a list called readings. After running coolDown(100, 10, 3), which list correctly shows the readings appended after each minute?",
      choices: [
        "[100, 90, 80]",
        "[90, 80, 70]",
        "[100, 90, 80, 70]",
        "[70]"
      ],
      answerIndex: 1,
      explanation: "The starting 100 is not appended (nothing has cooled yet). Minute 1: 90, minute 2: 80, minute 3: 70. So readings = [90, 80, 70].",
      hintLadder: [
        "Does the list store the start value or only values AFTER cooling each minute?",
        "Trace: 100 → 90 → 80 → 70; the start (100) is not appended.",
        "Three minutes append three values: [90, 80, 70]."
      ],
      misconceptionsTargeted: ["off-by-one-list"]
    },
    {
      id: "g7.winter.code.w2.d4.q4",
      type: "numeric",
      stem: "A loop runs 'temp = temp − 7' starting at temp = 90 and STOPS as soon as temp reaches 48 degrees C or lower. After how many minutes does it stop?",
      answer: 6,
      tolerance: 0,
      unit: "minutes",
      hintLadder: [
        "Trace: 90, 83, 76, 69, 62, 55, 48...",
        "How many −7 steps go from 90 down to 48?",
        "90 − 48 = 42, and 42 ÷ 7 = 6 minutes."
      ],
      explanation: "It drops 7 per minute. 90 − 48 = 42 degrees to lose, and 42 ÷ 7 = 6 minutes (90→83→76→69→62→55→48)."
    },
    {
      id: "g7.winter.code.w2.d4.q5",
      type: "short_answer",
      stem: "In plain words (or pseudocode), describe a FUNCTION named coolDown that takes a starting temperature, a degrees-lost-per-minute, and a number of minutes. Include the loop rule, how each reading is stored in a list, the stopping condition, and what the function returns.",
      rubric: {
        level3: "Defines a function with three parameters, a loop applying 'temp = temp − lossPerMin' each minute, appends each reading to a list, has a valid stopping condition (a minute count or target temp), AND returns a value (final temp or the list).",
        level2: "Includes the parameters and loop rule but is missing the list, the stopping condition, OR a return.",
        level1: "No clear function structure, or does not model cooling."
      },
      exemplar: "FUNCTION coolDown(start, lossPerMin, minutes): set temp = start; make an empty list readings; REPEAT minutes times: temp = temp − lossPerMin, append temp to readings; STOP after minutes loops; RETURN readings (and its last value is the final temperature).",
      hintLadder: [
        "Name the function and its three parameters first.",
        "Write the loop rule and show appending each reading to a list.",
        "State when it stops and what it returns."
      ]
    }
  ],
  reflectionPrompt: "A function packages one reusable rule so you can call it with any inputs. What is another everyday process (savings growing, a battery draining, a plant growing) you could wrap in a function that takes a few inputs and returns a prediction?",
  misconceptionBank: [
    {
      id: "return-vs-print",
      label: "Confuses returning a value with printing it",
      description: "Thinks 'return' just displays text, not realizing it hands a usable value back to the caller.",
      coachMove: "Show total = coolDown(80,5,3) then total − 2. Only a RETURNED value can be stored and reused in more math; printing cannot."
    },
    {
      id: "off-by-one-list",
      label: "Includes the start value when only post-step readings are stored",
      description: "Appends the starting temperature to a list that is supposed to hold only values after each loop, producing one extra element.",
      coachMove: "Trace the loop in a table, appending ONLY after the rule runs. The start value was never produced by the loop, so it is not in the list."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Cooling Function",
      prompt:
        "The function coolDown subtracts 8 degrees each minute and appends each new reading to a list. You call coolDown(96, 8, 4). Trace it by hand: what is the list of readings, and what value is returned? No peeking until you have both!",
      answer:
        "Minute 1: 96 − 8 = 88. Minute 2: 88 − 8 = 80. Minute 3: 80 − 8 = 72. Minute 4: 72 − 8 = 64. List = [88, 80, 72, 64], and the function returns 64 degrees C.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Reusable Cooling Function",
      challenge:
        "On paper, design a coolDown function for a hot drink of your choice. Pick a starting temperature and a degrees-lost-per-minute, write the function's parameters and loop rule, and build a trace table AND a readings list, running until the drink reaches 30 degrees C.",
      materials: ["Paper & pencil, OR a spreadsheet"],
      steps: [
        "Write the function header: coolDown(start, lossPerMin) and its purpose.",
        "Write the loop rule in words: 'each minute, temp = temp − lossPerMin, and append temp to readings.'",
        "Make a trace table (columns Minute, Temperature) and fill it until temp reaches 30 degrees C.",
        "Write out the final readings list and state what value the function returns."
      ],
      deliverable: "A written function header and loop rule, a completed trace table, and the final readings list that ends at or below 30 degrees C.",
      choiceBoard: [
        "Write the function, trace table, and readings list by hand.",
        "Draw a line graph of the readings list (temperature vs. minute).",
        "Write the function as numbered pseudocode with parameters, a loop, a list append, a stopping condition, and a return."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cooling Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.code.w2.d4.arena1",
          type: "numeric",
          stem: "coolDown(start, lossPerMin, minutes) returns the final temperature. What does coolDown(120, 9, 7) return, in degrees C?",
          answer: 57,
          tolerance: 0,
          unit: "degrees C",
          hintLadder: [
            "Seven loops each remove 9 degrees.",
            "7 × 9 = 63 degrees lost.",
            "120 − 63 = 57 degrees C."
          ],
          explanation: "coolDown(120, 9, 7): 120 − (7 × 9) = 120 − 63 = 57 degrees C."
        },
        {
          id: "g7.winter.code.w2.d4.arena2",
          type: "multiple_choice",
          stem: "A loop uses 'WHILE temp > 40: temp = temp − 10, append temp to readings.' Starting at temp = 70, what is the final readings list when the loop stops?",
          choices: [
            "[70, 60, 50, 40]",
            "[60, 50, 40]",
            "[60, 50, 40, 30]",
            "[70, 60, 50]"
          ],
          answerIndex: 1,
          explanation: "Check the condition BEFORE each pass. 70>40: append 60. 60>40: append 50. 50>40: append 40. Now 40>40 is false, so the loop stops. readings = [60, 50, 40]. The start (70) is never appended.",
          hintLadder: [
            "Trace: 70 → 60 (append) → 50 (append) → 40 (append).",
            "After appending 40, is 40 > 40 true? No — the loop stops.",
            "The start 70 is not appended: [60, 50, 40]."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cool-Down Countdown",
      prompt:
        "Stand tall and 'hot,' arms stretched high — that is your starting temp. Each minute you count down, subtract a step: lower your arms a little and soften your stance — 90, 82, 74, 66... — until you settle into a calm, cool, relaxed pose. Take one slow breath at the bottom of the loop.",
      scienceTieIn: "Your body steps down just like the loop subtracts a fixed amount each minute — and the gradual cool-down slows your heart rate and relaxes your muscles.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A function bundles one rule so you can reuse it and store its results in a list. What is one thing in your day you could predict by writing a function, calling it with your own inputs, and reading back the list of results?",
      badge: { id: "g7-winter-function-forger", name: "Function Forger", emoji: "☕" },
      estimatedMinutes: 7
    }
  }
};
