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
  estimatedMinutes: 18,
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
  ]
};
