// Grade 7 ELA/Writing — Fall Expedition, Week 7 (Cause & Effect in History),
// Day 4. Topic: evidence-based cause-and-effect writing — grade-7 depth
// (claim + evidence + reasoning, distinguishing correlation from causation).

export const fallG7ElaW7D4 = {
  id: "g7.fall.ela.w7.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Write evidence-based cause-and-effect explanations",
  topicTag: "cause-effect-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.2", "CCSS.ELA-LITERACY.W.7.1.B"],
  hook: "Grade 7 writing doesn't just assert a cause — it PROVES one. Today you build cause-and-effect explanations that pair a claim with evidence and reasoning, and you learn to spot when writers confuse coincidence for cause.",
  miniLesson: [
    "A strong cause-and-effect paragraph follows Claim → Evidence → Reasoning: state the causal link, cite specific evidence, then explain HOW the evidence shows the mechanism.",
    "Correlation is not causation: two things rising together, or happening at the same time, doesn't prove one caused the other. Name the mechanism, or acknowledge it may be coincidence.",
    "Use precise linking words (because, consequently, as a result, therefore) AND evidence signals (records show, the data indicate, according to) so the reader can trace both the logic and the proof."
  ],
  workedExample: {
    prompt: "Turn this weak claim into an evidence-based cause-effect explanation: 'Cities grew because of farming.'",
    steps: [
      "Claim: A reliable food surplus from farming enabled the first cities.",
      "Evidence: Archaeological records show that early cities appear only after grain-storage sites, not before.",
      "Reasoning: Because stored surplus freed people from full-time farming, some could specialize as builders and traders — the mechanism that let dense settlements form.",
      "Combine into one tight paragraph linking claim, evidence, and reasoning."
    ],
    answer: "Because farming produced a storable surplus (evidence: cities appear only after storage sites), people could specialize instead of all farming, which is the mechanism that let cities grow."
  },
  items: [
    {
      id: "g7.fall.ela.w7.d4.q1",
      type: "multiple_choice",
      stem: "Which sentence is the STRONGEST evidence-based cause-and-effect claim?",
      choices: [
        "The market grew, and it was autumn.",
        "Because trade records show shipments tripled, the market grew — more goods meant more sellers and buyers.",
        "The market is large and important.",
        "Markets and festivals both happen in fall."
      ],
      answerIndex: 1,
      explanation: "Only this option pairs a claim with specific evidence (records showing tripled shipments) AND reasoning (the mechanism linking goods to growth).",
      hintLadder: [
        "Look for claim + evidence + reasoning together.",
        "Which one cites specific evidence AND explains the mechanism?",
        "The trade-records sentence proves the link instead of just asserting it."
      ]
    },
    {
      id: "g7.fall.ela.w7.d4.q2",
      type: "multiple_choice",
      stem: "'Ice cream sales and drowning both rise in summer, so ice cream causes drowning.' What is the flaw?",
      choices: [
        "The sentence is too short",
        "It treats correlation as causation, ignoring a shared cause (hot weather)",
        "It uses the wrong linking word",
        "There is no flaw"
      ],
      answerIndex: 1,
      explanation: "Both rise because of a third factor — hot weather — so the correlation doesn't prove ice cream causes drowning. That's correlation mistaken for causation.",
      hintLadder: [
        "Do both really cause each other, or share a cause?",
        "What third thing makes BOTH rise in summer?",
        "Hot weather drives both — correlation, not causation."
      ],
      misconceptionsTargeted: ["correlation-is-causation"]
    },
    {
      id: "g7.fall.ela.w7.d4.q3",
      type: "multiple_choice",
      stem: "In a Claim–Evidence–Reasoning paragraph, the REASONING sentence's job is to...",
      choices: [
        "restate the claim in new words",
        "explain HOW the evidence proves the causal link (the mechanism)",
        "list more facts",
        "introduce a new topic"
      ],
      answerIndex: 1,
      explanation: "Reasoning connects evidence to claim by explaining the mechanism — why that evidence supports that cause-effect link.",
      hintLadder: [
        "Evidence alone doesn't explain itself.",
        "What sentence tells the reader WHY the evidence proves the point?",
        "Reasoning explains the mechanism linking evidence to claim."
      ]
    },
    {
      id: "g7.fall.ela.w7.d4.q4",
      type: "short_answer",
      stem: "Write an evidence-based cause-and-effect paragraph (3–5 sentences) explaining how the fall harvest surplus led to the first cities. Include a claim, at least one piece of evidence, and reasoning that names the mechanism.",
      rubric: {
        level3: "A clear causal claim, specific evidence, AND reasoning that explains the mechanism (surplus → specialization → cities), using precise linking words.",
        level2: "Has claim and evidence but the reasoning/mechanism is thin, or only one linking word.",
        level1: "Lists facts or asserts the cause with no evidence or mechanism."
      },
      exemplar: "A storable food surplus was a necessary cause of the first cities. Archaeological records show that permanent cities appear only after grain-storage pits, not before them. Because stored surplus meant not everyone had to farm, some people could specialize as builders, traders, and record-keepers — and that specialization is the mechanism that allowed dense, permanent cities to grow.",
      hintLadder: [
        "Start with your causal claim (surplus enabled cities).",
        "Add a piece of evidence a reader could check.",
        "Explain the mechanism: WHY surplus led to cities, with linking words."
      ]
    },
    {
      id: "g7.fall.ela.w7.d4.q5",
      type: "short_answer",
      stem: "A writer claims: 'Test scores rose the same year the school repainted its walls, so the new paint improved learning.' Rewrite this as a more careful cause-and-effect statement that avoids the correlation-causation trap.",
      rubric: {
        level3: "Rewrites to acknowledge the timing is only a correlation AND either names a plausible real mechanism/cause or calls for evidence before claiming causation.",
        level2: "Softens the claim but doesn't clearly address the correlation-causation problem.",
        level1: "Keeps treating the coincidence as proof of cause."
      },
      exemplar: "Test scores rose the same year the walls were repainted, but the timing alone doesn't prove the paint caused it. Before claiming that, I'd look for a mechanism and evidence — perhaps a new teacher or study program that same year is the real cause, and the fresh paint is just a coincidence.",
      hintLadder: [
        "Does happening the same year prove the paint helped?",
        "Name what else could really have caused the rise.",
        "Rewrite so the timing is a correlation, not proof of cause."
      ]
    }
  ],
  reflectionPrompt: "Evidence-based cause-effect writing shows up in science labs, news, and debates. Where did you have to back up a 'why it happened' claim with evidence recently?",
  misconceptionBank: [
    {
      id: "correlation-is-causation",
      label: "Treats correlation as proof of causation",
      description: "Assumes that because two things happen together or rise together, one must cause the other.",
      coachMove: "Ask 'what's the mechanism, and could a third factor explain both?' before accepting a causal claim."
    },
    {
      id: "evidence-free-claim",
      label: "States a cause without evidence or reasoning",
      description: "Asserts a cause-effect link but never cites evidence or explains the mechanism.",
      coachMove: "Prompt the Claim–Evidence–Reasoning frame: 'What proof, and why does that proof show the link?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Cause or Coincidence?",
      prompt:
        "Every autumn, more hot cocoa is sold AND more people wear scarves. A friend says cocoa makes people wear scarves. What's the REAL explanation, and what writing trap did your friend fall into?",
      answer:
        "The real explanation is a shared cause: colder weather makes people BOTH drink cocoa and wear scarves. The friend fell into the correlation-causation trap — assuming two things that rise together must cause each other.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The Claim-Evidence-Reasoning Paragraph",
      challenge:
        "Turn a real autumn cause-and-effect chain into a tight paragraph built on the Claim → Evidence → Reasoning frame, with the mechanism made explicit.",
      steps: [
        "Pick a cause-and-effect link (like early frost → rushed harvest).",
        "Write a claim sentence stating the causal link.",
        "Add an evidence sentence a reader could check (a record, an observation, a statistic).",
        "Write a reasoning sentence explaining the MECHANISM, and check you haven't confused coincidence for cause."
      ],
      deliverable: "A 3-5 sentence paragraph with a clear claim, checkable evidence, and reasoning that names the mechanism.",
      choiceBoard: [
        "Write it about a historical chain.",
        "Write it as a short news report proving why something happened.",
        "Write it about a chain from your own autumn, then underline claim, evidence, and reasoning in three colors."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence gives a REAL cause-and-effect explanation instead of mistaking coincidence for cause?",
          choices: [
            "The festival and the first frost both happened in October, so the frost caused the festival.",
            "Because the harvest came in early, records show the village moved the festival up two weeks — the surplus was ready sooner.",
            "It was autumn, and there was a festival.",
            "Cocoa sales and scarf-wearing both rose, so cocoa caused the scarves."
          ],
          answerIndex: 1,
          explanation: "Only this option pairs a claim with evidence (records) and a mechanism (early harvest ready sooner). The others confuse shared timing or a third cause with real causation.",
          hintLadder: [
            "Rule out any sentence that says 'happened together, so one caused the other.'",
            "Look for evidence plus a real mechanism.",
            "The early-harvest sentence cites records and explains why."
          ]
        },
        {
          id: "g7.fall.ela.w7.d4.arena2",
          type: "short_answer",
          stem: "Rewrite this into an evidence-based cause-and-effect sentence with a claim, a piece of evidence, and reasoning: 'The first frost came early. Farmers rushed to bring in the pumpkins.'",
          rubric: {
            level3: "One rewrite that states the causal claim, cites or implies checkable evidence, AND explains the mechanism (why an early frost forces a rushed harvest).",
            level2: "Links the two events but is missing either clear evidence or the mechanism.",
            level1: "Leaves them loosely connected with no evidence or mechanism."
          },
          exemplar: "Because the first frost arrived weeks earlier than usual, farmers rushed to bring in the pumpkins — frost ruptures pumpkin cells and rots the crop, so the early cold left them no choice but to harvest fast.",
          hintLadder: [
            "State the causal claim first (early frost forced the rush).",
            "Add why frost threatens pumpkins (the mechanism/evidence).",
            "Combine into one sentence with a linking word."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Claim, Evidence, Reasoning Stretch",
      prompt:
        "Three linked stretches: reach UP high (your 'claim'), hold and press palms forward (your 'evidence'), then twist gently side to side (your 'reasoning' connecting them). Flow through all three, then take 3 slow breaths. Repeat twice.",
      scienceTieIn: "Sequencing three deliberate stretches boosts blood flow and gives your prefrontal cortex a reset, so you return to writing with sharper focus on structuring arguments.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one evidence-based cause-and-effect sentence about your day: state the cause, add a piece of evidence, and explain the mechanism. Did the evidence make it more convincing?",
      badge: { id: "g7-fall-evidence-architect", name: "Evidence Architect", emoji: "🧾" },
      estimatedMinutes: 7
    }
  }
};
