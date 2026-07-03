// Grade 5 ELA/Writing — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 5. Grade 5 counterpart of g6.winter.ela.w6.d5. Same topic (persuasive
// writing — pitch your invention with a claim, reasons, evidence, and a call
// to action) pitched down to Grade 5: shorter examples, plainer vocabulary,
// and a paragraph frame to scaffold the four-part pitch. Wintry tone.

export const winterG5ElaW6D5 = {
  id: "g5.winter.ela.w6.d5",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Pitch your invention with persuasive writing",
  topicTag: "persuasive-pitch",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1", "CCSS.ELA-LITERACY.W.5.1.A"],
  hook: "You have designed a winter invention all week — now you have to convince people it is worth building. A great pitch has four parts: a bold CLAIM, clear REASONS, real EVIDENCE, and a CALL TO ACTION. Today you turn your model into words that persuade.",
  miniLesson: [
    "A persuasive pitch starts with a CLAIM — one clear sentence saying what your invention does and why it matters: 'My heated glove liner keeps hands warm so kids can play outside longer.'",
    "REASONS answer 'why should I believe you?' EVIDENCE backs up a reason with something you can point to — a test result, a measurement, or a real example.",
    "A pitch ends with a CALL TO ACTION: a clear request telling the audience exactly what to do next — 'Vote for my design,' 'Help me build it,' or 'Try it this winter.' A paragraph frame can help: Claim. Reason. Evidence. Call to action."
  ],
  workedExample: {
    prompt: "Turn this weak line into a persuasive pitch opening with a claim and one reason backed by evidence: 'My invention is a coat.'",
    steps: [
      "Start with a clear CLAIM about what it does and why it matters.",
      "Add a REASON that explains a benefit.",
      "Back the reason with EVIDENCE — a number, a test, or a real example.",
      "Result: 'My reflective coat keeps kids easy to see at dusk (claim) because drivers spot the shiny strips sooner (reason) — in my test, the strips could be seen from 40 meters away, twice as far as a plain coat (evidence).'"
    ],
    answer: "My reflective coat keeps kids easy to see at dusk because drivers spot the strips sooner — in my test they could be seen from 40 meters, twice as far as a plain coat."
  },
  items: [
    {
      id: "g5.winter.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence is the best CLAIM to OPEN an invention pitch?",
      choices: [
        "I like winter a lot.",
        "My self-heating water bottle keeps drinks warm for hours so hikers stay warm in the cold.",
        "Water bottles exist.",
        "Um, here is a thing I made."
      ],
      answerIndex: 1,
      explanation: "A strong claim clearly says what the invention does and why it matters — it is specific.",
      hintLadder: [
        "A claim says what your invention does AND why it matters.",
        "Which one is specific and takes a position?",
        "The self-heating water bottle sentence is the clear claim."
      ]
    },
    {
      id: "g5.winter.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "In a persuasive pitch, what is the job of EVIDENCE?",
      choices: [
        "To say the claim again in different words",
        "To back up a reason with something real, like a test result or measurement",
        "To make the pitch longer",
        "To list the writer's feelings"
      ],
      answerIndex: 1,
      explanation: "Evidence backs up a reason with real facts — a test, a number, or an example — so the audience believes you.",
      hintLadder: [
        "Evidence answers 'how do you know?'",
        "It should be real — a number, a test, or an example.",
        "Evidence backs up a reason with proof."
      ],
      misconceptionsTargeted: ["repeating-is-evidence"]
    },
    {
      id: "g5.winter.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence is a strong CALL TO ACTION to END a pitch?",
      choices: [
        "That's all I have.",
        "Anyway, thanks.",
        "Vote for my heated-glove design so we can build it this winter.",
        "I think it's pretty good maybe."
      ],
      answerIndex: 2,
      explanation: "A call to action tells the audience exactly what to do next — here, to vote so the invention gets built.",
      hintLadder: [
        "A call to action asks the audience to DO something specific.",
        "Which one gives a clear next step?",
        "'Vote for my design so we can build it' is the call to action."
      ]
    },
    {
      id: "g5.winter.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Write ONE reason your winter invention is worth building, then back it up with a piece of real EVIDENCE (a test result, a measurement, or a real example).",
      rubric: {
        level3: "States a clear reason AND backs it up with real evidence (a number, test, comparison, or specific example) that actually fits the reason.",
        level2: "Gives a reason and some support, but the evidence is vague or only loosely connected.",
        level1: "Gives a reason with no real evidence, or just says the claim again."
      },
      exemplar: "Reason: my door strip stops cold drafts. Evidence: when I taped it to the bottom of my door, the gap that used to let in cold air was covered, and the room felt warmer within ten minutes.",
      hintLadder: [
        "First state ONE reason it is worth building.",
        "Then add proof: a number, a test, or a real example.",
        "Make sure the evidence really supports that reason."
      ]
    },
    {
      id: "g5.winter.ela.w6.d5.q5",
      type: "short_answer",
      stem: "Write a short pitch for a winter invention using all FOUR parts in order: claim, one reason, one piece of evidence, and a call to action.",
      rubric: {
        level3: "Includes all four parts clearly and in order — a specific claim, a reason, real evidence, and a clear call to action — that all fit one invention.",
        level2: "Includes three of the four parts, or all four but one is weak or out of order.",
        level1: "Missing two or more parts, or the parts do not connect to one invention."
      },
      exemplar: "My clip-on boot grips keep kids from slipping on icy sidewalks (claim). They matter because falls on ice cause a lot of winter injuries (reason). In my test, I walked across an icy step ten times with no slips, but I slipped four times without them (evidence). Help me build my model so every student can walk to school safely this winter (call to action).",
      hintLadder: [
        "Open with your claim, then give a reason.",
        "Back the reason with real evidence.",
        "End by asking the audience to do something specific."
      ]
    }
  ],
  reflectionPrompt: "Which part of your pitch — claim, reason, evidence, or call to action — was hardest to write, and what made it tricky?",
  misconceptionBank: [
    {
      id: "repeating-is-evidence",
      label: "Thinks saying the claim again counts as evidence",
      description: "Repeats the opinion in new words instead of giving real support.",
      coachMove: "Ask: 'What number, test, or real example PROVES this?' Evidence has to be something outside your own opinion."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Pitch Wins?",
      prompt:
        "Two inventors pitch a winter glove. (A) 'My gloves are the best, trust me.' (B) 'My gloves kept my hands warm for a whole hour in a freezer test — 15 minutes longer than regular gloves.' Which pitch would convince YOU, and what makes it stronger?",
      answer:
        "(B) wins because it gives EVIDENCE — a real test with numbers and a comparison. (A) is just an opinion with nothing to back it up. Real evidence is what makes a pitch persuasive.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pitch Your Winter Invention",
      challenge:
        "Write and design a one-page pitch for the winter invention you built this week. It must have all four persuasive parts — claim, reasons, evidence, and a call to action — laid out to grab an audience.",
      materials: ["Paper & markers, OR a slides/doc app"],
      steps: [
        "Write a bold CLAIM headline saying what your invention does and why it matters.",
        "List two REASONS it is worth building, each backed by real EVIDENCE.",
        "Add a sketch or picture of your invention with a caption.",
        "End with a strong CALL TO ACTION telling the audience exactly what to do next."
      ],
      deliverable: "A one-page invention pitch with a claim headline, two evidence-backed reasons, a labeled sketch, and a call to action.",
      choiceBoard: [
        "Design the pitch as a one-page poster or flyer.",
        "Write it as a 60-second spoken pitch and practice it out loud.",
        "Make a 3-slide pitch deck: claim, reasons + evidence, call to action."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Pitch Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "A pitch reads: 'My sled is great. My sled is really great. You should like my sled.' What is this pitch MISSING most?",
          choices: [
            "A claim",
            "Reasons and evidence to back up the claim",
            "Correct spelling",
            "A title"
          ],
          answerIndex: 1,
          explanation: "It says the claim over and over but never gives reasons or evidence — the support that makes a pitch persuasive.",
          hintLadder: [
            "It keeps saying the same opinion again and again.",
            "What proof or explanation is it missing?",
            "It is missing reasons and evidence."
          ]
        },
        {
          id: "g5.winter.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this weak pitch line into a persuasive one with a claim AND a call to action: 'I made a thing that melts ice.'",
          rubric: {
            level3: "Makes a specific claim about the ice-melting invention AND a clear call to action telling the audience what to do next.",
            level2: "Has a stronger claim OR a call to action, but not both clearly.",
            level1: "Still vague, with no real claim or call to action."
          },
          exemplar: "My clip-on de-icer melts a clear path on frozen steps in under a minute so no one slips — try it on your porch this winter and tell me if it keeps you safer.",
          hintLadder: [
            "Start with a specific claim: what does it do and why does it matter?",
            "End by asking the audience to DO something.",
            "Put a clear claim and a clear call to action together."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pitch Power Pose",
      prompt:
        "Stand tall like you are on a stage. Say your invention's claim out loud while planting your feet and raising one hand for 'evidence,' then point forward for the 'call to action.' Repeat the pose-and-say sequence 4 times, a little more confident each round.",
      scienceTieIn: "Standing in a strong, open pose before speaking can lower stress and help you feel braver — presenters really do think more clearly when their bodies feel confident.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You spent a week inventing and pitching. What is one real problem — in winter or any season — you would love to invent a solution for, and what would your one-sentence pitch claim be?",
      badge: { id: "g5-winter-invention-pitch-pro", name: "Invention Pitch Pro", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
