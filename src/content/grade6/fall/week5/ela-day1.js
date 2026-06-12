// Grade 6 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 1.
// Topic: making a strong claim — the heart of persuasion.

export const fallG6ElaW5D1 = {
  id: "g6.fall.ela.w5.d1",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Make a claim — the heart of persuasion",
  topicTag: "persuasive-claim",
  estimatedMinutes: 17,
  standardsRefs: ["CCSS.W.6.1", "CCSS.W.6.1.A"],
  hook: "Every persuasive piece — a letter, a speech, an ad — starts with a claim: a clear position you want others to accept. Today you learn to write claims that land.",
  miniLesson: [
    "A claim is a statement that takes a position and can be argued: 'Our school should add a recycling program.'",
    "A strong claim is specific and arguable — not a fact everyone agrees on, and not just an opinion of taste.",
    "'Pizza tastes good' is a preference; 'The cafeteria should offer a vegetarian option daily' is a claim you can support with reasons."
  ],
  workedExample: {
    prompt: "Turn this weak topic into a strong claim: 'recess.'",
    steps: [
      "Pick a position about recess.",
      "Make it specific and arguable.",
      "Check: could someone reasonably disagree? Yes.",
      "Result: 'Sixth graders should get 20 minutes of recess every day.'"
    ],
    answer: "Sixth graders should get 20 minutes of recess every day."
  },
  items: [
    {
      id: "g6.fall.ela.w5.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is a CLAIM (an arguable position)?",
      choices: [
        "The sky is blue.",
        "Our town should build a new bike lane on Main Street.",
        "I had cereal for breakfast.",
        "Water is wet."
      ],
      answerIndex: 1,
      explanation: "It takes a position someone could agree or disagree with — that's a claim. The others are facts or personal statements.",
      hintLadder: [
        "A claim is something you could argue for or against.",
        "Which one could a reasonable person disagree with?",
        "The bike-lane statement takes a position."
      ]
    },
    {
      id: "g6.fall.ela.w5.d1.q2",
      type: "multiple_choice",
      stem: "Why is 'Chocolate is the best flavor' a weak claim for a persuasive essay?",
      choices: [
        "It's too long",
        "It's just a matter of taste, so you can't really argue it with reasons",
        "It's a fact",
        "It has no verb"
      ],
      answerIndex: 1,
      explanation: "Pure preferences can't be supported with reasons the way an arguable claim can.",
      hintLadder: [
        "Can you give EVIDENCE that one flavor is 'best'?",
        "It's about personal taste.",
        "Taste claims aren't really arguable."
      ],
      misconceptionsTargeted: ["opinion-equals-claim"]
    },
    {
      id: "g6.fall.ela.w5.d1.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST claim?",
      choices: [
        "Things should change.",
        "Schools are places.",
        "Our school should start classes 30 minutes later to help students get enough sleep.",
        "I like later mornings."
      ],
      answerIndex: 2,
      explanation: "It's specific, takes a clear position, and can be supported with reasons (sleep research).",
      hintLadder: [
        "Look for specific + arguable + supportable.",
        "Which one could you back with reasons?",
        "The later-start claim is specific and arguable."
      ]
    },
    {
      id: "g6.fall.ela.w5.d1.q4",
      type: "short_answer",
      stem: "Write a strong, specific claim about something at your school or in your community that you'd like to change.",
      rubric: {
        level3: "States a specific, arguable position (not just taste) that could be supported with reasons.",
        level2: "Takes a position but is vague or borders on pure preference.",
        level1: "States a fact, a taste preference, or something not arguable."
      },
      exemplar: "Our neighborhood should add a crosswalk near the park because kids cross a busy street there every day.",
      hintLadder: [
        "Pick something you actually care about changing.",
        "State your position clearly.",
        "Make sure someone could reasonably disagree."
      ]
    },
    {
      id: "g6.fall.ela.w5.d1.q5",
      type: "short_answer",
      stem: "Explain the difference between a CLAIM and a FACT, with one example of each.",
      rubric: {
        level3: "Clearly distinguishes (a fact is verifiable/agreed; a claim takes an arguable position) AND gives a correct example of each.",
        level2: "Distinguishes them but one example is off, or the distinction is fuzzy.",
        level1: "Confuses the two or gives no clear examples."
      },
      exemplar: "A fact is something true that everyone can check, like 'a week has 7 days.' A claim takes a position you can argue, like 'students should have less homework.'",
      hintLadder: [
        "Can everyone verify a fact?",
        "Can people reasonably disagree with a claim?",
        "Give one example of each."
      ]
    }
  ],
  reflectionPrompt: "What's one change you genuinely want to argue for this fall? Save your claim — you'll build a letter around it this week.",
  misconceptionBank: [
    {
      id: "opinion-equals-claim",
      label: "Confuses a taste preference with an arguable claim",
      description: "Thinks 'I like X' is the same as a claim that can be supported with reasons.",
      coachMove: "Ask: 'Could you give someone EVIDENCE for this, or is it just what you personally like?'"
    }
  ]
};
