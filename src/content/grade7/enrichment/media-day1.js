// Grade 7 Media Literacy — Enrichment Day 1.
// Topic: evaluating sources & bias with lateral reading.

export const grade7MediaDay1 = {
  id: "g7.media.e.d1",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Evaluating sources with lateral reading",
  topicTag: "lateral-reading",
  estimatedMinutes: 20,
  standardsRefs: ["AASL.I.C", "ISTE.3b"],
  hook: "Fact-checkers don't stay on a suspicious page reading harder — they leave it. Today you learn lateral reading: open new tabs and ask the rest of the web who this source really is.",
  miniLesson: [
    "Vertical reading means staying on one page, studying its logo and 'About' text to decide if it's trustworthy. The problem: any site can write a polished 'About' page. Bias hides easily when you never leave.",
    "Lateral reading means opening new tabs and searching the source's name, its funders, and who else writes about it. You judge the source using outside evidence, not its own self-description.",
    "Watch for bias signals: who pays for the site, what it wants you to do next (buy, vote, share), and whether it names authors and links to primary evidence. A slick design proves nothing about accuracy."
  ],
  workedExample: {
    prompt:
      "You land on 'CleanAirNow.org' claiming a common vaccine 'poisons rivers.' The site looks professional. How do you evaluate it laterally?",
    steps: [
      "Don't stay and reread the page — open a new tab.",
      "Search the organization's name plus words like 'funding' or 'who runs.'",
      "Check what independent sources (news, fact-checkers, science bodies) say about the group and the claim.",
      "Trace the claim to a primary source; if only the site itself makes it, treat it as unverified and likely biased."
    ],
    answer: "Leave the page, search the source and its funders, cross-check with independent evidence."
  },
  items: [
    {
      id: "g7.media.e.d1.q1",
      type: "multiple_choice",
      stem: "What best describes LATERAL reading?",
      choices: [
        "Reading the page slowly, twice, to catch details.",
        "Studying the site's own 'About' page carefully.",
        "Judging the source only by how modern its design looks.",
        "Leaving the page to open new tabs and see what other sources say about it."
      ],
      answerIndex: 3,
      explanation: "Lateral reading means evaluating a source using outside evidence in other tabs — not the source's own self-description.",
      hintLadder: [
        "Does lateral reading keep you on the page or take you off it?",
        "Think about opening new tabs.",
        "You leave the page and ask the rest of the web."
      ],
      misconceptionsTargeted: ["trusts-slick-design"]
    },
    {
      id: "g7.media.e.d1.q2",
      type: "multiple_choice",
      stem: "A site says it is 'nonpartisan' but every article attacks one political party. Which is the STRONGEST reason to doubt the label?",
      choices: [
        "Its published content consistently favors one side, which is outside evidence of bias.",
        "The site loads slowly on your phone.",
        "The homepage uses the color blue.",
        "The articles are long."
      ],
      answerIndex: 0,
      explanation: "A self-applied label is a claim. The pattern of the actual content is real evidence, and one-sided coverage contradicts 'nonpartisan.'",
      hintLadder: [
        "A label is just what the site says about itself.",
        "What real evidence can contradict a label?",
        "Look at the actual pattern of its coverage."
      ],
      misconceptionsTargeted: ["accepts-self-label"]
    },
    {
      id: "g7.media.e.d1.q3",
      type: "multiple_choice",
      stem: "Which search would best reveal WHO funds a site you're evaluating?",
      choices: [
        "Searching the exact headline in quotation marks.",
        "Rereading the site's own mission statement.",
        "Searching the organization's name plus 'funding' or 'who owns.'",
        "Counting the ads on the page."
      ],
      answerIndex: 2,
      explanation: "Pairing the org name with funding terms surfaces independent reporting on who backs it — the follow-the-money check.",
      hintLadder: [
        "You want independent info about the money behind the site.",
        "Combine the org name with a money word.",
        "Search the name plus 'funding' or 'who owns.'"
      ]
    },
    {
      id: "g7.media.e.d1.q4",
      type: "numeric",
      stem: "You practice lateral reading on a viral claim. You open 5 tabs from reliable, independent sources. If 4 of the 5 rate the claim as false, what fraction of your reliable tabs support the claim? Answer as a decimal.",
      answer: 0.2,
      tolerance: 0.01,
      unit: "fraction",
      explanation: "5 tabs minus 4 that call it false leaves 1 that supports it; 1 out of 5 is 0.2 (20%). A large majority of independent sources disagreeing is a strong signal the claim is false.",
      hintLadder: [
        "How many tabs do NOT call it false?",
        "5 total minus 4 false leaves how many supporting?",
        "1 out of 5 as a decimal."
      ]
    },
    {
      id: "g7.media.e.d1.q5",
      type: "short_answer",
      stem: "You find a health claim on a site you've never heard of. Describe two specific lateral-reading moves you'd make before deciding whether to trust it.",
      rubric: {
        level3: "Two specific, verifiable off-page actions (e.g., search the org's name plus 'funding'; check whether a named news outlet or health body reports the same claim). Both clearly leave the original page.",
        level2: "Two actions, but at least one is vague or stays on the page.",
        level1: "Vague ('I'd think about it') or only on-page checks."
      },
      exemplar:
        "Move 1: open a new tab and search the site's name with 'who funds it' to see if independent reporting flags an agenda. Move 2: search the specific health claim and check whether a named medical organization or news outlet confirms it. If only the original site makes the claim, I don't trust it.",
      hintLadder: [
        "Both moves should take you OFF the page.",
        "One about the source's funding, one about the claim itself.",
        "Name what you'd type into the new tab."
      ]
    }
  ],
  reflectionPrompt: "Today you learned lateral reading. Name one site you normally trust — what would happen if you searched who funds it?",
  misconceptionBank: [
    {
      id: "trusts-slick-design",
      label: "Trusts sources by appearance",
      description: "Assumes a professional-looking site is accurate and unbiased.",
      coachMove: "Design is easy to fake. Leave the page and check what independent sources say about the site."
    },
    {
      id: "accepts-self-label",
      label: "Accepts a source's self-label",
      description: "Believes a site is 'nonpartisan' or 'unbiased' just because it says so.",
      coachMove: "A label is a claim, not evidence. Compare the label against the actual pattern of the content."
    }
  ]
};
