// Grade 6 Math — Winter Expedition, Week 8 (Winter Showcase), Day 3.
// Topic: data synthesis — turn winter investigation results into graphs and
// honest summary statistics (mean, median, range) for the capstone.

export const winterG6MathW8D3 = {
  id: "g6.winter.math.w8.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis — graphs and honest summary statistics",
  topicTag: "data-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.SP.B.5", "CCSS.6.SP.A.3"],
  hook: "Your winter investigation gave you numbers — snow depths, temperatures, timings. Today you turn that raw data into clear graphs and HONEST summary statistics (mean, median, range) so your capstone tells the truth about what you found.",
  miniLesson: [
    "The MEAN (average) is the sum of all values divided by how many there are. It gives a single 'typical' number.",
    "The MEDIAN is the MIDDLE value when the data is sorted in order. With an odd count it's the middle one; with an even count it's the mean of the two middle values.",
    "The RANGE is the largest value minus the smallest — it shows how spread out the data is. An honest summary reports the spread, not just the average, and never hides an unusual value (an outlier)."
  ],
  workedExample: {
    prompt: "Snow depths over 5 days (cm): 4, 8, 6, 10, 12. Find the mean, median, and range.",
    steps: [
      "MEAN: add them — 4 + 8 + 6 + 10 + 12 = 40. Divide by 5: 40 ÷ 5 = 8 cm.",
      "MEDIAN: sort them — 4, 6, 8, 10, 12. The middle value is 8 cm.",
      "RANGE: largest − smallest = 12 − 4 = 8 cm.",
      "Report all three: mean 8, median 8, range 8 cm — honest and complete."
    ],
    answer: "Mean = 8 cm, median = 8 cm, range = 8 cm."
  },
  items: [
    {
      id: "g6.winter.math.w8.d3.q1",
      type: "numeric",
      stem: "You measured icicle lengths (cm): 5, 7, 9, 3, 6. What is the MEAN length?",
      answer: 6,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all five lengths together first.",
        "5 + 7 + 9 + 3 + 6 = 30.",
        "Divide the sum by 5: 30 ÷ 5 = 6."
      ],
      explanation: "Sum is 5 + 7 + 9 + 3 + 6 = 30; mean = 30 ÷ 5 = 6 cm."
    },
    {
      id: "g6.winter.math.w8.d3.q2",
      type: "numeric",
      stem: "Morning temperatures (°C) for a week: -2, 0, -4, 2, -1. What is the MEAN temperature?",
      answer: -1,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Add the values, keeping track of negatives: (-2) + 0 + (-4) + 2 + (-1).",
        "The sum is -5.",
        "Divide by 5: -5 ÷ 5 = -1."
      ],
      explanation: "Sum = (-2) + 0 + (-4) + 2 + (-1) = -5; mean = -5 ÷ 5 = -1 °C."
    },
    {
      id: "g6.winter.math.w8.d3.q3",
      type: "numeric",
      stem: "Daily snowfall (cm) over 7 days: 3, 9, 5, 12, 8, 6, 15. What is the MEDIAN snowfall?",
      answer: 8,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "First sort the numbers from smallest to largest.",
        "Sorted: 3, 5, 6, 8, 9, 12, 15.",
        "With 7 values, the median is the 4th (middle) one: 8."
      ],
      explanation: "Sorted: 3, 5, 6, 8, 9, 12, 15. The middle (4th of 7) value is 8 cm."
    },
    {
      id: "g6.winter.math.w8.d3.q4",
      type: "multiple_choice",
      stem: "Which graph type is BEST for comparing the total snowfall in four different winter cities?",
      choices: [
        "A single number",
        "A bar graph, with one bar per city",
        "No graph — just say 'a lot'",
        "A line graph of one city's temperature every second"
      ],
      answerIndex: 1,
      explanation: "A bar graph compares separate categories (cities) side by side, making the differences easy to see.",
      hintLadder: [
        "You're comparing separate groups (cities), not change over time.",
        "Which graph shows one bar per category?",
        "A bar graph compares categories side by side."
      ],
      misconceptionsTargeted: ["any-graph-works"]
    },
    {
      id: "g6.winter.math.w8.d3.q5",
      type: "short_answer",
      stem: "Your snow-depth data is 6, 7, 6, 8, and one day of 40 (a big storm). Explain how this outlier affects the MEAN versus the MEDIAN, and which is more HONEST to report.",
      rubric: {
        level3: "Notes the 40 pulls the MEAN way up (to about 13.4) while the MEDIAN (7) stays typical, and argues the median (or reporting both + the outlier) is more honest.",
        level2: "Says the outlier raises the mean more than the median but doesn't clearly say which is more honest.",
        level1: "Doesn't connect the outlier to mean vs. median."
      },
      exemplar: "The 40 is an outlier. The mean becomes 67 ÷ 5 = 13.4, which is higher than any normal day. The median stays 7, which better matches a typical day. The honest thing is to report the median and mention the storm day, not hide it.",
      hintLadder: [
        "Which measure gets dragged up by one huge value?",
        "Compute the mean with the 40, then find the median.",
        "Which number better matches a typical day — and should you mention the storm?"
      ]
    }
  ],
  reflectionPrompt: "Statistics can tell the truth or hide it. When you present your winter data, which one number (mean, median, or range) best represents what you actually found — and why?",
  misconceptionBank: [
    {
      id: "mean-median-same",
      label: "Assumes mean and median are always equal",
      description: "Thinks the average and the middle value are interchangeable, even when an outlier pulls them apart.",
      coachMove: "Show a set with one huge value: compute both and watch the mean jump while the median barely moves."
    },
    {
      id: "any-graph-works",
      label: "Thinks any graph type fits any data",
      description: "Picks a graph without matching it to the data (categories vs. change over time).",
      coachMove: "Ask: 'Am I comparing separate groups (bar) or showing change over time (line)?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Middle of the Snow",
      prompt:
        "Five snow forts are these heights in cm: 20, 12, 25, 12, 16. Without a calculator, what is the MEDIAN height? Sort them in your head first!",
      answer:
        "Sorted: 12, 12, 16, 20, 25. The middle of five values is the 3rd one: 16 cm. (Notice the mean would be 85 ÷ 5 = 17 — close, but not the same!)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest Data Poster",
      challenge:
        "Turn your winter investigation numbers into an HONEST data poster. Make a clear graph (bar or line), then report the mean, median, and range beside it — and add a one-line 'honesty note' about anything unusual, like an outlier.",
      steps: [
        "Choose the right graph for your data (bar for categories, line for change over time).",
        "Draw it with labeled axes and a title.",
        "Calculate and write the mean, median, and range next to the graph.",
        "Add an 'honesty note' pointing out any outlier or surprise in the data."
      ],
      deliverable: "A data poster with a labeled graph, the mean/median/range, and an honesty note.",
      choiceBoard: [
        "Draw or build a bar or line graph poster with the stats.",
        "Make a data table plus a written summary of what the numbers mean.",
        "Record a 45-second 'data report' explaining your graph and stats honestly."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w8.d3.arena1",
          type: "numeric",
          stem: "Snowball throw distances (m): 6, 9, 12, 3, 10. What is the MEAN distance?",
          answer: 8,
          tolerance: 0,
          unit: "m",
          hintLadder: [
            "Add all five distances first.",
            "6 + 9 + 12 + 3 + 10 = 40.",
            "Divide by 5: 40 ÷ 5 = 8."
          ],
          explanation: "Sum = 6 + 9 + 12 + 3 + 10 = 40; mean = 40 ÷ 5 = 8 m."
        },
        {
          id: "g6.winter.math.w8.d3.arena2",
          type: "numeric",
          stem: "Six days of ice thickness (cm): 4, 6, 6, 8, 10, 14. What is the MEDIAN thickness?",
          answer: 7,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "The data is already sorted, and there are 6 values (an even count).",
            "The two middle values are the 3rd and 4th: 6 and 8.",
            "Median of an even set = mean of the two middles: (6 + 8) ÷ 2 = 7."
          ],
          explanation: "With 6 sorted values, the median is the mean of the 3rd and 4th: (6 + 8) ÷ 2 = 7 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Bar Graph Body",
      prompt:
        "Turn your body into a bar graph! Crouch low for a 'small' value, stand at half height for 'medium', and stretch tall with arms up for 'large'. Call out low-medium-high in a random order and match your body 6 times.",
      scienceTieIn: "Matching your body height to values helps your brain link numbers to size — the same visual thinking that makes a good graph easy to read.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your winter data is now a graph and a set of honest statistics. What is the ONE number or picture that best tells the story of what you discovered this season?",
      badge: { id: "winter-data-storyteller", name: "Data Storyteller", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
