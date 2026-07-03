// Grade 6 Science — Spring Expedition, Week 2 (Plants & Growth), Day 2.
// Topic: parts of a plant (roots, stem, leaves, flower) and their functions.

export const springG6ScienceW2D2 = {
  id: "g6.spring.sci.w2.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Parts of a plant and their functions",
  topicTag: "plant-parts",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS1-5"],
  hook: "A spring plant is a team of specialized parts. Roots drink, stems lift, leaves cook, flowers make the next generation. Today you learn who does what — and why the plant needs them all.",
  miniLesson: [
    "Roots anchor the plant and absorb water and minerals from the soil.",
    "The stem holds the plant up and acts like a pipeline, carrying water up and sugar around the plant. Leaves are the food factories where photosynthesis happens.",
    "Flowers are the reproductive part — they make seeds so new plants can grow, often with help from pollinators like bees."
  ],
  workedExample: {
    prompt: "Match each part to its main job: roots, stem, leaves, flower.",
    steps: [
      "Roots: absorb water and minerals and anchor the plant.",
      "Stem: supports the plant and transports water and sugar.",
      "Leaves: make food through photosynthesis.",
      "Flower: makes seeds for reproduction."
    ],
    answer: "Roots = absorb/anchor; Stem = support/transport; Leaves = make food; Flower = reproduce."
  },
  items: [
    {
      id: "g6.spring.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "Which plant part absorbs water and minerals from the soil?",
      choices: ["Leaves", "Flower", "Roots", "Stem"],
      answerIndex: 2,
      explanation: "Roots anchor the plant and pull water and minerals up from the soil.",
      hintLadder: [
        "Think about the part that is underground.",
        "It has to reach the water in the soil.",
        "Roots do the drinking and anchoring."
      ]
    },
    {
      id: "g6.spring.sci.w2.d2.q2",
      type: "multiple_choice",
      stem: "What is the MAIN job of the flower?",
      choices: [
        "To make food by photosynthesis",
        "To reproduce — make seeds for new plants",
        "To absorb water from the soil",
        "To hold the plant upright"
      ],
      answerIndex: 1,
      explanation: "Flowers are the reproductive part; they produce seeds, often with help from pollinators.",
      hintLadder: [
        "Which part attracts bees and butterflies?",
        "Pollinators help this part do its job.",
        "Flowers make seeds — that's reproduction."
      ],
      misconceptionsTargeted: ["flower-is-decoration"]
    },
    {
      id: "g6.spring.sci.w2.d2.q3",
      type: "multiple_choice",
      stem: "The stem works like a pipeline. What does it transport?",
      choices: [
        "Only sunlight",
        "Water up from the roots and sugar around the plant",
        "Only oxygen down to the roots",
        "Nothing — it just holds the plant up"
      ],
      answerIndex: 1,
      explanation: "The stem supports the plant AND carries water up from the roots and sugar made in the leaves to the rest of the plant.",
      hintLadder: [
        "The stem connects roots to leaves.",
        "It carries water one way and food another.",
        "Water goes up; sugar travels out to where it's needed."
      ]
    },
    {
      id: "g6.spring.sci.w2.d2.q4",
      type: "short_answer",
      stem: "A gardener accidentally cuts most of the roots off a young plant. Predict what will happen to the plant and explain why, based on the root's job.",
      rubric: {
        level3: "Predicts the plant wilts/dies AND explains that without roots it cannot absorb water/minerals (and loses its anchor).",
        level2: "Predicts the plant does poorly but the root-function link is weak.",
        level1: "Wrong prediction or no reasoning about roots."
      },
      exemplar: "The plant would wilt and probably die. Without roots it can't absorb water and minerals from the soil, so the leaves dry out, and it also loses the anchor that held it steady.",
      hintLadder: [
        "What two jobs do roots do?",
        "If roots are gone, what can't the plant get from the soil?",
        "No water means the plant wilts."
      ]
    },
    {
      id: "g6.spring.sci.w2.d2.q5",
      type: "short_answer",
      stem: "Explain how the leaves and roots WORK TOGETHER to keep a plant alive.",
      rubric: {
        level3: "Explains roots supply water (and minerals) that leaves need for photosynthesis, and describes the cooperation clearly.",
        level2: "Mentions both parts' jobs but the teamwork connection is vague.",
        level1: "Describes only one part or shows no connection."
      },
      exemplar: "Roots absorb water from the soil and send it up the stem to the leaves. The leaves use that water, plus sunlight and CO2, to make food by photosynthesis. Without the roots' water, the leaves couldn't make food.",
      hintLadder: [
        "What do roots collect that the leaves need?",
        "How does the water get from roots to leaves?",
        "Link the water supply to photosynthesis in the leaves."
      ]
    }
  ],
  reflectionPrompt: "Pick a plant you can see. Which part do you think is working hardest right now, and why?",
  misconceptionBank: [
    {
      id: "flower-is-decoration",
      label: "Thinks a flower is just for looks",
      description: "Misses that the flower's real job is reproduction — making seeds.",
      coachMove: "Point out that the bright petals and scent are ADVERTISING to attract pollinators so the flower can make seeds."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Guess the Plant Part",
      prompt:
        "I hide underground and drink for the whole plant. I hold it steady when the wind blows, and I pass what I find up a tall pipe. What plant part am I?",
      answer:
        "The ROOTS! They anchor the plant and absorb water and minerals, then pass them up the stem.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Plant-Part Job Chart",
      challenge:
        "Create a labeled plant with all four parts — roots, stem, leaves, flower — and next to each, write a short 'job description' of what that part does for the plant.",
      materials: ["Paper & markers, OR a real plant to observe, OR a drawing app"],
      steps: [
        "Draw or find a plant showing roots, stem, leaves, and a flower.",
        "Label all four parts clearly.",
        "Write a one-line 'job description' for each part.",
        "Add one arrow showing water moving from roots up to the leaves."
      ],
      deliverable: "A labeled plant diagram with a job description for each of the four parts.",
      choiceBoard: [
        "Draw and label the plant with job descriptions.",
        "Make 'job posting' cards (one per part) as if the plant were hiring workers.",
        "Observe a real plant and write field notes describing each part you can see."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plant Parts Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w2.d2.arena1",
          type: "multiple_choice",
          stem: "A celery stalk placed in colored water turns the water-carrying tubes colored. Which plant PART is the celery stalk acting as, and what is it doing?",
          choices: [
            "A root — absorbing minerals",
            "A leaf — making food",
            "A stem — transporting water upward",
            "A flower — making seeds"
          ],
          answerIndex: 2,
          explanation: "The celery stalk is a stem; the colored water shows the stem's tubes carrying water upward.",
          hintLadder: [
            "The stalk connects the base to the leaves.",
            "The color travels UP through it.",
            "That upward water transport is the stem's job."
          ]
        },
        {
          id: "g6.spring.sci.w2.d2.arena2",
          type: "short_answer",
          stem: "A plant has healthy roots, a strong stem, and a bright flower, but all its leaves were eaten by insects. Predict what happens over time and explain why, using the leaf's job.",
          rubric: {
            level3: "Predicts the plant weakens/starves AND explains that without leaves it cannot do photosynthesis to make food, even with the other parts intact.",
            level2: "Predicts trouble but the leaf-function link is weak.",
            level1: "Wrong prediction or no reasoning about leaves."
          },
          exemplar: "The plant would slowly starve. The leaves are the food factories, so without them the plant can't do photosynthesis to make sugar. Roots can still drink and the stem can still hold it up, but with no food-making the plant weakens and may die.",
          hintLadder: [
            "What job do leaves do that no other part does?",
            "Without leaves, can the plant make food?",
            "No food-making leads to starving."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Root, Stem, Leaf, Flower",
      prompt:
        "Act out a plant growing: stomp your feet as ROOTS gripping the ground, stand tall as the STEM, spread your arms as LEAVES, then open your hands above your head as the FLOWER blooming. Do the whole sequence 3 times, a little slower each round.",
      scienceTieIn: "Just like your body has organs with different jobs, a plant has parts with different jobs — and it needs every one of them working together.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you were one part of a plant for a day, which part would you be — roots, stem, leaf, or flower — and what important job would you do?",
      badge: { id: "spring-plant-anatomist", name: "Plant Anatomist", emoji: "🌿" },
      estimatedMinutes: 7
    }
  }
};
