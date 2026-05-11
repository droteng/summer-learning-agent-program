// Grade 6 ELA / Writing — Week 1 (Explorer Mode), Day 1.
// Topic: claim + evidence baseline.

export const grade6ElaWeek1Day1 = {
  id: "g6.ela.w1.d1",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Claim and evidence warm-up",
  topicTag: "claim-evidence",
  estimatedMinutes: 18,
  standardsRefs: ["CCSS.6.RL.1", "CCSS.6.W.1"],
  hook: "Strong writing makes a claim and backs it up. Today you spot the claim, the evidence, and what's missing.",
  miniLesson: [
    "A claim is a statement you can argue for or against — not a fact and not just an opinion.",
    "Evidence is the example, quote, statistic, or observation that supports the claim.",
    "Strong writing answers \"so what?\" — it explains why the evidence matters."
  ],
  workedExample: {
    prompt:
      "Read this sentence: \"Reading every night is worth the effort because students who read 20 minutes a day score higher on vocabulary tests.\" Identify the claim, the evidence, and the link.",
    steps: [
      "Find the opinion-style statement — \"Reading every night is worth the effort.\" That's the claim.",
      "Find the supporting fact — \"students who read 20 minutes a day score higher on vocabulary tests.\" That's the evidence.",
      "Find the linking word — \"because\" — that connects the claim to the evidence.",
      "Check whether the evidence really supports the claim. Does scoring higher on vocabulary tests count as the effort being worth it? Yes — that's a reasonable link."
    ],
    answer: "Claim + evidence linked by \"because\"."
  },
  items: [
    {
      id: "g6.ela.w1.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is a claim?",
      choices: [
        "The school day starts at 8 AM.",
        "Pizza has cheese on it.",
        "Middle schoolers learn more when recess is longer.",
        "There are 12 months in a year."
      ],
      answerIndex: 2,
      explanation:
        "A claim is something you can argue for or against. \"Middle schoolers learn more when recess is longer\" is debatable, so it's the claim. The others are facts.",
      hintLadder: [
        "Which sentence could you argue with?",
        "A claim isn't just a fact — it's a statement you'd defend.",
        "Look for the sentence about middle schoolers and recess."
      ],
      misconceptionsTargeted: ["confuses-fact-with-claim"]
    },
    {
      id: "g6.ela.w1.d1.q2",
      type: "multiple_choice",
      stem:
        "Claim: Soccer practice helps students focus in class. Which sentence is the strongest evidence for the claim?",
      choices: [
        "Soccer is fun to play.",
        "Many students at our school play soccer.",
        "After-school exercise programs improve afternoon test scores.",
        "Coach said practice is important."
      ],
      answerIndex: 2,
      explanation:
        "Strong evidence is specific and connects directly to the claim. After-school exercise improving afternoon test scores supports the focus-in-class claim.",
      hintLadder: [
        "Which option mentions both exercise and school performance?",
        "Look for an option that links a fact to the claim's idea (focus in class).",
        "It's the option about after-school exercise and afternoon test scores."
      ],
      misconceptionsTargeted: ["picks-vague-evidence"]
    },
    {
      id: "g6.ela.w1.d1.q3",
      type: "multiple_choice",
      stem: "Which sentence uses a linking word that connects evidence to a claim?",
      choices: [
        "I want to play outside.",
        "Pizza is delicious and so is ice cream.",
        "We should walk more because walking improves mood and focus.",
        "The dog ran fast."
      ],
      answerIndex: 2,
      explanation: "\"Because\" links the claim (we should walk more) to the evidence (walking improves mood and focus).",
      hintLadder: [
        "Look for words like because, since, therefore, or so.",
        "Which sentence makes a recommendation and gives a reason?",
        "It's the sentence using \"because\"."
      ]
    },
    {
      id: "g6.ela.w1.d1.q4",
      type: "multiple_choice",
      stem: "What's missing from this sentence: \"Sleep is important for students.\"",
      choices: [
        "Punctuation",
        "A capital letter",
        "Specific evidence",
        "A subject"
      ],
      answerIndex: 2,
      explanation: "The sentence is a claim with no evidence. Strong writing adds a specific fact, example, or stat.",
      hintLadder: [
        "The sentence makes a claim. What does strong writing add to a claim?",
        "Reread the mini-lesson — what supports a claim?",
        "Specific evidence makes a claim convincing."
      ]
    },
    {
      id: "g6.ela.w1.d1.q5",
      type: "short_answer",
      stem:
        "Write a single sentence that makes a claim about your favorite hobby AND backs it up with one piece of evidence. Use a linking word like \"because\" or \"since\".",
      rubric: {
        level3:
          "Sentence has a clear claim, specific evidence, and a linking word, all matching the chosen hobby.",
        level2: "Has a claim and evidence but the link is weak, vague, or missing the linking word.",
        level1: "Just an opinion, just a fact, or unrelated parts."
      },
      exemplar:
        "Skateboarding is worth practicing daily because doing tricks every day taught me that small mistakes lead to bigger improvements.",
      hintLadder: [
        "Start with what you believe about your hobby.",
        "Add the word \"because\" and follow it with a specific reason.",
        "Make sure the reason is something you could actually point to as evidence."
      ]
    }
  ],
  stretch: {
    stem:
      "Rewrite this weak sentence to add evidence: \"Phones in school are bad.\" Add one specific reason that connects to a real student experience.",
    answer:
      "Example: Phones in school can hurt learning because students who have phones on their desks remember 20% less from a 10-minute lesson.",
    explanation:
      "The original is a claim without support. The rewrite keeps the claim and adds a specific, checkable piece of evidence with a linking word."
  },
  reflectionPrompt: "Today you separated claim from evidence. What's one claim you've heard recently that needs better evidence?",
  misconceptionBank: [
    {
      id: "confuses-fact-with-claim",
      label: "Confuses a fact with a claim",
      description: "Treats every sentence as a claim, including plain facts.",
      coachMove: "Ask: could someone argue with this sentence? If not, it's a fact, not a claim."
    },
    {
      id: "picks-vague-evidence",
      label: "Picks vague or unrelated evidence",
      description: "Selects evidence that does not directly support the claim, like \"many students at our school\".",
      coachMove: "Ask: how exactly does this evidence prove the claim? If the answer is fuzzy, find better evidence."
    }
  ]
};
