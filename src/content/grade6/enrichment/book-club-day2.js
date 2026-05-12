// Grade 6 Founder's Book Club — Enrichment Day 2.
// Reading: Chapters 3–5 of "Leo and The Game Squad" by Dr. Spark.
// Focus: the squad forms and a goal emerges.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay2 = {
  id: "g6.book.e.d2",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 2,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "The squad forms — friendship and a shared goal",
  topicTag: "narrative-friendship",
  estimatedMinutes: 30,
  standardsRefs: ["CCSS.RL.6.1", "CCSS.RL.6.2"],
  hook: `📖 Read Chapters 3–5 of "${BOOK_METADATA.title}" first. Today you trace how Leo finds his squad and what they're trying to do together.`,
  miniLesson: [
    "When characters team up, story-makers ask: what does each person bring that the others don't have? Different strengths make the squad stronger than any one member.",
    "A 'goal' isn't just 'win the game.' It's the specific, concrete thing the team is trying to achieve in the next few chapters — find an item, beat a boss, solve a puzzle, protect a friend.",
    "Notice how characters talk to each other. Friendship in real life and in stories is mostly small moments of listening, joking, and showing up — not big speeches."
  ],
  workedExample: {
    prompt: "How can you figure out the squad's main goal in this section?",
    steps: [
      "Find the moment where they decide to work together. Often it's a conversation.",
      "Find what they say they want — the words are usually direct.",
      "Check whether their actions match those words. Real goals show up in what people do.",
      "Write the goal as 'They are trying to ___ so that ___.'"
    ],
    answer: "A clear goal expressed as action + reason in one sentence."
  },
  keyTerms: [
    { term: "Goal", definition: "The specific thing a character or team is trying to achieve." },
    { term: "Dialogue", definition: "What characters say to each other; reveals personality and plans." },
    { term: "Conflict", definition: "Anything that gets in the way of the goal — outside force or inner doubt." }
  ],
  items: [
    {
      id: "g6.book.e.d2.q1",
      type: "short_answer",
      stem: "Who is in the Game Squad by the end of Chapter 5? Name them and, for each one, write one strength they bring to the team.",
      hintLadder: [
        "List the names you remember.",
        "For each name, what are they good at?",
        "Format: 'Name — strength.'"
      ],
      rubric: {
        level3: "Lists each named squad member with one specific strength tied to evidence from the book.",
        level2: "Lists members but strengths are vague or generic.",
        level1: "Lists names only, no strengths, or misses members."
      },
      exemplar: "Leo brings curiosity and problem-solving. Maya brings courage and quick decisions. Sam brings tech skills.",
      misconceptionsTargeted: ["missing-character-strengths"]
    },
    {
      id: "g6.book.e.d2.q2",
      type: "short_answer",
      stem: "Write the squad's main goal in this section as one sentence: 'They are trying to ___ so that ___.'",
      hintLadder: [
        "Find the chapter where they make a decision together.",
        "What action do they choose?",
        "Why does it matter to them?"
      ],
      rubric: {
        level3: "Goal is concrete (what) AND motivated (so that...), in the required sentence format.",
        level2: "Has the action OR the reason but not both clearly.",
        level1: "Vague answer like 'they want to win' with no specifics."
      },
      exemplar: "They are trying to unlock the hidden level so that they can find out what happened to the missing player.",
      misconceptionsTargeted: ["vague-goal"]
    },
    {
      id: "g6.book.e.d2.q3",
      type: "multiple_choice",
      stem: "Which detail tells you the MOST about whether two characters are real friends?",
      choices: [
        "How many times they say 'I'm your friend.'",
        "Whether they have the same hair color.",
        "Whether they listen when one of them is upset.",
        "How many likes they get on a photo together."
      ],
      answerIndex: 2,
      explanation: "Friendship shows up in attention — listening, noticing, showing up — not declarations.",
      hintLadder: [
        "Strong friendships show in actions, not words.",
        "Which option is about paying attention to another person?",
        "Look for the action option."
      ]
    },
    {
      id: "g6.book.e.d2.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): which member of the squad do you think you'd team up with in real life? Trade answers and explain.",
      hintLadder: [
        "Pick one character, name what you have in common.",
        "Tell the other reader.",
        "Write down which one they picked and why."
      ],
      rubric: {
        level3: "Picks a specific squad member, names a real-life shared trait, records the other reader's pick + reason.",
        level2: "Names a character but reasoning is thin OR misses the other reader.",
        level1: "Generic answer, no specifics from book."
      },
      exemplar: "I'd team up with Sam because we both like figuring out how things work. My friend picked Maya because she's brave and likes leading."
    },
    {
      id: "g6.book.e.d2.q5",
      type: "multiple_choice",
      stem: "Which BEST captures what 'conflict' means in a story?",
      choices: [
        "Two characters yelling at each other.",
        "Anything that gets in the way of a character's goal.",
        "A grammar mistake in the book.",
        "The story's setting."
      ],
      answerIndex: 1,
      explanation: "Conflict is any obstacle — external or internal — between a character and what they want.",
      hintLadder: [
        "Check today's key terms.",
        "It can be people, situations, or feelings.",
        "Think 'in the way of the goal.'"
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "missing-character-strengths",
      label: "Lists names without strengths",
      description: "Names the squad but doesn't pair each with what they bring.",
      coachMove: "Ask: 'What does this person do that no one else on the squad does as well?'"
    },
    {
      id: "vague-goal",
      label: "Vague goal like 'they want to win'",
      description: "States no specific objective and no reason.",
      coachMove: "Force the format: 'They are trying to ___ so that ___.'"
    }
  ],
  reflectionPrompt:
    "If you were going to build a real-life learning squad with three other people, what one strength would you contribute that the others might not?"
};
