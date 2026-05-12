// Grade 6 Founder's Book Club — Enrichment Day 3.
// Reading: Levels 7–9 of "Leo and The Game Squad" by Dr. Spark.
// (Immune City: The Defenders, The Pressure Beast, Emergency Response Zone.)
// Focus: external challenges vs. internal pressure — and the choice to rest.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay3 = {
  id: "g6.book.e.d3",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 3,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Defenders, the Pressure Beast, and the choice to rest",
  topicTag: "narrative-conflict",
  estimatedMinutes: 32,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.RL.6.3"],
  hook: `📖 Read Levels 7–9 of "${BOOK_METADATA.title}" — "Immune City: The Defenders", "The Pressure Beast", and "Emergency Response Zone". Today the squad takes on the biggest external threat in the book AND the inner enemy made of stress, salt, grease, and sitting still.`,
  miniLesson: [
    "Every story has two kinds of conflict. **External**: villains, broken arteries, plaque clots — something or someone outside the character. **Internal**: doubt, fear, the urge to push past your limits — something inside. The Pressure Beast is BOTH at once: he's outside (smashing walls) AND he feeds on what's inside (stress, sitting still).",
    "Notice the moment when a character has to choose between two things they care about — a 'dilemma.' That's the most revealing moment in any chapter. The book gives you a great one in Level 8 when Leo realizes the answer to defeating the Pressure Beast is REST, not more fighting.",
    "Agent T has been watching the squad since Level 2. Track what happens to his badge color across Levels 7–8 — it tells you he's changing his mind."
  ],
  workedExample: {
    prompt: "How do you analyze a character's tough choice?",
    steps: [
      "Name what the character wanted (Leo wanted to beat the Pressure Beast by hitting harder).",
      "Identify what they actually picked (he chose to REST — to close his eyes, slow his breath).",
      "Name what they gave up (the heroic 'fight everything' approach).",
      "Decide what the choice tells you about Leo's values — that he's learning balance over force."
    ],
    answer: "A short paragraph linking choice + sacrifice + character growth."
  },
  keyTerms: [
    { term: "Dilemma", definition: "A hard choice between two things a character cares about (fight more vs. rest)." },
    { term: "External conflict", definition: "A problem from outside — the Pressure Beast smashing artery walls, plaque clots blocking flow." },
    { term: "Internal conflict", definition: "A problem from inside — stress, the urge to keep pushing, the part of Leo that won't slow down." }
  ],
  items: [
    {
      id: "g6.book.e.d3.q1",
      type: "short_answer",
      stem: "Name ONE external conflict and ONE internal conflict the squad faces in Levels 7–9. Use specific details from those chapters.",
      hintLadder: [
        "External: who or what is fighting the squad — Pressure Beast? plaque clots? something else?",
        "Internal: what does the Pressure Beast 'feed on' from inside Leo's life?",
        "Write one sentence for each."
      ],
      rubric: {
        level3: "Correctly distinguishes external vs internal with one specific example of each from Levels 7–9 (e.g., Pressure Beast + plaque clots vs. stress/sitting still/late-night pushes).",
        level2: "Names both but one is mislabeled OR vague.",
        level1: "Only names one type, or confuses the two."
      },
      exemplar: "External: the Pressure Beast smashes the artery walls and a plaque clot avalanche threatens to block the flow. Internal: the same beast feeds on Leo's stress, his salty snacks, and his habit of sitting still and pushing through late nights.",
      misconceptionsTargeted: ["confusing-internal-external"]
    },
    {
      id: "g6.book.e.d3.q2",
      type: "short_answer",
      stem: "In Level 8, Leo's plan stops working — buttons aren't enough. What does he finally choose to do, and what does he give up to do it?",
      hintLadder: [
        "Find the moment near the end of Level 8 when Leo whispers 'Rest.'",
        "What had he been trying instead?",
        "What did he give up (the 'fight harder' instinct) to choose rest?"
      ],
      rubric: {
        level3: "Specific moment named, clear choice (REST), explicit cost (giving up the push-through-pressure instinct).",
        level2: "Has the choice but the cost is glossed over or missing.",
        level1: "Generic 'they did the right thing' with no specifics."
      },
      exemplar: "Leo whispers 'Rest' in Level 8 when nothing else is calming the Pressure Beast. He gives up the instinct to fight harder — closing his eyes and slowing his breath instead. Melatonin mist drops, the beast shrinks, and the artery glows pink again.",
      misconceptionsTargeted: ["skipping-the-cost"]
    },
    {
      id: "g6.book.e.d3.q3",
      type: "multiple_choice",
      stem: "By the end of Level 8, Agent T's badge changes color. What does it tell you about how Agent T has changed?",
      choices: [
        "Nothing — his badge always changes color.",
        "He's about to attack the squad.",
        "His suspicion is softening — he's starting to see the squad as allies, not invaders.",
        "He's lost his weapons."
      ],
      answerIndex: 2,
      explanation: "The badge moves from yellow to pale green to steady green as Agent T watches the squad solve the Pressure Beast crisis together. He updates his file: 'Squad understands balance.'",
      hintLadder: [
        "Look at what Agent T logs as he watches them work.",
        "What does he type into his file at the end?",
        "His weapon goes from drawn to holstered — what does that signal?"
      ]
    },
    {
      id: "g6.book.e.d3.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): if YOU were in the squad facing the Pressure Beast, what would you do? Trade answers and discuss — would you both make the same call?",
      hintLadder: [
        "Re-read the moment when buttons and breathing aren't enough.",
        "Write what you'd do.",
        "Compare with the other reader — write down where you agree or disagree."
      ],
      rubric: {
        level3: "Concrete personal choice, clear reasoning grounded in the Pressure Beast scene, captures the other reader's perspective.",
        level2: "Has personal choice but reasoning thin OR misses the discussion.",
        level1: "Vague or off-topic."
      },
      exemplar: "I'd choose rest like Leo did, because the buttons weren't working and pushing harder was just making the beast stronger. My friend would have tried to break the clot first — we agreed Leo's call was smarter once we re-read the scene."
    },
    {
      id: "g6.book.e.d3.q5",
      type: "multiple_choice",
      stem: "A 'dilemma' is BEST described as:",
      choices: [
        "A boring part of the book.",
        "A hard choice between two things a character cares about (like fighting harder vs. resting).",
        "Any time a character feels happy.",
        "A grammar error in a sentence."
      ],
      answerIndex: 1,
      explanation: "Dilemmas are the genuine forks in the road where character is revealed. Leo's 'fight or rest' moment is a dilemma.",
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
      description: "Labels the Pressure Beast as purely internal or purely external, missing that he's both at once.",
      coachMove: "Internal = inside Leo's head + habits. External = what's smashing artery walls. The book makes both visible at once."
    },
    {
      id: "skipping-the-cost",
      label: "Describes a choice without naming the cost",
      description: "Says 'Leo rested' but doesn't note he had to give up the 'fight harder' instinct.",
      coachMove: "Every real choice has a cost. Ask: 'What did Leo walk away from to choose rest?'"
    }
  ],
  reflectionPrompt:
    "Have you ever had to STOP doing something hard to actually solve it? Write a few sentences. (Save this — it's a great seed for a writing piece later.)"
};
