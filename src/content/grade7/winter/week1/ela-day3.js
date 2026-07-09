// Grade 7 ELA/Writing — Winter Expedition, Week 1 (Winter Warm-Up), Day 3.
// Topic: goal-setting writing raised to a claim-and-plan argument with reasons,
// evidence, obstacles/counterpoints, and multi-paragraph structure (the Grade 7
// level-up of Grade 6's specific/measurable winter-goal writing).

export const winterG7ElaW1D3 = {
  id: "g7.winter.ela.w1.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Writing a reasoned, measurable winter goal plan with obstacles addressed",
  topicTag: "goal-argument-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.4"],
  hook: "Anybody can list a resolution. A real plan does more: it states a clear goal, backs it with reasons, spells out how you'll measure it, AND honestly names the obstacle most likely to stop you — then answers it. Today you turn a foggy winter wish into a short, argued, obstacle-proof goal plan.",
  miniLesson: [
    "A strong goal is still SPECIFIC and MEASURABLE, but at this level you also justify it: give a REASON it matters and name the EVIDENCE you'll use to prove you met it.",
    "Anticipate the counterpoint. Ask, 'What is most likely to make me fail?' Naming that obstacle — then giving a plan to handle it — makes the goal far more convincing than a bare promise.",
    "Organize it as a short multi-paragraph plan: (1) the goal + why it matters, (2) how you'll measure success with evidence, and (3) the biggest obstacle and how you'll beat it."
  ],
  workedExample: {
    prompt: "Turn 'get better at ice skating this winter' into a reasoned, measurable goal plan that also handles one obstacle.",
    steps: [
      "State the goal specifically and measurably: practice skating 3 times a week for 30 minutes until the end of February.",
      "Give the REASON it matters: I want to skate the full rink without falling by spring, and steady practice is how skills stick.",
      "Name the EVIDENCE of success: I'll log each session and count how many laps I complete without falling.",
      "Name the likely OBSTACLE and answer it: on freezing days I won't want to go out, so I'll pair skating with a friend and treat missed days as make-up days that weekend."
    ],
    answer: "Goal: skate 3×/week for 30 min until end of February. Why: to skate a full rink by spring. Evidence: a session log and fall-free lap count. Obstacle: cold-day motivation — handled with a skating partner and weekend make-ups."
  },
  items: [
    {
      id: "g7.winter.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which statement is a full GOAL PLAN — specific, measurable, AND reasoned — rather than just a measurable goal?",
      choices: [
        "I will read one book each week until winter break so I can raise my reading level, and I'll track it with a reading log.",
        "I will read one book each week until winter break.",
        "I want to become a better reader this winter.",
        "Reading is important, so everyone should read more."
      ],
      answerIndex: 0,
      explanation: "It is specific and measurable ('one book each week until winter break'), gives a REASON ('to raise my reading level'), AND names evidence ('a reading log'). The first is only measurable; the others are vague or generic.",
      hintLadder: [
        "A goal PLAN adds a reason and a way to prove it, not just an amount.",
        "Look for the one with an amount, a deadline, a purpose, AND evidence.",
        "The reading-log answer has all four."
      ]
    },
    {
      id: "g7.winter.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In a goal plan, why is it powerful to name the obstacle most likely to make you fail?",
      choices: [
        "It makes the plan longer, which is always better",
        "It shows you've thought realistically and lets you plan a response, making the goal more convincing and achievable",
        "It guarantees you will reach the goal",
        "It lets you blame the obstacle if you quit"
      ],
      answerIndex: 1,
      explanation: "Naming the likely obstacle — the counterpoint to your plan — shows realistic thinking and lets you prepare a response, which makes the plan both more convincing and more likely to succeed.",
      hintLadder: [
        "This is like answering an objection before someone raises it.",
        "It's not about length or blame.",
        "Anticipating the obstacle lets you plan around it and strengthens the argument."
      ],
      misconceptionsTargeted: ["obstacle-is-an-excuse"]
    },
    {
      id: "g7.winter.ela.w1.d3.q3",
      type: "multiple_choice",
      stem: "A goal plan says: 'I'll practice piano 20 minutes a day until February so I can play my recital piece.' What is the ONE part still missing to make it complete at this level?",
      choices: [
        "A measurable amount",
        "A time frame",
        "The evidence of success AND the likely obstacle with a response",
        "A reason it matters"
      ],
      answerIndex: 2,
      explanation: "It already has the amount (20 min/day), the time frame (until February), and a reason (to play the recital piece). What's missing at Grade 7 is the EVIDENCE of success and a named obstacle with a response.",
      hintLadder: [
        "Check off what's there: amount, deadline, reason — all present.",
        "A full plan also needs proof of success and a handled obstacle.",
        "The missing piece is evidence plus the likely obstacle and how you'll beat it."
      ]
    },
    {
      id: "g7.winter.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write ONE winter goal plan for yourself in 3–4 sentences. It must include: (1) a specific, measurable goal with a time frame, (2) a reason it matters, and (3) the obstacle most likely to stop you AND how you'll respond to it.",
      rubric: {
        level3: "Includes all three parts — a specific/measurable/timed goal, a genuine reason it matters, AND a named likely obstacle with a concrete response — organized clearly across the sentences.",
        level2: "Includes the measurable goal and one of {reason, obstacle-with-response}, but is missing or weak on the other.",
        level1: "A vague wish, or a goal with no reason and no obstacle addressed."
      },
      exemplar: "This winter I will write in my journal for 10 minutes every night before bed until the end of January, because writing helps me manage stress and I want the habit to stick before spring. I'll prove it with a dated journal I can flip through. The biggest obstacle is being too tired at night, so I'll move journaling to right after dinner on days I know I'll crash early.",
      hintLadder: [
        "Start with a specific action, an amount, and a deadline.",
        "Add one honest reason the goal matters to you.",
        "Then name what's most likely to derail you and one concrete way you'll handle it."
      ]
    },
    {
      id: "g7.winter.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Take this weak goal — 'help out more at home this winter' — and rewrite it as a full goal plan (specific, measurable, reasoned, with an obstacle addressed). Then explain in 1–2 sentences what makes your version stronger than the original.",
      rubric: {
        level3: "Rewrites into a specific, measurable, timed, reasoned goal WITH an obstacle and response, AND explains that the strength comes from adding a measurable action, a purpose/evidence, and an anticipated obstacle.",
        level2: "Improves the goal with most elements but the explanation of WHY it's stronger is thin or omits the obstacle's role.",
        level1: "Rewrite is still vague, or no explanation of what makes it stronger."
      },
      exemplar: "Stronger plan: 'I will clear the table and load the dishwasher every night this winter until spring so my family shares the work more fairly, and I'll check it off on the fridge calendar. My biggest obstacle is forgetting on busy homework nights, so I'll set a 7:30 phone reminder.' It's stronger because the original was just a wish — mine adds an exact chore, a way to measure it, a real reason, and a plan for the obstacle that would most likely trip me up.",
      hintLadder: [
        "First make the chore specific, measurable, and timed.",
        "Add why it matters and how you'll track it.",
        "Then name the likely obstacle, give a response, and explain what those additions fixed."
      ]
    }
  ],
  reflectionPrompt: "Of the winter goals you could set, which one has the scariest obstacle in the way? Naming that obstacle out loud is half the battle — what's your first move against it?",
  misconceptionBank: [
    {
      id: "obstacle-is-an-excuse",
      label: "Thinks naming an obstacle is making an excuse",
      description: "Believes admitting what might make you fail weakens the goal or gives you permission to quit, rather than strengthening the plan.",
      coachMove: "Reframe the obstacle as a problem to solve in advance: pair every named obstacle with a concrete response so it becomes a plan, not an escape hatch."
    },
    {
      id: "reason-is-optional",
      label: "Thinks a measurable goal alone is a complete plan",
      description: "Stops at 'what and how much' without giving a reason or evidence, so the goal has no purpose to anchor it.",
      coachMove: "Ask 'why does this matter to you, and how will you PROVE you did it?' so the student adds a purpose and evidence to the measurable action."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Promise or Plan?",
      prompt:
        "Two winter statements: (A) 'I'll read more this winter.' (B) 'I'll read 15 pages every night until break so my reading speeds up, and I'll skip nights I have games — making them up on weekends.' Which one is a real PLAN, and what two things does it do that the other doesn't?",
      answer:
        "(B) is a plan. Beyond an amount (15 pages) and a deadline (until break), it adds a REASON (to read faster) and it handles an OBSTACLE (game nights) with a response (weekend make-ups). (A) is just a promise with no amount, reason, or obstacle plan.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Obstacle-Proof Goal Snowflake",
      challenge:
        "Design a 'Goal Snowflake' with a big center goal for the winter and several arms. This time, each arm must pair a measurable step with the obstacle that could block it AND your response — a step is only 'obstacle-proof' when it names the trouble and beats it.",
      steps: [
        "Write your main winter goal in the center, with one sentence on why it matters.",
        "Draw at least four arms; on each, write a measurable, timed step.",
        "On each arm, add the obstacle most likely to stop that step and one concrete response to it.",
        "Circle the arm whose obstacle scares you most, and star your response to it."
      ],
      deliverable: "A goal snowflake with a reasoned center goal and at least four arms, each pairing a measurable step with a named obstacle and a response.",
      choiceBoard: [
        "Draw the snowflake with obstacle/response notes on each arm.",
        "Write a numbered 'winter goal plan' where each step lists its obstacle and your counter-move.",
        "Record a 45-second pep talk that states the goal, one reason, and how you'll beat your biggest obstacle."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Goal Argument Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which goal plan is the STRONGEST — specific, measurable, reasoned, AND obstacle-ready?",
          choices: [
            "I'll try to do better in science this winter.",
            "I'll study science sometimes so I can pass.",
            "Science is important, so I should study it more.",
            "I'll review my science notes 15 minutes a day, four days a week, until winter break to raise my quiz scores; when practices run late I'll review on the bus instead."
          ],
          answerIndex: 3,
          explanation: "Only the third has all four marks: the exact action and amount (15 min, four days a week), a deadline (winter break), a reason (raise quiz scores), AND an obstacle with a response (late practices → review on the bus).",
          hintLadder: [
            "Look for amount + deadline + reason + a handled obstacle.",
            "Three of the choices are vague or generic.",
            "The 15-minute plan that also handles late practices is complete."
          ]
        },
        {
          id: "g7.winter.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Take this weak goal — 'get more sleep this winter' — and rewrite it as a full goal plan with a specific measurable action, a reason, and the obstacle most likely to stop you plus your response.",
          rubric: {
            level3: "Produces a specific, measurable, timed sleep goal WITH a reason it matters AND a named likely obstacle paired with a concrete response.",
            level2: "Improves it with a measurable action and one of {reason, obstacle-with-response} but omits the other.",
            level1: "Still vague, or no reason and no obstacle addressed."
          },
          exemplar: "I will turn off my screens by 9:00 p.m. and be in bed by 9:30 every school night this winter so I stop feeling foggy in first period. The obstacle is late-night group chats, so I'll put my phone on the charger across the room at 9:00 to keep it out of reach.",
          hintLadder: [
            "Make the bedtime action specific and measurable, with a nightly frame.",
            "Add why better sleep matters to you.",
            "Then name what usually keeps you up and one concrete response to it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Snowy Breath Focus",
      prompt:
        "Sit tall and picture a single snowflake drifting down. Breathe in slowly for 4 counts as it rises, hold for 2, and breathe out for 4 as it lands. On each exhale, silently name one obstacle to your top goal; on each inhale, picture your response to it. Repeat 5 times.",
      scienceTieIn: "Slow, steady breathing calms your nervous system and helps your brain focus — a clear mind makes it easier to face an obstacle honestly instead of avoiding it.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your single most important winter goal as a short plan: the goal in one measurable sentence, one reason it matters, and the obstacle you most fear plus how you'll answer it.",
      badge: { id: "g7-winter-goal-strategist", name: "Winter Goal Strategist", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
