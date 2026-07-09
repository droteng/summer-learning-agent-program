// Grade 6 Science — Week 5 (Earth and Inventions), Day 1.
// Topic: ecosystems and interdependence.

export const grade6ScienceWeek5Day1 = {
  id: "g6.sci.w5.d1",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 1,
  subject: "Science",
  topic: "Ecosystems and interdependence",
  topicTag: "ecosystems",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-1", "NGSS.MS-LS2-3"],
  hook: "Living things depend on each other in surprising ways. Today you trace energy through a food chain — and predict what happens when a link breaks.",
  miniLesson: [
    "Energy flows: producers (plants) capture sunlight; consumers (animals) eat producers or other consumers; decomposers recycle what's left.",
    "A food chain is the simplest path; a food web is the realistic many-paths version where most species eat several things.",
    "Remove a link and the chain reorganizes. Sometimes a small change causes a big effect (a 'cascade')."
  ],
  workedExample: {
    prompt:
      "Grass → Rabbit → Fox. What happens to the rabbit population if all the foxes are removed?",
    steps: [
      "Foxes eat rabbits, keeping the population in check.",
      "With no foxes, rabbits face fewer predators.",
      "Rabbit population grows quickly.",
      "If rabbits over-eat the grass, the grass dies back and rabbits crash too."
    ],
    answer: "Rabbits boom, grass crashes, rabbits eventually crash — a cascade."
  },
  items: [
    {
      id: "g6.sci.w5.d1.q1",
      type: "multiple_choice",
      stem: "Which organism is a PRODUCER?",
      choices: ["Sunflower", "Mushroom", "Fox", "Rabbit"],
      answerIndex: 0,
      explanation: "Producers make their own food from sunlight. Sunflowers (plants) are producers; foxes and rabbits consume; mushrooms decompose.",
      hintLadder: [
        "Producers make their own food.",
        "Skip the eaters and the decomposers.",
        "Sunflower is the plant."
      ],
      misconceptionsTargeted: ["confuses-mushroom-with-plant"]
    },
    {
      id: "g6.sci.w5.d1.q2",
      type: "multiple_choice",
      stem:
        "In Grass → Grasshopper → Frog → Snake, the snake is at which level?",
      choices: ["Producer", "First-level consumer", "Second-level consumer", "Third-level consumer"],
      answerIndex: 3,
      explanation: "Count the levels of consumers: grasshopper is 1st (eats producer), frog is 2nd, snake is 3rd.",
      hintLadder: [
        "Count consumers from the bottom up.",
        "Grasshopper=1, frog=2, snake=?",
        "Snake is third."
      ]
    },
    {
      id: "g6.sci.w5.d1.q3",
      type: "multiple_choice",
      stem:
        "A wetland's mosquito-eating bats are wiped out by a storm. What's the most likely short-term effect?",
      choices: [
        "Fewer mosquitoes.",
        "More mosquitoes — fewer predators eat them.",
        "Mosquitoes leave the wetland.",
        "Nothing changes."
      ],
      answerIndex: 1,
      explanation: "Predators kept the mosquito population down. Remove the predators, the prey population grows.",
      hintLadder: [
        "What did the bats do to mosquitoes?",
        "Remove the predator — what happens to prey?",
        "More mosquitoes."
      ]
    },
    {
      id: "g6.sci.w5.d1.q4",
      type: "numeric",
      stem:
        "A food chain loses about 90% of its energy at each step. If grass captures 10,000 units, roughly how many reach a third-level consumer at the top?",
      answer: 10,
      tolerance: 0,
      hintLadder: [
        "After step 1, 1,000 units remain (90% lost).",
        "After step 2, 100 units.",
        "After step 3, 10 units."
      ],
      explanation: "10,000 → 1,000 → 100 → 10. Three steps × 90% loss each."
    },
    {
      id: "g6.sci.w5.d1.q5",
      type: "short_answer",
      stem:
        "A farmer wipes out all the bees because they sting. Name two effects on the farm that could surprise them.",
      rubric: {
        level3: "Names two specific consequences (e.g., crops not pollinated → smaller yields; other pollinator-dependent plants in the area die back) and connects them to the bee removal.",
        level2: "Names one consequence specifically + one vague impact.",
        level1: "Vague or off-topic."
      },
      exemplar:
        "First, crops that rely on bees for pollination produce less fruit, so harvests shrink. Second, wildflowers nearby also stop reproducing, which can reduce habitat for birds and small animals.",
      hintLadder: [
        "What do bees do besides sting?",
        "What relies on that?",
        "Trace two cascades from the removal."
      ]
    }
  ],
  reflectionPrompt: "Today you traced energy through an ecosystem. Where in your life do you see small changes causing big effects?",
  misconceptionBank: [
    {
      id: "confuses-mushroom-with-plant",
      label: "Treats mushrooms as plants",
      description: "Calls mushrooms producers because they grow from the ground.",
      coachMove: "Mushrooms are fungi: they don't photosynthesize. They decompose dead matter instead."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather be a producer (a plant making its own food from sunlight) or a top predator (eating others but eaten by none)? Think about energy and risk before you pick!",
      answer:
        "Producers never have to hunt and feed the whole web, but they can't move and get eaten constantly. Top predators eat well but get the least energy (most is lost up the chain) and crash hard if prey disappear. Either way you're trading energy for safety!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Food Web",
      challenge:
        "Invent a small ecosystem (a pond, a forest floor, a backyard). Draw a food web with at least one producer, two consumers, and one decomposer, using arrows to show who eats whom. Then predict what happens if you remove one species.",
      steps: [
        "Choose your ecosystem and list 4-5 living things in it.",
        "Draw arrows showing the energy flow (arrow points from food to eater).",
        "Label each one: producer, consumer, or decomposer.",
        "Circle one species, remove it, and write what cascade follows."
      ],
      deliverable: "A food web diagram with labeled roles, arrows, and a short prediction of what happens when one link is removed.",
      choiceBoard: [
        "Draw the food web with arrows and labels.",
        "Write a short story told by one animal whose food source disappears.",
        "Make a 'cascade comic' showing the chain reaction step by step."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ecosystem Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.sci.w5.d1.arena1",
          type: "numeric",
          stem: "A food chain loses about 90% of its energy at each step. If the producers capture 50,000 units, roughly how many units reach a SECOND-level consumer?",
          answer: 500,
          tolerance: 0,
          hintLadder: [
            "After the first consumer, only 10% of 50,000 remains.",
            "50,000 → 5,000 after step one.",
            "5,000 → 500 after the second step."
          ],
          explanation: "50,000 → 5,000 (first-level) → 500 (second-level). Each step keeps just 10%."
        },
        {
          id: "g6.sci.w5.d1.arena2",
          type: "short_answer",
          stem: "Sea otters eat sea urchins, and sea urchins eat kelp. If hunters wipe out the sea otters, predict the cascade through the kelp forest. Give at least two linked effects.",
          rubric: {
            level3: "Explains that urchins boom without otters, then over-eat the kelp, so the kelp forest shrinks (and names a further effect on fish/animals that live in the kelp).",
            level2: "Gets the urchin increase and kelp decrease but stops there or is vague on the link.",
            level1: "Only one effect, or the cause-and-effect direction is wrong."
          },
          exemplar: "With no otters, the sea urchin population explodes. The urchins over-graze the kelp, so the kelp forest shrinks. Fish and other animals that shelter in the kelp lose their habitat and decline too.",
          hintLadder: [
            "What did the otters keep in check?",
            "If urchins boom, what happens to the kelp they eat?",
            "Then what happens to everything that lives in the kelp?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Food Web Freeze",
      prompt:
        "Pick an animal in your ecosystem and act it out — hop like a rabbit, slither like a snake, soar like a hawk — for 30 seconds, then FREEZE like the food chain just lost a link!",
      scienceTieIn: "Moving and then resting mirrors how energy flows and slows through a food chain, while the exercise sends fresh oxygen to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a small change you've seen cause a big effect — at home, in nature, or with friends. How was it like a food-web cascade?",
      badge: { id: "ecosystem-explorer", name: "Ecosystem Explorer", emoji: "🦦" },
      estimatedMinutes: 7
    }
  }
};
