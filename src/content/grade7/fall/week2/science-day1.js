// Grade 7 Science — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 1.
// Topic: producers, consumers, decomposers, and how a food web connects them —
// pitched up to trophic levels, matter cycling, and quantitative energy flow.

export const fallG7ScienceW2D1 = {
  id: "g7.fall.sci.w2.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Food chains and food webs",
  topicTag: "food-webs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-3", "NGSS.MS-LS2-1"],
  hook: "Every organism in an autumn forest sits on a trophic level, and matter and energy move between them by strict rules. Today you don't just map the web — you reason about how energy thins and matter cycles, and predict how a disturbance ripples through multiple pathways.",
  miniLesson: [
    "Every organism occupies a trophic level: producers (level 1) fix energy from sunlight; primary consumers (level 2) eat producers; secondary and tertiary consumers sit above them. A food WEB is many overlapping chains, so most organisms occupy more than one position.",
    "Energy flows ONE WAY (sun → producers → consumers, lost as heat at each step) but MATTER cycles: decomposers return carbon, nitrogen, and minerals from dead tissue to the soil, where producers reuse them. Energy is not recycled; matter is.",
    "Because roughly 90% of energy is lost at each transfer, higher trophic levels support far less biomass. This is why a web rests on a wide producer base and narrows toward top predators."
  ],
  workedExample: {
    prompt: "In a marsh web: cattails → grasshoppers → frogs → herons, and herons also eat fish that eat grasshoppers. Identify each organism's trophic level, and name one organism that occupies TWO levels.",
    steps: [
      "Cattails make their own food → trophic level 1 (producer).",
      "Grasshoppers eat cattails → level 2 (primary consumer). Frogs and fish both eat grasshoppers → level 3 (secondary consumers).",
      "Herons eat frogs (level 3), placing the heron at level 4 there — but herons ALSO eat fish (level 3), so the heron sits at level 4 on both those pathways.",
      "The heron occupies more than one CHAIN at the same level; if herons also ate grasshoppers directly they'd occupy level 3 AND level 4. Overlapping pathways are what make it a web, not a chain."
    ],
    answer: "Cattails=1, grasshoppers=2, frogs & fish=3, herons=4. The heron feeds along two chains, showing why real food webs have overlapping trophic positions."
  },
  items: [
    {
      id: "g7.fall.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "In an ecosystem, which statement about energy and matter is correct?",
      choices: [
        "Both energy and matter are recycled endlessly.",
        "Neither energy nor matter moves between organisms.",
        "Matter is lost as heat while energy is recycled by decomposers.",
        "Energy flows one way and is lost as heat, while matter cycles and is reused."
      ],
      answerIndex: 3,
      explanation: "Energy enters as sunlight and is lost as heat at each transfer (one-way), but decomposers return matter (carbon, nitrogen, minerals) to the soil for producers to reuse.",
      hintLadder: [
        "One of these two things gets recycled and the other doesn't.",
        "Decomposers return nutrients (matter) to the soil.",
        "Energy is lost as heat each step; matter cycles."
      ]
    },
    {
      id: "g7.fall.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "A bass eats minnows, and minnows eat algae. On a separate pathway, the bass also eats insect larvae that grazed on algae. What trophic level(s) does the BASS occupy?",
      choices: [
        "Only level 2 (primary consumer)",
        "Only level 4",
        "Level 3 on both pathways (secondary consumer)",
        "Level 1, because it lives in the same water as the algae"
      ],
      answerIndex: 2,
      explanation: "Algae=1, minnows and larvae both eat algae so they're level 2, and the bass eats those level-2 grazers, so the bass is a level-3 secondary consumer on both pathways.",
      hintLadder: [
        "Start at the producer (algae, level 1) and count up each pathway.",
        "Both minnows and larvae eat algae — what level are they?",
        "The bass eats level-2 organisms, so it is level 3 on both."
      ],
      misconceptionsTargeted: ["trophic-level-is-fixed-by-size"]
    },
    {
      id: "g7.fall.sci.w2.d1.q3",
      type: "numeric",
      stem: "Producers in a meadow capture 60,000 kJ of energy. Using the standard 10% transfer rule, how many kilojoules reach the SECONDARY consumers (two levels up)?",
      answer: 600,
      tolerance: 0,
      unit: "kJ",
      hintLadder: [
        "Each level up keeps about 10% (×0.10) of the level below.",
        "Producers → primary consumers is one ×0.10 step; primary → secondary is another.",
        "60,000 × 0.10 = 6,000, then 6,000 × 0.10 = 600 kJ."
      ],
      explanation: "60,000 × 0.10 = 6,000 kJ to primary consumers, then 6,000 × 0.10 = 600 kJ to secondary consumers."
    },
    {
      id: "g7.fall.sci.w2.d1.q4",
      type: "short_answer",
      stem: "In the chain oak → deer → wolf, wolves are removed. Predict the effect on the deer AND on the oaks, and explain the reasoning connecting the two steps.",
      rubric: {
        level3: "Predicts deer population rises (predator removed) AND that oaks/seedlings decline from overgrazing, explicitly linking the two steps with cause-effect reasoning (a trophic cascade).",
        level2: "Correctly predicts deer increase and oak decline but the two steps aren't clearly linked, OR only one step is reasoned.",
        level1: "Incorrect prediction or no causal reasoning."
      },
      exemplar: "Removing wolves takes the pressure off deer, so the deer population grows. More deer graze more heavily on oak seedlings and saplings, so fewer young oaks survive and the oak population declines over time. The loss at the top ripples down two levels — a trophic cascade.",
      hintLadder: [
        "Wolves were controlling the deer numbers — what happens without them?",
        "More deer means more of what pressure on the oaks?",
        "Connect the predator loss to the producer decline in one chain of reasoning."
      ]
    },
    {
      id: "g7.fall.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Explain how a single carbon atom could move from soil, through THREE organisms at different trophic levels, and back to the soil. Name the roles involved.",
      rubric: {
        level3: "Traces carbon from soil → producer (uptake/photosynthesis) → consumer(s) at two levels via eating → decomposer returning it to soil, correctly naming roles and showing matter cycling.",
        level2: "Traces a mostly correct path but skips a role, mislabels one, or omits the return to soil.",
        level1: "No coherent cycle or misidentifies producers/consumers/decomposers."
      },
      exemplar: "A producer like an oak pulls carbon from air/soil to build a leaf (level 1). A caterpillar eats the leaf, taking in that carbon (level 2). A bird eats the caterpillar (level 3). When the bird dies, decomposers like fungi break down its tissue and return the carbon to the soil, where a plant can use it again — matter cycles even though energy does not.",
      hintLadder: [
        "Start with a producer taking carbon in.",
        "Move it up two trophic levels by having organisms eat one another.",
        "End with a decomposer returning the carbon to the soil."
      ]
    }
  ],
  reflectionPrompt: "Trace one ingredient from a meal you ate today back to a producer. Then estimate how many trophic transfers its energy went through before it reached you — and how much of the sun's original energy that left.",
  misconceptionBank: [
    {
      id: "trophic-level-is-fixed-by-size",
      label: "Thinks trophic level depends on the animal's size",
      description: "Assumes bigger animals are automatically higher on the web, rather than assigning level by what an organism eats.",
      coachMove: "Point to a whale (huge) eating plankton (level 1) — the whale is a low-level consumer despite its size. Level is set by diet, not body size."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Two Paths, One Predator",
      prompt:
        "An autumn hawk eats mice, and the mice eat acorns. But the hawk ALSO eats snakes — and those snakes also eat mice. Does the hawk sit on just one trophic level, or more than one? Reason it out before you decide.",
      answer:
        "More than one! Along the acorn → mouse → hawk chain the hawk is at level 3. But along acorn → mouse → snake → hawk it's at level 4. Real webs give predators multiple trophic positions at once — that overlap is exactly what turns a chain into a web.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map a Trophic-Level Food Web",
      challenge:
        "Build a food web for a fall forest that includes at least one producer, two primary consumers, two secondary consumers, and one decomposer. Label each organism with its trophic level(s), draw energy-flow arrows (from eaten TO eater), and mark at least one organism that occupies two levels.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "List organisms and sort them into trophic levels 1–4.",
        "Draw arrows from food to feeder, showing energy direction.",
        "Add the sun feeding the producers, and a decomposer arrow returning matter to the soil.",
        "Circle one organism that sits on two different levels and explain why in a caption."
      ],
      deliverable: "A trophic-labeled food-web diagram with energy-flow arrows, a matter-cycling loop, and one multi-level organism identified.",
      choiceBoard: [
        "Draw the labeled trophic web with arrows.",
        "Build the web from collected leaves/sticks with trophic-level tags.",
        "Write a 'follow the energy' story tracing one path from sun to top predator, noting the level at each step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Food Web Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.sci.w2.d1.arena1",
          type: "numeric",
          stem: "Producers capture 250,000 kJ. Using the 10% rule, how many kilojoules reach a TERTIARY consumer (three trophic levels above the producers)?",
          answer: 250,
          tolerance: 0,
          unit: "kJ",
          hintLadder: [
            "Count the transfers: producer → primary → secondary → tertiary is three ×0.10 steps.",
            "Apply ×0.10 three times in a row.",
            "250,000 → 25,000 → 2,500 → 250 kJ."
          ],
          explanation: "250,000 × 0.10 = 25,000 → × 0.10 = 2,500 → × 0.10 = 250 kJ reaching the tertiary consumer."
        },
        {
          id: "g7.fall.sci.w2.d1.arena2",
          type: "short_answer",
          stem: "In a web, owls eat both mice (which eat seeds) and snakes (which also eat mice). A disease wipes out all the mice. Predict TWO effects and explain how the web's overlapping pathways shape the outcome.",
          rubric: {
            level3: "Predicts two logical effects (snakes decline from lost prey; owls lose BOTH a direct food and an indirect one, so decline or switch prey) AND explains how the overlap between pathways intensifies the impact.",
            level2: "Gives two effects with some reasoning, or one strong effect tied to the overlap.",
            level1: "No clear prediction or ignores the web structure."
          },
          exemplar: "Snakes lose their main prey and their numbers drop. Owls are hit twice: they lose mice directly AND lose snakes (which also depended on mice), so owl food collapses from two directions at once. Because both pathways ran through the mice, the loss hits harder than a single chain would.",
          hintLadder: [
            "Who ate the mice directly? What happens to them?",
            "Owls depend on mice AND on snakes — trace both.",
            "Explain why losing a shared prey affects a predator more than losing a single-chain prey."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Trophic-Level Freeze",
      prompt:
        "Move up the levels: sway wide like a producer (5 sec), nibble-hop like a primary consumer (5 hops), prowl like a secondary consumer (5 steps), then FREEZE tall as the top predator scanning the field. Do it twice, feeling how much smaller each higher level would be.",
      scienceTieIn: "Every move burned energy that traces back to the sun and is lost as heat — the exact one-way energy loss that thins each trophic level in a real web.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Energy flows one way but matter cycles. Where in your own day did something get 'used up and lost' versus 'reused and cycled'? Give one example of each.",
      badge: { id: "g7-fall-trophic-tracker", name: "Trophic Tracker", emoji: "🕸️" },
      estimatedMinutes: 7
    }
  }
};
