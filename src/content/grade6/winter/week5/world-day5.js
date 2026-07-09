// Grade 6 World/Current Affairs — Winter Expedition, Week 5 (Data in the Cold),
// Day 5. Topic: reading data in the news — interpreting winter-weather
// statistics and spotting misleading graphs.

export const winterG6WorldW5D5 = {
  id: "g6.winter.world.w5.d5",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Reading data in the news — winter statistics and misleading graphs",
  topicTag: "data-literacy-media",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D3.1.6-8", "CCSS.RI.6.7"],
  hook: "The news is full of winter numbers: 'Snowfall UP 300%!', 'Coldest week EVER!', splashy charts and record-breaking claims. Some are solid; some are designed to mislead. Today you become a data detective — reading the fine print, checking the axis, and deciding what the numbers really say.",
  miniLesson: [
    "A graph can mislead even with true data. The classic trick is a y-axis that does NOT start at zero, which stretches tiny differences into dramatic-looking cliffs.",
    "Watch for missing context: '300% more snow than last year' means little if last year barely snowed. Always ask 'compared to what?' and 'over how long?'",
    "Good data reading asks: What's the source? What's the scale and does the axis start at zero? Is this one event (weather) or a long trend (climate)? Are they comparing fairly?"
  ],
  workedExample: {
    prompt: "A headline reads 'Snowfall SKYROCKETS!' above a bar chart where this year's bar looks twice as tall as last year's. The y-axis starts at 40 cm and goes to 50 cm. Last year = 42 cm, this year = 46 cm. Is the increase really huge?",
    steps: [
      "Read the actual numbers: 42 cm last year, 46 cm this year.",
      "The real increase is 46 − 42 = 4 cm — a small change.",
      "The bars look doubled only because the axis starts at 40, not 0, which stretches a 4 cm gap.",
      "If the axis started at 0, both bars would look nearly the same height."
    ],
    answer: "No — the real increase is only 4 cm. The chart exaggerates it by starting the y-axis at 40 instead of 0."
  },
  items: [
    {
      id: "g6.winter.world.w5.d5.q1",
      type: "multiple_choice",
      stem: "A winter snowfall bar chart makes a tiny difference look dramatic. What is the most common trick behind this?",
      choices: [
        "The bars are different colors",
        "It shows two years of data",
        "The chart has a title",
        "The y-axis doesn't start at zero"
      ],
      answerIndex: 3,
      explanation: "Starting the y-axis above zero cuts off the shared 'base' of the bars, stretching small differences into big-looking gaps.",
      hintLadder: [
        "Look at where the vertical axis begins.",
        "What if it starts at 40 instead of 0?",
        "A non-zero axis exaggerates small differences."
      ],
      misconceptionsTargeted: ["taller-bar-means-huge-difference"]
    },
    {
      id: "g6.winter.world.w5.d5.q2",
      type: "multiple_choice",
      stem: "A headline shouts 'Snowfall up 200% this year!' What question should a careful reader ask FIRST?",
      choices: [
        "What font is the headline in?",
        "Is snow cold?",
        "Compared to what — how much snow fell last year, and is that a normal baseline?",
        "How many people read the headline?"
      ],
      answerIndex: 2,
      explanation: "A percentage means nothing without its baseline: 200% more than a nearly snowless year could still be a small amount of snow.",
      hintLadder: [
        "A percent change is always 'compared to' something.",
        "What if last year had almost no snow?",
        "Ask what the baseline (last year's amount) actually was."
      ]
    },
    {
      id: "g6.winter.world.w5.d5.q3",
      type: "numeric",
      stem: "A news chart's y-axis starts at 40 cm. It shows last year at 42 cm and this year at 46 cm. What is the ACTUAL increase in centimeters?",
      answer: 4,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Ignore how tall the bars LOOK — use the real numbers.",
        "Subtract last year from this year: 46 − 42.",
        "46 − 42 = 4 cm."
      ],
      explanation: "The real change is 46 − 42 = 4 cm, even though the cut-off axis makes it look much bigger."
    },
    {
      id: "g6.winter.world.w5.d5.q4",
      type: "short_answer",
      stem: "A local news graph shows one very snowy winter and declares 'Winters are clearly getting snowier!' Explain why one year of data is not enough to support that claim, and what you'd want to see instead.",
      rubric: {
        level3: "Explains that one snowy winter is a single event/outlier that can't show a trend, AND states you'd want many years of data (a long-term average or trend line) to support a claim about winters 'getting snowier.'",
        level2: "Notes one year isn't enough but is vague about what better evidence would look like.",
        level1: "No clear reasoning or accepts the claim uncritically."
      },
      exemplar: "One snowy winter could just be an unusual year. A single data point can't show a trend. To claim winters are getting snowier, I'd want to see snowfall totals over many years — 20 or 30 — and check whether the long-term average is actually rising, not just one big year.",
      hintLadder: [
        "Can a single year prove a long-term trend?",
        "What kind of data shows a real trend?",
        "Describe wanting many years, not one."
      ]
    },
    {
      id: "g6.winter.world.w5.d5.q5",
      type: "short_answer",
      stem: "You're a young reporter writing about winter weather. List two things you'd check before trusting a graph you found online, and explain why each matters.",
      rubric: {
        level3: "Names two solid checks (e.g., does the y-axis start at zero? what's the source? what's the time span? is it a fair comparison?) AND explains why each protects the reader from being misled.",
        level2: "Names two checks but the 'why it matters' is thin for one of them.",
        level1: "Names only one check or gives no reasoning."
      },
      exemplar: "First, I'd check whether the y-axis starts at zero, because a cut-off axis can make a tiny change look enormous. Second, I'd check the source and time span, because data from an unreliable source or from just one year can't be trusted to show the real picture.",
      hintLadder: [
        "Think about the axis, the source, and the time span.",
        "Pick two of those to check.",
        "For each, say how it protects you from being misled."
      ]
    }
  ],
  reflectionPrompt: "Next time you see a dramatic weather headline or chart, what is the FIRST question you'll ask yourself before believing it?",
  misconceptionBank: [
    {
      id: "taller-bar-means-huge-difference",
      label: "Trusts bar height without checking the axis",
      description: "Assumes a bar that looks twice as tall means twice the amount, ignoring where the y-axis starts.",
      coachMove: "Redraw the chart in your head with the axis starting at zero: 'If both bars sat on 0, would they still look so different?'"
    },
    {
      id: "percent-without-baseline",
      label: "Believes a big percent means a big amount",
      description: "Takes '300% more' as huge without asking what the original (baseline) amount was.",
      coachMove: "Ask 'percent of WHAT?' — 300% more than 1 cm is only 4 cm total. Always find the baseline number."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Headline Do You Trust?",
      prompt:
        "Two winter headlines about the same city: (A) 'SNOWMAGEDDON: Snowfall EXPLODES 300%!' (B) 'City records 8 cm of snow, up from 2 cm last year.' Which one gives you the real numbers, and which one is built to alarm you?",
      answer:
        "(B) gives the real numbers (2 cm to 8 cm) so you can judge for yourself. (A) is technically the same change — 2 cm to 8 cm IS a 300% jump — but 'EXPLODES 300%' hides that it's only 6 cm of extra snow. Same facts, very different framing!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Misleading Chart (Then Fix It)",
      challenge:
        "Using honest winter data (real or invented), make TWO versions of the same bar chart: one MISLEADING (y-axis not starting at zero, dramatic headline) and one HONEST (y-axis at zero, fair headline). Label the trick you used in the misleading one.",
      steps: [
        "Pick two numbers that are close, like 42 cm and 46 cm of snow.",
        "Draw the MISLEADING chart: start the y-axis high (e.g., at 40) and add a scary headline.",
        "Draw the HONEST chart: start the y-axis at 0 and use a fair, factual headline.",
        "Write one sentence naming the trick and how the honest version fixes it."
      ],
      deliverable: "Two charts of the same data — one misleading, one honest — with a note naming the misleading trick and how the fair version corrects it.",
      choiceBoard: [
        "Draw both charts on paper or in a drawing app.",
        "Build both in a spreadsheet by changing the axis minimum.",
        "Make a 'spot the trick' slide that reveals the misleading chart, then the honest one."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.world.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A headline says 'Cold days DOUBLED this winter!' The city went from 3 cold days last winter to 6 this winter. Which statement is the FAIREST reading?",
          choices: [
            "'Doubled' is true but it's only 3 extra cold days, so the alarming tone oversells a small change",
            "The city now has a huge number of cold days",
            "The headline must be false",
            "You can't tell anything from the numbers"
          ],
          answerIndex: 0,
          explanation: "Going from 3 to 6 really is doubling, but it's only 3 more cold days — the word 'DOUBLED' makes a small absolute change sound dramatic.",
          hintLadder: [
            "How many EXTRA cold days is that, in plain numbers?",
            "6 − 3 = 3 more days.",
            "'Doubled' is accurate but the small real change is being oversold."
          ]
        },
        {
          id: "g6.winter.world.w5.d5.arena2",
          type: "short_answer",
          stem: "A viral post shows a line graph of one week's temperatures plunging steeply and captions it 'PROOF the planet is cooling.' Give TWO reasons a data detective would push back on this claim.",
          rubric: {
            level3: "Gives two solid reasons, such as: (1) one week is weather, not a climate trend; (2) the steep look may come from a cut-off/zoomed y-axis; and/or (3) a climate claim needs many years of data — with brief explanation.",
            level2: "Gives one strong reason plus a weak or partial second one.",
            level1: "Gives no valid reason or accepts the claim."
          },
          exemplar: "First, one week is just weather, not climate — you can't judge the whole planet's long-term trend from seven days. Second, a steep-looking drop can come from a zoomed-in or cut-off y-axis that exaggerates a small change. A real cooling claim would need decades of global data, not one week's line.",
          hintLadder: [
            "Is one week weather or climate?",
            "Could the axis be making the drop look steeper than it is?",
            "What kind of data would a real climate claim need?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Reset the Baseline",
      prompt:
        "Stand tall and 'reset to zero': plant your feet flat on the floor (your baseline), roll your shoulders back 5 times, then take one slow breath and say 'Start at zero.' Feel yourself grounded on a fair, honest baseline.",
      scienceTieIn:
        "Grounding your feet and slowing your breath lowers stress and sharpens focus — just like resetting a graph's axis to zero gives you a clear, honest starting point for what the data really shows.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write about a time a headline or chart made something sound bigger or scarier than it really was. Now that you're a data detective, what would you check first?",
      badge: { id: "winter-data-detective", name: "Winter Data Detective", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
