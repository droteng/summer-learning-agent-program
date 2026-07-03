// Grade 6 Math — Winter Expedition, Week 6 (Inventors & Engineers), Day 3.
// Topic: measurement and a materials budget (units, area/length, adding costs)
// for building a prototype.

export const winterG6MathW6D3 = {
  id: "g6.winter.math.w6.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Math",
  topic: "Measurement and a materials budget for a prototype",
  topicTag: "measurement-budget",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.G.A.1", "CCSS.6.NS.B.3"],
  hook: "Every invention has to be measured and paid for. Before you build your winter prototype, you need to measure the materials, figure the area you'll cover, and add up the costs to stay on budget. Today you do the real math an engineer does before the first cut.",
  miniLesson: [
    "Length is measured in one dimension (cm, m); area covers a surface and is measured in SQUARE units. For a rectangle, area = length × width.",
    "Always keep your units the same before you calculate. If one measurement is in meters and another in centimeters, convert first (1 m = 100 cm).",
    "A materials budget is a running total: multiply each material's unit price by how much you need, then ADD the parts. Keep the total at or under your budget limit."
  ],
  workedExample: {
    prompt: "You are covering a rectangular window with insulating film. The window is 60 cm wide and 40 cm tall. Film costs $0.01 per square cm. What is the area, and what does the film cost?",
    steps: [
      "Area of a rectangle = length × width = 60 cm × 40 cm.",
      "60 × 40 = 2,400 square cm.",
      "Cost = area × price per square cm = 2,400 × $0.01.",
      "2,400 × 0.01 = $24.00."
    ],
    answer: "Area = 2,400 square cm; film cost = $24.00."
  },
  items: [
    {
      id: "g6.winter.math.w6.d3.q1",
      type: "numeric",
      stem: "A prototype sled base is a rectangle 120 cm long and 50 cm wide. What is its AREA in square cm?",
      answer: 6000,
      tolerance: 0,
      unit: "square cm",
      hintLadder: [
        "Area of a rectangle = length × width.",
        "Multiply 120 × 50.",
        "120 × 50 = 6,000 square cm."
      ],
      explanation: "Area = length × width = 120 × 50 = 6,000 square cm."
    },
    {
      id: "g6.winter.math.w6.d3.q2",
      type: "numeric",
      stem: "You buy 3 meters of weather-strip at $2 per meter and 4 packs of screws at $3 per pack. What is the TOTAL cost in dollars?",
      answer: 18,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Find each material's cost first: strip = 3 × $2, screws = 4 × $3.",
        "3 × 2 = 6 and 4 × 3 = 12.",
        "Add the parts: 6 + 12 = 18 dollars."
      ],
      explanation: "Weather-strip: 3 × $2 = $6. Screws: 4 × $3 = $12. Total: $6 + $12 = $18.",
      misconceptionsTargeted: ["add-before-multiply"]
    },
    {
      id: "g6.winter.math.w6.d3.q3",
      type: "numeric",
      stem: "A window is 1.5 m wide. Insulating tape is sold by the centimeter. How many CENTIMETERS of tape do you need to cover the full width once?",
      answer: 150,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Convert meters to centimeters: 1 m = 100 cm.",
        "1.5 m × 100 = ? cm.",
        "1.5 × 100 = 150 cm."
      ],
      explanation: "1.5 m × 100 cm/m = 150 cm.",
      misconceptionsTargeted: ["unit-mismatch"]
    },
    {
      id: "g6.winter.math.w6.d3.q4",
      type: "numeric",
      stem: "Your build budget is $30. You spend $12 on foam, $9 on fabric, and $6 on tape. How many dollars do you have LEFT?",
      answer: 3,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Add up everything you spent: 12 + 9 + 6.",
        "12 + 9 + 6 = 27.",
        "Subtract from the budget: 30 − 27 = 3 dollars left."
      ],
      explanation: "Spent: $12 + $9 + $6 = $27. Left: $30 − $27 = $3."
    },
    {
      id: "g6.winter.math.w6.d3.q5",
      type: "short_answer",
      stem: "You must cover a 30 cm by 20 cm panel with insulating foam that costs $0.02 per square cm. Explain step by step how you find the total foam cost, and give the amount.",
      rubric: {
        level3: "Finds area (30 × 20 = 600 sq cm), multiplies by unit price (600 × $0.02 = $12), and explains both steps clearly with correct units.",
        level2: "Gets the area OR the cost right but the explanation of one step is unclear or a unit is dropped.",
        level1: "Wrong area or wrong cost, or no clear steps."
      },
      exemplar: "First find the area: 30 cm × 20 cm = 600 square cm. Then multiply the area by the price per square cm: 600 × $0.02 = $12.00. So the foam costs $12.",
      hintLadder: [
        "Step 1: area = length × width.",
        "Step 2: cost = area × price per square cm.",
        "30 × 20 = 600, then 600 × 0.02 = $12."
      ]
    }
  ],
  reflectionPrompt: "If your build budget were suddenly cut in half, which material would you reduce or swap first, and how would you recalculate the cost?",
  misconceptionBank: [
    {
      id: "add-before-multiply",
      label: "Adds quantities before multiplying by price",
      description: "Adds amounts of different materials together first instead of finding each material's cost, then summing.",
      coachMove: "Cost each material separately (quantity × unit price), THEN add the costs. Line them up in a little table so the steps stay in order."
    },
    {
      id: "unit-mismatch",
      label: "Calculates with mismatched units",
      description: "Mixes meters and centimeters without converting first.",
      coachMove: "Before any calculation, convert everything to the SAME unit (remember 1 m = 100 cm), then compute."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Budget?",
      prompt:
        "You have $20 to insulate a small window. Would you rather buy 2 rolls of tape at $6 each plus one foam sheet at $7, OR one big foam sheet at $15 plus a tube of caulk at $4? Add up each option before you choose — and check which one actually fits the $20 budget!",
      answer:
        "Option 1: (2 × $6) + $7 = $12 + $7 = $19 — fits, $1 to spare. Option 2: $15 + $4 = $19 — also fits, $1 to spare. Both come to $19! Now it's a design choice, not a money one.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Prototype Budget Sheet",
      challenge:
        "Plan the materials budget for a winter invention prototype. List each material with a quantity and a unit price, calculate each line's cost, add up the total, and make sure it fits a $25 budget.",
      materials: ["Paper & pencil or a spreadsheet/calculator app"],
      steps: [
        "Sketch your invention and list every material it needs.",
        "For each material, write a quantity and a unit price, then multiply for that line's cost.",
        "Add all the line costs to get a total, and compare it to a $25 budget limit.",
        "If you're over budget, adjust quantities or swap a material and recalculate."
      ],
      deliverable: "A budget table (material, quantity, unit price, line cost) with a correct grand total that fits under $25.",
      choiceBoard: [
        "Make a neat budget table with a grand total row.",
        "Build the budget in a spreadsheet and use it to add the totals automatically.",
        "Draw your invention labeled with each material's cost pointing to the part it buys."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Budget Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w6.d3.arena1",
          type: "numeric",
          stem: "A prototype needs 5 meters of rope at $2 per meter, 3 clamps at $4 each, and a $5 board. Your budget is $30. How many dollars are LEFT after buying everything?",
          answer: 3,
          tolerance: 0,
          unit: "dollars",
          hintLadder: [
            "Cost each part: rope 5 × $2, clamps 3 × $4, board $5.",
            "5 × 2 = 10, 3 × 4 = 12, board = 5. Total = 10 + 12 + 5.",
            "Total spent = $27, so 30 − 27 = $3 left."
          ],
          explanation: "Rope: 5 × $2 = $10. Clamps: 3 × $4 = $12. Board: $5. Total: $10 + $12 + $5 = $27. Left: $30 − $27 = $3."
        },
        {
          id: "g6.winter.math.w6.d3.arena2",
          type: "numeric",
          stem: "You must cover a rectangular door panel 2 m tall and 90 cm wide with insulating sheet. Convert to the same unit and find the AREA in square cm.",
          answer: 18000,
          tolerance: 0,
          unit: "square cm",
          hintLadder: [
            "Convert 2 m to cm: 2 × 100 = 200 cm.",
            "Now both sides are in cm: 200 cm by 90 cm.",
            "Area = 200 × 90 = 18,000 square cm."
          ],
          explanation: "Convert first: 2 m = 200 cm. Area = 200 × 90 = 18,000 square cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Measure-It-Out March",
      prompt:
        "Stand up and 'measure' the room with your body: take 10 big heel-to-toe steps counting each one, then stretch your arms wide to estimate a 'meter' and hold for 5 breaths. Shake out your hands and roll your shoulders.",
      scienceTieIn: "Estimating length with your own body — a step, an arm-span — is exactly how early builders measured before rulers existed, and moving refreshes the focus you need for careful calculation.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Engineers stay on budget by measuring twice and adding carefully. Where in your own life could a simple budget table (list, prices, total) help you plan something?",
      badge: { id: "budget-blueprint-boss", name: "Budget Blueprint Boss", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
