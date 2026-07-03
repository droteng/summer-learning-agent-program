// Grade 5 Math — Spring Expedition, Week 4 (Genetics for Kids), Day 3.
// Topic: simple probability in genetics — reading a Punnett square's 4 boxes
// as a simple "out of 4" chance and an equivalent simple fraction (like
// 3 out of 4 = 3/4, 2 out of 4 = 1/2). Grade-5 depth: NO ratios or percents.

export const springG5MathW4D3 = {
  id: "g5.spring.math.w4.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Math",
  topic: "Simple probability in genetics",
  topicTag: "genetics-probability",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NF.B.3", "CCSS.5.NF.A.1"],
  hook: "A Punnett square has 4 little boxes, and each one is an equally likely outcome. Today you turn those 4 boxes into a simple chance and a simple fraction — the same easy math a scientist uses to guess what a baby plant might look like.",
  miniLesson: [
    "A Punnett square has 4 equal boxes. Each box is one equally likely outcome. If 3 of the 4 boxes show a trait, the chance of that trait is '3 out of 4.' Vocabulary: OUTCOME = one thing that could happen.",
    "You can write 'out of 4' as a fraction. '3 out of 4' means 3 boxes out of 4 total, which is the fraction 3/4. '1 out of 4' is 1/4, and '2 out of 4' is 2/4.",
    "Some fractions can be made simpler. '2 out of 4' is 2/4, and since 2/4 is the same as 1/2, you can say the chance is one half. Always count how many boxes show the trait, out of 4."
  ],
  workedExample: {
    prompt: "A Punnett square shows 3 tall-plant boxes and 1 short-plant box. What is the chance of a tall plant, as 'out of 4' and as a fraction?",
    steps: [
      "Count the boxes: 3 tall and 1 short, out of 4 boxes in all.",
      "The chance of tall is '3 out of 4.'",
      "Write it as a fraction: 3 out of 4 = 3/4.",
      "Check: 3/4 is already in simplest form."
    ],
    answer: "The chance of a tall plant is 3 out of 4, which is the fraction 3/4."
  },
  items: [
    {
      id: "g5.spring.math.w4.d3.q1",
      type: "multiple_choice",
      stem: "A Punnett square shows 3 brown-eyed boxes and 1 blue-eyed box. What is the chance of a brown-eyed offspring?",
      choices: [
        "3 out of 4, or 3/4",
        "1 out of 4, or 1/4",
        "3 out of 3, or 3/3",
        "1 out of 3, or 1/3"
      ],
      answerIndex: 0,
      explanation: "3 of the 4 boxes are brown, so the chance is 3 out of 4, which is the fraction 3/4.",
      hintLadder: [
        "How many boxes are brown, out of how many total?",
        "3 boxes are brown out of 4 boxes in all.",
        "3 out of 4 is the fraction 3/4."
      ]
    },
    {
      id: "g5.spring.math.w4.d3.q2",
      type: "multiple_choice",
      stem: "In the same square (3 brown, 1 blue), what is the chance of a BLUE-eyed offspring?",
      choices: [
        "3 out of 4, or 3/4",
        "1 out of 4, or 1/4",
        "1 out of 2, or 1/2",
        "0 out of 4, or 0/4"
      ],
      answerIndex: 1,
      explanation: "Only 1 of the 4 boxes is blue, so the chance is 1 out of 4, which is the fraction 1/4.",
      hintLadder: [
        "How many boxes are blue, out of 4?",
        "Only 1 box is blue out of 4.",
        "1 out of 4 is the fraction 1/4."
      ],
      misconceptionsTargeted: ["ignore-the-whole"]
    },
    {
      id: "g5.spring.math.w4.d3.q3",
      type: "multiple_choice",
      stem: "A cross gives 2 purple-flower boxes and 2 white-flower boxes. What is the chance of a purple flower, written as a simple fraction?",
      choices: [
        "2/2",
        "1/2",
        "1/4",
        "3/4"
      ],
      answerIndex: 1,
      explanation: "Purple is 2 out of 4 boxes. The fraction 2/4 is the same as 1/2, so the chance of purple is one half.",
      hintLadder: [
        "How many boxes are purple, out of 4?",
        "Purple is 2 out of 4, which is the fraction 2/4.",
        "2/4 makes simpler to 1/2."
      ]
    },
    {
      id: "g5.spring.math.w4.d3.q4",
      type: "multiple_choice",
      stem: "A Punnett square shows all 4 boxes with the dominant tall trait. What is the chance that an offspring is tall?",
      choices: [
        "1 out of 4, or 1/4",
        "2 out of 4, or 1/2",
        "3 out of 4, or 3/4",
        "4 out of 4, or a whole (1)"
      ],
      answerIndex: 3,
      explanation: "All 4 boxes are tall, so the chance is 4 out of 4. The fraction 4/4 equals one whole — the offspring is certain to be tall.",
      hintLadder: [
        "How many boxes are tall, out of 4?",
        "All 4 boxes are tall, so it's 4 out of 4.",
        "4 out of 4 is 4/4, which is one whole."
      ]
    },
    {
      id: "g5.spring.math.w4.d3.q5",
      type: "short_answer",
      stem: "A Punnett square has 1 box with a white-fur trait out of 4. Explain how to write that chance as 'out of 4' and as a fraction, and why the bottom number of the fraction is 4.",
      rubric: {
        level3: "States the chance is 1 out of 4 = 1/4 AND explains that the bottom number is 4 because there are 4 equal boxes (the total number of outcomes) in the Punnett square.",
        level2: "Gives 1 out of 4 or 1/4 but the reason the bottom number is 4 is unclear.",
        level1: "Wrong chance or no reasoning."
      },
      exemplar: "The chance is 1 out of 4, which is the fraction 1/4. The bottom number is 4 because a Punnett square has 4 equal boxes in all, and that is the total number of outcomes. The top number, 1, is how many boxes show the white-fur trait.",
      hintLadder: [
        "How many boxes show white fur, and how many boxes are there total?",
        "1 box shows the trait out of 4 total.",
        "The bottom of the fraction is the total number of boxes: 4."
      ]
    }
  ],
  reflectionPrompt: "Where else in life do you see a 'chance out of a whole' — like a 1 out of 4 chance of picking something? How would you write it as a fraction?",
  misconceptionBank: [
    {
      id: "ignore-the-whole",
      label: "Forgets the total is 4 boxes",
      description: "Counts the boxes that show a trait but forgets the fraction's bottom number should be 4 (the total number of equal boxes), sometimes writing 3/3 or 1/1.",
      coachMove: "Point back to the 4 equal boxes: the bottom of the fraction is ALWAYS the total number of boxes (4), and the top is how many show the trait."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Guess It?",
      prompt:
        "A Punnett square gives a 3 out of 4 chance of a tall plant. Would you rather guess that the next seed grows TALL, or guess it grows SHORT? Work out both chances as fractions before you choose!",
      answer:
        "Tall = 3 out of 4 = 3/4. Short = 1 out of 4 = 1/4. Guessing tall is the smarter guess because 3/4 is bigger than 1/4 — but it's never a sure thing for any single seed.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Chance Poster",
      challenge:
        "Pick a made-up trait and draw your own Punnett square (a 2×2 grid of 4 boxes). Then make a poster that shows the chance of the trait two ways: as 'out of 4' and as a simple fraction.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Draw a 2×2 grid with 4 boxes and color in which boxes show your trait.",
        "Count how many boxes show the trait, out of 4.",
        "Write the chance as 'out of 4' (like '3 out of 4').",
        "Write the same chance as a fraction, and make it simpler if you can (like 2/4 = 1/2)."
      ],
      deliverable: "A poster showing one Punnett square with the chance of a trait written as 'out of 4' AND as a simple fraction.",
      choiceBoard: [
        "Draw the chance poster with 'out of 4' and the fraction.",
        "Make a simple bar showing how many of the 4 boxes show the trait.",
        "Record a 30-second 'weather-forecast' clip predicting the chance of the trait."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Simple Chance Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w4.d3.arena1",
          type: "multiple_choice",
          stem: "A Punnett square shows 2 boxes with green seeds and 2 boxes with yellow seeds. What is the chance of a GREEN seed, as a simple fraction?",
          choices: [
            "1/4",
            "1/2",
            "3/4",
            "2/2"
          ],
          answerIndex: 1,
          explanation: "Green is 2 out of 4 boxes. The fraction 2/4 makes simpler to 1/2, so the chance of green is one half.",
          hintLadder: [
            "How many boxes are green, out of 4?",
            "Green is 2 out of 4, which is the fraction 2/4.",
            "2/4 makes simpler to 1/2."
          ]
        },
        {
          id: "g5.spring.math.w4.d3.arena2",
          type: "short_answer",
          stem: "A Punnett square shows 3 boxes with the dominant curly-tail trait and 1 box without it. Write the chance of a curly tail as 'out of 4' and as a fraction, then say which is more likely: a curly tail or a straight tail. Explain how you know.",
          rubric: {
            level3: "States curly tail = 3 out of 4 = 3/4, straight tail = 1 out of 4 = 1/4, AND correctly says curly is more likely because 3/4 is greater than 1/4 (3 boxes vs 1 box).",
            level2: "Gets the fractions right but the comparison of which is more likely is unclear or missing.",
            level1: "Wrong fractions or no reasoning."
          },
          exemplar: "The chance of a curly tail is 3 out of 4, which is 3/4. The chance of a straight tail is 1 out of 4, which is 1/4. A curly tail is more likely because 3 boxes show it and only 1 box does not, and 3/4 is bigger than 1/4.",
          hintLadder: [
            "How many boxes show a curly tail out of 4? How many show a straight tail?",
            "Curly is 3 out of 4 = 3/4; straight is 1 out of 4 = 1/4.",
            "Compare the fractions: 3/4 is bigger than 1/4, so curly is more likely."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Four-Corner Chances",
      prompt:
        "Imagine your space split into 4 squares like a Punnett square. Hop to 3 of the corners (the '3 out of 4' trait), then hop once to the last corner (the '1 out of 4' trait). Repeat the 3-then-1 pattern 4 times, then shake it out.",
      scienceTieIn: "Hopping 3 corners then 1 makes '3 out of 4' something you can feel — the same simple chance your Punnett square predicts.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A 3 out of 4 chance still isn't a sure thing for one seed. Write about a time something 'likely' didn't happen — and why a chance is a good guess, not a promise.",
      badge: { id: "g5-spring-chance-champ", name: "Chance Champ", emoji: "🎲" },
      estimatedMinutes: 7
    }
  }
};
