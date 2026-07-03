// Grade 7 Science — Spring Expedition, Week 2 (Plants & Growth), Day 1.
// Topic: photosynthesis — the chemical inputs/outputs and energy transformation
// (Grade 7 depth: chemical equation, energy from sun stored in glucose bonds).

export const springG7ScienceW2D1 = {
  id: "g7.spring.sci.w2.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 1,
  subject: "Science",
  topic: "Photosynthesis — inputs, outputs, and energy transformation",
  topicTag: "photosynthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-6", "NGSS.MS-LS1-7"],
  hook: "Spring sun floods the leaves and a chemical machine roars to life. Today you go beyond 'plants make food' — you track the atoms and the energy, following light as it gets locked inside sugar molecules that build every stem and flower.",
  miniLesson: [
    "Photosynthesis is a chemical reaction. In word form: carbon dioxide + water + light energy → glucose (sugar) + oxygen. The reactants (inputs) rearrange into new products (outputs).",
    "The reaction happens in chloroplasts, where chlorophyll captures light energy. That energy is not destroyed — it is transformed and stored in the chemical bonds of the glucose molecule.",
    "The atoms are conserved: the carbon and oxygen from CO2 and the hydrogen from water are rearranged into glucose and O2. Nothing appears or vanishes — matter is only rearranged."
  ],
  workedExample: {
    prompt: "Explain what happens to the ENERGY and the MATTER during photosynthesis.",
    steps: [
      "Reactants in: carbon dioxide, water, and light energy from the Sun.",
      "Chlorophyll captures the light energy inside the chloroplast.",
      "That light energy is transformed into chemical energy stored in glucose bonds.",
      "The matter is rearranged: CO2 and water atoms are reassembled into glucose and oxygen — atoms are conserved, none are lost."
    ],
    answer: "Light energy is transformed into chemical energy stored in glucose; the atoms from CO2 and water are rearranged (conserved) into glucose and oxygen."
  },
  items: [
    {
      id: "g7.spring.sci.w2.d1.q1",
      type: "multiple_choice",
      stem: "Which line correctly shows the REACTANTS and PRODUCTS of photosynthesis?",
      choices: [
        "glucose + oxygen → carbon dioxide + water + light",
        "carbon dioxide + water + light energy → glucose + oxygen",
        "oxygen + water → carbon dioxide + sugar",
        "sunlight + soil + minerals → oxygen only"
      ],
      answerIndex: 1,
      explanation: "The reactants (inputs) are carbon dioxide, water, and light energy; the products (outputs) are glucose and oxygen.",
      hintLadder: [
        "Reactants are what goes IN; products are what comes OUT.",
        "Light energy plus two raw materials go in; sugar and a gas come out.",
        "CO2 + water + light → glucose + oxygen."
      ]
    },
    {
      id: "g7.spring.sci.w2.d1.q2",
      type: "multiple_choice",
      stem: "During photosynthesis, what happens to the light energy captured by chlorophyll?",
      choices: [
        "It is destroyed and disappears",
        "It is transformed into chemical energy stored in glucose bonds",
        "It turns directly into oxygen gas",
        "It is stored as heat in the soil"
      ],
      answerIndex: 1,
      explanation: "Energy is not created or destroyed — the light energy is transformed into chemical energy stored in the bonds of glucose.",
      hintLadder: [
        "Energy cannot be destroyed, only changed in form.",
        "Where does the plant store energy for later growth?",
        "Light energy becomes chemical energy inside glucose."
      ],
      misconceptionsTargeted: ["energy-is-used-up"]
    },
    {
      id: "g7.spring.sci.w2.d1.q3",
      type: "multiple_choice",
      stem: "A student says, 'The carbon in a tree's wood came from the soil.' Using the photosynthesis reaction, what is the correct source of most of that carbon?",
      choices: [
        "The water absorbed by the roots",
        "The minerals in the soil",
        "The carbon dioxide gas taken from the air",
        "The oxygen released by the leaves"
      ],
      answerIndex: 2,
      explanation: "The carbon atoms in glucose (and therefore in wood) come from carbon dioxide pulled out of the air, not from the soil.",
      hintLadder: [
        "Which reactant actually contains carbon atoms?",
        "CO2 is carbon di-oxide — it carries carbon.",
        "The tree builds wood from carbon captured out of the air."
      ]
    },
    {
      id: "g7.spring.sci.w2.d1.q4",
      type: "short_answer",
      stem: "A plant is kept watered in a dark closet. Explain what happens to it, referring to BOTH the matter and the energy that photosynthesis normally provides.",
      rubric: {
        level3: "Predicts the plant weakens/yellows/dies AND explains that without light there is no energy input to drive the reaction, so it cannot rearrange CO2 and water into glucose to store chemical energy — it starves despite having water.",
        level2: "Predicts decline and mentions either the missing energy OR the missing food, but not both clearly.",
        level1: "Wrong prediction or no reasoning about energy/matter."
      },
      exemplar: "The plant would turn pale and slowly die. Photosynthesis needs light energy to drive the reaction, and in the dark there is no energy input to rearrange CO2 and water into glucose. So even with water, the plant can't build sugar to store chemical energy, and it starves.",
      hintLadder: [
        "Which reactant (energy input) is missing in the dark?",
        "Without that energy, can the reaction run at all?",
        "No reaction means no glucose is built — link both energy and matter."
      ]
    },
    {
      id: "g7.spring.sci.w2.d1.q5",
      type: "short_answer",
      stem: "Explain how photosynthesis connects the Sun's energy to a hawk that eats a mouse that ate a plant. Trace the energy through the food chain.",
      rubric: {
        level3: "Traces energy from sunlight → stored as chemical energy in plant glucose → transferred to the mouse when it eats the plant → transferred to the hawk when it eats the mouse, showing energy TRANSFER at each step.",
        level2: "Connects the Sun to the animals but skips or blurs one transfer step.",
        level1: "No clear energy pathway through the food chain."
      },
      exemplar: "The plant uses photosynthesis to capture the Sun's light energy and store it as chemical energy in glucose. When the mouse eats the plant, that stored energy transfers to the mouse. When the hawk eats the mouse, the energy transfers again. So the hawk is ultimately powered by sunlight captured by a plant.",
      hintLadder: [
        "Where does the plant get its energy, and where does it store it?",
        "What happens to that stored energy when an animal eats the plant?",
        "Follow the energy transfer up each level to the hawk."
      ]
    }
  ],
  reflectionPrompt: "Find a plant near you. The atoms in its newest leaf were recently gas in the air and water in the soil. Describe how photosynthesis rearranged them into a solid, living leaf.",
  misconceptionBank: [
    {
      id: "energy-is-used-up",
      label: "Thinks energy is 'used up' or destroyed in photosynthesis",
      description: "Misses that energy is conserved — light energy is transformed into stored chemical energy, not destroyed.",
      coachMove: "Reinforce conservation of energy: the light energy doesn't vanish, it changes form into the chemical energy locked in glucose bonds, ready to be released later."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Where Does the Mass Come From?",
      prompt:
        "A tree seedling weighs a few grams. Decades later it weighs several tons. If you measured the soil, you'd find almost NONE of that mass was 'eaten' from the ground. So where did tons of solid tree come from?",
      answer:
        "Mostly from the AIR and water! Photosynthesis pulls carbon out of CO2 gas and combines it with atoms from water, using the Sun's energy, to build glucose — which becomes wood. A tree is largely built from air and sunlight, not soil.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Model the Photosynthesis Reaction",
      challenge:
        "Build a model (drawing, cutouts, or a labeled diagram) that shows atoms being rearranged in photosynthesis. Show the reactants (CO2, water, light energy) on one side, an arrow, and the products (glucose, oxygen) on the other — and show where the energy goes.",
      materials: ["Paper & colored markers, OR paper cutouts, OR a drawing app"],
      steps: [
        "Draw the reactants: carbon dioxide molecules, water, and a sun for light energy.",
        "Draw a large arrow labeled 'chloroplast / chlorophyll captures light'.",
        "Draw the products: a glucose molecule and oxygen gas.",
        "Add a label showing that light energy became chemical energy stored in the glucose."
      ],
      deliverable: "A labeled reaction model showing reactants, products, atom rearrangement, and the energy transformation.",
      choiceBoard: [
        "Draw the labeled reaction model with molecules and an energy label.",
        "Build the reaction as a paper-cutout 'before and after' showing atoms regrouping.",
        "Write a short first-person story from a carbon atom's point of view as it moves from air into a leaf's glucose."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Photosynthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w2.d1.arena1",
          type: "multiple_choice",
          stem: "A sealed clear jar holds a healthy plant with light and water. Over the day the oxygen rises AND the carbon dioxide falls. Which statement best explains BOTH changes with one reaction?",
          choices: [
            "The plant is only breathing, using oxygen and making CO2",
            "Photosynthesis consumes CO2 (a reactant) and releases oxygen (a product), so CO2 falls and O2 rises together",
            "The two gases changed by pure chance and are unrelated",
            "The plant absorbed both gases into its roots"
          ],
          answerIndex: 1,
          explanation: "One reaction explains both: photosynthesis uses CO2 as a reactant (so it falls) and produces O2 as a product (so it rises).",
          hintLadder: [
            "One reaction should explain both the fall and the rise.",
            "Which gas is a reactant, and which is a product?",
            "CO2 in (falls), O2 out (rises)."
          ]
        },
        {
          id: "g7.spring.sci.w2.d1.arena2",
          type: "short_answer",
          stem: "Two identical sealed jars each hold a plant. Jar A gets bright light; Jar B is wrapped in black paper. Predict the gas differences between the jars after several hours and explain using the photosynthesis reaction and energy.",
          rubric: {
            level3: "Predicts Jar A has more oxygen and less CO2 than Jar B AND explains Jar A has the light energy to run photosynthesis (consuming CO2, making O2) while Jar B cannot without an energy input.",
            level2: "Predicts a gas difference but the energy/reaction explanation is thin.",
            level1: "Wrong prediction or no reasoning."
          },
          exemplar: "Jar A will have more oxygen and less carbon dioxide than Jar B. Jar A has light energy, so photosynthesis runs — consuming CO2 and producing O2. Jar B has no light, so there's no energy to drive the reaction, and its gas levels barely change.",
          hintLadder: [
            "Which jar has the energy input needed to run the reaction?",
            "Running photosynthesis uses CO2 and makes O2 — what happens to each gas?",
            "Compare the two jars gas by gas."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Reactants to Products",
      prompt:
        "Stand with arms apart holding invisible 'reactants' (CO2 in one hand, water in the other). On a slow breath IN, pull them together over your head like a chloroplast capturing the Sun. On the breath OUT, push your hands forward releasing 'oxygen.' Repeat 4 times, growing a little taller each time.",
      scienceTieIn: "As you breathe out CO2, a plant nearby could pull it in as a reactant — you and plants are constantly trading the atoms in this reaction.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Energy from the Sun ends up powering your muscles through the food you eat. Trace one snack you had today back to sunlight and the photosynthesis reaction that first captured that energy.",
      badge: { id: "g7-spring-energy-alchemist", name: "Energy Alchemist", emoji: "☀️" },
      estimatedMinutes: 7
    }
  }
};
