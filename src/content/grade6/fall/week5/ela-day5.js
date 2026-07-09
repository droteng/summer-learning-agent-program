// Grade 6 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 5.
// Topic: revise your persuasive letter. Week capstone — bring claim, reasons,
// evidence, and audience together, then improve a draft.

export const fallG6ElaW5D5 = {
  id: "g6.fall.ela.w5.d5",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Revise your persuasive letter",
  topicTag: "revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.5", "CCSS.W.6.1.E"],
  hook: "Strong writing isn't written — it's rewritten. Today you revise a persuasive draft: sharpen the claim, strengthen weak support, and add a closing that asks for action.",
  miniLesson: [
    "Revising is different from editing: editing fixes spelling and grammar; revising improves ideas, support, and clarity.",
    "Check the backbone: is the claim clear? Does each reason have real evidence? Is anything off-topic?",
    "End persuasive writing with a call to action — tell the reader exactly what you want them to do."
  ],
  workedExample: {
    prompt: "A draft ends: 'So that's my opinion.' Improve the ending into a call to action.",
    steps: [
      "A weak ending just stops; a strong one asks for something.",
      "Name the specific action you want.",
      "Make it direct and doable.",
      "Result: 'Please add a crosswalk by the park before winter — our kids cross there every day.'"
    ],
    answer: "Please add a crosswalk by the park before winter — our kids cross there every day."
  },
  items: [
    {
      id: "g6.fall.ela.w5.d5.q1",
      type: "multiple_choice",
      stem: "What's the difference between REVISING and EDITING?",
      choices: [
        "They're the same thing",
        "Neither matters",
        "Editing improves ideas; revising fixes commas",
        "Revising improves ideas and support; editing fixes spelling and grammar"
      ],
      answerIndex: 3,
      explanation: "Revising reworks content and clarity; editing cleans up mechanics.",
      hintLadder: [
        "One is about ideas, the other about mechanics.",
        "Which fixes spelling and punctuation?",
        "Revising = ideas; editing = grammar."
      ]
    },
    {
      id: "g6.fall.ela.w5.d5.q2",
      type: "multiple_choice",
      stem: "Your draft has a sentence about your weekend that isn't related to the claim. In revision you should...",
      choices: [
        "Keep it for length",
        "Cut it — off-topic sentences weaken the argument",
        "Make it longer",
        "Move it to the start"
      ],
      answerIndex: 1,
      explanation: "Off-topic content distracts from your argument; cutting it strengthens the piece.",
      hintLadder: [
        "Does it support the claim?",
        "What do you do with support that isn't support?",
        "Cut what's off-topic."
      ],
      misconceptionsTargeted: ["longer-is-better"]
    },
    {
      id: "g6.fall.ela.w5.d5.q3",
      type: "multiple_choice",
      stem: "Which is the strongest CALL TO ACTION to end a persuasive letter?",
      choices: [
        "Please vote yes on the recycling program at next week's meeting.",
        "That is all.",
        "Thanks for reading.",
        "I have many opinions."
      ],
      answerIndex: 0,
      explanation: "It tells the reader exactly what to do and when — a clear call to action.",
      hintLadder: [
        "A call to action asks for something specific.",
        "Which one names an action and a time?",
        "The 'vote yes next week' ending."
      ]
    },
    {
      id: "g6.fall.ela.w5.d5.q4",
      type: "short_answer",
      stem: "Here's a weak supporting sentence: 'A later start would be good.' Revise it to be specific and add evidence.",
      rubric: {
        level3: "Rewrites it specifically AND adds concrete evidence or a concrete benefit.",
        level2: "More specific OR adds evidence, but not both.",
        level1: "Still vague with no evidence."
      },
      exemplar: "A 30-minute later start would give students more sleep; sleep studies show teens who get an extra half hour focus better and miss fewer classes.",
      hintLadder: [
        "What exactly would be 'good,' and by how much?",
        "Add a concrete benefit or fact.",
        "Make it specific + supported."
      ]
    },
    {
      id: "g6.fall.ela.w5.d5.q5",
      type: "short_answer",
      stem: "Write the final two sentences of YOUR persuasive letter: a one-sentence summary of your claim, and a clear call to action.",
      rubric: {
        level3: "A crisp restatement of the writer's claim AND a specific, doable call to action.",
        level2: "Has a summary and an action but one is vague.",
        level1: "Missing the claim summary or the call to action."
      },
      exemplar: "A crosswalk by the park would keep dozens of kids safe every afternoon. Please approve it before the winter, when early darkness makes the crossing even more dangerous.",
      hintLadder: [
        "Restate your main claim in one sentence.",
        "Then ask for a specific action.",
        "Make the action clear and doable."
      ]
    }
  ],
  reflectionPrompt: "Read your letter aloud one last time. What's the single change that made it most convincing this week?",
  misconceptionBank: [
    {
      id: "longer-is-better",
      label: "Thinks a longer letter is automatically more persuasive",
      description: "Adds extra sentences for length even when they don't support the claim.",
      coachMove: "Have them mark each sentence 'supports the claim?' — cut every 'no.' Tight and focused persuades more."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Revise or Edit?",
      prompt:
        "Your fall letter has a fuzzy main argument AND three misspelled words. Would you rather fix the spelling first, or strengthen the argument first? Explain which actually makes the letter more convincing.",
      answer: "Strengthen the argument first — that's revising, and it changes whether you persuade anyone. Spelling (editing) matters, but a perfectly spelled weak argument still won't convince.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Before-and-After Revision Tree",
      challenge:
        "Take one weak sentence from your persuasive letter and grow it like a tree losing summer leaves for stronger fall ones. Show the 'before' (weak) version and the 'after' (revised) version side by side, plus what you changed and why.",
      steps: [
        "Pick one weak or vague sentence from your draft.",
        "Write the 'before' version on the left.",
        "Revise it: make it specific, add evidence, or cut what's off-topic.",
        "Write the 'after' version on the right and label what you improved."
      ],
      deliverable: "A before-and-after page showing one sentence revised, with a note on what changed and why it's stronger.",
      choiceBoard: [
        "Make a two-column before/after revision chart.",
        "Draw a 'revision tree' dropping weak words and growing strong ones.",
        "Record a 30-second clip reading the before and after aloud."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.fall.ela.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A persuasive letter ends: 'Anyway, that's what I think. Bye.' Which revision is the strongest CALL TO ACTION?",
          choices: [
            "'Thanks for reading my letter.'",
            "'I have lots of feelings about this.'",
            "'Please approve the fall recycling program at next Tuesday's school board meeting.'",
            "'The end.'"
          ],
          answerIndex: 2,
          explanation: "A strong call to action names a specific action and when to do it. The others just stop without asking for anything.",
          hintLadder: [
            "A call to action asks the reader to DO something specific.",
            "Which option names both an action and a time?",
            "The 'approve the program next Tuesday' ending."
          ]
        },
        {
          id: "g6.fall.ela.w5.d5.arena2",
          type: "short_answer",
          stem: "Revise this weak supporting sentence to be specific and add evidence: 'A fall festival would be fun.'",
          rubric: {
            level3: "Rewrites it specifically AND adds concrete evidence or a concrete benefit.",
            level2: "More specific OR adds evidence, but not both.",
            level1: "Still vague with no evidence."
          },
          exemplar: "A fall festival would raise money for our library — last year's bake sale alone brought in $400, and a full festival could double that while bringing families together.",
          hintLadder: [
            "What exactly would the festival do, and how much?",
            "Add a concrete benefit or number.",
            "Make it specific + supported."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Falling-Leaf Breath",
      prompt:
        "Imagine a leaf drifting slowly down from a tall fall tree. Breathe in for 4 counts as it lifts on the breeze, and out for 6 slow counts as it settles to the ground. Repeat 5 times.",
      scienceTieIn: "Making your exhale longer than your inhale switches on the body's 'rest' system, calming your mind so you can review your work with fresh eyes.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Read your finished letter aloud one last time. What single revision this week made it the most convincing — and how do you know?",
      badge: { id: "fall-revision-master", name: "Revision Master", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
