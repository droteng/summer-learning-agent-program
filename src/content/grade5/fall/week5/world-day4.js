// Grade 5 World/Current Affairs — Fall Expedition, Week 5 (Persuasive Voices),
// Day 4. Grade 5 counterpart of g6.fall.world.w5.d4. Same topic (persuasion in
// the real world — ads, slogans, fact vs. opinion) pitched down to Grade 5:
// simpler technique names, shorter examples, extra scaffolding for ages 10–11.

export const fallG5WorldW5D4 = {
  id: "g5.fall.world.w5.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Persuasion in the real world",
  topicTag: "media-persuasion",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.10.3-5", "CCSS.ELA-LITERACY.RI.5.8"],
  hook: "Ads, slogans, and posters are trying to persuade you every day. Today you learn to see the tricks they use — so YOU get to decide what to believe.",
  miniLesson: [
    "Three common persuasion tricks: evidence (real facts and numbers — the honest kind), emotion (making you feel something), and bandwagon ('everyone is doing it, so you should too').",
    "A fact can be checked; an opinion is what someone thinks. Ads often mix them together, so pull them apart.",
    "Being persuaded is not bad — being persuaded WITHOUT noticing is. First spot the trick, then decide if the message is true."
  ],
  workedExample: {
    prompt: "Ad: 'Join the millions who switched! You deserve the best.' Name the tricks.",
    steps: [
      "'Join the millions' = bandwagon (everyone is doing it).",
      "'You deserve the best' = emotion (it flatters you).",
      "Notice there is no real proof the product is better.",
      "Tricks spotted: bandwagon and emotion, no facts."
    ],
    answer: "Bandwagon ('millions') and emotion ('you deserve the best'), with no real proof."
  },
  items: [
    {
      id: "g5.fall.world.w5.d4.q1",
      type: "multiple_choice",
      stem: "'9 out of 10 families choose us — do not be left out!' Which trick is this?",
      choices: ["Real evidence", "Bandwagon (everyone is doing it)", "A fair comparison", "A science study"],
      answerIndex: 1,
      explanation: "It pushes you to follow the crowd — that is the bandwagon trick.",
      hintLadder: [
        "What feeling does 'do not be left out' create?",
        "It is about following the crowd.",
        "That is bandwagon."
      ]
    },
    {
      id: "g5.fall.world.w5.d4.q2",
      type: "multiple_choice",
      stem: "Which sentence is a FACT (you can check it), not an opinion?",
      choices: [
        "This is the most fun park ever.",
        "The park is 12 acres and opened in 2019.",
        "Everyone loves this park.",
        "This park is the best."
      ],
      answerIndex: 1,
      explanation: "The size and opening year can be looked up and checked; the others are just what people think.",
      hintLadder: [
        "Which one could you look up and confirm?",
        "Facts can be checked; opinions are what people think.",
        "The size and date are facts."
      ]
    },
    {
      id: "g5.fall.world.w5.d4.q3",
      type: "multiple_choice",
      stem: "An ad shows a happy family laughing but tells you nothing about the product. What trick is it using?",
      choices: [
        "Evidence and facts",
        "Emotion (making you feel something)",
        "A logical reason",
        "A fact check"
      ],
      answerIndex: 1,
      explanation: "It sells a happy feeling instead of facts about the product — that is the emotion trick.",
      hintLadder: [
        "Is there any real information, or just a feeling?",
        "What feeling are they showing?",
        "That is the emotion trick."
      ],
      misconceptionsTargeted: ["feelings-are-facts"]
    },
    {
      id: "g5.fall.world.w5.d4.q4",
      type: "short_answer",
      stem: "Think of a real ad, video, or slogan you have seen. Name one persuasion trick it used and tell whether it gave any real evidence.",
      rubric: {
        level3: "Names a real example, correctly names a trick (bandwagon / emotion / evidence), AND tells whether real evidence was there.",
        level2: "Names a trick but the evidence part is missing or unclear.",
        level1: "Vague or does not name a real trick."
      },
      exemplar: "A sneaker ad said 'Be unstoppable' over a runner — that is emotion. It gave no evidence the shoes actually make you run faster.",
      hintLadder: [
        "Remember an ad or slogan.",
        "Which trick: bandwagon, emotion, or evidence?",
        "Did it actually prove anything?"
      ]
    },
    {
      id: "g5.fall.world.w5.d4.q5",
      type: "short_answer",
      stem: "Why is it useful to NOTICE persuasion tricks even when you might agree with the message?",
      rubric: {
        level3: "Explains that noticing lets you judge the message for yourself / not be fooled, even for messages you like.",
        level2: "Gives part of the reason without the 'decide for yourself' idea.",
        level1: "Just repeats the question or is unrelated."
      },
      exemplar: "Even if I agree, noticing the trick lets me check if there is real proof, so I choose because of facts — not just because the ad made me feel something.",
      hintLadder: [
        "What could go wrong if you are persuaded without noticing?",
        "How does spotting the trick protect you?",
        "Connect it to deciding for yourself."
      ]
    }
  ],
  reflectionPrompt: "For your own persuasive letter this week, which trick will you use HONESTLY — strong evidence, or a fair emotion? Why?",
  misconceptionBank: [
    {
      id: "feelings-are-facts",
      label: "Treats a good feeling as proof",
      description: "Believes that because an ad made them feel good, the product must be better.",
      coachMove: "Pull the feeling apart from the facts: 'How did that make me feel?' versus 'What did it actually prove?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Spot the Trick",
      prompt:
        "Two fall fair posters: (A) 'Join the thousands who already got tickets — do not miss out!' (B) 'Last year's fair raised $5,000 for the food bank.' Which one uses BANDWAGON, and which one gives real evidence?",
      answer: "(A) is bandwagon — it pushes you to follow the crowd. (B) gives a real fact you can check (evidence). Same fair, two very different moves.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design Two Fall Fair Ads",
      challenge:
        "You are promoting a school fall fair. Make TWO versions of the same ad: one that persuades HONESTLY (with real facts) and one that uses a trick like bandwagon or emotion with no facts. Then label what each one is doing.",
      steps: [
        "Pick your fall fair and one true fact about it (date, cause, or games).",
        "Make the HONEST ad using that real fact.",
        "Make the 'trick' ad using bandwagon or emotion with no facts.",
        "Label each ad with the trick it uses and note which one you would trust."
      ],
      deliverable: "Two labeled ads for the same fall fair — one honest, one trick-based — with a note on the difference.",
      choiceBoard: [
        "Draw two side-by-side poster ads.",
        "Write two short radio scripts (15 seconds each).",
        "Make a 'decode this ad' worksheet pointing out each trick."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Persuasion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.world.w5.d4.arena1",
          type: "multiple_choice",
          stem: "A cider ad shows a cozy family laughing by a fire but says nothing about the cider itself. Which trick is it MAINLY using?",
          choices: [
            "Real evidence and facts",
            "Emotion (making you feel something)",
            "A fair side-by-side comparison",
            "A science study"
          ],
          answerIndex: 1,
          explanation: "It sells a warm feeling instead of any facts about the product — that is the emotion trick.",
          hintLadder: [
            "Is there any real information, or just a cozy mood?",
            "What feeling is the warm scene creating?",
            "That is the emotion trick."
          ]
        },
        {
          id: "g5.fall.world.w5.d4.arena2",
          type: "short_answer",
          stem: "A flyer reads: 'Everyone is switching to PumpkinPhone — the best phone ever!' Name the TWO tricks and tell whether the flyer gives any real evidence.",
          rubric: {
            level3: "Names bandwagon ('everyone is switching') AND emotion / unproven 'best ever', AND says there is no real evidence.",
            level2: "Names one trick correctly and answers the evidence question.",
            level1: "Vague, names no real trick, or misses the evidence part."
          },
          exemplar: "'Everyone is switching' is bandwagon, and 'the best phone ever' is an emotion claim with no proof. The flyer gives no real evidence — no facts or tests at all.",
          hintLadder: [
            "What does 'everyone is switching' push you to do?",
            "Can 'best ever' be proven, or is it just a feeling?",
            "Look for any real facts — are there any?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake Off the Hype",
      prompt:
        "Stand up and 'shake off' the ad pressure: shake out your hands for 10 seconds, roll your shoulders back 5 times, then take one slow breath and say 'I decide for myself.'",
      scienceTieIn: "A quick burst of movement lets out built-up tension and resets your attention, so you can think clearly instead of reacting on the spot.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "For your own persuasive letter this week, which trick will you use HONESTLY — strong evidence or a fair emotion — and why is that the fair choice?",
      badge: { id: "g5-fall-persuasion-detector", name: "Persuasion Detector", emoji: "🕵️" },
      estimatedMinutes: 7
    }
  }
};
