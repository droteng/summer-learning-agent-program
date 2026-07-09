// Grade 6 ELA/Writing — Winter Expedition, Week 1 (Winter Warm-Up), Day 3.
// Topic: goal-setting writing — specific, measurable winter goals.

export const winterG6ElaW1D3 = {
  id: "g6.winter.ela.w1.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Writing specific, measurable winter goals",
  topicTag: "goal-setting-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.4", "CCSS.W.6.10"],
  hook: "A goal you can't measure is just a wish. 'Get better at math' drifts away like snow; 'solve 10 word problems a week until winter break' sticks. Today you turn foggy winter wishes into sharp, measurable goals you can actually track.",
  miniLesson: [
    "A strong goal is SPECIFIC (exactly what you'll do) and MEASURABLE (a number or amount you can check).",
    "Add a TIME FRAME so you know when to check it: 'by the end of the month,' 'each week this winter.'",
    "Compare: 'read more' is vague; 'read 20 pages every night before winter break' is specific, measurable, and timed — you can prove whether you did it."
  ],
  workedExample: {
    prompt: "Turn this vague winter wish into a specific, measurable, timed goal: 'get better at ice skating.'",
    steps: [
      "Name exactly WHAT you'll do: practice skating.",
      "Add a MEASURE — how much or how often: three times a week for 30 minutes.",
      "Add a TIME FRAME: until the pond thaws at the end of February.",
      "Combine them into one clear sentence."
    ],
    answer: "I will practice ice skating three times a week for 30 minutes until the end of February."
  },
  items: [
    {
      id: "g6.winter.ela.w1.d3.q1",
      type: "multiple_choice",
      stem: "Which of these is a SPECIFIC, MEASURABLE goal?",
      choices: [
        "I want to be smarter this winter.",
        "I will read one book each week until winter break.",
        "I'll try harder at school.",
        "I hope to do well."
      ],
      answerIndex: 1,
      explanation: "It names exactly what ('read one book'), a measurable amount ('each week'), and a time frame ('until winter break') — you can check whether you did it.",
      hintLadder: [
        "A measurable goal has a number or amount you can count.",
        "Which one tells you exactly HOW MUCH and BY WHEN?",
        "The 'one book each week' goal can be checked off."
      ]
    },
    {
      id: "g6.winter.ela.w1.d3.q2",
      type: "multiple_choice",
      stem: "Why is 'I want to get better at basketball this winter' a WEAK goal?",
      choices: [
        "It has no measurable amount or time frame, so you can't tell if you reached it",
        "It's too long a sentence",
        "Basketball is not a winter sport",
        "It uses the word 'want'"
      ],
      answerIndex: 0,
      explanation: "'Get better' has no number or deadline, so there's no way to measure success. Adding an amount and a time frame fixes it.",
      hintLadder: [
        "Ask: how would you PROVE you reached this goal?",
        "There's no amount and no deadline here.",
        "A goal you can't measure is really just a wish."
      ],
      misconceptionsTargeted: ["effort-is-a-goal"]
    },
    {
      id: "g6.winter.ela.w1.d3.q3",
      type: "multiple_choice",
      stem: "Which revision makes the goal 'practice piano more' MEASURABLE?",
      choices: [
        "Practice piano a lot this winter.",
        "Really focus on piano.",
        "Practice piano for 20 minutes every day until February.",
        "Get good at piano soon."
      ],
      answerIndex: 2,
      explanation: "It adds an exact amount (20 minutes), a frequency (every day), and a time frame (until February) — all measurable.",
      hintLadder: [
        "Look for a number you could actually count or time.",
        "Which one has minutes AND a deadline?",
        "'20 minutes every day until February' can be checked."
      ]
    },
    {
      id: "g6.winter.ela.w1.d3.q4",
      type: "short_answer",
      stem: "Write ONE specific, measurable winter goal for yourself. Include exactly what you'll do, how much or how often, and by when.",
      rubric: {
        level3: "Goal is specific (clear action), measurable (a number/amount or frequency), AND timed (a deadline or 'this winter' frame).",
        level2: "Has a clear action and one of measurable OR timed, but is missing the other.",
        level1: "Vague wish with no measurable amount and no time frame."
      },
      exemplar: "This winter I will write in my journal for 10 minutes every night before bed until the end of January.",
      hintLadder: [
        "Start with an action you actually want to do this winter.",
        "Add a number: how much or how often?",
        "Add a deadline so you know when to check it."
      ]
    },
    {
      id: "g6.winter.ela.w1.d3.q5",
      type: "short_answer",
      stem: "Take this vague goal — 'help out more at home this winter' — and rewrite it as a specific, measurable, timed goal. Then explain what made your version stronger.",
      rubric: {
        level3: "Rewrites into a specific, measurable, timed goal AND explains that it added an exact action, an amount/frequency, and a deadline.",
        level2: "Improves the goal but the explanation of WHY it's stronger is thin or missing one element.",
        level1: "Rewrite is still vague or no explanation given."
      },
      exemplar: "Stronger goal: 'I will clear the table and load the dishwasher every night this winter until spring.' It's stronger because it names the exact chore, says how often (every night), and gives a time frame, so anyone could check whether I did it.",
      hintLadder: [
        "Pick one exact way to help — what task?",
        "How often will you do it, and until when?",
        "Then explain which parts you added to make it measurable."
      ]
    }
  ],
  reflectionPrompt: "Which of your winter goals matters most to you, and how will you KNOW you reached it? Save it — you'll track it all season.",
  misconceptionBank: [
    {
      id: "effort-is-a-goal",
      label: "Thinks 'try harder' counts as a goal",
      description: "Treats general effort words like 'try harder' or 'do my best' as goals, even though they can't be measured.",
      coachMove: "Ask: 'How would we PROVE you did it?' Then help attach a number and a deadline to turn effort into a measurable goal."
    },
    {
      id: "no-time-frame",
      label: "Leaves out the time frame",
      description: "Writes a measurable action but never says by when, so there's no point to check progress.",
      coachMove: "Have the student add 'by ___' or 'each week until ___' so the goal has a clear finish line."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Wish or Goal?",
      prompt:
        "Two winter statements: (A) 'I want to be a better reader.' (B) 'I will read 15 pages every night until winter break.' Which one could you actually TRACK and check off — and what makes the other just a wish?",
      answer:
        "(B) is a real goal — it has an amount (15 pages), a frequency (every night), and a deadline (winter break), so you can track it. (A) has no number or deadline, so it's just a wish you can't measure.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Winter Goal Snowflake",
      challenge:
        "Design a 'Goal Snowflake' with a big center goal for the winter and several arms, each holding one specific, measurable, timed step toward it. Make every arm something you could check off.",
      steps: [
        "Write your main winter goal in the center of the snowflake.",
        "Draw at least four arms and write one small, measurable step on each.",
        "Make sure each step has an amount or frequency AND a deadline.",
        "Circle the first step you'll start this week."
      ],
      deliverable: "A goal snowflake with a center goal and at least four measurable, timed step-arms.",
      choiceBoard: [
        "Draw the snowflake with labeled arms.",
        "Write a numbered 'winter goal checklist' with a checkbox per step.",
        "Record a 30-second pep talk stating your goal and how you'll measure it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Goal-Setting Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w1.d3.arena1",
          type: "multiple_choice",
          stem: "Which goal is the STRONGEST — specific, measurable, AND timed?",
          choices: [
            "Do better in science this winter.",
            "Study science sometimes.",
            "Try to like science more.",
            "Review my science notes for 15 minutes after school, four days a week, until winter break."
          ],
          answerIndex: 3,
          explanation: "It names the exact action (review notes), a measurable amount (15 minutes, four days a week), and a time frame (until winter break) — all three marks of a strong goal.",
          hintLadder: [
            "A strong goal is specific, measurable, AND timed.",
            "Which one has an amount, a frequency, AND a deadline?",
            "The 15-minutes, four-days-a-week goal has all three."
          ]
        },
        {
          id: "g6.winter.ela.w1.d3.arena2",
          type: "short_answer",
          stem: "Take this weak goal — 'get more sleep this winter' — and rewrite it as a specific, measurable, timed goal.",
          rubric: {
            level3: "Produces a goal that is specific (clear action), measurable (an amount/time), AND timed (a deadline or nightly frame).",
            level2: "Improves it but is missing either the measurable amount or the time frame.",
            level1: "Rewrite is still vague with no number and no deadline."
          },
          exemplar: "I will turn off my screens by 9:00 p.m. and be in bed by 9:30 every school night this winter.",
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
      scienceTieIn: "Slow, steady breathing calms your nervous system and helps your brain focus — a clear mind makes it easier to picture and commit to a goal.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write your single most important winter goal in one specific, measurable sentence. How exactly will you KNOW when you've reached it?",
      badge: { id: "winter-goal-architect", name: "Winter Goal Architect", emoji: "🎯" },
      estimatedMinutes: 7
    }
  }
};
