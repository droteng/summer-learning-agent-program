// Grade 6 Financial Literacy — Enrichment Day 2.
// Topic: saving and a simple plan.

export const grade6FinanceDay2 = {
  id: "g6.fin.e.d2",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Financial Literacy",
  track: "financialLiteracy",
  enrichment: true,
  topic: "Saving and spending plans",
  topicTag: "save-spend-give",
  estimatedMinutes: 16,
  standardsRefs: ["JumpStart.Financial.Saving"],
  hook: "A plan beats a feeling. Today you sort your money into three jars and watch a goal become reachable.",
  miniLesson: [
    "The classic three-jar plan: SAVE (long-term goal), SPEND (short-term fun + small needs), GIVE (helping others). Adjust the percentages to fit you.",
    "A starting split that often works for kids: 50% spend, 40% save, 10% give. You can shift toward save when you have a real goal.",
    "Goal math: divide the goal by what you save per week. That's your weeks-to-goal."
  ],
  workedExample: {
    prompt:
      "Sam wants $40 headphones. Allowance is $10/week. They split 50/40/10. How many weeks until they can buy them?",
    steps: [
      "Save share = 40% of $10 = $4/week.",
      "Weeks to $40 = 40 ÷ 4 = 10 weeks.",
      "If Sam wants it faster, raise the save % (e.g., 60/30/10 → $6/week → 7 weeks).",
      "Sanity check: total still adds to 100% across all jars."
    ],
    answer: "10 weeks at the default split; ~7 weeks at 60/30/10."
  },
  items: [
    {
      id: "g6.fin.e.d2.q1",
      type: "numeric",
      stem:
        "You earn $20/week and use 50/40/10 (spend/save/give). How much do you SAVE each week?",
      answer: 8,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Save = 40% of $20.",
        "0.40 × 20.",
        "$8."
      ],
      explanation: "40% × $20 = $8 saved per week."
    },
    {
      id: "g6.fin.e.d2.q2",
      type: "numeric",
      stem:
        "Same split (50/40/10), same $20. How much do you SPEND each week?",
      answer: 10,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Spend = 50% of $20.",
        "0.50 × 20.",
        "$10."
      ],
      explanation: "50% × $20 = $10 spending."
    },
    {
      id: "g6.fin.e.d2.q3",
      type: "numeric",
      stem:
        "Goal: a $48 bike helmet. You save $6/week. How many weeks?",
      answer: 8,
      tolerance: 0,
      unit: "weeks",
      hintLadder: [
        "Goal ÷ weekly save.",
        "48 ÷ 6.",
        "8 weeks."
      ],
      explanation: "48 ÷ 6 = 8 weeks."
    },
    {
      id: "g6.fin.e.d2.q4",
      type: "multiple_choice",
      stem:
        "You're 6 weeks from your goal. A surprise expense eats your save share for one week. New estimate?",
      choices: ["6 weeks", "7 weeks", "5 weeks", "Cannot tell"],
      answerIndex: 1,
      explanation: "One week's worth of saving was lost; the timeline slips by exactly one week.",
      hintLadder: [
        "How much did you lose?",
        "One week's save.",
        "Goal shifts by one week → 7."
      ]
    },
    {
      id: "g6.fin.e.d2.q5",
      type: "short_answer",
      stem:
        "Pick a real goal under $100. Write your weekly income, your save share (% and $), and weeks-to-goal.",
      rubric: {
        level3: "Specific goal + price, weekly income, save share as both percent and dollars, and a correct weeks-to-goal calculation.",
        level2: "Has the parts but one calculation is missing or off.",
        level1: "Vague goal or no math."
      },
      exemplar:
        "Goal: $36 art set. Weekly allowance: $10. Save share: 50% → $5/week. Weeks-to-goal: 36 ÷ 5 = 7.2, so 8 weeks (round up to be safe).",
      hintLadder: [
        "Pick something real, under $100.",
        "Choose your save percent.",
        "Divide goal by weekly save."
      ]
    }
  ],
  reflectionPrompt: "Today you built a saving plan. What's a small goal you could save toward this month?",
  misconceptionBank: [
    {
      id: "skips-the-math",
      label: "Sets a goal without doing the math",
      description: "Says 'I'll save up' without calculating weeks-to-goal, then loses motivation when progress feels slow.",
      coachMove: "Always do the divide. A 12-week goal feels reachable; an unknown goal feels endless."
    }
  ]
};
