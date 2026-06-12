// Grade 6 ELA — Week 6, Day 3.
// Topic: persuasive techniques in media.

export const grade6ElaWeek6Day3 = {
  id: "g6.ela.w6.d3",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Spotting persuasive techniques",
  topicTag: "persuasion",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RI.6", "CCSS.6.RI.8"],
  hook: "Ads, posts, and news stories try to get you to feel something. Today you name three persuasion moves so you can spot them on purpose.",
  miniLesson: [
    "Emotional appeal: makes you feel scared, proud, sad, excited — to bypass thinking.",
    "Bandwagon: 'everyone's doing it' so you should too. Crowds aren't proof.",
    "Loaded words: words with strong feelings baked in ('disaster', 'champion', 'miracle')."
  ],
  workedExample: {
    prompt:
      "'Don't get left behind! Millions are switching to UltraShoes — the championship shoe of winners!' Name the techniques.",
    steps: [
      "'Don't get left behind' = emotional appeal (fear of missing out).",
      "'Millions are switching' = bandwagon.",
      "'Championship shoe of winners' = loaded words.",
      "Three techniques in one short pitch."
    ],
    answer: "Emotional appeal, bandwagon, loaded words — all three in one sentence."
  },
  items: [
    {
      id: "g6.ela.w6.d3.q1",
      type: "multiple_choice",
      stem: "Which is a BANDWAGON appeal?",
      choices: [
        "Studies show this lowers blood pressure.",
        "Join the millions who already love this product!",
        "Made by a Nobel-winning scientist.",
        "Costs only $5."
      ],
      answerIndex: 1,
      explanation: "Bandwagon: 'everyone's doing it, so you should too.' Crowds aren't evidence.",
      hintLadder: [
        "Look for the option about the crowd.",
        "Who's doing it?",
        "Millions = bandwagon."
      ]
    },
    {
      id: "g6.ela.w6.d3.q2",
      type: "multiple_choice",
      stem: "Which word is most LOADED?",
      choices: ["chair", "person", "miracle", "tomorrow"],
      answerIndex: 2,
      explanation: "'Miracle' carries strong positive feelings. The others are neutral.",
      hintLadder: [
        "Loaded = strong feeling baked in.",
        "Skip neutral words.",
        "Miracle has feeling built in."
      ]
    },
    {
      id: "g6.ela.w6.d3.q3",
      type: "multiple_choice",
      stem:
        "'If you don't buy this water filter, your family could get sick.' Main technique?",
      choices: ["Bandwagon", "Fear / emotional appeal", "Statistics", "Logic"],
      answerIndex: 1,
      explanation: "It threatens harm to your family to push action. Classic fear appeal.",
      hintLadder: [
        "What feeling does the sentence try to trigger?",
        "Fear of harm to family.",
        "Emotional appeal."
      ],
      misconceptionsTargeted: ["mistakes-fear-for-fact"]
    },
    {
      id: "g6.ela.w6.d3.q4",
      type: "multiple_choice",
      stem:
        "Which sentence is the MOST factual (least persuasive)?",
      choices: [
        "This phone is the absolute best on the market!",
        "9 out of 10 people upgraded last year.",
        "This phone has a 6.1-inch display and 128 GB of storage.",
        "Don't miss out — sales end soon!"
      ],
      answerIndex: 2,
      explanation: "Specifications are checkable facts. The others use superlatives, bandwagon, or urgency.",
      hintLadder: [
        "Which option can you verify?",
        "Skip 'best', 'most', 'don't miss out'.",
        "Specs are facts."
      ]
    },
    {
      id: "g6.ela.w6.d3.q5",
      type: "short_answer",
      stem:
        "Write your own one-sentence ad for a fictional product using two persuasive techniques. Then name the techniques you used.",
      rubric: {
        level3: "Single sentence ad uses two clearly identifiable techniques; the student correctly names both.",
        level2: "Uses two techniques but identifies only one correctly.",
        level1: "Vague ad or wrong identification."
      },
      exemplar:
        "Ad: 'Join the thousands of kids already winning summers with SuperSneaks — the champion shoe of fast feet!' Techniques: bandwagon ('thousands of kids') and loaded words ('champion', 'winning').",
      hintLadder: [
        "Pick two techniques first.",
        "Write a sentence that uses both.",
        "Label them at the end."
      ]
    }
  ],
  reflectionPrompt: "Today you spotted persuasion. What's the most common persuasion technique you see in your daily feed?",
  misconceptionBank: [
    {
      id: "mistakes-fear-for-fact",
      label: "Mistakes a fear appeal for a fact",
      description: "Reads 'your family could get sick' as real evidence rather than a fear-driven pitch.",
      coachMove: "Strip the feeling words. What's the claim and what's the evidence? Often there's no evidence left."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Pitch Got You?",
      prompt:
        "Would you rather buy from an ad that says 'Everyone's switching!' or one that says 'Don't miss out — only 3 left!' Pick one, then name the persuasion trick each one is using.",
      answer: "'Everyone's switching' is bandwagon; 'only 3 left' is scarcity / urgency (a kind of emotional fear-of-missing-out). Both push you to act without thinking.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build-an-Ad Studio",
      challenge:
        "Invent a silly product (glow-in-the-dark socks, a homework-eating robot — your call) and design a mini ad that PURPOSELY stuffs in three persuasion techniques: emotional appeal, bandwagon, and loaded words.",
      steps: [
        "Name your fictional product and what it 'does'.",
        "Write a one-line slogan that uses loaded words.",
        "Add a bandwagon line and an emotional-appeal line.",
        "Label each technique with an arrow or note so a reader can spot them."
      ],
      deliverable: "A mini ad (drawn or typed) using all three techniques, each one clearly labeled.",
      choiceBoard: [
        "Design a printed poster ad with labels.",
        "Script a 15-second radio or TikTok-style ad.",
        "Draw a comic where a character falls for each trick."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Persuasion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w6.d3.arena1",
          type: "multiple_choice",
          stem: "'Smart families everywhere trust BrightTeeth — the #1 toothpaste of champions!' Which TWO techniques are stacked here?",
          choices: [
            "Statistics and logic",
            "Bandwagon ('families everywhere') and loaded words ('champions')",
            "Fear appeal and a citation",
            "A definition and a date"
          ],
          answerIndex: 1,
          explanation: "'Families everywhere' is bandwagon (the crowd is doing it) and 'champions' is a loaded word with strong positive feeling. There's no real statistic or logic.",
          hintLadder: [
            "Find the part about the crowd, then the part with a feeling-packed word.",
            "'Everywhere' points to one technique; 'champions' points to another.",
            "Bandwagon + loaded words."
          ]
        },
        {
          id: "g6.ela.w6.d3.arena2",
          type: "short_answer",
          stem: "Take this plain fact: 'This cereal has 8 grams of sugar per serving.' Rewrite it as a persuasive ad line, then name the technique you added.",
          rubric: {
            level3: "Keeps the topic but adds a clear persuasion technique (loaded words, bandwagon, or emotional appeal) AND correctly names the technique used.",
            level2: "Adds a technique but names it incorrectly, or names one without clearly using it.",
            level1: "Restates the fact with no persuasion, or no technique named."
          },
          exemplar: "Ad line: 'Join the millions of happy families who start their day the sweet, energizing way!' Technique: bandwagon ('millions of families') plus loaded words ('happy', 'energizing').",
          hintLadder: [
            "Pick one technique first (loaded words is easiest).",
            "Rewrite the sentence so it pushes a feeling, not just a number.",
            "Name the technique at the end."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake Off the Sell",
      prompt:
        "Stand up. For 30 seconds, 'shake off' a pushy ad: shake out your hands, roll your shoulders back, and take one big breath like you're stepping back from a loud commercial.",
      scienceTieIn: "Quick movement lowers stress signals, helping your thinking brain stay in charge instead of reacting on emotion — exactly the calm you need to resist a hard sell.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one ad or post you saw today? Which persuasion technique did it use, and did it work on you?",
      badge: { id: "persuasion-spotter", name: "Persuasion Spotter", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
