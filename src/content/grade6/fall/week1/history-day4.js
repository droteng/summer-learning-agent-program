// Grade 6 History/Civics — Fall Expedition, Week 1 (Back to Basics), Day 4.
// Topic: why the harvest shaped early communities. Lead-in to Week 4
// "Ancient Civilizations" and Week 7 "Cause & Effect in History."

export const fallG6HistoryW1D4 = {
  id: "g6.fall.hist.w1.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The harvest and the rise of communities",
  topicTag: "cause-and-effect-history",
  estimatedMinutes: 17,
  standardsRefs: ["C3.D2.His.14", "C3.D2.His.1"],
  hook: "Why do so many cultures celebrate a fall harvest? Because for most of human history, the autumn harvest decided whether a community survived the winter.",
  miniLesson: [
    "When people learned to farm (the Agricultural Revolution), they could store a fall harvest and stay in one place instead of always moving to find food.",
    "Stored surplus food let populations grow and freed some people to do other jobs — builders, leaders, traders.",
    "Cause and effect: farming and the harvest (cause) led to permanent settlements and the first towns (effect)."
  ],
  workedExample: {
    prompt: "Explain one cause-and-effect link between farming and the growth of towns.",
    steps: [
      "Identify the cause: people could grow and store more food than they needed each day.",
      "Identify the effect: not everyone had to hunt or gather, so some did other work.",
      "Connect them: surplus food → specialized jobs → bigger, more organized settlements.",
      "State it as one sentence linking cause to effect."
    ],
    answer: "Because farmers stored extra harvest, not everyone needed to find food, so towns with many kinds of workers could grow."
  },
  items: [
    {
      id: "g6.fall.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "What allowed early people to stop moving around constantly to find food?",
      choices: [
        "They invented cars.",
        "They learned to farm and store harvests.",
        "Winters became warmer.",
        "They stopped eating."
      ],
      answerIndex: 1,
      explanation: "Farming let people grow and store food in one place, so they could settle instead of roaming.",
      hintLadder: [
        "Think about what changes when you can store food.",
        "It's a skill they learned, not a machine.",
        "Farming + storage = staying put."
      ]
    },
    {
      id: "g6.fall.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "A 'surplus' of harvest means there is...",
      choices: [
        "not enough food",
        "exactly enough food",
        "more food than needed right now",
        "spoiled food"
      ],
      answerIndex: 2,
      explanation: "A surplus is extra — more than is needed immediately — which can be stored or traded.",
      hintLadder: [
        "Break the word: 'sur-plus' hints at 'extra.'",
        "It's about having more than you need today.",
        "Surplus = leftover to store or trade."
      ],
      misconceptionsTargeted: ["surplus-means-shortage"]
    },
    {
      id: "g6.fall.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "Which is an EFFECT of having stored surplus food?",
      choices: [
        "People had to hunt every single day.",
        "Some people could become builders, traders, or leaders.",
        "Everyone moved away.",
        "Farming was forgotten."
      ],
      answerIndex: 1,
      explanation: "With food stored, not everyone needed to gather it, so people could specialize in other jobs.",
      hintLadder: [
        "An effect is what HAPPENS BECAUSE of the cause.",
        "If food is handled, what can people do with their time?",
        "Stored food frees people for other work."
      ]
    },
    {
      id: "g6.fall.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Why do you think many cultures hold harvest festivals in the fall? Give a reason connected to history.",
      rubric: {
        level3: "Connects the festival to the harvest being vital for surviving winter / gratitude for stored food, with clear reasoning.",
        level2: "Mentions harvest or fall food but reasoning is thin.",
        level1: "Gives an unrelated reason or just says 'it's fun.'"
      },
      exemplar: "For most of history a good fall harvest meant the community would survive winter, so festivals celebrate the food being safely gathered and stored.",
      hintLadder: [
        "What did a good harvest mean for the months ahead?",
        "Why would that be worth celebrating?",
        "Connect the festival to survival and gratitude."
      ]
    },
    {
      id: "g6.fall.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence of your own about farming and early towns. Use the word 'because' or 'so.'",
      rubric: {
        level3: "A clear, accurate cause→effect sentence linking farming/surplus to settlement/town growth, using because/so.",
        level2: "Has cause and effect but the link is vague or partly inaccurate.",
        level1: "Lists facts with no cause-effect link."
      },
      exemplar: "Farmers could store extra grain, so people built permanent villages near their fields instead of moving every season.",
      hintLadder: [
        "Pick a cause: farming, storage, or surplus.",
        "Pick an effect: settling down, towns, new jobs.",
        "Join them with 'because' or 'so.'"
      ]
    }
  ],
  reflectionPrompt: "Does your family or culture have a fall or harvest tradition? What might its history be?",
  misconceptionBank: [
    {
      id: "surplus-means-shortage",
      label: "Confuses surplus with shortage",
      description: "Thinks 'surplus' means too little food rather than extra.",
      coachMove: "Anchor it: a surplus is the leftover you can store or share — the opposite of a shortage."
    }
  ]
};
