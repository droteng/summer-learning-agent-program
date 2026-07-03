// Grade 7 Science — Summer Program, Week 8 (Capstone Week), Day 2.
// Topic: STEM synthesis — use systems thinking to explain a real phenomenon
// end-to-end (inputs, processes, feedback, outputs). Celebratory capstone.

export const summerG7ScienceW8D2 = {
  id: "g7.summer.sci.w8.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "STEM synthesis — explain a phenomenon end-to-end with systems thinking",
  topicTag: "systems-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-3", "NGSS.MS-ETS1-1"],
  hook: "Real scientists don't explain the world one fact at a time — they map it as a SYSTEM. Today, for your capstone, you take one real phenomenon and trace it end-to-end: what goes in, what transforms it, how feedback loops steer it, and what comes out.",
  miniLesson: [
    "A SYSTEM has inputs, processes, and outputs. In a pond: sunlight and nutrients are inputs, photosynthesis and feeding are processes, and oxygen and growth are outputs. Explaining a phenomenon means naming all three, not just one.",
    "FEEDBACK LOOPS are how systems steer themselves. A REINFORCING loop amplifies (more algae → more shade → warmer water → even more algae). A BALANCING loop stabilizes (more rabbits → more foxes → fewer rabbits → fewer foxes).",
    "To explain end-to-end, follow the ENERGY and MATTER: where does the energy enter, how does it flow through each step, and where does it leave? A gap in that chain is usually where a wrong explanation hides."
  ],
  workedExample: {
    prompt: "Explain end-to-end why a sealed jar with pond water and plants can stay alive for weeks. Use inputs, processes, and a feedback loop.",
    steps: [
      "Inputs: sunlight enters the sealed jar; matter (water, CO2, nutrients) is already inside and recycled.",
      "Processes: plants photosynthesize (make food + oxygen); microbes and animals respire (use oxygen, release CO2).",
      "Feedback: it's a BALANCING loop — if oxygen dips, respiration slows and photosynthesis keeps replacing it, holding the system near balance.",
      "Output: no NET loss because matter cycles; only sunlight ENERGY must keep entering. That's why it survives sealed."
    ],
    answer: "Sunlight energy enters; plants and microbes cycle oxygen/CO2 and nutrients in a balancing loop, so the sealed jar sustains itself as long as light keeps coming in."
  },
  items: [
    {
      id: "g7.summer.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "In systems thinking, what are the three parts you must name to explain a phenomenon end-to-end?",
      choices: [
        "Beginning, middle, and end.",
        "Inputs, processes, and outputs.",
        "Hypothesis, data, and conclusion.",
        "Producers, consumers, and decomposers."
      ],
      answerIndex: 1,
      explanation: "A system is defined by its inputs (what enters), processes (what transforms them), and outputs (what leaves) — the backbone of an end-to-end explanation.",
      hintLadder: [
        "Think about what enters, what changes, and what leaves.",
        "It's the same frame for any system, living or not.",
        "Inputs → processes → outputs."
      ]
    },
    {
      id: "g7.summer.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "Melting Arctic ice exposes darker ocean, which absorbs more heat, which melts even more ice. This is an example of a...",
      choices: [
        "Balancing (stabilizing) feedback loop.",
        "Reinforcing (amplifying) feedback loop.",
        "System with no feedback.",
        "One-time event with no loop."
      ],
      answerIndex: 1,
      explanation: "Each step makes the next stronger (more melt → more absorption → more melt), which is the signature of a reinforcing loop.",
      hintLadder: [
        "Does each step make the effect bigger or smaller?",
        "More melt leads to even more melt.",
        "Amplifying = reinforcing loop."
      ],
      misconceptionsTargeted: ["all-feedback-stabilizes"]
    },
    {
      id: "g7.summer.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "A student explains a campfire only by saying 'the wood disappears.' What is missing from an end-to-end SYSTEMS explanation?",
      choices: [
        "Nothing — that's a complete explanation.",
        "The inputs (oxygen, heat) and outputs (CO2, water vapor, ash, light/heat energy) that the wood's matter and energy transform into.",
        "Only the color of the flame.",
        "The brand of the matches."
      ],
      answerIndex: 1,
      explanation: "Matter and energy aren't destroyed — a systems explanation tracks the inputs and where the matter/energy GO, not just that the wood is gone.",
      hintLadder: [
        "Matter and energy are conserved — nothing truly 'disappears.'",
        "What entered the fire, and what left it?",
        "Name the inputs and the outputs the wood became."
      ]
    },
    {
      id: "g7.summer.sci.w8.d2.q4",
      type: "short_answer",
      stem: "Pick ONE real phenomenon (a thunderstorm, a compost bin, traffic jams, a fever). Explain it end-to-end: name at least one input, one process, and one output.",
      rubric: {
        level3: "Names a real phenomenon AND correctly identifies at least one input, one process, and one output that fit together into a coherent chain.",
        level2: "Names all three parts but one is mislabeled or the chain is loosely connected.",
        level1: "Names the phenomenon but misses a part or gives an incoherent chain."
      },
      exemplar: "Compost bin — Input: food scraps and oxygen. Process: microbes break down the scraps and release heat. Output: nutrient-rich soil, CO2, and warmth. The matter isn't lost; it's transformed into soil.",
      hintLadder: [
        "Choose a phenomenon you can picture clearly.",
        "Ask: what enters it? what changes inside? what leaves?",
        "Label each as input, process, and output."
      ]
    },
    {
      id: "g7.summer.sci.w8.d2.q5",
      type: "short_answer",
      stem: "Describe ONE feedback loop in your chosen phenomenon and say whether it is REINFORCING or BALANCING, with reasoning.",
      rubric: {
        level3: "Describes a real loop where an effect feeds back on its own cause AND correctly labels it reinforcing or balancing with a reason.",
        level2: "Describes a loop but mislabels it, or labels correctly with weak reasoning.",
        level1: "No true loop (just a one-way chain) or no label."
      },
      exemplar: "In a compost bin, more microbe activity makes more heat, and warmth speeds up the microbes even more — a reinforcing loop, because each step amplifies the next (until food or moisture runs low).",
      hintLadder: [
        "Find a step whose result loops back to affect its own cause.",
        "Does the loop make the effect grow or settle down?",
        "Growing = reinforcing; settling = balancing."
      ]
    }
  ],
  reflectionPrompt: "Your capstone probably touches a system. What's one INPUT you could change to steer its output — and what feedback loop might push back?",
  misconceptionBank: [
    {
      id: "all-feedback-stabilizes",
      label: "Thinks all feedback loops keep a system stable",
      description: "Assumes feedback always balances, missing that reinforcing loops can amplify a change until it runs away.",
      coachMove: "Ask: 'Does each step make the effect BIGGER (reinforcing) or SMALLER (balancing)?' Then trace two rounds of the loop."
    },
    {
      id: "matter-disappears",
      label: "Believes matter or energy can simply vanish",
      description: "Explains a process by saying something 'disappears' instead of tracking where the matter/energy went.",
      coachMove: "Remind: matter and energy are conserved. Always ask 'where did it GO?' and name the outputs."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Where Did It Go?",
      prompt:
        "A 5 kg log burns completely in a campfire until only a little ash is left. The ash weighs far less than 5 kg. If matter can't be destroyed, where did the missing mass GO? Think like a systems scientist before you peek.",
      answer:
        "It left as OUTPUTS — mostly carbon dioxide and water vapor gases rising into the air, plus heat and light energy. The mass didn't vanish; it transformed and floated off as gas. Nothing is destroyed, only moved and changed.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: End-to-End Systems Map",
      challenge:
        "Build a systems map of ONE real phenomenon connected to your capstone. Show every input, process, and output with arrows, and mark at least one feedback loop as reinforcing (+) or balancing (−).",
      steps: [
        "Choose a phenomenon your capstone could reference.",
        "Draw boxes for inputs on the left, processes in the middle, outputs on the right, with arrows between them.",
        "Find one place where an output loops back to affect an input — draw that loop.",
        "Label the loop reinforcing (+) or balancing (−) and add one sentence explaining why."
      ],
      deliverable: "A labeled systems map with inputs, processes, outputs, and one marked feedback loop.",
      choiceBoard: [
        "Draw the full systems map with arrows and a labeled loop.",
        "Write a 'follow the energy' paragraph that traces the phenomenon step by step.",
        "Build the map physically with sticky notes and string for the arrows and loop."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Systems Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A thermostat turns the heater OFF when a room gets warm and ON when it gets cold, holding the temperature steady. This is a...",
          choices: [
            "Reinforcing loop that keeps warming the room.",
            "Balancing loop that holds the system near a set point.",
            "System with no output.",
            "One-time input with no process."
          ],
          answerIndex: 1,
          explanation: "The output (temperature) feeds back to reverse the change and hold a set point — the definition of a balancing loop.",
          hintLadder: [
            "Does the loop push toward a steady value or away from it?",
            "Warm turns heat off; cold turns it on — that resists change.",
            "Holding a set point = balancing loop."
          ]
        },
        {
          id: "g7.summer.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "A pond turns green with algae every summer, then clears in fall. Explain this end-to-end using inputs, processes, outputs, AND one feedback loop.",
          rubric: {
            level3: "Traces inputs (sun, warmth, nutrients), processes (algae growth/photosynthesis, decay), and outputs, AND names one feedback loop (e.g., reinforcing summer bloom or balancing nutrient/light limit) with reasoning.",
            level2: "Covers inputs, processes, and outputs but the feedback loop is vague or mislabeled.",
            level1: "Describes only that 'algae grows' without a system chain or loop."
          },
          exemplar: "Inputs: strong summer sun, warmth, and nutrient runoff. Process: algae photosynthesize and multiply fast; more algae shade the water, and warmth speeds growth — a reinforcing loop that greens the pond. In fall, inputs (sunlight, warmth) drop, algae die and decay (output: nutrients back to the water), and the pond clears until next summer.",
          hintLadder: [
            "What summer inputs feed the algae?",
            "Find a step where more algae leads to even more algae.",
            "Then explain what removes the inputs in fall."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Loop the Loop",
      prompt:
        "Trace a big loop in the air with one arm while you say 'input... process... output...' then circle it BACK to the start for the feedback. Do 4 slow loops, switching arms halfway, and end with one deep breath.",
      scienceTieIn: "Your own breathing is a balancing feedback loop — rising CO2 triggers a deeper breath that lowers it again — the same self-steering pattern you just mapped.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just explained a piece of the world as a whole system. What's one everyday thing you now see differently because you can trace its inputs, processes, and feedback loops?",
      badge: { id: "g7-systems-synthesizer", name: "Systems Synthesizer", emoji: "🔄" },
      estimatedMinutes: 7
    }
  }
};
