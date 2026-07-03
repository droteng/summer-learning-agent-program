// Grade 5 Math — Winter Expedition, Week 6 (Inventors & Engineers), Day 3.
// Grade 5 counterpart of g6.winter.math.w6.d3. Same topic (measurement and a
// materials budget for a prototype) pitched down to Grade 5: whole numbers
// only, friendly unit prices, area = length × width of rectangles, and a
// simple meter↔centimeter conversion (1 m = 100 cm). Wintry STEM tone.

export const winterG5MathW6D3 = {
  id: "g5.winter.math.w6.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 3,
  subject: "Math",
  topic: "Measurement and a materials budget for a prototype",
  topicTag: "measurement-budget",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.MATH.CONTENT.5.NF.B.4.B", "CCSS.MATH.CONTENT.5.MD.A.1"],
  hook: "Every invention has to be measured and paid for. Before you build your winter model, you need to measure the materials, figure out the area you will cover, and add up the costs to stay on budget. Today you do the real math an inventor does before the first cut.",
  miniLesson: [
    "Length is measured in one direction (cm, m). Area covers a flat surface and is measured in SQUARE units. For a rectangle, area = length × width.",
    "Keep your units the SAME before you calculate. If one side is in meters and another is in centimeters, change them to match first. Remember: 1 m = 100 cm.",
    "A materials budget is a running total: for each material, multiply how many you need by its price, then ADD the parts together. Keep the total at or under your budget limit."
  ],
  workedExample: {
    prompt: "You are covering a rectangular window with insulating film. The window is 50 cm wide and 30 cm tall. Film costs $1 per 100 square cm. What is the area, and how many square cm of film do you need?",
    steps: [
      "Area of a rectangle = length × width = 50 cm × 30 cm.",
      "50 × 30 = 1,500 square cm.",
      "So the window is 1,500 square cm.",
      "You need 1,500 square cm of film to cover it."
    ],
    answer: "Area = 1,500 square cm, so you need 1,500 square cm of film."
  },
  items: [
    {
      id: "g5.winter.math.w6.d3.q1",
      type: "numeric",
      stem: "A model sled base is a rectangle 100 cm long and 40 cm wide. What is its AREA in square cm?",
      answer: 4000,
      tolerance: 0,
      unit: "square cm",
      hintLadder: [
        "Area of a rectangle = length × width.",
        "Multiply 100 × 40.",
        "100 × 40 = 4,000 square cm."
      ],
      explanation: "Area = length × width = 100 × 40 = 4,000 square cm."
    },
    {
      id: "g5.winter.math.w6.d3.q2",
      type: "numeric",
      stem: "You buy 3 meters of weather-strip at $2 per meter and 3 packs of screws at $3 per pack. What is the TOTAL cost in dollars?",
      answer: 15,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Find each material's cost first: strip = 3 × $2, screws = 3 × $3.",
        "3 × 2 = 6 and 3 × 3 = 9.",
        "Add the parts: 6 + 9 = 15 dollars."
      ],
      explanation: "Weather-strip: 3 × $2 = $6. Screws: 3 × $3 = $9. Total: $6 + $9 = $15.",
      misconceptionsTargeted: ["add-before-multiply"]
    },
    {
      id: "g5.winter.math.w6.d3.q3",
      type: "numeric",
      stem: "A window is 2 m wide. Insulating tape is sold by the centimeter. How many CENTIMETERS of tape do you need to cover the full width once?",
      answer: 200,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "Change meters to centimeters: 1 m = 100 cm.",
        "2 m × 100 = ? cm.",
        "2 × 100 = 200 cm."
      ],
      explanation: "2 m × 100 cm per meter = 200 cm.",
      misconceptionsTargeted: ["unit-mismatch"]
    },
    {
      id: "g5.winter.math.w6.d3.q4",
      type: "numeric",
      stem: "Your build budget is $30. You spend $10 on foam, $9 on fabric, and $5 on tape. How many dollars do you have LEFT?",
      answer: 6,
      tolerance: 0,
      unit: "dollars",
      hintLadder: [
        "Add up everything you spent: 10 + 9 + 5.",
        "10 + 9 + 5 = 24.",
        "Subtract from the budget: 30 − 24 = 6 dollars left."
      ],
      explanation: "Spent: $10 + $9 + $5 = $24. Left: $30 − $24 = $6."
    },
    {
      id: "g5.winter.math.w6.d3.q5",
      type: "short_answer",
      stem: "You must cover a 20 cm by 10 cm panel with insulating foam. The foam costs $1 for every 10 square cm. Explain step by step how you find the total foam cost, and give the amount.",
      rubric: {
        level3: "Finds the area (20 × 10 = 200 sq cm), groups it into tens (200 ÷ 10 = 20 groups), multiplies by $1 (20 × $1 = $20), and explains the steps clearly with correct units.",
        level2: "Gets the area OR the cost right, but the explanation of one step is unclear or a unit is dropped.",
        level1: "Wrong area or wrong cost, or no clear steps."
      },
      exemplar: "First find the area: 20 cm × 10 cm = 200 square cm. The foam costs $1 for every 10 square cm, so I find how many groups of 10 are in 200: 200 ÷ 10 = 20 groups. Then 20 × $1 = $20. So the foam costs $20.",
      hintLadder: [
        "Step 1: area = length × width.",
        "Step 2: figure out how many groups of 10 square cm you have, then multiply by $1.",
        "20 × 10 = 200, then 200 ÷ 10 = 20 groups, so $20."
      ]
    }
  ],
  reflectionPrompt: "If your build budget were suddenly cut in half, which material would you reduce or swap first, and how would you recalculate the cost?",
  misconceptionBank: [
    {
      id: "add-before-multiply",
      label: "Adds quantities before multiplying by price",
      description: "Adds amounts of different materials together first, instead of finding each material's cost and then summing.",
      coachMove: "Cost each material by itself (how many × price), THEN add the costs. Line them up in a little table so the steps stay in order."
    },
    {
      id: "unit-mismatch",
      label: "Calculates with mismatched units",
      description: "Mixes meters and centimeters without changing them to match first.",
      coachMove: "Before any calculation, change everything to the SAME unit (remember 1 m = 100 cm), then compute."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Budget?",
      prompt:
        "You have $20 to insulate a small window. Would you rather buy 2 rolls of tape at $6 each plus one foam sheet at $7, OR one big foam sheet at $12 plus a tube of caulk at $4? Add up each option before you choose — and check which one actually fits the $20 budget!",
      answer:
        "Option 1: (2 × $6) + $7 = $12 + $7 = $19 — fits, $1 to spare. Option 2: $12 + $4 = $16 — fits, $4 to spare. Both fit, but Option 2 leaves more money left over. Now it is a design choice, not just a money one.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a Prototype Budget Sheet",
      challenge:
        "Plan the materials budget for a winter invention model. List each material with a how-many and a price, find each line's cost, add up the total, and make sure it fits a $25 budget.",
      materials: ["Paper & pencil or a spreadsheet/calculator app"],
      steps: [
        "Sketch your invention and list every material it needs.",
        "For each material, write how many you need and its price, then multiply for that line's cost.",
        "Add all the line costs to get a total, and compare it to a $25 budget limit.",
        "If you are over budget, change amounts or swap a material and recalculate."
      ],
      deliverable: "A budget table (material, how many, price, line cost) with a correct grand total that fits under $25.",
      choiceBoard: [
        "Make a neat budget table with a grand total row.",
        "Build the budget in a spreadsheet and let it add the totals for you.",
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
          id: "g5.winter.math.w6.d3.arena1",
          type: "numeric",
          stem: "A model needs 4 meters of rope at $2 per meter, 2 clamps at $5 each, and a $3 board. Your budget is $30. How many dollars are LEFT after buying everything?",
          answer: 9,
          tolerance: 0,
          unit: "dollars",
          hintLadder: [
            "Cost each part: rope 4 × $2, clamps 2 × $5, board $3.",
            "4 × 2 = 8, 2 × 5 = 10, board = 3. Total = 8 + 10 + 3.",
            "Total spent = $21, so 30 − 21 = $9 left."
          ],
          explanation: "Rope: 4 × $2 = $8. Clamps: 2 × $5 = $10. Board: $3. Total: $8 + $10 + $3 = $21. Left: $30 − $21 = $9."
        },
        {
          id: "g5.winter.math.w6.d3.arena2",
          type: "numeric",
          stem: "You must cover a rectangular door panel that is 2 m tall and 80 cm wide with insulating sheet. Change the sides to the same unit and find the AREA in square cm.",
          answer: 16000,
          tolerance: 0,
          unit: "square cm",
          hintLadder: [
            "Change 2 m to cm: 2 × 100 = 200 cm.",
            "Now both sides are in cm: 200 cm by 80 cm.",
            "Area = 200 × 80 = 16,000 square cm."
          ],
          explanation: "Change units first: 2 m = 200 cm. Area = 200 × 80 = 16,000 square cm."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Measure-It-Out March",
      prompt:
        "Stand up and 'measure' the room with your body: take 10 big heel-to-toe steps and count each one, then stretch your arms wide to guess a 'meter' and hold for 5 breaths. Shake out your hands and roll your shoulders.",
      scienceTieIn: "Guessing length with your own body — a step, an arm-span — is exactly how early builders measured before rulers existed, and moving refreshes the focus you need for careful math.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Inventors stay on budget by measuring twice and adding carefully. Where in your own life could a simple budget table (list, prices, total) help you plan something?",
      badge: { id: "g5-winter-budget-blueprint-boss", name: "Budget Blueprint Boss", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
