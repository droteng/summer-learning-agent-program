// Grade 6 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 5. Topic: build your cause-and-effect map. Week capstone.

export const fallG6HistoryW7D5 = {
  id: "g6.fall.hist.w7.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Build a cause-and-effect map",
  topicTag: "cause-effect-map",
  estimatedMinutes: 18,
  standardsRefs: ["C3.D2.His.14", "C3.D2.His.16"],
  hook: "This week's project is a cause-and-effect map: pick a historical chain and diagram how each event led to the next. Today you put the skills together.",
  miniLesson: [
    "A cause-effect map shows events as boxes connected by arrows; each arrow means 'led to.'",
    "Strong maps show that some events have multiple causes (arrows in) and multiple effects (arrows out).",
    "Label arrows with a short why when you can — it turns a diagram into an explanation."
  ],
  workedExample: {
    prompt: "Map this chain: invention of farming → food surplus → cities → writing.",
    steps: [
      "Draw four boxes in order.",
      "Connect each with an arrow meaning 'led to.'",
      "Add a why on an arrow: 'surplus → cities (people could settle in one place).'",
      "The map now both shows and explains the chain."
    ],
    answer: "farming → surplus → cities → writing, with arrows labeled by why."
  },
  items: [
    {
      id: "g6.fall.hist.w7.d5.q1",
      type: "multiple_choice",
      stem: "On a cause-and-effect map, an arrow between two boxes means...",
      choices: [
        "they happened on the same day",
        "the first event led to (caused) the second",
        "they are unrelated",
        "the second is older"
      ],
      answerIndex: 1,
      explanation: "Arrows show direction of causation: the first led to the second.",
      hintLadder: [
        "Arrows show direction.",
        "From cause to...?",
        "To its effect — 'led to.'"
      ]
    },
    {
      id: "g6.fall.hist.w7.d5.q2",
      type: "multiple_choice",
      stem: "If an event box has TWO arrows pointing INTO it, that shows...",
      choices: [
        "the event had two causes",
        "the event had two effects",
        "the map is wrong",
        "the event never happened"
      ],
      answerIndex: 0,
      explanation: "Arrows in = causes; two arrows in means two causes contributed to that event.",
      hintLadder: [
        "Arrows IN come from causes.",
        "Two arrows in = how many causes?",
        "Two causes."
      ],
      misconceptionsTargeted: ["arrows-only-one-direction"]
    },
    {
      id: "g6.fall.hist.w7.d5.q3",
      type: "multiple_choice",
      stem: "What makes a cause-effect map an EXPLANATION, not just a diagram?",
      choices: [
        "Bright colors",
        "Labeling arrows with a short 'why' for each link",
        "Using many boxes",
        "Making it large"
      ],
      answerIndex: 1,
      explanation: "Labeling each arrow with the reason turns connections into explanations.",
      hintLadder: [
        "A diagram shows; an explanation tells why.",
        "What could you add to each arrow?",
        "A short 'why.'"
      ]
    },
    {
      id: "g6.fall.hist.w7.d5.q4",
      type: "short_answer",
      stem: "Outline a 3- or 4-box cause-and-effect map for a topic of your choice. List the boxes in order and one arrow label (why).",
      rubric: {
        level3: "3–4 ordered events that causally connect AND at least one arrow labeled with a clear 'why.'",
        level2: "Has the boxes but connections or the why are weak.",
        level1: "Boxes don't form a causal chain."
      },
      exemplar: "Boxes: heavy rain → river flooded → road washed out → school closed. Arrow label: 'river flooded → road washed out (water broke the road surface).'",
      hintLadder: [
        "Pick a chain you understand.",
        "List 3–4 events in order.",
        "Explain one arrow's why."
      ]
    },
    {
      id: "g6.fall.hist.w7.d5.q5",
      type: "short_answer",
      stem: "Capstone reflection: in your cause-effect map this week, which single event was the most important link, and what would change if you removed it?",
      rubric: {
        level3: "Identifies a pivotal event AND explains how removing it would break or redirect the chain.",
        level2: "Names an event but the 'what changes' is thin.",
        level1: "No clear pivotal event or reasoning."
      },
      exemplar: "The most important link was the food surplus — without it, people couldn't have settled in one place, so the cities and writing that followed would never have developed.",
      hintLadder: [
        "Which box does the most other boxes depend on?",
        "Imagine deleting it.",
        "What downstream events would vanish?"
      ]
    }
  ],
  reflectionPrompt: "Cause-effect maps help in science and decision-making too. Where else could mapping causes and effects help you understand something?",
  misconceptionBank: [
    {
      id: "arrows-only-one-direction",
      label: "Thinks each event has only one cause and one effect",
      description: "Draws single in/out arrows, missing that events can have several causes and effects.",
      coachMove: "Encourage multiple arrows: ask 'what else caused this?' and 'what else did this cause?'"
    }
  ]
};
