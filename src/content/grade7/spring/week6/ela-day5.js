// Grade 7 ELA/Writing — Spring Expedition, Week 6 (Code That Grows), Day 5.
// Topic: explanatory writing, raised to Grade 7 — multi-paragraph structure with
// precise domain vocabulary, cause-and-effect transitions, and grounding the
// prediction in the simulation's evidence (the rule and the data it produces).

export const springG7ElaW6D5 = {
  id: "g7.spring.ela.w6.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Explanatory writing — explain your growth simulation with precision and evidence",
  topicTag: "explanatory-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2", "CCSS.W.7.2.C"],
  hook: "You built a growth simulation this week — now make a reader truly understand not just WHAT it does but WHY the numbers behave that way. Grade 7 explanatory writing uses precise vocabulary, cause-and-effect transitions, and evidence from your data to explain and predict. Today you turn your code into a clear, well-built explanation.",
  miniLesson: [
    "Explanatory (informative) writing teaches how something works and WHY — it explains cause and effect, it does not argue an opinion.",
    "Strong Grade 7 explanations use precise DOMAIN vocabulary (variable, loop, growth factor, exponential) and cohesive transitions that show cause and effect: 'because,' 'as a result,' 'therefore,' 'which causes.'",
    "For a simulation, explain FOUR things and back the prediction with evidence: the STARTING value, the RULE it repeats, the DATA the rule produces, and the PREDICTION that data supports — showing the reader how the evidence leads to the conclusion."
  ],
  workedExample: {
    prompt: "Turn these notes into one precise, cause-and-effect explanatory sentence: rule = triples each day; start = 2; data = 2, 6, 18; because the growth factor is 3, it accelerates.",
    steps: [
      "Name the model and the starting value with precise vocabulary.",
      "State the rule as a repeated growth factor.",
      "Use a cause-and-effect transition to link the factor to the accelerating data.",
      "Result: 'My simulation starts with 2 cells and multiplies them by a growth factor of 3 each day, producing 2, 6, then 18, and because that factor compounds, the population accelerates faster and faster over time.'"
    ],
    answer: "My simulation starts with 2 cells and multiplies them by a growth factor of 3 each day, producing 2, 6, then 18, and because that factor compounds, the population accelerates faster and faster over time."
  },
  items: [
    {
      id: "g7.spring.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Beyond stating WHAT happens, what does strong Grade 7 explanatory writing about a simulation also make clear?",
      choices: [
        "Why the reader should prefer this simulation over all others",
        "WHY the numbers behave that way — the cause-and-effect behind the pattern",
        "A dramatic fictional story about the cells",
        "As many advanced vocabulary words as possible, whether or not they fit"
      ],
      answerIndex: 1,
      explanation: "Grade 7 explanatory writing explains cause and effect — WHY the pattern happens — not just what happens, and without arguing an opinion.",
      hintLadder: [
        "Explanatory writing informs; does it just list what happens?",
        "Grade 7 pushes you to explain the REASON behind the pattern.",
        "It makes the cause-and-effect clear."
      ]
    },
    {
      id: "g7.spring.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "Which transition best signals a CAUSE-AND-EFFECT link when explaining why a simulation's numbers accelerate?",
      choices: [
        "On the other hand,",
        "As a result,",
        "For instance,",
        "In the meantime,"
      ],
      answerIndex: 1,
      explanation: "'As a result' signals that one thing CAUSES another — perfect for linking the repeated rule to the accelerating data. The others signal contrast, example, or time.",
      hintLadder: [
        "Which phrase shows one thing causing another?",
        "'On the other hand' shows contrast; 'for instance' gives an example.",
        "'As a result' signals cause and effect."
      ],
      misconceptionsTargeted: ["explain-means-argue"]
    },
    {
      id: "g7.spring.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence best EXPLAINS a growth simulation with precise vocabulary and evidence (rather than arguing about it)?",
      choices: [
        "Everyone should build an exponential simulation because they are clearly the coolest.",
        "Because my loop multiplies the algae by a growth factor of 2 each hour, the data climbs from 3 to 6 to 12, which shows the exponential curve accelerating.",
        "Honestly, I find algae kind of gross, so I picked it.",
        "Doubling simulations are way more fun than adding ones, no question."
      ],
      answerIndex: 1,
      explanation: "It uses precise terms (loop, growth factor, exponential), cites the data, and uses cause-and-effect ('because... which shows') — that is Grade 7 explanatory writing. The others argue or give opinions.",
      hintLadder: [
        "Which sentence explains the cause AND cites the data?",
        "Avoid sentences that argue or give personal opinions.",
        "The growth-factor sentence explains why the numbers accelerate."
      ]
    },
    {
      id: "g7.spring.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Write a clear TOPIC SENTENCE to open a multi-paragraph explanation of a growth simulation you built. It should name what the simulation models AND preview that you will explain how and why it grows.",
      rubric: {
        level3: "A precise topic sentence that names what the simulation models AND previews an explanation of how/why it grows, using at least one domain term.",
        level2: "Names the topic but does not preview the how/why, or reads like an opinion.",
        level1: "Off-topic, argues, or does not introduce a simulation."
      },
      exemplar: "This explanation shows how my sunflower-growth simulation uses a loop with a fixed growth factor to model — and predict — how tall the plant becomes over ten days, and why that height accelerates.",
      hintLadder: [
        "Name what your simulation models, using a domain term.",
        "Preview that you'll explain HOW and WHY it grows.",
        "Keep it informative, not an opinion."
      ]
    },
    {
      id: "g7.spring.ela.w6.d5.q5",
      type: "short_answer",
      stem: "In 4–5 sentences, explain how your growth simulation works AND why its numbers behave that way. Include the starting value, the rule it repeats, the data it produces, and a prediction grounded in that data — using cause-and-effect transitions.",
      rubric: {
        level3: "Clearly explains the starting value, the repeated rule, the data produced, AND a prediction grounded in the data, in logical order with cause-and-effect transitions and precise vocabulary.",
        level2: "Includes three of the four parts, or the cause-and-effect/evidence link is weak.",
        level1: "Missing most parts, unclear, or argues instead of explaining."
      },
      exemplar: "My simulation models a bacteria colony. It starts with 2 cells, and each hour a loop multiplies the count by a growth factor of 2. As a result, the data climbs 2, 4, 8, 16, and because each jump is a percentage of a growing number, the increases get larger every hour. Therefore my simulation predicts the colony will pass 1,000 cells in about 9 hours — the accelerating data supports that exponential forecast.",
      hintLadder: [
        "State the starting value and the repeated rule with precise terms.",
        "Show the data and use a cause-and-effect transition to explain WHY it accelerates.",
        "End with a prediction that the data supports."
      ]
    }
  ],
  reflectionPrompt: "Reread your explanation. Which sentence best shows the reader WHY (not just what) the numbers grow the way they do — and how could you strengthen the cause-and-effect link?",
  misconceptionBank: [
    {
      id: "explain-means-argue",
      label: "Confuses explaining with arguing",
      description: "Thinks explanatory writing should convince the reader of an opinion instead of informing them how and why something works.",
      coachMove: "Ask: 'Are you telling the reader how and WHY it works, or trying to win them to your side?' Explanatory writing does the first."
    },
    {
      id: "states-what-not-why",
      label: "States what happens but not why",
      description: "Lists the data without explaining the cause behind the pattern, missing the Grade 7 cause-and-effect bar.",
      coachMove: "After each 'what' sentence, ask 'why does that happen?' and add a 'because' clause to answer it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Explains Why, or Just Argues?",
      prompt:
        "Two sentences: (A) 'Because my loop doubles the algae each day, the count climbs 2, 4, 8, 16, which is why it accelerates.' (B) 'Doubling simulations are just better than every other kind.' Which one EXPLAINS the cause behind the pattern, and which only argues an opinion?",
      answer:
        "(A) explains — it gives the rule, the data, AND the cause ('because... which is why it accelerates'). (B) just argues an opinion without explaining how or why anything works.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Simulation Explainer",
      challenge:
        "Write a short two-paragraph explainer that teaches a reader how AND why your week's growth simulation works. Paragraph 1: the starting value and the rule; paragraph 2: the data and the prediction it supports — using cause-and-effect transitions and precise vocabulary throughout.",
      materials: ["Paper or a device to write on"],
      steps: [
        "Write a topic sentence naming what your simulation models and previewing how/why it grows.",
        "In paragraph 1, state the starting value and the rule the loop repeats, using domain terms.",
        "In paragraph 2, show the data and use cause-and-effect transitions to explain WHY it behaves that way.",
        "End with a prediction grounded in the data your rule produces."
      ],
      deliverable: "A two-paragraph explainer with a topic sentence, precise vocabulary, cause-and-effect transitions, data, and an evidence-based prediction.",
      choiceBoard: [
        "Write the two-paragraph explainer with cause-and-effect transitions.",
        "Make a labeled diagram of your simulation with captions explaining how AND why each part works.",
        "Record a 45-second 'how and why it works' narration walking through the rule, the data, and the prediction."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "You are explaining WHY a simulation's growth speeds up and want a transition that signals the CAUSE of that acceleration. Which fits best?",
          choices: [
            "Because each jump is a percentage of a growing number,",
            "On the other hand,",
            "For example,",
            "Meanwhile,"
          ],
          answerIndex: 0,
          explanation: "'Because...' directly names the cause of the acceleration — exactly the cause-and-effect move Grade 7 explanatory writing needs. The others signal contrast, example, or time.",
          hintLadder: [
            "Which phrase introduces a CAUSE?",
            "'On the other hand' and 'meanwhile' don't explain why.",
            "'Because...' names the reason the growth speeds up."
          ]
        },
        {
          id: "g7.spring.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "A student wrote: 'My simulation is the best and it grows.' Rewrite it as a clear EXPLANATORY sentence that states a starting value, the rule it repeats, AND a cause-and-effect reason for how the numbers behave.",
          rubric: {
            level3: "Removes the opinion AND states a starting value AND the repeated rule AND a cause-and-effect clause explaining the behavior.",
            level2: "Improves clarity and gives the rule but the cause-and-effect reason is missing or weak.",
            level1: "Still argues an opinion or does not explain how/why it works."
          },
          exemplar: "My simulation starts with 3 cells and doubles them each hour, so because each step multiplies the whole count, the numbers grow faster and faster over time.",
          hintLadder: [
            "Cut the opinion ('is the best').",
            "Add a starting value and the repeated rule.",
            "Add a 'because...' clause explaining why the numbers behave that way."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Cause-and-Effect Breath",
      prompt:
        "Explain a breath as cause and effect: breathe in slowly for 4 counts, hold for 4, breathe out for 4, and BECAUSE you slowed your breath, AS A RESULT your body feels calmer. Repeat the ordered breath 4 times, naming the cause each time.",
      scienceTieIn: "Naming the cause ('because') and effect ('as a result') of your breath uses the same cause-and-effect moves as Grade 7 explanatory writing — and slow breathing calms your nervous system so your writing brain works better.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained not just WHAT your simulation does but WHY the numbers behave that way. What was the hardest cause-and-effect link to put into words, and what helped you make it clear?",
      badge: { id: "g7-spring-cause-effect-explainer", name: "Cause & Effect Explainer", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
