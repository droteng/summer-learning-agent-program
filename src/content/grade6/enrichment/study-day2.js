// Grade 6 Study Skills — Enrichment Day 2.
// Topic: active note-taking.

export const grade6StudyDay2 = {
  id: "g6.study.e.d2",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Study Skills",
  track: "studySkills",
  enrichment: true,
  topic: "Active note-taking",
  topicTag: "notes",
  estimatedMinutes: 16,
  standardsRefs: ["CCSS.6.SL.2"],
  hook: "Re-reading is the most popular study trick — and one of the least effective. Today you learn three note-taking moves that actually work.",
  miniLesson: [
    "Question-Answer notes: turn each section heading into a question; your notes are the answers. The question makes you read actively.",
    "Cornell-style split: divide the page into 'cue' (left, 1/3) and 'notes' (right, 2/3). After class, write a one-sentence summary at the bottom.",
    "Sketch the relationship: arrows beat lists. If A causes B, draw it. If A and B are similar, write them side by side."
  ],
  workedExample: {
    prompt:
      "You're learning about the water cycle. How do you take active notes instead of just copying?",
    steps: [
      "Section heading 'evaporation' becomes the question: 'What turns liquid water into vapor?'",
      "Your notes answer it in your own words.",
      "Draw an arrow: sun → water → vapor.",
      "Bottom summary: 'The water cycle is solar energy moving water between liquid, gas, and back.'"
    ],
    answer: "Questions in the margin + arrows + one-sentence summary."
  },
  items: [
    {
      id: "g6.study.e.d2.q1",
      type: "multiple_choice",
      stem: "Why is QUESTION-ANSWER note style better than copying?",
      choices: [
        "It's shorter.",
        "You read the source actively, looking for the answer.",
        "Teachers prefer it.",
        "It uses less ink."
      ],
      answerIndex: 1,
      explanation: "Reading with a question in mind forces you to engage. Copying without a question is passive.",
      hintLadder: [
        "What changes when you read with a question?",
        "Engagement increases.",
        "Active reading is the answer."
      ]
    },
    {
      id: "g6.study.e.d2.q2",
      type: "multiple_choice",
      stem:
        "In Cornell-style notes, what goes in the LEFT (cue) column?",
      choices: [
        "Questions, keywords, or cues that point to what's on the right.",
        "All your notes.",
        "The teacher's name.",
        "The date only."
      ],
      answerIndex: 0,
      explanation: "Cues let you self-quiz later — cover the right side and try to answer using just the left.",
      hintLadder: [
        "What goes on the left column?",
        "Triggers for the right side.",
        "Questions and keywords."
      ]
    },
    {
      id: "g6.study.e.d2.q3",
      type: "multiple_choice",
      stem: "Why are ARROWS often better than lists?",
      choices: [
        "Arrows are easier to draw.",
        "Lists are illegal.",
        "Arrows show relationships (cause/effect, before/after) that lists hide.",
        "Arrows save paper."
      ],
      answerIndex: 2,
      explanation: "A list of 5 items doesn't say which causes which. Arrows make the relationship visible.",
      hintLadder: [
        "What do lists hide?",
        "Connections.",
        "Arrows show them."
      ],
      misconceptionsTargeted: ["list-everything"]
    },
    {
      id: "g6.study.e.d2.q4",
      type: "multiple_choice",
      stem: "Which is a SIGN your notes are working?",
      choices: [
        "You can recite the whole textbook word-for-word.",
        "You wrote a lot of words.",
        "Your notes are color-coded perfectly.",
        "You can explain the main idea out loud without looking at your notes."
      ],
      answerIndex: 3,
      explanation: "If you can explain it out loud, you understood it. Volume of notes is no signal.",
      hintLadder: [
        "Pretty notes don't equal understanding.",
        "What's the real test?",
        "Explain it out loud."
      ]
    },
    {
      id: "g6.study.e.d2.q5",
      type: "short_answer",
      stem:
        "Pick something you've recently been taught (a math idea, a history event, a science process). Take ONE-sentence active notes on it using a question + answer + arrow.",
      rubric: {
        level3: "Clear question (turned from a heading), clear answer in own words, and an arrow showing a relationship.",
        level2: "Has the structure but answer is copied from somewhere.",
        level1: "Just facts, no structure."
      },
      exemplar:
        "Q: What causes seasons? A: Earth's axis tilt makes one hemisphere lean toward the sun in summer and away in winter. Arrow: tilt + orbit → uneven sunlight → seasons.",
      hintLadder: [
        "Turn a heading into a question.",
        "Write the answer in your own words.",
        "Add one arrow showing what causes what."
      ]
    }
  ],
  reflectionPrompt: "Today you tried active note-taking. Which subject would benefit from this most for you?",
  misconceptionBank: [
    {
      id: "list-everything",
      label: "Lists facts without connections",
      description: "Writes a flat list of facts with no relationships, then struggles to remember why anything mattered.",
      coachMove: "After a list, draw at least one arrow. What causes what? What's similar to what? Relationships beat lists for memory."
    }
  ]
};
