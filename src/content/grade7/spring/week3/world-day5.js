// Grade 7 World/Current Affairs — Spring Expedition, Week 3 (Life Cycles),
// Day 5. Topic: biodiversity and ecosystems — interdependence, resilience,
// keystone species, and comparing sources/claims on biodiversity loss.

export const springG7WorldW3D5 = {
  id: "g7.spring.world.w3.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 5,
  subject: "World/Current Affairs",
  topic: "Biodiversity and ecosystems",
  topicTag: "biodiversity",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.4", "NGSS.MS-LS2-4"],
  hook: "Every organism you studied this week is a thread in a much larger web. Grade 7 zooms out to how those threads hold together: some species are 'keystones' whose removal collapses far more than their own numbers would suggest — and news headlines about biodiversity loss don't always agree. Today you reason about resilience, keystone species, and how to weigh competing claims.",
  miniLesson: [
    "Biodiversity is the VARIETY of living things — species richness — in an area. Higher biodiversity generally means greater RESILIENCE: if one species is lost, others can fill similar roles (functional redundancy), so the ecosystem recovers rather than collapses.",
    "A KEYSTONE species has an effect on its ecosystem far larger than its abundance suggests. Remove sea otters and urchins explode and destroy kelp forests; remove a top predator and prey overgraze. Keystone loss can trigger a cascade through the whole web.",
    "Claims about biodiversity loss come from many SOURCES that can differ — a conservation group, an industry report, a peer-reviewed study. A careful thinker compares them for evidence, expertise, and possible bias before deciding what to believe."
  ],
  workedExample: {
    prompt: "A kelp forest has sea otters, sea urchins, kelp, fish, and seabirds. Otters eat urchins; urchins eat kelp; fish and birds shelter in the kelp. Explain what likely happens if the otters (a keystone species) are removed.",
    steps: [
      "Otters normally keep the urchin population in check by eating them.",
      "Remove the otters, and urchins are no longer controlled, so their numbers explode.",
      "Exploding urchins overgraze the kelp, destroying the kelp forest.",
      "Losing the kelp removes shelter and food for fish and seabirds, so the whole community collapses — a cascade far bigger than 'just losing otters.' That outsized impact is why otters are a keystone species."
    ],
    answer: "Without otters, urchins explode, overgraze and destroy the kelp forest, and the fish and birds that depend on kelp collapse too — a cascade showing the otter is a keystone species."
  },
  items: [
    {
      id: "g7.spring.world.w3.d5.q1",
      type: "multiple_choice",
      stem: "What makes a species a KEYSTONE species?",
      choices: [
        "It is the largest animal in the ecosystem",
        "Its impact on the ecosystem is far greater than its abundance would suggest, so its loss causes a big cascade",
        "It is the most numerous species in the ecosystem",
        "It is any species that lives in the middle of a food web"
      ],
      answerIndex: 1,
      explanation: "A keystone species has a disproportionately large effect relative to its numbers; removing it triggers a cascade that can reshape or collapse the whole ecosystem.",
      hintLadder: [
        "It's not about being the biggest or most common.",
        "Think about IMPACT compared to how many there are.",
        "A keystone species has an outsized effect for its abundance."
      ]
    },
    {
      id: "g7.spring.world.w3.d5.q2",
      type: "multiple_choice",
      stem: "Why does higher biodiversity usually make an ecosystem MORE resilient?",
      choices: [
        "Because more species means more things can go wrong",
        "Because if one species is lost, others can fill a similar role, so the system recovers instead of collapsing",
        "Because it stops the ecosystem from ever changing",
        "Because fewer species are easier to manage"
      ],
      answerIndex: 1,
      explanation: "With more species, there is functional redundancy — others can take over a lost species' role — so a diverse ecosystem absorbs disturbances and recovers more readily.",
      hintLadder: [
        "Think of a team with many players who can cover for an injury.",
        "If one species is lost, what can other species do?",
        "Redundant roles = the system recovers = resilience."
      ],
      misconceptionsTargeted: ["more-species-more-fragile"]
    },
    {
      id: "g7.spring.world.w3.d5.q3",
      type: "multiple_choice",
      stem: "You read two claims about a decline in local bees. Claim A: a peer-reviewed study by ecologists with 10 years of data. Claim B: a blog post from a pesticide company saying bees are 'totally fine.' How should you weigh them?",
      choices: [
        "Trust Claim B, because companies know their products best",
        "Trust Claim A more, because it is peer-reviewed, evidence-based, and less likely to be biased",
        "Trust whichever is shorter and easier to read",
        "Trust both equally, since all claims are equal"
      ],
      answerIndex: 1,
      explanation: "Claim A is peer-reviewed and evidence-based, while Claim B has a clear conflict of interest (a pesticide company downplaying harm). Evidence, expertise, and possible bias all favor Claim A.",
      hintLadder: [
        "Who benefits if people believe each claim?",
        "One has independent, reviewed evidence; the other has a conflict of interest.",
        "Peer-reviewed, evidence-based, and unbiased wins."
      ],
      misconceptionsTargeted: ["claims-are-neutral"]
    },
    {
      id: "g7.spring.world.w3.d5.q4",
      type: "short_answer",
      stem: "Choose an ecosystem you know (forest, pond, garden, or coral reef). Identify a species that could act as a KEYSTONE and explain the CASCADE that would follow if it were removed.",
      rubric: {
        level3: "Names a real ecosystem and a plausible keystone species AND traces a clear cascade — how removing it would ripple through at least two other species/parts of the web, reducing the ecosystem's health or resilience.",
        level2: "Names a species but the cascade is vague, stops at one step, or the species isn't a plausible keystone.",
        level1: "No real ecosystem or no cascade reasoning."
      },
      exemplar: "In a coral reef, a parrotfish could act as a keystone species because it eats algae off the coral. If parrotfish were removed, algae would grow unchecked and smother the coral. As the coral dies, the fish and invertebrates that shelter and feed among it lose their habitat and decline too, and predators that ate those fish lose prey. So removing one algae-eating fish cascades into the collapse of much of the reef community.",
      hintLadder: [
        "Pick a species whose job affects many others (a predator, grazer, or pollinator).",
        "Ask: what does it control or provide?",
        "Trace at least two knock-on effects if it disappears."
      ]
    },
    {
      id: "g7.spring.world.w3.d5.q5",
      type: "short_answer",
      stem: "News stories sometimes disagree about how serious biodiversity loss is. Explain how you would decide which reports to trust, referring to evidence, expertise, and bias.",
      rubric: {
        level3: "Explains checking the EVIDENCE (data, peer review), the EXPERTISE/authorship, and possible BIAS or conflict of interest, and uses these to judge which reports are more trustworthy rather than treating all claims equally.",
        level2: "Mentions one or two of evidence/expertise/bias but doesn't clearly use them to compare reports.",
        level1: "No clear reasoning about how to evaluate sources."
      },
      exemplar: "I'd compare the reports instead of believing the first one. First, I'd look at the evidence: does it cite data or peer-reviewed research, or just opinions? Second, I'd check expertise and authorship: is it from ecologists and scientists, or someone with no background? Third, I'd look for bias or a conflict of interest — for example, an industry that profits from downplaying the problem. The reports that are evidence-based, expert-authored, and free of obvious conflicts of interest are the ones I'd trust most.",
      hintLadder: [
        "Think of three tests: evidence, expertise, and bias.",
        "Does the report cite data? Who wrote it? Who benefits from the claim?",
        "Use those tests to rank which reports are more trustworthy."
      ]
    }
  ],
  reflectionPrompt: "Identify one keystone-like connection in your own local environment this spring — a pollinator, a predator, a plant many things rely on. What might unravel if it disappeared?",
  misconceptionBank: [
    {
      id: "more-species-more-fragile",
      label: "Thinks more species makes an ecosystem weaker",
      description: "Assumes having many species means more things can go wrong, when variety usually makes ecosystems stronger and more able to recover.",
      coachMove: "Use a team analogy: a squad with many skilled players covers an injury, but a one-player team collapses if that player is out. Variety provides backup and resilience."
    },
    {
      id: "claims-are-neutral",
      label: "Thinks every claim is equally trustworthy",
      description: "Treats a company blog and a peer-reviewed study as equally reliable, ignoring evidence, expertise, and conflicts of interest.",
      coachMove: "Ask 'who benefits if I believe this?' and 'what's the evidence?' A source with a conflict of interest or no evidence should be trusted less than an independent, evidence-based one."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Pull One Thread",
      prompt:
        "Would you rather remove a common but 'ordinary' species (like one kind of grass among many) or a rare KEYSTONE species (like the only top predator) from an ecosystem? Think about which removal causes the bigger cascade — even though the keystone is far less numerous.",
      answer:
        "Removing the keystone species causes the bigger cascade. Even though it's rare, its role — controlling prey, or holding the web together — is so important that losing it lets other populations explode or collapse. The common grass has backups (other plants), but a keystone often has none, so its loss ripples through the entire ecosystem.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Keystone Cascade Map",
      challenge:
        "Build a 'web of life' for one ecosystem with at least six living things, then IDENTIFY a keystone species and map the CASCADE that would follow its removal. Use arrows for who-depends-on-whom, then use a second color to show which links break if the keystone is gone.",
      materials: ["Paper & markers (two colors)", "OR a drawing app"],
      steps: [
        "Choose an ecosystem: forest, pond, kelp forest, meadow, or reef.",
        "List at least six living things, including a plant, a grazer, a predator, and a decomposer.",
        "Draw labeled arrows for each dependency (food, pollination, shelter, nutrient recycling).",
        "Circle a keystone species and, in a second color, trace which links collapse if it's removed."
      ],
      deliverable: "A labeled web-of-life diagram of six or more species with a keystone species circled and its removal cascade traced in a second color.",
      choiceBoard: [
        "Draw the web-of-life map with the keystone cascade highlighted.",
        "Write a short investigative news report: 'The day the keystone species vanished.'",
        "Design a fact-checked infographic on biodiversity loss that cites at least two sources and flags one biased claim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Biodiversity Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.world.w3.d5.arena1",
          type: "multiple_choice",
          stem: "In a kelp forest, sea otters eat urchins, and urchins eat kelp. Otters are removed. Which chain of events is MOST likely, and what does it reveal?",
          choices: [
            "Urchins decline, kelp declines, and nothing else changes",
            "Urchins explode, overgraze and destroy the kelp, and species that rely on kelp collapse — revealing the otter as a keystone species",
            "Kelp grows faster because there are fewer otters to eat it",
            "The ecosystem instantly gains new species to replace the otters"
          ],
          answerIndex: 1,
          explanation: "Removing otters releases the urchins, which overgraze the kelp; the loss of kelp then collapses the community that depends on it. Such an outsized cascade from one species is the signature of a keystone species.",
          hintLadder: [
            "Otters were controlling the urchins — what happens to urchins now?",
            "More urchins means what for the kelp?",
            "Trace the collapse and name the otter's role: keystone species."
          ]
        },
        {
          id: "g7.spring.world.w3.d5.arena2",
          type: "short_answer",
          stem: "Two reports on a wetland disagree: a peer-reviewed study says biodiversity is falling fast, while a report funded by a developer who wants to drain the wetland says it's 'perfectly healthy.' Explain, using evidence, expertise, and bias, which report you'd trust more and why — and why the disagreement itself matters.",
          rubric: {
            level3: "Judges the peer-reviewed study more trustworthy using at least two of evidence/expertise/bias (independent, reviewed data vs. a developer with a conflict of interest), AND explains why the disagreement matters (decisions like draining the wetland depend on which report people believe).",
            level2: "Picks the study but uses only one criterion, or doesn't explain why the disagreement matters.",
            level1: "Treats the reports as equal or gives no reasoning about bias/evidence."
          },
          exemplar: "I'd trust the peer-reviewed study more. It's based on independent data that other scientists checked, and its authors are experts with no stake in the outcome. The developer's report has a clear conflict of interest — the developer profits if the wetland is declared healthy and gets drained — so it's likely biased. The disagreement matters because a real decision hangs on it: if people believe the biased report, a valuable, biodiverse wetland could be destroyed based on a claim made by someone who benefits from that destruction.",
          hintLadder: [
            "Ask who benefits from each report's conclusion.",
            "Compare evidence and expertise: reviewed study vs. funded report.",
            "Explain what real decision depends on which report is believed."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Rooted and Connected",
      prompt:
        "Stand tall and root your feet like a tree. Reach your branches wide, then imagine threads linking you to everything around you — sun, soil, water, and other living things. Take one slow breath and picture one 'keystone' in your own life you rely on more than you realize.",
      scienceTieIn: "Like species in an ecosystem, your body depends on a web of things — food, air, water, and people. Noticing those links, especially the keystone ones, calms your mind and sharpens focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could protect ONE keystone species or connection in your local ecosystem, which would you choose, and how would protecting it help many other living things stay resilient?",
      badge: { id: "g7-spring-keystone-guardian", name: "Keystone Guardian", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
