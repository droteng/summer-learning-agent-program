// Grade 7 Science — Spring Expedition, Week 4 (Genetics for Kids), Day 2.
// Topic: dominant/recessive traits and Punnett squares. Grade-7 depth:
// genotypic vs. phenotypic ratios, heterozygous/homozygous vocabulary,
// and predicting probabilities from a cross.

export const springG7ScienceW4D2 = {
  id: "g7.spring.sci.w4.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Science",
  topic: "Dominant and recessive traits; genotypic and phenotypic ratios in Punnett squares",
  topicTag: "dominant-recessive",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS3-2", "NGSS.MS-LS1-4"],
  hook: "You know a Punnett square predicts offspring — but a geneticist reads TWO ratios from every square: how the traits LOOK (phenotype) and how the alleles are PAIRED (genotype). Today you learn to read both, using the precise words scientists use: homozygous and heterozygous.",
  miniLesson: [
    "An organism is HOMOZYGOUS when its two alleles match (BB or bb) and HETEROZYGOUS when they differ (Bb). A dominant allele shows its trait whenever it is present, so BB and Bb share the same phenotype.",
    "A cross has two ratios. The GENOTYPIC ratio counts allele pairs (e.g., 1 BB : 2 Bb : 1 bb). The PHENOTYPIC ratio counts how offspring look (e.g., 3 dominant : 1 recessive). They come from the same square but count different things.",
    "Because the four boxes are equally likely, each box is a 1-in-4 outcome. Reading the square lets you predict the probability of each genotype and each phenotype before any offspring are born."
  ],
  workedExample: {
    prompt: "Cross two heterozygous parents, Bb × Bb (B = brown, dominant; b = blue, recessive). Give BOTH the genotypic and phenotypic ratios.",
    steps: [
      "Place one parent's alleles (B, b) across the top and the other's (B, b) down the side.",
      "Fill each box by combining row and column: BB, Bb, Bb, bb.",
      "Genotypic ratio: 1 BB : 2 Bb : 1 bb (counting the allele pairs).",
      "Phenotypic ratio: BB and Bb both look brown, bb looks blue, so 3 brown : 1 blue."
    ],
    answer: "Genotypic ratio 1 BB : 2 Bb : 1 bb; phenotypic ratio 3 brown : 1 blue."
  },
  items: [
    {
      id: "g7.spring.sci.w4.d2.q1",
      type: "multiple_choice",
      stem: "An organism with the genotype Bb is best described as...",
      choices: [
        "Homozygous dominant",
        "Heterozygous",
        "Homozygous recessive",
        "Purebred"
      ],
      answerIndex: 1,
      explanation: "Bb has two DIFFERENT alleles, which makes it heterozygous. Matching pairs (BB or bb) are homozygous.",
      hintLadder: [
        "Are the two alleles the same or different?",
        "'Hetero' means different; 'homo' means same.",
        "Bb has two different alleles, so it is heterozygous."
      ]
    },
    {
      id: "g7.spring.sci.w4.d2.q2",
      type: "multiple_choice",
      stem: "In a Bb × Bb cross, why is the GENOTYPIC ratio (1:2:1) different from the PHENOTYPIC ratio (3:1)?",
      choices: [
        "The genotypic ratio is always wrong",
        "The two heterozygous (Bb) boxes look the same as the BB box, so three genotypes collapse into two phenotypes",
        "Phenotype counts alleles; genotype counts looks",
        "There is no difference between the two ratios"
      ],
      answerIndex: 1,
      explanation: "BB and both Bb boxes all show the dominant phenotype, so the 1:2:1 genotypes collapse into a 3:1 phenotype ratio.",
      hintLadder: [
        "Which boxes look the SAME even though their alleles differ?",
        "BB and Bb both show the dominant trait.",
        "Three dominant-looking genotypes become one phenotype group, giving 3:1."
      ],
      misconceptionsTargeted: ["genotype-pheno-ratio-mixup"]
    },
    {
      id: "g7.spring.sci.w4.d2.q3",
      type: "numeric",
      stem: "In a Bb × Bb Punnett square, how many of the 4 boxes are HETEROZYGOUS (Bb)?",
      answer: 2,
      tolerance: 0,
      unit: "boxes",
      explanation: "The boxes are BB, Bb, Bb, bb. Two of them (Bb, Bb) have two different alleles, so 2 boxes are heterozygous.",
      hintLadder: [
        "Fill the square: BB, Bb, Bb, bb.",
        "Heterozygous means the two letters differ (Bb).",
        "Count the Bb boxes: there are 2."
      ]
    },
    {
      id: "g7.spring.sci.w4.d2.q4",
      type: "multiple_choice",
      stem: "You cross a heterozygous tall plant (Tt) with a homozygous recessive short plant (tt). What is the PHENOTYPIC ratio of the offspring?",
      choices: [
        "All tall",
        "3 tall : 1 short",
        "1 tall : 1 short",
        "All short"
      ],
      answerIndex: 2,
      explanation: "Tt × tt gives boxes Tt, Tt, tt, tt. Tt is tall, tt is short, so the phenotypic ratio is 2 tall : 2 short = 1 tall : 1 short.",
      hintLadder: [
        "One parent passes T or t; the other passes only t.",
        "Boxes: Tt, Tt, tt, tt.",
        "Two tall and two short means a 1:1 ratio."
      ]
    },
    {
      id: "g7.spring.sci.w4.d2.q5",
      type: "short_answer",
      stem: "Explain the difference between a GENOTYPIC ratio and a PHENOTYPIC ratio. Use a Bb × Bb cross as your example, and use the words 'homozygous' and 'heterozygous.'",
      rubric: {
        level3: "Explains that the genotypic ratio counts allele pairs (1 homozygous BB : 2 heterozygous Bb : 1 homozygous bb) while the phenotypic ratio counts appearances (3 dominant : 1 recessive), correctly using both vocabulary terms.",
        level2: "Distinguishes the two ratios but gives an incorrect ratio or omits one required term.",
        level1: "Confuses the two ratios or gives no clear reasoning."
      },
      exemplar: "The genotypic ratio counts the allele pairs. In a Bb × Bb cross it is 1 homozygous BB : 2 heterozygous Bb : 1 homozygous bb. The phenotypic ratio counts what the offspring look like. Because the homozygous BB and heterozygous Bb both show the dominant trait, the phenotypic ratio is 3 dominant : 1 recessive. Both come from the same square, but one counts allele pairs and the other counts appearances.",
      hintLadder: [
        "One ratio counts allele pairs, the other counts looks.",
        "Genotypic: 1 BB : 2 Bb : 1 bb. Which are homozygous vs. heterozygous?",
        "Phenotypic collapses BB and Bb into 'dominant,' giving 3:1."
      ]
    }
  ],
  reflectionPrompt: "A heterozygous organism carries a hidden recessive allele. Why might this 'hidden' allele matter more in the next generation than in the organism carrying it?",
  misconceptionBank: [
    {
      id: "genotype-pheno-ratio-mixup",
      label: "Confuses genotypic and phenotypic ratios",
      description: "Reports 3:1 for genotype or 1:2:1 for phenotype, mixing up which ratio counts allele pairs and which counts appearances.",
      coachMove: "Anchor them: genotype counts the LETTERS in each box (1:2:1); phenotype counts what SHOWS (3:1). Have them label each box both ways."
    },
    {
      id: "one-recessive-shows",
      label: "Thinks one recessive allele is enough to show the trait",
      description: "Believes a heterozygous organism (Bb) will display the recessive trait, forgetting the dominant allele masks it.",
      coachMove: "Remind them a dominant allele 'wins' when present, so the recessive trait appears only in homozygous recessive (bb) individuals."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Carrier Riddle",
      prompt:
        "A brown-eyed man and a brown-eyed woman are both 'carriers' — each is heterozygous (Bb). Neither shows blue eyes, yet a genetic counselor tells them their child has a 1-in-4 chance of blue eyes. How can two people who don't have a trait still risk passing it on?",
      answer:
        "Each parent is heterozygous (Bb): brown phenotype but carrying a hidden recessive b. Each can pass the b. If the child inherits b from BOTH (genotype bb), it has blue eyes. Since bb is 1 of the 4 equally likely boxes, the chance is 1 in 4 — the hidden allele resurfaced in the next generation.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Double-Ratio Punnett Square",
      challenge:
        "Pick a made-up trait (like glowing scales, G = glowing dominant, g = non-glowing recessive). Draw a 2×2 Punnett square for a Gg × Gg cross, then write BOTH ratios beneath it: the genotypic ratio and the phenotypic ratio.",
      materials: ["Paper & pencil, OR a drawing app"],
      steps: [
        "Choose a trait and label the dominant (capital) and recessive (lowercase) alleles.",
        "Draw a 2×2 grid, put one parent's alleles on top and the other's on the side, and fill all four boxes.",
        "Write the genotypic ratio by counting the allele pairs (homozygous vs. heterozygous).",
        "Write the phenotypic ratio by counting how many offspring show each trait."
      ],
      deliverable: "A completed Gg × Gg Punnett square with BOTH the genotypic ratio (1:2:1) and phenotypic ratio (3:1) written and labeled below it.",
      choiceBoard: [
        "Draw and fill the square, then label both ratios.",
        "Build the square with sliding paper tiles and record both ratios on a card.",
        "Make a comic where a geneticist explains why the same square gives two different ratios."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Punnett Square Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.sci.w4.d2.arena1",
          type: "numeric",
          stem: "In a Bb × Bb cross, what is the probability (as a percent) that an offspring is HOMOZYGOUS (either BB or bb)? Enter a number without the % sign.",
          answer: 50,
          tolerance: 0,
          unit: "%",
          explanation: "The boxes are BB, Bb, Bb, bb. The homozygous boxes are BB and bb — 2 out of 4 = 50%.",
          hintLadder: [
            "Homozygous means matching alleles: BB or bb.",
            "Which boxes match? BB and bb — that's 2 of 4.",
            "2 out of 4 = 50%."
          ]
        },
        {
          id: "g7.spring.sci.w4.d2.arena2",
          type: "short_answer",
          stem: "A farmer has a tall pea plant but doesn't know if it is homozygous (TT) or heterozygous (Tt). Describe a 'test cross' she could do and explain how the offspring would reveal the unknown genotype.",
          rubric: {
            level3: "Describes crossing the unknown tall plant with a homozygous recessive (tt) plant AND explains that if any offspring are short (tt), the parent must be Tt, but if all are tall, it is likely TT.",
            level2: "Suggests crossing with a recessive plant but does not clearly explain how the offspring reveal the genotype.",
            level1: "No valid cross or reasoning."
          },
          exemplar: "She should cross the unknown tall plant with a homozygous recessive short plant (tt). If the tall plant is TT, every offspring gets a T and all are tall. If it is Tt, about half the offspring inherit t from both parents (tt) and are short. So seeing any short offspring proves the parent was heterozygous (Tt).",
          hintLadder: [
            "Cross the unknown plant with what genotype to expose a hidden t?",
            "Use a homozygous recessive (tt) plant.",
            "Any short offspring means the tall parent carried a hidden t (Tt)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Homo vs. Hetero Freeze",
      prompt:
        "Call 'HOMOZYGOUS!' and press both hands together, matching (same alleles). Call 'heterozygous!' and hold your hands in two different shapes (different alleles). Alternate the two poses 5 times, moving smoothly between matched and mixed.",
      scienceTieIn: "Matched hands stand for a homozygous pair (BB or bb) and mismatched hands for a heterozygous pair (Bb) — a body-sized reminder of the allele pairs you count in a genotypic ratio.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The same Punnett square gave you two different ratios — genotypic and phenotypic. Write about another time in life when the same situation can be 'counted' or measured in more than one correct way.",
      badge: { id: "g7-spring-ratio-reader", name: "Ratio Reader", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
