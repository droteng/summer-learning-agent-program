// Grade 7 History/Civics — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 4. Grade 7 counterpart of the Grade 6 mission: same topic (how inventions
// build on one another) raised to multi-causal analysis — weighing necessary vs.
// contributing conditions and corroborating claims about who improved what.

export const winterG7HistoryW6D4 = {
  id: "g7.winter.hist.w6.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Inventors, invention chains, and the conditions that drive them",
  topicTag: "history-of-invention",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2.6-8", "C3.D2.His.14.6-8"],
  hook: "The warm, lit room you sit in is the output of a long chain — but a chain isn't just one clever person after another. Each breakthrough needed the right conditions: earlier ideas, available materials, and a problem worth solving. Today you don't just order inventions — you weigh WHY each leap happened when it did.",
  miniLesson: [
    "Inventions build in chains, but historians distinguish a NECESSARY condition (without it the leap can't happen — e.g. an understanding of electricity before the bulb) from a CONTRIBUTING condition (it helped, but the leap could have happened without it).",
    "Attribution is rarely to one 'lone genius.' Edison improved the filament, but Swan, Latimer, and others solved parallel pieces. Good history CORROBORATES a claim across more than one source before crediting an individual.",
    "The Franklin stove (1740s) radiated more heat into a room using less wood than an open hearth. It succeeded because a real problem (wasted fuel and heat up the chimney) met available materials (cast iron) and prior fireplace design — necessary and contributing conditions lining up at once."
  ],
  workedExample: {
    prompt: "The electric light bulb 'built on' earlier inventions. Identify one NECESSARY condition and one CONTRIBUTING condition for it, and explain the difference.",
    steps: [
      "List what came before: firelight, candles, oil and gas lamps, and 1800s discoveries about electric current.",
      "Necessary condition: a working understanding of electricity — without it, no filament can glow at all.",
      "Contributing condition: the demand from gas-lit cities for a cleaner, safer light — it sped the work but wasn't strictly required for the bulb to be possible.",
      "The difference: remove a necessary condition and the invention is impossible; remove a contributing condition and it might still happen, just slower or differently."
    ],
    answer: "Necessary: knowledge of electricity (no bulb without it). Contributing: market demand for safer light (helped, but not strictly required). Necessary conditions make an invention possible; contributing ones make it more likely or faster."
  },
  items: [
    {
      id: "g7.winter.hist.w6.d4.q1",
      type: "multiple_choice",
      stem: "A historian says knowledge of electric current was a NECESSARY condition for the light bulb. What does that claim mean?",
      choices: [
        "It was a nice bonus but the bulb could have worked without it",
        "Without it, an electric bulb could not have been created at all",
        "It was the only cause of the bulb",
        "It happened after the bulb was invented"
      ],
      answerIndex: 1,
      explanation: "A necessary condition is one the outcome cannot occur without — remove it and the invention is impossible.",
      hintLadder: [
        "Necessary = the invention can't happen without it.",
        "Could a bulb glow with no understanding of electricity?",
        "No electricity knowledge, no electric bulb."
      ]
    },
    {
      id: "g7.winter.hist.w6.d4.q2",
      type: "multiple_choice",
      stem: "Two sources credit different people with 'inventing' the light bulb. What is the strongest historical move?",
      choices: [
        "Pick whichever source is longer",
        "Corroborate across multiple sources and describe it as improvements by several people",
        "Assume the first source you read is correct",
        "Conclude no one invented it"
      ],
      answerIndex: 1,
      explanation: "Corroboration — checking a claim across independent sources — shows the bulb was a chain of improvements by several inventors, not one person.",
      hintLadder: [
        "What do you do when two sources disagree?",
        "Cross-check rather than trust one.",
        "Corroborate, and credit the shared, verifiable improvements."
      ],
      misconceptionsTargeted: ["lone-genius-myth"]
    },
    {
      id: "g7.winter.hist.w6.d4.q3",
      type: "multiple_choice",
      stem: "Which best explains WHY the Franklin stove succeeded when it did?",
      choices: [
        "A single genius invented it from nothing",
        "A real problem (wasted heat/fuel) met available materials (cast iron) and earlier fireplace design",
        "It produced electricity for homes",
        "It replaced the light bulb"
      ],
      answerIndex: 1,
      explanation: "Inventions take off when a genuine problem, the right materials, and prior designs line up — necessary and contributing conditions together.",
      hintLadder: [
        "Think about what conditions had to line up.",
        "Problem + materials + prior design.",
        "It solved wasted heat using cast iron and earlier hearth ideas."
      ]
    },
    {
      id: "g7.winter.hist.w6.d4.q4",
      type: "short_answer",
      stem: "Choose ONE warmth or lighting technology. Name an earlier and a later version, then argue which single condition mattered MOST for the improvement (materials, prior knowledge, or demand) and why.",
      rubric: {
        level3: "Names an earlier and later version, selects one condition, and JUSTIFIES why it mattered most over the alternatives with specific reasoning.",
        level2: "Names both versions and a condition but the justification is vague or doesn't compare alternatives.",
        level1: "Only one version, or no reasoned choice of a condition."
      },
      exemplar: "Open hearths gave way to the cast-iron Franklin stove. The condition that mattered most was materials: people already wanted less wasteful heat (demand) and understood fireplaces (prior knowledge), but only affordable cast iron let a stove radiate heat without cracking — so materials unlocked the leap.",
      hintLadder: [
        "Pick heating OR lighting and two versions.",
        "Weigh materials vs. prior knowledge vs. demand.",
        "Argue which was most decisive and why the others weren't enough alone."
      ]
    },
    {
      id: "g7.winter.hist.w6.d4.q5",
      type: "short_answer",
      stem: "Write a cause-and-effect chain of at least THREE links showing how one weakness led to an improvement, which created a new problem, which led to the next improvement. Use 'because' or 'so.'",
      rubric: {
        level3: "Three or more clearly ordered links where each improvement both fixes a prior weakness AND introduces the problem the next link solves, connected with because/so.",
        level2: "Three links but one connection is weak or a new problem isn't identified.",
        level1: "Fewer than three links or no causal connectors."
      },
      exemplar: "Open fireplaces wasted heat up the chimney, so Franklin built an iron stove that radiated heat inward; but stoves still burned wood and smoked indoors, so later inventors moved to enclosed furnaces and cleaner fuels.",
      hintLadder: [
        "Start with a weakness of an old invention.",
        "Each fix should create the next problem.",
        "Link three steps with 'so' or 'because.'"
      ]
    }
  ],
  stretch: {
    stem: "Some histories say Edison 'invented' the light bulb. Why do careful historians push back on that phrasing?",
    answer: "Edison improved a practical long-lasting filament, but incandescent lighting was worked on by Swan, Latimer, and others; crediting one person ignores the corroborated record of many contributors and earlier necessary conditions.",
    explanation: "Attribution should follow corroborated evidence — invention is usually distributed across people and prior conditions, not owned by one name."
  },
  reflectionPrompt: "Look at one warm or lit thing near you. What conditions — materials, prior ideas, or a pressing problem — had to line up for it to exist?",
  misconceptionBank: [
    {
      id: "lone-genius-myth",
      label: "Thinks inventions come from one lone genius, from nothing",
      description: "Credits a single inventor and ignores prior conditions and parallel contributors.",
      coachMove: "Trace the chain backward and corroborate: ask 'what necessary conditions came first, and who else worked on this?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Condition Matters More?",
      prompt:
        "For the Franklin stove to succeed, which mattered more: that people WANTED less wasted heat, or that cheap cast IRON existed to build it? Defend your pick before you peek — there's a real historian's answer.",
      answer:
        "Both helped, but affordable cast iron was closer to a NECESSARY condition — the desire for efficient heat existed for centuries, yet the stove only appeared once the material to build it was practical. Demand contributes; materials often unlock.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Weighted Invention Family Tree",
      challenge:
        "Build an 'invention family tree' for one winter comfort (heating, lighting, or insulation) with at least three versions — and for each leap, label whether the key driver was MATERIALS, PRIOR KNOWLEDGE, or DEMAND.",
      materials: ["Paper & markers, OR a drawing/slides app"],
      steps: [
        "Pick heating, lighting, OR insulation as your branch.",
        "Draw three+ versions oldest to newest with arrows.",
        "Under each arrow, name the weakness fixed AND the main driver (materials / knowledge / demand).",
        "Circle the one leap you think was most important and write why."
      ],
      deliverable: "A labeled family tree with 3+ versions, each leap tagged with its main driver and the problem it solved.",
      choiceBoard: [
        "Draw the weighted timeline with driver tags and arrows.",
        "Write a short debate where three inventors argue whose condition mattered most.",
        "Make a 4-panel comic where each panel solves the last panel's leftover problem."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Inventors Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.hist.w6.d4.arena1",
          type: "multiple_choice",
          stem: "A source claims one inventor 'single-handedly' created central heating. Before repeating it, you should first...",
          choices: [
            "Share it immediately because it's a strong story",
            "Corroborate the claim against other independent sources and look for earlier contributors",
            "Assume it's false and ignore it",
            "Rewrite it to name a different single person"
          ],
          answerIndex: 1,
          explanation: "Single-inventor claims are red flags; corroborating across sources usually reveals a chain of contributors and prior conditions.",
          hintLadder: [
            "'Single-handedly' is a warning sign.",
            "What do historians do before crediting one person?",
            "Cross-check independent sources first."
          ]
        },
        {
          id: "g7.winter.hist.w6.d4.arena2",
          type: "short_answer",
          stem: "Trace a THREE-link chain for lighting OR heating, and for each link name whether the driver was materials, prior knowledge, or demand.",
          rubric: {
            level3: "Three ordered links, each with the improvement AND a correctly reasoned driver label.",
            level2: "Three links but one driver is missing or mislabeled.",
            level1: "Fewer than three links or no driver labels."
          },
          exemplar: "Firelight (knowledge of fire) was smoky, so candles (materials: rendered fat/wax) gave cleaner portable light; candles were dim, so oil and gas lamps (demand for brighter city light) followed — each driven by a different condition.",
          hintLadder: [
            "Pick lighting OR heating, three versions.",
            "For each leap, ask which condition drove it.",
            "Label materials / knowledge / demand per link."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Timeline Stride",
      prompt:
        "Lay an imaginary timeline across the floor. Step from 'firelight' (crouch low) to 'candle' (steady stance) to 'gas lamp' (arms wide) to 'electric bulb' (reach up tall). Walk it forward and back 3 times, saying each leap's main driver aloud.",
      scienceTieIn: "Pairing each step with a spoken label uses movement and speech together, which strengthens how firmly your brain stores an ordered sequence.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one object in your home. What was its 'earlier version,' and which condition — materials, knowledge, or demand — most made your version possible?",
      badge: { id: "g7-winter-invention-analyst", name: "Invention Analyst", emoji: "💡" },
      estimatedMinutes: 7
    }
  }
};
