// Grade 7 Coding/CS/AI — Fall Expedition, Week 2 (Ecosystems & Food Webs),
// Day 3. Topic: modeling a predator-prey cycle — pitched up to functions,
// state variables, loops with conditionals, tracing, and debugging.

export const fallG7CodingW2D3 = {
  id: "g7.fall.code.w2.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Model a predator-prey cycle",
  topicTag: "simulation-rules",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-11"],
  hook: "Ecologists model ecosystems by storing populations in variables and updating them each season inside a loop. Today you trace a predator-prey simulation, package its rules into a reusable function, and hunt down a bug that breaks the cycle.",
  miniLesson: [
    "A simulation keeps STATE in variables (e.g. rabbits, foxes) and updates them each loop iteration. One iteration = one season.",
    "The update rules can multiply, add, and use conditionals: rabbits might grow by a percentage, then foxes eat a number that DEPENDS on how many foxes there are (IF/THEN logic). Order of operations inside the loop changes the result.",
    "Wrapping the season's rules in a FUNCTION like step(rabbits, foxes) lets you reuse the same logic every iteration and test it on any inputs — the core idea behind reusable, debuggable code."
  ],
  workedExample: {
    prompt: "A function runs one season: rabbits grow 50% (rabbits = rabbits + rabbits × 0.5), then foxes eat 8 rabbits. Start with 40 rabbits. How many rabbits after one season?",
    steps: [
      "Read the state: rabbits = 40.",
      "Apply the growth rule first: 40 + (40 × 0.5) = 40 + 20 = 60.",
      "Apply the predation rule next: 60 − 8 = 52.",
      "Order matters — growth is calculated on the START value, then predation subtracts. After one season: 52 rabbits."
    ],
    answer: "52 rabbits"
  },
  items: [
    {
      id: "g7.fall.code.w2.d3.q1",
      type: "numeric",
      stem: "One season: rabbits = rabbits + rabbits × 0.25 (grow 25%), then foxes eat 10. Start with 80 rabbits. How many rabbits after one season?",
      answer: 90,
      tolerance: 0,
      unit: "rabbits",
      hintLadder: [
        "Compute the 25% growth on the starting value: 80 × 0.25.",
        "Add that to 80, THEN subtract 10.",
        "80 + 20 = 100, then 100 − 10 = 90."
      ],
      explanation: "80 × 0.25 = 20, so 80 + 20 = 100 after growth, then 100 − 10 = 90 rabbits."
    },
    {
      id: "g7.fall.code.w2.d3.q2",
      type: "multiple_choice",
      stem: "A loop runs the rule 'foxes = foxes × 2' but ONLY inside 'IF rabbits >= 50'. During a season the state is rabbits = 45, foxes = 6. After this rule, foxes = ?",
      choices: [
        "12, because the rule always runs",
        "The loop crashes",
        "0, because there aren't enough rabbits",
        "6, because 45 >= 50 is false so the foxes are unchanged"
      ],
      answerIndex: 3,
      explanation: "45 >= 50 is false, so the conditional block is skipped and foxes keep their current value of 6.",
      hintLadder: [
        "First evaluate the condition: is 45 >= 50?",
        "If the condition is false, the body of the IF does not run.",
        "45 >= 50 is false, so foxes stay at 6."
      ],
      misconceptionsTargeted: ["conditional-body-always-runs"]
    },
    {
      id: "g7.fall.code.w2.d3.q3",
      type: "numeric",
      stem: "A loop runs 3 times. Each iteration: rabbits = rabbits × 2 − 10. Start with rabbits = 30. What is the final value after the 3rd iteration?",
      answer: 170,
      tolerance: 0,
      unit: "rabbits",
      hintLadder: [
        "Iteration 1: 30 × 2 − 10.",
        "Feed each result back in as the new rabbits value.",
        "30 → 50 → 90 → 170."
      ],
      explanation: "Iter 1: 30 × 2 − 10 = 50. Iter 2: 50 × 2 − 10 = 90. Iter 3: 90 × 2 − 10 = 170 rabbits."
    },
    {
      id: "g7.fall.code.w2.d3.q4",
      type: "multiple_choice",
      stem: "A student wants foxes to eat rabbits BEFORE the rabbits reproduce, but their loop reproduces first. What KIND of bug is this?",
      choices: [
        "A logic/ordering error — the code runs but the rules happen in the wrong order, giving wrong results",
        "A syntax error — the code won't run at all",
        "A hardware failure",
        "There is no bug; order never matters in a loop"
      ],
      answerIndex: 0,
      explanation: "The code runs fine but produces the wrong answer because the statements execute in the wrong order — a logic (ordering) bug, not a syntax error.",
      hintLadder: [
        "Does the code fail to run, or run but give a wrong result?",
        "Wrong-result-but-runs points to a logic error.",
        "Here the operations are in the wrong ORDER."
      ]
    },
    {
      id: "g7.fall.code.w2.d3.q5",
      type: "short_answer",
      stem: "Write, in words or pseudocode, a function step(rabbits, foxes) that runs ONE season with at least one conditional. State what it returns and why the order of the steps matters.",
      rubric: {
        level3: "Defines a function taking rabbits and foxes, includes an ordered growth/predation rule AND a conditional (e.g. IF rabbits high, foxes grow), states the returned updated values, AND justifies the order.",
        level2: "Gives a reasonable function with a conditional but order justification is weak, or the return value is unstated.",
        level1: "No conditional, or the steps don't model predator-prey, or no function structure."
      },
      exemplar: "step(rabbits, foxes): first rabbits = rabbits + rabbits × 0.3 (they reproduce). Then foxes eat: rabbits = rabbits − foxes × 2. Then IF rabbits > 100, foxes = foxes + 1 (extra food lets foxes grow). Return the new rabbits and foxes. Order matters because if foxes ate before reproduction, the newborn rabbits would never be available to eat, changing the result.",
      hintLadder: [
        "Name the function and its inputs: step(rabbits, foxes).",
        "Add a growth step, a predation step, and one IF/THEN.",
        "Say what it returns and why swapping the steps would change the numbers."
      ]
    }
  ],
  reflectionPrompt: "Real ecosystems have many species and random events. What's one extra variable or conditional you'd add to your step() function to make the model more realistic — and what new behavior might it produce?",
  misconceptionBank: [
    {
      id: "conditional-body-always-runs",
      label: "Thinks the body of an IF always runs",
      description: "Executes the THEN block without first checking whether the condition is true.",
      coachMove: "Have the student read the IF aloud as a yes/no question and only run the body when the answer is 'yes'. Trace one false case by hand to prove the body is skipped."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "A function runs one season: rabbits = rabbits × 3, then rabbits = rabbits − 20. It starts with rabbits = 12. What does it return? Trace both statements in order before you peek.",
      answer:
        "12 × 3 = 36, then 36 − 20 = 16. It returns 16 rabbits. Statements run top to bottom, so multiply first, then subtract!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Code a Season Function",
      challenge:
        "Design a predator-prey simulation on paper. Write a step(prey, predators) function with an ordered growth rule, a predation rule, and at least one conditional. Then hand-trace it for 3 seasons in a state table and describe the cycle you see.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Choose a prey and predator and pick starting counts.",
        "Write step(prey, predators): a growth rule, a predation rule, and one IF/THEN, in order.",
        "Make a table with columns Season, Prey, Predators and trace 3 seasons.",
        "Write one sentence describing the up-and-down cycle and where a bug in the ORDER would change it."
      ],
      deliverable: "A step() function in pseudocode plus a 3-season trace table showing the population cycle.",
      choiceBoard: [
        "Write the function and fill in the trace table.",
        "Draw a line graph of prey and predators over your 3 traced seasons.",
        "Write a flowchart showing the order the statements and the conditional run each season."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Simulation Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.code.w2.d3.arena1",
          type: "numeric",
          stem: "A loop runs TWO seasons. Each season: rabbits = rabbits × 2, then rabbits = rabbits − 12. Start with rabbits = 20. How many rabbits after the SECOND season? Trace each step.",
          answer: 44,
          tolerance: 0,
          unit: "rabbits",
          hintLadder: [
            "Season 1: double 20, then subtract 12.",
            "Season 1 ends at (20 × 2) − 12 = 28.",
            "Season 2: double 28, then subtract 12."
          ],
          explanation: "Season 1: 20 × 2 = 40, then 40 − 12 = 28. Season 2: 28 × 2 = 56, then 56 − 12 = 44 rabbits."
        },
        {
          id: "g7.fall.code.w2.d3.arena2",
          type: "short_answer",
          stem: "This buggy season code is meant to let foxes grow only when prey is plentiful, but foxes grow every season no matter what:\n  rabbits = rabbits + 15\n  foxes = foxes + 1\n  if rabbits > 100: (nothing here)\nIdentify the bug and rewrite the code so foxes ONLY grow when rabbits > 100.",
          rubric: {
            level3: "Identifies that 'foxes = foxes + 1' sits OUTSIDE the conditional (so it always runs) AND rewrites it so the increment is inside the IF rabbits > 100 block.",
            level2: "Spots that foxes grow unconditionally but the rewrite is incomplete or misplaces the statement.",
            level1: "Does not locate the bug or the fix doesn't gate the growth on the condition."
          },
          exemplar: "The bug is that 'foxes = foxes + 1' runs on its own line, outside the IF, so it happens every season. Fix: put it inside the conditional — rabbits = rabbits + 15; if rabbits > 100: foxes = foxes + 1. Now foxes only grow when there are more than 100 rabbits.",
          hintLadder: [
            "Which line runs regardless of the condition?",
            "The fox increment needs to be INSIDE the IF block.",
            "Move 'foxes = foxes + 1' under 'if rabbits > 100'."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cycle Sway",
      prompt:
        "Loop the predator-prey cycle with your body: grow TALL with arms wide (prey booming), then crouch low as predators move in, then rise again as prey recover. Run the 'loop' 4 iterations, calling out the season number each time.",
      scienceTieIn: "Rhythmic movement pumps oxygen-rich blood to your brain, sharpening focus — your body runs on cycles just like a looped simulation does.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions let you reuse the same rules over and over. What's one everyday routine you could package as a 'function' with inputs, ordered steps, and a result?",
      badge: { id: "g7-fall-sim-function-coder", name: "Sim Function Coder", emoji: "🦊" },
      estimatedMinutes: 7
    }
  }
};
