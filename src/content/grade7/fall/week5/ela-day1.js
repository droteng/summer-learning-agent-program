// Grade 7 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 1.
// Topic: making a strong claim — the heart of persuasion. Grade 7 depth:
// a precise, arguable claim that already anticipates opposition (a claim worth
// defending), not just a specific opinion.

export const fallG7ElaW5D1 = {
  id: "g7.fall.ela.w5.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Make a precise, arguable claim — the heart of persuasion",
  topicTag: "persuasive-claim",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.1.A"],
  hook: "Every argument stands or falls on its claim. At Grade 7, a strong claim isn't just specific — it's precise, arguable, and worth defending, meaning a thoughtful person could genuinely take the other side. Today you learn to write claims sharp enough to build a whole argument on.",
  miniLesson: [
    "A claim takes a debatable position: 'Our school should replace one weekly homework night with a supervised study hall.' Notice it's specific about WHAT and could reasonably be opposed.",
    "At Grade 7, precision matters: a strong claim narrows the scope (which students? how much? how often?) so you can actually defend it, instead of a sweeping statement you can't back up.",
    "The best claims are 'defensible AND debatable' — there's real evidence for your side, but a reasonable person could still object. If no one could disagree, it's a fact; if no one could support it with reasons, it's just taste."
  ],
  workedExample: {
    prompt: "Turn this broad topic into a precise, arguable Grade 7 claim: 'phones at school.'",
    steps: [
      "Pick a clear position on phones at school.",
      "Narrow the scope so it's defensible — which phones, when, for whom?",
      "Test it: is there evidence for it? Could a reasonable person still object? Both should be yes.",
      "Result: 'Seventh graders should be allowed to use phones during lunch but not during class, because lunchtime use doesn't disrupt instruction while a full ban ignores students' need to reach parents.'"
    ],
    answer: "Seventh graders should be allowed to use phones during lunch but not during class, because lunchtime use doesn't disrupt instruction while a full ban ignores students' need to reach parents."
  },
  items: [
    {
      id: "g7.fall.ela.w5.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is the most PRECISE, arguable claim (defensible AND debatable)?",
      choices: [
        "Our district should push middle-school start times to 8:30 a.m. to align with adolescent sleep research.",
        "Schools should be better.",
        "Mornings are hard for a lot of students.",
        "The sun rises in the east."
      ],
      answerIndex: 0,
      explanation: "It names a specific change (8:30 start, middle school), is backed by evidence (sleep research), yet a reasonable person could still object (busing, sports, parents' schedules). That's precise, defensible, and debatable.",
      hintLadder: [
        "Rule out the fact and the vague statements first.",
        "A strong Grade 7 claim is specific AND still genuinely debatable.",
        "The 8:30 start time names a concrete, evidence-backed, disputable position."
      ]
    },
    {
      id: "g7.fall.ela.w5.d1.q2",
      type: "multiple_choice",
      stem: "Why is 'Autumn is the best season' a weak claim for a Grade 7 argument essay?",
      choices: [
        "It is grammatically incorrect",
        "It is far too specific",
        "It is a verifiable fact",
        "It rests on personal taste, so there is no shared evidence a reader could weigh"
      ],
      answerIndex: 3,
      explanation: "'Best season' is a preference; there's no agreed-upon evidence to argue it. A claim needs to be supportable with reasons others can evaluate.",
      hintLadder: [
        "Could you give a reader evidence, or only your feelings?",
        "'Best' by whose measure? There isn't a shared one.",
        "Pure taste claims can't be argued with evidence."
      ],
      misconceptionsTargeted: ["opinion-equals-claim"]
    },
    {
      id: "g7.fall.ela.w5.d1.q3",
      type: "multiple_choice",
      stem: "A claim is 'worth defending' when...",
      choices: [
        "everyone already agrees with it, so it's safe",
        "no one could possibly find any evidence for it",
        "a thoughtful person could genuinely take the other side, yet you still have real evidence for yours",
        "it is the longest sentence in the essay"
      ],
      answerIndex: 2,
      explanation: "A claim worth defending is both debatable (a reasonable person could disagree) and defensible (you have evidence). If everyone agrees, there's nothing to argue.",
      hintLadder: [
        "If everyone already agrees, is there anything to argue?",
        "You need a real opponent AND real evidence.",
        "Debatable plus defensible."
      ]
    },
    {
      id: "g7.fall.ela.w5.d1.q4",
      type: "short_answer",
      stem: "Write a precise, arguable claim about something at your school or in your community you'd like to change. Then, in one sentence, name the strongest objection a reasonable person might raise against it.",
      rubric: {
        level3: "States a precise, narrowed, arguable position (not taste, not a bare fact) AND names a genuine, relevant objection a reasonable opponent could raise.",
        level2: "States a workable claim but it is vague, OR the objection is weak, off-topic, or missing.",
        level1: "States a fact or pure preference, or gives no real objection."
      },
      exemplar: "Claim: Our town should add a lighted crosswalk on Maple Street by the park, because dozens of kids cross a 35-mph road there after school. Objection: A lighted crosswalk is expensive, and drivers might ignore it anyway.",
      hintLadder: [
        "Pick a change you actually care about and narrow its scope.",
        "State your position in one precise sentence.",
        "Now imagine your smartest opponent — what would they say?"
      ]
    },
    {
      id: "g7.fall.ela.w5.d1.q5",
      type: "short_answer",
      stem: "Explain the difference between a CLAIM, a FACT, and a PREFERENCE, giving one example of each. Then explain which one an argument essay should be built on and why.",
      rubric: {
        level3: "Correctly distinguishes all three (fact = verifiable; preference = personal taste; claim = arguable position) with a correct example of each, AND states the essay is built on a claim because it is both debatable and supportable.",
        level2: "Distinguishes the three but one example is off, or the 'why build on a claim' reasoning is thin.",
        level1: "Confuses the categories or omits examples/reasoning."
      },
      exemplar: "A fact is verifiable, like 'a week has 7 days.' A preference is personal taste, like 'I like pumpkin bread.' A claim takes an arguable position, like 'students should get later start times.' An argument essay is built on a claim because a claim can be both disputed and supported with evidence — a fact needs no arguing and a preference can't be argued.",
      hintLadder: [
        "Can everyone verify a fact? Can anyone argue a preference?",
        "A claim sits between them: disputable but supportable.",
        "Give one clear example of each, then say which anchors an essay."
      ]
    }
  ],
  reflectionPrompt: "What's one change you genuinely want to argue for this fall — and what's the toughest objection you'll have to answer? Save your claim; you'll build a whole letter around it this week, counterargument included.",
  misconceptionBank: [
    {
      id: "opinion-equals-claim",
      label: "Confuses a taste preference with an arguable claim",
      description: "Thinks 'I like X' or 'X is the best' is the same as a claim that can be supported with shared evidence.",
      coachMove: "Ask: 'Could you hand a reader EVIDENCE for this that they could weigh, or is it only what you personally like?'"
    },
    {
      id: "vague-claim",
      label: "Writes a claim too broad to defend",
      description: "States a sweeping position ('schools should be better') that can't be supported because its scope is undefined.",
      coachMove: "Push for scope: 'Better how? For whom? By how much?' Narrow until the claim is defensible."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Claim, Fact, or Just Taste?",
      prompt:
        "Three autumn statements: (A) 'Pumpkin spice is the tastiest fall flavor.' (B) 'Our school should host a fall harvest festival to fund the library.' (C) 'The harvest festival raised $2,000 last year.' Which one is a debatable CLAIM you could build an argument on — and why aren't the other two?",
      answer: "(B) is the claim — specific, supportable, and a reasonable person could still object. (A) is pure taste (no shared evidence). (C) is a fact (verifiable, nothing to argue). Only (B) needs defending.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Change Campaign Poster",
      challenge:
        "Pick one thing you'd change at your school or town this fall. Design a campaign poster whose headline is a precise, arguable claim, and add a smaller 'But some say...' banner naming the strongest objection — showing you already know the other side exists.",
      steps: [
        "Brainstorm a fall-season change you actually care about.",
        "Write it as ONE precise, narrowed, arguable claim.",
        "Below it, add a 'But some say...' line naming a real objection.",
        "Design the poster with the claim as the giant headline and the objection banner beneath."
      ],
      deliverable: "A campaign poster with a precise arguable claim as its headline and a 'But some say...' objection banner.",
      choiceBoard: [
        "Draw the campaign poster with claim headline and objection banner.",
        "Record a 30-second campaign speech that states your claim and admits one objection.",
        "Make a 4-panel comic where a character sharpens a vague opinion into a precise, defensible claim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Claim Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w5.d1.arena1",
          type: "multiple_choice",
          stem: "Which is the STRONGEST Grade 7 persuasive claim — precise, defensible, AND debatable?",
          choices: [
            "Autumn has leaves.",
            "Our school should plant 20 native maples along the front lawn to cut summer cooling costs and shade the walkway.",
            "I think fall is nice.",
            "Trees are good for everyone, obviously."
          ],
          answerIndex: 1,
          explanation: "It's precise (20 native maples, a named location), backed by a benefit you can measure (cooling costs, shade), and still debatable (cost, maintenance) — the marks of a strong claim. The others are facts, vague preferences, or overclaims.",
          hintLadder: [
            "Rule out the fact and the vague statements.",
            "Precise scope PLUS a benefit you could measure PLUS still-disputable.",
            "The 20-native-maples statement fits all three."
          ]
        },
        {
          id: "g7.fall.ela.w5.d1.arena2",
          type: "short_answer",
          stem: "Take this broad topic — 'the school cafeteria' — and turn it into a precise, arguable claim. Then name one reasonable objection to it.",
          rubric: {
            level3: "Produces a precise, narrowed, arguable claim about the cafeteria (not fact or pure taste) AND names a genuine, relevant objection.",
            level2: "Produces a workable claim but it is vague, or the objection is weak or missing.",
            level1: "States a fact, a taste preference, or gives no real objection."
          },
          exemplar: "Claim: The cafeteria should offer a hot vegetarian entree every day so the roughly 40 students who don't eat meat get a full meal. Objection: Adding a daily second entree could raise food costs and kitchen workload.",
          hintLadder: [
            "Take a clear, narrowed position on the cafeteria.",
            "Make it specific — what exactly should change, and for whom?",
            "Then name the objection a reasonable person would raise."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Stand & Declare",
      prompt:
        "Stand tall like you're about to give a speech. Reach both arms up high as you say your claim out loud, then sweep them down and shake them out. Repeat 4 times, saying it a little more confidently each round.",
      scienceTieIn: "Big, confident posture and movement can actually lower stress hormones and help you feel braver before speaking up — useful when you defend an argument out loud.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your fall claim in a single precise sentence, then underneath it write 'But some say...' and finish it. You've just found the objection you'll have to answer all week.",
      badge: { id: "g7-fall-claim-architect", name: "Claim Architect", emoji: "📣" },
      estimatedMinutes: 7
    }
  }
};
