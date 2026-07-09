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
  estimatedMinutes: 60, // full Daily Hour
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
        "the second is older",
        "they are unrelated",
        "the first event led to (caused) the second"
      ],
      answerIndex: 3,
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
        "the event had two effects",
        "the event had two causes",
        "the map is wrong",
        "the event never happened"
      ],
      answerIndex: 1,
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
        "Labeling arrows with a short 'why' for each link",
        "Bright colors",
        "Using many boxes",
        "Making it large"
      ],
      answerIndex: 0,
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Arrows In, Arrows Out",
      prompt:
        "On a cause-effect map, one box has THREE arrows pointing into it and ONE arrow pointing out. In plain words, what does that box represent in the story?",
      answer:
        "It's an event with three causes that, together, led to one result. Three arrows in = three causes; one arrow out = one effect it triggered.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Cause-Effect Map",
      challenge:
        "Build your week's capstone map: pick a historical chain and diagram it as labeled boxes and arrows, including at least one event that has two causes OR two effects.",
      steps: [
        "Choose your chain and list the events as boxes.",
        "Connect them with arrows meaning 'led to,' in time order.",
        "Add at least one branch: a box with two arrows in (two causes) or two arrows out (two effects).",
        "Label each arrow with a short 'why' so the map explains, not just shows."
      ],
      deliverable: "A labeled cause-and-effect map with at least one branching event and 'why' labels on the arrows.",
      choiceBoard: [
        "Draw the map by hand with boxes, arrows, and labels.",
        "Build it digitally as connected shapes.",
        "Make it a wall display with sticky notes and yarn for the arrows."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause-Map Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.hist.w7.d5.arena1",
          type: "multiple_choice",
          stem: "On a cause-effect map, an event box has TWO arrows pointing OUT of it. What does that show?",
          choices: [
            "The event had two causes",
            "The map is drawn incorrectly",
            "The event led to two different effects",
            "The two boxes happened at the same time"
          ],
          answerIndex: 2,
          explanation: "Arrows OUT point to effects, so two arrows out means the event caused two different results.",
          hintLadder: [
            "Arrows OUT lead to effects.",
            "Two arrows out = how many effects?",
            "Two effects."
          ]
        },
        {
          id: "g6.fall.hist.w7.d5.arena2",
          type: "short_answer",
          stem: "In a cause-effect map, explain how removing ONE pivotal box could break the whole chain. Use a specific example and describe what downstream events would disappear.",
          rubric: {
            level3: "Identifies a pivotal box AND explains, with a specific chain, which downstream events would vanish if it were removed.",
            level2: "Names a pivotal box but the downstream reasoning is thin.",
            level1: "No clear pivotal box or no downstream reasoning."
          },
          exemplar: "In farming → surplus → cities → writing, removing 'surplus' breaks the chain: without stored extra food, people couldn't settle, so cities never form and writing — which grew from city record-keeping — never develops.",
          hintLadder: [
            "Pick the box the most others depend on.",
            "Imagine erasing it from the map.",
            "Which later boxes lose their cause and disappear?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Connect the Boxes",
      prompt:
        "Place 4 spots around the room as 'event boxes.' Walk an arrow-path between them in cause-and-effect order, pausing at each to say its event aloud. Then walk a branching path to a fifth spot.",
      scienceTieIn: "Moving through space while recalling a sequence uses your brain's spatial memory, making the order of events stick far better than reading alone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Beyond history, where could a cause-and-effect map help you — planning a project, solving a problem, or understanding a decision? Sketch one box and arrow.",
      badge: { id: "cause-map-architect", name: "Cause-Map Architect", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
