// Grade 5 Science — Spring Expedition, Week 8 (Spring Showcase), Day 2.
// Grade 5 counterpart of g6.spring.sci.w8.d2. Same topic (biology synthesis:
// connect growth, life cycles, inherited traits, and ecosystems to explain
// one living thing) pitched down to Grade 5: simpler vocabulary ("inherited
// traits" instead of "genetics" wording), mostly multiple choice with short
// answers, and vocab support. Capstone/celebratory tone.

export const springG5ScienceW8D2 = {
  id: "g5.spring.sci.w8.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "Biology synthesis — explain a living system",
  topicTag: "biology-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-LS1-1"],
  hook: "All spring you have studied growth, life cycles, inherited traits, and ecosystems as separate ideas. Today you weave them into ONE explanation of a living thing — the science backbone of your capstone!",
  miniLesson: [
    "GROWTH and LIFE CYCLES: every living thing follows a cycle — born or sprout, grow, make more of itself, then die — and passes energy and matter along the way.",
    "INHERITED TRAITS: baby living things get traits from their parents, which is why a bean seed grows into a bean plant and not a rose.",
    "ECOSYSTEMS: no living thing survives alone — it needs plants that make food (producers), animals that eat (consumers), decomposers, sun, water, and soil around it. A full explanation links a living thing's life cycle and inherited traits to its job in the web around it."
  ],
  workedExample: {
    prompt: "Put the three big ideas together to explain an oak tree as a living system.",
    steps: [
      "Life cycle: an acorn sprouts, grows into a tree, makes new acorns, then dies and breaks down.",
      "Inherited traits: the acorn grows into an OAK because it got oak traits from its parent tree.",
      "Ecosystem: the oak is a producer that feeds squirrels and insects; fungi break down its fallen leaves back into soil.",
      "Put it together: inherited traits drive the life cycle, and that cycle plugs the oak into the energy web around it."
    ],
    answer: "Inherited traits → life cycle → job in the ecosystem: one connected living system."
  },
  items: [
    {
      id: "g5.spring.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "Why does a bean seed grow into a bean plant and not a sunflower?",
      choices: [
        "Because of the weather that week",
        "Because seeds choose what to become",
        "Because of the color of the pot",
        "Because of the TRAITS it inherited from its parent plant"
      ],
      answerIndex: 3,
      explanation: "Inherited traits carry the instructions that decide what a living thing becomes, so a bean's traits build a bean plant.",
      hintLadder: [
        "What does a living thing get from its parents?",
        "Think about the instructions inside the seed.",
        "Inherited traits decide it — a bean seed has bean traits."
      ]
    },
    {
      id: "g5.spring.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "Which correctly orders a flowering plant's LIFE CYCLE?",
      choices: [
        "Adult plant → seed → sprout → flower",
        "Seed → sprout → adult plant → flower/make seeds → new seeds",
        "Flower → seed → death → sprout",
        "Sprout → seed → adult → sprout"
      ],
      answerIndex: 1,
      explanation: "A seed sprouts, grows into an adult, flowers to make seeds, and makes new seeds — then the cycle repeats.",
      hintLadder: [
        "Where does a plant's life begin?",
        "Growing comes before making new seeds.",
        "Seed → sprout → adult → flower → new seeds."
      ],
      misconceptionsTargeted: ["cycle-has-a-start-only"]
    },
    {
      id: "g5.spring.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "A caterpillar in a meadow eats leaves, then becomes a butterfly that helps flowers make seeds. Which idea BEST captures why the meadow needs it?",
      choices: [
        "Only its inherited traits",
        "Only its life cycle",
        "Its ECOSYSTEM job — it is a consumer AND a pollinator that other living things depend on",
        "Nothing — one insect does not matter"
      ],
      answerIndex: 2,
      explanation: "The living thing's job in the ecosystem (consumer and pollinator) links it to the whole web of living things around it.",
      hintLadder: [
        "Think about how it connects to OTHER living things.",
        "It both eats leaves and helps flowers make seeds.",
        "Its ecosystem job ties it to the whole web."
      ]
    },
    {
      id: "g5.spring.sci.w8.d2.q4",
      type: "short_answer",
      stem: "Pick ONE living thing. In 3–4 sentences, connect its life cycle, its inherited traits, and its job in an ecosystem.",
      rubric: {
        level3: "Names a living thing and clearly links all THREE — a life cycle, an inherited trait, and an ecosystem job — into one connected explanation.",
        level2: "Covers two of the three, or all three but one link is vague.",
        level1: "Describes the living thing but misses the connections."
      },
      exemplar: "A frog hatches from an egg, becomes a tadpole, then an adult frog (life cycle). It inherited its long jumping legs and green skin from its parents (inherited traits). In the pond it eats insects and is eaten by herons, which is its job in the food web (ecosystem).",
      hintLadder: [
        "Start with its life cycle — how it grows and makes more of itself.",
        "Add a trait it inherited from its parents.",
        "Finish with what it eats and what eats it."
      ]
    },
    {
      id: "g5.spring.sci.w8.d2.q5",
      type: "short_answer",
      stem: "Explain why you CAN'T fully understand a living thing by studying only its inherited traits and ignoring its ecosystem.",
      rubric: {
        level3: "Explains that inherited traits set what a living thing CAN become, but survival, food, and its job all depend on the ecosystem around it — both are needed.",
        level2: "Says the ecosystem matters but the reasoning is thin.",
        level1: "Claims traits are all that matter or gives no reasoning."
      },
      exemplar: "Inherited traits decide what a living thing CAN become, but it still needs food, water, and other living things to survive. A perfect seed dies with no soil, sun, or water — so you have to study the ecosystem too.",
      hintLadder: [
        "What do inherited traits decide, and what do they NOT give?",
        "Could a seed with great traits grow with no water or sun?",
        "Survival depends on the ecosystem around the living thing."
      ]
    }
  ],
  reflectionPrompt: "Look at the living thing in your capstone. Which of the big ideas — growth, life cycles, inherited traits, ecosystems — best explains why it does well?",
  misconceptionBank: [
    {
      id: "cycle-has-a-start-only",
      label: "Treats a life cycle as a one-way line, not a cycle",
      description: "Thinks a life cycle simply ends, forgetting that making new seeds or eggs restarts it with new offspring.",
      coachMove: "Trace the arrow from 'new seeds/eggs' back to the start — a cycle loops around, it does not stop."
    },
    {
      id: "traits-are-everything",
      label: "Thinks inherited traits alone decide a living thing's fate",
      description: "Ignores that the environment and ecosystem also shape whether a living thing survives and grows.",
      coachMove: "Ask: 'Would the best seed grow in a dark, dry closet?' Traits set what is possible; the ecosystem decides the outcome."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Acorn, Big Ideas",
      prompt:
        "Hold an acorn in your mind. Can you spot ALL the big spring ideas hiding in it — a life cycle, inherited traits, growth, and a job in an ecosystem? Try to name where each one shows up.",
      answer:
        "Life cycle: acorn → tree → new acorns. Inherited traits: it will grow into an OAK, not a maple, because of the traits it got from its parent. Growth: it turns sun, water, and soil into wood. Ecosystem: it feeds squirrels and its leaves break down into soil. One acorn holds the whole season!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Living System Web",
      challenge:
        "Pick the living thing from your capstone and build a 'living system web': a diagram with four labeled zones — Life Cycle, Inherited Traits, Growth, Ecosystem — and arrows showing how they connect for your living thing.",
      steps: [
        "Draw your living thing in the center of the page.",
        "Make four labeled zones around it: Life Cycle, Inherited Traits, Growth, Ecosystem.",
        "Fill each zone with one true detail about YOUR living thing.",
        "Draw arrows showing how the zones connect (like traits → drive → life cycle)."
      ],
      deliverable: "A labeled living-system diagram linking growth, life cycle, inherited traits, and ecosystem for one living thing.",
      choiceBoard: [
        "Draw the four-zone diagram with connecting arrows.",
        "Write a one-paragraph 'story of a life' that touches all four ideas.",
        "Build a foldable with a flap for each of the four ideas."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A robin inherits its red chest, builds a nest, lays eggs, eats worms, and is hunted by hawks. Which statement uses ALL FOUR big ideas correctly?",
          choices: [
            "The robin inherits traits, grows and lays eggs (growth + life cycle), and eats worms while feeding hawks (ecosystem).",
            "The robin's red chest (inherited trait) is the only thing that matters.",
            "The robin has no job in its ecosystem.",
            "The robin's life cycle never repeats."
          ],
          answerIndex: 0,
          explanation: "It links inherited traits, growth, the life cycle (eggs → new robins), and the ecosystem job (eats worms, feeds hawks) — all four ideas together.",
          hintLadder: [
            "Look for the answer that mentions traits, growth, cycle, AND food web.",
            "One of the four ideas is missing or wrong in the others.",
            "The full choice ties all four together."
          ]
        },
        {
          id: "g5.spring.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "A student says: 'If I know a seed's inherited traits, I know exactly how tall the plant will grow.' Is this fully correct? Explain using ecosystem and growth ideas.",
          rubric: {
            level3: "Says it is NOT fully correct — inherited traits set the possible height, but sun, water, soil, and space (ecosystem/growth conditions) also decide the real height.",
            level2: "Disagrees but gives only one weak reason.",
            level1: "Agrees, or gives no ecosystem/growth reasoning."
          },
          exemplar: "Not fully. Inherited traits set the plant's possible height, but its real height depends on how much sun, water, and good soil it gets. Two seeds with the same traits grow to different heights in different conditions.",
          hintLadder: [
            "Do inherited traits guarantee the outcome, or just what is possible?",
            "What else does a plant need to reach its full height?",
            "Two identical seeds in different conditions grow differently."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Life Cycle in Motion",
      prompt:
        "Act out a life cycle: curl up as a seed, sprout up and reach wide as a growing plant, sway as you 'flower,' then scatter your hands like new seeds falling — and curl back down to start again. Loop it 3 times.",
      scienceTieIn: "Moving through the cycle with your whole body pumps oxygen-rich blood to your brain — the same energy flow that powers real growth in every living thing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just connected four whole seasons' worth of biology into one picture! Which of the big ideas — growth, life cycles, inherited traits, or ecosystems — clicked the most for you this year, and why?",
      badge: { id: "g5-spring-living-system-synthesist", name: "Living System Synthesist", emoji: "🧬" },
      estimatedMinutes: 7
    }
  }
};
