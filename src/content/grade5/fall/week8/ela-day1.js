// Grade 5 ELA/Writing — Fall Expedition, Week 8 (Harvest Showcase), Day 1.
// Grade 5 counterpart of g6.fall.ela.w8.d1. Same topic (plan a showcase
// presentation) pitched down to Grade 5: simpler three-part frame, paragraph
// scaffolds, and extra vocabulary support. Celebratory capstone tone.

export const fallG5ElaW8D1 = {
  id: "g5.fall.ela.w8.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your showcase presentation",
  topicTag: "presentation-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.SL.5.4", "CCSS.ELA-LITERACY.W.5.4"],
  hook: "It's showcase week — time to celebrate your best fall work! Today you make a plan. A good plan is like a map that keeps you from getting lost while you talk.",
  miniLesson: [
    "A strong presentation has THREE parts: a beginning that grabs attention (a HOOK), a middle with your main ideas, and an ending that says your one big message.",
    "Pick your best 2 or 3 pieces of fall work to show. Showing a few things well beats rushing through everything.",
    "Use a linking sentence to move from one piece to the next, like 'Next, let me show you...' so your audience can follow along."
  ],
  workedExample: {
    prompt: "Make a simple 3-part plan for a showcase about your fall leaf project.",
    steps: [
      "Beginning (hook): 'Did you know one tree can drop over 200,000 leaves in a fall?'",
      "Middle: show your leaf drawing, tell why leaves change color, share your favorite fall fact.",
      "Ending (big message): 'Fall is nature's way of getting ready to rest.'",
      "Three clear parts, one clear message."
    ],
    answer: "Hook → leaf drawing + why colors change + fall fact → 'nature is getting ready to rest' message."
  },
  items: [
    {
      id: "g5.fall.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "What are the three main parts of a strong presentation?",
      choices: [
        "Title, name, and date",
        "A beginning that hooks, a middle with main ideas, and an ending message",
        "Hello, hello, and goodbye",
        "Beginning, snack break, and end"
      ],
      answerIndex: 1,
      explanation: "A presentation has a hook to start, a middle with your main ideas, and an ending that gives one big message.",
      hintLadder: [
        "Think beginning, middle, and end.",
        "What grabs attention first?",
        "Hook, middle, ending message."
      ]
    },
    {
      id: "g5.fall.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why should you show your BEST 2 or 3 pieces instead of everything you made?",
      choices: [
        "To save paper",
        "So you can go deeper and your audience stays interested",
        "Because a rule says so",
        "Because audiences like to be confused"
      ],
      answerIndex: 1,
      explanation: "Showing a few pieces well lets you explain more and keeps your audience paying attention.",
      hintLadder: [
        "Imagine rushing through 20 things really fast.",
        "What do people remember better — a few things done well, or a blur?",
        "Show your best, and go deeper."
      ],
      misconceptionsTargeted: ["more-is-better-presentation"]
    },
    {
      id: "g5.fall.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "What is the job of a LINKING sentence (like 'Next, let me show you...')?",
      choices: [
        "To end the talk",
        "To smoothly connect one part to the next so the audience can follow",
        "To add facts that don't fit",
        "To repeat the title"
      ],
      answerIndex: 1,
      explanation: "A linking sentence is a bridge that helps the audience move from one piece to the next.",
      hintLadder: [
        "What helps an audience move from one idea to the next?",
        "It's like a bridge between parts.",
        "Linking sentences connect the parts."
      ]
    },
    {
      id: "g5.fall.ela.w8.d1.q4",
      type: "short_answer",
      stem: "List the 2 or 3 fall pieces you would show in YOUR showcase. Use this frame: 'I will show ___ because ___.'",
      rubric: {
        level3: "Names 2–3 specific pieces AND gives a clear reason for each using the frame.",
        level2: "Names pieces but the reasons are thin or the frame is only partly used.",
        level1: "Vague or no real pieces named."
      },
      exemplar: "I will show my leaf drawing because it took a lot of care. I will show my pumpkin math because I used real numbers. I will show my fall story because I am proud of the ending.",
      hintLadder: [
        "Look back at your fall work.",
        "Pick your best 2 or 3.",
        "Use the frame: 'I will show ___ because ___.'"
      ]
    },
    {
      id: "g5.fall.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Write ONE hook sentence to start your showcase. A hook is a surprising fact or a question that makes people want to listen.",
      rubric: {
        level3: "A real attention-grabber (a question or surprising fact) that fits the showcase topic.",
        level2: "An opening that fits the topic but is not very grabby.",
        level1: "A flat opening like 'My project is about...' with no hook."
      },
      exemplar: "Did you know that one big maple tree can grow enough leaves to cover a whole basketball court?",
      hintLadder: [
        "Could you start with a surprising fact or a question?",
        "Make your audience curious.",
        "Tie your hook to your showcase topic."
      ]
    }
  ],
  reflectionPrompt: "A good plan helps you feel calmer when you present. What part of presenting makes you a little nervous, and how could a plan help?",
  misconceptionBank: [
    {
      id: "more-is-better-presentation",
      label: "Tries to show everything in a presentation",
      description: "Crams in every piece of work instead of showing the best few.",
      coachMove: "Have them rank their work and show only the top few — a few done well wins."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "What Makes You Lean In?",
      prompt:
        "Think of a time a friend or a show started talking and you REALLY wanted to hear more. What did they do in the first few seconds to catch your interest?",
      answer:
        "Usually a surprising fact, a fun question, or a cool picture — not a flat 'Today I will talk about...'. That first move is exactly the kind of hook you will plan for your showcase.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Showcase Storyboard",
      challenge:
        "Draw your fall showcase as three boxes: a BEGINNING with your hook, a MIDDLE with your best 2 or 3 pieces, and an ENDING with your big message. Sketch or write what happens in each.",
      steps: [
        "Box 1: write your hook (a question or surprising fact).",
        "Box 2: list the 2 or 3 fall pieces you'll show and one linking sentence.",
        "Box 3: write your big ending message — the one thing to remember.",
        "Read it through: does it flow beginning → middle → ending?"
      ],
      deliverable: "A 3-box storyboard showing your hook, your featured pieces with a linking sentence, and your ending message.",
      choiceBoard: [
        "Draw a 3-box storyboard.",
        "Write a one-page plan with a hook, middle, and ending.",
        "Make three 'cue cards' you could really present from."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Showcase Planner Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "Which is the strongest HOOK to start a showcase?",
          choices: [
            "Hi, my project is about the fall season.",
            "Today I will tell you some things I did.",
            "Did you know one tree can drop over 200,000 leaves in the fall?",
            "Um, so, this is my presentation."
          ],
          answerIndex: 2,
          explanation: "A surprising fact makes the audience curious right away. The others are flat openings with no hook.",
          hintLadder: [
            "Which line makes you want to hear more?",
            "Flat openings just announce the topic.",
            "The surprising '200,000 leaves' fact is the hook."
          ]
        },
        {
          id: "g5.fall.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Plan a mini-showcase: write ONE hook sentence and ONE ending message about any fall topic you like.",
          rubric: {
            level3: "A real attention-grabbing hook AND a clear ending message with one takeaway, both on the same topic.",
            level2: "Both present, but one is weak or off-topic.",
            level1: "Missing the hook or the ending, or both are flat."
          },
          exemplar: "Hook: Have you ever wondered why leaves turn red before they fall? Ending: Fall colors are the trees getting ready to rest for winter.",
          hintLadder: [
            "Start with a question or surprising fact to hook people.",
            "End by saying one big idea to remember.",
            "Keep both on the same topic."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Shake Out the Nerves",
      prompt:
        "Stand up and shake out each arm for 5 seconds, then each leg, then roll your neck slowly side to side. Take one big breath in and let it whoosh out — nerves gone for now.",
      scienceTieIn: "Light movement lets go of tightness in your muscles, which helps quiet the nervous feeling before you present.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which fall piece are you proudest to show, and what is the ONE message you want your audience to remember?",
      badge: { id: "g5-fall-showcase-planner", name: "Showcase Planner", emoji: "📋" },
      estimatedMinutes: 7
    }
  }
};
