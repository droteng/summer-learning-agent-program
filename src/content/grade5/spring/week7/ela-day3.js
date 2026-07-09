// Grade 5 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 3. Topic: revising a persuasive piece — sharper word choice, answering
// one objection, and ending with a strong call to action.
// Grade 5 depth: paragraph frames, one objection to answer, short passages.

export const springG5ElaW7D3 = {
  id: "g5.spring.ela.w7.d3",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Revise a persuasive piece: word choice, answering an objection, call to action",
  topicTag: "persuasive-revision",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1.D", "CCSS.ELA-LITERACY.W.5.5"],
  hook: "You have a claim and evidence — now make it powerful. The best environmental writers revise: they choose sharper words, answer people who disagree, and end with a call to action that tells readers exactly what to do. Today you turn a good draft into a strong voice for the Earth.",
  miniLesson: [
    "Strong word choice makes writing persuasive. Swap weak, fuzzy words for clear, powerful ones: 'bad for animals' becomes 'deadly to sea turtles.'",
    "Answering an objection means naming what someone who disagrees might say, then answering it. Try the frame: 'Some people say ___, but ___.' Answering the other side makes you MORE convincing, not less.",
    "A call to action tells the reader exactly what to do: 'Bring a reusable bottle,' 'Join the clean-up,' 'Ask your family to recycle.' It gives your argument a clear next step."
  ],
  workedExample: {
    prompt: "Revise this weak ending: 'So the environment is bad and we should help. The end.'",
    steps: [
      "Sharpen the word choice: name the specific issue, not just 'the environment.'",
      "Answer an objection with the frame 'Some people say ___, but ___.'",
      "Add a clear call to action: tell readers exactly what to do.",
      "Result: 'Some say one student cannot change much, but if every student brings a reusable bottle, we cut hundreds of plastic bottles a week. Start tomorrow: fill up, do not throw out.'"
    ],
    answer: "Some say one student cannot change much, but if every student brings a reusable bottle, we cut hundreds of plastic bottles a week. Start tomorrow: fill up, do not throw out."
  },
  items: [
    {
      id: "g5.spring.ela.w7.d3.q1",
      type: "multiple_choice",
      stem: "Which revision uses the STRONGEST, clearest word choice?",
      choices: [
        "Pollution is bad for the water.",
        "Water stuff is not great.",
        "The water gets kind of messed up sometimes.",
        "Oil spills poison rivers and harm the fish that live in them."
      ],
      answerIndex: 3,
      explanation: "Clear, powerful words ('poison,' 'harm') and specific nouns make the writing vivid and convincing. The others are fuzzy.",
      hintLadder: [
        "Look for clear, powerful verbs and specific nouns.",
        "Which one paints a clear, strong picture?",
        "'Poison' and 'harm' are far stronger than 'bad' or 'messed up.'"
      ]
    },
    {
      id: "g5.spring.ela.w7.d3.q2",
      type: "multiple_choice",
      stem: "In a persuasive piece, what does it mean to ANSWER AN OBJECTION?",
      choices: [
        "You repeat your own claim again.",
        "You name a point that someone who disagrees might make, then you answer it.",
        "You list all of your facts.",
        "You write the title of your essay."
      ],
      answerIndex: 1,
      explanation: "Answering an objection means naming the other side's point and responding to it, which makes your argument stronger and fairer.",
      hintLadder: [
        "Think about what the OTHER side would say.",
        "It is not your point — it is theirs, and then your reply.",
        "You name their objection, then answer it."
      ],
      misconceptionsTargeted: ["objection-weakens"]
    },
    {
      id: "g5.spring.ela.w7.d3.q3",
      type: "multiple_choice",
      stem: "Which sentence is the strongest CALL TO ACTION to end an environmental piece?",
      choices: [
        "Bring a reusable bag to the store this week and ask your family to do the same.",
        "Thank you for reading my essay.",
        "In conclusion, the environment is important to think about.",
        "There are many issues in the world today."
      ],
      answerIndex: 0,
      explanation: "A call to action tells the reader a specific, doable next step. The others just wrap up or thank the reader.",
      hintLadder: [
        "A call to action tells the reader what to DO.",
        "Which one gives a specific, doable step?",
        "The reusable-bag sentence asks for a real action."
      ]
    },
    {
      id: "g5.spring.ela.w7.d3.q4",
      type: "short_answer",
      stem: "Someone who disagrees with your environmental claim might raise an objection. Write ONE objection and a sentence that answers it. Try the frame 'Some people say ___, but ___.'",
      rubric: {
        level3: "States a realistic objection someone who disagrees might make AND gives a clear, reasonable answer that defends the claim.",
        level2: "States an objection or an answer, but not both clearly, or the answer does not really respond to the objection.",
        level1: "Restates the claim or gives no real objection."
      },
      exemplar: "Some people say reusable bags are a hassle, but they are cheap and last for years, so the small change is worth keeping plastic out of our rivers.",
      hintLadder: [
        "What would someone who disagrees say?",
        "Write that objection honestly with 'Some people say ___.'",
        "Then answer it with 'but ___' to defend your claim."
      ]
    },
    {
      id: "g5.spring.ela.w7.d3.q5",
      type: "short_answer",
      stem: "Why does answering an objection make your persuasive piece MORE convincing, not weaker?",
      rubric: {
        level3: "Explains that answering the other side shows you thought about it fairly, and by answering the objection you take away a reason for readers to disagree — building trust.",
        level2: "Gives a partial reason without the 'removes doubts / builds trust' idea.",
        level1: "Restates the question, or says it makes you weaker."
      },
      exemplar: "It shows you thought about the other side instead of ignoring it, so readers trust you more. And by answering their objection, you take away the main reason someone might disagree.",
      hintLadder: [
        "What does it show if you face the other side head-on?",
        "If you answer their objection, what happens to their reason to disagree?",
        "Connect it to trust and removing doubts."
      ]
    }
  ],
  reflectionPrompt: "Read your persuasive draft out loud. Where does it sound weak or fuzzy? Circle two words you can make sharper, and think of one objection you still need to answer.",
  misconceptionBank: [
    {
      id: "objection-weakens",
      label: "Thinks mentioning the other side weakens the argument",
      description: "Believes bringing up an opposing view helps the other side, so avoids answering objections entirely.",
      coachMove: "Reframe: 'When you answer their best objection, you leave them nothing to argue back — that makes you stronger, not weaker.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Weak Words or Strong Words?",
      prompt:
        "Two endings for an environmental speech: (A) 'We should probably try to help nature a little, I guess.' (B) 'Act now — plant a tree this spring and protect the air we all breathe.' Which one would actually move a crowd to do something, and what makes it stronger?",
      answer: "(B) — it uses clear, powerful words ('Act now,' 'protect') and a real call to action ('plant a tree'). (A) is weak and fuzzy, so it inspires no one to move.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Revise It Into a Rallying Speech",
      challenge:
        "Take the environmental draft you have been building and revise it into a short, powerful speech. Sharpen your words, answer one objection, and finish with a call to action that moves your audience.",
      steps: [
        "Read your draft out loud and circle 3 weak or fuzzy words to replace with strong, clear ones.",
        "Add one sentence naming what someone who disagrees would say — then answer it with 'but ___.'",
        "Write a closing call to action that tells listeners exactly what to do.",
        "Practice reading your revised speech out loud with confidence."
      ],
      deliverable: "A revised persuasive speech that shows sharper word choice, one answered objection, and a clear call to action.",
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
          id: "g5.spring.ela.w7.d3.arena1",
          type: "multiple_choice",
          stem: "Which sentence BEST names an objection and answers it?",
          choices: [
            "Recycling is good and everyone should do it.",
            "I think recycling is really important.",
            "Some say recycling takes too much effort, but sorting a few bins for five minutes a week keeps a lot of waste out of landfills.",
            "Landfills are getting very full these days."
          ],
          answerIndex: 2,
          explanation: "It names the objection ('takes too much effort') and answers it with a benefit — exactly how you answer an objection.",
          hintLadder: [
            "Look for the sentence that names the OTHER side, then replies.",
            "Which one uses the word 'but' to answer an objection?",
            "The recycling-effort sentence names and answers the objection."
          ]
        },
        {
          id: "g5.spring.ela.w7.d3.arena2",
          type: "short_answer",
          stem: "Revise this weak closing into a strong one with clear word choice AND a call to action: 'So yeah, litter is kind of a problem and people should maybe pick it up.'",
          rubric: {
            level3: "Rewrites with clear, powerful word choice AND a specific call to action that tells the reader exactly what to do.",
            level2: "Improves word choice OR adds a call to action, but not both clearly.",
            level1: "Stays fuzzy or just restates the original."
          },
          exemplar: "Litter is choking our parks and clogging our streams. Join the clean-up this Saturday — grab a bag, fill it, and give our green spaces back their life.",
          hintLadder: [
            "Swap weak words like 'kind of' and 'maybe' for strong, clear ones.",
            "Name the specific harm litter causes.",
            "End with a clear action the reader can take."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Power Pose and Project",
      prompt:
        "Stand in a strong power pose — feet apart, hands on hips, chin up — for 20 seconds. Then say your call to action out loud to the room, projecting your voice. Shake out your arms and repeat once more, even bolder.",
      scienceTieIn: "Standing in a confident posture and using your full voice can lower nervousness and help you speak with more conviction — useful for any real speech.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is the single most powerful sentence in your revised piece? Write it here, and explain why it would move a reader to act.",
      badge: { id: "g5-spring-revision-rallier", name: "Revision Rallier", emoji: "📣" },
      estimatedMinutes: 7
    }
  }
};
