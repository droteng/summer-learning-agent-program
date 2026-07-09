// Grade 6 Math — Winter Expedition, Week 5 (Data in the Cold), Day 1.
// Topic: reading and interpreting weather graphs (bar & line graphs of
// temperature and snowfall).

export const winterG6MathW5D1 = {
  id: "g6.winter.math.w5.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Math",
  topic: "Reading and interpreting winter weather graphs",
  topicTag: "graph-interpretation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.SP.B.4", "CCSS.6.SP.B.5"],
  hook: "A frozen week produces a mountain of numbers — daily highs, lows, and centimeters of snow. Graphs turn that pile into a picture you can read at a glance. Today you become a winter data reader: pulling facts, spotting trends, and comparing days straight off bar and line graphs.",
  miniLesson: [
    "A BAR graph compares separate categories — like snowfall on Monday vs. Tuesday. Taller bar = bigger amount; read its height off the y-axis (the vertical scale).",
    "A LINE graph shows how ONE thing changes over time — like temperature across a week. A rising line means the value is going up; a falling line means it's dropping.",
    "Always check the axis labels and the scale first. If each gridline is worth 5 cm (not 1), a bar reaching the third line means 15 cm, not 3."
  ],
  workedExample: {
    prompt: "A line graph of daily high temperatures reads: Mon -2°C, Tue 1°C, Wed 3°C, Thu 0°C, Fri -5°C. On which day was it warmest, and by how much did the temperature FALL from Wednesday to Friday?",
    steps: [
      "Find the highest point on the line: Wednesday at 3°C is the warmest.",
      "Read Wednesday's value: 3°C. Read Friday's value: -5°C.",
      "The drop is the distance between them: 3 − (−5) = 3 + 5 = 8.",
      "So it fell 8°C from Wednesday to Friday, and Wednesday was warmest."
    ],
    answer: "Warmest on Wednesday (3°C); the temperature fell 8°C from Wednesday to Friday."
  },
  items: [
    {
      id: "g6.winter.math.w5.d1.q1",
      type: "multiple_choice",
      stem: "You want to show how the temperature CHANGED hour by hour through one snowy afternoon. Which graph is the best choice?",
      choices: [
        "A line graph, because it shows change over time",
        "A bar graph of unrelated cities",
        "A pie chart of favorite seasons",
        "A single number"
      ],
      answerIndex: 0,
      explanation: "A line graph is built to show how one value changes over time, so hour-by-hour temperature fits it perfectly.",
      hintLadder: [
        "The key word is 'changed... hour by hour' — that means over time.",
        "Which graph type connects points to show a trend over time?",
        "A line graph shows change over time."
      ]
    },
    {
      id: "g6.winter.math.w5.d1.q2",
      type: "numeric",
      stem: "A snowfall bar graph uses a scale where each gridline is worth 5 cm. Tuesday's bar reaches the 4th gridline. How many centimeters of snow fell on Tuesday?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Each gridline is worth 5 cm, not 1 cm.",
        "The bar reaches the 4th line, so multiply 4 by the scale.",
        "4 × 5 = 20 cm."
      ],
      explanation: "With a scale of 5 cm per gridline, the 4th line means 4 × 5 = 20 cm.",
      misconceptionsTargeted: ["ignore-the-scale"]
    },
    {
      id: "g6.winter.math.w5.d1.q3",
      type: "numeric",
      stem: "A line graph of daily highs shows Mon 2°C and Thu -4°C. How many degrees did the high temperature DROP from Monday to Thursday?",
      answer: 6,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "The drop is the gap between the two values.",
        "Subtract the lower value from the higher: 2 − (−4).",
        "2 − (−4) = 2 + 4 = 6°C."
      ],
      explanation: "From 2°C down to −4°C is a drop of 2 − (−4) = 6°C."
    },
    {
      id: "g6.winter.math.w5.d1.q4",
      type: "numeric",
      stem: "A snowfall bar graph shows: Mon 8 cm, Tue 12 cm, Wed 0 cm, Thu 10 cm. What is the TOTAL snowfall for these four days?",
      answer: 30,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add every bar's height together.",
        "8 + 12 + 0 + 10.",
        "8 + 12 = 20, plus 10 = 30 cm total."
      ],
      explanation: "Total = 8 + 12 + 0 + 10 = 30 cm."
    },
    {
      id: "g6.winter.math.w5.d1.q5",
      type: "short_answer",
      stem: "A line graph shows the temperature rising from 6 a.m. to noon, then falling from noon to 6 p.m. Describe what the SHAPE of the line tells you about the day, and name the warmest time.",
      rubric: {
        level3: "States the line rises then falls (an up-then-down / peak shape), correctly identifies noon as the warmest time (the peak), AND connects the shape to the temperature trend.",
        level2: "Identifies the warmest time OR describes the shape, but not both clearly.",
        level1: "Misreads the trend or gives no reasoning."
      },
      exemplar: "The line goes up from 6 a.m. to noon, so it was warming up in the morning; then it goes down from noon to 6 p.m., so it cooled in the afternoon. The highest point is at noon, so noon was the warmest time.",
      hintLadder: [
        "A rising line means the value is going up; a falling line means down.",
        "Where is the highest point on the line?",
        "The peak of the line is the warmest moment."
      ]
    }
  ],
  reflectionPrompt: "Think of a graph you've seen on a weather app or the news. Was it a bar graph or a line graph — and what was the one fact it made easiest to see?",
  misconceptionBank: [
    {
      id: "ignore-the-scale",
      label: "Reads bar height as raw units, ignoring the scale",
      description: "Assumes each gridline is worth 1, so a bar at the 4th line is read as '4' even when each line is worth 5.",
      coachMove: "Point to the y-axis first: 'How much is ONE gridline worth here?' Then multiply the number of lines by that value."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "What's the Graph Hiding?",
      prompt:
        "A weather report shows a snowfall bar graph, but the y-axis label is torn off. One bar is twice as tall as another. Can you say for sure that twice as much snow fell? What is the ONE thing you must know first?",
      answer:
        "You can say one bar is twice as TALL, but not twice the snow until you know the scale (what each gridline is worth) and that the axis starts at zero. A cut-off or stretched axis can make a small difference look huge. Always read the scale first!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build Your Own Winter Weather Graph",
      challenge:
        "Invent (or look up) five days of winter weather — daily high temperatures AND daily snowfall. Turn one into a LINE graph and the other into a BAR graph, each with a clear title, labeled axes, and a stated scale.",
      steps: [
        "Write a small table: 5 days with a high temperature and a snowfall amount for each.",
        "Draw a LINE graph of the temperatures — plot each point and connect them.",
        "Draw a BAR graph of the snowfall — one bar per day, heights matching your table.",
        "Label both axes, add a title, and write what each gridline is worth (the scale)."
      ],
      deliverable: "Two labeled graphs (one line, one bar) built from your own 5-day winter dataset, each with a title, axis labels, and a stated scale.",
      choiceBoard: [
        "Draw both graphs on paper or in a drawing app.",
        "Build them in a spreadsheet and let it plot the charts.",
        "Make a 'weather report' poster where each graph has a one-sentence headline of its main trend."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Graph Reader Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w5.d1.arena1",
          type: "numeric",
          stem: "A snowfall bar graph has a scale of 5 cm per gridline. Wednesday's bar reaches line 3 and Thursday's bar reaches line 6. How many MORE centimeters of snow fell on Thursday than Wednesday?",
          answer: 15,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Convert each bar using the scale: lines × 5 cm.",
            "Wednesday = 3 × 5 = 15 cm; Thursday = 6 × 5 = 30 cm.",
            "Find the difference: 30 − 15 = 15 cm."
          ],
          explanation: "Wednesday = 3 × 5 = 15 cm, Thursday = 6 × 5 = 30 cm, so Thursday had 30 − 15 = 15 cm more."
        },
        {
          id: "g6.winter.math.w5.d1.arena2",
          type: "multiple_choice",
          stem: "A line graph shows the temperature at -1°C, then 2°C, then 2°C, then -3°C on four days. Which describes the trend?",
          choices: [
            "It stays exactly the same every day",
            "It only rises the whole time",
            "It only falls the whole time",
            "It rises, stays flat, then falls"
          ],
          answerIndex: 3,
          explanation: "From −1 to 2 it rises, from 2 to 2 it stays flat, and from 2 to −3 it falls — a rise, then a flat stretch, then a drop.",
          hintLadder: [
            "Compare each value to the one before it.",
            "−1 to 2 is up; 2 to 2 is unchanged; 2 to −3 is down.",
            "So: rises, flat, then falls."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Graph the Air",
      prompt:
        "Stand up and 'draw' a line graph with your arm: sweep it slowly UP as the temperature 'rises' for 4 counts, hold it FLAT for 4 counts, then sweep it DOWN for 4 counts. Repeat the up-flat-down trace 3 times, breathing slowly.",
      scienceTieIn:
        "Tracing shapes with big arm movements links motion to memory — moving your body while picturing the trend helps the 'rise and fall' of a line graph stick in your mind.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which is easier for YOU to read at a glance — a bar graph or a line graph — and for what kind of winter data would you pick each one?",
      badge: { id: "winter-graph-reader", name: "Winter Graph Reader", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
