// Grade 6 Science — Week 2, Day 2.
// Topic: measurement and units.

export const grade6ScienceWeek2Day2 = {
  id: "g6.sci.w2.d2",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Measurement and units",
  topicTag: "measurement",
  estimatedMinutes: 16,
  standardsRefs: ["NGSS.SEP.5", "CCSS.6.RP.A.3.D"],
  hook: "Numbers without units are just digits. Today you match measurements to the right tool and the right unit.",
  miniLesson: [
    "Length is measured in mm, cm, m, or km. 1 m = 100 cm. 1 km = 1,000 m.",
    "Mass is measured in g and kg. 1 kg = 1,000 g.",
    "Time is measured in seconds, minutes, hours, days. 1 min = 60 s. 1 hr = 60 min."
  ],
  workedExample: {
    prompt: "A backpack weighs 4,500 grams. Convert to kilograms.",
    steps: [
      "Find the conversion: 1 kg = 1,000 g.",
      "Divide grams by 1,000: 4,500 ÷ 1,000.",
      "Result: 4.5 kg.",
      "Always include the unit so the reader knows what you measured."
    ],
    answer: "4.5 kg"
  },
  items: [
    {
      id: "g6.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "Which unit is best for measuring the length of a pencil?",
      choices: ["Millimeters", "Centimeters", "Meters", "Kilometers"],
      answerIndex: 1,
      explanation: "Pencils are usually 15–20 cm. Centimeters give a comfortable, readable number.",
      hintLadder: [
        "Pick the unit that won't give a gigantic or tiny number.",
        "A pencil is shorter than a meter.",
        "Centimeters are the right scale for everyday objects this size."
      ]
    },
    {
      id: "g6.sci.w2.d2.q2",
      type: "numeric",
      stem: "Convert 2.5 meters to centimeters.",
      answer: 250,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "1 m = 100 cm.",
        "Multiply meters by 100.",
        "2.5 × 100 = 250 cm."
      ],
      explanation: "2.5 × 100 = 250 cm."
    },
    {
      id: "g6.sci.w2.d2.q3",
      type: "numeric",
      stem: "Convert 3,200 grams to kilograms.",
      answer: 3.2,
      tolerance: 0.01,
      unit: "kg",
      hintLadder: [
        "1 kg = 1,000 g.",
        "Divide grams by 1,000.",
        "3,200 ÷ 1,000 = 3.2 kg."
      ],
      explanation: "3,200 ÷ 1,000 = 3.2 kg."
    },
    {
      id: "g6.sci.w2.d2.q4",
      type: "multiple_choice",
      stem: "Which tool measures the mass of a bag of apples?",
      choices: ["Ruler", "Stopwatch", "Kitchen scale", "Thermometer"],
      answerIndex: 2,
      explanation: "A scale measures mass. A thermometer measures temperature. A ruler measures length. A stopwatch measures time.",
      hintLadder: [
        "Match the tool to the property: length / mass / time / temperature.",
        "Mass = how much something weighs.",
        "A scale weighs things."
      ],
      misconceptionsTargeted: ["confuses-mass-with-volume"]
    },
    {
      id: "g6.sci.w2.d2.q5",
      type: "short_answer",
      stem:
        "A friend says they ran '5 today.' Why is that statement unclear, and what would you ask?",
      rubric: {
        level3: "Names that '5' has no unit and asks specifically for the unit (km, miles, minutes, laps).",
        level2: "Says it's unclear but doesn't propose a specific clarification.",
        level1: "Restates the question without explaining the issue."
      },
      exemplar:
        "It's unclear because there's no unit — 5 km and 5 minutes are very different. I'd ask: '5 what — kilometers, miles, or minutes?'",
      hintLadder: [
        "What's missing from the sentence '5 today'?",
        "Could it mean different things?",
        "Ask for the unit."
      ]
    }
  ],
  reflectionPrompt: "Today you matched units to measurements. What's a measurement you saw today that needed clearer units?",
  misconceptionBank: [
    {
      id: "confuses-mass-with-volume",
      label: "Confuses mass with volume",
      description: "Treats 'how big' (volume) and 'how heavy' (mass) as the same thing.",
      coachMove: "Show two same-size boxes — one full of feathers, one full of rocks. Same volume, very different mass."
    }
  ]
};
