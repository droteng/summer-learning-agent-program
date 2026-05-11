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
  estimatedMinutes: 16,
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
  ]
};
