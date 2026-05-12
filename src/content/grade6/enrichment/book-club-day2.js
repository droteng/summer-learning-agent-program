// Grade 6 Founder's Book Club — Enrichment Day 2.
// Reading: Levels 4–6 of "Leo and The Game Squad" by Dr. Spark.
// (The Sleep Sanctum, Muscle Town Power Plants, The Sticky Locks Crisis.)
// Focus: energy systems — sleep, muscles, and how sugar locks the body up.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay2 = {
  id: "g6.book.e.d2",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 2,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Energy systems — sleep, muscle, and the Sticky Locks",
  topicTag: "narrative-friendship",
  estimatedMinutes: 30,
  standardsRefs: ["CCSS.RL.6.1", "CCSS.RL.6.2"],
  hook: `📖 Read Levels 4–6 of "${BOOK_METADATA.title}" first — "The Sleep Sanctum", "Muscle Town Power Plants", and "The Sticky Locks Crisis". Today you trace how the squad learns that rest, movement, and what you eat are all connected.`,
  miniLesson: [
    "Each Level visits a different body system: Sleep Sanctum (deep rest, melatonin, the brain rebuilding overnight), Muscle Town (the mitochondria powering every muscle, lactic acid when you push too hard), and the Sticky Locks Crisis (sugar gumming up the body's locks — the book's way of teaching you about how insulin works).",
    "When characters team up across challenges, the question to ask is: what does each member bring that the others don't? Different strengths make the squad stronger than any one of them alone — Leo's lead, Jamal's hustle, Nia's calm.",
    "Watch the dialogue. Flo, the green guide, drops one-liners that are also the book's lessons: 'Balance is the greatest power-up.' Notice when a line is both a joke AND a key idea."
  ],
  workedExample: {
    prompt: "How can you figure out the squad's job in each Level?",
    steps: [
      "Find the moment in the chapter where Flo or another guide names the threat.",
      "Find what the squad chooses to do about it — the actions tell you the goal.",
      "Check whether the body system they're inside (sleep, muscle, insulin/sugar) lines up with the obstacle.",
      "Write it as 'In Level X, the squad's job was to ___ inside the ___ system, so that ___.'"
    ],
    answer: "A clear, body-system-aware goal expressed as action + reason in one sentence."
  },
  keyTerms: [
    { term: "Mitochondria", definition: "Tiny power plants inside muscle cells that make energy — they crash when fueled with junk." },
    { term: "Dialogue", definition: "What characters say to each other; in this book, Flo's lines often double as the lesson." },
    { term: "Conflict", definition: "Anything that gets in the way of the squad's goal — like sugar 'sticky locks' jamming the body's controls." }
  ],
  items: [
    {
      id: "g6.book.e.d2.q1",
      type: "short_answer",
      stem: "By the end of Level 5 (Muscle Town), each squad member has shown a clear strength. Name Leo, Jamal, and Nia, and for each one, write one strength they bring to the team.",
      hintLadder: [
        "Look at how each kid handled the muscle challenge.",
        "Who steadies the team when things get loud? Who pushes ahead? Who notices the details?",
        "Format: 'Leo — strength. Jamal — strength. Nia — strength.'"
      ],
      rubric: {
        level3: "Names each squad member with one specific strength tied to evidence from Levels 4–5 (e.g., Leo leading, Jamal's grit, Nia's observation).",
        level2: "Lists members but strengths are vague or generic.",
        level1: "Lists names only, no strengths, or mixes up which kid does what."
      },
      exemplar: "Leo brings curiosity and leadership — he speaks up and tries new things. Jamal brings grit and humor — he keeps going even when his 'tongue's on strike.' Nia brings calm and quick observation — she notices what's happening before others do.",
      misconceptionsTargeted: ["missing-character-strengths"]
    },
    {
      id: "g6.book.e.d2.q2",
      type: "short_answer",
      stem: "Write the squad's main goal in the Sticky Locks Crisis (Level 6) as one sentence: 'They are trying to ___ so that ___.'",
      hintLadder: [
        "Find the moment in Level 6 where the obstacle appears (sticky locks jamming the body).",
        "What action does the squad take to fix it?",
        "Why does it matter — what's at stake if the locks stay jammed?"
      ],
      rubric: {
        level3: "Goal is concrete (clearing sticky locks / freeing the insulin keys) AND motivated (so the body can use sugar properly), in the required sentence format.",
        level2: "Has the action OR the reason but not both clearly.",
        level1: "Vague answer like 'they want to win' with no specifics from Level 6."
      },
      exemplar: "They are trying to clear the sticky locks jamming the body's doors so that sugar can flow into cells the way it's supposed to.",
      misconceptionsTargeted: ["vague-goal"]
    },
    {
      id: "g6.book.e.d2.q3",
      type: "multiple_choice",
      stem: "Flo says 'Balance is the greatest power-up.' Which detail BEST shows what she means?",
      choices: [
        "Leo only eats salad and never plays games.",
        "Jamal sleeps for 14 hours straight after Muscle Town.",
        "The mitochondria glow when fueled right and crash when fueled with junk — the body needs both rest AND real food AND movement.",
        "Nia takes off her glasses to look cooler."
      ],
      answerIndex: 2,
      explanation: "Balance means combining good fuel, rest, and movement — not picking just one. The book shows this through the mitochondria's glow.",
      hintLadder: [
        "Balance means more than one thing working together.",
        "Look at how the mitochondria react to different fuels.",
        "The answer talks about combining several habits."
      ]
    },
    {
      id: "g6.book.e.d2.q4",
      type: "short_answer",
      stem: "Group prompt (skip if you're reading alone): which squad member would YOU team up with in real life — Leo, Jamal, or Nia — and why? Trade answers and write down which one the other reader picked.",
      hintLadder: [
        "Pick one, name what you have in common with them.",
        "Share your pick with the other reader.",
        "Write down: 'I picked ___ because ___. The other reader picked ___ because ___.'"
      ],
      rubric: {
        level3: "Picks a specific squad member, names a real-life shared trait, records the other reader's pick + reason.",
        level2: "Names a character but reasoning is thin OR misses the other reader.",
        level1: "Generic answer, no specifics from book."
      },
      exemplar: "I'd team up with Nia because I notice details too and stay calm when other people are loud. My friend picked Jamal because he likes how Jamal keeps going even when things are hard."
    },
    {
      id: "g6.book.e.d2.q5",
      type: "multiple_choice",
      stem: "Which BEST captures what 'mitochondria' do in the body (and in the book)?",
      choices: [
        "Send text messages between cells.",
        "Act as tiny power plants that turn food into energy for muscles.",
        "Carry oxygen through the bloodstream.",
        "Fight viruses and bacteria."
      ],
      answerIndex: 1,
      explanation: "Mitochondria are the energy factories of cells, especially muscle cells. The book shows them glowing when fed right.",
      hintLadder: [
        "Check today's key terms.",
        "What did Muscle Town's power plants do?",
        "Think 'energy.'"
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "missing-character-strengths",
      label: "Lists names without strengths",
      description: "Names the squad but doesn't pair each with what they bring to the team.",
      coachMove: "Ask: 'What does this person do that no one else on the squad does as well?'"
    },
    {
      id: "vague-goal",
      label: "Vague goal like 'they want to win'",
      description: "States no specific objective and no reason.",
      coachMove: "Force the format: 'They are trying to ___ so that ___,' grounded in Level 6's actual events."
    }
  ],
  reflectionPrompt:
    "If you were going to build a real-life learning squad with three other people, what one strength would you contribute that the others might not?"
};
