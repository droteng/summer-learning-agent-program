// Grade 7 ELA/Writing — Summer History Missions, Week 7, Day 5.
// Topic: evidence-based historical argument — building a short essay with a
// clear claim, supporting evidence, and reasoning that connects them.

export const summerG7ElaW7D5 = {
  id: "g7.summer.ela.w7.d5",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 7,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Evidence-based historical argument: claim, evidence & reasoning",
  topicTag: "argument-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.1", "CCSS.ELA-LITERACY.W.7.1.B"],
  hook: "All week you've been a historian — checking sources, weighing causes, judging significance. Today you become a historian who WRITES. You'll turn your Mission Board findings into a short argument that doesn't just say what you think, but proves it with evidence and explains WHY the evidence matters.",
  miniLesson: [
    "A strong historical argument has three parts working together: a CLAIM (the position you're arguing), EVIDENCE (specific facts, quotes, or sources that support it), and REASONING (the sentences that explain HOW the evidence proves the claim). Miss any one and the argument wobbles.",
    "Evidence is not the same as reasoning. 'The printing press let books be made faster' is evidence; the reasoning is the next sentence — 'because faster books meant more people could read, which spread ideas widely.' The reasoning is the bridge from fact to claim.",
    "In history, the best evidence is specific and corroborated — a dated source or a fact you could back up, not a vague 'everyone knows.' A Grade 7 argument also acknowledges a COUNTERCLAIM and answers it, which makes the writer look fair and the argument stronger."
  ],
  workedExample: {
    prompt: "Turn a topic into a claim-evidence-reasoning paragraph: 'Was the printing press a turning point?'",
    steps: [
      "Claim: 'The printing press was a major historical turning point.'",
      "Evidence: 'Before it, books were copied by hand and were rare and expensive; after it, printers could produce hundreds of identical copies quickly.'",
      "Reasoning: 'This matters because cheaper, plentiful books let far more people learn to read and share ideas, which changed how knowledge spread across the world.'",
      "Counterclaim + answer: 'Some argue few could read at first — but literacy rose precisely because books finally became affordable, so the press drove the very change critics point to.'"
    ],
    answer: "Claim + specific evidence + reasoning that explains WHY the evidence proves the claim, then a counterclaim answered — that's a complete Grade 7 argument."
  },
  items: [
    {
      id: "g7.summer.ela.w7.d5.q1",
      type: "multiple_choice",
      stem: "In a claim-evidence-reasoning argument, what is the job of the REASONING?",
      choices: [
        "To explain HOW the evidence supports the claim",
        "To list a fact or quote from a source",
        "To state your position in one sentence",
        "To introduce the topic"
      ],
      answerIndex: 0,
      explanation: "Reasoning is the bridge that explains why the evidence proves the claim. The claim states the position and the evidence provides the facts; reasoning connects them.",
      hintLadder: [
        "Which part connects the fact to your position?",
        "It's not the position and not the fact itself.",
        "Reasoning explains WHY the evidence matters."
      ]
    },
    {
      id: "g7.summer.ela.w7.d5.q2",
      type: "multiple_choice",
      stem: "Which sentence is EVIDENCE (rather than a claim or reasoning)?",
      choices: [
        "The printing press was the most important invention in history.",
        "Records show a single press could print about 3,600 pages a day, far more than a hand-copyist.",
        "This matters because faster printing let ideas spread widely.",
        "In conclusion, the press changed the world."
      ],
      answerIndex: 1,
      explanation: "A specific, checkable fact from records is evidence. The first choice is a claim, the third is reasoning, and the fourth is a concluding statement.",
      hintLadder: [
        "Evidence is a specific, checkable fact or quote.",
        "Which sentence gives a number or source you could verify?",
        "The pages-per-day figure is the evidence."
      ],
      misconceptionsTargeted: ["evidence-is-reasoning"]
    },
    {
      id: "g7.summer.ela.w7.d5.q3",
      type: "multiple_choice",
      stem: "Why does a strong Grade 7 argument include a COUNTERCLAIM and then answer it?",
      choices: [
        "To confuse the reader",
        "Because arguments must be as long as possible",
        "To show the writer considered other views and to strengthen the argument by responding to them",
        "To hide the writer's real opinion"
      ],
      answerIndex: 2,
      explanation: "Acknowledging and answering a counterclaim shows fairness and makes the argument sturdier, because it addresses the strongest objection instead of ignoring it.",
      hintLadder: [
        "What impression does ignoring other views give?",
        "Does answering an objection make your case weaker or stronger?",
        "It shows fairness and strengthens the argument."
      ]
    },
    {
      id: "g7.summer.ela.w7.d5.q4",
      type: "short_answer",
      stem: "Write a short claim-evidence-reasoning chunk (3 sentences) arguing whether ONE event or invention from this week's history missions was significant. Label your claim, evidence, and reasoning.",
      rubric: {
        level3: "Includes a clear arguable claim, at least one specific piece of evidence, AND reasoning that explicitly explains how the evidence supports the claim — with the three parts identifiable.",
        level2: "Includes claim and evidence but the reasoning is missing or does not connect them, or one part is vague.",
        level1: "States only an opinion with no evidence, or the parts cannot be told apart."
      },
      exemplar: "Claim: The printing press was a turning point in history. Evidence: Before it, books were hand-copied and rare, but a single press could produce hundreds of copies quickly. Reasoning: This proves it was a turning point because cheaper, plentiful books let far more people read and share ideas, permanently changing how knowledge spread.",
      hintLadder: [
        "Sentence 1: state your arguable claim.",
        "Sentence 2: give one specific, checkable fact as evidence.",
        "Sentence 3: explain HOW that fact proves your claim."
      ]
    },
    {
      id: "g7.summer.ela.w7.d5.q5",
      type: "short_answer",
      stem: "Explain the difference between EVIDENCE and REASONING in an argument, and why an argument with evidence but no reasoning is weak. Use one example.",
      rubric: {
        level3: "Clearly distinguishes evidence (the specific fact/quote) from reasoning (the explanation of how it supports the claim), explains that facts alone don't prove a point without the connecting reasoning, AND gives a fitting example.",
        level2: "Distinguishes the two but the 'why it's weak' explanation or the example is thin.",
        level1: "Confuses evidence and reasoning or gives no working example."
      },
      exemplar: "Evidence is the fact itself, like 'a press could print hundreds of copies a day.' Reasoning is the sentence explaining why that fact matters, like 'so more people could read and spread ideas.' Evidence alone is weak because a reader can see the fact but not why it supports your claim — the reasoning is the bridge that makes the fact count.",
      hintLadder: [
        "Which one is the raw fact, and which one explains it?",
        "If you only drop a fact, does the reader know why it matters?",
        "Give an example fact and the reasoning sentence that connects it."
      ]
    }
  ],
  reflectionPrompt: "Look back at your History Mission Board. Which of your claims has the STRONGEST evidence behind it — and where do you still need a reasoning sentence to connect the fact to your point?",
  misconceptionBank: [
    {
      id: "evidence-is-reasoning",
      label: "Treats stating a fact as making an argument",
      description: "Believes that dropping a fact into an essay proves the point, without adding reasoning that connects the fact to the claim.",
      coachMove: "Ask 'So what?' after each fact: 'You gave the evidence — now write the sentence that says why it proves your claim.'"
    },
    {
      id: "claim-needs-no-evidence",
      label: "Thinks a strong opinion counts as an argument",
      description: "Assumes stating a position forcefully is enough, without backing it with specific, checkable evidence.",
      coachMove: "Separate believing from proving: 'That's your claim — now what specific, corroborated evidence would convince someone who disagrees?'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fact Alone or Fact + Reason?",
      prompt:
        "Two writers argue the same claim. Writer A says: 'The press printed hundreds of copies a day.' Writer B says the same, then adds: 'so far more people could read, which spread ideas.' Which writer actually convinced you — and what did the second one add that the first one left out?",
      answer:
        "Writer B convinces you: they added REASONING — the sentence explaining why the fact matters. Writer A gave only evidence and left the reader to guess the point. Evidence needs reasoning to become an argument.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Mission Board Argument Poster",
      challenge:
        "Turn your best finding from the History Mission Board into a one-poster argument. Build a full claim, evidence, and reasoning — then add a counterclaim you answer.",
      steps: [
        "Write your CLAIM as one bold, arguable sentence at the top.",
        "Add TWO pieces of specific evidence beneath it (facts, dates, or sources).",
        "Under each piece of evidence, write a reasoning sentence explaining how it supports the claim.",
        "Add a 'Some might say...' counterclaim box and a one-sentence answer to it."
      ],
      deliverable: "One argument poster with a claim, two evidence-plus-reasoning pairs, and a counterclaim that is answered.",
      choiceBoard: [
        "Design the poster with a headline claim and labeled evidence/reasoning sections.",
        "Write it as a 5-sentence 'mini-essay' with the parts underlined and labeled.",
        "Record a 60-second 'closing argument' speech delivering claim, evidence, reasoning, and rebuttal."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Argument Builder Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w7.d5.arena1",
          type: "multiple_choice",
          stem: "A paragraph reads: 'Vaccines are a major turning point. Records show they wiped out smallpox worldwide. This matters because a disease that once killed millions no longer exists, changing life for whole generations.' Which structure does this paragraph follow?",
          choices: [
            "Evidence, then claim, then counterclaim",
            "Claim, then counterclaim, then claim again",
            "Reasoning, then claim, then evidence",
            "Claim, then evidence, then reasoning"
          ],
          answerIndex: 3,
          explanation: "It opens with the claim (vaccines were a turning point), gives evidence (they wiped out smallpox), then reasoning (why that fact proves the claim). Claim → evidence → reasoning.",
          hintLadder: [
            "Which sentence states the position?",
            "Which sentence gives the checkable fact, and which explains why it matters?",
            "Match the order: position first, fact next, explanation last."
          ]
        },
        {
          id: "g7.summer.ela.w7.d5.arena2",
          type: "short_answer",
          stem: "Here is a claim and evidence with the reasoning MISSING: 'Claim: The printing press was a turning point. Evidence: A single press could print hundreds of copies a day.' Write the reasoning sentence that connects the evidence to the claim.",
          rubric: {
            level3: "Writes a clear reasoning sentence that explicitly explains HOW mass-producing books made the press a turning point (e.g., more people could read, ideas spread widely, knowledge changed permanently).",
            level2: "Writes a sentence that connects the ideas but only loosely, or restates the evidence without explaining its significance.",
            level1: "Repeats the claim or the evidence without adding connecting reasoning."
          },
          exemplar: "This matters because printing hundreds of copies quickly made books cheap and common, so far more people could read and share ideas — a permanent change in how knowledge spread, which is exactly what makes the press a turning point.",
          hintLadder: [
            "Ask 'So what?' about the fact.",
            "Explain what mass-producing books allowed people to do.",
            "Connect that effect back to why it counts as a turning point."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Build the Argument Stack",
      prompt:
        "Stack your argument with your body: squat low and 'lay the claim' as a foundation, rise halfway to 'stack the evidence,' then reach tall to 'top it with reasoning.' Do the full three-step build slowly four times, breathing out as you reach the top.",
      scienceTieIn: "Pairing each step of a structure with a distinct movement uses your motor memory, helping your brain lock in the claim-evidence-reasoning order more firmly than reading alone.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Write the single strongest claim you can make from your History Mission Board, then jot the one piece of evidence you'd lead with to prove it. Which reasoning sentence turns that fact into a real argument?",
      badge: { id: "g7-argument-builder", name: "Argument Builder", emoji: "🧱" },
      estimatedMinutes: 7
    }
  }
};
