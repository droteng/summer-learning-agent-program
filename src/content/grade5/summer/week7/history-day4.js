// Grade 5 Summer History/Civics — Week 7 (History Missions), Day 4.
// Grade-5 counterpart of g6.hist.w7.d4 (cause-and-effect chains), pitched down
// one level: vocab support, a simple domino example, and a paragraph frame.

export const summerG5HistoryW7D4 = {
  id: "g5.summer.hist.w7.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Cause-and-effect chains",
  topicTag: "causal-chains",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.3-5", "C3.D2.His.16.3-5"],
  hook: "In history, one thing rarely happens for just one reason. Today you trace a chain, where each event makes the next one more likely, like falling dominoes.",
  keyTerms: [
    { term: "Cause", definition: "The reason something happens. It makes an effect more likely." },
    { term: "Effect", definition: "The thing that happens because of a cause." },
    { term: "Chain", definition: "A line of causes and effects, where each one leads to the next." }
  ],
  miniLesson: [
    "A cause makes an effect more likely. Then that effect can become the cause of the next event. That makes a chain, like dominoes.",
    "A strong chain has links that each make sense. If one link does not make sense, the chain is weak.",
    "Try not to say 'one big reason' for everything. Most real history has 2 to 5 reasons working together."
  ],
  workedExample: {
    prompt:
      "Why did flying on airplanes become normal after 1950? Build a 3-link chain.",
    steps: [
      "During World War II, engineers built better airplane engines.",
      "After the war, those better engines made new planes that flew farther and cost less.",
      "Cheaper flights, plus more people having money, meant millions of new flyers.",
      "Result: by 1970, flying was normal instead of rare."
    ],
    answer: "Better engines led to cheaper planes, which led to lots of new flyers."
  },
  items: [
    {
      id: "g5.summer.hist.w7.d4.q1",
      type: "multiple_choice",
      stem: "A cause-and-effect chain has at least:",
      choices: [
        "One event.",
        "Five wars.",
        "Three events that have nothing to do with each other.",
        "Two events, where the first makes the second more likely."
      ],
      answerIndex: 3,
      explanation: "A chain needs at least two events, where the first one makes the second more likely to happen.",
      hintLadder: [
        "The word 'chain' means links joined together.",
        "You need more than one link.",
        "At least two connected events."
      ]
    },
    {
      id: "g5.summer.hist.w7.d4.q2",
      type: "multiple_choice",
      stem: "Which is a STRONG cause-and-effect sentence?",
      choices: [
        "Cars exist because the sky is blue.",
        "Cheaper electricity led to more TVs, which led to more people watching shows at home.",
        "It rained because someone sneezed.",
        "School starts in fall because cats like grass."
      ],
      answerIndex: 1,
      explanation: "Each link in the TV example makes real sense. The others connect things that have nothing to do with each other.",
      hintLadder: [
        "Which one has links that actually make sense?",
        "Skip the silly ones.",
        "Cheaper electricity leads to more TVs at home."
      ]
    },
    {
      id: "g5.summer.hist.w7.d4.q3",
      type: "multiple_choice",
      stem: "If one link in a history chain turns out to be false, what happens?",
      choices: [
        "The links after it become weaker, and you may need a different chain.",
        "Nothing, because chains do not need to be true.",
        "The chain gets stronger.",
        "The chain fixes itself."
      ],
      answerIndex: 0,
      explanation: "Each link holds up the next one. If a link is false, everything after it loses support.",
      hintLadder: [
        "Does a chain need every link to hold?",
        "If one link breaks, what happens to the rest?",
        "The links after it get weaker."
      ],
      misconceptionsTargeted: ["one-big-cause"]
    },
    {
      id: "g5.summer.hist.w7.d4.q4",
      type: "short_answer",
      stem:
        "In one or two sentences, explain how many causes most real events in history have, and why saying 'one big cause' is usually too simple.",
      rubric: {
        level3: "Explains that most real events have several causes working together, and that 'one big cause' leaves out the other reasons.",
        level2: "Says there is more than one cause, but the reason it is too simple is unclear.",
        level1: "Says there is only one cause, or gives no reason."
      },
      exemplar:
        "Most real events in history have several causes that work together, usually 2 to 5. Saying 'one big cause' is too simple because it leaves out the other reasons that also helped it happen.",
      hintLadder: [
        "Think of a big event you know.",
        "List the reasons it happened, not just one.",
        "It is usually 2 to 5 reasons, not 1."
      ]
    },
    {
      id: "g5.summer.hist.w7.d4.q5",
      type: "short_answer",
      stem:
        "Pick a change you noticed near you (a new bike lane, a new lunch menu, a new schedule). Fill in this frame: 'First, ___. That led to ___. That led to ___ (the change I noticed).'",
      rubric: {
        level3: "Three links that each make the next more likely, ending at the real change. No magic jumps.",
        level2: "Three links, but one is weak or jumpy.",
        level1: "Only one cause, or events that are not connected."
      },
      exemplar:
        "First, parents saw kids biking in an unsafe spot. That led to the parents asking the city for help. That led to the city building a new bike lane on Elm Street.",
      hintLadder: [
        "Start by picturing the final change.",
        "What happened just before it?",
        "Walk it back one link at a time."
      ]
    }
  ],
  reflectionPrompt: "Today you traced cause-and-effect chains. What is a recent change in your life that had more than one cause?",
  misconceptionBank: [
    {
      id: "one-big-cause",
      label: "Thinks history has one big cause",
      description: "Says a big change happened for one single reason, and skips the chain that led up to it.",
      coachMove: "List the reasons. If only one feels right, you probably need to look a little more."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Knock It Down",
      prompt:
        "I stand in a long line. Tip the first of me over, and we ALL fall, each one knocking over the next. What am I, and what does this teach about history?",
      answer: "Dominoes! Each one knocks over the next, just like a cause-and-effect chain in history, where one event makes the next more likely.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a History Domino Chain",
      challenge:
        "Pick any real or made-up event and build a 4-link cause-and-effect chain that leads up to it, where each link makes the next more likely, with no magic jumps.",
      steps: [
        "Write the final event at the bottom (the last domino to fall).",
        "Work backwards: what event made it likely? That is link 3.",
        "Keep going back to link 2 and link 1, each one causing the next.",
        "Draw it as 4 dominoes or boxes with arrows, and label each link."
      ],
      deliverable: "A 4-link chain diagram with arrows, where each link makes the next more likely.",
      choiceBoard: [
        "Draw the 4-domino chain with labels.",
        "Write the chain as a 'this led to... which led to...' paragraph.",
        "Make a flowchart with boxes and arrows."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Causal Chain Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which chain is the STRONGEST (each link really makes the next one more likely)?",
          choices: [
            "People liked music, so the moon got bigger, so trade grew.",
            "A king wore a red cloak, so it rained, so a war started.",
            "A dry season killed the crops, so food cost more, so more families moved to the city for jobs.",
            "A bell rang, so winter came early, so prices dropped."
          ],
          answerIndex: 2,
          explanation: "The dry-season chain makes sense at every step: less food, so higher prices, so people move for work. The others link things that have nothing to do with each other.",
          hintLadder: [
            "Find the chain where each link really makes sense.",
            "Skip the ones with magic or silly jumps.",
            "Dry season, higher food prices, people move for jobs."
          ]
        },
        {
          id: "g5.summer.hist.w7.d4.arena2",
          type: "short_answer",
          stem: "A friend says 'Big events usually happen for one big reason.' Explain why historians disagree, and give an example with at least two causes.",
          rubric: {
            level3: "Explains that real events usually have several causes working together, with a clear example naming at least two.",
            level2: "Argues for more than one cause, but the example has only one cause or is vague.",
            level1: "Agrees with the friend, or gives no example."
          },
          exemplar: "Historians say most big events have several causes, not one. For example, flying became normal after 1950 because of both better engines from the war AND more people having money to buy tickets. Neither reason alone would have been enough.",
          hintLadder: [
            "How many causes does most real history have?",
            "Pick an event and list more than one cause.",
            "Show that no single cause alone would have been enough."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Domino Wave",
      prompt:
        "Make your body a falling domino chain: tip your head, then roll your shoulders, then your hips, then bend your knees, one motion starting the next, top to bottom. Do it 3 times, slow and smooth.",
      scienceTieIn: "Your brain sends a chain of nerve signals to move each body part in order, a real cause-and-effect chain happening inside you.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of something good that happened to you recently. Trace back at least two causes that worked together to make it happen, not just one.",
      badge: { id: "g5-summer-chain-tracer", name: "Chain Tracer", emoji: "🔗" },
      estimatedMinutes: 7
    }
  }
};
