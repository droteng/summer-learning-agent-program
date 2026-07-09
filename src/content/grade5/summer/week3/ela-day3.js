// Grade 5 Summer ELA / Writing — Week 3 (Story Builders), Day 3.
// Grade-5 counterpart of g6.ela.w3.d3 (dialogue and voice), pitched down:
// simpler examples, vocab support, step-by-step punctuation.

export const summerG5ElaW3D3 = {
  id: "g5.summer.ela.w3.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Dialogue and voice",
  topicTag: "dialogue",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3.B", "CCSS.ELA-LITERACY.L.5.2"],
  hook: "What characters say -- and how they say it -- gives a story life. Today you punctuate dialogue and make characters sound different.",
  keyTerms: [
    { term: "Dialogue", definition: "The words a character says out loud, wrapped in quotation marks." },
    { term: "Dialogue tag", definition: "A small part like he said or she asked that tells who is talking." },
    { term: "Voice", definition: "The special way a character talks -- their word choice and rhythm." }
  ],
  miniLesson: [
    "Dialogue goes inside quotation marks. The end punctuation stays inside too: \"I won,\" he said.",
    "Each new speaker starts a new line, even if they say just one word.",
    "Voice means word choice and rhythm. A scientist sounds different from a six-year-old."
  ],
  workedExample: {
    prompt: "Fix the punctuation: I cant believe it she said. Are you sure",
    steps: [
      "Add quotation marks around the words that are spoken.",
      "Add the missing apostrophe in can't.",
      "Add a comma before she said, and keep it inside the quotes.",
      "Result: \"I can't believe it,\" she said. \"Are you sure?\""
    ],
    answer: "\"I can't believe it,\" she said. \"Are you sure?\""
  },
  items: [
    {
      id: "g5.summer.ela.w3.d3.q1",
      type: "multiple_choice",
      stem: "Which line has correct dialogue punctuation?",
      choices: [
        "\"Stop right there\", he yelled.",
        "\"Stop right there.\" he yelled.",
        "\"Stop right there!\" he yelled.",
        "\"Stop right there\" he yelled!"
      ],
      answerIndex: 2,
      explanation: "Inside the quotes, the exclamation mark takes the place of the comma, and it stays inside the quote marks.",
      hintLadder: [
        "The end punctuation goes inside the quote marks.",
        "Yelling needs an exclamation mark, not a comma.",
        "The exclamation mark stays inside the quotes."
      ],
      misconceptionsTargeted: ["punctuation-outside-quotes"]
    },
    {
      id: "g5.summer.ela.w3.d3.q2",
      type: "multiple_choice",
      stem: "When a different character starts talking, what should you do?",
      choices: [
        "Nothing -- keep the same line.",
        "Start a new line (new paragraph).",
        "Start the story over.",
        "End the chapter."
      ],
      answerIndex: 1,
      explanation: "A new speaker means a new line. Even a one-word line starts fresh so the reader can follow who is talking.",
      hintLadder: [
        "What helps the reader keep track of who is talking?",
        "Each speaker gets their own line.",
        "New line for each new speaker."
      ]
    },
    {
      id: "g5.summer.ela.w3.d3.q3",
      type: "short_answer",
      stem: "Write ONE line a six-year-old might say about a thunderstorm. Make the voice match the speaker by using simple, excited words.",
      rubric: {
        level3: "One line in quotation marks that clearly sounds like a young child -- simple words, excited or direct, and it fits a six-year-old.",
        level2: "A line that mostly fits but uses one or two words too grown-up or technical.",
        level1: "A formal or technical line that does not sound like a six-year-old, or no clear voice."
      },
      exemplar: "\"Whoa, that thunder was SO loud it shook my whole room!\"",
      hintLadder: [
        "Think about how a little kid really talks -- short and excited.",
        "Skip grown-up, technical words like air pressure.",
        "Wrap your line in quotation marks."
      ],
      misconceptionsTargeted: ["voice-mismatch"]
    },
    {
      id: "g5.summer.ela.w3.d3.q4",
      type: "multiple_choice",
      stem: "In: \"Hold on,\" she whispered, \"did you hear that?\" -- how many things does she say?",
      choices: ["One thing", "None", "Three things", "Two things"],
      answerIndex: 3,
      explanation: "Hold on and did you hear that? are two separate spoken parts, split by she whispered.",
      hintLadder: [
        "Look at the two sets of quotation marks.",
        "There are two spoken parts split by she whispered.",
        "That is two things."
      ]
    },
    {
      id: "g5.summer.ela.w3.d3.q5",
      type: "short_answer",
      stem: "Write a 2-line dialogue between a worried parent and a calm, confident kid about a missing homework folder. Use quotation marks correctly and start a new line for each speaker.",
      rubric: {
        level3: "Two lines, two speakers, two different voices, correct quotation punctuation, and a new line for each speaker.",
        level2: "Two lines, but the voices sound alike OR the punctuation has small errors.",
        level1: "One voice only, or big punctuation errors."
      },
      exemplar: "\"Tell me you did not leave it on the bus again,\" Mom said.\n\"Relax -- it is in my backpack with the math book,\" Maya replied.",
      hintLadder: [
        "Start with the worried parent -- a short, urgent line.",
        "Reply with the calm kid -- a relaxed, sure line.",
        "Wrap each in quotes, and put each speaker on a new line."
      ]
    }
  ],
  reflectionPrompt: "Today you wrote dialogue. Whose voice from your day is the most different from everyone else's? What gives it away?",
  misconceptionBank: [
    {
      id: "punctuation-outside-quotes",
      label: "Puts punctuation outside the quotes",
      description: "Writes \"Hello\", she said -- with the comma outside the quote.",
      coachMove: "In American English, the end punctuation always goes inside the quotation marks."
    },
    {
      id: "voice-mismatch",
      label: "Voice does not match the speaker",
      description: "Gives a young child very formal or technical lines that do not fit who they are.",
      coachMove: "Read the line out loud. Does it sound like that speaker would really say it?"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Spot the Speaker",
      prompt: "Two lines: (A) According to my math, the speed was not enough. (B) Nuh-uh, you went WAY too slow! Both mean about the same thing. Who probably says each one, and what gives their voice away?",
      answer: "(A) sounds like a scientist or grown-up -- formal, careful words. (B) sounds like a kid -- casual, blunt, full of energy. Word choice and rhythm show the voice.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Voice Scene",
      challenge: "Write a short scene (4 to 6 lines of dialogue) between two characters who sound totally different -- for example, a nervous new kid and a super-calm veteran. Punctuate every line correctly and start a new line for each speaker.",
      steps: [
        "Choose your two characters and one thing they disagree about.",
        "Give each a voice rule (one talks in short bursts, one rambles; one is polite, one is slangy).",
        "Write 4 to 6 lines, a new line per speaker, with punctuation INSIDE the quotes.",
        "Read it aloud -- can you tell who is talking even without the he said tags?"
      ],
      deliverable: "A 4 to 6 line dialogue scene with two different voices and correct quotation punctuation.",
      choiceBoard: [
        "Write the two-voice dialogue scene.",
        "Turn it into a mini comic strip with speech bubbles.",
        "Record both voices out loud, using a different tone for each character."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Dialogue Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w3.d3.arena1",
          type: "multiple_choice",
          stem: "Which line is punctuated CORRECTLY?",
          choices: [
            "\"Are you coming with us?\" asked Dev.",
            "\"Are you coming with us\"? asked Dev.",
            "\"Are you coming with us?\", asked Dev.",
            "Are you coming with us? \"asked Dev\"."
          ],
          answerIndex: 0,
          explanation: "The question mark belongs inside the quotes because it is part of what is spoken, and you do not add an extra comma after it before the tag.",
          hintLadder: [
            "The end punctuation goes inside the quote marks.",
            "A question mark already ends the spoken part -- do not add a comma too.",
            "It is the option with the ? inside the quotes and no extra comma."
          ]
        },
        {
          id: "g5.summer.ela.w3.d3.arena2",
          type: "short_answer",
          stem: "Write 3 lines of dialogue between a coach, a tired player, and an eager rookie. Give each one a clearly different voice, use correct quotation punctuation, and start a new line for each speaker.",
          rubric: {
            level3: "Three lines, three speakers on separate lines, three different voices, and correct quotation punctuation throughout.",
            level2: "Three speakers are there, but two voices sound alike OR there are small punctuation slips.",
            level1: "Voices blur together, speakers share a line, or punctuation is often wrong."
          },
          exemplar: "\"Two more laps, then we are done,\" the coach called.\n\"Two? My legs are basically jelly,\" Sam groaned.\n\"I will race you both -- last one buys snacks!\" the rookie shouted.",
          hintLadder: [
            "Give each character one voice trait (firm, tired, hyped).",
            "Put each line on its own line, with punctuation inside the quotes.",
            "Read it aloud to check the three voices really sound different."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Voice Charades",
      prompt: "Stand up and say I cannot believe it four ways with your whole body: excited (jump), bored (slump), scared (freeze), and proud (chest out). Same words, totally different voice!",
      scienceTieIn: "Your posture actually shapes how your voice sounds and even how you feel -- body and emotion talk to each other through your nervous system.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt: "Whose voice from your day was the most different? Write one line of dialogue that captures exactly how they talk.",
      badge: { id: "g5-summer-voice-virtuoso", name: "Voice Virtuoso", emoji: "🎭" },
      estimatedMinutes: 7
    }
  }
};
