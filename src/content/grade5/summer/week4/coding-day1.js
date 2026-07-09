// Grade 5 Summer — Week 4 (Code Your First Tool), Day 1.
// Topic: functions and parameters (grade-5 depth: a "machine" that takes an
// input, does one job, and gives back an answer — block-style pseudocode).

export const summerG5CodingW4D1 = {
  id: "g5.summer.code.w4.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Coding/Computer Science/AI",
  topic: "Functions and parameters",
  topicTag: "functions",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "A function is like a little summer snack machine. You put something IN, it does ONE job, and it hands you back an answer. Today you build your own!",
  miniLesson: [
    "A function is a named set of steps you can use again and again. You give it a name, then 'call' it whenever you want.",
    "A parameter is the INPUT a function expects — like the flavor you punch into a smoothie machine. The value you actually put in is the argument.",
    "A function GIVES BACK an answer. We say it 'returns' the answer to whoever called it."
  ],
  workedExample: {
    prompt:
      "Read this little machine:\n  FUNCTION double(x):\n    give back x + x\n\n  answer = double(4)\nWhat is answer?",
    steps: [
      "The machine is named double. It expects one input called x.",
      "We call double(4), so x becomes 4.",
      "Inside, it gives back x + x = 4 + 4 = 8.",
      "So answer = 8."
    ],
    answer: "answer = 8"
  },
  items: [
    {
      id: "g5.summer.code.w4.d1.q1",
      type: "numeric",
      stem:
        "FUNCTION add(a, b):\n  give back a + b\n\nanswer = add(3, 5)\nWhat is answer?",
      answer: 8,
      tolerance: 0,
      hintLadder: [
        "Match the inputs to the names: a = 3, b = 5.",
        "The machine gives back a + b.",
        "3 + 5 = 8."
      ],
      explanation: "add(3, 5) gives back 3 + 5 = 8."
    },
    {
      id: "g5.summer.code.w4.d1.q2",
      type: "multiple_choice",
      stem: "Which line correctly CALLS this function with a name and a number of scoops?\n\n  FUNCTION cone(flavor, scoops):\n    give back flavor + ' x ' + scoops",
      choices: [
        "cone('vanilla', 2)",
        "cone vanilla 2",
        "cone[vanilla, 2]",
        "cone: vanilla, 2"
      ],
      answerIndex: 0,
      explanation: "You call a function with parentheses, and put the inputs inside, separated by commas.",
      hintLadder: [
        "A function call needs parentheses ( ).",
        "The inputs go inside the parentheses, separated by a comma.",
        "cone('vanilla', 2) matches the two inputs the function expects."
      ],
      misconceptionsTargeted: ["wrong-call-syntax"]
    },
    {
      id: "g5.summer.code.w4.d1.q3",
      type: "multiple_choice",
      stem: "What is the JOB of a parameter in a function?",
      choices: [
        "It is the name of the whole program.",
        "It makes the function run faster.",
        "It is an INPUT the function expects.",
        "It is the color of the code."
      ],
      answerIndex: 2,
      explanation: "A parameter is an input the function expects — like the flavor you tell a smoothie machine to use.",
      hintLadder: [
        "Think about the smoothie machine — what do you punch in?",
        "It is the thing you give the function to work with.",
        "That is the INPUT — the parameter."
      ]
    },
    {
      id: "g5.summer.code.w4.d1.q4",
      type: "numeric",
      stem:
        "FUNCTION area(width, height):\n  give back width * height\n\nanswer = area(6, 3)\nWhat is answer?",
      answer: 18,
      tolerance: 0,
      hintLadder: [
        "width = 6, height = 3.",
        "The machine gives back width * height.",
        "6 × 3 = 18."
      ],
      explanation: "area(6, 3) gives back 6 × 3 = 18."
    },
    {
      id: "g5.summer.code.w4.d1.q5",
      type: "short_answer",
      stem:
        "Write a little function called `bigger` that takes two numbers and gives back the LARGER one. Use plain-English steps or block-style code — just be clear about both cases.",
      rubric: {
        level3:
          "Names the function with two inputs, compares them (using bigger-than or a check), and gives back the larger value. Both cases are handled.",
        level2: "Compares the numbers but only handles one case or gives back the wrong value.",
        level1: "Vague answer or just restates the prompt."
      },
      exemplar:
        "FUNCTION bigger(a, b):\n  IF a > b:\n    give back a\n  ELSE:\n    give back b",
      hintLadder: [
        "Your function takes two inputs — call them a and b.",
        "Use IF to compare them (which one is bigger?).",
        "Give back the winner, and don't forget the ELSE case for the other number."
      ]
    }
  ],
  reflectionPrompt: "Today you built little functions. What is a job you do the same way every time — that you could wrap up as a function with a name?",
  misconceptionBank: [
    {
      id: "wrong-call-syntax",
      label: "Calls a function without parentheses",
      description: "Treats a function call like a spoken command (cone vanilla 2) instead of using parentheses with inputs inside: cone('vanilla', 2).",
      coachMove: "Remind them: a function is always called with parentheses, and the inputs go inside them."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Guess the Machine",
      prompt:
        "A machine takes a number, does ONE secret job, and gives back: machine(1) → 3, machine(2) → 4, machine(5) → 7. What is the secret rule, and what is machine(8)?",
      answer:
        "The rule is 'add 2': the answer is always the input + 2. So machine(8) = 8 + 2 = 10.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Own Function Machine",
      challenge:
        "Invent a function machine that does a helpful summer job — like 'lemonadeCups(people)' or 'stickers(pages)'. Name it, list its input(s), write the one rule it uses, and show what it gives back for 3 different inputs.",
      steps: [
        "Pick a real summer job and give your function a name (like scoops or waterBottles).",
        "List the input(s) — the thing(s) it expects.",
        "Write the ONE rule it uses to figure out the answer.",
        "Test it: put in 3 different inputs and write what each one gives back."
      ],
      deliverable: "A labeled function machine: name, input(s), rule, and 3 worked input → output examples.",
      choiceBoard: [
        "Write the function in block-style pseudocode with its 3 example calls.",
        "Draw it as a box with a slot: the input drops in the top, the answer pops out the bottom.",
        "Make a comic where a robot runs your machine for three summer customers in a row."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Function Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.code.w4.d1.arena1",
          type: "numeric",
          stem:
            "Read this machine:\n\n  FUNCTION combo(a, b):\n    give back a + b + a\n\n  answer = combo(3, 4)\nWhat is answer?",
          answer: 10,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Match the inputs: a = 3, b = 4.",
            "Give back a + b + a, so add 3, then 4, then 3 again.",
            "3 + 4 + 3 = 10."
          ],
          explanation: "combo(3, 4) gives back 3 + 4 + 3 = 10."
        },
        {
          id: "g5.summer.code.w4.d1.arena2",
          type: "multiple_choice",
          stem:
            "A machine adds one '!' to a word:\n\n  FUNCTION shout(word):\n    give back word + '!'\n\nYou call shout('hi'), then call shout again on THAT answer. What is the final result?",
          choices: ["hi!", "hi!!", "hihi!", "hi"],
          answerIndex: 1,
          explanation:
            "shout('hi') gives back 'hi!'. Calling shout on 'hi!' adds one more '!', giving 'hi!!'.",
          hintLadder: [
            "First find shout('hi').",
            "shout('hi') gives back 'hi!'. Now run shout on 'hi!'.",
            "Adding one more '!' to 'hi!' gives 'hi!!'."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Be the Function",
      prompt:
        "You are a function called jumpAdd(n). Have someone call out a small number n — do that many jumps, then add 2 and do that many arm circles. Run it twice with different inputs!",
      scienceTieIn: "Quick jumping raises your heart rate so your blood carries more oxygen to your muscles and brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is a job at your house you do the exact same way each time? Write a function name for it, one input it would take, and what it would give back.",
      badge: { id: "g5-summer-function-builder", name: "Function Builder", emoji: "⚙️" },
      estimatedMinutes: 7
    }
  }
};
