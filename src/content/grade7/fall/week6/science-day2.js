// Grade 7 Science — Fall Expedition, Week 6 (Patterns in Nature), Day 2.
// Topic: symmetry and spirals in living things — pitched up to classifying
// symmetry types (bilateral / radial / rotational) and connecting patterns to
// natural-selection advantages.

export const fallG7ScienceW6D2 = {
  id: "g7.fall.sci.w6.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 2,
  subject: "Science",
  topic: "Symmetry and spirals in living things",
  topicTag: "symmetry-patterns",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS4-4"],
  hook: "A butterfly folds into matching halves, a starfish repeats around a center, a snail coils outward forever. These aren't three random looks — they're three named kinds of symmetry, and each one earned its keep through natural selection.",
  miniLesson: [
    "Bilateral (line) symmetry: one plane splits the body into mirror halves (butterflies, humans). It pairs with directional movement — a clear front, back, left, and right.",
    "Radial and rotational symmetry: matching parts arranged around a central point (starfish, snowflakes, sea anemones). A shape has n-fold rotational symmetry if it looks identical after a turn of 360°/n.",
    "Spirals (nautilus shells, sunflower heads) follow a logarithmic growth path: the shape widens while keeping the same proportions, and traits that improve packing or balance are favored by natural selection over generations."
  ],
  workedExample: {
    prompt: "A starfish has 5 identical arms evenly spaced around its center. Classify its symmetry and give its order of rotational symmetry.",
    steps: [
      "Its parts repeat around a central point, not across a single mirror line — that's radial/rotational symmetry.",
      "5 identical arms means it maps onto itself 5 times in a full turn.",
      "Order = 5, so the turn that leaves it unchanged is 360° ÷ 5 = 72°.",
      "So: radial symmetry with 5-fold (order 5) rotational symmetry."
    ],
    answer: "Radial symmetry, order 5 (looks identical every 72° turn)."
  },
  items: [
    {
      id: "g7.fall.sci.w6.d2.q1",
      type: "multiple_choice",
      stem: "A butterfly can be divided by ONE plane into mirror-image halves. This is BEST classified as:",
      choices: [
        "Radial symmetry",
        "Rotational symmetry of order 6",
        "Bilateral (line) symmetry",
        "No symmetry"
      ],
      answerIndex: 2,
      explanation: "A single mirror plane producing two matching halves is bilateral (line) symmetry — the hallmark of directional movers.",
      hintLadder: [
        "How many mirror planes give matching halves — one or many?",
        "One central mirror line means the halves reflect each other.",
        "That is bilateral (line) symmetry."
      ]
    },
    {
      id: "g7.fall.sci.w6.d2.q2",
      type: "numeric",
      stem: "A snowflake has 6-fold rotational symmetry. Through how many degrees must you rotate it to make it look identical again (the smallest such angle)?",
      answer: 60,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "The smallest matching turn is 360° divided by the order.",
        "360 ÷ 6.",
        "= 60°."
      ],
      explanation: "Order 6 means it matches every 360° ÷ 6 = 60° of rotation.",
      misconceptionsTargeted: ["rotational-equals-bilateral"]
    },
    {
      id: "g7.fall.sci.w6.d2.q3",
      type: "multiple_choice",
      stem: "Why does natural selection tend to FAVOR the tight spiral packing seen in a sunflower head?",
      choices: [
        "It makes the plant look attractive to humans",
        "Packing more viable seeds into the same space raises the number of offspring that can survive",
        "Spirals let the flower move toward the sun",
        "It has no survival value — it is purely random"
      ],
      answerIndex: 1,
      explanation: "More seeds packed efficiently means more potential offspring — a reproductive advantage that natural selection favors over generations.",
      hintLadder: [
        "Selection favors traits that boost survival or reproduction.",
        "What does packing more seeds accomplish for the plant?",
        "More seeds = more possible offspring = a selective advantage."
      ],
      misconceptionsTargeted: ["patterns-are-purposeless"]
    },
    {
      id: "g7.fall.sci.w6.d2.q4",
      type: "short_answer",
      stem: "Compare bilateral and radial symmetry. Name one animal with each, and explain how each symmetry type suits that animal's way of life.",
      rubric: {
        level3: "Correctly distinguishes bilateral (one mirror plane) from radial (parts around a center), names a valid animal for each, AND ties each to a functional advantage (e.g., bilateral for directional movement, radial for sensing/feeding from all directions).",
        level2: "Names both types and animals but explains only one advantage or blurs the definitions.",
        level1: "Confuses the two symmetry types or gives no functional reasoning."
      },
      exemplar: "A fox has bilateral symmetry — one mirror plane down the middle — which suits an animal that moves forward in a definite direction, chasing prey with paired eyes and legs. A sea anemone has radial symmetry, with tentacles arranged around a center, which lets it catch food and sense threats coming from any direction since it stays anchored in place.",
      hintLadder: [
        "Bilateral = one mirror line; radial = parts around a center point.",
        "Pick a forward-moving animal and a stay-put, all-directions animal.",
        "Link movement direction to bilateral, and all-around sensing/feeding to radial."
      ]
    },
    {
      id: "g7.fall.sci.w6.d2.q5",
      type: "short_answer",
      stem: "Natural patterns usually persist because they help survival or reproduction. Pick a spiral in nature and explain, using the idea of natural selection, why that spiral shape might have become common.",
      rubric: {
        level3: "Describes a specific natural spiral AND explains its persistence through selection — a heritable trait giving a survival/growth/packing advantage becomes more common over generations.",
        level2: "Describes a spiral with a plausible benefit but doesn't clearly connect it to selection over generations.",
        level1: "No clear spiral or no functional/selection reasoning."
      },
      exemplar: "A nautilus grows a logarithmic spiral shell that widens while keeping the same proportions. Individuals whose shells grew this way could add roomier chambers without rebuilding, stay strong and streamlined, and survive to reproduce, so this heritable growth pattern spread through the population over many generations.",
      hintLadder: [
        "Name a real spiral (shell, horn, seed head, fern).",
        "What advantage does the spiral give the organism?",
        "Explain how that advantage would make the trait more common over generations."
      ]
    }
  ],
  reflectionPrompt: "Engineers and architects borrow bilateral, radial, and spiral symmetry on purpose. Where have you seen one of these three types used in a human-made design — and what job does it do there?",
  misconceptionBank: [
    {
      id: "patterns-are-purposeless",
      label: "Thinks natural patterns are just decoration",
      description: "Believes symmetry and spirals are random or only for looks, missing the selective advantage.",
      coachMove: "Tie each pattern to a heritable function that improves survival or reproduction, then explain that selection makes advantageous traits more common over generations."
    },
    {
      id: "rotational-equals-bilateral",
      label: "Confuses rotational symmetry with bilateral symmetry",
      description: "Treats a radially symmetric shape (matching around a center) as if it had a single mirror line.",
      coachMove: "Test it: bilateral matches by FLIPPING across one line; rotational matches by TURNING around a center point — count how many turns bring it back."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Bilateral or Radial?",
      prompt:
        "Would you rather be built with bilateral symmetry (one mirror line, like a fox) or radial symmetry (matching parts all around a center, like a sea star)? Pick one and name the real survival advantage your body plan would gain.",
      answer:
        "Both are real strategies. Bilateral gives you a clear front and directional, streamlined movement — great for chasing or fleeing. Radial lets you sense food and danger from every direction at once — great if you stay in one place. The 'best' choice depends on your lifestyle.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Symmetry Field Classifier",
      challenge:
        "Go on an autumn pattern hunt and become a symmetry classifier. Find three natural things, sketch each, then LABEL its symmetry as bilateral, radial (with the rotational order), or spiral — and write the survival advantage of each.",
      materials: ["Paper & pencil OR a device to sketch/type on"],
      steps: [
        "Find and sketch one bilateral thing (leaf, insect, face) and mark its single mirror line.",
        "Find and sketch one radial/rotational thing (flower, snowflake, seed head) and state its order (e.g., 5-fold).",
        "Find and sketch one spiral thing (shell, pinecone, fern) and note that it grows while keeping its shape.",
        "Under each, write one survival advantage that symmetry gives the organism."
      ],
      deliverable: "A three-entry classifier journal: one bilateral, one radial (with order), and one spiral, each labeled with a survival advantage.",
      choiceBoard: [
        "Make the sketched classifier journal.",
        "Build a real radial shape and measure its rotational order.",
        "Write a short 'natural-selection detective' story explaining why one of your patterns spread."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Symmetry Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.sci.w6.d2.arena1",
          type: "numeric",
          stem: "A flower has petals arranged so it looks identical after every 45° turn. What is the ORDER of its rotational symmetry? (order = 360 ÷ smallest matching angle)",
          answer: 8,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Order = 360 ÷ the smallest angle that leaves it unchanged.",
            "360 ÷ 45.",
            "= 8, so it has 8-fold rotational symmetry."
          ],
          explanation: "360° ÷ 45° = 8, so the flower has order-8 (8-fold) rotational symmetry."
        },
        {
          id: "g7.fall.sci.w6.d2.arena2",
          type: "short_answer",
          stem: "Two beetles differ only in wing-case symmetry: one is nearly perfectly bilateral, the other lopsided. Predator studies show symmetric beetles fly straighter and get caught less. Using natural selection, explain what happens to bilateral symmetry in this population over many generations.",
          rubric: {
            level3: "Explains that symmetric beetles survive/reproduce more, pass the heritable symmetry to offspring, so the proportion of strongly bilateral beetles INCREASES over generations (selection for symmetry).",
            level2: "Says symmetric beetles do better but doesn't clearly connect heritability to the population changing over generations.",
            level1: "No selection reasoning or a reversed/incorrect prediction."
          },
          exemplar: "The straighter-flying symmetric beetles escape predators more often, so they survive and reproduce more than lopsided ones. Because wing-case symmetry is heritable, more offspring in each generation are strongly bilateral, and over many generations the population becomes increasingly symmetric — natural selection favoring bilateral symmetry.",
          hintLadder: [
            "Which beetles survive to reproduce more often?",
            "Is the symmetry passed on to their offspring?",
            "Trace what that does to the whole population across many generations."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Mirror & Rotate",
      prompt:
        "First, make bilateral poses: raise both arms evenly, then mirror a one-foot balance on each side. Next, make 'rotational' turns: quarter-turn, hold; quarter-turn, hold — four times back to start, feeling order-4 symmetry in your own body.",
      scienceTieIn:
        "Your left-right symmetry helps you balance and move in a straight line — the same reason bilateral symmetry is favored in fast-moving animals.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one symmetry type you classified today (bilateral, radial, or spiral). Write about where humans copy it in design and what selective advantage it originally served in nature.",
      badge: { id: "g7-fall-symmetry-classifier", name: "Symmetry Classifier", emoji: "🐚" },
      estimatedMinutes: 7
    }
  }
};
