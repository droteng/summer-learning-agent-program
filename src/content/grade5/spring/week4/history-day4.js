// Grade 5 History/Civics — Spring Expedition, Week 4 (Genetics for Kids),
// Day 4. Topic: Gregor Mendel and the history of genetics — from a monk's
// pea-plant garden to the discovery of DNA. Grade-5 depth: shorter passages,
// vocab support, simpler timeline reasoning.

export const springG5HistoryW4D4 = {
  id: "g5.spring.hist.w4.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Gregor Mendel and the history of genetics",
  topicTag: "history-of-genetics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.3-5", "C3.D2.His.2.3-5"],
  hook: "Long before anyone knew about DNA, a quiet monk grew thousands of pea plants in a spring garden — and figured out the hidden rules of how traits are passed down. Today you follow the story of genetics from Mendel's peas to the discovery of DNA.",
  miniLesson: [
    "In the 1860s, Gregor Mendel was a monk who grew and studied pea plants for years. He carefully watched and counted their traits, like tall or short. Vocabulary: TRAIT = a feature a living thing has.",
    "Mendel figured out patterns for how traits pass from parent plants to their offspring. But almost no one paid attention to his work while he was alive. Vocabulary: OFFSPRING = the baby plants or animals.",
    "About 30 years later, other scientists found Mendel's work again and saw how important it was. He became known as the 'father of genetics.' Much later, in 1953, scientists discovered DNA — the tiny 'instructions' that carry traits."
  ],
  workedExample: {
    prompt: "Explain why Mendel is called the 'father of genetics' even though he only studied pea plants.",
    steps: [
      "Mendel did careful experiments, growing and counting pea plants for years.",
      "From the patterns he saw, he figured out rules for how traits pass from parents to offspring.",
      "Those rules turned out to be true for many living things, not just peas.",
      "Because he discovered the first rules of how traits are passed down, later scientists called him the father of genetics."
    ],
    answer: "His careful pea experiments showed the rules of how traits are passed down, so he is called the father of genetics."
  },
  items: [
    {
      id: "g5.spring.hist.w4.d4.q1",
      type: "multiple_choice",
      stem: "What did Gregor Mendel grow and study to learn about traits?",
      choices: [
        "Fruit flies",
        "Fish",
        "Mice",
        "Pea plants"
      ],
      answerIndex: 3,
      explanation: "Mendel grew and counted the traits of thousands of pea plants over many years.",
      hintLadder: [
        "He worked in a garden.",
        "It was a common vegetable plant.",
        "Pea plants."
      ]
    },
    {
      id: "g5.spring.hist.w4.d4.q2",
      type: "multiple_choice",
      stem: "Why is Gregor Mendel remembered as the 'father of genetics'?",
      choices: [
        "He discovered the first rules for how traits pass from parents to offspring",
        "He invented the telescope",
        "He built the first DNA model",
        "He named all the planets"
      ],
      answerIndex: 0,
      explanation: "Mendel's pea experiments showed the first rules of how traits are passed down, so he is called the father of genetics.",
      hintLadder: [
        "Think about what he actually discovered.",
        "It was about how traits are passed down.",
        "He found the rules for passing traits to offspring."
      ]
    },
    {
      id: "g5.spring.hist.w4.d4.q3",
      type: "multiple_choice",
      stem: "What happened to Mendel's discovery while he was still alive?",
      choices: [
        "It made him famous right away",
        "It was used to build the first car",
        "Almost no one paid attention to it, and it was found again years later",
        "It was proven totally wrong"
      ],
      answerIndex: 2,
      explanation: "People overlooked Mendel's work while he lived. About 30 years later, other scientists found it again and saw how important it was.",
      hintLadder: [
        "Was he famous right away?",
        "His work sat unnoticed for years.",
        "It was found again years later."
      ],
      misconceptionsTargeted: ["mendel-knew-dna"]
    },
    {
      id: "g5.spring.hist.w4.d4.q4",
      type: "short_answer",
      stem: "Put these two events in order and explain why: (1) Mendel studies pea plants in the 1860s, (2) scientists discover DNA in 1953. Which came first, and why does that order make sense?",
      rubric: {
        level3: "Puts Mendel's peas (1860s) BEFORE the discovery of DNA (1953) AND explains that Mendel found the rules for passing traits first, and later scientists found DNA, the tiny instructions behind those traits.",
        level2: "Gets the order right but the reason is thin.",
        level1: "Wrong order or no reasoning."
      },
      exemplar: "Mendel studied pea plants first, in the 1860s. Then scientists discovered DNA in 1953. This order makes sense because Mendel showed that traits are passed down in a pattern, and later scientists found DNA — the tiny instructions that actually carry those traits.",
      hintLadder: [
        "Which came first — the rules, or the tiny instructions behind them?",
        "Mendel's peas were the 1860s; DNA was 1953.",
        "Later scientists built on Mendel's work to find DNA."
      ]
    },
    {
      id: "g5.spring.hist.w4.d4.q5",
      type: "short_answer",
      stem: "Mendel grew and counted his pea plants over and over for years. Explain why doing an experiment many times makes a scientist's answer easier to trust.",
      rubric: {
        level3: "Explains that repeating and counting many times shows the same pattern again and again, so the result is not just luck — which makes it easier to trust. Connects this to Mendel.",
        level2: "Says repeating helps but the reason about patterns/luck is vague.",
        level1: "No clear reasoning."
      },
      exemplar: "If you try something only once, the answer could just be luck. Mendel grew thousands of pea plants and counted their traits again and again, so the same pattern kept showing up. Because he repeated it so many times, people could trust that his answer was real and not an accident.",
      hintLadder: [
        "What could go wrong if you test something only once?",
        "How does repeating it many times help?",
        "Repeating shows a real pattern instead of luck."
      ]
    }
  ],
  reflectionPrompt: "Mendel waited years, and people ignored his idea before it mattered. Can you think of an idea or invention that took a long time before people liked it?",
  misconceptionBank: [
    {
      id: "mendel-knew-dna",
      label: "Thinks Mendel knew about DNA",
      description: "Assumes Mendel studied DNA, when DNA wasn't discovered until 1953, long after Mendel's time.",
      coachMove: "Lay out the timeline: Mendel found the RULES for passing traits in the 1860s; DNA — the tiny instructions behind them — was discovered much later, in 1953."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Monk in the Garden",
      prompt:
        "Imagine spending years growing and counting thousands of pea plants, one trait at a time, with no way to see a tiny gene. What do you think a scientist could learn just by carefully watching and counting — before anyone even knew DNA existed?",
      answer:
        "Just by counting patterns over and over, Mendel figured out that traits pass down in a predictable way — the first rules of how traits are inherited — years before DNA was discovered. Careful watching and counting were his tools.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Genetics Timeline",
      challenge:
        "Build a timeline of genetics history, from Mendel's pea experiments (1860s) to the discovery of DNA (1953) and beyond. Add at least 3 events, each with a date and a one-line description.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw a straight line across your page and mark the years you'll use.",
        "Place Mendel's pea experiments (1860s) and the discovery of DNA (1953) on the line.",
        "Add at least one more event (like scientists finding Mendel's work again around 1900).",
        "Write a short one-line description under each event."
      ],
      deliverable: "A labeled genetics timeline with at least 3 dated events, each with a short description.",
      choiceBoard: [
        "Draw the timeline as a straight line with dated events.",
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
          id: "g5.spring.hist.w4.d4.arena1",
          type: "multiple_choice",
          stem: "Which list shows the correct order of events in history?",
          choices: [
            "DNA is discovered → Mendel grows peas → Mendel's work is found again",
            "Mendel grows peas (1860s) → Mendel's work is found again (~1900) → DNA is discovered (1953)",
            "Mendel's work is found again → DNA is discovered → Mendel grows peas",
            "DNA is discovered → Mendel's work is found again → Mendel grows peas"
          ],
          answerIndex: 1,
          explanation: "Mendel grew his peas first (1860s), his work was found again around 1900, and DNA was discovered in 1953.",
          hintLadder: [
            "Mendel's peas came before anyone knew about DNA.",
            "His work was found again around 1900; DNA was 1953.",
            "Peas → found again → DNA."
          ]
        },
        {
          id: "g5.spring.hist.w4.d4.arena2",
          type: "short_answer",
          stem: "People ignored Mendel's discovery for over 30 years before other scientists found it again. Explain one reason why an important idea might be ignored at first, and then liked later.",
          rubric: {
            level3: "Gives a reasonable reason (the idea was ahead of its time, few people read it, or science had to catch up) AND connects it to how the idea was liked later once things changed.",
            level2: "Gives a reason but the link to being liked later is thin.",
            level1: "No clear reasoning."
          },
          exemplar: "Mendel's idea may have been ahead of its time. Other scientists did not yet understand why his pea patterns mattered. Later, once science had grown and people were asking the same questions, they found his work again and finally saw how important it was.",
          hintLadder: [
            "Did people have enough background to understand it yet?",
            "Sometimes science has to 'catch up' to an idea.",
            "Explain why it was liked later once things changed."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Patient Gardener Breathing",
      prompt:
        "Mendel's discovery took years of patience. Sit up tall and take 5 slow breaths, imagining you're a gardener watching a seed you planted. Breathe in for 4 counts as it 'grows,' out for 4 counts as it 'rests.' Notice how slowing down helps you focus.",
      scienceTieIn: "Slow, steady breathing calms your body and helps you focus — the same patient, careful attention Mendel used to notice patterns in his pea plants.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Mendel was patient and careful, and his idea was ignored for years before it changed the world. Write about a time you had to be patient before your work paid off.",
      badge: { id: "g5-spring-pea-pioneer", name: "Pea Plant Pioneer", emoji: "🌱" },
      estimatedMinutes: 7
    }
  }
};
