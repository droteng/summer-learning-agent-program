// Grade 7 Science — Spring Expedition, Week 4 (Genetics for Kids), Day 1.
// Topic: traits and heredity — genes, alleles, and how variation arises in
// offspring. Grade-7 depth: genotype vs. phenotype, sexual vs. asexual
// reproduction, and why sexual reproduction produces genetic variation.

export const springG7ScienceW4D1 = {
  id: "g7.spring.sci.w4.d1",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Science",
  topic: "Traits and heredity — genes, alleles, and the source of variation",
  topicTag: "heredity",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS3-2", "NGSS.MS-LS1-4"],
  hook: "Every spring, offspring resemble their parents — yet no two siblings are identical. Today you go deeper than 'kids look like their parents': you learn the difference between an organism's hidden genotype and its visible phenotype, and why sexual reproduction is a variation machine.",
  miniLesson: [
    "A trait is a heritable feature. It is coded by genes, and most genes come in alternate versions called alleles. An organism carries two alleles for each trait — one inherited from each parent.",
    "The GENOTYPE is the pair of alleles an organism carries (like Bb); the PHENOTYPE is the trait you can actually observe (like brown eyes). Different genotypes (BB and Bb) can produce the same phenotype.",
    "Asexual reproduction (one parent) makes genetically identical offspring — clones. Sexual reproduction (two parents) shuffles alleles, so each offspring inherits a new combination. That reshuffling is why siblings differ and why populations have variation."
  ],
  workedExample: {
    prompt: "Two brown-eyed parents each have the genotype Bb. Explain, using genotype and phenotype, how they can produce a blue-eyed child while both remain brown-eyed.",
    steps: [
      "Each parent's genotype is Bb: one dominant brown allele (B) and one hidden recessive blue allele (b).",
      "During sexual reproduction, each parent passes just ONE of its two alleles to the child.",
      "If both parents happen to pass the recessive b, the child's genotype is bb.",
      "A bb genotype produces the blue phenotype, even though each parent's Bb genotype still shows the brown phenotype."
    ],
    answer: "Both parents carry a hidden recessive b (genotype Bb, phenotype brown). If the child inherits b from each, its genotype is bb, giving a blue phenotype — variation produced by sexual reproduction."
  },
  items: [
    {
      id: "g7.spring.sci.w4.d1.q1",
      type: "multiple_choice",
      stem: "What is the difference between GENOTYPE and PHENOTYPE?",
      choices: [
        "Genotype is the observable trait; phenotype is the allele pair",
        "Genotype only exists in plants; phenotype only in animals",
        "They mean exactly the same thing",
        "Genotype is the pair of alleles an organism carries; phenotype is the observable trait"
      ],
      answerIndex: 3,
      explanation: "Genotype is the underlying allele pair (like Bb); phenotype is the trait you can observe (like brown eyes). Different genotypes can share a phenotype.",
      hintLadder: [
        "One term is about the hidden alleles, the other about what you can see.",
        "'Geno' points to the genes/alleles; 'pheno' points to the appearance.",
        "Genotype = allele pair; phenotype = observable trait."
      ]
    },
    {
      id: "g7.spring.sci.w4.d1.q2",
      type: "multiple_choice",
      stem: "Why does SEXUAL reproduction produce offspring with more genetic variation than ASEXUAL reproduction?",
      choices: [
        "Sexual reproduction copies one parent's genes exactly",
        "Asexual reproduction uses two parents",
        "Sexual reproduction combines alleles from two parents, creating new combinations",
        "Asexual reproduction shuffles alleles more"
      ],
      answerIndex: 2,
      explanation: "Sexual reproduction mixes alleles from two parents, so each offspring inherits a fresh combination. Asexual reproduction copies a single parent, producing near-identical clones.",
      hintLadder: [
        "How many parents contribute alleles in each type?",
        "Two parents means alleles get combined in new ways.",
        "Sexual reproduction shuffles alleles from two parents."
      ]
    },
    {
      id: "g7.spring.sci.w4.d1.q3",
      type: "multiple_choice",
      stem: "A pea plant has the genotype Rr for round seeds (R is dominant). Which statement is correct?",
      choices: [
        "Its phenotype must be wrinkled because it carries r",
        "Its phenotype is round because the dominant R is present, but it can still pass on the recessive r",
        "It cannot pass the r allele to offspring",
        "Rr and rr always look the same"
      ],
      answerIndex: 1,
      explanation: "With genotype Rr, the dominant R makes the phenotype round, but the plant still carries and can pass on the recessive r allele.",
      hintLadder: [
        "Which allele controls the visible trait when both are present?",
        "R is dominant, so the phenotype is round.",
        "But the hidden r can still be passed to offspring."
      ],
      misconceptionsTargeted: ["genotype-equals-phenotype"]
    },
    {
      id: "g7.spring.sci.w4.d1.q4",
      type: "short_answer",
      stem: "Two puppies from the same litter look different: one has floppy ears, the other pointed ears, even though they share the same two parents. Explain, using the words 'alleles' and 'sexual reproduction,' how littermates can differ.",
      rubric: {
        level3: "Explains that each parent carries two alleles per trait and passes only one at random, so sexual reproduction produces new allele combinations, making littermates inherit different genotypes and phenotypes.",
        level2: "Says the puppies got different traits from the parents but does not clearly connect it to alleles being shuffled in sexual reproduction.",
        level1: "No clear explanation or incorrect reasoning."
      },
      exemplar: "Each parent carries two alleles for ear shape and passes only one of them, chosen at random, to each puppy. Because sexual reproduction combines a random allele from each parent, the two puppies can inherit different allele combinations — one puppy may get alleles for floppy ears while the other gets alleles for pointed ears.",
      hintLadder: [
        "How many alleles does each parent pass for a trait?",
        "Which one gets passed is random each time.",
        "Sexual reproduction shuffles alleles, so littermates differ."
      ]
    },
    {
      id: "g7.spring.sci.w4.d1.q5",
      type: "short_answer",
      stem: "A strawberry plant reproduces both ways: it makes seeds (sexual) and sends out runners that grow into new plants (asexual). Explain how the offspring's genetic variation would differ between the two methods, and give one advantage of each.",
      rubric: {
        level3: "Explains that seed (sexual) offspring vary genetically because alleles are combined from two parents, while runner (asexual) offspring are genetic clones, AND gives a reasonable advantage of each (variation helps adapt vs. cloning is fast/reliable).",
        level2: "Correctly distinguishes variation vs. clones but gives a weak or missing advantage for one method.",
        level1: "Misidentifies which method produces variation or gives no reasoning."
      },
      exemplar: "The seeds come from sexual reproduction, so those offspring inherit a mix of alleles from two parents and vary genetically. The runners are asexual, so those new plants are genetic clones of the parent. Variation from seeds is an advantage because it helps the population adapt if the environment changes, while cloning from runners is an advantage because it is fast and reliably passes on a successful set of traits.",
      hintLadder: [
        "Which method combines alleles from two parents?",
        "Seeds vary; runners make clones.",
        "Variation helps adapt; cloning is fast and reliable."
      ]
    }
  ],
  reflectionPrompt: "Look at siblings in a family (human, pet, or plant). Which differences between them are evidence that sexual reproduction reshuffled their alleles?",
  misconceptionBank: [
    {
      id: "genotype-equals-phenotype",
      label: "Thinks genotype and phenotype are the same",
      description: "Believes that if you can see a trait, you automatically know both alleles — forgetting that Bb and BB share a phenotype.",
      coachMove: "Ask: 'Could a different allele pair produce the same look?' Show that BB and Bb both look brown, so a phenotype can hide more than one genotype."
    },
    {
      id: "acquired-traits-inherited",
      label: "Thinks acquired traits can be inherited",
      description: "Believes changes made during life (muscles, scars, learned skills) get passed to offspring through genes.",
      coachMove: "Only alleles already in the parent's genes pass on. Ask whether the trait is coded in the genes or gained during life."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Two Brown-Eyed Parents, One Surprise",
      prompt:
        "Two brown-eyed parents have three children: two brown-eyed and one blue-eyed. A neighbor insists this is impossible. Using the idea of hidden alleles, how would you prove the neighbor wrong?",
      answer:
        "Both parents have the genotype Bb — brown phenotype, but each secretly carries a recessive b. Each parent can pass either allele. The blue-eyed child inherited b from BOTH parents (genotype bb). So two brown-eyed parents CAN have a blue-eyed child; the recessive allele was hidden in each of them.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Genotype-to-Phenotype Creature Lab",
      challenge:
        "Invent a creature with 3 traits, each with a dominant and recessive allele. Write the genotype (allele pair) AND the phenotype (what shows) for two parents, then create one offspring by choosing one allele from each parent per trait — and show how its phenotype turned out.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Define 3 traits with a dominant (capital) and recessive (lowercase) allele each.",
        "Give two parent creatures a genotype for each trait, then draw their phenotypes.",
        "For each trait, pick one allele from each parent to build the offspring's genotype.",
        "Translate the offspring genotype into its phenotype and draw the baby, labeling genotype and phenotype for each trait."
      ],
      deliverable: "A parent-and-offspring creature set where every trait is labeled with both its genotype (allele pair) and phenotype (what shows).",
      choiceBoard: [
        "Draw the labeled parent-and-offspring creature lab.",
        "Make allele 'cards' and physically deal one from each parent to build the offspring genotype, then reveal the phenotype.",
        "Write a short lab report describing each offspring trait as a genotype and the phenotype it produces."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Heredity Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w4.d1.arena1",
          type: "multiple_choice",
          stem: "A gardener clones a prize tomato plant using cuttings (asexual). She also saves its seeds, which formed after cross-pollination with a neighboring plant (sexual). Which prediction is correct?",
          choices: [
            "The cuttings will be clones of the parent, while the seed-grown plants will vary genetically",
            "Both the cuttings and the seeds will grow into genetically identical copies",
            "The seeds will be clones, and the cuttings will vary",
            "Neither will resemble the parent at all"
          ],
          answerIndex: 0,
          explanation: "Cuttings are asexual clones, so they are genetically identical to the parent. Seeds come from sexual reproduction (two parents), so those plants inherit a new mix of alleles and vary.",
          hintLadder: [
            "Which method uses one parent, and which uses two?",
            "Cuttings copy one parent; seeds combine two.",
            "Cuttings = clones; seed plants = varied."
          ]
        },
        {
          id: "g7.spring.sci.w4.d1.arena2",
          type: "short_answer",
          stem: "A tall pea plant has genotype Tt (T = tall, dominant). Explain why you cannot tell an organism's full genotype just by looking at its phenotype, and describe how you might figure it out.",
          rubric: {
            level3: "Explains that a dominant phenotype (tall) could come from either TT or Tt, so appearance alone hides the second allele, AND suggests a way to test it (e.g., cross with a recessive plant and observe offspring).",
            level2: "Explains that the same phenotype can come from two genotypes but gives no method to distinguish them.",
            level1: "No clear reasoning or incorrect."
          },
          exemplar: "A tall plant could be TT or Tt, because the dominant T hides whether a second T or a recessive t is present. Its phenotype is the same either way. To find out, you could cross it with a short (tt) plant: if any offspring are short, the tall parent must have been Tt; if all offspring are tall, it is likely TT.",
          hintLadder: [
            "Which two genotypes both look tall?",
            "The dominant allele hides the second allele.",
            "Cross it with a recessive plant and watch the offspring."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shuffle the Alleles",
      prompt:
        "Hold one fist as 'allele from Mom' and the other as 'allele from Dad.' On each breath, cross your arms to 'combine' them into a new offspring, then swap which fists represent which allele and combine again. Repeat 5 times, feeling how each combination is a little different.",
      scienceTieIn: "Crossing your arms in new ways each time mirrors how sexual reproduction combines a random allele from each parent, producing a fresh genotype in every offspring.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A genotype can be hidden while a phenotype is visible. Write about something in your own life that is 'hidden underneath' but shapes what people see on the outside.",
      badge: { id: "g7-spring-genotype-decoder", name: "Genotype Decoder", emoji: "🧬" },
      estimatedMinutes: 7
    }
  }
};
