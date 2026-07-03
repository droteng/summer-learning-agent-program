// Grade 5 Math — Winter Expedition, Week 3 (Forces & Motion), Day 2.
// Grade 5 counterpart of g6.winter.math.w3.d2, pitched down: speed =
// distance ÷ time kept as simple WHOLE-NUMBER division, step-by-step.
// Topic: speed as a rate, with sledding and skating examples.

export const winterG5MathW3D2 = {
  id: "g5.winter.math.w3.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 2,
  subject: "Math",
  topic: "Speed as a rate: distance divided by time",
  topicTag: "speed-rates",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.6", "CCSS.5.OA.A.2"],
  hook: "How fast did your sled REALLY fly down that hill? Speed compares distance to time. Today you divide to find the speed of sleds and skaters and settle who is truly the fastest.",
  miniLesson: [
    "SPEED tells you how fast something moves. The rule is: speed = distance ÷ time.",
    "Speed is measured in units like METERS PER SECOND (m/s) — that means how many meters you go in one second.",
    "To find out who is faster, work out each speed with distance ÷ time, then compare the numbers. The bigger number is faster."
  ],
  workedExample: {
    prompt: "A sled travels 30 meters in 5 seconds. What is its speed in meters per second?",
    steps: [
      "Use the rule: speed = distance ÷ time.",
      "Distance = 30 meters. Time = 5 seconds.",
      "30 ÷ 5 = 6.",
      "The sled's speed is 6 meters per second (m/s)."
    ],
    answer: "6 meters per second"
  },
  items: [
    {
      id: "g5.winter.math.w3.d2.q1",
      type: "numeric",
      stem: "A sled travels 42 meters down a hill in 6 seconds. What is its speed in meters per second?",
      answer: 7,
      tolerance: 0,
      unit: "m/s",
      hintLadder: [
        "Speed = distance ÷ time.",
        "Divide 42 meters by 6 seconds.",
        "42 ÷ 6 = 7 m/s."
      ],
      explanation: "Speed = distance ÷ time = 42 ÷ 6 = 7 meters per second."
    },
    {
      id: "g5.winter.math.w3.d2.q2",
      type: "numeric",
      stem: "An ice skater glides 40 meters in 8 seconds at a steady speed. What is the skater's speed in meters per second?",
      answer: 5,
      tolerance: 0,
      unit: "m/s",
      hintLadder: [
        "Use speed = distance ÷ time.",
        "Divide 40 by 8.",
        "40 ÷ 8 = 5 m/s."
      ],
      explanation: "Speed = 40 ÷ 8 = 5 meters per second."
    },
    {
      id: "g5.winter.math.w3.d2.q3",
      type: "multiple_choice",
      stem: "Sled A goes 24 meters in 4 seconds. Sled B goes 20 meters in 5 seconds. Which sled is FASTER?",
      choices: [
        "Sled A (6 m/s)",
        "Sled B (4 m/s)",
        "They are the same speed",
        "You cannot compare them"
      ],
      answerIndex: 0,
      explanation: "Sled A: 24 ÷ 4 = 6 m/s. Sled B: 20 ÷ 5 = 4 m/s. 6 m/s is faster than 4 m/s, so Sled A wins.",
      hintLadder: [
        "Find each sled's speed with distance ÷ time.",
        "Sled A: 24 ÷ 4. Sled B: 20 ÷ 5.",
        "Compare 6 m/s and 4 m/s — the bigger number is faster."
      ],
      misconceptionsTargeted: ["bigger-distance-means-faster"]
    },
    {
      id: "g5.winter.math.w3.d2.q4",
      type: "numeric",
      stem: "A speed skater keeps a steady 6 meters per second. How many meters does the skater travel in 5 seconds? (Use distance = speed × time.)",
      answer: 30,
      tolerance: 0,
      unit: "meters",
      hintLadder: [
        "Flip the rule around: distance = speed × time.",
        "Multiply 6 m/s by 5 seconds.",
        "6 × 5 = 30 meters."
      ],
      explanation: "distance = speed × time = 6 × 5 = 30 meters."
    },
    {
      id: "g5.winter.math.w3.d2.q5",
      type: "short_answer",
      stem: "Maya's sled goes 40 meters in 8 seconds. Leo's sled goes 40 meters in 10 seconds. They went the SAME distance — explain how to find who was faster, and say who wins.",
      rubric: {
        level3: "Works out both speeds (Maya 40 ÷ 8 = 5 m/s, Leo 40 ÷ 10 = 4 m/s) AND says Maya is faster, explaining that less time for the same distance means a higher speed.",
        level2: "Picks the right winner but the speed math or reasoning is incomplete.",
        level1: "Wrong winner or does not use speed = distance ÷ time."
      },
      exemplar: "Find each speed with distance ÷ time. Maya: 40 ÷ 8 = 5 m/s. Leo: 40 ÷ 10 = 4 m/s. Same distance, but Maya took less time, so her speed is higher — Maya is faster.",
      hintLadder: [
        "Same distance, different times — use speed = distance ÷ time.",
        "Maya: 40 ÷ 8. Leo: 40 ÷ 10.",
        "Less time for the same distance means a higher speed."
      ]
    }
  ],
  reflectionPrompt: "Think of a time you moved fast this winter — sledding, skating, or running to catch a bus. Could you guess the distance and time to work out your speed?",
  misconceptionBank: [
    {
      id: "bigger-distance-means-faster",
      label: "Thinks whoever went the farther distance is automatically faster",
      description: "Looks only at distance and ignores how much time it took, instead of dividing distance ÷ time.",
      coachMove: "Remind them speed depends on BOTH distance and time. Have them divide distance ÷ time for each and compare the results."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Race?",
      prompt:
        "Would you rather ride Sled X that goes 40 meters in 5 seconds, or Sled Y that goes 60 meters in 10 seconds? Work out each sled's speed (distance ÷ time) before you pick the faster ride!",
      answer:
        "Sled X: 40 ÷ 5 = 8 m/s. Sled Y: 60 ÷ 10 = 6 m/s. Sled X is faster (8 m/s beats 6 m/s), even though Sled Y went a longer distance.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Speed Chart",
      challenge:
        "Make a 'Winter Speed Leaderboard.' Invent 3 sledders or skaters. Give each one a distance and a time that divide evenly, work out everyone's speed in meters per second, then rank them fastest to slowest.",
      materials: ["Paper & pencil, OR a spreadsheet/drawing app"],
      steps: [
        "Invent 3 racers. Give each a distance (in meters) and a time (in seconds) that divide to a whole number.",
        "Work out each racer's speed with distance ÷ time.",
        "Rank them from fastest to slowest by their speed (m/s).",
        "Add a headline naming your speed champion and their m/s."
      ],
      deliverable: "A leaderboard listing each racer's distance, time, worked-out speed, and final ranking.",
      choiceBoard: [
        "Make a neat leaderboard table with the speed math shown.",
        "Draw a bar graph where each bar's height is a racer's speed in m/s.",
        "Write a 'race announcer' script that reveals the speeds and crowns the winner."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Speed Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.math.w3.d2.arena1",
          type: "numeric",
          stem: "A bobsled covers 30 meters in 5 seconds at a steady speed. What is its speed in meters per second?",
          answer: 6,
          tolerance: 0,
          unit: "m/s",
          hintLadder: [
            "Speed = distance ÷ time.",
            "Divide 30 by 5.",
            "30 ÷ 5 = 6 m/s."
          ],
          explanation: "Speed = 30 ÷ 5 = 6 meters per second."
        },
        {
          id: "g5.winter.math.w3.d2.arena2",
          type: "numeric",
          stem: "Skater A goes 40 meters in 10 seconds. Skater B goes 30 meters in 6 seconds. What is the FASTER skater's speed, in meters per second?",
          answer: 5,
          tolerance: 0,
          unit: "m/s",
          hintLadder: [
            "Find each skater's speed with distance ÷ time.",
            "Skater A: 40 ÷ 10 = 4 m/s. Skater B: 30 ÷ 6 = 5 m/s.",
            "The faster one is 5 m/s (Skater B)."
          ],
          explanation: "Skater A: 40 ÷ 10 = 4 m/s. Skater B: 30 ÷ 6 = 5 m/s. The faster skater's speed is 5 m/s."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Fast and Slow Motion",
      prompt:
        "March in place SLOWLY for 10 steps (a low speed — few steps each second), then march as FAST as you safely can for 10 steps (a high speed — many steps each second). Feel the difference, then take 3 slow breaths to reset.",
      scienceTieIn: "Steps per second is a real speed, just like meters per second — you just measured your own speed change while your heart pumped faster to keep up.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Speed compares distance to time. Describe one thing you could time yourself doing, and explain how you would turn it into a speed (distance ÷ time).",
      badge: { id: "g5-winter-speed-racer", name: "Speed Racer", emoji: "🛷" },
      estimatedMinutes: 7
    }
  }
};
