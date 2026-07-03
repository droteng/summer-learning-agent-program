// Grade 5 Summer History/Civics — Week 7 (History Missions), Day 1.
// Grade-5 counterpart of g6.hist.w7.d1 (ancient civilizations), pitched down one
// level: shorter passages, vocab support, concrete examples, and a paragraph frame.

export const summerG5HistoryW7D1 = {
  id: "g5.summer.hist.w7.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "Ancient civilizations",
  topicTag: "ancient-civilizations",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.3-5", "C3.D2.His.3.3-5"],
  hook: "Some cities are thousands of years old, and their ideas still shape your day. Today you meet four ancient civilizations that started along big rivers.",
  keyTerms: [
    { term: "Civilization", definition: "A large group of people living together with cities, jobs, and rules." },
    { term: "River valley", definition: "The low land next to a big river, with rich soil that is good for farming." },
    { term: "Surplus", definition: "Extra food left over after everyone has eaten. 'Surplus' means 'more than you need.'" }
  ],
  miniLesson: [
    "Long ago, big cities grew up next to major rivers, because rivers gave water and rich soil for farms. Four famous ones were Mesopotamia, Egypt, the Indus Valley, and Ancient China.",
    "Writing let people save ideas for the future. Egypt used picture-writing called hieroglyphs, and Mesopotamia used wedge marks called cuneiform.",
    "These civilizations invented things we still use, like the wheel, farming with water (irrigation), and calendars."
  ],
  workedExample: {
    prompt:
      "Why did the first big cities grow next to rivers like the Nile?",
    steps: [
      "The river gave people fresh water to drink and fish to eat.",
      "When the river flooded, it left rich mud that made farms grow lots of food.",
      "With extra (surplus) food, not everyone had to farm.",
      "Some people could do other jobs, like building or writing, and cities grew."
    ],
    answer: "River water + rich soil made extra food, so people could do new jobs and build cities."
  },
  items: [
    {
      id: "g5.summer.hist.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which river is matched with the WRONG civilization?",
      choices: [
        "Egypt — the Nile River",
        "Mesopotamia — the Tigris River",
        "Indus Valley — the Indus River",
        "Ancient China — the Amazon River"
      ],
      answerIndex: 3,
      explanation: "The Amazon River is in South America, not China. Ancient China grew along the Yellow River in Asia.",
      hintLadder: [
        "Three are correct. One is on the wrong continent.",
        "The Amazon River is in South America.",
        "China is in Asia, so the Amazon does not belong."
      ]
    },
    {
      id: "g5.summer.hist.w7.d1.q2",
      type: "multiple_choice",
      stem: "Which ancient writing system belonged to Egypt?",
      choices: ["Cuneiform", "Hieroglyphs", "The alphabet you use today", "Indus script"],
      answerIndex: 1,
      explanation: "Hieroglyphs are Egypt's picture-writing, found on temple walls and on paper made from papyrus.",
      hintLadder: [
        "It uses little pictures.",
        "You can see it carved on temple walls in Egypt.",
        "It is called hieroglyphs."
      ]
    },
    {
      id: "g5.summer.hist.w7.d1.q3",
      type: "multiple_choice",
      stem: "Why was extra (surplus) food so important for building cities?",
      choices: [
        "Extra food makes people grow taller.",
        "It meant not everyone had to farm, so some people could do other jobs.",
        "It tastes much better than normal food.",
        "It made all the farmers rich."
      ],
      answerIndex: 1,
      explanation: "If everyone must farm, no one is free to build, write, or lead. Surplus food frees people to do new jobs, and cities can grow.",
      hintLadder: [
        "If everyone has to farm, who can build things?",
        "Extra food gives people free time.",
        "Some people could do new jobs instead of farming."
      ],
      misconceptionsTargeted: ["thinks-cities-came-first"]
    },
    {
      id: "g5.summer.hist.w7.d1.q4",
      type: "short_answer",
      stem:
        "Name one invention from an ancient civilization that people still use today. In one or two sentences, explain what it is used for.",
      rubric: {
        level3: "Names a real ancient invention (like the wheel, irrigation, writing, or a calendar) and clearly explains what it is used for.",
        level2: "Names an ancient invention but the explanation is unclear or very short.",
        level1: "Names something modern (like the internet), or gives no explanation."
      },
      exemplar:
        "The wheel is an ancient invention that people still use. It is used to move heavy things and to make cars, bikes, and carts roll.",
      hintLadder: [
        "Think of the wheel, irrigation, writing, or the calendar.",
        "Pick one that is thousands of years old, not modern.",
        "Say what it helps people do."
      ]
    },
    {
      id: "g5.summer.hist.w7.d1.q5",
      type: "short_answer",
      stem:
        "Pick one thing you used today (like a calendar, a written word, or a wheel). Fill in this frame: 'Today I used ___. This idea came from ancient ___ (a civilization). It helped because ___.'",
      rubric: {
        level3: "Names a specific modern item, a specific ancient civilization, and a clear reason it helps.",
        level2: "Has the item and a civilization, but the connection is unclear.",
        level1: "Only names an item or only a civilization, with no clear link."
      },
      exemplar:
        "Today I used a calendar. This idea came from ancient Mesopotamia. It helped because it tells me what day it is and when the weekend starts.",
      hintLadder: [
        "Pick one small thing you used today.",
        "Which ancient civilization first had that idea?",
        "Say one way it helps you."
      ]
    }
  ],
  reflectionPrompt: "Today you traced ancient roots. What is something around you that might be much older than you thought?",
  misconceptionBank: [
    {
      id: "thinks-cities-came-first",
      label: "Thinks cities came before farming",
      description: "Pictures the big city first, then farms growing around it — but it happened the other way.",
      coachMove: "Walk it back: farms make extra food, extra food frees people for new jobs, and then cities grow. Farming comes first."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Older Than You Think",
      prompt:
        "I have 7 days, I help you know when your weekend starts, and I am thousands of years old. What am I?",
      answer: "The 7-day week! It comes from ancient Mesopotamia, long ago, and you still use it every single week.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent-a-Civilization",
      challenge:
        "Design your own river civilization. Give it a river, a simple writing system, and one helpful invention, just like the four real ones you studied.",
      steps: [
        "Name your civilization and the river it grows along, and say why the river helps.",
        "Invent a simple writing system: draw 3 symbols and say what each one means.",
        "Design one invention that solves a real problem, like storing food or moving water.",
        "Write one sentence about how a kid today might use a version of your invention."
      ],
      deliverable: "A one-page profile with your river, 3 writing symbols, and one labeled invention.",
      choiceBoard: [
        "Draw a map of your civilization along its river.",
        "Design the 3-symbol writing system in detail.",
        "Draw and label your invention."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ancient Civilizations Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w7.d1.arena1",
          type: "multiple_choice",
          stem: "Ancient China's first big civilization grew along which river?",
          choices: [
            "The Nile River",
            "The Yellow River",
            "The Tigris River",
            "The Indus River"
          ],
          answerIndex: 1,
          explanation: "Ancient China grew along the Yellow River. The Nile is Egypt's, the Tigris is Mesopotamia's, and the Indus belongs to the Indus Valley.",
          hintLadder: [
            "This river is named after a color.",
            "It is in Asia, where China is.",
            "It is the Yellow River."
          ]
        },
        {
          id: "g5.summer.hist.w7.d1.arena2",
          type: "short_answer",
          stem: "In 2 or 3 sentences, explain the chain from a flooding river to a growing city. Use the word 'surplus.'",
          rubric: {
            level3: "Clear chain: the flood leaves rich soil, farms grow surplus food, some people do new jobs, and a city grows. All steps in order.",
            level2: "Mentions surplus and cities, but a step is missing or out of order.",
            level1: "Just says rivers help cities, with no surplus or new-jobs step."
          },
          exemplar: "When a river floods, it leaves rich mud that grows lots of food. With surplus food, not everyone has to farm, so some people become builders or writers. Those new jobs help a city grow.",
          hintLadder: [
            "Start with what the flood does to the soil.",
            "Extra food means not everyone has to farm. Then what?",
            "New jobs lead to a city."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: River Flow Stretch",
      prompt:
        "Stand and 'flow' like a river: sway your arms slowly side to side, then ripple your fingers down like water, then reach up tall like a growing city. Repeat 4 times, slow and smooth.",
      scienceTieIn: "Moving water carved the valleys these civilizations grew in, and gentle movement sends oxygen-rich blood to your brain to help you focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one ancient invention from today (writing, the wheel, irrigation, or the calendar). How would your day be different if it had never been invented?",
      badge: { id: "g5-summer-ancient-architect", name: "Ancient Architect", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
