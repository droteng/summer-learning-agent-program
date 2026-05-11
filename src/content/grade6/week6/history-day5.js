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
  estimatedMinutes: 18,
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
  ]
};
