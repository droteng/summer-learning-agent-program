// Grade 6 Science — Spring Expedition, Week 3 (Life Cycles), Day 2.
// Topic: the plant life cycle — seed → germination → growth → flower →
// pollination → seed.

export const springG6ScienceW3D2 = {
  id: "g6.spring.sci.w3.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Science",
  topic: "The plant life cycle",
  topicTag: "plant-life-cycle",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS1-5"],
  hook: "Every flower in a spring garden is part of a loop that started as a tiny seed — and is racing to make new seeds. Today you trace that loop and find out what pollination has to do with the strawberries on your plate.",
  miniLesson: [
    "A flowering plant's life cycle runs in a loop: seed → germination (sprouting) → growth → flowering → pollination → new seeds → and around again.",
    "Germination is when a seed, given water, warmth, and air, sprouts roots and a shoot. Then the plant grows leaves and matures.",
    "Pollination moves pollen from one flower to another (by wind, insects, or birds). This fertilizes the flower so it can form fruit and NEW seeds, restarting the cycle."
  ],
  workedExample: {
    prompt: "Put the plant life cycle in order: flower, seed, mature plant, germination (sprout), pollination.",
    steps: [
      "Start with the seed.",
      "The seed germinates — it sprouts roots and a shoot.",
      "The sprout grows into a mature plant, which forms a flower.",
      "Pollination fertilizes the flower, which makes new seeds. Order: seed → germination → mature plant → flower → pollination (→ new seed)."
    ],
    answer: "seed → germination → mature plant → flower → pollination → new seed"
  },
  items: [
    {
      id: "g6.spring.sci.w3.d2.q1",
      type: "multiple_choice",
      stem: "What is GERMINATION?",
      choices: [
        "When a flower is pollinated",
        "When a seed sprouts and begins to grow roots and a shoot",
        "When a plant drops its leaves",
        "When fruit ripens"
      ],
      answerIndex: 1,
      explanation: "Germination is the sprouting stage — the seed uses water, warmth, and air to grow its first roots and shoot.",
      hintLadder: [
        "It's the very first growth stage after the seed.",
        "Think about what a seed needs to 'wake up' and sprout.",
        "Germination = the seed sprouting."
      ]
    },
    {
      id: "g6.spring.sci.w3.d2.q2",
      type: "multiple_choice",
      stem: "Which three things does a seed most need to GERMINATE?",
      choices: [
        "Sunlight, soil, and fruit",
        "Water, warmth, and air (oxygen)",
        "Pollen, wind, and bees",
        "Flowers, seeds, and roots"
      ],
      answerIndex: 1,
      explanation: "A seed needs water, warmth, and oxygen to begin germinating; sunlight matters mainly after the shoot emerges and makes leaves.",
      hintLadder: [
        "A seed can start sprouting even in the dark underground.",
        "Think about water, temperature, and air.",
        "Water, warmth, and oxygen trigger germination."
      ],
      misconceptionsTargeted: ["seeds-need-light-to-sprout"]
    },
    {
      id: "g6.spring.sci.w3.d2.q3",
      type: "multiple_choice",
      stem: "Why is POLLINATION so important in a plant's life cycle?",
      choices: [
        "It waters the plant",
        "It lets the flower be fertilized so it can make new seeds",
        "It makes the leaves greener",
        "It helps the seed germinate"
      ],
      answerIndex: 1,
      explanation: "Pollination fertilizes the flower, allowing it to form fruit and new seeds — which restarts the whole cycle.",
      hintLadder: [
        "Pollination moves pollen between flowers.",
        "What can a fertilized flower then produce?",
        "New SEEDS — which keep the cycle going."
      ]
    },
    {
      id: "g6.spring.sci.w3.d2.q4",
      type: "short_answer",
      stem: "Describe, in order, the main stages of a flowering plant's life cycle and explain how the cycle repeats.",
      rubric: {
        level3: "Lists the stages in correct order (seed → germination → growth/mature plant → flower → pollination → new seed) AND explains the new seeds restart the cycle.",
        level2: "Gets most stages in order but the 'repeats' link is weak or one stage is out of place.",
        level1: "Stages are out of order or the cycle isn't explained."
      },
      exemplar: "A seed germinates and sprouts, grows into a mature plant, and forms a flower. The flower is pollinated and fertilized, so it makes fruit with new seeds. Those seeds fall and germinate, starting the whole cycle over again.",
      hintLadder: [
        "Start with the seed and end with a new seed.",
        "Don't forget germination and pollination.",
        "Explain what the new seeds do to repeat the loop."
      ]
    },
    {
      id: "g6.spring.sci.w3.d2.q5",
      type: "short_answer",
      stem: "Bees, butterflies, and wind can all move pollen. Explain how a pollinator like a bee helps a plant complete its life cycle.",
      rubric: {
        level3: "Explains the bee carries pollen from flower to flower, enabling fertilization → new seeds, so the plant can reproduce and continue its cycle.",
        level2: "Mentions the bee moving pollen but doesn't connect it to new seeds / continuing the cycle.",
        level1: "No clear link between the pollinator and reproduction."
      },
      exemplar: "As a bee visits flowers for nectar, pollen sticks to its body and rubs off on the next flower. That pollination fertilizes the flower so it can make new seeds — letting the plant reproduce and keep its life cycle going.",
      hintLadder: [
        "What sticks to the bee as it visits a flower?",
        "Where does that pollen end up next?",
        "Connect the transfer to fertilization and new seeds."
      ]
    }
  ],
  reflectionPrompt: "Look at a fruit or vegetable you eat. It grew from a pollinated flower — can you picture which flower, and the seed it came from?",
  misconceptionBank: [
    {
      id: "seeds-need-light-to-sprout",
      label: "Thinks seeds need sunlight to germinate",
      description: "Believes a seed must have light to sprout, when many seeds germinate underground in the dark and need light only later for making food.",
      coachMove: "Point out that seeds sprout underground where it's dark; they carry stored food. Light becomes essential once leaves form and start photosynthesis."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "From One Seed",
      prompt:
        "A single sunflower can make over 1,000 seeds in one flower head. If even a few of those seeds germinate next spring, what does that mean for the number of sunflowers over several years? Why might a plant make SO many seeds?",
      answer:
        "The plant makes tons of seeds because most won't survive — they get eaten, land on bad soil, or dry out. Making many seeds is a plant's strategy to ensure at least a few germinate and continue the life cycle, so populations can grow fast when conditions are good.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Grow-a-Seed Life Cycle Poster",
      challenge:
        "Design a poster (or start a real seed-sprouting experiment) that shows a plant's full life cycle. Label seed, germination, growth, flower, pollination, and new seed — with arrows looping the cycle back around.",
      materials: ["Paper & markers", "OPTIONAL: a bean seed, cup, and damp paper towel to watch real germination"],
      steps: [
        "Draw or plant a seed and label the germination stage.",
        "Show the plant growing leaves and forming a flower.",
        "Add a pollinator (bee/butterfly/wind) moving pollen at the flower.",
        "Show new seeds forming and draw an arrow looping back to the start."
      ],
      deliverable: "A labeled plant life-cycle poster (or a real sprouting-seed setup) showing all six stages looping back around.",
      choiceBoard: [
        "Draw the six-stage life-cycle poster with a pollinator.",
        "Start a real bean-in-a-cup experiment and journal what you see each day.",
        "Write a short story told from the point of view of one seed's whole journey."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plant Cycle Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w3.d2.arena1",
          type: "multiple_choice",
          stem: "A gardener notices her squash plants flower beautifully but never form squash. Which part of the life cycle has most likely failed?",
          choices: [
            "Germination",
            "Pollination",
            "Seed dormancy",
            "Leaf growth"
          ],
          answerIndex: 1,
          explanation: "Flowers that never form fruit usually weren't pollinated — without pollination the flower can't be fertilized to make fruit and seeds.",
          hintLadder: [
            "The plant clearly germinated and grew — it made flowers.",
            "What step turns a flower into a fruit with seeds?",
            "No fruit forming points to failed pollination."
          ]
        },
        {
          id: "g6.spring.sci.w3.d2.arena2",
          type: "short_answer",
          stem: "A student says, 'A plant's life cycle is finished once it grows a flower.' Explain why this is incomplete, using the idea of the cycle repeating.",
          rubric: {
            level3: "Explains the flower is not the end — it must be pollinated to make new seeds, and those seeds germinate to start a new cycle, so the life cycle is a repeating loop, not a line.",
            level2: "Says the flower isn't the end but doesn't fully connect to new seeds / repeating.",
            level1: "Agrees with the student or gives no cycle reasoning."
          },
          exemplar: "The flower isn't the end. It still has to be pollinated and fertilized so it can make new seeds. Those seeds then germinate into new plants, so the life cycle loops back around and repeats — it's a cycle, not a straight line that stops at the flower.",
          hintLadder: [
            "What has to happen to the flower next?",
            "What does the pollinated flower produce?",
            "Explain how those seeds make it a repeating loop."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Seed to Bloom Breathing",
      prompt:
        "Crouch down small like a seed. As you breathe in slowly, rise and 'grow' — reach your arms up like a stem and open your hands like a blooming flower. Breathe out and gently sway. Repeat 4 slow breaths.",
      scienceTieIn: "Slow, deep breathing brings in oxygen — the same gas a germinating seed needs to grow — and calms your nervous system so you can focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which stage of a plant's life cycle do you think is the most fragile — the one where the most seeds fail? Explain your thinking.",
      badge: { id: "seed-to-bloom-botanist", name: "Seed-to-Bloom Botanist", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
