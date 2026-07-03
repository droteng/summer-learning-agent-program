// Grade 7 World/Current Affairs — Summer History Missions, Week 7, Day 4.
// Topic: civics & government — how decisions and laws get made (branches,
// checks and balances, and how citizens participate).

export const summerG7WorldW7D4 = {
  id: "g7.summer.world.w7.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "How decisions and laws get made: branches, checks & participation",
  topicTag: "civics-government",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.4.7", "C3.D2.Civ.6.7"],
  hook: "The history you've studied all week is shaped by decisions — who gets to make the rules, and how. Today you go behind the scenes of government: how a law actually gets made, why power is split into branches that check each other, and how ordinary people push those decisions.",
  miniLesson: [
    "In many governments power is split into three branches: the LEGISLATIVE branch makes laws, the EXECUTIVE branch carries them out and enforces them, and the JUDICIAL branch interprets them and decides if they follow the constitution.",
    "CHECKS AND BALANCES mean no branch acts alone. A legislature may pass a bill, but an executive can veto it, and courts can strike it down if it breaks the constitution — so each branch can limit the others, preventing any one from grabbing too much power.",
    "Decisions aren't made only by officials. Citizens participate by voting, contacting representatives, joining peaceful protests, signing petitions, and serving on juries. Participation is how the public pushes government to act — and how leaders are held accountable."
  ],
  workedExample: {
    prompt: "Trace how a bill to add bike lanes might become a law, and show where checks and balances appear.",
    steps: [
      "Citizens petition and testify, so representatives in the legislative branch propose a bike-lane bill.",
      "The legislature debates and votes; if it passes, the bill goes to the executive (a mayor or governor).",
      "The executive can sign it into law OR veto it — a check on the legislature; the legislature may override the veto with a large enough vote.",
      "If someone argues the law is unconstitutional, the judicial branch (a court) reviews it and can strike it down — a further check."
    ],
    answer: "The legislature writes and passes the bill, the executive signs or vetoes it, and courts can review it — each step lets one branch check another, with citizens driving the process."
  },
  items: [
    {
      id: "g7.summer.world.w7.d4.q1",
      type: "multiple_choice",
      stem: "Which branch of government has the main job of MAKING laws?",
      choices: [
        "The judicial branch",
        "The legislative branch",
        "The executive branch",
        "The military"
      ],
      answerIndex: 1,
      explanation: "The legislative branch (such as a congress or parliament) writes and passes laws. The executive enforces them and the judicial branch interprets them.",
      hintLadder: [
        "Which branch is made of representatives who debate and vote on bills?",
        "'Legislation' means law-making.",
        "The legislative branch makes the laws."
      ]
    },
    {
      id: "g7.summer.world.w7.d4.q2",
      type: "multiple_choice",
      stem: "A legislature passes a bill, but the president refuses to sign it and sends it back. This power is called a:",
      choices: [
        "Veto",
        "Verdict",
        "Petition",
        "Filibuster"
      ],
      answerIndex: 0,
      explanation: "A veto is the executive's power to reject a bill — a classic check on the legislative branch. A verdict is a court decision, and a petition is a citizen request.",
      hintLadder: [
        "It's a power of the executive branch over new bills.",
        "It's how a president rejects a bill.",
        "The word is 'veto.'"
      ],
      misconceptionsTargeted: ["president-makes-laws"]
    },
    {
      id: "g7.summer.world.w7.d4.q3",
      type: "multiple_choice",
      stem: "Why does a government split power into branches that can check each other?",
      choices: [
        "To make government slower for no reason",
        "To prevent any one branch or person from gaining too much power",
        "So only the courts have real power",
        "To make sure laws never change"
      ],
      answerIndex: 1,
      explanation: "Checks and balances exist so no single branch can dominate — each can limit the others, protecting against abuse of power.",
      hintLadder: [
        "What problem happens if one branch controls everything?",
        "Checks and balances limit each branch.",
        "The goal is to stop any one branch from grabbing too much power."
      ]
    },
    {
      id: "g7.summer.world.w7.d4.q4",
      type: "short_answer",
      stem: "Name TWO ways an ordinary citizen (not an elected official) can influence how laws or decisions get made, and explain how each one actually affects government.",
      rubric: {
        level3: "Names two legitimate forms of participation (voting, contacting a representative, peaceful protest, petitioning, campaigning, serving on a jury, attending public meetings) AND explains how each puts real pressure on or shapes government decisions.",
        level2: "Names two forms but explains only one clearly, or explanations are thin.",
        level1: "Names fewer than two, or lists forms without explaining how they affect government."
      },
      exemplar: "Voting lets citizens choose the representatives who write laws, so leaders must listen or risk losing their jobs. Signing and delivering a petition shows officials that many people want a change, which can pressure a representative to propose or support a bill.",
      hintLadder: [
        "Think about what people do besides holding office.",
        "How does each action reach or pressure decision-makers?",
        "Pick two and explain the effect of each on government."
      ]
    },
    {
      id: "g7.summer.world.w7.d4.q5",
      type: "short_answer",
      stem: "Explain how the three branches of government could work together AND check each other in the life of a single new law. Mention all three branches.",
      rubric: {
        level3: "Describes the legislative branch making the law, the executive signing/enforcing (or vetoing) it, and the judicial branch interpreting or reviewing it, AND shows at least one clear 'check' where one branch limits another.",
        level2: "Mentions all three branches but the checks are unclear, or one branch's role is muddled.",
        level1: "Mentions fewer than three branches or confuses their roles."
      },
      exemplar: "The legislative branch writes and passes a new recycling law. The executive branch signs it and its agencies enforce it — but the executive could have vetoed it instead, which is a check. Later, if someone says the law is unconstitutional, the judicial branch reviews it and can strike it down, checking both other branches.",
      hintLadder: [
        "Which branch writes it, which enforces it, which reviews it?",
        "Where can one branch STOP or limit another?",
        "Name a veto, an override, or a court review as the check."
      ]
    }
  ],
  reflectionPrompt: "Think of one rule or law you'd like to see changed. Which branch would have to act, and what could you do as a citizen to push for it?",
  misconceptionBank: [
    {
      id: "president-makes-laws",
      label: "Thinks the president (executive) makes the laws",
      description: "Assumes the most visible leader writes laws, confusing enforcing laws with making them.",
      coachMove: "Separate the jobs: 'The legislature MAKES laws; the executive CARRIES THEM OUT and can sign or veto them. Making and enforcing are different powers.'"
    },
    {
      id: "citizens-cant-influence",
      label: "Believes only officials can affect decisions",
      description: "Thinks ordinary people have no real role between elections.",
      coachMove: "List concrete channels — petitions, contacting reps, public meetings, peaceful protest — and connect each to a real effect on decision-makers."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Ruler or Three Branches?",
      prompt:
        "Would you rather live under a government where ONE person makes the laws, enforces them, AND judges anyone who breaks them — or a government where those three powers are split among branches that can check each other? What could go wrong with the first choice?",
      answer:
        "Splitting the powers is safer: if one person makes, enforces, AND judges, nothing stops them from abusing power. Three branches that check each other keep any single person or group from taking total control — that's the whole point of checks and balances.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: How-a-Law-Is-Made Mission Card",
      challenge:
        "Add a 'Government in Action' card to your History Mission Board. Invent a bill your community needs and map its journey into law, showing every branch and one citizen action.",
      steps: [
        "Name your bill and the real problem it solves.",
        "Draw its path: legislature proposes and votes, executive signs or vetoes, courts can review.",
        "Mark at least ONE check where a branch can stop or limit another.",
        "Add one citizen action (a petition, testimony, or vote) that pushed the bill forward."
      ],
      deliverable: "One 'how a law is made' mission card showing all three branches, at least one check, and one citizen action.",
      choiceBoard: [
        "Draw a flowchart of the bill's journey with the branches labeled.",
        "Write a short 'newsroom report' narrating the bill becoming law.",
        "Design a board-game-style path where players move a bill past each branch's check."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Civics Architect Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.world.w7.d4.arena1",
          type: "multiple_choice",
          stem: "A court rules that a newly passed law violates the constitution and cannot be enforced. This is an example of:",
          choices: [
            "The legislative branch checking the executive",
            "The judicial branch checking the legislative branch",
            "The executive branch making a new law",
            "A citizen petition"
          ],
          answerIndex: 1,
          explanation: "Courts belong to the judicial branch, and striking down a law made by the legislature is the judicial branch checking the legislative branch.",
          hintLadder: [
            "Which branch do courts belong to?",
            "Whose law is being struck down?",
            "It's the judicial branch limiting the law-makers."
          ]
        },
        {
          id: "g7.summer.world.w7.d4.arena2",
          type: "short_answer",
          stem: "A new law you strongly support just got vetoed by the executive. Describe TWO legitimate things that could still happen (by a branch or by citizens) to get it passed anyway.",
          rubric: {
            level3: "Names two legitimate routes, such as (a) the legislature overriding the veto with a larger vote, and (b) citizens organizing — petitioning, contacting reps, voting in new officials — to build support, and briefly explains how each works.",
            level2: "Names one solid route clearly and gestures at a second.",
            level1: "Names no legitimate route or suggests something outside lawful civic process."
          },
          exemplar: "First, the legislative branch could override the veto if enough members vote for the bill again — a built-in check on the executive. Second, citizens could organize: launch a petition, contact their representatives, and vote for officials who support the bill, building enough public pressure to pass it next time.",
          hintLadder: [
            "Is there a way the legislature can beat a veto?",
            "What can citizens do to build support?",
            "Name one branch action and one citizen action."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Balance the Branches",
      prompt:
        "Stand and become the three branches: raise both arms wide for the legislature 'passing' a law, push palms forward for the executive 'enforcing' it, then hold a steady balance on one foot for the judicial branch 'weighing' it. Cycle through all three twice, slow and steady.",
      scienceTieIn: "Balancing on one foot engages your core and inner-ear balance system, sharpening focus and reminding your body that stability comes from parts working together — just like the branches.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If you could get your representatives to pass ONE new law, what would it be — and which citizen action (voting, petitioning, speaking up) would you use first to push for it?",
      badge: { id: "g7-civics-architect", name: "Civics Architect", emoji: "🏛️" },
      estimatedMinutes: 7
    }
  }
};
