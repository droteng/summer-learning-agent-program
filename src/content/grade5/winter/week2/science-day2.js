// Grade 5 Science — Winter Expedition, Week 2 (Energy & Matter), Day 2.
// Topic: phase changes of water — melting, freezing, evaporation, condensation.
// Grade 5 counterpart of g6.winter.sci.w2.d2 — same topic, lower difficulty,
// thermometer reading / simple positive differences (no signed arithmetic).

export const winterG5ScienceW2D2 = {
  id: "g5.winter.sci.w2.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Phase changes of water: melting, freezing, evaporation, condensation",
  topicTag: "phase-changes",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-1", "NGSS.5-PS1-3"],
  hook: "Water is a shape-shifter. In winter it freezes into ice, melts into puddles, steams off hot cocoa, and fogs up cold windows. Today you learn the four moves water makes between solid, liquid, and gas.",
  miniLesson: [
    "Adding heat makes water's tiny particles move faster: ice MELTS into liquid, and liquid EVAPORATES into invisible water vapor (a gas). (Vocabulary: evaporate = turn from liquid into gas.)",
    "Taking heat away makes the particles slow down: liquid water FREEZES into ice, and water vapor CONDENSES back into liquid drops. (Vocabulary: condense = turn from gas back into liquid.)",
    "The water is always the same water — only how fast the particles move and how tightly they are packed changes. Water freezes and melts at 0 degrees C."
  ],
  workedExample: {
    prompt: "Name the phase change for each winter scene: (a) a puddle turns to ice overnight, (b) fog appears on a cold window, (c) steam rises off hot cocoa.",
    steps: [
      "Puddle to ice = liquid losing heat and becoming solid = freezing.",
      "Water vapor in the warm room touching cold glass and turning to drops = condensation.",
      "Liquid cocoa turning into vapor that rises = evaporation.",
      "So: (a) freezing, (b) condensation, (c) evaporation."
    ],
    answer: "(a) freezing, (b) condensation, (c) evaporation"
  },
  items: [
    {
      id: "g5.winter.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "An ice cube left on the counter slowly turns into a puddle of water. What phase change is this, and what is happening to heat?",
      choices: [
        "Freezing; heat is taken away",
        "Melting; heat is added",
        "Condensation; heat is taken away",
        "Evaporation; heat is added"
      ],
      answerIndex: 1,
      explanation: "Solid ice turning into liquid water is melting, which happens when heat is ADDED to the ice.",
      hintLadder: [
        "Ice is a solid; a puddle is a liquid.",
        "Solid turning into liquid has a name that starts with 'm.'",
        "Melting adds heat."
      ]
    },
    {
      id: "g5.winter.sci.w2.d2.q2",
      type: "multiple_choice",
      stem: "On a cold morning, tiny water drops appear on the OUTSIDE of a cold window. Where did that water come from?",
      choices: [
        "The glass leaked water",
        "Water vapor in the air cooled and condensed into liquid on the cold glass",
        "The window melted",
        "The water froze out of nowhere"
      ],
      answerIndex: 1,
      explanation: "Invisible water vapor in the air touches the cold glass, cools down, and condenses into little liquid drops — that is condensation.",
      hintLadder: [
        "The air around us always holds some invisible water vapor.",
        "What happens to that vapor when it touches a cold surface?",
        "Cooling vapor into drops is condensation."
      ],
      misconceptionsTargeted: ["glass-leaks"]
    },
    {
      id: "g5.winter.sci.w2.d2.q3",
      type: "multiple_choice",
      stem: "When water melts and freezes, what happens to the water itself?",
      choices: [
        "It turns into a different material",
        "It stays the same water but the particles move faster or slower and pack differently",
        "It disappears and new water appears",
        "It breaks apart into something new"
      ],
      answerIndex: 1,
      explanation: "A phase change is a physical change: the water is still water. Only how fast the particles move and how they are packed changes, not what it is.",
      hintLadder: [
        "Is ice still made of water?",
        "A phase change does not make a brand-new material.",
        "Same water, different particle speed and spacing."
      ],
      misconceptionsTargeted: ["phase-change-new-substance"]
    },
    {
      id: "g5.winter.sci.w2.d2.q4",
      type: "numeric",
      stem: "Water freezes at 0 degrees C. A dish of water is now at 8 degrees C. How many degrees must it cool to reach its freezing point?",
      answer: 8,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "The freezing point of water is 0 degrees C.",
        "Find the difference between 8 and 0.",
        "8 − 0 = 8 degrees of cooling."
      ],
      explanation: "From 8 degrees C down to the 0 degrees C freezing point is 8 − 0 = 8 degrees of cooling."
    },
    {
      id: "g5.winter.sci.w2.d2.q5",
      type: "short_answer",
      stem: "Steam rises off a hot cup of cocoa, then you hold a cold spoon above it and drops form on the spoon. Explain the TWO phase changes happening, in order.",
      rubric: {
        level3: "Correctly names evaporation first (liquid cocoa to vapor) THEN condensation (vapor to drops on the cold spoon), and links each to heat added or taken away.",
        level2: "Names both changes but the order is unclear or one is mislabeled.",
        level1: "Names only one change or mixes them up."
      },
      exemplar: "First the hot cocoa evaporates: heat turns the liquid into invisible water vapor that rises. Then that vapor touches the cold spoon, loses heat, and condenses into liquid drops on the spoon.",
      hintLadder: [
        "What happens to the hot liquid first — does it become a gas?",
        "Then what does the vapor do when it touches the cold spoon?",
        "Evaporation, then condensation."
      ]
    }
  ],
  reflectionPrompt: "Where did you see water change phase today — breath fogging in cold air, ice melting, a lid dripping? Name the change you spotted.",
  misconceptionBank: [
    {
      id: "glass-leaks",
      label: "Thinks condensation water comes through the glass",
      description: "Assumes drops on a cold surface leaked through it instead of condensing from the air.",
      coachMove: "Point out that a sealed cold soda can 'sweats' too. The water comes from vapor in the air condensing, not through solid metal or glass."
    },
    {
      id: "phase-change-new-substance",
      label: "Thinks a phase change makes a new material",
      description: "Believes ice, water, and vapor are different materials instead of the same water in different states.",
      coachMove: "Melt an ice cube and refreeze it — it is still water. Only the state changes, not the water itself."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "I Change But Stay the Same",
      prompt:
        "I can be hard enough to skate on, thin enough to drink, or light enough to float invisibly in the winter air. I am always the same water — I just change how I move. What am I, and what are my three states?",
      answer:
        "Water! Solid (ice you skate on), liquid (water you drink), and gas (invisible water vapor floating in the air). Same water, three states.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The Water Cycle in a Winter Window",
      challenge:
        "Make a comic strip or diagram that follows ONE water drop through all four phase changes — melting, evaporation, condensation, and freezing — on a single winter day.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw your water drop as a character and give it a starting state (say, ice on a rooftop).",
        "Show it MELTING in the sun, then EVAPORATING into the air.",
        "Show it CONDENSING onto a cold window as a drop.",
        "Show it FREEZING back into frost overnight — and label each phase change."
      ],
      deliverable: "A 4-panel comic or diagram labeling all four phase changes on one water drop's journey.",
      choiceBoard: [
        "Draw the 4-panel water-drop comic with labels.",
        "Write a short first-person story told BY the water drop as it changes state.",
        "Make a poster diagram with arrows showing which changes add heat and which take heat away."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Phase Change Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w2.d2.arena1",
          type: "multiple_choice",
          stem: "Which pair of phase changes BOTH need heat to be ADDED?",
          choices: [
            "Freezing and condensation",
            "Melting and evaporation",
            "Freezing and melting",
            "Condensation and evaporation"
          ],
          answerIndex: 1,
          explanation: "Melting (solid to liquid) and evaporation (liquid to gas) both need heat added. Freezing and condensation both take heat away.",
          hintLadder: [
            "Which changes make the particles move faster?",
            "Solid to liquid and liquid to gas both speed particles up.",
            "That needs added heat: melting and evaporation."
          ]
        },
        {
          id: "g5.winter.sci.w2.d2.arena2",
          type: "numeric",
          stem: "A block of ice is at 0 degrees C. It warms up until the puddle it makes reaches 6 degrees C. How many degrees did the water warm after it melted?",
          answer: 6,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Find the difference between the ending and starting temperatures.",
            "Subtract the smaller reading from the bigger one.",
            "6 − 0 = 6."
          ],
          explanation: "From 0 degrees C up to 6 degrees C is 6 − 0 = 6 degrees of warming."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: States of Matter Shake",
      prompt:
        "Be the water particles! As a SOLID, stand stiff and barely jiggle. As a LIQUID, sway and slide loosely past imaginary neighbors. As a GAS, bounce and zoom your arms wildly in all directions. Cycle solid to liquid to gas twice.",
      scienceTieIn: "Your tight jiggle, loose sway, and wild bounce match how real particles move slower or faster as water changes state — and the movement wakes up your body.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one phase change you can watch at home tonight (breath fog, a melting ice cube, a fogged mirror). Predict what will happen, then describe what you actually saw.",
      badge: { id: "g5-winter-phase-shifter", name: "Phase Shifter", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
