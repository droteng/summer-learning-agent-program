// Grade 6 World/Current Affairs — Week 6 (World Affairs for Kids), Day 1.
// Topic: reading a news story carefully.

export const grade6WorldWeek6Day1 = {
  id: "g6.world.w6.d1",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 1,
  subject: "World/Current Affairs",
  topic: "Reading a news story",
  topicTag: "news-reading",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.10.6-8", "C3.D3.4.6-8"],
  hook: "A good reader pulls the same five things from any news story. Today you practice that move on a kid-safe topic.",
  miniLesson: [
    "The five Ws: who is involved, what happened, where, when, why.",
    "Separate the lead (first paragraph, the highlights) from the body (details, sources, quotes).",
    "Always look for the source. A story without a source is just a rumor."
  ],
  workedExample: {
    prompt:
      "Headline: 'Tokyo replaces 5,000 streetlights with energy-saving LEDs, cuts city power use by 8%.' Pull the five Ws.",
    steps: [
      "Who: Tokyo city government (and the people of Tokyo).",
      "What: replacing 5,000 streetlights with LEDs.",
      "Where: Tokyo, Japan.",
      "When: implied recent (present-tense verb).",
      "Why: to cut city power use — by 8%."
    ],
    answer: "Five Ws extracted; source still needs checking."
  },
  items: [
    {
      id: "g6.world.w6.d1.q1",
      type: "multiple_choice",
      stem:
        "In: 'Brazil opened 12 new wind farms in 2024 to reduce reliance on imported fuel,' what is the WHY?",
      choices: [
        "Brazil",
        "Opened 12 new wind farms",
        "In 2024",
        "To reduce reliance on imported fuel"
      ],
      answerIndex: 3,
      explanation: "WHY answers the reason or motive. The reason given is reducing reliance on imported fuel.",
      hintLadder: [
        "WHY is the motive.",
        "Skip the who/what/where/when options.",
        "Look for the 'to ___' clause."
      ]
    },
    {
      id: "g6.world.w6.d1.q2",
      type: "multiple_choice",
      stem: "What's the most important thing the lead paragraph of a news story should do?",
      choices: [
        "Make you laugh.",
        "Cover the headline news quickly — usually who + what + where.",
        "Hide the conclusion until later.",
        "Use as many big words as possible."
      ],
      answerIndex: 1,
      explanation: "The lead gives the most important news first. Reverse-pyramid writing — top loaded, then details.",
      hintLadder: [
        "Where does the most important info go in a news story?",
        "First paragraph.",
        "The lead delivers who/what/where fast."
      ]
    },
    {
      id: "g6.world.w6.d1.q3",
      type: "multiple_choice",
      stem: "An article makes a big claim but doesn't name any source. Best move:",
      choices: [
        "Believe it because it's published.",
        "Look for the same fact in another reliable source before accepting it.",
        "Share it immediately.",
        "Assume it's false."
      ],
      answerIndex: 1,
      explanation: "Cross-check. One unsourced claim is a rumor until you can confirm it elsewhere.",
      hintLadder: [
        "Can you verify the claim?",
        "Check another reliable source.",
        "Cross-check before accepting."
      ],
      misconceptionsTargeted: ["one-source-truth"]
    },
    {
      id: "g6.world.w6.d1.q4",
      type: "multiple_choice",
      stem: "Which 'W' is missing from: 'Schools in California will get new books in September because of a federal grant'?",
      choices: ["Who", "What", "Where", "Why"],
      answerIndex: 0,
      explanation: "Who specifically — which agency? which school district? Not named.",
      hintLadder: [
        "Check the Ws one by one.",
        "Federal grant — but who's the actual decider?",
        "Who is missing."
      ]
    },
    {
      id: "g6.world.w6.d1.q5",
      type: "short_answer",
      stem:
        "Pick a kid-safe news headline you've seen recently. Pull the five Ws in five short sentences.",
      rubric: {
        level3:
          "Names a specific real headline, fills each W with a concrete answer, and the answers cohere.",
        level2: "Has the 5 Ws but one or two are vague.",
        level1: "Restates the headline without breaking it down."
      },
      exemplar:
        "Headline: 'Local park adds new playground.' Who: city parks dept. What: opened a new playground. Where: Lincoln Park. When: last weekend. Why: to replace an older, worn-out structure.",
      hintLadder: [
        "Pick a specific headline.",
        "Make each W one short answer.",
        "Make sure they all match the headline."
      ]
    }
  ],
  reflectionPrompt: "Today you pulled the five Ws. What's a story this week you'd want to break down?",
  misconceptionBank: [
    {
      id: "one-source-truth",
      label: "Treats a single source as confirmation",
      description: "Accepts a claim because one article said it, without cross-checking.",
      coachMove: "If only one source has a claim, label it 'reported, not confirmed' until you find a second independent source."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Find the Missing W",
      prompt:
        "A headline says: 'New library opens downtown next month.' Four of the five Ws are answerable here. Which W is missing — who, what, where, when, or why?",
      answer: "WHY is missing — we know who (a library), what (opens), where (downtown), and when (next month), but not WHY it's opening or who decided to build it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Be the Reporter",
      challenge:
        "Invent a kid-safe, good-news headline about your school or town, then write a short news lead (2-3 sentences) that delivers all five Ws clearly and names a source.",
      steps: [
        "Write a catchy but honest headline.",
        "Write a lead paragraph that answers who, what, where, when, why.",
        "Add one line naming a source ('according to ___').",
        "Underline or label each of the five Ws in your lead."
      ],
      deliverable: "A short news story (headline + lead) with all five Ws labeled and a named source.",
      choiceBoard: [
        "Write it as a newspaper article with a byline.",
        "Script it as a 20-second TV news report.",
        "Design a front-page layout with headline and lead."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Five Ws Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.world.w6.d1.arena1",
          type: "multiple_choice",
          stem: "In 'On Saturday, volunteers in Lagos planted 2,000 trees to fight air pollution,' what is the WHAT?",
          choices: [
            "On Saturday",
            "Volunteers in Lagos",
            "Planted 2,000 trees",
            "To fight air pollution"
          ],
          answerIndex: 2,
          explanation: "WHAT is the event or action that happened: planting 2,000 trees. 'On Saturday' is when, 'volunteers in Lagos' is who/where, and the last clause is why.",
          hintLadder: [
            "WHAT names the action that happened.",
            "Skip the when (Saturday), who (volunteers), and why (fight pollution).",
            "Planted 2,000 trees."
          ]
        },
        {
          id: "g6.world.w6.d1.arena2",
          type: "short_answer",
          stem: "A post claims 'Scientists say chocolate makes you smarter!' but names no scientist, study, or source. What two steps should a careful reader take before sharing it?",
          rubric: {
            level3: "Names two solid steps: look for a named source/study, AND cross-check with a second reliable source before sharing or believing.",
            level2: "Names one good step (e.g., check the source) but the second is vague or missing.",
            level1: "Says to believe or share it, or gives no real verification step."
          },
          exemplar: "First, look for the actual study or scientist named. Second, search a reliable source to see if other outlets report the same finding before sharing it.",
          hintLadder: [
            "The claim has no source — what's your first move?",
            "How do you confirm a claim is real?",
            "Find the source, then cross-check a second reliable one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five Senses Check-In",
      prompt:
        "Pause and name (silently) 5 things you SEE, 4 you HEAR, 3 you can TOUCH, 2 you SMELL, 1 you can TASTE. Just like a reporter gathers the five Ws, you're gathering five senses to reset your focus.",
      scienceTieIn: "Naming what your senses notice calms the brain's alarm system, sharpening the focus you need to read carefully and spot missing details.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a story you heard today (from a person, a screen, anywhere). Which of the five Ws was clearest, and which was missing?",
      badge: { id: "five-ws-reporter", name: "Five Ws Reporter", emoji: "📰" },
      estimatedMinutes: 7
    }
  }
};
