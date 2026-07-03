// Grade 6 ELA/Writing — Spring Expedition, Week 4 (Genetics for Kids), Day 5.
// Topic: informational writing — explain how a trait is inherited, using
// cause/effect structure and precise science vocabulary.

export const springG6ElaW4D5 = {
  id: "g6.spring.ela.w4.d5",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 4,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing — explain how a trait is inherited",
  topicTag: "informational-cause-effect",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.C"],
  hook: "You've spent the week learning how traits pass from parents to offspring. Now you become the explainer: today you write clear informational text that teaches someone else how a trait is inherited — using cause/effect and precise words.",
  miniLesson: [
    "Informational writing teaches or explains. It uses facts, clear organization, and precise vocabulary instead of opinions.",
    "Cause-and-effect structure connects WHY something happens to WHAT results. Signal words like 'because,' 'so,' 'as a result,' and 'therefore' make the link clear.",
    "Precise science vocabulary — gene, allele, dominant, recessive, offspring, inherit — makes an explanation exact. Swapping 'stuff' for 'genes' turns a vague sentence into a clear one."
  ],
  workedExample: {
    prompt: "Turn this vague sentence into a precise cause/effect explanation: 'The baby plant was purple like its parents.'",
    steps: [
      "Name the cause with precise vocabulary: the parents passed on purple-flower genes.",
      "Add a cause/effect signal word: 'because' or 'so.'",
      "State the effect clearly: the offspring inherited the purple trait.",
      "Combine: 'Because both parents passed on purple-flower genes, the offspring inherited the dominant purple trait.'"
    ],
    answer: "Because both parents passed on purple-flower genes, the offspring inherited the dominant purple trait."
  },
  items: [
    {
      id: "g6.spring.ela.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is the main purpose of INFORMATIONAL writing?",
      choices: [
        "To argue for your personal opinion",
        "To teach or explain something clearly with facts",
        "To tell an imaginative story",
        "To persuade someone to buy a product"
      ],
      answerIndex: 1,
      explanation: "Informational writing explains or teaches using facts and clear organization, not opinions or stories.",
      hintLadder: [
        "It's not a story and not an argument.",
        "Its job is to explain or teach.",
        "It informs with facts."
      ]
    },
    {
      id: "g6.spring.ela.w4.d5.q2",
      type: "multiple_choice",
      stem: "Which word signals a CAUSE-AND-EFFECT relationship?",
      choices: [
        "Meanwhile",
        "Because",
        "For example",
        "In addition"
      ],
      answerIndex: 1,
      explanation: "'Because' links a cause to its effect. The others signal time, examples, or added details.",
      hintLadder: [
        "You want a word that connects a reason to a result.",
        "Which word answers 'why'?",
        "'Because' shows cause and effect."
      ]
    },
    {
      id: "g6.spring.ela.w4.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence uses PRECISE science vocabulary to explain inheritance?",
      choices: [
        "The baby got its looks from some stuff inside it.",
        "The offspring inherited the recessive allele from both parents, so it showed the blue-eyed trait.",
        "The kid just looks like the parents somehow.",
        "It happened for no clear reason."
      ],
      answerIndex: 1,
      explanation: "It uses exact terms — offspring, recessive allele, inherited, trait — and a cause/effect link ('so'), making the explanation clear and precise.",
      hintLadder: [
        "Which sentence uses exact genetics words?",
        "Look for terms like allele, offspring, inherited.",
        "The one with 'recessive allele' and 'so' is precise."
      ],
      misconceptionsTargeted: ["vague-equals-informational"]
    },
    {
      id: "g6.spring.ela.w4.d5.q4",
      type: "short_answer",
      stem: "Write ONE cause-and-effect sentence that explains how an offspring inherits a trait. Use a signal word (because/so) AND at least one precise term (genes, alleles, dominant, recessive, or inherit).",
      rubric: {
        level3: "Writes a clear cause→effect sentence using a signal word AND at least one precise genetics term, accurately describing inheritance.",
        level2: "Has cause and effect OR a precise term but is missing one, or the science is slightly off.",
        level1: "No clear cause/effect link and no precise vocabulary."
      },
      exemplar: "Because both parents passed on the dominant brown-eye gene, the offspring inherited brown eyes.",
      hintLadder: [
        "Start with the cause: what did the parents pass on?",
        "Add 'because' or 'so' to link it to the result.",
        "Use a precise word like 'gene' or 'allele.'"
      ]
    },
    {
      id: "g6.spring.ela.w4.d5.q5",
      type: "short_answer",
      stem: "Write a short informational paragraph (3-4 sentences) explaining how a chosen trait (like eye color or flower color) is inherited. Use cause/effect and at least two precise science terms.",
      rubric: {
        level3: "Clear informational paragraph that explains inheritance with correct cause/effect and at least two precise terms (e.g., gene, allele, dominant, recessive, offspring, inherit), organized logically.",
        level2: "Explains the idea but is missing clear cause/effect OR uses fewer than two precise terms, or has a minor science error.",
        level1: "Vague, opinion-based, or scientifically incorrect."
      },
      exemplar: "Eye color is a trait passed from parents to their offspring through genes. Each parent gives one allele for eye color, so the child inherits a pair of alleles. Because the brown-eye allele is dominant, a child with even one brown allele will have brown eyes. Only a child who inherits two recessive blue alleles will have blue eyes.",
      hintLadder: [
        "Pick a trait and name it in your first sentence.",
        "Explain the cause (alleles from each parent) and the effect (the trait shown).",
        "Use at least two precise terms and a signal word like 'because' or 'so.'"
      ]
    }
  ],
  reflectionPrompt: "Which was harder in your writing — being precise with science words, or making the cause and effect clear? Why?",
  misconceptionBank: [
    {
      id: "vague-equals-informational",
      label: "Thinks vague writing counts as informational",
      description: "Believes that mentioning a topic ('the baby looks like its parents') explains it, without precise cause/effect or vocabulary.",
      coachMove: "Ask: 'Does this sentence teach HOW or WHY it happens? Which exact word would make it clearer?' Replace vague words with precise terms."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Vague or Precise?",
      prompt:
        "Two sentences explain the same thing: (A) 'The plant is purple because of stuff from its parents.' (B) 'The plant is purple because it inherited the dominant purple-flower allele from both parents.' Which one would teach a reader more — and what makes it clearer?",
      answer:
        "(B) is clearer. It uses precise terms (inherited, dominant, allele) and a real cause/effect link, so a reader actually learns HOW the trait was passed on. (A) is vague — 'stuff' explains nothing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Trait Explainer Card",
      challenge:
        "Create a mini 'explainer' — a card, poster, or infographic — that teaches how ONE trait is inherited. It must use cause/effect and at least three precise science terms, so a younger student could understand it.",
      materials: ["Paper & markers, OR a slide/drawing app"],
      steps: [
        "Choose one trait (eye color, flower color, a made-up creature trait).",
        "Write a clear cause/effect explanation of how it's inherited.",
        "Underline or box at least three precise terms you used (gene, allele, dominant, recessive, offspring, inherit).",
        "Add a simple drawing or diagram that supports your explanation."
      ],
      deliverable: "An explainer card/poster that teaches how one trait is inherited, using cause/effect and 3+ underlined precise terms.",
      choiceBoard: [
        "Design a labeled explainer card or poster.",
        "Write a short 'how it works' article with a heading and one diagram.",
        "Record a 45-second explainer video teaching how your chosen trait is inherited."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Trait Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence is the STRONGEST informational cause/effect explanation of inheritance?",
          choices: [
            "The rabbit's fur is just white, that's all.",
            "White fur is nice on a rabbit.",
            "Because the rabbit inherited two recessive alleles, one from each parent, it shows the white-fur trait.",
            "The rabbit's fur is a mystery no one can explain."
          ],
          answerIndex: 2,
          explanation: "It uses a cause/effect signal ('because'), precise terms (inherited, recessive alleles, trait), and accurately explains the inheritance — the marks of strong informational writing.",
          hintLadder: [
            "Which one actually explains HOW and WHY?",
            "Look for a cause/effect word plus precise terms.",
            "The 'because...recessive alleles' sentence is strongest."
          ]
        },
        {
          id: "g6.spring.ela.w4.d5.arena2",
          type: "short_answer",
          stem: "Take this vague sentence and rewrite it as a precise informational cause/effect sentence: 'The puppy is spotted like its dad.'",
          rubric: {
            level3: "Rewrites it with a cause/effect signal word AND precise terms (gene/allele/inherited/dominant/etc.), accurately explaining the inheritance.",
            level2: "Improves the sentence but is missing either clear cause/effect or precise vocabulary.",
            level1: "Stays vague or is scientifically inaccurate."
          },
          exemplar: "Because the puppy inherited the spotted-coat gene from its father, it shows the same spotted trait its father has.",
          hintLadder: [
            "What did the puppy inherit, and from whom?",
            "Add a cause/effect word like 'because.'",
            "Use a precise term like 'gene' or 'inherited.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cause-and-Effect Chain",
      prompt:
        "Make your body a cause-and-effect chain: push one hand forward (the 'cause'), then let the other hand pop up in response (the 'effect'). Do it slowly 5 times, saying 'cause... so... effect' as you move. Then shake both arms out.",
      scienceTieIn: "Linking one motion to the next mirrors cause-and-effect writing — one clear idea leads to the next, just like genes lead to inherited traits.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained a science idea in your own words this week. Write about why being PRECISE — using the exact word — helps a reader understand you better than being vague.",
      badge: { id: "spring-trait-explainer", name: "Trait Explainer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
