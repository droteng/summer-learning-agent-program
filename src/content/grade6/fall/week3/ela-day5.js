// Grade 6 ELA/Writing — Fall Expedition, Week 3 (The Harvest of Numbers),
// Day 5. Topic: present your data — writing a clear data summary. Capstone
// for the week's harvest-budget project.

export const fallG6ElaW3D5 = {
  id: "g6.fall.ela.w3.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Present your data — writing a data summary",
  topicTag: "data-summary-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.SL.6.4"],
  hook: "Numbers don't speak for themselves — a good writer makes them talk. Today you turn your harvest-budget data into a clear, honest summary.",
  miniLesson: [
    "A data summary states the main finding first, then backs it up with specific numbers.",
    "Be accurate and honest: report what the data shows, not what you wish it showed.",
    "End with a 'so what' — what the numbers mean or what you'd do next."
  ],
  workedExample: {
    prompt: "Data: income $300, costs $200, profit $100. Write a one-sentence main finding.",
    steps: [
      "Lead with the headline number: there was a profit.",
      "Include the key figure: $100.",
      "Keep it one clear sentence.",
      "Result: a finding a reader grasps immediately."
    ],
    answer: "The harvest made a profit of $100, earning $300 against $200 in costs."
  },
  items: [
    {
      id: "g6.fall.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "Which is the strongest OPENING for a data summary?",
      choices: [
        "Our harvest earned a $100 profit this season.",
        "There were some numbers.",
        "Math is hard.",
        "I hope you like graphs."
      ],
      answerIndex: 0,
      explanation: "It leads with the main finding and a specific number.",
      hintLadder: [
        "A summary should lead with the key result.",
        "Which option states a finding with a number?",
        "Profit of $100 is the headline."
      ]
    },
    {
      id: "g6.fall.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Your data shows a small LOSS. What's the honest thing to do in your summary?",
      choices: [
        "Report a profit anyway",
        "Hide the numbers",
        "Only mention the income",
        "Clearly state the loss and the figures behind it"
      ],
      answerIndex: 3,
      explanation: "Honest data writing reports what the numbers actually show, including losses.",
      hintLadder: [
        "Good data writing is truthful.",
        "What if the result isn't what you hoped?",
        "Report it accurately, including the loss."
      ],
      misconceptionsTargeted: ["cherry-picks-data"]
    },
    {
      id: "g6.fall.ela.w3.d5.q3",
      type: "multiple_choice",
      stem: "A good data summary ends with a 'so what.' Which is a strong 'so what'?",
      choices: [
        "The end.",
        "Numbers are numbers.",
        "Because costs were high, next season we'll buy seeds in bulk to spend less.",
        "I'm tired of this project."
      ],
      answerIndex: 2,
      explanation: "It draws a conclusion and proposes a next step based on the data.",
      hintLadder: [
        "'So what' means what the data leads you to do or think.",
        "Which option uses the result to decide a next step?",
        "Buying in bulk responds to the high-cost finding."
      ]
    },
    {
      id: "g6.fall.ela.w3.d5.q4",
      type: "short_answer",
      stem: "Write a 2–3 sentence data summary for this: 30 crates sold at $10 each, costs $250. State the finding with numbers and one 'so what.'",
      rubric: {
        level3: "Computes income ($300) and profit ($50), states it clearly, AND ends with a relevant next step or meaning.",
        level2: "States the finding but math is slightly off OR no 'so what.'",
        level1: "Vague, inaccurate, or just restates the prompt."
      },
      exemplar: "Selling 30 crates at $10 brought in $300, and after $250 in costs the harvest made a $50 profit. The margin was thin, so next season we'll look for ways to cut costs and grow the profit.",
      hintLadder: [
        "First find income: 30 × $10.",
        "Then profit: income − $250.",
        "State it, then add what you'd do next."
      ]
    },
    {
      id: "g6.fall.ela.w3.d5.q5",
      type: "short_answer",
      stem: "Why is it important to include SPECIFIC numbers in a data summary instead of words like 'a lot' or 'some'?",
      rubric: {
        level3: "Explains that specific numbers are precise, verifiable, and let the reader judge for themselves — vague words don't.",
        level2: "Gives a partial reason (e.g., 'it's clearer') without depth.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Specific numbers like '$50 profit' are exact and can be checked, while 'a lot' could mean anything and leaves the reader guessing.",
      hintLadder: [
        "What does 'a lot' actually tell a reader?",
        "Can someone verify a vague word?",
        "Connect numbers to precision and trust."
      ]
    }
  ],
  reflectionPrompt: "Look back at your harvest-budget numbers this week. What's the single most important finding you'd put in the first sentence?",
  misconceptionBank: [
    {
      id: "cherry-picks-data",
      label: "Reports only the flattering numbers",
      description: "Shares the good figures and hides losses or weak results.",
      coachMove: "Stress that honest data writing builds trust; report the full picture, then explain what you'd improve."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Vague or Specific?",
      prompt:
        "Read these two opening lines: (A) 'Our harvest did pretty well this year.' (B) 'Our harvest earned a $120 profit this year.' Which one tells a reader something they can actually use, and why?",
      answer:
        "(B) — '$120 profit' is exact and checkable, so the reader knows precisely how the harvest did. (A) 'pretty well' could mean almost anything.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Harvest Report",
      challenge:
        "Take your harvest-budget numbers from this week (or invent a set: crates sold, price, costs) and write a short, honest data report a parent or classmate could read in 30 seconds.",
      steps: [
        "Compute your income and profit (or loss) from the numbers.",
        "Write a headline first sentence stating the main finding with a number.",
        "Add 1–2 sentences of supporting figures — honestly, even a loss.",
        "End with a 'so what': what the numbers mean or what you'd do next season."
      ],
      deliverable: "A 3–4 sentence data report: a headline finding, supporting numbers, and a 'so what.'",
      choiceBoard: [
        "Write the report as a short paragraph.",
        "Design it as a one-page 'harvest scorecard' with the finding in big text.",
        "Record a 30-second spoken summary as if reporting to the whole farm crew."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Summary Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "Data: 40 crates sold at $8 each, with $400 in costs. Which is the most accurate AND honest one-sentence finding?",
          choices: [
            "The harvest was a huge success this year.",
            "Selling 40 crates at $8 brought in $320, which fell $80 short of the $400 in costs — a small loss.",
            "We made a profit because we sold a lot of crates.",
            "The numbers were okay overall."
          ],
          answerIndex: 1,
          explanation: "Income was 40 × $8 = $320, against $400 costs, so it's an $80 loss. Only option B reports the real figures honestly.",
          hintLadder: [
            "First compute income: 40 × $8.",
            "Compare $320 income to $400 costs — profit or loss?",
            "Pick the option that states the real numbers, even though it's a loss."
          ]
        },
        {
          id: "g6.fall.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Write a 2–3 sentence data summary for: 60 crates sold at $7 each, costs $300. State the finding with numbers and end with a 'so what.'",
          rubric: {
            level3: "Computes income ($420) and profit ($120), states it clearly, AND ends with a relevant next step or meaning.",
            level2: "States the finding but math is slightly off OR no 'so what.'",
            level1: "Vague, inaccurate, or just restates the prompt."
          },
          exemplar: "Selling 60 crates at $7 brought in $420, and after $300 in costs the harvest made a $120 profit. That's a healthy margin, so next season we'll try growing the same crop on a bit more land to earn even more.",
          hintLadder: [
            "First find income: 60 × $7.",
            "Then profit: income − $300.",
            "State the finding, then add what you'd do next."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Box Breathing",
      prompt:
        "Try box breathing 4 times: breathe in for 4 counts, hold for 4, out for 4, hold for 4. Picture your busy thoughts settling like leaves drifting to the ground.",
      scienceTieIn:
        "Slow breathing tells your body the 'alarm' is off, lowering stress so your brain can focus on clear writing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Look back at your harvest-budget numbers this week. What's the single most important finding you'd put in the very first sentence, and why that one?",
      badge: { id: "harvest-data-reporter", name: "Harvest Data Reporter", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
