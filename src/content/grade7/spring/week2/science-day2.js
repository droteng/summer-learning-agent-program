// Grade 7 Science — Spring Expedition, Week 2 (Plants & Growth), Day 2.
// Topic: parts of a plant as a system — structure, function, and how the
// vascular system (xylem/phloem) connects them (Grade 7 depth: systems thinking).

export const springG7ScienceW2D2 = {
  id: "g7.spring.sci.w2.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Plant parts as a connected system (structure and function)",
  topicTag: "plant-parts",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-3", "NGSS.MS-LS1-4"],
  hook: "A plant isn't just a bundle of parts — it's a SYSTEM where each organ depends on the others. Today you trace the plumbing that links roots to leaves and see how structure fits function all the way down to the tissue level.",
  miniLesson: [
    "A plant is a system of organs with matching structure and function: roots absorb and anchor, the stem supports and transports, leaves make food, and flowers reproduce.",
    "Two transport tissues connect the system: XYLEM carries water and minerals UP from roots to leaves, and PHLOEM carries dissolved sugar (made in leaves) to wherever the plant needs it, including roots.",
    "Structure fits function: roots are branched and hairy to maximize water absorption; leaves are broad and flat to maximize light capture; the stem has bundled tubes to move materials efficiently."
  ],
  workedExample: {
    prompt: "Trace how sugar made in a leaf reaches a growing root tip. Which tissues and parts are involved?",
    steps: [
      "Sugar (glucose) is made in the LEAF by photosynthesis.",
      "The sugar is dissolved and loaded into the PHLOEM, the food-transport tissue.",
      "Phloem runs down through the STEM toward the roots.",
      "The sugar reaches the growing ROOT tip, which uses it as energy to grow."
    ],
    answer: "Leaf makes sugar → phloem transports it down the stem → sugar reaches and fuels the growing root."
  },
  items: [
    {
      id: "g7.spring.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "Which transport tissue carries water and minerals UPWARD from the roots to the leaves?",
      choices: ["Phloem", "Xylem", "Chlorophyll", "Petals"],
      answerIndex: 1,
      explanation: "Xylem is the tissue that transports water and dissolved minerals up from the roots to the rest of the plant.",
      hintLadder: [
        "One tissue moves water UP; the other moves sugar around.",
        "The water-and-mineral highway starts at the roots.",
        "Xylem carries water and minerals upward."
      ]
    },
    {
      id: "g7.spring.sci.w2.d2.q2",
      type: "multiple_choice",
      stem: "Leaves are broad and flat. How does this STRUCTURE fit their FUNCTION?",
      choices: [
        "It helps them absorb water from the soil",
        "It stores seeds for reproduction",
        "It makes the plant heavier so it doesn't blow away",
        "It maximizes the surface area for capturing sunlight for photosynthesis"
      ],
      answerIndex: 3,
      explanation: "A broad, flat shape gives leaves a large surface area to capture as much light as possible for photosynthesis — structure fitting function.",
      hintLadder: [
        "What is a leaf's main job?",
        "What does a big, flat shape collect more of?",
        "More flat area means more sunlight captured."
      ],
      misconceptionsTargeted: ["parts-work-alone"]
    },
    {
      id: "g7.spring.sci.w2.d2.q3",
      type: "multiple_choice",
      stem: "A scientist ties a tight band around a young tree's trunk, cutting only the phloem (leaving xylem intact). Which prediction fits how the system works?",
      choices: [
        "The leaves die immediately from lack of water",
        "Nothing changes because phloem is unimportant",
        "Sugar can't reach the roots below the band, so the roots eventually starve",
        "The tree grows twice as fast"
      ],
      answerIndex: 2,
      explanation: "Phloem carries sugar from leaves down to the roots. Cutting it blocks that food supply below the band, so the roots slowly starve even though water still rises in the xylem.",
      hintLadder: [
        "Which tissue was cut, and what does it carry?",
        "Phloem carries sugar DOWN to the roots.",
        "With phloem blocked, the roots below can't get food."
      ]
    },
    {
      id: "g7.spring.sci.w2.d2.q4",
      type: "short_answer",
      stem: "Explain why a plant is best described as a SYSTEM rather than four separate parts. Use at least two parts and the tissue that connects them.",
      rubric: {
        level3: "Explains that the parts depend on each other AND names a connecting tissue (xylem or phloem) linking at least two organs (e.g., roots supply water via xylem to leaves; leaves supply sugar via phloem to roots).",
        level2: "Describes interdependence but the connecting tissue or the link between parts is vague.",
        level1: "Lists parts separately with no system connection."
      },
      exemplar: "The parts can't survive alone. Roots absorb water and send it up through the xylem to the leaves, which need it for photosynthesis. In return, the leaves make sugar that travels down the phloem to feed the roots. Each part depends on the others, so the plant works as one connected system.",
      hintLadder: [
        "Pick two parts that depend on each other.",
        "Which tissue moves material between them?",
        "Show the two-way exchange: water up, sugar down."
      ]
    },
    {
      id: "g7.spring.sci.w2.d2.q5",
      type: "short_answer",
      stem: "Root hairs are tiny thread-like extensions on roots. Explain how this structure fits the root's function, and predict what would happen to the whole plant system if all the root hairs were damaged.",
      rubric: {
        level3: "Explains root hairs increase surface area for absorbing water/minerals AND predicts the whole system suffers (leaves can't get enough water for photosynthesis, plant wilts) — showing system-level impact.",
        level2: "Explains the surface-area idea OR the system impact, but not both clearly.",
        level1: "No clear structure-function link or system reasoning."
      },
      exemplar: "Root hairs add a huge amount of surface area, so the root can absorb much more water and minerals. If they were damaged, the roots couldn't take up enough water. That water shortage travels up the whole system — the leaves would get too little water for photosynthesis, and the plant would wilt.",
      hintLadder: [
        "What does adding lots of tiny hairs do to surface area?",
        "More surface area means more of what gets absorbed?",
        "Trace the shortage up to the leaves and the whole plant."
      ]
    }
  ],
  reflectionPrompt: "Pick a plant you can see. Choose one part and trace what it sends to, and receives from, the rest of the plant system.",
  misconceptionBank: [
    {
      id: "parts-work-alone",
      label: "Thinks plant parts work independently",
      description: "Sees roots, stem, leaves, and flower as separate rather than as an interconnected system linked by transport tissues.",
      coachMove: "Trace a single water molecule from soil to leaf, then a sugar molecule from leaf to root, to show the parts constantly exchange materials through xylem and phloem."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Two Highways, One Plant",
      prompt:
        "I am a plant's plumbing. One of my two pipelines rushes water UP from the roots; the other delivers sugar OUT from the leaves to the whole plant. Name BOTH pipelines and say which carries what.",
      answer:
        "XYLEM carries water and minerals UP from the roots. PHLOEM carries dissolved sugar from the leaves to the rest of the plant. Two tissues, opposite jobs, one connected system.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map the Plant Transport System",
      challenge:
        "Create a labeled 'transport map' of a plant. Show the four organs and draw the two tissue highways — xylem (water up) and phloem (sugar out) — with arrows showing direction. Add a note on how each organ's structure fits its function.",
      materials: ["Paper & markers, OR a real plant to observe, OR a drawing app"],
      steps: [
        "Draw a plant showing roots, stem, leaves, and a flower.",
        "Draw the xylem pathway with UP arrows for water and minerals.",
        "Draw the phloem pathway with arrows for sugar moving from leaves to the rest of the plant.",
        "Add one structure-function note per organ (e.g., 'flat leaf = more light')."
      ],
      deliverable: "A labeled transport-system map with xylem and phloem arrows and a structure-function note per organ.",
      choiceBoard: [
        "Draw the labeled transport map with directional arrows.",
        "Build it as a 'subway map' where xylem and phloem are two color-coded lines with stops at each organ.",
        "Observe a real plant (or celery in colored water) and write field notes tracing water's path."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Plant System Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w2.d2.arena1",
          type: "multiple_choice",
          stem: "A celery stalk is split at the bottom and each half placed in a different color of dyed water. Days later the leaves show BOTH colors in separate regions. What does this reveal about the stem's structure and function?",
          choices: [
            "The stem contains many separate xylem tubes, each carrying water straight up to a specific region",
            "The stem randomly mixes all water together",
            "The colors prove the stem makes sugar",
            "The stem absorbs water like a root does"
          ],
          answerIndex: 0,
          explanation: "The two colors staying separate shows the stem is made of many individual xylem tubes that carry water upward along distinct paths — structure (bundled tubes) fits function (efficient upward transport).",
          hintLadder: [
            "Why did the two colors NOT blend into one?",
            "Separate colors mean separate pathways.",
            "The stem is a bundle of many xylem tubes carrying water up."
          ]
        },
        {
          id: "g7.spring.sci.w2.d2.arena2",
          type: "short_answer",
          stem: "A plant has healthy roots and a strong stem, but a fungus destroys all its leaves. Explain how this failure spreads through the whole SYSTEM, naming the tissue that stops carrying its cargo.",
          rubric: {
            level3: "Explains leaves make sugar via photosynthesis; with no leaves the phloem has no sugar to transport, so the whole plant (including roots) loses its food supply and the system starves — even though roots and stem are intact.",
            level2: "Notes the plant starves but the phloem/system link is thin.",
            level1: "No system-level reasoning or wrong tissue."
          },
          exemplar: "Leaves are the only food factories, so with them gone, no sugar is made. The phloem then has nothing to carry, so it can't deliver food to the stem or roots. Even though the roots and stem are fine, the whole system slowly starves because the sugar supply for the entire plant has been cut off.",
          hintLadder: [
            "Which organ makes the sugar the rest of the plant needs?",
            "Which tissue would then have nothing to transport?",
            "Trace the food shortage to the roots and the whole system."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Xylem Up, Phloem Down",
      prompt:
        "Stand tall as a stem. Sweep both arms UP overhead as 'xylem' lifting water from roots to leaves, then flow them DOWN and out as 'phloem' delivering sugar. Say 'water up' on the rise and 'sugar out' on the fall. Repeat 4 times, smooth and steady.",
      scienceTieIn: "Your body has transport systems too — blood vessels carry oxygen and nutrients like xylem and phloem carry water and sugar. Both are systems, not lone parts.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Systems are everywhere — a plant, a body, a school. Pick one system you're part of and describe how your 'part' depends on the other parts to work.",
      badge: { id: "g7-spring-systems-botanist", name: "Systems Botanist", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
