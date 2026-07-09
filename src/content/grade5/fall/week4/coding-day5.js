// Grade 5 Coding/CS/AI — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 5. Topic: algorithms as ancient recipes — sequencing the steps of an
// ancient process and debugging order. Grade-5 counterpart of
// g6.fall.code.w4.d5, using everyday, block-style step lists.

export const fallG5CodingW4D5 = {
  id: "g5.fall.code.w4.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Algorithms are ancient recipes",
  topicTag: "algorithms-sequencing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-15"],
  hook: "The people who built the pyramids followed step-by-step instructions — an algorithm. Coders do the same thing! Today you put the steps of an ancient task in order and fix ones that are out of order.",
  miniLesson: [
    "An algorithm (say: AL-guh-rith-um) is a clear, step-by-step list to finish a task — like a recipe.",
    "Order matters! Doing steps in the wrong order can ruin the whole result.",
    "Debugging means finding the step that is wrong or out of order, and fixing just that step."
  ],
  workedExample: {
    prompt: "Put these bread steps in order: [bake it], [mix flour and water], [let it rise], [shape the dough].",
    steps: [
      "First put the ingredients together: mix flour and water.",
      "Then shape the dough.",
      "Then let it rise.",
      "Last, bake it. Order: mix → shape → rise → bake."
    ],
    answer: "mix flour and water → shape the dough → let it rise → bake it"
  },
  items: [
    {
      id: "g5.fall.code.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is an algorithm?",
      choices: [
        "a random pile of steps",
        "a clear, step-by-step list to finish a task",
        "a kind of ancient city",
        "just one instruction"
      ],
      answerIndex: 1,
      explanation: "An algorithm is an ordered list of steps — like a recipe — to get something done.",
      hintLadder: [
        "Think 'recipe.'",
        "It has steps in a certain order.",
        "Clear, step-by-step list."
      ]
    },
    {
      id: "g5.fall.code.w4.d5.q2",
      type: "multiple_choice",
      stem: "Steps to send a message with a runner: [1 write the message], [2 give it to the runner], [3 runner delivers it]. What breaks if you do step 2 before step 1?",
      choices: [
        "Nothing breaks",
        "The runner gets faster",
        "The runner carries a blank message — nothing is written yet",
        "The message arrives early"
      ],
      answerIndex: 2,
      explanation: "Out of order, the runner leaves before the message even exists. Order matters!",
      hintLadder: [
        "What has NOT happened yet if you skip step 1?",
        "The message is not written.",
        "The runner carries nothing."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g5.fall.code.w4.d5.q3",
      type: "multiple_choice",
      stem: "In coding, a 'bug' is...",
      choices: [
        "a step that is wrong or out of order, causing a bad result",
        "an insect inside the computer",
        "the fastest step",
        "always the last step"
      ],
      answerIndex: 0,
      explanation: "A bug is a mistake in the steps. Debugging means finding and fixing it.",
      hintLadder: [
        "It is a mistake, not a real insect.",
        "Where do mistakes live in an algorithm?",
        "In a wrong or out-of-order step."
      ]
    },
    {
      id: "g5.fall.code.w4.d5.q4",
      type: "short_answer",
      stem: "Here is a buggy plan to store grain: [seal the jar], [pour in the grain], [clean the jar]. Put it in the right order and tell what the bug was.",
      rubric: {
        level3: "Correct order (clean → pour → seal) AND names the bug (sealing before filling, or cleaning last).",
        level2: "Right order but does not name the bug, or names the bug but order is off.",
        level1: "Wrong order and no explanation."
      },
      exemplar: "Correct order: clean the jar, pour in the grain, seal the jar. The bug was sealing the jar before any grain was added, and cleaning it after it was used.",
      hintLadder: [
        "What should you do to the jar first?",
        "When can you seal it?",
        "Clean → fill → seal."
      ]
    },
    {
      id: "g5.fall.code.w4.d5.q5",
      type: "short_answer",
      stem: "Write a 3- or 4-step algorithm for an everyday task (like making toast). Number the steps in order.",
      rubric: {
        level3: "3-4 clear, in-order, complete steps that would really finish the task.",
        level2: "Steps are there but one is out of order or missing.",
        level1: "Vague, out of order, or incomplete."
      },
      exemplar: "1. Put bread in the toaster. 2. Push the lever down. 3. Wait until it pops up. 4. Take out the toast and add toppings.",
      hintLadder: [
        "Pick a simple task you do a lot.",
        "List what you do first, second, third.",
        "Number the steps in order."
      ]
    }
  ],
  reflectionPrompt: "Ancient builders and modern coders both follow algorithms. What is a step-by-step thing you do every day without even thinking about it?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order does not matter",
      description: "Believes an algorithm works no matter what order the steps are in.",
      coachMove: "Try a quick out-of-order example (seal the jar before filling it) so the broken result shows why order matters."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Scrambled Recipe",
      prompt:
        "Here is a 'recipe' to plant a seed, but it is scrambled: [water it], [cover with soil], [dig a hole], [drop the seed in]. What is the right order — and which step would ruin everything if you did it first?",
      answer: "Right order: dig a hole → drop the seed in → cover with soil → water it. Doing 'cover with soil' or 'water it' first would ruin it, because there is no hole and no seed planted yet.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Ancient Algorithm with a Hidden Bug",
      challenge:
        "Write a step-by-step algorithm for an ancient task (make bread, store grain, build a wall) — then sneak in ONE out-of-order 'bug' for someone else to find and fix.",
      steps: [
        "Pick an ancient task and list 4-6 steps in the correct order.",
        "Number the steps like lines of code.",
        "Swap two steps to plant a bug that breaks the result.",
        "Challenge a friend or grown-up to spot the bug and put it back in order."
      ],
      deliverable: "A numbered ancient-task algorithm with one hidden out-of-order bug.",
      choiceBoard: [
        "Write the numbered algorithm with a hidden bug.",
        "Draw it as a flowchart with arrows (and one wrong arrow).",
        "Make a comic where a worker follows the buggy steps and chaos happens."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sequencing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.code.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Steps to make bricks: [1 dig up the clay], [2 dry the bricks in the sun], [3 press the clay into brick shapes]. Which order actually works?",
          choices: [
            "2 → 1 → 3",
            "2 → 3 → 1",
            "3 → 1 → 2",
            "1 → 3 → 2"
          ],
          answerIndex: 3,
          explanation: "You must dig up the clay first, then press it into brick shapes, then dry the bricks: 1 → 3 → 2.",
          hintLadder: [
            "What has to happen before you can shape anything?",
            "You need the clay before you can press it.",
            "Dig clay → press into shapes → dry in the sun."
          ]
        },
        {
          id: "g5.fall.code.w4.d5.arena2",
          type: "short_answer",
          stem: "Here is a buggy plan to light an oil lamp: [light the wick], [pour oil in the lamp], [put the wick in the oil]. Put it in the right order and tell what the bug was.",
          rubric: {
            level3: "Correct order (pour oil → put wick in oil → light the wick) AND names the bug (lighting the wick before it has soaked up any oil).",
            level2: "Right order but does not name the bug, or names the bug but order is off.",
            level1: "Wrong order and no explanation."
          },
          exemplar: "Correct order: pour oil in the lamp, put the wick in the oil, then light the wick. The bug was lighting the wick first, before it had any oil to soak up and burn.",
          hintLadder: [
            "What does the wick need before it can burn?",
            "Oil has to be in the lamp and soaked into the wick first.",
            "Pour oil → put in wick → light it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step-by-Step Build",
      prompt:
        "Be a pyramid builder following an algorithm: squat to 'lift a block,' step to the right to 'carry it,' lower down to 'place it,' then stand tall to 'check your work.' Do the 4-step sequence 4 times in order!",
      scienceTieIn: "Doing moves in a set order builds the same brain pathways that help you remember ordered steps — handy for exercise AND algorithms.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Ancient builders and modern coders both follow algorithms. What is a step-by-step thing you do every day without even thinking about the order?",
      badge: { id: "g5-fall-algorithm-apprentice", name: "Algorithm Apprentice", emoji: "🏗️" },
      estimatedMinutes: 7
    }
  }
};
