// Grade 7 Math — Winter Expedition, Week 3 (Forces & Motion), Day 2.
// Grade 7 counterpart of g6.winter.math.w3.d2. Same topic — speed as a
// rate, distance = speed × time — pitched one level up: proportional
// reasoning with non-whole unit rates, comparing rates across DIFFERENT
// units (converting m/s ↔ km/h), and solving for a missing quantity.
// Sledding / skating context, age 12–13.

export const winterG7MathW3D2 = {
  id: "g7.winter.math.w3.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Math",
  topic: "Speed as a proportional rate: comparing and converting distance ÷ time",
  topicTag: "speed-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.7.RP.A.1", "CCSS.7.RP.A.2"],
  hook: "Was your sled really faster than your friend's — even though you measured in meters per second and they measured in kilometers per hour? To settle it you'll master the constant of proportionality, non-whole unit rates, and converting between speed units so any two speeds can be compared head-to-head.",
  miniLesson: [
    "Speed is the constant of proportionality between distance and time: speed = distance ÷ time. When speed is constant, distance and time are proportional, so distance = speed × time and time = distance ÷ speed.",
    "A unit rate can be a decimal. If a skater covers 27 meters in 6 seconds, the speed is 27 ÷ 6 = 4.5 m/s — the '.5' is real distance per second, not a rounding error.",
    "To compare speeds in DIFFERENT units, convert to a common unit. To turn meters per second into kilometers per hour, multiply by 3.6 (since 1 m/s = 3600 m per hour = 3.6 km/h)."
  ],
  workedExample: {
    prompt: "A toboggan travels 90 meters in 12 seconds at a steady speed. Find its speed in meters per second, then convert to kilometers per hour.",
    steps: [
      "Speed = distance ÷ time = 90 ÷ 12.",
      "90 ÷ 12 = 7.5, so the speed is 7.5 m/s.",
      "To convert m/s to km/h, multiply by 3.6: 7.5 × 3.6 = 27.",
      "The toboggan travels 7.5 m/s, which is 27 km/h."
    ],
    answer: "7.5 m/s, which equals 27 km/h"
  },
  items: [
    {
      id: "g7.winter.math.w3.d2.q1",
      type: "numeric",
      stem: "A sled travels 54 meters down a hill in 12 seconds at a steady speed. What is its speed in meters per second? (Answer may be a decimal.)",
      answer: 4.5,
      tolerance: 0,
      unit: "m/s",
      hintLadder: [
        "Speed = distance ÷ time.",
        "Divide 54 by 12.",
        "54 ÷ 12 = 4.5 m/s."
      ],
      explanation: "Speed = distance ÷ time = 54 ÷ 12 = 4.5 meters per second."
    },
    {
      id: "g7.winter.math.w3.d2.q2",
      type: "numeric",
      stem: "An ice skater glides at a steady 6 m/s. Converting to kilometers per hour (multiply m/s by 3.6), what is the skater's speed in km/h?",
      answer: 21.6,
      tolerance: 0,
      unit: "km/h",
      hintLadder: [
        "To go from m/s to km/h, multiply by 3.6.",
        "6 × 3.6.",
        "6 × 3.6 = 21.6 km/h."
      ],
      explanation: "Convert m/s to km/h by multiplying by 3.6: 6 × 3.6 = 21.6 km/h."
    },
    {
      id: "g7.winter.math.w3.d2.q3",
      type: "multiple_choice",
      stem: "Sled A goes 45 meters in 6 seconds. Sled B travels at 27 km/h. Which sled is FASTER? (Hint: convert Sled A's speed to km/h using ×3.6.)",
      choices: [
        "Sled A — it is 27 km/h, tied, so neither",
        "Sled A — 45 ÷ 6 = 7.5 m/s = 27 km/h, so they are actually the SAME speed",
        "Sled B — it is much faster than Sled A",
        "You cannot compare speeds in different units"
      ],
      answerIndex: 1,
      explanation: "Sled A: 45 ÷ 6 = 7.5 m/s. Convert: 7.5 × 3.6 = 27 km/h. Sled B is also 27 km/h, so the two sleds are moving at exactly the same speed.",
      hintLadder: [
        "First find Sled A's speed in m/s: 45 ÷ 6.",
        "Convert that to km/h with ×3.6: 7.5 × 3.6.",
        "Compare 27 km/h to 27 km/h — they match."
      ],
      misconceptionsTargeted: ["compare-across-units-blindly"]
    },
    {
      id: "g7.winter.math.w3.d2.q4",
      type: "numeric",
      stem: "A speed skater holds a steady 8.5 meters per second. How many meters does the skater travel in 6 seconds? (Use distance = speed × time.)",
      answer: 51,
      tolerance: 0,
      unit: "meters",
      hintLadder: [
        "distance = speed × time.",
        "Multiply 8.5 by 6.",
        "8.5 × 6 = 51 meters."
      ],
      explanation: "distance = speed × time = 8.5 × 6 = 51 meters."
    },
    {
      id: "g7.winter.math.w3.d2.q5",
      type: "short_answer",
      stem: "Maya's toboggan covers 84 meters in 12 seconds. Leo's toboggan runs at a steady 6.5 m/s for its whole trip. Explain how to find who is faster, show each speed, and say who wins by how much.",
      rubric: {
        level3: "Computes Maya's speed (84 ÷ 12 = 7 m/s), states Leo is 6.5 m/s, concludes Maya is faster by 0.5 m/s, and explains that comparing unit rates (m/s) in the same units is what makes the comparison valid.",
        level2: "Finds the correct winner but the speed calculation, the margin, or the reasoning is incomplete.",
        level1: "Wrong winner, or does not use speed = distance ÷ time to put both in the same unit rate."
      },
      exemplar: "First put both in the same unit rate. Maya: speed = 84 ÷ 12 = 7 m/s. Leo is already given as 6.5 m/s. Both are now in meters per second, so I can compare directly: 7 m/s is greater than 6.5 m/s, so Maya is faster — by 7 − 6.5 = 0.5 m/s.",
      hintLadder: [
        "Get both speeds into the SAME unit (m/s).",
        "Maya: 84 ÷ 12. Leo is already 6.5 m/s.",
        "Compare 7 m/s and 6.5 m/s, and subtract for the margin."
      ]
    }
  ],
  reflectionPrompt: "Speedometers show km/h or mph, but scientists often use m/s. Where in your life do you see speeds in one unit that you'd need to convert to compare fairly?",
  misconceptionBank: [
    {
      id: "compare-across-units-blindly",
      label: "Compares two speeds without converting to the same unit",
      description: "Assumes a bigger number means a faster speed even when the two speeds are in different units (e.g., thinks 27 km/h must beat 7.5 m/s because 27 > 7.5).",
      coachMove: "Insist on a common unit BEFORE comparing. Convert one speed (m/s ↔ km/h with ×3.6) so both numbers describe the same thing, then compare."
    },
    {
      id: "bigger-distance-means-faster",
      label: "Thinks whoever went the farther distance is automatically faster",
      description: "Compares only distance and ignores the time it took, instead of computing the rate distance ÷ time.",
      coachMove: "Remind them speed depends on BOTH distance and time. Have them compute distance ÷ time for each and compare the unit rates."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Race?",
      prompt:
        "Would you rather ride Sled X that covers 63 meters in 9 seconds, or Sled Y clocked at 25 km/h? Convert Sled X to km/h (find m/s, then ×3.6) before you choose the faster ride!",
      answer:
        "Sled X: 63 ÷ 9 = 7 m/s, then 7 × 3.6 = 25.2 km/h. Sled Y is 25 km/h. Sled X wins — 25.2 km/h just edges out 25 km/h. You can only see that by converting to the same unit!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Unit Speed Leaderboard",
      challenge:
        "Build a 'Winter Speed Leaderboard' where racers are measured in MIXED units. Invent 3 sledders or skaters — give some a distance and time, and give others a speed already in km/h. Convert everyone to a common unit and rank them.",
      materials: ["Paper & pencil, OR a spreadsheet/drawing app", "The conversion 1 m/s = 3.6 km/h"],
      steps: [
        "Invent 3 racers; give at least one a distance + time and at least one a speed in km/h.",
        "For the distance-and-time racers, compute speed = distance ÷ time (decimals are fine).",
        "Convert every racer to the SAME unit (all m/s, or all km/h) using ×3.6 or ÷3.6.",
        "Rank them fastest to slowest and add a headline naming the champion with their converted speed."
      ],
      deliverable: "A leaderboard showing each racer's original data, the conversion work, the common-unit speed, and the final ranking.",
      choiceBoard: [
        "Make a neat leaderboard table showing each conversion step.",
        "Draw a double-labeled bar graph where each bar shows a racer's speed in both m/s and km/h.",
        "Write a 'race announcer' script that reveals the surprise upset once everyone is converted to the same unit."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Speed Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.math.w3.d2.arena1",
          type: "numeric",
          stem: "A bobsled covers 150 meters in 8 seconds at a steady speed. What is its speed in kilometers per hour? (Find m/s, then multiply by 3.6.)",
          answer: 67.5,
          tolerance: 0,
          unit: "km/h",
          hintLadder: [
            "First find m/s: 150 ÷ 8.",
            "150 ÷ 8 = 18.75 m/s. Now multiply by 3.6.",
            "18.75 × 3.6 = 67.5 km/h."
          ],
          explanation: "Speed = 150 ÷ 8 = 18.75 m/s. Convert: 18.75 × 3.6 = 67.5 km/h."
        },
        {
          id: "g7.winter.math.w3.d2.arena2",
          type: "numeric",
          stem: "A skater keeps a steady 9 m/s. At that speed, how many SECONDS does it take to cover 117 meters? (Use time = distance ÷ speed.)",
          answer: 13,
          tolerance: 0,
          unit: "seconds",
          hintLadder: [
            "Rearrange: time = distance ÷ speed.",
            "Divide 117 by 9.",
            "117 ÷ 9 = 13 seconds."
          ],
          explanation: "time = distance ÷ speed = 117 ÷ 9 = 13 seconds."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Rate Ramp-Up",
      prompt:
        "March in place at a slow 1 step per second for 10 steps, then ramp to 2 steps per second for 10 steps, then 3 per second for 10 steps — feel your rate (steps per second) climb like a unit rate. Then take 3 slow breaths to reset.",
      scienceTieIn: "Steps per second is a real unit rate, exactly like meters per second. You just tripled your rate in three stages and felt your heart raise its own rate to supply the oxygen.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Speed is a rate you can write in different units. Describe something you could time yourself doing, and explain how you'd turn it into a speed AND convert that speed into a second unit.",
      badge: { id: "g7-winter-rate-converter-champ", name: "Rate Converter Champ", emoji: "🛷" },
      estimatedMinutes: 7
    }
  }
};
