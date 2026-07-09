// Grade 5 Science — Spring Expedition, Week 6 (Code That Grows), Day 4.
// Topic: how populations grow and what limits them — simplified population science.
// Grade 5 depth: "grows fast vs slows down", plain-word limiting factors, small numbers.

export const springG5ScienceW6D4 = {
  id: "g5.spring.sci.w6.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Science",
  topic: "How populations grow and what limits them",
  topicTag: "population-growth",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-PS3-1"],
  hook: "In spring, groups of rabbits, frogs, and wildflowers grow fast — but they never grow forever. Today you learn how a population grows and what things (food, space, water, predators) put on the brakes.",
  miniLesson: [
    "A population is all the living things of one kind in one place, like all the frogs in a pond. It grows when more are born than die.",
    "When there is plenty of food, water, and space, a population can grow FAST — sometimes doubling as each spring adds more babies.",
    "A limiting factor is something that runs low and SLOWS the growth — like food, water, space, sunlight, or predators. When a place has all it can hold, the population stops growing and stays steady."
  ],
  workedExample: {
    prompt: "A pond has 4 frogs. If the frogs double each spring and nothing limits them, how many frogs after 3 springs?",
    steps: [
      "Spring 1: 4 × 2 = 8.",
      "Spring 2: 8 × 2 = 16.",
      "Spring 3: 16 × 2 = 32.",
      "But in a REAL pond, low food and space would slow this down."
    ],
    answer: "32 frogs (if nothing limits growth)"
  },
  items: [
    {
      id: "g5.spring.sci.w6.d4.q1",
      type: "multiple_choice",
      stem: "What is a LIMITING FACTOR for a population?",
      choices: [
        "Anything that makes a population grow faster",
        "The number of different kinds of animals in a place",
        "Something (like food or space) that runs low and slows population growth",
        "The color of an animal"
      ],
      answerIndex: 2,
      explanation: "A limiting factor — food, water, space, predators — is something that runs low and slows how big a population can get.",
      hintLadder: [
        "The word 'limiting' means it puts a LIMIT on something.",
        "Think of what a growing group could run out of.",
        "Food, water, and space are common limiting factors."
      ]
    },
    {
      id: "g5.spring.sci.w6.d4.q2",
      type: "numeric",
      stem: "A wildflower patch has 5 plants and DOUBLES each season with nothing limiting it. How many plants after 4 seasons?",
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
      id: "g5.spring.sci.w6.d4.q3",
      type: "multiple_choice",
      stem: "A pond can only hold so many frogs before it runs out of food and space. What do we call the biggest number of frogs it can hold for a long time?",
      choices: [
        "The number of babies born in one spring",
        "The number of predators in the pond",
        "The speed the population grows at first",
        "The largest population a place can support for a long time with its food, water, and space"
      ],
      answerIndex: 3,
      explanation: "The largest population a place can support for a long time is set by its food, water, and space — that is its limit.",
      hintLadder: [
        "It is about how MANY the place can hold.",
        "Think of the ceiling set by the food and space there.",
        "It is the long-term biggest number the place can support."
      ],
      misconceptionsTargeted: ["populations-grow-forever"]
    },
    {
      id: "g5.spring.sci.w6.d4.q4",
      type: "multiple_choice",
      stem: "A rabbit population grows fast in spring, then stops growing and stays steady in summer. What most likely happened?",
      choices: [
        "The rabbits stopped having babies for no reason",
        "Limiting factors like food, space, or predators slowed the growth once the place was nearly full",
        "The rabbits turned into a different animal",
        "Growth always stops exactly in the middle of the year"
      ],
      answerIndex: 1,
      explanation: "As a population gets large, food and space run low and predators increase, so the growth slows and levels off.",
      hintLadder: [
        "What runs low when a group gets very large?",
        "More rabbits means more sharing of food and space.",
        "Limiting factors slow the growth once the place is nearly full."
      ]
    },
    {
      id: "g5.spring.sci.w6.d4.q5",
      type: "short_answer",
      stem: "A new spring pond starts with a few water plants that spread quickly. Name TWO limiting factors that would eventually stop the plants from covering the whole pond, and tell how each one limits them.",
      rubric: {
        level3: "Names two real limiting factors (like sunlight, space, or nutrients) AND tells how each one slows the growth.",
        level2: "Names two factors but explains only one, or one factor is weakly explained.",
        level1: "Names fewer than two real factors or gives no explanation."
      },
      exemplar: "Sunlight limits them because plants that shade each other cannot all make food. Space limits them because once the top of the pond is full, new plants have nowhere to grow.",
      hintLadder: [
        "What do water plants need that could run out?",
        "Think about sunlight, space, and food in the water.",
        "Tell how each one puts a limit on the growth."
      ]
    }
  ],
  reflectionPrompt: "Populations grow fast at first but then stop growing when a place is full. What is one thing that could let a pond hold MORE frogs?",
  misconceptionBank: [
    {
      id: "populations-grow-forever",
      label: "Thinks populations grow forever",
      description: "Assumes fast early growth keeps going without limit, forgetting that a place can only hold so many.",
      coachMove: "Ask what the population would run OUT of first — food, space, or water — and how that puts a cap on the numbers."
    },
    {
      id: "more-space-only-limit",
      label: "Thinks space is the only limiting factor",
      description: "Focuses only on room and forgets food, water, sunlight, and predators.",
      coachMove: "List several things the living thing needs and check which could run short as the numbers climb."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Doubling Pond",
      prompt:
        "A patch of lily pads doubles how much of the pond it covers every day. On day 30 it covers the WHOLE pond. On which day was the pond exactly HALF covered? Think before you answer — the number surprises most people!",
      answer:
        "Day 29! If it doubles every day and is full on day 30, the day before (29) it was half — one more doubling fills it. That is how fast doubling growth moves at the end.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Population Growth Curve",
      challenge:
        "Model a spring population (rabbits, frogs, or wildflowers). Start with a small number and let it grow fast, then draw where the limiting factors kick in and make it level off and stay steady. Label the limiting factors on your drawing.",
      materials: ["Paper or graph paper, plus a pencil"],
      steps: [
        "Pick a living thing and a small starting number.",
        "Sketch the population climbing fast (the early boom).",
        "Draw the line leveling off and label the 'full' line.",
        "Write 2–3 limiting factors near where the line flattens."
      ],
      deliverable: "A labeled growth curve showing the fast boom, the leveling-off, and the limiting factors.",
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
          id: "g5.spring.sci.w6.d4.arena1",
          type: "numeric",
          stem: "A frog population doubles each spring with nothing limiting it, starting at 3. After 5 springs, how many frogs?",
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
          id: "g5.spring.sci.w6.d4.arena2",
          type: "short_answer",
          stem: "A pond's frog population is growing fast, but the pond can only hold about 100 frogs. Predict what happens to the growth as the pond fills up, and tell WHY using limiting factors.",
          rubric: {
            level3: "Predicts growth slows and levels off near 100 AND explains with limiting factors (food, space) running low as numbers rise.",
            level2: "Says growth slows but the limiting-factor reason is weak or missing.",
            level1: "No clear prediction or no real reason."
          },
          exemplar: "As the pond fills toward 100, the growth slows and stops. With so many frogs, food and space run low, so fewer new frogs live — the limiting factors keep the number near what the pond can hold.",
          hintLadder: [
            "Does growth speed up or slow down as the pond fills?",
            "What runs low when there are almost 100 frogs?",
            "Link the slowdown to food and space running low."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Boom and Balance",
      prompt:
        "Act out a population: start small and crouched, then 'boom' — grow tall and spread your arms wide for 5 counts. Then feel the limits: slowly settle into a steady, balanced standing pose and hold it, breathing calmly.",
      scienceTieIn: "Your steady balanced pose is like a population that has filled its place — holding steady instead of growing forever — and the deep breaths reset your focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Populations boom in spring but cannot grow forever. What is one limiting factor you noticed in nature or your neighborhood this spring, and what does it limit?",
      badge: { id: "g5-spring-population-pro", name: "Population Pro", emoji: "🐸" },
      estimatedMinutes: 7
    }
  }
};
