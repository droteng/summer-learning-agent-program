// Grade 7 Coding/CS/AI — Summer Voyage, Week 4 ("Code Your First Tool"),
// Day 1. Topic: functions with parameters & return values (define, call, trace).

export const summerG7CodingW4D1 = {
  id: "g7.summer.code.w4.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Coding/Computer Science/AI",
  topic: "Functions with parameters & return values",
  topicTag: "functions",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-14", "CSTA.2-AP-16"],
  hook: "Every tool you build — a quiz scorer, a calculator, a game rule — is really a stack of little machines called FUNCTIONS. You feed each one inputs (parameters), it does a job, and it hands back a result (a return value). Today you build and trace your first ones.",
  miniLesson: [
    "A function is a reusable machine: you DEFINE it once, then CALL it many times. Its inputs are called parameters, and the value it hands back is the return value.",
    "Definition names the parameters; the call supplies the arguments. For define(a, b) { return a + b }, calling add(3, 5) sets a=3, b=5 and returns 8.",
    "To TRACE a call, substitute the argument for each parameter everywhere it appears, then compute the return value step by step."
  ],
  workedExample: {
    prompt: "A function is defined as: function tip(bill) { return bill * 2 + 1 }. What does tip(4) return? Trace it.",
    steps: [
      "Substitute the argument for the parameter: bill = 4.",
      "The body becomes: return 4 * 2 + 1.",
      "Follow order of operations: multiply first, 4 * 2 = 8.",
      "Then add: 8 + 1 = 9. So tip(4) returns 9."
    ],
    answer: "tip(4) returns 9"
  },
  items: [
    {
      id: "g7.summer.code.w4.d1.q1",
      type: "numeric",
      stem: "A function is defined as: function score(correct) { return correct * 10 }. A player got 7 correct. What does score(7) return?",
      answer: 70,
      tolerance: 0,
      unit: "points",
      hintLadder: [
        "Substitute the parameter: correct = 7.",
        "The body is return correct * 10.",
        "7 * 10 = 70."
      ],
      explanation: "correct = 7, so return 7 * 10 = 70 points."
    },
    {
      id: "g7.summer.code.w4.d1.q2",
      type: "numeric",
      stem: "A function is defined as: function total(price, qty) { return price * qty + 2 }. What does total(5, 3) return? (The 2 is a flat shipping fee.)",
      answer: 17,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Match arguments to parameters in order: price = 5, qty = 3.",
        "The body is return price * qty + 2.",
        "5 * 3 = 15, then 15 + 2 = 17."
      ],
      explanation: "price = 5, qty = 3, so return 5 * 3 + 2 = 15 + 2 = 17 dollars.",
      misconceptionsTargeted: ["argument-order-swap"]
    },
    {
      id: "g7.summer.code.w4.d1.q3",
      type: "multiple_choice",
      stem: "For function greet(name) { return \"Hi \" + name }, what is the difference between name and the value \"Leo\" in the call greet(\"Leo\")?",
      choices: [
        "They are the same thing",
        "name is the PARAMETER in the definition; \"Leo\" is the ARGUMENT passed in the call",
        "\"Leo\" is the parameter and name is the return value",
        "Both are return values"
      ],
      answerIndex: 1,
      explanation: "A parameter is the named placeholder in the definition; the argument is the actual value supplied when you call the function.",
      hintLadder: [
        "Which word appears inside the function DEFINITION?",
        "Which value is supplied at the moment you CALL the function?",
        "The definition's placeholder is the parameter; the supplied value is the argument."
      ]
    },
    {
      id: "g7.summer.code.w4.d1.q4",
      type: "multiple_choice",
      stem: "A function has NO return statement — it just prints a message to the screen. What value does calling it give back to the code that called it?",
      choices: [
        "It gives back the printed message",
        "It gives back nothing usable (no return value), so you can't store a result from it",
        "It gives back the parameters",
        "It causes an error every time"
      ],
      answerIndex: 1,
      explanation: "Printing shows text on screen, but without a return statement the function hands back no value the caller can capture and reuse.",
      hintLadder: [
        "Printing and returning are two different actions.",
        "A return value is what the caller receives back to store or use.",
        "No return statement means no value handed back."
      ],
      misconceptionsTargeted: ["print-equals-return"]
    },
    {
      id: "g7.summer.code.w4.d1.q5",
      type: "short_answer",
      stem: "In your own words, explain the difference between a PARAMETER and a RETURN VALUE, and write one short function (in words or pseudocode) that uses both.",
      rubric: {
        level3: "Clearly defines a parameter (an input placeholder named in the definition) AND a return value (the result handed back), AND gives a correct example function using both.",
        level2: "Defines both but one is fuzzy, or the example uses only one of them correctly.",
        level1: "Confuses the two, or the example has no parameter or no return."
      },
      exemplar: "A parameter is an input a function receives (a placeholder in the definition); a return value is the result it hands back. Example: function double(n) { return n * 2 } — n is the parameter and n * 2 is the returned result.",
      hintLadder: [
        "A parameter is what goes IN; a return value is what comes OUT.",
        "Name the placeholder in the definition and the value handed back.",
        "Write a tiny function with one input and one returned result."
      ]
    }
  ],
  reflectionPrompt: "Think about a tool you want to build this week (quiz, calculator, or game). What is ONE function it will need, and what would its parameter(s) and return value be?",
  misconceptionBank: [
    {
      id: "argument-order-swap",
      label: "Passes arguments in the wrong order",
      description: "Assigns arguments to parameters by guessing instead of matching them left-to-right in order.",
      coachMove: "Line up the call under the definition and draw arrows: first argument → first parameter, second → second."
    },
    {
      id: "print-equals-return",
      label: "Thinks printing is the same as returning",
      description: "Assumes a function that prints text is also handing that value back to the caller.",
      coachMove: "Ask: 'Could another line of code STORE this result in a variable?' Only a return value can be stored."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Machine",
      prompt:
        "A function is defined as function power(hp) { return hp * 3 - 4 }. A game character has hp = 5. Trace power(5) before you peek — what number comes back?",
      answer:
        "Substitute hp = 5: return 5 * 3 - 4. Multiply first: 5 * 3 = 15, then 15 - 4 = 11. power(5) returns 11.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Function Machine",
      challenge:
        "Sketch a 'function machine' for your future tool. Draw a box with input arrows (parameters) going in and one output arrow (return value) coming out. Name it, label its parameters, and write the one-line rule it uses to compute the return value.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Pick a small job your tool needs (score a quiz answer, add a tip, compute damage).",
        "Draw a box and give the function a clear name.",
        "Label each input arrow with a parameter name.",
        "Write the rule inside and label the output arrow with the return value."
      ],
      deliverable: "A labeled function-machine diagram with named parameters, an internal rule, and a return value.",
      choiceBoard: [
        "Draw the function machine with labeled input/output arrows.",
        "Write the function as 3 lines of pseudocode plus one sample call and its result.",
        "Make a flowchart showing how one call flows from arguments to returned value."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.code.w4.d1.arena1",
          type: "numeric",
          stem: "function combo(a, b) { return a * b - a }. Trace combo(6, 4). What is the return value?",
          answer: 18,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Match in order: a = 6, b = 4.",
            "The body is return a * b - a → 6 * 4 - 6.",
            "6 * 4 = 24, then 24 - 6 = 18."
          ],
          explanation: "a = 6, b = 4: return 6 * 4 - 6 = 24 - 6 = 18."
        },
        {
          id: "g7.summer.code.w4.d1.arena2",
          type: "numeric",
          stem: "function bonus(base) { return base + 5 }. A second function final(x) { return bonus(x) * 2 }. Trace final(3). What comes back?",
          answer: 16,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "First evaluate the inner call: bonus(3) = 3 + 5 = 8.",
            "Now final returns bonus(x) * 2 = 8 * 2.",
            "8 * 2 = 16."
          ],
          explanation: "bonus(3) returns 3 + 5 = 8, then final returns 8 * 2 = 16. Inner function first!"
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Input-Output Pump",
      prompt:
        "Be a function machine with your body! Reach both hands IN toward your chest (loading the parameters), squeeze, then push both hands OUT in front of you (returning the value). Do 6 slow input-output pumps, breathing out on each 'return'.",
      scienceTieIn: "Big controlled movements paired with breathing raise your heart rate briefly and send more oxygen to your brain, which sharpens focus for the tracing work ahead.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions let you write a rule once and reuse it forever. What is one job in real life you do the same way every time — a 'rule' you could turn into a function?",
      badge: { id: "g7-function-forger", name: "Function Forger", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
