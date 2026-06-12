// Grade 6 Science — Fall Expedition, Week 6 (Patterns in Nature), Day 2.
// Topic: symmetry and spirals — why living things repeat shapes.

export const fallG6ScienceW6D2 = {
  id: "g6.fall.sci.w6.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Science",
  topic: "Symmetry and spirals in living things",
  topicTag: "symmetry-patterns",
  estimatedMinutes: 17,
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.SEP.4"],
  hook: "A butterfly's wings match. A snail's shell spirals. A leaf's veins branch the same way every time. Nature loves patterns — and they aren't random. Today you find out why.",
  miniLesson: [
    "Symmetry means matching parts: a butterfly has LINE symmetry — fold it down the middle and the halves match.",
    "Spirals (snail shells, sunflower seeds) let things grow while keeping the same shape and packing tightly.",
    "Patterns often serve a purpose: symmetry helps animals move and balance; spirals pack the most seeds into the least space."
  ],
  workedExample: {
    prompt: "Why does a butterfly have line symmetry?",
    steps: [
      "Look at the two wings: they mirror each other.",
      "A line down the middle splits it into matching halves.",
      "Matching wings help it fly balanced and straight.",
      "So the symmetry isn't just pretty — it's useful for flight."
    ],
    answer: "Its wings mirror each other across a center line, helping balanced flight."
  },
  items: [
    {
      id: "g6.fall.sci.w6.d2.q1",
      type: "multiple_choice",
      stem: "An object has LINE symmetry if...",
      choices: [
        "it is very large",
        "you can fold it along a line and the halves match",
        "it spins quickly",
        "it has many colors"
      ],
      answerIndex: 1,
      explanation: "Line symmetry means a fold line splits it into matching mirror halves.",
      hintLadder: [
        "Think about folding it in half.",
        "Do the halves match?",
        "Matching halves = line symmetry."
      ]
    },
    {
      id: "g6.fall.sci.w6.d2.q2",
      type: "multiple_choice",
      stem: "Why might a spiral shape help a sunflower?",
      choices: [
        "It looks scary to bugs",
        "It packs the most seeds into the smallest space",
        "It helps the flower run away",
        "It has no purpose"
      ],
      answerIndex: 1,
      explanation: "Spiral seed arrangements fit the maximum number of seeds efficiently.",
      hintLadder: [
        "Think about fitting lots of seeds in a round head.",
        "What arrangement packs them tightly?",
        "A spiral packs efficiently."
      ],
      misconceptionsTargeted: ["patterns-are-purposeless"]
    },
    {
      id: "g6.fall.sci.w6.d2.q3",
      type: "multiple_choice",
      stem: "Which of these has the CLEAREST line symmetry?",
      choices: ["A random splatter of paint", "A human face (left/right)", "A pile of leaves", "Static on a TV"],
      answerIndex: 1,
      explanation: "A face roughly mirrors left and right across a center line — line symmetry.",
      hintLadder: [
        "Which one has matching left and right halves?",
        "Picture a line down the middle.",
        "A face is roughly symmetric."
      ]
    },
    {
      id: "g6.fall.sci.w6.d2.q4",
      type: "short_answer",
      stem: "Name one living thing with symmetry and one with a spiral, and say how each pattern might help it.",
      rubric: {
        level3: "Names a symmetric organism AND a spiral one, each with a plausible benefit of the pattern.",
        level2: "Names both but explains only one benefit.",
        level1: "Names fewer than two or no benefits."
      },
      exemplar: "A starfish has symmetry (its arms match around the center), which helps it move and grab in any direction. A snail has a spiral shell, which lets it grow bigger while keeping a strong, compact home.",
      hintLadder: [
        "Think of an animal with matching parts.",
        "Think of something with a spiral (shell, horn, seed head).",
        "How might each pattern help the creature?"
      ]
    },
    {
      id: "g6.fall.sci.w6.d2.q5",
      type: "short_answer",
      stem: "Patterns in nature usually aren't random. Pick a natural pattern you've seen and suggest a reason it might exist.",
      rubric: {
        level3: "Describes a specific natural pattern AND offers a sensible function-based reason for it.",
        level2: "Describes a pattern but the reason is vague.",
        level1: "No clear pattern or reasoning."
      },
      exemplar: "Tree branches split in repeating Y shapes, which might help each branch reach sunlight without blocking the others.",
      hintLadder: [
        "Recall a repeating shape in nature.",
        "What job might that shape do?",
        "Connect the pattern to a benefit."
      ]
    }
  ],
  reflectionPrompt: "Symmetry and spirals show up in art and buildings too. Where have you seen a 'natural' pattern used by people?",
  misconceptionBank: [
    {
      id: "patterns-are-purposeless",
      label: "Thinks natural patterns are just decoration",
      description: "Believes symmetry and spirals are random or only for looks.",
      coachMove: "Tie each pattern to a function: symmetry for balance/movement, spirals for efficient packing."
    }
  ]
};
