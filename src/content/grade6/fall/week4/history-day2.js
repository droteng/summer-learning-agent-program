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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Memory That Never Forgets",
      prompt:
        "I was invented to count sheep and grain, but I ended up holding laws, stories, and secrets across thousands of years. Living people forget; I do not. What am I?",
      answer: "Writing! It began as simple marks to count goods, then grew into a way to record words and ideas that outlive any single person's memory.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Picture-Writing System",
      challenge:
        "Early writing started as pictures and symbols (like cuneiform and hieroglyphs). Invent 6 of your own symbols that stand for things or ideas, then write a short secret message with them.",
      steps: [
        "Pick 6 common things or ideas (sun, food, friend, danger, happy, river...).",
        "Draw one simple symbol for each — easy to redraw.",
        "Make a 'key' that shows what each symbol means.",
        "Write a 1–2 line message using only your symbols and challenge someone to decode it."
      ],
      deliverable: "A symbol key of 6 invented symbols plus a short message written in them.",
      choiceBoard: [
        "Draw the symbols and a secret message on paper.",
        "Make a 'clay tablet' look by pressing symbols into playdough or foil.",
        "Write a real sentence about your day using only symbols, then translate it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.hist.w4.d2.arena1",
          type: "multiple_choice",
          stem: "Why do historians call the time BEFORE written records 'prehistory'?",
          choices: [
            "Because nothing important happened back then",
            "Because there are no written accounts, so we learn it from objects and bones instead",
            "Because people couldn't talk yet",
            "Because it was before the planet existed"
          ],
          answerIndex: 1,
          explanation: "'Prehistory' means before written records. Plenty happened — we just study it through artifacts rather than writing.",
          hintLadder: [
            "'Pre' means before. Before WHAT, exactly?",
            "It's about written records, not about events.",
            "No writing yet, so we rely on objects and bones."
          ]
        },
        {
          id: "g6.fall.hist.w4.d2.arena2",
          type: "short_answer",
          stem: "Writing let knowledge outlive a person's memory. Describe one thing we know today ONLY because ancient people wrote it down, and explain why memory alone couldn't have preserved it.",
          rubric: {
            level3: "Names a plausible written record (a law, story, trade deal, ruler's name, calendar) AND explains that without writing it would have been forgotten or changed across generations.",
            level2: "Names something written down but the 'why memory fails' part is thin.",
            level1: "Vague or unrelated, with no reasoning."
          },
          exemplar: "We know ancient laws like Hammurabi's Code only because they were carved in stone. If they'd only lived in people's memories, the exact rules would have been forgotten or changed over hundreds of years.",
          hintLadder: [
            "Think of laws, stories, or rulers' names from long ago.",
            "How do we know the EXACT words?",
            "Explain why memory passed down for centuries would drift or vanish."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Trace and Breathe",
      prompt:
        "With your finger, slowly 'write' your name in the air, breathing in as you start each letter and out as you finish it. Notice how slowing down makes each stroke feel calm and deliberate.",
      scienceTieIn: "Slow, deliberate movement paired with steady breathing calms your nervous system and helps your brain settle and focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You write and read all day — texts, lists, signs. Pick one thing you wrote today that someone in the future might 'record' to understand your life.",
      badge: { id: "fall-first-scribe", name: "First Scribe", emoji: "📜" },
      estimatedMinutes: 7
    }
  }
};
