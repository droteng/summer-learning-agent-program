// Grade 6 Coding — Week 4 capstone, Day 5.
// Topic: planning a small tool (decompose, design, build).

export const grade6CodingWeek4Day5 = {
  id: "g6.code.w4.d5",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 5,
  subject: "Coding/Computer Science/AI",
  topic: "Plan a small tool",
  topicTag: "tool-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-15"],
  hook: "Real programs start as plans, not code. Today you decompose a problem and write a plan you could hand to a coder (including future-you).",
  miniLesson: [
    "Decompose: break the goal into smaller pieces. Each piece should be something you could explain in one sentence.",
    "List inputs and outputs. What does the user give? What does the tool give back?",
    "Sketch the steps in order. If a step is too big, decompose again."
  ],
  workedExample: {
    prompt:
      "Plan a tip calculator: user types a bill amount and a tip percentage, gets back the tip dollars and the total.",
    steps: [
      "Inputs: bill (number), tip_percent (number).",
      "Output: tip (number), total (number).",
      "Step 1: tip = bill × (tip_percent / 100).",
      "Step 2: total = bill + tip.",
      "Step 3: return tip and total."
    ],
    answer: "Three-step plan with inputs, outputs, and the math."
  },
  items: [
    {
      id: "g6.code.w4.d5.q1",
      type: "multiple_choice",
      stem: "What's the FIRST step when designing a small tool?",
      choices: [
        "Write the code immediately.",
        "List the inputs and outputs.",
        "Pick a programming language.",
        "Open the editor."
      ],
      answerIndex: 1,
      explanation: "Knowing what goes in and what comes out anchors the design. Without inputs/outputs, you don't know what the tool is for.",
      hintLadder: [
        "Before code, what shape does the tool have?",
        "Inputs and outputs first.",
        "Editor comes later."
      ]
    },
    {
      id: "g6.code.w4.d5.q2",
      type: "multiple_choice",
      stem: "You want a tool that takes a list of test scores and gives back the average. What are the inputs?",
      choices: [
        "Just the average.",
        "A list of scores.",
        "A teacher's name.",
        "Nothing."
      ],
      answerIndex: 1,
      explanation: "Inputs are what the user provides. The user provides scores; the tool returns the average.",
      hintLadder: [
        "What does the user give?",
        "What does the tool give back?",
        "Scores in, average out."
      ]
    },
    {
      id: "g6.code.w4.d5.q3",
      type: "numeric",
      stem:
        "Tip calculator plan:\n  bill = 60\n  tip_percent = 20\n  tip = bill * (tip_percent / 100)\n  total = bill + tip\nWhat is total?",
      answer: 72,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "tip_percent / 100 = 0.20.",
        "tip = 60 × 0.20 = 12.",
        "total = 60 + 12 = 72."
      ],
      explanation: "tip = 60 × 0.20 = 12. total = 60 + 12 = 72."
    },
    {
      id: "g6.code.w4.d5.q4",
      type: "multiple_choice",
      stem: "Which step is best to split further?",
      choices: [
        "Get the user's name.",
        "Compute the average.",
        "Send a personalized birthday email with the user's photo and recent activity summary.",
        "Print the result."
      ],
      answerIndex: 2,
      explanation: "The email step is doing several jobs at once: pick template, attach photo, summarize activity, send. Each is its own step.",
      hintLadder: [
        "Which option does multiple jobs in one sentence?",
        "Look for the long compound action.",
        "Birthday email step is doing four things."
      ]
    },
    {
      id: "g6.code.w4.d5.q5",
      type: "short_answer",
      stem:
        "Plan a tool that picks a random snack from a list. Write inputs, outputs, and 2–3 steps.",
      rubric: {
        level3: "Names a list of snacks as input, one snack as output, and 2-3 specific steps (e.g., shuffle, pick first; or generate random index, return list[index]).",
        level2: "Has inputs and outputs but the steps are vague.",
        level1: "Just restates the goal."
      },
      exemplar:
        "Input: a list of snacks. Output: one snack name.\nStep 1: generate a random index between 0 and length-1.\nStep 2: return list[index].",
      hintLadder: [
        "Start with what the user gives (a list).",
        "What's returned? One snack.",
        "How do you pick? Random index, then return at that index."
      ]
    }
  ],
  reflectionPrompt: "This week you went from variables to a real plan. What's a tool you'd want to build for your family this summer?",
  misconceptionBank: [
    {
      id: "skip-the-plan",
      label: "Starts coding before planning",
      description: "Opens the editor and writes lines hoping a tool emerges. Usually produces tangled code that doesn't quite do the goal.",
      coachMove: "Force yourself to write the plan in 5 lines first. Then code. Plan changes are cheap; code changes are expensive."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Build?",
      prompt:
        "Would you rather build a tool that picks tonight's dinner from your favorites, or one that splits a bill evenly among friends? Pick one, then name its INPUTS and its OUTPUT before you build anything!",
      answer:
        "Either is great! Dinner picker → input: a list of favorite meals; output: one meal. Bill splitter → inputs: total bill and number of friends; output: amount each person pays. Naming inputs and outputs first is exactly how real designers start.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pitch Your Dream Tool",
      challenge:
        "Design a small tool you'd actually use this summer. Write its name, its inputs, its output, and decompose it into 3–5 numbered steps small enough that each is one clear sentence.",
      steps: [
        "Name the tool and say in one sentence what it does.",
        "List the inputs (what the user gives) and the output (what comes back).",
        "Break the job into 3–5 numbered steps, in order.",
        "Check each step: if any step does more than one job, split it again."
      ],
      deliverable: "A one-page tool plan: name, inputs, output, and 3–5 decomposed numbered steps.",
      choiceBoard: [
        "Write the plan as a numbered design doc.",
        "Draw a flowchart: inputs on the left, steps in boxes, output on the right.",
        "Make a mock 'app screen' showing what the user types in and what the tool shows back."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Tool Design Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.code.w4.d5.arena1",
          type: "numeric",
          stem:
            "Bill-splitter plan:\n  total = 84\n  friends = 4\n  tip_percent = 25\n  tip = total * (tip_percent / 100)\n  grand_total = total + tip\n  each = grand_total / friends\nWhat does each person pay?",
          answer: 26.25,
          tolerance: 0,
          unit: "dollars",
          hintLadder: [
            "tip = 84 × 0.25 = 21.",
            "grand_total = 84 + 21 = 105.",
            "each = 105 ÷ 4 = 26.25."
          ],
          explanation: "tip = 84 × 0.25 = 21. grand_total = 84 + 21 = 105. each = 105 ÷ 4 = 26.25."
        },
        {
          id: "g6.code.w4.d5.arena2",
          type: "multiple_choice",
          stem:
            "You're decomposing a 'weather outfit picker' tool. Which step is doing TOO MANY jobs and should be split?",
          choices: [
            "Ask the user for today's temperature.",
            "Check if it is below 50 degrees.",
            "Look up the forecast, decide jacket vs t-shirt, pick shoes, and text Mom the plan.",
            "Show the chosen outfit."
          ],
          answerIndex: 2,
          explanation:
            "That option bundles four separate jobs (look up forecast, choose top, choose shoes, send a text). Each should be its own decomposed step.",
          hintLadder: [
            "A good step is one job you can say in one short sentence.",
            "Find the option with several actions joined by 'and'.",
            "The forecast/jacket/shoes/text option is doing four things."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Decompose the Dance",
      prompt:
        "Big moves are made of small steps! Build a short dance by 'decomposing' it: step 1 two claps, step 2 spin once, step 3 jump twice, step 4 freeze. Now run all four steps in order, then again faster.",
      scienceTieIn: "Breaking a movement into ordered steps and repeating it builds the brain-to-muscle pathways that make any skill feel automatic.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "This week you went from variables to a full tool plan. What tool would you build for your family this summer? Write its name, one input, and one output.",
      badge: { id: "tool-architect", name: "Tool Architect", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
