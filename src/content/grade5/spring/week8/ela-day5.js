// Grade 5 ELA/Writing — Spring Expedition, Week 8 (Spring Showcase), Day 5.
// Grade 5 counterpart of g6.spring.ela.w8.d5. Same topic (showcase
// presentation: write, deliver, and reflect on the year) pitched down to
// Grade 5: simpler words, a paragraph frame, and one clear example at a time.
// This is the FINAL day of the FINAL week — a graduation from the whole year.

export const springG5ElaW8D5 = {
  id: "g5.spring.ela.w8.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase presentation — deliver and reflect on the year",
  topicTag: "showcase-presentation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.5.4", "CCSS.ELA-LITERACY.SL.5.6"],
  hook: "This is the moment the whole year built toward — your Spring Showcase! Today you write a confident presentation of your renewal-themed capstone, deliver it, and look back on how far you have grown across all four seasons.",
  miniLesson: [
    "A strong presentation has THREE parts: an OPENING hook that grabs attention, a clear MIDDLE that walks through your work, and a CLOSING that lands your big idea.",
    "DELIVERY is what makes it confident: speak clearly, look up at your audience, stand tall, and pause between points so your ideas sink in.",
    "A great closing says your renewal idea again and thanks the audience. Try this frame: 'My big idea is ___. I want to thank ___ for ___.'"
  ],
  workedExample: {
    prompt: "Write a confident OPENING hook for a showcase about how a seed becomes a plant.",
    steps: [
      "Start with something surprising, not 'Um, my project is about...'.",
      "Connect it to the renewal/spring theme.",
      "Make the audience curious to hear more.",
      "Result: 'One tiny seed, a little water, and 21 days later — a whole living plant! Let me show you how spring did it.'"
    ],
    answer: "One tiny seed, a little water, and 21 days later — a whole living plant! Let me show you how spring did it."
  },
  items: [
    {
      id: "g5.spring.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the STRONGEST opening hook for a showcase presentation?",
      choices: [
        "Um, so, this is my project, I guess.",
        "One tiny seed became a whole plant in three weeks — here is the science behind it!",
        "I did not have much time, sorry.",
        "My project is about a plant."
      ],
      answerIndex: 1,
      explanation: "It is vivid, ties to the spring theme, and makes the audience curious — a real hook, not an apology or a flat label.",
      hintLadder: [
        "A hook should grab attention right away.",
        "Which one makes you WANT to hear more?",
        "The vivid seed-to-plant line pulls you in."
      ]
    },
    {
      id: "g5.spring.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "Which delivery habit makes a presenter seem MOST confident?",
      choices: [
        "Reading every word off the page without ever looking up",
        "Speaking clearly, looking up at the audience, and pausing between points",
        "Rushing to finish as fast as possible",
        "Staring at the floor the whole time"
      ],
      answerIndex: 1,
      explanation: "Clear speech, eye contact, and pauses show confidence and help the audience follow you.",
      hintLadder: [
        "What tells an audience you are sure of your work?",
        "Think eye contact, clear voice, and pauses.",
        "Clear + look up + pause = confident."
      ],
      misconceptionsTargeted: ["confidence-means-fast"]
    },
    {
      id: "g5.spring.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "A strong CLOSING for your showcase should...",
      choices: [
        "add a brand-new fact you forgot to say",
        "say your renewal idea again and thank the audience",
        "apologize for any mistakes",
        "just trail off and sit down"
      ],
      answerIndex: 1,
      explanation: "A closing lands your big idea and gives a takeaway — it does not add new facts, apologize, or fade out.",
      hintLadder: [
        "What should the audience remember as you finish?",
        "Closings pull it together; they do not add new stuff.",
        "Say your idea again and thank the audience."
      ]
    },
    {
      id: "g5.spring.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the CLOSING for your Spring Showcase: say your renewal idea again in a way people will remember AND thank your audience. Use the frame: 'My big idea is ___. Thank you for ___.'",
      rubric: {
        level3: "Says a clear, memorable renewal/growth idea AND includes a real thank-you or takeaway.",
        level2: "Has a closing but the idea or the thank-you is weak or vague.",
        level1: "Flat, missing the restated idea, or adds new information."
      },
      exemplar: "My big idea is that growth is just small changes adding up, day after day, until one seed becomes a whole plant. Thank you for watching mine grow with me this spring.",
      hintLadder: [
        "What is the one big renewal idea of your capstone?",
        "Say it in a line people will remember.",
        "End with a real thank-you to your audience."
      ]
    },
    {
      id: "g5.spring.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Year reflection: name ONE thing you got better at this year, ONE challenge you got through, and ONE way you will keep growing after the program.",
      rubric: {
        level3: "Clear year-long growth + a real challenge you got through + a concrete plan to keep growing — all three there.",
        level2: "Two of the three clearly stated.",
        level1: "Vague or fewer than two."
      },
      exemplar: "This year I got much better at backing up my ideas with real numbers. Presenting out loud used to scare me, but by spring I could give a whole showcase. I will keep growing by starting a science journal this summer.",
      hintLadder: [
        "Think back across all four seasons — what got better?",
        "What was hard that you pushed through?",
        "How will you keep learning after this?"
      ]
    }
  ],
  reflectionPrompt: "You have reached the very last day of the whole year. Look back at where you started — what is the biggest way you have grown, and what are you proudest of showing the world today?",
  misconceptionBank: [
    {
      id: "confidence-means-fast",
      label: "Thinks talking fast looks confident",
      description: "Rushes through a presentation, thinking speed shows confidence, when it really loses the audience.",
      coachMove: "Slow down and add pauses. Confidence comes from clear speech and eye contact, not speed — pauses let big ideas land."
    },
    {
      id: "new-info-in-closing",
      label: "Adds brand-new points in the closing",
      description: "Puts new information at the end instead of landing the big idea.",
      coachMove: "Closings pull it together; a new point belongs in the middle. End by saying your idea again and thanking the audience."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to Begin",
      prompt:
        "Would you rather open your showcase with 'Um, this is my project, I guess...' OR 'One tiny seed became a whole plant in 21 days — let me show you how'? Which one makes the audience lean in, and why?",
      answer:
        "The second one! It is vivid, ties to spring, and makes people curious right away, while 'this is my project, I guess' sounds unsure and flat. A strong hook wins the room in the very first sentence.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Year-in-Bloom Showcase Script",
      challenge:
        "Write and rehearse the full script for your Spring Showcase: a hook opening, a clear middle that walks through your capstone, and a closing that says your renewal idea again AND honors your whole year of learning.",
      steps: [
        "Write a one-sentence hook that grabs attention and names your renewal idea.",
        "List the middle: 3 points that walk the audience through your capstone.",
        "Write a closing that says your big idea again and thanks the audience.",
        "Rehearse it out loud once, standing tall, marking where you will pause."
      ],
      deliverable: "A full showcase script (hook, 3 middle points, closing) rehearsed out loud at least once.",
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
          id: "g5.spring.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which presentation follows the strongest THREE-part structure?",
          choices: [
            "Only a middle full of facts, with no opening or closing.",
            "A vivid hook, a clear middle walking through the work, and a closing that says the idea again and thanks the audience.",
            "A long apology, then some facts.",
            "A closing packed with brand-new information."
          ],
          answerIndex: 1,
          explanation: "Hook + clear middle + landing closing is the complete structure; the others are missing a part or misuse the closing.",
          hintLadder: [
            "A full talk has an opening, a middle, AND a closing.",
            "The hook grabs, the middle explains, the closing lands.",
            "Only one choice has all three parts done right."
          ]
        },
        {
          id: "g5.spring.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a complete opening-and-closing pair for your Spring Showcase: a hook that grabs the audience AND a closing that says your renewal idea again and thanks them.",
          rubric: {
            level3: "Gives a vivid hook tied to renewal AND a closing that says the idea again with a real thank-you — both strong.",
            level2: "Has both a hook and a closing but one is weak or vague.",
            level1: "Missing the hook or the closing, or flat all the way through."
          },
          exemplar: "Hook: 'One seed, a little water, 21 days — and a whole plant! Watch how spring did it.' Closing: 'Growth is just small changes adding up, season after season. Thank you for watching mine, and for a whole year of growing together.'",
          hintLadder: [
            "Start with a vivid, curiosity-sparking hook.",
            "End by saying your one big renewal idea again.",
            "Close with a real thank-you."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Proud Bloom Breath",
      prompt:
        "Stand tall like a plant in full bloom. Breathe in for 4 counts thinking of one thing you are proud of this year, hold for 4, and breathe out for 4 letting go of any stage-nerves. Repeat 3 times, then reach up like the sun is reaching back.",
      scienceTieIn: "Slow, steady breathing calms your body's stress response, so you can step up to present feeling grounded, proud, and ready.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You did it — the final day of the whole year at Dr. Spark Academy! Across all four seasons, what is the single biggest way you have grown, and what do you most want to keep learning next?",
      badge: { id: "g5-spring-year-showcase-graduate", name: "Year Showcase Graduate", emoji: "🎓" },
      estimatedMinutes: 7
    }
  }
};
