// Grade 6 Coding/CS/AI — Winter Expedition, Week 2 (Energy & Matter), Day 4.
// Topic: model a cooling process with a loop (a cup of cocoa losing degrees each minute).

export const winterG6CodingW2D4 = {
  id: "g6.winter.code.w2.d4",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Model a cooling process with a loop",
  topicTag: "cooling-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-12"],
  hook: "Leave a mug of cocoa on a cold windowsill and it cools a little each minute. A computer can predict exactly how cold it gets — by running one simple rule in a loop. Today you trace that loop step by step.",
  miniLesson: [
    "A loop repeats an action many times. To model cooling, we repeat one rule: 'each minute, temperature = temperature − (degrees lost).'",
    "A variable holds a value that changes as the loop runs. Here 'temp' starts high and gets smaller every time through the loop.",
    "The loop needs a STOPPING condition — for example, run for 5 minutes, or stop when temp reaches room temperature. Without one, the loop would run forever."
  ],
  workedExample: {
    prompt: "Cocoa starts at 90 degrees C and loses 4 degrees each minute. Using a loop, what is the temperature after 3 minutes?",
    steps: [
      "Start: temp = 90.",
      "Minute 1: 90 − 4 = 86.",
      "Minute 2: 86 − 4 = 82.",
      "Minute 3: 82 − 4 = 78. After 3 loops, temp = 78 degrees C."
    ],
    answer: "78 degrees C"
  },
  items: [
    {
      id: "g6.winter.code.w2.d4.q1",
      type: "numeric",
      stem: "Cocoa starts at 80 degrees C and the loop subtracts 5 degrees each minute. What is the temperature after 4 minutes?",
      answer: 60,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "Each loop subtracts 5. Four loops subtract 5 four times.",
        "4 × 5 = 20 degrees lost total.",
        "80 − 20 = 60 degrees C."
      ],
      explanation: "Losing 5 degrees for 4 minutes: 80 − (4 × 5) = 80 − 20 = 60 degrees C."
    },
    {
      id: "g6.winter.code.w2.d4.q2",
      type: "multiple_choice",
      stem: "In the rule 'temp = temp − 3', what does the variable 'temp' do as the loop repeats?",
      choices: [
        "It stays exactly the same every time",
        "It gets 3 smaller each time the loop runs",
        "It gets 3 bigger each time the loop runs",
        "It resets to zero every loop"
      ],
      answerIndex: 1,
      explanation: "The rule takes the current temp and subtracts 3, then stores the smaller result back in temp — so temp drops by 3 each loop.",
      hintLadder: [
        "Read the rule: temp becomes temp MINUS 3.",
        "Is 3 being added or subtracted?",
        "Each loop makes temp 3 smaller."
      ],
      misconceptionsTargeted: ["variable-frozen"]
    },
    {
      id: "g6.winter.code.w2.d4.q3",
      type: "multiple_choice",
      stem: "Why does a cooling loop need a STOPPING condition (like 'run 6 minutes' or 'stop at room temperature')?",
      choices: [
        "So the cocoa gets hotter",
        "Without one, the loop would repeat forever and never end",
        "Stopping conditions make the code look nicer only",
        "Loops always stop by themselves after one run"
      ],
      answerIndex: 1,
      explanation: "A loop keeps repeating until its condition tells it to stop. With no stopping condition, it would run endlessly.",
      hintLadder: [
        "What tells a loop when to quit?",
        "What happens if nothing ever says 'stop'?",
        "It would loop forever."
      ]
    },
    {
      id: "g6.winter.code.w2.d4.q4",
      type: "numeric",
      stem: "A loop runs the rule 'temp = temp − 6' starting at temp = 70. After how many minutes does the cocoa first reach 40 degrees C or lower?",
      answer: 5,
      tolerance: 0,
      unit: "minutes",
      hintLadder: [
        "Trace it: 70, 64, 58, 52, 46, 40...",
        "Count how many −6 steps it takes to get from 70 down to 40.",
        "70 − 40 = 30, and 30 ÷ 6 = 5 minutes."
      ],
      explanation: "It drops 6 per minute. 70 − 40 = 30 degrees to lose, and 30 ÷ 6 = 5 minutes (70→64→58→52→46→40)."
    },
    {
      id: "g6.winter.code.w2.d4.q5",
      type: "short_answer",
      stem: "In plain words, write the steps of a loop that models a cup of cocoa cooling. Include the starting temperature, the rule that repeats, and the stopping condition.",
      rubric: {
        level3: "Names a starting temp, a clear repeated rule (subtract some degrees each minute), AND a valid stopping condition (a set number of minutes or a target temperature).",
        level2: "Includes a start and a repeat rule but the stopping condition is missing or vague.",
        level1: "Missing the loop rule or does not model cooling."
      },
      exemplar: "Start: temp = 85. Repeat each minute: temp = temp − 4. Stop when temp reaches 20 degrees (room temperature) or after 15 minutes, whichever comes first.",
      hintLadder: [
        "State the starting temperature first.",
        "Write the rule that repeats every minute.",
        "Add when the loop should stop."
      ]
    }
  ],
  reflectionPrompt: "Cooling is just one rule repeated. What is another everyday change you could model by repeating a simple rule in a loop (savings growing, a phone battery draining)?",
  misconceptionBank: [
    {
      id: "variable-frozen",
      label: "Thinks a variable never changes inside a loop",
      description: "Believes a variable keeps its first value even when a rule reassigns it each loop.",
      coachMove: "Trace the variable in a small table, writing its new value after each loop, so the student sees it update every time."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Cooling Loop",
      prompt:
        "Cocoa starts at 95 degrees C. A loop subtracts 5 degrees each minute. Trace it by hand — what is the temperature after 4 minutes? No peeking until you have the number!",
      answer:
        "Minute 1: 95 − 5 = 90. Minute 2: 90 − 5 = 85. Minute 3: 85 − 5 = 80. Minute 4: 80 − 5 = 75. After 4 minutes it is 75 degrees C.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Own Cooling Simulator",
      challenge:
        "On paper, design a cooling loop for a hot drink of your choice. Pick a starting temperature and a 'degrees lost per minute,' then build a trace table showing the temperature for each minute until it reaches 30 degrees C.",
      materials: ["Paper & pencil, OR a spreadsheet"],
      steps: [
        "Choose a drink, a starting temperature, and how many degrees it loses each minute.",
        "Write your loop rule in words: 'each minute, temp = temp − ___.'",
        "Make a trace table with columns Minute and Temperature.",
        "Fill in each row until the temperature hits 30 degrees C, then circle when it stops."
      ],
      deliverable: "A written loop rule plus a completed trace table showing the drink cooling minute by minute to 30 degrees C.",
      choiceBoard: [
        "Write the rule and fill in the trace table by hand.",
        "Draw a line graph of temperature versus minute from your table.",
        "Write the loop as numbered pseudocode with a clear start, repeat rule, and stopping condition."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cooling Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.code.w2.d4.arena1",
          type: "numeric",
          stem: "A loop starts at temp = 100 and subtracts 8 each minute. What is the temperature after 6 minutes, in degrees C?",
          answer: 52,
          tolerance: 0,
          unit: "degrees C",
          hintLadder: [
            "Six loops each remove 8 degrees.",
            "6 × 8 = 48 degrees lost total.",
            "100 − 48 = 52 degrees C."
          ],
          explanation: "6 minutes × 8 degrees = 48 lost; 100 − 48 = 52 degrees C."
        },
        {
          id: "g6.winter.code.w2.d4.arena2",
          type: "multiple_choice",
          stem: "A loop uses the rule 'IF temp > 40, keep subtracting 10; otherwise stop.' Starting at temp = 60, after how many minutes does the loop STOP?",
          choices: [
            "After 1 minute (temp 50)",
            "After 2 minutes (temp 40), because 40 is not greater than 40",
            "It never stops",
            "After 6 minutes"
          ],
          answerIndex: 1,
          explanation: "Minute 1: 60 → 50 (50 > 40, continue). Minute 2: 50 → 40. Now 40 > 40 is false, so the loop stops after 2 minutes.",
          hintLadder: [
            "Trace it: 60 → 50 → 40.",
            "Check the condition 'temp > 40' after each step.",
            "At 40, is 40 > 40 true? No — so it stops."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cool-Down Countdown",
      prompt:
        "Stand tall and 'hot,' arms stretched high. Each time you count down a minute, lower your arms a little and soften your posture — 5, 4, 3, 2, 1 — until you settle into a calm, cool, relaxed stance. Take one slow breath at the bottom.",
      scienceTieIn: "Just like the cocoa loses heat one step at a time, your body winds down in steps — the gradual cool-down slows your heart rate and relaxes your muscles.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A loop repeats one rule to predict the future. What is one thing in your day you could predict by writing a loop rule and running it forward a few steps?",
      badge: { id: "cooling-loop-coder", name: "Cooling Loop Coder", emoji: "☕" },
      estimatedMinutes: 7
    }
  }
};
