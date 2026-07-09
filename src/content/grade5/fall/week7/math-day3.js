// Grade 5 Math — Fall Expedition, Week 7 (Cause & Effect in History), Day 3.
// Grade 5 counterpart of g6.fall.math.w7.d3. Same topic (timelines and
// elapsed time) pitched down to Grade 5: whole-number subtraction with CE
// years only (no BCE/year-zero crossing), friendly numbers, extra scaffolding.

export const fallG5MathW7D3 = {
  id: "g5.fall.math.w7.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 3,
  subject: "Math",
  topic: "Timelines and elapsed time",
  topicTag: "intervals-timelines",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.5", "CCSS.5.OA.A.2"],
  hook: "To follow cause and effect across history, you need to know how many years passed between events. Today you do the math of timelines using subtraction.",
  miniLesson: [
    "To find how many years passed between two years, subtract the smaller (earlier) year from the bigger (later) year.",
    "Example: from 1900 to 1975 is 1975 − 1900 = 75 years. The bigger year always goes on top.",
    "A timeline is just a number line for years: earlier years on the left, later years on the right. The gap between two marks is the elapsed time."
  ],
  workedExample: {
    prompt: "How many years passed from 1620 to 1776?",
    steps: [
      "Both years are CE, so subtract the earlier from the later.",
      "Put the bigger year on top: 1776 − 1620.",
      "Subtract: 1776 − 1620 = 156.",
      "156 years passed."
    ],
    answer: "156 years"
  },
  items: [
    {
      id: "g5.fall.math.w7.d3.q1",
      type: "numeric",
      stem: "How many years from 1500 to 1650?",
      answer: 150,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Subtract the earlier year from the later year.",
        "1650 − 1500.",
        "= 150."
      ],
      explanation: "1650 − 1500 = 150 years."
    },
    {
      id: "g5.fall.math.w7.d3.q2",
      type: "numeric",
      stem: "An event happened in 1200. How many years ago was that from the year 2000?",
      answer: 800,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Subtract the earlier year from the later year.",
        "2000 − 1200.",
        "= 800."
      ],
      explanation: "2000 − 1200 = 800 years."
    },
    {
      id: "g5.fall.math.w7.d3.q3",
      type: "multiple_choice",
      stem: "On a timeline, which year comes EARLIER (further to the left)?",
      choices: [
        "1850, because bigger numbers come first",
        "They are the same",
        "1700, because earlier years are smaller",
        "You cannot tell from the numbers"
      ],
      answerIndex: 2,
      explanation: "Earlier years are smaller and sit further left. 1700 comes before 1850.",
      hintLadder: [
        "Earlier years are smaller numbers.",
        "Which is smaller, 1700 or 1850?",
        "1700 — so it comes earlier (further left)."
      ],
      misconceptionsTargeted: ["bigger-year-is-earlier"]
    },
    {
      id: "g5.fall.math.w7.d3.q4",
      type: "numeric",
      stem: "One event was in 1066 and another was in 1215. How many years apart are they?",
      answer: 149,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Put the bigger year on top and subtract.",
        "1215 − 1066.",
        "= 149."
      ],
      explanation: "1215 − 1066 = 149 years."
    },
    {
      id: "g5.fall.math.w7.d3.q5",
      type: "short_answer",
      stem: "Two events: Event A in 1100 and Event B in 1450. Find the gap in years, then tell what that long gap says about whether A could have DIRECTLY caused B.",
      rubric: {
        level3: "Computes 350 years AND explains that such a long gap makes a direct cause unlikely (probably a chain of events in between).",
        level2: "Gets 350 but the reasoning about cause is thin.",
        level1: "Wrong gap or no reasoning."
      },
      exemplar: "1450 − 1100 = 350 years. That is a very long time, so A probably did not directly cause B. More likely, many events happened in between to connect them.",
      hintLadder: [
        "Subtract to find the gap.",
        "1450 − 1100 = ?",
        "Is 350 years too long for a direct cause?"
      ]
    }
  ],
  reflectionPrompt: "Timelines turn history into distances you can measure. About how many years ago were you born, and what is one older event you have learned about?",
  misconceptionBank: [
    {
      id: "bigger-year-is-earlier",
      label: "Thinks a bigger year number is earlier",
      description: "Believes 1850 comes before 1700 because 'it looks bigger.'",
      coachMove: "Draw a number line of years: smaller numbers are earlier and sit on the left."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Timeline Gap",
      prompt:
        "A history book says a bridge was built in 1900 and fixed in 1950. A student says that's 150 years apart. What did the student do wrong, and what is the real answer?",
      answer:
        "The student subtracted wrong. It's 1950 − 1900 = 50 years apart, not 150. Always put the bigger year on top and subtract carefully!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: My Autumn Timeline",
      challenge:
        "Build a timeline of 5 events — mix history dates with personal ones (the year you were born, the year you started this grade) — and find the year-gap between each pair of neighbors.",
      steps: [
        "List 5 events, each with its year.",
        "Draw a line and place each event in order, like leaves falling along a branch.",
        "Between each pair of neighbors, subtract to find the year-gap and label it.",
        "Circle the biggest gap and write how many years it is."
      ],
      deliverable: "A timeline with the year-gap labeled between each pair of neighboring events.",
      choiceBoard: [
        "Draw it on paper as an autumn branch with events as leaves.",
        "Build it on a computer with boxes and labeled arrows.",
        "Make a 'then vs. now' two-event poster showing the years apart."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Timeline Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w7.d3.arena1",
          type: "numeric",
          stem: "How many years passed from 1215 to 1789? (Put the bigger year on top and subtract.)",
          answer: 574,
          tolerance: 0,
          unit: "years",
          hintLadder: [
            "Subtract the earlier year from the later year.",
            "1789 − 1215.",
            "= 574."
          ],
          explanation: "1789 − 1215 = 574 years."
        },
        {
          id: "g5.fall.math.w7.d3.arena2",
          type: "short_answer",
          stem: "Event A is 1347 and Event B is 1351. Find the gap, then explain whether such a SHORT gap makes a direct cause between A and B easier to believe than a 300-year gap would.",
          rubric: {
            level3: "Computes 4 years AND explains that a short gap makes a direct cause EASIER to believe than a 300-year gap, since less time means fewer in-between events.",
            level2: "Gets 4 years but the reasoning is thin.",
            level1: "Wrong gap or no reasoning."
          },
          exemplar: "1351 − 1347 = 4 years. A 4-year gap makes a direct cause easier to believe than a 300-year gap, because in just 4 years there is little time for a long chain of other events to be the real cause.",
          hintLadder: [
            "Subtract to find the gap.",
            "1351 − 1347 = ?",
            "Does a short gap or a long gap make a direct cause easier to believe?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Timeline Walk",
      prompt:
        "Pace out a timeline across the room: one big step for each 10 years. Walk from 'the year you were born' to 'today,' counting the steps. Feel how far apart the years really are!",
      scienceTieIn: "Walking wakes up the part of your brain that maps space and time, so pacing a timeline helps you remember the order of events.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick two events you learned about that are far apart in time. About how many years separate them, and does that gap make you think one caused the other?",
      badge: { id: "g5-fall-timeline-navigator", name: "Timeline Navigator", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
