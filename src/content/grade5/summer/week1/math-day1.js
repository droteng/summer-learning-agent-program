// Grade 5 Summer Math — Week 1 (Explorer Mode), Day 1.
// Grade-5 counterpart of g6.math.w1.d1 (ratio reasoning), pitched down one level:
// whole numbers, simple multiplication/division facts, visual/step-by-step models.

export const summerG5MathW1D1 = {
  id: "g5.summer.math.w1.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 1,
  subject: "Math",
  topic: "Ratio reasoning warm-up",
  topicTag: "ratios",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.5.OA.B.3", "CCSS.5.NBT.B.5"],
  hook: "Your summer is full of numbers! How many stickers go with one sticker book? Today you compare amounts using simple ratios.",
  keyTerms: [
    { term: "Ratio", definition: "A way to compare two amounts, like 2 to 3, written 2:3." },
    { term: "Group", definition: "A set of the same size that you can repeat, like 2 apples in every bag." },
    { term: "Equal ratios", definition: "Ratios that match when you multiply both numbers by the same whole number." }
  ],
  miniLesson: [
    "A ratio compares two amounts. We can write it as 2 to 3, or as 2:3.",
    "Ratios stay equal when you multiply BOTH numbers by the same whole number. If 1 bag has 2 apples, then 3 bags have 6 apples: 2:3 is like 2 apples per bag.",
    "You can draw groups to see a ratio. Draw 2 circles and 3 squares, then copy that group again to keep the ratio the same."
  ],
  workedExample: {
    prompt: "A snack pack uses 2 crackers for every 1 cheese slice. How many crackers do you need for 4 cheese slices?",
    steps: [
      "Write the groups: 2 crackers go with 1 cheese slice.",
      "You want 4 cheese slices instead of 1. That is 4 times as many.",
      "Multiply the crackers by the same number: 2 x 4 = 8.",
      "Check: 8 crackers and 4 cheese slices is still 2 crackers per 1 slice."
    ],
    answer: "8 crackers."
  },
  items: [
    {
      id: "g5.summer.math.w1.d1.q1",
      type: "multiple_choice",
      stem: "Which ratio is equal to 2:4?",
      choices: ["1:2", "2:3", "3:4", "4:6"],
      answerIndex: 0,
      explanation: "Divide both 2 and 4 by 2 to get 1:2.",
      hintLadder: [
        "What number divides both 2 and 4 evenly?",
        "Try dividing each side by 2.",
        "2 divided by 2 = 1 and 4 divided by 2 = 2, so the simpler ratio is 1:2."
      ],
      misconceptionsTargeted: ["adds-the-same-number", "simplifies-only-one-side"]
    },
    {
      id: "g5.summer.math.w1.d1.q2",
      type: "numeric",
      stem: "A trail has 3 markers for every 2 rest stops. At that rate, how many markers go with 6 rest stops?",
      answer: 9,
      tolerance: 0,
      unit: "markers",
      hintLadder: [
        "How many times bigger is 6 than 2?",
        "6 divided by 2 = 3, so multiply the markers by 3.",
        "3 x 3 = 9 markers."
      ],
      explanation: "3 markers : 2 stops scales by 3 -> 9 markers : 6 stops."
    },
    {
      id: "g5.summer.math.w1.d1.q3",
      type: "multiple_choice",
      stem: "A reader finishes 20 pages in 5 minutes. How many pages is that PER minute?",
      choices: [
        "5 pages per minute",
        "20 pages per minute",
        "10 pages per minute",
        "4 pages per minute"
      ],
      answerIndex: 3,
      explanation: "Divide pages by minutes: 20 divided by 5 = 4 pages per minute.",
      hintLadder: [
        "Per minute means how many pages in ONE minute.",
        "Divide the pages by the minutes.",
        "20 divided by 5 = 4 pages per minute."
      ],
      misconceptionsTargeted: ["divides-wrong-direction"]
    },
    {
      id: "g5.summer.math.w1.d1.q4",
      type: "numeric",
      stem: "A camp gives out 4 camp coins for every 2 missions finished. How many camp coins for 8 missions?",
      answer: 16,
      tolerance: 0,
      unit: "camp coins",
      hintLadder: [
        "How many times bigger is 8 than 2?",
        "8 divided by 2 = 4, so multiply the coins by 4.",
        "4 x 4 = 16 camp coins."
      ],
      explanation: "8 divided by 2 = 4. Multiply 4 coins by 4 to get 16."
    },
    {
      id: "g5.summer.math.w1.d1.q5",
      type: "short_answer",
      stem: "Explain in one or two sentences how you know that 4:6 and 2:3 are equal ratios.",
      rubric: {
        level3: "Says both numbers can be divided by 2 and shows the simpler pair 2:3.",
        level2: "Says they are equal but does not name the number 2.",
        level1: "Just repeats the ratios without explaining."
      },
      exemplar: "Both 4 and 6 can be divided by 2. That gives 2 and 3, so 4:6 is the same as 2:3.",
      hintLadder: [
        "What number divides both 4 and 6?",
        "Show what 4 divided by 2 and 6 divided by 2 are.",
        "State that the simpler ratio is 2:3."
      ]
    }
  ],
  stretch: {
    stem: "Camp coins give 4 coins for every 2 missions. A child wants at least 20 coins. What is the smallest number of missions they must finish? Show your thinking.",
    answer: 10,
    explanation: "Each mission earns 4 divided by 2 = 2 coins. To reach 20 coins: 20 divided by 2 = 10 missions."
  },
  reflectionPrompt: "Today you compared amounts using ratios. Where else in your day do you see groups you could write as a ratio?",
  misconceptionBank: [
    {
      id: "adds-the-same-number",
      label: "Adds instead of multiplies",
      description: "Adds the same number to both sides of a ratio (2:4 -> 3:5) instead of multiplying.",
      coachMove: "Show that adding 1 to both sides changes the ratio. Multiplying keeps it the same."
    },
    {
      id: "simplifies-only-one-side",
      label: "Changes only one side",
      description: "Divides one number of the ratio but not the other.",
      coachMove: "Remind them a ratio has two parts, and both parts must change together."
    },
    {
      id: "divides-wrong-direction",
      label: "Divides the wrong way",
      description: "Finds minutes per page instead of pages per minute.",
      coachMove: "Ask: which amount do we want as one? That is the number you divide by."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather get 2 stickers every day, or 6 stickers every 2 days? Think about how many you get PER day before you answer!",
      answer:
        "2 stickers a day = 2 per day. 6 stickers every 2 days = 6 divided by 2 = 3 per day, so the 6-every-2-days deal gives more. You just compared two ratios!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invent a Squad Snack",
      challenge:
        "Invent your own snack mix using a simple ratio (like 2 scoops pretzels : 1 scoop raisins). Then make enough for your squad of 3 by keeping the same ratio!",
      materials: ["Paper and markers, OR a device to type or draw on"],
      steps: [
        "Pick two ingredients and choose a simple ratio between them.",
        "Draw a snack card that shows your ratio.",
        "Multiply every ingredient by 3 to feed 3 people.",
        "Check: does your bigger recipe still match your first ratio?"
      ],
      deliverable: "A snack card showing your first ratio and the bigger version for 3 people.",
      choiceBoard: [
        "Make a snack card (draw it or type it).",
        "Make a ratio poster showing 3 real groups you find at home (like forks per plate).",
        "Draw a 4-panel comic where a character makes enough snacks for a party."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Ratio Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.math.w1.d1.arena1",
          type: "numeric",
          stem: "A paint mix uses 3 parts blue for every 1 part white. To use 12 parts of blue, how many parts of white do you need?",
          answer: 4,
          tolerance: 0,
          unit: "parts",
          hintLadder: [
            "Blue went from 3 to 12 -- times what number?",
            "12 divided by 3 = 4, so multiply white by 4.",
            "1 x 4 = 4 parts white."
          ],
          explanation: "Scale by 4: 1 x 4 = 4 parts white."
        },
        {
          id: "g5.summer.math.w1.d1.arena2",
          type: "short_answer",
          stem: "Team A reads 10 pages in 2 minutes. Team B reads 12 pages in 3 minutes. Find each team's pages per minute and say who reads faster. Show your work.",
          rubric: {
            level3: "Finds both rates (Team A 5 pages/min, Team B 4 pages/min) and says Team A is faster, with work shown.",
            level2: "Finds one rate or gets the right answer with weak work.",
            level1: "Compares totals only or wrong conclusion."
          },
          exemplar: "Team A: 10 divided by 2 = 5 pages per minute. Team B: 12 divided by 3 = 4 pages per minute. 5 is more than 4, so Team A reads faster.",
          hintLadder: [
            "Find each team's pages in ONE minute.",
            "Divide pages by minutes for each team.",
            "Compare the two numbers."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Ratio Jumping Jacks",
      prompt:
        "Do jumping jacks in a 2:1 pattern -- 2 fast jacks, then 1 slow jack. Repeat that pattern 5 times. Feel your heart speed up!",
      scienceTieIn:
        "Your heart pumps faster to send more oxygen to your muscles -- you will explore how in this week's science quest.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Where did you see a ratio in real life today -- in a snack, a game, or a score? Write one you noticed.",
      badge: { id: "g5-summer-ratio-ranger", name: "Ratio Ranger", emoji: "🧮" },
      estimatedMinutes: 7
    }
  }
};
