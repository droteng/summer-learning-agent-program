// Grade 6 Coding/CS/AI — Fall Expedition, Week 2 (Ecosystems & Food Webs),
// Day 3. Topic: modeling a predator-prey cycle with rules and loops.

export const fallG6CodingW2D3 = {
  id: "g6.fall.code.w2.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Coding/Computer Science/AI",
  topic: "Model a predator-prey cycle",
  topicTag: "simulation-rules",
  estimatedMinutes: 18,
  standardsRefs: ["CSTA.2-AP-13", "CSTA.2-AP-10"],
  hook: "Scientists predict ecosystems by writing simple rules and letting a computer run them year after year. Today you trace the rules of a rabbit-and-fox simulation.",
  miniLesson: [
    "A simulation is a set of rules repeated over time steps (here, each step = one season).",
    "Rules can depend on conditions: IF there are many rabbits, THEN foxes have lots of food and increase.",
    "Predator and prey populations rise and fall in a cycle: lots of rabbits → more foxes → fewer rabbits → fewer foxes → rabbits recover."
  ],
  workedExample: {
    prompt: "Rule: each season, rabbits double, then foxes eat 10 rabbits. Start: 20 rabbits. How many rabbits after one season?",
    steps: [
      "Apply the first rule: rabbits double. 20 × 2 = 40.",
      "Apply the second rule: foxes eat 10. 40 − 10 = 30.",
      "Order matters — double first, then subtract.",
      "After one season: 30 rabbits."
    ],
    answer: "30 rabbits"
  },
  items: [
    {
      id: "g6.fall.code.w2.d3.q1",
      type: "numeric",
      stem: "Rule: rabbits increase by 12 each season, then foxes eat 5. Start with 8 rabbits. How many after one season?",
      answer: 15,
      tolerance: 0,
      unit: "rabbits",
      hintLadder: [
        "Do the increase first: 8 + 12.",
        "Then subtract what foxes eat: − 5.",
        "8 + 12 = 20, then 20 − 5 = 15."
      ],
      explanation: "8 + 12 = 20, then 20 − 5 = 15 rabbits."
    },
    {
      id: "g6.fall.code.w2.d3.q2",
      type: "multiple_choice",
      stem: "In the rule 'IF rabbits > 50, THEN foxes increase,' what happens when there are 30 rabbits?",
      choices: [
        "Foxes increase",
        "Foxes do NOT increase (the condition is false)",
        "Rabbits disappear",
        "The simulation stops"
      ],
      answerIndex: 1,
      explanation: "30 is not greater than 50, so the IF condition is false and the THEN action doesn't run.",
      hintLadder: [
        "Check the condition: is 30 > 50?",
        "If the condition is false, the THEN part is skipped.",
        "30 > 50 is false, so foxes don't increase."
      ],
      misconceptionsTargeted: ["if-always-runs"]
    },
    {
      id: "g6.fall.code.w2.d3.q3",
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
      id: "g6.fall.code.w2.d3.q4",
      type: "multiple_choice",
      stem: "Why do predator and prey populations rise and fall in a repeating CYCLE?",
      choices: [
        "Random luck each year",
        "More prey feeds more predators, which then reduce the prey, which then reduces predators, and prey recover",
        "The seasons change colors",
        "Predators and prey never affect each other"
      ],
      answerIndex: 1,
      explanation: "Each population's change feeds back on the other, producing a repeating up-and-down cycle.",
      hintLadder: [
        "What happens to foxes when rabbits are plentiful?",
        "Then what happens to rabbits when foxes are plentiful?",
        "Trace the loop — it feeds back on itself."
      ]
    },
    {
      id: "g6.fall.code.w2.d3.q5",
      type: "short_answer",
      stem: "Write a simple two-step rule (in words) for a predator-prey simulation, and say what order the steps must run in.",
      rubric: {
        level3: "Gives two clear, ordered steps (e.g., prey reproduce, then predators eat) AND states/justifies the order.",
        level2: "Gives two steps but order is unclear or unjustified.",
        level1: "Gives one step or rules that don't model predator-prey."
      },
      exemplar: "Step 1: rabbits increase by 20%. Step 2: foxes eat 8 rabbits. Reproduction must happen before foxes eat, or the new rabbits never get counted.",
      hintLadder: [
        "Think about prey reproducing and predators eating.",
        "Which should happen first?",
        "State both steps and the order."
      ]
    }
  ],
  reflectionPrompt: "Real ecosystems have more than two species. What's one extra rule you'd add to make the simulation more realistic?",
  misconceptionBank: [
    {
      id: "if-always-runs",
      label: "Thinks the THEN part always runs",
      description: "Ignores whether the IF condition is true before doing the THEN action.",
      coachMove: "Read IF/THEN aloud as a question: 'Is the condition true? Only then do the action.'"
    }
  ]
};
