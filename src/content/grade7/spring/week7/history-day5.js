// Grade 7 History/Civics — Spring Expedition, Week 7 (Voices for the Earth),
// Day 5. Topic: analyzing the history of conservation — how environmental
// voices, laws, and movements built on one another over time, and how citizen
// action turned into lasting policy.

export const springG7HistoryW7D5 = {
  id: "g7.spring.hist.w7.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Analyzing conservation history: how voices, laws, and movements built on one another",
  topicTag: "conservation-history",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14", "C3.D2.Civ.14"],
  hook: "Every voice for the Earth today stands on more than a century of people who spoke up — and, crucially, on the LAWS and movements their voices created. In Grade 7 you do more than meet these figures: you analyze how one action led to the next, how public pressure became policy, and why some campaigns changed history while others faded. Today you trace the machinery of change itself.",
  miniLesson: [
    "Conservation history is a CHAIN of cause and effect, not a list of heroes. John Muir's writing in the late 1800s helped persuade leaders to protect wild land; that idea grew into the National Park system and, decades later, into the National Park Service (1916) that manages it. One voice seeded an institution.",
    "Individual voices often turned into laws only after public pressure built. Rachel Carson's 1962 book 'Silent Spring' exposed the dangers of pesticides like DDT; the outcry it sparked helped lead to the first Earth Day (1970), the creation of the Environmental Protection Agency (1970), and eventually a U.S. ban on DDT (1972). Analyze the pattern: evidence → public awareness → organized movement → policy.",
    "Movements succeed when they convert emotion into organized, sustained action. The first Earth Day mobilized about 20 million Americans — but its lasting power came from turning that one day into ongoing pressure that produced durable laws like the Clean Air Act and Clean Water Act. Comparing what LASTED versus what faded reveals why some voices changed history."
  ],
  workedExample: {
    prompt: "Analyze the chain of cause and effect that connects Rachel Carson's writing to a real change in law.",
    steps: [
      "Start with the voice and its evidence: Carson's 'Silent Spring' (1962) used scientific evidence to show pesticides like DDT were killing wildlife.",
      "Trace the effect on the public: the book alarmed millions and made the environment a national conversation.",
      "Trace the effect on organizing and institutions: that awareness fed the first Earth Day (1970) and the creation of the EPA (1970).",
      "Reach the policy outcome: the sustained pressure helped lead to the U.S. ban on DDT in 1972 — evidence became awareness became a movement became law."
    ],
    answer: "Carson's evidence-based writing raised public alarm, which fueled Earth Day and the new EPA, which in turn produced the 1972 DDT ban — a chain from one voice to lasting law."
  },
  items: [
    {
      id: "g7.spring.hist.w7.d5.q1",
      type: "multiple_choice",
      stem: "How does an INDIVIDUAL voice like John Muir's most often lead to LASTING conservation change?",
      choices: [
        "By personally guarding the land alone forever.",
        "By persuading the public and leaders, so the idea grows into institutions and laws — like national parks and the National Park Service — that outlast the individual.",
        "By keeping the idea secret so no one can argue with it.",
        "By waiting for nature to protect itself."
      ],
      answerIndex: 1,
      explanation: "A single voice becomes lasting change when it persuades others and gets built into durable institutions and laws — Muir's writing helped seed the national parks and the Park Service that manage them.",
      hintLadder: [
        "Can one person protect land forever on their own?",
        "What makes a good idea outlast the person who had it?",
        "Voices become lasting through institutions and laws."
      ]
    },
    {
      id: "g7.spring.hist.w7.d5.q2",
      type: "multiple_choice",
      stem: "Rachel Carson's 'Silent Spring' (1962), the first Earth Day (1970), the EPA (1970), and the DDT ban (1972) are best understood as:",
      choices: [
        "Four unrelated events that happened to occur near each other.",
        "A chain of cause and effect: evidence raised public awareness, which built a movement, which produced new agencies and laws.",
        "Events that all happened in the same single year.",
        "A list of national parks."
      ],
      answerIndex: 1,
      explanation: "These events form a causal chain — Carson's evidence sparked awareness, awareness built the Earth Day movement, and the pressure produced the EPA and the DDT ban. Analyzing the links is the Grade 7 task.",
      hintLadder: [
        "Are these events random, or does one lead to the next?",
        "Trace how the book fed the movement and the movement fed the laws.",
        "They form a cause-and-effect chain from evidence to policy."
      ],
      misconceptionsTargeted: ["events-are-random"]
    },
    {
      id: "g7.spring.hist.w7.d5.q3",
      type: "multiple_choice",
      stem: "The first Earth Day mobilized about 20 million people. What best explains why it produced LASTING change rather than fading after one day?",
      choices: [
        "It was simply the most fun holiday.",
        "It converted a burst of public emotion into sustained, organized pressure that helped produce durable laws like the Clean Air and Clean Water Acts.",
        "It banned all factories immediately and forever.",
        "It was run by a single powerful senator with no public involvement."
      ],
      answerIndex: 1,
      explanation: "Earth Day lasted because the one-day energy was turned into ongoing, organized pressure that produced enduring laws — the mark of a movement that changes history rather than a moment that fades.",
      hintLadder: [
        "Why do some big events fade while others change laws?",
        "What did organizers do with the energy AFTER the one day?",
        "They turned emotion into sustained pressure and durable laws."
      ]
    },
    {
      id: "g7.spring.hist.w7.d5.q4",
      type: "short_answer",
      stem: "Choose ONE environmental voice or movement from history. Trace the CHAIN of cause and effect from what they did to a real, lasting change (a law, an agency, or a protected place), with at least two links.",
      rubric: {
        level3: "Names a real voice or movement AND traces a chain of at least two causal links ending in a concrete, lasting change (law, agency, or protected place), accurately.",
        level2: "Names a real voice or movement and describes some effect, but the chain has only one link or a link is thin or partly inaccurate.",
        level1: "Names nothing specific or gives no real cause-and-effect chain."
      },
      exemplar: "John Muir wrote vividly about the Sierra wilderness, which persuaded leaders and the public that wild land was worth protecting. That pressure helped lead to the protection of Yosemite, and the growing park idea led to the creation of the National Park Service in 1916, which still protects those lands today.",
      hintLadder: [
        "Pick one voice or movement you studied.",
        "Ask 'what did that lead to?' and then 'what did THAT lead to?'",
        "End the chain at a concrete law, agency, or protected place."
      ]
    },
    {
      id: "g7.spring.hist.w7.d5.q5",
      type: "short_answer",
      stem: "Compare how TWO different methods from conservation history — for example evidence-based writing (Carson) and mass mobilization (Earth Day) — created change. Which method is most useful for YOUR persuasive piece this week, and why?",
      rubric: {
        level3: "Accurately compares two historical methods (how each worked to create change) AND connects one to the student's own piece with specific, well-reasoned justification.",
        level2: "Compares the two methods but the comparison or the personal connection is vague or one-sided.",
        level1: "Describes only one method or makes no real connection to the student's work."
      },
      exemplar: "Carson used careful evidence in writing to change minds one reader at a time, proving the danger was real; Earth Day used mass numbers to show leaders that millions demanded action. For my piece on plastic in our creek, evidence-based writing fits best because I am persuading readers with facts, the way Carson did, though I could also organize a clean-up to add movement-style pressure.",
      hintLadder: [
        "How did each method actually move people or leaders?",
        "One works through evidence and readers; one works through numbers and pressure.",
        "Match the method that fits what your own piece is trying to do."
      ]
    }
  ],
  reflectionPrompt: "The laws that protect the air, water, and wild places today began as citizens' voices that refused to fade. Which link in the chain — the evidence, the movement, or the law — do you think matters most, and where would your own voice fit in?",
  misconceptionBank: [
    {
      id: "events-are-random",
      label: "Sees historical milestones as unconnected events",
      description: "Treats 'Silent Spring,' Earth Day, the EPA, and environmental laws as a random list of dates rather than a connected chain of cause and effect.",
      coachMove: "Draw the arrows: 'What did the book cause? What did the outcry cause? Connect each event to the next until you reach a law.'"
    },
    {
      id: "one-voice-is-enough",
      label: "Thinks a single voice alone changes law",
      description: "Believes one famous person's speech or book directly becomes a law, skipping the public pressure and organizing that actually turns a voice into policy.",
      coachMove: "Add the middle steps: 'A voice raises awareness, awareness builds a movement, and a movement pressures leaders into law — what happened between the book and the ban?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "From Book to Ban",
      prompt:
        "In 1962 a scientist named Rachel Carson published a book about a pesticide poisoning wildlife. Ten years later, in 1972, the United States banned that pesticide (DDT). What do you think had to happen in those ten years to turn one book into a national law?",
      answer: "The book alarmed millions and made the environment a national issue; that awareness fueled the first Earth Day (1970) and the new EPA (1970), and the sustained public pressure finally produced the 1972 DDT ban. A voice became awareness, then a movement, then law.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Chain-of-Change Timeline",
      challenge:
        "Turn conservation history into a chain, not a list. Build a timeline for one environmental cause that shows how a voice became a movement became a law — drawing the arrows of cause and effect between each milestone.",
      steps: [
        "Choose a cause and its key milestones (for example: 'Silent Spring' → Earth Day → EPA → DDT ban).",
        "Place the milestones in order with dates.",
        "Draw an arrow between each pair and label WHAT that step caused in the next.",
        "Add a final arrow pointing to today — where a young voice like yours could add the next link."
      ],
      deliverable: "A cause-and-effect timeline showing how one environmental voice led, link by link, to a lasting law or institution, with labeled arrows.",
      choiceBoard: [
        "Draw a horizontal timeline with labeled cause-and-effect arrows.",
        "Build a digital slide sequence where each slide causes the next.",
        "Create a 'domino' illustration where each milestone knocks over the next."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Conservation History Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.hist.w7.d5.arena1",
          type: "multiple_choice",
          stem: "Put these milestones in correct time order (earliest first): (1) the EPA is created in 1970, (2) Yellowstone becomes the first national park in 1872, (3) the National Park Service is founded in 1916, (4) the U.S. bans DDT in 1972.",
          choices: [
            "2 → 3 → 1 → 4",
            "1 → 2 → 3 → 4",
            "2 → 1 → 3 → 4",
            "3 → 2 → 4 → 1"
          ],
          answerIndex: 0,
          explanation: "Order by year: Yellowstone (1872) → National Park Service (1916) → EPA (1970) → DDT ban (1972), which is 2 → 3 → 1 → 4.",
          hintLadder: [
            "List the years: 1872, 1916, 1970, 1972.",
            "The 1800s event comes first; 1970 comes before 1972.",
            "Order: 1872 → 1916 → 1970 → 1972."
          ]
        },
        {
          id: "g7.spring.hist.w7.d5.arena2",
          type: "short_answer",
          stem: "Some people believe a single famous book or speech directly 'becomes' a law. Using conservation history, explain the STEPS that actually connect a powerful voice to a real law, and why those in-between steps matter.",
          rubric: {
            level3: "Explains a realistic multi-step path (voice/evidence → public awareness → organized movement/pressure → policy) with a real example AND explains why the middle steps (awareness, organizing) are necessary.",
            level2: "Describes some steps but skips a key link or does not explain why the middle steps matter.",
            level1: "Says a voice becomes law directly, or gives no real steps."
          },
          exemplar: "A voice like Carson's does not become law by itself. First her evidence raised public awareness; then that awareness built a movement, seen in Earth Day and the new EPA; then the sustained pressure pushed leaders to pass the DDT ban. The middle steps matter because leaders act on organized public pressure, not on a book alone.",
          hintLadder: [
            "Does a book pass a law all by itself?",
            "List what has to happen between the voice and the law.",
            "Explain why awareness and organizing are the necessary middle links."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Links in the Chain",
      prompt:
        "Stand tall and imagine yourself as the newest link in a long chain of Earth defenders. Breathe in for 4 counts as you clasp your hands and raise them like a link joining the chain, hold for 2, and lower slowly for 4. Repeat 4 times, feeling connected to those before you and ready to hold your place.",
      scienceTieIn: "Slow, controlled breathing with gentle, deliberate movement steadies the nervous system and sharpens focus, helping you feel grounded and connected to a larger purpose.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "The laws protecting our air, water, and wild places began as citizens' voices that refused to fade. Trace, in your own words, the chain from one voice you admire to a lasting change — then write where YOUR link in that chain could go next.",
      badge: { id: "g7-spring-conservation-analyst", name: "Conservation Historian Analyst", emoji: "🌲" },
      estimatedMinutes: 7
    }
  }
};
