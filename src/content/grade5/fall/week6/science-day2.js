// Grade 5 Science — Fall Expedition, Week 6 (Patterns in Nature), Day 2.
// Grade 5 counterpart of g6.fall.sci.w6.d2. Same topic (symmetry and
// spirals in living things) pitched down to Grade 5: friendlier wording,
// clearer examples, and extra vocabulary support.

export const fallG5ScienceW6D2 = {
  id: "g5.fall.sci.w6.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Science",
  topic: "Symmetry and spirals in living things",
  topicTag: "symmetry-patterns",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS1-1", "NGSS.SEP.4"],
  hook: "A butterfly's wings match. A snail's shell curls in a spiral. A leaf's veins branch the same way each time. Nature loves patterns — and they aren't just for looks. Today you find out why.",
  miniLesson: [
    "Symmetry means matching parts. A butterfly has LINE symmetry: fold it down the middle and the two halves match like a mirror.",
    "A spiral is a shape that curls around and around while getting bigger, like a snail shell or the seeds in a sunflower. Spirals let living things grow while keeping the same shape.",
    "Patterns often have a job: symmetry helps animals balance and move; spirals pack the most seeds into the smallest space."
  ],
  workedExample: {
    prompt: "Why does a butterfly have line symmetry?",
    steps: [
      "Look at the two wings — they mirror each other.",
      "A line down the middle splits it into two matching halves.",
      "Matching wings help the butterfly fly balanced and straight.",
      "So the symmetry is not just pretty — it helps the butterfly fly."
    ],
    answer: "Its wings mirror each other across a middle line, which helps it fly balanced."
  },
  items: [
    {
      id: "g5.fall.sci.w6.d2.q1",
      type: "multiple_choice",
      stem: "An object has LINE symmetry if...",
      choices: [
        "it is very large",
        "you can fold it along a line and the two halves match",
        "it spins quickly",
        "it has many colors"
      ],
      answerIndex: 1,
      explanation: "Line symmetry means a fold line splits it into two matching mirror halves.",
      hintLadder: [
        "Think about folding it in half.",
        "Do the two halves match?",
        "Matching halves = line symmetry."
      ]
    },
    {
      id: "g5.fall.sci.w6.d2.q2",
      type: "multiple_choice",
      stem: "How might a spiral shape help a sunflower?",
      choices: [
        "It packs the most seeds into the smallest space",
        "It looks scary to bugs",
        "It helps the flower run away",
        "It has no job at all"
      ],
      answerIndex: 0,
      explanation: "A spiral arrangement fits the most seeds into the round flower head with no gaps.",
      hintLadder: [
        "Think about fitting lots of seeds in a round flower head.",
        "What arrangement packs them tightly with no gaps?",
        "A spiral packs them efficiently."
      ],
      misconceptionsTargeted: ["patterns-are-purposeless"]
    },
    {
      id: "g5.fall.sci.w6.d2.q3",
      type: "multiple_choice",
      stem: "Which of these has the CLEAREST line symmetry?",
      choices: ["A random splatter of paint", "A pile of leaves", "A human face (left and right)", "Fuzzy TV static"],
      answerIndex: 2,
      explanation: "A face roughly matches on the left and right across a middle line — that is line symmetry.",
      hintLadder: [
        "Which one has matching left and right halves?",
        "Picture a line straight down the middle.",
        "A face is roughly the same on both sides."
      ]
    },
    {
      id: "g5.fall.sci.w6.d2.q4",
      type: "short_answer",
      stem: "Name one living thing with symmetry and one with a spiral, and tell how each pattern might help it.",
      rubric: {
        level3: "Names a symmetric living thing AND a spiral one, and gives a reasonable way each pattern helps it.",
        level2: "Names both but explains only one benefit.",
        level1: "Names fewer than two, or gives no benefits."
      },
      exemplar: "A starfish has symmetry — its arms match all around the center — which helps it grab and move in any direction. A snail has a spiral shell, which lets it grow bigger while keeping a strong, compact home.",
      hintLadder: [
        "Think of an animal with matching parts.",
        "Think of something with a spiral (a shell, a pinecone, a seed head).",
        "For each one, how might the pattern help the creature?"
      ]
    },
    {
      id: "g5.fall.sci.w6.d2.q5",
      type: "short_answer",
      stem: "Patterns in nature usually aren't random. Pick a natural pattern you've seen and suggest a reason it might be there.",
      rubric: {
        level3: "Describes a specific natural pattern AND gives a sensible reason (a job) it might do.",
        level2: "Describes a pattern but the reason is vague.",
        level1: "No clear pattern or no reason."
      },
      exemplar: "Tree branches split into repeating Y shapes. This might help each branch reach sunlight without blocking the others.",
      hintLadder: [
        "Remember a repeating shape you have seen in nature.",
        "What job might that shape do?",
        "Connect the pattern to how it helps."
      ]
    }
  ],
  reflectionPrompt: "Symmetry and spirals show up in art and buildings too. Where have you seen a 'natural' pattern that people used on purpose?",
  misconceptionBank: [
    {
      id: "patterns-are-purposeless",
      label: "Thinks natural patterns are just decoration",
      description: "Believes symmetry and spirals are random or only there to look nice.",
      coachMove: "Tie each pattern to a job: symmetry for balance and movement, spirals for packing seeds efficiently."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Symmetry or Spiral?",
      prompt:
        "Would you rather be built with perfect LINE symmetry (like a butterfly, with matching halves) or with a growing SPIRAL (like a snail shell)? Pick one and say what real advantage your body would get from that pattern.",
      answer:
        "Either works! Line symmetry would give you balanced, steady movement (great for running straight). A spiral would let you keep growing bigger while staying the same compact shape. Both patterns do a real job.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Pattern Hunt Journal",
      challenge:
        "Go on an autumn pattern hunt — outside or by a window. Find one thing with symmetry and one thing with a spiral, then record each with a sketch and a note about what its pattern might DO for it.",
      materials: ["Paper & pencil OR a device to sketch/type on"],
      steps: [
        "Find and sketch one symmetric thing (a leaf, a face, an insect).",
        "Find and sketch one spiral thing (a shell, a pinecone, a fern, a seed head).",
        "Under each, write one job that pattern might do (balance, packing, strength).",
        "Add a fall note: how does autumn change the patterns you see outside?"
      ],
      deliverable: "A two-entry pattern journal: one symmetry sketch and one spiral sketch, each with a note about its job.",
      choiceBoard: [
        "Make the sketched pattern journal.",
        "Build a real symmetric shape AND a spiral shape from leaves or paper.",
        "Write a short 'nature detective' story explaining why your two patterns exist."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Pattern Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.sci.w6.d2.arena1",
          type: "multiple_choice",
          stem: "A snowflake has 6 matching arms around its center. What is that BEST described as?",
          choices: [
            "No symmetry — it's random",
            "Spiral growth",
            "Only top-to-bottom symmetry",
            "Symmetry around a center point (it matches as you turn it)"
          ],
          answerIndex: 3,
          explanation: "Six matching arms arranged around a center look the same as you turn the snowflake — that is symmetry around a center point, not a spiral.",
          hintLadder: [
            "Picture turning the snowflake a little — does it look the same?",
            "The arms repeat AROUND a center, not along one fold line.",
            "It matches as you turn it: symmetry around a center point."
          ]
        },
        {
          id: "g5.fall.sci.w6.d2.arena2",
          type: "short_answer",
          stem: "A snail's shell curls in a spiral that gets wider as the snail grows. Explain ONE advantage this spiral shape gives the snail.",
          rubric: {
            level3: "Gives a clear, sensible advantage — the spiral lets the snail keep growing bigger while staying the same strong, compact shape, so it never has to build a whole new shell.",
            level2: "States a vague benefit about growth or strength without clear reasoning.",
            level1: "No real advantage, or an off-topic answer."
          },
          exemplar: "The spiral lets the snail add a bigger part to its shell as it grows without changing the overall shape, so it always has a strong, compact home that fits its bigger body.",
          hintLadder: [
            "Think about what happens as the snail gets bigger.",
            "How does a spiral let it grow without starting a new shell?",
            "Connect 'keeps the same shape while growing' to an advantage."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Mirror Symmetry Moves",
      prompt:
        "Stand tall and make your body symmetric: raise both arms evenly, then balance on one foot and mirror the same pose on the other side. Hold each side for 5 slow breaths and feel both halves working together.",
      scienceTieIn:
        "Your body's left-right symmetry helps you balance and move steadily — the same reason symmetric animals move so well.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Symmetry and spirals show up in art and buildings too. Write about one 'natural' pattern you have seen people use — and what job it might do.",
      badge: { id: "g5-fall-pattern-naturalist", name: "Pattern Naturalist", emoji: "🐚" },
      estimatedMinutes: 7
    }
  }
};
