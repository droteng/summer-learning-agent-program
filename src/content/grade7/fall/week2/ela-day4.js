// Grade 7 ELA/Writing — Fall Expedition, Week 2 (Ecosystems & Food Webs),
// Day 4. Topic: informational/explanatory writing — pitched up to multi-
// paragraph structure, precise domain vocabulary, and synthesizing sources.

export const fallG7ElaW2D4 = {
  id: "g7.fall.ela.w2.d4",
  season: "fall",
  gradeLevel: 7,
  weekNumber: 2,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Explain it clearly — informational writing",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.7.2", "CCSS.ELA-LITERACY.W.7.2.B"],
  hook: "At Grade 7, explaining a food web isn't just being clear — it's organizing several paragraphs around a thesis, using precise scientific terms correctly, and pulling evidence from more than one source. Today you build an explanation that a careful reader will trust.",
  miniLesson: [
    "A multi-paragraph explanation opens with a THESIS (a controlling idea), then devotes each body paragraph to one supporting subtopic, and closes by tying back to the thesis. Structure, not just clarity, guides the reader.",
    "Grade-7 explanatory writing uses PRECISE domain vocabulary (producer, trophic level, decomposer) — but defines each term the first time and develops it with a concrete, relevant example, so precision never costs clarity.",
    "When you draw on more than one source, SYNTHESIZE: combine the evidence, note where sources agree or differ, and use transitions (however, in contrast, similarly, according to) to show the relationship rather than just listing facts."
  ],
  workedExample: {
    prompt: "Write a thesis sentence for a 3-paragraph explanation of how energy moves through a forest food web.",
    steps: [
      "Name the subject: a forest food web.",
      "State the controlling idea the whole piece will develop: energy flows one way and shrinks at each level.",
      "Preview the subtopics the body paragraphs will cover: producers capturing energy, consumers passing it on, and energy loss at each transfer.",
      "Result: a thesis that both states a claim and maps the paragraphs to follow."
    ],
    answer: "In a forest food web, energy flows one way — captured by producers, passed to consumers, and steadily lost at each level — so the amount available shrinks the higher up the web you go."
  },
  items: [
    {
      id: "g7.fall.ela.w2.d4.q1",
      type: "multiple_choice",
      stem: "Which sentence works BEST as a THESIS for a multi-paragraph explanation of decomposers' role in an ecosystem?",
      choices: [
        "Decomposers keep ecosystems running by breaking down dead matter, recycling nutrients into the soil, and enabling producers to grow again.",
        "This essay is about decomposers.",
        "Decomposers are really important and cool.",
        "There are many organisms in nature, including some decomposers."
      ],
      answerIndex: 0,
      explanation: "It states a controlling claim AND previews the subtopics (breaking down matter, recycling nutrients, enabling producers) that the body paragraphs can each develop.",
      hintLadder: [
        "A thesis makes a claim AND hints at the paragraphs to come.",
        "Which option names several specific subtopics?",
        "Look for the one that maps out the whole explanation."
      ]
    },
    {
      id: "g7.fall.ela.w2.d4.q2",
      type: "multiple_choice",
      stem: "You have two sources: one says otters mainly control urchins; another emphasizes that otters also shelter fish in kelp. To SYNTHESIZE them in one sentence, you should...",
      choices: [
        "Quote only the first source and ignore the second.",
        "Pick whichever source is shorter.",
        "List each source's fact in a separate paragraph with no connection.",
        "Combine both points and show their relationship: otters both control urchins AND, in addition, shelter fish, so their loss harms the kelp system in more than one way."
      ],
      answerIndex: 3,
      explanation: "Synthesis combines evidence from multiple sources and uses a transition ('in addition') to show how the points relate, rather than listing them separately.",
      hintLadder: [
        "Synthesizing means combining and relating, not choosing one.",
        "Which option links BOTH sources with a transition?",
        "Look for the one that shows how the two facts connect."
      ],
      misconceptionsTargeted: ["listing-is-synthesis"]
    },
    {
      id: "g7.fall.ela.w2.d4.q3",
      type: "multiple_choice",
      stem: "Which transition best signals that you are CONTRASTING two sources' claims?",
      choices: ["for example", "in contrast", "as a result", "in conclusion"],
      answerIndex: 1,
      explanation: "'In contrast' signals that the next idea differs from the one before — exactly what you need to show two sources disagreeing.",
      hintLadder: [
        "You want a word that highlights a difference.",
        "Which phrase means 'unlike that'?",
        "'In contrast' marks a contrast between claims."
      ]
    },
    {
      id: "g7.fall.ela.w2.d4.q4",
      type: "short_answer",
      stem: "Write a body paragraph (3–4 sentences) explaining how energy is lost as it moves up a food web. Include a precise term (define it) and one transition that shows cause and effect.",
      rubric: {
        level3: "Focused paragraph with a clear topic sentence, correct use of a defined domain term (e.g. trophic level), accurate explanation of energy loss (~10%/heat), and a cause-effect transition.",
        level2: "Mostly accurate but missing a defined term, the transition, OR slightly muddled on the energy-loss mechanism.",
        level1: "Inaccurate, off-topic, or just lists words without explanation."
      },
      exemplar: "Energy shrinks as it climbs the food web because organisms use most of it just to live. Each step up is a new trophic level — a feeding position in the web — and only about 10% of the energy passes to the next one. As a result, the rest is lost as heat, which is why top predators have so little energy to draw on.",
      hintLadder: [
        "Open with a topic sentence about energy loss.",
        "Define a term like 'trophic level' as you use it.",
        "Add a cause-effect transition such as 'as a result.'"
      ]
    },
    {
      id: "g7.fall.ela.w2.d4.q5",
      type: "short_answer",
      stem: "Revise this sentence so it is precise AND accessible for a general reader, keeping the meaning: 'Anthropogenic perturbations attenuate trophic energy transfer efficiency across successive strata.'",
      rubric: {
        level3: "Accurately restates the idea (human-caused disturbances reduce how efficiently energy passes between each level of a food web) in clear, precise language without losing meaning.",
        level2: "Simpler but loses precision or muddles part of the meaning.",
        level1: "Still confusing, or changes/omits the meaning."
      },
      exemplar: "When humans disturb an ecosystem, less of the energy successfully passes from one level of the food web to the next.",
      hintLadder: [
        "'Anthropogenic perturbations' means human-caused disturbances.",
        "'Trophic energy transfer efficiency across strata' means how well energy moves between food-web levels.",
        "Rebuild the sentence in plain but precise words."
      ]
    }
  ],
  reflectionPrompt: "Reread your explanation. Does each body paragraph support your thesis, and does every technical term get defined? Name one paragraph you'd reorganize and why.",
  misconceptionBank: [
    {
      id: "listing-is-synthesis",
      label: "Thinks listing sources equals synthesizing them",
      description: "Places each source's facts side by side without combining them or showing how they relate.",
      coachMove: "Ask: 'How do these two sources connect — do they agree, add on, or disagree?' Then have the student write one sentence that links them with a transition."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "One Source or Two?",
      prompt:
        "You're explaining why kelp forests collapse when otters vanish. Would you rather rely on ONE source that only mentions urchins, or SYNTHESIZE two sources — one on urchins and one on the fish that shelter in kelp? Which makes your explanation stronger, and why?",
      answer:
        "Two, synthesized. One source gives a single cause; combining sources shows multiple, connected effects (urchins explode AND fish lose shelter), which makes the explanation more complete and more convincing — as long as you link them with a transition instead of just listing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Multi-Paragraph Food-Web Explainer",
      challenge:
        "Write a 3-paragraph explanatory piece on how energy and matter move through a fall food web. Open with a thesis, give each body paragraph its own subtopic, define every domain term you use, and synthesize at least two 'sources' (real ones or the week's science lessons) with transitions.",
      materials: ["Paper & markers, OR a writing app"],
      steps: [
        "Draft a thesis that states your claim and previews the subtopics.",
        "Write one body paragraph per subtopic (e.g. producers, energy loss, decomposers), defining each term as it appears.",
        "Pull in a second source and use a transition (however, in addition, according to) to relate the two.",
        "Close by tying the paragraphs back to the thesis."
      ],
      deliverable: "A 3-paragraph explanation with a thesis, defined terms, synthesized sources, and a concluding tie-back.",
      choiceBoard: [
        "Write the 3-paragraph explainer.",
        "Make an illustrated one-pager where each labeled section is a body paragraph.",
        "Script a 90-second explainer video that follows thesis → subtopics → conclusion."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Clear Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.fall.ela.w2.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence best SYNTHESIZES these two facts: (1) wolves reduce deer numbers; (2) fewer deer means more young trees survive?",
          choices: [
            "Wolves reduce deer numbers. Young trees survive.",
            "Wolves are apex predators found in many ecosystems.",
            "Because wolves reduce deer numbers, fewer deer graze on saplings, so more young trees survive — a cascade from predator to plant.",
            "Deer eat trees, and that is a fact about deer."
          ],
          answerIndex: 2,
          explanation: "It combines both facts into one connected cause-and-effect statement with transitions ('because', 'so'), showing the relationship rather than listing them separately.",
          hintLadder: [
            "Synthesis links facts with cause-effect language.",
            "Which option connects the wolves, the deer, AND the trees in one chain?",
            "Look for 'because … so …' tying the two facts together."
          ]
        },
        {
          id: "g7.fall.ela.w2.d4.arena2",
          type: "short_answer",
          stem: "Revise this sentence to be precise AND accessible, keeping the meaning: 'Apex predators exert top-down regulatory pressure that sustains biotic equilibrium across the trophic hierarchy.'",
          rubric: {
            level3: "Plain, accurate rewrite that keeps the meaning (top predators keep the animals below them in check, which keeps the whole food web balanced) using clear, precise language.",
            level2: "Simpler but loses precision or muddles part of the meaning.",
            level1: "Still confusing or changes the meaning."
          },
          exemplar: "Top predators keep the numbers of the animals below them in check, and that control helps every level of the food web stay in balance.",
          hintLadder: [
            "'Apex predators' are the top hunters.",
            "'Top-down regulatory pressure' means they control the levels below.",
            "State the whole idea in clear, precise everyday words."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Read the Thesis Aloud",
      prompt:
        "Stand, shake out your shoulders, and read your thesis and one body-paragraph topic sentence OUT LOUD. Ask yourself: does the paragraph actually deliver what the thesis promised? Mark any spot that drifts off-topic.",
      scienceTieIn: "Reading aloud engages hearing and speech together, helping your brain catch organization problems your eyes skim past.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of an explanation you found convincing recently. Did it use one source or several, and did it define its terms? How could you borrow that approach in your own writing?",
      badge: { id: "g7-fall-source-synthesizer", name: "Source Synthesizer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
