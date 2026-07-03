// Grade 7 History/Civics — Summer History Missions, Week 7, Day 2.
// Topic: multi-causal cause & effect — distinguishing short-term from
// long-term causes and weighing which mattered most.

export const summerG7HistoryW7D2 = {
  id: "g7.summer.hist.w7.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Multi-causal cause & effect: short- vs. long-term causes",
  topicTag: "causation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.7", "CCSS.ELA-LITERACY.RH.6-8.2"],
  hook: "Big events almost never have one cause. A single match can start a fire — but only after months of dry weather stacked the wood. Today you learn to see history the way historians do: a web of causes, some slow and deep, some sudden, and you decide which ones carried the most weight.",
  miniLesson: [
    "Historians separate LONG-TERM causes (slow-building conditions like poverty, unfair laws, or tension between groups) from SHORT-TERM causes (recent events that pile on) and the TRIGGER (the immediate spark that sets the event off).",
    "Long-term causes are like dry firewood stacked over years; the trigger is the match. Both matter — without the firewood the match does nothing, and without the match the firewood just sits there.",
    "Weighing causes means judging which mattered MOST and explaining why. Historians support that judgment with evidence and often disagree — 'most important cause' is an argument you defend, not a fact you look up."
  ],
  workedExample: {
    prompt: "Sort the causes of a made-up 'Great Bread Riot' and weigh them: (a) years of rising food prices, (b) a failed harvest last spring, (c) a rumor one morning that the bakery had closed for good.",
    steps: [
      "Long-term cause: years of rising food prices slowly built anger and hardship.",
      "Short-term cause: last spring's failed harvest sharpened the shortage recently.",
      "Trigger: the morning rumor that the bakery closed set the crowd off immediately.",
      "Weigh them: the rumor was the spark, but without years of high prices and the failed harvest, one rumor could not have caused a riot — so the long-term price crisis carries the most weight."
    ],
    answer: "The rumor triggered it, but the long-term rise in food prices was the deepest cause: it built the anger that a single rumor could then ignite."
  },
  items: [
    {
      id: "g7.summer.hist.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which of these is best described as a LONG-TERM cause of a conflict?",
      choices: [
        "A single insulting speech given the day before fighting broke out",
        "Decades of unfair taxes that slowly built resentment between two regions",
        "A rumor that spread in a single afternoon",
        "One leader's sudden decision made in an hour"
      ],
      answerIndex: 1,
      explanation: "Long-term causes build slowly over years or decades. Decades of unfair taxes fit; the other choices are sudden, short-term events or triggers.",
      hintLadder: [
        "Which cause took years, not hours, to build?",
        "Long-term means slow and deep.",
        "Decades of unfair taxes is the slow-building cause."
      ]
    },
    {
      id: "g7.summer.hist.w7.d2.q2",
      type: "multiple_choice",
      stem: "A historian calls one recent event 'the trigger' of a revolution. What does that mean?",
      choices: [
        "It was the only cause that mattered",
        "It was the immediate spark that set off tensions that had already been building",
        "It happened long before the revolution",
        "It proves the long-term causes were unimportant"
      ],
      answerIndex: 1,
      explanation: "A trigger is the immediate spark, but it works only because deeper causes had already built up. It does not erase the long-term causes.",
      hintLadder: [
        "Think of a match near stacked firewood.",
        "A trigger is immediate, but it needs built-up conditions.",
        "It sparks tensions that were already there."
      ],
      misconceptionsTargeted: ["single-cause-thinking"]
    },
    {
      id: "g7.summer.hist.w7.d2.q3",
      type: "multiple_choice",
      stem: "Two historians agree on the SAME list of causes but disagree about which mattered MOST. Is that a problem?",
      choices: [
        "Yes — only one of them can be doing real history",
        "No — weighing which cause mattered most is an argument historians defend with evidence, so reasonable people can differ",
        "Yes — historians must always agree on the single true cause",
        "No — because the causes don't actually matter"
      ],
      answerIndex: 1,
      explanation: "Ranking causes by importance is an interpretation supported by evidence, not a lookup fact, so well-reasoned historians can reach different conclusions.",
      hintLadder: [
        "Is 'most important cause' a fact you look up or a judgment you defend?",
        "Can two people weigh the same evidence differently?",
        "Weighing causes is an evidence-based argument."
      ]
    },
    {
      id: "g7.summer.hist.w7.d2.q4",
      type: "short_answer",
      stem: "Pick any big change you've seen (a rule change at school, a team's losing streak, a friend group shifting). Name ONE long-term cause and ONE short-term cause or trigger, and label which is which.",
      rubric: {
        level3: "Identifies a plausible long-term cause (slow-building) AND a plausible short-term cause or trigger (sudden/immediate) for the same event, and correctly labels each.",
        level2: "Names two causes but one is mislabeled, or the distinction between slow and sudden is unclear.",
        level1: "Names only one cause, or cannot distinguish long-term from short-term."
      },
      exemplar: "When our class lost recess privileges, the long-term cause was months of the room getting louder and messier, which slowly wore down the teacher's patience. The trigger was one afternoon when a paper fight broke out — that sudden event was the spark that finally cost us recess.",
      hintLadder: [
        "Long-term = something that built up slowly over time.",
        "Short-term/trigger = a sudden event that set things off.",
        "Name one of each and clearly label them."
      ]
    },
    {
      id: "g7.summer.hist.w7.d2.q5",
      type: "short_answer",
      stem: "A student says, 'The revolution happened ONLY because a tax was raised.' Explain what is wrong with single-cause thinking, and how you would improve the explanation.",
      rubric: {
        level3: "Explains that big events usually have MULTIPLE causes (long-term conditions plus a trigger), notes the tax was likely a trigger rather than the sole cause, AND suggests adding deeper long-term causes to the explanation.",
        level2: "Recognizes there is more than one cause but does not clearly connect trigger vs. long-term or improve the explanation.",
        level1: "Agrees with the single-cause claim or restates it without analysis."
      },
      exemplar: "Blaming only the tax ignores that big events have many causes. The tax was probably the trigger — the spark — but deeper long-term causes like years of unfair rule and growing anger made people ready to revolt. A better explanation names those long-term causes AND the tax as the spark that lit them.",
      hintLadder: [
        "Do major events usually have just one cause?",
        "Was the tax the deep cause or the spark?",
        "Add the slow-building long-term causes to fix the explanation."
      ]
    }
  ],
  reflectionPrompt: "Think of a recent argument or big decision in your own life. Was there really just one cause, or a stack of long-term reasons that a small trigger finally set off?",
  misconceptionBank: [
    {
      id: "single-cause-thinking",
      label: "Believes big events have a single cause",
      description: "Points to one dramatic event as THE cause and ignores the long-term conditions that made it possible.",
      coachMove: "Use the firewood-and-match image: 'The match got the blame, but who stacked the firewood? What conditions built up first?'"
    },
    {
      id: "trigger-erases-causes",
      label: "Thinks the trigger replaces the long-term causes",
      description: "Assumes that naming the spark means the deeper causes no longer matter.",
      coachMove: "Show that a match does nothing without dry wood: 'The trigger only worked because the long-term causes were already in place.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Match or Firewood?",
      prompt:
        "A campfire roars to life. Would you rather get credit as the MATCH that lit it, or the person who spent all day stacking the dry FIREWOOD? In history, which one is the 'trigger' and which is the 'long-term cause' — and could the match have done anything alone?",
      answer:
        "The match is the trigger — the immediate spark — and the stacked firewood is the long-term cause. The match alone does nothing without the wood, which is exactly why historians say a trigger only works when long-term causes have already built up.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Cause Web Mission Card",
      challenge:
        "Add a 'Cause Investigator' card to your History Mission Board. Pick a real or invented event, map its web of causes, and rank them by weight.",
      steps: [
        "Write your event in the center of the page.",
        "Branch out at least THREE causes and label each long-term, short-term, or trigger.",
        "Draw a heavier arrow to the cause you think mattered MOST and note one reason why.",
        "Write the card's mission question, such as 'Which cause carried the most weight, and why?'"
      ],
      deliverable: "One cause-web mission card with at least three labeled causes, a weighted 'most important' arrow, and a challenge question.",
      choiceBoard: [
        "Draw the cause web with labeled branches and a heavy 'main cause' arrow.",
        "Write a short 'detective's ruling' paragraph naming the top cause and defending it.",
        "Build a 'balance scale' diagram weighing two causes against each other."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause Investigator Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.hist.w7.d2.arena1",
          type: "multiple_choice",
          stem: "A town's factory closed. Causes: (1) cheaper factories opened overseas over 20 years, (2) the main machine broke last month, (3) the owner announced the closure on Monday. Which correctly labels them?",
          choices: [
            "1 trigger, 2 long-term, 3 short-term",
            "1 long-term, 2 short-term, 3 trigger",
            "1 short-term, 2 trigger, 3 long-term",
            "All three are triggers"
          ],
          answerIndex: 1,
          explanation: "The 20-year overseas competition is the slow-building long-term cause; the recent machine breakdown is a short-term cause; Monday's closure announcement is the immediate trigger.",
          hintLadder: [
            "Which cause took 20 years to build?",
            "Which happened just last month, and which happened the very day it closed?",
            "Slow → long-term, recent → short-term, immediate spark → trigger."
          ]
        },
        {
          id: "g7.summer.hist.w7.d2.arena2",
          type: "short_answer",
          stem: "For that factory closure, argue which cause mattered MOST — the 20 years of overseas competition or Monday's announcement — and defend your choice with reasoning.",
          rubric: {
            level3: "Makes a clear choice AND defends it with sound reasoning, ideally noting that the announcement was only the trigger while the long-term competition made the closure inevitable (or a well-argued alternative).",
            level2: "Chooses a cause and gives some reasoning, but the argument is thin or does not connect trigger vs. long-term.",
            level1: "Chooses without reasoning or confuses the causes."
          },
          exemplar: "The 20 years of overseas competition mattered most. Monday's announcement was just the trigger — the moment the news was made public — but the factory was already doomed by two decades of losing business to cheaper overseas plants. Remove the announcement and it still closes; remove the long-term competition and there is nothing to announce.",
          hintLadder: [
            "Which cause could the closure NOT have happened without?",
            "Was the announcement a deep cause or just the spark?",
            "Defend your pick by testing what happens if you remove each cause."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Build & Spark",
      prompt:
        "Act out cause and effect: slowly stack invisible firewood by squatting and lifting five times (the long-term build-up), then 'strike the match' with a quick clap and a jump (the trigger). Repeat the whole sequence twice, breathing out on each jump.",
      scienceTieIn: "Alternating slow strength moves with a quick burst raises your heart rate gently, sending more oxygen to your brain and helping you refocus for the next mission.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one event from the news or your own life. Write its trigger in one sentence, then write the long-term cause that made that trigger powerful. Which one really drove the change?",
      badge: { id: "g7-cause-investigator", name: "Cause Investigator", emoji: "🔥" },
      estimatedMinutes: 7
    }
  }
};
