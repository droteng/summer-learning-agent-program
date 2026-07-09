// Grade 6 Media Literacy — Enrichment Day 4.
// Topic: misinformation patterns.

export const grade6MediaDay4 = {
  id: "g6.media.e.d4",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 4,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Spotting misinformation patterns",
  topicTag: "misinformation",
  estimatedMinutes: 18,
  standardsRefs: ["AASL.II.A.1"],
  hook: "Misinformation has fingerprints. Today you learn four of them so the next time you see one, you recognize it on sight.",
  miniLesson: [
    "Outrage hook: the headline is designed to make you furious before you read. Strong feeling skips careful thinking.",
    "Cherry-picked stat: one shocking number with no context. 'Crime up 200%!' from 1 to 3 incidents is technically true but misleading.",
    "Out-of-context image: a real photo from a different event, presented as proof of the current one. Reverse image search catches these.",
    "Source ladder break: 'Friend of mine said her cousin's doctor said…' Each step away from the original adds error."
  ],
  workedExample: {
    prompt:
      "Headline: 'New study: parents BANNED from schools nationwide!' Walk through the misinformation patterns.",
    steps: [
      "All-caps + 'BANNED' triggers outrage hook.",
      "'Nationwide' is a strong claim — what's the actual evidence?",
      "Check the original study — usually it's a single district's policy, not a nationwide ban.",
      "Verdict: pattern-matches misinformation. Find the original source before reacting."
    ],
    answer: "Outrage hook + overgeneralization → find the original source."
  },
  items: [
    {
      id: "g6.media.e.d4.q1",
      type: "multiple_choice",
      stem: "Which headline shows the OUTRAGE HOOK pattern?",
      choices: [
        "City updates park hours starting Monday.",
        "Park hours change — see new schedule.",
        "OUTRAGEOUS! Parents FURIOUS over new park hours!",
        "New park hours posted on city website."
      ],
      answerIndex: 2,
      explanation: "OUTRAGEOUS + ALL CAPS + 'FURIOUS' is engineered to spike feelings. The other three are neutral.",
      hintLadder: [
        "Which option uses strong feeling words and all caps?",
        "Designed to make you angry first.",
        "OUTRAGEOUS / FURIOUS."
      ]
    },
    {
      id: "g6.media.e.d4.q2",
      type: "multiple_choice",
      stem:
        "A claim: 'Crime up 300% in our town!' What's the missing context that could change everything?",
      choices: [
        "The color of the town flag.",
        "What month it is.",
        "How tall the mayor is.",
        "The starting number of incidents."
      ],
      answerIndex: 3,
      explanation: "300% of 1 incident is 4. 300% of 1,000 is 4,000. Same multiplier, very different stories.",
      hintLadder: [
        "What does a percentage need to be useful?",
        "A baseline.",
        "The starting number."
      ],
      misconceptionsTargeted: ["percentage-without-baseline"]
    },
    {
      id: "g6.media.e.d4.q3",
      type: "multiple_choice",
      stem: "A photo of a crowded protest is shared as 'today's protest.' How do you check the date?",
      choices: [
        "Reverse image search — see if the photo appears in older articles.",
        "Trust it.",
        "Look at the photo's color.",
        "Ask the photographer."
      ],
      answerIndex: 0,
      explanation: "Reverse search finds older uses. If the photo appears in 2017 articles, it's not from today.",
      hintLadder: [
        "How do you check a photo's history?",
        "Reverse image search.",
        "Compare against older uses."
      ]
    },
    {
      id: "g6.media.e.d4.q4",
      type: "multiple_choice",
      stem:
        "Which is a BROKEN SOURCE LADDER?",
      choices: [
        "Citing a CDC page directly.",
        "A friend's cousin's neighbor heard from a teacher that…",
        "Reading the original peer-reviewed paper.",
        "Watching a press conference live."
      ],
      answerIndex: 1,
      explanation: "Each retelling adds error. By the time it reaches you, the original may be unrecognizable.",
      hintLadder: [
        "Count the people between you and the source.",
        "How many retellings?",
        "The cousin-neighbor-teacher chain."
      ]
    },
    {
      id: "g6.media.e.d4.q5",
      type: "short_answer",
      stem:
        "You see a viral claim that fits one of the four patterns (outrage hook, cherry-picked stat, out-of-context image, broken source ladder). Pick a real recent example and identify which pattern it shows.",
      rubric: {
        level3: "Names a specific recent claim, names the specific pattern from the four, explains what makes it that pattern.",
        level2: "Names the pattern but example is vague.",
        level1: "Vague example without pattern identification."
      },
      exemplar:
        "Claim: 'Our city's roads are the worst in America' shared with no source. Pattern: cherry-picked or made-up stat — there's no national ranking referenced, no methodology, no baseline. Without a source, the strong claim is just a feeling.",
      hintLadder: [
        "Pick a specific recent claim.",
        "Walk the four patterns — which matches?",
        "Explain what about the claim fits the pattern."
      ]
    }
  ],
  reflectionPrompt: "Today you learned four misinformation patterns. Which pattern do you see most often in your feed?",
  misconceptionBank: [
    {
      id: "percentage-without-baseline",
      label: "Reacts to percentages without baseline",
      description: "Believes a 300% jump must be huge without checking the starting number.",
      coachMove: "Always ask: 300% of what? Without baseline, multipliers are meaningless."
    }
  ]
};
