// Grade 7 ELA/Writing — Summer Story Builders, Week 3, Day 4.
// Topic: revision — transitions, sentence variety, show-don't-tell, and
// precise diction. Independent polishing of a draft.

export const summerG7ElaW3D4 = {
  id: "g7.summer.ela.w3.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Revision — transitions, sentence variety, show-don't-tell, precise diction",
  topicTag: "revision-craft",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.5", "CCSS.ELA-LITERACY.W.7.3.C"],
  hook: "A first draft is you telling yourself the story; revision is you telling it to a reader. Today you become your own editor, wielding four sharp tools — transitions, sentence variety, show-don't-tell, and precise diction — to turn a rough draft into a story that grips.",
  miniLesson: [
    "Transitions are the bridges that carry a reader between moments and ideas — words and phrases like 'meanwhile,' 'without warning,' 'hours later,' and 'even so.' Without them, scenes jerk; with them, time and cause flow smoothly.",
    "Sentence variety keeps prose alive. A string of same-length sentences lulls the reader; mixing short punchy lines with longer flowing ones controls pace. A three-word sentence can hit like a slammed door.",
    "Show-don't-tell replaces flat statements ('he was terrified') with evidence the reader can picture ('his hands shook so hard the map blurred'). And precise diction swaps weak, general words ('walked,' 'nice,' 'big') for exact ones ('crept,' 'generous,' 'towering') that carry more meaning per word."
  ],
  workedExample: {
    prompt: "Revise this weak passage: 'He went into the room. He was scared. It was bad.'",
    steps: [
      "Add a transition to connect the moment to what came before: 'The moment the door clicked shut behind him...'",
      "Apply show-don't-tell to 'he was scared': show the physical signs instead of naming fear.",
      "Vary the sentence lengths and swap 'went' and 'bad' for precise words.",
      "Read it aloud to check the rhythm and flow."
    ],
    answer: "The moment the door clicked shut behind him, Marcus crept into the darkened room. His breath came in shallow gulps; every shadow seemed to lean toward him. Something was wrong here. He could feel it in his teeth."
  },
  items: [
    {
      id: "g7.summer.ela.w3.d4.q1",
      type: "multiple_choice",
      stem: "Which sentence best uses SHOW-DON'T-TELL to convey that a character is exhausted?",
      choices: [
        "Lena was really, really tired.",
        "Lena felt very exhausted after the long day.",
        "Lena's legs turned to lead, and it took three tries to lift her arm from the desk.",
        "Lena was tired, which was not good."
      ],
      answerIndex: 2,
      explanation: "It shows exhaustion through vivid physical evidence rather than naming the feeling; the others simply tell the reader 'tired.'",
      hintLadder: [
        "Which one lets you SEE the exhaustion?",
        "Look for physical evidence instead of the word 'tired.'",
        "The 'legs turned to lead' version shows, doesn't tell."
      ]
    },
    {
      id: "g7.summer.ela.w3.d4.q2",
      type: "multiple_choice",
      stem: "A writer has four medium-length sentences in a row and the scene feels flat. The BEST revision for pacing is to:",
      choices: [
        "Combine them all into one very long sentence",
        "Break the tension with a short, punchy sentence to vary the rhythm",
        "Delete the whole paragraph",
        "Add more medium-length sentences"
      ],
      answerIndex: 1,
      explanation: "Sentence variety — dropping in a short line among longer ones — controls pace and revives flat prose.",
      hintLadder: [
        "The problem is that every sentence is the SAME length.",
        "What kind of sentence would break the pattern and add punch?",
        "A short, sharp sentence varies the rhythm."
      ],
      misconceptionsTargeted: ["revision-equals-recopy"]
    },
    {
      id: "g7.summer.ela.w3.d4.q3",
      type: "multiple_choice",
      stem: "Which word is the MOST precise replacement for 'walked' in: 'She ___ across the ice, terrified of slipping'?",
      choices: [
        "moved",
        "went",
        "inched",
        "traveled"
      ],
      answerIndex: 2,
      explanation: "'Inched' precisely captures slow, careful, fearful movement; the others are vague and lose the meaning that fear adds.",
      hintLadder: [
        "The character is terrified of slipping — how would she move?",
        "Which word shows slow, careful motion?",
        "'Inched' packs the fear and caution into one word."
      ]
    },
    {
      id: "g7.summer.ela.w3.d4.q4",
      type: "short_answer",
      stem: "Revise this weak passage into stronger prose: 'The kids walked to the cave. They were nervous. It was dark. They went inside.' Improve transitions, sentence variety, show-don't-tell, and diction.",
      rubric: {
        level3: "Revision clearly improves at least three of the four tools (transitions, variety, show-don't-tell, precise diction) while keeping the meaning, and reads smoothly.",
        level2: "Improves one or two tools but the passage is still choppy or still tells rather than shows.",
        level1: "Barely changes the original or introduces errors without real improvement."
      },
      exemplar: "As the trail narrowed, the three of us slowed to a crouch. Nobody spoke. The cave mouth breathed cold, damp air over us, and my flashlight swallowed only a few feet of the blackness before it gave up. Still, we stepped inside.",
      hintLadder: [
        "Add a transition to connect the walk to going inside.",
        "Replace 'nervous' and 'dark' with things the reader can picture.",
        "Vary your sentence lengths and swap 'walked'/'went' for exact verbs."
      ]
    },
    {
      id: "g7.summer.ela.w3.d4.q5",
      type: "short_answer",
      stem: "Explain the difference between EDITING (fixing surface errors) and REVISION (reshaping the writing), and give one example of a revision move you'd make on your own story draft.",
      rubric: {
        level3: "Clearly distinguishes editing (surface fixes like spelling/punctuation) from revision (deeper changes to content, structure, or word choice) AND names a specific, appropriate revision move.",
        level2: "Distinguishes them roughly, or the example is vague or is actually an editing move.",
        level1: "Confuses the two or gives no real example."
      },
      exemplar: "Editing fixes surface things like spelling, commas, and typos. Revision changes the writing itself — its structure, clarity, or impact. On my draft I'd revise by cutting a flat 'he was brave' line and showing his courage through an action instead.",
      hintLadder: [
        "Editing is about correctness; revision is about improvement.",
        "One works on the surface; the other reshapes the writing.",
        "For your example, pick a deeper change, not a comma fix."
      ]
    }
  ],
  reflectionPrompt: "Reread your own draft aloud. Where did YOU stumble or get bored? Mark two spots to revise tomorrow — the places a reader would feel the same bump.",
  misconceptionBank: [
    {
      id: "revision-equals-recopy",
      label: "Thinks revising means recopying more neatly",
      description: "Believes revision is just fixing spelling and writing a clean copy, rather than reshaping content, structure, and word choice.",
      coachMove: "Separate the two: 'Editing fixes typos; revision changes the writing itself. Show me one sentence you'll re-SHAPE, not just re-spell.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Spot the Weak Word",
      prompt:
        "In the sentence 'The big dog went down the road in a nice way,' three words are lazy and vague. Which three, and what precise words could replace them?",
      answer:
        "'Big,' 'went,' and 'nice' are the vague words. Precise swaps might be 'enormous,' 'trotted,' and 'cheerful' — e.g., 'The enormous dog trotted cheerfully down the road.' Precise diction carries more meaning per word.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Revision Workshop",
      challenge:
        "Run your own story draft through a four-tool revision pass. Take one paragraph you've written this week and rebuild it using transitions, sentence variety, show-don't-tell, and precise diction.",
      steps: [
        "Choose one weak paragraph from your draft and copy it as your 'before.'",
        "Mark every place you TELL a feeling and rewrite it to SHOW instead.",
        "Add or improve one transition, vary at least two sentence lengths, and swap three vague words for precise ones.",
        "Write the polished 'after' and jot a one-line note on which change helped most."
      ],
      deliverable: "A before-and-after revision of one paragraph, plus a note naming the most powerful change you made.",
      choiceBoard: [
        "Present the before/after side by side with your edits highlighted.",
        "Record yourself reading the before and after aloud to hear the difference in rhythm.",
        "Trade drafts with a partner and give each other one 'glow' and one 'grow' revision suggestion."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Master Reviser Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w3.d4.arena1",
          type: "multiple_choice",
          stem: "Which transition best connects these two sentences? 'The map showed the bridge was out. ___ they had already crossed the river hours ago.'",
          choices: [
            "For example,",
            "Fortunately,",
            "In conclusion,",
            "Similarly,"
          ],
          answerIndex: 1,
          explanation: "'Fortunately' signals the lucky relief that they'd already crossed — it fits the cause-and-effect relief. The others signal example, conclusion, or comparison, which don't fit.",
          hintLadder: [
            "What is the RELATIONSHIP between the two facts?",
            "The second fact is a relief given the first.",
            "Pick the transition that signals good luck or relief."
          ]
        },
        {
          id: "g7.summer.ela.w3.d4.arena2",
          type: "short_answer",
          stem: "Rewrite this told sentence using show-don't-tell AND at least one precise verb: 'The boy was angry and left the room.'",
          rubric: {
            level3: "Shows anger through physical/behavioral evidence (no word like 'angry') AND uses a precise verb in place of 'left.'",
            level2: "Shows anger OR uses a precise verb but not both, or the showing is weak.",
            level1: "Still tells the emotion or keeps vague verbs."
          },
          exemplar: "The boy's jaw clenched, he slammed his book shut, and he stormed out, the door cracking against the wall behind him.",
          hintLadder: [
            "What does an angry body DO — jaw, fists, breathing?",
            "Replace 'left' with an exact verb like 'stormed' or 'bolted.'",
            "Never use the word 'angry.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Editor's Eye Rest",
      prompt:
        "Close your draft and your eyes. Roll your shoulders back five times, then look at the farthest thing you can see for twenty slow seconds to rest your close-up 'editor's eyes.' Take three deep breaths.",
      scienceTieIn: "Shifting your gaze to a distant point relaxes the eye muscles strained by close reading, and a short break helps you return to your draft with fresh, more critical eyes.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which of the four revision tools — transitions, sentence variety, show-don't-tell, or precise diction — made the biggest difference in your writing this week, and why? Name the one you want to keep practicing.",
      badge: { id: "g7-master-reviser", name: "Master Reviser", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
