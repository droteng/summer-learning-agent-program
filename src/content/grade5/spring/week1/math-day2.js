// Grade 5 Math — Spring Expedition, Week 1 (Spring Awakening), Day 2.
// Grade 5 counterpart of g6.spring.math.w1.d2. Same topic (rates and simple
// "per" comparisons using seed & growth data) pitched down to Grade 5: whole
// numbers and simple divisions, visual/step-by-step reasoning, smaller values.

export const springG5MathW1D2 = {
  id: "g5.spring.math.w1.d2",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 2,
  subject: "Math",
  topic: "Rates with seed & growth data",
  topicTag: "rates-and-per-amounts",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.6", "CCSS.5.OA.A.2"],
  hook: "A garden is really a math problem: how many seeds go in each row, how fast a sprout grows each week, how many days until harvest. Today you use 'per amounts' (like seeds per row) to plan a spring garden that adds up.",
  miniLesson: [
    "A 'per amount' tells you how much for ONE thing. For example, 12 seeds shared evenly across 3 rows is 4 seeds PER row.",
    "To find a per amount, DIVIDE. 12 seeds ÷ 3 rows = 4 seeds per row.",
    "To use a per amount, MULTIPLY. If a plant grows 3 cm per week, then in 5 weeks it grows 3 × 5 = 15 cm."
  ],
  workedExample: {
    prompt: "A bean plant grew 12 cm in 4 weeks, growing the same amount each week. How much did it grow per week, and how much would it grow in 6 weeks?",
    steps: [
      "Find the per-week amount: divide total growth by weeks. 12 cm ÷ 4 weeks = 3 cm per week.",
      "That is the rate: 3 cm each week.",
      "To find 6 weeks of growth, multiply: 3 × 6 = 18 cm.",
      "So the plant grows 3 cm per week and would grow 18 cm in 6 weeks."
    ],
    answer: "3 cm per week; 18 cm in 6 weeks."
  },
  items: [
    {
      id: "g5.spring.math.w1.d2.q1",
      type: "multiple_choice",
      stem: "A gardener plants 12 seeds evenly across 4 rows. How many seeds are in each row?",
      choices: ["2 seeds per row", "4 seeds per row", "3 seeds per row", "8 seeds per row"],
      answerIndex: 2,
      explanation: "Share the seeds evenly: 12 seeds ÷ 4 rows = 3 seeds per row.",
      hintLadder: [
        "'Per row' means the amount for ONE row.",
        "Divide the total seeds by the number of rows.",
        "12 ÷ 4 = 3 seeds per row."
      ]
    },
    {
      id: "g5.spring.math.w1.d2.q2",
      type: "numeric",
      stem: "A sunflower grows 5 cm each week. How tall (in cm) will it have grown after 6 weeks?",
      answer: 30,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "The rate is 5 cm for each week.",
        "Multiply the weekly amount by the number of weeks.",
        "5 × 6 = 30 cm."
      ],
      explanation: "5 cm per week × 6 weeks = 30 cm."
    },
    {
      id: "g5.spring.math.w1.d2.q3",
      type: "numeric",
      stem: "A seed packet says to plant 2 seeds for every 1 foot of row. For a row that is 5 feet long, how many seeds should you plant?",
      answer: 10,
      tolerance: 0,
      unit: "seeds",
      hintLadder: [
        "Each foot of row gets 2 seeds.",
        "Multiply the seeds per foot by the number of feet.",
        "2 seeds × 5 feet = 10 seeds."
      ],
      explanation: "2 seeds per foot × 5 feet = 10 seeds.",
      misconceptionsTargeted: ["rate-flip"]
    },
    {
      id: "g5.spring.math.w1.d2.q4",
      type: "numeric",
      stem: "Plant A grew 20 cm in 4 weeks, growing the same amount each week. How many cm did Plant A grow per week?",
      answer: 5,
      tolerance: 0,
      unit: "cm per week",
      hintLadder: [
        "Growth per week = total growth ÷ number of weeks.",
        "For Plant A: 20 cm ÷ 4 weeks.",
        "20 ÷ 4 = 5 cm per week."
      ],
      explanation: "Plant A: 20 cm ÷ 4 weeks = 5 cm per week."
    },
    {
      id: "g5.spring.math.w1.d2.q5",
      type: "short_answer",
      stem: "Two shops sell seedlings. Sprout Shop sells 4 seedlings for $8. Green Gardens sells 5 seedlings for $5. Use the price for ONE seedling to explain which shop is the better deal.",
      rubric: {
        level3: "Finds both per-seedling prices ($2 each and $1 each) AND correctly says Green Gardens is the better deal because each seedling costs less.",
        level2: "Finds one per-seedling price correctly, or compares them but with a small error or unclear answer.",
        level1: "No per-seedling prices or an incorrect comparison."
      },
      exemplar: "Sprout Shop: $8 ÷ 4 = $2 per seedling. Green Gardens: $5 ÷ 5 = $1 per seedling. Green Gardens is the better deal because each seedling costs less ($1 instead of $2).",
      hintLadder: [
        "Find the price for ONE seedling at each shop.",
        "Divide the price by the number of seedlings.",
        "Compare the two prices — lower per seedling is the better deal."
      ]
    }
  ],
  reflectionPrompt: "Where in your day do you use a 'per' amount without thinking about it — like price per snack or points per game? Write one 'per' amount you noticed.",
  misconceptionBank: [
    {
      id: "rate-flip",
      label: "Multiplies or divides the wrong way",
      description: "Flips the rate (for example, divides row length by seeds, or divides when they should multiply).",
      coachMove: "Have the student say the rate as a sentence with 'per' first ('2 seeds per 1 foot'), then ask 'how many feet do I have?' and multiply the seeds by that number of feet."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Grow It?",
      prompt:
        "Would you rather grow a plant that gains 4 cm every week for 5 weeks, or one that gains 3 cm every week for 6 weeks? Work out both final heights before you choose which ends up taller!",
      answer:
        "First plant: 4 × 5 = 20 cm. Second plant: 3 × 6 = 18 cm. The first plant is taller by 2 cm — a great reminder that the rate AND the number of weeks both matter.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Plan a Spring Garden Bed",
      challenge:
        "Design a spring garden bed using a seeds-per-row amount. Choose how many seeds go in each row, decide how many rows you will plant, and figure out the total number of seeds you need — then show your work on a garden plan.",
      steps: [
        "Pick a planting amount, like 3 seeds per row or 2 seeds per foot.",
        "Decide how many rows (or feet) your garden bed will have.",
        "Multiply to find the total seeds needed and label it on your plan.",
        "Add a guess: if each sprout grows 3 cm per week, how tall after 4 weeks?"
      ],
      deliverable: "A garden-bed plan showing your seeds-per-row amount, the total seeds figured out, and a growth guess.",
      choiceBoard: [
        "Draw a labeled garden-bed plan with the seed math shown.",
        "Make a table with columns for Row, Seeds, and Total So Far.",
        "Write a 'garden shopping list' that uses your amount to figure out how many seed packets to buy."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.math.w1.d2.arena1",
          type: "numeric",
          stem: "A garden hose fills a watering can with 4 liters every 1 minute. How many liters will it fill in 8 minutes?",
          answer: 32,
          tolerance: 0,
          unit: "liters",
          hintLadder: [
            "The rate is 4 liters for each minute.",
            "Multiply the liters per minute by the number of minutes.",
            "4 × 8 = 32 liters."
          ],
          explanation: "4 liters per minute × 8 minutes = 32 liters."
        },
        {
          id: "g5.spring.math.w1.d2.arena2",
          type: "numeric",
          stem: "Pea seeds cost $6 for 3 packets. Bean seeds cost $10 for 5 packets. What is the price of ONE packet of the CHEAPER seed, in dollars?",
          answer: 2,
          tolerance: 0,
          unit: "dollars per packet",
          hintLadder: [
            "Find the price for ONE packet at each shop: dollars ÷ packets.",
            "Peas: 6 ÷ 3 = $2 per packet. Beans: 10 ÷ 5 = $2 per packet.",
            "Both come out to $2 per packet, so the cheaper price is $2."
          ],
          explanation: "Peas: $6 ÷ 3 = $2 per packet. Beans: $10 ÷ 5 = $2 per packet. They cost the same, so the cheaper (and equal) price is $2 per packet."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow-by-the-Week Reach",
      prompt:
        "Pretend you are a seedling growing 1 'level' each week. Start crouched (week 0), then rise a little taller each count: week 1 knees, week 2 waist, week 3 shoulders, week 4 arms overhead. Then shrink back down and grow again, twice.",
      scienceTieIn: "Steady, even movement gets air and blood flowing to your brain — an even rate keeps you sharp, just like an even growth rate builds a tall plant.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Rates are everywhere: cm per week, dollars per item, points per game. Write down one rate you would want to track this spring and why it matters to you.",
      badge: { id: "g5-spring-rate-gardener", name: "Rate Gardener", emoji: "🌷" },
      estimatedMinutes: 7
    }
  }
};
