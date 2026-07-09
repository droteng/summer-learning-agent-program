// Grade 7 History/Civics — Summer Story Builders, Week 3, Day 5.
// Topic: historical fiction — grounding a story in a real historical era using
// accurate details and reliable sources.

export const summerG7HistoryW3D5 = {
  id: "g7.summer.hist.w3.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 3,
  dayNumber: 5,
  subject: "History/Civics",
  topic: "Historical fiction — grounding a story in a real era",
  topicTag: "historical-fiction",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.10", "C3.D3.His.16"],
  hook: "The best adventure stories often hide inside real history. But a story set in 1850 falls apart the moment a character checks a smartphone. Today you learn to ground fiction in a true era — using accurate details and reliable sources so your invented characters live in a world that actually existed.",
  miniLesson: [
    "Historical fiction blends invented characters and events with a REAL time and place. The plot can be made up, but the setting — clothing, tools, food, laws, language, and daily life — must stay true to the era, or the story loses its power to transport a reader.",
    "An anachronism is a detail placed in the wrong time (a knight glancing at a wristwatch). Writers hunt anachronisms the way editors hunt typos, because a single one can shatter the reader's belief in the whole world.",
    "To get details right, writers research reliable sources. A primary source (a diary, letter, photograph, or artifact from the time) is the strongest evidence; secondary sources (a historian's book or a museum article) help too. Always weigh a source's reliability before trusting it."
  ],
  workedExample: {
    prompt: "You're writing a story about a kid working in a factory during the early 1900s Industrial era. How do you keep it historically grounded?",
    steps: [
      "Fix the era and place precisely: a textile mill in the northeastern U.S., around 1908.",
      "Research daily life: long shifts, dangerous machines, child labor before reform laws.",
      "Check every detail for anachronisms — no electric phones the character can call home on, no modern safety gear.",
      "Cite a reliable source (a museum's child-labor archive or a period photograph) to confirm the details."
    ],
    answer: "Keep the invented character, but anchor the mill, the hours, the machines, and the absence of child-labor protections to documented facts from reliable sources — and scrub any anachronisms."
  },
  items: [
    {
      id: "g7.summer.hist.w3.d5.q1",
      type: "multiple_choice",
      stem: "What is an ANACHRONISM in historical fiction?",
      choices: [
        "A character who is the hero of the story",
        "A detail placed in the wrong time period, like a Roman soldier wearing sneakers",
        "The setting of a story",
        "A comparison using 'like' or 'as'"
      ],
      answerIndex: 1,
      explanation: "An anachronism is something out of its proper time; a single one can break the reader's belief in the historical world.",
      hintLadder: [
        "The word points to something in the wrong TIME.",
        "Think of an object that couldn't exist yet in that era.",
        "A Roman soldier in sneakers is the classic example."
      ]
    },
    {
      id: "g7.summer.hist.w3.d5.q2",
      type: "multiple_choice",
      stem: "Which of these is a PRIMARY source for a story set during the American Revolution?",
      choices: [
        "A soldier's handwritten diary from 1777",
        "A textbook written in 2024 about the Revolution",
        "A modern movie about the Revolution",
        "A blog post summarizing the war"
      ],
      answerIndex: 0,
      explanation: "A primary source comes directly from the time period; a 1777 diary is firsthand evidence. The others are secondary or later interpretations.",
      hintLadder: [
        "A primary source is made DURING the time period.",
        "Which one was created by someone who was actually there?",
        "The 1777 diary is a firsthand, primary source."
      ],
      misconceptionsTargeted: ["fiction-needs-no-facts"]
    },
    {
      id: "g7.summer.hist.w3.d5.q3",
      type: "multiple_choice",
      stem: "In historical fiction, which part is the writer allowed to INVENT?",
      choices: [
        "The technology available in that era",
        "The laws and major events of the period",
        "The clothing people actually wore",
        "The individual characters and their personal adventure"
      ],
      answerIndex: 3,
      explanation: "Writers invent characters and their personal plots, but the surrounding world — technology, laws, events, clothing — must stay true to the real era.",
      hintLadder: [
        "What must stay TRUE, and what can be made up?",
        "The world must be real; the people in it can be invented.",
        "Characters and their personal story are the writer's to create."
      ]
    },
    {
      id: "g7.summer.hist.w3.d5.q4",
      type: "short_answer",
      stem: "Choose a real historical era you find interesting. Name THREE accurate details (from daily life, tools, clothing, or events) you would include to make a story set there feel authentic.",
      rubric: {
        level3: "Names a specific era AND three accurate, era-appropriate details that would genuinely ground a story, showing real historical knowledge.",
        level2: "Names an era and two solid details, or three details that are vague or only loosely accurate.",
        level1: "Era is unclear, or details are generic, anachronistic, or fewer than two."
      },
      exemplar: "Ancient Egypt, around 1300 BCE: characters would write on papyrus with reed pens, travel and trade along the Nile by boat, and mark the year by the river's annual flooding that fed the crops.",
      hintLadder: [
        "Pick an era you already know something about.",
        "Think about how people ate, dressed, worked, or traveled then.",
        "Make each detail specific and true to that time."
      ]
    },
    {
      id: "g7.summer.hist.w3.d5.q5",
      type: "short_answer",
      stem: "A writer wants a detail for a story set in medieval Europe and finds it in (a) a museum's article on medieval life and (b) a random social-media post with no author. Which source is more reliable, and why? Explain how you decide if a source can be trusted.",
      rubric: {
        level3: "Correctly chooses the museum article AND explains reliability using clear criteria (author expertise, evidence, purpose, or accountability), showing real source-evaluation reasoning.",
        level2: "Chooses correctly but the reasoning is thin or names only one weak criterion.",
        level1: "Chooses wrongly or gives no real reasoning about reliability."
      },
      exemplar: "The museum article is more reliable because it's written by experts, backed by evidence, and accountable to an institution, while the anonymous post has no known author or sources to check. I judge a source by who made it, whether it cites evidence, and why it was created.",
      hintLadder: [
        "Ask WHO made each source and whether they're an expert.",
        "Can you check the evidence behind the claim?",
        "Name at least one clear test for reliability."
      ]
    }
  ],
  reflectionPrompt: "If you could drop a fictional character into any real moment in history, when and where would it be? What one true detail would make that world feel real on the page?",
  misconceptionBank: [
    {
      id: "fiction-needs-no-facts",
      label: "Thinks fiction frees a writer from getting history right",
      description: "Believes that because the characters are invented, none of the historical details need to be accurate.",
      coachMove: "Draw the line: 'You invent the PEOPLE, but you borrow a REAL world. Get the world wrong and readers stop believing the people too.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Spot the Anachronism",
      prompt:
        "In a story set in ancient Rome, a senator 'pulled out his phone to text the emperor before hopping on his horse.' Which detail doesn't belong in that era — and why would it break the reader's belief?",
      answer:
        "The phone (and texting) is the anachronism — no such technology existed in ancient Rome. The horse is fine. One out-of-time detail like that shatters the reader's trust in the whole historical world.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Era Research Dossier",
      challenge:
        "Build a research dossier for a real historical era you could set an adventure in. Gather accurate details from reliable sources so your future story stays grounded and anachronism-free.",
      steps: [
        "Choose a specific era and place (e.g., Gold Rush California, 1849; or Edo-period Japan).",
        "List five accurate details across categories: clothing, tools, food, travel, and daily life.",
        "Name at least one reliable source (a museum, an encyclopedia, or a primary document) for your facts.",
        "Flag one anachronism a careless writer might slip in — and how you'd avoid it."
      ],
      deliverable: "An era research dossier with five accurate details, at least one cited reliable source, and one flagged anachronism to avoid.",
      choiceBoard: [
        "Design the dossier as an illustrated 'time-travel field guide' with labeled details.",
        "Write a short 'a day in the life' paragraph for someone living in that era, packed with accurate detail.",
        "Make a two-column chart of 'true to the era' vs. 'anachronisms to avoid.'"
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Time Guardian Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.hist.w3.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence would belong in a WELL-RESEARCHED story set in the 1200s, with no anachronisms?",
          choices: [
            "The knight checked his watch, then rode toward the castle.",
            "The squire snapped a quick photo of the tournament.",
            "The messenger sealed the letter with hot wax and handed it to a rider bound for the castle.",
            "The lord turned on the lamp and read the newspaper."
          ],
          answerIndex: 2,
          explanation: "Wax-sealed letters carried by riders fit the 1200s; watches, photos, electric lamps, and newspapers are all anachronisms for that era.",
          hintLadder: [
            "Which items simply didn't exist in the 1200s?",
            "Watches, cameras, and electric lamps are far too modern.",
            "The wax-sealed letter and mounted messenger fit the era."
          ]
        },
        {
          id: "g7.summer.hist.w3.d5.arena2",
          type: "short_answer",
          stem: "A writer wants their story set during the 1930s Dust Bowl to feel authentic. Name one accurate detail they should include AND one reliable source they could use to check it.",
          rubric: {
            level3: "Gives one accurate, era-appropriate Dust Bowl detail (drought, dust storms, farm failures, migration west) AND names a genuinely reliable source type (museum, historical archive, primary photo/interview).",
            level2: "Gives an accurate detail but a weak or vague source, or a strong source but a shaky detail.",
            level1: "Detail is inaccurate/anachronistic or no reliable source is named."
          },
          exemplar: "The story could show families abandoning failed farms and driving west to look for work, and the writer could check it against Library of Congress photographs and oral histories from the 1930s.",
          hintLadder: [
            "Recall what actually happened during the Dust Bowl.",
            "Pick one true detail about the drought, storms, or migration.",
            "Name a trustworthy source like an archive, museum, or primary record."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Time-Traveler's Stretch",
      prompt:
        "Pretend you're stepping through time: reach way back over your head to 'grab the past,' pull it slowly forward to your chest for 'the present,' then press your palms out ahead for 'the future.' Move slowly through all three, five times.",
      scienceTieIn: "Slow, deliberate reaching movements gently stretch the spine and shoulders and boost blood flow, helping you refocus after concentrated research work.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Name the real historical era you'd most love to set an adventure in. Write one true, specific detail about daily life there that you'd weave into your story to make readers believe they've traveled back in time.",
      badge: { id: "g7-time-guardian", name: "Time Guardian", emoji: "⏳" },
      estimatedMinutes: 7
    }
  }
};
