// Grade 6 History — Week 7, Day 3.
// Topic: leadership and citizenship.

export const grade6HistoryWeek7Day3 = {
  id: "g6.hist.w7.d3",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 3,
  subject: "History/Civics",
  topic: "Leadership and citizenship",
  topicTag: "leadership",
  estimatedMinutes: 18,
  standardsRefs: ["C3.D2.Civ.1.6-8", "C3.D2.Civ.6.6-8"],
  hook: "Leaders make hard choices under real pressure. Today you study one move and decide what made it work.",
  miniLesson: [
    "Leadership isn't position alone. It's choosing well when the choice is hard and the timing matters.",
    "Citizenship is everyone's job — voting, serving on a jury, paying taxes, helping neighbors, and speaking up respectfully when something is wrong.",
    "Famous leaders almost always credit a team. The 'lone hero' story misses the people without whom the work fails."
  ],
  workedExample: {
    prompt:
      "Civil-rights leader's bus boycott (Montgomery, 1955-56): what made it work as a movement?",
    steps: [
      "Clear, focused goal: integrate city buses.",
      "Collective action: ~40,000 Black residents stopped riding for over a year.",
      "Organized logistics: carpools and volunteer drivers replaced the buses.",
      "Discipline: nonviolent protest under sustained pressure."
    ],
    answer: "Clear goal, organized many people, kept discipline over a long stretch."
  },
  items: [
    {
      id: "g6.hist.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which is the BEST definition of leadership?",
      choices: [
        "Having a fancy title.",
        "Choosing well under pressure and helping a team succeed.",
        "Being loudest.",
        "Never asking for help."
      ],
      answerIndex: 1,
      explanation: "Leadership is about choice and team. Title is structural; loudness and isolation often hurt teams.",
      hintLadder: [
        "Skip 'loud' and 'no help'.",
        "Title alone isn't enough.",
        "Choice + team is the core."
      ]
    },
    {
      id: "g6.hist.w7.d3.q2",
      type: "multiple_choice",
      stem: "Which is a CITIZEN'S job in a democracy?",
      choices: [
        "Only the president has jobs.",
        "Vote, serve on juries, follow laws, and speak up respectfully.",
        "Citizens watch and do nothing.",
        "Memorize all the laws."
      ],
      answerIndex: 1,
      explanation: "Citizenship is participation. It includes voting, juries, taxes, and respectful civic voice.",
      hintLadder: [
        "What does a citizen actually do?",
        "Multiple things.",
        "Vote, juries, speak up."
      ]
    },
    {
      id: "g6.hist.w7.d3.q3",
      type: "multiple_choice",
      stem:
        "Why did the Montgomery bus boycott need so many people, not just one leader?",
      choices: [
        "Leaders prefer being alone.",
        "Tens of thousands had to actually stop riding the buses for the protest to work.",
        "Crowds look better in photos.",
        "Movements only count if they're big."
      ],
      answerIndex: 1,
      explanation: "A boycott only works if enough people actually stop participating. One leader can't refuse to ride for 40,000.",
      hintLadder: [
        "What does a boycott require?",
        "Lots of people not riding.",
        "Scale is the lever."
      ]
    },
    {
      id: "g6.hist.w7.d3.q4",
      type: "multiple_choice",
      stem:
        "A class wants to convince the school to add a recycling program. Which is the STRONGEST first step?",
      choices: [
        "Yell at the principal.",
        "Research how much waste their school produces and draft a one-page proposal.",
        "Wait for someone else to act.",
        "Quit talking about it."
      ],
      answerIndex: 1,
      explanation: "Strong civic action pairs facts (waste numbers) with a clear ask (proposal). Yelling and waiting don't move decisions.",
      hintLadder: [
        "Decisions need data and a clear ask.",
        "Skip yelling and waiting.",
        "Research + proposal."
      ],
      misconceptionsTargeted: ["yelling-is-leadership"]
    },
    {
      id: "g6.hist.w7.d3.q5",
      type: "short_answer",
      stem:
        "Pick a small change you'd like in your school or neighborhood. Write one citizen action you could take this week, with a specific next step.",
      rubric: {
        level3: "Names a specific change, a specific civic action (not just an opinion), and a concrete next step with a person/place/time.",
        level2: "Has change + action but no concrete step.",
        level1: "Vague complaint without action."
      },
      exemplar:
        "Change: a safer crosswalk near the school. Action: write a short letter to the city council with photos of the crossing. Next step: take photos Wednesday after school, draft the letter Thursday, mail it Friday.",
      hintLadder: [
        "Pick something small enough to start.",
        "Name the action, not the feeling.",
        "Add a specific time or place."
      ]
    }
  ],
  reflectionPrompt: "Today you thought about leadership and citizenship. What's one small civic action you could take this month?",
  misconceptionBank: [
    {
      id: "yelling-is-leadership",
      label: "Confuses volume with leadership",
      description: "Treats yelling, dominance, or loudest-wins as the same as leading.",
      coachMove: "Leadership moves people toward a goal. Volume rarely does that — research and clear asks do."
    }
  ]
};
