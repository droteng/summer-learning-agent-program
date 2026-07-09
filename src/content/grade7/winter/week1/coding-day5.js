// Grade 7 Coding/CS/AI — Winter Expedition, Week 1 (Winter Warm-Up), Day 5.
// Topic: sequencing raised into algorithms with variables, conditionals, loops,
// and tracing/debugging a parameterized winter routine (the Grade 7 level-up of
// Grade 6's ordered-steps winter morning routine).

export const winterG7CodingW1D5 = {
  id: "g7.winter.code.w1.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Algorithms with variables, conditionals, and loops for a winter routine",
  topicTag: "variables-conditionals-loops",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-13"],
  hook: "A computer does exactly what you tell it — but a smart algorithm can DECIDE and REPEAT. 'If the temperature is below zero, add a scarf' and 'put on 3 layers, one at a time' let one routine handle any winter morning. Today you build, trace, and debug an algorithm that uses variables, conditionals, and loops.",
  miniLesson: [
    "A VARIABLE is a named box that stores a value you can use and change — like layers = 0 or temperature = -5. As the algorithm runs, a variable's value can update.",
    "A CONDITIONAL runs a step only IF something is true: 'IF temperature < 0, THEN add a scarf.' If the condition is false, that step is skipped.",
    "A LOOP repeats steps so you don't rewrite them: 'REPEAT 3 times: add one layer' runs the same action three times. To TRACE code, you step through it in order, updating each variable's value as you go — exactly how a computer runs it and how you DEBUG when the output is wrong."
  ],
  workedExample: {
    prompt: "Trace this algorithm. Start: layers = 0. Step 1: REPEAT 3 times { layers = layers + 1 }. Step 2: IF layers < 4 { layers = layers + 1 }. What is layers at the end?",
    steps: [
      "Start with the variable: layers = 0.",
      "Run the loop 3 times, adding 1 each pass: 0 → 1 → 2 → 3. After the loop, layers = 3.",
      "Check the conditional: is 3 < 4? Yes, so run its body: layers = 3 + 1 = 4.",
      "No more steps, so the final value is layers = 4."
    ],
    answer: "layers = 4."
  },
  items: [
    {
      id: "g7.winter.code.w1.d5.q1",
      type: "multiple_choice",
      stem: "In an algorithm, what is a VARIABLE?",
      choices: [
        "A step that always runs last",
        "A named storage box that holds a value you can use and change as the program runs",
        "A loop that never ends",
        "A comment the computer ignores"
      ],
      answerIndex: 1,
      explanation: "A variable is a named place to store a value (like layers = 2) that the program can read and update while it runs.",
      hintLadder: [
        "Think of something that holds a value you can change, like a score.",
        "It has a NAME and a VALUE.",
        "A named box that stores a changeable value is a variable."
      ]
    },
    {
      id: "g7.winter.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "A routine says: IF temperature < 0 { add a scarf }. The temperature variable is 3. What happens when this step runs?",
      choices: [
        "A scarf is added, because the step is written down",
        "The program crashes",
        "No scarf is added, because 3 < 0 is false so the IF body is skipped",
        "The temperature changes to 0"
      ],
      answerIndex: 2,
      explanation: "The condition 3 < 0 is FALSE, so the conditional's body ('add a scarf') is skipped. A conditional only runs its body when the condition is true.",
      hintLadder: [
        "Check the condition first: is 3 less than 0?",
        "3 < 0 is false.",
        "When an IF condition is false, its body is skipped."
      ],
      misconceptionsTargeted: ["conditional-always-runs"]
    },
    {
      id: "g7.winter.code.w1.d5.q3",
      type: "numeric",
      stem: "Trace this: layers = 1. REPEAT 4 times { layers = layers + 1 }. After the loop finishes, what is the value of layers?",
      answer: 5,
      tolerance: 0,
      unit: "layers",
      hintLadder: [
        "Start at layers = 1 and add 1 for each of the 4 loop passes.",
        "1 → 2 → 3 → 4 → 5 across the four repeats.",
        "1 + 4 = 5."
      ],
      explanation: "The loop adds 1 four times to a starting value of 1: 1 → 2 → 3 → 4 → 5, so layers = 5."
    },
    {
      id: "g7.winter.code.w1.d5.q4",
      type: "numeric",
      stem: "Trace this routine. Start: layers = 0, temperature = -6. Step 1: REPEAT 2 times { layers = layers + 1 }. Step 2: IF temperature < 0 { layers = layers + 1 }. Step 3: IF temperature < -10 { layers = layers + 1 }. What is the final value of layers?",
      answer: 3,
      tolerance: 0,
      unit: "layers",
      hintLadder: [
        "Do the loop first: two passes add 1 each, so layers goes 0 → 1 → 2.",
        "Step 2: is -6 < 0? Yes, so add 1 → layers = 3.",
        "Step 3: is -6 < -10? No, so skip it. Final layers = 3."
      ],
      explanation: "Loop: 0 → 1 → 2. Step 2 condition (-6 < 0) is true → 3. Step 3 condition (-6 < -10) is false → skipped. Final layers = 3."
    },
    {
      id: "g7.winter.code.w1.d5.q5",
      type: "short_answer",
      stem: "This algorithm is supposed to end with a warm friend wearing at least 3 layers on a cold day, but it always ends with only 1 layer. Find the BUG and explain how to fix it. Code: Start layers = 0. IF temperature < 0 { layers = layers + 1 }. (temperature = -8.) The programmer expected 3 layers.",
      rubric: {
        level3: "Identifies that a single conditional only adds ONE layer (so it can never reach 3) AND proposes a correct fix — e.g., use a loop that repeats 'add a layer' 3 times, or add three layer-adding steps — restoring the intended 3 layers.",
        level2: "Notices the routine can't reach 3 layers but the proposed fix (loop or repeated steps) is vague or partly wrong.",
        level1: "Blames the temperature or gives no correct bug/fix."
      },
      exemplar: "The bug is that the code only has ONE conditional that adds a single layer, so even when it runs it can never reach 3. The temperature is fine (-8 < 0 is true, so it does add 1). To fix it, replace the single step with a loop: REPEAT 3 times { layers = layers + 1 }, which takes layers from 0 up to 3. Now on a cold day the friend ends with 3 layers as intended.",
      hintLadder: [
        "Trace it: how many times does the code ever add a layer?",
        "One conditional can add at most one layer, but the goal is 3.",
        "Use a loop that repeats 'add a layer' three times to reach 3."
      ]
    }
  ],
  reflectionPrompt: "Where in your real winter routine would a CONDITIONAL help — 'IF it's snowing, THEN wear boots'? Name one decision your morning makes automatically that a computer would need an IF for.",
  misconceptionBank: [
    {
      id: "conditional-always-runs",
      label: "Thinks an IF step always runs",
      description: "Believes a step inside a conditional runs no matter what, ignoring that the condition must be true first.",
      coachMove: "Trace a conditional with a FALSE condition and show the body being skipped; emphasize that IF is a gate that only opens when the condition is true."
    },
    {
      id: "loop-runs-once",
      label: "Thinks a loop runs its body only once",
      description: "Forgets that a loop repeats its body multiple times, so they under-count how much a variable changes.",
      coachMove: "Have the student write the variable's value after EACH pass of the loop so they see it change once per repeat, not just once total."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Looping Layers Riddle",
      prompt:
        "A winter dressing bot starts with layers = 0. It runs: REPEAT 3 times { layers = layers + 1 }, then IF layers > 2 { layers = layers + 1 }. Trace it in your head — how many layers does the bot end up wearing, and why does the IF fire?",
      answer:
        "The loop adds 1 three times: 0 → 1 → 2 → 3, so layers = 3. Then the IF checks 3 > 2, which is TRUE, so it adds one more: layers = 4. The bot wears 4 layers.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Smart Dressing Algorithm",
      challenge:
        "Write a 'Smart Winter Dressing' algorithm that uses a variable, at least one conditional, and one loop, then trace it with two different temperatures to prove it adapts. Your algorithm should dress a friend right whether it's mildly cold or freezing.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "Set up a variable for temperature and a variable layers = 0.",
        "Use a LOOP to add a base number of layers (like REPEAT 2 times { layers = layers + 1 }).",
        "Add at least one CONDITIONAL, such as IF temperature < 0 { add a scarf / layers = layers + 1 }.",
        "TRACE your algorithm twice — once with a mild temperature and once freezing — and write the final layers each time to prove it adapts."
      ],
      deliverable: "A written algorithm using a variable, a loop, and a conditional, plus two traces (mild and freezing) showing the final layer counts.",
      choiceBoard: [
        "Write the algorithm in plain steps and show both traces in a small table.",
        "Draw a flowchart with a decision diamond for the conditional and a loop-back arrow.",
        "Make a 'debugging comic' showing the bot dressed wrong when a condition or loop is broken, then fixed."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Trace & Debug Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.code.w1.d5.arena1",
          type: "numeric",
          stem: "Trace this. Start: mittens = 0, cold = true. REPEAT 2 times { mittens = mittens + 1 }. IF cold is true { mittens = mittens + 1 }. Then mittens = mittens - 1 (one falls in the snow!). What is the final value of mittens?",
          answer: 2,
          tolerance: 0,
          unit: "mittens",
          hintLadder: [
            "Loop first: two passes add 1 each, 0 → 1 → 2.",
            "cold is true, so the IF adds 1: mittens = 3.",
            "The last line subtracts 1: 3 - 1 = 2."
          ],
          explanation: "Loop: 0 → 1 → 2. Conditional (cold is true) adds 1 → 3. Final subtraction removes 1 → 2 mittens."
        },
        {
          id: "g7.winter.code.w1.d5.arena2",
          type: "short_answer",
          stem: "A programmer wrote: REPEAT 5 times { layers = layers + 1 } but forgot to set layers to a starting value, and the bot behaves unpredictably. Explain what's wrong and how to fix it, using the idea of variables and loops.",
          rubric: {
            level3: "Identifies that the variable 'layers' was never INITIALIZED (given a starting value) before the loop uses it, so 'layers + 1' has no defined starting point, AND fixes it by setting layers = 0 (or another value) before the loop.",
            level2: "Notices the starting value is missing but the fix or the explanation of why it matters is vague.",
            level1: "Blames the loop count or gives no correct diagnosis."
          },
          exemplar: "The bug is that 'layers' was never given a starting value before the loop. The loop does layers = layers + 1, but on the first pass there's no defined value to add 1 to, so the result is unpredictable. The fix is to INITIALIZE the variable first — write layers = 0 before the loop. Then the 5 repeats take it cleanly from 0 up to 5.",
          hintLadder: [
            "Before you add 1 to a variable, what does it need to already have?",
            "The loop uses 'layers' but nothing ever set its starting value.",
            "Initialize it with layers = 0 before the loop runs."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop-and-Check Snow March",
      prompt:
        "Run an algorithm with your body. LOOP: repeat 'pull on a layer' (a shrug-up motion) 3 times, counting out loud 1, 2, 3. Then CHECK a conditional: if the caller shouts 'freezing!', add a big scarf-wrap motion; if 'mild!', skip it. Run the whole sequence twice with different calls.",
      scienceTieIn: "Repeating an action a set number of times and then branching on a signal mirrors how loops and conditionals run in code — and the movement pumps oxygen to your brain to keep your tracing sharp.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you traced and debugged code with variables, loops, and conditionals. Describe one bug you found (yours or in a problem) and how tracing it step by step helped you spot exactly where the value went wrong.",
      badge: { id: "g7-winter-loop-debugger", name: "Winter Loop Debugger", emoji: "🥾" },
      estimatedMinutes: 7
    }
  }
};
