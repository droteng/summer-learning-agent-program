// Grade 6 Math — Fall Expedition, Week 6 (Patterns in Nature), Day 1.
// Topic: the Fibonacci sequence and growth patterns in nature.

export const fallG6MathW6D1 = {
  id: "g6.fall.math.w6.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Math",
  topic: "Fibonacci and patterns in nature",
  topicTag: "sequences-fibonacci",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.EE.A.2", "CCSS.6.NS.B.4"],
  hook: "Count the spirals on a pinecone or the petals on a flower and you keep meeting the same numbers: 1, 1, 2, 3, 5, 8... Today you meet the Fibonacci pattern hiding in nature.",
  miniLesson: [
    "The Fibonacci sequence starts 1, 1, and each new number is the sum of the two before it: 1, 1, 2, 3, 5, 8, 13...",
    "The rule is simple but the pattern grows fast — that's how a few seeds become a packed sunflower head.",
    "Nature uses Fibonacci numbers in petals, pinecone spirals, and branching because they pack things efficiently."
  ],
  workedExample: {
    prompt: "Continue the Fibonacci sequence: 1, 1, 2, 3, 5, ___, ___",
    steps: [
      "Add the last two numbers: 3 + 5 = 8.",
      "Then add the new last two: 5 + 8 = 13.",
      "Each term is the sum of the two before it.",
      "Next two terms: 8, 13."
    ],
    answer: "8 and 13"
  },
  items: [
    {
      id: "g6.fall.math.w6.d1.q1",
      type: "numeric",
      stem: "In Fibonacci (1, 1, 2, 3, 5, 8, ...), what number comes after 8?",
      answer: 13,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the two numbers before it.",
        "5 + 8.",
        "= 13."
      ],
      explanation: "5 + 8 = 13."
    },
    {
      id: "g6.fall.math.w6.d1.q2",
      type: "numeric",
      stem: "Continue: 2, 4, 6, 8, ___. (This is a simpler pattern — what's the rule's next term?)",
      answer: 10,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "How much does each step add?",
        "It adds 2 each time.",
        "8 + 2 = 10."
      ],
      explanation: "The rule is 'add 2': 8 + 2 = 10."
    },
    {
      id: "g6.fall.math.w6.d1.q3",
      type: "multiple_choice",
      stem: "What is the RULE of the Fibonacci sequence?",
      choices: [
        "Add 1 each time",
        "Each number is the sum of the two before it",
        "Multiply by 2 each time",
        "Subtract 1 each time"
      ],
      answerIndex: 1,
      explanation: "Fibonacci adds the previous two numbers to get the next.",
      hintLadder: [
        "Look at 2, 3, 5 — how do you get 5?",
        "2 + 3 = 5.",
        "Sum of the two before."
      ],
      misconceptionsTargeted: ["fibonacci-is-doubling"]
    },
    {
      id: "g6.fall.math.w6.d1.q4",
      type: "numeric",
      stem: "Fibonacci again: 1, 1, 2, 3, 5, 8, 13, ___. What's the next number?",
      answer: 21,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the last two: 8 + 13.",
        "8 + 13.",
        "= 21."
      ],
      explanation: "8 + 13 = 21."
    },
    {
      id: "g6.fall.math.w6.d1.q5",
      type: "short_answer",
      stem: "A pattern goes 3, 6, 12, 24. Describe its rule in words and give the next term. Is this Fibonacci? Why or why not?",
      rubric: {
        level3: "Identifies the rule (multiply by 2 / doubling), gives 48, AND correctly says it's NOT Fibonacci (Fibonacci adds the two prior terms).",
        level2: "Gets the next term and rule but doesn't address the Fibonacci comparison clearly.",
        level1: "Wrong rule or next term."
      },
      exemplar: "Each term doubles, so the next is 24 × 2 = 48. It's not Fibonacci, because Fibonacci adds the two previous numbers instead of multiplying.",
      hintLadder: [
        "How do you get from 6 to 12, and 12 to 24?",
        "It's multiplying, not adding two prior terms.",
        "So it's doubling, not Fibonacci."
      ]
    }
  ],
  reflectionPrompt: "Go find a flower, pinecone, or fruit. Count its petals or spirals — did you land on a Fibonacci number?",
  misconceptionBank: [
    {
      id: "fibonacci-is-doubling",
      label: "Confuses Fibonacci with doubling",
      description: "Thinks Fibonacci multiplies by 2 instead of adding the two previous terms.",
      coachMove: "Check 2, 3, 5: doubling 2 gives 4, not the next term. Fibonacci ADDS the two before."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spirals on a Pinecone",
      prompt:
        "Pick up a pinecone, sunflower, or pineapple this fall and count the spiral rows going one way, then the other. The two counts are almost always Fibonacci numbers (like 8 and 13). Why do you think nature keeps landing on the same numbers?",
      answer:
        "Those spiral counts are nearly always neighboring Fibonacci numbers (5 & 8, 8 & 13, 13 & 21). Packing seeds at the Fibonacci-related angle fits the most seeds with no gaps — so the pattern is about efficient packing, not coincidence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Grow a Fibonacci Leaf Pile",
      challenge:
        "Build a cozy autumn collage where the count of items in each row follows Fibonacci: 1, then 1, then 2, 3, 5, 8 leaves (or acorns, or drawn shapes). Watch a tiny rule explode into a full pile.",
      materials: ["Real leaves/acorns OR paper & markers"],
      steps: [
        "Write the Fibonacci sequence you'll use: 1, 1, 2, 3, 5, 8.",
        "Make a row for each number, placing exactly that many leaves or shapes.",
        "Label each row with how you got it (the sum of the two rows before).",
        "Step back: notice how fast a simple add-the-last-two rule grows your pile."
      ],
      deliverable: "A labeled Fibonacci collage with rows of 1, 1, 2, 3, 5, and 8 items.",
      choiceBoard: [
        "Make the leaf/acorn collage with rows.",
        "Draw a Fibonacci spiral and color each square section.",
        "Write a 4-line poem where each line has a Fibonacci number of words (1, 1, 2, 3)."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Fibonacci Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w6.d1.arena1",
          type: "numeric",
          stem: "Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ___. What is the next number?",
          answer: 34,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Add the last two terms shown.",
            "13 + 21.",
            "= 34."
          ],
          explanation: "Each term is the sum of the two before it: 13 + 21 = 34."
        },
        {
          id: "g6.fall.math.w6.d1.arena2",
          type: "short_answer",
          stem: "A pattern goes 1, 3, 9, 27. Describe its rule and give the next term. Then explain how this rule is different from Fibonacci.",
          rubric: {
            level3: "Identifies the rule as multiply by 3 (tripling), gives 81, AND explains Fibonacci instead ADDS the two previous terms rather than multiplying.",
            level2: "Gets 81 and the tripling rule but doesn't clearly contrast with Fibonacci.",
            level1: "Wrong next term or wrong rule."
          },
          exemplar: "Each term is multiplied by 3, so the next is 27 × 3 = 81. This is different from Fibonacci because Fibonacci adds the two numbers before it instead of multiplying by a fixed number.",
          hintLadder: [
            "How do you get from 3 to 9, and 9 to 27?",
            "It multiplies by 3 each time — that's not adding two terms.",
            "Next term: 27 × 3 = 81; Fibonacci would add, not multiply."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Fibonacci Stretch Sequence",
      prompt:
        "Do a stretch sequence using Fibonacci reps: 1 arm circle, 1 toe touch, 2 jumping jacks, 3 shoulder rolls, 5 marches in place. Notice how the counts grow just like the sequence!",
      scienceTieIn:
        "Growing the reps step by step gradually raises your heart rate so blood carries more oxygen to your muscles and brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot a Fibonacci number in nature this fall — petals, spirals, or seed rows? Write what you found and the numbers you counted.",
      badge: { id: "fibonacci-forager", name: "Fibonacci Forager", emoji: "🌻" },
      estimatedMinutes: 7
    }
  }
};
