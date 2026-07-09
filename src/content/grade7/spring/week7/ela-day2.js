// Grade 7 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 2. Topic: supporting a claim with credible evidence AND comparing
// sources — weighing which evidence is stronger and more trustworthy for an
// environmental argument.

export const springG7ElaW7D2 = {
  id: "g7.spring.ela.w7.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Support a claim with credible evidence and compare sources",
  topicTag: "reasons-and-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1.B", "CCSS.ELA-LITERACY.RI.7.8"],
  hook: "Yesterday you sharpened a claim worth defending. Today you arm it. A Grade 7 argument does not just grab any fact — it weighs sources, asks who is behind them, and chooses the most credible and relevant evidence. When two sources disagree, you decide which one a careful reader should trust, and why.",
  miniLesson: [
    "Evidence is the proof behind your reasons — facts, data, expert findings, and real examples. But not all evidence is equal: strong evidence is RELEVANT (it actually supports your reason) and CREDIBLE (it comes from a trustworthy source).",
    "Judge a source by asking: Who created it? What do they know about the topic? Do they have a reason to be biased? A peer-reviewed study or a government environmental agency is usually more credible than an anonymous blog or a company advertising its own product.",
    "When two sources conflict, compare them instead of picking randomly. A 2023 study from ten scientists usually outweighs a single company's press release — and recent, specific data usually beats old or vague claims. Naming WHY you trust one source over another makes your argument stronger."
  ],
  workedExample: {
    prompt: "Two sources address the claim 'Our town should ban single-use plastic bags.' Source A: a plastics company's ad saying 'plastic bags are 100% recyclable and harmless.' Source B: a 2022 university study finding most plastic bags are never recycled and often end up in waterways. Which is stronger evidence, and why?",
    steps: [
      "Ask who created each source and why: Source A sells plastic, so it is biased toward defending it.",
      "Ask about credibility: Source B is a university study, peer-reviewed and independent, with no product to sell.",
      "Ask about relevance and recency: Source B directly measures what actually happens to the bags and is recent.",
      "Decide and explain: Source B is stronger because it is independent, evidence-based, and free of the conflict of interest that weakens Source A."
    ],
    answer: "Source B is the stronger evidence: an independent, recent university study outweighs a plastics company's self-interested ad, because the company has a clear bias and the study does not."
  },
  items: [
    {
      id: "g7.spring.ela.w7.d2.q1",
      type: "multiple_choice",
      stem: "You are arguing that a local river is unsafe. Which source is the MOST credible evidence?",
      choices: [
        "A recent water-quality report from the state environmental agency showing pollutant levels above the safe limit.",
        "A comment on a social media post saying 'the river seems gross.'",
        "An ad from a company that wants to build a dock on the river.",
        "A meme that says rivers are dirty."
      ],
      answerIndex: 0,
      explanation: "A recent report from a state environmental agency is independent, expert, and based on measured data — the most credible and relevant source. The others are anonymous, biased, or not real evidence.",
      hintLadder: [
        "Ask who made each source and whether they are an expert.",
        "Which source has measured data and no reason to be biased?",
        "The state agency's water-quality report is the most credible."
      ]
    },
    {
      id: "g7.spring.ela.w7.d2.q2",
      type: "multiple_choice",
      stem: "When two sources give conflicting evidence about an environmental issue, what is the best way to decide which to trust?",
      choices: [
        "Always pick the one that agrees with your claim.",
        "Pick whichever one is shorter.",
        "Compare who created each source, how they gathered their evidence, and whether either has a reason to be biased.",
        "Flip a coin, since both are just opinions."
      ],
      answerIndex: 2,
      explanation: "Evaluating conflicting sources means comparing the author, the method, the recency, and any bias — not simply choosing the one you like or that is easiest to read.",
      hintLadder: [
        "Should you pick a source just because it agrees with you?",
        "What questions reveal which source is more trustworthy?",
        "Compare authorship, method, recency, and bias."
      ],
      misconceptionsTargeted: ["all-sources-equal"]
    },
    {
      id: "g7.spring.ela.w7.d2.q3",
      type: "multiple_choice",
      stem: "A student supports 'Our city should expand bike lanes' with this evidence. Which is the STRONGEST — most credible AND relevant?",
      choices: [
        "'My uncle says bikes are better than cars.'",
        "A tweet with no source that says 'cars are the worst.'",
        "'Everybody knows biking is healthy.'",
        "A 2023 transportation-department study finding that neighborhoods with protected bike lanes saw a 30% drop in car trips and lower emissions."
      ],
      answerIndex: 3,
      explanation: "It is recent, comes from an expert body, uses measured data (30% drop), and directly connects bike lanes to the claim's benefit. The others are anecdote, common assumption, or an unsourced opinion.",
      hintLadder: [
        "Look for a source that is expert, recent, and uses real data.",
        "Which one directly measures the effect of bike lanes?",
        "The transportation-department study is the strongest evidence."
      ]
    },
    {
      id: "g7.spring.ela.w7.d2.q4",
      type: "short_answer",
      stem: "You find two sources about your environmental claim that disagree. Describe both sources, then explain which one you would trust as evidence and give TWO reasons why.",
      rubric: {
        level3: "Describes two plausible conflicting sources AND chooses one with two clear, valid reasons rooted in credibility (e.g., expertise, independence, recency, method, lack of bias).",
        level2: "Describes the sources and chooses one, but gives only one solid reason or a vague reason.",
        level1: "Fails to describe both, or chooses with no real reasoning about credibility."
      },
      exemplar: "Source A is a snack company's website claiming its packaging is 'eco-friendly.' Source B is a 2023 independent study measuring how long that packaging actually takes to break down. I would trust Source B because (1) it is independent and has no product to sell, and (2) it uses measured data instead of a marketing slogan.",
      hintLadder: [
        "Describe two sources that could reasonably disagree.",
        "Ask which one has more expertise, independence, or better data.",
        "Give two specific reasons for your choice, not just 'I like it.'"
      ]
    },
    {
      id: "g7.spring.ela.w7.d2.q5",
      type: "short_answer",
      stem: "Why can a source with strong-sounding claims still be WEAK evidence for an environmental argument? Explain using the idea of bias or conflict of interest.",
      rubric: {
        level3: "Explains that a source may sound confident but be untrustworthy if the author benefits from a certain conclusion (bias/conflict of interest) or provides no verifiable method, so confident wording does not equal credibility.",
        level2: "Gives a partial explanation without clearly connecting to bias, conflict of interest, or verifiability.",
        level1: "Restates the question or misses the idea of source credibility."
      },
      exemplar: "A source can sound convincing and still be weak if the author gains from what they claim. For example, a company saying its own product is 'harmless to the ocean' has a conflict of interest, so its confident wording does not make it credible — I would want independent, checkable evidence instead.",
      hintLadder: [
        "Does sounding confident make a source trustworthy?",
        "What if the author profits from you believing them?",
        "Connect strong wording to bias and the need for independent proof."
      ]
    }
  ],
  reflectionPrompt: "Look at the strongest piece of evidence you have for your claim. Who created it, and could anyone accuse that source of bias? If so, where could you find an independent source to back it up?",
  misconceptionBank: [
    {
      id: "all-sources-equal",
      label: "Treats all sources as equally trustworthy",
      description: "Believes any website, ad, or post that states a fact counts as equally strong evidence, ignoring author, method, recency, and bias.",
      coachMove: "Ask: 'Who made this and why? Do they gain if you believe it?' Push the student to rank sources by credibility, not just by whether they agree."
    },
    {
      id: "confidence-equals-credible",
      label: "Confuses confident wording with credibility",
      description: "Thinks a source is strong because it sounds sure or dramatic, rather than because it is independent and evidence-based.",
      coachMove: "Separate tone from trust: 'It SOUNDS certain — but can you check how they know it, and do they benefit from it being true?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Who Told You That?",
      prompt:
        "Two sources say opposite things about a new 'biodegradable' cup: the cup's manufacturer says it fully breaks down in 30 days; an independent lab study says it takes over 2 years. Before you decide who is right, ask: which source has a reason to bend the truth, and which one would you trust in your persuasive piece — and why?",
      answer: "Trust the independent lab study. The manufacturer has a conflict of interest — it profits from the cup looking eco-friendly — while the independent lab has no product to sell and uses measured testing. Credibility beats a confident marketing claim.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Source Showdown Scorecard",
      challenge:
        "Build a 'Source Showdown' scorecard for your environmental claim. Line up two or three real or realistic sources and rate each one on credibility, so you can pick — and justify — the evidence you will actually use.",
      steps: [
        "Write your claim at the top, then list 2-3 sources that speak to it.",
        "Score each source on four criteria: expertise, independence (no bias), recency, and quality of data.",
        "Circle the winner and write one sentence explaining WHY it beat the others.",
        "Add a 'red flag' note on the weakest source, naming its bias or missing method."
      ],
      deliverable: "A source scorecard comparing 2-3 sources on credibility, with the winning source justified and the weakest source's flaw named.",
      choiceBoard: [
        "Make a paper scorecard table with ratings and a circled winner.",
        "Build a digital slide that pits two sources against each other with pros and cons.",
        "Draw a 'boxing ring' graphic where the more credible source wins the round."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Source Comparison Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w7.d2.arena1",
          type: "multiple_choice",
          stem: "Claim: 'Our region should protect its bees.' Two sources conflict. Which is the STRONGER evidence?",
          choices: [
            "A pesticide company's brochure saying its spray is 'completely safe for pollinators.'",
            "A 2023 peer-reviewed study by university biologists finding that the pesticide reduced local bee populations by nearly a third.",
            "A comment online saying 'bees are fine, stop worrying.'",
            "A headline with no article that just says 'BEES!'"
          ],
          answerIndex: 1,
          explanation: "The peer-reviewed university study is independent, recent, expert, and data-based, while the brochure has a clear conflict of interest and the others are not real evidence.",
          hintLadder: [
            "Which source has no product to sell and real data?",
            "Who would benefit from saying the pesticide is safe?",
            "The peer-reviewed study is the stronger, less biased source."
          ]
        },
        {
          id: "g7.spring.ela.w7.d2.arena2",
          type: "short_answer",
          stem: "A classmate argues: 'This website says the lake is clean, so it must be safe to swim.' Explain what QUESTIONS your classmate should ask about the source before trusting it, and name one stronger source they could seek.",
          rubric: {
            level3: "Names at least two credibility questions (who made it, are they biased/expert, how recent, what method/data) AND suggests a specific stronger source (e.g., a health department or environmental agency water test).",
            level2: "Names one good question or a stronger source, but not both clearly.",
            level1: "Accepts the website or gives no real credibility reasoning."
          },
          exemplar: "They should ask: Who runs this website, and do they gain from calling the lake clean? How recent is the information, and did anyone actually test the water? A stronger source would be a recent water-quality test from the county health or environmental department.",
          hintLadder: [
            "What questions reveal whether a website is trustworthy?",
            "Think about author, bias, recency, and whether real testing happened.",
            "Then name an expert source that measures water safety."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Weigh It Out",
      prompt:
        "Hold your arms out like the two pans of a balance scale. Breathe in for 4 counts as you slowly tip left ('Source A'), hold for 2, then breathe out for 4 as you tip right ('Source B'). Repeat 4 times, imagining yourself weighing evidence carefully before you decide.",
      scienceTieIn: "Slow, symmetrical movement paired with steady breathing calms the nervous system and improves focus — the same patient attention you need to weigh conflicting sources instead of rushing to judgment.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the single most CREDIBLE source you could use for your environmental claim — and what makes it more trustworthy than a source that merely sounds convincing? Note where you would go to find it.",
      badge: { id: "g7-spring-evidence-evaluator", name: "Evidence Evaluator", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
