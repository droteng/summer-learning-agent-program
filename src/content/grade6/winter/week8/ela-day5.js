// Grade 6 ELA/Writing — Winter Expedition, Week 8 (Winter Showcase), Day 5.
// Topic: showcase presentation — write and deliver a clear, confident
// presentation of your winter STEM capstone. The final day of the season.

export const winterG6ElaW8D5 = {
  id: "g6.winter.ela.w8.d5",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase presentation — write and deliver your winter capstone",
  topicTag: "showcase-presentation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.SL.6.4", "CCSS.SL.6.6"],
  hook: "This is the moment the whole Winter Expedition has been building toward — your showcase. Today you write a clear, confident presentation of your STEM capstone and deliver it so your audience sees everything you discovered about energy, space, and the frozen world.",
  miniLesson: [
    "A great presentation has a clear STRUCTURE: an opening hook, the main findings with evidence, and a strong closing that restates your message.",
    "DELIVERY carries the words: speak clearly, look up at your audience, pause between points, and let your voice show you care about your topic.",
    "Presenters use their EVIDENCE — a graph, a diagram, a demo of your tool — to prove the point, then say in plain words what it means. Show it, then explain it."
  ],
  workedExample: {
    prompt: "Write a strong OPENING hook for a showcase about why lakes freeze from the top down.",
    steps: [
      "Start with something that grabs attention — a question or a surprising fact.",
      "Connect it to your topic right away.",
      "Keep it short so you can look up at the audience.",
      "Result: 'Have you ever wondered why fish can survive under a frozen pond? Today I'll show you why lakes freeze from the top down.'"
    ],
    answer: "Have you ever wondered why fish can survive under a frozen pond? Today I'll show you why lakes freeze from the top down."
  },
  items: [
    {
      id: "g6.winter.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the BEST structure for a showcase presentation?",
      choices: [
        "Only a closing, no beginning or middle.",
        "Just reading your data table out loud.",
        "A random list of every fact you know.",
        "An opening hook, main findings with evidence, and a strong closing."
      ],
      answerIndex: 3,
      explanation: "A clear beginning, middle (findings + evidence), and end helps the audience follow and remember your capstone.",
      hintLadder: [
        "A good talk has a beginning, middle, and end.",
        "Which option names all three parts?",
        "Hook, findings with evidence, strong closing."
      ]
    },
    {
      id: "g6.winter.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "During your talk, when you show your data graph, what should you do RIGHT AFTER showing it?",
      choices: [
        "Say nothing and move on.",
        "Apologize for the graph.",
        "Explain in plain words what the graph shows and why it matters.",
        "Show ten more graphs quickly."
      ],
      answerIndex: 2,
      explanation: "Evidence needs explanation — show it, then say plainly what it means. That's how findings land with an audience.",
      hintLadder: [
        "A graph doesn't explain itself.",
        "What should the presenter DO with the evidence?",
        "Show it, then explain what it means."
      ],
      misconceptionsTargeted: ["evidence-speaks-for-itself"]
    },
    {
      id: "g6.winter.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Which delivery habit will make you seem MOST clear and confident?",
      choices: [
        "Looking up at the audience, speaking clearly, and pausing between points.",
        "Talking as fast as you can to finish quickly.",
        "Reading every word while staring at the floor.",
        "Whispering so no one notices mistakes."
      ],
      answerIndex: 0,
      explanation: "Eye contact, clear speech, and pauses let your ideas land and show confidence.",
      hintLadder: [
        "What helps an audience follow and trust you?",
        "Think eye contact, clear voice, and pauses.",
        "Look up, speak clearly, pause."
      ]
    },
    {
      id: "g6.winter.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the OPENING hook for YOUR winter capstone showcase: grab attention and name your topic in one or two sentences.",
      rubric: {
        level3: "Grabs attention (question, surprising fact, or vivid image) AND clearly names the capstone topic.",
        level2: "Has a hook or names the topic, but not both clearly.",
        level1: "Flat, or doesn't say what the talk is about."
      },
      exemplar: "Did you know a snowflake is mostly empty space? Today I'll show you why snow is white even though ice is clear.",
      hintLadder: [
        "Start with a question or a surprising fact.",
        "Then say what your capstone is about.",
        "Keep it to one or two punchy sentences."
      ]
    },
    {
      id: "g6.winter.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Write a strong CLOSING for your showcase: restate your main winter finding memorably AND thank your audience.",
      rubric: {
        level3: "Restates a clear, memorable main finding AND includes a genuine thank-you/takeaway.",
        level2: "Has a closing but the finding or the thank-you is weak or vague.",
        level1: "Flat, missing the restated finding, or adds brand-new information."
      },
      exemplar: "So the frozen world runs on one simple rule: heat always flows from warm to cold. From icicles to frozen lakes, that's the winter's secret. Thank you for exploring it with me.",
      hintLadder: [
        "What's the ONE big finding of your capstone?",
        "Say it in a memorable line.",
        "End with a real thank-you — no new information."
      ]
    }
  ],
  reflectionPrompt: "You've reached the end of the Winter Expedition. Look back at Week 1 — how much more can you explain about the frozen world now? Save your capstone; it's proof of a whole season of learning.",
  misconceptionBank: [
    {
      id: "evidence-speaks-for-itself",
      label: "Thinks showing evidence is enough",
      description: "Displays a graph or demo but never explains what it means, so the audience is left guessing.",
      coachMove: "Coach the 'show, then explain' habit: after every piece of evidence, add one sentence of plain-language meaning."
    },
    {
      id: "new-info-in-closing",
      label: "Adds brand-new points in the closing",
      description: "Introduces fresh information at the end instead of landing the main finding.",
      coachMove: "Closings consolidate; if there's a new point, it belongs in the middle — end by restating the takeaway and thanking the audience."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to Open",
      prompt:
        "Would you rather open your showcase with 'Um, so, this is my project about ice' OR with 'Why can fish swim under a frozen pond? Let me show you.'? Which one makes the audience lean in — and why?",
      answer:
        "The second. A question hooks the audience and names the topic with energy, while 'um, so' drains confidence before you even begin. Open strong!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Script & Rehearsal",
      challenge:
        "Write and rehearse your full showcase script: a hook, your main findings with evidence, and a strong closing. Then practice it out loud at least once, timing yourself against your success criteria.",
      steps: [
        "Write your opening hook and your closing line first — the bookends.",
        "In the middle, list your 2-3 main findings and the evidence for each.",
        "Rehearse out loud, looking up and pausing between points.",
        "Time it and adjust until it fits your success criteria from Day 1."
      ],
      deliverable: "A complete, rehearsed showcase script with a hook, evidence-backed findings, and a strong closing.",
      choiceBoard: [
        "Write the full script and mark where to pause and show evidence.",
        "Record a practice run of your presentation and watch it back once.",
        "Make cue cards with your hook, findings, and closing to present from."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "A presenter shows an impressive data graph and immediately moves to the next slide without a word. What did they most likely do wrong?",
          choices: [
            "They used a graph — talks shouldn't have graphs.",
            "They showed evidence but never explained what it means, leaving the audience guessing.",
            "They talked for too long about the graph.",
            "Nothing — moving on quickly is best."
          ],
          answerIndex: 1,
          explanation: "Evidence must be explained. Showing a graph without saying what it means wastes it — the 'show, then explain' habit was skipped.",
          hintLadder: [
            "What should follow every piece of evidence?",
            "Did the audience learn what the graph MEANS?",
            "Show it, then explain — they skipped the explaining."
          ]
        },
        {
          id: "g6.winter.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a full closing for your winter showcase: restate your main finding memorably AND thank your audience in one or two sentences (no new information).",
          rubric: {
            level3: "Restates a clear, memorable main finding AND includes a genuine thank-you/takeaway, with no new info.",
            level2: "Has a closing but the finding or thank-you is weak, or it slips in a new point.",
            level1: "Flat, missing the restated finding, or mostly new information."
          },
          exemplar: "From frost on my window to ice on the pond, this season showed me that winter is really a story about energy leaving. Thank you for investigating the frozen world with me.",
          hintLadder: [
            "What's the single big idea of your whole capstone?",
            "Say it in a memorable line.",
            "End with a real thank-you and no new facts."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Showcase Power Breath",
      prompt:
        "Stand tall like a confident presenter. Breathe in for 4 counts thinking 'I know my topic,' hold for 4, and breathe out for 4 releasing any nerves. Roll your shoulders back and smile. Repeat 3 times before you present.",
      scienceTieIn: "Slow breathing and confident posture lower stress hormones and steady your voice, helping you present clearly and calmly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You did it — the Winter Expedition is complete and you delivered your capstone! Look all the way back to Week 1: what is the biggest way you've grown as a scientist, mathematician, coder, and communicator this season?",
      badge: { id: "winter-expedition-graduate", name: "Winter Expedition Graduate", emoji: "🏆" },
      estimatedMinutes: 7
    }
  }
};
