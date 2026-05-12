// Grade 6 Founder's Book Club — Enrichment Day 3.
// Reading: Chapters 6–8 of "Leo and The Game Squad" by Dr. Spark.
// Focus: the challenge intensifies — conflict and choice.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay3 = {
  id: "g6.book.e.d3",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 3,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Conflict and choices — what tests the squad",
  topicTag: "narrative-conflict",
  estimatedMinutes: 30,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.RL.6.3"],
  hook: `📖 Read Chapters 6–8 of "${BOOK_METADATA.title}" first. Today the squad runs into real trouble — and the choices they make tell you who they really are.`,
  miniLesson: [
    "Every good story has at least one moment where a character has to choose between two things they want. That moment is called a 'dilemma' — and it's the most revealing part of any chapter.",
    "Conflicts come in two flavors: external (something or someone gets in the way) and internal (a character's own doubt or fear). Strong books use both.",
    "When you spot a tough choice, ask: what did the character give up to choose what they chose? That trade-off is the heart of growth."
  ],
  workedExample: {
    prompt: "How do you analyze a character's tough choice?",
    steps: [
      "Name the two things the character wanted.",
      "Identify what they actually picked.",
      "Name what they gave up.",
      "Decide what the choice tells you about their values."
    ],
    answer: "A short paragraph linking choice + sacrifice + character value."
  },
  keyTerms: [
    { term: "Dilemma", definition: "A hard choice between two things a character cares about." },
    { term: "External conflict", definition: "A problem from outside — another character, the world, nature, a system." },
    { term: "Internal conflict", definition: "A problem from inside — doubt, fear, a hard truth a character has to face." }
  ],
  items: [
    {
      id: "g6.book.e.d3.q1",
      type: "short_answer",
      stem: "Name one external conflict the squad faces in Chapters 6–8 and one internal conflict one of the members faces.",
      hintLadder: [
        "External: who or what is fighting against them?",
        "Internal: which character is doubting themselves?",
        "Write one sentence for each."
      ],
      rubric: {
        level3: "Correctly distinguishes external vs internal with one specific example of each from this section.",
        level2: "Names both but one is mislabeled OR vague.",
        level1: "Only names one type, or confuses the two."
      },
      exemplar: "External: the squad has to get past a glitchy boss with limited health. Internal: Leo doubts whether he's good enough to lead.",
      misconceptionsTargeted: ["confusing-internal-external"]
    },
    {
      id: "g6.book.e.d3.q2",
      type: "short_answer",
      stem: "Find a moment in this section where a character had to make a tough choice. What did they pick? What did they give up?",
      hintLadder: [
        "Look for a chapter where a character pauses or hesitates.",
        "What were their two options?",
        "Which option did they take? What was the cost?"
      ],
      rubric: {
        level3: "Specific moment, clear choice, explicit cost — all three elements present.",
        level2: "Has the choice but the cost is glossed over or missing.",
        level1: "Generic 'they did the right thing' with no specifics."
      },
      exemplar: "Maya chose to wait for Sam instead of going ahead alone. She gave up an easier win, but kept the squad together.",
      misconceptionsTargeted: ["skipping-the-cost"]
    },
    {
      id: "g6.book.e.d3.q3",
      type: "multiple_choice",
      stem: "Which is the BEST sign that a character is changing for the better?",
      choices: [
        "They get a new outfit.",
        "They start doing what scares them, on purpose, because it matters.",
        "They give up and let someone else handle it.",
        "Everyone tells them they're great."
      ],
      answerIndex: 1,
      explanation: "Real growth shows up as voluntary courage in pursuit of something meaningful.",
      hintLadder: [
        "Growth costs something.",
        "Look for the option about doing something hard.",
        "Pick the one with intent + meaning."
      ]
    },
    {
      id: "g6.book.e.d3.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): if YOU were in the squad at the toughest moment of this section, what would you do? Trade answers and discuss whether you'd both make the same call.",
      hintLadder: [
        "Pick the toughest moment from Chapters 6–8.",
        "Write what you'd do.",
        "Compare with the other reader."
      ],
      rubric: {
        level3: "Concrete personal choice, clear reasoning, captures the other reader's perspective.",
        level2: "Has personal choice but reasoning thin OR misses the discussion.",
        level1: "Vague or off-topic."
      },
      exemplar: "I'd take the slower, safer route even if it cost us time. My friend would push forward — we disagree on risk."
    },
    {
      id: "g6.book.e.d3.q5",
      type: "multiple_choice",
      stem: "A 'dilemma' is BEST described as:",
      choices: [
        "A boring part of the book.",
        "A hard choice between two things a character cares about.",
        "Any time a character feels happy.",
        "A grammar error in a sentence."
      ],
      answerIndex: 1,
      explanation: "Dilemmas are the genuine forks in the road where character is revealed.",
      hintLadder: [
        "Look at today's key terms.",
        "It involves two values pulling in opposite directions.",
        "The character can't have both."
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "confusing-internal-external",
      label: "Mixes up internal vs external conflict",
      description: "Labels a doubt as external or a villain as internal.",
      coachMove: "Internal = inside the character's head. External = outside force. Sort each conflict into one bucket."
    },
    {
      id: "skipping-the-cost",
      label: "Describes a choice without naming the cost",
      description: "Says 'they did the right thing' but doesn't note what was given up.",
      coachMove: "Every real choice has a cost. Ask: 'What did they walk away from?'"
    }
  ],
  reflectionPrompt:
    "Have you ever had to give something up to do the right thing? Write a few sentences. (Save this — it's a great seed for a writing piece later.)"
};
