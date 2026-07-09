// Grade 5 Summer History/Civics — Week 6 (World Affairs for Kids), Day 5.
// Grade-5 counterpart of g6.hist.w6.d5 (global interconnection), pitched down one
// level: vocab support, a simple pencil supply-chain example, concrete ripples.

export const summerG5HistoryW6D5 = {
  id: "g5.summer.hist.w6.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "How countries depend on each other",
  topicTag: "interconnection",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.16.3-5", "C3.D2.Eco.14.3-5"],
  hook: "No country is alone. Today you trace how one event in one country can ripple out and reach many others.",
  keyTerms: [
    { term: "Interdependence", definition: "When countries or people depend on each other. 'Inter-' means 'between'." },
    { term: "Trade", definition: "When countries buy and sell goods to each other across borders." },
    { term: "Supply chain", definition: "The path a product takes, from raw materials to a factory to a store to you." }
  ],
  miniLesson: [
    "Trade ties countries together — most things you use have parts from many places.",
    "Some problems, like ocean plastic or disease, cross borders. Fixing them takes many countries working together.",
    "This is not new — long ago, trade routes like the Silk Road connected faraway places."
  ],
  workedExample: {
    prompt:
      "A factory in one country stops making computer chips. How does that ripple to other places?",
    steps: [
      "Companies in many countries that need chips cannot finish their products.",
      "Phones, cars, and games become harder to find or cost more.",
      "People buy less, which slows other stores too.",
      "One factory stopping affects buyers all over the world — a global ripple."
    ],
    answer: "Because of trade, one local stop becomes a global slowdown."
  },
  items: [
    {
      id: "g5.summer.hist.w6.d5.q1",
      type: "multiple_choice",
      stem: "What does 'interdependence' mean?",
      choices: [
        "Each country doing everything alone.",
        "Trading only with next-door neighbors.",
        "Being independent with a twist.",
        "Countries (or people) depending on each other."
      ],
      answerIndex: 3,
      explanation: "'Inter-' means 'between'. Interdependence means depending on each other.",
      hintLadder: [
        "'Inter-' means 'between'.",
        "So they depend on each other.",
        "Interdependence = depending on each other."
      ]
    },
    {
      id: "g5.summer.hist.w6.d5.q2",
      type: "multiple_choice",
      stem:
        "A dry year in one country means less wheat grows. Bread prices go up even in other countries. Why?",
      choices: [
        "Bread magic.",
        "Dry weather spreads through wifi.",
        "Countries buy wheat from each other, so less wheat means higher prices everywhere.",
        "It never really happens."
      ],
      answerIndex: 2,
      explanation: "Countries trade wheat across borders. When there is less wheat to share, prices go up in many places.",
      hintLadder: [
        "How does wheat travel between countries?",
        "It moves by trade.",
        "Less wheat, same need = higher prices."
      ]
    },
    {
      id: "g5.summer.hist.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which is the BEST example of a problem that needs many countries to work together?",
      choices: [
        "Cleaning up plastic in the world's oceans.",
        "Painting one country's flag.",
        "Renaming one street.",
        "Picking a school mascot."
      ],
      answerIndex: 0,
      explanation: "Ocean currents carry plastic across borders, so no single country can clean it up alone.",
      hintLadder: [
        "Which problem crosses borders?",
        "Skip the small, local choices.",
        "Ocean plastic moves with the currents."
      ]
    },
    {
      id: "g5.summer.hist.w6.d5.q4",
      type: "short_answer",
      stem:
        "The Silk Road was a set of trade routes that connected faraway lands long ago. In one or two sentences, explain how it shows that interdependence is NOT a new idea.",
      rubric: {
        level3: "Explains that the Silk Road connected distant places through trade long ago, showing countries have depended on each other for a very long time.",
        level2: "Mentions the Silk Road and trade but the link to interdependence being old is unclear.",
        level1: "Off topic, or only repeats the definition of the Silk Road."
      },
      exemplar:
        "The Silk Road let faraway lands trade goods and ideas thousands of years ago. That shows countries have depended on each other for a very long time, so interdependence is not new.",
      hintLadder: [
        "Was the Silk Road recent or long ago?",
        "It moved goods between distant places — that is trade.",
        "Trade between faraway lands long ago shows depending on each other is old."
      ]
    },
    {
      id: "g5.summer.hist.w6.d5.q5",
      type: "short_answer",
      stem:
        "Pick an everyday object near you. Fill in this frame: 'One part might come from ___. Another part might come from ___. It reached me because of ___ (a global system like shipping or trade).'",
      rubric: {
        level3: "Specific object, two believable places for its parts, and one global system that helped it reach you.",
        level2: "Object with one part-place and one system, or the systems are vague.",
        level1: "Vague answer, or missing one of the three parts."
      },
      exemplar:
        "My pencil: the graphite might come from Sri Lanka, and the wood from forests in the United States. It reached me because of global shipping across the ocean.",
      hintLadder: [
        "Look closely at one object.",
        "Where might its parts come from?",
        "How did it travel across the world to you?"
      ]
    }
  ],
  reflectionPrompt: "Today you saw how connected the world is. What is something you use daily that probably traveled across many countries?",
  misconceptionBank: [
    {
      id: "thinks-local-is-isolated-g5",
      label: "Thinks 'made in one country' means 'all from one country'",
      description: "Assumes a product with one country's label has only parts from that country.",
      coachMove: "Look at the whole path. Most products have parts from many countries before they are put together."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "How Many Countries in Your Breakfast?",
      prompt:
        "Think about what you ate or drank this morning — the cocoa, the banana, the cereal grain. Guess how many different countries it took to make that breakfast. More or fewer than 5?",
      answer: "Usually MORE than 5! A single bowl of cereal with fruit can pull from cocoa in one country, bananas in another, and grain in a third — all linked by trade.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map a Supply Chain",
      challenge:
        "Pick one everyday object near you (a shoe, a snack, a phone). Guess where its parts come from, and draw a map or web showing how it traveled the world to reach you.",
      steps: [
        "Choose one object and list 3 of its parts or ingredients.",
        "Guess a country or region for each part.",
        "Draw lines (or a globe sketch) from each source to where you are.",
        "Label one global system — shipping, trade, or the internet — that helped it arrive."
      ],
      deliverable: "A supply-chain map or web for one object, showing at least 3 source places and one connecting system.",
      choiceBoard: [
        "Draw a world map with lines from each source to you.",
        "Make a flowchart: raw material → factory → store → you.",
        "Write a short 'travel diary' from the object's point of view."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Interdependence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w6.d5.arena1",
          type: "multiple_choice",
          stem: "A flood shuts down the world's biggest rubber-growing area. Which ripple is MOST likely?",
          choices: [
            "Nothing changes anywhere else.",
            "Tires and other rubber things get harder to find and cost more in many countries.",
            "Only that area's weather changes.",
            "Rubber stops existing forever."
          ],
          answerIndex: 1,
          explanation: "Because countries trade rubber, a big drop in one area means less rubber for everyone, so rubber goods like tires get scarcer and pricier in many places.",
          hintLadder: [
            "Who buys rubber from that area?",
            "If there is less rubber but the same need, what happens to price?",
            "Rubber goods get harder to find and cost more."
          ]
        },
        {
          id: "g5.summer.hist.w6.d5.arena2",
          type: "short_answer",
          stem: "Name one global problem (not a product) that NO single country can fix alone, and explain in one sentence WHY it needs teamwork.",
          rubric: {
            level3: "Names a real cross-border problem (ocean plastic, climate, disease) AND explains why one country alone cannot fix it.",
            level2: "Names a valid problem but the reason teamwork is needed is vague.",
            level1: "Names a local problem, or gives no reason."
          },
          exemplar: "Ocean plastic — currents carry the trash into every country's waters, so cleaning it up only works if many countries help.",
          hintLadder: [
            "Think of a problem that crosses borders by itself.",
            "Why could one country not fix it alone?",
            "Connect the border-crossing to the need for teamwork."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Around the World Stretch",
      prompt:
        "Stand and 'travel the globe' with your body: reach east (right), reach west (left), reach up to the north pole (high), then fold down to the south pole (toes). Do the loop twice, slow and smooth.",
      scienceTieIn: "Big reaching stretches send more blood to your brain, which sharpens focus — the same way good connections make a whole system work better.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one thing you used today that almost surely traveled across many countries. What surprised you about its journey?",
      badge: { id: "g5-summer-global-connector", name: "Global Connector", emoji: "🌐" },
      estimatedMinutes: 7
    }
  }
};
