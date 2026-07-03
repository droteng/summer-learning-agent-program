// Grade 5 Summer ELA/Writing — Week 6 (World Affairs for Kids), Day 3.
// Grade-5 counterpart of g6.ela.w6.d3 (persuasive techniques in media), pitched
// down one level: three simple named tricks, vocab support, concrete ad examples.

export const summerG5ElaW6D3 = {
  id: "g5.summer.ela.w6.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Spotting persuasive techniques",
  topicTag: "persuasion",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.RI.5.8", "CCSS.ELA-LITERACY.RI.5.6"],
  hook: "Ads and posts try to make you FEEL something so you will act fast. Today you learn three tricks so you can spot them on purpose.",
  keyTerms: [
    { term: "Emotional appeal", definition: "Words that make you feel scared, proud, or excited so you act without thinking." },
    { term: "Bandwagon", definition: "The trick of saying 'everyone is doing it, so you should too.' A crowd is not proof." },
    { term: "Loaded words", definition: "Words with strong feelings inside them, like 'amazing', 'champion', or 'disaster'." }
  ],
  miniLesson: [
    "Emotional appeal makes you FEEL something — scared, proud, or excited — so you stop thinking carefully.",
    "Bandwagon says 'everyone is doing it, so you should too.' But a crowd is not proof.",
    "Loaded words carry strong feelings, like 'amazing', 'champion', or 'miracle'."
  ],
  workedExample: {
    prompt:
      "'Don't miss out! Millions love SuperShoes — the champion shoe for winners!' Name the tricks.",
    steps: [
      "'Don't miss out' makes you afraid to be left out — emotional appeal.",
      "'Millions love' means everyone is doing it — bandwagon.",
      "'Champion' and 'winners' carry strong feelings — loaded words.",
      "Three tricks packed into one short ad!"
    ],
    answer: "Emotional appeal, bandwagon, and loaded words — all three in one sentence."
  },
  items: [
    {
      id: "g5.summer.ela.w6.d3.q1",
      type: "multiple_choice",
      stem: "Which sentence uses the BANDWAGON trick?",
      choices: [
        "A test showed this soap cleans well.",
        "Join the millions who already love this snack!",
        "Made by a famous chef.",
        "It costs only $5."
      ],
      answerIndex: 1,
      explanation: "Bandwagon says 'everyone is doing it, so you should too.' 'Join the millions' points to the crowd.",
      hintLadder: [
        "Look for the choice that talks about a crowd.",
        "Who is doing it in each choice?",
        "'Millions' points to the crowd = bandwagon."
      ]
    },
    {
      id: "g5.summer.ela.w6.d3.q2",
      type: "multiple_choice",
      stem: "Which word is the MOST loaded (has the strongest feeling)?",
      choices: ["chair", "person", "amazing", "tomorrow"],
      answerIndex: 2,
      explanation: "'Amazing' carries a strong good feeling. The other words are plain and calm.",
      hintLadder: [
        "Loaded words have strong feelings inside them.",
        "Skip the calm, plain words.",
        "'Amazing' has a big feeling built in."
      ]
    },
    {
      id: "g5.summer.ela.w6.d3.q3",
      type: "multiple_choice",
      stem: "'If you don't buy this water filter, your family could get sick.' Which trick is this?",
      choices: ["Bandwagon", "Fear / emotional appeal", "A fact", "A number"],
      answerIndex: 1,
      explanation: "It tries to scare you about your family so you act fast. That is a fear or emotional appeal.",
      hintLadder: [
        "What feeling does the sentence try to make?",
        "It makes you afraid for your family.",
        "That feeling is an emotional (fear) appeal."
      ],
      misconceptionsTargeted: ["mistakes-fear-for-fact-g5"]
    },
    {
      id: "g5.summer.ela.w6.d3.q4",
      type: "short_answer",
      stem:
        "Here is an ad line: 'This phone is the best phone ever — hurry before it's gone!' Rewrite it as a plain, factual sentence with no tricks, and name one trick you took out.",
      rubric: {
        level3: "Rewrites it as a checkable fact (like a size or a price) with no persuasion, AND names a real trick that was in the original (loaded words like 'best', or the rush/emotional appeal in 'hurry').",
        level2: "Rewrites it more plainly but a little persuasion is left, OR names the trick loosely.",
        level1: "Keeps the tricks, or names no trick."
      },
      exemplar:
        "Plain sentence: 'This phone has a 6-inch screen.' One trick I took out is the loaded word 'best' (also the 'hurry' rush).",
      hintLadder: [
        "A fact is something you can check or measure.",
        "Take out 'best' and 'hurry' — those are tricks.",
        "Write a plain fact, then name the trick you removed."
      ]
    },
    {
      id: "g5.summer.ela.w6.d3.q5",
      type: "short_answer",
      stem:
        "Write your own one-sentence ad for a made-up product. Then finish this frame: 'The tricks I used are ___ and ___.'",
      rubric: {
        level3: "Writes a one-sentence ad that clearly uses two tricks, and names both tricks correctly.",
        level2: "Uses two tricks but names only one correctly.",
        level1: "Ad is vague, or the tricks are named wrong."
      },
      exemplar:
        "Ad: 'Join the thousands of kids who love GlowSocks — the champion sock of summer!' The tricks I used are bandwagon ('thousands of kids') and loaded words ('champion').",
      hintLadder: [
        "Pick two tricks first.",
        "Write one sentence that uses both.",
        "Name your two tricks at the end."
      ]
    }
  ],
  reflectionPrompt: "Today you spotted persuasion tricks. Which trick do you see the most in ads?",
  misconceptionBank: [
    {
      id: "mistakes-fear-for-fact-g5",
      label: "Thinks a scary line is a fact",
      description: "Reads 'your family could get sick' as real proof instead of a trick to make you afraid.",
      coachMove: "Take out the feeling words. What is the real claim, and where is the proof? Often there is no proof left."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Ad Got You?",
      prompt:
        "Would you rather buy from an ad that says 'Everyone is switching!' or one that says 'Only 3 left — hurry!' Pick one, then name the trick each one uses.",
      answer: "'Everyone is switching' is bandwagon. 'Only 3 left — hurry' rushes you with a fear of missing out (emotional appeal). Both push you to act without thinking.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build-an-Ad Studio",
      challenge:
        "Invent a silly product (glow-in-the-dark socks, a homework-eating robot — your call). Design a mini ad that ON PURPOSE uses all three tricks: emotional appeal, bandwagon, and loaded words.",
      steps: [
        "Name your made-up product and what it 'does'.",
        "Write a one-line slogan using loaded words.",
        "Add a bandwagon line and a feeling (emotional) line.",
        "Label each trick with an arrow or note so a reader can spot them."
      ],
      deliverable: "A mini ad (drawn or typed) using all three tricks, each one clearly labeled.",
      choiceBoard: [
        "Design a poster ad with the tricks labeled.",
        "Say a 15-second radio-style ad out loud.",
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
          id: "g5.summer.ela.w6.d3.arena1",
          type: "multiple_choice",
          stem: "'Smart families everywhere trust BrightTeeth — the toothpaste of champions!' Which TWO tricks are used?",
          choices: [
            "A number and a fact",
            "Bandwagon ('families everywhere') and loaded words ('champions')",
            "Fear and a real study",
            "A date and a definition"
          ],
          answerIndex: 1,
          explanation: "'Families everywhere' is bandwagon (the crowd is doing it), and 'champions' is a loaded word with a strong good feeling. There is no real number or study.",
          hintLadder: [
            "Find the part about a crowd, then the part with a big feeling word.",
            "'Everywhere' points to one trick; 'champions' points to another.",
            "Bandwagon + loaded words."
          ]
        },
        {
          id: "g5.summer.ela.w6.d3.arena2",
          type: "short_answer",
          stem: "Take this plain fact: 'This cereal has 8 grams of sugar in each bowl.' Rewrite it as a persuasive ad line, then name the trick you added.",
          rubric: {
            level3: "Keeps the topic but adds a clear trick (loaded words, bandwagon, or emotional appeal) AND names the trick correctly.",
            level2: "Adds a trick but names it wrong, or names one without really using it.",
            level1: "Just repeats the fact with no trick, or names no trick."
          },
          exemplar: "Ad line: 'Join the millions of happy families who start the day the sweet, sunny way!' Trick: bandwagon ('millions of families') plus loaded words ('happy', 'sunny').",
          hintLadder: [
            "Pick one trick first (loaded words is easiest).",
            "Rewrite it so it pushes a feeling, not just a number.",
            "Name the trick at the end."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake Off the Sell",
      prompt:
        "Stand up. For 30 seconds, 'shake off' a pushy ad: shake out your hands, roll your shoulders back, and take one big breath like you are stepping away from a loud commercial.",
      scienceTieIn: "Quick movement lowers stress signals, so your thinking brain stays in charge instead of reacting on feelings — just the calm you need to resist a hard sell.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one ad or post you saw today? Which trick did it use, and did it work on you?",
      badge: { id: "g5-summer-persuasion-spotter", name: "Persuasion Spotter", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
