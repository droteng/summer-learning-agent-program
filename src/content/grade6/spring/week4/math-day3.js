// Grade 6 Math — Spring Expedition, Week 4 (Genetics for Kids), Day 3.
// Topic: probability and ratios in genetics — reading a Punnett square as
// ratios and percent chances (e.g. 3:1, 3 out of 4 = 75%).

export const springG6MathW4D3 = {
  id: "g6.spring.math.w4.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 3,
  subject: "Math",
  topic: "Probability and ratios in genetics",
  topicTag: "genetics-probability",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.1", "CCSS.6.RP.A.3.C"],
  hook: "A Punnett square isn't just science — it's a probability machine. Today you turn those 4 little boxes into ratios and percent chances, the same math a geneticist uses to predict a whole spring's worth of offspring.",
  miniLesson: [
    "A Punnett square has 4 equally likely boxes. If 3 boxes show a trait and 1 does not, the ratio is 3:1 and the probability is 3 out of 4.",
    "To turn 'out of 4' into a percent, find what fraction of 4 it is: 3 out of 4 = 3 ÷ 4 = 0.75 = 75%. Likewise 1 out of 4 = 25%, and 2 out of 4 = 50%.",
    "A ratio (3:1) compares the two outcomes to EACH OTHER, while a percent chance (75%) compares one outcome to the WHOLE. Both come from the same 4 boxes."
  ],
  workedExample: {
    prompt: "A Punnett square shows 3 tall plants to 1 short plant. Write the ratio, and find the percent chance of a tall plant.",
    steps: [
      "Count outcomes: 3 tall, 1 short, out of 4 boxes total.",
      "Ratio of tall to short = 3:1.",
      "Probability of tall = 3 out of 4 = 3 ÷ 4 = 0.75.",
      "Convert to percent: 0.75 × 100 = 75%."
    ],
    answer: "Ratio 3:1; the chance of a tall plant is 75%."
  },
  items: [
    {
      id: "g6.spring.math.w4.d3.q1",
      type: "numeric",
      stem: "A Punnett square shows 3 brown-eyed boxes and 1 blue-eyed box. What is the percent chance of a brown-eyed offspring? (Enter a number without the % sign.)",
      answer: 75,
      tolerance: 0,
      unit: "%",
      explanation: "3 out of 4 boxes are brown: 3 ÷ 4 = 0.75 = 75%.",
      hintLadder: [
        "How many boxes are brown, out of how many total?",
        "3 out of 4. Divide 3 by 4.",
        "3 ÷ 4 = 0.75, which is 75%."
      ]
    },
    {
      id: "g6.spring.math.w4.d3.q2",
      type: "numeric",
      stem: "In the same square (3 brown, 1 blue), what is the percent chance of a BLUE-eyed offspring? (Number only.)",
      answer: 25,
      tolerance: 0,
      unit: "%",
      explanation: "1 out of 4 boxes is blue: 1 ÷ 4 = 0.25 = 25%.",
      hintLadder: [
        "How many boxes are blue, out of 4?",
        "1 out of 4. Divide 1 by 4.",
        "1 ÷ 4 = 0.25, which is 25%."
      ],
      misconceptionsTargeted: ["ratio-as-percent"]
    },
    {
      id: "g6.spring.math.w4.d3.q3",
      type: "multiple_choice",
      stem: "A cross gives 2 purple-flowered boxes and 2 white-flowered boxes. What is the ratio of purple to white, and the percent chance of purple?",
      choices: [
        "1:1 ratio, 50% purple",
        "3:1 ratio, 75% purple",
        "2:1 ratio, 66% purple",
        "1:2 ratio, 25% purple"
      ],
      answerIndex: 0,
      explanation: "2 purple to 2 white reduces to 1:1. Purple is 2 out of 4 = 2 ÷ 4 = 0.50 = 50%.",
      hintLadder: [
        "Compare 2 purple to 2 white — simplify the ratio.",
        "2:2 reduces to 1:1.",
        "Purple = 2 of 4 = 50%."
      ]
    },
    {
      id: "g6.spring.math.w4.d3.q4",
      type: "numeric",
      stem: "A Bb × Bb cross gives a 3:1 chance of a dominant trait. If a plant produces 40 offspring, about how many are expected to show the DOMINANT trait?",
      answer: 30,
      tolerance: 0,
      unit: "offspring",
      explanation: "3 out of 4 = 75%. 75% of 40 = 0.75 × 40 = 30 offspring expected to show the dominant trait.",
      hintLadder: [
        "The chance is 3 out of 4, which is 75%.",
        "Find 75% of 40 offspring.",
        "0.75 × 40 = 30."
      ]
    },
    {
      id: "g6.spring.math.w4.d3.q5",
      type: "short_answer",
      stem: "Explain the difference between saying the offspring are '3:1' and saying there is a '75% chance' of the dominant trait. How can both describe the same Punnett square?",
      rubric: {
        level3: "Explains that 3:1 compares dominant to recessive outcomes to each other, while 75% compares the dominant outcome to the whole (3 of 4), and both come from the same 4 boxes.",
        level2: "Notes a difference but the explanation of ratio-vs-percent is partly unclear.",
        level1: "Confuses the two or gives no clear reasoning."
      },
      exemplar: "The ratio 3:1 compares the dominant boxes to the recessive boxes — 3 to 1. The 75% compares just the dominant boxes to ALL 4 boxes: 3 out of 4 is 0.75, or 75%. They both come from the same square, just measured differently: one against the other outcome, one against the whole.",
      hintLadder: [
        "What does a ratio compare — the two outcomes, or one vs. the total?",
        "3:1 compares dominant to recessive; 75% is 3 out of 4.",
        "Both use the same 4 boxes, measured two ways."
      ]
    }
  ],
  reflectionPrompt: "Where else in life do you see a 'chance out of a whole' — like a 1 in 4 chance of picking something? How would you write it as a percent?",
  misconceptionBank: [
    {
      id: "ratio-as-percent",
      label: "Reads the ratio number as the percent",
      description: "Sees a 3:1 ratio and says '3%' or '1%' instead of converting to out-of-4 percentages (75% and 25%).",
      coachMove: "Point back to the 4 equal boxes: count how many out of 4, then divide by 4 and multiply by 100 to get the percent."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Bet On It?",
      prompt:
        "A Punnett square gives a 3 out of 4 chance of a tall plant. Would you rather bet that the NEXT single seed grows tall, or bet on the recessive short trait? Work out both percent chances before you choose!",
      answer:
        "Tall = 3 out of 4 = 75%. Short = 1 out of 4 = 25%. Betting on tall gives you a 75% chance — the smarter bet, though it's never guaranteed for any single seed.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Genetics Probability Poster",
      challenge:
        "Pick a made-up trait and a cross (like Ss × Ss). Draw the Punnett square, then make a poster that shows the outcome three ways: as a ratio, as a fraction 'out of 4,' and as a percent.",
      materials: ["Paper & markers, OR a slide/drawing app"],
      steps: [
        "Draw and fill your 2×2 Punnett square.",
        "Count the dominant and recessive boxes and write the ratio (like 3:1).",
        "Write each outcome as a fraction out of 4, then convert to a percent.",
        "Design the poster so all three forms (ratio, fraction, percent) are clearly labeled."
      ],
      deliverable: "A poster showing one Punnett square with its outcome as a ratio, a fraction out of 4, and a percent.",
      choiceBoard: [
        "Draw the probability poster with all three forms.",
        "Make a bar or pie chart showing the 75%/25% split of outcomes.",
        "Record a 30-second 'weather-forecast' style clip predicting the chance of each trait."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Genetics Probability Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.math.w4.d3.arena1",
          type: "numeric",
          stem: "A Punnett square shows 1 box with a recessive disease trait out of 4. A litter has 20 offspring. About how many are expected to show the recessive trait?",
          answer: 5,
          tolerance: 0,
          unit: "offspring",
          explanation: "1 out of 4 = 25%. 25% of 20 = 0.25 × 20 = 5 offspring expected.",
          hintLadder: [
            "1 out of 4 is what percent?",
            "1 ÷ 4 = 0.25 = 25%.",
            "0.25 × 20 = 5 offspring."
          ]
        },
        {
          id: "g6.spring.math.w4.d3.arena2",
          type: "numeric",
          stem: "A cross gives a 1:1 ratio of red to white flowers. Out of 50 flowers, how many are expected to be RED? (Number only.)",
          answer: 25,
          tolerance: 0,
          unit: "flowers",
          explanation: "1:1 means red is 1 out of 2 = 50%. 50% of 50 = 0.5 × 50 = 25 red flowers.",
          hintLadder: [
            "A 1:1 ratio means half and half.",
            "Red is 1 out of 2 = 50%.",
            "0.5 × 50 = 25 flowers."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Four-Corner Odds",
      prompt:
        "Imagine your space split into 4 squares like a Punnett square. Hop to 3 of the corners (the '3 out of 4' dominant outcomes), then hop once to the last corner (the '1 out of 4' recessive). Repeat the 3-then-1 pattern 4 times.",
      scienceTieIn: "Hopping 3 corners then 1 makes the 3:1 ratio physical — the same 75%-to-25% split your Punnett square predicts.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A 75% chance still isn't a guarantee for one seed. Write about a time something 'likely' didn't happen — and why a percent chance is a prediction, not a promise.",
      badge: { id: "spring-odds-oracle", name: "Odds Oracle", emoji: "🎲" },
      estimatedMinutes: 7
    }
  }
};
