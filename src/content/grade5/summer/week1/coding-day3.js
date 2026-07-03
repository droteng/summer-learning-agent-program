// Grade 5 Summer Coding/CS/AI — Week 1 (Explorer Mode), Day 3.
// Grade-5 counterpart of g6.code.w1.d3 (tracing simple code), pitched down:
// everyday algorithms, patterns, block-style pseudocode, smaller numbers.

export const summerG5CodingW1D3 = {
  id: "g5.summer.code.w1.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Tracing simple code",
  topicTag: "tracing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-15"],
  hook: "Code follows steps in order, like a recipe. Today you follow a loop and guess what it does before running it.",
  keyTerms: [
    { term: "Variable", definition: "A box that holds a value. When you change it, the new value stays." },
    { term: "Loop", definition: "Steps that repeat a set number of times." },
    { term: "If-statement", definition: "A step that only runs when its rule is true." }
  ],
  miniLesson: [
    "A variable holds a value. When you change the variable, the new value sticks for the next step.",
    "A loop repeats steps a set number of times, like doing 3 jumping jacks.",
    "An if-statement only runs its inside steps when its rule is true. If the rule is false, it skips them."
  ],
  workedExample: {
    prompt: "Follow this code by hand. What is total at the end?\n\nSET total = 0\nFOR each number in [1, 2, 3]:\n    SET total = total + number",
    steps: [
      "Start: total = 0.",
      "First time: number = 1 -> total becomes 0 + 1 = 1.",
      "Second time: number = 2 -> total becomes 1 + 2 = 3.",
      "Third time: number = 3 -> total becomes 3 + 3 = 6."
    ],
    answer: "total = 6"
  },
  items: [
    {
      id: "g5.summer.code.w1.d3.q1",
      type: "multiple_choice",
      stem: "What does this code print?\n\nFOR each number in [1, 2, 3]:\n    PRINT number + 2",
      choices: ["1 2 3", "3 4 5", "2 4 6", "1 4 9"],
      answerIndex: 1,
      explanation: "The loop runs three times, printing number + 2 each time: 3, 4, 5.",
      hintLadder: [
        "What is the first number?",
        "Add 2 to each number.",
        "1+2=3, 2+2=4, 3+2=5."
      ],
      misconceptionsTargeted: ["forgets-to-apply-operator"]
    },
    {
      id: "g5.summer.code.w1.d3.q2",
      type: "numeric",
      stem: "What is the value of x after this code runs?\n\nSET x = 4\nSET x = x + 3\nSET x = x + 2",
      answer: 9,
      tolerance: 0,
      hintLadder: [
        "What is x after the first change?",
        "After x = x + 3, what is the new value?",
        "Then add 2 to that."
      ],
      explanation: "x starts at 4. After + 3 -> 7. After + 2 -> 9."
    },
    {
      id: "g5.summer.code.w1.d3.q3",
      type: "multiple_choice",
      stem: "Which rule matches: If a student's score is 10 or higher, they win.",
      choices: [
        "IF score < 10",
        "IF score = 10",
        "IF score >= 10",
        "IF score > 10"
      ],
      answerIndex: 2,
      explanation: "10 or higher includes 10 itself, so use >= (greater than or equal to).",
      hintLadder: [
        "Does a score of exactly 10 count as a win?",
        "Pick the rule that includes the number 10.",
        ">= means at least -- that is the match."
      ],
      misconceptionsTargeted: ["off-by-one-comparison"]
    },
    {
      id: "g5.summer.code.w1.d3.q4",
      type: "multiple_choice",
      stem: "Follow this loop. What does it print?\n\nFOR each number in [1, 2, 3]:\n    PRINT number\n    SET number = number + 10",
      choices: ["1 2 3", "11 12 13", "1 11 21", "10 20 30"],
      answerIndex: 0,
      explanation: "The loop gives number a fresh value each time from the list, so adding 10 inside the loop does not last. It still prints 1, 2, 3.",
      hintLadder: [
        "Where does number get its value each time?",
        "When the loop starts the next time, what happens to number?",
        "The next value from the list replaces the +10 change, so it prints 1, 2, 3."
      ]
    },
    {
      id: "g5.summer.code.w1.d3.q5",
      type: "short_answer",
      stem: "Explain in one or two sentences what a loop does and when you would use one.",
      rubric: {
        level3: "Says a loop repeats steps a set number of times, and gives a real example of when to use one.",
        level2: "Says a loop repeats steps but does not say when to use one.",
        level1: "Vague or off-topic answer."
      },
      exemplar: "A loop repeats the same steps over and over. I would use one when I need to do something many times, like saying hello to every friend in a list.",
      hintLadder: [
        "What does loop mean in plain words?",
        "Say what the computer does again and again.",
        "Add one example of when you would want that."
      ]
    }
  ],
  stretch: {
    stem: "Write block-style pseudocode for a program that prints Practice! four times, but skips the second time.",
    answer: "FOR each number in [1, 2, 3, 4]:\n    IF number is not 2:\n        PRINT Practice!",
    explanation: "The loop counts 1 to 4. The if-statement only prints when number is not 2, so the second time is skipped."
  },
  reflectionPrompt: "Today you followed code step by step. What is one task in your day you wish a loop could do for you?",
  misconceptionBank: [
    {
      id: "forgets-to-apply-operator",
      label: "Forgets to do the math",
      description: "Reads number + 2 but prints the number instead, skipping the + 2.",
      coachMove: "Slow down and read the whole step out loud: number plus two."
    },
    {
      id: "off-by-one-comparison",
      label: "Off-by-one comparison",
      description: "Uses > when the rule says or higher, or uses < when the rule says or less.",
      coachMove: "Ask: does the number itself count? If yes, the rule must include the equal sign."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Follow It in Your Head",
      prompt:
        "Start with x = 4. Then x = x + 3. Then x = x + 5. What is x now? Follow it step by step before you peek!",
      answer: "x = 4 -> 4 + 3 = 7 -> 7 + 5 = 12. So x = 12. Do the steps in order!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Code Your Morning",
      challenge:
        "Write your morning routine as a 4 to 6 step algorithm (numbered steps a robot could follow exactly). Then sneak in one BUG (two steps in the wrong order) for a friend to find!",
      steps: [
        "List your morning steps in exact order.",
        "Number them like code lines.",
        "Swap two steps to make a bug.",
        "Ask someone to spot and fix the bug."
      ],
      deliverable: "A numbered morning algorithm with one hidden bug to find.",
      choiceBoard: [
        "Write the numbered algorithm.",
        "Draw it as a flowchart with arrows.",
        "Make a comic where a robot follows your steps exactly and the bug causes chaos."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Trace Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.code.w1.d3.arena1",
          type: "numeric",
          stem: "Follow: start score = 10. score = score - 3. score = score + 5. What is score?",
          answer: 12,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Do the steps in order.",
            "10 - 3 = 7, then 7 + 5.",
            "= 12."
          ],
          explanation: "10 - 3 = 7, then 7 + 5 = 12."
        },
        {
          id: "g5.summer.code.w1.d3.arena2",
          type: "multiple_choice",
          stem: "Rule: IF coins >= 5 THEN win. You have 4 coins. What happens?",
          choices: ["You win", "Nothing -- 4 is not >= 5", "Coins become 5", "The code breaks"],
          answerIndex: 1,
          explanation: "4 is not greater than or equal to 5, so the rule is false and win does not run.",
          hintLadder: [
            "Check the rule: is 4 >= 5?",
            "If the rule is false, the THEN part is skipped.",
            "4 >= 5 is false, so nothing happens."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop Dance",
      prompt:
        "Make up a 3-move dance (clap, spin, jump). Now loop it: repeat the whole set 4 times. You just ran a loop with your body!",
      scienceTieIn: "Repeating movement gets your heart pumping oxygen to your muscles and brain -- the same energy your body uses when you study.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you follow step-by-step instructions today (a recipe, a game, getting ready)? Could a wrong order have caused a problem?",
      badge: { id: "g5-summer-code-tracer", name: "Code Tracer", emoji: "💻" },
      estimatedMinutes: 7
    }
  }
};
