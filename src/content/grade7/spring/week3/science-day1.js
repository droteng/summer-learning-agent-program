// Grade 7 Science — Spring Expedition, Week 3 (Life Cycles), Day 1.
// Topic: animal life cycles and metamorphosis — complete vs. incomplete,
// with attention to the developmental and hormonal drivers of change.

export const springG7ScienceW3D1 = {
  id: "g7.spring.sci.w3.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 1,
  subject: "Science",
  topic: "Animal life cycles and metamorphosis",
  topicTag: "animal-life-cycles",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS1-4", "NGSS.MS-LS3-2"],
  hook: "A caterpillar and a butterfly share the same DNA — yet one crawls and chews leaves while the other flies and sips nectar. That total rebuild isn't magic; it's driven by hormones and controlled by which genes switch on at each stage. Today you compare complete and incomplete metamorphosis as two evolutionary strategies, and dig into WHY the change happens.",
  miniLesson: [
    "A life cycle is the ordered sequence of developmental stages an organism passes through from fertilization to reproductive adulthood, when it can produce offspring and restart the cycle. Both metamorphosis types are inherited developmental programs.",
    "COMPLETE metamorphosis (holometabolism) has four distinct stages — egg → larva → pupa → adult — where the larva and adult occupy DIFFERENT niches (different food, habitat), reducing competition between young and adults. The pupa is where the body is largely rebuilt.",
    "INCOMPLETE metamorphosis (hemimetabolism) has three stages — egg → nymph → adult — with no pupa. The nymph resembles a small wingless adult and molts repeatedly (instars). Hormones like ecdysone trigger each molt; declining juvenile hormone allows adult features to appear."
  ],
  workedExample: {
    prompt: "Compare a butterfly and a grasshopper. For each, list the stages in order, state whether the young competes with the adult for the same food, and name the metamorphosis type.",
    steps: [
      "Butterfly: egg → caterpillar (larva) → chrysalis (pupa) → adult. The caterpillar eats leaves; the adult sips nectar — DIFFERENT food, so young and adult do not compete.",
      "That four-stage, niche-separating pattern with a pupa is COMPLETE metamorphosis.",
      "Grasshopper: egg → nymph → adult. The nymph eats the same plants as the adult — SAME food, so young and adult DO compete.",
      "That three-stage pattern with no pupa, where the nymph looks like a small adult, is INCOMPLETE metamorphosis."
    ],
    answer: "Butterfly: egg → larva → pupa → adult, no competition (different food) = complete. Grasshopper: egg → nymph → adult, competition (same food) = incomplete."
  },
  items: [
    {
      id: "g7.spring.sci.w3.d1.q1",
      type: "multiple_choice",
      stem: "One advantage of COMPLETE metamorphosis is that the larva and adult usually occupy different niches. Why is that advantageous?",
      choices: [
        "It lets the larva skip the pupa stage entirely",
        "The young and adults do not compete for the same food and habitat",
        "It means the animal never has to reproduce",
        "It makes the animal grow without needing any energy"
      ],
      answerIndex: 1,
      explanation: "When the larva and adult eat different foods and live differently, the young and adults aren't competing with each other, so more of both can survive on the same resources.",
      hintLadder: [
        "Think about who would be eating the SAME food if the stages looked alike.",
        "A caterpillar eats leaves; an adult butterfly sips nectar — do they compete?",
        "Different niches means less competition between young and adults."
      ]
    },
    {
      id: "g7.spring.sci.w3.d1.q2",
      type: "multiple_choice",
      stem: "In insects, molting and the shift toward adult features are controlled by hormones. Which statement is MOST accurate?",
      choices: [
        "Metamorphosis just happens when the animal decides it is ready",
        "Hormones such as ecdysone trigger molting, and changing hormone levels allow adult features to develop",
        "Sunlight alone turns a nymph into an adult",
        "The nymph must eat a pupa to become an adult"
      ],
      answerIndex: 1,
      explanation: "Development is regulated by hormones: ecdysone drives each molt, and as juvenile hormone declines the animal molts into more adult-like forms. It is a controlled biological program, not a choice.",
      hintLadder: [
        "Is metamorphosis a choice, or a controlled internal process?",
        "The lesson named a molting hormone — what was it?",
        "Ecdysone triggers molts; falling juvenile hormone lets adult traits appear."
      ],
      misconceptionsTargeted: ["metamorphosis-is-choice"]
    },
    {
      id: "g7.spring.sci.w3.d1.q3",
      type: "multiple_choice",
      stem: "A tadpole has gills and a tail; the adult frog has lungs and legs. A caterpillar and butterfly also differ dramatically. What do BOTH examples show about metamorphosis?",
      choices: [
        "The young and adult are different species",
        "A single organism can be reorganized into a very different body between stages of ONE life cycle",
        "Metamorphosis only happens in insects",
        "The adult stage always comes before the young stage"
      ],
      answerIndex: 1,
      explanation: "In both cases it is one organism with one genome, reorganized between stages of a single life cycle — that is the essence of metamorphosis, whether in an amphibian or an insect.",
      hintLadder: [
        "Is a tadpole a different animal from its adult frog?",
        "Both examples are ONE organism changing dramatically.",
        "Metamorphosis reorganizes one organism between life-cycle stages."
      ]
    },
    {
      id: "g7.spring.sci.w3.d1.q4",
      type: "short_answer",
      stem: "Complete and incomplete metamorphosis are two different developmental strategies. Compare them on TWO points (number/type of stages AND whether the young competes with the adult), and give a correct example animal for each.",
      rubric: {
        level3: "Clearly contrasts BOTH points — complete has 4 stages with a pupa and young in a different niche (less competition); incomplete has 3 stages, no pupa, nymph resembles adult and shares its niche (competition) — AND gives a correct example of each.",
        level2: "Contrasts one point well or both weakly, or one example is missing/mismatched.",
        level1: "No clear contrast or incorrect examples."
      },
      exemplar: "Complete metamorphosis has four stages (egg, larva, pupa, adult) including a pupa where the body rebuilds, and the larva lives in a different niche than the adult so they don't compete — for example a butterfly (caterpillar eats leaves, adult sips nectar). Incomplete metamorphosis has three stages (egg, nymph, adult) with no pupa; the nymph looks like a small adult and eats the same food, so young and adults compete — for example a grasshopper.",
      hintLadder: [
        "Point 1: count the stages and note the pupa.",
        "Point 2: do the young and adult eat the same food or different food?",
        "Pick a butterfly for complete and a grasshopper or cricket for incomplete."
      ]
    },
    {
      id: "g7.spring.sci.w3.d1.q5",
      type: "short_answer",
      stem: "Both metamorphosis types eventually reach an adult stage. Explain why reaching the reproductive adult stage is essential for the SPECIES, not just the individual.",
      rubric: {
        level3: "Explains that only reproductive adults produce offspring, passing genes to the next generation; without individuals reaching adulthood and reproducing, the population/species could not continue, so the stage matters at the species level.",
        level2: "Mentions reproduction but doesn't connect it to continuing the species/population across generations.",
        level1: "No mention of reproduction or the next generation."
      },
      exemplar: "Only the adult stage can reproduce, and reproduction is how genes pass to the next generation. If individuals never reached reproductive adulthood, no offspring would be produced, the population would shrink, and eventually the species could not continue. So reaching adulthood matters not just for one animal but for keeping the whole species going over time.",
      hintLadder: [
        "What can only an adult do that a larva or nymph cannot?",
        "Think about the NEXT generation, not just one animal.",
        "Connect reproduction to the survival of the whole species."
      ]
    }
  ],
  reflectionPrompt: "Complete metamorphosis lets young and adults avoid competing, but incomplete metamorphosis skips the costly pupa stage. Which strategy do you think is 'better,' and why might BOTH still be common in nature?",
  misconceptionBank: [
    {
      id: "metamorphosis-is-choice",
      label: "Thinks metamorphosis is triggered by the animal's choice",
      description: "Believes an animal 'decides' to transform, rather than understanding it as a hormonally and genetically controlled developmental program.",
      coachMove: "Point to the hormones: ecdysone triggers molts and shifting juvenile hormone levels allow adult features. The same genome is read differently at each stage — it's a controlled biological process, not a decision."
    },
    {
      id: "metamorphosis-means-growth",
      label: "Thinks any growing = metamorphosis",
      description: "Assumes simply getting bigger (as a nymph does) is the same as the dramatic body reorganization of complete metamorphosis.",
      coachMove: "Contrast a growing kitten (just larger) with a caterpillar rebuilding into a butterfly (new body plan). Incomplete metamorphosis sits in between: molting and growth, but no full rebuild."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Same Genome, New Body",
      prompt:
        "I share one set of DNA across two lives: in one I chew leaves on many legs, in the other I sip nectar on the wing. A hormone-driven rebuild connects them inside a sealed case. Name the animal, the two stages, and the stage in between where the rebuild happens.",
      answer:
        "A butterfly. The two stages are the caterpillar (larva) that chews leaves and the adult that sips nectar; the rebuild happens inside the chrysalis (pupa) — all with the same genome.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Metamorphosis Strategy Wheel",
      challenge:
        "Build a life-cycle wheel for a transforming animal AND annotate it as an evolutionary strategy. Show every stage in order with arrows looping back, label complete vs. incomplete, and add a note on each wheel explaining ONE advantage of that strategy (e.g., niche separation, or skipping the costly pupa).",
      materials: ["Paper & markers, a paper fastener OR drawn arrows", "OR a drawing app"],
      steps: [
        "Choose an animal: butterfly, frog, ladybug, dragonfly, or grasshopper.",
        "Draw each stage in a circle, in the correct order, with looping arrows.",
        "Label it complete or incomplete metamorphosis and mark where any molt/pupa occurs.",
        "Add a one-sentence note on the advantage of that strategy for the species."
      ],
      deliverable: "A circular life-cycle diagram, labeled complete/incomplete, with looping arrows and a written note on one advantage of that strategy.",
      choiceBoard: [
        "Draw the strategy wheel with labeled stages and an advantage note.",
        "Make a two-column comparison chart of complete vs. incomplete with two example animals each.",
        "Write a first-person 'field journal' from the animal at each stage, noting how its body and diet change."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Metamorphosis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w3.d1.arena1",
          type: "multiple_choice",
          stem: "A dragonfly hatches as an aquatic nymph that hunts underwater, molts several times, then emerges as a flying adult — with no pupa. Which statement BEST describes this life cycle?",
          choices: [
            "Complete metamorphosis, because the adult looks different from the nymph",
            "Incomplete metamorphosis, because there is no pupa and the nymph molts directly toward the adult form",
            "No metamorphosis, because the animal only grows larger",
            "Complete metamorphosis, because it lives in water"
          ],
          answerIndex: 1,
          explanation: "Despite the aquatic nymph looking somewhat different, the absence of a pupa and the direct molting toward the adult mark this as incomplete metamorphosis (hemimetabolism).",
          hintLadder: [
            "Focus on the defining feature: was there a pupa stage?",
            "No pupa, and the nymph molts toward the adult.",
            "No pupa + direct molting = incomplete metamorphosis."
          ]
        },
        {
          id: "g7.spring.sci.w3.d1.arena2",
          type: "short_answer",
          stem: "A caterpillar and a butterfly have identical DNA yet look nothing alike. Explain how one genome can build two such different bodies, referring to life-cycle stages and the role of the pupa.",
          rubric: {
            level3: "Explains that the SAME genome is read differently at each stage (different genes active), and that during the pupa the larval body is substantially reorganized/rebuilt into the adult — so different bodies arise from one set of DNA across stages of one life cycle.",
            level2: "Says they are one organism at different stages but doesn't explain differential gene use or the pupa's rebuilding role.",
            level1: "Treats them as different animals or gives no genome/life-cycle reasoning."
          },
          exemplar: "They share one genome, but which genes are switched on changes at each life-cycle stage. As a larva, genes for a crawling, leaf-eating body are active. Inside the pupa (chrysalis), the larval body is largely broken down and rebuilt, with adult-body genes now directing the construction of wings, legs, and mouthparts for sipping nectar. Same DNA, different genes read at different stages, so one organism ends up with two very different bodies.",
          hintLadder: [
            "The DNA is the same — so what changes between stages?",
            "Think about which GENES are active at each stage.",
            "Explain what happens to the body inside the pupa."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Metamorphosis Stretch",
      prompt:
        "Act out a life cycle with control: curl tiny like an egg, wiggle low like a larva (5 slow wiggles), fold still like a pupa and take 5 slow breaths as your 'body reorganizes,' then rise and spread your arms to 'fly' as the adult. Repeat twice, moving smoothly between stages.",
      scienceTieIn: "Moving deliberately through each stage mirrors how a real animal's body is reorganized under hormonal control during metamorphosis — and the deep breaths in the 'pupa' pose deliver oxygen that sharpens your focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Complete metamorphosis 'costs' a pupa stage but avoids competition between young and adults. If you were designing an animal, which strategy would you choose for a crowded habitat, and why?",
      badge: { id: "g7-spring-metamorphosis-strategist", name: "Metamorphosis Strategist", emoji: "🦋" },
      estimatedMinutes: 7
    }
  }
};
