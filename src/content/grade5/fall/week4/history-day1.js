// Grade 5 History/Civics — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 1. Topic: how farming surplus gave rise to the first cities. Grade-5
// counterpart of g6.fall.hist.w4.d1, pitched down with shorter passages,
// vocabulary support, and simpler cause/effect.

export const fallG5HistoryW4D1 = {
  id: "g5.fall.hist.w4.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "From farms to the first cities",
  topicTag: "ancient-civilizations",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.3-5", "C3.D2.Geo.4.3-5"],
  hook: "The very first cities grew up between two rivers, long ago. Why there? The answer starts with something you already know: farms and the fall harvest.",
  miniLesson: [
    "A surplus (say: SIR-plus) means EXTRA food — more than a family needs to eat right now.",
    "Cities first grew where farming was easy: river valleys with water and rich soil, like the land between the Tigris and Euphrates rivers.",
    "When farms grew extra food, thousands of people could live close together in one place. That is how the first cities began."
  ],
  workedExample: {
    prompt: "Why did the first cities appear near rivers?",
    steps: [
      "Rivers gave water for crops and left rich soil behind.",
      "Rich soil + water = good harvests every year.",
      "Good harvests made extra food (a surplus).",
      "Extra food let many people live together, so a city could grow there."
    ],
    answer: "Rivers gave water and rich soil, so farms grew extra food, and that extra food let a city grow."
  },
  items: [
    {
      id: "g5.fall.hist.w4.d1.q1",
      type: "multiple_choice",
      stem: "Why did many early cities grow near rivers?",
      choices: [
        "Rivers were fun to swim in",
        "Rivers gave water and rich soil for good farming",
        "Rivers were always cold",
        "There was no reason at all"
      ],
      answerIndex: 1,
      explanation: "Water for crops and rich soil made river land great for growing extra food.",
      hintLadder: [
        "Think about what farms need.",
        "What do crops need that a river gives?",
        "Water plus rich soil equals good harvests."
      ]
    },
    {
      id: "g5.fall.hist.w4.d1.q2",
      type: "multiple_choice",
      stem: "The first cities grew in the land between two famous rivers. Those rivers were the...",
      choices: [
        "Amazon and Nile",
        "Tigris and Euphrates",
        "Mississippi and Ohio",
        "Thames and Rhine"
      ],
      answerIndex: 1,
      explanation: "The first cities grew between the Tigris and Euphrates rivers.",
      hintLadder: [
        "The mini-lesson names these two rivers.",
        "Their names start with T and E.",
        "Tigris and Euphrates."
      ]
    },
    {
      id: "g5.fall.hist.w4.d1.q3",
      type: "multiple_choice",
      stem: "What does the word 'surplus' mean?",
      choices: [
        "Not enough food",
        "Extra food, more than people need right now",
        "A kind of river",
        "A big city wall"
      ],
      answerIndex: 1,
      explanation: "A surplus is EXTRA food — more than a family needs at that moment.",
      hintLadder: [
        "Look back at the mini-lesson vocabulary word.",
        "Does it mean too little or too much?",
        "It means EXTRA."
      ],
      misconceptionsTargeted: ["surplus-means-not-enough"]
    },
    {
      id: "g5.fall.hist.w4.d1.q4",
      type: "short_answer",
      stem: "Name TWO things a brand-new city would need to help thousands of people live together, and tell why each one helps.",
      rubric: {
        level3: "Names two reasonable needs (food storage, walls, leaders, rules, a market) AND tells how each one helps the city.",
        level2: "Names two but only explains one, or the reasons are thin.",
        level1: "Names fewer than two, or gives no reasons."
      },
      exemplar: "A city needs food storage so extra grain is safe until winter, and rules so people can settle arguments without fighting.",
      hintLadder: [
        "Picture thousands of people all living in one place.",
        "What problems would come up? (arguments, storing food, staying safe)",
        "Pick two and tell how each one helps."
      ]
    },
    {
      id: "g5.fall.hist.w4.d1.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence that connects extra food (a surplus) to the growth of cities. Use the word 'so' or 'because.'",
      rubric: {
        level3: "Clear sentence linking extra food/farming to a city growing, using 'so' or 'because.'",
        level2: "Has a cause and an effect, but the link is fuzzy or partly off.",
        level1: "Just lists facts with no cause-and-effect link."
      },
      exemplar: "River farms grew extra food, so thousands of people could live together and build a city.",
      hintLadder: [
        "Cause: farms grew extra food.",
        "Effect: a city grew.",
        "Join them with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Your town or city exists for reasons too — water, roads, or jobs. Why do you think people first settled where you live?",
  misconceptionBank: [
    {
      id: "surplus-means-not-enough",
      label: "Thinks a surplus means too little food",
      description: "Mixes up 'surplus' (extra) with 'shortage' (not enough).",
      coachMove: "Anchor it: surplus = extra, like leftovers you save. A shortage is the opposite."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Settle Here?",
      prompt:
        "Would you rather start a new village next to a river valley with rich soil, or up on a dry, rocky hill? Think about FOOD first — which place could feed a lot of people?",
      answer:
        "The river valley wins for growing a city. Its rich soil grows good harvests, and extra food is what lets lots of people live together. The dry hill can't feed a crowd.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Your Own River City",
      challenge:
        "You get to start a city in a river valley! Draw a map that shows how the river and extra food help many people live together.",
      steps: [
        "Draw the river and mark the best farmland near it.",
        "Add 3 things your city needs (food storage, a market, a wall, a meeting place...).",
        "Label WHY each one helps people live together.",
        "Give your city a name and one sentence about what it is famous for."
      ],
      deliverable: "A labeled map of your river city showing the farmland and 3 city features.",
      choiceBoard: [
        "Draw the city map with labels.",
        "Write a short 'founder's announcement' telling why you picked this spot.",
        "Make a list of 5 jobs your city needs and why each one matters."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: First Cities Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.hist.w4.d1.arena1",
          type: "multiple_choice",
          stem: "Put these in the correct cause-and-effect order: (1) a city grows, (2) the river valley gives rich soil, (3) farms grow extra food.",
          choices: [
            "1 → 2 → 3",
            "2 → 3 → 1",
            "3 → 1 → 2",
            "2 → 1 → 3"
          ],
          answerIndex: 1,
          explanation: "Rich soil comes first, then extra food, then a city can grow: 2 → 3 → 1.",
          hintLadder: [
            "What comes FIRST, before there is any extra food?",
            "Soil gives good harvests; harvests give extra food.",
            "Rich soil → extra food → city."
          ]
        },
        {
          id: "g5.fall.hist.w4.d1.arena2",
          type: "short_answer",
          stem: "Extra food meant not everyone had to farm all day. Name one OTHER job a city might need, and tell why extra food made that job possible.",
          rubric: {
            level3: "Names a reasonable city job (builder, baker, guard, potter) AND explains that extra food freed people from farming to do it.",
            level2: "Names a job but the link to extra food is thin.",
            level1: "Names no clear job or gives no reason."
          },
          exemplar: "A city might need builders. Because farms made extra food, not everyone had to farm, so some people could build instead of growing food.",
          hintLadder: [
            "If there is extra food, does everyone still have to farm?",
            "What jobs help a city that are not farming?",
            "Connect: extra food → free time → a new job."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Stretch",
      prompt:
        "Pretend you are working a fall field: reach HIGH to pick fruit, bend LOW to gather grain, then twist side to side to load the cart. Do each move slowly 5 times.",
      scienceTieIn: "Gentle stretching sends more blood to your muscles and brain, so you feel fresh and ready to focus after sitting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Your town exists for reasons too — water, roads, or jobs. Why do you think people first settled where you live?",
      badge: { id: "g5-fall-city-sprout", name: "City Sprout", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
