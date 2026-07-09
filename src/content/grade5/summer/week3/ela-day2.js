// Grade 5 Summer ELA / Writing — Week 3 (Story Builders), Day 2.
// Grade-5 counterpart of g6.ela.w3.d2 (show, don't tell -- sensory detail),
// pitched down: shorter examples, vocab support, step-by-step.

export const summerG5ElaW3D2 = {
  id: "g5.summer.ela.w3.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Show, don't tell",
  topicTag: "sensory-detail",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3.D", "CCSS.ELA-LITERACY.W.5.3.B"],
  hook: "Telling readers a character is nervous is fine -- but showing them is unforgettable. Today you upgrade flat sentences with sensory detail.",
  keyTerms: [
    { term: "Telling", definition: "Naming a feeling straight out, like She was scared." },
    { term: "Showing", definition: "Using actions or details so the reader feels it, like Her hands shook." },
    { term: "Sensory detail", definition: "A detail from one of the five senses: sight, sound, smell, touch, or taste." }
  ],
  miniLesson: [
    "Telling: She was nervous. Showing: Her hands shook as she reached for the doorknob.",
    "Use the five senses: sight, sound, smell, touch, taste. A specific detail beats a general one.",
    "One clear detail beats three vague words. Pick the detail that paints the best picture."
  ],
  workedExample: {
    prompt: "Rewrite to show, not tell: It was cold outside.",
    steps: [
      "Pick a sense: sight, sound, or touch.",
      "Add one specific detail: My breath fogged up the window, or The grass crunched under my boots.",
      "Result: My breath fogged up the window before I even opened the door.",
      "The reader feels cold without you ever saying the word cold."
    ],
    answer: "Trade the telling word for one specific sensory detail."
  },
  items: [
    {
      id: "g5.summer.ela.w3.d2.q1",
      type: "multiple_choice",
      stem: "Which sentence SHOWS that a character is excited?",
      choices: [
        "She bounced on her toes and could not stop talking.",
        "She was very, very excited.",
        "She was excited.",
        "Excitement filled her."
      ],
      answerIndex: 0,
      explanation: "The third option uses actions (bouncing, talking) that let us feel the excitement without naming it.",
      hintLadder: [
        "Skip the options that say excited right out.",
        "Look for actions or details you can picture.",
        "The bouncing and talking show, do not tell."
      ]
    },
    {
      id: "g5.summer.ela.w3.d2.q2",
      type: "multiple_choice",
      stem: "Which sense does this use: The bread crackled when I tore off a piece?",
      choices: ["Sight", "Sound", "Smell", "Taste"],
      answerIndex: 1,
      explanation: "Crackled is a sound. A written description of a sound uses the sense of hearing.",
      hintLadder: [
        "What does crackled describe?",
        "It is something you hear.",
        "Sound means hearing."
      ]
    },
    {
      id: "g5.summer.ela.w3.d2.q3",
      type: "short_answer",
      stem: "Write one showing sentence for a hot summer day. Do not use the words hot or warm -- use at least one sensory detail so the reader can feel the heat.",
      rubric: {
        level3: "One sentence with a clear sensory detail (like sweat, shimmering sidewalk, or sticky skin) that shows the heat, with no use of hot or warm.",
        level2: "A sentence that adds a detail but stays vague, or slips in the word hot or warm.",
        level1: "Just names the heat plainly or repeats the prompt."
      },
      exemplar: "Sweat slid down my neck and the sidewalk shimmered in the afternoon sun.",
      hintLadder: [
        "Pick a sense: what do you see, feel, or hear on a hot day?",
        "Name a specific detail (sweat, shimmer, sticky skin).",
        "Put it in one sentence and leave out hot and warm."
      ]
    },
    {
      id: "g5.summer.ela.w3.d2.q4",
      type: "multiple_choice",
      stem: "What is the problem with: It was a beautiful, lovely, gorgeous, amazing day?",
      choices: [
        "Too few words",
        "Wrong tense",
        "Wrong punctuation",
        "Too many vague words instead of one clear detail"
      ],
      answerIndex: 3,
      explanation: "Piling up describing words does not paint a picture. One clear detail (like sunlight in clean stripes through the trees) does more work.",
      hintLadder: [
        "Are those words specific?",
        "Do they help you picture the day?",
        "One clear detail beats four vague ones."
      ],
      misconceptionsTargeted: ["adjective-stacking"]
    },
    {
      id: "g5.summer.ela.w3.d2.q5",
      type: "short_answer",
      stem: "Rewrite this sentence to show, not tell, using one sensory detail: The classroom was loud. Do not use the word loud in your new sentence.",
      rubric: {
        level3: "Trades the telling word for one specific sensory detail (sound) and adds a picture, with no use of the word loud.",
        level2: "Adds a detail but still uses the word loud or stays vague.",
        level1: "Just repeats the original or uses simple synonyms only."
      },
      exemplar: "Twenty voices talked over the screech of chairs being dragged into a circle.",
      hintLadder: [
        "Pick the sense to use (sound fits loud).",
        "Name what is making the noise (chairs, voices, laughing).",
        "Put it in one sentence and leave out the word loud."
      ]
    }
  ],
  reflectionPrompt: "Today you showed instead of told. Pick a feeling you had lately -- what is one sensory detail that captures it?",
  misconceptionBank: [
    {
      id: "adjective-stacking",
      label: "Stacks describing words instead of showing",
      description: "Piles up vague words (lovely, beautiful, amazing) hoping they add up to a clear picture.",
      coachMove: "Trade three describing words for one specific noun or action that paints the same picture."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Name That Sense",
      prompt: "Read this: The lemonade was so cold it numbed my teeth, and the ice clinked against the glass. Which TWO senses did the writer make you feel -- without ever saying cold drink?",
      answer: "Touch (cold numbing your teeth) and sound (ice clinking). The writer showed the drink instead of just naming it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Sensory Snapshot",
      challenge: "Pick one ordinary summer moment (eating ice cream, a thunderstorm, a pool jump). Write a 3 to 4 sentence snapshot that SHOWS it using at least three different senses -- and never names the obvious feeling word.",
      steps: [
        "Choose your moment and list the five senses down the side of your page.",
        "Jot one specific detail for at least three of those senses.",
        "Put your three best details into 3 to 4 sentences.",
        "Reread and cross out any telling word (hot, fun, scary) you can trade for a detail."
      ],
      deliverable: "A 3 to 4 sentence sensory snapshot using at least three senses, with no flat telling words.",
      choiceBoard: [
        "Write the sensory snapshot paragraph.",
        "Draw the scene and label each part with the sense it uses.",
        "Record yourself reading it aloud with a sound effect for each sense."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sensory Detail Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w3.d2.arena1",
          type: "multiple_choice",
          stem: "Which sentence SHOWS best (does not tell) that a character is worn out after a long hike?",
          choices: [
            "She was really, really tired after the hike.",
            "She felt exhausted and worn out and drained.",
            "Her legs wobbled on the last step, and she dropped onto the grass without taking off her boots.",
            "The hike made her very tired."
          ],
          answerIndex: 2,
          explanation: "Wobbling legs and dropping onto the grass with her boots still on are clear actions that let the reader feel how tired she is, with no telling word.",
          hintLadder: [
            "Skip any option that uses a telling word like tired or exhausted.",
            "Look for the option with clear body actions.",
            "It is the one with wobbling legs and dropping onto the grass."
          ]
        },
        {
          id: "g5.summer.ela.w3.d2.arena2",
          type: "short_answer",
          stem: "Rewrite this telling sentence as a showing sentence using at least TWO different senses: The kitchen smelled good and felt cozy. Do not use the words good or cozy.",
          rubric: {
            level3: "Trades both telling words for specific details from at least two different senses (like smell plus touch or sound) and never uses good or cozy.",
            level2: "Uses one strong sensory detail but leans on only one sense, or keeps a telling word.",
            level1: "Repeats the sentence with synonyms or stays vague."
          },
          exemplar: "Warm bread and cinnamon drifted from the oven while the heater ticked and the wood floor felt warm under my socks.",
          hintLadder: [
            "Pick two senses to use (smell is easy; add touch or sound).",
            "Name what exactly smells and what exactly you feel or hear.",
            "Put them together and cut the words good and cozy."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Scan",
      prompt: "Sit still and notice: 5 things you can see, 4 you can hear, 3 you can touch, 2 you can smell, 1 you can taste. Take your time with each one.",
      scienceTieIn: "Tuning into your senses on purpose calms the brain's alarm system and sharpens focus -- a grounding trick rooted in how your nervous system works.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt: "Pick one strong feeling you had today. What single sensory detail captures it better than just naming the feeling?",
      badge: { id: "g5-summer-sensory-sleuth", name: "Sensory Sleuth", emoji: "👃" },
      estimatedMinutes: 7
    }
  }
};
