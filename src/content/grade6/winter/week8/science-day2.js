// Grade 6 Science — Winter Expedition, Week 8 (Winter Showcase), Day 2.
// Topic: science synthesis — pull together energy, matter, forces, and space
// concepts to explain a single winter phenomenon. Season capstone tone.

export const winterG6ScienceW8D2 = {
  id: "g6.winter.sci.w8.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "Science synthesis — explain a winter phenomenon with energy, matter, forces, and space",
  topicTag: "science-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-3", "NGSS.MS-PS1-4"],
  hook: "All winter you studied energy, matter, forces, and space as separate ideas. A real scientist weaves them together. Today you SYNTHESIZE — using several big ideas at once to fully explain one frozen-world phenomenon for your capstone.",
  miniLesson: [
    "Synthesis means combining ideas: one phenomenon usually needs more than one science concept to fully explain it.",
    "Take a freezing puddle: it involves ENERGY (heat leaving the water), MATTER (liquid changing to solid ice), and FORCES (water molecules locking into a rigid structure).",
    "A strong capstone explanation names the concepts explicitly — 'as heat energy leaves, the water molecules slow and lock into a solid' — instead of just saying 'it gets cold.'"
  ],
  workedExample: {
    prompt: "Explain why a snowy field can stay frozen on a sunny winter day, using at least TWO science ideas.",
    steps: [
      "ENERGY: sunlight adds some heat, but on a cold day not enough energy arrives to melt the snow.",
      "MATTER: snow is frozen water (a solid); it needs a lot of added heat energy to change state to liquid.",
      "SPACE/reflection: white snow reflects much of the sunlight back, so less energy is absorbed to warm it.",
      "Together: too little absorbed energy to overcome the heat needed for melting, so the snow stays solid."
    ],
    answer: "The snow reflects much sunlight and the small amount of heat absorbed isn't enough energy to melt the solid ice, so it stays frozen."
  },
  items: [
    {
      id: "g6.winter.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "When a puddle FREEZES into ice, what is happening to the energy and matter?",
      choices: [
        "Heat energy is added, and the water turns to gas.",
        "Heat energy leaves the water, and the liquid changes state into a solid.",
        "The water gains energy and stays liquid.",
        "Nothing changes; ice and water are the same state."
      ],
      answerIndex: 1,
      explanation: "Freezing means heat energy leaves the water; as molecules slow, the liquid changes state to a solid (ice).",
      hintLadder: [
        "Does freezing add heat or remove it?",
        "Removing heat slows the molecules down.",
        "Heat leaves; liquid becomes solid ice."
      ]
    },
    {
      id: "g6.winter.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "In which direction does heat ENERGY naturally flow?",
      choices: [
        "From colder objects to warmer objects.",
        "From warmer objects to colder objects.",
        "Heat never moves.",
        "Only upward, never sideways."
      ],
      answerIndex: 1,
      explanation: "Thermal energy always flows from warmer to colder — that's why your warm hand loses heat to a cold snowball.",
      hintLadder: [
        "Think about holding a snowball in a warm hand.",
        "Which one gets colder, and which warms up?",
        "Heat flows warm to cold."
      ],
      misconceptionsTargeted: ["cold-flows-in"]
    },
    {
      id: "g6.winter.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "Why is winter COLDER than summer in a place like Connecticut?",
      choices: [
        "Earth is much farther from the Sun in winter.",
        "Earth's tilt means winter sunlight hits at a lower angle and for fewer hours, so less energy reaches the ground.",
        "The Sun turns off part of the year.",
        "Snow makes the Sun weaker."
      ],
      answerIndex: 1,
      explanation: "Earth's tilt (a space/astronomy idea) spreads winter sunlight over more area at a low angle and gives fewer daylight hours, so each patch of ground gets less energy.",
      hintLadder: [
        "It's about Earth's tilt, not distance from the Sun.",
        "How does the angle and length of daylight change in winter?",
        "Low-angle, short-day sunlight delivers less energy."
      ],
      misconceptionsTargeted: ["distance-causes-seasons"]
    },
    {
      id: "g6.winter.sci.w8.d2.q4",
      type: "short_answer",
      stem: "A frozen lake often has liquid water at the bottom while the top is solid ice. Explain this using at least TWO science ideas (energy and matter/forces).",
      rubric: {
        level3: "Explains that heat energy leaves through the cold top surface first (so it freezes), and notes ice is less dense / floats OR insulates, keeping deeper water liquid — using two ideas.",
        level2: "Uses one idea correctly (e.g., top loses heat first) but misses the second.",
        level1: "Incorrect or no science reasoning."
      },
      exemplar: "Heat energy escapes into the cold air at the surface first, so the top water loses energy and freezes into solid ice. That ice floats and acts like a blanket, slowing heat loss below, so the deeper water keeps enough energy to stay liquid.",
      hintLadder: [
        "Where does the water touch the cold air — top or bottom?",
        "Which part loses heat energy first and freezes?",
        "Then think how the floating ice affects the water below."
      ]
    },
    {
      id: "g6.winter.sci.w8.d2.q5",
      type: "short_answer",
      stem: "Pick ONE winter phenomenon for your capstone (frost, snow, freezing, an icicle, the low winter Sun). Name TWO science concepts you'd use to explain it and how each applies.",
      rubric: {
        level3: "Names a winter phenomenon AND two relevant concepts (from energy, matter, forces, space) with a correct sentence on how each applies.",
        level2: "Names the phenomenon and two concepts but one application is vague or slightly off.",
        level1: "Only one concept, or concepts don't fit the phenomenon."
      },
      exemplar: "Phenomenon: icicles. MATTER — dripping water freezes, changing from liquid to solid. ENERGY — heat leaves the thin drip into the cold air, letting it freeze layer by layer as it hangs.",
      hintLadder: [
        "Choose one clear winter phenomenon.",
        "Which big ideas explain it — energy, matter, forces, or space?",
        "Write one sentence for how EACH idea applies."
      ]
    }
  ],
  reflectionPrompt: "Scientists rarely explain anything with just one idea. Which two winter concepts felt most powerful when you combined them? You'll use this synthesis at your showcase.",
  misconceptionBank: [
    {
      id: "cold-flows-in",
      label: "Thinks 'cold' flows into warm objects",
      description: "Believes coldness moves into an object rather than heat energy moving out of it.",
      coachMove: "There is no 'cold' substance — only heat energy. Reframe: 'the warm object LOSES heat to the cold air.'"
    },
    {
      id: "distance-causes-seasons",
      label: "Blames seasons on Earth's distance from the Sun",
      description: "Assumes winter happens because Earth moves far from the Sun, rather than because of Earth's tilt.",
      coachMove: "Point out both hemispheres have opposite seasons at the same time — it must be tilt (angle and daylight), not distance."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Puddle, Three Ideas",
      prompt:
        "A puddle freezes overnight into solid ice. Can you name THREE different science ideas at work in that one event — one about energy, one about matter, and one about the winter conditions that made it cold enough?",
      answer:
        "ENERGY: heat left the water into the cold night air. MATTER: liquid water changed state into a solid. SPACE/season: the long, low-Sun winter night meant little incoming energy, so the ground cooled below freezing. One event, many ideas!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Synthesis Concept Map",
      challenge:
        "Build a CONCEPT MAP for your chosen winter phenomenon. Put the phenomenon in the center and draw arrows to every science idea (energy, matter, forces, space) that helps explain it, labeling each arrow with HOW it applies.",
      steps: [
        "Write your winter phenomenon in a circle in the center.",
        "Around it, add the science ideas that explain it (energy, matter, forces, space).",
        "Draw an arrow from each idea to the center and label how it applies.",
        "Star the two strongest connections — the ones you'll lead with at the showcase."
      ],
      deliverable: "A labeled concept map linking your winter phenomenon to the science ideas that explain it.",
      choiceBoard: [
        "Draw the concept map with labeled arrows.",
        "Record a 45-second 'science synthesis' explaining your phenomenon with two ideas.",
        "Write a short 'explain-it' paragraph weaving in at least two concepts."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A warm cup of cocoa left outside on a cold winter day slowly gets cold. Which explanation uses the science correctly?",
          choices: [
            "Cold energy flows from the air into the cocoa.",
            "Heat energy flows out of the warm cocoa into the colder air until they are closer in temperature.",
            "The cocoa gains heat from the cold air.",
            "Nothing happens; temperature never changes."
          ],
          answerIndex: 1,
          explanation: "Heat always flows from warmer to colder, so thermal energy leaves the cocoa and warms the surrounding air until they even out. There is no 'cold energy.'",
          hintLadder: [
            "Which is warmer, the cocoa or the winter air?",
            "Heat flows from warm to cold — so which way does it move?",
            "Energy leaves the cocoa; there's no 'cold' flowing in."
          ]
        },
        {
          id: "g6.winter.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "Frost forms on a window overnight. Explain it using at least TWO science ideas (think matter changing state and energy leaving).",
          rubric: {
            level3: "Explains that water vapor in the air (matter) loses heat energy at the cold glass and changes directly to solid ice crystals (frost), naming energy AND matter/state change.",
            level2: "Uses one idea correctly (e.g., it gets cold) but doesn't clearly connect state change and energy loss.",
            level1: "Incorrect or missing science reasoning."
          },
          exemplar: "Water vapor (a gas) in the air touches the very cold window and loses heat energy. Losing that energy makes it change state straight into tiny solid ice crystals — frost — right on the glass.",
          hintLadder: [
            "What is in the air that becomes the frost?",
            "The cold glass makes it lose heat energy — what state change follows?",
            "Name both the energy loss and the change to solid."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: States of Matter Shake",
      prompt:
        "Act out the states: stand rigid and still as a SOLID ice crystal (5 sec), then flow and sway loosely as a LIQUID (5 sec), then wiggle fast and spread your arms wide as a GAS (5 sec). Repeat the sequence 3 times, faster each round.",
      scienceTieIn: "The faster you moved, the more energy you used — just like real molecules move faster and spread apart as heat energy is added, changing solid to liquid to gas.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just explained a winter phenomenon using several science ideas at once — that's real scientific thinking. Which combination of ideas surprised you most, and how will you show it off at the showcase?",
      badge: { id: "winter-synthesis-scientist", name: "Synthesis Scientist", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
