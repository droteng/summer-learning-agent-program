// Grade 5 ELA/Writing — Winter Expedition, Week 8 (Winter Showcase), Day 5.
// Grade 5 counterpart of g6.winter.ela.w8.d5. Same topic (showcase presentation
// — write and deliver your winter STEM capstone) pitched down to Grade 5:
// simple structure words (beginning/middle/end), a "show, then explain" rule,
// and sentence frames for the hook and closing. Final, celebratory day.

export const winterG5ElaW8D5 = {
  id: "g5.winter.ela.w8.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase presentation — write and deliver your winter capstone",
  topicTag: "showcase-presentation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.SL.5.4", "CCSS.SL.5.6"],
  hook: "This is the moment the whole Winter Expedition has been building toward — your showcase! Today you write a clear, confident talk about your STEM capstone and deliver it so your audience sees everything you discovered about energy, space, and the frozen world.",
  miniLesson: [
    "A great talk has three clear parts: a BEGINNING that grabs attention (a hook), a MIDDLE with your main findings and evidence, and an END that says your big idea one more time.",
    "DELIVERY is HOW you say the words: speak clearly, look up at your audience, pause between points, and let your voice show you care about your topic.",
    "Use your EVIDENCE — a graph, a drawing, a demo of your tool — to prove your point. Then say in plain words what it means. Show it, then explain it."
  ],
  workedExample: {
    prompt: "Write a strong OPENING hook for a showcase about why lakes freeze from the top down.",
    steps: [
      "Start with something that grabs attention — a question or a surprising fact.",
      "Connect it to your topic right away.",
      "Keep it short so you can look up at the audience.",
      "Result: 'Have you ever wondered how fish stay alive under a frozen pond? Today I'll show you why lakes freeze from the top down.'"
    ],
    answer: "Have you ever wondered how fish stay alive under a frozen pond? Today I'll show you why lakes freeze from the top down."
  },
  items: [
    {
      id: "g5.winter.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the BEST way to build a showcase talk?",
      choices: [
        "Only an ending, with no beginning or middle.",
        "A beginning hook, a middle with findings and evidence, and a strong ending.",
        "A random list of every fact you know.",
        "Just reading your data table out loud."
      ],
      answerIndex: 1,
      explanation: "A clear beginning, middle, and end helps your audience follow and remember your capstone.",
      hintLadder: [
        "A good talk has a beginning, middle, and end.",
        "Which choice names all three parts?",
        "Hook, findings with evidence, strong ending."
      ]
    },
    {
      id: "g5.winter.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "During your talk, when you show your data graph, what should you do RIGHT AFTER showing it?",
      choices: [
        "Say nothing and move on.",
        "Explain in plain words what the graph shows and why it matters.",
        "Say sorry for the graph.",
        "Show ten more graphs quickly."
      ],
      answerIndex: 1,
      explanation: "Evidence needs explaining — show it, then say plainly what it means. That's how your findings reach the audience.",
      hintLadder: [
        "A graph doesn't explain itself.",
        "What should you DO with the evidence?",
        "Show it, then explain what it means."
      ],
      misconceptionsTargeted: ["evidence-speaks-for-itself"]
    },
    {
      id: "g5.winter.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Which delivery habit will make you seem MOST clear and confident?",
      choices: [
        "Talking as fast as you can to finish quickly.",
        "Looking up at the audience, speaking clearly, and pausing between points.",
        "Reading every word while staring at the floor.",
        "Whispering so no one notices mistakes."
      ],
      answerIndex: 1,
      explanation: "Looking up, speaking clearly, and pausing let your ideas land and show you feel confident.",
      hintLadder: [
        "What helps an audience follow and trust you?",
        "Think eye contact, clear voice, and pauses.",
        "Look up, speak clearly, pause."
      ]
    },
    {
      id: "g5.winter.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the OPENING hook for YOUR winter capstone showcase: grab attention and name your topic. Try this frame: 'Did you know ____? Today I'll show you ____.'",
      rubric: {
        level3: "Grabs attention (a question, surprising fact, or vivid image) AND clearly names the capstone topic.",
        level2: "Has a hook OR names the topic, but not both clearly.",
        level1: "Flat, or doesn't say what the talk is about."
      },
      exemplar: "Did you know a snowflake is mostly empty space? Today I'll show you why snow looks white even though ice is clear.",
      hintLadder: [
        "Start with a question or a surprising fact.",
        "Then say what your capstone is about.",
        "Keep it to one or two punchy sentences using the frame."
      ]
    },
    {
      id: "g5.winter.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Write a strong ENDING for your showcase: say your main winter finding one more time in a memorable way AND thank your audience.",
      rubric: {
        level3: "Says a clear, memorable main finding AND includes a real thank-you, with no brand-new information.",
        level2: "Has an ending but the finding or the thank-you is weak or fuzzy.",
        level1: "Flat, missing the restated finding, or adds brand-new facts."
      },
      exemplar: "So the frozen world runs on one simple rule: heat always moves from warm to cold. From icicles to frozen ponds, that's winter's secret. Thank you for exploring it with me!",
      hintLadder: [
        "What's the ONE big finding of your capstone?",
        "Say it again in a memorable line.",
        "End with a real thank-you — no new facts."
      ]
    }
  ],
  reflectionPrompt: "You've reached the end of the Winter Expedition! Look back at Week 1 — how much more can you explain about the frozen world now? Save your capstone; it's proof of a whole season of learning.",
  misconceptionBank: [
    {
      id: "evidence-speaks-for-itself",
      label: "Thinks showing evidence is enough",
      description: "Shows a graph or demo but never explains what it means, so the audience is left guessing.",
      coachMove: "Coach the 'show, then explain' habit: after every piece of evidence, add one sentence of plain-language meaning."
    },
    {
      id: "new-info-in-ending",
      label: "Adds brand-new points at the end",
      description: "Brings in fresh information at the end instead of landing the main finding.",
      coachMove: "Endings wrap up; a new point belongs in the middle — end by saying the takeaway again and thanking the audience."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to Open",
      prompt:
        "Would you rather open your showcase with 'Um, so, this is my project about ice' OR with 'How do fish swim under a frozen pond? Let me show you.'? Which one makes the audience lean in — and why?",
      answer:
        "The second one! A question hooks the audience and names the topic with energy, while 'um, so' loses their attention before you even begin. Open strong!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Script & Rehearsal",
      challenge:
        "Write and practice your full showcase talk: a hook, your main findings with evidence, and a strong ending. Then say it out loud at least once, timing yourself against your checklist from Day 1.",
      steps: [
        "Write your opening hook and your closing line first — the bookends.",
        "In the middle, list your 2-3 main findings and the evidence for each.",
        "Practice out loud, looking up and pausing between points.",
        "Time it and adjust until it fits your checklist from Day 1."
      ],
      deliverable: "A complete, practiced showcase script with a hook, evidence-backed findings, and a strong ending.",
      choiceBoard: [
        "Write the full script and mark where to pause and show evidence.",
        "Record a practice run of your talk and watch it back once.",
        "Make cue cards with your hook, findings, and ending to present from."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "A presenter shows a cool data graph and then jumps to the next slide without saying a word. What did they most likely do wrong?",
          choices: [
            "They used a graph — talks shouldn't have graphs.",
            "They showed evidence but never explained what it means, so the audience is left guessing.",
            "They talked way too long about the graph.",
            "Nothing — moving on fast is best."
          ],
          answerIndex: 1,
          explanation: "Evidence must be explained. Showing a graph without saying what it means wastes it — they skipped the 'show, then explain' step.",
          hintLadder: [
            "What should come after every piece of evidence?",
            "Did the audience learn what the graph MEANS?",
            "Show it, then explain — they skipped the explaining."
          ]
        },
        {
          id: "g5.winter.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a full ending for your winter showcase: say your main finding one more time in a memorable way AND thank your audience in one or two sentences (no new facts).",
          rubric: {
            level3: "Says a clear, memorable main finding AND includes a real thank-you, with no new info.",
            level2: "Has an ending but the finding or thank-you is weak, or it slips in a new point.",
            level1: "Flat, missing the restated finding, or mostly new information."
          },
          exemplar: "From frost on my window to ice on the pond, this season showed me that winter is really a story about heat leaving. Thank you for exploring the frozen world with me!",
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
        "Stand tall like a confident presenter. Breathe in for 4 counts thinking 'I know my topic,' hold for 4, and breathe out for 4 letting go of any nerves. Roll your shoulders back and smile. Do it 3 times before you present.",
      scienceTieIn: "Slow breathing and standing tall lower stress and steady your voice, helping you present clearly and calmly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You did it — the Winter Expedition is complete and you delivered your capstone! Look all the way back to Week 1: what is the biggest way you've grown as a scientist, mathematician, coder, and communicator this season?",
      badge: { id: "g5-winter-expedition-graduate", name: "Winter Expedition Graduate", emoji: "🏆" },
      estimatedMinutes: 7
    }
  }
};
