// Grade 6 Math — Week 5, Day 3.
// Topic: measurement and scale (matches the invention theme).

export const grade6MathWeek5Day3 = {
  id: "g6.math.w5.d3",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Math",
  topic: "Measurement and scale",
  topicTag: "scale",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.3.D", "CCSS.6.G.A.1"],
  hook: "Inventors estimate before they measure. Today you use scale and rough numbers to size up the real world.",
  miniLesson: [
    "Scale converts between drawing size and real size: 1 cm on the map = 1 km in real life.",
    "Estimating is multiplying a unit you know by how many fit. A door is about 2 meters; how many doors tall is a 3-story building?",
    "Always check that your answer 'makes sense' — a person is not 300 meters tall."
  ],
  workedExample: {
    prompt:
      "A map has scale 1 cm = 5 km. The river on the map is 8 cm long. How long is the real river?",
    steps: [
      "Each cm = 5 km.",
      "8 cm × 5 km/cm = 40 km.",
      "Real river ≈ 40 km long.",
      "Sanity check: 40 km is a reasonable river length — yes, that makes sense."
    ],
    answer: "40 km"
  },
  items: [
    {
      id: "g6.math.w5.d3.q1",
      type: "numeric",
      stem: "Scale: 1 cm = 10 m. A blueprint shows a fence 4.5 cm long. How long is the real fence?",
      answer: 45,
      tolerance: 0,
      unit: "m",
      hintLadder: [
        "Each cm = 10 m.",
        "Multiply: 4.5 × 10.",
        "= 45 m."
      ],
      explanation: "4.5 × 10 = 45 m."
    },
    {
      id: "g6.math.w5.d3.q2",
      type: "numeric",
      stem: "A toy car model is 1/24 scale of a real car. The real car is 480 cm long. How long is the toy?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "1/24 scale means divide by 24.",
        "480 ÷ 24 = ?",
        "= 20 cm."
      ],
      explanation: "480 / 24 = 20 cm."
    },
    {
      id: "g6.math.w5.d3.q3",
      type: "multiple_choice",
      stem:
        "Which estimate is reasonable for the height of a typical school door?",
      choices: ["20 cm", "2 m", "20 m", "200 m"],
      answerIndex: 1,
      explanation: "A door is about 2 m tall. 20 cm is short, 20 m is taller than a building.",
      hintLadder: [
        "How tall are you compared to a door?",
        "A door is about head-height plus a bit.",
        "2 meters."
      ],
      misconceptionsTargeted: ["unit-magnitude-mismatch"]
    },
    {
      id: "g6.math.w5.d3.q4",
      type: "numeric",
      stem:
        "If a 3-story building is about 12 meters tall, roughly how tall is each floor?",
      answer: 4,
      tolerance: 0.5,
      unit: "m",
      hintLadder: [
        "Divide total height by number of floors.",
        "12 / 3 = ?",
        "About 4 m per floor."
      ],
      explanation: "12 m / 3 floors = 4 m per floor."
    },
    {
      id: "g6.math.w5.d3.q5",
      type: "short_answer",
      stem:
        "Estimate the length of your kitchen by 'pacing.' Say how many paces, what one of your paces is roughly worth, and your total.",
      rubric: {
        level3: "Provides number of paces, the length of one pace in meters (typically 0.5–1.0), and computes the product. Sanity-check included.",
        level2: "Paces and total but no pace length OR no sanity check.",
        level1: "Just a number with no method."
      },
      exemplar:
        "I paced my kitchen and got 5 paces. One of my paces is about 0.6 m. 5 × 0.6 = 3 m. Sanity check: 3 m is a reasonable kitchen length.",
      hintLadder: [
        "Walk the kitchen counting paces.",
        "Estimate one pace in meters (foot-length × 2 is a rough start).",
        "Multiply and sanity-check."
      ]
    }
  ],
  reflectionPrompt: "Today you estimated and scaled. What's a length around your home you'd want to check with paces?",
  misconceptionBank: [
    {
      id: "unit-magnitude-mismatch",
      label: "Picks a unit at the wrong magnitude",
      description: "Says a door is '20 km' or a person is '5 mm' — units don't match the real scale.",
      coachMove: "Compare to a known: a door is about your height plus a bit. Use that as an anchor."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Scale Riddle",
      prompt:
        "On a map, 1 cm stands for 100 km. Two cities are drawn 3 cm apart. The real distance is a number you'd recognize. What is it — and would you walk it or fly it?",
      answer:
        "3 cm × 100 km/cm = 300 km. That's a long drive or a short flight — definitely not a walk! You just read a scale.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map Your Room to Scale",
      challenge:
        "Draw a scale map of your room or a piece of furniture. Pick a scale (like 1 cm on paper = 20 cm in real life), measure or estimate the real sizes, then draw everything shrunk by that scale.",
      steps: [
        "Pick your scale and write it on the page (e.g., 1 cm = 20 cm).",
        "Measure or estimate the real length and width of your room or object.",
        "Divide each real measurement by the scale to get your drawing size.",
        "Draw it, label the real sizes, and sanity-check that the shapes look right."
      ],
      deliverable: "A scale drawing with the scale written on it, drawing sizes calculated, and real measurements labeled.",
      choiceBoard: [
        "Draw a scale map of your room.",
        "Make a scale drawing of one big object (bed, car, fridge).",
        "Build a 'scale ruler' card that converts drawing cm to real meters for your chosen scale."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Scale Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.math.w5.d3.arena1",
          type: "numeric",
          stem: "A map uses the scale 1 cm = 8 m. A path on the map measures 6.5 cm. How long is the real path in meters?",
          answer: 52,
          tolerance: 0,
          unit: "m",
          hintLadder: [
            "Each cm on the map stands for 8 m.",
            "Multiply the map length by the scale: 6.5 × 8.",
            "6.5 × 8 = 52 m."
          ],
          explanation: "6.5 cm × 8 m/cm = 52 m."
        },
        {
          id: "g6.math.w5.d3.arena2",
          type: "numeric",
          stem: "A model skyscraper is built at 1/48 scale. The real skyscraper is 96 m tall. How tall is the model, in meters?",
          answer: 2,
          tolerance: 0,
          unit: "m",
          hintLadder: [
            "1/48 scale means the model is the real size divided by 48.",
            "96 ÷ 48 = ?",
            "96 ÷ 48 = 2 m."
          ],
          explanation: "96 m ÷ 48 = 2 m for the model."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pace It Out",
      prompt:
        "Stand up and pace out 10 of your own steps across the room, counting as you go. Then guess how many meters that was. Movement plus estimation!",
      scienceTieIn: "Walking gets your blood pumping and delivers oxygen to your brain, sharpening the focus you need for careful estimating.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's something around your home you estimated or measured today? How close do you think your estimate was to the real size?",
      badge: { id: "scale-master", name: "Scale Master", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
