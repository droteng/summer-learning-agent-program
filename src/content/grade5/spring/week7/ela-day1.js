// Grade 5 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 1. Topic: making a clear claim about an environmental issue — the start
// of your persuasive piece about the environment.
// Grade 5 depth: paragraph frames, simple word choice, one-issue claims.

export const springG5ElaW7D1 = {
  id: "g5.spring.ela.w7.d1",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Make a claim about an environmental issue",
  topicTag: "persuasive-environmental-claim",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.1", "CCSS.ELA-LITERACY.W.5.1.A"],
  hook: "Spring is the season of new leaves and new life — and a great time to speak up for the planet. When you want to convince people, you start with a claim: one sentence that says what you believe and what should change. Today you learn to write a claim that gives the Earth a voice.",
  miniLesson: [
    "A claim is one sentence that takes a side. It tells what you think should happen, like 'Our school should recycle its paper.'",
    "A strong claim uses a frame: 'Our ___ should ___ because it helps the Earth.' It names a real problem (trash, pollution, water) AND a real action. 'Pollution is bad' is too fuzzy; 'Our class should start a recycling bin' is a claim you can argue.",
    "A claim is not a fact everyone agrees with, and it is not just a feeling. Someone should be able to say 'I disagree' — that is how you know it is a claim you can persuade about."
  ],
  workedExample: {
    prompt: "Turn this weak topic into a strong claim: 'litter.'",
    steps: [
      "Pick one side about litter — is it a problem we should fix?",
      "Use the frame: 'Our ___ should ___.'",
      "Name a real action someone could take.",
      "Result: 'Our school should hold a park clean-up once a month to pick up litter.'"
    ],
    answer: "Our school should hold a park clean-up once a month to pick up litter."
  },
  items: [
    {
      id: "g5.spring.ela.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is a CLAIM about the environment (a side you could argue)?",
      choices: [
        "Trees are living things.",
        "Rivers have water in them.",
        "It rained yesterday.",
        "Our town should plant more trees to clean the air."
      ],
      answerIndex: 3,
      explanation: "It takes a side about an action that someone could agree or disagree with — that is a claim. The others are facts nobody argues about.",
      hintLadder: [
        "A claim is something you could argue for or against.",
        "Which one tells what SHOULD happen?",
        "The tree-planting sentence takes a side."
      ]
    },
    {
      id: "g5.spring.ela.w7.d1.q2",
      type: "multiple_choice",
      stem: "Why is 'The environment is important' a weak claim?",
      choices: [
        "Almost everyone already agrees with it, so there is nothing to argue and no action to take.",
        "It is too long.",
        "It is a made-up fact.",
        "It has no verb."
      ],
      answerIndex: 0,
      explanation: "A claim needs to be arguable and point to a real change. If everyone already agrees, you have nothing to persuade about.",
      hintLadder: [
        "Would anyone actually disagree with this sentence?",
        "Does it tell what should change?",
        "A claim needs to be arguable and specific."
      ],
      misconceptionsTargeted: ["vague-equals-claim"]
    },
    {
      id: "g5.spring.ela.w7.d1.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST claim about the environment?",
      choices: [
        "Things should be better outside.",
        "Our town should protect the wetland by the river instead of building a parking lot.",
        "Water is wet.",
        "I like nature."
      ],
      answerIndex: 1,
      explanation: "It is specific, takes a clear side, names a real issue (animal habitat), and you could back it up with reasons.",
      hintLadder: [
        "Look for specific + a side + a real action.",
        "Which one could you back up with reasons?",
        "The wetland sentence takes a clear side."
      ]
    },
    {
      id: "g5.spring.ela.w7.d1.q4",
      type: "short_answer",
      stem: "Write one strong claim about an environmental issue you would like to change. Try the frame: 'Our ___ should ___ because ___.'",
      rubric: {
        level3: "States a specific claim about a real environmental issue (trash, pollution, habitat, water, energy) that names a change and could be argued.",
        level2: "Takes a side but is vague, or names an issue without a clear action.",
        level1: "States a fact, a general feeling, or something not arguable."
      },
      exemplar: "Our park should add recycling bins so plastic bottles stop ending up in the creek.",
      hintLadder: [
        "Pick an environmental issue you care about.",
        "Name the change you want.",
        "Make sure someone could disagree with it."
      ]
    },
    {
      id: "g5.spring.ela.w7.d1.q5",
      type: "short_answer",
      stem: "What is the difference between a CLAIM and a FACT? Give one environmental example of each.",
      rubric: {
        level3: "Clearly explains that a fact can be checked and everyone agrees, while a claim takes a side you can argue, AND gives a correct environmental example of each.",
        level2: "Explains the difference but one example is off, or the difference is fuzzy.",
        level1: "Mixes up the two or gives no clear examples."
      },
      exemplar: "A fact is something you can check, like 'plastic takes a very long time to break down.' A claim takes a side you can argue, like 'our school should ban plastic straws.'",
      hintLadder: [
        "Can everyone check a fact?",
        "Can people disagree with a claim?",
        "Give one environmental example of each."
      ]
    }
  ],
  reflectionPrompt: "What environmental issue do you really want to argue for this spring? Save your claim — you will build a whole persuasive piece around it this week.",
  misconceptionBank: [
    {
      id: "vague-equals-claim",
      label: "Thinks a vague slogan is a strong claim",
      description: "Believes broad statements like 'save the planet' count as arguable claims, when they name no specific issue or action.",
      coachMove: "Ask: 'What exactly should change, and could anyone disagree?' Push for a specific issue AND a specific action."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Claim or Just a Feeling?",
      prompt:
        "Two spring sentences: (A) 'Nature is pretty in spring.' (B) 'Our class should start a garden to grow food and help bees.' Which one is a CLAIM you could argue with reasons — and which is just a nice feeling?",
      answer: "(B) is a claim — you can back it up with reasons (food, bees, learning). (A) is a feeling almost everyone shares, so there is nothing to argue.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Voice for the Earth Poster",
      challenge:
        "Pick one environmental issue you care about this spring. Make a poster whose big headline is a strong, clear claim — bold enough to read from across the room.",
      steps: [
        "Brainstorm an environmental issue you care about (trash, water, habitat, air).",
        "Write it as ONE claim sentence using the frame 'Our ___ should ___.'",
        "Check: could someone disagree? If not, make it sharper.",
        "Design the poster with your claim as the giant headline and one picture that fits."
      ],
      deliverable: "A campaign poster (drawn or typed) with one clear, arguable environmental claim as its headline.",
      choiceBoard: [
        "Draw a poster with your claim as the headline.",
        "Record a 20-second slogan built around your claim.",
        "Make a 3-panel comic where a character turns a fuzzy feeling into a strong claim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Earth Claim Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.ela.w7.d1.arena1",
          type: "multiple_choice",
          stem: "Which sentence is the STRONGEST claim about the environment?",
          choices: [
            "The ocean is big.",
            "I think oceans are cool.",
            "Our town should stop using plastic bags at stores to keep them out of the ocean.",
            "Fish swim."
          ],
          answerIndex: 2,
          explanation: "It is specific, takes a clear side, names a real issue (plastic pollution), and you could support it with reasons. The others are facts or just feelings.",
          hintLadder: [
            "A strong claim is specific AND arguable.",
            "Which one names a change someone might dispute?",
            "The plastic-bag sentence takes a side."
          ]
        },
        {
          id: "g5.spring.ela.w7.d1.arena2",
          type: "short_answer",
          stem: "Take this weak topic — 'clean water' — and turn it into a strong, clear claim. Try the frame 'Our ___ should ___.'",
          rubric: {
            level3: "Produces a specific, arguable claim about clean water (not a fact or feeling) that names an action and could be supported with reasons.",
            level2: "Takes a side but it is vague or names no clear action.",
            level1: "States a fact, a general feeling, or something not arguable."
          },
          exemplar: "Our town should fix the old pipes downtown so families have safe drinking water.",
          hintLadder: [
            "Pick a clear side about clean water.",
            "Name the change you want.",
            "Check that someone could disagree."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Stand & Speak Up",
      prompt:
        "Stand tall like you are about to give a speech for the Earth. Reach both arms up high as you say your claim out loud, then sweep them down like falling rain and shake them out. Do it 4 times, a little louder each round.",
      scienceTieIn: "Standing tall and moving with confidence can lower stress and help you feel braver before speaking up for something you believe in.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What environmental issue would you really argue for this spring? Write your claim in one bold sentence — you will build a whole persuasive piece around it this week.",
      badge: { id: "g5-spring-earth-claim-champion", name: "Earth Claim Champion", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
