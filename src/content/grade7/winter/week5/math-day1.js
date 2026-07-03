// Grade 7 Math — Winter Expedition, Week 5 (Data in the Cold), Day 1.
// Topic: reading, interpreting, and INFERRING from winter weather graphs —
// line, bar, and scatter plots (association, rate of change, prediction).
// Grade-7 counterpart of the Grade 6 graph-interpretation mission, pitched up
// to statistical inference: trends, association, and rate of change.

export const winterG7MathW5D1 = {
  id: "g7.winter.math.w5.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Math",
  topic: "Interpreting and inferring from winter weather graphs (line, bar, scatter)",
  topicTag: "graph-interpretation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.C.8", "CCSS.7.RP.A.2"],
  hook: "A frozen week produces a mountain of numbers — highs, lows, snowfall, wind chill. A Grade 6 reader pulls single facts off a graph. This year you go further: you read the RATE at which a value is changing, you spot ASSOCIATION between two variables on a scatter plot, and you INFER what happens next. Today you become a winter data analyst — not just reading the picture, but reasoning past its edges.",
  miniLesson: [
    "On a LINE graph, the STEEPNESS tells you the RATE OF CHANGE — how many degrees per hour the temperature is climbing or dropping. A steeper segment means a faster change; two segments can both fall while one falls faster.",
    "A SCATTER PLOT shows two variables at once (e.g., wind speed vs. wind chill). If points trend downward together, that's a NEGATIVE association; upward together is POSITIVE; a shapeless cloud means no clear association. Association is a pattern, not a guarantee for any single point.",
    "You can INFER beyond plotted points by following a trend — but flag it as an estimate. Always check the scale AND whether the axis starts at zero before you trust how dramatic a change looks."
  ],
  workedExample: {
    prompt: "A line graph of hourly temperature reads: 9 a.m. -8°C, 11 a.m. -2°C, 1 p.m. 4°C. Between which two-hour interval did the temperature rise FASTER (per hour), and what was that faster rate in °C per hour?",
    steps: [
      "First interval (9→11 a.m.): rise = −2 − (−8) = 6°C over 2 hours → 6 ÷ 2 = 3°C per hour.",
      "Second interval (11 a.m.→1 p.m.): rise = 4 − (−2) = 6°C over 2 hours → 6 ÷ 2 = 3°C per hour.",
      "Both intervals rose 6°C in 2 hours, so both rates equal 3°C per hour.",
      "Neither is faster — the line has a constant slope of 3°C per hour across the whole span."
    ],
    answer: "Both intervals rose at the same rate: 3°C per hour (a constant slope), so neither was faster."
  },
  items: [
    {
      id: "g7.winter.math.w5.d1.q1",
      type: "multiple_choice",
      stem: "On a scatter plot, each point is one day: x = wind speed (km/h), y = wind chill (°C). As wind speed goes up, the points trend DOWN. What kind of association is this?",
      choices: [
        "Positive association — higher wind speed goes with higher wind chill",
        "Negative association — higher wind speed goes with lower (colder) wind chill",
        "No association — the points are a random cloud",
        "It is impossible to tell from a scatter plot"
      ],
      answerIndex: 1,
      explanation: "When one variable rises while the other falls, that is a negative association: faster wind goes with a colder wind chill.",
      hintLadder: [
        "Do the two variables move the same way or opposite ways?",
        "Wind goes UP while wind chill goes DOWN — that is opposite.",
        "Opposite-direction trend = negative association."
      ]
    },
    {
      id: "g7.winter.math.w5.d1.q2",
      type: "numeric",
      stem: "A line graph shows the temperature dropping from -3°C at 4 p.m. to -15°C at 8 p.m. What was the average RATE of change in °C per hour? (Give the size of the drop per hour as a positive number.)",
      answer: 3,
      tolerance: 0,
      unit: "°C per hour",
      hintLadder: [
        "Find the total change first: −15 − (−3).",
        "−15 − (−3) = −15 + 3 = −12, a 12°C drop over 4 hours.",
        "Rate = 12 ÷ 4 = 3°C per hour."
      ],
      explanation: "Change = −15 − (−3) = −12°C over 8 − 4 = 4 hours, so the rate is 12 ÷ 4 = 3°C per hour.",
      misconceptionsTargeted: ["rate-ignores-time-span"]
    },
    {
      id: "g7.winter.math.w5.d1.q3",
      type: "numeric",
      stem: "A snowfall bar graph uses a scale of 8 cm per gridline. Monday's bar reaches gridline 3.5 and Friday's bar reaches gridline 6. How many MORE centimeters of snow fell on Friday than Monday?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Convert each bar using the scale: gridlines × 8 cm.",
        "Monday = 3.5 × 8 = 28 cm; Friday = 6 × 8 = 48 cm.",
        "Difference = 48 − 28 = 20 cm."
      ],
      explanation: "Monday = 3.5 × 8 = 28 cm, Friday = 6 × 8 = 48 cm, so Friday had 48 − 28 = 20 cm more.",
      misconceptionsTargeted: ["ignore-the-scale"]
    },
    {
      id: "g7.winter.math.w5.d1.q4",
      type: "numeric",
      stem: "A temperature line falls at a steady 4°C per hour. At 2 p.m. it reads -1°C. Following the trend, what temperature does the line predict at 5 p.m.?",
      answer: -13,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "From 2 p.m. to 5 p.m. is 3 hours.",
        "Falling 4°C per hour for 3 hours is a total drop of 3 × 4 = 12°C.",
        "Start at −1°C and drop 12: −1 − 12 = −13°C."
      ],
      explanation: "3 hours × 4°C per hour = 12°C drop; −1 − 12 = −13°C.",
      misconceptionsTargeted: ["rate-ignores-time-span"]
    },
    {
      id: "g7.winter.math.w5.d1.q5",
      type: "short_answer",
      stem: "A scatter plot shows a clear NEGATIVE association between wind speed and wind chill, but one single day has high wind AND a mild wind chill. Explain why that one off-trend point does NOT break the overall association, and what a trend line lets you do that a single point cannot.",
      rubric: {
        level3: "Explains that association describes the OVERALL pattern across many points, so one outlier can differ without breaking the trend, AND states a trend line lets you summarize/predict the typical relationship (estimate a value or direction) rather than judge from one point.",
        level2: "Correctly addresses the outlier OR the trend-line purpose, but not both clearly.",
        level1: "Claims the outlier disproves the association or shows no understanding of trend/inference."
      },
      exemplar: "An association is about the overall pattern across all the days, not any single day. One day with high wind and a mild wind chill is just an outlier — maybe the sun was strong that day — and it doesn't erase the downward trend of the whole cloud of points. A trend line summarizes the typical relationship, so I can use it to estimate or predict the usual wind chill for a given wind speed, which one lonely point can never do.",
      hintLadder: [
        "Is association about one point or the whole set of points?",
        "Can a single unusual day exist inside an overall trend?",
        "What does a trend line let you estimate that one point cannot?"
      ]
    }
  ],
  reflectionPrompt: "Think of two winter things that might be associated — like temperature and hot-chocolate sales. Would you expect a positive or negative association, and what would the scatter plot look like?",
  misconceptionBank: [
    {
      id: "ignore-the-scale",
      label: "Reads bar/gridline height as raw units, ignoring the scale",
      description: "Assumes each gridline is worth 1, so a bar at gridline 3.5 is read as '3.5' even when each line is worth 8.",
      coachMove: "Point to the y-axis first: 'How much is ONE gridline worth?' Then multiply the number of gridlines by that value before comparing."
    },
    {
      id: "rate-ignores-time-span",
      label: "Reports the total change as the rate, forgetting to divide by time",
      description: "Says the temperature 'changed 12 degrees' and calls that the rate, instead of dividing by the number of hours to get change per hour.",
      coachMove: "Rate always has a 'per' in it. Ask 'per how many hours?' and divide the total change by the time span."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Steeper Slope",
      prompt:
        "Two winter days both dropped 12°C. On Monday the drop happened over 6 hours; on Tuesday it happened over 3 hours. Which day's temperature line is STEEPER on the graph, and which day would feel like a more sudden plunge?",
      answer:
        "Tuesday. Same 12°C drop but over half the time means twice the rate (4°C/hr vs. 2°C/hr), so Tuesday's line is steeper and the cold snap felt more sudden. Same total change, different rate — steepness is about change PER hour.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Winter Scatter Plot",
      challenge:
        "Invent (or look up) 8 days of two related winter measurements — for example, daily high temperature AND cups of hot chocolate sold, or wind speed AND wind chill. Plot them as a SCATTER PLOT, decide whether the association is positive, negative, or none, and sketch a trend line to make one prediction.",
      steps: [
        "Write a table of 8 days with TWO measurements each (an x variable and a y variable).",
        "Draw and label both axes with a stated scale, then plot one point per day.",
        "Decide the association (positive / negative / none) and write one sentence saying why.",
        "Sketch a trend line and use it to PREDICT one new value, labeling it as an estimate."
      ],
      deliverable: "A labeled scatter plot of 8 days of paired winter data, the named association, a sketched trend line, and one written prediction marked as an estimate.",
      choiceBoard: [
        "Draw the scatter plot and trend line on paper or in a drawing app.",
        "Build it in a spreadsheet and add a trendline, then read the prediction off it.",
        "Make a 'data desk' poster where the scatter plot has a headline stating the association in plain English."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Analyst Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w5.d1.arena1",
          type: "numeric",
          stem: "A temperature line falls from 5°C at noon to -13°C at 6 p.m. at a steady rate. What is the rate of change in °C per hour (give the drop per hour as a positive number)?",
          answer: 3,
          tolerance: 0,
          unit: "°C per hour",
          hintLadder: [
            "Total change = −13 − 5.",
            "−13 − 5 = −18°C over 6 hours.",
            "Rate = 18 ÷ 6 = 3°C per hour."
          ],
          explanation: "Change = −13 − 5 = −18°C over 6 hours, so 18 ÷ 6 = 3°C per hour."
        },
        {
          id: "g7.winter.math.w5.d1.arena2",
          type: "multiple_choice",
          stem: "A scatter plot of snow depth (x) vs. number of sledders (y) shows points rising together, then a few high-snow days with almost no sledders (a blizzard kept people home). What is the FAIREST reading?",
          choices: [
            "There is a perfect positive association with no exceptions",
            "There is a generally positive association, but the blizzard days are outliers that don't fit the trend",
            "There is a negative association overall",
            "A scatter plot cannot show any association here"
          ],
          answerIndex: 1,
          explanation: "Most points rise together (positive association), but the extreme blizzard days break away from the pattern — they are outliers, so the association is 'generally positive with exceptions,' not perfect.",
          hintLadder: [
            "Do MOST points trend up together?",
            "Do the blizzard days fit that upward trend or break from it?",
            "A general trend can still have outliers that don't fit."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Trace the Slope",
      prompt:
        "Stand and 'draw' three lines in the air with your arm: a GENTLE slope up (slow, small angle) for 4 counts, a STEEP slope up (fast, big angle) for 4 counts, then a steep slope DOWN for 4 counts. Feel the difference between gentle and steep — that's rate of change in your shoulder.",
      scienceTieIn:
        "Matching a movement's speed to the steepness of a line links your body's sense of pace to the math idea of rate — a steeper slope means a faster change, and feeling that helps it stick.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you predicted a value by following a trend past the last plotted point. When is it smart to trust a trend line's prediction, and when might it lead you wrong?",
      badge: { id: "g7-winter-data-analyst", name: "Winter Data Analyst", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
