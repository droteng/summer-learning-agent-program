// Grade 5 Coding/Computer Science/AI — Fall Expedition, Week 2 (Ecosystems &
// Food Webs), Day 3. Grade 5 counterpart of g6.fall.code.w2.d3: model a
// predator-prey cycle with rules and loops, using everyday/block-style
// pseudocode and smaller whole numbers.

export const fallG5CodingW2D3 = {
  id: "g5.fall.code.w2.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Model a predator-prey cycle",
  topicTag: "simulation-rules",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CSTA.1B-AP-10", "CSTA.1B-AP-11"],
  hook: "Scientists guess what an ecosystem will do by writing simple rules and letting a computer run them season after season. Today you follow the rules of a rabbit-and-fox model.",
  miniLesson: [
    "A simulation is a set of rules that repeats over time. Here, each repeat is one season. (Simulation = rules that repeat.)",
    "Some rules use IF/THEN: IF there are many rabbits, THEN the foxes have lots of food and grow.",
    "Predators and prey rise and fall in a cycle: lots of rabbits → more foxes → fewer rabbits → fewer foxes → rabbits come back. A loop repeats the rules again and again."
  ],
  workedExample: {
    prompt: "Rule: each season, add 10 rabbits, then the foxes eat 4 rabbits. Start with 6 rabbits. How many after one season?",
    steps: [
      "Do the first rule: add 10. 6 + 10 = 16.",
      "Do the second rule: foxes eat 4. 16 − 4 = 12.",
      "Order matters — add first, then subtract.",
      "After one season: 12 rabbits."
    ],
    answer: "12 rabbits"
  },
  items: [
    {
      id: "g5.fall.code.w2.d3.q1",
      type: "numeric",
      stem: "Rule: add 8 rabbits each season, then the foxes eat 3. Start with 5 rabbits. How many after one season?",
      answer: 10,
      tolerance: 0,
      unit: "rabbits",
      hintLadder: [
        "Do the adding first: 5 + 8.",
        "Then subtract what the foxes eat: − 3.",
        "5 + 8 = 13, then 13 − 3 = 10."
      ],
      explanation: "5 + 8 = 13, then 13 − 3 = 10 rabbits."
    },
    {
      id: "g5.fall.code.w2.d3.q2",
      type: "multiple_choice",
      stem: "In the rule 'IF rabbits > 20, THEN foxes grow,' what happens when there are 15 rabbits?",
      choices: [
        "Foxes grow",
        "Foxes do NOT grow (the IF is false)",
        "Rabbits disappear",
        "The simulation stops"
      ],
      answerIndex: 1,
      explanation: "15 is not greater than 20, so the IF is false and the THEN part does not run.",
      hintLadder: [
        "Check the condition: is 15 > 20?",
        "If the IF is false, the THEN part is skipped.",
        "15 > 20 is false, so the foxes don't grow."
      ],
      misconceptionsTargeted: ["if-always-runs"]
    },
    {
      id: "g5.fall.code.w2.d3.q3",
      type: "numeric",
      stem: "A loop runs the rule 'rabbits = rabbits + 5' three times, starting at 10. What is the final rabbit count?",
      answer: 25,
      tolerance: 0,
      unit: "rabbits",
      hintLadder: [
        "Add 5 once: 10 → 15.",
        "Again: 15 → 20. Again: 20 → 25.",
        "Three +5 steps from 10 = 25."
      ],
      explanation: "10 → 15 → 20 → 25 after three loops."
    },
    {
      id: "g5.fall.code.w2.d3.q4",
      type: "multiple_choice",
      stem: "Why do predator and prey numbers go up and down in a repeating CYCLE?",
      choices: [
        "Random luck each year",
        "More prey feeds more predators, then the predators lower the prey, then there are fewer predators, and the prey come back",
        "The leaves change colors",
        "Predators and prey never affect each other"
      ],
      answerIndex: 1,
      explanation: "Each group's change affects the other, which makes a repeating up-and-down cycle.",
      hintLadder: [
        "What happens to foxes when there are lots of rabbits?",
        "Then what happens to rabbits when there are lots of foxes?",
        "Follow the loop — it comes back around."
      ]
    },
    {
      id: "g5.fall.code.w2.d3.q5",
      type: "short_answer",
      stem: "Write a simple two-step rule (in words) for a predator-prey model, and say what order the steps must run in.",
      rubric: {
        level3: "Gives two clear, ordered steps (like prey grow, then predators eat) AND says or explains the order.",
        level2: "Gives two steps but the order is unclear or not explained.",
        level1: "Gives one step, or rules that don't model predator and prey."
      },
      exemplar: "Step 1: add 6 rabbits. Step 2: the foxes eat 4 rabbits. The rabbits must grow first, or the new rabbits never get counted.",
      hintLadder: [
        "Think about prey growing and predators eating.",
        "Which should happen first?",
        "State both steps and the order."
      ]
    }
  ],
  reflectionPrompt: "Real ecosystems have more than two animals. What is one extra rule you would add to make the model more real?",
  misconceptionBank: [
    {
      id: "if-always-runs",
      label: "Thinks the THEN part always runs",
      description: "Forgets to check whether the IF condition is true before doing the THEN action.",
      coachMove: "Read IF/THEN aloud as a question: 'Is the condition true? Only then do the action.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Trace the Seasons",
      prompt:
        "A model starts with 12 rabbits. Each season runs two rules in order: add 6 rabbits, then the foxes eat 10. After ONE season, how many rabbits are left? Trace it before you peek!",
      answer:
        "12 + 6 = 18, then 18 − 10 = 8. So 8 rabbits remain. Order matters — add first, then subtract!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Simulation Rule",
      challenge:
        "Design your own predator-prey model on paper. Write two ordered rules (one for prey, one for predators), pick starting numbers, and trace it by hand for 3 seasons to watch the cycle appear.",
      materials: ["Paper & pencil, OR a device to type/draw on"],
      steps: [
        "Choose a prey and a predator and pick starting counts.",
        "Write Rule 1 (how prey change) and Rule 2 (how predators eat), in order.",
        "Make a table with columns: Season, Prey, Predators.",
        "Trace your rules for 3 seasons and watch the numbers rise and fall."
      ],
      deliverable: "A rules sheet plus a 3-season trace table showing the population cycle.",
      choiceBoard: [
        "Write the rules and fill in the trace table.",
        "Draw a line graph of prey and predators over 3 seasons.",
        "Draw a flowchart with arrows showing the order the rules run each season."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Simulation Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.code.w2.d3.arena1",
          type: "numeric",
          stem: "A loop runs TWO seasons. Each season: add 10 rabbits, then the foxes eat 6. Start with 8 rabbits. How many rabbits after the SECOND season? Trace each step.",
          answer: 16,
          tolerance: 0,
          unit: "rabbits",
          hintLadder: [
            "Season 1: add 10 to 8, then subtract 6.",
            "Season 1 ends at (8 + 10) − 6 = 12.",
            "Season 2: add 10 to 12, then subtract 6."
          ],
          explanation: "Season 1: 8 + 10 = 18, then 18 − 6 = 12. Season 2: 12 + 10 = 22, then 22 − 6 = 16 rabbits."
        },
        {
          id: "g5.fall.code.w2.d3.arena2",
          type: "multiple_choice",
          stem: "Rule: 'IF rabbits >= 30, THEN foxes grow.' In the model the rabbit count is exactly 30. What happens to the foxes?",
          choices: [
            "Foxes do NOT grow — 30 is not enough",
            "Foxes grow — 30 meets the 'greater than or equal to' rule",
            "The rabbits disappear",
            "The simulation crashes"
          ],
          answerIndex: 1,
          explanation: "'>=' means greater than OR equal to, so exactly 30 makes the rule true and the THEN action runs.",
          hintLadder: [
            "What does the '=' part of '>=' mean?",
            "Does 30 count as 'at least 30'?",
            "30 >= 30 is true, so the THEN part runs."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cycle Sway",
      prompt:
        "Act out the predator-prey cycle: grow TALL and spread your arms wide (rabbits booming), then crouch low as the foxes move in, then rise again as the rabbits come back. Repeat the up-down sway 4 times.",
      scienceTieIn: "Moving in a rhythm sends oxygen-rich blood to your brain, which helps you think clearly — your body has cycles just like an ecosystem does.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Simulations repeat simple rules to guess what comes next. What is one everyday thing you could guess by writing down its 'rules'?",
      badge: { id: "g5-fall-sim-cycle-coder", name: "Sim Cycle Coder", emoji: "🦊" },
      estimatedMinutes: 7
    }
  }
};
