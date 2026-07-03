// Grade 5 ELA/Writing — Spring Expedition, Week 8 (Spring Showcase), Day 1.
// Grade 5 counterpart of g6.spring.ela.w8.d1. Same topic (planning a
// renewal-themed capstone: topic, audience, and success checklist) pitched
// down to Grade 5: simpler vocabulary, a paragraph frame, and one clear
// example at a time. Capstone/celebratory tone — the last week of the year.

export const springG5ElaW8D1 = {
  id: "g5.spring.ela.w8.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your renewal-themed capstone",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.5.5", "CCSS.W.5.4"],
  hook: "This is the last week of your whole year at Dr. Spark Academy — and it ends with a capstone YOU design. Today you plan it: what spring/renewal idea you'll show, who you'll show it to, and how you'll know it turned out great.",
  miniLesson: [
    "Your TOPIC is what your project is about. A good topic is small and clear: 'how a bean seed grows into a plant' is doable; 'all of nature' is way too big.",
    "Your AUDIENCE is who you'll show it to — your family, your class, or younger kids. Knowing your audience helps you pick the right words and examples.",
    "Your CHECKLIST is a short list of things your project must have to be great — like 'shows every growth stage with labels.' Make the checklist BEFORE you build, so you know when you're finished. Try this frame: 'My topic is ___. My audience is ___. It will be great when it ___.'"
  ],
  workedExample: {
    prompt: "Turn a big, fuzzy idea — 'plants' — into a clear capstone plan.",
    steps: [
      "Make the topic small: 'How a bean seed grows into a plant in 3 weeks.'",
      "Name the audience: 'My family and my Grade 5 group.'",
      "Write 2 checklist goals: 'shows every growth stage with labels' and 'includes my own measurements.'",
      "Result: a small, clear plan with goals you can check off."
    ],
    answer: "Topic: one bean plant's 3-week growth. Audience: family + group. Checklist: labeled stages + my own measurements."
  },
  items: [
    {
      id: "g5.spring.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which capstone TOPIC is small and clear enough for a one-week project?",
      choices: [
        "Explain every living thing on Earth.",
        "Show how one caterpillar becomes a butterfly and why each stage matters.",
        "Cover all of science.",
        "Tell the whole history of plants."
      ],
      answerIndex: 1,
      explanation: "One clear example — a single caterpillar's life cycle — is rich enough to be interesting and small enough to finish.",
      hintLadder: [
        "A good topic is small and clear, not endless.",
        "Which one could you actually finish and explain well?",
        "The one caterpillar is small and doable."
      ]
    },
    {
      id: "g5.spring.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why does knowing your AUDIENCE before you build help?",
      choices: [
        "It doesn't change anything.",
        "It helps you pick the right words and examples so your audience understands.",
        "It just makes the project longer.",
        "It only matters for your grade."
      ],
      answerIndex: 1,
      explanation: "You'd explain a life cycle very differently to a little kid than to a grown-up — knowing your audience shapes your choices.",
      hintLadder: [
        "Think about explaining to a 5-year-old vs. an adult.",
        "What would you change between them?",
        "Your audience helps you pick words and examples."
      ],
      misconceptionsTargeted: ["audience-doesnt-matter"]
    },
    {
      id: "g5.spring.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Which is a good CHECKLIST goal for a spring capstone?",
      choices: [
        "Try my best.",
        "Make it nice.",
        "Shows a full life cycle with every stage clearly labeled.",
        "Finish it someday."
      ],
      answerIndex: 2,
      explanation: "A good checklist goal is something you can actually CHECK — you can look and see whether every stage is labeled. 'Try my best' can't be checked.",
      hintLadder: [
        "A checklist goal has to be something you can CHECK.",
        "Which one could a friend look at and say 'yes' or 'no'?",
        "The labeled life cycle can be checked."
      ]
    },
    {
      id: "g5.spring.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write ONE sentence naming the topic of your spring capstone: the ONE living thing or growth story you'll focus on. Use the frame: 'My capstone shows ___.'",
      rubric: {
        level3: "Names one small, doable topic about growth/renewal/life (a specific plant, animal, or cycle) that could be finished this week.",
        level2: "Names a topic but it is a bit too big or a little unclear.",
        level1: "Off-topic, or so big it could never be finished (like 'all of nature')."
      },
      exemplar: "My capstone shows how a sunflower seed I planted this spring grew, stage by stage, into a seedling, with how tall it got each week.",
      hintLadder: [
        "Pick ONE living thing or one growth story.",
        "Make it small enough to finish this week.",
        "Say it in one clear sentence with the frame."
      ]
    },
    {
      id: "g5.spring.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Name your AUDIENCE and write TWO checklist goals for your capstone.",
      rubric: {
        level3: "Names a specific audience AND lists two checklist goals that can be checked by looking.",
        level2: "Names an audience but one goal is vague, or gives only one clear goal.",
        level1: "No clear audience, or goals that can't be checked."
      },
      exemplar: "Audience: my family and my Grade 5 group. Goals: (1) I show every growth stage with a labeled picture; (2) I include how tall my plant was each week on a chart.",
      hintLadder: [
        "Who exactly will see your capstone?",
        "Write goals a friend could check by looking.",
        "List two of those check-able goals."
      ]
    }
  ],
  reflectionPrompt: "You've learned across four whole seasons to reach this week. What is the ONE idea about growth or renewal you most want people to see in your capstone?",
  misconceptionBank: [
    {
      id: "audience-doesnt-matter",
      label: "Thinks the audience doesn't change the project",
      description: "Plans a presentation without thinking about who will see it, so the words or examples don't fit.",
      coachMove: "Ask: 'Would you explain this the same way to a 5-year-old and to a scientist?' If not, the audience matters — name it first."
    },
    {
      id: "vague-checklist-goals",
      label: "Sets goals that can't be checked",
      description: "Uses 'do my best' or 'make it good' instead of goals you can actually look at and check.",
      coachMove: "Turn each goal into something a friend could check by looking: 'shows X,' 'includes Y.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Big or Small?",
      prompt:
        "Would you rather show a capstone called 'Everything About Plants' OR 'How My One Bean Seed Became a Plant in 21 Days'? Which one could you actually finish and be proud of — and why?",
      answer:
        "The bean seed one. It's small enough to finish and go deep, while 'Everything About Plants' is so big you'd never do it well. A small, clear topic makes a stronger capstone.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Blueprint",
      challenge:
        "Make a one-page plan for your spring capstone. Put your small, clear topic in the middle, name your audience beside it, and list your checklist goals as boxes you'll tick off all week.",
      steps: [
        "Write your small, clear capstone topic in a bubble in the middle of the page.",
        "Name your audience in a box next to it.",
        "List 3 checklist goals as boxes you can tick off.",
        "Add a spring drawing so your plan feels like a fresh start."
      ],
      deliverable: "A one-page capstone plan: a small clear topic, a named audience, and a 3-goal checklist.",
      choiceBoard: [
        "Draw the plan as a labeled mind-map.",
        "Type it as a project 'promise' you sign and date.",
        "Record a 30-second out-loud pitch of your plan."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Planning Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student writes this capstone plan: 'I'll explain nature.' What is the BIGGEST problem?",
          choices: [
            "It's too small.",
            "The topic is way too big — 'nature' can't be covered in one project.",
            "It has too many checklist goals.",
            "It picks the wrong audience."
          ],
          answerIndex: 1,
          explanation: "The topic is the problem: 'nature' is endless. A strong capstone picks ONE small, clear thing to show.",
          hintLadder: [
            "Could anyone finish a project about all of 'nature'?",
            "The problem is how big the topic is.",
            "The topic is way too big."
          ]
        },
        {
          id: "g5.spring.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Take this weak plan — 'a project about growing' — and rewrite it as a strong plan with a small clear topic, a named audience, and one checklist goal you can check.",
          rubric: {
            level3: "Gives a small clear topic, a named audience, AND one check-able goal — all three clearly there.",
            level2: "Improves the plan but one of the three parts is missing or vague.",
            level1: "Still too big, or missing the audience and the goal."
          },
          exemplar: "Topic: how my radish seeds sprouted over 10 days. Audience: my family. Goal: I show all four sprouting stages with a labeled photo of each.",
          hintLadder: [
            "First make 'growing' into ONE small growth story.",
            "Then name exactly who it's for.",
            "Add one goal a friend could check by looking."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Grow From a Seed",
      prompt:
        "Curl up small like a seed. Slowly 'sprout' — rise up, open your arms like leaves reaching for the sun, and stand tall. Then shrink back to a seed. Do it 4 times, growing a little taller each round.",
      scienceTieIn: "Stretching upward lengthens your spine and sends more blood to your brain — a real energy boost, just like a seedling reaching for spring sunshine.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "This is the final week of your whole year of learning. What renewal idea did you pick for your capstone, and why does it matter to YOU?",
      badge: { id: "g5-spring-capstone-architect", name: "Capstone Architect", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
