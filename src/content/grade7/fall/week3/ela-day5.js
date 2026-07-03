// Grade 7 ELA/Writing — Fall Expedition, Week 3 (The Harvest of Numbers),
// Day 5. Topic: present your data — writing a clear, evidence-based data
// summary. Capstone for the week's harvest-budget project.
// Grade-7 lift: claim + evidence + reasoning structure, addressing a
// counterpoint, and precise, honest quantitative language.

export const fallG7ElaW3D5 = {
  id: "g7.fall.ela.w3.d5",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Present your data — writing a data summary",
  topicTag: "data-summary-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.1.B"],
  hook: "Numbers don't speak for themselves — a strong writer makes them argue. Today you turn your harvest-budget data into a claim backed by evidence and reasoning, honest enough to admit a counterpoint.",
  miniLesson: [
    "Structure a data summary as claim → evidence → reasoning: state the finding, cite the specific numbers, then explain what they mean.",
    "Be accurate and honest: report what the data shows, including losses, and acknowledge a limit or counterpoint so the reader trusts you.",
    "Use precise quantitative language — a $50 profit, a 25% increase — never vague words like 'a lot' or 'some'."
  ],
  workedExample: {
    prompt: "Data: income $300, costs $200, profit $100 (a 50% return on costs). Write a claim with evidence and reasoning in 2 sentences.",
    steps: [
      "Claim: the harvest was profitable.",
      "Evidence: cite $300 income against $200 costs, a $100 profit.",
      "Reasoning: that $100 is a 50% return on the $200 spent, which is healthy.",
      "Result: a summary a reader both grasps and trusts."
    ],
    answer: "The harvest was profitable: $300 in income against $200 in costs left a $100 profit. That profit is a 50% return on what we spent, a strong result for a first season."
  },
  items: [
    {
      id: "g7.fall.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "Which opening states a CLAIM backed by specific EVIDENCE, as a data summary should?",
      choices: [
        "There were some numbers this season.",
        "Our harvest was profitable, earning a $100 profit on $300 of income against $200 in costs.",
        "Math can be tricky sometimes.",
        "I really hope you enjoy this report."
      ],
      answerIndex: 1,
      explanation: "It makes a clear claim (profitable) and cites the specific figures that support it.",
      hintLadder: [
        "A data summary leads with a claim AND the numbers behind it.",
        "Which option states a finding and cites specific figures?",
        "The profitable claim with $100/$300/$200 is the evidence-backed one."
      ]
    },
    {
      id: "g7.fall.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Your data shows a small LOSS. What is the honest, trust-building move in your summary?",
      choices: [
        "Report a profit anyway",
        "Leave out the numbers entirely",
        "State the loss with its figures and briefly explain what caused it",
        "Mention only the income and stop there"
      ],
      answerIndex: 2,
      explanation: "Honest quantitative writing reports the real result, including losses, and gives context that builds the reader's trust.",
      hintLadder: [
        "Good data writing is truthful even when the news is bad.",
        "What builds a reader's trust when the result disappoints?",
        "Report the loss with figures and explain the cause."
      ],
      misconceptionsTargeted: ["cherry-picks-data"]
    },
    {
      id: "g7.fall.ela.w3.d5.q3",
      type: "multiple_choice",
      stem: "A Grade 7 data summary should acknowledge a COUNTERPOINT or limit. Which sentence does that best?",
      choices: [
        "This proves our farm is the best, period.",
        "The $120 profit is encouraging, though one good season isn't proof the trend will hold next year.",
        "Numbers are just numbers.",
        "We made money, so nothing could go wrong."
      ],
      answerIndex: 1,
      explanation: "It states the finding but honestly limits the claim, showing the reader you're not overclaiming from one season.",
      hintLadder: [
        "A counterpoint admits what the data does NOT prove.",
        "Which option qualifies the claim instead of overselling it?",
        "The 'one good season isn't proof' sentence limits the claim honestly."
      ]
    },
    {
      id: "g7.fall.ela.w3.d5.q4",
      type: "short_answer",
      stem: "Write a 3–4 sentence data summary for this: 30 crates sold at $12 each, costs $250. Use claim → evidence → reasoning, and include a 'so what' or counterpoint.",
      rubric: {
        level3: "Computes income ($360) and profit ($110) correctly, structures it as claim + specific evidence + reasoning, AND ends with a relevant 'so what' or an honest counterpoint.",
        level2: "States the finding with mostly correct numbers but is missing the reasoning OR the 'so what'/counterpoint.",
        level1: "Vague, inaccurate math, or just restates the prompt."
      },
      exemplar: "The harvest turned a profit this season. Selling 30 crates at $12 brought in $360, and after $250 in costs we cleared $110 — a 44% return on what we spent. That margin is healthy, so next season we'll expand slightly, though one profitable season isn't proof the crop will sell as well again.",
      hintLadder: [
        "First find income: 30 × $12.",
        "Then profit: income − $250, and consider the return as a percent.",
        "State the claim, cite the numbers, explain them, then add a 'so what' or counterpoint."
      ]
    },
    {
      id: "g7.fall.ela.w3.d5.q5",
      type: "short_answer",
      stem: "Explain why precise numbers AND a stated counterpoint make a data summary more persuasive than vague, one-sided praise.",
      rubric: {
        level3: "Explains that precise numbers are verifiable and let readers judge for themselves, AND that acknowledging a counterpoint builds credibility and pre-empts doubt — connecting both to trust and persuasion.",
        level2: "Covers the value of precise numbers OR the counterpoint, but not both, or with limited depth.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Precise numbers like '$110 profit, a 44% return' can be checked, so the reader can verify the claim instead of taking 'we did great' on faith. Naming a counterpoint — that one season isn't a guarantee — shows I'm being fair, which makes the reader trust the parts I do claim. Together they make the summary more persuasive than one-sided praise, which sounds like a sales pitch.",
      hintLadder: [
        "What can a reader do with an exact number that they can't with 'a lot'?",
        "Why does admitting a limit make you MORE believable, not less?",
        "Connect precision and honesty to trust and persuasion."
      ]
    }
  ],
  reflectionPrompt: "Look back at your harvest-budget numbers this week. What's the single claim you'd lead with, what evidence backs it, and what honest counterpoint would you add?",
  misconceptionBank: [
    {
      id: "cherry-picks-data",
      label: "Reports only the flattering numbers",
      description: "Shares the good figures and hides losses, limits, or weak results.",
      coachMove: "Stress that honest data writing builds trust; report the full picture and name a counterpoint, then explain what you'd improve."
    },
    {
      id: "overclaims-from-little-data",
      label: "Draws a huge conclusion from one data point",
      description: "Treats a single season or number as proof of a lasting trend.",
      coachMove: "Add a qualifier that limits the claim to what the data supports — one result is a start, not proof."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Claim, Evidence, or Fluff?",
      prompt:
        "Read three lines: (A) 'Our harvest did pretty well.' (B) 'Our harvest earned a $120 profit, a 40% return on costs.' (C) 'We're clearly the best farm ever.' Which one is a claim backed by evidence, and what's wrong with the other two?",
      answer:
        "(B) is the claim with evidence — an exact profit and a return percentage a reader can check. (A) is vague fluff ('pretty well' means nothing measurable), and (C) overclaims far beyond what any single season's data could prove.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Write a Harvest Report",
      challenge:
        "Take your harvest-budget numbers from this week (or invent a set: crates sold, price, costs) and write a short, honest report structured as claim → evidence → reasoning, ending with a 'so what' and one honest counterpoint.",
      steps: [
        "Compute your income and profit (or loss), and the return as a percent of costs.",
        "Write a claim sentence stating the main finding.",
        "Add 1–2 sentences of specific evidence and the reasoning that explains it — honestly, even a loss.",
        "End with a 'so what' next step AND one honest counterpoint or limit."
      ],
      deliverable: "A 4–5 sentence data report: a claim, specific evidence, reasoning, a 'so what,' and an honest counterpoint.",
      choiceBoard: [
        "Write the report as a short structured paragraph.",
        "Design it as a one-page 'harvest scorecard' with the claim in big text and evidence beneath.",
        "Record a 45-second spoken summary as if reporting to the whole farm crew, including your counterpoint."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Data Summary Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "Data: 40 crates sold at $8 each, with $400 in costs. Which is the most accurate, honest claim-with-evidence?",
          choices: [
            "The harvest was a huge success this year.",
            "Selling 40 crates at $8 brought in $320, which fell $80 short of the $400 in costs — a $80 loss, a 20% shortfall against costs.",
            "We made a profit because we sold plenty of crates.",
            "The numbers were fine overall."
          ],
          answerIndex: 1,
          explanation: "Income was 40 × $8 = $320 against $400 costs, an $80 loss (20% of costs). Only option B states the real figures honestly with a claim and evidence.",
          hintLadder: [
            "First compute income: 40 × $8.",
            "Compare $320 income to $400 costs — profit or loss, and how big relative to costs?",
            "Pick the option that reports the real numbers, even though it's a loss."
          ]
        },
        {
          id: "g7.fall.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Write a 3–4 sentence data summary for: 60 crates sold at $7 each, costs $300. Use claim → evidence → reasoning and end with a 'so what' AND an honest counterpoint.",
          rubric: {
            level3: "Computes income ($420) and profit ($120) correctly, structures claim + evidence + reasoning, AND ends with both a 'so what' and an honest counterpoint or limit.",
            level2: "States the finding with mostly correct numbers but is missing the reasoning OR the counterpoint.",
            level1: "Vague, inaccurate math, or just restates the prompt."
          },
          exemplar: "The harvest was clearly profitable this season. Selling 60 crates at $7 brought in $420, and after $300 in costs we cleared a $120 profit — a 40% return on what we spent. That's a healthy margin, so next season we'll try a bit more land to grow it; still, one strong season isn't proof prices will hold, so we'll watch demand before expanding too far.",
          hintLadder: [
            "First find income: 60 × $7.",
            "Then profit: income − $300, and the return as a percent of costs.",
            "State the claim, cite evidence, reason, then add a 'so what' AND a counterpoint."
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
        "Slow breathing tells your body the 'alarm' is off, lowering stress so your brain can focus on clear, careful writing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Look back at your harvest-budget numbers this week. What single claim would you lead with, what evidence backs it, and what honest counterpoint keeps you from overclaiming?",
      badge: { id: "g7-fall-harvest-evidence-writer", name: "Harvest Evidence Writer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
