// Grade 7 Math — Spring Expedition, Week 8 (Spring Showcase), Day 3.
// Topic: data synthesis — this Grade 7 version pitches ONE LEVEL UP from
// Grade 6: beyond mean/median/range to measures of SPREAD (IQR, mean absolute
// deviation), comparing distributions, and drawing honest INFERENCES from
// data for the capstone.

export const springG7MathW8D3 = {
  id: "g7.spring.math.w8.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis — spread, inference, and honest statistics",
  topicTag: "data-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.B.4", "CCSS.7.SP.B.3"],
  hook: "You've measured your spring growth all season — now turn those numbers into an honest story that not only summarizes the center but shows the SPREAD and supports a real inference. Data variability is the proof, and the honesty, inside your capstone.",
  miniLesson: [
    "SPREAD matters as much as center. Two data sets can share the same mean but tell different stories — one tightly clustered, one wildly scattered. Reporting only the average hides that. The RANGE, the INTERQUARTILE RANGE (IQR = Q3 − Q1, the spread of the middle half), and the MEAN ABSOLUTE DEVIATION (MAD, the average distance from the mean) each reveal variability.",
    "MEAN ABSOLUTE DEVIATION (MAD): find the mean, then average how far each value sits from it. A small MAD means consistent data; a large MAD means high variability. IQR does the same job while resisting outliers, since it ignores the extreme quarters.",
    "HONEST INFERENCE: use a sample to reason about the whole, but only carefully. Report the center AND the spread, note outliers, and don't over-claim — 'my 7 plants suggest morning light helped, but the spread means I'm not certain' is honest; 'this PROVES it for all plants' is not."
  ],
  workedExample: {
    prompt: "Two plants' weekly heights: Plant A = 5, 6, 5, 6, 8; Plant B = 1, 4, 6, 8, 11. Both have mean 6. Which is more consistent, and how do you show it?",
    steps: [
      "Confirm the means: A = (5+6+5+6+8)/5 = 30/5 = 6; B = (1+4+6+8+11)/5 = 30/5 = 6. Same center.",
      "Find each deviation from the mean for A: 1, 0, 1, 0, 2 → MAD = 4/5 = 0.8.",
      "Find each deviation from the mean for B: 5, 2, 0, 2, 5 → MAD = 14/5 = 2.8.",
      "A's MAD (0.8) is much smaller than B's (2.8), so Plant A grew far more consistently even though the averages match."
    ],
    answer: "Same mean (6), but Plant A is more consistent: MAD = 0.8 vs. Plant B's MAD = 2.8."
  },
  items: [
    {
      id: "g7.spring.math.w8.d3.q1",
      type: "numeric",
      stem: "Your seedling's heights over 6 days were 4, 8, 6, 12, 5, 7 cm. What is the MEAN height?",
      answer: 7,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Add all six values first.",
        "4 + 8 + 6 + 12 + 5 + 7 = 42.",
        "Divide by 6: 42 ÷ 6 = 7."
      ],
      explanation: "Sum is 4 + 8 + 6 + 12 + 5 + 7 = 42, and 42 ÷ 6 = 7 cm."
    },
    {
      id: "g7.spring.math.w8.d3.q2",
      type: "numeric",
      stem: "You recorded these petal counts: 12, 7, 9, 15, 6, 10, 8. When sorted, what is the MEDIAN?",
      answer: 9,
      tolerance: 0,
      unit: "petals",
      hintLadder: [
        "First sort the seven numbers from least to greatest.",
        "Sorted: 6, 7, 8, 9, 10, 12, 15.",
        "The middle of 7 values is the 4th one: 9."
      ],
      explanation: "Sorted: 6, 7, 8, 9, 10, 12, 15. With 7 values the middle (4th) value is 9."
    },
    {
      id: "g7.spring.math.w8.d3.q3",
      type: "multiple_choice",
      stem: "Two garden beds both average 10 sprouts per day. Bed X's daily counts are 9, 10, 11, 10, 10; Bed Y's are 2, 18, 5, 15, 10. What does comparing their SPREAD tell you?",
      choices: [
        "They are identical because the means match.",
        "Bed X is far more consistent (small spread); Bed Y is highly variable (large spread), so the same average hides very different day-to-day behavior.",
        "Bed Y is better because it has the biggest single day.",
        "Spread tells you nothing once you know the mean."
      ],
      answerIndex: 1,
      explanation: "Equal means can mask very different distributions. Bed X's values hug the mean (low MAD/IQR); Bed Y's swing widely (high spread), so honest reporting must include the spread, not just the average.",
      hintLadder: [
        "The averages are equal, so look at how the values SCATTER.",
        "Which bed's numbers stay close to 10, and which jump around?",
        "Bed X is consistent; Bed Y is highly variable despite the same mean."
      ],
      misconceptionsTargeted: ["center-tells-whole-story"]
    },
    {
      id: "g7.spring.math.w8.d3.q4",
      type: "numeric",
      stem: "Sorted spring rainfall totals (mm) were 3, 5, 6, 8, 9, 11, 14, 20. What is the INTERQUARTILE RANGE (IQR = Q3 − Q1)?",
      answer: 7,
      tolerance: 0,
      unit: "mm",
      hintLadder: [
        "With 8 values, split into a lower half (3, 5, 6, 8) and an upper half (9, 11, 14, 20).",
        "Q1 = median of the lower half = (5 + 6) ÷ 2 = 5.5; Q3 = median of the upper half = (11 + 14) ÷ 2 = 12.5.",
        "IQR = Q3 − Q1 = 12.5 − 5.5 = 7."
      ],
      explanation: "Lower half 3,5,6,8 gives Q1 = (5+6)/2 = 5.5; upper half 9,11,14,20 gives Q3 = (11+14)/2 = 12.5; IQR = 12.5 − 5.5 = 7 mm."
    },
    {
      id: "g7.spring.math.w8.d3.q5",
      type: "short_answer",
      stem: "You have your spring growth data and want your capstone to make an HONEST inference. Name the center statistic AND the spread statistic you'd report, and explain what claim your data does — and does NOT — support.",
      rubric: {
        level3: "Names a sensible center (mean or median, justified) AND a spread statistic (range, IQR, or MAD), and states a careful inference that acknowledges variability/limits (avoids over-claiming).",
        level2: "Names a center and a spread statistic but the inference is over-claimed or the reasoning is thin.",
        level1: "Reports only a center, or makes an unsupported sweeping claim."
      },
      exemplar: "I'd report the median height (an outlier day skews the mean) and the IQR to show how spread out my daily growth was. My data suggests the plants near the window grew a bit more, but the wide IQR means I can't claim this proves window light works for all plants — only that it's a promising pattern in my sample.",
      hintLadder: [
        "Pick a center stat AND a spread stat that fit your data.",
        "State what your sample HINTS at.",
        "Then state what it can't prove — honest inference names its limits."
      ]
    }
  ],
  reflectionPrompt: "Look at your own spring data. Beyond the average, how spread out is it — and how will you show that spread so your audience trusts your inference instead of feeling misled?",
  misconceptionBank: [
    {
      id: "center-tells-whole-story",
      label: "Thinks the center summarizes everything",
      description: "Reports only the mean or median and assumes it captures the data, ignoring that spread can make identical averages tell opposite stories.",
      coachMove: "Compute a spread statistic (range, IQR, or MAD) alongside the center. Show two data sets with equal means but different spreads to make the point concrete."
    },
    {
      id: "sample-proves-everything",
      label: "Over-claims from a small sample",
      description: "Treats a small, variable sample as proof for a whole population, saying 'this proves it' instead of 'this suggests it.'",
      coachMove: "Ask: 'How many did you measure, and how much did they vary?' A small, spread-out sample supports a careful 'suggests,' not a sweeping 'proves.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Same Average, Different Story",
      prompt:
        "Two flowerpots both average 6 sprouts a day. Pot A's counts are 6, 6, 6, 6, 6; Pot B's are 1, 2, 6, 10, 11. Same mean — but if you reported ONLY the average, what important truth would you hide? Guess before you check.",
      answer:
        "You'd hide the SPREAD. Pot A is perfectly steady while Pot B swings wildly from 1 to 11, yet both average 6. The mean alone makes them look identical — only reporting the spread (range, IQR, or MAD) tells the honest, different stories.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Spread & Inference Poster",
      challenge:
        "Take your real spring numbers (or the sample set 4, 5, 5, 6, 7, 7, 20) and build a poster that shows BOTH center and spread: graph the data, compute a center statistic and a spread statistic, and write a caption stating one honest inference AND its limits.",
      steps: [
        "Write out your data in a table and sort it.",
        "Choose and draw the right graph (line for over-time; box plot or dot plot to show spread).",
        "Compute a center (mean or median) AND a spread statistic (range, IQR, or MAD).",
        "Write a caption: one careful inference your data supports and one claim it does NOT."
      ],
      deliverable: "A data poster with a graph, a center statistic, a spread statistic, and a caption stating an honest inference plus its limits.",
      choiceBoard: [
        "Draw a box plot marking Q1, median, Q3, and the IQR.",
        "Make a 'two-headlines' page: one over-claiming, one honest, from the same data.",
        "Build side-by-side dot plots of two groups and compare their spreads."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w8.d3.arena1",
          type: "numeric",
          stem: "A plant's weekly heights were 4, 6, 8, 10, 12 cm. What is the MEAN ABSOLUTE DEVIATION (MAD)? (Find the mean, then average how far each value is from it.)",
          answer: 2.4,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "First find the mean: (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8.",
            "Find each distance from 8: |4−8|=4, |6−8|=2, |8−8|=0, |10−8|=2, |12−8|=4.",
            "Average the distances: (4 + 2 + 0 + 2 + 4) ÷ 5 = 12 ÷ 5 = 2.4."
          ],
          explanation: "Mean = 8. Deviations are 4, 2, 0, 2, 4, summing to 12; MAD = 12 ÷ 5 = 2.4 cm."
        },
        {
          id: "g7.spring.math.w8.d3.arena2",
          type: "numeric",
          stem: "Sprouting times (days) were 5, 6, 5, 6, 38 — one seed was a huge outlier. Which single statistic best reports a TYPICAL sprouting time, and what is its value? (Report the value.)",
          answer: 6,
          tolerance: 0,
          unit: "days",
          hintLadder: [
            "One value (38) is a wild outlier that would drag the mean up.",
            "The median resists outliers — sort the data first.",
            "Sorted: 5, 5, 6, 6, 38; the middle (3rd) value is 6."
          ],
          explanation: "The mean is (5+6+5+6+38)/5 = 60/5 = 12, badly inflated by the outlier. The median resists it: sorted 5, 5, 6, 6, 38 gives a middle value of 6 days — the honest typical time."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Graph Your Spread",
      prompt:
        "Turn your arms into a data display: hold them tight and close together for 'low spread,' then fling them wide apart for 'high spread,' four times. Then trace a box plot in the air — mark Q1, the median, and Q3 with your hands — twice, breathing steadily.",
      scienceTieIn: "Reaching wide and narrow engages your core and shoulders and sends blood flowing to your brain — the same focus boost that helps you read spread in a graph accurately.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Data can mislead by hiding its spread. What's one time this year you learned that HOW you show numbers changes the story people believe — and how will that make your capstone more honest?",
      badge: { id: "g7-spring-data-analyst", name: "Data Analyst", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
