// Grade 6 World/Current Affairs — Week 1 (Explorer Mode), Day 4.
// Topic: separating fact from opinion + locating topics on a map.

export const grade6WorldWeek1Day4 = {
  id: "g6.world.w1.d4",
  gradeLevel: 6,
  weekNumber: 1,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Fact, opinion, and where in the world",
  topicTag: "fact-vs-opinion",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.Geo.2.6-8", "C3.D2.His.13.6-8"],
  hook: "A news story has facts you can check and opinions people add. Today you tell them apart and place stories on the map.",
  miniLesson: [
    "A fact is a statement you can verify with a source — a measurement, a date, or a record.",
    "An opinion is a personal view. Words like \"best\", \"should\", and \"worst\" often signal opinion.",
    "Reliable news shows where, when, and how it knows what it says. If a story leaves those out, ask why."
  ],
  workedExample: {
    prompt:
      "Read: \"Egypt is in Africa. The pyramids near Giza are about 4,500 years old. Many people say the Great Pyramid is the most amazing building ever made.\" Identify the facts and the opinion.",
    steps: [
      "Fact: \"Egypt is in Africa\" — verifiable on a map.",
      "Fact: \"The pyramids near Giza are about 4,500 years old\" — verifiable in history records.",
      "Opinion: \"the most amazing building ever made\" — uses \"most amazing\", which is a personal judgment.",
      "Two facts, one opinion. Both can appear in the same article."
    ],
    answer: "Two facts (location, age) and one opinion (\"most amazing\")."
  },
  items: [
    {
      id: "g6.world.w1.d4.q1",
      type: "multiple_choice",
      stem: "Which of these is a fact?",
      choices: [
        "Coffee is the best drink in the world.",
        "Brazil is the largest country in South America by area.",
        "Mountains are scarier than valleys.",
        "Football should be banned in schools."
      ],
      answerIndex: 1,
      explanation:
        "\"Brazil is the largest country in South America by area\" can be checked with a map or atlas. The others use opinion words like \"best\", \"scarier\", or \"should\".",
      hintLadder: [
        "Skip the sentences with \"best\", \"should\", or \"scarier\".",
        "Look for the option that you could check with a source.",
        "It's the geography statement about Brazil."
      ],
      misconceptionsTargeted: ["fact-as-strong-opinion"]
    },
    {
      id: "g6.world.w1.d4.q2",
      type: "multiple_choice",
      stem: "Which sentence is an opinion?",
      choices: [
        "The Pacific Ocean is larger than the Atlantic.",
        "Antarctica is colder than the Sahara desert.",
        "Tokyo has more people than New York City.",
        "Tokyo is the most exciting city in the world."
      ],
      answerIndex: 3,
      explanation: "\"Most exciting\" is a personal judgment. The other three are checkable facts.",
      hintLadder: [
        "Look for the sentence with a feeling word like \"exciting\".",
        "If a statement has \"most\" + a personal word, it's likely opinion.",
        "It's the Tokyo \"most exciting\" sentence."
      ]
    },
    {
      id: "g6.world.w1.d4.q3",
      type: "multiple_choice",
      stem: "Which continent is Egypt on?",
      choices: ["Asia", "Africa", "Europe", "South America"],
      answerIndex: 1,
      explanation: "Egypt is in northeastern Africa, on the Mediterranean and Red Sea coasts.",
      hintLadder: [
        "Picture a world map. North of which continent is Egypt?",
        "Egypt borders the Mediterranean and the Red Sea.",
        "It's Africa."
      ]
    },
    {
      id: "g6.world.w1.d4.q4",
      type: "multiple_choice",
      stem: "Which source is most likely to give you a reliable fact about a recent event?",
      choices: [
        "A meme shared by a friend",
        "A news article from a major newspaper that names its sources",
        "A random comment on a video",
        "A flyer with no author or date"
      ],
      answerIndex: 1,
      explanation:
        "A news article from a major paper that names its sources can be checked. The others are unsigned, unsourced, or just personal sharing.",
      hintLadder: [
        "Pick the option you could trace back to a person or organization.",
        "Sources matter — anything anonymous is harder to trust.",
        "It's the named newspaper article."
      ]
    },
    {
      id: "g6.world.w1.d4.q5",
      type: "short_answer",
      stem:
        "Rewrite this opinion as a fact you could check: \"Soccer is the world's most fun sport.\" Use a number, a date, or a source.",
      rubric: {
        level3:
          "Replaces the opinion word with a checkable measure (e.g., participation count, viewership, registration numbers) and names a source or year.",
        level2: "Reduces the opinion but keeps a vague word like \"popular\" without a measure.",
        level1: "Restates the opinion or replaces \"fun\" with another opinion word."
      },
      exemplar:
        "FIFA reports that more than 250 million people play soccer worldwide, the largest registered participation of any sport.",
      hintLadder: [
        "Pick a word that can't be measured (\"fun\") and replace it with one that can.",
        "Try counting players, fans, or hours watched.",
        "Add a source like FIFA, the Olympics, or a survey."
      ]
    }
  ],
  stretch: {
    stem:
      "A short post says: \"Everyone agrees the new rule helps students.\" What's wrong with that claim, and how would you fix it?",
    answer:
      "\"Everyone agrees\" is unverifiable — there's no way to check what every single student or family thinks. Fix it by citing a survey or naming who was asked.",
    explanation:
      "Reliable claims about a group cite the source of the data (a survey, a poll, a representative sample) so the reader can verify."
  },
  reflectionPrompt: "Today you separated fact from opinion. Where in your day do you see opinions presented like facts?",
  misconceptionBank: [
    {
      id: "fact-as-strong-opinion",
      label: "Treats a strongly stated opinion as a fact",
      description: "Hears \"X is the best\" said with confidence and accepts it as a fact.",
      coachMove: "Ask: could you find this in a record, dataset, or measurement? If not, it's opinion."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact or Opinion?",
      prompt:
        "Sort these fast: (1) 'The Pacific is the largest ocean.' (2) 'The beach is the best place on Earth.' (3) 'Water covers about 70% of the planet.' Which are facts, which is opinion?",
      answer: "(1) and (3) are facts you can verify. (2) is an opinion — it's a personal judgment you can't look up.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Fact vs. Opinion Hunt",
      challenge:
        "Find 4 statements from around you — a cereal box, a sign, a headline, something a person said. Sort each into FACT (checkable) or OPINION (a judgment), and explain how you know.",
      steps: [
        "Collect 4 real statements you see or hear.",
        "Label each FACT or OPINION.",
        "For each, write how you can tell.",
        "Spot any that sneakily mix both!"
      ],
      deliverable: "A fact-vs-opinion chart with 4 real statements sorted and explained.",
      choiceBoard: [
        "Make a two-column fact/opinion chart.",
        "Make a 'spot the opinion' poster from a real ad.",
        "Draw a comic where a character is fooled by an opinion dressed up as a fact."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Fact-Finder Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.world.w1.d4.arena1",
          type: "multiple_choice",
          stem: "Which statement is a FACT (checkable)?",
          choices: [
            "Mount Everest is the most beautiful mountain.",
            "Mount Everest is the tallest mountain above sea level.",
            "Everyone should climb Everest.",
            "Everest is scary."
          ],
          answerIndex: 1,
          explanation: "Its height can be measured and verified; the others are judgments.",
          hintLadder: [
            "Which one could you look up and confirm?",
            "Facts are measurable; opinions are judgments.",
            "The 'tallest above sea level' statement."
          ]
        },
        {
          id: "g6.world.w1.d4.arena2",
          type: "short_answer",
          stem: "Write one FACT and one OPINION about your country or town. Label each.",
          rubric: {
            level3: "Gives a clearly checkable fact AND a clear personal-judgment opinion, both correctly labeled.",
            level2: "Both present but one is mislabeled or borderline.",
            level1: "Two facts, two opinions, or unlabeled."
          },
          exemplar: "Fact: my town has one public library. Opinion: my town is the friendliest place to grow up.",
          hintLadder: [
            "A fact you could verify in records.",
            "An opinion is your personal judgment.",
            "Label each one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Notice 5 Things",
      prompt:
        "Look around and silently name 5 things you can SEE, 4 you can HEAR, 3 you can TOUCH. This 'grounding' resets your focus before the next part.",
      scienceTieIn: "Tuning into your senses calms the brain's alarm system — the same focus tool that helps before a test or presentation.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What's one place in the world you're curious about? Write one FACT you know and one OPINION you have about it.",
      badge: { id: "fact-finder", name: "Fact Finder", emoji: "🌍" },
      estimatedMinutes: 7
    }
  }
};
