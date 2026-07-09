// Grade 5 ELA/Writing — Spring Expedition, Week 6 (Code That Grows), Day 5.
// Topic: explanatory writing — explain how your growth loop works and what it predicts.
// Grade 5 depth: shorter passages, vocab support, paragraph frames, no exponential formulas.

export const springG5ElaW6D5 = {
  id: "g5.spring.ela.w6.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Explanatory writing — explain your growth loop",
  topicTag: "explanatory-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.2.C"],
  hook: "You built a growth loop this week — now you get to make someone ELSE understand it. Explanatory writing walks a reader through how something works, step by step. Today you turn your loop into clear, friendly words.",
  miniLesson: [
    "Explanatory (informing) writing teaches a reader how something works. You are not arguing — you are clearly explaining.",
    "Good explaining has a topic sentence, then details in ORDER, joined by transition words like 'first,' 'next,' 'each step,' and 'so.'",
    "For a growth loop, you explain three things: the STARTING number, the RULE it repeats (add or double), and the PREDICTION (what the number does over many steps — grows fast or grows slow)."
  ],
  workedExample: {
    prompt: "Turn these notes into one clear explaining sentence: start = 2; rule = add 3 each day; result = grows steadily.",
    steps: [
      "Begin with the topic: what your loop grows.",
      "State the starting number and the rule it repeats.",
      "End with the prediction (what the number does over time).",
      "Result: 'My loop starts a plant at 2 cm and adds 3 cm each day, so the plant grows a little taller and taller over time.'"
    ],
    answer: "My loop starts a plant at 2 cm and adds 3 cm each day, so the plant grows a little taller and taller over time."
  },
  items: [
    {
      id: "g5.spring.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "What is the main GOAL of explanatory writing?",
      choices: [
        "To argue that your opinion is the best",
        "To use as many long words as you can",
        "To tell a spooky made-up story",
        "To clearly inform the reader how something works"
      ],
      answerIndex: 3,
      explanation: "Explanatory (informing) writing exists to teach or inform clearly — not to argue or tell fiction.",
      hintLadder: [
        "Is explaining trying to WIN an argument?",
        "Its job is to help the reader understand.",
        "It clearly informs how something works."
      ]
    },
    {
      id: "g5.spring.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "Which transition word best shows the ORDER of steps when you explain a loop?",
      choices: [
        "But",
        "Although",
        "Next",
        "Instead"
      ],
      answerIndex: 2,
      explanation: "'Next' shows sequence — it moves the reader from one step to the following step. The others show contrast, not order.",
      hintLadder: [
        "Which word shows one thing happening AFTER another?",
        "'But' and 'although' show a difference, not order.",
        "'Next' moves to the following step."
      ],
      misconceptionsTargeted: ["explain-means-argue"]
    },
    {
      id: "g5.spring.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence best EXPLAINS a growth loop (instead of just giving an opinion)?",
      choices: [
        "Everyone should make a doubling loop because it is the coolest.",
        "Each day my loop doubles the algae, so the count goes 2, then 4, then 8, and keeps rising.",
        "I think algae are kind of gross, honestly.",
        "Doubling loops are way more fun than adding loops, for sure."
      ],
      answerIndex: 1,
      explanation: "It clearly informs the reader of the rule, the numbers, and what they do — that is explanatory writing. The others give opinions.",
      hintLadder: [
        "Which sentence teaches how the loop works?",
        "Skip sentences that just say what you like.",
        "The doubling-algae sentence explains the rule and the numbers."
      ]
    },
    {
      id: "g5.spring.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Write a clear TOPIC SENTENCE to begin an explanation of a growth loop you built this week. It should name what your loop grows. You can use the frame: 'This explanation shows how my ___ loop makes ___ grow.'",
      rubric: {
        level3: "A clear topic sentence that names what the loop grows and signals an explanation will follow.",
        level2: "Names the topic but is vague or reads like an opinion instead of a lead-in.",
        level1: "Off-topic, gives an opinion, or does not introduce a loop."
      },
      exemplar: "This explanation shows how my sunflower loop makes a plant grow taller over ten days.",
      hintLadder: [
        "Name what your loop grows.",
        "Signal that you will explain how it works.",
        "Keep it informing, not an opinion."
      ]
    },
    {
      id: "g5.spring.ela.w6.d5.q5",
      type: "short_answer",
      stem: "In 3–4 sentences, explain how your growth loop works and what it predicts. Include the starting number, the rule it repeats (add or double), and what the number does over time. You may use this frame: 'My loop starts at ___. Each step it ___. First it grows to ___, then ___. So the number grows ___ over time.'",
      rubric: {
        level3: "Clearly explains the starting number AND the repeated rule AND the prediction over time, in order with transitions.",
        level2: "Includes two of the three parts, or the order/transitions are weak.",
        level1: "Missing most parts, unclear, or gives an opinion instead of explaining."
      },
      exemplar: "My loop starts a bug count at 2. Each step it doubles the bugs. First it grows to 4, then 8, then 16. So the number grows faster and faster, and my loop predicts it will pass 30 bugs in about 4 steps.",
      hintLadder: [
        "Start by stating your starting number.",
        "Then explain the rule the loop repeats each step.",
        "End with what the number does over time (your prediction)."
      ]
    }
  ],
  reflectionPrompt: "Reread your explanation. If a younger student read it, which sentence would confuse them most — and how could you make it clearer?",
  misconceptionBank: [
    {
      id: "explain-means-argue",
      label: "Confuses explaining with arguing",
      description: "Thinks explanatory writing should convince the reader of an opinion instead of informing them how something works.",
      coachMove: "Ask: 'Are you telling the reader how it WORKS, or telling them what you like?' Explanatory writing does the first."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Explain or Give an Opinion?",
      prompt:
        "Two sentences: (A) 'My loop doubles the algae each day, so the count goes 2, 4, 8, 16.' (B) 'Doubling loops are way better than any other kind.' Which one EXPLAINS how something works, and which one just gives an opinion?",
      answer:
        "(A) explains — it tells the rule and the numbers so the reader understands how it works. (B) just gives an opinion and explains nothing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Loop Explainer",
      challenge:
        "Write a short explainer (one paragraph) that teaches a reader how your week's growth loop works. Walk them through the starting number, the rule the loop repeats, and the prediction — using order words like 'first,' 'next,' and 'so.'",
      materials: ["Paper or a device to write on"],
      steps: [
        "Write a topic sentence naming what your loop grows.",
        "State the starting number and the rule it repeats each step.",
        "Use order words to walk through what the number does.",
        "End with the prediction your loop makes."
      ],
      deliverable: "A one-paragraph explainer with a topic sentence, ordered steps, transition words, and a prediction.",
      choiceBoard: [
        "Write the one-paragraph explainer with transition words.",
        "Make a labeled drawing of your loop with a caption explaining each part.",
        "Record a 30-second 'how it works' narration walking through your loop."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "You are explaining a loop and want to show the FINAL result. Which transition fits best?",
          choices: [
            "So, in the end,",
            "On the other hand,",
            "For example,",
            "But instead,"
          ],
          answerIndex: 0,
          explanation: "'So, in the end' shows an outcome or result — perfect for stating what the loop finally predicts. The others show a difference or an example.",
          hintLadder: [
            "Which phrase introduces a result or ending?",
            "'On the other hand' and 'but instead' show differences, not results.",
            "'So, in the end' leads into the final prediction."
          ]
        },
        {
          id: "g5.spring.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "A student wrote: 'My loop is the best and it grows.' Rewrite it as a clear EXPLAINING sentence that gives a starting number and the rule it repeats.",
          rubric: {
            level3: "Removes the opinion AND gives a starting number AND the repeated rule, clearly informing the reader.",
            level2: "Improves clarity but is missing the starting number or the rule.",
            level1: "Still gives an opinion or does not explain how it works."
          },
          exemplar: "My loop starts with 3 flowers and adds 2 more each day, so the flower count climbs steadily over time.",
          hintLadder: [
            "Cut the opinion ('is the best').",
            "Add a starting number.",
            "State the rule it repeats each step."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Step-by-Step Breath",
      prompt:
        "Explain a breath to yourself in steps: FIRST breathe in slowly for 4 counts, NEXT hold for 4, then breathe out for 4, and SO you feel calmer. Repeat the ordered breath 4 times.",
      scienceTieIn: "Naming each step of your breath uses the same 'first, next, so' order as explanatory writing — and slow breathing calms your body so your writing brain works better.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained your growth loop to a reader. What was the hardest part to put into words, and what trick helped you make it clear?",
      badge: { id: "g5-spring-loop-explainer", name: "Loop Explainer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
