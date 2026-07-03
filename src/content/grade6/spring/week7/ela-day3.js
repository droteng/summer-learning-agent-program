// Grade 6 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 3. Topic: revising a persuasive piece — sharper word choice, addressing
// a counterargument, and ending with a strong call to action.

export const springG6ElaW7D3 = {
  id: "g6.spring.ela.w7.d3",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Revise a persuasive piece: word choice, counterargument, call to action",
  topicTag: "persuasive-revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.1.E", "CCSS.W.6.5"],
  hook: "You have a claim and evidence — now make it powerful. The best environmental writers revise: they sharpen their words, answer people who disagree, and end with a call to action that moves readers to do something. Today you turn a good draft into a strong voice for the Earth.",
  miniLesson: [
    "Strong word choice makes writing persuasive. Swap weak, vague words for precise, powerful ones: 'bad for animals' becomes 'deadly to sea turtles.'",
    "A counterargument names what someone who disagrees might say, then answers it. 'Some people say recycling costs too much — but the cost of cleaning polluted rivers is far higher.' Answering the other side makes you MORE convincing, not less.",
    "A call to action tells the reader exactly what to do: 'Sign the petition,' 'Bring a reusable bottle,' 'Email the mayor.' It gives your argument a clear next step."
  ],
  workedExample: {
    prompt: "Revise this weak ending: 'So the environment is bad and we should help. The end.'",
    steps: [
      "Sharpen the word choice: name the specific issue, not just 'the environment.'",
      "Add a counterargument and answer it: some people say one person cannot make a difference.",
      "Add a clear call to action: tell readers exactly what to do.",
      "Result: 'Some say one student cannot change much — but if every student brings a reusable bottle, we cut hundreds of plastic bottles a week. Start tomorrow: fill up, don't throw out.'"
    ],
    answer: "Some say one student cannot change much — but if every student brings a reusable bottle, we cut hundreds of plastic bottles a week. Start tomorrow: fill up, don't throw out."
  },
  items: [
    {
      id: "g6.spring.ela.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which revision uses the STRONGEST, most precise word choice?",
      choices: [
        "Pollution is bad for the water.",
        "Oil spills poison rivers and suffocate the fish that live in them.",
        "The water gets kind of messed up sometimes.",
        "Water stuff is not great."
      ],
      answerIndex: 1,
      explanation: "Precise, powerful verbs ('poison,' 'suffocate') and specific nouns make the writing vivid and convincing. The others are vague.",
      hintLadder: [
        "Look for precise, powerful verbs and specific nouns.",
        "Which one paints a clear, strong picture?",
        "'Poison' and 'suffocate' are far stronger than 'bad' or 'messed up.'"
      ]
    },
    {
      id: "g6.spring.ela.w7.d3.q2",
      type: "multiple_choice",
      stem: "What is a COUNTERARGUMENT in a persuasive piece?",
      choices: [
        "A restatement of your own claim.",
        "A point someone who disagrees might make, which you then answer.",
        "A list of your facts.",
        "The title of your essay."
      ],
      answerIndex: 1,
      explanation: "A counterargument names the other side's view and responds to it, which makes your argument stronger and fairer.",
      hintLadder: [
        "Think about what the OTHER side would say.",
        "It is not your point — it is theirs, and then your reply.",
        "You name their objection, then answer it."
      ],
      misconceptionsTargeted: ["counterargument-weakens"]
    },
    {
      id: "g6.spring.ela.w7.d3.q3",
      type: "multiple_choice",
      stem: "Which sentence is the strongest CALL TO ACTION to end an environmental piece?",
      choices: [
        "In conclusion, the environment is important to think about.",
        "Thank you for reading my essay.",
        "Bring a reusable bag to the store this week and ask your family to do the same.",
        "There are many issues in the world today."
      ],
      answerIndex: 2,
      explanation: "A call to action tells the reader a specific, doable next step. The others just summarize or thank the reader.",
      hintLadder: [
        "A call to action tells the reader what to DO.",
        "Which one gives a specific, doable step?",
        "The reusable-bag sentence asks for a real action."
      ]
    },
    {
      id: "g6.spring.ela.w7.d3.q4",
      type: "short_answer",
      stem: "Someone who disagrees with your environmental claim might raise an objection. Write ONE counterargument and a sentence that answers it.",
      rubric: {
        level3: "States a realistic objection someone who disagrees might make AND gives a clear, reasonable response that defends the claim.",
        level2: "States an objection or a response, but not both clearly, or the response does not really answer the objection.",
        level1: "Restates the claim or gives no real counterargument."
      },
      exemplar: "Some people say banning plastic bags is inconvenient — but reusable bags are cheap and last for years, so the small change is worth keeping plastic out of our rivers.",
      hintLadder: [
        "What would someone who disagrees say?",
        "Write that objection honestly.",
        "Then answer it in a way that defends your claim."
      ]
    },
    {
      id: "g6.spring.ela.w7.d3.q5",
      type: "short_answer",
      stem: "Why does answering a counterargument make your persuasive piece MORE convincing, not weaker?",
      rubric: {
        level3: "Explains that addressing the other side shows fairness/that you considered it, and by answering the objection you remove a reason for readers to reject your claim — building trust.",
        level2: "Gives a partial reason without the 'removes doubts / builds trust' idea.",
        level1: "Restates the question, or says it makes you weaker."
      },
      exemplar: "It shows you thought about the other side instead of ignoring it, so readers trust you more. And by answering the objection, you take away the main reason someone might disagree.",
      hintLadder: [
        "What does it show about you if you face the other side head-on?",
        "If you answer their objection, what happens to their reason to disagree?",
        "Connect it to trust and removing doubts."
      ]
    }
  ],
  reflectionPrompt: "Read your persuasive draft out loud. Where does it sound weak or vague? Circle two words you can make sharper, and think of one objection you still need to answer.",
  misconceptionBank: [
    {
      id: "counterargument-weakens",
      label: "Thinks mentioning the other side weakens the argument",
      description: "Believes bringing up an opposing view helps the other side, so avoids counterarguments entirely.",
      coachMove: "Reframe: 'When you answer their best objection, you leave them nothing to argue back — that makes you stronger, not weaker.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Weak Words or Strong Words?",
      prompt:
        "Two endings for an environmental speech: (A) 'We should probably try to help nature a little, I guess.' (B) 'Act now — plant a tree this spring and protect the air we all breathe.' Which one would actually move a crowd to do something, and what makes it stronger?",
      answer: "(B) — it uses precise, powerful words ('Act now,' 'protect') and a clear call to action ('plant a tree'). (A) is weak and vague, so it inspires no one to move.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Revise It Into a Rallying Speech",
      challenge:
        "Take the environmental draft you have been building and revise it into a short, powerful speech. Sharpen your words, add a counterargument you answer, and finish with a call to action that moves your audience.",
      steps: [
        "Read your draft out loud and circle 3 weak or vague words to replace with strong, precise ones.",
        "Add one sentence naming what someone who disagrees would say — then answer it.",
        "Write a closing call to action that tells listeners exactly what to do.",
        "Practice reading your revised speech out loud with confidence."
      ],
      deliverable: "A revised persuasive speech that shows sharper word choice, one answered counterargument, and a clear call to action.",
      choiceBoard: [
        "Perform your speech out loud to a family member or the mirror.",
        "Write a persuasive letter to a leader (mayor, principal) using the same revisions.",
        "Record a 45-second video message calling people to action for your cause."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Revision Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which sentence BEST combines a counterargument with an answer to it?",
          choices: [
            "Recycling is good and everyone should do it.",
            "Some say recycling takes too much effort, but sorting a few bins for five minutes a week keeps tons of waste out of landfills.",
            "I think recycling is really important.",
            "Landfills are getting very full these days."
          ],
          answerIndex: 1,
          explanation: "It names the objection ('takes too much effort') and answers it with a benefit, which is exactly how a counterargument works.",
          hintLadder: [
            "Look for the sentence that names the OTHER side, then replies.",
            "Which one uses a word like 'but' to answer an objection?",
            "The recycling-effort sentence names and answers the objection."
          ]
        },
        {
          id: "g6.spring.ela.w7.d3.arena2",
          type: "short_answer",
          stem: "Revise this weak closing into a strong one with precise word choice AND a call to action: 'So yeah, litter is kind of a problem and people should maybe pick it up.'",
          rubric: {
            level3: "Rewrites with precise, powerful word choice AND a clear, specific call to action that tells the reader exactly what to do.",
            level2: "Improves word choice OR adds a call to action, but not both clearly.",
            level1: "Stays vague or just restates the original."
          },
          exemplar: "Litter is choking our parks and clogging our streams. Join the clean-up this Saturday — grab a bag, fill it, and give our green spaces back their life.",
          hintLadder: [
            "Swap weak words like 'kind of' and 'maybe' for strong, precise ones.",
            "Name the specific harm litter causes.",
            "End with a clear action the reader can take."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Power Pose & Project",
      prompt:
        "Stand in a strong power pose — feet apart, hands on hips, chin up — for 20 seconds. Then deliver your call to action out loud to the room, projecting your voice. Shake out your arms and repeat once more, even bolder.",
      scienceTieIn: "Standing in a confident posture and using your full voice can reduce nervousness and help you speak with more conviction — useful for any real speech.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the single most powerful sentence in your revised piece? Write it here, and explain why it would move a reader to act.",
      badge: { id: "spring-revision-rallier", name: "Revision Rallier", emoji: "📣" },
      estimatedMinutes: 7
    }
  }
};
