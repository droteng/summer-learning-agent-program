// Grade 6 World/Current Affairs — Fall Expedition, Week 5 (Persuasive Voices),
// Day 4. Topic: persuasion in the real world — ads, campaigns, fact vs. opinion.

export const fallG6WorldW5D4 = {
  id: "g6.fall.world.w5.d4",
  season: "fall",
  gradeLevel: 6,
  weekNumber: 5,
  dayNumber: 4,
  subject: "World/Current Affairs",
  topic: "Persuasion in the real world",
  topicTag: "media-persuasion",
  estimatedMinutes: 17,
  standardsRefs: ["C3.D2.Civ.10", "CCSS.RI.6.8"],
  hook: "Ads, campaigns, and headlines are all trying to persuade you every day. Today you learn to see the techniques — so you decide what to believe.",
  miniLesson: [
    "Persuasion techniques include: facts and evidence (the honest kind), emotional appeals (making you feel something), and bandwagon ('everyone's doing it').",
    "A fact can be checked; an opinion is a judgment. Persuaders often mix them, so separate them.",
    "Being persuaded isn't bad — being persuaded WITHOUT noticing is. Spot the technique, then judge the claim."
  ],
  workedExample: {
    prompt: "Ad: 'Join the millions who switched! You deserve the best.' Name the techniques.",
    steps: [
      "'Join the millions' = bandwagon (everyone's doing it).",
      "'You deserve the best' = emotional appeal (flattery).",
      "Notice there's no actual evidence the product is better.",
      "Technique spotted: bandwagon + emotion, no facts."
    ],
    answer: "Bandwagon ('millions') + emotional flattery ('you deserve the best'), with no real evidence."
  },
  items: [
    {
      id: "g6.fall.world.w5.d4.q1",
      type: "multiple_choice",
      stem: "'9 out of 10 families choose us — don't be left out!' Which technique is this?",
      choices: ["Pure evidence", "Bandwagon (everyone's doing it)", "A fair comparison", "A scientific study"],
      answerIndex: 1,
      explanation: "It pressures you to follow the crowd — the bandwagon technique.",
      hintLadder: [
        "What feeling is 'don't be left out' creating?",
        "It's about following the crowd.",
        "That's bandwagon."
      ]
    },
    {
      id: "g6.fall.world.w5.d4.q2",
      type: "multiple_choice",
      stem: "Which statement is a FACT (checkable), not an opinion?",
      choices: [
        "This is the most fun park ever.",
        "The park covers 12 acres and opened in 2019.",
        "Everyone loves this park.",
        "This park is the best."
      ],
      answerIndex: 1,
      explanation: "Acreage and an opening year can be verified; the others are judgments.",
      hintLadder: [
        "Which one could you look up and confirm?",
        "Facts are checkable; opinions are judgments.",
        "The acreage and date are facts."
      ]
    },
    {
      id: "g6.fall.world.w5.d4.q3",
      type: "multiple_choice",
      stem: "An ad shows a happy family laughing but gives no information about the product. What is it relying on?",
      choices: [
        "Evidence and data",
        "An emotional appeal",
        "A logical argument",
        "A fact check"
      ],
      answerIndex: 1,
      explanation: "It's selling a feeling (happiness) rather than facts about the product — an emotional appeal.",
      hintLadder: [
        "Is there any information, or just a feeling?",
        "What emotion are they showing?",
        "That's an emotional appeal."
      ],
      misconceptionsTargeted: ["feelings-are-facts"]
    },
    {
      id: "g6.fall.world.w5.d4.q4",
      type: "short_answer",
      stem: "Think of a real ad, post, or campaign slogan you've seen. Name one persuasion technique it used and whether it gave real evidence.",
      rubric: {
        level3: "Names a real example, correctly identifies a technique (bandwagon/emotion/evidence/etc.) AND judges whether real evidence was present.",
        level2: "Names a technique but the evidence judgment is missing or unclear.",
        level1: "Vague or doesn't identify a technique."
      },
      exemplar: "A sneaker ad said 'Be unstoppable' over a sprinting athlete — that's an emotional appeal. It gave no evidence the shoes actually help you run faster.",
      hintLadder: [
        "Recall an ad or slogan.",
        "Which technique: bandwagon, emotion, or evidence?",
        "Did it actually prove anything?"
      ]
    },
    {
      id: "g6.fall.world.w5.d4.q5",
      type: "short_answer",
      stem: "Why is it useful to NOTICE persuasion techniques even when you might agree with the message?",
      rubric: {
        level3: "Explains that noticing lets you judge the claim on its merits / not be manipulated, even for messages you like.",
        level2: "Gives a partial reason without the 'judge for yourself' idea.",
        level1: "Restates the question or unrelated."
      },
      exemplar: "Even if I agree, noticing the technique lets me check whether there's real evidence, so I'm choosing because of facts — not just because an ad made me feel something.",
      hintLadder: [
        "What's the risk of being persuaded without noticing?",
        "How does spotting the trick protect you?",
        "Connect it to deciding for yourself."
      ]
    }
  ],
  reflectionPrompt: "For your own persuasive letter this week, which technique will you use honestly — strong evidence, or a fair emotional appeal? Why?",
  misconceptionBank: [
    {
      id: "feelings-are-facts",
      label: "Treats an emotional appeal as proof",
      description: "Believes that because an ad made them feel good, the product must be better.",
      coachMove: "Separate the feeling from the facts: 'How did that make me feel?' vs. 'What did it actually prove?'"
    }
  ]
};
