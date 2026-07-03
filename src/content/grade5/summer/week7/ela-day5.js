// Grade 5 Summer ELA/Writing — Week 7 (History Missions), Day 5.
// Grade-5 counterpart of g6.ela.w7.d5 (reading a primary source), pitched down
// one level: vocab support, a short simple source, and a question frame.

export const summerG5ElaW7D5 = {
  id: "g5.summer.ela.w7.d5",
  season: "summer",
  gradeLevel: 5,
  weekNumber: 7,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Reading a primary source",
  topicTag: "primary-source",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.RI.5.6", "CCSS.ELA-LITERACY.RI.5.1"],
  hook: "A primary source is like a time machine. You read words from a person who was really there. Today you learn the three questions to ask about any source.",
  keyTerms: [
    { term: "Primary source", definition: "A record made by someone who was there, like a diary, letter, or photo." },
    { term: "Secondary source", definition: "Something made later that talks about an event, like a textbook or a movie." },
    { term: "Perspective", definition: "One person's point of view, shaped by who they are and where they stand." }
  ],
  miniLesson: [
    "Ask WHO wrote it. A person's job and place change what they saw and what they missed.",
    "Ask WHEN it was written. Notes from the same day feel very different from a memory 30 years later.",
    "Ask WHY it was written. A private diary, a public speech, and a letter to a friend each have different goals."
  ],
  workedExample: {
    prompt:
      "Read: 'Today the leaders voted for independence. Many feel hope, and many feel fear. - a member of the Congress, written that same day.' What does it tell us, and what does it not tell us?",
    steps: [
      "Who: a member of the Congress, someone who was there, but not neutral.",
      "When: the same day as the vote, so it is fresh and full of feeling.",
      "Why: a private note, so it is probably honest.",
      "It tells us how it felt in the room. It does not tell us what farmers or other people outside felt."
    ],
    answer: "It is a fresh, first-hand note, but it only shows one point of view from inside the room."
  },
  items: [
    {
      id: "g5.summer.ela.w7.d5.q1",
      type: "multiple_choice",
      stem: "What is the FIRST question to ask about any primary source?",
      choices: [
        "Was it expensive?",
        "Who wrote it, and what was their job?",
        "Is it in color?",
        "Was it printed?"
      ],
      answerIndex: 1,
      explanation: "You must know who wrote it first. Their job and place shape everything else in the source.",
      hintLadder: [
        "Without knowing the writer, you cannot judge their point of view.",
        "The first question starts with 'who.'",
        "Ask who wrote it."
      ]
    },
    {
      id: "g5.summer.ela.w7.d5.q2",
      type: "multiple_choice",
      stem: "Which is MOST likely a primary source about the 1969 moon landing?",
      choices: [
        "A 2020 documentary movie.",
        "An astronaut's own notes written during the trip.",
        "A new history textbook.",
        "A friend telling you what they heard."
      ],
      answerIndex: 1,
      explanation: "Notes written by someone who was really there, during the event, are a primary source. The others were made later or are second-hand.",
      hintLadder: [
        "Who was actually there?",
        "Which one is first-hand?",
        "The astronaut's own notes."
      ]
    },
    {
      id: "g5.summer.ela.w7.d5.q3",
      type: "multiple_choice",
      stem: "A speech given to a big crowd is likely to be:",
      choices: [
        "The speaker's secret private thoughts.",
        "Shaped for the audience and the moment.",
        "Exactly the same as a private diary.",
        "Written with no point of view at all."
      ],
      answerIndex: 1,
      explanation: "A public speech is planned for the crowd. It shows what the speaker wanted to say out loud, which may not be their private thoughts.",
      hintLadder: [
        "Who is listening to a speech?",
        "Does that change what the speaker says?",
        "A speech is shaped for the crowd."
      ],
      misconceptionsTargeted: ["treats-all-sources-the-same"]
    },
    {
      id: "g5.summer.ela.w7.d5.q4",
      type: "short_answer",
      stem:
        "In the written records of a town meeting long ago, whose voices were most likely missing? In one or two sentences, explain why.",
      rubric: {
        level3: "Names a group that was often left out (like children, women, or enslaved people) and explains they were often not allowed to speak or write.",
        level2: "Names a left-out group but the reason is unclear or missing.",
        level1: "Names a group that was actually in charge (like the mayor), or gives no reason."
      },
      exemplar:
        "Children, women, and enslaved people were most likely missing from the records. That is because they often were not allowed to speak or write, so their voices were not saved.",
      hintLadder: [
        "Who was allowed to speak or write back then?",
        "Who was not allowed?",
        "Children, women, and enslaved people were often left out."
      ]
    },
    {
      id: "g5.summer.ela.w7.d5.q5",
      type: "short_answer",
      stem:
        "Imagine you found a letter your grandparent wrote at age 10. Write three questions to ask before you believe it. Use this frame: 'Who ___? When ___? Why ___?'",
      rubric: {
        level3: "Three clear questions, one about who wrote it, one about when, and one about why.",
        level2: "Three questions, but at least one is generic like 'is it true?'",
        level1: "Only one or two vague questions."
      },
      exemplar:
        "Who wrote this and where did they live? When was it written, and what was happening then? Why did they write it, and who was it for?",
      hintLadder: [
        "Use the who/when/why frame.",
        "Add one question about what might be missing.",
        "Be specific in each question."
      ]
    }
  ],
  reflectionPrompt: "This week you connected ancient civilizations, civics, leadership, and cause-and-effect chains. What is one moment from your life you would write down as a primary source for someone in 2060?",
  misconceptionBank: [
    {
      id: "treats-all-sources-the-same",
      label: "Treats every source the same",
      description: "Reads a public speech, a private diary, and an unhappy witness as if they all mean the same thing.",
      coachMove: "Always ask who, when, and why. Different answers mean you should trust them in different ways."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Detective of the Past",
      prompt:
        "You find a crumpled note in an old library book: 'Meet me by the oak at noon. Bring the map. - R.' What can you actually KNOW from this, and what are you only guessing?",
      answer: "You KNOW someone called R wanted to meet at noon by an oak tree and asked for a map. You are GUESSING who R is, what the map shows, and whether they even showed up. A primary source tells you some things and stays silent on others.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Time-Capsule Artifact",
      challenge:
        "Make one primary source that a kid in the year 2075 might find and study. Make it clear enough that a future reader could ask 'who, when, why' and find answers.",
      steps: [
        "Choose your artifact: a diary entry, a letter, a ticket with notes, or a labeled drawing.",
        "Add the 'who' and 'when' clues a future reader would need (your role, the date, where you are).",
        "Write the 'why': what was this for, and who was it meant for?",
        "Leave one honest gap: note one thing it does NOT show about your life."
      ],
      deliverable: "One handmade primary source plus a sticky note naming who, when, and why, and one thing it leaves out.",
      choiceBoard: [
        "Write a dated diary entry about today.",
        "Draw and label an artifact from your room.",
        "Write a short letter to a future student."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Primary Source Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.summer.ela.w7.d5.arena1",
          type: "multiple_choice",
          stem: "You want to know how a soldier FELT during a battle in 1945. Which is the strongest primary source for their feelings?",
          choices: [
            "A 2010 movie about the battle.",
            "A letter the soldier wrote home during the battle.",
            "A textbook chapter about the war.",
            "A new blog post ranking famous battles."
          ],
          answerIndex: 1,
          explanation: "A letter the soldier wrote during the battle is a first-hand record from someone who was there. The others were made later or are second-hand.",
          hintLadder: [
            "Who was actually there and writing at the time?",
            "Secondary sources sum things up later. Primary sources are first-hand.",
            "The soldier's own letter."
          ]
        },
        {
          id: "g5.summer.ela.w7.d5.arena2",
          type: "short_answer",
          stem: "A diary says 'Everyone in town was happy about the new factory.' Explain why a careful reader should NOT fully trust the word 'everyone.' Use who, when, or why.",
          rubric: {
            level3: "Notes that one diary writer only knows their own circle (who), may be writing in a happy moment (when), and had their own reason (why), so 'everyone' is too big a claim.",
            level2: "Questions 'everyone' and uses at least one of who/when/why, but the reasoning is thin.",
            level1: "Just says 'it might be wrong' without using the frame."
          },
          exemplar: "The writer is only one person (who) and cannot really ask the whole town. The note might be from an excited day (when), and a private diary often writes down hopes (why). So 'everyone' really means 'everyone I saw.'",
          hintLadder: [
            "Could one diary writer really know what the whole town felt?",
            "Use who, when, or why to test the word 'everyone.'",
            "Point out the writer only knows their own corner of town."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Notice and Name",
      prompt:
        "Sit still and slowly notice five things: one you can see, one you can hear, one you can feel, one you can smell, and one you remember from today. Say each one quietly. You are being a primary-source observer of your own moment.",
      scienceTieIn: "Naming what you sense wakes up the thinking part of your brain and calms the worry part, a focus tool that really works.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If a person in 2075 could read just ONE thing you wrote today, what would you want it to say about who you are and the time you live in?",
      badge: { id: "g5-summer-primary-source-detective", name: "Primary Source Detective", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
