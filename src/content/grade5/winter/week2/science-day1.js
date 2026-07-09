// Grade 5 Science — Winter Expedition, Week 2 (Energy & Matter), Day 1.
// Topic: heat transfer (conduction, convection, radiation) and why we bundle up.
// Grade 5 counterpart of g6.winter.sci.w2.d1 — same topic, lower difficulty,
// thermometer reading / simple positive differences (no signed arithmetic).

export const winterG5ScienceW2D1 = {
  id: "g5.winter.sci.w2.d1",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Heat transfer: conduction, convection, and radiation",
  topicTag: "heat-transfer",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-3", "NGSS.4-PS3-2"],
  hook: "On a freezing morning, heat is always on the move — leaving your warm body for the icy air. Today you learn the three ways heat travels, and why a good coat helps you stay warm.",
  miniLesson: [
    "Conduction moves heat by touching. When you hold a snowball, heat flows from your warm hand into the cold snow. (Vocabulary: conduction = heat through touch.)",
    "Convection moves heat through moving air or water. Warm air near a heater rises, and cooler air sinks, stirring the room. (Vocabulary: convection = heat carried by moving air or water.)",
    "Radiation moves heat as invisible rays that need no touching at all. That is how the sun warms your face from far away, and how a campfire warms you without touching you. (Vocabulary: radiation = heat that travels as rays.)"
  ],
  workedExample: {
    prompt: "You step outside in winter. Name the type of heat transfer for each: (a) your bare hand on a cold metal railing, (b) the sun warming your cheeks, (c) warm air rising from a floor vent.",
    steps: [
      "Your hand touches the railing, so heat moves by touch = conduction.",
      "The sun warms your face from far away with no touching = radiation.",
      "Warm air moving and rising through the room = convection.",
      "So: (a) conduction, (b) radiation, (c) convection."
    ],
    answer: "(a) conduction, (b) radiation, (c) convection"
  },
  items: [
    {
      id: "g5.winter.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "You grab a cold metal doorknob and your hand quickly feels cold. Which type of heat transfer is happening?",
      choices: ["Conduction", "Convection", "Radiation", "Evaporation"],
      answerIndex: 0,
      explanation: "Heat moves by touch from your warm hand into the cold metal — that is conduction.",
      hintLadder: [
        "Are your hand and the doorknob touching?",
        "Heat that moves by touch has a special name.",
        "Touching = conduction."
      ]
    },
    {
      id: "g5.winter.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "The sun warms your face on a cold, clear day, even though the sun is very far away. This works by...",
      choices: [
        "Conduction, because the sun is touching your face",
        "It is impossible for heat to travel that far",
        "Convection, because warm air rises",
        "Radiation, because heat travels as rays that need no touching"
      ],
      answerIndex: 3,
      explanation: "Radiation carries heat as invisible rays, so it can travel all the way from the sun to your skin without anything touching.",
      hintLadder: [
        "The sun is not touching your face.",
        "Which transfer type needs NO touching to work?",
        "Rays traveling far = radiation."
      ],
      misconceptionsTargeted: ["heat-needs-touch"]
    },
    {
      id: "g5.winter.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "Why does wearing a thick winter coat help keep you warm?",
      choices: [
        "The coat makes new heat inside itself",
        "The coat traps a layer of air that slows heat leaving your body",
        "The coat pulls cold in from outside",
        "The coat makes the sun shine brighter"
      ],
      answerIndex: 1,
      explanation: "A coat does not make heat. It traps still air, which is a poor conductor, so it slows the heat leaving your warm body and you stay warmer longer.",
      hintLadder: [
        "A coat is not a heater — it cannot make heat.",
        "What gets trapped between the puffy layers of a coat?",
        "Trapped air slows your body heat from escaping."
      ],
      misconceptionsTargeted: ["coat-makes-heat"]
    },
    {
      id: "g5.winter.sci.w2.d1.q4",
      type: "numeric",
      stem: "A mug of cocoa starts at 80 degrees C. After sitting on a cold table, it loses 30 degrees of heat. What is the cocoa's temperature now, in degrees C?",
      answer: 50,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "The cocoa is losing heat, so its temperature goes down.",
        "Subtract the heat lost from the starting temperature.",
        "80 − 30 = 50."
      ],
      explanation: "Heat leaving the cocoa lowers its temperature: 80 − 30 = 50 degrees C."
    },
    {
      id: "g5.winter.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Explain why warm air rises off a heater and why this is an example of convection. Use the words 'warm,' 'rise,' and 'cold.'",
      rubric: {
        level3: "States that warm air rises while cold air sinks, making a moving current, AND names this moving-air transfer as convection.",
        level2: "Says warm air rises but does not clearly connect it to moving air or to convection.",
        level1: "Incorrect explanation or does not mention air moving."
      },
      exemplar: "The heater warms the air right above it. Warm air rises, and cold air sinks to take its place. This moving loop of air carries heat around the room, and that is convection.",
      hintLadder: [
        "What does air do when it gets warm — rise or sink?",
        "What does the cold air do while the warm air rises?",
        "That moving air current is convection."
      ]
    }
  ],
  reflectionPrompt: "Find one warm spot in your home today. Which of the three heat-transfer types (conduction, convection, radiation) is keeping you warm there?",
  misconceptionBank: [
    {
      id: "heat-needs-touch",
      label: "Thinks heat can only travel by touching",
      description: "Believes heat always needs objects to be touching and forgets radiation can travel far with no touching.",
      coachMove: "Point to the sun: it warms Earth from very far away. Ask, 'Is anything touching between the sun and your skin?' No — that is radiation."
    },
    {
      id: "coat-makes-heat",
      label: "Thinks a coat makes heat",
      description: "Assumes warm clothing produces heat instead of slowing heat from leaving.",
      coachMove: "Ask what a coat would do wrapped around an ice cube (it would slow the melting). A coat is an insulator, not a heater."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Vanishing Warmth",
      prompt:
        "You cup your hands around a warm mug on a freezing day and your fingers feel toasty. But set the mug down and grab a cold metal spoon — your fingers chill fast. Both are just 'touching.' Why does one warm you and one cool you?",
      answer:
        "Heat always flows from warmer to colder. Your hands are warmer than the cold spoon, so heat leaves YOUR fingers (they cool). The mug is warmer than your hands, so heat flows INTO your fingers (they warm). It is all conduction — the direction depends on which side is hotter.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design the Warmest Cup Cozy",
      challenge:
        "Design a cup cozy (a wrap) that keeps cocoa warm the longest. Your job is to trap heat by slowing all three transfer types, using materials you can find at home.",
      materials: ["Paper, felt, foil, cotton, or fabric scraps; a cup; tape"],
      steps: [
        "Pick one soft material to slow conduction (something that traps air).",
        "Add a shiny layer (like foil) to bounce radiation heat back toward the cup.",
        "Add a lid idea to stop warm air rising away by convection.",
        "Sketch or build your cozy and label which layer fights which transfer type."
      ],
      deliverable: "A labeled cozy design (drawn or built) showing which layer blocks conduction, convection, and radiation.",
      choiceBoard: [
        "Sketch a labeled diagram of your cozy with all three layers.",
        "Actually build a cozy and test it on two cups of warm water.",
        "Write a fun ad selling your cozy that explains how it beats all three heat-transfer types."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Heat Transfer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "A campfire warms your face from across the snow, even though the cold air between you and the fire is not warm. Which transfer type reaches your face?",
          choices: [
            "Conduction, because you are touching the fire",
            "Convection, because cold air flows toward you",
            "Radiation, because heat travels as rays to your skin",
            "No heat can reach you across cold air"
          ],
          answerIndex: 2,
          explanation: "The fire sends out rays that travel straight to your skin, warming you without heating all the air in between. That is radiation.",
          hintLadder: [
            "You are not touching the fire, so it is not conduction.",
            "The air between you stays cold, so it is not convection.",
            "Heat traveling as rays = radiation."
          ]
        },
        {
          id: "g5.winter.sci.w2.d1.arena2",
          type: "numeric",
          stem: "A cold metal bench reads 5 degrees C. You sit on it, and through conduction your body heat warms the seat spot to 11 degrees C. By how many degrees did that spot warm up?",
          answer: 6,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Find the difference between the ending and starting temperatures.",
            "Subtract the smaller reading from the bigger one.",
            "11 − 5 = 6."
          ],
          explanation: "The change is 11 − 5 = 6 degrees of warming."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Convection Current Sway",
      prompt:
        "Be a room full of air. Crouch low and 'cold,' then slowly rise onto your toes with arms floating up as you 'warm and rise.' Sink back down as the cold air. Flow up and down 5 times, smooth like a real convection current.",
      scienceTieIn: "Your rising-and-sinking motion copies real convection, where warm air rises and cold air sinks — and the movement also boosts blood flow to warm you up.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of the coziest you felt today. Was heat reaching you by conduction, convection, or radiation — or a mix? Describe the moment and name the transfer.",
      badge: { id: "g5-winter-heat-tracker", name: "Heat Tracker", emoji: "🔥" },
      estimatedMinutes: 7
    }
  }
};
