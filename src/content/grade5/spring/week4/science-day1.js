// Grade 5 Science — Spring Expedition, Week 4 (Genetics for Kids), Day 1.
// Topic: traits and heredity — how baby plants and animals inherit traits
// from their parents. Grade-5 depth: simple inherited vs. learned traits.

export const springG5ScienceW4D1 = {
  id: "g5.spring.sci.w4.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 1,
  subject: "Science",
  topic: "Traits and heredity — how offspring inherit traits",
  topicTag: "heredity",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-LS3-1", "NGSS.3-LS3-2"],
  hook: "Every spring, baby animals and new sprouting plants look a lot like their parents — but not exactly the same. Today you find out where those family look-alikes come from, and why living things pass traits down to their babies.",
  miniLesson: [
    "A trait is a feature of a living thing you can notice — like eye color, seed shape, or fur pattern. Vocabulary: TRAIT = a feature a living thing has.",
    "Baby plants and animals (called OFFSPRING) get their traits from their parents. This passing-down of traits is called HEREDITY. That is why offspring look like their parents.",
    "Some traits are INHERITED — you are born with them because they come from your parents (like natural hair color). Other traits are LEARNED or happen during your life (like a scar or riding a bike). Only inherited traits get passed to the next generation."
  ],
  workedExample: {
    prompt: "A plant with purple flowers makes seeds, and most of the new baby plants also have purple flowers. Why do the baby plants look like the parent?",
    steps: [
      "The parent plant passes traits to its seeds.",
      "Flower color is a trait that the parent hands down.",
      "Because the parent has the purple-flower trait, it passes that trait to the seeds.",
      "So the baby plants inherit purple flowers and look like the parent."
    ],
    answer: "The baby plants inherited the flower-color trait from the parent, so they also have purple flowers."
  },
  items: [
    {
      id: "g5.spring.sci.w4.d1.q1",
      type: "multiple_choice",
      stem: "What is a TRAIT?",
      choices: [
        "A feature of a living thing, like eye color or seed shape",
        "A plant that makes its own food",
        "The kind of weather in spring",
        "A game you can learn to play"
      ],
      answerIndex: 0,
      explanation: "A trait is a feature you can notice about a living thing, such as eye color, height, or seed shape.",
      hintLadder: [
        "Think about something you can see or notice about a plant or animal.",
        "Is it a feature the living thing has?",
        "A trait is a feature — like fur color."
      ]
    },
    {
      id: "g5.spring.sci.w4.d1.q2",
      type: "multiple_choice",
      stem: "Offspring (baby plants and animals) look like their parents mostly because they...",
      choices: [
        "eat the same food",
        "inherit traits from their parents",
        "live in the same weather",
        "learn the same tricks"
      ],
      answerIndex: 1,
      explanation: "Offspring inherit traits from their parents through heredity, so they end up looking like them.",
      hintLadder: [
        "The look-alike is passed down from parent to baby.",
        "What word means traits are passed down?",
        "They inherit traits from their parents."
      ]
    },
    {
      id: "g5.spring.sci.w4.d1.q3",
      type: "multiple_choice",
      stem: "Which of these is an INHERITED trait that a plant or animal is BORN with?",
      choices: [
        "A scar from a scratch",
        "A dog trick learned in training",
        "A haircut",
        "The natural color of a flower's petals"
      ],
      answerIndex: 3,
      explanation: "Petal color is inherited from the parent plant, so the plant is born with it. Scars, tricks, and haircuts happen during life — they are not inherited.",
      hintLadder: [
        "Inherited traits come from the parents, not from things that happen later.",
        "Which one is the living thing born with?",
        "Petal color comes from the parent plant."
      ],
      misconceptionsTargeted: ["learned-traits-inherited"]
    },
    {
      id: "g5.spring.sci.w4.d1.q4",
      type: "short_answer",
      stem: "A puppy has floppy ears like its mother and a spotted coat like its father. Explain how the puppy could get traits from BOTH parents.",
      rubric: {
        level3: "Explains that the puppy inherits traits from each parent, so it can show a mix of both parents' traits (floppy ears from mom, spots from dad).",
        level2: "Says it got traits from both parents but the idea of inheriting/heredity is not clear.",
        level1: "No clear explanation or incorrect reasoning."
      },
      exemplar: "The puppy inherited traits from both its mother and its father. It got the floppy-ear trait from its mom and the spotted-coat trait from its dad, so it shows a mix of both parents.",
      hintLadder: [
        "How many parents does the puppy inherit traits from?",
        "Each parent passes some traits down.",
        "That's why the puppy can look like both mom and dad."
      ]
    },
    {
      id: "g5.spring.sci.w4.d1.q5",
      type: "short_answer",
      stem: "Name one INHERITED trait and one LEARNED trait in yourself or an animal you know, and explain the difference.",
      rubric: {
        level3: "Correctly names one inherited trait AND one learned trait, and explains that inherited traits come from parents (born with them) while learned traits are gained during life.",
        level2: "Names both but the difference is vague, or one is labeled wrong.",
        level1: "Mislabels the traits or gives no explanation."
      },
      exemplar: "An inherited trait is my natural hair color, which came from my parents. A learned trait is riding a bike, which I learned during my life. Inherited traits are ones you're born with; learned traits you gain later.",
      hintLadder: [
        "Inherited = born with it, comes from your parents.",
        "Learned = gained during life, like a skill.",
        "Give one of each and say why they are different."
      ]
    }
  ],
  reflectionPrompt: "Look at your family or a pet's family. What is one trait you can spot being passed from a parent to a child?",
  misconceptionBank: [
    {
      id: "learned-traits-inherited",
      label: "Thinks learned or life traits can be inherited",
      description: "Believes changes made during life (scars, learned skills, a haircut) get passed down to offspring.",
      coachMove: "Ask: 'Was the living thing born with this trait, or did it happen later in life?' Only traits you're born with are inherited."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Family Look-Alike Mystery",
      prompt:
        "A newborn kitten has orange fur and green eyes. Its mother has orange fur; its father has green eyes. Where did the kitten's two traits come from?",
      answer:
        "The kitten inherited traits from BOTH parents: the orange-fur trait from its mother and the green-eye trait from its father. That's why it looks like a mix of both.",
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
        "Write one sentence telling how the baby got a mix of both parents."
      ],
      deliverable: "A parent-and-baby creature drawing with each inherited trait labeled by which parent it came from.",
      choiceBoard: [
        "Draw the parent-and-baby creature family with labels.",
        "Make a set of 'trait cards' — one card per trait — and deal them from parents to baby.",
        "Write a short story where a baby creature figures out which traits it got from each parent."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Heredity Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w4.d1.arena1",
          type: "multiple_choice",
          stem: "A gardener bends a young tree's trunk into a curve as it grows. The tree makes seeds. Will the baby trees be born curved?",
          choices: [
            "Yes, because the parent tree was curved",
            "Yes, because all traits are inherited",
            "No, because the curve happened during the tree's life — it is not an inherited trait",
            "Only if the gardener bends them too"
          ],
          answerIndex: 2,
          explanation: "Bending the trunk happened during the tree's life, so it is NOT inherited. The baby trees grow straight because they only inherit the traits the parent was born with.",
          hintLadder: [
            "Was the curve something the tree was born with, or made during its life?",
            "Only traits a living thing is born with get inherited.",
            "A bend made during life does not pass to the seeds."
          ]
        },
        {
          id: "g5.spring.sci.w4.d1.arena2",
          type: "short_answer",
          stem: "Two tall parent sunflowers make seeds, and most of the young sunflowers grow tall too. Explain why the offspring inherited the tall trait.",
          rubric: {
            level3: "Explains that both parents have the tall trait and pass it down to their seeds, so the offspring inherit and show the tall trait.",
            level2: "Says the offspring are tall because the parents were tall, but the idea of inheriting is unclear.",
            level1: "No clear reasoning or incorrect."
          },
          exemplar: "Both parent sunflowers have the tall trait. When they make seeds, they pass the tall trait down to the offspring, so most of the young sunflowers inherit it and grow tall too.",
          hintLadder: [
            "What trait do the parents pass to the seeds?",
            "Both parents are tall.",
            "So they pass the tall trait down to the offspring."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow Like a Seedling",
      prompt:
        "Curl up small like a seed. Slowly 'sprout' — uncurl and reach your arms up like a growing stem, then spread your fingers wide like leaves opening to the spring sun. Repeat the grow-and-spread 4 times, breathing slowly.",
      scienceTieIn: "The traits for how tall you grow are inherited from your parents — just like a real seedling grows the way its parent plant did.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of one trait you share with a family member. Do you think it's inherited (something you were born with) or something you both learned? Explain your thinking.",
      badge: { id: "g5-spring-trait-tracker", name: "Trait Tracker", emoji: "🧬" },
      estimatedMinutes: 7
    }
  }
};
