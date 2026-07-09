// Grade 5 Summer ELA/Writing — Week 8 (Capstone Week), Day 5.
// Grade-5 counterpart of g6.ela.w8.d5 (showcase preparation), pitched down one
// level: simpler check-practice-present steps, vocab support, concrete opener
// and closer examples, big celebratory end-of-camp tone.

export const summerG5ElaW8D5 = {
  id: "g5.summer.ela.w8.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Showcase your work",
  topicTag: "capstone-showcase",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.5.4", "CCSS.ELA-LITERACY.SL.5.5"],
  hook: "Last day of summer camp! Today you finish up, practice once out loud, and present. It's not about being perfect — it's about sharing what you made!",
  keyTerms: [
    { term: "Showcase", definition: "When you share and present your finished project to an audience." },
    { term: "Opener", definition: "Your very first line — it tells the audience what they'll learn." },
    { term: "Closer", definition: "Your last line — it invites the audience to ask a question." }
  ],
  miniLesson: [
    "Finish your project. Check it against the 3 checks you set on Day 1. If one check isn't met, fix THAT one thing first.",
    "Practice once out loud — even for a poster, read your first line aloud. You catch awkward sentences right away.",
    "Showcase steps: 1) your first line tells the audience what they'll learn, 2) the middle shows it, 3) your last line invites a question. Then say thank you!"
  ],
  workedExample: {
    prompt:
      "Maya is ready to show her bee poster to her family. How does she get ready in a few minutes?",
    steps: [
      "Check her 3 checks: has 3 facts? has a drawing? can her brother re-tell it? Yes to all!",
      "Practice her first line out loud: 'Today I'll show you why gardens need bees.' Sounds good — keep it.",
      "Plan a quick opener for the family: 'I'll show my poster, then I want one question.'",
      "Present! Take the question. Say thank you."
    ],
    answer: "Check the 3 checks → practice the first line → opener → present → take a question."
  },
  items: [
    {
      id: "g5.summer.ela.w8.d5.q1",
      type: "multiple_choice",
      stem: "What's the FIRST thing to do before you show your project?",
      choices: [
        "Start over from scratch.",
        "Check it against your Day-1 checks; fix the weakest one.",
        "Memorize the whole thing word for word.",
        "Pick out new clothes."
      ],
      answerIndex: 1,
      explanation: "Your Day-1 checks are how you decided what 'done' looks like. Check them, and fix only the one that's failing.",
      hintLadder: [
        "What did you say 'done' would mean?",
        "Your three Day-1 checks.",
        "Check those first."
      ]
    },
    {
      id: "g5.summer.ela.w8.d5.q2",
      type: "multiple_choice",
      stem: "Why read your first line ALOUD before the showcase?",
      choices: [
        "To memorize it.",
        "Because a rule says so.",
        "To make it louder.",
        "To catch awkward or unclear parts your eyes missed."
      ],
      answerIndex: 3,
      explanation: "Reading aloud shows you awkward, clunky parts that your eyes skip when you read silently.",
      hintLadder: [
        "What do your ears notice that your eyes miss?",
        "Awkward or clunky sentences.",
        "Read aloud to catch them."
      ]
    },
    {
      id: "g5.summer.ela.w8.d5.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST opener for a short family presentation?",
      choices: [
        "Um, so, I don't know if this is any good, but...",
        "Hi.",
        "Today I'll show you one surprising helper in your garden — the bee — and what to look for next time you're outside.",
        "Just look."
      ],
      answerIndex: 2,
      explanation: "It tells the audience what they'll learn AND why it matters to them. That makes them lean in.",
      hintLadder: [
        "What does a good opener do?",
        "It tells the audience what they'll get.",
        "It's the one that's most specific."
      ],
      misconceptionsTargeted: ["self-deprecating-opening"]
    },
    {
      id: "g5.summer.ela.w8.d5.q4",
      type: "short_answer",
      stem:
        "After your presentation, someone asks a tricky question you're not sure about. Write what you would say and do, and explain why it's a good move.",
      rubric: {
        level3: "Says to take a breath and respond honestly (like 'great question — here's what I think' or 'I'm not sure, but here's what I'd check'), and explains that this beats guessing.",
        level2: "Names a reasonable response but the reason is vague.",
        level1: "Says to guess confidently, argue, ignore it, or walk away."
      },
      exemplar:
        "I'd take a breath and say, 'Great question — I'm not sure, but here's what I'd check next.' It gives me a second to think, and being honest is stronger than guessing.",
      hintLadder: [
        "What if you don't know the answer?",
        "It's okay to say 'I'm not sure' — then add what you'd check.",
        "Be honest and take a beat, then say why that's better than guessing."
      ]
    },
    {
      id: "g5.summer.ela.w8.d5.q5",
      type: "short_answer",
      stem:
        "Write the FIRST and LAST sentences of your showcase. The first should tell what's coming; the last should invite a question.",
      rubric: {
        level3: "Opener tells the topic and why it matters to the audience; closer invites a question. Both are specific to your project.",
        level2: "Has both sentences, but one is vague.",
        level1: "Generic opener/closer that isn't tied to the project."
      },
      exemplar:
        "First: Today I'll show you why gardens need bees — and one easy way to help them. Last: I'd love to hear — have you ever seen a bee visiting a flower in your yard?",
      hintLadder: [
        "Opener: 'Today I'll show you...' plus why it matters.",
        "Closer: invite a specific question.",
        "Make both about YOUR project."
      ]
    }
  ],
  reflectionPrompt:
    "You finished an 8-week summer adventure! Which project are you most proud of, and what made it work for you?",
  misconceptionBank: [
    {
      id: "self-deprecating-opening",
      label: "Opens with 'sorry' or hedges",
      description: "Starts with 'um, this probably isn't good, but...' which teaches the audience to expect a weak presentation.",
      coachMove: "Lead with what the audience will learn. Even if you're nervous, name the good part they'll get."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The First Five Seconds",
      prompt:
        "Two presenters start. One says 'Um, this probably isn't very good, but...' The other says 'Today I'll show you one surprising garden helper.' Which audience leans in — and what did the first 5 seconds tell them?",
      answer: "The second presenter's audience leans in! Your opener teaches the audience what to expect: lead with the good part they'll get, and they get curious instead of bracing for something weak.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Hype Reel",
      challenge:
        "Build the opening and closing of your presentation: a confident first line that tells the value, and a last line that invites a question. Then add a tiny 'thank you' moment to end on.",
      steps: [
        "Write your opening line — tell the topic AND why it matters.",
        "Write your closing line — invite a specific question.",
        "Practice both out loud once and fix anything awkward.",
        "Add your quick family opener ('I'll show my poster, then I want one question.')."
      ],
      deliverable: "A polished opening line, closing line, and family opener, practiced aloud.",
      choiceBoard: [
        "Write and rehearse your opening and closing lines.",
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
          id: "g5.summer.ela.w8.d5.arena1",
          type: "multiple_choice",
          stem: "A family member asks a question you don't know the answer to. What's the BEST response?",
          choices: [
            "Take a breath and say 'Great question — I'm not sure, but here's what I'd check next.'",
            "Make up an answer that sounds confident.",
            "Pretend you didn't hear it.",
            "Say 'that's not important' and move on."
          ],
          answerIndex: 0,
          explanation: "Saying 'great question' gives you a beat to think, and being honest about not knowing is stronger than guessing. Naming what you'd check shows real thinking.",
          hintLadder: [
            "Guessing or dodging both backfire.",
            "Honesty plus a next step beats a fake answer.",
            "It's the 'great question — here's what I'd check' option."
          ]
        },
        {
          id: "g5.summer.ela.w8.d5.arena2",
          type: "short_answer",
          stem: "Write the FIRST and LAST sentences of your showcase. The first tells the value; the last invites a question. Make both specific to your project.",
          rubric: {
            level3: "Opener tells the topic and why it matters to the audience; closer invites a specific question. Both clearly tied to the project.",
            level2: "Both sentences there, but one is vague or generic.",
            level1: "Generic opener/closer not tied to the real project."
          },
          exemplar: "First: Today I'll show you why gardens need bees — and one easy way to help them. Last: I'd love to hear — have you ever seen a bee on a flower in your yard?",
          hintLadder: [
            "Opener: 'Today I'll show you...' plus why it matters.",
            "Closer: invite a specific question.",
            "Make both about YOUR project, not generic."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Pre-Showcase Calm",
      prompt:
        "Before you present, plant both feet, drop your shoulders, and take 4 slow belly breaths. On each breath out, silently say 'I'm ready.' Shake out your hands once.",
      scienceTieIn: "Slow belly breathing tells your body to calm the pre-show jitters, steadying your voice and your hands.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You finished an 8-week summer adventure! Which project are you proudest of across the whole camp, and what did you learn about yourself as a maker?",
      badge: { id: "g5-summer-showcase-champion", name: "Showcase Champion", emoji: "🏆" },
      estimatedMinutes: 7
    }
  }
};
