// Grade 7 Math — Winter Expedition, Week 2 (Energy & Matter), Day 3.
// Topic: rational-number and integer operations with temperature — grade-7 depth
// with signed sums/differences, negative decimals, mean of signed values, and
// multi-step signed arithmetic.

export const winterG7MathW2D3 = {
  id: "g7.winter.math.w2.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 3,
  subject: "Math",
  topic: "Rational numbers and integer operations with temperature",
  topicTag: "integers-temperature",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.NS.A.1", "CCSS.7.NS.A.3"],
  hook: "When the thermometer plunges below zero, every calculation carries a sign. Today you add and subtract signed numbers, work with negative decimals, and even average a week of freezing lows to decide which stretch was truly the coldest.",
  miniLesson: [
    "Subtracting a value is the same as adding its opposite: a − b = a + (−b). So the DIFFERENCE between two temperatures is 'higher − lower,' and subtracting a negative adds: 5 − (−3) = 5 + 3 = 8. The gap between two temperatures is always positive.",
    "A rise ADDS a positive; a fall ADDS a negative (moves left). To chain changes, keep a running total: start at −2, fall 5, rise 3 means −2 + (−5) + 3 = −4. Signs must be tracked at every step.",
    "To find the MEAN of several signed temperatures, add them with their signs, then divide by how many there are. Negative decimals like −2.5 sit halfway between −2 and −3 on the number line — farther left is always colder (smaller)."
  ],
  workedExample: {
    prompt: "At dawn it was −6.5 degrees C. By noon it rose 11 degrees. By night it fell 7.5 degrees from the noon value. What was the night temperature, in degrees C?",
    steps: [
      "Start: −6.5.",
      "Noon: −6.5 + 11 = 4.5 degrees C.",
      "Night: 4.5 + (−7.5) = 4.5 − 7.5 = −3 degrees C.",
      "So the night temperature is −3 degrees C."
    ],
    answer: "−3 degrees C"
  },
  items: [
    {
      id: "g7.winter.math.w2.d3.q1",
      type: "multiple_choice",
      stem: "Order these four temperatures from COLDEST to warmest: −4.5, −4, −12.5, 0.5 (degrees C).",
      choices: [
        "−12.5, −4.5, −4, 0.5",
        "−4, −4.5, −12.5, 0.5",
        "0.5, −4, −4.5, −12.5",
        "−12.5, −4, −4.5, 0.5"
      ],
      answerIndex: 0,
      explanation: "Coldest is farthest left on the number line. −12.5 < −4.5 < −4 < 0.5. Note −4.5 is colder than −4 because it lies farther left.",
      hintLadder: [
        "Coldest = smallest = farthest left on the number line.",
        "Among the negatives, a larger digit after the minus sign is farther left (colder).",
        "−12.5, then −4.5, then −4, then 0.5."
      ],
      misconceptionsTargeted: ["bigger-negative-is-larger"]
    },
    {
      id: "g7.winter.math.w2.d3.q2",
      type: "numeric",
      stem: "Monday's low was −13 degrees C and Thursday's low was 4.5 degrees C. How many degrees apart are the two lows?",
      answer: 17.5,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Difference = higher − lower.",
        "4.5 − (−13) = 4.5 + 13.",
        "4.5 + 13 = 17.5 degrees apart."
      ],
      explanation: "Difference = 4.5 − (−13) = 4.5 + 13 = 17.5 degrees."
    },
    {
      id: "g7.winter.math.w2.d3.q3",
      type: "numeric",
      stem: "A thermometer reads −2.5 degrees C. It falls 6 degrees, then rises 3.5 degrees. What does it read now, in degrees C?",
      answer: -5,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "Keep a running total, tracking signs.",
        "−2.5 + (−6) = −8.5, then −8.5 + 3.5.",
        "−8.5 + 3.5 = −5 degrees C."
      ],
      explanation: "Step 1: −2.5 − 6 = −8.5. Step 2: −8.5 + 3.5 = −5 degrees C."
    },
    {
      id: "g7.winter.math.w2.d3.q4",
      type: "numeric",
      stem: "Four freezing mornings had lows of −5, −9, 2, and −4 degrees C. What was the MEAN (average) low for the four mornings, in degrees C?",
      answer: -4,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "Add all four signed values first.",
        "−5 + (−9) + 2 + (−4) = −16.",
        "Divide by 4: −16 ÷ 4 = −4 degrees C."
      ],
      explanation: "Sum = −5 − 9 + 2 − 4 = −16. Mean = −16 ÷ 4 = −4 degrees C."
    },
    {
      id: "g7.winter.math.w2.d3.q5",
      type: "short_answer",
      stem: "A weather log shows two mornings: −3.5 degrees C and −11 degrees C. Explain which morning was colder, then show how to find the difference between them using the rule a − b = a + (−b).",
      rubric: {
        level3: "States −11 is colder (farther left / smaller) AND finds the difference correctly as −3.5 − (−11) = −3.5 + 11 = 7.5 degrees, explicitly using subtract-a-negative-adds reasoning.",
        level2: "Identifies the colder morning correctly but the difference computation is unclear or slightly off.",
        level1: "Chooses the wrong morning as colder or shows no valid method."
      },
      exemplar: "−11 is colder because it sits farther left of zero than −3.5. To find the gap, subtract the lower from the higher: −3.5 − (−11). Subtracting a negative adds its opposite, so −3.5 + 11 = 7.5 degrees apart.",
      hintLadder: [
        "Which value is farther left on the number line?",
        "Gap = higher − lower = −3.5 − (−11).",
        "Subtracting −11 adds 11: −3.5 + 11 = 7.5."
      ]
    }
  ],
  reflectionPrompt: "Look up (or imagine) today's low temperature. If it fell another 4.5 degrees tonight and then rose 2 degrees by morning, what would it read? Write out the signed running total you used.",
  misconceptionBank: [
    {
      id: "bigger-negative-is-larger",
      label: "Thinks a bigger-looking negative is greater",
      description: "Believes −12.5 is greater than −4 because 12.5 is greater than 4, ignoring that farther left means smaller.",
      coachMove: "Draw a number line with decimals. Ask which is colder, −12.5 or −4. Farther left is smaller, even though its digits look bigger."
    },
    {
      id: "subtract-negative-sign-slip",
      label: "Drops the sign when subtracting a negative",
      description: "Writes a − (−b) as a − b instead of a + b, losing the double-negative.",
      coachMove: "Anchor to a − (−b) = a + b. Rehearse 5 − (−3) = 8 on a number line: subtracting a negative moves you RIGHT (warmer)."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Day Warmed Up More?",
      prompt:
        "Would you rather have been outside on Day A (climbed from −12.5 degrees C up to −1 degrees C) or Day B (climbed from −3 degrees C up to 6.5 degrees C)? Work out EACH day's total rise before you choose the bigger climb!",
      answer:
        "Day A rose −1 − (−12.5) = −1 + 12.5 = 11.5 degrees. Day B rose 6.5 − (−3) = 6.5 + 3 = 9.5 degrees. Day A had the bigger climb (11.5 degrees), even though Day B ended warmer!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Frozen Week Data Log",
      challenge:
        "Invent a 5-day winter weather log with at least three below-zero lows (use decimals for realism). Then use signed arithmetic to report the coldest single reading, the biggest one-day swing, AND the mean of the five morning lows.",
      materials: ["Paper & pencil, OR a spreadsheet/drawing app"],
      steps: [
        "Make a table: Day, Morning Low, Afternoon High (include at least 3 negative values, at least one a decimal).",
        "Circle the coldest single temperature and justify with number-line reasoning.",
        "Compute each day's swing (High − Low) using a − (−b) = a + b, and mark the biggest.",
        "Add the five morning lows with their signs and divide by 5 to report the mean low."
      ],
      deliverable: "A 5-day signed-number weather log showing the coldest reading, the biggest daily swing, and the mean morning low, each with its calculation.",
      choiceBoard: [
        "Fill in the table and all three calculations by hand.",
        "Draw a number-line thermometer marking every temperature, decimals included.",
        "Make a line graph of the week dipping below zero, with the mean drawn as a horizontal line."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Signed Number Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w2.d3.arena1",
          type: "numeric",
          stem: "One week the coldest low was −14.5 degrees C and the warmest high was 7 degrees C. What was the full temperature RANGE (highest − lowest) that week, in degrees?",
          answer: 21.5,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Range = highest − lowest.",
            "7 − (−14.5) = 7 + 14.5.",
            "7 + 14.5 = 21.5 degrees."
          ],
          explanation: "Range = 7 − (−14.5) = 7 + 14.5 = 21.5 degrees."
        },
        {
          id: "g7.winter.math.w2.d3.arena2",
          type: "numeric",
          stem: "Three overnight lows were −6, −2.5, and −9.5 degrees C. What was their mean (average), in degrees C?",
          answer: -6,
          tolerance: 0,
          unit: "degrees C",
          hintLadder: [
            "Add the three signed values first.",
            "−6 + (−2.5) + (−9.5) = −18.",
            "−18 ÷ 3 = −6 degrees C."
          ],
          explanation: "Sum = −6 − 2.5 − 9.5 = −18. Mean = −18 ÷ 3 = −6 degrees C."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Number Line Steps",
      prompt:
        "Mark a spot on the floor as ZERO. Call out a start like '−4' and step LEFT for negatives, RIGHT for positives. Now subtract a negative — 'minus −3' — and step RIGHT 3 (because subtracting a negative moves you warmer). Do three signed moves and see where you land.",
      scienceTieIn: "Walking the line — especially stepping RIGHT when you subtract a negative — burns the a − (−b) = a + b rule into body memory, and the movement sharpens focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where do signed numbers show up in real life — bank balances, elevations below sea level, freezer settings, sports point differentials? Write one example and a signed calculation (with a subtraction of a negative) you could do with it.",
      badge: { id: "g7-winter-signed-number-sage", name: "Signed Number Sage", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
