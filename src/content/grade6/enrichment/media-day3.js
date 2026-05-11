// Grade 6 Media Literacy — Enrichment Day 3.
// Topic: telling ads from content.

export const grade6MediaDay3 = {
  id: "g6.media.e.d3",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Telling ads from content",
  topicTag: "ad-recognition",
  estimatedMinutes: 16,
  standardsRefs: ["AASL.II.A.1"],
  hook: "Ads often dress up as articles. Today you learn to spot the disguise.",
  miniLesson: [
    "Look for the labels: 'Sponsored', 'Promoted', 'Ad', 'Paid partnership', '#ad'. These are required by law but often hidden in small text.",
    "Native ads mimic the look of the surrounding articles. The clue is often the byline ('Brand X') instead of an author name.",
    "Influencer posts must disclose sponsorships. Look for the disclosure near the top of the caption, not buried at the end."
  ],
  workedExample: {
    prompt:
      "An Instagram post by a creator you follow shows them using a new water bottle. The caption ends with '#partner'. Is this an ad?",
    steps: [
      "'#partner' is one of the required disclosure tags (along with #ad, #sponsored, etc.).",
      "The post is therefore a paid promotion, not an organic recommendation.",
      "Read it differently: they were paid (in money or product) to share this.",
      "Their honest opinion may still exist, but the post is shaped by the partnership."
    ],
    answer: "Yes — '#partner' is a sponsorship disclosure."
  },
  items: [
    {
      id: "g6.media.e.d3.q1",
      type: "multiple_choice",
      stem: "Which is a SPONSORSHIP disclosure tag?",
      choices: ["#happy", "#sponsored", "#school", "#summer"],
      answerIndex: 1,
      explanation: "#sponsored explicitly tells you the post was paid for. The others are not disclosures.",
      hintLadder: [
        "Which tag means 'someone paid for this'?",
        "Disclosure tags name the relationship.",
        "#sponsored."
      ]
    },
    {
      id: "g6.media.e.d3.q2",
      type: "multiple_choice",
      stem:
        "A news website shows an article styled exactly like the others, but the byline says 'BrandX Partnership.' What is it?",
      choices: [
        "Regular news.",
        "Native advertising — paid content made to look like editorial.",
        "A typo.",
        "Breaking news."
      ],
      answerIndex: 1,
      explanation: "Native ads borrow the surrounding format. The byline gives them away.",
      hintLadder: [
        "Brand name in the byline = paid content.",
        "What's that called?",
        "Native advertising."
      ],
      misconceptionsTargeted: ["native-ad-fooled"]
    },
    {
      id: "g6.media.e.d3.q3",
      type: "multiple_choice",
      stem:
        "An influencer posts: 'This shampoo changed my hair! No filter!' with no disclosure. Are they required to disclose if they were paid?",
      choices: [
        "No — they're not on TV.",
        "Yes — FTC rules require disclosing paid endorsements, even on social media.",
        "Only if the brand asks.",
        "Only on Sundays."
      ],
      answerIndex: 1,
      explanation: "The FTC requires clear disclosure of any material connection (payment, free product, family relationship) when endorsing on social media.",
      hintLadder: [
        "Who regulates ads in the US?",
        "Do their rules cover social media?",
        "Yes — FTC rules apply everywhere."
      ]
    },
    {
      id: "g6.media.e.d3.q4",
      type: "multiple_choice",
      stem: "Which is NOT a reason to treat ads with extra care?",
      choices: [
        "Ads pay for the platform to exist.",
        "Ads are shaped to persuade, not just inform.",
        "Ads may stretch what evidence supports.",
        "All of the above are reasons."
      ],
      answerIndex: 0,
      explanation:
        "That ads pay for the platform is true but not a reason for extra care. The other reasons ARE. The trick: this question asks for the option that is NOT a caution reason.",
      hintLadder: [
        "Re-read the question — it asks NOT.",
        "Which option is not actually a reason to be careful?",
        "Funding the platform doesn't mean you should be careful — it's neutral context."
      ]
    },
    {
      id: "g6.media.e.d3.q5",
      type: "short_answer",
      stem:
        "Find one ad you've seen recently and one piece of organic content on the same topic. Write what made each clear: was the ad labeled, and was the organic content sourced?",
      rubric: {
        level3: "Names a specific ad and specific organic content, identifies the ad's disclosure (or lack), and identifies the organic content's sourcing (or lack).",
        level2: "Has both but the analysis is shallow.",
        level1: "Only one example or no analysis."
      },
      exemplar:
        "Ad: a YouTube pre-roll for a phone, labeled 'Sponsored' in the corner. Organic: a tech review on a major news site comparing three phones with named reviewer and specs cited from manufacturers. The ad sold; the review compared.",
      hintLadder: [
        "Pick a real ad — label visible?",
        "Pick real content on the same topic — sources visible?",
        "Note what made each clear."
      ]
    }
  ],
  reflectionPrompt: "Today you spotted ads in disguise. Where's one place in your daily feed that ads are most camouflaged?",
  misconceptionBank: [
    {
      id: "native-ad-fooled",
      label: "Reads native ads as news",
      description: "Doesn't notice the brand byline and treats native advertising as editorial content.",
      coachMove: "Always check the byline. If a brand name is there instead of a person's name, it's an ad."
    }
  ]
};
