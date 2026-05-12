// Grade 6 Founder's Book Club — Enrichment Day 5.
// Reading: Chapter 12 through the end of "Leo and The Game Squad" by Dr. Spark.
// Focus: ending, reflection, and a creative response.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay5 = {
  id: "g6.book.e.d5",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 5,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Ending and beyond — what stays with you",
  topicTag: "narrative-resolution",
  estimatedMinutes: 35,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.W.6.3"],
  hook: `📖 Finish "${BOOK_METADATA.title}" by Dr. Spark — Chapter 12 to the end. Today you take the ending apart and write your own short response.`,
  miniLesson: [
    "A story's ending isn't just 'what happens.' It's the answer the book gives to the question it asked at the start. Look back at how Leo was on Day 1 — how has he changed?",
    "Strong responses to a book don't just summarize. They argue: pick a claim about the book, defend it with one specific scene, and connect it to something you've felt yourself.",
    "Creative response is another way to honor a book. Writing a missing scene, a letter to a character, or an alternate ending shows you understood the world deeply enough to play inside it."
  ],
  workedExample: {
    prompt: "How do you write a short, strong response to a book?",
    steps: [
      "Pick a claim — one sentence about what the book is really saying.",
      "Find one scene that proves your claim.",
      "Quote or describe the scene in 1–2 sentences.",
      "End with a personal connection — why does this matter to you?"
    ],
    answer: "Claim → Evidence → Connection. A complete short response in 4–6 sentences."
  },
  keyTerms: [
    { term: "Resolution", definition: "The end of a story where the main conflict is settled (or accepted)." },
    { term: "Character arc", definition: "How a character changes from the beginning of the story to the end." },
    { term: "Creative response", definition: "A new piece of writing inspired by the book — letter, scene, alternate ending, or sequel idea." }
  ],
  items: [
    {
      id: "g6.book.e.d5.q1",
      type: "short_answer",
      stem: "How does Leo change from Chapter 1 to the end? Name one specific way and back it up with a moment.",
      hintLadder: [
        "Compare Day 1 Leo and end-of-book Leo.",
        "Pick one trait that's different.",
        "Cite a scene that shows the change."
      ],
      rubric: {
        level3: "Specific trait that changed AND a clear before/after with a scene from the book.",
        level2: "Claims a change but lacks before/after specificity.",
        level1: "Generic 'he changed a lot' with no evidence."
      },
      exemplar: "Leo starts the book waiting for someone else to lead, but by the end he calls the squad together when nobody else will — he steps up during the final challenge.",
      misconceptionsTargeted: ["vague-character-change"]
    },
    {
      id: "g6.book.e.d5.q2",
      type: "short_answer",
      stem: "Look back at your Day 1 reflection (what kind of person did you think Leo would become?). Were you right? What did the book show you that you didn't expect?",
      hintLadder: [
        "Recall what you wrote on Day 1.",
        "Compare with how the book ended.",
        "Name one thing the book surprised you with."
      ],
      rubric: {
        level3: "Honest reflection comparing Day 1 prediction with the actual ending AND names something the book surprised the reader with.",
        level2: "Has a comparison but glosses over surprise OR vice versa.",
        level1: "Just says 'I was right' or 'I was wrong' with no detail."
      },
      exemplar: "I thought Leo would become a hero, and he did — but I didn't expect that he'd give up the prize at the end to help Sam. That was a quieter heroism than I expected.",
      misconceptionsTargeted: []
    },
    {
      id: "g6.book.e.d5.q3",
      type: "short_answer",
      stem: "Write a SHORT response to the book using the Claim → Evidence → Connection structure (4–6 sentences). What is this book really saying? Why does it matter to you?",
      hintLadder: [
        "Claim: one sentence about what the book is saying.",
        "Evidence: name a scene that proves your claim.",
        "Connection: link it to something you've felt or seen yourself."
      ],
      rubric: {
        level3: "All three pieces present — Claim, Evidence (specific scene), Connection (personal). 4–6 sentences. Coherent argument.",
        level2: "Has 2 of the 3 pieces OR a weak version of all three.",
        level1: "Mostly summary with no claim or connection."
      },
      exemplar: "This book is really about how leadership is just showing up for your friends when it costs you something. The clearest moment is when Leo gives up the win at the end. That hit me because last year I had to choose between joining my brother's birthday lunch and finishing a project — I picked the lunch, and I'm still glad I did.",
      misconceptionsTargeted: ["summary-not-argument"]
    },
    {
      id: "g6.book.e.d5.q4",
      type: "short_answer",
      stem: "Creative bonus: write the first 2 sentences of a missing scene OR a letter from one character to another OR a one-paragraph idea for a sequel. Pick one.",
      hintLadder: [
        "Pick the format that excites you most.",
        "Stay in the world and voice of the book.",
        "Two sentences (scene) or one paragraph (sequel) is enough."
      ],
      rubric: {
        level3: "Picks one format and produces creative content that stays inside the book's world and voice.",
        level2: "Has creative content but feels disconnected from the book.",
        level1: "Just describes what they'd write instead of writing it."
      },
      exemplar: "Sequel idea: a year later, a new player joins the server claiming to know what really started the original glitch — and Leo has to decide whether the squad's quiet life is worth giving up to investigate.",
      misconceptionsTargeted: []
    },
    {
      id: "g6.book.e.d5.q5",
      type: "multiple_choice",
      stem: "What does 'character arc' BEST describe?",
      choices: [
        "The shape of a character's body.",
        "How a character changes from the beginning of the story to the end.",
        "A bow a character carries.",
        "The way the book is physically printed."
      ],
      answerIndex: 1,
      explanation: "A character arc is the journey of change — internal growth or decline — across the story.",
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
      description: "Says 'Leo grew up' or 'they all changed' without naming a trait or scene.",
      coachMove: "Pick ONE trait. Show it on page X (start) and on page Y (end). Specific beats sweeping."
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
