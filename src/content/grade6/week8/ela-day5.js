// Grade 6 ELA — Week 8 (Capstone), Day 5.
// Topic: showcase preparation.

export const grade6ElaWeek8Day5 = {
  id: "g6.ela.w8.d5",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase your work",
  topicTag: "capstone-showcase",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.SL.4", "CCSS.6.SL.5"],
  hook: "Last day of summer camp. Today you finalize, practice once out loud, and present. The point isn't perfection — it's sharing.",
  miniLesson: [
    "Finalize your deliverable. Match it against the 3 criteria you set on Day 1. If a criterion isn't met, fix that one thing first.",
    "Practice once out loud — even for a written project, read the intro aloud. You catch awkward sentences instantly.",
    "Showcase moves: 1) sentence one tells your audience what they'll learn, 2) the middle delivers it, 3) the last line invites a question. Then say thank you."
  ],
  workedExample: {
    prompt:
      "Maya is ready to present her 90-second cooking-ratios video to her family. How does she prepare in 20 minutes?",
    steps: [
      "Re-watch once. Check it against the 3 criteria: one recipe shown? chart included? sibling could retell it? Yes to all.",
      "Practice the intro line out loud: 'Today I'm showing you how ratios live in your kitchen.' Sounds confident — keep.",
      "Have a one-line opener for the family: 'I'll play 90 seconds, then I want one question.'",
      "Press play. Take the question. Say thank you."
    ],
    answer: "Check criteria → practice intro → opener → present → take a question."
  },
  items: [
    {
      id: "g6.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "What's the FIRST thing to do before showing your project?",
      choices: [
        "Check it against your Day-1 criteria; fix the weakest one.",
        "Start over from scratch.",
        "Memorize the whole thing.",
        "Pick out new clothes."
      ],
      answerIndex: 0,
      explanation: "Criteria are how you decided 'done' looked. Check them. Fix only the failing one.",
      hintLadder: [
        "What did you say 'done' meant?",
        "Day 1 criteria.",
        "Check those first."
      ]
    },
    {
      id: "g6.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "Why read your intro aloud BEFORE the showcase?",
      choices: [
        "To memorize it.",
        "To make it louder.",
        "To catch awkward or unclear sentences your eye missed.",
        "Because rules say so."
      ],
      answerIndex: 2,
      explanation: "Reading aloud reveals rhythm problems and unclear phrases that silent reading skips over.",
      hintLadder: [
        "What do your ears notice that your eyes miss?",
        "Awkward sentences.",
        "Read aloud to catch them."
      ]
    },
    {
      id: "g6.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST opening for a 3-minute family presentation?",
      choices: [
        "Um, so, I don't know if this is good but...",
        "Today I'll show you one surprising place ratios show up — in your kitchen — and you'll know what to watch for the next time you cook.",
        "Hi.",
        "Just watch."
      ],
      answerIndex: 1,
      explanation: "Tells the audience what they'll learn AND why it matters to them. Sets clear expectations.",
      hintLadder: [
        "What does a good opening do?",
        "Tells the audience what they'll get.",
        "It's the most specific option."
      ],
      misconceptionsTargeted: ["self-deprecating-opening"]
    },
    {
      id: "g6.ela.w8.d5.q4",
      type: "multiple_choice",
      stem:
        "After your presentation, a family member asks a tough question. Best response:",
      choices: [
        "Pretend you didn't hear.",
        "Walk away.",
        "Argue.",
        "Take a breath, say 'great question — here's what I think,' then answer or admit you don't know."
      ],
      answerIndex: 3,
      explanation: "Acknowledging buys you a beat to think. Honesty about gaps is fine — better than guessing.",
      hintLadder: [
        "What if you don't know?",
        "Say 'I don't know' or 'good question — here's what I think'.",
        "Honesty + a beat to think."
      ]
    },
    {
      id: "g6.ela.w8.d5.q5",
      type: "short_answer",
      stem:
        "Write the FIRST and LAST sentences of your showcase presentation. The first should preview what's coming; the last should invite a response.",
      rubric: {
        level3: "Opening previews the topic and value to the audience; closing invites a question or specific kind of response. Both are specific to the project.",
        level2: "Has both sentences but one is vague.",
        level1: "Generic openings/closings not tied to the project."
      },
      exemplar:
        "First: Today I'll show you why doubling a cake recipe almost never works — and one ratio that does. Last: I'd love to hear: what's the strangest recipe scaling you've tried at home?",
      hintLadder: [
        "Opening: 'today I'll show you...' + why it matters.",
        "Closing: invite a specific kind of question.",
        "Both should be specific to your project."
      ]
    }
  ],
  reflectionPrompt:
    "You finished an 8-week summer voyage. What's the one project you're most proud of, and what made it work for you?",
  misconceptionBank: [
    {
      id: "self-deprecating-opening",
      label: "Opens with apologies or hedges",
      description: "Begins with 'um, this probably isn't good but...' which trains the audience to expect a weak presentation.",
      coachMove: "Lead with the value the audience gets. Even if you're nervous, name what they'll learn."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The First Five Seconds",
      prompt:
        "Two presenters start. One says 'Um, this probably isn't very good but...' The other says 'Today I'll show you one surprising place ratios hide.' Which audience leans in — and what did the first 5 seconds tell them?",
      answer: "The second presenter's audience leans in. The opening trains the audience what to expect: lead with the value they'll get, and they get curious instead of bracing for something weak.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Hype Reel",
      challenge:
        "Build the opening and closing of your presentation: a confident first line that previews the value, and a last line that invites a question. Then design a tiny 'thank you' moment to end on.",
      steps: [
        "Write your opening line — preview the topic AND why it matters.",
        "Write your closing line — invite a specific kind of question.",
        "Practice both out loud once and tweak anything awkward.",
        "Add your one-line opener for the family ('I'll show 90 seconds, then I want one question.')."
      ],
      deliverable: "A polished opening line, closing line, and family opener, practiced aloud.",
      choiceBoard: [
        "Write and rehearse opening + closing lines.",
        "Record a 30-second 'trailer' of your showcase.",
        "Make cue cards with your opener, closer, and thank-you."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Champion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "A family member asks a tough question you don't know the answer to. What's the BEST response?",
          choices: [
            "Make up an answer that sounds confident.",
            "Say 'that's not important' and move on.",
            "Pretend you didn't hear it.",
            "Take a breath and say 'Great question — I'm not sure, but here's what I'd check next.'"
          ],
          answerIndex: 3,
          explanation: "Acknowledging the question buys a beat to think, and honesty about a gap is stronger than guessing. Naming what you'd check shows real thinking.",
          hintLadder: [
            "Guessing or dodging both backfire.",
            "Honesty plus a next step beats a fake answer.",
            "It's the 'great question — here's what I'd check' option."
          ]
        },
        {
          id: "g6.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write the FIRST and LAST sentences of your showcase. The first previews the value; the last invites a response. Make both specific to your project.",
          rubric: {
            level3: "Opening previews the topic and why it matters to the audience; closing invites a specific question or response. Both are clearly tied to the project.",
            level2: "Both sentences present but one is vague or generic.",
            level1: "Generic opener/closer not tied to the actual project."
          },
          exemplar: "First: Today I'll show you why doubling a cake recipe almost never works — and the one ratio that does. Last: I'd love to hear — what's the strangest recipe scaling you've tried at home?",
          hintLadder: [
            "Opening: 'Today I'll show you...' + why it matters.",
            "Closing: invite a specific kind of question.",
            "Make both about YOUR project, not generic."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Pre-Showcase Calm",
      prompt:
        "Before you present, plant both feet, drop your shoulders, and take 4 slow belly breaths. On each out-breath, silently say 'I'm ready.' Shake out your hands once.",
      scienceTieIn: "Slow belly breathing signals your body to dial down the pre-performance jitters, steadying your voice and your hands.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You finished an 8-week summer voyage! Which project are you proudest of across the whole camp, and what did you learn about yourself as a maker?",
      badge: { id: "showcase-champion", name: "Showcase Champion", emoji: "🏆" },
      estimatedMinutes: 7
    }
  }
};
