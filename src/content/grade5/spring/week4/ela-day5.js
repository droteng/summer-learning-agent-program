// Grade 5 ELA/Writing — Spring Expedition, Week 4 (Genetics for Kids), Day 5.
// Topic: informational writing — explain how a trait is inherited, using
// cause/effect and simple science vocabulary. Grade-5 depth: shorter passages,
// vocab support, simple inherited-trait language (no alleles/ratios).

export const springG5ElaW4D5 = {
  id: "g5.spring.ela.w4.d5",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 4,
  dayNumber: 5,
  subject: "ELA/Writing",
  topic: "Informational writing — explain how a trait is inherited",
  topicTag: "informational-cause-effect",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.2.C"],
  hook: "This week you learned how baby plants and animals get traits from their parents. Now it's your turn to be the teacher: today you write clear informational sentences that explain HOW a trait is passed down — using cause and effect and exact science words.",
  miniLesson: [
    "Informational writing teaches or explains something using facts. It is not a story and not your opinion. Vocabulary: INFORMATIONAL = writing that explains with facts.",
    "Cause and effect links WHY something happens to WHAT happens. Signal words like 'because,' 'so,' and 'as a result' show the link. Vocabulary: CAUSE = the reason; EFFECT = what happens.",
    "Exact science words make your writing clear. Words like TRAIT, OFFSPRING, INHERIT, and PARENT are more exact than 'stuff' or 'thing.' Changing 'stuff' to 'trait' turns a fuzzy sentence into a clear one."
  ],
  workedExample: {
    prompt: "Turn this fuzzy sentence into a clear cause/effect explanation: 'The baby plant was purple like its parents.'",
    steps: [
      "Name the cause with an exact word: the parent plants passed down the purple-flower trait.",
      "Add a signal word: 'because' or 'so.'",
      "State the effect clearly: the offspring inherited the purple trait.",
      "Put it together: 'Because both parent plants passed down the purple-flower trait, the offspring inherited purple flowers.'"
    ],
    answer: "Because both parent plants passed down the purple-flower trait, the offspring inherited purple flowers."
  },
  items: [
    {
      id: "g5.spring.ela.w4.d5.q1",
      type: "multiple_choice",
      stem: "What is the main job of INFORMATIONAL writing?",
      choices: [
        "To tell an exciting made-up story",
        "To sell someone a toy",
        "To argue that your opinion is best",
        "To teach or explain something clearly with facts"
      ],
      answerIndex: 3,
      explanation: "Informational writing explains or teaches using facts, not stories or opinions.",
      hintLadder: [
        "It's not a story and not an opinion.",
        "Its job is to explain or teach.",
        "It informs the reader with facts."
      ]
    },
    {
      id: "g5.spring.ela.w4.d5.q2",
      type: "multiple_choice",
      stem: "Which word is a CAUSE-AND-EFFECT signal word?",
      choices: [
        "Meanwhile",
        "Because",
        "For example",
        "Also"
      ],
      answerIndex: 1,
      explanation: "'Because' links a cause to its effect. The others show time, examples, or extra details.",
      hintLadder: [
        "You want a word that connects a reason to a result.",
        "Which word answers 'why'?",
        "'Because' shows cause and effect."
      ]
    },
    {
      id: "g5.spring.ela.w4.d5.q3",
      type: "multiple_choice",
      stem: "Which sentence uses EXACT science words to explain how a trait is passed down?",
      choices: [
        "The baby got its looks from some stuff inside it.",
        "The puppy just looks like its mom somehow.",
        "The offspring inherited the floppy-ear trait from its parent, so it has floppy ears too.",
        "It happened for no reason at all."
      ],
      answerIndex: 2,
      explanation: "It uses exact words — offspring, inherited, trait — and a cause/effect word ('so'), so the explanation is clear.",
      hintLadder: [
        "Which sentence uses exact words like 'trait' and 'inherited'?",
        "Look for the sentence that explains HOW.",
        "The one with 'inherited the floppy-ear trait...so' is clear."
      ],
      misconceptionsTargeted: ["vague-equals-informational"]
    },
    {
      id: "g5.spring.ela.w4.d5.q4",
      type: "short_answer",
      stem: "Write ONE cause-and-effect sentence that explains how an offspring gets a trait from its parent. Use a signal word (because/so) AND at least one exact word (trait, inherit, offspring, or parent).",
      rubric: {
        level3: "Writes a clear cause→effect sentence using a signal word AND at least one exact science word, correctly showing that a trait is passed from parent to offspring.",
        level2: "Has cause and effect OR an exact word but is missing one, or the science is slightly off.",
        level1: "No clear cause/effect link and no exact vocabulary."
      },
      exemplar: "Because the parent cat had orange fur, the offspring inherited the orange-fur trait.",
      hintLadder: [
        "Start with the cause: what trait did the parent have?",
        "Add 'because' or 'so' to link it to the result.",
        "Use an exact word like 'trait' or 'inherited.'"
      ]
    },
    {
      id: "g5.spring.ela.w4.d5.q5",
      type: "short_answer",
      stem: "Write a short informational paragraph (3-4 sentences) explaining how ONE trait (like fur color or flower color) is passed from a parent to its offspring. Use cause/effect and at least two exact science words.",
      rubric: {
        level3: "Clear informational paragraph that explains how the trait is inherited, with correct cause/effect and at least two exact words (e.g., trait, offspring, inherit, parent), organized in order.",
        level2: "Explains the idea but is missing clear cause/effect OR uses fewer than two exact words, or has a small science mistake.",
        level1: "Fuzzy, opinion-based, or scientifically incorrect."
      },
      exemplar: "Fur color is a trait that a parent animal passes down to its offspring. When a cat has kittens, it hands down its traits to them. Because the parent cat had orange fur, the offspring inherited the orange-fur trait. That is why the kittens look a lot like their parent.",
      hintLadder: [
        "Name your trait in the first sentence.",
        "Explain the cause (the parent's trait) and the effect (the offspring shows it).",
        "Use at least two exact words and a signal word like 'because' or 'so.'"
      ]
    }
  ],
  reflectionPrompt: "Which was harder in your writing — using the exact science words, or making the cause and effect clear? Why?",
  misconceptionBank: [
    {
      id: "vague-equals-informational",
      label: "Thinks fuzzy writing counts as informational",
      description: "Believes that just mentioning a topic ('the baby looks like its parents') explains it, without a clear cause/effect or exact words.",
      coachMove: "Ask: 'Does this sentence teach HOW or WHY it happens? Which exact word would make it clearer?' Swap fuzzy words like 'stuff' for exact words like 'trait.'"
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Fuzzy or Clear?",
      prompt:
        "Two sentences explain the same idea: (A) 'The plant is purple because of stuff from its parents.' (B) 'The plant is purple because it inherited the purple-flower trait from its parents.' Which one teaches a reader more — and what makes it clearer?",
      answer:
        "(B) is clearer. It uses exact words (inherited, trait) and a real cause/effect link, so the reader actually learns HOW the trait was passed down. (A) is fuzzy — 'stuff' explains nothing.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Trait Explainer Card",
      challenge:
        "Make a mini 'explainer' — a card, poster, or drawing — that teaches how ONE trait is passed from a parent to its offspring. It must use cause/effect and at least three exact science words, so a younger kid could understand it.",
      materials: ["Paper & markers, OR a drawing app"],
      steps: [
        "Choose one trait (fur color, flower color, or a made-up creature trait).",
        "Write a clear cause/effect sentence telling how it is passed down.",
        "Underline or box at least three exact words you used (trait, offspring, inherit, parent).",
        "Add a simple drawing that shows the parent and the offspring."
      ],
      deliverable: "An explainer card or poster that teaches how one trait is passed down, using cause/effect and 3+ underlined exact words.",
      choiceBoard: [
        "Design a labeled explainer card or poster.",
        "Write a short 'how it works' page with a heading and one drawing.",
        "Record a 30-second explainer video teaching how your chosen trait is passed down."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Trait Explainer Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.spring.ela.w4.d5.arena1",
          type: "multiple_choice",
          stem: "Which sentence is the STRONGEST informational cause/effect explanation?",
          choices: [
            "Because the parent rabbits had white fur, the offspring inherited the white-fur trait.",
            "White fur looks pretty on a rabbit.",
            "The rabbit's fur is just white, that's all.",
            "The rabbit's fur is a mystery nobody can explain."
          ],
          answerIndex: 0,
          explanation: "It uses a cause/effect word ('because'), exact words (parent, offspring, inherited, trait), and clearly explains how the trait was passed down.",
          hintLadder: [
            "Which one actually explains HOW and WHY?",
            "Look for a cause/effect word plus exact words.",
            "The 'because...inherited the white-fur trait' sentence is strongest."
          ]
        },
        {
          id: "g5.spring.ela.w4.d5.arena2",
          type: "short_answer",
          stem: "Take this fuzzy sentence and rewrite it as a clear informational cause/effect sentence: 'The puppy is spotted like its dad.'",
          rubric: {
            level3: "Rewrites it with a cause/effect signal word AND exact words (trait/inherit/offspring/parent), clearly explaining that the trait was passed down.",
            level2: "Improves the sentence but is missing either clear cause/effect or exact vocabulary.",
            level1: "Stays fuzzy or is scientifically incorrect."
          },
          exemplar: "Because the parent dog had a spotted coat, the puppy inherited the spotted-coat trait from its dad.",
          hintLadder: [
            "What trait did the puppy inherit, and from whom?",
            "Add a cause/effect word like 'because.'",
            "Use an exact word like 'trait' or 'inherited.'"
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Cause-and-Effect Chain",
      prompt:
        "Make your body a cause-and-effect chain: push one hand forward (the 'cause'), then let your other hand pop up in response (the 'effect'). Do it slowly 5 times, saying 'cause... so... effect' as you move. Then shake both arms out.",
      scienceTieIn: "Linking one motion to the next is like cause-and-effect writing — one clear idea leads to the next, just like a parent's trait leads to the offspring's trait.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "You explained a science idea in your own words this week. Write about why using the EXACT word (like 'trait') helps a reader understand you better than a fuzzy word (like 'stuff').",
      badge: { id: "g5-spring-trait-explainer", name: "Trait Explainer", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
