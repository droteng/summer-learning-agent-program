// Grade 6 Science — Spring Expedition, Week 8 (Spring Showcase), Day 2.
// Topic: biology synthesis — connect growth, life cycles, genetics, and
// ecosystems to explain one living system. The season's science ideas come
// together for the capstone.

export const springG6ScienceW8D2 = {
  id: "g6.spring.sci.w8.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "Biology synthesis — explain a living system",
  topicTag: "biology-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS2-1"],
  hook: "All spring you've studied growth, life cycles, genetics, and ecosystems as separate ideas. Today you weave them into ONE explanation of a living system — the science backbone of your capstone.",
  miniLesson: [
    "GROWTH and LIFE CYCLES: every organism follows a cycle — born/sprout, grow, reproduce, die — and passes energy and matter along the way.",
    "GENETICS: offspring inherit traits from parents through genes, which is why a bean seed grows into a bean plant and not a rose.",
    "ECOSYSTEMS: no organism lives alone — it needs producers, consumers, decomposers, sun, water, and soil around it. A full explanation links the organism's life cycle and inherited traits to its role in the web around it."
  ],
  workedExample: {
    prompt: "Synthesize the four big ideas to explain an oak tree as a living system.",
    steps: [
      "Life cycle: an acorn sprouts, grows into a tree, makes new acorns, then dies and decomposes.",
      "Genetics: the acorn's genes make it grow into an oak — inheriting oak traits from its parent tree.",
      "Ecosystem: the oak is a producer feeding squirrels and insects; fungi decompose its fallen leaves back into soil.",
      "Synthesis: inherited genes drive the life cycle, and that cycle plugs the oak into the energy web around it."
    ],
    answer: "Genes → life cycle → role in the ecosystem: one connected living system."
  },
  items: [
    {
      id: "g6.spring.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "Why does a bean seed grow into a bean plant and not a sunflower?",
      choices: [
        "Because of the weather that week",
        "Because of the GENES it inherited from its parent plant",
        "Because of the color of the pot",
        "Because seeds choose what to become"
      ],
      answerIndex: 1,
      explanation: "Inherited genes carry the instructions that determine an organism's traits, so a bean's genes build a bean plant.",
      hintLadder: [
        "What does an organism inherit from its parents?",
        "Think about the instructions inside the seed.",
        "Genes carry the traits — a bean seed has bean genes."
      ]
    },
    {
      id: "g6.spring.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "Which correctly orders a flowering plant's LIFE CYCLE?",
      choices: [
        "Seed → sprout → adult plant → flower/reproduce → new seeds",
        "Adult plant → seed → sprout → flower",
        "Flower → seed → death → sprout",
        "Sprout → seed → adult → sprout"
      ],
      answerIndex: 0,
      explanation: "A seed sprouts, grows into an adult, flowers to reproduce, and makes new seeds — the cycle repeats.",
      hintLadder: [
        "Where does a plant's life begin?",
        "Growth comes before reproduction.",
        "Seed → sprout → adult → flower → new seeds."
      ],
      misconceptionsTargeted: ["cycle-has-a-start-only"]
    },
    {
      id: "g6.spring.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "A caterpillar in a meadow eats leaves, then becomes a butterfly that pollinates flowers. Which idea BEST captures why the meadow needs it?",
      choices: [
        "Genetics alone",
        "Only its life cycle",
        "Its ECOSYSTEM role — it's a consumer AND a pollinator that other organisms depend on",
        "Nothing — one insect doesn't matter"
      ],
      answerIndex: 2,
      explanation: "The organism's role in the ecosystem (consumer and pollinator) links it to the whole web of living things around it.",
      hintLadder: [
        "Think about how it connects to OTHER organisms.",
        "It both eats and helps flowers reproduce.",
        "Its ecosystem role ties it to the whole web."
      ]
    },
    {
      id: "g6.spring.sci.w8.d2.q4",
      type: "short_answer",
      stem: "Pick ONE living thing. In 3–4 sentences, connect its life cycle, its inherited traits (genetics), and its role in an ecosystem.",
      rubric: {
        level3: "Names an organism and clearly links all THREE — a life cycle, an inherited trait, and an ecosystem role — into one coherent explanation.",
        level2: "Covers two of the three, or all three but one link is vague.",
        level1: "Describes the organism but misses the connections."
      },
      exemplar: "A frog hatches from an egg, becomes a tadpole, then an adult frog (life cycle). It inherited its long jumping legs and green skin from its parents (genetics). In the pond it eats insects and is eaten by herons, linking it into the food web (ecosystem).",
      hintLadder: [
        "Start with its life cycle — how it grows and reproduces.",
        "Add a trait it inherited from its parents.",
        "Finish with what it eats and what eats it."
      ]
    },
    {
      id: "g6.spring.sci.w8.d2.q5",
      type: "short_answer",
      stem: "Explain why you CAN'T fully understand an organism by studying only its genes, ignoring its ecosystem.",
      rubric: {
        level3: "Explains that genes set traits/potential but survival, food, and role all depend on the surrounding ecosystem — both are needed.",
        level2: "Says the ecosystem matters but the reasoning is thin.",
        level1: "Claims genes are all that matter or gives no reasoning."
      },
      exemplar: "Genes decide what an organism CAN become, but it still needs food, water, and other living things to survive. A perfect seed dies without soil, sun, and water — so you must study the ecosystem too.",
      hintLadder: [
        "What do genes decide, and what do they NOT provide?",
        "Could a seed with great genes grow with no water or sun?",
        "Survival depends on the ecosystem around the organism."
      ]
    }
  ],
  reflectionPrompt: "Look at the living thing in your capstone. Which of the four big ideas — growth, life cycles, genetics, ecosystems — best explains why it thrives?",
  misconceptionBank: [
    {
      id: "cycle-has-a-start-only",
      label: "Treats a life cycle as a one-way line, not a cycle",
      description: "Thinks a life cycle simply ends, forgetting that reproduction restarts it with new offspring.",
      coachMove: "Trace the arrow from 'new seeds/eggs' back to the start — a cycle loops, it doesn't stop."
    },
    {
      id: "genes-are-everything",
      label: "Thinks genes alone determine an organism's fate",
      description: "Ignores that environment and ecosystem also shape whether an organism survives and grows.",
      coachMove: "Ask: 'Would the best seed grow in a dark, dry closet?' Genes set potential; the ecosystem decides the outcome."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Acorn, Four Ideas",
      prompt:
        "Hold an acorn in your mind. Can you spot ALL FOUR big spring ideas hiding in it — a life cycle, inherited genes, growth, and a role in an ecosystem? Try to name where each one shows up.",
      answer:
        "Life cycle: acorn → tree → new acorns. Genes: it will grow into an OAK, not a maple, because of inherited instructions. Growth: it turns sun, water, and soil into wood. Ecosystem: it feeds squirrels and its leaves decompose into soil. One acorn holds the whole season!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Living System Web",
      challenge:
        "Pick the organism from your capstone and build a 'living system web': a diagram with four labeled zones — Life Cycle, Genetics, Growth, Ecosystem — and arrows showing how they connect for your organism.",
      steps: [
        "Draw your organism in the center of the page.",
        "Make four labeled zones around it: Life Cycle, Genetics, Growth, Ecosystem.",
        "Fill each zone with one true detail about YOUR organism.",
        "Draw arrows showing how the zones connect (e.g., genes → drives → life cycle)."
      ],
      deliverable: "A labeled living-system diagram linking growth, life cycle, genetics, and ecosystem for one organism.",
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
          id: "g6.spring.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A robin inherits its red breast, builds a nest, lays eggs, eats worms, and is hunted by hawks. Which statement uses ALL FOUR big ideas correctly?",
          choices: [
            "The robin's red breast (genetics) is the only thing that matters.",
            "The robin's life cycle never repeats.",
            "The robin has no ecosystem role.",
            "The robin inherits traits (genetics), grows and lays eggs (growth + life cycle), and eats worms while feeding hawks (ecosystem)."
          ],
          answerIndex: 3,
          explanation: "It links inherited traits, growth, the life cycle (eggs → new robins), and the ecosystem role (eats worms, feeds hawks) — all four ideas together.",
          hintLadder: [
            "Look for the answer that mentions traits, growth, cycle, AND food web.",
            "One of the four ideas is missing or wrong in the others.",
            "The full-synthesis choice ties all four together."
          ]
        },
        {
          id: "g6.spring.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "A student says: 'If I know a seed's genes, I know exactly how tall the plant will grow.' Is this fully correct? Explain using ecosystem and growth ideas.",
          rubric: {
            level3: "Says it is NOT fully correct — genes set potential height, but sun, water, soil, and space (ecosystem/growth conditions) also determine actual height.",
            level2: "Disagrees but gives only one weak reason.",
            level1: "Agrees, or gives no ecosystem/growth reasoning."
          },
          exemplar: "Not fully. Genes set the plant's possible height, but its real height depends on how much sun, water, and soil nutrients it gets. Two seeds with the same genes grow to different heights in different conditions.",
          hintLadder: [
            "Do genes guarantee the outcome, or just the potential?",
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
        "You just connected four whole seasons' worth of biology into one picture. Which of the four ideas — growth, life cycles, genetics, or ecosystems — clicked the most for you this year, and why?",
      badge: { id: "spring-biology-synthesist", name: "Biology Synthesist", emoji: "🧬" },
      estimatedMinutes: 7
    }
  }
};
