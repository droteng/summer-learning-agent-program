// Grade 6 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 2.
// Topic: reasons and evidence — backing your claim so it convinces.

export const fallG6ElaW5D2 = {
  id: "g6.fall.ela.w5.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Reasons and evidence",
  topicTag: "reasons-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.1.B", "CCSS.W.6.1.C"],
  hook: "A claim with no support is just an opinion shouted louder. Today you back your claim with reasons and evidence so it actually convinces people.",
  miniLesson: [
    "A reason answers 'why should I believe your claim?' Evidence is the proof behind the reason: facts, examples, or data.",
    "Strong support is relevant (it actually relates to the claim) and specific (real numbers or examples, not 'everybody knows').",
    "Order it as: claim → reason → evidence. Then connect back to why it matters."
  ],
  workedExample: {
    prompt: "Claim: 'Our school should add bike racks.' Give a reason and evidence.",
    steps: [
      "Reason: more students would bike if they had a safe place to park.",
      "Evidence: a quick survey found 18 students said they'd bike but worry about leaving their bikes unsecured.",
      "Connect: more biking means less car traffic and healthier students.",
      "Order: claim → reason → evidence → why it matters."
    ],
    answer: "Reason: students would bike more with safe parking. Evidence: 18 surveyed said they'd bike but worry about security."
  },
  items: [
    {
      id: "g6.fall.ela.w5.d2.q1",
      type: "multiple_choice",
      stem: "Which is the BEST evidence for the claim 'our library should stay open later'?",
      choices: [
        "Libraries are nice.",
        "Everybody knows libraries are good.",
        "I think it should.",
        "A survey showed 40 students need quiet study space after 4 p.m. when the library closes."
      ],
      answerIndex: 3,
      explanation: "It's specific and relevant — real data tied directly to the claim.",
      hintLadder: [
        "Strong evidence is specific and relevant.",
        "Which option has real numbers tied to the claim?",
        "The survey of 40 students."
      ]
    },
    {
      id: "g6.fall.ela.w5.d2.q2",
      type: "multiple_choice",
      stem: "What's wrong with using 'everybody knows that' as evidence?",
      choices: [
        "Nothing, it's great",
        "It's vague and unprovable — it isn't real evidence",
        "It's too specific",
        "It uses too many numbers"
      ],
      answerIndex: 1,
      explanation: "'Everybody knows' offers no actual proof and often isn't even true.",
      hintLadder: [
        "Can you check 'everybody knows'?",
        "Is there any real proof in it?",
        "It's vague and unprovable."
      ],
      misconceptionsTargeted: ["assertion-as-evidence"]
    },
    {
      id: "g6.fall.ela.w5.d2.q3",
      type: "multiple_choice",
      stem: "In persuasive order, what comes right after you state your CLAIM?",
      choices: [
        "The conclusion",
        "An unrelated story",
        "A reason that supports it",
        "Nothing"
      ],
      answerIndex: 2,
      explanation: "Claim → reason → evidence. The reason explains why the claim is true.",
      hintLadder: [
        "What answers 'why believe this'?",
        "It's the bridge between claim and evidence.",
        "A supporting reason."
      ]
    },
    {
      id: "g6.fall.ela.w5.d2.q4",
      type: "short_answer",
      stem: "Take this claim — 'Our class should have a 5-minute stretch break each hour' — and give one reason plus one piece of evidence.",
      rubric: {
        level3: "Provides a relevant reason AND specific evidence (a fact, example, or plausible data) that supports the claim.",
        level2: "Gives a reason but evidence is vague, or evidence without a clear reason.",
        level1: "Restates the claim or gives unrelated support."
      },
      exemplar: "Reason: short movement breaks help students refocus. Evidence: studies show brief activity breaks improve attention and test performance in middle schoolers.",
      hintLadder: [
        "Why would stretch breaks help? (reason)",
        "What proof backs that reason? (evidence)",
        "Keep both tied to the claim."
      ]
    },
    {
      id: "g6.fall.ela.w5.d2.q5",
      type: "short_answer",
      stem: "Build on YOUR claim from yesterday. Write one reason and one piece of evidence that supports it.",
      rubric: {
        level3: "Reason clearly supports the writer's own claim AND evidence is specific and relevant.",
        level2: "Reason or evidence present but one is vague or loosely connected.",
        level1: "Missing reason or evidence, or unrelated to the claim."
      },
      exemplar: "Claim: add a crosswalk near the park. Reason: kids cross there daily and it's dangerous. Evidence: I counted 22 kids crossing in 30 minutes after school, with cars going 30 mph.",
      hintLadder: [
        "Recall your claim from Day 1.",
        "Add the strongest 'why' (reason).",
        "Back it with something specific you could show."
      ]
    }
  ],
  reflectionPrompt: "Which is harder for your argument — finding a reason or finding real evidence? What evidence could you go collect this week?",
  misconceptionBank: [
    {
      id: "assertion-as-evidence",
      label: "Treats repeating the claim as evidence",
      description: "Supports a claim by just restating it more forcefully instead of giving proof.",
      coachMove: "Ask 'how do you KNOW?' until they reach a fact, example, or number — that's the evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Spot the Real Evidence",
      prompt:
        "Claim: 'Our town should plant more trees before winter.' Two supports show up: (A) 'Trees are pretty and everyone loves them.' (B) 'A city study found streets with trees stay up to 10°F cooler in fall heat waves.' Which one is REAL evidence — and why?",
      answer: "(B) is real evidence: it's specific, measurable, and relevant. (A) is just a vague assertion — 'everyone loves them' proves nothing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Evidence Harvest Basket",
      challenge:
        "Like gathering apples in fall, go 'harvest' evidence for your claim. Collect 3 different pieces of support — a fact, an example, and something you could actually count or observe — and sort them into your basket.",
      steps: [
        "Write your claim at the top of the page.",
        "Harvest evidence #1: a fact or statistic.",
        "Harvest evidence #2: a real example or story.",
        "Harvest evidence #3: something you could go count or measure yourself."
      ],
      deliverable: "An 'evidence basket' chart with your claim and 3 distinct pieces of support, each labeled fact / example / observation.",
      choiceBoard: [
        "Draw a basket and fill it with your 3 evidence cards.",
        "Make a 'reason → evidence' flowchart for your claim.",
        "Write a short paragraph in claim → reason → evidence order."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w5.d2.arena1",
          type: "multiple_choice",
          stem: "Claim: 'The town should add a fall farmers' market.' Which is the STRONGEST evidence?",
          choices: [
            "A neighboring town's fall market drew 800 shoppers and added $12,000 in sales for local farms last October.",
            "Farmers' markets are great.",
            "I love apple cider.",
            "Everyone knows markets are fun."
          ],
          answerIndex: 0,
          explanation: "It's specific, relevant, and uses real numbers tied directly to the claim. The others are vague assertions or personal taste.",
          hintLadder: [
            "Strong evidence is specific and relevant.",
            "Which option has real numbers connected to the claim?",
            "The neighboring-town data with shoppers and sales."
          ]
        },
        {
          id: "g6.fall.ela.w5.d2.arena2",
          type: "short_answer",
          stem: "Claim: 'Our class should take a fall nature walk each week.' Give one reason AND one specific piece of evidence that supports it.",
          rubric: {
            level3: "Provides a relevant reason AND specific evidence (a fact, example, or plausible data) that supports the claim.",
            level2: "Gives a reason but evidence is vague, or evidence without a clear reason.",
            level1: "Restates the claim or gives unrelated support."
          },
          exemplar: "Reason: short outdoor breaks help students refocus. Evidence: studies show that even a 15-minute walk in nature improves attention and lowers stress in students.",
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
        "Pretend you're raking a big pile of fall leaves: reach down and across, pull back, and twist gently to each side. Do 8 slow 'rakes' per side, breathing out on each pull.",
      scienceTieIn: "Gentle twisting movement boosts blood flow and oxygen to your brain, which helps you think more clearly when you sit back down.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which was harder today — finding a reason or finding real evidence? Name one piece of evidence you could actually go collect this week to make your argument stronger.",
      badge: { id: "fall-evidence-harvester", name: "Evidence Harvester", emoji: "🧺" },
      estimatedMinutes: 7
    }
  }
};
