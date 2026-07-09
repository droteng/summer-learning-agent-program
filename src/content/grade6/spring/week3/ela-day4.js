// Grade 6 ELA/Writing — Spring Expedition, Week 3 (Life Cycles), Day 4.
// Topic: sequence / explanatory writing — explain a life cycle clearly, in
// order, with strong transitions.

export const springG6ElaW3D4 = {
  id: "g6.spring.ela.w3.d4",
  season: "spring",
  gradeLevel: 6,
  weekNumber: 3,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Sequence and explanatory writing — explain a life cycle in order",
  topicTag: "sequence-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.W.6.2", "CCSS.W.6.2.C"],
  hook: "Knowing a life cycle in your head isn't enough — you have to explain it so a reader can follow every step. Today you learn to write it in order, using transition words that guide readers from one stage to the next.",
  miniLesson: [
    "Explanatory writing that describes a process must go in ORDER — the reader should be able to follow each step without getting lost.",
    "TRANSITION words signal sequence: first, next, then, after that, once, finally. They act like signposts between stages.",
    "A strong process paragraph opens with a topic sentence naming what you'll explain, walks through the steps in order, and closes by noting the cycle repeats or the process is complete."
  ],
  workedExample: {
    prompt: "Turn these jumbled notes into one clear ordered sentence: 'butterfly flies away / egg hatches / caterpillar forms chrysalis / caterpillar eats.'",
    steps: [
      "Find the true starting point: the egg hatches.",
      "Add the next step with a transition: 'then the caterpillar eats.'",
      "Continue in order: 'after that, it forms a chrysalis.'",
      "Finish: 'Finally, the adult butterfly flies away.' Result: 'First the egg hatches, then the caterpillar eats, after that it forms a chrysalis, and finally the butterfly flies away.'"
    ],
    answer: "First the egg hatches, then the caterpillar eats, after that it forms a chrysalis, and finally the butterfly flies away."
  },
  items: [
    {
      id: "g6.spring.ela.w3.d4.q1",
      type: "multiple_choice",
      stem: "Which word is a TRANSITION that signals sequence (order of steps)?",
      choices: ["Next", "Because", "Loud", "However"],
      answerIndex: 0,
      explanation: "'Next' tells the reader which step comes after another — it's a sequence transition. 'Because' shows cause, 'however' shows contrast, and 'loud' is just a describing word.",
      hintLadder: [
        "Which word tells you what happens AFTER something else?",
        "Think about words you'd use to list steps in order.",
        "'Next' signals the following step."
      ]
    },
    {
      id: "g6.spring.ela.w3.d4.q2",
      type: "multiple_choice",
      stem: "A student writes: 'The butterfly flies away. The egg hatches. The caterpillar eats leaves.' What is the main problem?",
      choices: [
        "The sentences are too long",
        "It uses too many transitions",
        "There are no describing words",
        "The steps are out of order"
      ],
      answerIndex: 3,
      explanation: "The stages are written out of sequence — the egg hatching should come first, not the adult flying away. Explanatory process writing must follow the correct order.",
      hintLadder: [
        "Does a butterfly fly away BEFORE the egg hatches?",
        "Check whether the steps follow the real life cycle.",
        "The stages are in the wrong order."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g6.spring.ela.w3.d4.q3",
      type: "multiple_choice",
      stem: "Which sentence is the BEST topic sentence to open a paragraph explaining a frog's life cycle?",
      choices: [
        "Frogs are green and slimy.",
        "A frog goes through four main stages as it grows from egg to adult.",
        "I really like frogs a lot.",
        "The pond was cold that morning."
      ],
      answerIndex: 1,
      explanation: "A good topic sentence tells the reader exactly what the paragraph will explain — here, the stages of a frog's life cycle.",
      hintLadder: [
        "A topic sentence previews what the paragraph is about.",
        "Which one tells the reader they'll learn the life-cycle stages?",
        "The 'four main stages' sentence sets up the whole explanation."
      ]
    },
    {
      id: "g6.spring.ela.w3.d4.q4",
      type: "short_answer",
      stem: "Write 3–4 sentences explaining a plant's life cycle IN ORDER, using at least two transition words (like first, then, next, after that, finally).",
      rubric: {
        level3: "Explains the stages in correct order (e.g., seed → germinate → grow → flower → new seed) AND uses at least two clear sequence transitions.",
        level2: "Order is mostly right but uses fewer than two transitions, or one stage is misplaced.",
        level1: "Out of order, unclear, or no transitions."
      },
      exemplar: "First, a seed is planted and gets water and warmth. Then it germinates, sprouting roots and a shoot. Next, the plant grows leaves and forms a flower. After the flower is pollinated, it makes new seeds, and finally those seeds fall to start the cycle again.",
      hintLadder: [
        "Start with the seed and end with a new seed.",
        "Put a transition word at the front of each new step.",
        "Check that a reader could follow every stage in order."
      ]
    },
    {
      id: "g6.spring.ela.w3.d4.q5",
      type: "short_answer",
      stem: "Why do transition words make process or life-cycle writing easier to understand? Explain.",
      rubric: {
        level3: "Explains that transitions signal the order/relationship between steps so the reader can follow the process without getting lost or confused.",
        level2: "Gives a partial reason (e.g., 'they connect sentences') without the order-guiding idea.",
        level1: "Restates the question or is unrelated."
      },
      exemplar: "Transition words like 'first' and 'then' act like signposts. They tell the reader which step comes next, so the process flows in order and no one gets confused about what happens when.",
      hintLadder: [
        "What do words like 'first' and 'then' tell the reader?",
        "How would the writing feel WITHOUT them?",
        "Connect transitions to following the order clearly."
      ]
    }
  ],
  reflectionPrompt: "Think of something you know how to do in steps — planting a seed, tying shoes, a game. Which transition words would help you explain it clearly to someone else?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter in explanatory writing",
      description: "Writes process steps in whatever order they come to mind, assuming the reader will sort it out.",
      coachMove: "Have them read their steps aloud and try to actually DO them in that order. If a step can't work yet, it's misplaced — the reader would be confused too."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Scramble the Steps",
      prompt:
        "Here are a butterfly's steps out of order: 'flies away,' 'forms a chrysalis,' 'egg hatches,' 'eats leaves.' Put them in the right order and add a transition word to the front of each. Which step MUST come first?",
      answer:
        "The egg hatching must come first. In order with transitions: First, the egg hatches. Then the caterpillar eats leaves. After that, it forms a chrysalis. Finally, the butterfly flies away.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Life-Cycle How-To Guide",
      challenge:
        "Write a clear 'how a ___ grows' guide explaining any life cycle in order. Use a topic sentence, at least three sequence transitions, and end by noting the cycle repeats. Add small labeled sketches if you like.",
      materials: ["Paper & pencil", "OR a writing app"],
      steps: [
        "Pick your organism (butterfly, frog, plant, ladybug, etc.).",
        "Write a topic sentence naming what you'll explain.",
        "Walk through each stage in order, starting each with a transition.",
        "End by explaining how the cycle loops back and repeats."
      ],
      deliverable: "A short ordered explanatory guide to a life cycle with a topic sentence, 3+ transitions, and a closing that shows the cycle repeats.",
      choiceBoard: [
        "Write the how-to guide as a labeled paragraph.",
        "Make an illustrated step-by-step 'zine' with one stage per panel.",
        "Record yourself narrating the life cycle in order, then write it down."
      ],
      estimatedMinutes: 15
    },
    challengeArena: {
      title: "Challenge Arena: Sequence Boss",
      bonusXp: 50,
      estimatedMinutes: 10,
      items: [
        {
          id: "g6.spring.ela.w3.d4.arena1",
          type: "multiple_choice",
          stem: "Which revision BEST fixes this sentence so the steps flow in order? 'The plant makes seeds. The seed germinates. The plant grows and flowers.'",
          choices: [
            "The plant makes seeds, and germinates, and grows.",
            "The plant flowers because it makes seeds first.",
            "First the seed germinates, then the plant grows and flowers, and finally it makes new seeds.",
            "Seeds, plant, flower, germinate."
          ],
          answerIndex: 2,
          explanation: "This version puts the stages in the correct order (germinate → grow/flower → make seeds) and uses transitions (first, then, finally) to guide the reader.",
          hintLadder: [
            "Which real step comes first — germinating or making seeds?",
            "Look for the option in correct order.",
            "The right one also uses first/then/finally."
          ]
        },
        {
          id: "g6.spring.ela.w3.d4.arena2",
          type: "short_answer",
          stem: "Rewrite these jumbled notes into 2–3 ordered sentences with transitions: 'frog lays eggs / tadpole grows legs / tadpole hatches / becomes adult frog.'",
          rubric: {
            level3: "Orders the stages correctly (eggs → tadpole hatches → grows legs → adult frog) AND uses at least two sequence transitions in smooth sentences.",
            level2: "Mostly correct order but fewer than two transitions, or one stage misplaced.",
            level1: "Out of order or no transitions."
          },
          exemplar: "First, a frog lays eggs in the water. Then the eggs hatch into tadpoles. Next, the tadpoles grow legs, and finally they become adult frogs that can lay eggs of their own.",
          hintLadder: [
            "What is the true first step — laying eggs or growing legs?",
            "Order all four stages before writing.",
            "Start each new step with a transition word."
          ]
        }
      ]
    },
    moveAndReset: {
      type: "movement",
      title: "Move & Reset: Transition Word Toss",
      prompt:
        "Stand up. Say 'FIRST' and touch your toes, 'NEXT' and reach to the sky, 'THEN' and twist left, 'FINALLY' and twist right. Repeat the sequence twice, a little faster each round.",
      scienceTieIn: "Pairing each transition word with a distinct movement builds stronger memory links — your brain remembers sequences better when your body is part of them.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one process you could now explain clearly to a younger kid, step by step? List the transition words you'd use to keep them from getting lost.",
      badge: { id: "sequence-storyteller", name: "Sequence Storyteller", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
