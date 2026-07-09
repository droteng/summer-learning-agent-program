// Grade 5 Coding/CS/AI — Winter Expedition, Week 1 (Winter Warm-Up), Day 5.
// Grade 5 counterpart of g6.winter.code.w1.d5. Same topic (sequencing and
// algorithms with a winter morning routine) pitched down to Grade 5: everyday
// block-style steps, simpler tracing, more scaffolding. Wintry tone.

export const winterG5CodingW1D5 = {
  id: "g5.winter.code.w1.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Sequencing and algorithms with a winter morning routine",
  topicTag: "sequencing-algorithms",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-08", "CSTA.1B-AP-10"],
  hook: "A computer does exactly what you tell it, in the exact order you say. Get the order wrong and you end up putting boots on before your socks! Today you write and follow an algorithm for a cold winter morning — one careful step at a time.",
  miniLesson: [
    "An ALGORITHM is a set of steps in a certain ORDER to get a job done — like a recipe or a get-ready routine.",
    "ORDER matters. Some steps must come before others. You put on socks BEFORE boots, and a coat AFTER a sweater.",
    "To TRACE an algorithm means to follow the steps one at a time, in order, keeping track of what has happened so far — just the way a computer runs a program."
  ],
  workedExample: {
    prompt: "Put these winter-morning steps in a working order: (a) put on boots, (b) put on socks, (c) step outside into the snow.",
    steps: [
      "Ask what must come first: bare feet need socks before anything else.",
      "Step 1: put on socks (b).",
      "Boots go over the socks, so Step 2: put on boots (a).",
      "Only once your feet are ready do you go out, so Step 3: step outside (c)."
    ],
    answer: "Order: b (socks) → a (boots) → c (step outside)."
  },
  items: [
    {
      id: "g5.winter.code.w1.d5.q1",
      type: "multiple_choice",
      stem: "What is an ALGORITHM?",
      choices: [
        "A random pile of steps in any order",
        "A type of winter coat",
        "A set of steps in a certain order to finish a task",
        "A single step that never repeats"
      ],
      answerIndex: 2,
      explanation: "An algorithm is an ordered set of steps that gets a job done — the order is part of what makes it work.",
      hintLadder: [
        "Think of a recipe or a get-ready routine.",
        "It is about the ORDER of the steps, not a random pile.",
        "An ordered set of steps to finish a task is an algorithm."
      ]
    },
    {
      id: "g5.winter.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "In a winter get-ready algorithm, which pair is in the WRONG order?",
      choices: [
        "Put on socks, then put on boots",
        "Put on a sweater, then put on a coat",
        "Grab a hat, then step outside",
        "Put on boots, then put on socks"
      ],
      answerIndex: 3,
      explanation: "Boots go OVER socks, so socks must come first. 'Boots then socks' is out of order.",
      hintLadder: [
        "Think about what goes on your foot first.",
        "Which layer goes closest to your skin?",
        "Socks go before boots, so 'boots then socks' is wrong."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g5.winter.code.w1.d5.q3",
      type: "numeric",
      stem: "A winter morning routine has these steps in order: 1) wake up, 2) put on socks, 3) put on boots, 4) grab a hat, 5) step outside. At which STEP NUMBER do you put on boots?",
      answer: 3,
      tolerance: 0,
      unit: "step",
      hintLadder: [
        "Count the steps in order starting at 1.",
        "Wake up is step 1, socks is step 2...",
        "Boots comes right after socks — that is step 3."
      ],
      explanation: "Following the list in order: wake up (1), socks (2), boots (3). Boots is step 3."
    },
    {
      id: "g5.winter.code.w1.d5.q4",
      type: "numeric",
      stem: "A routine says: Step 1 put on 1 base layer, Step 2 add 1 sweater, Step 3 add 1 coat. If you TRACE it, how many total layers are you wearing on top after all three steps?",
      answer: 3,
      tolerance: 0,
      unit: "layers",
      hintLadder: [
        "Start at 0 and add each step's layers as you go.",
        "Step 1 adds 1, step 2 adds 1, step 3 adds 1.",
        "1 + 1 + 1 = 3 layers."
      ],
      explanation: "Tracing in order: 1 base layer + 1 sweater + 1 coat = 3 layers total."
    },
    {
      id: "g5.winter.code.w1.d5.q5",
      type: "short_answer",
      stem: "Write your own winter morning routine as at least four ORDERED steps. Then point out one pair of steps whose order cannot be swapped, and explain why.",
      rubric: {
        level3: "Lists 4+ clearly ordered steps AND names a pair whose order matters, with a correct reason (for example, socks must come before boots).",
        level2: "Lists ordered steps but the 'order matters' pair or its reason is weak or missing.",
        level1: "Steps are not in order or there is no reasoning about why order matters."
      },
      exemplar: "1) Wake up, 2) put on socks, 3) put on boots, 4) put on a coat, 5) step outside. Socks (step 2) MUST come before boots (step 3), because boots go over socks — you cannot put socks on after the boots are already on.",
      hintLadder: [
        "List your real get-ready steps in order.",
        "Find two steps that would break if you swapped them.",
        "Explain WHY one must come before the other."
      ]
    }
  ],
  reflectionPrompt: "Where else in your day is the ORDER of steps important — brushing teeth, making cocoa, or a game you play? Pick one and name a step that cannot be moved.",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks steps can go in any order",
      description: "Believes an algorithm still works no matter how the steps are arranged, ignoring that some steps depend on earlier ones.",
      coachMove: "Act out a swapped routine (boots before socks) so the student feels why order matters, then put it back in the right order."
    },
    {
      id: "skips-a-step",
      label: "Leaves out a needed step",
      description: "Writes a routine that jumps ahead, skipping a step the next one depends on.",
      coachMove: "Have the student trace their routine one step at a time and check that each step's requirements were done earlier."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Scrambled Snow Routine",
      prompt:
        "These four steps got scrambled: (a) lace up boots, (b) pull on socks, (c) step into the snow, (d) wake up. Unscramble them into a working order — trace it in your head before you answer!",
      answer:
        "Correct order: d (wake up) → b (socks) → a (lace up boots) → c (step into snow). Socks must go on before boots, and you cannot do anything until you wake up!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Winter Algorithm",
      challenge:
        "Write a full 'Get Ready for a Snowy Day' algorithm with 5 to 7 numbered steps, then hand it to a partner (or read it aloud) to 'run' EXACTLY as written — no guessing. Fix any step that comes out in the wrong order.",
      materials: ["Paper & pencil, OR a device to type on"],
      steps: [
        "List every action needed to get ready for a snowy day.",
        "Number the actions 1, 2, 3... in the exact order they must happen.",
        "Have someone 'run' your algorithm literally, doing ONLY what each step says.",
        "Watch for any step that breaks and rewrite it so the order works."
      ],
      deliverable: "A numbered 5-to-7-step winter get-ready algorithm that a partner can run correctly in order.",
      choiceBoard: [
        "Write the numbered algorithm and test it with a partner.",
        "Draw a flowchart with arrows showing the order of the steps.",
        "Make a 'oops comic' showing what goes wrong when two steps are swapped."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sequencing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.code.w1.d5.arena1",
          type: "numeric",
          stem: "Trace this routine: Step 1 you have 0 mittens on; Step 2 put on 1 mitten; Step 3 put on 1 more mitten; Step 4 take 1 mitten off to send a text. After tracing all 4 steps, how many mittens are you wearing?",
          answer: 1,
          tolerance: 0,
          unit: "mittens",
          hintLadder: [
            "Start at 0 and follow each step in order.",
            "Steps 2 and 3 add one each (0 → 1 → 2).",
            "Step 4 removes one (2 → 1)."
          ],
          explanation: "Trace in order: 0 → 1 → 2 → 1. You end wearing 1 mitten."
        },
        {
          id: "g5.winter.code.w1.d5.arena2",
          type: "multiple_choice",
          stem: "You want cocoa. The steps are: (1) drink it, (2) pour hot water in the mug, (3) add cocoa powder to the mug, (4) stir. Which ordering is a CORRECT algorithm?",
          choices: [
            "1 → 2 → 3 → 4",
            "3 → 2 → 4 → 1",
            "4 → 3 → 2 → 1",
            "2 → 1 → 3 → 4"
          ],
          answerIndex: 1,
          explanation: "You must add cocoa powder (3) and pour water (2) before you can stir (4), and you can only drink (1) at the very end: 3 → 2 → 4 → 1.",
          hintLadder: [
            "What has to be IN the mug before you can stir?",
            "Drinking has to be the very last step.",
            "Add powder and water, then stir, then drink."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step-by-Step Snow March",
      prompt:
        "Do a get-ready algorithm with your body in order: mime pulling on socks (2 taps), stomping into boots (2 stomps), zipping a coat (1 big zip up), then march in place 'into the snow' for 10 steps. Run the sequence twice, in order.",
      scienceTieIn: "Doing actions in a set order is exactly how your brain builds movement patterns — and the movement pumps oxygen to your brain to keep your thinking sharp.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You wrote and traced an algorithm today. Where in your real winter routine does getting ONE step out of order cause the biggest problem? Describe the step and why its place matters.",
      badge: { id: "g5-winter-sequence-coder", name: "Winter Sequence Coder", emoji: "🥾" },
      estimatedMinutes: 7
    }
  }
};
