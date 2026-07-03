// Grade 6 ELA/Writing — Winter Expedition, Week 8 (Winter Showcase), Day 1.
// Topic: plan your STEM winter capstone — set scope, audience, and success
// criteria. Opens the season's final, celebratory showcase week.

export const winterG6ElaW8D1 = {
  id: "g6.winter.ela.w8.d1",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your STEM capstone — scope, audience, and success criteria",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.5", "CCSS.W.6.4"],
  hook: "This is the final week of the Winter Expedition — your showcase week. Before you build anything, great creators plan. Today you set the SCOPE, AUDIENCE, and SUCCESS CRITERIA for your winter STEM capstone so the rest of the week runs smoothly.",
  miniLesson: [
    "SCOPE is what your project WILL and WON'T cover. A tight scope — 'explain why lakes freeze from the top down' — beats a giant, fuzzy one you can't finish.",
    "AUDIENCE is who you're presenting to. Knowing they're classmates and families tells you how much to explain and which words to define.",
    "SUCCESS CRITERIA are the specific, checkable things a finished project must have — like 'includes one graph, explains the energy idea, and runs under 4 minutes.' They let you judge your own work before anyone else does."
  ],
  workedExample: {
    prompt: "Turn the vague idea 'do something about winter' into a scoped capstone plan with an audience and one success criterion.",
    steps: [
      "Narrow the scope to ONE winter phenomenon: 'why snow looks white even though ice is clear.'",
      "Name the audience: classmates and families at the showcase.",
      "Write one checkable success criterion: 'I explain the science in under 3 minutes with a diagram.'",
      "Result: a plan you can actually finish and check against."
    ],
    answer: "Scope: explain why snow looks white. Audience: classmates and families. Success criterion: a clear 3-minute explanation with a diagram."
  },
  items: [
    {
      id: "g6.winter.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which is the BEST-scoped capstone topic for a one-week project?",
      choices: [
        "Explain absolutely everything about winter, space, and energy.",
        "Explain why a frozen lake stays liquid at the bottom.",
        "Winter is cold.",
        "Do a project."
      ],
      answerIndex: 1,
      explanation: "It focuses on ONE specific, explainable phenomenon — tight enough to finish and present well. The others are too broad, a bare fact, or not a topic at all.",
      hintLadder: [
        "A good scope is specific enough to finish in a week.",
        "Which option names ONE clear phenomenon to explain?",
        "The frozen-lake option is focused and doable."
      ]
    },
    {
      id: "g6.winter.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why does knowing your AUDIENCE change how you plan your presentation?",
      choices: [
        "It doesn't — you present the same way to everyone.",
        "It tells you how much to explain and which terms to define.",
        "It decides what color your slides are, and nothing else.",
        "It only matters for the teacher's grade."
      ],
      answerIndex: 1,
      explanation: "Audience shapes your word choices and how much background you give — families and classmates may need key terms defined.",
      hintLadder: [
        "Think about who is listening.",
        "Would you explain a science word differently to a younger sibling than to an expert?",
        "Audience sets how much to explain."
      ],
      misconceptionsTargeted: ["audience-doesnt-matter"]
    },
    {
      id: "g6.winter.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Which of these is a real SUCCESS CRITERION (a checkable standard for a finished project)?",
      choices: [
        "Make it good.",
        "Try hard.",
        "Include at least one labeled graph and explain the energy idea in under 4 minutes.",
        "Winter."
      ],
      answerIndex: 2,
      explanation: "A success criterion is specific and checkable — you can look at the finished project and say yes or no. 'Make it good' and 'try hard' can't be checked.",
      hintLadder: [
        "A success criterion is something you can check off yes or no.",
        "Which option gives a specific, measurable requirement?",
        "The 'labeled graph + under 4 minutes' option is checkable."
      ]
    },
    {
      id: "g6.winter.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence SCOPE statement for your own winter STEM capstone: name the ONE phenomenon or question you'll focus on.",
      rubric: {
        level3: "Names one specific, focused winter phenomenon or question that is realistic to finish and present in a week.",
        level2: "Names a topic but it is broad or vague (e.g., 'space').",
        level1: "Too broad to finish, a bare fact, or not a topic."
      },
      exemplar: "My capstone will explain why frost forms on windows on cold winter mornings.",
      hintLadder: [
        "Pick ONE winter thing you're curious about.",
        "Make it specific enough to finish this week.",
        "State it as a single clear sentence."
      ]
    },
    {
      id: "g6.winter.ela.w8.d1.q5",
      type: "short_answer",
      stem: "List TWO success criteria for your capstone and name your audience. Make each criterion something you could actually check off.",
      rubric: {
        level3: "Gives a clear audience AND two specific, checkable success criteria (e.g., includes a graph; stays under 4 minutes).",
        level2: "Gives an audience and two criteria, but one criterion is vague or not checkable.",
        level1: "Missing the audience or fewer than two real criteria."
      },
      exemplar: "Audience: my classmates and families. Criterion 1: I include one labeled graph of my data. Criterion 2: my talk is clear and under 4 minutes.",
      hintLadder: [
        "First name who will watch your showcase.",
        "Write requirements you can check yes/no on the finished project.",
        "Two checkable criteria plus your audience."
      ]
    }
  ],
  reflectionPrompt: "Look back at everything you investigated this winter — energy, space, forces, matter. Which idea excites you most to showcase? Save your scope, audience, and criteria — you'll build on them all week.",
  misconceptionBank: [
    {
      id: "audience-doesnt-matter",
      label: "Ignores the audience when planning",
      description: "Assumes a presentation is the same no matter who is watching, so plans without adjusting explanations.",
      coachMove: "Ask: 'Who is in the room? What would they already know, and what would you need to explain?'"
    },
    {
      id: "vague-success-criteria",
      label: "Sets goals that can't be checked",
      description: "Uses fuzzy goals like 'make it good' instead of specific, checkable criteria.",
      coachMove: "Turn each goal into a yes/no question: 'Does it include a graph?' 'Is it under 4 minutes?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Big Idea or Sharp Idea?",
      prompt:
        "Would you rather present a capstone titled 'Everything About Winter' or one titled 'Why Snowflakes Have Six Sides'? Which one could you actually finish, explain clearly, and be proud of by Friday — and why?",
      answer:
        "'Why Snowflakes Have Six Sides' — a sharp, narrow scope is finishable and explainable in a week, while 'Everything About Winter' is far too big to do well. Tight scope wins.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Blueprint",
      challenge:
        "Design a one-page BLUEPRINT for your winter STEM capstone. It should name your focused topic, your audience, and your success criteria — the map you'll follow all week to the showcase.",
      steps: [
        "Write your ONE focused winter topic at the top as a title.",
        "Name your audience and one sentence about what they'll need explained.",
        "List 3 checkable success criteria (things a finished project must have).",
        "Sketch a quick plan for the week: data day, coding day, presentation day."
      ],
      deliverable: "A one-page capstone blueprint: focused title, audience, 3 success criteria, and a week plan.",
      choiceBoard: [
        "Draw or type a one-page blueprint poster.",
        "Record a 30-second 'pitch' naming your topic, audience, and goals.",
        "Make a checklist card of your success criteria to tick off all week."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Planning Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student writes their plan: 'Topic: winter. Audience: people. Goal: be good.' What is the BIGGEST problem with this plan?",
          choices: [
            "It is far too long.",
            "The topic, audience, and goal are all too vague to guide the work or be checked.",
            "It has no title.",
            "Nothing — it is a strong plan."
          ],
          answerIndex: 1,
          explanation: "Every part is fuzzy: 'winter' is too broad, 'people' isn't a specific audience, and 'be good' can't be checked. A strong plan is specific and checkable.",
          hintLadder: [
            "Check each part: is it specific enough to act on?",
            "Can you check off 'be good'? Is 'people' a real audience?",
            "All three parts are too vague."
          ]
        },
        {
          id: "g6.winter.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Rewrite this weak plan into a strong one: 'Topic: space. Audience: people. Goal: do a good job.' Give a focused topic, a specific audience, and one checkable success criterion.",
          rubric: {
            level3: "Produces a focused winter/space topic, a specific audience, AND one checkable success criterion.",
            level2: "Improves two of the three parts clearly.",
            level1: "Still vague or improves only one part."
          },
          exemplar: "Topic: why the winter sky has different constellations than summer. Audience: my classmates and families at the showcase. Success criterion: I show a labeled sky diagram and explain it in under 3 minutes.",
          hintLadder: [
            "Narrow 'space' to one focused winter question.",
            "Name exactly who your audience is.",
            "Write one criterion you can check yes/no."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Snowflake Breath",
      prompt:
        "Sit tall. Imagine a single snowflake drifting down slowly. Breathe in for 4 counts as it rises, hold for 4, and breathe out for 4 as it settles. Each breath, picture one clear goal for your capstone. Repeat 3 times.",
      scienceTieIn: "Slow, focused breathing lowers your heart rate and helps your brain concentrate — perfect for planning clearly at the start of showcase week.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "It's the final week of the Winter Expedition! Of everything you explored — energy, space, forces, frozen matter — what will YOUR capstone be about, and who can't wait to see it?",
      badge: { id: "winter-capstone-planner", name: "Capstone Planner", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
