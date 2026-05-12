// Grade 6 Founder's Book Club — Enrichment Day 3.
// Reading: Levels 7–9 of "Leo and The Game Squad" by Dr. Spark.
// (Immune City: The Defenders, The Pressure Beast, Emergency Response Zone.)
// Focus: defenders, stress, and the book's emotional core — the Anxiety Titan
// and Flo's reveal about her eating disorder.
//
// PARENT NOTE: Level 9 covers anxiety, panic attacks, and a guide character
// who shares she has an eating disorder. The book handles this with care —
// the message is "asking for help isn't weakness." This mission is designed
// to be parent-supervised; consider reading and discussing together.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay3 = {
  id: "g6.book.e.d3",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 3,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Defenders, the Pressure Beast, and asking for help",
  topicTag: "narrative-conflict",
  estimatedMinutes: 35,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.RL.6.3"],
  hook: `📖 Read Levels 7–9 of "${BOOK_METADATA.title}" — "Immune City", "The Pressure Beast", and "Emergency Response Zone". Today the squad meets the body's army, defeats a stress monster, and faces something harder: an Anxiety Titan, a panic attack, and a friend who finally asks for help.`,
  miniLesson: [
    "Every story has two kinds of conflict. **External**: villains, plaque clots, the Pressure Beast smashing artery walls. **Internal**: doubt, fear, anxiety — what the Anxiety Titan whispers in Level 9 ('what if you fail what if they laugh what if you're not good enough'). The book shows that internal conflict can be just as dangerous as external — Nia has a real panic attack, Leo's heart rate spikes to 170 BPM.",
    "Level 7 (Immune City) introduces the body's army: Mac the Macrophage (first responder), Memoria (Memory B-Cell with files on every enemy), Tessa (T-Cell), Benny (antibody factory worker), and General False Alarm — the retired officer whose panic drills keep Mac's team chasing shadows. Watch how the squad helps tell real threats from fake.",
    "Level 9 is the emotional turning point. Flo, the green guide who's been leading the squad all book, collapses. She confesses she has an eating disorder — 'I thought if I just ate less... stayed smaller... the bosses wouldn't be so scary.' Leo's response, and the squad's, IS the lesson: asking for help isn't weakness."
  ],
  workedExample: {
    prompt: "How do you analyze a character's tough choice?",
    steps: [
      "Name what the character wanted (Leo wanted to stay at his Rest Chamber station to protect his heart).",
      "Identify what they actually picked (he left his station and ran to Nia, who was hyperventilating).",
      "Name what they gave up (his own safety — his heart rate spiked to 170 BPM, cardiac arrest imminent).",
      "Decide what the choice tells you about Leo's values — friendship over self-protection."
    ],
    answer: "A short paragraph linking choice + sacrifice + character growth."
  },
  keyTerms: [
    { term: "Anxiety Titan", definition: "Level 9's villain — chains and lightning made of worry whispers ('what if you fail'). Defeated by Breath Regulator + Movement Engine + Rest Chamber working together." },
    { term: "Panic attack", definition: "What happens to Nia at the Breath Regulator — short fast breathing, the room tilts, can't think clearly. Box breathing (4-count) calms it." },
    { term: "Asking for help", definition: "Flo's lesson at the end of Level 9 — 'I need help. Real help. Not just knowing what to do, but actually doing it.'" }
  ],
  items: [
    {
      id: "g6.book.e.d3.q1",
      type: "short_answer",
      stem: "Name ONE external conflict and ONE internal conflict the squad faces in Levels 7–9. Use specific details from those Levels.",
      hintLadder: [
        "External: who or what is fighting the squad on the OUTSIDE — Pressure Beast smashing walls? plaque clots? General False Alarm's drills?",
        "Internal: what's happening INSIDE Nia or Leo — anxiety, panic, the Titan's whispers?",
        "Write one sentence for each."
      ],
      rubric: {
        level3: "Correctly distinguishes external vs internal with one specific example of each from Levels 7–9 (e.g., Pressure Beast OR plaque clots vs. Nia's panic attack OR Anxiety Titan's whispers).",
        level2: "Names both but one is mislabeled OR vague.",
        level1: "Only names one type, or confuses the two."
      },
      exemplar: "External: in Level 8 the Pressure Beast smashes artery walls and a plaque clot avalanche threatens to block the flow. Internal: in Level 9 Nia has a panic attack at the Breath Regulator — she can't breathe, her thoughts spiral 'what if I mess up,' and the Anxiety Titan grows stronger.",
      misconceptionsTargeted: ["confusing-internal-external"]
    },
    {
      id: "g6.book.e.d3.q2",
      type: "short_answer",
      stem: "In Level 9, Leo's heart rate hits 170 BPM and his monitor warns 'cardiac arrest imminent.' He leaves the Rest Chamber anyway to help Nia. What did he say to himself to make that choice, and what does it tell you about him?",
      hintLadder: [
        "Find the line where Leo decides to leave his station.",
        "He asks himself: 'What's the point of any of this if ___?'",
        "What does choosing his friend over his own safety say about Leo?"
      ],
      rubric: {
        level3: "Quotes or paraphrases Leo's 'what's the point of any of this' line AND draws out what it shows about his values (friendship over self-protection, growth from the Day 1 'snacking past full' Leo).",
        level2: "Has the choice but the reasoning is glossed over.",
        level1: "Generic 'he did the right thing' with no specifics."
      },
      exemplar: "Leo says 'What's the point of any of this if I stay here doing nothing while she's drowning?' His heart rate spikes to 170 BPM but he runs to Nia anyway and breathes the 4-count box breathing with her until she steadies. It shows he values his friends more than his own safety — and that he's grown a lot from the Leo who used to zone out on the couch.",
      misconceptionsTargeted: ["skipping-the-cost"]
    },
    {
      id: "g6.book.e.d3.q3",
      type: "multiple_choice",
      stem: "When Flo collapses and reveals she has an eating disorder, Leo's response shows the book's key lesson about mental health. What does Leo (and Nia, and Jamal) demonstrate?",
      choices: [
        "That smart people don't get mental health problems.",
        "That Flo should have figured it out on her own.",
        "That asking for help isn't weakness — even the expert can need help, and that's okay.",
        "That the squad should stop trusting Flo."
      ],
      answerIndex: 2,
      explanation: "Flo's line is exactly this: 'I need help. Real help. Not just knowing what to do, but actually doing it.' Leo responds 'We all need help sometimes.' The book treats asking for help as strength.",
      hintLadder: [
        "Re-read Flo's confession and Leo's response.",
        "What does Leo say after Flo asks for help?",
        "The book's message about mental health."
      ]
    },
    {
      id: "g6.book.e.d3.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): if YOU were on the squad in the Emergency Response Zone, which station would you have chosen — Breath Regulator, Movement Engine, or Rest Chamber — and why? Trade answers and discuss.",
      hintLadder: [
        "Re-read the three stations and what each one did.",
        "Pick the one that matches what you'd be best at.",
        "Compare with the other reader."
      ],
      rubric: {
        level3: "Picks a specific station, names a real-life reason that matches the station's function, captures the other reader's pick + reasoning.",
        level2: "Names a station but reasoning is thin OR misses the other reader.",
        level1: "Vague or off-topic."
      },
      exemplar: "I'd pick the Breath Regulator because I'm calm under pressure and I'd want to be the one helping someone like Nia steady their breathing. My friend picked the Movement Engine because he likes physical jobs where you keep going."
    },
    {
      id: "g6.book.e.d3.q5",
      type: "multiple_choice",
      stem: "Which is the BEST description of what 'box breathing' (4-count) does for someone in a panic attack, in the book and in real life?",
      choices: [
        "It cures all anxiety forever.",
        "It slows breathing, calms the fight-or-flight system, and gives the body and brain time to reset.",
        "It makes you fall asleep.",
        "It's a punishment for being anxious."
      ],
      answerIndex: 1,
      explanation: "Leo breathes 'in two three four, hold two three four, out two three four, hold two three four' with Nia. Slow breathing tells the body the danger is over.",
      hintLadder: [
        "Check today's key terms.",
        "What did Leo count out loud with Nia?",
        "Slow steady breath = brain hears 'safe.'"
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "confusing-internal-external",
      label: "Mixes up internal vs external conflict",
      description: "Labels the Anxiety Titan as purely external or Nia's panic as a 'fight scene' — missing that the body's emergency system is responding to FEAR, not a real attacker.",
      coachMove: "Internal = inside the head + body's fear response. External = something physically smashing walls. Level 9 makes the internal visible."
    },
    {
      id: "skipping-the-cost",
      label: "Describes Leo's choice without naming the cost",
      description: "Says 'Leo helped Nia' but doesn't note his heart rate hit 170 BPM and he risked cardiac arrest.",
      coachMove: "Every real choice has a cost. Ask: 'What did Leo's monitor show? What was he risking?'"
    }
  ],
  reflectionPrompt:
    "Flo says 'I'm the expert. I'm supposed to know better. But knowing doesn't always fix it.' Have you ever known what you should do but still struggled to do it? Write a few sentences — no one else has to see this. (Save it: the courage to NOTICE is the first step.)"
};
