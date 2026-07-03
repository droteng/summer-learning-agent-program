// Grade 7 World/Current Affairs — Summer Program, Week 2 (Numbers in the Real
// World), Day 5. Topic: statistical literacy in the news — interpreting data
// and spotting misleading graphs and samples. Project: mini data dashboard.

export const summerG7WorldW2D5 = {
  id: "g7.summer.world.w2.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Statistical literacy in the news",
  topicTag: "data-in-the-news",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.10", "CCSS.RI.7.8"],
  hook: "Every day the news throws numbers at you: '50% more!', a scary-looking graph, a poll that 'proves' something. Some are honest; some are designed to mislead. Today you become the person who checks the data before believing the headline — the finishing skill for your dashboard week.",
  miniLesson: [
    "A statistic needs context: '50% more' of WHAT, compared to WHEN, out of how many? A percentage with no base number can hide a tiny or huge real change.",
    "Graphs can mislead even with true data. A common trick is a y-axis that doesn't start at zero, which makes a small difference look enormous. Always read the axis and the scale.",
    "A sample must represent the whole group. If a poll only asks people at a skateboard park, it can't speak for 'all teens.' A biased sample makes even careful math give a misleading conclusion."
  ],
  workedExample: {
    prompt: "A headline says 'Brand X is 50% more popular!' Its bar chart shows Brand X's bar towering over Brand Y. What questions expose whether this is misleading?",
    steps: [
      "Ask '50% more than what?' — you need the base numbers, not just the percent.",
      "Check the y-axis: does it start at zero, or is it cut off to exaggerate the gap?",
      "Ask who was sampled — were the people asked representative of everyone?",
      "If the axis is truncated or the sample is biased, the true difference may be tiny even though the chart looks dramatic."
    ],
    answer: "It may be misleading — check the base numbers, whether the y-axis starts at zero, and whether the sample fairly represents everyone."
  },
  items: [
    {
      id: "g7.summer.world.w2.d5.q1",
      type: "multiple_choice",
      stem: "A bar graph's y-axis starts at 90 instead of 0, so a bar of 92 looks tiny next to a bar of 98. Why is this misleading?",
      choices: [
        "Bar graphs can never show percentages.",
        "Cutting off the bottom of the axis exaggerates a small difference, making it look huge.",
        "The colors of the bars are wrong.",
        "Graphs should never use a y-axis at all."
      ],
      answerIndex: 1,
      explanation: "Starting the y-axis at 90 instead of 0 stretches a 6-point gap so it looks like a massive difference, even though 92 and 98 are close.",
      hintLadder: [
        "Look at where the y-axis begins.",
        "If it doesn't start at zero, small gaps get exaggerated.",
        "A cut-off axis makes 92 vs. 98 look bigger than it is."
      ],
      misconceptionsTargeted: ["axis-always-honest"]
    },
    {
      id: "g7.summer.world.w2.d5.q2",
      type: "multiple_choice",
      stem: "A website claims '9 out of 10 users prefer our app!' but only surveyed 10 of its own paying members. What is the main problem?",
      choices: [
        "The math (9/10 = 90%) is wrong.",
        "The sample is biased and too small to represent all users.",
        "Percentages can't come from surveys.",
        "There is no problem — 90% is a fact."
      ],
      answerIndex: 1,
      explanation: "Asking only 10 of your own paying members isn't a fair, representative sample of all users, so the 90% can't be generalized — the sample is biased and tiny.",
      hintLadder: [
        "Who exactly was asked, and how many?",
        "Do 10 loyal paying members represent ALL users?",
        "A small, self-selected sample can't speak for everyone."
      ]
    },
    {
      id: "g7.summer.world.w2.d5.q3",
      type: "numeric",
      stem: "A headline shouts 'Crime up 100%!' The town went from 3 incidents last year to 6 this year. What is the actual INCREASE in the number of incidents?",
      answer: 3,
      tolerance: 0,
      unit: "incidents",
      hintLadder: [
        "The percent sounds big, but find the raw change in count.",
        "New minus old: 6 − 3.",
        "6 − 3 = 3 incidents — a 100% rise, but only 3 more."
      ],
      explanation: "6 − 3 = 3 incidents. '100%' is technically true but the real change is just 3 — context matters.",
      misconceptionsTargeted: ["percent-without-base"]
    },
    {
      id: "g7.summer.world.w2.d5.q4",
      type: "short_answer",
      stem: "A social media post shares a graph titled 'Ice cream sales cause shark attacks' because both rise in the same months. Explain why this graph could mislead people, using the idea that two things rising together doesn't prove one causes the other.",
      rubric: {
        level3: "Explains that both rise in summer because of a THIRD factor (hot weather → more swimmers AND more ice cream), so correlation is not causation, and the graph misleads by implying a direct cause.",
        level2: "Says one doesn't cause the other but doesn't identify the hidden common cause (season/weather).",
        level1: "Accepts the causal claim or gives no reasoning."
      },
      exemplar: "Both ice cream sales and shark attacks go up in summer, but that's because hot weather causes BOTH — more people buy ice cream AND more people swim in the ocean. The graph misleads by implying ice cream causes shark attacks, when a third factor (the season) explains both. Two things rising together isn't proof that one causes the other.",
      hintLadder: [
        "When do both of these things go up — what season?",
        "What ELSE happens in that season that affects both?",
        "Explain the hidden common cause instead of a direct link."
      ]
    },
    {
      id: "g7.summer.world.w2.d5.q5",
      type: "short_answer",
      stem: "You see a news chart in real life or online this week. List TWO questions you would ask to decide whether its statistic is trustworthy, and say why each question matters.",
      rubric: {
        level3: "Gives two solid checking questions (e.g., 'Does the y-axis start at zero?', 'Who was in the sample and how many?', 'Percent of what base?') AND explains why each protects against being misled.",
        level2: "Gives two questions but the reasoning for one is weak or missing.",
        level1: "Vague, gives only one question, or no reasoning."
      },
      exemplar: "1) 'Does the y-axis start at zero?' — because a cut-off axis can exaggerate a tiny difference. 2) 'Who was surveyed and how many?' — because a small or biased sample can't represent everyone, so the statistic may not generalize.",
      hintLadder: [
        "Think about the graph's scale — one question there.",
        "Think about where the data came from — one question there.",
        "For each, say what problem the question helps you catch."
      ]
    }
  ],
  reflectionPrompt: "Next time a headline uses a big number or percent to grab you, what is the FIRST question you'll ask before believing it?",
  misconceptionBank: [
    {
      id: "axis-always-honest",
      label: "Assumes a graph's true data can't mislead",
      description: "Believes that if the numbers on a chart are accurate, the chart must give an honest impression — ignoring how the scale or axis is drawn.",
      coachMove: "Show the same data with a zero-based axis vs. a cut-off axis. The numbers are identical but the story looks completely different — the design, not just the data, shapes the message."
    },
    {
      id: "percent-without-base",
      label: "Reacts to a percent without asking the base",
      description: "Treats a big percentage as a big deal without checking the actual raw numbers behind it.",
      coachMove: "Always ask 'percent of what?' — pair every percentage with the raw count to see whether the real change is large or tiny."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Headline Would You Trust?",
      prompt:
        "Two headlines about the same study: (A) 'Sales EXPLODE 100%!' (B) 'Sales rose from 4 to 8 items last month.' Which one gives you the real information you need — and what is (A) hiding by using only a percent?",
      answer:
        "(B) is more trustworthy — it gives the actual counts (4 → 8). (A) hides the base numbers: '100%' sounds huge, but it's only 4 more items. Same data, very different impression.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Make an Honest vs. Misleading Chart",
      challenge:
        "Take one small set of true data (e.g., pretend weekly app sign-ups: 92, 94, 95, 98). Draw the SAME data two ways: an honest chart with the y-axis starting at 0, and a misleading chart with a cut-off axis that exaggerates the change. Then label the trick.",
      steps: [
        "Choose 4 true data values that are close together.",
        "Draw Chart 1 with the y-axis starting at 0 (the honest version).",
        "Draw Chart 2 with the y-axis starting near the lowest value (the misleading version).",
        "Label what the cut-off axis does and write which chart you'd trust in the news."
      ],
      deliverable: "Two charts of the SAME data — one honest (zero-based axis), one misleading (cut-off axis) — with the trick clearly labeled.",
      choiceBoard: [
        "Draw both charts side by side and annotate the misleading trick.",
        "Write two mock news captions for the same data — one fair, one hype — and explain the difference.",
        "Make a 'spot the trick' checklist others can use to catch misleading graphs."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.world.w2.d5.arena1",
          type: "multiple_choice",
          stem: "A poll on a gaming website finds '95% of people play video games daily.' Why can't this be used to claim '95% of ALL teens game daily'?",
          choices: [
            "95% is not a real percentage.",
            "The sample only includes people already visiting a gaming site, so it's biased and not representative of all teens.",
            "Polls are never allowed to use percentages.",
            "The website should have asked 100 people to make it 100%."
          ],
          answerIndex: 1,
          explanation: "People on a gaming website are far more likely to game than average, so the sample is biased and can't represent all teens — the conclusion doesn't generalize.",
          hintLadder: [
            "Who visits a gaming website in the first place?",
            "Are those people typical of ALL teens?",
            "A sample drawn from gamers can't fairly speak for everyone."
          ]
        },
        {
          id: "g7.summer.world.w2.d5.arena2",
          type: "short_answer",
          stem: "An ad claims 'Our tutoring TRIPLES test scores!' but shows no numbers, no sample size, and no starting scores. List TWO pieces of information you'd demand before believing it, and why each matters.",
          rubric: {
            level3: "Demands two of: the actual before/after scores (base numbers), the sample size / who was tested, or whether a fair comparison group was used — AND explains why each guards against a misleading claim.",
            level2: "Names two pieces of info but the reasoning for one is weak or missing.",
            level1: "Vague, names only one, or gives no reasoning."
          },
          exemplar: "1) The actual before and after scores — 'triples' means nothing without the starting number (tripling a 10 to 30 is very different from tripling 30 to 90). 2) How many students were tested and who they were — a claim from 3 hand-picked students isn't reliable. Both stop a percent-only, biased-sample claim from fooling me.",
          hintLadder: [
            "'Triples' — triples from WHAT starting number?",
            "How many students, and were they a fair sample?",
            "Say why each missing piece could hide the truth."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Reset the Hype",
      prompt:
        "Stand up and shake out the 'headline pressure': shake your hands for 10 seconds, roll your shoulders back 5 times, then take one slow breath and say 'Show me the data.'",
      scienceTieIn:
        "A quick burst of movement clears built-up tension and resets your attention, helping you evaluate claims calmly instead of reacting to a flashy headline.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You finished a whole week of 'Numbers in the Real World.' Write about one number or graph in the news you now see differently — and the question you'd ask before trusting it.",
      badge: { id: "g7-data-detective", name: "Data Detective", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
