// Grade 5 ELA/Writing — Fall Expedition, Week 8 (Harvest Showcase), Day 5.
// Grade 5 counterpart of g6.fall.ela.w8.d5. Same topic (deliver and reflect —
// the season capstone) pitched down to Grade 5: simpler delivery tips,
// sentence frames, and extra support. Celebratory graduation tone.

export const fallG5ElaW8D5 = {
  id: "g5.fall.ela.w8.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Deliver and reflect — season capstone",
  topicTag: "capstone-reflection",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.5.4", "CCSS.ELA-LITERACY.SL.5.6"],
  hook: "This is it — your Fall Expedition showcase! Today you get your talk ready, share your best work, and look back to celebrate how far you've come this season.",
  miniLesson: [
    "How you SAY it matters: speak clearly, look up at your audience, and pause between ideas so they can sink in.",
    "A great ENDING says your one big message again and thanks the audience, so they leave remembering it.",
    "REFLECTING turns a project into real learning: name what you did, what was hard, and what you'd do next time."
  ],
  workedExample: {
    prompt: "Write a strong ENDING line for a fall showcase about how nature gets ready for winter.",
    steps: [
      "Say your big message again.",
      "Make it a little bigger than just the project.",
      "End with a thank-you.",
      "Result: 'Fall shows us that even resting is part of getting ready. Thank you for exploring the season with me.'"
    ],
    answer: "Fall shows us that even resting is part of getting ready. Thank you for exploring the season with me."
  },
  items: [
    {
      id: "g5.fall.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the BEST way to speak when you present?",
      choices: [
        "Read every word from the page and never look up",
        "Speak clearly, look at the audience, and pause between ideas",
        "Talk as fast as you can",
        "Mumble so you seem humble"
      ],
      answerIndex: 1,
      explanation: "Clear speech, eye contact, and pauses help your audience follow along and stay interested.",
      hintLadder: [
        "What helps an audience follow you?",
        "Think about speed, looking up, and pauses.",
        "Clear + look up + pause."
      ]
    },
    {
      id: "g5.fall.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "A strong ENDING to a presentation should...",
      choices: [
        "add brand-new information",
        "say your big message again and leave one thing to remember",
        "just say 'the end'",
        "say sorry for the talk"
      ],
      answerIndex: 1,
      explanation: "An ending says the big message again and leaves a takeaway — it doesn't add new stuff.",
      hintLadder: [
        "What should the audience remember?",
        "Don't add new facts at the very end.",
        "Say your message again + a takeaway."
      ],
      misconceptionsTargeted: ["new-info-in-closing"]
    },
    {
      id: "g5.fall.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Why is REFLECTING (looking back) on your project a good idea?",
      choices: [
        "It wastes time",
        "It turns the project into learning by naming what worked and what to fix",
        "It only matters for grades",
        "It makes the project longer"
      ],
      answerIndex: 1,
      explanation: "Reflecting helps the learning stick and shows you how to do even better next time.",
      hintLadder: [
        "What do you gain by thinking back?",
        "Naming what worked and what to fix.",
        "It makes the learning stick."
      ]
    },
    {
      id: "g5.fall.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the ending line for YOUR fall showcase. Say your big message again AND thank your audience. Try this frame: 'This fall taught me ___. Thank you for ___.'",
      rubric: {
        level3: "Says a clear big message again AND includes a thank-you, using the frame.",
        level2: "Has an ending but the message or the thank-you is weak.",
        level1: "Flat or missing the big message."
      },
      exemplar: "This fall taught me that small steps add up, from my leaf drawing to my pumpkin math. Thank you for exploring the season with me.",
      hintLadder: [
        "What's the ONE big idea of your showcase?",
        "Say it in a memorable way.",
        "End with a thank-you using the frame."
      ]
    },
    {
      id: "g5.fall.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Season reflection: name ONE thing you got better at this fall, ONE thing that was hard, and ONE goal for next season.",
      rubric: {
        level3: "One clear improvement + one real challenge + one goal for next season, all three there.",
        level2: "Two of the three clearly stated.",
        level1: "Vague or fewer than two."
      },
      exemplar: "I got better at backing up my ideas with real proof. Cause-and-effect chains were hard because things have many causes. Next season I want to get faster at reading graphs.",
      hintLadder: [
        "What got better for you this fall?",
        "What was the hardest part?",
        "What will you aim for next season?"
      ]
    }
  ],
  reflectionPrompt: "You finished the Fall Expedition! Look back at your Week 1 goals — which ones did you reach? Save your favorite piece of work to compare with next season.",
  misconceptionBank: [
    {
      id: "new-info-in-closing",
      label: "Adds brand-new points in the ending",
      description: "Puts fresh information at the end instead of saying the big message.",
      coachMove: "Endings wrap up; if there's a new point, it belongs in the middle — end by saying the takeaway."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to End",
      prompt:
        "Would you rather end your showcase by quietly saying 'Um, that's it' OR by saying 'Fall taught me that small steps add up. Thank you for exploring the season with me'? Which one leaves the audience with more, and why?",
      answer:
        "The second one! It says the big message again and thanks the audience, so people leave with one clear thing to remember — much stronger than trailing off with 'that's it.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Expedition Time Capsule",
      challenge:
        "Make a 'time capsule' of your whole Fall Expedition: pick your proudest piece, write a note to your future (next-season) self, and make up a one-line motto for everything you learned this fall.",
      steps: [
        "Choose the one fall piece you're proudest of and say why in one line.",
        "Write a short note to your next-season self: one win, one hard part, one goal.",
        "Invent a one-line fall motto that sums up your season.",
        "Decorate it with a fall touch (leaves, pumpkins) so it feels like a celebration."
      ],
      deliverable: "A time-capsule page: your proudest piece, a note to your future self, and a one-line fall motto.",
      choiceBoard: [
        "Make a decorated time-capsule page.",
        "Record or write a 30-second 'letter to next-season me.'",
        "Design a fall 'season badge' with your motto on it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Capstone Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which is the BEST way to end a showcase presentation?",
          choices: [
            "Add a brand-new fact you forgot earlier.",
            "Say your big message again and thank the audience.",
            "Say sorry for any mistakes you made.",
            "Just stop talking and sit down."
          ],
          answerIndex: 1,
          explanation: "A strong ending says the message again and leaves a takeaway — it doesn't add new facts, apologize, or trail off.",
          hintLadder: [
            "What should the audience remember as you finish?",
            "Endings wrap up; they don't add new stuff.",
            "Say your message again and thank the audience."
          ]
        },
        {
          id: "g5.fall.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a full ending for your fall showcase: say your big message again in a memorable way AND thank your audience, in one or two sentences.",
          rubric: {
            level3: "Says a clear, memorable big message again AND includes a real thank-you.",
            level2: "Has an ending but the message or the thank-you is weak or vague.",
            level1: "Flat, missing the message, or adds new information."
          },
          exemplar: "From leaf drawings to pumpkin math to a story I'm proud of, this fall taught me that small steps add up. Thank you for exploring the season with me.",
          hintLadder: [
            "What's the ONE big idea of your whole showcase?",
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
        "Sit or stand tall. Breathe in for 4 counts while thinking of one thing you're proud of this fall, hold for 4, and breathe out for 4, letting any nerves go. Do it 3 times.",
      scienceTieIn: "Slow, steady breathing calms your body's stress response, helping you feel grounded and proud as you finish the season.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The Fall Expedition is complete! Look back at where you started in Week 1 — what's the biggest way you've grown, and what are you most excited to learn next season?",
      badge: { id: "g5-fall-expedition-graduate", name: "Fall Expedition Graduate", emoji: "🍁" },
      estimatedMinutes: 7
    }
  }
};
