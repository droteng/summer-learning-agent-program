// Grade 5 Media Literacy — Enrichment Day 1.
// Topic: is this a good source?

export const grade5MediaDay1 = {
  id: "g5.media.e.d1",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Is this a good source?",
  topicTag: "good-source",
  estimatedMinutes: 15,
  standardsRefs: ["AASL.I.C", "ISTE.3a"],
  hook: "Not everything online is true. Before you believe something, ask a simple question: WHO made this, and WHY? Today you become a source detective.",
  miniLesson: [
    "Who made it? A real person or group that puts their name on it is easier to trust than a message with no name at all.",
    "Why did they make it? Some sites want to teach you something true. Others want to sell you something or get you upset so you click. The reason matters.",
    "Can you check it somewhere else? If a fact is real, you can usually find it on more than one trusted place, like a museum, a library site, or a school page."
  ],
  workedExample: {
    prompt:
      "You find a page that says 'Eating candy every morning makes you smarter!' The page has no author's name and lots of ads for candy. Is it a good source?",
    steps: [
      "Who made it? No name is shown. That's a warning sign.",
      "Why did they make it? The page is covered in candy ads, so it probably wants to sell candy, not teach you.",
      "Can I check it? A trusted health or science site would not say this. I can't find it anywhere trusted.",
      "So: this is NOT a good source. I would not believe it."
    ],
    answer: "Not a good source — no author, and it's really an ad for candy."
  },
  items: [
    {
      id: "g5.media.e.d1.q1",
      type: "multiple_choice",
      stem: "What is a good FIRST question to ask about something you read online?",
      choices: [
        "Is the page a fun color?",
        "Does it have cute pictures?",
        "Who made it, and why did they make it?",
        "How long is the page?"
      ],
      answerIndex: 2,
      explanation: "Knowing who made something and why helps you decide if you can trust it. Color and pictures don't tell you if it's true.",
      hintLadder: [
        "Think about the person behind the page.",
        "You want to know who is talking and their reason.",
        "It's the 'who made it and why' question."
      ]
    },
    {
      id: "g5.media.e.d1.q2",
      type: "multiple_choice",
      stem: "Which page would most likely be a GOOD source for a fact about the moon?",
      choices: [
        "A space museum's website with the scientists' names listed.",
        "A random post with no name and lots of ads.",
        "A comment someone typed under a video.",
        "A meme a friend forwarded with no source."
      ],
      answerIndex: 0,
      explanation: "A museum that lists real scientists is accountable — you can see who is responsible. The others have no clear author you can check.",
      hintLadder: [
        "Which one shows real people who are responsible?",
        "Look for names you can check.",
        "The museum with named scientists."
      ]
    },
    {
      id: "g5.media.e.d1.q3",
      type: "multiple_choice",
      stem: "A website looks fancy and professional. Does 'looks fancy' PROVE it is telling the truth?",
      choices: [
        "Yes, fancy pages are always right.",
        "Only if it has a video.",
        "Only if it uses big words.",
        "No — anyone can make a page look nice, so you still check who made it and why."
      ],
      answerIndex: 3,
      explanation: "A neat design is easy to make. It tells you nothing about whether the facts are true. You still have to check the source.",
      hintLadder: [
        "Can a page look nice but still be wrong?",
        "Looks are easy to fake.",
        "The answer is 'No — still check the source.'"
      ],
      misconceptionsTargeted: ["fancy-equals-true"]
    },
    {
      id: "g5.media.e.d1.q4",
      type: "numeric",
      stem: "You look at 5 pages about pet care. Only these have a named author from a trusted group: a vet clinic page, a pet museum page, and an animal rescue page. The other 2 have no name at all. How many of the 5 are trustworthy sources?",
      answer: 3,
      tolerance: 0,
      unit: "sources",
      explanation: "Three pages have a named author from a trusted group (vet clinic, pet museum, animal rescue). The 2 with no name are not trustworthy, so 3 of the 5 are.",
      hintLadder: [
        "Count only the ones with a named, trusted author.",
        "The vet clinic, the museum, and the rescue each count.",
        "That is 3 trustworthy sources."
      ]
    },
    {
      id: "g5.media.e.d1.q5",
      type: "short_answer",
      stem: "Think of a website, video, or post you saw recently. In one or two sentences, tell WHO made it and WHY you think they made it. Then say if you would trust it.",
      rubric: {
        level3: "Names a specific example, says who made it AND why, and gives a clear trust decision.",
        level2: "Covers the who or the why but not both, or the trust decision is unclear.",
        level1: "Just names something with no thinking about who, why, or trust."
      },
      exemplar:
        "I saw a video about caring for goldfish made by a pet store. They probably made it to sell fish food, so I would only half-trust it and check the facts on a trusted animal site too.",
      hintLadder: [
        "Pick one real thing you saw.",
        "Say who made it and their reason.",
        "End by saying if you would trust it."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to ask who made something and why. What is one thing online you want to double-check this week?",
  misconceptionBank: [
    {
      id: "fancy-equals-true",
      label: "Thinks a nice-looking page must be true",
      description: "Believes that if a website looks professional or fancy, the facts on it must be correct.",
      coachMove: "Remind them that a neat design is easy to make. Looks tell you nothing — always check who made it and why."
    }
  ]
};
