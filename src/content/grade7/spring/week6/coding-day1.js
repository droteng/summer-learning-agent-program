// Grade 7 Coding/CS/AI — Spring Expedition, Week 6 (Code That Grows), Day 1.
// Topic: loops for growth simulation, raised to Grade 7 — nested/compound loop
// updates, tracking state across steps, and comparing additive vs multiplicative
// loop bodies with data-structure thinking (a running table of values).

export const springG7CodingW6D1 = {
  id: "g7.spring.code.w6.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Coding/Computer Science/AI",
  topic: "Loops for growth simulation (compound updates & state)",
  topicTag: "growth-loops",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-17"],
  hook: "One rule inside a loop can model a whole growing forest. At Grade 7 the loop body does more than one thing per step — it can add AND multiply, or update two variables at once — and you have to track every value in a table to keep the state straight. Today you become the interpreter and trace compound growth.",
  miniLesson: [
    "A loop repeats its body each step, and the STATE (the current variable values) carries forward — step n begins from the result of step n−1.",
    "A loop body can hold more than one update: 'height = height * 2' then 'height = height + 1' both run every step, in order. Order matters — multiply-then-add is not the same as add-then-multiply.",
    "To trace a loop, keep a table of the state after each step. For two variables (like height and age), track a column for each so you never lose the running value."
  ],
  workedExample: {
    prompt: "A vine starts at height 4. Each step a loop runs TWO lines in order: 'height = height * 2' then 'height = height - 1'. What is the height after 3 steps?",
    steps: [
      "Step 1: 4 * 2 = 8, then 8 - 1 = 7.",
      "Step 2: 7 * 2 = 14, then 14 - 1 = 13.",
      "Step 3: 13 * 2 = 26, then 26 - 1 = 25.",
      "After 3 steps the height is 25. Each step runs both lines in order, and the state carries forward."
    ],
    answer: "25"
  },
  items: [
    {
      id: "g7.spring.code.w6.d1.q1",
      type: "numeric",
      stem: "A plant starts at height 3. Each step a loop runs 'height = height * 2' then 'height = height + 1', in that order. What is the height after 3 steps?",
      answer: 31,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Run both lines each step: first double, then add 1.",
        "Step 1: 3*2=6, +1=7. Step 2: 7*2=14, +1=15.",
        "Step 3: 15*2=30, +1=31."
      ],
      explanation: "Double-then-add-1 each step: 3 → 7 → 15 → 31 cm."
    },
    {
      id: "g7.spring.code.w6.d1.q2",
      type: "numeric",
      stem: "A bacteria count starts at 5 and a loop runs 'count = count * 2' five times (it doubles each step). What is the count after 5 steps?",
      answer: 160,
      tolerance: 0,
      unit: "cells",
      hintLadder: [
        "Double the value each step, starting at 5.",
        "5 → 10 → 20 → 40 → 80 → 160.",
        "Five doublings of 5 gives 5 × 2^5 = 5 × 32 = 160."
      ],
      explanation: "Doubling five times: 5 → 10 → 20 → 40 → 80 → 160 cells."
    },
    {
      id: "g7.spring.code.w6.d1.q3",
      type: "multiple_choice",
      stem: "In a loop body, the two lines 'height = height + 1' then 'height = height * 3' run each step, in that order, starting from height = 2. What is height after ONE step, and why does order matter?",
      choices: [
        "9, because you add 1 (→3) then multiply by 3 (→9)",
        "7, because you multiply first (→6) then add 1",
        "6, because only the multiply line runs",
        "3, because only the add line runs"
      ],
      answerIndex: 0,
      explanation: "Lines run top to bottom: 2 + 1 = 3, then 3 * 3 = 9. Reversing the order would give (2*3)+1 = 7, so order changes the result.",
      hintLadder: [
        "Which line runs first, top or bottom?",
        "2 + 1 = 3, then apply the next line to 3.",
        "3 * 3 = 9; the order add-then-multiply gives 9."
      ],
      misconceptionsTargeted: ["loop-body-order-ignored"]
    },
    {
      id: "g7.spring.code.w6.d1.q4",
      type: "multiple_choice",
      stem: "You want to store the height AFTER each of 5 loop steps so you can graph the growth later. What data structure fits best?",
      choices: [
        "A single variable that gets overwritten each step",
        "A list (array) that you append the new height to each step",
        "No structure — you cannot save past values",
        "A single number that only holds the final height"
      ],
      answerIndex: 1,
      explanation: "A list stores every step's value so you can look back or graph them; a single variable would lose each old value when it is overwritten.",
      hintLadder: [
        "Do you need only the last value, or every value?",
        "A single variable forgets the old value when reassigned.",
        "A list can hold all 5 values in order."
      ]
    },
    {
      id: "g7.spring.code.w6.d1.q5",
      type: "short_answer",
      stem: "Describe (in words) a loop that models a savings account that GROWS by 5% each week, starting at 200 coins. Say what the variable starts at, the multiplicative update rule the loop repeats, and how you would store each week's balance.",
      rubric: {
        level3: "Names the starting value (200) AND a multiplicative update (e.g. 'balance = balance * 1.05') repeated each week AND says balances are stored in a list/table each step.",
        level2: "Gives a starting value and a growth idea, but the update is additive-only or the storing/repetition is unclear.",
        level1: "No clear starting value, or no repeating multiplicative growth rule."
      },
      exemplar: "Start with balance = 200. Each week the loop runs 'balance = balance * 1.05' (a 5% increase), so week 1 is 210, week 2 is 220.50, and so on. I append each week's balance to a list so I can graph how it grows faster and faster over time.",
      hintLadder: [
        "What value does the account start at?",
        "5% growth means multiply by 1.05, not add a fixed amount.",
        "Store each week's balance in a list so you can look back."
      ]
    }
  ],
  reflectionPrompt: "A loop that multiplies each step grows differently from one that only adds. Over 20 steps, which loop body would you trust to model a spreading species, and why?",
  misconceptionBank: [
    {
      id: "loop-body-order-ignored",
      label: "Ignores the order of lines in a loop body",
      description: "Treats multiple update lines as if order does not matter, so multiply-then-add and add-then-multiply are seen as the same.",
      coachMove: "Trace the same step both ways on paper and compare the two results — the mismatch proves order matters."
    },
    {
      id: "variable-resets-each-loop",
      label: "Thinks the variable resets each loop step",
      description: "Believes the growing value starts over each step instead of carrying its updated state forward.",
      coachMove: "Trace two steps out loud, writing the state after each — step 2 must begin from step 1's result."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Compound Loop",
      prompt:
        "A sprout starts at height 2. Each step a loop runs 'height = height * 2' then 'height = height + 2'. Trace 2 steps in your head — what is the height after both? Guess before you check!",
      answer:
        "Step 1: 2*2=4, +2=6. Step 2: 6*2=12, +2=14. The sprout is 14 tall. Both lines run every step, in order!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Compound Growth Tracker",
      challenge:
        "Design a growth loop on paper for a living thing whose growth needs TWO updates per step (e.g. double the leaves, then lose 1 to a nibbling bug). Pick a starting value and a two-line rule, run your loop for 5 steps, and store every value in a table so the state is never lost.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Choose a growing thing and its starting value.",
        "Write a TWO-line update rule (e.g. multiply, then add or subtract) and note the order.",
        "Make a table with columns: Step, After line 1, After line 2.",
        "Run your loop for 5 steps and fill in the state after each line."
      ],
      deliverable: "A labeled compound-growth table showing the state after each line for 5 loop steps.",
      choiceBoard: [
        "Fill in the 5-step compound growth table with both update lines shown.",
        "Draw a line graph of the end-of-step value across the 5 steps.",
        "Write pseudocode: the starting line plus a FOR loop with your two ordered update lines inside."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.code.w6.d1.arena1",
          type: "numeric",
          stem: "A pond of algae starts at 4. Each step a loop runs 'algae = algae * 3' then 'algae = algae - 2', in that order. What is the algae count after 3 steps? Trace each step.",
          answer: 82,
          tolerance: 0,
          unit: "patches",
          hintLadder: [
            "Each step: triple, then subtract 2.",
            "Step 1: 4*3=12, -2=10. Step 2: 10*3=30, -2=28.",
            "Step 3: 28*3=84, -2=82."
          ],
          explanation: "Triple-then-minus-2 each step: 4 → 10 → 28 → 82 patches."
        },
        {
          id: "g7.spring.code.w6.d1.arena2",
          type: "numeric",
          stem: "A loop runs 6 times. Each step: 'height = height + 7'. The height starts at 11. What is the final height after all 6 steps?",
          answer: 53,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Six steps of +7 means adding 7 six times.",
            "6 × 7 = 42 added to the start.",
            "11 + 42 = 53."
          ],
          explanation: "Six +7 steps add 42: 11 + 42 = 53 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop-and-Grow",
      prompt:
        "Start crouched like a seed. Each 'loop step,' do TWO moves in order: rise a little taller, THEN twist to one side — repeat for 5 growth steps. Then shrink back to a seed and run the loop once more.",
      scienceTieIn: "Doing two ordered moves each step mirrors a loop body with two lines — and the stretch-and-twist sends fresh oxygen to your brain for the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You traced a loop where the state carried forward and two lines ran each step. What is one real thing that changes in two ways each day, and what would its two-line loop rule be?",
      badge: { id: "g7-spring-compound-looper", name: "Compound Looper", emoji: "🌿" },
      estimatedMinutes: 7
    }
  }
};
