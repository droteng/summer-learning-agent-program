// Grade 5 Science — Winter Expedition, Week 4 (Space & the Solar System), Day 1.
// Topic: the solar system — the Sun, the 8 planets, inner vs. outer, and order.
// Grade 5 counterpart of g6.winter.sci.w4.d1: same topic, simpler numbers and
// shorter, more scaffolded explanations.

export const winterG5ScienceW4D1 = {
  id: "g5.winter.sci.w4.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Science",
  topic: "The solar system: the Sun, the 8 planets, and their order",
  topicTag: "solar-system",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-ESS1-1", "NGSS.5-ESS1-2"],
  hook: "On a cold, clear winter night the sky is full of tiny lights. Some of them are whole worlds! Today you meet our solar system — one bright star and eight planets — and learn why the small rocky planets are so different from the giant ones.",
  miniLesson: [
    "The Sun is a STAR at the center of our solar system. It is very heavy, and its pull (gravity) holds the eight planets moving in circles, called ORBITS, around it.",
    "The order of the planets, starting closest to the Sun and moving out, is: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
    "The first four (Mercury, Venus, Earth, Mars) are the INNER planets — small and rocky. The last four (Jupiter, Saturn, Uranus, Neptune) are the OUTER planets — big balls of gas and ice. A ring of space rocks called the asteroid belt sits between them."
  ],
  workedExample: {
    prompt: "Sort these four planets into inner (rocky) and outer (giant): Mars, Jupiter, Earth, Neptune.",
    steps: [
      "Remember the order: Mercury, Venus, Earth, Mars | asteroid belt | Jupiter, Saturn, Uranus, Neptune.",
      "Earth and Mars come before the asteroid belt, so they are inner, rocky planets.",
      "Jupiter and Neptune come after the belt, so they are outer, giant planets.",
      "Answer: Inner = Earth, Mars. Outer = Jupiter, Neptune."
    ],
    answer: "Inner (rocky): Earth, Mars. Outer (giant): Jupiter, Neptune."
  },
  items: [
    {
      id: "g5.winter.sci.w4.d1.q1",
      type: "multiple_choice",
      stem: "What is at the CENTER of our solar system?",
      choices: ["Earth", "The Moon", "The Sun", "Jupiter"],
      answerIndex: 2,
      explanation: "The Sun is a star at the center. Its gravity keeps all eight planets orbiting around it.",
      hintLadder: [
        "The center object is a star, not a planet.",
        "It gives us light and heat.",
        "It is the Sun."
      ],
      misconceptionsTargeted: ["earth-center-of-system"]
    },
    {
      id: "g5.winter.sci.w4.d1.q2",
      type: "multiple_choice",
      stem: "Which list shows the planets in the correct order starting from the Sun?",
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
        "Neptune is the farthest one out."
      ]
    },
    {
      id: "g5.winter.sci.w4.d1.q3",
      type: "multiple_choice",
      stem: "How are the four INNER planets different from the four OUTER planets?",
      choices: [
        "The inner planets are giant gas balls; the outer ones are small and rocky.",
        "The inner planets are small and rocky; the outer ones are big balls of gas and ice.",
        "All eight planets are the same size and made of rock.",
        "The inner planets have rings; the outer ones do not."
      ],
      answerIndex: 1,
      explanation: "Mercury, Venus, Earth, and Mars are small rocky worlds. Jupiter, Saturn, Uranus, and Neptune are big gas and ice giants.",
      hintLadder: [
        "Think about Earth and Mars — are they rocky or gassy?",
        "Now think about giant Jupiter and Saturn.",
        "Inner = small and rocky; outer = big giants."
      ]
    },
    {
      id: "g5.winter.sci.w4.d1.q4",
      type: "numeric",
      stem: "Counting from the Sun, what is Earth's position number in the planet order? (Mercury = 1.)",
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
      id: "g5.winter.sci.w4.d1.q5",
      type: "short_answer",
      stem: "Explain what keeps the eight planets moving around the Sun instead of flying away into space.",
      rubric: {
        level3: "Says the Sun's gravity pulls on the planets and holds them in their orbits, showing that gravity is the force keeping the planets around the Sun.",
        level2: "Mentions gravity or the Sun's pull but the explanation is vague or incomplete.",
        level1: "No mention of gravity, or gives an incorrect cause."
      },
      exemplar: "The Sun is very big and heavy, so it has strong gravity. That gravity keeps pulling on each planet, holding it in an orbit instead of letting it fly off into space.",
      hintLadder: [
        "What invisible force pulls things toward big, heavy objects?",
        "The Sun is by far the heaviest thing in the solar system.",
        "Name the force and say what it does to the planets."
      ]
    }
  ],
  reflectionPrompt: "If you could visit one of the eight planets, which would you pick and why? What do you think would be the biggest difference from Earth?",
  misconceptionBank: [
    {
      id: "earth-center-of-system",
      label: "Thinks Earth is at the center of the solar system",
      description: "Places Earth, not the Sun, at the center with everything orbiting it.",
      coachMove: "Explain that the Sun holds almost all of the solar system's weight, so its gravity is what everything — including Earth — orbits around."
    },
    {
      id: "all-planets-alike",
      label: "Assumes all planets are alike, rocky worlds like Earth",
      description: "Doesn't tell apart the small rocky inner planets from the giant gassy outer planets.",
      coachMove: "Compare sizes: over a thousand Earths could fit inside Jupiter, and Jupiter has no solid ground to stand on."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Cosmic Head Start",
      prompt:
        "Light from the Sun takes about 8 minutes to reach Earth. So when you look up at the Sun, you're seeing how it looked 8 minutes ago! What does that tell you about how far away the Sun really is?",
      answer:
        "It is incredibly far away. Light is the fastest thing there is, and it still needs 8 whole minutes to get here. Space is much bigger than we can imagine.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Planet Order Chart",
      challenge:
        "Make a chart or lineup of all eight planets in the correct order from the Sun. Clearly separate the four rocky inner planets from the four giant outer planets, and mark the asteroid belt in the middle.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw the Sun on one side and list the planets in order going out.",
        "Group and label the four inner rocky planets and the four outer giants.",
        "Draw the asteroid belt between Mars and Jupiter.",
        "Make up a memory sentence where each word starts with the same letter as a planet: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
      ],
      deliverable: "A labeled planet-order chart with inner and outer groups, the asteroid belt, and a memory sentence.",
      choiceBoard: [
        "Draw the labeled planet-order chart.",
        "Build the lineup out of household objects and take a photo.",
        "Write and say out loud your own catchy memory sentence for the planet order."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Solar System Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w4.d1.arena1",
          type: "multiple_choice",
          stem: "Which planet comes right BETWEEN Earth and Jupiter in order from the Sun?",
          choices: ["Venus", "Mars", "Saturn", "Mercury"],
          answerIndex: 1,
          explanation: "The order is ...Earth, Mars, [asteroid belt], Jupiter... so Mars sits between Earth and Jupiter.",
          hintLadder: [
            "List the order: Earth, then ?, then Jupiter.",
            "The asteroid belt is just before Jupiter.",
            "Mars is the fourth planet, right before the belt."
          ]
        },
        {
          id: "g5.winter.sci.w4.d1.arena2",
          type: "short_answer",
          stem: "A friend says, 'Pluto is the ninth planet.' Explain why we say the solar system has EIGHT planets today.",
          rubric: {
            level3: "Explains that Pluto was changed into a 'dwarf planet,' so the solar system now has eight planets, showing that scientists can change ideas with new information.",
            level2: "Says there are eight planets and that Pluto is different, but the reason is thin.",
            level1: "Cannot explain, or insists there are nine planets with no reason."
          },
          exemplar: "Scientists decided Pluto is too small and shares its path with other space objects, so they called it a dwarf planet instead. That leaves eight planets, from Mercury to Neptune.",
          hintLadder: [
            "Pluto used to be counted, but its label changed.",
            "Scientists made a new group called 'dwarf planet.'",
            "Explain that the count changed to eight."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Orbit Walk",
      prompt:
        "Stand up and pretend to be the Sun. Trace a small, fast circle with your finger for close-in Mercury, then sweep a huge, slow circle with your whole arm for far-away Neptune. Do three quick 'inner planet' spins and one slow 'outer planet' turn, then take a deep breath.",
      scienceTieIn: "Planets closer to the Sun really do move faster and in smaller circles, while far-off Neptune takes 165 Earth years to go around just once.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fact about the solar system surprised you most today? Write it down and explain why it caught your attention.",
      badge: { id: "g5-winter-solar-system-explorer", name: "Solar System Explorer", emoji: "🪐" },
      estimatedMinutes: 7
    }
  }
};
