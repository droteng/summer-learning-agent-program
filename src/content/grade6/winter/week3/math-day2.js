// Grade 6 Math — Winter Expedition, Week 3 (Forces & Motion), Day 2.
// Topic: speed = distance ÷ time, with sledding and skating examples
// (rates and unit rates).

export const winterG6MathW3D2 = {
  id: "g6.winter.math.w3.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Math",
  topic: "Speed as a rate: distance divided by time",
  topicTag: "speed-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RP.A.2", "CCSS.6.RP.A.3.B"],
  hook: "How fast did your sled really fly down that hill? Speed is a rate — it compares distance to time. Today you calculate the speed of sleds and skaters and settle who's truly fastest.",
  miniLesson: [
    "Speed is a RATE that compares distance to time: speed = distance ÷ time.",
    "A UNIT rate tells you the distance for exactly ONE unit of time — like meters PER second or miles PER hour.",
    "To compare who is faster, put both speeds in the same unit rate (same units) and compare the numbers."
  ],
  workedExample: {
    prompt: "A sled travels 30 meters in 5 seconds. What is its speed in meters per second?",
    steps: [
      "Speed = distance ÷ time.",
      "Distance = 30 meters, time = 5 seconds.",
      "30 ÷ 5 = 6.",
      "The sled's speed is 6 meters per second (m/s)."
    ],
    answer: "6 meters per second"
  },
  items: [
    {
      id: "g6.winter.math.w3.d2.q1",
      type: "numeric",
      stem: "A sled travels 48 meters down a hill in 8 seconds. What is its speed in meters per second?",
      answer: 6,
      tolerance: 0,
      unit: "m/s",
      hintLadder: [
        "Speed = distance ÷ time.",
        "Divide 48 meters by 8 seconds.",
        "48 ÷ 8 = 6 m/s."
      ],
      explanation: "Speed = distance ÷ time = 48 ÷ 8 = 6 meters per second."
    },
    {
      id: "g6.winter.math.w3.d2.q2",
      type: "numeric",
      stem: "An ice skater glides 45 meters in 9 seconds at a steady speed. What is the skater's speed in meters per second?",
      answer: 5,
      tolerance: 0,
      unit: "m/s",
      hintLadder: [
        "Use speed = distance ÷ time.",
        "Divide 45 by 9.",
        "45 ÷ 9 = 5 m/s."
      ],
      explanation: "Speed = 45 ÷ 9 = 5 meters per second."
    },
    {
      id: "g6.winter.math.w3.d2.q3",
      type: "multiple_choice",
      stem: "Sled A goes 20 meters in 4 seconds. Sled B goes 27 meters in 9 seconds. Which sled is FASTER?",
      choices: [
        "Sled A (5 m/s)",
        "Sled B (3 m/s)",
        "They are the same speed",
        "You cannot compare them"
      ],
      answerIndex: 0,
      explanation: "Sled A: 20 ÷ 4 = 5 m/s. Sled B: 27 ÷ 9 = 3 m/s. 5 m/s is faster than 3 m/s, so Sled A wins.",
      hintLadder: [
        "Find each sled's unit rate: distance ÷ time.",
        "Sled A: 20 ÷ 4. Sled B: 27 ÷ 9.",
        "Compare 5 m/s and 3 m/s — the bigger number is faster."
      ],
      misconceptionsTargeted: ["bigger-distance-means-faster"]
    },
    {
      id: "g6.winter.math.w3.d2.q4",
      type: "numeric",
      stem: "A speed skater keeps a steady 8 meters per second. How many meters does the skater travel in 7 seconds? (Use distance = speed × time.)",
      answer: 56,
      tolerance: 0,
      unit: "meters",
      hintLadder: [
        "Rearrange the rule: distance = speed × time.",
        "Multiply 8 m/s by 7 seconds.",
        "8 × 7 = 56 meters."
      ],
      explanation: "distance = speed × time = 8 × 7 = 56 meters."
    },
    {
      id: "g6.winter.math.w3.d2.q5",
      type: "short_answer",
      stem: "Maya's sled travels 60 meters in 10 seconds. Leo's sled travels 60 meters in 12 seconds. They went the same distance — explain how to find who was faster and who wins.",
      rubric: {
        level3: "Computes both speeds (Maya 60 ÷ 10 = 6 m/s, Leo 60 ÷ 12 = 5 m/s) AND concludes Maya is faster, explaining that less time for the same distance means greater speed.",
        level2: "Gets the correct winner but the speed calculation or reasoning is incomplete.",
        level1: "Wrong winner or no use of speed = distance ÷ time."
      },
      exemplar: "Find each speed with distance ÷ time. Maya: 60 ÷ 10 = 6 m/s. Leo: 60 ÷ 12 = 5 m/s. Same distance, but Maya took less time, so she has the higher speed — Maya is faster.",
      hintLadder: [
        "Same distance, but different times — use speed = distance ÷ time.",
        "Maya: 60 ÷ 10. Leo: 60 ÷ 12.",
        "Less time for the same distance means a higher speed."
      ]
    }
  ],
  reflectionPrompt: "Think of a time you moved fast this winter — sledding, skating, or even running to catch a bus. Could you estimate the distance and time to find your speed?",
  misconceptionBank: [
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
        "Would you rather ride Sled X that covers 40 meters in 5 seconds, or Sled Y that covers 60 meters in 10 seconds? Work out each sled's speed (distance ÷ time) before you choose the faster ride!",
      answer:
        "Sled X: 40 ÷ 5 = 8 m/s. Sled Y: 60 ÷ 10 = 6 m/s. Sled X is faster (8 m/s beats 6 m/s), even though Sled Y traveled a longer distance.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Speed Chart",
      challenge:
        "Create a 'Winter Speed Leaderboard.' Invent 3 sledders or skaters, give each a distance and a time, calculate everyone's speed in meters per second, then rank them fastest to slowest.",
      materials: ["Paper & pencil, OR a spreadsheet/drawing app"],
      steps: [
        "Invent 3 racers and give each a distance (in meters) and a time (in seconds).",
        "Calculate each racer's speed with distance ÷ time.",
        "Rank them from fastest to slowest by their unit rate (m/s).",
        "Add a headline naming your speed champion and their m/s."
      ],
      deliverable: "A leaderboard listing each racer's distance, time, calculated speed, and final ranking.",
      choiceBoard: [
        "Make a neat leaderboard table with the speed math shown.",
        "Draw a bar graph where each bar's height is a racer's speed in m/s.",
        "Write a play-by-play 'race announcer' script that reveals speeds and crowns the winner."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Speed Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.math.w3.d2.arena1",
          type: "numeric",
          stem: "A bobsled covers 120 meters in 8 seconds at a steady speed. What is its speed in meters per second?",
          answer: 15,
          tolerance: 0,
          unit: "m/s",
          hintLadder: [
            "Speed = distance ÷ time.",
            "Divide 120 by 8.",
            "120 ÷ 8 = 15 m/s."
          ],
          explanation: "Speed = 120 ÷ 8 = 15 meters per second."
        },
        {
          id: "g6.winter.math.w3.d2.arena2",
          type: "numeric",
          stem: "Skater A goes 100 meters in 20 seconds. Skater B goes 90 meters in 15 seconds. What is the FASTER skater's speed, in meters per second?",
          answer: 6,
          tolerance: 0,
          unit: "m/s",
          hintLadder: [
            "Find each skater's speed with distance ÷ time.",
            "Skater A: 100 ÷ 20 = 5 m/s. Skater B: 90 ÷ 15 = 6 m/s.",
            "The faster one is 6 m/s (Skater B)."
          ],
          explanation: "Skater A: 100 ÷ 20 = 5 m/s. Skater B: 90 ÷ 15 = 6 m/s. The faster skater's speed is 6 m/s."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Fast and Slow Motion",
      prompt:
        "March in place SLOWLY for 10 steps (a low speed — few steps per second), then march as FAST as you safely can for 10 steps (a high speed — many steps per second). Feel the difference, then take 3 slow breaths to reset.",
      scienceTieIn: "Steps per second is a real rate, just like meters per second — you just measured your own speed changing while your heart pumped faster to keep up.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Speed compares distance to time. Describe one thing you could time yourself doing, and explain how you'd turn it into a speed (distance ÷ time).",
      badge: { id: "speed-rate-racer", name: "Speed Rate Racer", emoji: "🛷" },
      estimatedMinutes: 7
    }
  }
};
