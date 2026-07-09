// Grade 5 World/Current Affairs — Fall Expedition, Week 8 (Harvest Showcase),
// Day 4. Grade 5 counterpart of g6.fall.world.w8.d4. Same topic (presenting
// with clarity and honesty) pitched down to Grade 5: simpler examples,
// sentence frames, and extra vocabulary support. Celebratory capstone tone.

export const fallG5WorldW8D4 = {
  id: "g5.fall.world.w8.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Present with clarity and credibility",
  topicTag: "presenting-credibility",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.10.3-5", "CCSS.ELA-LITERACY.SL.5.3"],
  hook: "A showcase is your chance to tell people something true — and to do it honestly. Today you sharpen the skills that make people believe you: clear ideas, real proof, and honest numbers.",
  miniLesson: [
    "People believe you more when you back up what you say with real proof, like a number or an example. Believable is called CREDIBLE.",
    "Talk so everyone can follow: explain hard words, and give examples people can picture.",
    "Be honest about your limits. Saying 'I asked 20 kids' is more believable than saying 'everyone agrees.'"
  ],
  workedExample: {
    prompt: "A presenter says 'Everyone knows our idea is the best.' How could they make it more believable?",
    steps: [
      "'Everyone knows' is vague — how do they know?",
      "Add real proof: 'I asked 20 kids and 15 liked our idea.'",
      "Be honest about the limit: 'but that was just my class.'",
      "Real proof + honest limit = believable."
    ],
    answer: "Add a real number and be honest that it was only their class."
  },
  items: [
    {
      id: "g5.fall.world.w8.d4.q1",
      type: "multiple_choice",
      stem: "Which sentence is the most BELIEVABLE in a presentation?",
      choices: [
        "Everybody knows this is true.",
        "Trust me, it's the best.",
        "I asked 20 kids, and 15 picked the fall snack.",
        "Studies say so, probably."
      ],
      answerIndex: 2,
      explanation: "A real number and a real group make a claim easy to trust and check.",
      hintLadder: [
        "Which one gives real proof you could check?",
        "Look for a specific number.",
        "The 'I asked 20 kids' sentence is believable."
      ]
    },
    {
      id: "g5.fall.world.w8.d4.q2",
      type: "multiple_choice",
      stem: "Why should you explain a hard word during your presentation?",
      choices: [
        "So everyone in the audience can follow, not just experts",
        "To use up time",
        "To sound smart",
        "You shouldn't — keep it confusing"
      ],
      answerIndex: 0,
      explanation: "Explaining hard words keeps everyone included and able to understand your point.",
      hintLadder: [
        "Who might not know the word?",
        "What helps them keep up?",
        "Explain it so the whole audience follows."
      ]
    },
    {
      id: "g5.fall.world.w8.d4.q3",
      type: "multiple_choice",
      stem: "Being HONEST about the limits of your proof (like only asking a few people) makes you...",
      choices: [
        "look weak, so you should hide it",
        "unable to present",
        "wrong about everything",
        "more believable to the audience"
      ],
      answerIndex: 3,
      explanation: "Being honest about limits builds trust — people believe you more when you don't overclaim.",
      hintLadder: [
        "How do you feel about someone who is honest about their limits?",
        "Honest vs. bragging — which do you trust?",
        "Being honest about limits makes you more believable."
      ],
      misconceptionsTargeted: ["hiding-limits-looks-stronger"]
    },
    {
      id: "g5.fall.world.w8.d4.q4",
      type: "short_answer",
      stem: "Fix this overclaim to be honest and believable: 'Our project proves everyone should recycle more.' Try the frame: 'We found ___, which shows ___.'",
      rubric: {
        level3: "Softens the big claim AND adds a specific, honest piece of proof using the frame.",
        level2: "Softer claim OR added proof, but not both.",
        level1: "Still an overclaim with no real proof."
      },
      exemplar: "We asked 25 neighbors and most said they'd recycle more if there were bins on every block, which shows better bins might help.",
      hintLadder: [
        "Does the proof really cover 'everyone'?",
        "Make the claim match your proof.",
        "Use the frame: 'We found ___, which shows ___.'"
      ]
    },
    {
      id: "g5.fall.world.w8.d4.q5",
      type: "short_answer",
      stem: "Name one thing you'll do in YOUR showcase to make it clear and believable for the audience.",
      rubric: {
        level3: "Names a specific, useful habit (give a real number, explain a word, give an example, or admit a limit) tied to their showcase.",
        level2: "Names a habit but only vaguely.",
        level1: "Off-topic or no real habit."
      },
      exemplar: "When I show my food-web drawing, I'll explain what 'food web' means with the rabbit-and-fox example so everyone understands.",
      hintLadder: [
        "Pick one habit: give a number, explain a word, give an example, or admit a limit.",
        "Tie it to your real showcase work.",
        "Be specific about what you'll do."
      ]
    }
  ],
  reflectionPrompt: "You've learned to spot tricks in ads AND to present honestly. How will you make sure your showcase teaches people something true instead of just showing off?",
  misconceptionBank: [
    {
      id: "hiding-limits-looks-stronger",
      label: "Thinks hiding weak spots makes you more convincing",
      description: "Believes admitting you only asked a few people hurts your case.",
      coachMove: "Show that people trust presenters who are honest; bragging backfires when someone asks a question."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Presenter Do You Trust?",
      prompt:
        "Would you rather hear a presenter who says 'Everyone agrees my idea is best!' or one who says 'I asked 20 kids and 15 liked it — but that was just my class'? Which one would you believe, and why?",
      answer:
        "The second one! Giving a real number (15 of 20) and honestly saying 'just my class' makes a presenter much more believable than a vague 'everyone agrees.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Believable Makeover",
      challenge:
        "Write three weak, braggy 'showcase lines' (like 'This is the best thing ever!'), then give each a makeover: add a real number, an example, or an honest limit.",
      steps: [
        "Write 3 vague or braggy sentences a nervous presenter might say.",
        "For each, add a real number, an example, or where the proof came from.",
        "Add one honest limit (only asked a few, just my class, etc.).",
        "Read the 'after' versions out loud — do they sound more believable?"
      ],
      deliverable: "A before-and-after sheet with 3 braggy lines rewritten into honest, believable ones.",
      choiceBoard: [
        "Make a before-and-after 'makeover' sheet.",
        "Make a 'trust meter' poster ranking 4 sentences from vague to believable.",
        "Write a 30-second mini-speech that models clear, honest claims."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Credibility Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.world.w8.d4.arena1",
          type: "multiple_choice",
          stem: "A presenter wants to be believable AND honest. Which line is best?",
          choices: [
            "Everyone knows recycling is the answer.",
            "I asked 20 neighbors and 16 said they'd recycle more with curbside bins — but it was just my street.",
            "Trust me, recycling fixes everything.",
            "Studies say so, I'm pretty sure."
          ],
          answerIndex: 1,
          explanation: "It gives a real number AND honestly says it was only one street — that's exactly what makes a presenter believable.",
          hintLadder: [
            "Which line has a real number you could check?",
            "Which one also admits a limit honestly?",
            "The 'I asked 20 neighbors' line does both."
          ]
        },
        {
          id: "g5.fall.world.w8.d4.arena2",
          type: "short_answer",
          stem: "A classmate's slide says 'Our project proves screen time is bad for everyone.' Rewrite it to be honest and believable.",
          rubric: {
            level3: "Softens the big claim to match real proof AND adds a specific number or example plus an honest limit.",
            level2: "Softens the claim OR adds proof, but not both.",
            level1: "Still an overclaim like the original."
          },
          exemplar: "We asked 22 kids in our class, and those who turned off screens earlier said they slept better — but it was only our class, so more kids should be asked.",
          hintLadder: [
            "Does 'everyone' match what a class project could really find out?",
            "Add a real number or example and say who it came from.",
            "Admit the limit honestly (only our class)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Presenter's Power Pose",
      prompt:
        "Stand tall, roll your shoulders back, and hold a strong, confident pose for 15 seconds while breathing slowly. Then shake out and smile — this is how you'll stand at your showcase.",
      scienceTieIn: "Standing tall and breathing slowly can lower the stress signals in your body, helping you feel calmer and more confident.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one honest limit of your own showcase work that you'll say out loud — and why will saying it make your audience trust you more?",
      badge: { id: "g5-fall-honest-presenter", name: "Honest Presenter", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
