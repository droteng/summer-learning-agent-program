// Grade 7 Coding/CS/AI — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 5. Topic: algorithms as ancient recipes, raised to FUNCTIONS (reusable
// named procedures with inputs) and DATA STRUCTURES (lists/records) that model
// an ancient process. Week capstone toward the fact-file.

export const fallG7CodingW4D5 = {
  id: "g7.fall.code.w4.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Algorithms are ancient recipes",
  topicTag: "algorithms-sequencing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-14"],
  hook: "Ancient builders repeated the same block-laying steps thousands of times. Instead of rewriting them, coders wrap repeated steps in a FUNCTION and store data in LISTS. Today you package algorithms and organize their data.",
  miniLesson: [
    "A function is a named, reusable set of steps you can 'call' again and again — like a recipe you can reuse instead of rewriting.",
    "Functions can take INPUTS (parameters) so the same procedure works on different data — layBlock(row) works for any row.",
    "A data structure organizes information: a LIST holds an ordered series of items (steps, blocks), and a RECORD groups labeled facts (a civilization's name, place, and date) so a program can use them together."
  ],
  workedExample: {
    prompt: "You keep writing 'lift block, carry block, place block' for every one of 100 blocks. How does a function with an input fix the repetition?",
    steps: [
      "Notice the same three steps repeat for every block — that's duplication.",
      "Wrap them in a function: define layBlock(blockNumber) { lift; carry; place; }",
      "Give it an INPUT so it knows which block: layBlock(1), layBlock(2), ...",
      "Now a loop can call layBlock for each item in the blocks list instead of rewriting the steps 100 times."
    ],
    answer: "Define layBlock(blockNumber) once, then call it for each block in the list — the function reuses the steps and the input adapts it to each block."
  },
  items: [
    {
      id: "g7.fall.code.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is a FUNCTION in programming?",
      choices: [
        "A single line that never repeats",
        "A type of ancient city",
        "A named, reusable set of steps you can call again and again",
        "A random pile of data"
      ],
      answerIndex: 2,
      explanation: "A function packages steps under a name so you can reuse them without rewriting — like a reusable recipe.",
      hintLadder: [
        "Think 'reusable recipe with a name.'",
        "It bundles steps you can call repeatedly.",
        "A named, reusable set of steps."
      ]
    },
    {
      id: "g7.fall.code.w4.d5.q2",
      type: "multiple_choice",
      stem: "A function makePapyrus(reedCount) takes reedCount as an INPUT. Why is the input useful?",
      choices: [
        "It makes the function longer for no reason",
        "The function ignores the input",
        "Inputs slow the function down",
        "It lets the SAME function work for different amounts of reed without rewriting it"
      ],
      answerIndex: 3,
      explanation: "A parameter (input) lets one function handle many cases — makePapyrus(10) and makePapyrus(50) reuse the same steps with different data.",
      hintLadder: [
        "Why pass a number INTO a function?",
        "So it can adapt to different values.",
        "One function, many inputs, no rewriting."
      ],
      misconceptionsTargeted: ["function-runs-once"]
    },
    {
      id: "g7.fall.code.w4.d5.q3",
      type: "multiple_choice",
      stem: "You want to store the ordered steps for making bread. Which data structure fits BEST?",
      choices: [
        "A LIST, because it holds items in order",
        "A single number",
        "A blank page",
        "A function name only"
      ],
      answerIndex: 0,
      explanation: "A list holds an ordered sequence of items — perfect for ordered steps like a recipe.",
      hintLadder: [
        "The steps have an ORDER that matters.",
        "Which structure keeps items in a sequence?",
        "A list stores ordered items."
      ]
    },
    {
      id: "g7.fall.code.w4.d5.q4",
      type: "short_answer",
      stem: "Here's a repetitive plan to store grain in 3 jars: 'clean jar 1, fill jar 1, seal jar 1; clean jar 2, fill jar 2, seal jar 2; clean jar 3, fill jar 3, seal jar 3.' Rewrite it using ONE function with an input, and explain why the function is better.",
      rubric: {
        level3: "Defines a function like storeJar(jarNumber) { clean; fill; seal; } called for jars 1–3 (or looped over a jar list) AND explains it removes repetition / is reusable and easier to fix.",
        level2: "Writes a function OR explains the benefit, but not both clearly, or the function lacks an input.",
        level1: "Just relists the steps with no function or reasoning."
      },
      exemplar: "Define storeJar(jarNumber) { clean the jar; fill the jar; seal the jar } and call storeJar(1), storeJar(2), storeJar(3) — or loop over a list of jars. It's better because the steps are written once, so there's less repetition and only one place to fix a bug.",
      hintLadder: [
        "The same three steps repeat for each jar — wrap them.",
        "Give the function an input for the jar number.",
        "Explain why writing steps once beats copying them."
      ]
    },
    {
      id: "g7.fall.code.w4.d5.q5",
      type: "short_answer",
      stem: "Design a RECORD (a group of labeled fields) to store one ancient civilization for a fact-file program. List at least 4 field names, and explain why a record is better than 4 loose variables.",
      rubric: {
        level3: "Lists 4+ sensible labeled fields (e.g., name, location, timePeriod, keyAchievement) AND explains a record keeps related data grouped/organized so it's easier to pass around and reuse.",
        level2: "Lists 4 fields OR explains the benefit, but not both clearly.",
        level1: "Fewer than 4 fields or no reasoning."
      },
      exemplar: "civilization = { name, location, timePeriod, keyAchievement, source }. A record is better than loose variables because all the related facts stay grouped under one civilization, so I can pass, store, or reuse it as a single organized unit instead of juggling five separate variables.",
      hintLadder: [
        "What labeled facts describe a civilization?",
        "Name at least four fields (name, place, date, achievement...).",
        "Explain why grouping related data beats scattered variables."
      ]
    }
  ],
  reflectionPrompt: "Functions let you reuse steps and records keep related data together. What's a repeated routine in your life you could turn into a reusable 'function'?",
  misconceptionBank: [
    {
      id: "function-runs-once",
      label: "Thinks a function can only run once",
      description: "Believes defining a function uses it up, rather than that it can be called repeatedly with different inputs.",
      coachMove: "Call the same function twice with different inputs (layBlock(1), layBlock(2)) to show reuse is the whole point."
    },
    {
      id: "order-doesnt-matter",
      label: "Thinks step order inside a function doesn't matter",
      description: "Assumes wrapping steps in a function removes the need to keep them in the right sequence.",
      coachMove: "Run a function with steps out of order (seal before fill) so the broken result shows sequence still matters inside functions."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Recipe You Only Write Once",
      prompt:
        "A pyramid needs 10,000 identical blocks laid the same way. A lazy-but-clever builder refuses to write the block-laying steps 10,000 times — yet every block still gets laid correctly. What programming idea is the builder using, and what does it need so it knows WHICH block to lay?",
      answer: "A function! The builder writes the block-laying steps ONCE as a named function and calls it for each block. It needs an INPUT (a parameter, like the block number) so the same function knows which block it's working on each time.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Ancient Task as a Function + Data",
      challenge:
        "Turn a repetitive ancient task into a reusable FUNCTION with an input, and store its data in a LIST or RECORD.",
      steps: [
        "Pick a repeated ancient task (laying blocks, filling grain jars, copying scrolls).",
        "Write the steps ONCE as a named function with an input, like fillJar(jarNumber).",
        "Show it being 'called' at least 3 times with different inputs.",
        "Store the items it works on in a LIST, or describe one item as a RECORD with labeled fields."
      ],
      deliverable: "A named function (with an input) called 3+ times, plus a list or record holding its data.",
      choiceBoard: [
        "Write the function and calls in plain 'pseudocode.'",
        "Draw a flowchart where one function box is reused by many arrows.",
        "Make a 'data card' showing one item as a record with labeled fields."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Functions Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.code.w4.d5.arena1",
          type: "multiple_choice",
          stem: "A function bakeBrick(clay) has steps: [1 shape the clay], [2 dry in the sun], [3 stack the finished brick]. A bug makes it output crumbling bricks. The steps run as 2 → 1 → 3. What's the fix?",
          choices: [
            "Delete the function",
            "Reorder the steps to 1 → 2 → 3 so the clay is shaped before it's dried",
            "Add more inputs",
            "Run it twice"
          ],
          answerIndex: 1,
          explanation: "Drying before shaping (2 before 1) ruins the brick. Even inside a function, step order matters: shape → dry → stack.",
          hintLadder: [
            "What has to happen to clay BEFORE it dries?",
            "You can't shape clay that's already dried hard.",
            "Correct order: shape → dry → stack (1 → 2 → 3)."
          ]
        },
        {
          id: "g7.fall.code.w4.d5.arena2",
          type: "short_answer",
          stem: "A program needs to make papyrus sheets of many sizes. Explain how ONE function with an input plus a LIST of sizes is better than writing separate steps for each size. Give a concrete example call.",
          rubric: {
            level3: "Explains a single function makeSheet(size) can be called for each size in a list (looping), avoiding duplication, AND gives a concrete example call like makeSheet(large) or looping over [small, medium, large].",
            level2: "Explains the reuse benefit OR gives an example call, but not both clearly.",
            level1: "No clear function/list idea or example."
          },
          exemplar: "Write makeSheet(size) once, then loop over a list [small, medium, large] calling makeSheet(size) for each — e.g., makeSheet(large). That reuses one set of steps for every size instead of copying them, so there's less code and one place to fix bugs.",
          hintLadder: [
            "Could ONE function handle every size if you pass the size in?",
            "Store the sizes in a list and call the function for each.",
            "Give an example like makeSheet(large)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Call the Function 4 Times",
      prompt:
        "Define a 'block-laying function': squat to 'lift,' step right to 'carry,' lower to 'place,' stand tall to 'check.' Now CALL your function 4 times in a row — same sequence each time — like a loop laying 4 blocks!",
      scienceTieIn: "Repeating a fixed movement sequence strengthens the same brain pathways that help you remember reusable procedures — exactly how functions work in code.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions reuse steps and records keep related data together. What's a repeated routine in your life you could turn into a reusable 'function,' and what input would it need?",
      badge: { id: "g7-fall-function-forger", name: "Function Forger", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
