// Grade 6 World — Week 6, Day 2.
// Topic: geography fundamentals — continents, oceans, hemispheres.

export const grade6WorldWeek6Day2 = {
  id: "g6.world.w6.d2",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 2,
  subject: "World/Current Affairs",
  topic: "Geography fundamentals",
  topicTag: "geography",
  estimatedMinutes: 16,
  standardsRefs: ["C3.D2.Geo.1.6-8", "C3.D2.Geo.2.6-8"],
  hook: "You can't follow world news without a map. Today you lock in continents, oceans, hemispheres, and key locations.",
  miniLesson: [
    "Seven continents: Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, South America.",
    "Five oceans: Arctic, Atlantic, Indian, Pacific, Southern.",
    "Hemispheres: equator splits north/south; prime meridian splits east/west."
  ],
  workedExample: {
    prompt: "Egypt is in which continent, and in which hemispheres?",
    steps: [
      "Egypt is in north-east Africa.",
      "North of the equator → Northern hemisphere.",
      "East of the prime meridian → Eastern hemisphere.",
      "Answer: Africa, Northern + Eastern hemispheres."
    ],
    answer: "Africa; Northern and Eastern hemispheres."
  },
  items: [
    {
      id: "g6.world.w6.d2.q1",
      type: "multiple_choice",
      stem: "How many continents are there?",
      choices: ["5", "6", "7", "8"],
      answerIndex: 2,
      explanation: "Seven: Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, South America.",
      hintLadder: [
        "Count: Africa, Antarctica, Asia, Australia, Europe, N. America, S. America.",
        "How many is that?",
        "Seven."
      ]
    },
    {
      id: "g6.world.w6.d2.q2",
      type: "multiple_choice",
      stem: "Which is the largest ocean by area?",
      choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answerIndex: 2,
      explanation: "The Pacific covers about a third of Earth's surface — larger than all the continents combined.",
      hintLadder: [
        "Picture a globe.",
        "Which ocean separates Asia from the Americas?",
        "The Pacific is largest."
      ]
    },
    {
      id: "g6.world.w6.d2.q3",
      type: "multiple_choice",
      stem: "Australia is in which hemisphere(s)?",
      choices: [
        "Northern + Western",
        "Northern + Eastern",
        "Southern + Western",
        "Southern + Eastern"
      ],
      answerIndex: 3,
      explanation: "Australia is below the equator (Southern) and east of the prime meridian (Eastern).",
      hintLadder: [
        "Is Australia above or below the equator?",
        "Is it east or west of the UK?",
        "Below + east → Southern + Eastern."
      ],
      misconceptionsTargeted: ["mixes-hemispheres"]
    },
    {
      id: "g6.world.w6.d2.q4",
      type: "multiple_choice",
      stem: "The Sahara desert is on which continent?",
      choices: ["Asia", "Africa", "Australia", "South America"],
      answerIndex: 1,
      explanation: "The Sahara is the world's largest hot desert, stretching across northern Africa.",
      hintLadder: [
        "The Sahara is in the north of one continent.",
        "It covers most of one continent's northern third.",
        "Northern Africa."
      ]
    },
    {
      id: "g6.world.w6.d2.q5",
      type: "short_answer",
      stem:
        "Pick a country you'd want to learn about. Name its continent and at least one neighbor.",
      rubric: {
        level3: "Specific country, correct continent, correctly named neighboring country.",
        level2: "Correct continent but unclear or incorrect neighbor.",
        level1: "Vague or wrong country/continent pairing."
      },
      exemplar: "Country: Kenya. Continent: Africa. Neighbors include Tanzania, Uganda, Ethiopia, Somalia.",
      hintLadder: [
        "Pick a country and find it on a map.",
        "What continent surrounds it?",
        "Look at borders for a neighbor."
      ]
    }
  ],
  reflectionPrompt: "Today you mapped the world. What's a region you'd love to visit and why?",
  misconceptionBank: [
    {
      id: "mixes-hemispheres",
      label: "Mixes up the hemispheres",
      description: "Says a southern-hemisphere country is in the northern, or east/west.",
      coachMove: "Use the equator and prime meridian as anchors. Anything below equator = southern; anything east of UK = eastern."
    }
  ]
};
