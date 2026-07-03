// Grade 5 History/Civics — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 4. Grade 5 counterpart of g6.winter.hist.w6.d4. Same topic (famous
// inventors and how one invention builds on another — the chain of heating,
// light, and warmth) pitched down to Grade 5: shorter passages, simpler
// vocabulary, and clearer cause-and-effect scaffolding. Wintry tone.

export const winterG5HistoryW6D4 = {
  id: "g5.winter.hist.w6.d4",
  season: "winter",
  gradeLevel: 5,
  weekNumber: 6,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Inventors and how inventions build on each other",
  topicTag: "history-of-invention",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.3-5", "C3.D2.His.14.3-5"],
  hook: "No inventor works alone or from nothing. The warm, bright room you sit in exists because of a CHAIN of inventions — one builder using the ideas of the last. Today you trace how heating and light got better, step by step, across history.",
  miniLesson: [
    "Inventions come in chains: each one builds on ideas that came before. Controlled fire led to the fireplace, the fireplace led to the closed-in stove, and stove ideas led to modern heaters.",
    "Heating a home changed the same way. An open fireplace lost most of its heat up the chimney. In the 1740s, Benjamin Franklin designed an iron stove to send more heat into the room while burning less wood.",
    "Lighting improved in a chain too — from firelight to candles to oil and gas lamps, and then in the 1870s and 1880s Thomas Edison and others made the electric light bulb last long enough to be useful. Each inventor fixed a problem the one before had left behind."
  ],
  workedExample: {
    prompt: "Explain how the electric light bulb is an example of one invention 'building on' earlier ones.",
    steps: [
      "People first lit homes with fire, then candles, then oil and gas lamps — each one a bit brighter and safer.",
      "Those lamps still had problems: smoke, fire danger, and needing more fuel.",
      "Inventors used earlier discoveries about electricity to make a bulb that glowed without any flame.",
      "Edison and others then made the bulb last for hundreds of hours — building on every lighting step before it."
    ],
    answer: "The bulb fixed problems left by candles and gas lamps, using earlier ideas about electricity — so it built right on the inventions that came before it."
  },
  items: [
    {
      id: "g5.winter.hist.w6.d4.q1",
      type: "multiple_choice",
      stem: "What does it mean to say inventions 'build on' one another?",
      choices: [
        "Every invention is brand new with no past ideas",
        "Each new invention improves on, or fixes a problem left by, an earlier one",
        "Only one person ever invents anything important",
        "Old inventions are always useless"
      ],
      answerIndex: 1,
      explanation: "Inventions form chains — each new one usually improves on, or fixes a weak spot of, the inventions before it.",
      hintLadder: [
        "Think about candles, and then light bulbs.",
        "Did the bulb start from nothing, or improve on lamps?",
        "Each invention builds on the last."
      ]
    },
    {
      id: "g5.winter.hist.w6.d4.q2",
      type: "multiple_choice",
      stem: "Benjamin Franklin's iron stove (the 1740s 'Franklin stove') was made mainly to...",
      choices: [
        "Make food taste better",
        "Send more heat into a room while burning less wood than an open fireplace",
        "Make electricity",
        "Replace candles for lighting"
      ],
      answerIndex: 1,
      explanation: "The Franklin stove was built to keep more heat in the room instead of losing it up the chimney, using less wood.",
      hintLadder: [
        "It was about HEATING a home better.",
        "An open fireplace loses heat up the chimney.",
        "The stove kept more heat in the room using less wood."
      ],
      misconceptionsTargeted: ["lone-genius-myth"]
    },
    {
      id: "g5.winter.hist.w6.d4.q3",
      type: "multiple_choice",
      stem: "Which list shows lighting inventions in the order they generally got BETTER over time?",
      choices: [
        "Electric bulb → gas lamp → candle → firelight",
        "Firelight → candle → oil/gas lamp → electric bulb",
        "Candle → firelight → electric bulb → gas lamp",
        "Gas lamp → firelight → candle → electric bulb"
      ],
      answerIndex: 1,
      explanation: "Lighting went from firelight to candles to oil and gas lamps and finally to the electric bulb, each step brighter and safer.",
      hintLadder: [
        "Which came first — fire or the electric bulb?",
        "Put them in order from oldest to newest.",
        "Firelight → candle → oil/gas lamp → electric bulb."
      ]
    },
    {
      id: "g5.winter.hist.w6.d4.q4",
      type: "short_answer",
      stem: "Pick ONE way people keep warm in winter (heating, warm clothing, or sealing up drafts). Describe an early version and a later, better version, and explain what problem the better version fixed.",
      rubric: {
        level3: "Names an early and a later version of ONE way to stay warm AND clearly says the problem the newer version fixed (like wasted heat, using too much wood, or cold drafts).",
        level2: "Names an early and a later version, but the problem it fixed is vague.",
        level1: "Only one version, or no explanation of an improvement."
      },
      exemplar: "Early homes used an open fireplace, but most of the heat went up the chimney. Later, the Franklin iron stove kept more heat in the room and used less wood — fixing the problem of wasted heat and wasted wood.",
      hintLadder: [
        "Choose heating, clothing, OR sealing drafts.",
        "Name an old version and a newer, better version.",
        "Say what problem the newer one fixed."
      ]
    },
    {
      id: "g5.winter.hist.w6.d4.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence showing how a problem with an EARLIER invention led someone to make a BETTER one. Use the word 'because' or 'so.'",
      rubric: {
        level3: "Clear cause → effect linking a specific problem of an earlier invention to the making of a better one, using because or so.",
        level2: "Has a cause and an effect, but the link is vague or the inventions are unclear.",
        level1: "Lists inventions with no cause-and-effect link."
      },
      exemplar: "Open fireplaces lost most of their heat up the chimney, so Franklin designed an iron stove that pushed more warmth back into the room.",
      hintLadder: [
        "Cause: a problem with an older invention.",
        "Effect: a new invention that fixed it.",
        "Join them with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Look at one warm thing near you right now — a heater, a coat, a sealed window. Whose earlier idea do you think it was built on?",
  misconceptionBank: [
    {
      id: "lone-genius-myth",
      label: "Thinks inventions come from one person, out of nothing",
      description: "Believes a single inventor made something with no earlier ideas to build on.",
      coachMove: "Trace the chain backward: ask 'what came before this?' until you reach a simpler, older version — every invention has ancestors."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Warm Up?",
      prompt:
        "It is a freezing winter night in 1750. Would you rather heat your home with an open fireplace or with Franklin's new iron stove? Think about which one loses heat up the chimney before you answer!",
      answer:
        "The iron stove wins for warmth: an open fireplace sends most of its heat straight up the chimney, while Franklin's stove was DESIGNED to send more heat into the room and burn less wood. That is an invention building on — and fixing — the one before it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invention Family Tree",
      challenge:
        "Choose one everyday winter comfort — heating, lighting, or warm clothing — and build an 'invention family tree' showing at least three versions from oldest to newest, with a note on what each new step made better.",
      materials: ["Paper & markers, OR a drawing/slides app"],
      steps: [
        "Pick heating, lighting, OR clothing as your branch.",
        "Draw at least three versions in a timeline from oldest to newest.",
        "Under each version, write the problem it still had.",
        "Draw an arrow to the next version and note what it made better."
      ],
      deliverable: "A labeled invention family tree with 3+ versions and a note on what each improvement fixed.",
      choiceBoard: [
        "Draw the timeline family tree with arrows and notes.",
        "Write a short 'interview' where an old and a new invention argue about who is better.",
        "Make a 4-panel comic showing an inventor improving on the version before them."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Inventors Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.winter.hist.w6.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence BEST tells how invention usually works over history?",
          choices: [
            "One genius invents everything perfectly the first time",
            "Each inventor improves on the ideas and problems of earlier inventors",
            "Inventions never change once they are made",
            "New inventions ignore everything that came before"
          ],
          answerIndex: 1,
          explanation: "Progress is a chain: inventors build on and improve the work of those before them, fixing leftover problems.",
          hintLadder: [
            "Think about candles leading to bulbs.",
            "Do inventors start from zero, or improve on the past?",
            "They build on earlier inventors' work."
          ]
        },
        {
          id: "g5.winter.hist.w6.d4.arena2",
          type: "short_answer",
          stem: "Trace a short 'chain' of at least THREE inventions for keeping warm OR lighting a room, from oldest to newest, and explain what each new step added.",
          rubric: {
            level3: "Lists three inventions in the right time order for one theme AND explains what each new one made better than the last.",
            level2: "Lists three in order, but explains the improvement for only one or two steps.",
            level1: "Fewer than three, out of order, or no improvements explained."
          },
          exemplar: "Firelight let people see at night but was smoky and dangerous. Candles were cleaner and easy to carry but dim and short-lived. The electric bulb was bright, had no flame, and lasted a long time — each step fixed a problem the last one left.",
          hintLadder: [
            "Pick heating OR lighting.",
            "Name three versions from oldest to newest.",
            "Say what each new one made better than the last."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Timeline Stride",
      prompt:
        "Make an imaginary timeline across the floor. Step slowly from 'firelight' (crouch low like tending a flame) to 'candle' (stand steady) to 'light bulb' (reach up bright and tall). Walk the timeline forward and back 3 times.",
      scienceTieIn: "Walking a real timeline helps your brain remember the ORDER of events — movement and where things are in space make historical sequences easier to recall.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Every invention around you was built on an older idea. Pick one object in your home and imagine the 'earlier version' it improved on. What problem did your version fix?",
      badge: { id: "g5-winter-invention-chain-historian", name: "Invention Chain Historian", emoji: "💡" },
      estimatedMinutes: 7
    }
  }
};
