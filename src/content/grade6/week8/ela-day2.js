// Grade 6 ELA — Week 8, Day 2.
// Topic: gathering reliable research for the project.

export const grade6ElaWeek8Day2 = {
  id: "g6.ela.w8.d2",
  gradeLevel: 6,
  weekNumber: 8,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Gathering research",
  topicTag: "capstone-research",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.W.7", "CCSS.6.W.8"],
  hook: "Today you stop and gather sources before you build. Two great sources beat ten weak ones.",
  miniLesson: [
    "Start with what you already know. List what you're sure about, what you suspect, and what you don't know. The third list is your research target.",
    "Find at least 3 reliable sources. Different kinds (a primary source, a major news source, an expert-authored explainer) cross-check each other.",
    "Take 3 notes per source: the claim, the evidence, and the source citation. Future-you will thank present-you."
  ],
  workedExample: {
    prompt:
      "Project: a chart comparing how 3 cities reduced traffic. How do you research it?",
    steps: [
      "List known/suspected/unknown: I know one city did bike lanes; I suspect another used tolls; I don't know what the third did.",
      "Find 3 sources: a city government page (primary), a major newspaper (secondary), an academic transit study (authoritative).",
      "Take notes per source: the city's policy, when it started, one number measuring its effect, plus the citation.",
      "Now you have evidence — ready to build the chart on Day 3."
    ],
    answer: "Known/unknown list → 3 sources of different kinds → 3 notes each."
  },
  items: [
    {
      id: "g6.ela.w8.d2.q1",
      type: "multiple_choice",
      stem: "Why list what you already know BEFORE researching?",
      choices: [
        "To skip research.",
        "To find your gaps and aim research at them.",
        "To impress the teacher.",
        "To pad the project."
      ],
      answerIndex: 1,
      explanation: "Research is most efficient when targeted. The gap list is the target.",
      hintLadder: [
        "What's research for?",
        "Filling gaps.",
        "List gaps first."
      ]
    },
    {
      id: "g6.ela.w8.d2.q2",
      type: "multiple_choice",
      stem: "Three sources are stronger when they:",
      choices: [
        "All say the same thing from the same blog.",
        "Come from different kinds (primary, secondary, expert) so they cross-check.",
        "Are all anonymous.",
        "Are all very long."
      ],
      answerIndex: 1,
      explanation: "Cross-checking across source types is what makes 'reliable.' Three echoes from the same place is one source repeated.",
      hintLadder: [
        "What does cross-checking require?",
        "Different sources.",
        "Different types is the answer."
      ],
      misconceptionsTargeted: ["three-echoes"]
    },
    {
      id: "g6.ela.w8.d2.q3",
      type: "multiple_choice",
      stem: "Which is a complete research note?",
      choices: [
        "Sources matter.",
        "Tokyo: switched 5,000 streetlights to LEDs in 2020, cut city power use by 8%. (Tokyo Metro Energy Report, 2021)",
        "Read it on a website somewhere.",
        "Tokyo is cool."
      ],
      answerIndex: 1,
      explanation: "Includes claim + evidence + citation. The others are incomplete.",
      hintLadder: [
        "What three parts should a note have?",
        "Claim, evidence, citation.",
        "Only one option has all three."
      ]
    },
    {
      id: "g6.ela.w8.d2.q4",
      type: "multiple_choice",
      stem: "If your three sources disagree, what's the BEST next step?",
      choices: [
        "Pick the one you like.",
        "Look at WHEN each was published and HOW each gathered evidence.",
        "Average them.",
        "Skip the topic entirely."
      ],
      answerIndex: 1,
      explanation: "Disagreement is signal. Date and method often explain the difference.",
      hintLadder: [
        "Why might good sources disagree?",
        "Date or method.",
        "Compare those first."
      ]
    },
    {
      id: "g6.ela.w8.d2.q5",
      type: "short_answer",
      stem:
        "For your capstone project: list 2 things you know, 2 things you suspect, and 2 things you need to research.",
      rubric: {
        level3: "Six specific items grouped correctly, all tied to the chosen project.",
        level2: "Six items but some are out of group or vague.",
        level1: "Generic or fewer than 6 items."
      },
      exemplar:
        "Project: ratios in cooking.\nKnow: 2:3 is an equivalent ratio to 4:6; recipes use ratios.\nSuspect: doubling a recipe doesn't always work (baking is sensitive).\nResearch: what's the smallest amount of baking soda that works for a recipe; how do bakers handle scaling for big crowds.",
      hintLadder: [
        "Name your project.",
        "List 2 confident facts.",
        "List 2 guesses + 2 honest gaps."
      ]
    }
  ],
  reflectionPrompt: "Today you found your gaps. What's the most surprising thing you don't yet know about your topic?",
  misconceptionBank: [
    {
      id: "three-echoes",
      label: "Counts the same claim from different places as three sources",
      description: "Finds the same paragraph copied across three blogs and counts it as three sources.",
      coachMove: "Trace each source back. If they all cite the same original, you really have ONE source."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "The Source Detective",
      prompt:
        "I appear in three different blogs that all copied the same paragraph word-for-word. The teacher asks how many sources you really have. What's the honest answer?",
      answer: "Just ONE. Three copies of the same original is one source repeated three times — trace them all back to the same place.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Source Trading Cards",
      challenge:
        "Turn your 3 best sources into 'trading cards.' Each card names the source, its type (primary, secondary, or expert), and the single strongest fact you got from it.",
      steps: [
        "Make one card per source — give each a title and type.",
        "Write the strongest fact or number from that source.",
        "Add a citation line so future-you can find it again.",
        "Rank your three cards from most to least trustworthy and say why."
      ],
      deliverable: "Three source 'trading cards,' each with type, key fact, and citation.",
      choiceBoard: [
        "Draw three physical trading cards.",
        "Build a 3-row table comparing your sources.",
        "Record a 30-second 'meet my sources' intro."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Reliable Research Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w8.d2.arena1",
          type: "multiple_choice",
          stem: "You need to prove a claim about local traffic. Which is the STRONGEST single source?",
          choices: [
            "An anonymous comment on a video.",
            "A city government transportation report with dated traffic counts.",
            "A meme about traffic.",
            "Your friend's guess."
          ],
          answerIndex: 1,
          explanation: "A dated, official government report with real traffic counts is primary and verifiable. The others are unsourced, undated, or just opinions.",
          hintLadder: [
            "Strong sources are verifiable and have real data.",
            "Which one could you actually check and cite?",
            "It's the dated city government report."
          ]
        },
        {
          id: "g6.ela.w8.d2.arena2",
          type: "short_answer",
          stem: "Write ONE complete research note for your capstone with all three parts: a claim, the evidence, and the citation.",
          rubric: {
            level3: "Note has a clear claim, specific evidence (a fact, number, or example), AND a citation naming the source.",
            level2: "Has two of the three parts, or the citation is vague.",
            level1: "Just a topic or an opinion with no evidence or citation."
          },
          exemplar: "Claim: doubling a cake recipe doesn't double the baking soda. Evidence: too much baking soda makes a cake rise then collapse. Citation: King Arthur Baking, 'How to Scale a Recipe.'",
          hintLadder: [
            "Start with the claim your source supports.",
            "Add the specific evidence — a fact or number.",
            "End with where it came from (the citation)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Reset",
      prompt:
        "Close your eyes and slowly name 3 sounds you can hear right now. Then take 3 slow breaths. Notice how your attention sharpens after a short pause.",
      scienceTieIn: "Briefly tuning into your senses pulls attention away from racing thoughts, which helps your focus 'reset' before the next task.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's the most surprising thing you discovered you DIDN'T know about your topic today? How will you go find the answer?",
      badge: { id: "research-ranger", name: "Research Ranger", emoji: "🧭" },
      estimatedMinutes: 7
    }
  }
};
