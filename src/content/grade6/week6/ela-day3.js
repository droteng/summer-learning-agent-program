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
  estimatedMinutes: 16,
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
  ]
};
