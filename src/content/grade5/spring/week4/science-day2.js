// Grade 5 Science — Spring Expedition, Week 4 (Genetics for Kids), Day 2.
// Topic: dominant ("stronger") and recessive ("hidden") traits; reading a
// simple Punnett square as "out of 4". Grade-5 depth: no ratios/percents.

export const springG5ScienceW4D2 = {
  id: "g5.spring.sci.w4.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 2,
  subject: "Science",
  topic: "Dominant and recessive traits; reading a Punnett square",
  topicTag: "dominant-recessive",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-LS3-1", "NGSS.3-LS3-2"],
  hook: "Why do two brown-eyed parents sometimes have a blue-eyed child? The secret is that some traits are 'stronger' and some are 'hidden.' Today you use a picture tool that real scientists use — the Punnett square — to see it.",
  miniLesson: [
    "Each trait comes in two versions, and offspring get one version from each parent. A DOMINANT version is 'stronger' — we write it with a CAPITAL letter, like B. A RECESSIVE version is 'hidden' — we write it with a lowercase letter, like b.",
    "A dominant (stronger) version shows up even if there is just ONE copy. A recessive (hidden) trait only shows when BOTH copies are the hidden kind. So BB and Bb both look brown-eyed; only bb looks blue-eyed.",
    "A Punnett square is a simple 2×2 box grid. You line up one parent's letters across the top and the other parent's letters down the side, then fill in the 4 boxes to see what the offspring could be."
  ],
  workedExample: {
    prompt: "A Bb parent and a Bb parent have babies (B = brown eyes, stronger; b = blue eyes, hidden). Use a Punnett square to see the 4 possible babies.",
    steps: [
      "Put one parent's letters (B, b) across the top and the other's (B, b) down the side.",
      "Fill each box by putting the top letter with the side letter: BB, Bb, Bb, bb.",
      "Any box with a B is brown, because brown is the stronger trait.",
      "So 3 of the 4 boxes are brown (BB, Bb, Bb) and 1 of the 4 boxes is blue (bb)."
    ],
    answer: "The four boxes are BB, Bb, Bb, bb — that's 3 out of 4 brown-eyed and 1 out of 4 blue-eyed."
  },
  items: [
    {
      id: "g5.spring.sci.w4.d2.q1",
      type: "multiple_choice",
      stem: "Which version of a trait will SHOW UP even if there is only ONE copy of it?",
      choices: [
        "The recessive (hidden) version",
        "Both show equally",
        "Neither one",
        "The dominant (stronger) version"
      ],
      answerIndex: 3,
      explanation: "The dominant (stronger) version shows up with just one copy. The recessive (hidden) trait only shows when both copies are hidden.",
      hintLadder: [
        "One version is 'stronger' and shows up with a single copy.",
        "It's written with a CAPITAL letter.",
        "That's the dominant version."
      ]
    },
    {
      id: "g5.spring.sci.w4.d2.q2",
      type: "multiple_choice",
      stem: "For the hidden (recessive) trait, like blue eyes (bb), to SHOW, the child must get...",
      choices: [
        "a hidden version from just one parent",
        "one stronger version",
        "a hidden version from BOTH parents",
        "no versions at all"
      ],
      answerIndex: 2,
      explanation: "A hidden trait only shows when BOTH copies are hidden (bb), so the child must get a hidden version from each parent.",
      hintLadder: [
        "A hidden trait stays hidden if there is a stronger version around.",
        "How many hidden copies are needed for it to show?",
        "Two — one from each parent (bb)."
      ],
      misconceptionsTargeted: ["one-hidden-shows"]
    },
    {
      id: "g5.spring.sci.w4.d2.q3",
      type: "numeric",
      stem: "In a Bb × Bb Punnett square (boxes BB, Bb, Bb, bb), how many of the 4 boxes show the BROWN (stronger) trait?",
      answer: 3,
      tolerance: 0,
      unit: "boxes",
      explanation: "The boxes are BB, Bb, Bb, bb. Three of them (BB, Bb, Bb) have at least one B, so 3 out of 4 show brown.",
      hintLadder: [
        "Look at the boxes: BB, Bb, Bb, bb.",
        "Any box with at least one B is brown.",
        "Count the boxes that have a B: that's 3."
      ]
    },
    {
      id: "g5.spring.sci.w4.d2.q4",
      type: "multiple_choice",
      stem: "Two brown-eyed parents are each Bb. Could their child have blue eyes (bb)?",
      choices: [
        "No, brown parents can only have brown children",
        "Yes, if the child gets the hidden b version from each parent",
        "Only if one parent already has blue eyes",
        "No, blue eyes are impossible"
      ],
      answerIndex: 1,
      explanation: "Each Bb parent secretly carries a hidden b. If the child gets b from both parents, it is bb and has blue eyes — even though both parents look brown-eyed.",
      hintLadder: [
        "Each Bb parent secretly carries one hidden b.",
        "What if the child gets b from BOTH parents?",
        "Then the child is bb and shows blue eyes."
      ]
    },
    {
      id: "g5.spring.sci.w4.d2.q5",
      type: "short_answer",
      stem: "Explain what a Punnett square is and what it helps you figure out. Use the words 'parents' and 'offspring.'",
      rubric: {
        level3: "Describes a Punnett square as a box grid that lines up each parent's letters to show the possible offspring, correctly using both words.",
        level2: "Gives a partly correct description but misses that it shows the possible offspring, or uses only one word.",
        level1: "Vague or incorrect description."
      },
      exemplar: "A Punnett square is a grid of 4 boxes. You put the letters from each parent along the top and side, then fill in the boxes. It helps you figure out the possible offspring the parents could have, like how many might be brown-eyed or blue-eyed.",
      hintLadder: [
        "It's a box grid that helps you predict.",
        "What goes on the top and side? (each parent's letters)",
        "What does it show? (the possible offspring)"
      ]
    }
  ],
  reflectionPrompt: "Think of a time a child looked different from both parents. How could a 'hidden' trait explain it?",
  misconceptionBank: [
    {
      id: "one-hidden-shows",
      label: "Thinks one hidden (recessive) version is enough to show the trait",
      description: "Believes a single hidden version (Bb) will show the hidden trait, forgetting the stronger version covers it up.",
      coachMove: "Remind them: the stronger (dominant) version 'wins' when it's there. The hidden trait only shows with TWO hidden copies (bb)."
    },
    {
      id: "dominant-means-common",
      label: "Thinks 'stronger/dominant' means 'more common'",
      description: "Confuses a dominant trait (shows with one copy) with being the trait most animals or plants have.",
      coachMove: "Clarify that 'dominant' just means it shows up when it's there — not that it's the most common trait around."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Hidden Trait Riddle",
      prompt:
        "Two purple-flowered plants are 'parents.' Some of their baby plants surprisingly have WHITE flowers. Purple is the stronger trait (P) and white is the hidden trait (p). How can two purple parents make a white-flowered baby?",
      answer:
        "Both parents must be Pp — purple on the outside but secretly carrying a hidden p. If a baby gets p from both parents, it is pp and blooms white. The hidden trait was inside the parents all along!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Punnett Square",
      challenge:
        "Pick a made-up trait (like glow-in-the-dark scales, G = glowing is stronger, g = not-glowing is hidden). Draw a 2×2 Punnett square for a Gg × Gg cross and see how many of the 4 babies glow.",
      materials: ["Paper & pencil, OR a drawing app"],
      steps: [
        "Choose a trait and pick the CAPITAL letter (stronger) and lowercase letter (hidden).",
        "Draw a 2×2 grid with one parent's letters on top and the other's on the side.",
        "Fill in all four boxes by putting the top letter with the side letter.",
        "Count how many of the 4 boxes show the stronger trait and how many show the hidden trait."
      ],
      deliverable: "A completed 2×2 Punnett square with all four boxes filled and a note saying how many out of 4 show each trait.",
      choiceBoard: [
        "Draw and fill the Punnett square by hand.",
        "Build the square with sticky notes or paper tiles you can slide around.",
        "Make a comic strip where a scientist uses a Punnett square to guess a baby creature's trait."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Punnett Square Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.sci.w4.d2.arena1",
          type: "numeric",
          stem: "Cross a TT parent with a tt parent. Every box is Tt (Tt, Tt, Tt, tt is WRONG — check!). Out of the 4 Punnett-square boxes, how many babies are Tt?",
          answer: 4,
          tolerance: 0,
          unit: "boxes",
          explanation: "TT × tt: one parent only gives T, the other only gives t. Every box is a T with a t, so all 4 boxes are Tt.",
          hintLadder: [
            "One parent gives only T; the other gives only t.",
            "Every box is a T put with a t.",
            "So every box is Tt — that's 4."
          ]
        },
        {
          id: "g5.spring.sci.w4.d2.arena2",
          type: "short_answer",
          stem: "In a Bb × Bb cross, the 4 boxes are BB, Bb, Bb, bb. Explain why 3 of the 4 look the SAME (brown) even though their letters are different.",
          rubric: {
            level3: "Explains that BB and Bb both look brown because the stronger (dominant) B shows up with even one copy, so all three (BB, Bb, Bb) look alike; only bb looks different.",
            level2: "Says 3 look the same but the reason about the stronger trait is unclear.",
            level1: "No clear reasoning or incorrect."
          },
          exemplar: "BB has two B's and Bb has one B. Since brown is the stronger trait, it shows up with even one B. So BB and Bb both look brown. Only bb, with no B at all, looks different (blue). That's why 3 of the 4 match.",
          hintLadder: [
            "Which boxes have at least one B?",
            "The stronger trait shows with just one copy.",
            "So BB and Bb look the same, even though their letters differ."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Stronger vs. Hidden Freeze",
      prompt:
        "Call out 'STRONGER!' and stand tall with arms raised high (the trait that shows). Then call 'hidden' and crouch down small and tucked away. Switch between the two poses 5 times, moving smoothly from big to small.",
      scienceTieIn: "The big pose is like a dominant trait that shows itself, and the crouch is like a recessive trait hiding — a body-sized way to feel how the two act in a Punnett square.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A Punnett square shows what's POSSIBLE, not what's for sure. Why do you think real families don't always match exactly what the square shows?",
      badge: { id: "g5-spring-punnett-pro", name: "Punnett Pro", emoji: "🔬" },
      estimatedMinutes: 7
    }
  }
};
