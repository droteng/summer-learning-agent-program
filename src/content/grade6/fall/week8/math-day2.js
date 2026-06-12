// Grade 6 Math — Fall Expedition, Week 8 (Harvest Showcase), Day 2.
// Topic: fall math synthesis — ratios, data, rates, and timelines together.

export const fallG6MathW8D2 = {
  id: "g6.fall.math.w8.d2",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Math",
  topic: "Fall math synthesis",
  topicTag: "synthesis-review",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.3", "CCSS.6.SP.B.5"],
  hook: "All season you used ratios, graphs, rates, and timelines. Today you bring them together in one mixed set — the math behind your showcase.",
  miniLesson: [
    "Ratios scale recipes and split harvests; check by keeping the relationship the same.",
    "Graphs show comparisons (bar) and change over time (line) — read the scale first.",
    "Rates compare two units (cm per week); timelines measure years between events."
  ],
  workedExample: {
    prompt: "A stand sold 240 crates over 8 weeks at a steady rate. What's the weekly rate, and how many in 5 weeks at that rate?",
    steps: [
      "Weekly rate = total ÷ weeks = 240 ÷ 8 = 30 crates/week.",
      "For 5 weeks: 30 × 5.",
      "= 150 crates.",
      "Rate first, then scale."
    ],
    answer: "30 crates/week; 150 crates in 5 weeks."
  },
  items: [
    {
      id: "g6.fall.math.w8.d2.q1",
      type: "numeric",
      stem: "A recipe ratio is 3 cups flour to 1 cup pumpkin. For 12 cups flour, how many cups pumpkin?",
      answer: 4,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Flour went from 3 to 12 — times what?",
        "12 ÷ 3 = 4.",
        "Pumpkin: 1 × 4 = 4 cups."
      ],
      explanation: "Scale by 4: 1 × 4 = 4 cups pumpkin."
    },
    {
      id: "g6.fall.math.w8.d2.q2",
      type: "numeric",
      stem: "A survey of 80 students found 60 liked the fall menu. What percent is that?",
      answer: 75,
      tolerance: 0,
      unit: "%",
      hintLadder: [
        "Percent = part ÷ whole × 100.",
        "60 ÷ 80 = 0.75.",
        "0.75 × 100 = 75%."
      ],
      explanation: "60 ÷ 80 = 0.75 = 75%."
    },
    {
      id: "g6.fall.math.w8.d2.q3",
      type: "numeric",
      stem: "A plant grew 36 cm in 6 weeks. What is its growth rate per week?",
      answer: 6,
      tolerance: 0,
      unit: "cm/week",
      hintLadder: [
        "Rate = growth ÷ time.",
        "36 ÷ 6.",
        "= 6 cm/week."
      ],
      explanation: "36 ÷ 6 = 6 cm/week."
    },
    {
      id: "g6.fall.math.w8.d2.q4",
      type: "numeric",
      stem: "How many years from 1100 CE to 1775 CE?",
      answer: 675,
      tolerance: 0,
      unit: "years",
      hintLadder: [
        "Both CE: subtract earlier from later.",
        "1775 − 1100.",
        "= 675."
      ],
      explanation: "1775 − 1100 = 675 years."
    },
    {
      id: "g6.fall.math.w8.d2.q5",
      type: "short_answer",
      stem: "For your showcase, you want to claim 'most students prefer the new fall option.' You surveyed 10 students and 7 agreed. Explain whether that's strong enough evidence and what you'd improve.",
      rubric: {
        level3: "Notes the sample (10) is small/possibly unrepresentative AND suggests surveying more students for stronger evidence.",
        level2: "Says it's weak OR suggests improvement, not both.",
        level1: "Treats 7/10 as fully convincing with no critique."
      },
      exemplar: "7 out of 10 is 70%, but 10 students is a small sample that might not represent everyone. I'd survey more students — say 100 — to make the claim trustworthy.",
      hintLadder: [
        "How many did you ask?",
        "Is 10 enough to speak for the whole school?",
        "Suggest a bigger, fairer sample."
      ]
    }
  ],
  reflectionPrompt: "Which fall math skill — ratios, graphs, rates, or timelines — will you actually use most in real life? Why?",
  misconceptionBank: [
    {
      id: "small-sample-in-showcase",
      label: "Presents a tiny sample as strong proof",
      description: "Uses 7-of-10 results in a showcase as if they represent everyone.",
      coachMove: "Ask 'out of how many, and were they a fair mix?' before trusting a percentage."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Harvest Riddle",
      prompt:
        "A farmer fills crates at a steady rate. In 3 hours she fills 18 crates. A wagon holds 30 crates. Working at the same rate, how many MORE hours until she fills a whole wagon?",
      answer:
        "Her rate is 18 ÷ 3 = 6 crates/hour. A wagon of 30 takes 30 ÷ 6 = 5 hours total. She's done 3, so 2 more hours.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Stat Card",
      challenge:
        "Turn one true number from your fall — pumpkins counted, pages read, minutes practiced — into a 'stat card' for your harvest showcase. Use a ratio, a percent, OR a rate to make the number tell a story.",
      steps: [
        "Pick one real fall number you can stand behind.",
        "Turn it into a ratio, percent, or per-week rate (show the math).",
        "Add a one-line caption explaining what it means.",
        "Double-check your math so the card is honest."
      ],
      deliverable: "A stat card showing one number, the math that transforms it, and an honest caption.",
      choiceBoard: [
        "Make a single illustrated stat card.",
        "Make a 3-stat 'harvest dashboard' (one ratio, one percent, one rate).",
        "Make a bar or line graph of a fall number changing over the 8 weeks."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.math.w8.d2.arena1",
          type: "numeric",
          stem: "A stand sold 480 apples over 6 weeks at a steady rate. At that rate, how many apples would it sell in 10 weeks?",
          answer: 800,
          tolerance: 0,
          unit: "apples",
          hintLadder: [
            "Find the weekly rate first.",
            "480 ÷ 6 = 80 apples/week.",
            "80 × 10 = 800 apples."
          ],
          explanation: "Rate = 480 ÷ 6 = 80/week. Then 80 × 10 = 800 apples."
        },
        {
          id: "g6.fall.math.w8.d2.arena2",
          type: "numeric",
          stem: "A survey of 120 students found 90 prefer the fall festival. What percent prefer it?",
          answer: 75,
          tolerance: 0,
          unit: "%",
          hintLadder: [
            "Percent = part ÷ whole × 100.",
            "90 ÷ 120 = 0.75.",
            "0.75 × 100 = 75%."
          ],
          explanation: "90 ÷ 120 = 0.75 = 75%."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Count Stretch",
      prompt:
        "Pretend you're stacking crates: do 6 slow shoulder rolls (one per 'crate'), then reach high to 'top off the wagon' and hold for 10 seconds. Shake out your hands.",
      scienceTieIn: "Gentle movement boosts blood flow to your brain, which helps you think clearly for the next problem.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fall math tool — ratios, percents, rates, or timelines — made a number feel like a real story today? Write the number and what it showed.",
      badge: { id: "harvest-math-synthesizer", name: "Harvest Math Synthesizer", emoji: "🌽" },
      estimatedMinutes: 7
    }
  }
};
