// Grade 7 Science — Fall Expedition, Week 2 (Ecosystems & Food Webs), Day 5.
// Topic: keystone species, trophic cascades, carrying capacity, and reasoning
// from data about what happens when a web is disrupted. Capstone day.

export const fallG7ScienceW2D5 = {
  id: "g7.fall.sci.w2.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 5,
  subject: "Science",
  topic: "Keystone species and ecosystem balance",
  topicTag: "keystone-balance",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS2-4", "NGSS.MS-LS2-2"],
  hook: "Remove one keystone species and the effects cascade through the whole web — sometimes in surprising directions. Today you reason quantitatively about carrying capacity, trace multi-step trophic cascades, and infer causes from ecosystem DATA.",
  miniLesson: [
    "A keystone species has an effect on its ecosystem far larger than its abundance — like the keystone of an arch. Its influence is disproportionate to its numbers.",
    "A trophic cascade is a chain of INDIRECT effects that ripples down (or up) the web when a species is added or removed. Removing a top predator can increase herbivores, which then reduces producers — an effect two or more links away.",
    "Every population has a carrying capacity: the maximum the environment can sustain. When a predator is removed, prey can overshoot carrying capacity, damage their food supply, and then crash — so 'more predators gone' does not simply mean 'more prey forever.' Ecologists infer these dynamics from population DATA over time."
  ],
  workedExample: {
    prompt: "Data: after wolves were removed from a valley, deer rose from 200 to 900 in 5 years, then fell to 350, while young aspen trees dropped by 70%. Explain the cascade and why the deer didn't stay at 900.",
    steps: [
      "Wolves removed → nothing controls deer → deer overshoot, climbing from 200 to 900.",
      "900 deer overgraze aspen seedlings → young aspen fall 70% (an indirect, two-link cascade to the producers).",
      "With their food supply damaged, the deer exceed carrying capacity and starve, so the population crashes from 900 to 350.",
      "The system settles at a new, lower balance — the cascade hit both the deer AND the trees they depend on."
    ],
    answer: "Removing wolves let deer overshoot carrying capacity; overgrazing crashed the aspen, which then crashed the deer to a new lower level — a trophic cascade, not a permanent increase."
  },
  items: [
    {
      id: "g7.fall.sci.w2.d5.q1",
      type: "multiple_choice",
      stem: "What makes a species a KEYSTONE species?",
      choices: [
        "It is the largest or most abundant organism in the ecosystem.",
        "Its effect on the ecosystem is disproportionately large relative to its abundance.",
        "It always sits at the bottom of the food web.",
        "It lives longer than any other species."
      ],
      answerIndex: 1,
      explanation: "A keystone species shapes the whole community out of proportion to how many there are — remove it and the structure can collapse.",
      hintLadder: [
        "It's not about being biggest or most numerous.",
        "Think of the small keystone holding up a whole arch.",
        "The impact is large RELATIVE to its abundance."
      ]
    },
    {
      id: "g7.fall.sci.w2.d5.q2",
      type: "multiple_choice",
      stem: "A study finds that after otters return to a coast, urchin numbers fall and kelp density triples. This is BEST described as a...",
      choices: [
        "direct effect of otters on kelp",
        "trophic cascade — otters affect kelp INDIRECTLY by controlling urchins",
        "coincidence with no ecological cause",
        "sign that otters eat kelp"
      ],
      answerIndex: 1,
      explanation: "Otters don't touch the kelp; they eat urchins, which eat kelp. The kelp recovery is an indirect, two-link effect — a trophic cascade.",
      hintLadder: [
        "Do otters eat kelp, or something that eats kelp?",
        "An effect passed THROUGH another species is indirect.",
        "Otters → fewer urchins → more kelp is a cascade."
      ],
      misconceptionsTargeted: ["cascade-effects-are-direct"]
    },
    {
      id: "g7.fall.sci.w2.d5.q3",
      type: "numeric",
      stem: "A meadow's carrying capacity for rabbits is 500. After a predator is removed, rabbits climb to 800. By how many individuals has the population OVERSHOT its carrying capacity?",
      answer: 300,
      tolerance: 0,
      unit: "rabbits",
      hintLadder: [
        "Overshoot = current population − carrying capacity.",
        "The environment can support only 500.",
        "800 − 500 = 300."
      ],
      explanation: "Carrying capacity is 500 and the population is 800, so it has overshot by 800 − 500 = 300 rabbits — a level the meadow can't sustain, so a crash is likely."
    },
    {
      id: "g7.fall.sci.w2.d5.q4",
      type: "short_answer",
      stem: "You're given data: a lake's frog population dropped to zero one summer; that same year, mosquito larvae doubled and the heron population fell by half. Infer the most likely cause-and-effect story connecting these three changes.",
      rubric: {
        level3: "Infers frogs were lost first, then reasons BOTH downstream (mosquito larvae rise because frogs ate them) AND upstream (herons decline because frogs were prey), tying all three data points into one cascade.",
        level2: "Connects two of the three changes with reasoning but leaves one unlinked or vague.",
        level1: "No coherent cause-effect inference or contradicts the data."
      },
      exemplar: "Losing the frogs removed a predator of mosquito larvae, so the larvae doubled with nothing eating them. At the same time, frogs were prey for the herons, so with the frogs gone the herons lost a food source and their numbers fell by half. One missing species cascaded both down to the larvae and up to the herons.",
      hintLadder: [
        "Which change likely happened FIRST?",
        "Frogs ate larvae — what happens to larvae without frogs?",
        "Frogs were food for herons — what happens to herons without frogs?"
      ]
    },
    {
      id: "g7.fall.sci.w2.d5.q5",
      type: "short_answer",
      stem: "Capstone check: in your own ecosystem diagram this week, identify the species whose loss would trigger the LARGEST cascade, and justify it using the number of connections AND at least two steps of downstream effects.",
      rubric: {
        level3: "Names a highly connected/keystone species AND traces a cascade of at least two steps, referencing how many parts of the web depend on it.",
        level2: "Names a plausible species but the justification covers only one step or doesn't reference connections.",
        level1: "Names a species with no reasoning or misreads the web."
      },
      exemplar: "Losing the hawk would cascade most in my diagram because it has the most arrows connected to it. Without the hawk, mice and snakes it controlled would boom (step 1), and those extra herbivores would overgraze the grasses and seeds below them (step 2), thinning the producers that the whole web rests on.",
      hintLadder: [
        "Which species in your diagram has the most arrows?",
        "Predict what its prey do when it's gone (step 1).",
        "Then follow the pressure to the next level down (step 2)."
      ]
    }
  ],
  reflectionPrompt: "Carrying capacity means 'more' isn't always sustainable — populations can overshoot and crash. Where in life (screen time, spending, effort) have you seen 'too much of a good thing' overshoot and correct itself?",
  misconceptionBank: [
    {
      id: "cascade-effects-are-direct",
      label: "Assumes all effects in a web are direct",
      description: "Thinks a species must eat another to affect it, missing indirect (cascade) effects that travel through a third species.",
      coachMove: "Trace otters → urchins → kelp step by step, showing otters never touch the kelp yet clearly affect it. Have the student label each arrow 'direct' or 'indirect.'"
    },
    {
      id: "predator-loss-means-prey-forever",
      label: "Thinks removing a predator means prey increase permanently",
      description: "Ignores carrying capacity — assumes prey grow without limit once the predator is gone.",
      coachMove: "Show a real overshoot-and-crash graph; ask what the prey run out of once they exceed what the land can feed."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Keystone Riddle",
      prompt:
        "I am rarely the biggest or most common creature in my home, yet my influence dwarfs my numbers — pull me out and effects ripple two, three links away in directions you'd never expect. What am I, and what do we call those rippling effects?",
      answer:
        "A keystone species — and the rippling, indirect effects are a trophic cascade. Like the sea otter guarding the kelp forest, one small keystone can hold an entire web together.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Keystone Cascade Data Story",
      challenge:
        "Capstone the week: take YOUR ecosystem diagram, remove its keystone species, and tell the cascade as a DATA story. Sketch a rough population graph over several seasons for at least three species, showing one overshoot-and-crash, and caption the cause-effect at each turn.",
      materials: ["Your week's ecosystem diagram, paper & markers OR a device"],
      steps: [
        "Choose the keystone (the species with the most connections) and remove it.",
        "Sketch population lines over time for the predator's prey, a producer, and one other species.",
        "Show at least one population OVERSHOOT its carrying capacity and then crash.",
        "Caption each rise and fall with the cause (a direct or indirect cascade effect)."
      ],
      deliverable: "A multi-species population graph plus captions tracing a keystone-removal cascade, including one overshoot-and-crash.",
      choiceBoard: [
        "Draw the population graph with captioned cause-effect turning points.",
        "Write a data-driven news report: 'Populations Swing After Keystone Vanishes.'",
        "Make a before/after diagram pair with arrows labeled direct vs. indirect effects."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Keystone Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.sci.w2.d5.arena1",
          type: "numeric",
          stem: "An island's carrying capacity for goats is 400. After a predator is removed, goats climb to 650 before overgrazing crashes them to 150. What is the difference between the PEAK population and the crash population?",
          answer: 500,
          tolerance: 0,
          unit: "goats",
          hintLadder: [
            "Find the peak and the crash values from the data.",
            "Peak = 650, crash = 150.",
            "650 − 150 = 500."
          ],
          explanation: "The goats overshot carrying capacity (400), peaking at 650, then crashed to 150. The swing is 650 − 150 = 500 goats — showing overshoot doesn't last."
        },
        {
          id: "g7.fall.sci.w2.d5.arena2",
          type: "short_answer",
          stem: "Data from a maple forest: an invasive beetle with no local predators arrives; over 3 years beetle numbers rise 20-fold, maple density falls sharply, and both squirrels and a maple-seed-eating bird decline. Explain why the beetle spreads so fast AND trace the cascade through TWO other species.",
          rubric: {
            level3: "Explains that no local predators lets the beetle grow unchecked (exponential-style rise) AND traces a two-step cascade: maples decline → squirrels lose habitat/food AND the seed-eating bird loses its food source.",
            level2: "Explains the fast spread OR the cascade, but not both, or the cascade covers only one species.",
            level1: "No clear reasoning about predators or effects."
          },
          exemplar: "With no local predators, nothing eats the beetles, so their population grows unchecked and multiplies 20-fold. The beetles damage the maples, so maple density falls. That cascades outward: squirrels that nest in and feed on maples lose habitat and food, and the bird that eats maple seeds loses its food source too — so both decline from a cause two links away.",
          hintLadder: [
            "What normally limits a population that a brand-new invader lacks?",
            "The beetle harms the maples — who depends on maples?",
            "Trace the loss to at least two other species."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Balance Pose",
      prompt:
        "Stand on one foot like a keystone holding the whole arch steady. Breathe slowly and hold 15 seconds, feeling the tiny constant corrections your body makes, then switch feet. Notice how balance is active, not still.",
      scienceTieIn: "Holding a balance pose takes constant micro-adjustments from your brain and muscles — the same way a healthy ecosystem self-corrects around its carrying capacity to stay in balance.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A keystone's influence dwarfs its numbers, and cascades travel in surprising directions. Think of a small change in your own life that rippled further than you expected — trace two of its effects.",
      badge: { id: "g7-fall-cascade-analyst", name: "Cascade Analyst", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
