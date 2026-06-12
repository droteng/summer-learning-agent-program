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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Show It or Tell It?",
      prompt:
        "Would you rather read 'The autumn tree was beautiful' or 'The maple blazed orange, its leaves spinning down like tiny paper flames'? Pick the one you can SEE more clearly and say what makes it stronger.",
      answer:
        "The second one — 'blazed orange' and 'like tiny paper flames' give specific color and a comparison, so you can picture it. 'Beautiful' just tells; the details SHOW.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Caption the Pattern",
      challenge:
        "Pick a real fall pattern — veins on a leaf, ridges on a pinecone, frost on a window — and write a 3-sentence sensory description so vivid a reader could draw it without seeing it. Use specific color/shape/texture words and at least one simile.",
      materials: ["Paper & pencil OR a device to type on", "Something with a pattern to observe (optional)"],
      steps: [
        "Choose your pattern and study it (or picture it clearly).",
        "Write sentence 1: the overall shape, using a specific color and a simile.",
        "Write sentence 2: a close-up detail (texture or how parts connect).",
        "Order your sentences spatially (whole, then close-up) so the reader can follow."
      ],
      deliverable: "A 3-sentence sensory description of one fall pattern, with specific details and at least one simile.",
      choiceBoard: [
        "Write the 3-sentence description.",
        "Pair a sketch with one strong caption sentence.",
        "Write a riddle that describes the pattern without naming it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Description Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence uses a SIMILE to describe a fall pattern?",
          choices: [
            "The pinecone was really, really cool.",
            "The pinecone's scales spiraled outward like steps on a winding staircase.",
            "The pinecone had a lot of parts.",
            "The pinecone existed on the ground."
          ],
          answerIndex: 1,
          explanation: "A simile compares using 'like' or 'as' — here the scales are compared to staircase steps, which the reader can picture.",
          hintLadder: [
            "A simile uses the words 'like' or 'as.'",
            "Find the option that compares the pinecone to something else.",
            "It's the 'like steps on a winding staircase' sentence."
          ]
        },
        {
          id: "g6.fall.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this dull sentence into ONE vivid, sensory sentence about a fall pattern: 'The leaf was nice.' Include a specific detail (color, shape, or texture) AND a comparison.",
          rubric: {
            level3: "One sentence with a specific sensory detail (color/shape/texture) AND a comparison (simile or metaphor), forming a clear, picture-able image.",
            level2: "Has a detail OR a comparison, but not both, or stays a bit vague.",
            level1: "Still general ('very nice') with no specific image or comparison."
          },
          exemplar: "The maple leaf's five points spread like an open hand, its edges crisping from gold to deep rust.",
          hintLadder: [
            "Name a specific color and shape of the leaf.",
            "Add a 'like' or 'as' comparison to something familiar.",
            "Combine them into one sentence a reader could draw."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five Senses Pause",
      prompt:
        "Sit still and slowly notice: 5 things you can see, 4 you can hear, 3 you can feel, 2 you can smell, 1 you can taste. Breathe slowly through each one.",
      scienceTieIn:
        "Tuning into your senses calms your body's stress response, which helps your brain focus and find better words.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one sentence describing the most interesting pattern you noticed today so vividly that someone reading it could picture it without seeing it.",
      badge: { id: "word-painter", name: "Word Painter", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
