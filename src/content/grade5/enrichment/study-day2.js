// Grade 5 Study Skills — Enrichment Day 2.
// Topic: note-taking basics.

export const grade5StudyDay2 = {
  id: "g5.study.e.d2",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Taking notes the smart way",
  topicTag: "note-taking",
  estimatedMinutes: 16,
  standardsRefs: ["CASEL.SelfManagement", "CCSS.ELA.W.5.8"],
  hook: "You don't have to write down every single word. Good notes are like a treasure map — just enough marks to find your way back to the big ideas.",
  miniLesson: [
    "Write key words, not whole sentences. Instead of 'The water cycle is when water goes up into the sky and comes back down,' you might jot 'water cycle: up (evaporate) → down (rain).'",
    "Draw quick little pictures. A tiny arrow, a sun, or a raindrop can hold an idea better than a paragraph, and it's faster too.",
    "Put ideas in your own words. If you can shrink what the teacher said into your own short phrase, that's proof you actually understood it."
  ],
  workedExample: {
    prompt:
      "Your teacher says: 'Bees help flowers by carrying pollen from one flower to another, which helps new plants grow.' How do you turn that into a quick note?",
    steps: [
      "Find the key words: bees, pollen, flower to flower, new plants.",
      "Shrink it to a short phrase: 'bees carry pollen flower → flower = new plants.'",
      "Add a tiny drawing: a little bee with an arrow between two flowers.",
      "Check: could you explain it later just from this note? Yes."
    ],
    answer: "A short key-word phrase plus a tiny bee-and-arrow drawing."
  },
  items: [
    {
      id: "g5.study.e.d2.q1",
      type: "multiple_choice",
      stem: "Which is the BEST example of a smart, short note?",
      choices: [
        "Volcano: hot melted rock (lava) pushes up → erupts.",
        "A volcano is a mountain that has hot melted rock inside of it and sometimes it erupts and the lava comes out of the top.",
        "Volcanoes are really cool and kind of scary too.",
        "See the textbook for volcano information."
      ],
      answerIndex: 0,
      explanation: "It keeps the key words and shows the idea quickly, without copying the whole sentence.",
      hintLadder: [
        "Notes should be short, not full sentences.",
        "Look for the one with just the key words.",
        "The arrow-and-key-word one captures the idea fastest."
      ]
    },
    {
      id: "g5.study.e.d2.q2",
      type: "multiple_choice",
      stem: "Why is it helpful to put a note in YOUR OWN words instead of copying exactly?",
      choices: [
        "It makes your handwriting neater.",
        "Copying is against the rules.",
        "Saying it your own way shows you actually understood it.",
        "Your own words are always shorter."
      ],
      answerIndex: 2,
      explanation: "If you can shrink an idea into your own phrase, that's a sign the idea really made sense to you.",
      hintLadder: [
        "Think about what your own words prove.",
        "It's about understanding, not neatness.",
        "Your own words show the idea clicked."
      ],
      misconceptionsTargeted: ["copy-everything"]
    },
    {
      id: "g5.study.e.d2.q3",
      type: "multiple_choice",
      stem: "When is a quick little drawing a great thing to add to your notes?",
      choices: [
        "Only in art class.",
        "When a small picture holds the idea faster than words.",
        "Never — notes should only be words.",
        "Only if you're a really good artist."
      ],
      answerIndex: 1,
      explanation: "A tiny sketch — like an arrow or a symbol — captures an idea whenever it saves you words, and you don't have to be a great artist.",
      hintLadder: [
        "You don't need to be an artist for note drawings.",
        "A picture helps whenever it's faster than writing.",
        "Any time a small sketch grabs the idea quickly."
      ]
    },
    {
      id: "g5.study.e.d2.q4",
      type: "numeric",
      stem: "A sentence in your book has 12 words. You rewrite it as a note using only the 4 key words. How many words did you leave OUT?",
      answer: 8,
      tolerance: 0,
      unit: "words",
      explanation: "You started with 12 and kept 4, so 12 − 4 = 8 words were left out.",
      hintLadder: [
        "You need the difference between 12 and 4.",
        "Subtract the words you kept from the words you started with.",
        "12 − 4 = 8."
      ]
    },
    {
      id: "g5.study.e.d2.q5",
      type: "short_answer",
      stem: "Take this sentence and turn it into one short note using key words (and a tiny drawing if you like): 'The moon does not make its own light; it shines because sunlight bounces off it.'",
      rubric: {
        level3: "Short key-word note that keeps the main idea (moon reflects sunlight), in the student's own words.",
        level2: "Shorter than the sentence but still copies most of it or misses the main idea.",
        level1: "Copies the whole sentence or writes something unrelated."
      },
      exemplar:
        "Moon: no own light → sunlight bounces off it (little moon + arrow from sun).",
      hintLadder: [
        "Find the key words: moon, no own light, sunlight bounces.",
        "Shrink it to a short phrase in your own words.",
        "Add an arrow or tiny sun-and-moon drawing if it helps."
      ]
    }
  ],
  reflectionPrompt: "Today you practiced shrinking big ideas into short notes. Which is easier for you — using key words or drawing quick pictures?",
  misconceptionBank: [
    {
      id: "copy-everything",
      label: "Tries to copy every word",
      description: "Believes good notes mean writing down everything the teacher says, word for word.",
      coachMove: "Ask: which 3 or 4 words are the ones you'd need to remember the whole idea? Keep only those."
    }
  ]
};
