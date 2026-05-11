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
  estimatedMinutes: 18,
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
  ]
};
