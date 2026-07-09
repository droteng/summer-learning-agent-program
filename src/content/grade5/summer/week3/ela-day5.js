// Grade 5 Summer ELA / Writing — Week 3 (Story Builders), Day 5.
// Grade-5 counterpart of g6.ela.w3.d5 (revising for clarity), pitched down:
// simpler examples, vocab support, step-by-step revision moves.

export const summerG5ElaW3D5 = {
  id: "g5.summer.ela.w3.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Revising for clarity",
  topicTag: "revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.5", "CCSS.ELA-LITERACY.L.5.3"],
  hook: "First drafts are for getting words down. Revising is where your writing gets strong. Today you revise one sentence three ways.",
  keyTerms: [
    { term: "Filler word", definition: "A word like really, very, or just that adds length but not much meaning." },
    { term: "Strong verb", definition: "One vivid action word, like sprinted, that replaces a weak verb plus an adverb." },
    { term: "Revise", definition: "To change writing to make it clearer and stronger." }
  ],
  miniLesson: [
    "Cut filler: words like really, very, just, and so usually add length, not meaning.",
    "Use strong verbs: walked quickly can become hurried. One strong verb beats two weak words.",
    "Mix short and long sentences. Two short sentences punch. A longer one flows. Mixing them on purpose keeps the reader interested."
  ],
  workedExample: {
    prompt: "Revise this: I really, really wanted to go to the very big concert that was so loud.",
    steps: [
      "Cut filler: really, really and very and so all add nothing.",
      "Use a stronger verb: wanted to go can become craved.",
      "Pick the best detail: big and loud can become thunderous.",
      "Result: I craved the thunderous concert."
    ],
    answer: "I craved the thunderous concert. -- 5 words doing the work of 13."
  },
  items: [
    {
      id: "g5.summer.ela.w3.d5.q1",
      type: "multiple_choice",
      stem: "Which word is filler that you should usually cut?",
      choices: ["really", "because", "however", "therefore"],
      answerIndex: 0,
      explanation: "Really rarely adds meaning. The other three connect or explain ideas.",
      hintLadder: [
        "Which option does not connect or explain anything?",
        "Filler words add length, not meaning.",
        "Really is the filler."
      ]
    },
    {
      id: "g5.summer.ela.w3.d5.q2",
      type: "multiple_choice",
      stem: "Which is the tightest version of: She walked very, very quickly to the door?",
      choices: [
        "She walked very, very quickly to the door.",
        "She walked quickly to the door.",
        "She hurried to the door.",
        "She moved with great speed to the door."
      ],
      answerIndex: 2,
      explanation: "Hurried replaces walked very, very quickly with one strong verb.",
      hintLadder: [
        "Look for the version with the strongest single verb.",
        "Cut the extra words when a stronger verb can do the job.",
        "Hurried is the win."
      ],
      misconceptionsTargeted: ["adverb-clutter"]
    },
    {
      id: "g5.summer.ela.w3.d5.q3",
      type: "short_answer",
      stem: "Take this weak verb phrase and rewrite it with ONE strong verb: he looked at the food in a hungry way. Then explain in a few words why your verb is stronger.",
      rubric: {
        level3: "Replaces the phrase with one vivid verb (like eyed, stared, or drooled over) and gives a clear reason it is stronger (fewer words, paints a picture).",
        level2: "Uses a stronger verb but the reason is missing or unclear, or keeps some extra words.",
        level1: "Just repeats the phrase or uses another weak verb plus an -ly word."
      },
      exemplar: "He eyed the food. It is stronger because one verb paints the whole picture with no extra words.",
      hintLadder: [
        "Look for a single verb that means looked in a hungry way.",
        "Try eyed, stared, or drooled over.",
        "One strong verb beats a weak verb plus extra words."
      ]
    },
    {
      id: "g5.summer.ela.w3.d5.q4",
      type: "multiple_choice",
      stem: "Which sentence has the strongest verb?",
      choices: [
        "He went down the stairs quickly.",
        "He bolted down the stairs.",
        "He made his way down the stairs in a fast way.",
        "He used the stairs to get downstairs."
      ],
      answerIndex: 1,
      explanation: "Bolted is one clear, vivid verb. The others use weak verbs propped up by extra words.",
      hintLadder: [
        "Find the version with no extra -ly word.",
        "Pick the verb that shows the action all by itself.",
        "Bolted wins."
      ]
    },
    {
      id: "g5.summer.ela.w3.d5.q5",
      type: "short_answer",
      stem: "Revise this draft sentence to make it shorter and stronger: I was really very nervous and so I started to walk to the door in a slow way.",
      rubric: {
        level3: "Cuts the filler, uses a stronger verb, and makes a clearly tighter sentence (under 12 words) that keeps the meaning.",
        level2: "Cuts some filler but keeps weak verbs or stays nearly as long.",
        level1: "Just repeats the original or makes it longer."
      },
      exemplar: "Nervous, I crept toward the door.",
      hintLadder: [
        "Cut really, very, and and so.",
        "Put nervous and walk slowly into one picture.",
        "Try crept, shuffled, or edged."
      ]
    }
  ],
  reflectionPrompt: "Today you revised. What is a sentence you wrote lately that could lose half its words and still say what you mean?",
  misconceptionBank: [
    {
      id: "adverb-clutter",
      label: "Uses extra -ly words instead of a stronger verb",
      description: "Writes walked very quickly instead of hurried or sprinted.",
      coachMove: "Ask: is there one verb that means this whole phrase? If yes, use it."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Trim or Keep?",
      prompt: "Would you rather read She quickly and rapidly ran very fast down the street, or She sprinted down the street? Which words in the long one are doing NO real work?",
      answer: "The second is stronger. Quickly, rapidly, and very fast all repeat the same idea -- one strong verb (sprinted) replaces all of them.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Word Diet Challenge",
      challenge: "Take a chunky 4-sentence paragraph (write a stuffed one on purpose first, or use an old draft) and revise it three ways: cut every filler word, swap weak verbs for strong ones, and mix your sentence lengths.",
      steps: [
        "Write or grab a wordy 4-sentence paragraph and count its words.",
        "Cross out all filler: really, very, just, so, that, totally.",
        "Circle weak verbs (walked, went, looked) and replace each with one vivid verb.",
        "Move things around so at least one sentence is short and punchy -- then count the words again."
      ],
      deliverable: "A before-and-after paragraph with the word count shrunk and the verbs sharpened.",
      choiceBoard: [
        "Show the before and after paragraph with word counts.",
        "Make a most-wanted poster of three filler words you banned.",
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
          id: "g5.summer.ela.w3.d5.arena1",
          type: "multiple_choice",
          stem: "Which is the tightest, strongest revision of: He was really very scared and so he quickly ran in a fast way out of the dark room?",
          choices: [
            "He was very scared and ran quickly out of the dark room.",
            "In a fast way, he ran scared from the dark room.",
            "He was scared and so he ran fast out of the room that was dark.",
            "Terrified, he bolted from the dark room."
          ],
          answerIndex: 3,
          explanation: "Terrified replaces really very scared and bolted replaces quickly ran in a fast way. Every filler word is gone and the verbs do the work.",
          hintLadder: [
            "Find the version with no filler words (really, very, so, in a fast way).",
            "Look for one strong verb instead of ran quickly or ran fast.",
            "It is the shortest one: Terrified, he bolted from the dark room."
          ]
        },
        {
          id: "g5.summer.ela.w3.d5.arena2",
          type: "short_answer",
          stem: "Revise this bloated sentence to under 10 words while keeping its meaning, using a stronger verb and zero filler: I was just really very hungry so I quickly went and ate my lunch in a fast way.",
          rubric: {
            level3: "Under 10 words, all filler removed, at least one strong verb, and the meaning (being very hungry and eating fast) is kept.",
            level2: "Shorter and some filler cut, but still over 10 words or still leans on weak verbs.",
            level1: "Barely changed, still full of filler, or loses the meaning."
          },
          exemplar: "Starving, I devoured my lunch.",
          hintLadder: [
            "Delete just, really, very, so, and in a fast way.",
            "Swap very hungry for one word and ate fast for one verb.",
            "Aim for a sentence you can say in one breath."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake Out the Clutter",
      prompt: "Stand and shake off the filler: shake your hands for really, your arms for very, your legs for just, then take one slow, clean breath. Out with the clutter!",
      scienceTieIn: "Short bursts of movement clear mental fog and reset focus -- your brain works better after your body moves, as the program's science explains.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt: "What is one sentence you wrote lately that could lose half its words and gain half its punch? Rewrite it here.",
      badge: { id: "g5-summer-word-sculptor", name: "Word Sculptor", emoji: "✂️" },
      estimatedMinutes: 7
    }
  }
};
