// Grade 5 World/Current Affairs — Spring Expedition, Week 3 (Life Cycles),
// Day 5. Topic: biodiversity and ecosystems — how living things depend on
// each other and why variety matters. Grade 5 counterpart of
// springG6WorldW3D5: same topic, pitched down with shorter passages, vocab
// support, and paragraph frames.

export const springG5WorldW3D5 = {
  id: "g5.spring.world.w3.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Biodiversity and ecosystems",
  topicTag: "biodiversity",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.4.3-5", "C3.D2.Geo.5.3-5"],
  hook: "Every plant and animal you studied this week lives tangled up with many others. Today you zoom out to whole ecosystems — and find out why a place with MORE kinds of living things is stronger and safer.",
  miniLesson: [
    "BIODIVERSITY means the VARIETY of living things — many different kinds of plants and animals — in one place. A healthy place usually has high biodiversity. (Vocab: bio = life, diversity = variety.)",
    "In an ECOSYSTEM, living things depend on each other: bees help flowers make seeds, plants feed animals, and worms recycle dead leaves into soil. (Vocab: ecosystem = all the living and nonliving things in one place, working together.)",
    "Variety matters because it makes an ecosystem stronger and able to bounce back. If one kind of living thing is lost, others can help fill in. A place with only one kind is fragile — one problem can hurt everything. (Vocab: fragile = easily broken.)"
  ],
  workedExample: {
    prompt: "A meadow has bees, wildflowers, birds, and worms. Explain one way that losing the BEES would ripple out to hurt the whole ecosystem.",
    steps: [
      "Bees pollinate the wildflowers so the flowers can make seeds.",
      "Without bees, fewer flowers get pollinated, so fewer seeds and fewer new flowers grow.",
      "With fewer flowers and seeds, the birds and insects that eat them have less food.",
      "So losing just the bees ripples out to hurt many other living things — that is why biodiversity matters."
    ],
    answer: "Losing bees means fewer pollinated flowers → fewer seeds and plants → less food for birds and other animals. One loss ripples through the whole ecosystem."
  },
  items: [
    {
      id: "g5.spring.world.w3.d5.q1",
      type: "multiple_choice",
      stem: "What does BIODIVERSITY mean?",
      choices: [
        "The number of rocks in an area",
        "The variety of different living things in a place",
        "How hot a place is",
        "The age of the oldest tree"
      ],
      answerIndex: 1,
      explanation: "Biodiversity is the variety of different living things. The more kinds of plants and animals there are, the higher the biodiversity.",
      hintLadder: [
        "Break the word apart: 'bio' = life, 'diversity' = variety.",
        "It is about how many DIFFERENT living things there are.",
        "Variety of living things = biodiversity."
      ]
    },
    {
      id: "g5.spring.world.w3.d5.q2",
      type: "multiple_choice",
      stem: "Why is HIGH biodiversity good for an ecosystem?",
      choices: [
        "It makes the ecosystem stronger, so it can bounce back from problems",
        "It makes the ecosystem more fragile",
        "It means fewer living things to worry about",
        "It stops the ecosystem from ever changing"
      ],
      answerIndex: 0,
      explanation: "With more kinds of living things, if one is lost others can help fill its job, so the ecosystem can recover more easily from a problem.",
      hintLadder: [
        "Think about a team with many players versus a team with only one.",
        "If one kind of living thing is lost, what can the others do?",
        "More variety = stronger and able to bounce back."
      ],
      misconceptionsTargeted: ["more-species-more-fragile"]
    },
    {
      id: "g5.spring.world.w3.d5.q3",
      type: "multiple_choice",
      stem: "Which of these BEST shows living things depending on each other?",
      choices: [
        "A rock sitting in the sun",
        "A puddle drying up",
        "Wind blowing across an empty field",
        "A bee pollinating a flower that then feeds a bird its seeds"
      ],
      answerIndex: 3,
      explanation: "The bee, the flower, and the bird all rely on one another — the bee helps the flower make seeds, and the seeds feed the bird. That is depending on each other.",
      hintLadder: [
        "Which choice has living things helping or feeding each other?",
        "Look for a chain where one living thing helps the next.",
        "The bee → flower → bird example shows them depending on each other."
      ]
    },
    {
      id: "g5.spring.world.w3.d5.q4",
      type: "short_answer",
      stem: "Pick an ecosystem you know (a forest, pond, garden, or reef). Name two living things in it and explain how they depend on each other. Frame: 'In a ___, the ___ and the ___ depend on each other because ___.'",
      rubric: {
        level3: "Names a real ecosystem and two living things AND clearly explains how they depend on each other (food, shelter, or pollination).",
        level2: "Names the two living things but the connection is vague or only goes one way with no explanation.",
        level1: "No clear ecosystem or no real connection described."
      },
      exemplar: "In a garden, the bees and the tomato plants depend on each other. The bees get food (nectar) from the flowers, and in return the bees help the flowers make fruit and seeds. Without one, the other would struggle.",
      hintLadder: [
        "Choose an ecosystem you have actually seen.",
        "Pick two living things in it.",
        "Explain what each one gives or does for the other."
      ]
    },
    {
      id: "g5.spring.world.w3.d5.q5",
      type: "short_answer",
      stem: "Scientists worry when a kind of living thing disappears from an ecosystem. Explain why losing even ONE kind can hurt many others. Use the word 'depend' in your answer.",
      rubric: {
        level3: "Explains that living things depend on each other (for food, pollination, or recycling), so removing one hurts the others that depended on it — a ripple effect that makes the ecosystem weaker.",
        level2: "Says other living things are affected but does not explain the connection or ripple.",
        level1: "No clear reasoning about depending on each other."
      },
      exemplar: "Living things depend on each other. One kind might be food for another, or it might help flowers make seeds. If it disappears, everything that depended on it loses that help, and the problem ripples out to many others. That is why even one loss can hurt the whole ecosystem.",
      hintLadder: [
        "Think about what other living things relied on the missing one.",
        "Was it food, a helper for flowers, or a recycler?",
        "Explain how the loss ripples out to many others."
      ]
    }
  ],
  reflectionPrompt: "Look around your neighborhood this spring. How many DIFFERENT living things can you spot in five minutes? What might depend on each one?",
  misconceptionBank: [
    {
      id: "more-species-more-fragile",
      label: "Thinks more kinds of living things makes an ecosystem weaker",
      description: "Assumes that having many kinds of living things means more things can go wrong, when really variety usually makes an ecosystem stronger and better at bouncing back.",
      coachMove: "Use a team idea: a team with many good players can cover for one who gets hurt, but a team of only one falls apart if that player is out. Variety = backup and strength."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Crop or Many?",
      prompt:
        "Would you rather be a farmer who plants ONLY corn across a whole field, or one who plants corn, beans, squash, and wildflowers together? Think about what happens if a bug that loves corn shows up. Which farm survives better?",
      answer:
        "The mixed farm survives better. If a corn-loving bug attacks, the corn-only farm could lose everything, but the mixed farm still has beans, squash, and wildflowers. The wildflowers even bring in bees and bug-eating insects. Variety is like a safety net.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Web of Life Map",
      challenge:
        "Build a 'web of life' for one ecosystem that shows how at least five living things depend on each other. Draw connecting lines and label what each connection is (food, pollination, shelter, or recycling).",
      materials: ["Paper & markers", "OR a drawing app"],
      steps: [
        "Choose an ecosystem: forest, pond, meadow, garden, or reef.",
        "List at least five living things, including a plant, an animal, and a recycler (like a worm).",
        "Draw lines connecting living things that depend on each other.",
        "Label each line with the type of connection (food, pollination, shelter, recycling)."
      ],
      deliverable: "A labeled 'web of life' diagram linking five or more living things with the type of each connection.",
      choiceBoard: [
        "Draw the web-of-life map with labeled connections.",
        "Write a short news report: 'What happened when one living thing vanished.'",
        "Design a poster with 3 reasons why protecting biodiversity matters."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Biodiversity Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.world.w3.d5.arena1",
          type: "multiple_choice",
          stem: "A pond has just ONE kind of fish and no other living things. A disease strikes that fish. Compared to a pond with many kinds of living things, this pond is likely to...",
          choices: [
            "Recover more easily because it is simpler",
            "Be completely unaffected",
            "Fall apart more easily because it has no backup living things",
            "Gain more living things all by itself"
          ],
          answerIndex: 2,
          explanation: "Low biodiversity means there are no other living things to fill the gap, so one disease can hurt the whole pond. A pond with many kinds would have backup and bounce back better.",
          hintLadder: [
            "Is there any other living thing to take over if the fish is lost?",
            "Only one kind means no backup.",
            "That makes the one-fish pond fragile."
          ]
        },
        {
          id: "g5.spring.world.w3.d5.arena2",
          type: "short_answer",
          stem: "A town wants to replace a wild meadow full of many plants and insects with a plain lawn of just one kind of grass. Give TWO reasons, based on biodiversity, why this could hurt the local ecosystem.",
          rubric: {
            level3: "Gives two solid biodiversity reasons (like: fewer kinds of plants means less food for bees and birds; only one kind of grass has no backup, so one bug or disease could wipe it all out; food or pollination links are broken) with clear reasoning.",
            level2: "Gives one strong reason, or two with weak reasoning.",
            level1: "No real biodiversity reasoning."
          },
          exemplar: "First, the many meadow plants feed bees and birds, but one kind of grass gives them almost no food, so those animals leave. Second, a lawn with only one kind of grass has no backup — one bug or disease that likes that grass could destroy all of it, while a mixed meadow would survive.",
          hintLadder: [
            "What did the many meadow plants give that grass will not?",
            "Think about food for bees and birds.",
            "Then think about backup: what if a bug attacks the one grass?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Rooted and Connected",
      prompt:
        "Stand tall and press your feet down like roots. Reach your arms wide like branches, then imagine threads connecting you to everything around you — the sun, the soil, the birds. Take one slow breath and think of one living thing you are connected to today.",
      scienceTieIn: "Just like living things in an ecosystem, your body depends on a web of other things — food, air, and water. Pausing to notice those links calms your mind and helps you focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could protect ONE part of your local ecosystem — a bee, a plant, or a pond — which would you choose, and how would protecting it help many other living things?",
      badge: { id: "g5-spring-web-of-life-guardian", name: "Web of Life Guardian", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
