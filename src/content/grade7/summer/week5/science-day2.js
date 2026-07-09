// Grade 7 Science — Summer Voyage, Week 5 (Earth and Inventions), Day 2.
// Topic: environmental systems & human impact. Grade 7 rigor: systems thinking
// about natural resources, the trade-offs of using them, and how sustainable
// design weighs those trade-offs when we invent.

export const summerG7ScienceW5D2 = {
  id: "g7.summer.sci.w5.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Science",
  topic: "Environmental systems & human impact (resources, trade-offs, sustainability)",
  topicTag: "environmental-systems-impact",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-ESS3-3", "NGSS.MS-ESS3-4"],
  hook: "Every invention pulls resources from Earth's systems and pushes something back — waste, pollution, or benefit. Today you think like a systems engineer: weighing the trade-offs so your inventions solve problems without quietly creating new ones.",
  miniLesson: [
    "Earth's resources are either renewable (sunlight, wind, sustainably managed forests — they refill on a human timescale) or nonrenewable (oil, coal, most minerals — once used, gone for millions of years). Wise inventors match the resource to the job.",
    "A trade-off means every choice has a cost as well as a benefit. Plastic is cheap and light (benefit) but persists in the environment for centuries (cost). Systems thinking asks 'what else changes?' when you use a resource.",
    "Sustainability means meeting today's needs without using up what future generations will need. Sustainable design reduces resource use, reuses materials, and lowers harmful outputs like pollution and greenhouse gases."
  ],
  workedExample: {
    prompt: "A town wants cheap electricity and is choosing between a coal plant and a solar farm. Analyze the trade-offs like a systems thinker.",
    steps: [
      "IDENTIFY the resource: coal is nonrenewable; sunlight is renewable.",
      "LIST benefits: coal gives steady power day and night; solar is clean and fuel-free once built.",
      "LIST costs: coal releases pollution and CO2 and will run out; solar needs sunny weather and upfront materials.",
      "WEIGH the system: over the long term, solar avoids ongoing pollution and never runs out, so it is the more sustainable choice despite a bigger startup cost."
    ],
    answer: "Coal is cheaper to start but pollutes and runs out; solar costs more upfront but is renewable and clean — the sustainable long-term trade-off favors solar."
  },
  items: [
    {
      id: "g7.summer.sci.w5.d2.q1",
      type: "multiple_choice",
      stem: "Which set of resources is entirely RENEWABLE?",
      choices: [
        "Coal, oil, natural gas",
        "Sunlight, wind, and sustainably managed timber",
        "Copper, gold, and iron ore",
        "Gasoline, diesel, and coal"
      ],
      answerIndex: 1,
      explanation: "Sunlight, wind, and responsibly grown timber refill on a human timescale, so they are renewable. Fossil fuels and mined metals are nonrenewable.",
      hintLadder: [
        "Renewable resources refill quickly enough for people to keep using them.",
        "Which of these will nature replace within a lifetime?",
        "Sunlight, wind, and managed timber all renew."
      ]
    },
    {
      id: "g7.summer.sci.w5.d2.q2",
      type: "multiple_choice",
      stem: "A company invents a single-use plastic straw that is cheap and waterproof. What is the main ENVIRONMENTAL trade-off?",
      choices: [
        "It is too expensive for most people",
        "It has no downside at all",
        "It uses only renewable sunlight",
        "It creates long-lasting waste that pollutes ecosystems for centuries"
      ],
      answerIndex: 3,
      explanation: "The benefit (cheap, waterproof) comes with a cost: plastic persists in the environment for a very long time, harming ecosystems. Every design choice has trade-offs.",
      hintLadder: [
        "A trade-off is a downside that comes WITH the benefit.",
        "What happens to a plastic straw after you throw it away?",
        "It lingers as waste and pollutes ecosystems for a very long time."
      ],
      misconceptionsTargeted: ["technology-has-no-downside"]
    },
    {
      id: "g7.summer.sci.w5.d2.q3",
      type: "multiple_choice",
      stem: "Which design choice BEST fits the definition of sustainability?",
      choices: [
        "Designing a product to be reused and repaired instead of thrown away",
        "Using as much nonrenewable material as possible to make it cheap",
        "Ignoring pollution to speed up production",
        "Using a resource faster than it can be replaced"
      ],
      answerIndex: 0,
      explanation: "Sustainability means meeting needs without using up future resources. Reusing and repairing reduces resource use and waste.",
      hintLadder: [
        "Sustainability protects resources for future generations.",
        "Which choice REDUCES waste and resource use?",
        "Designing for reuse and repair is the sustainable choice."
      ]
    },
    {
      id: "g7.summer.sci.w5.d2.q4",
      type: "short_answer",
      stem: "A farm switches from a river to groundwater (water pumped from underground) to irrigate crops during a dry summer. Describe ONE benefit and ONE trade-off of this choice, thinking about the whole system.",
      rubric: {
        level3: "Names a real benefit (crops survive the drought / steady supply) AND a real systems trade-off (groundwater can be pumped faster than it refills, wells can run dry, cost/energy of pumping) with reasoning.",
        level2: "Gives a benefit and a trade-off but one is vague or not tied to the system.",
        level1: "Gives only one side or an off-topic answer."
      },
      exemplar: "Benefit: groundwater keeps the crops alive when the river is too low, protecting the harvest. Trade-off: if the farm pumps groundwater faster than rain can refill it, the underground supply drops and wells could run dry, hurting the whole community later.",
      hintLadder: [
        "First, why is switching to groundwater helpful right now?",
        "Now think ahead — what happens if everyone pumps a lot?",
        "Groundwater can be used faster than it refills — that's the trade-off."
      ]
    },
    {
      id: "g7.summer.sci.w5.d2.q5",
      type: "short_answer",
      stem: "You are inventing something to solve a real problem this week. Name one resource your invention would use, say whether it is renewable or nonrenewable, and explain one thing you'd do to make it MORE sustainable.",
      rubric: {
        level3: "Names a specific resource, correctly classifies it renewable/nonrenewable, AND gives a realistic sustainability improvement (reuse, renewable swap, less material, recycled parts).",
        level2: "Names a resource and classifies it but the sustainability step is vague.",
        level1: "Misclassifies the resource or gives no sustainability idea."
      },
      exemplar: "My invention uses electricity, which can be renewable if it comes from solar. To make it more sustainable I'd build the case from recycled plastic and design it to be repaired instead of replaced, so it uses fewer new resources over time.",
      hintLadder: [
        "What material or energy does your invention need?",
        "Is that resource one nature refills quickly, or not?",
        "Name one change — recycled parts, renewable power, or reuse — that lowers its impact."
      ]
    }
  ],
  reflectionPrompt: "Pick one thing you used today (a bottle, a device, a snack wrapper). Where did its materials come from, and where will they end up? Trace the whole system.",
  misconceptionBank: [
    {
      id: "technology-has-no-downside",
      label: "Assumes new technology is purely good with no costs",
      description: "Focuses only on an invention's benefits and ignores the resource use, pollution, or waste it creates.",
      coachMove: "For any invention, ask 'what goes IN and what comes OUT?' Every solution uses resources and produces something — name both."
    },
    {
      id: "renewable-means-unlimited",
      label: "Thinks renewable resources are unlimited and impact-free",
      description: "Believes renewable resources can never be overused and have no environmental cost.",
      coachMove: "Point out that even renewables have limits and costs — solar panels take materials to build, and forests can be cut faster than they regrow."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Power It?",
      prompt:
        "Would you rather power your invention with a cheap coal generator that runs anytime but puffs out pollution, or a solar panel that's clean and free to run but only works when the sun is out? Think about both the benefit AND the cost before you choose.",
      answer:
        "There's no free lunch — that's the trade-off. Coal is reliable but pollutes and runs out; solar is clean and renewable but weather-dependent and costs more upfront. A systems thinker weighs long-term impact, which usually favors the renewable, cleaner solar.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Trade-Off Balance Sheet",
      challenge:
        "Pick a real invention (electric car, bottled water, a smartphone, a wind farm) and build a two-column 'trade-off balance sheet' weighing its benefits against its environmental costs — then propose one way to make it more sustainable.",
      materials: ["Paper & pencil, OR a simple two-column table on a device"],
      steps: [
        "Write the invention at the top and note the main resource it uses.",
        "List at least 3 BENEFITS in the left column.",
        "List at least 3 environmental COSTS (resource use, pollution, waste) in the right column.",
        "At the bottom, propose one redesign that reduces a cost without losing the main benefit."
      ],
      deliverable: "A completed benefit-vs-cost balance sheet with one sustainability redesign proposed at the bottom.",
      choiceBoard: [
        "Make the two-column balance sheet with a redesign note.",
        "Draw a 'seesaw' poster showing benefits on one side and costs on the other.",
        "Write a short 'inventor's decision memo' explaining the trade-off you'd accept and why."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Systems Impact Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.sci.w5.d2.arena1",
          type: "multiple_choice",
          stem: "A city replaces gas buses with electric buses charged from a SOLAR array. Which statement best describes the systems trade-off?",
          choices: [
            "There is no trade-off — it is perfect in every way",
            "It uses more gasoline than before",
            "It cuts tailpipe pollution and uses renewable energy, but building the buses and panels still takes materials and energy up front",
            "It makes the air dirtier"
          ],
          answerIndex: 2,
          explanation: "The switch reduces pollution and taps a renewable source (big benefits), but manufacturing the buses and solar panels still requires materials and energy — a real, smaller trade-off.",
          hintLadder: [
            "Even a clean solution has SOME cost — where is it hiding?",
            "Think about what it takes to BUILD the buses and panels.",
            "Benefit: less pollution and renewable power. Cost: materials and energy to manufacture."
          ]
        },
        {
          id: "g7.summer.sci.w5.d2.arena2",
          type: "short_answer",
          stem: "An island runs out of fresh water each summer. An inventor proposes a solar-powered desalination device that turns seawater into drinking water. Give ONE reason this is sustainable and ONE trade-off the island should still consider.",
          rubric: {
            level3: "Names a real sustainability strength (uses renewable solar / seawater is abundant) AND a genuine trade-off (upfront cost/materials, leftover salty brine to dispose of, maintenance) with reasoning.",
            level2: "Gives one strong point and one weaker or vague point.",
            level1: "Gives only one side or an off-topic response."
          },
          exemplar: "It's sustainable because it runs on renewable solar power and uses seawater, which the ocean has plenty of. But a trade-off is the leftover super-salty brine — dumping it back can harm sea life near the shore, so the island must plan how to handle it.",
          hintLadder: [
            "Why is running on the sun and seawater a plus?",
            "What comes OUT of the process besides fresh water?",
            "Removing salt leaves concentrated brine — that's the trade-off to manage."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Renew & Recharge",
      prompt:
        "Stand and stretch tall like a tree soaking up sunlight (hold 10 seconds), then 'sway in the wind,' then plant your feet and take three slow, deep breaths — imagine breathing clean air your inventions helped protect.",
      scienceTieIn:
        "Trees and plants are renewable systems that clean our air by taking in carbon dioxide and releasing oxygen — the same air your body is using to recharge right now.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Every invention has a footprint. Write about one resource you'd want your invention to use wisely, and one thing you'd do so it helps Earth's systems instead of harming them.",
      badge: { id: "g7-earth-systems-steward", name: "Earth Systems Steward", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
