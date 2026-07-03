// Grade 6 World/Current Affairs — Spring Expedition, Week 3 (Life Cycles),
// Day 5. Topic: biodiversity and ecosystems — how living things depend on
// each other and why variety matters.

export const springG6WorldW3D5 = {
  id: "g6.spring.world.w3.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Biodiversity and ecosystems",
  topicTag: "biodiversity",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.4", "NGSS.MS-LS2-4"],
  hook: "Every plant and animal you studied this week lives tangled up with hundreds of others. Today you zoom out to whole ecosystems — and find out why a world with MORE kinds of living things is a stronger, safer one.",
  miniLesson: [
    "Biodiversity means the VARIETY of living things — many different species — in a place. A healthy ecosystem usually has high biodiversity.",
    "In an ecosystem, living things depend on each other: pollinators help plants make seeds, plants feed animals, decomposers recycle nutrients, and predators keep populations balanced.",
    "Variety matters because it makes an ecosystem more resilient: if one species is lost, others can fill in. Low biodiversity is fragile — one problem can collapse the whole system."
  ],
  workedExample: {
    prompt: "A meadow has bees, wildflowers, birds, and worms. Explain one way losing the BEES would ripple through this ecosystem.",
    steps: [
      "Bees pollinate the wildflowers so the flowers can make seeds.",
      "Without bees, fewer flowers get pollinated, so fewer seeds and fewer new flowers grow.",
      "With fewer flowers and seeds, the birds and insects that eat them have less food.",
      "So losing one species (bees) ripples out to hurt many others — that's why biodiversity matters."
    ],
    answer: "Losing bees means fewer pollinated flowers → fewer seeds and plants → less food for birds and other animals; one loss ripples through the whole web."
  },
  items: [
    {
      id: "g6.spring.world.w3.d5.q1",
      type: "multiple_choice",
      stem: "What does BIODIVERSITY mean?",
      choices: [
        "The number of rocks in an area",
        "The variety of different living species in a place",
        "How hot an ecosystem is",
        "The age of the oldest tree"
      ],
      answerIndex: 1,
      explanation: "Biodiversity is the variety of different living things — the more kinds of species, the higher the biodiversity.",
      hintLadder: [
        "Break the word apart: 'bio' = life, 'diversity' = variety.",
        "It's about how many DIFFERENT living things there are.",
        "Variety of species = biodiversity."
      ]
    },
    {
      id: "g6.spring.world.w3.d5.q2",
      type: "multiple_choice",
      stem: "Why is HIGH biodiversity good for an ecosystem?",
      choices: [
        "It makes the ecosystem more fragile",
        "It makes the ecosystem more resilient, so it can recover from problems",
        "It means fewer species to worry about",
        "It stops all change from ever happening"
      ],
      answerIndex: 1,
      explanation: "With more species, if one is lost others can fill its role, so a diverse ecosystem bounces back from disturbances more easily.",
      hintLadder: [
        "Think about a team with many players versus just one.",
        "If one species is lost, what can other species do?",
        "More variety = more resilient (able to recover)."
      ],
      misconceptionsTargeted: ["more-species-more-fragile"]
    },
    {
      id: "g6.spring.world.w3.d5.q3",
      type: "multiple_choice",
      stem: "Which of these BEST shows living things depending on each other?",
      choices: [
        "A rock sitting in the sun",
        "A bee pollinating a flower that then feeds a bird its seeds",
        "Wind blowing across an empty field",
        "A puddle drying up"
      ],
      answerIndex: 1,
      explanation: "The bee, flower, and bird all rely on one another — pollination leads to seeds, which feed the bird. That's interdependence.",
      hintLadder: [
        "Which option involves living things helping or feeding each other?",
        "Look for a chain of dependence between species.",
        "The bee → flower → bird example shows interdependence."
      ]
    },
    {
      id: "g6.spring.world.w3.d5.q4",
      type: "short_answer",
      stem: "Pick an ecosystem you know (a forest, pond, garden, or coral reef). Name two living things in it and explain how they depend on each other.",
      rubric: {
        level3: "Names a real ecosystem and two living things AND clearly explains a dependency between them (who provides food, shelter, pollination, etc.).",
        level2: "Names the two living things but the dependency is vague or one-directional without explanation.",
        level1: "No clear ecosystem or no real dependency described."
      },
      exemplar: "In a garden, bees and tomato plants depend on each other. The bees get nectar and pollen for food, and in return they pollinate the tomato flowers so the plants can make fruit and seeds. Without one, the other struggles.",
      hintLadder: [
        "Choose an ecosystem you've actually seen.",
        "Pick two living things in it.",
        "Explain what each one gives or does for the other."
      ]
    },
    {
      id: "g6.spring.world.w3.d5.q5",
      type: "short_answer",
      stem: "Scientists worry when a species disappears from an ecosystem. Explain why losing even ONE species can affect many others.",
      rubric: {
        level3: "Explains that species are interconnected (food, pollination, nutrient cycling), so removing one disrupts the others that depended on it — a ripple/chain effect that can lower resilience.",
        level2: "Says other species are affected but doesn't explain the connection or ripple.",
        level1: "No clear reasoning about interdependence."
      },
      exemplar: "Species are all connected — one might be food for another, or pollinate its plants. If it disappears, everything that depended on it loses that support, and the effect ripples outward. That's why even one loss can shake the whole ecosystem and make it less able to recover.",
      hintLadder: [
        "Think about what other species relied on the missing one.",
        "Was it food, a pollinator, or a nutrient recycler?",
        "Explain how the loss ripples to many other species."
      ]
    }
  ],
  reflectionPrompt: "Look around your neighborhood this spring. How many DIFFERENT living things can you spot in five minutes? What might depend on each one?",
  misconceptionBank: [
    {
      id: "more-species-more-fragile",
      label: "Thinks more species makes an ecosystem weaker",
      description: "Assumes that having many species means more things can go wrong, when in fact variety usually makes ecosystems stronger and more able to recover.",
      coachMove: "Use a team analogy: a team with many skilled players can cover for an injury, but a team of one collapses if that player is out. Variety = backup and resilience."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Crop or Many?",
      prompt:
        "Would you rather be a farmer who plants ONLY corn across a whole field, or one who plants corn, beans, squash, and wildflowers together? Think about what happens if a pest that loves corn shows up. Which farm survives better?",
      answer:
        "The mixed farm survives better. If a corn-loving pest strikes, the single-crop farm can lose everything, but the diverse farm still has beans, squash, and wildflowers — plus the wildflowers attract pollinators and pest-eating insects. Biodiversity is a safety net.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Web of Life Map",
      challenge:
        "Build a 'web of life' for one ecosystem showing how at least five living things depend on each other. Draw connecting lines and label what each connection is (food, pollination, shelter, nutrient recycling).",
      materials: ["Paper & markers", "OR a drawing app"],
      steps: [
        "Choose an ecosystem: forest, pond, meadow, garden, or reef.",
        "List at least five living things, including a plant, an animal, and a decomposer.",
        "Draw lines connecting things that depend on each other.",
        "Label each line with the type of connection (food, pollination, shelter, etc.)."
      ],
      deliverable: "A labeled 'web of life' diagram linking five or more species with the type of each dependency.",
      choiceBoard: [
        "Draw the web-of-life map with labeled connections.",
        "Write a short news report: 'What happened when one species vanished.'",
        "Design a poster arguing why protecting biodiversity matters, with 3 reasons."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Biodiversity Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.world.w3.d5.arena1",
          type: "multiple_choice",
          stem: "A pond has just ONE kind of fish and no other species. A disease strikes that fish. Compared to a pond with many species, this pond is likely to...",
          choices: [
            "Recover more easily because it's simpler",
            "Collapse more easily because it has no backup species",
            "Be completely unaffected",
            "Gain more species automatically"
          ],
          answerIndex: 1,
          explanation: "Low biodiversity means no other species to fill the gap, so a single disease can collapse the whole system — the opposite of a resilient, diverse ecosystem.",
          hintLadder: [
            "Is there any other species to take over if the fish is lost?",
            "Low variety means no backup.",
            "That makes the single-species pond fragile."
          ]
        },
        {
          id: "g6.spring.world.w3.d5.arena2",
          type: "short_answer",
          stem: "A town wants to replace a wild meadow full of many plants and insects with a single-grass lawn. Give TWO reasons, based on biodiversity, why this could harm the local ecosystem.",
          rubric: {
            level3: "Gives two solid biodiversity-based reasons (e.g., fewer species to support pollinators/birds; loss of resilience so a pest or disease could wipe out the lawn; broken food/pollination links) with clear reasoning.",
            level2: "Gives one strong reason, or two with weak reasoning.",
            level1: "No real biodiversity reasoning."
          },
          exemplar: "First, the many meadow plants feed pollinators and birds; a single grass gives them almost no food, so those animals leave or decline. Second, a one-species lawn has no backup — one pest or disease that likes that grass could destroy all of it, while a diverse meadow would survive.",
          hintLadder: [
            "What did the many meadow species provide that grass won't?",
            "Think about pollinators and food chains.",
            "Then think about resilience: what if a pest attacks one grass?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Rooted and Connected",
      prompt:
        "Stand tall and root your feet like a tree. Reach your branches wide, then link imaginary threads to everything around you — the sun, the soil, the birds. Take one slow breath and think of one living thing you're connected to today.",
      scienceTieIn: "Just like species in an ecosystem, your body depends on a web of things — food, air, water. Pausing to notice those links calms your mind and sharpens focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could protect ONE part of your local ecosystem — a pollinator, a plant, a pond — which would you choose, and how would protecting it help many other living things?",
      badge: { id: "biodiversity-guardian", name: "Biodiversity Guardian", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
