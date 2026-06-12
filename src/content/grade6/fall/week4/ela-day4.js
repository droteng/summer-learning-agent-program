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
  estimatedMinutes: 18,
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
  ]
};
