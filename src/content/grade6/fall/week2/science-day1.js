// Grade 6 Science — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 1.
// Topic: producers, consumers, decomposers, and how a food web connects them.

export const fallG6ScienceW2D1 = {
  id: "g6.fall.sci.w2.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Food chains and food webs",
  topicTag: "food-webs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-3", "NGSS.MS-LS2-1"],
  hook: "Every living thing in a forest is connected by what eats what. Today you map those connections — and find out why removing one link can shake the whole web.",
  miniLesson: [
    "Producers (plants) make their own food using sunlight. They start every food chain.",
    "Consumers eat other living things: herbivores eat plants, carnivores eat animals, omnivores eat both.",
    "Decomposers (fungi, bacteria) break down dead things and return nutrients to the soil. A food WEB is many food chains linked together."
  ],
  workedExample: {
    prompt: "Put these in order of a food chain: hawk, grass, grasshopper, snake.",
    steps: [
      "Start with the producer: grass makes its own food.",
      "Next the herbivore that eats it: grasshopper.",
      "Then what eats the grasshopper: snake.",
      "Then the top predator: hawk. Chain: grass → grasshopper → snake → hawk."
    ],
    answer: "grass → grasshopper → snake → hawk"
  },
  items: [
    {
      id: "g6.fall.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "What do PRODUCERS use to make their own food?",
      choices: ["Other animals", "Sunlight, water, and air", "Decomposers", "Rocks"],
      answerIndex: 1,
      explanation: "Producers like plants make food through photosynthesis using sunlight, water, and carbon dioxide.",
      hintLadder: [
        "Producers don't eat other living things.",
        "Think about what a plant needs to grow.",
        "Sunlight powers photosynthesis."
      ]
    },
    {
      id: "g6.fall.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "A fox eats both berries and rabbits. The fox is a...",
      choices: ["Producer", "Herbivore", "Omnivore", "Decomposer"],
      answerIndex: 2,
      explanation: "Eating both plants (berries) and animals (rabbits) makes the fox an omnivore.",
      hintLadder: [
        "Herbivore = plants only; carnivore = animals only.",
        "What do you call an eater of BOTH?",
        "Omni- means 'all.'"
      ],
      misconceptionsTargeted: ["all-animals-are-carnivores"]
    },
    {
      id: "g6.fall.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "Why are decomposers important to a food web?",
      choices: [
        "They scare away predators.",
        "They return nutrients from dead things back to the soil.",
        "They make sunlight.",
        "They only eat producers."
      ],
      answerIndex: 1,
      explanation: "Decomposers recycle nutrients so producers can grow again, keeping the whole web running.",
      hintLadder: [
        "Think about what happens to a fallen log over time.",
        "Where do the nutrients go?",
        "Back into the soil for plants to reuse."
      ]
    },
    {
      id: "g6.fall.sci.w2.d1.q4",
      type: "short_answer",
      stem: "In a food chain (grass → rabbit → fox), what would likely happen to the rabbits if all the foxes disappeared? Explain.",
      rubric: {
        level3: "Predicts rabbit population grows (fewer predators) AND notes a consequence (grass overeaten / new balance), with reasoning.",
        level2: "Says rabbits increase but gives no consequence or reason.",
        level1: "Incorrect prediction or no reasoning."
      },
      exemplar: "With no foxes eating them, the rabbit population would grow. Then the rabbits might eat so much grass that the grass runs low, hurting the rabbits later.",
      hintLadder: [
        "Foxes were keeping the rabbit numbers down.",
        "Remove the predator — what happens to prey numbers?",
        "Then think about pressure on the grass."
      ]
    },
    {
      id: "g6.fall.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Name a producer, a consumer, and a decomposer from any ecosystem you know, and say how they connect.",
      rubric: {
        level3: "Correctly names one of each role AND describes a real connection (who eats/breaks down whom).",
        level2: "Names all three but the connection is vague or one role is mislabeled.",
        level1: "Misidentifies roles or gives no connection."
      },
      exemplar: "Producer: oak tree. Consumer: deer that eats acorns. Decomposer: mushrooms that break down fallen leaves and return nutrients to the soil the oak grows in.",
      hintLadder: [
        "Producer = a plant.",
        "Consumer = something that eats.",
        "Decomposer = fungi or bacteria; then link them in a sentence."
      ]
    }
  ],
  reflectionPrompt: "Pick a meal you ate today. Can you trace one ingredient back to a producer (a plant or what a plant fed)?",
  misconceptionBank: [
    {
      id: "all-animals-are-carnivores",
      label: "Assumes all animals eat meat",
      description: "Forgets that many animals are herbivores or omnivores.",
      coachMove: "List a few familiar animals and sort them: cow (herbivore), lion (carnivore), bear (omnivore)."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Trace the Acorn",
      prompt:
        "It's autumn and an acorn drops from an oak. A squirrel eats it, then a hawk eats the squirrel. Where did the energy in that acorn ORIGINALLY come from? Follow the chain backward as far as you can.",
      answer:
        "All the way back to the SUN! The oak tree (a producer) used sunlight to make the acorn's energy. The squirrel and hawk are just passing that captured sun-energy along the chain.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map a Backyard Food Web",
      challenge:
        "Build a food web for a fall forest or your own backyard. Include at least one producer, two consumers, and one decomposer, and draw arrows showing the direction energy flows (from the eaten TO the eater).",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "List at least one producer, two consumers, and one decomposer.",
        "Place them on the page and draw arrows from food to feeder.",
        "Add the sun and show it feeding your producer.",
        "Circle the decomposer and draw its arrow back to the soil/producers."
      ],
      deliverable: "A food-web diagram with labeled roles and energy-flow arrows.",
      choiceBoard: [
        "Draw the food-web diagram with arrows.",
        "Build the web out of leaves, sticks, and labels you collect outside.",
        "Write a 'who-eats-whom' story that walks through your whole web."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Food Web Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "In the chain acorn → mouse → owl, which organism is the PRODUCER?",
          choices: [
            "The mouse",
            "The owl",
            "The oak tree that made the acorn",
            "There is no producer in this chain"
          ],
          answerIndex: 2,
          explanation: "The oak tree makes its own food by photosynthesis, so it (via its acorn) is the producer that starts the chain.",
          hintLadder: [
            "A producer makes its own food from sunlight.",
            "Neither the mouse nor the owl makes its own food.",
            "Trace the acorn back to the plant that grew it."
          ]
        },
        {
          id: "g6.fall.sci.w2.d1.arena2",
          type: "short_answer",
          stem: "In a forest web, owls eat both mice and snakes, and snakes also eat mice. If a disease wiped out all the mice, predict TWO effects on the rest of the web and explain.",
          rubric: {
            level3: "Predicts two logical effects (e.g., snakes lose food and decline; owls shift to eating more snakes / also decline) AND links them to the missing mice.",
            level2: "Gives one solid effect, or two effects with weak reasoning.",
            level1: "No clear prediction or reasoning."
          },
          exemplar: "Snakes would lose a main food source and their numbers would drop. Owls would have fewer mice AND fewer snakes to eat, so the owls might go hungry or leave the area. One missing link shakes the whole web.",
          hintLadder: [
            "Who directly ate the mice? What happens to them?",
            "Now think about who ate THOSE animals.",
            "Trace the loss through two steps of the web."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Food-Web Freeze",
      prompt:
        "Act out a chain: wave your arms like grass in the wind (5 sec), hop like a rabbit (5 hops), then prowl like a fox (5 steps), then FREEZE like a top predator scanning the field. Shake it out and breathe.",
      scienceTieIn: "Every move you just made burned energy that traces back to the sun — exactly like the energy flowing through a real food web.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick something you ate today and trace it back through its food chain to a producer and the sun. How many links did it take?",
      badge: { id: "web-weaver", name: "Web Weaver", emoji: "🕸️" },
      estimatedMinutes: 7
    }
  }
};
