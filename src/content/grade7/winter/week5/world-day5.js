// Grade 7 World/Current Affairs — Winter Expedition, Week 5 (Data in the Cold),
// Day 5. Topic: reading data in the news — interpreting winter-weather
// statistics, spotting misleading graphs, AND comparing multiple sources
// reporting the same numbers. Grade-7 counterpart of the Grade 6 data-literacy
// mission, pitched up to source comparison and cross-checking claims.

export const winterG7WorldW5D5 = {
  id: "g7.winter.world.w5.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Comparing sources on winter data — misleading graphs and cross-checking claims",
  topicTag: "data-literacy-media",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D3.1.6-8", "CCSS.RI.7.9"],
  hook: "The news is full of winter numbers: 'Snowfall UP 300%!', 'Coldest week EVER!', dramatic charts and record claims. In Grade 6 you learned to check one graph. This year you go further: the SAME event gets reported by many sources, each framing the numbers differently. Today you become a source detective — comparing how different outlets present the same data, spotting who's spinning and who's straight, and deciding which account to trust.",
  miniLesson: [
    "The SAME facts can be framed very differently. 'Snowfall EXPLODES 300%!' and 'Snow rose from 2 cm to 8 cm' describe the identical change — comparing sources means matching their claims back to the shared underlying numbers.",
    "When two sources disagree, ask WHY: do they use different baselines, different time spans, or different scales? A source that shows its data, cites where it came from, and starts its axis at zero is usually more trustworthy than one that only shows a scary headline.",
    "Cross-checking is the core skill: find the ACTUAL numbers, see which sources agree with them, and notice which ones add context (source, time span, comparison) versus which ones strip context to alarm you. Agreement across independent, transparent sources builds trust."
  ],
  workedExample: {
    prompt: "Two sources report the same city's snow. Source A: 'SNOWFALL SKYROCKETS 300%!' Source B: 'The city got 8 cm this winter, up from 2 cm last winter — one of its snowier years, but still a light-snow city.' Which source is more trustworthy, and are they even contradicting each other?",
    steps: [
      "Match both to the underlying numbers: 2 cm last year to 8 cm this year.",
      "Check A's claim: a rise from 2 to 8 is indeed +6 cm, which is a 300% increase — so A is technically accurate but strips all context.",
      "Check B: it gives the raw numbers, the baseline, and context ('still a light-snow city'), so a reader can judge for themselves.",
      "They don't contradict — both fit 2→8 cm — but B is more trustworthy because it shows the data and context instead of only an alarming percentage."
    ],
    answer: "They agree on the facts (2→8 cm), but Source B is more trustworthy: it gives the raw numbers, the baseline, and context, while Source A keeps only the scary percentage."
  },
  items: [
    {
      id: "g7.winter.world.w5.d5.q1",
      type: "multiple_choice",
      stem: "Two news sites report the same cold snap. One shows a chart with the y-axis starting at zero; the other's chart starts at 40 cm. Which is more likely to give you an HONEST sense of the change, and why?",
      choices: [
        "The one starting at 40 cm, because it fills the chart",
        "The one starting at zero, because a full baseline shows the true relative size of the change",
        "They are equally honest — the axis never matters",
        "Neither, because charts are always misleading"
      ],
      answerIndex: 1,
      explanation: "An axis that starts at zero keeps the shared base of the bars, so their heights reflect the real relative sizes. A cut-off axis (starting at 40) stretches small differences into dramatic-looking gaps.",
      hintLadder: [
        "Where does each y-axis begin?",
        "Which start point exaggerates small differences?",
        "A zero baseline gives the honest relative size."
      ],
      misconceptionsTargeted: ["taller-bar-means-huge-difference"]
    },
    {
      id: "g7.winter.world.w5.d5.q2",
      type: "multiple_choice",
      stem: "Source A says 'Cold days TRIPLED this winter!' Source B says 'Cold days went from 4 to 12.' A reader wants to know if the sources CONTRADICT each other. What's the best conclusion?",
      choices: [
        "They contradict — one says tripled, the other gives numbers",
        "They agree: 4 to 12 IS tripling, but B gives the raw numbers so you can judge the real size",
        "Source B must be wrong because it has no percentage",
        "You can't compare them at all"
      ],
      answerIndex: 1,
      explanation: "Going from 4 to 12 is exactly tripling, so both sources describe the same change. B is just more transparent, giving the actual counts instead of only the dramatic multiplier.",
      hintLadder: [
        "Does 4 to 12 match the word 'tripled'?",
        "4 × 3 = 12, so the numbers fit the claim.",
        "They agree on the facts; B just shows more of them."
      ],
      misconceptionsTargeted: ["percent-without-baseline"]
    },
    {
      id: "g7.winter.world.w5.d5.q3",
      type: "numeric",
      stem: "Source A's headline shouts 'Snowfall UP 300%!' Source B reports last winter had 5 cm of snow. If A's 300% increase is correct, how many centimeters of snow fell THIS winter?",
      answer: 20,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "A 300% increase means the amount grew by 300% of the baseline, ON TOP of the baseline.",
        "300% of 5 cm is 3 × 5 = 15 cm of increase.",
        "This winter = 5 + 15 = 20 cm."
      ],
      explanation: "A 300% increase adds 3 × 5 = 15 cm to the 5 cm baseline, giving 5 + 15 = 20 cm this winter.",
      misconceptionsTargeted: ["percent-without-baseline"]
    },
    {
      id: "g7.winter.world.w5.d5.q4",
      type: "short_answer",
      stem: "You find THREE reports on the same snowstorm. Two independent, named weather services list 32 cm; one viral social post claims '2 meters of snow!' with no source. Explain how you'd decide which figure to trust, and why comparing multiple sources helps.",
      rubric: {
        level3: "Explains that two INDEPENDENT, named sources agreeing (32 cm) is strong corroboration, that the unsourced viral 2 m claim is an outlier lacking evidence, AND that cross-checking multiple sources exposes which figure is reliable — trusting the corroborated, sourced number.",
        level2: "Leans toward the two agreeing sources but is vague about corroboration or why the unsourced claim is weak.",
        level1: "Trusts the viral claim or shows no cross-checking reasoning."
      },
      exemplar: "I'd trust the 32 cm figure. Two independent, named weather services reporting the same number is strong corroboration — it's unlikely both are wrong in the same way. The viral post claims 2 meters (200 cm) with no source, so it's an unbacked outlier that doesn't match the others. Comparing multiple sources lets me spot which figure is confirmed and which is just a lone dramatic claim, so I go with the sourced number that two independent outlets agree on.",
      hintLadder: [
        "Which figures come from named, independent sources?",
        "What does it mean when two independent sources agree?",
        "Explain why the unsourced outlier is the weakest to trust."
      ]
    },
    {
      id: "g7.winter.world.w5.d5.q5",
      type: "short_answer",
      stem: "You're a young reporter comparing two articles on the same winter. Article X gives raw numbers, its source, and a fair chart; Article Y gives only a scary headline and a cut-off-axis chart. List TWO specific things that make Article X more trustworthy, and explain why each matters when comparing sources.",
      rubric: {
        level3: "Names two solid trust factors present in X (e.g., cites a source, gives raw numbers/baseline, uses a zero-based axis, provides time-span/context) AND explains for each why it makes X more reliable than Y when comparing the two.",
        level2: "Names two factors but the 'why it matters' is thin for one of them.",
        level1: "Names only one factor or gives no reasoning."
      },
      exemplar: "First, Article X cites its source and gives the raw numbers, so I can check the data myself and see the baseline — that lets me judge the real size of the change instead of trusting a headline. Second, X uses a fair, zero-based chart, while Y's cut-off axis exaggerates small differences; a fair axis matters because it shows the true relative change. Together these make X's account verifiable and honest, while Y is built to alarm without letting me check anything.",
      hintLadder: [
        "Think source citation, raw numbers/baseline, axis, and context.",
        "Pick two things Article X does that Article Y doesn't.",
        "For each, say how it makes X easier to verify or harder to spin."
      ]
    }
  ],
  reflectionPrompt: "Next time two sources report the same weather event with very different drama, what's the FIRST thing you'll do to figure out which one to trust?",
  misconceptionBank: [
    {
      id: "taller-bar-means-huge-difference",
      label: "Trusts bar height without checking the axis",
      description: "Assumes a bar that looks twice as tall means twice the amount, ignoring where the y-axis starts — and doesn't cross-check against a fairer source.",
      coachMove: "Redraw the chart mentally with the axis at zero, and compare against a source that shows raw numbers: 'If both bars sat on 0, would they still look so different?'"
    },
    {
      id: "percent-without-baseline",
      label: "Believes a big percent means a big amount",
      description: "Takes '300% more' as huge without asking what the original (baseline) amount was or checking another source for the raw numbers.",
      coachMove: "Ask 'percent of WHAT?' and find a source giving the baseline: 300% more than 5 cm is only 20 cm total. Always trace the percentage back to real numbers."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Source Do You Trust?",
      prompt:
        "Two reports on the same blizzard: (A) a viral post — 'SNOWPOCALYPSE! Streets BURIED!' with no numbers or source; (B) a named weather service — 'Official total: 34 cm, the city's 3rd-snowiest storm on record.' Which one lets you actually check the claim, and which is built purely to alarm?",
      answer:
        "(B) lets you check it — it gives an exact total (34 cm), a source (a named weather service), and context (3rd-snowiest on record). (A) has no numbers and no source, so there's nothing to verify — it's built to alarm. When sources differ, trust the one you can cross-check.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Compare Two Reports on One Storm",
      challenge:
        "Take one winter event (real or invented) and write TWO news reports of it: a SENSATIONAL one (scary headline, cut-off-axis chart, no source) and a TRUSTWORTHY one (raw numbers, cited source, fair zero-based chart). Then write a 'source-check' note listing what makes the trustworthy version more reliable.",
      steps: [
        "Pick one event and its real numbers, like 'snow went from 6 cm last year to 10 cm this year.'",
        "Write the SENSATIONAL report: dramatic headline, a chart with a cut-off axis, no source named.",
        "Write the TRUSTWORTHY report: raw numbers, a fair zero-based chart, and a cited source.",
        "Add a source-check note naming 2–3 things a reader could use to tell which report to trust."
      ],
      deliverable: "Two reports on the same event (one sensational, one trustworthy) plus a source-check note listing the signals that reveal which is more reliable.",
      choiceBoard: [
        "Write both reports and the source-check note on paper or in a doc.",
        "Build both charts in a spreadsheet by changing the axis minimum, then attach each to its report.",
        "Make a side-by-side 'spot the spin' slide comparing the two reports with the trust signals labeled."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Source Detective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.world.w5.d5.arena1",
          type: "numeric",
          stem: "Source A: 'Cold days QUADRUPLED!' Source B reports last winter had 3 cold days. If A's claim (a 4× increase, i.e. quadrupled) is accurate, how many cold days were there THIS winter?",
          answer: 12,
          tolerance: 0,
          unit: "days",
          hintLadder: [
            "Quadrupled means 4 times the original amount.",
            "4 × 3 = 12.",
            "So this winter had 12 cold days."
          ],
          explanation: "Quadrupled means 4× the baseline: 4 × 3 = 12 cold days this winter."
        },
        {
          id: "g7.winter.world.w5.d5.arena2",
          type: "short_answer",
          stem: "A viral post shows a line graph of one week's temperatures plunging steeply, captioned 'PROOF the planet is cooling,' and cites no source. Two named climate agencies, using decades of data, report a long-term warming trend. Give TWO reasons a source detective would trust the agencies over the viral post.",
          rubric: {
            level3: "Gives two solid reasons, such as: (1) the agencies use long-term data (decades) while the post uses one week of weather/noise; (2) two independent named agencies AGREEING is strong corroboration versus one unsourced post; and/or (3) the post's steep look may come from a cut-off axis — with brief explanation.",
            level2: "Gives one strong reason plus a weak or partial second one.",
            level1: "Trusts the viral post or gives no valid reason."
          },
          exemplar: "First, the agencies use decades of data to show a long-term trend, while the viral post uses one week — that's weather/noise, not climate, and it can't overturn a decades-long trend. Second, two independent, named agencies agreeing is strong corroboration you can check, whereas the post cites no source and its steep drop may just be a zoomed-in, cut-off axis exaggerating a small change. Multiple transparent sources beat one dramatic, unsourced post.",
          hintLadder: [
            "How much data does each side use — one week or decades?",
            "What does it mean that two named agencies agree, while the post has no source?",
            "Could the post's steep line come from a cut-off axis?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Cross-Check Your Balance",
      prompt:
        "Stand tall and 'cross-check' your balance: plant your feet, then slowly shift weight left, then right, then center — checking against each side like comparing sources. Take one slow breath and say 'Check more than one.' Feel steadiest at the balanced center.",
      scienceTieIn:
        "Testing your balance against multiple points steadies you, and it mirrors today's core skill: checking a claim against multiple independent sources gives you a steadier, more reliable sense of what's true.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write about a time you saw the same event reported two very different ways. Now that you're a source detective, how would you cross-check to decide which version to believe?",
      badge: { id: "g7-winter-source-detective", name: "Winter Source Detective", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
