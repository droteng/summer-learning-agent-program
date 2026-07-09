// Grade 7 World/Current Affairs — Fall Expedition, Week 5 (Persuasive Voices),
// Day 4. Topic: persuasion in the real world — ads, campaigns, and rhetoric.
// Grade 7 depth: identify MULTIPLE techniques at once, judge whether reasoning
// is sound or fallacious, and evaluate the strength of a real-world argument.

export const fallG7WorldW5D4 = {
  id: "g7.fall.world.w5.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 5,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Persuasion in the real world — techniques and sound reasoning",
  topicTag: "media-persuasion",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.RI.7.8", "C3.D2.Civ.10.6-8"],
  hook: "Ads, campaigns, and headlines persuade you every day — often stacking several techniques at once. At Grade 7 you go past 'spot the trick': you judge whether the REASONING behind a message is actually sound, so you decide what to believe on the merits.",
  miniLesson: [
    "Common techniques: evidence/logic (the honest kind), emotional appeal (making you feel), bandwagon ('everyone's doing it'), and testimonial (a celebrity or 'expert' endorsement). Real messages often stack two or three.",
    "A message can be persuasive but still WEAKLY reasoned. A fallacy is a flaw in the logic — like 'everyone does it, so it must be right' (bandwagon) or attacking the person instead of their argument.",
    "Separate three things: facts (checkable), opinions (personal judgments), and reasoned claims (opinions backed by evidence). Spot the technique, then ask: is there actual sound reasoning underneath, or just the technique?"
  ],
  workedExample: {
    prompt: "Ad: 'Join the millions who switched! Star athlete Jae uses it, and you deserve the best.' Name the techniques and judge the reasoning.",
    steps: [
      "'Join the millions' = bandwagon (follow the crowd).",
      "'Star athlete Jae uses it' = testimonial (celebrity endorsement, not proof the product works).",
      "'You deserve the best' = emotional appeal (flattery).",
      "Judge: three techniques stacked, but ZERO evidence the product is actually better — the reasoning is weak."
    ],
    answer: "Bandwagon + testimonial + emotional flattery, with no real evidence — persuasive in style but weak in reasoning."
  },
  items: [
    {
      id: "g7.fall.world.w5.d4.q1",
      type: "multiple_choice",
      stem: "'9 out of 10 families choose us — don't be the only one left out!' Which technique is this, and why is the reasoning weak?",
      choices: [
        "Sound evidence — the number proves the product is best",
        "A fair side-by-side comparison of products",
        "Bandwagon — it pressures you to follow the crowd, but popularity doesn't prove quality",
        "A controlled scientific study"
      ],
      answerIndex: 2,
      explanation: "It's bandwagon: it pressures you to conform. The reasoning is weak because how many people choose something doesn't prove it's actually good.",
      hintLadder: [
        "What feeling does 'don't be left out' create?",
        "It's about following the crowd — that's bandwagon.",
        "And popularity alone doesn't prove quality, so the logic is weak."
      ]
    },
    {
      id: "g7.fall.world.w5.d4.q2",
      type: "multiple_choice",
      stem: "Which statement is a REASONED CLAIM (an opinion backed by evidence), not a bare fact or a bare opinion?",
      choices: [
        "The park is worth expanding, because attendance has doubled since 2019 and weekend lines now top an hour.",
        "The park covers 12 acres and opened in 2019.",
        "This is the most fun park ever.",
        "Everyone loves this park."
      ],
      answerIndex: 0,
      explanation: "It takes a position ('worth expanding') AND supports it with evidence (doubled attendance, hour-long lines). The first and last are bare opinions; the second is a bare fact.",
      hintLadder: [
        "A reasoned claim = a position PLUS supporting evidence.",
        "Which one both takes a side and gives you data?",
        "The 'worth expanding, because attendance doubled' statement."
      ]
    },
    {
      id: "g7.fall.world.w5.d4.q3",
      type: "multiple_choice",
      stem: "A campaign flyer says: 'Don't listen to Councilor Ruiz's plan — she's new and probably doesn't even like our town.' What is the flaw in this reasoning?",
      choices: [
        "It gives too much evidence about the plan",
        "It attacks the person instead of addressing her actual plan (a fallacy)",
        "It is a fair, logical comparison of two plans",
        "It relies only on verified statistics"
      ],
      answerIndex: 1,
      explanation: "It attacks Ruiz personally rather than engaging with her plan — that's a fallacy (an attack on the person). Nothing about her being new tells you whether the plan is good.",
      hintLadder: [
        "Does the flyer discuss the PLAN, or the PERSON?",
        "Attacking who someone is instead of what they argue is a logic flaw.",
        "That's attacking the person, a fallacy."
      ],
      misconceptionsTargeted: ["persuasive-equals-true"]
    },
    {
      id: "g7.fall.world.w5.d4.q4",
      type: "short_answer",
      stem: "Think of a real ad, post, or campaign slogan you've seen. Name TWO persuasion techniques it stacks, and judge whether it offers sound reasoning or mostly technique.",
      rubric: {
        level3: "Names a real example, correctly identifies TWO techniques (bandwagon/emotion/testimonial/evidence/etc.), AND judges whether the underlying reasoning is sound or just technique.",
        level2: "Names a real example and one technique with some judgment, but the second technique or the reasoning judgment is thin.",
        level1: "Vague, names no real technique, or offers no judgment of the reasoning."
      },
      exemplar: "A sneaker ad showed a famous sprinter (testimonial) over the words 'Be unstoppable' (emotional appeal). It stacked star power and emotion but gave no evidence the shoes actually make you faster — mostly technique, weak reasoning.",
      hintLadder: [
        "Recall an ad or slogan and look for MORE than one move.",
        "Name two: bandwagon, emotion, testimonial, or evidence.",
        "Then ask: did it actually prove anything, or just push feelings?"
      ]
    },
    {
      id: "g7.fall.world.w5.d4.q5",
      type: "short_answer",
      stem: "Explain why a message can be highly PERSUASIVE and still be poorly REASONED. Use one example to show the difference between persuading someone and proving something.",
      rubric: {
        level3: "Clearly explains that persuasion (moving feelings/behavior) is different from sound reasoning (evidence + valid logic), AND gives an example where a message persuades without proving its point.",
        level2: "States the distinction but the example is weak or the reasoning is fuzzy.",
        level1: "Restates the question or conflates persuasive with true."
      },
      exemplar: "A message can be persuasive because it makes you feel something or pressures you to join the crowd, even if it never proves its point. For example, 'Everyone's buying this phone!' might convince a lot of people to buy it, but 'everyone's buying it' isn't evidence that the phone is actually good — it persuades without proving anything.",
      hintLadder: [
        "What does persuasion do — change feelings, or prove facts?",
        "Can something move you without giving evidence?",
        "Give an example that convinces but proves nothing."
      ]
    }
  ],
  reflectionPrompt: "For your own persuasive letter this week, which technique will you use HONESTLY — sound evidence, or a fair emotional appeal — and how will you make sure your reasoning holds up, not just your wording?",
  misconceptionBank: [
    {
      id: "feelings-are-facts",
      label: "Treats an emotional appeal as proof",
      description: "Believes that because a message made them feel good, the claim must be true.",
      coachMove: "Separate the feeling from the facts: 'How did that make me feel?' vs. 'What did it actually prove?'"
    },
    {
      id: "persuasive-equals-true",
      label: "Assumes a persuasive message is a well-reasoned one",
      description: "Confuses being convinced with the argument being logically sound.",
      coachMove: "Ask 'is the underlying reasoning valid, or is it just a good technique?' Persuasive and sound are not the same thing."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Stacked Techniques",
      prompt:
        "Two fall-fair posters: (A) 'Join the thousands who already grabbed tickets — and champion athlete Maya loves this fair!' (B) 'Last year's fair raised $5,000 for the food bank, and attendance grew 20%.' Which poster STACKS bandwagon plus testimonial, and which one relies on sound evidence?",
      answer: "(A) stacks bandwagon ('join the thousands') and testimonial ('Maya loves it') — but proves nothing about the fair. (B) uses checkable evidence ($5,000, 20% growth). Same fair, very different reasoning underneath.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Decode & Rebuild a Fall Fair Ad",
      challenge:
        "You're promoting a school fall fair. First DECODE a technique-heavy ad by labeling every persuasion move in it. Then REBUILD it as an honestly reasoned ad that uses real evidence — and note which version you'd actually trust and why.",
      steps: [
        "Write a short 'technique-heavy' ad for the fair using at least two moves (bandwagon, emotion, testimonial).",
        "Annotate it: label each technique and mark where there's NO evidence.",
        "Rewrite it as an honest, evidence-based ad using one true fact about the fair.",
        "Add a note: which version is more trustworthy, and why sound reasoning matters."
      ],
      deliverable: "A decoded technique-heavy ad (with labels) plus an honestly reasoned rebuild, and a note comparing the two.",
      choiceBoard: [
        "Draw two side-by-side poster ads with technique labels.",
        "Write two short radio scripts (15 seconds each) and annotate the techniques.",
        "Make a 'decode this ad' worksheet that names each technique and flags missing evidence."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Persuasion Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.world.w5.d4.arena1",
          type: "multiple_choice",
          stem: "A cider ad shows a beloved TV chef by a cozy fire saying 'This is the only cider MY family drinks,' but gives no facts about the cider. Which TWO techniques is it MAINLY stacking?",
          choices: [
            "Sound evidence and a controlled study",
            "Bandwagon and a fact-check",
            "A fair side-by-side comparison and statistics",
            "Testimonial (celebrity endorsement) and emotional appeal (cozy feeling)"
          ],
          answerIndex: 3,
          explanation: "It stacks a celebrity testimonial (the chef) with an emotional appeal (the cozy fireside mood) — and offers no actual evidence about the cider.",
          hintLadder: [
            "Who is speaking, and what feeling is the scene selling?",
            "A famous person's endorsement is one technique; the mood is another.",
            "Testimonial plus emotional appeal."
          ]
        },
        {
          id: "g7.fall.world.w5.d4.arena2",
          type: "short_answer",
          stem: "A flyer reads: 'Everyone's switching to PumpkinPhone — the best phone ever, and don't trust the reviewers who say otherwise; they're just jealous.' Name the techniques/fallacies AND judge whether any real evidence is offered.",
          rubric: {
            level3: "Identifies bandwagon ('everyone's switching'), an unsupported superlative ('best ever'), AND the attack on the reviewers ('jealous' = attacking the person), AND states no real evidence is offered.",
            level2: "Identifies two of the three moves and addresses the evidence question.",
            level1: "Vague, names one or no real technique, or misses the evidence point."
          },
          exemplar: "'Everyone's switching' is bandwagon, 'the best phone ever' is an unsupported emotional superlative, and calling the reviewers 'jealous' attacks the people instead of their arguments (a fallacy). The flyer gives no real evidence — no specs, tests, or data at all.",
          hintLadder: [
            "What does 'everyone's switching' pressure you to do?",
            "Is 'best ever' proven, and what does calling reviewers 'jealous' avoid?",
            "Look for any actual facts — are there any?"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Shake Off the Hype",
      prompt:
        "Stand up and 'shake off' the ad pressure: shake out your hands for 10 seconds, roll your shoulders back 5 times, then take one slow breath and say 'I decide on the evidence.'",
      scienceTieIn: "A quick burst of movement releases built-up tension and resets your attention, helping you weigh reasoning calmly instead of reacting on impulse to a slick message.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "For your own persuasive letter this week, which technique will you use HONESTLY — sound evidence or a fair emotional appeal — and how will you make sure the REASONING holds up, not just the wording?",
      badge: { id: "g7-fall-rhetoric-analyst", name: "Rhetoric Analyst", emoji: "🕵️" },
      estimatedMinutes: 7
    }
  }
};
