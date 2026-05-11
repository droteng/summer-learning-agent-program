// Grade 6 World/Current Affairs — Week 2, Day 4.
// Topic: numbers in news (population, scale).

export const grade6WorldWeek2Day4 = {
  id: "g6.world.w2.d4",
  gradeLevel: 6,
  weekNumber: 2,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Numbers in the news",
  topicTag: "numerical-context",
  estimatedMinutes: 16,
  standardsRefs: ["C3.D2.Geo.7.6-8"],
  hook: "A big number sounds dramatic — but is it really big? Today you put numbers in context.",
  miniLesson: [
    "A number alone can mislead. Always ask: out of how many, and compared to what?",
    "Per-person (per capita) numbers help compare countries of different sizes.",
    "Always check whether a number is yearly, monthly, or one-time before reacting."
  ],
  workedExample: {
    prompt:
      "Headline: 'City A had 5,000 bike riders today!' City A has 50,000 people. City B has 2,000 bike riders out of 10,000 people. Which city has more bike riders per person?",
    steps: [
      "City A: 5,000 / 50,000 = 0.10, or 10% riders.",
      "City B: 2,000 / 10,000 = 0.20, or 20% riders.",
      "City B has a higher share even though City A has more total riders.",
      "Per person, City B is the more bike-friendly place."
    ],
    answer: "City B (20% vs 10%)."
  },
  items: [
    {
      id: "g6.world.w2.d4.q1",
      type: "multiple_choice",
      stem: "Country X reports 500 new schools built. To know if that's a lot, you should also ask:",
      choices: [
        "What color the schools are",
        "How many people live in Country X",
        "What the prime minister's name is",
        "How tall the schools are"
      ],
      answerIndex: 1,
      explanation: "Population gives you context. 500 schools in a country of 100,000 vs. 1 billion are very different stories.",
      hintLadder: [
        "What context turns a number from 'a lot' to 'a little'?",
        "Think 'per how many people?'",
        "Population size is the key."
      ]
    },
    {
      id: "g6.world.w2.d4.q2",
      type: "numeric",
      stem:
        "Country A has 60,000 doctors and a population of 30,000,000. How many doctors per 1,000 people? (Hint: divide doctors by population, then multiply by 1000.)",
      answer: 2,
      tolerance: 0,
      hintLadder: [
        "Step 1: 60,000 / 30,000,000 = ?",
        "That's 0.002.",
        "Multiply by 1,000: 0.002 × 1,000 = 2."
      ],
      explanation: "60,000 / 30,000,000 × 1,000 = 2 doctors per 1,000 people."
    },
    {
      id: "g6.world.w2.d4.q3",
      type: "multiple_choice",
      stem: "Two news headlines:\n A: '500 new electric cars sold this month'\n B: '500 new electric cars sold today'\nWhich is faster growth?",
      choices: ["A is faster", "B is faster", "They are the same", "Cannot tell"],
      answerIndex: 1,
      explanation: "500 in one day is faster than 500 spread across a month.",
      hintLadder: [
        "How long did each take?",
        "B's number is per day; A's is per month.",
        "Per-day is much faster."
      ],
      misconceptionsTargeted: ["ignores-time-period"]
    },
    {
      id: "g6.world.w2.d4.q4",
      type: "multiple_choice",
      stem:
        "Headline: 'Cyber attacks doubled this year!' What's the most important follow-up question?",
      choices: [
        "How tall is the building?",
        "What was the starting number — 2 or 2 million?",
        "Who designed the website?",
        "What time was the article written?"
      ],
      answerIndex: 1,
      explanation: "'Doubled' from 2 is 4 — barely news. 'Doubled' from 2 million is 4 million — a real story. Always ask the baseline.",
      hintLadder: [
        "What does 'doubled' depend on?",
        "Ask for the starting number.",
        "Without baseline, doubling is meaningless."
      ],
      misconceptionsTargeted: ["accepts-doubled-as-big"]
    },
    {
      id: "g6.world.w2.d4.q5",
      type: "short_answer",
      stem:
        "A post says: '1,000,000 people attended the concert!' What's one question you would ask before believing it?",
      rubric: {
        level3: "Asks a specific verifying question (source? counted how? venue capacity? compared to past concerts?).",
        level2: "Expresses doubt but doesn't propose a check.",
        level1: "Accepts or rejects the number without reasoning."
      },
      exemplar:
        "I'd ask: how was the count made — ticket sales, an official estimate, or a guess? And what's the venue's max capacity?",
      hintLadder: [
        "What could go wrong with the number?",
        "Pick one specific check.",
        "Source or venue capacity are both good."
      ]
    }
  ],
  reflectionPrompt: "Today you put numbers in context. What's a recent headline number you'd want to fact-check?",
  misconceptionBank: [
    {
      id: "ignores-time-period",
      label: "Ignores the time period",
      description: "Compares numbers without checking whether they're per day, per month, or per year.",
      coachMove: "Always ask: over how long? Per-second, per-day, and per-year produce very different stories."
    },
    {
      id: "accepts-doubled-as-big",
      label: "Accepts 'doubled' or 'tripled' as big news",
      description: "Reacts strongly to multiplier words without checking the baseline.",
      coachMove: "Multipliers without a baseline are meaningless. Always ask the starting number."
    }
  ]
};
