// Grade 6 Science — Winter Expedition, Week 4 (Space & the Solar System), Day 1.
// Topic: the solar system — the Sun, the 8 planets, inner vs. outer, and order.

export const winterG6ScienceW4D1 = {
  id: "g6.winter.sci.w4.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Science",
  topic: "The solar system: the Sun, the 8 planets, and their order",
  topicTag: "solar-system",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS1-2", "NGSS.MS-ESS1-3"],
  hook: "On a clear winter night the sky is packed with worlds. Today you meet our whole solar system — one star, eight planets — and learn why the rocky inner worlds and the giant outer ones are so different.",
  miniLesson: [
    "The Sun is a star at the center of our solar system. Its gravity holds the eight planets in orbit around it.",
    "The order of the planets from the Sun is: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
    "The four INNER planets (Mercury, Venus, Earth, Mars) are small and rocky. The four OUTER planets (Jupiter, Saturn, Uranus, Neptune) are large gas and ice giants, separated from the inner worlds by the asteroid belt."
  ],
  workedExample: {
    prompt: "Sort these four planets into inner (rocky) and outer (giant): Mars, Jupiter, Earth, Neptune.",
    steps: [
      "Recall the order from the Sun: Mercury, Venus, Earth, Mars | belt | Jupiter, Saturn, Uranus, Neptune.",
      "Earth and Mars fall before the asteroid belt, so they are inner, rocky planets.",
      "Jupiter and Neptune fall after the belt, so they are outer, giant planets.",
      "Result: Inner = Earth, Mars. Outer = Jupiter, Neptune."
    ],
    answer: "Inner (rocky): Earth, Mars. Outer (giant): Jupiter, Neptune."
  },
  items: [
    {
      id: "g6.winter.sci.w4.d1.q1",
      type: "multiple_choice",
      stem: "What is at the CENTER of our solar system?",
      choices: ["Earth", "The Moon", "The Sun", "Jupiter"],
      answerIndex: 2,
      explanation: "The Sun is a star at the center; its gravity keeps all eight planets in orbit around it.",
      hintLadder: [
        "The center object is a star, not a planet.",
        "It gives us light and heat.",
        "It is the Sun."
      ],
      misconceptionsTargeted: ["earth-center-of-system"]
    },
    {
      id: "g6.winter.sci.w4.d1.q2",
      type: "multiple_choice",
      stem: "Which list shows the planets in the correct order OUTWARD from the Sun?",
      choices: [
        "Earth, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Earth, Venus, Mars, Saturn, Jupiter, Neptune, Uranus",
        "Venus, Mercury, Earth, Mars, Jupiter, Saturn, Neptune, Uranus"
      ],
      answerIndex: 1,
      explanation: "From the Sun outward: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
      hintLadder: [
        "Mercury is closest to the Sun.",
        "Earth is the third planet, right after Venus.",
        "Neptune is farthest out."
      ]
    },
    {
      id: "g6.winter.sci.w4.d1.q3",
      type: "multiple_choice",
      stem: "What best describes the four INNER planets compared with the four OUTER planets?",
      choices: [
        "The inner planets are large gas giants; the outer ones are small and rocky.",
        "The inner planets are small and rocky; the outer ones are large gas and ice giants.",
        "All eight planets are the same size and made of rock.",
        "The inner planets have rings; the outer ones do not."
      ],
      answerIndex: 1,
      explanation: "Mercury, Venus, Earth, and Mars are small rocky worlds; Jupiter, Saturn, Uranus, and Neptune are large gas and ice giants.",
      hintLadder: [
        "Think about Earth and Mars — are they rocky or gassy?",
        "Now think about giant Jupiter and Saturn.",
        "Inner = small rocky; outer = large giants."
      ]
    },
    {
      id: "g6.winter.sci.w4.d1.q4",
      type: "numeric",
      stem: "Counting outward from the Sun, what is Earth's position number in the planet order (Mercury = 1)?",
      answer: 3,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Mercury is 1, Venus is 2...",
        "Which planet comes right after Venus?",
        "Earth is the third planet from the Sun."
      ],
      explanation: "Order: Mercury (1), Venus (2), Earth (3). Earth is the third planet."
    },
    {
      id: "g6.winter.sci.w4.d1.q5",
      type: "short_answer",
      stem: "Explain what keeps the eight planets orbiting the Sun instead of flying off into space.",
      rubric: {
        level3: "States that the Sun's gravity pulls on the planets and keeps them in orbit, showing understanding that gravity is the force holding the system together.",
        level2: "Mentions gravity or the Sun's pull but explanation is vague or incomplete.",
        level1: "No mention of gravity or an incorrect cause."
      },
      exemplar: "The Sun is huge, so it has strong gravity. That gravity constantly pulls on each planet, bending its path into an orbit instead of letting it fly off in a straight line.",
      hintLadder: [
        "What invisible force pulls things toward large objects?",
        "The Sun is by far the most massive object in the solar system.",
        "Name the force and say what it does to the planets' paths."
      ]
    }
  ],
  reflectionPrompt: "If you could visit one of the eight planets, which would you pick and why? What would be the biggest difference from Earth?",
  misconceptionBank: [
    {
      id: "earth-center-of-system",
      label: "Thinks Earth is at the center of the solar system",
      description: "Places Earth, not the Sun, at the center with everything orbiting it.",
      coachMove: "Point out that the Sun holds about 99% of the solar system's mass, so its gravity is what everything — including Earth — orbits around."
    },
    {
      id: "all-planets-alike",
      label: "Assumes all planets are similar rocky worlds like Earth",
      description: "Doesn't distinguish small rocky inner planets from giant gaseous outer planets.",
      coachMove: "Compare sizes: hundreds of Earths could fit inside Jupiter, and Jupiter has no solid surface to stand on."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Cosmic Head Start",
      prompt:
        "Light from the Sun takes about 8 minutes to reach Earth. So when you look at the Sun, you're seeing it as it was 8 minutes ago! What does that tell you about how far away the Sun really is?",
      answer:
        "It is incredibly far — about 150 million kilometers. Light is the fastest thing in the universe, yet it still needs 8 whole minutes to cross that gap. Space distances are enormous.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Planet Order Chart",
      challenge:
        "Create a chart or lineup of all eight planets in the correct order from the Sun. Clearly separate the four rocky inner planets from the four giant outer planets, and mark the asteroid belt in between.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw the Sun on one side and list the planets in order outward.",
        "Group and label the four inner rocky planets and the four outer giants.",
        "Draw the asteroid belt between Mars and Jupiter.",
        "Invent a memory sentence (mnemonic) whose word-starts match Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
      ],
      deliverable: "A labeled planet-order chart with inner/outer groups, the asteroid belt, and a memory sentence.",
      choiceBoard: [
        "Draw the labeled planet-order chart.",
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
          id: "g6.winter.sci.w4.d1.arena1",
          type: "multiple_choice",
          stem: "Which planet lies directly BETWEEN Earth and Jupiter in order from the Sun?",
          choices: ["Venus", "Mars", "Saturn", "Mercury"],
          answerIndex: 1,
          explanation: "Order is ...Earth, Mars, [asteroid belt], Jupiter... so Mars sits between Earth and Jupiter.",
          hintLadder: [
            "List the order: Earth, then ?, then Jupiter.",
            "The asteroid belt is just before Jupiter.",
            "Mars is the fourth planet, right before the belt."
          ]
        },
        {
          id: "g6.winter.sci.w4.d1.arena2",
          type: "short_answer",
          stem: "A friend says, 'Pluto is the ninth planet.' Using what you know, explain why we say the solar system has EIGHT planets today.",
          rubric: {
            level3: "Explains that Pluto was reclassified as a dwarf planet, so the solar system officially has eight planets, and shows understanding that definitions can change with new science.",
            level2: "Says there are eight planets and mentions Pluto is different, but reasoning is thin.",
            level1: "Cannot explain or insists there are nine planets with no reasoning."
          },
          exemplar: "Astronomers reclassified Pluto as a dwarf planet because it hadn't cleared its orbit of other objects. So today the solar system officially has eight planets, from Mercury to Neptune.",
          hintLadder: [
            "Pluto used to be counted, but its status changed.",
            "Scientists created the category 'dwarf planet.'",
            "Explain that new evidence changed the count to eight."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Orbit Walk",
      prompt:
        "Stand up and be the Sun. Now trace a small circle with your finger for tight, fast Mercury, then sweep a huge slow circle with your whole arm for far-off Neptune. Do three quick 'inner planet' spins and one slow 'outer planet' turn, then breathe deep.",
      scienceTieIn: "Planets closer to the Sun really do orbit faster and in smaller circles, while distant Neptune takes 165 Earth years to go around once.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fact about the solar system surprised you most today? Write it down and explain why it caught your attention.",
      badge: { id: "solar-system-navigator", name: "Solar System Navigator", emoji: "🪐" },
      estimatedMinutes: 7
    }
  }
};
