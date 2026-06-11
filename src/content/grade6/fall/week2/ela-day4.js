// Grade 6 ELA/Writing — Fall Expedition, Week 2 (Ecosystems & Food Webs),
// Day 4. Topic: informational writing — explain how energy flows clearly.

export const fallG6ElaW2D4 = {
  id: "g6.fall.ela.w2.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Explain it clearly — informational writing",
  topicTag: "informational-writing",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.C"],
  hook: "Knowing how a food web works is one thing — explaining it so a younger kid gets it is another. Today you turn ecosystem science into clear informational writing.",
  miniLesson: [
    "Informational writing teaches. It starts with a clear topic sentence, then adds facts in a logical order.",
    "Use transition words to show how ideas connect: first, next, then, because, as a result.",
    "Define tricky terms the moment you use them, and give an example your reader can picture."
  ],
  workedExample: {
    prompt: "Write a clear topic sentence to begin a paragraph explaining a food chain.",
    steps: [
      "Name the subject: a food chain.",
      "Say what the paragraph will explain: how energy moves between living things.",
      "Keep it one clear sentence a younger reader could follow.",
      "Result: a focused topic sentence to build the rest of the paragraph on."
    ],
    answer: "A food chain shows how energy moves from one living thing to the next as they eat one another."
  },
  items: [
    {
      id: "g6.fall.ela.w2.d4.q1",
      type: "multiple_choice",
      stem: "Which is the BEST topic sentence for a paragraph about decomposers?",
      choices: [
        "Decomposers are cool.",
        "There are many things in nature.",
        "Decomposers are living things that break down dead material and return nutrients to the soil.",
        "I like mushrooms."
      ],
      answerIndex: 2,
      explanation: "It names the subject and clearly states what the paragraph will explain.",
      hintLadder: [
        "A topic sentence names the subject AND previews the point.",
        "Which one tells you what the paragraph is about?",
        "Specific and informative wins over vague or personal."
      ]
    },
    {
      id: "g6.fall.ela.w2.d4.q2",
      type: "multiple_choice",
      stem: "Which transition word best shows a CAUSE-AND-EFFECT connection?",
      choices: ["meanwhile", "as a result", "for example", "in conclusion"],
      answerIndex: 1,
      explanation: "'As a result' signals that what follows is caused by what came before.",
      hintLadder: [
        "You want a word that links a cause to its effect.",
        "Which phrase means 'because of this'?",
        "'As a result' = the effect of a cause."
      ]
    },
    {
      id: "g6.fall.ela.w2.d4.q3",
      type: "multiple_choice",
      stem: "You use the word 'producer' in your explanation. What should you do for a younger reader?",
      choices: [
        "Use it and move on",
        "Define it right away and give an example, like 'a producer is a plant that makes its own food, such as grass'",
        "Replace it with a harder word",
        "Skip explaining anything"
      ],
      answerIndex: 1,
      explanation: "Defining the term immediately with an example keeps the explanation clear.",
      hintLadder: [
        "A younger reader may not know 'producer.'",
        "What helps a reader who meets a new word?",
        "Define it and give a picture-able example."
      ],
      misconceptionsTargeted: ["assumes-reader-knows-terms"]
    },
    {
      id: "g6.fall.ela.w2.d4.q4",
      type: "short_answer",
      stem: "Write 2–3 sentences explaining a simple food chain (grass → rabbit → fox) to a younger student. Use one transition word.",
      rubric: {
        level3: "Clear, ordered explanation of energy moving along the chain, with a transition word and an accessible style.",
        level2: "Mostly clear but missing a transition word OR slightly out of order.",
        level1: "Confusing, inaccurate, or just lists words."
      },
      exemplar: "A food chain shows who eats whom. First, grass makes its own food from sunlight. Then a rabbit eats the grass, and later a fox eats the rabbit, passing the energy along.",
      hintLadder: [
        "Start with a topic sentence.",
        "Go in order: grass, then rabbit, then fox.",
        "Add a transition like 'then' or 'next.'"
      ]
    },
    {
      id: "g6.fall.ela.w2.d4.q5",
      type: "short_answer",
      stem: "Rewrite this unclear sentence so a younger reader understands it: 'Energy diminishes trophically by an order of magnitude per stratum.'",
      rubric: {
        level3: "Accurately restates the idea (about 10% of energy passes to the next level) in plain, kid-friendly words.",
        level2: "Simpler but loses or muddles the meaning.",
        level1: "Still confusing or changes the meaning."
      },
      exemplar: "At each step up a food chain, only about a tenth of the energy gets passed on — the rest is used up.",
      hintLadder: [
        "What does 'order of magnitude' roughly mean here? (about 10×)",
        "What does 'per stratum' mean? (each level)",
        "Say it the way you'd tell a friend."
      ]
    }
  ],
  reflectionPrompt: "Read your food-chain explanation aloud. Would a 7-year-old understand it? What's one word you'd simplify?",
  misconceptionBank: [
    {
      id: "assumes-reader-knows-terms",
      label: "Assumes the reader already knows technical terms",
      description: "Uses words like 'producer' or 'trophic' without defining them.",
      coachMove: "Have them circle every science word and add a quick definition or example right after each one."
    }
  ]
};
