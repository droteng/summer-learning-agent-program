// Grade 6 Math — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 2.
// Topic: the energy pyramid and the ~10% rule — ratios and proportional
// reasoning applied to how energy shrinks up a food chain.

export const fallG6MathW2D2 = {
  id: "g6.fall.math.w2.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Math",
  topic: "The energy pyramid and the 10% rule",
  topicTag: "ratios-energy-pyramid",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.3", "NGSS.MS-LS2-3"],
  hook: "Why are there always more plants than rabbits, and more rabbits than foxes? Because only about 10% of energy passes from one level of a food chain to the next. Today the math explains the shape of nature.",
  miniLesson: [
    "Energy enters an ecosystem from the sun and is captured by producers.",
    "At each step up the food chain, only about 10% of the energy passes on — the rest is used for living and lost as heat.",
    "To find the next level: multiply by 0.10 (or divide by 10). That's why each level up has far fewer animals."
  ],
  workedExample: {
    prompt: "Grass holds 20,000 units of energy. Using the 10% rule, how much reaches the rabbits, and then the foxes?",
    steps: [
      "Producers → herbivores: 20,000 × 0.10 = 2,000 units reach the rabbits.",
      "Herbivores → carnivores: 2,000 × 0.10 = 200 units reach the foxes.",
      "Each step keeps only one tenth of the previous level.",
      "So foxes get 200 of the original 20,000 units."
    ],
    answer: "2,000 units to rabbits; 200 units to foxes."
  },
  items: [
    {
      id: "g6.fall.math.w2.d2.q1",
      type: "numeric",
      stem: "Producers hold 50,000 energy units. About how many units pass to the herbivores (10%)?",
      answer: 5000,
      tolerance: 0,
      unit: "units",
      hintLadder: [
        "10% means one tenth.",
        "Divide by 10 (or multiply by 0.10).",
        "50,000 ÷ 10 = 5,000."
      ],
      explanation: "50,000 × 0.10 = 5,000 units."
    },
    {
      id: "g6.fall.math.w2.d2.q2",
      type: "numeric",
      stem: "If herbivores receive 5,000 units, about how many reach the carnivores one level up (10%)?",
      answer: 500,
      tolerance: 0,
      unit: "units",
      hintLadder: [
        "Apply the 10% rule again.",
        "5,000 ÷ 10.",
        "5,000 × 0.10 = 500."
      ],
      explanation: "5,000 × 0.10 = 500 units."
    },
    {
      id: "g6.fall.math.w2.d2.q3",
      type: "multiple_choice",
      stem: "Why does a food chain usually have only 4 or 5 levels at most?",
      choices: [
        "Animals get bored.",
        "Energy runs too low after a few 10% steps to support another level.",
        "There aren't enough names for the levels.",
        "Producers stop growing."
      ],
      answerIndex: 1,
      explanation: "After several ×10% steps, so little energy remains that it can't support a higher level of predators.",
      hintLadder: [
        "Each level keeps only a tenth of the energy.",
        "Keep dividing by 10 — what happens to the amount?",
        "It gets too small to feed another level."
      ]
    },
    {
      id: "g6.fall.math.w2.d2.q4",
      type: "multiple_choice",
      stem: "An energy pyramid is widest at the bottom. What does the WIDTH of each level represent?",
      choices: [
        "How tall the animals are",
        "How much energy (and usually how many organisms) that level holds",
        "How fast the animals run",
        "The temperature"
      ],
      answerIndex: 1,
      explanation: "Wider levels hold more energy and support more organisms; that's why producers form the wide base.",
      hintLadder: [
        "The bottom has the most of something.",
        "What gets smaller as you go up?",
        "Energy and number of organisms."
      ],
      misconceptionsTargeted: ["pyramid-width-is-size"]
    },
    {
      id: "g6.fall.math.w2.d2.q5",
      type: "short_answer",
      stem: "A garden's plants capture 80,000 energy units. Trace the energy through two levels using the 10% rule, showing each step.",
      rubric: {
        level3: "Shows 80,000 → 8,000 → 800 with both 10% steps and correct numbers.",
        level2: "One correct step, or right idea with an arithmetic slip.",
        level1: "Does not apply the 10% rule correctly."
      },
      exemplar: "Plants: 80,000. Herbivores: 80,000 × 0.10 = 8,000. Carnivores: 8,000 × 0.10 = 800. Each level keeps one tenth.",
      hintLadder: [
        "Start at 80,000.",
        "Multiply by 0.10 to go up one level.",
        "Do it twice and show both numbers."
      ]
    }
  ],
  reflectionPrompt: "The 10% rule means eating plants directly passes more energy than eating animals that ate plants. How might that connect to food choices?",
  misconceptionBank: [
    {
      id: "pyramid-width-is-size",
      label: "Thinks pyramid width shows animal size",
      description: "Reads a wide pyramid base as 'bigger animals' rather than more energy/organisms.",
      coachMove: "Clarify: width = amount of energy and number of organisms, not the physical size of each animal."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Picture a harvest feast. Would you rather be a producer (a maple tree soaking up autumn sun) or a top predator (a fox)? Think about which one keeps MORE of its energy before you answer.",
      answer:
        "The producer keeps the most! Only about 10% of energy passes to each level above, so by the time you're a fox you're living on a tiny slice of the sun's original energy. Producers are at the wide, energy-rich base.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build an Energy Pyramid",
      challenge:
        "Pick a real (or invented) fall ecosystem and build a 3- or 4-level energy pyramid. Start the producers with a big round number of energy units, then apply the 10% rule at every level up, labeling each amount.",
      materials: ["Paper & markers, OR a device to draw/type on"],
      steps: [
        "Choose your ecosystem and name a producer, a herbivore, and a carnivore.",
        "Give the producers a starting energy amount (like 100,000 units).",
        "Apply the 10% rule going up each level and write the new amount.",
        "Draw the pyramid wide at the bottom and narrow at the top to match the shrinking numbers."
      ],
      deliverable: "A labeled energy pyramid showing each level's energy after applying the 10% rule.",
      choiceBoard: [
        "Draw the energy pyramid with the numbers labeled.",
        "Make a 'harvest table' chart listing each level and its energy.",
        "Write a short story following one energy unit as it shrinks up the chain."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Energy Pyramid Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w2.d2.arena1",
          type: "numeric",
          stem: "An oak forest's leaves capture 200,000 energy units. Using the 10% rule for THREE levels (producers → herbivores → small carnivores → top predators), how many units reach the top predators?",
          answer: 200,
          tolerance: 0,
          unit: "units",
          hintLadder: [
            "Apply ×0.10 once for each step UP the pyramid.",
            "There are three steps from producers to the top predators.",
            "200,000 → 20,000 → 2,000 → 200."
          ],
          explanation: "200,000 × 0.10 = 20,000 → × 0.10 = 2,000 → × 0.10 = 200 units."
        },
        {
          id: "g6.fall.math.w2.d2.arena2",
          type: "short_answer",
          stem: "Eating plants directly gives you about 10% of the sun's captured energy. Eating an animal that ate plants gives you only about 1%. Use the 10% rule to explain why, showing the numbers.",
          rubric: {
            level3: "Explains that each level keeps 10%, so plants = 10% of the original and the next level = 10% of that = 1%, with the two steps shown.",
            level2: "Right idea (energy shrinks each level) but missing or fuzzy numbers.",
            level1: "No use of the 10% rule or wrong reasoning."
          },
          exemplar: "Producers hold 100%. Eating plants gives 10% (100% × 0.10). The animal that ate plants only has 10%, so eating IT gives 10% of 10% = 1%. Each step loses 90% of the energy.",
          hintLadder: [
            "Start with the producers at 100%.",
            "How much passes to the plant-eater? (×0.10)",
            "Now take 10% of THAT to reach the next level."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shrinking Pyramid",
      prompt:
        "Stand tall and reach wide like a producer soaking up sun (10 big arm circles). Then crouch a little smaller for the herbivore (6 circles), smaller still for the carnivore (3 circles), then tiny for the top predator (1 circle). Feel the energy 'shrink' with each level!",
      scienceTieIn: "Your muscles burn energy and release heat as you move — the very same energy loss that shrinks each level of the pyramid.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The 10% rule means most energy is lost going up each level. Where in your own day did energy get 'lost' or used up — and where did you feel most energized?",
      badge: { id: "energy-pyramid-pro", name: "Energy Pyramid Pro", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
