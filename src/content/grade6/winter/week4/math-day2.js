// Grade 6 Math — Winter Expedition, Week 4 (Space & the Solar System), Day 2.
// Topic: scale, large numbers, and distance — reading big numbers and shrinking
// astronomical distances down to a model you can actually build.

export const winterG6MathW4D2 = {
  id: "g6.winter.math.w4.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Math",
  topic: "Scale, large numbers, and distance in space",
  topicTag: "scale-and-distance",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.3", "CCSS.6.RP.A.3.B"],
  hook: "Space distances are so huge they're hard to picture. Today you become a model-maker: shrinking millions of kilometers down to centimeters so a whole solar system fits on your desk.",
  miniLesson: [
    "A SCALE is a fixed ratio that shrinks (or grows) real distances by the same factor. A model of '1 cm = 10 million km' means every 10 million real km becomes 1 cm on your model.",
    "Astronomers measure planet distances in Astronomical Units (AU). 1 AU is the distance from the Sun to Earth, about 150 million km.",
    "To place a planet on your model, multiply its AU distance by the model's cm-per-AU scale. Keep the scale the SAME for every planet so the model stays true."
  ],
  workedExample: {
    prompt: "Your model uses a scale of 2 cm per AU. Mars is 1.5 AU from the Sun. How far from the model Sun do you place Mars?",
    steps: [
      "The scale says every 1 AU becomes 2 cm on the model.",
      "Mars is 1.5 AU from the Sun.",
      "Multiply: 1.5 AU × 2 cm per AU = 3 cm.",
      "Place Mars 3 cm from the model Sun."
    ],
    answer: "3 cm from the model Sun."
  },
  items: [
    {
      id: "g6.winter.math.w4.d2.q1",
      type: "numeric",
      stem: "A solar-system model uses a scale of 10 cm per AU. Jupiter is 5 AU from the Sun. How many centimeters from the model Sun do you place Jupiter?",
      answer: 50,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Each 1 AU becomes 10 cm on this model.",
        "Multiply Jupiter's distance in AU by 10.",
        "5 × 10 = 50 cm."
      ],
      explanation: "5 AU × 10 cm per AU = 50 cm from the model Sun."
    },
    {
      id: "g6.winter.math.w4.d2.q2",
      type: "numeric",
      stem: "On the same 10 cm-per-AU model, Neptune sits 300 cm from the Sun. How many AU is Neptune from the Sun in real life?",
      answer: 30,
      tolerance: 0,
      unit: "AU",
      hintLadder: [
        "You know cm and the scale is 10 cm per AU.",
        "To go from cm back to AU, divide by the scale.",
        "300 ÷ 10 = 30 AU."
      ],
      explanation: "Reverse the scale: 300 cm ÷ 10 cm per AU = 30 AU.",
      misconceptionsTargeted: ["scale-wrong-operation"]
    },
    {
      id: "g6.winter.math.w4.d2.q3",
      type: "multiple_choice",
      stem: "The distance from the Sun to Earth is about 150,000,000 km. Written in words, this number is:",
      choices: [
        "One hundred fifty thousand",
        "One hundred fifty million",
        "One hundred fifty billion",
        "Fifteen million"
      ],
      answerIndex: 1,
      explanation: "150,000,000 has the digits 150 followed by six zeros, which is one hundred fifty million.",
      hintLadder: [
        "Count the zeros: there are six after 150.",
        "Six zeros after a number of ones means 'million.'",
        "150 with six zeros = one hundred fifty million."
      ]
    },
    {
      id: "g6.winter.math.w4.d2.q4",
      type: "numeric",
      stem: "1 AU is about 150 million km. On a model where 1 AU = 4 cm, how many centimeters from the Sun is Earth placed? (Earth is exactly 1 AU from the Sun.)",
      answer: 4,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Earth is 1 AU from the Sun.",
        "The scale says 1 AU becomes 4 cm.",
        "1 × 4 = 4 cm."
      ],
      explanation: "Earth = 1 AU, and 1 AU × 4 cm per AU = 4 cm."
    },
    {
      id: "g6.winter.math.w4.d2.q5",
      type: "short_answer",
      stem: "Your model uses 2 cm per AU. Saturn is about 10 AU from the Sun and Uranus is about 20 AU. Explain how to find each planet's model distance, and give both answers.",
      rubric: {
        level3: "Multiplies each AU distance by 2 cm per AU (Saturn 20 cm, Uranus 40 cm) and explains that the same scale is applied to both.",
        level2: "Gets one distance correct or shows the method but makes an arithmetic slip.",
        level1: "Uses the wrong operation or gives no reasoning."
      },
      exemplar: "Multiply each planet's AU distance by the scale of 2 cm per AU. Saturn: 10 × 2 = 20 cm. Uranus: 20 × 2 = 40 cm. Using the same scale for both keeps the model accurate.",
      hintLadder: [
        "The scale is 2 cm for every 1 AU.",
        "Multiply each planet's AU distance by 2.",
        "Saturn: 10 × 2, Uranus: 20 × 2."
      ]
    }
  ],
  reflectionPrompt: "Why do you think scientists invented the Astronomical Unit instead of always writing distances in kilometers? What makes big numbers hard to work with?",
  misconceptionBank: [
    {
      id: "scale-wrong-operation",
      label: "Uses the wrong operation when converting model to real (or back)",
      description: "Multiplies when they should divide (or vice versa) when moving between model cm and real AU.",
      coachMove: "Ask: 'Am I making the number bigger (real → model, multiply by scale) or smaller (model → real, divide by scale)?' Check that the answer makes sense."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Scale It?",
      prompt:
        "Would you rather build a model where 1 AU = 1 cm (Neptune ends up 30 cm away — fits on a desk) or 1 AU = 1 meter (Neptune ends up 30 meters away — needs a whole hallway)? Work out where Neptune lands in each before you choose!",
      answer:
        "At 1 cm per AU, Neptune (30 AU) is 30 × 1 = 30 cm away. At 1 m per AU, Neptune is 30 × 1 = 30 m away. Same scale factor, but the unit changes everything — one fits on a desk, the other fills a hallway.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Scale Model Plan",
      challenge:
        "Pick a scale (like 1 cm per AU) and make a table showing where each of the eight planets would go on your model. Use these AU distances: Mercury 0.4, Venus 0.7, Earth 1, Mars 1.5, Jupiter 5, Saturn 10, Uranus 20, Neptune 30.",
      steps: [
        "Choose a scale in cm per AU that fits the space you have.",
        "For each planet, multiply its AU distance by your scale to get its model distance.",
        "Write the results in a neat table: planet, AU, model distance.",
        "Circle which planets are surprisingly close together and which are shockingly far apart."
      ],
      deliverable: "A completed scale table listing all eight planets with their model distances, plus your chosen scale.",
      choiceBoard: [
        "Make the scale table on paper or in a spreadsheet.",
        "Actually pace out the model in a hallway or yard using a tape measure.",
        "Draw the model to scale on a long strip of paper and label each planet's distance."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Scale & Distance Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w4.d2.arena1",
          type: "numeric",
          stem: "On a model with a scale of 5 cm per AU, how far from the Sun is Saturn placed if Saturn is 10 AU away?",
          answer: 50,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Each 1 AU becomes 5 cm on this model.",
            "Multiply Saturn's 10 AU by 5.",
            "10 × 5 = 50 cm."
          ],
          explanation: "10 AU × 5 cm per AU = 50 cm from the model Sun."
        },
        {
          id: "g6.winter.math.w4.d2.arena2",
          type: "numeric",
          stem: "Neptune is about 30 AU from the Sun and Uranus is about 20 AU. On a model of 3 cm per AU, how many centimeters APART are Uranus and Neptune?",
          answer: 30,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find the real gap in AU: 30 − 20 = 10 AU.",
            "Now scale that gap: multiply by 3 cm per AU.",
            "10 × 3 = 30 cm apart."
          ],
          explanation: "Gap = 30 − 20 = 10 AU; 10 AU × 3 cm per AU = 30 cm apart."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Big-Number Countdown Stretch",
      prompt:
        "Do a rocket-launch countdown with your body: crouch low for '10,' and rise a little on each number — 9, 8, 7... — reaching all the way up and onto your toes at '1... blastoff!' Then float your arms back down slowly like a settling spacecraft.",
      scienceTieIn: "Counting down and stretching upward gets your blood flowing and resets your focus, the same way a slow warm-up helps before tackling big-number math.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Scaling shrinks huge numbers into ones you can handle. Where else in real life do people use scale to make something too big (or too small) easier to understand?",
      badge: { id: "cosmic-scale-master", name: "Cosmic Scale Master", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
