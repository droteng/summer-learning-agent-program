// Grade 7 Media Literacy — Enrichment Day 2.
// Topic: detecting AI-generated media & deepfakes.

export const grade7MediaDay2 = {
  id: "g7.media.e.d2",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 2,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Detecting AI-generated media & deepfakes",
  topicTag: "deepfakes",
  estimatedMinutes: 21,
  standardsRefs: ["AI4K12.5.B", "ISTE.2b"],
  hook: "A video can now show a real person saying words they never said. Today you learn the artifacts, the provenance checks, and the reverse-search moves that separate the fake from the real.",
  miniLesson: [
    "Artifacts are the small errors generators leave behind. In deepfake video, watch the edges: blinking that's too regular or missing, teeth that blur or merge, hair strands that flicker, and lip movements that lag the audio. Backgrounds may warp when the person moves.",
    "Provenance is the trail showing where media came from. Ask: who first posted it, when, and does a reliable outlet carry the same clip? Some real photos now include C2PA 'content credentials' — a signed record of how they were made or edited.",
    "Reverse image (and frame) search finds earlier or original versions. If a 'breaking' clip already appears in older posts, or appears nowhere reliable, treat it as suspect. When you truly can't tell, assume it could be synthetic and don't spread it."
  ],
  workedExample: {
    prompt:
      "A 15-second clip shows a school principal announcing a surprise week off. It's spreading fast. How do you check whether it's a deepfake?",
    steps: [
      "Slow down and watch the mouth — do the lips sync exactly to the words, or lag and smear?",
      "Look for artifacts: unnatural blinking, blurry teeth, flickering hairline, a warping background.",
      "Check provenance: did the school's official account or a local news outlet post it?",
      "Reverse-search a frame; if the original is unofficial and no reliable source confirms it, don't share."
    ],
    answer: "Inspect artifacts, verify provenance, reverse-search — assume synthetic if unconfirmed."
  },
  items: [
    {
      id: "g7.media.e.d2.q1",
      type: "multiple_choice",
      stem: "Which is a common ARTIFACT that can reveal a deepfake video?",
      choices: [
        "The video is filmed outdoors.",
        "Lip movements that don't quite match the audio.",
        "The person is wearing a jacket.",
        "The clip is exactly 15 seconds long."
      ],
      answerIndex: 1,
      explanation: "Audio-visual sync is hard to fake perfectly; lips that lag or smear against the words are a classic deepfake tell.",
      hintLadder: [
        "Which option is about how the fake is MADE, not the scene?",
        "Think about matching mouth to sound.",
        "Lip movements that don't match the audio."
      ]
    },
    {
      id: "g7.media.e.d2.q2",
      type: "multiple_choice",
      stem: "What does checking a media file's PROVENANCE mean?",
      choices: [
        "Measuring how many pixels the image has.",
        "Counting how many people liked it.",
        "Tracing where it originally came from and who first posted it.",
        "Making the video play in slow motion."
      ],
      answerIndex: 2,
      explanation: "Provenance is the origin trail — first poster, date, and whether a reliable source carries it. Content credentials (C2PA) can record this.",
      hintLadder: [
        "The word is about a media file's history.",
        "Where did it start and who posted it first?",
        "Tracing the original source and origin."
      ]
    },
    {
      id: "g7.media.e.d2.q3",
      type: "multiple_choice",
      stem: "You want to know if a 'breaking' photo is actually old and reused. What's the BEST move?",
      choices: [
        "Reverse image search to find earlier posts of the same photo.",
        "Zoom in until it looks blurry.",
        "Ask whoever shared it if it's real.",
        "Check how many comments it has."
      ],
      answerIndex: 0,
      explanation: "Reverse image search surfaces earlier appearances. If the photo shows up in older articles, it isn't from today.",
      hintLadder: [
        "How do you find where else a photo has appeared?",
        "Search by the image, not by words.",
        "Reverse image search for earlier posts."
      ]
    },
    {
      id: "g7.media.e.d2.q4",
      type: "numeric",
      stem: "You inspect a suspicious video for 8 known deepfake artifacts (bad blinking, blurry teeth, flickering hair, warped background, lip lag, and so on). You find 6 of the 8. What percent of the checked artifacts were present? Answer as a whole-number percent.",
      answer: 75,
      tolerance: 1,
      unit: "percent",
      explanation: "6 out of 8 is 6 ÷ 8 = 0.75 = 75%. Finding most of your artifact checks present is strong evidence the clip is synthetic.",
      hintLadder: [
        "Divide the number found by the number checked.",
        "6 ÷ 8 gives a decimal.",
        "Turn 0.75 into a percent."
      ]
    },
    {
      id: "g7.media.e.d2.q5",
      type: "short_answer",
      stem: "A friend forwards you a shocking video of a celebrity. Describe two different kinds of checks you'd run — one about the content itself and one about where it came from.",
      rubric: {
        level3: "One specific artifact/content check (e.g., watch lip-sync, blinking, or edges frame by frame) AND one specific provenance check (e.g., reverse-search a frame or confirm an official/reliable account posted it). Both concrete.",
        level2: "Two checks but one is vague, or both are the same kind.",
        level1: "Vague ('I'd look closely') with no distinct checks."
      },
      exemplar:
        "Content check: slow the video and watch whether the lips match the audio and whether blinking looks natural. Provenance check: reverse-search a frame and see whether the celebrity's verified account or a reliable outlet posted the same clip. If both fail, I treat it as likely fake.",
      hintLadder: [
        "One check looks at the video; one looks at its origin.",
        "Name a specific artifact for the content check.",
        "Name a specific origin check for provenance."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to spot AI-made media. If deepfakes get perfect, what habit would still protect you?",
  misconceptionBank: [
    {
      id: "seeing-is-believing",
      label: "Believes video can't be faked",
      description: "Assumes a clear video of someone speaking must be real.",
      coachMove: "Modern tools can put real words in a real face. Check artifacts and provenance before trusting a clip."
    }
  ]
};
