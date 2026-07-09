// Grade 5 Summer Science — Week 5 (Earth and Inventions), Day 2.
// Grade-5 counterpart of g6.sci.w5.d2 (engineering design process), pitched down
// one level: simpler steps, shorter passages, vocab support, and a sentence
// frame for the writing item.

export const summerG5ScienceW5D2 = {
  id: "g5.summer.sci.w5.d2",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 2,
  subject: "Science",
  topic: "Engineering design process",
  topicTag: "engineering-design",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["NGSS.3-5-ETS1-1", "NGSS.3-5-ETS1-3"],
  hook: "Real inventors almost never get it right the first time! They follow a loop: figure out the problem, build a test model, try it, and make it better. Today you walk a tiny invention through that loop.",
  keyTerms: [
    { term: "Problem", definition: "The thing you are trying to fix or make better." },
    { term: "Criteria", definition: "The rules your fix must meet, like \"costs less than $5\" or \"holds 10 coins.\"" },
    { term: "Prototype", definition: "A first, quick model you build to test an idea." },
    { term: "Iterate", definition: "To try, learn what went wrong, change one thing, and try again." }
  ],
  miniLesson: [
    "First, name the problem clearly. Who has the trouble, and what would count as a good fix? Being specific helps.",
    "Next, think of many quick ideas. Pick one and build a prototype, which is a fast, simple test model. It does not have to be pretty.",
    "Then test your prototype, see what went wrong, change ONE thing, and try again. Trying, learning, and changing is called iterating."
  ],
  workedExample: {
    prompt:
      "Problem: my backpack pocket is too shallow, so my pens keep falling out. How can I use the design loop to fix it?",
    steps: [
      "Name the problem: pens fall out when the backpack tips over.",
      "Think of ideas: a longer flap, an elastic band, or a clip.",
      "Build the cheapest prototype first: a piece of elastic across the pocket.",
      "Test it. If the pens still fall, change one thing, like making the elastic tighter, and test again."
    ],
    answer: "Name the problem, build a cheap prototype, test it, then change one thing and try again."
  },
  items: [
    {
      id: "g5.summer.sci.w5.d2.q1",
      type: "multiple_choice",
      stem: "What is the FIRST step when you use the design loop?",
      choices: [
        "Name the problem you want to fix.",
        "Buy the most expensive materials.",
        "Build the final version right away.",
        "Give up if it is hard."
      ],
      answerIndex: 0,
      explanation: "If you do not know the problem, building is just guessing. Name the problem first, then work on a fix.",
      hintLadder: [
        "Before you build, you need to know what you are fixing.",
        "The first step is about the problem.",
        "You name the problem first."
      ]
    },
    {
      id: "g5.summer.sci.w5.d2.q2",
      type: "multiple_choice",
      stem: "Why do inventors build a cheap prototype before making the real thing?",
      choices: [
        "To make it look fancy.",
        "Because a teacher told them to.",
        "To test the idea cheaply before spending a lot.",
        "To slow the work down."
      ],
      answerIndex: 2,
      explanation: "A prototype is a cheap, simple test model. If it fails, you did not waste much, and you learned something to make it better.",
      hintLadder: [
        "A prototype is a quick, cheap test model.",
        "Why test in a cheap way first?",
        "So that failing is cheap and you learn early."
      ]
    },
    {
      id: "g5.summer.sci.w5.d2.q3",
      type: "multiple_choice",
      stem: "Your rubber-band car rolls only 1 meter, but you want it to roll 3 meters. What is the BEST next step?",
      choices: [
        "Give up on the car.",
        "Change one thing, like a tighter rubber band, then test again.",
        "Change five things all at once.",
        "Buy a store car instead."
      ],
      answerIndex: 1,
      explanation: "Change only ONE thing at a time. Then you can tell which change helped. This is the fair-test rule.",
      hintLadder: [
        "Remember the fair-test rule.",
        "If you change many things at once, you cannot tell what helped.",
        "Change one thing, then test again."
      ],
      misconceptionsTargeted: ["changes-many-things-at-once"]
    },
    {
      id: "g5.summer.sci.w5.d2.q4",
      type: "multiple_choice",
      stem: "What are \"criteria\" in the design loop?",
      choices: [
        "Random guesses.",
        "A kind of tool.",
        "The name of the inventor.",
        "The rules your finished fix must meet."
      ],
      answerIndex: 3,
      explanation: "Criteria are the must-meet rules, like \"costs less than $5\" or \"holds 10 coins.\" They tell you when your fix is good enough.",
      hintLadder: [
        "How do you know when your fix is good enough?",
        "Criteria are the rules the fix must pass.",
        "So criteria are the rules the finished fix must meet."
      ]
    },
    {
      id: "g5.summer.sci.w5.d2.q5",
      type: "short_answer",
      stem: "Pick a small problem at home (like tangled cords or a messy desk). Write TWO criteria your fix must meet. Use this frame: \"My fix must ___ and must ___ .\"",
      rubric: {
        level3: "Gives two clear criteria that you could actually check, and at least one includes a number (a cost, a time, or an amount).",
        level2: "Gives two criteria but both are a little vague.",
        level1: "Gives only one criterion, or the ideas are off topic."
      },
      exemplar:
        "Problem: tangled cords. My fix must cost less than $5 and must let me grab one cord in under 5 seconds.",
      hintLadder: [
        "A criterion is a rule your fix has to pass.",
        "Try to add a number, like a cost or a time.",
        "Finish the frame with two clear rules."
      ]
    }
  ],
  stretch: {
    stem: "Your paper bridge holds 5 coins, but you want 10. You make the paper thicker AND add tape AND fold it, all at once, and now it holds 10. Why is it hard to know which change actually helped?",
    answer: "Because you changed three things at the same time.",
    explanation: "When you change many things at once, you cannot tell which one made the difference. Change one thing at a time to know what helped."
  },
  reflectionPrompt: "Today you practiced the design loop. What is a tiny problem at home you would love to fix this summer?",
  misconceptionBank: [
    {
      id: "changes-many-things-at-once",
      label: "Changes many things at once",
      description: "Changes several parts of a design between tests, so it is impossible to tell which change helped.",
      coachMove: "Use the fair-test rule: change only one thing between tests, and write down what you changed each time."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather?",
      prompt:
        "Would you rather spend a whole week building ONE fancy invention, or build FIVE quick, rough ones in a day? Think like an inventor -- which way helps you learn faster?",
      answer:
        "Five quick ones wins! Cheap, fast builds let you fail early, learn from each try, and make the next one better. That is exactly what prototypes are for.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Run the Design Loop",
      challenge:
        "Pick a tiny problem, like earbuds that tangle or a door that slams. Walk it through the design loop: name the problem, write two rules (criteria), sketch two ideas, pick one, and describe the cheap prototype you would build first.",
      materials: ["Paper and pencil, OR a device to type or draw on"],
      steps: [
        "Name the problem and write two rules your fix must meet.",
        "Sketch two different ideas.",
        "Pick one idea and say why you chose it.",
        "Describe the cheapest, simplest prototype you could build to test it."
      ],
      deliverable: "A design-loop plan: the problem, two rules, two sketched ideas, your chosen idea, and a cheap prototype description.",
      choiceBoard: [
        "Sketch the ideas and write the plan.",
        "Build a real prototype from cardboard or tape and tell how you would test it.",
        "Make a 4-panel comic showing name it, build it, test it, fix it."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Design Loop Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.sci.w5.d2.arena1",
          type: "multiple_choice",
          stem: "Your paper tower falls over at 4 blocks. You want it to hold 8 blocks. You make the base wider AND add tape AND use thicker paper all at once, and now it holds 8. What is the PROBLEM with how you tested?",
          choices: [
            "Nothing -- it worked, so it is fine.",
            "Paper towers can never be tested.",
            "You should have stopped at 4 blocks.",
            "You changed several things at once, so you cannot tell which change helped."
          ],
          answerIndex: 3,
          explanation: "Changing several things at once breaks the fair-test rule. You cannot tell which change helped, so you cannot repeat it on purpose next time.",
          hintLadder: [
            "Remember the fair-test rule.",
            "How many things did you change between tests?",
            "Change only one thing at a time so you know what helped."
          ]
        },
        {
          id: "g5.summer.sci.w5.d2.arena2",
          type: "short_answer",
          stem: "An inventor is designing a lunchbox that keeps food cold. Write TWO clear rules (criteria) the finished lunchbox must meet. Try to put a number in at least one.",
          rubric: {
            level3: "Two clear rules you could actually check, and at least one has a number (a time, a temperature, an amount, or a cost).",
            level2: "Two rules but both are a little vague (like \"works well\").",
            level1: "Only one rule, or the ideas are not really rules you could check."
          },
          exemplar: "1) It must keep food cold for at least 4 hours. 2) It must fit inside a normal backpack.",
          hintLadder: [
            "A criterion is a rule the lunchbox must pass.",
            "Add a number, like a time or an amount.",
            "Write two clear rules."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Prototype Poses",
      prompt:
        "Stand up and act out inventing something in 4 quick poses: think (hand on chin), sketch (draw in the air), build (hammer it), and test (launch it!). Hold each pose for 5 seconds.",
      scienceTieIn: "Short bursts of movement send more oxygen to your brain, which helps you focus for the careful testing that inventors do.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time you got something right only after a few tries. What did each try teach you for the next one?",
      badge: { id: "g5-summer-junior-inventor", name: "Junior Inventor", emoji: "🛠️" },
      estimatedMinutes: 7
    }
  }
};
