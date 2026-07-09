// Grade 7 Math — Summer Program, Week 8 (Capstone Week), Day 3.
// Topic: data synthesis & inference — turn results into graphs and honest
// summary statistics, then make a defensible claim. Celebratory capstone.

export const summerG7MathW8D3 = {
  id: "g7.summer.math.w8.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Math",
  topic: "Data synthesis & inference — graphs, honest statistics, defensible claims",
  topicTag: "data-inference",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.B.4", "CCSS.7.SP.A.2"],
  hook: "Your capstone probably produced data. Raw numbers persuade no one — but an honest graph and a fair summary statistic can. Today you turn results into evidence and make a claim you can actually defend when a judge pushes back.",
  miniLesson: [
    "The MEAN (average) and the MEDIAN (middle value) summarize a data set differently. When a few extreme values (outliers) skew the data, the median is often the more HONEST summary because the mean gets dragged toward the outlier.",
    "The RANGE (max − min) and spread tell you how consistent your data is. A high mean with a huge range is far less trustworthy than the same mean with tight spread — always report spread, not just the center.",
    "A DEFENSIBLE claim states what the data shows AND its limits: sample size, how it was collected, and what it does NOT prove. 'In my sample of 20, the median wait dropped from 8 to 5 minutes' is defensible; 'everyone waits less now' is not."
  ],
  workedExample: {
    prompt: "Data: {4, 5, 6, 6, 29}. Find the mean and the median, then say which is the more honest summary and why.",
    steps: [
      "Mean = (4 + 5 + 6 + 6 + 29) ÷ 5 = 50 ÷ 5 = 10.",
      "Median = middle of the sorted list {4, 5, 6, 6, 29} = 6.",
      "The 29 is an outlier that pulls the mean up to 10, above four of the five values.",
      "The median (6) better represents a typical value here, so it's the more honest summary."
    ],
    answer: "Mean = 10, median = 6; the median (6) is more honest because the outlier 29 inflates the mean."
  },
  items: [
    {
      id: "g7.summer.math.w8.d3.q1",
      type: "numeric",
      stem: "Find the MEAN of this data set: {7, 9, 10, 14}.",
      answer: 10,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Add all four values first.",
        "7 + 9 + 10 + 14 = 40.",
        "Divide the sum by 4: 40 ÷ 4 = 10."
      ],
      explanation: "Sum = 40; 40 ÷ 4 = 10."
    },
    {
      id: "g7.summer.math.w8.d3.q2",
      type: "numeric",
      stem: "Find the MEDIAN of this data set: {3, 8, 12, 15, 22}.",
      answer: 12,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "The data is already sorted from low to high.",
        "The median is the middle value of the 5 numbers.",
        "The 3rd of 5 values is 12."
      ],
      explanation: "With 5 sorted values, the middle (3rd) value is 12."
    },
    {
      id: "g7.summer.math.w8.d3.q3",
      type: "multiple_choice",
      stem: "A survey of household incomes has one billionaire in it. Which is the more HONEST summary of a 'typical' income, and why?",
      choices: [
        "The mean, because it uses every value.",
        "The median, because the billionaire is an outlier that drags the mean far above what most people actually earn.",
        "The range, because it's the biggest number.",
        "It doesn't matter — mean and median are always equal."
      ],
      answerIndex: 1,
      explanation: "A single huge outlier inflates the mean but barely moves the median, so the median better represents a typical value.",
      hintLadder: [
        "Which summary gets pulled toward one extreme value?",
        "The billionaire drags the mean upward.",
        "The median resists outliers, so it's more honest here."
      ],
      misconceptionsTargeted: ["mean-always-typical"]
    },
    {
      id: "g7.summer.math.w8.d3.q4",
      type: "multiple_choice",
      stem: "You measured plant growth for only 4 days on 3 plants. Which claim is DEFENSIBLE from that data?",
      choices: [
        "This fertilizer makes all plants grow faster forever.",
        "Fertilizer is proven to be the best product on the market.",
        "In my small 4-day sample of 3 plants, the fertilized plants grew more, but I'd need more plants and time to be sure.",
        "No plant will ever grow without this fertilizer."
      ],
      answerIndex: 2,
      explanation: "A defensible claim states what the limited data shows AND names its limits (small sample, short time) instead of overreaching.",
      hintLadder: [
        "Which claim matches the SIZE of the data collected?",
        "A tiny, short study can't prove 'always' or 'forever.'",
        "The honest claim names its own limits."
      ]
    },
    {
      id: "g7.summer.math.w8.d3.q5",
      type: "short_answer",
      stem: "Data set: {2, 4, 4, 6, 34}. Compute the mean and the median, then make ONE defensible claim about a 'typical' value and justify your choice of statistic.",
      rubric: {
        level3: "Correctly finds mean = 10 AND median = 4, then argues the median is the fairer 'typical' value because 34 is an outlier that inflates the mean.",
        level2: "Gets both statistics but the justification is weak, OR reasoning is sound but one statistic is miscalculated.",
        level1: "Miscomputes both statistics or makes an unsupported claim."
      },
      exemplar: "Mean = (2+4+4+6+34) ÷ 5 = 50 ÷ 5 = 10. Median = 4 (middle of the sorted set). A typical value is closer to 4 than to 10 because the outlier 34 drags the mean up, so I'd report the median as the honest 'typical' value.",
      hintLadder: [
        "Add all five values, then divide by 5 for the mean.",
        "Sort the set and take the middle value for the median.",
        "Notice 34 is an outlier — which statistic does it distort?"
      ]
    }
  ],
  reflectionPrompt: "Think about the data behind your capstone. Is your headline number a mean or a median — and is that the most honest choice? Could an outlier be hiding in it?",
  misconceptionBank: [
    {
      id: "mean-always-typical",
      label: "Treats the mean as always the 'typical' value",
      description: "Reports the mean without checking whether an outlier has dragged it away from most of the data.",
      coachMove: "Have them scan for an extreme value, then compare mean vs. median — if the two differ a lot, an outlier is skewing the mean."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Mean vs. Median Showdown",
      prompt:
        "Five friends report their video game scores: 10, 12, 12, 14, and 200. Would you rather brag about the group's MEAN score or its MEDIAN score to sound impressive — and which is more HONEST? Compute both before you choose.",
      answer:
        "Mean = (10+12+12+14+200) ÷ 5 = 248 ÷ 5 = 49.6. Median = 12 (the middle value). The mean sounds more impressive, but the median (12) is more honest — one score of 200 inflates the mean far above what most friends scored.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Data Poster",
      challenge:
        "Take a real data set from your capstone (or collect 8–10 quick data points) and build a one-page data poster: a clear graph, both the mean and median, the range, and ONE defensible claim with its limits stated.",
      steps: [
        "Gather or choose 8–10 data points from your project.",
        "Draw a fitting graph (bar, dot plot, or line) with labeled axes.",
        "Compute the mean, the median, and the range, and write them clearly.",
        "Write ONE defensible claim — what the data shows AND what it does not prove."
      ],
      deliverable: "A one-page data poster: labeled graph, mean, median, range, and one defensible claim with its limits.",
      choiceBoard: [
        "Draw or build the full data poster with graph and statistics.",
        "Record a 45-second 'data briefing' explaining your claim and its limits out loud.",
        "Make a 'misleading vs. honest' pair of graphs of the same data and explain the difference."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w8.d3.arena1",
          type: "numeric",
          stem: "A café's wait times (minutes) over six visits were {3, 5, 5, 7, 8, 20}. What is the MEDIAN wait time? (For an even count of 6, average the two middle values.)",
          answer: 6,
          tolerance: 0,
          unit: "minutes",
          hintLadder: [
            "The data is already sorted; with 6 values the median is between the 3rd and 4th.",
            "The 3rd value is 5 and the 4th value is 7.",
            "Median = (5 + 7) ÷ 2 = 6."
          ],
          explanation: "Sorted, the two middle values are 5 and 7; their average is (5 + 7) ÷ 2 = 6 minutes."
        },
        {
          id: "g7.summer.math.w8.d3.arena2",
          type: "short_answer",
          stem: "Using the same café data {3, 5, 5, 7, 8, 20}: the mean is about 8 minutes but the median is 6. Which should the café advertise as its 'typical' wait, and what defensible claim would you make?",
          rubric: {
            level3: "Argues the median (6) is the honest 'typical' wait because the 20-minute outlier inflates the mean, AND states a defensible, limit-aware claim.",
            level2: "Chooses the median with weak reasoning, OR gives a claim but doesn't tie it to the outlier.",
            level1: "Picks the mean without addressing the outlier, or makes an overreaching claim."
          },
          exemplar: "I'd report the median of 6 minutes as the typical wait, because the single 20-minute visit is an outlier that pulls the mean up to 8. A defensible claim: 'In these six visits, half the waits were 6 minutes or less, though one busy visit hit 20.'",
          hintLadder: [
            "Which value is the outlier, and which statistic does it distort?",
            "The median resists that outlier — is it fairer here?",
            "State a claim that admits the one long wait."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Balance the Data",
      prompt:
        "Stand on one foot and picture the mean as a seesaw balancing point. Sway gently to feel your 'center of balance,' then switch feet — like the median holding steady even when one big value tips the seesaw. Balance 20 seconds per side.",
      scienceTieIn: "Balancing recruits tiny stabilizer muscles and sharpens focus — a physical version of finding the 'center' of a data set that you just practiced with numbers.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You turned raw numbers into honest evidence today. What's one place — an ad, a headline, a game stat — where you now suspect a mean might be hiding an outlier?",
      badge: { id: "g7-data-synthesist", name: "Data Synthesist", emoji: "📊" },
      estimatedMinutes: 7
    }
  }
};
