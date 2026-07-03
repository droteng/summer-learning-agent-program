// Grade 7 ELA/Writing — Fall Expedition, Week 1 (Back to Basics), Day 3.
// Grade 7 counterpart of g6.fall.ela.w1.d3. Same goal-setting-writing topic,
// raised to Grade 7: claims backed by reasons AND addressed counterarguments,
// organized into a short multi-paragraph piece.

export const fallG7ElaW1D3 = {
  id: "g7.fall.ela.w1.d3",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Set your fall goals — claims, reasons, and counterarguments",
  topicTag: "goal-setting-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.4"],
  hook: "A goal is a claim about your future self — and a strong writer knows every claim faces objections. Today you write fall goals the grade-7 way: specific claim, real reasons, AND a counterargument you answer before it can stop you.",
  miniLesson: [
    "A strong goal is a claim that is specific and measurable ('finish four novels by November' beats 'read more'), backed by a genuine reason — the 'because' that makes it matter.",
    "A grade-7 argument goes further: it names the counterargument (the reason someone might doubt or the obstacle likely to derail you), then answers it with a rebuttal or a plan.",
    "Organize it across paragraphs: paragraph 1 states the claim + reason; paragraph 2 raises and answers the counterargument. Transitions like 'however,' 'even though,' and 'to handle this' connect the parts."
  ],
  workedExample: {
    prompt: "Turn 'do better in math' into a strong goal that includes a claim, a reason, and an answered counterargument.",
    steps: [
      "Make the claim specific: 'I'll finish all 8 fall math missions by the end of October.'",
      "Add the reason: 'because I want proportional reasoning to feel easy before the data project.'",
      "Name the counterargument: 'Weekends get busy, so I might fall behind.'",
      "Answer it: 'To handle this, I'll block 20 minutes right after dinner on school nights, so weekends stay free.'"
    ],
    answer: "I'll finish all 8 fall math missions by the end of October because I want proportional reasoning to feel easy before the data project. Weekends get busy and could derail me — so I'll do 20 minutes right after dinner on school nights to stay on track."
  },
  items: [
    {
      id: "g7.fall.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which sentence best ANSWERS a counterargument to a reading goal?",
      choices: [
        "I want to read more books this fall.",
        "Reading is important for everyone.",
        "Some nights I'll be too tired to read, so I'll keep a short graphic novel ready for those days.",
        "I'll read four books by November."
      ],
      answerIndex: 2,
      explanation: "It first names the obstacle ('too tired some nights') and then gives a plan to handle it — that is answering a counterargument, not just stating a goal.",
      hintLadder: [
        "A counterargument is the obstacle or objection; answering it means having a plan for it.",
        "Which option admits a problem AND responds to it?",
        "The 'too tired... so I'll keep a short book ready' option does both."
      ]
    },
    {
      id: "g7.fall.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "In the goal 'I'll write one short story by November even though revising is my weak spot, so I'll ask for feedback after each draft,' which part is the COUNTERARGUMENT?",
      choices: [
        "I'll write one short story by November",
        "even though revising is my weak spot",
        "so I'll ask for feedback after each draft",
        "one short story"
      ],
      answerIndex: 1,
      explanation: "The 'even though revising is my weak spot' clause names the obstacle/objection — that's the counterargument. The final clause is the rebuttal that answers it.",
      hintLadder: [
        "The counterargument names a reason the goal could fail.",
        "Look for the 'even though...' or 'but...' part.",
        "'Even though revising is my weak spot' is the counterargument."
      ]
    },
    {
      id: "g7.fall.ela.w1.d3.q3",
      type: "short_answer",
      stem: "Rewrite this weak goal into a strong one with a deadline, a reason, AND an answered counterargument: 'Get better at reading.'",
      rubric: {
        level3: "Specific measurable action + deadline + genuine 'because' reason AND a named counterargument that is answered with a plan.",
        level2: "Has the claim + reason, and names an obstacle, but doesn't answer it — or answers an obstacle without a clear reason.",
        level1: "Still vague ('read more') with no measure, reason, or counterargument."
      },
      exemplar: "I'll read for 25 minutes every school night through October because I want to keep up my reading stamina. Homework-heavy nights could crowd it out — so I'll read on the bus those days instead of skipping.",
      hintLadder: [
        "State the specific action, amount, and deadline.",
        "Add your real 'because' reason.",
        "Name one thing that could derail you, then give your plan for it."
      ]
    },
    {
      id: "g7.fall.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write a short TWO-paragraph goal for a subject you find hard. Paragraph 1: your claim + reason. Paragraph 2: a counterargument and how you'll answer it.",
      rubric: {
        level3: "Two clear paragraphs: paragraph 1 has a specific claim + reason; paragraph 2 raises a real counterargument and answers it with a plan; transitions connect them.",
        level2: "Includes claim, reason, and a counterargument but organization is muddled, or the counterargument isn't fully answered.",
        level1: "One vague paragraph, or missing the reason or the counterargument entirely."
      },
      exemplar: "I'll complete two coding missions each week through October because loops still confuse me and I want them to click before the pattern project. Doing it steadily should build the habit.\n\nThe risk is that busy weeks tempt me to skip. To handle that, I'll do one mission each Wednesday and one each Saturday morning — fixed times so a busy day can't quietly erase my plan.",
      hintLadder: [
        "Paragraph 1: name the exact action, deadline, and your reason.",
        "Paragraph 2: name the obstacle, then your plan for it.",
        "Use a transition like 'however' or 'to handle that' to link the paragraphs."
      ]
    },
    {
      id: "g7.fall.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Why does ANSWERING a counterargument make a goal (or any argument) more convincing? Answer in 2–3 sentences.",
      rubric: {
        level3: "Explains that addressing objections shows you've thought it through and removes doubts/obstacles, making the argument more credible and the plan more durable.",
        level2: "Gives a partial idea (e.g., 'it makes it stronger') without explaining the credibility or planning benefit.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Answering a counterargument shows you already considered the reasons it might fail, so a reader trusts you thought it through. It also turns a vague hope into a real plan, because you've prepared for the obstacle before it shows up.",
      hintLadder: [
        "Think about how a reader reacts when you ignore an obvious objection.",
        "What does handling the objection show about your thinking?",
        "Connect 'answering objections' to 'credibility' and 'a stronger plan.'"
      ]
    }
  ],
  reflectionPrompt: "Save your strongest fall goal somewhere you'll see it. What is the most likely obstacle, and what's your first move to get past it this week?",
  misconceptionBank: [
    {
      id: "vague-goal-no-measure",
      label: "Sets goals with no way to measure them",
      description: "Writes 'do better' or 'try harder' with nothing to check against.",
      coachMove: "Ask: 'How will you KNOW you did it?' If there's no number or deadline, the goal isn't finished yet."
    },
    {
      id: "ignores-counterargument",
      label: "States a claim but never addresses objections",
      description: "Writes the goal and reason but leaves obvious obstacles unmentioned, so the argument feels one-sided.",
      coachMove: "Prompt: 'What would someone doubt, or what could stop you?' Then have them answer it in the next sentence."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Defend?",
      prompt:
        "Would you rather defend the goal 'read 3 books before the leaves are gone' or 'get better at reading'? Pick one, then name the strongest objection someone could raise against it and how you'd answer that objection.",
      answer: "'Read 3 books before the leaves are gone' is easier to defend — it's specific and measurable. A likely objection is 'you won't have time'; you can answer it with a plan like reading 20 minutes on the bus. 'Get better' is hard to defend because there's nothing to measure or protect against objections.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fall Goal Manifesto",
      challenge:
        "Write a short goal manifesto. Pick your most important fall goal and argue for it in two paragraphs — claim + reason, then a counterargument you answer — then design it into something you'd actually post above your desk.",
      steps: [
        "Draft paragraph 1: a specific, measurable claim plus your genuine 'because' reason.",
        "Draft paragraph 2: the strongest counterargument (obstacle or objection) and your answer to it.",
        "Add transitions ('however,' 'even so,' 'to handle this') so the paragraphs connect.",
        "Design the final manifesto — title it, and make your rebuttal line stand out."
      ],
      deliverable: "A two-paragraph goal manifesto with a claim, reason, and an answered counterargument, laid out to display.",
      choiceBoard: [
        "Make a designed poster with the two paragraphs and a bold rebuttal line.",
        "Record a 45-second spoken manifesto reading both paragraphs aloud.",
        "Write it as a letter to your November self that answers the doubt you have today."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Counterargument Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which goal statement is measurable, backed by a reason, AND answers a counterargument?",
          choices: [
            "I want to do better in science this fall.",
            "I'll study science more because grades matter.",
            "I'll review science notes 15 minutes every school night through October because I want the unit test to feel easy; busy nights could derail me, so I'll review on the bus those days.",
            "I'll try harder even though science is hard."
          ],
          answerIndex: 2,
          explanation: "Option 3 has a measurable action and deadline, a genuine reason, AND names an obstacle ('busy nights') with a plan to answer it. The others miss the measure, the reason, or the counterargument.",
          hintLadder: [
            "First find the option with a number and deadline.",
            "Then check it has a real reason AND names an obstacle it answers.",
            "Only one option does all three."
          ]
        },
        {
          id: "g7.fall.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Rewrite this weak goal into a strong one: 'Be better at coding.' Include a specific action, a deadline, a 'because' reason, AND a counterargument you answer.",
          rubric: {
            level3: "Specific measurable action + deadline + genuine reason AND a named counterargument answered with a plan — all clearly present.",
            level2: "Has the claim, reason, and an obstacle, but the obstacle isn't answered, or one element is vague.",
            level1: "Still vague, or missing the reason or the counterargument."
          },
          exemplar: "I'll finish one coding mission every weekend through October because loops still trip me up and I want them easy before the pattern project. Weekends fill up fast, so I'll do the mission Saturday morning before anything else — protecting the time before the day gets busy.",
          hintLadder: [
            "Name the exact action, amount, and deadline.",
            "Add your true 'because' reason.",
            "Name the obstacle and finish with your plan to beat it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Stand Tall, Defend the Goal",
      prompt:
        "Stand up, roll your shoulders back, and say your top fall goal out loud — then say the objection you'll beat and your answer to it, standing tall for 20 seconds. Notice how a confident posture makes the rebuttal feel real.",
      scienceTieIn: "Standing tall and voicing a plan aloud can boost confidence and lower stress hormones, helping your brain commit to the goal and its backup plan.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your single strongest fall goal again, then add the one objection most likely to stop you and the exact first move you'll make to answer it this week.",
      badge: { id: "g7-fall-argument-architect", name: "Argument Architect", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
