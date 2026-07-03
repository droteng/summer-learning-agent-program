// Grade 5 History/Civics — Spring Expedition, Week 1 (Spring Awakening), Day 4.
// Grade 5 counterpart of g6.spring.hist.w1.d4. Same topic (spring festivals and
// the history of planting across civilizations) pitched down to Grade 5:
// shorter passages, more vocabulary support, and simpler cause-and-effect.

export const springG5HistoryW1D4 = {
  id: "g5.spring.hist.w1.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Spring festivals and the history of planting",
  topicTag: "spring-festivals-agriculture",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.3-5", "C3.D2.Geo.6.3-5"],
  hook: "For thousands of years, when the days grew warm, whole groups of people stopped everything to plant — and then celebrated. Today you follow how spring planting led to festivals from ancient Egypt all the way to today's Earth Day.",
  miniLesson: [
    "Long ago, farming people watched the seasons closely. Spring was planting time, when warmth and rain let seeds grow. Planting at the right time meant they would have food later.",
    "Many cultures made spring festivals about planting and new life — ancient Egypt's Nile flood celebrations, the New Year festival Nowruz in Persia and Central Asia, Holi in South Asia, and May Day in Europe.",
    "Earth Day (first held in 1970) keeps this old tradition going — a spring event tied to the land, this time about protecting the environment that all planting needs."
  ],
  workedExample: {
    prompt: "Explain why so many people long ago held important festivals in the spring.",
    steps: [
      "Ask what spring meant for farmers: warmth and rain coming back.",
      "Spring was planting season — the start of the food year.",
      "A good planting decided whether people would have food later, so it really mattered.",
      "So groups marked this hopeful, important time with festivals about new life and good luck."
    ],
    answer: "Spring was planting season, the start of the food year, so people celebrated it as a hopeful time of new life and a good harvest to come."
  },
  items: [
    {
      id: "g5.spring.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "Why was SPRING an especially important season for early farming people?",
      choices: [
        "It was the coldest time to store food",
        "It was planting season, when warmth and rain let crops start growing",
        "It was when all wars traditionally ended",
        "It was the only time people could travel"
      ],
      answerIndex: 1,
      explanation: "Spring's returning warmth and rain made it the time to plant — the start of the whole food year.",
      hintLadder: [
        "Connect spring to farming.",
        "What does a seed need that spring gives it?",
        "Warmth + rain = planting season."
      ]
    },
    {
      id: "g5.spring.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "Nowruz is a spring festival that marks the new year in Persia and Central Asia. What big idea do Nowruz, Holi, and May Day all share?",
      choices: [
        "Being sad that the year is ending",
        "New life, new growth, and the arrival of spring",
        "Celebrating the winter harvest",
        "Marking the shortest day of the year"
      ],
      answerIndex: 1,
      explanation: "These spring festivals from different cultures all celebrate new life, new growth, and the start of the growing season.",
      hintLadder: [
        "They all happen in spring.",
        "What is spring famous for — endings or new beginnings?",
        "The shared idea is new life and new growth."
      ],
      misconceptionsTargeted: ["festivals-unconnected"]
    },
    {
      id: "g5.spring.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "How does today's Earth Day (first held in 1970) connect to ancient spring festivals?",
      choices: [
        "It has nothing in common with them",
        "It is a spring event tied to the land, about protecting the environment that farming needs",
        "It celebrates the shortest day of winter",
        "It was the very first spring festival ever held"
      ],
      answerIndex: 1,
      explanation: "Earth Day keeps the old tradition of a spring event connected to the land going — now it is about protecting the environment.",
      hintLadder: [
        "Earth Day happens in spring, like the ancient festivals.",
        "What does Earth Day ask people to take care of?",
        "It is a land-tied spring event — about protecting the environment."
      ]
    },
    {
      id: "g5.spring.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Name a spring festival (from the lesson or one you know) and explain how it connects to planting, new life, or the land.",
      rubric: {
        level3: "Names a real spring festival AND clearly connects it to planting, new life, or the land with a reason.",
        level2: "Names a festival but the connection to spring/new life/land is thin or partly off.",
        level1: "Names no real spring festival or gives no connection."
      },
      exemplar: "Holi is a spring festival in South Asia. It welcomes the start of spring and the new growing season with colors and celebration, marking new life after winter.",
      hintLadder: [
        "Pick a festival from the lesson (Nowruz, Holi, May Day, Earth Day) or another you know.",
        "Ask: how does it connect to new growth, planting, or caring for the land?",
        "State the festival and explain the connection in a sentence."
      ]
    },
    {
      id: "g5.spring.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence that connects spring planting to why people celebrated it. Use the word 'because' or 'so.'",
      rubric: {
        level3: "Clear, correct cause and effect linking spring planting (the start of the food year) to festivals, using 'because' or 'so.'",
        level2: "Has a cause and effect but the link is vague or partly off.",
        level1: "Lists facts with no cause-and-effect link."
      },
      exemplar: "Spring planting decided whether people would have food later in the year, so groups held festivals to celebrate this hopeful start and hope for a good harvest.",
      hintLadder: [
        "Cause: spring planting is the start of the food year.",
        "Effect: people celebrated this hopeful, important moment.",
        "Join them with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Does your family or community have a spring tradition — a cleanup, a planting day, a holiday? How does it connect to new life or the land?",
  misconceptionBank: [
    {
      id: "festivals-unconnected",
      label: "Thinks spring festivals are random and unrelated",
      description: "Sees festivals like Nowruz, Holi, and May Day as unconnected, instead of all sharing a tie to spring planting and new life.",
      coachMove: "Line them up on a calendar near spring and ask what season and idea they share — the pattern of new life and planting shows up across many cultures."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Why Celebrate in Spring?",
      prompt:
        "Imagine you live 4,000 years ago with no calendar and no grocery store. One warm morning, the ground gets soft and the rain comes back. Your whole village suddenly gets busy AND happy. What are they about to do — and why would it be worth celebrating?",
      answer:
        "They are about to PLANT the year's crops! Spring warmth and rain mean the food year is starting. A good planting decides whether everyone eats later, so it is a hopeful, important moment worth a festival.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Spring Renewal Festival",
      challenge:
        "Design your own spring festival that celebrates planting, new life, or caring for the land. Give it a name, a symbol, and one tradition — and connect each choice to the idea of new growth.",
      steps: [
        "Name your festival and pick the spring event it celebrates (planting, first blossoms, an Earth Day-style cleanup...).",
        "Design a symbol (like a seed, sun, or sprout) and say what it stands for.",
        "Invent one thing people do at your festival.",
        "Write one sentence connecting your festival to new life or the land, like the real ones you studied."
      ],
      deliverable: "A festival design with a name, a symbol, one tradition, and its connection to new life.",
      choiceBoard: [
        "Draw a festival poster with the name, symbol, and tradition.",
        "Write a short 'festival announcement' inviting the community and explaining what it means.",
        "Design a small schedule of festival activities for the day."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Spring Festivals Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct cause-and-effect order: (1) people hold a spring festival, (2) warmth and rain come back in spring, (3) farmers plant crops to start the food year.",
          choices: [
            "1 then 2 then 3",
            "2 then 3 then 1",
            "3 then 1 then 2",
            "2 then 1 then 3"
          ],
          answerIndex: 1,
          explanation: "Warmth and rain come first, which lets people plant, which is the hopeful moment they celebrate: 2 then 3 then 1.",
          hintLadder: [
            "What has to happen in nature BEFORE anyone can plant?",
            "Warm rain then planting then celebration.",
            "Order: weather comes back then plant then festival."
          ]
        },
        {
          id: "g5.spring.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "Spring festivals show up in many different cultures that had almost no contact with each other. Explain why so many separate cultures ended up celebrating spring.",
          rubric: {
            level3: "Explains that spring was planting season / the start of the food year everywhere people farmed, so different cultures each marked this shared, important moment on their own.",
            level2: "Notes the spring/new-life connection but does not clearly explain why it shows up across separate cultures.",
            level1: "No clear reason for the shared pattern."
          },
          exemplar: "Almost every farming culture needed spring planting to survive, since that is when warmth and rain let crops grow. Because this important moment happened everywhere, many separate cultures each made festivals to celebrate it, even without contact.",
          hintLadder: [
            "What did nearly all farming cultures have in common each spring?",
            "Planting mattered for survival everywhere people farmed.",
            "Connect: shared need then shared celebration, even without contact."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Planting Dance",
      prompt:
        "Act out a spring planting festival: bend to 'dig' a hole 4 times, 'drop a seed' and pat the soil, reach up to 'call the rain,' then spin once to celebrate. Do the whole sequence slowly 3 times.",
      scienceTieIn: "Moving your whole body pumps fresh, air-rich blood to your brain and wakes up your focus — ancient festivals used dance and movement to bring people together too.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Spring has meant 'a fresh start' for thousands of years. What is one thing you would like to 'plant' or start fresh this spring — a habit, a goal, or a project?",
      badge: { id: "g5-spring-festival-historian", name: "Festival Historian", emoji: "🌾" },
      estimatedMinutes: 7
    }
  }
};
