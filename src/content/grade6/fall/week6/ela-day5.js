// Grade 6 ELA/Writing — Fall Expedition, Week 6 (Patterns in Nature), Day 5.
// Topic: descriptive writing — describe a natural pattern so a reader can
// picture it. Week capstone (pair with the pattern-generator project).

export const fallG6ElaW6D5 = {
  id: "g6.fall.ela.w6.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Describe a pattern — sensory writing",
  topicTag: "descriptive-writing",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.W.6.3.D", "CCSS.L.6.3"],
  hook: "A pattern you can see in your head should come alive on the page. Today you use sensory, specific language to describe a natural pattern so vividly a reader can picture it.",
  miniLesson: [
    "Sensory details use the senses: what does it look, feel, sound like? 'Rough, ridged bark in a diamond grid' beats 'a tree.'",
    "Specific beats general: name shapes, colors, and comparisons (similes: 'spiraled like a staircase').",
    "Organize description spatially — top to bottom, center outward — so the reader can follow."
  ],
  workedExample: {
    prompt: "Improve this dull description: 'The pinecone had a pattern.'",
    steps: [
      "Add what you see: overlapping scales.",
      "Add shape/arrangement: spiraling rows.",
      "Add a comparison: like a tiny brown staircase winding up.",
      "Result: a vivid, picture-able sentence."
    ],
    answer: "The pinecone's stiff brown scales spiraled in tidy rows, winding upward like a tiny staircase."
  },
  items: [
    {
      id: "g6.fall.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence uses the STRONGEST sensory detail?",
      choices: [
        "The leaf was nice.",
        "The leaf had veins branching like thin red rivers across its yellow surface.",
        "There was a leaf.",
        "Leaves exist in fall."
      ],
      answerIndex: 1,
      explanation: "It uses specific colors and a vivid comparison the reader can picture.",
      hintLadder: [
        "Which one lets you SEE it?",
        "Look for specific colors and a comparison.",
        "The 'thin red rivers' sentence."
      ]
    },
    {
      id: "g6.fall.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "A simile describes by...",
      choices: [
        "listing facts",
        "comparing using 'like' or 'as'",
        "using only numbers",
        "repeating a word"
      ],
      answerIndex: 1,
      explanation: "A simile compares two things using 'like' or 'as' (spiraled like a staircase).",
      hintLadder: [
        "It's a kind of comparison.",
        "Which little words signal it?",
        "'Like' or 'as.'"
      ]
    },
    {
      id: "g6.fall.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Why organize a description spatially (e.g., top to bottom)?",
      choices: [
        "To make it longer",
        "So the reader can follow and build the picture in order",
        "Because it's a rule with no reason",
        "To hide details"
      ],
      answerIndex: 1,
      explanation: "A clear spatial order helps the reader assemble the image step by step.",
      hintLadder: [
        "Imagine describing a face in random order.",
        "What helps a reader follow?",
        "A logical spatial order."
      ],
      misconceptionsTargeted: ["more-adjectives-better"]
    },
    {
      id: "g6.fall.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Rewrite 'The flower was pretty' into a vivid, sensory sentence with at least one specific detail and one comparison.",
      rubric: {
        level3: "Specific sensory detail (color/shape/texture) AND a comparison (simile/metaphor), forming a picture-able sentence.",
        level2: "Has a detail OR a comparison, not both.",
        level1: "Still vague ('very pretty') with no specifics."
      },
      exemplar: "The sunflower's golden petals fanned out like rays around a dark, seed-packed center the size of my palm.",
      hintLadder: [
        "What color and shape are the petals?",
        "Add a 'like' comparison.",
        "Combine into one vivid sentence."
      ]
    },
    {
      id: "g6.fall.ela.w6.d5.q5",
      type: "short_answer",
      stem: "Describe a real natural pattern you've seen (a shell, a leaf, frost, ripples) in 2–3 sensory sentences a reader could picture.",
      rubric: {
        level3: "2–3 sentences with specific sensory details and at least one comparison, organized clearly.",
        level2: "Some sensory detail but vague spots or no comparison.",
        level1: "Generic or hard to picture."
      },
      exemplar: "Frost crept across the window in feathery white ferns. Each branch split into smaller branches, like lace stitched overnight. Up close, the icy edges sparkled when the morning light hit them.",
      hintLadder: [
        "Pick a pattern you can clearly remember.",
        "Use color, shape, texture, and a comparison.",
        "Order it so the reader follows."
      ]
    }
  ],
  reflectionPrompt: "Pair this with your pattern generator: could you write a caption that makes someone SEE what your code drew?",
  misconceptionBank: [
    {
      id: "more-adjectives-better",
      label: "Piles on adjectives instead of specific detail",
      description: "Writes 'very pretty, nice, lovely' rather than one precise image.",
      coachMove: "Trade three vague adjectives for one specific, sensory detail or comparison."
    }
  ]
};
