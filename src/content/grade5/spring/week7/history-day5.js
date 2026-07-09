// Grade 5 History/Civics — Spring Expedition, Week 7 (Voices for the Earth),
// Day 5. Topic: the history of conservation — famous environmental voices and
// movements, from national parks to Earth Day.
// Grade 5 depth: shorter passages, simpler dates and names, vocab support.

export const springG5HistoryW7D5 = {
  id: "g5.spring.hist.w7.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "The history of conservation: voices and movements for the Earth",
  topicTag: "conservation-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.3.3-5", "C3.D2.Civ.14.3-5"],
  hook: "Every voice for the Earth today stands on the shoulders of people who spoke up before. From the first national parks to the first Earth Day, ordinary people changed history by defending nature. Today you meet the voices and movements that made conservation possible.",
  miniLesson: [
    "Conservation means protecting nature and using resources wisely so they last for the future. The idea grew long ago, as people saw forests, animals, and land disappearing.",
    "National parks were an early conservation win. In 1872, the United States made Yellowstone the world's first national park — wild land set aside to be protected forever. A writer named John Muir helped persuade leaders to protect places like Yosemite.",
    "The modern environmental movement grew from powerful voices and events. A writer named Rachel Carson warned that certain chemicals were harming birds and other wildlife. And in 1970, the first Earth Day brought millions of Americans together to ask for a cleaner environment."
  ],
  workedExample: {
    prompt: "Explain how one person's 'voice' can lead to a real change that protects nature. Use an example from history.",
    steps: [
      "Pick a historical voice: John Muir, who wrote about the beauty of the wilderness.",
      "Identify what he did: he wrote and persuaded leaders that wild places were worth protecting.",
      "Identify the result: his efforts helped protect Yosemite as a national park.",
      "Conclude: one persuasive voice, backed by writing and action, can lead to protecting nature for everyone."
    ],
    answer: "John Muir's writing persuaded leaders to protect wild land, helping protect places like Yosemite — showing how one voice can change history."
  },
  items: [
    {
      id: "g5.spring.hist.w7.d5.q1",
      type: "multiple_choice",
      stem: "What does CONSERVATION mean?",
      choices: [
        "Protecting nature and using resources wisely so they last for the future",
        "Using up natural resources as fast as possible",
        "Building as many factories as you can",
        "Ignoring the environment completely"
      ],
      answerIndex: 0,
      explanation: "Conservation is about protecting nature and using resources carefully so they are still there for the future.",
      hintLadder: [
        "The word is about 'conserving' — saving something.",
        "Is it about using things up or making them last?",
        "Conservation means protecting and using wisely."
      ]
    },
    {
      id: "g5.spring.hist.w7.d5.q2",
      type: "multiple_choice",
      stem: "Which was the world's FIRST national park, created in 1872?",
      choices: [
        "The Grand Canyon",
        "Central Park",
        "Yellowstone",
        "The Amazon Rainforest"
      ],
      answerIndex: 2,
      explanation: "Yellowstone, made in 1872, was the world's first national park — wild land set aside to be protected forever.",
      hintLadder: [
        "It is a famous park known for geysers like Old Faithful.",
        "It was the very first, set aside in 1872.",
        "That park is Yellowstone."
      ]
    },
    {
      id: "g5.spring.hist.w7.d5.q3",
      type: "multiple_choice",
      stem: "The first Earth Day in 1970 is best described as:",
      choices: [
        "A single scientist's private experiment",
        "A national park in Europe",
        "A law that banned all cars",
        "A huge public event where millions of people asked for a cleaner environment"
      ],
      answerIndex: 3,
      explanation: "The first Earth Day brought millions of Americans together in 1970 to ask for action on the environment — a big public movement.",
      hintLadder: [
        "Was it one person or a huge group of people?",
        "It happened every year afterward, involving millions.",
        "It was a big public event for the environment."
      ],
      misconceptionsTargeted: ["one-leader-only"]
    },
    {
      id: "g5.spring.hist.w7.d5.q4",
      type: "short_answer",
      stem: "Choose ONE famous environmental voice or movement from history (for example John Muir, Rachel Carson, national parks, or Earth Day). Explain what they did AND why it mattered.",
      rubric: {
        level3: "Names a real environmental voice or movement, describes what they did, AND explains why it mattered (protected land, changed minds, or started action).",
        level2: "Names a real voice or movement, but the description or the 'why it mattered' is thin or partly off.",
        level1: "Names nothing specific or gives no correct explanation."
      },
      exemplar: "Rachel Carson wrote a book warning that certain chemicals were harming birds and other wildlife. It mattered because it opened people's eyes and helped start the modern environmental movement.",
      hintLadder: [
        "Pick one voice or movement you learned about today.",
        "Describe what they actually did.",
        "Explain the change or effect it had."
      ]
    },
    {
      id: "g5.spring.hist.w7.d5.q5",
      type: "short_answer",
      stem: "The environmental voices of the past used writing, speeches, and movements to create change. How can YOUR persuasive piece this week follow in their footsteps? Give one specific connection.",
      rubric: {
        level3: "Draws a clear connection between a historical method (writing, speaking, bringing people together) and their own persuasive piece, with a specific plan or parallel.",
        level2: "Makes a general connection but it is vague or not specific to their own piece.",
        level1: "No real connection or just restates the question."
      },
      exemplar: "Rachel Carson used a book to warn people with facts. My persuasive piece will use facts about plastic waste to warn my community, just like she used facts to change minds.",
      hintLadder: [
        "How did people in history persuade others — writing? speaking? bringing people together?",
        "Which of those matches what you are doing this week?",
        "Make a specific link to your own piece."
      ]
    }
  ],
  reflectionPrompt: "The people who protected Yellowstone and started Earth Day were once ordinary people who decided to speak up. What would you want your own 'voice for the Earth' to be remembered for?",
  misconceptionBank: [
    {
      id: "one-leader-only",
      label: "Thinks change only comes from one famous leader",
      description: "Believes environmental progress happened because of a single hero, missing that movements like Earth Day involved millions of ordinary people.",
      coachMove: "Point to the size: 'Earth Day worked because millions of people acted together — one voice starts it, but a movement makes it powerful.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Older Than You Think",
      prompt:
        "The world's first national park was set aside to be protected forever way back in the 1800s. Was it 1776, 1872, or 1920 — and can you name the park? Take your best guess before you find out.",
      answer: "1872 — Yellowstone, the world's first national park. People decided over 150 years ago that some wild places were worth protecting forever.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Voices for the Earth Hall of Fame",
      challenge:
        "Honor the people and movements who changed history for the environment. Create a 'Hall of Fame' entry for one environmental voice or movement — showing who they were, what they did, and the impact they left.",
      steps: [
        "Choose a voice or movement: John Muir, Rachel Carson, national parks, Earth Day, or another you know.",
        "Write their name and a short 'what they did' summary.",
        "Add the impact: what changed because of them.",
        "Design a badge, portrait, or plaque that shows their contribution."
      ],
      deliverable: "A Hall of Fame entry (poster, plaque, or trading card) for one environmental voice or movement, with who they were, what they did, and their impact.",
      choiceBoard: [
        "Draw a portrait plaque with a quote and their achievement.",
        "Make a trading card with 'stats' like their biggest win.",
        "Write a short 'acceptance speech' as if they were being honored today."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Conservation History Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.hist.w7.d5.arena1",
          type: "multiple_choice",
          stem: "Put these conservation events in the correct time order (earliest first): (1) the first Earth Day in 1970, (2) Yellowstone becomes the first national park in 1872, (3) Rachel Carson writes her famous warning book in 1962.",
          choices: [
            "1 then 2 then 3",
            "2 then 3 then 1",
            "3 then 1 then 2",
            "2 then 1 then 3"
          ],
          answerIndex: 1,
          explanation: "Yellowstone (1872) came first, then Rachel Carson's book (1962), then the first Earth Day (1970): 2 then 3 then 1.",
          hintLadder: [
            "Which year is the earliest — 1872, 1962, or 1970?",
            "Yellowstone was in the 1800s; the other two were in the 1900s.",
            "Order: 1872, then 1962, then 1970."
          ]
        },
        {
          id: "g5.spring.hist.w7.d5.arena2",
          type: "short_answer",
          stem: "Rachel Carson used FACTS in her writing to change how people thought. Explain why using facts (instead of only feelings) made her environmental voice so powerful.",
          rubric: {
            level3: "Explains that facts can be checked and can convince people who did not already agree, making the argument believable and hard to brush off — connecting to why her book had such an impact.",
            level2: "Gives a partial reason without the 'convinces doubters / believable' idea.",
            level1: "Restates the question or is unrelated."
          },
          exemplar: "Facts can be checked, so people could not just say she was only being emotional. Her facts about birds proved the danger was real, which convinced even people who had not cared before.",
          hintLadder: [
            "Can someone argue with a checkable fact as easily as with a feeling?",
            "Who does a fact convince that a feeling alone might not?",
            "Connect it to why her book changed so many minds."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Standing on Their Shoulders",
      prompt:
        "Stand tall and imagine the people before you who protected the Earth standing behind you. Breathe in for 4 counts as you rise onto your toes, hold for 2, and lower slowly for 4. Repeat 4 times, feeling steady and ready to add your own voice.",
      scienceTieIn: "Slow, controlled breathing with gentle balance movement calms the mind and sharpens focus, helping you feel grounded and confident.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The people who protected Yellowstone and started Earth Day were once ordinary people who decided to speak up. What would you want your own 'voice for the Earth' to be remembered for?",
      badge: { id: "g5-spring-conservation-time-traveler", name: "Conservation Time Traveler", emoji: "🌲" },
      estimatedMinutes: 7
    }
  }
};
