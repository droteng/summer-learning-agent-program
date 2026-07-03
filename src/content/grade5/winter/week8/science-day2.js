// Grade 5 Science — Winter Expedition, Week 8 (Winter Showcase), Day 2.
// Grade 5 counterpart of g6.winter.sci.w8.d2. Same topic (science synthesis —
// combining energy, matter, forces, and space ideas to explain one winter
// phenomenon) pitched down to Grade 5: simpler wording, "combine two ideas"
// instead of many, and a sentence frame. Celebratory capstone tone.

export const winterG5ScienceW8D2 = {
  id: "g5.winter.sci.w8.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "Science synthesis — explain a winter phenomenon with energy, matter, forces, and space",
  topicTag: "science-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-PS1-1", "NGSS.5-PS3-1"],
  hook: "All winter you studied energy, matter, forces, and space one at a time. Real scientists put those ideas TOGETHER. Today you combine at least TWO big ideas to fully explain one frozen-world event for your capstone. That's called synthesis!",
  miniLesson: [
    "Synthesis means putting ideas together. One winter event usually needs MORE than one science idea to explain it fully.",
    "Take a freezing puddle: it uses ENERGY (heat leaving the water) AND MATTER (liquid water changing into solid ice). Two ideas working together.",
    "A strong explanation names the ideas out loud — 'as heat leaves, the water freezes into solid ice' — instead of just saying 'it gets cold.'"
  ],
  workedExample: {
    prompt: "Explain why snow can stay frozen on a sunny winter day, using at least TWO science ideas.",
    steps: [
      "ENERGY: some sunlight reaches the snow, but on a cold day it is not enough heat to melt it.",
      "MATTER: snow is frozen water (a solid); it needs a LOT of heat to change into liquid.",
      "SPACE/light: white snow bounces most of the sunlight back, so it soaks up even less heat.",
      "Together: too little heat is soaked up to melt the ice, so the snow stays solid."
    ],
    answer: "White snow reflects most sunlight, and the little heat it soaks up isn't enough to melt the solid ice, so it stays frozen."
  },
  items: [
    {
      id: "g5.winter.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "When a puddle FREEZES into ice, what is happening to the heat and the water?",
      choices: [
        "Heat is added, and the water turns to gas.",
        "Heat leaves the water, and the liquid changes into a solid.",
        "The water gains heat and stays liquid.",
        "Nothing changes; ice and water are the same."
      ],
      answerIndex: 1,
      explanation: "Freezing means heat leaves the water. As it loses heat, the liquid water changes into solid ice.",
      hintLadder: [
        "Does freezing add heat or take it away?",
        "Taking heat away slows the water down.",
        "Heat leaves; liquid becomes solid ice."
      ]
    },
    {
      id: "g5.winter.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "Which way does HEAT naturally move?",
      choices: [
        "From colder things to warmer things.",
        "From warmer things to colder things.",
        "Heat never moves.",
        "Only up, never sideways."
      ],
      answerIndex: 1,
      explanation: "Heat always moves from warmer to colder — that's why your warm hand loses heat to a cold snowball.",
      hintLadder: [
        "Think about holding a snowball in a warm hand.",
        "Which one gets colder, and which gets warmer?",
        "Heat moves from warm to cold."
      ],
      misconceptionsTargeted: ["cold-flows-in"]
    },
    {
      id: "g5.winter.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "Why is winter COLDER than summer in a place like Connecticut?",
      choices: [
        "Earth is much farther from the Sun in winter.",
        "Earth's tilt means winter sunlight hits at a low angle and for fewer hours, so less heat reaches the ground.",
        "The Sun turns off part of the year.",
        "Snow makes the Sun weaker."
      ],
      answerIndex: 1,
      explanation: "Earth's tilt spreads winter sunlight out at a low angle and gives fewer daylight hours, so each patch of ground gets less heat.",
      hintLadder: [
        "It's about Earth's tilt, not how far away the Sun is.",
        "How do the angle and length of daylight change in winter?",
        "Low-angle, short-day sunlight brings less heat."
      ],
      misconceptionsTargeted: ["distance-causes-seasons"]
    },
    {
      id: "g5.winter.sci.w8.d2.q4",
      type: "short_answer",
      stem: "A frozen pond often has liquid water at the bottom while the top is solid ice. Explain this using TWO science ideas (heat energy and matter changing state).",
      rubric: {
        level3: "Explains that heat leaves through the cold top first (so the top freezes), and that the floating ice acts like a blanket that slows heat loss below, keeping the deep water liquid — using two ideas.",
        level2: "Uses one idea correctly (like 'the top loses heat first') but misses the second.",
        level1: "No correct science reasoning."
      },
      exemplar: "The top water touches the cold air, so it loses heat first and freezes into solid ice. That ice floats on top like a blanket and slows down heat loss below, so the deeper water keeps enough heat to stay liquid.",
      hintLadder: [
        "Where does the water touch the cold air — top or bottom?",
        "Which part loses heat first and freezes?",
        "Then think about how the floating ice affects the water below."
      ]
    },
    {
      id: "g5.winter.sci.w8.d2.q5",
      type: "short_answer",
      stem: "Pick ONE winter event for your capstone (frost, snow, freezing, an icicle, the low winter Sun). Name TWO science ideas you would use to explain it and how each one helps.",
      rubric: {
        level3: "Names a winter event AND two ideas (from energy, matter, forces, space) with a correct sentence on how each one helps.",
        level2: "Names the event and two ideas but one is fuzzy or slightly off.",
        level1: "Only one idea, or the ideas don't fit the event."
      },
      exemplar: "Event: icicles. MATTER — dripping water freezes and changes from liquid to solid. ENERGY — heat leaves the thin drip into the cold air, so it freezes layer by layer as it hangs.",
      hintLadder: [
        "Choose one clear winter event.",
        "Which big ideas explain it — energy, matter, forces, or space?",
        "Write one sentence for how EACH idea helps."
      ]
    }
  ],
  reflectionPrompt: "Scientists almost never explain something with just one idea. Which two winter ideas felt strongest when you combined them? You'll use this synthesis at your showcase!",
  misconceptionBank: [
    {
      id: "cold-flows-in",
      label: "Thinks 'cold' moves into warm things",
      description: "Believes coldness moves into an object instead of heat moving out of it.",
      coachMove: "There is no 'cold' stuff — only heat. Reframe: 'the warm object LOSES heat to the cold air.'"
    },
    {
      id: "distance-causes-seasons",
      label: "Blames seasons on Earth's distance from the Sun",
      description: "Thinks winter happens because Earth moves far from the Sun, instead of because of Earth's tilt.",
      coachMove: "Point out that the two halves of Earth have opposite seasons at the same time — so it must be tilt (angle and daylight), not distance."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Puddle, Two Ideas",
      prompt:
        "A puddle freezes overnight into solid ice. Can you name TWO different science ideas at work in that one event — one about heat energy, and one about matter changing state?",
      answer:
        "ENERGY: heat left the water into the cold night air. MATTER: liquid water changed into a solid (ice). One little event, two big ideas working together!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Synthesis Concept Map",
      challenge:
        "Make a CONCEPT MAP for your winter event. Put the event in the middle and draw arrows to each science idea (energy, matter, forces, space) that helps explain it. Label each arrow with HOW it helps.",
      steps: [
        "Write your winter event in a circle in the center.",
        "Around it, add the science ideas that explain it (energy, matter, forces, space).",
        "Draw an arrow from each idea to the center and label how it helps.",
        "Star the TWO strongest connections — the ones you'll lead with at the showcase."
      ],
      deliverable: "A labeled concept map linking your winter event to the science ideas that explain it.",
      choiceBoard: [
        "Draw the concept map with labeled arrows.",
        "Record a 45-second 'science combo' explaining your event with two ideas.",
        "Write a short paragraph that uses at least two science ideas."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A warm cup of cocoa left outside on a cold day slowly gets cold. Which explanation uses the science correctly?",
          choices: [
            "Cold moves from the air into the cocoa.",
            "Heat moves out of the warm cocoa into the colder air until they are closer in temperature.",
            "The cocoa gains heat from the cold air.",
            "Nothing happens; the temperature never changes."
          ],
          answerIndex: 1,
          explanation: "Heat always moves from warmer to colder, so heat leaves the cocoa and warms the air until they even out. There is no 'cold' moving in.",
          hintLadder: [
            "Which is warmer, the cocoa or the cold air?",
            "Heat moves from warm to cold — so which way does it go?",
            "Heat leaves the cocoa; there's no 'cold' flowing in."
          ]
        },
        {
          id: "g5.winter.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "Frost forms on a window overnight. Explain it using TWO science ideas (matter changing state and heat leaving).",
          rubric: {
            level3: "Explains that water vapor in the air (matter) loses heat at the cold glass and turns into tiny solid ice crystals (frost), naming heat AND the change of state.",
            level2: "Uses one idea correctly (like 'it gets cold') but doesn't clearly connect heat loss and the change to solid.",
            level1: "No correct science reasoning."
          },
          exemplar: "Water vapor (a gas) in the air touches the very cold window and loses heat. Losing that heat makes it change straight into tiny solid ice crystals — frost — right on the glass.",
          hintLadder: [
            "What is in the air that becomes the frost?",
            "The cold glass makes it lose heat — what does it change into?",
            "Name both the heat leaving AND the change to solid."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: States of Matter Shake",
      prompt:
        "Act out the states! Stand stiff and still as a SOLID ice crystal (5 sec), then flow and sway loosely as a LIQUID (5 sec), then wiggle fast with arms wide as a GAS (5 sec). Do the sequence 3 times, faster each round.",
      scienceTieIn: "The faster you moved, the more energy you used — just like real tiny particles move faster and spread apart as heat is added, changing solid to liquid to gas.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just explained a winter event using more than one science idea — that's real scientific thinking! Which combo of ideas surprised you most, and how will you show it off at the showcase?",
      badge: { id: "g5-winter-synthesis-scientist", name: "Synthesis Scientist", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
