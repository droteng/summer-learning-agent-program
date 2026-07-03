// Grade 5 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 1.
// Grade 5 counterpart of g6.fall.ela.w5.d1. Same topic (making a claim — the
// heart of persuasion) pitched down to Grade 5: simple opinion-vs-claim
// language, paragraph-frame support, extra scaffolding for ages 10–11.

export const fallG5ElaW5D1 = {
  id: "g5.fall.ela.w5.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Make a claim — the heart of persuasion",
  topicTag: "persuasive-claim",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1", "CCSS.ELA-LITERACY.W.5.1.A"],
  hook: "Every letter, poster, or speech that tries to change your mind starts with a claim: a clear idea you want people to agree with. Today you learn to write claims that are easy to argue.",
  miniLesson: [
    "A claim is a sentence that says what you think and CAN be argued: 'Our class should have a class pet.'",
    "A strong claim tells exactly what you want AND could make someone say 'I agree' or 'I don't.' If everyone already agrees, it isn't a claim — it's just a fact.",
    "'Recess is fun' is only a taste opinion. 'Fifth graders should get 20 minutes of recess every day' is a claim you can back up with reasons."
  ],
  workedExample: {
    prompt: "Turn this weak topic into a strong claim: 'library books.'",
    steps: [
      "Pick what you think about library books.",
      "Say exactly what should happen.",
      "Check: could someone disagree? Yes.",
      "Result: 'Our class should visit the library once a week.'"
    ],
    answer: "Our class should visit the library once a week."
  },
  items: [
    {
      id: "g5.fall.ela.w5.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is a CLAIM (an idea you can argue)?",
      choices: [
        "The sky is blue.",
        "Our school should plant a fall garden.",
        "I ate toast this morning.",
        "Leaves fall in autumn."
      ],
      answerIndex: 1,
      explanation: "It says what should happen and someone could agree or disagree — that is a claim. The others are just facts.",
      hintLadder: [
        "A claim is something you could argue for or against.",
        "Which one could a person say 'I disagree' about?",
        "The fall-garden sentence takes a side."
      ]
    },
    {
      id: "g5.fall.ela.w5.d1.q2",
      type: "multiple_choice",
      stem: "Why is 'Apples are the best fruit' a weak claim for a persuasive paragraph?",
      choices: [
        "It is too long",
        "It is only about taste, so you cannot really back it up with reasons",
        "It is a fact",
        "It has no capital letter"
      ],
      answerIndex: 1,
      explanation: "A taste opinion cannot be proven with reasons the way a real claim can.",
      hintLadder: [
        "Can you give PROOF that one fruit is 'best'?",
        "It is just what someone likes to eat.",
        "Taste opinions are not really arguable."
      ],
      misconceptionsTargeted: ["opinion-equals-claim"]
    },
    {
      id: "g5.fall.ela.w5.d1.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST claim?",
      choices: [
        "Things should be better.",
        "Schools have rooms.",
        "Our school should add a 15-minute reading time after lunch.",
        "I like quiet time."
      ],
      answerIndex: 2,
      explanation: "It is exact, takes a clear side, and you could back it up with reasons.",
      hintLadder: [
        "Look for exact + arguable + something you can support.",
        "Which one could you give reasons for?",
        "The reading-time claim is specific and arguable."
      ]
    },
    {
      id: "g5.fall.ela.w5.d1.q4",
      type: "short_answer",
      stem: "Write a strong, specific claim about something at your school or in your town that you would like to change. Use the frame: 'Our ___ should ___.'",
      rubric: {
        level3: "States a specific, arguable claim (not just a taste opinion) that someone could agree or disagree with.",
        level2: "Takes a side but is vague or is really just a taste opinion.",
        level1: "States a fact, a taste opinion, or something no one could argue."
      },
      exemplar: "Our town should add a crosswalk near the park because kids cross a busy street there every day.",
      hintLadder: [
        "Pick something you really care about changing.",
        "Say clearly what you want to happen.",
        "Make sure someone could disagree with it."
      ]
    },
    {
      id: "g5.fall.ela.w5.d1.q5",
      type: "short_answer",
      stem: "Explain the difference between a CLAIM and a FACT. Give one example of each.",
      rubric: {
        level3: "Clearly explains that a fact is true and can be checked, while a claim takes a side you can argue, AND gives a correct example of each.",
        level2: "Explains the difference but one example is off, or the idea is fuzzy.",
        level1: "Mixes up the two or gives no clear examples."
      },
      exemplar: "A fact is true and easy to check, like 'a week has 7 days.' A claim takes a side you can argue, like 'students should have less homework.'",
      hintLadder: [
        "Can everyone check a fact?",
        "Can people disagree with a claim?",
        "Write one example of each."
      ]
    }
  ],
  reflectionPrompt: "What is one change you really want to argue for this fall? Save your claim — you will build a letter around it all week.",
  misconceptionBank: [
    {
      id: "opinion-equals-claim",
      label: "Confuses a taste opinion with an arguable claim",
      description: "Thinks 'I like X' is the same as a claim that can be backed up with reasons.",
      coachMove: "Ask: 'Could you give someone PROOF for this, or is it just what you personally like?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Claim or Just a Favorite?",
      prompt:
        "Two fall sentences: (A) 'Pumpkin pie is the yummiest fall treat.' (B) 'Our school should host a fall harvest day.' Which one is a CLAIM you could argue with reasons — and which is just a favorite?",
      answer: "(B) is a claim — you can back it up with reasons (fun, teamwork, raising money). (A) is just a favorite taste, so you cannot really argue it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Change Poster",
      challenge:
        "Pick one thing you would like to change at your school or town this fall. Make a poster whose big headline is a strong, specific claim — large enough to read from across the room.",
      steps: [
        "Brainstorm a fall change you really care about.",
        "Write it as ONE specific claim using 'Our ___ should ___.'",
        "Check: could someone disagree? If not, make it sharper.",
        "Design the poster with your claim as the giant headline."
      ],
      deliverable: "A poster (drawn or typed) with one bold, arguable claim as its headline.",
      choiceBoard: [
        "Draw a poster with your claim as the headline.",
        "Record a 15-second campaign slogan built around your claim.",
        "Make a 3-panel comic where a character turns a vague opinion into a strong claim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Claim Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w5.d1.arena1",
          type: "multiple_choice",
          stem: "Which sentence is the STRONGEST persuasive claim?",
          choices: [
            "Autumn has leaves.",
            "I think fall is nice.",
            "Our school should plant trees on the front lawn for shade and clean air.",
            "Trees are real."
          ],
          answerIndex: 2,
          explanation: "It is specific, takes a clear side, and you can back it up with reasons. The others are facts or vague favorites.",
          hintLadder: [
            "A strong claim is specific AND arguable.",
            "Which one could you back up with reasons?",
            "The tree-planting sentence takes a side you can support."
          ]
        },
        {
          id: "g5.fall.ela.w5.d1.arena2",
          type: "short_answer",
          stem: "Take this weak topic — 'the cafeteria' — and turn it into a strong, specific claim.",
          rubric: {
            level3: "Produces a specific, arguable claim about the cafeteria (not a fact or taste opinion) that someone could disagree with.",
            level2: "Takes a side but it is vague or is really just a taste opinion.",
            level1: "States a fact, a taste opinion, or something no one could argue."
          },
          exemplar: "The cafeteria should offer a warm vegetable option every day so kids who do not eat meat get a full meal.",
          hintLadder: [
            "Pick a clear side about the cafeteria.",
            "Make it exact — what should change?",
            "Check that someone could disagree."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Stand & Declare",
      prompt:
        "Stand tall like you are about to give a speech. Reach both arms up high as you say your claim out loud, then sweep them down and shake them out. Repeat 4 times, a little louder each round.",
      scienceTieIn: "Standing tall with a big, confident pose can help lower stress and make you feel braver before speaking up.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one change you would really argue for this fall? Write your claim in one bold sentence — you will build a whole letter around it this week.",
      badge: { id: "g5-fall-claim-champion", name: "Claim Champion", emoji: "📣" },
      estimatedMinutes: 7
    }
  }
};
