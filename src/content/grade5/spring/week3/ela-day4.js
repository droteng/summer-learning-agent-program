// Grade 5 ELA/Writing — Spring Expedition, Week 3 (Life Cycles), Day 4.
// Topic: sequence / explanatory writing — explain a life cycle in order.
// Grade 5 counterpart of springG6ElaW3D4: same topic, pitched down with
// shorter passages, vocab support, and paragraph frames.

export const springG5ElaW3D4 = {
  id: "g5.spring.ela.w3.d4",
  season: "spring",
  gradeLevel: 5,
  weekNumber: 3,
  dayNumber: 4,
  subject: "ELA/Writing",
  topic: "Sequence and explanatory writing — explain a life cycle in order",
  topicTag: "sequence-writing",
  estimatedMinutes: 60, // full Daily Hour
  standardsRefs: ["CCSS.ELA-LITERACY.W.5.2", "CCSS.ELA-LITERACY.W.5.2.C"],
  hook: "Knowing a life cycle in your head is not enough — you have to explain it so a reader can follow every step. Today you learn to write the steps IN ORDER, using transition words that guide your reader from one stage to the next.",
  miniLesson: [
    "Writing that explains a process must go in ORDER. The reader should be able to follow each step without getting lost. (Vocab: process = a set of steps that happen in order.)",
    "TRANSITION words show the order of steps: first, next, then, after that, finally. Think of them like signs on a path that say 'this way next.' (Vocab: transition = a word that connects one step to the next.)",
    "A strong process paragraph starts with a TOPIC SENTENCE that names what you will explain, walks through the steps in order, and ends by saying the cycle repeats. Paragraph frame: 'A ___ goes through ___ stages. First, ___. Then, ___. Next, ___. Finally, ___, and the cycle starts again.'"
  ],
  workedExample: {
    prompt: "Put these jumbled notes in order and add a transition word to each: 'butterfly flies away / egg hatches / caterpillar makes a chrysalis / caterpillar eats leaves.'",
    steps: [
      "Find the true first step: the egg hatches.",
      "Add the next step with a transition: 'Then the caterpillar eats leaves.'",
      "Keep going in order: 'After that, it makes a chrysalis.'",
      "Finish with the last step: 'Finally, the adult butterfly flies away.'"
    ],
    answer: "First, the egg hatches. Then the caterpillar eats leaves. After that, it makes a chrysalis. Finally, the butterfly flies away."
  },
  items: [
    {
      id: "g5.spring.ela.w3.d4.q1",
      type: "multiple_choice",
      stem: "Which word is a TRANSITION that shows the order of steps?",
      choices: ["Next", "Because", "Loud", "But"],
      answerIndex: 0,
      explanation: "'Next' tells the reader which step comes after another, so it shows order. 'Because' shows a reason, 'but' shows a difference, and 'loud' just describes something.",
      hintLadder: [
        "Which word tells you what happens AFTER something else?",
        "Think of words you use to list steps in order.",
        "'Next' points to the step that comes after."
      ]
    },
    {
      id: "g5.spring.ela.w3.d4.q2",
      type: "multiple_choice",
      stem: "A student writes: 'The butterfly flies away. The egg hatches. The caterpillar eats leaves.' What is the main problem?",
      choices: [
        "The sentences are too long",
        "It uses too many transitions",
        "There are no describing words",
        "The steps are out of order"
      ],
      answerIndex: 3,
      explanation: "The stages are in the wrong order. The egg hatching should come first, not the butterfly flying away. Process writing must follow the real order.",
      hintLadder: [
        "Does a butterfly fly away BEFORE the egg hatches?",
        "Check if the steps match the real life cycle.",
        "The stages are in the wrong order."
      ],
      misconceptionsTargeted: ["order-doesnt-matter"]
    },
    {
      id: "g5.spring.ela.w3.d4.q3",
      type: "multiple_choice",
      stem: "Which sentence is the BEST topic sentence to start a paragraph explaining a frog's life cycle?",
      choices: [
        "Frogs are green and slimy.",
        "A frog goes through four stages as it grows from egg to adult.",
        "I really like frogs a lot.",
        "The pond was cold that morning."
      ],
      answerIndex: 1,
      explanation: "A good topic sentence tells the reader exactly what the paragraph will explain — here, the stages of a frog's life cycle.",
      hintLadder: [
        "A topic sentence says what the paragraph is about.",
        "Which one tells the reader they will learn the life-cycle stages?",
        "The 'four stages' sentence sets up the whole explanation."
      ]
    },
    {
      id: "g5.spring.ela.w3.d4.q4",
      type: "short_answer",
      stem: "Write 3–4 sentences explaining a plant's life cycle IN ORDER, using at least two transition words (like first, then, next, after that, finally). Frame: 'First, ___. Then, ___. Next, ___. Finally, ___.'",
      rubric: {
        level3: "Explains the stages in correct order (seed → sprouts/germinates → grows → flowers → new seed) AND uses at least two clear transition words.",
        level2: "Order is mostly right but uses fewer than two transitions, or one stage is out of place.",
        level1: "Out of order, unclear, or no transitions."
      },
      exemplar: "First, a seed is planted and gets water and sunlight. Then it sprouts roots and a little stem. Next, the plant grows leaves and makes a flower. Finally, the flower makes new seeds, and those seeds start the cycle again.",
      hintLadder: [
        "Start with the seed and end with a new seed.",
        "Put a transition word at the front of each new step.",
        "Read it aloud to check a reader could follow the order."
      ]
    },
    {
      id: "g5.spring.ela.w3.d4.q5",
      type: "short_answer",
      stem: "Why do transition words make process or life-cycle writing easier to understand? Explain in 2–3 sentences.",
      rubric: {
        level3: "Explains that transitions show the order of the steps so the reader can follow the process without getting lost or confused.",
        level2: "Gives a partial reason (like 'they connect sentences') but does not mention showing the order.",
        level1: "Restates the question or is off-topic."
      },
      exemplar: "Transition words like 'first' and 'then' act like signs on a path. They tell the reader which step comes next, so the steps stay in order and no one gets confused about what happens when.",
      hintLadder: [
        "What do words like 'first' and 'then' tell the reader?",
        "How would the writing feel WITHOUT them?",
        "Connect transitions to following the order clearly."
      ]
    }
  ],
  reflectionPrompt: "Think of something you know how to do in steps — planting a seed, tying your shoes, or a game. Which transition words would help you explain it clearly to someone else?",
  misconceptionBank: [
    {
      id: "order-doesnt-matter",
      label: "Thinks step order doesn't matter in explanatory writing",
      description: "Writes process steps in any order that comes to mind, thinking the reader will figure it out.",
      coachMove: "Have them read their steps aloud and try to actually DO them in that order. If a step cannot work yet, it is out of place — and the reader would be confused too."
    }
  ],
  dailyHour: {
    warmUp: {
      type: "riddle",
      title: "Scramble the Steps",
      prompt:
        "Here are a butterfly's steps out of order: 'flies away,' 'makes a chrysalis,' 'egg hatches,' 'eats leaves.' Put them in the right order and add a transition word to the front of each. Which step MUST come first?",
      answer:
        "The egg hatching must come first. In order with transitions: First, the egg hatches. Then the caterpillar eats leaves. After that, it makes a chrysalis. Finally, the butterfly flies away.",
      estimatedMinutes: 5
    },
    creativeLab: {
      title: "Creative Lab: Life-Cycle How-To Guide",
      challenge:
        "Write a clear 'how a ___ grows' guide that explains a life cycle in order. Use a topic sentence, at least three transition words, and end by saying the cycle repeats. Add small labeled sketches if you like.",
      materials: ["Paper & pencil", "OR a writing app"],
      steps: [
        "Pick your living thing (butterfly, frog, plant, ladybug).",
        "Write a topic sentence naming what you will explain.",
        "Walk through each stage in order, starting each one with a transition word.",
        "End by explaining how the cycle loops back to the start."
      ],
      deliverable: "A short ordered guide to a life cycle with a topic sentence, 3+ transitions, and an ending that shows the cycle repeats.",
      choiceBoard: [
        "Write the how-to guide as a labeled paragraph.",
        "Make a step-by-step 'zine' with one stage per panel.",
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
          id: "g5.spring.ela.w3.d4.arena1",
          type: "multiple_choice",
          stem: "Which revision BEST fixes these sentences so the steps flow in order? 'The plant makes seeds. The seed sprouts. The plant grows and flowers.'",
          choices: [
            "The plant makes seeds, and sprouts, and grows.",
            "The plant flowers because it makes seeds first.",
            "First the seed sprouts, then the plant grows and flowers, and finally it makes new seeds.",
            "Seeds, plant, flower, sprout."
          ],
          answerIndex: 2,
          explanation: "This version puts the stages in the correct order (sprout → grow/flower → make seeds) and uses transition words (first, then, finally) to guide the reader.",
          hintLadder: [
            "Which real step comes first — sprouting or making seeds?",
            "Look for the choice that is in correct order.",
            "The right one also uses first/then/finally."
          ]
        },
        {
          id: "g5.spring.ela.w3.d4.arena2",
          type: "short_answer",
          stem: "Rewrite these jumbled notes into 2–3 ordered sentences with transitions: 'frog lays eggs / tadpole grows legs / tadpole hatches / becomes adult frog.'",
          rubric: {
            level3: "Orders the stages correctly (eggs → tadpole hatches → grows legs → adult frog) AND uses at least two transition words in clear sentences.",
            level2: "Mostly correct order but fewer than two transitions, or one stage is out of place.",
            level1: "Out of order or no transitions."
          },
          exemplar: "First, a frog lays eggs in the water. Then the eggs hatch into tadpoles. Next, the tadpoles grow legs, and finally they become adult frogs that can lay their own eggs.",
          hintLadder: [
            "What is the true first step — laying eggs or growing legs?",
            "Put all four stages in order before writing.",
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
      scienceTieIn: "Matching each transition word with its own movement builds stronger memory — your brain remembers a sequence better when your body helps act it out.",
      estimatedMinutes: 5
    },
    reflectAndReward: {
      journalPrompt:
        "What is one thing you could now explain clearly to a younger kid, step by step? List the transition words you would use to keep them from getting lost.",
      badge: { id: "g5-spring-sequence-storyteller", name: "Sequence Storyteller", emoji: "✍️" },
      estimatedMinutes: 7
    }
  }
};
