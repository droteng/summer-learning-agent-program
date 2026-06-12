// Grade 6 ELA/Writing — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 4. Topic: building a civilization fact-file from sources — summarizing
// and citing.

export const fallG6ElaW4D4 = {
  id: "g6.fall.ela.w4.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Build a fact-file — summarize and cite sources",
  topicTag: "research-summary",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.7", "CCSS.W.6.8"],
  hook: "A good fact-file isn't copied — it's understood, summarized, and credited. Today you practice turning sources into your own clear notes for the week's civilization project.",
  miniLesson: [
    "Summarizing means putting the key idea in YOUR words, shorter than the original.",
    "Always credit where a fact came from — that's citing your source, and it makes your work trustworthy.",
    "A fact-file uses short, organized notes (who, where, when, why it mattered), not full copied paragraphs."
  ],
  workedExample: {
    prompt: "Source sentence: 'The Nile flooded each year, depositing fertile silt that made Egyptian farming dependable.' Summarize it in your own words.",
    steps: [
      "Find the key idea: the Nile's flooding helped farming.",
      "Why? It left rich soil (silt).",
      "Put it shorter and in your words.",
      "Result: 'The Nile's yearly floods left rich soil, so Egyptian farms thrived.'"
    ],
    answer: "The Nile's yearly floods left rich soil, making Egyptian farming reliable."
  },
  items: [
    {
      id: "g6.fall.ela.w4.d4.q1",
      type: "multiple_choice",
      stem: "Which is a proper SUMMARY of: 'Mesopotamian cities built walls for protection from raiders and floods'?",
      choices: [
        "Mesopotamian cities built walls for protection from raiders and floods. (copied exactly)",
        "Cities in Mesopotamia used walls to guard against attackers and flooding.",
        "Walls are tall.",
        "Mesopotamia is a place."
      ],
      answerIndex: 1,
      explanation: "It captures the key idea in different words, shorter than the original — and isn't copied.",
      hintLadder: [
        "A summary is in YOUR words, not copied.",
        "It keeps the main idea but rephrases.",
        "Option 2 rephrases the meaning."
      ]
    },
    {
      id: "g6.fall.ela.w4.d4.q2",
      type: "multiple_choice",
      stem: "Why should you cite where a fact came from?",
      choices: [
        "To make the page longer",
        "So readers can trust and check your information",
        "Citing is optional and pointless",
        "To hide your sources"
      ],
      answerIndex: 1,
      explanation: "Citing builds trust and lets readers verify the fact — it's honest and credible.",
      hintLadder: [
        "What makes research trustworthy?",
        "Can a reader check where you got it?",
        "Citing = credit + verifiability."
      ],
      misconceptionsTargeted: ["copying-is-researching"]
    },
    {
      id: "g6.fall.ela.w4.d4.q3",
      type: "multiple_choice",
      stem: "Which belongs in a tidy civilization fact-file?",
      choices: [
        "Three copied paragraphs",
        "Short organized notes: name, location, time period, why it mattered",
        "Only your opinions",
        "A drawing with no labels"
      ],
      answerIndex: 1,
      explanation: "Fact-files use short, organized notes covering the key categories.",
      hintLadder: [
        "A fact-file is notes, not essays.",
        "Think who / where / when / why.",
        "Short organized categories."
      ]
    },
    {
      id: "g6.fall.ela.w4.d4.q4",
      type: "short_answer",
      stem: "Summarize this in your own words: 'Ancient Egyptians used a 365-day calendar based on the star Sirius and the Nile's flood cycle.'",
      rubric: {
        level3: "Captures the key idea (a 365-day calendar tied to Sirius / the Nile flood) in clearly different, shorter wording.",
        level2: "Mostly summarizes but copies several phrases or loses a key detail.",
        level1: "Copies the sentence or changes the meaning."
      },
      exemplar: "The Egyptians made a 365-day calendar by tracking the star Sirius and the Nile's yearly flooding.",
      hintLadder: [
        "What's the main fact? (a 365-day calendar)",
        "What was it based on? (Sirius + Nile floods)",
        "Say it shorter, in your own words."
      ]
    },
    {
      id: "g6.fall.ela.w4.d4.q5",
      type: "short_answer",
      stem: "Pick any ancient civilization you know. Write a 3-line fact-file entry (name, one key fact, why it mattered).",
      rubric: {
        level3: "Three clear lines covering name + an accurate key fact + why it mattered, in the writer's own words.",
        level2: "Has the parts but one is vague or copied.",
        level1: "Incomplete or inaccurate."
      },
      exemplar: "Name: Ancient Egypt. Key fact: built pyramids as tombs using advanced math and organized labor. Why it mattered: showed how a strong, organized society could plan huge projects.",
      hintLadder: [
        "Choose a civilization you've heard of.",
        "One solid fact you can state in your words.",
        "Add why it was important."
      ]
    }
  ],
  reflectionPrompt: "Researchers stand on others' work but give credit. Why does crediting your sources actually make YOUR work stronger?",
  misconceptionBank: [
    {
      id: "copying-is-researching",
      label: "Thinks copying text counts as research",
      description: "Believes pasting a source is the same as understanding and summarizing it.",
      coachMove: "Have them close the source and write the idea from memory, then check it — that's real summarizing."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Copy or Summarize?",
      prompt:
        "Would you rather hand in a report that's COPIED word-for-word from a book, or one that's SUMMARIZED in your own words but a bit shorter? Which actually proves YOU understood it?",
      answer:
        "Summarizing in your own words wins — it proves you understood the idea, not just that you can copy. Copying word-for-word (without credit) isn't research, and it doesn't show your thinking.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Civilization Fact-File Card",
      challenge:
        "Build one polished fact-file card for an ancient civilization you've studied this week. Summarize in your own words and credit where each fact came from.",
      steps: [
        "Pick a civilization (Egypt, Mesopotamia, or another you know).",
        "Fill in: name, location, time period, and one 'why it mattered' fact — all in YOUR words.",
        "Add a 'source' line noting where you learned a key fact (book, class, website).",
        "Read it back and cut any sentence that's copied instead of summarized."
      ],
      deliverable: "A neat fact-file card with summarized notes plus a source line crediting your information.",
      choiceBoard: [
        "Design the fact-file card on paper or a device.",
        "Make a 'trading card' version with a drawing and stats.",
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
          id: "g6.fall.ela.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Source: 'Mesopotamians invented the wheel, which made carrying goods and traveling far easier.' Which is the BEST summary?",
          choices: [
            "Mesopotamians invented the wheel, which made carrying goods and traveling far easier. (copied)",
            "The Mesopotamians invented the wheel, making travel and moving goods much easier.",
            "Wheels are round.",
            "Mesopotamia had goods."
          ],
          answerIndex: 1,
          explanation: "It keeps the key idea but rephrases it in different, shorter wording — and it isn't copied exactly.",
          hintLadder: [
            "A summary is rephrased, not copied word-for-word.",
            "It must keep the MAIN idea (wheel made travel/trade easier).",
            "Option 2 rewords the meaning without copying."
          ]
        },
        {
          id: "g6.fall.ela.w4.d4.arena2",
          type: "short_answer",
          stem: "Summarize this in your own words AND add a citation note: 'The Sumerians of Mesopotamia developed one of the first systems of writing, called cuneiform, around 3200 BCE.' (Source: World History textbook)",
          rubric: {
            level3: "Restates the key idea (Sumerians created early writing, cuneiform, ~3200 BCE) in clearly different, shorter wording AND includes a citation note crediting the textbook.",
            level2: "Summarizes OR cites, but is missing one part, or copies several phrases.",
            level1: "Copies the sentence, changes the meaning, or gives no citation."
          },
          exemplar: "Around 3200 BCE, the Sumerians in Mesopotamia created one of the earliest writing systems, cuneiform (Source: World History textbook).",
          hintLadder: [
            "What's the key fact? (Sumerians made early writing called cuneiform, ~3200 BCE)",
            "Say it shorter and in your own words.",
            "Add a note at the end crediting the source."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Eyes Off the Page",
      prompt:
        "After all that reading, give your eyes a break: look up from this page and focus on the farthest thing you can see for 20 slow seconds. Then blink 10 times and roll your shoulders back.",
      scienceTieIn: "Looking far away relaxes the focusing muscles in your eyes, easing the strain that builds up during close reading.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Researchers stand on others' work but give credit. Why does crediting your sources actually make YOUR work stronger and more trustworthy?",
      badge: { id: "fall-fact-finder", name: "Fact Finder", emoji: "🗂️" },
      estimatedMinutes: 7
    }
  }
};
