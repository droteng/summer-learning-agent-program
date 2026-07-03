// Grade 5 Summer ELA/Writing — Week 8 (Capstone Week), Day 2.
// Grade-5 counterpart of g6.ela.w8.d2 (gathering research), pitched down one
// level: simpler know/wonder lists, vocab support, concrete source examples,
// two-part notes instead of three, celebratory capstone tone.

export const summerG5ElaW8D2 = {
  id: "g5.summer.ela.w8.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Gathering research",
  topicTag: "capstone-research",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.7", "CCSS.ELA-LITERACY.W.5.8"],
  hook: "Today you stop and gather facts BEFORE you build. Two great sources beat ten weak ones!",
  keyTerms: [
    { term: "Source", definition: "A place your fact comes from, like a book, a website, or an expert." },
    { term: "Reliable", definition: "A source you can trust because it tells the truth and shows where its facts come from." },
    { term: "Note", definition: "A short line you write with a fact plus where you found it." }
  ],
  miniLesson: [
    "Start with a 'Know and Wonder' list. Write 2 things you know for sure and 2 things you wonder about. The wonder list is what you go research.",
    "Find at least 2 reliable sources. Try different kinds — like a book AND a trusted website — so they can check each other.",
    "Take a short note for each source: write the fact AND where you found it. Future-you will thank present-you!"
  ],
  workedExample: {
    prompt:
      "Project: a poster comparing how 2 cities made their streets safer. How do you research it?",
    steps: [
      "Know and Wonder: I KNOW one city added bike lanes. I WONDER what the other city did.",
      "Find 2 sources: a city website and a news article.",
      "Take a note for each: the change the city made and one number, plus where you found it.",
      "Now you have facts — ready to build the poster on Day 3!"
    ],
    answer: "Know and Wonder list → 2 sources → one note each."
  },
  items: [
    {
      id: "g5.summer.ela.w8.d2.q1",
      type: "multiple_choice",
      stem: "Why write what you already KNOW before you research?",
      choices: [
        "To skip research.",
        "To find what you still WONDER about and go look for that.",
        "To fill up the page.",
        "To impress the teacher."
      ],
      answerIndex: 1,
      explanation: "Research works best when it is aimed. Your 'wonder' list is the target.",
      hintLadder: [
        "What is research FOR?",
        "For filling the gaps in what you know.",
        "List what you wonder first."
      ]
    },
    {
      id: "g5.summer.ela.w8.d2.q2",
      type: "multiple_choice",
      stem: "Two sources are stronger when they:",
      choices: [
        "Both copy the exact same blog post.",
        "Come from different kinds (a book and a website) so they can check each other.",
        "Are both from an unknown person.",
        "Are both really long."
      ],
      answerIndex: 1,
      explanation: "Two different kinds of sources can check each other. Two copies of the same thing is really just one source.",
      hintLadder: [
        "What does 'check each other' need?",
        "It needs sources that are different.",
        "Different kinds is the answer."
      ],
      misconceptionsTargeted: ["two-echoes"]
    },
    {
      id: "g5.summer.ela.w8.d2.q3",
      type: "multiple_choice",
      stem: "Which one is a COMPLETE research note?",
      choices: [
        "Sources are good.",
        "Tokyo changed 5,000 streetlights to LED bulbs in 2020. (Tokyo Energy Report)",
        "I saw it on a website somewhere.",
        "Tokyo is cool."
      ],
      answerIndex: 1,
      explanation: "It has a fact AND where it came from. The others are missing the fact, the source, or both.",
      hintLadder: [
        "A good note has two parts: fact and source.",
        "Which one names both?",
        "Only one has the fact and where it came from."
      ]
    },
    {
      id: "g5.summer.ela.w8.d2.q4",
      type: "short_answer",
      stem:
        "Your two sources DISAGREE about a fact. Write what you would do next, and explain WHY that's a good move.",
      rubric: {
        level3: "Says to check when each was written and/or where each got its facts, and explains that this often shows why they disagree.",
        level2: "Names a reasonable step but the reason is vague.",
        level1: "Says to just pick a favorite, guess, or give up."
      },
      exemplar:
        "I'd check when each source was written and where it got its facts. An older source might have old numbers, or one might have looked at a different place — that explains why they don't match.",
      hintLadder: [
        "Don't just pick your favorite.",
        "Two things can explain a disagreement: the date and where the facts came from.",
        "Check both, then explain why that helps."
      ]
    },
    {
      id: "g5.summer.ela.w8.d2.q5",
      type: "short_answer",
      stem:
        "For your capstone project: list 2 things you KNOW and 2 things you WONDER about.",
      rubric: {
        level3: "Four items — 2 clear things you know and 2 clear things you wonder — all tied to your project.",
        level2: "Four items, but some are out of place or a little vague.",
        level1: "Generic items, or fewer than 4."
      },
      exemplar:
        "Project: bees in gardens.\nKnow: bees carry pollen; bees make honey.\nWonder: how many flowers one bee visits in a day; what happens to a garden with no bees.",
      hintLadder: [
        "Name your project.",
        "Write 2 facts you are sure of (Know).",
        "Write 2 questions you still have (Wonder)."
      ]
    }
  ],
  reflectionPrompt: "Today you found what you still wonder about. What is the most surprising thing you don't yet know about your topic?",
  misconceptionBank: [
    {
      id: "two-echoes",
      label: "Counts the same fact from two places as two sources",
      description: "Finds the same paragraph copied on two websites and counts it as two sources.",
      coachMove: "Trace each source back. If both copied the same original, you really have ONE source."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Source Detective",
      prompt:
        "The same paragraph shows up on two different websites, word for word. The teacher asks how many sources you really have. What's the honest answer?",
      answer: "Just ONE! Two copies of the same paragraph is one source repeated — trace them both back to the same place.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Source Trading Cards",
      challenge:
        "Turn your 2 best sources into 'trading cards.' Each card names the source, its kind (book, website, or expert), and the strongest fact you got from it.",
      steps: [
        "Make one card for each source — give it a title and its kind.",
        "Write the best fact or number from that source.",
        "Add a line saying where it came from so future-you can find it.",
        "Pick which card you trust more, and say why."
      ],
      deliverable: "Two source 'trading cards,' each with its kind, a key fact, and where it came from.",
      choiceBoard: [
        "Draw two paper trading cards.",
        "Make a 2-row table comparing your sources.",
        "Record a 30-second 'meet my sources' intro."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Reliable Research Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w8.d2.arena1",
          type: "multiple_choice",
          stem: "You want to prove a fact about traffic in your town. Which is the STRONGEST source?",
          choices: [
            "An unknown person's comment on a video.",
            "A city website with dated traffic counts.",
            "A funny meme about traffic.",
            "Your friend's guess."
          ],
          answerIndex: 1,
          explanation: "A city website with real, dated traffic counts is something you can check and trust. The others have no date, no source, or are just opinions.",
          hintLadder: [
            "Strong sources have real facts you can check.",
            "Which one could you actually look up and name?",
            "It's the dated city website."
          ]
        },
        {
          id: "g5.summer.ela.w8.d2.arena2",
          type: "short_answer",
          stem: "Write ONE complete research note for your capstone. It must have BOTH parts: a fact AND where it came from.",
          rubric: {
            level3: "The note has a clear fact (a number or example) AND names where it came from.",
            level2: "Has one part clearly but the other is missing or vague.",
            level1: "Just a topic or an opinion with no fact and no source."
          },
          exemplar: "Fact: one honeybee can visit up to 100 flowers in a single trip. Where: National Geographic Kids, 'All About Bees.'",
          hintLadder: [
            "Start with the fact your source gives you.",
            "Make it specific — a number or example.",
            "End with where you found it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Reset",
      prompt:
        "Close your eyes and slowly name 3 sounds you can hear right now. Then take 3 slow breaths. Notice how your focus feels sharper after a short pause.",
      scienceTieIn: "Tuning into your senses for a moment pulls your attention away from busy thoughts, which helps your focus 'reset' before the next task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the most surprising thing you found out you DIDN'T know about your topic today? How will you go find the answer?",
      badge: { id: "g5-summer-research-ranger", name: "Research Ranger", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
