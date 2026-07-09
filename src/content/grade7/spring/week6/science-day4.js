// Grade 7 Science — Spring Expedition, Week 6 (Code That Grows), Day 4.
// Topic: population growth and spread, raised to Grade 7 — exponential (J-curve)
// vs logistic (S-curve) growth, carrying capacity, and density-dependent vs
// density-independent limiting factors.

export const springG7ScienceW6D4 = {
  id: "g7.spring.sci.w6.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Science",
  topic: "Population growth and spread (J-curve, S-curve, limiting factors)",
  topicTag: "population-growth",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-1", "NGSS.MS-LS2-4"],
  hook: "In spring, rabbits, frogs, and wildflowers can boom exponentially — a J-shaped rocket. But no real population rides that curve forever; it bends into an S-shape as limits kick in. At Grade 7 you learn why the curve bends and which KIND of limiting factor does the bending.",
  miniLesson: [
    "Unlimited resources give EXPONENTIAL growth — a J-shaped curve that multiplies each generation (like the early doubling of a frog population).",
    "Real populations follow LOGISTIC growth — an S-shaped curve that rises fast, then slows and levels off at the CARRYING CAPACITY, the maximum the environment can support long-term.",
    "Limiting factors come in two kinds: DENSITY-DEPENDENT factors (food, disease, competition, predators) hit harder as the population gets crowded; DENSITY-INDEPENDENT factors (a freeze, a flood, a drought) strike regardless of how many there are."
  ],
  workedExample: {
    prompt: "A pond has 4 frogs that TRIPLE each spring with unlimited resources. How many after 3 springs — and what shape is that early curve?",
    steps: [
      "Spring 1: 4 × 3 = 12.",
      "Spring 2: 12 × 3 = 36.",
      "Spring 3: 36 × 3 = 108.",
      "That rocketing rise is the J-shaped exponential phase — before limiting factors bend it into an S-curve."
    ],
    answer: "108 frogs (J-shaped exponential phase, if nothing limits growth)"
  },
  items: [
    {
      id: "g7.spring.sci.w6.d4.q1",
      type: "multiple_choice",
      stem: "What is the difference between a DENSITY-DEPENDENT and a DENSITY-INDEPENDENT limiting factor?",
      choices: [
        "Density-dependent factors only affect plants; density-independent only affect animals",
        "Density-dependent factors (like competition or disease) hit harder as a population gets crowded; density-independent factors (like a flood or freeze) strike regardless of crowding",
        "They are two names for the same thing",
        "Density-independent factors always help a population grow"
      ],
      answerIndex: 1,
      explanation: "Density-dependent factors intensify with crowding (more individuals means more competition and faster disease spread); density-independent factors (weather, natural disasters) affect the population no matter its size.",
      hintLadder: [
        "'Density' means how crowded the population is.",
        "Which factor gets worse as crowding increases?",
        "Weather and disasters strike regardless of crowding (independent); competition and disease worsen with it (dependent)."
      ]
    },
    {
      id: "g7.spring.sci.w6.d4.q2",
      type: "numeric",
      stem: "A wildflower patch has 5 plants and TRIPLES each season with no limits (exponential). How many plants after 3 seasons?",
      answer: 135,
      tolerance: 0,
      unit: "plants",
      hintLadder: [
        "Triple the count each season, starting at 5.",
        "5 → 15 → 45 → 135.",
        "Three triplings of 5 gives 5 × 3^3 = 5 × 27 = 135."
      ],
      explanation: "Tripling three times: 5 → 15 → 45 → 135 plants."
    },
    {
      id: "g7.spring.sci.w6.d4.q3",
      type: "multiple_choice",
      stem: "A population grows along an S-shaped (logistic) curve. What is happening at the TOP of the S, where the curve flattens?",
      choices: [
        "The environment gained unlimited resources",
        "The population suddenly goes extinct",
        "Growth becomes exponential and rockets upward again",
        "The population has reached its carrying capacity, so growth slows to near zero as births roughly balance deaths"
      ],
      answerIndex: 3,
      explanation: "The flat top of the S is the carrying capacity: limiting factors have brought births and deaths into rough balance, so the population holds roughly steady.",
      hintLadder: [
        "What does the flat top mean about the growth RATE?",
        "The population is as large as the environment can support.",
        "That ceiling is the carrying capacity."
      ],
      misconceptionsTargeted: ["j-curve-forever"]
    },
    {
      id: "g7.spring.sci.w6.d4.q4",
      type: "multiple_choice",
      stem: "A deer herd booms, then a harsh drought (not related to how crowded they are) kills many. What kind of limiting factor is the drought?",
      choices: [
        "Density-independent, because the drought strikes regardless of how many deer there are",
        "Density-dependent, because more deer means more drought",
        "Not a limiting factor at all",
        "It raises the carrying capacity"
      ],
      answerIndex: 0,
      explanation: "A drought's impact does not depend on population density — it strikes whether there are 10 deer or 1,000 — so it is density-independent.",
      hintLadder: [
        "Does the drought depend on how crowded the herd is?",
        "Weather strikes regardless of population size.",
        "That makes it density-independent."
      ]
    },
    {
      id: "g7.spring.sci.w6.d4.q5",
      type: "short_answer",
      stem: "A new spring pond's water plants spread fast, then level off. Name ONE density-dependent and ONE density-independent limiting factor for them, and explain how each shapes the growth curve.",
      rubric: {
        level3: "Names a valid density-dependent factor (e.g. competition for sunlight/nutrients, herbivores, disease) AND a valid density-independent factor (e.g. a cold snap, flood, drought) AND explains how each affects the curve.",
        level2: "Names one of each but explains only one, or one factor is misclassified.",
        level1: "Names factors without correctly splitting the two kinds or without explanation."
      },
      exemplar: "A density-dependent factor is competition for sunlight: as the plants crowd the surface, they shade each other, so growth slows and the curve flattens toward carrying capacity. A density-independent factor is an early frost, which can kill plants no matter how many there are, cutting the population back sharply regardless of crowding.",
      hintLadder: [
        "Pick one factor that gets worse as the pond fills (dependent).",
        "Pick one factor like weather that strikes regardless of crowding (independent).",
        "Explain how each bends or drops the growth curve."
      ]
    }
  ],
  reflectionPrompt: "Real populations follow an S-curve, not an endless J-curve. What is one thing that could RAISE a pond's carrying capacity for frogs, letting the S-curve level off higher?",
  misconceptionBank: [
    {
      id: "j-curve-forever",
      label: "Thinks the exponential J-curve continues forever",
      description: "Assumes fast early growth keeps rocketing without bending into an S-curve at carrying capacity.",
      coachMove: "Ask what runs out first as numbers climb, and sketch the J bending into an S as those limits kick in."
    },
    {
      id: "all-limits-density-dependent",
      label: "Thinks all limiting factors depend on crowding",
      description: "Forgets that weather and disasters (density-independent) hit regardless of population size.",
      coachMove: "Sort a list of factors into 'gets worse when crowded' vs 'strikes no matter what' to surface the two kinds."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Tripling Pond",
      prompt:
        "A patch of lily pads TRIPLES its coverage every day. On day 12 it covers the WHOLE pond. On which day was the pond exactly ONE-THIRD covered? Think before you answer!",
      answer:
        "Day 11! If it triples every day and is full on day 12, one day earlier it was one-third — one more tripling fills it. Exponential growth covers the last two-thirds in a single day.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: J-Curve to S-Curve",
      challenge:
        "Model a spring population (rabbits, frogs, or wildflowers). Draw the J-shaped exponential boom, then show it bending into an S-shaped logistic curve that levels off at carrying capacity. Label at least one density-dependent AND one density-independent factor on your curve.",
      materials: ["Paper or graph paper, plus a pencil"],
      steps: [
        "Pick a species and a small starting population.",
        "Sketch the J-shaped exponential climb (the early boom).",
        "Bend it into an S: level it off and draw the carrying-capacity line.",
        "Label one density-dependent and one density-independent limiting factor where they act."
      ],
      deliverable: "A labeled curve showing the J-to-S bend, the carrying-capacity line, and both kinds of limiting factor.",
      choiceBoard: [
        "Draw and label the J-to-S growth curve with both factor types.",
        "Make a data table of the population over 8 seasons: exponential boom, then leveling.",
        "Write a 'diary of a pond' where the frogs boom (J), then hit density-dependent AND density-independent limits (S)."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Population Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w6.d4.arena1",
          type: "numeric",
          stem: "A frog population TRIPLES each spring with no limits, starting at 2. After 4 springs, how many frogs?",
          answer: 162,
          tolerance: 0,
          unit: "frogs",
          hintLadder: [
            "Triple the count each spring, starting at 2.",
            "2 → 6 → 18 → 54 → 162.",
            "Four triplings of 2 gives 2 × 3^4 = 2 × 81 = 162."
          ],
          explanation: "Tripling four times: 2 → 6 → 18 → 54 → 162 frogs."
        },
        {
          id: "g7.spring.sci.w6.d4.arena2",
          type: "short_answer",
          stem: "A pond's frog population is on the steep part of its S-curve, heading toward a carrying capacity of 200. Predict what happens to the GROWTH RATE as it nears 200, and explain WHY using a density-dependent limiting factor.",
          rubric: {
            level3: "Predicts the growth rate slows toward zero near 200 AND explains with a density-dependent factor (competition, food shortage, disease) that intensifies as crowding rises.",
            level2: "Says growth slows but names no density-dependent factor or the reasoning is weak.",
            level1: "No clear prediction or no valid density-dependent reasoning."
          },
          exemplar: "As the population nears 200, the growth rate slows toward zero and the S-curve flattens. With so many frogs crowded together, competition for food and space rises and disease spreads faster — these density-dependent factors intensify with crowding, so fewer new frogs survive and the population holds near carrying capacity.",
          hintLadder: [
            "Does the growth rate speed up or slow down near carrying capacity?",
            "Which factor gets worse as the frogs crowd together?",
            "Link the slowdown to a density-dependent factor like competition or disease."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: J to S",
      prompt:
        "Trace the two curves with your body: start crouched, then ROCKET up fast tracing a J with your arm (the exponential boom). Then slow the same arm into a gentle S that levels off and hold it steady, breathing calmly.",
      scienceTieIn: "Feeling the rocket-then-level of the S-curve in your own arm shows how limiting factors bend exponential growth into logistic growth — and the deep breaths reset your focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Populations follow an S-curve, bent by density-dependent and density-independent factors. Name one limiting factor you noticed in nature this spring and say which KIND it is and why.",
      badge: { id: "g7-spring-logistic-ranger", name: "Logistic Ranger", emoji: "🐸" },
      estimatedMinutes: 7
    }
  }
};
