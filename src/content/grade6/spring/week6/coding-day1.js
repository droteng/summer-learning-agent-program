// Grade 6 Coding/CS/AI — Spring Expedition, Week 6 (Code That Grows), Day 1.
// Topic: using loops to simulate growth — repeatedly grow a value and track it.

export const springG6CodingW6D1 = {
  id: "g6.spring.code.w6.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Coding/Computer Science/AI",
  topic: "Loops for growth simulation",
  topicTag: "growth-loops",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-13"],
  hook: "A single seedling doesn't stay a seedling. To model growing things in code, you write ONE rule and let a loop repeat it, tracking the value as it climbs. Today you become the computer and trace the growth.",
  miniLesson: [
    "A loop repeats the same instruction many times. Each repeat is called one 'step' — here, one day of growth.",
    "To grow a value, you update a variable each step: 'height = height + 3' adds 3 every day; 'count = count * 2' doubles it every day.",
    "You TRACK growth by writing the value after each step, building a table so you can see the pattern rise."
  ],
  workedExample: {
    prompt: "A vine starts at height 5. Each day a loop runs 'height = height + 4'. What is the height after 3 days?",
    steps: [
      "Day 1: height = 5 + 4 = 9.",
      "Day 2: height = 9 + 4 = 13.",
      "Day 3: height = 13 + 4 = 17.",
      "After 3 loop steps the height is 17."
    ],
    answer: "17"
  },
  items: [
    {
      id: "g6.spring.code.w6.d1.q1",
      type: "numeric",
      stem: "A plant starts at height 2. A loop runs 'height = height + 5' four times. What is the final height?",
      answer: 22,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add 5 once each step, starting from 2.",
        "2 → 7 → 12 → 17 → 22.",
        "Four +5 steps from 2 gives 2 + 20 = 22."
      ],
      explanation: "Starting at 2, four loops of +5: 2 → 7 → 12 → 17 → 22 cm."
    },
    {
      id: "g6.spring.code.w6.d1.q2",
      type: "numeric",
      stem: "A bacteria count starts at 1 and a loop runs 'count = count * 2' four times (it doubles each step). What is the count after 4 steps?",
      answer: 16,
      tolerance: 0,
      unit: "cells",
      hintLadder: [
        "Double the value each step, starting at 1.",
        "1 → 2 → 4 → 8 → 16.",
        "Four doublings of 1 gives 16."
      ],
      explanation: "Doubling four times: 1 → 2 → 4 → 8 → 16 cells."
    },
    {
      id: "g6.spring.code.w6.d1.q3",
      type: "multiple_choice",
      stem: "In the loop 'FOR each day: height = height + 3', what does the variable 'height' do as the loop runs?",
      choices: [
        "It stays the same every step",
        "It only changes on the last step",
        "It resets to 0 each step",
        "It is updated and remembers its new value for the next step"
      ],
      answerIndex: 3,
      explanation: "A variable keeps (remembers) its updated value, so each loop step builds on the previous one.",
      hintLadder: [
        "What happens to 'height' after one step of the loop?",
        "Does the next step start from the new value or the old one?",
        "The variable carries its updated value forward."
      ],
      misconceptionsTargeted: ["variable-resets-each-loop"]
    },
    {
      id: "g6.spring.code.w6.d1.q4",
      type: "multiple_choice",
      stem: "Why do programmers use a LOOP to simulate growth instead of writing the growth rule out 100 times?",
      choices: [
        "Loops make the value grow faster",
        "Loops delete the variable",
        "A loop repeats one rule automatically, so you write it once and run it many times",
        "You cannot grow a value without copying the rule 100 times"
      ],
      answerIndex: 2,
      explanation: "A loop lets you write the rule once and repeat it as many steps as you want — the whole point of a loop.",
      hintLadder: [
        "What is the job of a loop?",
        "How many times do you write the rule inside a loop?",
        "Write once, repeat many times."
      ]
    },
    {
      id: "g6.spring.code.w6.d1.q5",
      type: "short_answer",
      stem: "Describe a loop (in words) that would simulate a savings jar growing by 3 coins every week. Say what the variable starts at and what the loop does each step.",
      rubric: {
        level3: "Names a starting value AND states an update rule that adds 3 each step (e.g. 'coins = coins + 3') AND says the loop repeats it each week.",
        level2: "Gives a starting value and a growth idea but the update rule or repetition is unclear.",
        level1: "No clear starting value or no repeating growth rule."
      },
      exemplar: "Start with coins = 0. Each week the loop runs 'coins = coins + 3', so after week 1 it is 3, week 2 it is 6, week 3 it is 9. The loop repeats the same +3 rule every week.",
      hintLadder: [
        "What value does the jar start at?",
        "What single rule adds 3 each step?",
        "Say that the loop repeats that rule every week."
      ]
    }
  ],
  reflectionPrompt: "Growth loops can add the same amount or multiply each step. Which kind of loop do you think grows faster over many steps, and why?",
  misconceptionBank: [
    {
      id: "variable-resets-each-loop",
      label: "Thinks the variable resets each loop step",
      description: "Believes the growing value starts over each time instead of carrying its updated value forward.",
      coachMove: "Trace two steps out loud, writing the value after each — show that step 2 begins from step 1's result."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Grow the Seedling",
      prompt:
        "A seedling starts at height 3. A loop runs 'height = height + 6' twice. Trace it in your head — what is the height after both steps? Guess before you check!",
      answer:
        "Step 1: 3 + 6 = 9. Step 2: 9 + 6 = 15. The seedling is 15 tall. Each step builds on the last!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Growth Tracker",
      challenge:
        "Design a growth loop on paper for a living thing that grows (a sunflower, a puppy, a coral). Pick a starting value and a per-step rule, then run your loop for 5 steps and track every value in a table.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Choose a growing thing and its starting value.",
        "Write ONE update rule (add the same amount, or multiply) for each step.",
        "Make a table with columns: Step, Value.",
        "Run your loop for 5 steps and fill in the value after each step."
      ],
      deliverable: "A labeled growth-tracker table showing the value after each of 5 loop steps.",
      choiceBoard: [
        "Fill in the 5-step growth table with your rule.",
        "Draw a bar or line graph of your value across the 5 steps.",
        "Write pseudocode: the starting line plus a FOR loop with your update rule inside."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.code.w6.d1.arena1",
          type: "numeric",
          stem: "A pond of algae starts at 3. A loop runs 'algae = algae * 2' three times (doubling). What is the algae count after 3 steps? Trace each doubling.",
          answer: 24,
          tolerance: 0,
          unit: "patches",
          hintLadder: [
            "Double the value each step, starting from 3.",
            "Step 1: 3 × 2 = 6. Step 2: 6 × 2 = 12.",
            "Step 3: 12 × 2 = 24."
          ],
          explanation: "Doubling from 3 three times: 3 → 6 → 12 → 24 patches."
        },
        {
          id: "g6.spring.code.w6.d1.arena2",
          type: "numeric",
          stem: "A loop runs 5 times. Each step: 'height = height + 7'. The height starts at 10. What is the final height after all 5 steps?",
          answer: 45,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Five steps of +7 means adding 7 five times.",
            "5 × 7 = 35 added to the start.",
            "10 + 35 = 45."
          ],
          explanation: "Five +7 steps add 35: 10 + 35 = 45 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop-and-Grow",
      prompt:
        "Start crouched like a seed. Each 'loop step,' rise a little taller and stretch your arms wider — do 5 growth steps until you're stretched fully tall. Then shrink back to a seed and repeat once more.",
      scienceTieIn: "Repeating a movement in steps mirrors how a loop repeats a rule — and the stretch sends fresh oxygen to your brain for the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You wrote one rule and let a loop grow it many times. What is one real thing in your life that grows a little each day, and what would its loop rule be?",
      badge: { id: "spring-growth-looper", name: "Growth Looper", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
