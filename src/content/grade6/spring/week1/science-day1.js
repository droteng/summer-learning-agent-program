// Grade 6 Science — Spring Expedition, Week 1 (Spring Awakening), Day 1.
// Topic: what living things need to grow — the signs of spring and the needs
// of plants and animals as the world wakes up.

export const springG6ScienceW1D1 = {
  id: "g6.spring.sci.w1.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Science",
  topic: "What living things need to grow",
  topicTag: "needs-of-living-things",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-5", "NGSS.MS-LS1-6"],
  hook: "Warmer days, longer light, and the first green shoots — spring is a signal to living things that it's time to grow. Today you figure out exactly what a seed or a newborn animal needs to turn that signal into new life.",
  miniLesson: [
    "Plants need sunlight, water, air (carbon dioxide), and nutrients from soil to grow. In spring, longer days and warmer soil trigger seeds to sprout.",
    "Animals need food, water, oxygen, and shelter. Warmer spring temperatures wake hibernators and bring back food sources like insects and new plants.",
    "A 'sign of spring' is any observable change — buds opening, birds returning, ice melting — that shows living things are responding to more light and warmth."
  ],
  workedExample: {
    prompt: "A seed is planted in rich soil in a dark, sealed jar with no air. Will it grow into a healthy plant? Explain which needs are missing.",
    steps: [
      "List what a growing plant needs: sunlight, water, air (carbon dioxide), and soil nutrients.",
      "Check the jar: it has soil nutrients, but it is dark (no sunlight) and sealed (no fresh air).",
      "A seed can sprout briefly on stored energy, but without light it can't make food, and without air it can't carry out its life processes.",
      "So the seedling would be pale, weak, and soon die — two key needs (light and air) are missing."
    ],
    answer: "No — it is missing sunlight and fresh air, so it cannot grow into a healthy plant."
  },
  items: [
    {
      id: "g6.spring.sci.w1.d1.q1",
      type: "multiple_choice",
      stem: "Which set lists things a green plant needs to GROW?",
      choices: [
        "Sunlight, water, air, and soil nutrients",
        "Meat, water, and darkness",
        "Only water",
        "Sunlight and nothing else"
      ],
      answerIndex: 0,
      explanation: "Plants make their own food using sunlight, water, and air (carbon dioxide), and they take nutrients from soil.",
      hintLadder: [
        "Think about what you'd give a houseplant to keep it alive.",
        "A plant makes its own food using light — but it needs more than just light.",
        "Sunlight + water + air + soil nutrients."
      ]
    },
    {
      id: "g6.spring.sci.w1.d1.q2",
      type: "multiple_choice",
      stem: "In early spring, why do many seeds begin to sprout?",
      choices: [
        "The days get shorter and colder",
        "Longer daylight and warmer soil signal that it's a good time to grow",
        "Animals plant them on purpose every year",
        "Seeds grow best in frozen ground"
      ],
      answerIndex: 1,
      explanation: "More daylight and warmer soil in spring are the conditions seeds need to sprout and grow successfully.",
      hintLadder: [
        "Compare winter and spring — what changes about light and temperature?",
        "Warmth and light are increasing in spring.",
        "Longer days + warmer soil trigger sprouting."
      ],
      misconceptionsTargeted: ["plants-eat-soil"]
    },
    {
      id: "g6.spring.sci.w1.d1.q3",
      type: "multiple_choice",
      stem: "A bear wakes from hibernation in spring. Which need is now much EASIER to meet than in deep winter?",
      choices: [
        "Oxygen to breathe",
        "Finding food, as plants and insects become available again",
        "Gravity",
        "Sunlight to make its own food"
      ],
      answerIndex: 1,
      explanation: "Spring brings back food sources — new plants and insects — so finding food becomes much easier. (Bears are animals and cannot make their own food.)",
      hintLadder: [
        "What is scarce for a bear in deep winter?",
        "Think about what returns to the landscape in spring.",
        "New plants and insects mean more FOOD."
      ]
    },
    {
      id: "g6.spring.sci.w1.d1.q4",
      type: "numeric",
      stem: "A class plants 5 identical bean seeds in each of 4 cups to test growth conditions. How many bean seeds did they plant in total?",
      answer: 20,
      tolerance: 0,
      unit: "seeds",
      hintLadder: [
        "Each cup gets the same number of seeds.",
        "Multiply seeds per cup by the number of cups.",
        "5 seeds × 4 cups = 20 seeds."
      ],
      explanation: "5 seeds per cup × 4 cups = 20 seeds total."
    },
    {
      id: "g6.spring.sci.w1.d1.q5",
      type: "short_answer",
      stem: "Two spring seedlings are treated the same EXCEPT one sits in a sunny window and one sits in a dark closet. Predict what happens to each and explain why.",
      rubric: {
        level3: "Predicts the sunny seedling grows healthy/green and the dark one grows weak, pale, or dies, AND explains it needs light to make food.",
        level2: "Predicts a difference between the two but the reasoning about light/food is thin or missing.",
        level1: "No clear prediction or the light is not connected to growth."
      },
      exemplar: "The seedling in the sunny window will grow strong and green because it has light to make its food. The one in the dark closet will turn pale and weak and may die, because without light it can't make food to keep growing.",
      hintLadder: [
        "What is the ONE thing that is different between the two seedlings?",
        "Plants use light to make their own food.",
        "No light means the plant can't make food — say what that does to it."
      ]
    }
  ],
  reflectionPrompt: "Look outside or picture your neighborhood. What is ONE sign of spring you can spot, and which living thing is it telling you is starting to grow?",
  misconceptionBank: [
    {
      id: "plants-eat-soil",
      label: "Thinks plants 'eat' soil for food",
      description: "Believes plants get their food by absorbing soil, rather than making food from sunlight, water, and air.",
      coachMove: "Point out that a plant in a pot doesn't shrink the soil much over months — the plant's mass comes mostly from air and water combined using sunlight, not from eating dirt."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "What Woke Up First?",
      prompt:
        "It's a warm spring morning. A crocus pokes through melting snow, a robin sings, and a chipmunk scurries out of its burrow. All three were 'asleep' or hidden all winter. What ONE thing changed in their world that told all of them it was time to wake up and grow?",
      answer:
        "More light and warmth! Longer, sunnier days and rising temperatures are the shared spring signal — the plant senses light and warm soil, and the animals sense the warmth and returning food.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Perfect Seed Home",
      challenge:
        "Design a container (a 'seed home') that gives a bean seed everything it needs to sprout in spring. Show how it delivers all four needs: light, water, air, and soil nutrients.",
      materials: ["Paper & markers, OR a drawing app", "Optional: a real cup, seed, and soil"],
      steps: [
        "List the four things your seed needs to grow.",
        "Sketch your seed home and label where each need is met (a window for light, a way to water, air holes, good soil).",
        "Add one feature that protects the seedling from a late spring frost.",
        "Write one sentence predicting how tall your sprout will be after two weeks."
      ],
      deliverable: "A labeled seed-home design showing how all four plant needs are met.",
      choiceBoard: [
        "Draw and label the seed-home design.",
        "Actually plant a seed in a cup and photograph your setup with labels.",
        "Write a short 'instruction guide' telling someone how to build your seed home."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Spring Awakening Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w1.d1.arena1",
          type: "multiple_choice",
          stem: "A gardener says, 'My plant grew bigger, so it must have eaten a lot of soil.' What's the best correction?",
          choices: [
            "The gardener is right — plants eat soil",
            "Most of a plant's added mass comes from air and water combined using sunlight, not from eating soil",
            "Plants grow only from the nutrients they eat as seeds",
            "Plants don't actually gain mass"
          ],
          answerIndex: 1,
          explanation: "Plants make their own food from carbon dioxide (air) and water using light energy; soil supplies some nutrients but is not 'eaten' as food.",
          hintLadder: [
            "Does the soil level in a pot drop a lot as a plant grows big?",
            "Where does the extra mass really come from?",
            "Air + water + sunlight build most of the plant."
          ]
        },
        {
          id: "g6.spring.sci.w1.d1.arena2",
          type: "short_answer",
          stem: "A rabbit and an oak tree both grow in spring, but they get their food in different ways. Explain the key difference in how each meets its need for food.",
          rubric: {
            level3: "States that the oak (a plant) makes its own food using sunlight, water, and air, while the rabbit (an animal) must eat other living things, AND names this as the key difference.",
            level2: "Notes one side correctly (e.g., the tree uses sunlight) but is vague or incomplete about the other.",
            level1: "Confuses the two or gives no clear difference."
          },
          exemplar: "The oak tree makes its own food from sunlight, water, and air. The rabbit can't make food, so it has to eat plants like fresh spring grass to get energy. Plants produce food; animals must consume it.",
          hintLadder: [
            "Which one can make food from sunlight?",
            "Which one has to eat other living things?",
            "State the difference: producer vs. consumer."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Seed-to-Sprout Stretch",
      prompt:
        "Curl up small and tight like a seed underground. Slowly 'sprout' — push your arms up like a stem reaching for the sun, then spread your fingers wide like new leaves. Sway gently in an imaginary spring breeze. Repeat the grow-from-seed sequence 4 times, breathing deeply.",
      scienceTieIn: "Just like a sprout reaches toward light, deep breathing brings more oxygen to your brain and muscles, helping you feel awake and ready.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you were a living thing waking up this spring, what would you need most to grow — and where would you get it? Write two or three sentences.",
      badge: { id: "spring-seedling-scout", name: "Seedling Scout", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
