// Grade 5 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 2.
// Grade 5 counterpart of g6.fall.ela.w5.d2. Same topic (reasons and evidence)
// pitched down to Grade 5: simple reason + proof language, claim → reason →
// evidence frame, extra scaffolding for ages 10–11.

export const fallG5ElaW5D2 = {
  id: "g5.fall.ela.w5.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Reasons and evidence",
  topicTag: "reasons-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1.B", "CCSS.ELA-LITERACY.W.5.1.A"],
  hook: "A claim with nothing behind it is just an opinion said louder. Today you back your claim with reasons and evidence so people really believe you.",
  miniLesson: [
    "A reason answers 'why should I believe your claim?' Evidence is the PROOF behind the reason: a fact, an example, or a number.",
    "Good support is about your claim (it fits) and is exact (a real number or example, not 'everybody knows').",
    "Use this order: claim, then reason, then evidence. It is like a sandwich — the claim on top, the reason and proof holding it up."
  ],
  workedExample: {
    prompt: "Claim: 'Our school should add bike racks.' Give a reason and evidence.",
    steps: [
      "Reason: more kids would bike if they had a safe place to park.",
      "Evidence: I asked my class and 18 students said they would bike but worry about their bikes.",
      "Connect: more biking means less car traffic and healthier kids.",
      "Order: claim, then reason, then evidence."
    ],
    answer: "Reason: kids would bike more with safe parking. Evidence: 18 students said they would bike but worry their bikes are not safe."
  },
  items: [
    {
      id: "g5.fall.ela.w5.d2.q1",
      type: "multiple_choice",
      stem: "Which is the BEST evidence for the claim 'our library should stay open later'?",
      choices: [
        "Libraries are nice.",
        "A survey showed 40 students need a quiet place to study after 4 p.m. when the library closes.",
        "I think it should.",
        "Everybody knows libraries are good."
      ],
      answerIndex: 1,
      explanation: "It is exact and fits the claim — real numbers tied right to the idea.",
      hintLadder: [
        "Strong evidence is exact and fits the claim.",
        "Which one has real numbers about the library?",
        "The survey of 40 students."
      ]
    },
    {
      id: "g5.fall.ela.w5.d2.q2",
      type: "multiple_choice",
      stem: "What is wrong with using 'everybody knows that' as evidence?",
      choices: [
        "Nothing, it is great",
        "It is vague and cannot be proven — it is not real evidence",
        "It is too exact",
        "It uses too many numbers"
      ],
      answerIndex: 1,
      explanation: "'Everybody knows' gives no real proof and often is not even true.",
      hintLadder: [
        "Can you check 'everybody knows'?",
        "Is there any real proof in it?",
        "It is vague and unprovable."
      ],
      misconceptionsTargeted: ["assertion-as-evidence"]
    },
    {
      id: "g5.fall.ela.w5.d2.q3",
      type: "multiple_choice",
      stem: "In persuasive order, what comes right after you state your CLAIM?",
      choices: [
        "The ending",
        "A reason that supports it",
        "An unrelated story",
        "Nothing"
      ],
      answerIndex: 1,
      explanation: "Claim, then reason, then evidence. The reason tells why the claim is true.",
      hintLadder: [
        "What answers 'why believe this'?",
        "It is the bridge between the claim and the proof.",
        "A supporting reason."
      ]
    },
    {
      id: "g5.fall.ela.w5.d2.q4",
      type: "short_answer",
      stem: "Take this claim — 'Our class should have a 5-minute stretch break each hour' — and give one reason plus one piece of evidence.",
      rubric: {
        level3: "Gives a reason that fits the claim AND evidence (a fact, example, or number) that supports it.",
        level2: "Gives a reason but the evidence is vague, or evidence with no clear reason.",
        level1: "Just repeats the claim or gives support that does not fit."
      },
      exemplar: "Reason: short movement breaks help kids focus again. Evidence: our teacher noticed we finish work faster after we stretch.",
      hintLadder: [
        "Why would stretch breaks help? (reason)",
        "What proof backs that reason? (evidence)",
        "Keep both tied to the claim."
      ]
    },
    {
      id: "g5.fall.ela.w5.d2.q5",
      type: "short_answer",
      stem: "Build on YOUR claim from yesterday. Write one reason and one piece of evidence that supports it.",
      rubric: {
        level3: "Reason clearly supports the writer's own claim AND evidence is exact and fits.",
        level2: "Reason or evidence is there but one is vague or only loosely connected.",
        level1: "Missing the reason or evidence, or it does not fit the claim."
      },
      exemplar: "Claim: add a crosswalk near the park. Reason: kids cross there every day and it is not safe. Evidence: I counted 22 kids crossing in 30 minutes after school.",
      hintLadder: [
        "Remember your claim from Day 1.",
        "Add the best 'why' (reason).",
        "Back it up with something exact you could show."
      ]
    }
  ],
  reflectionPrompt: "Which was harder — finding a reason or finding real evidence? What evidence could you go collect this week?",
  misconceptionBank: [
    {
      id: "assertion-as-evidence",
      label: "Treats repeating the claim as evidence",
      description: "Backs up a claim by saying it again louder instead of giving real proof.",
      coachMove: "Ask 'how do you KNOW?' until they reach a fact, example, or number — that is the evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spot the Real Evidence",
      prompt:
        "Claim: 'Our town should plant more trees before winter.' Two supports show up: (A) 'Trees are pretty and everyone loves them.' (B) 'A city study found streets with trees stay cooler on hot fall days.' Which one is REAL evidence — and why?",
      answer: "(B) is real evidence: it is exact and fits the claim. (A) is just a vague opinion — 'everyone loves them' proves nothing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Evidence Harvest Basket",
      challenge:
        "Like picking apples in fall, go 'harvest' evidence for your claim. Collect 3 pieces of support — a fact, an example, and something you could actually count — and sort them into your basket.",
      steps: [
        "Write your claim at the top of the page.",
        "Harvest evidence #1: a fact.",
        "Harvest evidence #2: a real example or short story.",
        "Harvest evidence #3: something you could go count or measure yourself."
      ],
      deliverable: "An 'evidence basket' chart with your claim and 3 pieces of support, each labeled fact / example / count.",
      choiceBoard: [
        "Draw a basket and fill it with your 3 evidence cards.",
        "Make a 'reason then evidence' arrow chart for your claim.",
        "Write a short paragraph in claim, reason, evidence order."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w5.d2.arena1",
          type: "multiple_choice",
          stem: "Claim: 'The town should add a fall farmers market.' Which is the STRONGEST evidence?",
          choices: [
            "Farmers markets are great.",
            "A nearby town's fall market brought in 800 shoppers and helped local farms last October.",
            "I love apple cider.",
            "Everyone knows markets are fun."
          ],
          answerIndex: 1,
          explanation: "It is exact, fits the claim, and uses real numbers. The others are vague opinions or personal taste.",
          hintLadder: [
            "Strong evidence is exact and fits the claim.",
            "Which one has real numbers about a market?",
            "The nearby-town data with 800 shoppers."
          ]
        },
        {
          id: "g5.fall.ela.w5.d2.arena2",
          type: "short_answer",
          stem: "Claim: 'Our class should take a fall nature walk each week.' Give one reason AND one piece of evidence that supports it.",
          rubric: {
            level3: "Gives a reason that fits the claim AND evidence (a fact, example, or number) that supports it.",
            level2: "Gives a reason but the evidence is vague, or evidence with no clear reason.",
            level1: "Just repeats the claim or gives support that does not fit."
          },
          exemplar: "Reason: fresh air and movement help kids focus again. Evidence: our class was calmer and worked better the day we walked outside.",
          hintLadder: [
            "Why would a nature walk help? (reason)",
            "What proof backs that reason? (evidence)",
            "Keep both tied to the claim."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Leaf-Rake Stretch",
      prompt:
        "Pretend you are raking a big pile of fall leaves: reach down and across, pull back, and twist gently to each side. Do 8 slow rakes per side, breathing out on each pull.",
      scienceTieIn: "Gentle twisting sends more blood and oxygen to your brain, which helps you think clearly when you sit back down.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which was harder today — finding a reason or finding real evidence? Name one piece of evidence you could actually go collect this week.",
      badge: { id: "g5-fall-evidence-harvester", name: "Evidence Harvester", emoji: "🧺" },
      estimatedMinutes: 7
    }
  }
};
