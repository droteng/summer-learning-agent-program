// Grade 5 History/Civics — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 2. Topic: writing, records, and why they changed history. Grade-5
// counterpart of g6.fall.hist.w4.d2, with shorter passages, vocabulary
// support, and simpler cause/effect.

export const fallG5HistoryW4D2 = {
  id: "g5.fall.hist.w4.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Writing and records change everything",
  topicTag: "writing-systems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.3-5", "C3.D2.His.10.3-5"],
  hook: "Before writing, every deal and story lived only in someone's memory. Once people could write things down, they could keep them forever. Today you find out why that mattered.",
  miniLesson: [
    "The first writing began as simple marks for counting things — like tally marks for sheep or bags of grain.",
    "Over time, those marks turned into symbols. In Mesopotamia they used cuneiform (say: kew-NAY-uh-form); in Egypt they used picture-signs called hieroglyphs (say: HY-ruh-glifs).",
    "A record is writing that saves information. Records let laws and stories last longer than any one person's memory."
  ],
  workedExample: {
    prompt: "How did writing help a city trade fairly?",
    steps: [
      "A trade has amounts and promises that people can forget.",
      "A written record saves the exact amount and the deal.",
      "If people argue later, they can check the record.",
      "So writing made trades fairer and easier to track."
    ],
    answer: "A written record saved the amount and the deal, so people could check it and trade fairly."
  },
  items: [
    {
      id: "g5.fall.hist.w4.d2.q1",
      type: "multiple_choice",
      stem: "What did the very first writing mostly keep track of?",
      choices: [
        "Songs and poems",
        "Counts of goods, like grain and animals",
        "The weather next week",
        "Sports scores"
      ],
      answerIndex: 1,
      explanation: "Writing began as a practical way to count goods, before it was used for stories.",
      hintLadder: [
        "Think about what a busy trading city needed to count.",
        "It was useful, not fancy, at first.",
        "Counts of grain and animals."
      ]
    },
    {
      id: "g5.fall.hist.w4.d2.q2",
      type: "multiple_choice",
      stem: "Cuneiform and hieroglyphs are examples of...",
      choices: [
        "modern computers",
        "early writing systems",
        "farming tools",
        "rivers"
      ],
      answerIndex: 1,
      explanation: "Cuneiform (Mesopotamia) and hieroglyphs (Egypt) were two of the earliest ways to write.",
      hintLadder: [
        "Both are ways of writing.",
        "They come from ancient Mesopotamia and Egypt.",
        "Early writing systems."
      ]
    },
    {
      id: "g5.fall.hist.w4.d2.q3",
      type: "multiple_choice",
      stem: "'Prehistory' means the time BEFORE written records. Does that mean nothing happened back then?",
      choices: [
        "Yes — nothing happened before writing",
        "No — lots happened, but there were no written records to tell us about it",
        "Yes — people could not think yet",
        "No — because writing came first"
      ],
      answerIndex: 1,
      explanation: "Plenty happened in prehistory. We just learn about it from objects and bones, not from writing.",
      hintLadder: [
        "'Pre' means before. Before what, exactly?",
        "It is about written records, not about events.",
        "Things happened; we just have no writing from then."
      ],
      misconceptionsTargeted: ["prehistory-means-nothing-happened"]
    },
    {
      id: "g5.fall.hist.w4.d2.q4",
      type: "short_answer",
      stem: "Give one way writing changed daily life in an ancient city, and tell how it helped.",
      rubric: {
        level3: "Names a clear change (records, laws, stories, messages) AND tells how it helped.",
        level2: "Names a change but the explanation is thin.",
        level1: "Vague or not related."
      },
      exemplar: "Writing let cities post their laws where everyone could see them, so people knew the rules and leaders could not change them in secret.",
      hintLadder: [
        "Pick one use: laws, trade records, or stories.",
        "How did writing it down help people?",
        "Tell the effect on daily life."
      ]
    },
    {
      id: "g5.fall.hist.w4.d2.q5",
      type: "short_answer",
      stem: "Imagine a city with NO writing. Describe one problem that would be hard to solve, and tell why.",
      rubric: {
        level3: "Describes a real problem (forgotten deals, argued amounts, lost rules) AND tells why having no writing makes it hard.",
        level2: "Names a problem but the 'why' is thin.",
        level1: "Not related or no reasoning."
      },
      exemplar: "Without writing, two traders might argue about how much grain was owed, and with no record to check, no one could prove who was right.",
      hintLadder: [
        "What needs people to remember exact amounts or rules?",
        "What happens when memories do not match?",
        "Tell why a written record would have helped."
      ]
    }
  ],
  reflectionPrompt: "You read and write all day — texts, lists, signs. Pick one thing you wrote today that someone in the future might keep as a record.",
  misconceptionBank: [
    {
      id: "prehistory-means-nothing-happened",
      label: "Thinks 'prehistory' means nothing happened",
      description: "Mixes up 'before written records' with 'before anything happened.'",
      coachMove: "Explain: lots happened in prehistory — we just learn it from objects and bones, not from writing."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Memory That Never Forgets",
      prompt:
        "I started out just counting sheep and grain, but I ended up holding laws and stories for thousands of years. People forget; I do not. What am I?",
      answer: "Writing! It began as simple marks to count goods, then grew into a way to save words and ideas that last far longer than one person's memory.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Picture-Writing System",
      challenge:
        "Early writing started as pictures and symbols, like cuneiform and hieroglyphs. Invent 6 of your own symbols that stand for things or ideas, then write a short secret message.",
      steps: [
        "Pick 6 common things or ideas (sun, food, friend, danger, happy, river...).",
        "Draw one simple symbol for each — easy to redraw.",
        "Make a 'key' that shows what each symbol means.",
        "Write a 1-line secret message using only your symbols and let someone decode it."
      ],
      deliverable: "A key of 6 invented symbols plus a short message written in them.",
      choiceBoard: [
        "Draw the symbols and a secret message on paper.",
        "Press your symbols into playdough or foil to make a 'clay tablet' look.",
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
          id: "g5.fall.hist.w4.d2.arena1",
          type: "multiple_choice",
          stem: "Why do we call the time BEFORE written records 'prehistory'?",
          choices: [
            "Because nothing important happened then",
            "Because there is no writing from then, so we learn about it from objects and bones",
            "Because people could not talk yet",
            "Because it was before Earth existed"
          ],
          answerIndex: 1,
          explanation: "'Prehistory' means before written records. Lots happened — we just study it through artifacts, not writing.",
          hintLadder: [
            "'Pre' means before. Before WHAT?",
            "It is about records, not about events.",
            "No writing yet, so we use objects and bones."
          ]
        },
        {
          id: "g5.fall.hist.w4.d2.arena2",
          type: "short_answer",
          stem: "Writing lets ideas last longer than memory. Name one thing we know today only because ancient people wrote it down, and tell why memory alone could not have saved it.",
          rubric: {
            level3: "Names something written (a law, story, ruler's name, calendar) AND explains that without writing it would have been forgotten or changed over time.",
            level2: "Names something written but the 'why memory fails' part is thin.",
            level1: "Vague or not related, with no reasoning."
          },
          exemplar: "We know ancient laws only because they were carved in stone. If they had only lived in people's memories, the exact rules would have been forgotten over hundreds of years.",
          hintLadder: [
            "Think of laws, stories, or rulers' names from long ago.",
            "How do we know the EXACT words?",
            "Tell why memory passed down for years would change or vanish."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Trace and Breathe",
      prompt:
        "With your finger, slowly 'write' your name in the air. Breathe in as you start each letter and out as you finish it. Notice how slowing down makes each move feel calm.",
      scienceTieIn: "Slow movement with steady breathing calms your body and helps your brain settle and focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You read and write all day — texts, lists, signs. Pick one thing you wrote today that someone in the future might keep to understand your life.",
      badge: { id: "g5-fall-junior-scribe", name: "Junior Scribe", emoji: "📜" },
      estimatedMinutes: 7
    }
  }
};
