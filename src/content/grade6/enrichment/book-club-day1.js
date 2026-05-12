// Grade 6 Founder's Book Club — Enrichment Day 1.
// Reading: Chapters 1–2 of "Leo and The Game Squad" by Dr. Spark.
//
// This is a parent-supervised reading mission. Solo or group mode is up
// to the parent and child. The book can be read aloud together (group),
// silently and then discussed, or chapter-by-chapter with a friend over
// video call after a parent has approved the connection.
//
// Author (Dr. Spark) can swap in chapter-specific details for the items
// over time without touching the structure.

export const BOOK_METADATA = Object.freeze({
  title: "Leo and The Game Squad",
  author: "Dr. Spark",
  ageRange: "10+",
  url: "https://www.amazon.com/dp/B0G4HQ21D1",
  authorStorefrontUrl: "https://www.amazon.com/stores/Dr-Spark/author/B0G6VLJTZN"
});

export const grade6BookClubDay1 = {
  id: "g6.book.e.d1",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 1,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Meeting Leo — characters and setting",
  topicTag: "narrative-characters",
  estimatedMinutes: 30,
  standardsRefs: ["CCSS.RL.6.1", "CCSS.RL.6.3"],
  hook: `📖 Read Chapters 1–2 of "Leo and The Game Squad" by Dr. Spark before you start (get the book at ${BOOK_METADATA.url}). Today you focus on who Leo is and where the story takes place.`,
  miniLesson: [
    "A strong reader notices three things in the opening of a story: who is the main character, where and when the story happens, and what they want.",
    "Pay attention to small details — a character's room, what they carry, who they sit with — those details tell you what matters to them.",
    "If you're reading with someone, take turns saying one thing you noticed before you talk about the questions."
  ],
  workedExample: {
    prompt: "How would you describe a main character after reading the first two chapters?",
    steps: [
      "Note 2–3 actions the character takes — what they do shows you who they are.",
      "Note 1–2 things they say or think — words reveal hopes, fears, and goals.",
      "Note who they hang out with — friendships shape character.",
      "Put it together in one sentence: 'Leo is the kind of person who ___.'"
    ],
    answer: "A short character sketch built from actions + words + relationships, in 1–2 sentences."
  },
  keyTerms: [
    { term: "Protagonist", definition: "The main character whose journey the story follows." },
    { term: "Setting", definition: "The time and place where the story unfolds." },
    { term: "Character trait", definition: "A consistent quality a person shows through what they do and say." }
  ],
  items: [
    {
      id: "g6.book.e.d1.q1",
      type: "short_answer",
      stem: "In 1–2 sentences, describe Leo as you meet him in Chapters 1–2. Use one detail from his actions and one from his thoughts or words.",
      hintLadder: [
        "What does Leo do in Chapter 1?",
        "What does Leo say or think that surprised you?",
        "Combine: 'Leo is the kind of person who ___ because he ___.'"
      ],
      rubric: {
        level3: "Names a specific trait, supports it with one action AND one thought/word, in 1–2 clear sentences.",
        level2: "Names a trait with only one piece of evidence OR drifts into plot summary halfway.",
        level1: "Just retells what happened with no description of Leo as a person."
      },
      exemplar: "Leo is curious and a little nervous — he stays up late even though he's tired because he wants to find out what's happening in the game.",
      misconceptionsTargeted: ["plot-summary-instead-of-character"]
    },
    {
      id: "g6.book.e.d1.q2",
      type: "short_answer",
      stem: "Where and when does the story take place? Name two details about the setting that you noticed.",
      hintLadder: [
        "Look for places: home, school, online, a specific room.",
        "Look for time clues: time of day, season, school year.",
        "Pick the two clearest details and write them in one sentence each."
      ],
      rubric: {
        level3: "Identifies a place AND a time clue with specific details from the book.",
        level2: "Identifies one of place/time clearly; the other is vague.",
        level1: "Generic answer with no details from the book."
      },
      exemplar: "The story takes place at Leo's home and on the Game Squad's online server. It's the start of summer break.",
      misconceptionsTargeted: ["missing-setting-details"]
    },
    {
      id: "g6.book.e.d1.q3",
      type: "multiple_choice",
      stem: "Which is the BEST way to describe a character?",
      choices: [
        "Repeat exactly what the book said about them.",
        "Pick one detail and decide that's all there is.",
        "Combine actions, words, and relationships into a short description.",
        "Guess based on the cover art."
      ],
      answerIndex: 2,
      explanation: "Strong character descriptions combine evidence from multiple parts of the text.",
      hintLadder: [
        "Strong descriptions use evidence from inside the book.",
        "More than one kind of evidence helps.",
        "What three things did the mini-lesson say to combine?"
      ]
    },
    {
      id: "g6.book.e.d1.q4",
      type: "short_answer",
      stem: "Group prompt (skip if you're reading alone): share one thing about Leo that the other reader noticed but you didn't. Write down what they said.",
      hintLadder: [
        "Ask: 'What did you notice about Leo that I might have missed?'",
        "Listen for a detail, write it down word-for-word.",
        "If reading alone, write a question you'd ask another reader about Leo."
      ],
      rubric: {
        level3: "Captures another reader's specific observation OR (if solo) writes a thoughtful new question about Leo.",
        level2: "Records a vague observation or generic question.",
        level1: "Skipped or unrelated to Leo."
      },
      exemplar: "My sister noticed Leo keeps checking his phone even when his mom is talking — she thought it showed he's distracted, not rude.",
      misconceptionsTargeted: []
    },
    {
      id: "g6.book.e.d1.q5",
      type: "multiple_choice",
      stem: "Which of the following is the BEST definition of a 'protagonist'?",
      choices: [
        "Any character mentioned in the first chapter.",
        "The main character whose journey the story follows.",
        "The villain or person causing trouble.",
        "A narrator who isn't in the story."
      ],
      answerIndex: 1,
      explanation: "Protagonist = main character driving the story forward.",
      hintLadder: [
        "Check today's key terms.",
        "Who does the story follow throughout?",
        "It's about the journey, not just any role."
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "plot-summary-instead-of-character",
      label: "Summarizes plot instead of describing the character",
      description: "Answers character-trait questions by retelling what happened in order.",
      coachMove: "Ask: 'What kind of person is Leo?' — then pull one action and one thought as evidence."
    },
    {
      id: "missing-setting-details",
      label: "Generic setting description",
      description: "Says 'a house' or 'a game' without naming clues from the text.",
      coachMove: "Point back to specific lines that mention place or time."
    }
  ],
  reflectionPrompt:
    "What kind of person do you think Leo will become by the end of the book? Why? Save this answer — you'll come back to it on the last book club day."
};
