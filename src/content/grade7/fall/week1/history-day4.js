// Grade 7 History/Civics — Fall Expedition, Week 1 (Back to Basics), Day 4.
// Grade 7 counterpart of g6.fall.hist.w1.d4. Same "harvest and the rise of
// communities" topic, raised to Grade 7: multi-link cause-and-effect chains
// and comparing/weighing historical sources.

export const fallG7HistoryW1D4 = {
  id: "g7.fall.hist.w1.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The harvest and the rise of communities",
  topicTag: "cause-and-effect-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14", "C3.D3.His.9"],
  hook: "Why do so many cultures celebrate a fall harvest? Trace the chain: for most of human history, the autumn harvest set off a series of changes that decided whether a community merely survived the winter or grew into something bigger.",
  miniLesson: [
    "When people learned to farm (the Agricultural Revolution), they could store a fall surplus and stay put — the first link in a long causal chain that reshaped human society.",
    "That chain has several links: surplus food → some people freed from finding food → specialized jobs (builders, traders, leaders) → denser settlements → early governments and record-keeping to manage stored grain and trade.",
    "Historians test such chains against SOURCES. A primary source (a granary's clay tally tablet) and a secondary source (a modern textbook summary) each have strengths and limits; strong claims weigh how directly and reliably each source supports a link."
  ],
  workedExample: {
    prompt: "Build a THREE-link cause-and-effect chain from farming to early record-keeping, then name one source that would support it.",
    steps: [
      "Link 1: people farmed, so they could store a surplus harvest.",
      "Link 2: because food was stored, not everyone gathered food, so some specialized in trade and leadership.",
      "Link 3: because stored grain and trade had to be tracked, communities developed early counting and writing to keep records.",
      "Supporting source: ancient clay tokens and tally tablets used to record grain amounts are primary evidence for the last link."
    ],
    answer: "Farming → stored surplus → specialized jobs → record-keeping; ancient grain-tally tablets are primary-source evidence for the record-keeping link."
  },
  items: [
    {
      id: "g7.fall.hist.w1.d4.q1",
      type: "multiple_choice",
      stem: "Which sequence shows the correct ORDER of a cause-and-effect chain in early history?",
      choices: [
        "Record-keeping → farming → surplus → towns",
        "Farming → stored surplus → specialized jobs → larger settlements",
        "Towns → surplus → farming → specialized jobs",
        "Specialized jobs → farming → towns → surplus"
      ],
      answerIndex: 1,
      explanation: "The chain runs forward: farming produces surplus, surplus frees people to specialize, and specialization supports larger settlements. The others scramble the order.",
      hintLadder: [
        "What had to come first before food could be stored?",
        "Each link must actually cause the next one in order.",
        "Farming → surplus → specialized jobs → larger settlements."
      ]
    },
    {
      id: "g7.fall.hist.w1.d4.q2",
      type: "multiple_choice",
      stem: "A historian compares two sources about grain storage: (A) a clay tablet tallying a temple's grain from 3000 BCE, and (B) a modern textbook paragraph. Which statement is most accurate?",
      choices: [
        "The textbook is always more reliable because it is newer.",
        "The tablet is a primary source created at the time; the textbook is a secondary source that interprets many primary sources.",
        "Both are primary sources.",
        "Neither can tell us anything about the past."
      ],
      answerIndex: 1,
      explanation: "The tablet was made at the time by people involved (primary source); the textbook was written later and synthesizes evidence (secondary source). Each has different strengths.",
      hintLadder: [
        "A primary source is created during the time being studied.",
        "A secondary source interprets primary sources later.",
        "The tablet is primary; the textbook is secondary."
      ],
      misconceptionsTargeted: ["newer-source-always-better"]
    },
    {
      id: "g7.fall.hist.w1.d4.q3",
      type: "multiple_choice",
      stem: "Which is the strongest EFFECT to place at the END of a chain that starts with 'stored surplus food'?",
      choices: [
        "Everyone was forced to hunt every day.",
        "Farming was forgotten within a generation.",
        "Larger settlements with specialized jobs and early governments could develop.",
        "People immediately abandoned their villages."
      ],
      answerIndex: 2,
      explanation: "Stored surplus freed people from daily food-getting, which over several links allowed specialization, denser settlements, and organized governance — the strongest downstream effect.",
      hintLadder: [
        "An effect at the end of the chain should follow from every link before it.",
        "If food is stored, what becomes possible over time?",
        "Surplus eventually supports specialization and larger, organized settlements."
      ]
    },
    {
      id: "g7.fall.hist.w1.d4.q4",
      type: "short_answer",
      stem: "Two sources describe a fall harvest festival: a farmer's diary from 1850 and a museum website from today. Explain which is the primary source and how each could help a historian understand the festival.",
      rubric: {
        level3: "Identifies the 1850 diary as the primary source AND explains how the diary gives a firsthand account while the museum site offers broader, verified context — using both together.",
        level2: "Names the primary source correctly but explains only one source's value, or explains both but mislabels which is primary.",
        level1: "Cannot distinguish primary from secondary, or gives no reasoning about how the sources help."
      },
      exemplar: "The 1850 diary is the primary source — written at the time by someone who was there, so it captures firsthand details and feelings. The museum website is secondary, but it can verify dates and place the diary in wider context, so a historian would use both together.",
      hintLadder: [
        "Which source was made at the time of the event?",
        "What does a firsthand account give that a later summary cannot?",
        "What can a modern museum add that a single diary cannot?"
      ]
    },
    {
      id: "g7.fall.hist.w1.d4.q5",
      type: "short_answer",
      stem: "Write your own cause-and-effect chain with TWO links, starting from the fall harvest and ending with why many cultures hold harvest festivals. Use 'so' or 'because' at each link.",
      rubric: {
        level3: "A clear two-link chain (e.g., good harvest → stored food ensured winter survival → communities celebrate that survival with festivals) using so/because accurately.",
        level2: "Has a cause and effect but only one link, or a link is vague or partly inaccurate.",
        level1: "Lists facts with no real cause-effect chain."
      },
      exemplar: "A good fall harvest meant a community could store enough food, so it would survive the winter; because that survival was never guaranteed, people held festivals to celebrate and give thanks for the harvest being safely gathered.",
      hintLadder: [
        "Link 1: what did a good harvest make possible?",
        "Link 2: why would surviving the winter be worth celebrating?",
        "Join both links with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Does your family or culture have a fall or harvest tradition? What primary source (a photo, a recipe, a relative's story) could you use to learn its history?",
  misconceptionBank: [
    {
      id: "newer-source-always-better",
      label: "Assumes a newer source is always more reliable",
      description: "Believes a modern textbook automatically beats an old primary document.",
      coachMove: "Distinguish the roles: a primary source gives firsthand evidence; a secondary source interprets it. Newer is not automatically better — it depends on what you need."
    },
    {
      id: "surplus-means-shortage",
      label: "Confuses surplus with shortage",
      description: "Thinks 'surplus' means too little food rather than extra.",
      coachMove: "Anchor it: a surplus is the leftover you can store or share — the opposite of a shortage."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Primary or Secondary Riddle",
      prompt:
        "I was scratched into clay by a temple scribe in 3000 BCE to count sacks of stored grain. A historian today reads me to learn how harvests were tracked. Am I a PRIMARY source or a SECONDARY source — and how do you know?",
      answer: "Primary — I was created at the time of the events by someone directly involved. A source that only interprets me later would be secondary.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Found a Harvest Village",
      challenge:
        "Imagine you're founding a village just after people learn to farm. Show the full cause-and-effect chain from harvest to a growing community, and back one link with a 'source' you invent.",
      steps: [
        "Name your village and the main crop it stores each fall.",
        "Write a THREE-link chain: harvest surplus → freed labor → specialized jobs → early record-keeping or governance.",
        "Invent three non-farmer jobs the surplus makes possible, and one 'record' your village keeps (a tally, a map, a law).",
        "Draw or describe how your village looks, and note which invented record would be a primary source for a future historian."
      ],
      deliverable: "A village plan showing a multi-link cause-and-effect chain plus one invented primary source that would document it.",
      choiceBoard: [
        "Draw a labeled map of your harvest village with its record-keeping spot marked.",
        "Write a short 'primary source' document your village would create (a grain tally or a village rule).",
        "Make a cause-and-effect flowchart: harvest → surplus → jobs → records → growth."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause-and-Effect Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.hist.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Which option is the strongest THREE-link cause-and-effect chain in early history?",
          choices: [
            "Festivals were fun, so people farmed, so winters warmed.",
            "People stored surplus harvest, so some specialized in trade and leadership, so communities developed records and early governments.",
            "Towns existed, so farming began, so surplus appeared.",
            "People moved constantly, so they built permanent towns, so they forgot farming."
          ],
          answerIndex: 1,
          explanation: "Option 2 links surplus → specialization → records/governance in the correct forward order, each link actually causing the next. The others reverse or break the chain.",
          hintLadder: [
            "Each link must cause the next, in order.",
            "Which chain moves surplus → specialized jobs → organized community?",
            "Surplus → specialization → records and government is the strongest chain."
          ]
        },
        {
          id: "g7.fall.hist.w1.d4.arena2",
          type: "short_answer",
          stem: "A historian has two sources on early grain storage: a 5,000-year-old clay tally tablet and a modern archaeology article. Explain how the historian should USE both together, including which is primary and which is secondary.",
          rubric: {
            level3: "Labels the tablet primary and the article secondary AND explains using them together — the tablet as firsthand evidence, the article to interpret, verify, and contextualize it.",
            level2: "Correctly labels the sources but explains only one clearly, or explains both but mislabels which is primary.",
            level1: "Cannot distinguish the sources or gives no reasoning about using them together."
          },
          exemplar: "The clay tablet is primary — firsthand evidence made at the time to count grain. The archaeology article is secondary, interpreting many finds. The historian reads the tablet for direct data, then uses the article to date it, check accuracy, and explain what it means, so the two sources strengthen each other.",
          hintLadder: [
            "Which source was created at the time the grain was stored?",
            "What does the firsthand tablet give that the article cannot?",
            "How does the modern article help interpret and verify the tablet?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Gather",
      prompt:
        "Stand and mime the harvest chain: reach up to pick, bend to gather, twist to load a basket, then step to 'store' it — repeat the four-step sequence for 30 seconds, like acting out each link of cause and effect.",
      scienceTieIn: "Gentle reaching and twisting boosts blood flow and loosens stiff muscles, helping your brain stay alert to trace the next chain of causes.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Does your family or culture have a fall or harvest tradition? Write what it is, one guess about its history, and one primary source you could use to check that guess.",
      badge: { id: "g7-fall-source-sleuth", name: "Source Sleuth", emoji: "🌾" },
      estimatedMinutes: 7
    }
  }
};
