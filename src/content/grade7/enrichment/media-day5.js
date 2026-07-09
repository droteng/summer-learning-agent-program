// Grade 7 Media Literacy — Enrichment Day 5.
// Topic: digital footprint & privacy.

export const grade7MediaDay5 = {
  id: "g7.media.e.d5",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 5,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Digital footprint & privacy",
  topicTag: "digital-footprint",
  estimatedMinutes: 20,
  standardsRefs: ["ISTE.2b", "AASL.II.A.1"],
  hook: "The internet has a long memory. Today you learn how your digital footprint forms, why 'delete' rarely means gone, and how to think before you post.",
  miniLesson: [
    "Your digital footprint is everything about you online: posts, comments, likes, photos you're tagged in, and data apps collect in the background. It's both what you share (active) and what's gathered about you (passive).",
    "Posts persist. Screenshots, reshares, archives, and web caches mean content can survive long after you delete the original. 'Delete' removes your copy, not everyone else's — and not the copies already saved.",
    "Think before posting: would you be comfortable with a teacher, a future employer, or a stranger seeing this in five years? Protect privacy by limiting what's public, checking app permissions, and never posting others' private info without asking."
  ],
  workedExample: {
    prompt:
      "You're about to post a funny but embarrassing photo of a friend. How do you decide?",
    steps: [
      "Ask whether your friend gave permission — it's their footprint too.",
      "Assume it could be screenshotted and reshared beyond your followers.",
      "Picture it resurfacing in five years; would it still be okay?",
      "If any answer is doubtful, don't post — or share it privately with the friend instead."
    ],
    answer: "Get consent, assume permanence, apply the future test — when in doubt, don't post."
  },
  items: [
    {
      id: "g7.media.e.d5.q1",
      type: "multiple_choice",
      stem: "Which best describes a DIGITAL FOOTPRINT?",
      choices: [
        "Only the passwords you type.",
        "Just the photos you personally upload.",
        "Only messages you send to close friends.",
        "The full trail of what you share and what's collected about you online."
      ],
      answerIndex: 3,
      explanation: "A digital footprint includes active data you post AND passive data collected about you — the whole trail.",
      hintLadder: [
        "Is it just one thing you post, or many kinds of data?",
        "Think about what you share AND what's gathered about you.",
        "It's the full trail online."
      ],
      misconceptionsTargeted: ["footprint-is-only-posts"]
    },
    {
      id: "g7.media.e.d5.q2",
      type: "multiple_choice",
      stem: "Why can deleting a post fail to erase it from the internet?",
      choices: [
        "Others may have screenshotted, reshared, or archived it before you deleted.",
        "Deleting always works instantly everywhere.",
        "Only paid accounts can delete anything.",
        "Posts disappear on their own after one hour."
      ],
      answerIndex: 0,
      explanation: "Delete removes your copy, but screenshots, reshares, archives, and caches can already exist beyond your control.",
      hintLadder: [
        "Once something is public, who else might have a copy?",
        "Think screenshots and reshares.",
        "Others may already have saved it."
      ],
      misconceptionsTargeted: ["delete-means-gone"]
    },
    {
      id: "g7.media.e.d5.q3",
      type: "multiple_choice",
      stem: "Which is the STRONGEST privacy habit before posting a photo of a friend?",
      choices: [
        "Post first and take it down if they complain.",
        "Add lots of hashtags so it spreads faster.",
        "Ask your friend for permission before you post.",
        "Post it only late at night."
      ],
      answerIndex: 2,
      explanation: "Consent respects that it's their footprint too and prevents harm before it happens — unlike deleting after the fact.",
      hintLadder: [
        "Whose footprint is affected besides yours?",
        "The best fix happens BEFORE posting, not after.",
        "Ask permission first."
      ]
    },
    {
      id: "g7.media.e.d5.q4",
      type: "numeric",
      stem: "You review 10 apps on your phone and find that 4 of them request access to your location even though they don't need it. What percent of the reviewed apps over-request your location? Answer as a whole-number percent.",
      answer: 40,
      tolerance: 1,
      unit: "percent",
      explanation: "4 out of 10 is 4 ÷ 10 = 0.4 = 40%. Auditing permissions and turning off ones apps don't need shrinks your passive footprint.",
      hintLadder: [
        "Divide over-requesting apps by total reviewed.",
        "4 ÷ 10 gives a decimal.",
        "Convert 0.4 to a percent."
      ]
    },
    {
      id: "g7.media.e.d5.q5",
      type: "short_answer",
      stem: "Before posting something online, describe two specific questions you'd ask yourself to protect your privacy and others'.",
      rubric: {
        level3: "Two specific, thoughtful questions (e.g., 'Would I be okay with a future employer or teacher seeing this in five years?' and 'Did everyone in it agree to be posted?'). Both clearly about privacy/consent.",
        level2: "Two questions but one is vague or generic.",
        level1: "Vague ('Is it good?') with no privacy focus."
      },
      exemplar:
        "Question 1: Would I be comfortable with a teacher, a stranger, or a future employer seeing this years from now? Question 2: Does everyone shown in it agree to being posted, and am I sharing anyone's private information? If either answer is no, I don't post it.",
      hintLadder: [
        "One question is about the future; one is about other people.",
        "Think permanence and consent.",
        "Phrase both as yes/no questions you'd ask yourself."
      ]
    }
  ],
  reflectionPrompt: "Today you learned that what you post can persist. What's one thing you'd now check your own privacy settings for?",
  misconceptionBank: [
    {
      id: "delete-means-gone",
      label: "Thinks deleting erases content",
      description: "Believes removing a post makes it disappear everywhere.",
      coachMove: "Delete only removes your copy. Screenshots, reshares, and archives can outlive it — assume permanence."
    },
    {
      id: "footprint-is-only-posts",
      label: "Thinks the footprint is only what you post",
      description: "Ignores the passive data apps and sites collect in the background.",
      coachMove: "Your footprint includes data collected about you, not just what you share. Audit app permissions too."
    }
  ]
};
