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
  estimatedMinutes: 18,
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
        "Cheaper electricity led to wider TV adoption, which led to more home-based entertainment.",
        "It rained yesterday because someone sneezed.",
        "Schools start in fall because cats like grass."
      ],
      answerIndex: 1,
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
        "The links after that link become less supported; you may need a different chain.",
        "The chain becomes stronger.",
        "Time travel resets it."
      ],
      answerIndex: 1,
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
        "Exactly one cause.",
        "Several contributing causes that combine.",
        "No causes — just luck.",
        "Causes that only experts can see."
      ],
      answerIndex: 1,
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
  ]
};
