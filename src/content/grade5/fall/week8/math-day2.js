// Grade 5 Math — Fall Expedition, Week 8 (Harvest Showcase), Day 2.
// Grade 5 counterpart of g6.fall.math.w8.d2. Same topic (fall math synthesis)
// pitched down to Grade 5: whole-number operations, simple data, and
// friendly rates instead of ratios/percents. Celebratory capstone tone.

export const fallG5MathW8D2 = {
  id: "g5.fall.math.w8.d2",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 2,
  subject: "Math",
  topic: "Fall math synthesis",
  topicTag: "synthesis-review",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.MATH.CONTENT.5.NBT.B.5", "CCSS.MATH.CONTENT.5.MD.B.2"],
  hook: "All season you multiplied, divided, read graphs, and worked with rates. Today you bring it all together in one mixed set — the math behind your showcase!",
  miniLesson: [
    "A RATE compares two things, like crates per week. To find it, divide the total by the number of weeks.",
    "Graphs help you compare (bar graphs) and see change over time (line graphs). Always read the numbers on the side first.",
    "To scale up, first find the rate for ONE, then multiply. Total = rate × number of parts."
  ],
  workedExample: {
    prompt: "A stand sold 240 crates over 8 weeks at a steady rate. What is the weekly rate, and how many crates in 5 weeks at that rate?",
    steps: [
      "Weekly rate = total ÷ weeks = 240 ÷ 8 = 30 crates each week.",
      "For 5 weeks: multiply 30 × 5.",
      "= 150 crates.",
      "Find the rate first, then multiply."
    ],
    answer: "30 crates each week; 150 crates in 5 weeks."
  },
  items: [
    {
      id: "g5.fall.math.w8.d2.q1",
      type: "numeric",
      stem: "A recipe uses 3 cups of flour for every 1 cup of pumpkin. If you use 12 cups of flour, how many cups of pumpkin do you need?",
      answer: 4,
      tolerance: 0,
      unit: "cups",
      hintLadder: [
        "Flour went from 3 cups to 12 cups. How many times bigger?",
        "12 ÷ 3 = 4, so everything is 4 times bigger.",
        "Pumpkin: 1 × 4 = 4 cups."
      ],
      explanation: "12 ÷ 3 = 4, so scale the pumpkin the same way: 1 × 4 = 4 cups."
    },
    {
      id: "g5.fall.math.w8.d2.q2",
      type: "numeric",
      stem: "A farmer picked 8 baskets of apples each day for 7 days. How many baskets did she pick in all?",
      answer: 56,
      tolerance: 0,
      unit: "baskets",
      hintLadder: [
        "The same amount each day means you can multiply.",
        "8 baskets × 7 days.",
        "8 × 7 = 56 baskets."
      ],
      explanation: "8 baskets per day × 7 days = 56 baskets."
    },
    {
      id: "g5.fall.math.w8.d2.q3",
      type: "numeric",
      stem: "A pumpkin vine grew 36 centimeters in 6 weeks at a steady rate. How many centimeters did it grow each week?",
      answer: 6,
      tolerance: 0,
      unit: "cm/week",
      hintLadder: [
        "Rate = total growth ÷ number of weeks.",
        "36 ÷ 6.",
        "= 6 cm each week."
      ],
      explanation: "36 cm ÷ 6 weeks = 6 cm each week."
    },
    {
      id: "g5.fall.math.w8.d2.q4",
      type: "numeric",
      stem: "A bar graph shows 45 pumpkins picked in September and 30 pumpkins picked in October. How many MORE were picked in September than October?",
      answer: 15,
      tolerance: 0,
      unit: "pumpkins",
      hintLadder: [
        "'How many more' means subtract.",
        "45 − 30.",
        "= 15 pumpkins."
      ],
      explanation: "45 − 30 = 15 more pumpkins in September."
    },
    {
      id: "g5.fall.math.w8.d2.q5",
      type: "short_answer",
      stem: "For your showcase, you want to say 'Most kids like the new fall snack.' You asked 10 kids and 7 said yes. Explain whether asking only 10 kids is enough, and what you could do to make your claim stronger.",
      rubric: {
        level3: "Notes that 10 kids is a small group that might not speak for everyone AND suggests asking more kids.",
        level2: "Says it's not enough OR suggests asking more, but not both.",
        level1: "Treats 7 out of 10 as full proof with no idea for improvement."
      },
      exemplar: "7 out of 10 kids liked it, but 10 kids is a small group and might not match the whole class. I would ask a lot more kids, like the whole grade, to make my claim stronger.",
      hintLadder: [
        "How many kids did you ask?",
        "Is 10 kids enough to speak for everyone?",
        "Suggest asking a bigger, fairer group."
      ]
    }
  ],
  reflectionPrompt: "Which fall math skill — multiplying, dividing, reading graphs, or finding rates — do you think you'll use most in real life? Why?",
  misconceptionBank: [
    {
      id: "small-sample-in-showcase",
      label: "Presents a tiny group as strong proof",
      description: "Uses a 7-out-of-10 result in a showcase as if it speaks for everyone.",
      coachMove: "Ask 'out of how many, and were they a fair mix?' before trusting the result."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Harvest Riddle",
      prompt:
        "A farmer fills crates at a steady rate. In 3 hours she fills 18 crates. A wagon holds 30 crates. Working at the same rate, how many MORE hours until she fills a whole wagon?",
      answer:
        "Her rate is 18 ÷ 3 = 6 crates each hour. A wagon of 30 takes 30 ÷ 6 = 5 hours in all. She already worked 3 hours, so 2 more hours to go.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Stat Card",
      challenge:
        "Turn one true number from your fall — pumpkins counted, pages read, minutes practiced — into a 'stat card' for your harvest showcase. Use a total or a per-week rate to make the number tell a story.",
      steps: [
        "Pick one real fall number you can stand behind.",
        "Turn it into a total or a per-week rate (show your math).",
        "Add a one-line caption saying what it means.",
        "Double-check your math so the card is honest."
      ],
      deliverable: "A stat card showing one number, the math you used, and an honest caption.",
      choiceBoard: [
        "Make a single illustrated stat card.",
        "Make a 2-stat 'harvest dashboard' (one total and one per-week rate).",
        "Make a bar graph of a fall number changing over the 8 weeks."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Synthesis Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.math.w8.d2.arena1",
          type: "numeric",
          stem: "A stand sold 480 apples over 6 weeks at a steady rate. At that same rate, how many apples would it sell in 10 weeks?",
          answer: 800,
          tolerance: 0,
          unit: "apples",
          hintLadder: [
            "Find the weekly rate first.",
            "480 ÷ 6 = 80 apples each week.",
            "80 × 10 = 800 apples."
          ],
          explanation: "Rate = 480 ÷ 6 = 80 each week. Then 80 × 10 = 800 apples."
        },
        {
          id: "g5.fall.math.w8.d2.arena2",
          type: "numeric",
          stem: "A line graph shows a plant was 12 cm tall in week 2 and 27 cm tall in week 5. How many centimeters did it grow between week 2 and week 5?",
          answer: 15,
          tolerance: 0,
          unit: "cm",
          hintLadder: [
            "Growth means the difference between the two heights.",
            "27 − 12.",
            "= 15 cm."
          ],
          explanation: "27 cm − 12 cm = 15 cm of growth."
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Harvest Count Stretch",
      prompt:
        "Pretend you're stacking crates: do 6 slow shoulder rolls (one per 'crate'), then reach high to 'top off the wagon' and hold for 10 seconds. Shake out your hands.",
      scienceTieIn: "Gentle movement sends more blood to your brain, which helps you think clearly for the next problem.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fall math tool — multiplying, dividing, graphs, or rates — made a number feel like a real story today? Write the number and what it showed.",
      badge: { id: "g5-fall-harvest-math-star", name: "Harvest Math Star", emoji: "🌽" },
      estimatedMinutes: 7
    }
  }
};
