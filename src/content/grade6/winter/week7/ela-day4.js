// Grade 6 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 4.
// Topic: revising and editing a story — stronger verbs, clarity, show-don't-tell.

export const winterG6ElaW7D4 = {
  id: "g6.winter.ela.w7.d4",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Revising and editing your story — stronger verbs, clarity, show-don't-tell",
  topicTag: "revising-editing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.5", "CCSS.L.6.3.A"],
  hook: "A first draft is you telling yourself the story; revising is you making it great for a reader. Today you sharpen your frozen-world tale: stronger verbs, clearer sentences, and 'show, don't tell.'",
  miniLesson: [
    "REVISING changes the writing itself — ideas, word choice, and clarity — while EDITING fixes surface mistakes like spelling and punctuation. Revising is the bigger, more important step for making a story come alive.",
    "STRONG VERBS do the heavy lifting: 'She trudged through the snow' shows more than 'She walked slowly.' Replace weak verb-plus-adverb pairs with one vivid verb (walked slowly → trudged; said loudly → shouted).",
    "Revise for CLARITY and SHOW-DON'T-TELL: cut vague words ('stuff,' 'very,' 'a lot'), untangle confusing sentences, and turn told feelings ('he was scared') into shown ones ('his hands shook as he reached for the door')."
  ],
  workedExample: {
    prompt: "Revise this weak sentence for a stronger verb and show-don't-tell: 'She walked slowly to the door because she was scared.'",
    steps: [
      "Find the weak verb-plus-adverb pair: 'walked slowly.'",
      "Replace it with one vivid verb: 'crept' or 'inched.'",
      "Find the TOLD feeling: 'she was scared.'",
      "SHOW the fear with a physical detail instead of naming it."
    ],
    answer: "She crept toward the door, her breath tight and her fingers trembling on the frozen latch."
  },
  items: [
    {
      id: "g6.winter.ela.w7.d4.q1",
      type: "multiple_choice",
      stem: "Which revision replaces a weak verb-plus-adverb pair with ONE strong verb?",
      choices: [
        "'walked very quickly' → 'walked really fast'",
        "'walked quickly' → 'sprinted'",
        "'sprinted' → 'ran quickly'",
        "'ran' → 'went running'"
      ],
      answerIndex: 1,
      explanation: "'Sprinted' is a single vivid verb that captures 'walked quickly' more powerfully — that is the goal of strong-verb revision.",
      hintLadder: [
        "Look for the option that gets SHORTER and stronger, not longer.",
        "One vivid verb should replace a verb plus an adverb.",
        "'Sprinted' replaces 'walked quickly' with a single strong verb."
      ]
    },
    {
      id: "g6.winter.ela.w7.d4.q2",
      type: "multiple_choice",
      stem: "What is the main difference between REVISING and EDITING?",
      choices: [
        "Revising fixes spelling; editing changes the ideas.",
        "Revising changes ideas, word choice, and clarity; editing fixes surface errors like spelling and punctuation.",
        "They are exactly the same thing.",
        "Revising is only for poems; editing is only for stories."
      ],
      answerIndex: 1,
      explanation: "Revising improves the writing itself (ideas, wording, clarity); editing cleans up surface mechanics like spelling and punctuation.",
      hintLadder: [
        "One of these is about big changes to the writing; the other about small fixes.",
        "Which one deals with ideas and word choice?",
        "Revising = ideas/clarity; editing = spelling/punctuation."
      ],
      misconceptionsTargeted: ["revising-equals-editing"]
    },
    {
      id: "g6.winter.ela.w7.d4.q3",
      type: "multiple_choice",
      stem: "Which sentence best follows the 'show, don't tell' rule?",
      choices: [
        "He was freezing cold.",
        "He felt very, very cold.",
        "He hugged himself and his teeth chattered as he stamped his numb feet.",
        "He was so cold that it was really bad."
      ],
      answerIndex: 2,
      explanation: "It shows the cold through actions and physical details (chattering teeth, stamping numb feet) instead of just telling us he was cold.",
      hintLadder: [
        "Which one makes you SEE the cold through actions?",
        "Avoid the ones that just say 'he was cold.'",
        "Chattering teeth and numb feet show it."
      ]
    },
    {
      id: "g6.winter.ela.w7.d4.q4",
      type: "short_answer",
      stem: "Revise this weak sentence so it has a STRONGER verb and shows the feeling instead of telling it: 'The boy went across the icy bridge and he was nervous.'",
      rubric: {
        level3: "Replaces the weak verb with a vivid one AND shows the nervousness through action or physical detail instead of stating 'he was nervous.'",
        level2: "Improves the verb OR shows the feeling, but not both, or the revision is only slightly stronger.",
        level1: "Barely changes the sentence or still uses a weak verb and tells the feeling directly."
      },
      exemplar: "The boy edged across the icy bridge, testing each plank and gripping the frozen rope until his knuckles went white.",
      hintLadder: [
        "Swap 'went' for a vivid verb (crept, edged, inched...).",
        "Don't write 'he was nervous' — show it with an action.",
        "What would nervous hands or steps look like?"
      ]
    },
    {
      id: "g6.winter.ela.w7.d4.q5",
      type: "short_answer",
      stem: "Describe TWO things you will check for when you revise your own frozen-world story, and explain why each one makes the story better.",
      rubric: {
        level3: "Names two clear revision moves (e.g., stronger verbs, show-don't-tell, cutting vague words, clarity) AND explains how each improves the story.",
        level2: "Names two revision ideas but explains only one, or the explanations are vague.",
        level1: "Names fewer than two ideas or gives no real explanation."
      },
      exemplar: "First, I'll hunt for weak verbs like 'walked' and 'went' and swap in stronger ones so the action feels alive. Second, I'll find any 'told' feelings like 'she was scared' and show them with details instead, so readers feel the emotion themselves.",
      hintLadder: [
        "Pick two revision moves from today's lesson.",
        "For each, ask: how does this help the reader?",
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
      coachMove: "Separate them: 'Editing fixes surface mistakes; revising re-sees the writing — its ideas, verbs, and clarity. Do the big revising before the small editing.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Weak Verb vs. Strong Verb",
      prompt:
        "Two versions of the same moment: (A) 'She walked slowly and carefully through the deep snow.' (B) 'She trudged through the deep snow.' Which version is stronger — and what did the writer do to fix it?",
      answer: "(B) is stronger. The writer replaced the weak verb-plus-adverbs 'walked slowly and carefully' with one vivid verb, 'trudged,' which shows the effort in a single word.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Revision Makeover Lab",
      challenge:
        "Take a paragraph from your frozen-world draft (or the practice paragraph below) and give it a full makeover: stronger verbs, clearer sentences, and at least one 'show-don't-tell' upgrade. Keep both versions so you can see the difference.",
      steps: [
        "Copy a paragraph of your story (or use: 'It was cold. The girl walked to the frozen lake. She was scared. She went across it.').",
        "Circle every weak verb (walked, went, was, got) and swap in stronger ones.",
        "Underline any TOLD feeling and rewrite it to SHOW it with action or detail.",
        "Read the before and after aloud and mark which changes helped most."
      ],
      deliverable: "A 'before and after' paragraph showing your revisions, with at least two stronger verbs and one show-don't-tell upgrade.",
      choiceBoard: [
        "Do the before/after paragraph makeover in writing.",
        "Make a 'verb upgrade chart' — 8 weak verbs on the left, strong swaps on the right — and use three in a sentence.",
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
          id: "g6.winter.ela.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence has been revised BEST for a stronger verb AND show-don't-tell?",
          choices: [
            "The wind was very strong and he was cold.",
            "The wind blew hard and he felt really cold.",
            "The wind clawed at his coat until he could no longer feel his fingers.",
            "The wind was strong, so he was very, very cold."
          ],
          answerIndex: 2,
          explanation: "It uses a strong, vivid verb ('clawed') and shows the cold through a physical detail (numb fingers) rather than telling us he was cold.",
          hintLadder: [
            "Look for a vivid verb instead of 'was' or 'blew.'",
            "Look for the cold being SHOWN, not stated.",
            "'Clawed' plus numb fingers does both."
          ]
        },
        {
          id: "g6.winter.ela.w7.d4.arena2",
          type: "short_answer",
          stem: "Revise this whole sentence for stronger verbs, clarity, and show-don't-tell: 'He got to the cabin and he was very tired and it was a nice feeling to be inside.'",
          rubric: {
            level3: "Replaces weak verbs (got, was), cuts vague words (very, nice), AND shows the tiredness or relief through detail instead of stating it.",
            level2: "Improves the verbs OR the show-don't-tell, but leaves some weak/vague wording.",
            level1: "Barely changes the sentence or keeps weak verbs and vague, told feelings."
          },
          exemplar: "He stumbled through the cabin door, legs aching, and sank onto the bench as the warmth wrapped around him like a blanket.",
          hintLadder: [
            "Swap 'got' and 'was' for vivid verbs.",
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
        "Stand and shake out the tension of editing: shake each hand for ten seconds, roll your neck gently side to side, then take one slow breath and say, 'My story is getting stronger.'",
      scienceTieIn: "Short movement breaks reset your focus and reduce mental fatigue, so you return to careful work like revising with fresh, sharper attention.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is ONE change you made today that you think improved your frozen-world story the most? Why did that change matter?",
      badge: { id: "winter-revision-wizard", name: "Revision Wizard", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
