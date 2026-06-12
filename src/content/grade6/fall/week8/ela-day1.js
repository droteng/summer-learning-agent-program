// Grade 6 ELA/Writing — Fall Expedition, Week 8 (Harvest Showcase), Day 1.
// Topic: plan a cross-subject showcase presentation.

export const fallG6ElaW8D1 = {
  id: "g6.fall.ela.w8.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your showcase presentation",
  topicTag: "presentation-planning",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.SL.6.4", "CCSS.W.6.4"],
  hook: "It's showcase week! Time to pull your best fall work into one presentation. Today you plan it — because a clear plan is what separates a great showcase from a ramble.",
  miniLesson: [
    "A strong presentation has three parts: an opening that hooks, a middle with your main points and evidence, and a closing that lands the message.",
    "Pick your strongest 2–3 pieces of fall work to feature — depth beats trying to show everything.",
    "Plan transitions between pieces so your audience can follow the journey across subjects."
  ],
  workedExample: {
    prompt: "Sketch a 3-part plan for a showcase about your fall ecosystem project.",
    steps: [
      "Opening hook: 'Did you know removing one species can collapse a whole forest?'",
      "Middle: show the food-web diagram, explain energy flow, share the keystone-species finding.",
      "Closing: 'Balance keeps an ecosystem — and a community — alive.'",
      "Three clear parts, one clear message."
    ],
    answer: "Hook → food web + energy + keystone finding → balance message."
  },
  items: [
    {
      id: "g6.fall.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "What are the three main parts of a strong presentation?",
      choices: [
        "Title, author, date",
        "Opening hook, middle with main points, closing message",
        "Introduction, introduction, introduction",
        "Beginning, snack, end"
      ],
      answerIndex: 1,
      explanation: "Hook → main points with evidence → closing message is the classic structure.",
      hintLadder: [
        "Think beginning, middle, end with a purpose.",
        "What grabs attention first?",
        "Hook, middle, closing."
      ]
    },
    {
      id: "g6.fall.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why feature your 2–3 STRONGEST pieces instead of everything you did?",
      choices: [
        "To save paper",
        "Depth and quality land better than rushing through everything",
        "Because rules say so",
        "Audiences like confusion"
      ],
      answerIndex: 1,
      explanation: "Focusing on your best work lets you go deep and keeps the audience engaged.",
      hintLadder: [
        "Imagine rushing through 20 things in 5 minutes.",
        "What's more memorable — depth or a blur?",
        "Feature your strongest, go deep."
      ],
      misconceptionsTargeted: ["more-is-better-presentation"]
    },
    {
      id: "g6.fall.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "What's the job of a TRANSITION in a presentation?",
      choices: [
        "To end the talk",
        "To smoothly connect one part to the next so the audience can follow",
        "To add random facts",
        "To repeat the title"
      ],
      answerIndex: 1,
      explanation: "Transitions bridge sections so the audience follows your flow across topics.",
      hintLadder: [
        "What helps an audience move from idea to idea?",
        "It's a bridge between parts.",
        "Transitions connect sections."
      ]
    },
    {
      id: "g6.fall.ela.w8.d1.q4",
      type: "short_answer",
      stem: "List the 2–3 fall pieces you'd feature in YOUR showcase, and one sentence on why each is worth showing.",
      rubric: {
        level3: "Names 2–3 specific pieces AND gives a clear reason each is showcase-worthy.",
        level2: "Names pieces but reasons are thin.",
        level1: "Vague or no real selections."
      },
      exemplar: "1) My ecosystem food-web diagram — it shows how everything connects. 2) My harvest-budget calculator — it proves I can use formulas. 3) My persuasive letter — it shows I can make an argument with evidence.",
      hintLadder: [
        "Look back at your fall work.",
        "Pick your best 2–3.",
        "Say why each is strong."
      ]
    },
    {
      id: "g6.fall.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Write an opening HOOK sentence for your showcase that would grab an audience's attention.",
      rubric: {
        level3: "A genuine attention-grabber (question, surprising fact, or vivid image) tied to the showcase topic.",
        level2: "An opening that's on-topic but not very gripping.",
        level1: "A flat opening like 'My project is about...' with no hook."
      },
      exemplar: "What if I told you that only one tenth of the sun's energy ever reaches the fox at the top of the food chain?",
      hintLadder: [
        "Could you open with a surprising fact or question?",
        "Make the audience curious.",
        "Tie it to your showcase topic."
      ]
    }
  ],
  reflectionPrompt: "A good plan makes you calmer when presenting. What part of presenting makes you most nervous, and how could planning help?",
  misconceptionBank: [
    {
      id: "more-is-better-presentation",
      label: "Tries to show everything in a presentation",
      description: "Crams in every piece of work instead of featuring the strongest.",
      coachMove: "Have them rank their work and present only the top few — depth and focus win."
    }
  ]
};
