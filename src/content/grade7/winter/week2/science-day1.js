// Grade 7 Science — Winter Expedition, Week 2 (Energy & Matter), Day 1.
// Topic: heat transfer (conduction, convection, radiation) — grade-7 depth with
// energy flow direction, insulation reasoning, and quantitative temperature change.

export const winterG7ScienceW2D1 = {
  id: "g7.winter.sci.w2.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Heat transfer: conduction, convection, and radiation",
  topicTag: "heat-transfer",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-3", "NGSS.MS-PS3-4"],
  hook: "Thermal energy never sits still — it always flows from warmer to colder until things even out. On a sub-zero morning that means heat is leaking out of you three different ways at once. Today you model each pathway and prove why insulation wins.",
  miniLesson: [
    "Thermal energy always flows from higher temperature to lower temperature, and it moves three ways. Conduction transfers energy through direct particle-to-particle collisions in a material — metals conduct fast because their particles pass energy along efficiently, which is why cold metal feels colder than cold wood at the same temperature.",
    "Convection transfers energy through the bulk motion of a fluid (gas or liquid): heated fluid becomes less dense and rises while cooler, denser fluid sinks, setting up a repeating convection current that carries energy around a space.",
    "Radiation transfers energy as electromagnetic (infrared) waves that require no medium at all, so it crosses the vacuum of space. Insulation works by attacking all three pathways — trapping still air to slow conduction and convection, and using reflective layers to bounce radiation back."
  ],
  workedExample: {
    prompt: "A camper's mug of tea sits at 78 degrees C in a −6 degrees C tent. Identify the dominant transfer type for each: (a) tea losing heat to the cold metal mug wall, (b) infrared warmth felt from a nearby stove, (c) the cooled air near the tent floor sinking while warm air rises. Then state the direction energy flows for (a).",
    steps: [
      "Tea touching the mug wall transfers energy by particle collisions through the metal = conduction.",
      "Warmth felt across a gap as infrared waves = radiation.",
      "Warm air rising and cool air sinking in a loop = convection.",
      "Direction: energy always flows warm to cold, so it flows FROM the 78 degrees C tea TO the colder mug and air.",
      "So: (a) conduction, (b) radiation, (c) convection; energy flows from the hotter tea to the colder surroundings."
    ],
    answer: "(a) conduction, (b) radiation, (c) convection; energy flows from the warmer tea to the colder surroundings"
  },
  items: [
    {
      id: "g7.winter.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "Two benches outside sit at the same −3 degrees C: one metal, one wood. The metal one feels much colder to your hand. Why?",
      choices: [
        "The metal bench is actually at a lower temperature than the wood",
        "Metal conducts thermal energy away from your hand faster than wood does",
        "Wood radiates heat into your hand",
        "Metal creates cold and pushes it into your skin"
      ],
      answerIndex: 1,
      explanation: "Both benches are the same temperature. Metal is a better conductor, so it pulls thermal energy out of your warm hand faster, making it FEEL colder — cold is the absence of energy, not a substance.",
      hintLadder: [
        "The two benches are the exact same temperature.",
        "Which material moves thermal energy faster by conduction?",
        "Faster conduction out of your hand = feels colder."
      ],
      misconceptionsTargeted: ["cold-is-a-substance"]
    },
    {
      id: "g7.winter.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "The sun warms your face on a clear −10 degrees C day, but the air between you and the sun stays freezing cold. Which statement best explains this?",
      choices: [
        "Conduction carries the heat because the cold air touches your face",
        "Convection carries warm air all the way from the sun to Earth",
        "Radiation delivers energy as infrared waves that heat your skin directly without needing to heat the air in between",
        "The cold air blocks all heat, so you cannot really feel warmth"
      ],
      answerIndex: 2,
      explanation: "Radiation travels as electromagnetic waves through the near-vacuum of space and is absorbed by your skin, warming it directly — the thin, cold air in between is barely heated.",
      hintLadder: [
        "There is almost no material between you and the sun.",
        "Which transfer type needs NO medium to travel?",
        "Infrared waves absorbed by your skin = radiation."
      ],
      misconceptionsTargeted: ["heat-needs-medium"]
    },
    {
      id: "g7.winter.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "A puffy down coat and a thin windbreaker are the same temperature when you put them on. Why does the down coat keep you warmer?",
      choices: [
        "The down coat generates its own heat from the feathers",
        "The windbreaker reflects all your body heat back inward",
        "The down coat pulls warmth in from the cold outdoor air",
        "The down traps thick pockets of still air, and still air is a poor conductor, so it slows the energy leaving your body"
      ],
      answerIndex: 3,
      explanation: "No coat makes heat. The down loft traps still air — a poor conductor and a barrier to convection — so it slows the rate at which your body's thermal energy escapes.",
      hintLadder: [
        "A coat is an insulator, not a heater.",
        "What fills the space between down feathers?",
        "Trapped still air is a poor conductor, slowing heat loss."
      ],
      misconceptionsTargeted: ["coat-makes-heat"]
    },
    {
      id: "g7.winter.sci.w2.d1.q4",
      type: "numeric",
      stem: "Cocoa starts at 82 degrees C. In the first minute conduction and convection carry away 9 degrees; over the next 4 minutes radiation and continued cooling remove another 6 degrees each minute. What is the cocoa's temperature after 5 minutes total, in degrees C?",
      answer: 49,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "Minute 1 removes 9 degrees; each of the next 4 minutes removes 6 degrees.",
        "Total lost = 9 + (4 × 6) = 9 + 24 = 33 degrees.",
        "82 − 33 = 49 degrees C."
      ],
      explanation: "Energy lost = 9 + (4 × 6) = 33 degrees. Final temperature = 82 − 33 = 49 degrees C."
    },
    {
      id: "g7.winter.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Explain how a convection current forms above a floor heater, using the ideas of density and energy flow. Use the words 'density,' 'rise,' and 'current' in your answer.",
      rubric: {
        level3: "Explains that the heater adds energy so the air expands and becomes LESS dense and RISES, while cooler denser air sinks to replace it, forming a repeating current that transfers energy around the room — correctly names this as convection.",
        level2: "States warm air rises and cool air sinks but does not connect it clearly to density or a repeating current.",
        level1: "Incorrect explanation or omits air movement entirely."
      },
      exemplar: "The heater adds thermal energy to the air above it, so that air expands and its density drops. Because it is now less dense than the surrounding air, it rises. Cooler, denser air sinks to take its place, gets heated, and rises too. This repeating loop is a convection current that spreads energy through the room.",
      hintLadder: [
        "What happens to air's density when it is heated?",
        "Less-dense air does what — rise or sink?",
        "Describe the repeating loop and name it convection."
      ]
    }
  ],
  reflectionPrompt: "Find one spot at home where you feel warm today. Identify the dominant heat-transfer pathway keeping you warm there, and explain which direction the thermal energy is flowing.",
  misconceptionBank: [
    {
      id: "cold-is-a-substance",
      label: "Thinks cold is a substance that flows in",
      description: "Believes cold objects push 'cold' into your hand rather than pulling thermal energy out.",
      coachMove: "Reframe every example as energy LEAVING the warmer thing. Metal feels colder because it drains your hand's energy faster — nothing is flowing in."
    },
    {
      id: "heat-needs-medium",
      label: "Thinks heat always needs a material to travel through",
      description: "Assumes energy cannot cross empty space and forgets radiation.",
      coachMove: "Point to the sun heating Earth across a vacuum. Ask what material is in between — nothing. That is radiation as electromagnetic waves."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Same Temperature, Different Feel",
      prompt:
        "A metal spoon and a wooden spoon have sat in the same freezer overnight, so both are exactly −15 degrees C. You touch both. The metal one feels far colder. If they are the identical temperature, why does one feel so much worse?",
      answer:
        "Feeling relies on how FAST energy leaves your skin, not just the temperature. Metal is a strong conductor, so it drains your finger's thermal energy quickly — that fast drain registers as 'colder.' Wood conducts slowly, so your finger keeps more of its warmth. Same temperature, different conduction rate.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Engineer a Triple-Threat Thermos",
      challenge:
        "Design a drink container that defeats all THREE transfer pathways at once. For each pathway you must name a specific material or feature and justify, in one sentence, the physics of why it works.",
      materials: ["Paper, felt, foil, cotton, bubble wrap, or fabric scraps; a cup; tape"],
      steps: [
        "Choose a layer that slows conduction and explain why (trapped still air, low-conductivity material).",
        "Add a reflective (foil) layer and explain how it fights radiation.",
        "Add a sealed lid feature and explain how it stops convection carrying warm air away.",
        "Sketch or build the design and label each layer with the pathway it defeats and a one-line physics justification."
      ],
      deliverable: "A labeled thermos design (drawn or built) with a one-sentence physics justification for how each layer blocks conduction, convection, and radiation.",
      choiceBoard: [
        "Sketch a fully labeled cross-section diagram with all three defenses justified.",
        "Build it and run a fair test: two cups of equal warm water, one wrapped, measured every 3 minutes.",
        "Write a product spec sheet that markets your thermos by explaining the physics of each layer."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Heat Transfer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "A vacuum-insulated flask keeps cocoa hot for hours. The gap between its inner and outer walls is a vacuum, and the walls are shiny silver. Which two pathways does this design MOST directly defeat?",
          choices: [
            "The vacuum stops conduction and convection (no particles to carry energy), and the shiny walls reflect radiation",
            "The vacuum creates new heat, and the silver walls conduct it inward",
            "The silver walls stop convection only; radiation is unaffected",
            "It defeats none of them; vacuum flasks rely on chemical warmers"
          ],
          answerIndex: 0,
          explanation: "A vacuum has almost no particles, so it blocks conduction and convection (both need matter). The reflective silver surfaces bounce infrared radiation back toward the cocoa, attacking the third pathway.",
          hintLadder: [
            "What do conduction and convection both need that a vacuum lacks?",
            "What does a shiny reflective surface do to infrared waves?",
            "Vacuum kills conduction/convection; mirrors reflect radiation."
          ]
        },
        {
          id: "g7.winter.sci.w2.d1.arena2",
          type: "numeric",
          stem: "A metal bench outside is at −7 degrees C. Through conduction your body heat raises the seat spot to 5 degrees C, but after you stand up it cools back down to −2 degrees C. What is the temperature CHANGE from the −7 degrees C start to the final −2 degrees C, in degrees?",
          answer: 5,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Change = final − start.",
            "Final is −2, start is −7: −2 − (−7).",
            "−2 − (−7) = −2 + 7 = 5 degrees warmer than the start."
          ],
          explanation: "Change = final − start = −2 − (−7) = −2 + 7 = 5 degrees (the spot ended 5 degrees warmer than where it began)."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Convection Current Sway",
      prompt:
        "Become a parcel of air. Crouch low and dense as 'cold' air, then slowly rise onto your toes with arms floating upward as you 'heat up and become less dense.' Sink back down as you cool. Flow up and down 6 times, smooth and continuous like a real convection loop.",
      scienceTieIn: "Your rise-and-sink cycle models a convection current — heated, less-dense air rising while cool, dense air sinks — and the movement boosts your own circulation to warm you.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Describe the warmest moment of your day. Which of the three pathways delivered energy to you, and in which direction was thermal energy flowing? Could you have felt warm from more than one pathway at once?",
      badge: { id: "g7-winter-thermal-engineer", name: "Thermal Engineer", emoji: "🔥" },
      estimatedMinutes: 7
    }
  }
};
