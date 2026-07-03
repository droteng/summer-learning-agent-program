// Grade 7 Math — Summer Program, Week 6 (World Affairs for Kids), Day 4.
// Topic: data inference — interpreting statistics, samples, and percentages
// reported in the news. Project: a kid-friendly explainer about a world issue.

export const summerG7MathW6D4 = {
  id: "g7.summer.math.w6.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 4,
  subject: "Math",
  topic: "Data inference — statistics, samples & percentages in the news",
  topicTag: "data-inference",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.A.1", "CCSS.7.SP.A.2"],
  hook: "World-issue stories are packed with numbers: '62% of people said…', 'a survey of 500…', 'crime is up 20%'. To explain those fairly, you have to read the math behind them — where the sample came from, what a percentage really means, and when a number is fishy. Today you become a data detective.",
  miniLesson: [
    "A statistic is usually based on a SAMPLE — a smaller group used to estimate what a whole population thinks or does. A good sample is representative (it looks like the population) and large enough; a biased sample (like only surveying one group) can't be trusted to speak for everyone.",
    "A percentage tells you a part out of 100. To find a percent of an amount, multiply: 25% of 240 = 0.25 × 240 = 60. Always ask 'percent OF what?' — the same percent means different real numbers depending on the total.",
    "Watch for misleading claims: a big percentage of a tiny sample can be shaky, and a 'percent increase' hides the starting number. A rise 'from 2 cases to 4 cases' is a 100% increase but only 2 more cases — the percentage sounds scarier than the count."
  ],
  workedExample: {
    prompt: "A news story reports: 'In a survey of 800 students, 60% said they want more recycling bins.' How many students is that, and why does the sample matter?",
    steps: [
      "Find 60% of 800: 0.60 × 800 = 480 students said yes.",
      "Check the sample: 800 students is a decent size, but WHO were they? If they came from only one eco-club, the sample is biased.",
      "A representative sample would include students from across the whole school, not just one group.",
      "So the number is 480, but its trustworthiness depends on the sample being representative of all students."
    ],
    answer: "480 students said yes (0.60 × 800). The statistic is only trustworthy if those 800 fairly represent the whole population."
  },
  items: [
    {
      id: "g7.summer.math.w6.d4.q1",
      type: "numeric",
      stem: "A news survey of 400 people found that 35% support a new park. How many people is that?",
      answer: 140,
      tolerance: 0,
      unit: "people",
      hintLadder: [
        "'Percent of' means multiply: turn 35% into 0.35.",
        "Multiply 0.35 × 400.",
        "0.35 × 400 = 140 people."
      ],
      explanation: "35% of 400 = 0.35 × 400 = 140 people."
    },
    {
      id: "g7.summer.math.w6.d4.q2",
      type: "numeric",
      stem: "A city reports the number of community gardens rose from 20 to 25 in one year. What is the PERCENT increase?",
      answer: 25,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent increase = (increase ÷ original) × 100.",
        "The increase is 25 − 20 = 5, and the original is 20.",
        "(5 ÷ 20) × 100 = 25%."
      ],
      explanation: "Increase = 5; percent increase = (5 ÷ 20) × 100 = 25%."
    },
    {
      id: "g7.summer.math.w6.d4.q3",
      type: "numeric",
      stem: "A headline shouts 'Reports DOUBLE!' The real numbers went from 3 cases to 6 cases. How many MORE cases is that (the actual count increase)?",
      answer: 3,
      tolerance: 0,
      unit: "cases",
      hintLadder: [
        "'Double' is a percent idea; the question asks for the actual COUNT.",
        "Subtract the original from the new number: 6 − 3.",
        "6 − 3 = 3 more cases."
      ],
      explanation: "Doubling from 3 to 6 is a 100% increase, but the actual rise is only 6 − 3 = 3 cases — the percentage sounds bigger than the count.",
      misconceptionsTargeted: ["percent-hides-count"]
    },
    {
      id: "g7.summer.math.w6.d4.q4",
      type: "multiple_choice",
      stem: "A website polled its own visitors and reported '90% of people love our product.' Why should you be cautious about this statistic for a fair explainer?",
      choices: [
        "90% is too small a number to matter",
        "The sample is biased — people who visit that site already like the product, so they don't represent everyone",
        "Percentages can never be trusted at all",
        "You can't do math on percentages over 50%"
      ],
      answerIndex: 1,
      explanation: "The sample (the site's own visitors) is not representative of the whole population, so the 90% can't be generalized to everyone.",
      hintLadder: [
        "Ask: WHO was in the sample?",
        "Are the site's own fans a fair stand-in for everyone?",
        "A sample of only fans is biased."
      ]
    },
    {
      id: "g7.summer.math.w6.d4.q5",
      type: "short_answer",
      stem: "A news story says: 'A survey found 80% of teens support the plan!' In small print, it notes the survey asked only 10 teens. Explain TWO reasons this statistic might mislead readers, using ideas about sample size and how percentages can hide small counts.",
      rubric: {
        level3: "Explains (1) the sample of 10 is far too small to represent all teens, AND (2) 80% of 10 is just 8 teens, so the impressive percentage hides a tiny actual count.",
        level2: "Explains one of the two reasons clearly (small/biased sample OR percentage hides small count) but not both.",
        level1: "Vague, or misses both the sample-size and hidden-count issues."
      },
      exemplar: "First, only 10 teens is way too small a sample to speak for all teens, so it isn't representative. Second, 80% of 10 is only 8 teens — the big-sounding percentage actually stands for just 8 people, which the headline hides.",
      hintLadder: [
        "How many teens is 80% of 10?",
        "Is 10 teens enough to represent everyone?",
        "Give both the sample-size reason AND the hidden-count reason."
      ]
    }
  ],
  reflectionPrompt: "Find one statistic in a news story or ad. What was the sample, and does the percentage tell the whole story — or hide the actual count?",
  misconceptionBank: [
    {
      id: "percent-hides-count",
      label: "Reads a percentage without checking the actual count",
      description: "Reacts to a big percent change ('doubled!', '200% more!') without noticing the starting number may be tiny, so the real increase is small.",
      coachMove: "Always convert the percentage back to real numbers: 'A percent OF what?' A 100% jump from 2 to 4 is only 2 more — compare the count, not just the percent."
    },
    {
      id: "sample-equals-everyone",
      label: "Assumes any sample speaks for the whole population",
      description: "Treats a small or biased sample as if it represents everyone, ignoring who was actually surveyed.",
      coachMove: "Ask 'Who was in the sample, and are they representative?' A sample must look like the population and be big enough before its stats can be generalized."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Stat Would You Trust?",
      prompt:
        "Would you rather rely on (A) '75% of people agree!' based on a survey of 8 friends of the writer, or (B) '60% agree' based on a survey of 1,000 people chosen from all across the country? Do the counts — how many people is each? — then pick the more trustworthy stat.",
      answer: "(A) 75% of 8 = 6 people. (B) 60% of 1,000 = 600 people, chosen to represent the whole country. (B) is far more trustworthy: a large, representative sample beats a bigger-sounding percentage from 8 friends.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Stat-Check a News Number",
      challenge:
        "Design a 'stat-check card' for one statistic you'll use in your explainer. Break the number down: what's the sample, what's the percentage in real counts, and is it trustworthy?",
      steps: [
        "Write down one real or invented news statistic about your world issue (include a percent and a sample size).",
        "Convert the percentage into an actual count (percent × total).",
        "Judge the sample: is it big enough and representative? Note any bias.",
        "Write a one-line verdict: 'Trustworthy / Use with caution / Misleading' and why."
      ],
      deliverable: "A stat-check card showing a statistic, its percentage converted to a real count, a sample judgment, and a verdict.",
      choiceBoard: [
        "Design the stat-check card as a labeled infographic.",
        "Make a 'misleading vs. fair' side-by-side poster of two versions of the same stat.",
        "Record a 30-second 'data reporter' clip explaining what the number really means."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w6.d4.arena1",
          type: "numeric",
          stem: "A survey of 250 people reports that 44% recycle weekly. How many of the surveyed people recycle weekly?",
          answer: 110,
          tolerance: 0,
          unit: "people",
          hintLadder: [
            "'Percent of' means multiply: 44% = 0.44.",
            "Multiply 0.44 × 250.",
            "0.44 × 250 = 110 people."
          ],
          explanation: "44% of 250 = 0.44 × 250 = 110 people."
        },
        {
          id: "g7.summer.math.w6.d4.arena2",
          type: "short_answer",
          stem: "Two headlines describe the SAME change in local water shortages: 'Shortages up 100%!' and 'Shortage reports rose from 4 to 8.' Explain why both are technically correct, and which gives a reader a clearer, fairer picture — and why.",
          rubric: {
            level3: "Shows both are correct (4 to 8 is +4, which is a 100% increase), AND argues the raw-count version (4 to 8) is clearer/fairer because the percentage alone makes a small change of 4 sound dramatic.",
            level2: "Confirms both are correct but the reasoning about which is fairer is thin.",
            level1: "Claims one is simply wrong, or gives no reasoning about the count vs. percent."
          },
          exemplar: "Both are correct: going from 4 to 8 is 4 more, and 4 ÷ 4 = 100%, so it truly doubled. But '4 to 8' is fairer because '100%' makes a change of just 4 reports sound alarming. Showing the actual counts lets the reader judge how big the change really is.",
          hintLadder: [
            "Check the math: is 4 to 8 really a 100% increase?",
            "Does '100%' tell you the actual number of new reports?",
            "Which version stops a small change from sounding huge?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Percent Pump",
      prompt:
        "Do a 'percentage' workout: 100% = 10 arm pumps, 50% = 5, 25% = about 2–3. Call out a percent, then do that share of 10 pumps. Repeat three rounds, then shake out and breathe slowly.",
      scienceTieIn: "Turning percentages into a set number of reps makes the math physical — and the burst of movement sends oxygen-rich blood to your brain to sharpen focus for the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Find one statistic from a news story, ad, or post today. What was the sample, and does the percentage tell the whole story — or hide the actual count? Write down what you'd double-check.",
      badge: { id: "g7-stat-inspector", name: "Stat Inspector", emoji: "🕵️‍♀️" },
      estimatedMinutes: 7
    }
  }
};
