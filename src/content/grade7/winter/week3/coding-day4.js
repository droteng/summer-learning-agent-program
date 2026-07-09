// Grade 7 Coding/CS/AI — Winter Expedition, Week 3 (Forces & Motion),
// Day 4. Grade 7 counterpart of g6.winter.code.w3.d4. Same topic —
// simulate motion with a loop — pitched one level up: using FUNCTIONS
// and a DATA STRUCTURE (a list/array of positions) to record every step,
// plus modeling acceleration by updating the speed variable inside the
// loop. Frozen-world game-engine tone, age 12–13.

export const winterG7CodingW3D4 = {
  id: "g7.winter.code.w3.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 4,
  subject: "Coding/Computer Science/AI",
  topic: "Simulate motion with a loop, functions, and a list of positions",
  topicTag: "motion-loop",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-14"],
  hook: "A real game engine doesn't just move a sled — it records where the sled was every single frame so it can draw a trail, replay the run, or detect a crash. Today you level up your loop: you'll package it into a FUNCTION and store every position in a LIST, then bend the rules to make the sled accelerate.",
  miniLesson: [
    "A FUNCTION is reusable code you can call with different inputs. simulate(start, speed, seconds) can run the same motion loop for any sled, so you don't rewrite it each time.",
    "A LIST (array) holds many values in order. Instead of just tracking the final position, we APPEND each second's position to a list — positions = [0, 5, 10, 15, 20] records the sled's whole journey, and positions[i] reads the position at second i.",
    "To model ACCELERATION, update the speed itself inside the loop before moving: each second do speed = speed + a, then position = position + speed. Now the sled gains distance faster every second, like a sled speeding up downhill."
  ],
  workedExample: {
    prompt: "A function starts a sled at position 0 with speed 4, appending the position after each second for 3 seconds (steady speed). What list of positions does it build?",
    steps: [
      "Start position = 0. Create positions = [0] to record the start.",
      "Second 1: position = 0 + 4 = 4. Append → [0, 4].",
      "Second 2: position = 4 + 4 = 8. Append → [0, 4, 8].",
      "Second 3: position = 8 + 4 = 12. Append → [0, 4, 8, 12]."
    ],
    answer: "positions = [0, 4, 8, 12]"
  },
  items: [
    {
      id: "g7.winter.code.w3.d4.q1",
      type: "numeric",
      stem: "A sled starts at position 0 with a steady speed of 5, and the loop appends the position each second for 4 seconds. In the list positions = [0, 5, 10, 15, 20], what value is stored at positions[3]? (Lists are indexed starting at 0.)",
      answer: 15,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Index 0 is the FIRST element, so count 0, 1, 2, 3.",
        "positions[0]=0, positions[1]=5, positions[2]=10, positions[3]=?",
        "positions[3] = 15."
      ],
      explanation: "Lists start at index 0: [0(idx0), 5(idx1), 10(idx2), 15(idx3), 20(idx4)]. So positions[3] = 15.",
      misconceptionsTargeted: ["off-by-one-index"]
    },
    {
      id: "g7.winter.code.w3.d4.q2",
      type: "numeric",
      stem: "A sled ACCELERATES. It starts at position 0 with speed 2, and each second the loop does speed = speed + 2, THEN position = position + speed. What is the position after 3 seconds?",
      answer: 18,
      tolerance: 0,
      unit: "meters",
      hintLadder: [
        "Each second: first raise the speed by 2, THEN add the new speed to position.",
        "Second 1: speed 2→4, position 0+4=4. Second 2: speed 4→6, position 4+6=10.",
        "Second 3: speed 6→8, position 10+8=18."
      ],
      explanation: "Speed updates first each second. S1: speed 2+2=4, pos 0+4=4. S2: speed 4+2=6, pos 4+6=10. S3: speed 6+2=8, pos 10+8=18. Final position = 18 meters.",
      misconceptionsTargeted: ["accel-order-swapped"]
    },
    {
      id: "g7.winter.code.w3.d4.q3",
      type: "multiple_choice",
      stem: "Why store each second's position in a LIST instead of just keeping the final position in one variable?",
      choices: [
        "A list makes the sled move faster",
        "A list records the whole journey, so you can replay it, draw a trail, or check the position at any past second",
        "A single variable can never hold a number",
        "Lists are required or the loop won't run"
      ],
      answerIndex: 1,
      explanation: "A list keeps every step in order, so you can look back at positions[i] for any second, plot the path, or replay the motion — a single variable only remembers the last value.",
      hintLadder: [
        "What does a list keep that a single variable throws away?",
        "Think about drawing a trail or replaying the run.",
        "The list stores the position at EVERY second, not just the last."
      ]
    },
    {
      id: "g7.winter.code.w3.d4.q4",
      type: "multiple_choice",
      stem: "You wrote simulate(start, speed, seconds) as a FUNCTION. Why is that better than copying the loop each time you add a new sled?",
      choices: [
        "You can call the same function with different inputs to simulate any sled, so you write and fix the logic once",
        "Functions delete your other code",
        "Functions make the numbers random",
        "It forces every sled to have the same speed"
      ],
      answerIndex: 0,
      explanation: "A function packages the loop once. Calling simulate with different start, speed, and seconds reuses that logic for any sled, and a fix in one place fixes them all.",
      hintLadder: [
        "What is the point of writing code once and reusing it?",
        "A function takes inputs and runs the same steps for each.",
        "Reuse: call it with different values instead of copy-pasting."
      ]
    },
    {
      id: "g7.winter.code.w3.d4.q5",
      type: "short_answer",
      stem: "In plain words (pseudocode), write a FUNCTION simulate(start, speed, seconds) that begins a list with the start position, then loops for the given seconds appending position = position + speed each time. Then give the list it returns for simulate(0, 6, 3).",
      rubric: {
        level3: "Writes a function taking start, speed, seconds; initializes position = start and a list containing start; loops 'seconds' times doing position = position + speed and appending; AND correctly gives simulate(0, 6, 3) = [0, 6, 12, 18].",
        level2: "Function and loop are mostly right but the initialization, the append, or the final list has a small error.",
        level1: "No working function/loop or an incorrect returned list with no reasoning."
      },
      exemplar: "FUNCTION simulate(start, speed, seconds): SET position = start. SET positions = [start]. REPEAT seconds times: position = position + speed; APPEND position to positions. RETURN positions. For simulate(0, 6, 3): start 0 → [0], then 6, 12, 18 → [0, 6, 12, 18].",
      hintLadder: [
        "Begin: position = start, and a list holding start.",
        "Loop 'seconds' times: add speed to position, then append it.",
        "Trace simulate(0, 6, 3): 0, then 6, 12, 18."
      ]
    }
  ],
  reflectionPrompt: "Functions and lists let a game engine simulate and REMEMBER motion. What moving thing (a game character, an elevator, a delivery drone) could you simulate by storing its position each step in a list?",
  misconceptionBank: [
    {
      id: "off-by-one-index",
      label: "Confuses a list's index with its position number (off-by-one)",
      description: "Reads positions[3] as the 3rd second's value instead of the 4th element, forgetting that lists are indexed from 0.",
      coachMove: "Have them label each element with its index starting at 0 and count aloud. positions[0] is the FIRST element, so positions[3] is the fourth."
    },
    {
      id: "accel-order-swapped",
      label: "Adds the speed to position BEFORE updating the speed when modeling acceleration",
      description: "Runs position = position + speed first and then speed = speed + a, so the acceleration lags one step behind the intended trace.",
      coachMove: "Fix the order explicitly: for the intended model, raise the speed FIRST (speed = speed + a), then move (position = position + speed). Trace one or two steps to confirm."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the List",
      prompt:
        "A sled starts at position 0 with a steady speed of 8, and the loop appends the position each second for 3 seconds. Predict the WHOLE list of positions (including the starting 0) before you check!",
      answer:
        "Start [0], then 0+8=8, 8+8=16, 16+8=24. The list is [0, 8, 16, 24] — four entries: the start plus one per second.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Position-List Motion Simulator",
      challenge:
        "Hand-run a 'motion simulator' that BUILDS A LIST. Pick a start and speed, run the loop 'position = position + speed' for several seconds, appending each result to a positions list, then plot the whole list on a number line. Bonus: rerun it as an ACCELERATING sled (bump the speed each second).",
      materials: ["Paper & pencil, OR a spreadsheet", "A ruler to draw a number line"],
      steps: [
        "Choose a start position and a speed; write positions = [start].",
        "Make a table: Second, Speed, Position — and append each new position to your list.",
        "Run the loop by hand for at least 4 seconds, filling the list in order.",
        "Plot every value in the list on a number line, then rerun with speed = speed + 1 each second and compare the two trails."
      ],
      deliverable: "A completed positions LIST, its trace table, and a number line showing both the steady and accelerating sleds.",
      choiceBoard: [
        "Fill in the trace table and mark every list value on a number line.",
        "Draw the loop as flowchart boxes, adding an 'append to list' box each cycle.",
        "Write the simulate() function as labeled pseudocode and hand-trace two different calls."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Motion Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.code.w3.d4.arena1",
          type: "numeric",
          stem: "An ACCELERATING sled starts at position 0 with speed 3. Each second the loop does speed = speed + 3, THEN position = position + speed. After 4 seconds, what is the final position? Trace each step.",
          answer: 42,
          tolerance: 0,
          unit: "meters",
          hintLadder: [
            "Each second: raise speed by 3 FIRST, then add it to position.",
            "S1: speed 3→6, pos 0+6=6. S2: speed 6→9, pos 6+9=15.",
            "S3: speed 9→12, pos 15+12=27. S4: speed 12→15, pos 27+15=42."
          ],
          explanation: "S1: speed 3+3=6, pos 0+6=6. S2: speed 6+3=9, pos 6+9=15. S3: speed 9+3=12, pos 15+12=27. S4: speed 12+3=15, pos 27+15=42. Final position = 42 meters."
        },
        {
          id: "g7.winter.code.w3.d4.arena2",
          type: "multiple_choice",
          stem: "You want the simulate() function to also DETECT when the sled passes position 100 and stop early. What programming tool best adds that behavior inside the loop?",
          choices: [
            "Nothing — a loop can never stop early",
            "Deleting the positions list",
            "An IF condition that checks 'if position >= 100' and breaks/returns out of the loop",
            "Making the speed negative"
          ],
          answerIndex: 2,
          explanation: "An IF condition tests the position each loop; when 'position >= 100' becomes true, you break or return to stop early — that's conditional logic controlling the loop.",
          hintLadder: [
            "You need the loop to make a DECISION each second.",
            "What structure checks 'if something is true, then act'?",
            "An IF condition that stops the loop when position >= 100."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Accelerating Steps",
      prompt:
        "Be an accelerating sled: take 1 slow step, then 2 steps, then 3 steps, then 4 steps in the same beat — each 'second' you add one more step, just like speed = speed + 1. After the 4th round, freeze and take 3 slow breaths to 'return the list.'",
      scienceTieIn: "Adding one more step each round is acceleration in action — your speed (steps per beat) grew every second, exactly the update your loop makes to the speed variable.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A function plus a list can simulate and record any motion. Describe something you could program by storing its position in a list each step — and one thing you'd learn from looking back at the whole list.",
      badge: { id: "g7-winter-simulation-architect", name: "Simulation Architect", emoji: "💻" },
      estimatedMinutes: 7
    }
  }
};
