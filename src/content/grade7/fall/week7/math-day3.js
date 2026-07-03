// Grade 7 Math — Fall Expedition, Week 7 (Cause & Effect in History), Day 3.
// Topic: timelines, intervals, and data inference — elapsed time across the
// BCE/CE line PLUS rates of change and reasoning from data (grade-7 depth).

export const fallG7MathW7D3 = {
  id: "g7.fall.math.w7.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 3,
  subject: "Math",
  topic: "Timelines, intervals, and rates of change",
  topicTag: "intervals-timelines",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.NS.A.1", "CCSS.7.RP.A.3"],
  hook: "To reason about cause and effect across history you must measure time AND rates. Today you handle the signed BCE/CE number line and infer trends from data — the tricky year-zero jump included.",
  miniLesson: [
    "Model dates as integers: CE years are positive, BCE years are negative, with NO year 0. Elapsed time = later − earlier, treating BCE as negative and then subtracting 1 for the missing year 0 when you cross the line.",
    "From a BCE year to a CE year: (BCE value) + (CE value) − 1. Example: 50 BCE to 50 CE = 50 + 50 − 1 = 99 years.",
    "A rate of change spreads a total over the time between two events: rate = total change ÷ years. This lets you infer trends and compare periods."
  ],
  workedExample: {
    prompt: "A city's population grew from 8,000 in 1200 CE to 20,000 in 1500 CE. Find the elapsed years AND the average growth per year.",
    steps: [
      "Both CE: elapsed = 1500 − 1200 = 300 years.",
      "Total change = 20,000 − 8,000 = 12,000 people.",
      "Average rate = 12,000 ÷ 300.",
      "= 40 people per year."
    ],
    answer: "300 years elapsed; average growth of 40 people per year."
  },
  items: [
    {
      id: "g7.fall.math.w7.d3.q1",
      type: "numeric",
      stem: "How many years from 350 BCE to 480 CE? (Add the two numbers, then subtract 1 for the missing year 0.)",
      answer: 829,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Crossing the BCE/CE line: add the two numbers.",
        "350 + 480 = 830.",
        "Subtract 1 for no year 0: 829."
      ],
      explanation: "350 + 480 − 1 = 829 years."
    },
    {
      id: "g7.fall.math.w7.d3.q2",
      type: "numeric",
      stem: "A trade network's yearly caravans grew from 120 to 300 over the 60 years between two events. What was the average increase in caravans PER YEAR?",
      answer: 3,
      tolerance: 0,
      unit: "caravans per year",
      hintLadder: [
        "Find the total change first: 300 − 120.",
        "Total change = 180 over 60 years.",
        "Rate = 180 ÷ 60 = 3 per year."
      ],
      explanation: "(300 − 120) ÷ 60 = 180 ÷ 60 = 3 caravans per year."
    },
    {
      id: "g7.fall.math.w7.d3.q3",
      type: "multiple_choice",
      stem: "On a number-line model of history where CE is positive and BCE is negative, which correctly orders these from EARLIEST to latest?",
      choices: [
        "100 CE, 200 BCE, 50 BCE",
        "200 BCE, 50 BCE, 100 CE",
        "50 BCE, 200 BCE, 100 CE",
        "100 CE, 50 BCE, 200 BCE"
      ],
      answerIndex: 1,
      explanation: "As integers: 200 BCE = −200, 50 BCE = −50, 100 CE = +100. Earliest (most negative) to latest: −200, −50, +100.",
      hintLadder: [
        "Write each as a signed integer.",
        "200 BCE = −200, 50 BCE = −50, 100 CE = +100.",
        "Order from most negative to most positive."
      ],
      misconceptionsTargeted: ["bce-counts-up"]
    },
    {
      id: "g7.fall.math.w7.d3.q4",
      type: "numeric",
      stem: "Empire A lasted from 27 BCE to 476 CE. How many years did it last? (Add the two numbers, then subtract 1 for the missing year 0.)",
      answer: 502,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Crossing the line: add the numbers.",
        "27 + 476 = 503.",
        "Subtract 1 for no year 0: 502."
      ],
      explanation: "27 + 476 − 1 = 502 years."
    },
    {
      id: "g7.fall.math.w7.d3.q5",
      type: "short_answer",
      stem: "Records show a region's grain output fell from 5,000 tons in 1300 CE to 2,000 tons in 1350 CE. Find the average rate of decline per year, then INFER what this data suggests about whether a slow chain of causes or a single sudden event is more likely — and explain.",
      rubric: {
        level3: "Computes −60 tons/year (a decline of 60 tons per year) AND reasons that a steady 50-year decline points more to a chain of ongoing causes than a single sudden event.",
        level2: "Gets the rate but the data-inference reasoning is thin.",
        level1: "Wrong rate or no inference from the data."
      },
      exemplar: "Change = 2,000 − 5,000 = −3,000 tons over 50 years, so 3,000 ÷ 50 = 60 tons lost per year. A steady decline stretched across 50 years suggests an ongoing chain of causes (soil exhaustion, gradual climate shift) rather than one sudden disaster, which would show a sharp one-year drop instead.",
      hintLadder: [
        "Total change = 2,000 − 5,000, over 50 years.",
        "Rate = 3,000 ÷ 50 = 60 tons per year decline.",
        "Does a gradual 50-year decline fit a sudden event or a slow chain of causes?"
      ]
    }
  ],
  reflectionPrompt: "Rates turn history into trends. Pick two moments in your own life a few years apart — what changed, and roughly how much per year?",
  misconceptionBank: [
    {
      id: "bce-counts-up",
      label: "Thinks BCE years count up like CE",
      description: "Believes 100 BCE is earlier than 300 BCE, or forgets BCE maps to negative integers.",
      coachMove: "Draw a signed number line through 0: BCE years are negative and descend toward 0 from the left; CE years are positive to the right."
    },
    {
      id: "forgets-year-zero",
      label: "Forgets to subtract 1 for the missing year 0",
      description: "Adds BCE + CE and stops, overcounting by one year.",
      coachMove: "Remind them there is no year 0, so any BCE-to-CE span needs a −1 correction."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Rate Trap",
      prompt:
        "A scroll says a wall's height grew from 4 meters to 10 meters between 200 BCE and 100 BCE. A student says '6 meters in 100 years, so 0.6 m per year.' A friend says the rate is wrong because the dates are 'backwards.' Who's right, and what IS the rate?",
      answer:
        "The student is right on the math: 200 BCE to 100 BCE is 100 years (both BCE, so 200 − 100), and (10 − 4) ÷ 100 = 0.06 m per year — not 0.6! The friend is wrong about backwards dates but the student slipped a decimal. The rate is 0.06 m per year.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Rate-of-Change Timeline",
      challenge:
        "Build a to-scale timeline of 4 events that each carry a NUMBER (population, output, distance), then compute and label the average rate of change between each neighboring pair.",
      steps: [
        "List 4 events with a year AND a measured value each (include one BCE if you can).",
        "Place them to scale on a horizontal line, like leaves along a branch.",
        "Between each neighboring pair, compute rate = (value change) ÷ (years).",
        "Circle the pair with the FASTEST rate and write what might have caused that surge."
      ],
      deliverable: "A to-scale timeline with the average rate of change labeled between each pair of events and the fastest rate circled.",
      choiceBoard: [
        "Draw it as an autumn branch with rate labels on each gap.",
        "Build it digitally as a table plus a line graph of the values.",
        "Make a two-event 'then vs. now' poster showing the exact per-year rate."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.math.w7.d3.arena1",
          type: "numeric",
          stem: "A kingdom's recorded tax revenue rose from 1,200 coins in 44 BCE to 5,000 coins in 14 CE. First find the elapsed years (add the numbers, subtract 1 for no year 0), then the average increase in coins per year. Enter the coins-per-year rate, rounded to the nearest whole number.",
          answer: 67,
          tolerance: 0,
          unit: "coins per year",
          hintLadder: [
            "Elapsed years: 44 + 14 − 1 = 57 years.",
            "Total change: 5,000 − 1,200 = 3,800 coins.",
            "Rate = 3,800 ÷ 57 ≈ 66.7, which rounds to 67."
          ],
          explanation: "Elapsed years = 44 + 14 − 1 = 57. Total change = 5,000 − 1,200 = 3,800 coins. Rate = 3,800 ÷ 57 ≈ 66.7, which rounds to 67."
        },
        {
          id: "g7.fall.math.w7.d3.arena2",
          type: "short_answer",
          stem: "Two datasets: Region X's population dropped 100/year steadily for 40 years; Region Y's dropped 4,000 all in a single year. Both lost 4,000 people total. Explain what the DIFFERENT rate patterns let you INFER about the likely causes.",
          rubric: {
            level3: "Recognizes both totals equal 4,000 AND infers that Y's one-year drop points to a sudden shock (war, plague) while X's steady rate points to a gradual chain of causes.",
            level2: "Notes the totals match but the inference about causes is thin.",
            level1: "No comparison of the rate patterns or no inference about causes."
          },
          exemplar: "Both regions lost 4,000 people, but the SHAPE of the loss differs. Region Y lost everyone in one year — a rate spike that points to a sudden shock like a plague or battle. Region X lost 100 per year for 40 years — a flat rate suggesting a slow chain of causes such as declining farmland or steady out-migration. Same total, very different stories.",
          hintLadder: [
            "Check: do both totals equal 4,000? (yes)",
            "A sudden one-year drop suggests what kind of cause?",
            "A slow steady rate suggests what kind of cause?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: The Signed Timeline Walk",
      prompt:
        "Mark a '0' on the floor. Walk to the RIGHT for CE (one step per century), then back through 0 to the LEFT for BCE. Call out each year as a signed number as you step. Do it twice, faster the second time.",
      scienceTieIn: "Pairing a signed number line with physical direction engages your brain's spatial map, strengthening the intuition that BCE is negative and CE is positive.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick two events you learned about with numbers attached (populations, distances, dates). Compute a rough rate between them — does the speed of change hint at a sudden cause or a slow one?",
      badge: { id: "g7-fall-rate-of-change-ranger", name: "Rate-of-Change Ranger", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
