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
  estimatedMinutes: 60, // full Daily Hour
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
        "apologize for the talk",
        "just say 'the end'",
        "restate the main message and leave one clear takeaway"
      ],
      answerIndex: 3,
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
        "It only matters for grades",
        "It turns the experience into lasting learning by naming what worked and what to improve",
        "It makes the project longer"
      ],
      answerIndex: 2,
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to End",
      prompt:
        "Would you rather end your showcase by quietly saying 'Um, that's it' OR by saying 'Balance keeps a forest — and a community — alive. Thank you for exploring fall with me'? Which leaves the audience with more, and why?",
      answer:
        "The second. It restates the big message and thanks the audience, so people leave with one clear takeaway — far stronger than trailing off with 'that's it.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Expedition Time Capsule",
      challenge:
        "Make a 'time capsule' of your whole Fall Expedition: pick your proudest piece, write a note to your future (next-season) self, and design a one-line motto for everything you learned this fall.",
      steps: [
        "Choose the single fall piece you're proudest of and say why in one line.",
        "Write a short note to your next-season self: one win, one challenge, one goal.",
        "Invent a one-line fall motto that sums up your season.",
        "Decorate it with a harvest/autumn touch so it feels like a celebration."
      ],
      deliverable: "A time-capsule page: proudest piece, a note to your future self, and a one-line fall motto.",
      choiceBoard: [
        "Make a decorated time-capsule page.",
        "Record or write a 60-second 'letter to next-season me.'",
        "Design an autumn 'season badge' with your motto on it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Capstone Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which is the BEST way to close a showcase presentation?",
          choices: [
            "Restate your main message and thank the audience.",
            "Introduce a brand-new fact you forgot earlier.",
            "Apologize for any mistakes you made.",
            "Just stop talking and sit down."
          ],
          answerIndex: 0,
          explanation: "A strong closing lands the message and leaves a takeaway — it doesn't add new info, apologize, or trail off.",
          hintLadder: [
            "What should the audience remember as you finish?",
            "Closings consolidate; they don't add new material.",
            "Restate the message and thank the audience."
          ]
        },
        {
          id: "g6.fall.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a full closing for your fall showcase: restate your main message memorably AND thank your audience in one or two sentences.",
          rubric: {
            level3: "Restates a clear, memorable main message AND includes a genuine thank-you/takeaway.",
            level2: "Has a closing but the message or the thank-you is weak or vague.",
            level1: "Flat, missing the restated message, or adds new information."
          },
          exemplar: "From food webs to budgets to a letter for change, this fall taught me that small, balanced choices add up. Thank you for exploring the season with me.",
          hintLadder: [
            "What's the one big idea of your whole showcase?",
            "Say it in a memorable line.",
            "End with a real thank-you to your audience."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Proud Breath",
      prompt:
        "Sit or stand tall. Breathe in for 4 counts while thinking of one thing you're proud of this fall, hold for 4, and breathe out for 4 letting any nerves go. Repeat 3 times.",
      scienceTieIn: "Slow, steady breathing calms your body's stress response, helping you feel grounded and proud as you finish the season.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The Fall Expedition is complete! Look back at where you started in Week 1 — what's the biggest way you've grown, and what are you most excited to learn next season?",
      badge: { id: "fall-expedition-graduate", name: "Fall Expedition Graduate", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
