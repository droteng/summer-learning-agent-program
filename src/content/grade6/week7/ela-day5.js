// Grade 6 ELA — Week 7, Day 5.
// Topic: reading primary sources.

export const grade6ElaWeek7Day5 = {
  id: "g6.ela.w7.d5",
  gradeLevel: 6,
  weekNumber: 7,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Reading a primary source",
  topicTag: "primary-source",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.6.RI.6", "C3.D3.1.6-8"],
  hook: "Primary sources are time-travel devices — you read words from the people who were there. Today you practice asking the right questions.",
  miniLesson: [
    "Who wrote it? Their identity, role, and place affect what they noticed and what they didn't.",
    "When was it written? An eyewitness account from the day of an event reads very differently from a memoir 30 years later.",
    "Why was it written? A diary entry, a public speech, and a private letter have different audiences and goals."
  ],
  workedExample: {
    prompt:
      "Read: 'July 4, 1776: Today the Continental Congress voted for independence. Many feel hope; many feel fear. — diary entry, member of the Congress.' What does the source tell us, and what doesn't it?",
    steps: [
      "Who: a member of the Continental Congress — eyewitness but not neutral.",
      "When: the same day as the vote — fresh and emotional.",
      "Why: private diary — likely honest rather than performative.",
      "Tells us: how it felt to those in the room. Doesn't tell us: what regular farmers, women, or enslaved people thought that day."
    ],
    answer: "Primary, eyewitness, fresh, honest tone — but partial. Doesn't capture views outside Congress."
  },
  items: [
    {
      id: "g6.ela.w7.d5.q1",
      type: "multiple_choice",
      stem: "What's the FIRST question to ask of any primary source?",
      choices: [
        "Was it expensive?",
        "Who wrote it and what was their role?",
        "Is it in color?",
        "Was it printed?"
      ],
      answerIndex: 1,
      explanation: "Identity and role shape everything else. Without knowing the author, you can't weigh the source.",
      hintLadder: [
        "Without knowing the author, you can't judge their angle.",
        "First question: who.",
        "Who wrote it?"
      ]
    },
    {
      id: "g6.ela.w7.d5.q2",
      type: "multiple_choice",
      stem:
        "Which is MOST likely a primary source about a 1969 moon landing?",
      choices: [
        "A 2020 documentary.",
        "Buzz Aldrin's personal mission log from the trip.",
        "A modern history textbook.",
        "A friend retelling what they heard."
      ],
      answerIndex: 1,
      explanation: "Personal log from someone who was there is the canonical primary source.",
      hintLadder: [
        "Who was actually present?",
        "First-hand?",
        "Aldrin's log."
      ]
    },
    {
      id: "g6.ela.w7.d5.q3",
      type: "multiple_choice",
      stem:
        "A speech given in public is likely to:",
      choices: [
        "Show the speaker's private thoughts unfiltered.",
        "Be shaped for the audience and the occasion.",
        "Be just like a diary entry.",
        "Have no perspective."
      ],
      answerIndex: 1,
      explanation: "Public speeches are crafted for effect. They reveal what the speaker wanted to say publicly — not always what they thought privately.",
      hintLadder: [
        "Who's listening to a speech?",
        "Does that shape what's said?",
        "Public speeches are crafted."
      ],
      misconceptionsTargeted: ["treats-all-sources-the-same"]
    },
    {
      id: "g6.ela.w7.d5.q4",
      type: "multiple_choice",
      stem: "Who is MOST LIKELY missing from the primary-source record of a 1860 town meeting?",
      choices: [
        "The mayor.",
        "Wealthy landowners.",
        "Children, women, and enslaved people — often without rights to speak or write.",
        "The newspaper editor."
      ],
      answerIndex: 2,
      explanation: "The historical record privileges those who had the right and means to write. Many voices were excluded.",
      hintLadder: [
        "Who was allowed to speak or write?",
        "Who wasn't?",
        "Children, women, and enslaved people often missing."
      ]
    },
    {
      id: "g6.ela.w7.d5.q5",
      type: "short_answer",
      stem:
        "Imagine a primary source: a letter your grandparent wrote at age 12. Write three questions you would ask of it before believing what it says.",
      rubric: {
        level3: "Three specific questions covering author identity/role, time/context, and purpose/audience.",
        level2: "Three questions but at least one is generic ('is it true?').",
        level1: "One or two vague questions."
      },
      exemplar:
        "1) Where were they living and what was happening in that town in that year?\n2) Who were they writing to, and why?\n3) What did they NOT mention that might still have been important?",
      hintLadder: [
        "Use the who/when/why frame.",
        "Add one question about what's missing.",
        "Be specific."
      ]
    }
  ],
  reflectionPrompt: "This week you connected ancient civilizations, civics, leadership, and causal chains. What's one moment in your own life you'd want to write down as a primary source for someone in 2060?",
  misconceptionBank: [
    {
      id: "treats-all-sources-the-same",
      label: "Treats every source as equally weighted",
      description: "Reads a public speech, a diary, and a hostile observer's account as if they're saying the same kind of thing.",
      coachMove: "Always ask: who, when, why. Different answers mean different weight."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "Detective of the Past",
      prompt:
        "You find a crumpled note in an old library book: 'Meet me by the oak at noon. Bring the map. — R.' What can you actually KNOW from this, and what are you only guessing?",
      answer: "You KNOW someone named (or initialed) R wanted to meet at noon by an oak and asked for a map. You're GUESSING who R is, what the map shows, why it mattered, or whether they even showed up — a primary source tells you some things and stays silent on others.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Time-Capsule Artifact",
      challenge:
        "Create one primary source that a kid in the year 2075 might find and study. Make it real enough that a future reader could ask 'who, when, why' and get answers.",
      steps: [
        "Choose your artifact: a diary entry, a letter, a ticket stub with notes, or a labeled drawing.",
        "Add the 'who' and 'when' clues a future historian would need (your role, the date, where you are).",
        "Write the 'why' — what was this for, and who was it meant for?",
        "Leave one honest gap: note something it does NOT reveal about your life."
      ],
      deliverable: "One handmade primary source plus a sticky note naming who/when/why and one thing it leaves out.",
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
          id: "g6.ela.w7.d5.arena1",
          type: "multiple_choice",
          stem: "You want to know how soldiers FELT during a 1945 battle. Which source is the strongest primary source for their feelings?",
          choices: [
            "A 2010 movie about the battle.",
            "A letter a soldier wrote home from the front during the battle.",
            "A textbook chapter summarizing the war.",
            "A modern blog post ranking famous battles."
          ],
          answerIndex: 1,
          explanation: "A letter written by a soldier during the battle is a first-hand account from someone who was there — the best primary source for their feelings. The others are secondary or far removed.",
          hintLadder: [
            "Who was actually present and writing at the time?",
            "Secondary sources summarize; primary sources are first-hand.",
            "The soldier's own letter from the front."
          ]
        },
        {
          id: "g6.ela.w7.d5.arena2",
          type: "short_answer",
          stem: "A diary says 'Everyone in town was thrilled about the new factory.' Explain why a careful reader should NOT fully trust the word 'everyone,' using the who/when/why frame.",
          rubric: {
            level3: "Notes that one diary writer can only know their own circle (who), may be writing in a hopeful moment (when), and had a personal purpose (why) — so 'everyone' overstates one limited viewpoint.",
            level2: "Questions 'everyone' and uses at least one of the who/when/why ideas, but reasoning is thin.",
            level1: "Just says 'it might be wrong' without using the frame."
          },
          exemplar: "The writer is one person (who) and can't actually survey the whole town, the entry may be from an excited first day (when), and a private diary often records hopes (why) — so 'everyone' is really 'everyone I saw or talked to.'",
          hintLadder: [
            "Could one diary writer really know what everyone in town felt?",
            "Use who/when/why to test the claim.",
            "Point out the writer only knows their own corner of the town."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: Notice & Name",
      prompt:
        "Sit still and slowly notice five things around you — one you can see, hear, feel, smell, and remember from today. Say each one quietly. You're being a primary-source observer of your own moment.",
      scienceTieIn: "Naming what you sense activates the thinking part of your brain and calms the alarm part — a focus tool you'll meet again in science.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "If a historian in 2075 could read just ONE thing you wrote today, what would you want it to say about who you are and the time you live in?",
      badge: { id: "primary-source-detective", name: "Primary Source Detective", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
