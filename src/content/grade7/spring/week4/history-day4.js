// Grade 7 History/Civics — Spring Expedition, Week 4 (Genetics for Kids),
// Day 4. Topic: Gregor Mendel and the history of genetics. Grade-7 depth:
// evaluating sources and evidence, crediting overlooked contributors
// (Rosalind Franklin), and analyzing WHY scientific ideas gain acceptance.

export const springG7HistoryW4D4 = {
  id: "g7.spring.hist.w4.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Gregor Mendel and the history of genetics",
  topicTag: "history-of-genetics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2", "C3.D2.His.3"],
  hook: "History isn't just a list of dates — it's a set of claims backed by evidence, and someone always decides whose contribution gets remembered. Today you trace genetics from Mendel's pea garden to the double helix, weighing the EVIDENCE behind the story and asking who got the credit they earned.",
  miniLesson: [
    "In the 1860s, Gregor Mendel, a monk in what is now the Czech Republic, bred pea plants and counted traits across generations. The strength of his claim came from EVIDENCE: consistent numerical ratios repeated over thousands of plants.",
    "Historians weigh sources by asking who created them, when, and what evidence supports them. Mendel's own published data is a primary source; a modern textbook summarizing it is a secondary source that interprets his work.",
    "Science advanced by building on Mendel: his work was rediscovered around 1900, and in 1953 the DNA double helix was described using X-ray images — including Rosalind Franklin's 'Photo 51.' Her contribution was long under-credited, a reminder that the historical record can leave people out."
  ],
  workedExample: {
    prompt: "A student claims 'Mendel proved his ideas because he was a monk people trusted.' Evaluate this claim: what actually made Mendel's conclusions convincing?",
    steps: [
      "Identify the claim's reasoning: it rests on Mendel's status, not on evidence.",
      "Recall what Mendel actually did: he ran repeated experiments and recorded numerical results.",
      "The convincing part is the EVIDENCE — the same trait ratios appeared consistently across thousands of plants.",
      "Conclude: his conclusions held up because of reproducible data, not because of his job title."
    ],
    answer: "Mendel's conclusions were convincing because of reproducible numerical evidence across many plants, not because of his status as a monk."
  },
  items: [
    {
      id: "g7.spring.hist.w4.d4.q1",
      type: "multiple_choice",
      stem: "What made Gregor Mendel's conclusions about inheritance CONVINCING to later scientists?",
      choices: [
        "He was a famous public figure in his lifetime",
        "He used a powerful microscope to see genes directly",
        "He collected consistent numerical evidence by counting traits across thousands of plants",
        "He guessed the rules without doing experiments"
      ],
      answerIndex: 2,
      explanation: "Mendel's strength was reproducible evidence: the same trait ratios appeared over thousands of pea plants, which is what made his conclusions trustworthy.",
      hintLadder: [
        "Was it his fame, or something about his data?",
        "Think about what he counted and how many times.",
        "Consistent numerical evidence across many plants."
      ]
    },
    {
      id: "g7.spring.hist.w4.d4.q2",
      type: "multiple_choice",
      stem: "Which of these would a historian classify as a PRIMARY source about Mendel's experiments?",
      choices: [
        "Mendel's own 1866 paper reporting his pea-plant data",
        "A 2020 textbook chapter summarizing Mendel's laws",
        "A modern documentary about the history of genetics",
        "A blog post explaining Punnett squares"
      ],
      answerIndex: 0,
      explanation: "Mendel's own 1866 paper is a primary source — a firsthand record from the person and time involved. Textbooks, documentaries, and blogs are secondary sources that interpret it later.",
      hintLadder: [
        "A primary source comes straight from the person and time involved.",
        "Which option was written BY Mendel, at the time?",
        "His own 1866 paper is the primary source."
      ],
      misconceptionsTargeted: ["primary-vs-secondary"]
    },
    {
      id: "g7.spring.hist.w4.d4.q3",
      type: "multiple_choice",
      stem: "Rosalind Franklin's X-ray image ('Photo 51') was crucial evidence for the structure of DNA, yet she was long under-credited. What does this best illustrate about the history of science?",
      choices: [
        "Scientific discoveries always credit everyone equally",
        "Evidence does not matter in science",
        "Only monks make important discoveries",
        "The historical record can overlook real contributors, so we should examine who did the work"
      ],
      answerIndex: 3,
      explanation: "Franklin's under-crediting shows that the historical record is shaped by people and can leave out real contributors, so historians re-examine who actually did the work.",
      hintLadder: [
        "Was Franklin credited fairly at the time?",
        "What does that reveal about how history records credit?",
        "The record can overlook real contributors."
      ]
    },
    {
      id: "g7.spring.hist.w4.d4.q4",
      type: "short_answer",
      stem: "Place these milestones in order and explain the PROGRESS of evidence: Mendel's pea experiments, the rediscovery of Mendel's work (~1900), and the 1953 double-helix model of DNA. Why does the order make sense as science building on evidence?",
      rubric: {
        level3: "Correctly orders Mendel's peas (1860s) → rediscovery (~1900) → DNA double helix (1953) AND explains that each step built on prior evidence: Mendel found the rules, others confirmed them, then scientists found the molecule (DNA) behind them.",
        level2: "Gets the order right but the explanation of how evidence built up is thin.",
        level1: "Wrong order or no reasoning."
      },
      exemplar: "First, Mendel's pea experiments in the 1860s produced numerical evidence for rules of inheritance. Around 1900, other scientists rediscovered and confirmed his work with their own data. Then, in 1953, the double-helix model of DNA identified the actual molecule carrying those instructions, using X-ray evidence like Franklin's Photo 51. The order makes sense because each step rested on the evidence before it: you need the rules confirmed before hunting for the molecule that explains them.",
      hintLadder: [
        "Which came first — the rules, the confirmation, or the molecule?",
        "Peas (1860s), rediscovery (~1900), DNA structure (1953).",
        "Each step built on the evidence gathered before it."
      ]
    },
    {
      id: "g7.spring.hist.w4.d4.q5",
      type: "short_answer",
      stem: "Imagine two accounts of the discovery of DNA's structure: one 1953 paper crediting only two scientists, and a modern history that also credits Rosalind Franklin. As a historian, how would you decide which account is more complete, and what does this teach about reading historical sources critically?",
      rubric: {
        level3: "Explains that a historian compares sources against EVIDENCE (e.g., that Franklin's data was used) and considers who was left out and why, concluding the more complete account is the one that fits the full evidence — and generalizes that sources must be read critically, not taken at face value.",
        level2: "Says the modern account is more complete but gives limited reasoning about evidence or critical reading.",
        level1: "Picks an account with no reasoning or misunderstands the sources."
      },
      exemplar: "I would compare each account against the evidence of who actually did the work. Records show Franklin's X-ray data was essential to the model, so the modern history that credits her fits the evidence better and is more complete. The 1953 credit was shaped by the people writing it and left her out. This teaches that historical sources can be incomplete or biased, so you have to read them critically — checking them against evidence and asking whose voice is missing — rather than accepting the first account you read.",
      hintLadder: [
        "How would you check which account matches the actual evidence?",
        "Consider whose contribution was used but not named.",
        "The fuller account fits the evidence; always read sources critically."
      ]
    }
  ],
  reflectionPrompt: "Mendel was ignored for decades and Franklin was under-credited for years. Why do you think the 'official story' of a discovery sometimes leaves out the people or evidence that mattered most?",
  misconceptionBank: [
    {
      id: "primary-vs-secondary",
      label: "Confuses primary and secondary sources",
      description: "Treats a modern textbook or documentary about Mendel as a primary source, rather than a later interpretation.",
      coachMove: "Ask: 'Was this made BY the person, AT the time?' If yes, it's primary (Mendel's own paper); if it's a later retelling, it's secondary."
    },
    {
      id: "mendel-knew-dna",
      label: "Thinks Mendel knew about DNA",
      description: "Assumes Mendel studied DNA or genes as we know them, when DNA's structure wasn't described until 1953, long after his death.",
      coachMove: "Lay out the timeline: Mendel found the RULES in the 1860s; the MOLECULE (DNA) behind them was described in 1953."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Evidence in the Garden",
      prompt:
        "Mendel spent seven years growing nearly 30,000 pea plants and counting one trait at a time — with no microscope able to see a gene. If a rival scientist doubted him, what could Mendel show to defend his conclusions, and why would it be convincing?",
      answer:
        "Mendel could show his RECORDS: the same trait ratios (like about 3-to-1) appearing consistently across thousands of plants over many generations. That reproducible numerical evidence is convincing because it can't easily be explained by luck — a doubter could even repeat the experiment and get the same pattern.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Evidence-Weighted Genetics Timeline",
      challenge:
        "Build a timeline of genetics history from Mendel's peas (1860s) to the DNA double helix (1953). For each of at least 3 milestones, add not just the date but the KEY EVIDENCE and WHO provided it — including at least one often-overlooked contributor.",
      materials: ["Paper & markers, OR a slide/drawing app"],
      steps: [
        "Draw a horizontal line and mark the years you'll use.",
        "Place at least 3 milestones (e.g., Mendel's peas 1860s, rediscovery ~1900, DNA double helix 1953).",
        "Under each, note the key EVIDENCE (pea ratios, confirming experiments, X-ray images like Photo 51).",
        "Name who provided the evidence, and flag at least one person (like Rosalind Franklin) who was under-credited."
      ],
      deliverable: "A genetics timeline with 3+ dated milestones, each labeled with its key evidence and the person behind it, including one under-credited contributor.",
      choiceBoard: [
        "Draw the evidence-weighted timeline as a horizontal line.",
        "Make 'credit cards' — one per contributor — noting the evidence each provided.",
        "Write a short 'setting the record straight' article that re-credits an overlooked scientist."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History of Genetics Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.hist.w4.d4.arena1",
          type: "multiple_choice",
          stem: "A website says 'Mendel instantly became world-famous for discovering DNA.' Using what you know, why should a careful reader DISTRUST this claim?",
          choices: [
            "It is correct and trustworthy as written",
            "It contains two errors: Mendel was ignored for decades, and he studied inheritance rules, not DNA (described in 1953)",
            "It is wrong only about the date he was born",
            "Mendel never studied peas"
          ],
          answerIndex: 1,
          explanation: "The claim fails against the evidence twice: Mendel's work was overlooked in his lifetime and rediscovered ~1900, and he uncovered inheritance RULES — DNA's structure wasn't described until 1953. A careful reader checks claims against evidence.",
          hintLadder: [
            "Was Mendel really famous right away?",
            "Did Mendel study DNA, or the rules of inheritance?",
            "Two errors: not instantly famous, and he didn't discover DNA."
          ]
        },
        {
          id: "g7.spring.hist.w4.d4.arena2",
          type: "short_answer",
          stem: "Explain why crediting Rosalind Franklin matters for how we tell the history of science, even though the double helix was still discovered. Use the idea of evidence in your answer.",
          rubric: {
            level3: "Explains that Franklin's X-ray evidence was essential to the discovery, so an accurate history must credit her; connects this to fairness and to telling history truthfully based on evidence of who contributed.",
            level2: "Says Franklin should be credited but gives limited reasoning about evidence or why it matters for history.",
            level1: "No clear reasoning or dismisses her contribution."
          },
          exemplar: "Franklin's X-ray image, Photo 51, was key evidence that the double-helix model depended on, so the evidence shows she was a real contributor. An accurate history has to credit the people whose evidence made a discovery possible, not just the ones who announced it. Leaving her out gives a false picture of how science actually happened and is unfair to her work.",
          hintLadder: [
            "What evidence did Franklin provide?",
            "Was that evidence important to the discovery?",
            "Accurate history must credit whoever's evidence mattered."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Patient Gardener Breathing",
      prompt:
        "Mendel's evidence took years of patience. Sit tall and take 5 slow breaths, imagining a seed you planted. Breathe in for 4 counts as it 'grows,' out for 4 counts as it 'rests.' Notice how slowing down sharpens your focus.",
      scienceTieIn: "Slow, steady breathing calms your nervous system and sharpens attention — the same patient, careful observation Mendel used to gather reliable evidence from his pea plants.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You compared two accounts of the same discovery and decided which was more complete. Write about a time you heard two versions of the same story — how did you decide which one to believe, and what evidence did you use?",
      badge: { id: "g7-spring-genetics-historian", name: "Genetics Historian", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
