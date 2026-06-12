// Grade 6 ELA — Week 8 (Capstone), Day 1.
// Topic: project scope and criteria.

export const grade6ElaWeek8Day1 = {
  id: "g6.ela.w8.d1",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Project scope and criteria",
  topicTag: "capstone-scope",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.W.4", "CCSS.6.W.5"],
  hook: "This is your week. Today you pick a real project, scope it so it's finishable, and write three criteria you'll be judged on.",
  miniLesson: [
    "Pick a project type that matches what you already enjoyed this summer: a story, an explainer, a code project, a history exhibit, a science experiment, or an invention pitch.",
    "Scope = what's in, what's out. Too big = you don't finish. Too small = you don't grow. Aim for 'a little uncomfortable but doable in 5 days.'",
    "Criteria = the must-pass conditions. Three is plenty. They make 'done' concrete instead of a feeling."
  ],
  workedExample: {
    prompt:
      "Sasha wants to 'do a science project about the ocean.' How would you scope it and set criteria?",
    steps: [
      "Pick a sub-topic: e.g., 'how plastic affects shoreline crabs in our area.'",
      "Decide the format: a 2-minute explainer video + a one-page chart.",
      "Set criteria: 1) names at least 3 sources, 2) explains the chain from plastic to crabs, 3) parent showcase ready by Friday.",
      "Now Sasha can start — the goal is specific, the format is set, and 'done' is testable."
    ],
    answer: "Specific sub-topic + format + 3 criteria."
  },
  items: [
    {
      id: "g6.ela.w8.d1.q1",
      type: "multiple_choice",
      stem: "Which project scope is BEST for a 5-day week?",
      choices: [
        "Write the complete history of all sports.",
        "Build a 1-page chart comparing 3 sports and their rules.",
        "Make every kid in the school love your sport.",
        "Train to become a professional athlete."
      ],
      answerIndex: 1,
      explanation: "Finishable + specific + comparable. The others are too big or not really projects.",
      hintLadder: [
        "Skip the impossible-to-finish options.",
        "Look for the specific deliverable.",
        "A 1-page chart on 3 sports is finishable."
      ],
      misconceptionsTargeted: ["over-scopes-the-project"]
    },
    {
      id: "g6.ela.w8.d1.q2",
      type: "multiple_choice",
      stem: "Which is the WEAKEST criterion?",
      choices: [
        "Includes at least 3 reliable sources.",
        "Explains cause and effect in 1-2 paragraphs.",
        "Looks really good.",
        "Family understands the conclusion after one read-through."
      ],
      answerIndex: 2,
      explanation: "'Looks really good' isn't testable. The others all have a specific test.",
      hintLadder: [
        "Which criterion can't you check?",
        "Skip the testable ones.",
        "'Looks really good' is feel-based."
      ]
    },
    {
      id: "g6.ela.w8.d1.q3",
      type: "multiple_choice",
      stem: "Why do projects need 'criteria' instead of just 'do your best'?",
      choices: [
        "Tradition.",
        "So you can tell when you're done and what 'done' means.",
        "Teachers like long lists.",
        "Criteria make projects harder."
      ],
      answerIndex: 1,
      explanation: "Criteria turn fuzzy 'done' into testable 'done'. Without them, projects either drag or end too soon.",
      hintLadder: [
        "How do you know when to stop?",
        "Without criteria, when is it done?",
        "Criteria define done."
      ]
    },
    {
      id: "g6.ela.w8.d1.q4",
      type: "multiple_choice",
      stem:
        "Maya picks a coding project: 'a quiz game that asks 5 questions and shows the score.' This is:",
      choices: [
        "Too small — should be a 50-question game.",
        "About right for a 5-day week — specific, finishable, growth-friendly.",
        "Too big — should be a calculator instead.",
        "Wrong subject."
      ],
      answerIndex: 1,
      explanation: "5 questions + score is enough to practice variables, loops, conditionals, and string handling. Finishable but real.",
      hintLadder: [
        "Can she finish it in 5 days?",
        "Does it stretch her?",
        "Yes to both — about right."
      ]
    },
    {
      id: "g6.ela.w8.d1.q5",
      type: "short_answer",
      stem:
        "Pick your capstone project. In 3 short lines write: 1) the deliverable, 2) the audience, 3) three criteria.",
      rubric: {
        level3: "Specific deliverable (e.g., '2-page chart on...', '90-second video about...'), specific audience (e.g., 'my family at Friday's showcase'), and three testable criteria.",
        level2: "Has all three but one is vague.",
        level1: "Just the topic — no deliverable, audience, or criteria."
      },
      exemplar:
        "1) A 90-second explainer video about how ratios show up in cooking. 2) Audience: my family at Friday's showcase. 3) Criteria: includes one real recipe with the ratio shown; uses one chart; my younger sibling can re-tell the main idea after one watch.",
      hintLadder: [
        "What thing will you hand over Friday?",
        "Who watches or reads it?",
        "What three things must it pass?"
      ]
    }
  ],
  reflectionPrompt: "This week is your showcase. What's the one thing you most want your family to understand about your project?",
  misconceptionBank: [
    {
      id: "over-scopes-the-project",
      label: "Picks a goal too big to finish",
      description: "Chooses 'cure cancer' or 'write a novel' for a 5-day project, then never starts.",
      coachMove: "Shrink it 5x. What's a finishable slice of the dream?"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Big Dream or Finished Project?",
      prompt:
        "Would you rather START a giant project you never finish, or FINISH a small project you can show off Friday? Tell why — and what 'finishable' means to you this week.",
      answer: "A finished small project wins every time. You can show it, you grew, and 'done' beats 'someday.' Scope shrinks the dream to a slice you can actually deliver.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Capstone Pitch Card",
      challenge:
        "Design a one-page 'pitch card' that announces your capstone like a movie poster: a bold title, the deliverable, the audience, and your three criteria.",
      steps: [
        "Give your project a punchy title and write the deliverable in one line.",
        "Name your Friday audience (who will see it).",
        "List your three testable criteria as a checklist.",
        "Add a one-line 'why this matters to me' tagline."
      ],
      deliverable: "A pitch card (drawn or typed) with title, deliverable, audience, and 3 criteria.",
      choiceBoard: [
        "Make a movie-poster style pitch card.",
        "Record a 20-second 'coming Friday' trailer pitch.",
        "Draw a checklist scoreboard with your 3 criteria as boxes to tick."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Scope Master Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w8.d1.arena1",
          type: "multiple_choice",
          stem: "Which capstone scope is BEST sized for a single 5-day camp week?",
          choices: [
            "Write and publish a 200-page novel.",
            "Make a 90-second explainer video on one topic with a chart and 3 sources.",
            "Interview every scientist in the country.",
            "Build a working robot from scratch."
          ],
          answerIndex: 1,
          explanation: "A 90-second video with one chart and 3 sources is specific, finishable in 5 days, and still a real stretch. The others can't be finished or scoped in a week.",
          hintLadder: [
            "Cross out anything you couldn't finish by Friday.",
            "Look for the option that's specific AND finishable.",
            "It's the 90-second explainer with a chart and sources."
          ]
        },
        {
          id: "g6.ela.w8.d1.arena2",
          type: "short_answer",
          stem: "Write the THREE testable criteria a judge could check off for your capstone. Each must be something you can clearly pass or fail.",
          rubric: {
            level3: "Three criteria, each specific and testable (a judge could mark pass/fail), all matching the chosen project.",
            level2: "Three criteria but at least one is feel-based or vague (e.g., 'looks good').",
            level1: "Fewer than three, or none are actually testable."
          },
          exemplar: "1) Names at least 3 reliable sources. 2) Includes one chart that shows the main idea. 3) My family can re-tell the conclusion after one viewing.",
          hintLadder: [
            "A testable criterion can be checked yes or no.",
            "Avoid 'looks good' — swap it for something measurable.",
            "Make all three tied to YOUR project."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Showcase Power Pose",
      prompt:
        "Stand tall, hands on hips, chin up, and hold a confident 'I've got this' pose for 30 seconds. Picture your Friday showcase going great.",
      scienceTieIn: "Standing in an open, upright posture for half a minute can lower stress signals and help you feel steadier before a big task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You just picked your capstone. What's the ONE thing you most want your family to understand by Friday, and why does it matter to you?",
      badge: { id: "capstone-launchpad", name: "Capstone Launchpad", emoji: "🚀" },
      estimatedMinutes: 7
    }
  }
};
