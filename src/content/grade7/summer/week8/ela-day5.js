// Grade 7 ELA/Writing — Summer Program, Week 8 (Capstone Week), Day 5.
// Topic: showcase presentation — deliver a confident, well-structured
// presentation of your capstone. The celebratory finale of the Grade 7 summer.

export const summerG7ElaW8D5 = {
  id: "g7.summer.ela.w8.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase presentation — deliver your capstone with confidence",
  topicTag: "showcase-presentation",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.7.4", "CCSS.ELA-LITERACY.SL.7.6"],
  hook: "This is the finish line. Everything from this summer — your thesis, your systems map, your data, your tool — becomes one confident showcase. Today you learn to STRUCTURE it, DELIVER it, and land it so your audience remembers your one big idea.",
  miniLesson: [
    "A great showcase has a clear STRUCTURE: open with your thesis, walk through your strongest evidence (systems, data, or demo), address one likely objection, and close by restating your big idea. The audience should be able to name your thesis afterward.",
    "DELIVERY carries the message: adjust your VOLUME and PACE so the back row hears you, make eye contact instead of reading, and PAUSE after your key points so they land. Formal, precise language signals you take your work — and your audience — seriously (SL.7.6).",
    "Handle NERVES with a plan, not by hoping: take one slow breath before you start, know your first sentence by heart, and treat a stumble as a pause, not a failure. Confidence is a habit you rehearse, not a trait you're born with."
  ],
  workedExample: {
    prompt: "Structure a 90-second showcase for a capstone whose thesis is 'Our school should start a compost program.' Give the four beats.",
    steps: [
      "Open with the thesis: 'Our school should start a compost program — here's why it's worth it.'",
      "Evidence: share your data (pounds of food waste per week) and your systems map of where that waste currently goes.",
      "Objection: 'Some worry it smells — but a sealed bin emptied weekly prevents that.'",
      "Close: restate the big idea and thank the audience: 'A compost bin turns our waste into soil. Thank you for hearing my plan.'"
    ],
    answer: "Thesis → evidence (data + systems map) → answer one objection → restate big idea + thank the audience."
  },
  items: [
    {
      id: "g7.summer.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which STRUCTURE best fits a strong capstone showcase?",
      choices: [
        "List random facts in whatever order they come to mind.",
        "Open with your thesis, present your strongest evidence, address one objection, then restate your big idea.",
        "Save your thesis for a surprise at the very end.",
        "Read your entire written report word for word."
      ],
      answerIndex: 1,
      explanation: "Thesis-first structure with evidence, a rebuttal, and a restated close lets the audience follow and remember your main idea.",
      hintLadder: [
        "What should the audience know from the very start?",
        "Lead with the claim, then support it.",
        "Thesis → evidence → objection → restate."
      ]
    },
    {
      id: "g7.summer.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "During your demo, the room is large. What DELIVERY adjustment helps most?",
      choices: [
        "Speak faster so you finish before anyone loses interest.",
        "Look down at your notes the whole time to stay accurate.",
        "Raise your volume and slow your pace so the back row hears every point, and pause after key ideas.",
        "Whisper so people lean in."
      ],
      answerIndex: 2,
      explanation: "Adjusting volume and pace to the space, plus purposeful pauses, keeps a large audience with you (SL.7.6).",
      hintLadder: [
        "Think about what a big room does to sound and attention.",
        "Can the back row hear you at your normal volume and speed?",
        "Louder, slower, with pauses that let points land."
      ],
      misconceptionsTargeted: ["faster-is-more-confident"]
    },
    {
      id: "g7.summer.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "You feel nervous right before presenting. Which is the BEST plan?",
      choices: [
        "Hope the nerves disappear on their own.",
        "Rush through the whole thing to get it over with.",
        "Apologize to the audience for being nervous before you begin.",
        "Take one slow breath, recall your memorized first sentence, and remember a stumble is just a pause."
      ],
      answerIndex: 3,
      explanation: "A breath, a rehearsed opening, and reframing stumbles as pauses turn nerves into a manageable, confident start.",
      hintLadder: [
        "Confidence comes from a plan, not from wishing.",
        "What can you control in the first 10 seconds?",
        "Breathe, know your opener, and treat a stumble as a pause."
      ]
    },
    {
      id: "g7.summer.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write the OPENING line of your capstone showcase: state your thesis clearly and confidently in one sentence.",
      rubric: {
        level3: "Opens with a clear, confident, arguable thesis in a single sentence that names the project's main claim.",
        level2: "States a thesis but it is vague, buried, or hedged with weak language.",
        level1: "No clear thesis, or opens with an apology or filler."
      },
      exemplar: "My capstone argues that our neighborhood should add a bike lane on Oak Street to make the school route safer — and the data backs it up.",
      hintLadder: [
        "Start with your main claim, not a warm-up.",
        "Make it one confident sentence.",
        "Name the project's big idea right away."
      ]
    },
    {
      id: "g7.summer.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Summer finale reflection: name ONE skill you grew most this summer (thesis writing, systems thinking, data inference, or coding), ONE moment you're proudest of, and ONE way you'll use it next.",
      rubric: {
        level3: "Names a specific skill with growth, a concrete proud moment, AND a genuine future use — all three present and specific.",
        level2: "Two of the three clearly stated, or all three but one is vague.",
        level1: "Vague or fewer than two elements present."
      },
      exemplar: "I grew most at data inference — I stopped trusting a single average and started checking for outliers. I'm proudest of the data poster where I caught a misleading mean. Next, I'll use it to question the stats in ads and news headlines.",
      hintLadder: [
        "Which of the four summer skills changed how you think?",
        "Pick one concrete moment you're proud of.",
        "Name a real place you'll use the skill next."
      ]
    }
  ],
  reflectionPrompt: "You completed the Grade 7 summer! Look back at your Week 1 self — what's the biggest way you've grown as a thinker, and which piece of work will you keep to remember it?",
  misconceptionBank: [
    {
      id: "faster-is-more-confident",
      label: "Thinks speaking fast signals confidence",
      description: "Believes rushing shows mastery, when it actually loses the audience and hides key points.",
      coachMove: "Have them present one point twice — once rushed, once with pauses — and ask which the listener understood and remembered better."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Ways to Open",
      prompt:
        "Would you rather open your showcase with 'Um, so, I guess I'll start...' OR with 'Our school should start a compost program — and I can prove it's worth it'? Which grabs the audience, and why?",
      answer:
        "The second. It leads with a confident, arguable thesis so the audience instantly knows your big idea and wants the proof — far stronger than filler that hides your claim.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Dress Rehearsal",
      challenge:
        "Build and rehearse your final 2-minute showcase. Script the four beats (thesis, evidence, objection, restated close), then rehearse it once out loud with real delivery — volume, eye contact, and one deliberate pause.",
      steps: [
        "Write your four-beat script: thesis, strongest evidence, one objection answered, restated close.",
        "Mark ONE spot to pause and ONE spot to raise your volume for emphasis.",
        "Rehearse it out loud once, standing, looking up at an imaginary audience.",
        "Time it — aim for about 2 minutes — and tighten any beat that ran long."
      ],
      deliverable: "A four-beat showcase script with delivery marks, rehearsed once out loud and timed to about 2 minutes.",
      choiceBoard: [
        "Write the full four-beat script with delivery marks.",
        "Record your 2-minute rehearsal and note one thing to improve.",
        "Make a 'presenter's cue card' with just your four beats and delivery reminders."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Halfway through your demo, you lose your place. What is the MOST confident recovery?",
          choices: [
            "Pause, glance at your cue card, take a breath, and continue from your next beat.",
            "Apologize repeatedly and offer to start the whole thing over.",
            "Rush ahead skipping your evidence so no one notices.",
            "Stop the presentation and sit down."
          ],
          answerIndex: 0,
          explanation: "A calm pause, a glance at your notes, and continuing from the next beat reads as poised — audiences barely notice a brief, controlled pause.",
          hintLadder: [
            "What does a calm presenter do with a blank moment?",
            "A short pause is invisible; panic is not.",
            "Pause, check your cue, breathe, and continue."
          ]
        },
        {
          id: "g7.summer.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a full CLOSING for your capstone showcase: restate your big idea memorably AND thank your audience in one or two sentences.",
          rubric: {
            level3: "Restates a clear, memorable big idea AND includes a genuine thank-you/takeaway, with no new information introduced.",
            level2: "Has a closing but the restated idea or the thank-you is weak or vague.",
            level1: "Flat, missing the restated idea, or adds brand-new material at the end."
          },
          exemplar: "From a thesis to a systems map to real data, this summer taught me to build an idea and then prove it. A safer bike lane on Oak Street is one such idea worth proving. Thank you for hearing my capstone.",
          hintLadder: [
            "What's the one big idea you want them to remember?",
            "Say it in a memorable line — no new facts.",
            "End with a genuine thank-you to your audience."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Presenter's Breath",
      prompt:
        "Stand tall like you're about to take the stage. Breathe in for 4 counts thinking 'I built this,' hold for 4, and breathe out for 4 releasing any nerves. Roll your shoulders back, lift your chin, and repeat 3 times.",
      scienceTieIn: "Slow breathing calms your body's stress response while a tall, open posture can lower stress hormones — together they help you walk out feeling genuinely confident.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You made it — the Grade 7 summer is complete! Look back at your Week 1 self. What's the single biggest way you've grown as a thinker, and what are you most excited to build next?",
      badge: { id: "g7-summer-capstone-champion", name: "Summer Capstone Champion", emoji: "🏆" },
      estimatedMinutes: 7
    }
  }
};
