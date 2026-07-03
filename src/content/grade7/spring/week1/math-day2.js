// Grade 7 Math — Spring Expedition, Week 1 (Spring Awakening), Day 2.
// Topic: proportional relationships with seed & growth data — constant of
// proportionality, unit-rate comparison, and scaling to plan a spring garden.

export const springG7MathW1D2 = {
  id: "g7.spring.math.w1.d2",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Math",
  topic: "Proportional relationships with seed & growth data",
  topicTag: "proportional-relationships",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.2", "CCSS.7.RP.A.2.B"],
  hook: "A garden that grows at a steady rate hides a single number that runs the whole show: the constant of proportionality. Find it once, and you can predict any row, any week, any harvest. Today you use proportional relationships to plan a spring garden that scales up perfectly.",
  miniLesson: [
    "Two quantities are proportional when their ratio is always the same. That constant ratio is the constant of proportionality, k. If height y and weeks x are proportional, then y = kx, where k is the growth per week.",
    "You can find k from any point or table: divide y by x. A steady growth of 12 cm in 4 weeks gives k = 12 ÷ 4 = 3 cm per week, so y = 3x.",
    "To compare two proportional deals, put each as a unit rate (its k) and compare: the smaller cost-per-item is the better buy; the larger growth-per-week is the faster plant."
  ],
  workedExample: {
    prompt: "A bean plant grows proportionally, reaching 18 cm after 6 weeks. Find the constant of proportionality, write the equation, and predict its height at 10 weeks.",
    steps: [
      "The relationship is proportional, so height y = kx where x is weeks.",
      "Find k from the given point: k = 18 cm ÷ 6 weeks = 3 cm per week.",
      "Write the equation: y = 3x.",
      "Predict at x = 10: y = 3 × 10 = 30 cm."
    ],
    answer: "k = 3 cm per week; y = 3x; at 10 weeks the plant is 30 cm."
  },
  items: [
    {
      id: "g7.spring.math.w1.d2.q1",
      type: "multiple_choice",
      stem: "A table shows a seedling's height is proportional to time: 4 weeks → 10 cm, 6 weeks → 15 cm, 8 weeks → 20 cm. What is the constant of proportionality (cm per week)?",
      choices: ["2 cm per week", "2.5 cm per week", "3 cm per week", "5 cm per week"],
      answerIndex: 1,
      explanation: "Divide height by weeks in any row: 10 ÷ 4 = 2.5, and 15 ÷ 6 = 2.5, 20 ÷ 8 = 2.5. The constant of proportionality is 2.5 cm per week.",
      hintLadder: [
        "For a proportional relationship, divide y by x in any row.",
        "Try 10 ÷ 4 and check it matches 15 ÷ 6.",
        "Each row gives 2.5 cm per week."
      ]
    },
    {
      id: "g7.spring.math.w1.d2.q2",
      type: "numeric",
      stem: "A sunflower grows proportionally with k = 6 cm per week, so height y = 6x. What is its height (in cm) after 9 weeks?",
      answer: 54,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Use the equation y = 6x.",
        "Substitute x = 9 weeks.",
        "6 × 9 = 54 cm."
      ],
      explanation: "With k = 6, the equation is y = 6x, so at x = 9 weeks, y = 6 × 9 = 54 cm."
    },
    {
      id: "g7.spring.math.w1.d2.q3",
      type: "numeric",
      stem: "A seed packet plants seeds proportionally: 3 seeds for every 2 inches of row (a constant of 1.5 seeds per inch). For a row 26 inches long, how many seeds should you plant?",
      answer: 39,
      tolerance: 0,
      unit: "seeds",
      hintLadder: [
        "Find the constant of proportionality: 3 seeds ÷ 2 inches = 1.5 seeds per inch.",
        "Multiply that constant by the row length.",
        "1.5 × 26 = 39 seeds."
      ],
      explanation: "k = 3 ÷ 2 = 1.5 seeds per inch; for 26 inches, seeds = 1.5 × 26 = 39.",
      misconceptionsTargeted: ["rate-flip"]
    },
    {
      id: "g7.spring.math.w1.d2.q4",
      type: "numeric",
      stem: "Two plants grow proportionally. Plant A: 21 cm in 3 weeks. Plant B: 32 cm in 4 weeks. How many cm per week FASTER is the quicker plant's growth rate?",
      answer: 1,
      tolerance: 0,
      unit: "cm per week",
      hintLadder: [
        "Find each plant's constant: total growth ÷ weeks.",
        "Plant A: 21 ÷ 3 = 7 cm/week. Plant B: 32 ÷ 4 = 8 cm/week.",
        "8 - 7 = 1 cm per week faster."
      ],
      explanation: "Plant A: 21 ÷ 3 = 7 cm/week. Plant B: 32 ÷ 4 = 8 cm/week. Plant B is faster by 8 - 7 = 1 cm per week."
    },
    {
      id: "g7.spring.math.w1.d2.q5",
      type: "short_answer",
      stem: "Two shops sell seedlings at proportional prices. Sprout Shop: 15 seedlings for $9. Green Gardens: 24 seedlings for $18. Use each shop's constant of proportionality (price per seedling) to explain which is the better deal.",
      rubric: {
        level3: "Computes both constants correctly ($0.60 and $0.75 per seedling) AND concludes Sprout Shop is the better deal because each seedling costs less.",
        level2: "Finds one constant correctly, or compares them but with a small error or unclear conclusion.",
        level1: "No unit prices or an incorrect comparison."
      },
      exemplar: "Sprout Shop: $9 ÷ 15 = $0.60 per seedling. Green Gardens: $18 ÷ 24 = $0.75 per seedling. The constant of proportionality (price per seedling) is lower at Sprout Shop, so it is the better deal at $0.60 versus $0.75 each.",
      hintLadder: [
        "Find each shop's price per ONE seedling (its constant of proportionality).",
        "Divide the price by the number of seedlings.",
        "Compare the two constants — the smaller price per seedling is the better deal."
      ]
    }
  ],
  reflectionPrompt: "A proportional relationship hides one steady number that predicts everything. Where in your life is there a 'k' — a per-something rate — that you could use to predict ahead? Write one example as y = kx in words.",
  misconceptionBank: [
    {
      id: "rate-flip",
      label: "Inverts the constant of proportionality",
      description: "Divides or scales the wrong way — e.g., computes inches per seed instead of seeds per inch, or multiplies when they should divide to find k.",
      coachMove: "Have the student write the constant as a labeled unit rate with 'per' ('1.5 seeds per inch') and check units: seeds-per-inch times inches leaves seeds. If the units don't cancel to what's asked, the rate is flipped."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Constant Wins?",
      prompt:
        "Would you rather grow a plant with constant of proportionality k = 5 cm/week for 8 weeks, or one with k = 4 cm/week for 11 weeks? Use y = kx to find each final height before you choose the taller one!",
      answer:
        "First plant: y = 5 × 8 = 40 cm. Second plant: y = 4 × 11 = 44 cm. The slower plant (k = 4) growing for longer wins by 4 cm — both the constant AND the time drive the outcome.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plan a Proportional Garden Bed",
      challenge:
        "Design a spring garden bed built on a single constant of proportionality. Choose your k (seeds per foot of row), write the equation, then use it to scale up to a full bed and show a table proving the ratio stays constant.",
      steps: [
        "Pick a planting constant, like k = 4 seeds per foot, and write the equation seeds = 4 × feet.",
        "Choose 4 different row lengths and use the equation to find the seeds for each.",
        "Make a table (Feet, Seeds) and divide seeds ÷ feet in each row to show k stays the same.",
        "Add a growth prediction: if each seedling grows with k = 3 cm/week, how tall after 5 weeks?"
      ],
      deliverable: "A garden-bed plan with the equation, a table proving a constant ratio, and a growth prediction using y = kx.",
      choiceBoard: [
        "Draw a labeled garden-bed plan with the equation and constant shown.",
        "Build a data table with columns Feet, Seeds, and Seeds ÷ Feet (proving k is constant).",
        "Write a 'seed-shopping plan' that uses your constant to compute total seed packets to buy."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Proportion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w1.d2.arena1",
          type: "numeric",
          stem: "A garden hose fills a barrel proportionally at 20 liters every 8 minutes. Find the constant of proportionality (liters per minute), then find how many liters it delivers in 18 minutes.",
          answer: 45,
          tolerance: 0,
          unit: "liters",
          hintLadder: [
            "Constant k = 20 liters ÷ 8 minutes.",
            "k = 2.5 liters per minute.",
            "2.5 × 18 = 45 liters."
          ],
          explanation: "k = 20 ÷ 8 = 2.5 liters per minute; over 18 minutes, liters = 2.5 × 18 = 45."
        },
        {
          id: "g7.spring.math.w1.d2.arena2",
          type: "numeric",
          stem: "Pea seeds cost $12 for 48 grams. Bean seeds cost $15 for 50 grams. Both price relationships are proportional. What is the price per gram (in dollars) of the CHEAPER seed?",
          answer: 0.25,
          tolerance: 0.01,
          unit: "dollars per gram",
          hintLadder: [
            "Find each constant of proportionality: dollars ÷ grams.",
            "Peas: 12 ÷ 48 = $0.25/g. Beans: 15 ÷ 50 = $0.30/g.",
            "The cheaper one is peas at $0.25 per gram."
          ],
          explanation: "Peas: $12 ÷ 48 g = $0.25/g. Beans: $15 ÷ 50 g = $0.30/g. Peas are cheaper at $0.25 per gram."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Constant-Rate Reach",
      prompt:
        "Grow at a constant rate: crouch at 'week 0,' then rise the SAME amount each count — week 1 knees, week 2 hips, week 3 chest, week 4 shoulders, week 5 arms overhead. Equal steps each time, like a constant of proportionality. Shrink back down and repeat the even climb twice.",
      scienceTieIn: "Steady, even movement keeps blood and oxygen flowing at a constant rate to your brain — a constant pace keeps you sharp, just like a constant k builds a predictable, tall plant.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "A constant of proportionality lets you predict the future from one steady rate. Write down one 'k' you'd want to track this spring (cm per week, dollars per item, pages per day) and what it would let you predict.",
      badge: { id: "g7-spring-proportion-gardener", name: "Proportion Gardener", emoji: "🌷" },
      estimatedMinutes: 7
    }
  }
};
