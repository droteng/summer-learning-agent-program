// Grade 7 Math — Summer Program, Week 2 (Numbers in the Real World), Day 2.
// Topic: integers & rational-number operations — adding/subtracting negatives
// in real contexts (temperature, elevation, money). Project: data dashboard.

export const summerG7MathW2D2 = {
  id: "g7.summer.math.w2.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Math",
  topic: "Integers & rational-number operations",
  topicTag: "integer-operations",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.NS.A.1", "CCSS.7.NS.A.1.C"],
  hook: "Real data goes below zero all the time: a bank overdraft, a temperature drop, a dive below sea level. Your dashboard has to handle negatives correctly. Today you master adding and subtracting positive and negative numbers.",
  miniLesson: [
    "A number line runs both ways from 0. Adding a positive moves right; adding a negative moves left. So −3 + 5 lands at +2, and 4 + (−7) lands at −3.",
    "Subtracting is the same as adding the opposite: a − b = a + (−b). So 3 − 8 = 3 + (−8) = −5, and −2 − (−6) = −2 + 6 = 4.",
    "Two negatives with the same sign add their sizes and keep the sign: (−4) + (−5) = −9. Opposite signs subtract sizes and keep the sign of the bigger size."
  ],
  workedExample: {
    prompt: "A diver is at −18 m (18 m below sea level). She rises 7 m, then descends 12 m. What is her final depth?",
    steps: [
      "Start at −18.",
      "Rises 7 m means add 7: −18 + 7 = −11.",
      "Descends 12 m means subtract 12: −11 − 12 = −11 + (−12) = −23.",
      "Final position is −23 m (23 m below sea level)."
    ],
    answer: "−23 m (23 m below sea level)."
  },
  items: [
    {
      id: "g7.summer.math.w2.d2.q1",
      type: "numeric",
      stem: "The temperature was −6°C at dawn and rose 15°C by noon. What is the noon temperature in °C?",
      answer: 9,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Rising means adding: start at −6, add 15.",
        "On a number line, move 15 to the right from −6.",
        "−6 + 15 = 9°C."
      ],
      explanation: "−6 + 15 = 9°C."
    },
    {
      id: "g7.summer.math.w2.d2.q2",
      type: "numeric",
      stem: "A bank account is at −$45 (overdrawn). The owner then spends $20 more. What is the new balance, in dollars?",
      answer: -65,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Spending more means the balance goes further negative — subtract 20.",
        "−45 − 20 = −45 + (−20).",
        "Same sign: add sizes, keep the minus: −65."
      ],
      explanation: "−45 − 20 = −65 dollars (more overdrawn)."
    },
    {
      id: "g7.summer.math.w2.d2.q3",
      type: "numeric",
      stem: "Compute: −8 − (−13).",
      answer: 5,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Subtracting a negative is the same as adding its opposite.",
        "−8 − (−13) = −8 + 13.",
        "−8 + 13 = 5."
      ],
      explanation: "−8 − (−13) = −8 + 13 = 5.",
      misconceptionsTargeted: ["subtract-negative-stays-negative"]
    },
    {
      id: "g7.summer.math.w2.d2.q4",
      type: "multiple_choice",
      stem: "Which expression equals a POSITIVE result?",
      choices: [
        "(−7) + (−2)",
        "3 − 10",
        "−5 − (−9)",
        "−4 + 1"
      ],
      answerIndex: 2,
      explanation: "−5 − (−9) = −5 + 9 = 4, which is positive. The others give −9, −7, and −3.",
      hintLadder: [
        "Rewrite any 'minus a negative' as 'plus a positive'.",
        "−5 − (−9) becomes −5 + 9.",
        "−5 + 9 = 4, the only positive result."
      ]
    },
    {
      id: "g7.summer.math.w2.d2.q5",
      type: "short_answer",
      stem: "A hiker starts at an elevation of −30 m (below sea level), climbs 50 m, then descends 15 m. Show the two steps of integer arithmetic and give the final elevation, explaining what each sign means.",
      rubric: {
        level3: "Writes −30 + 50 = 20, then 20 − 15 = 5, gives final elevation +5 m, and explains that adding = climbing/up and subtracting = descending/down.",
        level2: "Reaches +5 m but the step-by-step signs or meaning are unclear.",
        level1: "Wrong result or no reasoning about the signs."
      },
      exemplar: "Start at −30 m. Climbing 50 m adds: −30 + 50 = 20 m (now above sea level). Descending 15 m subtracts: 20 − 15 = 5 m. Final elevation is +5 m above sea level. Adding meant going up; subtracting meant going down.",
      hintLadder: [
        "Climbing adds to elevation; descending subtracts.",
        "First do −30 + 50, then subtract 15 from that.",
        "Track the sign at each step to see where you end up."
      ]
    }
  ],
  reflectionPrompt: "Where in real life did you meet a negative number recently — a temperature, a score, money owed, a below-ground floor? What did the negative sign mean there?",
  misconceptionBank: [
    {
      id: "subtract-negative-stays-negative",
      label: "Thinks subtracting a negative makes it smaller",
      description: "Believes −8 − (−13) should be more negative, treating the two minus signs as 'extra negative' instead of canceling.",
      coachMove: "Rewrite 'minus a negative' as 'plus a positive': a − (−b) = a + b. Model it on a number line — removing a debt of 13 moves you UP 13."
    },
    {
      id: "same-sign-vs-opposite-sign",
      label: "Adds sizes when signs are opposite",
      description: "Adds the two numbers' sizes even when the signs differ, instead of subtracting sizes and keeping the sign of the larger.",
      coachMove: "Sort by sign first: same signs → add sizes, keep sign; opposite signs → subtract smaller size from larger, keep the larger's sign."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Elevator Riddle",
      prompt:
        "An elevator starts on floor −2 (a basement level). It goes UP 5 floors, then DOWN 8 floors. What floor is it on now? Work the integer arithmetic before you peek!",
      answer:
        "−2 + 5 = 3, then 3 − 8 = −5. The elevator ends on floor −5. Up adds, down subtracts!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Negative-Number Dashboard Tracker",
      challenge:
        "Build a mini 'tracker' for something that goes above AND below zero — a week of temperatures, a game score with penalties, or a pretend bank balance. Log at least 5 values (some negative), then compute the total CHANGE from start to end using integer arithmetic.",
      steps: [
        "Pick a quantity that can be negative and list 5+ daily values, including negatives.",
        "Draw a number line and plot each value.",
        "Compute the change between two days using subtraction (watch the signs!).",
        "Write one 'headline' sentence your dashboard would show, e.g. 'Down 12 since Monday.'"
      ],
      deliverable: "A number-line tracker with 5+ values (some negative) and one computed change shown with correct signs.",
      choiceBoard: [
        "Draw a number-line dashboard with plotted values and the change labeled.",
        "Make a temperature-swing chart with the biggest daily drop marked.",
        "Write a 'day in the negatives' story where a character's score dips below zero and recovers."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Integer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w2.d2.arena1",
          type: "numeric",
          stem: "A submarine is at −120 m. It rises 45 m, dives 80 m, then rises 25 m. What is its final depth in meters (use a negative for below sea level)?",
          answer: -130,
          tolerance: 0,
          unit: "meters",
          hintLadder: [
            "Rises add, dives subtract. Do them in order.",
            "−120 + 45 = −75, then −75 − 80 = −155.",
            "−155 + 25 = −130 meters."
          ],
          explanation: "−120 + 45 = −75; −75 − 80 = −155; −155 + 25 = −130 m."
        },
        {
          id: "g7.summer.math.w2.d2.arena2",
          type: "multiple_choice",
          stem: "The overnight low was −4°C and the daytime high was 11°C. What was the temperature RANGE (high minus low)?",
          choices: [
            "7°C",
            "15°C",
            "−15°C",
            "−7°C"
          ],
          answerIndex: 1,
          explanation: "Range = high − low = 11 − (−4) = 11 + 4 = 15°C.",
          hintLadder: [
            "Range = high minus low.",
            "11 − (−4) — subtracting a negative adds.",
            "11 + 4 = 15°C."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Number-Line Steps",
      prompt:
        "Pretend the floor is a number line with 0 in front of you. Step 3 to the 'positive' right, 5 to the 'negative' left, then 2 back to the right. Where did you land? (−4 from start.) Repeat once, then breathe.",
      scienceTieIn:
        "Mapping numbers to real movement builds a body-memory of the number line — and the light exercise boosts blood flow to keep your mind sharp.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Negative numbers describe 'less than nothing' situations. Write about one moment today you could describe with a negative number and what recovering back toward zero would look like.",
      badge: { id: "g7-integer-explorer", name: "Integer Explorer", emoji: "🌡️" },
      estimatedMinutes: 7
    }
  }
};
