// Grade 6 History/Civics — Winter Expedition, Week 6 (Inventors & Engineers),
// Day 4. Topic: famous inventors and how one invention built on another —
// the chain of heating, light, and insulation.

export const winterG6HistoryW6D4 = {
  id: "g6.winter.hist.w6.d4",
  season: "winter",
  gradeLevel: 6,
  weekNumber: 6,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "Inventors and how inventions build on each other",
  topicTag: "history-of-invention",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.2", "C3.D2.His.14"],
  hook: "No inventor works alone or from nothing. The warm, well-lit room you sit in exists because of a CHAIN of inventions — one builder standing on the ideas of the last. Today you trace how heating, light, and insulation improved step by step across history.",
  miniLesson: [
    "Inventions come in chains: each one builds on earlier ideas. The controlled fire led to the fireplace, the fireplace led to the enclosed stove, and the stove ideas fed into modern furnaces.",
    "Warming a home changed the same way: open hearths lost most of their heat up the chimney, so Benjamin Franklin's 1740s iron stove was designed to radiate more heat into the room using less wood.",
    "Lighting improved in a chain too — from firelight to candles to oil and gas lamps, and then Thomas Edison and others improved the electric light bulb in the 1870s–80s so it lasted long enough to be practical. Each inventor solved a problem the last one left behind."
  ],
  workedExample: {
    prompt: "Explain how the electric light bulb is an example of one invention 'building on' earlier ones.",
    steps: [
      "People first lit homes with fire, then candles, then oil and gas lamps — each a bit brighter and safer.",
      "Those lamps still had problems: smoke, fire risk, and refueling.",
      "Inventors used earlier discoveries about electricity to make a bulb that glowed without flame.",
      "Edison and others then improved the filament so bulbs lasted for hundreds of hours — building on every lighting step before them."
    ],
    answer: "The bulb solved problems left by candles and gas lamps, using earlier electrical discoveries — so it built directly on the inventions that came before it."
  },
  items: [
    {
      id: "g6.winter.hist.w6.d4.q1",
      type: "multiple_choice",
      stem: "What does it mean to say inventions 'build on' one another?",
      choices: [
        "Every invention is completely new with no past ideas",
        "Each new invention improves on or solves a problem left by earlier ones",
        "Only one person ever invents anything important",
        "Old inventions are always useless"
      ],
      answerIndex: 1,
      explanation: "Inventions form chains — each new one usually improves on, or fixes a weakness of, the inventions before it.",
      hintLadder: [
        "Think about candles, then light bulbs.",
        "Did the bulb start from nothing, or improve on lamps?",
        "Each invention builds on the last."
      ]
    },
    {
      id: "g6.winter.hist.w6.d4.q2",
      type: "multiple_choice",
      stem: "Benjamin Franklin's iron stove (the 1740s 'Franklin stove') was designed mainly to...",
      choices: [
        "Make food taste better",
        "Radiate more heat into a room while burning less wood than an open fireplace",
        "Produce electricity",
        "Replace candles for lighting"
      ],
      answerIndex: 1,
      explanation: "The Franklin stove was built to keep more heat in the room instead of losing it up the chimney, using less fuel.",
      hintLadder: [
        "It was about HEATING a home efficiently.",
        "An open fireplace wastes heat up the chimney.",
        "The stove kept more heat in the room using less wood."
      ],
      misconceptionsTargeted: ["lone-genius-myth"]
    },
    {
      id: "g6.winter.hist.w6.d4.q3",
      type: "multiple_choice",
      stem: "Which sequence shows lighting inventions in the order they generally IMPROVED over time?",
      choices: [
        "Electric bulb → gas lamp → candle → firelight",
        "Firelight → candle → oil/gas lamp → electric bulb",
        "Candle → firelight → electric bulb → gas lamp",
        "Gas lamp → firelight → candle → electric bulb"
      ],
      answerIndex: 1,
      explanation: "Lighting advanced from firelight to candles to oil and gas lamps and finally to the electric bulb, each step brighter and safer.",
      hintLadder: [
        "Which came first — fire or the electric bulb?",
        "Order them from oldest to newest technology.",
        "Firelight → candle → oil/gas lamp → electric bulb."
      ]
    },
    {
      id: "g6.winter.hist.w6.d4.q4",
      type: "short_answer",
      stem: "Pick ONE way people keep warm in winter (heating, warm clothing, or insulation). Describe an early version and a later, improved version, and explain what problem the improvement solved.",
      rubric: {
        level3: "Names an early and a later version of ONE warmth technology AND clearly states the problem the newer version fixed (e.g., wasted heat, fuel use, cold drafts).",
        level2: "Names an early and later version but the problem-solved is vague.",
        level1: "Only one version, or no explanation of an improvement."
      },
      exemplar: "Early homes used an open fireplace, but most heat escaped up the chimney. Later, the Franklin iron stove kept more heat in the room and burned less wood — solving the problem of wasted heat and fuel.",
      hintLadder: [
        "Choose heating, clothing, OR insulation.",
        "Name an old version and a newer, better version.",
        "Say what problem the newer one fixed."
      ]
    },
    {
      id: "g6.winter.hist.w6.d4.q5",
      type: "short_answer",
      stem: "Write one cause-and-effect sentence explaining how a problem with an EARLIER invention led someone to create a BETTER one. Use 'because' or 'so.'",
      rubric: {
        level3: "Clear cause→effect linking a specific weakness of an earlier invention to the creation of an improved one, using because/so.",
        level2: "Has a cause and effect but the link is vague or the inventions are unclear.",
        level1: "Lists inventions with no causal link."
      },
      exemplar: "Open fireplaces wasted most of their heat up the chimney, so Franklin designed an iron stove that pushed more warmth back into the room.",
      hintLadder: [
        "Cause: a weakness of an older invention.",
        "Effect: a new invention that fixed it.",
        "Join them with 'so' or 'because.'"
      ]
    }
  ],
  reflectionPrompt: "Look at one warm thing near you right now — a heater, a coat, a sealed window. Whose earlier idea do you think it was built on?",
  misconceptionBank: [
    {
      id: "lone-genius-myth",
      label: "Thinks inventions come from one lone genius, from nothing",
      description: "Believes a single inventor created something with no earlier ideas to build on.",
      coachMove: "Trace the chain backward: ask 'what came before this?' until you reach a simpler earlier version — every invention has ancestors."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Warm Up?",
      prompt:
        "It's a freezing 1750 winter night. Would you rather heat your home with an open fireplace or with Franklin's new iron stove? Think about which one wastes heat up the chimney before you answer!",
      answer:
        "The iron stove wins for warmth: an open fireplace sends most of its heat straight up the chimney, while Franklin's stove was DESIGNED to radiate more heat into the room and burn less wood. That's an invention building on — and fixing — the one before it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invention Family Tree",
      challenge:
        "Choose one everyday winter comfort — heating, lighting, or warm clothing — and build an 'invention family tree' showing at least three versions from oldest to newest, with a note on what each new step improved.",
      materials: ["Paper & markers, OR a drawing/slides app"],
      steps: [
        "Pick heating, lighting, OR clothing/insulation as your branch.",
        "Draw at least three versions in a timeline from oldest to newest.",
        "Under each version, write the problem it still had.",
        "Draw an arrow to the next version and note what improvement it brought."
      ],
      deliverable: "A labeled invention family tree with 3+ versions and a note on what each improvement solved.",
      choiceBoard: [
        "Draw the timeline family tree with arrows and notes.",
        "Write a short 'interview' where an old and a new invention argue about who's better.",
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
          id: "g6.winter.hist.w6.d4.arena1",
          type: "multiple_choice",
          stem: "Which statement BEST captures how invention usually works over history?",
          choices: [
            "One genius invents everything perfectly the first time",
            "Each inventor improves on the ideas and problems of earlier inventors",
            "Inventions never change once they are made",
            "New inventions ignore everything that came before"
          ],
          answerIndex: 1,
          explanation: "Progress is a chain: inventors build on and improve the work of those before them, solving leftover problems.",
          hintLadder: [
            "Think about candles leading to bulbs.",
            "Do inventors start from zero or improve on the past?",
            "They build on earlier inventors' work."
          ]
        },
        {
          id: "g6.winter.hist.w6.d4.arena2",
          type: "short_answer",
          stem: "Trace a short 'chain' of at least THREE inventions for keeping warm OR lighting a room, oldest to newest, and explain what each new step added.",
          rubric: {
            level3: "Lists three inventions in correct time order for one theme AND explains what each new one improved over the last.",
            level2: "Lists three in order but explains improvements for only one or two steps.",
            level1: "Fewer than three, out of order, or no improvements explained."
          },
          exemplar: "Firelight let people see at night but was smoky and dangerous. Candles were cleaner and portable but dim and short-lived. The electric bulb was bright, flameless, and long-lasting — each step fixed a problem the last one left.",
          hintLadder: [
            "Pick heating OR lighting.",
            "Name three versions from oldest to newest.",
            "Say what each new one improved over the last."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Timeline Stride",
      prompt:
        "Make an imaginary timeline across the floor. Step slowly from 'firelight' (crouch low like tending a flame) to 'candle' (hold a steady posture) to 'light bulb' (reach up bright and tall). Walk the timeline forward and back 3 times.",
      scienceTieIn: "Walking a physical timeline helps your brain store the ORDER of events in memory — movement and spatial position make historical sequences easier to recall.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Every invention around you was built on an older idea. Pick one object in your home and imagine the 'earlier version' it improved on. What problem did your version solve?",
      badge: { id: "invention-chain-historian", name: "Invention Chain Historian", emoji: "💡" },
      estimatedMinutes: 7
    }
  }
};
