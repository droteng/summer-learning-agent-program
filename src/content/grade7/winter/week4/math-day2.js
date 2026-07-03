// Grade 7 Math — Winter Expedition, Week 4 (Space & the Solar System), Day 2.
// Topic: scale, large numbers, proportional reasoning, and distance — shrinking
// astronomical distances to a model using ratios and unit rates (Grade 7 depth).

export const winterG7MathW4D2 = {
  id: "g7.winter.math.w4.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Math",
  topic: "Scale, proportions, large numbers, and distance in space",
  topicTag: "scale-and-distance",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.1", "CCSS.7.RP.A.2"],
  hook: "Space distances are so huge they're hard to picture. Today you become a proportion-master: using ratios and unit rates to shrink hundreds of millions of kilometers down to centimeters, so a true-to-scale solar system fits on your desk.",
  miniLesson: [
    "A SCALE is a ratio (a constant of proportionality) that shrinks every real distance by the same factor. A scale of '2 cm per AU' means model distance = 2 × (real distance in AU), a proportional relationship.",
    "Astronomers measure distances in Astronomical Units (AU), where 1 AU ≈ 150 million km — the Sun–Earth distance. To convert AU to km, multiply by 150,000,000; to convert km to AU, divide by 150,000,000.",
    "Because the scale is a constant unit rate, you can move both directions: real → model means MULTIPLY by the scale, and model → real means DIVIDE by the scale. Keep the same ratio for every planet so the model stays proportional."
  ],
  workedExample: {
    prompt: "Your model uses a scale of 2.5 cm per AU. Mars is 1.5 AU from the Sun. How far from the model Sun do you place Mars, and how far is that in real kilometers?",
    steps: [
      "Model distance = scale × AU distance = 2.5 cm/AU × 1.5 AU.",
      "2.5 × 1.5 = 3.75 cm on the model.",
      "Real distance in km = 1.5 AU × 150,000,000 km/AU = 225,000,000 km.",
      "So Mars is 3.75 cm from the model Sun, representing 225 million km."
    ],
    answer: "3.75 cm from the model Sun, representing 225,000,000 km (225 million km)."
  },
  items: [
    {
      id: "g7.winter.math.w4.d2.q1",
      type: "numeric",
      stem: "A solar-system model uses a scale of 4 cm per AU. Jupiter is 5.2 AU from the Sun. How many centimeters from the model Sun do you place Jupiter?",
      answer: 20.8,
      tolerance: 0.01,
      unit: "cm",
      hintLadder: [
        "Model distance = scale × AU distance.",
        "Multiply 5.2 AU by 4 cm per AU.",
        "5.2 × 4 = 20.8 cm."
      ],
      explanation: "5.2 AU × 4 cm/AU = 20.8 cm from the model Sun."
    },
    {
      id: "g7.winter.math.w4.d2.q2",
      type: "numeric",
      stem: "On a model with a scale of 6 cm per AU, Neptune sits 180 cm from the Sun. How many AU is Neptune from the Sun in real life?",
      answer: 30,
      tolerance: 0,
      unit: "AU",
      hintLadder: [
        "Going from model cm back to real AU means dividing by the scale.",
        "Divide 180 cm by 6 cm per AU.",
        "180 ÷ 6 = 30 AU."
      ],
      explanation: "Reverse the scale: 180 cm ÷ 6 cm/AU = 30 AU.",
      misconceptionsTargeted: ["scale-wrong-operation"]
    },
    {
      id: "g7.winter.math.w4.d2.q3",
      type: "multiple_choice",
      stem: "The distance from the Sun to Neptune is about 4,500,000,000 km. Written in words, this number is:",
      choices: [
        "Four hundred fifty million",
        "Four and a half billion",
        "Forty-five million",
        "Four and a half trillion"
      ],
      answerIndex: 1,
      explanation: "4,500,000,000 has the digits 45 followed by eight zeros (4.5 with nine zeros total from the 4), which is four and a half billion.",
      hintLadder: [
        "Count the zeros: there are nine digits after the leading 4.",
        "A 1 followed by nine zeros is one billion.",
        "4,500,000,000 = four and a half billion."
      ]
    },
    {
      id: "g7.winter.math.w4.d2.q4",
      type: "numeric",
      stem: "1 AU ≈ 150,000,000 km. Saturn is about 9.5 AU from the Sun. How many kilometers is that? Give your answer in millions of km (for example, 300 means 300 million km).",
      answer: 1425,
      tolerance: 0,
      unit: "million km",
      hintLadder: [
        "Real km = AU distance × 150,000,000 km per AU.",
        "In millions: multiply 9.5 by 150.",
        "9.5 × 150 = 1,425 million km."
      ],
      explanation: "9.5 AU × 150 million km/AU = 1,425 million km (1,425,000,000 km)."
    },
    {
      id: "g7.winter.math.w4.d2.q5",
      type: "short_answer",
      stem: "Your model uses 3 cm per AU. Saturn is about 9.5 AU from the Sun and Uranus is about 19.2 AU. Explain how to find each planet's model distance using the same scale, and give both answers.",
      rubric: {
        level3: "Multiplies each AU distance by the constant 3 cm/AU (Saturn 28.5 cm, Uranus 57.6 cm) and explains that applying the identical ratio to both keeps the model proportional.",
        level2: "Gets one distance correct or shows the correct method but makes an arithmetic slip.",
        level1: "Uses the wrong operation or gives no reasoning."
      },
      exemplar: "The scale is a constant ratio, so model distance = 3 cm/AU × AU distance for every planet. Saturn: 9.5 × 3 = 28.5 cm. Uranus: 19.2 × 3 = 57.6 cm. Using the same ratio for both keeps the model true to scale.",
      hintLadder: [
        "The scale is a constant 3 cm for every 1 AU.",
        "Multiply each planet's AU distance by 3.",
        "Saturn: 9.5 × 3, Uranus: 19.2 × 3."
      ]
    }
  ],
  reflectionPrompt: "Why do you think scientists invented the Astronomical Unit and use ratios instead of always writing distances in kilometers? What makes billion-scale numbers hard to reason about directly?",
  misconceptionBank: [
    {
      id: "scale-wrong-operation",
      label: "Uses the wrong operation when converting model to real (or back)",
      description: "Multiplies when they should divide (or vice versa) when moving between model cm and real AU.",
      coachMove: "Ask: 'Am I making the number bigger (real → model, multiply by the scale) or smaller (model → real, divide by the scale)?' Then check the answer is reasonable."
    },
    {
      id: "place-value-billions",
      label: "Miscounts place value in millions vs. billions",
      description: "Reads 4,500,000,000 as millions, or loses track of zeros when scaling large numbers.",
      coachMove: "Group digits in threes and name each group: thousand, million, billion. A 1 with nine zeros is one billion."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Scale It?",
      prompt:
        "Would you rather build a model where 1 AU = 2 cm (Neptune, 30 AU, ends up 60 cm away — fits on a table) or 1 AU = 2 m (Neptune ends up 60 m away — needs a soccer field)? Work out where Neptune lands in each before you choose!",
      answer:
        "At 2 cm per AU, Neptune (30 AU) is 30 × 2 = 60 cm away. At 2 m per AU, Neptune is 30 × 2 = 60 m away. The scale factor is the same 60 units — but the unit changes everything: 60 cm fits on a table; 60 m needs a field.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Scale Model Plan",
      challenge:
        "Pick a scale (like 3 cm per AU) and make a table showing where each of the eight planets would go on your model. Use these AU distances: Mercury 0.4, Venus 0.7, Earth 1, Mars 1.5, Jupiter 5.2, Saturn 9.5, Uranus 19.2, Neptune 30.",
      steps: [
        "Choose a scale in cm per AU that fits the space you have.",
        "For each planet, multiply its AU distance by your scale to get its model distance.",
        "Record the results in a neat table: planet, AU, model distance (cm).",
        "Circle the huge outer gaps and note how much bigger they are than the inner ones — this is the non-linear spacing of space."
      ],
      deliverable: "A completed scale table listing all eight planets with model distances, your chosen scale, and a note on the outer-gap pattern.",
      choiceBoard: [
        "Make the scale table on paper or in a spreadsheet.",
        "Pace out the model in a hallway or yard using a tape measure.",
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
          id: "g7.winter.math.w4.d2.arena1",
          type: "numeric",
          stem: "On a model with a scale of 5 cm per AU, how far from the Sun is Saturn placed if Saturn is 9.5 AU away?",
          answer: 47.5,
          tolerance: 0.01,
          unit: "cm",
          hintLadder: [
            "Model distance = scale × AU distance.",
            "Multiply 9.5 AU by 5 cm per AU.",
            "9.5 × 5 = 47.5 cm."
          ],
          explanation: "9.5 AU × 5 cm/AU = 47.5 cm from the model Sun."
        },
        {
          id: "g7.winter.math.w4.d2.arena2",
          type: "numeric",
          stem: "Neptune is about 30 AU from the Sun and Uranus is about 19.2 AU. On a model of 3 cm per AU, how many centimeters APART are Uranus and Neptune?",
          answer: 32.4,
          tolerance: 0.01,
          unit: "cm",
          hintLadder: [
            "First find the real gap in AU: 30 − 19.2 = 10.8 AU.",
            "Now scale that gap by multiplying by 3 cm per AU.",
            "10.8 × 3 = 32.4 cm."
          ],
          explanation: "Gap = 30 − 19.2 = 10.8 AU; 10.8 AU × 3 cm/AU = 32.4 cm apart."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Big-Number Countdown Stretch",
      prompt:
        "Do a rocket-launch countdown with your body: crouch low for '10,' rising a little on each number — 9, 8, 7... — reaching all the way up onto your toes at '1... blastoff!' Then float your arms back down slowly like a settling spacecraft.",
      scienceTieIn: "Counting down and stretching gets blood flowing and resets your focus — a small warm-up, just like breaking a billion-scale number into groups of three before you work with it.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Scaling with ratios shrinks huge numbers into ones you can handle. Where else in real life do people use a fixed scale or ratio to make something too big (or too small) easier to understand?",
      badge: { id: "g7-winter-proportion-pilot", name: "Proportion Pilot", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
