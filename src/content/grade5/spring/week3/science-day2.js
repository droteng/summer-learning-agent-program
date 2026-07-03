// Grade 5 Science — Spring Expedition, Week 3 (Life Cycles), Day 2.
// Topic: the plant life cycle — seed → germination → growth → flower →
// pollination → seed. Grade 5 counterpart of springG6ScienceW3D2, pitched
// down with shorter passages, vocab support, and more scaffolding.

export const springG5ScienceW3D2 = {
  id: "g5.spring.sci.w3.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Science",
  topic: "The plant life cycle",
  topicTag: "plant-life-cycle",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-LS1-1", "NGSS.4-LS1-1"],
  hook: "Every flower in a spring garden started as a tiny seed — and is busy making new seeds! Today you follow that loop and find out what pollination has to do with the strawberries on your plate.",
  miniLesson: [
    "A flowering plant's life cycle is a loop: seed → germination (sprouting) → growing → flower → pollination → new seeds → and around again.",
    "GERMINATION is when a seed gets water, warmth, and air, and sprouts its first roots and shoot. (Vocab: germinate = to start growing from a seed.)",
    "POLLINATION moves pollen from one flower to another (by wind, bees, or birds). This helps the flower make fruit and NEW seeds, which starts the cycle over. (Vocab: pollen = tiny powder a flower needs to make seeds.)"
  ],
  workedExample: {
    prompt: "Put the plant life cycle in order: flower, seed, grown plant, sprout (germination), pollination.",
    steps: [
      "Start with the seed.",
      "The seed germinates — it sprouts roots and a shoot.",
      "The sprout grows into a grown plant, which makes a flower.",
      "Pollination helps the flower make new seeds. Order: seed → sprout → grown plant → flower → pollination → new seed."
    ],
    answer: "seed → sprout (germination) → grown plant → flower → pollination → new seed"
  },
  items: [
    {
      id: "g5.spring.sci.w3.d2.q1",
      type: "multiple_choice",
      stem: "What is GERMINATION?",
      choices: [
        "When a flower is pollinated",
        "When a seed sprouts and starts to grow roots and a shoot",
        "When a plant drops its leaves",
        "When fruit turns ripe"
      ],
      answerIndex: 1,
      explanation: "Germination is the sprouting stage — the seed uses water, warmth, and air to grow its first roots and shoot.",
      hintLadder: [
        "It's the very first growing stage after the seed.",
        "Think about what a seed needs to 'wake up' and sprout.",
        "Germination = the seed sprouting."
      ]
    },
    {
      id: "g5.spring.sci.w3.d2.q2",
      type: "multiple_choice",
      stem: "Which three things does a seed most need to GERMINATE (sprout)?",
      choices: [
        "Sunlight, soil, and fruit",
        "Water, warmth, and air",
        "Pollen, wind, and bees",
        "Flowers, seeds, and roots"
      ],
      answerIndex: 1,
      explanation: "A seed needs water, warmth, and air to start sprouting. Sunlight matters more later, once the plant has leaves.",
      hintLadder: [
        "A seed can start sprouting even in the dark underground.",
        "Think about water, warm temperature, and air.",
        "Water, warmth, and air get germination going."
      ],
      misconceptionsTargeted: ["seeds-need-light-to-sprout"]
    },
    {
      id: "g5.spring.sci.w3.d2.q3",
      type: "multiple_choice",
      stem: "Why is POLLINATION so important in a plant's life cycle?",
      choices: [
        "It waters the plant",
        "It helps the flower make new seeds",
        "It makes the leaves greener",
        "It helps the seed sprout"
      ],
      answerIndex: 1,
      explanation: "Pollination helps the flower make fruit and new seeds — which starts the whole cycle again.",
      hintLadder: [
        "Pollination moves pollen between flowers.",
        "What can a pollinated flower then make?",
        "New SEEDS — which keep the cycle going."
      ]
    },
    {
      id: "g5.spring.sci.w3.d2.q4",
      type: "short_answer",
      stem: "List the main stages of a plant's life cycle IN ORDER, and tell how the cycle repeats. (Sentence frame: 'First a seed ___. Then it ___. Next it ___. After the flower is pollinated, it makes ___, which start the cycle again.')",
      rubric: {
        level3: "Lists the stages in the correct order (seed → sprout/germinate → grow → flower → pollination → new seed) AND explains the new seeds start the cycle again.",
        level2: "Gets most stages in order but the 'repeats' part is weak or one stage is out of place.",
        level1: "Stages are out of order or the cycle isn't explained."
      },
      exemplar: "First a seed sprouts (germinates). Then it grows into a plant with leaves. Next it makes a flower. After the flower is pollinated, it makes new seeds, and those seeds sprout to start the whole cycle again.",
      hintLadder: [
        "Start with the seed and end with a new seed.",
        "Don't forget sprouting (germination) and pollination.",
        "Explain what the new seeds do to repeat the loop."
      ]
    },
    {
      id: "g5.spring.sci.w3.d2.q5",
      type: "short_answer",
      stem: "Bees, butterflies, and wind can all move pollen. Explain how a bee helps a plant finish its life cycle.",
      rubric: {
        level3: "Explains the bee carries pollen from flower to flower, which helps the flower make new seeds, so the plant can make new plants and keep its cycle going.",
        level2: "Mentions the bee moving pollen but doesn't connect it to new seeds / keeping the cycle going.",
        level1: "No clear link between the bee and making new plants."
      },
      exemplar: "When a bee visits flowers for nectar, pollen sticks to its body and rubs off on the next flower. That pollination helps the flower make new seeds, so the plant can make new plants and keep its life cycle going.",
      hintLadder: [
        "What sticks to the bee as it visits a flower?",
        "Where does that pollen go next?",
        "Connect moving pollen to making new seeds."
      ]
    }
  ],
  reflectionPrompt: "Look at a fruit or vegetable you eat. It grew from a pollinated flower — can you picture the flower and the seed it came from?",
  misconceptionBank: [
    {
      id: "seeds-need-light-to-sprout",
      label: "Thinks seeds need sunlight to sprout",
      description: "Thinks a seed must have light to sprout, but many seeds sprout underground in the dark and need light only later to make food.",
      coachMove: "Point out that seeds sprout underground where it's dark, using food stored inside them. Light becomes important once leaves grow and start making food."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "From One Seed",
      prompt:
        "One sunflower can make over 1,000 seeds in a single flower! If even a few of those seeds sprout next spring, what could happen to the number of sunflowers over a few years? Why do you think a plant makes SO many seeds?",
      answer:
        "A plant makes lots of seeds because most won't survive — they get eaten, land on bad soil, or dry out. Making many seeds helps make sure at least a few sprout and keep the life cycle going, so there can be lots more sunflowers over time.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Grow-a-Seed Life Cycle Poster",
      challenge:
        "Make a poster (or start a real seed-sprouting cup) that shows a plant's whole life cycle. Label seed, sprout, growing, flower, pollination, and new seed — with arrows looping the cycle back around.",
      materials: ["Paper & markers", "OPTIONAL: a bean seed, cup, and damp paper towel to watch real sprouting"],
      steps: [
        "Draw or plant a seed and label the sprouting (germination) stage.",
        "Show the plant growing leaves and making a flower.",
        "Add a bee, butterfly, or wind moving pollen at the flower.",
        "Show new seeds and draw an arrow looping back to the start."
      ],
      deliverable: "A labeled plant life-cycle poster (or a real sprouting-seed cup) showing all six stages looping back around.",
      choiceBoard: [
        "Draw the six-stage life-cycle poster with a pollinator.",
        "Start a real bean-in-a-cup experiment and journal what you see each day.",
        "Write a short story from the point of view of one seed's journey."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plant Cycle Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w3.d2.arena1",
          type: "multiple_choice",
          stem: "A gardener's squash plants grow pretty flowers but never make any squash. Which part of the life cycle most likely did NOT happen?",
          choices: [
            "Sprouting (germination)",
            "Pollination",
            "Leaf growth",
            "Root growth"
          ],
          answerIndex: 1,
          explanation: "Flowers that never turn into fruit usually weren't pollinated — without pollination the flower can't make fruit and seeds.",
          hintLadder: [
            "The plant clearly sprouted and grew — it made flowers.",
            "What step turns a flower into a fruit with seeds?",
            "No fruit forming points to no pollination."
          ]
        },
        {
          id: "g5.spring.sci.w3.d2.arena2",
          type: "short_answer",
          stem: "A student says, 'A plant's life cycle is done once it grows a flower.' Explain why that is NOT true, using the idea of the cycle repeating.",
          rubric: {
            level3: "Explains the flower is not the end — it must be pollinated to make new seeds, and those seeds sprout to start a new cycle, so the life cycle is a loop, not a line.",
            level2: "Says the flower isn't the end but doesn't fully connect to new seeds / repeating.",
            level1: "Agrees with the student or gives no cycle reason."
          },
          exemplar: "The flower is not the end. It still has to be pollinated so it can make new seeds. Those seeds then sprout into new plants, so the life cycle loops back around and repeats. It's a cycle, not a straight line that stops at the flower.",
          hintLadder: [
            "What has to happen to the flower next?",
            "What does a pollinated flower make?",
            "Explain how those seeds make it a repeating loop."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Seed to Bloom Breathing",
      prompt:
        "Crouch down small like a seed. As you breathe in slowly, rise and 'grow' — reach your arms up like a stem and open your hands like a blooming flower. Breathe out and gently sway. Do 4 slow breaths.",
      scienceTieIn: "Slow, deep breathing brings in air with oxygen — the same air a sprouting seed needs to grow — and helps calm you so you can focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which stage of a plant's life cycle do you think is the hardest for a seed to get through? Explain your thinking.",
      badge: { id: "g5-spring-seed-sprouter", name: "Seed Sprouter", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
