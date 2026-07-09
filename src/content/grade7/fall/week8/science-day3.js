// Grade 7 Science — Fall Expedition, Week 8 (Harvest Showcase), Day 3.
// Topic: fall science synthesis — systems thinking, energy flow, and
// evidence-based explanation (Grade 7: feedback loops, matter/energy tracing,
// argument from evidence).

export const fallG7ScienceW8D3 = {
  id: "g7.fall.sci.w8.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 3,
  subject: "Science",
  topic: "Fall science synthesis",
  topicTag: "synthesis-review",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-4", "NGSS.MS-LS2-3"],
  hook: "This season you observed change, mapped food webs, and found patterns. Today you think like a systems scientist: trace matter and energy through a whole system, spot feedback loops, and build an explanation from evidence — the science story behind your showcase.",
  miniLesson: [
    "Systems thinking: an ecosystem is a set of connected parts; a change in one part ripples through the others, sometimes amplifying (a feedback loop).",
    "Energy flows one way and shrinks ~10% per trophic level, but MATTER cycles — decomposers return nutrients so the system can keep going.",
    "A scientific EXPLANATION is a claim backed by evidence and reasoning (CER): state what happens, cite the observation, and explain the mechanism WHY."
  ],
  workedExample: {
    prompt: "Sea otters are removed from a kelp forest. Trace the system change and identify the feedback.",
    steps: [
      "Claim: removing otters causes the kelp forest to collapse.",
      "Evidence: without otters, sea urchins (their prey) multiply unchecked.",
      "Reasoning (mechanism): more urchins eat more kelp; less kelp means fewer hiding spots and food, so still more urchins survive — a reinforcing feedback loop that accelerates the collapse.",
      "System view: one removed species destabilizes energy flow and habitat across the whole web."
    ],
    answer: "Otter loss → urchin boom → kelp loss → even more urchins (reinforcing feedback) → system collapse."
  },
  items: [
    {
      id: "g7.fall.sci.w8.d3.q1",
      type: "multiple_choice",
      stem: "Which statement is a scientific INFERENCE (a reasoned explanation) rather than a direct observation?",
      choices: [
        "Shorter daylight is triggering the tree to shut down chlorophyll for winter.",
        "A squirrel carried an acorn up the trunk.",
        "The maple's leaves are orange and falling.",
        "There are acorns scattered on the ground."
      ],
      answerIndex: 0,
      explanation: "The daylight-trigger statement explains a mechanism you reason out; the others report what is directly seen.",
      hintLadder: [
        "Which one explains a WHY you can't directly see?",
        "Three describe visible facts; one gives a mechanism.",
        "The 'shorter daylight triggering shutdown' statement is the inference."
      ]
    },
    {
      id: "g7.fall.sci.w8.d3.q2",
      type: "multiple_choice",
      stem: "In an ecosystem, energy and matter behave differently. Which statement is correct?",
      choices: [
        "Both energy and matter cycle endlessly with no loss.",
        "Matter is lost as heat; energy is recycled by decomposers.",
        "Energy flows one way and shrinks each level, while matter cycles and is reused.",
        "Neither energy nor matter moves between organisms."
      ],
      answerIndex: 2,
      explanation: "Energy flows one direction and dissipates (~10% passes up each level); matter cycles as decomposers return nutrients for reuse.",
      hintLadder: [
        "Think about what decomposers return to the soil.",
        "One of these two gets reused; the other keeps being lost.",
        "Energy flows and shrinks; matter cycles."
      ],
      misconceptionsTargeted: ["energy-recycles"]
    },
    {
      id: "g7.fall.sci.w8.d3.q3",
      type: "multiple_choice",
      stem: "Removing a keystone species can trigger a REINFORCING FEEDBACK LOOP. What does that mean here?",
      choices: [
        "The system quickly returns to normal on its own.",
        "The lost species instantly comes back.",
        "Nothing else in the web is affected.",
        "One change amplifies itself, so the disruption keeps accelerating."
      ],
      answerIndex: 3,
      explanation: "A reinforcing loop feeds on itself (more urchins → less kelp → conditions favor even more urchins), accelerating the change rather than settling it.",
      hintLadder: [
        "Reinforcing means the change feeds itself.",
        "Recall otters → urchins → kelp.",
        "Each step makes the next step bigger, so it accelerates."
      ]
    },
    {
      id: "g7.fall.sci.w8.d3.q4",
      type: "short_answer",
      stem: "Pick one fall science idea (energy vs. matter, feedback loops, keystone effects, or patterns as function) and write a CER micro-explanation for your showcase: a Claim, one piece of Evidence, and the Reasoning that connects them.",
      rubric: {
        level3: "Clear claim, relevant evidence, AND reasoning that explains the mechanism linking evidence to claim — accurate and audience-friendly.",
        level2: "Has claim and evidence but reasoning is missing or shallow, or a small inaccuracy.",
        level1: "Just a statement with no real evidence or reasoning, or inaccurate."
      },
      exemplar: "Claim: energy limits how many top predators a forest can hold. Evidence: only about 10% of energy passes to each higher level. Reasoning: because so much energy is lost as heat at every step, the top level has very little left, which is why there are far fewer foxes than rabbits.",
      hintLadder: [
        "State your claim in one sentence.",
        "Give one observation or fact as evidence.",
        "Explain the mechanism that links the evidence to the claim."
      ]
    },
    {
      id: "g7.fall.sci.w8.d3.q5",
      type: "short_answer",
      stem: "Systems thinking: describe a chain of at least THREE connected effects that follow from one change in an ecosystem you know, and label whether the loop reinforces (accelerates) or balances (stabilizes) the change.",
      rubric: {
        level3: "Traces a clear 3+ step causal chain from a single change AND correctly labels it as reinforcing or balancing with a reason.",
        level2: "Traces a chain but it is under 3 steps or the loop label is missing/unjustified.",
        level1: "Names only one effect or an inaccurate chain."
      },
      exemplar: "Fewer wolves → more deer → deer overeat young trees → riverbanks erode without roots → fish habitat degrades. This is a reinforcing chain: each step worsens the last, so the disruption grows rather than settling.",
      hintLadder: [
        "Start with one specific change.",
        "Follow it through at least three linked effects.",
        "Decide: does the chain accelerate the change or stabilize it?"
      ]
    }
  ],
  reflectionPrompt: "Systems thinking means seeing connections, not just parts. Where else in your life (a friend group, a schedule, a habit) does one small change ripple through the whole system?",
  misconceptionBank: [
    {
      id: "energy-recycles",
      label: "Thinks energy cycles like matter",
      description: "Believes decomposers recycle energy the way they recycle nutrients.",
      coachMove: "Contrast the two: matter cycles back into the soil, but energy is lost as heat at each step and must be resupplied by the sun."
    },
    {
      id: "species-are-independent-g7",
      label: "Underestimates feedback in ecosystems",
      description: "Sees a species removal as a single effect rather than a self-amplifying chain.",
      coachMove: "Trace one removal through 3+ steps and ask whether each step makes the next bigger (reinforcing) or smaller (balancing)."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Where Does the Green Go?",
      prompt:
        "In fall, green leaves reveal hidden reds and yellows. The pigments were there all along. Here's the systems question: what CHANGE in the tree's environment sets off the whole shutdown, and what does the tree gain by doing it?",
      answer:
        "Shortening daylight triggers the tree to stop making chlorophyll and pull nutrients back into itself before dropping the leaves — a mechanism that conserves resources for winter. One environmental change (less light) sets off a whole cascade inside the tree.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Systems Map",
      challenge:
        "Build a systems map of a real outdoor spot: draw the living things AND arrows showing energy flow, then trace what happens through the whole system if you remove one part. Mark at least one feedback loop.",
      steps: [
        "List living things you've actually seen in one spot; sort into producers, consumers, decomposers.",
        "Draw arrows for energy flow (who eats whom) and a separate arrow showing matter cycling back via decomposers.",
        "Pick one species to remove and trace the ripple through 3+ steps.",
        "Circle one reinforcing OR balancing feedback loop and label which it is."
      ],
      deliverable: "A labeled systems map with energy-flow arrows, a matter-cycle arrow, a traced removal, and one labeled feedback loop.",
      choiceBoard: [
        "Draw a systems map with a labeled feedback loop.",
        "Make a before/after pair showing a removal cascading through 3+ steps.",
        "Build an energy-pyramid + matter-cycle poster contrasting the two."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Systems Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.sci.w8.d3.arena1",
          type: "multiple_choice",
          stem: "Which correctly describes a BALANCING (stabilizing) feedback loop in an ecosystem?",
          choices: [
            "More urchins → less kelp → conditions favor even more urchins.",
            "More rabbits → more foxes → fewer rabbits, which brings the population back toward balance.",
            "Removing a species has no effect on any other.",
            "Energy is recycled endlessly with no loss."
          ],
          answerIndex: 1,
          explanation: "A balancing loop pushes back toward equilibrium (more rabbits feed more foxes, which then reduce rabbits). The urchin example is reinforcing, not balancing.",
          hintLadder: [
            "Balancing means the loop pushes back toward normal.",
            "Which option corrects itself instead of accelerating?",
            "The rabbit–fox loop restores balance."
          ]
        },
        {
          id: "g7.fall.sci.w8.d3.arena2",
          type: "numeric",
          stem: "An energy pyramid starts with 5000 units in the plants. Using the ~10% rule, about how many units reach the THIRD level (the predators that eat the plant-eaters)?",
          answer: 50,
          tolerance: 0,
          unit: "units",
          hintLadder: [
            "10% passes to each level. Level 2 = 10% of 5000.",
            "Level 2 = 500 units; level 3 = 10% of 500.",
            "10% of 500 = 50 units."
          ],
          explanation: "Level 2 = 5000 × 0.10 = 500; level 3 = 500 × 0.10 = 50 units."
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: System Scan",
      prompt:
        "Look out a window or step outside. Silently trace ONE connection you can see — a bird to a tree, wind to leaves, sun to grass. Take 3 slow breaths as you follow that link.",
      scienceTieIn: "Noticing connections instead of isolated objects is exactly the systems-thinking skill scientists use to map how ecosystems respond to change.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fall science idea — energy vs. matter, feedback loops, keystone effects, or evidence-based explanation — will you feature in your showcase? Write one CER-style sentence you'd actually say.",
      badge: { id: "g7-fall-systems-thinker", name: "Systems Thinker", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
