// Grade 5 Summer (AI Fundamentals) — Week 4, Day 4.
// Topic: how AI learns from examples (grade-5 depth: AI learns patterns from
// examples, and narrow examples make it get things wrong).

export const summerG5ScienceW4D4 = {
  id: "g5.summer.sci.w4.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 4,
  subject: "Science",
  topic: "How AI learns from examples",
  topicTag: "ai-basics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.5-ETS1-1", "CSTA.1B-AP-15"],
  hook: "An AI doesn't really 'know' things — it learns patterns by looking at lots of examples. Today you'll see how that works, and where it can go wrong.",
  miniLesson: [
    "AI learns by looking at MANY examples and spotting patterns. This is called training.",
    "If the examples are too much the same (only orange cats), the AI learns a too-narrow pattern and can get new things wrong.",
    "More examples + more variety = a better AI. An AI is only as good as the examples it learned from."
  ],
  workedExample: {
    prompt:
      "An AI is shown 500 pictures of GOLDEN retrievers, all labeled 'dog,' and no other kinds of dog. Then you show it a tiny poodle. What might it say?",
    steps: [
      "Every 'dog' example it saw was a big golden retriever.",
      "It learned a pattern like: 'dog = big, golden fur, floppy ears.'",
      "A small poodle doesn't match that narrow pattern.",
      "So it might NOT call the poodle a dog — its examples were too narrow."
    ],
    answer: "It might not recognize the poodle as a dog, because its examples were too narrow."
  },
  items: [
    {
      id: "g5.summer.sci.w4.d4.q1",
      type: "multiple_choice",
      stem: "What does an AI learn from?",
      choices: ["Magic", "Its programmer's feelings", "Lots of examples (its training data)", "Random lucky guesses"],
      answerIndex: 2,
      explanation: "AI learns patterns from many examples. Not magic, not feelings, not luck.",
      hintLadder: [
        "What does the AI look at while it is training?",
        "It's looking at data — lots of it.",
        "Examples are the answer."
      ]
    },
    {
      id: "g5.summer.sci.w4.d4.q2",
      type: "multiple_choice",
      stem: "An AI that spots weeds was trained only on photos taken on SUNNY days. On a cloudy day it misses most weeds. Why?",
      choices: [
        "AIs only work when it's sunny.",
        "Its examples were all sunny, so cloudy photos look new and strange to it.",
        "Weeds hide when it's cloudy.",
        "The AI got tired."
      ],
      answerIndex: 1,
      explanation: "The AI never saw cloudy examples, so cloudy photos don't match what it learned.",
      hintLadder: [
        "What did ALL the training photos have in common?",
        "What kind of day was never in the examples?",
        "Cloudy days were missing — the examples were too narrow."
      ],
      misconceptionsTargeted: ["thinks-ai-just-knows"]
    },
    {
      id: "g5.summer.sci.w4.d4.q3",
      type: "multiple_choice",
      stem: "Which would most help the weed-spotting AI get better?",
      choices: [
        "More photos of the same weed on sunny days.",
        "Photos in many kinds of weather and from different angles.",
        "A faster computer.",
        "Asking the AI politely."
      ],
      answerIndex: 1,
      explanation: "Variety in the examples helps the AI handle new situations. The same photo again and again adds nothing new.",
      hintLadder: [
        "The AI is missing certain kinds of days.",
        "Add examples that cover the missing ones.",
        "Variety is what helps."
      ]
    },
    {
      id: "g5.summer.sci.w4.d4.q4",
      type: "multiple_choice",
      stem: "Which is a responsible way to use AI for your summer reading journal?",
      choices: [
        "Copy the AI's words and turn them in as your own.",
        "Use AI to brainstorm ideas, then write the journal yourself in your own words.",
        "Never use AI for anything ever.",
        "Have the AI do the whole assignment for you."
      ],
      answerIndex: 1,
      explanation: "AI can be a brainstorm buddy, but YOU are the writer and the thinker.",
      hintLadder: [
        "Who is supposed to be learning — you or the AI?",
        "The AI can help you get started, but you do the writing.",
        "Brainstorm with AI, then write it yourself."
      ]
    },
    {
      id: "g5.summer.sci.w4.d4.q5",
      type: "short_answer",
      stem:
        "An AI picks the 'best' summer camp photos. It was trained ONLY on photos of kids playing soccer. Name one problem this could cause.",
      rubric: {
        level3:
          "Names a specific problem (it only picks soccer photos, or misses swimming/art/hiking photos) AND connects it to the narrow training examples being unfair to other activities.",
        level2: "Names a problem but doesn't connect it to the narrow examples.",
        level1: "Generic 'the AI is bad' with no specific reason."
      },
      exemplar:
        "Since every example was soccer, the AI learned 'best photo = soccer.' It might skip great swimming, art, and hiking photos, so campers who didn't play soccer never get their pictures picked.",
      hintLadder: [
        "What did EVERY training photo show?",
        "What summer activities were NOT in the examples?",
        "Connect that gap to which photos get left out unfairly."
      ]
    }
  ],
  reflectionPrompt: "Today you saw how AI learns from examples. What is one choice in your life you would NOT want an AI to make all by itself?",
  misconceptionBank: [
    {
      id: "thinks-ai-just-knows",
      label: "Thinks AI 'just knows things'",
      description: "Treats AI like it already knows facts, instead of a pattern-spotter that learned from examples.",
      coachMove: "Ask: where did the AI's answer come from? Trace it back to the examples it was trained on."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Train Your Brain Like an AI",
      prompt:
        "Imagine I only ever showed you RED apples and called them 'apple.' Then I show you a GREEN apple. Why might an AI trained the same way get it wrong — and what would fix it?",
      answer:
        "If every 'apple' example was red, the AI might learn 'apple = red round thing' and miss the green one. The fix is more variety: show it apples of many colors so it learns the real pattern.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Be the Teacher, Train an AI",
      challenge:
        "Pick something an AI could learn to recognize (a dog, a happy face, a healthy snack). Make a TRAINING SET: list 5 good, VARIED examples and 2 non-examples. Then explain one problem that would sneak in if all your examples looked too much alike.",
      steps: [
        "Choose what your AI will learn to recognize.",
        "List 5 varied YES examples (different colors, sizes, angles).",
        "List 2 NO examples (things it should NOT match) and say why.",
        "Name one problem that would appear if all your examples looked the same."
      ],
      deliverable: "A training-set plan: 5 varied examples, 2 non-examples, and one problem you spotted plus how to avoid it.",
      choiceBoard: [
        "Write the training set as a labeled list with your problem note.",
        "Draw the example cards with 'YES' and 'NO' stamps and a 'watch out!' callout.",
        "Make a comic where an AI fails because of same-looking examples, then succeeds with varied ones."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: AI Trainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.sci.w4.d4.arena1",
          type: "multiple_choice",
          stem:
            "A phone's face-unlock AI was trained only on photos taken INDOORS with bright light. Outside in the sun, it often fails. Why?",
          choices: [
            "Cameras break in the sun.",
            "All its examples were bright indoor photos, so bright outdoor light looks new and strange.",
            "Faces change outside.",
            "The AI is tired from working."
          ],
          answerIndex: 1,
          explanation:
            "The AI only saw bright indoor examples, so outdoor sunlight doesn't match what it learned. That kind of light was never in its examples.",
          hintLadder: [
            "What did ALL the training photos have in common?",
            "What kind of lighting was missing?",
            "Bright outdoor light was never in the examples — that's why it fails."
          ]
        },
        {
          id: "g5.summer.sci.w4.d4.arena2",
          type: "short_answer",
          stem:
            "A camp wants an AI to suggest books kids will like. It was trained only on the books the 5 oldest campers borrowed. Name one problem this could cause.",
          rubric: {
            level3:
              "Names a specific problem (it learns only the oldest kids' tastes, or only hard books / one type of book) AND connects it to the narrow examples giving poor suggestions for younger or different campers.",
            level2: "Names a problem but doesn't tie it to the narrow examples.",
            level1: "Generic 'the AI is unfair' with no specific reason."
          },
          exemplar:
            "The AI only learned from 5 older campers, so it might only suggest long or hard books. A younger camper, or one who likes comics, would get suggestions that don't fit them, even though their taste is just as good.",
          hintLadder: [
            "Whose book choices were in the examples?",
            "Which campers are left out of those examples?",
            "Connect that gap to suggestions that don't fit other kids."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Pattern Stretch",
      prompt:
        "Make a 3-move pattern (reach up, twist left, twist right). Repeat the pattern 4 times — you're 'training' your body to remember it, just like an AI learns from repeated examples. Then drink some water.",
      scienceTieIn: "Repeating a movement builds the brain pathways that store it, and drinking water helps your blood carry oxygen to your working cells.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "An AI is only as good as its examples. What is one choice you would NOT want an AI to make alone, and why does the 'examples' problem matter there?",
      badge: { id: "g5-summer-ai-trainer", name: "AI Trainer", emoji: "🤖" },
      estimatedMinutes: 7
    }
  }
};
