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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Unit Riddle",
      prompt:
        "I am a number nobody can trust on my own. Tell people '100' and they panic or shrug — but add me and they finally know if you mean a sprint, a marathon, or a snail's crawl. What am I?",
      answer:
        "A unit! '100' is meaningless until you say 100 millimeters, 100 meters, or 100 kilometers. Units give numbers their meaning.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Measure My Room",
      challenge:
        "Become a measurement scientist for your space. Pick 4 objects around you and estimate, then measure, each one — choosing the smartest unit for every measurement (mm, cm, m, g, kg, or seconds).",
      materials: ["A ruler or measuring tape, a scale if handy, and something to record on"],
      steps: [
        "Pick 4 objects of very different sizes (a coin, a book, a table, a doorway).",
        "First ESTIMATE each measurement with a unit, then measure for real.",
        "Pick the best unit so each number is easy to read (not 0.002 m or 2000 mm).",
        "Make a table comparing your estimate to the real value for each object."
      ],
      deliverable: "A measurement table with estimate vs. actual and the chosen unit for 4 objects.",
      choiceBoard: [
        "Measure 4 objects with a ruler and scale and record a table.",
        "Do a 'unit scavenger hunt' — find one thing best measured in mm, cm, m, and kg.",
        "Time 4 activities (tie a shoe, sing a chorus) and pick the best time unit for each."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Measurement Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.sci.w2.d2.arena1",
          type: "numeric",
          stem:
            "A hiking trail is 3 kilometers long. A scientist needs the length in centimeters. How many centimeters is the trail? (1 km = 1,000 m, 1 m = 100 cm)",
          answer: 300000,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First turn kilometers into meters: 3 km × 1,000.",
            "That's 3,000 meters. Now turn meters into centimeters.",
            "3,000 m × 100 = 300,000 cm."
          ],
          explanation: "3 km × 1,000 = 3,000 m, and 3,000 m × 100 = 300,000 cm."
        },
        {
          id: "g6.sci.w2.d2.arena2",
          type: "multiple_choice",
          stem:
            "Three measurements each lost their unit: a cake baked for '40,' a dog's leash is '2,' and a watermelon's mass is '5.' Which set of units fits each measurement sensibly, in order (baking time, leash length, watermelon mass)?",
          choices: [
            "minutes, meters, kilograms",
            "minutes, kilometers, grams",
            "seconds, meters, kilometers",
            "hours, millimeters, kilograms"
          ],
          answerIndex: 0,
          explanation:
            "Baking time is measured in minutes (40 minutes is reasonable; 40 seconds is too short and 40 hours far too long). A leash length fits meters (2 meters; 2 kilometers or 2 millimeters make no sense). A watermelon's mass fits kilograms (5 kg; 5 grams is a feather, not a melon). So: minutes, meters, kilograms.",
          hintLadder: [
            "Match each measurement to what it measures: time, length, or mass.",
            "Then pick a unit that makes the number sensible — not absurdly tiny or huge.",
            "40 minutes, a 2 meter leash, and a 5 kilogram melon all make sense."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Human Measuring Tape",
      prompt:
        "Use your own body as a measuring tool! Pace out how many of your foot-lengths it takes to cross the room, then how many arm-spans tall a door is. Walk it heel-to-toe and count out loud.",
      scienceTieIn:
        "Moving and counting at the same time gets your body and brain coordinating, which boosts blood flow and helps you refocus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you saw that a number is useless without its unit. When might using the WRONG unit (or none at all) cause a real problem in everyday life?",
      badge: { id: "unit-wizard", name: "Unit Wizard", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
