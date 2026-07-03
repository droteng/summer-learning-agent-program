// Grade 5 Science — Winter Expedition, Week 1 (Winter Warm-Up), Day 2.
// Grade 5 counterpart of g6.winter.sci.w1.d2. Same topic (states of matter
// with ice, water, and water vapor) pitched down to Grade 5: simpler particle
// talk, shorter passages, more vocab support. Wintry frozen-world tone.

export const winterG5ScienceW1D2 = {
  id: "g5.winter.sci.w1.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "States of matter with ice, water, and water vapor",
  topicTag: "states-of-matter",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-1", "NGSS.5-PS1-3"],
  hook: "The same water that freezes into a slippery sidewalk can melt into a puddle and rise as invisible vapor from your warm breath. Today you follow one thing — water — through all three states of matter.",
  miniLesson: [
    "Matter comes in three states. A SOLID (like ice) keeps its own shape. A LIQUID (like water) flows and takes the shape of its cup. A GAS (like water vapor) spreads out to fill any space.",
    "Adding HEAT makes ice MELT into water, and makes water EVAPORATE into vapor. Taking heat AWAY does the reverse: vapor CONDENSES back to water, and water FREEZES into ice.",
    "Through all these changes it is still water. Only the state changes — melting or freezing does not turn water into a brand-new substance."
  ],
  workedExample: {
    prompt: "You leave an ice cube on a warm windowsill. It turns into a puddle, then the puddle dries up and disappears. Name the two changes of state in order.",
    steps: [
      "Start: the ice cube is a SOLID.",
      "Heat is added, so the solid ice MELTS into liquid water (the puddle).",
      "More heat is added, so the liquid water EVAPORATES into water vapor (a gas) that spreads into the air.",
      "Order of changes: melting (solid → liquid), then evaporation (liquid → gas)."
    ],
    answer: "First melting (solid ice → liquid water), then evaporation (liquid water → water vapor gas)."
  },
  items: [
    {
      id: "g5.winter.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "Which state of matter keeps its OWN shape without a container?",
      choices: ["A gas like water vapor", "A liquid like water", "A solid like ice", "None of them keep a shape"],
      answerIndex: 2,
      explanation: "A solid such as ice keeps its own shape because it is firm and stays put.",
      hintLadder: [
        "Think about which one you can pick up and it stays the same shape.",
        "A liquid flows and a gas spreads out.",
        "Ice stays a block — that is the solid."
      ]
    },
    {
      id: "g5.winter.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "On a cold morning your warm breath makes a little cloud in the air. What change of state makes the cloud appear?",
      choices: [
        "Melting: solid turning to liquid",
        "Condensation: water vapor cooling into tiny liquid droplets",
        "Freezing: liquid turning to solid",
        "Evaporation: liquid turning to gas"
      ],
      answerIndex: 1,
      explanation: "Warm water vapor in your breath hits cold air, cools down, and CONDENSES into tiny liquid droplets — the little cloud you can see.",
      hintLadder: [
        "Your breath carries invisible water vapor (a gas).",
        "The cold air cools that gas down.",
        "Cooling a gas into tiny liquid droplets is called condensation."
      ],
      misconceptionsTargeted: ["breath-cloud-is-smoke"]
    },
    {
      id: "g5.winter.sci.w1.d2.q3",
      type: "multiple_choice",
      stem: "When liquid water FREEZES into ice, what happens?",
      choices: [
        "Heat is added and the water spreads apart",
        "Heat is taken away and the water becomes a firm solid",
        "The water turns into a different substance",
        "The water disappears"
      ],
      answerIndex: 1,
      explanation: "Freezing takes heat away, so the water gets colder and becomes a firm, solid block of ice — but it is still water.",
      hintLadder: [
        "Freezing means the water is getting colder, not warmer.",
        "Colder water turns into a firm solid.",
        "It becomes ice, but it is still water."
      ]
    },
    {
      id: "g5.winter.sci.w1.d2.q4",
      type: "short_answer",
      stem: "A snowbank sits in the sun and slowly gets smaller, but no puddle ever forms under it. Explain how the snow can shrink WITHOUT melting into a puddle first.",
      rubric: {
        level3: "Explains that the solid snow turned straight into water vapor (a gas) without becoming liquid, and connects it to heat/energy from the sun.",
        level2: "Says the snow turned into vapor or 'into the air' but does not clearly say it skipped the liquid stage.",
        level1: "Says only 'it melted' or gives no change-of-state reasoning."
      },
      exemplar: "The sun's heat can turn the solid snow straight into water vapor, a gas, without it becoming liquid water first. So the snow shrinks away into the air with no puddle underneath.",
      hintLadder: [
        "The snow left the snowbank but no liquid appeared — where did it go?",
        "It went into the air as a gas (water vapor).",
        "A solid can turn straight into a gas, skipping the liquid stage."
      ]
    },
    {
      id: "g5.winter.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Follow one bit of water from a frozen icicle to invisible water vapor in the air. Name each state it passes through and the change between them.",
      rubric: {
        level3: "Names solid (ice) → liquid (water) → gas (vapor) in order AND correctly labels the changes (melting, then evaporation).",
        level2: "Gets the states in order but mislabels or leaves out one of the changes.",
        level1: "States out of order or no changes named."
      },
      exemplar: "It starts in the solid icicle. Heat melts the ice into liquid water dripping down. More heat evaporates that liquid water into water vapor, an invisible gas in the air. So: solid → (melting) → liquid → (evaporation) → gas.",
      hintLadder: [
        "Start with the icicle — what state is that?",
        "Add heat: the solid becomes what next?",
        "Add more heat: the liquid becomes what, and what is that change called?"
      ]
    }
  ],
  reflectionPrompt: "Look around your home in winter for all three states of water at once — ice, liquid, and vapor. Where did you spot each one?",
  misconceptionBank: [
    {
      id: "breath-cloud-is-smoke",
      label: "Thinks the cloud from your breath is smoke",
      description: "Believes the visible puff of winter breath is smoke or 'cold air' rather than tiny water droplets.",
      coachMove: "Remind: your breath carries water vapor; cold air cools it so it condenses into tiny liquid droplets you can see — just like a cloud forms."
    },
    {
      id: "state-change-new-substance",
      label: "Thinks melting or freezing makes a new substance",
      description: "Assumes ice, water, and vapor are different substances instead of the same water in different states.",
      coachMove: "Stress that it is always water — only the state changes, not the substance itself."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Vanishing Ice Cube",
      prompt:
        "You put one ice cube in a sealed jar and another on an open plate, both in a warm room. A day later the plate is dry and the jar has water and foggy sides. What happened to the water in each — and where did the plate's water go?",
      answer:
        "The ice melted to liquid in both. On the open plate the liquid evaporated into water vapor that escaped into the room, so it looks dry. In the sealed jar the vapor could not leave — it condensed back onto the cold glass as fog and droplets. Same water, different endings!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Water's Winter Journey Comic",
      challenge:
        "Make a comic or storyboard that follows one drop of water — call it 'Dewey' — through solid, liquid, and gas over a winter day. Show at least three states and label every change of state with its science name.",
      materials: ["Paper & markers, OR a drawing/comic app"],
      steps: [
        "Draw panel 1 with Dewey as an ice crystal (solid) on a frozen roof.",
        "Add heat in the next panels: melt Dewey into a liquid drop, then evaporate to vapor.",
        "Label each arrow between panels with the change: melting, evaporation, condensation, or freezing.",
        "End with Dewey turning back into a solid (frost or snow) to show the cycle repeats."
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
          id: "g5.winter.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "On a warm afternoon, a puddle from melted snow slowly dries up and is gone by evening. What change of state happened to the puddle?",
          choices: [
            "Freezing: liquid turning to solid",
            "Melting: solid turning to liquid",
            "Evaporation: liquid turning to water vapor",
            "Condensation: gas turning to liquid"
          ],
          answerIndex: 2,
          explanation: "The liquid puddle turned into water vapor and spread into the air. Liquid changing into a gas is called evaporation.",
          hintLadder: [
            "The puddle is a liquid; it disappeared into the air.",
            "Air can hold water as an invisible gas.",
            "Liquid changing into a gas is evaporation."
          ]
        },
        {
          id: "g5.winter.sci.w1.d2.arena2",
          type: "short_answer",
          stem: "A friend says, 'Ice, water, and steam are three totally different things.' Explain why that is not quite right.",
          rubric: {
            level3: "States that all three are the same substance (water) AND explains that only the state changes when you add or remove heat.",
            level2: "Says they are the same substance but the explanation about heat/state is thin or missing.",
            level1: "Agrees with the friend or gives no clear reasoning."
          },
          exemplar: "They are really all the same substance — water. Ice is water as a solid, water is the liquid, and steam is water as a gas. Adding or taking away heat changes the state, but it is still water the whole time.",
          hintLadder: [
            "Is the substance changing, or just its form?",
            "Ice, water, and steam are all made of the same thing.",
            "Heat changes the state, not what the substance is."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Solid, Liquid, Gas",
      prompt:
        "Act out the states as someone calls them: for SOLID, freeze stiff and hold still; for LIQUID, sway and flow loosely; for GAS, spread your arms and bounce around your space. Do 6 quick rounds, ending frozen as a solid.",
      scienceTieIn: "Your moving body works like water changing state — tight and still as a solid, loose as a liquid, and zooming around as a gas. The more heat, the more movement.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Name a place in your winter day where you saw water change state — a foggy mirror, a melting boot print, frost on a window. What change was happening?",
      badge: { id: "g5-winter-matter-state-shifter", name: "Matter State Shifter", emoji: "🧊" },
      estimatedMinutes: 7
    }
  }
};
