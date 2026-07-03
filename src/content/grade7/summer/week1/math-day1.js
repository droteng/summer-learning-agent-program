// Grade 7 Math — Summer Voyage, Week 1 (Explorer Mode), Day 1.
// Topic: proportional reasoning & ratios review — a Grade 7 diagnostic on unit
// rates and equivalent ratios, framed as gearing up for a summer expedition.

export const summerG7MathW1D1 = {
  id: "g7.summer.math.w1.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Proportional reasoning & ratios review (unit rates, equivalent ratios)",
  topicTag: "proportional-reasoning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.1", "CCSS.7.RP.A.2"],
  hook: "Every explorer packs, paces, and plans using rates: miles per hour, liters per person, cost per mile. Today you gear up by mastering unit rates and equivalent ratios — the math that keeps an expedition on track.",
  miniLesson: [
    "A unit rate is a ratio written 'per 1': 120 miles in 3 hours is a unit rate of 40 miles per 1 hour. Divide the first quantity by the second to find it.",
    "Two ratios are proportional if they simplify to the same unit rate. 6:4 and 9:6 are proportional because both reduce to 3:2 (1.5 per 1).",
    "To solve a proportion, find the constant of proportionality k (the unit rate) and multiply: if trail mix is 3 cups nuts per 5 cups oats, then k = 3/5 and any amount of oats × 3/5 gives the nuts."
  ],
  workedExample: {
    prompt: "A hiking group covers 18 kilometers in 4 hours at a steady pace. What is their unit rate in kilometers per hour, and how far would they go in 7 hours?",
    steps: [
      "Unit rate = distance ÷ time = 18 ÷ 4 = 4.5 km per hour.",
      "This is the constant of proportionality: k = 4.5.",
      "For 7 hours, multiply: 4.5 × 7 = 31.5 km.",
      "Check: the ratio 18:4 and 31.5:7 both reduce to 4.5:1 — proportional."
    ],
    answer: "4.5 km/h; they would travel 31.5 km in 7 hours."
  },
  items: [
    {
      id: "g7.summer.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "A canoe rental costs $30 for 4 hours. Which is the correct UNIT rate?",
      choices: ["$4.00 per hour", "$7.50 per hour", "$8.00 per hour", "$120 per hour"],
      answerIndex: 1,
      explanation: "A unit rate is cost per 1 hour: 30 ÷ 4 = $7.50 per hour.",
      hintLadder: [
        "A unit rate is 'per 1 hour' — divide the cost by the hours.",
        "Compute 30 ÷ 4.",
        "30 ÷ 4 = 7.5, so $7.50 per hour."
      ]
    },
    {
      id: "g7.summer.math.w1.d1.q2",
      type: "multiple_choice",
      stem: "Which ratio is NOT proportional to the others (does not reduce to the same unit rate)?",
      choices: ["6:9", "8:12", "10:14", "4:6"],
      answerIndex: 2,
      explanation: "6:9, 8:12, and 4:6 all reduce to 2:3. But 10:14 reduces to 5:7, a different rate — so it is not proportional.",
      hintLadder: [
        "Simplify each ratio to lowest terms.",
        "6:9 → 2:3. Check whether each of the others also gives 2:3.",
        "10:14 divides by 2 to 5:7, which is not 2:3."
      ],
      misconceptionsTargeted: ["additive-not-multiplicative"]
    },
    {
      id: "g7.summer.math.w1.d1.q3",
      type: "numeric",
      stem: "A water filter cleans 5 liters every 8 minutes at a steady rate. How many liters does it clean in 40 minutes?",
      answer: 25,
      tolerance: 0,
      unit: "liters",
      hintLadder: [
        "How many 8-minute chunks are in 40 minutes?",
        "40 ÷ 8 = 5, so the time is multiplied by 5.",
        "Multiply the liters by 5: 5 × 5 = 25."
      ],
      explanation: "40 ÷ 8 = 5, so scale liters by 5: 5 × 5 = 25 liters. (Unit rate = 0.625 L/min × 40 = 25.)"
    },
    {
      id: "g7.summer.math.w1.d1.q4",
      type: "numeric",
      stem: "Trail mix uses 3 cups of nuts for every 5 cups of oats. An explorer has 20 cups of oats. How many cups of nuts are needed to keep the same ratio?",
      answer: 12,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Find the constant of proportionality: nuts per 1 cup of oats = 3 ÷ 5.",
        "The oats went from 5 to 20 — that is ×4.",
        "Multiply the nuts by 4: 3 × 4 = 12."
      ],
      explanation: "Oats scaled ×4 (5→20), so nuts scale ×4 too: 3 × 4 = 12 cups. (k = 3/5, and 20 × 3/5 = 12.)"
    },
    {
      id: "g7.summer.math.w1.d1.q5",
      type: "short_answer",
      stem: "Two campsites sell firewood. Camp A: 6 logs for $9. Camp B: 10 logs for $14. Which is the better deal? Show how you compared them using unit rates.",
      rubric: {
        level3: "Computes both unit rates ($1.50/log and $1.40/log), compares them correctly, and concludes Camp B is the better deal with reasoning.",
        level2: "Computes both rates but the comparison or conclusion is unclear, OR compares correctly with one small arithmetic slip.",
        level1: "Does not use unit rates or reaches a wrong conclusion with no valid reasoning."
      },
      exemplar: "Camp A: 9 ÷ 6 = $1.50 per log. Camp B: 14 ÷ 10 = $1.40 per log. Since $1.40 is less than $1.50, Camp B is the better deal — you pay less per log.",
      hintLadder: [
        "Turn each into a price PER log by dividing dollars by logs.",
        "Camp A: 9 ÷ 6. Camp B: 14 ÷ 10.",
        "The lower price per log is the better deal — compare $1.50 and $1.40."
      ]
    }
  ],
  reflectionPrompt: "Where did a rate show up in your own day — speed, price per item, or steps per minute? Write one unit rate you could actually measure.",
  misconceptionBank: [
    {
      id: "additive-not-multiplicative",
      label: "Uses addition instead of a multiplier to compare ratios",
      description: "Thinks 6:9 and 10:14 are proportional because you 'add 4' to each part, instead of checking a common multiplier.",
      coachMove: "Ask what you MULTIPLY the first ratio by to get the second. If the two parts need different multipliers, the ratios are not proportional."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather buy energy bars at 4 bars for $6, or 6 bars for $8.40, for your expedition pack? Work out the price PER bar for each before you choose the better deal!",
      answer:
        "4 for $6 → 6 ÷ 4 = $1.50 per bar. 6 for $8.40 → 8.40 ÷ 6 = $1.40 per bar. The 6-pack is the better deal at $1.40 per bar.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build an Expedition Ration Plan",
      challenge:
        "Design a supply plan for a 3-day expedition using proportional reasoning. Pick a 'per person per day' rate for water and one food, then scale it up for a whole crew — keeping every ratio consistent.",
      steps: [
        "Choose a crew size (say 5 explorers) and a trip length (3 days).",
        "Set a unit rate for water (e.g., 2.5 liters per person per day) and one food item.",
        "Multiply to find the TOTAL supplies: rate × people × days.",
        "Make a supply table and check that your totals still reduce to your original per-person rate."
      ],
      deliverable: "A supply table showing the per-person unit rate and the scaled-up totals for the whole crew.",
      choiceBoard: [
        "Draw or type a supply table with unit rates and totals.",
        "Make an 'explorer packing poster' showing 3 real unit rates you'd use on a trip.",
        "Write a short journal entry from an explorer explaining how they used rates to pack exactly enough."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Proportion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.math.w1.d1.arena1",
          type: "numeric",
          stem: "A drone maps 12 square kilometers of terrain in 15 minutes at a steady rate. How many square kilometers can it map in 40 minutes? Round to the nearest whole number.",
          answer: 32,
          tolerance: 0,
          unit: "square kilometers",
          hintLadder: [
            "Find the unit rate: 12 ÷ 15 square km per minute.",
            "12 ÷ 15 = 0.8 square km per minute.",
            "Multiply by 40: 0.8 × 40 = 32."
          ],
          explanation: "Unit rate = 12 ÷ 15 = 0.8 sq km/min. In 40 min: 0.8 × 40 = 32 square kilometers."
        },
        {
          id: "g7.summer.math.w1.d1.arena2",
          type: "short_answer",
          stem: "An explorer says: 'I hiked 8 km in 2 hours, so if I hike for 5 hours at the same pace I'll cover 20 km.' Is the answer right? Explain using the unit rate.",
          rubric: {
            level3: "Finds the unit rate (4 km/h), applies it to 5 hours (4 × 5 = 20 km), and confirms the explorer is CORRECT with clear reasoning.",
            level2: "Gets 20 km but the unit-rate reasoning is incomplete or unclear.",
            level1: "Wrong conclusion or no use of a unit rate."
          },
          exemplar: "The unit rate is 8 ÷ 2 = 4 km per hour. At a steady pace, 4 × 5 = 20 km in 5 hours. So yes, the explorer is correct.",
          hintLadder: [
            "First find the pace per 1 hour: 8 ÷ 2.",
            "That unit rate is 4 km/h.",
            "Multiply 4 × 5 and compare to 20."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pace Count March",
      prompt:
        "March in place at a steady 'explorer pace' — count 20 steps, then double-time for 10 steps, then slow back down. Your steps-per-count is a real rate! Repeat the pattern twice.",
      scienceTieIn:
        "Steady rhythmic movement raises your heart rate and pumps oxygen-rich blood to your brain, sharpening focus for the next challenge.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Explorers plan with rates. Write one unit rate you noticed today — a price per item, a speed, or a 'per day' amount — and what it helped you figure out.",
      badge: { id: "g7-proportion-pathfinder", name: "Proportion Pathfinder", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
