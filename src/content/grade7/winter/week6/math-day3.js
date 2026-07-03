// Grade 7 Math — Winter Expedition, Week 6 (Inventors & Engineers), Day 3.
// Topic: measurement and a materials budget for a prototype, pitched up to
// Grade 7 — proportional reasoning, scale drawings, unit rates, and percent
// (markup, discount, tax) applied to a build budget.

export const winterG7MathW6D3 = {
  id: "g7.winter.math.w6.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Math",
  topic: "Measurement, scale, and a proportional materials budget for a prototype",
  topicTag: "measurement-budget",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.3", "CCSS.7.G.A.1"],
  hook: "Every invention has to be measured, scaled, and paid for — and at Grade 7 the budget uses PROPORTIONS. You'll scale a drawing up to real size, find unit rates to compare prices, and apply percent for discounts and tax before the first cut. This is the real proportional math an engineer does to stay on budget.",
  miniLesson: [
    "A PROPORTION sets two ratios equal. If a scale drawing uses 1 cm = 4 cm real, then a 5 cm line represents 5 × 4 = 20 cm; solve 1/4 = 5/x to scale any length up or down.",
    "A UNIT RATE is a price per single unit, which lets you compare deals fairly. $12 for 4 m of strip is $12 ÷ 4 = $3 per meter; the material with the lower unit rate is cheaper per meter no matter the pack size.",
    "PERCENT adjusts a budget: a discount SUBTRACTS a percent of the price (20% off $30 = $30 − $6 = $24), while tax or markup ADDS one (8% tax on $24 = $24 + $1.92 = $25.92). Find the percent OF the amount first, then add or subtract."
  ],
  workedExample: {
    prompt: "A scale drawing of a sled uses 1 cm = 20 cm. On paper the sled base is 6 cm long and 3 cm wide. Insulating film costs $0.05 per real square cm. Find the real dimensions, the real area, and the film cost.",
    steps: [
      "Scale each length: real length = 6 × 20 = 120 cm; real width = 3 × 20 = 60 cm.",
      "Real area = length × width = 120 × 60 = 7,200 square cm.",
      "Cost = area × price per square cm = 7,200 × $0.05.",
      "7,200 × 0.05 = $360.00."
    ],
    answer: "Real size 120 cm × 60 cm; real area 7,200 square cm; film cost $360.00."
  },
  items: [
    {
      id: "g7.winter.math.w6.d3.q1",
      type: "numeric",
      stem: "A scale drawing uses 1 cm = 15 cm (real). A prototype ski is drawn 9 cm long. What is its REAL length in cm?",
      answer: 135,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Set up the proportion 1/15 = 9/x, or just multiply the drawing length by the scale.",
        "Real length = 9 × 15.",
        "9 × 15 = 135 cm."
      ],
      explanation: "Each drawn cm equals 15 real cm, so 9 × 15 = 135 cm."
    },
    {
      id: "g7.winter.math.w6.d3.q2",
      type: "numeric",
      stem: "Weather-strip is sold two ways: Pack A is $12 for 4 meters, Pack B is $21 for 6 meters. What is the UNIT RATE (dollars per meter) of the CHEAPER pack?",
      answer: 3,
      tolerance: 0,
      unit: "dollars per meter",
      hintLadder: [
        "Unit rate = total price ÷ meters, for each pack.",
        "Pack A: 12 ÷ 4 = $3/m. Pack B: 21 ÷ 6 = $3.50/m.",
        "The cheaper pack is A at $3 per meter."
      ],
      explanation: "Pack A: $12 ÷ 4 = $3.00 per meter. Pack B: $21 ÷ 6 = $3.50 per meter. The cheaper unit rate is $3 per meter.",
      misconceptionsTargeted: ["ignores-unit-rate"]
    },
    {
      id: "g7.winter.math.w6.d3.q3",
      type: "numeric",
      stem: "Your materials come to $40 before a discount. The hardware store gives inventors 25% off. In dollars, what is the price AFTER the discount?",
      answer: 30,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Find 25% of $40 first: 0.25 × 40.",
        "0.25 × 40 = $10 discount.",
        "Subtract: 40 − 10 = $30."
      ],
      explanation: "25% of $40 = 0.25 × 40 = $10. Discounted price = $40 − $10 = $30.",
      misconceptionsTargeted: ["percent-of-wrong-base"]
    },
    {
      id: "g7.winter.math.w6.d3.q4",
      type: "numeric",
      stem: "After discounts, your materials cost $30. Sales tax is 8%. What is the FINAL total in dollars, including tax?",
      answer: 32.4,
      tolerance: 0.01,
      unit: "dollars",
      hintLadder: [
        "Find 8% of $30: 0.08 × 30.",
        "0.08 × 30 = $2.40 tax.",
        "Add: 30 + 2.40 = $32.40."
      ],
      explanation: "8% of $30 = 0.08 × 30 = $2.40. Final total = $30 + $2.40 = $32.40."
    },
    {
      id: "g7.winter.math.w6.d3.q5",
      type: "short_answer",
      stem: "You need to cover a real panel that is 50 cm by 40 cm with insulating foam priced at $0.03 per square cm, then apply a 10% inventor's discount. Explain step by step how you find the final foam cost, and give the amount.",
      rubric: {
        level3: "Finds area (50 × 40 = 2,000 sq cm), computes pre-discount cost (2,000 × $0.03 = $60), takes 10% off correctly ($60 − $6 = $54), and explains each step with correct units.",
        level2: "Gets area and base cost right but the discount step is unclear or slightly off, OR one unit is dropped.",
        level1: "Wrong area or cost, or no clear proportional/percent steps."
      },
      exemplar: "First find the area: 50 cm × 40 cm = 2,000 square cm. Then the base cost: 2,000 × $0.03 = $60.00. Apply the 10% discount: 10% of $60 is $6, so $60 − $6 = $54.00. The final foam cost is $54.",
      hintLadder: [
        "Step 1: area = length × width.",
        "Step 2: base cost = area × price per square cm.",
        "Step 3: take 10% off — find 10% of the cost, then subtract."
      ]
    }
  ],
  reflectionPrompt: "If your build budget were cut by 30%, which material would you scale down first? Explain how you'd recalculate its cost using a proportion or a percent.",
  misconceptionBank: [
    {
      id: "ignores-unit-rate",
      label: "Compares total prices instead of unit rates",
      description: "Assumes the cheaper total price is the better deal without dividing to find price per unit.",
      coachMove: "Always divide price by quantity to get a per-unit rate, then compare the rates — the bigger pack isn't always the better value."
    },
    {
      id: "percent-of-wrong-base",
      label: "Applies a percent to the wrong number",
      description: "Takes the percent of the final or unrelated amount, or forgets to add/subtract after finding the percent.",
      coachMove: "Find the percent OF the correct starting amount first, then decide: discount SUBTRACTS it, tax or markup ADDS it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Buy?",
      prompt:
        "You need insulating tape. Would you rather buy Roll X at $8 for 2 meters, or Roll Y at $15 for 5 meters? Work out the price per meter for each BEFORE you choose — which is actually the better deal?",
      answer:
        "Roll X: $8 ÷ 2 = $4 per meter. Roll Y: $15 ÷ 5 = $3 per meter. Roll Y is the better deal at $3/m versus $4/m — comparing UNIT RATES, not total prices, is what reveals it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Scaled Prototype Budget Sheet",
      challenge:
        "Plan a proportional materials budget for a winter invention. Make a scale drawing, scale it up to real dimensions, price each material by its UNIT RATE, total the cost, then apply a discount and tax to see if it fits a $50 budget.",
      materials: ["Paper, ruler & pencil, OR a spreadsheet/calculator app"],
      steps: [
        "Make a scale drawing of your invention and write your scale (e.g., 1 cm = 10 cm).",
        "Scale at least two dimensions up to real size and compute a real area or length.",
        "Price each material using its unit rate (price per meter or per square cm) and total it.",
        "Apply a percent discount and a percent tax, then check the final total against a $50 budget."
      ],
      deliverable: "A scaled drawing plus a budget table (material, quantity, unit rate, line cost) with a grand total adjusted by discount and tax, fitting under $50.",
      choiceBoard: [
        "Make the scale drawing and a full budget table with discount and tax rows.",
        "Build the budget in a spreadsheet with formulas for unit rate, discount, and tax.",
        "Draw the invention to scale and label each part with its unit-rate cost."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Proportional Budget Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w6.d3.arena1",
          type: "numeric",
          stem: "A scale drawing uses 1 cm = 25 cm. A door panel is drawn 8 cm tall and 4 cm wide. Insulating sheet costs $0.01 per real square cm. What is the total sheet cost in dollars?",
          answer: 200,
          tolerance: 0,
          unit: "dollars",
          hintLadder: [
            "Scale each side: real height = 8 × 25, real width = 4 × 25.",
            "Real dims = 200 cm × 100 cm, so area = 200 × 100 = 20,000 sq cm.",
            "Cost = 20,000 × $0.01 = $200."
          ],
          explanation: "Real height = 8 × 25 = 200 cm; real width = 4 × 25 = 100 cm. Area = 200 × 100 = 20,000 sq cm. Cost = 20,000 × $0.01 = $200.00."
        },
        {
          id: "g7.winter.math.w6.d3.arena2",
          type: "numeric",
          stem: "Your materials total $80 before adjustments. Apply a 15% inventor's discount, then add 5% sales tax on the discounted price. What is the FINAL total in dollars?",
          answer: 71.4,
          tolerance: 0.01,
          unit: "dollars",
          hintLadder: [
            "Discount first: 15% of $80 = 0.15 × 80 = $12, so $80 − $12 = $68.",
            "Tax on the discounted price: 5% of $68 = 0.05 × 68 = $3.40.",
            "Final = $68 + $3.40 = $71.40."
          ],
          explanation: "15% of $80 = $12, so discounted = $68. 5% tax on $68 = $3.40. Final total = $68 + $3.40 = $71.40."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Scale-It-Up Stretch",
      prompt:
        "Draw a tiny 'scale' shape in the air with one finger, then 'scale it up' by tracing the same shape huge with your whole arm, keeping the proportions the same. Do a small-then-large pair for a square, a triangle, and a circle, breathing out on each big stretch.",
      scienceTieIn: "Scaling a shape while keeping its proportions is exactly what engineers do with scale drawings — and moving small-to-large trains your body's sense of ratio while the stretch resets your focus for careful figuring.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Proportions and percents let engineers scale and price anything fairly. Where in your own life could a unit rate ('per one') or a percent (discount or tip) help you spot the better deal?",
      badge: { id: "g7-winter-proportion-pro", name: "Proportion Prototype Pro", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
