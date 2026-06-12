// Grade 6 History — Week 7, Day 2.
// Topic: US civics foundations.

export const grade6HistoryWeek7Day2 = {
  id: "g6.hist.w7.d2",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "US civics foundations",
  topicTag: "us-civics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.4.6-8", "C3.D2.Civ.8.6-8"],
  hook: "The U.S. government works through balance. Today you see why three branches exist and what each one does.",
  miniLesson: [
    "Legislative branch (Congress) writes laws. Congress has two parts: Senate (2 per state) and House (proportional to state population).",
    "Executive branch (President) carries out laws. The President can veto a law but can't write one.",
    "Judicial branch (Supreme Court) decides whether laws follow the Constitution. Each branch can check the others — 'checks and balances'."
  ],
  workedExample: {
    prompt:
      "Congress passes a new law. The President doesn't like it. What can happen?",
    steps: [
      "The President can sign the law — it takes effect.",
      "Or the President can veto it — sending it back.",
      "If Congress disagrees with the veto, they can override with a two-thirds vote in both chambers.",
      "If the law is signed and someone says it violates the Constitution, courts can decide."
    ],
    answer: "Sign, veto, override, judicial review — checks and balances in action."
  },
  items: [
    {
      id: "g6.hist.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which branch WRITES the laws?",
      choices: ["Executive", "Legislative", "Judicial", "All three together"],
      answerIndex: 1,
      explanation: "Congress (Legislative) writes laws. The Executive enforces and the Judicial interprets.",
      hintLadder: [
        "Writing = legislating.",
        "Congress = legislature.",
        "Legislative branch."
      ]
    },
    {
      id: "g6.hist.w7.d2.q2",
      type: "multiple_choice",
      stem: "How many senators does each U.S. state get?",
      choices: ["1", "2", "Proportional to population", "Decided by the governor"],
      answerIndex: 1,
      explanation: "Every state — large or small — gets 2 senators. The House is the proportional chamber.",
      hintLadder: [
        "Senate is the equal-representation chamber.",
        "Number per state is the same.",
        "Two each."
      ]
    },
    {
      id: "g6.hist.w7.d2.q3",
      type: "multiple_choice",
      stem: "What is a 'veto'?",
      choices: [
        "A type of law.",
        "The President's refusal to sign a bill into law.",
        "A Supreme Court decision.",
        "A type of election."
      ],
      answerIndex: 1,
      explanation: "Veto is the President's tool to push back on Congress. It can still be overridden by a two-thirds vote.",
      hintLadder: [
        "Who has a veto?",
        "What do they do with it?",
        "Refuse to sign — a veto."
      ]
    },
    {
      id: "g6.hist.w7.d2.q4",
      type: "multiple_choice",
      stem:
        "Why do we have three branches instead of just one big government?",
      choices: [
        "It looks fancy.",
        "Each branch can check the others, so no single person or group has all the power.",
        "Tradition only.",
        "It's faster."
      ],
      answerIndex: 1,
      explanation: "Separation of powers prevents tyranny. Each branch limits the others.",
      hintLadder: [
        "What does 'checks and balances' mean?",
        "Each branch limits the others.",
        "Prevents any one person from having all the power."
      ],
      misconceptionsTargeted: ["thinks-president-makes-laws"]
    },
    {
      id: "g6.hist.w7.d2.q5",
      type: "short_answer",
      stem:
        "Imagine a friend complains: 'The President should just make any law they want.' Write a 2-sentence respectful response naming one risk and one example of a check.",
      rubric: {
        level3: "Names a specific risk (e.g., bad laws / no oversight / no minority protection) and a specific check (e.g., Congress writes laws, courts review them) in two clear sentences.",
        level2: "Has both elements but one is vague.",
        level1: "Restates the friend's view or gives a one-sentence opinion."
      },
      exemplar:
        "If the President could make any law alone, there'd be no check on bad ideas — even well-meant ones. That's why Congress writes laws and courts can review whether a law follows the Constitution.",
      hintLadder: [
        "What's the risk of one person making all the rules?",
        "Which branch checks them?",
        "Write both in two sentences."
      ]
    }
  ],
  reflectionPrompt: "Today you saw why power is split. Where in your own life is power split — and what happens if one side has too much?",
  misconceptionBank: [
    {
      id: "thinks-president-makes-laws",
      label: "Thinks the President writes laws",
      description: "Confuses signing a law with writing it. The President can veto but not write.",
      coachMove: "Map the steps: Congress writes → both chambers pass → President signs (or vetoes). Writing happens before the President sees it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Boss or Three?",
      prompt:
        "Would you rather live in a club where ONE person makes every rule and can never be overruled, OR a club where three groups each have to agree before a rule sticks? Pick one and give a reason.",
      answer: "There's no single right pick — but most kids choose the three-group club, because if one leader has a bad idea, the others can stop it. That's exactly why the U.S. has three branches.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Three-Branch Clubhouse",
      challenge:
        "Invent a club (skateboarding, gaming, baking — your call) and give it three 'branches' like the U.S. government, so no one person controls everything.",
      steps: [
        "Name your club and what it does.",
        "Create a 'writes the rules' branch, a 'carries out the rules' branch, and a 'checks the rules are fair' branch.",
        "Give one example of how one branch could CHECK another (like a veto or an override).",
        "Draw or chart the three branches with arrows showing the checks."
      ],
      deliverable: "A labeled diagram of your club's three branches with at least one check-and-balance arrow.",
      choiceBoard: [
        "Draw the three-branch diagram.",
        "Write a short 'club constitution' listing each branch's job.",
        "Act it out as a 3-character script with a friend or family member."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Three Branches Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.hist.w7.d2.arena1",
          type: "multiple_choice",
          stem: "Congress passes a bill, the President vetoes it, and Congress votes again to override the veto. What fraction of each chamber is needed to override?",
          choices: [
            "A simple majority (just over half)",
            "Two-thirds of both chambers",
            "Three-quarters of the states",
            "Only the Supreme Court can override"
          ],
          answerIndex: 1,
          explanation: "A presidential veto can be overridden by a two-thirds vote in both the House and the Senate. That high bar is part of checks and balances.",
          hintLadder: [
            "Overriding a veto is harder than passing a normal bill.",
            "It's more than half but not three-quarters.",
            "Two-thirds of both chambers."
          ]
        },
        {
          id: "g6.hist.w7.d2.arena2",
          type: "short_answer",
          stem: "Explain how the judicial branch can 'check' the other two branches. Give one concrete example.",
          rubric: {
            level3: "Explains that courts can decide a law or action is unconstitutional and strike it down, with a concrete example (e.g., a court rules a new law violates the Constitution).",
            level2: "Mentions courts reviewing laws but the example is vague or missing.",
            level1: "Confuses the judicial branch with writing or enforcing laws."
          },
          exemplar: "The Supreme Court can rule that a law passed by Congress and signed by the President violates the Constitution, and then that law can no longer be enforced — for example, striking down a law that unfairly limited free speech.",
          hintLadder: [
            "What does the judicial branch decide about laws?",
            "Courts compare laws to the Constitution.",
            "If a law breaks the Constitution, the court can strike it down."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Balance the Branches",
      prompt:
        "Stand on one foot for 'legislative,' switch to the other for 'executive,' then hold both arms out wide and balance for 'judicial.' Hold each for 10 seconds. Feel how balance takes all three working together.",
      scienceTieIn: "Balancing trains your inner ear and brain to work as a team — just like the branches, no single part keeps you steady alone, something you'll explore in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time someone had too much power over a group (a game, a class, a team). What went wrong, and how could a 'check' have helped?",
      badge: { id: "balance-keeper", name: "Balance Keeper", emoji: "⚖️" },
      estimatedMinutes: 7
    }
  }
};
