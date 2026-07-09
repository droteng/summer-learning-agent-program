// Grade 7 History/Civics — Summer History Missions, Week 7, Day 3.
// Topic: turning points & historical significance — what makes an event
// truly "significant" rather than merely memorable.

export const summerG7HistoryW7D3 = {
  id: "g7.summer.hist.w7.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 3,
  subject: "History/Civics",
  topic: "Turning points & historical significance",
  topicTag: "historical-significance",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.3.7", "CCSS.ELA-LITERACY.RH.6-8.2"],
  hook: "Thousands of things happened yesterday, but almost none will make it into a history book. So how do historians decide which events are 'significant' enough to remember? Today you learn the tests they use — and you'll defend your own pick for the most significant turning point on your Mission Board.",
  miniLesson: [
    "Historical significance is not the same as 'famous' or 'exciting.' Historians judge significance by asking how DEEPLY, how WIDELY, and how LONG an event changed things — and whether it still shapes life today.",
    "A TURNING POINT is an event after which things clearly go in a new direction — like an invention, a law, or a war that leaves the world measurably different than before. The clearest test is: 'Would things be very different if this had never happened?'",
    "Significance is an ARGUMENT, not a fixed label. Different groups may judge the same event differently — an event that was a triumph for one community may have been a catastrophe for another — so historians support significance claims with evidence and consider multiple perspectives."
  ],
  workedExample: {
    prompt: "Decide whether the invention of the printing press was a historical turning point, using the significance tests.",
    steps: [
      "Depth: it changed something fundamental — how knowledge was made and shared.",
      "Breadth: it affected huge numbers of people across many countries, not just one town.",
      "Duration: its effects lasted for centuries and still shape how information spreads.",
      "The 'what if' test: without the press, books stay rare and hand-copied, so literacy and the spread of ideas would look very different — a clear turning point."
    ],
    answer: "The printing press is a strong turning point: it changed something deep (spreading knowledge), affected millions across the world, and its effects still shape life today."
  },
  items: [
    {
      id: "g7.summer.hist.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which question BEST tests whether an event is a historical turning point?",
      choices: [
        "Would life be clearly different today if the event had never happened?",
        "Was the event exciting to watch?",
        "Did a famous person attend?",
        "Was the event reported in the news?"
      ],
      answerIndex: 0,
      explanation: "The clearest turning-point test asks whether the event redirected history — whether removing it would change how things turned out. Excitement, fame, and news coverage don't measure significance.",
      hintLadder: [
        "Significance is about lasting change, not entertainment.",
        "Try imagining the event never happened.",
        "The 'what if it never happened?' test reveals a true turning point."
      ]
    },
    {
      id: "g7.summer.hist.w7.d3.q2",
      type: "multiple_choice",
      stem: "Historians often measure significance by depth, breadth, and duration. What does 'breadth' mean here?",
      choices: [
        "How exciting or dramatic the event was",
        "How long ago the event happened",
        "How many people and places the event affected",
        "How famous the event became"
      ],
      answerIndex: 2,
      explanation: "Breadth measures the reach of an event — how many people and places it touched. Depth is how fundamentally it changed things; duration is how long the effects lasted.",
      hintLadder: [
        "Breadth is about reach, not time or drama.",
        "Think 'how WIDE did the effects spread?'",
        "It counts how many people and places were affected."
      ],
      misconceptionsTargeted: ["famous-equals-significant"]
    },
    {
      id: "g7.summer.hist.w7.d3.q3",
      type: "multiple_choice",
      stem: "The same historical event is celebrated by one group and mourned by another. What does this show about historical significance?",
      choices: [
        "Only one group can be correct about the event's significance",
        "Significance can look different from different perspectives, so historians weigh multiple viewpoints",
        "The event must not be significant at all",
        "Significance is decided by whichever group is larger"
      ],
      answerIndex: 1,
      explanation: "An event's meaning and significance can differ across communities and perspectives; good historians consider multiple viewpoints rather than assuming a single verdict.",
      hintLadder: [
        "Can one event mean different things to different people?",
        "Whose perspective decides significance — just one group?",
        "Historians weigh multiple perspectives."
      ]
    },
    {
      id: "g7.summer.hist.w7.d3.q4",
      type: "short_answer",
      stem: "Choose an event from your own lifetime that you think is truly significant. Use at least TWO significance tests (depth, breadth, or duration) to argue why it matters.",
      rubric: {
        level3: "Names a real event AND applies at least two significance tests (depth, breadth, duration) with specific reasoning about how deeply, widely, or lastingly it changed things.",
        level2: "Names an event and applies one test clearly, or applies two but with thin reasoning.",
        level1: "Names an event without applying the significance tests, or argues only that it was famous/exciting."
      },
      exemplar: "The spread of smartphones is significant. Breadth: billions of people across nearly every country use them, so the reach is enormous. Duration: they have reshaped how we communicate for over a decade and show no sign of fading, so the effect is lasting — not just a passing trend.",
      hintLadder: [
        "Pick an event, then choose two tests: depth, breadth, or duration.",
        "Depth = how fundamentally it changed things; breadth = how many; duration = how long.",
        "Give specific reasons for each test, not just 'it was big.'"
      ]
    },
    {
      id: "g7.summer.hist.w7.d3.q5",
      type: "short_answer",
      stem: "Explain the difference between an event being 'famous' and an event being 'historically significant,' and give one example where they come apart.",
      rubric: {
        level3: "Clearly distinguishes fame (widely known) from significance (deep, wide, or lasting change), AND gives an example where a famous-but-minor event or a significant-but-quiet event shows the two coming apart.",
        level2: "States the distinction but the example is weak or only loosely shows the two coming apart.",
        level1: "Treats fame and significance as the same, or gives no working example."
      },
      exemplar: "Being famous means lots of people have heard of it; being significant means it deeply or lastingly changed how things are. A viral celebrity moment can be famous for a week but change nothing, while a quiet medical breakthrough almost no one can name might save millions of lives for decades — significant without being famous.",
      hintLadder: [
        "Does 'everyone knows it' mean 'it changed the world'?",
        "Think of something famous but harmless, or important but little-known.",
        "Your example should show fame and significance separating."
      ]
    }
  ],
  reflectionPrompt: "Fifty years from now, which event from THIS year do you think will still matter — and which will be forgotten? What makes you sure of the difference?",
  misconceptionBank: [
    {
      id: "famous-equals-significant",
      label: "Equates fame with historical significance",
      description: "Assumes the events everyone talks about are automatically the most significant, ignoring depth, breadth, and duration.",
      coachMove: "Separate 'well-known' from 'world-changing': 'Lots of people know about it — but did it change how things turned out, and for how many, for how long?'"
    },
    {
      id: "significance-is-fixed",
      label: "Thinks significance is a fixed label everyone agrees on",
      description: "Believes an event is objectively 'significant' or not, ignoring that different perspectives can weigh it differently.",
      coachMove: "Ask 'Significant to whom?' and show how the same event can be a triumph for one group and a tragedy for another."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Famous or Significant?",
      prompt:
        "Two events from this summer: (A) a video that got a hundred million views in a week, and (B) a quiet new law that changes school for every kid in your state for the next decade. Which is more FAMOUS, and which is more historically SIGNIFICANT — and why aren't those the same thing?",
      answer:
        "(A) the viral video is more famous — everyone's seen it — but it may change nothing. (B) the law is more significant: it affects many people (breadth) and lasts for years (duration). Fame is about being known; significance is about deep, wide, lasting change.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Turning Point Hall of Fame Card",
      challenge:
        "Add a 'Turning Point' card to your History Mission Board. Nominate one event for a Hall of Fame and build the case that it was truly significant.",
      steps: [
        "Choose the event you want to nominate as a turning point.",
        "Score it on depth, breadth, and duration — a quick rating for each.",
        "Run the 'what if it never happened?' test and write one sentence on how the world would differ.",
        "Note one PERSPECTIVE for whom the event might mean something very different."
      ],
      deliverable: "One turning-point mission card with depth/breadth/duration ratings, a 'what if' sentence, and one alternate perspective noted.",
      choiceBoard: [
        "Design a 'Hall of Fame plaque' rating the event on all three tests.",
        "Write a 'nomination speech' arguing the event deserves the title.",
        "Draw a before/after split showing how the world changed at this turning point."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Significance Judge Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.hist.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which event is MOST likely to be judged a historical turning point by the depth-breadth-duration tests?",
          choices: [
            "A local bakery briefly trended online one weekend",
            "A single sports game that fans still argue about",
            "A celebrity wore an unusual outfit to an awards show",
            "The development of vaccines that wiped out a deadly disease worldwide"
          ],
          answerIndex: 3,
          explanation: "Disease-eradicating vaccines changed something deep (survival), across the whole world (breadth), for generations (duration). The others are famous or memorable but shallow, local, or short-lived.",
          hintLadder: [
            "Score each on depth, breadth, and duration.",
            "Which one changed something fundamental for the whole world for a long time?",
            "Famous or memorable is not the same as deep, wide, and lasting."
          ]
        },
        {
          id: "g7.summer.hist.w7.d3.arena2",
          type: "short_answer",
          stem: "A classmate argues, 'The most-viewed video of the decade is the most historically significant event of the decade.' Write a reasoned rebuttal.",
          rubric: {
            level3: "Distinguishes fame from significance, applies at least one significance test (depth/breadth/duration or the 'what if' test) to show views alone don't prove significance, AND names a more plausible turning point or the kind of change to look for instead.",
            level2: "Argues fame is not significance but gives limited reasoning or no better alternative.",
            level1: "Agrees with the claim or objects without applying any significance test."
          },
          exemplar: "Being watched a lot makes a video famous, not significant. Significance is about deep, wide, and lasting change — so I'd ask: would the world be different if that video never existed? Probably not. A quieter event, like a law or a medical breakthrough that reshapes daily life for years, would score far higher on depth and duration, even with fewer views.",
          hintLadder: [
            "What's the difference between 'most watched' and 'most world-changing'?",
            "Apply the 'what if it never happened?' test to the video.",
            "Suggest an event that actually scores high on depth, breadth, or duration."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: The Long View Breath",
      prompt:
        "Sit or stand tall. Breathe in slowly for four counts imagining a single day, then breathe out for six counts imagining a whole decade passing. Repeat four times, letting your shoulders drop as you picture what still matters after all that time.",
      scienceTieIn: "Slow, extended exhales activate the body's calming system, lowering your heart rate and helping your mind hold a bigger, longer-term picture instead of racing.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Name one event you were sure was a 'big deal' when it happened but that turned out not to matter much. What does that teach you about judging significance in the moment?",
      badge: { id: "g7-significance-judge", name: "Significance Judge", emoji: "⚖️" },
      estimatedMinutes: 7
    }
  }
};
