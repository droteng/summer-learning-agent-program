// Grade 7 History/Civics — Fall Expedition, Week 7 (Cause & Effect in
// History), Day 2. Topic: turning points and historical significance —
// grade-7 depth (corroboration, weighing significance with evidence).

export const fallG7HistoryW7D2 = {
  id: "g7.fall.hist.w7.d2",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 2,
  subject: "History/Civics",
  topic: "Turning points and historical significance",
  topicTag: "turning-points",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["C3.D2.His.1.6-8", "C3.D2.His.14.6-8"],
  hook: "Calling something a 'turning point' is a CLAIM — and claims need evidence. Today you learn to judge historical significance and to corroborate it across more than one source before you decide.",
  miniLesson: [
    "Historical significance isn't just 'famous.' Weigh it by scope (how many affected), depth (how deeply life changed), and durability (how long the change lasted).",
    "Corroboration means checking whether more than one independent source supports a claim — a turning point backed by several sources is a stronger claim than one backed by a single account.",
    "To test a turning point, gather evidence of what was possible AFTER that wasn't before, then ask whether independent sources agree on that shift."
  ],
  workedExample: {
    prompt: "Argue whether the printing press was a turning point, and show how you'd corroborate it.",
    steps: [
      "State the claim: the press was a turning point in the spread of ideas.",
      "Weigh significance: scope (millions eventually read), depth (literacy and religion reshaped), durability (change never reversed).",
      "Corroborate: printed-book counts from records, letters describing new access to texts, and rulers' reactions to spreading ideas — independent lines of evidence agreeing.",
      "Conclude: multiple sources confirm a wide, deep, lasting before/after shift — a well-supported turning point."
    ],
    answer: "It qualifies: high scope, depth, and durability, and independent sources corroborate the shift from hand-copied to printed texts."
  },
  items: [
    {
      id: "g7.fall.hist.w7.d2.q1",
      type: "multiple_choice",
      stem: "In history, 'corroboration' means...",
      choices: [
        "trusting the most famous source",
        "picking the oldest document",
        "checking whether more than one independent source supports a claim",
        "counting how many pages a source has"
      ],
      answerIndex: 2,
      explanation: "Corroboration is confirming a claim across multiple independent sources so it doesn't rest on one account.",
      hintLadder: [
        "The root is 'co-' — together.",
        "It's about more than one source agreeing.",
        "Independent sources supporting the same claim."
      ]
    },
    {
      id: "g7.fall.hist.w7.d2.q2",
      type: "multiple_choice",
      stem: "Which set of factors BEST measures a historical event's significance?",
      choices: [
        "How famous, how old, how well-written",
        "Whether it appears in a textbook",
        "How many people can name it today",
        "Scope (how many affected), depth (how deeply life changed), durability (how long it lasted)"
      ],
      answerIndex: 3,
      explanation: "Significance is weighed by scope, depth, and durability — not by fame, age, or coverage.",
      hintLadder: [
        "Fame alone isn't significance.",
        "Think about breadth, depth, and how long the change lasted.",
        "Scope, depth, durability."
      ],
      misconceptionsTargeted: ["famous-equals-significant"]
    },
    {
      id: "g7.fall.hist.w7.d2.q3",
      type: "multiple_choice",
      stem: "A student claims an event was a turning point but cites only ONE source. What is the strongest reason a historian would want more?",
      choices: [
        "A single source might be biased or mistaken; corroboration tests whether the claim holds up",
        "One source is always fake",
        "Longer claims need more paper",
        "Historians dislike short essays"
      ],
      answerIndex: 0,
      explanation: "One source can be biased, incomplete, or wrong; independent corroboration makes the turning-point claim far more reliable.",
      hintLadder: [
        "What could be wrong with relying on just one account?",
        "Think about bias or error in a single source.",
        "Corroboration checks the claim against other evidence."
      ],
      misconceptionsTargeted: ["single-source-trust"]
    },
    {
      id: "g7.fall.hist.w7.d2.q4",
      type: "short_answer",
      stem: "Pick an event you think was a turning point. Rate its significance using scope, depth, AND durability, then name one type of source you would use to CORROBORATE your rating.",
      rubric: {
        level3: "Names a real event, evaluates all three criteria (scope, depth, durability) with reasons, AND identifies a specific corroborating source type.",
        level2: "Covers the criteria but one is thin, or the corroborating source is vague.",
        level1: "Names an event without evaluating the criteria or without a corroborating source."
      },
      exemplar: "The polio vaccine was a turning point. Scope: it protected children worldwide. Depth: it ended a disease that paralyzed thousands yearly. Durability: those diseases stayed rare for generations. To corroborate, I'd compare public health case-count records from different countries to confirm the drop was real and widespread, not just claimed in one press release.",
      hintLadder: [
        "Choose an event that changed a lot.",
        "Score it on scope, depth, and durability separately.",
        "Name a source you'd check to confirm the change really happened."
      ]
    },
    {
      id: "g7.fall.hist.w7.d2.q5",
      type: "short_answer",
      stem: "Two sources disagree about whether an event was a turning point. Explain how a historian should handle the disagreement instead of just picking the source they like.",
      rubric: {
        level3: "Explains checking each source's reliability/bias AND seeking additional independent evidence to break the tie, rather than choosing by preference.",
        level2: "Suggests comparing sources but the method (bias check + more evidence) is thin.",
        level1: "Says to pick one source with no reasoning about reliability or corroboration."
      },
      exemplar: "The historian shouldn't just trust the more appealing source. They should examine who wrote each, when, and why — checking for bias — and then look for a third, independent source. If two independent sources line up against the outlier, that corroboration should guide the judgment, not personal preference.",
      hintLadder: [
        "Don't decide by which source you like more.",
        "What can you check about each source's reliability?",
        "Find more independent evidence to break the tie."
      ]
    }
  ],
  reflectionPrompt: "Think of a claim you heard recently (in the news or from a friend). How could you corroborate it before believing it was a big deal?",
  misconceptionBank: [
    {
      id: "famous-equals-significant",
      label: "Equates fame with significance",
      description: "Assumes the best-known events are automatically the most historically significant.",
      coachMove: "Redirect to scope, depth, and durability — some famous moments changed little, and some quiet ones changed everything."
    },
    {
      id: "single-source-trust",
      label: "Trusts a single source as proof",
      description: "Treats one account as enough to settle a claim without corroboration.",
      coachMove: "Ask 'who else confirms this, independently?' before accepting a turning-point claim."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "curiosity",
      title: "One Source or Two?",
      prompt:
        "Imagine only ONE diary claims a harvest festival 'changed the village forever.' Then you find a tax record and a neighbor's letter that both describe the change too. Why does the claim feel stronger now — and what is that process called?",
      answer:
        "It feels stronger because independent sources agree — that's corroboration. One diary could exaggerate or misremember; when a tax record and a letter confirm the same shift, the turning-point claim holds up much better.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Corroborated Turning-Point Case File",
      challenge:
        "Choose a real turning point and build a 'case file' that rates its significance AND lists two independent sources that corroborate it.",
      steps: [
        "Name the turning point and write a one-line claim about it.",
        "Score it on scope, depth, and durability with a sentence each.",
        "List TWO independent sources (or source types) that would confirm the change.",
        "Write a verdict sentence: is the turning-point claim well-supported or not?"
      ],
      deliverable: "A case file with a significance rating (scope/depth/durability) and two corroborating sources plus a verdict.",
      choiceBoard: [
        "Design it as a detective's evidence board with the two sources pinned.",
        "Make it digitally as a table: criterion, rating, corroborating source.",
        "Record a 45-second 'case briefing' presenting the evidence and verdict."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Significance Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.hist.w7.d2.arena1",
          type: "multiple_choice",
          stem: "Two events both got lots of attention in their year. Event A changed daily life for millions for a century; Event B was a celebrity scandal forgotten within a year. Judged by significance, which is the stronger turning point and WHY?",
          choices: [
            "Event B, because more people talked about it that year",
            "Event A, because it scores higher on scope, depth, and durability",
            "They're equal, because both were popular",
            "Event B, because scandals are memorable"
          ],
          answerIndex: 1,
          explanation: "Significance depends on scope, depth, and durability. Event A changed many lives deeply and durably; Event B's fame faded fast, so A is the real turning point.",
          hintLadder: [
            "Popularity in one year isn't significance.",
            "Apply scope, depth, and durability to each.",
            "Event A changed many lives, deeply, for a long time."
          ]
        },
        {
          id: "g7.fall.hist.w7.d2.arena2",
          type: "short_answer",
          stem: "A social-media post calls a new app a 'turning point in history.' Argue whether that claim is justified, using significance criteria AND explaining what corroboration you'd need before accepting it.",
          rubric: {
            level3: "Applies scope/depth/durability to the app AND specifies independent corroborating evidence needed, reaching a defended verdict.",
            level2: "Applies the criteria OR discusses corroboration, but not both fully.",
            level1: "States an opinion with no criteria and no corroboration plan."
          },
          exemplar: "One post isn't proof. I'd weigh the app on scope (how many truly use it), depth (does it change how people live, not just pass time), and durability (will it last past the hype). To corroborate, I'd look for independent data — usage statistics from outside the company and reporting from unrelated sources. Until several independent sources confirm a wide, lasting change, calling it a turning point is premature.",
          hintLadder: [
            "Don't accept the claim from one post.",
            "Score the app on scope, depth, and durability.",
            "Name independent evidence you'd need to confirm it."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "mindfulness",
      title: "Move & Reset: The Two-Source Breath",
      prompt:
        "Breathe in as you slowly raise both hands to eye level (two 'sources' rising). Pause and imagine them agreeing. Breathe out as you lower them together. Repeat 4 times, letting your focus settle on the agreement.",
      scienceTieIn: "Slow paired breathing activates the parasympathetic nervous system, lowering heart rate and clearing working memory so you can weigh evidence calmly instead of reacting fast.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a turning point in your own life. If someone doubted it mattered, what independent evidence could you point to that corroborates how much it changed you?",
      badge: { id: "g7-fall-corroboration-detective", name: "Corroboration Detective", emoji: "🔎" },
      estimatedMinutes: 7
    }
  }
};
