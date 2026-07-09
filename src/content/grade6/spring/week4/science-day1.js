// Grade 6 Science — Spring Expedition, Week 4 (Genetics for Kids), Day 1.
// Topic: traits and heredity — how offspring inherit traits from parents.

export const springG6ScienceW4D1 = {
  id: "g6.spring.sci.w4.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Science",
  topic: "Traits and heredity — how offspring inherit traits",
  topicTag: "heredity",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.MS-LS3-2", "NGSS.MS-LS1-4"],
  hook: "Every spring, baby animals and sprouting plants look a lot like their parents — but not exactly. Today you find out where those family resemblances come from, and why living things pass traits to the next generation.",
  miniLesson: [
    "A trait is a feature of a living thing — eye color, seed shape, fur pattern. Heredity is the passing of traits from parents to offspring.",
    "Traits are carried by genes, tiny instructions inside cells. Offspring get one set of genes from each parent, which is why they resemble both.",
    "Some traits are inherited (passed down through genes, like petal color) and some are acquired during life (like a scar or a learned skill) — only inherited traits pass to the next generation."
  ],
  workedExample: {
    prompt: "A pea plant with purple flowers is crossed with another purple-flowered plant, and most of the baby plants have purple flowers. Why do the offspring resemble the parents?",
    steps: [
      "Each parent passes copies of its genes to the offspring through its seeds/pollen.",
      "The genes carry instructions for flower color.",
      "Because both parents carry purple-flower genes, they pass those instructions on.",
      "So the offspring inherit the purple-flower trait and look like their parents."
    ],
    answer: "The offspring inherited flower-color genes from both parents, so they show the same purple-flower trait."
  },
  items: [
    {
      id: "g6.spring.sci.w4.d1.q1",
      type: "multiple_choice",
      stem: "What is a TRAIT?",
      choices: [
        "A tiny instruction inside a cell",
        "A plant that makes its own food",
        "The passing of features from parent to child",
        "A feature of a living thing, like eye color or seed shape"
      ],
      answerIndex: 3,
      explanation: "A trait is an observable feature of a living thing, such as eye color, height, or seed shape.",
      hintLadder: [
        "Think about what you can observe about a plant or animal.",
        "Is it the feature itself, or the process of passing it on?",
        "A trait is the feature — like fur color."
      ]
    },
    {
      id: "g6.spring.sci.w4.d1.q2",
      type: "multiple_choice",
      stem: "Offspring resemble their parents mainly because they inherit...",
      choices: [
        "The same food",
        "Genes from each parent",
        "The same weather",
        "Acquired skills"
      ],
      answerIndex: 1,
      explanation: "Offspring receive genes from each parent, and those genes carry the instructions for traits, so children resemble both parents.",
      hintLadder: [
        "Resemblance is passed down inside cells.",
        "What tiny instructions carry traits?",
        "Genes from both parents."
      ]
    },
    {
      id: "g6.spring.sci.w4.d1.q3",
      type: "multiple_choice",
      stem: "Which of these is an INHERITED trait that a plant or animal is born with?",
      choices: [
        "The natural color of a flower's petals",
        "A dog trick learned in training",
        "A scar from a scratch",
        "A haircut"
      ],
      answerIndex: 0,
      explanation: "Petal color is coded by genes and passed from parents, so it is inherited. Scars, tricks, and haircuts are acquired during life.",
      hintLadder: [
        "Inherited traits come from genes, not from things that happen during life.",
        "Which one is the living thing born with?",
        "Petal color is set by genes."
      ],
      misconceptionsTargeted: ["acquired-traits-inherited"]
    },
    {
      id: "g6.spring.sci.w4.d1.q4",
      type: "short_answer",
      stem: "A puppy has floppy ears like its mother and a spotted coat like its father. Explain how the puppy could end up with traits from BOTH parents.",
      rubric: {
        level3: "Explains that the puppy inherits genes from each parent, so it can show a mix of both parents' traits, using the idea of genes/heredity.",
        level2: "Says it got traits from both parents but does not mention genes or inheritance clearly.",
        level1: "No clear explanation or incorrect reasoning."
      },
      exemplar: "The puppy got genes from both its mother and its father. The genes from its mom carried floppy ears and the genes from its dad carried the spotted coat, so it inherited a mix of both parents' traits.",
      hintLadder: [
        "How many parents pass genes to the puppy?",
        "Each parent gives a set of genes.",
        "That's why the puppy can look like both parents."
      ]
    },
    {
      id: "g6.spring.sci.w4.d1.q5",
      type: "short_answer",
      stem: "Name one inherited trait and one acquired trait in yourself or an animal you know, and explain the difference.",
      rubric: {
        level3: "Correctly names one inherited trait AND one acquired trait, and explains that inherited traits come from genes/parents while acquired traits develop during life.",
        level2: "Names both but the distinction is vague, or one is mislabeled.",
        level1: "Misidentifies the traits or gives no explanation."
      },
      exemplar: "An inherited trait is my natural hair color, which came from my parents' genes. An acquired trait is my ability to ride a bike, which I learned during my life. Inherited traits are passed down; acquired ones are gained after you're born.",
      hintLadder: [
        "Inherited = born with it, coded by genes.",
        "Acquired = gained during life, like a skill or a scar.",
        "Give one of each and say why they differ."
      ]
    }
  ],
  reflectionPrompt: "Look at your family (or a pet's family). What is one trait you can spot being passed from one generation to the next?",
  misconceptionBank: [
    {
      id: "acquired-traits-inherited",
      label: "Thinks acquired traits can be inherited",
      description: "Believes changes made during life (scars, muscles, learned skills) get passed to offspring.",
      coachMove: "Ask: 'Is this trait written in the genes the parent was born with, or did it happen later?' Only gene-coded traits pass down."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Family Resemblance Mystery",
      prompt:
        "A newborn kitten has orange fur and green eyes. Its mother has orange fur; its father has green eyes. Where did the kitten's two traits come from — and could the kitten pass them on someday too?",
      answer:
        "The kitten inherited genes from BOTH parents: the orange-fur genes from its mother and the green-eye genes from its father. Because these traits are carried in genes, the kitten could pass them on to its own kittens one day.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Family of Creatures",
      challenge:
        "Invent a made-up creature with 3 clear traits (ears, tail, color pattern). Then draw a 'baby' that inherits a mix of traits from two parent creatures — show which trait came from which parent.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw two parent creatures, each with its own version of 3 traits.",
        "Draw one baby creature that inherits a mix of those traits.",
        "Label each baby trait with which parent it came from.",
        "Write one sentence explaining how the baby got a mix of both parents."
      ],
      deliverable: "A parent-and-baby creature drawing with each inherited trait labeled by its source parent.",
      choiceBoard: [
        "Draw the parent-and-baby creature family with labels.",
        "Make a 'trait card' set — one card per trait — and deal them from parents to baby.",
        "Write a short story where a baby creature discovers which traits it got from each parent."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Heredity Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.sci.w4.d1.arena1",
          type: "multiple_choice",
          stem: "A gardener trains a tree by bending its trunk into a curve. The tree grows seeds. Will the baby trees be born curved?",
          choices: [
            "Yes, because the parent tree was curved",
            "Yes, because all traits are inherited",
            "No, because the curve was acquired during life and is not in the tree's genes",
            "Only if the gardener bends them too"
          ],
          answerIndex: 2,
          explanation: "Bending the trunk is an acquired change, not coded in the tree's genes, so it is NOT passed to the seeds. Baby trees grow straight unless something in the genes says otherwise.",
          hintLadder: [
            "Was the curve in the tree's genes, or made during its life?",
            "Only gene-coded traits get inherited.",
            "An acquired bend doesn't pass to seeds."
          ]
        },
        {
          id: "g6.spring.sci.w4.d1.arena2",
          type: "short_answer",
          stem: "Two tall parent sunflowers produce seeds, and most of the young sunflowers grow tall too. Explain, using the word 'genes,' why the offspring inherited the tall trait.",
          rubric: {
            level3: "Explains that both parents carry tall-height genes and pass copies to the seeds, so the offspring inherit and show the tall trait.",
            level2: "Says the offspring are tall because the parents were tall, but does not clearly use genes/inheritance.",
            level1: "No clear reasoning or incorrect."
          },
          exemplar: "Both tall parent sunflowers carry genes for tall height. When they make seeds, they pass copies of those tall-height genes to the offspring, so most of the young sunflowers inherit the genes and grow tall too.",
          hintLadder: [
            "What do the parents pass to the seeds?",
            "Genes carry the instructions for height.",
            "Both tall parents pass tall-height genes on."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow Like a Seedling",
      prompt:
        "Curl up small like a seed. Slowly 'sprout' — uncurl and reach your arms up like a growing stem, then spread your fingers wide like leaves opening to the spring sun. Repeat the grow-and-spread 4 times, breathing slowly.",
      scienceTieIn: "The instructions for how tall you grow and how you develop are carried in your genes — just like the instructions a real seedling follows as it grows toward the light.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of one trait you share with a family member. Do you think it's inherited (in your genes) or something you both learned? Explain your thinking.",
      badge: { id: "spring-trait-tracker", name: "Trait Tracker", emoji: "🧬" },
      estimatedMinutes: 7
    }
  }
};
