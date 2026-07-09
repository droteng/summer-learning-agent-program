// Grade 5 Media Literacy — Enrichment Day 3.
// Topic: telling ads from shows and videos.

export const grade5MediaDay3 = {
  id: "g5.media.e.d3",
  gradeLevel: 5,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Telling ads from shows",
  topicTag: "ads-vs-shows",
  estimatedMinutes: 15,
  standardsRefs: ["AASL.I.C", "ISTE.3a"],
  hook: "Companies want you to buy things, so they hide ads inside fun videos and games. Today you learn how to spot an ad, even a sneaky one.",
  miniLesson: [
    "An ad's job is to make you WANT something. A show or video is mostly there to entertain or teach you. Ask: is this trying to sell me something?",
    "Look for words like 'Ad', 'Sponsored', 'Paid partnership', or 'Buy now'. These are clues that someone paid to show it to you.",
    "Even a favorite creator can be paid to talk about a product. That's still an ad, even if it doesn't look like a normal commercial."
  ],
  workedExample: {
    prompt:
      "A video game streamer you like spends five minutes talking about how great a new energy drink is, and the word 'Sponsored' is in the corner. Is this an ad?",
    steps: [
      "Ask: is this trying to sell something? Yes — it's praising a drink you could buy.",
      "Look for clue words: the word 'Sponsored' is right there in the corner.",
      "Notice who's talking: a creator you like, but they were paid, which makes it an ad.",
      "So: yes, this is an ad, even though it's inside a fun stream."
    ],
    answer: "Yes, it's an ad — it's selling a drink and it's marked 'Sponsored'."
  },
  items: [
    {
      id: "g5.media.e.d3.q1",
      type: "multiple_choice",
      stem: "What is the main JOB of an advertisement (an ad)?",
      choices: [
        "To make you want to buy or get something.",
        "To teach you math for free.",
        "To make you feel sleepy.",
        "To show you the weather."
      ],
      answerIndex: 0,
      explanation: "Ads are made to get you to buy or want something. That's their main goal, even when they look fun.",
      hintLadder: [
        "Why do companies pay for ads?",
        "They want you to do something with your money.",
        "The job is to make you want to buy something."
      ]
    },
    {
      id: "g5.media.e.d3.q2",
      type: "multiple_choice",
      stem: "Which word on a video is a clue that it is really an AD?",
      choices: [
        "Chapter",
        "Replay",
        "Sponsored",
        "Volume"
      ],
      answerIndex: 2,
      explanation: "'Sponsored' means someone paid for the video to be shown. That's a clear sign it's an ad. The other words are just normal video buttons.",
      hintLadder: [
        "Which word means 'someone paid for this'?",
        "It starts with 'S'.",
        "The word is 'Sponsored'."
      ]
    },
    {
      id: "g5.media.e.d3.q3",
      type: "multiple_choice",
      stem: "Your favorite creator says, 'I LOVE these new sneakers, use my code to buy them!' Is this an ad?",
      choices: [
        "No, because you like the creator.",
        "Yes — they are trying to get you to buy sneakers, which makes it an ad.",
        "No, because it's in a video you enjoy.",
        "Only if a robot voice says it."
      ],
      answerIndex: 1,
      explanation: "Liking the creator doesn't change it. They're pushing you to buy something with a code, so it's an ad.",
      hintLadder: [
        "Are they trying to sell you something?",
        "Liking them doesn't stop it from being an ad.",
        "Yes, it's an ad."
      ],
      misconceptionsTargeted: ["favorite-creator-not-ad"]
    },
    {
      id: "g5.media.e.d3.q4",
      type: "numeric",
      stem: "During one 10-minute video, you count these parts: a fun story, a 'Buy now' ad, a game clip, and a 'Sponsored' drink section. How many of those 4 parts are trying to sell you something?",
      answer: 2,
      tolerance: 0,
      unit: "parts",
      explanation: "The 'Buy now' ad and the 'Sponsored' drink section are both selling something, so that's 2. The fun story and the game clip are not.",
      hintLadder: [
        "Which parts are trying to sell you something?",
        "The 'Buy now' part and the 'Sponsored' part both sell.",
        "That makes 2 parts."
      ]
    },
    {
      id: "g5.media.e.d3.q5",
      type: "short_answer",
      stem: "Think of an ad you've seen inside a video, game, or app. In one or two sentences, tell what it was selling and one clue that told you it was an ad.",
      rubric: {
        level3: "Names a specific ad, says what it was selling, AND gives a real clue (like 'Sponsored', 'Buy now', or a code).",
        level2: "Names the ad and one of the two (what it sold OR the clue).",
        level1: "Vague, with no clue and no clear product."
      },
      exemplar:
        "In a phone game, an ad popped up selling a new toy. I knew it was an ad because it had a big 'Get it now!' button and took me to a shopping page.",
      hintLadder: [
        "Pick one real ad you remember.",
        "Say what it wanted you to buy.",
        "Add the clue that gave it away."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to spot ads, even sneaky ones. What's an ad you saw recently that was hiding inside something fun?",
  misconceptionBank: [
    {
      id: "favorite-creator-not-ad",
      label: "Thinks a favorite creator's plug isn't an ad",
      description: "Believes that when a liked creator promotes a product, it doesn't count as an ad.",
      coachMove: "Explain that creators can be paid to promote things. If it's selling you a product, it's an ad — no matter who says it."
    }
  ]
};
