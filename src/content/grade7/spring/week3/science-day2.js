// Grade 7 Science — Spring Expedition, Week 3 (Life Cycles), Day 2.
// Topic: the plant life cycle — seed → germination → growth → flower →
// pollination → fertilization → seed/fruit, including pollination strategies
// and alternation of generations at an introductory level.

export const springG7ScienceW3D2 = {
  id: "g7.spring.sci.w3.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Science",
  topic: "The plant life cycle",
  topicTag: "plant-life-cycle",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS1-5"],
  hook: "A flower isn't just decoration — it's a reproduction machine. Its shape, color, and scent are adaptations to attract specific pollinators, and pollination and fertilization are two DIFFERENT events. Today you trace the flowering-plant life cycle in detail and compare how different plants solve the same problem: getting pollen from one flower to another.",
  miniLesson: [
    "A flowering plant's (angiosperm) life cycle loops: seed → germination → vegetative growth → flowering → pollination → fertilization → fruit with new seeds → and around again. Pollination and fertilization are separate steps.",
    "POLLINATION is the transfer of pollen to a flower's stigma. FERTILIZATION is when a sperm cell from the pollen unites with an egg cell inside the ovule. Pollination must happen first, but fertilization is what actually forms the seed.",
    "Plants use different pollination STRATEGIES as adaptations. Bright, scented, nectar-rich flowers attract animal pollinators (bees, birds); dull, scentless flowers with lots of light pollen rely on wind. Each is a trade-off between reliability and energy cost."
  ],
  workedExample: {
    prompt: "A cherry tree has showy white blossoms with nectar; a grass plant has small green flowers and huge amounts of light pollen. Predict each plant's pollinator strategy and explain why pollination alone doesn't guarantee a seed.",
    steps: [
      "The cherry's showy, scented, nectar-rich blossoms are adapted to attract animal pollinators like bees — animal pollination.",
      "The grass's dull flowers and abundant light pollen are adapted to be carried by wind — wind pollination.",
      "In both, pollination only DELIVERS pollen to the stigma; it does not yet form a seed.",
      "A seed forms only after FERTILIZATION, when a sperm cell from the pollen unites with the egg in the ovule. So pollination is necessary but not sufficient — fertilization must follow."
    ],
    answer: "Cherry = animal (insect) pollination; grass = wind pollination. Pollination just delivers pollen; a seed forms only after fertilization unites sperm and egg."
  },
  items: [
    {
      id: "g7.spring.sci.w3.d2.q1",
      type: "multiple_choice",
      stem: "What is the key difference between POLLINATION and FERTILIZATION in a flowering plant?",
      choices: [
        "They are two names for the same event",
        "Pollination transfers pollen to the stigma; fertilization is when sperm and egg cells actually unite",
        "Fertilization happens first, then pollination",
        "Pollination forms the seed; fertilization waters the plant"
      ],
      answerIndex: 1,
      explanation: "Pollination is the delivery of pollen to the stigma; fertilization is the later union of a sperm cell (from the pollen) with the egg cell in the ovule, which is what forms the seed.",
      hintLadder: [
        "One is about MOVING pollen; the other is about cells JOINING.",
        "Which one actually forms the seed?",
        "Pollination delivers pollen; fertilization unites sperm and egg."
      ],
      misconceptionsTargeted: ["pollination-equals-fertilization"]
    },
    {
      id: "g7.spring.sci.w3.d2.q2",
      type: "multiple_choice",
      stem: "A flower is dull green, has no scent, produces no nectar, and releases huge clouds of very light pollen. What pollination strategy is it MOST adapted for, and why?",
      choices: [
        "Bird pollination, because birds like green",
        "Wind pollination, because light pollen and no need to attract animals fit wind dispersal",
        "Water pollination, because it has no scent",
        "Self-pollination only, because it has no flower"
      ],
      answerIndex: 1,
      explanation: "Dull, scentless, nectarless flowers with abundant light pollen are classic wind-pollination adaptations — they invest in producing lots of easily carried pollen rather than in attracting animals.",
      hintLadder: [
        "It spends no energy attracting animals — so what carries the pollen?",
        "Lots of light pollen and no scent point to a non-animal carrier.",
        "These are adaptations for WIND pollination."
      ]
    },
    {
      id: "g7.spring.sci.w3.d2.q3",
      type: "multiple_choice",
      stem: "Which sequence correctly orders these events in a flowering plant's life cycle?",
      choices: [
        "Germination → pollination → fertilization → seed → flowering",
        "Seed → germination → growth → flowering → pollination → fertilization → new seed",
        "Flowering → seed → germination → pollination → fertilization",
        "Fertilization → pollination → germination → flowering → seed"
      ],
      answerIndex: 1,
      explanation: "The correct loop is seed → germination → vegetative growth → flowering → pollination → fertilization → new seed (in fruit), which then restarts the cycle.",
      hintLadder: [
        "Start with a seed and end with a new seed.",
        "Flowering comes before pollination, and pollination before fertilization.",
        "Seed → germinate → grow → flower → pollinate → fertilize → new seed."
      ]
    },
    {
      id: "g7.spring.sci.w3.d2.q4",
      type: "short_answer",
      stem: "Describe the flowering-plant life cycle in order, and be sure to distinguish pollination from fertilization. Explain how the cycle repeats.",
      rubric: {
        level3: "Lists the stages in correct order (seed → germination → growth → flowering → pollination → fertilization → new seed) AND correctly distinguishes pollination (pollen delivered to stigma) from fertilization (sperm + egg unite to form the seed) AND explains new seeds restart the cycle.",
        level2: "Order mostly correct but the pollination/fertilization distinction is unclear, or the repeat link is weak.",
        level1: "Stages out of order or no distinction and no cycle explanation."
      },
      exemplar: "A seed germinates and grows into a mature plant that forms flowers. During pollination, pollen is delivered to a flower's stigma. Then, during fertilization, a sperm cell from the pollen unites with the egg cell in the ovule — that is what actually forms a seed, which develops inside a fruit. Those new seeds are dispersed, germinate, and grow into new plants, so the cycle loops around and repeats.",
      hintLadder: [
        "Start with the seed and end with a new seed.",
        "Be explicit: pollination delivers pollen; fertilization joins sperm and egg.",
        "Explain how the new seeds restart the whole loop."
      ]
    },
    {
      id: "g7.spring.sci.w3.d2.q5",
      type: "short_answer",
      stem: "Animal-pollinated flowers spend energy making nectar, scent, and colorful petals, while wind-pollinated plants make huge amounts of pollen. Explain the TRADE-OFF each strategy represents.",
      rubric: {
        level3: "Explains that animal pollination is more targeted/reliable per grain but costs energy on nectar/scent/petals; wind pollination avoids attracting animals but is wasteful/random, so it needs enormous pollen quantities — framing both as cost-vs-reliability trade-offs.",
        level2: "Describes one strategy's cost or benefit but doesn't clearly frame the trade-off for both.",
        level1: "No real trade-off reasoning."
      },
      exemplar: "Animal-pollinated flowers invest energy in nectar, scent, and bright petals, but they get a payoff: a pollinator carries pollen fairly directly to another flower of the same kind, so each pollen grain has a good chance of reaching a target. Wind-pollinated plants skip that cost — no nectar or showy petals — but wind is random, so most pollen lands nowhere useful. To compensate, they must produce enormous amounts of light pollen. So it's a trade-off: pay to be targeted, or be cheap but wasteful.",
      hintLadder: [
        "What does each strategy 'spend' its energy on?",
        "Animal pollination is targeted but costly; wind is cheap but random.",
        "Frame both as a cost-versus-reliability trade-off."
      ]
    }
  ],
  reflectionPrompt: "Many crops you eat depend on animal pollinators. If pollinators declined, which pollination strategy — animal or wind — would leave a plant more vulnerable, and why?",
  misconceptionBank: [
    {
      id: "pollination-equals-fertilization",
      label: "Thinks pollination and fertilization are the same event",
      description: "Assumes that once pollen lands on a flower, a seed is automatically formed, conflating the delivery of pollen with the union of sperm and egg.",
      coachMove: "Separate the two steps: pollination is delivery (pollen to stigma); fertilization is the union of sperm and egg in the ovule that actually forms the seed. Pollination can happen without fertilization succeeding."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Energy Bill of a Flower",
      prompt:
        "A wind-pollinated pine can release billions of pollen grains in a season, while a bee-pollinated apple flower makes far less pollen but offers sugary nectar. Why would two plants 'solve' pollination in such opposite ways — one by mass-producing pollen, the other by bribing insects?",
      answer:
        "Each is a trade-off. Wind pollination is random, so a plant must flood the air with pollen to get a few grains to land on the right flower — cheap per grain but wasteful. Animal pollination is more targeted, so the plant can make less pollen, but it must 'pay' the pollinator with nectar and invest in scent and color. Different strategies, same goal: getting pollen to another flower.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pollination Strategy Poster",
      challenge:
        "Design a poster (or start a real seed-sprouting experiment) showing a plant's full life cycle AND comparing two pollination strategies. Label seed, germination, growth, flower, pollination, fertilization, and new seed, and add a side-by-side of an animal-pollinated vs. a wind-pollinated flower with the adaptations of each.",
      materials: ["Paper & markers", "OPTIONAL: a bean seed, cup, and damp paper towel to watch real germination"],
      steps: [
        "Draw or plant a seed and label germination.",
        "Show growth, flowering, then label pollination AND fertilization as separate steps.",
        "Add a comparison: one animal-pollinated flower and one wind-pollinated flower with their adaptations.",
        "Draw an arrow looping new seeds back to the start of the cycle."
      ],
      deliverable: "A labeled life-cycle poster distinguishing pollination from fertilization, plus a side-by-side comparison of two pollination strategies.",
      choiceBoard: [
        "Draw the life-cycle poster with the pollination-strategy comparison.",
        "Start a real bean-in-a-cup experiment and journal germination day by day.",
        "Write a persuasive 'ad' from a flower recruiting its ideal pollinator, listing the perks it offers."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plant Cycle Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w3.d2.arena1",
          type: "multiple_choice",
          stem: "A gardener's squash plants flower and are visited by bees, but she sprays an insecticide that also kills bees, and afterward the flowers still fail to form squash. Which step of the life cycle is now most likely failing, and why?",
          choices: [
            "Germination, because the seeds never sprouted",
            "Pollination, because without bees pollen isn't carried between flowers, so fertilization can't occur and no fruit forms",
            "Leaf growth, because insecticide stops photosynthesis",
            "Seed dormancy, because the seeds are asleep"
          ],
          answerIndex: 1,
          explanation: "The plants germinated and flowered, but killing the bees removed the pollinator. Without pollination, fertilization can't happen, so no seeds or fruit (squash) form.",
          hintLadder: [
            "The plants grew and flowered — so those steps worked.",
            "What did removing the bees interrupt?",
            "No pollinator → no pollination → no fertilization → no fruit."
          ]
        },
        {
          id: "g7.spring.sci.w3.d2.arena2",
          type: "short_answer",
          stem: "A student says: 'As soon as pollen lands on a flower, a seed is made.' Correct this statement using the difference between pollination and fertilization, and explain why a flower could be pollinated but still make no seed.",
          rubric: {
            level3: "Explains that pollen landing on the stigma is only pollination (delivery); a seed forms only after fertilization, when a sperm cell from the pollen unites with the egg in the ovule — AND gives a reason pollination could occur without fertilization (wrong species pollen, damaged pollen, no pollen tube reaching the ovule, etc.).",
            level2: "States the pollination/fertilization distinction but gives no valid reason it could fail after pollination.",
            level1: "Agrees with the student or shows no understanding of the two steps."
          },
          exemplar: "Pollen landing on the stigma is only pollination — the delivery step. A seed forms only after fertilization, when a sperm cell grows down from the pollen through a pollen tube and unites with the egg cell in the ovule. A flower could be pollinated but make no seed if, for example, the pollen was from the wrong species, the pollen was damaged, or the pollen tube never reached the ovule. So pollination is necessary but not enough by itself.",
          hintLadder: [
            "Is 'pollen landing' the same as 'sperm meeting egg'?",
            "Name the step that actually forms the seed.",
            "Give a reason fertilization might fail even after pollination happens."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Seed to Bloom Breathing",
      prompt:
        "Crouch small like a seed. Inhaling slowly, rise and 'grow' — reach your arms up like a stem and open your hands like a blooming flower. As you exhale, imagine a pollinator arriving and pollen transferring. Repeat 4 slow, full breaths.",
      scienceTieIn: "Slow, deep breathing brings in oxygen — the same gas a germinating seed needs to respire and grow — and steadies your nervous system so you can concentrate on the details of the cycle.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You learned pollination and fertilization are separate steps. Which step do you think is more 'at risk' of failing in the real world — and what could disrupt it?",
      badge: { id: "g7-spring-pollination-strategist", name: "Pollination Strategist", emoji: "🌸" },
      estimatedMinutes: 7
    }
  }
};
