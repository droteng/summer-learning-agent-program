// Grade 6 ELA/Writing — Spring Expedition, Week 1 (Spring Awakening), Day 3.
// Topic: goal-setting writing — plan a spring growth experiment framed around a
// clear, testable question.

export const springG6ElaW1D3 = {
  id: "g6.spring.ela.w1.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Goal-setting writing: a testable question",
  topicTag: "testable-question-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.4"],
  hook: "Every great experiment starts with words: a question sharp enough to test and a goal clear enough to aim at. This spring you'll plan a growth experiment — today you write the question that makes it real.",
  miniLesson: [
    "A testable question can be answered by observing or measuring, not just by opinion: 'Does more sunlight make bean plants grow taller?' can be tested; 'Are plants pretty?' cannot.",
    "A strong testable question names what you'll CHANGE (the variable) and what you'll MEASURE (the result): change = amount of sunlight, measure = plant height.",
    "A clear goal statement adds why it matters and what you hope to learn: 'I want to find out whether sunlight affects growth so I can grow the tallest sunflower.'"
  ],
  workedExample: {
    prompt: "Turn this vague idea into a testable question: 'I want to know about plants and water.'",
    steps: [
      "Decide what ONE thing you'll change: the amount of water.",
      "Decide what you'll measure: the height of the plant after two weeks.",
      "Combine them into a yes/no or comparison question.",
      "Result: 'Does giving a bean plant more water each day make it grow taller in two weeks?'"
    ],
    answer: "Does giving a bean plant more water each day make it grow taller in two weeks?"
  },
  items: [
    {
      id: "g6.spring.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which of these is a TESTABLE question for a growth experiment?",
      choices: [
        "Does the type of soil change how tall a bean plant grows in three weeks?",
        "Are flowers the best part of spring?",
        "Why is gardening fun?",
        "Do you like sunflowers?"
      ],
      answerIndex: 0,
      explanation: "It names something to change (type of soil) and something to measure (plant height over three weeks), so it can be tested with observations.",
      hintLadder: [
        "A testable question can be answered by measuring, not by opinion.",
        "Which one has something you could change AND something you could measure?",
        "Soil type (change) and plant height (measure) make it testable."
      ]
    },
    {
      id: "g6.spring.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In the question 'Does more sunlight make a plant grow taller?', what is the thing being MEASURED?",
      choices: [
        "The amount of sunlight",
        "The kind of seed",
        "The color of the pot",
        "How tall the plant grows"
      ],
      answerIndex: 3,
      explanation: "You change the sunlight, but the RESULT you measure is how tall the plant grows.",
      hintLadder: [
        "One thing is changed on purpose; the other is the result you observe.",
        "What number would you write down at the end?",
        "You'd measure the plant's height."
      ],
      misconceptionsTargeted: ["opinion-as-testable"]
    },
    {
      id: "g6.spring.ela.w1.d3.q3",
      type: "multiple_choice",
      stem: "Which sentence is the strongest GOAL statement for a spring growth experiment?",
      choices: [
        "I like plants a lot.",
        "I want to find out whether warmer temperatures help radish seeds sprout faster, so I can plant at the best time.",
        "Plants are green.",
        "Spring is nice."
      ],
      answerIndex: 1,
      explanation: "It states what will be tested (temperature and sprouting speed) AND why it matters (planting at the best time) — a clear, purposeful goal.",
      hintLadder: [
        "A goal says what you want to learn AND why it matters.",
        "Which one names something to find out and a reason?",
        "The temperature-and-sprouting sentence has both."
      ]
    },
    {
      id: "g6.spring.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write your own testable question for a spring growth experiment. Make sure it names one thing you'll change and one thing you'll measure.",
      rubric: {
        level3: "Writes a genuinely testable question that clearly names a variable to change AND a result to measure.",
        level2: "Writes a question that is testable but leaves the change or the measurement unclear.",
        level1: "Writes an opinion question or one that can't be tested by observing/measuring."
      },
      exemplar: "Does watering a marigold with sugar water instead of plain water make it grow more flowers in four weeks?",
      hintLadder: [
        "Pick ONE thing to change (water, light, soil, temperature...).",
        "Pick ONE thing to measure (height, number of leaves, days to sprout...).",
        "Put them together as a question you could answer by measuring."
      ]
    },
    {
      id: "g6.spring.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Write a short goal statement (2-3 sentences) for your spring growth experiment. Include your testable question and why the answer matters to you.",
      rubric: {
        level3: "States a clear testable question AND explains why finding the answer matters, in a focused 2-3 sentence goal.",
        level2: "Includes a question or a purpose but not both, or the writing is unfocused.",
        level1: "No testable question and no clear purpose."
      },
      exemplar: "My question is whether bean seeds sprout faster in a warm windowsill than in a cool basement. I want to find this out because I'd like to start my spring garden as early as possible. If warmth speeds up sprouting, I'll know the best place to start my seeds.",
      hintLadder: [
        "Start with your testable question from the last item.",
        "Add a sentence about why you care about the answer.",
        "Keep it to 2-3 focused sentences."
      ]
    }
  ],
  reflectionPrompt: "Beyond plants, what is one question about YOURSELF this spring that you could turn into a testable goal — like 'Does reading before bed help me fall asleep faster?'",
  misconceptionBank: [
    {
      id: "opinion-as-testable",
      label: "Confuses an opinion question with a testable one",
      description: "Thinks a question about taste or feelings ('Are tulips prettier than roses?') can be tested by an experiment.",
      coachMove: "Ask: 'Could two people measure this and get the same number?' If it depends on personal taste, help them swap in something measurable like height, count, or days."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Testable or Just an Opinion?",
      prompt:
        "Two spring questions: (A) 'Is springtime the happiest season?' (B) 'Do bean plants near a sunny window grow taller than ones in the shade?' Which one could you actually answer with an experiment — and which is just an opinion?",
      answer:
        "(B) is testable — you can measure and compare plant heights. (A) depends on personal feelings, so an experiment can't answer it. A testable question gives everyone the same measurable answer.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: My Growth Experiment Plan Card",
      challenge:
        "Create a 'plan card' for a spring growth experiment. It should headline your testable question and lay out your goal so clearly that a friend could run the experiment from your card alone.",
      steps: [
        "Write your testable question as the big headline.",
        "Under it, list what you'll CHANGE and what you'll MEASURE.",
        "Add a one-sentence goal saying why the answer matters to you.",
        "Add a 'prediction' line: what do you think will happen?"
      ],
      deliverable: "A plan card with a headline testable question, the change/measure labels, a goal, and a prediction.",
      choiceBoard: [
        "Design the plan card as a poster (drawn or typed).",
        "Record a 30-second 'experiment pitch' reading your question and goal aloud.",
        "Write a short letter to a friend inviting them to try your experiment, explaining the question and goal."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Testable Question Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which question would need to be REWRITTEN to become testable?",
          choices: [
            "Does adding compost make tomato plants grow more fruit?",
            "Do seeds sprout faster in warm soil than in cold soil?",
            "Which spring flower is the most beautiful?",
            "Does music played near a plant change how many leaves it grows in a month?"
          ],
          answerIndex: 2,
          explanation: "'Most beautiful' depends on personal opinion and can't be measured, so it isn't testable as written. The others each name something to change and something to measure.",
          hintLadder: [
            "Which question depends on personal taste?",
            "You can't measure 'most beautiful' with a ruler or a count.",
            "That one needs to be rewritten to be testable."
          ]
        },
        {
          id: "g6.spring.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Take this weak idea — 'I want to do something with seeds this spring' — and rewrite it as a clear, testable question that names a change and a measurement.",
          rubric: {
            level3: "Produces a testable question that clearly names one variable to change AND one result to measure.",
            level2: "Produces a question that is on-topic but leaves the change or the measurement unclear.",
            level1: "Stays vague or writes an opinion question."
          },
          exemplar: "Does soaking bean seeds in water overnight before planting make them sprout in fewer days than planting them dry?",
          hintLadder: [
            "Choose ONE thing about the seeds to change.",
            "Choose ONE thing to measure as the result.",
            "Combine them into a comparison question."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Question the Breeze",
      prompt:
        "Sit or stand tall. Breathe in slowly for 4 counts imagining a fresh spring breeze, hold for 2, and breathe out for 4. On each slow exhale, silently 'ask' one calm question you're curious about. Repeat 4 gentle breaths.",
      scienceTieIn: "Slow breathing calms your nervous system and clears your mind, which helps you think of sharper, more creative questions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write down the testable question you're most excited to explore this spring. What do you predict the answer will be, and why?",
      badge: { id: "spring-question-sprout", name: "Question Sprout", emoji: "🌸" },
      estimatedMinutes: 7
    }
  }
};
