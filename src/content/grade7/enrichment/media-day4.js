// Grade 7 Media Literacy — Enrichment Day 4.
// Topic: misinformation tactics & fact-checking.

export const grade7MediaDay4 = {
  id: "g7.media.e.d4",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Misinformation tactics & fact-checking",
  topicTag: "fact-checking",
  estimatedMinutes: 21,
  standardsRefs: ["AASL.II.A.1", "ISTE.3b"],
  hook: "The trickiest misinformation is built from true pieces arranged to mislead. Today you learn cherry-picking and false context — and the verification moves that put a claim back together honestly.",
  miniLesson: [
    "Cherry-picking: showing only the data that supports a claim while hiding the rest. 'Temperatures fell this year' can be true for one year yet ignore a decades-long rise. Ask what got left out.",
    "False context: a real photo, quote, or statistic attached to the wrong event, place, or time. The content is genuine; the framing is the lie. This is one of the most common forms of misinformation.",
    "Verify by tracing to the primary source and reading it in full: find the original study, the whole quote, or the original photo with its real date and caption. Then check whether an independent fact-checker has already looked into the claim."
  ],
  workedExample: {
    prompt:
      "A post shows a graph 'proving' a program failed, using only the two worst months of the year. How do you fact-check it?",
    steps: [
      "Notice the range: only two months are shown — a cherry-picking red flag.",
      "Find the primary source and view the full time span, not the clipped window.",
      "Check whether the two months were unusual (a holiday dip, a one-time event).",
      "Compare against an independent fact-check or the full dataset before believing the 'failed' claim."
    ],
    answer: "Spot the clipped range, pull the full primary data, cross-check independently."
  },
  items: [
    {
      id: "g7.media.e.d4.q1",
      type: "multiple_choice",
      stem: "Which situation is an example of CHERRY-PICKING?",
      choices: [
        "Sharing a study's full results, including the parts you dislike.",
        "Linking to the complete dataset for readers to explore.",
        "Showing only the one week of data that supports your point and hiding the rest.",
        "Quoting an expert's entire paragraph in context."
      ],
      answerIndex: 2,
      explanation: "Cherry-picking means selecting only the evidence that fits your claim and omitting the data that would complicate it.",
      hintLadder: [
        "Which option HIDES some of the evidence?",
        "Look for the choice that shows only the convenient part.",
        "Showing only the supporting week and hiding the rest."
      ],
      misconceptionsTargeted: ["true-fact-means-honest"]
    },
    {
      id: "g7.media.e.d4.q2",
      type: "multiple_choice",
      stem: "A REAL photo of a flood from 2016 is posted as 'today's flooding downtown.' What misinformation tactic is this?",
      choices: [
        "A completely made-up image.",
        "False context — real content used with the wrong time or place.",
        "An outrage-only headline with no image.",
        "A spelling error in the caption."
      ],
      answerIndex: 1,
      explanation: "The photo is genuine, but attaching it to the wrong event and date makes it misleading. That's false context.",
      hintLadder: [
        "The photo itself is real — so what's the lie?",
        "Think about the wrong date or place.",
        "Real content, wrong context."
      ]
    },
    {
      id: "g7.media.e.d4.q3",
      type: "multiple_choice",
      stem: "A viral quote is attributed to a scientist. What's the BEST way to verify it?",
      choices: [
        "Count how many people reshared it.",
        "Trust it if the scientist is famous.",
        "See whether it uses formal-sounding words.",
        "Find the full original quote in the primary source and read the surrounding context."
      ],
      answerIndex: 3,
      explanation: "Verifying means going to the primary source and reading the full quote in context — reshares and tone prove nothing.",
      hintLadder: [
        "How do you confirm someone really said something?",
        "Go to where it was originally said.",
        "Find the full quote in the primary source."
      ]
    },
    {
      id: "g7.media.e.d4.q4",
      type: "numeric",
      stem: "You fact-check a claim by consulting 4 independent, reliable fact-checkers. 3 of them rate it FALSE. What percent of these fact-checkers say it's false? Answer as a whole-number percent.",
      answer: 75,
      tolerance: 1,
      unit: "percent",
      explanation: "3 out of 4 is 3 ÷ 4 = 0.75 = 75%. When a strong majority of independent fact-checkers agree it's false, that's solid reason to reject the claim.",
      hintLadder: [
        "Divide the number saying false by the total consulted.",
        "3 ÷ 4 gives a decimal.",
        "Convert 0.75 to a percent."
      ]
    },
    {
      id: "g7.media.e.d4.q5",
      type: "short_answer",
      stem: "You see a shocking statistic in a post with no link to its source. Describe two steps you'd take to fact-check it before sharing.",
      rubric: {
        level3: "Two specific, verifiable steps (e.g., search the statistic to find the original study/dataset and read it in full; check an independent fact-checker or reliable outlet for the same claim). Both concrete.",
        level2: "Two steps but one is vague.",
        level1: "Vague ('I'd double-check') with no real method."
      },
      exemplar:
        "Step 1: search the exact statistic to find the primary source, then read whether it's cherry-picked or missing context. Step 2: look for an independent fact-checker or reliable outlet that has examined the same claim. If I can't confirm it, I don't share.",
      hintLadder: [
        "One step finds the original source; one gets an independent check.",
        "Name what you'd search for the primary source.",
        "Say what you'd do if you can't confirm it."
      ]
    }
  ],
  reflectionPrompt: "Today you learned about cherry-picking and false context. Which one do you think fools people most often, and why?",
  misconceptionBank: [
    {
      id: "true-fact-means-honest",
      label: "Thinks true facts can't mislead",
      description: "Believes that if each piece of a claim is true, the whole claim must be honest.",
      coachMove: "True facts can be arranged to deceive. Ask what was left out and whether the context is right."
    }
  ]
};
