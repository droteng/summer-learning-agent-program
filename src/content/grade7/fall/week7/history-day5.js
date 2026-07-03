// Grade 7 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 5. Topic: build an evidence-based cause-and-effect map. Week
// capstone — grade-7 depth (weighted multi-causal maps + corroborated links).

export const fallG7HistoryW7D5 = {
  id: "g7.fall.hist.w7.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Build an evidence-based cause-and-effect map",
  topicTag: "cause-effect-map",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.6-8", "C3.D2.His.16.6-8"],
  hook: "This week's capstone is an evidence-based cause-and-effect map: not just boxes and arrows, but WEIGHTED links backed by corroborated evidence. Today you bring the whole week together.",
  miniLesson: [
    "A grade-7 cause-effect map weights its arrows: some links are necessary (thick arrows), others merely contributing (thin arrows). Not every arrow carries equal force.",
    "Each key arrow should be corroborated — labeled with a short source or reason so the link rests on evidence, not just assertion.",
    "Strong maps are multi-causal: some events show several arrows in (multiple causes) and several out (multiple effects), and the analyst can identify the single pivotal link the chain depends on."
  ],
  workedExample: {
    prompt: "Map this chain with weighted, evidenced links: farming surplus → cities → writing.",
    steps: [
      "Draw boxes: surplus, specialization, cities, writing.",
      "Weight the arrows: surplus → specialization is NECESSARY (thick); specialization → cities is contributing alongside defense needs (thin).",
      "Corroborate a link: label 'cities → writing' with evidence — 'early tablets are trade/tax records.'",
      "Identify the pivot: surplus, the box the rest depends on, and note what breaks if removed."
    ],
    answer: "A weighted map where surplus → specialization is the necessary pivot, each key arrow labeled with corroborating evidence."
  },
  items: [
    {
      id: "g7.fall.hist.w7.d5.q1",
      type: "multiple_choice",
      stem: "On a weighted cause-and-effect map, a THICKER arrow between two boxes is used to show that the link is...",
      choices: [
        "prettier than the others",
        "a necessary cause the effect could not happen without",
        "the newest event",
        "unimportant"
      ],
      answerIndex: 1,
      explanation: "Weighting arrows by thickness marks necessary (strong) links versus merely contributing (thin) ones.",
      hintLadder: [
        "Thickness stands for strength of the link.",
        "Which kind of cause is the strongest?",
        "A necessary cause the effect can't happen without."
      ]
    },
    {
      id: "g7.fall.hist.w7.d5.q2",
      type: "multiple_choice",
      stem: "What turns a cause-and-effect map from an ASSERTION into an evidence-based analysis?",
      choices: [
        "Using more colors",
        "Labeling key arrows with a corroborating source or reason",
        "Drawing bigger boxes",
        "Adding more arrows regardless of evidence"
      ],
      answerIndex: 1,
      explanation: "Labeling links with corroborating evidence means each claimed cause rests on a source or reason, not mere assertion.",
      hintLadder: [
        "An assertion just states; an analysis backs it up.",
        "What could you attach to each arrow to support it?",
        "A corroborating source or reason."
      ],
      misconceptionsTargeted: ["unsupported-arrows"]
    },
    {
      id: "g7.fall.hist.w7.d5.q3",
      type: "multiple_choice",
      stem: "An event box has THREE arrows pointing IN and TWO pointing OUT. The best reading is that the event...",
      choices: [
        "is drawn incorrectly",
        "had three contributing causes and led to two different effects",
        "happened three times",
        "had no real impact"
      ],
      answerIndex: 1,
      explanation: "Arrows in are causes and arrows out are effects, so three in and two out means three causes fed the event and it produced two effects.",
      hintLadder: [
        "Arrows IN = causes; arrows OUT = effects.",
        "Three in and two out means how many of each?",
        "Three causes, two effects."
      ],
      misconceptionsTargeted: ["arrows-only-one-direction"]
    },
    {
      id: "g7.fall.hist.w7.d5.q4",
      type: "short_answer",
      stem: "Outline a 4-box cause-and-effect map for a topic of your choice. Mark ONE link as necessary and ONE as contributing, and give a corroborating reason or source for one of the arrows.",
      rubric: {
        level3: "4 causally ordered boxes, one link correctly marked necessary and one contributing, AND a corroborating source/reason on one arrow.",
        level2: "Has the boxes and weighting but the corroboration is missing or vague.",
        level1: "Boxes don't form a causal chain, or no weighting or corroboration."
      },
      exemplar: "Boxes: heavy autumn rains → river flooded → bridge washed out → market cut off. Necessary link: river flooded → bridge washed out (without the flood the bridge holds). Contributing link: heavy rains → river flooded (snowmelt upstream also mattered). Corroboration: a weather report shows record rainfall that week, supporting the rains → flood arrow.",
      hintLadder: [
        "Pick a chain of 4 events you understand.",
        "Which link couldn't happen without its cause? Mark it necessary.",
        "Add a source or reason to one arrow to corroborate it."
      ]
    },
    {
      id: "g7.fall.hist.w7.d5.q5",
      type: "short_answer",
      stem: "Capstone reflection: in your cause-effect map this week, which single link was the PIVOT the whole chain depends on? Explain what would break if it were removed, and how you'd corroborate that it really mattered.",
      rubric: {
        level3: "Identifies a pivotal link, explains how removing it collapses or redirects downstream events, AND names evidence that would corroborate its importance.",
        level2: "Names a pivot and the downstream effect but corroboration is thin.",
        level1: "No clear pivot, or no reasoning about removal or corroboration."
      },
      exemplar: "In farming surplus → specialization → cities → writing, the pivot is the surplus. Remove it and specialization can't happen, so cities never form and writing — which grew from city record-keeping — never develops. I'd corroborate its importance by pointing to the archaeological pattern that permanent cities appear only after grain-storage sites, showing the surplus really came first.",
      hintLadder: [
        "Which box or link do the most others depend on?",
        "Imagine erasing it — which downstream boxes vanish?",
        "What evidence would show that link truly mattered?"
      ]
    }
  ],
  reflectionPrompt: "Evidence-based cause-effect maps help in science, debate, and decision-making. Where else could a weighted, corroborated map help you understand something?",
  misconceptionBank: [
    {
      id: "arrows-only-one-direction",
      label: "Thinks each event has only one cause and one effect",
      description: "Draws single in/out arrows, missing that events can have several weighted causes and effects.",
      coachMove: "Encourage multiple arrows and ask 'what else caused this?' and 'what else did this cause?' — then weight them."
    },
    {
      id: "unsupported-arrows",
      label: "Draws arrows without evidence",
      description: "Asserts causal links on a map without corroborating any of them.",
      coachMove: "Ask 'what source or reason backs this arrow?' so at least the key links rest on evidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Weighted Arrow",
      prompt:
        "On a map, one arrow is drawn THICK and labeled 'a tax record confirms this,' while another is thin and unlabeled. What TWO different things is the mapmaker telling you with those two arrows?",
      answer:
        "The thick arrow says this link is a strong/necessary cause AND that it's corroborated by evidence (the tax record). The thin, unlabeled arrow says this link is weaker (contributing) and not yet backed by a source — a weaker part of the argument.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Evidence Map",
      challenge:
        "Build the week's capstone: a cause-and-effect map with WEIGHTED arrows (necessary vs. contributing), at least one branching event, and corroborating labels on the key links.",
      steps: [
        "Choose your historical chain and lay out the events as boxes.",
        "Connect them with arrows, drawing necessary links thick and contributing links thin.",
        "Add at least one branch: a box with two arrows in (two causes) or two out (two effects).",
        "Label your key arrows with a short corroborating source or reason, then star the pivotal link."
      ],
      deliverable: "A weighted cause-and-effect map with thick/thin arrows, at least one branch, corroborating labels on key links, and a starred pivot.",
      choiceBoard: [
        "Draw it by hand with thick/thin arrows and evidence tags.",
        "Build it digitally as connected shapes with a legend for arrow weights.",
        "Make it a wall display with yarn (thick vs. thin strands) and sticky-note sources."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Evidence-Map Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.hist.w7.d5.arena1",
          type: "multiple_choice",
          stem: "Two mapmakers diagram the same event. Mapmaker A draws every arrow the same thickness with no labels; Mapmaker B draws necessary links thick, contributing links thin, and labels key arrows with sources. Whose map is the stronger historical ARGUMENT, and why?",
          choices: [
            "A, because equal arrows look neater",
            "B, because it weights causes by importance and corroborates the key links",
            "They're equal, because both have arrows",
            "A, because fewer labels are easier to read"
          ],
          answerIndex: 1,
          explanation: "B's map distinguishes necessary from contributing causes and backs key links with evidence, making it a stronger, more defensible argument than A's undifferentiated, unsupported arrows.",
          hintLadder: [
            "A stronger argument shows which causes matter most.",
            "Which map weights the links AND cites evidence?",
            "Mapmaker B weights and corroborates."
          ]
        },
        {
          id: "g7.fall.hist.w7.d5.arena2",
          type: "short_answer",
          stem: "On your capstone map, pick the pivotal link. Explain (1) why it's necessary using the removal test, (2) what downstream events collapse without it, and (3) one source that would corroborate the link.",
          rubric: {
            level3: "Identifies a pivotal link, applies the removal test, lists the downstream events that collapse, AND names a corroborating source — all three parts.",
            level2: "Covers two of the three parts clearly; the third is thin or missing.",
            level1: "Names a link without the removal test, downstream reasoning, or corroboration."
          },
          exemplar: "Pivot: farming surplus → specialization. Removal test: without a surplus, everyone must farm, so specialization can't occur — it's necessary. Downstream, cities and then writing both collapse, since both depend on specialized city life. Corroboration: archaeological records show cities appear only after grain-storage sites, evidence that the surplus really came first and enabled the rest.",
          hintLadder: [
            "Name the link the most others depend on.",
            "Run the removal test, then list what downstream boxes vanish.",
            "Add one source that would confirm the link mattered."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Trace the Weighted Path",
      prompt:
        "Place 4 spots as event boxes. Walk the arrow-path in order, stomping HARD on necessary links and stepping softly on contributing ones. At each box, say aloud one word of evidence. Then branch to a fifth spot for a second effect.",
      scienceTieIn: "Pairing strong vs. soft movements with strong vs. weak causal links uses your motor memory to encode the weighting, making the map's logic stick better than reading alone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Beyond history, where could a weighted, evidence-based cause-and-effect map help you — planning a project, settling a debate, or making a decision? Sketch one thick arrow and label it with your evidence.",
      badge: { id: "g7-fall-evidence-cartographer", name: "Evidence Cartographer", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
