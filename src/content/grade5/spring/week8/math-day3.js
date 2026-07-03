// Grade 5 Math — Spring Expedition, Week 8 (Spring Showcase), Day 3.
// Grade 5 counterpart of g6.spring.math.w8.d3. Same topic (data synthesis:
// turn your spring investigation into graphs and honest statistics) pitched
// down to Grade 5: whole-number data sets, mean/median/range with clean whole
// answers, and step-by-step support. Capstone/celebratory tone.

export const springG5MathW8D3 = {
  id: "g5.spring.math.w8.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis — graphs and honest statistics",
  topicTag: "data-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.MD.B.2", "CCSS.5.NBT.B.6"],
  hook: "You have measured your spring growth all season — now turn those numbers into graphs and simple statistics that tell an HONEST story. Data is the proof inside your capstone!",
  miniLesson: [
    "The MEAN is the average: add all the values, then divide by how many there are. It is one number that stands for the whole data set.",
    "The MEDIAN is the MIDDLE value once the data is sorted from least to greatest. It is more honest than the mean when one huge or tiny value (an outlier) would pull the average off.",
    "The RANGE is the highest value minus the lowest — it shows how spread out the data is. Honest reporting means picking the graph and statistic that show the data truthfully, not the one that just looks best."
  ],
  workedExample: {
    prompt: "A plant's heights over 5 weeks were 2, 4, 6, 8, 10 cm. Find the mean and the range.",
    steps: [
      "Add the values: 2 + 4 + 6 + 8 + 10 = 30.",
      "Divide by how many there are: 30 ÷ 5 = 6.",
      "Mean height = 6 cm.",
      "Range = highest − lowest = 10 − 2 = 8 cm."
    ],
    answer: "Mean = 6 cm, Range = 8 cm."
  },
  items: [
    {
      id: "g5.spring.math.w8.d3.q1",
      type: "numeric",
      stem: "Your seedling's heights over 4 days were 2, 4, 6, 8 cm. What is the MEAN height?",
      answer: 5,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all four values first.",
        "2 + 4 + 6 + 8 = 20.",
        "Divide by 4: 20 ÷ 4 = 5."
      ],
      explanation: "Sum is 2 + 4 + 6 + 8 = 20, and 20 ÷ 4 = 5 cm."
    },
    {
      id: "g5.spring.math.w8.d3.q2",
      type: "numeric",
      stem: "You recorded these petal counts: 3, 7, 2, 9, 5. When sorted, what is the MEDIAN (middle value)?",
      answer: 5,
      tolerance: 0,
      unit: "petals",
      hintLadder: [
        "First sort the numbers from least to greatest.",
        "Sorted: 2, 3, 5, 7, 9.",
        "The middle of 5 values is the 3rd one: 5."
      ],
      explanation: "Sorted: 2, 3, 5, 7, 9. With 5 values the middle (3rd) value is 5."
    },
    {
      id: "g5.spring.math.w8.d3.q3",
      type: "multiple_choice",
      stem: "Your daily sprout counts were 10, 11, 12, 11, 90. Which statistic gives the most HONEST 'typical day,' and why?",
      choices: [
        "The mean, because it uses every number",
        "The median, because the 90 is an outlier that pulls the mean too high",
        "The range, because it is the biggest number",
        "The 90, because it is the most exciting"
      ],
      answerIndex: 1,
      explanation: "The 90 is an outlier. The mean would be dragged way up by it, but the median (11) shows a typical day honestly.",
      hintLadder: [
        "One value (90) is very different from the rest.",
        "Which statistic is NOT pulled off by a single outlier?",
        "The median stays near the typical days."
      ],
      misconceptionsTargeted: ["mean-always-best"]
    },
    {
      id: "g5.spring.math.w8.d3.q4",
      type: "numeric",
      stem: "Rainfall over 5 spring days was 8, 3, 10, 5, 4 mm. What is the RANGE?",
      answer: 7,
      tolerance: 0,
      unit: "mm",
      hintLadder: [
        "Find the highest and lowest values.",
        "Highest = 10, lowest = 3.",
        "Range = 10 − 3 = 7."
      ],
      explanation: "Highest is 10, lowest is 3, so the range = 10 − 3 = 7 mm."
    },
    {
      id: "g5.spring.math.w8.d3.q5",
      type: "short_answer",
      stem: "You have your spring growth data and want to show it honestly in your capstone. Which graph would you choose (bar, line, or dot plot) and which statistic (mean, median, or range), and WHY?",
      rubric: {
        level3: "Names a sensible graph AND a sensible statistic for the data, with a clear reason tied to showing the data honestly (like a line graph for growth over time, or the median if there is an outlier).",
        level2: "Names a graph and statistic but the reason is thin or only partly fits.",
        level1: "No clear choice or no reason."
      },
      exemplar: "I would use a line graph because my plant's height changed over time, and a line shows the trend clearly. I would report the median height because one windy day slowed the growth and would pull the mean down unfairly.",
      hintLadder: [
        "Does your data change over TIME or compare groups?",
        "Is there an outlier that would mess up the mean?",
        "Match the graph and statistic to what is honest for your data."
      ]
    }
  ],
  reflectionPrompt: "Look at your own spring data. Is there a number in it that could trick your audience if you showed it the wrong way? How will you present it honestly?",
  misconceptionBank: [
    {
      id: "mean-always-best",
      label: "Thinks the mean is always the best summary",
      description: "Reaches for the mean even when an outlier makes the median more honest.",
      coachMove: "Check for outliers first. If one value is far from the rest, find both mean and median and ask which better shows a typical case."
    },
    {
      id: "median-forgets-sort",
      label: "Finds the 'middle' without sorting first",
      description: "Picks the middle of the unsorted list instead of ordering the data first.",
      coachMove: "Always sort least-to-greatest before finding the median — the middle of the SORTED list."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Sneaky Outlier",
      prompt:
        "Four seeds sprouted in 4, 5, 4, 5 days — but one lonely seed took 32 days. If you report the MEAN sprouting time, will it sound faster or slower than a typical seed? Guess, then think about why.",
      answer:
        "Slower! The mean is (4 + 5 + 4 + 5 + 32) ÷ 5 = 50 ÷ 5 = 10 days, but a typical seed took about 4 or 5 days. The 32 is an outlier dragging the mean up — the median (5) is far more honest.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest Data Poster",
      challenge:
        "Take your real spring investigation numbers (or the sample set 4, 5, 5, 6, 20) and build an 'honest data poster': graph the data AND report the statistic that tells the truest story, with a caption that explains your choice.",
      steps: [
        "Write out your data values in a small table.",
        "Choose and draw the right graph (line for over-time, bar or dot for groups).",
        "Find the mean, median, and range, and circle the statistic that is most honest.",
        "Add a one-sentence caption explaining WHY you chose that statistic."
      ],
      deliverable: "A data poster with a graph, all three statistics, and a caption defending your most-honest choice.",
      choiceBoard: [
        "Draw a line or bar graph poster with a caption.",
        "Make a 'two-headlines' page: one tricky, one honest, from the same data.",
        "Build a dot plot and mark the mean and median right on it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w8.d3.arena1",
          type: "numeric",
          stem: "A plant's weekly heights were 2, 5, 5, 6, 12 cm. What is the MEAN height? (Add them, then divide by 5.)",
          answer: 6,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Add all five values.",
            "2 + 5 + 5 + 6 + 12 = 30.",
            "30 ÷ 5 = 6."
          ],
          explanation: "Sum is 2 + 5 + 5 + 6 + 12 = 30, and 30 ÷ 5 = 6 cm."
        },
        {
          id: "g5.spring.math.w8.d3.arena2",
          type: "numeric",
          stem: "These sprout heights are 2, 4, 6, 8 cm. With 4 values, the median is the average of the two middle numbers. What is the MEDIAN?",
          answer: 5,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "The data is already sorted; find the two middle values.",
            "The middle two of four values are the 2nd and 3rd: 4 and 6.",
            "Median = (4 + 6) ÷ 2 = 5."
          ],
          explanation: "With 4 sorted values, the middle two are 4 and 6; their average is (4 + 6) ÷ 2 = 5 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Graph Your Body",
      prompt:
        "Turn your arms into a bar graph: raise them to 'low,' 'medium,' and 'high' bars, then trace a rising line-graph slope up to the sky and back down. Repeat the up-down trace 4 times, breathing steadily.",
      scienceTieIn: "Reaching to different heights works your core and shoulders and gets blood flowing to your brain — the same focus boost that helps you read a graph correctly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Data can be shown honestly or in a tricky way. What is one time this year you saw a graph or number that told a clearer story than words alone could?",
      badge: { id: "g5-spring-data-truth-teller", name: "Data Truth-Teller", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
