// Grade 6 ELA/Writing — Spring Expedition, Week 6 (Code That Grows), Day 5.
// Topic: explanatory writing — explain how your growth simulation works and what it predicts.

export const springG6ElaW6D5 = {
  id: "g6.spring.ela.w6.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Explanatory writing — explain your growth simulation",
  topicTag: "explanatory-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.A"],
  hook: "You built a growth simulation this week — now you have to make someone ELSE understand it. Explanatory writing walks a reader step by step through how something works and what it predicts. Today you turn your code into clear words.",
  miniLesson: [
    "Explanatory (informative) writing teaches a reader how something works — no arguing, just clear explaining.",
    "Strong explanatory writing has a topic sentence, then details in a logical ORDER, linked with transitions like 'first,' 'next,' 'each step,' and 'as a result.'",
    "For a simulation, you explain three things: the RULE it repeats, the STARTING value, and the PREDICTION (what the numbers will do over time)."
  ],
  workedExample: {
    prompt: "Turn these notes into one clear explanatory sentence: rule = double each day; start = 2; result = grows fast.",
    steps: [
      "Start with the topic: what the simulation models.",
      "State the starting value and the rule it repeats.",
      "End with the prediction the numbers make.",
      "Result: 'My simulation starts with 2 cells and doubles them each day, so the population grows faster and faster over time.'"
    ],
    answer: "My simulation starts with 2 cells and doubles them each day, so the population grows faster and faster over time."
  },
  items: [
    {
      id: "g6.spring.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "What is the main GOAL of explanatory writing?",
      choices: [
        "To argue that your opinion is right",
        "To list as many big words as possible",
        "To tell an exciting made-up story",
        "To clearly inform the reader about how something works"
      ],
      answerIndex: 3,
      explanation: "Explanatory (informative) writing exists to teach or inform clearly — not to argue or entertain with fiction.",
      hintLadder: [
        "Is explanatory writing trying to WIN an argument?",
        "Its job is to help the reader understand something.",
        "It clearly informs how something works."
      ]
    },
    {
      id: "g6.spring.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "Which transition word best signals the ORDER of steps in explaining a simulation?",
      choices: [
        "Next",
        "However",
        "Although",
        "Instead"
      ],
      answerIndex: 0,
      explanation: "'Next' signals sequence — it moves the reader from one step to the following step. The others signal contrast, not order.",
      hintLadder: [
        "Which word shows one thing happening AFTER another?",
        "'However' and 'although' show contrast, not order.",
        "'Next' moves to the following step."
      ],
      misconceptionsTargeted: ["explain-means-argue"]
    },
    {
      id: "g6.spring.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence best EXPLAINS a growth simulation (rather than arguing about it)?",
      choices: [
        "Everyone should build a doubling simulation because they are the best.",
        "Each day my simulation doubles the number of algae, so the count climbs from 2 to 4 to 8 and keeps rising.",
        "I think algae are kind of gross, honestly.",
        "Doubling simulations are more fun than adding ones, for sure."
      ],
      answerIndex: 1,
      explanation: "It clearly informs the reader of the rule, the values, and what the numbers do — that's explanatory writing. The others argue or give opinions.",
      hintLadder: [
        "Which sentence teaches how the simulation works?",
        "Avoid sentences that argue or give personal opinions.",
        "The doubling-algae sentence explains the rule and the numbers."
      ]
    },
    {
      id: "g6.spring.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Write a clear TOPIC SENTENCE to open an explanation of a growth simulation you built this week. It should name what your simulation models.",
      rubric: {
        level3: "A clear topic sentence that names what the simulation models and signals an explanation will follow.",
        level2: "Names the topic but is vague or reads like an opinion instead of a lead-in to explaining.",
        level1: "Off-topic, argues, or does not introduce a simulation."
      },
      exemplar: "This explanation shows how my plant-growth simulation uses a loop to model how tall a sunflower gets over ten days.",
      hintLadder: [
        "Name what your simulation is about.",
        "Signal that you will explain how it works.",
        "Keep it informative, not an opinion."
      ]
    },
    {
      id: "g6.spring.ela.w6.d5.q5",
      type: "short_answer",
      stem: "In 3–4 sentences, explain how your growth simulation works and what it predicts. Include the starting value, the rule it repeats, and what the numbers do over time.",
      rubric: {
        level3: "Clearly explains the starting value AND the repeated rule AND the prediction over time, in logical order with transitions.",
        level2: "Includes two of the three parts, or the order/transitions are weak.",
        level1: "Missing most parts, unclear, or argues instead of explaining."
      },
      exemplar: "My simulation models a bacteria colony. It starts with 2 cells, and each hour a loop doubles the number of cells. First it grows to 4, then 8, then 16. As a result, the colony grows faster and faster, and my simulation predicts it will pass 1,000 cells in about 9 hours.",
      hintLadder: [
        "Start by stating your starting value.",
        "Then explain the rule the loop repeats each step.",
        "End with what the numbers will do over time (your prediction)."
      ]
    }
  ],
  reflectionPrompt: "Reread your explanation. If a younger student read it, which sentence would confuse them most — and how could you make it clearer?",
  misconceptionBank: [
    {
      id: "explain-means-argue",
      label: "Confuses explaining with arguing",
      description: "Thinks explanatory writing should convince the reader of an opinion instead of informing them how something works.",
      coachMove: "Ask: 'Are you telling the reader how it WORKS, or trying to win them to your side?' Explanatory writing does the first."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Explain or Argue?",
      prompt:
        "Two sentences: (A) 'My simulation doubles the algae each day, so the count goes 2, 4, 8, 16.' (B) 'Doubling simulations are way better than any other kind.' Which one EXPLAINS how something works, and which one just argues an opinion?",
      answer:
        "(A) explains — it tells the rule and the numbers so the reader understands how it works. (B) just argues an opinion without explaining anything.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Simulation Explainer",
      challenge:
        "Write a short explainer (one paragraph) that teaches a reader how your week's growth simulation works. Walk them through the starting value, the rule the loop repeats, and the prediction — using order transitions like 'first,' 'next,' and 'as a result.'",
      materials: ["Paper or a device to write on"],
      steps: [
        "Write a topic sentence naming what your simulation models.",
        "State the starting value and the rule it repeats each step.",
        "Use transitions to walk through what the numbers do over time.",
        "End with the prediction your simulation makes."
      ],
      deliverable: "A one-paragraph explainer with a topic sentence, ordered steps, transitions, and a prediction.",
      choiceBoard: [
        "Write the one-paragraph explainer with transitions.",
        "Make a labeled diagram of your simulation with a caption explaining each part.",
        "Record a 30-second 'how it works' narration walking through your simulation."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "You are explaining a simulation and want to signal the FINAL result. Which transition fits best?",
          choices: [
            "For example,",
            "On the other hand,",
            "As a result,",
            "In contrast,"
          ],
          answerIndex: 2,
          explanation: "'As a result' signals a conclusion or outcome — perfect for stating what the simulation finally predicts. The others signal contrast or examples.",
          hintLadder: [
            "Which phrase introduces an outcome or conclusion?",
            "'On the other hand' and 'in contrast' show differences, not results.",
            "'As a result' leads into the final prediction."
          ]
        },
        {
          id: "g6.spring.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "A student wrote: 'My simulation is the best and it grows.' Rewrite it as a clear EXPLANATORY sentence that states a starting value and the rule it repeats.",
          rubric: {
            level3: "Removes the opinion AND states a starting value AND the repeated rule, clearly informing the reader.",
            level2: "Improves clarity but is missing the starting value or the rule.",
            level1: "Still argues an opinion or does not explain how it works."
          },
          exemplar: "My simulation starts with 3 flowers and adds 2 more each day, so the flower count climbs steadily over time.",
          hintLadder: [
            "Cut the opinion ('is the best').",
            "Add a starting value.",
            "State the rule it repeats each step."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Step-by-Step Breath",
      prompt:
        "Explain a breath to yourself in steps: FIRST breathe in slowly for 4 counts, NEXT hold for 4, then breathe out for 4, and AS A RESULT feel calmer. Repeat the ordered breath 4 times.",
      scienceTieIn: "Naming each step of your breath uses the same 'first, next, as a result' order as explanatory writing — and slow breathing calms your nervous system so your writing brain works better.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained your growth simulation to a reader. What was the hardest part to put into words, and what trick helped you make it clear?",
      badge: { id: "spring-simulation-explainer", name: "Simulation Explainer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
