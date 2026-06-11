// Grade 6 Science — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 5.
// Topic: keystone species, balance, and what happens when a web is disrupted.
// Capstone day for the week's ecosystem-diagram project.

export const fallG6ScienceW2D5 = {
  id: "g6.fall.sci.w2.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 5,
  subject: "Science",
  topic: "Keystone species and ecosystem balance",
  topicTag: "keystone-balance",
  estimatedMinutes: 18,
  standardsRefs: ["NGSS.MS-LS2-4", "NGSS.MS-LS2-5"],
  hook: "Some species hold an entire ecosystem together — remove them and the whole web can collapse. Today you meet keystone species and see what happens when balance breaks.",
  miniLesson: [
    "A keystone species has an effect far bigger than its numbers — like the keystone at the top of an arch that holds the rest in place.",
    "Example: sea otters eat sea urchins. Without otters, urchins explode and devour the kelp forest that many other species need.",
    "Disruptions can come from losing a species, or from adding an invasive species that has no natural predators."
  ],
  workedExample: {
    prompt: "Explain why removing sea otters can destroy a kelp forest.",
    steps: [
      "Otters eat sea urchins, keeping urchin numbers in check.",
      "Remove the otters: nothing controls the urchins, so they multiply.",
      "Urchins eat kelp; too many urchins strip the kelp forest bare.",
      "Many species lose their kelp habitat — the web unravels from one missing link."
    ],
    answer: "No otters → too many urchins → kelp eaten away → habitat lost for many species."
  },
  items: [
    {
      id: "g6.fall.sci.w2.d5.q1",
      type: "multiple_choice",
      stem: "A keystone species is one that...",
      choices: [
        "is the biggest animal in the ecosystem",
        "has an impact on its ecosystem far larger than its numbers suggest",
        "lives the longest",
        "only eats producers"
      ],
      answerIndex: 1,
      explanation: "Keystone species shape their whole ecosystem despite often being few in number.",
      hintLadder: [
        "It's not about size or how many.",
        "Think of the keystone of an arch holding everything up.",
        "Big impact relative to its numbers."
      ]
    },
    {
      id: "g6.fall.sci.w2.d5.q2",
      type: "multiple_choice",
      stem: "Why can an INVASIVE species cause so much damage to a new ecosystem?",
      choices: [
        "It is always poisonous",
        "It often has no natural predators there, so its population can explode",
        "It refuses to eat",
        "It makes the sun brighter"
      ],
      answerIndex: 1,
      explanation: "Without natural predators or competition, an invasive species can multiply unchecked and crowd out native species.",
      hintLadder: [
        "What usually keeps a population in balance?",
        "What's missing when a species is somewhere brand new?",
        "No predators → unchecked growth."
      ],
      misconceptionsTargeted: ["invasive-means-aggressive"]
    },
    {
      id: "g6.fall.sci.w2.d5.q3",
      type: "multiple_choice",
      stem: "Which action would most likely HELP restore a damaged kelp forest?",
      choices: [
        "Remove all the kelp",
        "Bring back the sea otters that control the urchins",
        "Add more urchins",
        "Pour in more salt water"
      ],
      answerIndex: 1,
      explanation: "Restoring the keystone predator (otters) brings urchin numbers back down so kelp can regrow.",
      hintLadder: [
        "What controlled the urchins originally?",
        "Restore the missing keystone.",
        "Bring back the otters."
      ]
    },
    {
      id: "g6.fall.sci.w2.d5.q4",
      type: "short_answer",
      stem: "Pick any ecosystem and describe one change (a removed or added species) and predict its effect on the web.",
      rubric: {
        level3: "Names a real ecosystem + a specific change AND traces a logical chain of effects through the web.",
        level2: "Names a change but the effect chain is vague or stops at one step.",
        level1: "No clear change or no reasoning about effects."
      },
      exemplar: "In a pond, if we remove the frogs, the insects they ate (like mosquitoes) would multiply, and the herons that ate the frogs would have less food and might leave.",
      hintLadder: [
        "Choose an ecosystem you can picture.",
        "Remove or add one species.",
        "Trace at least two effects through the web."
      ]
    },
    {
      id: "g6.fall.sci.w2.d5.q5",
      type: "short_answer",
      stem: "Capstone check: in your own ecosystem diagram this week, which species would be the most damaging to lose, and why?",
      rubric: {
        level3: "Identifies a species with wide connections (predator/keystone) AND justifies with how many parts of the web depend on it.",
        level2: "Names a species but the justification is thin.",
        level1: "Names a species with no reasoning, or misreads the web."
      },
      exemplar: "Losing the hawk in my diagram would matter most because it controls the snakes and mice; without it, those populations would grow and overeat the plants and insects below them.",
      hintLadder: [
        "Look at your diagram — which species has the most arrows connected to it?",
        "Predators often hold a web together.",
        "Explain who depends on it."
      ]
    }
  ],
  reflectionPrompt: "Ecosystems stay healthy through balance. Where else in life (a team, a classroom, a family) does removing one 'keystone' role cause big ripples?",
  misconceptionBank: [
    {
      id: "invasive-means-aggressive",
      label: "Thinks 'invasive' means the species is mean or poisonous",
      description: "Assumes harm comes from aggression rather than from unchecked population growth.",
      coachMove: "Clarify: the damage usually comes from no predators + fast reproduction, not from the species being 'vicious.'"
    }
  ]
};
