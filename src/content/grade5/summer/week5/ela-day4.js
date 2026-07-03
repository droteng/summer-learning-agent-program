// Grade 5 Summer ELA/Writing — Week 5 (Earth and Inventions), Day 4.
// Grade-5 counterpart of g6.ela.w5.d4 (research writing: finding and citing
// reliable sources), pitched down one level: shorter passages, simpler examples,
// vocab support, and a sentence frame for the writing item.

export const summerG5ElaW5D4 = {
  id: "g5.summer.ela.w5.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Research writing",
  topicTag: "research-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.7", "CCSS.ELA-LITERACY.W.5.8"],
  hook: "Inventors and writers both have to prove their facts! Today you learn how to tell a trustworthy source from a shaky one, and how to write down where your fact came from.",
  keyTerms: [
    { term: "Source", definition: "Where a fact or piece of information comes from, like a book, a website, or a person." },
    { term: "Reliable", definition: "A source you can trust because you can check who made it and where the facts came from." },
    { term: "Citation", definition: "A short note that tells who made a source, what it is called, and when it was made." }
  ],
  miniLesson: [
    "A source is where your fact comes from. It could be a book, a website, a person, or a photo.",
    "A reliable source can be trusted. You can find out who made it, and you can check the facts. A science agency page is reliable; a stranger's comment with no name is not.",
    "When you use a fact, write a citation so your reader can find the same source. A citation names WHO made it, WHAT it is called, and WHEN it was made."
  ],
  workedExample: {
    prompt:
      "You want to write: \"The moon has no air.\" Which source should you trust to back up this fact?",
    steps: [
      "Choice A: a NASA space website with named scientists.",
      "Choice B: a comment on a video with no name.",
      "Choice C: a joke website with no facts listed.",
      "NASA is made by real space scientists and you can check it, so it is the most reliable."
    ],
    answer: "The NASA space website -- it is trustworthy and you can check it."
  },
  items: [
    {
      id: "g5.summer.ela.w5.d4.q1",
      type: "multiple_choice",
      stem: "Which source is the MOST reliable for a fact about dinosaurs?",
      choices: [
        "A museum website written by scientists.",
        "A comment on a video with no name.",
        "A dream your friend had.",
        "A cartoon about talking dinosaurs."
      ],
      answerIndex: 0,
      explanation: "A museum website is made by scientists, has real names, and you can check it. The other choices cannot be trusted for real facts.",
      hintLadder: [
        "Which one is made by real experts?",
        "Which one can you actually check?",
        "The museum website written by scientists."
      ]
    },
    {
      id: "g5.summer.ela.w5.d4.q2",
      type: "multiple_choice",
      stem: "Which source is the LEAST reliable for a science fact?",
      choices: [
        "A science book from your school library.",
        "A page from a space agency like NASA.",
        "A comment with no name on a video.",
        "An article by a named science reporter."
      ],
      answerIndex: 2,
      explanation: "A comment with no name cannot be checked, so it is the least reliable. The other three all have known authors or editors.",
      hintLadder: [
        "Which one has no name attached?",
        "Could you find out who wrote it?",
        "The comment with no name is least reliable."
      ]
    },
    {
      id: "g5.summer.ela.w5.d4.q3",
      type: "multiple_choice",
      stem: "A good citation should tell your reader at least three things. Which three?",
      choices: [
        "The color of the page, the price, and the font.",
        "Who made it, what it is called, and when it was made.",
        "If you liked it, how long it was, and your name.",
        "The weather, your mood, and the time of day."
      ],
      answerIndex: 1,
      explanation: "Who made it, what it is called, and when it was made. With those three things, a reader can find the same source.",
      hintLadder: [
        "What does a reader need to find the same source?",
        "Think: who, what, and when.",
        "Who made it, what it is called, and when it was made."
      ]
    },
    {
      id: "g5.summer.ela.w5.d4.q4",
      type: "multiple_choice",
      stem: "Two sources give different facts. One is a science website from this year, and one is an old website with no name and no date. What should you do?",
      choices: [
        "Just pick the one you like better.",
        "Trust the newer science website with a known author.",
        "Believe both at the same time.",
        "Ignore both and make up your own fact."
      ],
      answerIndex: 1,
      explanation: "When sources disagree, trust the one you can check that has a known author and a recent date. That is the science website.",
      hintLadder: [
        "Which source can you actually check?",
        "Which one has a name and a date?",
        "Trust the newer science website with a known author."
      ],
      misconceptionsTargeted: ["picks-favorite-not-trustworthy"]
    },
    {
      id: "g5.summer.ela.w5.d4.q5",
      type: "short_answer",
      stem: "Pick a topic you would like to research (like sharks or space). Name ONE reliable source and ONE source you would NOT trust, and give a reason for each. Use this frame: \"I would trust ___ because ___ . I would not trust ___ because ___ .\"",
      rubric: {
        level3: "Names one specific reliable source with a clear reason (like a known author or expert) AND one unreliable source with a clear reason (like no name to check).",
        level2: "Names both sources but at least one reason is vague.",
        level1: "Names only one source, or gives no real reasons."
      },
      exemplar:
        "I would trust a science museum website because scientists made it and I can check it. I would not trust a comment with no name because I cannot find out who wrote it.",
      hintLadder: [
        "Pick a source made by real experts for the reliable one.",
        "Pick a source with no name for the one you would not trust.",
        "Finish the frame with a reason for each."
      ]
    }
  ],
  stretch: {
    stem: "You found a cool fact on a website, but there is no author name and no date. What is one problem with using it in your research?",
    answer: "You cannot check who made it or when, so you cannot be sure it is true.",
    explanation: "Without an author or a date, a reader cannot find or trust the source. A reliable source lets you check who made it and when."
  },
  reflectionPrompt: "Today you learned how to size up sources. Where this week did you see a claim that needed a better source?",
  misconceptionBank: [
    {
      id: "picks-favorite-not-trustworthy",
      label: "Picks the fact they like best",
      description: "Chooses the source that says what they want to hear, instead of the source they can actually check.",
      coachMove: "Ask two different questions: \"Do I like this answer?\" and \"Can I trust and check this source?\" Pick by trust, not by favorite."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather settle an argument using (A) a random comment you found online, or (B) a fact sheet from a real science group? Pick one and say what makes it more trustworthy.",
      answer:
        "(B) wins! A science group's fact sheet has real names and facts you can check. The random comment has no name, so you cannot tell if it is true.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Make a Source Detective Card",
      challenge:
        "Pick a topic you are curious about, like sharks or space. Think of THREE sources about it, then rank them from most to least reliable, and write a one-line citation for your top pick.",
      materials: ["Paper and markers, OR a device to type or draw on"],
      steps: [
        "Choose your topic and list three possible sources.",
        "Rank them from most reliable to least reliable.",
        "Write one sentence about why your #1 beats your #3.",
        "Write a citation for your #1: who made it, what it is called, and when."
      ],
      deliverable: "A source detective card with three ranked sources and a citation for the most reliable one.",
      choiceBoard: [
        "Make a ranked source card (draw it or type it).",
        "Design a \"trustworthy vs. shaky\" poster with checkmarks and red flags.",
        "Write a short skit where a detective asks a source questions to test if it can be trusted."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Source Sleuth Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w5.d4.arena1",
          type: "multiple_choice",
          stem: "You are writing a report about how plants grow. Which is the MOST reliable source to use?",
          choices: [
            "A funny meme a friend sent you.",
            "A science book written by a botanist (a plant scientist).",
            "A comment with no name under a video.",
            "A made-up story about magic plants."
          ],
          answerIndex: 1,
          explanation: "A science book by a plant scientist has a known expert author and real facts you can check, so it is the most reliable choice.",
          hintLadder: [
            "Which one was written by a real expert?",
            "Which one has facts you could actually check?",
            "The science book written by a plant scientist."
          ]
        },
        {
          id: "g5.summer.ela.w5.d4.arena2",
          type: "short_answer",
          stem: "A classmate says their fact came from \"a website\" but tells you nothing else. List the THREE things a good citation must include so a reader could find the same source.",
          rubric: {
            level3: "Names all three: who made it (author), what it is called (title), and when it was made (date).",
            level2: "Names two of the three parts.",
            level1: "Names only one, or lists things that would not help find the source."
          },
          exemplar: "1) Who made it (the author or group). 2) What it is called (the title). 3) When it was made (the date). With those three, a reader can find the same source.",
          hintLadder: [
            "What does a reader need to find the same source?",
            "Think: who, what, and when.",
            "Author, title, and date."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Focus Reset",
      prompt:
        "Close your eyes and take 5 slow breaths. As you breathe out, imagine clearing away the shaky, made-up facts, and keeping only the ones you trust.",
      scienceTieIn: "Slow breathing calms your body so your brain can focus better -- a handy tool you will meet again in the program's science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one claim you saw this week in an ad, a video, or a post? Did it name a source you could actually check?",
      badge: { id: "g5-summer-source-detective", name: "Source Detective", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
