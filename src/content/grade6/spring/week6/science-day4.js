// Grade 6 Science — Spring Expedition, Week 6 (Code That Grows), Day 4.
// Topic: population growth and spread — how populations grow and what limits them.

export const springG6ScienceW6D4 = {
  id: "g6.spring.sci.w6.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Science",
  topic: "Population growth and spread",
  topicTag: "population-growth",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-1", "NGSS.MS-LS2-4"],
  hook: "In spring, populations of rabbits, frogs, and wildflowers explode — but they never grow forever. Today you learn how populations grow and what limits (food, space, water, predators) put the brakes on that growth.",
  miniLesson: [
    "A population is all the members of one species in an area. It grows when births plus arrivals outpace deaths plus departures.",
    "With plenty of resources, a population can grow fast — even exponentially, doubling as each generation reproduces (this is the early 'J-shape').",
    "Limiting factors — food, water, space, sunlight, predators, disease — slow that growth. The largest population an area can support long-term is its CARRYING CAPACITY."
  ],
  workedExample: {
    prompt: "A pond has 4 frogs. If the population doubles each spring and nothing limits it, how many frogs after 3 springs?",
    steps: [
      "Spring 1: 4 × 2 = 8.",
      "Spring 2: 8 × 2 = 16.",
      "Spring 3: 16 × 2 = 32.",
      "But in a REAL pond, limited food and space would eventually slow this down."
    ],
    answer: "32 frogs (if nothing limits growth)"
  },
  items: [
    {
      id: "g6.spring.sci.w6.d4.q1",
      type: "multiple_choice",
      stem: "What is a LIMITING FACTOR for a population?",
      choices: [
        "Anything that makes a population grow faster",
        "The number of species in an ecosystem",
        "A resource or condition (like food or space) that slows or caps population growth",
        "The color of an animal"
      ],
      answerIndex: 2,
      explanation: "A limiting factor — food, water, space, predators, disease — restricts how large a population can grow.",
      hintLadder: [
        "The word 'limiting' means it puts a limit on something.",
        "Think of what a growing population could run out of.",
        "Food, water, and space are classic limiting factors."
      ]
    },
    {
      id: "g6.spring.sci.w6.d4.q2",
      type: "numeric",
      stem: "A wildflower patch has 5 plants and DOUBLES each season with no limits. How many plants after 4 seasons?",
      answer: 80,
      tolerance: 0,
      unit: "plants",
      hintLadder: [
        "Double the count each season, starting at 5.",
        "5 → 10 → 20 → 40 → 80.",
        "Four doublings of 5 gives 80."
      ],
      explanation: "Doubling four times: 5 → 10 → 20 → 40 → 80 plants."
    },
    {
      id: "g6.spring.sci.w6.d4.q3",
      type: "multiple_choice",
      stem: "What is CARRYING CAPACITY?",
      choices: [
        "The number of babies born in one spring",
        "The number of predators in an area",
        "The speed a population grows at first",
        "The largest population an environment can support long-term with its resources"
      ],
      answerIndex: 3,
      explanation: "Carrying capacity is the maximum population an area's food, water, and space can sustain over time.",
      hintLadder: [
        "It's about how MANY the environment can 'carry' or hold.",
        "Think of the ceiling set by available resources.",
        "It's the long-term maximum the area can support."
      ],
      misconceptionsTargeted: ["populations-grow-forever"]
    },
    {
      id: "g6.spring.sci.w6.d4.q4",
      type: "multiple_choice",
      stem: "A rabbit population grows fast in spring, then levels off in summer. What most likely happened?",
      choices: [
        "Limiting factors like food, space, or predators slowed the growth as the population neared carrying capacity",
        "The rabbits stopped reproducing for no reason",
        "The rabbits turned into a different species",
        "Growth always stops exactly halfway through the year"
      ],
      answerIndex: 0,
      explanation: "As a population grows, resources get scarcer and predators/disease increase, pushing growth toward the carrying-capacity ceiling.",
      hintLadder: [
        "What runs low when a population gets large?",
        "More rabbits means more competition for food and space.",
        "Limiting factors slow the growth as it nears carrying capacity."
      ]
    },
    {
      id: "g6.spring.sci.w6.d4.q5",
      type: "short_answer",
      stem: "A new spring pond starts with a few water plants that spread quickly. Name TWO limiting factors that would eventually stop the plants from covering the whole pond, and explain how each one limits them.",
      rubric: {
        level3: "Names two valid limiting factors (e.g. sunlight, space, nutrients, herbivores) AND explains how each restricts growth.",
        level2: "Names two factors but explains only one, or one factor is weakly justified.",
        level1: "Names fewer than two valid factors or gives no explanation."
      },
      exemplar: "Sunlight limits them because plants shading each other can't all photosynthesize. Space limits them because once the surface is full, new plants have nowhere to grow. Nutrients in the water could also run low.",
      hintLadder: [
        "What do water plants need that could run out?",
        "Think about sunlight, space, and nutrients.",
        "Explain how each one puts a cap on growth."
      ]
    }
  ],
  reflectionPrompt: "Populations grow fast at first but level off at carrying capacity. What is one thing that could RAISE a pond's carrying capacity for frogs?",
  misconceptionBank: [
    {
      id: "populations-grow-forever",
      label: "Thinks populations grow forever",
      description: "Assumes fast early growth continues without limit, ignoring carrying capacity.",
      coachMove: "Ask what the population would run OUT of first — food, space, or water — and how that caps the numbers."
    },
    {
      id: "more-space-only-limit",
      label: "Thinks space is the only limiting factor",
      description: "Focuses only on room and forgets food, water, sunlight, predators, and disease.",
      coachMove: "List several needs of the species and check which could run short as numbers climb."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Doubling Pond",
      prompt:
        "A patch of lily pads doubles its coverage every day. On day 30 it covers the WHOLE pond. On which day was the pond exactly HALF covered? Think before you answer — the number surprises most people!",
      answer:
        "Day 29! If it doubles every day and is full on day 30, the day before (29) it was half — one more doubling fills it. That's how fast exponential growth moves at the end.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Population Growth Curve",
      challenge:
        "Model a spring population (rabbits, frogs, or wildflowers). Start with a small number and let it grow fast, then draw where limiting factors kick in and flatten it out at a carrying capacity. Label the limiting factors on your curve.",
      materials: ["Paper or graph paper, plus a pencil"],
      steps: [
        "Pick a species and a small starting population.",
        "Sketch the population climbing fast (the early boom).",
        "Draw the curve leveling off and label the carrying-capacity line.",
        "Write 2–3 limiting factors near where the curve flattens."
      ],
      deliverable: "A labeled population-growth curve showing the boom, the leveling-off, and the limiting factors.",
      choiceBoard: [
        "Draw and label the S-shaped growth curve.",
        "Make a data table of the population over 6 seasons, boom then level.",
        "Write a short 'diary of a pond' where the frogs boom, then hit their limits."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Population Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w6.d4.arena1",
          type: "numeric",
          stem: "A frog population doubles each spring with no limits, starting at 3. After 5 springs, how many frogs?",
          answer: 96,
          tolerance: 0,
          unit: "frogs",
          hintLadder: [
            "Double the count each spring, starting at 3.",
            "3 → 6 → 12 → 24 → 48 → 96.",
            "Five doublings of 3 gives 96."
          ],
          explanation: "Doubling five times: 3 → 6 → 12 → 24 → 48 → 96 frogs."
        },
        {
          id: "g6.spring.sci.w6.d4.arena2",
          type: "short_answer",
          stem: "A pond's frog population is growing fast toward its carrying capacity of 100. Predict what happens to the population's GROWTH RATE as it nears 100, and explain WHY using limiting factors.",
          rubric: {
            level3: "Predicts growth rate slows/levels off near 100 AND explains with limiting factors (food, space, competition) increasing as numbers rise.",
            level2: "Says growth slows but the limiting-factor reasoning is weak or missing.",
            level1: "No clear prediction or no valid reasoning."
          },
          exemplar: "As the population nears 100, growth slows and levels off. With so many frogs, food and space run short and competition rises, so fewer new frogs survive — the limiting factors cap the population near the carrying capacity.",
          hintLadder: [
            "Does growth speed up or slow down as the pond fills?",
            "What runs short when there are almost 100 frogs?",
            "Link the slowdown to food, space, and competition."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Boom and Balance",
      prompt:
        "Act out a population: start small and crouched, then 'boom' — grow tall and spread your arms wide for 5 counts. Then feel the limits: slowly settle to a steady, balanced standing pose and hold it, breathing calmly.",
      scienceTieIn: "Your steady balanced pose is like a population at carrying capacity — holding steady instead of growing forever — and the deep breaths reset your focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Populations boom in spring but can't grow forever. What is one limiting factor you noticed in nature or your neighborhood this spring, and what does it limit?",
      badge: { id: "spring-population-pro", name: "Population Pro", emoji: "🐸" },
      estimatedMinutes: 7
    }
  }
};
