// Grade 5 Coding/CS/AI — Spring Expedition, Week 1 (Spring Awakening), Day 5.
// Grade 5 counterpart of g6.spring.code.w1.d5. Same topic (sequencing and
// algorithms for a growth experiment) pitched down to Grade 5: block-style
// pseudocode, small whole-number traces, shorter passages with vocabulary
// support, and clear step-by-step tracing.

export const springG5CodingW1D5 = {
  id: "g5.spring.code.w1.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Sequencing and algorithms for a growth experiment",
  topicTag: "sequencing-algorithms",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-08", "CSTA.1B-AP-10"],
  hook: "A computer does things in ORDER, one step at a time. A scientist does too! Today you turn your spring plant experiment into an algorithm — a clear list of steps, in the right order, that anyone (even a robot) could follow.",
  miniLesson: [
    "An ALGORITHM is a list of steps to finish a job. The steps go in SEQUENCE — that means in order, one after another, from top to bottom.",
    "Order matters! 'Plant the seed, THEN water it' works. 'Water it, THEN plant the seed' does not. If you swap steps, the plan can break.",
    "To TRACE an algorithm, you do one step at a time and keep track of the number you have so far — the same way a computer does it."
  ],
  workedExample: {
    prompt: "Trace this block algorithm. START: height = 0 cm.\n[ADD 2 cm]\n[ADD 1 cm]\n[ADD 2 cm]\nWhat is the final height?",
    steps: [
      "Start with the first number: height = 0.",
      "Do the first block in order: 0 + 2 = 2 cm.",
      "Do the next block: 2 + 1 = 3 cm.",
      "Do the last block: 3 + 2 = 5 cm. Final height = 5 cm."
    ],
    answer: "5 cm"
  },
  items: [
    {
      id: "g5.spring.code.w1.d5.q1",
      type: "multiple_choice",
      stem: "What is an ALGORITHM?",
      choices: [
        "A pile of steps in any order at all",
        "A list of steps to finish a job, in the right order",
        "One single word",
        "A picture of a flower"
      ],
      answerIndex: 1,
      explanation: "An algorithm is a clear list of steps, in order, that finishes a job.",
      hintLadder: [
        "Think about a recipe or the directions to a friend's house.",
        "Do the steps need to be in a certain order?",
        "It is an ordered list of steps to finish a job."
      ]
    },
    {
      id: "g5.spring.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "Which set of planting steps is in the CORRECT order?",
      choices: [
        "1. Water the soil.  2. Get a cup and add soil.",
        "1. Get a cup and add soil.  2. Plant the seed.  3. Water it.",
        "1. Plant the seed.  2. Get a cup.",
        "1. Water it.  2. Plant the seed.  3. Get a cup."
      ],
      answerIndex: 1,
      explanation: "You need the cup and soil first, then the seed, then water. Each step needs the one before it.",
      hintLadder: [
        "What has to be ready BEFORE you can plant a seed?",
        "You need soil in a cup first, then a seed, then water.",
        "Only one choice keeps that order."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g5.spring.code.w1.d5.q3",
      type: "numeric",
      stem: "Trace this block algorithm. START: height = 4 cm.\n[ADD 3 cm]\n[ADD 3 cm]\n[ADD 3 cm]\nWhat is the final height in cm?",
      answer: 13,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Start at 4 and add 3 for each block, in order.",
        "4 → 7 → 10 → 13.",
        "4 + 3 + 3 + 3 = 13 cm."
      ],
      explanation: "4 + 3 = 7, then 7 + 3 = 10, then 10 + 3 = 13 cm."
    },
    {
      id: "g5.spring.code.w1.d5.q4",
      type: "numeric",
      stem: "A sprout is 2 cm tall on Day 0. An algorithm adds 2 cm each day. Trace it: how tall is the sprout on Day 3, in cm?",
      answer: 8,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Start at 2 cm on Day 0, then add 2 cm for Day 1, Day 2, and Day 3.",
        "Day 0 = 2, Day 1 = 4, Day 2 = 6, Day 3 = 8.",
        "2 + 2 + 2 + 2 = 8 cm."
      ],
      explanation: "Day 0 = 2 cm. Add 2 cm on Day 1 (4), Day 2 (6), and Day 3 (8). Final = 8 cm."
    },
    {
      id: "g5.spring.code.w1.d5.q5",
      type: "short_answer",
      stem: "Write a short algorithm (3 or 4 steps, numbered) for starting a bean-seed growth experiment. Put the steps in an order that really works.",
      rubric: {
        level3: "Gives 3-4 numbered steps in a logical, workable order (for example: add soil, plant seed, water, place in light / record height).",
        level2: "Gives steps, but one is out of order or a key step is missing.",
        level1: "Steps are jumbled, unclear, or do not make a working plan."
      },
      exemplar: "1. Fill a cup with soil. 2. Plant a bean seed about 2 cm deep. 3. Water the soil until it is damp. 4. Put the cup in a sunny window and write down the height each day.",
      hintLadder: [
        "What must you do FIRST, before anything else?",
        "Order it: get ready, plant, water, place and watch.",
        "Number the steps and read them again to check the order works."
      ]
    }
  ],
  reflectionPrompt: "Think about something you do every morning, like getting ready for school. Could you write it as an algorithm? Which step would mess everything up if it came in the wrong order?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter",
      description: "Believes the steps of an algorithm can go in any order and still work.",
      coachMove: "Show a swap that clearly fails ('water the seed before you plant it') so the student sees the plan break, then ask what order fixes it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Sprout",
      prompt:
        "An algorithm starts a sprout at 3 cm. It runs three blocks in order: [ADD 2 cm], [ADD 2 cm], [ADD 2 cm]. How tall is the sprout after all three blocks? Trace it before you peek!",
      answer:
        "3 → 5 → 7 → 9. The sprout is 9 cm. Doing the blocks in order, one at a time, is exactly how a computer traces an algorithm!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plant Growth Algorithm",
      challenge:
        "Write an algorithm for a one-week spring growth experiment, then TRACE it in a table to see the plant's height change day by day.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "Write numbered steps to set up the experiment (soil, seed, water, place in light).",
        "Add one daily step: 'each day, water the plant and write down its height.'",
        "Pick a growth rate (like 2 cm per day) and make a table with columns Day and Height.",
        "Fill in the table by following your algorithm for 5 days."
      ],
      deliverable: "A numbered algorithm plus a filled-in trace table showing the plant's height for 5 days.",
      choiceBoard: [
        "Write the algorithm and fill in the trace table.",
        "Draw a flowchart with arrows showing the order the steps run each day.",
        "Draw a bar chart of height for each day from your table."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Algorithm Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.code.w1.d5.arena1",
          type: "numeric",
          stem: "Trace this algorithm in order. START: height = 3 cm.\n[ADD 2 cm]\n[DOUBLE the height]\n[ADD 1 cm]\nWhat is the final height in cm?",
          answer: 11,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Do the blocks strictly in order, one at a time.",
            "First block: 3 + 2 = 5. Next block: double it.",
            "5 × 2 = 10, then 10 + 1 = 11 cm."
          ],
          explanation: "Block 1: 3 + 2 = 5. Block 2: 5 × 2 = 10 (double). Block 3: 10 + 1 = 11 cm. Order matters — doubling before adding 1 gives a different answer than after."
        },
        {
          id: "g5.spring.code.w1.d5.arena2",
          type: "short_answer",
          stem: "A classmate's planting algorithm says: '1. Water the seed. 2. Plant the seed in soil. 3. Get a cup.' Explain what is wrong and rewrite it in the correct order.",
          rubric: {
            level3: "Says the steps are out of order (you cannot water or plant before you have a cup with soil) AND rewrites them in a working order.",
            level2: "Notices the order is wrong but the rewrite is incomplete or still a little off.",
            level1: "Does not spot the ordering problem or gives no working rewrite."
          },
          exemplar: "The steps are backwards — you cannot water or plant a seed before you have a cup with soil. Correct order: 1. Get a cup and add soil. 2. Plant the seed. 3. Water the seed.",
          hintLadder: [
            "What must you have BEFORE you can plant anything?",
            "You need a cup with soil first, then the seed, then water.",
            "Rewrite the three steps in that working order."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step-by-Step Sequence",
      prompt:
        "Run an 'algorithm' with your body, in order: Step 1 stomp twice, Step 2 clap three times, Step 3 reach up and grow tall, Step 4 spin once. Do the whole sequence in exact order two times — no skipping steps!",
      scienceTieIn: "Following an ordered sequence of moves helps your coordination, and the quick burst of activity sends fresh oxygen to your brain to sharpen your focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Algorithms are just clear steps in the right order. What is one everyday task you could write as an algorithm so a robot could do it perfectly?",
      badge: { id: "g5-spring-growth-coder", name: "Growth Coder", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
