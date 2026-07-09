// Grade 7 World/Current Affairs — Summer Program, Week 6 (World Affairs for
// Kids), Day 2. Topic: source credibility, bias & comparing sources (lateral
// reading). Project: a kid-friendly explainer about a world issue.

export const summerG7WorldW6D2 = {
  id: "g7.summer.world.w6.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 2,
  subject: "World/Current Affairs",
  topic: "Source credibility, bias & lateral reading",
  topicTag: "source-credibility",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D3.1", "CCSS.ELA-LITERACY.RI.7.9"],
  hook: "Before your explainer can be fair, your sources have to be trustworthy. Today you learn what real fact-checkers do: instead of staying on one page, they read LATERALLY — comparing what several sources say to judge who to trust.",
  miniLesson: [
    "Credibility is how trustworthy a source is. Check three things: expertise (does the author actually know the topic?), evidence (does it cite data or name its sources?), and purpose (is it here to inform you or to sell/persuade you?).",
    "Bias is a leaning toward one side. A biased source can still contain true facts, but it may leave out the OTHER side. The fix is not to throw it out — it is to compare it against sources that lean differently.",
    "Lateral reading means opening several sources on the same claim and comparing them, instead of trusting one page because it looks polished. If independent sources agree, a claim is stronger; if only one source makes a big claim, be cautious."
  ],
  workedExample: {
    prompt: "You find a slick website claiming 'Scientists prove chocolate cures colds!' How do you check it by reading laterally?",
    steps: [
      "Do not judge by the design — polished pages can still be wrong. Note the claim.",
      "Open two or three other sources (a health organization, a news outlet, a science site) and search the same claim.",
      "Check whether independent, expert sources report the same thing. Here, they do not — reputable sites say no such cure exists.",
      "Since only the one flashy site makes the claim and credible sources disagree, treat it as unreliable and leave it out of your explainer."
    ],
    answer: "By comparing the claim across several credible sources (lateral reading), you find no expert backing — so the flashy site is not trustworthy, no matter how good it looks."
  },
  items: [
    {
      id: "g7.summer.world.w6.d2.q1",
      type: "multiple_choice",
      stem: "What does 'lateral reading' mean?",
      choices: [
        "Reading a webpage from top to bottom very carefully",
        "Reading a book sideways to save time",
        "Reading only the headline and moving on",
        "Opening and comparing several sources about the same claim to judge its trustworthiness"
      ],
      answerIndex: 3,
      explanation: "Lateral reading means leaving one page to check what OTHER credible sources say about the same claim.",
      hintLadder: [
        "It is about what you do ACROSS sources, not within one page.",
        "Fact-checkers open new tabs to compare.",
        "It means comparing several sources on the same claim."
      ]
    },
    {
      id: "g7.summer.world.w6.d2.q2",
      type: "multiple_choice",
      stem: "A source is clearly biased toward one side of an issue but its facts check out. For a fair explainer, what is the BEST move?",
      choices: [
        "Throw the source out completely because it is biased",
        "Use its accurate facts but balance it with sources that lean the other way",
        "Use it as your only source since its facts are correct",
        "Copy it word for word without checking anything else"
      ],
      answerIndex: 1,
      explanation: "A biased source can still hold true facts; the fix is to compare it with sources that lean differently, not to trust it alone or discard it entirely.",
      hintLadder: [
        "Does 'biased' automatically mean 'false'?",
        "What is a biased source most likely to leave OUT?",
        "Balance it against sources that lean the other way."
      ],
      misconceptionsTargeted: ["biased-means-false"]
    },
    {
      id: "g7.summer.world.w6.d2.q3",
      type: "multiple_choice",
      stem: "Which detail gives you the MOST reason to trust a source about a world issue?",
      choices: [
        "The article names its data and links to expert organizations you can check",
        "The website has bright colors and lots of ads",
        "The headline is written in all capital letters",
        "It was shared by a lot of anonymous accounts"
      ],
      answerIndex: 0,
      explanation: "Naming evidence and linking to checkable expert sources shows credibility; design, capital letters, and share counts do not.",
      hintLadder: [
        "Design and popularity do not prove accuracy.",
        "What lets YOU verify the claims yourself?",
        "Named data and checkable expert sources build trust."
      ]
    },
    {
      id: "g7.summer.world.w6.d2.q4",
      type: "short_answer",
      stem: "You are researching a world issue and find two sources that disagree on a key fact. Describe the steps you would take to decide which one (if either) to trust.",
      rubric: {
        level3: "Describes reading laterally — checking each source's expertise, evidence, and purpose, and comparing against additional independent credible sources — before deciding which to trust or whether to seek more.",
        level2: "Mentions comparing sources or checking credibility but the steps are partial or vague.",
        level1: "Picks one arbitrarily or gives no real checking process."
      },
      exemplar: "I'd read laterally: for each source I'd check who wrote it, whether it cites evidence, and whether its purpose is to inform or persuade. Then I'd open a third and fourth independent source on the same fact. Whichever claim credible, expert sources back up is the one I'd trust — and if they all disagree, I'd say the fact is still uncertain.",
      hintLadder: [
        "Do not just pick the one you like better.",
        "What three things tell you a source is credible?",
        "Compare both against MORE independent sources."
      ]
    },
    {
      id: "g7.summer.world.w6.d2.q5",
      type: "short_answer",
      stem: "Explain the difference between a source being BIASED and a source being UNRELIABLE, and why a fair explainer treats them differently.",
      rubric: {
        level3: "Distinguishes clearly — biased means leaning one way (can still be factual); unreliable means the facts themselves are wrong or unchecked — AND explains that biased sources can be used with balance while unreliable ones should be left out.",
        level2: "Gives a partial distinction or explains only how to handle one of the two.",
        level1: "Treats the two as the same or gives no clear distinction."
      },
      exemplar: "A biased source leans toward one side but its facts can still be true, so you can use it if you balance it with the other side. An unreliable source gets its facts wrong or does not check them, so its information can't be trusted at all and should be left out of the explainer.",
      hintLadder: [
        "Can a biased source still have correct facts?",
        "What is wrong with an UNRELIABLE source specifically?",
        "Say how you'd handle each one differently."
      ]
    }
  ],
  reflectionPrompt: "Think of the last thing you shared or almost shared online. Would it survive lateral reading — do other credible sources back it up?",
  misconceptionBank: [
    {
      id: "biased-means-false",
      label: "Assumes a biased source is automatically false",
      description: "Believes that if a source leans toward one side, everything it says must be untrue and should be discarded.",
      coachMove: "Separate LEAN from ACCURACY: a source can lean one way and still report true facts. The move is to balance it with other perspectives, not to assume it's lying."
    },
    {
      id: "polished-means-true",
      label: "Judges credibility by how a source looks",
      description: "Trusts a source because the website is slick or the writing is confident, rather than checking evidence and other sources.",
      coachMove: "Read laterally: leave the page and see whether independent, credible sources back the claim. Looks are not evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Source Wins Your Trust?",
      prompt:
        "Would you rather rely on (A) a flashy website with big fonts and no author listed, or (B) a plain-looking article by a named expert that links to its data? Say which you'd trust for your explainer and give the reason.",
      answer: "(B) wins. A named expert who links to checkable data is far more credible than a flashy but anonymous page. Looks do not prove accuracy — evidence and checkable sources do.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Source Credibility Scorecard",
      challenge:
        "Build a 'source scorecard' you can use for your explainer. Design a checklist that rates any source on Expertise, Evidence, and Purpose, then test it on two real or invented sources about your world issue.",
      steps: [
        "Make a scorecard with three columns: Expertise, Evidence, Purpose (inform vs. persuade).",
        "Add a simple rating for each (for example, ✓ / ? / ✗).",
        "Score two sources about your issue using the card.",
        "Write one sentence on which source you'd trust more and WHY, using lateral reading."
      ],
      deliverable: "A completed source scorecard rating two sources on expertise, evidence, and purpose, plus a one-sentence verdict.",
      choiceBoard: [
        "Design the scorecard as a labeled table or infographic.",
        "Make a 'red flag / green flag' poster listing trust signals and warning signs.",
        "Record a 30-second 'fact-checker' clip scoring a source out loud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Credibility Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.world.w6.d2.arena1",
          type: "multiple_choice",
          stem: "A post claims a huge world statistic but cites no source, and no other outlet reports it. Using lateral reading, what should you conclude?",
          choices: [
            "It must be true because it sounds dramatic",
            "Share it right away so others can decide",
            "Treat the claim as unverified and don't use it until credible sources confirm it",
            "Trust it because it was posted recently"
          ],
          answerIndex: 2,
          explanation: "A big claim with no source and no independent confirmation fails lateral reading, so it stays out of your explainer until credible sources back it up.",
          hintLadder: [
            "Does a dramatic claim prove itself?",
            "What did lateral reading find — does anyone else report it?",
            "No source + no confirmation = treat as unverified."
          ]
        },
        {
          id: "g7.summer.world.w6.d2.arena2",
          type: "short_answer",
          stem: "You have three sources on a world issue: a government agency report, a company that sells a product tied to the issue, and a news article that quotes several experts. Rank how much you'd trust each for your explainer and explain your reasoning using purpose and evidence.",
          rubric: {
            level3: "Ranks the sources with reasoning tied to purpose and evidence — noting the company has a purpose to persuade/sell (most caution), while the agency report and expert-quoting news article are more credible, and explains you'd still cross-check them.",
            level2: "Ranks them with partial reasoning but misses purpose or evidence for at least one.",
            level1: "Ranks with little or no reasoning, or ignores the selling motive."
          },
          exemplar: "I'd trust the news article quoting several experts and the government agency report most, because their purpose is to inform and they cite evidence. I'd be most cautious with the company, since it profits from the issue, so its purpose may be to persuade. I'd still cross-check all three against each other before using them.",
          hintLadder: [
            "Which source has a reason to PERSUADE or sell?",
            "Which sources are built to INFORM and cite evidence?",
            "Rank them and explain using purpose and evidence."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Pause Before You Trust",
      prompt:
        "Sit tall and take three slow breaths. On each inhale think 'Who says so?' and on each exhale think 'Check it.' Then gently roll your shoulders back three times and relax.",
      scienceTieIn: "A short mindful pause calms the impulse to react instantly and share — giving your thinking brain a moment to catch up, which is exactly the habit lateral reading needs.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of the last thing you shared or almost shared online. Would it survive lateral reading — do other credible sources back it up? What would you check next time before sharing?",
      badge: { id: "g7-lateral-reader", name: "Lateral Reader", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
