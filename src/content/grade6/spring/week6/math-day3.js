// Grade 6 Math — Spring Expedition, Week 6 (Code That Grows), Day 3.
// Topic: linear vs exponential growth — adding vs doubling, and why they diverge.

export const springG6MathW6D3 = {
  id: "g6.spring.math.w6.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Math",
  topic: "Linear vs exponential growth",
  topicTag: "linear-vs-exponential",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.EE.A.1", "CCSS.6.EE.C.9"],
  hook: "Two plants start the same size. One grows by adding 3 each day; the other doubles each day. For a while they look close — then one rockets away. Today you learn why adding and doubling diverge.",
  miniLesson: [
    "Linear growth ADDS the same amount each step: 2, 5, 8, 11, 14 grows by +3 every time. It makes a straight climb.",
    "Exponential growth MULTIPLIES by the same amount each step: 2, 4, 8, 16, 32 doubles every time. It curves upward, faster and faster.",
    "They diverge because doubling adds MORE each step (2→4 adds 2, but 16→32 adds 16), while +3 always adds just 3. Exponential eventually blows past linear."
  ],
  workedExample: {
    prompt: "Plant A starts at 2 and adds 3 each day. Plant B starts at 2 and doubles each day. What is each after 4 days?",
    steps: [
      "Plant A (add 3): 2 → 5 → 8 → 11 → 14.",
      "Plant B (double): 2 → 4 → 8 → 16 → 32.",
      "After day 2 they were tied at 8, but then B pulls ahead.",
      "After 4 days: A = 14, B = 32."
    ],
    answer: "Linear A = 14, Exponential B = 32"
  },
  items: [
    {
      id: "g6.spring.math.w6.d3.q1",
      type: "numeric",
      stem: "A value grows LINEARLY: it starts at 4 and adds 6 each day. What is its value after 5 days?",
      answer: 34,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Adding 6 for 5 days means 5 × 6.",
        "5 × 6 = 30 added to the start.",
        "4 + 30 = 34."
      ],
      explanation: "Linear: 4 + (5 × 6) = 4 + 30 = 34. (4 → 10 → 16 → 22 → 28 → 34.)"
    },
    {
      id: "g6.spring.math.w6.d3.q2",
      type: "numeric",
      stem: "A value grows EXPONENTIALLY by doubling: it starts at 1 and doubles each day. What is its value after 5 days?",
      answer: 32,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Double the value each day, starting at 1.",
        "1 → 2 → 4 → 8 → 16 → 32.",
        "Five doublings of 1 gives 32."
      ],
      explanation: "Doubling five times: 1 → 2 → 4 → 8 → 16 → 32."
    },
    {
      id: "g6.spring.math.w6.d3.q3",
      type: "numeric",
      stem: "Plant A adds 5 each day starting from 10. Plant B doubles each day starting from 10. After 3 days, how much TALLER is Plant B than Plant A?",
      answer: 55,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Plant A: 10 → 15 → 20 → 25 after 3 days.",
        "Plant B: 10 → 20 → 40 → 80 after 3 days.",
        "Difference: 80 − 25 = 55."
      ],
      explanation: "Plant A = 25 (10+15), Plant B = 80 (doubled 3×). 80 − 25 = 55 cm taller.",
      misconceptionsTargeted: ["doubling-is-adding-double"]
    },
    {
      id: "g6.spring.math.w6.d3.q4",
      type: "multiple_choice",
      stem: "Why does exponential (doubling) growth eventually shoot far past linear (adding) growth?",
      choices: [
        "Doubling always starts with a bigger number",
        "Each step, doubling adds MORE than the last step, while adding a fixed amount always adds the same",
        "Linear growth stops after a few steps",
        "They actually grow at the same rate forever"
      ],
      answerIndex: 1,
      explanation: "Doubling's added amount grows each step (2→4 adds 2, 16→32 adds 16), so it accelerates past the steady linear climb.",
      hintLadder: [
        "How much does +3 add each step? Always the same.",
        "How much does doubling add — is it the same each step?",
        "Doubling's jump gets bigger every step."
      ]
    },
    {
      id: "g6.spring.math.w6.d3.q5",
      type: "short_answer",
      stem: "Explain the difference between linear and exponential growth, and give one example of each from nature or code.",
      rubric: {
        level3: "States linear = add the same amount each step and exponential = multiply each step, AND gives a correct example of each.",
        level2: "Distinguishes them but one example is off or the definition is fuzzy.",
        level1: "Confuses the two or gives no clear examples."
      },
      exemplar: "Linear growth adds the same amount each step, like a plant that grows 2 cm every day. Exponential growth multiplies each step, like bacteria that double every hour — it curves upward faster and faster.",
      hintLadder: [
        "Linear = repeated adding; exponential = repeated multiplying.",
        "Think of something that grows by a fixed amount vs. something that doubles.",
        "Name one example of each."
      ]
    }
  ],
  reflectionPrompt: "If a rumor doubles the number of people who know it each hour, would it spread more like a linear plant or an exponential one? Why?",
  misconceptionBank: [
    {
      id: "doubling-is-adding-double",
      label: "Confuses 'doubling' with 'adding double'",
      description: "Thinks doubling means adding a fixed amount twice, instead of multiplying the current value by 2 each step.",
      coachMove: "Contrast '+ 2 each step' with '× 2 each step' on the same starting number and watch how fast × 2 pulls ahead."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Race of the Two Plants",
      prompt:
        "Plant A starts at 3 and adds 3 each day. Plant B starts at 3 and doubles each day. After 3 days, which is taller — and by how much? Trace both before you peek!",
      answer:
        "Plant A: 3 → 6 → 9 → 12. Plant B: 3 → 6 → 12 → 24. They tied at day 1 (6), but B pulls ahead: 24 vs 12, so B is 12 taller.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Growth Race Graph",
      challenge:
        "Pick a linear rule (add a fixed amount) and an exponential rule (double) with the SAME starting value. Build a table for 5 days for both, then graph them on the same axes and mark the day the exponential line leaps ahead.",
      materials: ["Grid or graph paper, plus a pencil"],
      steps: [
        "Choose a starting value and write both rules: one 'add', one 'double'.",
        "Make a table: Day, Linear value, Exponential value, for 5 days.",
        "Plot both as points and connect them into two lines.",
        "Circle the day the exponential line clearly pulls away from the linear one."
      ],
      deliverable: "A single graph with both growth lines and the 'leap-ahead' day circled.",
      choiceBoard: [
        "Draw the two-line growth-race graph.",
        "Make a side-by-side table comparing the daily totals and daily jumps.",
        "Write a short story where two plants race and the doubling plant wins — with the real numbers."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Type Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.math.w6.d3.arena1",
          type: "numeric",
          stem: "A value doubles each day starting at 2. On which day does it first pass 30? (Day 0 = 2.) Give the day number.",
          answer: 4,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "List the doublings: Day 0 = 2, Day 1 = 4, Day 2 = 8...",
            "Day 3 = 16, Day 4 = 32.",
            "32 is the first value over 30 — that is Day 4."
          ],
          explanation: "2 → 4 → 8 → 16 → 32. Day 4 is 32, the first value past 30."
        },
        {
          id: "g6.spring.math.w6.d3.arena2",
          type: "numeric",
          stem: "Linear: start 6, add 4 each day. Exponential: start 6, double each day. After 4 days, what is the DIFFERENCE (exponential minus linear)?",
          answer: 74,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Linear after 4 days: 6 + (4 × 4) = 22.",
            "Exponential after 4 days: 6 → 12 → 24 → 48 → 96.",
            "96 − 22 = 74."
          ],
          explanation: "Linear = 6 + 16 = 22. Exponential = 96 (doubled 4×). 96 − 22 = 74."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Double the Move",
      prompt:
        "Start with 1 clap. Each round, DOUBLE your claps: 1, 2, 4, 8, 16 — feel how fast the count explodes. Then shake out your hands and take three slow breaths to reset.",
      scienceTieIn: "Feeling the count explode from 1 to 16 in just 5 rounds shows exponential growth in your own body — and moving gets blood flowing to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Would you rather earn $5 more every day (linear) or start at 1 cent and double it every day (exponential) for a month? Explain your thinking with the growth you learned.",
      badge: { id: "spring-exponential-explorer", name: "Exponential Explorer", emoji: "🚀" },
      estimatedMinutes: 7
    }
  }
};
