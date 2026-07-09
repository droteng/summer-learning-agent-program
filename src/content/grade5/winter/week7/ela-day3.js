// Grade 5 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 3.
// Topic: dialogue and character — show who characters are through what they
// say and do, and punctuate dialogue correctly (Grade 5 depth).

export const winterG5ElaW7D3 = {
  id: "g5.winter.ela.w7.d3",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Dialogue and character — show who characters are through words and actions",
  topicTag: "dialogue-character",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.3.B", "CCSS.ELA-LITERACY.L.5.2.B"],
  hook: "You do not have to write 'she was brave.' Instead, let her say 'Give me the rope. I'll cross first' and step onto the ice. Today you learn to SHOW who a character is through what they SAY and DO, and how to punctuate dialogue correctly.",
  miniLesson: [
    "Dialogue SHOWS what a character is like. Instead of telling readers a trait, let their words and choices show it. A kind character shares the last blanket. A nervous one keeps peeking at the frozen door.",
    "Punctuate dialogue with three simple rules: put the spoken words inside quotation marks, keep the comma or end mark INSIDE the quotes, and start a NEW paragraph each time a different person speaks.",
    "Add ACTION beats so the talking does not float in empty space. For example: 'She pulled her hood tight before she answered.' This helps readers keep seeing the scene."
  ],
  workedExample: {
    prompt: "Show a brave, protective older sister using dialogue and action, without saying 'she was brave.'",
    steps: [
      "Pick the trait to show without naming it: brave and protective.",
      "Write a line of dialogue a brave, protective sister would say.",
      "Add an action that shows the same trait.",
      "Punctuate: quotes around the speech, the mark inside the quotes, a new paragraph for a new speaker."
    ],
    answer: "\"You're not crossing that ice. I am,\" Rina said, stepping in front of her little brother and gripping the rope."
  },
  items: [
    {
      id: "g5.winter.ela.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which line SHOWS a character is brave through what they say or do, instead of just telling us?",
      choices: [
        "Sam was a very brave person.",
        "Everyone knew Sam was brave.",
        "\"Tie the rope to me. I'll test the ice first,\" Sam said, already stepping onto the frozen lake.",
        "Sam felt brave inside."
      ],
      answerIndex: 2,
      explanation: "The line shows bravery through Sam's words and action (volunteering to test the ice) instead of just stating it.",
      hintLadder: [
        "Which one SHOWS bravery through a choice or words?",
        "Skip the ones that just say 'Sam was brave.'",
        "Volunteering to test the ice shows courage without naming it."
      ]
    },
    {
      id: "g5.winter.ela.w7.d3.q2",
      type: "multiple_choice",
      stem: "Which sentence punctuates the dialogue CORRECTLY?",
      choices: [
        "\"We have to hurry\" she whispered.",
        "\"We have to hurry,\" she whispered.",
        "We have to hurry, \"she whispered.\"",
        "\"We have to hurry.\" she whispered."
      ],
      answerIndex: 1,
      explanation: "The comma goes inside the closing quotation mark, and the tag 'she whispered' continues in lowercase.",
      hintLadder: [
        "Where should the comma go, inside or outside the quotes?",
        "The mark for the spoken part stays INSIDE the quotes.",
        "A comma inside the quotes, then the lowercase tag, is correct."
      ],
      misconceptionsTargeted: ["dialogue-punctuation-outside"]
    },
    {
      id: "g5.winter.ela.w7.d3.q3",
      type: "multiple_choice",
      stem: "When should you start a NEW paragraph in a scene with dialogue?",
      choices: [
        "Each time a DIFFERENT person begins to speak",
        "Every time the same person keeps talking",
        "Only at the very end of the conversation",
        "Never. Dialogue always stays in one paragraph."
      ],
      answerIndex: 0,
      explanation: "Starting a new paragraph each time the speaker changes helps readers keep track of who is talking.",
      hintLadder: [
        "The rule helps readers know who is speaking.",
        "What changes when you should start a new paragraph?",
        "Start a new paragraph each time a new person speaks."
      ]
    },
    {
      id: "g5.winter.ela.w7.d3.q4",
      type: "short_answer",
      stem: "Write TWO lines of dialogue between two characters stuck in a snowstorm. Show that one is CALM and the other is SCARED, without using the words 'calm' or 'scared.' Punctuate correctly.",
      rubric: {
        level3: "Two correctly punctuated lines (new paragraph per speaker, comma or mark inside quotes) that clearly show one calm and one scared character through their words.",
        level2: "Shows the two personalities but has a punctuation error, or is punctuated correctly but the traits are only weakly shown.",
        level1: "Names the traits directly, has multiple punctuation errors, or the two characters do not sound different."
      },
      exemplar: "\"We have to leave right now! The snow is already at the door!\" Theo shouted, yanking at the latch.\n\n\"Take a breath. We wait for the wind to stop, then we go together,\" Mara said quietly.",
      hintLadder: [
        "Give each character a different way of talking.",
        "Show fear with short, fast speech. Show calm with slow, steady speech.",
        "Check: comma or mark inside the quotes, new paragraph for each speaker."
      ]
    },
    {
      id: "g5.winter.ela.w7.d3.q5",
      type: "short_answer",
      stem: "Why is 'showing' a trait through dialogue and action usually better than 'telling' the reader the trait directly? Explain in your own words.",
      rubric: {
        level3: "Explains that showing lets readers figure out the trait themselves, which makes the character feel real and the writing more interesting than a flat label.",
        level2: "Gives a partial reason (e.g., 'it's more interesting') without explaining how showing lets the reader figure it out.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "When a character volunteers to cross the ice, I figure out for myself that she is brave, which makes her feel real and pulls me into the story. Just being told 'she was brave' is flat and easy to forget.",
      hintLadder: [
        "What does the reader get to DO when you show instead of tell?",
        "How does that make the character feel more real?",
        "Connect 'reader figures it out' to 'more interesting.'"
      ]
    }
  ],
  reflectionPrompt: "Pick one character in your frozen-world story. Write one line of dialogue that shows their biggest personality trait without naming it.",
  misconceptionBank: [
    {
      id: "dialogue-punctuation-outside",
      label: "Puts the punctuation outside the quotation marks",
      description: "Places commas and periods that belong to the spoken words outside the closing quotation mark.",
      coachMove: "Remind: the punctuation of the spoken words lives INSIDE the quotes. 'Let's go,' she said, not 'Let's go', she said."
    },
    {
      id: "telling-not-showing-character",
      label: "Names traits instead of showing them",
      description: "Writes 'he was mean' or 'she was brave' instead of showing the trait through words and actions.",
      coachMove: "Ask: 'What would this character SAY or DO that would make me realize the trait on my own?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Say It or Show It?",
      prompt:
        "Two ways to show a grumpy character: (A) 'Grandpa was grumpy.' (B) \"Shut the door. You're letting the whole winter in,\" Grandpa muttered. Which one SHOWS us he is grumpy, and why is that stronger?",
      answer: "(B) shows grumpiness through his words and tone, so we sense it ourselves. (A) just labels him, which is flat and easy to forget.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Character Cards + Frozen Scene",
      challenge:
        "Make two character cards for your frozen-world story, then write a short dialogue scene that shows each character's personality through what they say and do. No trait-labels allowed.",
      steps: [
        "Make a card for each of two characters: name, one main trait, and how they talk (fast? polite? joking?).",
        "Write down one action or habit that shows each character's trait.",
        "Write a 6 to 8 line dialogue scene between them, set in your frozen world.",
        "Check the punctuation: quotes, marks inside, and a new paragraph each time the speaker changes."
      ],
      deliverable: "Two character cards plus a correctly punctuated dialogue scene that shows both personalities through words and actions.",
      choiceBoard: [
        "Write the two character cards and the dialogue scene.",
        "Draw the two characters with speech bubbles that show their personalities.",
        "Record the scene as a two-voice skit, giving each character a different voice."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Dialogue Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which sentence punctuates dialogue correctly when it comes AFTER the tag?",
          choices: [
            "She turned and said \"the ice won't hold.\"",
            "She turned and said \"The ice won't hold\".",
            "She turned and said, \"the ice won't hold\".",
            "She turned and said, \"The ice won't hold.\""
          ],
          answerIndex: 3,
          explanation: "A comma follows the tag, the first spoken word is capitalized, and the period sits inside the closing quotation mark.",
          hintLadder: [
            "There should be a comma after 'said' before the quote.",
            "The first word of the spoken sentence is capitalized.",
            "The period belongs INSIDE the closing quotes."
          ]
        },
        {
          id: "g5.winter.ela.w7.d3.arena2",
          type: "short_answer",
          stem: "Write ONE line of dialogue (punctuated correctly) plus an ACTION beat that together show a SNEAKY character, without using the word 'sneaky.'",
          rubric: {
            level3: "One correctly punctuated line of dialogue AND an action beat that together clearly suggest sneakiness without naming the trait.",
            level2: "Shows the trait but has a punctuation error, or is punctuated correctly but the trait is only weakly shown.",
            level1: "Names the trait directly, has multiple punctuation errors, or fails to suggest the trait."
          },
          exemplar: "\"Of course I'll watch the food. You two go rest,\" Kellan said with a quick smile, slipping an extra snack into his coat when no one was looking.",
          hintLadder: [
            "What would a sneaky character SAY to seem friendly?",
            "Add an action that quietly does not match their friendly words.",
            "Check the punctuation: comma or mark inside the quotes."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Character Freeze Frames",
      prompt:
        "Stand up and strike a 'freeze frame' pose for three characters: a brave hero (chin up, fists ready), a nervous traveler (hunched, looking around), and a proud leader (tall, arms crossed). Hold each pose for five seconds.",
      scienceTieIn: "Your body posture can change how you feel and think. Acting out characters with your body helps you imagine and write their personalities more clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Who is the most interesting character in your frozen-world story so far, and what is ONE thing they would say that no one else in the story would say?",
      badge: { id: "g5-winter-dialogue-director", name: "Dialogue Director", emoji: "🎭" },
      estimatedMinutes: 7
    }
  }
};
