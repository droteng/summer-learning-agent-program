// Grade 7 ELA/Writing — Summer Program, Week 8 (Capstone Week), Day 1.
// Topic: plan your capstone — thesis, scope, audience, and success criteria.
// Kicks off the celebratory final week that synthesizes the Grade 7 summer.

export const summerG7ElaW8D1 = {
  id: "g7.summer.ela.w8.d1",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Plan your capstone — thesis, scope, audience, success criteria",
  topicTag: "capstone-planning",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.5", "CCSS.ELA-LITERACY.W.7.1.A"],
  hook: "This is it — the final week. Everything you built this summer becomes one showcase project. Before you make anything, a pro plans it: a sharp thesis, a scope you can finish, a real audience, and clear success criteria you can measure yourself against.",
  miniLesson: [
    "A capstone THESIS is a single arguable sentence that names your project's main claim — not a topic ('recycling') but a position ('Our town should switch to weekly compost pickup because it cuts landfill waste').",
    "SCOPE is the boundary line: what your project WILL and WON'T cover. A tight scope you can finish beats a huge scope you abandon. AUDIENCE shapes every choice — a panel of parents needs different evidence and vocabulary than a panel of peers.",
    "SUCCESS CRITERIA are the checkable standards you'll be judged by — think 'clear thesis, 3 pieces of evidence, a counterargument, a strong close.' Writing them before you build turns a vague hope into a plan you can steer."
  ],
  workedExample: {
    prompt: "Turn the topic 'screen time' into a capstone plan: thesis, scope, audience, and one success criterion.",
    steps: [
      "Thesis (arguable): 'Middle schoolers should set a nightly screen curfew because sleep loss hurts next-day learning.'",
      "Scope: covers a curfew for personal devices on school nights only — NOT weekends, NOT school-issued laptops.",
      "Audience: a panel of parents and one teacher, so I'll lead with sleep research they'll trust.",
      "Success criterion: 'Includes at least two cited sources and answers one likely objection.'"
    ],
    answer: "Thesis: nightly screen curfew on school nights improves learning. Scope: school-night personal devices only. Audience: parents + a teacher. Criterion: 2+ cited sources and a rebuttal."
  },
  items: [
    {
      id: "g7.summer.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which of these is a strong CAPSTONE THESIS (a single arguable claim), not just a topic?",
      choices: [
        "School lunches.",
        "This project is about school lunches.",
        "Our school should offer a free breakfast because hungry students learn less in morning classes.",
        "I have always been interested in food."
      ],
      answerIndex: 2,
      explanation: "A thesis takes an arguable position AND signals the reasoning. The others name a topic or a personal note but make no claim you could defend.",
      hintLadder: [
        "A thesis takes a position someone could dispute.",
        "Which sentence could you back with evidence?",
        "The free-breakfast sentence makes an arguable claim with a reason."
      ]
    },
    {
      id: "g7.summer.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Why does defining SCOPE early make a capstone stronger?",
      choices: [
        "It makes the project longer, which impresses judges.",
        "It sets clear boundaries so you can actually finish a focused, deep project instead of a thin, sprawling one.",
        "Scope only matters for math projects.",
        "It lets you skip having a thesis."
      ],
      answerIndex: 1,
      explanation: "Scope draws the line between what's in and out, protecting depth and making the work finishable.",
      hintLadder: [
        "Think about what happens when a project tries to cover everything.",
        "Boundaries protect depth and time.",
        "A tight, finishable scope beats a sprawling one."
      ],
      misconceptionsTargeted: ["bigger-scope-is-better"]
    },
    {
      id: "g7.summer.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "You'll present your capstone to a panel of PARENTS. How should that audience change your plan?",
      choices: [
        "It shouldn't change anything — a plan is a plan.",
        "Use more slang so it feels casual.",
        "Choose evidence and vocabulary the panel will trust and understand, and anticipate the questions parents are likely to ask.",
        "Remove your thesis so you don't sound pushy."
      ],
      answerIndex: 2,
      explanation: "Audience shapes evidence, tone, and which objections you prepare for — the core of persuasive planning.",
      hintLadder: [
        "Who you're speaking to changes what convinces them.",
        "What evidence would parents trust most?",
        "Match evidence, vocabulary, and anticipated questions to the audience."
      ]
    },
    {
      id: "g7.summer.ela.w8.d1.q4",
      type: "short_answer",
      stem: "Write ONE clear success criterion for your capstone — a checkable standard you want your final project to meet.",
      rubric: {
        level3: "States a specific, checkable standard (something a judge could mark yes/no or count), e.g. evidence count, a required section, or a measurable delivery goal.",
        level2: "Names a goal but it is vague or hard to check ('make it good').",
        level1: "Off-topic, or restates the assignment without a standard."
      },
      exemplar: "My project will include at least three pieces of evidence and answer one strong objection before the closing.",
      hintLadder: [
        "Think of something a judge could literally check off.",
        "Could you count it or point to it in the project?",
        "Name a required section, an evidence count, or a delivery goal."
      ]
    },
    {
      id: "g7.summer.ela.w8.d1.q5",
      type: "short_answer",
      stem: "Draft your capstone plan in one paragraph: state your THESIS, your SCOPE (what's in and out), and your AUDIENCE.",
      rubric: {
        level3: "Includes a clear arguable thesis, a scope with an in/out boundary, AND a named audience — all three present and aligned.",
        level2: "Includes two of the three, or all three but one is vague or mismatched.",
        level1: "Missing the thesis, or fewer than two elements present."
      },
      exemplar: "Thesis: our neighborhood should add a bike lane on Oak Street because it would make the school route safer. Scope: I'll cover only Oak Street between the park and the school, not the whole town. Audience: the town council, so I'll lead with traffic and safety data they already track.",
      hintLadder: [
        "Start with your arguable thesis sentence.",
        "Then draw the in/out boundary of your scope.",
        "Name exactly who your audience is and why."
      ]
    }
  ],
  reflectionPrompt: "Look back at your whole Grade 7 summer. Which skill — thesis writing, systems thinking, data, or coding — do you most want your capstone to show off? Let that guide your plan.",
  misconceptionBank: [
    {
      id: "bigger-scope-is-better",
      label: "Thinks a wider scope means a stronger project",
      description: "Believes covering more ground automatically impresses, ignoring depth and finishability.",
      coachMove: "Ask: 'Can you finish this deeply in the time you have?' A tight, deep slice beats a broad, shallow sweep."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Sentence to Rule Them All",
      prompt:
        "Imagine you have only ONE sentence to make a panel care about your whole summer of work. Would you rather open with a fact, a question, or a bold claim — and why would that hook a real audience?",
      answer:
        "A bold, arguable claim (your thesis) usually hooks hardest — it gives the audience a position to react to. A question or fact can set it up, but the claim is what they'll remember and debate.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Blueprint",
      challenge:
        "Design a one-page 'blueprint' for your showcase capstone. It must name your thesis, sketch your scope, identify your audience, and list at least three success criteria you'll hold yourself to all week.",
      steps: [
        "Write your thesis as one bold, arguable sentence at the top.",
        "Draw an 'in / out' box showing what your project WILL and WON'T cover.",
        "Name your audience and one thing they'll care about most.",
        "List 3 checkable success criteria you'll aim to hit by Day 5."
      ],
      deliverable: "A one-page capstone blueprint: thesis, scope box, audience, and 3 success criteria.",
      choiceBoard: [
        "Draw or type the one-page blueprint with all four sections.",
        "Record a 45-second 'pitch' that states your thesis, scope, and audience out loud.",
        "Make a checklist poster of your 3 success criteria to track across the week."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Blueprint Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "A student writes: 'My capstone will cover everything about climate change for anyone who watches.' What is the BIGGEST planning flaw?",
          choices: [
            "It has too narrow a scope.",
            "The scope is far too broad and the audience is undefined, so the project can't be focused or finished well.",
            "It uses the word 'capstone.'",
            "There is nothing wrong with it."
          ],
          answerIndex: 1,
          explanation: "'Everything' for 'anyone' means no scope boundary and no real audience — the two things that make a capstone finishable and persuasive.",
          hintLadder: [
            "Check the scope: what's left OUT?",
            "Check the audience: who exactly is it for?",
            "'Everything' and 'anyone' signal missing boundaries."
          ]
        },
        {
          id: "g7.summer.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Take this vague idea — 'a project about sports' — and rewrite it as a real capstone plan with a thesis, a scoped boundary, and a named audience.",
          rubric: {
            level3: "Produces an arguable thesis, a clear in/out scope, AND a specific audience, all aligned around sports.",
            level2: "Includes two of the three clearly, or all three but one is vague.",
            level1: "Restates 'sports' with no thesis, scope, or audience."
          },
          exemplar: "Thesis: our school should add an intramural league so more kids get to play. Scope: only after-school intramurals, not varsity teams. Audience: the athletics director, who cares about participation numbers.",
          hintLadder: [
            "First make an arguable claim about sports.",
            "Then draw the in/out line of your scope.",
            "Then name exactly who should hear it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Blueprint Stretch",
      prompt:
        "Stand and 'draw' your plan in the air: reach up-left for THESIS, up-right for SCOPE, down-left for AUDIENCE, down-right for SUCCESS. Touch each corner twice, saying the word aloud, then roll your shoulders and breathe.",
      scienceTieIn: "Pairing words with big movements gives your brain an extra 'motor' memory hook, so your four planning pillars stick better than reading alone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Capstone week is here! In one sentence, write the thesis you're most proud to defend — then note the single success criterion you're most determined to hit by Friday.",
      badge: { id: "g7-capstone-architect", name: "Capstone Architect", emoji: "📐" },
      estimatedMinutes: 7
    }
  }
};
