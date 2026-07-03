// Grade 7 ELA/Writing — Winter Expedition, Week 7 (Winter Tales), Day 2.
// Topic: descriptive & sensory writing at Grade 7 depth — controlling MOOD
// through precise sensory detail, extended figurative language, and diction.

export const winterG7ElaW7D2 = {
  id: "g7.winter.ela.w7.d2",
  season: "winter",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 2,
  subject: "ELA/Writing",
  topic: "Descriptive & sensory writing — build mood with precise imagery and extended figures",
  topicTag: "sensory-description",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.3.D", "CCSS.ELA-LITERACY.L.7.5.A"],
  hook: "Sensory detail doesn't just describe a place — it controls how the reader FEELS about it. The same frozen lake can feel peaceful or menacing depending on the words you choose. Today you learn to steer mood with precise diction, extended metaphors, and imagery that carries emotion.",
  miniLesson: [
    "MOOD is the feeling a passage creates in the reader. You steer it with DICTION (word choice): 'the snow settled softly' feels calm; 'the snow smothered the road' feels threatening — same event, opposite mood, because of two verbs.",
    "An EXTENDED METAPHOR carries one comparison across several sentences ('The winter was a jailer: it locked the doors with ice, kept the sky gray as a cell wall, and let no one out'). It builds a richer, more controlled image than a single figure.",
    "Choose sensory details for CONNOTATION, not just accuracy. To make a scene feel eerie, pick details with unsettling associations (a groan of ice, breath that vanishes too fast); to make it feel safe, pick warm-connotation details (woodsmoke, a kettle's hiss)."
  ],
  workedExample: {
    prompt: "Describe the SAME frozen forest twice — once so it feels PEACEFUL, once so it feels MENACING — changing only diction and detail.",
    steps: [
      "List neutral facts: snow, pines, silence, cold air.",
      "For PEACEFUL, choose soft-connotation words and calming imagery.",
      "For MENACING, choose harsh-connotation words and threatening imagery.",
      "Add one figurative comparison to each that reinforces its mood."
    ],
    answer: "Peaceful: 'Snow rested on the pines like a hush, and the cold air was clean and still, as if the forest were sleeping.' Menacing: 'Snow choked the pines, and the cold air pressed against my throat while the forest waited, silent as something holding its breath.'"
  },
  items: [
    {
      id: "g7.winter.ela.w7.d2.q1",
      type: "multiple_choice",
      stem: "Two sentences describe the same snowfall. Which one uses DICTION to create a MENACING mood?",
      choices: [
        "Snow drifted down and settled gently over the quiet town.",
        "Snow smothered the town, burying the streets until nothing could move.",
        "Snow fell softly, dusting the rooftops in white.",
        "Snow floated down like feathers onto the calm square."
      ],
      answerIndex: 1,
      explanation: "'Smothered' and 'burying... nothing could move' carry threatening connotations, creating a menacing mood, while the others use soft, calming diction.",
      hintLadder: [
        "Which verbs sound harsh or threatening?",
        "Compare 'drifted/settled/floated' with 'smothered/burying.'",
        "'Smothered' and 'burying' feel dangerous."
      ],
      misconceptionsTargeted: ["detail-equals-more-adjectives"]
    },
    {
      id: "g7.winter.ela.w7.d2.q2",
      type: "multiple_choice",
      stem: "'The winter was a jailer that locked the doors with ice, hung gray bars across the sky, and let no one leave.' What technique is this?",
      choices: [
        "A single simile",
        "An extended metaphor",
        "Onomatopoeia",
        "Hyperbole with no comparison"
      ],
      answerIndex: 1,
      explanation: "One comparison (winter = jailer) is carried across multiple details (locked doors, gray bars, no escape), which makes it an extended metaphor.",
      hintLadder: [
        "Is the same comparison developed across several details?",
        "Winter is compared to a jailer in more than one way.",
        "A comparison sustained across a passage is an extended metaphor."
      ]
    },
    {
      id: "g7.winter.ela.w7.d2.q3",
      type: "multiple_choice",
      stem: "A writer wants a frozen cabin scene to feel SAFE and cozy. Which detail best fits that mood through its CONNOTATION?",
      choices: [
        "The wind screamed through a crack in the warped door.",
        "A kettle hissed on the stove and woodsmoke curled warm against the frosted glass.",
        "The floorboards groaned like something waking beneath them.",
        "Frost crept across the window like grasping fingers."
      ],
      answerIndex: 1,
      explanation: "The kettle and warm woodsmoke carry cozy, comforting connotations, matching a safe mood; the other details connote threat.",
      hintLadder: [
        "Which detail FEELS warm and comforting?",
        "Watch for words like 'screamed,' 'groaned,' 'grasping' — those feel threatening.",
        "The kettle and warm woodsmoke connote safety."
      ]
    },
    {
      id: "g7.winter.ela.w7.d2.q4",
      type: "short_answer",
      stem: "Describe the SAME frozen setting in TWO sentences that create OPPOSITE moods (for example peaceful vs. menacing). Change only your diction and details — keep the basic scene the same — and note which mood each creates.",
      rubric: {
        level3: "Two sentences describe the same scene but clearly create opposite moods through deliberate diction/detail choices, with the moods correctly identified.",
        level2: "Two sentences attempt opposite moods but one is weak, OR the moods are not clearly labeled/distinct.",
        level1: "The two sentences don't describe the same scene, or the mood contrast is unclear or absent."
      },
      exemplar: "Peaceful: The frozen pond lay smooth and silver under the moon, still as a held breath. Menacing: The frozen pond lay pale and blank under the moon, a lid clamped over something dark and waiting. The first feels calm; the second feels threatening.",
      hintLadder: [
        "Pick one scene and describe it twice.",
        "Swap only the connotation of your words and details.",
        "Label which mood each sentence creates."
      ]
    },
    {
      id: "g7.winter.ela.w7.d2.q5",
      type: "short_answer",
      stem: "Write an EXTENDED METAPHOR of two to three sentences describing a blizzard, carrying ONE comparison across several details. Then explain in a sentence why an extended metaphor can be more powerful than a single simile.",
      rubric: {
        level3: "Sustains one clear comparison across multiple details (a true extended metaphor) AND explains that developing one image builds a richer, more controlled effect than a lone comparison.",
        level2: "Writes a metaphor but it isn't clearly extended, OR the explanation of its power is vague.",
        level1: "No sustained comparison, or the explanation is missing or unrelated."
      },
      exemplar: "The blizzard was an army: its wind marched in ranks against the walls, its snow laid siege to every window, and by dawn it had taken the whole valley prisoner. An extended metaphor is more powerful than a single simile because it develops one vivid idea across the passage, so the image deepens instead of flashing by once.",
      hintLadder: [
        "Choose one thing to compare the blizzard to (an army, a beast, a jailer).",
        "Carry that same comparison through 2-3 details.",
        "Then explain why sustaining one image works better than one quick 'like' comparison."
      ]
    }
  ],
  reflectionPrompt: "Look at your frozen-world setting. What MOOD do you want readers to feel there — and name two specific words you could change to push the mood further in that direction.",
  misconceptionBank: [
    {
      id: "detail-equals-more-adjectives",
      label: "Confuses vivid writing with piling on adjectives",
      description: "Believes stronger description means stacking more adjectives, rather than choosing precise words and details with the right connotation.",
      coachMove: "Ask: 'Which ONE precise verb or detail creates the mood?' Show that 'smothered' beats 'very, very heavy, thick snow.'"
    },
    {
      id: "simile-metaphor-mixup",
      label: "Confuses similes and metaphors",
      description: "Cannot reliably tell a simile from a metaphor, often calling any comparison a simile.",
      coachMove: "Ask: 'Does it use LIKE or AS?' If yes, simile; if it says one thing IS another directly, metaphor."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Same Snow, Opposite Feeling",
      prompt:
        "Two sentences describe identical snowfall: (A) 'Snow settled softly over the sleeping town.' (B) 'Snow smothered the town until nothing could move.' Both are 'snow falling.' Which words make (B) feel dangerous, and what does that tell you about how diction controls mood?",
      answer: "'Smothered' and 'nothing could move' carry threatening connotations, so (B) feels dangerous while (A) feels calm. The same event can carry opposite moods depending on word choice — diction steers feeling.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Frozen Sensory Bank + Mood Switch",
      challenge:
        "Build a sensory word bank for your frozen setting sorted by CONNOTATION, then write the same scene twice in two opposite moods to prove you can steer how a reader feels.",
      steps: [
        "Draw five sense columns (SEE, HEAR, SMELL, TASTE, TOUCH) and fill each with vivid details.",
        "Beside each detail, tag it 'warm/safe' or 'cold/threatening' by its connotation.",
        "Write a 3-4 sentence paragraph of your setting in a PEACEFUL mood using safe-tagged details.",
        "Rewrite the same scene in a MENACING mood, swapping in threatening details and one extended metaphor."
      ],
      deliverable: "A connotation-tagged five-senses word bank plus two versions of one scene (peaceful and menacing), one using an extended metaphor.",
      choiceBoard: [
        "Make the tagged word bank and write both mood versions.",
        "Create a two-column 'mood switch' poster: the same scene described for calm vs. dread.",
        "Record a 30-second audio reading of both versions, using your voice to match each mood."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sensory Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.winter.ela.w7.d2.arena1",
          type: "multiple_choice",
          stem: "'The frost crept across the window like a thief, testing each corner, until it had stolen the last of the light.' Which BEST describes this?",
          choices: [
            "A single simile only, with no other technique",
            "An extended metaphor comparing frost to a thief, developed across the sentence with personification",
            "Onomatopoeia imitating the sound of frost",
            "Hyperbole with no comparison at all"
          ],
          answerIndex: 1,
          explanation: "The frost is compared to a thief and that comparison is developed (testing corners, stealing light) with human-like actions — an extended metaphor blended with personification.",
          hintLadder: [
            "Is one comparison carried across several actions?",
            "Notice the frost 'testing' and 'stealing' — human actions.",
            "It's an extended metaphor with personification."
          ]
        },
        {
          id: "g7.winter.ela.w7.d2.arena2",
          type: "short_answer",
          stem: "Rewrite this flat sentence TWICE — once to feel eerie, once to feel peaceful — using precise diction and one figure of speech each: 'The snow fell on the empty field.'",
          rubric: {
            level3: "Both versions clearly create their target mood through deliberate diction AND each contains a fitting figure of speech (simile, metaphor, or personification).",
            level2: "Both moods attempted but one is weak, or one version is missing its figure of speech.",
            level1: "Little mood contrast, or no figurative language, or barely changed from the original."
          },
          exemplar: "Eerie: Snow sifted down onto the empty field like ash from a fire no one had lit, settling over the dark furrows as if hiding them. Peaceful: Snow drifted onto the empty field like a slow, soft blessing, tucking the quiet earth beneath a white quilt.",
          hintLadder: [
            "Choose eerie diction (ash, hiding) vs. peaceful diction (blessing, quilt).",
            "Add one simile, metaphor, or personification to each.",
            "Make the two moods clearly different."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Two-Mood Snow Pause",
      prompt:
        "Close your eyes and picture your frozen setting. First imagine it PEACEFUL — breathe slowly and notice one calm detail. Then imagine it MENACING — notice how the same place feels different. Open your eyes and shake out your hands, remembering YOU control that shift with words.",
      scienceTieIn: "Deliberately shifting how you interpret the same image trains cognitive flexibility, the mental skill behind revising a scene's mood on the page.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Which mood is hardest for you to create in writing — dread, wonder, coziness, or something else? Write one sentence in that mood about your frozen world and note which word does the most work.",
      badge: { id: "g7-winter-mood-weaver", name: "Mood Weaver", emoji: "❄️" },
      estimatedMinutes: 7
    }
  }
};
