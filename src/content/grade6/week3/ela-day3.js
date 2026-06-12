// Grade 6 ELA — Week 3, Day 3.
// Topic: dialogue and voice.

export const grade6ElaWeek3Day3 = {
  id: "g6.ela.w3.d3",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Dialogue and voice",
  topicTag: "dialogue",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.W.3.B"],
  hook: "What characters say — and how they say it — gives a story life. Today you punctuate dialogue and make characters sound different.",
  miniLesson: [
    'Dialogue is wrapped in quotation marks. Punctuation goes inside the marks: "I won," he said.',
    "Each new speaker gets a new paragraph, even if it's just one word.",
    "Voice = word choice + rhythm + what someone notices. A scientist sounds different from a six-year-old."
  ],
  workedExample: {
    prompt: 'Punctuate this dialogue: I cant believe it she said. Are you sure',
    steps: [
      "Add quotes around the spoken parts.",
      "Add the missing apostrophe in 'can't'.",
      "Add a comma before 'she said' (inside the quotes).",
      'Result: "I can\'t believe it," she said. "Are you sure?"'
    ],
    answer: '"I can\'t believe it," she said. "Are you sure?"'
  },
  items: [
    {
      id: "g6.ela.w3.d3.q1",
      type: "multiple_choice",
      stem: "Which is correctly punctuated dialogue?",
      choices: [
        '"Stop right there", he yelled.',
        '"Stop right there!" he yelled.',
        '"Stop right there." he yelled.',
        '"Stop right there" he yelled!'
      ],
      answerIndex: 1,
      explanation: "Inside the quotes, the exclamation mark replaces the comma. The yell stays inside the quote marks.",
      hintLadder: [
        "Punctuation goes inside the quote marks.",
        "Yelling needs an exclamation, not a comma.",
        "The exclamation stays inside the quotes."
      ],
      misconceptionsTargeted: ["punctuation-outside-quotes"]
    },
    {
      id: "g6.ela.w3.d3.q2",
      type: "multiple_choice",
      stem: "When two characters talk, what happens at each switch of speaker?",
      choices: [
        "Nothing — same paragraph.",
        "A new paragraph starts.",
        "The story restarts.",
        "The chapter ends."
      ],
      answerIndex: 1,
      explanation: "New speaker = new paragraph. Even one-word lines start fresh paragraphs.",
      hintLadder: [
        "What helps the reader keep track of who's talking?",
        "Each speaker gets their own line.",
        "New paragraph for each new speaker."
      ]
    },
    {
      id: "g6.ela.w3.d3.q3",
      type: "multiple_choice",
      stem: "Which character voice fits a six-year-old talking about a thunderstorm?",
      choices: [
        '"The atmospheric pressure dropped considerably this evening."',
        '"It was thundery and the rain was a lot."',
        '"Local meteorological data suggests an anomaly."',
        '"The storm was meteorologically intense."'
      ],
      answerIndex: 1,
      explanation: "Voice should match the speaker. A six-year-old uses simple words and direct observations.",
      hintLadder: [
        "Skip the technical, adult-sounding options.",
        "Pick the simplest, most direct voice.",
        "'It was thundery' is the kid voice."
      ],
      misconceptionsTargeted: ["voice-mismatch"]
    },
    {
      id: "g6.ela.w3.d3.q4",
      type: "multiple_choice",
      stem: 'In: "Hold on," she whispered, "did you hear that?" — how many sentences are inside the dialogue?',
      choices: ["One", "Two", "Three", "None"],
      answerIndex: 1,
      explanation: "'Hold on' and 'did you hear that?' are two separate sentences split by 'she whispered'.",
      hintLadder: [
        "Look at where periods and question marks could go.",
        "Two complete thoughts separated by 'she whispered'.",
        "Two sentences."
      ]
    },
    {
      id: "g6.ela.w3.d3.q5",
      type: "short_answer",
      stem:
        'Write a 2-line dialogue between a worried parent and a confident child about a missing homework folder. Use correct quote punctuation and a new line per speaker.',
      rubric: {
        level3: "Two lines, two speakers, distinct voices, correct quote punctuation, new paragraph per speaker.",
        level2: "Two lines but the voices don't sound different OR punctuation has small errors.",
        level1: "Single voice or major punctuation errors."
      },
      exemplar:
        '"Tell me you didn\'t leave it on the bus again," Mom said.\n"Relax — it\'s in my backpack with the math book," Maya replied.',
      hintLadder: [
        "Start with the worried parent — short, urgent voice.",
        "Reply with the confident child — calm, dismissive voice.",
        "Wrap each in quotes, new paragraph per speaker."
      ]
    }
  ],
  reflectionPrompt: "Today you wrote dialogue. Whose voice from your day is the most distinct? What gives it away?",
  misconceptionBank: [
    {
      id: "punctuation-outside-quotes",
      label: "Puts punctuation outside the quotes",
      description: "Writes 'Hello', she said — comma outside the quote.",
      coachMove: "In American English, terminal punctuation always goes inside the quote marks."
    },
    {
      id: "voice-mismatch",
      label: "Mismatched voice and speaker",
      description: "Gives a child overly formal or technical lines that don't fit who they are.",
      coachMove: "Read the line out loud. Does it sound like the speaker would actually say it?"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Spot the Speaker",
      prompt:
        "Two lines: (A) 'Per my calculations, the velocity is insufficient.' (B) 'Nuh-uh, you went WAY too slow!' Both mean the same thing. Who probably says each — and what gives their voice away?",
      answer: "(A) sounds like a scientist or grown-up — formal, technical words. (B) sounds like a kid — casual, blunt, lots of energy. Word choice and rhythm reveal the voice.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Voice Scene",
      challenge:
        "Write a short scene (4-6 lines of dialogue) between two characters who sound completely different — for example a nervous new kid and a super-chill veteran. Punctuate every line correctly and start a new paragraph for each speaker.",
      steps: [
        "Decide your two characters and one thing they disagree about.",
        "Give each a 'voice rule' (one talks in short bursts, one rambles; one is formal, one is slangy).",
        "Write 4-6 lines, new paragraph per speaker, punctuation INSIDE the quotes.",
        "Read it aloud — can you tell who's speaking even without the 'he said' tags?"
      ],
      deliverable: "A 4-6 line dialogue scene with two distinct voices and correct quote punctuation.",
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
          id: "g6.ela.w3.d3.arena1",
          type: "multiple_choice",
          stem: "Which line is punctuated CORRECTLY?",
          choices: [
            "\"Are you coming with us\"? asked Dev.",
            "\"Are you coming with us?\" asked Dev.",
            "\"Are you coming with us?\", asked Dev.",
            "Are you coming with us? \"asked Dev\"."
          ],
          answerIndex: 1,
          explanation: "The question mark belongs inside the quotes because it's part of what's spoken, and no extra comma is needed after it before the dialogue tag.",
          hintLadder: [
            "Terminal punctuation goes inside the quote marks.",
            "A question mark already ends the spoken part — you don't add a comma after it too.",
            "It's the option with the '?' inside the quotes and no extra comma."
          ]
        },
        {
          id: "g6.ela.w3.d3.arena2",
          type: "short_answer",
          stem: "Write 3 lines of dialogue among a coach, a tired player, and an eager rookie. Give each a clearly different voice, use correct quote punctuation, and start a new paragraph for each speaker.",
          rubric: {
            level3: "Three lines, three speakers in separate paragraphs, three distinct voices, and correct quote punctuation throughout.",
            level2: "Three speakers present but two voices sound alike OR there are minor punctuation slips.",
            level1: "Voices blur together, speakers share paragraphs, or punctuation is frequently wrong."
          },
          exemplar: "\"Two more laps, then we're done,\" the coach called.\n\"Two? My legs are basically jelly,\" Sam groaned.\n\"I'll race you both — last one buys snacks!\" the rookie shouted.",
          hintLadder: [
            "Give each character one voice trait (firm, weary, hyped).",
            "Put each line in its own paragraph with punctuation inside the quotes.",
            "Read it aloud to check the three voices really sound different."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Voice Charades",
      prompt:
        "Stand up and say 'I can't believe it' four ways with your whole body: excited (jump), bored (slump), scared (freeze), and proud (chest out). Same words, totally different voice!",
      scienceTieIn: "Your posture actually shapes how your voice sounds and even how you feel — body and emotion talk to each other through your nervous system.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Whose voice from your day was the most distinct? Write one line of dialogue that captures exactly how they talk.",
      badge: { id: "voice-virtuoso", name: "Voice Virtuoso", emoji: "🎭" },
      estimatedMinutes: 7
    }
  }
};
