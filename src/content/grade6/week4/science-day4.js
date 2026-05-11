// Grade 6 Science (AI Fundamentals) — Week 4, Day 4.
// Topic: how AI learns from examples.

export const grade6ScienceWeek4Day4 = {
  id: "g6.sci.w4.d4",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 4,
  subject: "Science",
  topic: "How AI learns from examples",
  topicTag: "ai-basics",
  estimatedMinutes: 18,
  standardsRefs: ["AI4K12.5.A", "CSTA.2-AP-19"],
  hook: "An AI doesn't really know things — it learns patterns from examples. Today you see how that works, and where it can go wrong.",
  miniLesson: [
    "AI systems learn by looking at many examples and finding patterns — this is called training.",
    "If the training examples are biased (only cats in the photos), the AI gets biased — it might call a dog a cat.",
    "More examples + more variety + clear feedback = better AI. AI is only as good as its data."
  ],
  workedExample: {
    prompt:
      "An AI is shown 1,000 pictures of golden retrievers labeled 'dog' and 0 pictures of any other dog breed. You then show it a poodle. What does it likely say?",
    steps: [
      "The AI's only 'dog' examples are golden retrievers.",
      "It learned patterns: long fur, golden color, friendly face.",
      "A poodle doesn't match those exact patterns.",
      "The AI may not call it a dog — its data was too narrow."
    ],
    answer: "It may not recognize the poodle as a dog — biased data narrows the AI."
  },
  items: [
    {
      id: "g6.sci.w4.d4.q1",
      type: "multiple_choice",
      stem: "What does an AI 'learn from'?",
      choices: ["Magic", "Its programmer's opinions", "Examples in its training data", "Random guessing"],
      answerIndex: 2,
      explanation: "AI systems learn patterns from training examples. No magic, no opinions, no randomness once trained.",
      hintLadder: [
        "What does the AI see during training?",
        "It's all data.",
        "Examples are the answer."
      ]
    },
    {
      id: "g6.sci.w4.d4.q2",
      type: "multiple_choice",
      stem: "An AI for spotting weeds was trained only on photos taken on sunny days. On a cloudy day it misses most weeds. Why?",
      choices: [
        "AIs only work on sunny days.",
        "The training data was biased — it didn't include cloudy conditions.",
        "Weeds grow differently in clouds.",
        "The AI got tired."
      ],
      answerIndex: 1,
      explanation: "The AI never saw cloudy examples, so cloudy photos look unfamiliar.",
      hintLadder: [
        "What did the training data contain?",
        "What's missing?",
        "Cloudy examples — the data is biased."
      ],
      misconceptionsTargeted: ["thinks-ai-just-knows"]
    },
    {
      id: "g6.sci.w4.d4.q3",
      type: "multiple_choice",
      stem: "Which would most improve the spotting-weeds AI?",
      choices: [
        "More photos of the same weed in sunshine.",
        "More photos in varied weather and angles.",
        "Faster computers.",
        "Asking the AI nicely."
      ],
      answerIndex: 1,
      explanation: "Variety in training data helps the AI generalize. Same examples ten times over don't add new information.",
      hintLadder: [
        "The AI is missing certain conditions.",
        "Add varied examples to cover them.",
        "Variety wins."
      ]
    },
    {
      id: "g6.sci.w4.d4.q4",
      type: "multiple_choice",
      stem: "Which is a responsible thing to do when using AI for schoolwork?",
      choices: [
        "Paste AI output and submit as your own.",
        "Use AI to brainstorm, then write the final work yourself with your own thinking.",
        "Never use AI ever.",
        "Use AI to take a test for you."
      ],
      answerIndex: 1,
      explanation: "AI is a brainstorm partner. You're still the author and the thinker.",
      hintLadder: [
        "Who's supposed to learn from the assignment — you or the AI?",
        "AI assists, you author.",
        "Brainstorm + your own work is the path."
      ]
    },
    {
      id: "g6.sci.w4.d4.q5",
      type: "short_answer",
      stem:
        "An AI rates student essays. The training set was only essays from one school district. Name one fairness problem this could cause.",
      rubric: {
        level3:
          "Names a specific bias (dialect, regional vocabulary, topic preferences) and connects it to the limited training set causing unfair scoring for students from other places.",
        level2: "Names a problem but doesn't connect it to training data.",
        level1: "Generic 'AI is unfair' without a specific mechanism."
      },
      exemplar:
        "Essays from one district share dialect and topic preferences. Students from a different district might use different vocabulary and get marked down unfairly even when their reasoning is just as strong.",
      hintLadder: [
        "What was special about the training essays?",
        "What's different about a student from somewhere else?",
        "Connect the data gap to an unfair score."
      ]
    }
  ],
  reflectionPrompt: "Today you saw how AI learns. What's one decision in your life you wouldn't want an AI to make alone?",
  misconceptionBank: [
    {
      id: "thinks-ai-just-knows",
      label: "Thinks AI 'just knows things'",
      description: "Treats AI like a knower instead of a pattern-matcher trained on data.",
      coachMove: "Ask: where did the AI's answer come from? Trace it back to training examples."
    }
  ]
};
