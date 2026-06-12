// Grade 6 History/Civics — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 2. Topic: writing, records, and why they changed history.

export const fallG6HistoryW4D2 = {
  id: "g6.fall.hist.w4.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Writing and records change everything",
  topicTag: "writing-systems",
  estimatedMinutes: 17,
  standardsRefs: ["C3.D2.His.2", "C3.D2.His.10"],
  hook: "Before writing, every deal and story lived only in memory. The moment people could write things down, history itself began. Today you explore why.",
  miniLesson: [
    "Early writing began as simple marks for counting goods — like tallies for sheep or grain.",
    "Over time those marks became symbols (cuneiform in Mesopotamia, hieroglyphs in Egypt) that could record words and ideas.",
    "Writing let knowledge outlive a person's memory: laws, stories, and discoveries could be passed on exactly."
  ],
  workedExample: {
    prompt: "Explain how writing helped a city keep fair trade.",
    steps: [
      "Trades involve amounts and promises people can forget or argue about.",
      "A written record fixes the amount and the agreement.",
      "If there's a dispute, the record settles it.",
      "So writing made trade more honest and trackable."
    ],
    answer: "Written records fixed amounts and deals, so disputes could be settled fairly."
  },
  items: [
    {
      id: "g6.fall.hist.w4.d2.q1",
      type: "multiple_choice",
      stem: "What did the very earliest writing mostly record?",
      choices: [
        "Poems and songs",
        "Counts of goods like grain and animals",
        "Weather forecasts",
        "Sports scores"
      ],
      answerIndex: 1,
      explanation: "Writing began as practical record-keeping — counting goods — before it recorded stories.",
      hintLadder: [
        "Think about what a busy trading city most needed to track.",
        "It was practical, not poetic, at first.",
        "Counts of grain and animals."
      ]
    },
    {
      id: "g6.fall.hist.w4.d2.q2",
      type: "multiple_choice",
      stem: "Cuneiform and hieroglyphs are examples of...",
      choices: ["modern alphabets", "early writing systems", "farming tools", "rivers"],
      answerIndex: 1,
      explanation: "Cuneiform (Mesopotamia) and hieroglyphs (Egypt) were among the earliest writing systems.",
      hintLadder: [
        "Both are ways of writing.",
        "They come from ancient Mesopotamia and Egypt.",
        "Early writing systems."
      ]
    },
    {
      id: "g6.fall.hist.w4.d2.q3",
      type: "multiple_choice",
      stem: "Historians call the time before written records 'prehistory.' Why does writing mark the start of 'history'?",
      choices: [
        "Nothing happened before writing",
        "Written records let us know what people did, said, and agreed to",
        "People couldn't think before writing",
        "History is just a name"
      ],
      answerIndex: 1,
      explanation: "Writing gives direct records, so we can know events and ideas instead of only guessing from objects.",
      hintLadder: [
        "How do we KNOW about a time period?",
        "What do written records give us that bones and tools don't?",
        "Direct accounts of what people did and said."
      ],
      misconceptionsTargeted: ["prehistory-means-nothing-happened"]
    },
    {
      id: "g6.fall.hist.w4.d2.q4",
      type: "short_answer",
      stem: "Give one way writing changed daily life in an ancient city, and explain how.",
      rubric: {
        level3: "Names a specific change (records, laws, stories, contracts) AND explains the effect clearly.",
        level2: "Names a change with thin explanation.",
        level1: "Vague or unrelated."
      },
      exemplar: "Writing let cities post laws everyone could see, so people knew the rules and rulers couldn't change them secretly.",
      hintLadder: [
        "Pick one use: laws, trade records, or stories.",
        "How did writing it down help?",
        "Explain the effect on daily life."
      ]
    },
    {
      id: "g6.fall.hist.w4.d2.q5",
      type: "short_answer",
      stem: "Imagine a city with NO writing. Describe one problem that would be hard to solve, and why.",
      rubric: {
        level3: "Describes a realistic problem (forgotten deals, disputed amounts, lost laws) AND explains why no-writing makes it hard.",
        level2: "Names a problem but the 'why' is thin.",
        level1: "Unrelated or no reasoning."
      },
      exemplar: "Without writing, two traders might disagree about how much grain was owed, and with no record to check, the argument couldn't be settled fairly.",
      hintLadder: [
        "What relies on remembering exact amounts or rules?",
        "What happens when memories disagree?",
        "Explain why a record would have helped."
      ]
    }
  ],
  reflectionPrompt: "You write and read all day — texts, lists, signs. Pick one thing you wrote today that someone might 'record' for the future.",
  misconceptionBank: [
    {
      id: "prehistory-means-nothing-happened",
      label: "Thinks 'prehistory' means nothing happened",
      description: "Confuses 'before written records' with 'before anything occurred.'",
      coachMove: "Clarify: lots happened in prehistory — we just learn it from objects and bones, not written accounts."
    }
  ]
};
