// Grade 7 History/Civics — Summer Program, Week 6 (World Affairs for Kids),
// Day 5. Topic: historical context — how the past shapes a current world issue.
// Project: a kid-friendly explainer about a world issue.

export const summerG7HistoryW6D5 = {
  id: "g7.summer.hist.w6.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Historical context — how the past shapes a current issue",
  topicTag: "historical-context",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1", "CCSS.ELA-LITERACY.RH.7.5"],
  hook: "Almost no world issue starts today. Borders, water rights, trade fights — most have roots that go back years, decades, even centuries. To explain an issue fairly, you have to give readers the backstory. Today you learn to find and use historical context.",
  miniLesson: [
    "Historical context is the background of past events, decisions, and conditions that helped cause a present-day issue. Without it, a current event looks like it came from nowhere — and readers can't understand WHY people feel the way they do.",
    "Causes come in layers: a long-term cause builds up over time (like decades of a shared river being divided), while a short-term trigger sets things off (like a single dry summer). Both matter, and confusing the trigger for the whole cause is a common mistake.",
    "Historians build a timeline and ask 'what led to this?' at each step. Providing that context in an explainer is not taking a side — it's giving readers the fair, full story so they understand how the past shaped the present."
  ],
  workedExample: {
    prompt: "Two neighboring countries suddenly clash over a river this year. How does historical context help explain it fairly?",
    steps: [
      "Ask what long-term background exists: maybe a treaty divided the river 70 years ago, leaving one country with less water.",
      "Identify the short-term trigger: this year a drought made the shortage urgent.",
      "Build a simple timeline: old treaty → growing populations → this year's drought → the clash.",
      "Explain both layers so readers see the dispute isn't random — decades of history plus a recent trigger created it."
    ],
    answer: "The clash makes sense once you show the long-term cause (an old treaty and growing needs) plus the short-term trigger (this year's drought). That context is fair backstory, not a side."
  },
  items: [
    {
      id: "g7.summer.hist.w6.d5.q1",
      type: "multiple_choice",
      stem: "What does 'historical context' give the reader of an explainer?",
      choices: [
        "The background of past events that helped cause the current issue",
        "A prediction of exactly what will happen next",
        "The writer's personal opinion about who is right",
        "A list of unrelated old facts"
      ],
      answerIndex: 0,
      explanation: "Historical context is the relevant past background that helps explain why a current issue exists.",
      hintLadder: [
        "The word 'historical' points to the PAST.",
        "It explains how an issue came to be.",
        "It's the background of past events behind the issue."
      ]
    },
    {
      id: "g7.summer.hist.w6.d5.q2",
      type: "multiple_choice",
      stem: "A country's water dispute is set off this summer by a sudden drought, but the deeper reason is a border drawn 60 years ago. Which is the LONG-TERM cause?",
      choices: [
        "The sudden drought this summer",
        "The weather forecast for tomorrow",
        "A news report published today",
        "The border drawn 60 years ago"
      ],
      answerIndex: 3,
      explanation: "The 60-year-old border built up the conditions over time — that's the long-term cause. The drought is the short-term trigger.",
      hintLadder: [
        "Long-term causes build up over many years.",
        "Which factor has been there for decades?",
        "The 60-year-old border is the long-term cause."
      ],
      misconceptionsTargeted: ["trigger-equals-whole-cause"]
    },
    {
      id: "g7.summer.hist.w6.d5.q3",
      type: "multiple_choice",
      stem: "Why does leaving out historical context make an explainer LESS fair?",
      choices: [
        "It makes the explainer longer than needed",
        "History is always boring to readers",
        "Readers can't understand why people feel the way they do, so one side may look unreasonable",
        "It uses up too many transition words"
      ],
      answerIndex: 2,
      explanation: "Without context, a current event seems to come from nowhere, and a group's actions may look unreasonable when history explains them.",
      hintLadder: [
        "What does a reader miss without the backstory?",
        "Can you understand people's feelings without knowing what happened before?",
        "Missing context can make one side look unfair."
      ]
    },
    {
      id: "g7.summer.hist.w6.d5.q4",
      type: "short_answer",
      stem: "Pick a current world issue (real or invented). Name ONE long-term cause and ONE short-term trigger, and explain how each contributed to the issue.",
      rubric: {
        level3: "Names a clear issue, identifies a distinct long-term cause AND a short-term trigger, and explains how each contributed (background buildup vs. the recent set-off).",
        level2: "Names a long-term cause and a trigger but the explanation of one is thin or they're not clearly distinguished.",
        level1: "Names only one cause, confuses the two, or gives no reasoning."
      },
      exemplar: "For a fishing dispute: a long-term cause is that fish stocks have been shrinking for decades from overfishing, which slowly raised tensions. A short-term trigger is that one country recently sent extra boats into shared waters, which set off the current argument.",
      hintLadder: [
        "Choose an issue and think about its backstory.",
        "Long-term cause: what built up over years? Trigger: what set it off recently?",
        "Explain how each one contributed."
      ]
    },
    {
      id: "g7.summer.hist.w6.d5.q5",
      type: "short_answer",
      stem: "Write a short 'backstory' paragraph (3–4 sentences) for your explainer that gives a younger reader the historical context of a world issue. Include at least one past event and connect it to the present.",
      rubric: {
        level3: "3–4 clear sentences that present relevant past event(s) AND explicitly connect them to the current issue, in fair, simple language a younger reader could follow.",
        level2: "Gives past background but the link to the present is weak, or the language is too advanced or one-sided.",
        level1: "No real historical context, or facts with no connection to the present."
      },
      exemplar: "Long ago, two countries signed an agreement to share a big river. Back then, both had small populations, so there was plenty of water for everyone. Over the years, the cities grew much bigger and needed far more water. Now there isn't enough to go around, which is why the two countries are arguing today.",
      hintLadder: [
        "Start with a past event that matters to the issue.",
        "Add how things changed over time.",
        "Connect it clearly to why the issue exists now."
      ]
    }
  ],
  reflectionPrompt: "Think about your own town or family. What's one thing about it today that only makes sense once you know its history?",
  misconceptionBank: [
    {
      id: "trigger-equals-whole-cause",
      label: "Mistakes the short-term trigger for the whole cause",
      description: "Believes the single event that set an issue off (a drought, a protest) is the entire explanation, ignoring the long-term causes that built up over time.",
      coachMove: "Separate the layers: 'What set it off RIGHT NOW?' (trigger) vs. 'What built up over years to make it possible?' (long-term cause). A fair explainer names both."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Trigger or Backstory?",
      prompt:
        "A big argument breaks out over a shared park this week. Would you rather explain it using only 'someone put up a fence yesterday' (the trigger), or ALSO include 'the two neighborhoods have shared that park unevenly for 30 years' (the backstory)? Which explanation is fairer, and why?",
      answer: "Including the backstory is fairer. The fence is just the short-term trigger; the 30 years of uneven sharing is the long-term cause that made people ready to argue. Both together give the full, fair picture.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Backstory Timeline",
      challenge:
        "Build a timeline that gives the historical context for your explainer's world issue. Show how past events led to the present situation, marking long-term causes and the short-term trigger.",
      steps: [
        "Draw a horizontal timeline for your chosen issue.",
        "Add at least three past events or conditions in order.",
        "Label which are long-term causes and which is the short-term trigger.",
        "Write one sentence connecting the end of the timeline to why the issue matters TODAY."
      ],
      deliverable: "A labeled timeline with 3+ events showing long-term causes, the short-term trigger, and a sentence linking it to the present.",
      choiceBoard: [
        "Draw the timeline as an illustrated strip with dates and labels.",
        "Write it as a short 'how we got here' story for a younger reader.",
        "Record a 45-second narrated 'time-travel tour' walking through the timeline."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Historical Context Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.hist.w6.d5.arena1",
          type: "multiple_choice",
          stem: "Put these in cause-and-effect order for a modern water dispute: (1) this year's drought sets off a clash, (2) a treaty 50 years ago divided the river unevenly, (3) both countries' populations grow and need more water.",
          choices: [
            "1 → 2 → 3",
            "2 → 3 → 1",
            "3 → 1 → 2",
            "1 → 3 → 2"
          ],
          answerIndex: 1,
          explanation: "The old treaty came first, then growing populations raised the pressure, then this year's drought set off the clash: 2 → 3 → 1.",
          hintLadder: [
            "Which event happened longest ago?",
            "The trigger (the drought) comes LAST, not first.",
            "Order: old treaty → growing needs → this year's clash."
          ]
        },
        {
          id: "g7.summer.hist.w6.d5.arena2",
          type: "short_answer",
          stem: "A reader says, 'This trade fight only started because of a tweet last week.' Using the idea of long-term causes vs. short-term triggers, explain what this reader is missing.",
          rubric: {
            level3: "Explains that the tweet is only a short-term trigger, and that long-term causes (years of trade tensions, past agreements, economic competition) built up first — so the tweet set off, but did not create, the fight.",
            level2: "Identifies the tweet as a trigger but only vaguely describes the missing long-term causes.",
            level1: "Agrees the tweet is the whole cause or gives no clear distinction."
          },
          exemplar: "The tweet is just the short-term trigger that set things off. The reader is missing the long-term causes — years of trade tensions and competition that built up first. Without those, the tweet alone wouldn't have started a fight; it was the spark on top of a pile that was already there.",
          hintLadder: [
            "Is a single tweet enough to start a whole trade fight by itself?",
            "What must have built up BEFORE the tweet?",
            "Name the long-term causes the reader ignored."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Walk the Timeline",
      prompt:
        "Imagine a timeline on the floor. Take three big steps forward, calling out 'past… then… now' as you go. Then walk it backward to the start. Repeat twice, finishing with a slow breath in the 'present.'",
      scienceTieIn: "Walking a sequence physically helps your brain organize events in order — and the movement boosts blood flow so you feel refreshed after a full week of learning.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think about your own town, school, or family. What's one thing about it today that only makes sense once you know its history? Write the backstory in two or three sentences.",
      badge: { id: "g7-context-keeper", name: "Context Keeper", emoji: "⏳" },
      estimatedMinutes: 7
    }
  }
};
