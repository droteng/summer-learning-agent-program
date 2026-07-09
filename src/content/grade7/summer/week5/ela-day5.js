// Grade 7 ELA/Writing — Summer Voyage, Week 5 (Earth and Inventions), Day 5.
// Topic: the persuasive pitch. Grade 7 rigor: build a full argument — claim +
// reasons + evidence + counterargument + rebuttal + call to action — to pitch
// an invention that solves a real problem (the week's project).

export const summerG7ElaW5D5 = {
  id: "g7.summer.ela.w5.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "The persuasive pitch (claim + reasons + evidence + counterargument + rebuttal + call to action)",
  topicTag: "persuasive-pitch",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.1.B"],
  hook: "A great invention still needs a great pitch. Today you build a full persuasive argument — a clear claim, solid reasons and evidence, a fair look at the other side, a rebuttal, and a call to action — to convince someone your invention is worth building.",
  miniLesson: [
    "A persuasive pitch has a backbone: a CLAIM (your position), REASONS that support it, and EVIDENCE (facts, numbers, examples) that back each reason. Evidence is what turns an opinion into an argument.",
    "Strong arguments face the other side head-on. A COUNTERARGUMENT is the best objection someone might raise; a REBUTTAL answers it — 'Some might say ___, but ___.' Addressing objections makes you MORE convincing, not less.",
    "End with a CALL TO ACTION: a clear, specific request telling the audience exactly what to do next — 'fund this prototype,' 'vote yes,' 'let us test it in one classroom.'"
  ],
  workedExample: {
    prompt: "Turn a rough idea — 'solar phone charger for the park' — into a mini persuasive pitch with all the parts.",
    steps: [
      "CLAIM: 'Our park should install solar phone-charging benches.'",
      "REASON + EVIDENCE: They cut waste and cost — 'a solar bench runs on free sunlight, so it uses no grid electricity.'",
      "COUNTERARGUMENT + REBUTTAL: 'Some might say they cost too much up front, but they pay for themselves by using free solar power and drawing more visitors to the park.'",
      "CALL TO ACTION: 'Approve a trial of one solar bench this summer so we can measure the results.'"
    ],
    answer: "Claim → reason + evidence → counterargument + rebuttal → call to action: a full pitch, not just an opinion."
  },
  items: [
    {
      id: "g7.summer.ela.w5.d5.q1",
      type: "multiple_choice",
      stem: "In a persuasive pitch, what is the job of a COUNTERARGUMENT?",
      choices: [
        "To restate your claim in different words",
        "To end the pitch with a request",
        "To list only the facts that support you",
        "To fairly present the strongest objection to your claim"
      ],
      answerIndex: 3,
      explanation: "A counterargument names the best objection the other side might raise. Facing it (then rebutting it) makes your argument stronger and more credible.",
      hintLadder: [
        "The prefix 'counter-' means against.",
        "It's the OTHER side's best point.",
        "A counterargument fairly states the strongest objection."
      ]
    },
    {
      id: "g7.summer.ela.w5.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence is a REBUTTAL to the objection 'Solar chargers cost too much'?",
      choices: [
        "It's true they cost more up front, but they run on free sunlight and pay for themselves within a few years.",
        "Solar chargers are shiny and new.",
        "Everyone should like solar chargers.",
        "Solar chargers charge phones."
      ],
      answerIndex: 0,
      explanation: "A rebuttal acknowledges the objection ('true they cost more up front') and then answers it with evidence ('run on free sunlight, pay for themselves').",
      hintLadder: [
        "A rebuttal answers the objection — it doesn't ignore it.",
        "Look for 'it's true..., but...' that responds to the cost concern.",
        "The second choice admits the cost, then rebuts it with savings."
      ],
      misconceptionsTargeted: ["ignore-the-other-side"]
    },
    {
      id: "g7.summer.ela.w5.d5.q3",
      type: "multiple_choice",
      stem: "Which is the strongest CALL TO ACTION to end an invention pitch?",
      choices: [
        "Inventions are important to everyone.",
        "Thank you for listening today.",
        "Please approve funding for one prototype so we can test it in the park this summer.",
        "Solar power comes from the sun."
      ],
      answerIndex: 2,
      explanation: "A call to action makes a clear, specific request — exactly what you want the audience to DO next. The others are facts or filler.",
      hintLadder: [
        "A call to action tells the audience what to DO.",
        "Look for a specific, doable request.",
        "'Approve funding for one prototype...' is a clear action."
      ]
    },
    {
      id: "g7.summer.ela.w5.d5.q4",
      type: "short_answer",
      stem: "Write a persuasive CLAIM for an invention that solves a real problem, plus ONE reason backed by evidence (a fact, number, or example) that supports it.",
      rubric: {
        level3: "States a specific, arguable claim about an invention AND gives a clear reason supported by real evidence (fact, number, or concrete example).",
        level2: "States a claim and a reason, but the evidence is vague or missing.",
        level1: "No arguable claim, or only an opinion with no reason/evidence."
      },
      exemplar: "Claim: Our school should install refillable water-bottle stations. Reason + evidence: They cut plastic waste — one station can replace thousands of single-use bottles a year, keeping that plastic out of landfills.",
      hintLadder: [
        "First state your position clearly and specifically.",
        "Then give ONE reason it's a good idea.",
        "Back that reason with a fact, number, or real example."
      ]
    },
    {
      id: "g7.summer.ela.w5.d5.q5",
      type: "short_answer",
      stem: "Write a COUNTERARGUMENT and a REBUTTAL for this claim: 'Our town should build solar-powered streetlights.' Use the pattern 'Some might say ___, but ___.'",
      rubric: {
        level3: "Presents a fair, realistic objection (counterargument) AND a rebuttal that answers it with a reason or evidence, using the some-might-say-but pattern.",
        level2: "Includes both parts but the rebuttal is weak or the objection is a straw man.",
        level1: "Missing the counterargument or the rebuttal, or they don't connect."
      },
      exemplar: "Some might say solar-powered streetlights cost too much to install, but they run on free sunlight and use no grid electricity, so they save the town money on power bills every year and pay for themselves over time.",
      hintLadder: [
        "First, what's the BEST objection someone could raise? (cost, weather, upkeep)",
        "State it fairly with 'Some might say...'.",
        "Then answer it with a reason or evidence after 'but...'."
      ]
    }
  ],
  reflectionPrompt: "Think of the invention you'd most like to pitch. What's the single strongest objection someone could raise — and how would you rebut it?",
  misconceptionBank: [
    {
      id: "ignore-the-other-side",
      label: "Thinks a pitch is stronger if it ignores objections",
      description: "Believes that mentioning the other side weakens the argument, so leaves out counterarguments.",
      coachMove: "Explain that naming and answering the best objection shows you thought it through — it makes the audience trust you MORE, not less."
    },
    {
      id: "evidence-optional",
      label: "Treats reasons as enough without evidence",
      description: "Gives reasons but never backs them with facts, numbers, or examples.",
      coachMove: "For every reason, ask 'How do you KNOW?' Push for a fact, number, or concrete example to turn the reason into evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Pitch Wins?",
      prompt:
        "Two inventors pitch the same gadget. Pitch A: 'It's the best thing ever, trust me!' Pitch B: 'It cuts costs by 30%, and even though it costs more up front, it pays for itself in a year.' Which pitch would convince YOU — and what makes it stronger?",
      answer:
        "Pitch B wins. It gives EVIDENCE (a 30% number) and faces the cost objection with a rebuttal ('pays for itself in a year'). Pitch A is just an opinion with nothing to back it up — that's what makes B far more convincing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pitch Your Invention",
      challenge:
        "Write and design a one-page persuasive pitch for an invention that solves a real problem. Include every part: claim, at least two reasons with evidence, a counterargument, a rebuttal, and a call to action.",
      materials: ["Paper & pencil, OR a document/slide on a device"],
      steps: [
        "Write your CLAIM: what should be built, and why it matters.",
        "Add 2 reasons, each backed by evidence (a fact, number, or example).",
        "Add a counterargument ('Some might say...') and a rebuttal ('but...').",
        "End with a clear call to action telling the audience exactly what to do."
      ],
      deliverable: "A one-page pitch containing a claim, 2 evidence-backed reasons, a counterargument, a rebuttal, and a call to action.",
      choiceBoard: [
        "Write the one-page persuasive pitch with all six parts labeled.",
        "Record a 60-second spoken pitch video hitting each part in order.",
        "Design a pitch poster or slide with your claim as the headline and evidence as bullets."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Persuasion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w5.d5.arena1",
          type: "multiple_choice",
          stem: "Put the parts of a strong persuasive pitch in the most effective order.",
          choices: [
            "Call to action → claim → evidence → counterargument",
            "Claim → reasons with evidence → counterargument + rebuttal → call to action",
            "Counterargument → call to action → claim → evidence",
            "Evidence → call to action → claim → rebuttal"
          ],
          answerIndex: 1,
          explanation: "State your position first (claim), support it (reasons + evidence), address the other side (counterargument + rebuttal), then close by asking for action.",
          hintLadder: [
            "You state your position BEFORE proving it.",
            "The request to act comes LAST.",
            "Claim → evidence → counter + rebuttal → call to action."
          ]
        },
        {
          id: "g7.summer.ela.w5.d5.arena2",
          type: "short_answer",
          stem: "Write a mini-pitch (3–4 sentences) for this claim: 'Our school should start a tool-lending library so students can borrow inventing supplies.' Include at least one piece of evidence AND a call to action.",
          rubric: {
            level3: "Supports the claim with at least one real reason/evidence AND ends with a clear, specific call to action, in a coherent 3–4 sentence pitch.",
            level2: "Includes evidence OR a call to action but not both clearly, or the pitch is disorganized.",
            level1: "Restates the claim only, with no evidence and no call to action."
          },
          exemplar: "Our school should start a tool-lending library so students can borrow inventing supplies. Many students can't afford their own tools, so a shared library gives everyone a fair chance to build their ideas. It also cuts waste, since one drill can serve dozens of students instead of everyone buying their own. Let's approve a small pilot shelf this fall and track how many students use it.",
          hintLadder: [
            "Start by restating the claim, then give a reason WITH evidence.",
            "Add a fact or example that shows why it helps.",
            "Finish with a specific request — what should the school actually DO?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pitch Power Pose",
      prompt:
        "Stand tall in a confident 'presenter' pose — feet planted, shoulders back, chin up. Reach one arm out as if making your key point, then the other, then plant both hands like you're landing the call to action. Hold, breathe deep, and repeat 3 times.",
      scienceTieIn:
        "Confident, expansive posture can lower stress hormones and help you feel calmer and braver before speaking — real science that helps you deliver a persuasive pitch.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You've learned to build a full argument. Write the one-sentence CLAIM for the invention you'd most want to pitch — then note the strongest objection and how you'd rebut it.",
      badge: { id: "g7-persuasion-pitch-pro", name: "Persuasion Pitch Pro", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
