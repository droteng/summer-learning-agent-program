// Grade 5 Summer — Week 2, Day 4.
// Topic: numbers in the news / putting numbers in context (grade-5 depth: friendly ratios per 100).
// Grade-5 counterpart of grade6/week2/world-day4.js, pitched down.

export const summerG5WorldW2D4 = {
  id: "g5.summer.world.w2.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Numbers in the news",
  topicTag: "numerical-context",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.8.3-5", "C3.D2.Geo.5.3-5"],
  hook: "A big number can SOUND huge — but is it really? Today you learn to put numbers in context before you believe them.",
  miniLesson: [
    "A number by itself can trick you. Always ask: out of how many, and compared to what?",
    "Comparing 'per 100 people' helps you fairly compare a small town and a big city.",
    "Always check if a number is for one day, one month, or one year before you react to it."
  ],
  workedExample: {
    prompt:
      "Headline: 'Town A had 300 bike riders today!' Town A has 1,000 people. Town B had 150 riders out of 500 people. Which town has more bike riders for its size?",
    steps: [
      "Town A: 300 riders out of 1,000 people. Per 100 people that's 300 ÷ 10 = 30 riders per 100.",
      "Town B: 150 riders out of 500 people. Per 100 people that's 150 ÷ 5 = 30 riders per 100.",
      "Both towns have 30 riders per 100 people, so they are equally bike-friendly!",
      "The bigger total (300) did NOT mean more riders for its size."
    ],
    answer: "They are the same — 30 riders per 100 people each."
  },
  items: [
    {
      id: "g5.summer.world.w2.d4.q1",
      type: "multiple_choice",
      stem: "A country reports 200 new playgrounds built. To know if that is a lot, you should also ask:",
      choices: [
        "What color the playgrounds are",
        "How many people live in the country",
        "What the president's name is",
        "How tall the slides are"
      ],
      answerIndex: 1,
      explanation: "Population gives context. 200 playgrounds in a tiny country vs. a giant one are very different stories.",
      hintLadder: [
        "What fact turns a number from 'a lot' into 'a little'?",
        "Think: 'for how many people?'",
        "The number of people is the key."
      ]
    },
    {
      id: "g5.summer.world.w2.d4.q2",
      type: "numeric",
      stem:
        "A town has 40 doctors and 2,000 people. How many doctors are there per 100 people? (Hint: divide 40 by 2,000, then multiply by 100.)",
      answer: 2,
      tolerance: 0,
      unit: "doctors per 100 people",
      hintLadder: [
        "Step 1: 40 ÷ 2,000 = 0.02.",
        "Step 2: multiply by 100.",
        "0.02 × 100 = 2 doctors per 100 people."
      ],
      explanation: "40 ÷ 2,000 = 0.02, and 0.02 × 100 = 2 doctors per 100 people."
    },
    {
      id: "g5.summer.world.w2.d4.q3",
      type: "multiple_choice",
      stem:
        "Two headlines:\n A: '100 new trees planted this month'\n B: '100 new trees planted today'\nWhich shows faster planting?",
      choices: ["A is faster", "They are the same", "B is faster", "Cannot tell"],
      answerIndex: 2,
      explanation: "100 trees in one day is faster than 100 trees spread across a whole month.",
      hintLadder: [
        "How long did each one take?",
        "B's number is for one day; A's is for one month.",
        "One day is much faster than one month."
      ],
      misconceptionsTargeted: ["ignores-time-period"]
    },
    {
      id: "g5.summer.world.w2.d4.q4",
      type: "multiple_choice",
      stem:
        "Headline: 'Lost pets found doubled this year!' What is the most important follow-up question?",
      choices: [
        "What was the starting number — 3 or 3,000?",
        "How tall is the animal shelter?",
        "Who painted the shelter?",
        "What time was the story written?"
      ],
      answerIndex: 0,
      explanation: "'Doubled' from 3 is only 6 — barely news. 'Doubled' from 3,000 is 6,000 — a big story. Always ask the starting number.",
      hintLadder: [
        "What does the word 'doubled' depend on?",
        "Ask for the starting number.",
        "Without the starting number, 'doubled' tells you almost nothing."
      ],
      misconceptionsTargeted: ["accepts-doubled-as-big"]
    },
    {
      id: "g5.summer.world.w2.d4.q5",
      type: "short_answer",
      stem:
        "A post says: '100,000 people came to the parade!' What is one question you would ask before believing it?",
      rubric: {
        level3: "Asks a specific checking question (Who counted? How was it counted? How big is the space? Compared to past parades?).",
        level2: "Shows doubt but does not suggest a specific check.",
        level1: "Just accepts or rejects the number with no reasoning."
      },
      exemplar:
        "I'd ask: how was the count made — from tickets, an official guess, or just a feeling? And how many people can that street actually hold?",
      hintLadder: [
        "What could go wrong with the number?",
        "Pick one specific thing to check.",
        "Who counted, or how big the space is, are both good checks."
      ]
    }
  ],
  reflectionPrompt: "Today you put numbers in context. What is a recent number you heard that you would want to fact-check?",
  misconceptionBank: [
    {
      id: "ignores-time-period",
      label: "Ignores how long it took",
      description: "Compares numbers without checking if they are for one day, one month, or one year.",
      coachMove: "Always ask: over how long? Per-day and per-year tell very different stories."
    },
    {
      id: "accepts-doubled-as-big",
      label: "Thinks 'doubled' always means big news",
      description: "Reacts strongly to words like 'doubled' without checking the starting number.",
      coachMove: "'Doubled' means nothing without a starting number. Always ask what the number started at."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather win a raffle where '1 in 4' people win, or one where '500 winners' are picked? You can't decide yet — what is the ONE missing number you need for each before you choose?",
      answer:
        "You need the total! '1 in 4' is a great chance no matter the size. '500 winners' could be amazing (out of 1,000) or terrible (out of a million). A plain number means nothing without 'out of how many.'",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Headline Fact-Checker",
      challenge:
        "Be a newsroom fact-checker! Write TWO versions of the same headline about a number — one that is misleading (no context) and one that is honest (with context) — then explain what context you added.",
      steps: [
        "Pick a topic with a number (gamers, pets, pizza eaten, trees planted).",
        "Write a 'scary' or 'amazing' headline that hides the context.",
        "Rewrite it honestly by adding 'out of how many' or 'over how long.'",
        "Write one sentence explaining how the context changes the story."
      ],
      deliverable: "A pair of headlines (misleading vs. honest) plus a sentence explaining the context you added.",
      choiceBoard: [
        "Design it as a mock newspaper front page with both headlines.",
        "Record a 30-second 'breaking news' broadcast reading both versions.",
        "Make a two-panel comic: a panicking reader vs. a calm fact-checker."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Context Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.world.w2.d4.arena1",
          type: "numeric",
          stem:
            "Town A had 60 library visits and 300 people. How many library visits are there PER 100 people in Town A? (Hint: divide visits by people, then multiply by 100.)",
          answer: 20,
          tolerance: 0,
          unit: "visits per 100 people",
          hintLadder: [
            "Per 100 people = (visits ÷ people) × 100.",
            "60 ÷ 300 = 0.2.",
            "0.2 × 100 = 20 visits per 100 people."
          ],
          explanation:
            "Town A: 60 ÷ 300 = 0.2, times 100 = 20 visits per 100 people."
        },
        {
          id: "g5.summer.world.w2.d4.arena2",
          type: "short_answer",
          stem:
            "A headline reads: 'Bee stings UP this summer!' List TWO different questions you would ask before deciding whether this is worrying, and explain why each one matters.",
          rubric: {
            level3: "Asks two different context questions (e.g., the starting number AND the time period or the area/how many people) and explains why each one changes the meaning.",
            level2: "Asks two questions but only explains one, or the two are almost the same.",
            level1: "Asks only one question or reacts without suggesting a check."
          },
          exemplar:
            "First, what was the starting number? Up from 2 stings to 4 is barely news, but up from 200 to 400 is serious. Second, over what area? All across the country is very different from just one park.",
          hintLadder: [
            "The word 'up' depends on what starting number?",
            "A second question could be about time or how big an area it covers.",
            "Each question should change whether the headline is scary or boring."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Scale It Down",
      prompt:
        "Stand up and shake the 'big scary numbers' out of your arms and shoulders for 20 seconds. Then take three slow breaths and tell yourself: a number is just a number until you give it context. Roll your shoulders back and relax.",
      scienceTieIn:
        "Shaking out your muscles releases tension, and slow breathing calms your body so you can think clearly instead of reacting quickly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Today you learned that headlines can use true numbers to tell a misleading story. Why do you think people sometimes share numbers WITHOUT their context, and how can you keep from being fooled?",
      badge: { id: "g5-summer-context-captain", name: "Context Captain", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
