// Grade 5 Science — Spring Expedition, Week 2 (Plants & Growth), Day 2.
// Topic: parts of a plant (roots, stem, leaves, flower) and their jobs.
// Grade 5 counterpart of g6.spring.sci.w2.d2: same topic, simpler vocabulary,
// shorter passages, and more scaffolding for ages 10–11.

export const springG5ScienceW2D2 = {
  id: "g5.spring.sci.w2.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Parts of a plant and their functions",
  topicTag: "plant-parts",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS1-1", "NGSS.5-LS2-1"],
  hook: "A spring plant is a team. Roots drink, the stem lifts, leaves cook, and flowers make new seeds. Today you learn who does what — and why the plant needs every part.",
  miniLesson: [
    "ROOTS grow underground. They hold the plant in place and soak up water and minerals from the soil.",
    "The STEM holds the plant up. It works like a straw, carrying water up to the leaves and food down to the rest of the plant. LEAVES are the food factories where photosynthesis happens.",
    "FLOWERS make seeds so new plants can grow. Bees and butterflies (pollinators) help flowers do this job."
  ],
  workedExample: {
    prompt: "Match each part to its main job: roots, stem, leaves, flower.",
    steps: [
      "Roots: soak up water and minerals and hold the plant in place.",
      "Stem: holds the plant up and moves water and food around.",
      "Leaves: make food by photosynthesis.",
      "Flower: makes seeds for new plants."
    ],
    answer: "Roots = drink/hold; Stem = hold up/move water; Leaves = make food; Flower = make seeds."
  },
  items: [
    {
      id: "g5.spring.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "Which plant part soaks up water and minerals from the soil?",
      choices: ["Leaves", "Flower", "Roots", "Stem"],
      answerIndex: 2,
      explanation: "Roots hold the plant in place and soak up water and minerals from the soil.",
      hintLadder: [
        "Think about the part that grows underground.",
        "It has to reach the water in the soil.",
        "Roots do the drinking and the holding."
      ]
    },
    {
      id: "g5.spring.sci.w2.d2.q2",
      type: "multiple_choice",
      stem: "What is the MAIN job of a flower?",
      choices: [
        "To make food by photosynthesis",
        "To make seeds so new plants can grow",
        "To soak up water from the soil",
        "To hold the plant up"
      ],
      answerIndex: 1,
      explanation: "A flower's main job is to make seeds, often with help from pollinators like bees.",
      hintLadder: [
        "Which part do bees and butterflies visit?",
        "Pollinators help this part do its job.",
        "Flowers make seeds — that's how new plants start."
      ],
      misconceptionsTargeted: ["flower-is-decoration"]
    },
    {
      id: "g5.spring.sci.w2.d2.q3",
      type: "multiple_choice",
      stem: "The stem works like a straw. What does it move?",
      choices: [
        "Only sunlight",
        "Water up from the roots and food around the plant",
        "Only air down to the roots",
        "Nothing — it just holds the plant up"
      ],
      answerIndex: 1,
      explanation: "The stem holds the plant up AND moves water up from the roots and food from the leaves to the rest of the plant.",
      hintLadder: [
        "The stem connects the roots to the leaves.",
        "It carries water one way and food the other way.",
        "Water goes up; food travels out to where it's needed."
      ]
    },
    {
      id: "g5.spring.sci.w2.d2.q4",
      type: "short_answer",
      stem: "A gardener cuts off most of a young plant's roots by accident. What will happen to the plant, and why? Think about what roots do.",
      rubric: {
        level3: "Predicts the plant wilts/dies AND explains that without roots it can't soak up water/minerals (and loses its hold in the soil).",
        level2: "Predicts the plant does badly but the root-job link is weak.",
        level1: "Wrong prediction or no reasoning about roots."
      },
      exemplar: "The plant would wilt and probably die. Without roots it can't soak up water and minerals from the soil, so the leaves dry out, and it also loses the anchor that held it in place.",
      hintLadder: [
        "What two jobs do roots do?",
        "With no roots, what can't the plant get from the soil?",
        "No water means the plant wilts."
      ]
    },
    {
      id: "g5.spring.sci.w2.d2.q5",
      type: "short_answer",
      stem: "Explain how the leaves and roots WORK TOGETHER to keep a plant alive.",
      rubric: {
        level3: "Explains roots soak up water (and minerals) that leaves need for photosynthesis, and shows the teamwork clearly.",
        level2: "Names both parts' jobs but the teamwork link is vague.",
        level1: "Describes only one part or shows no connection."
      },
      exemplar: "The roots soak up water from the soil and send it up the stem to the leaves. The leaves use that water, plus sunlight and CO2, to make food by photosynthesis. Without the roots' water, the leaves couldn't make food.",
      hintLadder: [
        "What do roots collect that the leaves need?",
        "How does the water get from the roots to the leaves?",
        "Link the water to photosynthesis in the leaves."
      ]
    }
  ],
  reflectionPrompt: "Pick a plant you can see. Which part do you think is working hardest right now, and why?",
  misconceptionBank: [
    {
      id: "flower-is-decoration",
      label: "Thinks a flower is just for looks",
      description: "Misses that a flower's real job is to make seeds.",
      coachMove: "Point out that the bright petals and smell are like an advertisement to bring in pollinators so the flower can make seeds."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Guess the Plant Part",
      prompt:
        "I hide underground and drink for the whole plant. I hold it steady when the wind blows, and I pass what I find up a tall straw. What plant part am I?",
      answer:
        "The ROOTS! They hold the plant in place, soak up water and minerals, and pass them up the stem.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Make a Plant-Part Job Chart",
      challenge:
        "Draw a plant with all four parts — roots, stem, leaves, flower — and next to each part write a short 'job description' of what it does for the plant.",
      materials: ["Paper & markers, OR a real plant to look at, OR a drawing app"],
      steps: [
        "Draw (or find) a plant showing roots, stem, leaves, and a flower.",
        "Label all four parts clearly.",
        "Write one line for each part telling its job.",
        "Add one arrow showing water moving from the roots up to the leaves."
      ],
      deliverable: "A labeled plant drawing with a one-line job for each of the four parts.",
      choiceBoard: [
        "Draw and label the plant with job descriptions.",
        "Make 'help wanted' cards (one per part) as if the plant were hiring workers.",
        "Look at a real plant and write field notes about each part you can see."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plant Parts Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w2.d2.arena1",
          type: "multiple_choice",
          stem: "You put a celery stalk in cup of colored water. A few hours later the tubes inside it are colored. Which plant part is the celery acting as, and what is it doing?",
          choices: [
            "A root — soaking up minerals",
            "A leaf — making food",
            "A stem — moving water upward",
            "A flower — making seeds"
          ],
          answerIndex: 2,
          explanation: "The celery stalk is a stem, and the colored water shows the stem carrying water upward.",
          hintLadder: [
            "The stalk connects the bottom to the leaves.",
            "The color moves UP through it.",
            "Moving water up is the stem's job."
          ]
        },
        {
          id: "g5.spring.sci.w2.d2.arena2",
          type: "short_answer",
          stem: "A plant has healthy roots, a strong stem, and a bright flower, but bugs ate ALL of its leaves. What will happen over time, and why? Think about the leaf's job.",
          rubric: {
            level3: "Predicts the plant gets weak/starves AND explains that with no leaves it can't do photosynthesis to make food, even with the other parts.",
            level2: "Predicts trouble but the leaf-job link is weak.",
            level1: "Wrong prediction or no reasoning about leaves."
          },
          exemplar: "The plant would slowly starve. The leaves are the food factories, so with no leaves the plant can't do photosynthesis to make sugar. The roots can still drink and the stem can still hold it up, but with no food the plant gets weak and may die.",
          hintLadder: [
            "What job do leaves do that no other part does?",
            "With no leaves, can the plant make food?",
            "No food-making leads to starving."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Root, Stem, Leaf, Flower",
      prompt:
        "Act out a plant growing: stomp your feet as ROOTS gripping the ground, stand tall as the STEM, spread your arms as LEAVES, then open your hands above your head as the FLOWER blooming. Do the whole thing 3 times, a little slower each round.",
      scienceTieIn: "Just like your body has parts with different jobs, a plant has parts with different jobs — and it needs every one of them working together.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could be one part of a plant for a day — roots, stem, leaf, or flower — which would you pick, and what important job would you do?",
      badge: { id: "g5-spring-plant-parts-pro", name: "Plant Parts Pro", emoji: "🌿" },
      estimatedMinutes: 7
    }
  }
};
