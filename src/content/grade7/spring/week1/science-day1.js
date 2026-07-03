// Grade 7 Science — Spring Expedition, Week 1 (Spring Awakening), Day 1.
// Topic: what living things need to grow — pitched up to Grade 7 with matter &
// energy cycling, limiting factors, and interpreting growth data as evidence.

export const springG7ScienceW1D1 = {
  id: "g7.spring.sci.w1.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Science",
  topic: "What living things need to grow",
  topicTag: "needs-of-living-things",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-6", "NGSS.MS-LS1-7"],
  hook: "Spring is a signal, but a signal alone doesn't build a plant. This year you go under the hood: where do the atoms in a new leaf actually come from, and what happens when just ONE need runs short? Today you track matter and energy as a seed turns spring's light and air into new tissue.",
  miniLesson: [
    "In photosynthesis, plants use light energy to combine carbon dioxide (from air) and water into sugars. Most of a growing plant's added mass comes from the carbon in that CO2 — the plant is literally built out of air and water, not soil.",
    "Growth depends on the LIMITING FACTOR: whichever need is in shortest supply caps growth, no matter how much of everything else there is. Doubling the sunlight won't help a plant that has run out of water.",
    "A 'sign of spring' is measurable evidence of this response — bud-burst dates, sprout counts, or growth rates you can record and compare to warmth and daylight data to infer cause and effect."
  ],
  workedExample: {
    prompt: "Two identical bean plants get the same light and air. Plant X is watered daily; Plant Y is watered once and then not again. After two weeks Plant X has grown 14 cm and Plant Y has grown 2 cm. Using limiting factors, explain the difference.",
    steps: [
      "List the needs both plants share: light, air (CO2), water, soil nutrients.",
      "Identify what differs: only the water supply differs between them.",
      "For Plant Y, water became the limiting factor — once it ran short, growth stalled even though light and air were plentiful.",
      "For Plant X, no single need ran short, so growth continued near its potential.",
      "Conclusion: the 12 cm difference is evidence that water was the limiting factor for Plant Y."
    ],
    answer: "Water was the limiting factor for Plant Y — once it ran short, growth stalled, while Plant X, with no need in short supply, grew far more."
  },
  items: [
    {
      id: "g7.spring.sci.w1.d1.q1",
      type: "multiple_choice",
      stem: "A growing oak gains hundreds of kilograms of wood over years, yet the soil in its area barely drops. Where does MOST of that added mass come from?",
      choices: [
        "Minerals pulled up and stored from the soil",
        "Carbon from carbon dioxide in the air, combined with water using light energy",
        "Water alone, which hardens into wood",
        "Sunlight, which is stored directly as solid matter"
      ],
      answerIndex: 1,
      explanation: "Photosynthesis fixes carbon from atmospheric CO2 into sugars; that carbon, combined with water, is the main source of a plant's added mass — not soil.",
      hintLadder: [
        "The soil level barely changes, so the mass can't be coming mostly from soil.",
        "Think about which raw materials photosynthesis actually combines.",
        "Carbon from CO2 (air) + water, built using light energy."
      ],
      misconceptionsTargeted: ["plants-eat-soil"]
    },
    {
      id: "g7.spring.sci.w1.d1.q2",
      type: "multiple_choice",
      stem: "A seedling has plenty of light, warm soil, and rich nutrients, but its pot's soil has completely dried out. What is the LIMITING FACTOR for its growth right now?",
      choices: [
        "Light — it always limits growth first",
        "Water — the one need currently in shortest supply",
        "Nutrients — because there can never be enough",
        "Nothing is limiting; it will grow at full speed"
      ],
      answerIndex: 1,
      explanation: "The limiting factor is whichever need is in shortest supply. Here everything is plentiful except water, so water caps the growth.",
      hintLadder: [
        "A limiting factor is the resource that runs short first.",
        "Which single need is missing here while the others are fine?",
        "The soil is dry — water is the limiting factor."
      ],
      misconceptionsTargeted: ["more-of-one-always-helps"]
    },
    {
      id: "g7.spring.sci.w1.d1.q3",
      type: "multiple_choice",
      stem: "A student claims: 'Adding more fertilizer will ALWAYS make any plant grow faster.' Why is this reasoning flawed?",
      choices: [
        "Fertilizer is never used by plants",
        "Growth is capped by whichever need is scarcest, so extra nutrients don't help if light or water is what's limiting",
        "Plants only grow at night, so daytime fertilizer is wasted",
        "Fertilizer replaces a plant's need for light"
      ],
      answerIndex: 1,
      explanation: "Because of limiting factors, adding more of a need that is already plentiful does nothing; only relieving the scarcest need increases growth.",
      hintLadder: [
        "Think about what happens if the plant already has enough nutrients.",
        "Adding more of a need that isn't scarce won't change the cap.",
        "Only the limiting (scarcest) factor controls the growth rate."
      ]
    },
    {
      id: "g7.spring.sci.w1.d1.q4",
      type: "numeric",
      stem: "In a controlled trial, a class plants 6 bean seeds in each of 5 cups at full light, and another 6 seeds in each of 3 cups kept in shade. How many bean seeds are in the FULL-LIGHT group?",
      answer: 30,
      tolerance: 0,
      unit: "seeds",
      hintLadder: [
        "Only count the full-light cups, not the shade cups.",
        "Multiply seeds per cup by the number of full-light cups.",
        "6 seeds × 5 cups = 30 seeds."
      ],
      explanation: "The full-light group is 6 seeds/cup × 5 cups = 30 seeds. (The shade group is a separate 6 × 3 = 18 seeds.)"
    },
    {
      id: "g7.spring.sci.w1.d1.q5",
      type: "short_answer",
      stem: "A gardener grows two spring seedlings identically, but gives Seedling A normal air and seals Seedling B in a clear jar with no air exchange, both in bright light. Predict what happens to each and explain the difference using matter and energy.",
      rubric: {
        level3: "Predicts A grows healthy while B's growth stalls, AND explains B runs out of carbon dioxide, so it cannot keep making sugars in photosynthesis even with light.",
        level2: "Predicts a difference but the reasoning about CO2 as a raw material for photosynthesis is thin or partly off.",
        level1: "No clear prediction, or air is not connected to photosynthesis/growth."
      },
      exemplar: "Seedling A keeps growing because it has a steady supply of carbon dioxide from the air, which it combines with water using light to build sugars. Seedling B has light but is sealed, so once it uses up the carbon dioxide in the jar it can't make new sugars, and its growth stalls even though it has plenty of light.",
      hintLadder: [
        "What raw material does the sealed jar cut off?",
        "Photosynthesis needs CO2 from air as a building block, not just light.",
        "Explain what running out of CO2 does to sugar-making and growth."
      ]
    }
  ],
  reflectionPrompt: "Pick one living thing waking up near you this spring. If you could measure just ONE thing about its environment to predict how well it will grow, what would you measure — and why might that be its limiting factor?",
  misconceptionBank: [
    {
      id: "plants-eat-soil",
      label: "Thinks plants 'eat' soil for their mass",
      description: "Believes a plant's added mass comes from absorbing and eating soil, rather than from carbon fixed out of the air plus water.",
      coachMove: "Have the student weigh the idea against evidence: the soil in a pot barely drops even as a plant gains large mass. Ask where the extra kilograms come from if not the soil — the answer is carbon from CO2 in the air."
    },
    {
      id: "more-of-one-always-helps",
      label: "Thinks more of any one need always speeds growth",
      description: "Assumes adding more light, water, or fertilizer always increases growth, ignoring that only the scarcest (limiting) factor controls the rate.",
      coachMove: "Ask: 'If the plant already has enough water, will adding even more water help?' Guide them to see that only relieving the scarcest need changes the growth cap."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Where Did the Wood Come From?",
      prompt:
        "A tree seed that weighed less than a paperclip grows into a trunk you can't wrap your arms around. The soil around it barely dropped over all those years. So where did all that heavy wood actually come from — and what does spring have to do with it?",
      answer:
        "Most of the wood is carbon pulled out of the AIR as carbon dioxide, combined with water and built using light energy in photosynthesis. Spring's longer, brighter days and warmth crank up that sugar-making, so growth speeds up.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Limiting-Factor Experiment",
      challenge:
        "Design a fair test that could reveal which single need is limiting a spring seedling's growth. Pick ONE variable to change, hold everything else constant, and decide what you'll measure as evidence.",
      materials: ["Paper & markers, OR a drawing app", "Optional: real cups, seeds, and soil"],
      steps: [
        "Choose one need to vary (light, water, air, or nutrients) and set up at least two groups that differ only in that need.",
        "List the variables you'll keep the SAME so the test is fair.",
        "Decide exactly what you'll measure (height, leaf count, or days to sprout) and how often.",
        "Predict which group grows more and explain, in one sentence, using the idea of a limiting factor."
      ],
      deliverable: "A labeled fair-test design naming the changed variable, the controlled variables, the measurement, and a limiting-factor prediction.",
      choiceBoard: [
        "Draw and label the experiment setup with its two groups.",
        "Actually plant the two groups, photograph them, and label the controlled variables.",
        "Write a step-by-step 'protocol card' a classmate could follow to run your fair test."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Spring Awakening Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w1.d1.arena1",
          type: "numeric",
          stem: "A class records sprout counts to compare warmth. In a warm tray, 18 of 24 seeds sprout. In a cold tray, 9 of 24 seeds sprout. How many MORE seeds sprouted in the warm tray than in the cold tray?",
          answer: 9,
          tolerance: 0,
          unit: "seeds",
          hintLadder: [
            "Find each tray's sprout count, then compare.",
            "Warm = 18 sprouted; cold = 9 sprouted.",
            "18 - 9 = 9 more seeds."
          ],
          explanation: "18 warm-tray sprouts minus 9 cold-tray sprouts = 9 more sprouts in the warm tray — evidence that warmth helped sprouting."
        },
        {
          id: "g7.spring.sci.w1.d1.arena2",
          type: "short_answer",
          stem: "A rabbit and an oak both add mass this spring, but the matter and energy flow differently. Explain where each one's new body mass and usable energy come from, and name the key difference.",
          rubric: {
            level3: "States the oak builds mass from carbon (CO2 in air) and water using light energy (producer/photosynthesis), while the rabbit gets both matter and energy by eating other organisms (consumer), AND names producer vs. consumer as the key difference.",
            level2: "Describes one side correctly (e.g., the oak uses sunlight) but is vague or incomplete about the other's matter/energy source.",
            level1: "Confuses the two or gives no clear difference in where matter and energy come from."
          },
          exemplar: "The oak is a producer: it builds new mass from carbon dioxide and water and gets its energy from sunlight through photosynthesis. The rabbit is a consumer: it can't make its own food, so both the matter for its body and its energy come from eating plants like spring grass. The key difference is producer versus consumer.",
          hintLadder: [
            "Which one captures its own energy from light?",
            "Which one must eat other organisms for both matter and energy?",
            "Name the roles: producer vs. consumer."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Photosynthesis Stretch",
      prompt:
        "Curl small like a seed. As you inhale, 'take in air' and slowly rise — reach arms up like a stem catching light, spread fingers like leaves capturing the sun. As you exhale, sway and imagine sugars flowing down to your roots. Repeat the take-in-air, reach-for-light, send-down-sugar cycle 4 times, breathing deeply.",
      scienceTieIn: "Just as a plant takes in air and light to power growth, your deep breathing pulls in oxygen that your cells use to release energy — matter and energy moving through you, too.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Everything a plant becomes was once air, water, and light. Write two or three sentences: if you could 'photosynthesize' one thing this spring — turn something ordinary into growth — what would it be and how would it happen?",
      badge: { id: "g7-spring-growth-analyst", name: "Growth Analyst", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
