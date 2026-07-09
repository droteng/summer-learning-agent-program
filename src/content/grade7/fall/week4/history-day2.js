// Grade 7 History/Civics — Fall Expedition, Week 4 (Ancient Civilizations),
// Day 2. Topic: writing, records, and why they changed history — raised to
// source analysis, corroboration, and reliability of written evidence.

export const fallG7HistoryW4D2 = {
  id: "g7.fall.hist.w4.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Writing and records change everything",
  topicTag: "writing-systems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.10", "C3.D3.His.1"],
  hook: "Writing didn't just preserve the past — it created evidence historians can question, corroborate, and even distrust. Today you weigh WHO wrote a record and WHY before you believe it.",
  miniLesson: [
    "Written records began as practical tallies of goods, then grew into cuneiform and hieroglyphs that could record laws, stories, and ideas.",
    "Writing lets knowledge outlive memory — but every record has an author with a purpose, so historians ask who wrote it, when, and why.",
    "Corroboration (matching a claim across independent records) and detecting bias (a ruler praising himself) are how historians judge whether a written source is reliable."
  ],
  workedExample: {
    prompt: "A carved inscription says a king 'built the greatest city ever.' How should a historian treat this claim?",
    steps: [
      "Identify the author and purpose: a king (or his scribes) glorifying the ruler — likely biased.",
      "Note the claim is a boast, not a neutral fact ('greatest ever').",
      "Look for corroboration: do other independent records or ruins support the city's size?",
      "Conclude: treat the boast cautiously and verify the factual parts against other evidence."
    ],
    answer: "Recognize the author's bias, separate boast from fact, and corroborate the factual claims with independent evidence before trusting them."
  },
  items: [
    {
      id: "g7.fall.hist.w4.d2.q1",
      type: "multiple_choice",
      stem: "Before believing a written ancient record, a historian FIRST asks...",
      choices: [
        "Is the handwriting neat?",
        "Who wrote this, when, and for what purpose?",
        "Is it the longest record available?",
        "Does it use big words?"
      ],
      answerIndex: 1,
      explanation: "Sourcing — asking who made a record, when, and why — is the first step in judging its reliability.",
      hintLadder: [
        "Reliability depends on the record's origin.",
        "Think author, date, and purpose.",
        "That's called 'sourcing' a document."
      ]
    },
    {
      id: "g7.fall.hist.w4.d2.q2",
      type: "multiple_choice",
      stem: "A royal inscription praises the king who ordered it carved. This is an example of possible...",
      choices: [
        "bias, because the author benefits from the message",
        "corroboration",
        "prehistory",
        "a summary"
      ],
      answerIndex: 0,
      explanation: "When an author benefits from the message, the source may be biased and should be checked against independent evidence.",
      hintLadder: [
        "Who benefits from the record's message?",
        "If the author looks good, that's a warning sign.",
        "That warning sign is called bias."
      ],
      misconceptionsTargeted: ["written-equals-true"]
    },
    {
      id: "g7.fall.hist.w4.d2.q3",
      type: "multiple_choice",
      stem: "Two independent records — a Mesopotamian tablet and an Egyptian letter — both describe a trade agreement between the two regions. Why does this strengthen a historian's confidence?",
      choices: [
        "Because two records are always longer",
        "Because Egyptian records outrank Mesopotamian ones",
        "Because independent sources corroborate each other, making the trade more likely to be real",
        "Because older records are automatically correct"
      ],
      answerIndex: 2,
      explanation: "Independent corroboration — two unrelated sources agreeing — is strong evidence a claim is accurate.",
      hintLadder: [
        "What do the two records have in common?",
        "They agree, and they come from different places.",
        "Independent agreement = corroboration."
      ]
    },
    {
      id: "g7.fall.hist.w4.d2.q4",
      type: "short_answer",
      stem: "Explain how writing turned 'prehistory' into 'history,' AND explain one LIMIT of written records that means writing alone doesn't give us the whole past.",
      rubric: {
        level3: "Explains writing gives direct records that let us know events/ideas (starting 'history') AND names a real limit (bias, only literate elites wrote, records lost/destroyed, one viewpoint) with reasoning.",
        level2: "Explains the history/prehistory shift OR names a limit, but not both clearly.",
        level1: "Vague or only restates that writing is useful."
      },
      exemplar: "Writing gave direct accounts of what people did and agreed to, so historians can 'read' the past instead of only guessing from objects — that begins history. But records were often written by powerful, literate few and can be biased, so writing alone leaves out most ordinary voices.",
      hintLadder: [
        "First: what does a written record give us that bones don't?",
        "Then: who usually got to write, and might they slant it?",
        "Name a real limit: bias, elite authorship, or lost records."
      ]
    },
    {
      id: "g7.fall.hist.w4.d2.q5",
      type: "short_answer",
      stem: "A single clay tablet claims a city held 100,000 people. Describe TWO steps a historian would take before accepting this number as fact.",
      rubric: {
        level3: "Names two sound steps such as: source the tablet (author/purpose), check for exaggeration/bias, corroborate with other tablets, and compare with physical evidence (ruins, city size). Both steps explained.",
        level2: "Names two steps but one is thin, or names only one strong step.",
        level1: "Accepts the number uncritically or gives no real method."
      },
      exemplar: "First, I'd source the tablet — who wrote it and why, since a ruler might exaggerate. Second, I'd corroborate the figure against other records and the archaeological size of the ruins to see if 100,000 is even physically possible.",
      hintLadder: [
        "Step one is usually about the source itself (who/why).",
        "Step two is usually about checking against OTHER evidence.",
        "Think sourcing + corroboration or physical evidence."
      ]
    }
  ],
  reflectionPrompt: "You read many written claims each day — posts, ads, headlines. Pick one and ask: who wrote it, and what might they want me to believe?",
  misconceptionBank: [
    {
      id: "written-equals-true",
      label: "Assumes anything written down is true",
      description: "Treats a written record as automatically factual, ignoring author, purpose, and bias.",
      coachMove: "Show a self-praising royal inscription and ask 'who benefits?' — then have them corroborate the factual parts with another source."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Witness That Might Lie",
      prompt:
        "I outlive memory and can hold laws, deals, and boasts for thousands of years — but I always have an author with a reason. Trust me too quickly and you might repeat a lie carved in stone. What am I, and what one question makes me safer to use?",
      answer: "A written record. It's safer once you ask 'who wrote this, and why?' — then corroborate its claims with other independent sources before believing them.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Trust-or-Doubt the Tablet",
      challenge:
        "Invent an ancient written record (a royal inscription, a trade receipt, or a letter) with 6 of your own symbols, then run it through a historian's reliability check.",
      steps: [
        "Design 6 symbols and a key, then 'write' a 1–2 line record with them.",
        "Label your record's AUTHOR and PURPOSE (who made it and why).",
        "Rate it TRUST or DOUBT and give one reason (is the author biased?).",
        "Name one other source you'd need to corroborate it."
      ],
      deliverable: "A symbol-written ancient record plus a reliability note (author, purpose, trust/doubt, and a corroborating source needed).",
      choiceBoard: [
        "Draw the symbol record and write the reliability note.",
        "Make a 'clay tablet' in foil or playdough with a doubt/trust verdict tag.",
        "Write two versions of the SAME event — one biased boast, one neutral receipt — and compare them."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.hist.w4.d2.arena1",
          type: "multiple_choice",
          stem: "A king's inscription and an enemy kingdom's letter BOTH mention a battle, but disagree on who won. What is the BEST historian move?",
          choices: [
            "Believe the king's own inscription because it's carved in stone",
            "Decide the battle never happened",
            "Believe the letter because letters are private",
            "Recognize both authors are biased toward their own side and look for a neutral third source or physical evidence"
          ],
          answerIndex: 3,
          explanation: "Both sources are biased toward their own side. Corroborating with a neutral source or archaeology is the sound move — and the shared mention still confirms a battle occurred.",
          hintLadder: [
            "Why might EACH side slant the story?",
            "Both authors benefit from claiming victory.",
            "Seek a neutral source or physical evidence to corroborate."
          ]
        },
        {
          id: "g7.fall.hist.w4.d2.arena2",
          type: "short_answer",
          stem: "Writing let knowledge outlive memory, but MOST ancient people couldn't write. Explain how this limitation biases the historical record, and one way historians try to recover the missing voices.",
          rubric: {
            level3: "Explains that since mainly elites/scribes wrote, the record over-represents rulers and under-represents ordinary people (a bias) AND names a recovery method (archaeology, artifacts, everyday objects, indirect records).",
            level2: "Identifies the bias OR a recovery method, but not both clearly.",
            level1: "No clear grasp of the bias or how to address it."
          },
          exemplar: "Because mostly scribes and rulers wrote, the record favors kings and elites and leaves out farmers and workers — a real bias. Historians recover missing voices through archaeology: studying homes, tools, and everyday objects the non-writing majority left behind.",
          hintLadder: [
            "Who got to write — everyone, or a small group?",
            "Whose story is then over-represented in the records?",
            "How do we learn about the people who left no writing?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Trace and Breathe",
      prompt:
        "With your finger, slowly 'write' your name in the air, breathing in as you begin each letter and out as you finish it. Notice how deliberate, unhurried strokes settle your mind.",
      scienceTieIn: "Slow, deliberate movement paired with steady breathing calms the nervous system and helps the brain settle before focused work.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You read many written claims each day — posts, ads, headlines. Pick one and ask: who wrote it, why, and what would corroborate it?",
      badge: { id: "g7-fall-record-keeper", name: "Record Keeper", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
