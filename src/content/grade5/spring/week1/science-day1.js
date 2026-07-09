// Grade 5 Science — Spring Expedition, Week 1 (Spring Awakening), Day 1.
// Grade 5 counterpart of g6.spring.sci.w1.d1. Same topic (what living things
// need to grow — the signs of spring and the needs of plants and animals)
// pitched down to Grade 5: shorter passages, more vocabulary support, and
// smaller, whole-number math.

export const springG5ScienceW1D1 = {
  id: "g5.spring.sci.w1.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Science",
  topic: "What living things need to grow",
  topicTag: "needs-of-living-things",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS1-1", "NGSS.5-LS2-1"],
  hook: "Warmer days, more sunlight, and the first green shoots — spring tells living things it is time to grow. Today you find out exactly what a seed or a baby animal needs to turn that signal into new life.",
  miniLesson: [
    "Plants need four things to grow: sunlight, water, air, and good soil. In spring, longer days and warmer soil wake seeds up and help them sprout.",
    "Animals need food, water, air, and shelter (a safe place). Warmer spring weather wakes up animals and brings back food like bugs and new plants.",
    "A 'sign of spring' is any change you can see — buds opening, birds coming back, ice melting — that shows living things are waking up as it gets warmer and lighter."
  ],
  workedExample: {
    prompt: "A seed is planted in good soil, but it sits in a dark, closed jar with no air. Will it grow into a healthy plant? Explain which needs are missing.",
    steps: [
      "List what a growing plant needs: sunlight, water, air, and good soil.",
      "Check the jar: it has soil, but it is dark (no sunlight) and closed up (no fresh air).",
      "A seed can start to sprout on its stored energy, but without light it cannot make food, and without air it cannot stay healthy.",
      "So the little plant would turn pale and weak and soon die — two needs (light and air) are missing."
    ],
    answer: "No — it is missing sunlight and fresh air, so it cannot grow into a healthy plant."
  },
  items: [
    {
      id: "g5.spring.sci.w1.d1.q1",
      type: "multiple_choice",
      stem: "Which list shows the things a green plant needs to GROW?",
      choices: [
        "Sunlight, water, air, and good soil",
        "Meat, water, and darkness",
        "Only water",
        "Sunlight and nothing else"
      ],
      answerIndex: 0,
      explanation: "Plants make their own food using sunlight, water, and air, and they take nutrients from good soil.",
      hintLadder: [
        "Think about what you give a houseplant to keep it alive.",
        "A plant makes its own food using light — but it needs more than just light.",
        "Sunlight + water + air + good soil."
      ]
    },
    {
      id: "g5.spring.sci.w1.d1.q2",
      type: "multiple_choice",
      stem: "In early spring, why do many seeds begin to sprout?",
      choices: [
        "The days get shorter and colder",
        "Longer days and warmer soil tell seeds it is a good time to grow",
        "Animals plant them on purpose every year",
        "Seeds grow best in frozen ground"
      ],
      answerIndex: 1,
      explanation: "More daylight and warmer soil in spring are just what seeds need to sprout and grow.",
      hintLadder: [
        "Compare winter and spring — what changes about light and warmth?",
        "Warmth and light go UP in spring.",
        "Longer days + warmer soil wake seeds up."
      ],
      misconceptionsTargeted: ["plants-eat-soil"]
    },
    {
      id: "g5.spring.sci.w1.d1.q3",
      type: "multiple_choice",
      stem: "A bear wakes up from its long winter sleep in spring. Which need is now MUCH easier to meet than in deep winter?",
      choices: [
        "Air to breathe",
        "Sunlight to make its own food",
        "Gravity",
        "Finding food, as plants and bugs come back"
      ],
      answerIndex: 3,
      explanation: "Spring brings back food — new plants and bugs — so finding food gets much easier. (Bears are animals, so they cannot make their own food.)",
      hintLadder: [
        "What is hard for a bear to find in deep winter?",
        "Think about what comes back to the land in spring.",
        "New plants and bugs mean more FOOD."
      ]
    },
    {
      id: "g5.spring.sci.w1.d1.q4",
      type: "numeric",
      stem: "A class plants 3 bean seeds in each of 4 cups to test how plants grow. How many bean seeds did they plant in all?",
      answer: 12,
      tolerance: 0,
      unit: "seeds",
      hintLadder: [
        "Each cup gets the same number of seeds.",
        "Multiply the seeds in one cup by the number of cups.",
        "3 seeds × 4 cups = 12 seeds."
      ],
      explanation: "3 seeds per cup × 4 cups = 12 seeds in all."
    },
    {
      id: "g5.spring.sci.w1.d1.q5",
      type: "short_answer",
      stem: "Two spring sprouts are treated the same EXCEPT one sits in a sunny window and one sits in a dark closet. Tell what happens to each one and why.",
      rubric: {
        level3: "Says the sunny sprout grows healthy/green and the dark one grows weak, pale, or dies, AND explains it needs light to make food.",
        level2: "Says there is a difference between the two, but the reason about light/food is thin or missing.",
        level1: "No clear prediction, or light is not connected to growth."
      },
      exemplar: "The sprout in the sunny window will grow strong and green because it has light to make its food. The one in the dark closet will turn pale and weak and may die, because without light it cannot make food to keep growing.",
      hintLadder: [
        "What is the ONE thing that is different between the two sprouts?",
        "Plants use light to make their own food.",
        "No light means the plant cannot make food — say what that does to it."
      ]
    }
  ],
  reflectionPrompt: "Look outside or picture your neighborhood. What is ONE sign of spring you can spot, and which living thing is it telling you is starting to grow?",
  misconceptionBank: [
    {
      id: "plants-eat-soil",
      label: "Thinks plants 'eat' soil for food",
      description: "Believes plants get their food by eating soil, instead of making food from sunlight, water, and air.",
      coachMove: "Point out that a plant in a pot does not shrink the soil much over months — most of the plant is built from air and water using sunlight, not from eating dirt."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "What Woke Up First?",
      prompt:
        "It is a warm spring morning. A little flower pokes through melting snow, a robin sings, and a chipmunk runs out of its burrow. All three were asleep or hidden all winter. What ONE thing changed in their world that told all of them it was time to wake up and grow?",
      answer:
        "More light and warmth! Longer, sunnier days and warmer weather are the shared spring signal — the flower senses the light and warm soil, and the animals sense the warmth and returning food.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Perfect Seed Home",
      challenge:
        "Design a container (a 'seed home') that gives a bean seed everything it needs to sprout in spring. Show how it gives all four needs: light, water, air, and good soil.",
      materials: ["Paper & markers, OR a drawing app", "Optional: a real cup, seed, and soil"],
      steps: [
        "List the four things your seed needs to grow.",
        "Draw your seed home and label where each need is met (a window for light, a way to water, air holes, good soil).",
        "Add one feature that protects the sprout from a cold spring frost.",
        "Write one sentence guessing how tall your sprout will be after two weeks."
      ],
      deliverable: "A labeled seed-home design showing how all four plant needs are met.",
      choiceBoard: [
        "Draw and label the seed-home design.",
        "Actually plant a seed in a cup and take a photo of your setup with labels.",
        "Write a short 'how-to guide' telling someone how to build your seed home."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Spring Awakening Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w1.d1.arena1",
          type: "multiple_choice",
          stem: "A gardener says, 'My plant got bigger, so it must have eaten a lot of soil.' What is the best correction?",
          choices: [
            "The gardener is right — plants eat soil",
            "Plants grow only from what they eat as seeds",
            "Most of a plant is built from air and water using sunlight, not from eating soil",
            "Plants do not really get bigger"
          ],
          answerIndex: 2,
          explanation: "Plants make their own food from air and water using light. Soil gives some nutrients, but the plant does not 'eat' it as food.",
          hintLadder: [
            "Does the soil in a pot drop a lot as a plant gets big?",
            "Where does the extra size really come from?",
            "Air + water + sunlight build most of the plant."
          ]
        },
        {
          id: "g5.spring.sci.w1.d1.arena2",
          type: "short_answer",
          stem: "A rabbit and an oak tree both grow in spring, but they get their food in different ways. Explain the main difference in how each one gets food.",
          rubric: {
            level3: "Says the oak tree (a plant) makes its own food from sunlight, water, and air, while the rabbit (an animal) must eat other living things, AND names this as the main difference.",
            level2: "Gets one side right (e.g., the tree uses sunlight) but is vague or incomplete about the other.",
            level1: "Mixes up the two or gives no clear difference."
          },
          exemplar: "The oak tree makes its own food from sunlight, water, and air. The rabbit cannot make food, so it has to eat plants like fresh spring grass to get energy. Plants make food; animals eat it.",
          hintLadder: [
            "Which one can make food from sunlight?",
            "Which one has to eat other living things?",
            "State the difference: one makes food, one eats it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Seed-to-Sprout Stretch",
      prompt:
        "Curl up small and tight like a seed underground. Slowly 'sprout' — push your arms up like a stem reaching for the sun, then spread your fingers wide like new leaves. Sway gently in a pretend spring breeze. Do the grow-from-seed sequence 4 times, breathing deeply.",
      scienceTieIn: "Just like a sprout reaches toward light, deep breathing brings more air to your brain and muscles, helping you feel awake and ready.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you were a living thing waking up this spring, what would you need most to grow — and where would you get it? Write two or three sentences.",
      badge: { id: "g5-spring-seedling-scout", name: "Seedling Scout", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
