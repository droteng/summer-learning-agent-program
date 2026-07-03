// Grade 7 ELA/Writing — Summer Voyage, Week 1 (Explorer Mode), Day 3.
// Topic: setting learning goals + close-reading annotation of a short
// informational text, building independent annotation habits.

export const summerG7ElaW1D3 = {
  id: "g7.summer.ela.w1.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Set learning goals + close-reading annotation",
  topicTag: "close-reading-annotation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.RI.7.1", "CCSS.ELA-LITERACY.RI.7.2"],
  hook: "Every great explorer keeps a field journal — and every great reader keeps one too. Today you set your own learning goals and learn to 'annotate': to mark up a text so its ideas become YOUR map, not just words on a page.",
  miniLesson: [
    "A strong learning goal is specific and measurable: not 'get better at reading,' but 'I will find and underline the main idea and two supporting details in every article this week.'",
    "Annotating means marking a text as you read: underline the central idea, circle key vocabulary, and jot a short note or question in the margin.",
    "The central (main) idea is what the whole text is mostly about; supporting details are the facts and examples that back it up. Good annotation separates the two so you can summarize with evidence."
  ],
  workedExample: {
    prompt: "Read this short passage and identify the central idea and one supporting detail: 'Sea otters may look like they're just floating and eating, but they are vital to their ecosystem. They eat sea urchins, which would otherwise destroy the kelp forests that shelter thousands of species. Without otters, entire underwater forests can disappear.'",
    steps: [
      "Ask: what is the WHOLE passage mostly about? Otters being important to their ecosystem.",
      "Underline the sentence that states that idea: 'they are vital to their ecosystem.'",
      "Find a detail that backs it up: they eat sea urchins that would destroy the kelp forests.",
      "In the margin, jot a note: 'otters protect kelp → protect many species.'"
    ],
    answer: "Central idea: sea otters are vital to their ecosystem. Supporting detail: they eat sea urchins that would otherwise destroy the kelp forests."
  },
  items: [
    {
      id: "g7.summer.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which is the STRONGEST learning goal for this summer?",
      choices: [
        "I want to be smarter.",
        "I will read more books.",
        "I will annotate each article by underlining the main idea and noting two details, every day this week.",
        "Reading is important."
      ],
      answerIndex: 2,
      explanation: "It's specific and measurable — you can tell exactly whether you did it. The others are vague or aren't goals.",
      hintLadder: [
        "A strong goal is specific AND measurable.",
        "Which one could you check off as 'done' or 'not done'?",
        "The annotation goal names exactly what to do and how often."
      ]
    },
    {
      id: "g7.summer.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "Passage: 'Fireflies flash to communicate. Each species has its own blink pattern, like a secret code, so males and females of the same kind can find each other in the dark.' What is the CENTRAL idea?",
      choices: [
        "Fireflies come out at night.",
        "Fireflies use their flashing light to communicate and find mates.",
        "Males are hard to see in the dark.",
        "Fireflies have wings."
      ],
      answerIndex: 1,
      explanation: "The whole passage is about WHY fireflies flash — to communicate and find mates. The other options are minor or not stated.",
      hintLadder: [
        "What is the passage MOSTLY about, start to finish?",
        "Look for the idea every sentence supports.",
        "It's about the purpose of the flashing: communication."
      ],
      misconceptionsTargeted: ["detail-as-main-idea"]
    },
    {
      id: "g7.summer.ela.w1.d3.q3",
      type: "numeric",
      stem: "Annotation goal check: 'Each day I will underline the main idea and mark 2 supporting details in every article.' If you read 4 articles in one day and hit your goal, how many MARKS total (main ideas + details) will you make? (Count 1 main idea + 2 details per article.)",
      answer: 12,
      tolerance: 0,
      unit: "marks",
      hintLadder: [
        "Each article gets 1 main idea + 2 details = 3 marks.",
        "You read 4 articles, so multiply 3 by 4.",
        "3 × 4 = 12 marks."
      ],
      explanation: "Each article = 1 main idea + 2 details = 3 marks. Across 4 articles: 3 × 4 = 12 marks — a measurable way to track your goal."
    },
    {
      id: "g7.summer.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Read this passage and write (a) the central idea in one sentence and (b) one supporting detail you'd underline: 'Coral reefs cover less than 1% of the ocean floor, yet they shelter about a quarter of all marine species. Scientists call them the rainforests of the sea because so much life depends on them.'",
      rubric: {
        level3: "Central idea captures that coral reefs support a huge share of ocean life despite their small size AND cites a real supporting detail (the '1%' or 'quarter of all species' fact).",
        level2: "Gets the central idea OR a supporting detail correct, but the other is vague or missing.",
        level1: "Restates a random detail as the main idea or provides no valid detail."
      },
      exemplar: "(a) Central idea: Coral reefs support a huge amount of ocean life even though they're tiny. (b) Supporting detail to underline: 'they shelter about a quarter of all marine species.'",
      hintLadder: [
        "What is the passage mostly claiming about coral reefs?",
        "The main idea contrasts their small SIZE with their big IMPORTANCE.",
        "Pick one fact that proves that importance to underline."
      ]
    },
    {
      id: "g7.summer.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Explain, in your own words, how annotating a text helps you understand and remember it better than just reading it once. Give one specific annotation move you would use.",
      rubric: {
        level3: "Explains that annotating makes you an ACTIVE reader (marking ideas, noting questions) which improves understanding/memory AND names a specific move (underline main idea, circle vocab, margin note).",
        level2: "Gives a general benefit of annotating but the reasoning or the specific move is weak.",
        level1: "Doesn't explain a benefit or names no real annotation move."
      },
      exemplar: "Annotating makes me an active reader instead of a passive one — when I underline the main idea and jot questions in the margin, I have to actually think about the text, so I understand and remember it better. One move I'd use is writing a one-line summary at the end of each paragraph.",
      hintLadder: [
        "Think about the difference between reading passively and marking as you go.",
        "How does 'doing something' with the text help memory?",
        "Name one concrete annotation move you'd actually make."
      ]
    }
  ],
  reflectionPrompt: "Write one reading goal for your summer expedition. Make it specific enough that you'll know at the end of the week whether you hit it.",
  misconceptionBank: [
    {
      id: "detail-as-main-idea",
      label: "Mistakes a supporting detail for the central idea",
      description: "Picks a small fact from the text as the main idea instead of the overarching point every sentence supports.",
      coachMove: "Ask: 'Does every other sentence support THIS, or is this just one example?' The central idea is the umbrella; details sit under it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Goal or Just a Wish?",
      prompt:
        "Two summer statements: (A) 'I want to read better.' (B) 'I'll annotate one article a day, underlining the main idea and two details.' Which one is a real, measurable GOAL you could actually check off — and which is just a wish?",
      answer: "(B) is a real goal — it's specific and you can check whether you did it each day. (A) is a wish because there's no way to tell when you've reached it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Annotate an Explorer's Field Note",
      challenge:
        "Take a short informational paragraph (about an animal, place, or invention — pick one you're curious about) and turn it into a fully annotated 'field note.' Mark the main idea, key vocabulary, and your own questions like a real explorer's journal.",
      steps: [
        "Choose or copy a 4–6 sentence informational paragraph.",
        "Underline the central idea and box the supporting details.",
        "Circle two key vocabulary words and note what you think they mean.",
        "Write one question in the margin that the text made you wonder about."
      ],
      deliverable: "An annotated paragraph with the main idea, details, vocabulary, and at least one margin question marked.",
      choiceBoard: [
        "Annotate a printed or typed paragraph with colored marks and margin notes.",
        "Make an 'annotation key' poster showing your symbols (underline = main idea, circle = vocab, ? = question).",
        "Record a 30-second 'think-aloud' walking through how you annotated your paragraph."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Close-Reading Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Passage: 'The Sahara wasn't always a desert. Thousands of years ago it had lakes, grasslands, and animals like hippos. A slow shift in Earth's climate dried it into the sand sea we know today.' Which sentence best states the CENTRAL idea?",
          choices: [
            "The Sahara has a lot of sand.",
            "Hippos used to live in the Sahara.",
            "The Sahara was once green and gradually turned into a desert as the climate changed.",
            "Earth's climate is always the same."
          ],
          answerIndex: 2,
          explanation: "The whole passage is about the Sahara changing from green to desert over time. The other options are single details or contradicted by the text.",
          hintLadder: [
            "What change does the WHOLE passage describe?",
            "The hippos and lakes are details supporting a bigger point.",
            "The main idea is the transformation from green land to desert."
          ]
        },
        {
          id: "g7.summer.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Using the Sahara passage above, write a one-sentence summary that includes the central idea AND one supporting detail as evidence.",
          rubric: {
            level3: "Summary states the central idea (Sahara went from green to desert) AND weaves in a specific supporting detail (former lakes/grasslands/hippos or the climate shift) as evidence.",
            level2: "Includes the central idea OR a detail, but not both clearly combined.",
            level1: "Copies a sentence directly or misses the central idea."
          },
          exemplar: "The Sahara used to be green with lakes and grasslands where animals like hippos lived, but a slow climate shift dried it into today's desert.",
          hintLadder: [
            "Start with the big change the passage describes.",
            "Add ONE fact that proves the Sahara was once green.",
            "Combine them into a single evidence-based sentence."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Reset",
      prompt:
        "Close your eyes and take 5 slow breaths. On each breath in, picture one word from what you just read; on each breath out, let it settle. Then roll your shoulders and open your eyes, ready to read again.",
      scienceTieIn:
        "A short mindful pause lowers stress and helps your brain move new information into longer-term memory — so you actually keep what you read.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one reading goal you're setting for your summer expedition? Write it so specifically that you'll know by Friday whether you reached it.",
      badge: { id: "g7-annotation-explorer", name: "Annotation Explorer", emoji: "🖊️" },
      estimatedMinutes: 7
    }
  }
};
