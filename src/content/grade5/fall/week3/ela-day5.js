// Grade 5 ELA/Writing — Fall Expedition, Week 3 (The Harvest of Numbers),
// Day 5. Topic: present your data — writing a clear data summary. Capstone
// for the week's harvest-budget project (Grade 5 depth — simpler numbers,
// paragraph frames, more scaffolding).

export const fallG5ElaW3D5 = {
  id: "g5.fall.ela.w3.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Present your data — writing a data summary",
  topicTag: "data-summary-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.5.2", "CCSS.SL.5.4"],
  hook: "Numbers don't speak for themselves — a good writer makes them talk. Today you turn your harvest-budget numbers into a clear, honest summary.",
  miniLesson: [
    "A data summary states the MAIN finding first, then backs it up with the exact numbers. Frame: 'Our harvest ____ (a profit/loss) of $___.'",
    "Be honest: report what the data really shows, even if it isn't what you hoped.",
    "End with a 'so what' — what the numbers mean or what you'd try next time."
  ],
  workedExample: {
    prompt: "Data: income $30, costs $20, leftover $10. Write a one-sentence main finding.",
    steps: [
      "Lead with the headline: there was money left over (a profit).",
      "Include the key number: $10.",
      "Keep it to one clear sentence.",
      "Result: a finding a reader understands right away."
    ],
    answer: "Our harvest made a $10 profit, earning $30 against $20 in costs."
  },
  items: [
    {
      id: "g5.fall.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "Which is the strongest OPENING for a data summary?",
      choices: [
        "There were some numbers.",
        "Our harvest earned a $10 profit this season.",
        "Math is hard.",
        "I hope you like graphs."
      ],
      answerIndex: 1,
      explanation: "It leads with the main finding and an exact number.",
      hintLadder: [
        "A summary should start with the key result.",
        "Which choice states a finding with a number?",
        "A $10 profit is the headline."
      ]
    },
    {
      id: "g5.fall.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Your data shows a small LOSS. What's the honest thing to do in your summary?",
      choices: [
        "Say it was a profit anyway",
        "Hide the numbers",
        "Clearly state the loss and the numbers behind it",
        "Only mention the income"
      ],
      answerIndex: 2,
      explanation: "Honest data writing reports what the numbers really show, including a loss.",
      hintLadder: [
        "Good data writing tells the truth.",
        "What if the result isn't what you hoped for?",
        "Report it accurately, including the loss."
      ],
      misconceptionsTargeted: ["cherry-picks-data"]
    },
    {
      id: "g5.fall.ela.w3.d5.q3",
      type: "multiple_choice",
      stem: "A good data summary ends with a 'so what.' Which is a strong 'so what'?",
      choices: [
        "The end.",
        "Because costs were high, next time we'll buy seeds in a big bag to spend less.",
        "Numbers are numbers.",
        "I'm tired of this project."
      ],
      answerIndex: 1,
      explanation: "It draws a conclusion and gives a next step based on the data.",
      hintLadder: [
        "'So what' means what the data makes you want to do or think.",
        "Which choice uses the result to pick a next step?",
        "Buying a big bag of seeds answers the high-cost finding."
      ]
    },
    {
      id: "g5.fall.ela.w3.d5.q4",
      type: "short_answer",
      stem: "Write a 2–3 sentence data summary for this: 5 crates sold at $6 each, costs $20. State the finding with numbers and add one 'so what.'",
      rubric: {
        level3: "Computes income ($30) and leftover ($10 profit), states it clearly, AND ends with a relevant next step or meaning.",
        level2: "States the finding but the math is slightly off OR there is no 'so what.'",
        level1: "Vague, inaccurate, or just restates the prompt."
      },
      exemplar: "Selling 5 crates at $6 brought in $30, and after $20 in costs the harvest made a $10 profit. The profit was small, so next time we'll try to find ways to lower our costs.",
      hintLadder: [
        "First find income: 5 × $6.",
        "Then leftover: income − $20.",
        "State it, then add what you'd do next time."
      ]
    },
    {
      id: "g5.fall.ela.w3.d5.q5",
      type: "short_answer",
      stem: "Why is it important to use SPECIFIC numbers in a data summary instead of words like 'a lot' or 'some'?",
      rubric: {
        level3: "Explains that exact numbers are precise and can be checked, so the reader can trust and understand them — vague words can't.",
        level2: "Gives a partial reason (e.g., 'it's clearer') without much depth.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "An exact number like '$10 profit' is precise and can be checked, but 'a lot' could mean almost anything and leaves the reader guessing.",
      hintLadder: [
        "What does 'a lot' actually tell a reader?",
        "Can someone check a vague word like 'some'?",
        "Connect exact numbers to being clear and trustworthy."
      ]
    }
  ],
  reflectionPrompt: "Look back at your harvest-budget numbers this week. What's the single most important finding you'd put in the very first sentence?",
  misconceptionBank: [
    {
      id: "cherry-picks-data",
      label: "Reports only the good-looking numbers",
      description: "Shares the nice figures and hides losses or weak results.",
      coachMove: "Explain that honest data writing builds trust; report the whole picture, then say what you'd improve."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Vague or Specific?",
      prompt:
        "Read these two opening lines: (A) 'Our harvest did pretty well this year.' (B) 'Our harvest earned a $12 profit this year.' Which one tells a reader something they can actually use, and why?",
      answer:
        "(B) — '$12 profit' is exact and can be checked, so the reader knows exactly how the harvest did. (A) 'pretty well' could mean almost anything.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Harvest Report",
      challenge:
        "Take your harvest-budget numbers from this week (or invent a set: crates sold, price, costs) and write a short, honest data report a parent or classmate could read in 30 seconds.",
      steps: [
        "Compute your income and leftover (profit or loss) from the numbers.",
        "Write a headline first sentence stating the main finding with a number.",
        "Add 1–2 sentences of supporting numbers — honestly, even a loss.",
        "End with a 'so what': what the numbers mean or what you'd do next time."
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
          id: "g5.fall.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "Data: 4 crates sold at $5 each, with $30 in costs. Which is the most accurate AND honest one-sentence finding?",
          choices: [
            "The harvest was a huge success this year.",
            "Selling 4 crates at $5 brought in $20, which fell $10 short of the $30 in costs — a small loss.",
            "We made a profit because we sold a lot of crates.",
            "The numbers were okay overall."
          ],
          answerIndex: 1,
          explanation: "Income was 4 × $5 = $20, against $30 in costs, so it's a $10 loss. Only option B reports the real numbers honestly.",
          hintLadder: [
            "First compute income: 4 × $5.",
            "Compare $20 income to $30 costs — profit or loss?",
            "Pick the option that states the real numbers, even though it's a loss."
          ]
        },
        {
          id: "g5.fall.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Write a 2–3 sentence data summary for: 6 crates sold at $5 each, costs $20. State the finding with numbers and end with a 'so what.'",
          rubric: {
            level3: "Computes income ($30) and leftover ($10 profit), states it clearly, AND ends with a relevant next step or meaning.",
            level2: "States the finding but the math is slightly off OR there is no 'so what.'",
            level1: "Vague, inaccurate, or just restates the prompt."
          },
          exemplar: "Selling 6 crates at $5 brought in $30, and after $20 in costs the harvest made a $10 profit. That's a nice little profit, so next time we'll try selling a few more crates to earn even more.",
          hintLadder: [
            "First find income: 6 × $5.",
            "Then leftover: income − $20.",
            "State the finding, then add what you'd do next time."
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
      badge: { id: "g5-fall-harvest-data-reporter", name: "Harvest Data Reporter", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
