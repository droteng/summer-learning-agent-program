// Grade 7 Science — Winter Expedition, Week 1 (Winter Warm-Up), Day 2.
// Topic: states of matter deepened into thermal energy, particle motion, and
// energy transfer during phase changes (the Grade 7 level-up of Grade 6's
// solid/liquid/gas water work).

export const winterG7ScienceW1D2 = {
  id: "g7.winter.sci.w1.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Science",
  topic: "Thermal energy and particle motion in the states of water",
  topicTag: "thermal-energy-phase-change",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS1-4", "NGSS.MS-PS3-4"],
  hook: "When ice melts on a warm sidewalk, energy is moving — heat flows from the warmer surroundings into the colder ice, speeding up its particles until they break free. Today you go beyond naming solid, liquid, and gas: you follow the ENERGY that drives every change of state.",
  miniLesson: [
    "Temperature measures the AVERAGE motion (kinetic energy) of a substance's particles. Warmer particles move faster; colder particles move slower. In ice they only vibrate in place; in vapor they zoom freely.",
    "Thermal energy always flows from the warmer object to the colder one. Snow melts because heat moves FROM the warm air or ground INTO the cold snow — the snow does not 'give off cold.'",
    "During a phase change (like ice melting at 0 °C), added energy goes into breaking the bonds between particles rather than raising the temperature — so the temperature can hold steady even while heat is still being absorbed."
  ],
  workedExample: {
    prompt: "You place a 0 °C ice cube in a warm room and time it as it melts. Explain, in terms of energy and particle motion, why the ice-and-water mixture stays at 0 °C the whole time it is melting.",
    steps: [
      "Heat flows from the warm room INTO the colder ice because energy moves from warmer to colder.",
      "That incoming energy is used to break the rigid bonds holding the solid's particles in place, not to speed the particles up.",
      "Because the energy goes into rearranging particles (solid → liquid) instead of increasing their average motion, the temperature stays at 0 °C.",
      "Only after ALL the ice has melted does further heat start raising the liquid water's temperature above 0 °C."
    ],
    answer: "During melting, incoming thermal energy breaks particle bonds rather than raising average particle motion, so the mixture holds at 0 °C until the ice is fully melted."
  },
  items: [
    {
      id: "g7.winter.sci.w1.d2.q1",
      type: "multiple_choice",
      stem: "What does the TEMPERATURE of a sample of snow actually measure?",
      choices: [
        "The total number of particles in the snow",
        "The average motion (kinetic energy) of the snow's particles",
        "How much 'cold' the snow is giving off",
        "The color of the snow"
      ],
      answerIndex: 1,
      explanation: "Temperature is a measure of the AVERAGE kinetic energy (motion) of the particles. Colder means the particles move more slowly, on average.",
      hintLadder: [
        "Temperature is tied to how fast the particles are moving.",
        "It's an AVERAGE, not a total count.",
        "It measures the average motion, or kinetic energy, of the particles."
      ]
    },
    {
      id: "g7.winter.sci.w1.d2.q2",
      type: "multiple_choice",
      stem: "A warm hand melts a snowball. In which direction does thermal energy flow, and why?",
      choices: [
        "From the snowball to the hand, because cold moves toward heat",
        "From the hand to the snowball, because energy flows from warmer to colder",
        "In both directions equally, so nothing really melts",
        "There is no energy flow; the snow just decides to melt"
      ],
      answerIndex: 1,
      explanation: "Thermal energy always flows from the warmer object (the hand) to the colder object (the snowball). The snow doesn't emit cold — it absorbs heat, which speeds up its particles until they melt.",
      hintLadder: [
        "Heat always moves from hot to cold, never the reverse on its own.",
        "The hand is warmer than the snowball.",
        "So energy flows FROM the hand INTO the snowball."
      ],
      misconceptionsTargeted: ["cold-flows"]
    },
    {
      id: "g7.winter.sci.w1.d2.q3",
      type: "multiple_choice",
      stem: "As liquid water at 5 °C is cooled toward freezing, what happens to its particles?",
      choices: [
        "They gain energy and move faster",
        "They lose energy, slow down, and eventually lock into a fixed arrangement",
        "They instantly turn into a new substance",
        "Their number decreases"
      ],
      answerIndex: 1,
      explanation: "Cooling removes thermal energy, so the particles slow down. Near 0 °C they slow enough that attractions lock them into the rigid arrangement of ice — still the same water, just less particle motion.",
      hintLadder: [
        "Cooling means energy is leaving the water.",
        "Less energy means the particles move more slowly.",
        "Slow enough particles lock into the fixed pattern of a solid."
      ]
    },
    {
      id: "g7.winter.sci.w1.d2.q4",
      type: "short_answer",
      stem: "A student watches a beaker of ice water on a hot plate. For several minutes the thermometer reads a steady 0 °C even though the hot plate is clearly adding heat. Explain where that energy is going and why the temperature is not rising.",
      rubric: {
        level3: "Explains that during the phase change the added thermal energy is used to BREAK the bonds between the solid particles (melting) rather than increasing their average motion, so temperature stays constant until all the ice has melted.",
        level2: "Says the energy is 'melting the ice' or 'changing state' but does not clearly connect it to bonds/particle rearrangement instead of temperature rise.",
        level1: "Claims the thermometer is broken, or gives no energy-based reasoning."
      },
      exemplar: "The hot plate's energy is flowing into the ice, but during melting that energy is being used to break the bonds that lock the solid's particles in place, not to make the particles move faster. Since temperature measures average particle motion, and the energy is going into rearranging particles instead, the temperature holds at 0 °C until every bit of ice has melted. After that, more heat finally raises the water's temperature.",
      hintLadder: [
        "The heat isn't disappearing — what job is it doing during melting?",
        "It's pulling apart the bonds that hold the solid together.",
        "Since that energy isn't speeding particles up, the temperature stays flat."
      ]
    },
    {
      id: "g7.winter.sci.w1.d2.q5",
      type: "short_answer",
      stem: "Two identical cups of hot cocoa sit outside on a freezing night. One is left open; the other is sealed with a tight lid. Predict which cools faster and explain your reasoning using energy transfer and change of state.",
      rubric: {
        level3: "Predicts the OPEN cup cools faster AND explains it with at least two energy ideas — e.g., evaporation carries away thermal energy as the fastest particles escape, and the open surface allows more heat to transfer to the cold air — while the lid traps vapor and slows both.",
        level2: "Correctly predicts the open cup cools faster but supports it with only one energy/state idea or a partial explanation.",
        level1: "Wrong prediction, or a guess with no energy/state reasoning."
      },
      exemplar: "The open cup cools faster. In the open cup the fastest, most energetic water particles escape as vapor (evaporation), and each one that leaves carries thermal energy away, which lowers the average energy — the temperature — of what's left. The open surface also lets heat transfer straight into the cold air. The sealed lid traps escaping vapor so it can condense back and returns some energy, and it blocks that direct transfer, so the sealed cocoa stays warm longer.",
      hintLadder: [
        "Think about what escapes from the open surface of the hot cocoa.",
        "Evaporation lets the most energetic particles leave, carrying energy with them.",
        "A lid traps that vapor and slows heat transfer to the cold air."
      ]
    }
  ],
  reflectionPrompt: "Find one moment in your winter day where you can 'see' energy moving between warm and cold — steam off a mug, frost melting off a window, your breath fogging. Which way was the heat flowing, and how could you tell?",
  misconceptionBank: [
    {
      id: "cold-flows",
      label: "Thinks 'cold' flows into warm objects",
      description: "Believes coldness is a substance that moves from ice into warmer things, rather than heat flowing from warm to cold.",
      coachMove: "Reframe every example as HEAT moving from the warmer object to the colder one; 'cold' is just the absence of thermal energy, and it never travels on its own."
    },
    {
      id: "temp-rises-during-melt",
      label: "Thinks temperature must rise whenever heat is added",
      description: "Assumes adding heat always raises temperature, so a steady 0 °C reading during melting seems impossible.",
      coachMove: "Show that during a phase change the incoming energy breaks particle bonds instead of speeding particles up, so the temperature plateaus until the change of state finishes."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Cocoa That Won't Warm Up",
      prompt:
        "You drop an ice cube into hot cocoa and stir. A thermometer shows the cocoa cooling fast, then hovering while the last sliver of ice melts, then cooling again. Why does the temperature seem to 'pause' right at the end — even though the room is still warm?",
      answer:
        "While any ice remains, the energy leaving the cocoa is being spent breaking the ice's particle bonds (melting it) instead of just cooling the liquid, so the reading levels off. Once the last ice melts, all the energy exchange goes back to changing the liquid's temperature — and it moves again.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Energy-Flow Winter Comic",
      challenge:
        "Create a comic or storyboard that follows one water molecule — call it 'Dewey' — through a winter day, but this time show the ENERGY, not just the state. In each panel, add an arrow showing which way heat is flowing and label whether particle motion is speeding up or slowing down.",
      materials: ["Paper & markers, OR a drawing/comic app"],
      steps: [
        "Draw panel 1 with Dewey locked in an icicle (solid): particles barely vibrating, low energy.",
        "As heat flows IN, show Dewey melting then evaporating — draw energy arrows pointing into Dewey and particles moving faster.",
        "Add at least one panel where the temperature holds steady during a phase change, and explain in a caption where the energy is going.",
        "End with heat flowing OUT (condensation or freezing) — arrows leaving Dewey, particles slowing down."
      ],
      deliverable: "A labeled comic or storyboard showing Dewey through at least three states WITH energy-flow arrows and a note about particle motion in each.",
      choiceBoard: [
        "Draw the multi-panel comic with heat-flow arrows and particle-motion labels.",
        "Write Dewey's diary with one entry per state describing the energy going in or out.",
        "Make an energy-flow diagram of ice ↔ water ↔ vapor with arrows for heat gained and heat released at each change."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Thermal Energy Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w1.d2.arena1",
          type: "multiple_choice",
          stem: "Frost forms on a window overnight when water vapor becomes ice crystals WITHOUT passing through liquid. In terms of energy, what must happen for this to occur?",
          choices: [
            "The vapor must absorb energy to speed its particles up",
            "The vapor must release thermal energy so its particles slow enough to lock directly into a solid",
            "No energy change is needed for deposition",
            "The window must give off cold into the vapor"
          ],
          answerIndex: 1,
          explanation: "Deposition (gas → solid) requires the vapor to RELEASE thermal energy. As the particles lose energy to the cold window, they slow down and lock directly into the rigid pattern of ice — no liquid stage needed.",
          hintLadder: [
            "Going from a fast-moving gas to a locked solid means the particles must slow down.",
            "Particles slow down when they LOSE energy, not gain it.",
            "So the vapor releases thermal energy to the cold window."
          ]
        },
        {
          id: "g7.winter.sci.w1.d2.arena2",
          type: "short_answer",
          stem: "A friend says, 'Putting salt on an icy sidewalk adds heat, and that's what melts the ice.' Explain what is actually going on with energy and particles, correcting the 'salt adds heat' idea.",
          rubric: {
            level3: "States that salt does NOT add heat; instead it lowers the freezing/melting point so ice can melt at colder temperatures, and the energy to melt it still comes from the surroundings (air, ground, sun) flowing into the ice.",
            level2: "Says salt doesn't really add heat and helps ice melt, but the explanation of lowered freezing point or where the energy comes from is incomplete.",
            level1: "Agrees that salt adds heat, or gives no energy-based reasoning."
          },
          exemplar: "Salt doesn't add any heat — it isn't warm. What it does is lower the temperature at which water freezes, so ice that was frozen solid can now melt even though it's still cold out. The thermal energy that actually melts the ice still flows in from the surroundings, like the ground, the air, or sunlight. So the salt changes the melting POINT, but the surroundings supply the energy.",
          hintLadder: [
            "Is a pinch of road salt actually hot? Where would 'added heat' come from?",
            "Salt changes the TEMPERATURE at which water freezes and melts.",
            "The energy to melt still flows in from the warmer surroundings, not the salt."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Energy In, Energy Out",
      prompt:
        "Be the particles. When a caller says 'heat IN,' move faster and spread apart — shake, bounce, widen your arms. When they say 'heat OUT,' slow down and pull in tight until you freeze still as a solid. Do 6 rounds, ending frozen with low energy.",
      scienceTieIn: "Your body models average kinetic energy: more energy in means more motion (like a warming gas), and energy out means slowing down (like freezing) — plus the movement itself boosts blood flow to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one winter moment where you noticed energy moving between something warm and something cold. Which direction was the heat flowing, and how did the particles' motion change because of it?",
      badge: { id: "g7-winter-thermal-energy-tracker", name: "Thermal Energy Tracker", emoji: "🔥" },
      estimatedMinutes: 7
    }
  }
};
