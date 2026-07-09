// Grade 6 Math — Spring Expedition, Week 1 (Spring Awakening), Day 2.
// Topic: review — ratios and rates using seed & growth data (seeds per row,
// growth per week) to plan a spring garden.

export const springG6MathW1D2 = {
  id: "g6.spring.math.w1.d2",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Math",
  topic: "Ratios and rates with seed & growth data",
  topicTag: "ratios-and-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.2", "CCSS.6.RP.A.3.B"],
  hook: "A garden is a math problem in disguise: how many seeds per row, how fast a sprout climbs each week, how many days until harvest. Today you use ratios and rates to plan a spring garden that actually adds up.",
  miniLesson: [
    "A ratio compares two amounts, like 8 seeds to 2 rows (8:2). A RATE is a ratio that compares different units, like centimeters per week.",
    "A UNIT rate tells you the amount for exactly one: 8 seeds in 2 rows is a unit rate of 4 seeds per row.",
    "To find a unit rate, divide. To use it, multiply: if a plant grows 3 cm per week, in 5 weeks it grows 3 × 5 = 15 cm."
  ],
  workedExample: {
    prompt: "A bean plant grew 12 cm in 4 weeks at a steady rate. What is its growth rate per week, and how much would it grow in 6 weeks?",
    steps: [
      "Find the unit rate: divide total growth by weeks. 12 cm ÷ 4 weeks = 3 cm per week.",
      "That is the rate: 3 cm each week.",
      "To find 6 weeks of growth, multiply the rate by 6: 3 × 6 = 18 cm.",
      "So the plant grows 3 cm/week and would grow 18 cm in 6 weeks."
    ],
    answer: "3 cm per week; 18 cm in 6 weeks."
  },
  items: [
    {
      id: "g6.spring.math.w1.d2.q1",
      type: "multiple_choice",
      stem: "A gardener plants 20 seeds evenly across 5 rows. What is the unit rate of seeds per row?",
      choices: ["2 seeds per row", "25 seeds per row", "5 seeds per row", "4 seeds per row"],
      answerIndex: 3,
      explanation: "A unit rate for one row: 20 seeds ÷ 5 rows = 4 seeds per row.",
      hintLadder: [
        "Unit rate means the amount for ONE row.",
        "Divide total seeds by number of rows.",
        "20 ÷ 5 = 4 seeds per row."
      ]
    },
    {
      id: "g6.spring.math.w1.d2.q2",
      type: "numeric",
      stem: "A sunflower grows at a steady rate of 6 cm per week. How tall (in cm) will it have grown after 7 weeks?",
      answer: 42,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "The rate is 6 cm for each week.",
        "Multiply the weekly rate by the number of weeks.",
        "6 × 7 = 42 cm."
      ],
      explanation: "6 cm/week × 7 weeks = 42 cm."
    },
    {
      id: "g6.spring.math.w1.d2.q3",
      type: "numeric",
      stem: "A seed packet says to plant seeds in the ratio 3 seeds for every 2 inches of row. For a row that is 12 inches long, how many seeds should you plant?",
      answer: 18,
      tolerance: 0,
      unit: "seeds",
      hintLadder: [
        "How many times does 2 inches fit into 12 inches?",
        "12 ÷ 2 = 6, so scale the seeds by 6.",
        "3 seeds × 6 = 18 seeds."
      ],
      explanation: "12 inches ÷ 2 inches = 6 groups; 3 seeds × 6 = 18 seeds.",
      misconceptionsTargeted: ["rate-flip"]
    },
    {
      id: "g6.spring.math.w1.d2.q4",
      type: "numeric",
      stem: "Plant A grew 15 cm in 3 weeks. Plant B grew 24 cm in 6 weeks. What is Plant A's growth rate in cm per week?",
      answer: 5,
      tolerance: 0,
      unit: "cm per week",
      hintLadder: [
        "Growth rate = total growth ÷ number of weeks.",
        "For Plant A: 15 cm ÷ 3 weeks.",
        "15 ÷ 3 = 5 cm per week."
      ],
      explanation: "Plant A: 15 cm ÷ 3 weeks = 5 cm per week. (Plant B grows 24 ÷ 6 = 4 cm/week, so A is faster.)"
    },
    {
      id: "g6.spring.math.w1.d2.q5",
      type: "short_answer",
      stem: "Two seedlings are for sale. Sprout Shop sells 12 seedlings for $6. Green Gardens sells 20 seedlings for $8. Use unit rates to explain which is the better deal per seedling.",
      rubric: {
        level3: "Computes both unit prices ($0.50 each and $0.40 each) AND correctly concludes Green Gardens is the better deal because it costs less per seedling.",
        level2: "Finds one unit rate correctly, or compares them but with a small error or unclear conclusion.",
        level1: "No unit rates or an incorrect comparison."
      },
      exemplar: "Sprout Shop: $6 ÷ 12 = $0.50 per seedling. Green Gardens: $8 ÷ 20 = $0.40 per seedling. Green Gardens is the better deal because each seedling costs less ($0.40 vs $0.50).",
      hintLadder: [
        "Find the price for ONE seedling at each shop.",
        "Divide the price by the number of seedlings.",
        "Compare the two per-seedling prices — lower is better."
      ]
    }
  ],
  reflectionPrompt: "Where in your day do you use a rate without thinking about it — like speed, price per item, or points per game? Write one 'per' rate you noticed.",
  misconceptionBank: [
    {
      id: "rate-flip",
      label: "Divides or scales the wrong way",
      description: "Flips the rate (e.g., divides row length by seeds, or scales down when they should scale up).",
      coachMove: "Have the student say the rate as a sentence with 'per' first ('3 seeds per 2 inches'), then ask 'is my row bigger or smaller than 2 inches?' to decide whether the seed count goes up or down."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Grow It?",
      prompt:
        "Would you rather grow a plant that gains 4 cm every week for 5 weeks, or one that gains 3 cm every week for 7 weeks? Work out both final heights before you choose which ends up taller!",
      answer:
        "First plant: 4 × 5 = 20 cm. Second plant: 3 × 7 = 21 cm. The slower-but-longer plant wins by 1 cm — a great reminder that rate AND time both matter.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plan a Spring Garden Bed",
      challenge:
        "Design a spring garden bed using a seeds-per-row rate. Choose a rate, decide how many rows you'll plant, and calculate the total number of seeds you need — then show your work on a garden plan.",
      steps: [
        "Pick a planting rate, like 4 seeds per row or 3 seeds per foot.",
        "Decide how many rows (or feet) your garden bed will have.",
        "Multiply to find the total seeds needed and label it on your plan.",
        "Add a prediction: if each seedling grows 3 cm per week, how tall after 4 weeks?"
      ],
      deliverable: "A garden-bed plan showing your seeds-per-row rate, total seeds calculated, and a growth prediction.",
      choiceBoard: [
        "Draw a labeled garden-bed plan with the seed math shown.",
        "Make a data table with columns for Row, Seeds, and Running Total.",
        "Write a 'garden shopping list' that uses your rate to figure out how many seed packets to buy."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.math.w1.d2.arena1",
          type: "numeric",
          stem: "A garden hose fills a watering barrel at a steady 8 liters every 2 minutes. How many liters will it deliver in 9 minutes? (Find the unit rate first.)",
          answer: 36,
          tolerance: 0,
          unit: "liters",
          hintLadder: [
            "Unit rate: 8 liters ÷ 2 minutes per minute.",
            "8 ÷ 2 = 4 liters per minute.",
            "4 liters/min × 9 min = 36 liters."
          ],
          explanation: "Unit rate is 8 ÷ 2 = 4 liters per minute; over 9 minutes that's 4 × 9 = 36 liters."
        },
        {
          id: "g6.spring.math.w1.d2.arena2",
          type: "numeric",
          stem: "Pea seeds cost $9 for 45 grams. Bean seeds cost $8 for 32 grams. What is the price per gram of the CHEAPER seed, in dollars?",
          answer: 0.2,
          tolerance: 0.01,
          unit: "dollars per gram",
          hintLadder: [
            "Find each unit price: dollars ÷ grams.",
            "Peas: 9 ÷ 45 = $0.20/g. Beans: 8 ÷ 32 = $0.25/g.",
            "The cheaper one is peas at $0.20 per gram."
          ],
          explanation: "Peas: $9 ÷ 45 g = $0.20/g. Beans: $8 ÷ 32 g = $0.25/g. Peas are cheaper at $0.20 per gram."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow-by-the-Week Reach",
      prompt:
        "Pretend you're a seedling growing 1 'level' each week. Start crouched (week 0), then rise a little taller with each count: week 1 knees, week 2 waist, week 3 shoulders, week 4 arms overhead. Then shrink back down and grow again, twice.",
      scienceTieIn: "Steady, rhythmic movement gets blood and oxygen flowing to your brain — a steady rate keeps you sharp, just like a steady growth rate builds a tall plant.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Rates are everywhere: cm per week, dollars per item, miles per hour. Write down one rate you'd want to track this spring and why it matters to you.",
      badge: { id: "spring-rate-gardener", name: "Rate Gardener", emoji: "🌷" },
      estimatedMinutes: 7
    }
  }
};
