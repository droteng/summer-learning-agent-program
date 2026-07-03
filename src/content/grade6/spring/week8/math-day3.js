// Grade 6 Math — Spring Expedition, Week 8 (Spring Showcase), Day 3.
// Topic: data synthesis — turn your spring investigation into graphs and
// honest summary statistics for the capstone.

export const springG6MathW8D3 = {
  id: "g6.spring.math.w8.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis — graphs and honest statistics",
  topicTag: "data-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.SP.B.5", "CCSS.6.SP.B.4"],
  hook: "You've measured your spring growth all season — now turn those numbers into graphs and summary statistics that tell an HONEST story. Data is the proof inside your capstone.",
  miniLesson: [
    "The MEAN is the average: add all values, then divide by how many there are. It's a single number that summarizes a whole data set.",
    "The MEDIAN is the middle value when the data is sorted. It's more honest than the mean when one huge or tiny value (an outlier) would pull the average off.",
    "The RANGE is the highest value minus the lowest — it shows how spread out the data is. Honest reporting means picking the graph and statistic that show the data truthfully, not just the one that looks best."
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
      id: "g6.spring.math.w8.d3.q1",
      type: "numeric",
      stem: "Your seedling's heights over 4 days were 3, 5, 7, 9 cm. What is the MEAN height?",
      answer: 6,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all four values first.",
        "3 + 5 + 7 + 9 = 24.",
        "Divide by 4: 24 ÷ 4 = 6."
      ],
      explanation: "Sum is 3 + 5 + 7 + 9 = 24, and 24 ÷ 4 = 6 cm."
    },
    {
      id: "g6.spring.math.w8.d3.q2",
      type: "numeric",
      stem: "You recorded these petal counts: 4, 8, 5, 9, 6. When sorted, what is the MEDIAN (middle value)?",
      answer: 6,
      tolerance: 0,
      unit: "petals",
      hintLadder: [
        "First sort the numbers from least to greatest.",
        "Sorted: 4, 5, 6, 8, 9.",
        "The middle of 5 values is the 3rd one: 6."
      ],
      explanation: "Sorted: 4, 5, 6, 8, 9. With 5 values the middle (3rd) value is 6."
    },
    {
      id: "g6.spring.math.w8.d3.q3",
      type: "multiple_choice",
      stem: "Your daily sprout counts were 10, 11, 12, 11, 90. Which statistic gives the most HONEST 'typical day,' and why?",
      choices: [
        "The mean, because it uses every number",
        "The median, because the 90 is an outlier that pulls the mean too high",
        "The range, because it's the biggest number",
        "The 90, because it's the most exciting"
      ],
      answerIndex: 1,
      explanation: "The 90 is an outlier. The mean would be dragged up by it (about 26.8), but the median (11) reflects a typical day honestly.",
      hintLadder: [
        "One value (90) is very different from the rest.",
        "Which statistic is NOT pulled off by a single outlier?",
        "The median stays near the typical days."
      ],
      misconceptionsTargeted: ["mean-always-best"]
    },
    {
      id: "g6.spring.math.w8.d3.q4",
      type: "numeric",
      stem: "Rainfall over 5 spring days was 6, 2, 9, 4, 4 mm. What is the RANGE?",
      answer: 7,
      tolerance: 0,
      unit: "mm",
      hintLadder: [
        "Find the highest and lowest values.",
        "Highest = 9, lowest = 2.",
        "Range = 9 − 2 = 7."
      ],
      explanation: "Highest is 9, lowest is 2, so the range = 9 − 2 = 7 mm."
    },
    {
      id: "g6.spring.math.w8.d3.q5",
      type: "short_answer",
      stem: "You have your spring growth data and want to show it honestly in your capstone. Which graph would you choose (bar, line, or dot plot) and which statistic (mean, median, or range), and WHY?",
      rubric: {
        level3: "Names a sensible graph AND a sensible statistic for the data, with a clear reason tied to showing the data honestly (e.g., line graph for growth over time; median if there's an outlier).",
        level2: "Names a graph and statistic but the reasoning is thin or only partly fits.",
        level1: "No clear choice or no reasoning."
      },
      exemplar: "I'd use a line graph because my plant's height changed over time, and a line shows the trend clearly. I'd report the median height because one windy day stunted growth and would drag the mean down unfairly.",
      hintLadder: [
        "Does your data change over TIME or compare categories?",
        "Is there an outlier that would distort the mean?",
        "Match the graph and statistic to what's honest for your data."
      ]
    }
  ],
  reflectionPrompt: "Look at your own spring data. Is there a number in it that could mislead your audience if you showed it the wrong way? How will you present it honestly?",
  misconceptionBank: [
    {
      id: "mean-always-best",
      label: "Thinks the mean is always the best summary",
      description: "Reaches for the mean even when an outlier makes the median more honest.",
      coachMove: "Check for outliers first. If one value is far from the rest, compute both mean and median and ask which better shows a typical case."
    },
    {
      id: "median-forgets-sort",
      label: "Finds the 'middle' without sorting first",
      description: "Picks the middle of the unsorted list instead of ordering the data first.",
      coachMove: "Always sort least-to-greatest before locating the median — the middle of the SORTED list."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Sneaky Outlier",
      prompt:
        "Four seeds sprouted in 5, 6, 5, 6 days — but one lonely seed took 40 days. If you report the MEAN sprouting time, will it sound faster or slower than a typical seed? Guess, then think about why.",
      answer:
        "Slower! The mean is (5+6+5+6+40) ÷ 5 = 62 ÷ 5 = 12.4 days, but a typical seed took about 5–6 days. The 40 is an outlier dragging the mean up — the median (6) is far more honest.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Honest Data Poster",
      challenge:
        "Take your real spring investigation numbers (or the sample set 4, 5, 5, 6, 7, 20) and build an 'honest data poster': graph the data AND report the statistic that tells the truest story, with a caption explaining your choice.",
      steps: [
        "Write out your data values in a small table.",
        "Choose and draw the right graph (line for over-time, bar/dot for categories).",
        "Compute the mean, median, and range, and circle the statistic that's most honest.",
        "Add a one-sentence caption explaining WHY you chose that statistic."
      ],
      deliverable: "A data poster with a graph, all three statistics, and a caption defending your most-honest choice.",
      choiceBoard: [
        "Draw a line or bar graph poster with a caption.",
        "Make a 'two-headlines' page: one misleading, one honest, from the same data.",
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
          id: "g6.spring.math.w8.d3.arena1",
          type: "numeric",
          stem: "A plant's weekly heights were 4, 7, 7, 10, 12 cm. What is the MEAN height? (Add them, then divide by 5.)",
          answer: 8,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Add all five values.",
            "4 + 7 + 7 + 10 + 12 = 40.",
            "40 ÷ 5 = 8."
          ],
          explanation: "Sum is 4 + 7 + 7 + 10 + 12 = 40, and 40 ÷ 5 = 8 cm."
        },
        {
          id: "g6.spring.math.w8.d3.arena2",
          type: "numeric",
          stem: "These sprout heights are 3, 4, 6, 8, 9, 10 cm. With 6 values, the median is the average of the two middle numbers. What is the MEDIAN?",
          answer: 7,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "The data is already sorted; find the two middle values.",
            "The middle two of six values are the 3rd and 4th: 6 and 8.",
            "Median = (6 + 8) ÷ 2 = 7."
          ],
          explanation: "With 6 sorted values, the middle two are 6 and 8; their average is (6 + 8) ÷ 2 = 7 cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Graph Your Body",
      prompt:
        "Turn your arms into a bar graph: raise them to 'low,' 'medium,' and 'high' bars, then trace a rising line-graph slope up to the sky and back down. Repeat the up-down trace 4 times, breathing steadily.",
      scienceTieIn: "Reaching to different heights engages your core and shoulders and gets blood flowing to your brain — the same focus boost that helps you read a graph accurately.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Data can be shown honestly or misleadingly. What's one time this year you saw a graph or statistic that told a clearer story than words alone could?",
      badge: { id: "spring-data-truth-teller", name: "Data Truth-Teller", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
