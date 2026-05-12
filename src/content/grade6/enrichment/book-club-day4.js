// Grade 6 Founder's Book Club — Enrichment Day 4.
// Reading: Levels 10–11 of "Leo and The Game Squad" by Dr. Spark.
// (The Gut Galaxy, The Way Home.)
// Focus: the final boss Toxina, the temptation scene, "become the path,"
// and the long victory lap through the body — where Flo can't come with them.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay4 = {
  id: "g6.book.e.d4",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 4,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Toxina, the temptation, and the way home",
  topicTag: "narrative-climax",
  estimatedMinutes: 35,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.RL.6.5"],
  hook: `📖 Read Levels 10–11 of "${BOOK_METADATA.title}" — "The Gut Galaxy" and "The Way Home". This is the climax: Toxina the Queen of Chaos tries to tempt each squad member with their favorite junk food. Then the long ride home — and a goodbye.`,
  miniLesson: [
    "Level 10 is the **climax** — the highest-stakes moment. Gut Galaxy is a whole universe of microbes: probiotics in yogurt capes versus Grease Goblins, Sugar Slimes, and Bad Bacteria, all led by **Toxina, Queen of Chaos**. Her weapon isn't strength — it's temptation. She conjures up a table for each kid with their favorite foods and whispers 'just one bite.'",
    "The turning point isn't a fight scene. It's Jamal noticing Flo (still recovering) and putting down the burger: 'This is what she did to you, isn't it?' Nia sees her mom's cookies but realizes 'food isn't the enemy — but using it to hide from feelings doesn't help.' Leo steps away from the pizza. **All three resist. Toxina shrinks to marble size.**",
    "Level 11 (The Way Home) is the victory lap. The squad rides the Blood-Brain Express through every restored Level — calm arteries, busy Muscle Town making new mitochondria, peaceful Immune City with Mac and Memoria. Then the hardest moment of the book: **Flo can't come home with them.** 'I'm part of your knowledge now. But you'll remember me.'"
  ],
  workedExample: {
    prompt: "How do you spot a story's theme?",
    steps: [
      "Find the moments where the squad ALMOST fails and then chooses differently (Jamal almost eats the burger; Leo almost reaches for the pizza).",
      "Look at what they realize in those moments.",
      "Pull out the lesson in your own words — not what Flo says, but what the book is teaching through what they do.",
      "Test it: does the rest of the book support that idea? If yes, you've found a theme."
    ],
    answer: "A theme is a one-sentence claim about how the world works (e.g., 'resisting cravings is harder than fighting monsters — but it's the win that lasts')."
  },
  keyTerms: [
    { term: "Climax", definition: "The story's peak moment — for this book, the Gut Galaxy battle where Toxina tempts the squad and all three resist." },
    { term: "Theme", definition: "The big idea the book is exploring — a claim about life. 'Balance is the greatest power-up' is a theme; 'health' is just a topic." },
    { term: "Turning point", definition: "Jamal putting down the burger after he recognizes Toxina's voice from Flo's eating disorder story." }
  ],
  items: [
    {
      id: "g6.book.e.d4.q1",
      type: "short_answer",
      stem: "In Level 10, Toxina conjures three tables — one for each squad member, covered in THEIR specific favorite foods. Name what's on each table and what each kid does.",
      hintLadder: [
        "Leo's table: what kind of food?",
        "Nia's table: what does her mom make for her when she's sad?",
        "Jamal's table: what does he see from his birthday party?",
        "What does each kid finally choose?"
      ],
      rubric: {
        level3: "Names what's on each kid's table (pizza/chips/soda for Leo; cookies/brownies/cake for Nia; burgers/fries/milkshakes for Jamal) AND describes each kid's choice to step away.",
        level2: "Captures the tables but mixes up which kid got what, OR misses what each chose.",
        level1: "Generic 'they were tempted' with no specifics."
      },
      exemplar: "Leo's table has hot pizza, chips, and ice-cold soda — he reaches for the pizza, then steps away saying 'I don't want to feel like that anymore.' Nia's table has cookies, brownies, and chocolate cake — her favorites — but she turns away saying 'food isn't the enemy, but using it to hide from feelings doesn't help.' Jamal's table has burgers, fries, and milkshakes from his last birthday party — he lifts a burger to his mouth, then sees Flo struggling and puts it down: 'I'm not giving her that power.'",
      misconceptionsTargeted: ["summarizing-everything"]
    },
    {
      id: "g6.book.e.d4.q2",
      type: "short_answer",
      stem: "What's ONE theme this book is exploring? Write it as a complete sentence (a claim, not a topic) and back it up with one specific moment from Level 10 or 11.",
      hintLadder: [
        "Look at what the squad learns when they CHOOSE rather than fight.",
        "Turn it into a claim: 'In life, ___ matters because ___.'",
        "Find one specific moment that proves the claim (the temptation tables, the 'become the path' charge, or Flo's goodbye)."
      ],
      rubric: {
        level3: "Theme stated as a general life claim (not plot summary) AND backed with one specific named moment from Level 10 or 11.",
        level2: "Theme stated but too narrow (just retelling plot) OR weak evidence.",
        level1: "Theme is just a one-word topic ('health' or 'friendship') with no claim or evidence."
      },
      exemplar: "Theme: choice is stronger than craving — what you walk away from defines you as much as what you fight. Moment: Jamal lifts the burger from Toxina's table, then puts it down when he sees Flo, saying 'I'm not giving her that power.' Toxina shrinks to marble size right there.",
      misconceptionsTargeted: ["theme-too-narrow"]
    },
    {
      id: "g6.book.e.d4.q3",
      type: "multiple_choice",
      stem: "When the squad has to push the FERMENTED FOODS crate to the probiotics through a swarm of Toxina's army, Leo says 'We don't carry it — we become the path.' What does he mean?",
      choices: [
        "Each kid carries the crate alone in turn.",
        "They line up shoulder to shoulder, link arms, and shove the crate forward together — the enemies can't stop all of them at once.",
        "They abandon the crate and run away.",
        "They build a literal bridge out of bones."
      ],
      answerIndex: 1,
      explanation: "Nia calls it 'either brilliant or really stupid.' Leo says 'probably both.' They link arms — Flo too — and charge as one body. It's the book's most direct picture of teamwork.",
      hintLadder: [
        "Re-read the moment Leo proposes the plan.",
        "What does Nia say about the idea?",
        "How are they arranged when they charge?"
      ]
    },
    {
      id: "g6.book.e.d4.q4",
      type: "short_answer",
      stem: "Level 11 ends with Flo telling the squad she can't come home with them: 'I'm part of your knowledge now. But you'll remember me.' Why does the book end her arc this way — what's it telling you about how learning works?",
      hintLadder: [
        "Flo started the book as the squad's tour guide.",
        "By the end of Level 11, what does she represent?",
        "Where does knowledge LIVE once you've really learned it?"
      ],
      rubric: {
        level3: "Connects Flo staying behind to the idea that real learning lives INSIDE you — once internalized, the teacher doesn't have to walk beside you. Cites Flo's line or Leo tapping his chest.",
        level2: "Captures the sad goodbye but doesn't link it to learning/internalization.",
        level1: "Just describes the scene with no claim."
      },
      exemplar: "Flo can't come home because she IS what they learned — her voice is now Leo's voice when he says no to chips, Nia's voice when she counts her breath. The book is saying real learning isn't a teacher next to you, it's a teacher you carry inside. When Flo taps Leo's chest and says 'your body remembers,' she's telling him she's already there.",
      misconceptionsTargeted: []
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
      explanation: "The climax is the highest-stakes moment where everything that's been building has to be resolved. For this book, Toxina's temptation in Level 10 is the climax.",
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
      label: "Retells Level 10 instead of naming the temptation scene",
      description: "Long blow-by-blow recap with no clear focus on the three tables.",
      coachMove: "Force the structure: one table per kid, one bite of evidence each, one choice each."
    },
    {
      id: "theme-too-narrow",
      label: "Confuses topic with theme",
      description: "Says theme is 'health' or 'gaming' — the topic, not a claim about it.",
      coachMove: "Theme is a SENTENCE. 'Choice is stronger than craving' beats 'choice.'"
    }
  ],
  reflectionPrompt:
    "Think of a craving you've resisted — not because someone told you to, but because YOU decided to. What did it feel like in your body? Save this — it's the same muscle the squad just used."
};
