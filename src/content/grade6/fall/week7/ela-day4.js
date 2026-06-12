// Grade 6 ELA/Writing — Fall Expedition, Week 7 (Cause & Effect in History),
// Day 4. Topic: writing cause-and-effect explanations clearly.

export const fallG6ElaW7D4 = {
  id: "g6.fall.ela.w7.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Write cause-and-effect explanations",
  topicTag: "cause-effect-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.C"],
  hook: "Knowing a cause-and-effect chain is one thing; writing it so a reader follows every link is another. Today you turn a chain into clear, connected sentences.",
  miniLesson: [
    "Cause-and-effect writing uses linking words to show how ideas connect: because, led to, as a result, therefore, so.",
    "Keep the chain in order, and make each link's connection explicit — don't make the reader guess.",
    "Avoid the trap of saying two things happened together and calling it cause-and-effect. Show WHY one led to the other."
  ],
  workedExample: {
    prompt: "Connect these into one cause-effect sentence: 'Rivers flooded.' 'Soil became rich.'",
    steps: [
      "Identify which is the cause: the flooding.",
      "Identify the effect: rich soil.",
      "Add a linking word that shows the connection.",
      "Result: 'Because the rivers flooded each year, they left behind rich soil.'"
    ],
    answer: "Because the rivers flooded each year, they left behind rich soil."
  },
  items: [
    {
      id: "g6.fall.ela.w7.d4.q1",
      type: "multiple_choice",
      stem: "Which sentence clearly shows CAUSE and EFFECT?",
      choices: [
        "The market grew. It was Tuesday.",
        "Because trade increased, the market grew larger.",
        "The market is big and old.",
        "Markets sell things."
      ],
      answerIndex: 1,
      explanation: "'Because trade increased' gives the cause; 'the market grew' is the effect — clearly linked.",
      hintLadder: [
        "Which sentence links a cause to a result?",
        "Look for 'because' connecting two events.",
        "The trade/market sentence."
      ]
    },
    {
      id: "g6.fall.ela.w7.d4.q2",
      type: "multiple_choice",
      stem: "Two events happening at the same TIME proves cause-and-effect.",
      choices: [
        "True — timing is enough",
        "False — you must show WHY one led to the other",
        "True if they're famous",
        "False only in math"
      ],
      answerIndex: 1,
      explanation: "Happening together (correlation) isn't the same as one causing the other; you must show the link.",
      hintLadder: [
        "Does happening at the same time mean one caused the other?",
        "Think of two unrelated things on the same day.",
        "You must show the WHY."
      ],
      misconceptionsTargeted: ["correlation-is-causation"]
    },
    {
      id: "g6.fall.ela.w7.d4.q3",
      type: "multiple_choice",
      stem: "Which linking phrase best introduces an EFFECT?",
      choices: ["because of", "as a result", "due to", "since"],
      answerIndex: 1,
      explanation: "'As a result' points to the effect; the others usually introduce the cause.",
      hintLadder: [
        "Which one comes right before the result?",
        "It points forward to what happened.",
        "'As a result.'"
      ]
    },
    {
      id: "g6.fall.ela.w7.d4.q4",
      type: "short_answer",
      stem: "Write a cause-and-effect paragraph (3–4 sentences) explaining how the fall harvest surplus led to the first cities. Use at least two linking words.",
      rubric: {
        level3: "A clear, ordered chain (surplus → settlement/specialization → cities) with at least two correct linking words and explicit connections.",
        level2: "Mostly clear but only one linking word or a weak connection.",
        level1: "Lists facts with no causal linking."
      },
      exemplar: "Because farms produced more food than people needed, families could store a surplus. As a result, not everyone had to farm, so some became builders and traders. Therefore, large settlements grew into the first cities.",
      hintLadder: [
        "Start with the cause: surplus food.",
        "What did it lead to? (free up workers)",
        "Use 'because,' 'as a result,' 'therefore.'"
      ]
    },
    {
      id: "g6.fall.ela.w7.d4.q5",
      type: "short_answer",
      stem: "Rewrite this weak sentence so the cause-effect link is explicit: 'There was a drought. People moved away.'",
      rubric: {
        level3: "Combines into one sentence with an explicit linking word that shows the drought caused the move.",
        level2: "Links them but the connection is still a little loose.",
        level1: "Leaves them as two unconnected statements."
      },
      exemplar: "Because the drought dried up the crops and water, people were forced to move away to survive.",
      hintLadder: [
        "Which is the cause? (the drought)",
        "Connect them with 'because' or 'so.'",
        "Make the WHY explicit."
      ]
    }
  ],
  reflectionPrompt: "Cause-effect writing shows up in science, news, and your own explanations. Where did you have to explain 'why something happened' recently?",
  misconceptionBank: [
    {
      id: "correlation-is-causation",
      label: "Thinks things happening together proves causation",
      description: "Assumes that because two events occurred near each other, one caused the other.",
      coachMove: "Ask 'what's the mechanism?' — if you can't explain HOW one led to the other, it may just be coincidence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Because vs. And",
      prompt:
        "Read these two: (A) 'The leaves fell and the days got colder.' (B) 'The days got colder, so the trees dropped their leaves.' Only ONE actually explains a cause. Which one, and what word gives it away?",
      answer:
        "(B) explains a cause — the word 'so' shows the cold caused the leaves to drop. (A) only lists two things with 'and'; it doesn't say one led to the other.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: The 'Because' Paragraph",
      challenge:
        "Turn a real autumn cause-and-effect chain (like harvest surplus → first cities) into a smooth paragraph where every link is connected with a linking word — no link left for the reader to guess.",
      steps: [
        "Pick or invent a 3-link cause-and-effect chain.",
        "Write a sentence for each link, but connect them with linking words (because, so, as a result, therefore).",
        "Read it aloud and circle every linking word — there should be at least two.",
        "Fix any spot where the reader would have to guess WHY one event led to the next."
      ],
      deliverable: "A 3-4 sentence cause-and-effect paragraph with at least two linking words and every connection made explicit.",
      choiceBoard: [
        "Write the paragraph about a historical chain.",
        "Write it about a chain from your own day.",
        "Write it as a short news report explaining why something happened."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Linking-Words Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence correctly shows cause-and-effect WITHOUT falsely treating 'happening together' as proof?",
          choices: [
            "The festival happened the same week the leaves turned red, so the leaves caused the festival.",
            "Because the harvest was large, the village held a bigger festival than usual.",
            "It was autumn and there was a festival.",
            "The festival and the cold weather both happened in October."
          ],
          answerIndex: 1,
          explanation: "Only option B shows a real mechanism (a large harvest leading to a bigger festival). The others either confuse timing with causation or just list events.",
          hintLadder: [
            "Avoid sentences that say 'happened together, so one caused the other.'",
            "Look for a sentence with a real WHY behind the link.",
            "The large-harvest sentence explains the actual cause."
          ]
        },
        {
          id: "g6.fall.ela.w7.d4.arena2",
          type: "short_answer",
          stem: "Rewrite this weak pair as ONE cause-and-effect sentence with an explicit linking word: 'The first frost came early. Farmers rushed to bring in the pumpkins.'",
          rubric: {
            level3: "One sentence with an explicit linking word that clearly shows the early frost CAUSED the rush to harvest.",
            level2: "Links them but the cause-effect connection is still a little loose.",
            level1: "Leaves them as two separate statements with no clear link."
          },
          exemplar: "Because the first frost came early, farmers rushed to bring in the pumpkins before they could be ruined.",
          hintLadder: [
            "Which sentence is the cause? (the early frost)",
            "Join them with 'because' or 'so.'",
            "Make the WHY the farmers rushed explicit."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake It Out",
      prompt:
        "Stand and shake out each body part in a chain: shake your hands (10s) → arms → shoulders → whole body, then take 3 slow breaths. One movement flowing into the next, just like a cause-effect chain.",
      scienceTieIn: "Shaking out your muscles releases built-up tension and boosts blood flow, helping your brain feel alert and ready to write again.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write one cause-and-effect sentence about your day using a linking word like 'because' or 'so.' Did making the link explicit make it clearer?",
      badge: { id: "linking-word-writer", name: "Linking-Word Writer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
