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
  estimatedMinutes: 60, // full Daily Hour
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
        "spoiled food",
        "more food than needed right now"
      ],
      answerIndex: 3,
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
        "Everyone moved away.",
        "Some people could become builders, traders, or leaders.",
        "Farming was forgotten."
      ],
      answerIndex: 2,
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Harvest Word Riddle",
      prompt:
        "I am the extra harvest a community gathers — more than they need to eat right now. I can be stored for winter or traded to neighbors. Farmers who have me can survive when food is scarce. What single word am I?",
      answer: "Surplus — the extra food beyond what's needed right now, which can be stored or traded.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Found a Harvest Village",
      challenge:
        "Imagine you're founding a village after people first learn to farm. Show how a good fall harvest lets your village grow by giving some people jobs beyond gathering food.",
      steps: [
        "Name your village and the main crop it stores each fall.",
        "Explain in one sentence how stored surplus frees people from finding food daily.",
        "Invent three NON-farmer jobs the surplus makes possible (builder, trader, leader, etc.).",
        "Draw or describe how your village looks once these jobs exist."
      ],
      deliverable: "A village plan showing the cause (stored harvest) and the effect (specialized jobs and growth).",
      choiceBoard: [
        "Draw a labeled map of your harvest village.",
        "Write a short 'day in the life' story of one villager.",
        "Make a cause-and-effect chart: harvest → surplus → new jobs → growth."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause-and-Effect Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Which is the best example of a CAUSE leading to an EFFECT in early history?",
          choices: [
            "People learned to store surplus harvest, so some could specialize in other jobs.",
            "Towns existed, so people decided to invent farming.",
            "Festivals were fun, so winters became warmer.",
            "People moved constantly, so they built permanent towns."
          ],
          answerIndex: 0,
          explanation: "Stored surplus (cause) freed people from gathering food, so they could specialize (effect). The other options reverse or break the cause-effect link.",
          hintLadder: [
            "The cause must come first and actually produce the effect.",
            "Which option has stored food leading to new kinds of work?",
            "Surplus → specialized jobs is the real cause-and-effect."
          ]
        },
        {
          id: "g6.fall.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Explain one cause-and-effect chain with TWO links: start with farming and end with the growth of towns. Use 'so' or 'because' for each link.",
          rubric: {
            level3: "Gives a clear two-link chain (e.g., farming → surplus storage → specialized jobs/town growth) using so/because accurately.",
            level2: "Has a cause and an effect but only one link, or a link is vague.",
            level1: "Lists facts with no real cause-effect chain."
          },
          exemplar: "People learned to farm, so they could store a surplus harvest; because food was stored, not everyone had to gather it, so towns with builders and traders grew.",
          hintLadder: [
            "Link 1: farming leads to what?",
            "Link 2: stored surplus leads to what?",
            "Join both links with 'so' or 'because.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Gather",
      prompt:
        "Stand and mime the harvest: reach up to pick, bend to gather, twist to load a basket, repeat for 30 seconds. Imagine storing enough food to last the whole winter.",
      scienceTieIn: "Gentle reaching and twisting boosts blood flow and loosens stiff muscles, helping your brain stay alert for the next lesson.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Does your family or culture have a fall or harvest tradition? Write what it is and one guess about its history.",
      badge: { id: "fall-harvest-historian", name: "Harvest Historian", emoji: "🌾" },
      estimatedMinutes: 7
    }
  }
};
