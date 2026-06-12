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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Pick Your Hemisphere",
      prompt:
        "Would you rather live in the Northern or Southern hemisphere? Whichever you pick, name one continent that's mostly in YOUR chosen hemisphere.",
      answer: "Northern examples: most of Asia, Europe, North America, and northern Africa. Southern examples: most of South America, Australia, Antarctica, and southern Africa.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Memory Map",
      challenge:
        "Create a memory tool to lock in the 7 continents and 5 oceans. Sketch a simple world map (it doesn't have to be perfect) and label every continent and ocean — then invent a mnemonic to remember them.",
      steps: [
        "Sketch a rough world map with all 7 continents.",
        "Label each continent and each of the 5 oceans.",
        "Mark the equator and prime meridian as crossing lines.",
        "Write a mnemonic sentence for the continents OR the oceans."
      ],
      deliverable: "A labeled world map with all 7 continents, 5 oceans, the equator and prime meridian, plus one mnemonic.",
      choiceBoard: [
        "Draw and label a full world map.",
        "Make flashcards with a mnemonic on the back.",
        "Build the map with cut-paper or salt-dough shapes."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Geography Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.world.w6.d2.arena1",
          type: "numeric",
          stem: "How many continents and oceans are there in total? (Add the number of continents to the number of oceans.)",
          answer: 12,
          tolerance: 0,
          explanation: "7 continents + 5 oceans = 12. Continents: Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, South America. Oceans: Arctic, Atlantic, Indian, Pacific, Southern.",
          hintLadder: [
            "How many continents are there?",
            "How many oceans are there?",
            "Add 7 + 5."
          ]
        },
        {
          id: "g6.world.w6.d2.arena2",
          type: "multiple_choice",
          stem: "Brazil is south of the equator and west of the prime meridian. Which hemispheres is it in?",
          choices: [
            "Northern + Eastern",
            "Northern + Western",
            "Southern + Eastern",
            "Southern + Western"
          ],
          answerIndex: 3,
          explanation: "South of the equator means Southern hemisphere; west of the prime meridian means Western hemisphere. So Brazil is Southern + Western.",
          hintLadder: [
            "South of the equator → which N/S hemisphere?",
            "West of the prime meridian → which E/W hemisphere?",
            "Southern + Western."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Compass Points",
      prompt:
        "Stand up and face north (your best guess!). Point and lean toward North, then East, then South, then West, calling each one out. Spin slowly through all four like a human compass.",
      scienceTieIn: "Moving your body through directions builds spatial memory in your brain, the same skill that helps you picture maps and locations without looking.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could place a pin anywhere on the world map, where would it go? Name the continent, the nearest ocean, and the hemispheres it's in.",
      badge: { id: "map-master", name: "Map Master", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
