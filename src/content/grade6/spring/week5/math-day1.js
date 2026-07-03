// Grade 6 Math — Spring Expedition, Week 5 (Measuring Change), Day 1.
// Topic: line graphs of change over time — reading and plotting a growth curve.

export const springG6MathW5D1 = {
  id: "g6.spring.math.w5.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Math",
  topic: "Line graphs of change over time",
  topicTag: "line-graphs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.NS.C.8", "CCSS.6.EE.C.9"],
  hook: "A seedling doesn't grow all at once — it climbs a little every day. When you plot those measurements as a line graph, the growth becomes a curve you can read at a glance. Today you read and plot a bean plant's growth curve.",
  miniLesson: [
    "A line graph shows how one thing changes over time. The horizontal axis (x) is usually TIME, and the vertical axis (y) is the amount you measured — like plant height.",
    "Each measurement is a point: (day, height). Connecting the points in order makes the line that shows the growth over time.",
    "Reading a graph: to find the height on a given day, go up from that day on the x-axis to the line, then read across to the y-axis. A line that climbs steeply means fast growth; a flatter line means slow growth."
  ],
  workedExample: {
    prompt: "A bean plant is measured: Day 0 = 0 cm, Day 2 = 2 cm, Day 4 = 5 cm. On the graph, what point do you plot for Day 4, and how much did it grow from Day 0 to Day 4?",
    steps: [
      "Each point is written (day, height). Day 4 with height 5 cm is the point (4, 5).",
      "To plot it: move right to day 4 on the x-axis, then up to height 5 on the y-axis, and mark the point.",
      "Growth from Day 0 to Day 4 = final height − starting height = 5 − 0 = 5 cm.",
      "So you plot (4, 5) and the plant grew 5 cm over those first four days."
    ],
    answer: "Plot the point (4, 5); the plant grew 5 cm from Day 0 to Day 4."
  },
  items: [
    {
      id: "g6.spring.math.w5.d1.q1",
      type: "multiple_choice",
      stem: "On a line graph of a plant's height over time, what usually goes on the horizontal (x) axis?",
      choices: [
        "The height of the plant",
        "The time (the day the measurement was taken)",
        "The color of the plant",
        "The number of leaves"
      ],
      answerIndex: 1,
      explanation: "On a change-over-time graph, the x-axis shows time (the day) and the y-axis shows the amount measured (height).",
      hintLadder: [
        "One axis is 'when' and the other is 'how much.'",
        "Time almost always runs along the bottom.",
        "The x-axis shows the day."
      ]
    },
    {
      id: "g6.spring.math.w5.d1.q2",
      type: "numeric",
      stem: "A bean plant's heights are: Day 0 = 0 cm, Day 2 = 2 cm, Day 4 = 5 cm, Day 6 = 9 cm, Day 8 = 14 cm. Reading the graph, how tall was the plant on Day 6?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find Day 6 on the x-axis.",
        "Go up to the line and read across to the height.",
        "The measurement listed for Day 6 is 9 cm."
      ],
      explanation: "The point plotted for Day 6 is (6, 9), so the plant was 9 cm tall."
    },
    {
      id: "g6.spring.math.w5.d1.q3",
      type: "numeric",
      stem: "Using the same plant (Day 0 = 0 cm, Day 2 = 2 cm, Day 4 = 5 cm, Day 6 = 9 cm, Day 8 = 14 cm), how much did it grow between Day 4 and Day 8?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find the height on Day 8 and the height on Day 4.",
        "Subtract the earlier height from the later one.",
        "14 − 5 = 9 cm."
      ],
      explanation: "Day 8 height (14 cm) minus Day 4 height (5 cm) = 14 − 5 = 9 cm of growth."
    },
    {
      id: "g6.spring.math.w5.d1.q4",
      type: "numeric",
      stem: "The point for Day 8 is (8, 14). A new measurement on Day 10 is 20 cm. What is the y-coordinate of the point you plot for Day 10?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "A point is written (x, y) = (day, height).",
        "The y-coordinate is the height value.",
        "For Day 10 the height is 20 cm, so y = 20."
      ],
      explanation: "The point is (10, 20); the y-coordinate is the height, 20 cm.",
      misconceptionsTargeted: ["axis-swap"]
    },
    {
      id: "g6.spring.math.w5.d1.q5",
      type: "short_answer",
      stem: "Two plants are graphed on the same axes. Plant A's line climbs steeply and Plant B's line is much flatter. What does the steepness of each line tell you about how the plants are growing?",
      rubric: {
        level3: "States that Plant A grows faster (steep line = more height gained per day) and Plant B grows slower (flatter line = less height per day), connecting steepness to speed of growth.",
        level2: "Says one line means faster growth but the reasoning about steepness is vague or only covers one plant.",
        level1: "No clear link between steepness and growth speed."
      },
      exemplar: "The steeper line (Plant A) means that plant is gaining a lot of height in a short time, so it's growing fast. Plant B's flatter line means it gains only a little height each day, so it's growing slowly.",
      hintLadder: [
        "A steep line rises a lot over a short stretch of time.",
        "More height gained per day means faster growth.",
        "Describe both the steep line and the flat line."
      ]
    }
  ],
  reflectionPrompt: "If you measured your own height once a year and plotted it, would your line be steep in some years and flat in others? When would it be steepest?",
  misconceptionBank: [
    {
      id: "axis-swap",
      label: "Swaps the x and y coordinates",
      description: "Writes the height first and the day second, or plots time on the vertical axis instead of the horizontal one.",
      coachMove: "Say the point out loud as '(day, height)' every time — x first (across), y second (up). Time goes across the bottom."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Read the Growing Line",
      prompt:
        "Picture a line graph of a sunflower's height. On Day 5 the line is low, and by Day 20 it's way up near the top of the graph. Without any numbers, how can you tell just by LOOKING at the line whether the sunflower grew fast or slow between those days?",
      answer:
        "By how steep the line is! A line that climbs sharply upward means fast growth (lots of height in few days). If the line rose gently, the sunflower grew slowly. Steepness = speed of change.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plot Your Own Growth Curve",
      challenge:
        "Create a line graph that tells a growth story over time. Use a real or invented set of measurements — a plant's height, a puppy's weight, or your own height by age — and plot the change day by day (or year by year).",
      materials: ["Graph paper or a drawing app", "A ruler for straight axes"],
      steps: [
        "Choose what's growing and make a small table: time in one column, measurement in the other (at least 5 points).",
        "Draw two axes — time across the bottom (x), amount up the side (y) — and label them with units.",
        "Plot each (time, amount) point, then connect them in order.",
        "Mark the steepest part of your line and write one sentence about when growth was fastest."
      ],
      deliverable: "A labeled line graph with at least 5 plotted points and a note on where growth was fastest.",
      choiceBoard: [
        "Draw the growth curve by hand on graph paper.",
        "Build it in a spreadsheet or drawing app and label the axes.",
        "Make a 'growth diary' with a sketch of the graph plus 3 sentences telling its story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Curve Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.math.w5.d1.arena1",
          type: "numeric",
          stem: "A tomato seedling is graphed: Day 0 = 1 cm, Day 3 = 4 cm, Day 6 = 10 cm, Day 9 = 19 cm. How much did it grow from Day 0 to Day 9?",
          answer: 18,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Find the height on Day 9 and the height on Day 0.",
            "Subtract the starting height from the final height.",
            "19 − 1 = 18 cm."
          ],
          explanation: "Final height (19 cm) minus starting height (1 cm) = 19 − 1 = 18 cm."
        },
        {
          id: "g6.spring.math.w5.d1.arena2",
          type: "multiple_choice",
          stem: "On a growth graph, the line between Day 6 and Day 9 is much steeper than the line between Day 0 and Day 3. What does that tell you?",
          choices: [
            "The plant grew SLOWER between Day 6 and Day 9",
            "The plant grew FASTER between Day 6 and Day 9 than at the start",
            "The plant shrank between Day 6 and Day 9",
            "Steepness tells you nothing about growth"
          ],
          answerIndex: 1,
          explanation: "A steeper section means more height was gained in the same amount of time — faster growth during Day 6 to Day 9.",
          hintLadder: [
            "Steeper means the line rose more over the same number of days.",
            "More height per day = faster growth.",
            "So the steep stretch is the faster-growth stretch."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Graph the Climb",
      prompt:
        "Trace a line graph with your body! Start crouched low (Day 0). As you count '2, 4, 6, 8, 10,' rise a little taller with each number until you're stretched all the way up like the top of a growth curve. Then float slowly back down and repeat 3 times.",
      scienceTieIn:
        "Moving your body in a rising pattern gets your blood flowing and oxygen to your brain — a quick reset that helps you focus on the next set of points to plot.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of something in your life that changes over time — your reading speed, a plant, savings in a jar. If you graphed it, would the line climb steadily, jump up fast, or stay flat? Describe the shape.",
      badge: { id: "spring-growth-curve-plotter", name: "Growth Curve Plotter", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
