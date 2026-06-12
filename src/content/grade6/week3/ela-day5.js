// Grade 6 ELA — Week 3, Day 5.
// Topic: revising one paragraph for clarity and voice.

export const grade6ElaWeek3Day5 = {
  id: "g6.ela.w3.d5",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Revising for clarity",
  topicTag: "revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.W.5"],
  hook: "First drafts are for getting words down. Revision is where writing earns its readers. Today you revise one paragraph three ways.",
  miniLesson: [
    "Cut filler: words like 'really', 'very', 'just', and 'so' usually add length, not meaning.",
    "Tighten verbs: 'walked quickly' → 'hurried'. One strong verb beats two weak words.",
    "Vary sentence length. Two short sentences in a row punch. A long sentence after them flows. Mix them on purpose."
  ],
  workedExample: {
    prompt: "Revise: 'I really, really wanted to go to the very big concert that was so loud.'",
    steps: [
      "Cut filler: 'really, really' and 'very' and 'so' all add nothing.",
      "Strengthen verbs: 'wanted to go' → 'craved'.",
      "Pick the strongest concrete detail: 'big and loud' → 'crowded' or 'thunderous'.",
      "Result: 'I craved the thunderous concert.'"
    ],
    answer: "'I craved the thunderous concert.' — 5 words doing the work of 13."
  },
  items: [
    {
      id: "g6.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "Which word is filler that should usually be cut?",
      choices: ["because", "really", "however", "therefore"],
      answerIndex: 1,
      explanation: "'Really' rarely adds meaning. The others connect ideas.",
      hintLadder: [
        "Which option doesn't connect or argue?",
        "Filler words add length, not meaning.",
        "'Really' is the filler."
      ]
    },
    {
      id: "g6.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Which is the tightest version of: 'She walked very, very quickly to the door'?",
      choices: [
        "She walked very, very quickly to the door.",
        "She walked quickly to the door.",
        "She hurried to the door.",
        "She moved with great speed to the door."
      ],
      answerIndex: 2,
      explanation: "'Hurried' replaces 'walked very, very quickly' with one strong verb. Five words → four.",
      hintLadder: [
        "Look for the version with the strongest single verb.",
        "Cut adverbs when a stronger verb exists.",
        "'Hurried' is the win."
      ],
      misconceptionsTargeted: ["adverb-clutter"]
    },
    {
      id: "g6.ela.w3.d5.q3",
      type: "multiple_choice",
      stem: "Why mix short and long sentences?",
      choices: [
        "It saves paper.",
        "It looks fancier.",
        "Variety controls pacing — short snaps, long flows.",
        "It's a rule from textbooks."
      ],
      answerIndex: 2,
      explanation: "Sentence length controls how the reader experiences time. Short = punchy. Long = sweeping. Mixing keeps attention.",
      hintLadder: [
        "What does sentence length affect for the reader?",
        "Pacing — how fast or slow the writing feels.",
        "Variety controls the rhythm."
      ]
    },
    {
      id: "g6.ela.w3.d5.q4",
      type: "multiple_choice",
      stem: "Which sentence has the strongest verb?",
      choices: [
        "He went down the stairs quickly.",
        "He moved his way down the stairs in a fast manner.",
        "He bolted down the stairs.",
        "He used the stairs to get downstairs."
      ],
      answerIndex: 2,
      explanation: "'Bolted' is one specific, vivid verb. The others rely on weaker verbs propped up by adverbs.",
      hintLadder: [
        "Find the version with no adverb.",
        "Pick the verb that paints the action by itself.",
        "'Bolted' wins."
      ]
    },
    {
      id: "g6.ela.w3.d5.q5",
      type: "short_answer",
      stem:
        "Revise this draft sentence in one or two ways. Make it shorter and stronger:\n'I was really very nervous and so I started to walk to the door in a slow way.'",
      rubric: {
        level3: "Cuts filler, strengthens verbs, and produces a noticeably tighter sentence (under 12 words) that still keeps the meaning.",
        level2: "Cuts some filler but leaves weak verbs or stays nearly as long.",
        level1: "Restates the original or makes it longer."
      },
      exemplar: "Nervous, I crept toward the door.",
      hintLadder: [
        "Cut 'really', 'very', 'and so'.",
        "Combine 'nervous' and 'walk slowly' into a single image.",
        "Try 'crept', 'shuffled', or 'edged'."
      ]
    }
  ],
  reflectionPrompt: "Today you revised. What's a sentence you wrote recently that could lose half its words and gain half its punch?",
  misconceptionBank: [
    {
      id: "adverb-clutter",
      label: "Stacks adverbs instead of finding stronger verbs",
      description: "Writes 'walked very quickly' instead of 'hurried' or 'sprinted'.",
      coachMove: "Ask: is there one verb that means this whole phrase? Replace if yes."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Trim or Keep?",
      prompt:
        "Would you rather read 'She quickly and rapidly ran very fast down the street' or 'She sprinted down the street'? Which words in the long version are doing NO real work?",
      answer: "The second is stronger. 'Quickly', 'rapidly', and 'very fast' all repeat the same idea — one strong verb ('sprinted') replaces all of them.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Word Diet Challenge",
      challenge:
        "Take a chunky 4-sentence paragraph (write a deliberately overstuffed one first, or use an old draft) and revise it three ways: cut every filler word, swap weak verbs for strong ones, and vary your sentence lengths.",
      steps: [
        "Write or grab a wordy 4-sentence paragraph and count its words.",
        "Cross out all filler: really, very, just, so, that, totally.",
        "Circle weak verbs (walked, went, looked) and replace each with one vivid verb.",
        "Rearrange so at least one sentence is short and punchy — then count words again."
      ],
      deliverable: "A before-and-after paragraph with the word count shrunk and the verbs sharpened.",
      choiceBoard: [
        "Show the before/after paragraph with word counts.",
        "Make a 'most wanted' poster of three filler words you banned.",
        "Record yourself reading both versions to hear the difference in rhythm."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "Which is the tightest, strongest revision of: 'He was really very scared and so he quickly ran in a fast way out of the dark room'?",
          choices: [
            "He was very scared and ran quickly out of the dark room.",
            "Terrified, he bolted from the dark room.",
            "He was scared and so he ran fast out of the room that was dark.",
            "In a fast way, he ran scared from the dark room."
          ],
          answerIndex: 1,
          explanation: "'Terrified' replaces 'really very scared' and 'bolted' replaces 'quickly ran in a fast way' — every filler word is gone and the verbs do the work.",
          hintLadder: [
            "Find the version with no filler words (really, very, so, in a fast way).",
            "Look for one strong verb instead of 'ran quickly/fast'.",
            "It's the shortest one: 'Terrified, he bolted from the dark room.'"
          ]
        },
        {
          id: "g6.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Revise this bloated sentence to under 10 words while keeping its meaning, using stronger verbs and zero filler: 'I was just really very hungry so I quickly went and ate my lunch in a fast way.'",
          rubric: {
            level3: "Under 10 words, all filler removed, at least one strong verb, and the original meaning (being very hungry and eating fast) preserved.",
            level2: "Shorter and some filler cut, but still over 10 words or still leans on weak verbs.",
            level1: "Barely changed, still full of filler, or loses the meaning."
          },
          exemplar: "Starving, I devoured my lunch.",
          hintLadder: [
            "Delete just, really, very, so, and 'in a fast way'.",
            "Swap 'very hungry' for one word and 'ate fast' for one verb.",
            "Aim for a sentence you can say in one breath."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake Out the Clutter",
      prompt:
        "Stand and 'shake off' the filler: shake out your hands for 'really', your arms for 'very', your legs for 'just', then take one slow, clean breath. Out with the clutter!",
      scienceTieIn: "Brief bursts of movement clear mental fog and reset focus — your brain works better after your body moves, as the program's science explains.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one sentence you wrote recently that could lose half its words and gain half its punch? Rewrite it here.",
      badge: { id: "word-sculptor", name: "Word Sculptor", emoji: "✂️" },
      estimatedMinutes: 7
    }
  }
};
