// Grade 6 Coding/CS/AI — Fall Expedition, Week 1 (Back to Basics), Day 5.
// Topic: patterns, sequences, and rules. Re-anchors algorithmic thinking and
// sets up Week 6 "Code a pattern generator inspired by leaves and seeds."

export const fallG6CodingW1D5 = {
  id: "g6.fall.code.w1.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Patterns, sequences, and rules",
  topicTag: "patterns-sequences",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-10", "CSTA.2-AP-11"],
  hook: "Nature is full of patterns — pinecones, leaf veins, the rows in a cornfield. Coders see patterns as RULES they can write down and repeat. Today you find the rule.",
  miniLesson: [
    "A sequence is an ordered list. A pattern is a rule that tells you what comes next.",
    "To find a rule, ask: what changes from one item to the next — and by how much?",
    "Once you know the rule, a loop can repeat it forever without you writing every step."
  ],
  workedExample: {
    prompt: "Find the rule and the next number: 3, 6, 12, 24, ___",
    steps: [
      "Compare each number to the one before: 3→6, 6→12, 12→24.",
      "Each step multiplies by 2 (not adds the same amount).",
      "Apply the rule: 24 × 2 = 48.",
      "Rule: 'multiply the previous number by 2.' Next: 48."
    ],
    answer: "48 (rule: multiply by 2 each step)."
  },
  items: [
    {
      id: "g6.fall.code.w1.d5.q1",
      type: "numeric",
      stem: "What is the next number in the sequence 5, 10, 15, 20, ___ ?",
      answer: 25,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "How much does each number go up by?",
        "It adds 5 each time.",
        "20 + 5 = 25."
      ],
      explanation: "The rule is 'add 5.' 20 + 5 = 25."
    },
    {
      id: "g6.fall.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "What is the rule for this sequence: 2, 4, 8, 16, 32?",
      choices: [
        "Add 2 each time",
        "Multiply by 2 each time",
        "Add the position number",
        "Subtract 2 each time"
      ],
      answerIndex: 1,
      explanation: "Each number is double the one before it: ×2 each step.",
      hintLadder: [
        "Check if it's adding the same amount — 2 to 4 is +2, but 8 to 16 is +8.",
        "Try multiplying instead.",
        "Each term doubles: ×2."
      ],
      misconceptionsTargeted: ["assumes-all-patterns-add"]
    },
    {
      id: "g6.fall.code.w1.d5.q3",
      type: "multiple_choice",
      stem: "A leaf pattern repeats: red, orange, red, orange, red, ... What color is 8th?",
      choices: ["Red", "Orange", "Yellow", "Green"],
      answerIndex: 1,
      explanation: "Odd positions are red, even positions are orange. The 8th position is even, so orange.",
      hintLadder: [
        "Notice odd spots vs. even spots.",
        "1,3,5,7 are red; 2,4,6,8 are orange.",
        "8 is even → orange."
      ]
    },
    {
      id: "g6.fall.code.w1.d5.q4",
      type: "numeric",
      stem: "A loop prints a number, then adds 3, and repeats. It starts at 4. After printing 4 numbers, what is the LAST number printed?",
      answer: 13,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Write the sequence: start 4, then +3 each time.",
        "4, 7, 10, 13.",
        "The 4th number printed is 13."
      ],
      explanation: "4, 7, 10, 13 — the 4th printed value is 13."
    },
    {
      id: "g6.fall.code.w1.d5.q5",
      type: "short_answer",
      stem: "Describe the rule for this sequence in your own words, then give the next two terms: 1, 4, 9, 16, ___, ___",
      rubric: {
        level3: "Identifies the rule (square numbers / position × itself) AND gives 25 and 36.",
        level2: "Gets the next terms by spotting the gaps (+5, +7, +9...) but doesn't name the square rule, or names the rule but slips on a term.",
        level1: "Incorrect rule and incorrect terms."
      },
      exemplar: "Each term is its position times itself: 1×1, 2×2, 3×3, 4×4. So the next are 5×5=25 and 6×6=36.",
      hintLadder: [
        "Look at the gaps: 1→4 is +3, 4→9 is +5, 9→16 is +7.",
        "The gaps grow by 2 each time, so next gaps are +9 then +11.",
        "16+9=25, 25+11=36. (These are the square numbers!)"
      ]
    }
  ],
  reflectionPrompt: "Find one pattern in nature near you this week. Could you write its rule in one sentence?",
  misconceptionBank: [
    {
      id: "assumes-all-patterns-add",
      label: "Assumes every sequence adds a fixed amount",
      description: "Applies an 'add the same number' rule even when the pattern multiplies or grows.",
      coachMove: "Have them check the step between EVERY pair, not just the first — if the gap changes, the rule isn't simple addition."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Pinecone Pattern Riddle",
      prompt:
        "I start at 1, and each step I add the two numbers before me: 1, 1, 2, 3, 5, 8, ... You can spot me in pinecones and sunflower seeds. What number comes right after 8 in my pattern?",
      answer: "13 — add the two before it: 5 + 8 = 13. (This is the Fibonacci pattern found in nature.)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Nature Pattern Rule",
      challenge:
        "Coders turn patterns into rules a loop can repeat. Invent your own fall-inspired sequence, write its rule clearly enough that a friend (or a computer) could continue it.",
      steps: [
        "Choose a starting number and a rule (add, multiply, or alternate).",
        "Write the first five terms of your sequence.",
        "Write the rule in one plain-English sentence, as if instructing a loop.",
        "Hand it to someone and check they can find the 6th term using only your rule."
      ],
      deliverable: "A sequence card: five terms plus a one-sentence rule a loop could follow.",
      choiceBoard: [
        "Write a 'leaf color' repeating pattern and its rule.",
        "Make a growing number sequence (×2 or square numbers) with its rule.",
        "Draw a visual pattern (dots, leaves) and write the rule beneath it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Pattern Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.code.w1.d5.arena1",
          type: "numeric",
          stem: "A loop starts at 2 and DOUBLES each step: 2, 4, 8, ... What is the 6th number it prints?",
          answer: 64,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Write out the terms, doubling each time.",
            "2, 4, 8, 16, 32, ...",
            "The 6th term is 32 × 2 = 64."
          ],
          explanation: "Doubling: 2, 4, 8, 16, 32, 64 — the 6th term is 64."
        },
        {
          id: "g6.fall.code.w1.d5.arena2",
          type: "short_answer",
          stem: "Describe the rule for this sequence in your own words, then give the next term: 1, 3, 6, 10, 15, ___",
          rubric: {
            level3: "Identifies that the gap grows by 1 each time (add 2, add 3, add 4...) AND gives 21.",
            level2: "Finds 21 by spotting the growing gaps but doesn't state the rule clearly, or states the rule but slips on the term.",
            level1: "Wrong rule and wrong term."
          },
          exemplar: "You add one more each step: +2, +3, +4, +5, then +6. So 15 + 6 = 21. (These are the triangular numbers.)",
          hintLadder: [
            "Look at the gaps: 1→3 is +2, 3→6 is +3, 6→10 is +4.",
            "Each gap grows by 1, so the next gap is +6.",
            "15 + 6 = 21."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pattern Clap-Stomp",
      prompt:
        "Make a movement loop: clap, stomp, clap, clap, stomp — then repeat the whole pattern 4 times, a little faster each round. You just ran a loop with your body!",
      scienceTieIn: "Repeating a rhythmic pattern strengthens the brain's timing and sequencing circuits — the same kind of thinking loops in code rely on.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Find one pattern in nature near you this week. Write its rule in a single sentence, the way you'd tell a loop to repeat it.",
      badge: { id: "fall-pattern-finder", name: "Pattern Finder", emoji: "🌰" },
      estimatedMinutes: 7
    }
  }
};
