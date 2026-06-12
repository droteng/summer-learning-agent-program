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
  estimatedMinutes: 17,
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
      choices: ["because", "as a result", "since", "due to"],
      answerIndex: 1,
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
      choices: ["Heavy rains", "The fields", "The harvest failed", "The season"],
      answerIndex: 2,
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
  ]
};
