// Grade 6 Science — Spring Expedition, Week 4 (Genetics for Kids), Day 2.
// Topic: dominant and recessive traits; reading a simple Punnett square.

export const springG6ScienceW4D2 = {
  id: "g6.spring.sci.w4.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Science",
  topic: "Dominant and recessive traits; reading a Punnett square",
  topicTag: "dominant-recessive",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS3-2", "NGSS.MS-LS1-4"],
  hook: "Why do two brown-eyed parents sometimes have a blue-eyed child? The answer is hidden in dominant and recessive genes. Today you crack the code with a tool geneticists use every day: the Punnett square.",
  miniLesson: [
    "Each trait is controlled by a pair of gene versions called alleles — one from each parent. A capital letter shows a DOMINANT allele (like B); a lowercase letter shows a RECESSIVE allele (like b).",
    "A dominant allele shows up even if there's only one copy. A recessive trait only shows when BOTH alleles are recessive (bb). So Bb and BB both look brown-eyed; only bb looks blue-eyed.",
    "A Punnett square is a 2×2 grid that lines up the alleles from each parent to show every possible combination the offspring could inherit."
  ],
  workedExample: {
    prompt: "A Bb parent is crossed with a Bb parent (B = brown eyes, dominant; b = blue eyes, recessive). Use a Punnett square to list the offspring combinations.",
    steps: [
      "Put one parent's alleles (B, b) across the top and the other's (B, b) down the side.",
      "Fill each box by combining the row and column allele: BB, Bb, Bb, bb.",
      "Count: 1 BB, 2 Bb, 1 bb — a 3:1 ratio of brown to blue.",
      "BB and Bb are brown (dominant shows), bb is blue. So 3 of 4 are brown, 1 of 4 is blue."
    ],
    answer: "The four boxes are BB, Bb, Bb, bb — 3 brown-eyed to 1 blue-eyed (3:1)."
  },
  items: [
    {
      id: "g6.spring.sci.w4.d2.q1",
      type: "multiple_choice",
      stem: "Which allele will show its trait even if there is only ONE copy?",
      choices: [
        "The recessive allele",
        "The dominant allele",
        "Neither allele",
        "Both equally"
      ],
      answerIndex: 1,
      explanation: "A dominant allele shows its trait with just one copy. A recessive trait only appears when both alleles are recessive.",
      hintLadder: [
        "One allele is 'stronger' and shows up with a single copy.",
        "It's written with a capital letter.",
        "That's the dominant allele."
      ]
    },
    {
      id: "g6.spring.sci.w4.d2.q2",
      type: "multiple_choice",
      stem: "For the recessive trait (bb) to show, the offspring must inherit...",
      choices: [
        "One recessive allele from just one parent",
        "A recessive allele from BOTH parents",
        "One dominant allele",
        "No alleles at all"
      ],
      answerIndex: 1,
      explanation: "A recessive trait only appears when both alleles are recessive (bb), meaning one recessive allele came from each parent.",
      hintLadder: [
        "Recessive traits hide when a dominant allele is present.",
        "How many recessive alleles are needed to show the trait?",
        "Two — one from each parent (bb)."
      ],
      misconceptionsTargeted: ["one-recessive-shows"]
    },
    {
      id: "g6.spring.sci.w4.d2.q3",
      type: "numeric",
      stem: "In a Bb × Bb Punnett square, how many of the 4 boxes show the DOMINANT (brown-eyed) trait?",
      answer: 3,
      tolerance: 0,
      unit: "boxes",
      explanation: "The boxes are BB, Bb, Bb, bb. Three of them (BB, Bb, Bb) have at least one B, so 3 show the dominant brown trait.",
      hintLadder: [
        "Fill the square: BB, Bb, Bb, bb.",
        "Any box with at least one B shows brown.",
        "Count the boxes with a B: that's 3."
      ]
    },
    {
      id: "g6.spring.sci.w4.d2.q4",
      type: "multiple_choice",
      stem: "Two brown-eyed parents who are each Bb have a child. Could that child have blue eyes (bb)?",
      choices: [
        "No, brown parents can only have brown children",
        "Yes, if the child inherits the recessive b allele from each parent",
        "Only if one parent is blue-eyed",
        "No, blue eyes are impossible"
      ],
      answerIndex: 1,
      explanation: "Each Bb parent can pass the recessive b. If the child gets b from both, it is bb and has blue eyes — even though both parents look brown-eyed.",
      hintLadder: [
        "Each Bb parent secretly carries one recessive b.",
        "What if the child gets b from BOTH parents?",
        "Then the child is bb and shows blue eyes."
      ]
    },
    {
      id: "g6.spring.sci.w4.d2.q5",
      type: "short_answer",
      stem: "Explain what a Punnett square is and what it helps you figure out. Use the words 'alleles' and 'offspring.'",
      rubric: {
        level3: "Describes a Punnett square as a grid that combines each parent's alleles to show all possible offspring combinations, correctly using both terms.",
        level2: "Gives a partly correct description but misses that it shows all possible combinations, or uses only one term.",
        level1: "Vague or incorrect description."
      },
      exemplar: "A Punnett square is a grid where you line up the alleles from each parent along the top and side. Filling in the boxes shows every possible combination of alleles the offspring could inherit, so you can predict which traits are likely.",
      hintLadder: [
        "It's a grid tool for predicting.",
        "What goes on the top and side? (each parent's alleles)",
        "What does it predict? (the offspring's possible combinations)"
      ]
    }
  ],
  reflectionPrompt: "Think of a trait where you've seen a child look different from both parents. How might a hidden recessive allele explain it?",
  misconceptionBank: [
    {
      id: "one-recessive-shows",
      label: "Thinks one recessive allele is enough to show the trait",
      description: "Believes a single recessive allele (Bb) will display the recessive trait, forgetting the dominant allele masks it.",
      coachMove: "Remind them: a dominant allele 'wins' when present. The recessive trait only appears with TWO recessive alleles (bb)."
    },
    {
      id: "dominant-means-common",
      label: "Thinks 'dominant' means 'more common' in a population",
      description: "Confuses dominant (shows with one copy) with being the most frequent trait.",
      coachMove: "Clarify that dominant describes how an allele acts in a pair, not how common it is — some dominant traits are actually rare."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Hidden Trait Riddle",
      prompt:
        "Two purple-flowered pea plants are 'parents.' Some of their baby plants surprisingly have WHITE flowers. Purple is dominant (P) and white is recessive (p). How can two purple parents make a white-flowered baby?",
      answer:
        "Both parents must be Pp — purple on the outside but secretly carrying a hidden recessive p. If a baby inherits p from both parents, it is pp and blooms white. The recessive trait was hiding in the parents all along!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Punnett Square",
      challenge:
        "Pick a made-up trait (like glow-in-the-dark scales, G = glowing dominant, g = non-glowing recessive). Draw a 2×2 Punnett square for a Gg × Gg cross and predict how many offspring glow.",
      materials: ["Paper & pencil, OR a drawing app"],
      steps: [
        "Choose a trait and label the dominant (capital) and recessive (lowercase) alleles.",
        "Draw a 2×2 grid with one parent's alleles on top and the other's on the side.",
        "Fill in all four boxes by combining row + column alleles.",
        "Count how many boxes show the dominant trait vs. the recessive one and write the ratio."
      ],
      deliverable: "A completed 2×2 Punnett square with all four boxes filled and the dominant:recessive ratio written below.",
      choiceBoard: [
        "Draw and fill the Punnett square by hand.",
        "Build the square with sticky notes or paper tiles you can slide around.",
        "Make a comic strip where a scientist uses a Punnett square to predict a baby creature's trait."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Punnett Square Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w4.d2.arena1",
          type: "numeric",
          stem: "Cross a purebred dominant parent (TT) with a purebred recessive parent (tt). Out of the 4 Punnett-square boxes, how many offspring are Tt?",
          answer: 4,
          tolerance: 0,
          unit: "boxes",
          explanation: "TT × tt: every box combines a T from one parent with a t from the other, giving Tt, Tt, Tt, Tt. All 4 offspring are Tt.",
          hintLadder: [
            "One parent gives only T; the other gives only t.",
            "Combine T + t in every box.",
            "Every box is Tt, so the answer is 4."
          ]
        },
        {
          id: "g6.spring.sci.w4.d2.arena2",
          type: "short_answer",
          stem: "In a Bb × Bb cross, the offspring are BB, Bb, Bb, bb. Explain why 3 of the 4 look the SAME even though their allele pairs are different.",
          rubric: {
            level3: "Explains that BB and Bb both show the dominant trait because the dominant allele shows with even one copy, so all three (BB, Bb, Bb) look alike despite different allele pairs.",
            level2: "Says 3 look the same but the reason about dominance is unclear.",
            level1: "No clear reasoning or incorrect."
          },
          exemplar: "BB has two dominant alleles and Bb has one. Since a dominant allele shows its trait with even a single copy, both BB and Bb look the same (brown). Only bb, with no dominant allele, looks different (blue). That's why 3 of the 4 match.",
          hintLadder: [
            "Which boxes have at least one B?",
            "A dominant allele shows with just one copy.",
            "So BB and Bb look the same even though the pairs differ."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Dominant vs. Recessive Freeze",
      prompt:
        "Call out 'DOMINANT!' and stand tall with arms raised high (the trait that shows). Then call 'recessive' and crouch down small and hidden. Alternate the two poses 5 times, moving smoothly between big and small.",
      scienceTieIn: "The big pose is like a dominant allele that shows itself, and the crouch is like a recessive allele hiding — a body-sized reminder of how the two act in a Punnett square.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A Punnett square shows what's POSSIBLE, not what's guaranteed. Why do you think real families don't always match the exact ratios the square predicts?",
      badge: { id: "spring-punnett-pro", name: "Punnett Pro", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
