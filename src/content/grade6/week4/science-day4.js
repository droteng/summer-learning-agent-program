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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Train Your Brain Like an AI",
      prompt:
        "Imagine I only ever showed you red apples and called them 'apple.' Then I show you a green apple. Why might an AI trained the same way get it WRONG — and what would fix it?",
      answer:
        "If every 'apple' example was red, the AI may learn 'apple = red round thing' and miss the green one. The fix is more variety: show it apples of many colors so it learns the real pattern.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Be the Teacher, Train an AI",
      challenge:
        "Pick something an AI could learn to recognize (a cat, a happy face, a healthy snack). Make a TRAINING SET: list 5 good, varied examples and 2 non-examples. Then explain one bias that would creep in if your examples were all too similar.",
      steps: [
        "Choose what your AI will learn to recognize.",
        "List 5 varied positive examples (different colors, angles, situations).",
        "List 2 non-examples (things it should NOT match) and say why.",
        "Name one bias that would appear if all your examples looked alike."
      ],
      deliverable: "A training-set plan: 5 varied examples, 2 non-examples, and one bias you spotted and how to avoid it.",
      choiceBoard: [
        "Write the training set as a labeled list with the bias note.",
        "Draw the example cards with 'YES' and 'NO' stamps and a 'bias alert' callout.",
        "Make a comic where an AI fails because of biased data, then succeeds after better examples."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: AI Trainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.sci.w4.d4.arena1",
          type: "multiple_choice",
          stem:
            "A face-unlock AI was trained only on photos taken indoors with bright light. Outdoors in sunlight, it often fails. Why?",
          choices: [
            "AI cameras break in sunlight.",
            "The training data was biased — it never included bright outdoor lighting.",
            "Faces change outdoors.",
            "The AI is tired from working."
          ],
          answerIndex: 1,
          explanation:
            "The AI only saw indoor, bright-light examples, so outdoor sunlight looks unfamiliar. The data didn't cover that condition.",
          hintLadder: [
            "What lighting did the training photos all share?",
            "What condition is missing from the data?",
            "Outdoor sunlight was never in the training set — that's the bias."
          ]
        },
        {
          id: "g6.sci.w4.d4.arena2",
          type: "short_answer",
          stem:
            "A school wants an AI to recommend library books kids will like. It is trained only on what last year's top 10 students borrowed. Name one fairness problem this could cause.",
          rubric: {
            level3:
              "Names a specific bias (it learns only high-achievers' tastes, or only certain genres/reading levels) AND connects it to the narrow training set causing poor or unfair recommendations for other students.",
            level2: "Names a problem but doesn't tie it to the limited training data.",
            level1: "Generic 'the AI is unfair' with no specific mechanism."
          },
          exemplar:
            "The AI only learned from 10 strong readers, so it may only recommend hard or one-genre books. A struggling or different-interest student would get recommendations that don't fit them, even though their taste is just as valid.",
          hintLadder: [
            "Whose choices were in the training data?",
            "Who is left out of those examples?",
            "Connect that data gap to recommendations that don't fit other kids."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Pattern Stretch",
      prompt:
        "Make a 3-pose pattern (reach up, twist left, twist right). Repeat the pattern 4 times — you're 'training' your body to remember it, just like an AI learns from repeated examples. Then drink some water.",
      scienceTieIn: "Repeating a movement strengthens the brain pathways that store it, and staying hydrated helps your blood carry oxygen to those working cells.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "AI is only as good as its examples. What's one decision you would NOT want an AI to make alone, and why does the 'examples' problem matter there?",
      badge: { id: "ai-trainer", name: "AI Trainer", emoji: "🤖" },
      estimatedMinutes: 7
    }
  }
};
