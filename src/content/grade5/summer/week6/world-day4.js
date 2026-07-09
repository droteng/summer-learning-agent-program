// Grade 5 Summer World/Current Affairs — Week 6 (World Affairs for Kids), Day 4.
// Grade-5 counterpart of g6.world.w6.d4 (perspectives and bias), pitched down one
// level: vocab support, concrete school examples, a two-view paragraph frame.

export const summerG5WorldW6D4 = {
  id: "g5.summer.world.w6.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Perspectives and bias",
  topicTag: "perspectives",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.10.3-5", "CCSS.ELA-LITERACY.RI.5.6"],
  hook: "Two people can watch the same thing and tell it in different ways. Today you learn to spot perspective and bias — without picking sides.",
  keyTerms: [
    { term: "Perspective", definition: "The way one person sees things — what they notice and care about. Everyone has one." },
    { term: "Bias", definition: "A lean toward one side that shapes which facts get told and which get left out." },
    { term: "Partial", definition: "Only part of the story. One view can be true but still leave things out." }
  ],
  miniLesson: [
    "A perspective is the way one person sees things — what they notice and care about. Everyone has one.",
    "Bias is a lean toward one side. It shapes which facts get told and which get left out.",
    "Hearing more than one perspective does not mean both are equal — it means you see the WHOLE picture."
  ],
  workedExample: {
    prompt:
      "A new road is being built. The builders say 'new jobs!' Nearby families say 'too much noise!' Are these views opposite, or just partial?",
    steps: [
      "Each view names a real thing.",
      "Jobs and noise both really happen — neither view is fake.",
      "Each view is partial: 'jobs' skips the noise; 'noise' skips the jobs.",
      "The full picture needs both views together."
    ],
    answer: "Both views are real and partial. Putting them together gives the whole picture."
  },
  items: [
    {
      id: "g5.summer.world.w6.d4.q1",
      type: "multiple_choice",
      stem: "What does 'perspective' mean in a news story?",
      choices: [
        "The way one person sees things — what they notice and care about.",
        "An opinion that is always wrong.",
        "A kind of camera.",
        "A made-up story."
      ],
      answerIndex: 0,
      explanation: "A perspective is the way one person sees things. It is not the same as 'wrong' — it is just partial.",
      hintLadder: [
        "Think about where a person is standing.",
        "It shapes what they notice.",
        "Perspective = the way someone sees things."
      ]
    },
    {
      id: "g5.summer.world.w6.d4.q2",
      type: "multiple_choice",
      stem: "A story about a factory near a river only quotes the factory owner. What is MISSING?",
      choices: [
        "Nothing — one voice is enough.",
        "Bigger letters.",
        "The factory's logo.",
        "The view of people who live near or use the river."
      ],
      answerIndex: 3,
      explanation: "One voice is partial. The people who live near or use the river should be heard too.",
      hintLadder: [
        "Who else does the river affect?",
        "Whose voice is not in the story?",
        "The neighbors and river users are missing."
      ],
      misconceptionsTargeted: ["one-voice-full-story-g5"]
    },
    {
      id: "g5.summer.world.w6.d4.q3",
      type: "multiple_choice",
      stem: "Bias is BEST described as:",
      choices: [
        "A plain fact with no feeling.",
        "A kind of error message.",
        "A lean toward one side that shapes what gets told and what gets left out.",
        "Always telling lies on purpose."
      ],
      answerIndex: 2,
      explanation: "Bias is a lean toward one side. It shapes which facts get in and which get left out — and it is not always on purpose.",
      hintLadder: [
        "Bias shapes which facts make it into a story.",
        "It is not always done on purpose.",
        "It is a lean toward one side."
      ]
    },
    {
      id: "g5.summer.world.w6.d4.q4",
      type: "short_answer",
      stem:
        "Two students disagree about whether a school rule is fair. Write one respectful thing one of them could SAY to keep the conversation going, and explain in one sentence why it helps.",
      rubric: {
        level3: "Gives a respectful line where the speaker shares their view AND invites the other side (e.g., asks a real question), and explains why that keeps the talk going.",
        level2: "Gives a respectful line but the explanation is unclear, or the line only shares a view without inviting the other side.",
        level1: "Line is rude or shuts the talk down, or there is no explanation."
      },
      exemplar:
        "One student could say: 'I think the rule is unfair because it's the same for everyone — what makes you think it IS fair?' This helps because it shares a view and then asks a real question instead of talking over the other person.",
      hintLadder: [
        "How do you keep listening when you disagree?",
        "Share your own view, then ask about theirs.",
        "A real question invites the other side to answer."
      ]
    },
    {
      id: "g5.summer.world.w6.d4.q5",
      type: "short_answer",
      stem:
        "Pick a topic where you have heard two views (homework, screen time, or school lunches). Fill in this frame: 'View 1: ___. View 2: ___.' Write each fairly, without putting either down.",
      rubric: {
        level3: "Both views are written fairly and clearly, with no mean or dismissive words about either side.",
        level2: "Two views given, but one is put down or written less fairly.",
        level1: "Only one view given, or both written unfairly."
      },
      exemplar:
        "View 1: Homework helps kids practice and get better at school. View 2: Long homework takes away family time and sleep, which also help learning.",
      hintLadder: [
        "Pick a topic where people really disagree.",
        "Write each side's strongest fair reason.",
        "Take out any mean or 'they are wrong' words."
      ]
    }
  ],
  reflectionPrompt: "Today you held two views at once. Where in your life could you practice this more?",
  misconceptionBank: [
    {
      id: "one-voice-full-story-g5",
      label: "Thinks one voice is the whole story",
      description: "Reads one person's view as the complete picture, without asking who is missing.",
      coachMove: "Ask: whose voice am I NOT hearing? Add a second view before deciding."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Two Eyes on One Event",
      prompt:
        "A school cancels tomorrow's test. Would you rather hear that news from a student or from the teacher? Whoever you pick, name one thing THEY would notice that the other might not.",
      answer: "Each notices different things. A student might feel relief or worry about lost study time. A teacher might think about rescheduling. Both views are real and partial.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Two-Sided Story",
      challenge:
        "Pick one small event (a new school rule, a closed playground, a new lunch menu). Tell it twice — once from each of two different views — fairly, without making either side the 'bad guy'.",
      steps: [
        "Choose an event two groups would see differently.",
        "Write version A from the first view.",
        "Write version B from the second view.",
        "Add one fair question each side might ask the other."
      ],
      deliverable: "Two short tellings of the same event from two views, each fair, plus one question per side.",
      choiceBoard: [
        "Write the two versions as short paragraphs.",
        "Draw a split comic: same event, two views.",
        "Act out a pretend 'interview' with both sides."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Perspective Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.world.w6.d4.arena1",
          type: "multiple_choice",
          stem: "A story about a new skatepark only quotes the mayor, who loves it. What is the BEST way to describe this story?",
          choices: [
            "Complete and fair — one official voice is enough.",
            "Partial — it is missing views like neighbors, skaters, and nearby stores.",
            "It is lying about the skatepark.",
            "Useless — ignore it all."
          ],
          answerIndex: 1,
          explanation: "One voice is not always lying, but the story is partial: it leaves out other views like neighbors, skaters, and local stores.",
          hintLadder: [
            "Is one voice the whole picture?",
            "It is not lying, but something is left out — what word fits?",
            "It is partial — missing other views."
          ]
        },
        {
          id: "g5.summer.world.w6.d4.arena2",
          type: "short_answer",
          stem: "Pick a real disagreement you know (screen-time limits, a game rule, homework). Write BOTH sides fairly in one sentence each, without putting either side down.",
          rubric: {
            level3: "Two sentences, each showing a real view fairly, with no mean or dismissive words about either side.",
            level2: "Two sentences, but one side is put down or written less fairly.",
            level1: "Only one side, or both sides written unfairly."
          },
          exemplar: "View 1: Screen-time limits help kids sleep better and focus on schoolwork. View 2: Screens are how many kids learn, create, and stay in touch with friends, so limits can cut off real good things.",
          hintLadder: [
            "Pick a topic where people really disagree.",
            "Write each side's strongest fair reason.",
            "Take out any words that put a side down."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Change Your View",
      prompt:
        "Slowly turn your head to the left and look at the room, then to the right and look again. Notice you really do see different things from each angle. Take three calm breaths as you face forward again.",
      scienceTieIn: "Shifting your eyes and breathing slowly relaxes your brain, which makes it easier to see another person's point of view instead of reacting.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a disagreement you saw or had today. What did the OTHER person see or care about that you might have missed at first?",
      badge: { id: "g5-summer-perspective-holder", name: "Perspective Holder", emoji: "👓" },
      estimatedMinutes: 7
    }
  }
};
