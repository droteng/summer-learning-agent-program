// Grade 5 Summer World/Current Affairs — Week 1 (Explorer Mode), Day 4.
// Grade-5 counterpart of g6.world.w1.d4 (fact vs opinion + world map),
// pitched down: shorter sentences, concrete examples, more vocabulary support.

export const summerG5WorldW1D4 = {
  id: "g5.summer.world.w1.d4",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 1,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Fact, opinion, and where in the world",
  topicTag: "fact-vs-opinion",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.2.3-5", "C3.D2.His.13.3-5"],
  hook: "A news story has facts you can check and opinions people add. Today you tell them apart and find places on the map.",
  keyTerms: [
    { term: "Fact", definition: "Something you can check and prove, like a date or a place." },
    { term: "Opinion", definition: "What someone thinks or feels. Words like best or should signal an opinion." },
    { term: "Source", definition: "Where information comes from, like a book, map, or newspaper." }
  ],
  miniLesson: [
    "A fact is something you can check with a source -- a number, a date, or a map.",
    "An opinion is what someone thinks or feels. Words like best, should, and worst usually signal an opinion.",
    "A good news story tells you where and when it happened. If a story leaves those out, be careful."
  ],
  workedExample: {
    prompt: "Read: Egypt is in Africa. The pyramids near Giza are very old. Many people say the Great Pyramid is the most amazing building ever. Which parts are facts, and which is an opinion?",
    steps: [
      "Fact: Egypt is in Africa -- you can check it on a map.",
      "Fact: the pyramids near Giza are very old -- you can check it in history books.",
      "Opinion: the most amazing building ever -- most amazing is a personal feeling.",
      "So there are two facts and one opinion, all in the same story."
    ],
    answer: "Two facts (place and age) and one opinion (most amazing)."
  },
  items: [
    {
      id: "g5.summer.world.w1.d4.q1",
      type: "multiple_choice",
      stem: "Which of these is a fact?",
      choices: [
        "Coffee is the best drink in the world.",
        "Brazil is the largest country in South America.",
        "Mountains are scarier than valleys.",
        "Recess should be longer at every school."
      ],
      answerIndex: 1,
      explanation: "Brazil is the largest country in South America can be checked with a map or atlas. The others use opinion words like best, scarier, or should.",
      hintLadder: [
        "Skip the sentences with best, should, or scarier.",
        "Look for the one you could check with a map.",
        "It is the sentence about Brazil."
      ],
      misconceptionsTargeted: ["fact-as-strong-opinion"]
    },
    {
      id: "g5.summer.world.w1.d4.q2",
      type: "multiple_choice",
      stem: "Which sentence is an opinion?",
      choices: [
        "Tokyo is the most exciting city in the world.",
        "Antarctica is very cold.",
        "Tokyo has a lot of people.",
        "The Pacific Ocean is larger than the Atlantic Ocean."
      ],
      answerIndex: 0,
      explanation: "Most exciting is a personal feeling. The other three are facts you could check.",
      hintLadder: [
        "Look for the sentence with a feeling word like exciting.",
        "If a sentence has most plus a feeling word, it is usually an opinion.",
        "It is the Tokyo most exciting sentence."
      ]
    },
    {
      id: "g5.summer.world.w1.d4.q3",
      type: "multiple_choice",
      stem: "Which continent is Egypt on?",
      choices: ["Asia", "South America", "Europe", "Africa"],
      answerIndex: 3,
      explanation: "Egypt is in the northeast part of Africa, near the Mediterranean Sea and the Red Sea.",
      hintLadder: [
        "Picture a world map. Egypt is at the top of which continent?",
        "Egypt is near the Mediterranean Sea and the Red Sea.",
        "It is Africa."
      ]
    },
    {
      id: "g5.summer.world.w1.d4.q4",
      type: "multiple_choice",
      stem: "Which source is most likely to give you a reliable fact about a recent event?",
      choices: [
        "A funny picture a friend shared",
        "A random comment on a video",
        "A newspaper article that names where it got its information",
        "A flyer with no author and no date"
      ],
      answerIndex: 2,
      explanation: "A newspaper article that names its sources can be checked. The others have no author or no source.",
      hintLadder: [
        "Pick the one you could trace back to a real person or group.",
        "Sources matter -- anything with no name is harder to trust.",
        "It is the newspaper article."
      ]
    },
    {
      id: "g5.summer.world.w1.d4.q5",
      type: "short_answer",
      stem: "Change this opinion into a fact you could check: Soccer is the most fun sport. Use a number or a source.",
      rubric: {
        level3: "Replaces the opinion word with something you can check (like how many people play) and names a number or source.",
        level2: "Makes it less opinion but keeps a vague word like popular with no number.",
        level1: "Just repeats the opinion or swaps in another feeling word."
      },
      exemplar: "More than 250 million people around the world play soccer, more than any other sport.",
      hintLadder: [
        "Find the word you cannot measure (fun) and swap it for one you can.",
        "Try counting players or fans.",
        "Add a number or a source."
      ]
    }
  ],
  stretch: {
    stem: "A short post says: Everyone agrees the new rule is great. What is wrong with that, and how would you fix it?",
    answer: "Everyone agrees cannot be checked -- you cannot ask every single person. Fix it by naming a survey or saying who was asked and how many liked it.",
    explanation: "A trustworthy claim about a group names where the information came from, like a survey, so a reader can check it."
  },
  reflectionPrompt: "Today you told facts apart from opinions. Where in your day do you see opinions that sound like facts?",
  misconceptionBank: [
    {
      id: "fact-as-strong-opinion",
      label: "Treats a strong opinion as a fact",
      description: "Hears X is the best said with confidence and believes it is a fact.",
      coachMove: "Ask: could you find this in a book, list, or number? If not, it is an opinion."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact or Opinion?",
      prompt:
        "Sort these fast: (1) The Pacific is the largest ocean. (2) The beach is the best place on Earth. (3) Water covers most of the planet. Which are facts, and which is an opinion?",
      answer: "(1) and (3) are facts you can check. (2) is an opinion -- it is a personal feeling you cannot look up.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fact vs. Opinion Hunt",
      challenge:
        "Find 4 statements from around you -- a cereal box, a sign, a headline, or something a person said. Sort each into FACT (you can check it) or OPINION (a feeling), and tell how you know.",
      steps: [
        "Collect 4 real statements you see or hear.",
        "Label each one FACT or OPINION.",
        "For each, write how you can tell.",
        "Find any that sneakily mix both!"
      ],
      deliverable: "A fact-vs-opinion chart with 4 real statements sorted and explained.",
      choiceBoard: [
        "Make a two-column fact and opinion chart.",
        "Make a spot the opinion poster from a real ad.",
        "Draw a comic where a character is fooled by an opinion that sounds like a fact."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Fact-Finder Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.world.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Which statement is a FACT (you can check it)?",
          choices: [
            "Mount Everest is the tallest mountain above sea level.",
            "Mount Everest is the most beautiful mountain.",
            "Everyone should climb Everest.",
            "Everest is scary."
          ],
          answerIndex: 0,
          explanation: "Its height can be measured and checked. The others are feelings.",
          hintLadder: [
            "Which one could you look up and prove?",
            "Facts can be measured; opinions are feelings.",
            "The tallest above sea level statement."
          ]
        },
        {
          id: "g5.summer.world.w1.d4.arena2",
          type: "short_answer",
          stem: "Write one FACT and one OPINION about your town. Label each one.",
          rubric: {
            level3: "Gives a fact you could check AND a clear opinion, both labeled correctly.",
            level2: "Both are there but one is labeled wrong or is borderline.",
            level1: "Two facts, two opinions, or no labels."
          },
          exemplar: "Fact: my town has one public library. Opinion: my town is the friendliest place to live.",
          hintLadder: [
            "A fact you could check in records.",
            "An opinion is your personal feeling.",
            "Label each one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Notice 5 Things",
      prompt:
        "Look around and quietly name 5 things you can SEE, 4 you can HEAR, and 3 you can TOUCH. This resets your focus before the next part.",
      scienceTieIn: "Paying attention to your senses calms your brain -- a focus trick that helps before a test or a big moment.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one place in the world you are curious about? Write one FACT you know and one OPINION you have about it.",
      badge: { id: "g5-summer-fact-finder", name: "Fact Finder", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
