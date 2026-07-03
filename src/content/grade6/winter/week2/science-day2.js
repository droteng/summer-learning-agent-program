// Grade 6 Science — Winter Expedition, Week 2 (Energy & Matter), Day 2.
// Topic: phase changes of water — melting, freezing, evaporation, condensation.

export const winterG6ScienceW2D2 = {
  id: "g6.winter.sci.w2.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Science",
  topic: "Phase changes of water: melting, freezing, evaporation, condensation",
  topicTag: "phase-changes",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS1-4", "NGSS.MS-PS3-4"],
  hook: "Water is a shape-shifter. In winter it freezes into ice, melts into puddles, steams off hot cocoa, and fogs up cold windows. Today you master the four moves water makes between solid, liquid, and gas.",
  miniLesson: [
    "Adding heat energy speeds up water's particles: ice MELTS to liquid, and liquid EVAPORATES to invisible water vapor (a gas).",
    "Removing heat energy slows the particles down: liquid water FREEZES to ice, and water vapor CONDENSES back to liquid droplets.",
    "The water molecules themselves never change — only how fast they move and how tightly they are packed. Freezing point and melting point of water are both 0 degrees C."
  ],
  workedExample: {
    prompt: "Name the phase change for each winter scene: (a) a puddle turns to ice overnight, (b) fog appears on the inside of a cold window, (c) steam rises off hot cocoa.",
    steps: [
      "Puddle to ice = liquid losing heat and becoming solid = freezing.",
      "Water vapor in warm room air touching cold glass and turning to droplets = condensation.",
      "Liquid cocoa turning into vapor that rises = evaporation.",
      "So: (a) freezing, (b) condensation, (c) evaporation."
    ],
    answer: "(a) freezing, (b) condensation, (c) evaporation"
  },
  items: [
    {
      id: "g6.winter.sci.w2.d2.q1",
      type: "multiple_choice",
      stem: "An ice cube left on the counter slowly turns into a puddle of water. What phase change is this, and what is happening to energy?",
      choices: [
        "Freezing; energy is removed",
        "Melting; energy (heat) is added",
        "Condensation; energy is removed",
        "Evaporation; energy is added"
      ],
      answerIndex: 1,
      explanation: "Solid ice becoming liquid water is melting, which happens when heat energy is ADDED to the ice.",
      hintLadder: [
        "Ice is a solid; a puddle is a liquid.",
        "Solid turning to liquid has a name that starts with 'm.'",
        "Melting adds heat energy."
      ]
    },
    {
      id: "g6.winter.sci.w2.d2.q2",
      type: "multiple_choice",
      stem: "On a cold morning, tiny water droplets appear on the OUTSIDE of a cold window. Where did that water come from?",
      choices: [
        "The glass leaked water",
        "Water vapor in the air cooled and condensed into liquid on the cold glass",
        "The window melted",
        "The water froze out of nowhere"
      ],
      answerIndex: 1,
      explanation: "Invisible water vapor in the air touches the cold glass, loses heat, and condenses into visible liquid droplets — that is condensation.",
      hintLadder: [
        "Air always holds some invisible water vapor.",
        "What happens to that vapor when it hits a cold surface?",
        "Cooling vapor into droplets is condensation."
      ],
      misconceptionsTargeted: ["glass-leaks"]
    },
    {
      id: "g6.winter.sci.w2.d2.q3",
      type: "multiple_choice",
      stem: "During melting and freezing, what happens to the actual water molecules?",
      choices: [
        "They turn into a different substance",
        "They stay the same molecules but move faster or slower and pack differently",
        "They disappear and new ones appear",
        "They split into hydrogen and oxygen"
      ],
      answerIndex: 1,
      explanation: "Phase changes are physical changes: the water molecules are unchanged. Only their speed and spacing change, not their identity.",
      hintLadder: [
        "Is ice still made of water?",
        "A phase change is a physical change, not a new substance.",
        "Same molecules, different speed and spacing."
      ],
      misconceptionsTargeted: ["phase-change-new-substance"]
    },
    {
      id: "g6.winter.sci.w2.d2.q4",
      type: "numeric",
      stem: "Water freezes at 0 degrees C. A dish of water is currently at 7 degrees C. How many degrees must it cool to reach its freezing point?",
      answer: 7,
      tolerance: 0,
      unit: "degrees",
      hintLadder: [
        "Freezing point of water is 0 degrees C.",
        "Find the difference between 7 and 0.",
        "7 − 0 = 7 degrees of cooling."
      ],
      explanation: "From 7 degrees C down to the 0 degrees C freezing point is 7 − 0 = 7 degrees of cooling."
    },
    {
      id: "g6.winter.sci.w2.d2.q5",
      type: "short_answer",
      stem: "Steam rises off a hot cup of cocoa, then you hold a cold spoon above it and drops form on the spoon. Explain the TWO phase changes happening, in order.",
      rubric: {
        level3: "Correctly identifies evaporation first (liquid cocoa to vapor) THEN condensation (vapor to droplets on the cold spoon) and links each to heat gained/lost.",
        level2: "Names both changes but the order is unclear or one is mislabeled.",
        level1: "Names only one change or misidentifies them."
      },
      exemplar: "First, hot cocoa evaporates: heat turns liquid into invisible water vapor that rises. Then that vapor hits the cold spoon, loses heat, and condenses into liquid drops on the spoon.",
      hintLadder: [
        "What happens to the hot liquid first — it becomes a gas?",
        "Then what does the vapor do when it meets the cold spoon?",
        "Evaporation, then condensation."
      ]
    }
  ],
  reflectionPrompt: "Where did you see water change phase today — breath fogging in cold air, ice melting, a lid dripping? Name the change you spotted.",
  misconceptionBank: [
    {
      id: "glass-leaks",
      label: "Thinks condensation water comes through the glass",
      description: "Assumes droplets on a cold surface leaked through it rather than condensing from air.",
      coachMove: "Point out a sealed cold soda can sweats too. The water comes from vapor in the air condensing, not through solid metal or glass."
    },
    {
      id: "phase-change-new-substance",
      label: "Thinks a phase change makes a new substance",
      description: "Believes ice, water, and vapor are different substances instead of the same water in different states.",
      coachMove: "Melt an ice cube and refreeze it — it is still water. Only the state changes, not the molecules."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "I Change But Stay the Same",
      prompt:
        "I can be hard enough to skate on, thin enough to drink, or light enough to float invisibly in the winter air. I am always the same molecules — I just change how I move. What am I, and what are my three states?",
      answer:
        "Water! Solid (ice you skate on), liquid (water you drink), and gas (invisible water vapor floating in the air). Same molecules, three states.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The Water Cycle in a Winter Window",
      challenge:
        "Create a comic strip or diagram that follows ONE water molecule through all four phase changes — melting, evaporation, condensation, and freezing — on a single winter day.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw your molecule as a character and give it a starting state (say, ice on a rooftop).",
        "Show it MELTING in the sun, then EVAPORATING into the air.",
        "Show it CONDENSING onto a cold window as a droplet.",
        "Show it FREEZING back into frost overnight — and label each phase change."
      ],
      deliverable: "A 4-panel comic or diagram labeling all four phase changes on one molecule's journey.",
      choiceBoard: [
        "Draw the 4-panel molecule comic with labels.",
        "Write a short first-person story narrated BY the water molecule as it changes state.",
        "Make a poster-style diagram with arrows showing which changes add heat and which remove it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Phase Change Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w2.d2.arena1",
          type: "multiple_choice",
          stem: "Which pair of phase changes BOTH require heat energy to be ADDED?",
          choices: [
            "Freezing and condensation",
            "Melting and evaporation",
            "Freezing and melting",
            "Condensation and evaporation"
          ],
          answerIndex: 1,
          explanation: "Melting (solid to liquid) and evaporation (liquid to gas) both need heat added. Freezing and condensation both RELEASE heat.",
          hintLadder: [
            "Which changes move toward a more energetic state (more particle motion)?",
            "Solid to liquid and liquid to gas both speed particles up.",
            "That takes added heat: melting and evaporation."
          ]
        },
        {
          id: "g6.winter.sci.w2.d2.arena2",
          type: "numeric",
          stem: "A block of ice is at −5 degrees C. To start melting, it must warm to water's melting point of 0 degrees C. How many degrees must it warm?",
          answer: 5,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "The melting point of water is 0 degrees C.",
            "Find the difference between 0 and −5.",
            "0 − (−5) = 0 + 5 = 5 degrees of warming."
          ],
          explanation: "From −5 degrees C up to 0 degrees C is 0 − (−5) = 5 degrees of warming."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: States of Matter Shake",
      prompt:
        "Be the water molecules! As a SOLID, stand stiff and barely jiggle. As a LIQUID, sway and slide loosely past imaginary neighbors. As a GAS, bounce and zoom your arms wildly in all directions. Cycle solid to liquid to gas twice.",
      scienceTieIn: "Your tight jiggle, loose sway, and wild bounce match how real particles move slower or faster as water changes state — and the movement wakes up your body.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one phase change you can watch at home tonight (breath fog, a melting ice cube, a fogged mirror). Predict what will happen, then describe what you actually saw.",
      badge: { id: "phase-shifter", name: "Phase Shifter", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
