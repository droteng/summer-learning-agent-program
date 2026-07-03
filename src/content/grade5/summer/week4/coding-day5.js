// Grade 5 Summer — Week 4 capstone, Day 5.
// Topic: plan a small tool (grade-5 depth: break the job into small steps,
// name the inputs and output, and trace whole-number math).

export const summerG5CodingW4D5 = {
  id: "g5.summer.code.w4.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Plan a small tool",
  topicTag: "tool-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-11", "CSTA.1B-AP-12"],
  hook: "Real programs start as PLANS, not code. Today you break a job into small steps and write a plan you could hand to a coder — even future-you!",
  miniLesson: [
    "Break it down: split the big goal into small pieces. Each piece should be something you can say in ONE sentence.",
    "Name the inputs and the output. What does the user give the tool? What does the tool give back?",
    "Put the steps in order. If a step is too big to say in one sentence, break it down again."
  ],
  workedExample: {
    prompt:
      "Plan a lemonade-money tool: the user gives how many cups they sold and the price per cup, and gets back the total money earned.",
    steps: [
      "Inputs: cups (a number), price (a number).",
      "Output: total (a number).",
      "Step 1: total = cups × price.",
      "Step 2: give back total.",
      "Try it: 10 cups at $2 each → total = 10 × 2 = 20 dollars."
    ],
    answer: "A short plan with inputs, an output, and the math."
  },
  items: [
    {
      id: "g5.summer.code.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is the FIRST thing to do when planning a small tool?",
      choices: [
        "Start typing code right away.",
        "Name the inputs and the output.",
        "Pick a fancy programming language.",
        "Open the code editor."
      ],
      answerIndex: 1,
      explanation: "Knowing what goes IN and what comes OUT tells you what the tool is even for. That comes before any code.",
      hintLadder: [
        "Before writing code, what shape does the tool have?",
        "Figure out the inputs and the output first.",
        "The editor comes later."
      ]
    },
    {
      id: "g5.summer.code.w4.d5.q2",
      type: "multiple_choice",
      stem: "You want a tool that takes a list of quiz scores and gives back the highest one. What is the INPUT?",
      choices: [
        "Just the highest score.",
        "A list of scores.",
        "The teacher's name.",
        "Nothing."
      ],
      answerIndex: 1,
      explanation: "The input is what the user gives the tool. Here the user gives a list of scores; the tool gives back the highest.",
      hintLadder: [
        "What does the user hand to the tool?",
        "What does the tool hand back?",
        "Scores go IN, the highest comes OUT."
      ]
    },
    {
      id: "g5.summer.code.w4.d5.q3",
      type: "numeric",
      stem:
        "Lemonade-money plan:\n  cups = 12\n  price = 3\n  total = cups * price\nWhat is total?",
      answer: 36,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "The plan says total = cups × price.",
        "cups = 12 and price = 3.",
        "12 × 3 = 36."
      ],
      explanation: "total = 12 × 3 = 36 dollars."
    },
    {
      id: "g5.summer.code.w4.d5.q4",
      type: "multiple_choice",
      stem: "Which step is doing TOO MANY jobs and should be broken into smaller steps?",
      choices: [
        "Ask the user for their name.",
        "Add up the scores.",
        "Print a birthday card, add a photo, write a poem, and mail it.",
        "Show the answer on the screen."
      ],
      answerIndex: 2,
      explanation: "That step is really four jobs joined by 'and' (print, add photo, write poem, mail). Each should be its own step.",
      hintLadder: [
        "A good step is ONE job you can say in one short sentence.",
        "Find the option with several actions joined by 'and'.",
        "The birthday-card step is doing four things at once."
      ]
    },
    {
      id: "g5.summer.code.w4.d5.q5",
      type: "short_answer",
      stem:
        "Plan a tool that picks a random ice cream flavor from a list. Write the input, the output, and 2–3 steps.",
      rubric: {
        level3: "Names a list of flavors as the input, one flavor as the output, and 2-3 clear steps (for example: pick a random spot in the list, then give back the flavor at that spot).",
        level2: "Has an input and output, but the steps are vague.",
        level1: "Just restates the goal with no real steps."
      },
      exemplar:
        "Input: a list of flavors. Output: one flavor.\nStep 1: pick a random spot in the list.\nStep 2: give back the flavor at that spot.",
      hintLadder: [
        "Start with what the user gives (a list of flavors).",
        "What comes back? Just one flavor.",
        "How do you pick? Choose a random spot, then give back the flavor there."
      ]
    }
  ],
  reflectionPrompt: "This week you went from little functions to a full tool plan. What is a tool you'd want to build for your family this summer?",
  misconceptionBank: [
    {
      id: "skip-the-plan",
      label: "Starts coding before planning",
      description: "Jumps straight to writing steps without naming inputs, output, or the order — and ends up tangled.",
      coachMove: "Make them write the plan in 5 lines first: inputs, output, then the steps. Plans are easy to change; tangled code is not."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Build?",
      prompt:
        "Would you rather build a tool that picks tonight's dinner from your favorites, or one that shares a bag of candy evenly among friends? Pick one, then name its INPUT(S) and its OUTPUT before you build anything!",
      answer:
        "Either is great! Dinner picker → input: a list of favorite meals; output: one meal. Candy sharer → inputs: number of candies and number of friends; output: how many each person gets. Naming the inputs and output first is exactly how real designers start.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pitch Your Dream Tool",
      challenge:
        "Design a small tool you'd actually use this summer. Write its name, its input(s), its output, and break the job into 3–5 numbered steps — each one small enough to say in a single clear sentence.",
      steps: [
        "Name the tool and say in one sentence what it does.",
        "List the input(s) (what the user gives) and the output (what comes back).",
        "Break the job into 3–5 numbered steps, in order.",
        "Check each step: if any step does more than one job, break it down again."
      ],
      deliverable: "A one-page tool plan: name, input(s), output, and 3–5 numbered steps.",
      choiceBoard: [
        "Write the plan as a numbered design list.",
        "Draw a flowchart: inputs on the left, steps in boxes, output on the right.",
        "Make a pretend 'app screen' showing what the user types in and what the tool shows back."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Tool Design Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.code.w4.d5.arena1",
          type: "numeric",
          stem:
            "Candy-sharer plan:\n  candies = 24\n  friends = 4\n  each = candies / friends\n  leftover = candies - (each * friends)\nHow many candies does EACH friend get?",
          answer: 6,
          tolerance: 0,
          unit: "candies",
          hintLadder: [
            "The plan says each = candies ÷ friends.",
            "candies = 24 and friends = 4.",
            "24 ÷ 4 = 6, so each friend gets 6."
          ],
          explanation: "each = 24 ÷ 4 = 6 candies. (leftover = 24 - (6 × 4) = 0.)"
        },
        {
          id: "g5.summer.code.w4.d5.arena2",
          type: "multiple_choice",
          stem:
            "You're breaking down a 'beach-day packer' tool. Which step is doing TOO MANY jobs and should be split?",
          choices: [
            "Ask the user how many people are going.",
            "Check if the weather is sunny.",
            "Look up the forecast, pick swimsuits, count towels, and text Grandma the plan.",
            "Show the final packing list."
          ],
          answerIndex: 2,
          explanation:
            "That option bundles four separate jobs (look up forecast, pick swimsuits, count towels, send a text). Each should be its own step.",
          hintLadder: [
            "A good step is ONE job you can say in one short sentence.",
            "Find the option with several actions joined by 'and'.",
            "The forecast / swimsuits / towels / text option is doing four things."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Decompose the Dance",
      prompt:
        "Big moves are made of small steps! Build a short dance by breaking it down: step 1 two claps, step 2 spin once, step 3 jump twice, step 4 freeze. Run all four steps in order, then do it again a little faster.",
      scienceTieIn: "Breaking a movement into ordered steps and repeating it builds the brain-to-muscle pathways that make any skill feel automatic.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "This week you went from little functions to a full tool plan. What tool would you build for your family this summer? Write its name, one input, and one output.",
      badge: { id: "g5-summer-tool-architect", name: "Tool Architect", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
