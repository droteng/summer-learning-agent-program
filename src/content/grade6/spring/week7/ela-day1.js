// Grade 6 ELA/Writing — Spring Expedition, Week 7 (Voices for the Earth),
// Day 1. Topic: making a clear claim about an environmental issue — the start
// of your persuasive piece about the environment.

export const springG6ElaW7D1 = {
  id: "g6.spring.ela.w7.d1",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 1,
  subject: "ELA/Writing",
  topic: "Make a claim about an environmental issue",
  topicTag: "persuasive-environmental-claim",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.1", "CCSS.W.6.1.A"],
  hook: "Spring is the season of renewal — new leaves, new life, and a chance to speak up for the planet. Every persuasive piece about the environment begins with a clear claim: a position you want others to accept. Today you learn to write a claim that gives the Earth a voice.",
  miniLesson: [
    "A claim is a statement that takes a position and can be argued: 'Our town should ban single-use plastic bags.'",
    "A strong environmental claim is specific and arguable — not a fact everyone already agrees on, and not just a feeling. 'Pollution is bad' is too vague to argue; 'Our school should install water-bottle refill stations to cut plastic waste' is a claim you can support.",
    "Good environmental claims name a real issue (waste, pollution, habitat loss, water) AND a real action, so a reader knows exactly what you want to change."
  ],
  workedExample: {
    prompt: "Turn this weak topic into a strong environmental claim: 'litter.'",
    steps: [
      "Pick a specific position about litter.",
      "Name a real action someone could take.",
      "Check: could a reasonable person disagree? Yes.",
      "Result: 'Our school should hold a monthly park clean-up to reduce litter in our community.'"
    ],
    answer: "Our school should hold a monthly park clean-up to reduce litter in our community."
  },
  items: [
    {
      id: "g6.spring.ela.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which sentence is a CLAIM about an environmental issue (an arguable position)?",
      choices: [
        "Trees are living things.",
        "Our city should plant 500 trees downtown to clean the air.",
        "It rained yesterday.",
        "Rivers contain water."
      ],
      answerIndex: 1,
      explanation: "It takes a position about an environmental action that someone could agree or disagree with — that's a claim. The others are facts.",
      hintLadder: [
        "A claim is something you could argue for or against.",
        "Which one names an action someone could dispute?",
        "The tree-planting statement takes a position."
      ]
    },
    {
      id: "g6.spring.ela.w7.d1.q2",
      type: "multiple_choice",
      stem: "Why is 'The environment is important' a weak claim for a persuasive essay?",
      choices: [
        "It is too long.",
        "Almost everyone already agrees with it, so there is nothing to argue and no action to take.",
        "It is a made-up fact.",
        "It has no verb."
      ],
      answerIndex: 1,
      explanation: "A claim needs to be arguable and point to a specific change. A statement everyone already agrees with gives you nothing to persuade about.",
      hintLadder: [
        "Would anyone actually disagree with this sentence?",
        "Does it tell the reader what should change?",
        "A claim needs to be arguable and specific."
      ],
      misconceptionsTargeted: ["vague-equals-claim"]
    },
    {
      id: "g6.spring.ela.w7.d1.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST environmental claim?",
      choices: [
        "Things should get better outside.",
        "Water is wet.",
        "Our town should protect the wetland near the river instead of building a parking lot there.",
        "I like nature."
      ],
      answerIndex: 2,
      explanation: "It is specific, takes a clear position, names a real environmental issue (habitat), and can be supported with reasons.",
      hintLadder: [
        "Look for specific + arguable + names a real action.",
        "Which one could you back up with reasons someone might dispute?",
        "The wetland claim takes a supportable position."
      ]
    },
    {
      id: "g6.spring.ela.w7.d1.q4",
      type: "short_answer",
      stem: "Write a strong, specific claim about an environmental issue in your community or the world that you would like to change.",
      rubric: {
        level3: "States a specific, arguable position about a real environmental issue (waste, pollution, habitat, water, energy) that names a change and could be supported with reasons.",
        level2: "Takes a position but is vague, or names an issue without a clear action.",
        level1: "States a fact, a general feeling, or something not arguable."
      },
      exemplar: "Our neighborhood should add recycling bins in the park so plastic bottles stop ending up in the creek.",
      hintLadder: [
        "Pick an environmental issue you actually care about.",
        "Name the change you want to see.",
        "Make sure someone could reasonably disagree."
      ]
    },
    {
      id: "g6.spring.ela.w7.d1.q5",
      type: "short_answer",
      stem: "Explain the difference between a CLAIM and a FACT, using one environmental example of each.",
      rubric: {
        level3: "Clearly distinguishes (a fact is verifiable/agreed; a claim takes an arguable position) AND gives a correct environmental example of each.",
        level2: "Distinguishes them but one example is off, or the distinction is fuzzy.",
        level1: "Confuses the two or gives no clear examples."
      },
      exemplar: "A fact is something you can check, like 'plastic can take hundreds of years to break down.' A claim takes a position you can argue, like 'our school should ban plastic straws.'",
      hintLadder: [
        "Can everyone verify a fact?",
        "Can people reasonably disagree with a claim?",
        "Give one environmental example of each."
      ]
    }
  ],
  reflectionPrompt: "What environmental issue do you genuinely want to argue for this spring? Save your claim — you will build a whole persuasive piece around it this week.",
  misconceptionBank: [
    {
      id: "vague-equals-claim",
      label: "Thinks a vague slogan is a strong claim",
      description: "Believes broad statements like 'save the planet' count as arguable claims, when they name no specific issue or action.",
      coachMove: "Ask: 'What exactly should change, and could anyone reasonably disagree?' Push for a specific issue AND a specific action."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Claim or Just a Feeling?",
      prompt:
        "Two spring statements: (A) 'Nature is beautiful in spring.' (B) 'Our school should start a class garden to grow food and help pollinators.' Which one is a CLAIM you could actually argue with reasons — and which is just a nice feeling?",
      answer: "(B) is a claim — you can support it with reasons (food, bees, learning). (A) is a feeling almost everyone shares, so there is nothing to argue.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Voice for the Earth Poster",
      challenge:
        "Pick one environmental issue you care about this spring. Design a campaign poster whose headline is a strong, specific, arguable CLAIM — big and bold enough to read from across the room.",
      steps: [
        "Brainstorm an environmental issue you actually care about (waste, water, habitat, air).",
        "Write it as ONE specific, arguable claim sentence that names a change.",
        "Check: could a reasonable person disagree? If not, sharpen it.",
        "Design the poster with your claim as the giant headline and one image that fits."
      ],
      deliverable: "A campaign poster (drawn or typed) with one bold, arguable environmental claim as its headline.",
      choiceBoard: [
        "Draw a poster with your claim as the headline.",
        "Record a 20-second campaign slogan built around your claim.",
        "Make a 3-panel comic where a character turns a vague feeling into a strong claim."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Earth Claim Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w7.d1.arena1",
          type: "multiple_choice",
          stem: "Which sentence is the STRONGEST persuasive claim about the environment?",
          choices: [
            "The ocean is big.",
            "I think oceans are cool.",
            "Our town should ban plastic bags at grocery stores to keep them out of the ocean.",
            "Fish swim."
          ],
          answerIndex: 2,
          explanation: "It is specific, takes a clear position, names a real issue (plastic pollution), and can be supported with reasons — the marks of a strong claim. The others are facts or vague preferences.",
          hintLadder: [
            "A strong claim is specific AND arguable.",
            "Which one names a change someone might dispute?",
            "The plastic-bag claim takes a supportable position."
          ]
        },
        {
          id: "g6.spring.ela.w7.d1.arena2",
          type: "short_answer",
          stem: "Take this weak topic — 'clean water' — and turn it into a strong, specific, arguable environmental claim.",
          rubric: {
            level3: "Produces a specific, arguable position about clean water (not a fact or vague feeling) that names an action and could be supported with reasons.",
            level2: "Takes a position but it is vague or names no clear action.",
            level1: "States a fact, a general feeling, or something not arguable."
          },
          exemplar: "Our town should fix the old pipes downtown so families stop getting lead in their drinking water.",
          hintLadder: [
            "Pick a clear position about clean water.",
            "Name the specific change you want.",
            "Check that a reasonable person could disagree."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Stand & Speak Up",
      prompt:
        "Stand tall like you are about to give a speech for the Earth. Reach both arms up high as you say your claim out loud, then sweep them down like falling rain and shake them out. Repeat 4 times, a little louder each round.",
      scienceTieIn: "Big, confident posture and movement can lower stress hormones and help you feel braver before speaking up for something you believe in.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What environmental issue would you genuinely argue for this spring? Write your claim in a single bold sentence — you will build a whole persuasive piece around it this week.",
      badge: { id: "spring-earth-claim-champion", name: "Earth Claim Champion", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
