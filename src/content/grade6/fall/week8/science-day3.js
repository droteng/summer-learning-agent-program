// Grade 6 Science — Fall Expedition, Week 8 (Harvest Showcase), Day 3.
// Topic: fall science synthesis — observation, ecosystems, and patterns.

export const fallG6ScienceW8D3 = {
  id: "g6.fall.sci.w8.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Science",
  topic: "Fall science synthesis",
  topicTag: "synthesis-review",
  estimatedMinutes: 18,
  standardsRefs: ["NGSS.MS-LS2-3", "NGSS.SEP.3"],
  hook: "This season you observed change, mapped food webs, and found patterns in nature. Today you connect those ideas — the science story behind your showcase.",
  miniLesson: [
    "Observation vs. inference: what you sense directly vs. the explanation you reason out.",
    "Food webs: producers → consumers → decomposers, with energy shrinking ~10% each step.",
    "Patterns (symmetry, spirals, Fibonacci) usually serve a function, like efficient packing or balance."
  ],
  workedExample: {
    prompt: "A sunflower turns to face the sun and its seeds spiral. Name one observation, one inference, and one pattern.",
    steps: [
      "Observation: the flower head points toward the sun.",
      "Inference: it does this to catch more sunlight for energy.",
      "Pattern: the seeds form spirals (often Fibonacci) that pack tightly.",
      "Three lenses on one plant."
    ],
    answer: "Observation: faces the sun. Inference: to gather more light. Pattern: spiral seed packing."
  },
  items: [
    {
      id: "g6.fall.sci.w8.d3.q1",
      type: "multiple_choice",
      stem: "Which is an OBSERVATION?",
      choices: [
        "The squirrel is preparing for a hard winter.",
        "The squirrel is burying an acorn.",
        "The squirrel feels worried.",
        "Winter will be cold."
      ],
      answerIndex: 1,
      explanation: "Burying an acorn is directly seen; the others are inferences or predictions.",
      hintLadder: [
        "What can you directly see?",
        "Avoid guesses about feelings or the future.",
        "Burying the acorn is observable."
      ]
    },
    {
      id: "g6.fall.sci.w8.d3.q2",
      type: "multiple_choice",
      stem: "In a food web, roughly how much energy passes from one level to the next?",
      choices: ["About 90%", "About 50%", "About 10%", "100%"],
      answerIndex: 2,
      explanation: "About 10% passes up each level; the rest is used for living and lost as heat.",
      hintLadder: [
        "Recall the energy pyramid.",
        "Most energy is lost each step.",
        "About 10% passes on."
      ]
    },
    {
      id: "g6.fall.sci.w8.d3.q3",
      type: "multiple_choice",
      stem: "Removing a keystone species from an ecosystem most likely...",
      choices: [
        "has no effect",
        "can cause big ripples that disrupt the whole web",
        "makes all other species stronger",
        "adds more sunlight"
      ],
      answerIndex: 1,
      explanation: "Keystone species hold the web together; losing one can collapse parts of the ecosystem.",
      hintLadder: [
        "Recall sea otters and kelp.",
        "Keystone = big impact for its numbers.",
        "Losing it ripples through the web."
      ],
      misconceptionsTargeted: ["species-are-independent"]
    },
    {
      id: "g6.fall.sci.w8.d3.q4",
      type: "short_answer",
      stem: "Pick one fall science idea (observation/inference, food webs, energy, or patterns) and explain it in 2 sentences as if for your showcase audience.",
      rubric: {
        level3: "Accurately and clearly explains one chosen idea in audience-friendly language.",
        level2: "Mostly clear but with a small inaccuracy or vague spot.",
        level1: "Inaccurate or too vague to follow."
      },
      exemplar: "A food web shows who eats whom in nature. Energy starts with plants and only about a tenth passes to each next level, which is why there are far fewer foxes than rabbits.",
      hintLadder: [
        "Choose the idea you understand best.",
        "Say it simply, like teaching a friend.",
        "Keep it to two clear sentences."
      ]
    },
    {
      id: "g6.fall.sci.w8.d3.q5",
      type: "short_answer",
      stem: "Connect TWO fall science ideas in one sentence (for example, how a pattern relates to an ecosystem, or how observation leads to understanding a food web).",
      rubric: {
        level3: "Makes a clear, accurate connection between two distinct fall science ideas.",
        level2: "Connects two ideas but the link is loose or partly off.",
        level1: "Only one idea, or an inaccurate connection."
      },
      exemplar: "Careful observation of which animals eat which plants is how scientists map a food web and figure out the energy flow through an ecosystem.",
      hintLadder: [
        "Pick two ideas from the season.",
        "How does one lead to or relate to the other?",
        "Join them in one sentence."
      ]
    }
  ],
  reflectionPrompt: "Which fall science idea changed how you see the natural world around you? Give one example you noticed.",
  misconceptionBank: [
    {
      id: "species-are-independent",
      label: "Thinks species don't affect each other much",
      description: "Underestimates how connected an ecosystem's members are.",
      coachMove: "Trace one removal through the web (no otters → urchins boom → kelp gone) to show the connections."
    }
  ]
};
