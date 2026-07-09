// Grade 7 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 4.
// Topic: revising at Grade 7 depth — targeted revision (verbs, sentence variety,
// cutting filler, and revising for a specific effect on the reader).

export const winterG7ElaW7D4 = {
  id: "g7.winter.ela.w7.d4",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Revising your story — sentence variety, precise verbs, and revising for effect",
  topicTag: "revising-editing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.5", "CCSS.ELA-LITERACY.L.7.3.A"],
  hook: "Grade 7 revision isn't just fixing weak spots — it's revising ON PURPOSE for an effect: varying sentence length to control rhythm, cutting the words that dilute your best lines, and choosing verbs that carry emotion. Today you make deliberate revision choices, not random edits.",
  miniLesson: [
    "SENTENCE VARIETY controls rhythm and emphasis. A run of short sentences quickens pace and creates tension; a longer, flowing sentence slows it. A short sentence right after a long one lands like a punch. Vary length on purpose, not by accident.",
    "Revise for CONCISENESS: cut filler ('very,' 'really,' 'started to,' 'in order to,' redundant phrases) that dilutes strong writing. 'She began to slowly walk' becomes 'She trudged.' Every cut word makes the remaining words hit harder.",
    "The highest-level revision is revising FOR EFFECT: decide what you want the reader to feel in a passage, then change verbs, sentence length, and detail to produce that exact feeling — rather than editing sentence by sentence with no goal."
  ],
  workedExample: {
    prompt: "Revise this passage to build tension using sentence variety, stronger verbs, and cut filler: 'She was very scared and she started to slowly walk across the ice and she was worried that it would break and she kept going.'",
    steps: [
      "Cut filler and told feelings: remove 'very,' 'started to,' and 'she was scared/worried.'",
      "Replace weak verbs with vivid ones and SHOW the fear.",
      "Vary sentence length: build with a longer sentence, then hit with a short one.",
      "End on a short, tense beat to spike the tension."
    ],
    answer: "She eased onto the ice, testing each step, listening for the groan beneath her boots. Something cracked. She kept going."
  },
  items: [
    {
      id: "g7.winter.ela.w7.d4.q1",
      type: "multiple_choice",
      stem: "A writer wants to spike TENSION at the peak of a scene. Which SENTENCE-VARIETY move does this best?",
      choices: [
        "Writing one very long, flowing sentence packed with clauses",
        "Removing all punctuation so it runs together",
        "Using the exact same medium sentence length for every line",
        "Following a longer build-up sentence with a short, punchy one ('The ice held. Then it didn't.')"
      ],
      answerIndex: 3,
      explanation: "A short sentence right after a longer one lands hard and quickens the pace — an intentional variety move that spikes tension.",
      hintLadder: [
        "Tension often comes from a sudden SHORT sentence.",
        "Contrast a long build-up with a short jolt.",
        "'The ice held. Then it didn't.' spikes tension."
      ]
    },
    {
      id: "g7.winter.ela.w7.d4.q2",
      type: "multiple_choice",
      stem: "Which revision best improves the sentence by cutting FILLER while keeping the meaning?",
      choices: [
        "'She started to slowly begin walking' → 'She began to start walking slowly'",
        "'She started to slowly begin walking' → 'She trudged'",
        "'She trudged' → 'She really started to walk in a slow way'",
        "'She walked' → 'She was walking in order to move forward'"
      ],
      answerIndex: 1,
      explanation: "'Trudged' captures the whole slow, effortful action in one precise verb, cutting all the filler ('started to,' 'slowly,' 'begin').",
      hintLadder: [
        "The best revision gets SHORTER and stronger.",
        "Look for one vivid verb replacing a filler-filled phrase.",
        "'Trudged' replaces 'started to slowly begin walking.'"
      ],
      misconceptionsTargeted: ["longer-equals-better"]
    },
    {
      id: "g7.winter.ela.w7.d4.q3",
      type: "multiple_choice",
      stem: "What does it mean to revise a passage 'FOR EFFECT'?",
      choices: [
        "To fix every spelling and punctuation error first",
        "To make the passage as long as possible",
        "To decide what feeling you want the reader to have, then change verbs, sentence length, and detail to create it",
        "To replace every word with a fancier synonym"
      ],
      answerIndex: 2,
      explanation: "Revising for effect starts with a target feeling for the reader and shapes the writing choices to produce it — a purposeful, top-level revision strategy.",
      hintLadder: [
        "This kind of revision starts with a GOAL for the reader.",
        "It's about producing a specific FEELING, not just fixing errors.",
        "Choose the effect first, then revise to create it."
      ]
    },
    {
      id: "g7.winter.ela.w7.d4.q4",
      type: "short_answer",
      stem: "Revise this passage to build TENSION, using at least one strong verb swap, one filler cut, and deliberate sentence variety (mix a longer sentence with a short one): 'He was very cold and he started to walk across the frozen bridge and he was really nervous and he hoped it would not break.'",
      rubric: {
        level3: "Revision cuts filler, swaps in vivid verbs, SHOWS the feelings, AND uses deliberate sentence variety (a short sentence for impact) to build tension.",
        level2: "Improves verbs or cuts filler but is missing sentence variety, OR the tension is only weakly built.",
        level1: "Barely changes the passage, keeps filler and weak verbs, or ignores sentence variety."
      },
      exemplar: "He edged onto the frozen bridge, planting each numb foot and testing the boards before trusting them with his weight. The wood moaned. He froze.",
      hintLadder: [
        "Cut 'very,' 'really,' and 'started to.'",
        "Swap 'walk' and 'was nervous' for vivid verbs and shown fear.",
        "End with a short sentence to spike the tension."
      ]
    },
    {
      id: "g7.winter.ela.w7.d4.q5",
      type: "short_answer",
      stem: "Name TWO revision moves you'll use on your own frozen-world story, and for EACH explain the specific EFFECT it will have on the reader.",
      rubric: {
        level3: "Names two distinct revision moves (e.g., sentence variety, stronger verbs, cutting filler, show-don't-tell) AND explains the precise reader effect of each.",
        level2: "Names two moves but explains the reader effect of only one, or the explanations are vague.",
        level1: "Names fewer than two moves or gives no real explanation of effect."
      },
      exemplar: "First, I'll add a short sentence right after my longest one at the climax, so the sudden stop jolts the reader and spikes the tension. Second, I'll cut filler words like 'very' and 'really' from my scariest paragraph, so the strong words that remain hit harder and the fear feels sharper.",
      hintLadder: [
        "Pick two moves from today's lesson.",
        "For each, ask: what will the READER feel because of it?",
        "Explain the effect for both, not just the change."
      ]
    }
  ],
  reflectionPrompt: "Find your longest sentence in your frozen-world draft. Would a short sentence right after it make a moment hit harder? Try it, and note whether the rhythm improved.",
  misconceptionBank: [
    {
      id: "longer-equals-better",
      label: "Thinks longer, fancier sentences are better",
      description: "Believes adding words, clauses, or fancy synonyms improves writing, rather than cutting filler and varying sentence length for effect.",
      coachMove: "Ask: 'Does this word earn its place? Cut it and read again — did the sentence get stronger?' Contrast a bloated line with a tight one."
    },
    {
      id: "revising-equals-editing",
      label: "Thinks revising and editing are the same",
      description: "Believes 'revising' just means fixing spelling and punctuation, skipping the deeper work of rhythm, word choice, and effect.",
      coachMove: "Separate them: 'Editing fixes surface mistakes; revising re-shapes rhythm, verbs, and the reader's experience.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Long Sentence vs. Short Punch",
      prompt:
        "Two endings to a tense scene: (A) 'The ice was making a lot of noise and she was very worried that it might possibly break beneath her at any moment.' (B) 'The ice groaned under her. She ran.' Which builds more tension — and what two revision moves turned (A) into (B)?",
      answer: "(B) builds more tension. The writer cut filler ('a lot of,' 'very,' 'possibly,' 'at any moment') and used sentence variety — a short, punchy 'She ran.' — to spike the pace.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Revise-for-Effect Lab",
      challenge:
        "Take a paragraph from your frozen-world draft (or the practice paragraph below), choose ONE target effect (tension, dread, or relief), and revise it three ways — verbs, filler, and sentence variety — to hit that effect. Keep the before and after.",
      steps: [
        "Copy a paragraph (or use: 'It was very cold. The girl started to walk to the frozen lake. She was really scared. She slowly went across it and hoped it would not break.').",
        "Write your TARGET EFFECT at the top (e.g., 'I want the reader to feel dread').",
        "Circle weak verbs and filler; swap in vivid verbs and cut every unearned word.",
        "Rebuild the rhythm with sentence variety — at least one short sentence for impact — then read before and after aloud."
      ],
      deliverable: "A labeled before/after paragraph revised for one target effect, with stronger verbs, cut filler, and deliberate sentence variety.",
      choiceBoard: [
        "Do the before/after paragraph revision for your chosen effect.",
        "Make a 'filler hit-list' of 8 words/phrases you overuse, then rewrite a paragraph banning all 8.",
        "Record yourself reading the 'before' and 'after' aloud and explain the effect each change creates."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Which passage has been revised BEST for a stronger verb, cut filler, AND sentence variety that spikes tension?",
          choices: [
            "The wind clawed at his coat. His fingers went numb. He couldn't stop.",
            "The wind blew hard and he felt really cold and his fingers were becoming somewhat numb.",
            "The wind was very strong and he was really quite cold and he could not feel his fingers anymore at all.",
            "The wind was strong, so he was very, very cold, and it was a really bad situation to be in."
          ],
          answerIndex: 0,
          explanation: "It uses a vivid verb ('clawed'), cuts all filler, SHOWS the cold (numb fingers), and varies with short sentences to spike tension.",
          hintLadder: [
            "Look for vivid verbs and NO filler like 'very' or 'really.'",
            "Notice the short sentences building tension.",
            "'The wind clawed... His fingers went numb. He couldn't stop.' does all three."
          ]
        },
        {
          id: "g7.winter.ela.w7.d4.arena2",
          type: "short_answer",
          stem: "Revise this whole passage for stronger verbs, cut filler, and sentence variety, aiming for a feeling of RELIEF: 'He got to the cabin and he was very tired and it was really a nice feeling to finally be inside and warm.'",
          rubric: {
            level3: "Replaces weak verbs (got, was), cuts vague filler (very, really, nice), SHOWS the tiredness/relief, AND uses varied sentence length to land the relief.",
            level2: "Improves verbs or cuts filler but leaves some weak wording, or the relief is only weakly conveyed.",
            level1: "Barely changes the passage or keeps weak verbs and vague, told feelings."
          },
          exemplar: "He stumbled through the cabin door and sank onto the bench, legs shaking, done. Warmth wrapped around him like a blanket, and for the first time all day he let his shoulders drop.",
          hintLadder: [
            "Swap 'got' and 'was' for vivid verbs.",
            "Cut 'very,' 'really,' and 'nice.'",
            "Use a short sentence and a longer one to make the relief land."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Long Breath, Short Breath",
      prompt:
        "Match your breathing to sentence rhythm: take one long, slow inhale and exhale (your 'long sentence'), then three quick, sharp breaths (your 'short sentences'). Notice how the rhythm changes how you feel — then shake out your hands and say, 'My story controls the reader's pulse.'",
      scienceTieIn: "Varying your breathing rhythm shifts your heart rate and alertness — the same way varied sentence rhythm shifts a reader's tension and pace on the page.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is ONE revision you made today that most changed how a passage FEELS to read? Name the effect you were going for and whether you hit it.",
      badge: { id: "g7-winter-revision-strategist", name: "Revision Strategist", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
