// Grade 7 Science — Winter Expedition, Week 4 (Space & the Solar System), Day 1.
// Topic: the solar system — the Sun, the 8 planets, inner vs. outer, order, and
// the relative scale/proportion of the worlds (Grade 7 depth: scale & large numbers).

export const winterG7ScienceW4D1 = {
  id: "g7.winter.sci.w4.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Science",
  topic: "The solar system: the Sun, the 8 planets, their order, and relative scale",
  topicTag: "solar-system",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS1-2", "NGSS.MS-ESS1-3"],
  hook: "On a clear winter night the sky is packed with worlds separated by unimaginable gulfs. Today you meet our whole solar system — one star holding 99.8% of all the mass — and learn why the rocky inner worlds and the giant outer ones are so wildly different in size and composition.",
  miniLesson: [
    "The Sun is a star at the center of our solar system. It holds about 99.8% of the solar system's entire mass, so its gravity governs the orbits of all eight planets and everything else.",
    "The order of the planets outward from the Sun is: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Their distances grow non-linearly — each outer planet is roughly twice as far out as the one before it.",
    "The four INNER planets (Mercury–Mars) are small, dense, and rocky. The four OUTER planets (Jupiter–Neptune) are gas and ice giants, separated from the inner worlds by the asteroid belt. Jupiter alone is so large that roughly 1,300 Earths could fit inside its volume."
  ],
  workedExample: {
    prompt: "Jupiter's diameter is about 11 times Earth's diameter. Because volume scales with the CUBE of diameter, estimate roughly how many Earths could fit inside Jupiter by volume, and classify both planets as inner or outer.",
    steps: [
      "Volume grows with the cube of the size ratio, so compute 11³.",
      "11³ = 11 × 11 × 11 = 1,331, so about 1,300 Earths fit inside Jupiter.",
      "Earth sits before the asteroid belt, so it is an inner, rocky planet.",
      "Jupiter sits after the belt, so it is an outer, giant planet."
    ],
    answer: "About 1,300 Earths fit inside Jupiter (11³ ≈ 1,331). Earth is an inner rocky planet; Jupiter is an outer giant."
  },
  items: [
    {
      id: "g7.winter.sci.w4.d1.q1",
      type: "multiple_choice",
      stem: "Roughly what fraction of the solar system's total MASS is held by the Sun?",
      choices: ["About 10%", "About 50%", "About 99.8%", "About 25%"],
      answerIndex: 2,
      explanation: "The Sun holds about 99.8% of the solar system's mass, which is why its gravity dominates every orbit.",
      hintLadder: [
        "The Sun vastly outweighs everything else combined.",
        "The value is very close to 100%, not half.",
        "It is about 99.8%."
      ],
      misconceptionsTargeted: ["earth-center-of-system"]
    },
    {
      id: "g7.winter.sci.w4.d1.q2",
      type: "multiple_choice",
      stem: "Which statement best describes how planet DISTANCES from the Sun change as you move outward?",
      choices: [
        "Each planet is the same fixed distance farther than the last.",
        "The distances grow non-linearly — each outer planet is roughly twice as far out as the one before it.",
        "The outer planets are actually closer together than the inner ones.",
        "All eight planets are spaced evenly like rungs on a ladder."
      ],
      answerIndex: 1,
      explanation: "Spacing is non-linear: gaps widen dramatically outward, with each outer planet roughly doubling the previous distance from the Sun.",
      hintLadder: [
        "Are Neptune and Uranus as close together as Mercury and Venus?",
        "The gaps get bigger and bigger the farther out you go.",
        "Each outer planet is roughly double the distance of the one before."
      ]
    },
    {
      id: "g7.winter.sci.w4.d1.q3",
      type: "multiple_choice",
      stem: "What best explains the difference between the four INNER and four OUTER planets?",
      choices: [
        "The inner planets are large gas giants; the outer ones are small and rocky.",
        "The inner planets are small, dense, rocky worlds; the outer ones are large gas and ice giants.",
        "All eight planets are the same size and made of rock.",
        "The inner planets have rings; the outer ones do not."
      ],
      answerIndex: 1,
      explanation: "Mercury–Mars are small dense rocky worlds; Jupiter–Neptune are large low-density gas and ice giants separated from the inner worlds by the asteroid belt.",
      hintLadder: [
        "Think about Earth and Mars — rocky or gassy?",
        "Now compare giant, low-density Jupiter and Saturn.",
        "Inner = small dense rocky; outer = large giants."
      ]
    },
    {
      id: "g7.winter.sci.w4.d1.q4",
      type: "numeric",
      stem: "Saturn's diameter is about 9 times Earth's diameter. Since volume scales with the cube of diameter, about how many Earths could fit inside Saturn by volume? (Compute 9³.)",
      answer: 729,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Volume grows with the cube of the size ratio.",
        "Compute 9 × 9 × 9.",
        "9³ = 729."
      ],
      explanation: "Volume ratio = (diameter ratio)³ = 9³ = 729, so about 729 Earths fit inside Saturn."
    },
    {
      id: "g7.winter.sci.w4.d1.q5",
      type: "short_answer",
      stem: "The Sun holds about 99.8% of the solar system's mass. Explain how this single fact accounts for why all eight planets orbit the Sun rather than each other or drifting off into space.",
      rubric: {
        level3: "Connects the Sun's overwhelming mass (99.8%) to its dominant gravity, and explains that this gravity continuously pulls each planet into a curved orbit instead of a straight-line path away.",
        level2: "Mentions the Sun's gravity or large mass but the causal chain to orbits is vague or incomplete.",
        level1: "No mention of gravity/mass or an incorrect cause."
      },
      exemplar: "Because the Sun holds 99.8% of all the mass, it has by far the strongest gravity in the system. That gravity constantly pulls on every planet, bending each one's path into an orbit instead of letting it travel in a straight line off into space.",
      hintLadder: [
        "More mass means more of what force?",
        "The Sun outweighs all the planets combined many times over.",
        "Link the huge mass to strong gravity, and gravity to curved orbits."
      ]
    }
  ],
  reflectionPrompt: "Given that Jupiter could swallow about 1,300 Earths, how does thinking in terms of scale (not just names and order) change the way you picture the solar system? Explain in 2–3 sentences.",
  misconceptionBank: [
    {
      id: "earth-center-of-system",
      label: "Thinks Earth is at the center of the solar system",
      description: "Places Earth, not the Sun, at the center with everything orbiting it.",
      coachMove: "Point out that the Sun holds about 99.8% of the solar system's mass, so its gravity is what everything — including Earth — orbits around."
    },
    {
      id: "planets-evenly-spaced",
      label: "Assumes planets are spaced evenly outward from the Sun",
      description: "Pictures the planets like evenly spaced ladder rungs instead of gaps that widen dramatically outward.",
      coachMove: "Compare the AU distances: Earth is 1 AU out but Neptune is 30 AU — the outer gaps dwarf the inner ones."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Cosmic Head Start",
      prompt:
        "Light from the Sun takes about 8.3 minutes to reach Earth, but about 4.1 HOURS to reach Neptune. If light — the fastest thing in the universe — needs hours to cross the solar system, what does that tell you about the scale of space?",
      answer:
        "Space is almost unimaginably vast. Neptune is about 30 times farther from the Sun than Earth is, so even light takes hours to get there. Distances that take light hours to cross are far beyond anything we experience on Earth.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Scaled Planet Order Chart",
      challenge:
        "Create a chart or lineup of all eight planets in the correct order from the Sun. Clearly separate the four rocky inner planets from the four giant outer planets, mark the asteroid belt, AND label each planet with a rough relative size (e.g., Earth = 1, Jupiter ≈ 11× wider).",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw the Sun and list the planets in order outward.",
        "Group and label the four inner rocky planets and the four outer giants, with the asteroid belt between Mars and Jupiter.",
        "Add a rough relative-size label to each planet (Earth = 1 as your unit).",
        "Invent a memory sentence (mnemonic) whose word-starts match Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
      ],
      deliverable: "A labeled planet-order chart with inner/outer groups, the asteroid belt, relative-size labels, and a memory sentence.",
      choiceBoard: [
        "Draw the labeled, size-annotated planet-order chart.",
        "Build the lineup out of household objects sized roughly to scale and photograph it.",
        "Write and record your own catchy mnemonic for the planet order."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Solar System Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w4.d1.arena1",
          type: "numeric",
          stem: "Neptune is about 30 AU from the Sun and Earth is 1 AU. About how many times FARTHER from the Sun is Neptune than Earth?",
          answer: 30,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Compare the two distances as a ratio.",
            "Divide Neptune's distance by Earth's: 30 ÷ 1.",
            "Neptune is 30 times farther out than Earth."
          ],
          explanation: "30 AU ÷ 1 AU = 30, so Neptune is about 30 times farther from the Sun than Earth."
        },
        {
          id: "g7.winter.sci.w4.d1.arena2",
          type: "short_answer",
          stem: "A friend says, 'Pluto is the ninth planet.' Using the modern definition of a planet, explain why we say the solar system has EIGHT planets today, and what this reveals about how scientific definitions work.",
          rubric: {
            level3: "Explains that Pluto was reclassified as a dwarf planet because it hasn't cleared its orbital neighborhood, so there are officially eight planets, AND notes that scientific categories can change as definitions are refined with new understanding.",
            level2: "Says there are eight planets and mentions Pluto is a dwarf planet, but the reasoning about clearing its orbit or changing definitions is thin.",
            level1: "Cannot explain or insists there are nine planets with no reasoning."
          },
          exemplar: "In 2006 astronomers defined a planet as a body that orbits the Sun, is round, and has cleared its orbit of other objects. Pluto shares its region with many icy bodies, so it became a 'dwarf planet.' This shows definitions in science can be revised as our understanding sharpens.",
          hintLadder: [
            "There is a modern three-part definition of 'planet.'",
            "Pluto fails the 'cleared its orbit' part.",
            "Explain that refining the definition changed the count to eight."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Orbit Walk",
      prompt:
        "Stand up and be the Sun. Trace a small, fast circle with your finger for tight Mercury, then sweep a huge slow circle with your whole arm for far-off Neptune. Do three quick 'inner planet' spins and one very slow 'outer planet' turn, then breathe deep and reach tall.",
      scienceTieIn: "Planets closer to the Sun really do orbit faster and in smaller circles; distant Neptune, 30 times farther out, takes about 165 Earth years to complete one orbit.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fact about the SCALE of the solar system surprised you most today — a distance, a size ratio, or a light-travel time? Write it down and explain why it stuck with you.",
      badge: { id: "g7-winter-solar-scale-navigator", name: "Solar Scale Navigator", emoji: "🪐" },
      estimatedMinutes: 7
    }
  }
};
