// Grade 6 Founder's Book Club — Enrichment Day 4.
// Reading: Levels 10–11 of "Leo and The Game Squad" by Dr. Spark.
// (The Gut Galaxy, The Way Home.)
// Focus: the climax — what the squad learns and how they leave the body.

import { BOOK_METADATA } from "./book-club-day1.js";

export const grade6BookClubDay4 = {
  id: "g6.book.e.d4",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 4,
  subject: "ELA/Writing",
  track: "bookClub",
  enrichment: true,
  topic: "Climax — the Gut Galaxy and finding the way home",
  topicTag: "narrative-climax",
  estimatedMinutes: 32,
  standardsRefs: ["CCSS.RL.6.2", "CCSS.RL.6.5"],
  hook: `📖 Read Levels 10–11 of "${BOOK_METADATA.title}" — "The Gut Galaxy" and "The Way Home". This is where everything the squad has learned comes together — and where the story turns toward home.`,
  miniLesson: [
    "The book's structure builds toward a climax: in the Gut Galaxy, the squad faces the biggest, most varied ecosystem in the body — trillions of helpful microbes alongside threats. Notice how the rules change here: the bacteria aren't all enemies. Some are allies you have to feed.",
    "Watch what each squad member does when things get hardest. Trouble is the truest test of growth. By Level 11, Leo, Nia, and Jamal aren't the kids who fell asleep on the couch — and Agent T isn't the suspicious T-cell who first scanned them.",
    "**Theme** is the bigger idea the book is exploring through everything it shows you. By this point, several themes are visible: balance, teamwork, military-family resilience, taking responsibility for your own body. A strong theme is a CLAIM, not a topic — 'balance is the greatest power-up' is a claim. 'Health' is just a topic."
  ],
  workedExample: {
    prompt: "How do you spot a story's theme?",
    steps: [
      "Find the moments where the squad almost falls apart and then finds a way through.",
      "Look at what Leo realizes or learns each time.",
      "Pull out the lesson in your own words — not what Flo says, but what the book is teaching through what happens.",
      "Test it: does the rest of the book support that idea? If yes, you've found a theme."
    ],
    answer: "A theme is a one-sentence claim about how the world works (e.g., 'small healthy choices stack up into real change')."
  },
  keyTerms: [
    { term: "Climax", definition: "The story's peak moment of tension — for this book, the Gut Galaxy challenge plus the decision to head home." },
    { term: "Theme", definition: "The big idea the book is exploring — a claim about life, not just a topic. ('Balance is the greatest power-up' beats 'balance.')" },
    { term: "Turning point", definition: "A moment that changes the direction of the story — like Agent T deciding the squad are allies." }
  ],
  items: [
    {
      id: "g6.book.e.d4.q1",
      type: "short_answer",
      stem: "In Level 10 (Gut Galaxy), the squad learns that not every microbe is an enemy. Describe the crisis they face AND one new rule the gut teaches them that no other Level taught.",
      hintLadder: [
        "What's the threat or imbalance in the Gut Galaxy?",
        "Which microbes turn out to be helpful?",
        "How is this different from Immune City, where the squad fought defenders?"
      ],
      rubric: {
        level3: "Names the gut crisis (imbalance / threats to good bacteria) AND identifies that some bacteria are allies to feed, not enemies to fight. Specific to Level 10.",
        level2: "Captures the crisis OR the new rule but not both clearly.",
        level1: "Generic 'they explored the gut' with no specifics."
      },
      exemplar: "The Gut Galaxy is in danger of imbalance, where harmful bacteria outnumber the helpful ones that keep digestion and immunity strong. The new rule is that not every bacteria is an enemy — the squad has to feed and protect good microbes instead of fighting everything they see.",
      misconceptionsTargeted: ["summarizing-everything"]
    },
    {
      id: "g6.book.e.d4.q2",
      type: "short_answer",
      stem: "What's ONE theme this book is exploring? Write it as a complete sentence (a claim, not a topic) and back it up with one moment from Levels 1–11.",
      hintLadder: [
        "Look at what Leo learns across multiple Levels.",
        "Turn it into a claim: 'In life, ___ matters because ___.'",
        "Find one moment that proves the claim (Pressure Beast, Sticky Locks, or Gut Galaxy)."
      ],
      rubric: {
        level3: "Theme stated as a general life claim (not plot summary) AND backed with one specific moment from a named Level.",
        level2: "Theme stated but too narrow (just retelling plot) OR weak evidence.",
        level1: "Theme is just a one-word topic ('health' or 'friendship') with no claim or evidence."
      },
      exemplar: "Theme: balance is more powerful than effort — sometimes the strongest move is to rest. Moment: in Level 8 Leo defeats the Pressure Beast by closing his eyes and slowing his breath, not by hitting harder.",
      misconceptionsTargeted: ["theme-too-narrow"]
    },
    {
      id: "g6.book.e.d4.q3",
      type: "multiple_choice",
      stem: "Why do good books have moments where the plan FAILS or shifts (like the buttons not working in Level 8, or the squad realizing they can't fight gut bacteria the same way they fought plaque)?",
      choices: [
        "To make readers feel sad.",
        "To pad out the page count.",
        "Because pressure and surprise reveal what characters truly value — and force them to grow.",
        "To make the ending shorter."
      ],
      answerIndex: 2,
      explanation: "Failure and surprise force characters to act on what they really believe. That's how the reader sees their values clearly, and how the character grows.",
      hintLadder: [
        "Easy moments don't test anyone.",
        "Pressure reveals.",
        "Which option is about character growth?"
      ]
    },
    {
      id: "g6.book.e.d4.q4",
      type: "short_answer",
      stem: "Group prompt (skip if alone): predict how the book will end. What will Leo, Nia, and Jamal be like back home in the real world? Trade predictions and explain. (Don't read ahead — Day 5 covers the ending.)",
      hintLadder: [
        "Look at how each squad member has changed across the Levels.",
        "Make a specific prediction (e.g., what habit will Leo bring home?).",
        "Compare with the other reader."
      ],
      rubric: {
        level3: "Specific prediction with reasoning grounded in what's changed across the Levels AND captures the other reader's prediction.",
        level2: "Has a prediction but reasoning thin OR misses the second reader.",
        level1: "Vague or generic prediction with no grounding."
      },
      exemplar: "I think Leo will eat better, rest more, and look out for his little brother Marcus — the inside-body trip changed how he sees food and sleep. My friend thinks Jamal will start working harder at sports because of what he saw in Muscle Town."
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
      explanation: "The climax is the highest-stakes moment where everything that's been building has to be resolved. The Gut Galaxy + decision to head home is this book's climax.",
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
      label: "Retells the whole Level instead of naming the new rule or crisis",
      description: "Blow-by-blow recap of Level 10 with no clear 'this is what's different about the gut.'",
      coachMove: "Force two sentences: one for the crisis, one for the new rule (some microbes are allies)."
    },
    {
      id: "theme-too-narrow",
      label: "Confuses topic with theme",
      description: "Says theme is 'health' or 'gaming' — the topic, not a claim about it.",
      coachMove: "Theme is a SENTENCE. 'Small healthy choices stack into big change' beats 'health.'"
    }
  ],
  reflectionPrompt:
    "Think of a time YOUR plan broke or had to change shape. What did you do next? Did you discover anything about yourself that day?"
};
