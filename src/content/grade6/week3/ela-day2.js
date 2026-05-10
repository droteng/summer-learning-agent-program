// Grade 6 ELA — Week 3, Day 2.
// Topic: show, don't tell — sensory detail.

export const grade6ElaWeek3Day2 = {
  id: "g6.ela.w3.d2",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Show, don't tell",
  topicTag: "sensory-detail",
  estimatedMinutes: 16,
  standardsRefs: ["CCSS.6.W.3.D"],
  hook: "Telling readers a character is nervous is fine — but showing them is unforgettable. Today you upgrade flat sentences with sensory detail.",
  miniLesson: [
    "Telling: 'She was nervous.' Showing: 'Her hands shook as she reached for the doorknob.'",
    "Use the senses: sight, sound, smell, touch, taste. Specific beats general.",
    "One concrete detail beats three vague adjectives. Pick the one that paints the strongest picture."
  ],
  workedExample: {
    prompt: "Rewrite to show, not tell: 'It was cold outside.'",
    steps: [
      "Pick a sense: sight, sound, touch.",
      "Add one specific detail: 'My breath fogged up the window' or 'The grass crunched under my boots.'",
      "Result: 'My breath fogged up the window before I even opened the door.'",
      "The reader feels cold without you saying 'cold' once."
    ],
    answer: "Replace the telling adjective with one specific sensory detail."
  },
  items: [
    {
      id: "g6.ela.w3.d2.q1",
      type: "multiple_choice",
      stem: "Which sentence SHOWS that a character is excited?",
      choices: [
        "She was excited.",
        "She was very, very excited.",
        "She bounced on her toes and couldn't stop talking.",
        "Excitement filled her."
      ],
      answerIndex: 2,
      explanation: "The third option uses concrete actions (bouncing, talking) that imply excitement without naming it.",
      hintLadder: [
        "Skip the options that say 'excited' directly.",
        "Look for actions or sensory details.",
        "The bouncing and talking show, don't tell."
      ]
    },
    {
      id: "g6.ela.w3.d2.q2",
      type: "multiple_choice",
      stem: "Which sense is being used? 'The bread crackled when I tore off a piece.'",
      choices: ["Sight", "Sound", "Smell", "Taste"],
      answerIndex: 1,
      explanation: "'Crackled' is a sound. Even a written description of sound counts as appealing to the sense of hearing.",
      hintLadder: [
        "What does 'crackled' describe?",
        "It's something you hear.",
        "Sound = hearing."
      ]
    },
    {
      id: "g6.ela.w3.d2.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST showing of a hot summer day?",
      choices: [
        "It was very hot.",
        "The sun was bright.",
        "Sweat slid down my neck and the sidewalk shimmered.",
        "Summer was warm that year."
      ],
      answerIndex: 2,
      explanation: "Specific physical detail (sweat, shimmering sidewalk) lets the reader feel the heat.",
      hintLadder: [
        "Look for body sensations or vivid sights.",
        "Skip generic words like 'hot' or 'warm'.",
        "Sweat and shimmer make it real."
      ]
    },
    {
      id: "g6.ela.w3.d2.q4",
      type: "multiple_choice",
      stem: "What's the problem with: 'It was a beautiful, lovely, gorgeous, amazing day'?",
      choices: [
        "Too few words",
        "Too many vague adjectives instead of one specific detail",
        "Wrong punctuation",
        "Past tense"
      ],
      answerIndex: 1,
      explanation: "Stacking adjectives doesn't paint a picture. One sharp detail (e.g., 'sunlight cut through the trees in clean stripes') does more work.",
      hintLadder: [
        "Are the adjectives specific?",
        "Do they help you picture the day?",
        "One concrete detail beats four vague ones."
      ],
      misconceptionsTargeted: ["adjective-stacking"]
    },
    {
      id: "g6.ela.w3.d2.q5",
      type: "short_answer",
      stem: "Rewrite this sentence using show-don't-tell with one sensory detail: 'The classroom was loud.'",
      rubric: {
        level3: "Replaces the telling word with one specific sensory detail (sound) and adds vividness.",
        level2: "Adds detail but still uses the word 'loud' or stays vague.",
        level1: "Restates the original or uses generic synonyms only."
      },
      exemplar: "Twenty voices overlapped over the screech of chairs being dragged into a circle.",
      hintLadder: [
        "Pick the sense to use (sound is natural for 'loud').",
        "Name a specific source of the noise (chairs, voices, laughter).",
        "Combine into one sentence without the word 'loud'."
      ]
    }
  ],
  reflectionPrompt: "Today you showed instead of told. Pick a feeling you had recently — what's one sensory detail that captures it?",
  misconceptionBank: [
    {
      id: "adjective-stacking",
      label: "Stacks adjectives instead of showing",
      description: "Piles up vague adjectives (lovely, beautiful, amazing) hoping they add up to vividness.",
      coachMove: "Trade three adjectives for one specific noun or action that paints the same picture."
    }
  ]
};
