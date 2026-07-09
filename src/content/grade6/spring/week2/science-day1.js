// Grade 6 Science — Spring Expedition, Week 2 (Plants & Growth), Day 1.
// Topic: photosynthesis — how plants make food from sunlight, water, and CO2.

export const springG6ScienceW2D1 = {
  id: "g6.spring.sci.w2.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Photosynthesis — how plants make food",
  topicTag: "photosynthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-6", "NGSS.MS-LS1-5"],
  hook: "As spring sun returns, leaves fire up a tiny food factory. Today you learn how a plant turns sunlight, water, and air into the sugar that grows every stem, root, and flower.",
  miniLesson: [
    "Photosynthesis is how plants make their own food (sugar). The ingredients are sunlight, water (from the roots), and carbon dioxide (CO2) from the air.",
    "It happens in the leaves, inside green parts called chloroplasts. The green pigment chlorophyll captures the sunlight's energy.",
    "The plant makes sugar (glucose) to grow and releases oxygen as a by-product — the same oxygen you breathe."
  ],
  workedExample: {
    prompt: "List what goes IN to photosynthesis and what comes OUT.",
    steps: [
      "Inputs are the raw materials: sunlight (energy), water, and carbon dioxide.",
      "The leaf's chlorophyll captures the sunlight energy.",
      "Outputs are what the plant makes: sugar (food) and oxygen.",
      "So: sunlight + water + CO2 → sugar + oxygen."
    ],
    answer: "In: sunlight, water, carbon dioxide. Out: sugar (glucose) and oxygen."
  },
  items: [
    {
      id: "g6.spring.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "Which THREE ingredients does a plant use for photosynthesis?",
      choices: [
        "Sunlight, water, and carbon dioxide",
        "Soil, wind, and moonlight",
        "Oxygen, sugar, and salt",
        "Sunlight, oxygen, and rocks"
      ],
      answerIndex: 0,
      explanation: "Photosynthesis combines sunlight (energy), water from the roots, and carbon dioxide from the air.",
      hintLadder: [
        "One ingredient is the energy source in the sky.",
        "Roots pull one ingredient up from the soil.",
        "Leaves take one gas out of the air — CO2."
      ]
    },
    {
      id: "g6.spring.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "What gas do plants RELEASE as a by-product of photosynthesis?",
      choices: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
      answerIndex: 2,
      explanation: "Plants take in carbon dioxide and give off oxygen — the oxygen animals breathe.",
      hintLadder: [
        "It's the gas YOU need to breathe.",
        "Plants take in CO2 and give out the opposite gas.",
        "The by-product is oxygen."
      ],
      misconceptionsTargeted: ["plants-breathe-like-animals"]
    },
    {
      id: "g6.spring.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "Where in the plant does most photosynthesis happen, and what captures the sunlight?",
      choices: [
        "In the roots, using water",
        "In the leaves, using chlorophyll",
        "In the flowers, using pollen",
        "In the stem, using sugar"
      ],
      answerIndex: 1,
      explanation: "Leaves hold chloroplasts full of chlorophyll, the green pigment that captures sunlight energy.",
      hintLadder: [
        "Think about the flat, green, sun-catching part of a plant.",
        "The green color comes from a special pigment.",
        "Leaves use chlorophyll to catch the light."
      ]
    },
    {
      id: "g6.spring.sci.w2.d1.q4",
      type: "short_answer",
      stem: "A plant is kept in a totally dark closet but is still watered every day. Predict what happens to it and explain why, using photosynthesis.",
      rubric: {
        level3: "Predicts the plant weakens/yellows/dies AND explains that without sunlight it cannot do photosynthesis to make food, even with water.",
        level2: "Predicts the plant does poorly but explanation of the missing sunlight/food link is weak.",
        level1: "Wrong prediction or no photosynthesis reasoning."
      },
      exemplar: "The plant would turn pale and slowly die. Water alone isn't enough — without sunlight it can't do photosynthesis to make sugar, so it starves for food even though it has water.",
      hintLadder: [
        "Which photosynthesis ingredient is missing in the dark?",
        "Can the plant make sugar without sunlight?",
        "No food-making means the plant slowly starves."
      ]
    },
    {
      id: "g6.spring.sci.w2.d1.q5",
      type: "short_answer",
      stem: "In your own words, explain why photosynthesis matters to animals and people, not just to plants.",
      rubric: {
        level3: "Names BOTH benefits: plants make food/sugar that feeds animals AND release the oxygen animals breathe.",
        level2: "Names one benefit (food OR oxygen) clearly.",
        level1: "No clear connection to animals or people."
      },
      exemplar: "Photosynthesis makes the sugar that feeds plants, and animals eat those plants for energy. It also releases the oxygen that animals and people need to breathe.",
      hintLadder: [
        "What do animals eat at the base of most food chains?",
        "What gas do plants give off that we need?",
        "Connect both food and oxygen to animals."
      ]
    }
  ],
  reflectionPrompt: "Look at a plant near you. Which part is catching sunlight right now, and what is it building with that energy?",
  misconceptionBank: [
    {
      id: "plants-breathe-like-animals",
      label: "Thinks plants only take in oxygen like animals",
      description: "Misses that during photosynthesis plants take in CO2 and release oxygen.",
      coachMove: "Contrast the two: animals breathe IN oxygen and OUT CO2; photosynthesis does the reverse — CO2 in, oxygen out."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Weight of a Tree",
      prompt:
        "A giant oak weighs tons. Most of that solid wood is made of carbon. Where did all that carbon come from — the soil, the water, or somewhere surprising?",
      answer:
        "Mostly from the AIR! Plants pull carbon dioxide gas out of the air during photosynthesis and use the carbon to build wood. A tree is largely 'made of air' plus sunlight energy.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Diagram a Leaf Food Factory",
      challenge:
        "Draw a big leaf as a 'food factory.' Show arrows for the three ingredients coming IN (sunlight, water, CO2) and the two products going OUT (sugar, oxygen). Label the chlorophyll that captures the light.",
      materials: ["Paper & colored markers, OR a drawing app"],
      steps: [
        "Draw a large leaf in the center of your page.",
        "Draw arrows IN for sunlight, water (from roots), and CO2 (from air).",
        "Draw arrows OUT for sugar (food) and oxygen.",
        "Label the green chlorophyll and write the word equation underneath."
      ],
      deliverable: "A labeled leaf diagram showing photosynthesis inputs, outputs, and chlorophyll.",
      choiceBoard: [
        "Draw the labeled leaf-factory diagram with arrows.",
        "Build the leaf factory as a collage from colored paper cutouts.",
        "Write a short 'day in the life of a leaf' story narrated by the leaf making food."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Photosynthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "A scientist seals a healthy plant in a clear jar with plenty of light and water. Over the day, what happens to the oxygen level inside the jar?",
          choices: [
            "Oxygen goes DOWN because the plant uses it up",
            "The jar fills only with carbon dioxide",
            "Oxygen stays exactly the same",
            "Oxygen goes UP because the plant releases oxygen during photosynthesis"
          ],
          answerIndex: 3,
          explanation: "With light and water, the plant does photosynthesis, taking in CO2 and releasing oxygen, so oxygen rises.",
          hintLadder: [
            "In the light, is the plant doing photosynthesis?",
            "What gas does photosynthesis release?",
            "Released oxygen builds up in the sealed jar."
          ]
        },
        {
          id: "g6.spring.sci.w2.d1.arena2",
          type: "short_answer",
          stem: "Two identical plants are watered the same. One sits in a sunny window, the other in a dark cabinet. After two weeks, which is healthier and why? Use the word photosynthesis.",
          rubric: {
            level3: "Names the sunny-window plant AND explains it can do photosynthesis to make food, while the dark plant cannot and weakens.",
            level2: "Picks the sunny plant but the photosynthesis explanation is thin.",
            level1: "Wrong choice or no reasoning."
          },
          exemplar: "The sunny-window plant is healthier. It has all three ingredients, so it can do photosynthesis and make sugar to grow. The dark-cabinet plant has water but no light, so it can't make food and starts to weaken and yellow.",
          hintLadder: [
            "Which plant has all three photosynthesis ingredients?",
            "Water is not enough — what else is needed?",
            "The one with light can make food; the other can't."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow Toward the Sun",
      prompt:
        "Crouch down small like a seed. Slowly rise, reaching your arms up and wide like leaves stretching toward the sun. Take a deep breath IN (like a leaf taking CO2), then breathe OUT (releasing oxygen). Repeat 4 times.",
      scienceTieIn: "As you breathe out CO2, a real plant nearby could pull it in for photosynthesis — you and plants are trading gases all the time.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Every bite of food you eat traces back to a plant catching sunlight. Name one meal today and describe how photosynthesis helped make it possible.",
      badge: { id: "spring-sunlight-chef", name: "Sunlight Chef", emoji: "🌞" },
      estimatedMinutes: 7
    }
  }
};
