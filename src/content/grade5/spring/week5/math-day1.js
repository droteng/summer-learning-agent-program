// Grade 5 Math — Spring Expedition, Week 5 (Measuring Change), Day 1.
// Grade 5 counterpart of g6.spring.math.w5.d1. Same topic (line graphs of
// change over time) pitched down to Grade 5: reading and plotting a growth
// curve with simple whole-number heights and change, shorter passages, and NO
// slope / rate-of-change formula.

export const springG5MathW5D1 = {
  id: "g5.spring.math.w5.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Math",
  topic: "Line graphs of change over time",
  topicTag: "line-graphs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.G.A.1", "CCSS.5.G.A.2"],
  hook: "A seedling does not grow all at once — it climbs a little every day. When you put those measurements on a line graph, the growth turns into a line you can read at a glance. Today you read and plot a bean plant's growth line.",
  miniLesson: [
    "A line graph shows how something changes over time. The bottom (across) axis is usually the TIME — like the day. The side (up) axis is the amount you measured — like plant height.",
    "Each measurement becomes a point written as (day, height). To plot a point, move ACROSS to the day, then UP to the height, and make a dot. Connecting the dots in order makes the line.",
    "To read the graph, pick a day on the bottom, go up to the line, then read across to the height. A line that climbs quickly means the plant grew a lot; a flatter line means it grew only a little."
  ],
  workedExample: {
    prompt: "A bean plant is measured: Day 0 = 0 cm, Day 2 = 2 cm, Day 4 = 5 cm. What point do you plot for Day 4, and how much did it grow from Day 0 to Day 4?",
    steps: [
      "Each point is written (day, height). Day 4 with a height of 5 cm is the point (4, 5).",
      "To plot it: move across to day 4, then up to height 5, and mark the dot.",
      "Growth from Day 0 to Day 4 = final height − starting height = 5 − 0 = 5 cm.",
      "So you plot (4, 5), and the plant grew 5 cm in those first four days."
    ],
    answer: "Plot the point (4, 5); the plant grew 5 cm from Day 0 to Day 4."
  },
  items: [
    {
      id: "g5.spring.math.w5.d1.q1",
      type: "multiple_choice",
      stem: "On a line graph of a plant's height over time, what usually goes on the bottom (across) axis?",
      choices: [
        "The height of the plant",
        "The time (the day the measurement was taken)",
        "The color of the plant",
        "The number of leaves"
      ],
      answerIndex: 1,
      explanation: "On a change-over-time graph, the bottom axis shows time (the day) and the side axis shows the amount you measured (height).",
      hintLadder: [
        "One axis is 'when' and the other is 'how much.'",
        "Time almost always runs along the bottom.",
        "The bottom axis shows the day."
      ]
    },
    {
      id: "g5.spring.math.w5.d1.q2",
      type: "numeric",
      stem: "A bean plant's heights are: Day 0 = 0 cm, Day 2 = 2 cm, Day 4 = 5 cm, Day 6 = 9 cm, Day 8 = 14 cm. Reading the graph, how tall was the plant on Day 6?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Find Day 6 on the bottom axis.",
        "Go up to the line and read across to the height.",
        "The height listed for Day 6 is 9 cm."
      ],
      explanation: "The point plotted for Day 6 is (6, 9), so the plant was 9 cm tall."
    },
    {
      id: "g5.spring.math.w5.d1.q3",
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
      id: "g5.spring.math.w5.d1.q4",
      type: "numeric",
      stem: "The point for Day 8 is (8, 14). A new measurement on Day 10 is 20 cm. What is the height number (the up-and-down part) of the point you plot for Day 10?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "A point is written (day, height).",
        "The second number is the height.",
        "For Day 10 the height is 20 cm, so the height number is 20."
      ],
      explanation: "The point is (10, 20); the height number (the up part) is 20 cm.",
      misconceptionsTargeted: ["axis-swap"]
    },
    {
      id: "g5.spring.math.w5.d1.q5",
      type: "short_answer",
      stem: "Two plants are graphed on the same axes. Plant A's line climbs quickly and Plant B's line is much flatter. What does the shape of each line tell you about how the plants are growing?",
      rubric: {
        level3: "States that Plant A grew more/faster (a line that climbs quickly gains a lot of height) and Plant B grew less/slower (a flatter line gains little height), connecting the steepness of the line to how much the plant grew.",
        level2: "Says one line means more growth but the reasoning is vague or only covers one plant.",
        level1: "No clear link between the shape of the line and how much the plant grew."
      },
      exemplar: "Plant A's line climbs quickly, so that plant is gaining a lot of height and growing fast. Plant B's line is almost flat, so it is gaining only a little height and growing slowly.",
      hintLadder: [
        "A line that climbs quickly rises a lot over a short stretch.",
        "More height gained means more growth.",
        "Describe both the climbing line and the flat line."
      ]
    }
  ],
  reflectionPrompt: "If you measured your own height once a year and plotted it, would your line climb a lot in some years and only a little in others? When do you think it would climb the most?",
  misconceptionBank: [
    {
      id: "axis-swap",
      label: "Swaps the day and the height",
      description: "Writes the height first and the day second, or puts time on the up-and-down axis instead of along the bottom.",
      coachMove: "Say the point out loud as '(day, height)' every time — day first (across), height second (up). Time goes across the bottom."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Read the Growing Line",
      prompt:
        "Picture a line graph of a sunflower's height. On Day 5 the line is low, and by Day 20 it is way up near the top. Without any numbers, how can you tell just by LOOKING whether the sunflower grew a lot or a little between those days?",
      answer:
        "By how much the line climbs! A line that climbs high means the sunflower grew a lot. A line that stays low and flat means it grew only a little. The climb of the line shows the growth.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plot Your Own Growth Line",
      challenge:
        "Make a line graph that tells a growth story over time. Use a real or made-up set of measurements — a plant's height, a puppy's weight, or your own height by age — and plot the change day by day (or year by year).",
      materials: ["Graph paper or a drawing app", "A ruler for straight axes"],
      steps: [
        "Choose what is growing and make a small table: time in one column, measurement in the other (at least 5 points).",
        "Draw two axes — time across the bottom, amount up the side — and label them with units.",
        "Plot each (time, amount) point, then connect them in order.",
        "Circle the part of your line that climbs the most and write one sentence about when growth was biggest."
      ],
      deliverable: "A labeled line graph with at least 5 plotted points and a note on where the line climbs the most.",
      choiceBoard: [
        "Draw the growth line by hand on graph paper.",
        "Build it in a spreadsheet or drawing app and label the axes.",
        "Make a 'growth diary' with a sketch of the graph plus 3 sentences telling its story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Line Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w5.d1.arena1",
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
          id: "g5.spring.math.w5.d1.arena2",
          type: "multiple_choice",
          stem: "On a growth graph, the line climbs much more between Day 6 and Day 9 than between Day 0 and Day 3. What does that tell you?",
          choices: [
            "The plant grew LESS between Day 6 and Day 9",
            "The plant grew MORE between Day 6 and Day 9 than at the start",
            "The plant shrank between Day 6 and Day 9",
            "The shape of the line tells you nothing about growth"
          ],
          answerIndex: 1,
          explanation: "A part of the line that climbs more means the plant gained more height in that time — so it grew more from Day 6 to Day 9.",
          hintLadder: [
            "A line that climbs more rose higher over the same number of days.",
            "More height gained means more growth.",
            "So the steeper-climbing part is where the plant grew more."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Graph the Climb",
      prompt:
        "Trace a line graph with your body! Start crouched low (Day 0). As you count '2, 4, 6, 8, 10,' rise a little taller with each number until you are stretched all the way up like the top of a growth line. Then float slowly back down and repeat 3 times.",
      scienceTieIn:
        "Moving your body in a rising pattern gets your blood flowing and oxygen to your brain — a quick reset that helps you focus on the next points to plot.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of something in your life that changes over time — your reading, a plant, coins in a jar. If you graphed it, would the line climb a lot, jump up fast, or stay flat? Describe the shape.",
      badge: { id: "g5-spring-growth-line-plotter", name: "Growth Line Plotter", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
