// Grade 5 History/Civics — Fall Expedition, Week 1 (Back to Basics), Day 4.
// Grade 5 counterpart of g6.fall.hist.w1.d4. Same topic (why the harvest
// shaped early communities — cause and effect) pitched down to Grade 5:
// shorter passages, more vocabulary support, simpler sentence frames.

export const fallG5HistoryW1D4 = {
  id: "g5.fall.hist.w1.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The harvest and the rise of communities",
  topicTag: "cause-and-effect-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.3-5", "C3.D2.His.1.3-5"],
  hook: "Why do so many cultures celebrate a fall harvest? For most of history, the autumn harvest decided whether a community had enough food to make it through winter.",
  miniLesson: [
    "Long ago, people learned to farm. Once they could grow and store a fall harvest, they could stay in one place instead of always moving to find food.",
    "Stored extra food (called a surplus) let more people live together and let some people do other jobs, like building or trading.",
    "This is cause and effect: farming and the harvest (the cause) led to towns and settled communities (the effect)."
  ],
  workedExample: {
    prompt: "Explain one cause-and-effect link between farming and the growth of towns.",
    steps: [
      "Find the cause: people could grow and store more food than they needed each day.",
      "Find the effect: not everyone had to hunt or gather, so some people could do other work.",
      "Connect them: extra food → some people take other jobs → towns grow.",
      "Say it in one sentence linking the cause to the effect."
    ],
    answer: "Because farmers stored extra harvest, not everyone had to find food, so towns with many kinds of workers could grow."
  },
  items: [
    {
      id: "g5.fall.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "What let early people stop moving around all the time to find food?",
      choices: [
        "They learned to farm and store harvests.",
        "They invented cars.",
        "Winters became warmer.",
        "They stopped eating."
      ],
      answerIndex: 0,
      explanation: "Farming let people grow and store food in one place, so they could settle down instead of roaming.",
      hintLadder: [
        "Think about what changes when you can store food.",
        "It is a skill they learned, not a machine.",
        "Farming plus storing food means staying in one place."
      ]
    },
    {
      id: "g5.fall.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "A 'surplus' of harvest means there is...",
      choices: [
        "not enough food",
        "more food than needed right now",
        "exactly enough food",
        "spoiled food"
      ],
      answerIndex: 1,
      explanation: "A surplus is extra — more than is needed right now — which can be stored or traded.",
      hintLadder: [
        "The word 'surplus' means 'extra.'",
        "It is about having more than you need today.",
        "Surplus = leftover food to store or trade."
      ],
      misconceptionsTargeted: ["surplus-means-shortage"]
    },
    {
      id: "g5.fall.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "Which is an EFFECT of having stored extra food (a surplus)?",
      choices: [
        "People had to hunt every single day.",
        "Farming was forgotten.",
        "Everyone moved away.",
        "Some people could become builders, traders, or leaders."
      ],
      answerIndex: 3,
      explanation: "With food stored, not everyone had to gather it, so some people could do other jobs.",
      hintLadder: [
        "An effect is what HAPPENS BECAUSE of the cause.",
        "If food is already handled, what can people do with their time?",
        "Stored food frees people to do other work."
      ]
    },
    {
      id: "g5.fall.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Why do you think many cultures hold harvest festivals in the fall? Give a reason connected to history.",
      rubric: {
        level3: "Connects the festival to the harvest being important for surviving winter / being thankful for stored food, with clear reasoning.",
        level2: "Mentions harvest or fall food but the reasoning is thin.",
        level1: "Gives an unrelated reason or just says 'it is fun.'"
      },
      exemplar: "For most of history, a good fall harvest meant the community would have enough food for winter, so festivals celebrate the food being safely gathered and stored.",
      hintLadder: [
        "What did a good harvest mean for the months ahead?",
        "Why would that be worth celebrating?",
        "Connect the festival to surviving winter and being thankful."
      ]
    },
    {
      id: "g5.fall.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence of your own about farming and early towns. Use the word 'because' or 'so.'",
      rubric: {
        level3: "A clear, correct cause→effect sentence linking farming/surplus to towns/settling down, using because/so.",
        level2: "Has a cause and an effect but the link is vague or partly wrong.",
        level1: "Lists facts with no cause-effect link."
      },
      exemplar: "Farmers could store extra grain, so people built villages near their fields instead of moving every season.",
      hintLadder: [
        "Pick a cause: farming, storing food, or surplus.",
        "Pick an effect: settling down, towns, or new jobs.",
        "Join them with 'because' or 'so.'"
      ]
    }
  ],
  reflectionPrompt: "Does your family or culture have a fall or harvest tradition? What might its history be?",
  misconceptionBank: [
    {
      id: "surplus-means-shortage",
      label: "Confuses surplus with shortage",
      description: "Thinks 'surplus' means too little food instead of extra.",
      coachMove: "Anchor it: a surplus is the extra you can store or share — the opposite of a shortage (running out)."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Harvest Word Riddle",
      prompt:
        "I am the extra harvest a community gathers — more than they need to eat right now. I can be stored for winter or traded to neighbors. Farmers who have me can make it through when food is scarce. What single word am I?",
      answer: "Surplus — the extra food beyond what is needed right now, which can be stored or traded.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Found a Harvest Village",
      challenge:
        "Imagine you are founding a village just after people first learn to farm. Show how a good fall harvest lets your village grow by giving some people jobs beyond gathering food.",
      steps: [
        "Name your village and the main crop it stores each fall.",
        "Explain in one sentence how stored extra food frees people from finding food every day.",
        "Invent three NON-farmer jobs the surplus makes possible (builder, trader, leader, and so on).",
        "Draw or describe how your village looks once these jobs exist."
      ],
      deliverable: "A village plan showing the cause (stored harvest) and the effect (new jobs and growth).",
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
          id: "g5.fall.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Which is the best example of a CAUSE leading to an EFFECT in early history?",
          choices: [
            "Towns already existed, so people decided to invent farming.",
            "Festivals were fun, so winters became warmer.",
            "People learned to store extra harvest, so some could do other jobs.",
            "People moved around all the time, so they built permanent towns."
          ],
          answerIndex: 2,
          explanation: "Stored extra food (cause) freed people from gathering food, so they could do other jobs (effect). The other options mix up or break the cause-and-effect link.",
          hintLadder: [
            "The cause must come first and actually make the effect happen.",
            "Which option has stored food leading to new kinds of work?",
            "Surplus → new jobs is the real cause-and-effect."
          ]
        },
        {
          id: "g5.fall.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Explain a cause-and-effect chain with TWO links: start with farming and end with the growth of towns. Use 'so' or 'because' for each link.",
          rubric: {
            level3: "Gives a clear two-link chain (e.g., farming → store surplus → new jobs/towns grow) using so/because correctly.",
            level2: "Has a cause and an effect but only one link, or a link is vague.",
            level1: "Lists facts with no real cause-effect chain."
          },
          exemplar: "People learned to farm, so they could store extra harvest; because food was stored, not everyone had to gather it, so towns with builders and traders grew.",
          hintLadder: [
            "Link 1: farming leads to what?",
            "Link 2: stored extra food leads to what?",
            "Join both links with 'so' or 'because.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Gather",
      prompt:
        "Stand and mime the harvest: reach up to pick, bend to gather, twist to load a basket, and repeat for 30 seconds. Imagine storing enough food to last the whole winter.",
      scienceTieIn: "Gentle reaching and twisting boosts blood flow and loosens stiff muscles, helping your brain stay alert for the next lesson.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Does your family or culture have a fall or harvest tradition? Write what it is and one guess about its history.",
      badge: { id: "g5-fall-harvest-historian", name: "Harvest Historian", emoji: "🌾" },
      estimatedMinutes: 7
    }
  }
};
