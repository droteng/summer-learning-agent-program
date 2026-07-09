// Grade 6 History/Civics — Spring Expedition, Week 1 (Spring Awakening), Day 4.
// Topic: spring festivals and the history of agriculture/planting across
// civilizations.

export const springG6HistoryW1D4 = {
  id: "g6.spring.hist.w1.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Spring festivals and the history of planting",
  topicTag: "spring-festivals-agriculture",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2", "C3.D2.Geo.6"],
  hook: "For thousands of years, when the days grew warm, whole civilizations dropped everything to plant — and then celebrated. Today you trace how spring planting shaped festivals from ancient Egypt to modern Earth Day.",
  miniLesson: [
    "Early farming societies watched the seasons closely: spring was planting time, when warmth and rain let seeds grow. Getting the timing right meant the difference between feast and famine.",
    "Many cultures built spring festivals around planting and renewal — ancient Egypt's flooding-of-the-Nile celebrations, the Persian and Central Asian New Year Nowruz, Holi in South Asia, and May Day in Europe.",
    "The modern Earth Day (first held in 1970) continues this long tradition of a spring event tied to the land — this time focused on protecting the environment that all planting depends on."
  ],
  workedExample: {
    prompt: "Explain why so many ancient civilizations placed important festivals in the spring.",
    steps: [
      "Ask what spring meant for farmers: warmth and rain returning.",
      "Spring was planting season — the start of the food year.",
      "A successful planting decided whether people would eat later, so it mattered deeply.",
      "Communities marked this hopeful, high-stakes moment with festivals of renewal and good fortune."
    ],
    answer: "Spring was planting season, the start of the food year, so civilizations celebrated it as a hopeful time of renewal and a good harvest to come."
  },
  items: [
    {
      id: "g6.spring.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "Why was SPRING an especially important season for early farming civilizations?",
      choices: [
        "It was the coldest time to store food",
        "It was when all wars traditionally ended",
        "It was planting season, when warmth and rain let crops start growing",
        "It was the only time people could travel"
      ],
      answerIndex: 2,
      explanation: "Spring's returning warmth and rain made it the time to plant — the beginning of the whole food year.",
      hintLadder: [
        "Connect spring to farming.",
        "What does a seed need that spring provides?",
        "Warmth + rain = planting season."
      ]
    },
    {
      id: "g6.spring.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "Nowruz is a spring festival marking the new year in Persia and Central Asia. What broad theme do Nowruz, Holi, and May Day all share?",
      choices: [
        "Mourning the end of the year",
        "Renewal, new growth, and the arrival of spring",
        "Celebrating the winter harvest",
        "Marking the shortest day of the year"
      ],
      answerIndex: 1,
      explanation: "These spring festivals across different cultures all celebrate renewal, new life, and the arrival of the growing season.",
      hintLadder: [
        "They all happen in spring.",
        "What is spring famous for — endings or new beginnings?",
        "The shared theme is renewal and new growth."
      ],
      misconceptionsTargeted: ["festivals-unconnected"]
    },
    {
      id: "g6.spring.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "How does modern Earth Day (first held in 1970) connect to ancient spring festivals?",
      choices: [
        "It has nothing in common with them",
        "It was the very first spring festival ever held",
        "It celebrates the winter solstice",
        "It is a spring event tied to the land, focused on protecting the environment that farming depends on"
      ],
      answerIndex: 3,
      explanation: "Earth Day continues the long tradition of a spring event connected to the land — now centered on protecting the environment.",
      hintLadder: [
        "Earth Day happens in spring, like the ancient festivals.",
        "What does Earth Day ask people to care for?",
        "It's a land-tied spring event — about protecting the environment."
      ]
    },
    {
      id: "g6.spring.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Name a spring festival (from the lesson or one you know) and explain how it connects to planting, renewal, or the land.",
      rubric: {
        level3: "Names a real spring festival AND clearly connects it to planting, renewal, or the land with a reason.",
        level2: "Names a festival but the connection to spring/renewal/land is thin or partly off.",
        level1: "Names no valid spring festival or gives no connection."
      },
      exemplar: "Holi is a spring festival in South Asia. It welcomes the arrival of spring and the new growing season with colors and celebration, marking renewal after winter.",
      hintLadder: [
        "Pick a festival from the lesson (Nowruz, Holi, May Day, Earth Day) or another you know.",
        "Ask: how does it relate to new growth, planting, or caring for the land?",
        "State the festival and explain the connection in a sentence."
      ]
    },
    {
      id: "g6.spring.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence connecting the timing of spring planting to why civilizations celebrated it. Use 'because' or 'so.'",
      rubric: {
        level3: "Clear, accurate cause→effect linking spring planting (start of the food year) to celebration/festivals, using because/so.",
        level2: "Has cause and effect but the link is vague or partly off.",
        level1: "Lists facts with no causal link."
      },
      exemplar: "Spring planting decided whether people would have food later in the year, so communities held festivals to celebrate this hopeful start and wish for a good harvest.",
      hintLadder: [
        "Cause: spring planting is the start of the food year.",
        "Effect: people celebrated this hopeful, important moment.",
        "Join them with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Does your family or community have a spring tradition — a cleanup, a planting day, a holiday? How does it connect to renewal or the land?",
  misconceptionBank: [
    {
      id: "festivals-unconnected",
      label: "Thinks spring festivals are random and unrelated",
      description: "Sees festivals like Nowruz, Holi, and May Day as unconnected instead of sharing a common tie to spring planting and renewal.",
      coachMove: "Line them up on a calendar near spring and ask what season and theme they share — the pattern of renewal and planting appears across cultures."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why Celebrate in Spring?",
      prompt:
        "Imagine you live 4,000 years ago with no calendar or grocery store. One warm morning, the ground softens and rain returns. Your whole village suddenly gets busy AND happy. What are they about to do — and why would it be worth celebrating?",
      answer:
        "They're about to PLANT the year's crops! Spring warmth and rain mean the food year is beginning. A good planting decides whether everyone eats later, so it's a hopeful, high-stakes moment worth a festival.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Spring Renewal Festival",
      challenge:
        "Design your own spring festival that celebrates planting, renewal, or caring for the land. Give it a name, a symbol, and one tradition — and connect each choice to the idea of new growth.",
      steps: [
        "Name your festival and pick the spring event it celebrates (planting, first blossoms, Earth Day-style cleanup...).",
        "Design a symbol (like a seed, sun, or sprout) and say what it stands for.",
        "Invent one tradition people do at your festival.",
        "Write one sentence connecting your festival to renewal or the land, like the real ones you studied."
      ],
      deliverable: "A festival design with a name, a symbol, one tradition, and its connection to renewal.",
      choiceBoard: [
        "Draw a festival poster with the name, symbol, and tradition.",
        "Write a short 'festival announcement' inviting the community and explaining the meaning.",
        "Design a small program or schedule of festival activities for the day."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Spring Festivals Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct cause-and-effect order: (1) communities hold a spring festival, (2) warmth and rain return in spring, (3) farmers plant crops to start the food year.",
          choices: [
            "2 → 3 → 1",
            "1 → 2 → 3",
            "3 → 1 → 2",
            "2 → 1 → 3"
          ],
          answerIndex: 0,
          explanation: "Warmth and rain come first, which allows planting, which is the hopeful moment communities celebrate: 2 → 3 → 1.",
          hintLadder: [
            "What has to happen in nature BEFORE anyone can plant?",
            "Warm rain → planting → celebration.",
            "Order: weather returns → plant → festival."
          ]
        },
        {
          id: "g6.spring.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Spring festivals appear in many different civilizations that had little contact with each other. Explain why so many separate cultures ended up celebrating spring.",
          rubric: {
            level3: "Explains that spring was planting season / the start of the food year everywhere farming existed, so different cultures independently marked this shared, important moment.",
            level2: "Notes the spring/renewal connection but doesn't clearly explain why it appears across separate cultures.",
            level1: "No clear reasoning for the shared pattern."
          },
          exemplar: "Almost every farming culture depended on spring planting to survive, since that's when warmth and rain let crops grow. Because this life-or-death moment happened everywhere, many separate civilizations independently created festivals to celebrate it.",
          hintLadder: [
            "What did nearly all farming cultures have in common each spring?",
            "Planting mattered for survival everywhere farming existed.",
            "Connect: shared need → shared celebration, even without contact."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Planting Dance",
      prompt:
        "Act out a spring planting festival: bend to 'dig' a hole 4 times, 'drop a seed' and pat the soil, reach up to 'call the rain,' then spin once to celebrate. Do the whole sequence slowly 3 times.",
      scienceTieIn: "Moving your whole body pumps oxygen-rich blood to your brain, refreshing your focus — ancient festivals used dance and movement to bring people together too.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Spring has meant 'a fresh start' for thousands of years. What is one thing you'd like to 'plant' or start fresh this spring — a habit, a goal, or a project?",
      badge: { id: "spring-festival-historian", name: "Festival Historian", emoji: "🌾" },
      estimatedMinutes: 7
    }
  }
};
