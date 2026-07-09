// Grade 6 History — Week 7, Day 4.
// Topic: cause-and-effect chains in history.

export const grade6HistoryWeek7Day4 = {
  id: "g6.hist.w7.d4",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Cause-and-effect chains",
  topicTag: "causal-chains",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.6-8", "C3.D2.His.16.6-8"],
  hook: "History rarely has one cause. Today you trace a chain — each link makes the next more likely.",
  miniLesson: [
    "A cause makes an effect more likely. The effect can become the cause of the next event — a chain.",
    "Strong chains have several plausible links. If one link breaks, the next link is less likely.",
    "Avoid 'one big cause' shortcuts. Most real history has 2-5 contributing causes."
  ],
  workedExample: {
    prompt:
      "Why did airplane travel become common after 1950? Build a 3-link chain.",
    steps: [
      "WWII pushed jet engine research, leaving better engines available afterward.",
      "Better engines + new commercial aircraft (e.g., the 707 in 1958) meant longer, faster, cheaper flights.",
      "Cheaper flights + growing middle-class incomes meant millions of new flyers each year.",
      "Result: by 1970, flying was routine instead of rare."
    ],
    answer: "WWII engines → commercial jets → mass middle-class flying."
  },
  items: [
    {
      id: "g6.hist.w7.d4.q1",
      type: "multiple_choice",
      stem: "A cause-and-effect chain has at least:",
      choices: [
        "One link.",
        "Two events where the first makes the second more likely.",
        "Three random events.",
        "Five connected wars."
      ],
      answerIndex: 1,
      explanation: "A chain needs at least two linked events, with the first raising the likelihood of the second.",
      hintLadder: [
        "What does 'chain' imply?",
        "Multiple links.",
        "At least two events."
      ]
    },
    {
      id: "g6.hist.w7.d4.q2",
      type: "multiple_choice",
      stem:
        "Which is a strong cause-and-effect statement?",
      choices: [
        "Cars exist because the sky is blue.",
        "Schools start in fall because cats like grass.",
        "It rained yesterday because someone sneezed.",
        "Cheaper electricity led to wider TV adoption, which led to more home-based entertainment."
      ],
      answerIndex: 3,
      explanation: "Each link names a plausible mechanism. The others are coincidences or nonsense.",
      hintLadder: [
        "Which option's links each make sense?",
        "Skip the absurd ones.",
        "Electricity → TV → home entertainment."
      ]
    },
    {
      id: "g6.hist.w7.d4.q3",
      type: "multiple_choice",
      stem: "If a historical chain has one link that turns out to be false, what happens?",
      choices: [
        "Nothing — chains don't need to be true.",
        "The chain becomes stronger.",
        "The links after that link become less supported; you may need a different chain.",
        "Time travel resets it."
      ],
      answerIndex: 2,
      explanation: "Each link supports the next. Break a link and the support downstream weakens.",
      hintLadder: [
        "Does a chain need every link?",
        "If one link is wrong, what follows?",
        "Less support after the break."
      ],
      misconceptionsTargeted: ["one-big-cause"]
    },
    {
      id: "g6.hist.w7.d4.q4",
      type: "multiple_choice",
      stem:
        "Most real historical events have:",
      choices: [
        "Several contributing causes that combine.",
        "Exactly one cause.",
        "No causes — just luck.",
        "Causes that only experts can see."
      ],
      answerIndex: 0,
      explanation: "History almost always has multiple causes. The 'one big cause' is usually a simplification.",
      hintLadder: [
        "Think of a famous event you know.",
        "List the causes.",
        "Usually 2-5, not 1."
      ]
    },
    {
      id: "g6.hist.w7.d4.q5",
      type: "short_answer",
      stem:
        "Pick a change you noticed in your school or neighborhood (new bike lane, new menu, schedule change). Build a 3-link chain explaining how it might have happened.",
      rubric: {
        level3: "Three plausible links each making the next more likely, ending at the observed change. No magical jumps.",
        level2: "Three links but one is weak or jumpy.",
        level1: "Single cause or unrelated events."
      },
      exemplar:
        "Change: a new bike lane on Elm Street.\n1) Parents noticed unsafe cycling near the school.\n2) PTA gathered signatures and presented to the city council.\n3) Council prioritized the street in the year's budget → bike lane installed.",
      hintLadder: [
        "Start with the final change.",
        "What had to happen just before?",
        "Walk it back one link at a time."
      ]
    }
  ],
  reflectionPrompt: "Today you traced causal chains. What's a recent change in your life that had more than one cause?",
  misconceptionBank: [
    {
      id: "one-big-cause",
      label: "Reduces history to one big cause",
      description: "Says a war or change happened because of a single famous moment, ignoring the chain that led up to it.",
      coachMove: "List the contributing causes. If only one feels right, you probably need to read more sources."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Knock It Down",
      prompt:
        "I stand in a long line. Tip the first of me over, and we ALL fall — each one knocking down the next. What am I, and what does this teach about history?",
      answer: "Dominoes! Each one knocks over the next, just like a cause-and-effect chain in history where one event makes the next one more likely.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build a History Domino Chain",
      challenge:
        "Pick any real or invented event and build a 4-link cause-and-effect chain that leads up to it — where each link makes the next more likely, with no magical jumps.",
      steps: [
        "Write the final event at the bottom (the last domino to fall).",
        "Work backwards: what event made it likely? That's link 3.",
        "Keep going back to link 2 and link 1, each one causing the next.",
        "Draw it as 4 dominoes or boxes with arrows, and label each link."
      ],
      deliverable: "A 4-link causal chain diagram with arrows, each link plausibly causing the next.",
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
          id: "g6.hist.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which chain is the STRONGEST cause-and-effect chain (each link plausibly making the next more likely)?",
          choices: [
            "People liked music, so the moon got bigger, so trade increased.",
            "A king wore a red cloak, so it rained, so a war started.",
            "A drought killed crops, so food prices rose, so more families left the countryside for city jobs.",
            "A bell rang, so winter came early, so prices fell."
          ],
          answerIndex: 2,
          explanation: "The drought chain has a real mechanism at every link: less food → higher prices → people move for work. The others connect events that have no plausible cause-and-effect link.",
          hintLadder: [
            "Look for the chain where each link actually makes sense.",
            "Skip the ones with magical or unrelated jumps.",
            "Drought → high food prices → people move for work."
          ]
        },
        {
          id: "g6.hist.w7.d4.arena2",
          type: "short_answer",
          stem: "A friend says 'World events usually happen because of one big cause.' Explain why historians disagree, and give an example with at least two contributing causes.",
          rubric: {
            level3: "Explains that real events usually have several combining causes, not one, with a clear example naming at least two contributing causes.",
            level2: "Argues for multiple causes but the example has only one cause or is vague.",
            level1: "Agrees with the friend or gives no example."
          },
          exemplar: "Historians say most big events have several causes that combine, not one. For example, air travel became common after 1950 because of both better jet engines from WWII research AND rising middle-class incomes — neither alone would have been enough.",
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
        "Make your body a falling domino chain: tip your head, then roll your shoulders, then your hips, then bend your knees — one motion triggering the next, top to bottom. Do it 3 times, slow and smooth.",
      scienceTieIn: "Your brain fires a chain of nerve signals to move each body part in sequence — a real cause-and-effect chain inside you, which you'll study in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of something good that happened to you recently. Trace back at least two causes that combined to make it happen — not just one.",
      badge: { id: "chain-tracer", name: "Chain Tracer", emoji: "🔗" },
      estimatedMinutes: 7
    }
  }
};
