// Grade 5 Coding/CS/AI — Fall Expedition, Week 6 (Patterns in Nature), Day 3.
// Grade 5 counterpart of g6.fall.code.w6.d3. Same topic (loops make
// patterns) pitched down to Grade 5: block-style plain-word loops, simpler
// counts, and friendlier angle math (all traces verified).

export const fallG5CodingW6D3 = {
  id: "g5.fall.code.w6.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Loops make patterns",
  topicTag: "loops-repetition",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-08"],
  hook: "Nature repeats with rules — and so does code. A loop lets you draw 100 leaves with just a few lines. Today you trace loops that build patterns.",
  miniLesson: [
    "A loop repeats a block of steps a set number of times, like 'repeat 5 times: stamp a leaf.'",
    "Loops save you from writing the same step over and over. Change the number, and you change the pattern.",
    "A loop that repeats a turn can draw a shape. For example, 'repeat 4 times: draw a side, turn' can draw a square."
  ],
  workedExample: {
    prompt: "A loop says 'repeat 3 times: stamp a leaf.' How many leaves get stamped?",
    steps: [
      "The number after 'repeat' tells how many times it runs.",
      "It runs 3 times.",
      "Each run stamps 1 leaf.",
      "So 3 leaves get stamped."
    ],
    answer: "3 leaves"
  },
  items: [
    {
      id: "g5.fall.code.w6.d3.q1",
      type: "numeric",
      stem: "A loop says 'repeat 6 times: stamp a leaf.' How many leaves are stamped?",
      answer: 6,
      tolerance: 0,
      unit: "leaves",
      hintLadder: [
        "The number after 'repeat' is the count.",
        "It repeats 6 times, stamping 1 leaf each time.",
        "6 leaves."
      ],
      explanation: "The loop runs 6 times, stamping 6 leaves."
    },
    {
      id: "g5.fall.code.w6.d3.q2",
      type: "multiple_choice",
      stem: "Why use a loop instead of writing 'stamp a leaf' 20 times?",
      choices: [
        "Loops are slower",
        "A loop is shorter, easier to change, and has fewer mistakes",
        "Loops only work for 2 steps",
        "There is no difference"
      ],
      answerIndex: 1,
      explanation: "A loop means fewer lines to write, it is easy to change the count, and you make fewer mistakes.",
      hintLadder: [
        "Imagine changing 20 to 100 by hand.",
        "Which is easier to write and fix?",
        "A loop — you just change one number."
      ]
    },
    {
      id: "g5.fall.code.w6.d3.q3",
      type: "numeric",
      stem: "A loop says 'repeat N times: stamp a leaf, then stamp an acorn.' If it repeats 4 times, how many stamps happen in total?",
      answer: 8,
      tolerance: 0,
      unit: "stamps",
      hintLadder: [
        "How many stamps happen in ONE repeat?",
        "Two stamps per repeat (a leaf and an acorn), and 4 repeats.",
        "2 × 4 = 8."
      ],
      explanation: "Each repeat does 2 stamps, and the loop runs 4 times: 2 × 4 = 8 stamps.",
      misconceptionsTargeted: ["counts-steps-not-repeats"]
    },
    {
      id: "g5.fall.code.w6.d3.q4",
      type: "multiple_choice",
      stem: "A loop draws a square: 'repeat 4 times: draw a side, then turn.' How many sides does it draw?",
      choices: ["4", "3", "2", "8"],
      answerIndex: 0,
      explanation: "The loop runs 4 times and draws 1 side each time, so it draws 4 sides — a square.",
      hintLadder: [
        "How many times does the loop repeat?",
        "It draws 1 side each repeat.",
        "4 repeats = 4 sides."
      ]
    },
    {
      id: "g5.fall.code.w6.d3.q5",
      type: "short_answer",
      stem: "Write a loop (in words) that would stamp 5 pumpkins in a row. Include the repeat count and what to stamp.",
      rubric: {
        level3: "Correct loop: 'repeat 5 times: stamp a pumpkin.' Both the count (5) and the action (stamp a pumpkin) are right.",
        level2: "Has a repeat loop and a stamp action but the count is wrong or missing.",
        level1: "No loop structure or no clear action."
      },
      exemplar: "Repeat 5 times: stamp a pumpkin. (The loop runs 5 times and stamps 1 pumpkin each time, making 5 pumpkins.)",
      hintLadder: [
        "How many pumpkins do you want? That is your repeat count.",
        "What single step should repeat each time?",
        "Repeat 5 times: stamp a pumpkin."
      ]
    }
  ],
  reflectionPrompt: "Loops turn a tiny rule into a big pattern — just like nature. What real-world pattern could you recreate with a loop?",
  misconceptionBank: [
    {
      id: "counts-steps-not-repeats",
      label: "Confuses steps-per-repeat with total steps",
      description: "Counts only the repeat number and forgets there can be more than one step inside each repeat.",
      coachMove: "Count the steps in ONE repeat first, then multiply by the number of repeats."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "How Many Stamps?",
      prompt:
        "A loop says 'repeat 3 times: stamp a leaf, then stamp an acorn.' How many stamps happen in total? Count the stamps in one repeat first, then multiply!",
      answer: "Each repeat has 2 stamps (a leaf and an acorn), and it repeats 3 times: 2 × 3 = 6 stamps.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Loop-Drawn Pattern",
      challenge:
        "Be the computer! Write a loop in plain words that would stamp an autumn pattern (a row of leaves, a line of pumpkins, or acorns and leaves), then HAND-DRAW the result on paper to prove your loop works.",
      materials: ["Paper & markers"],
      steps: [
        "Choose your autumn pattern (a row of leaves, pumpkins, or acorns).",
        "Decide the repeat count and the step(s) inside the loop.",
        "Write your loop in words: 'repeat N times: stamp ___.'",
        "Hand-draw each repeat to check your loop makes the right pattern."
      ],
      deliverable: "A written loop (repeat count + step) plus the hand-drawn pattern it produces.",
      choiceBoard: [
        "Write the loop and hand-draw the result.",
        "Make a flipbook where each page adds one more loop repeat.",
        "Draw a flowchart showing the 'repeat' arrow looping back."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.code.w6.d3.arena1",
          type: "numeric",
          stem: "A loop says 'repeat 5 times: stamp a leaf, then stamp an acorn.' How many stamps happen in total?",
          answer: 10,
          tolerance: 0,
          unit: "stamps",
          hintLadder: [
            "How many stamps happen in ONE repeat?",
            "Two stamps per repeat, and 5 repeats.",
            "2 × 5 = 10."
          ],
          explanation: "Each repeat does 2 stamps (a leaf and an acorn), and the loop runs 5 times: 2 × 5 = 10 stamps."
        },
        {
          id: "g5.fall.code.w6.d3.arena2",
          type: "multiple_choice",
          stem: "A loop says 'repeat 3 times: draw a side, then turn.' It draws a triangle. How many sides does it draw?",
          choices: ["2", "4", "3", "6"],
          answerIndex: 2,
          explanation: "The loop runs 3 times and draws 1 side each time, so it draws 3 sides — a triangle.",
          hintLadder: [
            "How many times does the loop repeat?",
            "It draws 1 side each repeat.",
            "3 repeats = 3 sides."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Run the Loop",
      prompt:
        "Make a 2-move combo (stomp, then clap) and 'run the loop': repeat the combo 5 times, counting each repeat out loud. You just became a loop with a count of 5!",
      scienceTieIn:
        "Repeating movements gets your heart pumping more oxygen to your muscles and brain, which sharpens your focus for the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Loops turn a tiny rule into a big pattern — just like nature. Write about one real-world pattern (floor tiles, fence posts, a song chorus) you could recreate with a loop, and what would repeat.",
      badge: { id: "g5-fall-loop-weaver", name: "Loop Weaver", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
