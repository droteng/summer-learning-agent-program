// Grade 5 Summer History/Civics — Week 7 (History Missions), Day 3.
// Grade-5 counterpart of g6.hist.w7.d3 (leadership and citizenship), pitched down
// one level: vocab support, a simple boycott example, and a paragraph frame.

export const summerG5HistoryW7D3 = {
  id: "g5.summer.hist.w7.d3",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 3,
  subject: "History/Civics",
  topic: "Leadership and citizenship",
  topicTag: "leadership",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Civ.1.3-5", "C3.D2.Civ.6.3-5"],
  hook: "Real leaders make good choices when things are hard, and they work with a team. Today you study one famous action and figure out what made it work.",
  keyTerms: [
    { term: "Leadership", definition: "Helping a group make good choices and reach a goal together." },
    { term: "Citizen", definition: "A member of a community or country who has both rights and jobs to do." },
    { term: "Boycott", definition: "When many people agree to stop using something to make a change." }
  ],
  miniLesson: [
    "Leadership is not just having a big title. It is making a good choice when the choice is hard, and helping a team win.",
    "Being a citizen is everyone's job. Citizens vote, follow laws, help neighbors, and speak up kindly when something is wrong.",
    "Big changes almost always need a team. The 'one hero alone' story usually leaves out the many people who really made it work."
  ],
  workedExample: {
    prompt:
      "In 1955-56, people in Montgomery held a year-long bus boycott. What made it work?",
    steps: [
      "They had one clear goal: fair treatment on the city buses.",
      "Thousands of people agreed to stop riding the buses together.",
      "They planned carpools so people could still get to work.",
      "They stayed peaceful and kept going for over a year."
    ],
    answer: "A clear goal, lots of people working together, and staying strong for a long time."
  },
  items: [
    {
      id: "g5.summer.hist.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which is the BEST meaning of leadership?",
      choices: [
        "Having a fancy title.",
        "Making good choices and helping a team reach a goal.",
        "Being the loudest person.",
        "Never asking anyone for help."
      ],
      answerIndex: 1,
      explanation: "Leadership is about good choices and teamwork. A title alone, being loud, or working all alone does not make a leader.",
      hintLadder: [
        "Skip 'loudest' and 'no help.'",
        "A title by itself is not enough.",
        "Good choices plus a team is the key."
      ]
    },
    {
      id: "g5.summer.hist.w7.d3.q2",
      type: "multiple_choice",
      stem: "Which is a job of a good citizen?",
      choices: [
        "Only the President has any jobs.",
        "Voting, following laws, helping neighbors, and speaking up kindly.",
        "Watching and doing nothing.",
        "Memorizing every single law."
      ],
      answerIndex: 1,
      explanation: "Being a citizen means taking part: voting, following laws, helping others, and using your voice respectfully.",
      hintLadder: [
        "What does a citizen actually do?",
        "It is more than one thing.",
        "Vote, follow laws, help, and speak up."
      ]
    },
    {
      id: "g5.summer.hist.w7.d3.q3",
      type: "multiple_choice",
      stem: "Why did the Montgomery bus boycott need so many people, not just one leader?",
      choices: [
        "Leaders like to be alone.",
        "A boycott only works if thousands of people really stop riding the buses.",
        "Big crowds look nice in photos.",
        "Only large protests are allowed."
      ],
      answerIndex: 1,
      explanation: "A boycott works when enough people stop taking part. One leader alone cannot refuse to ride for a whole city.",
      hintLadder: [
        "What does a boycott need to work?",
        "Many people not riding the buses.",
        "It takes a big group, not one person."
      ],
      misconceptionsTargeted: ["yelling-is-leadership"]
    },
    {
      id: "g5.summer.hist.w7.d3.q4",
      type: "short_answer",
      stem:
        "A class wants the school to start recycling. In one or two sentences, describe a strong first step and explain why yelling at the principal would NOT work well.",
      rubric: {
        level3: "Names a strong first step (like counting the waste and writing a clear proposal) and explains that yelling does not give facts or a clear ask.",
        level2: "Names a decent step OR explains why yelling fails, but not both.",
        level1: "Suggests yelling or waiting, or gives no real reason."
      },
      exemplar:
        "A strong first step is to count how much waste the school makes and write a short, clear proposal. Yelling would not work because it gives no facts and no clear ask, so it will not change the decision.",
      hintLadder: [
        "Decisions need facts and a clear ask.",
        "Yelling gives neither of those.",
        "Count the waste, then write a proposal."
      ]
    },
    {
      id: "g5.summer.hist.w7.d3.q5",
      type: "short_answer",
      stem:
        "Pick a small change you want in your school or neighborhood. Fill in this frame: 'I want ___. This week I could ___ (a real action). My first step is ___ (with a day, place, or person).'",
      rubric: {
        level3: "Names a specific change, a real citizen action (not just a feeling), and a concrete first step with a day, place, or person.",
        level2: "Has a change and an action, but no clear first step.",
        level1: "Just a complaint, with no action."
      },
      exemplar:
        "I want a safer crosswalk near school. This week I could write a short letter to the city with photos. My first step is to take photos on Wednesday after school.",
      hintLadder: [
        "Pick something small enough to start.",
        "Name the action, not just the feeling.",
        "Add a day, place, or person for your first step."
      ]
    }
  ],
  reflectionPrompt: "Today you thought about leadership and citizenship. What is one small citizen action you could take this month?",
  misconceptionBank: [
    {
      id: "yelling-is-leadership",
      label: "Thinks being loud means leading",
      description: "Believes yelling or being the loudest is the same as leadership.",
      coachMove: "Leadership moves people toward a goal. Yelling rarely does that. Facts and a clear ask do."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Loud or Listened-To?",
      prompt:
        "Would you rather be the loudest person in the room, or the person everyone actually listens to? Pick one and explain the difference.",
      answer: "There is no wrong pick, but the person people listen to usually leads, while the loudest is just the loudest. Real leadership is about moving people toward a goal, not being loud.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Campaign for a Change",
      challenge:
        "Pick one real improvement for your school or neighborhood and build a mini-campaign for it, the way a strong leader would, with facts and a clear ask, not just a complaint.",
      steps: [
        "Write your goal in one clear sentence (the 'ask').",
        "Find or guess one fact that supports it (a number, a count, or something you noticed).",
        "List the people whose help you would need, because leaders rarely act alone.",
        "Make a poster or a 20-second pitch that uses your fact and your ask."
      ],
      deliverable: "A campaign poster or written pitch with a clear ask, one supporting fact, and the team you would need.",
      choiceBoard: [
        "Make the campaign poster.",
        "Write a 20-second persuasive pitch.",
        "Write a short letter to a decision-maker."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Leadership Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w7.d3.arena1",
          type: "multiple_choice",
          stem: "The Montgomery bus boycott lasted over a year. Which thing was MOST important for making it work?",
          choices: [
            "One famous person refusing to ride the bus alone.",
            "Thousands of people staying off the buses together, with carpools to help.",
            "The buses getting a new coat of paint.",
            "The protest being short and over fast."
          ],
          answerIndex: 1,
          explanation: "A boycott needs many people. Thousands staying off the buses for over a year, with carpools to help, is what made real change. One person alone could not do it.",
          hintLadder: [
            "A boycott means many people NOT doing something.",
            "Could one person alone make that much pressure?",
            "It took thousands acting together, with carpools."
          ]
        },
        {
          id: "g5.summer.hist.w7.d3.arena2",
          type: "short_answer",
          stem: "A classmate says 'A good leader does everything alone and never asks for help.' Explain why that is a weak idea, using one example.",
          rubric: {
            level3: "Explains that real leaders need and thank a team, with a clear example, and notes that doing it all alone does not work for big changes.",
            level2: "Disagrees and gives some reasoning, but the example is vague.",
            level1: "Just says 'that is wrong' with no example."
          },
          exemplar: "Big changes need many people, so a leader who will not ask for help cannot get far. The Montgomery boycott needed thousands of riders and drivers, not one person. Good leaders build a team and share the credit.",
          hintLadder: [
            "Can one person move a whole movement alone?",
            "Remember an example where many people were needed.",
            "Leaders build teams and share credit."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Stand Tall, Speak Up",
      prompt:
        "Stand tall with your shoulders back and chin level, a calm and confident 'leader's stance.' Take three slow breaths, then gently shake out your arms. Notice how steady you feel.",
      scienceTieIn: "Standing tall and breathing slowly can calm the worry signals in your body, which helps you think clearly when things are hard.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of someone you would call a real leader (famous or someone you know). What is one specific thing they DO that makes people follow them?",
      badge: { id: "g5-summer-change-maker", name: "Change Maker", emoji: "✊" },
      estimatedMinutes: 7
    }
  }
};
