// Grade 7 ELA/Writing — Summer Voyage, Week 4 ("Code Your First Tool"), Day 5.
// Topic: technical/instructional writing — document how your tool works so a
// user could follow it.

export const summerG7ElaW4D5 = {
  id: "g7.summer.ela.w4.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Technical writing — document how your tool works",
  topicTag: "technical-instructional-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.2", "CCSS.ELA-LITERACY.W.7.4"],
  hook: "A tool nobody can use is just a puzzle. This week you built a quiz, calculator, or game plan — today you write the instructions so a brand-new user could run it without you in the room. Clear technical writing is a real programmer's superpower.",
  miniLesson: [
    "Technical writing explains HOW to do or use something. It is precise, ordered, and written for a specific reader who does NOT already know what you know.",
    "Good instructions use numbered steps in order, name each part exactly, and avoid vague words like 'just do the thing.' One action per step.",
    "A strong tool doc has an overview (what it does), a list of inputs (what the user provides), the steps to use it, and an example showing the expected result."
  ],
  workedExample: {
    prompt: "Turn this vague instruction into a clear technical step: 'Put in your stuff and it gives you the score.'",
    steps: [
      "Identify the exact input the user provides.",
      "Name the action precisely and make it one step.",
      "State what the tool gives back.",
      "Result: 'Step 1: Enter the number of correct answers (0-10). The tool multiplies it by 10 and displays your score.'"
    ],
    answer: "Step 1: Enter the number of correct answers (0-10). The tool multiplies it by 10 and displays your score."
  },
  items: [
    {
      id: "g7.summer.ela.w4.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence is the BEST technical instruction for a user?",
      choices: [
        "Just mess around with the buttons until it works.",
        "Enter a number from 1 to 10 in the 'guesses' box, then press Start.",
        "The tool is really cool and does a lot of stuff.",
        "You'll figure out the inputs eventually."
      ],
      answerIndex: 1,
      explanation: "It is precise (a number 1-10), names the exact part (the 'guesses' box), and gives one clear action, then the next.",
      hintLadder: [
        "Technical writing is precise and specific.",
        "Which option names an exact input and an exact action?",
        "Look for the one with a number range and a named box."
      ]
    },
    {
      id: "g7.summer.ela.w4.d5.q2",
      type: "multiple_choice",
      stem: "Why should instructional steps usually be NUMBERED and contain one action each?",
      choices: [
        "Numbers make the page look longer",
        "So the reader can follow them in the correct order without missing or merging steps",
        "Because paragraphs are not allowed in writing",
        "To use up more space"
      ],
      answerIndex: 1,
      explanation: "Numbered, single-action steps show the exact order and keep the reader from skipping or blending two actions together.",
      hintLadder: [
        "Think about following a recipe with steps jumbled together.",
        "What do numbers tell the reader about order?",
        "One action per numbered step keeps things clear and in sequence."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g7.summer.ela.w4.d5.q3",
      type: "multiple_choice",
      stem: "A user doc for your tool should assume the reader...",
      choices: [
        "Already knows exactly how you built it",
        "Knows nothing about your tool and needs each input and step spelled out",
        "Will only read the title",
        "Is another programmer who wrote the same tool"
      ],
      answerIndex: 1,
      explanation: "Technical writing is written for a reader who does not share your inside knowledge, so every input and step must be explained clearly.",
      hintLadder: [
        "Who is the doc actually FOR?",
        "Do they already know your tool's secrets?",
        "Write for someone starting from zero."
      ],
      misconceptionsTargeted: ["assumes-reader-knows"]
    },
    {
      id: "g7.summer.ela.w4.d5.q4",
      type: "short_answer",
      stem: "Write a clear OVERVIEW (2-3 sentences) for the tool you designed this week. State what it does, who it's for, and what the user gets out of it.",
      rubric: {
        level3: "Clearly states what the tool does, names the intended user, and describes the result/output — all specific to the writer's actual tool.",
        level2: "Covers what it does but is vague about the user or the output.",
        level1: "Too vague to tell what the tool does or who it's for."
      },
      exemplar: "This tool is a 10-question science quiz for classmates studying for a test. The user answers each question, and the tool adds up correct answers and shows a final score out of 100 with a message telling them if they passed.",
      hintLadder: [
        "Start with 'This tool is a ___ that ___.'",
        "Name who would use it.",
        "End with what the user receives (the output)."
      ]
    },
    {
      id: "g7.summer.ela.w4.d5.q5",
      type: "short_answer",
      stem: "Write clear, numbered step-by-step instructions (at least 3 steps) that a brand-new user could follow to run your tool from start to finish. Include the inputs they provide.",
      rubric: {
        level3: "Gives 3+ ordered, numbered steps, each a single clear action, that name the exact inputs and lead to the tool's result — followable by someone new.",
        level2: "Gives steps but some merge actions, skip an input, or are slightly out of order.",
        level1: "Steps are vague, unordered, or missing key inputs so a new user could not follow them."
      },
      exemplar: "1. Open the quiz and read the first question. 2. Type your answer (A, B, C, or D) and press Enter. 3. Repeat for all 10 questions. 4. When finished, read your final score out of 100 shown on the results screen.",
      hintLadder: [
        "List every action a new user must take, in order.",
        "Give each action its own numbered step.",
        "Make sure you name what the user types or chooses at each step."
      ]
    }
  ],
  reflectionPrompt: "Reread your instructions as if you'd never seen the tool. Where might a new user get confused, and how could one clearer sentence fix it?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter",
      description: "Writes instructions as a jumbled list, assuming the reader will sort out the sequence.",
      coachMove: "Ask: 'If someone did step 3 before step 1, would the tool break?' If yes, the order is essential — number it."
    },
    {
      id: "assumes-reader-knows",
      label: "Assumes the reader shares the writer's knowledge",
      description: "Leaves out inputs or steps because they feel 'obvious' to the person who built the tool.",
      coachMove: "Have someone who has never seen the tool try to follow the doc — every place they pause is a gap to fill."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Impossible Sandwich",
      prompt:
        "Imagine writing instructions to make a peanut butter sandwich for a robot that takes every word LITERALLY. What is one step people always forget to include — and what would go wrong if they did?",
      answer:
        "People forget tiny steps like 'open the jar' or 'pick up the knife.' A literal robot would smear peanut butter on a closed jar or use its hand — proving technical writing must spell out EVERY action in order.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write Your Tool's User Guide",
      challenge:
        "Create a one-page user guide for the tool you built this week. Include an overview, a list of inputs the user provides, numbered steps to use it, and one worked example showing the expected result.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Write a 2-3 sentence overview of what your tool does and who it's for.",
        "List every input the user has to provide.",
        "Write numbered steps, one action each, in the exact order to follow.",
        "Add one example run showing the inputs and the result the user should see."
      ],
      deliverable: "A one-page user guide with overview, inputs, numbered steps, and a worked example.",
      choiceBoard: [
        "Write the full user guide as a clean, formatted document.",
        "Design a 'quick-start card' with just the numbered steps and one example.",
        "Record a 60-second screen-or-paper walkthrough narrating each step in order."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Tech Writer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w4.d5.arena1",
          type: "multiple_choice",
          stem: "A user doc says: 'Enter your info and it works.' What is the SINGLE biggest fix a technical writer should make?",
          choices: [
            "Add more exclamation points for excitement",
            "Name the exact input(s) and break it into ordered, specific steps",
            "Make the sentence shorter",
            "Change the font"
          ],
          answerIndex: 1,
          explanation: "The instruction is too vague to follow. Naming the exact inputs and giving specific ordered steps is what makes technical writing usable.",
          hintLadder: [
            "What does a new user NOT know from 'enter your info'?",
            "Which inputs, and in what order?",
            "The fix is specificity and ordered steps."
          ]
        },
        {
          id: "g7.summer.ela.w4.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this weak instruction into two clear, numbered technical steps: 'Do the math thing and you get an answer.'",
          rubric: {
            level3: "Produces two ordered, numbered steps that name a specific input and a specific action leading to a stated result.",
            level2: "Improves clarity but leaves one action vague or merges two actions into one step.",
            level1: "Still vague, unordered, or missing the input or result."
          },
          exemplar: "1. Enter the two numbers you want to add in the first and second boxes. 2. Press 'Calculate' and read the total shown in the result box.",
          hintLadder: [
            "What exact input does the user provide?",
            "Split it into one action per step.",
            "End with what result the user should see."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Step-by-Step Breathing",
      prompt:
        "Follow these steps in order, like clear instructions for your body: 1) Sit tall. 2) Breathe in for 4 counts. 3) Hold for 2. 4) Breathe out for 6. Repeat the four-step sequence 4 times, noticing how ordered steps make it easy to follow.",
      scienceTieIn: "Slow, ordered breathing activates the calming part of your nervous system, lowering your heart rate and clearing your mind — proof that good step-by-step instructions work on people too.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just documented a tool so a stranger could use it. What is one set of instructions in your own life (a recipe, a game, an app) that could be written more clearly — and how?",
      badge: { id: "g7-tool-documentarian", name: "Tool Documentarian", emoji: "📘" },
      estimatedMinutes: 7
    }
  }
};
