// Grade 5 Summer ELA / Writing — Week 1 (Explorer Mode), Day 1.
// Grade-5 counterpart of g6.ela.w1.d1 (claim + evidence), pitched down:
// paragraph frames, topic sentences, simple evidence, gentler vocabulary.

export const summerG5ElaW1D1 = {
  id: "g5.summer.ela.w1.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Claim and evidence warm-up",
  topicTag: "claim-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.RL.5.1", "CCSS.ELA-LITERACY.W.5.1"],
  hook: "Strong writing makes a point and backs it up. Today you find the point (claim), the reason (evidence), and what is missing.",
  keyTerms: [
    { term: "Claim", definition: "A statement you can agree or disagree with." },
    { term: "Evidence", definition: "An example, fact, or reason that backs up the claim." },
    { term: "Linking word", definition: "A word like because or since that connects the claim to the evidence." }
  ],
  miniLesson: [
    "A claim is a statement you can agree or disagree with -- not just a plain fact.",
    "Evidence is the example, fact, or reason that backs up the claim.",
    "A linking word like because or since connects the claim to the evidence and shows why it matters."
  ],
  workedExample: {
    prompt: "Read this sentence: Reading every night is worth it because kids who read 20 minutes a day learn more new words. Find the claim, the evidence, and the linking word.",
    steps: [
      "Find the point you could agree or disagree with -- Reading every night is worth it. That is the claim.",
      "Find the backing reason -- kids who read 20 minutes a day learn more new words. That is the evidence.",
      "Find the linking word -- because -- it connects the claim to the evidence.",
      "Check: does the evidence back up the claim? Yes -- learning more words shows reading is worth it."
    ],
    answer: "A claim and evidence joined by because."
  },
  items: [
    {
      id: "g5.summer.ela.w1.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is a claim?",
      choices: [
        "Kids learn more when recess is longer.",
        "Pizza has cheese on it.",
        "The school day starts at 8 AM.",
        "There are 12 months in a year."
      ],
      answerIndex: 0,
      explanation: "A claim is something you can agree or disagree with. Kids learn more when recess is longer can be argued, so it is the claim. The others are plain facts.",
      hintLadder: [
        "Which sentence could you agree or disagree with?",
        "A claim is not just a fact -- it is something you would defend.",
        "Look for the sentence about recess."
      ],
      misconceptionsTargeted: ["confuses-fact-with-claim"]
    },
    {
      id: "g5.summer.ela.w1.d1.q2",
      type: "multiple_choice",
      stem: "Claim: Recess helps kids focus in class. Which sentence is the BEST evidence for the claim?",
      choices: [
        "Recess is fun.",
        "Many kids at our school like recess.",
        "My teacher said recess is important.",
        "Kids who take a break do better on the work right after."
      ],
      answerIndex: 3,
      explanation: "Strong evidence is specific and connects to the claim. Kids doing better right after a break supports the focus-in-class claim.",
      hintLadder: [
        "Which choice connects a break to doing better on work?",
        "Look for the choice that ties a fact to the claim (focus in class).",
        "It is the one about doing better right after a break."
      ],
      misconceptionsTargeted: ["picks-vague-evidence"]
    },
    {
      id: "g5.summer.ela.w1.d1.q3",
      type: "multiple_choice",
      stem: "Which sentence uses a linking word that connects a reason to a claim?",
      choices: [
        "I want to play outside.",
        "Pizza is tasty and so is ice cream.",
        "We should walk more because walking makes us feel happier.",
        "The dog ran fast."
      ],
      answerIndex: 2,
      explanation: "Because links the claim (we should walk more) to the evidence (walking makes us feel happier).",
      hintLadder: [
        "Look for words like because, since, or so.",
        "Which sentence gives an idea AND a reason?",
        "It is the sentence using because."
      ]
    },
    {
      id: "g5.summer.ela.w1.d1.q4",
      type: "multiple_choice",
      stem: "What is missing from this sentence: Sleep is important for kids.",
      choices: [
        "A period",
        "Evidence to back it up",
        "A capital letter",
        "A person's name"
      ],
      answerIndex: 1,
      explanation: "The sentence makes a claim but gives no evidence. Strong writing adds a fact, example, or reason.",
      hintLadder: [
        "The sentence makes a claim. What does strong writing add to a claim?",
        "Look back at the mini-lesson -- what backs up a claim?",
        "Evidence makes a claim strong."
      ]
    },
    {
      id: "g5.summer.ela.w1.d1.q5",
      type: "short_answer",
      stem: "Write ONE sentence that makes a claim about your favorite hobby AND gives one reason for it. Use the word because.",
      rubric: {
        level3: "Sentence has a clear claim, a specific reason, and the word because, all matching the hobby.",
        level2: "Has a claim and a reason but the reason is vague or the linking word is missing.",
        level1: "Just an opinion, just a fact, or the parts do not match."
      },
      exemplar: "Drawing is worth practicing every day because I get a little better at faces each time I try.",
      hintLadder: [
        "Start with what you believe about your hobby.",
        "Add the word because and then a real reason.",
        "Make sure the reason is something you could point to."
      ]
    }
  ],
  stretch: {
    stem: "Make this weak sentence stronger by adding evidence: Screens before bed are bad. Add one real reason.",
    answer: "Example: Screens before bed can hurt sleep because the bright light can make it harder to fall asleep.",
    explanation: "The first sentence is a claim with no support. The new one keeps the claim and adds a real reason with the linking word because."
  },
  reflectionPrompt: "Today you found the claim and the evidence. What is one claim you have heard lately that needs better evidence?",
  misconceptionBank: [
    {
      id: "confuses-fact-with-claim",
      label: "Mixes up a fact and a claim",
      description: "Treats every sentence as a claim, even plain facts.",
      coachMove: "Ask: could someone argue with this sentence? If not, it is a fact, not a claim."
    },
    {
      id: "picks-vague-evidence",
      label: "Picks vague evidence",
      description: "Chooses evidence that does not really back up the claim, like many kids like it.",
      coachMove: "Ask: how does this evidence prove the claim? If the answer is fuzzy, find better evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Claim or Just a Fact?",
      prompt:
        "Read these two: (A) Our school has 600 students. (B) Our school should have a longer lunch. Which one is a CLAIM you could argue, and which is just a fact?",
      answer: "(A) is a fact you can look up. (B) is a claim -- someone could agree or disagree, so you can argue it with evidence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Claim Poster",
      challenge:
        "Pick something you believe about summer (best activity, best snack, best place to read). Write it as a clear claim, then back it up with TWO real reasons.",
      steps: [
        "Write your claim as one clear sentence.",
        "Add reason #1 -- a fact, example, or thing you did.",
        "Add reason #2 -- different from the first.",
        "Add a one-line ending that ties it together."
      ],
      deliverable: "A claim poster (drawn or typed) with your claim and 2 reasons.",
      choiceBoard: [
        "Make a poster with your claim and reasons.",
        "Write a short speech to convince a friend.",
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
          id: "g5.summer.ela.w1.d1.arena1",
          type: "multiple_choice",
          stem: "Claim: Reading every day helps you learn new words. Which is the BEST evidence?",
          choices: [
            "Kids who read 20 minutes a day learned more new words on a class test.",
            "Reading is fun.",
            "My friend likes books.",
            "Everyone knows reading is good."
          ],
          answerIndex: 0,
          explanation: "Specific, real information tied to the claim is the strongest evidence.",
          hintLadder: [
            "Strong evidence is specific and matches the claim.",
            "Which choice has real information about learning words?",
            "The one about reading 20 minutes a day."
          ]
        },
        {
          id: "g5.summer.ela.w1.d1.arena2",
          type: "short_answer",
          stem: "Write a claim about something at your school, then give one real reason that backs it up.",
          rubric: {
            level3: "States a claim someone could argue AND gives a specific reason that backs it up.",
            level2: "Claim and reason are there but the reason is vague or loosely connected.",
            level1: "States a fact or a preference, or the reason does not back the claim."
          },
          exemplar: "Claim: our class should get more library time. Reason: many of us finish our books early and have nothing new to read.",
          hintLadder: [
            "Make a claim someone could disagree with.",
            "Add a specific fact or example as your reason.",
            "Check that the reason really backs the claim."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Box Breathing",
      prompt:
        "Try box breathing 4 times: breathe in for 4 counts, hold for 4, out for 4, hold for 4. Notice how your mind feels calmer after.",
      scienceTieIn: "Slow breathing tells your body the alarm is off, so your brain can focus -- a tool you will see again in this program.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one claim you heard today (in an ad, from a friend, or online)? Did it have real evidence behind it?",
      badge: { id: "g5-summer-evidence-explorer", name: "Evidence Explorer", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
