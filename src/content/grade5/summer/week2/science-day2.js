// Grade 5 Summer — Week 2, Day 2.
// Topic: measurement and units (grade-5 depth: friendly conversions, whole/tenths).
// Grade-5 counterpart of grade6/week2/science-day2.js, pitched down.

export const summerG5ScienceW2D2 = {
  id: "g5.summer.sci.w2.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Measurement and units",
  topicTag: "measurement",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-3", "CCSS.5.MD.A.1"],
  hook: "A number without a unit is a mystery! Today you match each measurement to the right tool and the right unit.",
  miniLesson: [
    "Length is measured in cm, m, or km. Remember: 1 m = 100 cm, and 1 km = 1,000 m.",
    "Mass (how heavy something is) is measured in grams (g) and kilograms (kg). Remember: 1 kg = 1,000 g.",
    "Time is measured in seconds, minutes, and hours. Remember: 1 minute = 60 seconds, 1 hour = 60 minutes."
  ],
  workedExample: {
    prompt: "A water bottle holds 2,000 grams of water. How many kilograms is that?",
    steps: [
      "Recall the rule: 1 kg = 1,000 g.",
      "To go from grams to kilograms, divide by 1,000.",
      "2,000 ÷ 1,000 = 2.",
      "Answer: 2 kg. Always write the unit so people know what you measured!"
    ],
    answer: "2 kg"
  },
  items: [
    {
      id: "g5.summer.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "Which unit is best for measuring the length of your math notebook?",
      choices: ["Millimeters", "Kilometers", "Meters", "Centimeters"],
      answerIndex: 3,
      explanation: "A notebook is about 25–30 cm long. Centimeters give a number that is easy to read.",
      hintLadder: [
        "Pick the unit that won't give a giant or tiny number.",
        "A notebook is much shorter than a meter.",
        "Centimeters are the right size for everyday objects like a notebook."
      ]
    },
    {
      id: "g5.summer.sci.w2.d2.q2",
      type: "numeric",
      stem: "Convert 3 meters to centimeters. (Remember: 1 m = 100 cm.)",
      answer: 300,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "1 m = 100 cm.",
        "To go from meters to centimeters, multiply by 100.",
        "3 × 100 = 300 cm."
      ],
      explanation: "3 × 100 = 300 cm."
    },
    {
      id: "g5.summer.sci.w2.d2.q3",
      type: "numeric",
      stem: "Convert 4,000 grams to kilograms. (Remember: 1 kg = 1,000 g.)",
      answer: 4,
      tolerance: 0,
      unit: "kg",
      hintLadder: [
        "1 kg = 1,000 g.",
        "To go from grams to kilograms, divide by 1,000.",
        "4,000 ÷ 1,000 = 4 kg."
      ],
      explanation: "4,000 ÷ 1,000 = 4 kg."
    },
    {
      id: "g5.summer.sci.w2.d2.q4",
      type: "multiple_choice",
      stem: "Which tool would you use to measure the mass of a bunch of grapes?",
      choices: ["Ruler", "Stopwatch", "Kitchen scale", "Thermometer"],
      answerIndex: 2,
      explanation: "A scale measures mass. A ruler measures length, a stopwatch measures time, and a thermometer measures temperature.",
      hintLadder: [
        "Match the tool to the job: length, mass, time, or temperature.",
        "Mass means how heavy something is.",
        "A scale weighs things."
      ],
      misconceptionsTargeted: ["confuses-mass-with-volume"]
    },
    {
      id: "g5.summer.sci.w2.d2.q5",
      type: "short_answer",
      stem:
        "A friend says, 'I walked 3 today!' Why is that hard to understand, and what would you ask them?",
      rubric: {
        level3: "Says '3' has no unit and asks a specific question for the unit (km, blocks, miles, or minutes).",
        level2: "Says it is unclear but does not ask a specific question.",
        level1: "Just repeats the sentence without explaining the problem."
      },
      exemplar:
        "It's hard to understand because there is no unit — 3 kilometers and 3 minutes are very different. I'd ask, '3 what — kilometers, blocks, or minutes?'",
      hintLadder: [
        "What is missing from the words '3 today'?",
        "Could '3' mean more than one thing?",
        "Ask them for the unit."
      ]
    }
  ],
  reflectionPrompt: "Today you matched units to measurements. What is a measurement you saw today that needed a clearer unit?",
  misconceptionBank: [
    {
      id: "confuses-mass-with-volume",
      label: "Confuses mass with size",
      description: "Thinks 'how big' (size) and 'how heavy' (mass) mean the same thing.",
      coachMove: "Show two same-size bags — one of cotton balls, one of marbles. Same size, very different mass."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Unit Riddle",
      prompt:
        "I am a little word that gives a number its meaning. Say '50' by itself and nobody knows if you mean a short hop or a long trip — but add me, and suddenly they know. What am I?",
      answer:
        "A unit! '50' means nothing until you say 50 centimeters, 50 meters, or 50 kilometers. Units give numbers their meaning.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Measure My Room",
      challenge:
        "Be a measurement scientist for your space! Pick 4 objects around you and estimate, then measure, each one — choosing the smartest unit (cm, m, g, kg, or seconds) for each.",
      materials: ["A ruler or measuring tape, a kitchen scale if you have one, and something to write on"],
      steps: [
        "Pick 4 objects of very different sizes (a coin, a book, a chair, a doorway).",
        "First ESTIMATE each measurement with a unit, then measure it for real.",
        "Choose the best unit so each number is easy to read (not 0.02 m or 2000 mm).",
        "Make a table comparing your estimate to the real value for each object."
      ],
      deliverable: "A measurement table with estimate vs. actual and the chosen unit for 4 objects.",
      choiceBoard: [
        "Measure 4 objects with a ruler and scale and record a table.",
        "Do a 'unit scavenger hunt' — find one thing best measured in cm, one in m, and one in kg.",
        "Time 4 activities (tie a shoe, hop 10 times) and pick the best time unit for each."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Measurement Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.sci.w2.d2.arena1",
          type: "numeric",
          stem:
            "A bike path is 2 kilometers long. How many meters is that? (Remember: 1 km = 1,000 m.)",
          answer: 2000,
          tolerance: 0,
          unit: "m",
          hintLadder: [
            "1 km = 1,000 m.",
            "To go from kilometers to meters, multiply by 1,000.",
            "2 × 1,000 = 2,000 m."
          ],
          explanation: "2 km × 1,000 = 2,000 m."
        },
        {
          id: "g5.summer.sci.w2.d2.arena2",
          type: "multiple_choice",
          stem:
            "Three measurements lost their units: cookies baked for '15,' a jump rope is '3,' and a backpack's mass is '4.' Which set of units fits each one sensibly, in order (baking time, rope length, backpack mass)?",
          choices: [
            "minutes, kilometers, grams",
            "minutes, meters, kilograms",
            "seconds, meters, kilometers",
            "hours, millimeters, kilograms"
          ],
          answerIndex: 1,
          explanation:
            "Baking time fits minutes (15 minutes is reasonable; 15 seconds is too short). A jump rope fits meters (3 meters; 3 kilometers or 3 millimeters make no sense). A backpack's mass fits kilograms (4 kg; 4 grams is far too light). So: minutes, meters, kilograms.",
          hintLadder: [
            "Match each measurement to what it measures: time, length, or mass.",
            "Then pick a unit that makes the number sensible — not tiny or giant.",
            "15 minutes, a 3 meter rope, and a 4 kilogram backpack all make sense."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Human Measuring Tape",
      prompt:
        "Use your own body as a measuring tool! Walk heel-to-toe across the room and count how many of your foot-lengths it takes. Then count how many arm-spans wide a door is. Say each number out loud as you go.",
      scienceTieIn:
        "Moving and counting at the same time gets your body and brain working together, which boosts blood flow and helps you refocus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you saw that a number is not much use without its unit. When might using the WRONG unit (or none at all) cause a real problem in everyday life?",
      badge: { id: "g5-summer-unit-wizard", name: "Unit Wizard", emoji: "📏" },
      estimatedMinutes: 7
    }
  }
};
