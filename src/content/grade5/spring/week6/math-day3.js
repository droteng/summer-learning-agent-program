// Grade 5 Math — Spring Expedition, Week 6 (Code That Grows), Day 3.
// Topic: adding vs doubling growth — grows slow vs grows fast, no exponential formulas.
// Grade 5 depth: small numbers, trace step by step, "add the same amount" vs "double".

export const springG5MathW6D3 = {
  id: "g5.spring.math.w6.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Math",
  topic: "Adding vs doubling growth",
  topicTag: "adding-vs-doubling",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.OA.B.3", "CCSS.5.NBT.B.5"],
  hook: "Two plants start the same height. One grows by ADDING 3 each day. The other DOUBLES each day. For a while they look close — then one shoots way ahead. Today you find out which one grows fast and which grows slow.",
  miniLesson: [
    "Adding growth adds the SAME amount each step: 2, 5, 8, 11, 14 grows by +3 every time. It makes a slow, steady climb.",
    "Doubling growth TIMES 2 each step: 2, 4, 8, 16, 32 doubles every time. It grows faster and faster.",
    "They spread apart because doubling adds MORE each step (2→4 adds 2, but 16→32 adds 16), while +3 always adds just 3. So doubling grows fast and adding grows slow."
  ],
  workedExample: {
    prompt: "Plant A starts at 2 and adds 3 each day. Plant B starts at 2 and doubles each day. What is each after 4 days?",
    steps: [
      "Plant A (add 3): 2 → 5 → 8 → 11 → 14.",
      "Plant B (double): 2 → 4 → 8 → 16 → 32.",
      "After 2 days they were tied at 8, then B pulls ahead.",
      "After 4 days: A = 14, B = 32."
    ],
    answer: "Adding A = 14, Doubling B = 32"
  },
  items: [
    {
      id: "g5.spring.math.w6.d3.q1",
      type: "numeric",
      stem: "A value grows by ADDING: it starts at 4 and adds 6 each day. What is its value after 5 days?",
      answer: 34,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Adding 6 for 5 days means 5 × 6.",
        "5 × 6 = 30 added to the start.",
        "4 + 30 = 34."
      ],
      explanation: "Adding: 4 + (5 × 6) = 4 + 30 = 34. (4 → 10 → 16 → 22 → 28 → 34.)"
    },
    {
      id: "g5.spring.math.w6.d3.q2",
      type: "numeric",
      stem: "A value grows by DOUBLING: it starts at 1 and doubles each day. What is its value after 5 days?",
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
      id: "g5.spring.math.w6.d3.q3",
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
      explanation: "Plant A = 25 (10 + 15), Plant B = 80 (doubled 3 times). 80 − 25 = 55 cm taller.",
      misconceptionsTargeted: ["doubling-is-adding-double"]
    },
    {
      id: "g5.spring.math.w6.d3.q4",
      type: "multiple_choice",
      stem: "Why does doubling growth end up much bigger than adding growth?",
      choices: [
        "Doubling always starts with a bigger number",
        "Each step, doubling adds MORE than the step before, while adding a fixed amount always adds the same",
        "Adding growth stops after a few steps",
        "They grow at the same speed forever"
      ],
      answerIndex: 1,
      explanation: "Doubling's added amount grows each step (2→4 adds 2, 16→32 adds 16), so it pulls past the steady adding climb.",
      hintLadder: [
        "How much does +3 add each step? Always the same.",
        "How much does doubling add — is it the same each step?",
        "Doubling's jump gets bigger every step."
      ]
    },
    {
      id: "g5.spring.math.w6.d3.q5",
      type: "short_answer",
      stem: "Explain the difference between adding growth and doubling growth, and give one example of each from nature or code.",
      rubric: {
        level3: "States adding = add the same amount each step and doubling = times 2 each step, AND gives a correct example of each.",
        level2: "Tells them apart but one example is off or a definition is fuzzy.",
        level1: "Mixes up the two or gives no clear examples."
      },
      exemplar: "Adding growth adds the same amount each step, like a plant that grows 2 cm every day. Doubling growth times-2 each step, like bugs that double every hour — it grows faster and faster.",
      hintLadder: [
        "Adding = repeated adding; doubling = times 2 each step.",
        "Think of something that grows by a fixed amount vs. something that doubles.",
        "Name one example of each."
      ]
    }
  ],
  reflectionPrompt: "If a rumor doubles the number of people who know it each hour, would it spread more like a plant that adds 3 a day, or one that doubles? Why?",
  misconceptionBank: [
    {
      id: "doubling-is-adding-double",
      label: "Confuses 'doubling' with 'adding double'",
      description: "Thinks doubling means adding a fixed amount twice, instead of timesing the current value by 2 each step.",
      coachMove: "Compare '+ 2 each step' with '× 2 each step' on the same starting number and watch how fast × 2 pulls ahead."
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
      title: "Creative Lab: Growth Race Table",
      challenge:
        "Pick an adding rule (add a fixed amount) and a doubling rule with the SAME starting number. Build a table for 5 days for both, then mark the day the doubling column leaps ahead of the adding column.",
      materials: ["Grid or lined paper, plus a pencil"],
      steps: [
        "Choose a starting number and write both rules: one 'add', one 'double'.",
        "Make a table: Day, Adding value, Doubling value, for 5 days.",
        "Fill in each row by using the rule on the value before it.",
        "Circle the day the doubling column clearly pulls away from the adding one."
      ],
      deliverable: "A filled-in table with both growth columns and the 'leap-ahead' day circled.",
      choiceBoard: [
        "Build the two-column growth-race table.",
        "Draw a bar graph comparing the daily totals for both rules.",
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
          id: "g5.spring.math.w6.d3.arena1",
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
          id: "g5.spring.math.w6.d3.arena2",
          type: "numeric",
          stem: "Adding: start 6, add 4 each day. Doubling: start 6, double each day. After 3 days, what is the DIFFERENCE (doubling minus adding)?",
          answer: 30,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Adding after 3 days: 6 + (3 × 4) = 18.",
            "Doubling after 3 days: 6 → 12 → 24 → 48.",
            "48 − 18 = 30."
          ],
          explanation: "Adding = 6 + 12 = 18. Doubling = 48 (doubled 3 times). 48 − 18 = 30."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Double the Move",
      prompt:
        "Start with 1 clap. Each round, DOUBLE your claps: 1, 2, 4, 8, 16 — feel how fast the count grows. Then shake out your hands and take three slow breaths to reset.",
      scienceTieIn: "Feeling the count grow from 1 to 16 in just 5 rounds shows doubling growth in your own body — and moving gets blood flowing to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Would you rather earn $5 more every day (adding) or start at 1 cent and double it every day (doubling) for a month? Explain your thinking with the growth you learned.",
      badge: { id: "g5-spring-doubling-racer", name: "Doubling Racer", emoji: "🚀" },
      estimatedMinutes: 7
    }
  }
};
