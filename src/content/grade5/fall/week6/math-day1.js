// Grade 5 Math — Fall Expedition, Week 6 (Patterns in Nature), Day 1.
// Grade 5 counterpart of g6.fall.math.w6.d1. Same topic (Fibonacci and
// growth patterns in nature) pitched down to Grade 5: smaller Fibonacci
// terms, simpler add/skip-count patterns, and extra step-by-step support.

export const fallG5MathW6D1 = {
  id: "g5.fall.math.w6.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 1,
  subject: "Math",
  topic: "Fibonacci and patterns in nature",
  topicTag: "sequences-fibonacci",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.OA.B.3", "CCSS.5.OA.A.2"],
  hook: "Count the petals on a fall flower or the spirals on a pinecone and the same numbers keep showing up: 1, 1, 2, 3, 5, 8. Today you meet the Fibonacci pattern hiding all over nature.",
  miniLesson: [
    "The Fibonacci sequence starts 1, 1. To get the next number, you add the two numbers right before it: 1 + 1 = 2, then 1 + 2 = 3, then 2 + 3 = 5.",
    "So the sequence goes 1, 1, 2, 3, 5, 8, 13. A tiny rule — 'add the last two' — makes the numbers grow.",
    "Nature uses these numbers in flower petals and pinecone spirals because they help pack seeds and petals neatly with no wasted space."
  ],
  workedExample: {
    prompt: "Continue the Fibonacci sequence: 1, 1, 2, 3, 5, ___",
    steps: [
      "Look at the last two numbers: 3 and 5.",
      "Add them: 3 + 5 = 8.",
      "So the next number is 8.",
      "Each new term is the sum of the two before it."
    ],
    answer: "8"
  },
  items: [
    {
      id: "g5.fall.math.w6.d1.q1",
      type: "numeric",
      stem: "In Fibonacci (1, 1, 2, 3, 5, ...), what number comes right after 5?",
      answer: 8,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the two numbers just before it.",
        "3 + 5.",
        "= 8."
      ],
      explanation: "3 + 5 = 8."
    },
    {
      id: "g5.fall.math.w6.d1.q2",
      type: "numeric",
      stem: "Continue this simpler pattern: 2, 4, 6, 8, ___. What is the next number?",
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
      id: "g5.fall.math.w6.d1.q3",
      type: "multiple_choice",
      stem: "What is the RULE of the Fibonacci sequence?",
      choices: [
        "Add 1 each time",
        "Add the two numbers before it",
        "Double the number each time",
        "Subtract 1 each time"
      ],
      answerIndex: 1,
      explanation: "Fibonacci adds the two numbers right before to get the next one (2 + 3 = 5).",
      hintLadder: [
        "Look at 2, 3, 5 — how do you get 5?",
        "2 + 3 = 5.",
        "You add the two numbers before it."
      ],
      misconceptionsTargeted: ["fibonacci-is-doubling"]
    },
    {
      id: "g5.fall.math.w6.d1.q4",
      type: "numeric",
      stem: "Fibonacci again: 1, 1, 2, 3, 5, 8, ___. What is the next number?",
      answer: 13,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add the last two numbers shown.",
        "5 + 8.",
        "= 13."
      ],
      explanation: "5 + 8 = 13."
    },
    {
      id: "g5.fall.math.w6.d1.q5",
      type: "short_answer",
      stem: "A pattern goes 3, 6, 9, 12. Describe its rule in words and give the next number. Is this Fibonacci? Why or why not?",
      rubric: {
        level3: "Says the rule is 'add 3' (skip-counting by 3), gives 15, AND correctly says it is NOT Fibonacci because Fibonacci adds the two numbers before it instead of always adding 3.",
        level2: "Gets the next number and the rule but does not clearly say why it is not Fibonacci.",
        level1: "Wrong rule or wrong next number."
      },
      exemplar: "The rule is 'add 3' each time, so the next number is 12 + 3 = 15. It is not Fibonacci, because Fibonacci adds the two numbers before it instead of always adding the same 3.",
      hintLadder: [
        "How do you get from 6 to 9, and 9 to 12?",
        "It adds the same amount (3) every time, not the two numbers before.",
        "So it is 'add 3', not Fibonacci."
      ]
    }
  ],
  reflectionPrompt: "Go find a flower, pinecone, or piece of fruit this fall. Count its petals or spirals — did you land on a Fibonacci number like 3, 5, 8, or 13?",
  misconceptionBank: [
    {
      id: "fibonacci-is-doubling",
      label: "Confuses Fibonacci with doubling",
      description: "Thinks Fibonacci doubles each number instead of adding the two numbers before it.",
      coachMove: "Check 2, 3, 5: doubling 2 gives 4, not the next term. Fibonacci ADDS the two numbers before it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spirals on a Pinecone",
      prompt:
        "Pick up a pinecone or look at a sunflower this fall and count the spiral rows going one way, then the other. The two counts are almost always Fibonacci numbers (like 5 and 8, or 8 and 13). Why do you think nature keeps landing on the same numbers?",
      answer:
        "Those spiral counts are almost always Fibonacci numbers that sit next to each other (5 & 8, 8 & 13). Arranging seeds this way packs the most seeds with no gaps — so the pattern helps the plant, it is not just a coincidence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Grow a Fibonacci Leaf Pile",
      challenge:
        "Build a cozy autumn collage where the number of items in each row follows Fibonacci: 1, then 1, then 2, 3, 5, 8 leaves (or acorns, or drawn shapes). Watch a tiny rule grow into a full pile!",
      materials: ["Real leaves/acorns OR paper & markers"],
      steps: [
        "Write the Fibonacci sequence you will use: 1, 1, 2, 3, 5, 8.",
        "Make one row for each number, placing exactly that many leaves or shapes.",
        "Label each row with how you got it (add the two rows before).",
        "Step back and notice how fast the 'add the last two' rule grows your pile."
      ],
      deliverable: "A labeled Fibonacci collage with rows of 1, 1, 2, 3, 5, and 8 items.",
      choiceBoard: [
        "Make the leaf/acorn collage with rows.",
        "Draw a Fibonacci spiral and color each square.",
        "Write a short poem where the lines have 1, 1, 2, then 3 words."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Fibonacci Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w6.d1.arena1",
          type: "numeric",
          stem: "Fibonacci: 1, 1, 2, 3, 5, 8, 13, ___. What is the next number?",
          answer: 21,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Add the last two numbers shown.",
            "8 + 13.",
            "= 21."
          ],
          explanation: "Each term is the sum of the two before it: 8 + 13 = 21."
        },
        {
          id: "g5.fall.math.w6.d1.arena2",
          type: "short_answer",
          stem: "A pattern goes 5, 10, 15, 20. Describe its rule and give the next number. Then explain how this rule is different from Fibonacci.",
          rubric: {
            level3: "Says the rule is 'add 5' (counting by 5s), gives 25, AND explains that Fibonacci instead adds the two numbers before it rather than always adding the same 5.",
            level2: "Gets 25 and the 'add 5' rule but does not clearly contrast with Fibonacci.",
            level1: "Wrong next number or wrong rule."
          },
          exemplar: "The rule is 'add 5' each time, so the next number is 20 + 5 = 25. This is different from Fibonacci because Fibonacci adds the two numbers before it instead of always adding the same 5.",
          hintLadder: [
            "How do you get from 10 to 15, and 15 to 20?",
            "It adds the same 5 every time — that is not adding the two numbers before.",
            "Next number: 20 + 5 = 25; Fibonacci would add the two before instead."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Fibonacci Stretch Sequence",
      prompt:
        "Do a stretch sequence using Fibonacci counts: 1 arm circle, 1 toe touch, 2 jumping jacks, 3 shoulder rolls, 5 marches in place. Notice how the counts grow just like the sequence!",
      scienceTieIn:
        "Growing the reps little by little slowly raises your heart rate so your blood can carry more oxygen to your muscles and brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you spot a Fibonacci number in nature this fall — petals, spirals, or seed rows? Write what you found and the numbers you counted.",
      badge: { id: "g5-fall-fibonacci-forager", name: "Fibonacci Forager", emoji: "🌻" },
      estimatedMinutes: 7
    }
  }
};
