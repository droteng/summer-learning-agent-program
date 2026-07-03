// Grade 7 Coding/CS/AI — Summer Voyage, Week 1 (Explorer Mode), Day 5.
// Topic: algorithms & an intro to functions — naming reusable steps and
// tracing a simple function with parameters.

export const summerG7CodingW1D5 = {
  id: "g7.summer.code.w1.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Algorithms & an intro to functions (name reusable steps; trace a function)",
  topicTag: "functions-intro",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-11", "CSTA.2-AP-14"],
  hook: "Every explorer follows routines — set up camp, purify water, break camp. In code, a routine you name and reuse is called a FUNCTION. Today you learn to package steps into functions and trace exactly what they output.",
  miniLesson: [
    "An algorithm is an ordered list of steps that solves a task. A function is an algorithm you give a NAME so you can reuse it without rewriting the steps.",
    "A function can take inputs called parameters. makeTrailMix(cups) is a function named makeTrailMix with a parameter named cups — you pass in a value and the function uses it.",
    "To 'trace' a function, substitute the input value for the parameter everywhere it appears, then work through the steps in order to find what it returns (outputs)."
  ],
  workedExample: {
    prompt: "Trace this function. define packWater(days): liters = days * 3; return liters. What does packWater(4) return?",
    steps: [
      "The function has one parameter: days. We call packWater(4), so days = 4.",
      "Line 1: liters = days * 3 → liters = 4 * 3 = 12.",
      "Line 2: return liters → return 12.",
      "So packWater(4) returns 12."
    ],
    answer: "12 (liters)."
  },
  items: [
    {
      id: "g7.summer.code.w1.d5.q1",
      type: "multiple_choice",
      stem: "What is the main REASON to package a set of steps into a named function?",
      choices: [
        "So the code runs slower",
        "So you can reuse the same steps without rewriting them each time",
        "So the computer deletes the steps",
        "So you never have to name anything"
      ],
      answerIndex: 1,
      explanation: "A function lets you name a routine once and reuse it as many times as you want, instead of copying the steps over and over.",
      hintLadder: [
        "Think about writing the same steps 10 times vs. once.",
        "A function saves you from repeating yourself.",
        "You name it once, then reuse it."
      ]
    },
    {
      id: "g7.summer.code.w1.d5.q2",
      type: "numeric",
      stem: "Trace this function: define stepsPerMile(miles): return miles * 2000. What does stepsPerMile(3) return?",
      answer: 6000,
      tolerance: 0,
      unit: "steps",
      hintLadder: [
        "The parameter miles gets the value 3.",
        "Substitute: return 3 * 2000.",
        "3 * 2000 = 6000."
      ],
      explanation: "miles = 3, so return 3 * 2000 = 6000 steps."
    },
    {
      id: "g7.summer.code.w1.d5.q3",
      type: "numeric",
      stem: "Trace this two-step function: define campMeals(people): meals = people * 3; return meals + 2. What does campMeals(5) return?",
      answer: 17,
      tolerance: 0,
      unit: "meals",
      hintLadder: [
        "Set the parameter: people = 5.",
        "Line 1: meals = 5 * 3 = 15.",
        "Line 2: return meals + 2 = 15 + 2 = 17."
      ],
      explanation: "people = 5 → meals = 5 * 3 = 15, then return 15 + 2 = 17 meals."
    },
    {
      id: "g7.summer.code.w1.d5.q4",
      type: "multiple_choice",
      stem: "In the function define greetExplorer(name): print('Hello, ' + name), what is 'name'?",
      choices: [
        "The function's name",
        "A parameter — an input the function uses",
        "The output the function returns",
        "A step that never runs"
      ],
      answerIndex: 1,
      explanation: "'name' is a parameter: a named input you pass in, which the function then uses inside its steps.",
      hintLadder: [
        "The function is CALLED greetExplorer; 'name' is inside the parentheses.",
        "Values in the parentheses of a definition are inputs.",
        "That makes 'name' a parameter."
      ],
      misconceptionsTargeted: ["parameter-is-name"]
    },
    {
      id: "g7.summer.code.w1.d5.q5",
      type: "short_answer",
      stem: "Write (in plain words or pseudocode) a simple function called setUpCamp that takes one parameter, tents. List two ordered steps it should do, and say what value setUpCamp(4) would work with.",
      rubric: {
        level3: "Defines a function named setUpCamp with a parameter tents, gives two clear ordered steps that USE tents, and states that setUpCamp(4) means tents = 4.",
        level2: "Defines the function with a parameter and steps but one part (ordered steps, or the tents = 4 substitution) is unclear.",
        level1: "No parameter used, no clear steps, or doesn't connect the call to the parameter value."
      },
      exemplar: "define setUpCamp(tents): Step 1 = clear a flat space for each of the tents; Step 2 = stake down all tents tents. Calling setUpCamp(4) means the parameter tents = 4, so it sets up 4 tents.",
      hintLadder: [
        "Start with 'define setUpCamp(tents):'.",
        "Write two ordered steps that actually use the number of tents.",
        "Explain that setUpCamp(4) passes 4 into the tents parameter."
      ]
    }
  ],
  reflectionPrompt: "Think of a routine you repeat every day. If you turned it into a function, what would you NAME it, and what would its parameter (input) be?",
  misconceptionBank: [
    {
      id: "parameter-is-name",
      label: "Confuses a function's name with its parameter",
      description: "Thinks the word inside the parentheses is the function's name rather than an input value it receives.",
      coachMove: "Point out the two parts: the word BEFORE the parentheses is the function's name; the word INSIDE is the parameter (the input). Trace a call to show the parameter taking a value."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Function",
      prompt:
        "A function: define fillCanteens(hikers): water = hikers * 2; return water + 1. What does fillCanteens(6) return? Trace it step by step before you peek!",
      answer:
        "hikers = 6, so water = 6 * 2 = 12, then return 12 + 1 = 13. fillCanteens(6) returns 13.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent an Explorer Function",
      challenge:
        "Design your own reusable function for an expedition task (packing a bag, rationing food, planning rest stops). Give it a clear name and one parameter, write its ordered steps, then TRACE it with two different input values to prove it's reusable.",
      steps: [
        "Pick an expedition task and name your function like packBag or planStops.",
        "Choose ONE parameter (the input that changes each time, e.g., days or people).",
        "Write the ordered steps the function performs using that parameter.",
        "Trace your function with two different inputs and record what each returns."
      ],
      deliverable: "A written function (name + parameter + ordered steps) plus two traced examples showing different outputs.",
      choiceBoard: [
        "Write the function and its two traces on paper or in a doc.",
        "Draw a flowchart of your function's steps with the parameter flowing through.",
        "Make a 'function trading card' showing the name, parameter, steps, and a sample call."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.code.w1.d5.arena1",
          type: "numeric",
          stem: "Trace this function: define gearWeight(items): base = items * 2; return base * 3. What does gearWeight(5) return? Show each step in your head.",
          answer: 30,
          tolerance: 0,
          unit: "units",
          hintLadder: [
            "Set the parameter: items = 5.",
            "Line 1: base = 5 * 2 = 10.",
            "Line 2: return base * 3 = 10 * 3 = 30."
          ],
          explanation: "items = 5 → base = 5 * 2 = 10, then return 10 * 3 = 30 units. (Order matters: multiply by 2 first, then by 3.)"
        },
        {
          id: "g7.summer.code.w1.d5.arena2",
          type: "short_answer",
          stem: "A student wrote define totalSnacks(kids): return kids + 5 but wanted EACH kid to get 5 snacks. Explain the bug and write the corrected return line.",
          rubric: {
            level3: "Identifies that + gives everyone 5 total (adds 5 once) instead of 5 EACH, and corrects it to 'return kids * 5' (multiplication).",
            level2: "Spots that the math is wrong and hints at multiplication, but the corrected line is imprecise.",
            level1: "Misidentifies the bug or gives no valid correction."
          },
          exemplar: "The bug is that 'kids + 5' just adds 5 snacks total, no matter how many kids there are. To give each kid 5 snacks you multiply: return kids * 5.",
          hintLadder: [
            "Try tracing totalSnacks(3): does + 5 give 15 or 8?",
            "Adding 5 once doesn't scale with the number of kids.",
            "To get 5 PER kid, use multiplication instead of addition."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop the Routine",
      prompt:
        "Turn a stretch into a 'function' you call 3 times: reach up (1), touch toes (2), twist left and right (3). Now 'call' your stretch function 3 times in a row — same steps, repeated, just like reusing code.",
      scienceTieIn:
        "Repeating a set movement sequence builds muscle memory the same way reusing a function builds reliable code — your brain loves predictable patterns.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Functions let you name a routine once and reuse it. What daily routine of yours would make a good function — what would you name it, and what would its input be?",
      badge: { id: "g7-function-trailblazer", name: "Function Trailblazer", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
