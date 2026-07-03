// Grade 5 Summer History/Civics — Week 7 (History Missions), Day 2.
// Grade-5 counterpart of g6.hist.w7.d2 (US civics foundations), pitched down one
// level: vocab support, concrete "club" examples, and a paragraph frame.

export const summerG5HistoryW7D2 = {
  id: "g5.summer.hist.w7.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "US civics foundations",
  topicTag: "us-civics",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.4.3-5", "C3.D2.Civ.8.3-5"],
  hook: "The U.S. government is split into three parts on purpose. Today you learn what each part does and why sharing power keeps things fair.",
  keyTerms: [
    { term: "Branch", definition: "One of the three parts of the government, each with its own job." },
    { term: "Veto", definition: "When the President says no to a bill and refuses to sign it into law." },
    { term: "Checks and balances", definition: "Rules that let each branch stop the others from having too much power." }
  ],
  miniLesson: [
    "The Legislative branch is Congress. Congress writes the laws. It has two parts: the Senate (2 people per state) and the House (more people for states with more people).",
    "The Executive branch is the President. The President carries out the laws, but cannot write them. The President can veto (say no to) a bill.",
    "The Judicial branch is the courts, led by the Supreme Court. It decides if a law follows the Constitution. Each branch can check the others, so no one has all the power."
  ],
  workedExample: {
    prompt:
      "Congress writes a new law, but the President does not like it. What can happen?",
    steps: [
      "The President can sign the law, and then it starts.",
      "Or the President can veto it, which means say no and send it back.",
      "If Congress still wants it, they can vote again to override the veto.",
      "If someone thinks the law breaks the Constitution, the courts can decide."
    ],
    answer: "Sign, veto, override, or court review. Each branch checks the others."
  },
  items: [
    {
      id: "g5.summer.hist.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which branch WRITES the laws?",
      choices: ["Executive (the President)", "Legislative (Congress)", "Judicial (the courts)", "All three at once"],
      answerIndex: 1,
      explanation: "Congress, the Legislative branch, writes the laws. The President carries them out, and the courts decide what they mean.",
      hintLadder: [
        "The branch whose name sounds like 'legislate' writes laws.",
        "Congress is the law-writing branch.",
        "It is the Legislative branch."
      ]
    },
    {
      id: "g5.summer.hist.w7.d2.q2",
      type: "multiple_choice",
      stem: "How many senators does each U.S. state get?",
      choices: ["1", "2", "One for every million people", "The governor decides"],
      answerIndex: 1,
      explanation: "Every state, big or small, gets exactly 2 senators. The House is the part that changes with population.",
      hintLadder: [
        "In the Senate, every state is equal.",
        "Each state gets the same number.",
        "The answer is 2."
      ]
    },
    {
      id: "g5.summer.hist.w7.d2.q3",
      type: "multiple_choice",
      stem: "What does it mean when the President 'vetoes' a bill?",
      choices: [
        "The President writes a brand-new law.",
        "The President says no and refuses to sign the bill.",
        "The President becomes a judge.",
        "The President holds an election."
      ],
      answerIndex: 1,
      explanation: "A veto is the President saying no to a bill. Congress can still try to override it with a big enough vote.",
      hintLadder: [
        "A veto is a way of saying no.",
        "Who signs bills into law? The President.",
        "A veto means the President refuses to sign."
      ]
    },
    {
      id: "g5.summer.hist.w7.d2.q4",
      type: "short_answer",
      stem:
        "In one or two sentences, explain why the U.S. has three branches instead of one big government. Use the idea of sharing power.",
      rubric: {
        level3: "Clearly explains that three branches share power so each can check the others, and no one person or group gets all the power.",
        level2: "Mentions three branches or checks, but the reason is unclear.",
        level1: "Off topic, or just says 'because that is the rule.'"
      },
      exemplar:
        "The U.S. has three branches so that power is shared and each branch can check the others. That way, no single person or group can take all the power.",
      hintLadder: [
        "Think about the words 'checks and balances.'",
        "Each branch can stop the others.",
        "It keeps one person from having all the power."
      ],
      misconceptionsTargeted: ["thinks-president-makes-laws"]
    },
    {
      id: "g5.summer.hist.w7.d2.q5",
      type: "short_answer",
      stem:
        "A friend says: 'The President should just make any law they want.' Fill in this frame to reply: 'That could be risky because ___. One check is that ___.'",
      rubric: {
        level3: "Names a clear risk (like no one to stop a bad law) and a clear check (like Congress writes laws or courts review them).",
        level2: "Has a risk and a check, but one of them is vague.",
        level1: "Repeats the friend's idea or gives only an opinion with no check."
      },
      exemplar:
        "That could be risky because one person with all the power could make unfair laws. One check is that Congress writes the laws and the courts can decide if a law breaks the Constitution.",
      hintLadder: [
        "What is the risk if one person makes all the rules?",
        "Which branch can stop them?",
        "Name a risk and a check in the frame."
      ]
    }
  ],
  reflectionPrompt: "Today you saw why power is shared. Where in your own life is power shared, and what could go wrong if one side had too much?",
  misconceptionBank: [
    {
      id: "thinks-president-makes-laws",
      label: "Thinks the President writes laws",
      description: "Mixes up signing a law with writing it. The President can veto a bill, but cannot write it.",
      coachMove: "List the steps: Congress writes the bill, both parts pass it, then the President signs or vetoes. The writing happens before the President ever sees it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Boss or Three?",
      prompt:
        "Would you rather join a club where ONE person makes every rule and can never be stopped, or a club where three groups must agree before a rule sticks? Pick one and give a reason.",
      answer: "There is no single right pick, but most kids choose the three-group club. If one leader has a bad idea, the others can stop it. That is exactly why the U.S. has three branches.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Design a Three-Branch Clubhouse",
      challenge:
        "Invent a club (skateboarding, gaming, baking, your choice) and give it three branches like the U.S. government, so no one person controls everything.",
      steps: [
        "Name your club and say what it does.",
        "Make a 'writes the rules' branch, a 'carries out the rules' branch, and a 'checks the rules are fair' branch.",
        "Give one example of how one branch could check another, like a veto.",
        "Draw the three branches with arrows showing the checks."
      ],
      deliverable: "A labeled drawing of your club's three branches with at least one check arrow.",
      choiceBoard: [
        "Draw the three-branch diagram.",
        "Write a short 'club rulebook' listing each branch's job.",
        "Act it out as a 3-person skit with family."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Three Branches Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w7.d2.arena1",
          type: "multiple_choice",
          stem: "The President vetoes a bill. Which branch can vote again to override the veto and pass it anyway?",
          choices: [
            "The Judicial branch (the courts)",
            "The Legislative branch (Congress)",
            "The state governors",
            "No one can override a veto"
          ],
          answerIndex: 1,
          explanation: "Congress, the Legislative branch, can override a veto by voting again with a big enough majority. This is a check on the President's power.",
          hintLadder: [
            "Which branch wrote the bill in the first place?",
            "It is the same branch that makes laws.",
            "Congress can override a veto."
          ]
        },
        {
          id: "g5.summer.hist.w7.d2.arena2",
          type: "short_answer",
          stem: "Explain one way the courts (the Judicial branch) can 'check' the other two branches. Give one example.",
          rubric: {
            level3: "Explains that courts can decide a law breaks the Constitution and stop it, with a clear example.",
            level2: "Mentions courts checking laws, but the example is vague or missing.",
            level1: "Mixes up the courts with writing or carrying out laws."
          },
          exemplar: "The courts can decide that a law breaks the Constitution and then it cannot be used. For example, if a law unfairly stopped people from speaking freely, a court could strike it down.",
          hintLadder: [
            "What do the courts decide about laws?",
            "They compare a law to the Constitution.",
            "If a law breaks the Constitution, the court can stop it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Balance the Branches",
      prompt:
        "Stand on one foot for 'legislative,' switch feet for 'executive,' then hold both arms out wide for 'judicial.' Hold each for 10 seconds. Feel how balance needs all three.",
      scienceTieIn: "Balancing trains your inner ear and brain to work as a team, just like the branches, and no single part keeps you steady alone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time someone had too much power over a group (a game, a class, a team). What went wrong, and how could a 'check' have helped?",
      badge: { id: "g5-summer-balance-keeper", name: "Balance Keeper", emoji: "⚖️" },
      estimatedMinutes: 7
    }
  }
};
