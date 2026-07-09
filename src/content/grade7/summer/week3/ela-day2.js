// Grade 7 ELA/Writing — Summer Story Builders, Week 3, Day 2.
// Topic: characterization & dialogue — direct vs indirect characterization,
// and subtext (what characters mean beneath what they say).

export const summerG7ElaW3D2 = {
  id: "g7.summer.ela.w3.d2",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Characterization & dialogue",
  topicTag: "characterization-dialogue",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3.B", "CCSS.ELA-LITERACY.W.7.3.D"],
  hook: "Readers don't fall for a plot — they fall for a person. Today you learn to build characters so alive they seem to breathe, using two tools writers guard like secrets: indirect characterization and subtext, the meaning hiding under the words.",
  miniLesson: [
    "Direct characterization TELLS you a trait outright: 'Jonah was brave.' Indirect characterization SHOWS it through action, speech, thoughts, appearance, and how others react — you infer 'brave' when Jonah steps toward the growl instead of away.",
    "Skilled writers lean on indirect characterization because readers trust what they conclude for themselves more than what they're simply told. A rule of thumb: prove the trait, don't announce it.",
    "Dialogue carries subtext — the real meaning underneath the literal words. When a character snaps 'I'm fine' while slamming a door, the words say fine but the subtext says the opposite. Great dialogue makes readers read between the lines."
  ],
  workedExample: {
    prompt: "Rewrite a direct statement — 'Priya was nervous about the audition' — using indirect characterization and one line of dialogue with subtext.",
    steps: [
      "Pick observable signs of nervousness: fidgeting, a shaky voice, avoiding eye contact.",
      "Show, don't tell: 'Priya read the callback list three times, though she already knew her name wasn't on it yet.'",
      "Add dialogue whose subtext reveals more than the words: 'It's just a school play,' she said, twisting the strap of her bag into a knot.",
      "Notice the reader now INFERS 'nervous' without ever being told — and feels it."
    ],
    answer: "Priya read the callback list three times. 'It's just a school play,' she said, twisting her bag strap into a knot — the words shrug, but the hands confess."
  },
  items: [
    {
      id: "g7.summer.ela.w3.d2.q1",
      type: "multiple_choice",
      stem: "Which sentence uses INDIRECT characterization?",
      choices: [
        "Marcus slipped half his lunch to the new kid who had none, then looked away so no one would thank him.",
        "Marcus was a generous boy.",
        "Everyone knew Marcus was kind.",
        "Marcus had a generous personality."
      ],
      answerIndex: 0,
      explanation: "It SHOWS generosity through action rather than TELLING the trait, letting the reader infer it. The others state the trait directly.",
      hintLadder: [
        "Which one shows a trait through action instead of naming it?",
        "Indirect characterization lets you infer the trait.",
        "Look for the sentence that never uses a trait word like 'generous.'"
      ]
    },
    {
      id: "g7.summer.ela.w3.d2.q2",
      type: "multiple_choice",
      stem: "A character says 'No, really, take the last slice — I'm not even hungry' while their stomach growls loudly. The SUBTEXT is:",
      choices: [
        "The character truly is not hungry",
        "The character is hungry but is choosing to be generous or polite",
        "The character dislikes pizza",
        "There is no hidden meaning"
      ],
      answerIndex: 1,
      explanation: "Subtext is the meaning beneath the literal words; the growling stomach contradicts the words, revealing hunger masked by politeness.",
      hintLadder: [
        "Do the words match what the body is doing?",
        "Subtext is what's really meant underneath the words.",
        "The growl tells the truth the words hide."
      ],
      misconceptionsTargeted: ["show-vs-tell-confusion"]
    },
    {
      id: "g7.summer.ela.w3.d2.q3",
      type: "multiple_choice",
      stem: "Why do skilled writers often prefer indirect over direct characterization?",
      choices: [
        "It uses fewer words",
        "It avoids using any dialogue",
        "It is required by grammar rules",
        "Readers trust conclusions they reach themselves more than traits they're simply told"
      ],
      answerIndex: 3,
      explanation: "Letting readers infer a trait makes it more convincing and memorable than announcing it — 'prove it, don't announce it.'",
      hintLadder: [
        "Think about what readers believe more.",
        "Do you trust a trait more when you conclude it yourself?",
        "'Prove the trait, don't announce it.'"
      ]
    },
    {
      id: "g7.summer.ela.w3.d2.q4",
      type: "short_answer",
      stem: "Take the direct statement 'Devon was stubborn' and rewrite it using indirect characterization — show the trait through action, speech, or reaction without using the word 'stubborn.'",
      rubric: {
        level3: "Vividly shows stubbornness through concrete action, speech, or others' reactions, never naming the trait, so a reader could clearly infer it.",
        level2: "Shows the trait somewhat but is vague, or slips in the trait word, or the behavior only loosely fits.",
        level1: "Restates the trait directly or shows behavior that doesn't convey stubbornness."
      },
      exemplar: "The coach offered Devon an easier route three times. Each time Devon just re-tied his laces, faced the steepest wall, and said, 'I'll do it my way or not at all.'",
      hintLadder: [
        "Ask what a stubborn person DOES, not what they ARE.",
        "Show a refusal, a repeated choice, or others reacting to it.",
        "Never use the word 'stubborn' itself."
      ]
    },
    {
      id: "g7.summer.ela.w3.d2.q5",
      type: "short_answer",
      stem: "Write two lines of dialogue between two characters where the SUBTEXT (real meaning) differs from the literal words. Then explain in one sentence what each character actually means.",
      rubric: {
        level3: "Dialogue clearly carries subtext that differs from the surface words for at least one speaker, AND the explanation correctly names the hidden meaning.",
        level2: "Dialogue hints at subtext but it's weak, or the explanation only partly captures the hidden meaning.",
        level1: "Dialogue is flatly literal with no subtext, or the explanation is missing or wrong."
      },
      exemplar: "\"Sure, sit wherever,\" Ana said, sliding her backpack onto the empty chair. \"I don't care.\" — Ana's words invite the new student to sit, but sliding her bag onto the seat means she'd rather keep the space to herself.",
      hintLadder: [
        "Let the words say one thing and the actions or tone say another.",
        "Think of a moment where someone hides how they really feel.",
        "In your explanation, name the true meaning under each line."
      ]
    }
  ],
  reflectionPrompt: "Think of a character who felt real to you. Was one telling detail — a habit, a line of dialogue, a small action — that made you believe in them? You'll use that trick on your own hero this week.",
  misconceptionBank: [
    {
      id: "show-vs-tell-confusion",
      label: "Confuses showing a trait with telling it",
      description: "Believes adding a trait word (e.g., 'she said angrily') counts as showing, when it still just tells the reader the trait.",
      coachMove: "Ask: 'What could a reader SEE or HEAR that would make them conclude this on their own?' Replace the trait word with an observable action."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Read the Room",
      prompt:
        "A friend opens a gift, freezes for a beat, then says a bright, flat 'Wow. Thanks.' The words are grateful — but what is the subtext? What tiny clues tell you their real reaction?",
      answer:
        "The frozen beat and the flat, forced brightness hint the subtext is disappointment or surprise — the body and tone say what the polite words won't. That gap between words and truth is subtext.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Character Dossier",
      challenge:
        "Build a full dossier for the hero of the story you're writing this week — but reveal them the way a novelist would, through indirect characterization and a line of dialogue with subtext.",
      steps: [
        "Give your character a name, an age, and one deep want and one fear.",
        "Write three SHOWN details (action, habit, or reaction) that reveal a trait without naming it.",
        "Write one line of dialogue whose subtext reveals more than the literal words.",
        "Add a one-line note explaining what the reader should infer from it all."
      ],
      deliverable: "A character dossier with name, want/fear, three indirect-characterization details, and one dialogue line carrying subtext.",
      choiceBoard: [
        "Design the dossier as an illustrated 'case file' with labeled clues.",
        "Write a one-minute monologue where your character reveals themselves without stating a single trait.",
        "Draw a two-panel comic where the speech bubble says one thing and the thought bubble says another."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Character Whisperer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w3.d2.arena1",
          type: "multiple_choice",
          stem: "Which line reveals a character as ANXIOUS using indirect characterization AND subtext?",
          choices: [
            "\"I'm anxious,\" she said anxiously.",
            "She was a very anxious person by nature.",
            "\"It's fine, I'm calm,\" she said, checking the locked door for the third time.",
            "Everyone agreed she worried too much."
          ],
          answerIndex: 2,
          explanation: "The words claim calm while the repeated door-checking shows anxiety — that gap is both indirect characterization and subtext. The others name the trait directly.",
          hintLadder: [
            "Look for a line that never uses the word 'anxious.'",
            "Which one has words that contradict the action?",
            "The gap between 'I'm calm' and checking the door is the subtext."
          ]
        },
        {
          id: "g7.summer.ela.w3.d2.arena2",
          type: "short_answer",
          stem: "Rewrite this telling line using indirect characterization: 'The old sailor was lonely.' Do not use the word 'lonely.'",
          rubric: {
            level3: "Shows loneliness through concrete action, setting, or dialogue so a reader clearly infers it, without naming the trait.",
            level2: "Suggests loneliness but weakly, or slips in the trait word, or the detail only loosely fits.",
            level1: "Restates the trait or shows behavior that doesn't convey loneliness."
          },
          exemplar: "Every evening the old sailor set two mugs on the table, then quietly poured coffee into only one and watched the empty chair across from him.",
          hintLadder: [
            "Ask what a lonely person's small habits might look like.",
            "Use a setting detail or a repeated action instead of the word.",
            "Let the reader feel the emptiness without being told."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Emotion Charades",
      prompt:
        "Stand and act out three emotions — nervous, proud, then relieved — using only your body: no words, no sound. Freeze in each pose for a slow count of five, then shake it out.",
      scienceTieIn: "Your posture and facial muscles feed signals back to your brain, so physically 'trying on' an emotion can sharpen your sense of how to show it in writing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Describe your story's hero without using a single trait word like 'brave' or 'kind.' Show us who they are through one action and one line of dialogue instead.",
      badge: { id: "g7-character-whisperer", name: "Character Whisperer", emoji: "🎭" },
      estimatedMinutes: 7
    }
  }
};
