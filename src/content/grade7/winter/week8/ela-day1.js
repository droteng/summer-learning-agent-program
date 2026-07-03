// Grade 7 ELA/Writing — Winter Showcase, Week 8, Day 1.
// Topic: plan your STEM winter capstone — scope, audience, and success
// criteria, pitched one level up: thesis-driven planning with a measurable,
// defensible success rubric. Opens the season's celebratory showcase week.

export const winterG7ElaW8D1 = {
  id: "g7.winter.ela.w8.d1",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your STEM capstone — scope, audience, and a defensible success rubric",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.5", "CCSS.W.7.4"],
  hook: "Welcome to showcase week — the finale of the whole Winter Expedition. Grade 7 planners don't just pick a topic; they commit to a THESIS, scope it tightly, tune it to a specific audience, and build a measurable success rubric they can defend. Today you engineer the plan that makes the rest of the week run like clockwork.",
  miniLesson: [
    "A THESIS turns a topic into a claim you will argue: not 'lakes freezing' but 'lakes freeze from the top down BECAUSE ice is less dense than water.' Scope is then everything needed to defend that claim — and nothing more.",
    "AUDIENCE ANALYSIS means predicting what your listeners already know and what they'll misunderstand, then designing your explanations and vocabulary to close exactly those gaps.",
    "A SUCCESS RUBRIC is a set of measurable, weighted criteria — each phrased so an outside judge would score it the same way you do. 'Clearly explained' is not measurable; 'defines every technical term the first time it appears' is."
  ],
  workedExample: {
    prompt: "Turn the vague idea 'do something about winter' into a thesis-driven capstone plan with an audience analysis and one measurable, defensible success criterion.",
    steps: [
      "Draft a THESIS (a claim, not a topic): 'Snow looks white — even though ice is clear — because its many tiny surfaces scatter all colors of light equally.'",
      "Analyze the AUDIENCE: classmates and families likely know snow is white but not why; they'll need 'scattering' defined with an everyday analogy.",
      "Write one MEASURABLE success criterion an outside judge could score identically: 'The explanation defines scattering with a concrete analogy AND the talk stays under 4 minutes.'",
      "Result: a defensible plan where scope, audience, and criteria all serve one clear claim."
    ],
    answer: "Thesis: snow looks white because many tiny ice surfaces scatter all colors of light equally. Audience: classmates/families who need 'scattering' defined. Criterion: defines scattering with an analogy and runs under 4 minutes — measurable and defensible."
  },
  items: [
    {
      id: "g7.winter.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which statement is a THESIS (a defensible claim) rather than just a topic?",
      choices: [
        "A frozen lake.",
        "Frozen lakes stay liquid at the bottom because floating ice insulates the water below it.",
        "Something about frozen lakes.",
        "Winter lakes are interesting."
      ],
      answerIndex: 1,
      explanation: "A thesis makes a cause-and-effect claim you can defend with evidence ('...because floating ice insulates...'). The others name a subject or an opinion but assert no arguable claim.",
      hintLadder: [
        "A thesis argues WHY or HOW, not just WHAT.",
        "Which option contains a 'because' you could defend with evidence?",
        "The 'floating ice insulates' option states a defensible cause."
      ]
    },
    {
      id: "g7.winter.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "You've analyzed your audience: classmates and families who know snow is white but not why. How should this MOST change your plan?",
      choices: [
        "It shouldn't — explain it the same way you'd explain it to a physicist.",
        "Skip the 'why' entirely, since they already know snow is white.",
        "Spend your time defining 'light scattering' with an everyday analogy, not re-proving that snow is white.",
        "Add more technical jargon to sound impressive."
      ],
      answerIndex: 2,
      explanation: "Audience analysis targets the GAP: they know the fact but not the mechanism, so you invest effort in explaining the mechanism accessibly, not in what they already know or in jargon that widens the gap.",
      hintLadder: [
        "Where is the gap between what they know and what they need?",
        "They already know the fact — what's missing is the WHY.",
        "Explain the mechanism with an accessible analogy."
      ],
      misconceptionsTargeted: ["audience-gap-ignored"]
    },
    {
      id: "g7.winter.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Which success criterion is MEASURABLE and DEFENSIBLE — meaning an outside judge would score it the same way you would?",
      choices: [
        "The presentation feels really good.",
        "I try my best and stay positive.",
        "Every technical term is defined the first time it appears, and the talk runs under 4 minutes.",
        "The project is impressive and creative."
      ],
      answerIndex: 2,
      explanation: "'Defines every term on first use' and 'under 4 minutes' are objective — two judges would agree. 'Feels good,' 'impressive,' and 'creative' are subjective and can't be scored consistently.",
      hintLadder: [
        "Measurable means two different judges would agree on the score.",
        "Which option can be checked objectively, without opinion?",
        "'Defines terms on first use' + 'under 4 minutes' is measurable."
      ]
    },
    {
      id: "g7.winter.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write a one-sentence THESIS for your own winter STEM capstone: state a claim (with a cause or reason) that you will defend, not just a topic.",
      rubric: {
        level3: "States a focused, defensible claim with a cause/reason (a 'because' or clear mechanism) that is realistic to defend and present in a week.",
        level2: "Names a focused topic but stops short of a defensible claim (no cause or mechanism).",
        level1: "Too broad, a bare fact, an opinion, or not a claim at all."
      },
      exemplar: "My capstone will argue that frost forms on winter windows because water vapor loses heat to the cold glass and changes directly into ice crystals.",
      hintLadder: [
        "Pick ONE winter phenomenon, then ask 'why does it happen?'",
        "Turn the answer into a claim using 'because' or a mechanism.",
        "State it as a single defensible sentence."
      ]
    },
    {
      id: "g7.winter.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Design a mini SUCCESS RUBRIC for your capstone: name your audience, then write TWO measurable, weighted criteria (assign each a point value) that an outside judge could score the same way you would.",
      rubric: {
        level3: "Names a specific audience AND gives two measurable criteria, each with a point value (weight), phrased objectively enough for consistent outside scoring.",
        level2: "Gives an audience and two weighted criteria, but one is vague or not objectively scorable.",
        level1: "Missing the audience, missing weights, or fewer than two measurable criteria."
      },
      exemplar: "Audience: my classmates and families at the showcase. Criterion 1 (5 pts): includes one labeled graph of my data with axis titles. Criterion 2 (5 pts): defines every technical term on first use and finishes under 4 minutes.",
      hintLadder: [
        "First name exactly who will judge your showcase.",
        "Write criteria two judges would score identically, and give each points.",
        "Two objective, weighted criteria plus your audience."
      ]
    }
  ],
  reflectionPrompt: "Look back across the whole Winter Expedition — energy, space, forces, matter. Which claim are you most ready to DEFEND at your showcase? Save your thesis, audience analysis, and success rubric; you'll build on them all week.",
  misconceptionBank: [
    {
      id: "audience-gap-ignored",
      label: "Plans without targeting the audience's knowledge gap",
      description: "Explains everything (or nothing) instead of investing effort exactly where the audience's understanding falls short.",
      coachMove: "Ask: 'What does this audience already know, and where exactly will they get lost? Spend your minutes on the gap.'"
    },
    {
      id: "unmeasurable-criteria",
      label: "Writes success criteria that can't be scored consistently",
      description: "Uses subjective goals like 'impressive' or 'creative' that two judges would score differently.",
      coachMove: "Turn each goal into an objective test: 'Would two strangers give it the same score? If not, make it measurable.'"
    }
  ],
  stretch: {
    prompt: "Weight your rubric: assign point values to your criteria so they total 100, then justify in one sentence why your most important criterion carries the most weight.",
    answer: "Example: 'Explains the mechanism clearly (50), includes labeled data (30), stays under 4 minutes (20)' — the mechanism is weighted highest because defending the thesis is the whole point of the capstone."
  },
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Topic or Thesis?",
      prompt:
        "Would you rather present a capstone titled 'Snowflakes' or one titled 'Snowflakes Have Six Sides BECAUSE Water Molecules Bond at 120-Degree Angles'? Which one gives you something to actually DEFEND — and why does a defensible claim make a stronger showcase?",
      answer:
        "The second. 'Snowflakes' is only a topic; the second is a thesis with a mechanism you can argue and prove with evidence. A defensible claim gives your whole talk a spine.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Design Brief",
      challenge:
        "Write a one-page DESIGN BRIEF for your winter STEM capstone: a thesis, an audience analysis, and a weighted success rubric — the engineering spec you'll build against all week.",
      steps: [
        "Write your THESIS at the top as a defensible claim (include the 'because').",
        "Add a two-line AUDIENCE ANALYSIS: what they know, and the gap you must close.",
        "List a weighted success rubric: 3 measurable criteria with point values.",
        "Sketch a week plan mapping each day (data, coding, rehearsal) to the criteria it serves."
      ],
      deliverable: "A one-page design brief: thesis, audience analysis, weighted rubric, and a criterion-linked week plan.",
      choiceBoard: [
        "Draw or type a one-page design-brief poster.",
        "Record a 45-second 'pitch' stating your thesis, audience gap, and top criterion.",
        "Make a scoring card of your weighted rubric to self-grade against all week."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Planning Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student's plan reads: 'Thesis: winter. Audience: everyone. Rubric: be impressive.' What is the deepest flaw?",
          choices: [
            "It is far too long.",
            "None of the three parts is defensible or measurable: 'winter' is not a claim, 'everyone' is not an analyzable audience, and 'impressive' cannot be scored.",
            "It is missing a title.",
            "Nothing — it is a strong plan."
          ],
          answerIndex: 1,
          explanation: "A strong plan needs a defensible claim, a specific analyzable audience, and measurable criteria. Here 'winter' is a topic not a thesis, 'everyone' can't be analyzed for a knowledge gap, and 'impressive' is subjective.",
          hintLadder: [
            "Check each part against the day's standards: claim, audience gap, measurability.",
            "Is 'winter' a claim? Can 'everyone' be analyzed? Can 'impressive' be scored?",
            "All three fail — none is defensible or measurable."
          ]
        },
        {
          id: "g7.winter.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Rewrite this weak plan into a strong one: 'Thesis: space. Audience: everyone. Rubric: do a good job.' Give a defensible thesis, a specific audience with its knowledge gap, and one measurable criterion.",
          rubric: {
            level3: "Produces a defensible winter/space thesis (with a because/mechanism), a specific audience plus its knowledge gap, AND one measurable, scorable criterion.",
            level2: "Clearly improves two of the three parts.",
            level1: "Still vague or improves only one part."
          },
          exemplar: "Thesis: the winter sky shows different constellations than summer BECAUSE Earth faces a different part of space at night across its orbit. Audience: classmates/families who know constellations change but not why — I must close that 'why' gap. Criterion (10 pts): I show a labeled orbit diagram and define 'constellation' on first use in under 3 minutes.",
          hintLadder: [
            "Turn 'space' into a claim with a cause.",
            "Name a specific audience and the exact gap you must close.",
            "Write one criterion two judges would score identically."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Snowflake Breath",
      prompt:
        "Sit tall. Picture a single snowflake drifting down slowly. Breathe in for 4 counts as it rises, hold for 4, breathe out for 4 as it settles. With each exhale, lock in one part of your plan — thesis, audience, criterion. Repeat 3 times.",
      scienceTieIn: "Slow, paced breathing lowers your heart rate and steadies attention networks in the brain — ideal for the focused, high-stakes planning that opens showcase week.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "It's the finale of the Winter Expedition! Of everything you explored — energy, space, forces, frozen matter — what CLAIM will your capstone defend, and who can't wait to see you prove it?",
      badge: { id: "g7-winter-capstone-architect", name: "Capstone Architect", emoji: "🗺️" },
      estimatedMinutes: 7
    }
  }
};
