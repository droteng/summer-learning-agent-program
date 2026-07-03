// Grade 5 Math — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 2.
// Grade 5 counterpart of g6.fall.math.w2.d2: the energy pyramid and the ~10%
// rule. Grade 5 keeps it to dividing round whole numbers by 10 with a visual
// pyramid, instead of Grade 6 ratio/proportion work.

export const fallG5MathW2D2 = {
  id: "g5.fall.math.w2.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 2,
  subject: "Math",
  topic: "The energy pyramid and the 10% rule",
  topicTag: "ratios-energy-pyramid",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.A.2", "NGSS.5-LS2-1"],
  hook: "Why are there always more plants than rabbits, and more rabbits than foxes? Because only about 10% of the energy passes from one level of a food chain up to the next. Today the math shows the shape of nature.",
  miniLesson: [
    "Energy comes from the sun and is caught by producers (plants) at the bottom of the pyramid.",
    "Going UP one level, only about 10% of the energy passes on. The rest is used up for living and lost as heat.",
    "To find the next level up, take 10% — which is the same as dividing by 10. That is why each higher level has far fewer animals."
  ],
  workedExample: {
    prompt: "Grass holds 2,000 units of energy. Using the 10% rule, how much reaches the rabbits, and then the foxes?",
    steps: [
      "Producers → rabbits: 10% of 2,000 is 2,000 ÷ 10 = 200 units.",
      "Rabbits → foxes: 10% of 200 is 200 ÷ 10 = 20 units.",
      "Each step keeps only one tenth of the level below it.",
      "So the foxes get 20 of the original 2,000 units."
    ],
    answer: "200 units to rabbits; 20 units to foxes."
  },
  items: [
    {
      id: "g5.fall.math.w2.d2.q1",
      type: "numeric",
      stem: "Producers hold 5,000 energy units. About how many units pass up to the rabbits (10%)?",
      answer: 500,
      tolerance: 0,
      unit: "units",
      hintLadder: [
        "10% means one tenth.",
        "Divide by 10.",
        "5,000 ÷ 10 = 500."
      ],
      explanation: "10% of 5,000 is 5,000 ÷ 10 = 500 units."
    },
    {
      id: "g5.fall.math.w2.d2.q2",
      type: "numeric",
      stem: "If the rabbits get 500 units, about how many reach the foxes one level up (10%)?",
      answer: 50,
      tolerance: 0,
      unit: "units",
      hintLadder: [
        "Use the 10% rule again.",
        "500 ÷ 10.",
        "500 ÷ 10 = 50."
      ],
      explanation: "10% of 500 is 500 ÷ 10 = 50 units."
    },
    {
      id: "g5.fall.math.w2.d2.q3",
      type: "multiple_choice",
      stem: "Why does a food chain usually have only 4 or 5 levels at most?",
      choices: [
        "Animals get bored.",
        "After a few 10% steps, the energy is too small to feed another level.",
        "There aren't enough names for the levels.",
        "Producers stop growing."
      ],
      answerIndex: 1,
      explanation: "Each level keeps only a tenth of the energy. After a few steps, so little is left that it can't support a higher level of predators.",
      hintLadder: [
        "Each level keeps only a tenth of the energy.",
        "Keep dividing by 10 — what happens to the number?",
        "It gets too small to feed another level."
      ]
    },
    {
      id: "g5.fall.math.w2.d2.q4",
      type: "multiple_choice",
      stem: "An energy pyramid is widest at the bottom. What does the WIDTH of each level show?",
      choices: [
        "How tall the animals are",
        "How much energy (and usually how many living things) that level has",
        "How fast the animals run",
        "The temperature"
      ],
      answerIndex: 1,
      explanation: "Wider levels have more energy and more living things. That is why the producers make the wide base.",
      hintLadder: [
        "The bottom has the most of something.",
        "What gets smaller as you go up?",
        "Energy and the number of living things."
      ],
      misconceptionsTargeted: ["pyramid-width-is-size"]
    },
    {
      id: "g5.fall.math.w2.d2.q5",
      type: "short_answer",
      stem: "A garden's plants catch 8,000 energy units. Trace the energy up two levels using the 10% rule, showing each step.",
      rubric: {
        level3: "Shows 8,000 → 800 → 80 with both 10% (÷10) steps and correct numbers.",
        level2: "One correct step, or the right idea with an arithmetic slip.",
        level1: "Does not use the 10% rule correctly."
      },
      exemplar: "Plants: 8,000. Rabbits: 8,000 ÷ 10 = 800. Foxes: 800 ÷ 10 = 80. Each level keeps one tenth.",
      hintLadder: [
        "Start at 8,000.",
        "Divide by 10 to go up one level.",
        "Do it twice and show both numbers."
      ]
    }
  ],
  reflectionPrompt: "The 10% rule means eating plants directly passes on more energy than eating animals that ate plants. How might that connect to food choices?",
  misconceptionBank: [
    {
      id: "pyramid-width-is-size",
      label: "Thinks pyramid width shows animal size",
      description: "Reads a wide pyramid base as 'bigger animals' instead of more energy or more living things.",
      coachMove: "Clarify: width = amount of energy and number of living things, not the physical size of each animal."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Picture a harvest feast. Would you rather be a producer (a maple tree soaking up autumn sun) or a top predator (a fox)? Think about which one keeps MORE of its energy before you answer.",
      answer:
        "The producer keeps the most! Only about 10% of energy passes to each level above, so by the time you're a fox you're living on a tiny slice of the sun's original energy. Producers sit at the wide, energy-rich base.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build an Energy Pyramid",
      challenge:
        "Pick a real (or made-up) fall ecosystem and build a 3-level energy pyramid. Start the producers with a big round number of energy units, then use the 10% rule (÷10) at each level up, and label each amount.",
      materials: ["Paper & markers, OR a device to draw/type on"],
      steps: [
        "Choose your ecosystem and name a producer, a plant-eater, and a meat-eater.",
        "Give the producers a starting energy amount, like 1,000 units.",
        "Divide by 10 going up each level and write the new amount.",
        "Draw the pyramid wide at the bottom and narrow at the top to match the shrinking numbers."
      ],
      deliverable: "A labeled energy pyramid showing each level's energy after using the 10% rule.",
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
          id: "g5.fall.math.w2.d2.arena1",
          type: "numeric",
          stem: "An oak forest's leaves catch 10,000 energy units. Using the 10% rule for THREE levels (producers → plant-eaters → small meat-eaters → top predators), how many units reach the top predators?",
          answer: 10,
          tolerance: 0,
          unit: "units",
          hintLadder: [
            "Divide by 10 once for each step UP the pyramid.",
            "There are three steps from producers to the top predators.",
            "10,000 ÷ 10 = 1,000 → ÷ 10 = 100 → ÷ 10 = 10."
          ],
          explanation: "10,000 ÷ 10 = 1,000, then ÷ 10 = 100, then ÷ 10 = 10 units."
        },
        {
          id: "g5.fall.math.w2.d2.arena2",
          type: "short_answer",
          stem: "Producers start with 1,000 units. Eating the plants directly gives about 10% of that energy. Eating an animal that ate the plants gives even less. Use the 10% rule to show BOTH amounts (the plant level and the next level up).",
          rubric: {
            level3: "Shows plant-eater level = 1,000 ÷ 10 = 100 AND next level = 100 ÷ 10 = 10, with both ÷10 steps.",
            level2: "Right idea (energy shrinks each level) but a number is missing or wrong.",
            level1: "No use of the 10% rule or wrong reasoning."
          },
          exemplar: "Producers hold 1,000 units. Eating the plants gives 1,000 ÷ 10 = 100 units. Eating the animal that ate the plants gives 100 ÷ 10 = 10 units. Each step keeps only one tenth.",
          hintLadder: [
            "Start with the producers at 1,000.",
            "Divide by 10 to reach the plant-eater level.",
            "Divide by 10 again to reach the next level up."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shrinking Pyramid",
      prompt:
        "Stand tall and reach wide like a producer soaking up sun (10 big arm circles). Then crouch a little smaller for the plant-eater (6 circles), smaller still for the meat-eater (3 circles), then tiny for the top predator (1 circle). Feel the energy 'shrink' with each level!",
      scienceTieIn: "Your muscles use energy and give off heat as you move — the same kind of energy loss that shrinks each level of the pyramid.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The 10% rule means most energy is used up going up each level. Where in your own day did energy get 'used up' — and where did you feel most energized?",
      badge: { id: "g5-fall-energy-pyramid-pro", name: "Energy Pyramid Pro", emoji: "🍂" },
      estimatedMinutes: 7
    }
  }
};
