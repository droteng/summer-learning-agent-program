// Grade 6 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 1. Topic: cause-and-effect chains across history.

export const fallG6HistoryW7D1 = {
  id: "g6.fall.hist.w7.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "Cause-and-effect chains in history",
  topicTag: "cause-effect-chains",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14", "C3.D2.His.15"],
  hook: "History isn't a list of dates — it's a chain of causes and effects. One event sets off the next. Today you learn to follow the links.",
  miniLesson: [
    "A cause makes something happen; an effect is the result. Often an effect becomes the cause of the NEXT event — a chain.",
    "Example: farming (cause) → food surplus (effect/cause) → cities (effect/cause) → writing (effect).",
    "Watch for signal words: because, led to, as a result, so, therefore."
  ],
  workedExample: {
    prompt: "Build a 3-link chain starting from 'a new trade route opened.'",
    steps: [
      "Cause: a new trade route opened.",
      "Effect/cause: new goods and ideas spread between regions.",
      "Effect: towns along the route grew rich and powerful.",
      "Chain: trade route → goods & ideas spread → towns grew wealthy."
    ],
    answer: "trade route opened → goods & ideas spread → towns grew wealthy"
  },
  items: [
    {
      id: "g6.fall.hist.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which word signals an EFFECT?",
      choices: ["as a result", "because", "since", "due to"],
      answerIndex: 0,
      explanation: "'As a result' introduces the effect; the others usually introduce causes.",
      hintLadder: [
        "Which phrase points FORWARD to a result?",
        "'As a result' = here comes the effect.",
        "The others explain why (cause)."
      ]
    },
    {
      id: "g6.fall.hist.w7.d1.q2",
      type: "multiple_choice",
      stem: "In 'Heavy rains flooded the fields, so the harvest failed,' what is the EFFECT?",
      choices: ["Heavy rains", "The fields", "The season", "The harvest failed"],
      answerIndex: 3,
      explanation: "The flooding caused it; the failed harvest is the result (effect).",
      hintLadder: [
        "What happened BECAUSE of the rains?",
        "Find the result after 'so.'",
        "The harvest failed."
      ]
    },
    {
      id: "g6.fall.hist.w7.d1.q3",
      type: "multiple_choice",
      stem: "Why do historians say one effect can become the next CAUSE?",
      choices: [
        "Effects never matter",
        "Because a result often triggers a further event, forming a chain",
        "Because history repeats exactly",
        "Because causes and effects are the same"
      ],
      answerIndex: 1,
      explanation: "Each result can set off the next event, linking causes and effects into a chain.",
      hintLadder: [
        "Think of dominoes.",
        "One falling knocks the next.",
        "An effect can trigger a new event."
      ],
      misconceptionsTargeted: ["single-cause-thinking"]
    },
    {
      id: "g6.fall.hist.w7.d1.q4",
      type: "short_answer",
      stem: "Build a 3-link cause-and-effect chain about ANY topic (real or from your life). Use arrows or 'led to.'",
      rubric: {
        level3: "Three logically connected links where each effect plausibly causes the next.",
        level2: "Three links but one connection is weak or unclear.",
        level1: "Only one link, or links that don't connect causally."
      },
      exemplar: "I stayed up late → I was tired in class → I missed the instructions and had to redo the work.",
      hintLadder: [
        "Start with one cause.",
        "What did it lead to?",
        "What did THAT lead to? (three links)"
      ]
    },
    {
      id: "g6.fall.hist.w7.d1.q5",
      type: "short_answer",
      stem: "Many history events have MORE than one cause. Pick an event you know and name two different causes for it.",
      rubric: {
        level3: "Names a real event AND two distinct, plausible causes.",
        level2: "Names an event with one solid cause and one weak/unclear cause.",
        level1: "Only one cause or no clear event."
      },
      exemplar: "People moved to cities during the Industrial Revolution for two reasons: factories offered jobs, and new machines meant fewer farm workers were needed.",
      hintLadder: [
        "Choose an event you've studied.",
        "Think of more than one reason it happened.",
        "Name two separate causes."
      ]
    }
  ],
  reflectionPrompt: "Think of something that happened to you this week. Can you trace the chain of causes that led to it?",
  misconceptionBank: [
    {
      id: "single-cause-thinking",
      label: "Assumes every event has just one cause",
      description: "Looks for a single reason when most events have several causes.",
      coachMove: "Ask 'what else contributed?' until at least two causes surface — real history is multi-causal."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Start the Chain?",
      prompt:
        "Would you rather be the FIRST domino (the cause that starts a whole chain) or the LAST domino (the final effect everyone sees)? Think about which one really makes history happen — then defend your pick.",
      answer:
        "There's no wrong choice! The first domino is the cause that sets everything off; the last is the big visible effect. The point: every effect was once started by a cause earlier in the chain.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Harvest Domino Chain",
      challenge:
        "Pick a real historical chain (like farming → food surplus → cities → writing) and build a physical or drawn domino chain where each domino is labeled with one event in the chain.",
      steps: [
        "Choose a 4-link historical cause-and-effect chain.",
        "Make 4 'dominoes' (paper, blocks, or drawn boxes) and label each with one event.",
        "Line them up in order so toppling one knocks the next.",
        "On each gap, write the 'because' that connects one event to the next."
      ],
      deliverable: "A 4-domino chain (built or drawn) with each link labeled by event and a 'because' between links.",
      choiceBoard: [
        "Build it with real dominoes, blocks, or folded cards.",
        "Draw it as a falling-domino comic strip.",
        "Record a 30-second narration explaining each link as it 'falls.'"
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause-Chain Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.hist.w7.d1.arena1",
          type: "multiple_choice",
          stem: "In the chain 'A drought killed the crops, so food ran short, which led people to leave the city,' which event is BOTH an effect AND a cause?",
          choices: [
            "The drought",
            "People leaving the city",
            "Food running short",
            "The city itself"
          ],
          answerIndex: 2,
          explanation: "Food running short is the EFFECT of the drought and the CAUSE of people leaving — a middle link in the chain.",
          hintLadder: [
            "Look for the middle link, not the first or last.",
            "Which event is caused by something AND causes something else?",
            "Food running short: caused by drought, causes the move."
          ]
        },
        {
          id: "g6.fall.hist.w7.d1.arena2",
          type: "short_answer",
          stem: "Real history events usually have more than one cause. Pick any event and name TWO different causes for it, then explain why naming only one would give an incomplete picture.",
          rubric: {
            level3: "Names a real event AND two distinct causes AND explains that single-cause thinking misses how history is multi-causal.",
            level2: "Names an event and two causes but the 'why incomplete' reasoning is thin.",
            level1: "Only one cause, or no real event."
          },
          exemplar: "The Dust Bowl had two causes: years of drought AND farming methods that stripped the soil. Naming only the drought would be incomplete, because the soil damage made the drought far more destructive.",
          hintLadder: [
            "Choose an event you've studied.",
            "Name two separate reasons it happened.",
            "Explain what you'd miss if you named only one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: The Wave Chain",
      prompt:
        "Do a one-person 'wave' chain: raise your right arm, then left, then stand on tiptoes, then sit — each move triggering the next in a smooth flow. Repeat 3 times, faster each round.",
      scienceTieIn: "Your motor neurons fire in sequence to chain these movements together — a real cause-and-effect chain happening inside your own body.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Trace a chain from your own week: what was the first cause, and how did it lead, link by link, to something that happened today?",
      badge: { id: "chain-tracker", name: "Chain Tracker", emoji: "⛓️" },
      estimatedMinutes: 7
    }
  }
};
