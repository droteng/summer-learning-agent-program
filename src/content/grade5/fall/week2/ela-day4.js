// Grade 5 ELA/Writing — Fall Expedition, Week 2 (Ecosystems & Food Webs),
// Day 4. Grade 5 counterpart of g6.fall.ela.w2.d4: informational writing —
// explain how energy flows clearly. Shorter passages and more vocab support.

export const fallG5ElaW2D4 = {
  id: "g5.fall.ela.w2.d4",
  season: "fall",
  gradeLevel: 5,
  weekNumber: 2,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Explain it clearly — informational writing",
  topicTag: "informational-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.2.C"],
  hook: "Knowing how a food web works is one thing. Explaining it so a younger kid understands is another. Today you turn ecosystem science into clear informational writing.",
  miniLesson: [
    "Informational writing teaches. Start with a clear topic sentence, then add facts in an order that makes sense. (Topic sentence = tells what the paragraph is about.)",
    "Use transition words to link your ideas: first, next, then, because, as a result. (Transition = a word that connects ideas.)",
    "Define hard words right when you use them, and give an example your reader can picture."
  ],
  workedExample: {
    prompt: "Write a clear topic sentence to begin a paragraph explaining a food chain.",
    steps: [
      "Name the subject: a food chain.",
      "Say what the paragraph will explain: how energy moves between living things.",
      "Keep it to one clear sentence a younger reader could follow.",
      "Result: a focused topic sentence to build the rest of the paragraph on."
    ],
    answer: "A food chain shows how energy moves from one living thing to the next as they eat each other."
  },
  items: [
    {
      id: "g5.fall.ela.w2.d4.q1",
      type: "multiple_choice",
      stem: "Which is the BEST topic sentence for a paragraph about decomposers?",
      choices: [
        "Decomposers are cool.",
        "There are many things in nature.",
        "Decomposers are living things that break down dead plants and animals and put nutrients back in the soil.",
        "I like mushrooms."
      ],
      answerIndex: 2,
      explanation: "It names the subject and clearly says what the paragraph will explain.",
      hintLadder: [
        "A topic sentence names the subject AND tells the point.",
        "Which one tells you what the paragraph is about?",
        "Clear and specific beats vague or personal."
      ]
    },
    {
      id: "g5.fall.ela.w2.d4.q2",
      type: "multiple_choice",
      stem: "Which transition word best shows a CAUSE-AND-EFFECT connection?",
      choices: ["meanwhile", "as a result", "for example", "in the end"],
      answerIndex: 1,
      explanation: "'As a result' shows that what comes next is caused by what came before.",
      hintLadder: [
        "You want a word that links a cause to its effect.",
        "Which phrase means 'because of this'?",
        "'As a result' = the effect of a cause."
      ]
    },
    {
      id: "g5.fall.ela.w2.d4.q3",
      type: "multiple_choice",
      stem: "You use the word 'producer' in your explanation. What should you do for a younger reader?",
      choices: [
        "Use it and move on",
        "Explain it right away and give an example, like 'a producer is a plant that makes its own food, such as grass'",
        "Change it to a harder word",
        "Skip explaining anything"
      ],
      answerIndex: 1,
      explanation: "Explaining the word right away with an example keeps your writing clear.",
      hintLadder: [
        "A younger reader may not know 'producer.'",
        "What helps a reader who meets a new word?",
        "Explain it and give an example they can picture."
      ],
      misconceptionsTargeted: ["assumes-reader-knows-terms"]
    },
    {
      id: "g5.fall.ela.w2.d4.q4",
      type: "short_answer",
      stem: "Write 2–3 sentences explaining a simple food chain (grass → rabbit → fox) to a younger student. Use one transition word.",
      rubric: {
        level3: "Clear, in-order explanation of energy moving along the chain, with a transition word and an easy-to-read style.",
        level2: "Mostly clear but missing a transition word OR a little out of order.",
        level1: "Confusing, wrong, or just lists words."
      },
      exemplar: "A food chain shows who eats whom. First, grass makes its own food from sunlight. Then a rabbit eats the grass, and later a fox eats the rabbit, passing the energy along.",
      hintLadder: [
        "Start with a topic sentence.",
        "Go in order: grass, then rabbit, then fox.",
        "Add a transition like 'then' or 'next.'"
      ]
    },
    {
      id: "g5.fall.ela.w2.d4.q5",
      type: "short_answer",
      stem: "Rewrite this unclear sentence so a younger reader understands it: 'Energy decreases by about a tenth at every level of the food chain.'",
      rubric: {
        level3: "Correctly restates the idea (about 10% of the energy passes to the next level, and most is used up) in plain, kid-friendly words.",
        level2: "Simpler but loses or muddles the meaning.",
        level1: "Still confusing or changes the meaning."
      },
      exemplar: "At each step up a food chain, only about one tenth of the energy gets passed on. The rest is used up.",
      hintLadder: [
        "What does 'about a tenth' mean here? (about 10%)",
        "What does 'every level' mean? (each step up the chain)",
        "Say it the way you'd tell a friend."
      ]
    }
  ],
  reflectionPrompt: "Read your food-chain explanation out loud. Would a 7-year-old understand it? What is one word you would make simpler?",
  misconceptionBank: [
    {
      id: "assumes-reader-knows-terms",
      label: "Assumes the reader already knows science words",
      description: "Uses words like 'producer' or 'decomposer' without explaining them.",
      coachMove: "Have them circle every science word and add a quick meaning or example right after each one."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "would_you_rather",
      title: "Clear or Fancy?",
      prompt:
        "You're explaining a food chain to a 7-year-old. Would you rather write 'Energy is transferred between organisms' or 'A rabbit eats grass, then a fox eats the rabbit'? Which one actually teaches better, and why?",
      answer:
        "The second one! Clear, everyday words with an example you can picture teach far better than fancy science words. Good informational writing meets the reader where they are.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: 'For Younger Kids' Field Guide",
      challenge:
        "Write a one-page mini field guide that explains the fall food web to a younger student. Use a clear topic sentence, explain every science word right away, and connect your ideas with transition words.",
      materials: ["Paper & markers, OR a writing/drawing app"],
      steps: [
        "Start with a topic sentence naming what you'll explain.",
        "Explain producers, consumers, and decomposers in order, explaining each word as you use it.",
        "Connect your sentences with transitions (first, then, because, as a result).",
        "Add one simple drawing or example a young reader could picture."
      ],
      deliverable: "A one-page field guide that explains the food web clearly, with explained words and transitions.",
      choiceBoard: [
        "Write the one-page field guide.",
        "Make an illustrated mini-poster with labeled drawings.",
        "Write out a 60-second 'explain it to a kid' video script."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Clear Writing Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g5.fall.ela.w2.d4.arena1",
          type: "multiple_choice",
          stem: "Which sentence best EXPLAINS a word for a younger reader the moment it is used?",
          choices: [
            "Decomposers are needed for nutrient cycling in ecosystems.",
            "Decomposers, like mushrooms, are living things that break down dead plants and animals.",
            "Decomposers do their job well.",
            "You already know what decomposers are."
          ],
          answerIndex: 1,
          explanation: "It explains the word in plain language AND gives an example you can picture (mushrooms), which is exactly what a young reader needs.",
          hintLadder: [
            "Which option explains the word instead of assuming the reader knows it?",
            "Look for a plain meaning plus an example.",
            "The mushrooms sentence both explains and gives an example."
          ]
        },
        {
          id: "g5.fall.ela.w2.d4.arena2",
          type: "short_answer",
          stem: "Rewrite this sentence so a younger reader understands it, keeping the meaning: 'Top predators keep prey populations balanced, which keeps the ecosystem healthy.'",
          rubric: {
            level3: "Plain, correct rewrite that keeps the meaning (top predators stop prey numbers from getting too big, which keeps the ecosystem in balance) using kid-friendly words.",
            level2: "Simpler but loses or muddles part of the meaning.",
            level1: "Still confusing or changes the meaning."
          },
          exemplar: "Top predators, like wolves, stop the animals they hunt from growing to too big a number, which helps the whole ecosystem stay healthy and balanced.",
          hintLadder: [
            "What is a 'top predator'? (the top hunter)",
            "What does 'keep prey populations balanced' mean? (stop prey numbers from getting too big)",
            "Say the whole idea the way you'd tell a younger friend."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "wellness",
      title: "Move & Reset: Read It Aloud",
      prompt:
        "Stand up, shake out your arms, and read your favorite sentence from today's writing OUT LOUD in a clear, slow voice — as if a younger kid is listening. Notice any word that trips you up.",
      scienceTieIn: "Reading aloud uses your hearing and your voice together, which helps your brain catch confusing spots your eyes skip over.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "Think of a time someone explained something to you clearly. What did they do that made it easy to understand — and how could you use that in your own writing?",
      badge: { id: "g5-fall-clear-explainer", name: "Clear Explainer", emoji: "📝" },
      estimatedMinutes: 7
    }
  }
};
