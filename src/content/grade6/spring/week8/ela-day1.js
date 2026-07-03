// Grade 6 ELA/Writing — Spring Expedition, Week 8 (Spring Showcase), Day 1.
// Topic: plan your renewal-themed capstone — scope, audience, and success
// criteria. The opening of the final week of the final season — the whole
// year builds to this showcase.

export const springG6ElaW8D1 = {
  id: "g6.spring.ela.w8.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your renewal-themed capstone",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.5", "CCSS.W.6.4"],
  hook: "This is the last week of your whole year at Dr. Spark Academy — and it ends with a capstone you design. Today you plan it: what renewal-themed idea you'll present, who it's for, and how you'll know it's great.",
  miniLesson: [
    "SCOPE is what your project will and won't cover. A good scope is focused: 'how a seed becomes a plant' is doable; 'all of biology' is not.",
    "AUDIENCE is who you're presenting to — family, classmates, younger kids. Naming your audience decides your vocabulary, examples, and tone.",
    "SUCCESS CRITERIA are the specific, checkable marks of a strong project ('shows a life cycle with labeled stages,' 'includes real data'). Set them BEFORE you build, so you know when you're done."
  ],
  workedExample: {
    prompt: "Turn a vague idea — 'plants' — into a scoped capstone plan.",
    steps: [
      "Narrow the scope: 'How a bean seed grows into a plant over 3 weeks.'",
      "Name the audience: 'My family and my Grade 6 group.'",
      "Write 2 success criteria: 'shows every growth stage with labels' and 'includes my own measurements.'",
      "Result: a focused, audience-aware plan with checkable goals."
    ],
    answer: "Scope: one bean plant's 3-week growth. Audience: family + group. Success criteria: labeled stages + my own measurements."
  },
  items: [
    {
      id: "g6.spring.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which capstone SCOPE is best focused for a one-week project?",
      choices: [
        "Explain every living thing on Earth.",
        "Show how one caterpillar becomes a butterfly and why each stage matters.",
        "Cover all of science.",
        "Describe the entire history of biology."
      ],
      answerIndex: 1,
      explanation: "A single, well-chosen example (one caterpillar's life cycle) is deep enough to be rich and narrow enough to finish well.",
      hintLadder: [
        "A good scope is focused, not endless.",
        "Which one could you actually finish and explain in depth?",
        "The single caterpillar is focused and doable."
      ]
    },
    {
      id: "g6.spring.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why does naming your AUDIENCE before you build matter?",
      choices: [
        "It doesn't change anything.",
        "It decides your vocabulary, examples, and tone so the presentation actually reaches them.",
        "It makes the project longer.",
        "It only matters for the grade."
      ],
      answerIndex: 1,
      explanation: "You'd explain a life cycle very differently to a kindergartner than to a scientist — audience shapes every choice.",
      hintLadder: [
        "Think about explaining to a 5-year-old vs. an adult.",
        "What changes between those two?",
        "Audience shapes vocabulary, examples, and tone."
      ],
      misconceptionsTargeted: ["audience-doesnt-matter"]
    },
    {
      id: "g6.spring.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Which is a good SUCCESS CRITERION for a renewal-themed capstone?",
      choices: [
        "Try my best.",
        "Make it nice.",
        "Shows a complete life cycle with every stage clearly labeled.",
        "Finish someday."
      ],
      answerIndex: 2,
      explanation: "A success criterion is specific and checkable — you can look and see whether every stage is labeled. 'Try my best' can't be checked.",
      hintLadder: [
        "A criterion has to be something you can CHECK.",
        "Which one could a friend verify by looking?",
        "The labeled life cycle is specific and checkable."
      ]
    },
    {
      id: "g6.spring.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence SCOPE for your renewal-themed capstone: name the ONE living system or growth story you'll focus on.",
      rubric: {
        level3: "States one focused, doable topic about growth/renewal/life (a specific system or cycle), narrow enough to finish this week.",
        level2: "Names a topic but it is too broad or a little vague.",
        level1: "Off-topic, or so broad it could never be finished (e.g., 'all of nature')."
      },
      exemplar: "My capstone shows how a sunflower seed I planted this spring grew, stage by stage, into a seedling with real height measurements.",
      hintLadder: [
        "Pick ONE living thing or one growth story.",
        "Make it narrow enough to finish this week.",
        "Say it in a single clear sentence."
      ]
    },
    {
      id: "g6.spring.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Name your AUDIENCE and write TWO success criteria for your capstone.",
      rubric: {
        level3: "Names a specific audience AND lists two specific, checkable success criteria.",
        level2: "Names an audience but one criterion is vague, or gives only one clear criterion.",
        level1: "No clear audience or criteria that can't be checked."
      },
      exemplar: "Audience: my family and my Grade 6 group. Criteria: (1) I show every growth stage with a labeled diagram; (2) I include at least three of my own measurements in a graph.",
      hintLadder: [
        "Who exactly will watch or read your capstone?",
        "Write goals a friend could check by looking.",
        "Give two of those checkable goals."
      ]
    }
  ],
  reflectionPrompt: "You've learned across four whole seasons to reach this week. What's the ONE idea about growth or renewal you most want the world to see in your capstone?",
  misconceptionBank: [
    {
      id: "audience-doesnt-matter",
      label: "Thinks the audience doesn't change the project",
      description: "Plans a presentation without considering who will receive it, so the tone or examples miss.",
      coachMove: "Ask: 'Would you explain this the same way to a 5-year-old and to a scientist?' If not, the audience matters — name it first."
    },
    {
      id: "vague-success-criteria",
      label: "Sets goals that can't be checked",
      description: "Uses 'do my best' or 'make it good' instead of specific, checkable marks of success.",
      coachMove: "Turn each goal into something a friend could verify by looking: 'shows X,' 'includes Y measurements.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Big or Focused?",
      prompt:
        "Would you rather present a capstone titled 'Everything About Plants' OR 'How My One Bean Seed Became a Plant in 21 Days'? Which one could you actually finish, go deep on, and be proud of — and why?",
      answer:
        "The bean seed one. It's focused enough to finish and go deep, while 'Everything About Plants' is so broad you'd never do any of it justice. Narrow scope = a stronger capstone.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Blueprint",
      challenge:
        "Design a one-page blueprint for your renewal-themed capstone. Put your focused topic in the center, name your audience, and list your success criteria as a checklist you'll tick off all week.",
      steps: [
        "Write your focused capstone topic in a bubble in the center of the page.",
        "Name your audience in a box beside it.",
        "List 3 success criteria as a checklist with empty boxes to tick.",
        "Add a spring/renewal decoration so your blueprint feels like a launch."
      ],
      deliverable: "A one-page capstone blueprint: focused topic, named audience, and a 3-item success checklist.",
      choiceBoard: [
        "Draw the blueprint as a labeled mind-map.",
        "Type it as a project 'contract' you sign and date.",
        "Record a 45-second pitch of your plan out loud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Planning Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student writes this capstone plan: 'I'll explain nature.' What is the BIGGEST problem?",
          choices: [
            "It's too specific.",
            "The scope is far too broad — 'nature' can't be covered in one project.",
            "It names too many success criteria.",
            "It picks the wrong audience."
          ],
          answerIndex: 1,
          explanation: "The scope is the problem: 'nature' is limitless. A strong capstone narrows to one focused system or story.",
          hintLadder: [
            "Could anyone finish a project about all of 'nature'?",
            "The issue is how wide the topic is.",
            "The scope is far too broad."
          ]
        },
        {
          id: "g6.spring.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Take this weak plan — 'a project about growing' — and rewrite it as a strong capstone plan with a focused scope, a named audience, and one checkable success criterion.",
          rubric: {
            level3: "Produces a focused topic, a specific audience, AND one checkable success criterion — all three clearly present.",
            level2: "Improves the plan but one of the three parts is missing or vague.",
            level1: "Still broad, or missing audience and criteria."
          },
          exemplar: "Scope: how my radish seeds sprouted over 10 days. Audience: my family. Success criterion: I show all four sprouting stages with a labeled photo of each.",
          hintLadder: [
            "First narrow 'growing' to ONE growth story.",
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
        "Curl up small like a seed. Slowly 'sprout' — rise up, unfold your arms like leaves reaching for the sun, and stand tall. Then shrink back to a seed. Repeat 4 times, growing a little taller each round.",
      scienceTieIn: "Stretching upward lengthens your spine and boosts blood flow to your brain — a real burst of energy, just like a seedling reaching for spring light.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "This is the final week of your whole year of learning. What renewal-themed idea did you choose for your capstone, and why does it matter to YOU?",
      badge: { id: "spring-capstone-architect", name: "Capstone Architect", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
