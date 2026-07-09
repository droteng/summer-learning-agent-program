// Grade 7 Science — Spring Expedition, Week 5 (Measuring Change), Day 3.
// Grade-7 counterpart of springG6ScienceW5D3 (measurement & data collection),
// pitched one level up: from averaging repeated readings to SUMMARIZING a
// dataset with mean, median, and range, and reasoning about variability and
// outliers when inferring real change.

export const springG7ScienceW5D3 = {
  id: "g7.spring.sci.w5.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Science",
  topic: "Summarizing measurement data: mean, median, range, and outliers",
  topicTag: "measurement-data",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-5", "CCSS.7.SP.B.4"],
  hook: "Last year you averaged a few careful readings. This year you have a whole spring of measurements from many plants, and one number won't tell the whole story. Scientists summarize a dataset with the mean, the median, and the range — and they watch for outliers that could fool the average. Today you turn a messy pile of measurements into trustworthy conclusions about change.",
  miniLesson: [
    "The MEAN (average) is the sum of all values divided by how many there are. The MEDIAN is the middle value when the data is put in order (or the average of the two middle values). Both describe the 'center' of the data, but they can disagree.",
    "The RANGE = largest value − smallest value. It measures how spread out (variable) the data is. A big range means the measurements vary a lot; a small range means they cluster tightly, which usually makes your conclusion about change more reliable.",
    "An OUTLIER is a value far from the rest — maybe a mismeasured plant or a truly unusual one. Outliers pull the MEAN toward them but barely move the MEDIAN, so when there's an outlier the median often better represents the typical value. Always ask whether a surprising average is really an outlier in disguise."
  ],
  workedExample: {
    prompt: "Five seedlings measured on Day 10 are: 9, 11, 10, 12, and 8 cm. Find the mean, the median, and the range.",
    steps: [
      "Mean: sum = 9 + 11 + 10 + 12 + 8 = 50; 50 ÷ 5 = 10 cm.",
      "Median: order them → 8, 9, 10, 11, 12; the middle value is 10 cm.",
      "Range: largest − smallest = 12 − 8 = 4 cm.",
      "Here mean = median = 10 cm and the range is small (4 cm), so the data is tight and the center is trustworthy."
    ],
    answer: "Mean = 10 cm, median = 10 cm, range = 4 cm."
  },
  items: [
    {
      id: "g7.spring.sci.w5.d3.q1",
      type: "numeric",
      stem: "Six sprouts measured 6, 8, 7, 9, 8, and 10 cm. What is the MEAN height, in centimeters?",
      answer: 8,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Mean = sum of all values ÷ how many values.",
        "Sum = 6 + 8 + 7 + 9 + 8 + 10 = 48.",
        "48 ÷ 6 = 8 cm."
      ],
      explanation: "Sum = 48 over 6 values; mean = 48 ÷ 6 = 8 cm."
    },
    {
      id: "g7.spring.sci.w5.d3.q2",
      type: "numeric",
      stem: "Five plant heights in cm are 4, 7, 9, 12, and 13. What is the MEDIAN height, in centimeters?",
      answer: 9,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "The median is the middle value once the data is in order.",
        "Ordered: 4, 7, 9, 12, 13 — there are 5 values.",
        "The 3rd (middle) value is 9 cm."
      ],
      explanation: "With 5 ordered values (4, 7, 9, 12, 13), the median is the 3rd value: 9 cm."
    },
    {
      id: "g7.spring.sci.w5.d3.q3",
      type: "numeric",
      stem: "A dataset of leaf lengths runs from a shortest of 5.2 cm to a longest of 14.7 cm. What is the RANGE, in centimeters?",
      answer: 9.5,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Range = largest value − smallest value.",
        "Largest = 14.7 cm, smallest = 5.2 cm.",
        "14.7 − 5.2 = 9.5 cm."
      ],
      explanation: "Range = 14.7 − 5.2 = 9.5 cm."
    },
    {
      id: "g7.spring.sci.w5.d3.q4",
      type: "multiple_choice",
      stem: "Five plants measure 10, 11, 10, 12, and 47 cm. One reading was a mismeasurement. Which statement is TRUE about the mean versus the median here?",
      choices: [
        "The median (11 cm) better represents a typical plant, because the 47 cm outlier pulls the mean way up",
        "The mean (18 cm) is a better 'typical' value than the median",
        "The mean and median are equal",
        "The outlier has no effect on either measure"
      ],
      answerIndex: 0,
      explanation: "Mean = (10+11+10+12+47) ÷ 5 = 90 ÷ 5 = 18 cm, dragged up by the 47 cm outlier. Ordered (10, 10, 11, 12, 47), the median is 11 cm, which better matches the typical plant. Outliers move the mean much more than the median.",
      hintLadder: [
        "Compute the mean, then the median of the ordered list.",
        "Notice how far 47 is from the other values.",
        "Which measure barely moved when the outlier was included?"
      ],
      misconceptionsTargeted: ["mean-always-typical"]
    },
    {
      id: "g7.spring.sci.w5.d3.q5",
      type: "short_answer",
      stem: "Group A's plant heights have a small range (all near 10 cm); Group B's have a large range (from 2 cm to 25 cm). Both groups have the same mean of 10 cm. Explain why the range matters when you're deciding how much to trust the conclusion 'these plants are about 10 cm tall.'",
      rubric: {
        level3: "Explains that a small range means the values cluster tightly around the mean so '~10 cm' describes the group well, while a large range means the plants vary a lot so the mean hides big differences and the conclusion is less reliable — same mean, very different spread.",
        level2: "Says the range shows spread and Group A is more consistent, but the link to trusting the conclusion is thin.",
        level1: "No clear connection between range/spread and how well the mean represents the group."
      },
      exemplar: "Both groups average 10 cm, but the mean alone hides how spread out they are. Group A's small range means every plant is close to 10 cm, so 'about 10 cm tall' describes them accurately. Group B's huge range (2 cm to 25 cm) means some plants are tiny and some are huge, so 10 cm is just a middle point that doesn't describe any typical plant well. The bigger the range, the less the mean alone can be trusted.",
      hintLadder: [
        "What does a small range tell you about how close the values are to the mean?",
        "Can two groups have the same mean but look totally different?",
        "Connect the spread to how well '~10 cm' describes each group."
      ]
    }
  ],
  reflectionPrompt: "If you tracked your daily study minutes for two weeks, would your data have a small range (steady) or a large range (some huge days, some zero days)? Would the mean or the median describe your typical day better?",
  misconceptionBank: [
    {
      id: "mean-always-typical",
      label: "Thinks the mean is always the 'typical' value",
      description: "Trusts the average even when a single extreme outlier has dragged it far from where most of the data actually sits.",
      coachMove: "Scan for an outlier first. If one value is far from the rest, report the median too — it resists outliers and often better represents the typical measurement."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Average That Lies",
      prompt:
        "Four plants are 9, 10, 11, and 10 cm tall, and a fifth is measured at 50 cm. Someone reports 'the average plant is 18 cm.' That number is technically correct — so why would calling 18 cm the 'typical' plant height be misleading?",
      answer:
        "The 50 cm reading is an outlier (probably a mismeasurement or a freak plant) and it yanks the mean up to 18 cm, even though four of the five plants are around 10 cm. The MEDIAN is 10 cm, which describes the typical plant far better. One extreme value can make an average lie about what's normal.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Summarize a Real Dataset",
      challenge:
        "Collect or invent a dataset of at least 8 measurements (plant heights, leaf lengths, seed counts) and produce a one-page 'data summary' reporting the mean, median, range, and any outlier — with a sentence on which center you'd trust.",
      materials: ["A ruler and plants, or an invented list of 8+ numbers", "Paper or a device"],
      steps: [
        "Record at least 8 measurements in a neat table (include one value that might be an outlier).",
        "Compute the mean (sum ÷ count) and the median (middle of the ordered list).",
        "Compute the range (largest − smallest) and circle any outlier.",
        "Write 2–3 sentences: which measure best represents the 'typical' value here, and why."
      ],
      deliverable: "A data summary showing mean, median, range, a marked outlier, and a justified choice of best 'center.'",
      choiceBoard: [
        "Present it as a labeled table with the three statistics computed below it.",
        "Draw a simple dot plot and mark the mean, median, and outlier on it.",
        "Record a 45-second 'data report' explaining your statistics and your trusted center."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Statistics Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w5.d3.arena1",
          type: "numeric",
          stem: "Six seedlings measure 12, 15, 14, 13, 15, and 11 cm. What is the MEAN, in centimeters?",
          answer: 13.3,
          tolerance: 0.1,
          unit: "cm",
          hintLadder: [
            "Add all six values.",
            "12 + 15 + 14 + 13 + 15 + 11 = 80.",
            "80 ÷ 6 ≈ 13.3 cm."
          ],
          explanation: "Sum = 80 over 6 values; mean = 80 ÷ 6 ≈ 13.3 cm."
        },
        {
          id: "g7.spring.sci.w5.d3.arena2",
          type: "short_answer",
          stem: "A student's six height readings are 14, 15, 14, 16, 15, and 2 cm. Explain what the 2 cm value probably is, what it does to the mean versus the median, and what the student should do about it.",
          rubric: {
            level3: "Identifies 2 cm as a likely outlier/mismeasurement, explains it drags the mean down while the median stays near 15 cm, and recommends checking/re-measuring or using the median (and noting the error).",
            level2: "Spots the outlier and one effect (on mean OR median) with a reasonable next step, but reasoning is partial.",
            level1: "Doesn't identify the outlier or its differing effect on mean vs. median."
          },
          exemplar: "The 2 cm reading is almost certainly an outlier — probably a mismeasurement, since the other five are all 14–16 cm. Including it drags the mean down to about 12.7 cm, well below the typical plant, but the median stays around 15 cm because the middle values are unaffected. The student should re-measure that plant to check the reading; if it really was an error, drop or fix it, and meanwhile report the median, which better represents the group.",
          hintLadder: [
            "Which value looks nothing like the others?",
            "Does that value pull the mean or the median more?",
            "What's the responsible next step for a suspicious reading?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Center and Spread",
      prompt:
        "Stand tall as your 'mean.' Breathe in for 4 counts and sway gently side to side — that's your data's spread (range). Breathe out for 4 counts and return to center. Notice how a calm, small sway (small range) feels steadier than a wild one. Repeat 4 slow breaths.",
      scienceTieIn:
        "Slow, even breathing narrows the 'range' of your heart rate and steadies your focus — the same way tightly clustered data gives a steadier, more trustworthy conclusion.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Mean, median, and range each tell a different part of a data story. Where in real life have you seen an 'average' that hid something important — a class average, a game score, a temperature? What would the median or range have revealed?",
      badge: { id: "g7-spring-data-summarizer", name: "Data Summarizer", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
