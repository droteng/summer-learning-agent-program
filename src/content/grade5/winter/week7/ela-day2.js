// Grade 5 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 2.
// Topic: descriptive & sensory writing — use the five senses and simple
// figurative language to bring a winter setting to life (Grade 5 depth).

export const winterG5ElaW7D2 = {
  id: "g5.winter.ela.w7.d2",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Descriptive & sensory writing — bring a winter setting to life",
  topicTag: "sensory-description",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3.D", "CCSS.ELA-LITERACY.L.5.5.A"],
  hook: "'It was cold' tells us almost nothing. 'The air bit my cheeks and my breath turned to smoke' puts us right there. Today you learn to make readers feel your frozen world using the five senses and simple word pictures.",
  miniLesson: [
    "Good writers use SENSORY DETAILS. Think about the five senses: what you SEE, HEAR, SMELL, TASTE, and TOUCH. Sensory words beat flat words like 'nice' or 'cold.'",
    "You can paint a picture with a SIMILE or a METAPHOR. A SIMILE compares two things using 'like' or 'as' ('snow soft like feathers'). A METAPHOR says one thing IS another ('the lake was a sheet of glass').",
    "A helpful goal is 'show, don't tell.' Instead of telling readers a place is freezing, SHOW them: icicles hanging like glass, breath in the air, and fingers too numb to bend."
  ],
  workedExample: {
    prompt: "Rewrite this flat sentence with sensory details and one simile or metaphor: 'The forest was cold and quiet.'",
    steps: [
      "Add SIGHT: snow weighing down the pine branches.",
      "Add SOUND: it is so quiet you can hear your own footsteps.",
      "Add TOUCH: the cold pinching your nose.",
      "Add a SIMILE or METAPHOR to make the picture sharper."
    ],
    answer: "Snow bent the pine branches low, and the forest was so quiet I could hear my own footsteps crunch, while the cold pinched my nose like tiny needles."
  },
  items: [
    {
      id: "g5.winter.ela.w7.d2.q1",
      type: "multiple_choice",
      stem: "Which sentence uses the strongest SENSORY DETAILS to describe cold?",
      choices: [
        "It was really, really cold outside.",
        "The frost stung my cheeks and each breath came out as a puff of smoke.",
        "The cold was very bad that day.",
        "Everyone agreed it was a cold morning."
      ],
      answerIndex: 1,
      explanation: "It uses touch (stinging frost) and sight (breath like smoke), so the reader can feel and see the cold instead of just being told about it.",
      hintLadder: [
        "Which sentence lets you FEEL or SEE the cold?",
        "Look for details tied to the senses.",
        "The stinging frost and smoky breath show the cold."
      ]
    },
    {
      id: "g5.winter.ela.w7.d2.q2",
      type: "multiple_choice",
      stem: "'The snow was soft like a blanket.' What kind of figurative language is this?",
      choices: ["Simile", "Metaphor", "Personification", "Rhyme"],
      answerIndex: 0,
      explanation: "It compares the snow to a blanket using the word 'like,' which makes it a simile.",
      hintLadder: [
        "Look for the word 'like' or 'as.'",
        "It compares two things using 'like.'",
        "A comparison with 'like' or 'as' is a simile."
      ],
      misconceptionsTargeted: ["simile-metaphor-mixup"]
    },
    {
      id: "g5.winter.ela.w7.d2.q3",
      type: "multiple_choice",
      stem: "'The frozen lake was a giant mirror.' What kind of figurative language is this?",
      choices: ["Simile", "Alliteration", "Rhyme", "Metaphor"],
      answerIndex: 3,
      explanation: "It says the lake IS a mirror (no 'like' or 'as'), calling one thing another directly, which is a metaphor.",
      hintLadder: [
        "Does it use 'like' or 'as'? If not, it is not a simile.",
        "It says one thing IS another thing.",
        "That direct comparison is a metaphor."
      ]
    },
    {
      id: "g5.winter.ela.w7.d2.q4",
      type: "short_answer",
      stem: "Write TWO sentences describing a snowy scene. Use at least TWO different senses and one simile or metaphor.",
      rubric: {
        level3: "Two vivid sentences that clearly use at least two different senses AND include a correct simile or metaphor.",
        level2: "Uses sensory detail OR figurative language well, but is missing one part or uses only one sense.",
        level1: "Flat or general description with little sensory detail and no clear simile or metaphor."
      },
      exemplar: "The snow crunched under my boots like crushed sugar, and the icy air tasted clean and sharp on my tongue. The bare branches wore thick white sleeves of snow.",
      hintLadder: [
        "Pick two senses to include, like sound and taste.",
        "Add one simile ('like...') or metaphor ('is...').",
        "Read it aloud. Can you picture and feel the scene?"
      ]
    },
    {
      id: "g5.winter.ela.w7.d2.q5",
      type: "short_answer",
      stem: "Rewrite this flat sentence to 'show, don't tell': 'The old cabin was scary.' Do not use the word 'scary' — show it with details instead.",
      rubric: {
        level3: "Removes 'scary' and shows the feeling with concrete details (sights, sounds) so the reader senses the mood without being told.",
        level2: "Adds some detail but still leans on telling words, or the details only weakly create the mood.",
        level1: "Barely changes the sentence or still just tells the reader it was scary."
      },
      exemplar: "The cabin door hung on one rusty hinge, and the old floorboards creaked under my feet while a cold draft slid through the dark.",
      hintLadder: [
        "Do not use the word 'scary' — show it instead.",
        "What would you SEE, HEAR, or FEEL in a scary cabin?",
        "Let the details make the mood for the reader."
      ]
    }
  ],
  reflectionPrompt: "Look at the setting in your frozen-world story. Which ONE sense have you barely used yet, and how could adding it make the scene come alive?",
  misconceptionBank: [
    {
      id: "simile-metaphor-mixup",
      label: "Confuses similes and metaphors",
      description: "Cannot reliably tell a simile from a metaphor, often calling any comparison a simile.",
      coachMove: "Ask: 'Does it use the word LIKE or AS?' If yes, it is a simile. If it says one thing IS another, it is a metaphor."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Show It or Tell It?",
      prompt:
        "Two ways to describe the same morning: (A) 'The morning was very cold.' (B) 'Frost covered the window and my breath hung in the air like smoke.' Which sentence SHOWS the cold instead of just telling you, and what makes it stronger?",
      answer: "(B) shows the cold with sensory details (frost you can see, breath like smoke) and a simile, so you feel it. (A) just tells you, so it stays flat.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frozen Five-Senses Word Bank",
      challenge:
        "Build a five-senses word bank for the setting of your frozen-world story, then use it to write one rich paragraph that puts the reader right there in the cold.",
      steps: [
        "Draw five columns: SEE, HEAR, SMELL, TASTE, TOUCH.",
        "Fill each column with 3 or more vivid words about your frozen setting.",
        "Circle one favorite word in each column.",
        "Write a 4 to 5 sentence paragraph using at least three columns and one simile or metaphor."
      ],
      deliverable: "A five-senses word bank plus a descriptive paragraph that uses at least three senses and one simile or metaphor.",
      choiceBoard: [
        "Make the five-column word bank and write the paragraph.",
        "Create a 'sensory poster' of your setting with a labeled detail bubble for each sense.",
        "Record a 30-second spoken description of your frozen setting, naming what each sense picks up."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sensory Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w7.d2.arena1",
          type: "multiple_choice",
          stem: "'Icicles hung from the roof like glass daggers.' What kind of figurative language is this?",
          choices: [
            "Metaphor, because icicles are called daggers directly",
            "Rhyme, because the words sound alike",
            "Simile, because icicles are compared to daggers using 'like'",
            "A list of facts about roofs"
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
          id: "g5.winter.ela.w7.d2.arena2",
          type: "short_answer",
          stem: "Rewrite this flat sentence with vivid sensory detail and one simile or metaphor: 'The blizzard was strong.'",
          rubric: {
            level3: "Replaces the flat sentence with concrete sensory detail AND includes a correct simile or metaphor that fits a blizzard.",
            level2: "Adds sensory detail or figurative language but is missing one, or the figurative language is unclear.",
            level1: "Barely changes the sentence or still just says the blizzard was strong."
          },
          exemplar: "The blizzard was a white wall that swallowed the road, and the wind pushed against the door like a big animal trying to get in.",
          hintLadder: [
            "Show the blizzard's power with what you would see or feel.",
            "Add a simile ('like...') or metaphor ('it is...').",
            "Cut the word 'strong' and let the picture prove it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Five-Senses Snow Pause",
      prompt:
        "Close your eyes and imagine standing in your frozen setting. Take a slow breath and silently name one thing you could SEE, one you could HEAR, and one you could FEEL there. Then open your eyes and roll your shoulders.",
      scienceTieIn: "Noticing your senses on purpose calms your mind and sharpens your focus, the same focus that helps you write vivid, detailed descriptions.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which of the five senses do you think is the best for describing winter? Write one example sentence that shows why you picked it.",
      badge: { id: "g5-winter-sensory-sorcerer", name: "Sensory Star", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
