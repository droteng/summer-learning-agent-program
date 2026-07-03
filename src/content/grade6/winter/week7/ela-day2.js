// Grade 6 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 2.
// Topic: descriptive & sensory writing — bring a winter setting to life with
// the five senses and figurative language.

export const winterG6ElaW7D2 = {
  id: "g6.winter.ela.w7.d2",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Descriptive & sensory writing — bring a winter setting to life",
  topicTag: "sensory-description",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.3.D", "CCSS.L.6.5.A"],
  hook: "'It was cold' tells us nothing. 'The air bit my cheeks and every breath turned to smoke' puts us there. Today you learn to make readers feel your frozen world through all five senses and vivid figurative language.",
  miniLesson: [
    "Strong description uses SENSORY DETAILS — sight, sound, smell, taste, and touch — instead of flat, general words like 'nice' or 'cold.'",
    "FIGURATIVE LANGUAGE makes a picture: a SIMILE compares with 'like' or 'as' ('snow soft as ash'); a METAPHOR says one thing IS another ('the lake was a sheet of glass'); PERSONIFICATION gives human traits to things ('the wind howled and clawed at the door').",
    "The goal is 'show, don't tell': instead of telling readers a place is freezing, show them icicles like glass daggers, breath hanging in the air, and fingers too numb to bend."
  ],
  workedExample: {
    prompt: "Rewrite this flat sentence with sensory detail and one piece of figurative language: 'The forest was cold and quiet.'",
    steps: [
      "Add SIGHT: snow weighing down the pine branches.",
      "Add SOUND (or its absence): the hush so complete you hear your own heartbeat.",
      "Add TOUCH: the cold pinching your nose.",
      "Add a SIMILE or METAPHOR to sharpen the image."
    ],
    answer: "Snow bowed the pines until they touched the ground, and the forest was so still that my own heartbeat sounded loud — the cold pinched my nose like tiny needles."
  },
  items: [
    {
      id: "g6.winter.ela.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which sentence uses the strongest SENSORY DETAIL to describe cold?",
      choices: [
        "It was really, really cold outside.",
        "The cold was very bad that day.",
        "The frost stung my cheeks and each breath came out as a puff of smoke.",
        "Everyone agreed it was a cold morning."
      ],
      answerIndex: 2,
      explanation: "It appeals to touch (stinging frost) and sight (breath like smoke), so the reader can feel and see the cold instead of just being told about it.",
      hintLadder: [
        "Which sentence makes you feel or see the cold, not just hear that it was cold?",
        "Look for details tied to the senses.",
        "The stinging frost and smoky breath show the cold."
      ]
    },
    {
      id: "g6.winter.ela.w7.d2.q2",
      type: "multiple_choice",
      stem: "'The frozen lake was a mirror of black glass.' What kind of figurative language is this?",
      choices: ["Simile", "Metaphor", "Personification", "Onomatopoeia"],
      answerIndex: 1,
      explanation: "It says the lake IS a mirror of black glass (no 'like' or 'as'), directly calling one thing another — that is a metaphor.",
      hintLadder: [
        "Does it use 'like' or 'as'? If not, it is not a simile.",
        "It says one thing IS another thing directly.",
        "That direct comparison is a metaphor."
      ],
      misconceptionsTargeted: ["simile-metaphor-mixup"]
    },
    {
      id: "g6.winter.ela.w7.d2.q3",
      type: "multiple_choice",
      stem: "'The wind howled and clawed at the shutters all night.' Which technique gives the wind human-like actions?",
      choices: ["Simile", "Metaphor", "Personification", "Alliteration"],
      answerIndex: 2,
      explanation: "Howling and clawing are human/animal actions given to the wind — that is personification.",
      hintLadder: [
        "The wind is doing things a living creature would do.",
        "Giving human or animal traits to a nonliving thing is...",
        "...personification."
      ]
    },
    {
      id: "g6.winter.ela.w7.d2.q4",
      type: "short_answer",
      stem: "Write TWO sentences describing a snowy scene, using at least TWO different senses and one piece of figurative language (simile, metaphor, or personification).",
      rubric: {
        level3: "Two vivid sentences that clearly use at least two different senses AND include a correct simile, metaphor, or personification.",
        level2: "Uses sensory detail OR figurative language well, but is missing one of the two requirements or uses only one sense.",
        level1: "Flat or general description with little sensory detail and no clear figurative language."
      },
      exemplar: "The snow crunched like crushed sugar under my boots, and the icy air tasted sharp and clean on my tongue. Above me, bare branches wore thick white sleeves and the wind whispered through them.",
      hintLadder: [
        "Pick two senses to include (e.g., sound and taste).",
        "Add one simile, metaphor, or personification.",
        "Read it aloud — can you picture and feel the scene?"
      ]
    },
    {
      id: "g6.winter.ela.w7.d2.q5",
      type: "short_answer",
      stem: "Rewrite this flat sentence to 'show, don't tell': 'The old cabin was scary.' Use sensory detail instead of the word 'scary.'",
      rubric: {
        level3: "Removes 'scary' and shows fear through concrete sensory details (sights, sounds, etc.) so the reader senses the mood without being told.",
        level2: "Adds some detail but still leans on telling words, or the details only weakly create the mood.",
        level1: "Barely changes the sentence or still just tells the reader it was scary."
      },
      exemplar: "The cabin door hung on one rusted hinge, and the floorboards groaned under my feet while cold drafts moved through the dark like something breathing.",
      hintLadder: [
        "Don't use the word 'scary' — show it instead.",
        "What would you SEE, HEAR, or FEEL in a scary cabin?",
        "Let the details create the mood for the reader."
      ]
    }
  ],
  reflectionPrompt: "Look at the setting in your frozen-world story. Which ONE sense have you barely used yet — and how could adding it make the scene come alive?",
  misconceptionBank: [
    {
      id: "simile-metaphor-mixup",
      label: "Confuses similes and metaphors",
      description: "Cannot reliably tell a simile from a metaphor, often calling any comparison a simile.",
      coachMove: "Ask: 'Does it use the word LIKE or AS?' If yes, it's a simile; if it says one thing IS another directly, it's a metaphor."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Show It or Tell It?",
      prompt:
        "Two ways to describe the same morning: (A) 'The morning was very cold.' (B) 'Frost feathered the window and my breath hung in the air like smoke.' Which sentence SHOWS the cold instead of just telling you about it — and what makes it stronger?",
      answer: "(B) shows the cold with sensory details (frost you can see, breath like smoke) and a simile, so you feel it. (A) just tells you, so it stays flat.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frozen Five-Senses Word Bank",
      challenge:
        "Build a sensory word bank for the setting of your frozen-world story, then use it to write one rich paragraph that puts the reader right there in the cold.",
      steps: [
        "Draw five columns: SEE, HEAR, SMELL, TASTE, TOUCH.",
        "Fill each column with 3+ vivid words or phrases about your frozen setting.",
        "Circle one favorite detail in each column.",
        "Write a 4-6 sentence paragraph using at least three columns and one simile or metaphor."
      ],
      deliverable: "A five-senses word bank plus a descriptive paragraph that uses at least three senses and one piece of figurative language.",
      choiceBoard: [
        "Make the five-column word bank and write the paragraph.",
        "Create a 'sensory poster' of your setting with labeled detail bubbles for each sense.",
        "Record a 30-second audio description of your frozen setting, narrating what each sense picks up."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sensory Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w7.d2.arena1",
          type: "multiple_choice",
          stem: "'Icicles hung from the roof like glass daggers.' What kind of figurative language is this, and what is being compared?",
          choices: [
            "Metaphor — icicles are called daggers directly",
            "Personification — the icicles are given feelings",
            "Simile — icicles are compared to daggers using 'like'",
            "Onomatopoeia — the words imitate a sound"
          ],
          answerIndex: 2,
          explanation: "The word 'like' compares the icicles to glass daggers, which makes it a simile.",
          hintLadder: [
            "Look for the words 'like' or 'as.'",
            "The sentence uses 'like' to compare icicles to daggers.",
            "A comparison using 'like' or 'as' is a simile."
          ]
        },
        {
          id: "g6.winter.ela.w7.d2.arena2",
          type: "short_answer",
          stem: "Rewrite this flat sentence with vivid sensory detail and one metaphor OR personification: 'The blizzard was strong.'",
          rubric: {
            level3: "Replaces the flat sentence with concrete sensory detail AND includes a correct metaphor or personification that fits a blizzard.",
            level2: "Adds sensory detail or figurative language but is missing one, or the figurative language is unclear.",
            level1: "Barely changes the sentence or still just says the blizzard was strong."
          },
          exemplar: "The blizzard was a white wall that swallowed the road, and the wind shoved against the door as if it wanted in.",
          hintLadder: [
            "Show the blizzard's power with what you'd see or feel.",
            "Add a metaphor (it IS something) or personification (it acts alive).",
            "Cut the word 'strong' — let the image prove it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Snow Pause",
      prompt:
        "Close your eyes and imagine standing in your frozen setting. Take a slow breath and silently name one thing you could SEE, one you could HEAR, and one you could FEEL there. Then open your eyes and roll your shoulders.",
      scienceTieIn: "Deliberately noticing your senses calms the mind and sharpens attention — the same focus that helps you write vivid, detailed descriptions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which of the five senses is the most powerful for describing winter, in your opinion? Give one example sentence that proves your choice.",
      badge: { id: "winter-sensory-sorcerer", name: "Sensory Sorcerer", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
