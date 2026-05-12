// Grade 6 Founder's Book Club — Enrichment Day 4.
// Reading: Chapters 9–11 of "Leo and The Game Squad" by Dr. Spark.
// Focus: the crisis — the squad faces its hardest moment.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay4 = {
  id: "g6.book.e.d4",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 4,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "The crisis — when the plan breaks",
  topicTag: "narrative-climax",
  estimatedMinutes: 32,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.RL.6.5"],
  hook: `📖 Read Chapters 9–11 of "${BOOK_METADATA.title}" first. This is the squad's hardest stretch — and you'll see what they're really made of.`,
  miniLesson: [
    "Every chapter book has a moment called the 'climax' — when everything that's been building up finally breaks open. Usually the characters' plan stops working, and they have to invent something new under pressure.",
    "Watch for what each member of the squad does when things go wrong. Trouble is the truest test of friendship and of personal growth.",
    "Theme is the bigger idea the book is exploring. Often the climax is when the theme becomes visible — through one moment, one line, one choice."
  ],
  workedExample: {
    prompt: "How do you spot a story's theme?",
    steps: [
      "Find the moment where everything almost falls apart.",
      "Look at what the main character realizes or learns.",
      "Pull out the lesson in your own words — not what the character says, but what the book is saying through them.",
      "Test it: does the rest of the book support that idea? If yes, you've found a theme."
    ],
    answer: "A theme is a one-sentence claim about how the world works (e.g., 'real friendship survives mistakes')."
  },
  keyTerms: [
    { term: "Climax", definition: "The story's peak moment of tension where the main conflict comes to a head." },
    { term: "Theme", definition: "The big idea the book is exploring — usually a claim about life, people, or growing up." },
    { term: "Turning point", definition: "A moment that changes the direction of the story." }
  ],
  items: [
    {
      id: "g6.book.e.d4.q1",
      type: "short_answer",
      stem: "What goes wrong in Chapters 9–11? Describe the crisis in 2 sentences.",
      hintLadder: [
        "Find the moment when the plan stops working.",
        "What happens? What's at stake?",
        "Write it tightly — one sentence for what happens, one for what's at stake."
      ],
      rubric: {
        level3: "Two tight sentences: one for what happens, one for what's at stake. Specific and accurate.",
        level2: "Captures the crisis but rambles or misses 'what's at stake.'",
        level1: "Generic summary, no specifics or stakes."
      },
      exemplar: "The boss they thought they beat comes back stronger, and one squad member gets locked out of the game. The squad has to finish the level without them.",
      misconceptionsTargeted: ["summarizing-everything"]
    },
    {
      id: "g6.book.e.d4.q2",
      type: "short_answer",
      stem: "What's one theme this book is exploring? Write it as a complete sentence and back it up with one moment from the book.",
      hintLadder: [
        "Look at what Leo learns in this section.",
        "Turn it into a general claim: 'In life, ___ matters.'",
        "Find one moment in the book where that claim is true."
      ],
      rubric: {
        level3: "Theme stated as a general life claim (not plot summary) AND backed with one specific moment.",
        level2: "Theme stated but too narrow (just retelling plot) OR weak evidence.",
        level1: "Theme is just a one-word topic ('friendship') with no claim or evidence."
      },
      exemplar: "Theme: real friendship is built by showing up when it's hard, not when it's easy. Moment: Sam stays to help Leo even though it costs him his chance to win.",
      misconceptionsTargeted: ["theme-too-narrow"]
    },
    {
      id: "g6.book.e.d4.q3",
      type: "multiple_choice",
      stem: "Why do good books have moments where the plan FAILS?",
      choices: [
        "To make readers feel sad.",
        "To pad out the page count.",
        "Because pressure is what reveals what characters truly value.",
        "To make the ending shorter."
      ],
      answerIndex: 2,
      explanation: "Failure forces characters to act on what they really believe — that's how the reader (and the character) sees their values clearly.",
      hintLadder: [
        "Easy moments don't test anyone.",
        "Pressure reveals.",
        "Which option is about character?"
      ]
    },
    {
      id: "g6.book.e.d4.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): predict how the book will end. Trade predictions and explain your reasoning. (Don't read ahead — the next mission covers the ending.)",
      hintLadder: [
        "Look at what's still unresolved.",
        "Make a specific prediction (who does what).",
        "Compare with the other reader."
      ],
      rubric: {
        level3: "Specific prediction with reasoning grounded in what's unresolved AND captures the other reader's prediction.",
        level2: "Has a prediction but reasoning thin OR misses the second reader.",
        level1: "Vague or generic prediction with no grounding."
      },
      exemplar: "I think Leo will lead the final push and choose helping his friends over winning alone. My friend thinks Maya will turn out to know the bigger secret behind the game."
    },
    {
      id: "g6.book.e.d4.q5",
      type: "multiple_choice",
      stem: "The 'climax' of a story is BEST described as:",
      choices: [
        "The first chapter.",
        "The story's peak moment of tension where the main conflict comes to a head.",
        "Any happy moment.",
        "The author's introduction."
      ],
      answerIndex: 1,
      explanation: "The climax is the highest-stakes moment where everything that's been building has to be resolved.",
      hintLadder: [
        "Check today's key terms.",
        "Think 'peak tension.'",
        "It's the moment everything has been building toward."
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "summarizing-everything",
      label: "Retells the whole section instead of naming the crisis",
      description: "Long blow-by-blow with no clear 'this is what broke.'",
      coachMove: "Force two sentences: one for what happened, one for what's at stake."
    },
    {
      id: "theme-too-narrow",
      label: "Confuses topic with theme",
      description: "Says theme is 'friendship' or 'games' — the topic, not a claim about it.",
      coachMove: "Theme is a SENTENCE. 'In life, friendship survives mistakes' beats 'friendship.'"
    }
  ],
  reflectionPrompt:
    "Think of a time YOUR plan broke. What did you do next? Did you discover anything about yourself that day?"
};
