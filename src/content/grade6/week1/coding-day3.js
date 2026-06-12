// Grade 6 Coding/CS/AI — Week 1 (Explorer Mode), Day 3.
// Topic: tracing simple code (variables, loops, conditionals).

export const grade6CodingWeek1Day3 = {
  id: "g6.code.w1.d3",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Tracing simple code",
  topicTag: "tracing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-12", "CSTA.2-AP-13"],
  hook: "Code follows steps in order. Today you trace a loop and predict what it does before running it.",
  miniLesson: [
    "A variable holds a value. When you change a variable, the new value sticks for the next step.",
    "A loop repeats steps a set number of times or while a condition is true.",
    "An if-statement only runs its inside steps when its condition is true. Otherwise it skips them."
  ],
  workedExample: {
    prompt: "Trace this code by hand. What is the value of total at the end?\n\ntotal = 0\nfor i in [1, 2, 3]:\n    total = total + i",
    steps: [
      "Start: total = 0.",
      "First loop pass: i = 1 → total becomes 0 + 1 = 1.",
      "Second loop pass: i = 2 → total becomes 1 + 2 = 3.",
      "Third loop pass: i = 3 → total becomes 3 + 3 = 6."
    ],
    answer: "total = 6"
  },
  items: [
    {
      id: "g6.code.w1.d3.q1",
      type: "multiple_choice",
      stem: "What does this code print?\n\nfor i in [1, 2, 3]:\n    print(i * 2)",
      choices: ["1 2 3", "2 4 6", "1 4 9", "0 2 4"],
      answerIndex: 1,
      explanation: "The loop runs three times, printing i * 2 each time: 2, 4, 6.",
      hintLadder: [
        "What's the first value of i?",
        "Multiply each value of i by 2.",
        "1×2=2, 2×2=4, 3×2=6."
      ],
      misconceptionsTargeted: ["forgets-to-apply-operator"]
    },
    {
      id: "g6.code.w1.d3.q2",
      type: "numeric",
      stem:
        "What is the value of x after this code runs?\n\nx = 5\nx = x + 2\nx = x * 3",
      answer: 21,
      tolerance: 0,
      hintLadder: [
        "What's x after the first line?",
        "After x = x + 2, what's the new value?",
        "Then multiply that by 3."
      ],
      explanation: "x starts at 5. After + 2 → 7. After × 3 → 21."
    },
    {
      id: "g6.code.w1.d3.q3",
      type: "multiple_choice",
      stem:
        "Which condition matches this rule: \"If a student's score is 80 or higher, they pass.\"",
      choices: [
        "if score < 80:",
        "if score == 80:",
        "if score >= 80:",
        "if score > 80:"
      ],
      answerIndex: 2,
      explanation: "\"80 or higher\" includes 80 itself, so use >= (greater than or equal to).",
      hintLadder: [
        "Does 80 itself count as passing?",
        "Pick the operator that includes the number 80.",
        ">= means \"at least\" — that's the match."
      ],
      misconceptionsTargeted: ["off-by-one-comparison"]
    },
    {
      id: "g6.code.w1.d3.q4",
      type: "multiple_choice",
      stem: "Find the bug:\n\nfor i in [1, 2, 3]:\n    print(i)\n    i = i + 10\n\nWhat does the code actually print?",
      choices: ["1 2 3", "11 12 13", "1 11 21", "10 20 30"],
      answerIndex: 0,
      explanation:
        "The loop reassigns i at the start of each pass, so changing i inside the loop has no lasting effect. The code still prints 1, 2, 3.",
      hintLadder: [
        "Where does i get its value from each pass?",
        "When the loop starts a new pass, what happens to i?",
        "The reassignment to i + 10 is overwritten by the next loop pass."
      ]
    },
    {
      id: "g6.code.w1.d3.q5",
      type: "short_answer",
      stem: "Explain in one or two sentences what a loop does and when you would use one.",
      rubric: {
        level3:
          "Says a loop repeats steps a set number of times or until a condition, and gives a real example use case.",
        level2: "Says a loop repeats steps but doesn't explain when to use one.",
        level1: "Vague or off-topic answer."
      },
      exemplar:
        "A loop repeats the same steps over and over until you tell it to stop. I would use one when I need to do something many times, like printing every name in a list.",
      hintLadder: [
        "What does \"loop\" mean in plain English?",
        "Say what the computer does repeatedly.",
        "Add one example of when you'd want that."
      ]
    }
  ],
  stretch: {
    stem:
      "Write pseudo-code for a program that prints \"Practice!\" five times, but skips the third time.",
    answer:
      "for i in [1, 2, 3, 4, 5]:\n    if i != 3:\n        print(\"Practice!\")",
    explanation:
      "A for loop counts 1 to 5. The if-statement only prints when i is not 3, so the third pass is skipped."
  },
  reflectionPrompt: "Today you traced code by hand. What's one task in your day you wish a loop could do for you?",
  misconceptionBank: [
    {
      id: "forgets-to-apply-operator",
      label: "Forgets to apply the operator",
      description: "Reads `i * 2` but prints i instead, ignoring the multiplication.",
      coachMove: "Slow down and read the operator out loud at every step: \"i times two.\""
    },
    {
      id: "off-by-one-comparison",
      label: "Off-by-one comparison",
      description: "Uses > when the rule says \"or higher\" or uses < when the rule says \"or less\".",
      coachMove: "Ask: does the number itself count? If yes, the operator must include the equal sign."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace It in Your Head",
      prompt:
        "Start with x = 5. Then: x = x + 3. Then: x = x × 2. What is x now? Trace it step by step before you peek!",
      answer: "x = 5 → x + 3 = 8 → 8 × 2 = 16. So x = 16. (Order matters — add first, then multiply.)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Code Your Morning",
      challenge:
        "Write your morning routine as a 4–6 step 'algorithm' (numbered steps a robot could follow exactly). Then trace it — and sneak in one BUG (a wrong order) for a grown-up or friend to find!",
      steps: [
        "List your morning steps in exact order.",
        "Number them like code lines.",
        "Swap two steps to create a 'bug.'",
        "Challenge someone to spot and fix the bug."
      ],
      deliverable: "A numbered morning algorithm with one hidden bug to find.",
      choiceBoard: [
        "Write the numbered algorithm.",
        "Draw it as a flowchart with arrows.",
        "Make a comic where a robot follows your steps literally (and the bug causes chaos)."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Trace Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.code.w1.d3.arena1",
          type: "numeric",
          stem: "Trace: start score = 10. score = score − 4. score = score + 7. What is score?",
          answer: 13,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Do the steps in order.",
            "10 − 4 = 6, then 6 + 7.",
            "= 13."
          ],
          explanation: "10 − 4 = 6, then 6 + 7 = 13."
        },
        {
          id: "g6.code.w1.d3.arena2",
          type: "multiple_choice",
          stem: "Rule: IF coins >= 10 THEN 'win'. You have 9 coins. What happens?",
          choices: ["You win", "Nothing — 9 is not >= 10", "Coins become 10", "The code crashes"],
          answerIndex: 1,
          explanation: "9 is not greater than or equal to 10, so the condition is false and 'win' doesn't run.",
          hintLadder: [
            "Check the condition: is 9 >= 10?",
            "If the condition is false, the THEN part is skipped.",
            "9 >= 10 is false, so nothing happens."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop Dance",
      prompt:
        "Make up a 3-move dance (clap, spin, jump). Now 'loop' it: repeat the whole sequence 4 times. You just ran a loop with your body!",
      scienceTieIn: "Repeating movement gets your heart pumping oxygen to your muscles and brain — the same energy system you'll study in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you follow step-by-step instructions today (a recipe, a game, getting ready)? Could a 'bug' in the order have caused a problem?",
      badge: { id: "code-tracer", name: "Code Tracer", emoji: "💻" },
      estimatedMinutes: 7
    }
  }
};
