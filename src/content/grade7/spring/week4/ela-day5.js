// Grade 7 ELA/Writing — Spring Expedition, Week 4 (Genetics for Kids), Day 5.
// Topic: informational writing — explain how a trait is inherited. Grade-7
// depth: developing an idea with evidence, using transitions to link cause
// and effect across sentences, and integrating precise domain vocabulary.

export const springG7ElaW4D5 = {
  id: "g7.spring.ela.w4.d5",
  season: "spring",
  gradeLevel: 7,
  weekNumber: 4,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing — explain how a trait is inherited",
  topicTag: "informational-cause-effect",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.7.2.B", "CCSS.W.7.2.C"],
  hook: "This week you learned how traits pass from parents to offspring. Now you become the explainer — but at a Grade 7 level: you'll DEVELOP your explanation with evidence and examples, and use transitions to chain cause and effect across a whole paragraph, not just one sentence.",
  miniLesson: [
    "Strong informational writing DEVELOPS an idea. It doesn't just state a fact — it supports the fact with concrete evidence or an example (like a specific Bb × Bb cross) so the reader understands and believes it.",
    "Transitions carry cause and effect across sentences: 'because,' 'as a result,' 'therefore,' 'consequently,' 'this means that.' Using them to LINK sentences builds a chain of reasoning, not just a list of facts.",
    "Precise domain vocabulary — gene, allele, dominant, recessive, genotype, phenotype, heterozygous, offspring — makes the explanation exact. A Grade 7 explanation weaves these terms in naturally while still staying clear."
  ],
  workedExample: {
    prompt: "Develop this bare fact into a supported cause/effect explanation: 'Two brown-eyed parents can have a blue-eyed child.'",
    steps: [
      "State the claim clearly using precise terms: both parents are heterozygous (Bb).",
      "Add EVIDENCE/example: each Bb parent carries a hidden recessive b allele.",
      "Link cause to effect with a transition: 'As a result,' the child can inherit b from both parents.",
      "Complete the chain: 'therefore' the child's genotype is bb, producing the recessive blue phenotype."
    ],
    answer: "Two brown-eyed parents can both be heterozygous (Bb), each carrying a hidden recessive b allele. As a result, a child may inherit b from both parents; therefore the child's genotype is bb, which produces blue eyes."
  },
  items: [
    {
      id: "g7.spring.ela.w4.d5.q1",
      type: "multiple_choice",
      stem: "What best DEVELOPS an idea in informational writing?",
      choices: [
        "Supporting a fact with concrete evidence or a specific example",
        "Repeating the same sentence in different words",
        "Adding your personal opinion about the topic",
        "Making the sentence as long as possible"
      ],
      answerIndex: 0,
      explanation: "Developing an idea means supporting it with evidence or an example, so the reader understands and trusts the explanation — not restating it or adding opinion.",
      hintLadder: [
        "Developing is more than restating a fact.",
        "What makes a reader believe and understand a fact?",
        "Support it with evidence or a specific example."
      ]
    },
    {
      id: "g7.spring.ela.w4.d5.q2",
      type: "multiple_choice",
      stem: "Which transition best links a CAUSE to its EFFECT across two sentences?",
      choices: [
        "For example",
        "On the other hand",
        "As a result",
        "In the meantime"
      ],
      answerIndex: 2,
      explanation: "'As a result' signals that what follows is the effect of the previous cause. The others signal examples, contrast, or time.",
      hintLadder: [
        "You want a transition that means 'this leads to that.'",
        "Which phrase introduces a consequence?",
        "'As a result' links cause to effect."
      ]
    },
    {
      id: "g7.spring.ela.w4.d5.q3",
      type: "multiple_choice",
      stem: "Which passage is the STRONGEST Grade 7 informational explanation of inheritance?",
      choices: [
        "The baby got its eye color from some stuff inside it, and that's just how it works.",
        "Eye color is passed through genes. Each parent contributes one allele; because the brown allele is dominant, a child with even one brown allele has brown eyes. Only a child who inherits two recessive alleles has blue eyes.",
        "Blue eyes are prettier than brown eyes, so the baby was lucky.",
        "Nobody really knows why kids look like their parents."
      ],
      answerIndex: 1,
      explanation: "The second passage develops the idea with a specific mechanism, uses a cause/effect transition ('because'), and integrates precise terms (genes, allele, dominant, recessive) — the marks of strong Grade 7 informational writing.",
      hintLadder: [
        "Which passage actually explains the mechanism?",
        "Look for cause/effect links plus precise terms like allele and dominant.",
        "The one explaining alleles and dominance is strongest."
      ],
      misconceptionsTargeted: ["vague-equals-informational"]
    },
    {
      id: "g7.spring.ela.w4.d5.q4",
      type: "short_answer",
      stem: "Write TWO linked sentences that explain how an offspring inherits a recessive trait. The first must state a cause with a precise term; the second must use a cause/effect transition (as a result / therefore / consequently) to state the effect.",
      rubric: {
        level3: "Two connected sentences: the first states a cause using a precise term (e.g., inherits recessive alleles), the second uses a cause/effect transition to state the resulting phenotype, and the science is accurate.",
        level2: "Has the cause and effect but is missing a clear transition, or uses only one precise term weakly, or has a minor science slip.",
        level1: "No clear cause/effect chain and no precise vocabulary."
      },
      exemplar: "An offspring inherits one recessive allele from each parent, giving it a homozygous recessive genotype. As a result, no dominant allele is present to mask the trait; therefore the offspring shows the recessive phenotype.",
      hintLadder: [
        "Sentence 1: name the cause with a precise term (recessive alleles).",
        "Sentence 2: open with 'As a result' or 'Therefore.'",
        "State the effect: the recessive trait shows because no dominant allele masks it."
      ]
    },
    {
      id: "g7.spring.ela.w4.d5.q5",
      type: "short_answer",
      stem: "Write a developed informational paragraph (4-5 sentences) explaining how a chosen trait (like eye color or flower color) is inherited. Include a clear topic sentence, at least one specific example or piece of evidence, two cause/effect transitions, and at least three precise science terms.",
      rubric: {
        level3: "A well-organized paragraph with a topic sentence, a specific example/evidence (e.g., a Bb × Bb cross), TWO cause/effect transitions, and at least THREE precise terms (gene, allele, dominant, recessive, genotype, phenotype, offspring), all scientifically accurate.",
        level2: "Explains inheritance but is missing one required element (a transition, the example, or the third term) or has a minor science error.",
        level1: "Vague, opinion-based, disorganized, or scientifically incorrect."
      },
      exemplar: "Eye color is an inherited trait passed from parents to offspring through genes. Each parent contributes one allele, so a child receives a pair of alleles that make up its genotype. For example, if two heterozygous (Bb) parents have a child, that child could inherit a recessive b allele from each parent. As a result, the child's genotype would be bb, and because no dominant allele is present, the child's phenotype is blue eyes. Therefore, even two brown-eyed parents can produce a blue-eyed child.",
      hintLadder: [
        "Start with a topic sentence naming the trait and that it's inherited.",
        "Add a specific example (like a Bb × Bb cross) as evidence.",
        "Use two cause/effect transitions and at least three precise terms."
      ]
    }
  ],
  reflectionPrompt: "Which was harder in your paragraph — developing the idea with real evidence, or chaining cause and effect with transitions? What would you improve next time?",
  misconceptionBank: [
    {
      id: "vague-equals-informational",
      label: "Thinks vague writing counts as informational",
      description: "Believes that naming a topic ('the baby looks like its parents') explains it, without developed evidence, cause/effect chains, or precise vocabulary.",
      coachMove: "Ask: 'Does this teach HOW or WHY, and where is the evidence?' Push for a specific example and precise terms that build a chain of reasoning."
    },
    {
      id: "listing-not-linking",
      label: "Lists facts instead of linking them",
      description: "Writes true statements side by side without transitions, so the reader sees facts but not the cause-and-effect reasoning connecting them.",
      coachMove: "Have them insert 'because,' 'as a result,' or 'therefore' between sentences so each fact leads logically to the next."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Listed or Linked?",
      prompt:
        "Two explanations use the same facts. (A) 'Each parent gives one allele. The brown allele is dominant. The child has brown eyes.' (B) 'Each parent gives one allele, and because the brown allele is dominant, the child has brown eyes even with just one copy.' Which teaches better — and what does version B do that A doesn't?",
      answer:
        "(B) teaches better. It LINKS the facts with a cause/effect transition ('because') so the reader sees WHY one copy of the dominant allele is enough. Version A just lists the facts side by side; B builds a chain of reasoning that connects the cause to the effect.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Developed Trait Explainer",
      challenge:
        "Create an 'explainer' — a card, poster, article, or infographic — that teaches how ONE trait is inherited. It must DEVELOP the idea with a specific example (like a labeled Punnett cross), chain cause and effect with at least two transitions, and use 3+ precise terms so a younger student could follow it.",
      materials: ["Paper & markers, OR a slide/drawing app"],
      steps: [
        "Choose one trait and write a topic sentence introducing it as inherited.",
        "Add a specific example or diagram as evidence (a Bb × Bb cross works well).",
        "Chain your explanation with at least two cause/effect transitions (because, as a result, therefore).",
        "Underline or box at least three precise terms (gene, allele, dominant, recessive, genotype, phenotype, offspring)."
      ],
      deliverable: "A developed explainer that teaches how one trait is inherited, with a specific example, 2+ cause/effect transitions, and 3+ underlined precise terms.",
      choiceBoard: [
        "Design a labeled explainer poster or infographic with an example diagram.",
        "Write a short 'how it works' article with a heading, a Punnett example, and linked reasoning.",
        "Record a 60-second explainer video that develops the idea with an example and transitions."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Trait Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g7.spring.ela.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Which revision turns a LIST of facts into a LINKED cause/effect explanation?",
          choices: [
            "The rabbit has two recessive alleles. The fur is white. The parents were carriers.",
            "White fur looks nice, and the rabbit is cute.",
            "The rabbit is white. White is a color. Rabbits can be white.",
            "Because the rabbit inherited two recessive alleles, one from each carrier parent, no dominant allele is present; as a result, it shows the white-fur phenotype."
          ],
          answerIndex: 3,
          explanation: "The second option uses cause/effect transitions ('because,' 'as a result') and precise terms to LINK the facts into a chain of reasoning, instead of listing them separately.",
          hintLadder: [
            "Which option connects the facts instead of listing them?",
            "Look for transitions like 'because' and 'as a result.'",
            "The linked version explains WHY the fur is white."
          ]
        },
        {
          id: "g7.spring.ela.w4.d5.arena2",
          type: "short_answer",
          stem: "Rewrite this vague sentence into a developed, precise cause/effect explanation with a transition and at least two precise terms: 'The puppy is spotted like its dad.'",
          rubric: {
            level3: "Rewrites it with a cause/effect transition AND at least two precise terms (allele/gene/inherited/dominant/genotype/etc.), accurately explaining the inheritance and developing beyond the vague original.",
            level2: "Improves the sentence but is missing a clear transition or uses fewer than two precise terms.",
            level1: "Stays vague or is scientifically inaccurate."
          },
          exemplar: "The puppy inherited a dominant spotted-coat allele from its father; as a result, even a single copy of that allele produces the spotted phenotype, therefore the puppy shows the same spotted coat as its dad.",
          hintLadder: [
            "Name what the puppy inherited using a precise term (allele/gene).",
            "Add a cause/effect transition like 'as a result' or 'therefore.'",
            "Explain WHY the spotted trait shows (dominant allele)."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cause-and-Effect Chain",
      prompt:
        "Build a chain with your body: push one hand forward as the 'cause,' then pop the other hand up as the 'effect,' then link a third motion as the 'result.' Do the three-link chain slowly 5 times, saying 'because... as a result... therefore' as you move, then shake your arms out.",
      scienceTieIn: "Linking three motions in a row mirrors chaining cause and effect across sentences — each transition carries the reader from one idea to the next, just as alleles lead to a genotype and then a phenotype.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "This week you turned facts into a developed, linked explanation. Write about why chaining ideas with transitions — instead of just listing facts — helps a reader actually understand and remember what you taught.",
      badge: { id: "g7-spring-evidence-explainer", name: "Evidence Explainer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
