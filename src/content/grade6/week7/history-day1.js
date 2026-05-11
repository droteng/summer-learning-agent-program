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
  estimatedMinutes: 18,
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
  ]
};
