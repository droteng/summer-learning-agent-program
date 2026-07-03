// Grade 7 History/Civics — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 1. Topic: how farming surplus gave rise to the first cities — raised to
// multi-causal analysis (surplus is necessary but not sufficient).

export const fallG7HistoryW4D1 = {
  id: "g7.fall.hist.w4.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "From farms to the first cities",
  topicTag: "ancient-civilizations",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14", "C3.D2.Geo.6"],
  hook: "The first cities rose between two rivers in Mesopotamia. A food surplus was necessary — but surplus alone didn't build a city. Today you weigh MULTIPLE causes and rank which mattered most.",
  miniLesson: [
    "A dependable surplus was a necessary condition for cities: without extra food, thousands can't live together. But it was not the only cause.",
    "Cities also required organizing institutions — irrigation projects, record-keeping, laws, and centralized leadership — that turned surplus into a working society.",
    "Historians distinguish necessary causes (surplus, water, soil) from contributing causes (trade routes, defense needs), and they weigh corroborating evidence before deciding which mattered most."
  ],
  workedExample: {
    prompt: "Two sources agree cities needed surplus food, but one adds that irrigation projects required organized leadership. How does the second source change your explanation?",
    steps: [
      "Source 1 establishes the necessary cause: a food surplus from river-valley farming.",
      "Source 2 corroborates the surplus but adds a second cause: large irrigation works needed coordinated labor and leaders.",
      "Together they show surplus was necessary but not sufficient — organization was also required.",
      "So the strongest explanation names BOTH the surplus AND the institutions that managed it."
    ],
    answer: "Surplus food was necessary but not sufficient; cities also needed organizing institutions (irrigation, leadership, records) — a multi-causal explanation supported by both sources."
  },
  items: [
    {
      id: "g7.fall.hist.w4.d1.q1",
      type: "multiple_choice",
      stem: "Historians say a food surplus was a 'necessary but not sufficient' cause of the first cities. What does that mean?",
      choices: [
        "Surplus food alone guaranteed a city would form",
        "Cities couldn't form without surplus, but surplus by itself didn't build them — other causes were also needed",
        "Surplus food had nothing to do with cities",
        "Cities formed before any surplus existed"
      ],
      answerIndex: 1,
      explanation: "'Necessary but not sufficient' means you can't have the result without it, yet it alone doesn't produce the result — other causes (organization, irrigation, leadership) were also required.",
      hintLadder: [
        "Break the phrase in two: 'necessary' AND 'not sufficient.'",
        "Necessary = can't happen without it. Not sufficient = not enough on its own.",
        "Surplus was required, but other causes were needed too."
      ]
    },
    {
      id: "g7.fall.hist.w4.d1.q2",
      type: "multiple_choice",
      stem: "Two ancient sources both mention the Tigris and Euphrates supporting large settlements. A historian trusts this claim MORE because...",
      choices: [
        "It sounds interesting",
        "Two independent sources corroborate each other, making the claim more reliable",
        "Older writing is always true",
        "One source is enough on its own"
      ],
      answerIndex: 1,
      explanation: "When independent sources corroborate the same claim, it becomes more trustworthy than a single unverified account.",
      hintLadder: [
        "Why is agreement between sources useful?",
        "One voice can be wrong; two matching voices are stronger.",
        "Corroboration raises reliability."
      ],
      misconceptionsTargeted: ["single-cause-thinking"]
    },
    {
      id: "g7.fall.hist.w4.d1.q3",
      type: "multiple_choice",
      stem: "Which was a CONTRIBUTING cause of Mesopotamian cities, rather than the core necessary cause of surplus food?",
      choices: [
        "Rich river-valley soil",
        "A dependable food surplus",
        "Location on trade routes that brought goods and ideas",
        "Water for irrigating crops"
      ],
      answerIndex: 2,
      explanation: "Trade-route location contributed to a city's growth and wealth, but it wasn't the necessary food-producing condition — that role belongs to soil, water, and surplus.",
      hintLadder: [
        "Which option is NOT about producing food?",
        "Three choices are about farming; one is about exchange.",
        "Trade routes contributed but weren't the core necessary cause."
      ]
    },
    {
      id: "g7.fall.hist.w4.d1.q4",
      type: "short_answer",
      stem: "Explain why a food surplus alone was not enough to create a city. Name ONE additional cause and describe how it worked together with surplus.",
      rubric: {
        level3: "Explains surplus was necessary but insufficient AND names a second cause (irrigation projects, leadership, laws, writing) with a clear description of how it combined with surplus to enable a city.",
        level2: "Names a second cause but the link to surplus is thin, or explains insufficiency without a clear second cause.",
        level1: "Only restates that surplus mattered, with no multi-causal reasoning."
      },
      exemplar: "A surplus fed the people, but someone had to organize the big irrigation canals that kept farms productive. Leadership and coordinated labor turned the surplus into a lasting settlement, so both causes were needed together.",
      hintLadder: [
        "What has to happen to surplus food for a city to actually run?",
        "Think organization: irrigation, leaders, laws, records.",
        "Explain how your chosen cause works WITH the surplus, not instead of it."
      ]
    },
    {
      id: "g7.fall.hist.w4.d1.q5",
      type: "short_answer",
      stem: "A historian has two sources. Source A says cities grew because of surplus food. Source B says they grew because of strong rulers. Write a claim that COMBINES both into one multi-causal explanation, and note why using both sources is stronger than picking one.",
      rubric: {
        level3: "Writes a combined claim weaving surplus AND leadership into one multi-causal explanation AND states that corroborating/combining sources gives a fuller, more reliable account than a single-cause story.",
        level2: "Combines the two causes but doesn't explain why using both sources is stronger, or vice versa.",
        level1: "Picks only one cause or lists facts with no synthesis."
      },
      exemplar: "The first cities arose because a food surplus made large populations possible AND strong rulers organized the labor and rules to hold them together. Using both sources is stronger because it avoids a one-sided story and reflects how several causes acted at once.",
      hintLadder: [
        "Cause 1: surplus. Cause 2: leadership.",
        "Join them with 'and' into a single explanation.",
        "Add why combining sources beats relying on just one."
      ]
    }
  ],
  reflectionPrompt: "Your town exists for several reasons at once — water, roads, jobs, history. Name two causes that combined to put people where you live, and say which you think mattered most.",
  misconceptionBank: [
    {
      id: "single-cause-thinking",
      label: "Explains history with one cause only",
      description: "Assumes a single factor (just surplus, or just rivers) fully explains a complex event.",
      coachMove: "Ask 'what else had to be true?' and have them list necessary vs. contributing causes, then corroborate with a second source."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Rely on One Cause or Many?",
      prompt:
        "Would you rather explain the rise of cities using ONE big cause (surplus food), or WEIGH several causes together (surplus, irrigation, leadership, trade)? Think about which explanation a historian could defend with more evidence.",
      answer:
        "Weighing several causes wins. Surplus was necessary, but real history is multi-causal — irrigation, leadership, and trade all played parts. A single-cause story is easy but usually too simple to survive scrutiny.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Weigh the Causes City-Founding Board",
      challenge:
        "You're founding a river-valley city. Build a 'causes board' that ranks the forces behind your city from necessary to contributing, and defend your ranking.",
      steps: [
        "List at least 4 causes (surplus, water/irrigation, leadership, laws, trade, defense).",
        "Label each as NECESSARY or CONTRIBUTING and place them on a ranked ladder.",
        "For your #1 cause, write one sentence of evidence supporting it.",
        "Add one 'what-if' note: if that cause were missing, would the city still exist?"
      ],
      deliverable: "A ranked causes board (4+ causes) labeled necessary/contributing with an evidence sentence for your top cause.",
      choiceBoard: [
        "Draw the ranked ladder of causes with labels.",
        "Write a short 'founder's brief' arguing which cause mattered most.",
        "Make a two-column chart: necessary causes vs. contributing causes."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: First Cities Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.hist.w4.d1.arena1",
          type: "multiple_choice",
          stem: "A historian finds one source claiming a city was founded purely by a great king. Why should they be cautious about this single-cause claim?",
          choices: [
            "Single sources are always false",
            "One source with a single cause may be biased or incomplete; other causes (surplus, irrigation) likely also mattered and should be corroborated",
            "Kings never founded cities",
            "The claim is fine as-is with no checking"
          ],
          answerIndex: 1,
          explanation: "A lone source pushing one cause may reflect bias (glorifying a ruler). Good historians corroborate and look for multiple causes before accepting it.",
          hintLadder: [
            "What's risky about trusting ONE source AND ONE cause?",
            "Bias and missing causes are both concerns.",
            "Corroborate and look for other contributing causes."
          ]
        },
        {
          id: "g7.fall.hist.w4.d1.arena2",
          type: "short_answer",
          stem: "A food surplus freed some people from farming to specialize in other work. Explain the causal CHAIN from surplus to job specialization to a more complex society (at least three links).",
          rubric: {
            level3: "Traces a clear chain: surplus → not everyone must farm → people specialize (scribes, builders, priests) → division of labor produces a more complex, organized society. At least three linked steps.",
            level2: "Shows surplus leading to specialization but the chain is under three clear links or the final societal effect is vague.",
            level1: "Names surplus and jobs with no causal chain."
          },
          exemplar: "A dependable surplus meant not everyone had to farm, so some people became scribes, builders, and priests. That division of labor created new institutions and skills, which made society more complex and organized.",
          hintLadder: [
            "Start at surplus. What does it free people from?",
            "If they don't farm, what can they do instead?",
            "Chain those specialists into a more complex society."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Stretch",
      prompt:
        "Pretend you're harvesting a fall field: reach high to 'pick' fruit, bend low to 'gather' grain, and twist side to side to 'load the cart.' Do each move slowly 5 times, breathing steadily.",
      scienceTieIn: "Gentle full-range stretching boosts blood flow to muscles and brain, easing the stiffness of sitting and helping you refocus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your town exists for several reasons at once. Name two causes that combined to put people where you live, and argue which mattered most.",
      badge: { id: "g7-fall-cause-weigher", name: "Cause Weigher", emoji: "⚖️" },
      estimatedMinutes: 7
    }
  }
};
