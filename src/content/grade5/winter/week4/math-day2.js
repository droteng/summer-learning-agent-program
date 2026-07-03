// Grade 5 Math — Winter Expedition, Week 4 (Space & the Solar System), Day 2.
// Topic: scale and distance in space — shrinking big distances down to a model
// using simple whole-number multiplication and division.
// Grade 5 counterpart of g6.winter.math.w4.d2: whole numbers only, simple
// scales, and visual/model-based scaffolding.

export const winterG5MathW4D2 = {
  id: "g5.winter.math.w4.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Math",
  topic: "Scale and distance in space (whole-number models)",
  topicTag: "scale-and-distance",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.5", "CCSS.5.OA.A.1"],
  hook: "Space is so huge that the real distances are hard to picture. Today you become a model-maker: using a simple rule to shrink giant distances down to centimeters so a whole solar system fits on your desk.",
  miniLesson: [
    "A SCALE is a rule that shrinks real distances by the same amount every time. A scale of '2 cm for each step out' means every step a planet is from the Sun becomes 2 cm on your model.",
    "We can count planet distances in 'steps' from the Sun. To find where a planet goes on the model, MULTIPLY its number of steps by the cm in the scale.",
    "To go the other way — from model centimeters back to steps — you DIVIDE by the scale. Always keep the same scale for every planet so the model stays fair."
  ],
  workedExample: {
    prompt: "Your model uses a scale of 2 cm for each step. A planet is 3 steps from the Sun. How far from the model Sun do you place it?",
    steps: [
      "The scale says every 1 step becomes 2 cm on the model.",
      "The planet is 3 steps from the Sun.",
      "Multiply: 3 steps × 2 cm = 6 cm.",
      "Place the planet 6 cm from the model Sun."
    ],
    answer: "6 cm from the model Sun."
  },
  items: [
    {
      id: "g5.winter.math.w4.d2.q1",
      type: "numeric",
      stem: "A solar-system model uses a scale of 10 cm for each step. Jupiter is 5 steps from the Sun. How many centimeters from the model Sun do you place Jupiter?",
      answer: 50,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Each 1 step becomes 10 cm on this model.",
        "Multiply Jupiter's 5 steps by 10.",
        "5 × 10 = 50 cm."
      ],
      explanation: "5 steps × 10 cm = 50 cm from the model Sun."
    },
    {
      id: "g5.winter.math.w4.d2.q2",
      type: "numeric",
      stem: "On the same 10 cm-per-step model, Neptune sits 300 cm from the Sun. How many steps is Neptune from the Sun?",
      answer: 30,
      tolerance: 0,
      unit: "steps",
      hintLadder: [
        "You know the cm, and the scale is 10 cm for each step.",
        "To get steps from cm, divide by the scale.",
        "300 ÷ 10 = 30 steps."
      ],
      explanation: "Divide to reverse the scale: 300 cm ÷ 10 cm = 30 steps.",
      misconceptionsTargeted: ["scale-wrong-operation"]
    },
    {
      id: "g5.winter.math.w4.d2.q3",
      type: "multiple_choice",
      stem: "The distance from the Sun to Earth is about 150,000,000 km. In words, this number is:",
      choices: [
        "One hundred fifty thousand",
        "One hundred fifty million",
        "One hundred fifty billion",
        "Fifteen million"
      ],
      answerIndex: 1,
      explanation: "150,000,000 is the digits 150 followed by six zeros, which we say as one hundred fifty million.",
      hintLadder: [
        "Count the zeros: there are six after 150.",
        "Six zeros after a number means 'million.'",
        "150 with six zeros = one hundred fifty million."
      ]
    },
    {
      id: "g5.winter.math.w4.d2.q4",
      type: "numeric",
      stem: "Earth is 1 step from the Sun. On a model where each step = 4 cm, how many centimeters from the Sun is Earth placed?",
      answer: 4,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Earth is 1 step from the Sun.",
        "The scale says 1 step becomes 4 cm.",
        "1 × 4 = 4 cm."
      ],
      explanation: "Earth = 1 step, and 1 step × 4 cm = 4 cm."
    },
    {
      id: "g5.winter.math.w4.d2.q5",
      type: "short_answer",
      stem: "Your model uses 2 cm for each step. Saturn is 10 steps from the Sun and Uranus is 20 steps. Explain how to find each planet's model distance, and give both answers.",
      rubric: {
        level3: "Multiplies each step count by 2 cm (Saturn 20 cm, Uranus 40 cm) and explains that the same scale is used for both planets.",
        level2: "Gets one distance correct or shows the method but makes an arithmetic slip.",
        level1: "Uses the wrong operation or gives no reasoning."
      },
      exemplar: "Multiply each planet's steps by the scale of 2 cm. Saturn: 10 × 2 = 20 cm. Uranus: 20 × 2 = 40 cm. Using the same scale for both keeps the model fair.",
      hintLadder: [
        "The scale is 2 cm for every 1 step.",
        "Multiply each planet's steps by 2.",
        "Saturn: 10 × 2, Uranus: 20 × 2."
      ]
    }
  ],
  reflectionPrompt: "Why do you think scientists use models and scales instead of always working with the real, giant numbers? What makes big numbers hard to work with?",
  misconceptionBank: [
    {
      id: "scale-wrong-operation",
      label: "Uses the wrong operation when switching between model and real distance",
      description: "Multiplies when they should divide (or the other way around) when moving between model cm and real steps.",
      coachMove: "Ask: 'Am I making the number bigger (steps → model cm, so multiply) or smaller (model cm → steps, so divide)?' Then check the answer makes sense."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Scale It?",
      prompt:
        "Would you rather build a model where each step = 1 cm (Neptune, 30 steps out, ends up 30 cm away — fits on a desk) or each step = 1 meter (Neptune ends up 30 meters away — needs a whole hallway)? Work out where Neptune lands in each before you choose!",
      answer:
        "At 1 cm per step, Neptune (30 steps) is 30 × 1 = 30 cm away. At 1 meter per step, Neptune is 30 × 1 = 30 meters away. Same numbers, but the unit changes everything — one fits on a desk, the other fills a hallway.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Scale Model Plan",
      challenge:
        "Pick a scale (like 1 cm for each step) and make a table showing where each of the eight planets would go on your model. Use these step distances from the Sun: Mercury 1, Venus 1, Earth 1, Mars 2, Jupiter 5, Saturn 10, Uranus 20, Neptune 30.",
      steps: [
        "Choose a scale in cm for each step that fits the space you have.",
        "For each planet, multiply its steps by your scale to get its model distance.",
        "Write the results in a neat table: planet, steps, model distance.",
        "Circle which planets are surprisingly close together and which are shockingly far apart."
      ],
      deliverable: "A completed scale table listing all eight planets with their model distances, plus your chosen scale.",
      choiceBoard: [
        "Make the scale table on paper or in a spreadsheet.",
        "Actually pace out the model in a hallway using a tape measure.",
        "Draw the model on a long strip of paper and label each planet's distance."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Scale & Distance Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.math.w4.d2.arena1",
          type: "numeric",
          stem: "On a model with a scale of 5 cm for each step, how far from the Sun is Saturn placed if Saturn is 10 steps away?",
          answer: 50,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Each 1 step becomes 5 cm on this model.",
            "Multiply Saturn's 10 steps by 5.",
            "10 × 5 = 50 cm."
          ],
          explanation: "10 steps × 5 cm = 50 cm from the model Sun."
        },
        {
          id: "g5.winter.math.w4.d2.arena2",
          type: "numeric",
          stem: "Neptune is 30 steps from the Sun and Uranus is 20 steps. On a model of 3 cm for each step, how many centimeters APART are Uranus and Neptune?",
          answer: 30,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find the gap in steps: 30 − 20 = 10 steps.",
            "Now scale that gap: multiply by 3 cm.",
            "10 × 3 = 30 cm apart."
          ],
          explanation: "Gap = 30 − 20 = 10 steps; 10 steps × 3 cm = 30 cm apart."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Big-Number Countdown Stretch",
      prompt:
        "Do a rocket-launch countdown with your body: crouch low for '10,' and rise a little on each number — 9, 8, 7... — reaching all the way up onto your toes at '1... blastoff!' Then float your arms back down slowly like a settling spacecraft.",
      scienceTieIn: "Counting down and stretching up gets your blood flowing and resets your focus, just like a slow warm-up helps before tackling big-number math.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Scaling shrinks huge numbers into ones you can handle. Where else in real life do people use scale to make something too big (or too small) easier to understand?",
      badge: { id: "g5-winter-scale-model-maker", name: "Scale Model Maker", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
