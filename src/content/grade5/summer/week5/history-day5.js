// Grade 5 Summer History/Civics — Week 5 (Earth and Inventions), Day 5.
// Grade-5 counterpart of g6.hist.w5.d5 (how inventions happen), pitched down one
// level: simpler examples, shorter passages, vocab support, and a sentence frame
// for the writing item.

export const summerG5HistoryW5D5 = {
  id: "g5.summer.hist.w5.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 5,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "How inventions happen",
  topicTag: "history-of-invention",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.3-5", "C3.D2.His.14.3-5"],
  hook: "Most famous inventions were NOT made by one person alone. Today you find out that inventions are built on older inventions, and that the time has to be just right for them to happen.",
  keyTerms: [
    { term: "Invention", definition: "A new thing someone makes to solve a problem or do a job." },
    { term: "Build on", definition: "To use an older idea or invention as a starting point for a new one." },
    { term: "Condition", definition: "Something that has to be in place first, like the right materials or a real need." }
  ],
  miniLesson: [
    "Inventions build on older inventions. The telephone built on the telegraph, which already sent signals over wires.",
    "The right conditions have to be in place too. There must be the right materials, a real need, and ideas that already exist.",
    "Sometimes many people invent almost the same thing at the same time, because the conditions were finally ready for it."
  ],
  workedExample: {
    prompt:
      "Why could the printing press be built in the 1400s, but not long before that?",
    steps: [
      "The idea of stamping letters onto paper already existed to build on.",
      "Cheap paper had just arrived through trade, which was a needed material.",
      "Machines that squeeze things, like a fruit press, gave the inventor a design to copy.",
      "People wanted more books, so there was a real need for the invention."
    ],
    answer: "The older ideas, the paper, the squeezing machine, and the need for books all came together at the right time."
  },
  items: [
    {
      id: "g5.summer.hist.w5.d5.q1",
      type: "multiple_choice",
      stem: "Which sentence is closest to TRUE about most famous inventions?",
      choices: [
        "One genius made each one all alone.",
        "Each one builds on older inventions and ideas.",
        "Each one was made in secret with no help.",
        "Each one was perfect on the very first try."
      ],
      answerIndex: 1,
      explanation: "Almost every invention borrows parts and ideas from earlier work. The story of one lone genius is mostly a myth.",
      hintLadder: [
        "Where do new ideas usually come from?",
        "New ideas often come from older ideas put together in a new way.",
        "So inventions build on older inventions."
      ],
      misconceptionsTargeted: ["lone-genius-myth"]
    },
    {
      id: "g5.summer.hist.w5.d5.q2",
      type: "multiple_choice",
      stem: "The telephone was built most directly on which older invention?",
      choices: ["The wheel.", "The telegraph.", "The printing press.", "The compass."],
      answerIndex: 1,
      explanation: "The telegraph already sent signals over wires using dots and dashes. The telephone built on that by sending a person's voice over the wires.",
      hintLadder: [
        "Which older invention already sent signals over wires?",
        "It used dots and dashes to send messages.",
        "That is the telegraph."
      ]
    },
    {
      id: "g5.summer.hist.w5.d5.q3",
      type: "multiple_choice",
      stem: "Why did several inventors work on the lightbulb around the SAME time?",
      choices: [
        "It was just luck.",
        "The materials, the need, and the ideas were finally ready, so many people got close at once.",
        "They were all in the same family.",
        "Only one of them was really trying."
      ],
      answerIndex: 1,
      explanation: "When the conditions are ready, many people in different places can get close to the same invention at the same time.",
      hintLadder: [
        "Why do similar inventions show up at the same time?",
        "Think about the materials, the need, and the ideas being ready.",
        "When the time is ready, many people get close at once."
      ]
    },
    {
      id: "g5.summer.hist.w5.d5.q4",
      type: "multiple_choice",
      stem: "What is the BEST sign that an invention \"changed the world\"?",
      choices: [
        "It was famous.",
        "It changed how everyday people lived, worked, or talked to each other.",
        "It cost a lot of money.",
        "It looked shiny and cool."
      ],
      answerIndex: 1,
      explanation: "A world-changing invention changes daily life for lots of people. Being famous, costly, or shiny does not decide how much it matters.",
      hintLadder: [
        "What does \"changed the world\" mean for regular people?",
        "Think about how they live and work every day.",
        "It changed how everyday people lived."
      ]
    },
    {
      id: "g5.summer.hist.w5.d5.q5",
      type: "short_answer",
      stem: "Pick a modern invention you know, like the smartphone or the video game. Name ONE older thing it built on and ONE condition that had to be ready. Use this frame: \"The ___ built on the ___ , and it needed ___ to be ready.\"",
      rubric: {
        level3: "Names a specific modern invention, a specific older thing it built on, AND a specific condition that had to be ready (a material, a need, or an earlier idea).",
        level2: "Names the invention and an older thing, but the condition is vague or missing.",
        level1: "Names only the invention, with no older thing or condition."
      },
      exemplar:
        "The smartphone built on the older cell phone, and it needed tiny cheap computer chips to be ready so a whole computer could fit in your hand.",
      hintLadder: [
        "Pick a modern invention you know well.",
        "What older thing came before it that it borrowed from?",
        "Add one thing (a material, a need, or an idea) that had to be ready."
      ]
    }
  ],
  stretch: {
    stem: "A smartphone can take pictures, make calls, and show maps. Name TWO older inventions that a smartphone replaced or built on.",
    answer: "Two of: the camera, the telephone, the paper map, the music player, or the computer.",
    explanation: "A smartphone is a mashup of older inventions. It brings together the camera, the telephone, the map, the music player, and the computer, which shows how big inventions remix older ones."
  },
  reflectionPrompt: "This week you explored earth, engineering, and inventions. What is a small thing in your home that started as someone's invention?",
  misconceptionBank: [
    {
      id: "lone-genius-myth",
      label: "Thinks inventions came from one lone genius",
      description: "Believes inventors worked totally alone, instead of building on older inventions and other people's ideas.",
      coachMove: "Show that famous inventions have a long family tree. Point to the older inventions and helpers that each one built on."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "The Invention Family Tree",
      prompt:
        "A smartphone is really a mashup of older inventions. Can you name THREE older things a smartphone does the job of? (Hint: think camera, phone, map...)",
      answer:
        "A smartphone does the job of a telephone, a camera, a computer, a map, a music player, a flashlight, and more. That proves big inventions are built by remixing older ones!",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Invention Family Tree",
      challenge:
        "Pick one everyday invention, like the bicycle, the lightbulb, or the video game. Build its family tree: show the older inventions it built on, and the conditions that had to be ready for it.",
      materials: ["Paper and markers, OR a device to type or draw on"],
      steps: [
        "Write your invention at the top of the page.",
        "Below it, draw 2 or 3 older inventions it built on.",
        "Add the conditions that had to be ready (materials, a need, or older ideas).",
        "Connect everything with arrows that show what led to what."
      ],
      deliverable: "An invention family tree showing older inventions, conditions, and arrows leading to the final invention.",
      choiceBoard: [
        "Draw the family-tree diagram with arrows.",
        "Write a short \"origin story\" paragraph for the invention.",
        "Make a timeline strip from the oldest idea to the final invention."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Invention History Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.hist.w5.d5.arena1",
          type: "multiple_choice",
          stem: "Several inventors worked on the lightbulb around the same time in the 1870s. What does this BEST show?",
          choices: [
            "They all copied one person.",
            "The materials, the need, and the ideas were ready, so many people got close at once.",
            "It was just a coincidence.",
            "Only one person was really trying."
          ],
          answerIndex: 1,
          explanation: "Many inventors got close at the same time because the conditions were finally ready. That is why we see invention races.",
          hintLadder: [
            "Why do similar inventions show up at the same moment?",
            "Think about the materials, the need, and the ideas being ready.",
            "When the time is ready, many people get close at once."
          ]
        },
        {
          id: "g5.summer.hist.w5.d5.arena2",
          type: "short_answer",
          stem: "Pick any invention you know. Name ONE older invention it built on AND ONE condition (a material, a need, or an idea) that had to be ready.",
          rubric: {
            level3: "Names a specific invention, a specific older invention it built on, AND a specific condition that had to be ready.",
            level2: "Names the invention and an older one, but the condition is vague or missing.",
            level1: "Names only the invention, with no older invention or condition."
          },
          exemplar: "The electric car built on the gas car's design and the rechargeable battery. It needed cheaper, longer-lasting batteries to be ready so it could drive far enough.",
          hintLadder: [
            "Pick an invention you know something about.",
            "What older thing came before it that it borrowed from?",
            "Add the material, need, or idea that had to be ready."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Build-It Charades",
      prompt:
        "Stand up and act out inventing something with your whole body: mime hammering, cranking a wheel, then flipping a switch as your invention comes to life. Make your motions big!",
      scienceTieIn: "Moving your body sends more oxygen to your brain, which helps you think up creative ideas -- great fuel for any inventor.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Look around your room and pick one object. Imagine its family tree: what older inventions had to exist before it could be made?",
      badge: { id: "g5-summer-invention-explorer", name: "Invention Explorer", emoji: "💡" },
      estimatedMinutes: 7
    }
  }
};
