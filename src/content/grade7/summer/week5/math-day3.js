// Grade 7 Math — Summer Voyage, Week 5 (Earth and Inventions), Day 3.
// Topic: measurement, scale, percent & cost/benefit analysis. Grade 7 rigor:
// scale factors, percent change, and comparing options by cost and benefit —
// the math an inventor uses to prototype and pitch a real product.

export const summerG7MathW5D3 = {
  id: "g7.summer.math.w5.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 3,
  subject: "Math",
  topic: "Measurement, scale, percent & cost/benefit analysis (proportions, percent change)",
  topicTag: "scale-percent-cost-benefit",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.3", "CCSS.7.G.A.1"],
  hook: "Before an invention gets built, it gets measured, scaled, priced, and compared. Today you use scale drawings, percent change, and cost/benefit math — the exact tools inventors use to decide if an idea is worth building.",
  miniLesson: [
    "A scale tells you how a drawing maps to real life. If the scale is 1 cm : 20 cm, then every 1 cm on paper stands for 20 cm in reality — multiply the drawing length by the scale factor to get the real length.",
    "Percent change = (new − old) ÷ old × 100. A positive result is an increase; a negative result is a decrease. Example: a price drops from $50 to $40 → (40 − 50) ÷ 50 × 100 = −20%, a 20% decrease.",
    "Cost/benefit analysis compares what you pay against what you gain. To compare options fairly, put them on the same footing — like cost PER unit of benefit (dollars per liter cleaned, or savings per month) — then choose the better value."
  ],
  workedExample: {
    prompt: "An inventor draws a solar panel at a scale of 1 cm : 25 cm. The drawing is 6 cm wide. A store panel costs $80; the inventor's version would cost $68. What is the real width, and the percent change in cost?",
    steps: [
      "Real width = drawing length × scale factor = 6 × 25 = 150 cm.",
      "Percent change in cost uses (new − old) ÷ old × 100.",
      "(68 − 80) ÷ 80 = −12 ÷ 80 = −0.15.",
      "−0.15 × 100 = −15%, so the inventor's panel is 15% CHEAPER."
    ],
    answer: "Real width = 150 cm; the cost change is −15% (a 15% decrease)."
  },
  items: [
    {
      id: "g7.summer.math.w5.d3.q1",
      type: "numeric",
      stem: "An invention blueprint uses the scale 1 cm : 40 cm. A part measures 7 cm on the blueprint. How wide is the real part, in centimeters?",
      answer: 280,
      tolerance: 0,
      unit: "centimeters",
      hintLadder: [
        "Each 1 cm on paper stands for 40 cm in real life.",
        "Multiply the drawing length by the scale factor.",
        "7 × 40 = 280 cm."
      ],
      explanation: "Real length = drawing length × scale factor = 7 × 40 = 280 cm."
    },
    {
      id: "g7.summer.math.w5.d3.q2",
      type: "numeric",
      stem: "A prototype's cost drops from $120 to $90 after a redesign. What is the percent DECREASE in cost? (Enter the number of percent.)",
      answer: 25,
      tolerance: 0,
      unit: "percent",
      hintLadder: [
        "Percent change = (new − old) ÷ old × 100.",
        "The cost fell by 120 − 90 = $30. Divide that drop by the ORIGINAL 120.",
        "30 ÷ 120 = 0.25, so 0.25 × 100 = 25% decrease."
      ],
      explanation: "Change = 120 − 90 = 30 off the original 120. 30 ÷ 120 = 0.25 = 25% decrease."
    },
    {
      id: "g7.summer.math.w5.d3.q3",
      type: "numeric",
      stem: "A water filter that cost $60 goes UP in price by 15%. What is the new price, in dollars?",
      answer: 69,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Find 15% of $60 first.",
        "15% of 60 = 0.15 × 60 = $9.",
        "It's an increase, so add: 60 + 9 = $69."
      ],
      explanation: "15% of 60 = 0.15 × 60 = 9. New price = 60 + 9 = $69."
    },
    {
      id: "g7.summer.math.w5.d3.q4",
      type: "multiple_choice",
      stem: "Two solar chargers clean-charge phones. Charger A: $48 and charges 6 phones per day. Charger B: $60 and charges 10 phones per day. Using cost PER phone-per-day, which is the better value?",
      choices: [
        "Charger A, at $8.00 per phone/day",
        "Charger B, at $6.00 per phone/day",
        "They are exactly equal",
        "Charger A, at $6.00 per phone/day"
      ],
      answerIndex: 1,
      explanation: "Charger A: 48 ÷ 6 = $8.00 per phone/day. Charger B: 60 ÷ 10 = $6.00 per phone/day. B costs less per unit of benefit, so B is the better value.",
      hintLadder: [
        "Put both on the same footing: cost divided by phones charged.",
        "Charger A: 48 ÷ 6. Charger B: 60 ÷ 10.",
        "A = $8.00 each, B = $6.00 each — the lower cost per phone wins."
      ],
      misconceptionsTargeted: ["cheaper-sticker-is-better-value"]
    },
    {
      id: "g7.summer.math.w5.d3.q5",
      type: "short_answer",
      stem: "An inventor's LED lamp uses $18 of electricity a year. A new design cuts that to $12 a year but costs $24 more to buy. Explain how you'd decide if the new design is worth it, and after how many years it pays for itself.",
      rubric: {
        level3: "Finds the yearly SAVINGS ($18 − $12 = $6/yr), divides the extra cost by the savings (24 ÷ 6 = 4 years), and concludes it's worth it if kept longer than 4 years — with clear reasoning.",
        level2: "Finds the savings and payback idea but the arithmetic or conclusion is incomplete (e.g., gets $6/yr but not the 4 years).",
        level1: "No valid comparison of savings to extra cost."
      },
      exemplar: "The new design saves 18 − 12 = $6 every year. It costs $24 more up front, so it pays for itself after 24 ÷ 6 = 4 years. If the inventor uses the lamp longer than 4 years, the new design is worth it because the savings outweigh the extra cost.",
      hintLadder: [
        "First find how much the new design SAVES each year.",
        "Savings per year = 18 − 12 = $6. The extra cost is $24.",
        "Divide the extra cost by the yearly savings: 24 ÷ 6 = 4 years to pay off."
      ]
    }
  ],
  reflectionPrompt: "Where have you compared two options by price AND what you get — like snacks by price-per-gram, or apps by cost-per-month? Write one cost/benefit comparison you could actually make.",
  misconceptionBank: [
    {
      id: "cheaper-sticker-is-better-value",
      label: "Assumes the lower sticker price is always the better value",
      description: "Compares the total price without dividing by the benefit, so it ignores cost PER unit.",
      coachMove: "Always divide cost by what you get (per phone, per liter, per year). The lowest price-per-unit is the real value, not the lowest sticker."
    },
    {
      id: "percent-change-wrong-base",
      label: "Divides percent change by the new number instead of the original",
      description: "Uses the new value as the base, so the percent change comes out wrong.",
      coachMove: "Percent change always divides by the ORIGINAL (old) value: (new − old) ÷ old × 100."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather? (Best Value)",
      prompt:
        "You're buying batteries for your invention. Would you rather buy Pack A: 8 batteries for $6.40, or Pack B: 12 batteries for $8.40? Work out the price PER battery for each before you choose the better value!",
      answer:
        "Pack A: 6.40 ÷ 8 = $0.80 per battery. Pack B: 8.40 ÷ 12 = $0.70 per battery. Pack B is the better value at $0.70 each.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Scale-and-Price Your Invention",
      challenge:
        "Make a scale drawing of your invention and build a mini cost sheet. Pick a scale, draw one part to scale, then price two versions and compute the percent change between them.",
      materials: ["Ruler, paper & pencil, OR a drawing app with a grid"],
      steps: [
        "Choose a scale (e.g., 1 cm : 10 cm) and write it on your drawing.",
        "Draw one part, then use the scale factor to label its REAL size.",
        "Price a 'basic' version and an 'upgraded' version of your invention.",
        "Compute the percent change between the two prices using (new − old) ÷ old × 100."
      ],
      deliverable: "A labeled scale drawing plus a two-price cost sheet showing the percent change between versions.",
      choiceBoard: [
        "Draw the scaled part and show the price percent-change calculation.",
        "Make a 'spec sheet' poster listing real dimensions and cost-per-unit of benefit.",
        "Write a short pitch that uses your percent-change number to argue the upgrade is worth it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cost/Benefit Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w5.d3.arena1",
          type: "numeric",
          stem: "An inventor sells a gadget for $45, then RAISES the price by 20%. A month later she gives a 10% discount off that new price. What is the final price, in dollars?",
          answer: 48.6,
          tolerance: 0.01,
          unit: "dollars",
          hintLadder: [
            "First raise $45 by 20%: 45 × 1.20.",
            "45 × 1.20 = $54. Now take 10% OFF the $54, not the original $45.",
            "54 × 0.90 = $48.60."
          ],
          explanation: "Raise: 45 × 1.20 = 54. Then 10% off 54: 54 × 0.90 = $48.60. (The discount applies to the NEW price, so it's not back to $45.)"
        },
        {
          id: "g7.summer.math.w5.d3.arena2",
          type: "short_answer",
          stem: "Two water-cleaning inventions: Filter X costs $90 and cleans 300 liters before wearing out. Filter Y costs $150 and cleans 600 liters. Which is the better value per liter, and by how much per liter?",
          rubric: {
            level3: "Computes both cost-per-liter ($0.30/L and $0.25/L), identifies Filter Y as the better value, AND states the $0.05/L difference.",
            level2: "Computes both rates and picks Y but omits or miscomputes the per-liter difference.",
            level1: "Does not use cost-per-liter or reaches a wrong conclusion."
          },
          exemplar: "Filter X: 90 ÷ 300 = $0.30 per liter. Filter Y: 150 ÷ 600 = $0.25 per liter. Filter Y is the better value because it costs less per liter — $0.05 less per liter than Filter X.",
          hintLadder: [
            "Turn each into a cost PER liter by dividing dollars by liters.",
            "Filter X: 90 ÷ 300. Filter Y: 150 ÷ 600.",
            "X = $0.30/L, Y = $0.25/L — subtract to find the $0.05 difference."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Scale-Up Stretch",
      prompt:
        "Start small and 'scale up': curl into a tiny ball (scale 1), then grow to half-height (scale 2), then reach to full height on tiptoes (scale 3). Hold the tall pose and breathe, then shrink back down. Repeat twice.",
      scienceTieIn:
        "Scaling your body up and down is exactly like a scale drawing — every part grows by the same factor, keeping the proportions the same. Movement also boosts blood flow to sharpen your math focus.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Inventors decide with numbers. Write about one cost/benefit choice you made today — what you paid, what you got, and whether it was worth it. Was there a better 'value per unit'?",
      badge: { id: "g7-cost-benefit-calculator", name: "Cost/Benefit Calculator", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
