// Grade 5 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 5. Grade 5 counterpart of g6.fall.hist.w7.d5. Same topic
// (build a cause-and-effect map — week capstone) pitched down to Grade 5:
// simpler chains, concrete examples, and extra scaffolding.

export const fallG5HistoryW7D5 = {
  id: "g5.fall.hist.w7.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Build a cause-and-effect map",
  topicTag: "cause-effect-map",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.3-5", "C3.D2.His.16.3-5"],
  hook: "This week's project is a cause-and-effect map: pick a chain of events and draw how each one led to the next. Today you put all your skills together.",
  miniLesson: [
    "A cause-effect map shows events as BOXES connected by ARROWS. Each arrow means 'led to.'",
    "Strong maps show that some events have more than one cause (two arrows pointing IN) or more than one effect (two arrows pointing OUT).",
    "When you can, write a short 'why' on an arrow. That turns a drawing into an explanation."
  ],
  workedExample: {
    prompt: "Map this chain: big harvest → extra food → village festival.",
    steps: [
      "Draw three boxes in order.",
      "Connect them with arrows meaning 'led to.'",
      "Add a why on an arrow: 'big harvest → extra food (there was more than people needed).'",
      "Now the map both shows AND explains the chain."
    ],
    answer: "big harvest → extra food → village festival, with a 'why' on an arrow."
  },
  items: [
    {
      id: "g5.fall.hist.w7.d5.q1",
      type: "multiple_choice",
      stem: "On a cause-and-effect map, an arrow between two boxes means...",
      choices: [
        "the first event led to (caused) the second",
        "they happened on the same day",
        "they are not related",
        "the second one is older"
      ],
      answerIndex: 0,
      explanation: "Arrows show direction: the first event led to the second.",
      hintLadder: [
        "Arrows point in a direction.",
        "They go from the cause to the...?",
        "To its effect — 'led to.'"
      ]
    },
    {
      id: "g5.fall.hist.w7.d5.q2",
      type: "multiple_choice",
      stem: "If a box has TWO arrows pointing INTO it, that shows the event had...",
      choices: [
        "no cause at all",
        "two effects",
        "two causes",
        "a mistake in the map"
      ],
      answerIndex: 2,
      explanation: "Arrows pointing IN come from causes. Two arrows in means two causes led to that event.",
      hintLadder: [
        "Arrows pointing IN come from causes.",
        "Two arrows in means how many causes?",
        "Two causes."
      ],
      misconceptionsTargeted: ["only-one-cause-one-effect"]
    },
    {
      id: "g5.fall.hist.w7.d5.q3",
      type: "multiple_choice",
      stem: "What turns a cause-effect map into an EXPLANATION, not just a drawing?",
      choices: [
        "Bright colors",
        "Writing a short 'why' on each arrow",
        "Using lots of boxes",
        "Making it really big"
      ],
      answerIndex: 1,
      explanation: "Writing the reason on each arrow tells why the events connect — that's an explanation.",
      hintLadder: [
        "A drawing shows; an explanation tells WHY.",
        "What could you add to each arrow?",
        "A short 'why.'"
      ]
    },
    {
      id: "g5.fall.hist.w7.d5.q4",
      type: "short_answer",
      stem: "Plan a 3- or 4-box cause-and-effect map about a topic you choose. List the boxes in order, and write one arrow's 'why.'",
      rubric: {
        level3: "3–4 events in order that connect as causes and effects AND one arrow with a clear 'why.'",
        level2: "Has the boxes, but the connections or the 'why' are weak.",
        level1: "Boxes don't connect as a chain."
      },
      exemplar: "Boxes: heavy rain → river filled up → road flooded → school closed. Arrow 'why': 'river filled up → road flooded (the water spilled over onto the road).'",
      hintLadder: [
        "Pick a chain you understand.",
        "List 3 or 4 events in order.",
        "Write the 'why' for one arrow."
      ]
    },
    {
      id: "g5.fall.hist.w7.d5.q5",
      type: "short_answer",
      stem: "Capstone reflection: in your cause-effect map this week, which one event was the most important link, and what would change if you took it away?",
      rubric: {
        level3: "Names an important event AND explains how taking it away would break or change the chain.",
        level2: "Names an event but the 'what changes' is thin.",
        level1: "No clear important event or reasoning."
      },
      exemplar: "The most important link was the extra food. Without it, the village would have had nothing to share, so there would have been no festival at the end of the chain.",
      hintLadder: [
        "Which box do the most other boxes depend on?",
        "Imagine erasing it from the map.",
        "Which later events would disappear?"
      ]
    }
  ],
  reflectionPrompt: "Cause-effect maps help in science and in making choices too. Where else could mapping causes and effects help you understand something?",
  misconceptionBank: [
    {
      id: "only-one-cause-one-effect",
      label: "Thinks each event has only one cause and one effect",
      description: "Draws just one arrow in and one arrow out, missing that events can have several causes and effects.",
      coachMove: "Ask 'what else caused this?' and 'what else did this cause?' to add more arrows."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Arrows In, Arrows Out",
      prompt:
        "On a cause-effect map, one box has TWO arrows pointing into it and ONE arrow pointing out. In your own words, what does that box mean in the story?",
      answer:
        "It's an event with two causes that together led to one result. Two arrows in = two causes; one arrow out = the one effect it caused.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Cause-Effect Map",
      challenge:
        "Build your week's capstone map: pick a chain of events and draw it as labeled boxes and arrows. Include at least one event that has two causes OR two effects.",
      steps: [
        "Choose your chain and list the events as boxes.",
        "Connect them with arrows meaning 'led to,' in time order.",
        "Add one branch: a box with two arrows in (two causes) or two arrows out (two effects).",
        "Write a short 'why' on each arrow so the map explains, not just shows."
      ],
      deliverable: "A labeled cause-and-effect map with at least one branching event and a 'why' on each arrow.",
      choiceBoard: [
        "Draw the map by hand with boxes, arrows, and labels.",
        "Build it on a computer as connected shapes.",
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
          id: "g5.fall.hist.w7.d5.arena1",
          type: "multiple_choice",
          stem: "On a cause-effect map, a box has TWO arrows pointing OUT of it. What does that show?",
          choices: [
            "The event had two causes",
            "The two boxes happened at the same time",
            "The map is drawn wrong",
            "The event led to two different effects"
          ],
          answerIndex: 3,
          explanation: "Arrows OUT point to effects, so two arrows out means the event led to two different results.",
          hintLadder: [
            "Arrows OUT point to effects.",
            "Two arrows out means how many effects?",
            "Two effects."
          ]
        },
        {
          id: "g5.fall.hist.w7.d5.arena2",
          type: "short_answer",
          stem: "In a cause-effect map, explain how taking away ONE important box could break the whole chain. Use a specific example and tell which later events would disappear.",
          rubric: {
            level3: "Names an important box AND explains, with a specific chain, which later events would disappear if it were removed.",
            level2: "Names an important box but the 'what disappears' reasoning is thin.",
            level1: "No clear box or no reasoning."
          },
          exemplar: "In big harvest → extra food → village festival, taking away 'extra food' breaks the chain: with no extra food to share, the village would have nothing to celebrate, so the festival would never happen.",
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
        "Put 4 spots around the room as 'event boxes.' Walk the arrow-path between them in cause-and-effect order, pausing at each to say its event out loud. Then walk a branch path to a fifth spot.",
      scienceTieIn: "Moving through space while you say a sequence uses your brain's map-memory, so the order of events sticks much better than just reading.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Besides history, where could a cause-and-effect map help you — planning a project, solving a problem, or making a choice? Sketch one box and one arrow.",
      badge: { id: "g5-fall-cause-map-architect", name: "Cause-Map Architect", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
