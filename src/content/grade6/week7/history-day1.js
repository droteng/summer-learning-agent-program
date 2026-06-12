// Grade 6 History — Week 7 (History Missions), Day 1.
// Topic: ancient civilizations.

export const grade6HistoryWeek7Day1 = {
  id: "g6.hist.w7.d1",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "Ancient civilizations",
  topicTag: "ancient-civilizations",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.6-8", "C3.D2.His.3.6-8"],
  hook: "Cities thousands of years old still shape how we live. Today you connect four ancient civilizations to ideas you use right now.",
  miniLesson: [
    "Civilizations cluster around water and farmable land. The four 'river valley' civilizations — Mesopotamia, Egypt, Indus Valley, Ancient China — all rose along major rivers.",
    "Writing systems let knowledge survive past one lifetime. Cuneiform (Mesopotamia), hieroglyphs (Egypt), Indus script, oracle bone characters (China).",
    "Inventions that last: irrigation, the wheel, written law, paper, the compass, calendars — all from ancient civilizations."
  ],
  workedExample: {
    prompt:
      "Why did the first big cities form along rivers like the Nile and the Tigris-Euphrates?",
    steps: [
      "Rivers provided drinking water and fish.",
      "Annual flooding refreshed farm soil — letting fields produce surplus food.",
      "Surplus food let some people stop farming and do other jobs (priest, builder, scribe).",
      "Specialization → cities → civilization."
    ],
    answer: "Water + flood-fed soil → surplus food → specialization → cities."
  },
  items: [
    {
      id: "g6.hist.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which river is paired with the WRONG civilization?",
      choices: [
        "Mesopotamia — Tigris and Euphrates",
        "Egypt — Nile",
        "Indus Valley — Indus",
        "Ancient China — Amazon"
      ],
      answerIndex: 3,
      explanation: "The Amazon is in South America. Ancient China's river civilization rose along the Yellow River (Huang He).",
      hintLadder: [
        "Three are right; one swaps continents.",
        "Where's the Amazon?",
        "China is in Asia, not South America."
      ]
    },
    {
      id: "g6.hist.w7.d1.q2",
      type: "multiple_choice",
      stem: "Which ancient writing system was Egypt's?",
      choices: ["Cuneiform", "Hieroglyphs", "Oracle bone characters", "Indus script"],
      answerIndex: 1,
      explanation: "Hieroglyphs are the picture-based Egyptian writing system found on temple walls and papyrus.",
      hintLadder: [
        "Picture-writing.",
        "On temple walls.",
        "Hieroglyphs."
      ]
    },
    {
      id: "g6.hist.w7.d1.q3",
      type: "multiple_choice",
      stem:
        "Why was surplus food so important for the rise of cities?",
      choices: [
        "Surplus food makes people taller.",
        "It let some people stop farming and specialize in other work.",
        "It tastes better.",
        "It made farmers richer than everyone else."
      ],
      answerIndex: 1,
      explanation: "When everyone has to farm, no one can be a full-time priest, builder, or scribe. Surplus frees up labor for specialization.",
      hintLadder: [
        "If everyone farms, who builds?",
        "Surplus frees up time.",
        "Specialization is the answer."
      ],
      misconceptionsTargeted: ["thinks-cities-came-first"]
    },
    {
      id: "g6.hist.w7.d1.q4",
      type: "multiple_choice",
      stem: "Which is NOT a lasting invention from ancient civilizations?",
      choices: [
        "The wheel.",
        "Written law codes.",
        "The internet.",
        "Irrigation."
      ],
      answerIndex: 2,
      explanation: "The internet is from the late 20th century. The other three are ancient and still in use.",
      hintLadder: [
        "Three are thousands of years old.",
        "One is modern.",
        "Internet is the outlier."
      ]
    },
    {
      id: "g6.hist.w7.d1.q5",
      type: "short_answer",
      stem:
        "Pick one thing you used today (a calendar, a written word, a road). Trace it back to one ancient civilization that helped invent it.",
      rubric: {
        level3: "Specific modern item + specific ancient civilization + clear connection.",
        level2: "Has the item and civilization but the connection is vague.",
        level1: "Just an item or just a civilization, no clear link."
      },
      exemplar:
        "I used a 7-day calendar today. The 7-day week comes from ancient Mesopotamia (Babylon), where it was set centuries before Rome adopted it.",
      hintLadder: [
        "Pick a small modern thing.",
        "Where did it start?",
        "Connect to a specific ancient civilization."
      ]
    }
  ],
  reflectionPrompt: "Today you traced ancient roots. What's something around you that probably has roots older than you'd guessed?",
  misconceptionBank: [
    {
      id: "thinks-cities-came-first",
      label: "Assumes cities preceded farming",
      description: "Pictures ancient cities first, then farming around them — backwards.",
      coachMove: "Farming surplus → specialization → cities. Cities are a downstream effect of food security."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Older Than You Think",
      prompt:
        "I have 7 days, I help you know when your weekend starts, and I'm thousands of years old — older than Rome. What am I?",
      answer: "The 7-day week! It traces back to ancient Mesopotamia (Babylon), long before the Roman calendar — you still use it every single week.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent-a-Civilization",
      challenge:
        "Design your own river-valley civilization. Give it a river, a writing system, and one lasting invention — just like the four real ones you studied.",
      steps: [
        "Name your civilization and the river it grows along, then explain why that river helps it thrive.",
        "Invent a simple writing system — draw 3 symbols and say what each one means.",
        "Design one invention that solves a real problem (storing food, moving water, telling time).",
        "Write one sentence on how a kid today might still use a version of your invention."
      ],
      deliverable: "A one-page civilization profile: river, 3 writing symbols, and one labeled invention.",
      choiceBoard: [
        "Draw a map of your civilization along its river.",
        "Design the 3-symbol writing system in detail.",
        "Sketch and label your lasting invention."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ancient Civilizations Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.hist.w7.d1.arena1",
          type: "multiple_choice",
          stem: "Ancient China's river-valley civilization rose along which river?",
          choices: [
            "The Nile",
            "The Yellow River (Huang He)",
            "The Tigris",
            "The Indus"
          ],
          answerIndex: 1,
          explanation: "Ancient Chinese civilization grew along the Yellow River (Huang He). The Nile is Egypt's, the Tigris is Mesopotamia's, and the Indus belongs to the Indus Valley.",
          hintLadder: [
            "It's named for a color.",
            "It's in Asia, not Africa or the Middle East.",
            "The Yellow River, the Huang He."
          ]
        },
        {
          id: "g6.hist.w7.d1.arena2",
          type: "short_answer",
          stem: "Explain in 2-3 sentences the chain that connects a flooding river to the rise of a city. Use the idea of surplus food.",
          rubric: {
            level3: "Clear chain: river flooding refreshes soil → surplus food → some people stop farming and specialize → cities form. All links present and in order.",
            level2: "Mentions surplus and cities but skips or scrambles a link.",
            level1: "Just says rivers help cities without the surplus/specialization chain."
          },
          exemplar: "When a river floods, it leaves rich soil that grows extra food. With surplus food, not everyone has to farm, so some people become builders, priests, or scribes. That specialization is what lets a city grow.",
          hintLadder: [
            "Start with what flooding does to the soil.",
            "Extra food means not everyone has to farm — then what?",
            "Specialization (new jobs) leads to cities."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: River Flow Stretch",
      prompt:
        "Stand and 'flow' like a river: sway your arms slowly side to side, then ripple your fingers down like flowing water, then reach up tall like a growing city. Repeat 4 times, slow and smooth.",
      scienceTieIn: "Moving water carved the valleys these civilizations grew in — and gentle movement gets oxygen-rich blood flowing to your brain, which you'll learn about in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one ancient invention from today (writing, the wheel, irrigation, the calendar). How would your day be different if it had never been invented?",
      badge: { id: "ancient-architect", name: "Ancient Architect", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
