// Grade 5 Science — Spring Expedition, Week 2 (Plants & Growth), Day 1.
// Topic: photosynthesis — how plants make food from sunlight, water, and air.
// Grade 5 counterpart of g6.spring.sci.w2.d1: same topic, simpler vocabulary,
// shorter passages, and more scaffolding for ages 10–11.

export const springG5ScienceW2D1 = {
  id: "g5.spring.sci.w2.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Photosynthesis — how plants make food",
  topicTag: "photosynthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS1-1", "NGSS.5-PS3-1"],
  hook: "The spring sun is back, and green leaves get to work like tiny kitchens. Today you find out how a plant uses sunlight, water, and air to make its own food.",
  miniLesson: [
    "Photosynthesis is a big word for how plants make their own food (a kind of sugar). Say it: photo-SIN-thuh-sis. 'Photo' means light.",
    "A plant needs three things to do it: SUNLIGHT for energy, WATER from its roots, and a gas from the air called carbon dioxide (CO2). This happens in the green leaves.",
    "The green color in leaves is called chlorophyll (KLOR-uh-fill). It catches the sunlight. The plant makes sugar to grow and lets out oxygen — the air we breathe."
  ],
  workedExample: {
    prompt: "Name what goes IN to photosynthesis and what comes OUT.",
    steps: [
      "The things that go IN are the plant's supplies: sunlight, water, and carbon dioxide (CO2).",
      "The green chlorophyll in the leaf catches the sunlight.",
      "The things that come OUT are what the plant makes: sugar (food) and oxygen.",
      "You can write it as: sunlight + water + CO2 → sugar + oxygen."
    ],
    answer: "IN: sunlight, water, carbon dioxide. OUT: sugar (food) and oxygen."
  },
  items: [
    {
      id: "g5.spring.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "Which THREE things does a plant use to make food by photosynthesis?",
      choices: [
        "Soil, wind, and moonlight",
        "Sunlight, oxygen, and rocks",
        "Oxygen, sugar, and salt",
        "Sunlight, water, and carbon dioxide"
      ],
      answerIndex: 3,
      explanation: "Photosynthesis uses sunlight for energy, water from the roots, and carbon dioxide from the air.",
      hintLadder: [
        "One thing comes from the sky and gives energy.",
        "Roots pull one thing up from the soil.",
        "Leaves take in a gas from the air called CO2."
      ]
    },
    {
      id: "g5.spring.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "What gas does a plant let OUT when it makes food?",
      choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Smoke"],
      answerIndex: 0,
      explanation: "Plants take in carbon dioxide and give out oxygen — the gas that animals and people breathe.",
      hintLadder: [
        "It's the gas YOU need to breathe.",
        "Plants take in CO2 and give out the other gas.",
        "The answer is oxygen."
      ],
      misconceptionsTargeted: ["plants-breathe-like-animals"]
    },
    {
      id: "g5.spring.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "Where does most photosynthesis happen, and what catches the sunlight?",
      choices: [
        "In the roots, using water",
        "In the flowers, using pollen",
        "In the green leaves, using chlorophyll",
        "In the stem, using sugar"
      ],
      answerIndex: 2,
      explanation: "The green leaves hold chlorophyll, the green stuff that catches sunlight energy.",
      hintLadder: [
        "Think of the flat, green part that faces the sun.",
        "The green color comes from a special green pigment.",
        "Leaves use chlorophyll to catch the light."
      ]
    },
    {
      id: "g5.spring.sci.w2.d1.q4",
      type: "short_answer",
      stem: "A plant is kept in a dark closet but still gets water every day. What do you think will happen to it, and why? Use the word photosynthesis.",
      rubric: {
        level3: "Predicts the plant gets weak/turns yellow/dies AND explains that without sunlight it cannot do photosynthesis to make food, even with water.",
        level2: "Predicts the plant does badly but the missing-sunlight idea is unclear.",
        level1: "Wrong prediction or no photosynthesis reasoning."
      },
      exemplar: "The plant would turn pale and slowly die. Water is not enough. Without sunlight it can't do photosynthesis to make its sugar food, so it starves even though it has water.",
      hintLadder: [
        "Which of the three things is missing in the dark?",
        "Can the plant make sugar with no sunlight?",
        "No food-making means the plant slowly starves."
      ]
    },
    {
      id: "g5.spring.sci.w2.d1.q5",
      type: "short_answer",
      stem: "In your own words, tell why photosynthesis is important for animals and people, not just for plants.",
      rubric: {
        level3: "Names BOTH ways it helps: plants make food/sugar that animals eat AND plants give off the oxygen we breathe.",
        level2: "Names one way it helps (food OR oxygen) clearly.",
        level1: "No clear link to animals or people."
      },
      exemplar: "Photosynthesis makes the sugar food that plants grow with, and animals eat plants for energy. It also gives off the oxygen that animals and people need to breathe.",
      hintLadder: [
        "What do many animals eat to get energy?",
        "What gas do plants give off that we need?",
        "Connect both food and oxygen to animals and people."
      ]
    }
  ],
  reflectionPrompt: "Find a plant near you. Which part is catching sunlight right now, and what is it building with that energy?",
  misconceptionBank: [
    {
      id: "plants-breathe-like-animals",
      label: "Thinks plants only take in oxygen like animals",
      description: "Misses that in photosynthesis plants take in CO2 and give out oxygen.",
      coachMove: "Compare the two: animals breathe IN oxygen and OUT CO2. In photosynthesis a plant does the opposite — CO2 in, oxygen out."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "What Is a Tree Made Of?",
      prompt:
        "A big tree weighs a LOT. Most of that wood is made of a material called carbon. Where do you think all that carbon came from — the soil, the water, or somewhere surprising?",
      answer:
        "Mostly from the AIR! Plants pull carbon dioxide gas out of the air during photosynthesis and use the carbon to build wood. A tree is mostly 'made of air' plus sunlight energy.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Draw a Leaf Food Factory",
      challenge:
        "Draw a big leaf as a 'food factory.' Show arrows for the three things going IN (sunlight, water, CO2) and the two things coming OUT (sugar, oxygen). Color the green chlorophyll that catches the light.",
      materials: ["Paper & colored markers, OR a drawing app"],
      steps: [
        "Draw one large leaf in the middle of your page.",
        "Draw arrows going IN for sunlight, water (from the roots), and CO2 (from the air).",
        "Draw arrows coming OUT for sugar (food) and oxygen.",
        "Color the green chlorophyll and write 'sunlight + water + CO2 → sugar + oxygen' underneath."
      ],
      deliverable: "A labeled leaf drawing that shows what goes in, what comes out, and the green chlorophyll.",
      choiceBoard: [
        "Draw the labeled leaf-factory with arrows.",
        "Build the leaf factory as a collage from colored paper cutouts.",
        "Write a short 'a day as a leaf' story told by a leaf making food."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Photosynthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "A healthy plant sits in a sealed clear jar with plenty of light and water. During the day, what happens to the oxygen inside the jar?",
          choices: [
            "Oxygen goes DOWN because the plant uses it up",
            "Oxygen goes UP because the plant gives off oxygen when it makes food",
            "Oxygen stays exactly the same",
            "The jar fills only with smoke"
          ],
          answerIndex: 1,
          explanation: "With light and water the plant does photosynthesis, taking in CO2 and giving off oxygen, so oxygen rises.",
          hintLadder: [
            "In the light, is the plant making food?",
            "What gas does a plant give off when it makes food?",
            "That oxygen builds up in the sealed jar."
          ]
        },
        {
          id: "g5.spring.sci.w2.d1.arena2",
          type: "short_answer",
          stem: "Two plants get the same water. One sits in a sunny window, the other in a dark cabinet. After two weeks, which one is healthier and why? Use the word photosynthesis.",
          rubric: {
            level3: "Names the sunny-window plant AND explains it can do photosynthesis to make food, while the dark plant cannot and gets weak.",
            level2: "Picks the sunny plant but the photosynthesis reason is thin.",
            level1: "Wrong choice or no reason."
          },
          exemplar: "The sunny-window plant is healthier. It has sunlight, water, and CO2, so it can do photosynthesis and make sugar to grow. The dark-cabinet plant has water but no sunlight, so it can't make food and turns weak and yellow.",
          hintLadder: [
            "Which plant has all three things it needs?",
            "Water alone is not enough — what else is needed?",
            "The one with light can make food; the other can't."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow Toward the Sun",
      prompt:
        "Crouch down small like a seed. Slowly stand up and reach your arms wide like leaves stretching to the sun. Breathe IN (like a leaf taking in CO2), then breathe OUT (giving off oxygen). Do it 4 times.",
      scienceTieIn: "When you breathe out CO2, a real plant nearby could take it in for photosynthesis — you and plants trade gases all the time.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Every bite of food traces back to a plant catching sunlight. Name one thing you ate today and tell how photosynthesis helped make it.",
      badge: { id: "g5-spring-sunlight-chef", name: "Sunlight Chef", emoji: "🌞" },
      estimatedMinutes: 7
    }
  }
};
