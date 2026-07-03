// Grade 5 ELA/Writing — Spring Expedition, Week 1 (Spring Awakening), Day 3.
// Grade 5 counterpart of g6.spring.ela.w1.d3. Same topic (goal-setting writing:
// planning a spring growth experiment around a clear, testable question) pitched
// down to Grade 5: simpler language, more vocabulary support, and paragraph
// frames to scaffold the writing.

export const springG5ElaW1D3 = {
  id: "g5.spring.ela.w1.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Goal-setting writing: a testable question",
  topicTag: "testable-question-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.4"],
  hook: "Every good experiment starts with words: a question you can actually test and a goal that is clear. This spring you will plan a growth experiment — today you write the question that makes it real.",
  miniLesson: [
    "A testable question can be answered by looking or measuring, not just by an opinion. 'Does more sunlight make bean plants grow taller?' can be tested. 'Are plants pretty?' cannot.",
    "A strong testable question names ONE thing you will CHANGE and ONE thing you will MEASURE. Change = amount of sunlight. Measure = plant height.",
    "A goal sentence adds why it matters. Frame: 'I want to find out ______ so that ______.' Example: 'I want to find out if sunlight helps plants grow so I can grow the tallest sunflower.'"
  ],
  workedExample: {
    prompt: "Turn this fuzzy idea into a testable question: 'I want to know about plants and water.'",
    steps: [
      "Pick ONE thing you will change: the amount of water.",
      "Pick ONE thing you will measure: the height of the plant after two weeks.",
      "Put them together as a yes/no or 'does' question.",
      "Result: 'Does giving a bean plant more water each day make it grow taller in two weeks?'"
    ],
    answer: "Does giving a bean plant more water each day make it grow taller in two weeks?"
  },
  items: [
    {
      id: "g5.spring.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which one is a TESTABLE question for a growth experiment?",
      choices: [
        "Are flowers the best part of spring?",
        "Does the type of soil change how tall a bean plant grows in three weeks?",
        "Why is gardening fun?",
        "Do you like sunflowers?"
      ],
      answerIndex: 1,
      explanation: "It names one thing to change (type of soil) and one thing to measure (plant height over three weeks), so you can test it by looking and measuring.",
      hintLadder: [
        "A testable question can be answered by measuring, not by an opinion.",
        "Which one has something you could change AND something you could measure?",
        "Soil type (change) and plant height (measure) make it testable."
      ]
    },
    {
      id: "g5.spring.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In the question 'Does more sunlight make a plant grow taller?', what is the thing you would MEASURE?",
      choices: [
        "The amount of sunlight",
        "How tall the plant grows",
        "The color of the pot",
        "The kind of seed"
      ],
      answerIndex: 1,
      explanation: "You change the sunlight, but the result you measure is how tall the plant grows.",
      hintLadder: [
        "One thing you change on purpose; the other is the result you look at.",
        "What number would you write down at the end?",
        "You would measure the plant's height."
      ],
      misconceptionsTargeted: ["opinion-as-testable"]
    },
    {
      id: "g5.spring.ela.w1.d3.q3",
      type: "multiple_choice",
      stem: "Which sentence is the strongest GOAL sentence for a spring growth experiment?",
      choices: [
        "I like plants a lot.",
        "Plants are green.",
        "I want to find out if warmer weather helps radish seeds sprout faster, so I can plant them at the best time.",
        "Spring is nice."
      ],
      answerIndex: 2,
      explanation: "It says what will be tested (warmth and how fast seeds sprout) AND why it matters (planting at the best time) — a clear goal.",
      hintLadder: [
        "A goal says what you want to learn AND why it matters.",
        "Which one names something to find out and a reason?",
        "The warmth-and-sprouting sentence has both."
      ]
    },
    {
      id: "g5.spring.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write your own testable question for a spring growth experiment. Make sure it names one thing you will change and one thing you will measure.",
      rubric: {
        level3: "Writes a truly testable question that clearly names one thing to change AND one thing to measure.",
        level2: "Writes a question that is testable but leaves the change or the measurement unclear.",
        level1: "Writes an opinion question or one that cannot be tested by looking or measuring."
      },
      exemplar: "Does watering a marigold with sugar water instead of plain water make it grow more flowers in four weeks?",
      hintLadder: [
        "Pick ONE thing to change (water, light, soil, warmth...).",
        "Pick ONE thing to measure (height, number of leaves, days to sprout...).",
        "Put them together as a question you could answer by measuring."
      ]
    },
    {
      id: "g5.spring.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Write a short goal (2-3 sentences) for your spring growth experiment. Use the frame: 'My question is ______. I want to find this out because ______.' Include your testable question and why the answer matters to you.",
      rubric: {
        level3: "States a clear testable question AND explains why finding the answer matters, in a focused 2-3 sentence goal.",
        level2: "Includes a question or a reason but not both, or the writing wanders.",
        level1: "No testable question and no clear reason."
      },
      exemplar: "My question is whether bean seeds sprout faster on a warm windowsill than in a cool basement. I want to find this out because I would like to start my spring garden as early as I can. If warmth helps seeds sprout faster, I will know the best place to start them.",
      hintLadder: [
        "Start with your testable question from the last item.",
        "Add a sentence about why you care about the answer.",
        "Keep it to 2-3 focused sentences using the frame."
      ]
    }
  ],
  reflectionPrompt: "Beyond plants, what is one question about YOURSELF this spring that you could turn into a testable goal — like 'Does reading before bed help me fall asleep faster?'",
  misconceptionBank: [
    {
      id: "opinion-as-testable",
      label: "Confuses an opinion question with a testable one",
      description: "Thinks a question about taste or feelings ('Are tulips prettier than roses?') can be answered by an experiment.",
      coachMove: "Ask: 'Could two people measure this and get the same number?' If it depends on personal taste, help them swap in something you can count or measure like height, number of leaves, or days."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Testable or Just an Opinion?",
      prompt:
        "Two spring questions: (A) 'Is springtime the happiest season?' (B) 'Do bean plants near a sunny window grow taller than ones in the shade?' Which one could you actually answer with an experiment — and which is just an opinion?",
      answer:
        "(B) is testable — you can measure and compare plant heights. (A) depends on how someone feels, so an experiment cannot answer it. A testable question gives everyone the same measurable answer.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: My Growth Experiment Plan Card",
      challenge:
        "Make a 'plan card' for a spring growth experiment. Put your testable question at the top and lay out your goal so clearly that a friend could run the experiment from your card alone.",
      steps: [
        "Write your testable question as the big title.",
        "Under it, list what you will CHANGE and what you will MEASURE.",
        "Add a one-sentence goal saying why the answer matters to you.",
        "Add a 'my guess' line: what do you think will happen?"
      ],
      deliverable: "A plan card with a title testable question, the change/measure labels, a goal, and a guess.",
      choiceBoard: [
        "Design the plan card as a poster (drawn or typed).",
        "Record a 30-second 'experiment pitch' reading your question and goal out loud.",
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
          id: "g5.spring.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which question would need to be REWRITTEN before you could test it?",
          choices: [
            "Does adding compost make tomato plants grow more fruit?",
            "Do seeds sprout faster in warm soil than in cold soil?",
            "Which spring flower is the most beautiful?",
            "Does music played near a plant change how many leaves it grows in a month?"
          ],
          answerIndex: 2,
          explanation: "'Most beautiful' depends on personal opinion and cannot be measured, so it is not testable as written. The others each name something to change and something to measure.",
          hintLadder: [
            "Which question depends on personal taste?",
            "You cannot measure 'most beautiful' with a ruler or a count.",
            "That one needs to be rewritten to be testable."
          ]
        },
        {
          id: "g5.spring.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Take this weak idea — 'I want to do something with seeds this spring' — and rewrite it as a clear, testable question that names one thing to change and one thing to measure.",
          rubric: {
            level3: "Writes a testable question that clearly names one thing to change AND one thing to measure.",
            level2: "Writes a question that is on topic but leaves the change or the measurement unclear.",
            level1: "Stays vague or writes an opinion question."
          },
          exemplar: "Does soaking bean seeds in water overnight before planting make them sprout in fewer days than planting them dry?",
          hintLadder: [
            "Choose ONE thing about the seeds to change.",
            "Choose ONE thing to measure as the result.",
            "Put them together as a comparison question."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Question the Breeze",
      prompt:
        "Sit or stand tall. Breathe in slowly for 4 counts, imagining a fresh spring breeze, hold for 2, and breathe out for 4. On each slow breath out, quietly 'ask' one calm question you are curious about. Do this for 4 gentle breaths.",
      scienceTieIn: "Slow breathing calms your body and clears your mind, which helps you think of sharper, more creative questions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write down the testable question you are most excited to explore this spring. What do you think the answer will be, and why?",
      badge: { id: "g5-spring-question-sprout", name: "Question Sprout", emoji: "🌸" },
      estimatedMinutes: 7
    }
  }
};
