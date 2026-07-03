// Grade 5 ELA/Writing — Fall Expedition, Week 5 (Persuasive Voices), Day 5.
// Grade 5 counterpart of g6.fall.ela.w5.d5. Week capstone: revise a persuasive
// letter. Pitched down to Grade 5: simple revise-vs-edit language, call-to-
// action frame, extra scaffolding for ages 10–11.

export const fallG5ElaW5D5 = {
  id: "g5.fall.ela.w5.d5",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Revise your persuasive letter",
  topicTag: "revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.5", "CCSS.ELA-LITERACY.W.5.1.D"],
  hook: "Strong writing is not written — it is REwritten. Today you revise a persuasive letter: make the claim clearer, fix weak support, and add an ending that asks the reader to DO something.",
  miniLesson: [
    "Revising is not the same as editing. Editing fixes spelling and grammar. Revising makes the IDEAS and support better.",
    "Check the backbone: Is the claim clear? Does each reason have real evidence? Is anything off the topic?",
    "End persuasive writing with a call to action — tell the reader exactly what you want them to do."
  ],
  workedExample: {
    prompt: "A letter ends: 'So that is my opinion.' Make it a call to action.",
    steps: [
      "A weak ending just stops; a strong one asks for something.",
      "Name the exact action you want.",
      "Make it clear and easy to do.",
      "Result: 'Please add a crosswalk by the park before winter — our kids cross there every day.'"
    ],
    answer: "Please add a crosswalk by the park before winter — our kids cross there every day."
  },
  items: [
    {
      id: "g5.fall.ela.w5.d5.q1",
      type: "multiple_choice",
      stem: "What is the difference between REVISING and EDITING?",
      choices: [
        "They are the same thing",
        "Revising makes the ideas and support better; editing fixes spelling and grammar",
        "Editing makes ideas better; revising fixes commas",
        "Neither one matters"
      ],
      answerIndex: 1,
      explanation: "Revising reworks the ideas; editing cleans up spelling and grammar.",
      hintLadder: [
        "One is about ideas, the other about spelling and grammar.",
        "Which one fixes spelling and punctuation?",
        "Revising = ideas; editing = grammar."
      ]
    },
    {
      id: "g5.fall.ela.w5.d5.q2",
      type: "multiple_choice",
      stem: "Your letter has a sentence about your weekend that does not fit the claim. When you revise, you should...",
      choices: [
        "Keep it to make the letter longer",
        "Cut it — off-topic sentences make the argument weaker",
        "Make it longer",
        "Move it to the beginning"
      ],
      answerIndex: 1,
      explanation: "An off-topic sentence pulls attention away from your argument; cutting it makes the letter stronger.",
      hintLadder: [
        "Does that sentence support the claim?",
        "What should you do with a sentence that does not help?",
        "Cut what is off-topic."
      ],
      misconceptionsTargeted: ["longer-is-better"]
    },
    {
      id: "g5.fall.ela.w5.d5.q3",
      type: "multiple_choice",
      stem: "Which is the strongest CALL TO ACTION to end a persuasive letter?",
      choices: [
        "Thanks for reading.",
        "That is all.",
        "Please say yes to the recycling program at next week's meeting.",
        "I have many opinions."
      ],
      answerIndex: 2,
      explanation: "It tells the reader exactly what to do and when — a clear call to action.",
      hintLadder: [
        "A call to action asks for something exact.",
        "Which one names an action and a time?",
        "The 'say yes next week' ending."
      ]
    },
    {
      id: "g5.fall.ela.w5.d5.q4",
      type: "short_answer",
      stem: "Here is a weak supporting sentence: 'A later start would be good.' Revise it to be more exact and add evidence.",
      rubric: {
        level3: "Rewrites it to be exact AND adds a real benefit or piece of evidence.",
        level2: "Makes it more exact OR adds evidence, but not both.",
        level1: "Still vague with no evidence."
      },
      exemplar: "A 30-minute later start would give students more sleep, and kids who sleep more pay better attention in class.",
      hintLadder: [
        "What exactly would be 'good,' and by how much?",
        "Add a real benefit or fact.",
        "Make it exact AND supported."
      ]
    },
    {
      id: "g5.fall.ela.w5.d5.q5",
      type: "short_answer",
      stem: "Write the final two sentences of YOUR persuasive letter: one sentence that sums up your claim, and one clear call to action.",
      rubric: {
        level3: "A clear one-sentence summary of the writer's claim AND a specific, doable call to action.",
        level2: "Has a summary and an action but one is vague.",
        level1: "Missing the claim summary or the call to action."
      },
      exemplar: "A crosswalk by the park would keep dozens of kids safe every afternoon. Please approve it before winter, when the early dark makes the crossing even harder to see.",
      hintLadder: [
        "Sum up your main claim in one sentence.",
        "Then ask for one exact action.",
        "Make the action clear and easy to do."
      ]
    }
  ],
  reflectionPrompt: "Read your letter aloud one last time. What is the one change that made it the most convincing this week?",
  misconceptionBank: [
    {
      id: "longer-is-better",
      label: "Thinks a longer letter is always more persuasive",
      description: "Adds extra sentences just for length even when they do not support the claim.",
      coachMove: "Have them mark each sentence 'does this support my claim?' — cut every 'no.' Short and focused persuades more."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Revise or Edit?",
      prompt:
        "Your fall letter has a fuzzy main argument AND three misspelled words. Would you rather fix the spelling first, or make the argument stronger first? Explain which one actually makes the letter more convincing.",
      answer: "Make the argument stronger first — that is revising, and it changes whether you persuade anyone. Fixing spelling (editing) matters too, but a perfectly spelled weak argument still will not convince.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Before-and-After Revision Tree",
      challenge:
        "Take one weak sentence from your letter and grow it, like a tree trading summer leaves for stronger fall ones. Show the 'before' (weak) version and the 'after' (revised) version side by side, plus what you changed and why.",
      steps: [
        "Pick one weak or vague sentence from your draft.",
        "Write the 'before' version on the left.",
        "Revise it: make it exact, add evidence, or cut what is off-topic.",
        "Write the 'after' version on the right and label what you improved."
      ],
      deliverable: "A before-and-after page showing one sentence revised, with a note on what changed and why it is stronger.",
      choiceBoard: [
        "Make a two-column before/after chart.",
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
          id: "g5.fall.ela.w5.d5.arena1",
          type: "multiple_choice",
          stem: "A persuasive letter ends: 'Anyway, that is what I think. Bye.' Which revision is the strongest CALL TO ACTION?",
          choices: [
            "'Thanks for reading my letter.'",
            "'I have lots of feelings about this.'",
            "'Please say yes to the fall recycling program at next Tuesday's school meeting.'",
            "'The end.'"
          ],
          answerIndex: 2,
          explanation: "A strong call to action names an exact action and when to do it. The others just stop without asking for anything.",
          hintLadder: [
            "A call to action asks the reader to DO something exact.",
            "Which one names both an action and a time?",
            "The 'say yes next Tuesday' ending."
          ]
        },
        {
          id: "g5.fall.ela.w5.d5.arena2",
          type: "short_answer",
          stem: "Revise this weak supporting sentence to be more exact and add evidence: 'A fall festival would be fun.'",
          rubric: {
            level3: "Rewrites it to be exact AND adds a real benefit or piece of evidence.",
            level2: "Makes it more exact OR adds evidence, but not both.",
            level1: "Still vague with no evidence."
          },
          exemplar: "A fall festival would raise money for our library — last year's bake sale brought in $400, and a full festival could bring in even more while bringing families together.",
          hintLadder: [
            "What exactly would the festival do, and how much?",
            "Add a real benefit or number.",
            "Make it exact AND supported."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Falling-Leaf Breath",
      prompt:
        "Imagine a leaf drifting slowly down from a tall fall tree. Breathe in for 4 counts as it lifts on the breeze, and out for 6 slow counts as it settles to the ground. Repeat 5 times.",
      scienceTieIn: "Making your breath out longer than your breath in turns on the body's 'calm' system, so you can look at your work again with fresh eyes.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Read your finished letter aloud one last time. What one change this week made it the most convincing — and how do you know?",
      badge: { id: "g5-fall-revision-master", name: "Revision Master", emoji: "✏️" },
      estimatedMinutes: 7
    }
  }
};
