// Grade 7 Math — Spring Expedition, Week 4 (Genetics for Kids), Day 3.
// Topic: probability and ratios in genetics. Grade-7 depth: theoretical
// probability, using proportions to scale predictions, expected value over
// many offspring, and reading a 16-box (dihybrid) square.
//
// VERIFIED CALCULATIONS:
//   q1: 3/4 = 0.75 = 75%
//   q2: proportion 3/4 = x/60 -> x = 45 offspring
//   q3: 9:3:3:1 dihybrid; 9/16 = 0.5625 = 56.25% -> "56.25"
//   q4: 1/4 * 1/4 = 1/16 (both recessive from two independent Bb x Bb crosses)
//   arena1: 1/16 of 320 = 20 offspring
//   arena2: heterozygous Bb probability in Bb x Bb = 2/4 = 1/2 = 50%

export const springG7MathW4D3 = {
  id: "g7.spring.math.w4.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Math",
  topic: "Probability and ratios in genetics",
  topicTag: "genetics-probability",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.SP.C.7", "CCSS.7.RP.A.3"],
  hook: "A Punnett square is a theoretical-probability machine. Today you push past 'three out of four': you use proportions to scale predictions to any number of offspring, and you read a 16-box square where two traits are inherited at once — the same math a geneticist uses to forecast a whole spring's litter.",
  miniLesson: [
    "Theoretical probability = favorable outcomes ÷ total equally likely outcomes. A 2×2 Punnett square has 4 equal boxes, so 3 favorable boxes give a probability of 3/4 = 0.75 = 75%.",
    "To predict outcomes for MANY offspring, set up a proportion. If P(tall) = 3/4 and there are 60 offspring, solve 3/4 = x/60, so x = 45. This scales a per-offspring chance into an expected count.",
    "When two traits are crossed at once (a dihybrid Aa Bb × Aa Bb), the square has 16 equal boxes and the classic phenotypic ratio is 9 : 3 : 3 : 1. The 9-box group is 9/16 = 0.5625 = 56.25% of the offspring."
  ],
  workedExample: {
    prompt: "A Bb × Bb cross gives P(dominant) = 3/4. A greenhouse grows 80 of these offspring. How many are EXPECTED to show the dominant trait, and what percent is that?",
    steps: [
      "Write the probability as a fraction of the 4 equal boxes: 3 out of 4 = 3/4.",
      "Set up a proportion for 80 offspring: 3/4 = x/80.",
      "Solve: x = (3 ÷ 4) × 80 = 0.75 × 80 = 60.",
      "As a percent, 3/4 = 75%, so 60 of the 80 offspring (75%) are expected to show the dominant trait."
    ],
    answer: "60 offspring are expected to show the dominant trait, which is 75%."
  },
  items: [
    {
      id: "g7.spring.math.w4.d3.q1",
      type: "numeric",
      stem: "A 2×2 Punnett square shows 3 brown-eyed boxes and 1 blue-eyed box. What is the percent chance of a brown-eyed offspring? (Enter a number without the % sign.)",
      answer: 75,
      tolerance: 0,
      unit: "%",
      explanation: "3 favorable boxes out of 4 equal boxes: 3 ÷ 4 = 0.75 = 75%.",
      hintLadder: [
        "How many boxes are brown, out of how many total?",
        "3 out of 4. Divide 3 by 4.",
        "3 ÷ 4 = 0.75 = 75%."
      ]
    },
    {
      id: "g7.spring.math.w4.d3.q2",
      type: "numeric",
      stem: "In a cross where the chance of a dominant trait is 3/4, a plant produces 60 offspring. Using a proportion, how many are EXPECTED to show the dominant trait?",
      answer: 45,
      tolerance: 0,
      unit: "offspring",
      explanation: "Set up 3/4 = x/60. Solve: x = 0.75 × 60 = 45 offspring expected to show the dominant trait.",
      hintLadder: [
        "The chance is 3 out of 4 = 0.75.",
        "Set up the proportion 3/4 = x/60.",
        "x = 0.75 × 60 = 45."
      ],
      misconceptionsTargeted: ["forgets-to-scale"]
    },
    {
      id: "g7.spring.math.w4.d3.q3",
      type: "numeric",
      stem: "In a dihybrid cross (Aa Bb × Aa Bb), the 16-box square gives a 9 : 3 : 3 : 1 phenotypic ratio. What PERCENT of offspring fall in the largest (9-box) group? (Number only, to two decimal places.)",
      answer: 56.25,
      tolerance: 0.01,
      unit: "%",
      explanation: "The 9-box group is 9 out of 16: 9 ÷ 16 = 0.5625 = 56.25%.",
      hintLadder: [
        "The largest group is 9 boxes out of how many total?",
        "9 out of 16. Divide 9 by 16.",
        "9 ÷ 16 = 0.5625 = 56.25%."
      ]
    },
    {
      id: "g7.spring.math.w4.d3.q4",
      type: "multiple_choice",
      stem: "Two SEPARATE Bb × Bb crosses each have a 1/4 chance of a recessive (bb) offspring. What is the probability that BOTH crosses produce a recessive offspring on the first try?",
      choices: [
        "1/2",
        "1/4",
        "1/16",
        "1/8"
      ],
      answerIndex: 2,
      explanation: "For two independent events, multiply the probabilities: 1/4 × 1/4 = 1/16.",
      hintLadder: [
        "The two crosses are independent events.",
        "For independent events you MULTIPLY the probabilities.",
        "1/4 × 1/4 = 1/16."
      ]
    },
    {
      id: "g7.spring.math.w4.d3.q5",
      type: "short_answer",
      stem: "A Punnett square predicts a 75% chance of a dominant trait, so a scientist expects 75 of 100 offspring to be dominant. In a real batch, she counts 68. Explain why the real result differs from the prediction and why the prediction is still useful. Use the words 'theoretical probability' and 'expected.'",
      rubric: {
        level3: "Explains that theoretical probability gives an EXPECTED long-run count, but real results vary because each offspring is a random event; states that over many trials results tend toward the prediction, so it stays useful.",
        level2: "Notes that real results can differ from the prediction but the explanation of randomness or long-run usefulness is thin, or one required term is missing.",
        level1: "Treats the prediction as a guarantee or gives no clear reasoning."
      },
      exemplar: "Theoretical probability says the EXPECTED number of dominant offspring is 75 out of 100, but each offspring is a separate random event, so any single batch can land above or below that — here it came out to 68. The prediction is still useful because over many large batches the average result tends toward 75%, so it gives a reliable forecast even though it is not a guarantee for one batch.",
      hintLadder: [
        "Is a 75% chance a guarantee for one batch?",
        "Each offspring is a random event, so counts vary.",
        "Over many trials the results tend toward the expected 75%."
      ]
    }
  ],
  reflectionPrompt: "You multiplied 1/4 × 1/4 to combine two independent chances. Where else in life would you multiply two separate chances together — and why does multiplying (not adding) make sense?",
  misconceptionBank: [
    {
      id: "forgets-to-scale",
      label: "Reports the probability instead of scaling to the group",
      description: "Asked how many of 60 offspring are dominant, answers '75%' or '3' instead of using a proportion to get 45.",
      coachMove: "Have them set up the proportion 3/4 = x/60 explicitly, then compute 0.75 × 60 = 45. The percent is per-offspring; the count scales to the group."
    },
    {
      id: "adds-independent-probabilities",
      label: "Adds independent probabilities instead of multiplying",
      description: "Combines two 1/4 chances as 1/4 + 1/4 = 1/2 rather than 1/4 × 1/4 = 1/16.",
      coachMove: "Clarify that for BOTH independent events to happen, you multiply. Adding would answer 'either one,' not 'both.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Stack the Odds?",
      prompt:
        "A Bb × Bb cross gives a 3/4 chance of a dominant seedling. Would you rather bet that ONE seedling is dominant, or bet that TWO seedlings in a row are BOTH dominant? Work out both chances as percents before you choose!",
      answer:
        "One dominant = 3/4 = 75%. Two in a row = 3/4 × 3/4 = 9/16 = 0.5625 = 56.25%. Betting on a single seedling is the safer bet (75%) because requiring BOTH to be dominant multiplies the chances down to about 56%.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Scale-Up Probability Poster",
      challenge:
        "Pick a made-up trait and a Bb × Bb cross. Draw the Punnett square, then make a poster that scales the prediction three ways: as a fraction out of 4, as a percent, and as an EXPECTED count for a group of 40 offspring (using a proportion).",
      materials: ["Paper & markers, OR a slide/drawing app"],
      steps: [
        "Draw and fill your 2×2 Punnett square and count the dominant vs. recessive boxes.",
        "Write the dominant chance as a fraction out of 4 and convert it to a percent.",
        "Set up a proportion (like 3/4 = x/40) and solve for the expected count in 40 offspring.",
        "Design the poster so all three forms — fraction, percent, and expected count — are clearly labeled."
      ],
      deliverable: "A poster showing one Punnett square scaled to a fraction out of 4, a percent, AND an expected count for 40 offspring worked out with a proportion.",
      choiceBoard: [
        "Draw the scale-up poster with all three forms and the proportion shown.",
        "Make a bar or pie chart of the expected counts for 40 offspring.",
        "Record a 30-second 'geneticist forecast' predicting how many of 40 offspring show each trait."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Genetics Probability Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w4.d3.arena1",
          type: "numeric",
          stem: "In a dihybrid cross, the recessive-recessive group is 1 box out of 16. A greenhouse grows 320 of these offspring. Using a proportion, how many are EXPECTED to fall in that 1/16 group?",
          answer: 20,
          tolerance: 0,
          unit: "offspring",
          explanation: "1/16 = x/320. Solve: x = (1 ÷ 16) × 320 = 0.0625 × 320 = 20 offspring.",
          hintLadder: [
            "The chance is 1 out of 16.",
            "Set up 1/16 = x/320.",
            "x = 320 ÷ 16 = 20."
          ]
        },
        {
          id: "g7.spring.math.w4.d3.arena2",
          type: "numeric",
          stem: "In a Bb × Bb cross, what is the percent chance an offspring is HETEROZYGOUS (Bb)? (Number only, no % sign.)",
          answer: 50,
          tolerance: 0,
          unit: "%",
          explanation: "The boxes are BB, Bb, Bb, bb. The heterozygous boxes are the two Bb boxes: 2 out of 4 = 0.50 = 50%.",
          hintLadder: [
            "Heterozygous means two different alleles: Bb.",
            "How many boxes are Bb, out of 4?",
            "2 out of 4 = 50%."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Sixteen-Square Scramble",
      prompt:
        "Picture a 4×4 grid (16 boxes) on the floor. Hop through 9 spots for the big '9' group, then 3, then 3, then land on the last single spot for the '1' — tracing the 9:3:3:1 dihybrid ratio. Repeat the pattern twice, breathing steadily.",
      scienceTieIn: "Hopping 9-3-3-1 makes the dihybrid ratio physical: the same 16 equal outcomes you divide to find each probability, from 9/16 down to 1/16.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You learned that requiring TWO things to both happen (multiplying chances) makes an outcome LESS likely than either one alone. Write about a goal that needs several things to go right at once — and why that makes it harder to reach.",
      badge: { id: "g7-spring-probability-forecaster", name: "Probability Forecaster", emoji: "🎲" },
      estimatedMinutes: 7
    }
  }
};
