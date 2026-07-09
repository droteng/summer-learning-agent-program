// Grade 7 History/Civics — Summer Voyage, Week 5 (Earth and Inventions), Day 4.
// Topic: the history of invention & innovation. Grade 7 rigor: how human NEEDS
// drive inventions, and how innovations build on one another over time in a
// chain of cause and effect.

export const summerG7HistoryW5D4 = {
  id: "g7.summer.hist.w5.d4",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 4,
  subject: "History/Civics",
  topic: "The history of invention & innovation (needs drive inventions; one builds on another)",
  topicTag: "history-of-invention",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.14", "C3.D2.His.2"],
  hook: "No invention appears from nowhere. Each one answers a real human NEED — and stands on the inventions that came before it. Today you trace those chains of innovation to see how ideas build across history.",
  miniLesson: [
    "Inventions are driven by needs: people invented the plow to grow more food, the printing press to spread information faster, and refrigeration to keep food from spoiling. Find the NEED and you often find why the invention appeared when it did.",
    "Innovations build on one another in chains. The wheel led to carts, carts to wagons, and eventually to cars — and the printing press (1400s) made possible the spread of ideas that fueled later scientific and industrial revolutions.",
    "A single invention can ripple into huge social change. The steam engine powered factories, which pulled people into cities, which reshaped how millions of people lived and worked — one device, a whole chain of consequences."
  ],
  workedExample: {
    prompt: "Explain how the printing press (mid-1400s) is connected to today's easy access to information.",
    steps: [
      "IDENTIFY the need: before printing, books were copied by hand — slow, rare, and expensive.",
      "THE INVENTION: Gutenberg's movable-type press let books be printed quickly and cheaply.",
      "THE CHAIN: cheaper books → more people could read → ideas spread → literacy and science grew.",
      "TODAY: that chain of faster, wider information-sharing continues in newspapers, then computers, then the internet."
    ],
    answer: "A need for faster copying led to the printing press, which spread reading and ideas — the start of a chain of information tools reaching all the way to the internet."
  },
  items: [
    {
      id: "g7.summer.hist.w5.d4.q1",
      type: "multiple_choice",
      stem: "Which statement best explains WHY most inventions get created?",
      choices: [
        "Inventions appear randomly with no reason",
        "Inventions never build on earlier ideas",
        "Inventions only come from kings and rulers",
        "Inventions usually answer a real human need or solve a problem"
      ],
      answerIndex: 3,
      explanation: "Necessity drives invention: people create tools and machines to meet needs and solve problems they face.",
      hintLadder: [
        "Think about WHY someone bothers to invent something.",
        "There's usually a problem they're trying to solve.",
        "Inventions answer real human needs."
      ]
    },
    {
      id: "g7.summer.hist.w5.d4.q2",
      type: "multiple_choice",
      stem: "The printing press made books cheap and common. This is an example of how an invention can...",
      choices: [
        "Have no effect on society",
        "Only matter to the inventor",
        "Trigger a chain of further changes, like more people learning to read",
        "Stop all future inventions"
      ],
      answerIndex: 2,
      explanation: "One invention often sets off a chain — cheaper books led to more readers, more shared ideas, and later innovations.",
      hintLadder: [
        "Did the printing press only affect one person?",
        "What happened AFTER books got cheap?",
        "It triggered a chain: more readers, more spread of ideas."
      ],
      misconceptionsTargeted: ["inventions-are-isolated"]
    },
    {
      id: "g7.summer.hist.w5.d4.q3",
      type: "multiple_choice",
      stem: "Which sequence shows innovations BUILDING on one another in the correct order?",
      choices: [
        "Car → wagon → cart → wheel",
        "Wheel → cart → wagon → car",
        "Wagon → wheel → car → cart",
        "Car → wheel → cart → wagon"
      ],
      answerIndex: 1,
      explanation: "The wheel came first, then carts, then wagons, and finally cars — each innovation built on the one before it.",
      hintLadder: [
        "Which of these is the simplest, earliest idea?",
        "Start with the wheel and add complexity.",
        "Wheel → cart → wagon → car."
      ]
    },
    {
      id: "g7.summer.hist.w5.d4.q4",
      type: "short_answer",
      stem: "Pick any famous invention (the light bulb, the telephone, the airplane, refrigeration). Name the NEED it answered and describe one way it changed how people lived.",
      rubric: {
        level3: "Correctly identifies a real need the invention met AND describes a specific way it changed daily life or society.",
        level2: "Names the need OR a change, but not both clearly, or one is vague.",
        level1: "Misidentifies the invention's purpose or gives no real change."
      },
      exemplar: "The light bulb answered the need to see and work after dark without dangerous fire from candles or oil lamps. It changed life by letting people study, work, and stay active into the evening, which lengthened the productive day.",
      hintLadder: [
        "First ask: what PROBLEM did this invention solve for people?",
        "Now think about daily life BEFORE and AFTER it existed.",
        "Connect the need to one real change in how people lived."
      ]
    },
    {
      id: "g7.summer.hist.w5.d4.q5",
      type: "short_answer",
      stem: "Choose two inventions where one made the other possible (for example: the battery made the flashlight possible). Write one cause-and-effect sentence showing how the earlier one led to the later one. Use 'because' or 'so.'",
      rubric: {
        level3: "Names two related inventions with a real dependency AND writes a clear cause→effect sentence using because/so.",
        level2: "Names two inventions but the causal link is weak or the sentence is unclear.",
        level1: "Inventions are unrelated or there is no causal link."
      },
      exemplar: "The electric battery could store and supply steady power, so inventors were able to build the portable flashlight that runs on it.",
      hintLadder: [
        "Think of an invention that depends on an earlier one to work.",
        "Which one had to exist FIRST?",
        "Join them with 'so' or 'because' to show the cause and effect."
      ]
    }
  ],
  reflectionPrompt: "Look at one device you use every day. What earlier inventions had to exist before yours could be built? Trace the chain back at least two steps.",
  misconceptionBank: [
    {
      id: "inventions-are-isolated",
      label: "Thinks each invention stands completely alone",
      description: "Believes inventions appear from nowhere rather than building on earlier tools and ideas.",
      coachMove: "Pick any invention and ask 'what had to exist FIRST for this to work?' Trace the chain of earlier inventions it depends on."
    },
    {
      id: "lone-genius-only",
      label: "Assumes one lone genius invents everything alone",
      description: "Overlooks that inventions usually improve step by step across many people and cultures over time.",
      coachMove: "Show that most inventions had many contributors and earlier versions — innovation is a chain, not a single flash of genius."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Would You Rather Invent?",
      prompt:
        "Imagine you live 200 years ago. Would you rather invent something that meets a need EVERYONE has right now (like keeping food fresh), or something amazing that no one needs yet? Think about which one would actually spread and change lives — and why.",
      answer:
        "The one meeting a real, shared need (like keeping food fresh) would spread fastest and change the most lives — that's exactly why 'necessity is the mother of invention.' A brilliant idea no one needs yet usually waits until a need catches up to it.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Build an Innovation Timeline",
      challenge:
        "Pick one modern invention you love (smartphone, bicycle, headphones, sneakers) and trace its 'family tree' — the chain of earlier inventions it was built on — as a timeline with at least three links.",
      materials: ["Paper & markers, OR a timeline template on a device"],
      steps: [
        "Write your modern invention at the RIGHT end of a timeline.",
        "Work backward: name at least 3 earlier inventions it depends on.",
        "Draw arrows showing how each one led to the next.",
        "Under each, jot the NEED that drove it."
      ],
      deliverable: "A left-to-right timeline of at least 3 linked inventions with arrows and the need behind each.",
      choiceBoard: [
        "Draw the invention 'family tree' timeline with arrows and needs.",
        "Write a short 'origin story' narrating how your invention came to be, link by link.",
        "Make a 4-panel comic showing four inventions each building on the last."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Innovation Chain Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.hist.w5.d4.arena1",
          type: "multiple_choice",
          stem: "Put these information technologies in the order they built on one another, earliest first: (1) internet, (2) printing press, (3) handwritten manuscripts, (4) telegraph.",
          choices: [
            "3 → 2 → 4 → 1",
            "1 → 2 → 3 → 4",
            "2 → 3 → 1 → 4",
            "4 → 1 → 2 → 3"
          ],
          answerIndex: 0,
          explanation: "Handwritten manuscripts came first, then the printing press, then the telegraph, then the internet — each sped up sharing information more than the last.",
          hintLadder: [
            "Which was the SLOWEST, oldest way to share information?",
            "Books came before electric signals; the internet is the newest.",
            "Order: manuscripts → printing press → telegraph → internet."
          ]
        },
        {
          id: "g7.summer.hist.w5.d4.arena2",
          type: "short_answer",
          stem: "The steam engine powered factories, which drew workers into fast-growing cities. Explain this as a chain of cause and effect with at least TWO links, showing how one invention rippled into social change.",
          rubric: {
            level3: "Builds a clear 2+ link causal chain (steam engine → factories → people move to cities → social change) connecting the invention to a real social effect.",
            level2: "Shows one link clearly but the second is weak or missing.",
            level1: "Lists facts with no causal connection."
          },
          exemplar: "The steam engine let factories run machines quickly, so factory jobs multiplied. Because those jobs were in cities, huge numbers of people moved from farms into crowded cities, which changed where and how millions of families lived and worked.",
          hintLadder: [
            "Start with what the steam engine let factories DO.",
            "Then ask: where were those factory jobs, and who moved for them?",
            "Link: steam engine → factory jobs → people move to cities → society changes."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Invention Charades",
      prompt:
        "Act out an invention chain with your whole body: 'turn a wheel' with big arm circles, 'crank a printing press' pulling down twice, then 'type on a keyboard' with quick fingers, then stretch tall like a modern skyscraper. Do the sequence twice, then shake out.",
      scienceTieIn:
        "Moving through the sequence helps your brain link ideas in order — the same way inventions link across time. Movement also refreshes focus by boosting blood flow.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Every invention answered a need. What need do YOU wish an invention would solve this summer? Write it down — it might become the problem you pitch this week.",
      badge: { id: "g7-innovation-historian", name: "Innovation Historian", emoji: "💡" },
      estimatedMinutes: 7
    }
  }
};
