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
  estimatedMinutes: 18,
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
  ]
};
