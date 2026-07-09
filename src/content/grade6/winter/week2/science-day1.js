// Grade 6 Science — Winter Expedition, Week 2 (Energy & Matter), Day 1.
// Topic: heat transfer (conduction, convection, radiation) and why we bundle up.

export const winterG6ScienceW2D1 = {
  id: "g6.winter.sci.w2.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Heat transfer: conduction, convection, and radiation",
  topicTag: "heat-transfer",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-3", "NGSS.MS-PS3-4"],
  hook: "On a freezing morning, heat is always on the move — leaving your warm body for the icy air. Today you learn the three ways heat travels, and why a good coat wins the battle.",
  miniLesson: [
    "Conduction moves heat by direct touch: hold a snowball and heat flows from your warm hand into the cold snow.",
    "Convection moves heat through a moving fluid (liquid or gas): warm air rises off a heater and colder air sinks, stirring the room.",
    "Radiation moves heat as invisible waves that need no material at all — that's how the sun warms your face across empty space, and how a campfire warms you without touching you."
  ],
  workedExample: {
    prompt: "You step outside in winter. Name the type of heat transfer for each: (a) your bare hand on a cold metal railing, (b) the sun warming your cheeks, (c) a warm draft rising from a floor vent.",
    steps: [
      "Direct touch between hand and railing = heat flows by conduction.",
      "The sun's warmth crossing empty space to your skin = radiation.",
      "Warm air moving and rising through the room = convection.",
      "So: (a) conduction, (b) radiation, (c) convection."
    ],
    answer: "(a) conduction, (b) radiation, (c) convection"
  },
  items: [
    {
      id: "g6.winter.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "You grab a cold metal doorknob and your hand instantly feels chilled. Which type of heat transfer is happening?",
      choices: ["Radiation", "Convection", "Evaporation", "Conduction"],
      answerIndex: 3,
      explanation: "Heat flows by direct contact from your warm hand into the cold metal — that is conduction.",
      hintLadder: [
        "Are the two objects touching?",
        "Heat by direct touch has a special name.",
        "Touch = conduction."
      ]
    },
    {
      id: "g6.winter.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "The sun warms your face on a cold, clear day even though space between you and the sun is nearly empty. This works by...",
      choices: [
        "Conduction, because the air touches your face",
        "Convection, because warm air rises",
        "Radiation, because heat travels as waves that need no material",
        "It is impossible for heat to cross empty space"
      ],
      answerIndex: 2,
      explanation: "Radiation carries heat as electromagnetic waves, so it can cross the vacuum of space with no material to travel through.",
      hintLadder: [
        "There is almost no air between you and the sun.",
        "Which transfer type needs NO material to travel?",
        "Waves through empty space = radiation."
      ],
      misconceptionsTargeted: ["heat-needs-touch"]
    },
    {
      id: "g6.winter.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "Why does wearing a thick winter coat help keep you warm?",
      choices: [
        "The coat creates new heat inside itself",
        "The coat traps a layer of air that slows heat leaving your body",
        "The coat pulls heat in from the cold outside",
        "The coat makes the sun shine brighter"
      ],
      answerIndex: 1,
      explanation: "A coat does not make heat. It traps still air, a poor conductor, which slows the heat leaving your warm body — so you stay warmer longer.",
      hintLadder: [
        "A coat is not a heater — it cannot create heat.",
        "What is trapped between the fibers of a puffy coat?",
        "Trapped air slows conduction of your body heat outward."
      ],
      misconceptionsTargeted: ["coat-makes-heat"]
    },
    {
      id: "g6.winter.sci.w2.d1.q4",
      type: "numeric",
      stem: "A mug of cocoa starts at 80 degrees C. After sitting on a cold table, conduction and radiation carry away 35 degrees of heat. What is the cocoa's temperature now, in degrees C?",
      answer: 45,
      tolerance: 0,
      unit: "degrees C",
      hintLadder: [
        "The cocoa is losing heat, so its temperature goes down.",
        "Subtract the heat lost from the starting temperature.",
        "80 − 35 = 45."
      ],
      explanation: "Heat leaving the cocoa lowers its temperature: 80 − 35 = 45 degrees C."
    },
    {
      id: "g6.winter.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Explain why hot air rises off a heater and why this is an example of convection. Use the words 'warm,' 'rise,' and 'cold.'",
      rubric: {
        level3: "States that warm air is lighter and rises while cold air sinks, creating a moving current, AND names this moving-fluid transfer as convection.",
        level2: "Says warm air rises but does not connect it clearly to a moving current or to convection.",
        level1: "Incorrect explanation or does not mention air movement."
      },
      exemplar: "The heater warms the air right above it. Warm air is lighter, so it rises, and cold air sinks to take its place. This moving loop of air carries heat around the room, which is convection.",
      hintLadder: [
        "What happens to air when it gets warm — does it rise or sink?",
        "What does the colder air do while warm air rises?",
        "That moving current of fluid is convection."
      ]
    }
  ],
  reflectionPrompt: "Find one warm spot in your home today. Which of the three heat-transfer types (conduction, convection, radiation) is keeping you warm there?",
  misconceptionBank: [
    {
      id: "heat-needs-touch",
      label: "Thinks heat can only travel by touching",
      description: "Believes heat always needs objects in contact and forgets radiation crosses empty space.",
      coachMove: "Point to the sun: it warms Earth across a vacuum. Ask, 'What is touching between the sun and your skin?' Nothing — that is radiation."
    },
    {
      id: "coat-makes-heat",
      label: "Thinks a coat generates heat",
      description: "Assumes warm clothing produces heat instead of slowing heat loss.",
      coachMove: "Ask what a coat would do wrapped around an ice cube (it would slow melting). A coat is an insulator, not a heater."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Vanishing Warmth",
      prompt:
        "You cup your hands around a warm mug on a freezing day and your fingers feel toasty. But set the mug down and grab a metal spoon that has been in the cold — your fingers chill instantly. Both are just 'touching.' Why does one warm you and one cool you?",
      answer:
        "Heat always flows from warmer to colder. Your hands are warmer than the cold spoon, so heat leaves YOUR fingers (they cool). The mug is warmer than your hands, so heat flows INTO your fingers (they warm). It is all conduction — direction depends on which side is hotter.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design the Warmest Cup Cozy",
      challenge:
        "Design a cup cozy (a wrap) that keeps cocoa warm the longest. Your job is to trap heat by slowing all three transfer types, using materials you can find at home.",
      materials: ["Paper, felt, foil, cotton, or fabric scraps; a cup; tape"],
      steps: [
        "List one material to slow conduction (something soft that traps air).",
        "Add a shiny layer (like foil) to bounce radiation heat back toward the cup.",
        "Add a lid idea to stop warm air rising away by convection.",
        "Sketch or build your cozy and label which layer fights which transfer type."
      ],
      deliverable: "A labeled cozy design (drawn or built) showing which layer blocks conduction, convection, and radiation.",
      choiceBoard: [
        "Sketch a labeled diagram of your cozy with all three layers.",
        "Actually build a cozy and test it on two identical cups of warm water.",
        "Write an ad selling your cozy that explains how it beats all three heat-transfer types."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Heat Transfer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "A campfire warms your face from across the snow, even though the cold air between you and the fire is not warm. Which transfer type reaches your face?",
          choices: [
            "Radiation, because heat travels as waves to your skin",
            "Convection, because cold air flows toward you",
            "Conduction, because you are touching the fire",
            "No heat can reach you across cold air"
          ],
          answerIndex: 0,
          explanation: "The fire sends out infrared radiation that travels straight to your skin as waves, warming you without heating all the air in between.",
          hintLadder: [
            "You are not touching the fire, so it is not conduction.",
            "The air between you stays cold, so it is not convection carrying it.",
            "Heat crossing space as waves = radiation."
          ]
        },
        {
          id: "g6.winter.sci.w2.d1.arena2",
          type: "numeric",
          stem: "A metal bench outside is at −4 degrees C. You sit on it and, through conduction, your body heat raises the seat spot to 2 degrees C. By how many degrees did that spot warm up?",
          answer: 6,
          tolerance: 0,
          unit: "degrees",
          hintLadder: [
            "Find the difference between the ending and starting temperatures.",
            "Going from −4 up to 2 crosses zero.",
            "From −4 to 0 is 4, then 0 to 2 is 2, so 4 + 2 = 6."
          ],
          explanation: "The change is 2 − (−4) = 2 + 4 = 6 degrees of warming."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Convection Current Sway",
      prompt:
        "Be a room full of air. Crouch low and 'cold,' then slowly rise onto your toes with arms floating up as you 'warm and rise.' Sink back down as the cold air. Flow up and down 5 times, smooth like a real convection current.",
      scienceTieIn: "Your rising-and-sinking motion mimics real convection, where warm air rises and cold air sinks — and the movement also boosts blood flow to warm you up.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of the coziest you felt today. Was heat reaching you by conduction, convection, or radiation — or a mix? Describe the moment and name the transfer.",
      badge: { id: "heat-tracker", name: "Heat Tracker", emoji: "🔥" },
      estimatedMinutes: 7
    }
  }
};
