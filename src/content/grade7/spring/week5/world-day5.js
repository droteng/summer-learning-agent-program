// Grade 7 World/Current Affairs — Spring Expedition, Week 5 (Measuring Change),
// Day 5. Grade-7 counterpart of springG6WorldW5D5 (reading data in the news),
// pitched one level up: from spotting a single misleading graph to COMPARING
// SOURCES — evaluating how two outlets present the same data, judging
// credibility, and separating correlation from causation.

export const springG7WorldW5D5 = {
  id: "g7.spring.world.w5.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Comparing sources and evaluating data claims",
  topicTag: "reading-data-news",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D3.5.6-8", "CCSS.RI.7.9"],
  hook: "Last year you learned to spot ONE misleading graph. This year the challenge is harder: two trustworthy-looking sources report the SAME spring data — melting ice, pollen counts, bird returns — and reach different conclusions. Which do you believe? Today you compare sources side by side, weigh their credibility, and learn the trap of confusing correlation with causation.",
  miniLesson: [
    "Compare sources, don't just read one. When two sources describe the same event, line up what each measured, over what time span, and from what data. Differences often come from CHOICES — which years to show, whether the y-axis starts at zero, which comparison to highlight — not from the facts themselves.",
    "Weigh credibility. Ask who made each source and why: Is there a named author and a primary data source (a study, an agency)? Is it recent? Does it separate evidence from opinion? A source that cites its data and shows its methods is more trustworthy than one that just asserts a dramatic claim.",
    "Correlation is not causation. Two things changing together (warmer springs AND earlier bird arrivals) does not prove one CAUSED the other — a third factor could drive both, or it could be coincidence. Strong claims need evidence of a mechanism, not just two lines that move together."
  ],
  workedExample: {
    prompt: "Source A says 'Spring temperatures rose 2°C over 40 years — a clear warming trend,' citing a national weather agency. Source B, an anonymous blog, says 'Temperatures spiked 2°C in one unusually warm week — the planet is boiling!' Both mention '2°C.' Which is the stronger source, and why?",
    steps: [
      "Line up what each measured: Source A shows 40 YEARS; Source B shows one WEEK.",
      "Check credibility: Source A names a weather agency (primary data); Source B is anonymous with no data source.",
      "Judge the time span: a 40-year trend can show real climate change; one week is weather, not climate.",
      "Source A is stronger — it has a credible source and a long enough span; Source B uses a scary framing over a meaningless span."
    ],
    answer: "Source A — it cites a credible agency and a 40-year span, while Source B is anonymous and uses one week (weather, not a trend)."
  },
  items: [
    {
      id: "g7.spring.world.w5.d5.q1",
      type: "multiple_choice",
      stem: "Two articles report the SAME sea-ice data but reach different conclusions. What is the BEST first step to figure out which to trust?",
      choices: [
        "Believe whichever one has a scarier headline",
        "Compare what each measured, over what time span, and what data source each cites",
        "Pick the one with more pictures",
        "Trust the one that was shared more times"
      ],
      answerIndex: 1,
      explanation: "Comparing the measurement, time span, and cited data source of each article reveals whether the difference comes from the facts or from how each outlet chose to present them.",
      hintLadder: [
        "You have two sources on the same data — what should you line up?",
        "Think about measurement, time span, and where the data came from.",
        "Compare the sources' choices, not their style or popularity."
      ]
    },
    {
      id: "g7.spring.world.w5.d5.q2",
      type: "multiple_choice",
      stem: "Source A cites a named climate agency and shows 30 years of data. Source B is an anonymous post showing 5 days and no data source. Both claim a spring temperature 'trend.' Which is more credible, and why?",
      choices: [
        "Source B, because 5 days is more recent",
        "Source A, because it names a data source and shows a long enough span to reveal a trend",
        "They're equally credible since both mention a trend",
        "Source B, because anonymous posts are more honest"
      ],
      answerIndex: 1,
      explanation: "Source A is more credible: it cites a primary data source and uses 30 years, long enough to show a real trend. Source B is anonymous and 5 days is weather, not a trend.",
      hintLadder: [
        "Which source can you actually check the data for?",
        "Is 5 days long enough to show a climate trend?",
        "Named source + long span beats anonymous + tiny span."
      ],
      misconceptionsTargeted: ["scarier-source-more-trustworthy"]
    },
    {
      id: "g7.spring.world.w5.d5.q3",
      type: "numeric",
      stem: "Source A displays spring temperature with a y-axis starting at 0°C; Source B displays the SAME two values, 12°C and 14°C, with a y-axis starting at 11°C. What is the ACTUAL temperature change both sources are showing, in °C?",
      answer: 2,
      tolerance: 0,
      unit: "°C",
      hintLadder: [
        "Use the real numbers, not how tall the bars look.",
        "Subtract the smaller from the larger.",
        "14 − 12 = 2°C."
      ],
      explanation: "Both sources show the same real change: 14 − 12 = 2°C. Source B's truncated y-axis just makes it LOOK bigger."
    },
    {
      id: "g7.spring.world.w5.d5.q4",
      type: "multiple_choice",
      stem: "A news graph shows that as spring temperatures rose, ice-cream sales AND drowning rates both went up, and claims 'ice cream causes drowning.' What's the flaw in this reasoning?",
      choices: [
        "Nothing — if two things rise together, one causes the other",
        "This confuses correlation with causation; a third factor (warm weather → more swimming) likely drives both",
        "The graph should use circles instead of lines",
        "Ice cream and drowning can't be measured"
      ],
      answerIndex: 1,
      explanation: "Two things rising together (correlation) doesn't prove one causes the other. Warm weather is a lurking third factor that raises both ice-cream sales and swimming (hence drownings). Correlation is not causation.",
      hintLadder: [
        "Does two things moving together prove one caused the other?",
        "What third thing might rise in warm weather and explain both?",
        "Name the correlation-vs-causation trap."
      ],
      misconceptionsTargeted: ["correlation-equals-causation"]
    },
    {
      id: "g7.spring.world.w5.d5.q5",
      type: "short_answer",
      stem: "Two sources report on the same spring pollen data and disagree. List TWO specific things you would compare between the sources to decide which is more trustworthy, and explain why each comparison matters.",
      rubric: {
        level3: "Names two solid, source-comparison criteria (e.g., who authored it / what primary data each cites; the time span or years shown; whether the y-axis starts at zero; evidence vs. opinion) AND explains how each helps you judge which source to trust.",
        level2: "Names two criteria but the reasoning for one is weak, or one is off-target (e.g., 'nicer design').",
        level1: "Vague, or lists criteria without explaining why they matter for trust."
      },
      exemplar: "First, I'd compare the data source each one cites — a source that links to a named agency's pollen data can be checked, while one that cites nothing could be made up. Second, I'd compare the time span each shows — if one uses many years and the other cherry-picks a single unusual week, the longer span is far better for judging a real trend. Comparing these shows whether the disagreement comes from the facts or from each outlet's choices.",
      hintLadder: [
        "What can you compare about WHERE each source's data comes from?",
        "What can you compare about the TIME SPAN or axis each uses?",
        "For each, explain how it helps you decide which to trust."
      ]
    }
  ],
  reflectionPrompt: "Next time two sources you follow disagree about the same news, what is the FIRST thing you'll compare between them before deciding who's right?",
  misconceptionBank: [
    {
      id: "scarier-source-more-trustworthy",
      label: "Trusts the more dramatic source",
      description: "Believes the source with the scariest headline or steepest-looking graph is the more truthful one, without checking credibility or span.",
      coachMove: "Judge sources on evidence, not drama: who authored it, what primary data it cites, and what time span it shows. The calmer, better-sourced piece is often the reliable one."
    },
    {
      id: "correlation-equals-causation",
      label: "Assumes correlation proves causation",
      description: "Concludes that because two things changed together, one must have caused the other, ignoring lurking third factors or coincidence.",
      coachMove: "Ask 'could a third factor cause both?' and 'is there a real mechanism?' Two lines moving together is a clue to investigate, not proof of cause."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Source Wins Your Trust?",
      prompt:
        "Two sites report the same spring bird-migration data. Site A: a named wildlife agency, 25 years of records, a plain graph. Site B: an anonymous account, one dramatic week, a screaming headline. Both are equally 'confident.' Which would you rather cite in a report, and what makes it stronger?",
      answer:
        "Site A. It has a named, checkable data source and a 25-year span long enough to show a real trend, while Site B is anonymous and uses a single week (weather, not a trend) dressed up with a scary headline. Confidence isn't credibility — sourcing and span are.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Source Face-Off",
      challenge:
        "Take ONE spring environmental change (like 'average spring temperature rose 2°C over 30 years') and write TWO short news blurbs about it — one credible and fair, one that uses a real trick (anonymous source, cherry-picked week, truncated axis, or correlation-as-causation) — then annotate exactly how the weak one misleads.",
      steps: [
        "Choose one real or invented spring change with actual numbers.",
        "Write the CREDIBLE blurb: name a data source, use a fair time span, and describe the change honestly.",
        "Write the WEAK blurb using one clear trick (tiny span, no source, truncated axis, or 'this caused that').",
        "Annotate the weak blurb: label the trick and write one sentence on how a careful reader would catch it."
      ],
      deliverable: "Two news blurbs on the same data — one credible, one flawed — with the flaw clearly labeled and explained.",
      choiceBoard: [
        "Write the two blurbs side by side and highlight the trick in the weak one.",
        "Make a 'trust checklist' and score both blurbs against it.",
        "Record a 60-second 'fact-check' comparing the two sources out loud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Source Comparison Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.world.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A viral post reads: 'Bee sightings AND flower blooms both rose this spring — so more bees CAUSED more flowers.' Which response is the sharpest?",
          choices: [
            "Agree — two rising numbers prove cause and effect",
            "Point out this is correlation, not causation: warmer spring weather likely boosted both bees and blooms",
            "Reject it because bees and flowers are unrelated",
            "Say graphs can't show bees"
          ],
          answerIndex: 1,
          explanation: "The two rising together is a correlation; warm spring weather is a likely third factor driving both bees and blooms. You'd need evidence of a real mechanism before claiming one caused the other.",
          hintLadder: [
            "Does rising together prove one caused the other?",
            "What weather factor could raise BOTH bees and blooms?",
            "Name the correlation-vs-causation trap."
          ]
        },
        {
          id: "g7.spring.world.w5.d5.arena2",
          type: "short_answer",
          stem: "Two sources report the same glacier-melt data. Source A cites a research institute and 40 years of measurements; Source B is an anonymous post showing 2 weeks with a y-axis starting at 90%. Explain which source you'd trust and give TWO specific reasons based on comparing them.",
          rubric: {
            level3: "Chooses Source A and gives two solid comparison-based reasons (named/checkable data source vs. anonymous; 40-year span vs. 2 weeks; note B's truncated axis exaggerates), tying each to credibility.",
            level2: "Chooses A with one strong reason and one weak or vague reason.",
            level1: "No clear choice, or reasons not based on comparing the two sources."
          },
          exemplar: "I'd trust Source A. First, it cites a named research institute whose data can be checked, while Source B is anonymous with no verifiable source. Second, Source A shows 40 years — long enough to reveal a real melt trend — while Source B shows just 2 weeks and starts its y-axis at 90%, a truncated axis that exaggerates a tiny change. Comparing them, A has both credibility and a fair span; B relies on anonymity and visual tricks.",
          hintLadder: [
            "Which source's data could you actually verify?",
            "Compare the time spans — which reveals a real trend?",
            "What does Source B's y-axis starting at 90% do to the picture?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Two-Source Reset",
      prompt:
        "Comparing conflicting sources is tiring. Stand up, look left and hold one 'source' in your left hand, look right and hold the other in your right hand, then slowly bring both hands together at center as you take a slow breath and say 'I compare before I decide.' Roll your shoulders back 5 times.",
      scienceTieIn:
        "Alternating your gaze left and right and then centering, paired with a slow breath, relaxes eye muscles and lowers stress — so you weigh two sources calmly instead of reacting to whichever one is loudest.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You're now a source detective. Describe a time two sources told you different things about the same event — a game, the weather, the news. How did you (or could you) decide which to believe?",
      badge: { id: "g7-spring-source-detective", name: "Source Detective", emoji: "🕵️" },
      estimatedMinutes: 7
    }
  }
};
