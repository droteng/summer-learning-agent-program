// Grade 5 Science — Fall Expedition, Week 8 (Harvest Showcase), Day 3.
// Grade 5 counterpart of g6.fall.sci.w8.d3. Same topic (fall science
// synthesis) pitched down to Grade 5: concrete observation vs. inference,
// simple food webs, and easy patterns. Celebratory capstone tone.

export const fallG5ScienceW8D3 = {
  id: "g5.fall.sci.w8.d3",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Science",
  topic: "Fall science synthesis",
  topicTag: "synthesis-review",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-PS3-1"],
  hook: "This season you watched things change, drew food webs, and spotted patterns in nature. Today you connect those ideas — the science story behind your showcase!",
  miniLesson: [
    "An OBSERVATION is something you see, hear, or feel directly. An INFERENCE is a smart guess you make to explain it.",
    "A food web shows who eats whom. Energy flows from plants (producers) to animals (consumers), and only a little energy passes to each next level.",
    "Patterns in nature — like the spiral of seeds in a sunflower — usually help the plant or animal in some way, like packing seeds tightly."
  ],
  workedExample: {
    prompt: "A sunflower turns to face the sun, and its seeds make a spiral. Name one observation, one inference, and one pattern.",
    steps: [
      "Observation: the flower points toward the sun (you can see it).",
      "Inference: it turns to catch more sunlight for energy (a smart guess).",
      "Pattern: the seeds make a spiral that packs them tightly.",
      "Three ways to look at one plant."
    ],
    answer: "Observation: it faces the sun. Inference: to get more light. Pattern: spiral seed packing."
  },
  items: [
    {
      id: "g5.fall.sci.w8.d3.q1",
      type: "multiple_choice",
      stem: "Which one is an OBSERVATION (something you can directly see)?",
      choices: [
        "The squirrel is getting ready for a hard winter.",
        "The squirrel is burying an acorn.",
        "The squirrel feels worried.",
        "Winter will be very cold."
      ],
      answerIndex: 1,
      explanation: "You can directly see the squirrel bury an acorn. The others are guesses about feelings or the future.",
      hintLadder: [
        "What can you actually see with your eyes?",
        "Skip the guesses about feelings or the future.",
        "Burying the acorn is something you can watch."
      ]
    },
    {
      id: "g5.fall.sci.w8.d3.q2",
      type: "multiple_choice",
      stem: "In a food web, where does the energy START?",
      choices: [
        "With the foxes",
        "With the plants (producers)",
        "With the rain",
        "With the decomposers"
      ],
      answerIndex: 1,
      explanation: "Plants make their own food using sunlight, so energy in a food web starts with the plants.",
      hintLadder: [
        "Which living thing uses sunlight to make food?",
        "Animals eat, but plants make their own energy.",
        "Energy starts with the plants."
      ]
    },
    {
      id: "g5.fall.sci.w8.d3.q3",
      type: "multiple_choice",
      stem: "If one important animal is removed from an ecosystem, what most likely happens?",
      choices: [
        "Nothing changes at all",
        "It can cause big ripples that upset the whole web",
        "Every other animal gets stronger",
        "The sun shines brighter"
      ],
      answerIndex: 1,
      explanation: "Living things are connected, so removing one can ripple through the whole food web.",
      hintLadder: [
        "Remember the sea otters and the kelp.",
        "Living things depend on each other.",
        "Removing one can ripple through the web."
      ],
      misconceptionsTargeted: ["species-are-independent"]
    },
    {
      id: "g5.fall.sci.w8.d3.q4",
      type: "short_answer",
      stem: "Pick one fall science idea (observation vs. inference, food webs, or patterns) and explain it in 2 sentences, like you would to your showcase audience.",
      rubric: {
        level3: "Clearly and correctly explains one chosen idea in easy, friendly words.",
        level2: "Mostly clear but has a small mistake or fuzzy spot.",
        level1: "Wrong or too vague to follow."
      },
      exemplar: "A food web shows who eats whom in nature. It starts with plants, and then animals eat the plants, and bigger animals eat those animals.",
      hintLadder: [
        "Choose the idea you understand the best.",
        "Say it simply, like teaching a friend.",
        "Keep it to two clear sentences."
      ]
    },
    {
      id: "g5.fall.sci.w8.d3.q5",
      type: "short_answer",
      stem: "Connect TWO fall science ideas in one sentence (for example, how watching an animal helps you draw a food web).",
      rubric: {
        level3: "Makes a clear, correct link between two different fall science ideas.",
        level2: "Connects two ideas but the link is loose or partly wrong.",
        level1: "Only one idea, or a link that doesn't make sense."
      },
      exemplar: "Watching which animals eat which plants is how you can draw a food web that shows how energy moves through the ecosystem.",
      hintLadder: [
        "Pick two ideas from the season.",
        "How does one lead to or connect with the other?",
        "Join them in one sentence."
      ]
    }
  ],
  reflectionPrompt: "Which fall science idea changed the way you look at nature around you? Give one example you noticed outside.",
  misconceptionBank: [
    {
      id: "species-are-independent",
      label: "Thinks living things don't affect each other much",
      description: "Doesn't realize how connected the members of an ecosystem are.",
      coachMove: "Trace one removal through the web (no otters → too many urchins → kelp gone) to show the links."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why Do Leaves Turn Color?",
      prompt:
        "In fall, green leaves turn red, orange, and yellow. Those colors were hiding in the leaf the whole time! Why do you think the green covers them up in summer, and where does the green go in fall?",
      answer:
        "The green (called chlorophyll) usually covers the other colors. As days get shorter, trees stop making green, so the hidden yellows and oranges finally show. Seeing the colors is an observation; guessing it's about shorter days is an inference.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Backyard Food Web",
      challenge:
        "Build a food web from a real outdoor spot you know — a yard, park, or garden. Draw at least one plant, two animals, and one decomposer (like a mushroom), with arrows showing where the energy goes.",
      steps: [
        "List the living things you've really seen in one spot.",
        "Sort them into plants, animals, and decomposers.",
        "Draw arrows from each thing to whatever eats it (that's the energy flowing).",
        "Circle one animal and write what might happen if it disappeared."
      ],
      deliverable: "A labeled food-web drawing with arrows showing energy flow and one 'what if it vanished?' guess.",
      choiceBoard: [
        "Draw a labeled food web on paper.",
        "Make a 'before and after' pair of webs where one animal is removed.",
        "Make an energy poster showing that energy starts with plants."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ecosystem Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.sci.w8.d3.arena1",
          type: "multiple_choice",
          stem: "Which sentence is an INFERENCE (a smart guess), not an observation?",
          choices: [
            "The leaves on the maple are orange.",
            "A squirrel ran up the trunk.",
            "The tree is getting ready for winter.",
            "There are acorns on the ground."
          ],
          answerIndex: 2,
          explanation: "'Getting ready for winter' is a guess you reason out, not something you can directly see, so it's an inference.",
          hintLadder: [
            "Which one can't you see or count directly?",
            "Three describe what's right there; one explains WHY.",
            "The 'getting ready for winter' sentence is the inference."
          ]
        },
        {
          id: "g5.fall.sci.w8.d3.arena2",
          type: "numeric",
          stem: "In a simple food web, plants feed 20 rabbits, and each fox needs 5 rabbits to survive. How many foxes could this web support?",
          answer: 4,
          tolerance: 0,
          unit: "foxes",
          hintLadder: [
            "You need to share 20 rabbits among the foxes.",
            "20 ÷ 5.",
            "= 4 foxes."
          ],
          explanation: "20 rabbits ÷ 5 rabbits per fox = 4 foxes. There are always fewer animals at the top of a food web."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Nature Notice",
      prompt:
        "Look out a window or step outside. Quietly name 3 signs of fall you can see and 2 sounds you can hear. Take 3 slow breaths while you notice them.",
      scienceTieIn: "Slowing down to observe is the very same skill scientists use to spot patterns and changes in an ecosystem.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fall science idea — observation vs. inference, food webs, or patterns — will you explain at your showcase? Write one sentence you'd actually say.",
      badge: { id: "g5-fall-nature-detective", name: "Nature Detective", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
