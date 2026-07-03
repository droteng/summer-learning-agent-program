// Grade 5 Science — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 1.
// Grade 5 counterpart of g6.fall.sci.w2.d1: producers, consumers, decomposers,
// and how a food web links them. Simpler language and more scaffolding.

export const fallG5ScienceW2D1 = {
  id: "g5.fall.sci.w2.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Food chains and food webs",
  topicTag: "food-webs",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-LS2-1", "NGSS.5-PS3-1"],
  hook: "In an autumn forest, everything is connected by what eats what. Today you map those connections and see why every link matters.",
  miniLesson: [
    "Producers are plants. They make their own food using sunlight. A producer starts every food chain. (Producer = plant that makes food.)",
    "Consumers eat other living things. A plant-eater is an herbivore, a meat-eater is a carnivore, and an eater of both is an omnivore. (Consumer = eater.)",
    "Decomposers, like mushrooms, break down dead plants and animals and return nutrients to the soil. Many food chains linked together make a food WEB. (Decomposer = breaks down dead things.)"
  ],
  workedExample: {
    prompt: "Put these in order of a food chain: hawk, grass, mouse.",
    steps: [
      "Start with the producer: grass makes its own food.",
      "Next the plant-eater: the mouse eats the grass.",
      "Then the predator: the hawk eats the mouse.",
      "Chain: grass → mouse → hawk."
    ],
    answer: "grass → mouse → hawk"
  },
  items: [
    {
      id: "g5.fall.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "What do PRODUCERS use to make their own food?",
      choices: ["Other animals", "Sunlight, water, and air", "Decomposers", "Rocks"],
      answerIndex: 1,
      explanation: "Producers like plants make their own food using sunlight, water, and air. That is why they start every food chain.",
      hintLadder: [
        "Producers don't eat other living things.",
        "Think about what a plant needs to grow.",
        "Sunlight helps plants make food."
      ]
    },
    {
      id: "g5.fall.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "A bear eats both berries and fish. The bear is a...",
      choices: ["Producer", "Herbivore", "Omnivore", "Decomposer"],
      answerIndex: 2,
      explanation: "Eating both plants (berries) and animals (fish) makes the bear an omnivore. 'Omni' means 'all.'",
      hintLadder: [
        "Herbivore = plants only; carnivore = animals only.",
        "What do you call an eater of BOTH?",
        "Omni- means 'all.'"
      ],
      misconceptionsTargeted: ["all-animals-are-carnivores"]
    },
    {
      id: "g5.fall.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "Why are decomposers important to a food web?",
      choices: [
        "They scare away predators.",
        "They return nutrients from dead things back to the soil.",
        "They make sunlight.",
        "They only eat producers."
      ],
      answerIndex: 1,
      explanation: "Decomposers recycle nutrients so plants can grow again, keeping the whole web going.",
      hintLadder: [
        "Think about what happens to a fallen leaf over time.",
        "Where do the nutrients go?",
        "Back into the soil for plants to reuse."
      ]
    },
    {
      id: "g5.fall.sci.w2.d1.q4",
      type: "short_answer",
      stem: "In a food chain (grass → rabbit → fox), what would probably happen to the rabbits if all the foxes disappeared? Explain.",
      rubric: {
        level3: "Predicts the rabbit number grows (fewer predators) AND names one result (grass gets overeaten / a new balance), with a reason.",
        level2: "Says rabbits increase but gives no result or reason.",
        level1: "Wrong prediction or no reasoning."
      },
      exemplar: "With no foxes eating them, there would be more rabbits. Then the rabbits might eat so much grass that the grass runs low, which could hurt the rabbits later.",
      hintLadder: [
        "The foxes were keeping the rabbit numbers down.",
        "Take away the predator — what happens to the number of rabbits?",
        "Then think about what happens to the grass."
      ]
    },
    {
      id: "g5.fall.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Name a producer, a consumer, and a decomposer from any place you know, and tell how they connect.",
      rubric: {
        level3: "Correctly names one of each role AND describes a real connection (who eats or breaks down whom).",
        level2: "Names all three but the connection is vague, or one role is mislabeled.",
        level1: "Mixes up the roles or gives no connection."
      },
      exemplar: "Producer: an oak tree. Consumer: a squirrel that eats the acorns. Decomposer: mushrooms that break down fallen leaves and put nutrients back in the soil the oak grows in.",
      hintLadder: [
        "Producer = a plant.",
        "Consumer = something that eats.",
        "Decomposer = a mushroom or tiny living thing; then link them in one sentence."
      ]
    }
  ],
  reflectionPrompt: "Pick something you ate today. Can you trace one part of it back to a plant (a producer)?",
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
        "It's autumn and an acorn drops from an oak tree. A squirrel eats it, then a hawk eats the squirrel. Where did the energy in that acorn FIRST come from? Follow the chain backward as far as you can.",
      answer:
        "All the way back to the SUN! The oak tree (a producer) used sunlight to make the acorn's energy. The squirrel and hawk just pass that sun-energy along the chain.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Map a Backyard Food Web",
      challenge:
        "Build a food web for a fall forest or your own backyard. Include at least one producer, two consumers, and one decomposer, and draw arrows showing which way energy flows (from the eaten TO the eater).",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "List at least one producer, two consumers, and one decomposer.",
        "Place them on the page and draw arrows from food to feeder.",
        "Add the sun and show it feeding your producer.",
        "Circle the decomposer and draw its arrow back to the soil."
      ],
      deliverable: "A food-web drawing with labeled roles and arrows showing how energy flows.",
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
          id: "g5.fall.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "In the chain acorn → mouse → owl, which one is the PRODUCER?",
          choices: [
            "The mouse",
            "The owl",
            "The oak tree that made the acorn",
            "There is no producer in this chain"
          ],
          answerIndex: 2,
          explanation: "The oak tree makes its own food using sunlight, so it (through its acorn) is the producer that starts the chain.",
          hintLadder: [
            "A producer makes its own food from sunlight.",
            "Neither the mouse nor the owl makes its own food.",
            "Trace the acorn back to the tree that grew it."
          ]
        },
        {
          id: "g5.fall.sci.w2.d1.arena2",
          type: "short_answer",
          stem: "In a forest, owls eat mice, and mice eat seeds. If a sickness wiped out all the mice, predict what would happen to the owls AND to the seeds. Explain.",
          rubric: {
            level3: "Predicts owls lose food and decline AND seeds are eaten less so more remain, linking both to the missing mice.",
            level2: "Gives one solid effect, or two effects with weak reasoning.",
            level1: "No clear prediction or reasoning."
          },
          exemplar: "The owls would lose their food, so there would be fewer owls or they might leave. The seeds would be eaten less, so more seeds would be left to grow into plants. Losing one link changes the whole web.",
          hintLadder: [
            "Who ate the mice? What happens to them with no mice?",
            "What did the mice eat? What happens to that with no mice?",
            "Trace the loss in both directions."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Food-Web Freeze",
      prompt:
        "Act out a chain: wave your arms like grass in the wind (5 seconds), hop like a rabbit (5 hops), then prowl like a fox (5 steps), then FREEZE like a top predator scanning the field. Shake it out and take a slow breath.",
      scienceTieIn: "Every move you just made used energy that traces back to the sun — exactly like the energy flowing through a real food web.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick something you ate today and trace it back through its food chain to a plant and the sun. How many links did it take?",
      badge: { id: "g5-fall-web-weaver", name: "Web Weaver", emoji: "🕸️" },
      estimatedMinutes: 7
    }
  }
};
