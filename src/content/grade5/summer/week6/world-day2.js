// Grade 5 Summer World/Current Affairs — Week 6 (World Affairs for Kids), Day 2.
// Grade-5 counterpart of g6.world.w6.d2 (geography fundamentals), pitched down one
// level: vocab support, concrete anchors (equator, prime meridian), simpler numbers.

export const summerG5WorldW6D2 = {
  id: "g5.summer.world.w6.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 2,
  subject: "World/Current Affairs",
  topic: "Geography fundamentals",
  topicTag: "geography",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.1.3-5", "C3.D2.Geo.2.3-5"],
  hook: "You can't follow world news without a map! Today you lock in the 7 continents, 5 oceans, and the two lines that split the Earth.",
  keyTerms: [
    { term: "Continent", definition: "One of the seven huge areas of land on Earth, like Africa or Asia." },
    { term: "Equator", definition: "An imaginary line around the middle of the Earth. Above it is north; below it is south." },
    { term: "Prime meridian", definition: "An imaginary line from top to bottom of the Earth. To its east is east; to its west is west." }
  ],
  miniLesson: [
    "There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.",
    "There are 5 oceans: Arctic, Atlantic, Indian, Pacific, and Southern.",
    "Two lines split the Earth: the equator splits north from south, and the prime meridian splits east from west."
  ],
  workedExample: {
    prompt: "Egypt is on which continent, and in which hemispheres (halves)?",
    steps: [
      "Egypt is in the northeast part of Africa.",
      "It is above the equator, so it is in the Northern half.",
      "It is east of the prime meridian, so it is in the Eastern half.",
      "Answer: Africa, Northern + Eastern halves."
    ],
    answer: "Africa; Northern and Eastern hemispheres (halves)."
  },
  items: [
    {
      id: "g5.summer.world.w6.d2.q1",
      type: "multiple_choice",
      stem: "How many continents are there?",
      choices: ["5", "6", "8", "7"],
      answerIndex: 3,
      explanation: "There are 7: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.",
      hintLadder: [
        "Count them: Africa, Antarctica, Asia, Australia, Europe, N. America, S. America.",
        "How many did you count?",
        "The answer is 7."
      ]
    },
    {
      id: "g5.summer.world.w6.d2.q2",
      type: "multiple_choice",
      stem: "Which ocean is the LARGEST?",
      choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answerIndex: 1,
      explanation: "The Pacific is the biggest ocean. It covers about one third of the whole Earth.",
      hintLadder: [
        "Picture a globe.",
        "Which ocean sits between Asia and the Americas?",
        "The Pacific is the largest."
      ]
    },
    {
      id: "g5.summer.world.w6.d2.q3",
      type: "multiple_choice",
      stem: "Australia is below the equator and east of the prime meridian. Which halves is it in?",
      choices: [
        "Southern + Eastern",
        "Northern + Eastern",
        "Southern + Western",
        "Northern + Western"
      ],
      answerIndex: 0,
      explanation: "Below the equator means Southern. East of the prime meridian means Eastern. So Australia is Southern + Eastern.",
      hintLadder: [
        "Below the equator is which half, north or south?",
        "East of the prime meridian is which half, east or west?",
        "Below + east = Southern + Eastern."
      ],
      misconceptionsTargeted: ["mixes-hemispheres-g5"]
    },
    {
      id: "g5.summer.world.w6.d2.q4",
      type: "short_answer",
      stem:
        "The Sahara is the world's largest hot desert. Name the continent it is on, and name one continent that touches the Atlantic Ocean.",
      rubric: {
        level3: "Correctly says the Sahara is in Africa AND names a continent that borders the Atlantic (e.g., Africa, Europe, North America, or South America).",
        level2: "Gets the Sahara's continent right but the Atlantic continent is unclear or wrong, or vice versa.",
        level1: "Both parts wrong or missing."
      },
      exemplar:
        "The Sahara is on the continent of Africa. South America is one continent that touches the Atlantic Ocean.",
      hintLadder: [
        "The Sahara is in the north of one continent.",
        "That continent's top part is mostly desert — it is Africa.",
        "For the Atlantic, picture which continents have a coast on it."
      ]
    },
    {
      id: "g5.summer.world.w6.d2.q5",
      type: "short_answer",
      stem:
        "Pick a country you want to learn about. Fill in this frame: 'My country is ___. It is on the continent of ___. One country next to it is ___.'",
      rubric: {
        level3: "Names a real country, its correct continent, and a correct neighboring country.",
        level2: "Correct continent, but the neighbor is unclear or wrong.",
        level1: "Country and continent do not match, or the answer is vague."
      },
      exemplar: "My country is Kenya. It is on the continent of Africa. One country next to it is Tanzania.",
      hintLadder: [
        "Pick a country and find it on a map.",
        "What continent is it part of?",
        "Look at its borders to find a neighbor."
      ]
    }
  ],
  reflectionPrompt: "Today you mapped the world. What is a place you would love to visit, and why?",
  misconceptionBank: [
    {
      id: "mixes-hemispheres-g5",
      label: "Mixes up the halves (hemispheres)",
      description: "Says a country below the equator is in the Northern half, or mixes east and west.",
      coachMove: "Use the two lines as helpers: below the equator = Southern; east of the prime meridian = Eastern."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Pick Your Half of the World",
      prompt:
        "Would you rather live in the Northern half or the Southern half of the world? Whichever you pick, name one continent that is mostly in YOUR half.",
      answer: "Northern examples: most of Asia, Europe, and North America. Southern examples: most of South America, Australia, and Antarctica.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Memory Map",
      challenge:
        "Make a tool to remember the 7 continents and 5 oceans. Sketch a simple world map (it does not have to be perfect), label every continent and ocean, and invent a memory trick.",
      steps: [
        "Sketch a rough world map with all 7 continents.",
        "Label each continent and each of the 5 oceans.",
        "Draw the equator and the prime meridian as crossing lines.",
        "Write a memory sentence for the continents OR the oceans."
      ],
      deliverable: "A labeled world map with all 7 continents, 5 oceans, the equator, the prime meridian, and one memory trick.",
      choiceBoard: [
        "Draw and label a full world map.",
        "Make flashcards with a memory trick on the back.",
        "Build the map from cut paper or clay shapes."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Geography Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.world.w6.d2.arena1",
          type: "numeric",
          stem: "Add the number of continents to the number of oceans. What total do you get?",
          answer: 12,
          tolerance: 0,
          explanation: "7 continents + 5 oceans = 12.",
          hintLadder: [
            "How many continents are there?",
            "How many oceans are there?",
            "Add 7 + 5 to get 12."
          ]
        },
        {
          id: "g5.summer.world.w6.d2.arena2",
          type: "multiple_choice",
          stem: "Brazil is below the equator and west of the prime meridian. Which halves is it in?",
          choices: [
            "Northern + Eastern",
            "Northern + Western",
            "Southern + Western",
            "Southern + Eastern"
          ],
          answerIndex: 2,
          explanation: "Below the equator means Southern. West of the prime meridian means Western. So Brazil is Southern + Western.",
          hintLadder: [
            "Below the equator = which half, north or south?",
            "West of the prime meridian = which half, east or west?",
            "Southern + Western."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Compass Points",
      prompt:
        "Stand up and face north (your best guess!). Point and lean toward North, then East, then South, then West, saying each one out loud. Spin slowly through all four like a human compass.",
      scienceTieIn: "Moving your body through the directions builds map memory in your brain, the same skill that helps you picture places without looking.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could put a pin anywhere on the world map, where would it go? Name the continent, the nearest ocean, and the halves it is in.",
      badge: { id: "g5-summer-map-master", name: "Map Master", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
