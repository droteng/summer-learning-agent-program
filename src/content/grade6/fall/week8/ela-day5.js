// Grade 6 ELA/Writing — Fall Expedition, Week 8 (Harvest Showcase), Day 5.
// Topic: deliver and reflect — the season capstone. Brings together the
// whole Fall Expedition into a final cross-subject showcase.

export const fallG6ElaW8D5 = {
  id: "g6.fall.ela.w8.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Deliver and reflect — season capstone",
  topicTag: "capstone-reflection",
  estimatedMinutes: 20,
  standardsRefs: ["CCSS.SL.6.4", "CCSS.SL.6.6", "CCSS.W.6.10"],
  hook: "This is it — your Fall Expedition showcase. Today you finalize your delivery, present your cross-subject work, and reflect on how far you've come this season.",
  miniLesson: [
    "Delivery matters: speak clearly, look up at your audience, and pause between points so ideas land.",
    "A great closing restates your main message and thanks the audience — leave them with one clear takeaway.",
    "Reflection turns a project into learning: name what you did, what was hard, and what you'd do next time."
  ],
  workedExample: {
    prompt: "Write a strong CLOSING line for a fall showcase about ecosystems and balance.",
    steps: [
      "Restate the big message.",
      "Make it memorable and a little bigger than the project.",
      "End with a thank-you.",
      "Result: 'Balance keeps a forest — and a community — alive. Thank you for exploring the fall with me.'"
    ],
    answer: "Balance keeps a forest — and a community — alive. Thank you for exploring the fall with me."
  },
  items: [
    {
      id: "g6.fall.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the BEST delivery habit when presenting?",
      choices: [
        "Read every word from the page without looking up",
        "Speak clearly, look at the audience, and pause between points",
        "Talk as fast as possible",
        "Mumble to seem humble"
      ],
      answerIndex: 1,
      explanation: "Clear speech, eye contact, and pauses help the audience follow and stay engaged.",
      hintLadder: [
        "What helps an audience follow you?",
        "Think speed, eye contact, and pauses.",
        "Clear + look up + pause."
      ]
    },
    {
      id: "g6.fall.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "A strong CLOSING to a presentation should...",
      choices: [
        "introduce brand-new information",
        "restate the main message and leave one clear takeaway",
        "just say 'the end'",
        "apologize for the talk"
      ],
      answerIndex: 1,
      explanation: "Closings land the message and give the audience a takeaway — not new material.",
      hintLadder: [
        "What should the audience remember?",
        "Don't add new info at the end.",
        "Restate the message + a takeaway."
      ],
      misconceptionsTargeted: ["new-info-in-closing"]
    },
    {
      id: "g6.fall.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Why is REFLECTING on your project valuable?",
      choices: [
        "It wastes time",
        "It turns the experience into lasting learning by naming what worked and what to improve",
        "It only matters for grades",
        "It makes the project longer"
      ],
      answerIndex: 1,
      explanation: "Reflection cements learning and guides how you'll do better next time.",
      hintLadder: [
        "What do you gain by thinking back?",
        "Naming what worked and what to fix.",
        "It deepens the learning."
      ]
    },
    {
      id: "g6.fall.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the closing line for YOUR fall showcase: restate your main message and thank the audience.",
      rubric: {
        level3: "Restates a clear main message memorably AND includes a thank-you/takeaway.",
        level2: "Has a closing but the message or thank-you is weak.",
        level1: "Flat or missing the restated message."
      },
      exemplar: "From food webs to budgets to a letter that asks for change, this fall taught me that small, balanced choices add up. Thank you for exploring it with me.",
      hintLadder: [
        "What's the one big idea of your showcase?",
        "Say it memorably.",
        "End with a thank-you."
      ]
    },
    {
      id: "g6.fall.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Season reflection: name ONE thing you got better at this fall, ONE thing that was hard, and ONE goal for the next season.",
      rubric: {
        level3: "Specific growth + a genuine challenge + a concrete next-season goal, all three present.",
        level2: "Two of the three clearly stated.",
        level1: "Vague or fewer than two."
      },
      exemplar: "I got better at backing claims with real evidence. Cause-and-effect maps were hard because events have many causes. Next season, I want to get faster at reading data graphs.",
      hintLadder: [
        "What improved for you this fall?",
        "What challenged you most?",
        "What will you aim for next season?"
      ]
    }
  ],
  reflectionPrompt: "You finished the Fall Expedition! Look back at your Week 1 goals — which did you reach? Save your favorite piece of work to compare with next season.",
  misconceptionBank: [
    {
      id: "new-info-in-closing",
      label: "Adds brand-new points in the closing",
      description: "Introduces fresh information at the end instead of landing the message.",
      coachMove: "Closings consolidate; if there's a new point, it belongs in the middle — end by restating the takeaway."
    }
  ]
};
