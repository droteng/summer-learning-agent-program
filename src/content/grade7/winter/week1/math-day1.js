// Grade 7 Math — Winter Expedition, Week 1 (Winter Warm-Up), Day 1.
// Topic: analyzing winter snowfall data with proportional relationships,
// unit rates, and rational numbers (the Grade 7 level-up of Grade 6's
// place-value & rounding snowfall work).

export const winterG7MathW1D1 = {
  id: "g7.winter.math.w1.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Proportional relationships and unit rates with winter snowfall data",
  topicTag: "proportional-relationships-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.1", "CCSS.7.RP.A.2"],
  hook: "A blizzard doesn't just dump snow — it dumps it at a RATE. Knowing that a storm drops snow at 3.5 cm per hour lets you predict the total, compare storms, and warn a town before the roads vanish. Today you warm up your number sense on winter data using rates and proportional reasoning.",
  miniLesson: [
    "A unit rate tells you 'how much per one.' If 14 cm of snow falls in 4 hours, divide to find the rate: 14 ÷ 4 = 3.5 cm per hour.",
    "A proportional relationship has a constant rate (called k, the constant of proportionality). If snow falls at a steady 3.5 cm/hr, then snow = 3.5 × hours — double the hours, double the snow.",
    "Rates let you COMPARE fairly. A storm that drops 21 cm in 6 hours (3.5 cm/hr) is heavier per hour than one that drops 20 cm in 8 hours (2.5 cm/hr), even though the second lasted longer."
  ],
  workedExample: {
    prompt: "A steady snowstorm drops 27 cm of snow in 6 hours. Find the unit rate in cm per hour, then predict the total after 10 hours if it keeps the same rate.",
    steps: [
      "Find the unit rate: divide total snow by total time — 27 ÷ 6 = 4.5 cm per hour.",
      "This is the constant of proportionality k = 4.5, so snow = 4.5 × hours.",
      "Predict 10 hours: multiply the rate by 10 — 4.5 × 10 = 45 cm.",
      "So the storm falls at 4.5 cm/hr and would leave about 45 cm after 10 hours."
    ],
    answer: "Unit rate = 4.5 cm/hr; predicted total after 10 hours = 45 cm."
  },
  items: [
    {
      id: "g7.winter.math.w1.d1.q1",
      type: "numeric",
      stem: "A snowstorm drops 18 cm of snow in 4 hours at a steady rate. What is the unit rate in centimeters per hour?",
      answer: 4.5,
      tolerance: 0,
      unit: "cm/hr",
      hintLadder: [
        "Unit rate means 'per one hour' — so divide the snow by the hours.",
        "Set up 18 ÷ 4.",
        "18 ÷ 4 = 4.5 cm per hour."
      ],
      explanation: "A unit rate is total ÷ time: 18 cm ÷ 4 hr = 4.5 cm per hour."
    },
    {
      id: "g7.winter.math.w1.d1.q2",
      type: "multiple_choice",
      stem: "Two storms are compared. Storm A: 24 cm in 3 hours. Storm B: 30 cm in 5 hours. Which storm has the GREATER snowfall rate per hour?",
      choices: [
        "Storm A (it drops more per hour)",
        "Storm B (it drops more per hour)",
        "They fall at exactly the same rate",
        "You cannot compare them without more data"
      ],
      answerIndex: 0,
      explanation: "Find each unit rate: Storm A is 24 ÷ 3 = 8 cm/hr; Storm B is 30 ÷ 5 = 6 cm/hr. 8 > 6, so Storm A has the greater rate even though Storm B dropped more total snow.",
      hintLadder: [
        "Don't compare the totals — compare the RATE per hour.",
        "Divide each storm's snow by its hours.",
        "Storm A = 8 cm/hr, Storm B = 6 cm/hr; which is bigger?"
      ],
      misconceptionsTargeted: ["bigger-total-means-faster"]
    },
    {
      id: "g7.winter.math.w1.d1.q3",
      type: "numeric",
      stem: "Snow falls at a constant rate of 3.5 cm per hour. Using the proportional relationship snow = 3.5 × hours, how many centimeters fall in 8 hours?",
      answer: 28,
      tolerance: 0,
      unit: "cm",
      hintLadder: [
        "In a proportional relationship, total = rate × hours.",
        "Multiply 3.5 by 8.",
        "3.5 × 8 = 28 cm."
      ],
      explanation: "With constant rate k = 3.5, snow = 3.5 × 8 = 28 cm."
    },
    {
      id: "g7.winter.math.w1.d1.q4",
      type: "multiple_choice",
      stem: "Which table below shows a PROPORTIONAL relationship between hours (h) and snowfall (cm)?",
      choices: [
        "h: 2, 4, 6 → cm: 5, 10, 15 (5 more cm each 2 hours, starting from 0)",
        "h: 2, 4, 6 → cm: 6, 10, 14 (adds 4 cm each 2 hours, but starts at 2)",
        "h: 2, 4, 6 → cm: 4, 9, 15 (uneven jumps)",
        "h: 2, 4, 6 → cm: 8, 8, 8 (never changes)"
      ],
      answerIndex: 0,
      explanation: "A relationship is proportional only if cm ÷ h gives the SAME constant every time and passes through (0,0). For choice A: 5÷2 = 2.5, 10÷4 = 2.5, 15÷6 = 2.5 — a constant rate of 2.5 cm/hr. The others give different ratios at different rows.",
      hintLadder: [
        "For proportional data, cm ÷ hours must equal the SAME number in every row.",
        "Test each row: divide the snowfall by the hours.",
        "Choice A gives 2.5 every time; the others don't."
      ]
    },
    {
      id: "g7.winter.math.w1.d1.q5",
      type: "short_answer",
      stem: "Town A reports 45 cm of snow over 9 hours; Town B reports 32 cm over 8 hours. A friend says Town A's storm was 'heavier' just because 45 is a bigger number. Use unit rates to explain whether the friend is right.",
      rubric: {
        level3: "Computes both unit rates (A = 45÷9 = 5 cm/hr, B = 32÷8 = 4 cm/hr), states A's rate is greater, AND explains that comparing per-hour rates — not the raw totals — is the fair way to judge which storm was heavier.",
        level2: "Computes at least one rate correctly and reaches the right conclusion, but the reasoning about why rates beat raw totals is thin.",
        level1: "Compares only the totals or gives no rate calculation."
      },
      exemplar: "I found each unit rate. Town A: 45 ÷ 9 = 5 cm per hour. Town B: 32 ÷ 8 = 4 cm per hour. Town A's rate (5 cm/hr) really is greater than Town B's (4 cm/hr), so the friend happens to be right — but not for the right reason. You can't tell from the total alone; you have to compare the per-hour rates, because a longer storm can pile up a bigger total at a slower rate.",
      hintLadder: [
        "Turn each storm into a per-hour rate by dividing.",
        "Town A: 45 ÷ 9, Town B: 32 ÷ 8.",
        "Then explain why comparing rates is fairer than comparing totals."
      ]
    }
  ],
  reflectionPrompt: "Where in a winter day would knowing a RATE beat knowing a total — snow per hour, salt spread per kilometer of road, degrees dropped per hour? Pick one and say why the rate is more useful.",
  misconceptionBank: [
    {
      id: "bigger-total-means-faster",
      label: "Thinks the bigger total automatically means the faster rate",
      description: "Compares raw snowfall totals instead of dividing by time, so a long slow storm looks 'heavier' than a short intense one.",
      coachMove: "Have the student compute total ÷ time for each storm and compare the per-hour rates side by side, so the constant rate — not the total — decides."
    },
    {
      id: "proportional-needs-origin",
      label: "Thinks any steadily-increasing table is proportional",
      description: "Assumes a table that adds a fixed amount each step is proportional, even when it doesn't start at (0,0) so the ratio isn't constant.",
      coachMove: "Test cm ÷ hours in every row: it must give the SAME constant AND pass through (0,0) to be proportional."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Two-Storm Riddle",
      prompt:
        "Two blizzards brag about being the biggest. Blizzard Frost dropped 36 cm in 4 hours. Blizzard Chill dropped 40 cm in 8 hours. Chill says, 'I dumped MORE snow, so I'm the heavier storm!' Using rates, who really snowed harder — and why is Chill's boast misleading?",
      answer:
        "Compare per-hour rates: Frost = 36 ÷ 4 = 9 cm/hr; Chill = 40 ÷ 8 = 5 cm/hr. Frost snowed harder at 9 cm/hr. Chill only has a bigger total because it lasted twice as long — its rate is actually lower.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Storm Rate Ranking Board",
      challenge:
        "Invent four made-up blizzards. For each, give a total snowfall (in cm) and a duration (in hours). Build a 'Storm Rate Ranking Board' that computes each storm's unit rate in cm per hour and ranks them from fastest to slowest snowfall rate — NOT by total.",
      steps: [
        "Name four blizzards and give each a snowfall total and a number of hours.",
        "Compute each storm's unit rate: snowfall ÷ hours = cm per hour.",
        "Rank the storms from greatest to least RATE (not greatest total).",
        "Add one sentence pointing out a storm that has a big total but a low rate, or a small total but a high rate."
      ],
      deliverable: "A ranking board listing four storms with their totals, hours, computed cm/hr rates, and a rate-based ranking.",
      choiceBoard: [
        "Draw or type a three-column table (total, hours, rate) with the ranking.",
        "Make a bar-chart poster where each frosty bar's height is a storm's cm/hr rate.",
        "Write a mock TV weather segment announcing which storm snowed HARDEST by rate and why the biggest total wasn't the winner."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Proportional Rate Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w1.d1.arena1",
          type: "numeric",
          stem: "Snow falls at a constant 2.5 cm per hour. A road closes once 30 cm have piled up. Starting from bare pavement, how many HOURS until the road closes?",
          answer: 12,
          tolerance: 0,
          unit: "hours",
          hintLadder: [
            "You know the rate (2.5 cm/hr) and the target total (30 cm); you need the time.",
            "Rearrange total = rate × hours to hours = total ÷ rate.",
            "30 ÷ 2.5 = 12 hours."
          ],
          explanation: "Since total = rate × hours, hours = total ÷ rate = 30 ÷ 2.5 = 12 hours."
        },
        {
          id: "g7.winter.math.w1.d1.arena2",
          type: "multiple_choice",
          stem: "A plow clears 15 km of road using 45 kg of salt at a steady rate. At the SAME rate, how much salt is needed for 20 km of road?",
          choices: [
            "60 kg",
            "50 kg",
            "65 kg",
            "45 kg"
          ],
          answerIndex: 0,
          explanation: "Find the unit rate: 45 kg ÷ 15 km = 3 kg per km. For 20 km: 3 × 20 = 60 kg. (You can also scale proportionally: 45 × (20/15) = 60.)",
          hintLadder: [
            "First find salt per kilometer: 45 ÷ 15.",
            "That's 3 kg per km.",
            "Multiply the rate by 20 km: 3 × 20."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Rate Ramp",
      prompt:
        "Stand up. A 'fast storm' means march in place quickly for 15 seconds; a 'slow storm' means march slowly for 15 seconds. Have someone call a snowfall rate (like '8 cm/hr!' or '2 cm/hr!') and match your marching speed to how hard it's 'snowing.' Do 6 rounds, alternating fast and slow.",
      scienceTieIn: "Matching your pace to a called-out number links movement with numeric reasoning, and the bursts of activity pump oxygen to your brain to sharpen the focus you need for rate problems.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Winter is full of rates — snow per hour, degrees dropped per hour, salt per kilometer. Write down one winter rate you could actually measure, and explain what the 'per one' part tells you that a plain total would hide.",
      badge: { id: "g7-winter-snow-rate-analyst", name: "Snow Rate Analyst", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
