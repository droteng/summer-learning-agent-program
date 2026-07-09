// Grade 5 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 4.
// Topic: revising and editing a story — stronger verbs, clarity, and
// show-don't-tell (Grade 5 depth).

export const winterG5ElaW7D4 = {
  id: "g5.winter.ela.w7.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Revising and editing your story — stronger verbs, clarity, show-don't-tell",
  topicTag: "revising-editing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.5", "CCSS.ELA-LITERACY.L.5.3.A"],
  hook: "A first draft is you telling yourself the story. Revising is you making it great for a reader. Today you make your frozen-world tale stronger with better verbs, clearer sentences, and 'show, don't tell.'",
  miniLesson: [
    "REVISING and EDITING are different jobs. REVISING changes the writing itself: the ideas, the word choice, and how clear it is. EDITING fixes small surface mistakes like spelling and punctuation. Revising is the bigger job that makes a story come alive.",
    "STRONG VERBS do a lot of work. 'She trudged through the snow' shows more than 'She walked slowly.' Try to replace a weak verb plus an adverb with one strong verb (walked slowly becomes trudged; said loudly becomes shouted).",
    "Revise for CLEAR writing and 'show, don't tell.' Cut vague words like 'stuff,' 'very,' and 'a lot.' Turn a told feeling ('he was scared') into a shown one ('his hands shook as he reached for the door')."
  ],
  workedExample: {
    prompt: "Revise this weak sentence for a stronger verb and show-don't-tell: 'She walked slowly to the door because she was scared.'",
    steps: [
      "Find the weak verb plus adverb: 'walked slowly.'",
      "Replace it with one strong verb: 'crept' or 'inched.'",
      "Find the told feeling: 'she was scared.'",
      "SHOW the fear with a detail instead of naming it."
    ],
    answer: "She crept toward the door, her breath tight and her fingers shaking on the frozen latch."
  },
  items: [
    {
      id: "g5.winter.ela.w7.d4.q1",
      type: "multiple_choice",
      stem: "Which change replaces a weak verb plus adverb with ONE strong verb?",
      choices: [
        "'walked very quickly' becomes 'walked really fast'",
        "'sprinted' becomes 'ran quickly'",
        "'walked quickly' becomes 'sprinted'",
        "'ran' becomes 'went running'"
      ],
      answerIndex: 2,
      explanation: "'Sprinted' is one strong verb that captures 'walked quickly' in a single word, which is the goal of strong-verb revising.",
      hintLadder: [
        "Look for the choice that gets SHORTER and stronger, not longer.",
        "One strong verb should replace a verb plus an adverb.",
        "'Sprinted' replaces 'walked quickly' with one strong verb."
      ]
    },
    {
      id: "g5.winter.ela.w7.d4.q2",
      type: "multiple_choice",
      stem: "What is the main difference between REVISING and EDITING?",
      choices: [
        "Revising fixes spelling, and editing changes the ideas.",
        "Revising is only for poems, and editing is only for stories.",
        "They are exactly the same thing.",
        "Revising changes ideas, word choice, and clarity, while editing fixes small errors like spelling and punctuation."
      ],
      answerIndex: 3,
      explanation: "Revising improves the writing itself (ideas, words, clarity). Editing cleans up small surface mistakes like spelling and punctuation.",
      hintLadder: [
        "One of these is about big changes, the other about small fixes.",
        "Which one deals with ideas and word choice?",
        "Revising means ideas and clarity. Editing means spelling and punctuation."
      ],
      misconceptionsTargeted: ["revising-equals-editing"]
    },
    {
      id: "g5.winter.ela.w7.d4.q3",
      type: "multiple_choice",
      stem: "Which sentence best follows the 'show, don't tell' rule?",
      choices: [
        "He hugged himself, and his teeth chattered as he stamped his numb feet.",
        "He felt very, very cold.",
        "He was freezing cold.",
        "He was so cold that it was really bad."
      ],
      answerIndex: 0,
      explanation: "It shows the cold through actions and details (chattering teeth, stamping numb feet) instead of just telling us he was cold.",
      hintLadder: [
        "Which one makes you SEE the cold through actions?",
        "Skip the ones that just say 'he was cold.'",
        "Chattering teeth and numb feet show it."
      ]
    },
    {
      id: "g5.winter.ela.w7.d4.q4",
      type: "short_answer",
      stem: "Revise this weak sentence so it has a STRONGER verb and SHOWS the feeling instead of telling it: 'The boy went across the icy bridge and he was nervous.'",
      rubric: {
        level3: "Replaces the weak verb with a strong one AND shows the nervousness through action or detail instead of stating 'he was nervous.'",
        level2: "Improves the verb OR shows the feeling, but not both, or the change is only a little stronger.",
        level1: "Barely changes the sentence, or still uses a weak verb and tells the feeling directly."
      },
      exemplar: "The boy edged across the icy bridge, testing each plank and gripping the frozen rope until his knuckles turned white.",
      hintLadder: [
        "Swap 'went' for a strong verb (crept, edged, inched...).",
        "Do not write 'he was nervous' — show it with an action.",
        "What would nervous hands or steps look like?"
      ]
    },
    {
      id: "g5.winter.ela.w7.d4.q5",
      type: "short_answer",
      stem: "Name TWO things you will check for when you revise your own frozen-world story, and explain why each one makes the story better.",
      rubric: {
        level3: "Names two clear revising moves (e.g., stronger verbs, show-don't-tell, cutting vague words, making it clearer) AND explains how each improves the story.",
        level2: "Names two revising ideas but explains only one, or the explanations are vague.",
        level1: "Names fewer than two ideas or gives no real explanation."
      },
      exemplar: "First, I will look for weak verbs like 'walked' and 'went' and swap in stronger ones so the action feels alive. Second, I will find any told feelings like 'she was scared' and show them with details, so readers feel the emotion themselves.",
      hintLadder: [
        "Pick two revising moves from today's lesson.",
        "For each one, ask: how does this help the reader?",
        "Explain the 'why' for both, not just the 'what.'"
      ]
    }
  ],
  reflectionPrompt: "Find ONE weak verb in your frozen-world draft and replace it with a stronger one. Write both versions and note which you like better and why.",
  misconceptionBank: [
    {
      id: "revising-equals-editing",
      label: "Thinks revising and editing are the same",
      description: "Believes 'revising' just means fixing spelling and punctuation, skipping the deeper work of improving ideas, word choice, and clarity.",
      coachMove: "Separate them: 'Editing fixes small mistakes. Revising re-sees the writing, its ideas, verbs, and clarity. Do the big revising first, then the small editing.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Weak Verb vs. Strong Verb",
      prompt:
        "Two versions of the same moment: (A) 'She walked slowly and carefully through the deep snow.' (B) 'She trudged through the deep snow.' Which version is stronger, and what did the writer do to fix it?",
      answer: "(B) is stronger. The writer replaced the weak verb plus adverbs 'walked slowly and carefully' with one strong verb, 'trudged,' which shows the effort in a single word.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Revision Makeover Lab",
      challenge:
        "Take a paragraph from your frozen-world draft (or the practice paragraph below) and give it a makeover: stronger verbs, clearer sentences, and at least one 'show-don't-tell' upgrade. Keep both versions so you can see the difference.",
      steps: [
        "Copy a paragraph of your story, or use: 'It was cold. The girl walked to the frozen lake. She was scared. She went across it.'",
        "Circle every weak verb (walked, went, was, got) and swap in stronger ones.",
        "Underline any told feeling and rewrite it to SHOW it with action or detail.",
        "Read the before and after aloud and mark which changes helped most."
      ],
      deliverable: "A 'before and after' paragraph showing your revisions, with at least two stronger verbs and one show-don't-tell upgrade.",
      choiceBoard: [
        "Do the before and after paragraph makeover in writing.",
        "Make a 'verb upgrade chart': 8 weak verbs on the left, strong swaps on the right, then use three in sentences.",
        "Record yourself reading the 'before' and 'after' aloud and explain what you changed."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence is revised BEST for a stronger verb AND show-don't-tell?",
          choices: [
            "The wind was very strong and he was cold.",
            "The wind clawed at his coat until he could no longer feel his fingers.",
            "The wind blew hard and he felt really cold.",
            "The wind was strong, so he was very, very cold."
          ],
          answerIndex: 1,
          explanation: "It uses a strong verb ('clawed') and shows the cold through a detail (numb fingers) instead of telling us he was cold.",
          hintLadder: [
            "Look for a strong verb instead of 'was' or 'blew.'",
            "Look for the cold being SHOWN, not stated.",
            "'Clawed' plus numb fingers does both."
          ]
        },
        {
          id: "g5.winter.ela.w7.d4.arena2",
          type: "short_answer",
          stem: "Revise this whole sentence for stronger verbs, clearer wording, and show-don't-tell: 'He got to the cabin and he was very tired and it was a nice feeling to be inside.'",
          rubric: {
            level3: "Replaces weak verbs (got, was), cuts vague words (very, nice), AND shows the tiredness or relief through detail instead of stating it.",
            level2: "Improves the verbs OR the show-don't-tell, but leaves some weak or vague wording.",
            level1: "Barely changes the sentence or keeps weak verbs and vague, told feelings."
          },
          exemplar: "He stumbled through the cabin door, his legs aching, and sank onto the bench as the warmth wrapped around him like a blanket.",
          hintLadder: [
            "Swap 'got' and 'was' for strong verbs.",
            "Cut vague words like 'very' and 'nice.'",
            "Show the tiredness and the relief with details."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake Out the Draft",
      prompt:
        "Stand and shake out the tiredness of editing: shake each hand for ten seconds, roll your neck gently side to side, then take one slow breath and say, 'My story is getting stronger.'",
      scienceTieIn: "Short movement breaks reset your focus and lower brain tiredness, so you come back to careful work like revising with fresh, sharper attention.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is ONE change you made today that you think improved your frozen-world story the most? Why did that change matter?",
      badge: { id: "g5-winter-revision-wizard", name: "Revision Wizard", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
