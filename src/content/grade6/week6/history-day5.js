// Grade 6 History — Week 6, Day 5.
// Topic: global interconnection (trade and shared problems).

export const grade6HistoryWeek6Day5 = {
  id: "g6.hist.w6.d5",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "How countries depend on each other",
  topicTag: "interconnection",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.16.6-8", "C3.D2.Eco.14.6-8"],
  hook: "No country is an island. Today you trace how one event in one country can ripple out to many others.",
  miniLesson: [
    "Trade ties countries together — most products contain parts from many places.",
    "Shared problems (climate, disease, the internet) cross borders. Solutions usually require coordination.",
    "Interdependence isn't new — silk roads, spice routes, and shipping lanes have linked places for thousands of years."
  ],
  workedExample: {
    prompt:
      "A factory in one country stops making computer chips. How does that ripple?",
    steps: [
      "Companies in many countries that need chips can't finish their products.",
      "Cars, phones, and appliances become harder to find or more expensive.",
      "People buy less, slowing other businesses too.",
      "One factory's shutdown affects millions of buyers worldwide — a global ripple."
    ],
    answer: "Trade interdependence: a local stop becomes a global slowdown."
  },
  items: [
    {
      id: "g6.hist.w6.d5.q1",
      type: "multiple_choice",
      stem: "What does 'interdependence' mean?",
      choices: [
        "Each country acting alone.",
        "Countries (or people) relying on each other.",
        "Independence with a twist.",
        "Trade only with neighbors."
      ],
      answerIndex: 1,
      explanation: "Inter- means 'between'. Interdependence = depending on each other.",
      hintLadder: [
        "Inter- = between.",
        "Depend on each other.",
        "Mutual reliance."
      ]
    },
    {
      id: "g6.world.w6.d5.q2",
      type: "multiple_choice",
      stem:
        "A drought in one country reduces wheat harvest. Bread prices rise — even in countries that didn't have the drought. Why?",
      choices: [
        "Wheat magic.",
        "Countries import wheat from each other — less supply → higher prices everywhere.",
        "Drought spreads through wifi.",
        "It doesn't actually happen."
      ],
      answerIndex: 1,
      explanation: "Global commodities are traded across borders. A local shortage tightens global supply and pushes prices up.",
      hintLadder: [
        "How does wheat move between countries?",
        "Trade.",
        "Less supply, same demand → higher prices."
      ]
    },
    {
      id: "g6.hist.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which is the BEST example of a problem requiring multiple countries to coordinate?",
      choices: [
        "Painting one country's flag.",
        "Cleaning up plastic in the world's oceans.",
        "Renaming a single street.",
        "Picking a school mascot."
      ],
      answerIndex: 1,
      explanation: "Ocean plastic crosses borders — current carries it. No single country can fix it alone.",
      hintLadder: [
        "Which problem crosses borders?",
        "Skip local choices.",
        "Ocean plastic moves with currents."
      ]
    },
    {
      id: "g6.hist.w6.d5.q4",
      type: "multiple_choice",
      stem:
        "The Silk Road (~100 BCE - 1450 CE) is an early example of:",
      choices: [
        "A single road in one country.",
        "A trade network connecting Asia, the Middle East, Africa, and Europe.",
        "An invention of the internet.",
        "A type of food."
      ],
      answerIndex: 1,
      explanation: "The Silk Road was a network of routes carrying goods, ideas, and diseases across multiple continents for over a thousand years.",
      hintLadder: [
        "Was it one road or many?",
        "Across which continents?",
        "A trade network spanning continents."
      ]
    },
    {
      id: "g6.hist.w6.d5.q5",
      type: "short_answer",
      stem:
        "Pick an everyday object near you. Guess where two of its parts might come from, and name one global system that helped it reach you.",
      rubric: {
        level3: "Specific object, two plausible source countries/regions for parts, and a global system (shipping, trade, currency, internet ordering).",
        level2: "Object + one source + one system, or vague systems.",
        level1: "Vague answer or missing one of the three."
      },
      exemplar:
        "My pencil: graphite from Sri Lanka, wood from cedar forests in the U.S. Pacific Northwest, assembled in a factory in Vietnam. Global shipping moved it through ocean trade routes to my store.",
      hintLadder: [
        "Look at one object.",
        "Where could its materials come from?",
        "How did it cross the world to you?"
      ]
    }
  ],
  reflectionPrompt: "Today you saw how connected the world is. What's something you use daily that probably traveled across multiple countries?",
  misconceptionBank: [
    {
      id: "thinks-local-is-isolated",
      label: "Thinks 'made in [country]' means 'all from one country'",
      description: "Assumes a product labeled with one country contains only parts from that country.",
      coachMove: "Look at the actual supply chain. Most modern products have parts from 5-10 countries before final assembly."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "How Many Countries in Your Breakfast?",
      prompt:
        "Think about what you ate or drank this morning — the cocoa, the banana, the coffee, the cereal grain. Guess how many different countries it took to put that breakfast on your table. More or fewer than 5?",
      answer: "Usually MORE than 5! A single bowl of cereal with fruit and cocoa can pull from coffee in Brazil, cocoa in Ghana, bananas in Ecuador, wheat in the U.S., and more — all linked by global trade.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map a Supply Chain",
      challenge:
        "Pick one everyday object near you (a phone, a shoe, a snack). Trace where its parts and materials might come from, and draw a map or web showing how it traveled the world to reach you.",
      steps: [
        "Choose one object and list 3-4 of its parts or ingredients.",
        "Guess a country or region each part might come from.",
        "Draw lines (or a globe sketch) connecting each source to where you are.",
        "Label one global system — shipping, trade routes, the internet — that helped it arrive."
      ],
      deliverable: "A supply-chain map or web for one object, showing at least 3 source regions and one connecting system.",
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
          id: "g6.hist.w6.d5.arena1",
          type: "multiple_choice",
          stem: "A flood shuts down the world's biggest rubber-producing region. Which ripple is MOST likely?",
          choices: [
            "Nothing changes anywhere else.",
            "Tires and other rubber products get scarcer and pricier in many countries.",
            "Only that region's weather is affected.",
            "Rubber stops existing forever."
          ],
          answerIndex: 1,
          explanation: "Because countries trade rubber globally, a big supply drop in one region tightens supply everywhere, raising prices on rubber goods like tires worldwide.",
          hintLadder: [
            "Who buys rubber from that region?",
            "If supply drops but demand stays, what happens to price and availability?",
            "Scarcer and pricier products in many countries."
          ]
        },
        {
          id: "g6.hist.w6.d5.arena2",
          type: "short_answer",
          stem: "Name one global problem (not a product) that NO single country can solve alone, and explain in one sentence why coordination is needed.",
          rubric: {
            level3: "Names a genuinely cross-border problem (climate, ocean plastic, pandemics, internet crime) AND explains why one country acting alone can't fix it.",
            level2: "Names a valid problem but the explanation of why coordination is needed is vague.",
            level1: "Names a local problem or gives no reason."
          },
          exemplar: "Ocean plastic — currents carry trash across every country's waters, so cleanup and prevention only work if many countries act together.",
          hintLadder: [
            "Think of a problem that crosses borders on its own.",
            "Why couldn't one country fix it by itself?",
            "Connect the border-crossing to the need for teamwork."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Around the World Stretch",
      prompt:
        "Stand and 'travel the globe' with your body: reach east (right), reach west (left), reach to the north pole (up high), then fold down to the south pole (toes). Do the loop twice, slow and smooth.",
      scienceTieIn: "Big reaching stretches boost blood flow to your brain, which improves focus — the same way good connections (here, between body parts) make the whole system work better.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one thing you used today that almost certainly traveled across several countries. What surprised you about its journey?",
      badge: { id: "global-connector", name: "Global Connector", emoji: "🌐" },
      estimatedMinutes: 7
    }
  }
};
