// Grade 5 Coding/CS/AI — Fall Expedition, Week 1 (Back to Basics), Day 5.
// Grade 5 counterpart of g6.fall.code.w1.d5. Same topic (patterns, sequences,
// and rules) pitched down to Grade 5: simpler add/repeat patterns, block-style
// plain-English pseudocode, more step-by-step scaffolding.

export const fallG5CodingW1D5 = {
  id: "g5.fall.code.w1.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Patterns, sequences, and rules",
  topicTag: "patterns-sequences",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "Nature is full of patterns — pinecones, leaf veins, and the rows in a cornfield. Coders see patterns as RULES they can write down and repeat. Today you find the rule.",
  miniLesson: [
    "A sequence is an ordered list of items. A pattern is a rule that tells you what comes next.",
    "To find the rule, ask: what changes from one item to the next — and by how much?",
    "Once you know the rule, a loop can repeat it again and again without you writing every step. Think of a loop as saying: REPEAT this step over and over."
  ],
  workedExample: {
    prompt: "Find the rule and the next number: 2, 4, 6, 8, ___",
    steps: [
      "Compare each number to the one before: 2→4, 4→6, 6→8.",
      "Each step adds 2 (the same amount every time).",
      "Apply the rule: 8 + 2 = 10.",
      "Rule: 'add 2 to the number before.' Next: 10."
    ],
    answer: "10 (rule: add 2 each step)."
  },
  items: [
    {
      id: "g5.fall.code.w1.d5.q1",
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
      id: "g5.fall.code.w1.d5.q2",
      type: "multiple_choice",
      stem: "What is the rule for this sequence: 3, 6, 9, 12, 15?",
      choices: [
        "Add the position number",
        "Multiply by 3 each time",
        "Add 3 each time",
        "Subtract 3 each time"
      ],
      answerIndex: 2,
      explanation: "Each number is 3 more than the one before it: +3 each step.",
      hintLadder: [
        "Check the gap between each pair of numbers.",
        "3 to 6 is +3, 6 to 9 is +3 — the gap stays the same.",
        "The rule is 'add 3 each time.'"
      ],
      misconceptionsTargeted: ["assumes-all-patterns-add"]
    },
    {
      id: "g5.fall.code.w1.d5.q3",
      type: "multiple_choice",
      stem: "A leaf pattern repeats: red, orange, red, orange, red, ... What color is the 8th leaf?",
      choices: ["Orange", "Red", "Yellow", "Green"],
      answerIndex: 0,
      explanation: "Odd positions (1, 3, 5, 7) are red; even positions (2, 4, 6, 8) are orange. The 8th is even, so orange.",
      hintLadder: [
        "Notice the odd spots versus the even spots.",
        "1, 3, 5, 7 are red; 2, 4, 6, 8 are orange.",
        "8 is even → orange."
      ]
    },
    {
      id: "g5.fall.code.w1.d5.q4",
      type: "numeric",
      stem: "A loop prints a number, then adds 2, and repeats. It starts at 3. After printing 4 numbers, what is the LAST number printed?",
      answer: 9,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Write the sequence: start at 3, then +2 each time.",
        "3, 5, 7, 9.",
        "The 4th number printed is 9."
      ],
      explanation: "3, 5, 7, 9 — the 4th printed value is 9."
    },
    {
      id: "g5.fall.code.w1.d5.q5",
      type: "short_answer",
      stem: "Describe the rule for this sequence in your own words, then give the next two numbers: 1, 3, 5, 7, ___, ___",
      rubric: {
        level3: "Identifies the rule (add 2 each time / odd numbers) AND gives 9 and 11.",
        level2: "Gets the next two numbers by spotting the +2 gap but does not name the rule clearly, or names the rule but slips on a number.",
        level1: "Incorrect rule and incorrect numbers."
      },
      exemplar: "The rule is 'add 2 each time,' which makes the odd numbers. So 7 + 2 = 9 and 9 + 2 = 11.",
      hintLadder: [
        "Look at the gap between each pair: 1→3 is +2, 3→5 is +2.",
        "The gap is always +2.",
        "7 + 2 = 9, then 9 + 2 = 11."
      ]
    }
  ],
  reflectionPrompt: "Find one pattern in nature near you this week. Could you write its rule in one sentence?",
  misconceptionBank: [
    {
      id: "assumes-all-patterns-add",
      label: "Assumes every sequence adds a fixed amount",
      description: "Uses an 'add the same number' rule even when the pattern repeats colors or does something else.",
      coachMove: "Have them check the step between EVERY pair, not just the first — and for color patterns, look at odd vs. even positions instead of adding."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Pinecone Pattern Riddle",
      prompt:
        "I start at 1, and each step I add the two numbers before me: 1, 1, 2, 3, 5, 8, ... You can spot me in pinecones and sunflower seeds. What number comes right after 8 in my pattern?",
      answer: "13 — add the two numbers before it: 5 + 8 = 13. (This is the Fibonacci pattern found in nature.)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Nature Pattern Rule",
      challenge:
        "Coders turn patterns into rules a loop can repeat. Invent your own fall-inspired sequence, then write its rule clearly enough that a friend (or a computer) could keep it going.",
      steps: [
        "Choose a starting number and a rule (add a number, or alternate two colors).",
        "Write the first five items of your sequence.",
        "Write the rule in one plain-English sentence, as if telling a loop what to REPEAT.",
        "Hand it to someone and check they can find the 6th item using only your rule."
      ],
      deliverable: "A sequence card: five items plus a one-sentence rule a loop could follow.",
      choiceBoard: [
        "Write a 'leaf color' repeating pattern and its rule.",
        "Make a growing number sequence (add 2, add 5, or add 10) with its rule.",
        "Draw a visual pattern (dots or leaves) and write the rule beneath it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Pattern Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.code.w1.d5.arena1",
          type: "numeric",
          stem: "A loop starts at 4 and ADDS 4 each step: 4, 8, 12, ... What is the 6th number it prints?",
          answer: 24,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Write out the numbers, adding 4 each time.",
            "4, 8, 12, 16, 20, ...",
            "The 6th number is 20 + 4 = 24."
          ],
          explanation: "Adding 4: 4, 8, 12, 16, 20, 24 — the 6th number is 24."
        },
        {
          id: "g5.fall.code.w1.d5.arena2",
          type: "short_answer",
          stem: "Describe the rule for this sequence in your own words, then give the next number: 2, 4, 6, 8, 10, ___",
          rubric: {
            level3: "Identifies the rule (add 2 each time / even numbers) AND gives 12.",
            level2: "Finds 12 by spotting the +2 gap but does not state the rule clearly, or states the rule but slips on the number.",
            level1: "Wrong rule and wrong number."
          },
          exemplar: "The rule is 'add 2 each time,' which makes the even numbers. So 10 + 2 = 12.",
          hintLadder: [
            "Look at the gaps: 2→4 is +2, 4→6 is +2.",
            "The gap is always +2.",
            "10 + 2 = 12."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pattern Clap-Stomp",
      prompt:
        "Make a movement loop: clap, stomp, clap, clap, stomp — then repeat the whole pattern 4 times, a little faster each round. You just ran a loop with your body!",
      scienceTieIn: "Repeating a rhythm strengthens the brain's timing and sequencing circuits — the same kind of thinking the loops in code rely on.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Find one pattern in nature near you this week. Write its rule in a single sentence, the way you would tell a loop to repeat it.",
      badge: { id: "g5-fall-pattern-finder", name: "Pattern Finder", emoji: "🌰" },
      estimatedMinutes: 7
    }
  }
};
