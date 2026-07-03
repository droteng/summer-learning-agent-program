// Grade 7 ELA/Writing — Summer Story Builders, Week 3, Day 3.
// Topic: figurative language, voice & tone — metaphor, imagery, and mood.

export const summerG7ElaW3D3 = {
  id: "g7.summer.ela.w3.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Figurative language, voice & tone",
  topicTag: "figurative-language-voice",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3.D", "CCSS.ELA-LITERACY.L.7.5.A"],
  hook: "Two writers can describe the same rainy street — one leaves you cold and bored, the other makes you shiver. The difference is figurative language, voice, and tone: the tools that turn flat description into a mood a reader can feel on their skin.",
  miniLesson: [
    "Figurative language means more than the literal words. A metaphor states one thing IS another ('the classroom was a pressure cooker'); a simile uses like or as ('the hall buzzed like a beehive'); imagery paints sensory pictures you can see, hear, smell, taste, or touch.",
    "Voice is the distinct personality of the writing — word choice, rhythm, and attitude that make a passage sound like YOU and no one else. A nervous narrator and a swaggering one describe the same door very differently.",
    "Tone is the writer's attitude toward the subject (playful, tense, wistful), and it builds MOOD — the feeling the reader is left with. Precise images and figurative language are how you steer mood: fog can feel cozy or menacing depending on the words you choose."
  ],
  workedExample: {
    prompt: "Turn a flat sentence — 'The old house was scary.' — into a moody description using a metaphor and sensory imagery.",
    steps: [
      "Name the mood you want: dread.",
      "Choose a metaphor that carries that mood: the house as a sleeping predator.",
      "Layer in sensory imagery — sound, smell, touch — that fits the dread.",
      "Check the tone: every image should pull the same direction."
    ],
    answer: "The old house crouched at the end of the lane like a beast that had learned to hold its breath; the porch exhaled cold air that smelled of rust and rain, and the door hinges whispered when we were still ten steps away."
  },
  items: [
    {
      id: "g7.summer.ela.w3.d3.q1",
      type: "multiple_choice",
      stem: "Which sentence contains a METAPHOR (not a simile)?",
      choices: [
        "Her temper was as short as a matchstick.",
        "The stadium roared like an ocean.",
        "The city was a furnace that August afternoon.",
        "He ran as fast as a cheetah."
      ],
      answerIndex: 2,
      explanation: "A metaphor states one thing IS another without 'like' or 'as': the city IS a furnace. The other three use 'like' or 'as,' making them similes.",
      hintLadder: [
        "A metaphor does NOT use 'like' or 'as.'",
        "Which sentence says one thing simply IS another?",
        "The city 'was a furnace' — a direct comparison."
      ]
    },
    {
      id: "g7.summer.ela.w3.d3.q2",
      type: "multiple_choice",
      stem: "The MOOD of a passage is best defined as:",
      choices: [
        "The number of characters in the scene",
        "The feeling the writing creates in the reader",
        "The correct spelling of each word",
        "The length of the sentences"
      ],
      answerIndex: 1,
      explanation: "Mood is the emotional atmosphere the reader feels; tone (the writer's attitude) and imagery are the tools that create it.",
      hintLadder: [
        "Mood is about feeling, not facts.",
        "Whose feeling does it describe — the reader's or the character's?",
        "It is the emotional atmosphere the reader is left with."
      ]
    },
    {
      id: "g7.summer.ela.w3.d3.q3",
      type: "multiple_choice",
      stem: "Read: 'Sunlight spilled through the kitchen, and the kettle hummed a warm little tune.' Which TONE does this create?",
      choices: [
        "Cheerful and cozy",
        "Terrified and tense",
        "Angry and bitter",
        "Cold and lonely"
      ],
      answerIndex: 0,
      explanation: "Words like 'spilled,' 'warm,' and 'hummed a little tune' choose a gentle, cheerful attitude, building a cozy mood.",
      hintLadder: [
        "Notice the connotation of 'warm' and 'hummed.'",
        "Are these words gentle or harsh?",
        "The soft, bright images build a cozy, cheerful feeling."
      ],
      misconceptionsTargeted: ["tone-equals-topic"]
    },
    {
      id: "g7.summer.ela.w3.d3.q4",
      type: "short_answer",
      stem: "Write ONE sentence describing a storm using a metaphor and at least two senses of imagery (sight, sound, smell, touch, or taste).",
      rubric: {
        level3: "Includes a clear metaphor (no 'like'/'as') AND vivid imagery from at least two distinct senses, all pulling toward one consistent mood.",
        level2: "Includes a metaphor OR two-sense imagery but not both, or the images clash in mood.",
        level1: "Flat or literal description with no real metaphor and little sensory detail."
      },
      exemplar: "The storm was an angry drummer pounding the tin roof, the air sharp with the smell of split wood and the cold sting of rain on our faces.",
      hintLadder: [
        "First decide: what IS the storm, in one bold comparison?",
        "Then add what you'd hear and what you'd feel or smell.",
        "Avoid 'like' and 'as' so it stays a metaphor."
      ]
    },
    {
      id: "g7.summer.ela.w3.d3.q5",
      type: "short_answer",
      stem: "Describe the SAME setting — an empty playground at dusk — twice: once with a peaceful tone and once with an eerie tone. Explain in one sentence what word choices changed the mood.",
      rubric: {
        level3: "Two versions of the same setting clearly convey opposite moods through different word choice/imagery, AND the explanation correctly points to the words that shifted the mood.",
        level2: "Two versions differ in mood but the contrast is weak, or the explanation is vague.",
        level1: "Versions read the same, or no explanation of the word choices is given."
      },
      exemplar: "Peaceful: The empty swings drifted in a soft golden breeze, chains chiming like tiny bells. Eerie: The empty swings twitched in a cold gust, chains creaking in the graying light. — Swapping 'soft golden' and 'chiming' for 'cold' and 'creaking' flipped the mood from calm to unsettling.",
      hintLadder: [
        "Keep the setting identical; change only the words and images.",
        "Choose warm, gentle words for peaceful; cold, sharp words for eerie.",
        "In your explanation, point to the exact words that flipped the feeling."
      ]
    }
  ],
  reflectionPrompt: "What mood do you want YOUR adventure story to leave a reader with — thrilled, uneasy, triumphant? Jot down three sensory images that could carry that mood through your whole story.",
  misconceptionBank: [
    {
      id: "tone-equals-topic",
      label: "Confuses tone/mood with the topic of the writing",
      description: "Thinks a scary topic automatically has a scary tone, missing that word choice — not subject — sets the mood.",
      coachMove: "Show the same topic written two ways (cozy fog vs. menacing fog): 'The subject didn't change — the WORDS did. Tone lives in word choice.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Same Sky, Different Feeling",
      prompt:
        "Would you rather describe a full moon as 'a silver coin pinned to the velvet sky' or 'a pale, watching eye above the rooftops'? Same moon — but which mood does each create, and what single word choice flips it?",
      answer:
        "'Silver coin' and 'velvet' feel calm and lovely; 'watching eye' feels uneasy and surveilled. The topic (a full moon) never changed — the word choice created two opposite moods. That's tone at work.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Mood Palette Workshop",
      challenge:
        "Build a 'mood palette' for a single setting from your story. Write the setting three times, each time steering it toward a different mood using metaphor, imagery, and voice.",
      steps: [
        "Pick one key setting from your story-in-progress (a forest, a hallway, a harbor).",
        "Write it once as CALM, using warm imagery and a gentle voice.",
        "Write it again as TENSE, swapping in sharp, cold, or sudden images.",
        "Write it a third time as WONDROUS or magical, and underline each figurative device you used."
      ],
      deliverable: "Three versions of one setting — calm, tense, and wondrous — each with metaphor or simile and sensory imagery, with figurative devices underlined.",
      choiceBoard: [
        "Write the three-mood palette as three short paragraphs.",
        "Create a visual 'mood board' pairing each version with colors and a soundtrack idea.",
        "Record all three read aloud, changing your voice and pace to match each mood."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Wordsmith Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w3.d3.arena1",
          type: "multiple_choice",
          stem: "Which revision best transforms 'It was quiet in the woods' into vivid imagery with figurative language?",
          choices: [
            "The woods were very, very quiet and had no sound at all.",
            "The woods held their breath; not even a leaf dared to rustle, and the hush pressed against my ears like cotton.",
            "There was quietness in the woods that day.",
            "The woods were quiet, which was nice."
          ],
          answerIndex: 1,
          explanation: "It personifies the woods, adds a simile ('like cotton'), and uses sensory imagery to build mood; the others merely restate 'quiet.'",
          hintLadder: [
            "Look for a comparison AND a sensory detail.",
            "Which one makes you FEEL the silence, not just read the word?",
            "The 'held their breath' and 'like cotton' version does the most work."
          ]
        },
        {
          id: "g7.summer.ela.w3.d3.arena2",
          type: "short_answer",
          stem: "Write one sentence that uses personification (giving human traits to a non-human thing) to build a TENSE mood in a scene.",
          rubric: {
            level3: "Clearly personifies a non-human thing AND the image builds a genuinely tense mood.",
            level2: "Uses personification but the tension is weak, or builds tension without true personification.",
            level1: "No personification, or the sentence is flat and moodless."
          },
          exemplar: "The wind clawed at the shutters and the old floorboards groaned a warning as we crept down the hall.",
          hintLadder: [
            "Give a human action to something that isn't human (wind, shadows, a house).",
            "Choose a verb that feels threatening.",
            "Make sure the image leaves the reader on edge."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Scan",
      prompt:
        "Sit or stand tall and slowly name, in your mind, one thing you can see, one you can hear, one you can feel, one you can smell, and one you could taste right now. Take a slow breath between each.",
      scienceTieIn: "Deliberately noticing sensory detail calms the nervous system and sharpens the same observation skills you use to write vivid, image-rich descriptions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write the opening line of your adventure story so that its very first sentence sets the MOOD. Use one metaphor or one strong sensory image to hook the reader's feelings, not just their curiosity.",
      badge: { id: "g7-mood-weaver", name: "Mood Weaver", emoji: "🎨" },
      estimatedMinutes: 7
    }
  }
};
