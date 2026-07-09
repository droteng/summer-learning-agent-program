// Grade 7 Science — Spring Expedition, Week 8 (Spring Showcase), Day 2.
// Topic: biology synthesis — this Grade 7 version pitches ONE LEVEL UP from
// Grade 6: connect growth, life cycles, genetics, ecosystems AND matter/energy
// flow into a mechanistic, evidence-backed model of one living system, and
// reason about feedback and limiting factors. The season's science ideas
// converge for the capstone.

export const springG7ScienceW8D2 = {
  id: "g7.spring.sci.w8.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Science",
  topic: "Biology synthesis — model a living system",
  topicTag: "biology-synthesis",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-6", "NGSS.MS-LS2-3"],
  hook: "All spring you studied growth, life cycles, genetics, and ecosystems. Today you go one level deeper — building a MECHANISTIC model that also tracks how matter and energy flow, where feedback loops and limiting factors kick in, and how genes and environment interact. This model is the scientific spine of your capstone.",
  miniLesson: [
    "MATTER & ENERGY FLOW: producers capture light energy and build matter (sugars) from CO2 and water; that matter and energy then move up the food web and cycle back through decomposers. A rigorous model traces where atoms and energy GO, not just who eats whom.",
    "GENE–ENVIRONMENT INTERACTION: genes set a range of possible traits, but the environment determines which outcome within that range actually occurs. Two genetically identical seeds can grow to different heights — the phenotype emerges from BOTH.",
    "FEEDBACK & LIMITING FACTORS: ecosystems self-regulate. A limiting factor (water, nitrogen, light, space) caps growth even when everything else is abundant, and feedback loops (more prey → more predators → fewer prey) keep populations in check. A full model names the limiting factor and at least one feedback loop."
  ],
  workedExample: {
    prompt: "Build a mechanistic model of an oak tree as a living system, tracing matter/energy and a limiting factor.",
    steps: [
      "Energy/matter in: the oak captures sunlight and pulls in CO2 and water to build sugars and wood (photosynthesis stores energy as matter).",
      "Gene–environment: acorn genes set the potential to become an oak, but sunlight, water, and soil nitrogen decide how large it actually grows.",
      "Food web & cycling: the oak (producer) feeds squirrels and insects; decomposers break its fallen leaves, returning nitrogen and carbon to the soil for reuse.",
      "Limiting factor & feedback: in a crowded forest, LIGHT is the limiting factor capping growth; more acorns → more squirrels → more acorns eaten, a feedback loop stabilizing the population."
    ],
    answer: "Energy captured as matter → genes×environment set the tree's real size → matter cycles through the food web and decomposers → light limits growth and predator–prey feedback stabilizes the system."
  },
  items: [
    {
      id: "g7.spring.sci.w8.d2.q1",
      type: "multiple_choice",
      stem: "Where does MOST of the matter that makes a tree's new wood come from?",
      choices: [
        "Mostly from the soil the roots sit in",
        "Mostly from carbon dioxide in the air, converted during photosynthesis",
        "Mostly from the water it drinks, which becomes solid wood",
        "It appears from the tree's own energy with no source"
      ],
      answerIndex: 1,
      explanation: "In photosynthesis a tree captures CO2 from the air and uses light energy to build sugars; that carbon becomes the bulk of the wood. Most of a tree's mass comes from thin air, not the soil.",
      hintLadder: [
        "Track the ATOMS: where does the carbon in wood originate?",
        "Photosynthesis pulls one key molecule out of the air.",
        "Carbon dioxide from the air is converted into the tree's matter."
      ],
      misconceptionsTargeted: ["mass-comes-from-soil"]
    },
    {
      id: "g7.spring.sci.w8.d2.q2",
      type: "multiple_choice",
      stem: "Two bean seeds are genetically identical. One grows twice as tall as the other. Which statement BEST explains this using gene–environment reasoning?",
      choices: [
        "Their genes must actually be different after all.",
        "One seed simply chose to grow taller.",
        "Height is controlled only by the environment; genes play no role.",
        "Genes set the range of possible heights, and different environments (light, water, nutrients) produced different outcomes within that range."
      ],
      answerIndex: 3,
      explanation: "Identical genes set the same POTENTIAL range, but the realized phenotype (actual height) depends on environmental conditions — the trait emerges from both.",
      hintLadder: [
        "Identical genes rule out a genetic difference.",
        "Genes give a range; something else picks the outcome within it.",
        "Environment determines which height within the genetic range actually occurs."
      ]
    },
    {
      id: "g7.spring.sci.w8.d2.q3",
      type: "multiple_choice",
      stem: "A pond has plenty of sunlight, warmth, and space, but its algae stop growing because nitrogen runs out. Which concept does this BEST illustrate?",
      choices: [
        "A predator–prey feedback loop",
        "Inherited traits determining growth",
        "A limiting factor — the scarcest needed resource caps growth even when others are abundant",
        "The pond has no ecosystem role"
      ],
      answerIndex: 2,
      explanation: "A limiting factor is the resource in shortest supply relative to need; here nitrogen caps algae growth regardless of how much light, warmth, or space is available.",
      hintLadder: [
        "Everything is plentiful EXCEPT one thing.",
        "What happens to growth when one needed resource runs out?",
        "The scarcest resource — nitrogen — is the limiting factor."
      ]
    },
    {
      id: "g7.spring.sci.w8.d2.q4",
      type: "short_answer",
      stem: "Pick ONE living thing. In 4–5 sentences, build a mechanistic model that connects (a) how matter/energy flow through it, (b) how its genes AND environment shape a trait, and (c) one limiting factor or feedback loop in its ecosystem.",
      rubric: {
        level3: "Names an organism and clearly links all THREE — matter/energy flow, a gene×environment trait, and a limiting factor or feedback loop — into one coherent, mechanistic explanation.",
        level2: "Covers two of the three, or all three but one link is vague or non-mechanistic.",
        level1: "Describes the organism but misses the mechanisms and connections."
      },
      exemplar: "A frog captures energy by eating insects, whose energy traces back to plants and sunlight (matter/energy flow). Its green skin comes from genes, but how well-fed and large it grows depends on how many insects the pond provides (gene×environment). If the pond dries, WATER becomes the limiting factor capping the tadpole population; and more frogs → more herons → fewer frogs, a feedback loop that stabilizes numbers.",
      hintLadder: [
        "Trace where the organism's energy and matter come from and go.",
        "Name a trait, then say how BOTH genes and environment shape it.",
        "Finish with one limiting factor OR a predator–prey feedback loop."
      ]
    },
    {
      id: "g7.spring.sci.w8.d2.q5",
      type: "short_answer",
      stem: "A classmate claims: 'If I know an organism's full genome, I can predict exactly how it will turn out.' Evaluate this claim using matter/energy flow, gene–environment interaction, and limiting factors.",
      rubric: {
        level3: "Argues the claim is false/incomplete: genes set potential, but realized traits depend on available matter/energy, environmental conditions, and limiting factors — genome alone cannot predict the outcome.",
        level2: "Disagrees and cites one factor (e.g., environment) but the reasoning is thin.",
        level1: "Agrees, or gives no mechanistic reasoning."
      },
      exemplar: "It's incomplete. The genome sets a range of possible traits, but the actual outcome depends on how much matter and energy the organism can capture, its environmental conditions, and whichever resource is limiting. Two identical genomes in different ponds — one nitrogen-poor — grow into very different organisms, so the genome alone can't predict the result.",
      hintLadder: [
        "Does a genome guarantee an outcome, or just a range of possibilities?",
        "What else must flow into the organism for a trait to be realized?",
        "Name how environment and a limiting factor break the 'genome predicts all' claim."
      ]
    }
  ],
  reflectionPrompt: "Look at the living thing in your capstone. Which mechanism — matter/energy flow, gene–environment interaction, or a limiting factor — best explains why it thrives or struggles, and how will your evidence show it?",
  misconceptionBank: [
    {
      id: "mass-comes-from-soil",
      label: "Thinks a plant's mass comes mainly from soil",
      description: "Believes roots pull most of a tree's material from the ground, missing that most mass is carbon captured from air via photosynthesis.",
      coachMove: "Track the atoms: ask where the carbon in wood comes from. Most of a plant's dry mass is built from CO2 in the air, not soil."
    },
    {
      id: "genome-determines-all",
      label: "Thinks the genome alone determines the outcome",
      description: "Ignores that realized traits emerge from genes interacting with matter/energy availability, environment, and limiting factors.",
      coachMove: "Ask: 'Would identical genomes in a rich pond and a barren one turn out the same?' Genes set potential; environment and limiting factors decide the outcome."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Acorn, Five Mechanisms",
      prompt:
        "Hold an acorn in your mind. Can you trace FIVE deeper ideas hiding in it — where its future matter comes from, how genes AND environment shape its size, and what single resource might limit its growth in a crowded forest? Try to name the mechanism behind each.",
      answer:
        "Matter: most of its future wood comes from CO2 in the AIR, not the soil. Energy: sunlight captured by photosynthesis. Genes×environment: its genes say 'oak,' but sun, water, and nitrogen decide how tall. Limiting factor: in a shaded, crowded forest, LIGHT caps its growth. Feedback: more acorns → more squirrels → more acorns eaten. One acorn holds a whole mechanistic system!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Mechanistic System Model",
      challenge:
        "Pick the organism from your capstone and build a mechanistic model: a diagram with arrows tracing matter/energy IN and OUT, a label showing one gene×environment trait, and a marked limiting factor or feedback loop — a model, not just a picture.",
      steps: [
        "Draw your organism in the center and add arrows for energy/matter flowing IN and OUT.",
        "Label one trait and note how BOTH genes and environment shape it.",
        "Mark the limiting factor that would cap its growth.",
        "Add one feedback-loop arrow (e.g., more prey → more predators → fewer prey)."
      ],
      deliverable: "A labeled mechanistic model tracing matter/energy flow, a gene×environment trait, and a limiting factor or feedback loop for one organism.",
      choiceBoard: [
        "Draw the arrow-based systems model with matter/energy and feedback loops.",
        "Write a one-paragraph 'mechanism story' that traces atoms, genes×environment, and a limiting factor.",
        "Build a foldable with a flap for each mechanism: energy/matter, genes×environment, limiting factor, feedback."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w8.d2.arena1",
          type: "multiple_choice",
          stem: "A meadow's rabbit population booms, foxes multiply, rabbits crash, then foxes decline and rabbits recover. Which statement models this MOST completely?",
          choices: [
            "A predator–prey feedback loop: rising rabbits feed rising foxes, which drive rabbits down, which then drives foxes down — the loop self-regulates the populations.",
            "Rabbit genetics alone explain the whole pattern.",
            "The meadow has no limiting factors or feedback.",
            "The rabbits chose to reduce their own numbers."
          ],
          answerIndex: 0,
          explanation: "The oscillation is a classic predator–prey feedback loop: each population regulates the other over time, keeping the system in balance rather than either growing forever.",
          hintLadder: [
            "The numbers rise and fall in a repeating pattern — what drives that?",
            "Each population's change causes the other's change.",
            "It's a self-regulating predator–prey feedback loop."
          ]
        },
        {
          id: "g7.spring.sci.w8.d2.arena2",
          type: "short_answer",
          stem: "A student says: 'A fertilized field will keep growing bigger crops forever if we just add more sunlight.' Evaluate this using limiting factors and matter/energy flow.",
          rubric: {
            level3: "Argues it's false: once sunlight is no longer scarce, another factor (water, nitrogen, space, CO2) becomes limiting and caps growth — adding more of a non-limiting resource doesn't help.",
            level2: "Disagrees but names only a vague reason without identifying a new limiting factor.",
            level1: "Agrees, or gives no limiting-factor reasoning."
          },
          exemplar: "False. Adding more of a resource only helps if that resource is the limiting one. Once sunlight is plentiful, growth is capped by the NEXT scarcest factor — water, nitrogen, CO2, or space. Piling on sunlight past that point does nothing, because a different limiting factor now controls how much matter the crops can build.",
          hintLadder: [
            "Does adding more of a resource help if it wasn't the scarce one?",
            "What caps growth once sunlight is abundant?",
            "Some OTHER factor becomes limiting and stops further growth."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Energy Flow in Motion",
      prompt:
        "Act out an energy chain: reach up and 'capture' sunlight with wide arms (producer), pull it into your center (build matter), pass it forward with a step (consumer), then sink low and spread your hands to 'decompose' it back to the ground. Loop the chain 3 times, faster each round.",
      scienceTieIn: "Moving energy through your whole body pumps oxygen-rich blood to your brain — the same energy flow that powers real growth and cycling in every living system.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just built a mechanistic model from four seasons of biology. Which mechanism — matter/energy flow, gene×environment interaction, or feedback/limiting factors — changed how you see living things this year, and why?",
      badge: { id: "g7-spring-systems-biologist", name: "Systems Biologist", emoji: "🧬" },
      estimatedMinutes: 7
    }
  }
};
