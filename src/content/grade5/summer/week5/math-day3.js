// Grade 5 Summer Math — Week 5 (Earth and Inventions), Day 3.
// Grade-5 counterpart of g6.math.w5.d3 (measurement and scale), pitched down one
// level: whole-number and one-decimal scale problems, visual/step-by-step models,
// and vocab support. All numeric answers verified below.

export const summerG5MathW5D3 = {
  id: "g5.summer.math.w5.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Math",
  topic: "Measurement and scale",
  topicTag: "scale",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.A.1", "CCSS.5.NBT.B.5"],
  hook: "Inventors guess a size before they measure! Today you use a map scale and simple estimates to figure out real sizes in the world.",
  keyTerms: [
    { term: "Scale", definition: "A rule that tells you how a drawing size matches a real size, like 1 cm on a map = 5 m in real life." },
    { term: "Estimate", definition: "A smart guess about a size, using something you already know." },
    { term: "Sanity check", definition: "Asking \"does my answer make sense?\" after you solve." }
  ],
  miniLesson: [
    "A scale connects a drawing to real life. If 1 cm on a map means 5 meters in real life, then every 1 cm you measure stands for 5 real meters.",
    "To go from the map to real life, you MULTIPLY. If the map shows 3 cm and the scale is 1 cm = 5 m, then 3 x 5 = 15 real meters.",
    "Always do a sanity check. Ask, \"Does my answer make sense?\" A door is about 2 meters tall, not 200 meters."
  ],
  workedExample: {
    prompt:
      "A map has the scale 1 cm = 4 m. A path on the map is 6 cm long. How long is the real path?",
    steps: [
      "Every 1 cm on the map stands for 4 real meters.",
      "The path is 6 cm on the map.",
      "Multiply: 6 x 4 = 24.",
      "Sanity check: 24 meters is a normal path length, so that makes sense."
    ],
    answer: "24 meters"
  },
  items: [
    {
      id: "g5.summer.math.w5.d3.q1",
      type: "numeric",
      stem: "Scale: 1 cm = 10 m. A drawing shows a fence that is 5 cm long. How long is the real fence?",
      answer: 50,
      tolerance: 0,
      unit: "m",
      hintLadder: [
        "Every 1 cm stands for 10 m.",
        "Multiply the drawing length by 10: 5 x 10.",
        "5 x 10 = 50 m."
      ],
      explanation: "5 cm x 10 m per cm = 50 m."
    },
    {
      id: "g5.summer.math.w5.d3.q2",
      type: "numeric",
      stem: "A toy car is a small model of a real car. The real car is 480 cm long, and the toy is 24 times smaller. How long is the toy?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "24 times smaller means you divide by 24.",
        "480 divided by 24 = ?",
        "480 divided by 24 = 20 cm."
      ],
      explanation: "480 divided by 24 = 20 cm."
    },
    {
      id: "g5.summer.math.w5.d3.q3",
      type: "multiple_choice",
      stem: "Which is the best estimate for the height of a normal room door?",
      choices: ["20 cm", "2 m", "20 m", "200 m"],
      answerIndex: 1,
      explanation: "A door is about 2 meters tall, a little taller than a grown-up. 20 cm is too short, and 20 m would be taller than a house.",
      hintLadder: [
        "How tall are you next to a door?",
        "A door is a little taller than a grown-up.",
        "That is about 2 meters."
      ],
      misconceptionsTargeted: ["wrong-size-unit"]
    },
    {
      id: "g5.summer.math.w5.d3.q4",
      type: "numeric",
      stem: "A building has 4 floors and is 12 meters tall in all. About how tall is EACH floor?",
      answer: 3,
      tolerance: 0,
      unit: "m",
      hintLadder: [
        "Divide the total height by the number of floors.",
        "12 divided by 4 = ?",
        "12 divided by 4 = 3 m per floor."
      ],
      explanation: "12 m divided by 4 floors = 3 m per floor."
    },
    {
      id: "g5.summer.math.w5.d3.q5",
      type: "short_answer",
      stem: "Estimate how long your kitchen is by walking heel-to-toe and counting your steps. Say how many steps you took, how long one step is (about 0.5 m for many kids), and multiply to get your total. Then do a sanity check.",
      rubric: {
        level3: "Gives the number of steps, a length for one step (about 0.3 to 0.6 m), multiplies to get a total, AND adds a sanity check.",
        level2: "Gives steps and a total but is missing the step length OR the sanity check.",
        level1: "Just a number with no method."
      },
      exemplar:
        "I took 8 steps across my kitchen. One step is about 0.5 m. 8 x 0.5 = 4 m. Sanity check: 4 m is a normal kitchen length, so that makes sense.",
      hintLadder: [
        "Walk the kitchen counting your steps.",
        "One kid step is about 0.5 m, so multiply your steps by 0.5.",
        "Then ask if the answer sounds like a real kitchen size."
      ]
    }
  ],
  stretch: {
    stem: "Scale: 1 cm = 6 m. A river on the map is 7 cm long. How long is the real river? Show your thinking.",
    answer: 42,
    explanation: "Every 1 cm stands for 6 m. Multiply: 7 x 6 = 42 meters."
  },
  reflectionPrompt: "Today you used scale and estimates. What is a length around your home you would like to check by pacing it out?",
  misconceptionBank: [
    {
      id: "wrong-size-unit",
      label: "Picks a size that is way too big or small",
      description: "Says a door is 20 km tall or a person is 5 mm tall, so the size does not match real life.",
      coachMove: "Compare to something you know. A door is about your height plus a bit. Use that as your anchor to check the size."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Scale Riddle",
      prompt:
        "On a map, 1 cm stands for 100 km. Two cities are drawn 3 cm apart. How far apart are they in real life -- and would you walk it or ride?",
      answer:
        "3 x 100 = 300 km. That is way too far to walk, so you would ride or fly! You just read a map scale.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map Your Room to Scale",
      challenge:
        "Draw a small map of your room using a scale, like 1 cm on paper = 1 m in real life. Estimate the real size of your room, then shrink it down using your scale so it fits on the page.",
      materials: ["Paper, a ruler, and a pencil, OR a device to draw on"],
      steps: [
        "Pick your scale and write it at the top (for example, 1 cm = 1 m).",
        "Estimate or measure how long and wide your room is in meters.",
        "For each real meter, draw 1 cm on your map.",
        "Label the real sizes and sanity-check that the shape looks right."
      ],
      deliverable: "A scale map of your room with the scale written on it, the real sizes labeled, and the drawing shrunk to match.",
      choiceBoard: [
        "Draw a scale map of your whole room.",
        "Make a scale drawing of one big object, like your bed or a table.",
        "Make a scale card that turns map cm into real meters for your scale."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Scale Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.math.w5.d3.arena1",
          type: "numeric",
          stem: "A map uses the scale 1 cm = 8 m. A trail on the map is 5 cm long. How long is the real trail in meters?",
          answer: 40,
          tolerance: 0,
          unit: "m",
          hintLadder: [
            "Every 1 cm on the map stands for 8 m.",
            "Multiply the map length by the scale: 5 x 8.",
            "5 x 8 = 40 m."
          ],
          explanation: "5 cm x 8 m per cm = 40 m."
        },
        {
          id: "g5.summer.math.w5.d3.arena2",
          type: "numeric",
          stem: "A model tower is built 50 times smaller than the real tower. The real tower is 100 meters tall. How tall is the model, in meters?",
          answer: 2,
          tolerance: 0,
          unit: "m",
          hintLadder: [
            "50 times smaller means you divide by 50.",
            "100 divided by 50 = ?",
            "100 divided by 50 = 2 m."
          ],
          explanation: "100 m divided by 50 = 2 m for the model."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pace It Out",
      prompt:
        "Stand up and take 10 of your own steps across the room, counting as you go. Then guess how many meters that was. Movement plus estimating!",
      scienceTieIn: "Walking gets your blood pumping and sends oxygen to your brain, which sharpens your focus for careful measuring.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is something around your home you estimated or measured today? How close do you think your guess was to the real size?",
      badge: { id: "g5-summer-scale-scout", name: "Scale Scout", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
