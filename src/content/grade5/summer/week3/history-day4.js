// Grade 5 Summer History / Civics — Week 3 (Story Builders), Day 4.
// Grade-5 counterpart of g6.hist.w3.d4 (telling history as a story), pitched
// down: simpler examples, vocab support, step-by-step three-part frame.

export const summerG5HistoryW3D4 = {
  id: "g5.summer.hist.w3.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Telling history as a story",
  topicTag: "narrative-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.3-5", "C3.D2.His.16.3-5"],
  hook: "History is a true story made of people, choices, and changes. Today you turn dates into a story you can tell.",
  keyTerms: [
    { term: "Setup", definition: "How things were before -- the who, where, and when." },
    { term: "Turning point", definition: "The one big moment that changes everything after it." },
    { term: "Result", definition: "What was different afterward because of the turning point." }
  ],
  miniLesson: [
    "Every history story has people (the characters), choices (what they did), and changes (the results).",
    "Order matters. A timeline is the story's spine -- the result always comes after the turning point.",
    "A turning point is the one big moment that changes things for good. Find it, and the rest of the story circles around it."
  ],
  workedExample: {
    prompt: "Turn this into a 3-sentence story: 1862 -- Lincoln writes the Emancipation Proclamation. 1863 -- It takes effect. 1865 -- The Civil War ends.",
    steps: [
      "Setup: In 1862, the Civil War was still going and unfinished.",
      "Turning point: In 1863, Lincoln's Emancipation Proclamation took effect, changing what the war stood for.",
      "Result: By 1865, the war had ended and the country began to rebuild.",
      "Three sentences show the people (Lincoln), the choice (the proclamation), and the change (the war's meaning, then its end)."
    ],
    answer: "Setup, then turning point, then result -- in three sentences."
  },
  items: [
    {
      id: "g5.summer.hist.w3.d4.q1",
      type: "multiple_choice",
      stem: "What is the job of a turning point in a history story?",
      choices: [
        "It marks the very start of the story.",
        "It is a big moment that changes everything after it.",
        "It is the most boring part.",
        "It always happens first."
      ],
      answerIndex: 1,
      explanation: "A turning point is a moment after which the story cannot go back. It shapes what comes next.",
      hintLadder: [
        "What does turning point mean in everyday words?",
        "It is a big moment of change.",
        "After it, the story cannot go back to how it was."
      ]
    },
    {
      id: "g5.summer.hist.w3.d4.q2",
      type: "multiple_choice",
      stem: "Which one is most clearly a TURNING POINT in a story?",
      choices: [
        "A leader is born.",
        "A meeting is put on the calendar.",
        "A paper is filed away in a library.",
        "A treaty is signed that ends a long war."
      ],
      answerIndex: 3,
      explanation: "Signing a treaty that ends a war changes everything that follows and cannot be undone.",
      hintLadder: [
        "Which option causes a big, lasting change?",
        "Skip the small, everyday events.",
        "A treaty ending a war is the biggest change."
      ]
    },
    {
      id: "g5.summer.hist.w3.d4.q3",
      type: "short_answer",
      stem: "The turning point of the moon landing story is: In 1969, two astronauts walked on the moon. Write ONE setup sentence that could come BEFORE it -- something that shows why this moment mattered.",
      rubric: {
        level3: "One setup sentence that gives real background (like the space race or years of trying) and clearly leads up to the moon landing.",
        level2: "A sentence that gives some background but is vague or only loosely connects to the landing.",
        level1: "Restates the turning point, or gives no real setup."
      },
      exemplar: "By the late 1960s, the U.S. and the Soviet Union had been racing to reach space for over ten years.",
      hintLadder: [
        "The setup tells how things were BEFORE the big moment.",
        "Think about why landing on the moon was such a big deal (the space race).",
        "Write one sentence of background that leads up to 1969."
      ]
    },
    {
      id: "g5.summer.hist.w3.d4.q4",
      type: "multiple_choice",
      stem: "Which is the BEST opening for a history story about the moon landing?",
      choices: [
        "On July 20, 1969, two astronauts stepped onto the moon.",
        "Things happened in 1969.",
        "By the late 1960s, the U.S. and the Soviet Union had been racing to space for over ten years.",
        "The moon goes around the Earth."
      ],
      answerIndex: 2,
      explanation: "A good opening sets things up. Naming the space race that led to the landing makes the moment feel earned.",
      hintLadder: [
        "Which option gives background that makes the event matter?",
        "Skip openings that just state one plain fact.",
        "The setup explains why it was a big deal."
      ]
    },
    {
      id: "g5.summer.hist.w3.d4.q5",
      type: "short_answer",
      stem: "Pick a small event from your week. Tell it as a 3-sentence history story: one sentence for the setup, one for the turning point, and one for the result. You can use this frame: Setup: ___. Turning point: ___. Result: ___.",
      rubric: {
        level3: "Three sentences that clearly map to setup, turning point, and result, and the result connects to the turning point.",
        level2: "Three sentences, but one part is unclear or does not connect.",
        level1: "Just telling what happened, with no clear three-part shape."
      },
      exemplar: "Setup: I had been forgetting my water bottle at school all month. Turning point: On Tuesday I put a sticky note on my front door. Result: I have not forgotten it once since.",
      hintLadder: [
        "Sentence 1: how things were before (setup).",
        "Sentence 2: the one moment something changed (turning point).",
        "Sentence 3: what is different now (result)."
      ]
    }
  ],
  reflectionPrompt: "Today you told history as a story. Whose turning-point moment from real history would you most want to read more about?",
  misconceptionBank: [
    {
      id: "no-turning-point",
      label: "No clear turning point",
      description: "Lists events without pointing out the one big moment that shaped the rest.",
      coachMove: "Ask: which moment, if you took it out, would change everything after it? That is the turning point."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Domino Moment",
      prompt: "Imagine a history timeline with 10 events. If you could remove just ONE event and everything after it would change completely, what do we call that one event?",
      answer: "A turning point! It is the big moment the rest of the story circles around -- pull it out and the whole story changes.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: History as a 3-Part Story",
      challenge: "Pick a real historical event you know a little about (the moon landing, an invention, a discovery). Tell it as a 3-part story: the setup that built up, the turning point, and the result that followed.",
      steps: [
        "Choose your event and find or recall two or three dates around it.",
        "Write the setup: what was happening that made this matter?",
        "Name the turning point: the one big moment that changed things.",
        "Write the result: what was different afterward, and how it connects to the turning point."
      ],
      deliverable: "A 3-part retelling (setup, turning point, result) of a real historical event.",
      choiceBoard: [
        "Write the 3-part history story.",
        "Draw a 3-panel timeline comic of the event.",
        "Record a 60-second history-narrator telling of your story."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History Story Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w3.d4.arena1",
          type: "multiple_choice",
          stem: "Timeline: 1879 -- Edison makes a light bulb that lasts a long time. 1882 -- His company wires the first power station in New York. 1900s -- Cities glow at night and factories run after dark. Which event is the TURNING POINT?",
          choices: [
            "Edison makes a long-lasting light bulb in 1879.",
            "Cities glow at night in the 1900s.",
            "Factories run after dark.",
            "The 1900s in general."
          ],
          answerIndex: 0,
          explanation: "Making the long-lasting bulb is the big moment that made everything after -- power stations, glowing cities, night-shift factories -- possible. The rest are results that circle around it.",
          hintLadder: [
            "The turning point comes before the results and makes them possible.",
            "The glowing cities and night factories are results -- what change caused them?",
            "It is the 1879 light bulb breakthrough."
          ]
        },
        {
          id: "g5.summer.hist.w3.d4.arena2",
          type: "short_answer",
          stem: "Pick any real historical event you know and write a 3-sentence story: setup, turning point, and result. Make sure the result is clearly caused by the turning point.",
          rubric: {
            level3: "Three sentences that clearly show setup, turning point, and a result that clearly follows from that turning point, about a real event.",
            level2: "Three parts are there, but one is unclear, or the result is not clearly tied to the turning point.",
            level1: "Just a list of facts or dates with no setup, turning point, and result shape."
          },
          exemplar: "Setup: By the 1950s, polio was making thousands of children sick every year. Turning point: In 1955, Jonas Salk's vaccine was shown to work and was given out widely. Result: Within a few years, polio cases in the U.S. dropped toward zero.",
          hintLadder: [
            "Sentence 1: how things were before (the setup).",
            "Sentence 2: the big moment that changed things (turning point).",
            "Sentence 3: what was different afterward, clearly caused by sentence 2."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Timeline Walk",
      prompt: "Mark three spots on the floor: setup, turning point, result. Walk slowly to the first, take one big, sure step to the second, then stride to the third. Feel the story move through space.",
      scienceTieIn: "Linking ideas to movement helps the brain remember their order -- motion and memory work together, something you will meet in the program's science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt: "Whose turning-point moment from real history would you most want to read more about, and why does that moment matter?",
      badge: { id: "g5-summer-history-storyteller", name: "History Storyteller", emoji: "📜" },
      estimatedMinutes: 7
    }
  }
};
