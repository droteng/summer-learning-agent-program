// Grade 6 Science — Winter Expedition, Week 1 (Winter Warm-Up), Day 2.
// Topic: states of matter (solid/liquid/gas) using ice, water, and water vapor.

export const winterG6ScienceW1D2 = {
  id: "g6.winter.sci.w1.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "States of matter with ice, water, and water vapor",
  topicTag: "states-of-matter",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS1-4", "NGSS.MS-PS1-1"],
  hook: "The same water that freezes into a sidewalk ice patch can melt into a puddle and rise as invisible vapor from your warm breath. Today you follow one substance — water — through all three states of matter.",
  miniLesson: [
    "Matter comes in states: a SOLID (like ice) holds its shape, a LIQUID (like water) flows and takes the shape of its container, and a GAS (like water vapor) spreads to fill any space.",
    "Adding heat gives particles more energy and space: ice MELTS to water, and water EVAPORATES to vapor. Removing heat does the reverse: vapor CONDENSES and water FREEZES.",
    "Through all these changes the water is still H₂O — only the arrangement and energy of its particles change, not the substance itself."
  ],
  workedExample: {
    prompt: "You leave an ice cube on a warm windowsill and it slowly turns to a puddle, then the puddle disappears. Name the two changes of state in order.",
    steps: [
      "Start: the ice cube is a SOLID.",
      "Heat is added, so the solid ice MELTS into liquid water (the puddle).",
      "More heat is added, so the liquid water EVAPORATES into water vapor (a gas), which spreads into the air.",
      "Order of changes: melting (solid → liquid), then evaporation (liquid → gas)."
    ],
    answer: "First melting (solid ice → liquid water), then evaporation (liquid water → water vapor gas)."
  },
  items: [
    {
      id: "g6.winter.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Which state of matter keeps its OWN shape without a container?",
      choices: ["A gas like water vapor", "A liquid like water", "A solid like ice", "None of them keep a shape"],
      answerIndex: 2,
      explanation: "A solid such as ice holds its own shape because its particles are locked tightly in place.",
      hintLadder: [
        "Think about which one you can pick up and it stays the same shape.",
        "A liquid flows and a gas spreads out.",
        "Ice stays a block — that's the solid."
      ]
    },
    {
      id: "g6.winter.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "On a cold morning your warm breath turns into a little cloud in the air. What change of state makes the cloud appear?",
      choices: [
        "Melting: solid to liquid",
        "Condensation: water vapor cooling into tiny liquid droplets",
        "Freezing: liquid to solid",
        "Evaporation: liquid to gas"
      ],
      answerIndex: 1,
      explanation: "Warm water vapor in your breath hits cold air, cools, and CONDENSES into tiny visible liquid droplets — the little cloud.",
      hintLadder: [
        "Your breath carries invisible water vapor (a gas).",
        "The cold air cools that gas down.",
        "Cooling a gas into liquid droplets is condensation."
      ],
      misconceptionsTargeted: ["breath-cloud-is-smoke"]
    },
    {
      id: "g6.winter.sci.w1.d2.q3",
      type: "multiple_choice",
      stem: "When liquid water FREEZES into ice, what is happening to the water's particles?",
      choices: [
        "They gain energy and spread far apart",
        "They lose energy and lock into a fixed arrangement",
        "They turn into a different substance",
        "They disappear"
      ],
      answerIndex: 1,
      explanation: "Freezing removes heat, so the particles lose energy, slow down, and lock into the rigid arrangement of a solid — but it's still water.",
      hintLadder: [
        "Freezing means the water is getting colder, not warmer.",
        "Colder means the particles move less and have less energy.",
        "In a solid the particles are locked in place."
      ]
    },
    {
      id: "g6.winter.sci.w1.d2.q4",
      type: "short_answer",
      stem: "A snowbank sits in the sun and slowly shrinks, but no puddle ever forms under it. Explain how the snow can disappear WITHOUT melting into a puddle first.",
      rubric: {
        level3: "Explains sublimation — the solid snow/ice turns directly into water vapor (gas) without becoming liquid — and connects it to added energy from the sun.",
        level2: "Says the snow turned into vapor or 'into the air' but doesn't clearly state it skipped the liquid stage.",
        level1: "Says only 'it melted' or gives no change-of-state reasoning."
      },
      exemplar: "The sun's energy can turn the solid snow straight into water vapor (a gas) without it becoming liquid first. That's called sublimation, so the snow shrinks away into the air with no puddle.",
      hintLadder: [
        "The snow left the snowbank but no liquid appeared — where did it go?",
        "It went into the air as a gas.",
        "Solid turning straight to gas skips the liquid stage."
      ]
    },
    {
      id: "g6.winter.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Trace one water molecule from a frozen icicle to invisible water vapor in the air. Name each state it passes through and the change between them.",
      rubric: {
        level3: "Names solid (ice) → liquid (water) → gas (vapor) in order AND correctly labels the changes (melting, then evaporation).",
        level2: "Gets the states in order but mislabels or omits one of the changes.",
        level1: "States out of order or no changes named."
      },
      exemplar: "The molecule starts in the solid icicle. Heat melts the ice into liquid water dripping down. More heat evaporates that liquid water into water vapor, an invisible gas in the air. So: solid → (melting) → liquid → (evaporation) → gas.",
      hintLadder: [
        "Start with the icicle — what state is that?",
        "Add heat: solid becomes what next?",
        "Add more heat: liquid becomes what, and what's that change called?"
      ]
    }
  ],
  reflectionPrompt: "Look around your home in winter for all three states of water at once — ice, liquid, and vapor. Where did you spot each one?",
  misconceptionBank: [
    {
      id: "breath-cloud-is-smoke",
      label: "Thinks the cloud from your breath is smoke",
      description: "Believes the visible puff of winter breath is smoke or 'cold air' rather than condensed water droplets.",
      coachMove: "Remind: your breath carries water vapor; cold air cools it so it condenses into tiny liquid droplets you can see — the same way a cloud forms."
    },
    {
      id: "state-change-new-substance",
      label: "Thinks melting or freezing creates a new substance",
      description: "Assumes ice, water, and vapor are different substances instead of the same water in different states.",
      coachMove: "Stress that it's always H₂O — only the energy and arrangement of particles change, not the substance."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Vanishing Ice Cube",
      prompt:
        "You put one ice cube in a sealed jar and another on an open plate, both in a warm room. A day later the plate is dry and the jar has water and foggy sides. What happened to the water in each — and where did the plate's water go?",
      answer:
        "The ice melted to liquid in both. On the open plate the liquid evaporated into water vapor that escaped into the room, so it looks dry. In the sealed jar the vapor couldn't leave — it condensed back onto the cold glass as fog and droplets. Same water, different fates!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Water's Winter Journey Comic",
      challenge:
        "Create a comic or storyboard that follows one drop of water — call it 'Dewey' — through solid, liquid, and gas over a winter day. Show at least three states and label every change of state with its science name.",
      materials: ["Paper & markers, OR a drawing/comic app"],
      steps: [
        "Draw panel 1 with Dewey as an ice crystal (solid) on a frozen roof.",
        "Add heat in the next panels: melt Dewey to a liquid drop, then evaporate to vapor.",
        "Label each arrow between panels with the change: melting, evaporation, condensation, or freezing.",
        "End with Dewey returning to a solid (frost or snow) to show the cycle repeats."
      ],
      deliverable: "A labeled comic or storyboard showing Dewey in at least three states with each change of state named.",
      choiceBoard: [
        "Draw the multi-panel comic with labeled arrows.",
        "Write Dewey's diary with one entry per state of matter.",
        "Make a poster with a big cycle diagram of ice ↔ water ↔ vapor and the change names."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: States of Matter Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "Frost forms directly on a cold window overnight — water vapor in the air becomes ice crystals WITHOUT ever being liquid. What is this change called?",
          choices: [
            "Melting",
            "Evaporation",
            "Deposition (gas straight to solid)",
            "Condensation"
          ],
          answerIndex: 2,
          explanation: "When a gas turns straight into a solid without a liquid stage, it's called deposition — that's how frost forms on a cold window.",
          hintLadder: [
            "The vapor is a gas; the frost is a solid.",
            "It skipped the liquid water stage entirely.",
            "Gas straight to solid has a special name: deposition."
          ]
        },
        {
          id: "g6.winter.sci.w1.d2.arena2",
          type: "short_answer",
          stem: "A friend says, 'Ice, water, and steam are three totally different substances.' Explain why that's not quite right, using the idea of particles.",
          rubric: {
            level3: "States that all three are the same substance (water/H₂O) AND explains that only the energy and arrangement of the particles differ between states.",
            level2: "Says they're the same substance but the particle explanation is thin or missing.",
            level1: "Agrees with the friend or gives no particle-based reasoning."
          },
          exemplar: "They're actually all the same substance — water. In ice the particles are locked tight, in liquid water they slide past each other, and in steam they fly far apart. Adding or removing heat changes the particles' energy and spacing, not the substance itself.",
          hintLadder: [
            "Is the substance changing, or just its form?",
            "Think about what the particles are doing in each state.",
            "Heat changes energy and spacing, not the identity of the water."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Solid, Liquid, Gas",
      prompt:
        "Act out the states as someone calls them: for SOLID, freeze stiff and hold still; for LIQUID, sway and flow loosely; for GAS, spread your arms and bounce around your space. Do 6 quick rounds, ending frozen as a solid.",
      scienceTieIn: "Your moving body works like water's particles — tight and still as a solid, loose as a liquid, and zooming around as a gas — the more energy, the more they move.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Name a place in your winter day where you saw water change state — a foggy mirror, a melting boot print, frost on a window. What change was happening?",
      badge: { id: "matter-state-shifter", name: "Matter State Shifter", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
