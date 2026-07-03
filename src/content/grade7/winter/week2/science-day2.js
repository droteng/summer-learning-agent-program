// Grade 7 Science — Winter Expedition, Week 2 (Energy & Matter), Day 2.
// Topic: phase changes of water — grade-7 depth with energy exchange during
// changes, why temperature plateaus at a phase change, and particle-level reasoning.

export const winterG7ScienceW2D2 = {
  id: "g7.winter.sci.w2.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Phase changes of water: melting, freezing, evaporation, condensation",
  topicTag: "phase-changes",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS1-4", "NGSS.MS-PS3-4"],
  hook: "Water is a shape-shifter that follows strict energy rules. Every winter change — ice to puddle, breath to fog, cocoa steam to droplets — either absorbs energy or releases it. Today you track that energy at the particle level and explain why a freezing pond can hold steady at 0 degrees C for hours.",
  miniLesson: [
    "Adding thermal energy speeds up water molecules and pushes them apart: ice MELTS to liquid and liquid EVAPORATES to vapor. Removing thermal energy slows them and packs them tighter: vapor CONDENSES to liquid and liquid FREEZES to solid. The molecules stay identical — a phase change is a physical change, not a chemical one.",
    "During a phase change the temperature stays CONSTANT even while energy keeps flowing. That energy goes into breaking or forming the bonds that hold molecules together, not into speeding them up — which is why melting ice sits at 0 degrees C until every last bit has melted.",
    "Melting and evaporation ABSORB energy (endothermic); freezing and condensation RELEASE energy (exothermic). This released energy is why frost forming on a window actually warms the glass slightly, and why your skin feels cold when sweat evaporates — evaporation pulls energy from you."
  ],
  workedExample: {
    prompt: "Classify each winter scene by phase change AND state whether it absorbs or releases energy: (a) a puddle turns to ice overnight, (b) fog forms on the inside of a cold window, (c) steam rises off hot cocoa.",
    steps: [
      "Puddle to ice = liquid to solid = freezing, which RELEASES energy (exothermic).",
      "Warm-room water vapor turning to droplets on cold glass = condensation, which RELEASES energy.",
      "Liquid cocoa becoming vapor = evaporation, which ABSORBS energy (endothermic).",
      "So: (a) freezing, releases; (b) condensation, releases; (c) evaporation, absorbs."
    ],
    answer: "(a) freezing — releases energy; (b) condensation — releases energy; (c) evaporation — absorbs energy"
  },
  items: [
    {
      id: "g7.winter.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "A beaker of ice-water mix is heated steadily, but a thermometer reads 0 degrees C the whole time until all the ice is gone. Why doesn't the temperature rise while ice is still melting?",
      choices: [
        "The thermometer is broken",
        "The added energy is going into breaking the bonds holding the ice together, not into raising the temperature",
        "Ice cannot absorb any energy at all",
        "Water has no melting point"
      ],
      answerIndex: 1,
      explanation: "At a phase change, incoming energy breaks the intermolecular bonds of the solid rather than increasing molecular speed, so temperature holds constant until melting is complete.",
      hintLadder: [
        "Energy is still flowing in — where is it going if not into temperature?",
        "Melting requires breaking the bonds that hold ice's structure.",
        "Energy goes into breaking bonds, so temperature plateaus."
      ],
      misconceptionsTargeted: ["temp-always-rises-with-heat"]
    },
    {
      id: "g7.winter.sci.w2.d2.q2",
      type: "multiple_choice",
      stem: "Droplets appear on the OUTSIDE of a cold soda can on a humid day, even though the can is sealed. What is happening, and what does the energy do?",
      choices: [
        "The can leaks soda through the metal",
        "Water vapor in the air condenses on the cold can; the vapor RELEASES energy to the can as it becomes liquid",
        "The metal melts into water",
        "The air freezes instantly onto the can"
      ],
      answerIndex: 1,
      explanation: "Airborne water vapor loses energy to the cold surface and condenses into liquid droplets. Condensation is exothermic, so the vapor releases energy to the can — no leaking through metal is involved.",
      hintLadder: [
        "The can is sealed, so the water is not from inside.",
        "Where does air's invisible water vapor go when it cools?",
        "Vapor condensing releases energy and forms droplets on the can."
      ],
      misconceptionsTargeted: ["glass-leaks"]
    },
    {
      id: "g7.winter.sci.w2.d2.q3",
      type: "multiple_choice",
      stem: "Which pair of phase changes BOTH release energy to the surroundings (exothermic)?",
      choices: [
        "Melting and evaporation",
        "Freezing and condensation",
        "Melting and condensation",
        "Evaporation and freezing"
      ],
      answerIndex: 1,
      explanation: "Freezing (liquid to solid) and condensation (gas to liquid) both slow and pack molecules, releasing energy. Melting and evaporation absorb energy.",
      hintLadder: [
        "Which changes move to a MORE ordered, tighter-packed state?",
        "Slowing and packing molecules gives off energy.",
        "Freezing and condensation both release energy."
      ]
    },
    {
      id: "g7.winter.sci.w2.d2.q4",
      type: "numeric",
      stem: "A block of ice at −8 degrees C is warmed. First it must reach its 0 degrees C melting point, then it melts (temperature stays at 0), then the liquid warms to 6 degrees C. Ignoring the melting plateau, what is the TOTAL temperature change from start to finish, in degrees?",
      answer: 14,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Total change = final temperature − starting temperature.",
        "Final is 6, start is −8: 6 − (−8).",
        "6 − (−8) = 6 + 8 = 14 degrees."
      ],
      explanation: "Total change = 6 − (−8) = 6 + 8 = 14 degrees (the melting plateau adds energy but no temperature change)."
    },
    {
      id: "g7.winter.sci.w2.d2.q5",
      type: "short_answer",
      stem: "Steam rises off hot cocoa, then forms droplets on a cold spoon held above it. Explain the TWO phase changes in order and state for EACH whether energy is absorbed or released. Use the words 'evaporation' and 'condensation.'",
      rubric: {
        level3: "Identifies evaporation first (liquid to vapor, ABSORBS energy) then condensation (vapor to liquid on the cold spoon, RELEASES energy), in the correct order with correct energy direction for both.",
        level2: "Names both changes in order but gets one energy direction wrong or omits it.",
        level1: "Names only one change, wrong order, or no energy reasoning."
      },
      exemplar: "First, evaporation: the hot cocoa absorbs energy and turns liquid water into invisible vapor that rises. Then condensation: that vapor meets the cold spoon, releases energy to it, and turns back into liquid droplets on the spoon.",
      hintLadder: [
        "What happens to the hot liquid first — and does it absorb or release energy?",
        "Then what does the vapor do at the cold spoon, and which way does energy flow?",
        "Evaporation (absorbs) then condensation (releases)."
      ]
    }
  ],
  reflectionPrompt: "Find a phase change happening around you tonight (breath fogging, ice melting, a fogged mirror). Name the change, state whether it absorbs or releases energy, and explain how you know which direction the energy flows.",
  misconceptionBank: [
    {
      id: "temp-always-rises-with-heat",
      label: "Thinks adding heat always raises temperature",
      description: "Believes temperature must climb whenever energy is added, missing the phase-change plateau.",
      coachMove: "Graph temperature vs. time for melting ice. Point to the flat plateau at 0 degrees C and ask where the energy went — into breaking bonds, not raising temperature."
    },
    {
      id: "glass-leaks",
      label: "Thinks condensation water comes through the surface",
      description: "Assumes droplets on a cold sealed object leaked through it rather than condensing from air.",
      coachMove: "Point to a sealed cold can that still sweats. The water is airborne vapor condensing, releasing energy to the can — it cannot pass through solid metal."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Steady 0",
      prompt:
        "A pond is freezing over. For hours a thermometer at the ice-water surface reads exactly 0 degrees C, even though the freezing air keeps pulling energy away. If energy is leaving the whole time, why won't the number budge until the water is fully frozen?",
      answer:
        "During freezing, the energy leaving is coming from the molecules LOCKING into the solid structure (forming bonds), not from them slowing down further. That bond-forming releases energy but keeps the temperature pinned at 0 degrees C until every molecule has frozen. Only then can the ice keep cooling below zero.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The Energy-Labeled Water Journey",
      challenge:
        "Create a comic strip or diagram following ONE water molecule through all four phase changes on a winter day. This time, every arrow between panels must be labeled with the phase change AND whether energy is absorbed or released.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw your molecule as a character starting as rooftop ice.",
        "Show it MELTING (absorbs) then EVAPORATING (absorbs) into the air.",
        "Show it CONDENSING (releases) onto a cold window as a droplet.",
        "Show it FREEZING (releases) into frost overnight — label each arrow with the change and its energy direction."
      ],
      deliverable: "A 4-panel comic or diagram naming all four phase changes AND labeling each with energy absorbed or released.",
      choiceBoard: [
        "Draw the 4-panel molecule comic with energy-direction labels.",
        "Write a first-person diary BY the molecule that mentions gaining or losing energy at each stage.",
        "Make a poster with a heating/cooling curve showing the two plateaus where temperature stays flat."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Phase Change Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w2.d2.arena1",
          type: "multiple_choice",
          stem: "After exercising outdoors in winter you feel a sudden chill as sweat evaporates from your skin. Why does evaporation cool you?",
          choices: [
            "Evaporation releases energy into your skin, warming it",
            "Evaporation absorbs energy from your skin to turn the sweat into vapor, so your skin loses energy and cools",
            "Sweat freezes instantly and that is what you feel",
            "Evaporation has no effect on temperature"
          ],
          answerIndex: 1,
          explanation: "Evaporation is endothermic: turning liquid sweat into vapor requires energy, and that energy is drawn from your skin, lowering its temperature and cooling you.",
          hintLadder: [
            "Does evaporation absorb or release energy?",
            "Where does the energy to evaporate the sweat come from?",
            "It is pulled from your skin, so your skin cools."
          ]
        },
        {
          id: "g7.winter.sci.w2.d2.arena2",
          type: "numeric",
          stem: "Water vapor at 4 degrees C condenses and the resulting liquid then keeps cooling until it freezes into ice at −6 degrees C. What is the total temperature change from 4 degrees C to −6 degrees C, in degrees (give the size of the change)?",
          answer: 10,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Size of change = starting − ending temperature.",
            "From 4 down to −6: 4 − (−6).",
            "4 − (−6) = 4 + 6 = 10 degrees of cooling."
          ],
          explanation: "Change = 4 − (−6) = 4 + 6 = 10 degrees of cooling (phase-change plateaus add no temperature change)."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: States of Matter Shake",
      prompt:
        "Model the molecules. As a SOLID, lock arms tight to your body and barely vibrate. As a LIQUID, loosen up and slide smoothly past imaginary neighbors. As a GAS, break free and zoom your arms in every direction. Cycle solid to liquid to gas twice, feeling the energy climb.",
      scienceTieIn: "Your tight vibration, loose slide, and wild zoom match how molecular motion increases as water absorbs energy through each phase change — and the movement warms your body.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one phase change you can observe at home tonight. Predict whether it will absorb or release energy, then describe what you actually saw and whether your energy prediction held up.",
      badge: { id: "g7-winter-phase-physicist", name: "Phase Physicist", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
