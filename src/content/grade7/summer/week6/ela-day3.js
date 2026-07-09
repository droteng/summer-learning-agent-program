// Grade 7 ELA/Writing — Summer Program, Week 6 (World Affairs for Kids), Day 3.
// Topic: explanatory/informational writing — explain a world issue clearly and
// fairly for a younger reader. Project: a kid-friendly explainer about a world issue.

export const summerG7ElaW6D3 = {
  id: "g7.summer.ela.w6.d3",
  season: "summer",
  gradeLevel: 7,
  weekNumber: 6,
  dayNumber: 3,
  subject: "ELA/Writing",
  topic: "Explanatory writing — explain a world issue fairly",
  topicTag: "explanatory-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.2", "CCSS.ELA-LITERACY.W.7.2.C"],
  hook: "Now you turn your research into a real explainer. Explanatory writing isn't about winning an argument — it's about making a complicated world issue clear and fair for a younger reader who's never heard of it. Today you learn how to structure it and stitch it together with transitions.",
  miniLesson: [
    "Explanatory (informational) writing informs rather than persuades. Its job is to help a reader UNDERSTAND an issue — including why people disagree — not to push them onto one side.",
    "A clear multi-paragraph structure carries the reader: an introduction that names the issue and why it matters, body paragraphs that each explain one idea or perspective with evidence, and a conclusion that sums up without picking a winner.",
    "Transitions are the glue between ideas. Words and phrases like 'for example', 'as a result', 'on the other hand', 'however', and 'in addition' show the reader how one point connects to the next, so the explanation flows instead of jumping."
  ],
  workedExample: {
    prompt: "You're writing an explainer about a plastic-bag ban for a 3rd grader. Draft an introduction and show how a transition links two body ideas.",
    steps: [
      "Introduction: name the issue and why it matters simply — 'Some cities have banned plastic shopping bags. People argue about whether this is a good idea.'",
      "Body idea 1: 'One reason cities ban bags is to protect animals, because plastic can end up in rivers and oceans.'",
      "Add a transition to the other side: 'On the other hand, some shop owners worry the change costs them money.'",
      "Notice 'on the other hand' signals a shift to a different perspective — that transition keeps the explanation fair and easy to follow."
    ],
    answer: "The intro names the issue plainly for a young reader, and the transition 'on the other hand' links the two perspectives smoothly while keeping the writing balanced."
  },
  items: [
    {
      id: "g7.summer.ela.w6.d3.q1",
      type: "multiple_choice",
      stem: "What is the main GOAL of explanatory (informational) writing?",
      choices: [
        "To convince the reader to agree with the writer's opinion",
        "To help the reader understand a topic clearly and fairly",
        "To entertain the reader with a made-up story",
        "To sell the reader a product"
      ],
      answerIndex: 1,
      explanation: "Explanatory writing informs and clarifies; it is not there to persuade, entertain with fiction, or sell.",
      hintLadder: [
        "Is it trying to WIN an argument or make something CLEAR?",
        "Think 'inform,' not 'persuade.'",
        "Its goal is to help the reader understand."
      ]
    },
    {
      id: "g7.summer.ela.w6.d3.q2",
      type: "multiple_choice",
      stem: "Which sentence uses a transition that signals a CONTRASTING perspective?",
      choices: [
        "In addition, the city planted more trees.",
        "For example, one park added a garden.",
        "First, the council held a meeting.",
        "However, some families worried about the cost."
      ],
      answerIndex: 3,
      explanation: "'However' signals a contrast — a shift to a different or opposing point. The others add, illustrate, or sequence.",
      hintLadder: [
        "Which word warns the reader a DIFFERENT view is coming?",
        "'In addition' and 'for example' don't signal contrast.",
        "'However' introduces the opposite side."
      ]
    },
    {
      id: "g7.summer.ela.w6.d3.q3",
      type: "multiple_choice",
      stem: "You're explaining a world issue to a younger reader. Which introduction is BEST?",
      choices: [
        "A clear sentence naming the issue and why it matters, in simple words",
        "A sentence full of technical jargon with no explanation",
        "Your personal opinion stated as the only truth",
        "A dramatic headline in all capital letters with no details"
      ],
      answerIndex: 0,
      explanation: "A strong explanatory introduction names the issue and why it matters in language a younger reader can follow — without jargon, bias, or hype.",
      hintLadder: [
        "Remember the reader is younger and new to the topic.",
        "Avoid jargon, hype, and pushing your opinion.",
        "Name the issue clearly and say why it matters."
      ],
      misconceptionsTargeted: ["explain-equals-persuade"]
    },
    {
      id: "g7.summer.ela.w6.d3.q4",
      type: "short_answer",
      stem: "Write the FIRST two sentences of an explainer introducing a world issue of your choice to a younger reader. Name the issue and say why it matters, in simple, fair language.",
      rubric: {
        level3: "Two clear sentences that name a real world issue AND explain why it matters, using simple, neutral language a younger reader could follow (no jargon, no one-sided persuasion).",
        level2: "Names the issue but is vague on why it matters, or the language is too advanced or slightly one-sided.",
        level1: "Unclear, off-topic, or purely persuasive/opinion."
      },
      exemplar: "All over the world, people are running low on clean drinking water. This matters because everyone needs water to live, and communities are trying to figure out how to share it fairly.",
      hintLadder: [
        "Pick your world issue and imagine a younger reader who's never heard of it.",
        "Sentence 1: name the issue simply.",
        "Sentence 2: say why it matters — keep it fair, not one-sided."
      ]
    },
    {
      id: "g7.summer.ela.w6.d3.q5",
      type: "short_answer",
      stem: "Write a short paragraph (3–4 sentences) explaining TWO perspectives on a world issue. Use at least ONE transition word to link the perspectives, and underline or name the transition you used.",
      rubric: {
        level3: "Presents two distinct perspectives fairly in 3–4 sentences AND uses an appropriate linking transition (e.g., 'on the other hand', 'however', 'in contrast') that is identified.",
        level2: "Presents two perspectives but the transition is missing, misused, or not identified.",
        level1: "Only one perspective, or no clear structure/transition."
      },
      exemplar: "Some people support building a new factory because it would bring jobs to the town. For example, families that need work could earn steady paychecks. On the other hand, neighbors worry the factory could pollute the nearby river. (Transition used: 'On the other hand.')",
      hintLadder: [
        "State perspective one, then perspective two.",
        "Choose a transition that fits — contrast, addition, or example.",
        "Name the transition you used."
      ]
    }
  ],
  reflectionPrompt: "Reread your explainer draft. Where does it flow smoothly, and where could a transition word help a younger reader follow your thinking?",
  misconceptionBank: [
    {
      id: "explain-equals-persuade",
      label: "Confuses explaining with persuading",
      description: "Turns an explainer into an argument for one side instead of fairly informing the reader about the whole issue.",
      coachMove: "Ask: 'Am I helping the reader UNDERSTAND, or trying to make them AGREE?' A fair explainer presents all sides and lets the reader decide."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Inform or Persuade?",
      prompt:
        "Two openings for the same piece: (A) 'Everyone knows plastic bags are terrible and should be banned right now!' (B) 'Some cities have banned plastic bags, and people disagree about whether it's the right choice.' Which one belongs in an EXPLAINER, and why?",
      answer: "(B) belongs in an explainer — it names the issue fairly and signals that people disagree, informing the reader. (A) is persuasion: it pushes one opinion as the only truth.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Explainer Outline & Transition Bank",
      challenge:
        "Build the skeleton of your world-issue explainer for a younger reader: an outline with an intro, at least two body paragraphs (one per perspective), and a conclusion — plus a 'transition bank' of linking words you'll use to connect them.",
      steps: [
        "Write a one-sentence intro naming your issue and why it matters, simply.",
        "Outline at least two body paragraphs, each explaining one perspective with a piece of evidence.",
        "Draft a conclusion that sums up without picking a winner.",
        "Make a 'transition bank': list 4+ transitions (for example, however, in addition, as a result) and mark where each will go."
      ],
      deliverable: "An explainer outline (intro, 2+ body paragraphs, conclusion) with a transition bank of 4+ linking words placed in the outline.",
      choiceBoard: [
        "Write the outline as a labeled diagram or flowchart.",
        "Make an illustrated 'transition word' poster for younger readers.",
        "Record a 45-second read-aloud of your intro and one body paragraph using your transitions."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.summer.ela.w6.d3.arena1",
          type: "multiple_choice",
          stem: "Which transition would BEST connect these two sentences? 'The new law protects wildlife. ___ it also makes some jobs harder to keep.'",
          choices: [
            "For example,",
            "In the same way,",
            "However,",
            "Finally,"
          ],
          answerIndex: 2,
          explanation: "The second sentence introduces an opposing effect, so a contrast transition — 'However,' — fits best.",
          hintLadder: [
            "The second sentence shows a DOWNSIDE, opposite to the first.",
            "Which choice signals contrast?",
            "'However,' introduces the opposing point."
          ]
        },
        {
          id: "g7.summer.ela.w6.d3.arena2",
          type: "short_answer",
          stem: "Rewrite this one-sided sentence so it EXPLAINS fairly instead of persuades: 'The stupid new curfew ruins everything and should be canceled immediately.'",
          rubric: {
            level3: "Rewrites into neutral, informative language that names the curfew and signals that people hold different views (e.g., some support, some oppose), removing insults and one-sided demands.",
            level2: "Removes some bias but still leans one way or stays partly opinionated.",
            level1: "Still persuasive/insulting or changes the meaning entirely."
          },
          exemplar: "A new curfew has been introduced, and people disagree about it — some think it keeps kids safe, while others feel it limits their freedom.",
          hintLadder: [
            "Cut the insult ('stupid') and the demand ('should be canceled').",
            "Name the curfew and that people DISAGREE.",
            "Present both views instead of one."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Link It Together",
      prompt:
        "Stand and act out transitions with your arms: 'in addition' (add a block on top), 'however' (swing arms to the opposite side), 'as a result' (push forward). Do each move twice, then shake out and breathe.",
      scienceTieIn: "Pairing words with big movements helps your brain encode them more strongly, so those transition words are easier to recall when you write.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Reread your explainer draft as if you were the younger reader. Where does it flow, and where would one transition word make your thinking easier to follow? Write down the spot and the word you'd add.",
      badge: { id: "g7-fair-explainer", name: "Fair Explainer", emoji: "📰" },
      estimatedMinutes: 7
    }
  }
};
