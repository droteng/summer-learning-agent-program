// Grade 6 ELA/Writing — Spring Expedition, Week 8 (Spring Showcase), Day 5.
// Topic: showcase presentation — write and deliver a confident presentation of
// your capstone, and reflect on a full year of learning. This is the FINAL day
// of the FINAL week of the FINAL season: a graduation from the whole program.

export const springG6ElaW8D5 = {
  id: "g6.spring.ela.w8.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase presentation — deliver and reflect on the year",
  topicTag: "showcase-presentation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.SL.6.4", "CCSS.SL.6.6"],
  hook: "This is the moment the whole year built toward — your Spring Showcase. Today you write a confident presentation of your renewal-themed capstone, deliver it, and look back on how far you've grown across four seasons.",
  miniLesson: [
    "A strong presentation has THREE parts: an opening hook that grabs attention, a clear middle that walks through your work, and a closing that lands your big idea.",
    "DELIVERY is what makes it confident: speak clearly, make eye contact, stand tall, and pause between points so ideas sink in.",
    "A great closing restates your renewal-themed message and thanks the audience — and, on this final day, it can honor the whole year of learning behind it."
  ],
  workedExample: {
    prompt: "Write a confident OPENING hook for a showcase about how a seed becomes a plant.",
    steps: [
      "Start with something vivid or surprising, not 'Um, my project is about...'.",
      "Connect it to the renewal theme.",
      "Make the audience curious to hear more.",
      "Result: 'One tiny seed, a little water, and 21 days later — a whole living plant. Let me show you how spring pulled that off.'"
    ],
    answer: "One tiny seed, a little water, and 21 days later — a whole living plant. Let me show you how spring pulled that off."
  },
  items: [
    {
      id: "g6.spring.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the STRONGEST opening hook for a showcase presentation?",
      choices: [
        "Um, so, this is my project, I guess.",
        "I didn't have much time, sorry.",
        "One tiny seed became a whole plant in three weeks — here's the science behind that miracle.",
        "My project is about a plant."
      ],
      answerIndex: 2,
      explanation: "It's vivid, ties to the renewal theme, and makes the audience curious — a real hook, not an apology or a flat label.",
      hintLadder: [
        "A hook should grab attention right away.",
        "Which one makes you WANT to hear more?",
        "The vivid seed-to-plant line pulls you in."
      ]
    },
    {
      id: "g6.spring.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "Which delivery habit makes a presenter seem MOST confident?",
      choices: [
        "Reading every word off the page without looking up",
        "Speaking clearly, making eye contact, and pausing between points",
        "Rushing to finish as fast as possible",
        "Staring at the floor"
      ],
      answerIndex: 1,
      explanation: "Clear speech, eye contact, and purposeful pauses signal confidence and help the audience follow you.",
      hintLadder: [
        "What tells an audience you're sure of your work?",
        "Think eye contact, clear voice, and pauses.",
        "Clear + look up + pause = confident."
      ],
      misconceptionsTargeted: ["confidence-means-fast"]
    },
    {
      id: "g6.spring.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "A strong CLOSING for your showcase should...",
      choices: [
        "restate your renewal-themed message and thank the audience",
        "introduce a brand-new fact you forgot",
        "apologize for any mistakes",
        "just trail off and sit down"
      ],
      answerIndex: 0,
      explanation: "A closing lands your big idea and leaves a takeaway — it doesn't add new info, apologize, or fade out.",
      hintLadder: [
        "What should the audience remember as you finish?",
        "Closings consolidate; they don't add new material.",
        "Restate your message and thank the audience."
      ]
    },
    {
      id: "g6.spring.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the CLOSING for your Spring Showcase: restate your renewal-themed message memorably AND thank your audience.",
      rubric: {
        level3: "Restates a clear, memorable renewal/growth message AND includes a genuine thank-you or takeaway.",
        level2: "Has a closing but the message or the thank-you is weak or vague.",
        level1: "Flat, missing the restated message, or adds new information."
      },
      exemplar: "From one seed to a living plant, this spring showed me that growth is just small changes adding up, day after day. Thank you for watching mine unfold with me.",
      hintLadder: [
        "What's the one big renewal idea of your capstone?",
        "Say it in a memorable line.",
        "End with a real thank-you to your audience."
      ]
    },
    {
      id: "g6.spring.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Year reflection: name ONE thing you got better at across the whole year, ONE challenge you overcame, and ONE way you'll keep growing after the program.",
      rubric: {
        level3: "Specific year-long growth + a genuine challenge overcome + a concrete plan to keep growing — all three present.",
        level2: "Two of the three clearly stated.",
        level1: "Vague or fewer than two."
      },
      exemplar: "Across the year I got much better at backing my ideas with real data. Presenting out loud used to scare me, but by spring I could deliver a whole showcase. I'll keep growing by starting a science journal over the summer.",
      hintLadder: [
        "Think back across all four seasons — what improved most?",
        "What was hard that you pushed through?",
        "How will you keep learning after this?"
      ]
    }
  ],
  reflectionPrompt: "You've reached the very last day of the whole year. Look back at where you started — what's the biggest way you've grown, and what are you proudest of showing the world today?",
  misconceptionBank: [
    {
      id: "confidence-means-fast",
      label: "Thinks talking fast looks confident",
      description: "Rushes through a presentation, believing speed signals confidence, when it actually loses the audience.",
      coachMove: "Slow down and add pauses. Confidence comes from clear speech and eye contact, not speed — pauses let big ideas land."
    },
    {
      id: "new-info-in-closing",
      label: "Adds brand-new points in the closing",
      description: "Introduces fresh information at the end instead of landing the message.",
      coachMove: "Closings consolidate; a new point belongs in the middle. End by restating the message and thanking the audience."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to Begin",
      prompt:
        "Would you rather open your showcase with 'Um, this is my project, I guess...' OR 'One tiny seed became a whole plant in 21 days — let me show you how'? Which one makes the audience lean in, and why?",
      answer:
        "The second. It's vivid, ties to the renewal theme, and makes people curious right away, while 'this is my project, I guess' sounds unsure and flat. A strong hook wins the room in the first sentence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Year-in-Bloom Showcase Script",
      challenge:
        "Write and rehearse the full script for your Spring Showcase: a hook opening, a clear middle that walks through your capstone, and a closing that restates your renewal message AND honors your whole year of learning.",
      steps: [
        "Write a one-sentence hook that grabs attention and names your renewal theme.",
        "Outline the middle: 3 points that walk the audience through your capstone.",
        "Write a closing that restates your big idea and thanks the audience.",
        "Rehearse it out loud once, standing tall, marking where you'll pause."
      ],
      deliverable: "A full showcase script (hook, middle outline, closing) rehearsed aloud at least once.",
      choiceBoard: [
        "Write the full script and mark your pauses.",
        "Record a practice run of your presentation.",
        "Make cue cards with your hook, 3 middle points, and closing."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which presentation follows the strongest THREE-part structure?",
          choices: [
            "Only a middle full of facts, with no opening or closing.",
            "A closing packed with brand-new information.",
            "A long apology, then some facts.",
            "A vivid hook, a clear middle walking through the work, and a closing that restates the message and thanks the audience."
          ],
          answerIndex: 3,
          explanation: "Hook + clear middle + landing closing is the complete structure; the others are missing a part or misuse the closing.",
          hintLadder: [
            "A full talk has an opening, a middle, AND a closing.",
            "The hook grabs, the middle explains, the closing lands.",
            "Only one choice has all three parts done right."
          ]
        },
        {
          id: "g6.spring.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a complete opening-and-closing pair for your Spring Showcase: a hook that grabs the audience AND a closing that restates your renewal message and thanks them.",
          rubric: {
            level3: "Gives a vivid hook tied to renewal AND a closing that restates the message with a genuine thank-you — both strong.",
            level2: "Has both a hook and a closing but one is weak or vague.",
            level1: "Missing the hook or the closing, or flat throughout."
          },
          exemplar: "Hook: 'One seed, a little water, 21 days — and a whole plant. Watch how spring did it.' Closing: 'Growth is just small changes adding up, season after season. Thank you for watching mine, and for a whole year of growing together.'",
          hintLadder: [
            "Start with a vivid, curiosity-sparking hook.",
            "End by restating your one big renewal idea.",
            "Close with a genuine thank-you."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Proud Bloom Breath",
      prompt:
        "Stand tall like a plant in full bloom. Breathe in for 4 counts thinking of one thing you're proud of this year, hold for 4, and breathe out for 4 releasing any stage-nerves. Repeat 3 times, then reach up like the sun's reaching back.",
      scienceTieIn: "Slow, steady breathing calms your body's stress response, so you can step up to present feeling grounded, proud, and ready.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You did it — the final day of the whole year at Dr. Spark Academy. Across all four seasons, what's the single biggest way you've grown, and what do you most want to keep learning next?",
      badge: { id: "spring-year-showcase-graduate", name: "Year Showcase Graduate", emoji: "🎓" },
      estimatedMinutes: 7
    }
  }
};
