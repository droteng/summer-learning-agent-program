// Grade 5 World/Current Affairs — Spring Expedition, Week 7 (Voices for the
// Earth), Day 4. Topic: environmental issues around the world — pollution,
// habitat loss, and clean water — and how communities respond.
// Grade 5 depth: simpler examples, shorter passages, vocab support.

export const springG5WorldW7D4 = {
  id: "g5.spring.world.w7.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Environmental issues around the world and how communities respond",
  topicTag: "global-environmental-issues",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.6.3-5", "C3.D2.Civ.10.3-5"],
  hook: "Spring reminds us the Earth can renew itself — but only if we help. Around the world, communities face pollution, habitat loss, and shortages of clean water. Today you explore these global issues and, even better, how ordinary people are fighting back.",
  miniLesson: [
    "Pollution is harmful stuff added to air, water, or land — like smog over a city, plastic in the ocean, or chemicals in a river. It can travel: air and water carry it far from where it started.",
    "Habitat loss happens when the places animals and plants live are destroyed — forests cut down, wetlands drained, coral reefs dying. A habitat is a living thing's home, and losing it puts many species in danger.",
    "Clean water is not everywhere. Some communities do not have safe drinking water because of pollution, dry weather, or old pipes. But communities respond: planting trees, cleaning rivers, cutting plastic, and building wells and filters."
  ],
  workedExample: {
    prompt: "A beach town's fishing catch is shrinking and the sand is covered in plastic. Name the issue and one way the community could respond.",
    steps: [
      "Name the environmental issue: plastic pollution harming the ocean and the fish.",
      "Think about who is affected: fishers, wildlife, and everyone who eats the fish.",
      "Choose a community response: hold regular beach clean-ups and use less plastic.",
      "Result: plastic pollution is the issue; the community can run clean-ups and cut single-use plastics."
    ],
    answer: "The issue is plastic pollution harming the ocean; the community can respond with beach clean-ups and by using less plastic."
  },
  items: [
    {
      id: "g5.spring.world.w7.d4.q1",
      type: "multiple_choice",
      stem: "A city is covered by thick smog that makes it hard to breathe. Which environmental issue is this?",
      choices: [
        "Habitat loss",
        "A water shortage",
        "Air pollution",
        "Too many trees"
      ],
      answerIndex: 2,
      explanation: "Smog is harmful stuff in the air — that is air pollution.",
      hintLadder: [
        "What part of the environment is affected — air, water, or land?",
        "Smog is something harmful in the air.",
        "That is air pollution."
      ]
    },
    {
      id: "g5.spring.world.w7.d4.q2",
      type: "multiple_choice",
      stem: "Cutting down a large rainforest to build farmland mainly causes which problem?",
      choices: [
        "More clean water for cities",
        "Habitat loss for the animals and plants that lived there",
        "Cleaner air all over the world",
        "Nothing changes"
      ],
      answerIndex: 1,
      explanation: "Destroying the forest removes the home of the animals and plants that lived there — habitat loss.",
      hintLadder: [
        "What happens to the animals when their forest home is gone?",
        "Their living place is destroyed.",
        "That is habitat loss."
      ],
      misconceptionsTargeted: ["pollution-is-only-issue"]
    },
    {
      id: "g5.spring.world.w7.d4.q3",
      type: "multiple_choice",
      stem: "Which is an example of a COMMUNITY responding to an environmental problem?",
      choices: [
        "A factory dumps waste into a river.",
        "People ignore the smog and hope it clears on its own.",
        "Someone throws a plastic bottle in the ocean.",
        "Neighbors plant trees and clean up a polluted river together."
      ],
      answerIndex: 3,
      explanation: "Planting trees and cleaning a river together is people taking action to fix a problem — a community response.",
      hintLadder: [
        "Which choice shows people taking positive ACTION?",
        "Two of these make problems worse and one ignores it.",
        "Planting and cleaning up is the community response."
      ]
    },
    {
      id: "g5.spring.world.w7.d4.q4",
      type: "short_answer",
      stem: "Choose ONE global environmental issue (pollution, habitat loss, or lack of clean water). Describe the problem AND one realistic way a community could respond to it.",
      rubric: {
        level3: "Clearly describes one real environmental issue AND gives a realistic community response that would actually help address it.",
        level2: "Describes the issue OR a response, but not both clearly, or the response is only loosely connected.",
        level1: "Vague, names no clear issue, or gives no real response."
      },
      exemplar: "Some communities do not have clean water because their rivers are polluted. A community could respond by building simple water filters and making rules to stop factories from dumping waste in the river.",
      hintLadder: [
        "Pick one issue: pollution, habitat loss, or clean water.",
        "Describe what the problem does to people or wildlife.",
        "Add one action a community could take to help."
      ]
    },
    {
      id: "g5.spring.world.w7.d4.q5",
      type: "short_answer",
      stem: "Why do environmental problems like pollution often affect people far away from where they started? Give one example.",
      rubric: {
        level3: "Explains that air and water move from place to place, carrying pollution far away, AND gives a fitting example (a river carrying waste downstream, the ocean moving plastic, or wind carrying smog).",
        level2: "Gives a partial explanation OR an example, but not a clear link between them.",
        level1: "Restates the question or gives no real reason."
      },
      exemplar: "Air and water keep moving, so they carry pollution far from the source. For example, plastic dumped in one country's river can float in the ocean and wash up on a beach far away.",
      hintLadder: [
        "Do air and water stay in one place?",
        "How might a river or the ocean carry pollution?",
        "Give one example of pollution traveling far."
      ]
    }
  ],
  reflectionPrompt: "Of the world's environmental issues you explored today — pollution, habitat loss, clean water — which one will you write your persuasive piece about, and why does it matter to you?",
  misconceptionBank: [
    {
      id: "pollution-is-only-issue",
      label: "Thinks pollution is the only environmental problem",
      description: "Groups every environmental issue under 'pollution' and overlooks habitat loss or water shortages as separate problems.",
      coachMove: "Sort the issues: 'Is a forest being cut down the same as trash in a river? One is habitat loss, one is pollution — name which is which.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Which Would You Tackle First?",
      prompt:
        "Your town has two spring problems: (A) a river so polluted the fish are dying, or (B) the only forest nearby is about to be cleared for a parking lot. Which would you tackle first, and is each one pollution, habitat loss, or a water issue?",
      answer: "Either is a fair choice — the point is to name them: (A) is water pollution (and a clean-water issue), and (B) is habitat loss. Good responders explain WHY their pick is more urgent.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: World Environment News Report",
      challenge:
        "You are a reporter covering environmental issues around the world. Create a short news report that spotlights ONE real global issue (pollution, habitat loss, or clean water) and shows how a community is responding.",
      steps: [
        "Choose your issue and a place in the world where it is happening.",
        "Describe the problem clearly: what is harmed and who is affected.",
        "Report on how the community is responding — clean-ups, tree planting, new rules, wells or filters.",
        "End with a hopeful headline about the community's action."
      ],
      deliverable: "A short news report (written, drawn as a front page, or performed) that explains one global environmental issue and a community's response.",
      choiceBoard: [
        "Write a newspaper front page with a headline and article.",
        "Perform a 45-second 'news anchor' broadcast.",
        "Draw a labeled 'before and after' showing the problem and the community's fix."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Global Issues Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.world.w7.d4.arena1",
          type: "multiple_choice",
          stem: "Coral reefs around the world are dying, leaving many fish species without a home. This is mainly an example of:",
          choices: [
            "Habitat loss in the ocean",
            "A water shortage on land",
            "Too much clean water",
            "A community response"
          ],
          answerIndex: 0,
          explanation: "Reefs are the home (habitat) of many ocean animals; when reefs die, those animals lose their home — habitat loss.",
          hintLadder: [
            "A reef is a HOME for ocean animals.",
            "When their home is destroyed, what is that called?",
            "That is habitat loss."
          ]
        },
        {
          id: "g5.spring.world.w7.d4.arena2",
          type: "short_answer",
          stem: "A community's river gives them drinking water, but a nearby factory has been dumping chemicals into it. Name the environmental issue AND describe TWO different ways the community could respond.",
          rubric: {
            level3: "Correctly names the issue (water pollution / clean-water threat) AND gives two different, realistic community responses (for example, make rules to stop dumping, clean the river, build filters, or test the water).",
            level2: "Names the issue and gives one response, or gives two responses without clearly naming the issue.",
            level1: "Misses the issue or gives no real response."
          },
          exemplar: "This is water pollution that threatens their clean water. The community could ask for a rule that stops the factory from dumping, and they could get volunteers together to test and clean the river.",
          hintLadder: [
            "What part of the environment is being harmed — and what does the community need it for?",
            "Think of one rule they could ask for.",
            "Then think of one hands-on action they could take."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Around the World Stretch",
      prompt:
        "Take a spring 'journey around the world': reach east and west like ocean currents, bend low to 'plant a tree,' and sweep your arms wide to 'clear the smog.' Do each move slowly 4 times, breathing deeply.",
      scienceTieIn: "Gentle full-body movement boosts blood flow and oxygen to your brain, helping you feel alert and ready to think about big problems clearly.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Of the world's environmental issues you explored — pollution, habitat loss, clean water — which will you write your persuasive piece about, and why does it matter to you?",
      badge: { id: "g5-spring-global-earth-reporter", name: "Global Earth Reporter", emoji: "🌏" },
      estimatedMinutes: 7
    }
  }
};
