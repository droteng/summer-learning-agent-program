// Grade 6 Math — Fall Expedition, Week 7 (Cause & Effect in History), Day 3.
// Topic: timelines, intervals, and dates — elapsed time and BCE/CE.

export const fallG6MathW7D3 = {
  id: "g6.fall.math.w7.d3",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 3,
  subject: "Math",
  topic: "Timelines and elapsed time",
  topicTag: "intervals-timelines",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.6.NS.C.5", "CCSS.6.NS.C.6"],
  hook: "To follow cause and effect across history, you need to measure time between events. Today you do the math of timelines — including the tricky jump across year zero.",
  miniLesson: [
    "Elapsed time between two CE years = later year − earlier year. (1500 to 1750 is 250 years.)",
    "BCE years count DOWN toward zero; CE years count up. There is no year 0 on this scale.",
    "From a BCE year to a CE year, add the two numbers (and subtract 1 because there's no year 0): 50 BCE to 50 CE is 50 + 50 − 1 = 99 years."
  ],
  workedExample: {
    prompt: "How many years passed from 1215 CE to 1776 CE?",
    steps: [
      "Both are CE, so subtract the earlier from the later.",
      "1776 − 1215.",
      "= 561.",
      "561 years passed."
    ],
    answer: "561 years"
  },
  items: [
    {
      id: "g6.fall.math.w7.d3.q1",
      type: "numeric",
      stem: "How many years from 1492 CE to 1620 CE?",
      answer: 128,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Both CE: subtract earlier from later.",
        "1620 − 1492.",
        "= 128."
      ],
      explanation: "1620 − 1492 = 128 years."
    },
    {
      id: "g6.fall.math.w7.d3.q2",
      type: "numeric",
      stem: "An event happened in 800 CE. How many years ago was that from the year 2000 CE?",
      answer: 1200,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Subtract the earlier year from the later.",
        "2000 − 800.",
        "= 1200."
      ],
      explanation: "2000 − 800 = 1,200 years."
    },
    {
      id: "g6.fall.math.w7.d3.q3",
      type: "multiple_choice",
      stem: "On a historical timeline, BCE years...",
      choices: [
        "count UP like CE years",
        "count DOWN toward zero (300 BCE is before 100 BCE)",
        "don't exist",
        "are always larger than CE years"
      ],
      answerIndex: 1,
      explanation: "BCE years get smaller as time moves forward: 300 BCE comes before 100 BCE.",
      hintLadder: [
        "BCE means 'Before Common Era.'",
        "Which is earlier, 300 BCE or 100 BCE?",
        "300 BCE — they count down toward 0."
      ],
      misconceptionsTargeted: ["bce-counts-up"]
    },
    {
      id: "g6.fall.math.w7.d3.q4",
      type: "numeric",
      stem: "How many years from 200 BCE to 300 CE? (Add the two, then subtract 1 for no year 0.)",
      answer: 499,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Across the BCE/CE line, add the two numbers.",
        "200 + 300 = 500.",
        "Subtract 1 (no year 0): 499."
      ],
      explanation: "200 + 300 − 1 = 499 years."
    },
    {
      id: "g6.fall.math.w7.d3.q5",
      type: "short_answer",
      stem: "Two events: Event A in 1100 CE, Event B in 1450 CE. Find the gap, and explain what the gap tells you about whether A could have CAUSED B directly.",
      rubric: {
        level3: "Computes 350 years AND reasons that such a long gap makes a DIRECT cause unlikely (more likely a chain of events between them).",
        level2: "Gets 350 but reasoning about causation is thin.",
        level1: "Wrong gap or no reasoning."
      },
      exemplar: "1450 − 1100 = 350 years. That's a long time, so Event A probably didn't directly cause B; more likely a chain of events over those 350 years connects them.",
      hintLadder: [
        "Subtract the years for the gap.",
        "1450 − 1100.",
        "Is 350 years too long for a direct cause?"
      ]
    }
  ],
  reflectionPrompt: "Timelines turn history into measurable distances. About how many years ago were you born — and what's one event from before that you've learned about?",
  misconceptionBank: [
    {
      id: "bce-counts-up",
      label: "Thinks BCE years count up like CE",
      description: "Believes 100 BCE is earlier than 300 BCE.",
      coachMove: "Draw a number line through 0: BCE years descend toward 0 from the left, CE years rise to the right."
    }
  ]
};
