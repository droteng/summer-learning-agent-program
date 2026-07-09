// Grade 7 Science — Winter Showcase, Week 8, Day 2.
// Topic: science synthesis — combine energy, matter, forces, and space
// concepts to build a full, systems-level explanation of one winter
// phenomenon. Pitched up: systems synthesis and mechanism chains.

export const winterG7ScienceW8D2 = {
  id: "g7.winter.sci.w8.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "Science synthesis — a systems-level explanation of a winter phenomenon",
  topicTag: "science-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-4", "NGSS.MS-PS1-4"],
  hook: "All winter you studied energy, matter, forces, and space as separate ideas. A capstone scientist links them into a SYSTEM — a chain of causes where one concept triggers the next. Today you synthesize a full mechanism chain to explain one frozen-world phenomenon, the centerpiece of your showcase.",
  miniLesson: [
    "SYSTEMS THINKING means tracing a chain of cause and effect: energy transfer changes the motion of particles, which changes the state of matter, which changes what forces hold the substance together. Each link triggers the next.",
    "Energy transfer depends on MORE than temperature: the RATE of heat loss depends on surface area, contact, and insulation. A thin icicle drip freezes faster than a deep lake because it loses heat over a large surface relative to its volume.",
    "A capstone-level explanation names the mechanism at each link — 'heat energy leaves through the large surface, so particles slow, so they lock into a rigid lattice' — rather than collapsing the whole chain into 'it gets cold.'"
  ],
  workedExample: {
    prompt: "Explain, as a mechanism chain, why a shallow puddle freezes overnight but a deep lake beside it does not.",
    steps: [
      "ENERGY & RATE: both lose heat to the cold air, but the puddle has far more surface area relative to its small volume, so its stored heat energy drains away much faster.",
      "MATTER: once the puddle's water molecules lose enough energy, they slow and change state — liquid to solid ice.",
      "FORCES/STRUCTURE: the slowed molecules lock into a rigid crystal lattice held by hydrogen bonds; the deep lake still holds enough energy in its large volume to keep molecules moving as liquid.",
      "SYSTEM RESULT: high surface-to-volume ratio drains the puddle's energy fast enough to complete the state change overnight; the lake's low ratio does not."
    ],
    answer: "The puddle's high surface-to-volume ratio drains its heat energy fast, so its molecules slow and lock into solid ice overnight; the deep lake retains enough energy in its large volume to stay liquid."
  },
  items: [
    {
      id: "g7.winter.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "Two identical amounts of water sit outside on a freezing night: one spread in a wide shallow tray, one in a tall narrow jar. Which freezes first, and WHY (as a mechanism)?",
      choices: [
        "The jar, because tall water is colder.",
        "They freeze at exactly the same time — shape doesn't matter.",
        "The tray, because its larger surface area relative to volume lets heat energy leave faster, so its molecules reach freezing sooner.",
        "Neither freezes, because water can't lose heat at night."
      ],
      answerIndex: 2,
      explanation: "Same volume, but the shallow tray exposes much more surface to the cold air, so heat energy transfers out faster. Losing energy faster means its molecules slow and lock into ice sooner.",
      hintLadder: [
        "Which shape touches the cold air over a bigger surface?",
        "More exposed surface means faster heat energy loss.",
        "The wide tray loses heat fastest, so it freezes first."
      ]
    },
    {
      id: "g7.winter.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "In the mechanism chain of freezing, which ordering of causes is correct?",
      choices: [
        "Molecules lock into a lattice → they lose energy → the substance cools.",
        "Heat energy leaves → molecules slow down → they lock into a rigid lattice (solid).",
        "The substance becomes solid → then it starts losing heat → then it cools.",
        "Forces disappear → energy increases → liquid forms."
      ],
      answerIndex: 1,
      explanation: "Energy transfer comes first: heat leaves, which slows the molecules, which lets attractive forces lock them into a solid lattice. The chain runs energy → motion → structure.",
      hintLadder: [
        "What triggers the whole chain — a change in energy or in structure?",
        "Heat leaving is the cause; the lattice forming is the effect.",
        "Energy out → molecules slow → lattice locks."
      ],
      misconceptionsTargeted: ["reversed-mechanism-chain"]
    },
    {
      id: "g7.winter.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "Why is winter colder than summer in Connecticut — and why does the same tilt make the SOUTHERN Hemisphere warm at that time?",
      choices: [
        "Earth is much farther from the Sun during northern winter.",
        "Snow reflects the Sun and cools the whole planet at once.",
        "The Sun cools down for half the year.",
        "Earth's axial tilt means the northern half receives low-angle sunlight for fewer hours (less energy per area), while the tilted-toward southern half gets high-angle sunlight (more energy per area)."
      ],
      answerIndex: 3,
      explanation: "The fixed axial tilt points one hemisphere toward the Sun and the other away as Earth orbits. The hemisphere tilted away gets low-angle, short-day sunlight (less energy per area) = winter; the other gets high-angle sun = summer. Distance can't explain opposite seasons at once.",
      hintLadder: [
        "If distance caused seasons, both hemispheres would be cold together — they aren't.",
        "Think about the ANGLE and hours of sunlight each hemisphere gets.",
        "Tilt spreads winter sun over more area at a low angle; the other hemisphere gets concentrated high-angle sun."
      ],
      misconceptionsTargeted: ["distance-causes-seasons"]
    },
    {
      id: "g7.winter.sci.w8.d2.q4",
      type: "short_answer",
      stem: "A frozen lake has solid ice on top but liquid water at the bottom. Explain this as a mechanism CHAIN using at least THREE ideas (energy, matter/state, and the property of ice that matters here).",
      rubric: {
        level3: "Traces a chain: heat energy leaves through the cold top surface first, so surface water changes state to solid ice; ice is LESS DENSE than water so it floats and, being a poor conductor, insulates the water below, which retains enough energy to stay liquid — using three linked ideas.",
        level2: "Uses two ideas correctly and links them, but the third (density/insulation) is missing or vague.",
        level1: "One idea only, or the causes are not linked into a chain."
      },
      exemplar: "Heat energy escapes into the cold air at the top surface first, so the surface water loses energy and its molecules lock into solid ice (state change). Because ice is less dense than liquid water it floats on top rather than sinking, and since ice is a poor conductor it insulates the water underneath — that deeper water keeps enough energy for its molecules to stay moving as liquid.",
      hintLadder: [
        "Where does the water lose heat energy first — top or bottom?",
        "What state change follows there, and what unusual property does ice have?",
        "Link energy loss → ice forms on top → ice floats and insulates → water below stays liquid."
      ]
    },
    {
      id: "g7.winter.sci.w8.d2.q5",
      type: "short_answer",
      stem: "Pick ONE winter phenomenon for your capstone (frost, an icicle growing, snow staying frozen in sun, a freezing river). Build a mechanism CHAIN of at least THREE linked science ideas, showing how each one triggers the next.",
      rubric: {
        level3: "Names a phenomenon AND builds a chain of three linked ideas (energy, matter/state, forces or a relevant property) where each cause clearly triggers the next effect.",
        level2: "Names the phenomenon and three ideas, but the links between them are weak or one is slightly off.",
        level1: "Fewer than three ideas, or the ideas are listed without cause-and-effect links."
      },
      exemplar: "Phenomenon: a growing icicle. ENERGY — a thin film of water on the icicle loses heat rapidly to the cold air because of its large exposed surface. MATTER — losing that energy makes the water change state, freezing layer by layer. FORCES — each new layer's molecules lock into the crystal lattice by hydrogen bonds, so the icicle lengthens downward drip by drip.",
      hintLadder: [
        "Choose one clear phenomenon and ask what happens FIRST.",
        "What does that first change trigger next, and next?",
        "Write three ideas as a chain: cause → effect → effect."
      ]
    }
  ],
  reflectionPrompt: "Real scientists explain systems, not single facts. Which mechanism chain felt most powerful when you linked the ideas together? You'll lead your showcase with this synthesis.",
  misconceptionBank: [
    {
      id: "reversed-mechanism-chain",
      label: "Reverses the cause-and-effect chain",
      description: "Thinks structure changes first and energy follows, rather than energy transfer driving the change in motion and then structure.",
      coachMove: "Ask 'what happens FIRST?' Heat must leave before molecules can slow and lock — trace the arrow of causation."
    },
    {
      id: "distance-causes-seasons",
      label: "Blames seasons on Earth's distance from the Sun",
      description: "Assumes winter happens because Earth moves far from the Sun, rather than because of axial tilt.",
      coachMove: "Both hemispheres have opposite seasons at once — impossible if distance caused it. It must be tilt (angle and daylight length)."
    }
  ],
  stretch: {
    prompt: "Add a FEEDBACK loop to any of your chains: name one effect that, once it happens, changes the rate of an earlier step.",
    answer: "Example: as surface ice forms on a lake, that ice insulates the water below, which SLOWS further heat loss — the effect (ice) feeds back to reduce the cause (heat escaping), so freezing gets slower over time."
  },
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Puddle, One Chain",
      prompt:
        "A puddle freezes overnight into solid ice. Instead of three separate facts, can you tell it as a CHAIN — where losing heat energy TRIGGERS the molecules to slow, which TRIGGERS them to lock into a solid? Say each link out loud.",
      answer:
        "Heat energy leaves the water into the cold night air → the molecules slow down → the slowed molecules lock into a rigid ice lattice held by hydrogen bonds. One cause triggers the next — that's a mechanism chain, not just a list.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Systems Mechanism Map",
      challenge:
        "Build a MECHANISM MAP for your winter phenomenon: not just a web of ideas, but a directed chain of ARROWS where each label says how one concept TRIGGERS the next, ending in the observed result.",
      steps: [
        "Write the observed phenomenon as the endpoint on the right.",
        "Working backward, place the science ideas (energy, matter, forces, space) as boxes.",
        "Draw arrows LEFT to RIGHT, labeling each with the cause-effect it carries ('...so molecules slow...').",
        "Mark any feedback loop or the surface-to-volume factor that sets the RATE."
      ],
      deliverable: "A directed mechanism map: linked, labeled arrows tracing the full cause-and-effect chain to your winter phenomenon.",
      choiceBoard: [
        "Draw the mechanism map with labeled directional arrows.",
        "Record a 60-second 'systems explanation' narrating your chain link by link.",
        "Write a short 'mechanism paragraph' where every sentence triggers the next."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A warm metal spoon and a warm wooden spoon are left in the snow. The metal one feels colder much faster. Which mechanism explains this?",
          choices: [
            "Metal conducts heat far better than wood, so heat energy transfers OUT of the metal into the snow at a much higher rate.",
            "Cold energy flows into the metal faster than into the wood.",
            "Metal contains cold that the wood lacks.",
            "Nothing happens; both stay the same temperature."
          ],
          answerIndex: 0,
          explanation: "Conduction rate differs by material: metal is a good conductor, so heat energy leaves it into the cold snow quickly, while wood insulates and loses heat slowly. There is no 'cold energy' — only heat transferring out.",
          hintLadder: [
            "Which material is a better heat conductor, metal or wood?",
            "Better conductor means heat leaves it faster into the cold.",
            "Metal conducts heat out rapidly; wood insulates — it's about transfer RATE."
          ]
        },
        {
          id: "g7.winter.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "Frost forms overnight on a car window but NOT on the rubber seal beside it. Explain the difference as a mechanism chain, using energy transfer rate and a state change.",
          rubric: {
            level3: "Explains that glass conducts and loses heat faster than rubber, so the glass surface drops below freezing sooner; water vapor (matter) touching the very cold glass loses heat energy and changes state directly to solid ice crystals (frost), while the warmer rubber doesn't reach that point — linking transfer rate AND state change.",
            level2: "Connects energy loss to frost forming but doesn't clearly contrast the glass vs. rubber transfer rate, or leaves the state change vague.",
            level1: "Incorrect, or no cause-and-effect chain."
          },
          exemplar: "Glass is a better heat conductor than rubber, so overnight the glass loses heat energy fast and its surface drops below freezing sooner. Water vapor in the air touching that very cold glass loses heat and changes state straight into solid ice crystals — frost. The rubber seal loses heat more slowly and stays warmer, so vapor there never reaches the point of depositing as ice.",
          hintLadder: [
            "Which surface, glass or rubber, cools below freezing faster and why?",
            "Once a surface is cold enough, what happens to water vapor touching it?",
            "Chain it: faster heat loss from glass → colder surface → vapor deposits as ice."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: States of Matter Chain",
      prompt:
        "Act out a mechanism chain: stand rigid as a SOLID lattice (5 sec), then 'add energy' by shaking as you flow into a LIQUID (5 sec), then vibrate fast and spread wide as a GAS (5 sec). Now reverse it — remove energy and slow back down to solid. Do the full chain both directions twice.",
      scienceTieIn: "Speeding up and slowing down your body mirrors how ADDING or REMOVING energy drives molecules between states — the exact chain you're mapping for your capstone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just explained a winter phenomenon as a whole SYSTEM — a chain where each cause triggers the next. That's capstone-level science. Which link in your chain do you think will surprise your showcase audience most?",
      badge: { id: "g7-winter-systems-scientist", name: "Systems Scientist", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
