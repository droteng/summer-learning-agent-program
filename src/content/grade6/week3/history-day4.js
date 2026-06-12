// Grade 6 History/Civics — Week 3, Day 4.
// Topic: telling history as a story (sequence, character, change).

export const grade6HistoryWeek3Day4 = {
  id: "g6.hist.w3.d4",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Telling history as a story",
  topicTag: "narrative-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.5.6-8", "C3.D2.His.16.6-8"],
  hook: "History is a true story made of choices, causes, and changes. Today you turn dates into a story you can tell.",
  miniLesson: [
    "Every historical story has people (characters), choices (decisions), and changes (results).",
    "Order matters. A timeline is the story's spine — the resolution always comes after the turning point.",
    "A 'turning point' is the moment something irreversible happens. Find it; the rest of the story orbits around it."
  ],
  workedExample: {
    prompt: "Turn this into a 3-sentence story: 1862 — Lincoln drafts the Emancipation Proclamation. 1863 — It takes effect. 1865 — The Civil War ends.",
    steps: [
      "Setup: in 1862, the Civil War was unresolved.",
      "Turning point: in 1863, Lincoln's Emancipation Proclamation took effect, redefining what the war was about.",
      "Result: by 1865, the war had ended and the nation began Reconstruction.",
      "Three sentences capture characters (Lincoln), choice (proclamation), and change (war's purpose, then its end)."
    ],
    answer: "Setup → turning point → result, in three sentences."
  },
  items: [
    {
      id: "g6.hist.w3.d4.q1",
      type: "multiple_choice",
      stem: "What's the role of a 'turning point' in a history story?",
      choices: [
        "It marks the beginning of the story.",
        "It's an irreversible moment that shapes everything after.",
        "It's the most boring part.",
        "It always happens first."
      ],
      answerIndex: 1,
      explanation: "Turning points are moments after which the rest of the story can't go back. They reshape what comes next.",
      hintLadder: [
        "What does 'turning point' mean in everyday language?",
        "It's a moment of irreversible change.",
        "After it, the story can't go back."
      ]
    },
    {
      id: "g6.hist.w3.d4.q2",
      type: "multiple_choice",
      stem: "Which of these is most clearly a TURNING POINT in a story?",
      choices: [
        "A leader is born.",
        "A treaty is signed that ends a long war.",
        "A document is filed in an archive.",
        "A meeting is scheduled."
      ],
      answerIndex: 1,
      explanation: "Signing a treaty that ends a war is irreversible and reshapes everything that follows.",
      hintLadder: [
        "Which option causes a major, lasting change?",
        "Skip routine events.",
        "A treaty ending a war is the biggest pivot."
      ]
    },
    {
      id: "g6.hist.w3.d4.q3",
      type: "multiple_choice",
      stem: "When telling a history story, what should come BEFORE the turning point?",
      choices: [
        "The aftermath",
        "The setup or rising tension",
        "Future predictions",
        "Other countries"
      ],
      answerIndex: 1,
      explanation: "Setup and rising tension explain why the turning point matters when it arrives.",
      hintLadder: [
        "Same shape as fiction: setup → conflict → resolution.",
        "Setup comes first.",
        "Rising tension builds toward the pivot."
      ]
    },
    {
      id: "g6.hist.w3.d4.q4",
      type: "multiple_choice",
      stem: "Which is the BEST opening for a history story about the moon landing?",
      choices: [
        "On July 20, 1969, two astronauts stepped onto the moon.",
        "By the late 1960s, the U.S. and Soviet Union had been racing to space for over a decade.",
        "Things happened in 1969.",
        "The moon is a satellite of Earth."
      ],
      answerIndex: 1,
      explanation: "Good openings establish setup. Naming the rivalry that led up to the landing makes the moment feel earned.",
      hintLadder: [
        "Which option gives context that makes the event matter?",
        "Skip openings that just state a fact.",
        "Setup explains why it was a big deal."
      ]
    },
    {
      id: "g6.hist.w3.d4.q5",
      type: "short_answer",
      stem:
        "Pick a small event from your week. Tell it as a 3-sentence history story: setup, turning point, result.",
      rubric: {
        level3: "Three sentences mapping clearly to setup / turning point / result, with the result connected to the turning point.",
        level2: "Three sentences but one part is unclear or unconnected.",
        level1: "Just narration without the three-part shape."
      },
      exemplar:
        "Setup: I'd been forgetting my water bottle at school all month. Turning point: on Tuesday I left a sticky note on my front door. Result: I haven't forgotten it once since.",
      hintLadder: [
        "Sentence 1: how things were before (setup).",
        "Sentence 2: the moment something changed (turning point).",
        "Sentence 3: what's different now (result)."
      ]
    }
  ],
  reflectionPrompt: "Today you told history as a story. Whose turning-point moment from real history would you most want to read more about?",
  misconceptionBank: [
    {
      id: "no-turning-point",
      label: "No clear turning point",
      description: "Lists events without identifying the irreversible moment that shaped the rest.",
      coachMove: "Ask: which moment, if removed, would change everything that comes after? That's the turning point."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Domino Moment",
      prompt:
        "Imagine a history timeline with 10 events. If you could remove just ONE event and everything after it would change completely, what do we call that one event?",
      answer: "A turning point! It's the irreversible moment the rest of the story orbits around — pull it out and the whole story changes.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: History as a 3-Act Story",
      challenge:
        "Pick a real historical event you know a little about (the moon landing, an invention, a discovery). Tell it as a 3-act story: the setup that built tension, the turning point, and the result that followed.",
      steps: [
        "Choose your event and find or recall two or three dates around it.",
        "Write the setup: what was happening that made this matter?",
        "Name the turning point: the irreversible moment.",
        "Write the result: what was different afterward, and how it connects to the turning point."
      ],
      deliverable: "A 3-act retelling (setup, turning point, result) of a real historical event.",
      choiceBoard: [
        "Write the 3-act history story.",
        "Draw a 3-panel timeline comic of the event.",
        "Record a 60-second 'history narrator' telling of your story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History Story Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.hist.w3.d4.arena1",
          type: "multiple_choice",
          stem: "Timeline: 1879 — Edison perfects a long-lasting light bulb. 1882 — His company wires the first power station in New York. 1900s — Cities glow at night and factories run after dark. Which event is the TURNING POINT?",
          choices: [
            "Cities glow at night in the 1900s.",
            "Edison perfects a long-lasting light bulb in 1879.",
            "Factories run after dark.",
            "The 1900s in general."
          ],
          answerIndex: 1,
          explanation: "Perfecting the long-lasting bulb is the irreversible moment that made everything after — power stations, glowing cities, night-shift factories — possible. The rest are results that orbit it.",
          hintLadder: [
            "The turning point comes before the results and makes them possible.",
            "The glowing cities and night factories are results — what change caused them?",
            "It's the 1879 light bulb breakthrough."
          ]
        },
        {
          id: "g6.hist.w3.d4.arena2",
          type: "short_answer",
          stem: "Take any real historical event you know and write a 3-sentence story: setup, turning point, and result. Make sure the result is clearly caused by the turning point.",
          rubric: {
            level3: "Three sentences mapping clearly to setup, turning point, and a result that plausibly follows from that turning point, about a real event.",
            level2: "Three parts present but one is unclear, or the result isn't clearly tied to the turning point.",
            level1: "Just listed facts or dates with no setup/turning-point/result shape."
          },
          exemplar: "Setup: By the 1950s, polio was paralyzing thousands of children every year. Turning point: In 1955, Jonas Salk's vaccine was proven to work and was released widely. Result: Within years, polio cases in the U.S. plummeted toward zero.",
          hintLadder: [
            "Sentence 1: how things were before (the setup).",
            "Sentence 2: the irreversible moment that changed things (turning point).",
            "Sentence 3: what was different afterward, clearly caused by sentence 2."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Timeline Walk",
      prompt:
        "Mark three spots on the floor: 'setup', 'turning point', 'result'. Walk slowly to the first, take a big decisive step to the second, then stride to the third. Feel the story move through space.",
      scienceTieIn: "Linking ideas to physical movement helps the brain remember their order — motion and memory work together, something you'll meet in the program's science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Whose turning-point moment from real history would you most want to read more about, and why does that moment matter?",
      badge: { id: "history-storyteller", name: "History Storyteller", emoji: "📜" },
      estimatedMinutes: 7
    }
  }
};
