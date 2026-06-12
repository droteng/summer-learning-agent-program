// Grade 6 World/Current Affairs — Fall Expedition, Week 8 (Harvest Showcase),
// Day 4. Topic: presenting to an audience — clarity, credibility, and honesty.

export const fallG6WorldW8D4 = {
  id: "g6.fall.world.w8.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Present with clarity and credibility",
  topicTag: "presenting-credibility",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.SL.6.4", "CCSS.SL.6.3"],
  hook: "A showcase is your moment to inform an audience honestly. Today you sharpen the skills that make a presenter believable: clear claims, real evidence, and honest data.",
  miniLesson: [
    "Credibility comes from backing claims with real evidence and naming your sources — the same honesty you practiced in persuasion week.",
    "Speak to your audience: define terms, give examples they can picture, and avoid jargon dumps.",
    "Be honest about limits: 'I surveyed 30 students' is more trustworthy than a vague 'everyone agrees.'"
  ],
  workedExample: {
    prompt: "A presenter says 'Studies prove our idea is best.' How could they make it more credible?",
    steps: [
      "'Studies prove' is vague — which studies?",
      "Name the source or the data: 'A survey of 50 classmates found 80% preferred it.'",
      "Add the limit honestly: 'though that's just our class.'",
      "Specific + sourced + honest = credible."
    ],
    answer: "Name the actual evidence and its source, and be honest about its limits."
  },
  items: [
    {
      id: "g6.fall.world.w8.d4.q1",
      type: "multiple_choice",
      stem: "Which statement is most CREDIBLE in a presentation?",
      choices: [
        "Everyone knows this is true.",
        "In our survey of 40 students, 30 chose the fall menu.",
        "Trust me, it's the best.",
        "Studies prove it, probably."
      ],
      answerIndex: 1,
      explanation: "Specific numbers and a named group make a claim trustworthy and checkable.",
      hintLadder: [
        "Which has real, checkable evidence?",
        "Look for specific numbers and a source.",
        "The survey of 40 students."
      ]
    },
    {
      id: "g6.fall.world.w8.d4.q2",
      type: "multiple_choice",
      stem: "Why should you define a tricky term during a presentation?",
      choices: [
        "To use up time",
        "So the whole audience can follow, not just experts",
        "To sound smart",
        "You shouldn't — keep it confusing"
      ],
      answerIndex: 1,
      explanation: "Defining terms keeps everyone included and able to follow your point.",
      hintLadder: [
        "Who might not know the word?",
        "What helps them keep up?",
        "Define it for the whole audience."
      ]
    },
    {
      id: "g6.fall.world.w8.d4.q3",
      type: "multiple_choice",
      stem: "Being HONEST about the limits of your data (like a small sample) makes you...",
      choices: [
        "look weak and should be hidden",
        "more trustworthy to the audience",
        "wrong about everything",
        "unable to present"
      ],
      answerIndex: 1,
      explanation: "Acknowledging limits builds trust — audiences respect honesty over overclaiming.",
      hintLadder: [
        "How do you feel about someone who admits limits?",
        "Honesty vs. overclaiming — which earns trust?",
        "Admitting limits builds credibility."
      ],
      misconceptionsTargeted: ["hiding-limits-looks-stronger"]
    },
    {
      id: "g6.fall.world.w8.d4.q4",
      type: "short_answer",
      stem: "Rewrite this overclaim to be credible and honest: 'Our project proves everyone should recycle more.'",
      rubric: {
        level3: "Tones the claim to what the evidence supports AND adds specific, honest backing or a limit.",
        level2: "Softer claim OR added evidence, not both.",
        level1: "Still an unsupported overclaim."
      },
      exemplar: "Our survey of 45 neighbors showed most would recycle more if there were bins on every block — a small but clear sign that better access could help.",
      hintLadder: [
        "Does the data really cover 'everyone'?",
        "Scale the claim to your evidence.",
        "Add the specific finding and a limit."
      ]
    },
    {
      id: "g6.fall.world.w8.d4.q5",
      type: "short_answer",
      stem: "Name one thing you'll do in YOUR showcase to make your presentation credible and clear for the audience.",
      rubric: {
        level3: "Names a specific, relevant credibility/clarity practice (cite evidence, define terms, admit limits, give examples) tied to their showcase.",
        level2: "Names a practice but vaguely.",
        level1: "Off-topic or no real practice."
      },
      exemplar: "When I show my food-web diagram, I'll define 'keystone species' with the sea-otter example so everyone understands why it matters.",
      hintLadder: [
        "Pick one habit: cite, define, give an example, or admit a limit.",
        "Tie it to your actual showcase content.",
        "Be specific about what you'll do."
      ]
    }
  ],
  reflectionPrompt: "You've learned to spot persuasion tricks and to present honestly. How will you make sure YOUR showcase informs rather than just impresses?",
  misconceptionBank: [
    {
      id: "hiding-limits-looks-stronger",
      label: "Thinks hiding weaknesses makes you more convincing",
      description: "Believes admitting a small sample or limit damages credibility.",
      coachMove: "Show that audiences trust presenters who are upfront; overclaiming backfires when questioned."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Presenter Do You Trust?",
      prompt:
        "Would you rather hear a presenter who says 'Everyone agrees my idea is best!' or one who says 'In my survey of 30 classmates, 22 preferred it — though that's just our class'? Which would you believe, and why?",
      answer:
        "The second one. Naming a real number (22 of 30) and honestly admitting the limit ('just our class') makes a presenter far more credible than a vague 'everyone agrees.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Credibility Makeover",
      challenge:
        "Write three weak, overclaiming 'showcase lines' (like 'Studies prove this is the best!'), then give each a credibility makeover: add real-ish evidence, a source, or an honest limit.",
      steps: [
        "Write 3 vague or overclaiming sentences a nervous presenter might say.",
        "For each, add a specific number, example, or named source.",
        "Add one honest limit (small sample, just our class, etc.).",
        "Read the 'after' versions aloud — do they sound more trustworthy?"
      ],
      deliverable: "A before/after sheet with 3 overclaims rewritten into credible, honest lines.",
      choiceBoard: [
        "Make a before/after 'credibility makeover' sheet.",
        "Make a 'trust meter' poster ranking 4 statements from vague to credible.",
        "Write a 60-second mini-speech that models clear, sourced, honest claims."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Credibility Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.world.w8.d4.arena1",
          type: "multiple_choice",
          stem: "A presenter wants to be credible AND honest. Which line is best?",
          choices: [
            "Everyone knows recycling is the answer.",
            "Our survey of 30 neighbors found 24 would recycle more with curbside bins — though it's a small local sample.",
            "Trust me, recycling fixes everything.",
            "Studies prove it, I'm pretty sure."
          ],
          answerIndex: 1,
          explanation: "It gives a specific number and source AND honestly names the limit, which is exactly what makes a presenter credible.",
          hintLadder: [
            "Which line has a real, checkable number?",
            "Which one also admits a limit honestly?",
            "The survey-of-30-neighbors line does both."
          ]
        },
        {
          id: "g6.fall.world.w8.d4.arena2",
          type: "short_answer",
          stem: "A classmate's showcase slide says 'Our project proves screen time is bad for everyone.' Rewrite it to be credible and honest.",
          rubric: {
            level3: "Scales the claim to what evidence could support AND adds a specific finding or named source plus an honest limit.",
            level2: "Softens the claim OR adds evidence, but not both.",
            level1: "Still an unsupported overclaim like the original."
          },
          exemplar: "In our class survey of 28 students, those who cut evening screen time reported sleeping better — a small sample, but a sign that less late screen time may help rest.",
          hintLadder: [
            "Does 'everyone' match the evidence a class project could gather?",
            "Add a specific finding and who it came from.",
            "Admit the limit honestly (small or local sample)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Presenter's Power Pose",
      prompt:
        "Stand tall, roll your shoulders back, and hold a confident 'power pose' for 15 seconds while breathing slowly. Then shake out and smile — this is how you'll stand at your showcase.",
      scienceTieIn: "Standing tall and breathing slowly can lower stress signals in your body, helping you feel calmer and more confident when you present.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one honest limit of your own showcase work that you'll admit out loud — and why will saying it make your audience trust you more?",
      badge: { id: "credible-presenter", name: "Credible Presenter", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
