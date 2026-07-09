// Grade 6 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 3.
// Topic: dialogue and character — reveal character through what they say and do.

export const winterG6ElaW7D3 = {
  id: "g6.winter.ela.w7.d3",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Dialogue and character — reveal who characters are through words and actions",
  topicTag: "dialogue-character",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.3.B", "CCSS.L.6.2"],
  hook: "You don't have to write 'she was brave.' Let her say 'Give me the rope — I'll cross first' and step onto the ice. Today you learn to reveal character through what people SAY and DO, and to punctuate dialogue correctly.",
  miniLesson: [
    "Dialogue reveals character INDIRECTLY: instead of telling readers a trait, show it through a character's words, tone, and choices. A kind character shares the last blanket; a nervous one keeps checking the frozen door.",
    "Punctuate dialogue with these rules: put spoken words inside quotation marks, keep end punctuation INSIDE the quotes, and start a NEW paragraph each time a different person speaks.",
    "Balance dialogue with ACTION and REACTION beats — 'She pulled her hood tight before answering' — so conversations don't float in empty space and readers keep 'seeing' the scene."
  ],
  workedExample: {
    prompt: "Show a stubborn, protective older sibling using dialogue and action (not by saying 'she was stubborn').",
    steps: [
      "Choose a trait to reveal without naming it: stubborn + protective.",
      "Write a line of dialogue that a stubborn, protective sibling would say.",
      "Add an action beat that shows the same trait.",
      "Punctuate: quotes around speech, end mark inside the quotes, new paragraph per speaker."
    ],
    answer: "\"You're not crossing that ice — I am,\" Rina said, stepping in front of her little brother and gripping the rope tighter."
  },
  items: [
    {
      id: "g6.winter.ela.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which line reveals a character's bravery INDIRECTLY (through what they say or do) instead of just telling us?",
      choices: [
        "Sam was a very brave person.",
        "\"Tie the rope to me — I'll test the ice first,\" Sam said, already stepping onto the frozen lake.",
        "Everyone knew Sam was brave.",
        "Sam felt brave inside."
      ],
      answerIndex: 1,
      explanation: "The line shows bravery through Sam's words and action (volunteering to test the ice) rather than flatly stating it.",
      hintLadder: [
        "Which one SHOWS bravery through a choice or words?",
        "Avoid the ones that just say 'Sam was brave.'",
        "Volunteering to test the ice shows courage without naming it."
      ]
    },
    {
      id: "g6.winter.ela.w7.d3.q2",
      type: "multiple_choice",
      stem: "Which sentence is punctuated CORRECTLY as dialogue?",
      choices: [
        "\"We have to hurry,\" she whispered.",
        "\"We have to hurry\" she whispered.",
        "We have to hurry, \"she whispered.\"",
        "\"We have to hurry.\" she whispered."
      ],
      answerIndex: 0,
      explanation: "The comma goes inside the closing quotation mark, and the dialogue tag ('she whispered') continues the sentence in lowercase.",
      hintLadder: [
        "Where should the comma go — inside or outside the quotes?",
        "The end punctuation of the spoken part stays INSIDE the quotes.",
        "A comma inside the quotes, then the lowercase tag, is correct."
      ],
      misconceptionsTargeted: ["dialogue-punctuation-outside"]
    },
    {
      id: "g6.winter.ela.w7.d3.q3",
      type: "multiple_choice",
      stem: "When should you start a NEW paragraph in a scene of dialogue?",
      choices: [
        "Every time the same person keeps talking",
        "Never — dialogue stays in one paragraph",
        "Only at the very end of the conversation",
        "Each time a DIFFERENT person begins to speak"
      ],
      answerIndex: 3,
      explanation: "A new paragraph each time the speaker changes helps readers track who is talking.",
      hintLadder: [
        "The rule is about keeping speakers clear for the reader.",
        "What changes when you should hit 'enter'?",
        "Start fresh each time a new person speaks."
      ]
    },
    {
      id: "g6.winter.ela.w7.d3.q4",
      type: "short_answer",
      stem: "Write TWO lines of dialogue between two characters trapped in a snowstorm. Reveal that one is CALM and the other is PANICKING — without using the words 'calm' or 'panicking.' Punctuate correctly.",
      rubric: {
        level3: "Two correctly punctuated lines (new paragraph per speaker, commas/marks inside quotes) that clearly reveal one calm and one panicking character through their words.",
        level2: "Reveals the two personalities but has a punctuation error, or is punctuated correctly but the traits are only weakly shown.",
        level1: "Names the traits directly, has multiple punctuation errors, or the two characters don't sound different."
      },
      exemplar: "\"We need to leave RIGHT NOW — the snow's already up to the door!\" Theo shouted, yanking at the latch.\n\n\"Breathe. We wait for the wind to drop, then we go together,\" Mara said, settling calmly onto the bench.",
      hintLadder: [
        "Give each character a different voice through their words.",
        "Show panic with short, rushed speech; show calm with steady speech.",
        "Check: comma or mark inside the quotes, new paragraph per speaker."
      ]
    },
    {
      id: "g6.winter.ela.w7.d3.q5",
      type: "short_answer",
      stem: "Explain why 'showing' a trait through dialogue and action is usually more powerful than 'telling' the reader the trait directly.",
      rubric: {
        level3: "Explains that showing lets readers experience/infer the trait for themselves, making the character feel real and the writing more engaging than a flat label.",
        level2: "Gives a partial reason (e.g., 'it's more interesting') without explaining how showing lets the reader figure it out.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "When a character volunteers to cross the ice, I figure out for myself that they're brave, which makes them feel real and pulls me into the story — just being told 'she was brave' is flat and forgettable.",
      hintLadder: [
        "What does the reader get to DO when you show instead of tell?",
        "How does that make the character feel more real?",
        "Connect 'reader figures it out' to 'more engaging.'"
      ]
    }
  ],
  reflectionPrompt: "Pick one character in your frozen-world story. Write one line of dialogue that reveals their biggest personality trait without naming it.",
  misconceptionBank: [
    {
      id: "dialogue-punctuation-outside",
      label: "Puts end punctuation outside the quotation marks",
      description: "Places commas and periods that belong to the spoken words outside the closing quotation mark.",
      coachMove: "Remind: the punctuation of the spoken words lives INSIDE the quotes — 'Let's go,' she said, not 'Let's go', she said."
    },
    {
      id: "telling-not-showing-character",
      label: "Names traits instead of revealing them",
      description: "Writes 'he was mean' or 'she was brave' instead of showing the trait through words and actions.",
      coachMove: "Ask: 'What would this character SAY or DO that would make me realize the trait on my own?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Say It or Show It?",
      prompt:
        "Two ways to reveal a grumpy character: (A) 'Grandpa was grumpy.' (B) \"Shut the door — you're letting the whole winter in,\" Grandpa muttered without looking up. Which one SHOWS us he's grumpy, and why is that stronger?",
      answer: "(B) shows grumpiness through his words and tone, so we sense it ourselves. (A) just labels him, which is flat and forgettable.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Character Cards + Frozen Scene",
      challenge:
        "Create two character cards for your frozen-world story, then write a short dialogue scene that reveals each character's personality through what they say and do — no trait-labels allowed.",
      steps: [
        "Make a card for each of two characters: name, one core trait, and how they talk (fast? formal? joking?).",
        "Note one habit or action beat that shows each character's trait.",
        "Write a 6-10 line dialogue scene between them, set in your frozen world.",
        "Check punctuation: quotes, marks inside, and a new paragraph each time the speaker changes."
      ],
      deliverable: "Two character cards plus a correctly punctuated dialogue scene that reveals both personalities through words and actions.",
      choiceBoard: [
        "Write the two character cards and the dialogue scene.",
        "Draw the two characters with speech bubbles that reveal their personalities.",
        "Record the scene as a two-voice audio skit, giving each character a distinct voice."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Dialogue Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.winter.ela.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which sentence correctly punctuates dialogue that comes AFTER the tag?",
          choices: [
            "She turned and said \"the ice won't hold.\"",
            "She turned and said, \"the ice won't hold\".",
            "She turned and said, \"The ice won't hold.\"",
            "She turned and said \"The ice won't hold\"."
          ],
          answerIndex: 2,
          explanation: "A comma follows the tag, the first spoken word is capitalized, and the period sits inside the closing quotation mark.",
          hintLadder: [
            "There should be a comma after 'said' before the quote.",
            "The first word of the spoken sentence is capitalized.",
            "The period belongs INSIDE the closing quotes."
          ]
        },
        {
          id: "g6.winter.ela.w7.d3.arena2",
          type: "short_answer",
          stem: "Write ONE line of dialogue (correctly punctuated) plus an ACTION beat that together reveal a SNEAKY, untrustworthy character — without ever using the words 'sneaky' or 'untrustworthy.'",
          rubric: {
            level3: "One correctly punctuated line of dialogue AND an action beat that together clearly suggest sneakiness/untrustworthiness without naming the trait.",
            level2: "Reveals the trait but has a punctuation error, or is punctuated correctly but the trait is only weakly shown.",
            level1: "Names the trait directly, has multiple punctuation errors, or fails to suggest the trait."
          },
          exemplar: "\"Of course I'll guard the supplies — you two get some rest,\" Kellan said with a quick smile, sliding an extra ration into his coat when he thought no one was looking.",
          hintLadder: [
            "What would a sneaky character SAY to seem trustworthy?",
            "Add an action that quietly contradicts their friendly words.",
            "Check the punctuation: comma or mark inside the quotes."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Character Freeze Frames",
      prompt:
        "Stand up and strike a 'freeze frame' pose for three characters: a brave hero (chin up, fists ready), a nervous traveler (hunched, glancing around), and a proud leader (tall, arms crossed). Hold each pose for five seconds.",
      scienceTieIn: "Your body posture influences how you feel and think — acting out characters with your body helps you imagine and write their personalities more vividly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Who is the most interesting character in your frozen-world story so far, and what is ONE thing they'd say that no one else in the story would say?",
      badge: { id: "winter-dialogue-director", name: "Dialogue Director", emoji: "🎭" },
      estimatedMinutes: 7
    }
  }
};
