// Grade 6 Coding/CS/AI — Spring Expedition, Week 1 (Spring Awakening), Day 5.
// Topic: sequencing and algorithms — write the steps of a growth experiment as
// an algorithm, then trace it.

export const springG6CodingW1D5 = {
  id: "g6.spring.code.w1.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Sequencing and algorithms for a growth experiment",
  topicTag: "sequencing-algorithms",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-10", "CSTA.2-AP-11"],
  hook: "A computer follows steps in exact order — and so does a scientist running an experiment. Today you turn your spring growth experiment into an algorithm: a clear, ordered list of steps a computer (or a classmate) could follow perfectly.",
  miniLesson: [
    "An algorithm is a precise, ordered list of steps to complete a task. In code, steps run in SEQUENCE — top to bottom, one after another.",
    "Order matters: 'plant the seed, then water it' works, but 'water it, then plant the seed' does not. Swapping steps can break the whole result.",
    "To TRACE an algorithm, you follow each step in order and keep track of what the state is (day number, plant height) after each one — just like a computer does."
  ],
  workedExample: {
    prompt: "Trace this algorithm. Start: height = 0 cm. Step 1: add 2 cm. Step 2: add 3 cm. Step 3: add 2 cm. What is the final height?",
    steps: [
      "Start with the initial state: height = 0.",
      "Run Step 1 in order: 0 + 2 = 2 cm.",
      "Run Step 2: 2 + 3 = 5 cm.",
      "Run Step 3: 5 + 2 = 7 cm. Final height = 7 cm."
    ],
    answer: "7 cm"
  },
  items: [
    {
      id: "g6.spring.code.w1.d5.q1",
      type: "multiple_choice",
      stem: "Which of these best describes an ALGORITHM?",
      choices: [
        "A random pile of instructions in any order",
        "A single word",
        "A precise, ordered list of steps to complete a task",
        "A drawing of a plant"
      ],
      answerIndex: 2,
      explanation: "An algorithm is a clear, ordered sequence of steps that reliably completes a task.",
      hintLadder: [
        "Think about a recipe or a set of directions.",
        "Do the steps need an order?",
        "It's a precise, ORDERED list of steps."
      ]
    },
    {
      id: "g6.spring.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "For a planting algorithm, which pair of steps is in the CORRECT order?",
      choices: [
        "1. Water the soil.  2. Get a pot and add soil.",
        "1. Water it.  2. Plant the seed.  3. Get a pot.",
        "1. Plant the seed.  2. Get a pot.",
        "1. Get a pot and add soil.  2. Plant the seed.  3. Water it."
      ],
      answerIndex: 3,
      explanation: "You need the pot and soil first, then the seed, then water — each step depends on the one before it.",
      hintLadder: [
        "What has to exist before you can plant a seed?",
        "You need soil in a pot first, then a seed, then water.",
        "Only one option keeps that order."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g6.spring.code.w1.d5.q3",
      type: "numeric",
      stem: "Trace this algorithm. Start: height = 5 cm. Step 1: add 4 cm. Step 2: add 4 cm. Step 3: add 4 cm. What is the final height in cm?",
      answer: 17,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Start at 5 and add 4 for each step, in order.",
        "5 → 9 → 13 → 17.",
        "5 + 4 + 4 + 4 = 17 cm."
      ],
      explanation: "5 + 4 = 9, then 9 + 4 = 13, then 13 + 4 = 17 cm."
    },
    {
      id: "g6.spring.code.w1.d5.q4",
      type: "numeric",
      stem: "An algorithm records a plant's height every day. Day 0 it is 3 cm, and it grows 2 cm per day. After tracing through Day 4, what height (in cm) is recorded?",
      answer: 11,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Start at 3 cm on Day 0, then add 2 cm for each day up to Day 4.",
        "Day 0 = 3, and there are 4 days of growth: 4 × 2 = 8.",
        "3 + 8 = 11 cm."
      ],
      explanation: "Day 0 = 3; adding 2 cm on Days 1, 2, 3, and 4 gives 3 + (4 × 2) = 3 + 8 = 11 cm."
    },
    {
      id: "g6.spring.code.w1.d5.q5",
      type: "short_answer",
      stem: "Write a short algorithm (3-4 ordered steps) for starting a bean-seed growth experiment. Number your steps and make sure the order actually works.",
      rubric: {
        level3: "Gives 3-4 clearly numbered steps in a logical, workable order (e.g., set up soil, plant seed, water, place in light / record height).",
        level2: "Gives steps but one is out of order or a key step is missing.",
        level1: "Steps are unordered, unclear, or don't form a working sequence."
      },
      exemplar: "1. Fill a cup with soil. 2. Plant a bean seed about 2 cm deep. 3. Water the soil until it's damp. 4. Put the cup in a sunny spot and record the height each day.",
      hintLadder: [
        "Think about what you must do FIRST before anything else.",
        "Order the steps: prepare, plant, water, place/observe.",
        "Number them and re-read to check the order works."
      ]
    }
  ],
  reflectionPrompt: "Think of something you do every day, like getting ready for school. Could you write it as an algorithm? Which step would break everything if it came in the wrong order?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter",
      description: "Believes an algorithm's steps can run in any order and still work.",
      coachMove: "Give a step-swap that clearly fails ('water the seed before you plant it') so the student sees a broken result, then ask what fixed order works."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Sprout",
      prompt:
        "An algorithm starts a sprout at 4 cm. It runs three steps in order: Step 1 add 3 cm, Step 2 add 3 cm, Step 3 add 3 cm. What height is the sprout after all three steps? Trace it before you peek!",
      answer:
        "4 → 7 → 10 → 13. The sprout is 13 cm. Following the steps in order, one at a time, is exactly how a computer traces an algorithm!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Algorithm for a Growing Plant",
      challenge:
        "Write a full algorithm for running a two-week spring growth experiment, then TRACE it with a table to see how the plant's height changes step by step.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "Write numbered steps to set up the experiment (soil, seed, water, place in light).",
        "Add a repeating daily step: 'each day, water the plant and record its height.'",
        "Pick a growth rate (like 2 cm per day) and make a trace table with columns Day and Height.",
        "Fill the table by following your algorithm for at least 5 days."
      ],
      deliverable: "A numbered algorithm plus a filled-in trace table showing the plant's height for at least 5 days.",
      choiceBoard: [
        "Write the algorithm and fill in the trace table.",
        "Draw a flowchart with arrows showing the order the steps run each day.",
        "Draw a line graph of height vs. day from your trace table."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Algorithm Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.code.w1.d5.arena1",
          type: "numeric",
          stem: "Trace this algorithm carefully. Start: height = 2 cm. Step 1: add 5 cm. Step 2: DOUBLE the height. Step 3: add 1 cm. What is the final height in cm?",
          answer: 15,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Do the steps strictly in order.",
            "Step 1: 2 + 5 = 7. Step 2: double it.",
            "7 × 2 = 14, then 14 + 1 = 15 cm."
          ],
          explanation: "Step 1: 2 + 5 = 7. Step 2: 7 × 2 = 14. Step 3: 14 + 1 = 15 cm. Order matters — doubling before adding 1 gives a different answer than after."
        },
        {
          id: "g6.spring.code.w1.d5.arena2",
          type: "short_answer",
          stem: "A classmate's planting algorithm reads: '1. Water the seed. 2. Plant the seed in soil. 3. Get a pot.' Explain what is wrong and rewrite it in the correct order.",
          rubric: {
            level3: "Identifies that the steps are out of order (you can't water or plant before you have a pot with soil) AND rewrites them in a working order.",
            level2: "Notices the order is wrong but the rewrite is incomplete or still slightly off.",
            level1: "Doesn't identify the ordering problem or gives no valid rewrite."
          },
          exemplar: "The steps are backwards — you can't water or plant a seed before you have a pot and soil. Correct order: 1. Get a pot and add soil. 2. Plant the seed. 3. Water the seed.",
          hintLadder: [
            "What must you have BEFORE you can plant anything?",
            "You need a pot with soil first, then the seed, then water.",
            "Rewrite the three steps in that working order."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step-by-Step Sequence",
      prompt:
        "Run an 'algorithm' with your body in order: Step 1 stomp twice, Step 2 clap three times, Step 3 reach up and grow tall, Step 4 spin once. Do the sequence in exact order twice — no skipping steps!",
      scienceTieIn: "Following an ordered sequence of movements builds coordination, and the burst of activity sends fresh oxygen to your brain to sharpen your focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Algorithms are just clear steps in the right order. What is one everyday task you could write as an algorithm so a robot could do it perfectly?",
      badge: { id: "spring-algorithm-sprout", name: "Algorithm Sprout", emoji: "🌿" },
      estimatedMinutes: 7
    }
  }
};
