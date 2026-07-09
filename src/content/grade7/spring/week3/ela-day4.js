// Grade 7 ELA/Writing — Spring Expedition, Week 3 (Life Cycles), Day 4.
// Topic: explanatory writing — explain a life cycle clearly, comparing and
// synthesizing two sources, with precise transitions and technical vocabulary.

export const springG7ElaW3D4 = {
  id: "g7.spring.ela.w3.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Explanatory writing — explain and compare a life cycle across sources",
  topicTag: "sequence-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.2.C"],
  hook: "Explaining a life cycle in order is a Grade 6 skill. Grade 7 pushes further: real writers pull from MULTIPLE sources that don't always agree, decide what's reliable, and weave the facts into one clear, precise explanation. Today you sequence a process, use varied transitions, and handle two sources that give slightly different information.",
  miniLesson: [
    "Explanatory writing about a process still goes in ORDER, but strong Grade 7 writing also VARIES its transitions (initially, subsequently, meanwhile, as a result, ultimately) and uses precise, domain-specific vocabulary (germination, pollination, metamorphosis) instead of vague words.",
    "When two SOURCES disagree, don't just pick one blindly. Compare them: which is more current, more specific, or from a more expert author? Note the discrepancy for the reader instead of hiding it.",
    "A strong synthesis paragraph opens with a topic sentence, sequences the process with varied transitions and accurate terms, integrates information from more than one source, and closes by resolving or acknowledging any difference between the sources."
  ],
  workedExample: {
    prompt: "Source A says a frog's tadpole stage lasts 'a few weeks'; Source B says '6 to 12 weeks depending on temperature.' Turn these into one clear, ordered sentence that uses both sources and handles the difference.",
    steps: [
      "Identify the ordered fact both sources share: the tadpole stage comes after hatching and before the adult.",
      "Notice the discrepancy: A is vague ('a few weeks'); B is specific ('6–12 weeks') and gives a REASON (temperature).",
      "Prefer the more specific, reasoned source but acknowledge the range: use B's detail.",
      "Combine with a transition: 'After hatching, the tadpole stage lasts roughly 6 to 12 weeks — longer in cooler water — before the frog develops legs and lungs.' This sequences the process, uses precise numbers, and integrates the sources."
    ],
    answer: "After hatching, the tadpole stage lasts roughly 6 to 12 weeks — longer in cooler water — before the frog develops legs and lungs. (Uses the more specific source, keeps order, notes the reason for the range.)"
  },
  items: [
    {
      id: "g7.spring.ela.w3.d4.q1",
      type: "multiple_choice",
      stem: "Which revision uses the MOST precise, domain-specific vocabulary for explanatory writing about a plant's life cycle?",
      choices: [
        "First the seed does its thing, then the plant gets big and makes stuff.",
        "The plant is nice and green and has parts that help it.",
        "First the seed starts, then the plant grows and there are some flowers.",
        "First the seed germinates, then the plant matures and produces flowers that are pollinated."
      ],
      answerIndex: 3,
      explanation: "Precise terms like 'germinates,' 'matures,' and 'pollinated' communicate the process exactly, while the other options use vague fillers like 'does its thing' or 'makes stuff.'",
      hintLadder: [
        "Which option names the actual scientific stages?",
        "Look for exact terms, not fillers like 'stuff' or 'thing.'",
        "'Germinates' and 'pollinated' are precise, domain-specific words."
      ]
    },
    {
      id: "g7.spring.ela.w3.d4.q2",
      type: "multiple_choice",
      stem: "Two sources describe a butterfly's chrysalis stage. Source A is a 2005 kids' website with no author listed; Source B is a 2023 article by an entomologist that cites its data. If they disagree on the number of days, which is the BETTER source to rely on, and why?",
      choices: [
        "Source B, because it is more current AND written by an expert who cites data",
        "Source A, because older information is always more trusted",
        "Whichever gives the smaller number, since smaller is simpler",
        "Neither — you should ignore both and guess"
      ],
      answerIndex: 0,
      explanation: "Source B is more reliable: it is more recent and written by an expert (an entomologist) who cites data. Currency, authorship, and evidence are key tests of source reliability.",
      hintLadder: [
        "Think about who WROTE each source and when.",
        "One has a named expert author and cited data; the other doesn't.",
        "More current + expert + cited evidence = more reliable."
      ],
      misconceptionsTargeted: ["all-sources-equal"]
    },
    {
      id: "g7.spring.ela.w3.d4.q3",
      type: "multiple_choice",
      stem: "Which sentence is the BEST topic sentence for a paragraph that SYNTHESIZES two sources about a frog's life cycle?",
      choices: [
        "Frogs are slimy and I saw one once.",
        "Drawing on two sources, a frog's life cycle can be traced through four main stages, though the sources differ slightly on timing.",
        "There are frogs everywhere in spring.",
        "This paragraph is about frogs and stuff."
      ],
      answerIndex: 1,
      explanation: "A synthesis topic sentence signals BOTH the process being explained and that it draws on (and compares) more than one source — exactly what this option does.",
      hintLadder: [
        "A synthesis paragraph uses more than one source.",
        "Which sentence signals that it draws on two sources?",
        "The option that names 'two sources' and notes they differ sets up a synthesis."
      ]
    },
    {
      id: "g7.spring.ela.w3.d4.q4",
      type: "short_answer",
      stem: "Write 4–5 sentences explaining a plant's life cycle IN ORDER, synthesizing this fact from two sources: Source A says germination takes '1 to 2 weeks'; Source B says 'about 10 days in warm soil.' Use at least THREE varied transitions and precise vocabulary, and handle the timing difference for the reader.",
      rubric: {
        level3: "Explains the stages in correct order with precise vocabulary, uses at least three VARIED transitions, integrates BOTH sources on germination timing, AND handles the difference (e.g., gives a range or notes warmth speeds it up).",
        level2: "Mostly ordered and uses transitions/vocabulary, but uses fewer than three varied transitions OR doesn't clearly integrate/reconcile both sources.",
        level1: "Out of order, vague vocabulary, or ignores the source difference."
      },
      exemplar: "Initially, a seed germinates; the two sources put this at roughly 10 days to 2 weeks, with warmer soil speeding it up. Subsequently, the seedling develops roots and leaves and matures into a full plant. Meanwhile, as it grows, it prepares to reproduce by forming flowers. After the flowers are pollinated and fertilized, they produce new seeds. Ultimately, those seeds are dispersed and germinate, so the cycle begins again.",
      hintLadder: [
        "Start with germination and end with new seeds.",
        "Use varied transitions like initially, subsequently, meanwhile, ultimately.",
        "Give the reader a range (about 10 days to 2 weeks) and note warmth speeds germination."
      ]
    },
    {
      id: "g7.spring.ela.w3.d4.q5",
      type: "short_answer",
      stem: "Why is it important to COMPARE sources — rather than trusting the first one you find — when writing to explain a real-world process? Explain.",
      rubric: {
        level3: "Explains that sources can be outdated, biased, unqualified, or simply wrong, so comparing them (for currency, expertise, and evidence) lets a writer identify the most reliable information and give the reader an accurate, trustworthy explanation.",
        level2: "Gives a partial reason (e.g., 'sources can be wrong') without connecting comparison to reliability/accuracy for the reader.",
        level1: "Restates the question or is unrelated."
      },
      exemplar: "Not every source is equally reliable — some are outdated, some are written by people with no expertise, and some are simply wrong. If a writer trusts the first source they find, they might pass along a mistake. By comparing sources for how current they are, who wrote them, and whether they cite evidence, a writer can figure out which information to trust and give the reader an accurate explanation instead of a rumor.",
      hintLadder: [
        "Are all sources equally trustworthy?",
        "What can go wrong if you use only the first source?",
        "Connect comparing sources to giving the reader accurate information."
      ]
    }
  ],
  reflectionPrompt: "Think of a time two sources (two websites, two people, a video and a book) told you different things. How did you decide which to believe? What would you check next time?",
  misconceptionBank: [
    {
      id: "all-sources-equal",
      label: "Thinks all sources are equally reliable",
      description: "Treats any website, video, or person as equally trustworthy, without weighing currency, authorship, or evidence.",
      coachMove: "Have them run three quick checks on each source — When was it written? Who wrote it (and are they an expert)? Does it cite evidence? A source failing these should be trusted less."
    },
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter in explanatory writing",
      description: "Writes process steps in whatever order they come to mind, assuming the reader will sort it out.",
      coachMove: "Have them read the steps aloud and try to actually DO them in that order. If a step can't work yet, it's misplaced — and the reader would be just as confused."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Two Sources, One Truth",
      prompt:
        "Two field guides describe the same beetle's larva stage. One (from 1998, no author) says 'a couple months.' The other (2022, by a named entomologist, with cited data) says '8 to 10 weeks.' You can only write ONE sentence. Which source do you lean on, how do you phrase the timing, and why?",
      answer:
        "Lean on the 2022 expert source with cited data — it's more current, authored by an expert, and evidence-based. A good sentence: 'The larva stage lasts about 8 to 10 weeks.' You give the specific range and rely on the more reliable source rather than the vague, older, anonymous one.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Source Life-Cycle Explainer",
      challenge:
        "Write a clear 'how a ___ grows' explainer that SYNTHESIZES at least two sources (two books, sites, or even a video and an article). Use a topic sentence, varied transitions, precise vocabulary, and — crucially — note at least one place your sources differed and how you handled it. Add labeled sketches if you like.",
      materials: ["Paper & pencil", "OR a writing app", "Two short sources (books, articles, or sites) on the same life cycle"],
      steps: [
        "Pick an organism and find two sources describing its life cycle.",
        "Write a topic sentence naming the process AND signaling you use two sources.",
        "Explain each stage in order with varied transitions and precise terms.",
        "Point out one place the sources differed and explain which you trusted and why, then close by noting the cycle repeats."
      ],
      deliverable: "A short synthesis explainer of a life cycle drawing on two sources, with varied transitions, precise vocabulary, and a note on how a source discrepancy was handled.",
      choiceBoard: [
        "Write the two-source explainer as a polished paragraph.",
        "Make an illustrated 'zine' with one stage per panel and a 'sources compared' box.",
        "Record a short narrated explainer citing both sources aloud, then transcribe it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w3.d4.arena1",
          type: "multiple_choice",
          stem: "Which revision BEST synthesizes these two notes into ordered, precise writing? Note 1: 'seed sprouts, roughly 1 week.' Note 2 (expert, cited): 'germination takes 5–8 days in warm soil.'",
          choices: [
            "The seed does its thing in about a week, more or less, I think.",
            "The seed sprouts and then stuff happens for a week.",
            "Initially, the seed germinates — roughly 5 to 8 days in warm soil — after which the seedling grows and matures.",
            "Germination, growth, week, warm, seed."
          ],
          answerIndex: 2,
          explanation: "This version leads with a transition ('initially'), uses precise vocabulary ('germinates'), leans on the more specific expert range (5–8 days in warm soil), and continues the process in order.",
          hintLadder: [
            "Which option uses precise terms and a transition?",
            "Prefer the specific expert range over the vague 'about a week.'",
            "The best answer sequences the process AND uses the reliable source."
          ]
        },
        {
          id: "g7.spring.ela.w3.d4.arena2",
          type: "short_answer",
          stem: "Rewrite these jumbled notes into 3–4 ordered sentences with varied transitions and precise vocabulary, AND reconcile the sources: 'frog lays eggs / tadpole grows legs / tadpole hatches / becomes adult frog.' Source A: tadpole stage 'a few weeks'; Source B (expert): '6–12 weeks depending on temperature.'",
          rubric: {
            level3: "Orders the stages correctly (eggs → hatch → grow legs → adult) with at least two varied transitions and precise terms, AND integrates both sources on the tadpole stage while handling the difference (e.g., gives the 6–12 week range and notes temperature).",
            level2: "Mostly correct order and transitions, but doesn't clearly reconcile the two sources, or uses vague vocabulary.",
            level1: "Out of order, no transitions, or ignores the sources."
          },
          exemplar: "Initially, a frog lays eggs in the water, and subsequently those eggs hatch into tadpoles. The tadpole stage lasts roughly 6 to 12 weeks — longer in cooler water, according to the expert source — during which the tadpole gradually grows legs and develops lungs. Ultimately, it becomes an adult frog that can lay eggs of its own, restarting the cycle.",
          hintLadder: [
            "Order the four stages first, starting with the eggs.",
            "Use varied transitions like initially, subsequently, ultimately.",
            "Give the 6–12 week range and note temperature affects it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Transition Word Toss",
      prompt:
        "Stand up. Say 'INITIALLY' and touch your toes, 'SUBSEQUENTLY' and reach to the sky, 'MEANWHILE' and twist left, 'ULTIMATELY' and twist right. Repeat the sequence twice, a little faster each round.",
      scienceTieIn: "Pairing each advanced transition word with a distinct movement builds stronger memory links — your brain recalls sequences better when your body helps encode them.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You practiced comparing sources today. What is one topic where you'd want to check MORE than one source before believing it, and what makes a source trustworthy to you?",
      badge: { id: "g7-spring-source-synthesizer", name: "Source Synthesizer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
