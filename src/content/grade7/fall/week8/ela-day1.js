// Grade 7 ELA/Writing — Fall Expedition, Week 8 (Harvest Showcase), Day 1.
// Topic: plan a cross-subject showcase presentation (Grade 7: thesis-driven,
// audience-analyzed, synthesis across subjects).

export const fallG7ElaW8D1 = {
  id: "g7.fall.ela.w8.d1",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your showcase presentation",
  topicTag: "presentation-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.7.4", "CCSS.ELA-LITERACY.W.7.4"],
  hook: "It's showcase week — your capstone! This year you don't just line up your best work, you build it around a single controlling idea (a thesis) that ties every subject together. Today you plan a presentation that argues, not just reports.",
  miniLesson: [
    "A capstone showcase is organized around a thesis — one arguable controlling idea that your featured work proves. Everything you include should earn its place by supporting that thesis.",
    "Analyze your audience first: what they already know, what they care about, and what will convince THEM shapes which evidence you lead with.",
    "Sequence for a build: arrange your 2–3 strongest pieces so each raises the stakes and transitions signal HOW one piece extends or complicates the last — not just 'next, here is...'."
  ],
  workedExample: {
    prompt: "Turn a fall ecosystem project into a thesis-driven 3-part plan (not just a tour of your work).",
    steps: [
      "Thesis: 'Small imbalances compound — losing one keystone species can unravel an entire system.'",
      "Opening hook tied to the thesis: 'Pull one thread and the whole tapestry can come apart.'",
      "Build the middle so evidence escalates: food-web diagram (the connections) → energy-flow data (the 10% cost) → keystone case study (the collapse) — each piece proves more of the thesis.",
      "Closing returns to the thesis, now earned: balance is fragile because everything is connected."
    ],
    answer: "Thesis first, then order evidence so each piece proves more of it, then close by earning the thesis back."
  },
  items: [
    {
      id: "g7.fall.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "What makes a Grade 7 capstone showcase different from simply showing your best pieces?",
      choices: [
        "It uses more slides",
        "It is organized around a thesis — one arguable idea the featured work proves",
        "It avoids evidence to save time",
        "It shows every piece you made this season"
      ],
      answerIndex: 1,
      explanation: "A capstone is thesis-driven: a controlling idea unifies the pieces, so the showcase argues rather than merely reports.",
      hintLadder: [
        "A tour lists work; a capstone makes a point.",
        "What one word means a controlling, arguable idea?",
        "It is built around a thesis."
      ]
    },
    {
      id: "g7.fall.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why analyze your AUDIENCE before choosing which evidence to lead with?",
      choices: [
        "So you can use longer words",
        "Because what convinces a particular audience shapes which evidence lands first and hardest",
        "Audiences do not affect a presentation",
        "To make the talk longer"
      ],
      answerIndex: 1,
      explanation: "Audience analysis (what they know and value) determines which evidence is most persuasive to them, so you sequence for impact.",
      hintLadder: [
        "Would you convince a scientist and a friend the same way?",
        "Different audiences find different evidence persuasive.",
        "Analyze them to choose what to lead with."
      ],
      misconceptionsTargeted: ["audience-blind-showcase"]
    },
    {
      id: "g7.fall.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "A strong Grade 7 transition between two showcase pieces does what?",
      choices: [
        "Just says 'next'",
        "Signals HOW the second piece extends, deepens, or complicates the first",
        "Repeats the title",
        "Introduces an unrelated topic"
      ],
      answerIndex: 1,
      explanation: "Sophisticated transitions show the logical relationship between pieces (extends, complicates, deepens), building an argument rather than a list.",
      hintLadder: [
        "A weak transition just moves on.",
        "A strong one names the relationship between pieces.",
        "It shows how one piece extends or complicates the next."
      ]
    },
    {
      id: "g7.fall.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence THESIS for your fall showcase that a reasonable person could disagree with, then name the 2–3 pieces of work that would prove it.",
      rubric: {
        level3: "States a genuinely arguable thesis (not a topic label) AND names 2–3 specific pieces, each clearly connected to proving the thesis.",
        level2: "Has a thesis and pieces, but the thesis is a topic rather than a claim, OR the connections are thin.",
        level1: "Only a topic, no arguable claim, or no real evidence named."
      },
      exemplar: "Thesis: The most important thing I learned this fall is that reliable claims come from evidence, not confidence. Proof: my food-web diagram (systems have real, mappable structure), my survey stat card (a claim is only as strong as its sample), and my persuasive letter (arguments need sourced evidence).",
      hintLadder: [
        "A thesis is a claim someone could argue with, not just a subject.",
        "Ask: could a reasonable person disagree?",
        "Then match 2–3 pieces that each prove part of it."
      ]
    },
    {
      id: "g7.fall.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Write an opening HOOK for your showcase that both grabs attention AND previews your thesis.",
      rubric: {
        level3: "A genuine attention-grabber (question, surprising fact, or vivid image) that clearly points toward the thesis to come.",
        level2: "Either grabs attention OR previews the thesis, but not both.",
        level1: "A flat opening that does neither."
      },
      exemplar: "Two students each say 'trust me' — but only one hands you the survey of 200 people behind the claim. This fall taught me which one to believe, and why.",
      hintLadder: [
        "Open with a question, image, or surprising fact.",
        "Then bend it toward your controlling idea.",
        "The hook should hint at what you will prove."
      ]
    }
  ],
  reflectionPrompt: "A thesis-driven showcase takes a stand. What is the single idea you most want your audience to leave believing — and which piece of work is your strongest proof of it?",
  misconceptionBank: [
    {
      id: "audience-blind-showcase",
      label: "Plans a showcase without considering the audience",
      description: "Chooses evidence and order based only on personal preference, ignoring what would convince the actual listeners.",
      coachMove: "Ask 'who is watching, and what would THEY find most convincing?' before locking the sequence."
    },
    {
      id: "topic-instead-of-thesis",
      label: "States a topic where a thesis is needed",
      description: "Writes 'My showcase is about the fall season' instead of an arguable claim.",
      coachMove: "Push them to finish 'The most important thing I want you to believe is...' with something debatable."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Claim vs. Topic",
      prompt:
        "Here are two showcase openers: (A) 'My project is about ecosystems.' (B) 'Removing one animal can quietly collapse an entire forest.' One is a topic; one is a claim you could argue for. Which is which — and which would you rather sit and listen to?",
      answer:
        "A is a topic (nothing to prove); B is a claim/thesis (arguable, and it makes you want the evidence). A capstone showcase is built on B-style claims, not A-style labels — that is exactly the shift you make today.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Thesis Storyboard",
      challenge:
        "Storyboard your capstone showcase as a thesis-driven build: a HOOK that previews your controlling idea, a MIDDLE where your 2–3 pieces escalate the argument, and a CLOSING that earns the thesis back. Label each transition with the relationship it signals (extends / complicates / deepens).",
      steps: [
        "Write your one-sentence arguable thesis at the top of the board.",
        "Panel 1: a hook that grabs attention AND previews the thesis.",
        "Panel 2: order your 2–3 pieces so evidence escalates; label each transition (extends / complicates / deepens).",
        "Panel 3: a closing that restates the thesis as now-proven, not just repeated."
      ],
      deliverable: "A labeled thesis storyboard: hook, escalating middle with named transitions, and an earned closing.",
      choiceBoard: [
        "Draw a 3-panel thesis storyboard with labeled transitions.",
        "Write a one-page outline with thesis, escalating evidence, and closing.",
        "Make a set of presenter cue cards, each headed by the thesis point it advances."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Thesis Planner Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "Which opener is a true THESIS (an arguable controlling idea) rather than a topic or a flat opening?",
          choices: [
            "Today I will talk about the fall season.",
            "My project covers a few subjects.",
            "The evidence I gathered this fall shows that access, not attitude, is what really changes people's habits.",
            "Um, so, here is my presentation."
          ],
          answerIndex: 2,
          explanation: "'Access, not attitude, changes habits' is arguable and directional — a thesis. The others announce a topic or stall, with nothing to prove.",
          hintLadder: [
            "Which one could a reasonable person disagree with?",
            "A thesis makes a claim; the others just announce.",
            "The 'access, not attitude' line is the thesis."
          ]
        },
        {
          id: "g7.fall.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Draft a mini-plan for any fall topic: write ONE arguable thesis and name TWO pieces of evidence, ordering them so the second raises the stakes above the first.",
          rubric: {
            level3: "A genuinely arguable thesis AND two evidence pieces clearly ordered so the second escalates (deepens/complicates) the first.",
            level2: "Thesis and two pieces present, but the escalation/order is unclear or one piece is off-topic.",
            level1: "Missing the arguable thesis or the ordered evidence."
          },
          exemplar: "Thesis: A claim is only as trustworthy as its sample. First: a poll of 10 friends (easy but weak). Second: a survey of 200 students (harder, but far more convincing) — showing exactly why sample size is the whole argument.",
          hintLadder: [
            "Start with a claim someone could argue with.",
            "Pick two pieces; make the second stronger evidence.",
            "Order them so the stakes rise from first to second."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake Out the Nerves",
      prompt:
        "Stand and shake out each arm for 5 seconds, then each leg, then roll your neck slowly side to side. Take one big breath in and let it whoosh out. Now say your thesis out loud once, standing tall.",
      scienceTieIn: "Light movement releases physical tension, which lowers the nervous signals that spike right before presenting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Capstone check: in one sentence, what is your showcase's thesis — and which single piece of fall work is its strongest proof?",
      badge: { id: "g7-fall-thesis-architect", name: "Thesis Architect", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
