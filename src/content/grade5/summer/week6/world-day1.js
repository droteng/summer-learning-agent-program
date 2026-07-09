// Grade 5 Summer World/Current Affairs — Week 6 (World Affairs for Kids), Day 1.
// Grade-5 counterpart of g6.world.w6.d1 (reading a news story), pitched down one
// level: shorter headlines, vocab support, a paragraph frame, concrete examples.

export const summerG5WorldW6D1 = {
  id: "g5.summer.world.w6.d1",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 1,
  subject: "World/Current Affairs",
  topic: "Reading a news story",
  topicTag: "news-reading",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.10.3-5", "CCSS.ELA-LITERACY.RI.5.2"],
  hook: "A smart reader looks for the same five things in ANY news story. Today you practice this move on a fun, kid-safe topic.",
  keyTerms: [
    { term: "The Five Ws", definition: "Five questions: Who, What, Where, When, and Why. Good news readers find all five." },
    { term: "Headline", definition: "The big title of a news story that tells you the main idea in a few words." },
    { term: "Source", definition: "Where the news comes from — the person or place that gives the facts. No source = just a rumor." }
  ],
  miniLesson: [
    "The Five Ws are five questions: WHO is in the story, WHAT happened, WHERE, WHEN, and WHY.",
    "The first sentence of a news story is the most important. It tells you the big news fast.",
    "Always ask: who says so? A story with no source is just a rumor — not proven facts."
  ],
  workedExample: {
    prompt:
      "Headline: 'A city turns off old streetlights and puts in new ones that save power.' Find the Five Ws.",
    steps: [
      "WHO: the city.",
      "WHAT: it changed old streetlights for new ones.",
      "WHERE: in the city.",
      "WHEN: now (the words are in the present).",
      "WHY: to save power (use less electricity)."
    ],
    answer: "All five Ws found. We should still check the source to be sure it is true."
  },
  items: [
    {
      id: "g5.summer.world.w6.d1.q1",
      type: "multiple_choice",
      stem:
        "In: 'A country built new wind farms to use less imported fuel,' what is the WHY?",
      choices: [
        "A country",
        "Built new wind farms",
        "New wind farms",
        "To use less imported fuel"
      ],
      answerIndex: 3,
      explanation: "WHY tells the reason. The reason here is to use less imported fuel.",
      hintLadder: [
        "WHY is the reason someone did something.",
        "Look for the words that start with 'to ___'.",
        "'To use less imported fuel' is the reason."
      ]
    },
    {
      id: "g5.summer.world.w6.d1.q2",
      type: "multiple_choice",
      stem: "What is the MOST important job of the first sentence in a news story?",
      choices: [
        "Make you laugh.",
        "Tell the big news fast — usually who, what, and where.",
        "Hide the answer until the end.",
        "Use the biggest words possible."
      ],
      answerIndex: 1,
      explanation: "The first sentence gives the most important news first, so you know what the story is about right away.",
      hintLadder: [
        "Where does the biggest news go in a news story?",
        "It goes at the very start.",
        "The first sentence tells who/what/where fast."
      ]
    },
    {
      id: "g5.summer.world.w6.d1.q3",
      type: "multiple_choice",
      stem: "A story makes a big claim but names no source. What is the best thing to do?",
      choices: [
        "Look for the same fact in another trusted place before you believe it.",
        "Believe it because it was printed.",
        "Share it right away.",
        "Say it must be false."
      ],
      answerIndex: 0,
      explanation: "Check it twice. One claim with no source is a rumor until you find it in another trusted place.",
      hintLadder: [
        "Can you prove the claim is true?",
        "Look at a second trusted source.",
        "Check twice before you believe it."
      ],
      misconceptionsTargeted: ["one-source-truth-g5"]
    },
    {
      id: "g5.summer.world.w6.d1.q4",
      type: "short_answer",
      stem:
        "Read this headline: 'Kids will get new books in September because of a grant.' Name which one of the Five Ws is MISSING, and explain how you know in one sentence.",
      rubric: {
        level3: "Correctly names WHERE as the missing W and explains that the headline never says the place.",
        level2: "Names WHERE but the explanation is unclear, OR gives a good explanation but names the W loosely.",
        level1: "Names the wrong W, or gives no reason."
      },
      exemplar:
        "WHERE is missing. I know because the headline tells who (kids), what (new books), when (September), and why (a grant), but it never says the place.",
      hintLadder: [
        "Check the Five Ws one at a time.",
        "Who, what, when, and why are all in the headline.",
        "The place is never named, so WHERE is missing."
      ]
    },
    {
      id: "g5.summer.world.w6.d1.q5",
      type: "short_answer",
      stem:
        "Think of a kid-safe headline you have seen. Fill in this frame: 'WHO: ___. WHAT: ___. WHERE: ___. WHEN: ___. WHY: ___.'",
      rubric: {
        level3:
          "Names a real headline and fills every W with a clear, matching answer.",
        level2: "Has all five Ws but one or two are unclear.",
        level1: "Just repeats the headline without breaking it into the Five Ws."
      },
      exemplar:
        "Headline: 'Our town opened a new playground.' WHO: the town parks team. WHAT: opened a new playground. WHERE: the local park. WHEN: last weekend. WHY: to replace an old, broken one.",
      hintLadder: [
        "Pick one clear headline.",
        "Answer each W with one short phrase.",
        "Make sure all five answers match the same headline."
      ]
    }
  ],
  reflectionPrompt: "Today you found the Five Ws. What is a story from this week you would like to break down?",
  misconceptionBank: [
    {
      id: "one-source-truth-g5",
      label: "Believes one source is proof",
      description: "Accepts a claim because one story said it, without checking a second place.",
      coachMove: "If only one place has a claim, call it 'reported, not proven' until a second trusted source says the same thing."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Find the Missing W",
      prompt:
        "A headline says: 'New library opens downtown next month.' You can answer four of the Five Ws. Which one is MISSING — who, what, where, when, or why?",
      answer: "WHY is missing. We know who (a library), what (opens), where (downtown), and when (next month) — but not WHY it is opening.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Be the Reporter",
      challenge:
        "Make up a happy, kid-safe headline about your school or town. Then write a short news beginning (2-3 sentences) that answers all Five Ws and names a source.",
      steps: [
        "Write a catchy but honest headline.",
        "Write a first paragraph that answers who, what, where, when, and why.",
        "Add one line naming a source ('according to ___').",
        "Underline each of the Five Ws in your writing."
      ],
      deliverable: "A short news story (headline + first paragraph) with all Five Ws underlined and a named source.",
      choiceBoard: [
        "Write it as a newspaper article with your name as the reporter.",
        "Say it out loud as a 20-second TV news report.",
        "Draw a front page with the headline and first paragraph."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Five Ws Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.world.w6.d1.arena1",
          type: "multiple_choice",
          stem: "In 'On Saturday, volunteers planted 2,000 trees to clean the air,' what is the WHAT?",
          choices: [
            "On Saturday",
            "Volunteers",
            "Planted 2,000 trees",
            "To clean the air"
          ],
          answerIndex: 2,
          explanation: "WHAT is the thing that happened: planting 2,000 trees. 'On Saturday' is when, 'volunteers' is who, and the last part is why.",
          hintLadder: [
            "WHAT names the action that happened.",
            "Skip the when (Saturday), the who (volunteers), and the why (clean air).",
            "The action is: planted 2,000 trees."
          ]
        },
        {
          id: "g5.summer.world.w6.d1.arena2",
          type: "short_answer",
          stem: "A post says 'Scientists say candy makes you smarter!' but names no scientist or study. Name TWO steps a careful reader should take before sharing it.",
          rubric: {
            level3: "Names two clear steps: look for a named scientist or study, AND check a second trusted source before sharing.",
            level2: "Names one good step (like checking the source) but the second is missing or unclear.",
            level1: "Says to share or believe it, or gives no real checking step."
          },
          exemplar: "First, look for the real scientist or study that is named. Second, check another trusted source to see if it says the same thing before sharing.",
          hintLadder: [
            "The post has no source — what is your first move?",
            "How do you prove a claim is real?",
            "Find the source, then check a second trusted place."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five Senses Check-In",
      prompt:
        "Pause and quietly name 5 things you SEE, 4 you HEAR, 3 you can TOUCH, 2 you SMELL, and 1 you can TASTE. Just like a reporter gathers the Five Ws, you are gathering five senses to reset your focus.",
      scienceTieIn: "Naming what your senses notice calms your brain's alarm system, which helps you read carefully and spot missing details.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a story you heard today (from a person or a screen). Which of the Five Ws was clearest, and which was missing?",
      badge: { id: "g5-summer-five-ws-reporter", name: "Five Ws Reporter", emoji: "📰" },
      estimatedMinutes: 7
    }
  }
};
