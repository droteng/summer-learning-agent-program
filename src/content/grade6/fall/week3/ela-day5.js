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
  estimatedMinutes: 18,
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
        "There were some numbers.",
        "Our harvest earned a $100 profit this season.",
        "Math is hard.",
        "I hope you like graphs."
      ],
      answerIndex: 1,
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
        "Clearly state the loss and the figures behind it",
        "Only mention the income"
      ],
      answerIndex: 2,
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
        "Because costs were high, next season we'll buy seeds in bulk to spend less.",
        "Numbers are numbers.",
        "I'm tired of this project."
      ],
      answerIndex: 1,
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
  ]
};
