// Grade 6 Founder's Book Club — Enrichment Day 2.
// Reading: Levels 4–6 of "Leo and The Game Squad" by Dr. Spark.
// (The Sleep Sanctum, Muscle Town Power Plants, The Sticky Locks Crisis.)
// Focus: sleep + energy + clean arteries — and the "old choices linger" trial.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay2 = {
  id: "g6.book.e.d2",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 2,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Sleep, muscle, and the sticky-lock plaque crisis",
  topicTag: "narrative-friendship",
  estimatedMinutes: 30,
  standardsRefs: ["CCSS.RL.6.1", "CCSS.RL.6.2"],
  hook: `📖 Read Levels 4–6 of "${BOOK_METADATA.title}" first — "The Sleep Sanctum", "Muscle Town Power Plants", and "The Sticky Locks Crisis". Today you trace how sleep, movement, and what you eat link up — and meet the first real consequence of bad choices: Lock Jammer.`,
  miniLesson: [
    "Each Level visits a different body system. **Sleep Sanctum** (deep sleep + REM, the Midnight Scroller and caffeine demons that sabotage rest). **Muscle Town Power Plants** (mitochondria make ATP energy, the Lactic Acid Gremlin shows up when you push without oxygen, the Sedentary Sloth feeds on the couch). **Sticky Locks Crisis** (plaque from cholesterol clogs arteries — the HDL knights led by Commander Val do the cleanup).",
    "Look at how the team's strengths take shape across these chapters. Leo lassoes a grease truck before it can crash. Nia jump-ropes to drive back the Sedentary Sloth while Leo rests in a recharge chamber. Jamal pedals a glow-bike to keep light flowing. Each kid finds what they're good at.",
    "Watch Flo's lines — she narrates the lessons through one-liners: 'Use it or lose it.' 'Bananas save lives.' 'Past choices take time to clear.' Notice when a joke is also a real idea."
  ],
  workedExample: {
    prompt: "How can you figure out the squad's main job in each Level?",
    steps: [
      "Find the moment Flo or another guide names the threat (Sedentary Sloth, greasy truck crash, Lock Jammer).",
      "Find what the squad chooses to do — the actions tell you the goal.",
      "Check what body system they're inside (sleep, muscle, artery) and how the action lines up.",
      "Write it as 'In Level X, the squad's job was to ___ inside the ___ system, so that ___.'"
    ],
    answer: "A body-system-aware goal expressed as action + reason in one sentence."
  },
  keyTerms: [
    { term: "Mitochondria", definition: "Tiny power plants inside cells that turn fuel into ATP energy — they glow when fed right and crash when fueled with junk." },
    { term: "HDL", definition: "The 'good cholesterol' knights (Commander Val and her crew) who haul plaque to the liver for recycling." },
    { term: "Plaque", definition: "Cholesterol build-up that narrows arteries — in the book, it's the gunk that becomes Lock Jammer." }
  ],
  items: [
    {
      id: "g6.book.e.d2.q1",
      type: "short_answer",
      stem: "By the end of Level 5 (Muscle Town), each squad member has shown a clear strength. Name Leo, Jamal, and Nia, and for each one, write one specific thing they DID in Muscle Town that showed it.",
      hintLadder: [
        "Leo: who lassoes the runaway grease truck? Who rests in the chamber so the body can recharge?",
        "Jamal: who pedals the glow-bike to drive back the Sedentary Sloth?",
        "Nia: who skips the jump rope, sending sparks to push the Sloth back?"
      ],
      rubric: {
        level3: "Names each squad member with one specific Muscle Town action tied to evidence (Leo lassoing the truck OR resting; Jamal on the bike; Nia jump-roping).",
        level2: "Lists members but actions are vague or mixed up.",
        level1: "Lists names only, no actions, or mostly wrong about which kid did what."
      },
      exemplar: "Leo's strength is quick action — he lassoes the runaway grease truck before it crashes into the fuel line. Jamal's strength is endurance — he pedals the glow-bike non-stop to push back the Sedentary Sloth. Nia's strength is steady rhythm — she jump-ropes to send sparks at the Sloth so Leo can rest in the chamber.",
      misconceptionsTargeted: ["missing-character-strengths"]
    },
    {
      id: "g6.book.e.d2.q2",
      type: "short_answer",
      stem: "In Level 6, Commander Val gives Leo a three-day trial. Write the squad's main goal as one sentence: 'They are trying to ___ so that ___.'",
      hintLadder: [
        "Find the chart Val pulls up showing Leo's eating trends.",
        "What does Leo have to do for three days?",
        "Why does it matter — what happens if he doesn't?"
      ],
      rubric: {
        level3: "Goal is concrete (eat well for three days / make better food + water + movement choices) AND motivated (so Lock Jammer doesn't form / so the HDL knights aren't overwhelmed), in the required sentence format.",
        level2: "Has the action OR the reason but not both clearly.",
        level1: "Vague answer like 'they want to be healthy' with no specifics from Level 6."
      },
      exemplar: "They are trying to keep Leo on whole foods, hydration, and movement for three straight days so that plaque stops building up in the arteries and Lock Jammer doesn't form.",
      misconceptionsTargeted: ["vague-goal"]
    },
    {
      id: "g6.book.e.d2.q3",
      type: "multiple_choice",
      stem: "When Lock Jammer DOES show up at hour thirty-six, even though Leo's been eating well, what explains it?",
      choices: [
        "Leo lied about eating well.",
        "The HDL knights got tired.",
        "Old sludge from BEFORE the trial finally caught up — past choices take time to clear.",
        "It was just a regular drill."
      ],
      answerIndex: 2,
      explanation: "Flo's line is exactly this: 'Old sludge just caught up. Choices from before.' The book's quiet lesson is that bodies don't reset instantly — habits compound in BOTH directions.",
      hintLadder: [
        "What does Flo say at the moment Lock Jammer appears?",
        "Look at the chart — what timestamp does Agent T's scanner show?",
        "Think about whether change is instant or takes time."
      ]
    },
    {
      id: "g6.book.e.d2.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): which squad member would YOU team up with in real life — Leo, Jamal, or Nia — and why? Trade answers and write down which one the other reader picked.",
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
      exemplar: "I'd team up with Nia because I notice details too and stay calm when other people are loud. My friend picked Jamal because he likes how Jamal keeps pedaling even when he's tired."
    },
    {
      id: "g6.book.e.d2.q5",
      type: "multiple_choice",
      stem: "Which BEST captures what 'mitochondria' do in the body (and in the book)?",
      choices: [
        "Send text messages between cells.",
        "Act as tiny power plants that turn food into ATP energy for muscles.",
        "Carry oxygen through the bloodstream (Hemo's job).",
        "Fight viruses and bacteria."
      ],
      answerIndex: 1,
      explanation: "Mitochondria are the energy factories of cells. The book shows them as oval workers with hard hats chanting 'ATP! ATP! Energy for you and me!'",
      hintLadder: [
        "Check today's key terms.",
        "What did the oval workers in Muscle Town chant?",
        "Think 'energy.'"
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "missing-character-strengths",
      label: "Lists names without strengths",
      description: "Names the squad but doesn't pair each with a specific Muscle Town action.",
      coachMove: "Ask: 'Who lassoes the truck? Who pedals the bike? Who jump-ropes?' Pair name + action."
    },
    {
      id: "vague-goal",
      label: "Vague goal like 'they want to be healthy'",
      description: "States no specific objective and no reason from Level 6's three-day trial.",
      coachMove: "Force the format: 'They are trying to ___ so that Lock Jammer doesn't form.' Specific beats vague."
    }
  ],
  reflectionPrompt:
    "Flo says 'past choices take time to clear.' Have you ever felt the consequence of something you did weeks earlier — good or bad? Write a few sentences."
};
