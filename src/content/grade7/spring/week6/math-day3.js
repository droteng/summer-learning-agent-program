// Grade 7 Math — Spring Expedition, Week 6 (Code That Grows), Day 3.
// Topic: linear vs exponential growth, raised to Grade 7 — writing rules as
// expressions (a + rn vs a·b^n), general growth factors beyond doubling, and
// reasoning about why exponential overtakes linear using the constant ratio.

export const springG7MathW6D3 = {
  id: "g7.spring.math.w6.d3",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Math",
  topic: "Linear vs exponential growth (rules, factors, and rates)",
  topicTag: "linear-vs-exponential",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.EE.B.4", "CCSS.7.RP.A.2"],
  hook: "Linear growth adds a constant amount; exponential growth multiplies by a constant FACTOR. At Grade 7 you write each as a rule — a + rn for linear, a·b^n for exponential — and use those rules to predict far-out steps and prove why the multiplier eventually wins. Today you make the growth-race math exact.",
  miniLesson: [
    "Linear growth has a constant DIFFERENCE: value = start + rate × n. Example: start 3, +4 each step → 3 + 4n. Equal jumps make a straight line.",
    "Exponential growth has a constant RATIO (growth factor b): value = start × b^n. Example: start 3, ×2 each step → 3 × 2^n. Tripling uses b = 3; a 50% increase uses b = 1.5.",
    "Exponential overtakes linear because its jump each step is a fixed PERCENT of a growing number, so the jumps themselves grow — while a linear jump stays the same size forever."
  ],
  workedExample: {
    prompt: "Plant A: start 4, add 5 each day (linear). Plant B: start 4, triple each day (exponential, factor 3). What is each after 3 days?",
    steps: [
      "Plant A rule: 4 + 5n. After 3 days: 4 + 5×3 = 19.",
      "Plant B rule: 4 × 3^n. After 3 days: 4 × 3^3 = 4 × 27 = 108.",
      "They start equal at 4, but B's constant ×3 ratio explodes ahead.",
      "After 3 days: A = 19, B = 108."
    ],
    answer: "Linear A = 19, Exponential B = 108"
  },
  items: [
    {
      id: "g7.spring.math.w6.d3.q1",
      type: "numeric",
      stem: "A value grows LINEARLY by the rule value = 7 + 6n, where n is the number of days. What is its value after 8 days?",
      answer: 55,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "Substitute n = 8 into 7 + 6n.",
        "6 × 8 = 48.",
        "7 + 48 = 55."
      ],
      explanation: "Linear rule 7 + 6n at n = 8: 7 + 48 = 55."
    },
    {
      id: "g7.spring.math.w6.d3.q2",
      type: "numeric",
      stem: "A value grows EXPONENTIALLY by the rule value = 2 × 3^n (it triples each day), where n is the number of days. What is its value after 4 days?",
      answer: 162,
      tolerance: 0,
      unit: "",
      hintLadder: [
        "3^4 = 3 × 3 × 3 × 3 = 81.",
        "Multiply by the start: 2 × 81.",
        "2 × 81 = 162."
      ],
      explanation: "Exponential rule 2 × 3^n at n = 4: 2 × 81 = 162. (2 → 6 → 18 → 54 → 162.)"
    },
    {
      id: "g7.spring.math.w6.d3.q3",
      type: "numeric",
      stem: "Plant A grows by 8 + 5n (linear). Plant B grows by 8 × 2^n (doubling). After 5 days, how much TALLER is Plant B than Plant A?",
      answer: 223,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Plant A: 8 + 5×5 = 8 + 25 = 33.",
        "Plant B: 8 × 2^5 = 8 × 32 = 256.",
        "Difference: 256 − 33 = 223."
      ],
      explanation: "Plant A = 8 + 25 = 33, Plant B = 8 × 32 = 256. 256 − 33 = 223 cm taller.",
      misconceptionsTargeted: ["exponent-times-base"]
    },
    {
      id: "g7.spring.math.w6.d3.q4",
      type: "multiple_choice",
      stem: "Two rules start at the same value: value = 20 + 10n (linear) and value = 20 × 1.5^n (exponential, +50% each step). Why does the exponential rule eventually pass the linear one even though it adds LESS at first?",
      choices: [
        "Because 1.5 is bigger than 10",
        "Because the exponential jump is a fixed PERCENT of a growing number, so the jumps get bigger every step while the linear jump stays 10",
        "Because the linear rule stops growing after a few steps",
        "Because multiplying by 1.5 is the same as adding 10"
      ],
      answerIndex: 1,
      explanation: "A ×1.5 step adds 50% of the current value; as that value grows, 50% of it grows too, so the jumps overtake the fixed +10 of the linear rule.",
      hintLadder: [
        "How big is the linear jump each step? Always 10.",
        "The ×1.5 jump is 50% of the current value — does that stay the same?",
        "As the value grows, 50% of it grows, so the jumps eventually beat +10."
      ]
    },
    {
      id: "g7.spring.math.w6.d3.q5",
      type: "short_answer",
      stem: "Explain the difference between linear and exponential growth using the idea of a constant DIFFERENCE versus a constant RATIO. Give a rule of the form a + rn for one and a × b^n for the other, and one real example of each.",
      rubric: {
        level3: "States linear = constant difference (a + rn) and exponential = constant ratio (a × b^n), gives a correct rule for each, AND gives a valid real example of each.",
        level2: "Distinguishes them and gives rules, but one example is off or the difference/ratio idea is fuzzy.",
        level1: "Confuses the two, or gives no rules or no clear examples."
      },
      exemplar: "Linear growth adds the same amount each step — a constant difference — like a plant growing by rule 5 + 2n (2 cm a day). Exponential growth multiplies by the same factor each step — a constant ratio — like bacteria by rule 4 × 2^n that double every hour, curving upward faster and faster.",
      hintLadder: [
        "Linear = constant difference (add r each step); exponential = constant ratio (multiply by b).",
        "Write one rule as a + rn and one as a × b^n.",
        "Name one real example that adds and one that multiplies."
      ]
    }
  ],
  reflectionPrompt: "A rumor that grows by 5 × 3^n (tripling) spreads very differently from one that grows by 5 + 3n. Which describes a message going viral, and how would you convince a friend using the rules?",
  misconceptionBank: [
    {
      id: "exponent-times-base",
      label: "Reads b^n as b × n instead of repeated multiplication",
      description: "Computes 2^5 as 2 × 5 = 10 instead of 2 multiplied by itself 5 times (32).",
      coachMove: "Expand the power fully once: 2^5 = 2×2×2×2×2 = 32, and contrast with 2 × 5 = 10."
    },
    {
      id: "doubling-is-adding-double",
      label: "Confuses 'doubling' with 'adding double'",
      description: "Thinks doubling means adding a fixed amount twice instead of multiplying by 2 each step.",
      coachMove: "Contrast '+2 each step' with '×2 each step' on the same start and watch how fast ×2 pulls ahead."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Race of the Two Rules",
      prompt:
        "Plant A follows 3 + 6n (linear). Plant B follows 3 × 3^n (tripling). After 3 days, which is taller — and by how much? Work out both rules before you peek!",
      answer:
        "Plant A: 3 + 6×3 = 21. Plant B: 3 × 3^3 = 3 × 27 = 81. B is taller by 81 − 21 = 60. The constant ×3 ratio explodes past the steady +6.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Growth Race Graph",
      challenge:
        "Pick a linear rule (a + rn) and an exponential rule (a × b^n) with the SAME starting value but a growth factor other than 2 (try tripling or +50%). Build a table for 5 days for both, graph them on the same axes, and mark the day the exponential curve leaps ahead.",
      materials: ["Grid or graph paper, plus a pencil"],
      steps: [
        "Choose a starting value and write both rules: one a + rn, one a × b^n.",
        "Make a table: Day (n), Linear value, Exponential value, for n = 0 to 5.",
        "Plot both as points and connect them into two lines.",
        "Circle the day the exponential curve clearly pulls away from the linear line."
      ],
      deliverable: "A single graph with both growth curves, the two rules written on it, and the 'leap-ahead' day circled.",
      choiceBoard: [
        "Draw the two-line growth-race graph with your chosen factor.",
        "Make a table comparing the daily totals AND the daily jump (difference) for each rule.",
        "Write a short story where a tripling plant races an adding plant — with the real rule numbers."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Growth Type Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.math.w6.d3.arena1",
          type: "numeric",
          stem: "A value follows value = 3 × 3^n (tripling, n = days, Day 0 = 3). On which day does it first pass 200? Give the day number.",
          answer: 4,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Compute the rule for each n: Day 0 = 3, Day 1 = 9, Day 2 = 27.",
            "Day 3 = 3 × 27 = 81, Day 4 = 3 × 81 = 243.",
            "243 is the first value over 200 — that is Day 4."
          ],
          explanation: "3 → 9 → 27 → 81 → 243. Day 4 is 243, the first value past 200."
        },
        {
          id: "g7.spring.math.w6.d3.arena2",
          type: "numeric",
          stem: "Linear: value = 6 + 4n. Exponential: value = 6 × 2^n. After 5 days (n = 5), what is the DIFFERENCE (exponential minus linear)?",
          answer: 166,
          tolerance: 0,
          unit: "",
          hintLadder: [
            "Linear at n=5: 6 + 4×5 = 26.",
            "Exponential at n=5: 6 × 2^5 = 6 × 32 = 192.",
            "192 − 26 = 166."
          ],
          explanation: "Linear = 6 + 20 = 26. Exponential = 6 × 32 = 192. 192 − 26 = 166."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Triple the Move",
      prompt:
        "Start with 1 clap. Each round, TRIPLE your claps: 1, 3, 9, 27 — feel how the count explodes even faster than doubling. Then shake out your hands and take three slow breaths to reset.",
      scienceTieIn: "Feeling the count rocket from 1 to 27 in just 4 rounds shows a growth factor of 3 in your own body — and moving gets blood flowing to your brain.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Would you rather earn $50 more every day (linear, 50n) or start at 1 cent and triple it every day (exponential, 1 × 3^n) for two weeks? Use each rule to defend your choice.",
      badge: { id: "g7-spring-growth-factor-ace", name: "Growth Factor Ace", emoji: "📈" },
      estimatedMinutes: 7
    }
  }
};
