// Grade 6 Media Literacy — Enrichment Day 2.
// Topic: AI-generated content.

export const grade6MediaDay2 = {
  id: "g6.media.e.d2",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Spotting AI-generated content",
  topicTag: "ai-content",
  estimatedMinutes: 18,
  standardsRefs: ["AI4K12.5.B", "ISTE.3a"],
  hook: "AI now writes articles, paints images, and makes videos. Today you learn three reliable ways to spot AI-generated content — and one move when you can't.",
  miniLesson: [
    "AI-generated images often get hands, text, and reflections wrong. Look at fingers, letters on signs, and how light hits eyes.",
    "AI-generated text often hedges (\"some researchers say\") without naming any. It also repeats phrases and avoids strong specific claims.",
    "When you can't tell: assume the image or text could be AI. Search for the original — does any reliable source carry the same content?"
  ],
  workedExample: {
    prompt:
      "A friend shares a photo of 'a famous celebrity at a protest you didn't know happened.' How do you investigate?",
    steps: [
      "Look at the hands — AI often gets extra fingers or odd joints.",
      "Check text on signs in the background — AI signs often have garbled letters.",
      "Do a reverse image search — does the photo appear on any reliable news site?",
      "If no reliable source carries it, treat it as possibly AI-generated and don't share."
    ],
    answer: "Visual checks + reverse search + assume-possibly-AI when uncertain."
  },
  items: [
    {
      id: "g6.media.e.d2.q1",
      type: "multiple_choice",
      stem: "Which is the MOST reliable visual tell of an AI-generated image?",
      choices: [
        "The image is in color.",
        "Hands with extra fingers or odd joints.",
        "The image is large.",
        "The image was sent by phone."
      ],
      answerIndex: 1,
      explanation: "AI image models still struggle with anatomy — hands and feet are common giveaways.",
      hintLadder: [
        "What body part do AI models often mess up?",
        "Look at the fingers.",
        "Extra fingers or strange joints."
      ]
    },
    {
      id: "g6.media.e.d2.q2",
      type: "multiple_choice",
      stem: "Which sentence sounds MORE like AI-generated text?",
      choices: [
        "Dr. Maria Chen, an immunologist at Stanford, said the new vaccine showed an 87% efficacy in trials.",
        "I tried the new vaccine — it gave me a sore arm for one day.",
        "Some experts have suggested that vaccines, in general, may have varied effects on different populations.",
        "The clinic at 5th Street offers free vaccines every Tuesday."
      ],
      answerIndex: 2,
      explanation: "Hedging ('some experts have suggested', 'in general', 'may have') with no named source is a classic AI text pattern.",
      hintLadder: [
        "Look for hedging without specifics.",
        "Any named sources?",
        "Vague generalities are the tell."
      ],
      misconceptionsTargeted: ["assumes-formal-is-true"]
    },
    {
      id: "g6.media.e.d2.q3",
      type: "multiple_choice",
      stem:
        "You see a photo of a politician saying something shocking. What's the BEST first step?",
      choices: [
        "Reverse image search and look for the same scene on a reliable news site.",
        "Share it everywhere.",
        "Trust it because the politician is unpopular.",
        "Delete the photo."
      ],
      answerIndex: 0,
      explanation: "Reverse search finds the original. If no reliable source has it, treat as possibly fake.",
      hintLadder: [
        "How do you check if a photo is real?",
        "Find the original.",
        "Reverse image search."
      ]
    },
    {
      id: "g6.media.e.d2.q4",
      type: "multiple_choice",
      stem: "True or false: if AI text reads cleanly and grammatically, it's accurate.",
      choices: ["True", "False"],
      answerIndex: 1,
      explanation: "AI is good at fluent writing but can confidently invent facts. Smooth ≠ true.",
      hintLadder: [
        "Does fluent writing prove accuracy?",
        "AI hallucinations are confident.",
        "False."
      ]
    },
    {
      id: "g6.media.e.d2.q5",
      type: "short_answer",
      stem:
        "Imagine you see an article that perfectly matches your view on a topic, but has no named author or sources. Write what you'd do next in two specific steps.",
      rubric: {
        level3: "Two specific actions (e.g., search for the same fact in a named news source; check if the topic has any expert organization that addresses it). Both are verifiable steps.",
        level2: "Two actions but vague.",
        level1: "Vague intentions or 'I'd ignore it'."
      },
      exemplar:
        "Step 1: search for the strongest specific claim in the article and see if any named news site reports it. Step 2: if I can't find the same claim with a named source, treat it as 'reported but unverified' and don't share.",
      hintLadder: [
        "What concrete check moves uncertainty toward certainty?",
        "Cross-source it.",
        "Define what you do if you can't find a second source."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to spot AI-generated content. What's a recent thing online you're now less sure about?",
  misconceptionBank: [
    {
      id: "assumes-formal-is-true",
      label: "Assumes formal-sounding text is accurate",
      description: "Trusts AI text because it sounds professional, even though it lacks specifics.",
      coachMove: "Tone signals nothing about accuracy. Look for named sources and specific evidence."
    }
  ]
};
