// Grade 5 Summer Science — Week 5 (Earth and Inventions), Day 1.
// Grade-5 counterpart of g6.sci.w5.d1 (ecosystems and interdependence), pitched
// down one level: simpler food chains, shorter passages, vocab support, and
// paragraph frames for the writing item.

export const summerG5ScienceW5D1 = {
  id: "g5.summer.sci.w5.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Science",
  topic: "Ecosystems and interdependence",
  topicTag: "ecosystems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-PS3-1"],
  hook: "Living things need each other! Today you follow the energy from the sun to a plant to an animal, and you predict what happens when one part of a food chain disappears.",
  keyTerms: [
    { term: "Producer", definition: "A living thing, like a plant, that makes its own food from sunlight." },
    { term: "Consumer", definition: "A living thing, like an animal, that eats other living things for food." },
    { term: "Decomposer", definition: "A living thing, like a mushroom, that breaks down dead plants and animals." },
    { term: "Food chain", definition: "A path that shows who eats whom, like grass then rabbit then fox." }
  ],
  miniLesson: [
    "Energy starts with the sun. Plants (producers) use sunlight to make their own food.",
    "Animals (consumers) cannot make food, so they eat plants or other animals. Decomposers, like mushrooms, break down dead things and recycle them.",
    "A food chain shows the path of energy: grass then rabbit then fox. If you take one link away, the whole chain changes."
  ],
  workedExample: {
    prompt:
      "Look at this food chain: Grass then Rabbit then Fox. What happens to the rabbits if all the foxes go away?",
    steps: [
      "Foxes eat rabbits, so foxes keep the rabbit number from getting too big.",
      "If the foxes go away, fewer animals hunt the rabbits.",
      "So the number of rabbits grows and grows.",
      "Then the rabbits may eat too much grass, and later the grass runs low."
    ],
    answer: "The rabbits grow in number, and later the grass may run low."
  },
  items: [
    {
      id: "g5.summer.sci.w5.d1.q1",
      type: "multiple_choice",
      stem: "Which living thing is a PRODUCER?",
      choices: ["Fox", "Sunflower", "Rabbit", "Owl"],
      answerIndex: 1,
      explanation: "Producers make their own food from sunlight. A sunflower is a plant, so it is a producer. Foxes, rabbits, and owls are consumers.",
      hintLadder: [
        "A producer makes its own food from sunlight.",
        "Which choice is a plant?",
        "The sunflower is the plant, so it is the producer."
      ],
      misconceptionsTargeted: ["thinks-all-living-things-eat"]
    },
    {
      id: "g5.summer.sci.w5.d1.q2",
      type: "multiple_choice",
      stem: "In the food chain Grass then Grasshopper then Frog, what does the frog eat?",
      choices: ["Grass", "The grasshopper", "The sun", "Nothing"],
      answerIndex: 1,
      explanation: "The arrows show who eats whom. The frog comes right after the grasshopper, so the frog eats the grasshopper.",
      hintLadder: [
        "Follow the arrows from left to right.",
        "The frog comes right after the grasshopper.",
        "So the frog eats the grasshopper."
      ]
    },
    {
      id: "g5.summer.sci.w5.d1.q3",
      type: "multiple_choice",
      stem: "A pond has fish that eat the mosquitoes. If all the fish disappear, what will most likely happen next?",
      choices: [
        "There will be fewer mosquitoes.",
        "There will be more mosquitoes because nothing eats them.",
        "The mosquitoes will leave the pond.",
        "Nothing will change at all."
      ],
      answerIndex: 1,
      explanation: "The fish were eating the mosquitoes and keeping their number down. With no fish, more mosquitoes survive, so there will be more of them.",
      hintLadder: [
        "What did the fish do to the mosquitoes?",
        "If nothing eats the mosquitoes, will there be more or fewer?",
        "With the fish gone, there will be more mosquitoes."
      ]
    },
    {
      id: "g5.summer.sci.w5.d1.q4",
      type: "numeric",
      stem: "A food chain has 4 links: Grass, Grasshopper, Frog, Snake. How many of the links are CONSUMERS (animals that eat)?",
      answer: 3,
      tolerance: 0,
      unit: "consumers",
      hintLadder: [
        "The grass is the producer. It is not a consumer.",
        "Count the animals: grasshopper, frog, and snake.",
        "That is 3 consumers."
      ],
      explanation: "Grass is the producer. The grasshopper, frog, and snake all eat, so there are 3 consumers."
    },
    {
      id: "g5.summer.sci.w5.d1.q5",
      type: "short_answer",
      stem: "A farmer gets rid of all the bees on the farm because they sting. Name ONE surprising thing that could happen to the farm. Use this frame: \"If the bees are gone, then ___ , because ___ .\"",
      rubric: {
        level3: "Names one clear effect (like crops making less fruit) AND explains it is because bees help plants grow fruit by moving pollen.",
        level2: "Names one effect but the reason is vague or missing.",
        level1: "Off topic, or only repeats the question."
      },
      exemplar:
        "If the bees are gone, then the crops will make less fruit, because bees move pollen between flowers, and plants need that to grow fruit.",
      hintLadder: [
        "Think about what bees do besides sting.",
        "Bees help flowers turn into fruit by moving pollen.",
        "Finish the frame: fewer bees means less fruit, because plants need bees to spread pollen."
      ]
    }
  ],
  stretch: {
    stem: "In the chain Grass then Rabbit then Fox, what could happen to the GRASS if there were suddenly way too many rabbits? Explain.",
    answer: "The grass could run low or disappear.",
    explanation: "Too many rabbits eat too much grass. If they eat it faster than it can grow back, the grass runs low, and then the rabbits have less food too."
  },
  reflectionPrompt: "Today you traced energy through a food chain. Where in your life have you seen one small change lead to a bigger change?",
  misconceptionBank: [
    {
      id: "thinks-all-living-things-eat",
      label: "Thinks plants eat like animals",
      description: "Believes plants get food by eating, instead of making their own food from sunlight.",
      coachMove: "Explain that plants are producers. They use sunlight, water, and air to make their own food, so they do not need to eat other living things."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather be a plant that makes its own food from sunlight, or an animal that has to find its food? Think about which one is easier and which one is safer before you pick!",
      answer:
        "A plant never has to hunt for food, but it cannot move and other things eat it. An animal can move around, but it has to find every meal. Both need each other in the food chain!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Food Chain",
      challenge:
        "Make your own food chain for a place you like, such as a pond, a garden, or a backyard. Include one producer, two consumers, and one decomposer. Use arrows to show who eats whom.",
      materials: ["Paper and markers, OR a device to type or draw on"],
      steps: [
        "Pick a place and list 4 living things that live there.",
        "Put them in order and draw arrows (the arrow points from the food to the eater).",
        "Label each one: producer, consumer, or decomposer.",
        "Pick one living thing, cross it out, and write what would happen next."
      ],
      deliverable: "A food chain drawing with labels, arrows, and one sentence about what happens when you remove one living thing.",
      choiceBoard: [
        "Draw the food chain with arrows and labels.",
        "Write a short story told by an animal whose food disappears.",
        "Make a simple comic showing the chain reaction step by step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ecosystem Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.sci.w5.d1.arena1",
          type: "numeric",
          stem: "A food web has these living things: grass, clover, rabbit, mouse, hawk, and a mushroom. How many of them are PRODUCERS (plants that make their own food)?",
          answer: 2,
          tolerance: 0,
          unit: "producers",
          hintLadder: [
            "Producers are the plants that make their own food from sunlight.",
            "Look for the plants in the list: grass and clover.",
            "That is 2 producers."
          ],
          explanation: "Grass and clover are plants, so they are producers. That makes 2. The rabbit, mouse, and hawk are consumers, and the mushroom is a decomposer."
        },
        {
          id: "g5.summer.sci.w5.d1.arena2",
          type: "short_answer",
          stem: "Sea otters eat sea urchins, and sea urchins eat a plant called kelp. If the sea otters disappear, what will happen to the urchins AND then to the kelp? Give both effects.",
          rubric: {
            level3: "Says the urchins grow in number without otters AND then the kelp is eaten down or shrinks. Both effects and the link between them are clear.",
            level2: "Gets one effect (urchins grow OR kelp shrinks) but not both, or the link is unclear.",
            level1: "Only one vague idea, or the cause and effect are backward."
          },
          exemplar: "With no otters, more sea urchins survive and their number grows. Then the urchins eat more kelp, so the kelp shrinks and there is less of it.",
          hintLadder: [
            "What kept the urchin number down before?",
            "If more urchins live, what happens to the kelp they eat?",
            "Give both effects: more urchins, then less kelp."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Food Chain Freeze",
      prompt:
        "Pick an animal from a food chain and act it out for 30 seconds -- hop like a rabbit, slither like a snake, or soar like a hawk. Then FREEZE like the food chain just lost a link!",
      scienceTieIn: "Moving and then resting sends fresh oxygen to your brain and mirrors how energy moves and slows down through a food chain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time a small change made a bigger change happen -- at home, at camp, or outside. How was it like a food chain?",
      badge: { id: "g5-summer-food-chain-tracker", name: "Food Chain Tracker", emoji: "🦊" },
      estimatedMinutes: 7
    }
  }
};
