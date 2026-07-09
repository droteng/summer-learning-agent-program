// Grade 5 Media Literacy — Enrichment Day 2.
// Topic: real vs. edited or fake photos.

export const grade5MediaDay2 = {
  id: "g5.media.e.d2",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Real vs. edited photos",
  topicTag: "real-vs-edited",
  estimatedMinutes: 16,
  standardsRefs: ["ISTE.3a", "AASL.I.C"],
  hook: "A photo can look totally real and still be changed or even made up by a computer. Today you learn some simple things to look for so a picture can't fool you.",
  miniLesson: [
    "Look at the edges. When a picture is edited, the edges around a person or object can look blurry, too sharp, or bent in a weird way.",
    "Look for things that don't match. Two shadows going different directions, water that looks flat and fake, or hands with too many fingers can mean a computer made or changed the photo.",
    "When you're not sure, look for the same photo somewhere you trust, like a news site or the real person's own page. If no trusted place has it, be careful before you believe it."
  ],
  workedExample: {
    prompt:
      "A picture shows a giant shark swimming down a flooded city street. It looks amazing. How do you check if it's real?",
    steps: [
      "Look at the edges: the shark's edges are too clean, like it was pasted on top of the street photo.",
      "Look for things that don't match: the shark casts no shadow in the water, and the street is dry near it.",
      "Search for it: this exact 'shark in the street' picture shows up as a famous fake, not on any real news site.",
      "So: this photo is edited, not real. I would not share it as true."
    ],
    answer: "Edited/fake — clean pasted edges, no shadow, and known as a fake online."
  },
  items: [
    {
      id: "g5.media.e.d2.q1",
      type: "multiple_choice",
      stem: "Which of these is a good clue that a photo might be EDITED or fake?",
      choices: [
        "The photo is bright and colorful.",
        "A person in it has a hand with six fingers.",
        "The photo was taken outside.",
        "The photo is on a phone."
      ],
      answerIndex: 1,
      explanation: "Computers that make fake images often mess up hands, giving extra or strange fingers. Being bright, outside, or on a phone doesn't mean anything.",
      hintLadder: [
        "Which clue is something that shouldn't happen in real life?",
        "Look at the hands.",
        "Six fingers is the clue."
      ]
    },
    {
      id: "g5.media.e.d2.q2",
      type: "multiple_choice",
      stem: "In a photo, one person's shadow points LEFT and the person next to them has a shadow pointing RIGHT, with the same sun. What does this suggest?",
      choices: [
        "The photo must be real.",
        "Shadows never matter.",
        "The weather was windy.",
        "The photo may be edited, because shadows from one sun should point the same way."
      ],
      answerIndex: 3,
      explanation: "With one sun, shadows go the same direction. Shadows pointing different ways is a clue someone put the picture together from different parts.",
      hintLadder: [
        "Think about how shadows work with one sun.",
        "Should two shadows point in different directions?",
        "It suggests the photo may be edited."
      ],
      misconceptionsTargeted: ["seeing-is-believing"]
    },
    {
      id: "g5.media.e.d2.q3",
      type: "multiple_choice",
      stem: "You see a wild photo and you can't tell if it's real. What is the BEST thing to do?",
      choices: [
        "Look for the same photo on a news site or trusted place you know.",
        "Share it right away so friends can see.",
        "Believe it because it looks cool.",
        "Add a funny caption and post it."
      ],
      answerIndex: 0,
      explanation: "Checking a trusted place tells you if the photo is really from a real event. If no trusted place has it, that's a warning sign.",
      hintLadder: [
        "How can you find out if a photo is real?",
        "Try to find it somewhere you trust.",
        "Look for it on a trusted news site."
      ]
    },
    {
      id: "g5.media.e.d2.q4",
      type: "numeric",
      stem: "You check 5 photos from an unknown post. In these ones you find a clear problem: one has a six-fingered hand, one has shadows going different ways, and one has a person with pasted-looking edges. The other 2 look fine and also show up on a trusted news site. How many of the 5 photos have a warning sign that they may be edited?",
      answer: 3,
      tolerance: 0,
      unit: "photos",
      explanation: "Three photos have a clear problem: the extra finger, the mismatched shadows, and the pasted edges. The 2 that look fine and appear on a trusted site don't, so 3 of the 5 have a warning sign.",
      hintLadder: [
        "Count the photos that have a clear problem.",
        "The six fingers, the shadows, and the pasted edges each count.",
        "That makes 3 photos."
      ]
    },
    {
      id: "g5.media.e.d2.q5",
      type: "short_answer",
      stem: "Describe two things you would look at on a photo to help decide if it is real or edited. Use your own words.",
      rubric: {
        level3: "Names two clear, correct clues (like edges, shadows, hands, or checking a trusted source) in the student's own words.",
        level2: "Names one correct clue, or two clues that are vague.",
        level1: "No real clue, or just says 'I would guess.'"
      },
      exemplar:
        "First I would look at the edges around the people to see if they look pasted on. Then I would check the shadows to see if they all point the same way.",
      hintLadder: [
        "Think of the clues from today's lesson.",
        "Pick two you can explain.",
        "Write each one in a full sentence."
      ]
    }
  ],
  reflectionPrompt: "Today you learned that photos can be changed. What is one photo you've seen that you now wonder about?",
  misconceptionBank: [
    {
      id: "seeing-is-believing",
      label: "Believes a photo just because it looks real",
      description: "Thinks that if a picture looks clear and real, it must show something that truly happened.",
      coachMove: "Show them that computers can make very real-looking fakes. Teach the clue-checking habit: edges, shadows, and finding a trusted source."
    }
  ]
};
