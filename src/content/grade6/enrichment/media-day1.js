// Grade 6 Media Literacy — Enrichment Day 1.
// Topic: source quality checklist.

export const grade6MediaDay1 = {
  id: "g6.media.e.d1",
  gradeLevel: 6,
  weekNumber: 9,
  dayNumber: 1,
  subject: "Media Literacy",
  track: "mediaLiteracy",
  enrichment: true,
  topic: "Source quality checklist",
  topicTag: "source-quality",
  estimatedMinutes: 16,
  standardsRefs: ["AASL.II.A.1", "ISTE.3a"],
  hook: "Before you trust a claim, ask three questions about its source. Today you learn the checklist real journalists use.",
  miniLesson: [
    "Author: is there a named human? An anonymous claim is a rumor until it has a face.",
    "Date: when was it published? A 2018 health study about a 2025 outbreak is the wrong tool.",
    "Domain + purpose: .gov and major news orgs are accountable; social posts and unknown blogs aren't. What's the site trying to do — inform, sell, or persuade?"
  ],
  workedExample: {
    prompt:
      "You see this on social media: 'Scientists prove screens before bed cause permanent vision loss in 80% of teens.' Run the checklist.",
    steps: [
      "Author: just a screenshot — no scientist named, no organization. Red flag.",
      "Date: image, no visible date. Could be from any year.",
      "Domain/purpose: shared on social media, not the original study. Path back to the source is missing.",
      "Verdict: don't share. Find the original study (if it exists) and check whether the headline matches what the scientists actually said."
    ],
    answer: "Failed all three checks — treat as unverified until traced to source."
  },
  items: [
    {
      id: "g6.media.e.d1.q1",
      type: "multiple_choice",
      stem: "What's the FIRST question to ask of any online claim?",
      choices: [
        "Is the post pretty?",
        "Who wrote it and what's their role?",
        "How many likes does it have?",
        "Does it confirm what I already think?"
      ],
      answerIndex: 1,
      explanation: "Author + role anchor everything else. Without them, you can't weigh the claim.",
      hintLadder: [
        "Who is the source?",
        "What gives a claim accountability?",
        "Named author."
      ]
    },
    {
      id: "g6.media.e.d1.q2",
      type: "multiple_choice",
      stem: "Which is MOST trustworthy for a health claim?",
      choices: [
        "An anonymous Twitter thread.",
        "A page on the CDC website citing a peer-reviewed study.",
        "A YouTube video by an unknown user.",
        "A friend's group chat message."
      ],
      answerIndex: 1,
      explanation: "Government health agency + cited study = traceable to evidence. The others can't be verified.",
      hintLadder: [
        "Which option can you trace to evidence?",
        "Look for named org + citation.",
        "CDC + study."
      ]
    },
    {
      id: "g6.media.e.d1.q3",
      type: "multiple_choice",
      stem: "A claim is from a website ending in .gov. Does that GUARANTEE it's true?",
      choices: [
        "Yes, .gov sites are always right.",
        "No — .gov sites are accountable, but you still check the date and the specific claim against the source they cite.",
        "Only if the page is pink.",
        "Only on Tuesdays."
      ],
      answerIndex: 1,
      explanation: ".gov is accountable — there's a named agency. But always check the specific claim and date.",
      hintLadder: [
        "Accountable ≠ always right.",
        "What else do you check?",
        "Date and cited evidence."
      ],
      misconceptionsTargeted: ["domain-equals-truth"]
    },
    {
      id: "g6.media.e.d1.q4",
      type: "multiple_choice",
      stem:
        "A 2014 article says 'Scientists predict massive impact by 2020.' What's the issue using this today?",
      choices: [
        "Nothing — predictions are timeless.",
        "The 2020 prediction date has passed; we should look at what actually happened by 2020, not the prediction.",
        "The font is old.",
        "Articles older than a year are always wrong."
      ],
      answerIndex: 1,
      explanation: "Old predictions are testable now. Look at the actual outcome rather than the original prediction.",
      hintLadder: [
        "The prediction was about 2020.",
        "What year is it now?",
        "We can check what actually happened."
      ]
    },
    {
      id: "g6.media.e.d1.q5",
      type: "short_answer",
      stem:
        "Pick a recent online claim you've seen (a meme, a video, a post). Run the three-question checklist on it and write your verdict in one sentence.",
      rubric: {
        level3: "Names a specific claim, addresses all three questions (author, date, domain/purpose), and gives a clear verdict.",
        level2: "Addresses 2 of 3 or has a vague verdict.",
        level1: "Just states a claim with no analysis."
      },
      exemplar:
        "Claim: a meme saying 'humans only use 10% of their brain'. Author: no name, just an image. Date: unclear. Domain: social media, purpose is engagement not info. Verdict: not trustworthy — and easily fact-checkable shows this is a long-debunked myth.",
      hintLadder: [
        "Pick something specific.",
        "Walk the three questions in order.",
        "End with a clear verdict."
      ]
    }
  ],
  reflectionPrompt: "Today you built a source-quality reflex. What's a claim you'd want to double-check this week?",
  misconceptionBank: [
    {
      id: "domain-equals-truth",
      label: "Treats a trusted domain as proof",
      description: "Assumes anything on .gov or a major news site is automatically true.",
      coachMove: "Trusted domain = accountable, not guaranteed correct. Still check the specific claim against the cited source."
    }
  ]
};
