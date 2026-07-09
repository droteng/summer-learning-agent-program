// Grade 6 History/Civics — Spring Expedition, Week 4 (Genetics for Kids),
// Day 4. Topic: Gregor Mendel and the history of genetics — from pea plants
// in a monastery garden to the discovery of DNA.

export const springG6HistoryW4D4 = {
  id: "g6.spring.hist.w4.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Gregor Mendel and the history of genetics",
  topicTag: "history-of-genetics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2", "C3.D2.His.3"],
  hook: "Long before anyone had heard of DNA, a quiet monk grew thousands of pea plants in a spring garden — and uncovered the hidden rules of heredity. Today you trace the story of genetics from Mendel's peas to the discovery of DNA itself.",
  miniLesson: [
    "In the 1860s, Gregor Mendel, a monk in what is now the Czech Republic, carefully bred pea plants and counted their traits for years. His patient experiments revealed the basic rules of inheritance.",
    "Mendel's ideas were ignored during his lifetime. Around 1900, other scientists rediscovered his work, and he became known as the 'father of genetics.'",
    "Science built on Mendel step by step: genes were named, chromosomes were studied, and in 1953 Watson, Crick, Franklin, and Wilkins revealed the double-helix structure of DNA — the molecule that carries Mendel's 'instructions.'"
  ],
  workedExample: {
    prompt: "Explain why Mendel is called the 'father of genetics' even though he studied only pea plants.",
    steps: [
      "Mendel ran careful, repeated experiments and counted traits across many generations of peas.",
      "From the patterns, he figured out rules for how traits pass from parents to offspring.",
      "Those rules turned out to apply to living things far beyond peas.",
      "Because he discovered the basic laws of inheritance, later scientists honored him as the founder of genetics."
    ],
    answer: "His careful pea experiments revealed the general rules of inheritance, so he is called the father of genetics."
  },
  items: [
    {
      id: "g6.spring.hist.w4.d4.q1",
      type: "multiple_choice",
      stem: "What organism did Gregor Mendel study to discover the rules of inheritance?",
      choices: [
        "Pea plants",
        "Fruit flies",
        "Mice",
        "Bacteria"
      ],
      answerIndex: 0,
      explanation: "Mendel bred and counted traits in thousands of pea plants over many years.",
      hintLadder: [
        "He worked in a garden.",
        "It was a common vegetable plant.",
        "Pea plants."
      ]
    },
    {
      id: "g6.spring.hist.w4.d4.q2",
      type: "multiple_choice",
      stem: "Why is Gregor Mendel remembered as the 'father of genetics'?",
      choices: [
        "He invented the microscope",
        "He built the first DNA model",
        "He discovered the basic rules of how traits pass from parents to offspring",
        "He named all the planets"
      ],
      answerIndex: 2,
      explanation: "Mendel's pea experiments uncovered the fundamental laws of inheritance, earning him the title 'father of genetics.'",
      hintLadder: [
        "Think about what he actually discovered.",
        "It was about how traits are passed down.",
        "He found the rules of inheritance."
      ]
    },
    {
      id: "g6.spring.hist.w4.d4.q3",
      type: "multiple_choice",
      stem: "What happened to Mendel's discoveries during his own lifetime?",
      choices: [
        "They made him instantly world-famous",
        "They were largely ignored, and only rediscovered decades later",
        "They were used to build the first computer",
        "They were proven completely wrong"
      ],
      answerIndex: 1,
      explanation: "Mendel's work was overlooked while he lived; scientists rediscovered its importance around 1900, after his death.",
      hintLadder: [
        "Was he celebrated right away?",
        "His work sat unnoticed for years.",
        "It was rediscovered decades later."
      ],
      misconceptionsTargeted: ["mendel-knew-dna"]
    },
    {
      id: "g6.spring.hist.w4.d4.q4",
      type: "short_answer",
      stem: "Put these genetics milestones in order and explain the progress: Mendel's pea experiments, the discovery of DNA's double-helix structure. Why does the order make sense?",
      rubric: {
        level3: "Correctly orders Mendel's peas (1860s) BEFORE the DNA double helix (1953) AND explains that later scientists built on Mendel's rules to eventually find the molecule behind them.",
        level2: "Gets the order right but the explanation of why is thin.",
        level1: "Wrong order or no reasoning."
      },
      exemplar: "First came Mendel's pea experiments in the 1860s, which found the rules of inheritance. Then, in 1953, scientists discovered the double-helix structure of DNA. The order makes sense because Mendel showed traits were passed down in a pattern, and later scientists searched for and found the actual molecule — DNA — that carries those instructions.",
      hintLadder: [
        "Which came first — the rules, or the molecule behind them?",
        "Mendel's peas were the 1860s; DNA's structure was 1953.",
        "Later work built on Mendel to find DNA."
      ]
    },
    {
      id: "g6.spring.hist.w4.d4.q5",
      type: "short_answer",
      stem: "Mendel's careful method — repeating experiments and counting results over many years — is a big reason his work lasted. Explain why patient, repeated experiments make a scientist's conclusions more trustworthy.",
      rubric: {
        level3: "Explains that repeating and counting many results reduces chance/luck and reveals reliable patterns, making conclusions more trustworthy — connects this to Mendel.",
        level2: "Says repeating helps but the reasoning about reliability/patterns is vague.",
        level1: "No clear reasoning."
      },
      exemplar: "If you test something only once, the result could be luck. Mendel grew thousands of pea plants and counted the traits over and over, so the same patterns kept showing up. Repeating and counting many times filters out chance and reveals a real, reliable pattern, which is why people could trust his conclusions.",
      hintLadder: [
        "What could go wrong if you test something only once?",
        "How does repeating many times help?",
        "Repeating reveals real patterns instead of luck."
      ]
    }
  ],
  reflectionPrompt: "Mendel waited years and was ignored before his ideas mattered. Can you think of an idea or invention that took a long time before people appreciated it?",
  misconceptionBank: [
    {
      id: "mendel-knew-dna",
      label: "Thinks Mendel knew about DNA",
      description: "Assumes Mendel studied DNA or genes as we know them, when DNA's structure wasn't discovered until 1953, long after his death.",
      coachMove: "Lay out the timeline: Mendel found the RULES of inheritance in the 1860s; the MOLECULE (DNA) behind them was discovered much later, in 1953."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Monk in the Garden",
      prompt:
        "Imagine spending seven years growing and counting nearly 30,000 pea plants, one trait at a time, with no microscope powerful enough to see a gene. What do you think a scientist could learn just by carefully watching and counting — before anyone even knew DNA existed?",
      answer:
        "Just by counting patterns across generations, Mendel figured out that traits pass down in predictable ratios — the basic rules of inheritance — decades before DNA was discovered. Careful observation and counting were his 'microscope.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Genetics Timeline",
      challenge:
        "Build a timeline of genetics history from Mendel's pea experiments (1860s) to the discovery of DNA's double helix (1953) and beyond. Add at least 3 milestones with dates and one-line descriptions.",
      materials: ["Paper & markers, OR a slide/drawing app"],
      steps: [
        "Draw a horizontal line and mark it with the years you'll use.",
        "Place Mendel's pea experiments (1860s) and the DNA double helix (1953) on the line.",
        "Add at least one more milestone (rediscovery of Mendel ~1900, or a modern one like the Human Genome Project).",
        "Write a one-line description under each milestone."
      ],
      deliverable: "A labeled genetics timeline with at least 3 dated milestones, each with a short description.",
      choiceBoard: [
        "Draw the timeline as a horizontal line with dated events.",
        "Make a set of 'trading cards,' one per scientist or discovery.",
        "Write a short diary entry as Mendel on the day he noticed a pattern in his peas."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: History of Genetics Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.hist.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Which sequence shows the correct historical order?",
          choices: [
            "DNA double helix discovered → Mendel breeds peas → Mendel rediscovered",
            "DNA double helix → Mendel's work rediscovered → Mendel breeds peas",
            "Mendel rediscovered → DNA double helix → Mendel breeds peas",
            "Mendel breeds peas (1860s) → Mendel's work rediscovered (~1900) → DNA double helix discovered (1953)"
          ],
          answerIndex: 3,
          explanation: "Mendel's pea experiments came first (1860s), his work was rediscovered around 1900, and DNA's double-helix structure was revealed in 1953.",
          hintLadder: [
            "Mendel's peas came before anyone understood DNA.",
            "Rediscovery happened around 1900; DNA's structure in 1953.",
            "Peas → rediscovery → DNA."
          ]
        },
        {
          id: "g6.spring.hist.w4.d4.arena2",
          type: "short_answer",
          stem: "Mendel's discoveries were ignored for over 30 years before other scientists rediscovered them. Explain one reason why an important idea might be overlooked at first, then valued later.",
          rubric: {
            level3: "Gives a plausible reason (idea was ahead of its time, few people read it, science needed to catch up) AND connects it to how the idea later became valued once conditions changed.",
            level2: "Gives a reason but the connection to later being valued is thin.",
            level1: "No clear reasoning."
          },
          exemplar: "Mendel's idea may have been ahead of its time — scientists didn't yet have the tools or background to understand why his pea ratios mattered. Later, once biology had advanced and other scientists were asking the same questions, they rediscovered his work and finally saw how important it was.",
          hintLadder: [
            "Did people have the background to understand it yet?",
            "Sometimes science has to 'catch up' to an idea.",
            "Explain why it was valued later once things changed."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Patient Gardener Breathing",
      prompt:
        "Mendel's discovery took years of patience. Sit tall and take 5 slow breaths, imagining you're a gardener watching a seed you planted. Breathe in for 4 counts as it 'grows,' out for 4 counts as it 'rests.' Notice how slowing down helps you focus.",
      scienceTieIn: "Slow, steady breathing calms your nervous system and sharpens focus — the same patient, careful attention Mendel used to notice patterns in his pea plants.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Mendel was patient and careful, and his ideas were ignored for years before they changed the world. Write about a time you had to be patient before your effort paid off.",
      badge: { id: "spring-genetics-historian", name: "Genetics Historian", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
