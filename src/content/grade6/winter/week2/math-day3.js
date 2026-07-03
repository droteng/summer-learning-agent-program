// Grade 6 Math — Winter Expedition, Week 2 (Energy & Matter), Day 3.
// Topic: negative numbers and integers using temperature (below zero, differences).

export const winterG6MathW2D3 = {
  id: "g6.winter.math.w2.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Math",
  topic: "Negative numbers and integers with temperature",
  topicTag: "integers-temperature",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.NS.C.5", "CCSS.6.NS.C.7"],
  hook: "When the thermometer drops below zero, math gets a minus sign. Today you use integers to track freezing temperatures, count the gap between warm and cold, and figure out which day was truly the coldest.",
  miniLesson: [
    "Negative numbers sit to the LEFT of zero on the number line: −5 is colder (less) than −2, which is colder than 0.",
    "To find the DIFFERENCE between two temperatures, subtract the lower from the higher — the answer (how many degrees apart) is always positive.",
    "Rising temperature ADDS (moves right on the number line); falling temperature SUBTRACTS (moves left). Crossing zero, like −3 warming to 4, means climbing 3 degrees to reach 0, then 4 more: 7 degrees total."
  ],
  workedExample: {
    prompt: "At dawn it was −6 degrees C. By noon it rose to 5 degrees C. How many degrees did the temperature rise?",
    steps: [
      "Rising means we find the distance from −6 up to 5.",
      "From −6 up to 0 is 6 degrees.",
      "From 0 up to 5 is 5 more degrees.",
      "Total rise: 6 + 5 = 11 degrees. (Same as 5 − (−6) = 11.)"
    ],
    answer: "11 degrees"
  },
  items: [
    {
      id: "g6.winter.math.w2.d3.q1",
      type: "multiple_choice",
      stem: "Which temperature is the COLDEST?",
      choices: ["−2 degrees C", "0 degrees C", "−9 degrees C", "3 degrees C"],
      answerIndex: 2,
      explanation: "On the number line, the farther LEFT a number is, the smaller (colder) it is. −9 is farthest left, so it is the coldest.",
      hintLadder: [
        "Colder means smaller — farther left on the number line.",
        "Compare the negatives: is −9 left or right of −2?",
        "−9 is farthest left, so it is coldest."
      ],
      misconceptionsTargeted: ["bigger-negative-is-larger"]
    },
    {
      id: "g6.winter.math.w2.d3.q2",
      type: "numeric",
      stem: "Monday's low was −8 degrees C and Tuesday's low was 3 degrees C. How many degrees apart are the two lows?",
      answer: 11,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Subtract the lower temperature from the higher one.",
        "3 − (−8) means 3 + 8.",
        "3 + 8 = 11 degrees apart."
      ],
      explanation: "The difference is 3 − (−8) = 3 + 8 = 11 degrees."
    },
    {
      id: "g6.winter.math.w2.d3.q3",
      type: "numeric",
      stem: "The temperature is −3 degrees C. Overnight it FALLS 6 degrees. What is the new temperature, in degrees C?",
      answer: -9,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "Falling means subtract — move LEFT on the number line.",
        "Start at −3 and go down 6 more.",
        "−3 − 6 = −9."
      ],
      explanation: "Falling 6 degrees from −3: −3 − 6 = −9 degrees C."
    },
    {
      id: "g6.winter.math.w2.d3.q4",
      type: "numeric",
      stem: "At 6 a.m. it was −7 degrees C. By afternoon it warmed to 2 degrees C. How many degrees did it rise?",
      answer: 9,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "A rise is the distance from the lower value up to the higher one.",
        "From −7 up to 0 is 7 degrees, then 0 up to 2 is 2 more.",
        "7 + 2 = 9 degrees. (Same as 2 − (−7) = 9.)"
      ],
      explanation: "The rise is 2 − (−7) = 2 + 7 = 9 degrees."
    },
    {
      id: "g6.winter.math.w2.d3.q5",
      type: "short_answer",
      stem: "A weather log shows two mornings: −4 degrees C and −11 degrees C. Explain which morning was colder and how you would find the difference between them.",
      rubric: {
        level3: "States −11 is colder (farther left / smaller) AND finds the difference correctly as −4 − (−11) = 7 degrees, with reasoning.",
        level2: "Identifies the colder morning correctly but the difference is unclear or slightly off.",
        level1: "Chooses the wrong morning as colder or shows no valid method."
      },
      exemplar: "−11 is colder because it is farther left of zero than −4. To find the gap, subtract the lower from the higher: −4 − (−11) = −4 + 11 = 7 degrees apart.",
      hintLadder: [
        "Which number is farther left on the number line?",
        "To find the gap, subtract the smaller from the larger.",
        "−4 − (−11) = −4 + 11 = 7."
      ]
    }
  ],
  reflectionPrompt: "Look up (or imagine) today's low temperature. If it dropped another 5 degrees tonight, what would it read? Write the subtraction you used.",
  misconceptionBank: [
    {
      id: "bigger-negative-is-larger",
      label: "Thinks a bigger-looking negative is greater",
      description: "Believes −9 is greater than −2 because 9 is greater than 2, ignoring the minus sign's direction.",
      coachMove: "Draw a number line. Ask which is colder, −9 or −2. The one farther left is smaller, even though its digits look bigger."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Day Warmed Up More?",
      prompt:
        "Would you rather have been outside on Day A (went from −10 degrees C up to −1 degrees C) or Day B (went from −2 degrees C up to 4 degrees C)? Work out how many degrees EACH day warmed before you choose the bigger climb!",
      answer:
        "Day A rose −1 − (−10) = 9 degrees. Day B rose 4 − (−2) = 6 degrees. Day A had the bigger climb (9 degrees), even though Day B ended warmer!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Frozen Week Weather Log",
      challenge:
        "Invent a 5-day winter weather log with at least three below-zero temperatures. Then use integers to answer: which day was coldest, and what was the biggest one-day temperature swing?",
      materials: ["Paper & pencil, OR a spreadsheet/drawing app"],
      steps: [
        "Make a table: Day, Morning Low, Afternoon High (include at least 3 negative values).",
        "Circle the coldest single temperature in the whole week.",
        "Compute each day's swing (High − Low) and find the biggest.",
        "Write one sentence explaining how you compared the negative numbers."
      ],
      deliverable: "A 5-day integer weather log with the coldest temperature and biggest daily swing labeled and calculated.",
      choiceBoard: [
        "Fill in the table and calculations by hand.",
        "Draw a number-line thermometer marking all your negative temperatures.",
        "Make a bar or line graph of the week that shows values dipping below zero."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Integer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w2.d3.arena1",
          type: "numeric",
          stem: "The coldest recorded low one week was −13 degrees C and the warmest high was 6 degrees C. What was the full temperature RANGE (highest minus lowest) that week, in degrees?",
          answer: 19,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Range = highest − lowest.",
            "6 − (−13) means 6 + 13.",
            "6 + 13 = 19 degrees."
          ],
          explanation: "Range = 6 − (−13) = 6 + 13 = 19 degrees."
        },
        {
          id: "g6.winter.math.w2.d3.arena2",
          type: "numeric",
          stem: "A thermometer reads −2 degrees C. It falls 5 degrees, then rises 3 degrees. What does it read now, in degrees C?",
          answer: -4,
          tolerance: 0,
          unit: "degrees C",
          hintLadder: [
            "Do it in two steps. First fall 5 from −2.",
            "−2 − 5 = −7. Now rise 3 from −7.",
            "−7 + 3 = −4."
          ],
          explanation: "Step 1: −2 − 5 = −7. Step 2: −7 + 3 = −4 degrees C."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Number Line Steps",
      prompt:
        "Pick a spot on the floor as ZERO. Call out a start like '−3' and step LEFT for negatives, RIGHT for positives. Add 5 (step right 5), subtract 8 (step left 8). Do three moves and see where you land.",
      scienceTieIn: "Physically walking the number line builds a body-memory of how negatives sit left of zero — and the steps get your blood moving to sharpen focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "When might tracking negative numbers actually matter in real life — bank balances, elevations below sea level, freezer temperatures? Write one example and a subtraction you could do with it.",
      badge: { id: "sub-zero-solver", name: "Sub-Zero Solver", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
