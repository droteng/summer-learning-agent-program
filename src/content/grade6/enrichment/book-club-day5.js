// Grade 6 Founder's Book Club — Enrichment Day 5.
// Reading: Levels 12–13 of "Leo and The Game Squad" by Dr. Spark.
// (Home Base IRL, Epilogue: Six Weeks Later.)
// Focus: applying the lessons in real life, lasting change, and a creative response.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay5 = {
  id: "g6.book.e.d5",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 5,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Home Base IRL — lasting change and a creative short response",
  topicTag: "narrative-resolution",
  estimatedMinutes: 35,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.W.6.3"],
  hook: `📖 Finish "${BOOK_METADATA.title}" by Dr. Spark — Levels 12 ("Home Base IRL") and 13 ("Epilogue: Six Weeks Later"). Today you watch the squad apply what they learned in real life, take their final test, and write your own short response.`,
  miniLesson: [
    "A story's ending isn't just 'what happens.' It's the answer the book gives to the question it asked at the start. Look back at how Leo was on Day 1 — sleepy, foggy, snacking past full. By the Epilogue, six weeks later, he's awake, present, getting B-pluses, and noticing the leaves changing. The book is telling you something about how small choices compound.",
    "Strong responses to a book don't just summarize. They argue: pick a claim about the book, defend it with one specific scene, and connect it to something you've felt yourself. The book's own structure (Claim — like Dr. Spark's 'balance is the greatest power-up' — followed by evidence in each Level, then connection to real life in Level 12) is exactly the structure to use in your response.",
    "Creative response is another way to honor a book. Writing a missing scene, a letter to a character, or an alternate ending shows you understood the world deeply enough to play inside it. The book even ends with a coded text from an unknown number — there's room for sequels."
  ],
  workedExample: {
    prompt: "How do you write a short, strong response to a book?",
    steps: [
      "Pick a claim — one sentence about what the book is really saying.",
      "Find one scene that proves your claim (Pressure Beast? Anxiety Titan? the party Leo leaves early?).",
      "Describe the scene in 1–2 sentences using details from the book.",
      "End with a personal connection — why does this matter to you?"
    ],
    answer: "Claim → Evidence → Connection. A complete short response in 4–6 sentences."
  },
  keyTerms: [
    { term: "Resolution", definition: "The end of a story where the main conflict is settled (or accepted). Here, the squad applies what they learned and the families are about to be whole again." },
    { term: "Character arc", definition: "How a character changes from the beginning of the story to the end. Leo goes from foggy and snacking to awake and present." },
    { term: "Creative response", definition: "A new piece of writing inspired by the book — letter, scene, alternate ending, or sequel idea." }
  ],
  items: [
    {
      id: "g6.book.e.d5.q1",
      type: "short_answer",
      stem: "How does Leo change from Level 1 (the gaming-and-junk-food night) to the Epilogue (six weeks later)? Name one specific way and back it up with a scene from Level 12 or 13.",
      hintLadder: [
        "Day 1 Leo: snacking past full, fingers lagging, foggy.",
        "Epilogue Leo: scrambling eggs, leaving the party early, noticing the leaves.",
        "Pick ONE trait that's different and cite a scene that shows the change."
      ],
      rubric: {
        level3: "Specific trait that changed AND a clear before/after with a scene from Level 12 or 13 (the breakfast choice, the party exit, the homework focus).",
        level2: "Claims a change but lacks before/after specificity.",
        level1: "Generic 'he changed a lot' with no evidence."
      },
      exemplar: "Leo starts the book mindlessly snacking until he can't focus — by Level 12 he asks his mom for eggs instead of pancakes-and-syrup, eats half a pancake, and feels 'steady' instead of stuffed. He's learned to listen to his body and choose what fuels it.",
      misconceptionsTargeted: ["vague-character-change"]
    },
    {
      id: "g6.book.e.d5.q2",
      type: "short_answer",
      stem: "Look back at your Day 1 reflection (what kind of person did you think Leo would become?). Were you right? What did the book show you that you didn't expect?",
      hintLadder: [
        "Recall what you wrote on Day 1.",
        "Compare with how the book actually ended.",
        "Name one thing the book surprised you with (Leo leaving the party? caring for Marcus? the cold setback?)."
      ],
      rubric: {
        level3: "Honest reflection comparing Day 1 prediction with the actual ending AND names something the book surprised the reader with.",
        level2: "Has a comparison but glosses over surprise OR vice versa.",
        level1: "Just says 'I was right' or 'I was wrong' with no detail."
      },
      exemplar: "I thought Leo would become someone who eats salad and never plays games — but he still plays, just differently, and he still gets sick once (the cold in week four). I didn't expect the book to show that balance isn't perfection.",
      misconceptionsTargeted: []
    },
    {
      id: "g6.book.e.d5.q3",
      type: "short_answer",
      stem: "Write a SHORT response to the book using the Claim → Evidence → Connection structure (4–6 sentences). What is this book really saying? Why does it matter to you?",
      hintLadder: [
        "Claim: one sentence about what the book is really saying.",
        "Evidence: name a specific scene (Pressure Beast, Anxiety Titan, the party, the cold setback).",
        "Connection: link it to something you've felt or experienced yourself."
      ],
      rubric: {
        level3: "All three pieces present — Claim, Evidence (specific named scene), Connection (personal). 4–6 sentences. Coherent argument.",
        level2: "Has 2 of the 3 pieces OR a weak version of all three.",
        level1: "Mostly summary with no claim or connection."
      },
      exemplar: "This book is really about how small habits stack up into who you are — fast change is rare, but daily change is real. The clearest moment is in the Epilogue when Leo says 'I'm not different, I'm just awake' after six weeks of small choices. That hit me because I tried to learn guitar in one weekend last year and quit — but my friend who practiced 10 minutes a day for a month is now teaching me chords.",
      misconceptionsTargeted: ["summary-not-argument"]
    },
    {
      id: "g6.book.e.d5.q4",
      type: "short_answer",
      stem: "Creative bonus — pick ONE: write the first 2 sentences of a missing scene, OR a short letter from Marcus (Leo's little brother) to Leo, OR a one-paragraph idea for a sequel based on the coded text Leo gets at the end of the book.",
      hintLadder: [
        "Pick the format that excites you most.",
        "Stay in the world and voice of the book.",
        "Two sentences (scene), a short letter (5–8 lines), or one paragraph (sequel)."
      ],
      rubric: {
        level3: "Picks one format and produces creative content that stays inside the book's world and voice.",
        level2: "Has creative content but feels disconnected from the book.",
        level1: "Just describes what they'd write instead of writing it."
      },
      exemplar: "Sequel idea: the coded text in the Epilogue turns out to be Agent T trying to call the squad back — there's a new threat in the gut, and Marcus, now six, has been pulled in by accident. Leo has to lead a younger squad through a body he barely remembers the layout of.",
      misconceptionsTargeted: []
    },
    {
      id: "g6.book.e.d5.q5",
      type: "multiple_choice",
      stem: "What does 'character arc' BEST describe?",
      choices: [
        "The shape of a character's body.",
        "The way the book is physically printed.",
        "A bow a character carries.",
        "How a character changes from the beginning of the story to the end (Leo: foggy and reactive → awake and present)."
      ],
      answerIndex: 3,
      explanation: "A character arc is the journey of change — internal growth or decline — across a story.",
      hintLadder: [
        "Look at today's key terms.",
        "Think 'journey of change.'",
        "Start vs end."
      ]
    }
  ],
  misconceptionBank: [
    {
      id: "vague-character-change",
      label: "Claims a character changed without showing how",
      description: "Says 'Leo grew up' or 'they all changed' without naming a trait or a Level 12/13 scene.",
      coachMove: "Pick ONE trait. Show it on Day 1 (sneaking chips) and in the Epilogue (eggs and berries). Specific beats sweeping."
    },
    {
      id: "summary-not-argument",
      label: "Book response is plot summary",
      description: "Retells the book instead of making a claim about it.",
      coachMove: "Use the Claim → Evidence → Connection scaffold. Lead with a claim, defend with one scene, link to self."
    }
  ],
  reflectionPrompt:
    "If you could ask Dr. Spark one question about this book, what would it be? Save the question — your parent can share it with the Dr. Spark Academy team."
};
