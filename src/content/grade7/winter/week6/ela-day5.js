// Grade 7 ELA/Writing — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 5. Grade 7 counterpart: the invention pitch, raised from claim/reasons/
// evidence/call-to-action to a full argument with a counterargument and rebuttal.

export const winterG7ElaW6D5 = {
  id: "g7.winter.ela.w6.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Persuasive invention pitch with counterargument and rebuttal",
  topicTag: "argument-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.1.B"],
  hook: "Anyone can say 'my invention is great.' A Grade 7 pitch does more: it makes a precise claim, backs it with evidence, AND takes on the strongest objection head-on. Today you pitch a winter invention that survives its own toughest critic.",
  miniLesson: [
    "A strong argument has a precise, arguable CLAIM, then REASONS supported by EVIDENCE (facts, examples, or data) — not just opinions stated louder.",
    "The move that separates Grade 7 writing is the COUNTERARGUMENT: you name the strongest objection a reader could raise, honestly.",
    "Then you REBUT it — you explain why your idea still holds despite that objection. A pitch that ignores objections is weaker than one that answers them."
  ],
  workedExample: {
    prompt: "Turn this into a mini-argument with a counterargument and rebuttal: 'Schools should give students heated lockers in winter.'",
    steps: [
      "Claim: Schools in cold climates should install heated lockers.",
      "Reason + evidence: Wet coats and boots don't dry between classes, so students sit cold all day; a warm locker dries gear and keeps students focused.",
      "Counterargument: A critic might say heated lockers cost too much energy.",
      "Rebuttal: Low-wattage drying racks use little power and can run only during school hours, so the cost stays small while the benefit is daily."
    ],
    answer: "Claim + reason/evidence + a named objection (energy cost) + a rebuttal (low-wattage, timed) — that's a full Grade 7 argument."
  },
  items: [
    {
      id: "g7.winter.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Which is the strongest, most arguable CLAIM for an invention pitch?",
      choices: [
        "Winter is cold.",
        "My heated glove-dryer helps students because it is good.",
        "Schools should provide glove-dryers because cold, wet hands lower focus and safety.",
        "Everyone knows gloves get wet."
      ],
      answerIndex: 2,
      explanation: "A strong claim is arguable and points to reasons — it says what should happen and hints at why, unlike a fact or a vague 'it's good.'",
      hintLadder: [
        "A claim should be arguable, not just a fact.",
        "Which option states a position AND points to a reason?",
        "The glove-dryer claim tied to focus and safety."
      ]
    },
    {
      id: "g7.winter.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "What is the purpose of including a counterargument in your pitch?",
      choices: [
        "To confuse the reader",
        "To honestly name the strongest objection so you can answer it",
        "To make your pitch longer",
        "To agree with critics and give up your claim"
      ],
      answerIndex: 1,
      explanation: "A counterargument names the best objection; answering it makes your argument more convincing, not weaker.",
      hintLadder: [
        "It's about objections, not filler.",
        "Do you name a weak objection or the strongest one?",
        "Name the strongest so you can rebut it."
      ],
      misconceptionsTargeted: ["counterargument-is-surrender"]
    },
    {
      id: "g7.winter.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "A pitch says: 'Some may argue solar boot-warmers won't work on gray winter days. But they store charge from any daylight and hold it for hours.' The second sentence is a...",
      choices: [
        "Claim",
        "Counterargument",
        "Piece of evidence with no purpose",
        "Rebuttal"
      ],
      answerIndex: 3,
      explanation: "The first sentence raises the objection (counterargument); the second answers it — that's a rebuttal.",
      hintLadder: [
        "Which sentence RAISES a worry and which ANSWERS it?",
        "The answer to an objection is the rebuttal.",
        "'But they store charge...' rebuts the objection."
      ]
    },
    {
      id: "g7.winter.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Write a claim for a winter invention, ONE reason with evidence, and ONE counterargument you could later rebut. Label each part.",
      rubric: {
        level3: "Includes a clear arguable claim, a reason backed by specific evidence, and a plausible counterargument — all three labeled.",
        level2: "Has all three parts but one is vague or the counterargument is weak/unrelated.",
        level1: "Missing the counterargument, or claim/evidence are just opinions."
      },
      exemplar: "Claim: Bus stops in cold towns should have solar warming benches. Reason+evidence: Students wait up to 15 minutes in freezing wind, and warmed surfaces prevent the shivering that makes it hard to focus at school. Counterargument: Some will say solar won't collect enough energy in winter.",
      hintLadder: [
        "State an arguable claim first.",
        "Give a reason and back it with a fact or example.",
        "Name the strongest objection a critic could raise."
      ]
    },
    {
      id: "g7.winter.ela.w6.d5.q5",
      type: "short_answer",
      stem: "Take this counterargument and write a REBUTTAL: 'Critics say heated sidewalks waste too much energy.' Answer it convincingly in 1–2 sentences.",
      rubric: {
        level3: "Directly answers the energy objection with a specific, plausible reason (e.g. targeted timing, low-power tech, safety savings) that keeps the original claim standing.",
        level2: "Answers the objection but vaguely or without a concrete reason.",
        level1: "Restates the objection, ignores it, or abandons the claim."
      },
      exemplar: "Heated sidewalks can run only when sensors detect ice and use low-wattage coils, so the energy cost is small — and it's offset by fewer injuries and no salt damage to run off into rivers.",
      hintLadder: [
        "Don't repeat the worry — answer it.",
        "Give a specific reason the cost is manageable.",
        "Show the claim still holds after your answer."
      ]
    }
  ],
  stretch: {
    stem: "Why is a pitch that names and rebuts an objection usually more persuasive than one that only lists benefits?",
    answer: "It shows you understand the reader's real concerns and have already thought them through, which builds trust; a benefits-only pitch leaves the biggest doubts unanswered.",
    explanation: "Addressing counterarguments signals credibility and rigor, which persuades skeptical readers more than repetition of benefits."
  },
  reflectionPrompt: "Think of something you tried to convince someone of recently. Did you answer their biggest objection — or only repeat why you were right?",
  misconceptionBank: [
    {
      id: "counterargument-is-surrender",
      label: "Thinks a counterargument weakens your case",
      description: "Believes admitting an objection means conceding the argument.",
      coachMove: "Show that naming an objection and answering it makes writing stronger — it's a setup for the rebuttal, not a surrender."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Pitch Showdown",
      prompt:
        "Two inventors pitch heated backpacks. One lists only benefits; the other names the biggest worry (battery weight) and answers it. Which pitch would win over a doubtful judge, and why?",
      answer:
        "The second pitch wins: by naming the strongest objection (battery weight) and rebutting it, the inventor shows they've thought it through — that earns a skeptical judge's trust more than a benefits-only list.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Bulletproof Pitch Card",
      challenge:
        "Design a one-card pitch for a winter invention that includes all four moves: Claim, Reason + Evidence, Counterargument, and Rebuttal — clearly labeled.",
      steps: [
        "Invent a winter problem-solver and write your arguable claim.",
        "Add one reason backed by a fact, example, or number.",
        "Name the strongest objection a critic would raise.",
        "Write a rebuttal that keeps your claim standing."
      ],
      deliverable: "A labeled pitch card with Claim, Reason+Evidence, Counterargument, and Rebuttal.",
      choiceBoard: [
        "Design the labeled pitch card (poster or slide).",
        "Record/script a 60-second spoken pitch that hits all four moves.",
        "Write a short dialogue where a critic objects and the inventor rebuts."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Argument Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence is the BEST rebuttal to 'Heated gloves are too expensive for schools'?",
          choices: [
            "A single classroom set can be shared and reused for years, spreading the cost thin while cutting cold-day absences.",
            "Heated gloves are really warm and nice.",
            "Everyone should just wear two pairs of gloves.",
            "Expensive things are always worth it."
          ],
          answerIndex: 0,
          explanation: "A rebuttal answers the specific objection (cost) with a concrete reason (shared, reused, reduces absences) that keeps the claim standing.",
          hintLadder: [
            "The objection is about cost — answer THAT.",
            "Which option gives a concrete cost-lowering reason?",
            "Shared, reused sets that cut absences."
          ]
        },
        {
          id: "g7.winter.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "Write a complete mini-argument (Claim → Reason+Evidence → Counterargument → Rebuttal) for any winter invention. Label all four parts.",
          rubric: {
            level3: "All four parts present, labeled, and logically connected: the rebuttal genuinely answers the counterargument and the evidence supports the claim.",
            level2: "All four parts present but one connection is weak (e.g. rebuttal doesn't fully answer the objection).",
            level1: "Missing a part or parts are unlabeled/disconnected."
          },
          exemplar: "Claim: Our town should add heated bus shelters. Reason+Evidence: Riders wait 10–20 minutes in sub-zero wind, and warm shelters reduce cold-related sickness. Counterargument: Critics say they cost too much to run. Rebuttal: Motion sensors heat shelters only when someone waits, keeping energy use — and cost — low.",
          hintLadder: [
            "Start with the claim, then reason+evidence.",
            "Name the strongest objection.",
            "Answer it so the claim still stands; label all four."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Two-Sided Breathing",
      prompt:
        "Sit tall. Breathe in for 4 counts thinking 'my side,' out for 4 counts thinking 'their side.' Repeat 5 times. Considering both sides calmly is exactly what a counterargument asks of your mind.",
      scienceTieIn: "Slow paced breathing lowers your heart rate and quiets the stress response, which makes it easier to fairly weigh an opposing view instead of reacting defensively.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What winter problem would you most want to solve? Write your claim and the one objection you'd most need to answer to win people over.",
      badge: { id: "g7-winter-rebuttal-ranger", name: "Rebuttal Ranger", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
