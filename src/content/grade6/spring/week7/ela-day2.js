// Grade 6 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 2. Topic: supporting a claim with reasons and evidence — facts, data,
// and examples that make an environmental argument convincing.

export const springG6ElaW7D2 = {
  id: "g6.spring.ela.w7.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Support a claim with reasons and evidence",
  topicTag: "reasons-and-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.1.B", "CCSS.W.6.1"],
  hook: "Yesterday you made a claim to give the Earth a voice. But a claim alone is not enough — a reader asks 'Why should I believe you?' Today you learn to back your claim with reasons and evidence: facts, data, and real examples that make people listen.",
  miniLesson: [
    "A reason answers 'why?' about your claim. Evidence is the proof behind the reason: facts, data (numbers), and real examples.",
    "The strongest environmental arguments use specific evidence: 'A single plastic bottle can take 450 years to break down' is far more convincing than 'plastic lasts a long time.'",
    "Match your evidence to your reason. If your reason is 'plastic harms ocean animals,' good evidence is a fact or statistic about wildlife eating plastic — not just a feeling that pollution is sad."
  ],
  workedExample: {
    prompt: "Claim: 'Our school should add water-bottle refill stations.' Give a reason and matching evidence.",
    steps: [
      "State a reason that answers WHY: it would cut down on plastic waste.",
      "Find evidence that supports that reason: a fact or number about plastic bottles.",
      "Evidence: 'Americans throw away about 60 million plastic bottles every day.'",
      "Connect them: refill stations reduce this waste because fewer single-use bottles get bought."
    ],
    answer: "Reason: refill stations cut plastic waste. Evidence: Americans throw away about 60 million plastic bottles a day, so fewer would be used and tossed."
  },
  items: [
    {
      id: "g6.spring.ela.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which of these is the strongest EVIDENCE to support the claim 'Our town should protect its forest'?",
      choices: [
        "Forests are really pretty in spring.",
        "Everybody knows forests are good.",
        "I really love walking in the woods.",
        "One acre of forest can absorb about 2.5 tons of carbon dioxide each year."
      ],
      answerIndex: 3,
      explanation: "It is a specific, checkable fact with data that directly supports why the forest matters. The others are feelings or vague statements.",
      hintLadder: [
        "Evidence is proof you can check, often with numbers.",
        "Which one gives a specific fact or statistic?",
        "The carbon-absorption fact is real evidence."
      ]
    },
    {
      id: "g6.spring.ela.w7.d2.q2",
      type: "multiple_choice",
      stem: "What is the difference between a REASON and EVIDENCE?",
      choices: [
        "A reason answers 'why?' about your claim; evidence is the facts, data, or examples that prove the reason.",
        "They are exactly the same thing.",
        "A reason is always a number; evidence is always an opinion.",
        "Evidence comes first, then the claim, then the reason."
      ],
      answerIndex: 0,
      explanation: "A reason explains why your claim is true; evidence is the specific proof (facts, data, examples) that backs up the reason.",
      hintLadder: [
        "One answers 'why?' and one is the proof.",
        "Which part uses facts and numbers?",
        "Reason = why; evidence = proof."
      ],
      misconceptionsTargeted: ["reason-is-evidence"]
    },
    {
      id: "g6.spring.ela.w7.d2.q3",
      type: "multiple_choice",
      stem: "A student's claim is 'Our city should build more bike lanes.' Which reason is best supported by EVIDENCE?",
      choices: [
        "Bikes are more fun than cars.",
        "I think everyone should ride bikes.",
        "Bike lanes cut car pollution — cities with good bike lanes report lower traffic emissions.",
        "Bikes come in cool colors."
      ],
      answerIndex: 2,
      explanation: "This reason is tied to real, checkable evidence about emissions. The others are preferences with no proof behind them.",
      hintLadder: [
        "Which reason could you back with a fact or data?",
        "Look for the one connected to a measurable result.",
        "Lower emissions can be measured — that is evidence."
      ]
    },
    {
      id: "g6.spring.ela.w7.d2.q4",
      type: "short_answer",
      stem: "Take an environmental claim you care about. Write ONE reason and ONE piece of evidence (a fact, statistic, or real example) that supports it.",
      rubric: {
        level3: "States a clear reason that answers 'why?' AND gives specific, relevant evidence (fact, statistic, or real example) that actually supports that reason.",
        level2: "Gives a reason and evidence but the evidence is vague or only loosely connected to the reason.",
        level1: "Gives only a claim or a feeling with no real reason or evidence."
      },
      exemplar: "Claim: our school should compost lunch scraps. Reason: it keeps waste out of landfills. Evidence: food scraps make up about a quarter of what schools throw away, so composting shrinks the trash a lot.",
      hintLadder: [
        "First write your reason — the 'why' behind your claim.",
        "Then find a fact, number, or example that proves that reason.",
        "Make sure the evidence actually matches the reason."
      ]
    },
    {
      id: "g6.spring.ela.w7.d2.q5",
      type: "short_answer",
      stem: "Why is specific evidence (like a statistic or real example) more convincing than a general feeling when you argue about the environment?",
      rubric: {
        level3: "Explains that specific evidence can be checked and shows the problem is real/serious, so it convinces readers who do not already agree — while feelings only appeal to those who feel the same.",
        level2: "Gives a partial reason without the 'convinces skeptics / can be checked' idea.",
        level1: "Restates the question or is unrelated."
      },
      exemplar: "A feeling only works on people who already feel the same way. A statistic you can check, like how many animals are harmed by plastic, proves the problem is real and can convince someone who does not agree yet.",
      hintLadder: [
        "Who are you trying to convince — people who already agree, or people who do not?",
        "Can someone check a feeling? Can they check a statistic?",
        "Connect evidence to convincing a doubter."
      ]
    }
  ],
  reflectionPrompt: "Look at the claim you wrote yesterday. What is ONE fact, number, or real example you could find to prove it? Where might you look for that evidence?",
  misconceptionBank: [
    {
      id: "reason-is-evidence",
      label: "Confuses a reason with evidence",
      description: "Thinks stating why (a reason) is the same as proving it (evidence), and offers no facts, data, or examples.",
      coachMove: "Ask: 'You told me WHY — now what is the PROOF? Give me a fact, a number, or a real example.'"
    },
    {
      id: "feeling-as-evidence",
      label: "Uses a feeling as evidence",
      description: "Offers 'I really care about this' or 'it is sad' as proof, instead of a checkable fact.",
      coachMove: "Separate feeling from proof: 'That is how you feel — what fact could a stranger check to see the problem is real?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Guess the Number",
      prompt:
        "Spring guessing game: about how long can a single plastic water bottle take to break down in nature — 1 year, 45 years, or 450 years? Then decide: which answer would make the STRONGEST evidence in a persuasive piece, and why?",
      answer: "About 450 years. A big, surprising, checkable number like that is powerful evidence — it makes readers realize the problem is real and lasting, far more than just saying 'plastic lasts a long time.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Evidence Fact Card Deck",
      challenge:
        "Turn dry facts into persuasive power. Create a small deck of 'evidence cards' for your environmental claim — each card pairs a REASON with one strong piece of evidence (a fact, statistic, or example) you could use in your piece.",
      steps: [
        "Write your claim at the top of your first card.",
        "On each of 3 cards, write one REASON that answers 'why?'.",
        "Under each reason, add one matching piece of evidence — a fact, number, or real example.",
        "Star the card with the strongest evidence — the one you will lead with in your piece."
      ],
      deliverable: "A set of at least 3 evidence cards, each pairing a reason with a specific fact, statistic, or example, with the strongest one starred.",
      choiceBoard: [
        "Make paper flash cards, one reason and evidence per card.",
        "Build a digital slide deck with one reason and evidence per slide.",
        "Draw an 'evidence tree' — the claim is the trunk, reasons are branches, evidence are leaves."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w7.d2.arena1",
          type: "multiple_choice",
          stem: "Claim: 'Our town should reduce plastic waste.' Which sentence is the strongest EVIDENCE, not just a reason or a feeling?",
          choices: [
            "Plastic waste is a big problem for everyone.",
            "Studies estimate about 8 million tons of plastic enter the ocean each year.",
            "We should really care about this issue.",
            "Plastic is bad and we all know it."
          ],
          answerIndex: 1,
          explanation: "It is a specific, checkable statistic that proves the problem is real and large. The others are general statements or feelings with no proof.",
          hintLadder: [
            "Evidence is checkable proof, often with numbers.",
            "Which one gives a specific statistic?",
            "The 8-million-tons figure is real evidence."
          ]
        },
        {
          id: "g6.spring.ela.w7.d2.arena2",
          type: "short_answer",
          stem: "A friend argues: 'Our school should use less paper because paper is wasteful.' Explain what is MISSING from their argument, and give one piece of evidence that would strengthen it.",
          rubric: {
            level3: "Identifies that the argument has a reason but no EVIDENCE (facts/data/example) AND supplies a relevant, specific piece of evidence about paper use or trees.",
            level2: "Notices something is missing OR gives evidence, but not both clearly.",
            level1: "Restates the argument or gives another feeling with no evidence."
          },
          exemplar: "The reason is there, but there is no proof. They could add evidence like 'making one ton of paper uses about 17 trees,' which shows exactly how wasteful it is.",
          hintLadder: [
            "Does the argument include any checkable facts?",
            "It has a reason — what is it missing?",
            "Add a fact or number about paper or trees."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Rooted Like a Tree",
      prompt:
        "Stand tall and plant your feet like roots. Breathe in slowly for 4 counts as you 'grow' your arms up like branches, hold for 2, then breathe out for 4 as you gently sway. Repeat 4 times, imagining strong evidence rooting your argument.",
      scienceTieIn: "Slow, steady breathing calms your nervous system and improves focus — the same steadiness that helps you build a careful, well-supported argument.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the single strongest piece of evidence you could find for your environmental claim — and where would you go to find it (a book, a trusted website, an expert, an observation)?",
      badge: { id: "spring-evidence-collector", name: "Evidence Collector", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
