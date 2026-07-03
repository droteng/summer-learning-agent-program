// Grade 7 World/Current Affairs — Spring Expedition, Week 7 (Voices for the
// Earth), Day 4. Topic: analyzing environmental issues around the world —
// pollution, habitat loss, and clean water — by tracing causes, effects across
// borders, and evaluating which community responses actually work.

export const springG7WorldW7D4 = {
  id: "g7.spring.world.w7.d4",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Analyzing global environmental issues: causes, cross-border effects, and effective responses",
  topicTag: "global-environmental-issues",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.6", "C3.D2.Civ.12"],
  hook: "Spring reminds us the Earth can renew itself — but only where people act wisely. Around the world, pollution, habitat loss, and water shortages are tangled together, cross borders, and demand more than good intentions. Today you move past naming these problems to ANALYZING them: tracing their causes, following their effects across borders, and judging which responses actually work.",
  miniLesson: [
    "Environmental issues usually have a CHAIN of causes and effects. A drained wetland is not just 'habitat loss' — draining it also removes a natural filter, so downstream water gets dirtier and flooding worsens. Analyzing means tracing the whole chain, not just naming the label.",
    "These problems cross borders through shared systems: rivers carry pollution downstream into other regions, ocean currents move plastic between continents, and wind carries smog across national lines. This is why one country's choices can become another country's crisis.",
    "Not every community response works equally well. A one-time clean-up treats a symptom; a law that stops pollution at the source treats the cause. Effective responses tend to be systemic (rules, infrastructure, restored ecosystems) rather than only temporary — and evaluating them means asking whether they fix the cause or just the symptom."
  ],
  workedExample: {
    prompt: "A coastal town's fish catch is shrinking, its beaches are covered in plastic, and the plastic seems to arrive from far upriver. Analyze the issue and evaluate two possible responses.",
    steps: [
      "Trace the cause chain: plastic dumped upstream travels down the river, reaches the sea, and harms the fish the town depends on.",
      "Note the cross-border effect: the harm lands on a community that did not create most of the waste.",
      "Compare two responses — a weekly beach clean-up (treats the symptom locally) versus an upstream law banning river dumping (treats the cause at the source).",
      "Evaluate: the upstream law is more effective long-term because it stops new plastic at the source, though clean-ups still help remove what has already arrived."
    ],
    answer: "The issue is upstream plastic pollution traveling downriver to harm a coastal community. Beach clean-ups treat the symptom, but an upstream anti-dumping law is more effective because it stops the pollution at its source; the best plan combines both."
  },
  items: [
    {
      id: "g7.spring.world.w7.d4.q1",
      type: "multiple_choice",
      stem: "Draining a wetland to build on it causes habitat loss. What is an ADDITIONAL downstream effect of losing that wetland?",
      choices: [
        "The area automatically gets cleaner air worldwide.",
        "Water downstream can get dirtier and flooding can worsen, because the wetland no longer filters water or absorbs excess rain.",
        "Nothing else changes at all.",
        "The ocean instantly rises everywhere."
      ],
      answerIndex: 1,
      explanation: "Wetlands filter water and absorb floodwater, so draining one not only destroys habitat but also dirties downstream water and increases flooding — a chain of effects.",
      hintLadder: [
        "Wetlands do more than house animals — what else do they DO?",
        "Think about what a wetland does for water and floods.",
        "Losing that filter dirties downstream water and worsens flooding."
      ]
    },
    {
      id: "g7.spring.world.w7.d4.q2",
      type: "multiple_choice",
      stem: "Why can one country's pollution become another country's problem?",
      choices: [
        "Because pollution is always invisible.",
        "Because shared systems — rivers, ocean currents, and wind — carry pollution across borders to places that did not create it.",
        "Because every country shares the same government.",
        "Because pollution only affects the place where it starts."
      ],
      answerIndex: 1,
      explanation: "Rivers, ocean currents, and wind move pollution across national borders, so harm often lands far from the source — a key reason environmental issues are global.",
      hintLadder: [
        "Do rivers, oceans, and wind stop at borders?",
        "What do these shared systems carry from place to place?",
        "They move pollution across borders to other communities."
      ],
      misconceptionsTargeted: ["pollution-stays-put"]
    },
    {
      id: "g7.spring.world.w7.d4.q3",
      type: "multiple_choice",
      stem: "A river is polluted by a factory upstream. Which community response treats the CAUSE rather than only the symptom?",
      choices: [
        "Volunteers scoop trash from the riverbank every weekend forever.",
        "The community passes and enforces a law that stops the factory from dumping waste into the river.",
        "Residents put up signs saying the river is dirty.",
        "People simply avoid the river and hope it improves."
      ],
      answerIndex: 1,
      explanation: "Stopping the factory from dumping addresses the source of the pollution (the cause), while clean-ups, signs, and avoidance only manage the symptoms after the harm is done.",
      hintLadder: [
        "Which response stops NEW pollution from entering the river?",
        "Clean-ups handle waste already there — what stops it at the source?",
        "Enforcing a no-dumping law treats the cause."
      ]
    },
    {
      id: "g7.spring.world.w7.d4.q4",
      type: "short_answer",
      stem: "Choose ONE global environmental issue (pollution, habitat loss, or water scarcity). Trace at least TWO linked effects it causes, then propose a response and explain why it treats the cause, not just the symptom.",
      rubric: {
        level3: "Names a real issue, traces a chain of at least two linked effects, AND proposes a response with a clear explanation of why it addresses the cause rather than only the symptom.",
        level2: "Names the issue and gives some effects and a response, but the chain is thin OR the cause-vs-symptom reasoning is unclear.",
        level1: "Names an issue but gives no real chain of effects or no cause-focused response."
      },
      exemplar: "Deforestation causes habitat loss, and losing the trees also means less rainfall absorption, so soil erodes and nearby rivers flood and fill with mud. A strong response is protecting the forest by law and replanting native trees, which treats the cause by keeping the ecosystem intact, unlike just clearing mud from rivers after each flood.",
      hintLadder: [
        "Pick one issue, then ask 'and then what happens?' twice.",
        "Follow the chain of effects, not just the first label.",
        "Propose a response that stops the problem at its source."
      ]
    },
    {
      id: "g7.spring.world.w7.d4.q5",
      type: "short_answer",
      stem: "Two towns face the same polluted river. Town A holds monthly clean-ups; Town B passes a law banning upstream dumping. Analyze which response is likely MORE effective over ten years, and explain your reasoning.",
      rubric: {
        level3: "Argues that Town B's law is generally more effective long-term because it stops pollution at the source, while acknowledging clean-ups still help with existing waste — showing genuine evaluation, not just a guess.",
        level2: "Picks a response with a partial reason but does not clearly weigh source-vs-symptom or long-term effect.",
        level1: "Picks with no real reasoning or misunderstands the two responses."
      },
      exemplar: "Over ten years, Town B's law is likely more effective because it stops new pollution from ever entering the river, so the water can actually recover. Town A's clean-ups help remove trash already there, but without stopping the source, new waste keeps arriving, so the problem never really ends. The best plan would combine both, but the law does the deeper work.",
      hintLadder: [
        "Which response stops new pollution, and which only removes old pollution?",
        "Think about what happens over many years if the source is never fixed.",
        "Weigh source-treating against symptom-treating, and explain your pick."
      ]
    }
  ],
  reflectionPrompt: "Of the world's environmental issues you analyzed — pollution, habitat loss, water scarcity — which one has a cause you could realistically ask your community to address? Save your thinking; it may become the backbone of your persuasive piece.",
  misconceptionBank: [
    {
      id: "pollution-stays-put",
      label: "Thinks pollution stays where it starts",
      description: "Believes environmental harm only affects the exact place it originates, missing that rivers, currents, and wind carry it across borders.",
      coachMove: "Trace the path: 'Where does this river flow, and where does this wind blow? Follow the pollution and see whose backyard it ends up in.'"
    },
    {
      id: "symptom-equals-solution",
      label: "Confuses treating a symptom with solving the cause",
      description: "Thinks a clean-up or a warning sign fully solves a problem, overlooking that new harm keeps arriving unless the source is stopped.",
      coachMove: "Ask: 'Does this stop NEW pollution, or just remove what is already here? A real fix stops the source.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fix the Symptom or the Source?",
      prompt:
        "Your region's river keeps filling with plastic from a factory upstream. Would you rather (A) organize a huge, popular monthly clean-up that removes tons of trash, or (B) fight for a law that stops the factory from dumping in the first place? Which fixes the CAUSE, and why might the best answer use both?",
      answer: "(B) fixes the cause by stopping new pollution at the source; (A) only treats the symptom by removing waste already there. The best plan combines both — the law prevents new harm while clean-ups handle what has already arrived.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Cause-and-Effect Investigative Report",
      challenge:
        "You are an investigative reporter tracing an environmental issue to its roots. Create a report on ONE global issue that maps its chain of causes and effects, follows it across borders, and evaluates a community response as either a real fix or just a patch.",
      steps: [
        "Choose your issue and a real place in the world where it is happening.",
        "Map the cause-and-effect chain: what starts it, and what harms follow (at least two linked effects).",
        "Show how the issue crosses a border via a river, current, or wind.",
        "Evaluate one community response — does it treat the cause or only the symptom? — and end with a verdict headline."
      ],
      deliverable: "An investigative report (written, drawn as a front page, or performed) that maps an issue's cause-effect chain, shows a cross-border effect, and evaluates whether a response fixes the cause.",
      choiceBoard: [
        "Write a front-page exposé with a cause-and-effect diagram.",
        "Perform a 60-second investigative broadcast tracing the problem to its source.",
        "Draw a labeled 'flow map' following the pollution from source to distant victim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Global Analysis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.world.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Coral reefs are dying worldwide, in part from warmer, more acidic seawater caused by carbon emissions from many countries. Which statement BEST analyzes this as a cross-border issue?",
          choices: [
            "Only the country nearest the reef is responsible and affected.",
            "Emissions from many nations warm and acidify shared oceans, so reefs far from any single source die, harming fishers and coastal towns across borders.",
            "Reefs die only because local swimmers touch them.",
            "Nothing connects distant countries to a dying reef."
          ],
          answerIndex: 1,
          explanation: "Carbon emissions from many nations change the shared ocean, so reefs suffer far from any single emitter and the harm spreads across borders — a true cross-border analysis.",
          hintLadder: [
            "Do emissions come from one country or many?",
            "The ocean is shared — who feels the effects?",
            "Many nations' emissions harm reefs and towns across borders."
          ]
        },
        {
          id: "g7.spring.world.w7.d4.arena2",
          type: "short_answer",
          stem: "A city's tap water is unsafe because upstream farms wash fertilizer into the river, and the city also has old lead pipes. Analyze the TWO causes, then recommend responses that treat each cause — not just the symptom.",
          rubric: {
            level3: "Correctly identifies both causes (upstream fertilizer runoff AND aging lead pipes) AND recommends a cause-treating response for each (e.g., rules/buffers to cut farm runoff; replacing lead pipes) rather than only filtering at the tap.",
            level2: "Identifies both causes but gives a cause-treating response for only one, or one response is only a symptom fix.",
            level1: "Misses a cause or offers only symptom fixes."
          },
          exemplar: "There are two causes: fertilizer runoff from upstream farms and the city's old lead pipes. To treat the runoff, the region could require farms to use buffer strips and limit fertilizer near the river; to treat the pipes, the city should replace the lead lines. Just adding a tap filter would only mask both problems.",
          hintLadder: [
            "Name the TWO separate sources of the unsafe water.",
            "For each source, ask what stops the problem at that source.",
            "Avoid answers that only filter at the tap — that is a symptom fix."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Trace the Flow",
      prompt:
        "Trace an environmental chain with your body: point to a 'source' high up, then sweep your arm slowly down and across the room like a river carrying pollution downstream, ending with open hands at the 'community' that receives it. Do it slowly 4 times, breathing deeply and following the whole path.",
      scienceTieIn: "Slow, sweeping full-body movement boosts blood flow and oxygen to the brain, helping you think clearly through multi-step chains of cause and effect.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Of the environmental issues you analyzed, pick one and write its cause-and-effect chain in a single flowing sentence (source → effect → who it reaches). Then note the ONE response that would treat the cause. This may power your persuasive piece.",
      badge: { id: "g7-spring-earth-analyst", name: "Earth Systems Analyst", emoji: "🌏" },
      estimatedMinutes: 7
    }
  }
};
