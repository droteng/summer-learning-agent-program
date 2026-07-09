// Grade 6 ELA/Writing — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 5. Topic: persuasive writing — pitch your invention with a claim,
// reasons, evidence, and a call to action.

export const winterG6ElaW6D5 = {
  id: "g6.winter.ela.w6.d5",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Pitch your invention with persuasive writing",
  topicTag: "persuasive-pitch",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.1", "CCSS.W.6.1.B"],
  hook: "You've designed a winter invention all week — now you have to convince people it's worth building. A great pitch has four parts: a bold CLAIM, clear REASONS, real EVIDENCE, and a CALL TO ACTION. Today you turn your prototype into words that persuade.",
  miniLesson: [
    "A persuasive pitch starts with a CLAIM — a clear statement of what your invention does and why it matters: 'My heated glove liner keeps hands warm so kids can play outside longer.'",
    "REASONS answer 'why should I believe you?' and EVIDENCE backs each reason with something concrete — a test result, a measurement, a real example, or a comparison to what people use now.",
    "A pitch ends with a CALL TO ACTION: a direct request telling the audience exactly what to do next — 'Fund this prototype,' 'Vote for my design,' or 'Try it this winter.'"
  ],
  workedExample: {
    prompt: "Turn this weak line into a persuasive pitch opening with a claim and one reason backed by evidence: 'My invention is a coat.'",
    steps: [
      "Start with a specific CLAIM about what it does and why it matters.",
      "Add a REASON that explains a benefit.",
      "Back the reason with EVIDENCE — a number, test, or comparison.",
      "Result: 'My reflective coat keeps kids visible in winter dusk (claim) because drivers spot reflective strips sooner (reason) — in my test, the strips were visible from 40 meters away, twice as far as a plain coat (evidence).'"
    ],
    answer: "My reflective coat keeps kids visible at dusk because drivers spot the strips sooner — my test showed they were visible from 40 meters, twice as far as a plain coat."
  },
  items: [
    {
      id: "g6.winter.ela.w6.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence is the best CLAIM to OPEN an invention pitch?",
      choices: [
        "I like winter a lot.",
        "My self-heating water bottle keeps drinks warm for hours so hikers stay hydrated in the cold.",
        "Water bottles exist.",
        "Um, here is a thing I made."
      ],
      answerIndex: 1,
      explanation: "A strong pitch claim states clearly what the invention does and why it matters — specific and arguable.",
      hintLadder: [
        "A claim says what your invention does AND why it matters.",
        "Which one is specific and takes a position?",
        "The self-heating water bottle sentence is the clear claim."
      ]
    },
    {
      id: "g6.winter.ela.w6.d5.q2",
      type: "multiple_choice",
      stem: "In a persuasive pitch, what is the job of EVIDENCE?",
      choices: [
        "To back up a reason with something concrete, like a test result or measurement",
        "To repeat the claim in different words",
        "To make the pitch longer",
        "To list the writer's feelings"
      ],
      answerIndex: 0,
      explanation: "Evidence supports each reason with concrete facts — data, tests, examples — so the audience believes you.",
      hintLadder: [
        "Evidence answers 'how do you know?'",
        "It should be concrete — a number, test, or example.",
        "Evidence backs up a reason with proof."
      ],
      misconceptionsTargeted: ["repeating-is-evidence"]
    },
    {
      id: "g6.winter.ela.w6.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence is a strong CALL TO ACTION to END a pitch?",
      choices: [
        "That's all I have.",
        "Anyway, thanks.",
        "Vote for my heated-glove design so we can build a prototype this winter.",
        "I think it's pretty good maybe."
      ],
      answerIndex: 2,
      explanation: "A call to action tells the audience exactly what to do next — here, to vote so the prototype gets built.",
      hintLadder: [
        "A call to action asks the audience to DO something specific.",
        "Which one gives a clear next step?",
        "'Vote for my design so we can build it' is the call to action."
      ]
    },
    {
      id: "g6.winter.ela.w6.d5.q4",
      type: "short_answer",
      stem: "Write ONE reason your winter invention is worth building, then back it with a piece of concrete EVIDENCE (a test result, measurement, or real example).",
      rubric: {
        level3: "States a clear reason AND supports it with concrete evidence (a number, test, comparison, or specific example) that actually fits the reason.",
        level2: "Gives a reason and some support, but the evidence is vague or only loosely connected.",
        level1: "Gives a reason with no real evidence, or restates the claim."
      },
      exemplar: "Reason: my insulated door strip stops cold drafts. Evidence: when I taped it to the bottom of my door, the gap that used to let in cold air was fully sealed, and the room felt warmer within ten minutes.",
      hintLadder: [
        "First state ONE reason it's worth building.",
        "Then add proof: a number, a test, or a real example.",
        "Make sure the evidence actually supports that reason."
      ]
    },
    {
      id: "g6.winter.ela.w6.d5.q5",
      type: "short_answer",
      stem: "Write a short pitch for a winter invention using all FOUR parts in order: claim, one reason, one piece of evidence, and a call to action.",
      rubric: {
        level3: "Includes all four parts clearly and in order — a specific claim, a reason, concrete evidence, and a direct call to action — that hold together about one invention.",
        level2: "Includes three of the four parts, or all four but one is weak or out of place.",
        level1: "Missing two or more parts, or the parts don't connect to one invention."
      },
      exemplar: "My clip-on boot grips keep kids from slipping on icy sidewalks (claim). They matter because falls on ice cause lots of winter injuries (reason). In my test, I walked across an icy step ten times with no slips, versus four slips without them (evidence). Fund my prototype so every student can walk to school safely this winter (call to action).",
      hintLadder: [
        "Open with your claim, then give a reason.",
        "Back the reason with concrete evidence.",
        "End by asking the audience to do something specific."
      ]
    }
  ],
  reflectionPrompt: "Which part of your pitch — claim, reason, evidence, or call to action — was hardest to write, and what made it tricky?",
  misconceptionBank: [
    {
      id: "repeating-is-evidence",
      label: "Thinks repeating the claim counts as evidence",
      description: "Restates the opinion in new words instead of offering concrete support.",
      coachMove: "Ask: 'What number, test, or real example PROVES this?' Evidence has to be something outside your own opinion."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Pitch Wins?",
      prompt:
        "Two inventors pitch a winter glove. (A) 'My gloves are the best, trust me.' (B) 'My gloves kept my hands above 20°C for an hour in a freezer test — 15 minutes longer than regular gloves.' Which pitch would convince YOU, and what makes it stronger?",
      answer:
        "(B) wins because it gives EVIDENCE — a real test with numbers and a comparison. (A) is just an opinion with nothing to back it up. Concrete evidence is what makes a pitch persuasive.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Pitch Your Winter Invention",
      challenge:
        "Write and design a one-page pitch for the winter invention you developed this week. It must include all four persuasive parts — claim, reasons, evidence, and a call to action — laid out to grab an audience.",
      materials: ["Paper & markers, OR a slides/doc app"],
      steps: [
        "Write a bold CLAIM headline stating what your invention does and why it matters.",
        "List two REASONS it's worth building, each backed by concrete EVIDENCE.",
        "Add a sketch or diagram of your invention with a caption.",
        "End with a strong CALL TO ACTION telling the audience exactly what to do next."
      ],
      deliverable: "A one-page invention pitch with a claim headline, two evidence-backed reasons, a labeled sketch, and a call to action.",
      choiceBoard: [
        "Design the pitch as a one-page poster or flyer.",
        "Write it as a 60-second spoken pitch script and rehearse it aloud.",
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
          id: "g6.winter.ela.w6.d5.arena1",
          type: "multiple_choice",
          stem: "A pitch reads: 'My sled is great. My sled is really great. You should like my sled.' What is this pitch MISSING most?",
          choices: [
            "A claim",
            "A title",
            "Correct spelling",
            "Reasons and evidence to support the claim"
          ],
          answerIndex: 3,
          explanation: "It repeats the claim but never gives reasons or evidence — the support that makes a pitch persuasive.",
          hintLadder: [
            "It keeps saying the same opinion over and over.",
            "What proof or explanation is it lacking?",
            "It's missing reasons and evidence."
          ]
        },
        {
          id: "g6.winter.ela.w6.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this weak pitch line into a persuasive one with a claim AND a call to action: 'I made a thing that melts ice.'",
          rubric: {
            level3: "Produces a specific claim about the ice-melting invention AND a clear call to action telling the audience what to do next.",
            level2: "Has a stronger claim OR a call to action, but not both clearly.",
            level1: "Still vague, with no real claim or call to action."
          },
          exemplar: "My clip-on de-icer melts a clear path on frozen steps in under a minute so no one slips — try it on your porch this winter and tell me if it keeps you safer.",
          hintLadder: [
            "Start with a specific claim: what does it do and why does it matter?",
            "End by asking the audience to DO something.",
            "Combine a clear claim with a clear call to action."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Pitch Power Pose",
      prompt:
        "Stand tall like you're on a stage. Say your invention's claim out loud while planting your feet and raising one hand for 'evidence,' then point forward for the 'call to action.' Repeat the pose-and-say sequence 4 times, a little more confident each round.",
      scienceTieIn: "Standing in a strong, open posture before speaking can lower stress and help you feel braver — presenters really do think more clearly when their bodies feel confident.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You spent a week inventing and pitching. What's one real problem — in winter or any season — you'd genuinely love to invent a solution for, and what would your one-sentence pitch claim be?",
      badge: { id: "invention-pitch-pro", name: "Invention Pitch Pro", emoji: "🎤" },
      estimatedMinutes: 7
    }
  }
};
