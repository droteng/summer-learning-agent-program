// Grade 6 Science — Week 5 (Earth and Inventions), Day 1.
// Topic: ecosystems and interdependence.

export const grade6ScienceWeek5Day1 = {
  id: "g6.sci.w5.d1",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Science",
  topic: "Ecosystems and interdependence",
  topicTag: "ecosystems",
  estimatedMinutes: 18,
  standardsRefs: ["NGSS.MS-LS2-1", "NGSS.MS-LS2-3"],
  hook: "Living things depend on each other in surprising ways. Today you trace energy through a food chain — and predict what happens when a link breaks.",
  miniLesson: [
    "Energy flows: producers (plants) capture sunlight; consumers (animals) eat producers or other consumers; decomposers recycle what's left.",
    "A food chain is the simplest path; a food web is the realistic many-paths version where most species eat several things.",
    "Remove a link and the chain reorganizes. Sometimes a small change causes a big effect (a 'cascade')."
  ],
  workedExample: {
    prompt:
      "Grass → Rabbit → Fox. What happens to the rabbit population if all the foxes are removed?",
    steps: [
      "Foxes eat rabbits, keeping the population in check.",
      "With no foxes, rabbits face fewer predators.",
      "Rabbit population grows quickly.",
      "If rabbits over-eat the grass, the grass dies back and rabbits crash too."
    ],
    answer: "Rabbits boom, grass crashes, rabbits eventually crash — a cascade."
  },
  items: [
    {
      id: "g6.sci.w5.d1.q1",
      type: "multiple_choice",
      stem: "Which organism is a PRODUCER?",
      choices: ["Fox", "Mushroom", "Sunflower", "Rabbit"],
      answerIndex: 2,
      explanation: "Producers make their own food from sunlight. Sunflowers (plants) are producers; foxes and rabbits consume; mushrooms decompose.",
      hintLadder: [
        "Producers make their own food.",
        "Skip the eaters and the decomposers.",
        "Sunflower is the plant."
      ],
      misconceptionsTargeted: ["confuses-mushroom-with-plant"]
    },
    {
      id: "g6.sci.w5.d1.q2",
      type: "multiple_choice",
      stem:
        "In Grass → Grasshopper → Frog → Snake, the snake is at which level?",
      choices: ["Producer", "First-level consumer", "Second-level consumer", "Third-level consumer"],
      answerIndex: 3,
      explanation: "Count the levels of consumers: grasshopper is 1st (eats producer), frog is 2nd, snake is 3rd.",
      hintLadder: [
        "Count consumers from the bottom up.",
        "Grasshopper=1, frog=2, snake=?",
        "Snake is third."
      ]
    },
    {
      id: "g6.sci.w5.d1.q3",
      type: "multiple_choice",
      stem:
        "A wetland's mosquito-eating bats are wiped out by a storm. What's the most likely short-term effect?",
      choices: [
        "Fewer mosquitoes.",
        "More mosquitoes — fewer predators eat them.",
        "Mosquitoes leave the wetland.",
        "Nothing changes."
      ],
      answerIndex: 1,
      explanation: "Predators kept the mosquito population down. Remove the predators, the prey population grows.",
      hintLadder: [
        "What did the bats do to mosquitoes?",
        "Remove the predator — what happens to prey?",
        "More mosquitoes."
      ]
    },
    {
      id: "g6.sci.w5.d1.q4",
      type: "numeric",
      stem:
        "A food chain loses about 90% of its energy at each step. If grass captures 10,000 units, roughly how many reach a third-level consumer at the top?",
      answer: 10,
      tolerance: 0,
      hintLadder: [
        "After step 1, 1,000 units remain (90% lost).",
        "After step 2, 100 units.",
        "After step 3, 10 units."
      ],
      explanation: "10,000 → 1,000 → 100 → 10. Three steps × 90% loss each."
    },
    {
      id: "g6.sci.w5.d1.q5",
      type: "short_answer",
      stem:
        "A farmer wipes out all the bees because they sting. Name two effects on the farm that could surprise them.",
      rubric: {
        level3: "Names two specific consequences (e.g., crops not pollinated → smaller yields; other pollinator-dependent plants in the area die back) and connects them to the bee removal.",
        level2: "Names one consequence specifically + one vague impact.",
        level1: "Vague or off-topic."
      },
      exemplar:
        "First, crops that rely on bees for pollination produce less fruit, so harvests shrink. Second, wildflowers nearby also stop reproducing, which can reduce habitat for birds and small animals.",
      hintLadder: [
        "What do bees do besides sting?",
        "What relies on that?",
        "Trace two cascades from the removal."
      ]
    }
  ],
  reflectionPrompt: "Today you traced energy through an ecosystem. Where in your life do you see small changes causing big effects?",
  misconceptionBank: [
    {
      id: "confuses-mushroom-with-plant",
      label: "Treats mushrooms as plants",
      description: "Calls mushrooms producers because they grow from the ground.",
      coachMove: "Mushrooms are fungi: they don't photosynthesize. They decompose dead matter instead."
    }
  ]
};
