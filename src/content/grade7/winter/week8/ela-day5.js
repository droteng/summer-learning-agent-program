// Grade 7 ELA/Writing — Winter Expedition, Week 8 (Winter Showcase), Day 5.
// Grade 7 counterpart of the season capstone: deliver a thesis-driven showcase
// presentation and reflect on the winter's learning with evidence.

export const winterG7ElaW8D5 = {
  id: "g7.winter.ela.w8.d5",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Deliver a thesis-driven winter capstone presentation",
  topicTag: "presentation-showcase",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.7.4", "CCSS.ELA-LITERACY.SL.7.6"],
  hook: "This is the finale of your winter expedition. A Grade 7 showcase isn't a list of what you did — it's an argument: a clear THESIS about what you learned or built, carried by evidence and delivered so an audience believes it. Today you close the season strong.",
  miniLesson: [
    "A strong presentation opens with a THESIS — one sentence stating your main point or claim — so the audience knows exactly what you'll prove.",
    "The body delivers EVIDENCE in a logical order (results, examples, a demo) with TRANSITIONS that show how each point connects to the thesis, not just 'and then.'",
    "Delivery is content too: eye contact, pacing, and adapting to your audience (defining a term, slowing on a hard idea) decide whether your evidence actually lands."
  ],
  workedExample: {
    prompt: "Turn this weak opening into a thesis-driven one: 'I'm going to talk about my winter science project.'",
    steps: [
      "A topic ('my project') isn't a thesis — it doesn't state a point.",
      "Ask: what's the ONE thing I want the audience to believe?",
      "State it as a claim: what did the project show or what did you learn?",
      "Result: 'My winter project shows that insulating a cup with felt keeps water warm nearly twice as long as an uninsulated cup — here's the data.'"
    ],
    answer: "A thesis opening states the point you'll prove ('felt insulation nearly doubles warmth-holding time'), not just the topic ('my project')."
  },
  items: [
    {
      id: "g7.winter.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "Which is the strongest THESIS to open a capstone presentation?",
      choices: [
        "Today I will tell you about winter.",
        "My project is about heat.",
        "I did a lot of work this winter.",
        "My tests show that darker surfaces melted snow up to three times faster than lighter ones."
      ],
      answerIndex: 3,
      explanation: "A thesis states a specific, provable point; the others name a topic or effort but make no claim.",
      hintLadder: [
        "A thesis makes a claim, not a topic announcement.",
        "Which option states something you could prove with evidence?",
        "The darker-surfaces-melt-faster claim."
      ]
    },
    {
      id: "g7.winter.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "During your talk you use a phrase like 'This result matters because...'. What is that phrase doing?",
      choices: [
        "Filling time",
        "Starting a brand-new unrelated topic",
        "Acting as a transition that connects evidence back to your thesis",
        "Ending the presentation"
      ],
      answerIndex: 2,
      explanation: "Transitions like 'this matters because' link a piece of evidence back to the main claim so the audience follows your logic.",
      hintLadder: [
        "It connects two ideas — which two?",
        "Evidence back to the main point.",
        "It's a transition tying evidence to the thesis."
      ]
    },
    {
      id: "g7.winter.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Mid-presentation you notice your audience looks confused at a technical term. The best move is to...",
      choices: [
        "Pause and briefly define the term in plain language, then continue",
        "Keep going exactly as planned",
        "Stop the presentation entirely",
        "Talk faster to finish sooner"
      ],
      answerIndex: 0,
      explanation: "Adapting to your audience — defining a term when they look lost — is part of strong delivery and keeps your evidence landing.",
      hintLadder: [
        "Delivery means responding to your audience.",
        "If they're lost, what helps most?",
        "Briefly define it, then move on."
      ],
      misconceptionsTargeted: ["script-over-audience"]
    },
    {
      id: "g7.winter.ela.w8.d5.q4",
      type: "short_answer",
      stem: "Write a thesis sentence for a winter capstone (real or imagined) AND one piece of evidence you would use to support it. Label each.",
      rubric: {
        level3: "Thesis is a specific, provable claim; the evidence (data, example, or demo) directly supports it; both labeled.",
        level2: "Both present but the evidence is loosely connected or the thesis is a topic, not a claim.",
        level1: "Missing the thesis or the evidence, or they don't relate."
      },
      exemplar: "Thesis: A double-walled bottle keeps cocoa hot far longer than a single-walled one. Evidence: After 30 minutes, the double-walled bottle stayed at 60°C while the single-walled dropped to 40°C.",
      hintLadder: [
        "State a provable claim, not a topic.",
        "Pick evidence that would convince a doubter.",
        "Label thesis and evidence."
      ]
    },
    {
      id: "g7.winter.ela.w8.d5.q5",
      type: "short_answer",
      stem: "Reflect: name ONE thing you learned this winter (in science, math, coding, or writing) and give specific EVIDENCE from your own work that you learned it.",
      rubric: {
        level3: "Names a specific learning AND cites concrete evidence from their own work (a result, an artifact, a before/after) showing growth.",
        level2: "Names a learning but the evidence is vague or general.",
        level1: "A general 'I learned a lot' with no evidence."
      },
      exemplar: "I learned to trace code with functions: at the start I guessed outputs, but by week 6 I could hand-trace a nested function call like combo(6,4) and get 18 every time — my worked traces prove it.",
      hintLadder: [
        "Pick one concrete skill you gained.",
        "What in your own work proves you gained it?",
        "Cite a specific result or before/after."
      ]
    }
  ],
  stretch: {
    stem: "Why is ending with a clear takeaway more effective than ending with 'That's all, thanks'?",
    answer: "A takeaway restates your thesis and tells the audience what to remember, leaving a lasting point; 'that's all' wastes the most memorable moment of the talk.",
    explanation: "Audiences best recall the final words (a recency effect), so closing on your main claim maximizes what they retain."
  },
  reflectionPrompt: "Across the whole winter expedition, what's the one idea you'd want an audience to remember about your learning?",
  misconceptionBank: [
    {
      id: "script-over-audience",
      label: "Sticks to the script no matter what the audience does",
      description: "Treats a presentation as reciting text rather than communicating with real listeners.",
      coachMove: "Remind them delivery is two-way: watching faces and adjusting (defining, slowing, re-explaining) is what makes evidence land."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Topic or Thesis?",
      prompt:
        "Two presenters open. One says 'Today I'll talk about my snow project.' The other says 'My data shows salt melts ice faster than sand.' Which grabs you, and what makes the difference?",
      answer:
        "The second grabs you: it opens with a THESIS — a specific claim you can prove — while the first only names a topic. A thesis tells the audience exactly what you'll show and why to keep listening.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Showcase Script",
      challenge:
        "Script the opening and closing of your winter capstone presentation: a thesis-driven hook, one transition connecting evidence to the thesis, and a takeaway ending that restates your main point.",
      steps: [
        "Write a one-sentence thesis for your capstone.",
        "Draft an opening hook that leads into that thesis.",
        "Write one transition sentence ('this matters because...') tying evidence to the thesis.",
        "Write a closing takeaway that restates the thesis in fresh words."
      ],
      deliverable: "A scripted opening (hook + thesis), one evidence transition, and a takeaway closing.",
      choiceBoard: [
        "Write the full script (opening, transition, closing).",
        "Record a 60–90 second delivery of your opening and closing.",
        "Make presenter cue-cards with your thesis, transitions, and takeaway."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "Which closing line is the strongest takeaway for a capstone talk?",
          choices: [
            "Okay, that's everything, thanks.",
            "So the big idea is: small design changes — like adding insulation — can double how long heat lasts.",
            "I ran out of time, sorry.",
            "Any questions? No? Bye."
          ],
          answerIndex: 1,
          explanation: "A strong closing restates the thesis as a memorable takeaway; the others waste the most-remembered moment.",
          hintLadder: [
            "The ending should leave one idea in mind.",
            "Which restates the main claim?",
            "The 'small design changes double heat' line."
          ]
        },
        {
          id: "g7.winter.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write a complete mini-presentation outline: THESIS, two EVIDENCE points in order, and a TAKEAWAY. Label each part.",
          rubric: {
            level3: "Clear thesis, two ordered evidence points that support it, and a takeaway that restates the thesis — all labeled and coherent.",
            level2: "All parts present but ordering is unclear or one evidence point is weak.",
            level1: "Missing a part or parts don't connect to the thesis."
          },
          exemplar: "Thesis: Insulation nearly doubles how long a drink stays hot. Evidence 1: Uninsulated cup fell from 70°C to 40°C in 20 min. Evidence 2: Felt-wrapped cup stayed at 58°C at 20 min. Takeaway: A cheap felt wrap almost doubles heat-holding time — small design, big result.",
          hintLadder: [
            "State the thesis first.",
            "Give two evidence points that build the case.",
            "Close by restating the thesis as a takeaway."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Power Stance & Breath",
      prompt:
        "Stand tall, feet planted, shoulders back for 20 seconds — a confident 'presenter stance.' Take three slow breaths. Notice how your posture steadies your nerves before you speak.",
      scienceTieIn: "Upright posture and slow breathing lower stress signals and can make your voice steadier — real, measurable ways your body supports clear delivery.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The winter expedition is complete. What are you proudest of building or learning — and what evidence would you show to prove it?",
      badge: { id: "g7-winter-showcase-graduate", name: "Winter Showcase Graduate", emoji: "🏆" },
      estimatedMinutes: 7
    }
  }
};
