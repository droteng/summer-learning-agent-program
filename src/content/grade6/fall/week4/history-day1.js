// Grade 6 History/Civics — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 1. Topic: how farming surplus gave rise to the first cities.

export const fallG6HistoryW4D1 = {
  id: "g6.fall.hist.w4.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "From farms to the first cities",
  topicTag: "ancient-civilizations",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2", "C3.D2.Geo.4"],
  hook: "The first cities rose between two rivers in Mesopotamia. Why there, and why then? The answer starts with the fall harvest you studied in Week 1.",
  miniLesson: [
    "Early cities grew where farming was reliable — river valleys with rich soil and water, like the Tigris and Euphrates in Mesopotamia.",
    "A dependable surplus let thousands of people live close together instead of spreading out to find food.",
    "Cities needed new inventions to run: writing to keep records, laws to settle disputes, and leaders to organize big projects."
  ],
  workedExample: {
    prompt: "Explain why the first cities appeared in river valleys.",
    steps: [
      "River valleys had water for crops and rich soil from flooding.",
      "That meant reliable harvests and a food surplus.",
      "Surplus food supported large populations in one place.",
      "So cities formed where farming was most dependable — the river valleys."
    ],
    answer: "Rich river-valley soil gave reliable harvests, which fed large populations, so cities formed there."
  },
  items: [
    {
      id: "g6.fall.hist.w4.d1.q1",
      type: "multiple_choice",
      stem: "Why did many early civilizations form near rivers?",
      choices: [
        "Rivers were good for swimming",
        "There was no reason",
        "Rivers blocked enemies completely",
        "Rivers gave water and rich soil for reliable farming"
      ],
      answerIndex: 3,
      explanation: "Water for crops and fertile soil from flooding made river valleys ideal for dependable harvests.",
      hintLadder: [
        "Connect it back to farming.",
        "What do crops need that rivers provide?",
        "Water + rich soil = reliable harvests."
      ]
    },
    {
      id: "g6.fall.hist.w4.d1.q2",
      type: "multiple_choice",
      stem: "Which region is often called the birthplace of the first cities?",
      choices: ["Antarctica", "Mesopotamia (between the Tigris and Euphrates)", "The Sahara Desert", "The Arctic"],
      answerIndex: 1,
      explanation: "Mesopotamia, between the Tigris and Euphrates rivers, hosted some of the earliest cities.",
      hintLadder: [
        "It means 'land between rivers.'",
        "Two famous rivers: Tigris and Euphrates.",
        "That region is Mesopotamia."
      ]
    },
    {
      id: "g6.fall.hist.w4.d1.q3",
      type: "multiple_choice",
      stem: "Why did growing cities need WRITING?",
      choices: [
        "To keep records of trade, taxes, and stored food",
        "To write poems only",
        "Because it was fashionable",
        "Writing came before farming"
      ],
      answerIndex: 0,
      explanation: "With surplus food, trade, and many people, cities needed records — and writing was invented to keep them.",
      hintLadder: [
        "What happens when you have lots of food, goods, and people to track?",
        "You need a way to remember amounts and deals.",
        "Writing kept the records."
      ],
      misconceptionsTargeted: ["writing-came-first"]
    },
    {
      id: "g6.fall.hist.w4.d1.q4",
      type: "short_answer",
      stem: "Name TWO things a brand-new city would need to organize thousands of people, and say why each helps.",
      rubric: {
        level3: "Names two reasonable needs (e.g., writing/records, laws, leaders, walls, food storage) AND explains how each helps run a city.",
        level2: "Names two but explains only one, or explanations are thin.",
        level1: "Names fewer than two or gives no reasoning."
      },
      exemplar: "Laws help settle disputes fairly so the city stays peaceful, and food storage keeps surplus grain safe so people don't go hungry between harvests.",
      hintLadder: [
        "Think about problems thousands of people living together would face.",
        "How do you settle arguments? Store food? Keep records?",
        "Pick two and explain how each solves a problem."
      ]
    },
    {
      id: "g6.fall.hist.w4.d1.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence connecting the fall harvest surplus to the rise of cities. Use 'because' or 'so.'",
      rubric: {
        level3: "Clear, accurate cause→effect linking surplus/farming to large settlements/cities, using because/so.",
        level2: "Has cause and effect but the link is vague or partly off.",
        level1: "Lists facts with no causal link."
      },
      exemplar: "River-valley farms produced a dependable surplus, so thousands of people could settle together and build the first cities.",
      hintLadder: [
        "Cause: reliable surplus food.",
        "Effect: large populations / cities.",
        "Join them with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Your town or city exists for reasons too — water, roads, jobs. Why do you think people first settled where you live?",
  misconceptionBank: [
    {
      id: "writing-came-first",
      label: "Thinks writing came before farming and cities",
      description: "Reverses the order — writing actually developed to serve growing farming cities.",
      coachMove: "Lay the timeline: farming → surplus → cities → the NEED for records → writing."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Settle Here?",
      prompt:
        "Would you rather start a new village beside a flooding river valley with rich soil, or high on a dry rocky hill that's easy to defend? Think about FOOD before you answer — which choice keeps thousands of people fed?",
      answer:
        "The river valley wins for growing a city: its flooding leaves rich soil for reliable harvests, and a food surplus is what let thousands settle together. The dry hill is safer but can't feed a crowd.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Own River City",
      challenge:
        "You're founding a city in a river valley. Draw a map or plan that shows how you'd use the river and surplus food to support thousands of people.",
      steps: [
        "Draw the river and mark the best farmland near it.",
        "Add 3 things your city needs to run (food storage, a place for laws, walls, a market...).",
        "Label WHY each one helps thousands of people live together.",
        "Give your city a name and one sentence about what it's famous for."
      ],
      deliverable: "A labeled map or plan of your river-valley city showing farmland and 3 city features.",
      choiceBoard: [
        "Draw the city map with labels.",
        "Write a 'founder's announcement' explaining why you chose this spot.",
        "Make a list of 5 jobs your city needs and why each matters."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: First Cities Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.hist.w4.d1.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct cause-and-effect order: (1) cities form, (2) river valley gives rich soil, (3) farms produce a food surplus.",
          choices: [
            "1 → 2 → 3",
            "3 → 1 → 2",
            "2 → 3 → 1",
            "2 → 1 → 3"
          ],
          answerIndex: 2,
          explanation: "Rich soil comes first, which leads to a surplus, which lets large populations form cities: 2 → 3 → 1.",
          hintLadder: [
            "What has to come FIRST — before there's any extra food?",
            "Soil leads to surplus; surplus feeds crowds.",
            "Order: rich soil → surplus → cities."
          ]
        },
        {
          id: "g6.fall.hist.w4.d1.arena2",
          type: "short_answer",
          stem: "A surplus of food let people stop farming full-time and do OTHER jobs. Name one new job a city might need, and explain why a food surplus made it possible.",
          rubric: {
            level3: "Names a plausible specialized job (scribe, builder, priest, soldier, potter) AND explains that surplus food freed people from farming to do it.",
            level2: "Names a job but the link to surplus is thin or unclear.",
            level1: "Names no clear job or gives no reasoning."
          },
          exemplar: "A city might need scribes to keep records. A food surplus meant not everyone had to farm, so some people could spend their time writing instead of growing food.",
          hintLadder: [
            "If there's extra food, does everyone still have to farm?",
            "What jobs help a big city that aren't farming?",
            "Connect: surplus → free time → a new specialized job."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Stretch",
      prompt:
        "Pretend you're harvesting a fall field: reach high to 'pick' fruit, bend low to 'gather' grain, and twist side to side to 'load the cart.' Do each move slowly 5 times.",
      scienceTieIn: "Gentle stretching increases blood flow to your muscles and brain, helping you feel refreshed and refocused after sitting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your town exists for reasons too — water, roads, or jobs. Why do you think people first settled where you live?",
      badge: { id: "fall-city-founder", name: "City Founder", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
