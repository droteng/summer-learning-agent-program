// Grade 5 Math — Winter Expedition, Week 8 (Winter Showcase), Day 3.
// Grade 5 counterpart of g6.winter.math.w8.d3. Same topic (data synthesis —
// graphs plus honest summary statistics for the capstone) pitched down to
// Grade 5: whole-number data only, means that come out whole, mean/median/range
// kept simple, more step-by-step scaffolding. Celebratory capstone tone.

export const winterG5MathW8D3 = {
  id: "g5.winter.math.w8.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis — graphs and honest summary statistics",
  topicTag: "data-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.B.2", "CCSS.5.NBT.B.6"],
  hook: "Your winter investigation gave you numbers — snow depths, temperatures, timings. Today you turn that raw data into clear graphs and HONEST numbers (mean, median, and range) so your capstone tells the truth about what you found.",
  miniLesson: [
    "The MEAN (average) is the total of all the values divided by how many there are. It gives one 'typical' number.",
    "The MEDIAN is the MIDDLE value when you line the data up smallest to largest. With an odd count, it's the one in the very middle.",
    "The RANGE is the biggest value minus the smallest — it shows how spread out the data is. An honest summary reports the spread too, and never hides a strange, out-of-place value (an outlier)."
  ],
  workedExample: {
    prompt: "Snow depths over 5 days (cm): 4, 8, 6, 10, 12. Find the mean, median, and range.",
    steps: [
      "MEAN: add them — 4 + 8 + 6 + 10 + 12 = 40. Divide by 5: 40 ÷ 5 = 8 cm.",
      "MEDIAN: line them up — 4, 6, 8, 10, 12. The middle value is 8 cm.",
      "RANGE: biggest − smallest = 12 − 4 = 8 cm.",
      "Report all three: mean 8, median 8, range 8 cm — honest and complete."
    ],
    answer: "Mean = 8 cm, median = 8 cm, range = 8 cm."
  },
  items: [
    {
      id: "g5.winter.math.w8.d3.q1",
      type: "numeric",
      stem: "You measured icicle lengths (cm): 4, 8, 6, 2, 10. What is the MEAN length?",
      answer: 6,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all five lengths together first.",
        "4 + 8 + 6 + 2 + 10 = 30.",
        "Divide the total by 5: 30 ÷ 5 = 6."
      ],
      explanation: "Total is 4 + 8 + 6 + 2 + 10 = 30; mean = 30 ÷ 5 = 6 cm."
    },
    {
      id: "g5.winter.math.w8.d3.q2",
      type: "numeric",
      stem: "Snowballs made each day for a week: 5, 3, 8, 6, 4, 7, 9. What is the RANGE?",
      answer: 6,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Range is the biggest value minus the smallest value.",
        "The biggest is 9 and the smallest is 3.",
        "9 − 3 = 6."
      ],
      explanation: "Biggest = 9, smallest = 3; range = 9 − 3 = 6."
    },
    {
      id: "g5.winter.math.w8.d3.q3",
      type: "numeric",
      stem: "Daily snowfall (cm) over 7 days: 3, 9, 5, 12, 8, 6, 15. What is the MEDIAN snowfall?",
      answer: 8,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "First line the numbers up smallest to largest.",
        "In order: 3, 5, 6, 8, 9, 12, 15.",
        "With 7 values, the median is the 4th (middle) one: 8."
      ],
      explanation: "In order: 3, 5, 6, 8, 9, 12, 15. The middle (4th of 7) value is 8 cm."
    },
    {
      id: "g5.winter.math.w8.d3.q4",
      type: "multiple_choice",
      stem: "Which graph type is BEST for comparing the total snowfall in four different winter cities?",
      choices: [
        "A single number",
        "A bar graph, with one bar per city",
        "No graph — just say 'a lot'",
        "A line graph of one city's temperature every second"
      ],
      answerIndex: 1,
      explanation: "A bar graph compares separate groups (cities) side by side, so the differences are easy to see.",
      hintLadder: [
        "You're comparing separate groups (cities), not change over time.",
        "Which graph shows one bar per group?",
        "A bar graph compares groups side by side."
      ],
      misconceptionsTargeted: ["any-graph-works"]
    },
    {
      id: "g5.winter.math.w8.d3.q5",
      type: "short_answer",
      stem: "Your snow-depth data is 6, 7, 6, 8, and one day of 40 (a huge storm). Explain how this one strange value (an outlier) changes the MEAN compared to the MEDIAN, and which one is more HONEST to report.",
      rubric: {
        level3: "Notes the 40 pulls the MEAN way up (to about 13) while the MEDIAN (7) stays typical, and says the median (or reporting both AND the storm) is more honest.",
        level2: "Says the outlier raises the mean more than the median but doesn't clearly say which is more honest.",
        level1: "Doesn't connect the outlier to mean vs. median."
      },
      exemplar: "The 40 is an outlier. The mean becomes 67 ÷ 5 = about 13, which is higher than any normal day. The median stays 7, which matches a typical day better. The honest thing is to report the median and mention the storm day, not hide it.",
      hintLadder: [
        "Which number gets pulled way up by one huge value?",
        "Add the values to find the mean, then line them up for the median.",
        "Which number matches a typical day better — and should you mention the storm?"
      ]
    }
  ],
  reflectionPrompt: "Numbers can tell the truth or hide it. When you present your winter data, which one number (mean, median, or range) best shows what you really found — and why?",
  misconceptionBank: [
    {
      id: "mean-median-same",
      label: "Thinks mean and median are always equal",
      description: "Thinks the average and the middle value are the same, even when one strange value pulls them apart.",
      coachMove: "Show a set with one huge value: find both and watch the mean jump while the median barely moves."
    },
    {
      id: "any-graph-works",
      label: "Thinks any graph fits any data",
      description: "Picks a graph without matching it to the data (groups vs. change over time).",
      coachMove: "Ask: 'Am I comparing separate groups (bar) or showing change over time (line)?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Middle of the Snow",
      prompt:
        "Five snow forts are these heights in cm: 20, 12, 25, 12, 16. Without a calculator, what is the MEDIAN height? Line them up in your head first!",
      answer:
        "In order: 12, 12, 16, 20, 25. The middle of five values is the 3rd one: 16 cm. (The mean would be 85 ÷ 5 = 17 — close, but not the same!)",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest Data Poster",
      challenge:
        "Turn your winter numbers into an HONEST data poster. Make a clear graph (bar or line), then write the mean, median, and range next to it — and add a one-line 'honesty note' about anything strange, like an outlier.",
      steps: [
        "Choose the right graph for your data (bar for groups, line for change over time).",
        "Draw it with labeled axes and a title.",
        "Find and write the mean, median, and range next to the graph.",
        "Add an 'honesty note' pointing out any outlier or surprise in the data."
      ],
      deliverable: "A data poster with a labeled graph, the mean/median/range, and an honesty note.",
      choiceBoard: [
        "Draw or build a bar or line graph poster with the numbers.",
        "Make a data table plus a written summary of what the numbers mean.",
        "Record a 45-second 'data report' explaining your graph and numbers honestly."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.math.w8.d3.arena1",
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
          explanation: "Total = 6 + 9 + 12 + 3 + 10 = 40; mean = 40 ÷ 5 = 8 m."
        },
        {
          id: "g5.winter.math.w8.d3.arena2",
          type: "numeric",
          stem: "Six days of ice thickness (cm), already in order: 4, 6, 6, 8, 10, 12. What is the MEDIAN thickness?",
          answer: 7,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "The data is already in order, and there are 6 values (an even count).",
            "The two middle values are the 3rd and 4th: 6 and 8.",
            "For an even set, the median is halfway between them: (6 + 8) ÷ 2 = 7."
          ],
          explanation: "With 6 values in order, the median is halfway between the 3rd and 4th: (6 + 8) ÷ 2 = 7 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Bar Graph Body",
      prompt:
        "Turn your body into a bar graph! Crouch low for a 'small' value, stand at half height for 'medium', and stretch tall with arms up for 'large'. Call out low-medium-high in a random order and match your body 6 times.",
      scienceTieIn: "Matching your body height to values helps your brain link numbers to size — the same thinking that makes a good graph easy to read.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your winter data is now a graph and a set of honest numbers. What is the ONE number or picture that best tells the story of what you discovered this season?",
      badge: { id: "g5-winter-data-storyteller", name: "Data Storyteller", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
