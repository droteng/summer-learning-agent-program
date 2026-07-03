// Grade 5 World/Current Affairs — Winter Expedition, Week 5 (Data in the Cold),
// Day 5. Topic: reading data in the news — interpreting winter-weather
// statistics and spotting misleading graphs. Pitched DOWN from Grade 6:
// shorter passages, simpler numbers, no percent-change arithmetic required.

export const winterG5WorldW5D5 = {
  id: "g5.winter.world.w5.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Reading data in the news — winter statistics and misleading graphs",
  topicTag: "data-literacy-media",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D3.1.3-5", "CCSS.RI.5.7"],
  hook: "The news is full of winter numbers: 'Snowfall WAY up!', 'Coldest week EVER!', big splashy charts and record claims. Some are solid; some are made to trick you. Today you become a data detective — reading the fine print, checking the scale, and deciding what the numbers really say.",
  miniLesson: [
    "A graph can trick you even with true numbers. The classic trick is a side scale that does NOT start at zero, which stretches tiny differences into dramatic-looking cliffs.",
    "Watch for missing information: 'a lot more snow than last year' means little if last year barely snowed. Always ask 'compared to what?' and 'over how long?'",
    "Good data reading asks: Where did this come from (the source)? Does the scale start at zero? Is this one day (weather) or a long pattern (climate)? Are they comparing fairly?"
  ],
  workedExample: {
    prompt: "A headline reads 'Snowfall JUMPS!' above a bar chart where this year's bar looks twice as tall as last year's. The side scale starts at 40 cm and goes to 50 cm. Last year = 42 cm, this year = 46 cm. Is the increase really huge?",
    steps: [
      "Read the actual numbers: 42 cm last year, 46 cm this year.",
      "The real increase is 46 − 42 = 4 cm — a small change.",
      "The bars look doubled only because the scale starts at 40, not 0, which stretches a 4 cm gap.",
      "If the scale started at 0, both bars would look nearly the same height."
    ],
    answer: "No — the real increase is only 4 cm. The chart makes it look huge by starting the side scale at 40 instead of 0."
  },
  items: [
    {
      id: "g5.winter.world.w5.d5.q1",
      type: "multiple_choice",
      stem: "A winter snowfall bar chart makes a tiny difference look dramatic. What is the most common trick behind this?",
      choices: [
        "The bars are different colors",
        "The side scale does not start at zero",
        "The chart has a title",
        "It shows two years of data"
      ],
      answerIndex: 1,
      explanation: "Starting the side scale above zero cuts off the shared 'base' of the bars, stretching small differences into big-looking gaps.",
      hintLadder: [
        "Look at where the up-and-down scale begins.",
        "What if it starts at 40 instead of 0?",
        "A scale that does not start at zero exaggerates small differences."
      ],
      misconceptionsTargeted: ["taller-bar-means-huge-difference"]
    },
    {
      id: "g5.winter.world.w5.d5.q2",
      type: "multiple_choice",
      stem: "A headline shouts 'Snowfall way up this year!' What question should a careful reader ask FIRST?",
      choices: [
        "What font is the headline in?",
        "Compared to what — how much snow fell last year?",
        "Is snow cold?",
        "How many people read the headline?"
      ],
      answerIndex: 1,
      explanation: "'Way up' means nothing without the other number: up compared to what? You need last year's amount to judge the change.",
      hintLadder: [
        "'Up' is always compared to something.",
        "What if last year had almost no snow?",
        "Ask what last year's amount actually was."
      ]
    },
    {
      id: "g5.winter.world.w5.d5.q3",
      type: "numeric",
      stem: "A news chart's side scale starts at 40 cm. It shows last year at 42 cm and this year at 46 cm. What is the ACTUAL increase in centimeters?",
      answer: 4,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Ignore how tall the bars LOOK — use the real numbers.",
        "Subtract last year from this year: 46 − 42.",
        "46 − 42 = 4 cm."
      ],
      explanation: "The real change is 46 − 42 = 4 cm, even though the cut-off scale makes it look much bigger."
    },
    {
      id: "g5.winter.world.w5.d5.q4",
      type: "short_answer",
      stem: "A local news graph shows one very snowy winter and says 'Winters are clearly getting snowier!' Explain why one year of data is not enough to support that, and what you would want to see instead.",
      rubric: {
        level3: "Explains that one snowy winter is a single event that cannot show a pattern, AND states you would want many years of data to support a claim about winters 'getting snowier.'",
        level2: "Notes one year is not enough but is vague about what better evidence would look like.",
        level1: "No clear reasoning or accepts the claim without question."
      },
      exemplar: "One snowy winter could just be an unusual year. A single year cannot show a pattern. To say winters are getting snowier, I would want to see snowfall totals over many years and check whether they are really going up, not just one big year.",
      hintLadder: [
        "Can a single year prove a long-term pattern?",
        "What kind of data shows a real pattern?",
        "Describe wanting many years, not one."
      ]
    },
    {
      id: "g5.winter.world.w5.d5.q5",
      type: "short_answer",
      stem: "You are a young reporter writing about winter weather. List two things you would check before trusting a graph you found online, and explain why each matters.",
      rubric: {
        level3: "Names two solid checks (e.g., does the side scale start at zero? where is it from? how many years does it cover? is it a fair comparison?) AND explains why each protects the reader from being tricked.",
        level2: "Names two checks but the 'why it matters' is thin for one of them.",
        level1: "Names only one check or gives no reasoning."
      },
      exemplar: "First, I would check whether the side scale starts at zero, because a cut-off scale can make a tiny change look enormous. Second, I would check where the data came from and how many years it covers, because data from an unknown source or from just one year cannot be trusted to show the real picture.",
      hintLadder: [
        "Think about the scale, the source, and how many years it covers.",
        "Pick two of those to check.",
        "For each, say how it protects you from being tricked."
      ]
    }
  ],
  reflectionPrompt: "Next time you see a dramatic weather headline or chart, what is the FIRST question you will ask yourself before believing it?",
  misconceptionBank: [
    {
      id: "taller-bar-means-huge-difference",
      label: "Trusts bar height without checking the scale",
      description: "Assumes a bar that looks twice as tall means twice the amount, ignoring where the side scale starts.",
      coachMove: "Redraw the chart in your head with the scale starting at zero: 'If both bars sat on 0, would they still look so different?'"
    },
    {
      id: "one-year-is-a-trend",
      label: "Treats one year as proof of a pattern",
      description: "Believes a single snowy or mild winter is enough to prove winters are changing.",
      coachMove: "Ask 'how many years of data?' One year is a single point; a real pattern needs many years to see."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Headline Do You Trust?",
      prompt:
        "Two winter headlines about the same city: (A) 'SNOWMAGEDDON: Snowfall EXPLODES!' (B) 'City records 8 cm of snow, up from 6 cm last year.' Which one gives you the real numbers, and which one is built to alarm you?",
      answer:
        "(B) gives the real numbers (6 cm to 8 cm) so you can judge for yourself. (A) describes the same small change — only 2 cm more snow — but 'EXPLODES' hides how small it really is. Same facts, very different framing!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Misleading Chart (Then Fix It)",
      challenge:
        "Using honest winter data (real or invented), make TWO versions of the same bar chart: one MISLEADING (side scale not starting at zero, dramatic headline) and one HONEST (side scale at zero, fair headline). Label the trick you used in the misleading one.",
      steps: [
        "Pick two numbers that are close, like 42 cm and 46 cm of snow.",
        "Draw the MISLEADING chart: start the side scale high (like at 40) and add a scary headline.",
        "Draw the HONEST chart: start the side scale at 0 and use a fair, factual headline.",
        "Write one sentence naming the trick and how the honest version fixes it."
      ],
      deliverable: "Two charts of the same data — one misleading, one honest — with a note naming the trick and how the fair version corrects it.",
      choiceBoard: [
        "Draw both charts on paper or in a drawing app.",
        "Build both in a spreadsheet by changing where the scale starts.",
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
          id: "g5.winter.world.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A headline says 'Cold days DOUBLED this winter!' The city went from 3 cold days last winter to 6 this winter. Which statement is the FAIREST reading?",
          choices: [
            "The city now has a huge number of cold days",
            "'Doubled' is true, but it is only 3 more cold days, so the alarming tone oversells a small change",
            "The headline must be false",
            "You cannot tell anything from the numbers"
          ],
          answerIndex: 1,
          explanation: "Going from 3 to 6 really is doubling, but it is only 3 more cold days — the word 'DOUBLED' makes a small change sound dramatic.",
          hintLadder: [
            "How many EXTRA cold days is that, in plain numbers?",
            "6 − 3 = 3 more days.",
            "'Doubled' is true, but the small real change is being oversold."
          ]
        },
        {
          id: "g5.winter.world.w5.d5.arena2",
          type: "short_answer",
          stem: "A post shows a line graph of one week's temperatures dropping steeply and says 'PROOF the planet is cooling.' Give TWO reasons a data detective would push back on this.",
          rubric: {
            level3: "Gives two solid reasons, such as: (1) one week is weather, not a long-term pattern; (2) the steep look may come from a cut-off/zoomed scale; and/or (3) a climate claim needs many years of data — with brief explanation.",
            level2: "Gives one strong reason plus a weak or partial second one.",
            level1: "Gives no valid reason or accepts the claim."
          },
          exemplar: "First, one week is just weather, not climate — you cannot judge the whole planet's long-term pattern from seven days. Second, a steep-looking drop can come from a zoomed-in or cut-off scale that stretches a small change. A real cooling claim would need many years of data, not one week's line.",
          hintLadder: [
            "Is one week weather or climate?",
            "Could the scale be making the drop look steeper than it is?",
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
        "Grounding your feet and slowing your breath lowers stress and sharpens focus — just like resetting a graph's scale to zero gives you a clear, honest starting point for what the data really shows.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write about a time a headline or chart made something sound bigger or scarier than it really was. Now that you are a data detective, what would you check first?",
      badge: { id: "g5-winter-data-detective", name: "Winter Data Detective", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
