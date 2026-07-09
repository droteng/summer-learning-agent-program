// Grade 5 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 2. Topic: supporting a claim with reasons and simple evidence — facts
// and real examples that make an environmental argument convincing.
// Grade 5 depth: paragraph frames, one reason + one piece of evidence,
// short passages with vocab support.

export const springG5ElaW7D2 = {
  id: "g5.spring.ela.w7.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Support a claim with reasons and evidence",
  topicTag: "reasons-and-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1.B", "CCSS.ELA-LITERACY.W.5.1"],
  hook: "Yesterday you made a claim to give the Earth a voice. But a claim by itself is not enough — a reader thinks, 'Why should I believe you?' Today you learn to back your claim with a reason and evidence. A reason tells WHY. Evidence is the PROOF: a fact or a real example that makes people listen.",
  miniLesson: [
    "A reason answers 'why?' about your claim. Try the frame: 'This is true because ___.' Evidence is the proof behind the reason — a fact or a real example.",
    "Use the frame 'One reason is ___. For example, ___.' A specific fact is stronger than a fuzzy one. 'A plastic bottle can take hundreds of years to break down' is stronger than 'plastic lasts a long time.'",
    "Match your evidence to your reason. If your reason is 'plastic hurts ocean animals,' good evidence is a fact about animals eating plastic — not just the feeling that pollution is sad."
  ],
  workedExample: {
    prompt: "Claim: 'Our school should add water-bottle refill stations.' Add a reason and matching evidence.",
    steps: [
      "State a reason that answers WHY: it would cut down on plastic waste.",
      "Find evidence that supports that reason: a fact about plastic bottles.",
      "Evidence: 'People throw away millions of plastic bottles every day.'",
      "Connect them with the frame: refill stations cut waste because fewer bottles get bought and tossed."
    ],
    answer: "One reason is that refill stations cut plastic waste. For example, people throw away millions of plastic bottles every day, so fewer would be used."
  },
  items: [
    {
      id: "g5.spring.ela.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which sentence is the strongest EVIDENCE for the claim 'Our town should protect its forest'?",
      choices: [
        "Forests are really pretty in spring.",
        "Trees in a forest make oxygen and give animals a home.",
        "I really love walking in the woods.",
        "Everybody knows forests are good."
      ],
      answerIndex: 1,
      explanation: "It is a real, checkable fact that shows WHY the forest matters. The others are feelings or fuzzy statements.",
      hintLadder: [
        "Evidence is proof you can check.",
        "Which one gives a real fact about the forest?",
        "The oxygen-and-home fact is real evidence."
      ]
    },
    {
      id: "g5.spring.ela.w7.d2.q2",
      type: "multiple_choice",
      stem: "What is the difference between a REASON and EVIDENCE?",
      choices: [
        "They are exactly the same thing.",
        "Evidence comes first, then the claim, then the reason.",
        "A reason is always a number; evidence is always a feeling.",
        "A reason answers 'why?' about your claim; evidence is the fact or example that proves the reason."
      ],
      answerIndex: 3,
      explanation: "A reason explains why your claim is true. Evidence is the proof (a fact or example) that backs up the reason.",
      hintLadder: [
        "One answers 'why?' and one is the proof.",
        "Which part uses a fact or example?",
        "Reason = why; evidence = proof."
      ],
      misconceptionsTargeted: ["reason-is-evidence"]
    },
    {
      id: "g5.spring.ela.w7.d2.q3",
      type: "multiple_choice",
      stem: "A student's claim is 'Our class should recycle its paper.' Which reason is backed by EVIDENCE?",
      choices: [
        "Recycling is more fun than throwing things away.",
        "I think everyone should recycle.",
        "Recycling saves trees — making new paper from old paper uses far fewer trees.",
        "Recycling bins come in cool colors."
      ],
      answerIndex: 2,
      explanation: "This reason is tied to a real fact about trees. The others are feelings with no proof behind them.",
      hintLadder: [
        "Which reason could you back with a fact?",
        "Look for the one connected to a real result.",
        "Saving trees is something you can check — that is evidence."
      ]
    },
    {
      id: "g5.spring.ela.w7.d2.q4",
      type: "short_answer",
      stem: "Take an environmental claim you care about. Write ONE reason and ONE piece of evidence (a fact or a real example) that supports it. Try the frame 'One reason is ___. For example, ___.'",
      rubric: {
        level3: "States a clear reason that answers 'why?' AND gives a specific, matching piece of evidence (a fact or real example) that actually supports that reason.",
        level2: "Gives a reason and evidence, but the evidence is vague or only loosely connected to the reason.",
        level1: "Gives only a claim or a feeling with no real reason or evidence."
      },
      exemplar: "Claim: our school should compost lunch scraps. One reason is that it keeps food out of the trash. For example, a lot of what we throw away is food, so composting shrinks the trash.",
      hintLadder: [
        "First write your reason — the 'why' behind your claim.",
        "Then add a fact or example that proves that reason.",
        "Make sure the evidence matches the reason."
      ]
    },
    {
      id: "g5.spring.ela.w7.d2.q5",
      type: "short_answer",
      stem: "Why is a real fact or example more convincing than just a feeling when you argue about the environment?",
      rubric: {
        level3: "Explains that a fact can be checked and shows the problem is real, so it can convince people who do not already agree — while a feeling only reaches people who already feel the same way.",
        level2: "Gives a partial reason without the 'convinces people who disagree / can be checked' idea.",
        level1: "Restates the question or is unrelated."
      },
      exemplar: "A feeling only works on people who already agree. A fact you can check, like how many animals are hurt by plastic, proves the problem is real and can convince someone who does not agree yet.",
      hintLadder: [
        "Who are you trying to convince — people who agree, or people who do not?",
        "Can someone check a feeling? Can they check a fact?",
        "Connect evidence to convincing someone who disagrees."
      ]
    }
  ],
  reflectionPrompt: "Look at the claim you wrote yesterday. What is ONE fact or real example you could find to prove it? Where might you look for that evidence — a book, a trusted website, or something you can see yourself?",
  misconceptionBank: [
    {
      id: "reason-is-evidence",
      label: "Confuses a reason with evidence",
      description: "Thinks stating why (a reason) is the same as proving it (evidence), and offers no fact or example.",
      coachMove: "Ask: 'You told me WHY — now what is the PROOF? Give me a fact or a real example.'"
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
        "Spring guessing game: about how long can a single plastic water bottle take to break down in nature — 1 year, 45 years, or hundreds of years? Then decide: which answer would make the STRONGEST evidence in a persuasive piece, and why?",
      answer: "Hundreds of years. A big, surprising fact like that is powerful evidence — it makes readers realize the problem is real and lasting, far more than just saying 'plastic lasts a long time.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Evidence Fact Cards",
      challenge:
        "Turn plain facts into persuasive power. Make a small set of 'evidence cards' for your environmental claim. Each card pairs a REASON with one strong piece of evidence (a fact or real example) you could use in your piece.",
      steps: [
        "Write your claim at the top of your first card.",
        "On each of 3 cards, write one REASON that answers 'why?'.",
        "Under each reason, add one matching piece of evidence — a fact or a real example.",
        "Star the card with the strongest evidence — the one you will lead with."
      ],
      deliverable: "A set of at least 3 evidence cards, each pairing a reason with a fact or example, with the strongest one starred.",
      choiceBoard: [
        "Make paper flash cards, one reason and evidence per card.",
        "Build a small slide deck with one reason and evidence per slide.",
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
          id: "g5.spring.ela.w7.d2.arena1",
          type: "multiple_choice",
          stem: "Claim: 'Our town should reduce plastic waste.' Which sentence is the strongest EVIDENCE, not just a reason or a feeling?",
          choices: [
            "A lot of plastic trash ends up in the ocean each year, where sea animals can eat it.",
            "We should really care about this issue.",
            "Plastic waste is a big problem for everyone.",
            "Plastic is bad and we all know it."
          ],
          answerIndex: 0,
          explanation: "It is a specific, checkable fact that shows the problem is real. The others are general statements or feelings with no proof.",
          hintLadder: [
            "Evidence is checkable proof.",
            "Which one gives a specific fact?",
            "The fact about plastic in the ocean is real evidence."
          ]
        },
        {
          id: "g5.spring.ela.w7.d2.arena2",
          type: "short_answer",
          stem: "A friend argues: 'Our school should use less paper because paper is wasteful.' What is MISSING from their argument, and give one piece of evidence that would make it stronger.",
          rubric: {
            level3: "Identifies that the argument has a reason but no EVIDENCE (a fact or example) AND supplies a relevant, specific piece of evidence about paper use or trees.",
            level2: "Notices something is missing OR gives evidence, but not both clearly.",
            level1: "Restates the argument or gives another feeling with no evidence."
          },
          exemplar: "The reason is there, but there is no proof. They could add evidence like 'making paper uses many trees,' which shows exactly how wasteful it is.",
          hintLadder: [
            "Does the argument include any checkable facts?",
            "It has a reason — what is it missing?",
            "Add a fact or example about paper or trees."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Rooted Like a Tree",
      prompt:
        "Stand tall and plant your feet like roots. Breathe in slowly for 4 counts as you 'grow' your arms up like branches, hold for 2, then breathe out for 4 as you gently sway. Repeat 4 times, imagining strong evidence rooting your argument.",
      scienceTieIn: "Slow, steady breathing calms your body and improves focus — the same steadiness that helps you build a careful, well-supported argument.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the single strongest fact or example you could find for your environmental claim — and where would you go to find it (a book, a trusted website, an expert, or something you can see yourself)?",
      badge: { id: "g5-spring-evidence-detective", name: "Evidence Detective", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
