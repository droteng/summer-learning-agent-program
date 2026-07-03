// Grade 7 Science — Summer Voyage, Week 5 (Earth and Inventions), Day 1.
// Topic: energy transfer & the engineering design process. Grade 7 rigor:
// systems thinking about how energy changes form, and the define → design →
// test → iterate loop that turns a real problem into a working invention.

export const summerG7ScienceW5D1 = {
  id: "g7.summer.sci.w5.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Science",
  topic: "Energy transfer & the engineering design process (define → design → test → iterate)",
  topicTag: "energy-engineering-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-PS3-5", "NGSS.MS-ETS1-1"],
  hook: "Every invention is really a plan for moving energy from where it is to where you need it. Today you trace energy as it changes form — and learn the four-step design loop that engineers use to turn a real problem into a working device.",
  miniLesson: [
    "Energy is never created or destroyed — it TRANSFERS and changes form. A wind turbine turns motion energy (kinetic) into electrical energy; a lamp turns electrical energy into light and heat. Following the energy is how engineers understand a machine.",
    "The engineering design process is a loop, not a straight line: (1) DEFINE the problem and its constraints, (2) DESIGN possible solutions, (3) TEST a prototype and gather data, (4) ITERATE — improve the design and test again.",
    "Iteration is the key idea: the first prototype almost never works perfectly. Engineers use what a failed test reveals as evidence to redesign, so each loop makes the invention better."
  ],
  workedExample: {
    prompt: "A student's phone-charging 'hand crank' invention barely lights an LED. Walk through the design loop to improve it.",
    steps: [
      "DEFINE: The problem is 'too little electrical energy reaches the LED.' Constraint: it must be hand-powered.",
      "DESIGN: Trace the energy — hand motion (kinetic) → generator → electrical → light. A weak spot is the generator's slow spin.",
      "TEST: Measure the LED brightness while cranking; record that it dims when cranking slows.",
      "ITERATE: Add gears so one hand turn spins the generator faster, then TEST again. More kinetic energy transferred per turn means a brighter LED."
    ],
    answer: "Follow the energy chain (kinetic → electrical → light), find the weak transfer, redesign to boost it (gears), and re-test — that's one full design loop."
  },
  items: [
    {
      id: "g7.summer.sci.w5.d1.q1",
      type: "multiple_choice",
      stem: "A wind turbine produces electricity. Which energy transformation does it MAINLY perform?",
      choices: [
        "Electrical energy into motion energy",
        "Motion (kinetic) energy into electrical energy",
        "Light energy into chemical energy",
        "Heat energy into sound energy"
      ],
      answerIndex: 1,
      explanation: "Moving air spins the blades (kinetic energy), and the generator converts that motion into electrical energy. Energy changes form but is not created.",
      hintLadder: [
        "What is the wind physically doing to the blades?",
        "Moving blades = motion energy. What comes OUT of the turbine?",
        "Kinetic (motion) energy is transformed into electrical energy."
      ]
    },
    {
      id: "g7.summer.sci.w5.d1.q2",
      type: "multiple_choice",
      stem: "In the engineering design process, what is the MAIN purpose of the 'test' step?",
      choices: [
        "To prove the first design is already perfect",
        "To gather evidence about what works and what needs to improve",
        "To skip straight to selling the invention",
        "To decide the problem was not worth solving"
      ],
      answerIndex: 1,
      explanation: "Testing produces data — evidence engineers use to iterate and improve the design. A failed test is useful information, not a dead end.",
      hintLadder: [
        "Engineers rarely get it perfect on the first try.",
        "What does a test give you that helps the NEXT version?",
        "It gives evidence about what to improve."
      ],
      misconceptionsTargeted: ["first-design-must-be-final"]
    },
    {
      id: "g7.summer.sci.w5.d1.q3",
      type: "multiple_choice",
      stem: "A solar oven heats food using sunlight. Trace the energy transfer in the correct order.",
      choices: [
        "Electrical → light → sound",
        "Light (radiant) energy → heat (thermal) energy in the food",
        "Chemical → kinetic → light",
        "Heat → electrical → motion"
      ],
      answerIndex: 1,
      explanation: "Sunlight is radiant (light) energy; the oven absorbs it and transfers it as thermal (heat) energy that cooks the food.",
      hintLadder: [
        "What kind of energy comes from the sun?",
        "What happens to the food — it gets what?",
        "Radiant light energy becomes heat (thermal) energy."
      ]
    },
    {
      id: "g7.summer.sci.w5.d1.q4",
      type: "short_answer",
      stem: "An engineer's first prototype of a water-filter straw clogs after ten uses. Explain how the DESIGN LOOP (define, design, test, iterate) would turn this failure into a better filter.",
      rubric: {
        level3: "Uses the failed test as evidence AND describes iterating (redesign + re-test), showing the loop — e.g., define the clog problem, redesign the filter, test again.",
        level2: "Mentions improving the design but does not clearly show testing again or treats the loop as one-and-done.",
        level1: "Says only 'try harder' or gives no use of the test evidence."
      },
      exemplar: "The clogging test is evidence, not a failure. The engineer redefines the problem as 'the filter clogs too fast,' designs a coarser pre-filter to catch big particles, then tests the new version. If it still clogs, they iterate again — each loop uses the last test's data.",
      hintLadder: [
        "A failed test still gives you useful information.",
        "What would you change, and then what do you do next?",
        "Redesign to fix the clog, then TEST again — that's iterating."
      ]
    },
    {
      id: "g7.summer.sci.w5.d1.q5",
      type: "short_answer",
      stem: "Pick any everyday device (fan, flashlight, blender, e-bike). Name the energy that goes IN and the useful energy that comes OUT, and name one place energy is 'lost' as heat.",
      rubric: {
        level3: "Correctly identifies input energy AND useful output energy for a real device AND names a realistic heat loss.",
        level2: "Gets input and output but the heat-loss example is vague or missing.",
        level1: "Misidentifies the energy forms or gives no transfer."
      },
      exemplar: "A flashlight: electrical energy goes in from the battery, and useful light energy comes out. Some energy is lost as heat — the bulb and battery get warm, so not all the electrical energy becomes light.",
      hintLadder: [
        "What powers the device? That's the input energy.",
        "What is the device SUPPOSED to produce? That's the useful output.",
        "Most devices also get warm — that warmth is 'lost' heat energy."
      ]
    }
  ],
  reflectionPrompt: "Look around the room and pick one machine. Where does its energy come from, and where does it go? Sketch the energy 'chain' in your head.",
  misconceptionBank: [
    {
      id: "first-design-must-be-final",
      label: "Believes a good invention works perfectly on the first try",
      description: "Treats a failed prototype as proof the idea is bad, instead of as evidence for the next iteration.",
      coachMove: "Point out that engineers EXPECT the first version to fail. Ask: 'What did this test teach us that we can use to redesign?'"
    },
    {
      id: "energy-gets-used-up",
      label: "Thinks energy is 'used up' and disappears",
      description: "Believes a device destroys energy rather than transferring it to another form (often heat).",
      coachMove: "Trace the energy chain out loud: it never vanishes — follow it until it ends up as heat, light, motion, or sound."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Follow the Energy",
      prompt:
        "You plug in a phone, it charges, and later you play a game that makes the phone warm and lights up the screen. The electricity came from a power plant that burned fuel or spun a turbine. Follow that energy backward and forward — how many times did it change FORM before warming your hand?",
      answer:
        "Many times! Fuel/motion energy → electrical energy at the plant → chemical energy stored in the battery → electrical energy again → light on the screen AND heat you feel. Energy never disappears — it just keeps changing form.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Prototype an Energy-Mover",
      challenge:
        "Sketch and 'build' (on paper or with junk-drawer materials) a simple invention that moves energy from one form to a useful one — a wind-spinner, a marble ramp, a hand-crank light. Then run ONE design loop on it.",
      materials: ["Paper & pencil, OR cardboard, straws, tape, string, a marble"],
      steps: [
        "DEFINE the job: what energy goes in and what useful output do you want?",
        "DESIGN a first version and draw the energy chain with arrows.",
        "TEST it (real or on paper) and write down one thing that didn't work well.",
        "ITERATE: draw the improved version and label what you changed and why."
      ],
      deliverable: "A two-version sketch (v1 and v2) with labeled energy arrows and a note on what the test revealed.",
      choiceBoard: [
        "Draw both versions with energy-flow arrows and improvement notes.",
        "Build a physical prototype from junk-drawer parts and photograph v1 vs v2.",
        "Write a short 'engineer's log' describing the define → design → test → iterate loop you ran."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Design Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.sci.w5.d1.arena1",
          type: "multiple_choice",
          stem: "An e-bike battery gives 100 units of energy, but only 80 units move the bike forward. Where did the other 20 units MOST likely go?",
          choices: [
            "They were destroyed and no longer exist",
            "They became heat in the motor, wires, and friction",
            "They turned back into battery charge",
            "They became extra distance for free"
          ],
          answerIndex: 1,
          explanation: "Energy is conserved. The 'missing' 20 units were transferred to heat (in the motor, wires, and moving parts) — not destroyed.",
          hintLadder: [
            "Energy is never destroyed — it only changes form.",
            "When motors and moving parts run, what do you feel on them?",
            "The extra energy became heat from resistance and friction."
          ]
        },
        {
          id: "g7.summer.sci.w5.d1.arena2",
          type: "short_answer",
          stem: "Two teams build the same wind-powered charger. Team A tests once, it fails, and they quit. Team B tests, redesigns the blades, and tests again — and it works. Explain, using the design process, why Team B succeeded.",
          rubric: {
            level3: "Explains that Team B ITERATED — used the failed test as evidence to redesign and re-test — while Team A stopped after one loop, connecting success to the iterate step.",
            level2: "Says Team B tried again but does not clearly tie it to using test evidence to redesign.",
            level1: "No use of the design process or vague 'they worked harder.'"
          },
          exemplar: "Team B treated the first failure as data. They used what the test showed to redesign the blades, then tested again — that's the iterate step. Team A stopped after one loop, so they never gave the design a chance to improve.",
          hintLadder: [
            "Which team went around the loop more than once?",
            "What did Team B DO with the failed test result?",
            "They iterated: redesigned using the evidence, then re-tested."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Energy Transfer Chain",
      prompt:
        "Act out an energy chain: crouch low as 'stored' potential energy, then spring up and spin your arms like a turbine (kinetic), then flick your fingers out like sparks (electrical), then hold a bright 'lightbulb' pose. Do the chain twice, then shake out and breathe.",
      scienceTieIn:
        "Your muscles just converted chemical energy from your food into motion and heat — the very same kind of energy transfer that powers the inventions you're designing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a problem you'd love an invention to solve this summer. What energy would it need to move, and what would you test first? Write one sentence describing your first prototype.",
      badge: { id: "g7-energy-engineer", name: "Energy Engineer", emoji: "⚡" },
      estimatedMinutes: 7
    }
  }
};
