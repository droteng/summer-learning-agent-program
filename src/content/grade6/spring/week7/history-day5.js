// Grade 6 History/Civics — Spring Expedition, Week 7 (Voices for the Earth),
// Day 5. Topic: the history of conservation — famous environmental voices and
// movements, from national parks to Earth Day.

export const springG6HistoryW7D5 = {
  id: "g6.spring.hist.w7.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "The history of conservation: voices and movements for the Earth",
  topicTag: "conservation-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.3", "C3.D2.Civ.14"],
  hook: "Every persuasive voice for the Earth stands on the shoulders of people who spoke up before. From the first national parks to the first Earth Day, ordinary people changed history by defending nature. Today you meet the voices and movements that made conservation possible.",
  miniLesson: [
    "Conservation means protecting nature and using resources wisely so they last for the future. The idea grew in the 1800s and 1900s as people saw forests, animals, and land disappearing.",
    "National parks were an early conservation win. In 1872 the United States created Yellowstone, the world's first national park, setting aside wild land to protect it forever. Voices like John Muir helped persuade leaders to protect places like Yosemite.",
    "The modern environmental movement grew from powerful voices and events: Rachel Carson's 1962 book 'Silent Spring' warned about pesticides harming wildlife, and the first Earth Day in 1970 brought about 20 million Americans together to demand a cleaner environment."
  ],
  workedExample: {
    prompt: "Explain how one person's 'voice' can lead to a real change that protects nature. Use an example from history.",
    steps: [
      "Pick a historical voice: John Muir, who wrote about the beauty of the Sierra wilderness.",
      "Identify what he did: he wrote and persuaded leaders that wild places were worth protecting.",
      "Identify the result: his efforts helped lead to the protection of Yosemite as a national park.",
      "Conclude: one persuasive voice, backed by writing and action, can lead to laws that protect nature for everyone."
    ],
    answer: "John Muir's writing persuaded leaders to protect wild land, helping create protected places like Yosemite — showing how one voice can change history."
  },
  items: [
    {
      id: "g6.spring.hist.w7.d5.q1",
      type: "multiple_choice",
      stem: "What does CONSERVATION mean?",
      choices: [
        "Protecting nature and using resources wisely so they last for the future",
        "Using up natural resources as fast as possible",
        "Building as many factories as you can",
        "Ignoring the environment completely"
      ],
      answerIndex: 0,
      explanation: "Conservation is about protecting nature and using resources carefully so they are still there for future generations.",
      hintLadder: [
        "The word is about 'conserving' — saving something.",
        "Is it about using things up or making them last?",
        "Conservation means protecting and using wisely."
      ]
    },
    {
      id: "g6.spring.hist.w7.d5.q2",
      type: "multiple_choice",
      stem: "Which was the world's FIRST national park, created in 1872?",
      choices: [
        "The Grand Canyon",
        "The Amazon Rainforest",
        "Central Park",
        "Yellowstone"
      ],
      answerIndex: 3,
      explanation: "Yellowstone, established in 1872, was the world's first national park — wild land set aside to be protected forever.",
      hintLadder: [
        "It is a famous park known for geysers like Old Faithful.",
        "It was the very first, set aside in 1872.",
        "That park is Yellowstone."
      ]
    },
    {
      id: "g6.spring.hist.w7.d5.q3",
      type: "multiple_choice",
      stem: "The first Earth Day in 1970 is best described as:",
      choices: [
        "A single scientist's private experiment",
        "A huge public movement where millions of people demanded a cleaner environment",
        "A law that banned all cars",
        "A national park in Europe"
      ],
      answerIndex: 1,
      explanation: "The first Earth Day brought about 20 million Americans together in 1970 to demand action on the environment — a major public movement.",
      hintLadder: [
        "Was it one person or a huge group of people?",
        "It happened every year afterward, involving millions.",
        "It was a large public movement for the environment."
      ],
      misconceptionsTargeted: ["one-leader-only"]
    },
    {
      id: "g6.spring.hist.w7.d5.q4",
      type: "short_answer",
      stem: "Choose ONE famous environmental voice or movement from history (for example John Muir, Rachel Carson, national parks, or Earth Day). Explain what they did AND why it mattered.",
      rubric: {
        level3: "Names a real environmental voice or movement, accurately describes what they did, AND explains why it mattered (led to protection, changed minds, sparked action).",
        level2: "Names a real voice or movement but the description or the 'why it mattered' is thin or partly off.",
        level1: "Names nothing specific or gives no accurate explanation."
      },
      exemplar: "Rachel Carson wrote 'Silent Spring' in 1962, warning that pesticides were poisoning birds and other wildlife. It mattered because it opened people's eyes and helped launch the modern environmental movement.",
      hintLadder: [
        "Pick one voice or movement you learned about today.",
        "Describe what they actually did.",
        "Explain the change or effect it had."
      ]
    },
    {
      id: "g6.spring.hist.w7.d5.q5",
      type: "short_answer",
      stem: "The environmental voices of the past used writing, speeches, and movements to create change. How can YOUR persuasive piece this week follow in their footsteps? Give one specific connection.",
      rubric: {
        level3: "Draws a clear connection between a historical method (writing, speaking, organizing people) and their own persuasive piece, with a specific plan or parallel.",
        level2: "Makes a general connection but it is vague or not specific to their own piece.",
        level1: "No real connection or just restates the question."
      },
      exemplar: "Rachel Carson used a book to warn people with facts. My persuasive piece will use facts about plastic waste to warn my community, just like she used evidence to change minds.",
      hintLadder: [
        "How did people in history persuade others — writing? speaking? organizing?",
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
      coachMove: "Point to the numbers: 'Earth Day worked because about 20 million people acted together — one voice starts it, but a movement makes it powerful.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Older Than You Think",
      prompt:
        "The world's first national park was set aside to be protected forever way back in a single year in the 1800s. Was it 1776, 1872, or 1920 — and can you name the park? Take your best guess before you find out.",
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
        "Design a badge, portrait, or plaque that captures their contribution."
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
          id: "g6.spring.hist.w7.d5.arena1",
          type: "multiple_choice",
          stem: "Put these conservation milestones in the correct time order (earliest first): (1) the first Earth Day in 1970, (2) Yellowstone becomes the first national park in 1872, (3) Rachel Carson publishes 'Silent Spring' in 1962.",
          choices: [
            "1 → 2 → 3",
            "3 → 1 → 2",
            "2 → 3 → 1",
            "2 → 1 → 3"
          ],
          answerIndex: 2,
          explanation: "Yellowstone (1872) came first, then 'Silent Spring' (1962), then the first Earth Day (1970): 2 → 3 → 1.",
          hintLadder: [
            "Which year is the earliest — 1872, 1962, or 1970?",
            "Yellowstone was in the 1800s; the other two were in the 1900s.",
            "Order: 1872 → 1962 → 1970."
          ]
        },
        {
          id: "g6.spring.hist.w7.d5.arena2",
          type: "short_answer",
          stem: "Rachel Carson used FACTS in her writing to change how people thought about pesticides. Explain why using facts (rather than only feelings) made her environmental voice so powerful.",
          rubric: {
            level3: "Explains that facts/evidence can be checked and convince people who did not already agree, making the argument credible and hard to dismiss — connecting to why her book had such impact.",
            level2: "Gives a partial reason without the 'convinces doubters / credible' idea.",
            level1: "Restates the question or is unrelated."
          },
          exemplar: "Facts can be checked, so people could not just wave her off as being emotional. Her evidence about dying birds proved the danger was real, which convinced even people who had not cared before.",
          hintLadder: [
            "Can someone argue with a checkable fact as easily as with a feeling?",
            "Who does evidence convince that feelings alone might not?",
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
      badge: { id: "spring-conservation-historian", name: "Conservation Historian", emoji: "🌲" },
      estimatedMinutes: 7
    }
  }
};
