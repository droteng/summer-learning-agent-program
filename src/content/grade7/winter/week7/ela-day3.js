// Grade 7 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 3.
// Topic: dialogue and SUBTEXT — reveal character and tension through what is
// NOT said, plus correct punctuation of dialogue with interrupted tags.

export const winterG7ElaW7D3 = {
  id: "g7.winter.ela.w7.d3",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Dialogue and subtext — reveal character and tension through what is left unsaid",
  topicTag: "dialogue-character",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3.B", "CCSS.ELA-LITERACY.L.7.2"],
  hook: "The most powerful line of dialogue is often the one that says one thing and means another. When a character snaps 'I'm fine' while gripping the frozen railing, the words and the truth disagree — that gap is SUBTEXT. Today you learn to write dialogue with hidden currents underneath.",
  miniLesson: [
    "SUBTEXT is the meaning beneath the spoken words — what a character really feels or wants but doesn't say. 'I'm fine,' said through clenched teeth, means the opposite. Subtext creates tension because the reader senses the gap between words and truth.",
    "Reveal subtext with ACTION BEATS and body language that CONTRADICT the words: '\"I'm not scared,\" he said, checking the door lock for the third time.' The action tells the reader what the words deny.",
    "Punctuate dialogue precisely, including INTERRUPTED tags: '\"We should turn back,\" she said, \"before the light goes.\"' The tag splits one sentence, so a comma follows the tag and the second part stays lowercase — but if the tag splits two sentences, use a period and capital: '\"We should turn back,\" she said. \"The light is going.\"'"
  ],
  workedExample: {
    prompt: "Write a line where a character insists she isn't afraid, but the SUBTEXT shows she is — and punctuate an interrupted tag correctly.",
    steps: [
      "Decide the gap: her words claim courage; her truth is fear.",
      "Write dialogue that denies the fear out loud.",
      "Add an action beat that betrays the real feeling.",
      "Split the line with an interrupted tag and punctuate it correctly."
    ],
    answer: "\"I've crossed worse than this,\" Nadia said, though her hand hadn't left the rope, \"so stop looking at me like that.\""
  },
  items: [
    {
      id: "g7.winter.ela.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which line best uses SUBTEXT — words that reveal a feeling the character is NOT directly stating?",
      choices: [
        "\"I am very frightened right now,\" Sam admitted.",
        "\"I'm fine,\" Sam said, wiping his palms on his coat again and again.",
        "\"I feel scared,\" Sam told them honestly.",
        "\"Being scared is normal,\" Sam explained calmly."
      ],
      answerIndex: 1,
      explanation: "Sam's words claim he's fine while his repeated wiping of sweaty palms reveals hidden fear — the gap between speech and action is subtext.",
      hintLadder: [
        "Subtext is when words and true feeling DON'T match.",
        "Which option has an action that contradicts the words?",
        "'I'm fine' plus nervous palm-wiping shows hidden fear."
      ],
      misconceptionsTargeted: ["subtext-means-say-it-clearly"]
    },
    {
      id: "g7.winter.ela.w7.d3.q2",
      type: "multiple_choice",
      stem: "Which sentence correctly punctuates an INTERRUPTED dialogue tag that splits ONE sentence?",
      choices: [
        "\"We should turn back,\" she said, \"before the light goes.\"",
        "\"We should turn back,\" she said, \"Before the light goes.\"",
        "\"We should turn back\" she said \"before the light goes.\"",
        "\"We should turn back,\" she said. \"before the light goes.\""
      ],
      answerIndex: 0,
      explanation: "The tag splits a single sentence, so a comma follows 'said' and the continuation ('before') stays lowercase, with commas inside the quotes.",
      hintLadder: [
        "The sentence is one thought split by the tag.",
        "Should the word after the tag be capitalized if it continues the same sentence?",
        "Comma after 'said' and lowercase 'before' is correct."
      ]
    },
    {
      id: "g7.winter.ela.w7.d3.q3",
      type: "multiple_choice",
      stem: "How do ACTION BEATS most effectively create subtext in dialogue?",
      choices: [
        "By repeating exactly what the words already say",
        "By contradicting or complicating the spoken words, hinting at the true feeling",
        "By replacing all dialogue with narration",
        "By adding as many adverbs to the dialogue tags as possible"
      ],
      answerIndex: 1,
      explanation: "When the action contradicts or complicates the words ('I'm fine,' + trembling hands), the reader senses the true, unspoken feeling — that is subtext at work.",
      hintLadder: [
        "Subtext lives in the GAP between words and truth.",
        "Should the action agree with the words or reveal something different?",
        "Action that contradicts the words creates subtext."
      ]
    },
    {
      id: "g7.winter.ela.w7.d3.q4",
      type: "short_answer",
      stem: "Write a short exchange (2-3 lines) between two characters stranded in the cold, where one says they aren't worried but the SUBTEXT shows they are terrified. Use action beats and correct dialogue punctuation — do not use the words 'worried,' 'scared,' or 'terrified.'",
      rubric: {
        level3: "Correctly punctuated dialogue whose SUBTEXT clearly reveals hidden fear through contradicting action beats, without naming the emotion.",
        level2: "Reveals the subtext but has a punctuation error, OR is punctuated correctly but the fear is only weakly implied.",
        level1: "Names the emotion directly, has multiple punctuation errors, or shows no gap between words and truth."
      },
      exemplar: "\"There's no rush,\" Teo said, though he'd already zipped his coat to the chin and unzipped it twice.\n\n\"None at all,\" Priya agreed, watching the last daylight drain from the ridge and counting the matches in her pocket a third time.",
      hintLadder: [
        "Have a character DENY the fear out loud.",
        "Add an action beat that quietly betrays it.",
        "Check punctuation: marks inside quotes, new paragraph per speaker."
      ]
    },
    {
      id: "g7.winter.ela.w7.d3.q5",
      type: "short_answer",
      stem: "Explain why dialogue with SUBTEXT (where words and true feelings differ) can be more powerful than dialogue where characters state exactly what they feel.",
      rubric: {
        level3: "Explains that subtext makes readers infer the truth, which creates tension and realism because real people often hide feelings, engaging the reader more than direct statements.",
        level2: "Gives a partial reason (e.g., 'it's more interesting') without connecting it to reader inference, tension, or realism.",
        level1: "Restates the question or gives an unrelated answer."
      },
      exemplar: "Subtext makes me, the reader, figure out what a character truly feels from the gap between their words and their actions, which pulls me into the story and creates tension. It also feels real, because people rarely announce their feelings out loud — they hide them, just like the character does.",
      hintLadder: [
        "What does the reader get to DO when the truth is hidden?",
        "How does a gap between words and truth create tension?",
        "Connect 'reader infers' and 'feels realistic' to 'more powerful.'"
      ]
    }
  ],
  reflectionPrompt: "Pick a tense moment in your frozen-world story. Write one line where a character says something that hides what they really feel — then note in a few words what the subtext is.",
  misconceptionBank: [
    {
      id: "subtext-means-say-it-clearly",
      label: "Thinks strong dialogue states the feeling outright",
      description: "Believes good dialogue means characters clearly announce their emotions, missing that subtext works by implying feelings through contradiction.",
      coachMove: "Ask: 'What would this character SAY to hide the feeling — and what small action would give it away?'"
    },
    {
      id: "dialogue-punctuation-outside",
      label: "Mispunctuates dialogue, especially interrupted tags",
      description: "Places end punctuation outside the quotes or capitalizes the continuation of a split sentence.",
      coachMove: "Remind: punctuation of the speech stays INSIDE the quotes; a tag splitting ONE sentence takes a comma and a lowercase continuation."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "What They Say vs. What They Mean",
      prompt:
        "A character stares at a cracking frozen lake and says, flatly, \"It's probably fine.\" Their hand is white-knuckled on the sled rope. What does the LINE say, what does the SUBTEXT say, and why is the gap more gripping than 'I'm scared we'll fall through'?",
      answer: "The line says everything's fine; the subtext (white knuckles) says they're terrified. The gap grips us because we, the readers, uncover the truth ourselves, and hidden fear feels more real and tense than fear stated outright.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Subtext Cards + Frozen Scene",
      challenge:
        "Make 'subtext cards' for two characters in your frozen-world story — separating what each SAYS from what each really WANTS — then write a dialogue scene where the gap between them creates tension.",
      steps: [
        "For each of two characters, write a card with two lines: SAYS (their words) and WANTS/FEELS (the hidden truth).",
        "Note one action beat or body-language cue that could leak each character's hidden truth.",
        "Write an 8-12 line dialogue scene set in your frozen world where neither character says their real feeling outright.",
        "Check punctuation, including at least one correctly punctuated INTERRUPTED tag, and a new paragraph per speaker."
      ],
      deliverable: "Two subtext cards plus a correctly punctuated dialogue scene driven by subtext, including one interrupted tag.",
      choiceBoard: [
        "Write the two subtext cards and the dialogue scene.",
        "Draw the two characters with two speech bubbles each — one for words, one (thought-bubble) for the hidden truth.",
        "Record the scene as a two-voice audio skit, letting tone reveal the subtext the words hide."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Subtext Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which sentence correctly punctuates an interrupted tag that splits TWO separate sentences?",
          choices: [
            "\"We're almost there,\" he said, \"just keep moving.\"",
            "\"We're almost there,\" he said. \"Just keep moving.\"",
            "\"We're almost there\" he said \"Just keep moving.\"",
            "\"We're almost there,\" he said, \"Just keep moving.\""
          ],
          answerIndex: 1,
          explanation: "Because these are two complete sentences, the tag ends with a period and the second sentence starts with a capital ('Just'), each with marks inside the quotes.",
          hintLadder: [
            "Are 'We're almost there' and 'Just keep moving' one sentence or two?",
            "Two sentences means a period after the tag, not a comma.",
            "Period after 'said' and capital 'Just' is correct."
          ]
        },
        {
          id: "g7.winter.ela.w7.d3.arena2",
          type: "short_answer",
          stem: "Write ONE line of dialogue with an action beat where a character pretends to forgive someone but the SUBTEXT shows they're still angry — without using the words 'angry,' 'mad,' or 'forgive.' Punctuate correctly.",
          rubric: {
            level3: "Correctly punctuated dialogue plus an action beat that together clearly imply lingering anger beneath forgiving words, without naming the emotion.",
            level2: "Reveals the subtext but has a punctuation error, OR is punctuated correctly but the anger is only weakly implied.",
            level1: "Names the emotion, has multiple punctuation errors, or shows no gap between words and truth."
          },
          exemplar: "\"It's forgotten. Really,\" Mara said, smiling as she set his frozen gloves outside the cabin door and slid the bolt shut.",
          hintLadder: [
            "Have the character SAY something forgiving.",
            "Add an action that quietly contradicts the kind words.",
            "Check the punctuation: marks inside the quotes."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Say-One-Thing, Show-Another",
      prompt:
        "Stand up and act out subtext with your body: say 'I'm totally relaxed' out loud while making a tense, hunched, fidgety pose — then say 'I'm terrified' while standing loose and calm. Feel how the body can contradict the words. Do each twice.",
      scienceTieIn: "Your brain reads body language faster than speech, which is exactly why an action beat that contradicts dialogue instantly signals subtext to a reader.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time you said 'I'm fine' when you weren't. What would an action beat have revealed about your real feeling? Write one line of dialogue plus a beat that captures it.",
      badge: { id: "g7-winter-subtext-sleuth", name: "Subtext Sleuth", emoji: "🎭" },
      estimatedMinutes: 7
    }
  }
};
