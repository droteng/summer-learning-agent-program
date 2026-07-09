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
  estimatedMinutes: 60, // full Daily Hour
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
        "After-school exercise programs improve afternoon test scores.",
        "Many students at our school play soccer.",
        "Soccer is fun to play.",
        "Coach said practice is important."
      ],
      answerIndex: 0,
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
        "We should walk more because walking improves mood and focus.",
        "Pizza is delicious and so is ice cream.",
        "The dog ran fast."
      ],
      answerIndex: 1,
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
        "A subject",
        "Specific evidence"
      ],
      answerIndex: 3,
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
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Claim or Just a Fact?",
      prompt:
        "Read these two: (A) 'Our school has 600 students.' (B) 'Our school should have a longer lunch.' Which one is a CLAIM you could argue, and which is just a fact?",
      answer: "(A) is a fact you can look up. (B) is a claim — someone could agree or disagree, so you can argue it with evidence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Claim Poster",
      challenge:
        "Pick something you believe about summer (best activity, best snack, best place to read). Write it as a clear claim, then back it with TWO pieces of real evidence.",
      steps: [
        "Write your claim as one clear sentence.",
        "Add evidence #1 — a fact, example, or experience.",
        "Add evidence #2 — different from the first.",
        "Add a one-line 'so what' that ties it together."
      ],
      deliverable: "A claim poster (drawn or typed) with your claim + 2 pieces of evidence.",
      choiceBoard: [
        "Make a poster with your claim and evidence.",
        "Write a 30-second speech to convince a friend.",
        "Draw a 3-panel comic where a character proves a claim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w1.d1.arena1",
          type: "multiple_choice",
          stem: "Claim: 'Reading every day improves your vocabulary.' Which is the STRONGEST evidence?",
          choices: [
            "A study found students who read 20 minutes a day scored higher on vocabulary tests.",
            "Reading is fun.",
            "My friend likes books.",
            "Everyone knows reading is good."
          ],
          answerIndex: 0,
          explanation: "Specific, relevant data from a study directly supports the claim.",
          hintLadder: [
            "Strong evidence is specific and relevant.",
            "Which option has real data tied to the claim?",
            "The study about reading 20 minutes a day."
          ]
        },
        {
          id: "g6.ela.w1.d1.arena2",
          type: "short_answer",
          stem: "Write a claim about something at your school, then give one piece of real evidence that supports it.",
          rubric: {
            level3: "States an arguable claim AND gives specific, relevant evidence that supports it.",
            level2: "Claim and evidence present but evidence is vague or loosely connected.",
            level1: "States a fact or preference, or evidence doesn't support the claim."
          },
          exemplar: "Claim: our library should add more graphic novels. Evidence: the 3 we have are always checked out, with a waitlist of 12 students.",
          hintLadder: [
            "Make an arguable claim (someone could disagree).",
            "Add a specific fact or example as evidence.",
            "Check that the evidence really proves the claim."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Box Breathing",
      prompt:
        "Try box breathing 4 times: breathe in for 4 counts, hold for 4, out for 4, hold for 4. Notice how your mind feels calmer afterward.",
      scienceTieIn: "Slow breathing tells your body the 'danger alarm' is off, so your brain can focus — a tool you'll see again in this program's science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one claim you heard today (in an ad, from a friend, or online)? Did it have real evidence behind it?",
      badge: { id: "evidence-explorer", name: "Evidence Explorer", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
