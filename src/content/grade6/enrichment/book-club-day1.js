// Grade 6 Founder's Book Club — Enrichment Day 1.
// Reading: "Readers" intro + Levels 1–3 of "Leo and The Game Squad" by Dr. Spark.
// (Into The Game, The Bloodstream Superhighway, The Brain Control Center.)
//
// This is a parent-supervised reading mission. Solo or group mode is up
// to the parent and child. The book can be read aloud together (group),
// silently and then discussed, or chapter-by-chapter with a friend over
// video call after a parent has approved the connection.

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
  topic: "Meeting the squad — Leo, Nia, Jamal, and Flo",
  topicTag: "narrative-characters",
  estimatedMinutes: 30,
  standardsRefs: ["CCSS.RL.6.1", "CCSS.RL.6.3"],
  hook: `📖 Read the "Readers" welcome plus Levels 1–3 ("Into The Game", "The Bloodstream Superhighway", "The Brain Control Center") of "Leo and The Game Squad" by Dr. Spark before you start. Get the book at ${BOOK_METADATA.url}. Today you meet the squad and the strange world inside Leo's body.`,
  miniLesson: [
    "Three military families. One block. While the parents are deployed, Leo (7th grade), Jamal (6th grade), and Nia (5th grade) hang out at Leo's house — and one game-and-junk-food night, they fall asleep on the couch and wake up *inside* Leo's body.",
    "A strong reader builds a quick mental file for each main character: what they do, what they say, who they care about. Look at Leo's snacking, Jamal's nervous energy, Nia's glasses and the way she sorts controllers — every small detail tells you something.",
    "The world has rules: Flo is the green-skinned game guide. Hemo is a red blood cell. Agent T is a memory T-cell who watches the squad with suspicion. Notice how the body works like a city full of jobs."
  ],
  workedExample: {
    prompt: "How do you describe Leo as you meet him in Levels 1–2?",
    steps: [
      "Note 2–3 actions: he plays past tiredness, skips real dinner, snacks on chips and soda, falls asleep on the couch.",
      "Note 1–2 thoughts or words: he says 'Something's weird. Not the game. Me.' — he notices his fingers lagging.",
      "Note relationships: he's the oldest in the squad, his mom is holding down the fort for four kids, his little brother Marcus is asleep upstairs.",
      "Put it together: 'Leo is the kind of person who ___ — you can see it when ___.'"
    ],
    answer: "A short character sketch built from actions + words + relationships, in 1–2 sentences."
  },
  keyTerms: [
    { term: "Protagonist", definition: "The main character whose journey the story follows — in this book, Leo." },
    { term: "Setting", definition: "The time and place where a story unfolds — here, Leo's living room AND the inside of Leo's body." },
    { term: "Character trait", definition: "A consistent quality a person shows through what they do and say (Nia is observant, Jamal is loyal, Leo is curious)." }
  ],
  items: [
    {
      id: "g6.book.e.d1.q1",
      type: "short_answer",
      stem: "In 1–2 sentences, describe Leo as you meet him in Levels 1–2. Use one detail from his actions and one from his thoughts or words.",
      hintLadder: [
        "What does Leo do during the gaming marathon and at dinner?",
        "What does he notice or say about himself ('Not the game. ___')?",
        "Combine: 'Leo is the kind of person who ___ because he ___.'"
      ],
      rubric: {
        level3: "Names a specific trait, supports it with one action AND one thought/quote, in 1–2 clear sentences.",
        level2: "Names a trait with only one piece of evidence OR drifts into plot summary halfway.",
        level1: "Just retells what happened with no description of Leo as a person."
      },
      exemplar: "Leo is curious about himself even when it's uncomfortable — he keeps snacking and gaming, but he also notices his fingers lagging and says 'Not the game. Me.'",
      misconceptionsTargeted: ["plot-summary-instead-of-character"]
    },
    {
      id: "g6.book.e.d1.q2",
      type: "short_answer",
      stem: "The story has TWO settings in Levels 1–3. Name them both and give one specific detail for each.",
      hintLadder: [
        "Setting 1 is the real world. Where do the kids hang out and what's around them?",
        "Setting 2 is where they end up after they fall asleep. What does Flo show them?",
        "Format: 'Setting one: ___ (detail). Setting two: ___ (detail).'"
      ],
      rubric: {
        level3: "Identifies both settings (Leo's living room AND inside Leo's body) with a specific detail from the book for each.",
        level2: "Names both settings but one detail is generic.",
        level1: "Names only one setting or gives no details from the book."
      },
      exemplar: "Setting one: Leo's living room — beanbags, controllers, and a tray of lemonade from his mom. Setting two: the bloodstream inside Leo's body — Hemo the red blood cell zips by with oxygen.",
      misconceptionsTargeted: ["missing-setting-details"]
    },
    {
      id: "g6.book.e.d1.q3",
      type: "multiple_choice",
      stem: "What do Leo, Jamal, and Nia have in common in their real lives BEFORE they enter Leo's body?",
      choices: [
        "Their parents are all deployed in the military together.",
        "They are all only children.",
        "They are all in the same grade.",
        "They have never met before this night."
      ],
      answerIndex: 0,
      explanation: "All three are military kids whose parents deployed together; Leo's mom is watching all four kids on her own.",
      hintLadder: [
        "Look at the description of the families on the block.",
        "Why are the kids all at Leo's house?",
        "What did the parents do that morning in uniforms?"
      ]
    },
    {
      id: "g6.book.e.d1.q4",
      type: "short_answer",
      stem: "When the squad first arrives in the bloodstream, Agent T is suspicious. What does he notice about each kid and what does he decide to do?",
      hintLadder: [
        "Find Agent T's introduction in Level 2.",
        "What does he say about Nia's glasses? About Jamal? About Leo?",
        "What protocol does he initiate?"
      ],
      rubric: {
        level3: "Names what Agent T flags for each squad member AND that he 'initiates watch protocol' / monitors them.",
        level2: "Captures Agent T's suspicion but misses what he flags for each kid OR misses the watch protocol.",
        level1: "Just says 'he's suspicious' without specifics."
      },
      exemplar: "Agent T flags Nia's glasses as unknown function with a high alert, marks Jamal for nervous energy, and Leo for unusual host activity. He calls in a watch protocol and reports the squad as possible viral agents.",
      misconceptionsTargeted: []
    },
    {
      id: "g6.book.e.d1.q5",
      type: "multiple_choice",
      stem: "Which of the following is the BEST definition of a 'protagonist'?",
      choices: [
        "Any character mentioned in the first chapter.",
        "The villain or person causing trouble.",
        "The main character whose journey the story follows.",
        "A narrator who isn't in the story."
      ],
      answerIndex: 2,
      explanation: "Protagonist = main character driving the story forward. In this book, Leo is the protagonist.",
      hintLadder: [
        "Check today's key terms.",
        "Whose body do they travel inside?",
        "It's about whose journey we follow."
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
      description: "Says 'a house' or 'a game' without naming clues from the text (Hemo, Flo, bloodstream).",
      coachMove: "Point back to specific lines that mention place or time."
    }
  ],
  reflectionPrompt:
    "What kind of person do you think Leo will become by the end of the book? Why? Save this answer — you'll come back to it on the last book club day."
};
