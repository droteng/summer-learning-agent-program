// Grade 5 Summer — Week 2, Day 5.
// Topic: mean, median, and range (grade-5 depth: small whole-number sets, clean divisions).
// Grade-5 counterpart of grade6/week2/math-day5.js, pitched down.

export const summerG5MathW2D5 = {
  id: "g5.summer.math.w2.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 5,
  subject: "Math",
  topic: "Mean, median, and range",
  topicTag: "summary-statistics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.NBT.B.6", "CCSS.5.OA.A.2"],
  hook: "Three little numbers can describe a whole week of data: mean, median, and range. Today you find all three!",
  miniLesson: [
    "Mean (average) = add all the numbers, then divide by how many numbers there are.",
    "Median = the middle number after you put the list in order from smallest to largest.",
    "Range = the largest number minus the smallest number. It tells you how spread out the data is."
  ],
  workedExample: {
    prompt: "Reading minutes: 10, 20, 30, 20, 20. Find the mean, median, and range.",
    steps: [
      "Add them up: 10 + 20 + 30 + 20 + 20 = 100.",
      "Mean: 100 ÷ 5 = 20.",
      "Put in order: 10, 20, 20, 20, 30. The middle number is 20, so the median is 20.",
      "Range: 30 - 10 = 20.",
      "Mean = 20, Median = 20, Range = 20."
    ],
    answer: "Mean 20, Median 20, Range 20."
  },
  items: [
    {
      id: "g5.summer.math.w2.d5.q1",
      type: "numeric",
      stem: "Find the mean of: 2, 4, 6, 8, 10.",
      answer: 6,
      tolerance: 0,
      hintLadder: [
        "Add all the numbers together.",
        "Then divide by how many there are (5).",
        "(2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6."
      ],
      explanation: "(2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6."
    },
    {
      id: "g5.summer.math.w2.d5.q2",
      type: "numeric",
      stem: "Find the median of: 8, 2, 6, 4, 10.",
      answer: 6,
      tolerance: 0,
      hintLadder: [
        "Put the list in order from smallest to largest first.",
        "In order: 2, 4, 6, 8, 10.",
        "The middle number is 6."
      ],
      explanation: "In order: 2, 4, 6, 8, 10. The middle (3rd) number is 6."
    },
    {
      id: "g5.summer.math.w2.d5.q3",
      type: "numeric",
      stem: "Find the range of: 9, 3, 15, 6, 8.",
      answer: 12,
      tolerance: 0,
      hintLadder: [
        "Find the largest number.",
        "Find the smallest number.",
        "Subtract: 15 - 3 = 12."
      ],
      explanation: "Largest is 15, smallest is 3. Range = 15 - 3 = 12."
    },
    {
      id: "g5.summer.math.w2.d5.q4",
      type: "multiple_choice",
      stem: "You have the numbers 2, 4, 6, 8, 10. Which is true?",
      choices: [
        "The median is bigger than the mean.",
        "The mean is bigger than the median.",
        "The mean and median are both 6.",
        "The range is 6."
      ],
      answerIndex: 2,
      explanation:
        "The mean is (2+4+6+8+10)÷5 = 30÷5 = 6, and the middle number is also 6. In an evenly spaced list like this, the mean and median match.",
      hintLadder: [
        "First find the mean by adding and dividing by 5.",
        "Then find the median — the middle number in order.",
        "Both come out to 6, so they are equal."
      ],
      misconceptionsTargeted: ["assumes-mean-equals-median"]
    },
    {
      id: "g5.summer.math.w2.d5.q5",
      type: "short_answer",
      stem:
        "Two students each have a mean of 8 books read over 5 weeks. Why might their reading still look very different?",
      rubric: {
        level3: "Names range or spread (one read about the same each week, the other had big highs and lows that averaged to 8).",
        level2: "Says the numbers could differ but does not name range or spread.",
        level1: "Confused or off-topic."
      },
      exemplar:
        "Their means are the same, but the range could be different — one student read 7 or 8 books every week, while the other read 2 one week and 15 another. Same mean, very different weeks.",
      hintLadder: [
        "The mean is just one summary number.",
        "Which measure shows how spread out the numbers are?",
        "Range tells the rest of the story."
      ]
    }
  ],
  reflectionPrompt: "Today you used three summary numbers. Which would you trust most to describe a friend's typical reading time?",
  misconceptionBank: [
    {
      id: "assumes-mean-equals-median",
      label: "Assumes mean and median are always equal",
      description: "Treats the mean and median as the same number every time.",
      coachMove: "Add one very big number to a small list and recompute — the mean jumps up, but the median barely moves."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather have a video-game score list where your MEAN score is high, or where your MEDIAN score is high? Think about what one super-lucky jackpot game does to each number before you answer!",
      answer:
        "One huge lucky game pulls the mean way up but barely moves the median. If you want a number that shows your TYPICAL skill, the median is harder to fake — the mean can be pumped up by a single lucky run.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Stat the Squad",
      challenge:
        "Collect a small real dataset from people or things around you — 5 values like family members' ages, shoe sizes, or how many books each person read — then find the mean, median, and range and show them off.",
      steps: [
        "Choose what to measure and gather 5 real values.",
        "Put the values in order and find the median (the middle one).",
        "Add them up and divide by 5 to get the mean.",
        "Subtract the smallest from the largest for the range, then write all three on a mini 'stat card.'"
      ],
      deliverable: "A 'stat card' listing your 5 values and their mean, median, and range, with a sentence on what surprised you.",
      choiceBoard: [
        "Make a paper stat card with a tiny dot plot of the values.",
        "Build it in a spreadsheet and let it add the numbers for you.",
        "Record a 30-second 'sports commentator' video announcing your squad's stats."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Stats Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.math.w2.d5.arena1",
          type: "numeric",
          stem:
            "A gamer's scores are 10, 12, 8, 15, and one mystery score. The MEAN of all five scores is 11. What is the mystery score?",
          answer: 10,
          tolerance: 0,
          hintLadder: [
            "If the mean of 5 numbers is 11, what must all five add up to?",
            "The total must be 11 × 5 = 55.",
            "Add the four known scores (10+12+8+15 = 45) and subtract from 55: 55 - 45 = 10."
          ],
          explanation: "Mean 11 over 5 scores means the total is 55. The four known scores add to 45, so the missing score is 55 - 45 = 10."
        },
        {
          id: "g5.summer.math.w2.d5.arena2",
          type: "short_answer",
          stem:
            "A running club's lap times are 20, 21, 20, 22, and 67 seconds. Should the coach describe the club's 'typical' time using the mean or the median? Explain using the numbers.",
          rubric: {
            level3: "Spots 67 as an outlier, notes the mean (30) is dragged up by it while the median (21) matches most runners, and chooses the median with reasoning.",
            level2: "Picks the median and mentions the outlier OR the right numbers, but the reasoning is incomplete.",
            level1: "Picks an option without pointing to the outlier or the numbers."
          },
          exemplar:
            "The 67 is way bigger than the rest — it's an outlier. The mean is (20+21+20+22+67)÷5 = 30 seconds, which no one is close to. The median is 21, which matches almost everyone, so the coach should use the median.",
          hintLadder: [
            "One value is very different from the others — which one?",
            "Find the mean and the median and compare them to the real times.",
            "Which number better shows what MOST runners did?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Find Your Median Breath",
      prompt:
        "Take five slow breaths. Make the first one short, the next two medium, and the last two long — then notice your 'median breath,' the middle one. Let your breathing settle into that comfy middle pace for 30 seconds.",
      scienceTieIn:
        "Slow, even breathing turns on the calming part of your nervous system, lowering your heart rate so your brain can think clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Mean, median, and range each tell a different story about the same data. Which one feels most like 'the real you' when describing your typical day, and why?",
      badge: { id: "g5-summer-stat-sleuth", name: "Stat Sleuth", emoji: "🔍" },
      estimatedMinutes: 7
    }
  }
};
