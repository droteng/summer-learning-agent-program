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
  estimatedMinutes: 60, // full Daily Hour
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
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Loud or Listened-To?",
      prompt:
        "Would you rather be the loudest person in the room, or the person everyone actually listens to? Pick one and explain what's different between them.",
      answer: "There's no wrong pick — but the person people listen to usually leads, while the loudest is just the loudest. Real leadership is about moving people toward a goal, not volume.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Campaign for a Change",
      challenge:
        "Pick one real improvement for your school or neighborhood and build a mini-campaign for it the way a strong leader would — with facts and a clear ask, not just a complaint.",
      steps: [
        "Name your goal in one clear sentence (the 'ask').",
        "Find or estimate one fact that supports it (a number, a count, an observation).",
        "List the people whose help you'd need — leaders rarely act alone.",
        "Design a poster or 20-second pitch that uses your fact and your ask."
      ],
      deliverable: "A campaign poster or written pitch with a clear ask, one supporting fact, and the team you'd need.",
      choiceBoard: [
        "Make the campaign poster.",
        "Write a 20-second persuasive pitch.",
        "Draft a one-paragraph letter to a decision-maker."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Leadership Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.hist.w7.d3.arena1",
          type: "multiple_choice",
          stem: "The Montgomery bus boycott lasted over a year. Which factor was MOST essential to making it work?",
          choices: [
            "One famous leader refusing to ride the bus alone.",
            "Tens of thousands of people sustaining the boycott together with organized carpools.",
            "Buses being painted a new color.",
            "The protest being short and over quickly."
          ],
          answerIndex: 1,
          explanation: "A boycott only works at scale: tens of thousands of riders staying off the buses for over a year, supported by organized carpools, is what created real pressure. No single leader can boycott for a whole community.",
          hintLadder: [
            "A boycott means lots of people NOT doing something.",
            "Could one person alone create that pressure?",
            "It took tens of thousands acting together, with organized logistics."
          ]
        },
        {
          id: "g6.hist.w7.d3.arena2",
          type: "short_answer",
          stem: "A classmate says 'A good leader does everything themselves and never asks for help.' Explain why that's a weak idea, using one example.",
          rubric: {
            level3: "Explains that real leaders rely on and credit a team, with a concrete example (e.g., a boycott or project needs many people), and notes that doing everything alone fails at scale.",
            level2: "Disagrees and gives some reasoning but the example is vague.",
            level1: "Just says 'that's wrong' without explanation or example."
          },
          exemplar: "Big changes need lots of people, so a leader who refuses help can't get far — the Montgomery boycott needed tens of thousands of riders and volunteer drivers, not one person doing it all. Good leaders organize and credit a team.",
          hintLadder: [
            "Think about whether one person can move a whole movement alone.",
            "Recall an example where many people were needed.",
            "Leaders organize teams and share credit."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Stand Tall, Speak Up",
      prompt:
        "Stand tall with shoulders back and chin level — a calm, confident 'leader's stance.' Take three slow breaths in this posture, then gently shake out your arms. Notice how steady you feel.",
      scienceTieIn: "An upright posture and slow breathing can actually lower stress signals in your body, helping you think clearly under pressure — a mind-body link you'll meet again in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of someone you'd call a real leader (famous or someone you know). What's one specific thing they DO that makes people follow them?",
      badge: { id: "change-maker", name: "Change Maker", emoji: "✊" },
      estimatedMinutes: 7
    }
  }
};
