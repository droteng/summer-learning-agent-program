// Grade 6 Coding/CS/AI — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 5. Topic: algorithms as ancient recipes — sequencing the steps of an
// ancient process and debugging order. Week capstone toward the fact-file.

export const fallG6CodingW4D5 = {
  id: "g6.fall.code.w4.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Algorithms are ancient recipes",
  topicTag: "algorithms-sequencing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-10", "CSTA.2-AP-17"],
  hook: "Builders of the pyramids followed step-by-step instructions — an algorithm. Coders do the same. Today you sequence and debug the steps of an ancient process.",
  miniLesson: [
    "An algorithm is a clear, ordered list of steps to finish a task — like a recipe.",
    "Order matters: doing steps out of sequence can break the whole result.",
    "Debugging means finding the step that's wrong or out of order, and fixing just that."
  ],
  workedExample: {
    prompt: "Order these steps to make bread: [bake it], [mix flour and water], [let it rise], [shape the dough].",
    steps: [
      "First combine ingredients: mix flour and water.",
      "Then shape the dough.",
      "Then let it rise.",
      "Finally bake it. Order: mix → shape → rise → bake."
    ],
    answer: "mix flour and water → shape the dough → let it rise → bake it"
  },
  items: [
    {
      id: "g6.fall.code.w4.d5.q1",
      type: "multiple_choice",
      stem: "An algorithm is best described as...",
      choices: [
        "a random pile of steps",
        "a type of ancient city",
        "a clear, ordered list of steps to complete a task",
        "a single instruction only"
      ],
      answerIndex: 2,
      explanation: "An algorithm is an ordered set of steps — like a recipe — to accomplish something.",
      hintLadder: [
        "Think 'recipe.'",
        "It has steps in a specific order.",
        "Clear, ordered steps."
      ]
    },
    {
      id: "g6.fall.code.w4.d5.q2",
      type: "multiple_choice",
      stem: "Steps to send a message by ancient runner: [1 write the message], [2 hand it to the runner], [3 runner delivers it]. What breaks if you do step 2 before step 1?",
      choices: [
        "Nothing",
        "The message arrives early",
        "The runner gets faster",
        "The runner carries a blank message — there's nothing written yet"
      ],
      answerIndex: 3,
      explanation: "Out of order, the runner leaves before the message exists. Sequence matters.",
      hintLadder: [
        "What hasn't happened yet if you skip step 1?",
        "The message isn't written.",
        "The runner carries nothing."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g6.fall.code.w4.d5.q3",
      type: "multiple_choice",
      stem: "A 'bug' in an algorithm is...",
      choices: [
        "a step that's wrong or out of order, causing a bad result",
        "an insect in the computer",
        "the fastest step",
        "the last step always"
      ],
      answerIndex: 0,
      explanation: "A bug is a mistake in the steps; debugging is finding and fixing it.",
      hintLadder: [
        "It's a mistake, not an insect.",
        "Where do mistakes live in an algorithm?",
        "In a wrong or misordered step."
      ]
    },
    {
      id: "g6.fall.code.w4.d5.q4",
      type: "short_answer",
      stem: "Here's a buggy plan to store grain: [seal the jar], [pour in grain], [clean the jar]. Reorder it correctly and say what the bug was.",
      rubric: {
        level3: "Correct order (clean → pour → seal) AND identifies the bug (sealing before filling / cleaning last).",
        level2: "Right order but doesn't name the bug, or vice versa.",
        level1: "Wrong order and no explanation."
      },
      exemplar: "Correct order: clean the jar, pour in grain, seal the jar. The bug was sealing the jar before any grain was added and cleaning it after it was already used.",
      hintLadder: [
        "What should you do to the jar first?",
        "When can you seal it?",
        "Clean → fill → seal."
      ]
    },
    {
      id: "g6.fall.code.w4.d5.q5",
      type: "short_answer",
      stem: "Write a 3- or 4-step algorithm for an everyday task (like making toast). Number the steps in order.",
      rubric: {
        level3: "3–4 clear, correctly ordered, complete steps that would actually finish the task.",
        level2: "Steps present but one is out of order or missing.",
        level1: "Vague, unordered, or incomplete."
      },
      exemplar: "1. Put bread in the toaster. 2. Push the lever down. 3. Wait until it pops up. 4. Take out the toast and add toppings.",
      hintLadder: [
        "Pick a simple task you do often.",
        "List what you do first, second, third.",
        "Number them in order."
      ]
    }
  ],
  reflectionPrompt: "Ancient builders and modern coders both follow algorithms. What's a step-by-step process you follow without even thinking about it?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter",
      description: "Believes an algorithm works no matter the sequence.",
      coachMove: "Run a quick out-of-order example (seal jar before filling) so the broken result makes order's importance obvious."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Scrambled Recipe",
      prompt:
        "Here's a 'recipe' to plant a seed, but it's scrambled: [water it], [cover with soil], [dig a hole], [drop the seed in]. What's the correct order — and which step would ruin everything if you did it first?",
      answer: "Correct order: dig a hole → drop the seed in → cover with soil → water it. Doing 'cover with soil' or 'water it' first would ruin it — you'd have no hole and no seed planted yet.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Ancient Algorithm with a Hidden Bug",
      challenge:
        "Write a step-by-step algorithm for an ancient task (build a pyramid block, make papyrus, store grain) — then sneak in ONE out-of-order 'bug' for someone to find and fix.",
      steps: [
        "Pick an ancient task and list 4–6 steps in the correct order.",
        "Number the steps like code lines.",
        "Swap two steps to plant a bug that breaks the result.",
        "Challenge a friend or grown-up to spot the bug and put it back in order."
      ],
      deliverable: "A numbered ancient-task algorithm with one hidden out-of-order bug to find.",
      choiceBoard: [
        "Write the numbered algorithm with a hidden bug.",
        "Draw it as a flowchart with arrows (and one wrong arrow).",
        "Make a comic where a worker follows the buggy steps literally and chaos results."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sequencing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.code.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Algorithm to make papyrus: [1 cut reed strips], [2 press and dry into a sheet], [3 lay strips in a crisscross]. Which order actually works?",
          choices: [
            "2 → 1 → 3",
            "1 → 3 → 2",
            "3 → 1 → 2",
            "2 → 3 → 1"
          ],
          answerIndex: 1,
          explanation: "You must cut the strips first, then lay them crisscross, then press and dry them into a sheet: 1 → 3 → 2.",
          hintLadder: [
            "What has to exist before you can arrange or press anything?",
            "You need the strips before you can lay them out.",
            "Cut → lay crisscross → press and dry."
          ]
        },
        {
          id: "g6.fall.code.w4.d5.arena2",
          type: "short_answer",
          stem: "Here's a buggy plan to light an oil lamp: [light the wick], [pour oil in the lamp], [place the wick in the oil]. Reorder it correctly and say what the bug was.",
          rubric: {
            level3: "Correct order (pour oil → place wick in oil → light the wick) AND identifies the bug (lighting the wick before it's soaked in oil / before there's any oil).",
            level2: "Right order but doesn't name the bug, or names the bug but order is off.",
            level1: "Wrong order and no explanation."
          },
          exemplar: "Correct order: pour oil in the lamp, place the wick in the oil, then light the wick. The bug was trying to light the wick first, before it had any oil to soak up and burn.",
          hintLadder: [
            "What does the wick need before it can burn steadily?",
            "Oil has to be in the lamp and soaked into the wick first.",
            "Pour oil → place wick → light it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Step-by-Step Build",
      prompt:
        "Be a pyramid builder following an algorithm: squat to 'lift a block,' step right to 'carry it,' lower to 'place it,' then stand tall to 'check your work.' Repeat the 4-step sequence 4 times in order!",
      scienceTieIn: "Doing movements in a set sequence builds the same brain pathways that help you remember ordered steps — useful for both exercise and algorithms.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Ancient builders and modern coders both follow algorithms. What's a step-by-step process you follow every day without even thinking about the order?",
      badge: { id: "fall-algorithm-architect", name: "Algorithm Architect", emoji: "🏗️" },
      estimatedMinutes: 7
    }
  }
};
