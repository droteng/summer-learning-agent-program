// Grade 7 Media Literacy — Enrichment Day 3.
// Topic: native ads, sponsored content & influencer disclosures.

export const grade7MediaDay3 = {
  id: "g7.media.e.d3",
  gradeLevel: 7,
  weekNumber: 9,
  dayNumber: 3,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Native ads & influencer disclosures",
  topicTag: "native-ads",
  estimatedMinutes: 19,
  standardsRefs: ["AASL.I.C", "ISTE.2b"],
  hook: "The most effective ads don't look like ads. Today you learn to spot native advertising, sponsored posts, and paid influencer content — and to find the tiny label that's supposed to tell you.",
  miniLesson: [
    "A native ad is designed to blend into the surrounding content — an 'article' on a news site or a video that matches a channel's normal style, but paid for by a brand to sell something. The format hides the sales motive.",
    "Look for disclosure labels: 'Sponsored,' 'Paid partnership,' 'Promoted,' 'Ad,' or on posts '#ad' and '#sponsored.' In the U.S., the FTC requires creators to disclose when a brand pays or gives them free products for a recommendation.",
    "Disclosures are often buried — faint gray text, the end of a caption, behind a 'more' link, or a platform's small 'Paid partnership' tag. Weak or missing disclosure is itself a warning: the recommendation may not be honest."
  ],
  workedExample: {
    prompt:
      "A favorite gaming YouTuber spends a whole video praising one new headset. How do you tell if it's a paid promotion?",
    steps: [
      "Scan for a 'Includes paid promotion' tag or an on-screen 'Sponsored' note.",
      "Read the full description — brands are often disclosed there with '#ad' or a discount code.",
      "Notice the pattern: only positives, a code, and a link to buy suggest a paid deal.",
      "If it's paid, weigh the review as advertising, not a neutral opinion — and cross-check with independent reviews."
    ],
    answer: "Look for disclosure tags and codes; treat paid reviews as ads and cross-check."
  },
  items: [
    {
      id: "g7.media.e.d3.q1",
      type: "multiple_choice",
      stem: "What makes NATIVE advertising different from a regular banner ad?",
      choices: [
        "It's designed to blend in and look like the site's normal content.",
        "It always appears in a pop-up window.",
        "It can only be a single still image.",
        "It never mentions a product."
      ],
      answerIndex: 0,
      explanation: "Native ads mimic the look and format of the surrounding content so the sales motive is easy to miss.",
      hintLadder: [
        "The word 'native' hints it fits in with its surroundings.",
        "Does it stand out or blend in?",
        "It's built to look like normal content."
      ],
      misconceptionsTargeted: ["ads-always-look-like-ads"]
    },
    {
      id: "g7.media.e.d3.q2",
      type: "multiple_choice",
      stem: "In the U.S., when must an influencer disclose a brand deal?",
      choices: [
        "Only if the brand paid them cash.",
        "Only if a follower asks directly.",
        "Never — disclosure is optional online.",
        "Whenever a brand pays them OR gives free products for a recommendation."
      ],
      answerIndex: 3,
      explanation: "The FTC requires disclosure for any 'material connection' — including free products, not just cash — when the creator recommends something.",
      hintLadder: [
        "Does it have to be money, or can it be free stuff too?",
        "Think beyond cash payments.",
        "Payment OR free products both require disclosure."
      ],
      misconceptionsTargeted: ["only-cash-counts"]
    },
    {
      id: "g7.media.e.d3.q3",
      type: "multiple_choice",
      stem: "Which is a proper DISCLOSURE that a post is an ad?",
      choices: [
        "A row of heart emojis in the caption.",
        "A '#ad' or 'Paid partnership' label near the top of the post.",
        "A lot of likes on the post.",
        "The word 'love' used three times."
      ],
      answerIndex: 1,
      explanation: "Clear terms like '#ad' or a 'Paid partnership' tag disclose the deal. Emojis and popularity disclose nothing.",
      hintLadder: [
        "Which option is an actual label about payment?",
        "Emojis and likes aren't disclosures.",
        "Look for '#ad' or 'Paid partnership.'"
      ]
    },
    {
      id: "g7.media.e.d3.q4",
      type: "numeric",
      stem: "You scroll a feed of 20 posts. 5 of them carry a '#ad' or 'Sponsored' label. What percent of the posts in the feed are disclosed ads? Answer as a whole-number percent.",
      answer: 25,
      tolerance: 1,
      unit: "percent",
      explanation: "5 out of 20 is 5 ÷ 20 = 0.25 = 25%. And that's only the DISCLOSED ads — undisclosed ones would push the real ad share higher.",
      hintLadder: [
        "Divide labeled ads by total posts.",
        "5 ÷ 20 gives a decimal.",
        "Convert 0.25 to a percent."
      ]
    },
    {
      id: "g7.media.e.d3.q5",
      type: "short_answer",
      stem: "A post you like praises a product but has no visible '#ad' or 'Sponsored' label. Explain two things you'd do before trusting the recommendation.",
      rubric: {
        level3: "Two specific, sensible actions (e.g., expand the full caption / tap 'more' to look for a buried disclosure or discount code; cross-check with an independent review). Both are verifiable.",
        level2: "Two actions but at least one is vague.",
        level1: "Vague ('I'd be careful') with no concrete steps."
      },
      exemplar:
        "First, I'd tap 'more' and read the whole caption for a buried '#ad,' a discount code, or a tagged brand — disclosures are often hidden. Second, I'd look up an independent review from someone not tied to the brand. If it seems paid and no neutral source agrees, I treat it as an ad.",
      hintLadder: [
        "Disclosures are often hidden — where would you look?",
        "One step finds a buried label; one gets an outside opinion.",
        "Name both concrete steps."
      ]
    }
  ],
  reflectionPrompt: "Today you learned to spot paid content. Which creator you follow do you now want to check for hidden sponsorships?",
  misconceptionBank: [
    {
      id: "ads-always-look-like-ads",
      label: "Thinks ads always look like ads",
      description: "Assumes anything that isn't an obvious banner or pop-up must be honest, unpaid content.",
      coachMove: "The best ads blend in. Look for disclosure labels and a sales motive, not a flashy banner."
    },
    {
      id: "only-cash-counts",
      label: "Thinks only cash payment needs disclosure",
      description: "Believes free products or gifts don't count as a brand deal.",
      coachMove: "Free products are a 'material connection' too. The FTC requires disclosing them, not just cash."
    }
  ]
};
