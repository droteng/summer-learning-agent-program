// Grade 5 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 1. Grade 5 counterpart of g6.fall.hist.w7.d1. Same topic
// (cause-and-effect chains) pitched down to Grade 5: simpler, concrete
// examples, shorter passages, and extra vocabulary support.

export const fallG5HistoryW7D1 = {
  id: "g5.fall.hist.w7.d1",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 1,
  subject: "History/Civics",
  topic: "Cause-and-effect chains in history",
  topicTag: "cause-effect-chains",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14.3-5", "C3.D2.His.15.3-5"],
  hook: "History is like a row of falling leaves — one thing makes the next thing happen. Today you learn to follow the chain of causes and effects.",
  miniLesson: [
    "A CAUSE is why something happens. An EFFECT is what happens because of it. Example: rain (cause) makes the ground wet (effect).",
    "Sometimes an effect becomes the cause of the NEXT thing. That makes a chain: rain fell → the river filled up → the field flooded.",
    "Look for signal words that connect the links: because, so, led to, as a result."
  ],
  workedExample: {
    prompt: "Build a 3-link chain that starts with 'the leaves fell.'",
    steps: [
      "Cause: the leaves fell off the trees.",
      "Effect/cause: the leaves covered the whole yard.",
      "Effect: the family raked the leaves into a big pile.",
      "Chain: leaves fell → yard was covered → family raked a pile."
    ],
    answer: "leaves fell → yard was covered → family raked a big pile"
  },
  items: [
    {
      id: "g5.fall.hist.w7.d1.q1",
      type: "multiple_choice",
      stem: "Which word tells you an EFFECT is coming?",
      choices: ["because", "so", "since", "why"],
      answerIndex: 1,
      explanation: "'So' points to the result (effect). 'Because' and 'since' usually tell you the cause.",
      hintLadder: [
        "Which word comes right before the result?",
        "Try each: 'It rained, ___ we stayed inside.'",
        "'So' fits — it points to what happened next."
      ]
    },
    {
      id: "g5.fall.hist.w7.d1.q2",
      type: "multiple_choice",
      stem: "In 'The frost came, so the farmers picked the pumpkins early,' what is the EFFECT?",
      choices: ["The farmers picked the pumpkins early", "The frost came", "The pumpkins", "The morning"],
      answerIndex: 0,
      explanation: "The frost is the cause. Picking the pumpkins early is what happened because of it — the effect.",
      hintLadder: [
        "What happened BECAUSE of the frost?",
        "Find the part after the word 'so.'",
        "The farmers picked the pumpkins early."
      ]
    },
    {
      id: "g5.fall.hist.w7.d1.q3",
      type: "multiple_choice",
      stem: "How can one effect become the next CAUSE?",
      choices: [
        "Effects never matter",
        "History always repeats",
        "Causes and effects are the same thing",
        "A result can make the NEXT thing happen, like dominoes"
      ],
      answerIndex: 3,
      explanation: "Just like dominoes, one result can knock over the next event, forming a chain.",
      hintLadder: [
        "Think about a row of dominoes.",
        "When one falls, what happens next?",
        "It knocks over the next one — a result causes a new event."
      ],
      misconceptionsTargeted: ["single-cause-thinking"]
    },
    {
      id: "g5.fall.hist.w7.d1.q4",
      type: "short_answer",
      stem: "Build a 3-link cause-and-effect chain about anything (real or from your day). Use arrows or the words 'led to.'",
      rubric: {
        level3: "Three links in order where each one clearly leads to the next.",
        level2: "Three links, but one connection is weak or unclear.",
        level1: "Only one link, or links that don't connect."
      },
      exemplar: "I forgot my umbrella → I got wet in the rain → I changed into dry clothes when I got home.",
      hintLadder: [
        "Start with one cause (something that happened).",
        "What did it lead to?",
        "What did THAT lead to? Now you have three links."
      ]
    },
    {
      id: "g5.fall.hist.w7.d1.q5",
      type: "short_answer",
      stem: "Many events have MORE than one cause. Think of something that happened and name TWO different reasons it happened.",
      rubric: {
        level3: "Names a real event AND two clear, different causes.",
        level2: "Names an event with one strong cause and one weak cause.",
        level1: "Only one cause or no clear event."
      },
      exemplar: "The picnic was cancelled for two reasons: it started raining, and the park was already full of people.",
      hintLadder: [
        "Pick something that happened.",
        "Think of more than one reason for it.",
        "Name two separate causes."
      ]
    }
  ],
  reflectionPrompt: "Think of something that happened to you today. Can you trace the chain of causes that led to it, one link at a time?",
  misconceptionBank: [
    {
      id: "single-cause-thinking",
      label: "Thinks every event has just one cause",
      description: "Looks for only one reason when most events have several.",
      coachMove: "Ask 'what else made this happen?' until at least two causes come up."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Start the Chain?",
      prompt:
        "Would you rather be the FIRST domino (the one that starts the whole chain) or the LAST domino (the big finish everyone sees)? Pick one and tell why.",
      answer:
        "There's no wrong answer! The first domino is the cause that starts everything. The last is the effect everyone notices. The point: every effect started with a cause earlier in the chain.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Harvest Domino Chain",
      challenge:
        "Pick a simple cause-and-effect chain (like leaves fell → yard covered → family raked a pile) and build a domino chain where each domino is labeled with one event.",
      steps: [
        "Choose a 3- or 4-link cause-and-effect chain.",
        "Make 'dominoes' out of paper, blocks, or drawn boxes and label each with one event.",
        "Line them up in order so knocking one over knocks the next.",
        "Between each pair, write the 'because' that connects them."
      ],
      deliverable: "A labeled domino chain (built or drawn) with a 'because' written between each link.",
      choiceBoard: [
        "Build it with real dominoes, blocks, or folded cards.",
        "Draw it as a falling-domino comic strip.",
        "Record yourself saying each link out loud as it 'falls.'"
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Cause-Chain Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.hist.w7.d1.arena1",
          type: "multiple_choice",
          stem: "In the chain 'The pond froze, so the ducks flew away, which made the pond quiet,' which event is BOTH an effect AND a cause?",
          choices: [
            "The pond froze",
            "The pond became quiet",
            "The ducks flew away",
            "The winter"
          ],
          answerIndex: 2,
          explanation: "The ducks flying away is the EFFECT of the freeze and the CAUSE of the quiet pond — it's the middle link.",
          hintLadder: [
            "Look for the middle link, not the first or last.",
            "Which event was caused by something AND caused something else?",
            "The ducks flew away: caused by the freeze, and it made the pond quiet."
          ]
        },
        {
          id: "g5.fall.hist.w7.d1.arena2",
          type: "short_answer",
          stem: "Most events have more than one cause. Pick something that happened and name TWO different causes. Then tell why naming only one would leave out part of the story.",
          rubric: {
            level3: "Names an event AND two different causes AND explains that one cause alone tells only part of the story.",
            level2: "Names an event and two causes, but the 'why incomplete' part is thin.",
            level1: "Only one cause, or no clear event."
          },
          exemplar: "The garden dried out for two reasons: it didn't rain for weeks, and nobody remembered to water it. Naming only the missing rain would leave out that the watering was forgotten too.",
          hintLadder: [
            "Pick an event you know.",
            "Name two separate reasons it happened.",
            "Explain what you'd miss if you named only one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: The Wave Chain",
      prompt:
        "Do a one-person wave: raise your right arm, then your left, then stand on tiptoes, then sit down — each move starting the next. Repeat 3 times, a little faster each round.",
      scienceTieIn: "Your brain sends signals to your muscles in order, one after another — that's a real cause-and-effect chain happening inside your own body.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Trace a chain from your own day: what was the first cause, and how did it lead, link by link, to something that happened later?",
      badge: { id: "g5-fall-chain-tracker", name: "Chain Tracker", emoji: "⛓️" },
      estimatedMinutes: 7
    }
  }
};
