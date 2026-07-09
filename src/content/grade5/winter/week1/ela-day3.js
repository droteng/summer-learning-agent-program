// Grade 5 ELA/Writing — Winter Expedition, Week 1 (Winter Warm-Up), Day 3.
// Grade 5 counterpart of g6.winter.ela.w1.d3. Same topic (writing specific,
// measurable winter goals) pitched down to Grade 5: paragraph frames, simpler
// examples, more vocab support. Wintry tone.

export const winterG5ElaW1D3 = {
  id: "g5.winter.ela.w1.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Writing specific, measurable winter goals",
  topicTag: "goal-setting-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.4", "CCSS.ELA-LITERACY.W.5.10"],
  hook: "A goal you cannot measure is just a wish. 'Get better at reading' drifts away like snow. 'Read 15 pages every night this winter' sticks. Today you turn foggy winter wishes into clear goals you can actually track.",
  miniLesson: [
    "A strong goal is SPECIFIC. That means it says exactly WHAT you will do — not just 'do better.'",
    "A strong goal is also MEASURABLE. That means it has a NUMBER or amount you can check, like '15 pages' or 'three times a week.'",
    "Add a TIME FRAME so you know when to check it, like 'each night' or 'until winter break.' You can use this frame: 'I will (action) (how much/how often) (by when).'"
  ],
  workedExample: {
    prompt: "Turn this vague winter wish into a specific, measurable, timed goal: 'get better at ice skating.'",
    steps: [
      "Name exactly WHAT you will do: practice skating.",
      "Add a MEASURE — how much or how often: two times a week for 20 minutes.",
      "Add a TIME FRAME: until the end of February.",
      "Put it in the frame: 'I will (action) (how often) (by when).'"
    ],
    answer: "I will practice ice skating two times a week for 20 minutes until the end of February."
  },
  items: [
    {
      id: "g5.winter.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which of these is a SPECIFIC, MEASURABLE goal?",
      choices: [
        "I want to be smarter this winter.",
        "I will try harder at school.",
        "I will read 10 pages each night until winter break.",
        "I hope to do well."
      ],
      answerIndex: 2,
      explanation: "It names exactly what ('read 10 pages'), a measurable amount ('each night'), and a time frame ('until winter break') — so you can check whether you did it.",
      hintLadder: [
        "A measurable goal has a number or amount you can count.",
        "Which one tells you exactly HOW MUCH and BY WHEN?",
        "The '10 pages each night' goal can be checked off."
      ]
    },
    {
      id: "g5.winter.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "Why is 'I want to get better at basketball this winter' a WEAK goal?",
      choices: [
        "It has no number or time frame, so you cannot tell if you reached it",
        "It is too long a sentence",
        "Basketball is not a winter sport",
        "It uses the word 'want'"
      ],
      answerIndex: 0,
      explanation: "'Get better' has no number and no deadline, so there is no way to measure success. Adding an amount and a time frame fixes it.",
      hintLadder: [
        "Ask yourself: how would you PROVE you reached this goal?",
        "There is no number and no deadline here.",
        "A goal you cannot measure is really just a wish."
      ],
      misconceptionsTargeted: ["effort-is-a-goal"]
    },
    {
      id: "g5.winter.ela.w1.d3.q3",
      type: "multiple_choice",
      stem: "Which change makes the goal 'practice piano more' MEASURABLE?",
      choices: [
        "Practice piano a lot this winter.",
        "Practice piano for 15 minutes every day until February.",
        "Really focus on piano.",
        "Get good at piano soon."
      ],
      answerIndex: 1,
      explanation: "It adds an exact amount (15 minutes), how often (every day), and a time frame (until February) — all things you can measure.",
      hintLadder: [
        "Look for a number you could actually count or time.",
        "Which one has minutes AND a deadline?",
        "'15 minutes every day until February' can be checked."
      ]
    },
    {
      id: "g5.winter.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write ONE specific, measurable winter goal for yourself. Use the frame: 'I will (action) (how much or how often) (by when).'",
      rubric: {
        level3: "Goal is specific (clear action), measurable (a number/amount or how often), AND timed (a deadline or 'this winter' frame).",
        level2: "Has a clear action and either the amount OR the time frame, but is missing one.",
        level1: "Vague wish with no number and no time frame."
      },
      exemplar: "This winter I will write in my journal for 10 minutes every night before bed until the end of January.",
      hintLadder: [
        "Start with an action you actually want to do this winter.",
        "Add a number: how much or how often?",
        "Add a deadline so you know when to check it."
      ]
    },
    {
      id: "g5.winter.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Take this vague goal — 'help out more at home this winter' — and rewrite it as a specific, measurable, timed goal. Then write one sentence about what made your version stronger.",
      rubric: {
        level3: "Rewrites into a specific, measurable, timed goal AND explains that it added an exact action, an amount/how often, and a deadline.",
        level2: "Improves the goal but the explanation of WHY it is stronger is thin or missing one part.",
        level1: "Rewrite is still vague or no explanation given."
      },
      exemplar: "Stronger goal: 'I will clear the table every night this winter until spring.' It is stronger because it names the exact chore, says how often (every night), and gives a time frame, so anyone could check whether I did it.",
      hintLadder: [
        "Pick one exact way to help — what task?",
        "How often will you do it, and until when?",
        "Then explain which parts you added to make it measurable."
      ]
    }
  ],
  reflectionPrompt: "Which of your winter goals matters most to you, and how will you KNOW you reached it? Save it — you will track it all season.",
  misconceptionBank: [
    {
      id: "effort-is-a-goal",
      label: "Thinks 'try harder' counts as a goal",
      description: "Treats general effort words like 'try harder' or 'do my best' as goals, even though they cannot be measured.",
      coachMove: "Ask: 'How would we PROVE you did it?' Then help attach a number and a deadline to turn the effort into a measurable goal."
    },
    {
      id: "no-time-frame",
      label: "Leaves out the time frame",
      description: "Writes a measurable action but never says by when, so there is no clear point to check progress.",
      coachMove: "Have the student add 'by ___' or 'each night until ___' so the goal has a clear finish line."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Wish or Goal?",
      prompt:
        "Two winter statements: (A) 'I want to be a better reader.' (B) 'I will read 10 pages every night until winter break.' Which one could you actually TRACK and check off — and what makes the other just a wish?",
      answer:
        "(B) is a real goal — it has an amount (10 pages), how often (every night), and a deadline (winter break), so you can track it. (A) has no number and no deadline, so it is just a wish you cannot measure.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Winter Goal Snowflake",
      challenge:
        "Design a 'Goal Snowflake' with a big center goal for the winter and several arms, each holding one small, measurable, timed step toward it. Make every arm something you could check off.",
      steps: [
        "Write your main winter goal in the center of the snowflake.",
        "Draw at least four arms and write one small, measurable step on each.",
        "Make sure each step has an amount or 'how often' AND a deadline.",
        "Circle the first step you will start this week."
      ],
      deliverable: "A goal snowflake with a center goal and at least four measurable, timed step-arms.",
      choiceBoard: [
        "Draw the snowflake with labeled arms.",
        "Write a numbered 'winter goal checklist' with a checkbox for each step.",
        "Record a 30-second pep talk stating your goal and how you will measure it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Goal-Setting Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which goal is the STRONGEST — specific, measurable, AND timed?",
          choices: [
            "Do better in science this winter.",
            "Study science sometimes.",
            "Try to like science more.",
            "Read my science notes for 10 minutes after school, three days a week, until winter break."
          ],
          answerIndex: 3,
          explanation: "It names the exact action (read notes), a measurable amount (10 minutes, three days a week), and a time frame (until winter break) — all three marks of a strong goal.",
          hintLadder: [
            "A strong goal is specific, measurable, AND timed.",
            "Which one has an amount, a 'how often,' AND a deadline?",
            "The 10-minutes, three-days-a-week goal has all three."
          ]
        },
        {
          id: "g5.winter.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Take this weak goal — 'get more sleep this winter' — and rewrite it as a specific, measurable, timed goal.",
          rubric: {
            level3: "Produces a goal that is specific (clear action), measurable (a time or amount), AND timed (a deadline or nightly frame).",
            level2: "Improves it but is missing either the measurable amount or the time frame.",
            level1: "Rewrite is still vague with no number and no deadline."
          },
          exemplar: "I will be in bed with the lights off by 9:00 every school night this winter.",
          hintLadder: [
            "What exact bedtime action will you take?",
            "Add a specific time and how often.",
            "Add a time frame like 'every school night this winter.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Snowy Breath Focus",
      prompt:
        "Sit tall and picture a single snowflake drifting down. Breathe in slowly for 4 counts as it rises, hold for 2, and breathe out for 4 as it lands. Repeat 5 times, picturing your top winter goal as the snowflake settles.",
      scienceTieIn: "Slow, steady breathing calms your body and helps your brain focus — a calm mind makes it easier to picture and stick to a goal.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your single most important winter goal in one specific, measurable sentence. How exactly will you KNOW when you have reached it?",
      badge: { id: "g5-winter-goal-architect", name: "Winter Goal Architect", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
