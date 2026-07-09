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
  estimatedMinutes: 60, // full Daily Hour
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
      choices: ["Sound", "Sight", "Smell", "Taste"],
      answerIndex: 0,
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
        "Summer was warm that year.",
        "Sweat slid down my neck and the sidewalk shimmered."
      ],
      answerIndex: 3,
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
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Name That Sense",
      prompt:
        "Read this: 'The lemonade was so cold it numbed my teeth, and the ice clinked against the glass.' Which TWO senses did the writer make you feel — without ever saying 'cold drink'?",
      answer: "Touch (cold numbing your teeth) and sound (ice clinking). The writer showed the drink instead of just naming it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Sensory Snapshot",
      challenge:
        "Pick one ordinary summer moment (eating ice cream, a thunderstorm, a pool jump). Write a 3-4 sentence 'snapshot' that SHOWS it using at least three different senses — and never names the obvious feeling word.",
      steps: [
        "Choose your moment and list the five senses down the side of your page.",
        "Jot one specific detail for at least three of those senses.",
        "Weave your three strongest details into 3-4 sentences.",
        "Reread and delete any 'telling' word (hot, fun, scary) you can replace with a detail."
      ],
      deliverable: "A 3-4 sentence sensory snapshot using at least three senses, with no flat 'telling' words.",
      choiceBoard: [
        "Write the sensory snapshot paragraph.",
        "Draw the scene and label each part with the sense it appeals to.",
        "Record yourself reading it aloud with sound effects for each sense."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sensory Detail Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w3.d2.arena1",
          type: "multiple_choice",
          stem: "Which sentence BEST shows (not tells) that a character is exhausted after a long hike?",
          choices: [
            "Her legs wobbled on the last step, and she dropped onto the grass without taking off her boots.",
            "She felt exhausted and worn out and drained.",
            "She was really, really tired after the hike.",
            "The hike made her very tired."
          ],
          answerIndex: 0,
          explanation: "Wobbling legs and collapsing onto the grass with boots still on are concrete actions that let the reader feel the exhaustion without the word 'tired'.",
          hintLadder: [
            "Skip any option that uses a 'telling' word like 'tired' or 'exhausted'.",
            "Look for an option with specific physical actions.",
            "It's the one with wobbling legs and dropping onto the grass."
          ]
        },
        {
          id: "g6.ela.w3.d2.arena2",
          type: "short_answer",
          stem: "Rewrite this telling sentence as a showing sentence using at least TWO different senses: 'The kitchen smelled good and felt cozy.'",
          rubric: {
            level3: "Replaces both telling words with specific details from at least two distinct senses (e.g., smell + touch/sound) and never uses 'good' or 'cozy'.",
            level2: "Uses one strong sensory detail but leans on only one sense or keeps a telling word.",
            level1: "Restates the sentence with synonyms or stays vague."
          },
          exemplar: "Cinnamon and warm bread drifted from the oven while the radiator ticked and the wood floor felt warm under my socks.",
          hintLadder: [
            "Pick two senses to feature (smell is easy; add touch or sound).",
            "Name a specific source for each — what exactly smells, what exactly you feel or hear.",
            "Combine them and cut the words 'good' and 'cozy' entirely."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Scan",
      prompt:
        "Sit still and notice: 5 things you can see, 4 you can hear, 3 you can touch, 2 you can smell, 1 you can taste. Take your time with each one.",
      scienceTieIn: "Tuning into your senses on purpose calms the brain's alarm system and sharpens focus — a grounding trick rooted in how your nervous system works.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Pick one strong feeling you had today. What single sensory detail captures it better than just naming the feeling?",
      badge: { id: "sensory-sleuth", name: "Sensory Sleuth", emoji: "👃" },
      estimatedMinutes: 7
    }
  }
};
