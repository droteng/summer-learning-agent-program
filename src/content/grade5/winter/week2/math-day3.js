// Grade 5 Math — Winter Expedition, Week 2 (Energy & Matter), Day 3.
// Topic: reading a thermometer and finding simple temperature differences.
// Grade 5 counterpart of g6.winter.math.w2.d3 (integers). Pitched DOWN: students
// READ a thermometer and find POSITIVE differences — NO signed-number arithmetic.

export const winterG5MathW2D3 = {
  id: "g5.winter.math.w2.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Math",
  topic: "Reading a thermometer and finding temperature differences",
  topicTag: "thermometer-differences",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.A.1", "CCSS.5.NBT.B.7"],
  hook: "A thermometer is a number line standing straight up. Today you read winter temperatures, find how many degrees warmer or colder one day is than another, and figure out which day was the coldest.",
  miniLesson: [
    "A thermometer is a number line. Higher up means warmer; lower down means colder. To read it, find the line the top of the liquid reaches.",
    "To find the DIFFERENCE between two temperatures, subtract the smaller (colder) number from the bigger (warmer) number. The answer tells you how many degrees apart they are.",
    "The number 0 degrees C is the freezing point of water. A temperature just above 0 is a little warmer than freezing; higher numbers are warmer still."
  ],
  workedExample: {
    prompt: "At dawn the thermometer read 3 degrees C. By noon it read 12 degrees C. How many degrees did the temperature rise?",
    steps: [
      "Rising means we find how far it went from 3 up to 12.",
      "Subtract the smaller number from the bigger number.",
      "12 − 3 = 9.",
      "The temperature rose 9 degrees."
    ],
    answer: "9 degrees"
  },
  items: [
    {
      id: "g5.winter.math.w2.d3.q1",
      type: "multiple_choice",
      stem: "Which temperature is the WARMEST?",
      choices: ["2 degrees C", "9 degrees C", "0 degrees C", "5 degrees C"],
      answerIndex: 1,
      explanation: "Higher numbers are warmer. 9 is the biggest number, so 9 degrees C is the warmest.",
      hintLadder: [
        "Warmer means a higher number, farther up the thermometer.",
        "Which number is the biggest?",
        "9 is the biggest, so it is warmest."
      ],
      misconceptionsTargeted: ["misreads-thermometer-direction"]
    },
    {
      id: "g5.winter.math.w2.d3.q2",
      type: "numeric",
      stem: "Monday's high was 14 degrees C and Tuesday's high was 6 degrees C. How many degrees apart are the two highs?",
      answer: 8,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Subtract the smaller temperature from the bigger one.",
        "14 − 6.",
        "14 − 6 = 8 degrees apart."
      ],
      explanation: "The difference is 14 − 6 = 8 degrees."
    },
    {
      id: "g5.winter.math.w2.d3.q3",
      type: "numeric",
      stem: "The temperature is 10 degrees C. During the afternoon it FALLS 4 degrees. What is the new temperature, in degrees C?",
      answer: 6,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "Falling means the temperature goes down, so subtract.",
        "Start at 10 and go down 4.",
        "10 − 4 = 6."
      ],
      explanation: "Falling 4 degrees from 10: 10 − 4 = 6 degrees C."
    },
    {
      id: "g5.winter.math.w2.d3.q4",
      type: "numeric",
      stem: "At 6 a.m. a thermometer read 2 degrees C. By afternoon it read 11 degrees C. How many degrees did it rise?",
      answer: 9,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "A rise is how far it went from the lower reading up to the higher one.",
        "Subtract the smaller number from the bigger number: 11 − 2.",
        "11 − 2 = 9 degrees."
      ],
      explanation: "The rise is 11 − 2 = 9 degrees."
    },
    {
      id: "g5.winter.math.w2.d3.q5",
      type: "short_answer",
      stem: "A weather log shows two mornings: 4 degrees C and 11 degrees C. Explain which morning was colder and how you would find the difference between them.",
      rubric: {
        level3: "States 4 degrees is colder (the smaller number, lower on the thermometer) AND finds the difference correctly as 11 − 4 = 7 degrees, with reasoning.",
        level2: "Identifies the colder morning correctly but the difference is unclear or slightly off.",
        level1: "Chooses the wrong morning as colder or shows no valid method."
      },
      exemplar: "4 degrees is colder because it is the smaller number, lower on the thermometer than 11. To find the gap, I subtract the smaller from the bigger: 11 − 4 = 7 degrees apart.",
      hintLadder: [
        "Which number is smaller, and lower on the thermometer?",
        "To find the gap, subtract the smaller number from the bigger number.",
        "11 − 4 = 7."
      ]
    }
  ],
  reflectionPrompt: "Look up (or imagine) today's high temperature. If it rose another 5 degrees, what would it read? Write the addition or subtraction you used.",
  misconceptionBank: [
    {
      id: "misreads-thermometer-direction",
      label: "Reads the thermometer upside down",
      description: "Thinks a lower number is warmer, or reads the scale backward instead of higher = warmer.",
      coachMove: "Point at a real or drawn thermometer: the liquid climbs UP when it gets warmer. Higher line = warmer, lower line = colder."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Day Warmed Up More?",
      prompt:
        "Would you rather have been outside on Day A (went from 1 degree C up to 10 degrees C) or Day B (went from 5 degrees C up to 11 degrees C)? Work out how many degrees EACH day warmed before you choose the bigger climb!",
      answer:
        "Day A rose 10 − 1 = 9 degrees. Day B rose 11 − 5 = 6 degrees. Day A had the bigger climb (9 degrees), even though Day B ended warmer!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Frozen Week Weather Log",
      challenge:
        "Invent a 5-day winter weather log with a morning and afternoon temperature each day (use numbers from 0 to 15 degrees C). Then answer: which day was coldest, and which day had the biggest one-day temperature swing?",
      materials: ["Paper & pencil, OR a spreadsheet/drawing app"],
      steps: [
        "Make a table: Day, Morning Temp, Afternoon Temp.",
        "Circle the coldest single temperature in the whole week.",
        "For each day, find the swing (Afternoon − Morning) and find the biggest.",
        "Write one sentence explaining how you found the biggest swing."
      ],
      deliverable: "A 5-day weather log with the coldest temperature and biggest daily swing labeled and calculated.",
      choiceBoard: [
        "Fill in the table and the difference calculations by hand.",
        "Draw a thermometer for each day marking the two temperatures.",
        "Make a bar graph of the week's afternoon temperatures."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Thermometer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.math.w2.d3.arena1",
          type: "numeric",
          stem: "The coldest temperature one week was 1 degree C and the warmest was 15 degrees C. What was the full temperature RANGE (warmest minus coldest) that week, in degrees?",
          answer: 14,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Range = warmest − coldest.",
            "15 − 1.",
            "15 − 1 = 14 degrees."
          ],
          explanation: "Range = 15 − 1 = 14 degrees."
        },
        {
          id: "g5.winter.math.w2.d3.arena2",
          type: "numeric",
          stem: "A thermometer reads 9 degrees C. It falls 5 degrees, then rises 3 degrees. What does it read now, in degrees C?",
          answer: 7,
          tolerance: 0,
          unit: "degrees C",
          hintLadder: [
            "Do it in two steps. First fall 5 from 9.",
            "9 − 5 = 4. Now rise 3 from 4.",
            "4 + 3 = 7."
          ],
          explanation: "Step 1: 9 − 5 = 4. Step 2: 4 + 3 = 7 degrees C."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Thermometer Rise and Fall",
      prompt:
        "Stand as the bottom of a thermometer. Call out 'warmer!' and slowly stretch taller, arms rising like the liquid climbing. Call out 'colder!' and shrink back down low. Rise and fall 5 times, higher for warmer, lower for colder.",
      scienceTieIn: "Stretching up for warmer and shrinking down for colder builds a body-memory of how a thermometer's liquid rises and falls — and the movement gets your blood flowing to sharpen focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "When might reading temperatures and finding differences matter in real life — checking the weather, baking, a fish tank, a freezer? Write one example and a subtraction you could do with it.",
      badge: { id: "g5-winter-degree-detective", name: "Degree Detective", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
