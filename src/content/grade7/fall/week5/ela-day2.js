// Grade 7 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 2.
// Topic: reasons and evidence — plus counterargument and rebuttal. Grade 7 depth:
// don't just support your claim, anticipate the opposing view and answer it.

export const fallG7ElaW5D2 = {
  id: "g7.fall.ela.w5.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Reasons, evidence, and counterargument",
  topicTag: "reasons-evidence",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1.B", "CCSS.ELA-LITERACY.W.7.1.A"],
  hook: "A claim backed only by your own reasons is half an argument. The other half — the part that actually changes minds — is naming the opposing view and answering it. Today you support your claim AND take on the counterargument with a rebuttal.",
  miniLesson: [
    "A reason answers 'why believe this?'; evidence is the proof (facts, data, examples). Strong support is relevant and specific — real numbers, not 'everybody knows.'",
    "A COUNTERARGUMENT is the strongest point the other side would make. Naming it shows you understand the issue and haven't ignored the hard part.",
    "A REBUTTAL answers that counterargument — you concede what's fair, then explain why your claim still holds. Structure: claim → reason → evidence → counterargument → rebuttal."
  ],
  workedExample: {
    prompt: "Claim: 'Our school should add secure bike racks.' Give a reason, evidence, a counterargument, and a rebuttal.",
    steps: [
      "Reason: more students would bike if they had a safe place to park.",
      "Evidence: a survey found 18 students said they'd bike but worry about theft.",
      "Counterargument: 'Bike racks cost money and only a few students would use them.'",
      "Rebuttal: The racks are a one-time cost of a few hundred dollars, and 18 riders is far from 'a few' — plus fewer car trips means safer drop-off for everyone."
    ],
    answer: "Reason: safe parking encourages biking. Evidence: 18 surveyed would bike but fear theft. Counter: racks cost money, few users. Rebuttal: one-time low cost, 18 riders isn't 'few,' and it eases car traffic."
  },
  items: [
    {
      id: "g7.fall.ela.w5.d2.q1",
      type: "multiple_choice",
      stem: "Which is the BEST evidence for the claim 'our library should stay open until 6 p.m.'?",
      choices: [
        "A survey of 200 students found 82 need quiet study space after 4 p.m., when the library currently closes.",
        "Libraries are important places.",
        "I really think it should stay open later.",
        "Everybody knows libraries are useful."
      ],
      answerIndex: 0,
      explanation: "It's specific, relevant, and uses real numbers (82 of 200) tied directly to the claim. The others are vague assertions.",
      hintLadder: [
        "Strong evidence is specific and relevant.",
        "Which option has real numbers tied to the claim?",
        "The survey of 200 students with 82 needing space."
      ]
    },
    {
      id: "g7.fall.ela.w5.d2.q2",
      type: "multiple_choice",
      stem: "What is the purpose of including a COUNTERARGUMENT in a persuasive essay?",
      choices: [
        "To confuse the reader so they give up",
        "To show you understand the opposing view and can answer it, which makes your argument more convincing",
        "To fill space when you run out of reasons",
        "To agree with the other side and drop your claim"
      ],
      answerIndex: 1,
      explanation: "Naming the opposing view and answering it (rebuttal) shows fairness and strength — you've considered the hard part instead of hiding from it.",
      hintLadder: [
        "Does ignoring the other side make you look stronger or weaker?",
        "A good arguer faces the best objection head-on.",
        "It shows you understand and can answer the opposition."
      ],
      misconceptionsTargeted: ["ignore-the-other-side"]
    },
    {
      id: "g7.fall.ela.w5.d2.q3",
      type: "multiple_choice",
      stem: "In a full Grade 7 argument, what comes right after you state the COUNTERARGUMENT?",
      choices: [
        "The conclusion, with no response to it",
        "A restatement of the counterargument, louder",
        "An unrelated personal story",
        "A rebuttal that concedes what's fair and explains why your claim still holds"
      ],
      answerIndex: 3,
      explanation: "A counterargument without a rebuttal just helps the other side. The rebuttal answers it: concede what's fair, then show why your claim survives.",
      hintLadder: [
        "If you name the opposing point, you have to DO something with it.",
        "You concede the fair part, then push back.",
        "That's the rebuttal."
      ]
    },
    {
      id: "g7.fall.ela.w5.d2.q4",
      type: "short_answer",
      stem: "Claim: 'Our class should have a 5-minute stretch break each hour.' Write a reason with evidence, then name one counterargument AND a rebuttal to it.",
      rubric: {
        level3: "Gives a relevant reason with specific evidence, names a genuine counterargument, AND rebuts it by conceding fairly and explaining why the claim still holds.",
        level2: "Has reason + evidence and a counterargument, but the rebuttal is weak, missing, or doesn't actually answer the counter.",
        level1: "Restates the claim, gives no real evidence, or omits the counterargument entirely."
      },
      exemplar: "Reason: short movement breaks help students refocus; studies show brief activity improves attention in middle schoolers. Counterargument: breaks eat up class time. Rebuttal: five minutes is a small cost, and refocused students actually cover material faster, so little real time is lost.",
      hintLadder: [
        "Give your 'why' and back it with a fact (reason + evidence).",
        "Now think like the teacher — what's the objection?",
        "Answer that objection without dropping your claim."
      ]
    },
    {
      id: "g7.fall.ela.w5.d2.q5",
      type: "short_answer",
      stem: "Build on YOUR claim from Day 1. Write one reason with specific evidence, then write the counterargument you named yesterday and a one- to two-sentence rebuttal.",
      rubric: {
        level3: "Reason clearly supports the writer's own claim with specific, relevant evidence, AND the counterargument is genuine and the rebuttal answers it convincingly.",
        level2: "Reason/evidence present and a counterargument named, but the rebuttal is vague or loosely connected.",
        level1: "Missing evidence, counterargument, or rebuttal, or unrelated to the writer's claim."
      },
      exemplar: "Claim: add a lighted crosswalk on Maple Street. Reason + evidence: kids cross a 35-mph road there daily — I counted 22 crossings in 30 minutes after school. Counterargument: it's expensive and drivers might ignore it. Rebuttal: a lighted crosswalk costs far less than one serious accident, and studies show flashing beacons cut driver non-yielding by more than half.",
      hintLadder: [
        "Recall your claim and its toughest objection from Day 1.",
        "Add your strongest reason with a specific, checkable piece of evidence.",
        "Then answer the objection — concede what's fair, then push back."
      ]
    }
  ],
  reflectionPrompt: "Which was harder today — supporting your claim or answering the other side? What evidence could you go collect this week to make your rebuttal even stronger?",
  misconceptionBank: [
    {
      id: "assertion-as-evidence",
      label: "Treats repeating the claim as evidence",
      description: "Supports a claim by restating it more forcefully instead of giving proof.",
      coachMove: "Ask 'how do you KNOW?' until they reach a fact, example, or number — that's the evidence."
    },
    {
      id: "ignore-the-other-side",
      label: "Thinks admitting the other side weakens the argument",
      description: "Avoids counterarguments, believing that naming the opposing view helps the opponent.",
      coachMove: "Point out that facing the best objection and answering it is what makes an argument look fair and strong; hiding from it looks like you can't answer it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Answer the Objection",
      prompt:
        "Claim: 'Our town should plant more trees before winter.' A neighbor objects: 'Trees drop leaves and clog the storm drains.' That's a fair point — what could you say back (a rebuttal) that concedes the leaf mess but keeps your claim standing?",
      answer: "A good rebuttal concedes the fair part, then pushes back: 'True, leaves need raking — but a fall cleanup day handles that, and trees keep streets up to 10°F cooler and soak up storm runoff the rest of the year.' You admit the cost and show the benefit still wins.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Counterargument Harvest Board",
      challenge:
        "Like harvesting a full fall basket, gather BOTH sides for your claim. Build a T-chart: on one side, 2 reasons with evidence for your claim; on the other, the single strongest objection — then write a rebuttal that answers it.",
      steps: [
        "Write your claim across the top of the page.",
        "Left column: harvest 2 supporting reasons, each with a specific piece of evidence.",
        "Right column: write the strongest objection the other side would raise.",
        "Below the chart, write a rebuttal that concedes what's fair and defends your claim."
      ],
      deliverable: "A T-chart with 2 reasons + evidence, one counterargument, and a written rebuttal beneath it.",
      choiceBoard: [
        "Draw the two-column 'for / against' harvest board with a rebuttal box.",
        "Make a 'claim → reason → evidence → counter → rebuttal' flow map.",
        "Write a short paragraph that moves through all five parts in order."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w5.d2.arena1",
          type: "multiple_choice",
          stem: "Claim: 'The town should add a fall farmers' market.' Which sentence is a proper REBUTTAL to the objection 'it will just lose money'?",
          choices: [
            "Farmers' markets are great, everyone loves them.",
            "I love apple cider, so it will work.",
            "That's a fair worry, but a neighboring town's fall market drew 800 shoppers and added $12,000 for local farms last October, so it more than covered its costs.",
            "The objection is wrong and that's final."
          ],
          answerIndex: 2,
          explanation: "A rebuttal concedes the fair concern ('that's a fair worry') then answers it with specific evidence ($12,000, 800 shoppers). The others dismiss or ignore the objection.",
          hintLadder: [
            "A rebuttal first admits what's fair, THEN answers with evidence.",
            "Which option responds to the money worry with real numbers?",
            "The one citing the neighboring town's $12,000 and 800 shoppers."
          ]
        },
        {
          id: "g7.fall.ela.w5.d2.arena2",
          type: "short_answer",
          stem: "Claim: 'Our class should take a fall nature walk each week.' Name one counterargument AND write a rebuttal that answers it with a reason or evidence.",
          rubric: {
            level3: "Names a genuine counterargument AND rebuts it by conceding fairly and answering with a relevant reason or specific evidence.",
            level2: "Names a counterargument but the rebuttal is vague or doesn't fully answer it.",
            level1: "No real counterargument, or no rebuttal."
          },
          exemplar: "Counterargument: weekly walks take time away from lessons. Rebuttal: it's true they use class time, but studies show even a 15-minute nature walk improves attention and lowers stress, so students return ready to learn more efficiently.",
          hintLadder: [
            "What's the strongest reason a teacher might say no?",
            "Concede the fair part of that objection.",
            "Then answer it with a reason or a fact."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Leaf-Rake Stretch",
      prompt:
        "Pretend you're raking a big pile of fall leaves: reach down and across, pull back, and twist gently to each side. Do 8 slow 'rakes' per side, breathing out on each pull.",
      scienceTieIn: "Gentle twisting movement boosts blood flow and oxygen to your brain, which helps you think more clearly when you sit back down to weigh both sides of an argument.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which was harder today — supporting your claim or answering the other side? Name one piece of evidence you could go collect this week to make your rebuttal unbeatable.",
      badge: { id: "g7-fall-rebuttal-ranger", name: "Rebuttal Ranger", emoji: "🧺" },
      estimatedMinutes: 7
    }
  }
};
