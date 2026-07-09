// Grade 7 ELA/Writing — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 4. Topic: building a civilization fact-file from sources — raised to
// synthesizing MULTIPLE sources, assessing credibility, and citing.

export const fallG7ElaW4D4 = {
  id: "g7.fall.ela.w4.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Build a fact-file — summarize and cite sources",
  topicTag: "research-summary",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.7", "CCSS.ELA-LITERACY.W.7.8"],
  hook: "A Grade 7 fact-file doesn't lean on one source — it SYNTHESIZES several, judges which are credible, and cites each. Today you weave multiple sources into your own trustworthy notes.",
  miniLesson: [
    "Synthesizing means combining ideas from MULTIPLE sources into one coherent summary in your own words, not just retelling one.",
    "Assess credibility before you trust a source: check the author's expertise, purpose, and whether other sources corroborate it.",
    "Cite each source and flag when sources DISAGREE — noting the conflict is more honest and useful than hiding it."
  ],
  workedExample: {
    prompt: "Source A: 'The Nile flooded yearly, leaving fertile silt.' Source B: 'Egyptian farmers timed planting to the flood.' Synthesize both into one summary and cite them.",
    steps: [
      "Find each source's key idea: A = floods left rich soil; B = farmers planned around the flood.",
      "Combine them into a single sentence in your own words.",
      "Keep it shorter than the two originals together.",
      "Add a citation crediting both sources."
    ],
    answer: "Egyptian farmers planted around the Nile's yearly flood, which left fertile silt that made their crops reliable (Sources A and B)."
  },
  items: [
    {
      id: "g7.fall.ela.w4.d4.q1",
      type: "multiple_choice",
      stem: "Which BEST shows synthesis of two sources — Source A: 'Mesopotamians built city walls for defense.' Source B: 'Walls also held back river floods.'?",
      choices: [
        "Mesopotamians built city walls for defense. (only Source A, copied)",
        "Source B is about floods.",
        "Walls are tall structures.",
        "Mesopotamian walls served two purposes — defending against raiders and holding back floods (Sources A and B)."
      ],
      answerIndex: 3,
      explanation: "Synthesis combines the key idea of BOTH sources into one summary, in the writer's own words, with a citation.",
      hintLadder: [
        "Synthesis blends more than one source.",
        "Look for the option using BOTH defense and floods.",
        "Option 2 merges both ideas and cites them."
      ]
    },
    {
      id: "g7.fall.ela.w4.d4.q2",
      type: "multiple_choice",
      stem: "You find two websites on ancient Egypt. Which is the MOST credible sign to prefer one source over the other?",
      choices: [
        "It has brighter colors",
        "It's written by a historian or museum, cites its evidence, and is corroborated by other sources",
        "It appears first in the search results",
        "It is the shortest to read"
      ],
      answerIndex: 1,
      explanation: "Credibility rests on author expertise, cited evidence, and corroboration — not design, ranking, or length.",
      hintLadder: [
        "What makes a source trustworthy, not just pretty?",
        "Think author expertise + evidence + agreement with others.",
        "Expert author, cited evidence, corroborated."
      ],
      misconceptionsTargeted: ["more-sources-no-judgment"]
    },
    {
      id: "g7.fall.ela.w4.d4.q3",
      type: "multiple_choice",
      stem: "Two sources DISAGREE on a civilization's population. What should your fact-file do?",
      choices: [
        "Pick one number secretly and hide the other",
        "Leave population out entirely",
        "Note both figures, cite each source, and flag that they conflict",
        "Average them without saying so"
      ],
      answerIndex: 2,
      explanation: "Honest research reports the disagreement and cites both, letting the reader see the uncertainty.",
      hintLadder: [
        "Hiding a conflict is dishonest research.",
        "What's the transparent thing to do?",
        "Report both, cite both, flag the conflict."
      ]
    },
    {
      id: "g7.fall.ela.w4.d4.q4",
      type: "short_answer",
      stem: "Synthesize these TWO sources into ONE summary sentence in your own words, and add a citation note. Source A: 'The Egyptians used a 365-day calendar based on the star Sirius.' Source B: 'Their calendar helped predict the Nile's annual flood.'",
      rubric: {
        level3: "Combines both key ideas (365-day Sirius-based calendar AND it predicted the Nile flood) into one clear sentence in the writer's own words AND cites both sources.",
        level2: "Uses both ideas but copies phrasing, loses a detail, or omits the citation.",
        level1: "Uses only one source, changes the meaning, or gives no citation."
      },
      exemplar: "The Egyptians built a 365-day calendar from the star Sirius and used it to predict the Nile's yearly flood (Sources A and B).",
      hintLadder: [
        "Key idea A: a 365-day calendar tied to Sirius.",
        "Key idea B: the calendar predicted the flood.",
        "Merge both into one sentence and cite both sources."
      ]
    },
    {
      id: "g7.fall.ela.w4.d4.q5",
      type: "short_answer",
      stem: "Pick an ancient civilization. Write a 3-line fact-file entry (name, one key fact, why it mattered) that draws on at least TWO sources, and include a citation line naming them.",
      rubric: {
        level3: "Three clear lines (name + accurate key fact + why it mattered) in the writer's own words, drawing on two sources, plus a citation line naming both.",
        level2: "Has the parts but uses only one source, is partly copied, or the citation is vague.",
        level1: "Incomplete, inaccurate, or uncited."
      },
      exemplar: "Name: Ancient Mesopotamia. Key fact: it developed cuneiform writing and early law codes. Why it mattered: written laws and records let a complex society govern itself and pass on knowledge. Sources: class textbook and a museum website.",
      hintLadder: [
        "Choose a civilization you can find two sources on.",
        "State a key fact and why it mattered, in your own words.",
        "Add a citation line naming both sources."
      ]
    }
  ],
  reflectionPrompt: "Strong researchers weave several sources and judge which to trust. Why does synthesizing multiple sources make your fact-file more reliable than leaning on just one?",
  misconceptionBank: [
    {
      id: "more-sources-no-judgment",
      label: "Collects many sources but doesn't judge credibility",
      description: "Assumes any source is equally usable, or that more sources automatically means better research, without weighing author, evidence, or corroboration.",
      coachMove: "Have them rate two sources on author expertise, cited evidence, and corroboration before using either — quality over quantity."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Source or Several?",
      prompt:
        "Would you rather build a fact-file from ONE detailed source, or from THREE shorter sources you've checked for credibility and woven together? Which is harder to fool — and which proves you really understood the topic?",
      answer:
        "Three checked, synthesized sources win. Weaving corroborating sources (and noting where they disagree) is harder to fool and proves real understanding. One source, however detailed, can be biased or wrong with nothing to check it against.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Multi-Source Fact-File Card",
      challenge:
        "Build one polished fact-file card for an ancient civilization by synthesizing at least two sources, rating their credibility, and citing them.",
      steps: [
        "Pick a civilization and gather two sources (book, class notes, website).",
        "Fill in name, location, time period, and a 'why it mattered' fact — synthesized in YOUR words.",
        "Rate each source's credibility (author, evidence, corroboration) with a quick note.",
        "Add a citation line, and flag any point where your sources disagreed."
      ],
      deliverable: "A fact-file card with synthesized notes, a credibility rating for each source, a citation line, and any noted source conflict.",
      choiceBoard: [
        "Design the fact-file card with a mini 'source credibility' box.",
        "Make a 'trading card' with a trust rating for each source.",
        "Record a 30-second spoken fact-file that names both sources aloud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Summarize & Cite Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Source A (a museum site) says the wheel spread from Mesopotamia; Source B (an anonymous blog with no citations) says it came from somewhere else. How should a careful researcher handle this?",
          choices: [
            "Weight the museum source more (expert, cited) but note the disagreement and seek a third source to corroborate",
            "Believe the blog because it's newer",
            "Average the two claims",
            "Ignore both and guess"
          ],
          answerIndex: 0,
          explanation: "Credibility differs: the cited expert source outweighs an anonymous uncited one, but a careful researcher still notes the conflict and corroborates.",
          hintLadder: [
            "Are both sources equally credible? Check author and citations.",
            "The expert, cited source is stronger — but don't just bury the conflict.",
            "Weight by credibility, note the disagreement, corroborate."
          ]
        },
        {
          id: "g7.fall.ela.w4.d4.arena2",
          type: "short_answer",
          stem: "Synthesize these two into ONE summary and add a citation note. Source A: 'The Sumerians developed cuneiform around 3200 BCE.' (World History textbook) Source B: 'Cuneiform was first used for accounting and trade records.' (museum website)",
          rubric: {
            level3: "Combines both ideas (Sumerians created cuneiform ~3200 BCE AND it was first used for accounting/trade) into one clear sentence in the writer's own words AND cites both sources.",
            level2: "Uses both ideas but copies phrasing, drops a detail, or cites only one.",
            level1: "Uses one source, changes meaning, or gives no citation."
          },
          exemplar: "Around 3200 BCE the Sumerians created cuneiform, first using it to keep accounting and trade records (Source A: World History textbook; Source B: museum website).",
          hintLadder: [
            "Idea A: Sumerians made cuneiform ~3200 BCE.",
            "Idea B: it was first used for accounting/trade.",
            "Weave both into one sentence and cite both."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Eyes Off the Page",
      prompt:
        "After all that reading and cross-checking, rest your eyes: look up and focus on the farthest object you can see for 20 slow seconds, then blink 10 times and roll your shoulders back twice.",
      scienceTieIn: "Shifting focus to a distant point relaxes the eye's focusing muscles, easing the strain that builds during close reading of multiple sources.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Strong researchers weave several sources and judge which to trust. Why does synthesizing and citing multiple sources make your work more reliable — and harder to fool?",
      badge: { id: "g7-fall-fact-file-weaver", name: "Fact-File Weaver", emoji: "🧵" },
      estimatedMinutes: 7
    }
  }
};
