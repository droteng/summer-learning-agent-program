// Grade 5 ELA/Writing — Fall Expedition, Week 6 (Patterns in Nature), Day 5.
// Grade 5 counterpart of g6.fall.ela.w6.d5. Same topic (descriptive,
// sensory writing about a natural pattern) pitched down to Grade 5:
// shorter passages, clearer vocabulary support, and more scaffolding.

export const fallG5ElaW6D5 = {
  id: "g5.fall.ela.w6.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Describe a pattern — sensory writing",
  topicTag: "descriptive-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3.D", "CCSS.ELA-LITERACY.L.5.3"],
  hook: "A pattern you can see in your head should come alive on the page. Today you use sensory words — words about what you see, feel, and hear — to describe a natural pattern so clearly a reader can picture it.",
  miniLesson: [
    "Sensory details tell what something looks, feels, or sounds like. 'Rough bark in a diamond grid' beats plain old 'a tree.'",
    "Specific beats general: name real colors, shapes, and comparisons instead of saying 'nice' or 'pretty.'",
    "A simile compares two things using the words 'like' or 'as,' such as 'spiraled like a staircase.' It helps the reader picture your pattern."
  ],
  workedExample: {
    prompt: "Make this dull sentence better: 'The pinecone had a pattern.'",
    steps: [
      "Add what you see: overlapping brown scales.",
      "Add the shape: the scales spiral in rows.",
      "Add a comparison: like a tiny staircase winding up.",
      "Put it together into one clear picture."
    ],
    answer: "The pinecone's stiff brown scales spiraled in tidy rows, winding up like a tiny staircase."
  },
  items: [
    {
      id: "g5.fall.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence uses the STRONGEST sensory detail?",
      choices: [
        "The leaf was nice.",
        "The leaf had veins branching like thin red rivers across its yellow surface.",
        "There was a leaf.",
        "Leaves exist in fall."
      ],
      answerIndex: 1,
      explanation: "It uses a real color (red, yellow) and a comparison the reader can picture (like rivers).",
      hintLadder: [
        "Which one lets you SEE it in your mind?",
        "Look for real colors and a comparison.",
        "The 'thin red rivers' sentence."
      ]
    },
    {
      id: "g5.fall.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "A simile describes something by...",
      choices: [
        "listing facts",
        "repeating the same word",
        "using only numbers",
        "comparing two things using 'like' or 'as'"
      ],
      answerIndex: 3,
      explanation: "A simile compares two things using 'like' or 'as' (spiraled like a staircase).",
      hintLadder: [
        "It is a kind of comparison.",
        "Which two little words signal a simile?",
        "'Like' or 'as.'"
      ]
    },
    {
      id: "g5.fall.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Why should you describe something in order (like top to bottom)?",
      choices: [
        "So the reader can follow along and build the picture in order",
        "To make it longer",
        "Because it is a rule with no reason",
        "To hide details"
      ],
      answerIndex: 0,
      explanation: "A clear order helps the reader put the picture together step by step.",
      hintLadder: [
        "Imagine describing a face in a mixed-up order.",
        "What helps a reader follow along?",
        "A clear, in-order description."
      ],
      misconceptionsTargeted: ["more-adjectives-better"]
    },
    {
      id: "g5.fall.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Rewrite 'The flower was pretty' into a vivid sentence with at least one specific detail (color or shape) and one comparison (a simile).",
      rubric: {
        level3: "One sentence with a specific sensory detail (color/shape/texture) AND a comparison using 'like' or 'as', forming a picture the reader can see.",
        level2: "Has a detail OR a comparison, but not both.",
        level1: "Still vague ('very pretty') with no specific detail or comparison."
      },
      exemplar: "The sunflower's golden petals fanned out like rays of sun around a dark, seed-filled center.",
      hintLadder: [
        "What color and shape are the petals?",
        "Add a 'like' comparison.",
        "Put them together into one sentence."
      ]
    },
    {
      id: "g5.fall.ela.w6.d5.q5",
      type: "short_answer",
      stem: "Describe a real natural pattern you've seen (a shell, a leaf, frost, or ripples) in 2 sensory sentences a reader could picture.",
      rubric: {
        level3: "2 sentences with specific sensory details and at least one comparison, written in a clear order.",
        level2: "Some sensory detail but vague in spots, or no comparison.",
        level1: "General or hard to picture."
      },
      exemplar: "Frost spread across the window in feathery white ferns. Each branch split into smaller branches, like lace stitched overnight.",
      hintLadder: [
        "Pick a pattern you remember clearly.",
        "Use color, shape, or texture, plus a comparison.",
        "Put your sentences in a clear order so the reader follows."
      ]
    }
  ],
  reflectionPrompt: "Pair this with a pattern you've drawn: could you write a caption that makes someone SEE the pattern without looking at it?",
  misconceptionBank: [
    {
      id: "more-adjectives-better",
      label: "Piles on adjectives instead of one specific detail",
      description: "Writes 'very pretty, nice, lovely' instead of one clear, specific picture.",
      coachMove: "Trade three vague words like 'nice' for one specific detail or comparison the reader can picture."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Show It or Tell It?",
      prompt:
        "Would you rather read 'The autumn tree was beautiful' or 'The maple glowed orange, its leaves spinning down like tiny paper flames'? Pick the one you can SEE more clearly and say what makes it stronger.",
      answer:
        "The second one — 'glowed orange' and 'like tiny paper flames' give a real color and a comparison, so you can picture it. 'Beautiful' just tells you; the details SHOW you.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Caption the Pattern",
      challenge:
        "Pick a real fall pattern — veins on a leaf, ridges on a pinecone, or frost on a window — and write a 3-sentence description so clear a reader could draw it without seeing it. Use real color, shape, and texture words and at least one simile.",
      materials: ["Paper & pencil OR a device to type on", "Something with a pattern to look at (optional)"],
      steps: [
        "Choose your pattern and study it (or picture it clearly).",
        "Sentence 1: the overall shape, with a real color and a simile.",
        "Sentence 2: a close-up detail (a texture or how the parts connect).",
        "Put your sentences in order (whole first, then close-up) so the reader can follow."
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
          id: "g5.fall.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence uses a SIMILE to describe a fall pattern?",
          choices: [
            "The pinecone was really, really cool.",
            "The pinecone had a lot of parts.",
            "The pinecone's scales spiraled out like steps on a winding staircase.",
            "The pinecone was on the ground."
          ],
          answerIndex: 2,
          explanation: "A simile compares using 'like' or 'as' — here the scales are compared to staircase steps, which the reader can picture.",
          hintLadder: [
            "A simile uses the words 'like' or 'as.'",
            "Find the option that compares the pinecone to something else.",
            "It is the 'like steps on a winding staircase' sentence."
          ]
        },
        {
          id: "g5.fall.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this dull sentence into ONE vivid sentence about a fall pattern: 'The leaf was nice.' Include a specific detail (color, shape, or texture) AND a comparison.",
          rubric: {
            level3: "One sentence with a specific sensory detail (color/shape/texture) AND a comparison using 'like' or 'as', making a clear picture.",
            level2: "Has a detail OR a comparison, but not both, or stays a bit vague.",
            level1: "Still general ('very nice') with no specific detail or comparison."
          },
          exemplar: "The maple leaf's five points spread like an open hand, its edges turning from gold to deep red.",
          hintLadder: [
            "Name a real color and shape of the leaf.",
            "Add a 'like' or 'as' comparison to something familiar.",
            "Put them together into one sentence a reader could draw."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five Senses Pause",
      prompt:
        "Sit still and slowly notice: 5 things you can see, 4 things you can hear, 3 things you can feel, 2 things you can smell, and 1 thing you can taste. Breathe slowly through each one.",
      scienceTieIn:
        "Tuning into your senses calms your body down, which helps your brain focus and find better words.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one sentence describing the most interesting pattern you noticed today so clearly that someone reading it could picture it without seeing it.",
      badge: { id: "g5-fall-word-painter", name: "Word Painter", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
