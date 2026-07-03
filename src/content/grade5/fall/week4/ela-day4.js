// Grade 5 ELA/Writing — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 4. Topic: building a civilization fact-file — summarizing and citing.
// Grade-5 counterpart of g6.fall.ela.w4.d4, with shorter sources and more
// scaffolding.

export const fallG5ElaW4D4 = {
  id: "g5.fall.ela.w4.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Build a fact-file — summarize and cite sources",
  topicTag: "research-summary",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.7", "CCSS.ELA-LITERACY.W.5.8"],
  hook: "A good fact-file is not copied — it is understood, put in your own words, and given credit. Today you practice turning a source into your own clear notes.",
  miniLesson: [
    "To summarize means to say the main idea in YOUR OWN words, and shorter than the original.",
    "To cite means to tell where a fact came from (a book, a website, or your class). Citing makes your work honest and easy to trust.",
    "A fact-file is short, neat notes — who, where, when, and why it mattered — not whole copied paragraphs."
  ],
  workedExample: {
    prompt: "Source: 'The Nile flooded every year and left rich soil that made Egyptian farming dependable.' Put it in your own words.",
    steps: [
      "Find the main idea: the Nile's flooding helped farming.",
      "Why? It left rich soil behind.",
      "Say it shorter, in your own words.",
      "Result: 'The Nile's yearly floods left rich soil, so Egyptian farms did well.'"
    ],
    answer: "The Nile's yearly floods left rich soil, so Egyptian farms did well."
  },
  items: [
    {
      id: "g5.fall.ela.w4.d4.q1",
      type: "multiple_choice",
      stem: "Which one is a good SUMMARY of: 'Mesopotamian cities built walls to protect against raiders and floods'?",
      choices: [
        "Mesopotamian cities built walls to protect against raiders and floods. (copied exactly)",
        "Cities in Mesopotamia used walls to guard against attackers and flooding.",
        "Walls are tall.",
        "Mesopotamia is a place."
      ],
      answerIndex: 1,
      explanation: "It keeps the main idea but says it in different, shorter words — and it is not copied.",
      hintLadder: [
        "A summary is in YOUR words, not copied.",
        "It keeps the main idea but says it differently.",
        "Option 2 rewords the meaning."
      ]
    },
    {
      id: "g5.fall.ela.w4.d4.q2",
      type: "multiple_choice",
      stem: "Why should you cite where a fact came from?",
      choices: [
        "To make the page longer",
        "So readers can trust your work and check it",
        "Citing is a waste of time",
        "To hide where you found it"
      ],
      answerIndex: 1,
      explanation: "Citing builds trust and lets readers check the fact for themselves.",
      hintLadder: [
        "What makes a report easy to trust?",
        "Can a reader check where you got the fact?",
        "Citing gives credit and lets people check."
      ],
      misconceptionsTargeted: ["copying-is-researching"]
    },
    {
      id: "g5.fall.ela.w4.d4.q3",
      type: "multiple_choice",
      stem: "What belongs in a neat civilization fact-file?",
      choices: [
        "Three copied paragraphs",
        "Short, neat notes: name, place, time, and why it mattered",
        "Only your own opinions",
        "A drawing with no labels"
      ],
      answerIndex: 1,
      explanation: "A fact-file uses short, neat notes that cover the main categories.",
      hintLadder: [
        "A fact-file is notes, not long paragraphs.",
        "Think who / where / when / why.",
        "Short, neat categories."
      ]
    },
    {
      id: "g5.fall.ela.w4.d4.q4",
      type: "short_answer",
      stem: "Put this into your own words: 'The ancient Egyptians used a 365-day calendar based on the Nile's flood each year.'",
      rubric: {
        level3: "Keeps the main idea (a 365-day calendar tied to the Nile flood) in clearly different, shorter words.",
        level2: "Mostly summarizes but copies several phrases or drops a key detail.",
        level1: "Copies the sentence or changes the meaning."
      },
      exemplar: "The Egyptians made a 365-day calendar by watching the Nile flood every year.",
      hintLadder: [
        "What is the main fact? (a 365-day calendar)",
        "What was it based on? (the Nile flood)",
        "Say it shorter, in your own words."
      ]
    },
    {
      id: "g5.fall.ela.w4.d4.q5",
      type: "short_answer",
      stem: "Pick any ancient civilization you know. Write a 3-line fact-file (name, one key fact, why it mattered).",
      rubric: {
        level3: "Three clear lines: name + an accurate key fact + why it mattered, all in the writer's own words.",
        level2: "Has the parts but one is vague or copied.",
        level1: "Incomplete or not accurate."
      },
      exemplar: "Name: Ancient Egypt. Key fact: They built pyramids as giant tombs. Why it mattered: It showed how a well-organized group could plan huge projects.",
      hintLadder: [
        "Choose a civilization you have heard of.",
        "One solid fact you can say in your own words.",
        "Add why it was important."
      ]
    }
  ],
  reflectionPrompt: "Researchers use other people's work but always give credit. Why does giving credit actually make YOUR work stronger?",
  misconceptionBank: [
    {
      id: "copying-is-researching",
      label: "Thinks copying text counts as research",
      description: "Believes pasting a source is the same as understanding and summarizing it.",
      coachMove: "Have them close the source and write the idea from memory, then check it — that is real summarizing."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Copy or Summarize?",
      prompt:
        "Would you rather hand in a report COPIED word-for-word from a book, or one SUMMARIZED in your own words? Which one really shows that YOU understood it?",
      answer:
        "Summarizing in your own words wins — it shows you understood the idea, not just that you can copy. Copying word-for-word does not prove your own thinking.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Civilization Fact-File Card",
      challenge:
        "Build one neat fact-file card for an ancient civilization you learned about this week. Put every fact in your own words and add a source line.",
      steps: [
        "Pick a civilization (Egypt, Mesopotamia, or another you know).",
        "Fill in: name, place, time period, and one 'why it mattered' fact — all in YOUR words.",
        "Add a 'source' line telling where you learned a key fact (book, class, website).",
        "Read it back and fix any line that is copied instead of summarized."
      ],
      deliverable: "A neat fact-file card with summarized notes plus a source line.",
      choiceBoard: [
        "Design the fact-file card on paper or a device.",
        "Make a 'trading card' version with a drawing and fun facts.",
        "Record a 30-second spoken fact-file in your own words."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Summarize & Cite Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Source: 'Mesopotamians invented the wheel, which made carrying goods and traveling far easier.' Which is the BEST summary?",
          choices: [
            "Mesopotamians invented the wheel, which made carrying goods and traveling far easier. (copied)",
            "The Mesopotamians invented the wheel, which made travel and moving goods much easier.",
            "Wheels are round.",
            "Mesopotamia had goods."
          ],
          answerIndex: 1,
          explanation: "It keeps the main idea but says it in different, shorter words — and it is not copied.",
          hintLadder: [
            "A summary is reworded, not copied word-for-word.",
            "It must keep the main idea (the wheel made travel and trade easier).",
            "Option 2 rewords the meaning without copying."
          ]
        },
        {
          id: "g5.fall.ela.w4.d4.arena2",
          type: "short_answer",
          stem: "Put this in your own words AND add a source note: 'The Sumerians of Mesopotamia made one of the first writing systems, called cuneiform.' (Source: our history book)",
          rubric: {
            level3: "Says the key idea (the Sumerians made an early writing system, cuneiform) in clearly different, shorter words AND adds a note crediting the history book.",
            level2: "Summarizes OR cites, but is missing one part, or copies several phrases.",
            level1: "Copies the sentence, changes the meaning, or gives no source."
          },
          exemplar: "The Sumerians in Mesopotamia created one of the first ways to write, called cuneiform (Source: our history book).",
          hintLadder: [
            "What is the key fact? (Sumerians made early writing called cuneiform)",
            "Say it shorter and in your own words.",
            "Add a note at the end telling the source."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Eyes Off the Page",
      prompt:
        "After all that reading, give your eyes a break: look up and focus on the farthest thing you can see for 20 slow seconds. Then blink 10 times and roll your shoulders back.",
      scienceTieIn: "Looking far away relaxes the tiny focusing muscles in your eyes, easing the strain that builds up during close reading.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Researchers use other people's work but give credit. Why does giving credit make YOUR work stronger and easier to trust?",
      badge: { id: "g5-fall-fact-finder-jr", name: "Junior Fact Finder", emoji: "🗂️" },
      estimatedMinutes: 7
    }
  }
};
